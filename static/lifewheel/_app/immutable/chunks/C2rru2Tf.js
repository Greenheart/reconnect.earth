import{q as N,ap as P,aq as m,ar as y,as as x,F as g,an as F,a3 as q,B as E,K as B,at as W,D as f,H,m as k,s as S,o as b,t as u,l as _,au as j,av as U,aw as $,p as G}from"./CB7aXofe.js";function re(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const z=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ae(e){return z.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ne(e){return e=e.toLowerCase(),K[e]??e}const Y=["touchstart","touchmove"];function oe(e){return Y.includes(e)}function ie(e,t){if(t){const r=document.body;e.autofocus=!0,N(()=>{document.activeElement===r&&e.focus()})}}let A=!1;function J(){A||(A=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(const t of e.target.elements)t.__on_r?.()})},{capture:!0}))}function se(e,t,r,o=!0){o&&r();for(var n of t)e.addEventListener(n,r);P(()=>{for(var a of t)e.removeEventListener(a,r)})}function I(e){var t=x,r=g;m(null),y(null);try{return e()}finally{m(t),y(r)}}function ue(e,t,r,o=r){e.addEventListener(t,()=>I(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),J()}const Q=new Set,X=new Set;function D(e,t,r,o={}){function n(a){if(o.capture||Z.call(t,a),!a.cancelBubble)return I(()=>r?.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?N(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function ce(e,t,r,o={}){var n=D(t,e,r,o);return()=>{e.removeEventListener(t,n,o)}}function le(e,t,r,o,n){var a={capture:o,passive:n},i=D(e,t,r,a);(t===document.body||t===window||t===document)&&P(()=>{t.removeEventListener(e,i,a)})}function fe(e){for(var t=0;t<e.length;t++)Q.add(e[t]);for(var r of X)r(e)}function Z(e){var t=this,r=t.ownerDocument,o=e.type,n=e.composedPath?.()||[],a=n[0]||e.target,i=0,d=e.__root;if(d){var c=n.indexOf(d);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var T=n.indexOf(t);if(T===-1)return;c<=T&&(i=c)}if(a=n[i]||e.target,a!==t){F(e,"currentTarget",{configurable:!0,get(){return a||r}});var O=x,C=g;m(null),y(null);try{for(var v,L=[];a!==null;){var w=a.assignedSlot||a.parentNode||a.host||null;try{var p=a["__"+o];if(p!==void 0&&(!a.disabled||e.target===a))if(q(p)){var[R,...V]=p;R.apply(a,[e,...V])}else p.call(a,e)}catch(h){v?L.push(h):v=h}if(e.cancelBubble||w===t||w===null)break;a=w}if(v){for(let h of L)queueMicrotask(()=>{throw h});throw v}}finally{e.__root=t,delete e.currentTarget,m(O),y(C)}}}let s;function de(){s=void 0}function _e(e){let t=null,r=f;var o;if(f){for(t=u,s===void 0&&(s=_(document.head));s!==null&&(s.nodeType!==8||s.data!==H);)s=k(s);s===null?S(!1):s=b(k(s))}f||(o=document.head.appendChild(E()));try{B(()=>e(o),W)}finally{r&&(S(!0),s=u,b(t))}}function M(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function l(e,t){var r=g;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function ve(e,t){var r=(t&U)!==0,o=(t&$)!==0,n,a=!e.startsWith("<!>");return()=>{if(f)return l(u,null),u;n===void 0&&(n=M(a?e:"<!>"+e),r||(n=_(n)));var i=o||j?document.importNode(n,!0):n.cloneNode(!0);if(r){var d=_(i),c=i.lastChild;l(d,c)}else l(i,i);return i}}function pe(e,t,r="svg"){var o=!e.startsWith("<!>"),n=`<${r}>${o?e:"<!>"+e}</${r}>`,a;return()=>{if(f)return l(u,null),u;if(!a){var i=M(n),d=_(i);a=_(d)}var c=a.cloneNode(!0);return l(c,c),c}}function he(e=""){if(!f){var t=E(e+"");return l(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=E()),b(r)),l(r,r),r}function me(){if(f)return l(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=E();return e.append(t,r),l(t,r),e}function ye(e,t){if(f){g.nodes_end=u,G();return}e!==null&&e.before(t)}const ee="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ee);export{Q as a,de as b,l as c,ye as d,_e as e,me as f,fe as g,Z as h,oe as i,le as j,he as k,re as l,D as m,ie as n,ne as o,ae as p,J as q,X as r,pe as s,ve as t,ue as u,se as v,I as w,ce as x};
