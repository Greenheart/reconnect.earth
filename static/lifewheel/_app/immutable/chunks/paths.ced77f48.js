import{y as l,s as m,P as q,M as v,N as x}from"./scheduler.be9a817d.js";const c=[];function z(e,o){return{subscribe:A(e,o).subscribe}}function A(e,o=l){let r;const n=new Set;function a(t){if(m(e,t)&&(e=t,r)){const i=!c.length;for(const s of n)s[1](),c.push(s,e);if(i){for(let s=0;s<c.length;s+=2)c[s][0](c[s+1]);c.length=0}}}function b(t){a(t(e))}function f(t,i=l){const s=[t,i];return n.add(s),n.size===1&&(r=o(a,b)||l),t(e),()=>{n.delete(s),n.size===0&&r&&(r(),r=null)}}return{set:a,update:b,subscribe:f}}function E(e,o,r){const n=!Array.isArray(e),a=n?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=o.length<2;return z(r,(f,t)=>{let i=!1;const s=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=o(n?s[0]:s,f,t);b?f(u):p=x(u)?u:l},w=a.map((u,_)=>q(u,k=>{s[_]=k,d&=~(1<<_),i&&g()},()=>{d|=1<<_}));return i=!0,g(),function(){v(w),p(),i=!1}})}var h;const T=((h=globalThis.__sveltekit_1i0nr3k)==null?void 0:h.base)??"/lifewheel";var y;const M=((y=globalThis.__sveltekit_1i0nr3k)==null?void 0:y.assets)??T;export{M as a,T as b,E as d,A as w};