!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).i18n={},e.Vue)}(this,(function(e,n){"use strict";const t=Symbol("i18n"),o=(e,n,t)=>{const r=e[0];if(~r.indexOf("[")){const[i,s]=r.split("["),l=parseInt(s.replace("]",""));if(l>-1){if(!n[i]&&n[i].length>0&&n[i][l]&&""!==n[i][l])throw new Error("Not Found");return 1===e.length?"string"==typeof n[i][l]?n[i][l]:"":o(e.slice(1),n[i][l],t)}throw new Error(`Not Found: ${r}`)}if(n[e[0]]||""===n[e[0]]){if(1===e.length){let o=n[e[0]].replace(/%{num}/,t.num).replace(/%{msg}/,t.msg);return o.includes("qiangdiao")&&(o=`<div>${o}</div>`),o}return o(e.slice(1),n[e[0]],t)}throw new Error("Not Found")};e.createI18n=e=>{const r=n.ref(e.locale||"en"),i=e.messages;return{messages:i,t:(e,n)=>{const t=i[r.value]||i.en;if("string"!=typeof e)return console.warn("Warn(i18n):","keypath must be a type of string"),"";try{return o(e.split("."),t,n)}catch(n){return console.warn(`Warn(i18n): the keypath '${e}' not found`),""}},setLocale:e=>{i[e]||console.warn(`Warn(i18n): the '${e}' language pack not found, fall back to English language pack`),r.value=e},getLocale:()=>r.value,install(e){const n=this;e.provide(t,n),e.config.globalProperties.$t=n.t,e.config.globalProperties.$i18n=n}}},e.i18nSymbol=t,e.useI18n=function(){return n.inject(t)},Object.defineProperty(e,"__esModule",{value:!0})}));
