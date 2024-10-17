(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();let M=O;const y=1,m=2,U={owned:null,cleanups:null,context:null,owner:null};var u=null;let P=null,V=null,p=null,h=null,g=null,b=0;function H(e,t){const i=p,o=u,s=e.length===0,n=t===void 0?o:t,r=s?U:{owned:null,cleanups:null,context:n?n.context:null,owner:n},l=s?e:()=>e(()=>C(()=>E(r)));u=r,p=null;try{return x(l,!0)}finally{p=i,u=o}}function N(e,t,i){const o=K(e,t,!1,y);D(o)}function C(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function j(e,t,i){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&x(()=>{for(let s=0;s<e.observers.length;s+=1){const n=e.observers[s],r=P&&P.running;r&&P.disposed.has(n),(r?!n.tState:!n.state)&&(n.pure?h.push(n):g.push(n),n.observers&&G(n)),r||(n.state=y)}if(h.length>1e6)throw h=[],new Error},!1)),t}function D(e){if(!e.fn)return;E(e);const t=b;q(e,e.value,t)}function q(e,t,i){let o;const s=u,n=p;p=u=e;try{o=e.fn(t)}catch(r){return e.pure&&(e.state=y,e.owned&&e.owned.forEach(E),e.owned=null),e.updatedAt=i+1,I(r)}finally{p=n,u=s}(!e.updatedAt||e.updatedAt<=i)&&(e.updatedAt!=null&&"observers"in e?j(e,o):e.value=o,e.updatedAt=i)}function K(e,t,i,o=y,s){const n={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:u?u.context:null,pure:i};return u===null||u!==U&&(u.owned?u.owned.push(n):u.owned=[n]),n}function F(e){if(e.state===0)return;if(e.state===m)return T(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<b);)e.state&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===y)D(e);else if(e.state===m){const o=h;h=null,x(()=>T(e,t[0]),!1),h=o}}function x(e,t){if(h)return e();let i=!1;t||(h=[]),g?i=!0:g=[],b++;try{const o=e();return Q(i),o}catch(o){i||(g=null),h=null,I(o)}}function Q(e){if(h&&(O(h),h=null),e)return;const t=g;g=null,t.length&&x(()=>M(t),!1)}function O(e){for(let t=0;t<e.length;t++)F(e[t])}function T(e,t){e.state=0;for(let i=0;i<e.sources.length;i+=1){const o=e.sources[i];if(o.sources){const s=o.state;s===y?o!==t&&(!o.updatedAt||o.updatedAt<b)&&F(o):s===m&&T(o,t)}}}function G(e){for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];i.state||(i.state=m,i.pure?h.push(i):g.push(i),i.observers&&G(i))}}function E(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),o=e.sourceSlots.pop(),s=i.observers;if(s&&s.length){const n=s.pop(),r=i.observerSlots.pop();o<s.length&&(n.sourceSlots[r]=o,s[o]=n,i.observerSlots[o]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)E(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function W(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function I(e,t=u){throw W(e)}function _(e,t){return C(()=>e(t||{}))}function $(e,t,i){let o=i.length,s=t.length,n=o,r=0,l=0,f=t[s-1].nextSibling,a=null;for(;r<s||l<n;){if(t[r]===i[l]){r++,l++;continue}for(;t[s-1]===i[n-1];)s--,n--;if(s===r){const c=n<o?l?i[l-1].nextSibling:i[n-l]:f;for(;l<n;)e.insertBefore(i[l++],c)}else if(n===l)for(;r<s;)(!a||!a.has(t[r]))&&t[r].remove(),r++;else if(t[r]===i[n-1]&&i[l]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(i[l++],t[r++].nextSibling),e.insertBefore(i[--n],c),t[s]=i[n]}else{if(!a){a=new Map;let d=l;for(;d<n;)a.set(i[d],d++)}const c=a.get(t[r]);if(c!=null)if(l<c&&c<n){let d=r,S=1,L;for(;++d<s&&d<n&&!((L=a.get(t[d]))==null||L!==c+S);)S++;if(S>c-l){const R=t[r];for(;l<c;)e.insertBefore(i[l++],R)}else e.replaceChild(i[l++],t[r++])}else r++;else t[r++].remove()}}}function J(e,t,i,o={}){let s;return H(n=>{s=n,t===document?e():Y(t,e(),t.firstChild?null:void 0,i)},o.owner),()=>{s(),t.textContent=""}}function X(e,t,i){let o;const s=()=>{const r=document.createElement("template");return r.innerHTML=e,i?r.content.firstChild.firstChild:r.content.firstChild},n=t?()=>C(()=>document.importNode(o||(o=s()),!0)):()=>(o||(o=s())).cloneNode(!0);return n.cloneNode=n,n}function Y(e,t,i,o){if(i!==void 0&&!o&&(o=[]),typeof t!="function")return A(e,t,o,i);N(s=>A(e,t(),s,i),o)}function A(e,t,i,o,s){for(;typeof i=="function";)i=i();if(t===i)return i;const n=typeof t,r=o!==void 0;if(e=r&&i[0]&&i[0].parentNode||e,n==="string"||n==="number")if(n==="number"&&(t=t.toString()),r){let l=i[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),i=w(e,i,o,l)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t;else if(t==null||n==="boolean")i=w(e,i,o);else{if(n==="function")return N(()=>{let l=t();for(;typeof l=="function";)l=l();i=A(e,l,i,o)}),()=>i;if(Array.isArray(t)){const l=[],f=i&&Array.isArray(i);if(v(l,t,i,s))return N(()=>i=A(e,l,i,o,!0)),()=>i;if(l.length===0){if(i=w(e,i,o),r)return i}else f?i.length===0?B(e,l,o):$(e,i,l):(i&&w(e),B(e,l));i=l}else if(t.nodeType){if(Array.isArray(i)){if(r)return i=w(e,i,o,t);w(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}}return i}function v(e,t,i,o){let s=!1;for(let n=0,r=t.length;n<r;n++){let l=t[n],f=i&&i[n],a;if(!(l==null||l===!0||l===!1))if((a=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))s=v(e,l,f)||s;else if(a==="function")if(o){for(;typeof l=="function";)l=l();s=v(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||s}else e.push(l),s=!0;else{const c=String(l);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return s}function B(e,t,i=null){for(let o=0,s=t.length;o<s;o++)e.insertBefore(t[o],i)}function w(e,t,i,o){if(i===void 0)return e.textContent="";const s=o||document.createTextNode("");if(t.length){let n=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(s!==l){const f=l.parentNode===e;!n&&!r?f?e.replaceChild(s,l):e.insertBefore(s,i):f&&l.remove()}else n=!0}}else e.insertBefore(s,i);return[s]}var Z=X("<div><h1>Home page</h1><p>Select a prototype to view:</p><a href=https://catherinemei.github.io/benthic-proto-one/>Go to Prototype 1 - Parent Focus with Data Vis</a><br><a href=https://catherinemei.github.io/benthic-proto-two/>Go to Prototype 2 - Flat with Data Vis</a><a href=https://catherinemei.github.io/benthic-proto-three/>Go to Prototype 1 - Parent Focus with Chemistry</a><br><a href=https://catherinemei.github.io/benthic-proto-four/>Go to Prototype 2 - Flat with Chemistry</a><h1>Commands</h1><ul><li>Press Left/Right/Up/Down arrows for traverse nodes in same layer</li><li>Press Shift + Up Arrow to go to parent layer</li><li>Press Shift + Down Arrow to go to first child</li><li>Press Enter to select node");const z=()=>Z(),k=document.getElementById("root");J(()=>_(z,{}),k);
