if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const f=e=>s(e,n),o={module:{uri:n},exports:c,require:f};i[n]=Promise.all(r.map((e=>o[e]||f(e)))).then((e=>(a(...e),c)))}}define(["./workbox-85464933"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"3rdpartylicenses.txt",revision:"fa91930fefc6e34b319fa8492eae5eda"},{url:"favicon.ico",revision:"d4d62b2ac4cfa63ade7f1766fb098bc5"},{url:"index.html",revision:"21072cabd6c2331bd050b18d4ffba3ab"},{url:"main.ac3371894a97af48.esm.js",revision:"4dc896f47c9da1b7aeda1fe1d676ab6a"},{url:"main.ac3371894a97af48.esm.js.LICENSE.txt",revision:"ac1d32e2116a66660d06e2f6a5ba9780"},{url:"polyfills.3b4008182ad7b424.esm.js",revision:"76b442cf4022a6d6db19411094c47f4a"},{url:"runtime.c1411f2a2fb6c6b8.esm.js",revision:"b34634b1d93b3d249ac331df75a29690"}],{})}));
//# sourceMappingURL=service-worker.js.map
