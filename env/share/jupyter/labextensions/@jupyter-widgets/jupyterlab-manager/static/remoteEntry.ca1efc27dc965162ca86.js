var _JUPYTERLAB;(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["@jupyter-widgets/jupyterlab-manager"]=(()=>{"use strict";var e,r,t,a,n,o,i,u,l,d,s,f,c,p,h,b,g,m,v,y,j,w,P,S={4107:(e,r,t)=>{var a={"./index":()=>Promise.all([t.e(655),t.e(86),t.e(160),t.e(797),t.e(523)]).then((()=>()=>t(8523))),"./extension":()=>Promise.all([t.e(655),t.e(86),t.e(160),t.e(797),t.e(523)]).then((()=>()=>t(8523)))},n=(e,r)=>(t.R=r,r=t.o(a,e)?a[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var a=t.S.default,n="default";if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>n,init:()=>o})}},k={};function E(e){if(k[e])return k[e].exports;var r=k[e]={id:e,loaded:!1,exports:{}};return S[e].call(r.exports,r,r.exports,E),r.loaded=!0,r.exports}return E.m=S,E.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return E.d(r,{a:r}),r},E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.f={},E.e=e=>Promise.all(Object.keys(E.f).reduce(((r,t)=>(E.f[t](e,r),r)),[])),E.u=e=>(863===e?"@jupyter-widgets/controls":e)+"."+{1:"6c3ab69171002cbfa04f",18:"5fbcd9c56ded92ea9df9",86:"997b7539675c117b9e4f",95:"b5a5ff10000a6051fa99",160:"19ae42a8037f6b3c5795",243:"6c384ff2649ef572a18a",272:"2a8425db7209008188fc",279:"aa88a78c8bf62c65db54",312:"a090325db88da745ba7e",466:"a599fb4fe0d2bfec0669",523:"fa256ee012d38a89b65a",638:"f3e5e34a28f3334d4f08",655:"769acb3467cf293da772",797:"7966edd4b615bbd45a5a",803:"b7b75bd6e7977a648c67",863:"36afb324d8db8fbce79b",868:"c125b968409ba9295199"}[e]+".js",E.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@jupyter-widgets/jupyterlab-manager:",E.l=(t,a,n)=>{if(e[t])e[t].push(a);else{var o,i;if(void 0!==n)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+n){o=d;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,E.nc&&o.setAttribute("nonce",E.nc),o.setAttribute("data-webpack",r+n),o.src=t),e[t]=[a];var s=(r,a)=>{o.onerror=o.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(a))),r)return r(a)},f=setTimeout(s.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=s.bind(null,o.onerror),o.onload=s.bind(null,o.onload),i&&document.head.appendChild(o)}},E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},E.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{E.S={};var e={},r={};E.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];E.o(E.S,t)||(E.S[t]={});var o=E.S[t],i="@jupyter-widgets/jupyterlab-manager",u=(e,r,t)=>{var a=o[e]=o[e]||{},n=a[r];(!n||!n.loaded&&i>n.from)&&(a[r]={get:t,from:i})},l=[];switch(t){case"default":u("@jupyter-widgets/base","4.0.0",(()=>Promise.all([E.e(243),E.e(803),E.e(655),E.e(312),E.e(797),E.e(272)]).then((()=>()=>E(2272))))),u("@jupyter-widgets/controls","3.0.0",(()=>Promise.all([E.e(243),E.e(95),E.e(655),E.e(312),E.e(86),E.e(466),E.e(160),E.e(1)]).then((()=>()=>E(7466))))),u("@jupyter-widgets/jupyterlab-manager","3.0.0",(()=>Promise.all([E.e(655),E.e(86),E.e(160),E.e(797),E.e(523)]).then((()=>()=>E(8523))))),u("@jupyter-widgets/output","4.0.0",(()=>Promise.all([E.e(86),E.e(18)]).then((()=>()=>E(6086))))),u("jquery","3.4.1",(()=>E.e(638).then((()=>()=>E(2752))))),u("semver","6.3.0",(()=>E.e(279).then((()=>()=>E(279)))))}return e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;E.g.importScripts&&(e=E.g.location+"");var r=E.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),E.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=e=>{if(1===e.length)return"*";if(0 in e){var r="",t=e[0];r+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,r+="u"==(typeof(u=e[o]))[0]?"-":(a>0?".":"")+(a=2,u);return r}var i=[];for(o=1;o<e.length;o++){var u=e[o];i.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?i.pop()+" "+i.pop():n(u))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var a=e[0],n=a<0;n&&(a=-a-1);for(var i=0,u=1,l=!0;;u++,i++){var d,s,f=u<e.length?(typeof e[u])[0]:"";if(i>=r.length||"o"==(s=(typeof(d=r[i]))[0]))return!l||("u"==f?u>a&&!n:""==f!=n);if("u"==s){if(!l||"u"!=f)return!1}else if(l)if(f==s)if(u<=a){if(d!=e[u])return!1}else{if(n?d>e[u]:d<e[u])return!1;d!=e[u]&&(l=!1)}else if("s"!=f&&"n"!=f){if(n||u<=a)return!1;l=!1,u--}else{if(u<=a||s<f!=n)return!1;l=!1}else"s"!=f&&"n"!=f&&(l=!1,u--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=E.S[e];if(!t||!E.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},u=(e,r)=>{var t=e[r];return(r=Object.keys(t).reduce(((e,r)=>!e||a(e,r)?r:e),0))&&t[r]},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",s=(e,r,t,a)=>{var n=l(e,t);return o(a,n)||"undefined"!=typeof console&&console.warn&&console.warn(d(t,n,a)),h(e[t][n])},f=(e,r,t)=>{var n=e[r];return(r=Object.keys(n).reduce(((e,r)=>!o(t,r)||e&&!a(e,r)?e:r),0))&&n[r]},c=(e,r,t,a)=>{var o=e[t];return"No satisfying version ("+n(a)+") of shared module "+t+" found in shared scope "+r+".\nAvailable versions: "+Object.keys(o).map((e=>e+" from "+o[e].from)).join(", ")},p=(e,r,t,a)=>{"undefined"!=typeof console&&console.warn&&console.warn(c(e,r,t,a))},h=e=>(e.loaded=1,e.get()),g=(b=e=>function(r,t,a,n){var o=E.I(r);return o&&o.then?o.then(e.bind(e,r,E.S[r],t,a,n)):e(r,E.S[r],t,a,n)})(((e,r,t,a)=>r&&E.o(r,t)?h(u(r,t)):a())),m=b(((e,r,t,a)=>(i(e,t),h(f(r,t,a)||p(r,e,t,a)||u(r,t))))),v=b(((e,r,t,a)=>(i(e,t),s(r,0,t,a)))),y=b(((e,r,t,a,n)=>{var o=r&&E.o(r,t)&&f(r,t,a);return o?h(o):n()})),j={},w={1524:()=>y("default","jquery",[1,3,1,1],(()=>E.e(638).then((()=>()=>E(2752))))),6510:()=>v("default","@lumino/widgets",[1,1,16,1]),1086:()=>y("default","@jupyter-widgets/base",[1,4,0,0],(()=>Promise.all([E.e(243),E.e(803),E.e(655),E.e(312),E.e(797),E.e(272)]).then((()=>()=>E(2272))))),6168:()=>v("default","@lumino/signaling",[1,1,4,3]),9850:()=>v("default","@lumino/algorithm",[1,1,3,3]),1797:()=>v("default","@lumino/coreutils",[1,1,5,3]),59:()=>y("default","@jupyter-widgets/output",[1,4,0,0],(()=>E.e(868).then((()=>()=>E(6086))))),1840:()=>v("default","@jupyterlab/notebook",[1,3,0,0]),2898:()=>v("default","@jupyterlab/logconsole",[1,3,0,0]),3067:()=>v("default","@jupyterlab/settingregistry",[1,3,0,0]),4834:()=>v("default","@jupyterlab/services",[1,6,0,0]),5351:()=>m("default","@jupyterlab/outputarea",[1,3,0,0]),7082:()=>v("default","@jupyterlab/mainmenu",[1,3,0,0]),7504:()=>y("default","semver",[1,6,1,1],(()=>E.e(279).then((()=>()=>E(279))))),8562:()=>v("default","@lumino/properties",[1,1,2,3]),9129:()=>v("default","@lumino/disposable",[1,1,4,3]),9837:()=>v("default","@jupyterlab/rendermime",[1,3,0,0]),3211:()=>v("default","@lumino/messaging",[1,1,4,3]),6006:()=>g("default","jquery",(()=>E.e(638).then((()=>()=>E(2752))))),608:()=>v("default","@lumino/domutils",[1,1,2,3]),1721:()=>y("default","@jupyter-widgets/controls",[1,3,0,0],(()=>Promise.all([E.e(243),E.e(95),E.e(312),E.e(466)]).then((()=>()=>E(7466)))))},P={86:[1086],160:[6168,9850],312:[3211,6006],466:[608],523:[59,1840,2898,3067,4834,5351,7082,7504,8562,9129,9837],655:[1524,6510],797:[1797],863:[1721]},E.f.consumes=(e,r)=>{E.o(P,e)&&P[e].forEach((e=>{if(E.o(j,e))return r.push(j[e]);var t=r=>{j[e]=0,S[e]=t=>{delete k[e],t.exports=r()}},a=r=>{delete j[e],S[e]=t=>{throw delete k[e],r}};try{var n=w[e]();n.then?r.push(j[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={513:0};E.f.j=(r,t)=>{var a=E.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(86(|3)|160|312|655|797)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>{a=e[r]=[t,n]}));t.push(a[2]=n);var o=E.p+E.u(r),i=new Error;E.l(o,(t=>{if(E.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r)}};var r=(r,t)=>{for(var a,n,[o,i,u]=t,l=0,d=[];l<o.length;l++)n=o[l],E.o(e,n)&&e[n]&&d.push(e[n][0]),e[n]=0;for(a in i)E.o(i,a)&&(E.m[a]=i[a]);for(u&&u(E),r&&r(t);d.length;)d.shift()()},t=self.webpackChunk_jupyter_widgets_jupyterlab_manager=self.webpackChunk_jupyter_widgets_jupyterlab_manager||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),E(4107)})();