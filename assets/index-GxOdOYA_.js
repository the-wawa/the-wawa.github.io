(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();const rt=(e,n)=>e===n,ie=Symbol("solid-proxy"),J={equals:rt};let ot=Fe;const U=1,X=2,Te={owned:null,cleanups:null,context:null,owner:null};var p=null;let ne=null,st=null,b=null,E=null,I=null,Y=0;function Ne(e,n){const t=b,r=p,o=e.length===0,s=n===void 0?r:n,l=o?Te:{owned:null,cleanups:null,context:s?s.context:null,owner:s},i=o?e:()=>e(()=>$(()=>z(l)));p=l,b=null;try{return N(i,!0)}finally{b=t,p=r}}function M(e,n){n=n?Object.assign({},J,n):J;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},r=o=>(typeof o=="function"&&(o=o(t.value)),Ie(t,o));return[ke.bind(t),r]}function L(e,n,t){const r=Ue(e,n,!1,U);Z(r)}function S(e,n,t){t=t?Object.assign({},J,t):J;const r=Ue(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=t.equals||void 0,Z(r),ke.bind(r)}function it(e){return N(e,!1)}function $(e){if(b===null)return e();const n=b;b=null;try{return e()}finally{b=n}}function fe(e,n,t){const r=Array.isArray(e);let o,s=t&&t.defer;return l=>{let i;if(r){i=Array(e.length);for(let c=0;c<e.length;c++)i[c]=e[c]()}else i=e();if(s)return s=!1,l;const a=$(()=>n(i,o,l));return o=i,a}}function de(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function Re(){return p}function _e(e,n){const t=p,r=b;p=e,b=null;try{return N(n,!0)}catch(o){ge(o)}finally{p=t,b=r}}function lt(e){const n=b,t=p;return Promise.resolve().then(()=>{b=n,p=t;let r;return N(e,!1),b=p=null,r?r.done:void 0})}function he(e,n){const t=Symbol("context");return{id:t,Provider:ft(t),defaultValue:e}}function je(e){return p&&p.context&&p.context[e.id]!==void 0?p.context[e.id]:e.defaultValue}function me(e){const n=S(e),t=S(()=>le(n()));return t.toArray=()=>{const r=t();return Array.isArray(r)?r:r!=null?[r]:[]},t}function ke(){if(this.sources&&this.state)if(this.state===U)Z(this);else{const e=E;E=null,N(()=>Q(this),!1),E=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Ie(e,n,t){let r=e.value;return(!e.comparator||!e.comparator(r,n))&&(e.value=n,e.observers&&e.observers.length&&N(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=ne&&ne.running;l&&ne.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?E.push(s):I.push(s),s.observers&&qe(s)),l||(s.state=U)}if(E.length>1e6)throw E=[],new Error},!1)),n}function Z(e){if(!e.fn)return;z(e);const n=Y;at(e,e.value,n)}function at(e,n,t){let r;const o=p,s=b;b=p=e;try{r=e.fn(n)}catch(l){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=t+1,ge(l)}finally{b=s,p=o}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Ie(e,r):e.value=r,e.updatedAt=t)}function Ue(e,n,t,r=U,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:p?p.context:null,pure:t};return p===null||p!==Te&&(p.owned?p.owned.push(s):p.owned=[s]),s}function De(e){if(e.state===0)return;if(e.state===X)return Q(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&n.push(e);for(let t=n.length-1;t>=0;t--)if(e=n[t],e.state===U)Z(e);else if(e.state===X){const r=E;E=null,N(()=>Q(e,n[0]),!1),E=r}}function N(e,n){if(E)return e();let t=!1;n||(E=[]),I?t=!0:I=[],Y++;try{const r=e();return ct(t),r}catch(r){t||(I=null),E=null,ge(r)}}function ct(e){if(E&&(Fe(E),E=null),e)return;const n=I;I=null,n.length&&N(()=>ot(n),!1)}function Fe(e){for(let n=0;n<e.length;n++)De(e[n])}function Q(e,n){e.state=0;for(let t=0;t<e.sources.length;t+=1){const r=e.sources[t];if(r.sources){const o=r.state;o===U?r!==n&&(!r.updatedAt||r.updatedAt<Y)&&De(r):o===X&&Q(r,n)}}}function qe(e){for(let n=0;n<e.observers.length;n+=1){const t=e.observers[n];t.state||(t.state=X,t.pure?E.push(t):I.push(t),t.observers&&qe(t))}}function z(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),r=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const s=o.pop(),l=t.observerSlots.pop();r<o.length&&(s.sourceSlots[l]=r,o[r]=s,t.observerSlots[r]=l)}}if(e.owned){for(n=e.owned.length-1;n>=0;n--)z(e.owned[n]);e.owned=null}if(e.cleanups){for(n=e.cleanups.length-1;n>=0;n--)e.cleanups[n]();e.cleanups=null}e.state=0}function ut(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ge(e,n=p){throw ut(e)}function le(e){if(typeof e=="function"&&!e.length)return le(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const r=le(e[t]);Array.isArray(r)?n.push.apply(n,r):n.push(r)}return n}return e}function ft(e,n){return function(r){let o;return L(()=>o=$(()=>(p.context={...p.context,[e]:r.value},me(()=>r.children))),void 0),o}}let dt=!1;function C(e,n){return $(()=>e(n||{}))}function H(){return!0}const ht={get(e,n,t){return n===ie?t:e.get(n)},has(e,n){return n===ie?!0:e.has(n)},set:H,deleteProperty:H,getOwnPropertyDescriptor(e,n){return{configurable:!0,enumerable:!0,get(){return e.get(n)},set:H,deleteProperty:H}},ownKeys(e){return e.keys()}};function re(e){return(e=typeof e=="function"?e():e)?e:{}}function mt(){for(let e=0,n=this.length;e<n;++e){const t=this[e]();if(t!==void 0)return t}}function gt(...e){let n=!1;for(let l=0;l<e.length;l++){const i=e[l];n=n||!!i&&ie in i,e[l]=typeof i=="function"?(n=!0,S(i)):i}if(n)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const a=re(e[i])[l];if(a!==void 0)return a}},has(l){for(let i=e.length-1;i>=0;i--)if(l in re(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(re(e[i])));return[...new Set(l)]}},ht);const t={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const a=Object.getOwnPropertyNames(i);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const f=Object.getOwnPropertyDescriptor(i,u);if(!r[u])r[u]=f.get?{enumerable:!0,configurable:!0,get:mt.bind(t[u]=[f.get.bind(i)])}:f.value!==void 0?f:void 0;else{const h=t[u];h&&(f.get?h.push(f.get.bind(i)):f.value!==void 0&&h.push(()=>f.value))}}}const o={},s=Object.keys(r);for(let l=s.length-1;l>=0;l--){const i=s[l],a=r[i];a&&a.get?Object.defineProperty(o,i,a):o[i]=a?a.value:void 0}return o}let pt=0;function yt(){return`cl-${pt++}`}const wt=e=>`Stale read from <${e}>.`;function Be(e){const n=e.keyed,t=S(()=>e.when,void 0,{equals:(r,o)=>n?r===o:!r==!o});return S(()=>{const r=t();if(r){const o=e.children;return typeof o=="function"&&o.length>0?$(()=>o(n?r:()=>{if(!$(t))throw wt("Show");return e.when})):o}return e.fallback},void 0,void 0)}const bt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],vt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...bt]),At=new Set(["innerHTML","textContent","innerText","children"]),St=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Et=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Pt(e,n){const t=Et[e];return typeof t=="object"?t[n]?t.$:void 0:t}const Ct=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function xt(e,n,t){let r=t.length,o=n.length,s=r,l=0,i=0,a=n[o-1].nextSibling,c=null;for(;l<o||i<s;){if(n[l]===t[i]){l++,i++;continue}for(;n[o-1]===t[s-1];)o--,s--;if(o===l){const u=s<r?i?t[i-1].nextSibling:t[s-i]:a;for(;i<s;)e.insertBefore(t[i++],u)}else if(s===i)for(;l<o;)(!c||!c.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[s-1]&&t[i]===n[o-1]){const u=n[--o].nextSibling;e.insertBefore(t[i++],n[l++].nextSibling),e.insertBefore(t[--s],u),n[o]=t[s]}else{if(!c){c=new Map;let f=i;for(;f<s;)c.set(t[f],f++)}const u=c.get(n[l]);if(u!=null)if(i<u&&u<s){let f=l,h=1,g;for(;++f<o&&f<s&&!((g=c.get(n[f]))==null||g!==u+h);)h++;if(h>u-i){const P=n[l];for(;i<u;)e.insertBefore(t[i++],P)}else e.replaceChild(t[i++],n[l++])}else l++;else n[l++].remove()}}}const ve="_$DX_DELEGATE";function Lt(e,n,t,r={}){let o;return Ne(s=>{o=s,n===document?e():Rt(n,e(),n.firstChild?null:void 0,t)},r.owner),()=>{o(),n.textContent=""}}function Me(e,n,t){let r;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function pe(e,n=window.document){const t=n[ve]||(n[ve]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];t.has(s)||(t.add(s),n.addEventListener(s,kt))}}function ae(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function T(e,n){n==null?e.removeAttribute("class"):e.className=n}function Ot(e,n,t,r){if(r)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const o=t[0];e.addEventListener(n,t[0]=s=>o.call(e,t[1],s))}else e.addEventListener(n,t)}function $t(e,n,t={}){const r=Object.keys(n||{}),o=Object.keys(t);let s,l;for(s=0,l=o.length;s<l;s++){const i=o[s];!i||i==="undefined"||n[i]||(Se(e,i,!1),delete t[i])}for(s=0,l=r.length;s<l;s++){const i=r[s],a=!!n[i];!i||i==="undefined"||t[i]===a||!a||(Se(e,i,!0),t[i]=a)}return t}function Tt(e,n,t){if(!n)return t?ae(e,"style"):n;const r=e.style;if(typeof n=="string")return r.cssText=n;typeof t=="string"&&(r.cssText=t=void 0),t||(t={}),n||(n={});let o,s;for(s in t)n[s]==null&&r.removeProperty(s),delete t[s];for(s in n)o=n[s],o!==t[s]&&(r.setProperty(s,o),t[s]=o);return t}function Ae(e,n={},t,r){const o={};return L(()=>o.children=V(e,n.children,o.children)),L(()=>typeof n.ref=="function"?Nt(n.ref,e):n.ref=e),L(()=>_t(e,n,t,!0,o,!0)),o}function Nt(e,n,t){return $(()=>e(n,t))}function Rt(e,n,t,r){if(t!==void 0&&!r&&(r=[]),typeof n!="function")return V(e,n,r,t);L(o=>V(e,n(),o,t),r)}function _t(e,n,t,r,o={},s=!1){n||(n={});for(const l in o)if(!(l in n)){if(l==="children")continue;o[l]=Ee(e,l,null,o[l],t,s)}for(const l in n){if(l==="children")continue;const i=n[l];o[l]=Ee(e,l,i,o[l],t,s)}}function jt(e){return e.toLowerCase().replace(/-([a-z])/g,(n,t)=>t.toUpperCase())}function Se(e,n,t){const r=n.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],t)}function Ee(e,n,t,r,o,s){let l,i,a,c,u;if(n==="style")return Tt(e,t,r);if(n==="classList")return $t(e,t,r);if(t===r)return r;if(n==="ref")s||t(e);else if(n.slice(0,3)==="on:"){const f=n.slice(3);r&&e.removeEventListener(f,r),t&&e.addEventListener(f,t)}else if(n.slice(0,10)==="oncapture:"){const f=n.slice(10);r&&e.removeEventListener(f,r,!0),t&&e.addEventListener(f,t,!0)}else if(n.slice(0,2)==="on"){const f=n.slice(2).toLowerCase(),h=Ct.has(f);if(!h&&r){const g=Array.isArray(r)?r[0]:r;e.removeEventListener(f,g)}(h||t)&&(Ot(e,f,t,h),h&&pe([f]))}else n.slice(0,5)==="attr:"?ae(e,n.slice(5),t):(u=n.slice(0,5)==="prop:")||(a=At.has(n))||(c=Pt(n,e.tagName))||(i=vt.has(n))||(l=e.nodeName.includes("-"))?(u&&(n=n.slice(5),i=!0),n==="class"||n==="className"?T(e,t):l&&!i&&!a?e[jt(n)]=t:e[c||n]=t):ae(e,St[n]||n,t);return t}function kt(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const r=t[n];if(r&&!t.disabled){const o=t[`${n}Data`];if(o!==void 0?r.call(t,o,e):r.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function V(e,n,t,r,o){for(;typeof t=="function";)t=t();if(n===t)return t;const s=typeof n,l=r!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(n=n.toString()),l){let i=t[0];i&&i.nodeType===3?i.data!==n&&(i.data=n):i=document.createTextNode(n),t=q(e,t,r,i)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||s==="boolean")t=q(e,t,r);else{if(s==="function")return L(()=>{let i=n();for(;typeof i=="function";)i=i();t=V(e,i,t,r)}),()=>t;if(Array.isArray(n)){const i=[],a=t&&Array.isArray(t);if(ce(i,n,t,o))return L(()=>t=V(e,i,t,r,!0)),()=>t;if(i.length===0){if(t=q(e,t,r),l)return t}else a?t.length===0?Pe(e,i,r):xt(e,t,i):(t&&q(e),Pe(e,i));t=i}else if(n.nodeType){if(Array.isArray(t)){if(l)return t=q(e,t,r,n);q(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ce(e,n,t,r){let o=!1;for(let s=0,l=n.length;s<l;s++){let i=n[s],a=t&&t[e.length],c;if(!(i==null||i===!0||i===!1))if((c=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))o=ce(e,i,a)||o;else if(c==="function")if(r){for(;typeof i=="function";)i=i();o=ce(e,Array.isArray(i)?i:[i],Array.isArray(a)?a:[a])||o}else e.push(i),o=!0;else{const u=String(i);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function Pe(e,n,t=null){for(let r=0,o=n.length;r<o;r++)e.insertBefore(n[r],t)}function q(e,n,t,r){if(t===void 0)return e.textContent="";const o=r||document.createTextNode("");if(n.length){let s=!1;for(let l=n.length-1;l>=0;l--){const i=n[l];if(o!==i){const a=i.parentNode===e;!s&&!l?a?e.replaceChild(o,i):e.insertBefore(o,t):a&&i.remove()}else s=!0}}else e.insertBefore(o,t);return[o]}const It=!1;function Ke(){let e=new Set;function n(o){return e.add(o),()=>e.delete(o)}let t=!1;function r(o,s){if(t)return!(t=!1);const l={to:o,options:s,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:a=>{a&&(t=!0),i.navigate(o,{...s,resolve:!1})}});return!l.defaultPrevented}return{subscribe:n,confirm:r}}let ue;function ye(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ue=window.history.state._depth}ye();function Ut(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Dt(e,n){let t=!1;return()=>{const r=ue;ye();const o=r==null?null:ue-r;if(t){t=!1;return}o&&n(o)?(t=!0,window.history.go(-o)):e()}}const Ft=/^(?:[a-z0-9]+:)?\/\//i,qt=/^\/+|(\/)\/+$/g,Ve="http://sr";function K(e,n=!1){const t=e.replace(qt,"$1");return t?n||/^[?#]/.test(t)?t:"/"+t:""}function G(e,n,t){if(Ft.test(n))return;const r=K(e),o=t&&K(t);let s="";return!o||n.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+K(n,!s)}function Bt(e,n){return K(e).replace(/\/*(\*.*)?$/g,"")+K(n)}function We(e){const n={};return e.searchParams.forEach((t,r)=>{n[r]=t}),n}function Mt(e,n,t){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),l=s.length;return i=>{const a=i.split("/").filter(Boolean),c=a.length-l;if(c<0||c>0&&o===void 0&&!n)return null;const u={path:l?"":"/",params:{}},f=h=>t===void 0?void 0:t[h];for(let h=0;h<l;h++){const g=s[h],P=a[h],d=g[0]===":",m=d?g.slice(1):g;if(d&&oe(P,f(m)))u.params[m]=P;else if(d||!oe(P,g))return null;u.path+=`/${P}`}if(o){const h=c?a.slice(-c).join("/"):"";if(oe(h,f(o)))u.params[o]=h;else return null}return u}}function oe(e,n){const t=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return n===void 0?!0:typeof n=="string"?t(n):typeof n=="function"?n(e):Array.isArray(n)?n.some(t):n instanceof RegExp?n.test(e):!1}function Kt(e){const[n,t]=e.pattern.split("/*",2),r=n.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(t===void 0?0:1))}function He(e){const n=new Map,t=Re();return new Proxy({},{get(r,o){return n.has(o)||_e(t,()=>n.set(o,S(()=>e()[o]))),n.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ge(e){let n=/(\/?\:[^\/]+)\?/.exec(e);if(!n)return[e];let t=e.slice(0,n.index),r=e.slice(n.index+n[0].length);const o=[t,t+=n[1]];for(;n=/^(\/\:[^\/]+)\?/.exec(r);)o.push(t+=n[1]),r=r.slice(n[0].length);return Ge(r).reduce((s,l)=>[...s,...o.map(i=>i+l)],[])}const Vt=100,Wt=he(),Je=he();function Ht(e,n=""){const{component:t,load:r,children:o,info:s}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,component:t,load:r,info:s};return Xe(e.path).reduce((a,c)=>{for(const u of Ge(c)){const f=Bt(n,u);let h=l?f:f.split("/*",1)[0];h=h.split("/").map(g=>g.startsWith(":")||g.startsWith("*")?g:encodeURIComponent(g)).join("/"),a.push({...i,originalPath:c,pattern:h,matcher:Mt(h,!l,e.matchFilters)})}return a},[])}function Gt(e,n=0){return{routes:e,score:Kt(e[e.length-1])*1e4-n,matcher(t){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],l=s.matcher(t);if(!l)return null;r.unshift({...l,route:s})}return r}}}function Xe(e){return Array.isArray(e)?e:[e]}function Qe(e,n="",t=[],r=[]){const o=Xe(e);for(let s=0,l=o.length;s<l;s++){const i=o[s];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const a=Ht(i,n);for(const c of a){t.push(c);const u=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!u)Qe(i.children,c.pattern,t,r);else{const f=Gt([...t],r.length);r.push(f)}t.pop()}}}return t.length?r:r.sort((s,l)=>l.score-s.score)}function se(e,n){for(let t=0,r=e.length;t<r;t++){const o=e[t].matcher(n);if(o)return o}return[]}function Jt(e,n){const t=new URL(Ve),r=S(a=>{const c=e();try{return new URL(c,t)}catch{return console.error(`Invalid path ${c}`),a}},t,{equals:(a,c)=>a.href===c.href}),o=S(()=>r().pathname),s=S(()=>r().search,!0),l=S(()=>r().hash),i=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return l()},get state(){return n()},get key(){return i()},query:He(fe(s,()=>We(r())))}}let j;function Xt(){return j}function Qt(e,n,t,r={}){const{signal:[o,s],utils:l={}}=e,i=l.parsePath||(w=>w),a=l.renderPath||(w=>w),c=l.beforeLeave||Ke(),u=G("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[f,h]=M(!1);let g;const P=(w,A)=>{A.value===d()&&A.state===v()||(g===void 0&&h(!0),j=w,g=A,lt(()=>{g===A&&(m(g.value),y(g.state),R[1]([]))}).finally(()=>{g===A&&it(()=>{j=void 0,w==="navigate"&&tt(g),h(!1),g=void 0})}))},[d,m]=M(o().value),[v,y]=M(o().state),D=Jt(d,v),O=[],R=M([]),B=S(()=>typeof r.transformUrl=="function"?se(n(),r.transformUrl(D.pathname)):se(n(),D.pathname)),Ze=He(()=>{const w=B(),A={};for(let x=0;x<w.length;x++)Object.assign(A,w[x].params);return A}),we={pattern:u,path:()=>u,outlet:()=>null,resolvePath(w){return G(u,w)}};return L(fe(o,w=>P("native",w),{defer:!0})),{base:we,location:D,params:Ze,isRouting:f,renderPath:a,parsePath:i,navigatorFactory:et,matches:B,beforeLeave:c,preloadRoute:nt,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:R};function ze(w,A,x){$(()=>{if(typeof A=="number"){A&&(l.go?l.go(A):console.warn("Router integration does not support relative routing"));return}const{replace:ee,resolve:te,scroll:F,state:W}={replace:!1,resolve:!0,scroll:!0,...x},_=te?w.resolvePath(A):G("",A);if(_===void 0)throw new Error(`Path '${A}' is not a routable path`);if(O.length>=Vt)throw new Error("Too many redirects");const be=d();(_!==be||W!==v())&&(It||c.confirm(_,x)&&(O.push({value:be,replace:ee,scroll:F,state:v()}),P("navigate",{value:_,state:W})))})}function et(w){return w=w||je(Je)||we,(A,x)=>ze(w,A,x)}function tt(w){const A=O[0];A&&(s({...w,replace:A.replace,scroll:A.scroll}),O.length=0)}function nt(w,A={}){const x=se(n(),w.pathname),ee=j;j="preload";for(let te in x){const{route:F,params:W}=x[te];F.component&&F.component.preload&&F.component.preload();const{load:_}=F;A.preloadData&&_&&_e(t(),()=>_({params:W,location:{pathname:w.pathname,search:w.search,hash:w.hash,query:We(w),state:null,key:""},intent:"preload"}))}j=ee}}function Yt(e,n,t,r){const{base:o,location:s,params:l}=e,{pattern:i,component:a,load:c}=r().route,u=S(()=>r().path);a&&a.preload&&a.preload();const f=c?c({params:l,location:s,intent:j||"initial"}):void 0;return{parent:n,pattern:i,path:u,outlet:()=>a?C(a,{params:l,location:s,data:f,get children(){return t()}}):t(),resolvePath(g){return G(o.path(),g,u())}}}const Zt=e=>n=>{const{base:t}=n,r=me(()=>n.children),o=S(()=>Qe(r(),n.base||""));let s;const l=Qt(e,o,()=>s,{base:t,singleFlight:n.singleFlight,transformUrl:n.transformUrl});return e.create&&e.create(l),C(Wt.Provider,{value:l,get children(){return C(zt,{routerState:l,get root(){return n.root},get load(){return n.rootLoad},get children(){return[S(()=>(s=Re())&&null),C(en,{routerState:l,get branches(){return o()}})]}})}})};function zt(e){const n=e.routerState.location,t=e.routerState.params,r=S(()=>e.load&&$(()=>{e.load({params:t,location:n,intent:Xt()||"initial"})}));return C(Be,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>C(o,{params:t,location:n,get data(){return r()},get children(){return e.children}})})}function en(e){const n=[];let t;const r=S(fe(e.routerState.matches,(o,s,l)=>{let i=s&&o.length===s.length;const a=[];for(let c=0,u=o.length;c<u;c++){const f=s&&s[c],h=o[c];l&&f&&h.route.key===f.route.key?a[c]=l[c]:(i=!1,n[c]&&n[c](),Ne(g=>{n[c]=g,a[c]=Yt(e.routerState,a[c-1]||e.routerState.base,Ce(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return n.splice(o.length).forEach(c=>c()),l&&i?l:(t=a[0],a)}));return Ce(()=>r()&&t)()}const Ce=e=>()=>C(Be,{get when(){return e()},keyed:!0,children:n=>C(Je.Provider,{value:n,get children(){return n.outlet()}})}),xe=e=>{const n=me(()=>e.children);return gt(e,{get children(){return n()}})};function tn([e,n],t,r){return[e,r?o=>n(r(o)):n]}function nn(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function rn(e){let n=!1;const t=o=>typeof o=="string"?{value:o}:o,r=tn(M(t(e.get()),{equals:(o,s)=>o.value===s.value&&o.state===s.state}),void 0,o=>(!n&&e.set(o),o));return e.init&&de(e.init((o=e.get())=>{n=!0,r[1](t(o)),n=!1})),Zt({signal:r,create:e.create,utils:e.utils})}function on(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}function sn(e,n){const t=nn(`#${e}`);t?t.scrollIntoView():n&&window.scrollTo(0,0)}const ln=new Map;function an(e=!0,n=!1,t="/_server",r){return o=>{const s=o.base.path(),l=o.navigatorFactory(o.base);let i={};function a(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function c(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const m=d.composedPath().find(B=>B instanceof Node&&B.nodeName.toUpperCase()==="A");if(!m||n&&!m.hasAttribute("link"))return;const v=a(m),y=v?m.href.baseVal:m.href;if((v?m.target.baseVal:m.target)||!y&&!m.hasAttribute("state"))return;const O=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||O&&O.includes("external"))return;const R=v?new URL(y,document.baseURI):new URL(y);if(!(R.origin!==window.location.origin||s&&R.pathname&&!R.pathname.toLowerCase().startsWith(s.toLowerCase())))return[m,R]}function u(d){const m=c(d);if(!m)return;const[v,y]=m,D=o.parsePath(y.pathname+y.search+y.hash),O=v.getAttribute("state");d.preventDefault(),l(D,{resolve:!1,replace:v.hasAttribute("replace"),scroll:!v.hasAttribute("noscroll"),state:O&&JSON.parse(O)})}function f(d){const m=c(d);if(!m)return;const[v,y]=m;typeof r=="function"&&(y.pathname=r(y.pathname)),i[y.pathname]||o.preloadRoute(y,{preloadData:v.getAttribute("preload")!=="false"})}function h(d){const m=c(d);if(!m)return;const[v,y]=m;typeof r=="function"&&(y.pathname=r(y.pathname)),!i[y.pathname]&&(i[y.pathname]=setTimeout(()=>{o.preloadRoute(y,{preloadData:v.getAttribute("preload")!=="false"}),delete i[y.pathname]},200))}function g(d){const m=c(d);if(!m)return;const[,v]=m;typeof r=="function"&&(v.pathname=r(v.pathname)),i[v.pathname]&&(clearTimeout(i[v.pathname]),delete i[v.pathname])}function P(d){if(d.defaultPrevented)return;let m=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!m)return;if(!m.startsWith("https://action/")){const y=new URL(m,Ve);if(m=o.parsePath(y.pathname+y.search),!m.startsWith(t))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const v=ln.get(m);if(v){d.preventDefault();const y=new FormData(d.target);d.submitter&&d.submitter.name&&y.append(d.submitter.name,d.submitter.value),v.call({r:o,f:d.target},y)}}pe(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",g),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",P),de(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",P)})}}function cn(e){const n=()=>{const r=window.location.pathname+window.location.search;return{value:e.transformUrl?e.transformUrl(r)+window.location.hash:r+window.location.hash,state:window.history.state}},t=Ke();return rn({get:n,set({value:r,replace:o,scroll:s,state:l}){o?window.history.replaceState(Ut(l),"",r):window.history.pushState(l,"",r),sn(decodeURIComponent(window.location.hash.slice(1)),s),ye()},init:r=>on(window,"popstate",Dt(r,o=>{if(o&&o<0)return!t.confirm(o);{const s=n();return!t.confirm(s.value,{state:s.state})}})),create:an(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:t}})(e)}const Ye=he(),un=["title","meta"],Le=[],Oe=["name","http-equiv","content","charset","media"].concat(["property"]),$e=(e,n)=>{const t=Object.fromEntries(Object.entries(e.props).filter(([r])=>n.includes(r)).sort());return(Object.hasOwn(t,"name")||Object.hasOwn(t,"property"))&&(t.name=t.name||t.property,delete t.property),e.tag+JSON.stringify(t)};function fn(){{const t=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(t,r=>r.parentNode.removeChild(r))}const e=new Map;function n(t){if(t.ref)return t.ref;let r=document.querySelector(`[data-sm="${t.id}"]`);return r?(r.tagName.toLowerCase()!==t.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(t.tag)),r.removeAttribute("data-sm")):r=document.createElement(t.tag),r}return{addTag(t){if(un.indexOf(t.tag)!==-1){const s=t.tag==="title"?Le:Oe,l=$e(t,s);e.has(l)||e.set(l,[]);let i=e.get(l),a=i.length;i=[...i,t],e.set(l,i);let c=n(t);t.ref=c,Ae(c,t.props);let u=null;for(var r=a-1;r>=0;r--)if(i[r]!=null){u=i[r];break}return c.parentNode!=document.head&&document.head.appendChild(c),u&&u.ref&&u.ref.parentNode&&document.head.removeChild(u.ref),a}let o=n(t);return t.ref=o,Ae(o,t.props),o.parentNode!=document.head&&document.head.appendChild(o),-1},removeTag(t,r){const o=t.tag==="title"?Le:Oe,s=$e(t,o);if(t.ref){const l=e.get(s);if(l){if(t.ref.parentNode){t.ref.parentNode.removeChild(t.ref);for(let i=r-1;i>=0;i--)l[i]!=null&&document.head.appendChild(l[i].ref)}l[r]=null,e.set(s,l)}else t.ref.parentNode&&t.ref.parentNode.removeChild(t.ref)}}}}const dn=e=>{const n=fn();return C(Ye.Provider,{value:n,get children(){return e.children}})},hn=(e,n,t)=>(mn({tag:e,props:n,setting:t,id:yt(),get name(){return n.name||n.property}}),null);function mn(e){const n=je(Ye);if(!n)throw new Error("<MetaProvider /> should be in the tree");L(()=>{const t=n.addTag(e);de(()=>n.removeTag(e,t))})}const gn=e=>hn("title",e,{escape:!0,close:!0}),pn="_app_1iiv5_1",yn="_inner_1iiv5_12",wn="_container_1iiv5_22",k={app:pn,inner:yn,container:wn};var bn=Me("<div><div><div><h1>hello :D</h1><p>i am [name]!<br>a software developer mostly fueled by aspiration, interested in the cyber security field<br>here's some thing you may want to know:</p><ul><li>i am 15 years old</li><li>as much as i dislike forced social interaction, i enjoy hanging out with people</li><li>i am transgender (non-binary, questioning if mtf); i go by he/she/they</li><li>i am <b>NOT</b> a native english speaker! however, people say i'm pretty good at it</li><li>random fact: this webpage is my first project made with SolidJS</li></ul><h2>interests</h2><dl><dt>programming</dt><dd>the one and dearest, i mostly write <a href=https://luau-lang.org>Luau</a>, JavaScript & C++ code!</dd><dd>you can find my github at the bottom of this page, if you're interesting in my work</dd><dt>music</dt><dd>i am a <b>HUGE</b> enjoyer of vocaloid! i love MARETU's music</dd></dl><h2>how to contact me</h2><ul><li>discord - <a href=https://discord.com/users/482265556175552512>@robloxplayerbeta.dll</a></li><li>github - <a href=https://github.com/the-wawa>the-wawa</a></li></ul><button>read");const vn=()=>(()=>{var e=bn(),n=e.firstChild,t=n.firstChild,r=t.firstChild,o=r.nextSibling,s=o.nextSibling,l=s.nextSibling,i=l.nextSibling,a=i.nextSibling,c=a.nextSibling,u=c.nextSibling;return L(f=>{var h=k.app,g=k.inner,P=k.container,d=k.button;return h!==f.e&&T(e,f.e=h),g!==f.t&&T(n,f.t=g),P!==f.a&&T(t,f.a=P),d!==f.o&&T(u,f.o=d),f},{e:void 0,t:void 0,a:void 0,o:void 0}),e})();var An=Me("<div><div><div><h1>how did we get here?</h1><p>you tried to access a route that does not exist</p><button>return");const Sn=()=>(()=>{var e=An(),n=e.firstChild,t=n.firstChild,r=t.firstChild,o=r.nextSibling,s=o.nextSibling;return s.$$click=()=>window.location.href=`http://${window.location.host}/`,L(l=>{var i=k.app,a=k.inner,c=k.container;return i!==l.e&&T(e,l.e=i),a!==l.t&&T(n,l.t=a),c!==l.a&&T(t,l.a=c),l},{e:void 0,t:void 0,a:void 0}),e})();pe(["click"]);const En=document.getElementById("root");Lt(()=>[C(dn,{get children(){return C(gn,{children:"tha website"})}}),C(cn,{get children(){return[C(xe,{path:"/",component:vn}),C(xe,{path:"*",component:Sn})]}})],En);
