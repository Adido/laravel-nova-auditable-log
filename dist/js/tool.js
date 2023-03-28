/*! For license information please see tool.js.LICENSE.txt */
(()=>{"use strict";var e,t={45:(e,t,r)=>{const o=Vue;var n={key:0},a={class:"flex flex-row items-center justify-between"},i={class:"font-normal text-xl md:text-xl mb-3"},l={class:"overflow-hidden overflow-x-auto relative"},c={"data-testid":"resource-table",class:"w-full divide-y divide-gray-100 dark:divide-gray-700"},s={class:"bg-gray-50 dark:bg-gray-700"},u=(0,o.createElementVNode)("th",null,null,-1),d={class:"text-left text-gray-500 dark:text-gray-400 py-2"},p={class:"text-left text-gray-500 dark:text-gray-400 py-2"},f={class:"text-left text-gray-500 dark:text-gray-400 py-2"},h={class:"text-left text-gray-500 dark:text-gray-400 py-2"},v={class:"text-left text-gray-500 dark:text-gray-400 py-2"},g={key:0,class:"text-gray-500 py-2",style:{"min-width":"20px"}},y={class:"group bg-white dark:bg-gray-800"},m={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},k={class:"px-4"},w={key:0,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",class:"h-4 text-60 svg-inline--fa fa-save fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},b=[(0,o.createElementVNode)("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},null,-1)],x={key:1,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"save",class:"h-4 text-60 svg-inline--fa fa-save fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},E=[(0,o.createElementVNode)("path",{fill:"currentColor",d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},null,-1)],_={key:2,"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",class:"h-4 text-60 svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},N=[(0,o.createElementVNode)("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},null,-1)],V={key:3,"aria-hidden":"true",focusable:"false","data-prefix":"fas","stroke-width":"1.5",stroke:"currentColor","data-icon":"refresh",class:"h-5 text-60 svg-inline--fa fa-refresh fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},B=[(0,o.createElementVNode)("path",{fill:"none","stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"},null,-1)],L={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},C={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},S={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},O={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},D={class:"my-2"},j={class:"inline-block bg-30 p-1 rounded-sm mr-2 font-bold"},A=["innerHTML"],M={key:1},F={class:"py-2 border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},T={class:"my-2"},I={class:"inline-block bg-30 p-1 rounded-sm mr-2 font-bold"},z=["innerHTML"],P={key:1},H={key:0,class:"py-8 text-center border-t border-gray-100 dark:border-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},G=["onClick"],R=(0,o.createElementVNode)("defs",{id:"defs3455"},null,-1),q=(0,o.createElementVNode)("g",{transform:"matrix(1,0,0,-1,113.89831,1262.6441)",id:"g3449"},[(0,o.createElementVNode)("path",{d:"M 1536,640 Q 1536,484 1475,342 1414,200 1311,97 1208,-6 1066,-67 924,-128 768,-128 589,-128 431.5,-52 274,24 165.5,161 57,298 18,473 q -3,14 7,27 9,12 25,12 h 199 q 23,0 30,-23 Q 329,327 464,227.5 599,128 768,128 872,128 966.5,168.5 1061,209 1130,278 q 69,69 109.5,163.5 40.5,94.5 40.5,198.5 0,104 -40.5,198.5 Q 1199,933 1130,1002 1061,1071 966.5,1111.5 872,1152 768,1152 670,1152 580,1116.5 490,1081 420,1015 L 557,877 q 31,-30 14,-69 -17,-40 -59,-40 H 64 Q 38,768 19,787 0,806 0,832 v 448 q 0,42 40,59 39,17 69,-14 l 130,-129 q 107,101 244.5,156.5 137.5,55.5 284.5,55.5 156,0 298,-61 142,-61 245,-164 103,-103 164,-245 61,-142 61,-298 z",id:"path3451","inkscape:connector-curvature":"0",style:{fill:"currentColor"}})],-1),$={class:"bg-20 rounded-b","per-page":"5","resource-count-label":"1-3 of 3","current-resource-count":"3","all-matching-resource-count":"3"},Q={class:"flex justify-between items-center"},Y=["disabled"],Z={class:"text-sm text-80 px-4"},J=["disabled"];var U={class:"overflow-hidden overflow-x-auto relative"},K={class:"w-full divide-y divide-gray-100 dark:divide-gray-700"},W={class:"bg-gray-50 dark:bg-gray-800"},X={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2",style:{"max-width":"20px"}},ee={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2"},te={key:0,class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2"},re={class:"text-left px-2 whitespace-nowrap uppercase text-gray-500 dark:text-gray-400 text-xxs tracking-wide py-2"},oe={class:"divide-y divide-gray-100 dark:divide-gray-700"},ne={class:"group"},ae={style:{"max-width":"20px"},class:"px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ie=["value"],le={class:"px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ce={key:0,class:"px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},se=["innerHTML"],ue={key:1},de={class:"px-2 py-2 whitespace-nowrap dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},pe=["innerHTML"],fe={key:1},he={key:0},ve={colspan:"4",class:"px-2 py-2 whitespace-nowrap text-center dark:bg-gray-800 group-hover:bg-gray-50 dark:group-hover:bg-gray-900"},ge={class:"ml-auto"};function ye(e){return ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ye(e)}function me(){me=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new N(n||[]);return o(i,"_invoke",{value:b(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function p(){}function f(){}function h(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(V([])));y&&y!==t&&r.call(y,a)&&(v=y);var m=h.prototype=p.prototype=Object.create(v);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==ye(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return B()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=u(e,t,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function V(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:B}}function B(){return{value:void 0,done:!0}}return f.prototype=h,o(m,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},k(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new w(s(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(m),c(m,l,"Generator"),c(m,a,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=V,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:V(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function ke(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(o,n)}const we={props:["fields","audit","resourceName","resourceId"],data:function(){return{restoreIds:[],selectAll:!1}},methods:{handleClose:function(){this.$emit("close")},handleConfirm:function(){var e,t=this;return(e=me().mark((function e(){var r,o;return me().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.restoreIds.length>0)){e.next=6;break}return e.next=3,Nova.request().post("/nova-vendor/auditable-log/audits/".concat(t.resourceName,"/").concat(t.resourceId,"/").concat(t.audit.id),{restore:t.restoreIds});case 3:r=e.sent,o=t.restoreIds.map((function(e){return{key:e,value:r.data.record[e]}})),t.$emit("restored",o);case 6:t.$emit("close"),window.location.reload();case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){ke(a,o,n,i,l,"next",e)}function l(e){ke(a,o,n,i,l,"throw",e)}i(void 0)}))})()},toggleSelectAll:function(){this.allSelected?this.restoreIds=[]:this.restoreIds=this.comparison.map((function(e){return e.key}))}},computed:{allSelected:function(){return this.comparison.length===this.restoreIds.length},comparison:function(){var e,t=this;if("nova-page"===this.resourceName){var r=this.audit.old_values.attributes?JSON.parse(this.audit.old_values.attributes):{};return null!==(e=this.audit.old_values)&&void 0!==e&&e.title&&(r.seo_title=this.audit.old_values.title),Object.keys(r).map((function(e){return{key:e,label:e,current:"",restore:r[e]}}))}return Object.keys(this.audit.old_values).map((function(e){var r=e;if("App\\Models\\Offer"===t.audit.auditable_type)switch(e){case"code":r="ComputedField";break;case"retailer_id":r="";break;case"location_id":r="location"}return void 0===t.fields[r]||t.fields[r].value==t.audit.old_values[e]?null:{key:e,label:t.fields[r].label,current:t.fields[r].value,restore:t.audit.old_values[e]}})).filter((function(e){return null!==e}))}}};var be=r(744);function xe(e){return xe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xe(e)}function Ee(){Ee=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),l=new N(n||[]);return o(i,"_invoke",{value:b(e,r,l)}),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var d={};function p(){}function f(){}function h(){}var v={};c(v,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(V([])));y&&y!==t&&r.call(y,a)&&(v=y);var m=h.prototype=p.prototype=Object.create(v);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function n(o,a,i,l){var c=u(e[o],e,a);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==xe(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}var a;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return a=a?a.then(o,o):o()}})}function b(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return B()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=u(e,t,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var n=u(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function V(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:B}}function B(){return{value:void 0,done:!0}}return f.prototype=h,o(m,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},k(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new w(s(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(m),c(m,l,"Generator"),c(m,a,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=V,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;_(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:V(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function _e(e,t,r,o,n,a,i){try{var l=e[a](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(o,n)}const Ne={props:["resourceName","resourceId","field"],components:{RestoreAuditModal:(0,be.Z)(we,[["render",function(e,t,r,n,a,i){var l=this,c=(0,o.resolveComponent)("ModalHeader"),s=(0,o.resolveComponent)("checkbox"),u=(0,o.resolveComponent)("ModalContent"),d=(0,o.resolveComponent)("LinkButton"),p=(0,o.resolveComponent)("LoadingButton"),f=(0,o.resolveComponent)("ModalFooter"),h=(0,o.resolveComponent)("Modal");return(0,o.openBlock)(),(0,o.createBlock)(h,{onModalClose:i.handleClose,show:!0,role:"alertdialog",size:"5xl"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(){return i.handleConfirm&&i.handleConfirm.apply(i,arguments)}),["prevent"])),"slot-scope":"props",class:"bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden"},[(0,o.createVNode)(c,null,{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Restore audit")),1)]})),_:1}),(0,o.createVNode)(u,null,{default:(0,o.withCtx)((function(){var n;return[(0,o.createElementVNode)("div",U,[(0,o.createElementVNode)("table",K,[(0,o.createElementVNode)("thead",W,[(0,o.createElementVNode)("th",X,[(null===(n=i.comparison)||void 0===n?void 0:n.length)>0?((0,o.openBlock)(),(0,o.createBlock)(s,{key:0,onInput:i.toggleSelectAll,checked:i.allSelected},null,8,["onInput","checked"])):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("th",ee,(0,o.toDisplayString)(e.__("Field")),1),"nova-page"!==r.resourceName?((0,o.openBlock)(),(0,o.createElementBlock)("th",te,(0,o.toDisplayString)(e.__("Current")),1)):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("th",re,(0,o.toDisplayString)(e.__("Restore to")),1)]),(0,o.createElementVNode)("tbody",oe,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(i.comparison,(function(e){var n,i,c,s;return(0,o.openBlock)(),(0,o.createElementBlock)("tr",ne,[(0,o.createElementVNode)("td",ae,[(0,o.withDirectives)((0,o.createElementVNode)("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.restoreIds=e}),value:e.key},null,8,ie),[[o.vModelCheckbox,a.restoreIds]])]),(0,o.createElementVNode)("td",le,(0,o.toDisplayString)(e.label),1),"nova-page"!==r.resourceName?((0,o.openBlock)(),(0,o.createElementBlock)("td",ce,[["svg","mobile_svg","desktop_svg","logo","code","subtitle","content","terms"].includes(e.key)?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,innerHTML:e.current,class:(0,o.normalizeClass)({"audit-preview-svg audit-restore-preview":["svg","mobile_svg","desktop_svg","logo","code"].includes(e.key)}),style:(0,o.normalizeStyle)({"background-color":(null===(n=l.fields)||void 0===n||null===(i=n.color)||void 0===i?void 0:i.value)||"transparent"})},null,14,se)):((0,o.openBlock)(),(0,o.createElementBlock)("span",ue,(0,o.toDisplayString)(e.current),1))])):(0,o.createCommentVNode)("",!0),(0,o.createElementVNode)("td",de,[["svg","mobile_svg","desktop_svg","logo","code","subtitle","content","terms"].includes(e.key)?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,innerHTML:e.restore,class:(0,o.normalizeClass)({"audit-preview-svg audit-restore-preview":["svg","mobile_svg","desktop_svg","logo","code"].includes(e.key)}),style:(0,o.normalizeStyle)({"background-color":(null===(c=l.fields)||void 0===c||null===(s=c.color)||void 0===s?void 0:s.value)||"transparent"})},null,14,pe)):((0,o.openBlock)(),(0,o.createElementBlock)("span",fe,(0,o.toDisplayString)(e.restore),1))])])})),256)),0==i.comparison.length?((0,o.openBlock)(),(0,o.createElementBlock)("tr",he,[(0,o.createElementVNode)("td",ve,(0,o.toDisplayString)(e.__("No changes")),1)])):(0,o.createCommentVNode)("",!0)])])])]})),_:1}),(0,o.createVNode)(f,null,{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",ge,[(0,o.createVNode)(d,{type:"button","data-testid":"cancel-button",dusk:"cancel-delete-button",onClick:(0,o.withModifiers)(i.handleClose,["prevent"]),class:"mr-3"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Cancel")),1)]})),_:1},8,["onClick"]),(0,o.createVNode)(p,{ref:"confirmButton","data-testid":"confirm-button",dusk:"confirm-delete-button",processing:e.working,disabled:e.working,component:"DangerButton",type:"submit"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Restore")),1)]})),_:1},8,["processing","disabled"])])]})),_:1})],32)]})),_:1},8,["onModalClose"])}]])},data:function(){return{audits:[],displayAudits:!1,pagination:{},restore:null,parentFields:[],canRestore:!1}},mounted:function(){var e,t;!0===this.displayAudits&&this.fetchAudits(),this.parentFields=(e=this.$parent.$parent.$.vnode.component.data.panels[0].fields,t={},e.filter((function(e){return""!==e.attribute})).forEach((function(e){if(""!==e.attribute){var r=e.attribute,o=e.value,n=e.name;t[r]={value:o,label:n}}})),t.length!==e.length&&e.filter((function(e){return""===e.attribute&&void 0!==e.dependencies&&e.dependencies.length===e.dependencies.filter((function(e){return e.satisfied})).length})).forEach((function(e){e.fields.forEach((function(e){var r=e.attribute,o=e.value,n=e.name;t[r]={value:o,label:n}}))})),t)},methods:{showAndFetch:function(){this.displayAudits=!0,this.fetchAudits()},close:function(){this.displayAudits=!1},fetchAudits:function(){var e,t=arguments,r=this;return(e=Ee().mark((function e(){var o,n,a;return Ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=t.length>0&&void 0!==t[0]?t[0]:null)||(o="/nova-vendor/auditable-log/audits/".concat(r.resourceName,"/").concat(r.resourceId)),e.prev=2,e.next=5,Nova.request().get(o);case 5:n=e.sent,a=n.data,r.audits=a.audits.data,r.pagination=a.audits,r.canRestore=a.restore,e.next=14;break;case 12:e.prev=12,e.t0=e.catch(2);case 14:case"end":return e.stop()}}),e,null,[[2,12]])})),function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){_e(a,o,n,i,l,"next",e)}function l(e){_e(a,o,n,i,l,"throw",e)}i(void 0)}))})()},formatData:function(e){var t;if("nova-page"===this.resourceName)t=e.attributes?JSON.parse(e.attributes):{},e.title&&(t.seo_title=e.title);else t=e;var r=[];for(var o in t)t.hasOwnProperty(o)&&r.push({name:o,value:t[o]});return r},showRestoreAudit:function(e){this.restore=e},restored:function(e){var t=this;e.forEach((function(e){t.parentFields[e.key]&&(t.parentFields[e.key].value=e.value)})),this.fetchAudits()}}},Ve=(0,be.Z)(Ne,[["render",function(e,t,r,U,K,W){var X=this,ee=(0,o.resolveComponent)("DefaultButton"),te=(0,o.resolveComponent)("sodipodi:namedview"),re=(0,o.resolveComponent)("restore-audit-modal"),oe=(0,o.resolveComponent)("portal");return(0,o.openBlock)(),(0,o.createElementBlock)("div",null,[K.displayAudits?((0,o.openBlock)(),(0,o.createElementBlock)("div",n,[(0,o.createElementVNode)("div",a,[(0,o.createElementVNode)("h2",i,(0,o.toDisplayString)(e.__("Audit Log")),1),K.displayAudits?((0,o.openBlock)(),(0,o.createBlock)(ee,{key:0,class:"btn btn-default btn-primary ml-4 mb-2",onClick:(0,o.withModifiers)(W.close,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("Close Audit Log")),1)]})),_:1},8,["onClick"])):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("table",c,[(0,o.createElementVNode)("thead",s,[(0,o.createElementVNode)("tr",null,[u,(0,o.createElementVNode)("th",d,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("User")),1)]),(0,o.createElementVNode)("th",p,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("Event")),1)]),(0,o.createElementVNode)("th",f,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("Date/Time")),1)]),(0,o.createElementVNode)("th",h,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("Old Values")),1)]),(0,o.createElementVNode)("th",v,[(0,o.createElementVNode)("span",null,(0,o.toDisplayString)(e.__("New Values")),1)]),K.canRestore?((0,o.openBlock)(),(0,o.createElementBlock)("th",g)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("tbody",null,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(K.audits,(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("tr",y,[(0,o.createElementVNode)("td",m,[(0,o.createElementVNode)("div",k,["created"===t.event?((0,o.openBlock)(),(0,o.createElementBlock)("svg",w,b)):(0,o.createCommentVNode)("",!0),"updated"===t.event?((0,o.openBlock)(),(0,o.createElementBlock)("svg",x,E)):(0,o.createCommentVNode)("",!0),"deleted"===t.event?((0,o.openBlock)(),(0,o.createElementBlock)("svg",_,N)):(0,o.createCommentVNode)("",!0),"restored"===t.event?((0,o.openBlock)(),(0,o.createElementBlock)("svg",V,B)):(0,o.createCommentVNode)("",!0)])]),(0,o.createElementVNode)("td",L,(0,o.toDisplayString)(t.user?t.user.name:e.__("console")),1),(0,o.createElementVNode)("td",C,(0,o.toDisplayString)(t.event),1),(0,o.createElementVNode)("td",S,(0,o.toDisplayString)(t.created_at),1),(0,o.createElementVNode)("td",O,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(W.formatData(t.old_values),(function(e){var t,r;return(0,o.openBlock)(),(0,o.createElementBlock)("div",D,[(0,o.createElementVNode)("span",j,(0,o.toDisplayString)(e.name),1),["svg","mobile_svg","desktop_svg","logo","code","subtitle","content","terms"].includes(e.name)?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,innerHTML:e.value,class:"audit-preview-svg",style:(0,o.normalizeStyle)({"background-color":"logo"===e.name?null===(t=X.parentFields)||void 0===t||null===(r=t.color)||void 0===r?void 0:r.value:"transparent"})},null,12,A)):((0,o.openBlock)(),(0,o.createElementBlock)("span",M,(0,o.toDisplayString)(e.value),1))])})),256))]),(0,o.createElementVNode)("td",F,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(W.formatData(t.new_values),(function(e){var t,r;return(0,o.openBlock)(),(0,o.createElementBlock)("div",T,[(0,o.createElementVNode)("span",I,(0,o.toDisplayString)(e.name),1),["svg","mobile_svg","desktop_svg","logo","code","subtitle","content","terms"].includes(e.name)?((0,o.openBlock)(),(0,o.createElementBlock)("span",{key:0,innerHTML:e.value,class:"audit-preview-svg",style:(0,o.normalizeStyle)({"background-color":"logo"===e.name?null===(t=X.parentFields)||void 0===t||null===(r=t.color)||void 0===r?void 0:r.value:"transparent"})},null,12,z)):((0,o.openBlock)(),(0,o.createElementBlock)("span",P,(0,o.toDisplayString)(e.value),1))])})),256))]),K.canRestore?((0,o.openBlock)(),(0,o.createElementBlock)("td",H,["updated"===t.event?((0,o.openBlock)(),(0,o.createElementBlock)("svg",{key:0,onClick:function(e){return W.showRestoreAudit(t)},class:"cursor-pointer w-5 mx-4",style:{"max-width":"20px"},"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 -256 1792 1792",id:"svg3447",version:"1.1","inkscape:version":"0.48.3.1 r9886",width:"100%",height:"100%","sodipodi:docname":"undo_font_awesome.svg"},[R,(0,o.createVNode)(te,{pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1",objecttolerance:"10",gridtolerance:"10",guidetolerance:"10","inkscape:pageopacity":"0","inkscape:pageshadow":"2","inkscape:window-width":"640","inkscape:window-height":"480",id:"namedview3453",showgrid:"false","inkscape:zoom":"0.13169643","inkscape:cx":"896","inkscape:cy":"896","inkscape:window-x":"0","inkscape:window-y":"25","inkscape:window-maximized":"0","inkscape:current-layer":"svg3447"}),q],8,G)):(0,o.createCommentVNode)("",!0)])):(0,o.createCommentVNode)("",!0)])})),256))])])]),(0,o.createElementVNode)("div",$,[(0,o.createElementVNode)("nav",Q,[(0,o.createElementVNode)("button",{disabled:null===K.pagination.prev_page_url,rel:"prev",dusk:"previous",class:(0,o.normalizeClass)(["btn btn-link py-3 px-4 text-80",{"opacity-50":null===K.pagination.prev_page_url,"text-primary":null!==K.pagination.prev_page_url}]),onClick:t[0]||(t[0]=function(e){return W.fetchAudits(K.pagination.prev_page_url)})},(0,o.toDisplayString)(e.__("Previous")),11,Y),(0,o.createElementVNode)("span",Z,(0,o.toDisplayString)(K.pagination.from)+"-"+(0,o.toDisplayString)(K.pagination.to)+" of "+(0,o.toDisplayString)(K.pagination.total),1),(0,o.createElementVNode)("button",{disabled:null===K.pagination.next_page_url,rel:"next",dusk:"next",class:(0,o.normalizeClass)([{"opacity-50":null===K.pagination.next_page_url,"text-primary":null!==K.pagination.next_page_url},"btn btn-link py-3 px-4 text-80"]),onClick:t[1]||(t[1]=function(e){return W.fetchAudits(K.pagination.next_page_url)})},(0,o.toDisplayString)(e.__("Next")),11,J)])])])):(0,o.createCommentVNode)("",!0),!1===K.displayAudits?((0,o.openBlock)(),(0,o.createBlock)(ee,{key:1,onClick:(0,o.withModifiers)(W.showAndFetch,["prevent"])},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.__("View Audit Log")),1)]})),_:1},8,["onClick"])):(0,o.createCommentVNode)("",!0),null!==K.restore?((0,o.openBlock)(),(0,o.createBlock)(oe,{key:2,to:"modals"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(o.Transition,{name:"fade"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)(re,{fields:K.parentFields,resourceName:r.resourceName,resourceId:r.resourceId,audit:K.restore,onClose:t[2]||(t[2]=function(e){return K.restore=null}),onRestored:W.restored},null,8,["fields","resourceName","resourceId","audit","onRestored"])]})),_:1})]})),_:1})):(0,o.createCommentVNode)("",!0)])}]]);Nova.booting((function(e,t,r){e.component("auditable-log",Ve)}))},288:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,n,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,n,a]=e[u],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var s=n();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={103:0,990:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,l,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(c)var u=c(o)}for(t&&t(r);s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self.webpackChunkvendor_auditable_log=self.webpackChunkvendor_auditable_log||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[990],(()=>o(45)));var n=o.O(void 0,[990],(()=>o(288)));n=o.O(n)})();