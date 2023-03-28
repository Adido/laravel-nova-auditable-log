<template>
    <Modal
        @modal-close="handleClose"
        :show="true"
        role="alertdialog"
        size="5xl"
    >
        <form
            @submit.prevent="handleConfirm"
            slot-scope="props"
            class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"
        >
            <ModalHeader>
                {{ __('Restore audit') }}
            </ModalHeader>

            <ModalContent>
                <div class="overflow-hidden overflow-x-auto relative">
                    <table class="w-full divide-y divide-gray-100 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                            <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2" style="max-width: 20px;">
                                <checkbox
                                    v-if="comparison?.length > 0"
                                    @input="toggleSelectAll"
                                    :checked="allSelected"
                                />
                            </th>
                            <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2">
                                {{__('Field')}}
                            </th>
                            <th
                                v-if="resourceName !== 'nova-page'"
                                class="text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2"
                            >
                                {{__('Current')}}
                            </th>
                            <th class="text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2">
                                {{__('Restore to')}}
                            </th>
                        </thead>
                        <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
                            <tr v-for="compare in comparison" class="group">
                                <td style="max-width: 20px;" class="px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                    <input type="checkbox" class="checkbox" v-model="restoreIds" :value="compare.key" />
                                </td>
                                <td class="px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                    {{compare.label}}
                                </td>
                                <td
                                    v-if="resourceName !== 'nova-page'"
                                    class="px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"
                                >
                                    <span
                                        v-if="['svg','mobile_svg','desktop_svg','logo','code','subtitle','content','terms'].includes(compare.key)"
                                        v-html="compare.current"
                                        :class="{'audit-preview-svg audit-restore-preview': ['svg','mobile_svg','desktop_svg','logo','code'].includes(compare.key)}"
                                        :style="{'background-color': this.fields?.color?.value || 'transparent'}"
                                    ></span>
                                    <span v-else>{{ compare.current }}</span>
                                </td>
                                <td class="px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                    <span
                                    v-if="['svg','mobile_svg','desktop_svg','logo','code','subtitle','content','terms'].includes(compare.key)"
                                        v-html="compare.restore"
                                        :class="{'audit-preview-svg audit-restore-preview': ['svg','mobile_svg','desktop_svg','logo','code'].includes(compare.key)}"
                                        :style="{'background-color': this.fields?.color?.value || 'transparent'}"
                                    ></span>
                                    <span v-else>{{ compare.restore }}</span>
                                </td>
                            </tr>
                            <tr v-if="comparison.length == 0">
                                <td colspan="4" class="px-2 py-2 whitespace-nowrap text-center dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900">
                                    {{__('No changes')}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </ModalContent>

            <ModalFooter>
                <div class="ml-auto">
                    <LinkButton
                        type="button"
                        data-testid="cancel-button"
                        dusk="cancel-delete-button"
                        @click.prevent="handleClose"
                        class="mr-3"
                    >
                        {{ __('Cancel') }}
                    </LinkButton>

                    <LoadingButton
                        ref="confirmButton"
                        data-testid="confirm-button"
                        dusk="confirm-delete-button"
                        :processing="working"
                        :disabled="working"
                        component="DangerButton"
                        type="submit"
                    >
                        {{ __('Restore') }}
                    </LoadingButton>
                </div>
            </ModalFooter>
        </form>
    </Modal>
</template>

<script>
    export default {
        props: ['fields', 'audit', 'resourceName', 'resourceId'],

        data(){
            return {
                restoreIds: [],
                selectAll: false,
            };
        },

        methods: {
            handleClose() {
                this.$emit('close')
            },

            async handleConfirm() {
                // If the user is actually restoring certain values
                if(this.restoreIds.length > 0) {
                    // Send the keys to the restore endpoint
                    const response = await Nova.request()
                        .post(`/nova-vendor/auditable-log/audits/${this.resourceName}/${this.resourceId}/${this.audit.id}`, {restore: this.restoreIds});

                    // Keep track of which keys have been updated
                    const updatedProps = this.restoreIds.map(id => {
                        return {
                            key: id,
                            value: response.data.record[id]
                        }
                    });

                    // Trigger restored event
                    this.$emit('restored', updatedProps);
                }

                // Just close the modal
                this.$emit('close');

                // refresh page - event emitting doesn't work with Nova Page
                window.location.reload();
            },

            toggleSelectAll() {
                if(this.allSelected) {
                    this.restoreIds = [];
                    return;
                }

                this.restoreIds = this.comparison.map(c => c.key);
            }
        },

        computed: {
            allSelected(){
                return this.comparison.length === this.restoreIds.length;
            },

            // Returns a list of differences with the current values of the record
            comparison() {
                switch (this.resourceName) {
                    case 'nova-page':
                        const pageValues = this.audit.old_values.attributes ?
                            JSON.parse(this.audit.old_values.attributes) :
                            {};
                        if (this.audit.old_values?.title) pageValues.seo_title = this.audit.old_values.title;

                        return Object.keys(pageValues).map((key) => {
                            return {
                                key,
                                label: key,
                                current: '',
                                restore: pageValues[key],
                            }
                        });

                    default:
                        return Object.keys(this.audit.old_values).map(key => {
                            let fieldKey = key;

                            // handle edge cases where computed fields are displayed on the detail view
                            switch (this.audit.auditable_type) {
                                case 'App\\Models\\Offer':
                                    switch (key) {
                                        case 'code':
                                            fieldKey = 'ComputedField';
                                            break;
                                        case 'retailer_id':
                                            fieldKey = '';
                                            break;
                                        case 'location_id':
                                            fieldKey = 'location';
                                            break;
                                    }
                                    break;
                            }

                            if (typeof this.fields[fieldKey] == 'undefined') return null;
                            if(this.fields[fieldKey].value == this.audit.old_values[key]) return null;

                            return {
                                key,
                                label: this.fields[fieldKey].label,
                                current: this.fields[fieldKey].value,
                                restore: this.audit.old_values[key]
                            }
                        }).filter(field => field !== null);

                }
            }
        },
    }
</script>
