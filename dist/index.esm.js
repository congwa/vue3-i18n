import{ref as e,inject as n}from"vue";const t=Symbol("i18n"),r=(e,n,t)=>{const o=e[0];if(~o.indexOf("[")){const[a,i]=o.split("["),l=parseInt(i.replace("]",""));if(l>-1){if(!n[a]&&n[a].length>0&&n[a][l]&&""!==n[a][l])throw new Error("Not Found");return 1===e.length?"string"==typeof n[a][l]?n[a][l]:"":r(e.slice(1),n[a][l],t)}throw new Error(`Not Found: ${o}`)}if(n[e[0]]||""===n[e[0]]){if(1===e.length){let r=n[e[0]].replace(/%{num}/,t.num).replace(/%{msg}/,t.msg);return r.includes("qiangdiao")&&(r=`<div>${r}</div>`),r}return r(e.slice(1),n[e[0]],t)}throw new Error("Not Found")},o=n=>{const o=e(n.locale||"en"),a=n.messages;return{messages:a,t:(e,n)=>{const t=a[o.value]||a.en;if("string"!=typeof e)return console.warn("Warn(i18n):","keypath must be a type of string"),"";try{return r(e.split("."),t,n)}catch(n){return console.warn(`Warn(i18n): the keypath '${e}' not found`),""}},setLocale:e=>{a[e]||console.warn(`Warn(i18n): the '${e}' language pack not found, fall back to English language pack`),o.value=e},getLocale:()=>o.value,install(e){const n=this;e.provide(t,n),e.config.globalProperties.$t=n.t,e.config.globalProperties.$i18n=n}}};function a(){return n(t)}export{o as createI18n,t as i18nSymbol,a as useI18n};
