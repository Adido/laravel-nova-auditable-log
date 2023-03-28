<?php

namespace Devpartners\AuditableLog\Http\Controllers;

use Laravel\Nova\Nova;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use OwenIt\Auditing\Models\Audit;
use Illuminate\Support\Facades\Config;
use Illuminate\Database\Eloquent\Model;
use OwenIt\Auditing\Contracts\Auditable;

class AuditController
{
    public function show(Request $request, $resourceName, $resourceId)
    {
        $record = $this->loadRecord($resourceName, $resourceId);
        $user = $request->user(config('nova.guard'));

        abort_if($user->cant('audit', $record), 403, 'Unable to retrieve audits');

        $audits = $record->audits()
            ->with('user')
            ->orderBy('created_at', 'desc')
            ->paginate();

        return response()->json(['status' => 'OK', 'audits' => $audits, 'restore' => $user->can('audit_restore', $record)]);
    }

    public function restore(Request $request, $resourceName, $resourceId, $auditId)
    {
        $record = $this->loadRecord($resourceName, $resourceId);
        $user = $request->user(config('nova.guard'));

        abort_if($user->cant('audit_restore', $record), 403, 'Unable to restore audits');

        /**
         * @var Audit $auditor
         * @var Audit $audit
         */
        $auditableClass = Config::get('audit.implementation', Audit::class);
        $auditor = new $auditableClass();

        $audit = $record->audits()->where($auditor->getTable() . '.' . $auditor->getKeyName(), $auditId)->firstOrFail();

        switch ($resourceName) {
            case 'nova-page':
                $toRestore = $request->input('restore', []);

                // restore page title
                if (in_array('seo_title', $toRestore)) {
                    $record->title = $audit['old_values']['title'] ?? '';

                    $titleIndex = array_search('seo_title', $toRestore);
                    unset($toRestore[$titleIndex]);
                }

                // restore page attributes
                if ($toRestore) {
                    $recordAttributes = json_decode($record->attributes, true);
                    if (! is_array($recordAttributes)) $recordAttributes = [];

                    $newAttributes = json_decode($audit['old_values']['attributes'] ?? '', true);
                    if (! is_array($newAttributes)) $newAttributes = [];

                    foreach ($toRestore as $field) {
                        if (! isset($newAttributes[$field])) continue;

                        $recordAttributes[$field] = $newAttributes[$field];
                    }

                    $record->attributes = json_encode($recordAttributes);
                }
                break;

            default:
                $record->fill(Arr::only($audit->old_values, $request->input('restore', [])));
                break;
        }

        $record->save();

        return response()->json(['status' => 'OK', 'record' => $record]);
    }

    /**
     * @param $resourceName
     * @param $resourceId
     *
     * @return Auditable|Model
     */
    protected function loadRecord($resourceName, $resourceId)
    {
        switch ($resourceName) {
            case 'nova-page':
                abort_if(is_array($resourceId), 404);

                $source = config('novapage.default_source');
                abort_if($source !== \Whitecube\NovaPage\Sources\Database::class, 404);

                $model = config('novapage.sources.database.model');
                $name = strtr((string) $resourceId, [
                    'route.' => '',
                    'option.' => ''
                ]);
                return $model::where('name', '=', $name)
                    ->firstOrFail();

            default:
                $model = Nova::modelInstanceForKey($resourceName);
                return method_exists($model, "trashed")
                    ? $model::withTrashed()->findOrFail($resourceId)
                    : $model->findOrFail($resourceId);
        }
    }
}
