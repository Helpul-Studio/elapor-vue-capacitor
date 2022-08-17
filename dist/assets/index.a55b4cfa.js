const eI=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function d(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerpolicy&&(m.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?m.credentials="include":g.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(g){if(g.ep)return;g.ep=!0;const m=d(g);fetch(g.href,m)}};eI();function vd(r,c){const d=Object.create(null),h=r.split(",");for(let g=0;g<h.length;g++)d[h[g]]=!0;return c?g=>!!d[g.toLowerCase()]:g=>!!d[g]}const nI="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",oI=vd(nI),iI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rI=vd(iI);function aC(r){return!!r||r===""}function lc(r){if(Ot(r)){const c={};for(let d=0;d<r.length;d++){const h=r[d],g=Pe(h)?cI(h):lc(h);if(g)for(const m in g)c[m]=g[m]}return c}else{if(Pe(r))return r;if(Oe(r))return r}}const sI=/;(?![^(]*\))/g,aI=/:(.+)/;function cI(r){const c={};return r.split(sI).forEach(d=>{if(d){const h=d.split(aI);h.length>1&&(c[h[0].trim()]=h[1].trim())}}),c}function vn(r){let c="";if(Pe(r))c=r;else if(Ot(r))for(let d=0;d<r.length;d++){const h=vn(r[d]);h&&(c+=h+" ")}else if(Oe(r))for(const d in r)r[d]&&(c+=d+" ");return c.trim()}function lI(r){if(!r)return null;let{class:c,style:d}=r;return c&&!Pe(c)&&(r.class=vn(c)),d&&(r.style=lc(d)),r}function dI(r,c){if(r.length!==c.length)return!1;let d=!0;for(let h=0;d&&h<r.length;h++)d=Fi(r[h],c[h]);return d}function Fi(r,c){if(r===c)return!0;let d=Uv(r),h=Uv(c);if(d||h)return d&&h?r.getTime()===c.getTime():!1;if(d=ec(r),h=ec(c),d||h)return r===c;if(d=Ot(r),h=Ot(c),d||h)return d&&h?dI(r,c):!1;if(d=Oe(r),h=Oe(c),d||h){if(!d||!h)return!1;const g=Object.keys(r).length,m=Object.keys(c).length;if(g!==m)return!1;for(const b in r){const _=r.hasOwnProperty(b),w=c.hasOwnProperty(b);if(_&&!w||!_&&w||!Fi(r[b],c[b]))return!1}}return String(r)===String(c)}function Ad(r,c){return r.findIndex(d=>Fi(d,c))}const Mt=r=>Pe(r)?r:r==null?"":Ot(r)||Oe(r)&&(r.toString===lC||!qt(r.toString))?JSON.stringify(r,cC,2):String(r),cC=(r,c)=>c&&c.__v_isRef?cC(r,c.value):Cs(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((d,[h,g])=>(d[`${h} =>`]=g,d),{})}:Ir(c)?{[`Set(${c.size})`]:[...c.values()]}:Oe(c)&&!Ot(c)&&!dC(c)?String(c):c,le={},As=[],mo=()=>{},uI=()=>!1,hI=/^on[^a-z]/,dc=r=>hI.test(r),Bg=r=>r.startsWith("onUpdate:"),Le=Object.assign,Lg=(r,c)=>{const d=r.indexOf(c);d>-1&&r.splice(d,1)},fI=Object.prototype.hasOwnProperty,ee=(r,c)=>fI.call(r,c),Ot=Array.isArray,Cs=r=>uc(r)==="[object Map]",Ir=r=>uc(r)==="[object Set]",Uv=r=>uc(r)==="[object Date]",qt=r=>typeof r=="function",Pe=r=>typeof r=="string",ec=r=>typeof r=="symbol",Oe=r=>r!==null&&typeof r=="object",Og=r=>Oe(r)&&qt(r.then)&&qt(r.catch),lC=Object.prototype.toString,uc=r=>lC.call(r),gI=r=>uc(r).slice(8,-1),dC=r=>uc(r)==="[object Object]",Rg=r=>Pe(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Ha=vd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cd=r=>{const c=Object.create(null);return d=>c[d]||(c[d]=r(d))},pI=/-(\w)/g,Vn=Cd(r=>r.replace(pI,(c,d)=>d?d.toUpperCase():"")),mI=/\B([A-Z])/g,To=Cd(r=>r.replace(mI,"-$1").toLowerCase()),hc=Cd(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ua=Cd(r=>r?`on${hc(r)}`:""),Ds=(r,c)=>!Object.is(r,c),ys=(r,c)=>{for(let d=0;d<r.length;d++)r[d](c)},ad=(r,c,d)=>{Object.defineProperty(r,c,{configurable:!0,enumerable:!1,value:d})},Vi=r=>{const c=parseFloat(r);return isNaN(c)?r:c};let qv;const bI=()=>qv||(qv=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Rn;class zg{constructor(c=!1){this.active=!0,this.effects=[],this.cleanups=[],!c&&Rn&&(this.parent=Rn,this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}run(c){if(this.active){const d=Rn;try{return Rn=this,c()}finally{Rn=d}}}on(){Rn=this}off(){Rn=this.parent}stop(c){if(this.active){let d,h;for(d=0,h=this.effects.length;d<h;d++)this.effects[d].stop();for(d=0,h=this.cleanups.length;d<h;d++)this.cleanups[d]();if(this.scopes)for(d=0,h=this.scopes.length;d<h;d++)this.scopes[d].stop(!0);if(this.parent&&!c){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function jg(r){return new zg(r)}function uC(r,c=Rn){c&&c.active&&c.effects.push(r)}function kI(){return Rn}function wI(r){Rn&&Rn.cleanups.push(r)}const Fg=r=>{const c=new Set(r);return c.w=0,c.n=0,c},hC=r=>(r.w&$i)>0,fC=r=>(r.n&$i)>0,_I=({deps:r})=>{if(r.length)for(let c=0;c<r.length;c++)r[c].w|=$i},vI=r=>{const{deps:c}=r;if(c.length){let d=0;for(let h=0;h<c.length;h++){const g=c[h];hC(g)&&!fC(g)?g.delete(r):c[d++]=g,g.w&=~$i,g.n&=~$i}c.length=d}},ng=new WeakMap;let Fa=0,$i=1;const og=30;let go;const yr=Symbol(""),ig=Symbol("");class fc{constructor(c,d=null,h){this.fn=c,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,uC(this,h)}run(){if(!this.active)return this.fn();let c=go,d=Ri;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=go,go=this,Ri=!0,$i=1<<++Fa,Fa<=og?_I(this):Wv(this),this.fn()}finally{Fa<=og&&vI(this),$i=1<<--Fa,go=this.parent,Ri=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){go===this?this.deferStop=!0:this.active&&(Wv(this),this.onStop&&this.onStop(),this.active=!1)}}function Wv(r){const{deps:c}=r;if(c.length){for(let d=0;d<c.length;d++)c[d].delete(r);c.length=0}}function AI(r,c){r.effect&&(r=r.effect.fn);const d=new fc(r);c&&(Le(d,c),c.scope&&uC(d,c.scope)),(!c||!c.lazy)&&d.run();const h=d.run.bind(d);return h.effect=d,h}function CI(r){r.effect.stop()}let Ri=!0;const gC=[];function Mr(){gC.push(Ri),Ri=!1}function Pr(){const r=gC.pop();Ri=r===void 0?!0:r}function $n(r,c,d){if(Ri&&go){let h=ng.get(r);h||ng.set(r,h=new Map);let g=h.get(d);g||h.set(d,g=Fg()),pC(g)}}function pC(r,c){let d=!1;Fa<=og?fC(r)||(r.n|=$i,d=!hC(r)):d=!r.has(go),d&&(r.add(go),go.deps.push(r))}function si(r,c,d,h,g,m){const b=ng.get(r);if(!b)return;let _=[];if(c==="clear")_=[...b.values()];else if(d==="length"&&Ot(r))b.forEach((w,x)=>{(x==="length"||x>=h)&&_.push(w)});else switch(d!==void 0&&_.push(b.get(d)),c){case"add":Ot(r)?Rg(d)&&_.push(b.get("length")):(_.push(b.get(yr)),Cs(r)&&_.push(b.get(ig)));break;case"delete":Ot(r)||(_.push(b.get(yr)),Cs(r)&&_.push(b.get(ig)));break;case"set":Cs(r)&&_.push(b.get(yr));break}if(_.length===1)_[0]&&rg(_[0]);else{const w=[];for(const x of _)x&&w.push(...x);rg(Fg(w))}}function rg(r,c){const d=Ot(r)?r:[...r];for(const h of d)h.computed&&Gv(h);for(const h of d)h.computed||Gv(h)}function Gv(r,c){(r!==go||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const yI=vd("__proto__,__v_isRef,__isVue"),mC=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(ec)),xI=yd(),EI=yd(!1,!0),DI=yd(!0),SI=yd(!0,!0),Kv=TI();function TI(){const r={};return["includes","indexOf","lastIndexOf"].forEach(c=>{r[c]=function(...d){const h=Xt(this);for(let m=0,b=this.length;m<b;m++)$n(h,"get",m+"");const g=h[c](...d);return g===-1||g===!1?h[c](...d.map(Xt)):g}}),["push","pop","shift","unshift","splice"].forEach(c=>{r[c]=function(...d){Mr();const h=Xt(this)[c].apply(this,d);return Pr(),h}}),r}function yd(r=!1,c=!1){return function(h,g,m){if(g==="__v_isReactive")return!r;if(g==="__v_isReadonly")return r;if(g==="__v_isShallow")return c;if(g==="__v_raw"&&m===(r?c?CC:AC:c?vC:_C).get(h))return h;const b=Ot(h);if(!r&&b&&ee(Kv,g))return Reflect.get(Kv,g,m);const _=Reflect.get(h,g,m);return(ec(g)?mC.has(g):yI(g))||(r||$n(h,"get",g),c)?_:Se(_)?b&&Rg(g)?_:_.value:Oe(_)?r?$g(_):Mn(_):_}}const II=bC(),MI=bC(!0);function bC(r=!1){return function(d,h,g,m){let b=d[h];if(Ss(b)&&Se(b)&&!Se(g))return!1;if(!r&&!Ss(g)&&(cd(g)||(g=Xt(g),b=Xt(b)),!Ot(d)&&Se(b)&&!Se(g)))return b.value=g,!0;const _=Ot(d)&&Rg(h)?Number(h)<d.length:ee(d,h),w=Reflect.set(d,h,g,m);return d===Xt(m)&&(_?Ds(g,b)&&si(d,"set",h,g):si(d,"add",h,g)),w}}function PI(r,c){const d=ee(r,c);r[c];const h=Reflect.deleteProperty(r,c);return h&&d&&si(r,"delete",c,void 0),h}function NI(r,c){const d=Reflect.has(r,c);return(!ec(c)||!mC.has(c))&&$n(r,"has",c),d}function BI(r){return $n(r,"iterate",Ot(r)?"length":yr),Reflect.ownKeys(r)}const kC={get:xI,set:II,deleteProperty:PI,has:NI,ownKeys:BI},wC={get:DI,set(r,c){return!0},deleteProperty(r,c){return!0}},LI=Le({},kC,{get:EI,set:MI}),OI=Le({},wC,{get:SI}),Vg=r=>r,xd=r=>Reflect.getPrototypeOf(r);function jl(r,c,d=!1,h=!1){r=r.__v_raw;const g=Xt(r),m=Xt(c);d||(c!==m&&$n(g,"get",c),$n(g,"get",m));const{has:b}=xd(g),_=h?Vg:d?Ug:nc;if(b.call(g,c))return _(r.get(c));if(b.call(g,m))return _(r.get(m));r!==g&&r.get(c)}function Fl(r,c=!1){const d=this.__v_raw,h=Xt(d),g=Xt(r);return c||(r!==g&&$n(h,"has",r),$n(h,"has",g)),r===g?d.has(r):d.has(r)||d.has(g)}function Vl(r,c=!1){return r=r.__v_raw,!c&&$n(Xt(r),"iterate",yr),Reflect.get(r,"size",r)}function Yv(r){r=Xt(r);const c=Xt(this);return xd(c).has.call(c,r)||(c.add(r),si(c,"add",r,r)),this}function Qv(r,c){c=Xt(c);const d=Xt(this),{has:h,get:g}=xd(d);let m=h.call(d,r);m||(r=Xt(r),m=h.call(d,r));const b=g.call(d,r);return d.set(r,c),m?Ds(c,b)&&si(d,"set",r,c):si(d,"add",r,c),this}function Zv(r){const c=Xt(this),{has:d,get:h}=xd(c);let g=d.call(c,r);g||(r=Xt(r),g=d.call(c,r)),h&&h.call(c,r);const m=c.delete(r);return g&&si(c,"delete",r,void 0),m}function Jv(){const r=Xt(this),c=r.size!==0,d=r.clear();return c&&si(r,"clear",void 0,void 0),d}function $l(r,c){return function(h,g){const m=this,b=m.__v_raw,_=Xt(b),w=c?Vg:r?Ug:nc;return!r&&$n(_,"iterate",yr),b.forEach((x,E)=>h.call(g,w(x),w(E),m))}}function Hl(r,c,d){return function(...h){const g=this.__v_raw,m=Xt(g),b=Cs(m),_=r==="entries"||r===Symbol.iterator&&b,w=r==="keys"&&b,x=g[r](...h),E=d?Vg:c?Ug:nc;return!c&&$n(m,"iterate",w?ig:yr),{next(){const{value:S,done:v}=x.next();return v?{value:S,done:v}:{value:_?[E(S[0]),E(S[1])]:E(S),done:v}},[Symbol.iterator](){return this}}}}function yi(r){return function(...c){return r==="delete"?!1:this}}function RI(){const r={get(m){return jl(this,m)},get size(){return Vl(this)},has:Fl,add:Yv,set:Qv,delete:Zv,clear:Jv,forEach:$l(!1,!1)},c={get(m){return jl(this,m,!1,!0)},get size(){return Vl(this)},has:Fl,add:Yv,set:Qv,delete:Zv,clear:Jv,forEach:$l(!1,!0)},d={get(m){return jl(this,m,!0)},get size(){return Vl(this,!0)},has(m){return Fl.call(this,m,!0)},add:yi("add"),set:yi("set"),delete:yi("delete"),clear:yi("clear"),forEach:$l(!0,!1)},h={get(m){return jl(this,m,!0,!0)},get size(){return Vl(this,!0)},has(m){return Fl.call(this,m,!0)},add:yi("add"),set:yi("set"),delete:yi("delete"),clear:yi("clear"),forEach:$l(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{r[m]=Hl(m,!1,!1),d[m]=Hl(m,!0,!1),c[m]=Hl(m,!1,!0),h[m]=Hl(m,!0,!0)}),[r,d,c,h]}const[zI,jI,FI,VI]=RI();function Ed(r,c){const d=c?r?VI:FI:r?jI:zI;return(h,g,m)=>g==="__v_isReactive"?!r:g==="__v_isReadonly"?r:g==="__v_raw"?h:Reflect.get(ee(d,g)&&g in h?d:h,g,m)}const $I={get:Ed(!1,!1)},HI={get:Ed(!1,!0)},UI={get:Ed(!0,!1)},qI={get:Ed(!0,!0)},_C=new WeakMap,vC=new WeakMap,AC=new WeakMap,CC=new WeakMap;function WI(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function GI(r){return r.__v_skip||!Object.isExtensible(r)?0:WI(gI(r))}function Mn(r){return Ss(r)?r:Dd(r,!1,kC,$I,_C)}function yC(r){return Dd(r,!1,LI,HI,vC)}function $g(r){return Dd(r,!0,wC,UI,AC)}function KI(r){return Dd(r,!0,OI,qI,CC)}function Dd(r,c,d,h,g){if(!Oe(r)||r.__v_raw&&!(c&&r.__v_isReactive))return r;const m=g.get(r);if(m)return m;const b=GI(r);if(b===0)return r;const _=new Proxy(r,b===2?h:d);return g.set(r,_),_}function Io(r){return Ss(r)?Io(r.__v_raw):!!(r&&r.__v_isReactive)}function Ss(r){return!!(r&&r.__v_isReadonly)}function cd(r){return!!(r&&r.__v_isShallow)}function Hg(r){return Io(r)||Ss(r)}function Xt(r){const c=r&&r.__v_raw;return c?Xt(c):r}function to(r){return ad(r,"__v_skip",!0),r}const nc=r=>Oe(r)?Mn(r):r,Ug=r=>Oe(r)?$g(r):r;function qg(r){Ri&&go&&(r=Xt(r),pC(r.dep||(r.dep=Fg())))}function Sd(r,c){r=Xt(r),r.dep&&rg(r.dep)}function Se(r){return!!(r&&r.__v_isRef===!0)}function eo(r){return EC(r,!1)}function xC(r){return EC(r,!0)}function EC(r,c){return Se(r)?r:new YI(r,c)}class YI{constructor(c,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?c:Xt(c),this._value=d?c:nc(c)}get value(){return qg(this),this._value}set value(c){c=this.__v_isShallow?c:Xt(c),Ds(c,this._rawValue)&&(this._rawValue=c,this._value=this.__v_isShallow?c:nc(c),Sd(this))}}function QI(r){Sd(r)}function J(r){return Se(r)?r.value:r}const ZI={get:(r,c,d)=>J(Reflect.get(r,c,d)),set:(r,c,d,h)=>{const g=r[c];return Se(g)&&!Se(d)?(g.value=d,!0):Reflect.set(r,c,d,h)}};function Wg(r){return Io(r)?r:new Proxy(r,ZI)}class JI{constructor(c){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:h}=c(()=>qg(this),()=>Sd(this));this._get=d,this._set=h}get value(){return this._get()}set value(c){this._set(c)}}function XI(r){return new JI(r)}function sg(r){const c=Ot(r)?new Array(r.length):{};for(const d in r)c[d]=qa(r,d);return c}class tM{constructor(c,d,h){this._object=c,this._key=d,this._defaultValue=h,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}}function qa(r,c,d){const h=r[c];return Se(h)?h:new tM(r,c,d)}class eM{constructor(c,d,h,g){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new fc(c,()=>{this._dirty||(this._dirty=!0,Sd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=h}get value(){const c=Xt(this);return qg(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}function DC(r,c,d=!1){let h,g;const m=qt(r);return m?(h=r,g=mo):(h=r.get,g=r.set),new eM(h,g,m||!g,d)}const Wa=[];function SC(r,...c){Mr();const d=Wa.length?Wa[Wa.length-1].component:null,h=d&&d.appContext.config.warnHandler,g=nM();if(h)Mo(h,d,11,[r+c.join(""),d&&d.proxy,g.map(({vnode:m})=>`at <${w0(d,m.type)}>`).join(`
`),g]);else{const m=[`[Vue warn]: ${r}`,...c];g.length&&m.push(`
`,...oM(g)),console.warn(...m)}Pr()}function nM(){let r=Wa[Wa.length-1];if(!r)return[];const c=[];for(;r;){const d=c[0];d&&d.vnode===r?d.recurseCount++:c.push({vnode:r,recurseCount:0});const h=r.component&&r.component.parent;r=h&&h.vnode}return c}function oM(r){const c=[];return r.forEach((d,h)=>{c.push(...h===0?[]:[`
`],...iM(d))}),c}function iM({vnode:r,recurseCount:c}){const d=c>0?`... (${c} recursive calls)`:"",h=r.component?r.component.parent==null:!1,g=` at <${w0(r.component,r.type,h)}`,m=">"+d;return r.props?[g,...rM(r.props),m]:[g+m]}function rM(r){const c=[],d=Object.keys(r);return d.slice(0,3).forEach(h=>{c.push(...TC(h,r[h]))}),d.length>3&&c.push(" ..."),c}function TC(r,c,d){return Pe(c)?(c=JSON.stringify(c),d?c:[`${r}=${c}`]):typeof c=="number"||typeof c=="boolean"||c==null?d?c:[`${r}=${c}`]:Se(c)?(c=TC(r,Xt(c.value),!0),d?c:[`${r}=Ref<`,c,">"]):qt(c)?[`${r}=fn${c.name?`<${c.name}>`:""}`]:(c=Xt(c),d?c:[`${r}=`,c])}function Mo(r,c,d,h){let g;try{g=h?r(...h):r()}catch(m){Nr(m,c,d)}return g}function Fn(r,c,d,h){if(qt(r)){const m=Mo(r,c,d,h);return m&&Og(m)&&m.catch(b=>{Nr(b,c,d)}),m}const g=[];for(let m=0;m<r.length;m++)g.push(Fn(r[m],c,d,h));return g}function Nr(r,c,d,h=!0){const g=c?c.vnode:null;if(c){let m=c.parent;const b=c.proxy,_=d;for(;m;){const x=m.ec;if(x){for(let E=0;E<x.length;E++)if(x[E](r,b,_)===!1)return}m=m.parent}const w=c.appContext.config.errorHandler;if(w){Mo(w,null,10,[r,b,_]);return}}sM(r,d,g,h)}function sM(r,c,d,h=!0){console.error(r)}let ld=!1,ag=!1;const jn=[];let oi=0;const Ga=[];let Va=null,bs=0;const Ka=[];let Ii=null,ks=0;const IC=Promise.resolve();let Gg=null,cg=null;function No(r){const c=Gg||IC;return r?c.then(this?r.bind(this):r):c}function aM(r){let c=oi+1,d=jn.length;for(;c<d;){const h=c+d>>>1;oc(jn[h])<r?c=h+1:d=h}return c}function Kg(r){(!jn.length||!jn.includes(r,ld&&r.allowRecurse?oi+1:oi))&&r!==cg&&(r.id==null?jn.push(r):jn.splice(aM(r.id),0,r),MC())}function MC(){!ld&&!ag&&(ag=!0,Gg=IC.then(NC))}function cM(r){const c=jn.indexOf(r);c>oi&&jn.splice(c,1)}function PC(r,c,d,h){Ot(r)?d.push(...r):(!c||!c.includes(r,r.allowRecurse?h+1:h))&&d.push(r),MC()}function lM(r){PC(r,Va,Ga,bs)}function Yg(r){PC(r,Ii,Ka,ks)}function Td(r,c=null){if(Ga.length){for(cg=c,Va=[...new Set(Ga)],Ga.length=0,bs=0;bs<Va.length;bs++)Va[bs]();Va=null,bs=0,cg=null,Td(r,c)}}function dd(r){if(Td(),Ka.length){const c=[...new Set(Ka)];if(Ka.length=0,Ii){Ii.push(...c);return}for(Ii=c,Ii.sort((d,h)=>oc(d)-oc(h)),ks=0;ks<Ii.length;ks++)Ii[ks]();Ii=null,ks=0}}const oc=r=>r.id==null?1/0:r.id;function NC(r){ag=!1,ld=!0,Td(r),jn.sort((d,h)=>oc(d)-oc(h));const c=mo;try{for(oi=0;oi<jn.length;oi++){const d=jn[oi];d&&d.active!==!1&&Mo(d,null,14)}}finally{oi=0,jn.length=0,dd(),ld=!1,Gg=null,(jn.length||Ga.length||Ka.length)&&NC(r)}}let ws,Ul=[];function BC(r,c){var d,h;ws=r,ws?(ws.enabled=!0,Ul.forEach(({event:g,args:m})=>ws.emit(g,...m)),Ul=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((h=(d=window.navigator)===null||d===void 0?void 0:d.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((c.__VUE_DEVTOOLS_HOOK_REPLAY__=c.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{BC(m,c)}),setTimeout(()=>{ws||(c.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ul=[])},3e3)):Ul=[]}function dM(r,c,...d){if(r.isUnmounted)return;const h=r.vnode.props||le;let g=d;const m=c.startsWith("update:"),b=m&&c.slice(7);if(b&&b in h){const E=`${b==="modelValue"?"model":b}Modifiers`,{number:S,trim:v}=h[E]||le;v&&(g=d.map(M=>M.trim())),S&&(g=d.map(Vi))}let _,w=h[_=Ua(c)]||h[_=Ua(Vn(c))];!w&&m&&(w=h[_=Ua(To(c))]),w&&Fn(w,r,6,g);const x=h[_+"Once"];if(x){if(!r.emitted)r.emitted={};else if(r.emitted[_])return;r.emitted[_]=!0,Fn(x,r,6,g)}}function LC(r,c,d=!1){const h=c.emitsCache,g=h.get(r);if(g!==void 0)return g;const m=r.emits;let b={},_=!1;if(!qt(r)){const w=x=>{const E=LC(x,c,!0);E&&(_=!0,Le(b,E))};!d&&c.mixins.length&&c.mixins.forEach(w),r.extends&&w(r.extends),r.mixins&&r.mixins.forEach(w)}return!m&&!_?(h.set(r,null),null):(Ot(m)?m.forEach(w=>b[w]=null):Le(b,m),h.set(r,b),b)}function Id(r,c){return!r||!dc(c)?!1:(c=c.slice(2).replace(/Once$/,""),ee(r,c[0].toLowerCase()+c.slice(1))||ee(r,To(c))||ee(r,c))}let pn=null,Md=null;function ic(r){const c=pn;return pn=r,Md=r&&r.type.__scopeId||null,c}function uM(r){Md=r}function hM(){Md=null}const fM=r=>_n;function _n(r,c=pn,d){if(!c||r._n)return r;const h=(...g)=>{h._d&&pg(-1);const m=ic(c),b=r(...g);return ic(m),h._d&&pg(1),b};return h._n=!0,h._c=!0,h._d=!0,h}function td(r){const{type:c,vnode:d,proxy:h,withProxy:g,props:m,propsOptions:[b],slots:_,attrs:w,emit:x,render:E,renderCache:S,data:v,setupState:M,ctx:W,inheritAttrs:ct}=r;let it,H;const j=ic(r);try{if(d.shapeFlag&4){const nt=g||h;it=zn(E.call(nt,nt,S,m,M,v,W)),H=w}else{const nt=c;it=zn(nt.length>1?nt(m,{attrs:w,slots:_,emit:x}):nt(m,null)),H=c.props?w:pM(w)}}catch(nt){Za.length=0,Nr(nt,r,1),it=xt(bn)}let K=it;if(H&&ct!==!1){const nt=Object.keys(H),{shapeFlag:ut}=K;nt.length&&ut&7&&(b&&nt.some(Bg)&&(H=mM(H,b)),K=Bo(K,H))}return d.dirs&&(K=Bo(K),K.dirs=K.dirs?K.dirs.concat(d.dirs):d.dirs),d.transition&&(K.transition=d.transition),it=K,ic(j),it}function gM(r){let c;for(let d=0;d<r.length;d++){const h=r[d];if(Hi(h)){if(h.type!==bn||h.children==="v-if"){if(c)return;c=h}}else return}return c}const pM=r=>{let c;for(const d in r)(d==="class"||d==="style"||dc(d))&&((c||(c={}))[d]=r[d]);return c},mM=(r,c)=>{const d={};for(const h in r)(!Bg(h)||!(h.slice(9)in c))&&(d[h]=r[h]);return d};function bM(r,c,d){const{props:h,children:g,component:m}=r,{props:b,children:_,patchFlag:w}=c,x=m.emitsOptions;if(c.dirs||c.transition)return!0;if(d&&w>=0){if(w&1024)return!0;if(w&16)return h?Xv(h,b,x):!!b;if(w&8){const E=c.dynamicProps;for(let S=0;S<E.length;S++){const v=E[S];if(b[v]!==h[v]&&!Id(x,v))return!0}}}else return(g||_)&&(!_||!_.$stable)?!0:h===b?!1:h?b?Xv(h,b,x):!0:!!b;return!1}function Xv(r,c,d){const h=Object.keys(c);if(h.length!==Object.keys(r).length)return!0;for(let g=0;g<h.length;g++){const m=h[g];if(c[m]!==r[m]&&!Id(d,m))return!0}return!1}function Qg({vnode:r,parent:c},d){for(;c&&c.subTree===r;)(r=c.vnode).el=d,c=c.parent}const OC=r=>r.__isSuspense,kM={name:"Suspense",__isSuspense:!0,process(r,c,d,h,g,m,b,_,w,x){r==null?_M(c,d,h,g,m,b,_,w,x):vM(r,c,d,h,g,b,_,w,x)},hydrate:AM,create:Zg,normalize:CM},wM=kM;function rc(r,c){const d=r.props&&r.props[c];qt(d)&&d()}function _M(r,c,d,h,g,m,b,_,w){const{p:x,o:{createElement:E}}=w,S=E("div"),v=r.suspense=Zg(r,g,h,c,S,d,m,b,_,w);x(null,v.pendingBranch=r.ssContent,S,null,h,v,m,b),v.deps>0?(rc(r,"onPending"),rc(r,"onFallback"),x(null,r.ssFallback,c,d,h,null,m,b),xs(v,r.ssFallback)):v.resolve()}function vM(r,c,d,h,g,m,b,_,{p:w,um:x,o:{createElement:E}}){const S=c.suspense=r.suspense;S.vnode=c,c.el=r.el;const v=c.ssContent,M=c.ssFallback,{activeBranch:W,pendingBranch:ct,isInFallback:it,isHydrating:H}=S;if(ct)S.pendingBranch=v,So(v,ct)?(w(ct,v,S.hiddenContainer,null,g,S,m,b,_),S.deps<=0?S.resolve():it&&(w(W,M,d,h,g,null,m,b,_),xs(S,M))):(S.pendingId++,H?(S.isHydrating=!1,S.activeBranch=ct):x(ct,g,S),S.deps=0,S.effects.length=0,S.hiddenContainer=E("div"),it?(w(null,v,S.hiddenContainer,null,g,S,m,b,_),S.deps<=0?S.resolve():(w(W,M,d,h,g,null,m,b,_),xs(S,M))):W&&So(v,W)?(w(W,v,d,h,g,S,m,b,_),S.resolve(!0)):(w(null,v,S.hiddenContainer,null,g,S,m,b,_),S.deps<=0&&S.resolve()));else if(W&&So(v,W))w(W,v,d,h,g,S,m,b,_),xs(S,v);else if(rc(c,"onPending"),S.pendingBranch=v,S.pendingId++,w(null,v,S.hiddenContainer,null,g,S,m,b,_),S.deps<=0)S.resolve();else{const{timeout:j,pendingId:K}=S;j>0?setTimeout(()=>{S.pendingId===K&&S.fallback(M)},j):j===0&&S.fallback(M)}}function Zg(r,c,d,h,g,m,b,_,w,x,E=!1){const{p:S,m:v,um:M,n:W,o:{parentNode:ct,remove:it}}=x,H=Vi(r.props&&r.props.timeout),j={vnode:r,parent:c,parentComponent:d,isSVG:b,container:h,hiddenContainer:g,anchor:m,deps:0,pendingId:0,timeout:typeof H=="number"?H:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:E,isUnmounted:!1,effects:[],resolve(K=!1){const{vnode:nt,activeBranch:ut,pendingBranch:Dt,pendingId:V,effects:U,parentComponent:G,container:Y}=j;if(j.isHydrating)j.isHydrating=!1;else if(!K){const _t=ut&&Dt.transition&&Dt.transition.mode==="out-in";_t&&(ut.transition.afterLeave=()=>{V===j.pendingId&&v(Dt,Y,pt,0)});let{anchor:pt}=j;ut&&(pt=W(ut),M(ut,G,j,!0)),_t||v(Dt,Y,pt,0)}xs(j,Dt),j.pendingBranch=null,j.isInFallback=!1;let et=j.parent,O=!1;for(;et;){if(et.pendingBranch){et.effects.push(...U),O=!0;break}et=et.parent}O||Yg(U),j.effects=[],rc(nt,"onResolve")},fallback(K){if(!j.pendingBranch)return;const{vnode:nt,activeBranch:ut,parentComponent:Dt,container:V,isSVG:U}=j;rc(nt,"onFallback");const G=W(ut),Y=()=>{!j.isInFallback||(S(null,K,V,G,Dt,null,U,_,w),xs(j,K))},et=K.transition&&K.transition.mode==="out-in";et&&(ut.transition.afterLeave=Y),j.isInFallback=!0,M(ut,Dt,null,!0),et||Y()},move(K,nt,ut){j.activeBranch&&v(j.activeBranch,K,nt,ut),j.container=K},next(){return j.activeBranch&&W(j.activeBranch)},registerDep(K,nt){const ut=!!j.pendingBranch;ut&&j.deps++;const Dt=K.vnode.el;K.asyncDep.catch(V=>{Nr(V,K,0)}).then(V=>{if(K.isUnmounted||j.isUnmounted||j.pendingId!==K.suspenseId)return;K.asyncResolved=!0;const{vnode:U}=K;mg(K,V,!1),Dt&&(U.el=Dt);const G=!Dt&&K.subTree.el;nt(K,U,ct(Dt||K.subTree.el),Dt?null:W(K.subTree),j,b,w),G&&it(G),Qg(K,U.el),ut&&--j.deps===0&&j.resolve()})},unmount(K,nt){j.isUnmounted=!0,j.activeBranch&&M(j.activeBranch,d,K,nt),j.pendingBranch&&M(j.pendingBranch,d,K,nt)}};return j}function AM(r,c,d,h,g,m,b,_,w){const x=c.suspense=Zg(c,h,d,r.parentNode,document.createElement("div"),null,g,m,b,_,!0),E=w(r,x.pendingBranch=c.ssContent,d,x,m,b);return x.deps===0&&x.resolve(),E}function CM(r){const{shapeFlag:c,children:d}=r,h=c&32;r.ssContent=tA(h?d.default:d),r.ssFallback=h?tA(d.fallback):xt(bn)}function tA(r){let c;if(qt(r)){const d=Sr&&r._c;d&&(r._d=!1,At()),r=r(),d&&(r._d=!0,c=Tn,l0())}return Ot(r)&&(r=gM(r)),r=zn(r),c&&!r.dynamicChildren&&(r.dynamicChildren=c.filter(d=>d!==r)),r}function RC(r,c){c&&c.pendingBranch?Ot(r)?c.effects.push(...r):c.effects.push(r):Yg(r)}function xs(r,c){r.activeBranch=c;const{vnode:d,parentComponent:h}=r,g=d.el=c.el;h&&h.subTree===d&&(h.vnode.el=g,Qg(h,g))}function Ya(r,c){if(We){let d=We.provides;const h=We.parent&&We.parent.provides;h===d&&(d=We.provides=Object.create(h)),d[r]=c}}function bo(r,c,d=!1){const h=We||pn;if(h){const g=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(g&&r in g)return g[r];if(arguments.length>1)return d&&qt(c)?c.call(h.proxy):c}}function yM(r,c){return gc(r,null,c)}function zC(r,c){return gc(r,null,{flush:"post"})}function xM(r,c){return gc(r,null,{flush:"sync"})}const eA={};function zi(r,c,d){return gc(r,c,d)}function gc(r,c,{immediate:d,deep:h,flush:g,onTrack:m,onTrigger:b}=le){const _=We;let w,x=!1,E=!1;if(Se(r)?(w=()=>r.value,x=cd(r)):Io(r)?(w=()=>r,h=!0):Ot(r)?(E=!0,x=r.some(H=>Io(H)||cd(H)),w=()=>r.map(H=>{if(Se(H))return H.value;if(Io(H))return Cr(H);if(qt(H))return Mo(H,_,2)})):qt(r)?c?w=()=>Mo(r,_,2):w=()=>{if(!(_&&_.isUnmounted))return S&&S(),Fn(r,_,3,[v])}:w=mo,c&&h){const H=w;w=()=>Cr(H())}let S,v=H=>{S=it.onStop=()=>{Mo(H,_,4)}};if(Ms)return v=mo,c?d&&Fn(c,_,3,[w(),E?[]:void 0,v]):w(),mo;let M=E?[]:eA;const W=()=>{if(!!it.active)if(c){const H=it.run();(h||x||(E?H.some((j,K)=>Ds(j,M[K])):Ds(H,M)))&&(S&&S(),Fn(c,_,3,[H,M===eA?void 0:M,v]),M=H)}else it.run()};W.allowRecurse=!!c;let ct;g==="sync"?ct=W:g==="post"?ct=()=>an(W,_&&_.suspense):ct=()=>lM(W);const it=new fc(w,ct);return c?d?W():M=it.run():g==="post"?an(it.run.bind(it),_&&_.suspense):it.run(),()=>{it.stop(),_&&_.scope&&Lg(_.scope.effects,it)}}function EM(r,c,d){const h=this.proxy,g=Pe(r)?r.includes(".")?jC(h,r):()=>h[r]:r.bind(h,h);let m;qt(c)?m=c:(m=c.handler,d=c);const b=We;Ui(this);const _=gc(g,m.bind(h),d);return b?Ui(b):ji(),_}function jC(r,c){const d=c.split(".");return()=>{let h=r;for(let g=0;g<d.length&&h;g++)h=h[d[g]];return h}}function Cr(r,c){if(!Oe(r)||r.__v_skip||(c=c||new Set,c.has(r)))return r;if(c.add(r),Se(r))Cr(r.value,c);else if(Ot(r))for(let d=0;d<r.length;d++)Cr(r[d],c);else if(Ir(r)||Cs(r))r.forEach(d=>{Cr(d,c)});else if(dC(r))for(const d in r)Cr(r[d],c);return r}function Jg(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return cn(()=>{r.isMounted=!0}),Ld(()=>{r.isUnmounting=!0}),r}const Xn=[Function,Array],DM={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xn,onEnter:Xn,onAfterEnter:Xn,onEnterCancelled:Xn,onBeforeLeave:Xn,onLeave:Xn,onAfterLeave:Xn,onLeaveCancelled:Xn,onBeforeAppear:Xn,onAppear:Xn,onAfterAppear:Xn,onAppearCancelled:Xn},setup(r,{slots:c}){const d=Lo(),h=Jg();let g;return()=>{const m=c.default&&Pd(c.default(),!0);if(!m||!m.length)return;let b=m[0];if(m.length>1){for(const ct of m)if(ct.type!==bn){b=ct;break}}const _=Xt(r),{mode:w}=_;if(h.isLeaving)return Rf(b);const x=nA(b);if(!x)return Rf(b);const E=Ts(x,_,h,d);Dr(x,E);const S=d.subTree,v=S&&nA(S);let M=!1;const{getTransitionKey:W}=x.type;if(W){const ct=W();g===void 0?g=ct:ct!==g&&(g=ct,M=!0)}if(v&&v.type!==bn&&(!So(x,v)||M)){const ct=Ts(v,_,h,d);if(Dr(v,ct),w==="out-in")return h.isLeaving=!0,ct.afterLeave=()=>{h.isLeaving=!1,d.update()},Rf(b);w==="in-out"&&x.type!==bn&&(ct.delayLeave=(it,H,j)=>{const K=FC(h,v);K[String(v.key)]=v,it._leaveCb=()=>{H(),it._leaveCb=void 0,delete E.delayedLeave},E.delayedLeave=j})}return b}}},Xg=DM;function FC(r,c){const{leavingVNodes:d}=r;let h=d.get(c.type);return h||(h=Object.create(null),d.set(c.type,h)),h}function Ts(r,c,d,h){const{appear:g,mode:m,persisted:b=!1,onBeforeEnter:_,onEnter:w,onAfterEnter:x,onEnterCancelled:E,onBeforeLeave:S,onLeave:v,onAfterLeave:M,onLeaveCancelled:W,onBeforeAppear:ct,onAppear:it,onAfterAppear:H,onAppearCancelled:j}=c,K=String(r.key),nt=FC(d,r),ut=(U,G)=>{U&&Fn(U,h,9,G)},Dt=(U,G)=>{const Y=G[1];ut(U,G),Ot(U)?U.every(et=>et.length<=1)&&Y():U.length<=1&&Y()},V={mode:m,persisted:b,beforeEnter(U){let G=_;if(!d.isMounted)if(g)G=ct||_;else return;U._leaveCb&&U._leaveCb(!0);const Y=nt[K];Y&&So(r,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),ut(G,[U])},enter(U){let G=w,Y=x,et=E;if(!d.isMounted)if(g)G=it||w,Y=H||x,et=j||E;else return;let O=!1;const _t=U._enterCb=pt=>{O||(O=!0,pt?ut(et,[U]):ut(Y,[U]),V.delayedLeave&&V.delayedLeave(),U._enterCb=void 0)};G?Dt(G,[U,_t]):_t()},leave(U,G){const Y=String(r.key);if(U._enterCb&&U._enterCb(!0),d.isUnmounting)return G();ut(S,[U]);let et=!1;const O=U._leaveCb=_t=>{et||(et=!0,G(),_t?ut(W,[U]):ut(M,[U]),U._leaveCb=void 0,nt[Y]===r&&delete nt[Y])};nt[Y]=r,v?Dt(v,[U,O]):O()},clone(U){return Ts(U,c,d,h)}};return V}function Rf(r){if(pc(r))return r=Bo(r),r.children=null,r}function nA(r){return pc(r)?r.children?r.children[0]:void 0:r}function Dr(r,c){r.shapeFlag&6&&r.component?Dr(r.component.subTree,c):r.shapeFlag&128?(r.ssContent.transition=c.clone(r.ssContent),r.ssFallback.transition=c.clone(r.ssFallback)):r.transition=c}function Pd(r,c=!1,d){let h=[],g=0;for(let m=0;m<r.length;m++){let b=r[m];const _=d==null?b.key:String(d)+String(b.key!=null?b.key:m);b.type===Zt?(b.patchFlag&128&&g++,h=h.concat(Pd(b.children,c,_))):(c||b.type!==bn)&&h.push(_!=null?Bo(b,{key:_}):b)}if(g>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}function Br(r){return qt(r)?{setup:r,name:r.name}:r}const xr=r=>!!r.type.__asyncLoader;function SM(r){qt(r)&&(r={loader:r});const{loader:c,loadingComponent:d,errorComponent:h,delay:g=200,timeout:m,suspensible:b=!0,onError:_}=r;let w=null,x,E=0;const S=()=>(E++,w=null,v()),v=()=>{let M;return w||(M=w=c().catch(W=>{if(W=W instanceof Error?W:new Error(String(W)),_)return new Promise((ct,it)=>{_(W,()=>ct(S()),()=>it(W),E+1)});throw W}).then(W=>M!==w&&w?w:(W&&(W.__esModule||W[Symbol.toStringTag]==="Module")&&(W=W.default),x=W,W)))};return Br({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return x},setup(){const M=We;if(x)return()=>zf(x,M);const W=j=>{w=null,Nr(j,M,13,!h)};if(b&&M.suspense||Ms)return v().then(j=>()=>zf(j,M)).catch(j=>(W(j),()=>h?xt(h,{error:j}):null));const ct=eo(!1),it=eo(),H=eo(!!g);return g&&setTimeout(()=>{H.value=!1},g),m!=null&&setTimeout(()=>{if(!ct.value&&!it.value){const j=new Error(`Async component timed out after ${m}ms.`);W(j),it.value=j}},m),v().then(()=>{ct.value=!0,M.parent&&pc(M.parent.vnode)&&Kg(M.parent.update)}).catch(j=>{W(j),it.value=j}),()=>{if(ct.value&&x)return zf(x,M);if(it.value&&h)return xt(h,{error:it.value});if(d&&!H.value)return xt(d)}}})}function zf(r,{vnode:{ref:c,props:d,children:h,shapeFlag:g},parent:m}){const b=xt(r,d,h);return b.ref=c,b}const pc=r=>r.type.__isKeepAlive,TM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:c}){const d=Lo(),h=d.ctx;if(!h.renderer)return()=>{const j=c.default&&c.default();return j&&j.length===1?j[0]:j};const g=new Map,m=new Set;let b=null;const _=d.suspense,{renderer:{p:w,m:x,um:E,o:{createElement:S}}}=h,v=S("div");h.activate=(j,K,nt,ut,Dt)=>{const V=j.component;x(j,K,nt,0,_),w(V.vnode,j,K,nt,V,_,ut,j.slotScopeIds,Dt),an(()=>{V.isDeactivated=!1,V.a&&ys(V.a);const U=j.props&&j.props.onVnodeMounted;U&&Sn(U,V.parent,j)},_)},h.deactivate=j=>{const K=j.component;x(j,v,null,1,_),an(()=>{K.da&&ys(K.da);const nt=j.props&&j.props.onVnodeUnmounted;nt&&Sn(nt,K.parent,j),K.isDeactivated=!0},_)};function M(j){jf(j),E(j,d,_,!0)}function W(j){g.forEach((K,nt)=>{const ut=pd(K.type);ut&&(!j||!j(ut))&&ct(nt)})}function ct(j){const K=g.get(j);!b||K.type!==b.type?M(K):b&&jf(b),g.delete(j),m.delete(j)}zi(()=>[r.include,r.exclude],([j,K])=>{j&&W(nt=>$a(j,nt)),K&&W(nt=>!$a(K,nt))},{flush:"post",deep:!0});let it=null;const H=()=>{it!=null&&g.set(it,Ff(d.subTree))};return cn(H),Bd(H),Ld(()=>{g.forEach(j=>{const{subTree:K,suspense:nt}=d,ut=Ff(K);if(j.type===ut.type){jf(ut);const Dt=ut.component.da;Dt&&an(Dt,nt);return}M(j)})}),()=>{if(it=null,!c.default)return null;const j=c.default(),K=j[0];if(j.length>1)return b=null,j;if(!Hi(K)||!(K.shapeFlag&4)&&!(K.shapeFlag&128))return b=null,K;let nt=Ff(K);const ut=nt.type,Dt=pd(xr(nt)?nt.type.__asyncResolved||{}:ut),{include:V,exclude:U,max:G}=r;if(V&&(!Dt||!$a(V,Dt))||U&&Dt&&$a(U,Dt))return b=nt,K;const Y=nt.key==null?ut:nt.key,et=g.get(Y);return nt.el&&(nt=Bo(nt),K.shapeFlag&128&&(K.ssContent=nt)),it=Y,et?(nt.el=et.el,nt.component=et.component,nt.transition&&Dr(nt,nt.transition),nt.shapeFlag|=512,m.delete(Y),m.add(Y)):(m.add(Y),G&&m.size>parseInt(G,10)&&ct(m.values().next().value)),nt.shapeFlag|=256,b=nt,OC(K.type)?K:nt}}},IM=TM;function $a(r,c){return Ot(r)?r.some(d=>$a(d,c)):Pe(r)?r.split(",").includes(c):r.test?r.test(c):!1}function VC(r,c){HC(r,"a",c)}function $C(r,c){HC(r,"da",c)}function HC(r,c,d=We){const h=r.__wdc||(r.__wdc=()=>{let g=d;for(;g;){if(g.isDeactivated)return;g=g.parent}return r()});if(Nd(c,h,d),d){let g=d.parent;for(;g&&g.parent;)pc(g.parent.vnode)&&MM(h,c,d,g),g=g.parent}}function MM(r,c,d,h){const g=Nd(c,r,h,!0);mc(()=>{Lg(h[c],g)},d)}function jf(r){let c=r.shapeFlag;c&256&&(c-=256),c&512&&(c-=512),r.shapeFlag=c}function Ff(r){return r.shapeFlag&128?r.ssContent:r}function Nd(r,c,d=We,h=!1){if(d){const g=d[r]||(d[r]=[]),m=c.__weh||(c.__weh=(...b)=>{if(d.isUnmounted)return;Mr(),Ui(d);const _=Fn(c,d,r,b);return ji(),Pr(),_});return h?g.unshift(m):g.push(m),m}}const ai=r=>(c,d=We)=>(!Ms||r==="sp")&&Nd(r,c,d),UC=ai("bm"),cn=ai("m"),qC=ai("bu"),Bd=ai("u"),Ld=ai("bum"),mc=ai("um"),WC=ai("sp"),GC=ai("rtg"),KC=ai("rtc");function YC(r,c=We){Nd("ec",r,c)}function Ie(r,c){const d=pn;if(d===null)return r;const h=Rd(d)||d.proxy,g=r.dirs||(r.dirs=[]);for(let m=0;m<c.length;m++){let[b,_,w,x=le]=c[m];qt(b)&&(b={mounted:b,updated:b}),b.deep&&Cr(_),g.push({dir:b,instance:h,value:_,oldValue:void 0,arg:w,modifiers:x})}return r}function Do(r,c,d,h){const g=r.dirs,m=c&&c.dirs;for(let b=0;b<g.length;b++){const _=g[b];m&&(_.oldValue=m[b].value);let w=_.dir[h];w&&(Mr(),Fn(w,d,8,[r.el,_,r,c]),Pr())}}const tp="components",PM="directives";function Wi(r,c){return ep(tp,r,!0,c)||r}const QC=Symbol();function Es(r){return Pe(r)?ep(tp,r,!1)||r:r||QC}function NM(r){return ep(PM,r)}function ep(r,c,d=!0,h=!1){const g=pn||We;if(g){const m=g.type;if(r===tp){const _=pd(m,!1);if(_&&(_===c||_===Vn(c)||_===hc(Vn(c))))return m}const b=oA(g[r]||m[r],c)||oA(g.appContext[r],c);return!b&&h?m:b}}function oA(r,c){return r&&(r[c]||r[Vn(c)]||r[hc(Vn(c))])}function mn(r,c,d,h){let g;const m=d&&d[h];if(Ot(r)||Pe(r)){g=new Array(r.length);for(let b=0,_=r.length;b<_;b++)g[b]=c(r[b],b,void 0,m&&m[b])}else if(typeof r=="number"){g=new Array(r);for(let b=0;b<r;b++)g[b]=c(b+1,b,void 0,m&&m[b])}else if(Oe(r))if(r[Symbol.iterator])g=Array.from(r,(b,_)=>c(b,_,void 0,m&&m[_]));else{const b=Object.keys(r);g=new Array(b.length);for(let _=0,w=b.length;_<w;_++){const x=b[_];g[_]=c(r[x],x,_,m&&m[_])}}else g=[];return d&&(d[h]=g),g}function BM(r,c){for(let d=0;d<c.length;d++){const h=c[d];if(Ot(h))for(let g=0;g<h.length;g++)r[h[g].name]=h[g].fn;else h&&(r[h.name]=h.fn)}return r}function LM(r,c,d={},h,g){if(pn.isCE||pn.parent&&xr(pn.parent)&&pn.parent.isCE)return xt("slot",c==="default"?null:{name:c},h&&h());let m=r[c];m&&m._c&&(m._d=!1),At();const b=m&&ZC(m(d)),_=ri(Zt,{key:d.key||`_${c}`},b||(h?h():[]),b&&r._===1?64:-2);return!g&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),m&&m._c&&(m._d=!0),_}function ZC(r){return r.some(c=>Hi(c)?!(c.type===bn||c.type===Zt&&!ZC(c.children)):!0)?r:null}function OM(r){const c={};for(const d in r)c[Ua(d)]=r[d];return c}const lg=r=>r?p0(r)?Rd(r)||r.proxy:lg(r.parent):null,ud=Le(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>lg(r.parent),$root:r=>lg(r.root),$emit:r=>r.emit,$options:r=>XC(r),$forceUpdate:r=>r.f||(r.f=()=>Kg(r.update)),$nextTick:r=>r.n||(r.n=No.bind(r.proxy)),$watch:r=>EM.bind(r)}),dg={get({_:r},c){const{ctx:d,setupState:h,data:g,props:m,accessCache:b,type:_,appContext:w}=r;let x;if(c[0]!=="$"){const M=b[c];if(M!==void 0)switch(M){case 1:return h[c];case 2:return g[c];case 4:return d[c];case 3:return m[c]}else{if(h!==le&&ee(h,c))return b[c]=1,h[c];if(g!==le&&ee(g,c))return b[c]=2,g[c];if((x=r.propsOptions[0])&&ee(x,c))return b[c]=3,m[c];if(d!==le&&ee(d,c))return b[c]=4,d[c];ug&&(b[c]=0)}}const E=ud[c];let S,v;if(E)return c==="$attrs"&&$n(r,"get",c),E(r);if((S=_.__cssModules)&&(S=S[c]))return S;if(d!==le&&ee(d,c))return b[c]=4,d[c];if(v=w.config.globalProperties,ee(v,c))return v[c]},set({_:r},c,d){const{data:h,setupState:g,ctx:m}=r;return g!==le&&ee(g,c)?(g[c]=d,!0):h!==le&&ee(h,c)?(h[c]=d,!0):ee(r.props,c)||c[0]==="$"&&c.slice(1)in r?!1:(m[c]=d,!0)},has({_:{data:r,setupState:c,accessCache:d,ctx:h,appContext:g,propsOptions:m}},b){let _;return!!d[b]||r!==le&&ee(r,b)||c!==le&&ee(c,b)||(_=m[0])&&ee(_,b)||ee(h,b)||ee(ud,b)||ee(g.config.globalProperties,b)},defineProperty(r,c,d){return d.get!=null?r._.accessCache[c]=0:ee(d,"value")&&this.set(r,c,d.value,null),Reflect.defineProperty(r,c,d)}},RM=Le({},dg,{get(r,c){if(c!==Symbol.unscopables)return dg.get(r,c,r)},has(r,c){return c[0]!=="_"&&!oI(c)}});let ug=!0;function zM(r){const c=XC(r),d=r.proxy,h=r.ctx;ug=!1,c.beforeCreate&&iA(c.beforeCreate,r,"bc");const{data:g,computed:m,methods:b,watch:_,provide:w,inject:x,created:E,beforeMount:S,mounted:v,beforeUpdate:M,updated:W,activated:ct,deactivated:it,beforeDestroy:H,beforeUnmount:j,destroyed:K,unmounted:nt,render:ut,renderTracked:Dt,renderTriggered:V,errorCaptured:U,serverPrefetch:G,expose:Y,inheritAttrs:et,components:O,directives:_t,filters:pt}=c;if(x&&jM(x,h,null,r.appContext.config.unwrapInjectedRef),b)for(const yt in b){const Kt=b[yt];qt(Kt)&&(h[yt]=Kt.bind(d))}if(g){const yt=g.call(d,d);Oe(yt)&&(r.data=Mn(yt))}if(ug=!0,m)for(const yt in m){const Kt=m[yt],de=qt(Kt)?Kt.bind(d,d):qt(Kt.get)?Kt.get.bind(d,d):mo,ne=!qt(Kt)&&qt(Kt.set)?Kt.set.bind(d):mo,oe=se({get:de,set:ne});Object.defineProperty(h,yt,{enumerable:!0,configurable:!0,get:()=>oe.value,set:zt=>oe.value=zt})}if(_)for(const yt in _)JC(_[yt],h,d,yt);if(w){const yt=qt(w)?w.call(d):w;Reflect.ownKeys(yt).forEach(Kt=>{Ya(Kt,yt[Kt])})}E&&iA(E,r,"c");function Pt(yt,Kt){Ot(Kt)?Kt.forEach(de=>yt(de.bind(d))):Kt&&yt(Kt.bind(d))}if(Pt(UC,S),Pt(cn,v),Pt(qC,M),Pt(Bd,W),Pt(VC,ct),Pt($C,it),Pt(YC,U),Pt(KC,Dt),Pt(GC,V),Pt(Ld,j),Pt(mc,nt),Pt(WC,G),Ot(Y))if(Y.length){const yt=r.exposed||(r.exposed={});Y.forEach(Kt=>{Object.defineProperty(yt,Kt,{get:()=>d[Kt],set:de=>d[Kt]=de})})}else r.exposed||(r.exposed={});ut&&r.render===mo&&(r.render=ut),et!=null&&(r.inheritAttrs=et),O&&(r.components=O),_t&&(r.directives=_t)}function jM(r,c,d=mo,h=!1){Ot(r)&&(r=hg(r));for(const g in r){const m=r[g];let b;Oe(m)?"default"in m?b=bo(m.from||g,m.default,!0):b=bo(m.from||g):b=bo(m),Se(b)&&h?Object.defineProperty(c,g,{enumerable:!0,configurable:!0,get:()=>b.value,set:_=>b.value=_}):c[g]=b}}function iA(r,c,d){Fn(Ot(r)?r.map(h=>h.bind(c.proxy)):r.bind(c.proxy),c,d)}function JC(r,c,d,h){const g=h.includes(".")?jC(d,h):()=>d[h];if(Pe(r)){const m=c[r];qt(m)&&zi(g,m)}else if(qt(r))zi(g,r.bind(d));else if(Oe(r))if(Ot(r))r.forEach(m=>JC(m,c,d,h));else{const m=qt(r.handler)?r.handler.bind(d):c[r.handler];qt(m)&&zi(g,m,r)}}function XC(r){const c=r.type,{mixins:d,extends:h}=c,{mixins:g,optionsCache:m,config:{optionMergeStrategies:b}}=r.appContext,_=m.get(c);let w;return _?w=_:!g.length&&!d&&!h?w=c:(w={},g.length&&g.forEach(x=>hd(w,x,b,!0)),hd(w,c,b)),m.set(c,w),w}function hd(r,c,d,h=!1){const{mixins:g,extends:m}=c;m&&hd(r,m,d,!0),g&&g.forEach(b=>hd(r,b,d,!0));for(const b in c)if(!(h&&b==="expose")){const _=FM[b]||d&&d[b];r[b]=_?_(r[b],c[b]):c[b]}return r}const FM={data:rA,props:wr,emits:wr,methods:wr,computed:wr,beforeCreate:wn,created:wn,beforeMount:wn,mounted:wn,beforeUpdate:wn,updated:wn,beforeDestroy:wn,beforeUnmount:wn,destroyed:wn,unmounted:wn,activated:wn,deactivated:wn,errorCaptured:wn,serverPrefetch:wn,components:wr,directives:wr,watch:$M,provide:rA,inject:VM};function rA(r,c){return c?r?function(){return Le(qt(r)?r.call(this,this):r,qt(c)?c.call(this,this):c)}:c:r}function VM(r,c){return wr(hg(r),hg(c))}function hg(r){if(Ot(r)){const c={};for(let d=0;d<r.length;d++)c[r[d]]=r[d];return c}return r}function wn(r,c){return r?[...new Set([].concat(r,c))]:c}function wr(r,c){return r?Le(Le(Object.create(null),r),c):c}function $M(r,c){if(!r)return c;if(!c)return r;const d=Le(Object.create(null),r);for(const h in c)d[h]=wn(r[h],c[h]);return d}function HM(r,c,d,h=!1){const g={},m={};ad(m,Od,1),r.propsDefaults=Object.create(null),t0(r,c,g,m);for(const b in r.propsOptions[0])b in g||(g[b]=void 0);d?r.props=h?g:yC(g):r.type.props?r.props=g:r.props=m,r.attrs=m}function UM(r,c,d,h){const{props:g,attrs:m,vnode:{patchFlag:b}}=r,_=Xt(g),[w]=r.propsOptions;let x=!1;if((h||b>0)&&!(b&16)){if(b&8){const E=r.vnode.dynamicProps;for(let S=0;S<E.length;S++){let v=E[S];if(Id(r.emitsOptions,v))continue;const M=c[v];if(w)if(ee(m,v))M!==m[v]&&(m[v]=M,x=!0);else{const W=Vn(v);g[W]=fg(w,_,W,M,r,!1)}else M!==m[v]&&(m[v]=M,x=!0)}}}else{t0(r,c,g,m)&&(x=!0);let E;for(const S in _)(!c||!ee(c,S)&&((E=To(S))===S||!ee(c,E)))&&(w?d&&(d[S]!==void 0||d[E]!==void 0)&&(g[S]=fg(w,_,S,void 0,r,!0)):delete g[S]);if(m!==_)for(const S in m)(!c||!ee(c,S)&&!0)&&(delete m[S],x=!0)}x&&si(r,"set","$attrs")}function t0(r,c,d,h){const[g,m]=r.propsOptions;let b=!1,_;if(c)for(let w in c){if(Ha(w))continue;const x=c[w];let E;g&&ee(g,E=Vn(w))?!m||!m.includes(E)?d[E]=x:(_||(_={}))[E]=x:Id(r.emitsOptions,w)||(!(w in h)||x!==h[w])&&(h[w]=x,b=!0)}if(m){const w=Xt(d),x=_||le;for(let E=0;E<m.length;E++){const S=m[E];d[S]=fg(g,w,S,x[S],r,!ee(x,S))}}return b}function fg(r,c,d,h,g,m){const b=r[d];if(b!=null){const _=ee(b,"default");if(_&&h===void 0){const w=b.default;if(b.type!==Function&&qt(w)){const{propsDefaults:x}=g;d in x?h=x[d]:(Ui(g),h=x[d]=w.call(null,c),ji())}else h=w}b[0]&&(m&&!_?h=!1:b[1]&&(h===""||h===To(d))&&(h=!0))}return h}function e0(r,c,d=!1){const h=c.propsCache,g=h.get(r);if(g)return g;const m=r.props,b={},_=[];let w=!1;if(!qt(r)){const E=S=>{w=!0;const[v,M]=e0(S,c,!0);Le(b,v),M&&_.push(...M)};!d&&c.mixins.length&&c.mixins.forEach(E),r.extends&&E(r.extends),r.mixins&&r.mixins.forEach(E)}if(!m&&!w)return h.set(r,As),As;if(Ot(m))for(let E=0;E<m.length;E++){const S=Vn(m[E]);sA(S)&&(b[S]=le)}else if(m)for(const E in m){const S=Vn(E);if(sA(S)){const v=m[E],M=b[S]=Ot(v)||qt(v)?{type:v}:v;if(M){const W=lA(Boolean,M.type),ct=lA(String,M.type);M[0]=W>-1,M[1]=ct<0||W<ct,(W>-1||ee(M,"default"))&&_.push(S)}}}const x=[b,_];return h.set(r,x),x}function sA(r){return r[0]!=="$"}function aA(r){const c=r&&r.toString().match(/^\s*function (\w+)/);return c?c[1]:r===null?"null":""}function cA(r,c){return aA(r)===aA(c)}function lA(r,c){return Ot(c)?c.findIndex(d=>cA(d,r)):qt(c)&&cA(c,r)?0:-1}const n0=r=>r[0]==="_"||r==="$stable",np=r=>Ot(r)?r.map(zn):[zn(r)],qM=(r,c,d)=>{if(c._n)return c;const h=_n((...g)=>np(c(...g)),d);return h._c=!1,h},o0=(r,c,d)=>{const h=r._ctx;for(const g in r){if(n0(g))continue;const m=r[g];if(qt(m))c[g]=qM(g,m,h);else if(m!=null){const b=np(m);c[g]=()=>b}}},i0=(r,c)=>{const d=np(c);r.slots.default=()=>d},WM=(r,c)=>{if(r.vnode.shapeFlag&32){const d=c._;d?(r.slots=Xt(c),ad(c,"_",d)):o0(c,r.slots={})}else r.slots={},c&&i0(r,c);ad(r.slots,Od,1)},GM=(r,c,d)=>{const{vnode:h,slots:g}=r;let m=!0,b=le;if(h.shapeFlag&32){const _=c._;_?d&&_===1?m=!1:(Le(g,c),!d&&_===1&&delete g._):(m=!c.$stable,o0(c,g)),b=c}else c&&(i0(r,c),b={default:1});if(m)for(const _ in g)!n0(_)&&!(_ in b)&&delete g[_]};function r0(){return{app:null,config:{isNativeTag:uI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KM=0;function YM(r,c){return function(h,g=null){qt(h)||(h=Object.assign({},h)),g!=null&&!Oe(g)&&(g=null);const m=r0(),b=new Set;let _=!1;const w=m.app={_uid:KM++,_component:h,_props:g,_container:null,_context:m,_instance:null,version:C0,get config(){return m.config},set config(x){},use(x,...E){return b.has(x)||(x&&qt(x.install)?(b.add(x),x.install(w,...E)):qt(x)&&(b.add(x),x(w,...E))),w},mixin(x){return m.mixins.includes(x)||m.mixins.push(x),w},component(x,E){return E?(m.components[x]=E,w):m.components[x]},directive(x,E){return E?(m.directives[x]=E,w):m.directives[x]},mount(x,E,S){if(!_){const v=xt(h,g);return v.appContext=m,E&&c?c(v,x):r(v,x,S),_=!0,w._container=x,x.__vue_app__=w,Rd(v.component)||v.component.proxy}},unmount(){_&&(r(null,w._container),delete w._container.__vue_app__)},provide(x,E){return m.provides[x]=E,w}};return w}}function fd(r,c,d,h,g=!1){if(Ot(r)){r.forEach((v,M)=>fd(v,c&&(Ot(c)?c[M]:c),d,h,g));return}if(xr(h)&&!g)return;const m=h.shapeFlag&4?Rd(h.component)||h.component.proxy:h.el,b=g?null:m,{i:_,r:w}=r,x=c&&c.r,E=_.refs===le?_.refs={}:_.refs,S=_.setupState;if(x!=null&&x!==w&&(Pe(x)?(E[x]=null,ee(S,x)&&(S[x]=null)):Se(x)&&(x.value=null)),qt(w))Mo(w,_,12,[b,E]);else{const v=Pe(w),M=Se(w);if(v||M){const W=()=>{if(r.f){const ct=v?E[w]:w.value;g?Ot(ct)&&Lg(ct,m):Ot(ct)?ct.includes(m)||ct.push(m):v?(E[w]=[m],ee(S,w)&&(S[w]=E[w])):(w.value=[m],r.k&&(E[r.k]=w.value))}else v?(E[w]=b,ee(S,w)&&(S[w]=b)):M&&(w.value=b,r.k&&(E[r.k]=b))};b?(W.id=-1,an(W,d)):W()}}}let xi=!1;const ql=r=>/svg/.test(r.namespaceURI)&&r.tagName!=="foreignObject",Wl=r=>r.nodeType===8;function QM(r){const{mt:c,p:d,o:{patchProp:h,createText:g,nextSibling:m,parentNode:b,remove:_,insert:w,createComment:x}}=r,E=(H,j)=>{if(!j.hasChildNodes()){d(null,H,j),dd(),j._vnode=H;return}xi=!1,S(j.firstChild,H,null,null,null),dd(),j._vnode=H,xi&&console.error("Hydration completed but contains mismatches.")},S=(H,j,K,nt,ut,Dt=!1)=>{const V=Wl(H)&&H.data==="[",U=()=>ct(H,j,K,nt,ut,V),{type:G,ref:Y,shapeFlag:et,patchFlag:O}=j,_t=H.nodeType;j.el=H,O===-2&&(Dt=!1,j.dynamicChildren=null);let pt=null;switch(G){case Is:_t!==3?j.children===""?(w(j.el=g(""),b(H),H),pt=H):pt=U():(H.data!==j.children&&(xi=!0,H.data=j.children),pt=m(H));break;case bn:_t!==8||V?pt=U():pt=m(H);break;case Er:if(_t!==1&&_t!==3)pt=U();else{pt=H;const Bt=!j.children.length;for(let Pt=0;Pt<j.staticCount;Pt++)Bt&&(j.children+=pt.nodeType===1?pt.outerHTML:pt.data),Pt===j.staticCount-1&&(j.anchor=pt),pt=m(pt);return pt}break;case Zt:V?pt=W(H,j,K,nt,ut,Dt):pt=U();break;default:if(et&1)_t!==1||j.type.toLowerCase()!==H.tagName.toLowerCase()?pt=U():pt=v(H,j,K,nt,ut,Dt);else if(et&6){j.slotScopeIds=ut;const Bt=b(H);if(c(j,Bt,null,K,nt,ql(Bt),Dt),pt=V?it(H):m(H),pt&&Wl(pt)&&pt.data==="teleport end"&&(pt=m(pt)),xr(j)){let Pt;V?(Pt=xt(Zt),Pt.anchor=pt?pt.previousSibling:Bt.lastChild):Pt=H.nodeType===3?Ee(""):xt("div"),Pt.el=H,j.component.subTree=Pt}}else et&64?_t!==8?pt=U():pt=j.type.hydrate(H,j,K,nt,ut,Dt,r,M):et&128&&(pt=j.type.hydrate(H,j,K,nt,ql(b(H)),ut,Dt,r,S))}return Y!=null&&fd(Y,null,nt,j),pt},v=(H,j,K,nt,ut,Dt)=>{Dt=Dt||!!j.dynamicChildren;const{type:V,props:U,patchFlag:G,shapeFlag:Y,dirs:et}=j,O=V==="input"&&et||V==="option";if(O||G!==-1){if(et&&Do(j,null,K,"created"),U)if(O||!Dt||G&48)for(const pt in U)(O&&pt.endsWith("value")||dc(pt)&&!Ha(pt))&&h(H,pt,null,U[pt],!1,void 0,K);else U.onClick&&h(H,"onClick",null,U.onClick,!1,void 0,K);let _t;if((_t=U&&U.onVnodeBeforeMount)&&Sn(_t,K,j),et&&Do(j,null,K,"beforeMount"),((_t=U&&U.onVnodeMounted)||et)&&RC(()=>{_t&&Sn(_t,K,j),et&&Do(j,null,K,"mounted")},nt),Y&16&&!(U&&(U.innerHTML||U.textContent))){let pt=M(H.firstChild,j,H,K,nt,ut,Dt);for(;pt;){xi=!0;const Bt=pt;pt=pt.nextSibling,_(Bt)}}else Y&8&&H.textContent!==j.children&&(xi=!0,H.textContent=j.children)}return H.nextSibling},M=(H,j,K,nt,ut,Dt,V)=>{V=V||!!j.dynamicChildren;const U=j.children,G=U.length;for(let Y=0;Y<G;Y++){const et=V?U[Y]:U[Y]=zn(U[Y]);if(H)H=S(H,et,nt,ut,Dt,V);else{if(et.type===Is&&!et.children)continue;xi=!0,d(null,et,K,null,nt,ut,ql(K),Dt)}}return H},W=(H,j,K,nt,ut,Dt)=>{const{slotScopeIds:V}=j;V&&(ut=ut?ut.concat(V):V);const U=b(H),G=M(m(H),j,U,K,nt,ut,Dt);return G&&Wl(G)&&G.data==="]"?m(j.anchor=G):(xi=!0,w(j.anchor=x("]"),U,G),G)},ct=(H,j,K,nt,ut,Dt)=>{if(xi=!0,j.el=null,Dt){const G=it(H);for(;;){const Y=m(H);if(Y&&Y!==G)_(Y);else break}}const V=m(H),U=b(H);return _(H),d(null,j,U,V,K,nt,ql(U),ut),V},it=H=>{let j=0;for(;H;)if(H=m(H),H&&Wl(H)&&(H.data==="["&&j++,H.data==="]")){if(j===0)return m(H);j--}return H};return[E,S]}const an=RC;function s0(r){return c0(r)}function a0(r){return c0(r,QM)}function c0(r,c){const d=bI();d.__VUE__=!0;const{insert:h,remove:g,patchProp:m,createElement:b,createText:_,createComment:w,setText:x,setElementText:E,parentNode:S,nextSibling:v,setScopeId:M=mo,cloneNode:W,insertStaticContent:ct}=r,it=(L,$,Q,ot=null,rt=null,mt=null,kt=!1,gt=null,wt=!!$.dynamicChildren)=>{if(L===$)return;L&&!So(L,$)&&(ot=tt(L),ae(L,rt,mt,!0),L=null),$.patchFlag===-2&&(wt=!1,$.dynamicChildren=null);const{type:at,ref:Nt,shapeFlag:Et}=$;switch(at){case Is:H(L,$,Q,ot);break;case bn:j(L,$,Q,ot);break;case Er:L==null&&K($,Q,ot,kt);break;case Zt:_t(L,$,Q,ot,rt,mt,kt,gt,wt);break;default:Et&1?Dt(L,$,Q,ot,rt,mt,kt,gt,wt):Et&6?pt(L,$,Q,ot,rt,mt,kt,gt,wt):(Et&64||Et&128)&&at.process(L,$,Q,ot,rt,mt,kt,gt,wt,te)}Nt!=null&&rt&&fd(Nt,L&&L.ref,mt,$||L,!$)},H=(L,$,Q,ot)=>{if(L==null)h($.el=_($.children),Q,ot);else{const rt=$.el=L.el;$.children!==L.children&&x(rt,$.children)}},j=(L,$,Q,ot)=>{L==null?h($.el=w($.children||""),Q,ot):$.el=L.el},K=(L,$,Q,ot)=>{[L.el,L.anchor]=ct(L.children,$,Q,ot,L.el,L.anchor)},nt=({el:L,anchor:$},Q,ot)=>{let rt;for(;L&&L!==$;)rt=v(L),h(L,Q,ot),L=rt;h($,Q,ot)},ut=({el:L,anchor:$})=>{let Q;for(;L&&L!==$;)Q=v(L),g(L),L=Q;g($)},Dt=(L,$,Q,ot,rt,mt,kt,gt,wt)=>{kt=kt||$.type==="svg",L==null?V($,Q,ot,rt,mt,kt,gt,wt):Y(L,$,rt,mt,kt,gt,wt)},V=(L,$,Q,ot,rt,mt,kt,gt)=>{let wt,at;const{type:Nt,props:Et,shapeFlag:It,transition:bt,patchFlag:$t,dirs:Yt}=L;if(L.el&&W!==void 0&&$t===-1)wt=L.el=W(L.el);else{if(wt=L.el=b(L.type,mt,Et&&Et.is,Et),It&8?E(wt,L.children):It&16&&G(L.children,wt,null,ot,rt,mt&&Nt!=="foreignObject",kt,gt),Yt&&Do(L,null,ot,"created"),Et){for(const Wt in Et)Wt!=="value"&&!Ha(Wt)&&m(wt,Wt,null,Et[Wt],mt,L.children,ot,rt,lt);"value"in Et&&m(wt,"value",null,Et.value),(at=Et.onVnodeBeforeMount)&&Sn(at,ot,L)}U(wt,L,L.scopeId,kt,ot)}Yt&&Do(L,null,ot,"beforeMount");const Ht=(!rt||rt&&!rt.pendingBranch)&&bt&&!bt.persisted;Ht&&bt.beforeEnter(wt),h(wt,$,Q),((at=Et&&Et.onVnodeMounted)||Ht||Yt)&&an(()=>{at&&Sn(at,ot,L),Ht&&bt.enter(wt),Yt&&Do(L,null,ot,"mounted")},rt)},U=(L,$,Q,ot,rt)=>{if(Q&&M(L,Q),ot)for(let mt=0;mt<ot.length;mt++)M(L,ot[mt]);if(rt){let mt=rt.subTree;if($===mt){const kt=rt.vnode;U(L,kt,kt.scopeId,kt.slotScopeIds,rt.parent)}}},G=(L,$,Q,ot,rt,mt,kt,gt,wt=0)=>{for(let at=wt;at<L.length;at++){const Nt=L[at]=gt?Pi(L[at]):zn(L[at]);it(null,Nt,$,Q,ot,rt,mt,kt,gt)}},Y=(L,$,Q,ot,rt,mt,kt)=>{const gt=$.el=L.el;let{patchFlag:wt,dynamicChildren:at,dirs:Nt}=$;wt|=L.patchFlag&16;const Et=L.props||le,It=$.props||le;let bt;Q&&br(Q,!1),(bt=It.onVnodeBeforeUpdate)&&Sn(bt,Q,$,L),Nt&&Do($,L,Q,"beforeUpdate"),Q&&br(Q,!0);const $t=rt&&$.type!=="foreignObject";if(at?et(L.dynamicChildren,at,gt,Q,ot,$t,mt):kt||de(L,$,gt,null,Q,ot,$t,mt,!1),wt>0){if(wt&16)O(gt,$,Et,It,Q,ot,rt);else if(wt&2&&Et.class!==It.class&&m(gt,"class",null,It.class,rt),wt&4&&m(gt,"style",Et.style,It.style,rt),wt&8){const Yt=$.dynamicProps;for(let Ht=0;Ht<Yt.length;Ht++){const Wt=Yt[Ht],ce=Et[Wt],Un=It[Wt];(Un!==ce||Wt==="value")&&m(gt,Wt,ce,Un,rt,L.children,Q,ot,lt)}}wt&1&&L.children!==$.children&&E(gt,$.children)}else!kt&&at==null&&O(gt,$,Et,It,Q,ot,rt);((bt=It.onVnodeUpdated)||Nt)&&an(()=>{bt&&Sn(bt,Q,$,L),Nt&&Do($,L,Q,"updated")},ot)},et=(L,$,Q,ot,rt,mt,kt)=>{for(let gt=0;gt<$.length;gt++){const wt=L[gt],at=$[gt],Nt=wt.el&&(wt.type===Zt||!So(wt,at)||wt.shapeFlag&70)?S(wt.el):Q;it(wt,at,Nt,null,ot,rt,mt,kt,!0)}},O=(L,$,Q,ot,rt,mt,kt)=>{if(Q!==ot){for(const gt in ot){if(Ha(gt))continue;const wt=ot[gt],at=Q[gt];wt!==at&&gt!=="value"&&m(L,gt,at,wt,kt,$.children,rt,mt,lt)}if(Q!==le)for(const gt in Q)!Ha(gt)&&!(gt in ot)&&m(L,gt,Q[gt],null,kt,$.children,rt,mt,lt);"value"in ot&&m(L,"value",Q.value,ot.value)}},_t=(L,$,Q,ot,rt,mt,kt,gt,wt)=>{const at=$.el=L?L.el:_(""),Nt=$.anchor=L?L.anchor:_("");let{patchFlag:Et,dynamicChildren:It,slotScopeIds:bt}=$;bt&&(gt=gt?gt.concat(bt):bt),L==null?(h(at,Q,ot),h(Nt,Q,ot),G($.children,Q,Nt,rt,mt,kt,gt,wt)):Et>0&&Et&64&&It&&L.dynamicChildren?(et(L.dynamicChildren,It,Q,rt,mt,kt,gt),($.key!=null||rt&&$===rt.subTree)&&op(L,$,!0)):de(L,$,Q,Nt,rt,mt,kt,gt,wt)},pt=(L,$,Q,ot,rt,mt,kt,gt,wt)=>{$.slotScopeIds=gt,L==null?$.shapeFlag&512?rt.ctx.activate($,Q,ot,kt,wt):Bt($,Q,ot,rt,mt,kt,wt):Pt(L,$,wt)},Bt=(L,$,Q,ot,rt,mt,kt)=>{const gt=L.component=g0(L,ot,rt);if(pc(L)&&(gt.ctx.renderer=te),m0(gt),gt.asyncDep){if(rt&&rt.registerDep(gt,yt),!L.el){const wt=gt.subTree=xt(bn);j(null,wt,$,Q)}return}yt(gt,L,$,Q,rt,mt,kt)},Pt=(L,$,Q)=>{const ot=$.component=L.component;if(bM(L,$,Q))if(ot.asyncDep&&!ot.asyncResolved){Kt(ot,$,Q);return}else ot.next=$,cM(ot.update),ot.update();else $.el=L.el,ot.vnode=$},yt=(L,$,Q,ot,rt,mt,kt)=>{const gt=()=>{if(L.isMounted){let{next:Nt,bu:Et,u:It,parent:bt,vnode:$t}=L,Yt=Nt,Ht;br(L,!1),Nt?(Nt.el=$t.el,Kt(L,Nt,kt)):Nt=$t,Et&&ys(Et),(Ht=Nt.props&&Nt.props.onVnodeBeforeUpdate)&&Sn(Ht,bt,Nt,$t),br(L,!0);const Wt=td(L),ce=L.subTree;L.subTree=Wt,it(ce,Wt,S(ce.el),tt(ce),L,rt,mt),Nt.el=Wt.el,Yt===null&&Qg(L,Wt.el),It&&an(It,rt),(Ht=Nt.props&&Nt.props.onVnodeUpdated)&&an(()=>Sn(Ht,bt,Nt,$t),rt)}else{let Nt;const{el:Et,props:It}=$,{bm:bt,m:$t,parent:Yt}=L,Ht=xr($);if(br(L,!1),bt&&ys(bt),!Ht&&(Nt=It&&It.onVnodeBeforeMount)&&Sn(Nt,Yt,$),br(L,!0),Et&&Lt){const Wt=()=>{L.subTree=td(L),Lt(Et,L.subTree,L,rt,null)};Ht?$.type.__asyncLoader().then(()=>!L.isUnmounted&&Wt()):Wt()}else{const Wt=L.subTree=td(L);it(null,Wt,Q,ot,L,rt,mt),$.el=Wt.el}if($t&&an($t,rt),!Ht&&(Nt=It&&It.onVnodeMounted)){const Wt=$;an(()=>Sn(Nt,Yt,Wt),rt)}($.shapeFlag&256||Yt&&xr(Yt.vnode)&&Yt.vnode.shapeFlag&256)&&L.a&&an(L.a,rt),L.isMounted=!0,$=Q=ot=null}},wt=L.effect=new fc(gt,()=>Kg(at),L.scope),at=L.update=()=>wt.run();at.id=L.uid,br(L,!0),at()},Kt=(L,$,Q)=>{$.component=L;const ot=L.vnode.props;L.vnode=$,L.next=null,UM(L,$.props,ot,Q),GM(L,$.children,Q),Mr(),Td(void 0,L.update),Pr()},de=(L,$,Q,ot,rt,mt,kt,gt,wt=!1)=>{const at=L&&L.children,Nt=L?L.shapeFlag:0,Et=$.children,{patchFlag:It,shapeFlag:bt}=$;if(It>0){if(It&128){oe(at,Et,Q,ot,rt,mt,kt,gt,wt);return}else if(It&256){ne(at,Et,Q,ot,rt,mt,kt,gt,wt);return}}bt&8?(Nt&16&&lt(at,rt,mt),Et!==at&&E(Q,Et)):Nt&16?bt&16?oe(at,Et,Q,ot,rt,mt,kt,gt,wt):lt(at,rt,mt,!0):(Nt&8&&E(Q,""),bt&16&&G(Et,Q,ot,rt,mt,kt,gt,wt))},ne=(L,$,Q,ot,rt,mt,kt,gt,wt)=>{L=L||As,$=$||As;const at=L.length,Nt=$.length,Et=Math.min(at,Nt);let It;for(It=0;It<Et;It++){const bt=$[It]=wt?Pi($[It]):zn($[It]);it(L[It],bt,Q,null,rt,mt,kt,gt,wt)}at>Nt?lt(L,rt,mt,!0,!1,Et):G($,Q,ot,rt,mt,kt,gt,wt,Et)},oe=(L,$,Q,ot,rt,mt,kt,gt,wt)=>{let at=0;const Nt=$.length;let Et=L.length-1,It=Nt-1;for(;at<=Et&&at<=It;){const bt=L[at],$t=$[at]=wt?Pi($[at]):zn($[at]);if(So(bt,$t))it(bt,$t,Q,null,rt,mt,kt,gt,wt);else break;at++}for(;at<=Et&&at<=It;){const bt=L[Et],$t=$[It]=wt?Pi($[It]):zn($[It]);if(So(bt,$t))it(bt,$t,Q,null,rt,mt,kt,gt,wt);else break;Et--,It--}if(at>Et){if(at<=It){const bt=It+1,$t=bt<Nt?$[bt].el:ot;for(;at<=It;)it(null,$[at]=wt?Pi($[at]):zn($[at]),Q,$t,rt,mt,kt,gt,wt),at++}}else if(at>It)for(;at<=Et;)ae(L[at],rt,mt,!0),at++;else{const bt=at,$t=at,Yt=new Map;for(at=$t;at<=It;at++){const Ke=$[at]=wt?Pi($[at]):zn($[at]);Ke.key!=null&&Yt.set(Ke.key,at)}let Ht,Wt=0;const ce=It-$t+1;let Un=!1,Oo=0;const Ve=new Array(ce);for(at=0;at<ce;at++)Ve[at]=0;for(at=bt;at<=Et;at++){const Ke=L[at];if(Wt>=ce){ae(Ke,rt,mt,!0);continue}let He;if(Ke.key!=null)He=Yt.get(Ke.key);else for(Ht=$t;Ht<=It;Ht++)if(Ve[Ht-$t]===0&&So(Ke,$[Ht])){He=Ht;break}He===void 0?ae(Ke,rt,mt,!0):(Ve[He-$t]=at+1,He>=Oo?Oo=He:Un=!0,it(Ke,$[He],Q,null,rt,mt,kt,gt,wt),Wt++)}const Ge=Un?ZM(Ve):As;for(Ht=Ge.length-1,at=ce-1;at>=0;at--){const Ke=$t+at,He=$[Ke],no=Ke+1<Nt?$[Ke+1].el:ot;Ve[at]===0?it(null,He,Q,no,rt,mt,kt,gt,wt):Un&&(Ht<0||at!==Ge[Ht]?zt(He,Q,no,2):Ht--)}}},zt=(L,$,Q,ot,rt=null)=>{const{el:mt,type:kt,transition:gt,children:wt,shapeFlag:at}=L;if(at&6){zt(L.component.subTree,$,Q,ot);return}if(at&128){L.suspense.move($,Q,ot);return}if(at&64){kt.move(L,$,Q,te);return}if(kt===Zt){h(mt,$,Q);for(let Et=0;Et<wt.length;Et++)zt(wt[Et],$,Q,ot);h(L.anchor,$,Q);return}if(kt===Er){nt(L,$,Q);return}if(ot!==2&&at&1&&gt)if(ot===0)gt.beforeEnter(mt),h(mt,$,Q),an(()=>gt.enter(mt),rt);else{const{leave:Et,delayLeave:It,afterLeave:bt}=gt,$t=()=>h(mt,$,Q),Yt=()=>{Et(mt,()=>{$t(),bt&&bt()})};It?It(mt,$t,Yt):Yt()}else h(mt,$,Q)},ae=(L,$,Q,ot=!1,rt=!1)=>{const{type:mt,props:kt,ref:gt,children:wt,dynamicChildren:at,shapeFlag:Nt,patchFlag:Et,dirs:It}=L;if(gt!=null&&fd(gt,null,Q,L,!0),Nt&256){$.ctx.deactivate(L);return}const bt=Nt&1&&It,$t=!xr(L);let Yt;if($t&&(Yt=kt&&kt.onVnodeBeforeUnmount)&&Sn(Yt,$,L),Nt&6)ft(L.component,Q,ot);else{if(Nt&128){L.suspense.unmount(Q,ot);return}bt&&Do(L,null,$,"beforeUnmount"),Nt&64?L.type.remove(L,$,Q,rt,te,ot):at&&(mt!==Zt||Et>0&&Et&64)?lt(at,$,Q,!1,!0):(mt===Zt&&Et&384||!rt&&Nt&16)&&lt(wt,$,Q),ot&&me(L)}($t&&(Yt=kt&&kt.onVnodeUnmounted)||bt)&&an(()=>{Yt&&Sn(Yt,$,L),bt&&Do(L,null,$,"unmounted")},Q)},me=L=>{const{type:$,el:Q,anchor:ot,transition:rt}=L;if($===Zt){F(Q,ot);return}if($===Er){ut(L);return}const mt=()=>{g(Q),rt&&!rt.persisted&&rt.afterLeave&&rt.afterLeave()};if(L.shapeFlag&1&&rt&&!rt.persisted){const{leave:kt,delayLeave:gt}=rt,wt=()=>kt(Q,mt);gt?gt(L.el,mt,wt):wt()}else mt()},F=(L,$)=>{let Q;for(;L!==$;)Q=v(L),g(L),L=Q;g($)},ft=(L,$,Q)=>{const{bum:ot,scope:rt,update:mt,subTree:kt,um:gt}=L;ot&&ys(ot),rt.stop(),mt&&(mt.active=!1,ae(kt,L,$,Q)),gt&&an(gt,$),an(()=>{L.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&L.asyncDep&&!L.asyncResolved&&L.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},lt=(L,$,Q,ot=!1,rt=!1,mt=0)=>{for(let kt=mt;kt<L.length;kt++)ae(L[kt],$,Q,ot,rt)},tt=L=>L.shapeFlag&6?tt(L.component.subTree):L.shapeFlag&128?L.suspense.next():v(L.anchor||L.el),Z=(L,$,Q)=>{L==null?$._vnode&&ae($._vnode,null,null,!0):it($._vnode||null,L,$,null,null,null,Q),dd(),$._vnode=L},te={p:it,um:ae,m:zt,r:me,mt:Bt,mc:G,pc:de,pbc:et,n:tt,o:r};let vt,Lt;return c&&([vt,Lt]=c(te)),{render:Z,hydrate:vt,createApp:YM(Z,vt)}}function br({effect:r,update:c},d){r.allowRecurse=c.allowRecurse=d}function op(r,c,d=!1){const h=r.children,g=c.children;if(Ot(h)&&Ot(g))for(let m=0;m<h.length;m++){const b=h[m];let _=g[m];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=g[m]=Pi(g[m]),_.el=b.el),d||op(b,_))}}function ZM(r){const c=r.slice(),d=[0];let h,g,m,b,_;const w=r.length;for(h=0;h<w;h++){const x=r[h];if(x!==0){if(g=d[d.length-1],r[g]<x){c[h]=g,d.push(h);continue}for(m=0,b=d.length-1;m<b;)_=m+b>>1,r[d[_]]<x?m=_+1:b=_;x<r[d[m]]&&(m>0&&(c[h]=d[m-1]),d[m]=h)}}for(m=d.length,b=d[m-1];m-- >0;)d[m]=b,b=c[b];return d}const JM=r=>r.__isTeleport,Qa=r=>r&&(r.disabled||r.disabled===""),dA=r=>typeof SVGElement!="undefined"&&r instanceof SVGElement,gg=(r,c)=>{const d=r&&r.to;return Pe(d)?c?c(d):null:d},XM={__isTeleport:!0,process(r,c,d,h,g,m,b,_,w,x){const{mc:E,pc:S,pbc:v,o:{insert:M,querySelector:W,createText:ct,createComment:it}}=x,H=Qa(c.props);let{shapeFlag:j,children:K,dynamicChildren:nt}=c;if(r==null){const ut=c.el=ct(""),Dt=c.anchor=ct("");M(ut,d,h),M(Dt,d,h);const V=c.target=gg(c.props,W),U=c.targetAnchor=ct("");V&&(M(U,V),b=b||dA(V));const G=(Y,et)=>{j&16&&E(K,Y,et,g,m,b,_,w)};H?G(d,Dt):V&&G(V,U)}else{c.el=r.el;const ut=c.anchor=r.anchor,Dt=c.target=r.target,V=c.targetAnchor=r.targetAnchor,U=Qa(r.props),G=U?d:Dt,Y=U?ut:V;if(b=b||dA(Dt),nt?(v(r.dynamicChildren,nt,G,g,m,b,_),op(r,c,!0)):w||S(r,c,G,Y,g,m,b,_,!1),H)U||Gl(c,d,ut,x,1);else if((c.props&&c.props.to)!==(r.props&&r.props.to)){const et=c.target=gg(c.props,W);et&&Gl(c,et,null,x,0)}else U&&Gl(c,Dt,V,x,1)}},remove(r,c,d,h,{um:g,o:{remove:m}},b){const{shapeFlag:_,children:w,anchor:x,targetAnchor:E,target:S,props:v}=r;if(S&&m(E),(b||!Qa(v))&&(m(x),_&16))for(let M=0;M<w.length;M++){const W=w[M];g(W,c,d,!0,!!W.dynamicChildren)}},move:Gl,hydrate:t5};function Gl(r,c,d,{o:{insert:h},m:g},m=2){m===0&&h(r.targetAnchor,c,d);const{el:b,anchor:_,shapeFlag:w,children:x,props:E}=r,S=m===2;if(S&&h(b,c,d),(!S||Qa(E))&&w&16)for(let v=0;v<x.length;v++)g(x[v],c,d,2);S&&h(_,c,d)}function t5(r,c,d,h,g,m,{o:{nextSibling:b,parentNode:_,querySelector:w}},x){const E=c.target=gg(c.props,w);if(E){const S=E._lpa||E.firstChild;if(c.shapeFlag&16)if(Qa(c.props))c.anchor=x(b(r),c,_(r),d,h,g,m),c.targetAnchor=S;else{c.anchor=b(r);let v=S;for(;v;)if(v=b(v),v&&v.nodeType===8&&v.data==="teleport anchor"){c.targetAnchor=v,E._lpa=c.targetAnchor&&b(c.targetAnchor);break}x(S,c,E,d,h,g,m)}}return c.anchor&&b(c.anchor)}const e5=XM,Zt=Symbol(void 0),Is=Symbol(void 0),bn=Symbol(void 0),Er=Symbol(void 0),Za=[];let Tn=null;function At(r=!1){Za.push(Tn=r?null:[])}function l0(){Za.pop(),Tn=Za[Za.length-1]||null}let Sr=1;function pg(r){Sr+=r}function d0(r){return r.dynamicChildren=Sr>0?Tn||As:null,l0(),Sr>0&&Tn&&Tn.push(r),r}function St(r,c,d,h,g,m){return d0(D(r,c,d,h,g,m,!0))}function ri(r,c,d,h,g){return d0(xt(r,c,d,h,g,!0))}function Hi(r){return r?r.__v_isVNode===!0:!1}function So(r,c){return r.type===c.type&&r.key===c.key}function n5(r){}const Od="__vInternal",u0=({key:r})=>r!=null?r:null,ed=({ref:r,ref_key:c,ref_for:d})=>r!=null?Pe(r)||Se(r)||qt(r)?{i:pn,r,k:c,f:!!d}:r:null;function D(r,c=null,d=null,h=0,g=null,m=r===Zt?0:1,b=!1,_=!1){const w={__v_isVNode:!0,__v_skip:!0,type:r,props:c,key:c&&u0(c),ref:c&&ed(c),scopeId:Md,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:h,dynamicProps:g,dynamicChildren:null,appContext:null};return _?(ip(w,d),m&128&&r.normalize(w)):d&&(w.shapeFlag|=Pe(d)?8:16),Sr>0&&!b&&Tn&&(w.patchFlag>0||m&6)&&w.patchFlag!==32&&Tn.push(w),w}const xt=o5;function o5(r,c=null,d=null,h=0,g=null,m=!1){if((!r||r===QC)&&(r=bn),Hi(r)){const _=Bo(r,c,!0);return d&&ip(_,d),Sr>0&&!m&&Tn&&(_.shapeFlag&6?Tn[Tn.indexOf(r)]=_:Tn.push(_)),_.patchFlag|=-2,_}if(f5(r)&&(r=r.__vccOpts),c){c=h0(c);let{class:_,style:w}=c;_&&!Pe(_)&&(c.class=vn(_)),Oe(w)&&(Hg(w)&&!Ot(w)&&(w=Le({},w)),c.style=lc(w))}const b=Pe(r)?1:OC(r)?128:JM(r)?64:Oe(r)?4:qt(r)?2:0;return D(r,c,d,h,g,b,m,!0)}function h0(r){return r?Hg(r)||Od in r?Le({},r):r:null}function Bo(r,c,d=!1){const{props:h,ref:g,patchFlag:m,children:b}=r,_=c?f0(h||{},c):h;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:_,key:_&&u0(_),ref:c&&c.ref?d&&g?Ot(g)?g.concat(ed(c)):[g,ed(c)]:ed(c):g,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:b,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:c&&r.type!==Zt?m===-1?16:m|16:m,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Bo(r.ssContent),ssFallback:r.ssFallback&&Bo(r.ssFallback),el:r.el,anchor:r.anchor}}function Ee(r=" ",c=0){return xt(Is,null,r,c)}function i5(r,c){const d=xt(Er,null,r);return d.staticCount=c,d}function po(r="",c=!1){return c?(At(),ri(bn,null,r)):xt(bn,null,r)}function zn(r){return r==null||typeof r=="boolean"?xt(bn):Ot(r)?xt(Zt,null,r.slice()):typeof r=="object"?Pi(r):xt(Is,null,String(r))}function Pi(r){return r.el===null||r.memo?r:Bo(r)}function ip(r,c){let d=0;const{shapeFlag:h}=r;if(c==null)c=null;else if(Ot(c))d=16;else if(typeof c=="object")if(h&65){const g=c.default;g&&(g._c&&(g._d=!1),ip(r,g()),g._c&&(g._d=!0));return}else{d=32;const g=c._;!g&&!(Od in c)?c._ctx=pn:g===3&&pn&&(pn.slots._===1?c._=1:(c._=2,r.patchFlag|=1024))}else qt(c)?(c={default:c,_ctx:pn},d=32):(c=String(c),h&64?(d=16,c=[Ee(c)]):d=8);r.children=c,r.shapeFlag|=d}function f0(...r){const c={};for(let d=0;d<r.length;d++){const h=r[d];for(const g in h)if(g==="class")c.class!==h.class&&(c.class=vn([c.class,h.class]));else if(g==="style")c.style=lc([c.style,h.style]);else if(dc(g)){const m=c[g],b=h[g];b&&m!==b&&!(Ot(m)&&m.includes(b))&&(c[g]=m?[].concat(m,b):b)}else g!==""&&(c[g]=h[g])}return c}function Sn(r,c,d,h=null){Fn(r,c,7,[d,h])}const r5=r0();let s5=0;function g0(r,c,d){const h=r.type,g=(c?c.appContext:r.appContext)||r5,m={uid:s5++,vnode:r,type:h,parent:c,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new zg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:e0(h,g),emitsOptions:LC(h,g),emit:null,emitted:null,propsDefaults:le,inheritAttrs:h.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=c?c.root:m,m.emit=dM.bind(null,m),r.ce&&r.ce(m),m}let We=null;const Lo=()=>We||pn,Ui=r=>{We=r,r.scope.on()},ji=()=>{We&&We.scope.off(),We=null};function p0(r){return r.vnode.shapeFlag&4}let Ms=!1;function m0(r,c=!1){Ms=c;const{props:d,children:h}=r.vnode,g=p0(r);HM(r,d,g,c),WM(r,h);const m=g?a5(r,c):void 0;return Ms=!1,m}function a5(r,c){const d=r.type;r.accessCache=Object.create(null),r.proxy=to(new Proxy(r.ctx,dg));const{setup:h}=d;if(h){const g=r.setupContext=h.length>1?k0(r):null;Ui(r),Mr();const m=Mo(h,r,0,[r.props,g]);if(Pr(),ji(),Og(m)){if(m.then(ji,ji),c)return m.then(b=>{mg(r,b,c)}).catch(b=>{Nr(b,r,0)});r.asyncDep=m}else mg(r,m,c)}else b0(r,c)}function mg(r,c,d){qt(c)?r.type.__ssrInlineRender?r.ssrRender=c:r.render=c:Oe(c)&&(r.setupState=Wg(c)),b0(r,d)}let gd,bg;function c5(r){gd=r,bg=c=>{c.render._rc&&(c.withProxy=new Proxy(c.ctx,RM))}}const l5=()=>!gd;function b0(r,c,d){const h=r.type;if(!r.render){if(!c&&gd&&!h.render){const g=h.template;if(g){const{isCustomElement:m,compilerOptions:b}=r.appContext.config,{delimiters:_,compilerOptions:w}=h,x=Le(Le({isCustomElement:m,delimiters:_},b),w);h.render=gd(g,x)}}r.render=h.render||mo,bg&&bg(r)}Ui(r),Mr(),zM(r),Pr(),ji()}function d5(r){return new Proxy(r.attrs,{get(c,d){return $n(r,"get","$attrs"),c[d]}})}function k0(r){const c=h=>{r.exposed=h||{}};let d;return{get attrs(){return d||(d=d5(r))},slots:r.slots,emit:r.emit,expose:c}}function Rd(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Wg(to(r.exposed)),{get(c,d){if(d in c)return c[d];if(d in ud)return ud[d](r)}}))}const u5=/(?:^|[-_])(\w)/g,h5=r=>r.replace(u5,c=>c.toUpperCase()).replace(/[-_]/g,"");function pd(r,c=!0){return qt(r)?r.displayName||r.name:r.name||c&&r.__name}function w0(r,c,d=!1){let h=pd(c);if(!h&&c.__file){const g=c.__file.match(/([^/\\]+)\.\w+$/);g&&(h=g[1])}if(!h&&r&&r.parent){const g=m=>{for(const b in m)if(m[b]===c)return b};h=g(r.components||r.parent.type.components)||g(r.appContext.components)}return h?h5(h):d?"App":"Anonymous"}function f5(r){return qt(r)&&"__vccOpts"in r}const se=(r,c)=>DC(r,c,Ms);function g5(){return null}function p5(){return null}function m5(r){}function b5(r,c){return null}function k5(){return _0().slots}function w5(){return _0().attrs}function _0(){const r=Lo();return r.setupContext||(r.setupContext=k0(r))}function _5(r,c){const d=Ot(r)?r.reduce((h,g)=>(h[g]={},h),{}):r;for(const h in c){const g=d[h];g?Ot(g)||qt(g)?d[h]={type:g,default:c[h]}:g.default=c[h]:g===null&&(d[h]={default:c[h]})}return d}function v5(r,c){const d={};for(const h in r)c.includes(h)||Object.defineProperty(d,h,{enumerable:!0,get:()=>r[h]});return d}function A5(r){const c=Lo();let d=r();return ji(),Og(d)&&(d=d.catch(h=>{throw Ui(c),h})),[d,()=>Ui(c)]}function zd(r,c,d){const h=arguments.length;return h===2?Oe(c)&&!Ot(c)?Hi(c)?xt(r,null,[c]):xt(r,c):xt(r,null,c):(h>3?d=Array.prototype.slice.call(arguments,2):h===3&&Hi(d)&&(d=[d]),xt(r,c,d))}const v0=Symbol(""),C5=()=>{{const r=bo(v0);return r||SC("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),r}};function y5(){}function x5(r,c,d,h){const g=d[h];if(g&&A0(g,r))return g;const m=c();return m.memo=r.slice(),d[h]=m}function A0(r,c){const d=r.memo;if(d.length!=c.length)return!1;for(let h=0;h<d.length;h++)if(Ds(d[h],c[h]))return!1;return Sr>0&&Tn&&Tn.push(r),!0}const C0="3.2.37",E5={createComponentInstance:g0,setupComponent:m0,renderComponentRoot:td,setCurrentRenderingInstance:ic,isVNode:Hi,normalizeVNode:zn},D5=E5,S5=null,T5=null,I5="http://www.w3.org/2000/svg",vr=typeof document!="undefined"?document:null,uA=vr&&vr.createElement("template"),M5={insert:(r,c,d)=>{c.insertBefore(r,d||null)},remove:r=>{const c=r.parentNode;c&&c.removeChild(r)},createElement:(r,c,d,h)=>{const g=c?vr.createElementNS(I5,r):vr.createElement(r,d?{is:d}:void 0);return r==="select"&&h&&h.multiple!=null&&g.setAttribute("multiple",h.multiple),g},createText:r=>vr.createTextNode(r),createComment:r=>vr.createComment(r),setText:(r,c)=>{r.nodeValue=c},setElementText:(r,c)=>{r.textContent=c},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>vr.querySelector(r),setScopeId(r,c){r.setAttribute(c,"")},cloneNode(r){const c=r.cloneNode(!0);return"_value"in r&&(c._value=r._value),c},insertStaticContent(r,c,d,h,g,m){const b=d?d.previousSibling:c.lastChild;if(g&&(g===m||g.nextSibling))for(;c.insertBefore(g.cloneNode(!0),d),!(g===m||!(g=g.nextSibling)););else{uA.innerHTML=h?`<svg>${r}</svg>`:r;const _=uA.content;if(h){const w=_.firstChild;for(;w.firstChild;)_.appendChild(w.firstChild);_.removeChild(w)}c.insertBefore(_,d)}return[b?b.nextSibling:c.firstChild,d?d.previousSibling:c.lastChild]}};function P5(r,c,d){const h=r._vtc;h&&(c=(c?[c,...h]:[...h]).join(" ")),c==null?r.removeAttribute("class"):d?r.setAttribute("class",c):r.className=c}function N5(r,c,d){const h=r.style,g=Pe(d);if(d&&!g){for(const m in d)kg(h,m,d[m]);if(c&&!Pe(c))for(const m in c)d[m]==null&&kg(h,m,"")}else{const m=h.display;g?c!==d&&(h.cssText=d):c&&r.removeAttribute("style"),"_vod"in r&&(h.display=m)}}const hA=/\s*!important$/;function kg(r,c,d){if(Ot(d))d.forEach(h=>kg(r,c,h));else if(d==null&&(d=""),c.startsWith("--"))r.setProperty(c,d);else{const h=B5(r,c);hA.test(d)?r.setProperty(To(h),d.replace(hA,""),"important"):r[h]=d}}const fA=["Webkit","Moz","ms"],Vf={};function B5(r,c){const d=Vf[c];if(d)return d;let h=Vn(c);if(h!=="filter"&&h in r)return Vf[c]=h;h=hc(h);for(let g=0;g<fA.length;g++){const m=fA[g]+h;if(m in r)return Vf[c]=m}return c}const gA="http://www.w3.org/1999/xlink";function L5(r,c,d,h,g){if(h&&c.startsWith("xlink:"))d==null?r.removeAttributeNS(gA,c.slice(6,c.length)):r.setAttributeNS(gA,c,d);else{const m=rI(c);d==null||m&&!aC(d)?r.removeAttribute(c):r.setAttribute(c,m?"":d)}}function O5(r,c,d,h,g,m,b){if(c==="innerHTML"||c==="textContent"){h&&b(h,g,m),r[c]=d==null?"":d;return}if(c==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=d;const w=d==null?"":d;(r.value!==w||r.tagName==="OPTION")&&(r.value=w),d==null&&r.removeAttribute(c);return}let _=!1;if(d===""||d==null){const w=typeof r[c];w==="boolean"?d=aC(d):d==null&&w==="string"?(d="",_=!0):w==="number"&&(d=0,_=!0)}try{r[c]=d}catch{}_&&r.removeAttribute(c)}const[y0,R5]=(()=>{let r=Date.now,c=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(r=performance.now.bind(performance));const d=navigator.userAgent.match(/firefox\/(\d+)/i);c=!!(d&&Number(d[1])<=53)}return[r,c]})();let wg=0;const z5=Promise.resolve(),j5=()=>{wg=0},F5=()=>wg||(z5.then(j5),wg=y0());function ii(r,c,d,h){r.addEventListener(c,d,h)}function V5(r,c,d,h){r.removeEventListener(c,d,h)}function $5(r,c,d,h,g=null){const m=r._vei||(r._vei={}),b=m[c];if(h&&b)b.value=h;else{const[_,w]=H5(c);if(h){const x=m[c]=U5(h,g);ii(r,_,x,w)}else b&&(V5(r,_,b,w),m[c]=void 0)}}const pA=/(?:Once|Passive|Capture)$/;function H5(r){let c;if(pA.test(r)){c={};let d;for(;d=r.match(pA);)r=r.slice(0,r.length-d[0].length),c[d[0].toLowerCase()]=!0}return[To(r.slice(2)),c]}function U5(r,c){const d=h=>{const g=h.timeStamp||y0();(R5||g>=d.attached-1)&&Fn(q5(h,d.value),c,5,[h])};return d.value=r,d.attached=F5(),d}function q5(r,c){if(Ot(c)){const d=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{d.call(r),r._stopped=!0},c.map(h=>g=>!g._stopped&&h&&h(g))}else return c}const mA=/^on[a-z]/,W5=(r,c,d,h,g=!1,m,b,_,w)=>{c==="class"?P5(r,h,g):c==="style"?N5(r,d,h):dc(c)?Bg(c)||$5(r,c,d,h,b):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):G5(r,c,h,g))?O5(r,c,h,m,b,_,w):(c==="true-value"?r._trueValue=h:c==="false-value"&&(r._falseValue=h),L5(r,c,h,g))};function G5(r,c,d,h){return h?!!(c==="innerHTML"||c==="textContent"||c in r&&mA.test(c)&&qt(d)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&r.tagName==="INPUT"||c==="type"&&r.tagName==="TEXTAREA"||mA.test(c)&&Pe(d)?!1:c in r}function x0(r,c){const d=Br(r);class h extends jd{constructor(m){super(d,m,c)}}return h.def=d,h}const K5=r=>x0(r,j0),Y5=typeof HTMLElement!="undefined"?HTMLElement:class{};class jd extends Y5{constructor(c,d={},h){super(),this._def=c,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,No(()=>{this._connected||(vg(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const g of h)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const c=h=>{const{props:g,styles:m}=h,b=!Ot(g),_=g?b?Object.keys(g):g:[];let w;if(b)for(const x in this._props){const E=g[x];(E===Number||E&&E.type===Number)&&(this._props[x]=Vi(this._props[x]),(w||(w=Object.create(null)))[x]=!0)}this._numberProps=w;for(const x of Object.keys(this))x[0]!=="_"&&this._setProp(x,this[x],!0,!1);for(const x of _.map(Vn))Object.defineProperty(this,x,{get(){return this._getProp(x)},set(E){this._setProp(x,E)}});this._applyStyles(m),this._update()},d=this._def.__asyncLoader;d?d().then(c):c(this._def)}_setAttr(c){let d=this.getAttribute(c);this._numberProps&&this._numberProps[c]&&(d=Vi(d)),this._setProp(Vn(c),d,!1)}_getProp(c){return this._props[c]}_setProp(c,d,h=!0,g=!0){d!==this._props[c]&&(this._props[c]=d,g&&this._instance&&this._update(),h&&(d===!0?this.setAttribute(To(c),""):typeof d=="string"||typeof d=="number"?this.setAttribute(To(c),d+""):d||this.removeAttribute(To(c))))}_update(){vg(this._createVNode(),this.shadowRoot)}_createVNode(){const c=xt(this._def,Le({},this._props));return this._instance||(c.ce=d=>{this._instance=d,d.isCE=!0,d.emit=(g,...m)=>{this.dispatchEvent(new CustomEvent(g,{detail:m}))};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof jd){d.parent=h._instance;break}}),c}_applyStyles(c){c&&c.forEach(d=>{const h=document.createElement("style");h.textContent=d,this.shadowRoot.appendChild(h)})}}function Q5(r="$style"){{const c=Lo();if(!c)return le;const d=c.type.__cssModules;if(!d)return le;const h=d[r];return h||le}}function Z5(r){const c=Lo();if(!c)return;const d=()=>_g(c.subTree,r(c.proxy));zC(d),cn(()=>{const h=new MutationObserver(d);h.observe(c.subTree.el.parentNode,{childList:!0}),mc(()=>h.disconnect())})}function _g(r,c){if(r.shapeFlag&128){const d=r.suspense;r=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{_g(d.activeBranch,c)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)bA(r.el,c);else if(r.type===Zt)r.children.forEach(d=>_g(d,c));else if(r.type===Er){let{el:d,anchor:h}=r;for(;d&&(bA(d,c),d!==h);)d=d.nextSibling}}function bA(r,c){if(r.nodeType===1){const d=r.style;for(const h in c)d.setProperty(`--${h}`,c[h])}}const Ei="transition",La="animation",rp=(r,{slots:c})=>zd(Xg,D0(r),c);rp.displayName="Transition";const E0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},J5=rp.props=Le({},Xg.props,E0),kr=(r,c=[])=>{Ot(r)?r.forEach(d=>d(...c)):r&&r(...c)},kA=r=>r?Ot(r)?r.some(c=>c.length>1):r.length>1:!1;function D0(r){const c={};for(const O in r)O in E0||(c[O]=r[O]);if(r.css===!1)return c;const{name:d="v",type:h,duration:g,enterFromClass:m=`${d}-enter-from`,enterActiveClass:b=`${d}-enter-active`,enterToClass:_=`${d}-enter-to`,appearFromClass:w=m,appearActiveClass:x=b,appearToClass:E=_,leaveFromClass:S=`${d}-leave-from`,leaveActiveClass:v=`${d}-leave-active`,leaveToClass:M=`${d}-leave-to`}=r,W=X5(g),ct=W&&W[0],it=W&&W[1],{onBeforeEnter:H,onEnter:j,onEnterCancelled:K,onLeave:nt,onLeaveCancelled:ut,onBeforeAppear:Dt=H,onAppear:V=j,onAppearCancelled:U=K}=c,G=(O,_t,pt)=>{Mi(O,_t?E:_),Mi(O,_t?x:b),pt&&pt()},Y=(O,_t)=>{O._isLeaving=!1,Mi(O,S),Mi(O,M),Mi(O,v),_t&&_t()},et=O=>(_t,pt)=>{const Bt=O?V:j,Pt=()=>G(_t,O,pt);kr(Bt,[_t,Pt]),wA(()=>{Mi(_t,O?w:m),ni(_t,O?E:_),kA(Bt)||_A(_t,h,ct,Pt)})};return Le(c,{onBeforeEnter(O){kr(H,[O]),ni(O,m),ni(O,b)},onBeforeAppear(O){kr(Dt,[O]),ni(O,w),ni(O,x)},onEnter:et(!1),onAppear:et(!0),onLeave(O,_t){O._isLeaving=!0;const pt=()=>Y(O,_t);ni(O,S),T0(),ni(O,v),wA(()=>{!O._isLeaving||(Mi(O,S),ni(O,M),kA(nt)||_A(O,h,it,pt))}),kr(nt,[O,pt])},onEnterCancelled(O){G(O,!1),kr(K,[O])},onAppearCancelled(O){G(O,!0),kr(U,[O])},onLeaveCancelled(O){Y(O),kr(ut,[O])}})}function X5(r){if(r==null)return null;if(Oe(r))return[$f(r.enter),$f(r.leave)];{const c=$f(r);return[c,c]}}function $f(r){return Vi(r)}function ni(r,c){c.split(/\s+/).forEach(d=>d&&r.classList.add(d)),(r._vtc||(r._vtc=new Set)).add(c)}function Mi(r,c){c.split(/\s+/).forEach(h=>h&&r.classList.remove(h));const{_vtc:d}=r;d&&(d.delete(c),d.size||(r._vtc=void 0))}function wA(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let tP=0;function _A(r,c,d,h){const g=r._endId=++tP,m=()=>{g===r._endId&&h()};if(d)return setTimeout(m,d);const{type:b,timeout:_,propCount:w}=S0(r,c);if(!b)return h();const x=b+"end";let E=0;const S=()=>{r.removeEventListener(x,v),m()},v=M=>{M.target===r&&++E>=w&&S()};setTimeout(()=>{E<w&&S()},_+1),r.addEventListener(x,v)}function S0(r,c){const d=window.getComputedStyle(r),h=W=>(d[W]||"").split(", "),g=h(Ei+"Delay"),m=h(Ei+"Duration"),b=vA(g,m),_=h(La+"Delay"),w=h(La+"Duration"),x=vA(_,w);let E=null,S=0,v=0;c===Ei?b>0&&(E=Ei,S=b,v=m.length):c===La?x>0&&(E=La,S=x,v=w.length):(S=Math.max(b,x),E=S>0?b>x?Ei:La:null,v=E?E===Ei?m.length:w.length:0);const M=E===Ei&&/\b(transform|all)(,|$)/.test(d[Ei+"Property"]);return{type:E,timeout:S,propCount:v,hasTransform:M}}function vA(r,c){for(;r.length<c.length;)r=r.concat(r);return Math.max(...c.map((d,h)=>AA(d)+AA(r[h])))}function AA(r){return Number(r.slice(0,-1).replace(",","."))*1e3}function T0(){return document.body.offsetHeight}const I0=new WeakMap,M0=new WeakMap,eP={name:"TransitionGroup",props:Le({},J5,{tag:String,moveClass:String}),setup(r,{slots:c}){const d=Lo(),h=Jg();let g,m;return Bd(()=>{if(!g.length)return;const b=r.moveClass||`${r.name||"v"}-move`;if(!sP(g[0].el,d.vnode.el,b))return;g.forEach(oP),g.forEach(iP);const _=g.filter(rP);T0(),_.forEach(w=>{const x=w.el,E=x.style;ni(x,b),E.transform=E.webkitTransform=E.transitionDuration="";const S=x._moveCb=v=>{v&&v.target!==x||(!v||/transform$/.test(v.propertyName))&&(x.removeEventListener("transitionend",S),x._moveCb=null,Mi(x,b))};x.addEventListener("transitionend",S)})}),()=>{const b=Xt(r),_=D0(b);let w=b.tag||Zt;g=m,m=c.default?Pd(c.default()):[];for(let x=0;x<m.length;x++){const E=m[x];E.key!=null&&Dr(E,Ts(E,_,h,d))}if(g)for(let x=0;x<g.length;x++){const E=g[x];Dr(E,Ts(E,_,h,d)),I0.set(E,E.el.getBoundingClientRect())}return xt(w,null,m)}}},nP=eP;function oP(r){const c=r.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function iP(r){M0.set(r,r.el.getBoundingClientRect())}function rP(r){const c=I0.get(r),d=M0.get(r),h=c.left-d.left,g=c.top-d.top;if(h||g){const m=r.el.style;return m.transform=m.webkitTransform=`translate(${h}px,${g}px)`,m.transitionDuration="0s",r}}function sP(r,c,d){const h=r.cloneNode();r._vtc&&r._vtc.forEach(b=>{b.split(/\s+/).forEach(_=>_&&h.classList.remove(_))}),d.split(/\s+/).forEach(b=>b&&h.classList.add(b)),h.style.display="none";const g=c.nodeType===1?c:c.parentNode;g.appendChild(h);const{hasTransform:m}=S0(h);return g.removeChild(h),m}const qi=r=>{const c=r.props["onUpdate:modelValue"]||!1;return Ot(c)?d=>ys(c,d):c};function aP(r){r.target.composing=!0}function CA(r){const c=r.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const Me={created(r,{modifiers:{lazy:c,trim:d,number:h}},g){r._assign=qi(g);const m=h||g.props&&g.props.type==="number";ii(r,c?"change":"input",b=>{if(b.target.composing)return;let _=r.value;d&&(_=_.trim()),m&&(_=Vi(_)),r._assign(_)}),d&&ii(r,"change",()=>{r.value=r.value.trim()}),c||(ii(r,"compositionstart",aP),ii(r,"compositionend",CA),ii(r,"change",CA))},mounted(r,{value:c}){r.value=c==null?"":c},beforeUpdate(r,{value:c,modifiers:{lazy:d,trim:h,number:g}},m){if(r._assign=qi(m),r.composing||document.activeElement===r&&r.type!=="range"&&(d||h&&r.value.trim()===c||(g||r.type==="number")&&Vi(r.value)===c))return;const b=c==null?"":c;r.value!==b&&(r.value=b)}},sp={deep:!0,created(r,c,d){r._assign=qi(d),ii(r,"change",()=>{const h=r._modelValue,g=Ps(r),m=r.checked,b=r._assign;if(Ot(h)){const _=Ad(h,g),w=_!==-1;if(m&&!w)b(h.concat(g));else if(!m&&w){const x=[...h];x.splice(_,1),b(x)}}else if(Ir(h)){const _=new Set(h);m?_.add(g):_.delete(g),b(_)}else b(P0(r,m))})},mounted:yA,beforeUpdate(r,c,d){r._assign=qi(d),yA(r,c,d)}};function yA(r,{value:c,oldValue:d},h){r._modelValue=c,Ot(c)?r.checked=Ad(c,h.props.value)>-1:Ir(c)?r.checked=c.has(h.props.value):c!==d&&(r.checked=Fi(c,P0(r,!0)))}const ap={created(r,{value:c},d){r.checked=Fi(c,d.props.value),r._assign=qi(d),ii(r,"change",()=>{r._assign(Ps(r))})},beforeUpdate(r,{value:c,oldValue:d},h){r._assign=qi(h),c!==d&&(r.checked=Fi(c,h.props.value))}},sc={deep:!0,created(r,{value:c,modifiers:{number:d}},h){const g=Ir(c);ii(r,"change",()=>{const m=Array.prototype.filter.call(r.options,b=>b.selected).map(b=>d?Vi(Ps(b)):Ps(b));r._assign(r.multiple?g?new Set(m):m:m[0])}),r._assign=qi(h)},mounted(r,{value:c}){xA(r,c)},beforeUpdate(r,c,d){r._assign=qi(d)},updated(r,{value:c}){xA(r,c)}};function xA(r,c){const d=r.multiple;if(!(d&&!Ot(c)&&!Ir(c))){for(let h=0,g=r.options.length;h<g;h++){const m=r.options[h],b=Ps(m);if(d)Ot(c)?m.selected=Ad(c,b)>-1:m.selected=c.has(b);else if(Fi(Ps(m),c)){r.selectedIndex!==h&&(r.selectedIndex=h);return}}!d&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function Ps(r){return"_value"in r?r._value:r.value}function P0(r,c){const d=c?"_trueValue":"_falseValue";return d in r?r[d]:c}const N0={created(r,c,d){Kl(r,c,d,null,"created")},mounted(r,c,d){Kl(r,c,d,null,"mounted")},beforeUpdate(r,c,d,h){Kl(r,c,d,h,"beforeUpdate")},updated(r,c,d,h){Kl(r,c,d,h,"updated")}};function B0(r,c){switch(r){case"SELECT":return sc;case"TEXTAREA":return Me;default:switch(c){case"checkbox":return sp;case"radio":return ap;default:return Me}}}function Kl(r,c,d,h,g){const b=B0(r.tagName,d.props&&d.props.type)[g];b&&b(r,c,d,h)}function cP(){Me.getSSRProps=({value:r})=>({value:r}),ap.getSSRProps=({value:r},c)=>{if(c.props&&Fi(c.props.value,r))return{checked:!0}},sp.getSSRProps=({value:r},c)=>{if(Ot(r)){if(c.props&&Ad(r,c.props.value)>-1)return{checked:!0}}else if(Ir(r)){if(c.props&&r.has(c.props.value))return{checked:!0}}else if(r)return{checked:!0}},N0.getSSRProps=(r,c)=>{if(typeof c.type!="string")return;const d=B0(c.type.toUpperCase(),c.props&&c.props.type);if(d.getSSRProps)return d.getSSRProps(r,c)}}const lP=["ctrl","shift","alt","meta"],dP={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,c)=>lP.some(d=>r[`${d}Key`]&&!c.includes(d))},Gi=(r,c)=>(d,...h)=>{for(let g=0;g<c.length;g++){const m=dP[c[g]];if(m&&m(d,c))return}return r(d,...h)},uP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},hP=(r,c)=>d=>{if(!("key"in d))return;const h=To(d.key);if(c.some(g=>g===h||uP[g]===h))return r(d)},L0={beforeMount(r,{value:c},{transition:d}){r._vod=r.style.display==="none"?"":r.style.display,d&&c?d.beforeEnter(r):Oa(r,c)},mounted(r,{value:c},{transition:d}){d&&c&&d.enter(r)},updated(r,{value:c,oldValue:d},{transition:h}){!c!=!d&&(h?c?(h.beforeEnter(r),Oa(r,!0),h.enter(r)):h.leave(r,()=>{Oa(r,!1)}):Oa(r,c))},beforeUnmount(r,{value:c}){Oa(r,c)}};function Oa(r,c){r.style.display=c?r._vod:"none"}function fP(){L0.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const O0=Le({patchProp:W5},M5);let Ja,EA=!1;function R0(){return Ja||(Ja=s0(O0))}function z0(){return Ja=EA?Ja:a0(O0),EA=!0,Ja}const vg=(...r)=>{R0().render(...r)},j0=(...r)=>{z0().hydrate(...r)},F0=(...r)=>{const c=R0().createApp(...r),{mount:d}=c;return c.mount=h=>{const g=V0(h);if(!g)return;const m=c._component;!qt(m)&&!m.render&&!m.template&&(m.template=g.innerHTML),g.innerHTML="";const b=d(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),b},c},gP=(...r)=>{const c=z0().createApp(...r),{mount:d}=c;return c.mount=h=>{const g=V0(h);if(g)return d(g,!0,g instanceof SVGElement)},c};function V0(r){return Pe(r)?document.querySelector(r):r}let DA=!1;const pP=()=>{DA||(DA=!0,cP(),fP())},mP=()=>{};var bP=Object.freeze(Object.defineProperty({__proto__:null,compile:mP,EffectScope:zg,ReactiveEffect:fc,customRef:XI,effect:AI,effectScope:jg,getCurrentScope:kI,isProxy:Hg,isReactive:Io,isReadonly:Ss,isRef:Se,isShallow:cd,markRaw:to,onScopeDispose:wI,proxyRefs:Wg,reactive:Mn,readonly:$g,ref:eo,shallowReactive:yC,shallowReadonly:KI,shallowRef:xC,stop:CI,toRaw:Xt,toRef:qa,toRefs:sg,triggerRef:QI,unref:J,camelize:Vn,capitalize:hc,normalizeClass:vn,normalizeProps:lI,normalizeStyle:lc,toDisplayString:Mt,toHandlerKey:Ua,BaseTransition:Xg,Comment:bn,Fragment:Zt,KeepAlive:IM,Static:Er,Suspense:wM,Teleport:e5,Text:Is,callWithAsyncErrorHandling:Fn,callWithErrorHandling:Mo,cloneVNode:Bo,compatUtils:T5,computed:se,createBlock:ri,createCommentVNode:po,createElementBlock:St,createElementVNode:D,createHydrationRenderer:a0,createPropsRestProxy:v5,createRenderer:s0,createSlots:BM,createStaticVNode:i5,createTextVNode:Ee,createVNode:xt,defineAsyncComponent:SM,defineComponent:Br,defineEmits:p5,defineExpose:m5,defineProps:g5,get devtools(){return ws},getCurrentInstance:Lo,getTransitionRawChildren:Pd,guardReactiveProps:h0,h:zd,handleError:Nr,initCustomFormatter:y5,inject:bo,isMemoSame:A0,isRuntimeOnly:l5,isVNode:Hi,mergeDefaults:_5,mergeProps:f0,nextTick:No,onActivated:VC,onBeforeMount:UC,onBeforeUnmount:Ld,onBeforeUpdate:qC,onDeactivated:$C,onErrorCaptured:YC,onMounted:cn,onRenderTracked:KC,onRenderTriggered:GC,onServerPrefetch:WC,onUnmounted:mc,onUpdated:Bd,openBlock:At,popScopeId:hM,provide:Ya,pushScopeId:uM,queuePostFlushCb:Yg,registerRuntimeCompiler:c5,renderList:mn,renderSlot:LM,resolveComponent:Wi,resolveDirective:NM,resolveDynamicComponent:Es,resolveFilter:S5,resolveTransitionHooks:Ts,setBlockTracking:pg,setDevtoolsHook:BC,setTransitionHooks:Dr,ssrContextKey:v0,ssrUtils:D5,toHandlers:OM,transformVNodeArgs:n5,useAttrs:w5,useSSRContext:C5,useSlots:k5,useTransitionState:Jg,version:C0,warn:SC,watch:zi,watchEffect:yM,watchPostEffect:zC,watchSyncEffect:xM,withAsyncContext:A5,withCtx:_n,withDefaults:b5,withDirectives:Ie,withMemo:x5,withScopeId:fM,Transition:rp,TransitionGroup:nP,VueElement:jd,createApp:F0,createSSRApp:gP,defineCustomElement:x0,defineSSRCustomElement:K5,hydrate:j0,initDirectivesForSSR:pP,render:vg,useCssModule:Q5,useCssVars:Z5,vModelCheckbox:sp,vModelDynamic:N0,vModelRadio:ap,vModelSelect:sc,vModelText:Me,vShow:L0,withKeys:hP,withModifiers:Gi},Symbol.toStringTag,{value:"Module"})),kP=!1;function Yl(r,c,d){return Array.isArray(r)?(r.length=Math.max(r.length,c),r.splice(c,1,d),d):(r[c]=d,d)}function Hf(r,c){if(Array.isArray(r)){r.splice(c,1);return}delete r[c]}function wP(){return $0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function $0(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const _P=typeof Proxy=="function",vP="devtools-plugin:setup",AP="plugin:settings:set";let hs,Ag;function CP(){var r;return hs!==void 0||(typeof window!="undefined"&&window.performance?(hs=!0,Ag=window.performance):typeof global!="undefined"&&((r=global.perf_hooks)===null||r===void 0?void 0:r.performance)?(hs=!0,Ag=global.perf_hooks.performance):hs=!1),hs}function yP(){return CP()?Ag.now():Date.now()}class xP{constructor(c,d){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=c,this.hook=d;const h={};if(c.settings)for(const b in c.settings){const _=c.settings[b];h[b]=_.defaultValue}const g=`__vue-devtools-plugin-settings__${c.id}`;let m=Object.assign({},h);try{const b=localStorage.getItem(g),_=JSON.parse(b);Object.assign(m,_)}catch{}this.fallbacks={getSettings(){return m},setSettings(b){try{localStorage.setItem(g,JSON.stringify(b))}catch{}m=b},now(){return yP()}},d&&d.on(AP,(b,_)=>{b===this.plugin.id&&this.fallbacks.setSettings(_)}),this.proxiedOn=new Proxy({},{get:(b,_)=>this.target?this.target.on[_]:(...w)=>{this.onQueue.push({method:_,args:w})}}),this.proxiedTarget=new Proxy({},{get:(b,_)=>this.target?this.target[_]:_==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(_)?(...w)=>(this.targetQueue.push({method:_,args:w,resolve:()=>{}}),this.fallbacks[_](...w)):(...w)=>new Promise(x=>{this.targetQueue.push({method:_,args:w,resolve:x})})})}async setRealTarget(c){this.target=c;for(const d of this.onQueue)this.target.on[d.method](...d.args);for(const d of this.targetQueue)d.resolve(await this.target[d.method](...d.args))}}function H0(r,c){const d=r,h=$0(),g=wP(),m=_P&&d.enableEarlyProxy;if(g&&(h.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!m))g.emit(vP,r,c);else{const b=m?new xP(d,g):null;(h.__VUE_DEVTOOLS_PLUGINS__=h.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:d,setupFn:c,proxy:b}),b&&c(b.proxiedTarget)}}/*!
  * pinia v2.0.18
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Cg;const ac=r=>Cg=r,U0=Symbol("pinia");function Tr(r){return r&&typeof r=="object"&&Object.prototype.toString.call(r)==="[object Object]"&&typeof r.toJSON!="function"}var Po;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(Po||(Po={}));const Li=typeof window!="undefined",SA=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function EP(r,{autoBom:c=!1}={}){return c&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob([String.fromCharCode(65279),r],{type:r.type}):r}function cp(r,c,d){const h=new XMLHttpRequest;h.open("GET",r),h.responseType="blob",h.onload=function(){G0(h.response,c,d)},h.onerror=function(){console.error("could not download file")},h.send()}function q0(r){const c=new XMLHttpRequest;c.open("HEAD",r,!1);try{c.send()}catch{}return c.status>=200&&c.status<=299}function nd(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(d)}}const od=typeof navigator=="object"?navigator:{userAgent:""},W0=(()=>/Macintosh/.test(od.userAgent)&&/AppleWebKit/.test(od.userAgent)&&!/Safari/.test(od.userAgent))(),G0=Li?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!W0?DP:"msSaveOrOpenBlob"in od?SP:TP:()=>{};function DP(r,c="download",d){const h=document.createElement("a");h.download=c,h.rel="noopener",typeof r=="string"?(h.href=r,h.origin!==location.origin?q0(h.href)?cp(r,c,d):(h.target="_blank",nd(h)):nd(h)):(h.href=URL.createObjectURL(r),setTimeout(function(){URL.revokeObjectURL(h.href)},4e4),setTimeout(function(){nd(h)},0))}function SP(r,c="download",d){if(typeof r=="string")if(q0(r))cp(r,c,d);else{const h=document.createElement("a");h.href=r,h.target="_blank",setTimeout(function(){nd(h)})}else navigator.msSaveOrOpenBlob(EP(r,d),c)}function TP(r,c,d,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof r=="string")return cp(r,c,d);const g=r.type==="application/octet-stream",m=/constructor/i.test(String(SA.HTMLElement))||"safari"in SA,b=/CriOS\/[\d]+/.test(navigator.userAgent);if((b||g&&m||W0)&&typeof FileReader!="undefined"){const _=new FileReader;_.onloadend=function(){let w=_.result;if(typeof w!="string")throw h=null,new Error("Wrong reader.result type");w=b?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=w:location.assign(w),h=null},_.readAsDataURL(r)}else{const _=URL.createObjectURL(r);h?h.location.assign(_):location.href=_,h=null,setTimeout(function(){URL.revokeObjectURL(_)},4e4)}}function tn(r,c){const d="\u{1F34D} "+r;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(d,c):c==="error"?console.error(d):c==="warn"?console.warn(d):console.log(d)}function lp(r){return"_a"in r&&"install"in r}function K0(){if(!("clipboard"in navigator))return tn("Your browser doesn't support the Clipboard API","error"),!0}function Y0(r){return r instanceof Error&&r.message.toLowerCase().includes("document is not focused")?(tn('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function IP(r){if(!K0())try{await navigator.clipboard.writeText(JSON.stringify(r.state.value)),tn("Global state copied to clipboard.")}catch(c){if(Y0(c))return;tn("Failed to serialize the state. Check the console for more details.","error"),console.error(c)}}async function MP(r){if(!K0())try{r.state.value=JSON.parse(await navigator.clipboard.readText()),tn("Global state pasted from clipboard.")}catch(c){if(Y0(c))return;tn("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(c)}}async function PP(r){try{G0(new Blob([JSON.stringify(r.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(c){tn("Failed to export the state as JSON. Check the console for more details.","error"),console.error(c)}}let ti;function NP(){ti||(ti=document.createElement("input"),ti.type="file",ti.accept=".json");function r(){return new Promise((c,d)=>{ti.onchange=async()=>{const h=ti.files;if(!h)return c(null);const g=h.item(0);return c(g?{text:await g.text(),file:g}:null)},ti.oncancel=()=>c(null),ti.onerror=d,ti.click()})}return r}async function BP(r){try{const d=await(await NP())();if(!d)return;const{text:h,file:g}=d;r.state.value=JSON.parse(h),tn(`Global state imported from "${g.name}".`)}catch(c){tn("Failed to export the state as JSON. Check the console for more details.","error"),console.error(c)}}function ho(r){return{_custom:{display:r}}}const Q0="\u{1F34D} Pinia (root)",yg="_root";function LP(r){return lp(r)?{id:yg,label:Q0}:{id:r.$id,label:r.$id}}function OP(r){if(lp(r)){const d=Array.from(r._s.keys()),h=r._s;return{state:d.map(m=>({editable:!0,key:m,value:r.state.value[m]})),getters:d.filter(m=>h.get(m)._getters).map(m=>{const b=h.get(m);return{editable:!1,key:m,value:b._getters.reduce((_,w)=>(_[w]=b[w],_),{})}})}}const c={state:Object.keys(r.$state).map(d=>({editable:!0,key:d,value:r.$state[d]}))};return r._getters&&r._getters.length&&(c.getters=r._getters.map(d=>({editable:!1,key:d,value:r[d]}))),r._customProperties.size&&(c.customProperties=Array.from(r._customProperties).map(d=>({editable:!0,key:d,value:r[d]}))),c}function RP(r){return r?Array.isArray(r)?r.reduce((c,d)=>(c.keys.push(d.key),c.operations.push(d.type),c.oldValue[d.key]=d.oldValue,c.newValue[d.key]=d.newValue,c),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:ho(r.type),key:ho(r.key),oldValue:r.oldValue,newValue:r.newValue}:{}}function zP(r){switch(r){case Po.direct:return"mutation";case Po.patchFunction:return"$patch";case Po.patchObject:return"$patch";default:return"unknown"}}let vs=!0;const id=[],_r="pinia:mutations",gn="pinia",md=r=>"\u{1F34D} "+r;function jP(r,c){H0({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:id,app:r},d=>{typeof d.now!="function"&&tn("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),d.addTimelineLayer({id:_r,label:"Pinia \u{1F34D}",color:15064968}),d.addInspector({id:gn,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{IP(c)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await MP(c),d.sendInspectorTree(gn),d.sendInspectorState(gn)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{PP(c)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await BP(c),d.sendInspectorTree(gn),d.sendInspectorState(gn)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:h=>{const g=c._s.get(h);g?g._isOptionsAPI?(g.$reset(),tn(`Store "${h}" reset.`)):tn(`Cannot reset "${h}" store because it's a setup store.`,"warn"):tn(`Cannot reset "${h}" store because it wasn't found.`,"warn")}}]}),d.on.inspectComponent((h,g)=>{const m=h.componentInstance&&h.componentInstance.proxy;if(m&&m._pStores){const b=h.componentInstance.proxy._pStores;Object.values(b).forEach(_=>{h.instanceData.state.push({type:md(_.$id),key:"state",editable:!0,value:_._isOptionsAPI?{_custom:{value:Xt(_.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>_.$reset()}]}}:Object.keys(_.$state).reduce((w,x)=>(w[x]=_.$state[x],w),{})}),_._getters&&_._getters.length&&h.instanceData.state.push({type:md(_.$id),key:"getters",editable:!1,value:_._getters.reduce((w,x)=>{try{w[x]=_[x]}catch(E){w[x]=E}return w},{})})})}}),d.on.getInspectorTree(h=>{if(h.app===r&&h.inspectorId===gn){let g=[c];g=g.concat(Array.from(c._s.values())),h.rootNodes=(h.filter?g.filter(m=>"$id"in m?m.$id.toLowerCase().includes(h.filter.toLowerCase()):Q0.toLowerCase().includes(h.filter.toLowerCase())):g).map(LP)}}),d.on.getInspectorState(h=>{if(h.app===r&&h.inspectorId===gn){const g=h.nodeId===yg?c:c._s.get(h.nodeId);if(!g)return;g&&(h.state=OP(g))}}),d.on.editInspectorState((h,g)=>{if(h.app===r&&h.inspectorId===gn){const m=h.nodeId===yg?c:c._s.get(h.nodeId);if(!m)return tn(`store "${h.nodeId}" not found`,"error");const{path:b}=h;lp(m)?b.unshift("state"):(b.length!==1||!m._customProperties.has(b[0])||b[0]in m.$state)&&b.unshift("$state"),vs=!1,h.set(m,b,h.state.value),vs=!0}}),d.on.editComponentState(h=>{if(h.type.startsWith("\u{1F34D}")){const g=h.type.replace(/^🍍\s*/,""),m=c._s.get(g);if(!m)return tn(`store "${g}" not found`,"error");const{path:b}=h;if(b[0]!=="state")return tn(`Invalid path for store "${g}":
${b}
Only state can be modified.`);b[0]="$state",vs=!1,h.set(m,b,h.state.value),vs=!0}})})}function FP(r,c){id.includes(md(c.$id))||id.push(md(c.$id)),H0({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:id,app:r,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},d=>{const h=typeof d.now=="function"?d.now.bind(d):Date.now;c.$onAction(({after:b,onError:_,name:w,args:x})=>{const E=Z0++;d.addTimelineEvent({layerId:_r,event:{time:h(),title:"\u{1F6EB} "+w,subtitle:"start",data:{store:ho(c.$id),action:ho(w),args:x},groupId:E}}),b(S=>{Ar=void 0,d.addTimelineEvent({layerId:_r,event:{time:h(),title:"\u{1F6EC} "+w,subtitle:"end",data:{store:ho(c.$id),action:ho(w),args:x,result:S},groupId:E}})}),_(S=>{Ar=void 0,d.addTimelineEvent({layerId:_r,event:{time:h(),logType:"error",title:"\u{1F4A5} "+w,subtitle:"end",data:{store:ho(c.$id),action:ho(w),args:x,error:S},groupId:E}})})},!0),c._customProperties.forEach(b=>{zi(()=>J(c[b]),(_,w)=>{d.notifyComponentUpdate(),d.sendInspectorState(gn),vs&&d.addTimelineEvent({layerId:_r,event:{time:h(),title:"Change",subtitle:b,data:{newValue:_,oldValue:w},groupId:Ar}})},{deep:!0})}),c.$subscribe(({events:b,type:_},w)=>{if(d.notifyComponentUpdate(),d.sendInspectorState(gn),!vs)return;const x={time:h(),title:zP(_),data:{store:ho(c.$id),...RP(b)},groupId:Ar};Ar=void 0,_===Po.patchFunction?x.subtitle="\u2935\uFE0F":_===Po.patchObject?x.subtitle="\u{1F9E9}":b&&!Array.isArray(b)&&(x.subtitle=b.type),b&&(x.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:b}}),d.addTimelineEvent({layerId:_r,event:x})},{detached:!0,flush:"sync"});const g=c._hotUpdate;c._hotUpdate=to(b=>{g(b),d.addTimelineEvent({layerId:_r,event:{time:h(),title:"\u{1F525} "+c.$id,subtitle:"HMR update",data:{store:ho(c.$id),info:ho("HMR update")}}}),d.notifyComponentUpdate(),d.sendInspectorTree(gn),d.sendInspectorState(gn)});const{$dispose:m}=c;c.$dispose=()=>{m(),d.notifyComponentUpdate(),d.sendInspectorTree(gn),d.sendInspectorState(gn),d.getSettings().logStoreChanges&&tn(`Disposed "${c.$id}" store \u{1F5D1}`)},d.notifyComponentUpdate(),d.sendInspectorTree(gn),d.sendInspectorState(gn),d.getSettings().logStoreChanges&&tn(`"${c.$id}" store installed \u{1F195}`)})}let Z0=0,Ar;function TA(r,c){const d=c.reduce((h,g)=>(h[g]=Xt(r)[g],h),{});for(const h in d)r[h]=function(){const g=Z0,m=new Proxy(r,{get(...b){return Ar=g,Reflect.get(...b)},set(...b){return Ar=g,Reflect.set(...b)}});return d[h].apply(m,arguments)}}function VP({app:r,store:c,options:d}){if(!c.$id.startsWith("__hot:")){if(d.state&&(c._isOptionsAPI=!0),typeof d.state=="function"){TA(c,Object.keys(d.actions));const h=c._hotUpdate;Xt(c)._hotUpdate=function(g){h.apply(this,arguments),TA(c,Object.keys(g._hmrPayload.actions))}}FP(r,c)}}function $P(){const r=jg(!0),c=r.run(()=>eo({}));let d=[],h=[];const g=to({install(m){ac(g),g._a=m,m.provide(U0,g),m.config.globalProperties.$pinia=g,Li&&jP(m,g),h.forEach(b=>d.push(b)),h=[]},use(m){return!this._a&&!kP?h.push(m):d.push(m),this},_p:d,_a:null,_e:r,_s:new Map,state:c});return Li&&!0&&typeof Proxy!="undefined"&&g.use(VP),g}function J0(r,c){for(const d in c){const h=c[d];if(!(d in r))continue;const g=r[d];Tr(g)&&Tr(h)&&!Se(h)&&!Io(h)?r[d]=J0(g,h):r[d]=h}return r}const HP=()=>{};function IA(r,c,d,h=HP){r.push(c);const g=()=>{const m=r.indexOf(c);m>-1&&(r.splice(m,1),h())};return!d&&Lo()&&mc(g),g}function fs(r,...c){r.slice().forEach(d=>{d(...c)})}function xg(r,c){for(const d in c){if(!c.hasOwnProperty(d))continue;const h=c[d],g=r[d];Tr(g)&&Tr(h)&&r.hasOwnProperty(d)&&!Se(h)&&!Io(h)?r[d]=xg(g,h):r[d]=h}return r}const UP=Symbol("pinia:skipHydration");function qP(r){return!Tr(r)||!r.hasOwnProperty(UP)}const{assign:fo}=Object;function MA(r){return!!(Se(r)&&r.effect)}function PA(r,c,d,h){const{state:g,actions:m,getters:b}=c,_=d.state.value[r];let w;function x(){!_&&!h&&(d.state.value[r]=g?g():{});const E=sg(h?eo(g?g():{}).value:d.state.value[r]);return fo(E,m,Object.keys(b||{}).reduce((S,v)=>(v in E&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${v}" in store "${r}".`),S[v]=to(se(()=>{ac(d);const M=d._s.get(r);return b[v].call(M,M)})),S),{}))}return w=Eg(r,x,c,d,h,!0),w.$reset=function(){const S=g?g():{};this.$patch(v=>{fo(v,S)})},w}function Eg(r,c,d={},h,g,m){let b;const _=fo({actions:{}},d);if(!h._e.active)throw new Error("Pinia destroyed");const w={deep:!0};w.onTrigger=G=>{x?M=G:x==!1&&!V._hotUpdating&&(Array.isArray(M)?M.push(G):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let x,E,S=to([]),v=to([]),M;const W=h.state.value[r];!m&&!W&&!g&&(h.state.value[r]={});const ct=eo({});let it;function H(G){let Y;x=E=!1,M=[],typeof G=="function"?(G(h.state.value[r]),Y={type:Po.patchFunction,storeId:r,events:M}):(xg(h.state.value[r],G),Y={type:Po.patchObject,payload:G,storeId:r,events:M});const et=it=Symbol();No().then(()=>{it===et&&(x=!0)}),E=!0,fs(S,Y,h.state.value[r])}const j=()=>{throw new Error(`\u{1F34D}: Store "${r}" is built using the setup syntax and does not implement $reset().`)};function K(){b.stop(),S=[],v=[],h._s.delete(r)}function nt(G,Y){return function(){ac(h);const et=Array.from(arguments),O=[],_t=[];function pt(yt){O.push(yt)}function Bt(yt){_t.push(yt)}fs(v,{args:et,name:G,store:V,after:pt,onError:Bt});let Pt;try{Pt=Y.apply(this&&this.$id===r?this:V,et)}catch(yt){throw fs(_t,yt),yt}return Pt instanceof Promise?Pt.then(yt=>(fs(O,yt),yt)).catch(yt=>(fs(_t,yt),Promise.reject(yt))):(fs(O,Pt),Pt)}}const ut=to({actions:{},getters:{},state:[],hotState:ct}),Dt={_p:h,$id:r,$onAction:IA.bind(null,v),$patch:H,$reset:j,$subscribe(G,Y={}){const et=IA(S,G,Y.detached,()=>O()),O=b.run(()=>zi(()=>h.state.value[r],_t=>{(Y.flush==="sync"?E:x)&&G({storeId:r,type:Po.direct,events:M},_t)},fo({},w,Y)));return et},$dispose:K},V=Mn(fo(Li?{_customProperties:to(new Set),_hmrPayload:ut}:{},Dt));h._s.set(r,V);const U=h._e.run(()=>(b=jg(),b.run(()=>c())));for(const G in U){const Y=U[G];if(Se(Y)&&!MA(Y)||Io(Y))g?Yl(ct.value,G,qa(U,G)):m||(W&&qP(Y)&&(Se(Y)?Y.value=W[G]:xg(Y,W[G])),h.state.value[r][G]=Y),ut.state.push(G);else if(typeof Y=="function"){const et=g?Y:nt(G,Y);U[G]=et,ut.actions[G]=Y,_.actions[G]=Y}else MA(Y)&&(ut.getters[G]=m?d.getters[G]:Y,Li&&(U._getters||(U._getters=to([]))).push(G))}fo(V,U),fo(Xt(V),U),Object.defineProperty(V,"$state",{get:()=>g?ct.value:h.state.value[r],set:G=>{if(g)throw new Error("cannot set hotState");H(Y=>{fo(Y,G)})}});{V._hotUpdate=to(Y=>{V._hotUpdating=!0,Y._hmrPayload.state.forEach(et=>{if(et in V.$state){const O=Y.$state[et],_t=V.$state[et];typeof O=="object"&&Tr(O)&&Tr(_t)?J0(O,_t):Y.$state[et]=_t}Yl(V,et,qa(Y.$state,et))}),Object.keys(V.$state).forEach(et=>{et in Y.$state||Hf(V,et)}),x=!1,E=!1,h.state.value[r]=qa(Y._hmrPayload,"hotState"),E=!0,No().then(()=>{x=!0});for(const et in Y._hmrPayload.actions){const O=Y[et];Yl(V,et,nt(et,O))}for(const et in Y._hmrPayload.getters){const O=Y._hmrPayload.getters[et],_t=m?se(()=>(ac(h),O.call(V,V))):O;Yl(V,et,_t)}Object.keys(V._hmrPayload.getters).forEach(et=>{et in Y._hmrPayload.getters||Hf(V,et)}),Object.keys(V._hmrPayload.actions).forEach(et=>{et in Y._hmrPayload.actions||Hf(V,et)}),V._hmrPayload=Y._hmrPayload,V._getters=Y._getters,V._hotUpdating=!1});const G={writable:!0,configurable:!0,enumerable:!1};Li&&["_p","_hmrPayload","_getters","_customProperties"].forEach(Y=>{Object.defineProperty(V,Y,{value:V[Y],...G})})}return h._p.forEach(G=>{if(Li){const Y=b.run(()=>G({store:V,app:h._a,pinia:h,options:_}));Object.keys(Y||{}).forEach(et=>V._customProperties.add(et)),fo(V,Y)}else fo(V,b.run(()=>G({store:V,app:h._a,pinia:h,options:_})))}),V.$state&&typeof V.$state=="object"&&typeof V.$state.constructor=="function"&&!V.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${V.$id}".`),W&&m&&d.hydrate&&d.hydrate(V.$state,W),x=!0,E=!0,V}function Ki(r,c,d){let h,g;const m=typeof c=="function";typeof r=="string"?(h=r,g=m?d:c):(g=r,h=r.id);function b(_,w){const x=Lo();if(_=_||x&&bo(U0),_&&ac(_),!Cg)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);_=Cg,_._s.has(h)||(m?Eg(h,c,g,_):PA(h,g,_),b._pinia=_);const E=_._s.get(h);if(w){const S="__hot:"+h,v=m?Eg(S,c,g,_,!0):PA(S,fo({},g),_,!0);w._hotUpdate(v),delete _.state.value[S],_._s.delete(S)}if(Li&&x&&x.proxy&&!w){const S=x.proxy,v="_pStores"in S?S._pStores:S._pStores={};v[h]=E}return E}return b.$id=h,b}var Ql=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function X0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function WP(r){if(r.__esModule)return r;var c=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(d){var h=Object.getOwnPropertyDescriptor(r,d);Object.defineProperty(c,d,h.get?h:{enumerable:!0,get:function(){return r[d]}})}),c}var dp={exports:{}},GP=WP(bP);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,c){(function(d,h){r.exports=h(GP)})(window,function(d){return function(h){var g={};function m(b){if(g[b])return g[b].exports;var _=g[b]={i:b,l:!1,exports:{}};return h[b].call(_.exports,_,_.exports,m),_.l=!0,_.exports}return m.m=h,m.c=g,m.d=function(b,_,w){m.o(b,_)||Object.defineProperty(b,_,{enumerable:!0,get:w})},m.r=function(b){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},m.t=function(b,_){if(1&_&&(b=m(b)),8&_||4&_&&typeof b=="object"&&b&&b.__esModule)return b;var w=Object.create(null);if(m.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:b}),2&_&&typeof b!="string")for(var x in b)m.d(w,x,function(E){return b[E]}.bind(null,x));return w},m.n=function(b){var _=b&&b.__esModule?function(){return b.default}:function(){return b};return m.d(_,"a",_),_},m.o=function(b,_){return Object.prototype.hasOwnProperty.call(b,_)},m.p="",m(m.s=3)}([function(h,g){h.exports=d},function(h,g,m){(function(b){var _=typeof b=="object"&&b&&b.Object===Object&&b;g.a=_}).call(this,m(2))},function(h,g){var m;m=function(){return this}();try{m=m||new Function("return this")()}catch{typeof window=="object"&&(m=window)}h.exports=m},function(h,g,m){m.r(g);var b=m(0),_=m.n(b),w=function(F){var ft=typeof F;return F!=null&&(ft=="object"||ft=="function")},x=m(1),E=typeof self=="object"&&self&&self.Object===Object&&self,S=x.a||E||Function("return this")(),v=function(){return S.Date.now()},M=/\s/,W=function(F){for(var ft=F.length;ft--&&M.test(F.charAt(ft)););return ft},ct=/^\s+/,it=function(F){return F&&F.slice(0,W(F)+1).replace(ct,"")},H=S.Symbol,j=Object.prototype,K=j.hasOwnProperty,nt=j.toString,ut=H?H.toStringTag:void 0,Dt=function(F){var ft=K.call(F,ut),lt=F[ut];try{F[ut]=void 0;var tt=!0}catch{}var Z=nt.call(F);return tt&&(ft?F[ut]=lt:delete F[ut]),Z},V=Object.prototype.toString,U=function(F){return V.call(F)},G=H?H.toStringTag:void 0,Y=function(F){return F==null?F===void 0?"[object Undefined]":"[object Null]":G&&G in Object(F)?Dt(F):U(F)},et=function(F){return F!=null&&typeof F=="object"},O=function(F){return typeof F=="symbol"||et(F)&&Y(F)=="[object Symbol]"},_t=/^[-+]0x[0-9a-f]+$/i,pt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Pt=parseInt,yt=function(F){if(typeof F=="number")return F;if(O(F))return NaN;if(w(F)){var ft=typeof F.valueOf=="function"?F.valueOf():F;F=w(ft)?ft+"":ft}if(typeof F!="string")return F===0?F:+F;F=it(F);var lt=pt.test(F);return lt||Bt.test(F)?Pt(F.slice(2),lt?2:8):_t.test(F)?NaN:+F},Kt=Math.max,de=Math.min,ne=function(F,ft,lt){var tt,Z,te,vt,Lt,L,$=0,Q=!1,ot=!1,rt=!0;if(typeof F!="function")throw new TypeError("Expected a function");function mt(Et){var It=tt,bt=Z;return tt=Z=void 0,$=Et,vt=F.apply(bt,It)}function kt(Et){return $=Et,Lt=setTimeout(wt,ft),Q?mt(Et):vt}function gt(Et){var It=Et-L;return L===void 0||It>=ft||It<0||ot&&Et-$>=te}function wt(){var Et=v();if(gt(Et))return at(Et);Lt=setTimeout(wt,function(It){var bt=ft-(It-L);return ot?de(bt,te-(It-$)):bt}(Et))}function at(Et){return Lt=void 0,rt&&tt?mt(Et):(tt=Z=void 0,vt)}function Nt(){var Et=v(),It=gt(Et);if(tt=arguments,Z=this,L=Et,It){if(Lt===void 0)return kt(L);if(ot)return clearTimeout(Lt),Lt=setTimeout(wt,ft),mt(L)}return Lt===void 0&&(Lt=setTimeout(wt,ft)),vt}return ft=yt(ft)||0,w(lt)&&(Q=!!lt.leading,te=(ot="maxWait"in lt)?Kt(yt(lt.maxWait)||0,ft):te,rt="trailing"in lt?!!lt.trailing:rt),Nt.cancel=function(){Lt!==void 0&&clearTimeout(Lt),$=0,tt=L=Z=Lt=void 0},Nt.flush=function(){return Lt===void 0?vt:at(v())},Nt},oe={name:"ckeditor",created(){const{CKEDITOR_VERSION:F}=window;if(F){const[ft]=F.split(".").map(Number);ft<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(b.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const F=Object.assign({},this.config);this.modelValue&&(F.initialData=this.modelValue),this.editor.create(this.$el,F).then(ft=>{this.instance=Object(b.markRaw)(ft),this.setUpEditorEvents(),this.modelValue!==F.initialData&&ft.setData(this.modelValue),this.disabled&&ft.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ft)}).catch(ft=>{console.error(ft)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(F){this.instance&&F!==this.lastEditorData&&this.instance.setData(F)},disabled(F){F?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const F=this.instance,ft=ne(lt=>{const tt=this.lastEditorData=F.getData();this.$emit("update:modelValue",tt,lt,F),this.$emit("input",tt,lt,F)},300,{leading:!0});F.model.document.on("change:data",ft),F.editing.view.document.on("focus",lt=>{this.$emit("focus",lt,F)}),F.editing.view.document.on("blur",lt=>{this.$emit("blur",lt,F)})}}};const zt=_.a?_.a.version:b.version,[ae]=zt.split(".").map(F=>parseInt(F,10));if(ae<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const me={install(F){F.component("ckeditor",oe)},component:oe};g.default=me}]).default})})(dp);var up=X0(dp.exports);/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _s=typeof window!="undefined";function KP(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function Uf(r,c){const d={};for(const h in c){const g=c[h];d[h]=ko(g)?g.map(r):r(g)}return d}const Xa=()=>{},ko=Array.isArray,YP=/\/$/,QP=r=>r.replace(YP,"");function qf(r,c,d="/"){let h,g={},m="",b="";const _=c.indexOf("#");let w=c.indexOf("?");return _<w&&_>=0&&(w=-1),w>-1&&(h=c.slice(0,w),m=c.slice(w+1,_>-1?_:c.length),g=r(m)),_>-1&&(h=h||c.slice(0,_),b=c.slice(_,c.length)),h=tN(h!=null?h:c,d),{fullPath:h+(m&&"?")+m+b,path:h,query:g,hash:b}}function ZP(r,c){const d=c.query?r(c.query):"";return c.path+(d&&"?")+d+(c.hash||"")}function NA(r,c){return!c||!r.toLowerCase().startsWith(c.toLowerCase())?r:r.slice(c.length)||"/"}function JP(r,c,d){const h=c.matched.length-1,g=d.matched.length-1;return h>-1&&h===g&&Ns(c.matched[h],d.matched[g])&&ty(c.params,d.params)&&r(c.query)===r(d.query)&&c.hash===d.hash}function Ns(r,c){return(r.aliasOf||r)===(c.aliasOf||c)}function ty(r,c){if(Object.keys(r).length!==Object.keys(c).length)return!1;for(const d in r)if(!XP(r[d],c[d]))return!1;return!0}function XP(r,c){return ko(r)?BA(r,c):ko(c)?BA(c,r):r===c}function BA(r,c){return ko(c)?r.length===c.length&&r.every((d,h)=>d===c[h]):r.length===1&&r[0]===c}function tN(r,c){if(r.startsWith("/"))return r;if(!r)return c;const d=c.split("/"),h=r.split("/");let g=d.length-1,m,b;for(m=0;m<h.length;m++)if(b=h[m],b!==".")if(b==="..")g>1&&g--;else break;return d.slice(0,g).join("/")+"/"+h.slice(m-(m===h.length?1:0)).join("/")}var cc;(function(r){r.pop="pop",r.push="push"})(cc||(cc={}));var tc;(function(r){r.back="back",r.forward="forward",r.unknown=""})(tc||(tc={}));function eN(r){if(!r)if(_s){const c=document.querySelector("base");r=c&&c.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),QP(r)}const nN=/^[^#]+#/;function oN(r,c){return r.replace(nN,"#")+c}function iN(r,c){const d=document.documentElement.getBoundingClientRect(),h=r.getBoundingClientRect();return{behavior:c.behavior,left:h.left-d.left-(c.left||0),top:h.top-d.top-(c.top||0)}}const Fd=()=>({left:window.pageXOffset,top:window.pageYOffset});function rN(r){let c;if("el"in r){const d=r.el,h=typeof d=="string"&&d.startsWith("#"),g=typeof d=="string"?h?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!g)return;c=iN(g,r)}else c=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function LA(r,c){return(history.state?history.state.position-c:-1)+r}const Dg=new Map;function sN(r,c){Dg.set(r,c)}function aN(r){const c=Dg.get(r);return Dg.delete(r),c}let cN=()=>location.protocol+"//"+location.host;function ey(r,c){const{pathname:d,search:h,hash:g}=c,m=r.indexOf("#");if(m>-1){let _=g.includes(r.slice(m))?r.slice(m).length:1,w=g.slice(_);return w[0]!=="/"&&(w="/"+w),NA(w,"")}return NA(d,r)+h+g}function lN(r,c,d,h){let g=[],m=[],b=null;const _=({state:v})=>{const M=ey(r,location),W=d.value,ct=c.value;let it=0;if(v){if(d.value=M,c.value=v,b&&b===W){b=null;return}it=ct?v.position-ct.position:0}else h(M);g.forEach(H=>{H(d.value,W,{delta:it,type:cc.pop,direction:it?it>0?tc.forward:tc.back:tc.unknown})})};function w(){b=d.value}function x(v){g.push(v);const M=()=>{const W=g.indexOf(v);W>-1&&g.splice(W,1)};return m.push(M),M}function E(){const{history:v}=window;!v.state||v.replaceState(Ae({},v.state,{scroll:Fd()}),"")}function S(){for(const v of m)v();m=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",E)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",E),{pauseListeners:w,listen:x,destroy:S}}function OA(r,c,d,h=!1,g=!1){return{back:r,current:c,forward:d,replaced:h,position:window.history.length,scroll:g?Fd():null}}function dN(r){const{history:c,location:d}=window,h={value:ey(r,d)},g={value:c.state};g.value||m(h.value,{back:null,current:h.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function m(w,x,E){const S=r.indexOf("#"),v=S>-1?(d.host&&document.querySelector("base")?r:r.slice(S))+w:cN()+r+w;try{c[E?"replaceState":"pushState"](x,"",v),g.value=x}catch(M){console.error(M),d[E?"replace":"assign"](v)}}function b(w,x){const E=Ae({},c.state,OA(g.value.back,w,g.value.forward,!0),x,{position:g.value.position});m(w,E,!0),h.value=w}function _(w,x){const E=Ae({},g.value,c.state,{forward:w,scroll:Fd()});m(E.current,E,!0);const S=Ae({},OA(h.value,w,null),{position:E.position+1},x);m(w,S,!1),h.value=w}return{location:h,state:g,push:_,replace:b}}function uN(r){r=eN(r);const c=dN(r),d=lN(r,c.state,c.location,c.replace);function h(m,b=!0){b||d.pauseListeners(),history.go(m)}const g=Ae({location:"",base:r,go:h,createHref:oN.bind(null,r)},c,d);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>c.state.value}),g}function hN(r){return typeof r=="string"||r&&typeof r=="object"}function ny(r){return typeof r=="string"||typeof r=="symbol"}const Di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},oy=Symbol("");var RA;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(RA||(RA={}));function Bs(r,c){return Ae(new Error,{type:r,[oy]:!0},c)}function Si(r,c){return r instanceof Error&&oy in r&&(c==null||!!(r.type&c))}const zA="[^/]+?",fN={sensitive:!1,strict:!1,start:!0,end:!0},gN=/[.+*?^${}()[\]/\\]/g;function pN(r,c){const d=Ae({},fN,c),h=[];let g=d.start?"^":"";const m=[];for(const x of r){const E=x.length?[]:[90];d.strict&&!x.length&&(g+="/");for(let S=0;S<x.length;S++){const v=x[S];let M=40+(d.sensitive?.25:0);if(v.type===0)S||(g+="/"),g+=v.value.replace(gN,"\\$&"),M+=40;else if(v.type===1){const{value:W,repeatable:ct,optional:it,regexp:H}=v;m.push({name:W,repeatable:ct,optional:it});const j=H||zA;if(j!==zA){M+=10;try{new RegExp(`(${j})`)}catch(nt){throw new Error(`Invalid custom RegExp for param "${W}" (${j}): `+nt.message)}}let K=ct?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;S||(K=it&&x.length<2?`(?:/${K})`:"/"+K),it&&(K+="?"),g+=K,M+=20,it&&(M+=-8),ct&&(M+=-20),j===".*"&&(M+=-50)}E.push(M)}h.push(E)}if(d.strict&&d.end){const x=h.length-1;h[x][h[x].length-1]+=.7000000000000001}d.strict||(g+="/?"),d.end?g+="$":d.strict&&(g+="(?:/|$)");const b=new RegExp(g,d.sensitive?"":"i");function _(x){const E=x.match(b),S={};if(!E)return null;for(let v=1;v<E.length;v++){const M=E[v]||"",W=m[v-1];S[W.name]=M&&W.repeatable?M.split("/"):M}return S}function w(x){let E="",S=!1;for(const v of r){(!S||!E.endsWith("/"))&&(E+="/"),S=!1;for(const M of v)if(M.type===0)E+=M.value;else if(M.type===1){const{value:W,repeatable:ct,optional:it}=M,H=W in x?x[W]:"";if(ko(H)&&!ct)throw new Error(`Provided param "${W}" is an array but it is not repeatable (* or + modifiers)`);const j=ko(H)?H.join("/"):H;if(!j)if(it)v.length<2&&r.length>1&&(E.endsWith("/")?E=E.slice(0,-1):S=!0);else throw new Error(`Missing required param "${W}"`);E+=j}}return E}return{re:b,score:h,keys:m,parse:_,stringify:w}}function mN(r,c){let d=0;for(;d<r.length&&d<c.length;){const h=c[d]-r[d];if(h)return h;d++}return r.length<c.length?r.length===1&&r[0]===40+40?-1:1:r.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function bN(r,c){let d=0;const h=r.score,g=c.score;for(;d<h.length&&d<g.length;){const m=mN(h[d],g[d]);if(m)return m;d++}if(Math.abs(g.length-h.length)===1){if(jA(h))return 1;if(jA(g))return-1}return g.length-h.length}function jA(r){const c=r[r.length-1];return r.length>0&&c[c.length-1]<0}const kN={type:0,value:""},wN=/[a-zA-Z0-9_]/;function _N(r){if(!r)return[[]];if(r==="/")return[[kN]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function c(M){throw new Error(`ERR (${d})/"${x}": ${M}`)}let d=0,h=d;const g=[];let m;function b(){m&&g.push(m),m=[]}let _=0,w,x="",E="";function S(){!x||(d===0?m.push({type:0,value:x}):d===1||d===2||d===3?(m.length>1&&(w==="*"||w==="+")&&c(`A repeatable param (${x}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:x,regexp:E,repeatable:w==="*"||w==="+",optional:w==="*"||w==="?"})):c("Invalid state to consume buffer"),x="")}function v(){x+=w}for(;_<r.length;){if(w=r[_++],w==="\\"&&d!==2){h=d,d=4;continue}switch(d){case 0:w==="/"?(x&&S(),b()):w===":"?(S(),d=1):v();break;case 4:v(),d=h;break;case 1:w==="("?d=2:wN.test(w)?v():(S(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&_--);break;case 2:w===")"?E[E.length-1]=="\\"?E=E.slice(0,-1)+w:d=3:E+=w;break;case 3:S(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&_--,E="";break;default:c("Unknown state");break}}return d===2&&c(`Unfinished custom RegExp for param "${x}"`),S(),b(),g}function vN(r,c,d){const h=pN(_N(r.path),d),g=Ae(h,{record:r,parent:c,children:[],alias:[]});return c&&!g.record.aliasOf==!c.record.aliasOf&&c.children.push(g),g}function AN(r,c){const d=[],h=new Map;c=VA({strict:!1,end:!0,sensitive:!1},c);function g(E){return h.get(E)}function m(E,S,v){const M=!v,W=yN(E);W.aliasOf=v&&v.record;const ct=VA(c,E),it=[W];if("alias"in E){const K=typeof E.alias=="string"?[E.alias]:E.alias;for(const nt of K)it.push(Ae({},W,{components:v?v.record.components:W.components,path:nt,aliasOf:v?v.record:W}))}let H,j;for(const K of it){const{path:nt}=K;if(S&&nt[0]!=="/"){const ut=S.record.path,Dt=ut[ut.length-1]==="/"?"":"/";K.path=S.record.path+(nt&&Dt+nt)}if(H=vN(K,S,ct),v?v.alias.push(H):(j=j||H,j!==H&&j.alias.push(H),M&&E.name&&!FA(H)&&b(E.name)),W.children){const ut=W.children;for(let Dt=0;Dt<ut.length;Dt++)m(ut[Dt],H,v&&v.children[Dt])}v=v||H,w(H)}return j?()=>{b(j)}:Xa}function b(E){if(ny(E)){const S=h.get(E);S&&(h.delete(E),d.splice(d.indexOf(S),1),S.children.forEach(b),S.alias.forEach(b))}else{const S=d.indexOf(E);S>-1&&(d.splice(S,1),E.record.name&&h.delete(E.record.name),E.children.forEach(b),E.alias.forEach(b))}}function _(){return d}function w(E){let S=0;for(;S<d.length&&bN(E,d[S])>=0&&(E.record.path!==d[S].record.path||!iy(E,d[S]));)S++;d.splice(S,0,E),E.record.name&&!FA(E)&&h.set(E.record.name,E)}function x(E,S){let v,M={},W,ct;if("name"in E&&E.name){if(v=h.get(E.name),!v)throw Bs(1,{location:E});ct=v.record.name,M=Ae(CN(S.params,v.keys.filter(j=>!j.optional).map(j=>j.name)),E.params),W=v.stringify(M)}else if("path"in E)W=E.path,v=d.find(j=>j.re.test(W)),v&&(M=v.parse(W),ct=v.record.name);else{if(v=S.name?h.get(S.name):d.find(j=>j.re.test(S.path)),!v)throw Bs(1,{location:E,currentLocation:S});ct=v.record.name,M=Ae({},S.params,E.params),W=v.stringify(M)}const it=[];let H=v;for(;H;)it.unshift(H.record),H=H.parent;return{name:ct,path:W,params:M,matched:it,meta:EN(it)}}return r.forEach(E=>m(E)),{addRoute:m,resolve:x,removeRoute:b,getRoutes:_,getRecordMatcher:g}}function CN(r,c){const d={};for(const h of c)h in r&&(d[h]=r[h]);return d}function yN(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:xN(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function xN(r){const c={},d=r.props||!1;if("component"in r)c.default=d;else for(const h in r.components)c[h]=typeof d=="boolean"?d:d[h];return c}function FA(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function EN(r){return r.reduce((c,d)=>Ae(c,d.meta),{})}function VA(r,c){const d={};for(const h in r)d[h]=h in c?c[h]:r[h];return d}function iy(r,c){return c.children.some(d=>d===r||iy(r,d))}const ry=/#/g,DN=/&/g,SN=/\//g,TN=/=/g,IN=/\?/g,sy=/\+/g,MN=/%5B/g,PN=/%5D/g,ay=/%5E/g,NN=/%60/g,cy=/%7B/g,BN=/%7C/g,ly=/%7D/g,LN=/%20/g;function hp(r){return encodeURI(""+r).replace(BN,"|").replace(MN,"[").replace(PN,"]")}function ON(r){return hp(r).replace(cy,"{").replace(ly,"}").replace(ay,"^")}function Sg(r){return hp(r).replace(sy,"%2B").replace(LN,"+").replace(ry,"%23").replace(DN,"%26").replace(NN,"`").replace(cy,"{").replace(ly,"}").replace(ay,"^")}function RN(r){return Sg(r).replace(TN,"%3D")}function zN(r){return hp(r).replace(ry,"%23").replace(IN,"%3F")}function jN(r){return r==null?"":zN(r).replace(SN,"%2F")}function bd(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function FN(r){const c={};if(r===""||r==="?")return c;const h=(r[0]==="?"?r.slice(1):r).split("&");for(let g=0;g<h.length;++g){const m=h[g].replace(sy," "),b=m.indexOf("="),_=bd(b<0?m:m.slice(0,b)),w=b<0?null:bd(m.slice(b+1));if(_ in c){let x=c[_];ko(x)||(x=c[_]=[x]),x.push(w)}else c[_]=w}return c}function $A(r){let c="";for(let d in r){const h=r[d];if(d=RN(d),h==null){h!==void 0&&(c+=(c.length?"&":"")+d);continue}(ko(h)?h.map(m=>m&&Sg(m)):[h&&Sg(h)]).forEach(m=>{m!==void 0&&(c+=(c.length?"&":"")+d,m!=null&&(c+="="+m))})}return c}function VN(r){const c={};for(const d in r){const h=r[d];h!==void 0&&(c[d]=ko(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return c}const $N=Symbol(""),HA=Symbol(""),fp=Symbol(""),dy=Symbol(""),Tg=Symbol("");function Ra(){let r=[];function c(h){return r.push(h),()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)}}function d(){r=[]}return{add:c,list:()=>r,reset:d}}function Ni(r,c,d,h,g){const m=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((b,_)=>{const w=S=>{S===!1?_(Bs(4,{from:d,to:c})):S instanceof Error?_(S):hN(S)?_(Bs(2,{from:c,to:S})):(m&&h.enterCallbacks[g]===m&&typeof S=="function"&&m.push(S),b())},x=r.call(h&&h.instances[g],c,d,w);let E=Promise.resolve(x);r.length<3&&(E=E.then(w)),E.catch(S=>_(S))})}function Wf(r,c,d,h){const g=[];for(const m of r)for(const b in m.components){let _=m.components[b];if(!(c!=="beforeRouteEnter"&&!m.instances[b]))if(HN(_)){const x=(_.__vccOpts||_)[c];x&&g.push(Ni(x,d,h,m,b))}else{let w=_();g.push(()=>w.then(x=>{if(!x)return Promise.reject(new Error(`Couldn't resolve component "${b}" at "${m.path}"`));const E=KP(x)?x.default:x;m.components[b]=E;const v=(E.__vccOpts||E)[c];return v&&Ni(v,d,h,m,b)()}))}}return g}function HN(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function UA(r){const c=bo(fp),d=bo(dy),h=se(()=>c.resolve(J(r.to))),g=se(()=>{const{matched:w}=h.value,{length:x}=w,E=w[x-1],S=d.matched;if(!E||!S.length)return-1;const v=S.findIndex(Ns.bind(null,E));if(v>-1)return v;const M=qA(w[x-2]);return x>1&&qA(E)===M&&S[S.length-1].path!==M?S.findIndex(Ns.bind(null,w[x-2])):v}),m=se(()=>g.value>-1&&GN(d.params,h.value.params)),b=se(()=>g.value>-1&&g.value===d.matched.length-1&&ty(d.params,h.value.params));function _(w={}){return WN(w)?c[J(r.replace)?"replace":"push"](J(r.to)).catch(Xa):Promise.resolve()}return{route:h,href:se(()=>h.value.href),isActive:m,isExactActive:b,navigate:_}}const UN=Br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:UA,setup(r,{slots:c}){const d=Mn(UA(r)),{options:h}=bo(fp),g=se(()=>({[WA(r.activeClass,h.linkActiveClass,"router-link-active")]:d.isActive,[WA(r.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const m=c.default&&c.default(d);return r.custom?m:zd("a",{"aria-current":d.isExactActive?r.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:g.value},m)}}}),qN=UN;function WN(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const c=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return r.preventDefault&&r.preventDefault(),!0}}function GN(r,c){for(const d in c){const h=c[d],g=r[d];if(typeof h=="string"){if(h!==g)return!1}else if(!ko(g)||g.length!==h.length||h.some((m,b)=>m!==g[b]))return!1}return!0}function qA(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const WA=(r,c,d)=>r!=null?r:c!=null?c:d,KN=Br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:c,slots:d}){const h=bo(Tg),g=se(()=>r.route||h.value),m=bo(HA,0),b=se(()=>{let x=J(m);const{matched:E}=g.value;let S;for(;(S=E[x])&&!S.components;)x++;return x}),_=se(()=>g.value.matched[b.value]);Ya(HA,se(()=>b.value+1)),Ya($N,_),Ya(Tg,g);const w=eo();return zi(()=>[w.value,_.value,r.name],([x,E,S],[v,M,W])=>{E&&(E.instances[S]=x,M&&M!==E&&x&&x===v&&(E.leaveGuards.size||(E.leaveGuards=M.leaveGuards),E.updateGuards.size||(E.updateGuards=M.updateGuards))),x&&E&&(!M||!Ns(E,M)||!v)&&(E.enterCallbacks[S]||[]).forEach(ct=>ct(x))},{flush:"post"}),()=>{const x=g.value,E=_.value,S=E&&E.components[r.name],v=r.name;if(!S)return GA(d.default,{Component:S,route:x});const M=E.props[r.name],W=M?M===!0?x.params:typeof M=="function"?M(x):M:null,it=zd(S,Ae({},W,c,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(E.instances[v]=null)},ref:w}));return GA(d.default,{Component:it,route:x})||it}}});function GA(r,c){if(!r)return null;const d=r(c);return d.length===1?d[0]:d}const YN=KN;function QN(r){const c=AN(r.routes,r),d=r.parseQuery||FN,h=r.stringifyQuery||$A,g=r.history,m=Ra(),b=Ra(),_=Ra(),w=xC(Di);let x=Di;_s&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=Uf.bind(null,F=>""+F),S=Uf.bind(null,jN),v=Uf.bind(null,bd);function M(F,ft){let lt,tt;return ny(F)?(lt=c.getRecordMatcher(F),tt=ft):tt=F,c.addRoute(tt,lt)}function W(F){const ft=c.getRecordMatcher(F);ft&&c.removeRoute(ft)}function ct(){return c.getRoutes().map(F=>F.record)}function it(F){return!!c.getRecordMatcher(F)}function H(F,ft){if(ft=Ae({},ft||w.value),typeof F=="string"){const Lt=qf(d,F,ft.path),L=c.resolve({path:Lt.path},ft),$=g.createHref(Lt.fullPath);return Ae(Lt,L,{params:v(L.params),hash:bd(Lt.hash),redirectedFrom:void 0,href:$})}let lt;if("path"in F)lt=Ae({},F,{path:qf(d,F.path,ft.path).path});else{const Lt=Ae({},F.params);for(const L in Lt)Lt[L]==null&&delete Lt[L];lt=Ae({},F,{params:S(F.params)}),ft.params=S(ft.params)}const tt=c.resolve(lt,ft),Z=F.hash||"";tt.params=E(v(tt.params));const te=ZP(h,Ae({},F,{hash:ON(Z),path:tt.path})),vt=g.createHref(te);return Ae({fullPath:te,hash:Z,query:h===$A?VN(F.query):F.query||{}},tt,{redirectedFrom:void 0,href:vt})}function j(F){return typeof F=="string"?qf(d,F,w.value.path):Ae({},F)}function K(F,ft){if(x!==F)return Bs(8,{from:ft,to:F})}function nt(F){return V(F)}function ut(F){return nt(Ae(j(F),{replace:!0}))}function Dt(F){const ft=F.matched[F.matched.length-1];if(ft&&ft.redirect){const{redirect:lt}=ft;let tt=typeof lt=="function"?lt(F):lt;return typeof tt=="string"&&(tt=tt.includes("?")||tt.includes("#")?tt=j(tt):{path:tt},tt.params={}),Ae({query:F.query,hash:F.hash,params:"path"in tt?{}:F.params},tt)}}function V(F,ft){const lt=x=H(F),tt=w.value,Z=F.state,te=F.force,vt=F.replace===!0,Lt=Dt(lt);if(Lt)return V(Ae(j(Lt),{state:Z,force:te,replace:vt}),ft||lt);const L=lt;L.redirectedFrom=ft;let $;return!te&&JP(h,tt,lt)&&($=Bs(16,{to:L,from:tt}),ne(tt,tt,!0,!1)),($?Promise.resolve($):G(L,tt)).catch(Q=>Si(Q)?Si(Q,2)?Q:de(Q):yt(Q,L,tt)).then(Q=>{if(Q){if(Si(Q,2))return V(Ae(j(Q.to),{state:Z,force:te,replace:vt}),ft||L)}else Q=et(L,tt,!0,vt,Z);return Y(L,tt,Q),Q})}function U(F,ft){const lt=K(F,ft);return lt?Promise.reject(lt):Promise.resolve()}function G(F,ft){let lt;const[tt,Z,te]=ZN(F,ft);lt=Wf(tt.reverse(),"beforeRouteLeave",F,ft);for(const Lt of tt)Lt.leaveGuards.forEach(L=>{lt.push(Ni(L,F,ft))});const vt=U.bind(null,F,ft);return lt.push(vt),gs(lt).then(()=>{lt=[];for(const Lt of m.list())lt.push(Ni(Lt,F,ft));return lt.push(vt),gs(lt)}).then(()=>{lt=Wf(Z,"beforeRouteUpdate",F,ft);for(const Lt of Z)Lt.updateGuards.forEach(L=>{lt.push(Ni(L,F,ft))});return lt.push(vt),gs(lt)}).then(()=>{lt=[];for(const Lt of F.matched)if(Lt.beforeEnter&&!ft.matched.includes(Lt))if(ko(Lt.beforeEnter))for(const L of Lt.beforeEnter)lt.push(Ni(L,F,ft));else lt.push(Ni(Lt.beforeEnter,F,ft));return lt.push(vt),gs(lt)}).then(()=>(F.matched.forEach(Lt=>Lt.enterCallbacks={}),lt=Wf(te,"beforeRouteEnter",F,ft),lt.push(vt),gs(lt))).then(()=>{lt=[];for(const Lt of b.list())lt.push(Ni(Lt,F,ft));return lt.push(vt),gs(lt)}).catch(Lt=>Si(Lt,8)?Lt:Promise.reject(Lt))}function Y(F,ft,lt){for(const tt of _.list())tt(F,ft,lt)}function et(F,ft,lt,tt,Z){const te=K(F,ft);if(te)return te;const vt=ft===Di,Lt=_s?history.state:{};lt&&(tt||vt?g.replace(F.fullPath,Ae({scroll:vt&&Lt&&Lt.scroll},Z)):g.push(F.fullPath,Z)),w.value=F,ne(F,ft,lt,vt),de()}let O;function _t(){O||(O=g.listen((F,ft,lt)=>{const tt=H(F),Z=Dt(tt);if(Z){V(Ae(Z,{replace:!0}),tt).catch(Xa);return}x=tt;const te=w.value;_s&&sN(LA(te.fullPath,lt.delta),Fd()),G(tt,te).catch(vt=>Si(vt,12)?vt:Si(vt,2)?(V(vt.to,tt).then(Lt=>{Si(Lt,20)&&!lt.delta&&lt.type===cc.pop&&g.go(-1,!1)}).catch(Xa),Promise.reject()):(lt.delta&&g.go(-lt.delta,!1),yt(vt,tt,te))).then(vt=>{vt=vt||et(tt,te,!1),vt&&(lt.delta?g.go(-lt.delta,!1):lt.type===cc.pop&&Si(vt,20)&&g.go(-1,!1)),Y(tt,te,vt)}).catch(Xa)}))}let pt=Ra(),Bt=Ra(),Pt;function yt(F,ft,lt){de(F);const tt=Bt.list();return tt.length?tt.forEach(Z=>Z(F,ft,lt)):console.error(F),Promise.reject(F)}function Kt(){return Pt&&w.value!==Di?Promise.resolve():new Promise((F,ft)=>{pt.add([F,ft])})}function de(F){return Pt||(Pt=!F,_t(),pt.list().forEach(([ft,lt])=>F?lt(F):ft()),pt.reset()),F}function ne(F,ft,lt,tt){const{scrollBehavior:Z}=r;if(!_s||!Z)return Promise.resolve();const te=!lt&&aN(LA(F.fullPath,0))||(tt||!lt)&&history.state&&history.state.scroll||null;return No().then(()=>Z(F,ft,te)).then(vt=>vt&&rN(vt)).catch(vt=>yt(vt,F,ft))}const oe=F=>g.go(F);let zt;const ae=new Set;return{currentRoute:w,listening:!0,addRoute:M,removeRoute:W,hasRoute:it,getRoutes:ct,resolve:H,options:r,push:nt,replace:ut,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:m.add,beforeResolve:b.add,afterEach:_.add,onError:Bt.add,isReady:Kt,install(F){const ft=this;F.component("RouterLink",qN),F.component("RouterView",YN),F.config.globalProperties.$router=ft,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>J(w)}),_s&&!zt&&w.value===Di&&(zt=!0,nt(g.location).catch(Z=>{}));const lt={};for(const Z in Di)lt[Z]=se(()=>w.value[Z]);F.provide(fp,ft),F.provide(dy,Mn(lt)),F.provide(Tg,w);const tt=F.unmount;ae.add(F),F.unmount=function(){ae.delete(F),ae.size<1&&(x=Di,O&&O(),O=null,w.value=Di,zt=!1,Pt=!1),tt()}}}}function gs(r){return r.reduce((c,d)=>c.then(()=>d()),Promise.resolve())}function ZN(r,c){const d=[],h=[],g=[],m=Math.max(c.matched.length,r.matched.length);for(let b=0;b<m;b++){const _=c.matched[b];_&&(r.matched.find(x=>Ns(x,_))?h.push(_):d.push(_));const w=r.matched[b];w&&(c.matched.find(x=>Ns(x,w))||g.push(w))}return[d,h,g]}var gp={exports:{}},uy=function(c,d){return function(){for(var g=new Array(arguments.length),m=0;m<g.length;m++)g[m]=arguments[m];return c.apply(d,g)}},JN=uy,pp=Object.prototype.toString,mp=function(r){return function(c){var d=pp.call(c);return r[d]||(r[d]=d.slice(8,-1).toLowerCase())}}(Object.create(null));function Lr(r){return r=r.toLowerCase(),function(d){return mp(d)===r}}function bp(r){return Array.isArray(r)}function kd(r){return typeof r=="undefined"}function XN(r){return r!==null&&!kd(r)&&r.constructor!==null&&!kd(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var hy=Lr("ArrayBuffer");function tB(r){var c;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?c=ArrayBuffer.isView(r):c=r&&r.buffer&&hy(r.buffer),c}function eB(r){return typeof r=="string"}function nB(r){return typeof r=="number"}function fy(r){return r!==null&&typeof r=="object"}function rd(r){if(mp(r)!=="object")return!1;var c=Object.getPrototypeOf(r);return c===null||c===Object.prototype}var oB=Lr("Date"),iB=Lr("File"),rB=Lr("Blob"),sB=Lr("FileList");function kp(r){return pp.call(r)==="[object Function]"}function aB(r){return fy(r)&&kp(r.pipe)}function cB(r){var c="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||pp.call(r)===c||kp(r.toString)&&r.toString()===c)}var lB=Lr("URLSearchParams");function dB(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function uB(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function wp(r,c){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),bp(r))for(var d=0,h=r.length;d<h;d++)c.call(null,r[d],d,r);else for(var g in r)Object.prototype.hasOwnProperty.call(r,g)&&c.call(null,r[g],g,r)}function Ig(){var r={};function c(g,m){rd(r[m])&&rd(g)?r[m]=Ig(r[m],g):rd(g)?r[m]=Ig({},g):bp(g)?r[m]=g.slice():r[m]=g}for(var d=0,h=arguments.length;d<h;d++)wp(arguments[d],c);return r}function hB(r,c,d){return wp(c,function(g,m){d&&typeof g=="function"?r[m]=JN(g,d):r[m]=g}),r}function fB(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function gB(r,c,d,h){r.prototype=Object.create(c.prototype,h),r.prototype.constructor=r,d&&Object.assign(r.prototype,d)}function pB(r,c,d){var h,g,m,b={};c=c||{};do{for(h=Object.getOwnPropertyNames(r),g=h.length;g-- >0;)m=h[g],b[m]||(c[m]=r[m],b[m]=!0);r=Object.getPrototypeOf(r)}while(r&&(!d||d(r,c))&&r!==Object.prototype);return c}function mB(r,c,d){r=String(r),(d===void 0||d>r.length)&&(d=r.length),d-=c.length;var h=r.indexOf(c,d);return h!==-1&&h===d}function bB(r){if(!r)return null;var c=r.length;if(kd(c))return null;for(var d=new Array(c);c-- >0;)d[c]=r[c];return d}var kB=function(r){return function(c){return r&&c instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),ln={isArray:bp,isArrayBuffer:hy,isBuffer:XN,isFormData:cB,isArrayBufferView:tB,isString:eB,isNumber:nB,isObject:fy,isPlainObject:rd,isUndefined:kd,isDate:oB,isFile:iB,isBlob:rB,isFunction:kp,isStream:aB,isURLSearchParams:lB,isStandardBrowserEnv:uB,forEach:wp,merge:Ig,extend:hB,trim:dB,stripBOM:fB,inherits:gB,toFlatObject:pB,kindOf:mp,kindOfTest:Lr,endsWith:mB,toArray:bB,isTypedArray:kB,isFileList:sB},ps=ln;function KA(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var gy=function(c,d,h){if(!d)return c;var g;if(h)g=h(d);else if(ps.isURLSearchParams(d))g=d.toString();else{var m=[];ps.forEach(d,function(w,x){w===null||typeof w=="undefined"||(ps.isArray(w)?x=x+"[]":w=[w],ps.forEach(w,function(S){ps.isDate(S)?S=S.toISOString():ps.isObject(S)&&(S=JSON.stringify(S)),m.push(KA(x)+"="+KA(S))}))}),g=m.join("&")}if(g){var b=c.indexOf("#");b!==-1&&(c=c.slice(0,b)),c+=(c.indexOf("?")===-1?"?":"&")+g}return c},wB=ln;function Vd(){this.handlers=[]}Vd.prototype.use=function(c,d,h){return this.handlers.push({fulfilled:c,rejected:d,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1};Vd.prototype.eject=function(c){this.handlers[c]&&(this.handlers[c]=null)};Vd.prototype.forEach=function(c){wB.forEach(this.handlers,function(h){h!==null&&c(h)})};var _B=Vd,vB=ln,AB=function(c,d){vB.forEach(c,function(g,m){m!==d&&m.toUpperCase()===d.toUpperCase()&&(c[d]=g,delete c[m])})},py=ln;function Ls(r,c,d,h,g){Error.call(this),this.message=r,this.name="AxiosError",c&&(this.code=c),d&&(this.config=d),h&&(this.request=h),g&&(this.response=g)}py.inherits(Ls,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var my=Ls.prototype,by={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){by[r]={value:r}});Object.defineProperties(Ls,by);Object.defineProperty(my,"isAxiosError",{value:!0});Ls.from=function(r,c,d,h,g,m){var b=Object.create(my);return py.toFlatObject(r,b,function(w){return w!==Error.prototype}),Ls.call(b,r.message,c,d,h,g),b.name=r.name,m&&Object.assign(b,m),b};var js=Ls,ky={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},uo=ln;function CB(r,c){c=c||new FormData;var d=[];function h(m){return m===null?"":uo.isDate(m)?m.toISOString():uo.isArrayBuffer(m)||uo.isTypedArray(m)?typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function g(m,b){if(uo.isPlainObject(m)||uo.isArray(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+b);d.push(m),uo.forEach(m,function(w,x){if(!uo.isUndefined(w)){var E=b?b+"."+x:x,S;if(w&&!b&&typeof w=="object"){if(uo.endsWith(x,"{}"))w=JSON.stringify(w);else if(uo.endsWith(x,"[]")&&(S=uo.toArray(w))){S.forEach(function(v){!uo.isUndefined(v)&&c.append(E,h(v))});return}}g(w,E)}}),d.pop()}else c.append(b,h(m))}return g(r),c}var wy=CB,Gf=js,yB=function(c,d,h){var g=h.config.validateStatus;!h.status||!g||g(h.status)?c(h):d(new Gf("Request failed with status code "+h.status,[Gf.ERR_BAD_REQUEST,Gf.ERR_BAD_RESPONSE][Math.floor(h.status/100)-4],h.config,h.request,h))},Zl=ln,xB=Zl.isStandardBrowserEnv()?function(){return{write:function(d,h,g,m,b,_){var w=[];w.push(d+"="+encodeURIComponent(h)),Zl.isNumber(g)&&w.push("expires="+new Date(g).toGMTString()),Zl.isString(m)&&w.push("path="+m),Zl.isString(b)&&w.push("domain="+b),_===!0&&w.push("secure"),document.cookie=w.join("; ")},read:function(d){var h=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return h?decodeURIComponent(h[3]):null},remove:function(d){this.write(d,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),EB=function(c){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(c)},DB=function(c,d){return d?c.replace(/\/+$/,"")+"/"+d.replace(/^\/+/,""):c},SB=EB,TB=DB,_y=function(c,d){return c&&!SB(d)?TB(c,d):d},Kf=ln,IB=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],MB=function(c){var d={},h,g,m;return c&&Kf.forEach(c.split(`
`),function(_){if(m=_.indexOf(":"),h=Kf.trim(_.substr(0,m)).toLowerCase(),g=Kf.trim(_.substr(m+1)),h){if(d[h]&&IB.indexOf(h)>=0)return;h==="set-cookie"?d[h]=(d[h]?d[h]:[]).concat([g]):d[h]=d[h]?d[h]+", "+g:g}}),d},YA=ln,PB=YA.isStandardBrowserEnv()?function(){var c=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a"),h;function g(m){var b=m;return c&&(d.setAttribute("href",b),b=d.href),d.setAttribute("href",b),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return h=g(window.location.href),function(b){var _=YA.isString(b)?g(b):b;return _.protocol===h.protocol&&_.host===h.host}}():function(){return function(){return!0}}(),Mg=js,NB=ln;function vy(r){Mg.call(this,r==null?"canceled":r,Mg.ERR_CANCELED),this.name="CanceledError"}NB.inherits(vy,Mg,{__CANCEL__:!0});var $d=vy,BB=function(c){var d=/^([-+\w]{1,25})(:?\/\/|:)/.exec(c);return d&&d[1]||""},za=ln,LB=yB,OB=xB,RB=gy,zB=_y,jB=MB,FB=PB,VB=ky,ei=js,$B=$d,HB=BB,QA=function(c){return new Promise(function(h,g){var m=c.data,b=c.headers,_=c.responseType,w;function x(){c.cancelToken&&c.cancelToken.unsubscribe(w),c.signal&&c.signal.removeEventListener("abort",w)}za.isFormData(m)&&za.isStandardBrowserEnv()&&delete b["Content-Type"];var E=new XMLHttpRequest;if(c.auth){var S=c.auth.username||"",v=c.auth.password?unescape(encodeURIComponent(c.auth.password)):"";b.Authorization="Basic "+btoa(S+":"+v)}var M=zB(c.baseURL,c.url);E.open(c.method.toUpperCase(),RB(M,c.params,c.paramsSerializer),!0),E.timeout=c.timeout;function W(){if(!!E){var H="getAllResponseHeaders"in E?jB(E.getAllResponseHeaders()):null,j=!_||_==="text"||_==="json"?E.responseText:E.response,K={data:j,status:E.status,statusText:E.statusText,headers:H,config:c,request:E};LB(function(ut){h(ut),x()},function(ut){g(ut),x()},K),E=null}}if("onloadend"in E?E.onloadend=W:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(W)},E.onabort=function(){!E||(g(new ei("Request aborted",ei.ECONNABORTED,c,E)),E=null)},E.onerror=function(){g(new ei("Network Error",ei.ERR_NETWORK,c,E,E)),E=null},E.ontimeout=function(){var j=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded",K=c.transitional||VB;c.timeoutErrorMessage&&(j=c.timeoutErrorMessage),g(new ei(j,K.clarifyTimeoutError?ei.ETIMEDOUT:ei.ECONNABORTED,c,E)),E=null},za.isStandardBrowserEnv()){var ct=(c.withCredentials||FB(M))&&c.xsrfCookieName?OB.read(c.xsrfCookieName):void 0;ct&&(b[c.xsrfHeaderName]=ct)}"setRequestHeader"in E&&za.forEach(b,function(j,K){typeof m=="undefined"&&K.toLowerCase()==="content-type"?delete b[K]:E.setRequestHeader(K,j)}),za.isUndefined(c.withCredentials)||(E.withCredentials=!!c.withCredentials),_&&_!=="json"&&(E.responseType=c.responseType),typeof c.onDownloadProgress=="function"&&E.addEventListener("progress",c.onDownloadProgress),typeof c.onUploadProgress=="function"&&E.upload&&E.upload.addEventListener("progress",c.onUploadProgress),(c.cancelToken||c.signal)&&(w=function(H){!E||(g(!H||H&&H.type?new $B:H),E.abort(),E=null)},c.cancelToken&&c.cancelToken.subscribe(w),c.signal&&(c.signal.aborted?w():c.signal.addEventListener("abort",w))),m||(m=null);var it=HB(M);if(it&&["http","https","file"].indexOf(it)===-1){g(new ei("Unsupported protocol "+it+":",ei.ERR_BAD_REQUEST,c));return}E.send(m)})},UB=null,Xe=ln,ZA=AB,JA=js,qB=ky,WB=wy,GB={"Content-Type":"application/x-www-form-urlencoded"};function XA(r,c){!Xe.isUndefined(r)&&Xe.isUndefined(r["Content-Type"])&&(r["Content-Type"]=c)}function KB(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=QA),r}function YB(r,c,d){if(Xe.isString(r))try{return(c||JSON.parse)(r),Xe.trim(r)}catch(h){if(h.name!=="SyntaxError")throw h}return(d||JSON.stringify)(r)}var Hd={transitional:qB,adapter:KB(),transformRequest:[function(c,d){if(ZA(d,"Accept"),ZA(d,"Content-Type"),Xe.isFormData(c)||Xe.isArrayBuffer(c)||Xe.isBuffer(c)||Xe.isStream(c)||Xe.isFile(c)||Xe.isBlob(c))return c;if(Xe.isArrayBufferView(c))return c.buffer;if(Xe.isURLSearchParams(c))return XA(d,"application/x-www-form-urlencoded;charset=utf-8"),c.toString();var h=Xe.isObject(c),g=d&&d["Content-Type"],m;if((m=Xe.isFileList(c))||h&&g==="multipart/form-data"){var b=this.env&&this.env.FormData;return WB(m?{"files[]":c}:c,b&&new b)}else if(h||g==="application/json")return XA(d,"application/json"),YB(c);return c}],transformResponse:[function(c){var d=this.transitional||Hd.transitional,h=d&&d.silentJSONParsing,g=d&&d.forcedJSONParsing,m=!h&&this.responseType==="json";if(m||g&&Xe.isString(c)&&c.length)try{return JSON.parse(c)}catch(b){if(m)throw b.name==="SyntaxError"?JA.from(b,JA.ERR_BAD_RESPONSE,this,null,this.response):b}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:UB},validateStatus:function(c){return c>=200&&c<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Xe.forEach(["delete","get","head"],function(c){Hd.headers[c]={}});Xe.forEach(["post","put","patch"],function(c){Hd.headers[c]=Xe.merge(GB)});var _p=Hd,QB=ln,ZB=_p,JB=function(c,d,h){var g=this||ZB;return QB.forEach(h,function(b){c=b.call(g,c,d)}),c},Ay=function(c){return!!(c&&c.__CANCEL__)},tC=ln,Yf=JB,XB=Ay,tL=_p,eL=$d;function Qf(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new eL}var nL=function(c){Qf(c),c.headers=c.headers||{},c.data=Yf.call(c,c.data,c.headers,c.transformRequest),c.headers=tC.merge(c.headers.common||{},c.headers[c.method]||{},c.headers),tC.forEach(["delete","get","head","post","put","patch","common"],function(g){delete c.headers[g]});var d=c.adapter||tL.adapter;return d(c).then(function(g){return Qf(c),g.data=Yf.call(c,g.data,g.headers,c.transformResponse),g},function(g){return XB(g)||(Qf(c),g&&g.response&&(g.response.data=Yf.call(c,g.response.data,g.response.headers,c.transformResponse))),Promise.reject(g)})},On=ln,Cy=function(c,d){d=d||{};var h={};function g(E,S){return On.isPlainObject(E)&&On.isPlainObject(S)?On.merge(E,S):On.isPlainObject(S)?On.merge({},S):On.isArray(S)?S.slice():S}function m(E){if(On.isUndefined(d[E])){if(!On.isUndefined(c[E]))return g(void 0,c[E])}else return g(c[E],d[E])}function b(E){if(!On.isUndefined(d[E]))return g(void 0,d[E])}function _(E){if(On.isUndefined(d[E])){if(!On.isUndefined(c[E]))return g(void 0,c[E])}else return g(void 0,d[E])}function w(E){if(E in d)return g(c[E],d[E]);if(E in c)return g(void 0,c[E])}var x={url:b,method:b,data:b,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:w};return On.forEach(Object.keys(c).concat(Object.keys(d)),function(S){var v=x[S]||m,M=v(S);On.isUndefined(M)&&v!==w||(h[S]=M)}),h},yy={version:"0.27.2"},oL=yy.version,Bi=js,vp={};["object","boolean","number","function","string","symbol"].forEach(function(r,c){vp[r]=function(h){return typeof h===r||"a"+(c<1?"n ":" ")+r}});var eC={};vp.transitional=function(c,d,h){function g(m,b){return"[Axios v"+oL+"] Transitional option '"+m+"'"+b+(h?". "+h:"")}return function(m,b,_){if(c===!1)throw new Bi(g(b," has been removed"+(d?" in "+d:"")),Bi.ERR_DEPRECATED);return d&&!eC[b]&&(eC[b]=!0,console.warn(g(b," has been deprecated since v"+d+" and will be removed in the near future"))),c?c(m,b,_):!0}};function iL(r,c,d){if(typeof r!="object")throw new Bi("options must be an object",Bi.ERR_BAD_OPTION_VALUE);for(var h=Object.keys(r),g=h.length;g-- >0;){var m=h[g],b=c[m];if(b){var _=r[m],w=_===void 0||b(_,m,r);if(w!==!0)throw new Bi("option "+m+" must be "+w,Bi.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new Bi("Unknown option "+m,Bi.ERR_BAD_OPTION)}}var rL={assertOptions:iL,validators:vp},xy=ln,sL=gy,nC=_B,oC=nL,Ud=Cy,aL=_y,Ey=rL,ms=Ey.validators;function Os(r){this.defaults=r,this.interceptors={request:new nC,response:new nC}}Os.prototype.request=function(c,d){typeof c=="string"?(d=d||{},d.url=c):d=c||{},d=Ud(this.defaults,d),d.method?d.method=d.method.toLowerCase():this.defaults.method?d.method=this.defaults.method.toLowerCase():d.method="get";var h=d.transitional;h!==void 0&&Ey.assertOptions(h,{silentJSONParsing:ms.transitional(ms.boolean),forcedJSONParsing:ms.transitional(ms.boolean),clarifyTimeoutError:ms.transitional(ms.boolean)},!1);var g=[],m=!0;this.interceptors.request.forEach(function(M){typeof M.runWhen=="function"&&M.runWhen(d)===!1||(m=m&&M.synchronous,g.unshift(M.fulfilled,M.rejected))});var b=[];this.interceptors.response.forEach(function(M){b.push(M.fulfilled,M.rejected)});var _;if(!m){var w=[oC,void 0];for(Array.prototype.unshift.apply(w,g),w=w.concat(b),_=Promise.resolve(d);w.length;)_=_.then(w.shift(),w.shift());return _}for(var x=d;g.length;){var E=g.shift(),S=g.shift();try{x=E(x)}catch(v){S(v);break}}try{_=oC(x)}catch(v){return Promise.reject(v)}for(;b.length;)_=_.then(b.shift(),b.shift());return _};Os.prototype.getUri=function(c){c=Ud(this.defaults,c);var d=aL(c.baseURL,c.url);return sL(d,c.params,c.paramsSerializer)};xy.forEach(["delete","get","head","options"],function(c){Os.prototype[c]=function(d,h){return this.request(Ud(h||{},{method:c,url:d,data:(h||{}).data}))}});xy.forEach(["post","put","patch"],function(c){function d(h){return function(m,b,_){return this.request(Ud(_||{},{method:c,headers:h?{"Content-Type":"multipart/form-data"}:{},url:m,data:b}))}}Os.prototype[c]=d(),Os.prototype[c+"Form"]=d(!0)});var cL=Os,lL=$d;function Rs(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(g){c=g});var d=this;this.promise.then(function(h){if(!!d._listeners){var g,m=d._listeners.length;for(g=0;g<m;g++)d._listeners[g](h);d._listeners=null}}),this.promise.then=function(h){var g,m=new Promise(function(b){d.subscribe(b),g=b}).then(h);return m.cancel=function(){d.unsubscribe(g)},m},r(function(g){d.reason||(d.reason=new lL(g),c(d.reason))})}Rs.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Rs.prototype.subscribe=function(c){if(this.reason){c(this.reason);return}this._listeners?this._listeners.push(c):this._listeners=[c]};Rs.prototype.unsubscribe=function(c){if(!!this._listeners){var d=this._listeners.indexOf(c);d!==-1&&this._listeners.splice(d,1)}};Rs.source=function(){var c,d=new Rs(function(g){c=g});return{token:d,cancel:c}};var dL=Rs,uL=function(c){return function(h){return c.apply(null,h)}},hL=ln,fL=function(c){return hL.isObject(c)&&c.isAxiosError===!0},iC=ln,gL=uy,sd=cL,pL=Cy,mL=_p;function Dy(r){var c=new sd(r),d=gL(sd.prototype.request,c);return iC.extend(d,sd.prototype,c),iC.extend(d,c),d.create=function(g){return Dy(pL(r,g))},d}var In=Dy(mL);In.Axios=sd;In.CanceledError=$d;In.CancelToken=dL;In.isCancel=Ay;In.VERSION=yy.version;In.toFormData=wy;In.AxiosError=js;In.Cancel=In.CanceledError;In.all=function(c){return Promise.all(c)};In.spread=uL;In.isAxiosError=fL;gp.exports=In;gp.exports.default=In;var je=gp.exports;const Jl="https://elapor.helpulstudio.com/api",Fe=Ki({id:"auth",state:()=>({token:localStorage.getItem("token"),user:"",role:""}),getters:{getToken:r=>r.token,getUser:r=>r.user,getRole:r=>r.role},actions:{login(r){je.post(`${Jl}/login`,{nrp:r.nrp,password:r.password}).then(c=>{console.log(c.data.data.access_token),localStorage.setItem("token",c.data.data.access_token),this.token=localStorage.getItem("token"),this.role=c.data.data.user_role,this.role=="subordinate"?en.push("/"):en.push("/principal")}).catch(c=>{alert(c.response.data.meta.message)})},logout(){je({method:"post",url:`${Jl}/logout`,headers:{Authorization:`Bearer ${this.token}`}}).then(r=>{localStorage.removeItem("token"),console.log("Berhasil keluar"),en.push("/login")}).catch(r=>{console.log(r.response.data.message)})},fetchUser(){je.get(`${Jl}/profile`,{headers:{Authorization:`Bearer ${this.token}`}}).then(r=>{this.user=r.data.data,this.role=r.data.data.data_user.user_role}).catch(r=>{console.log(r)})},updateProfile(r){let c=new FormData;c.append("email",r.email),c.append("user_photo",r.user_photo),je({method:"post",url:`${Jl}/update-profile`,data:c,headers:{Authorization:`Bearer ${this.token}`,"Content-Type":"multipart/form-data"}}).then(d=>{this.fetchUser(),en.push("/profile"),console.log(d)}).catch(d=>{console.log(d)})}}}),bL={class:"bg-base-100 fixed px-5 py-3 bottom-0 left-0 right-0"},kL={key:0,class:"flex justify-between"},wL=D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white",height:"24",width:"24"},[D("path",{d:"M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"})],-1),_L=Ee(" Home "),vL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),AL=Ee(" Pekerjaan "),CL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),yL=Ee(" Histori "),xL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),EL=Ee(" Isidentil "),DL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"})],-1),SL=Ee(" Keluar "),TL=[DL,SL],IL={key:1,class:"flex justify-between"},ML=D("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white",height:"24",width:"24"},[D("path",{d:"M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"})],-1),PL=Ee(" Home "),NL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),BL=Ee(" Pekerjaan "),LL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),OL=Ee(" Isidentil "),RL=D("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[D("path",{d:"M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"})],-1),zL=Ee(" Keluar "),jL=[RL,zL],dn={__name:"Bottombar",setup(r){const c=Fe(),d=se(()=>c.getRole),h=()=>{c.logout()};return cn(()=>{c.fetchUser()}),(g,m)=>{const b=Wi("router-link");return At(),St("div",bL,[J(d)=="subordinate"?(At(),St("div",kL,[xt(b,{to:"/",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:_n(()=>[wL,_L]),_:1}),xt(b,{to:"/working",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:_n(()=>[vL,AL]),_:1}),xt(b,{to:"/reporting-history",class:"btn btn-ghost btn-circle capitalize"},{default:_n(()=>[CL,yL]),_:1}),xt(b,{to:"/reporting-history-isidentil",class:"btn btn-ghost btn-circle capitalize"},{default:_n(()=>[xL,EL]),_:1}),D("button",{onClick:h,class:"btn btn-ghost btn-circle capitalize"},TL)])):(At(),St("div",IL,[xt(b,{to:"/principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:_n(()=>[ML,PL]),_:1}),xt(b,{to:"/working-principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:_n(()=>[NL,BL]),_:1}),xt(b,{to:"/working-isidentil-principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:_n(()=>[LL,OL]),_:1}),D("button",{onClick:h,class:"btn btn-ghost btn-circle capitalize"},jL)]))])}}};var Sy="/assets/logo-polri.9819c9fb.png",FL=(r,c)=>{const d=r.__vccOpts||r;for(const[h,g]of c)d[h]=g;return d};const VL={},$L={class:"bg-base-100 sticky px-5 top-0 left-0 right-0 z-20"},HL={class:"flex justify-between"},UL=D("img",{src:Sy,class:"h-10 w-10 my-auto"},null,-1),qL=D("p",{class:"my-auto"},"E-lapor",-1),WL=D("img",{src:"https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360",class:"w-7 h-7"},null,-1);function GL(r,c){const d=Wi("router-link");return At(),St("div",$L,[D("div",HL,[UL,qL,xt(d,{to:"/profile",class:"btn btn-ghost btn-circle capitalize"},{default:_n(()=>[WL]),_:1})])])}var un=FL(VL,[["render",GL]]);const Ap=Ki({id:"news",state:()=>({news:[],newsDetail:""}),getters:{getNews:r=>r.news,getNewsDetails:r=>r.newsDetail},actions:{fetchNews(){const c=Fe().getToken;je.get("https://elapor.helpulstudio.com/getAllNews/",{Authorization:`Bearer ${c}`}).then(d=>{console.log(d.data.data),this.news=d.data.data}).catch(d=>{alert(d.response.data.meta.message)})},fetchDetailNews(r){console.log(r),this.newsDetail=this.news[r],console.log(this.newsDetail),en.push("/news-detail")}}}),KL={class:"bg-white max-w-lg mx-auto"},YL={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},QL=D("div",{class:"flex justify-between"},[D("p",{class:"text-md font-bold text-center border-rose-800 bg-slate-800 w-full border-y-2 py-2 text-white"},"Pengumuman/Berita")],-1),ZL=["src"],JL={class:"card-body"},XL={class:"card-title text-sm"},t4=D("p",{class:"text-sm"},"Klik tombol dibawah untuk membaca.",-1),e4={class:"card-actions justify-end"},n4=["onClick"],o4={__name:"HomePage",setup(r){const c=Ap(),d=se(()=>c.getNews);cn(()=>{c.fetchNews()});const h="https://elapor.helpulstudio.com/storage/",g=m=>{c.fetchDetailNews(m)};return(m,b)=>(At(),St("div",KL,[xt(un),D("main",YL,[QL,(At(!0),St(Zt,null,mn(J(d),(_,w)=>(At(),St("div",{class:"card card-side bg-base-100 shadow-xl",key:_.news_id},[D("figure",null,[D("img",{src:`${h}${_.news_image}`,class:"w-32 h-full",alt:"Movie"},null,8,ZL)]),D("div",JL,[D("h2",XL,Mt(_.news_title.substring(0,40)+".."),1),t4,D("div",e4,[D("button",{onClick:x=>g(w),class:"btn btn-sm capitalize"},"Selengkapnya",8,n4)])])]))),128))]),xt(dn)]))}},ja="https://elapor.helpulstudio.com/api",Cp=Ki({id:"jobtask-principal",state:()=>({jobTaskPrincipal:[],jobTaskPrincipalDetail:null}),getters:{getJobtaskPrincipal:r=>r.jobTaskPrincipal,getJobtaskPrincipalDetail:r=>r.jobTaskPrincipalDetail},actions:{fetchAllJobtaskPrincipal(){const c=Fe().getToken;je.get(`${ja}/getAllJobtask`,{headers:{Authorization:`Bearer ${c}`}}).then(d=>{console.log(d.data.data),this.jobTaskPrincipal=d.data.data}).catch(d=>{console.log(d)})},fetchJobtaskPrincipalDetail(r){console.log(r);const d=Fe().getToken;je.get(`${ja}/jobtask/get-jobtask/${r}`,{headers:{Authorization:`Bearer ${d}`}}).then(h=>{console.log(h.data),this.jobTaskPrincipalDetail=h.data,en.push("/detail-reporting-principal")}).catch(h=>{console.log(h)})},deleteJobtaskPrincipal(r){const d=Fe().getToken;je.delete(`${ja}/jobtask/delete-jobtask/${r}`,{headers:{Authorization:`Bearer ${d}`}}).then(h=>{console.log(h),en.push("/working-principal")}).catch(h=>{alert(h)})},addJobtask(r){const d=Fe().getToken;je.post(`${ja}/jobtask/add-jobtask`,{sector_id:r.sector_id,job_task_name:r.job_task_name,job_task_place:r.job_task_place,job_task_date:r.job_task_date,subordinate:r.subordinate},{headers:{Authorization:`Bearer ${d}`}}).then(h=>{console.log(h),en.push("/working-principal")}).catch(h=>{console.log(h)})},addInstruction(...r){const d=Fe().getToken,h=r[0];je.put(`${ja}/jobtask/update-jobtask/${h}`,{sector_id:r[2].sector_id,job_task_name:r[2].job_task_name,job_task_place:r[2].job_task_place,job_task_date:r[2].job_task_date,job_task_note:r[1].job_task_note,job_task_status:"Selesai"},{headers:{Authorization:`Bearer ${d}`}}).then(g=>{console.log(g),en.push("/working-principal")}).catch(g=>{console.log(g)})}}}),i4={class:"bg-white max-w-lg mx-auto"},r4={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},s4={class:"w-full px-4 md:px-6 text-xl text-gray-800 leading-normal",style:{"font-family":"Georgia,serif"}},a4={class:"font-sans"},c4=D("p",{class:"btn btn-xs capitalize text-base md:text-sm font-bold no-underline hover:underline"},"Ke Halaman Utama",-1),l4={class:"justify-between my-2 text-md"},d4=D("h4",{class:"font-sans break-normal text-gray-900"},[D("span",{class:"font-bold"},"Judul :")],-1),u4={class:"justify-between my-2 text-md"},h4=D("h4",{class:"font-sans break-normal text-gray-900 text-md"},[D("span",{class:"font-bold"},"Tempat :")],-1),f4={class:"justify-between my-2 text-md"},g4=D("h4",{class:"font-sans break-normal text-gray-900 text-md"},[D("span",{class:"font-bold"},"Tanggal :")],-1),p4={class:"justify-between my-2 text-md"},m4=D("h4",{class:"font-sans break-normal text-gray-900 text-md"},[D("span",{class:"font-bold"},"Status :")],-1),b4={key:0},k4={class:"text-md md:text-base mt-10 font-bold text-slate-800 mb-3"},w4={key:0,class:"mb-4 space-y-6"},_4=["src"],v4={class:"text-md"},A4=D("h4",{class:"font-bold"},"Sumber Informasi",-1),C4=["innerHTML"],y4=D("h4",{class:"font-bold"},"Aktifitas",-1),x4=["innerHTML"],E4=D("h4",{class:"font-bold"},"Analisis",-1),D4=["innerHTML"],S4=D("h4",{class:"font-bold"},"Prediksi",-1),T4=["innerHTML"],I4=D("h4",{class:"font-bold"},"Langkah langkah yang diambil",-1),M4=["innerHTML"],P4=D("h4",{class:"font-bold"},"Anggota Terlibat",-1),N4=["innerHTML"],B4=D("h4",{class:"font-bold"},"Rekomendasi",-1),L4=["innerHTML"],O4=D("h4",{class:"font-bold"},"Arahan Kepala",-1),R4=["innerHTML"],z4={key:0,class:"mx-5"},j4=["src"],F4={class:"flex-1 px-2"},V4={class:"text-base font-bold md:text-xl leading-none mb-2"},$4={class:"text-gray-600 text-xs md:text-base"},H4={class:"flex w-full items-center mx-auto font-sans px-4 py-5"},U4={class:"flex"},q4={class:""},W4=D("p",{class:"text-xl text-center font-bold"},"Form Pengarahan",-1),G4={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},K4={class:"grid"},Y4=D("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"}," Pengarahan ",-1),Q4={class:"mt-1 flex rounded-md shadow-sm"},Z4=D("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[D("button",{type:"submit",class:"btn-sm capitalize inline-flex justify-center border border-transparent shadow-sm bg-yellow-500 text-slate-800 border-none text-sm font-medium rounded-md btn focus:outline-none"},"Beri Pengarahan")],-1),J4={__name:"DetailReportPage",setup(r){const c=Cp(),d=se(()=>c.getJobtaskPrincipalDetail),h="https://elapor.helpulstudio.com/storage/",g=Mn({sector_id:"",job_task_name:"",job_task_place:"",job_task_date:"",job_task_note:""});return(m,b)=>(At(),St("div",i4,[xt(un),D("main",r4,[D("div",s4,[D("div",a4,[c4,D("div",l4,[d4,D("p",null,Mt(J(d).job_task_name),1)]),D("div",u4,[h4,D("p",null,Mt(J(d).job_task_place),1)]),D("div",f4,[g4,D("p",null,Mt(J(d).job_task_date),1)]),D("div",p4,[m4,D("p",null,[Ee(Mt(J(d).job_task_status)+" ",1),J(d).job_task_status=="Ditugaskan"||J(d).job_task_status=="Menunggu Konfirmasi"?(At(),St("span",b4,": "+Mt(J(d).jobtask_subordinate[0].subordinate.name),1)):po("",!0)])]),D("p",k4,"Kategori : "+Mt(J(d).sector.sector_name),1),J(d).jobtask_result.length>0?(At(),St("div",w4,[D("div",null,[D("img",{src:`${h}${J(d).jobtask_result[0].jobtask_documentation}`,class:"max-w-full my-10 h-auto rounded-lg",alt:""},null,8,_4)]),D("div",v4,[A4,D("p",{innerHTML:J(d).jobtask_result[0].report_source_information},null,8,C4)]),D("div",null,[y4,D("div",{class:"list-decimal",innerHTML:J(d).jobtask_result[0].report_activities},null,8,x4)]),D("div",null,[E4,D("div",{class:"list-decimal",innerHTML:J(d).jobtask_result[0].report_analysis},null,8,D4)]),D("div",null,[S4,D("p",{innerHTML:J(d).jobtask_result[0].report_prediction},null,8,T4)]),D("div",null,[I4,D("p",{innerHTML:J(d).jobtask_result[0].report_steps_taken},null,8,M4)]),D("div",null,[P4,D("p",{innerHTML:J(d).jobtask_result[0].report_teamwise},null,8,N4)]),D("div",null,[B4,D("p",{innerHTML:J(d).jobtask_result[0].report_recommendation},null,8,L4)]),D("div",null,[O4,D("p",{innerHTML:J(d).jobtask_result[0].report_note},null,8,R4)])])):po("",!0)])]),J(d).jobtask_result[0]?(At(),St("div",z4,[D("img",{class:"w-10 h-10 my-5 rounded-full",src:`${h}${J(d).jobtask_result[0].subordinate.user_photo}`,alt:"Avatar of Author"},null,8,j4),D("div",F4,[D("p",V4,Mt(J(d).jobtask_result[0].subordinate.name),1),D("p",$4,"Jabatan : "+Mt(J(d).jobtask_result[0].subordinate.occupation),1)])])):po("",!0),D("div",H4,[D("div",U4,[J(d).jobtask_result.length>0&&J(d).job_task_status!="Selesai"?(At(),St("form",{key:0,onSubmit:b[1]||(b[1]=Gi(_=>J(c).addInstruction(J(d).job_task_id,g,J(d)),["prevent"])),enctype:"multipart/form-data"},[D("div",q4,[W4,D("div",G4,[D("div",K4,[Y4,D("div",Q4,[Ie(D("input",{type:"text",name:"company-website",id:"company-website",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2",placeholder:"pengarahan","onUpdate:modelValue":b[0]||(b[0]=_=>g.job_task_note=_)},null,512),[[Me,g.job_task_note]])])])]),Z4])],32)):J(d).jobtask_result.length==0?(At(),St("button",{key:1,class:"btn btn-sm bg-rose-700 border-none",onClick:b[2]||(b[2]=_=>J(c).deleteJobtaskPrincipal(J(d).job_task_id))},"Hapus Tugas")):po("",!0)])])]),xt(dn)]))}},X4="https://elapor.helpulstudio.com",Ty=Ki({id:"sector",state:()=>({sector:[]}),getters:{getSector:r=>r.sector},actions:{fetchSector(){je.get(`${X4}/getAllSector`,{}).then(r=>{console.log(r.data),this.sector=r.data.data})}}}),tO="https://elapor.helpulstudio.com/api",eO=Ki({id:"subordinate-store",state:()=>({subordinate:[]}),getters:{getSubordinate:r=>r.subordinate},actions:{fetchSubordinate(){const c=Fe().getToken;je.get(`${tO}/getSubordinate`,{headers:{Authorization:`Bearer ${c}`}}).then(d=>{console.log(d.data.data),this.subordinate=d.data.data}).catch(d=>{console.log(d),alert(d)})}}});var Pg={exports:{}};(function(r,c){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){r.exports=h()}(self,()=>(()=>{var d={3062:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const M=v},903:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const M=v},3143:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},4717:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const M=v},9315:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const M=v},8733:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const M=v},3508:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const M=v},2640:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const M=v},5083:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},4036:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const M=v},3773:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const M=v},3689:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const M=v},1905:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},9773:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const M=v},2347:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},7754:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},4652:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const M=v},7442:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},9292:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},1613:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const M=v},6306:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const M=v},3881:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const M=v},6945:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},4906:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover {
		@mixin ck-tooltip_visible;
	}

	/* Get rid of the native focus outline around the tooltip when focused (but not :hover). */
	&:focus:not(:hover) {
		@mixin ck-tooltip_disabled;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=v},5332:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=v},6781:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const M=v},5485:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},3949:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},7686:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},7339:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const M=v},9688:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},8847:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const M=v},6574:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const M=v},4879:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},3662:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const M=v},2577:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},1046:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},8793:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},4650:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const M=v},7676:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},5868:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},6764:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const M=v},9695:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const M=v},5542:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},3332:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=v},4793:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const M=v},3488:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=v},8506:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const M=v},4921:(b,_,w)=>{w.d(_,{Z:()=>M});var x=w(1799),E=w.n(x),S=w(2609),v=w.n(S)()(E());v.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const M=v},2609:b=>{b.exports=function(_){var w=[];return w.toString=function(){return this.map(function(x){var E=_(x);return x[2]?"@media ".concat(x[2]," {").concat(E,"}"):E}).join("")},w.i=function(x,E,S){typeof x=="string"&&(x=[[null,x,""]]);var v={};if(S)for(var M=0;M<this.length;M++){var W=this[M][0];W!=null&&(v[W]=!0)}for(var ct=0;ct<x.length;ct++){var it=[].concat(x[ct]);S&&v[it[0]]||(E&&(it[2]?it[2]="".concat(E," and ").concat(it[2]):it[2]=E),w.push(it))}},w}},1799:b=>{function _(x,E){return function(S){if(Array.isArray(S))return S}(x)||function(S,v){var M=S&&(typeof Symbol!="undefined"&&S[Symbol.iterator]||S["@@iterator"]);if(M!=null){var W,ct,it=[],H=!0,j=!1;try{for(M=M.call(S);!(H=(W=M.next()).done)&&(it.push(W.value),!v||it.length!==v);H=!0);}catch(K){j=!0,ct=K}finally{try{H||M.return==null||M.return()}finally{if(j)throw ct}}return it}}(x,E)||function(S,v){if(!!S){if(typeof S=="string")return w(S,v);var M=Object.prototype.toString.call(S).slice(8,-1);if(M==="Object"&&S.constructor&&(M=S.constructor.name),M==="Map"||M==="Set")return Array.from(S);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return w(S,v)}}(x,E)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(x,E){(E==null||E>x.length)&&(E=x.length);for(var S=0,v=new Array(E);S<E;S++)v[S]=x[S];return v}b.exports=function(x){var E=_(x,4),S=E[1],v=E[3];if(!v)return S;if(typeof btoa=="function"){var M=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),W="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(M),ct="/*# ".concat(W," */"),it=v.sources.map(function(H){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(H," */")});return[S].concat(it).concat([ct]).join(`
`)}return[S].join(`
`)}},6062:(b,_,w)=>{var x,E=function(){return x===void 0&&(x=Boolean(window&&document&&document.all&&!window.atob)),x},S=function(){var V={};return function(U){if(V[U]===void 0){var G=document.querySelector(U);if(window.HTMLIFrameElement&&G instanceof window.HTMLIFrameElement)try{G=G.contentDocument.head}catch{G=null}V[U]=G}return V[U]}}(),v=[];function M(V){for(var U=-1,G=0;G<v.length;G++)if(v[G].identifier===V){U=G;break}return U}function W(V,U){for(var G={},Y=[],et=0;et<V.length;et++){var O=V[et],_t=U.base?O[0]+U.base:O[0],pt=G[_t]||0,Bt="".concat(_t," ").concat(pt);G[_t]=pt+1;var Pt=M(Bt),yt={css:O[1],media:O[2],sourceMap:O[3]};Pt!==-1?(v[Pt].references++,v[Pt].updater(yt)):v.push({identifier:Bt,updater:Dt(yt,U),references:1}),Y.push(Bt)}return Y}function ct(V){var U=document.createElement("style"),G=V.attributes||{};if(G.nonce===void 0){var Y=w.nc;Y&&(G.nonce=Y)}if(Object.keys(G).forEach(function(O){U.setAttribute(O,G[O])}),typeof V.insert=="function")V.insert(U);else{var et=S(V.insert||"head");if(!et)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");et.appendChild(U)}return U}var it,H=(it=[],function(V,U){return it[V]=U,it.filter(Boolean).join(`
`)});function j(V,U,G,Y){var et=G?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if(V.styleSheet)V.styleSheet.cssText=H(U,et);else{var O=document.createTextNode(et),_t=V.childNodes;_t[U]&&V.removeChild(_t[U]),_t.length?V.insertBefore(O,_t[U]):V.appendChild(O)}}function K(V,U,G){var Y=G.css,et=G.media,O=G.sourceMap;if(et?V.setAttribute("media",et):V.removeAttribute("media"),O&&typeof btoa!="undefined"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(O))))," */")),V.styleSheet)V.styleSheet.cssText=Y;else{for(;V.firstChild;)V.removeChild(V.firstChild);V.appendChild(document.createTextNode(Y))}}var nt=null,ut=0;function Dt(V,U){var G,Y,et;if(U.singleton){var O=ut++;G=nt||(nt=ct(U)),Y=j.bind(null,G,O,!1),et=j.bind(null,G,O,!0)}else G=ct(U),Y=K.bind(null,G,U),et=function(){(function(_t){if(_t.parentNode===null)return!1;_t.parentNode.removeChild(_t)})(G)};return Y(V),function(_t){if(_t){if(_t.css===V.css&&_t.media===V.media&&_t.sourceMap===V.sourceMap)return;Y(V=_t)}else et()}}b.exports=function(V,U){(U=U||{}).singleton||typeof U.singleton=="boolean"||(U.singleton=E());var G=W(V=V||[],U);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var et=0;et<G.length;et++){var O=M(G[et]);v[O].references--}for(var _t=W(Y,U),pt=0;pt<G.length;pt++){var Bt=M(G[pt]);v[Bt].references===0&&(v[Bt].updater(),v.splice(Bt,1))}G=_t}}}}},h={};function g(b){var _=h[b];if(_!==void 0)return _.exports;var w=h[b]={id:b,exports:{}};return d[b](w,w.exports,g),w.exports}g.n=b=>{var _=b&&b.__esModule?()=>b.default:()=>b;return g.d(_,{a:_}),_},g.d=(b,_)=>{for(var w in _)g.o(_,w)&&!g.o(b,w)&&Object.defineProperty(b,w,{enumerable:!0,get:_[w]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(b,_)=>Object.prototype.hasOwnProperty.call(b,_),g.nc=void 0;var m={};return(()=>{g.d(m,{default:()=>Of});const b=function(){return function i(){i.called=!0}};class _{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=b(),this.off=b()}}const w=new Array(256).fill("").map((i,t)=>("0"+t.toString(16)).slice(-2));function x(){const i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+w[i>>0&255]+w[i>>8&255]+w[i>>16&255]+w[i>>24&255]+w[t>>0&255]+w[t>>8&255]+w[t>>16&255]+w[t>>24&255]+w[e>>0&255]+w[e>>8&255]+w[e>>16&255]+w[e>>24&255]+w[n>>0&255]+w[n>>8&255]+w[n>>16&255]+w[n>>24&255]}const E={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function S(i,t){const e=E.get(t.priority);for(let n=0;n<i.length;n++)if(E.get(i[n].priority)<e)return void i.splice(n,0,t);i.push(t)}class v extends Error{constructor(t,e,n){super(function(o,s){const a=new WeakSet,l=(p,k)=>{if(typeof k=="object"&&k!==null){if(a.has(k))return`[object ${k.constructor.name}]`;a.add(k)}return k},u=s?` ${JSON.stringify(s,l)}`:"",f=ct(o);return o+u+f}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new v(t.message,e);throw n.stack=t.stack,n}}function M(i,t){console.warn(...it(i,t))}function W(i,t){console.error(...it(i,t))}function ct(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function it(i,t){const e=ct(i);return t?[i,t,e]:[i,e]}const H="35.0.1",j=typeof window=="object"?window:g.g;if(j.CKEDITOR_VERSION)throw new v("ckeditor-duplicated-modules",null);j.CKEDITOR_VERSION=H;const K=Symbol("listeningTo"),nt=Symbol("emitterId"),ut=Symbol("delegations"),Dt={on(i,t,e={}){this.listenTo(this,i,t,e)},once(i,t,e){let n=!1;this.listenTo(this,i,(o,...s)=>{n||(n=!0,o.off(),t.call(this,o,...s))},e)},off(i,t){this.stopListening(this,i,t)},listenTo(i,t,e,n={}){let o,s;this[K]||(this[K]={});const a=this[K];G(i)||U(i);const l=G(i);(o=a[l])||(o=a[l]={emitter:i,callbacks:{}}),(s=o.callbacks[t])||(s=o.callbacks[t]=[]),s.push(e),function(u,f,p,k,y){f._addEventListener?f._addEventListener(p,k,y):u._addEventListener.call(f,p,k,y)}(this,i,t,e,n)},stopListening(i,t,e){const n=this[K];let o=i&&G(i);const s=n&&o?n[o]:void 0,a=s&&t?s.callbacks[t]:void 0;if(!(!n||i&&!s||t&&!a))if(e)pt(this,i,t,e),a.indexOf(e)!==-1&&(a.length===1?delete s.callbacks[t]:pt(this,i,t,e));else if(a){for(;e=a.pop();)pt(this,i,t,e);delete s.callbacks[t]}else if(s){for(t in s.callbacks)this.stopListening(i,t);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[K]}},fire(i,...t){try{const e=i instanceof _?i:new _(this,i),n=e.name;let o=O(this,n);if(e.path.push(this),o){const a=[e,...t];o=Array.from(o);for(let l=0;l<o.length&&(o[l].callback.apply(this,a),e.off.called&&(delete e.off.called,this._removeEventListener(n,o[l].callback)),!e.stop.called);l++);}const s=this[ut];if(s){const a=s.get(n),l=s.get("*");a&&_t(a,e,t),l&&_t(l,e,t)}return e.return}catch(e){v.rethrowUnexpectedError(e,this)}},delegate(...i){return{to:(t,e)=>{this[ut]||(this[ut]=new Map),i.forEach(n=>{const o=this[ut].get(n);o?o.set(t,e):this[ut].set(n,new Map([[t,e]]))})}}},stopDelegating(i,t){if(this[ut])if(i)if(t){const e=this[ut].get(i);e&&e.delete(t)}else this[ut].delete(i);else this[ut].clear()},_addEventListener(i,t,e){(function(s,a){const l=Y(s);if(l[a])return;let u=a,f=null;const p=[];for(;u!==""&&!l[u];)l[u]={callbacks:[],childEvents:[]},p.push(l[u]),f&&l[u].childEvents.push(f),f=u,u=u.substr(0,u.lastIndexOf(":"));if(u!==""){for(const k of p)k.callbacks=l[u].callbacks.slice();l[u].childEvents.push(f)}})(this,i);const n=et(this,i),o={callback:t,priority:E.get(e.priority)};for(const s of n)S(s,o)},_removeEventListener(i,t){const e=et(this,i);for(const n of e)for(let o=0;o<n.length;o++)n[o].callback==t&&(n.splice(o,1),o--)}},V=Dt;function U(i,t){i[nt]||(i[nt]=t||x())}function G(i){return i[nt]}function Y(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function et(i,t){const e=Y(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){const s=et(i,e.childEvents[o]);n=n.concat(s)}return n}function O(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?O(i,t.substr(0,t.lastIndexOf(":"))):null}function _t(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;const s=new _(t.source,o);s.path=[...t.path],n.fire(s,...e)}}function pt(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}const Bt=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},Pt=Symbol("observableProperties"),yt=Symbol("boundObservables"),Kt=Symbol("boundProperties"),de=Symbol("decoratedMethods"),ne=Symbol("decoratedOriginal"),oe={set(i,t){if(Bt(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);ae(this);const e=this[Pt];if(i in this&&!e.has(i))throw new v("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>e.get(i),set(n){const o=e.get(i);let s=this.fire("set:"+i,i,n,o);s===void 0&&(s=n),o===s&&e.has(i)||(e.set(i,s),this.fire("change:"+i,i,s,o))}}),this[i]=t},bind(...i){if(!i.length||!ft(i))throw new v("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new v("observable-bind-duplicate-properties",this);ae(this);const t=this[Kt];i.forEach(n=>{if(t.has(n))throw new v("observable-bind-rebind",this)});const e=new Map;return i.forEach(n=>{const o={property:n,to:[]};t.set(n,o),e.set(n,o)}),{to:me,toMany:F,_observable:this,_bindProperties:i,_to:[],_bindings:e}},unbind(...i){if(!this[Pt])return;const t=this[Kt],e=this[yt];if(i.length){if(!ft(i))throw new v("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=t.get(n);o&&(o.to.forEach(([s,a])=>{const l=e.get(s),u=l[a];u.delete(o),u.size||delete l[a],Object.keys(l).length||(e.delete(s),this.stopListening(s,"change"))}),t.delete(n))})}else e.forEach((n,o)=>{this.stopListening(o,"change")}),e.clear(),t.clear()},decorate(i){ae(this);const t=this[i];if(!t)throw new v("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(e,n)=>{e.return=t.apply(this,n)}),this[i]=function(...e){return this.fire(i,e)},this[i][ne]=t,this[de]||(this[de]=[]),this[de].push(i)},...V};oe.stopListening=function(i,t,e){if(!i&&this[de]){for(const n of this[de])this[n]=this[n][ne];delete this[de]}V.stopListening.call(this,i,t,e)};const zt=oe;function ae(i){i[Pt]||(Object.defineProperty(i,Pt,{value:new Map}),Object.defineProperty(i,yt,{value:new Map}),Object.defineProperty(i,Kt,{value:new Map}))}function me(...i){const t=function(...s){if(!s.length)throw new v("observable-bind-to-parse-error",null);const a={to:[]};let l;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")l.properties.push(u);else{if(typeof u!="object")throw new v("observable-bind-to-parse-error",null);l={observable:u,properties:[]},a.to.push(l)}}),a}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new v("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new v("observable-bind-to-extra-callback",this);var o;t.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new v("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(s=>{const a=o[yt];let l;a.get(s.observable)||o.listenTo(s.observable,"change",(u,f)=>{l=a.get(s.observable)[f],l&&l.forEach(p=>{lt(o,p.property)})})}),function(s){let a;s._bindings.forEach((l,u)=>{s._to.forEach(f=>{a=f.properties[l.callback?0:s._bindProperties.indexOf(u)],l.to.push([f.observable,a]),function(p,k,y,T){const P=p[yt],N=P.get(y),B=N||{};B[T]||(B[T]=new Set),B[T].add(k),N||P.set(y,B)}(s._observable,l,f.observable,a)})})}(this),this._bindProperties.forEach(s=>{lt(this._observable,s)})}function F(i,t,e){if(this._bindings.size>1)throw new v("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(a=>[a,o]);return Array.prototype.concat.apply([],s)}(i,t),e)}function ft(i){return i.every(t=>typeof t=="string")}function lt(i,t){const e=i[Kt].get(t);let n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}function tt(i,...t){t.forEach(e=>{const n=Object.getOwnPropertyNames(e),o=Object.getOwnPropertySymbols(e);n.concat(o).forEach(s=>{if(s in i.prototype)return;const a=Object.getOwnPropertyDescriptor(e,s);a.enumerable=!1,Object.defineProperty(i.prototype,s,a)})})}class Z{constructor(t){this.editor=t,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",te,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",te),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function te(i){i.return=!1,i.stop()}tt(Z,zt);class vt{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(e,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Lt,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Lt),this.refresh())}execute(){}destroy(){this.stopListening()}}function Lt(i){i.return=!1,i.stop()}tt(vt,zt);class L extends vt{constructor(t){super(t),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={priority:"normal"}){S(this._childCommandsDefinitions,{command:t,priority:e.priority}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}const $=typeof Ql=="object"&&Ql&&Ql.Object===Object&&Ql;var Q=typeof self=="object"&&self&&self.Object===Object&&self;const ot=$||Q||Function("return this")(),rt=ot.Symbol;var mt=Object.prototype,kt=mt.hasOwnProperty,gt=mt.toString,wt=rt?rt.toStringTag:void 0;const at=function(i){var t=kt.call(i,wt),e=i[wt];try{i[wt]=void 0;var n=!0}catch{}var o=gt.call(i);return n&&(t?i[wt]=e:delete i[wt]),o};var Nt=Object.prototype.toString;const Et=function(i){return Nt.call(i)};var It=rt?rt.toStringTag:void 0;const bt=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":It&&It in Object(i)?at(i):Et(i)},$t=function(i,t){return function(e){return i(t(e))}},Yt=$t(Object.getPrototypeOf,Object),Ht=function(i){return i!=null&&typeof i=="object"};var Wt=Function.prototype,ce=Object.prototype,Un=Wt.toString,Oo=ce.hasOwnProperty,Ve=Un.call(Object);const Ge=function(i){if(!Ht(i)||bt(i)!="[object Object]")return!1;var t=Yt(i);if(t===null)return!0;var e=Oo.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&Un.call(e)==Ve},Ke=function(){this.__data__=[],this.size=0},He=function(i,t){return i===t||i!=i&&t!=t},no=function(i,t){for(var e=i.length;e--;)if(He(i[e][0],t))return e;return-1};var Gd=Array.prototype.splice;const bc=function(i){var t=this.__data__,e=no(t,i);return!(e<0)&&(e==t.length-1?t.pop():Gd.call(t,e,1),--this.size,!0)},Kd=function(i){var t=this.__data__,e=no(t,i);return e<0?void 0:t[e][1]},Ut=function(i){return no(this.__data__,i)>-1},Yd=function(i,t){var e=this.__data__,n=no(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function ci(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}ci.prototype.clear=Ke,ci.prototype.delete=bc,ci.prototype.get=Kd,ci.prototype.has=Ut,ci.prototype.set=Yd;const Or=ci,Qd=function(){this.__data__=new Or,this.size=0},Ro=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},Zd=function(i){return this.__data__.get(i)},Jd=function(i){return this.__data__.has(i)},zo=function(i){if(!Bt(i))return!1;var t=bt(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Vs=ot["__core-js_shared__"];var kc=function(){var i=/[^.]+$/.exec(Vs&&Vs.keys&&Vs.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const $s=function(i){return!!kc&&kc in i};var Xd=Function.prototype.toString;const jo=function(i){if(i!=null){try{return Xd.call(i)}catch{}try{return i+""}catch{}}return""};var Yi=/^\[object .+?Constructor\]$/,tu=Function.prototype,eu=Object.prototype,nu=tu.toString,ou=eu.hasOwnProperty,Hs=RegExp("^"+nu.call(ou).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const iu=function(i){return!(!Bt(i)||$s(i))&&(zo(i)?Hs:Yi).test(jo(i))},ru=function(i,t){return i==null?void 0:i[t]},Fo=function(i,t){var e=ru(i,t);return iu(e)?e:void 0},Qi=Fo(ot,"Map"),Gt=Fo(Object,"create"),su=function(){this.__data__=Gt?Gt(null):{},this.size=0},au=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var cu=Object.prototype.hasOwnProperty;const lu=function(i){var t=this.__data__;if(Gt){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return cu.call(t,i)?t[i]:void 0};var du=Object.prototype.hasOwnProperty;const uu=function(i){var t=this.__data__;return Gt?t[i]!==void 0:du.call(t,i)},Us=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=Gt&&t===void 0?"__lodash_hash_undefined__":t,this};function qn(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}qn.prototype.clear=su,qn.prototype.delete=au,qn.prototype.get=lu,qn.prototype.has=uu,qn.prototype.set=Us;const qs=qn,hn=function(){this.size=0,this.__data__={hash:new qs,map:new(Qi||Or),string:new qs}},hu=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},Rr=function(i,t){var e=i.__data__;return hu(t)?e[typeof t=="string"?"string":"hash"]:e.map},fu=function(i){var t=Rr(this,i).delete(i);return this.size-=t?1:0,t},gu=function(i){return Rr(this,i).get(i)},wc=function(i){return Rr(this,i).has(i)},pu=function(i,t){var e=Rr(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function li(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}li.prototype.clear=hn,li.prototype.delete=fu,li.prototype.get=gu,li.prototype.has=wc,li.prototype.set=pu;const zr=li,_c=function(i,t){var e=this.__data__;if(e instanceof Or){var n=e.__data__;if(!Qi||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new zr(n)}return e.set(i,t),this.size=e.size,this};function di(i){var t=this.__data__=new Or(i);this.size=t.size}di.prototype.clear=Qd,di.prototype.delete=Ro,di.prototype.get=Zd,di.prototype.has=Jd,di.prototype.set=_c;const ui=di,mu=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},jr=function(){try{var i=Fo(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Ws=function(i,t,e){t=="__proto__"&&jr?jr(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e};var bu=Object.prototype.hasOwnProperty;const Gs=function(i,t,e){var n=i[t];bu.call(i,t)&&He(n,e)&&(e!==void 0||t in i)||Ws(i,t,e)},hi=function(i,t,e,n){var o=!e;e||(e={});for(var s=-1,a=t.length;++s<a;){var l=t[s],u=n?n(e[l],i[l],l,e,i):void 0;u===void 0&&(u=i[l]),o?Ws(e,l,u):Gs(e,l,u)}return e},ku=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},Ks=function(i){return Ht(i)&&bt(i)=="[object Arguments]"};var Vo=Object.prototype,wu=Vo.hasOwnProperty,vc=Vo.propertyIsEnumerable;const Fr=Ks(function(){return arguments}())?Ks:function(i){return Ht(i)&&wu.call(i,"callee")&&!vc.call(i,"callee")},nn=Array.isArray,_u=function(){return!1};var Ac=c&&!c.nodeType&&c,Cc=Ac&&!0&&r&&!r.nodeType&&r,yc=Cc&&Cc.exports===Ac?ot.Buffer:void 0;const Zi=(yc?yc.isBuffer:void 0)||_u;var vu=/^(?:0|[1-9]\d*)$/;const Ys=function(i,t){var e=typeof i;return!!(t=t==null?9007199254740991:t)&&(e=="number"||e!="symbol"&&vu.test(i))&&i>-1&&i%1==0&&i<t},wo=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var be={};be["[object Float32Array]"]=be["[object Float64Array]"]=be["[object Int8Array]"]=be["[object Int16Array]"]=be["[object Int32Array]"]=be["[object Uint8Array]"]=be["[object Uint8ClampedArray]"]=be["[object Uint16Array]"]=be["[object Uint32Array]"]=!0,be["[object Arguments]"]=be["[object Array]"]=be["[object ArrayBuffer]"]=be["[object Boolean]"]=be["[object DataView]"]=be["[object Date]"]=be["[object Error]"]=be["[object Function]"]=be["[object Map]"]=be["[object Number]"]=be["[object Object]"]=be["[object RegExp]"]=be["[object Set]"]=be["[object String]"]=be["[object WeakMap]"]=!1;const Au=function(i){return Ht(i)&&wo(i.length)&&!!be[bt(i)]},Qs=function(i){return function(t){return i(t)}};var xc=c&&!c.nodeType&&c,Ji=xc&&!0&&r&&!r.nodeType&&r,Zs=Ji&&Ji.exports===xc&&$.process;const fi=function(){try{var i=Ji&&Ji.require&&Ji.require("util").types;return i||Zs&&Zs.binding&&Zs.binding("util")}catch{}}();var Ec=fi&&fi.isTypedArray;const Js=Ec?Qs(Ec):Au;var Cu=Object.prototype.hasOwnProperty;const Dc=function(i,t){var e=nn(i),n=!e&&Fr(i),o=!e&&!n&&Zi(i),s=!e&&!n&&!o&&Js(i),a=e||n||o||s,l=a?ku(i.length,String):[],u=l.length;for(var f in i)!t&&!Cu.call(i,f)||a&&(f=="length"||o&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Ys(f,u))||l.push(f);return l};var yu=Object.prototype;const Xs=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||yu)},xu=$t(Object.keys,Object);var Sc=Object.prototype.hasOwnProperty;const Eu=function(i){if(!Xs(i))return xu(i);var t=[];for(var e in Object(i))Sc.call(i,e)&&e!="constructor"&&t.push(e);return t},Xi=function(i){return i!=null&&wo(i.length)&&!zo(i)},ta=function(i){return Xi(i)?Dc(i):Eu(i)},Du=function(i,t){return i&&hi(t,ta(t),i)},Su=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var gi=Object.prototype.hasOwnProperty;const Tu=function(i){if(!Bt(i))return Su(i);var t=Xs(i),e=[];for(var n in i)(n!="constructor"||!t&&gi.call(i,n))&&e.push(n);return e},pi=function(i){return Xi(i)?Dc(i,!0):Tu(i)},Iu=function(i,t){return i&&hi(t,pi(t),i)};var Tc=c&&!c.nodeType&&c,Ic=Tc&&!0&&r&&!r.nodeType&&r,Mc=Ic&&Ic.exports===Tc?ot.Buffer:void 0,Pc=Mc?Mc.allocUnsafe:void 0;const Nc=function(i,t){if(t)return i.slice();var e=i.length,n=Pc?Pc(e):new i.constructor(e);return i.copy(n),n},Bc=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},ea=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,s=[];++e<n;){var a=i[e];t(a,e,i)&&(s[o++]=a)}return s},na=function(){return[]};var Mu=Object.prototype.propertyIsEnumerable,Lc=Object.getOwnPropertySymbols;const oa=Lc?function(i){return i==null?[]:(i=Object(i),ea(Lc(i),function(t){return Mu.call(i,t)}))}:na,Oc=function(i,t){return hi(i,oa(i),t)},Rc=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},Vr=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)Rc(t,oa(i)),i=Yt(i);return t}:na,zc=function(i,t){return hi(i,Vr(i),t)},ia=function(i,t,e){var n=t(i);return nn(i)?n:Rc(n,e(i))},tr=function(i){return ia(i,ta,oa)},Pu=function(i){return ia(i,pi,Vr)},ra=Fo(ot,"DataView"),sa=Fo(ot,"Promise"),mi=Fo(ot,"Set"),aa=Fo(ot,"WeakMap");var jc="[object Map]",Fc="[object Promise]",Vc="[object Set]",ca="[object WeakMap]",$c="[object DataView]",Nu=jo(ra),Bu=jo(Qi),la=jo(sa),Hc=jo(mi),Lu=jo(aa),$o=bt;(ra&&$o(new ra(new ArrayBuffer(1)))!=$c||Qi&&$o(new Qi)!=jc||sa&&$o(sa.resolve())!=Fc||mi&&$o(new mi)!=Vc||aa&&$o(new aa)!=ca)&&($o=function(i){var t=bt(i),e=t=="[object Object]"?i.constructor:void 0,n=e?jo(e):"";if(n)switch(n){case Nu:return $c;case Bu:return jc;case la:return Fc;case Hc:return Vc;case Lu:return ca}return t});const er=$o;var Ou=Object.prototype.hasOwnProperty;const Ru=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&Ou.call(i,"index")&&(e.index=i.index,e.input=i.input),e},$r=ot.Uint8Array,da=function(i){var t=new i.constructor(i.byteLength);return new $r(t).set(new $r(i)),t},Uc=function(i,t){var e=t?da(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var zu=/\w*$/;const ju=function(i){var t=new i.constructor(i.source,zu.exec(i));return t.lastIndex=i.lastIndex,t};var qc=rt?rt.prototype:void 0,Wc=qc?qc.valueOf:void 0;const Gc=function(i){return Wc?Object(Wc.call(i)):{}},ua=function(i,t){var e=t?da(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},Fu=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return da(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Uc(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return ua(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return ju(i);case"[object Symbol]":return Gc(i)}};var Kc=Object.create;const Vu=function(){function i(){}return function(t){if(!Bt(t))return{};if(Kc)return Kc(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),ha=function(i){return typeof i.constructor!="function"||Xs(i)?{}:Vu(Yt(i))},fa=function(i){return Ht(i)&&er(i)=="[object Map]"};var Yc=fi&&fi.isMap;const $u=Yc?Qs(Yc):fa,Hu=function(i){return Ht(i)&&er(i)=="[object Set]"};var ga=fi&&fi.isSet;const Uu=ga?Qs(ga):Hu;var Qc="[object Arguments]",bi="[object Function]",Zc="[object Object]",ke={};ke[Qc]=ke["[object Array]"]=ke["[object ArrayBuffer]"]=ke["[object DataView]"]=ke["[object Boolean]"]=ke["[object Date]"]=ke["[object Float32Array]"]=ke["[object Float64Array]"]=ke["[object Int8Array]"]=ke["[object Int16Array]"]=ke["[object Int32Array]"]=ke["[object Map]"]=ke["[object Number]"]=ke["[object Object]"]=ke["[object RegExp]"]=ke["[object Set]"]=ke["[object String]"]=ke["[object Symbol]"]=ke["[object Uint8Array]"]=ke["[object Uint8ClampedArray]"]=ke["[object Uint16Array]"]=ke["[object Uint32Array]"]=!0,ke["[object Error]"]=ke[bi]=ke["[object WeakMap]"]=!1;const ki=function i(t,e,n,o,s,a){var l,u=1&e,f=2&e,p=4&e;if(n&&(l=s?n(t,o,s,a):n(t)),l!==void 0)return l;if(!Bt(t))return t;var k=nn(t);if(k){if(l=Ru(t),!u)return Bc(t,l)}else{var y=er(t),T=y==bi||y=="[object GeneratorFunction]";if(Zi(t))return Nc(t,u);if(y==Zc||y==Qc||T&&!s){if(l=f||T?{}:ha(t),!u)return f?zc(t,Iu(l,t)):Oc(t,Du(l,t))}else{if(!ke[y])return s?t:{};l=Fu(t,y,u)}}a||(a=new ui);var P=a.get(t);if(P)return P;a.set(t,l),Uu(t)?t.forEach(function(B){l.add(i(B,e,n,B,t,a))}):$u(t)&&t.forEach(function(B,z){l.set(z,i(B,e,n,z,t,a))});var N=k?void 0:(p?f?Pu:tr:f?pi:ta)(t);return mu(N||t,function(B,z){N&&(B=t[z=B]),Gs(l,z,i(B,e,n,z,t,a))}),l},Jc=function(i,t){return ki(i,5,t=typeof t=="function"?t:void 0)},Ho=function(i){return Ht(i)&&i.nodeType===1&&!Ge(i)};class Xc{constructor(t,e){this._config={},e&&this.define(pa(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(Ge(e))return void this._setObjectToTarget(t,e,o);const s=e.split(".");e=s.pop();for(const a of s)Ge(t[a])||(t[a]={}),t=t[a];if(Ge(n))return Ge(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const o of n){if(!Ge(t[o])){t=null;break}t=t[o]}return t?pa(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function pa(i){return Jc(i,qu)}function qu(i){return Ho(i)?i:void 0}function An(i){return!(!i||!i[Symbol.iterator])}class tl{constructor(t={},e={}){const n=An(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new v("collection-add-item-invalid-index",this);let n=0;for(const o of t){const s=this._getItemIdBeforeAdding(o),a=e+n;this._items.splice(a,0,o),this._itemMap.set(s,o),this.fire("add",o,a),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new v("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new v("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(o,s,a)=>{const l=e._bindToCollection==this,u=e._bindToInternalToExternalMap.get(s);if(l&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const f=t(s);if(!f)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const k of this._skippedIndexesFromExternal)a>k&&p--;for(const k of e._skippedIndexesFromExternal)p>=k&&p++;this._bindToExternalToInternalMap.set(s,f),this._bindToInternalToExternalMap.set(f,s),this.add(f,p);for(let k=0;k<e._skippedIndexesFromExternal.length;k++)p<=e._skippedIndexesFromExternal[k]&&e._skippedIndexesFromExternal[k]++}};for(const o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,s,a)=>{const l=this._bindToExternalToInternalMap.get(s);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(a<f&&u.push(f-1),a>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new v("collection-add-invalid-id",this);if(this.get(n))throw new v("collection-add-item-already-exists",this)}else t[e]=n=x();return n}_remove(t){let e,n,o,s=!1;const a=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),s=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],s=!o,o&&(n=o[a])):(o=t,n=o[a],e=this._items.indexOf(o),s=e==-1||!this._itemMap.get(n)),s)throw new v("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(l),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}tt(tl,V);const Cn=tl;class Hr{constructor(t,e=[],n=[]){this._context=t,this._plugins=new Map,this._availablePlugins=new Map;for(const o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new v("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const o=this,s=this._context;(function P(N,B=new Set){N.forEach(z=>{u(z)&&(B.has(z)||(B.add(z),z.pluginName&&!o._availablePlugins.has(z.pluginName)&&o._availablePlugins.set(z.pluginName,z),z.requires&&P(z.requires,B)))})})(t),y(t);const a=[...function P(N,B=new Set){return N.map(z=>u(z)?z:o._availablePlugins.get(z)).reduce((z,q)=>B.has(q)?z:(B.add(q),q.requires&&(y(q.requires,q),P(q.requires,B).forEach(st=>z.add(st))),z.add(q)),new Set)}(t.filter(P=>!p(P,e)))];(function(P,N){for(const B of N){if(typeof B!="function")throw new v("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const z=B.pluginName;if(!z)throw new v("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new v("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:z});const q=o._availablePlugins.get(z);if(!q)throw new v("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:z});const st=P.indexOf(q);if(st===-1){if(o._contextPlugins.has(q))return;throw new v("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:z})}if(q.requires&&q.requires.length)throw new v("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:z});P.splice(st,1,B),o._availablePlugins.set(z,B)}})(a,n);const l=function(P){return P.map(N=>{const B=o._contextPlugins.get(N)||new N(s);return o._add(N,B),B})}(a);return T(l,"init").then(()=>T(l,"afterInit")).then(()=>l);function u(P){return typeof P=="function"}function f(P){return u(P)&&P.isContextPlugin}function p(P,N){return N.some(B=>B===P||k(P)===B||k(B)===P)}function k(P){return u(P)?P.pluginName||P.name:P}function y(P,N=null){P.map(B=>u(B)?B:o._availablePlugins.get(B)||B).forEach(B=>{(function(z,q){if(!u(z))throw q?new v("plugincollection-soft-required",s,{missingPlugin:z,requiredBy:k(q)}):new v("plugincollection-plugin-not-found",s,{plugin:z})})(B,N),function(z,q){if(!!f(q)&&!f(z))throw new v("plugincollection-context-required",s,{plugin:k(z),requiredBy:k(q)})}(B,N),function(z,q){if(!!q&&!!p(z,e))throw new v("plugincollection-required",s,{plugin:k(z),requiredBy:k(q)})}(B,N)})}function T(P,N){return P.reduce((B,z)=>z[N]?o._contextPlugins.has(z)?B:B.then(z[N].bind(z)):B,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new v("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}function Re(i){return Array.isArray(i)?i:[i]}function Wu(i,t,e=1){if(typeof e!="number")throw new v("translation-service-quantity-not-a-number",null,{quantity:e});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=t.id||t.string;if(n===0||!function(u,f){return!!window.CKEDITOR_TRANSLATIONS[u]&&!!window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(i,o))return e!==1?t.plural:t.string;const s=window.CKEDITOR_TRANSLATIONS[i].dictionary,a=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(u=>u===1?0:1),l=s[o];return typeof l=="string"?l:l[Number(a(e))]}tt(Hr,V),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Gu=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function el(i){return Gu.includes(i)?"rtl":"ltr"}class Ku{constructor(t={}){this.uiLanguage=t.uiLanguage||"en",this.contentLanguage=t.contentLanguage||this.uiLanguage,this.uiLanguageDirection=el(this.uiLanguage),this.contentLanguageDirection=el(this.contentLanguage),this.t=(e,n)=>this._t(e,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=Re(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(a,l)=>l<s.length?s[l]:a)}(Wu(this.uiLanguage,t,n),e)}}class Yu{constructor(t){this.config=new Xc(t,this.constructor.defaultConfig);const e=this.constructor.builtinPlugins;this.config.define("plugins",e),this.plugins=new Hr(this,e);const n=this.config.get("language")||{};this.locale=new Ku({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Cn,this._contextOwner=null}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new v("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new v("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new v("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class nr{constructor(t){this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function Ye(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}tt(nr,zt);const nl=function(i){return ki(i,4)};class Uo{constructor(t){this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new v("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Ye(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=nl(this);return delete t.parent,t}is(t){return t==="node"||t==="view:node"}}tt(Uo,V);class ue extends Uo{constructor(t,e){super(t),this._textData=e}is(t){return t==="$text"||t==="view:$text"||t==="text"||t==="view:text"||t==="node"||t==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof ue&&(this===t||this.data===t.data)}_clone(){return new ue(this.document,this.data)}}class oo{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new v("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new v("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return t==="$textProxy"||t==="view:$textProxy"||t==="textProxy"||t==="view:textProxy"}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function Pn(i){return An(i)?new Map(i):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(i)}class yn{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const o=ma(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){const e=[];for(const n of t)for(const o of this._patterns){const s=ma(n,o);s&&e.push({element:n,pattern:o,match:s})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function ma(i,t){if(typeof t=="function")return t(i);const e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return Ge(n)?(n.style!==void 0&&M("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&M("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),or(n,s,a=>o.getAttribute(a))}(t.attributes,i),!e.attributes)?null:!(t.classes&&(e.classes=function(n,o){return or(n,o.getClassNames())}(t.classes,i),!e.classes))&&!(t.styles&&(e.styles=function(n,o){return or(n,o.getStyleNames(!0),s=>o.getStyle(s))}(t.styles,i),!e.styles))&&e}function or(i,t,e){const n=function(a){return Array.isArray(a)?a.map(l=>Ge(l)?(l.key!==void 0&&l.value!==void 0||M("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):Ge(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(t),s=[];return n.forEach(([a,l])=>{o.forEach(u=>{(function(f,p){return f===!0||f===p||f instanceof RegExp&&p.match(f)})(a,u)&&function(f,p,k){if(f===!0)return!0;const y=k(p);return f===y||f instanceof RegExp&&!!String(y).match(f)}(l,u,e)&&s.push(u)})}),!n.length||s.length<n.length?null:s}const io=function(i){return typeof i=="symbol"||Ht(i)&&bt(i)=="[object Symbol]"};var Qu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zu=/^\w*$/;const Ju=function(i,t){if(nn(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!io(i))||Zu.test(i)||!Qu.test(i)||t!=null&&i in Object(t)};function ba(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],s=e.cache;if(s.has(o))return s.get(o);var a=i.apply(this,n);return e.cache=s.set(o,a)||s,a};return e.cache=new(ba.Cache||zr),e}ba.Cache=zr;const Xu=ba;var th=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eh=/\\(\\)?/g,Ur=function(i){var t=Xu(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t}(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(th,function(e,n,o,s){t.push(o?s.replace(eh,"$1"):n||e)}),t});const A=Ur,C=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var I=rt?rt.prototype:void 0,R=I?I.toString:void 0;const dt=function i(t){if(typeof t=="string")return t;if(nn(t))return C(t,i)+"";if(io(t))return R?R.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Rt=function(i){return i==null?"":dt(i)},Ne=function(i,t){return nn(i)?i:Ju(i,t)?[i]:A(Rt(i))},kn=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},Ue=function(i){if(typeof i=="string"||io(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},qo=function(i,t){for(var e=0,n=(t=Ne(t,i)).length;i!=null&&e<n;)i=i[Ue(t[e++])];return e&&e==n?i:void 0},qr=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var s=Array(o);++n<o;)s[n]=i[n+t];return s},Ky=function(i,t){return t.length<2?i:qo(i,qr(t,0,-1))},Yy=function(i,t){return t=Ne(t,i),(i=Ky(i,t))==null||delete i[Ue(kn(t))]},Qy=function(i,t){return i==null||Yy(i,t)},ol=function(i,t,e){var n=i==null?void 0:qo(i,t);return n===void 0?e:n},nh=function(i,t,e){(e!==void 0&&!He(i[t],e)||e===void 0&&!(t in i))&&Ws(i,t,e)},Zy=function(i){return function(t,e,n){for(var o=-1,s=Object(t),a=n(t),l=a.length;l--;){var u=a[i?l:++o];if(e(s[u],u,s)===!1)break}return t}}(),Jy=function(i){return Ht(i)&&Xi(i)},oh=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},Xy=function(i){return hi(i,pi(i))},t1=function(i,t,e,n,o,s,a){var l=oh(i,e),u=oh(t,e),f=a.get(u);if(f)nh(i,e,f);else{var p=s?s(l,u,e+"",i,t,a):void 0,k=p===void 0;if(k){var y=nn(u),T=!y&&Zi(u),P=!y&&!T&&Js(u);p=u,y||T||P?nn(l)?p=l:Jy(l)?p=Bc(l):T?(k=!1,p=Nc(u,!0)):P?(k=!1,p=ua(u,!0)):p=[]:Ge(u)||Fr(u)?(p=l,Fr(l)?p=Xy(l):Bt(l)&&!zo(l)||(p=ha(u))):k=!1}k&&(a.set(u,p),o(p,u,n,s,a),a.delete(u)),nh(i,e,p)}},e1=function i(t,e,n,o,s){t!==e&&Zy(e,function(a,l){if(s||(s=new ui),Bt(a))t1(t,e,l,n,i,o,s);else{var u=o?o(oh(t,l),a,l+"",t,e,s):void 0;u===void 0&&(u=a),nh(t,l,u)}},pi)},ir=function(i){return i},n1=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var xp=Math.max;const o1=function(i,t,e){return t=xp(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,s=xp(n.length-t,0),a=Array(s);++o<s;)a[o]=n[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=n[o];return l[t]=e(a),n1(i,this,l)}},i1=function(i){return function(){return i}},r1=jr?function(i,t){return jr(i,"toString",{configurable:!0,enumerable:!1,value:i1(t),writable:!0})}:ir;var s1=Date.now;const a1=function(i){var t=0,e=0;return function(){var n=s1(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(r1),c1=function(i,t){return a1(o1(i,t,ir),i+"")},l1=function(i,t,e){if(!Bt(e))return!1;var n=typeof t;return!!(n=="number"?Xi(e)&&Ys(t,e.length):n=="string"&&t in e)&&He(e[t],i)},Ep=function(i){return c1(function(t,e){var n=-1,o=e.length,s=o>1?e[o-1]:void 0,a=o>2?e[2]:void 0;for(s=i.length>3&&typeof s=="function"?(o--,s):void 0,a&&l1(e[0],e[1],a)&&(s=o<3?void 0:s,o=1),t=Object(t);++n<o;){var l=e[n];l&&i(t,l,n,s)}return t})},Dp=Ep(function(i,t,e){e1(i,t,e)}),d1=function(i,t,e,n){if(!Bt(i))return i;for(var o=-1,s=(t=Ne(t,i)).length,a=s-1,l=i;l!=null&&++o<s;){var u=Ue(t[o]),f=e;if(u==="__proto__"||u==="constructor"||u==="prototype")return i;if(o!=a){var p=l[u];(f=n?n(p,u,l):void 0)===void 0&&(f=Bt(p)?p:Ys(t[o+1])?[]:{})}Gs(l,u,f),l=l[u]}return i},u1=function(i,t,e){return i==null?i:d1(i,t,e)};class h1{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){const t=Object.entries(this._styles);return!Array.from(t).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=Array.from(function(n){let o=null,s=0,a=0,l=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const p=n.charAt(f);if(o===null)switch(p){case":":l||(l=n.substr(s,f-s),a=f+1);break;case'"':case"'":o=p;break;case";":{const k=n.substr(a,f-a);l&&u.set(l.trim(),k.trim()),l=null,s=f+1;break}}else p===o&&(o=null)}return u}(t).entries());for(const[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(Bt(t))for(const[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=ih(t);Qy(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!Bt(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([e])=>e)}clear(){this._styles={}}_getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),o=ol(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class f1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(Bt(e))rh(n,ih(t),e);else if(this._normalizers.has(t)){const o=this._normalizers.get(t),{path:s,value:a}=o(e);rh(n,s,a)}else rh(n,t,e)}getNormalized(t,e){if(!t)return Dp({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return ol(e,n);const o=n(t,e);if(o)return o}return ol(e,ih(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,t);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...e,...Object.keys(t)]);return Array.from(n.values())}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function ih(i){return i.replace("-",".")}function rh(i,t,e){let n=e;Bt(e)&&(n=Dp({},ol(i,t),e)),u1(i,t,n)}class Wn extends Uo{constructor(t,e,n,o){if(super(t),this.name=e,this._attrs=function(s){s=Pn(s);for(const[a,l]of s)l===null?s.delete(a):typeof l!="string"&&s.set(a,String(l));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Sp(this._classes,s),this._attrs.delete("class")}this._styles=new h1(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="view:element"):t==="element"||t==="view:element"||t==="node"||t==="view:node"}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Wn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t=!1){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new yn(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const o of this.getChildren())e.push(o._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new ue(s,a)]:(An(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new ue(s,l):l instanceof oo?new ue(s,l.data):l))}(this.document,e);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(t,0,s),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),t=="class"?Sp(this._classes,e):t=="style"?this._styles.setTo(e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of Re(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of Re(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of Re(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Sp(i,t){const e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}class il extends Wn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=Tp}is(t,e=null){return e?e===this.name&&(t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}}function Tp(){const i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of i)if(!e.is("uiElement"))return null;return this.childCount}class rl extends il{constructor(t,e,n,o){super(t,e,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",s=>s&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}is(t,e=null){return e?e===this.name&&(t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}destroy(){this.stopListening()}}tt(rl,zt);const Ip=Symbol("rootName");class g1 extends rl{constructor(t,e){super(t,e),this.rootName="main"}is(t,e=null){return e?e===this.name&&(t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"):t==="rootElement"||t==="view:rootElement"||t==="editableElement"||t==="view:editableElement"||t==="containerElement"||t==="view:containerElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}get rootName(){return this.getCustomProperty(Ip)}set rootName(t){this._setCustomProperty(Ip,t)}set _name(t){this.name=t}}class rr{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new v("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new v("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Ct._createAt(t.startPosition):this.position=Ct._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do o=this.position,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof ue){if(t.isAtEnd)return this.position=Ct._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof Wn)return this.shallow?t.offset++:t=new Ct(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof ue){if(this.singleCharacters)return t=new Ct(o,0),this.position=t,this._next();{let s,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new oo(o,0,a),t=Ct._createAfter(s)):(s=new oo(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",s,e,t,a)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const a=new oo(n,t.offset,s);return t.offset+=s,this.position=t,this._formatReturnValue("text",a,e,t,s)}return t=Ct._createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof ue){if(t.isAtStart)return this.position=Ct._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof Wn)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new Ct(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof ue){if(this.singleCharacters)return t=new Ct(o,o.data.length),this.position=t,this._previous();{let s,a=o.data.length;if(o==this._boundaryStartParent){const l=this.boundaries.start.offset;s=new oo(o,l,o.data.length-l),a=s.data.length,t=Ct._createBefore(s)}else s=new oo(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",s,e,t,a)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=t.offset-l}t.offset-=s;const a=new oo(n,t.offset,s);return this.position=t,this._formatReturnValue("text",a,e,t,s)}return t=Ct._createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,s){return e instanceof oo&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Ct._createAfter(e.textNode):(o=Ct._createAfter(e.textNode),this.position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Ct._createBefore(e.textNode):(o=Ct._createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:s}}}}class Ct{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof rl);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Ct._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new rr(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}is(t){return t==="position"||t==="view:position"}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=Ye(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new rr(t)}clone(){return new Ct(this.parent,this.offset)}static _createAt(t,e){if(t instanceof Ct)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new v("view-createpositionat-offset-required",n)}return new Ct(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new Ct(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new v("view-position-after-root",t,{root:t});return new Ct(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new Ct(t.textNode,t.offsetInText);if(!t.parent)throw new v("view-position-before-root",t,{root:t});return new Ct(t.parent,t.index)}}class Vt{constructor(t,e=null){this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new rr({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(sl,{direction:"backward"}),e=this.end.getLastMatchingPosition(sl);return t.parent.is("$text")&&t.isAtStart&&(t=Ct._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=Ct._createAfter(e.parent)),new Vt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(sl);if(t.isAfter(this.end)||t.isEqual(this.end))return new Vt(t,t);let e=this.end.getLastMatchingPosition(sl,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new Ct(n,0)),o&&o.is("$text")&&(e=new Ct(o,o.data.length)),new Vt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Vt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Vt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Vt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new rr(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Vt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new rr(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new rr(t);yield e.position;for(const n of e)yield n.nextPosition}is(t){return t==="range"||t==="view:range"}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new Ct(t,e),new Ct(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(Ct._createBefore(t),e)}}function sl(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function sh(i){let t=0;for(const e of i)t++;return t}class ro{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=sh(this.getRanges());if(e!=sh(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of t.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(t,e,n){if(t===null)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof ro||t instanceof ah)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Vt)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Ct)this._setRanges([new Vt(t)]),this._setFakeOptions(e);else if(t instanceof Uo){const o=!!n&&!!n.backward;let s;if(e===void 0)throw new v("view-selection-setto-required-second-parameter",this);s=e=="in"?Vt._createIn(t):e=="on"?Vt._createOn(t):new Vt(Ct._createAt(t,e)),this._setRanges([s],o),this._setFakeOptions(n)}else{if(!An(t))throw new v("view-selection-setto-not-selectable",this);this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new v("view-selection-setfocus-no-ranges",this);const n=Ct._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Vt(n,o),!0):this._addRange(new Vt(o,n)),this.fire("change")}is(t){return t==="selection"||t==="view:selection"}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Vt))throw new v("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new v("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Vt(t.start,t.end))}}tt(ro,V);class ah{constructor(t=null,e,n){this._selection=new ro,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}is(t){return t==="selection"||t=="documentSelection"||t=="view:selection"||t=="view:documentSelection"}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}tt(ah,V);class ka extends _{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const ch=Symbol("bubbling contexts"),p1={fire(i,...t){try{const e=i instanceof _?i:new _(this,i),n=lh(this);if(!n.size)return;if(wa(e,"capturing",this),Wr(n,"$capture",e,...t))return e.return;const o=e.startRange||this.selection.getFirstRange(),s=o?o.getContainedElement():null,a=!!s&&Boolean(Mp(n,s));let l=s||function(u){if(!u)return null;const f=u.start.parent,p=u.end.parent,k=f.getPath(),y=p.getPath();return k.length>y.length?f:p}(o);if(wa(e,"atTarget",l),!a){if(Wr(n,"$text",e,...t))return e.return;wa(e,"bubbling",l)}for(;l;){if(l.is("rootElement")){if(Wr(n,"$root",e,...t))return e.return}else if(l.is("element")&&Wr(n,l.name,e,...t))return e.return;if(Wr(n,l,e,...t))return e.return;l=l.parent,wa(e,"bubbling",l)}return wa(e,"bubbling",this),Wr(n,"$document",e,...t),e.return}catch(e){v.rethrowUnexpectedError(e,this)}},_addEventListener(i,t,e){const n=Re(e.context||"$document"),o=lh(this);for(const s of n){let a=o.get(s);a||(a=Object.create(V),o.set(s,a)),this.listenTo(a,i,t,e)}},_removeEventListener(i,t){const e=lh(this);for(const n of e.values())this.stopListening(n,i,t)}},m1=p1;function wa(i,t,e){i instanceof ka&&(i._eventPhase=t,i._currentTarget=e)}function Wr(i,t,e,...n){const o=typeof t=="string"?i.get(t):Mp(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function Mp(i,t){for(const[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function lh(i){return i[ch]||(i[ch]=new Map),i[ch]}class _a{constructor(t){this.selection=new ah,this.roots=new Cn({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.map(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}tt(_a,m1),tt(_a,zt);class Gr extends Wn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=b1,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new v("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(t,e=null){return e?e===this.name&&(t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"):t==="attributeElement"||t==="view:attributeElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function b1(){if(dh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(dh(i)>1)return null;i=i.parent}return!i||dh(i)>1?null:this.childCount}function dh(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}Gr.DEFAULT_PRIORITY=10;class Pp extends Wn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=k1}is(t,e=null){return e?e===this.name&&(t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"):t==="emptyElement"||t==="view:emptyElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Uo||Array.from(e).length>0))throw new v("view-emptyelement-cannot-add",[this,e])}}function k1(){return null}const sr=navigator.userAgent.toLowerCase(),w1={isMac:Np(sr),isWindows:function(i){return i.indexOf("windows")>-1}(sr),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(sr),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(sr),isiOS:function(i){return!!i.match(/iphone|ipad/i)||Np(i)&&navigator.maxTouchPoints>0}(sr),isAndroid:function(i){return i.indexOf("android")>-1}(sr),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(sr),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},he=w1;function Np(i){return i.indexOf("macintosh")>-1}const _1={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},v1={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Jt=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++){const e=String.fromCharCode(t);i[e.toLowerCase()]=t}for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;for(const t of"`-=[];',./\\")i[t]=t.charCodeAt(0);return i}(),A1=Object.fromEntries(Object.entries(Jt).map(([i,t])=>[t,i.charAt(0).toUpperCase()+i.slice(1)]));function _o(i){let t;if(typeof i=="string"){if(t=Jt[i.toLowerCase()],!t)throw new v("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?Jt.alt:0)+(i.ctrlKey?Jt.ctrl:0)+(i.shiftKey?Jt.shift:0)+(i.metaKey?Jt.cmd:0);return t}function uh(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return _o(e.slice(0,-1));const n=_o(e);return he.isMac&&n==Jt.ctrl?Jt.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Bp(i){let t=uh(i);return Object.entries(he.isMac?_1:v1).reduce((e,[n,o])=>((t&Jt[n])!=0&&(t&=~Jt[n],e+=o),e),"")+(t?A1[t]:"")}function hh(i,t){const e=t==="ltr";switch(i){case Jt.arrowleft:return e?"left":"right";case Jt.arrowright:return e?"right":"left";case Jt.arrowup:return"up";case Jt.arrowdown:return"down"}}class fh extends Wn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=y1}is(t,e=null){return e?e===this.name&&(t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"):t==="uiElement"||t==="view:uiElement"||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Uo||Array.from(e).length>0))throw new v("view-uielement-cannot-add",this)}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function C1(i){i.document.on("arrowKey",(t,e)=>function(n,o,s){if(o.keyCode==Jt.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),l=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(l||o.shiftKey){const u=a.focusNode,f=a.focusOffset,p=s.domPositionToView(u,f);if(p===null)return;let k=!1;const y=p.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(k=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(k){const T=s.viewPositionToDom(y);l?a.collapse(T.parent,T.offset):a.extend(T.parent,T.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function y1(){return null}class Lp extends Wn{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=x1}is(t,e=null){return e?e===this.name&&(t==="rawElement"||t==="view:rawElement"||t==="element"||t==="view:element"):t==="rawElement"||t==="view:rawElement"||t===this.name||t==="view:"+this.name||t==="element"||t==="view:element"||t==="node"||t==="view:node"}_insertChild(t,e){if(e&&(e instanceof Uo||Array.from(e).length>0))throw new v("view-rawelement-cannot-add",[this,e])}}function x1(){return null}class ar{constructor(t,e){this.document=t,this._children=[],e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="view:documentFragment"}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new ue(s,a)]:(An(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new ue(s,l):l instanceof oo?new ue(s,l.data):l))}(this.document,e);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(t,0,s),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}tt(ar,V);class Op{constructor(t){this.document=t,this._cloneGroups=new Map,this._slotFactory=null}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new ar(this.document,t)}createText(t){return new ue(this.document,t)}createAttributeElement(t,e,n={}){const o=new Gr(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let s=null;Ge(n)?o=n:s=n;const a=new il(this.document,t,e,s);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(t,e,n={}){const o=new rl(this.document,t,e);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){const o=new Pp(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n){const o=new fh(this.document,t,e);return n&&(o.render=n),o}createRawElement(t,e,n,o={}){const s=new Lp(this.document,t,e);return s.render=n||(()=>{}),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Ct?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new v("view-writer-break-non-container-element",this.document);if(!e.parent)throw new v("view-writer-break-root",this.document);if(t.isAtStart)return Ct._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Ct._createAfter(e),n);const o=new Vt(t,Ct._createAt(e,"end")),s=new Ct(n,0);this.move(o,s)}return Ct._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Ct(a,l))}const o=n.getChild(e-1),s=n.getChild(e);if(!o||!s)return t;if(o.is("$text")&&s.is("$text"))return zp(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const a=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new Ct(o,a))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new v("view-writer-merge-containers-invalid-position",this.document);const o=e.getChild(e.childCount-1),s=o instanceof ue?Ct._createAt(o,"end"):Ct._createAt(e,"end");return this.move(Vt._createIn(n),Ct._createAt(e,"end")),this.remove(Vt._createOn(n)),s}insert(t,e){jp(e=An(e)?[...e]:[e],this.document);const n=e.reduce((a,l)=>{const u=a[a.length-1],f=!l.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(l):a.push({breakAttributes:f,nodes:[l]}),a},[]);let o=null,s=t;for(const{nodes:a,breakAttributes:l}of n){const u=this._insertNodes(s,a,l);o||(o=u.start),s=u.end}return o?new Vt(o,s):new Vt(t)}remove(t){const e=t instanceof Vt?t:Vt._createOn(t);if(va(e,this.document),e.isCollapsed)return new ar(this.document);const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=o.offset-n.offset,l=s._removeChildren(n.offset,a);for(const f of l)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return e.start=u,e.end=u.clone(),new ar(this.document,l)}clear(t,e){va(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let a;if(s.is("element")&&e.isSimilar(s))a=Vt._createOn(s);else if(!o.nextPosition.isAfter(t.start)&&s.is("$textProxy")){const l=s.getAncestors().find(u=>u.is("element")&&e.isSimilar(u));l&&(a=Vt._createIn(l))}a&&(a.end.isAfter(t.end)&&(a.end=t.end),a.start.isBefore(t.start)&&(a.start=t.start),this.remove(a))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,s=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-s}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Gr))throw new v("view-writer-wrap-invalid-attribute",this.document);if(va(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,e);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new Vt(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof Gr))throw new v("view-writer-unwrap-invalid-attribute",this.document);if(va(t,this.document),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,o.offset,e),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Vt(l,u)}rename(t,e){const n=new il(this.document,t,e.getAttributes());return this.insert(Ct._createAfter(e),n),this.move(Vt._createIn(e),Ct._createAt(n,0)),this.remove(Vt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return Ct._createAt(t,e)}createPositionAfter(t){return Ct._createAfter(t)}createPositionBefore(t){return Ct._createBefore(t)}createRange(t,e){return new Vt(t,e)}createRangeOn(t){return Vt._createOn(t)}createRangeIn(t){return Vt._createIn(t)}createSelection(t,e,n){return new ro(t,e,n)}createSlot(t){if(!this._slotFactory)throw new v("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,s;if(o=n?gh(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new v("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(t,!0):t.parent.is("$text")?ph(t):t;const a=o._insertChild(s.offset,e);for(const p of e)this._addToClonedElementsGroup(p);const l=s.getShiftedBy(a),u=this.mergeAttributes(s);u.isEqual(s)||l.offset--;const f=this.mergeAttributes(l);return new Vt(u,f)}_wrapChildren(t,e,n,o){let s=e;const a=[];for(;s<n;){const u=t.getChild(s),f=u.is("$text"),p=u.is("attributeElement");if(p&&this._wrapAttributeElement(o,u))a.push(new Ct(t,s));else if(f||!p||E1(o,u)){const k=o._clone();u._remove(),k._appendChild(u),t._insertChild(s,k),this._addToClonedElementsGroup(k),a.push(new Ct(t,s))}else this._wrapChildren(u,0,u.childCount,o);s++}let l=0;for(const u of a)u.offset-=l,u.offset!=e&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Vt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let s=e;const a=[];for(;s<n;){const u=t.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(o)){const f=u.getChildren(),p=u.childCount;u._remove(),t._insertChild(s,f),this._removeFromClonedElementsGroup(u),a.push(new Ct(t,s),new Ct(t,s+p)),s+=p,n+=p-1}else this._unwrapAttributeElement(o,u)?(a.push(new Ct(t,s),new Ct(t,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,o),s++);else s++}let l=0;for(const u of a)u.offset-=l,!(u.offset==e||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Vt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,a=this._wrapChildren(s,n.offset,o.offset,e),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Vt(l,u)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Rp(t.clone());t.parent.is("$text")&&(t=ph(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const o=new Vt(t,t.getShiftedBy(1));this.wrap(o,e);const s=new Ct(n.parent,n.index);n._remove();const a=s.nodeBefore,l=s.nodeAfter;return a instanceof ue&&l instanceof ue?zp(a,l):Rp(s)}_wrapAttributeElement(t,e){if(!Fp(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Fp(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(va(t,this.document),t.isCollapsed){const u=this._breakAttributes(t.start,e);return new Vt(u,u)}const s=this._breakAttributes(o,e),a=s.parent.childCount,l=this._breakAttributes(n,e);return s.offset+=s.parent.childCount-a,new Vt(l,s)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new v("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new v("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new v("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&mh(o.parent)||mh(o))return t.clone();if(o.is("$text"))return this._breakAttributes(ph(t),e);if(n==o.childCount){const s=new Ct(o.parent,o.index+1);return this._breakAttributes(s,e)}if(n===0){const s=new Ct(o.parent,o.index);return this._breakAttributes(s,e)}{const s=o.index+1,a=o._clone();o.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const l=o.childCount-n,u=o._removeChildren(n,l);a._appendChild(u);const f=new Ct(o.parent,s);return this._breakAttributes(f,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const o of t.getChildren())this._addToClonedElementsGroup(o);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const o of t.getChildren())this._removeFromClonedElementsGroup(o);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function gh(i){let t=i.parent;for(;!mh(t);){if(!t)return;t=t.parent}return t}function E1(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function Rp(i){const t=i.nodeBefore;if(t&&t.is("$text"))return new Ct(t,t.data.length);const e=i.nodeAfter;return e&&e.is("$text")?new Ct(e,0):i}function ph(i){if(i.offset==i.parent.data.length)return new Ct(i.parent.parent,i.parent.index+1);if(i.offset===0)return new Ct(i.parent.parent,i.parent.index);const t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new ue(i.root.document,t)),new Ct(i.parent.parent,i.parent.index+1)}function zp(i,t){const e=i.data.length;return i._data+=t.data,t._remove(),new Ct(i,e)}function jp(i,t){for(const e of i){if(!D1.some(n=>e instanceof n))throw new v("view-writer-insert-invalid-node-type",t);e.is("$text")||jp(e.getChildren(),t)}}const D1=[ue,Gr,il,Pp,Lp,fh];function mh(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function va(i,t){const e=gh(i.start),n=gh(i.end);if(!e||!n||e!==n)throw new v("view-writer-invalid-range-container",t)}function Fp(i,t){return i.id===null&&t.id===null}function on(i){return Object.prototype.toString.call(i)=="[object Text]"}const Vp=i=>i.createTextNode("\xA0"),$p=i=>{const t=i.createElement("span");return t.dataset.ckeFiller=!0,t.innerText="\xA0",t},Hp=i=>{const t=i.createElement("br");return t.dataset.ckeFiller=!0,t},al="\u2060".repeat(7);function Nn(i){return on(i)&&i.data.substr(0,7)===al}function cl(i){return i.data.length==7&&Nn(i)}function bh(i){return Nn(i)?i.data.slice(7):i.data}function S1(i,t){if(t.keyCode==Jt.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;Nn(n)&&o<=7&&e.collapse(n,0)}}}function Up(i,t,e,n=!1){e=e||function(l,u){return l===u};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),s=Array.isArray(t)?t:Array.prototype.slice.call(t),a=function(l,u,f){const p=qp(l,u,f);if(p===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const k=Wp(l,p),y=Wp(u,p),T=qp(k,y,f),P=l.length-T,N=u.length-T;return{firstIndex:p,lastIndexOld:P,lastIndexNew:N}}(o,s,e);return n?function(l,u){const{firstIndex:f,lastIndexOld:p,lastIndexNew:k}=l;if(f===-1)return Array(u).fill("equal");let y=[];return f>0&&(y=y.concat(Array(f).fill("equal"))),k-f>0&&(y=y.concat(Array(k-f).fill("insert"))),p-f>0&&(y=y.concat(Array(p-f).fill("delete"))),k<u&&(y=y.concat(Array(u-k).fill("equal"))),y}(a,s.length):function(l,u){const f=[],{firstIndex:p,lastIndexOld:k,lastIndexNew:y}=u;return y-p>0&&f.push({index:p,type:"insert",values:l.slice(p,y)}),k-p>0&&f.push({index:p+(y-p),type:"delete",howMany:k-p}),f}(s,a)}function qp(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function Wp(i,t){return i.slice(t).reverse()}function wi(i,t,e){e=e||function(N,B){return N===B};const n=i.length,o=t.length;if(n>200||o>200||n+o>300)return wi.fastDiff(i,t,e,!0);let s,a;if(o<n){const N=i;i=t,t=N,s="delete",a="insert"}else s="insert",a="delete";const l=i.length,u=t.length,f=u-l,p={},k={};function y(N){const B=(k[N-1]!==void 0?k[N-1]:-1)+1,z=k[N+1]!==void 0?k[N+1]:-1,q=B>z?-1:1;p[N+q]&&(p[N]=p[N+q].slice(0)),p[N]||(p[N]=[]),p[N].push(B>z?s:a);let st=Math.max(B,z),Tt=st-N;for(;Tt<l&&st<u&&e(i[Tt],t[st]);)Tt++,st++,p[N].push("equal");return st}let T,P=0;do{for(T=-P;T<f;T++)k[T]=y(T);for(T=f+P;T>f;T--)k[T]=y(T);k[f]=y(f),P++}while(k[f]!==u);return p[f].slice(1)}function Gp(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function Kp(i){const t=i.parentNode;t&&t.removeChild(i)}function Kr(i){return i&&i.nodeType===Node.COMMENT_NODE}function Yr(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}wi.fastDiff=Up;var T1=g(6062),Ft=g.n(T1),Yp=g(9315),I1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Yp.Z,I1),Yp.Z.locals;class Qp{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),he.isBlink&&!he.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new v("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){let t;const e=!(he.isBlink&&!he.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=Ct._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;Nn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Zp(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){if(!this.domConverter.mapViewToDom(t))return;const e=Array.from(this.domConverter.mapViewToDom(t).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),o=this._diffNodeLists(e,n),s=this._findReplaceActions(o,e,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const l of s)if(l==="replace"){const u=a.equal+a.insert,f=a.equal+a.delete,p=t.getChild(u);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,e[f]),Kp(n[u]),a.equal++}else a[l]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?Ct._createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&on(e.parent)&&Nn(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Nn(t))throw new v("view-renderer-filler-was-lost",this);cl(t)?t.remove():t.data=t.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const l=a.findAncestor(u=>u.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const o=t.nodeBefore,s=t.nodeAfter;return!(o instanceof ue||s instanceof ue)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t),s=n.data;let a=o.data;const l=e.inlineFillerPosition;if(l&&l.parent==t.parent&&l.offset==t.index&&(a=al+a),s!=a){const u=Up(s,a);for(const f of u)f.type==="insert"?n.insertData(f.index,f.values.join("")):n.deleteData(f.index,f.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(s=>s.name),o=t.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(e,s,t.getAttribute(s),t);for(const s of n)t.hasAttribute(s)||this.domConverter.removeDomElementAttribute(e,s)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const o=e.inlineFillerPosition,s=this.domConverter.mapViewToDom(t).childNodes,a=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));o&&o.parent===t&&Zp(n.ownerDocument,a,o.offset);const l=this._diffNodeLists(s,a);let u=0;const f=new Set;for(const p of l)p==="delete"?(f.add(s[u]),Kp(s[u])):p==="equal"&&u++;u=0;for(const p of l)p==="insert"?(Gp(n,u,a[u]),u++):p==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[u])),u++);for(const p of f)p.parentNode||this.domConverter.unbindDomElement(p)}_diffNodeLists(t,e){return wi(t=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(t,this._fakeSelectionContainer),e,M1.bind(null,this.domConverter))}_findReplaceActions(t,e,n){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let o=[],s=[],a=[];const l={equal:0,insert:0,delete:0};for(const u of t)u==="insert"?a.push(n[l.equal+l.insert]):u==="delete"?s.push(e[l.equal+l.delete]):(o=o.concat(wi(s,a,Jp).map(f=>f==="equal"?"replace":f)),o.push("equal"),s=[],a=[]),l[u]++;return o.concat(wi(s,a,Jp).map(u=>u==="equal"?"replace":u))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(he.isBlink&&!he.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const l=a.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent="\xA0",l}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=e.getSelection(),s=e.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset),he.isGecko&&function(s,a){const l=s.parent;if(l.nodeType!=Node.ELEMENT_NODE||s.offset!=l.childNodes.length-1)return;const u=l.childNodes[s.offset];u&&u.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments)if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Zp(i,t,e){const n=t instanceof Array?t:t.childNodes,o=n[e];if(on(o))return o.data=al+o.data,o;{const s=i.createTextNode(al);return Array.isArray(t)?n.splice(e,0,s):Gp(t,e,s),s}}function Jp(i,t){return Yr(i)&&Yr(t)&&!on(i)&&!on(t)&&!Kr(i)&&!Kr(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function M1(i,t,e){return t===e||(on(t)&&on(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}tt(Qp,zt);const Ce={window,document};function kh(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function Xp(i){const t=[];let e=i;for(;e&&e.nodeType!=Node.DOCUMENT_NODE;)t.unshift(e),e=e.parentNode;return t}const P1=Hp(Ce.document),N1=Vp(Ce.document),B1=$p(Ce.document),ll="data-ck-unsafe-attribute-",tm="data-ck-unsafe-element";class dl{constructor(t,e={}){this.document=t,this.renderingMode=e.renderingMode||"editing",this.blockFillerMode=e.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ce.document:Ce.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new yn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new ro(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of t.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),l=[];let u;for(;u=a.nextNode();)l.push(u);for(const f of l){for(const k of f.getAttributeNames())this.setDomElementAttribute(f,k,f.getAttribute(k));const p=f.tagName.toLowerCase();this._shouldRenameElement(p)&&(om(p),f.replaceWith(this._createReplacementDomElement(p,f)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let n;if(t.is("documentFragment"))n=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(n,t);else{if(t.is("uiElement"))return n=t.name==="$comment"?this._domDocument.createComment(t.getCustomProperty("$rawContent")):t.render(this._domDocument,this),e.bind&&this.bindElements(n,t),n;this._shouldRenameElement(t.name)?(om(t.name),n=this._createReplacementDomElement(t.name)):n=t.hasAttribute("xmlns")?this._domDocument.createElementNS(t.getAttribute("xmlns"),t.name):this._domDocument.createElement(t.name),t.is("rawElement")&&t.render(n,this),e.bind&&this.bindElements(n,t);for(const o of t.getAttributeKeys())this.setDomElementAttribute(n,o,t.getAttribute(o),t)}if(e.withChildren!==!1)for(const o of this.viewChildrenToDom(t,e))n.appendChild(o);return n}}setDomElementAttribute(t,e,n,o=null){const s=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);s||M("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),t.hasAttribute(e)&&!s?t.removeAttribute(e):t.hasAttribute(ll+e)&&s&&t.removeAttribute(ll+e),t.setAttribute(s?e:ll+e,n)}removeDomElementAttribute(t,e){e!=tm&&(t.removeAttribute(e),t.removeAttribute(ll+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const s of t.getChildren()){n===o&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,e):(a&&M("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,e)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=this._domDocument.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return Nn(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;s=n.childNodes[0]}else{const a=t.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(t.nodeBefore),!o)return null;n=o.parentNode,s=o.nextSibling}return on(s)&&Nn(s)?{parent:s,offset:7}:{parent:n,offset:o?kh(o)+1:0}}}domToView(t,e={}){if(this.isBlockFiller(t))return null;const n=this.getHostViewElement(t);if(n)return n;if(Kr(t)&&e.skipComments)return null;if(on(t)){if(cl(t))return null;{const o=this._processDataFromDomText(t);return o===""?null:new ue(this.document,o)}}{if(this.mapDomToView(t))return this.mapDomToView(t);let o;if(this.isDocumentFragment(t))o=new ar(this.document),e.bind&&this.bindDocumentFragments(t,o);else{o=this._createViewElement(t,e),e.bind&&this.bindElements(t,o);const s=t.attributes;if(s)for(let a=s.length,l=0;l<a;l++)o._setAttribute(s[l].name,s[l].value);if(this._isViewElementWithRawContent(o,e)||Kr(t)){const a=Kr(t)?t.data:t.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(t),o}}if(e.withChildren!==!1)for(const s of this.domChildrenToView(t,e))o._appendChild(s);return o}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const o=t.childNodes[n],s=this.domToView(o,e);s!==null&&(yield s)}}domSelectionToView(t){if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;on(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){const s=t.getRangeAt(o),a=this.domRangeToView(s);a&&n.push(a)}return new ro(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Vt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,kh(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return Ct._createBefore(n);if(on(t)){if(cl(t))return this.domPositionToView(t.parentNode,kh(t));const o=this.findCorrespondingViewText(t);let s=e;return o?(Nn(t)&&(s-=7,s=s<0?0:s),new Ct(o,s)):null}if(e===0){const o=this.mapDomToView(t);if(o)return new Ct(o,0)}else{const o=t.childNodes[e-1],s=on(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new Ct(s.parent,s.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(cl(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof ue?o.nextSibling:null}else{const o=this.mapDomToView(t.parentNode);if(o){const s=o.getChild(0);return s instanceof ue?s:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:o}=Ce.window,s=[];em(e,a=>{const{scrollLeft:l,scrollTop:u}=a;s.push([l,u])}),e.focus(),em(e,a=>{const[l,u]=s.shift();a.scrollLeft=l,a.scrollTop=u}),Ce.window.scrollTo(n,o)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(P1):!(t.tagName!=="BR"||!nm(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(B1)||function(e,n){return e.isEqualNode(N1)&&nm(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=Xp(t);for(e.pop();e.length;){const n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Vp(this._domDocument);case"markedNbsp":return $p(this._domDocument);case"br":return Hp(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(on(t)&&Nn(t)&&e<7||this.isElement(t)&&Nn(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e="\xA0"+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+"\xA0")}return e.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_processDataFromDomText(t){let e=t.data;if(function(f,p){return Xp(f).some(k=>k.tagName&&p.includes(k.tagName.toLowerCase()))}(t,this.preElements))return bh(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),s=this._checkShouldLeftTrimDomText(t,n),a=this._checkShouldRightTrimDomText(t,o);s&&(e=e.replace(/^ /,"")),a&&(e=e.replace(/ $/,"")),e=bh(new Text(e)),e=e.replace(/ \u00A0/g,"  ");const l=o&&this.isElement(o)&&o.tagName!="BR",u=o&&on(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(e)||!o||l||u)&&(e=e.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(e=e.replace(/^\u00A0/," ")),e}_checkShouldLeftTrimDomText(t,e){return!e||(this.isElement(e)?e.tagName==="BR":!this._encounteredRawContentDomNodes.has(t.previousSibling)&&/[^\S\u00A0]/.test(e.data.charAt(e.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!Nn(t)}_getTouchingInlineViewNode(t,e){const n=new rr({startPosition:e?Ct._createAfter(t):Ct._createBefore(t),direction:e?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"firstChild":"lastChild",o=e?"nextSibling":"previousSibling";let s=!0;do if(!s&&t[n]?t=t[n]:t[o]?(t=t[o],s=!1):(t=t.parentNode,s=!0),!t||this._isBlockElement(t))return null;while(!on(t)&&t.tagName!="BR"&&!this._isInlineObjectElement(t));return t}_isBlockElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isInlineObjectElement(t){return this.isElement(t)&&this.inlineObjectElements.includes(t.tagName.toLowerCase())}_createViewElement(t,e){if(Kr(t))return new fh(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new Wn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e=null){const n=this._domDocument.createElement("span");if(n.setAttribute(tm,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function em(i,t){for(;i&&i!=Ce.document;)t(i),i=i.parentNode}function nm(i,t){const e=i.parentNode;return e&&e.tagName&&t.includes(e.tagName.toLowerCase())}function om(i){i==="script"&&M("domconverter-unsafe-script-element-detected"),i==="style"&&M("domconverter-unsafe-style-element-detected")}function ul(i){const t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}const wh=Ep(function(i,t){hi(t,pi(t),i)}),L1=wh({},V,{listenTo(i,t,e,n={}){if(Yr(i)||ul(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},s=this._getProxyEmitter(i,o)||new im(i,o);this.listenTo(s,t,e,n)}else V.listenTo.call(this,i,t,e,n)},stopListening(i,t,e){if(Yr(i)||ul(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,t,e)}else V.stopListening.call(this,i,t,e)},_getProxyEmitter(i,t){return function(e,n){const o=e[K];return o&&o[n]?o[n].emitter:null}(this,rm(i,t))},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(i,t)).filter(t=>!!t)}}),Aa=L1;class im{constructor(t,e){U(this,rm(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),V._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){V._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function rm(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=x())}(i);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}tt(im,V);class vo{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}tt(vo,Aa);const O1=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},R1=function(i){return this.__data__.has(i)};function hl(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new zr;++t<e;)this.add(i[t])}hl.prototype.add=hl.prototype.push=O1,hl.prototype.has=R1;const z1=hl,j1=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},F1=function(i,t){return i.has(t)},sm=function(i,t,e,n,o,s){var a=1&e,l=i.length,u=t.length;if(l!=u&&!(a&&u>l))return!1;var f=s.get(i),p=s.get(t);if(f&&p)return f==t&&p==i;var k=-1,y=!0,T=2&e?new z1:void 0;for(s.set(i,t),s.set(t,i);++k<l;){var P=i[k],N=t[k];if(n)var B=a?n(N,P,k,t,i,s):n(P,N,k,i,t,s);if(B!==void 0){if(B)continue;y=!1;break}if(T){if(!j1(t,function(z,q){if(!F1(T,q)&&(P===z||o(P,z,e,n,s)))return T.push(q)})){y=!1;break}}else if(P!==N&&!o(P,N,e,n,s)){y=!1;break}}return s.delete(i),s.delete(t),y},V1=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},$1=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var am=rt?rt.prototype:void 0,_h=am?am.valueOf:void 0;const H1=function(i,t,e,n,o,s,a){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!s(new $r(i),new $r(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return He(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var l=V1;case"[object Set]":var u=1&n;if(l||(l=$1),i.size!=t.size&&!u)return!1;var f=a.get(i);if(f)return f==t;n|=2,a.set(i,t);var p=sm(l(i),l(t),n,o,s,a);return a.delete(i),p;case"[object Symbol]":if(_h)return _h.call(i)==_h.call(t)}return!1};var U1=Object.prototype.hasOwnProperty;const q1=function(i,t,e,n,o,s){var a=1&e,l=tr(i),u=l.length;if(u!=tr(t).length&&!a)return!1;for(var f=u;f--;){var p=l[f];if(!(a?p in t:U1.call(t,p)))return!1}var k=s.get(i),y=s.get(t);if(k&&y)return k==t&&y==i;var T=!0;s.set(i,t),s.set(t,i);for(var P=a;++f<u;){var N=i[p=l[f]],B=t[p];if(n)var z=a?n(B,N,p,t,i,s):n(N,B,p,i,t,s);if(!(z===void 0?N===B||o(N,B,e,n,s):z)){T=!1;break}P||(P=p=="constructor")}if(T&&!P){var q=i.constructor,st=t.constructor;q==st||!("constructor"in i)||!("constructor"in t)||typeof q=="function"&&q instanceof q&&typeof st=="function"&&st instanceof st||(T=!1)}return s.delete(i),s.delete(t),T};var cm="[object Arguments]",lm="[object Array]",fl="[object Object]",dm=Object.prototype.hasOwnProperty;const W1=function(i,t,e,n,o,s){var a=nn(i),l=nn(t),u=a?lm:er(i),f=l?lm:er(t),p=(u=u==cm?fl:u)==fl,k=(f=f==cm?fl:f)==fl,y=u==f;if(y&&Zi(i)){if(!Zi(t))return!1;a=!0,p=!1}if(y&&!p)return s||(s=new ui),a||Js(i)?sm(i,t,e,n,o,s):H1(i,t,u,e,n,o,s);if(!(1&e)){var T=p&&dm.call(i,"__wrapped__"),P=k&&dm.call(t,"__wrapped__");if(T||P){var N=T?i.value():i,B=P?t.value():t;return s||(s=new ui),o(N,B,e,n,s)}}return!!y&&(s||(s=new ui),q1(i,t,e,n,o,s))},um=function i(t,e,n,o,s){return t===e||(t==null||e==null||!Ht(t)&&!Ht(e)?t!=t&&e!=e:W1(t,e,n,o,i,s))},G1=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?um(i,t,void 0,e):!!n};class hm extends vo{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Map,o=new Set;for(const f of t)if(f.type==="childList"){const p=e.mapDomToView(f.target);if(p&&(p.is("uiElement")||p.is("rawElement")))continue;p&&!this._isBogusBrMutation(f)&&o.add(p)}for(const f of t){const p=e.mapDomToView(f.target);if((!p||!p.is("uiElement")&&!p.is("rawElement"))&&f.type==="characterData"){const k=e.findCorrespondingViewText(f.target);k&&!o.has(k.parent)?n.set(k,{type:"text",oldText:k.data,newText:bh(f.target),node:k}):!k&&Nn(f.target)&&o.add(e.mapDomToView(f.target.parentNode))}}const s=[];for(const f of n.values())this.renderer.markToSync("text",f.node),s.push(f);for(const f of o){const p=e.mapViewToDom(f),k=Array.from(f.getChildren()),y=Array.from(e.domChildrenToView(p,{withChildren:!1}));G1(k,y,u)||(this.renderer.markToSync("children",f),s.push({type:"children",oldChildren:k,newChildren:y,node:f}))}const a=t[0].target.ownerDocument.getSelection();let l=null;if(a&&a.anchorNode){const f=e.domPositionToView(a.anchorNode,a.anchorOffset),p=e.domPositionToView(a.focusNode,a.focusOffset);f&&p&&(l=new ro(f),l.setFocus(p))}function u(f,p){if(!Array.isArray(f))return f===p||!(!f.is("$text")||!p.is("$text"))&&f.data===p.data}s.length&&(this.document.fire("mutations",s,l),this.view.forceRender())}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class vh{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,wh(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class _i extends vo{constructor(t){super(t),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new vh(this.view,e,n))}}class K1 extends _i{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return _o(this)}})}}const Ah=function(){return ot.Date.now()};var Y1=/\s/;const Q1=function(i){for(var t=i.length;t--&&Y1.test(i.charAt(t)););return t};var Z1=/^\s+/;const J1=function(i){return i&&i.slice(0,Q1(i)+1).replace(Z1,"")};var X1=/^[-+]0x[0-9a-f]+$/i,tx=/^0b[01]+$/i,ex=/^0o[0-7]+$/i,nx=parseInt;const fm=function(i){if(typeof i=="number")return i;if(io(i))return NaN;if(Bt(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=Bt(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=J1(i);var e=tx.test(i);return e||ex.test(i)?nx(i.slice(2),e?2:8):X1.test(i)?NaN:+i};var ox=Math.max,ix=Math.min;const gl=function(i,t,e){var n,o,s,a,l,u,f=0,p=!1,k=!1,y=!0;if(typeof i!="function")throw new TypeError("Expected a function");function T(st){var Tt=n,jt=o;return n=o=void 0,f=st,a=i.apply(jt,Tt)}function P(st){return f=st,l=setTimeout(B,t),p?T(st):a}function N(st){var Tt=st-u;return u===void 0||Tt>=t||Tt<0||k&&st-f>=s}function B(){var st=Ah();if(N(st))return z(st);l=setTimeout(B,function(Tt){var jt=t-(Tt-u);return k?ix(jt,s-(Tt-f)):jt}(st))}function z(st){return l=void 0,y&&n?T(st):(n=o=void 0,a)}function q(){var st=Ah(),Tt=N(st);if(n=arguments,o=this,u=st,Tt){if(l===void 0)return P(u);if(k)return clearTimeout(l),l=setTimeout(B,t),T(u)}return l===void 0&&(l=setTimeout(B,t)),a}return t=fm(t)||0,Bt(e)&&(p=!!e.leading,s=(k="maxWait"in e)?ox(fm(e.maxWait)||0,t):s,y="trailing"in e?!!e.trailing:y),q.cancel=function(){l!==void 0&&clearTimeout(l),f=0,n=u=o=l=void 0},q.flush=function(){return l===void 0?a:z(Ah())},q};class rx extends vo{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=gl(e=>this.document.fire("selectionChangeDone",e),200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new ro(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Jt.arrowleft&&t!=Jt.arrowup||n.setTo(n.getFirstPosition()),t!=Jt.arrowright&&t!=Jt.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class sx extends vo{constructor(t){super(t),this.mutationObserver=t.getObserver(hm),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=gl(e=>this.document.fire("selectionChangeDone",e),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=gl(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest"}),this.listenTo(t,"keyup",n,{priority:"highest"}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest"}),this.listenTo(e,"selectionchange",(o,s)=>{this._handleSelectionChange(s,e),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ax extends _i{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.change(()=>{}),50)}),e.on("blur",(n,o)=>{const s=e.selection.editableElement;s!==null&&s!==o.target||(e.isFocused=!1,t.change(()=>{}))})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class cx extends _i{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}class lx extends _i{constructor(t){super(t),this.domEventType=["beforeinput"]}onDomEvent(t){this.fire(t.type,t)}}class dx{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}const gm=function(i){return typeof i=="string"||!nn(i)&&Ht(i)&&bt(i)=="[object String]"};function pm(i,t,e={},n=[]){const o=e&&e.xmlns,s=o?i.createElementNS(o,t):i.createElement(t);for(const a in e)s.setAttribute(a,e[a]);!gm(n)&&An(n)||(n=[n]);for(let a of n)gm(a)&&(a=i.createTextNode(a)),s.appendChild(a);return s}class De{constructor(t,e){De._observerInstance||De._createObserver(),this._element=t,this._callback=e,De._addElementCallback(t,e),De._observerInstance.observe(t)}destroy(){De._deleteElementCallback(this._element,this._callback)}static _addElementCallback(t,e){De._elementCallbacks||(De._elementCallbacks=new Map);let n=De._elementCallbacks.get(t);n||(n=new Set,De._elementCallbacks.set(t,n)),n.add(e)}static _deleteElementCallback(t,e){const n=De._getElementCallbacks(t);n&&(n.delete(e),n.size||(De._elementCallbacks.delete(t),De._observerInstance.unobserve(t))),De._elementCallbacks&&!De._elementCallbacks.size&&(De._observerInstance=null,De._elementCallbacks=null)}static _getElementCallbacks(t){return De._elementCallbacks?De._elementCallbacks.get(t):null}static _createObserver(){De._observerInstance=new Ce.window.ResizeObserver(t=>{for(const e of t){const n=De._getElementCallbacks(e.target);if(n)for(const o of n)o(e)}})}}function Qe(i){const t=i.next();return t.done?null:t.value}De._observerInstance=null,De._elementCallbacks=null;class Ch{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new v("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}tt(Ch,Aa),tt(Ch,zt);const Ao=Ch;class Wo{constructor(){this._listener=Object.create(Aa)}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+_o(n),n)})}set(t,e,n={}){const o=uh(t),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,l)=>{e(l,()=>{l.preventDefault(),l.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(t){return!!this._listener.fire("_keydown:"+_o(t),t)}destroy(){this._listener.stopListening()}}class ux extends vo{constructor(t){super(t),this.document.on("keydown",(e,n)=>{if(this.isEnabled&&((o=n.keyCode)==Jt.arrowright||o==Jt.arrowleft||o==Jt.arrowup||o==Jt.arrowdown)){const s=new ka(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&e.stop()}var o})}observe(){}}class hx extends vo{constructor(t){super(t);const e=this.document;e.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=Jt.tab||o.ctrlKey)return;const s=new ka(e,"tab",e.selection.getFirstRange());e.fire(s,o),s.stop.called&&n.stop()})}observe(){}}function pl(i){return Object.prototype.toString.apply(i)=="[object Range]"}function mm(i){const t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}const bm=["top","right","bottom","left","width","height"];class we{constructor(t){const e=pl(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),wm(t)||e)if(e){const n=we.getDomRangeRects(t);ml(this,we.getBoundingRect(n))}else ml(this,t.getBoundingClientRect());else if(ul(t)){const{innerWidth:n,innerHeight:o}=t;ml(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else ml(this,t)}clone(){return new we(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new we(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!km(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!km(n);){const o=new we(n),s=e.getIntersection(o);if(!s)return null;s.getArea()<e.getArea()&&(e=s),n=n.parentNode}}return e}isEqual(t){for(const e of bm)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(ul(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const s=mm(t);e=t.offsetWidth-t.clientWidth-s.left-s.right,n=t.offsetHeight-t.clientHeight-s.top-s.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const o of n)e.push(new we(o));else{let o=t.startContainer;on(o)&&(o=o.parentNode);const s=new we(o.getBoundingClientRect());s.right=s.left,s.width=0,e.push(s)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new we(e))}}function ml(i,t){for(const e of bm)i[e]=t[e]}function km(i){return!!wm(i)&&i===i.ownerDocument.body}function wm(i){return Ho(i)}function fx(i,t,e){const n=t.clone().moveBy(0,e),o=t.clone().moveBy(0,-e),s=new we(i).excludeScrollbarsAndBorders();if(![o,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:l}=i;vm(o,s)?l-=s.top-t.top+e:_m(n,s)&&(l+=t.bottom-s.bottom+e),Am(t,s)?a-=s.left-t.left+e:Cm(t,s)&&(a+=t.right-s.right+e),i.scrollTo(a,l)}}function gx(i,t){const e=yh(i);let n,o;for(;i!=e.document.body;)o=t(),n=new we(i).excludeScrollbarsAndBorders(),n.contains(o)||(vm(o,n)?i.scrollTop-=n.top-o.top:_m(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Am(o,n)?i.scrollLeft-=n.left-o.left:Cm(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function _m(i,t){return i.bottom>t.bottom}function vm(i,t){return i.top<t.top}function Am(i,t){return i.left<t.left}function Cm(i,t){return i.right>t.right}function yh(i){return pl(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function px(i){if(pl(i)){let t=i.commonAncestorContainer;return on(t)&&(t=t.parentNode),t}return i.parentNode}function ym(i,t){const e=yh(i),n=new we(i);if(e===t)return n;{let o=e;for(;o!=t;){const s=o.frameElement,a=new we(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}class xm{constructor(t){this.document=new _a(t),this.domConverter=new dl(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new Qp(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Op(this.document),this.addObserver(hm),this.addObserver(sx),this.addObserver(ax),this.addObserver(K1),this.addObserver(rx),this.addObserver(cx),this.addObserver(ux),this.addObserver(hx),he.isAndroid&&this.addObserver(lx),this.document.on("arrowKey",S1,{priority:"low"}),C1(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase();const o={};for(const{name:a,value:l}of Array.from(t.attributes))o[a]=l,a==="class"?this._writer.addClass(l.split(" "),n):this._writer.setAttribute(a,l,n);this._initialDomRootAttributes.set(t,o);const s=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(a,l)=>this._renderer.markToSync("children",l)),n.on("change:attributes",(a,l)=>this._renderer.markToSync("attributes",l)),n.on("change:text",(a,l)=>this._renderer.markToSync("text",l)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(t,e)}detachDomRoot(t){const e=this.domRoots.get(t);Array.from(e.attributes).forEach(({name:o})=>e.removeAttribute(o));const n=this._initialDomRootAttributes.get(e);for(const o in n)e.setAttribute(o,n[o]);this.domRoots.delete(t),this.domConverter.unbindDomElement(e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[n,o]of this.domRoots)e.observe(o,n);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&function({target:e,viewportOffset:n=0}){const o=yh(e);let s=o,a=null;for(;s;){let l;l=px(s==o?e:a),gx(l,()=>ym(e,s));const u=ym(e,s);if(fx(s,u,n),s.parent!=s){if(a=s.frameElement,s=s.parent,!a)return}else s=null}}({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t&&(this.domConverter.focus(t),this.forceRender())}}change(t){if(this.isRenderingInProgress||this._postFixersInProgress)throw new v("cannot-change-view-tree",this);try{if(this._ongoingChange)return t(this._writer);this._ongoingChange=!0;const e=t(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),e}catch(e){v.rethrowUnexpectedError(e,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.document.destroy(),this.stopListening()}createPositionAt(t,e){return Ct._createAt(t,e)}createPositionAfter(t){return Ct._createAfter(t)}createPositionBefore(t){return Ct._createBefore(t)}createRange(t,e){return new Vt(t,e)}createRangeOn(t){return Vt._createOn(t)}createRangeIn(t){return Vt._createIn(t)}createSelection(t,e,n){return new ro(t,e,n)}_disableRendering(t){this._renderingDisabled=t,t==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}tt(xm,zt);class cr{constructor(t){this.parent=null,this._attrs=Pn(t)}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))===null)throw new v("model-node-not-found-in-parent",this);return t}get startOffset(){let t;if(!this.parent)return null;if((t=this.parent.getChildStartOffset(this))===null)throw new v("model-node-not-found-in-parent",this);return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Ye(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=Array.from(this._attrs).reduce((e,n)=>(e[n[0]]=n[1],e),{})),t}is(t){return t==="node"||t==="model:node"}_clone(){return new cr(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=Pn(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}}class _e extends cr{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return t==="$text"||t==="model:$text"||t==="text"||t==="model:text"||t==="node"||t==="model:node"}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new _e(this.data,this.getAttributes())}static fromJSON(t){return new _e(t.data,t.attributes)}}class Co{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new v("model-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.offsetSize)throw new v("model-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(t){return t==="$textProxy"||t==="model:$textProxy"||t==="textProxy"||t==="model:textProxy"}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Qr{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return e==-1?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return e===null?null:this._nodes.slice(0,e).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new v("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new v("model-nodelist-offset-out-of-bounds",this,{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const n of e)if(!(n instanceof cr))throw new v("model-nodelist-insertnodes-not-node",this);this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class fe extends cr{constructor(t,e,n){super(e),this.name=t,this._children=new Qr,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(t,e=null){return e?e===this.name&&(t==="element"||t==="model:element"):t==="element"||t==="model:element"||t==="node"||t==="model:node"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}findAncestor(t,e={includeSelf:!1}){let n=e.includeSelf?this:this.parent;for(;n;){if(n.name===t)return n;n=n.parent}return null}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(n=>n._clone(!0)):null;return new fe(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new _e(o)]:(An(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new _e(s):s instanceof Co?new _e(s.data,s.getAttributes()):s))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(fe.fromJSON(n)):e.push(_e.fromJSON(n))}return new fe(t.name,t.attributes,e)}}class Go{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new v("model-tree-walker-no-start-position",null);const e=t.direction||"forward";if(e!="forward"&&e!="backward")throw new v("model-tree-walker-unknown-direction",t,{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=t.startPosition.clone():this.position=ht._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,s;do o=this.position,s=this._visitedParent,{done:e,value:n}=this.next();while(!e&&t(n));e||(this.position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const o=Ca(e,n),s=o||Em(e,n,o);if(s instanceof fe)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=s),this.position=e,lr("elementStart",s,t,e,1);if(s instanceof _e){let a;if(this.singleCharacters)a=1;else{let f=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<f&&(f=this.boundaries.end.offset),a=f-e.offset}const l=e.offset-s.startOffset,u=new Co(s,l,a);return e.offset+=a,this.position=e,lr("text",u,t,e,a)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():lr("elementEnd",n,t,e)}_previous(){const t=this.position,e=this.position.clone(),n=this._visitedParent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const o=e.parent,s=Ca(e,o),a=s||Dm(e,o,s);if(a instanceof fe)return e.offset--,this.shallow?(this.position=e,lr("elementStart",a,t,e,1)):(e.path.push(a.maxOffset),this.position=e,this._visitedParent=a,this.ignoreElementEnd?this._previous():lr("elementEnd",a,t,e));if(a instanceof _e){let l;if(this.singleCharacters)l=1;else{let p=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>p&&(p=this.boundaries.start.offset),l=e.offset-p}const u=e.offset-a.startOffset,f=new Co(a,u-l,l);return e.offset-=l,this.position=e,lr("text",f,t,e,l)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,lr("elementStart",n,t,e,1)}}function lr(i,t,e,n,o){return{done:!1,value:{type:i,item:t,previousPosition:e,nextPosition:n,length:o}}}class ht{constructor(t,e,n="toNone"){if(!t.is("element")&&!t.is("documentFragment"))throw new v("model-position-root-invalid",t);if(!(e instanceof Array)||e.length===0)throw new v("model-position-path-incorrect-format",t,{path:e});t.is("rootElement")?e=e.slice():(e=[...t.getPath(),...e],t=t.root),this.root=t,this.path=e,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)if(t=t.getChild(t.offsetToIndex(this.path[e])),!t)throw new v("model-position-path-incorrect",this,{position:this});if(t.is("$text"))throw new v("model-position-path-incorrect",this,{position:this});return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Ca(this,this.parent)}get nodeAfter(){const t=this.parent;return Em(this,t,Ca(this,t))}get nodeBefore(){const t=this.parent;return Dm(this,t,Ca(this,t))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=Ye(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Go(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const t=this.parent;return t.is("documentFragment")?[t]:t.getAncestors({includeSelf:!0})}findAncestor(t){const e=this.parent;return e.is("element")?e.findAncestor(t,{includeSelf:!0}):null}getCommonPath(t){if(this.root!=t.root)return[];const e=Ye(this.path,t.path),n=typeof e=="string"?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}getShiftedBy(t){const e=this.clone(),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return this.compareWith(t)=="after"}isBefore(t){return this.compareWith(t)=="before"}isEqual(t){return this.compareWith(t)=="same"}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=ht._createAt(this),n=ht._createAt(t);break;case"after":e=ht._createAt(t),n=ht._createAt(this);break;default:return!1}let o=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==o.maxOffset)return!1;e.path=e.path.slice(0,-1),o=o.parent,e.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(t){return t==="position"||t==="model:position"}hasSameParentAs(t){return this.root!==t.root?!1:Ye(this.getParentPath(),t.getParentPath())=="same"}getTransformedByOperation(t){let e;switch(t.type){case"insert":e=this._getTransformedByInsertOperation(t);break;case"move":case"remove":case"reinsert":e=this._getTransformedByMoveOperation(t);break;case"split":e=this._getTransformedBySplitOperation(t);break;case"merge":e=this._getTransformedByMergeOperation(t);break;default:e=ht._createAt(this)}return e}_getTransformedByInsertOperation(t){return this._getTransformedByInsertion(t.position,t.howMany)}_getTransformedByMoveOperation(t){return this._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany)}_getTransformedBySplitOperation(t){const e=t.movedRange;return e.containsPosition(this)||e.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(t.splitPosition,t.moveTargetPosition):t.graveyardPosition?this._getTransformedByMove(t.graveyardPosition,t.insertionPosition,1):this._getTransformedByInsertion(t.insertionPosition,1)}_getTransformedByMergeOperation(t){const e=t.movedRange;let n;return e.containsPosition(this)||e.start.isEqual(this)?(n=this._getCombined(t.sourcePosition,t.targetPosition),t.sourcePosition.isBefore(t.targetPosition)&&(n=n._getTransformedByDeletion(t.deletionPosition,1))):n=this.isEqual(t.deletionPosition)?ht._createAt(t.deletionPosition):this._getTransformedByMove(t.deletionPosition,t.graveyardPosition,1),n}_getTransformedByDeletion(t,e){const n=ht._createAt(this);if(this.root!=t.root)return n;if(Ye(t.getParentPath(),this.getParentPath())=="same"){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if(Ye(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e){const n=ht._createAt(this);if(this.root!=t.root)return n;if(Ye(t.getParentPath(),this.getParentPath())=="same")(t.offset<this.offset||t.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=e);else if(Ye(t.getParentPath(),this.getParentPath())=="prefix"){const o=t.path.length-1;t.offset<=this.path[o]&&(n.path[o]+=e)}return n}_getTransformedByMove(t,e,n){if(e=e._getTransformedByDeletion(t,n),t.isEqual(e))return ht._createAt(this);const o=this._getTransformedByDeletion(t,n);return o===null||t.isEqual(this)&&this.stickiness=="toNext"||t.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(t,e):o._getTransformedByInsertion(e,n)}_getCombined(t,e){const n=t.path.length-1,o=ht._createAt(e);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-t.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(t,e,n="toNone"){if(t instanceof ht)return new ht(t.root,t.path,t.stickiness);{const o=t;if(e=="end")e=o.maxOffset;else{if(e=="before")return this._createBefore(o,n);if(e=="after")return this._createAfter(o,n);if(e!==0&&!e)throw new v("model-createpositionat-offset-required",[this,t])}if(!o.is("element")&&!o.is("documentFragment"))throw new v("model-position-parent-incorrect",[this,t]);const s=o.getPath();return s.push(e),new this(o.root,s,n)}}static _createAfter(t,e){if(!t.parent)throw new v("model-position-after-root",[this,t],{root:t});return this._createAt(t.parent,t.endOffset,e)}static _createBefore(t,e){if(!t.parent)throw new v("model-position-before-root",t,{root:t});return this._createAt(t.parent,t.startOffset,e)}static fromJSON(t,e){if(t.root==="$graveyard"){const n=new ht(e.graveyard,t.path);return n.stickiness=t.stickiness,n}if(!e.getRoot(t.root))throw new v("model-position-fromjson-no-root",e,{rootName:t.root});return new ht(e.getRoot(t.root),t.path,t.stickiness)}}function Ca(i,t){const e=t.getChild(t.offsetToIndex(i.offset));return e&&e.is("$text")&&e.startOffset<i.offset?e:null}function Em(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset))}function Dm(i,t,e){return e!==null?null:t.getChild(t.offsetToIndex(i.offset)-1)}class X{constructor(t,e=null){this.start=ht._createAt(t),this.end=e?ht._createAt(e):ht._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new Go({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ye(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){const e=ht._createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}is(t){return t==="range"||t==="model:range"}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new X(this.start,t.start)),this.containsPosition(t.end)&&e.push(new X(t.end,this.end))):e.push(new X(this.start,this.end)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new X(e,n)}return null}getJoined(t,e=!1){let n=this.isIntersecting(t);if(n||(n=this.start.isBefore(t.start)?e?this.end.isTouching(t.start):this.end.isEqual(t.start):e?t.end.isTouching(this.start):t.end.isEqual(this.start)),!n)return null;let o=this.start,s=this.end;return t.start.isBefore(o)&&(o=t.start),t.end.isAfter(s)&&(s=t.end),new X(o,s)}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=ht._createAt(this.start);let o=n.parent;for(;n.path.length>e+1;){const s=o.maxOffset-n.offset;s!==0&&t.push(new X(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],a=s-n.offset;a!==0&&t.push(new X(n,n.getShiftedBy(a))),n.offset=s,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new Go(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Go(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Go(t);yield e.position;for(const n of e)yield n.nextPosition}getTransformedByOperation(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new X(this.start,this.end)]}getTransformedByOperations(t){const e=[new X(this.start,this.end)];for(const n of t)for(let o=0;o<e.length;o++){const s=e[o].getTransformedByOperation(n);e.splice(o,1,...s),o+=s.length-1}for(let n=0;n<e.length;n++){const o=e[n];for(let s=n+1;s<e.length;s++){const a=e[s];(o.containsRange(a)||a.containsRange(o)||o.isEqual(a))&&e.splice(s,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const t=this.start.nodeAfter,e=this.end.nodeBefore;return t&&t.is("element")&&t===e?t:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(t,e=!1){return this._getTransformedByInsertion(t.position,t.howMany,e)}_getTransformedByMoveOperation(t,e=!1){const n=t.sourcePosition,o=t.howMany,s=t.targetPosition;return this._getTransformedByMove(n,s,o,e)}_getTransformedBySplitOperation(t){const e=this.start._getTransformedBySplitOperation(t);let n=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(n=this.end.getShiftedBy(1)),e.root!=n.root&&(n=this.end.getShiftedBy(-1)),new X(e,n)}_getTransformedByMergeOperation(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new X(this.start);let e=this.start._getTransformedByMergeOperation(t),n=this.end._getTransformedByMergeOperation(t);return e.root!=n.root&&(n=this.end.getShiftedBy(-1)),e.isAfter(n)?(t.sourcePosition.isBefore(t.targetPosition)?(e=ht._createAt(n),e.offset=0):(t.deletionPosition.isEqual(e)||(n=t.deletionPosition),e=t.targetPosition),new X(e,n)):new X(e,n)}_getTransformedByInsertion(t,e,n=!1){if(n&&this.containsPosition(t))return[new X(this.start,t),new X(t.getShiftedBy(e),this.end._getTransformedByInsertion(t,e))];{const o=new X(this.start,this.end);return o.start=o.start._getTransformedByInsertion(t,e),o.end=o.end._getTransformedByInsertion(t,e),[o]}}_getTransformedByMove(t,e,n,o=!1){if(this.isCollapsed){const k=this.start._getTransformedByMove(t,e,n);return[new X(k)]}const s=X._createFromPositionAndShift(t,n),a=e._getTransformedByDeletion(t,n);if(this.containsPosition(e)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const k=this.start._getTransformedByMove(t,e,n),y=this.end._getTransformedByMove(t,e,n);return[new X(k,y)]}let l;const u=this.getDifference(s);let f=null;const p=this.getIntersection(s);if(u.length==1?f=new X(u[0].start._getTransformedByDeletion(t,n),u[0].end._getTransformedByDeletion(t,n)):u.length==2&&(f=new X(this.start,this.end._getTransformedByDeletion(t,n))),l=f?f._getTransformedByInsertion(a,n,p!==null||o):[],p){const k=new X(p.start._getCombined(s.start,a),p.end._getCombined(s.start,a));l.length==2?l.splice(1,0,k):l.push(k)}return l}_getTransformedByDeletion(t,e){let n=this.start._getTransformedByDeletion(t,e),o=this.end._getTransformedByDeletion(t,e);return n==null&&o==null?null:(n==null&&(n=t),o==null&&(o=t),new X(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return new this(ht._createAt(t,0),ht._createAt(t,t.maxOffset))}static _createOn(t){return this._createFromPositionAndShift(ht._createBefore(t),t.offsetSize)}static _createFromRanges(t){if(t.length===0)throw new v("range-create-from-ranges-empty-array",null);if(t.length==1)return t[0].clone();const e=t[0];t.sort((s,a)=>s.start.isAfter(a.start)?1:-1);const n=t.indexOf(e),o=new this(e.start,e.end);if(n>0)for(let s=n-1;t[s].end.isEqual(o.start);s++)o.start=ht._createAt(t[s].start);for(let s=n+1;s<t.length&&t[s].start.isEqual(o.end);s++)o.end=ht._createAt(t[s].end);return o}static fromJSON(t,e){return new this(ht.fromJSON(t.start,e),ht.fromJSON(t.end,e))}}class xh{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);if(!n)throw new v("mapping-model-position-view-parent-not-found",this,{modelPosition:e.modelPosition});e.viewPosition=this.findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;const n=this.findMappedViewAncestor(e.viewPosition),o=this._viewToModelMapping.get(n),s=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=ht._createAt(o,s)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t,e={}){const n=this.toModelElement(t);if(this._elementToMarkerNames.has(t))for(const o of this._elementToMarkerNames.get(t))this._unboundMarkerNames.add(o);e.defer?this._deferredBindingRemovals.set(t,t.root):(this._viewToModelMapping.delete(t),this._modelToViewMapping.get(n)==t&&this._modelToViewMapping.delete(n))}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t);const o=this._elementToMarkerNames.get(t)||new Set;o.add(e),this._markerNameToElements.set(e,n),this._elementToMarkerNames.set(t,o)}unbindElementFromMarkerName(t,e){const n=this._markerNameToElements.get(e);n&&(n.delete(t),n.size==0&&this._markerNameToElements.delete(e));const o=this._elementToMarkerNames.get(t);o&&(o.delete(e),o.size==0&&this._elementToMarkerNames.delete(t))}flushUnboundMarkerNames(){const t=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),t}flushDeferredBindings(){for(const[t,e]of this._deferredBindingRemovals)t.root==e&&this.unbindViewElement(t);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new X(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Vt(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const o of e)if(o.is("attributeElement"))for(const s of o.getElementsWithSameId())n.add(s);else n.add(o);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}findMappedViewAncestor(t){let e=t.parent;for(;!this._viewToModelMapping.has(e);)e=e.parent;return e}_toModelOffset(t,e,n){if(n!=t)return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t);if(t.is("$text"))return e;let o=0;for(let s=0;s<e;s++)o+=this.getModelLength(t.getChild(s));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name))return this._viewToModelLengthCallbacks.get(t.name)(t);if(this._viewToModelMapping.has(t))return 1;if(t.is("$text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}findPositionIn(t,e){let n,o=0,s=0,a=0;if(t.is("$text"))return new Ct(t,e);for(;s<e;)n=t.getChild(a),o=this.getModelLength(n),s+=o,a++;return s==e?this._moveViewPositionToTextNode(new Ct(t,a)):this.findPositionIn(n,e-(s-o))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof ue?new Ct(e,e.data.length):n instanceof ue?new Ct(n,0):t}}tt(xh,V);class mx{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=bl(e),t instanceof Co&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=bl(e),t instanceof Co&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=bl(e),t instanceof Co&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(n===void 0)return null;const o=n.get(e);return o===void 0?null:o}revert(t,e){e=bl(e),t instanceof Co&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return n===!1?(this._consumable.get(t).set(e,!0),!0):n!==!0&&null}verifyAllConsumed(t){const e=[];for(const[n,o]of this._consumable)for(const[s,a]of o){const l=s.split(":")[0];a&&t==l&&e.push({event:s,item:n.name||n.description})}if(e.length)throw new v("conversion-model-consumable-not-consumed",null,{items:e})}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t)),e}_addSymbolForTextProxy(t){const e=t.startOffset,n=t.endOffset,o=t.parent,s=Symbol("$textProxy:"+t.data);let a,l;return a=this._textProxyRegistry.get(e),a||(a=new Map,this._textProxyRegistry.set(e,a)),l=a.get(n),l||(l=new Map,a.set(n,l)),l.set(o,s),s}}function bl(i){const t=i.split(":");return t[0]=="insert"?t[0]:t[0]=="addMarker"||t[0]=="removeMarker"?i:t.length>1?t[0]+":"+t[1]:t[0]}class Eh{constructor(t){this._conversionApi={dispatcher:this,...t},this._firedEventsMap=new WeakMap}convertChanges(t,e,n){const o=this._createConversionApi(n,t.getRefreshedItems());for(const a of t.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,o);const s=this._reduceChanges(t.getChanges());for(const a of s)a.type==="insert"?this._convertInsert(X._createFromPositionAndShift(a.position,a.length),o):a.type==="reinsert"?this._convertReinsert(X._createFromPositionAndShift(a.position,a.length),o):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,o):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,o);for(const a of o.mapper.flushUnboundMarkerNames()){const l=e.get(a).getRange();this._convertMarkerRemove(a,l,o),this._convertMarkerAdd(a,l,o)}for(const a of t.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(t,e,n,o={}){const s=this._createConversionApi(n,void 0,o);this._convertInsert(t,s);for(const[a,l]of e)this._convertMarkerAdd(a,l,s);s.consumable.verifyAllConsumed("insert")}convertSelection(t,e,n){const o=Array.from(e.getMarkersAtPosition(t.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,t,o),this.fire("selection",{selection:t},s),t.isCollapsed){for(const a of o){const l=a.getRange();if(!bx(t.getFirstPosition(),a,s.mapper))continue;const u={item:t,markerName:a.name,markerRange:l};s.consumable.test(t,"addMarker:"+a.name)&&this.fire("addMarker:"+a.name,u,s)}for(const a of t.getAttributeKeys()){const l={item:t,range:t.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:t.getAttribute(a)};s.consumable.test(t,"attribute:"+l.attributeKey)&&this.fire("attribute:"+l.attributeKey+":$text",l,s)}}}_convertInsert(t,e,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(e.consumable,Array.from(t));for(const o of Array.from(t.getWalker({shallow:!0})).map(Sm))this._testAndFire("insert",o,e)}_convertRemove(t,e,n,o){this.fire("remove:"+n,{position:t,length:e},o)}_convertAttribute(t,e,n,o,s){this._addConsumablesForRange(s.consumable,t,`attribute:${e}`);for(const a of t){const l={item:a.item,range:X._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,l,s)}}_convertReinsert(t,e){const n=Array.from(t.getWalker({shallow:!0}));this._addConsumablesForInsert(e.consumable,n);for(const o of n.map(Sm))this._testAndFire("insert",{...o,reconversion:!0},e)}_convertMarkerAdd(t,e,n){if(e.root.rootName=="$graveyard")return;const o="addMarker:"+t;if(n.consumable.add(e,o),this.fire(o,{markerName:t,markerRange:e},n),n.consumable.consume(e,o)){this._addConsumablesForRange(n.consumable,e,o);for(const s of e.getItems()){if(!n.consumable.test(s,o))continue;const a={item:s,range:X._createOn(s),markerName:t,markerRange:e};this.fire(o,a,n)}}}_convertMarkerRemove(t,e,n){e.root.rootName!="$graveyard"&&this.fire("removeMarker:"+t,{markerName:t,markerRange:e},n)}_reduceChanges(t){const e={changes:t};return this.fire("reduceChanges",e),e.changes}_addConsumablesForInsert(t,e){for(const n of e){const o=n.item;if(t.test(o,"insert")===null){t.add(o,"insert");for(const s of o.getAttributeKeys())t.add(o,"attribute:"+s)}}return t}_addConsumablesForRange(t,e,n){for(const o of e.getItems())t.add(o,n);return t}_addConsumablesForSelection(t,e,n){t.add(e,"selection");for(const o of n)t.add(e,"addMarker:"+o.name);for(const o of e.getAttributeKeys())t.add(e,"attribute:"+o);return t}_testAndFire(t,e,n){const o=function(u,f){const p=f.item.name||"$text";return`${u}:${p}`}(t,e),s=e.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(e.item):e.item,a=this._firedEventsMap.get(n),l=a.get(s);if(l){if(l.has(o))return;l.add(o)}else a.set(s,new Set([o]));this.fire(o,e,n)}_testAndFireAddAttributes(t,e){const n={item:t,range:X._createOn(t)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,e)}_createConversionApi(t,e=new Set,n={}){const o={...this._conversionApi,consumable:new mx,writer:t,options:n,convertItem:s=>this._convertInsert(X._createOn(s),o),convertChildren:s=>this._convertInsert(X._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!e.has(o.mapper.toModelElement(s))};return this._firedEventsMap.set(o,new Map),o}}function bx(i,t,e){const n=t.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(n.containsItem(s))return!!e.toViewElement(s).getCustomProperty("addHighlight")})}function Sm(i){return{item:i.item,range:X._createFromPositionAndShift(i.previousPosition,i.length)}}tt(Eh,V);class Ko{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield new X(t.start,t.end)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?new X(t.start,t.end):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?new X(t.start,t.end):null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}setTo(t,e,n){if(t===null)this._setRanges([]);else if(t instanceof Ko)this._setRanges(t.getRanges(),t.isBackward);else if(t&&typeof t.getRanges=="function")this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof X)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof ht)this._setRanges([new X(t)]);else if(t instanceof cr){const o=!!n&&!!n.backward;let s;if(e=="in")s=X._createIn(t);else if(e=="on")s=X._createOn(t);else{if(e===void 0)throw new v("model-selection-setto-required-second-parameter",[this,t]);s=new X(ht._createAt(t,e))}this._setRanges([s],o)}else{if(!An(t))throw new v("model-selection-setto-not-selectable",[this,t]);this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(o=>{if(!(o instanceof X))throw new v("model-selection-set-ranges-not-range",[this,t]);return this._ranges.every(s=>!s.isEqual(o))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const o of t)this._pushRange(o);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(this.anchor===null)throw new v("model-selection-setfocus-no-ranges",[this,t]);const n=ht._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new X(n,o)),this._lastRangeBackward=!0):(this._pushRange(new X(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(t){return t==="selection"||t==="model:selection"}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Im(e.start,t);n&&Dh(n,e)&&(yield n);for(const s of e.getWalker()){const a=s.item;s.type=="elementEnd"&&kx(a,t,e)&&(yield a)}const o=Im(e.end,t);o&&!e.end.isTouching(ht._createAt(o,0))&&Dh(o,e)&&(yield o)}}containsEntireContent(t=this.anchor.root){const e=ht._createAt(t,0),n=ht._createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(new X(t.start,t.end))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new v("model-selection-range-intersects",[this,t],{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Tm(i,t){return!t.has(i)&&(t.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function kx(i,t,e){return Tm(i,t)&&Dh(i,e)}function Im(i,t){const e=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const s=n.find(a=>!o&&(o=e.isLimit(a),!o&&Tm(a,t)));return n.forEach(a=>t.add(a)),s}function Dh(i,t){const e=function(n){const o=n.root.document.model.schema;let s=n.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(i);return e?!t.containsRange(X._createOn(e),!0):!0}tt(Ko,V);class yo extends X{constructor(t,e){super(t,e),wx.call(this)}detach(){this.stopListening()}is(t){return t==="liveRange"||t==="model:liveRange"||t=="range"||t==="model:range"}toRange(){return new X(this.start,this.end)}static fromRange(t){return new yo(t.start,t.end)}}function wx(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&_x.call(this,e)},{priority:"low"})}function _x(i){const t=this.getTransformedByOperation(i),e=X._createFromRanges(t),n=!e.isEqual(this),o=function(a,l){switch(l.type){case"insert":return a.containsPosition(l.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(l.sourcePosition)||a.start.isEqual(l.sourcePosition)||a.containsPosition(l.targetPosition);case"split":return a.containsPosition(l.splitPosition)||a.containsPosition(l.insertionPosition)}return!1}(this,i);let s=null;if(n){e.root.rootName=="$graveyard"&&(s=i.type=="remove"?i.sourcePosition:i.deletionPosition);const a=this.toRange();this.start=e.start,this.end=e.end,this.fire("change:range",a,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}tt(yo,V);const ya="selection:";class so{constructor(t){this._selection=new vx(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(t){this._selection.observeMarkers(t)}is(t){return t==="selection"||t=="model:selection"||t=="documentSelection"||t=="model:documentSelection"}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return ya+t}static _isStoreAttributeKey(t){return t.startsWith(ya)}}tt(so,V);class vx extends Ko{constructor(t){super(),this.markers=new Cn({idProperty:"name"}),this._model=t.model,this._document=t,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const e of this.getRanges())if(!this._document._validateSelectionRange(e))throw new v("document-selection-wrong-position",this,{range:e})}),this.listenTo(this._model.markers,"update",(e,n,o,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(e,n)=>{(function(o,s){const a=o.document.differ;for(const l of a.getChanges()){if(l.type!="insert")continue;const u=l.position.parent;l.length===u.maxOffset&&o.enqueueChange(s,f=>{const p=Array.from(u.getAttributeKeys()).filter(k=>k.startsWith(ya));for(const k of p)f.removeAttribute(k,u)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(t,e){super.setFocus(t,e),this._updateAttributes(!0),this._updateMarkers()}setAttribute(t,e){if(this._setAttribute(t,e)){const n=[t];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=x();return this._overriddenGravityRegister.add(t),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new v("document-selection-gravity-wrong-restore",this,{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(t){this._observedMarkers.add(t),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return;const e=yo.fromRange(t);return e.on("change:range",(n,o,s)=>{if(this._hasChangedRange=!0,e.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const a=this._ranges.indexOf(e);this._ranges.splice(a,1),e.detach()}}),e}_updateMarkers(){if(!this._observedMarkers.size)return;const t=[];let e=!1;for(const o of this._model.markers){const s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const a=o.getRange();for(const l of this.getRanges())a.containsRange(l,!l.isCollapsed)&&t.push(o)}const n=Array.from(this.markers);for(const o of t)this.markers.has(o)||(this.markers.add(o),e=!0);for(const o of Array.from(this.markers))t.includes(o)||(this.markers.remove(o),e=!0);e&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(t,e){const n=t.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const s=Array.from(this.markers),a=this.markers.has(t);if(e){let l=!1;for(const u of this.getRanges())if(e.containsRange(u,!u.isCollapsed)){l=!0;break}l&&!a?(this.markers.add(t),o=!0):!l&&a&&(this.markers.remove(t),o=!0)}else a&&(this.markers.remove(t),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(t){const e=Pn(this._getSurroundingAttributes()),n=Pn(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,a]of this._attributePriority)a=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(e);const o=[];for(const[s,a]of this.getAttributes())n.has(s)&&n.get(s)===a||o.push(s);for(const[s]of n)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(t)=="normal"?!1:super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0)}_removeAttribute(t,e=!0){const n=e?"normal":"low";return(n!="low"||this._attributePriority.get(t)!="normal")&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[n,o]of this.getAttributes())t.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of t)this._setAttribute(n,o,!1)&&e.add(n);return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())e.startsWith(ya)&&(yield[e.substr(ya.length),t.getAttribute(e)])}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const o=t.textNode?t.textNode:t.nodeBefore,s=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=kl(o)),n||(n=kl(s)),!this.isGravityOverridden&&!n){let a=o;for(;a&&!e.isInline(a)&&!n;)a=a.previousSibling,n=kl(a)}if(!n){let a=s;for(;a&&!e.isInline(a)&&!n;)a=a.nextSibling,n=kl(a)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const s of o){if(s.item.is("element")&&e.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(t){const e=this._model.schema.getNearestSelectionRange(t);e&&this._pushRange(e)}}function kl(i){return i instanceof Co||i instanceof _e?i.getAttributes():null}class Mm{constructor(t){this._dispatchers=t}add(t){for(const e of this._dispatchers)t(e);return this}}const ao=function(i){return ki(i,5)};class Ax extends Mm{elementToElement(t){return this.add(function(e){return(e=ao(e)).model=Bm(e.model),e.view=xa(e.view,"container"),e.model.attributes.length&&(e.model.children=!0),n=>{n.on("insert:"+e.model.name,function(o,s=yx){return(a,l,u)=>{if(!s(l.item,u.consumable,{preflight:!0}))return;const f=o(l.item,u,l);if(!f)return;s(l.item,u.consumable);const p=u.mapper.toViewPosition(l.range.start);u.mapper.bindElements(l.item,f),u.writer.insert(p,f),u.convertAttributes(l.item),jm(f,l.item.getChildren(),u,{reconversion:l.reconversion})}}(e.view,zm(e.model)),{priority:e.converterPriority||"normal"}),(e.model.children||e.model.attributes.length)&&n.on("reduceChanges",Rm(e.model),{priority:"low"})}}(t))}elementToStructure(t){return this.add(function(e){return(e=ao(e)).model=Bm(e.model),e.view=xa(e.view,"container"),e.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(e.model.name,"$text"))throw new v("conversion-element-to-structure-disallowed-text",n,{elementName:e.model.name});var o,s;n.on("insert:"+e.model.name,(o=e.view,s=zm(e.model),(a,l,u)=>{if(!s(l.item,u.consumable,{preflight:!0}))return;const f=new Map;u.writer._registerSlotFactory(function(y,T,P){return(N,B="children")=>{const z=N.createContainerElement("$slot");let q=null;if(B==="children")q=Array.from(y.getChildren());else{if(typeof B!="function")throw new v("conversion-slot-mode-unknown",P.dispatcher,{modeOrFilter:B});q=Array.from(y.getChildren()).filter(st=>B(st))}return T.set(z,q),z}}(l.item,f,u));const p=o(l.item,u,l);if(u.writer._clearSlotFactory(),!p)return;(function(y,T,P){const N=Array.from(T.values()).flat(),B=new Set(N);if(B.size!=N.length)throw new v("conversion-slot-filter-overlap",P.dispatcher,{element:y});if(B.size!=y.childCount)throw new v("conversion-slot-filter-incomplete",P.dispatcher,{element:y})})(l.item,f,u),s(l.item,u.consumable);const k=u.mapper.toViewPosition(l.range.start);u.mapper.bindElements(l.item,p),u.writer.insert(k,p),u.convertAttributes(l.item),function(y,T,P,N){P.mapper.on("modelToViewPosition",q,{priority:"highest"});let B=null,z=null;for([B,z]of T)jm(y,z,P,N),P.writer.move(P.writer.createRangeIn(B),P.writer.createPositionBefore(B)),P.writer.remove(B);function q(st,Tt){const jt=Tt.modelPosition.nodeAfter,ve=z.indexOf(jt);ve<0||(Tt.viewPosition=Tt.mapper.findPositionIn(B,ve))}P.mapper.off("modelToViewPosition",q)}(p,f,u,{reconversion:l.reconversion})}),{priority:e.converterPriority||"normal"}),n.on("reduceChanges",Rm(e.model),{priority:"low"})}}(t))}attributeToElement(t){return this.add(function(e){e=ao(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const s of e.model.values)e.view[s]=xa(e.view[s],"attribute");else e.view=xa(e.view,"attribute");const o=Lm(e);return s=>{s.on(n,function(a){return(l,u,f)=>{if(!f.consumable.test(u.item,l.name))return;const p=a(u.attributeOldValue,f,u),k=a(u.attributeNewValue,f,u);if(!p&&!k)return;f.consumable.consume(u.item,l.name);const y=f.writer,T=y.document.selection;if(u.item instanceof Ko||u.item instanceof so)y.wrap(T.getFirstRange(),k);else{let P=f.mapper.toViewRange(u.range);u.attributeOldValue!==null&&p&&(P=y.unwrap(P,p)),u.attributeNewValue!==null&&k&&y.wrap(P,k)}}}(o),{priority:e.converterPriority||"normal"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=ao(e);let n="attribute:"+(e.model.key?e.model.key:e.model);if(e.model.name&&(n+=":"+e.model.name),e.model.values)for(const s of e.model.values)e.view[s]=Om(e.view[s]);else e.view=Om(e.view);const o=Lm(e);return s=>{var a;s.on(n,(a=o,(l,u,f)=>{if(!f.consumable.test(u.item,l.name))return;const p=a(u.attributeOldValue,f,u),k=a(u.attributeNewValue,f,u);if(!p&&!k)return;f.consumable.consume(u.item,l.name);const y=f.mapper.toViewElement(u.item),T=f.writer;if(!y)throw new v("conversion-attribute-to-attribute-on-text",f.dispatcher,u);if(u.attributeOldValue!==null&&p)if(p.key=="class"){const P=Re(p.value);for(const N of P)T.removeClass(N,y)}else if(p.key=="style"){const P=Object.keys(p.value);for(const N of P)T.removeStyle(N,y)}else T.removeAttribute(p.key,y);if(u.attributeNewValue!==null&&k)if(k.key=="class"){const P=Re(k.value);for(const N of P)T.addClass(N,y)}else if(k.key=="style"){const P=Object.keys(k.value);for(const N of P)T.setStyle(N,k.value[N],y)}else T.setAttribute(k.key,k.value,y)}),{priority:e.converterPriority||"normal"})}}(t))}markerToElement(t){return this.add(function(e){return(e=ao(e)).view=xa(e.view,"ui"),n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(s,a,l)=>{a.isOpening=!0;const u=o(a,l);a.isOpening=!1;const f=o(a,l);if(!u||!f)return;const p=a.markerRange;if(p.isCollapsed&&!l.consumable.consume(p,s.name))return;for(const T of p)if(!l.consumable.consume(T.item,s.name))return;const k=l.mapper,y=l.writer;y.insert(k.toViewPosition(p.start),u),l.mapper.bindElementToMarker(u,a.markerName),p.isCollapsed||(y.insert(k.toViewPosition(p.end),f),l.mapper.bindElementToMarker(f,a.markerName)),s.stop()}),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,(e.view,(s,a,l)=>{const u=l.mapper.markerNameToElements(a.markerName);if(u){for(const f of u)l.mapper.unbindElementFromMarkerName(f,a.markerName),l.writer.clear(l.writer.createRangeOn(f),f);l.writer.clearClonedElementsGroup(a.markerName),s.stop()}}),{priority:e.converterPriority||"normal"})}}(t))}markerToHighlight(t){return this.add(function(e){return n=>{var o;n.on("addMarker:"+e.model,(o=e.view,(s,a,l)=>{if(!a.item||!(a.item instanceof Ko||a.item instanceof so||a.item.is("$textProxy")))return;const u=Sh(o,a,l);if(!u||!l.consumable.consume(a.item,s.name))return;const f=l.writer,p=Pm(f,u),k=f.document.selection;if(a.item instanceof Ko||a.item instanceof so)f.wrap(k.getFirstRange(),p,k);else{const y=l.mapper.toViewRange(a.range),T=f.wrap(y,p);for(const P of T.getItems())if(P.is("attributeElement")&&P.isSimilar(p)){l.mapper.bindElementToMarker(P,a.markerName);break}}}),{priority:e.converterPriority||"normal"}),n.on("addMarker:"+e.model,function(s){return(a,l,u)=>{if(!l.item||!(l.item instanceof fe))return;const f=Sh(s,l,u);if(!f||!u.consumable.test(l.item,a.name))return;const p=u.mapper.toViewElement(l.item);if(p&&p.getCustomProperty("addHighlight")){u.consumable.consume(l.item,a.name);for(const k of X._createIn(l.item))u.consumable.consume(k.item,a.name);p.getCustomProperty("addHighlight")(p,f,u.writer),u.mapper.bindElementToMarker(p,l.markerName)}}}(e.view),{priority:e.converterPriority||"normal"}),n.on("removeMarker:"+e.model,function(s){return(a,l,u)=>{if(l.markerRange.isCollapsed)return;const f=Sh(s,l,u);if(!f)return;const p=Pm(u.writer,f),k=u.mapper.markerNameToElements(l.markerName);if(k){for(const y of k)u.mapper.unbindElementFromMarkerName(y,l.markerName),y.is("attributeElement")?u.writer.unwrap(u.writer.createRangeOn(y),p):y.getCustomProperty("removeHighlight")(y,f.id,u.writer);u.writer.clearClonedElementsGroup(l.markerName),a.stop()}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}markerToData(t){return this.add(function(e){const n=(e=ao(e)).model;return e.view||(e.view=o=>({group:n,name:o.substr(e.model.length+1)})),o=>{var s;o.on("addMarker:"+n,(s=e.view,(a,l,u)=>{const f=s(l.markerName,u);if(!f)return;const p=l.markerRange;u.consumable.consume(p,a.name)&&(Nm(p,!1,u,l,f),Nm(p,!0,u,l,f),a.stop())}),{priority:e.converterPriority||"normal"}),o.on("removeMarker:"+n,function(a){return(l,u,f)=>{const p=a(u.markerName,f);if(!p)return;const k=f.mapper.markerNameToElements(u.markerName);if(k){for(const T of k)f.mapper.unbindElementFromMarkerName(T,u.markerName),T.is("containerElement")?(y(`data-${p.group}-start-before`,T),y(`data-${p.group}-start-after`,T),y(`data-${p.group}-end-before`,T),y(`data-${p.group}-end-after`,T)):f.writer.clear(f.writer.createRangeOn(T),T);f.writer.clearClonedElementsGroup(u.markerName),l.stop()}function y(T,P){if(P.hasAttribute(T)){const N=new Set(P.getAttribute(T).split(","));N.delete(p.name),N.size==0?f.writer.removeAttribute(T,P):f.writer.setAttribute(T,Array.from(N).join(","),P)}}}}(e.view),{priority:e.converterPriority||"normal"})}}(t))}}function Pm(i,t){const e=i.createAttributeElement("span",t.attributes);return t.classes&&e._addClass(t.classes),typeof t.priority=="number"&&(e._priority=t.priority),e._id=t.id,e}function Nm(i,t,e,n,o){const s=t?i.start:i.end,a=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,l=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(a||l){let u,f;t&&a||!t&&!l?(u=a,f=!0):(u=l,f=!1);const p=e.mapper.toViewElement(u);if(p)return void function(k,y,T,P,N,B){const z=`data-${B.group}-${y?"start":"end"}-${T?"before":"after"}`,q=k.hasAttribute(z)?k.getAttribute(z).split(","):[];q.unshift(B.name),P.writer.setAttribute(z,q.join(","),k),P.mapper.bindElementToMarker(k,N.markerName)}(p,t,f,e,n,o)}(function(u,f,p,k,y){const T=`${y.group}-${f?"start":"end"}`,P=y.name?{name:y.name}:null,N=p.writer.createUIElement(T,P);p.writer.insert(u,N),p.mapper.bindElementToMarker(N,k.markerName)})(e.mapper.toViewPosition(s),t,e,n,o)}function Bm(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function xa(i,t){return typeof i=="function"?i:(e,n)=>function(o,s,a){typeof o=="string"&&(o={name:o});let l;const u=s.writer,f=Object.assign({},o.attributes);if(a=="container")l=u.createContainerElement(o.name,f);else if(a=="attribute"){const p={priority:o.priority||Gr.DEFAULT_PRIORITY};l=u.createAttributeElement(o.name,f,p)}else l=u.createUIElement(o.name,f);if(o.styles){const p=Object.keys(o.styles);for(const k of p)u.setStyle(k,o.styles[k],l)}if(o.classes){const p=o.classes;if(typeof p=="string")u.addClass(p,l);else for(const k of p)u.addClass(k,l)}return l}(i,n,t)}function Lm(i){return i.model.values?(t,e)=>{const n=i.view[t];return n?n(t,e):null}:i.view}function Om(i){return typeof i=="string"?t=>({key:i,value:t}):typeof i=="object"?i.value?()=>i:t=>({key:i.key,value:t}):i}function Sh(i,t,e){const n=typeof i=="function"?i(t,e):i;return n?(n.priority||(n.priority=10),n.id||(n.id=t.markerName),n):null}function Rm(i){const t=function(e){return(n,o)=>{if(!n.is("element",e.name))return!1;if(o.type=="attribute"){if(e.attributes.includes(o.attributeKey))return!0}else if(e.children)return!0;return!1}}(i);return(e,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const a=s.position?s.position.parent:s.range.start.nodeAfter;if(a&&t(a,s)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const l=ht._createBefore(a);o.push({type:"remove",name:a.name,position:l,length:1},{type:"reinsert",name:a.name,position:l,length:1})}}else o.push(s)}n.changes=o}}function zm(i){return(t,e,n={})=>{const o=["insert"];for(const s of i.attributes)t.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>e.test(t,s))&&(n.preflight||o.forEach(s=>e.consume(t,s)),!0)}}function jm(i,t,e,n){for(const o of t)Cx(i.root,o,e,n)||e.convertItem(o)}function Cx(i,t,e,n){const{writer:o,mapper:s}=e;if(!n.reconversion)return!1;const a=s.toViewElement(t);return!(!a||a.root==i)&&!!e.canReuseView(a)&&(o.move(o.createRangeOn(a),s.toViewPosition(ht._createBefore(t))),!0)}function yx(i,t,{preflight:e}={}){return e?t.test(i,"insert"):t.consume(i,"insert")}function Fm(i){const{schema:t,document:e}=i.model;for(const n of e.getRootNames()){const o=e.getRoot(n);if(o.isEmpty&&!t.checkChild(o,"$text")&&t.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function Vm(i,t,e){const n=e.createContext(i);return!!e.checkChild(n,"paragraph")&&!!e.checkChild(n.push("paragraph"),t)}function $m(i,t){const e=t.createElement("paragraph");return t.insert(e,i),t.createPositionAt(e,0)}class xx extends Mm{elementToElement(t){return this.add(Hm(t))}elementToAttribute(t){return this.add(function(e){Um(e=ao(e));const n=qm(e,!1),o=Th(e.view),s=o?"element:"+o:"element";return a=>{a.on(s,n,{priority:e.converterPriority||"low"})}}(t))}attributeToAttribute(t){return this.add(function(e){e=ao(e);let n=null;(typeof e.view=="string"||e.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const a=s.view.key;let l;return a=="class"||a=="style"?l={[a=="class"?"classes":"styles"]:s.view.value}:l={attributes:{[a]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(l.name=s.view.name),s.view=l,a}(e)),Um(e,n);const o=qm(e,!0);return s=>{s.on("element",o,{priority:e.converterPriority||"low"})}}(t))}elementToMarker(t){return this.add(function(e){return function(n){const o=n.model;n.model=(s,a)=>{const l=typeof o=="string"?o:o(s,a);return a.writer.createElement("$marker",{"data-name":l})}}(e=ao(e)),Hm(e)}(t))}dataToMarker(t){return this.add(function(e){(e=ao(e)).model||(e.model=s=>s?e.view+":"+s:e.view);const n=Ih(Wm(e,"start")),o=Ih(Wm(e,"end"));return s=>{s.on("element:"+e.view+"-start",n,{priority:e.converterPriority||"normal"}),s.on("element:"+e.view+"-end",o,{priority:e.converterPriority||"normal"});const a=E.get("low"),l=E.get("highest"),u=E.get(e.converterPriority)/l;s.on("element",function(f){return(p,k,y)=>{const T=`data-${f.view}`;function P(N,B){for(const z of B){const q=f.model(z,y),st=y.writer.createElement("$marker",{"data-name":q});y.writer.insert(st,N),k.modelCursor.isEqual(N)?k.modelCursor=k.modelCursor.getShiftedBy(1):k.modelCursor=k.modelCursor._getTransformedByInsertion(N,1),k.modelRange=k.modelRange._getTransformedByInsertion(N,1)[0]}}(y.consumable.test(k.viewItem,{attributes:T+"-end-after"})||y.consumable.test(k.viewItem,{attributes:T+"-start-after"})||y.consumable.test(k.viewItem,{attributes:T+"-end-before"})||y.consumable.test(k.viewItem,{attributes:T+"-start-before"}))&&(k.modelRange||Object.assign(k,y.convertChildren(k.viewItem,k.modelCursor)),y.consumable.consume(k.viewItem,{attributes:T+"-end-after"})&&P(k.modelRange.end,k.viewItem.getAttribute(T+"-end-after").split(",")),y.consumable.consume(k.viewItem,{attributes:T+"-start-after"})&&P(k.modelRange.end,k.viewItem.getAttribute(T+"-start-after").split(",")),y.consumable.consume(k.viewItem,{attributes:T+"-end-before"})&&P(k.modelRange.start,k.viewItem.getAttribute(T+"-end-before").split(",")),y.consumable.consume(k.viewItem,{attributes:T+"-start-before"})&&P(k.modelRange.start,k.viewItem.getAttribute(T+"-start-before").split(",")))}}(e),{priority:a+u})}}(t))}}function Hm(i){const t=Ih(i=ao(i)),e=Th(i.view),n=e?"element:"+e:"element";return o=>{o.on(n,t,{priority:i.converterPriority||"normal"})}}function Th(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function Ih(i){const t=new yn(i.view);return(e,n,o)=>{const s=t.match(n.viewItem);if(!s)return;const a=s.match;if(a.name=!0,!o.consumable.test(n.viewItem,a))return;const l=function(u,f,p){return u instanceof Function?u(f,p):p.writer.createElement(u)}(i.model,n.viewItem,o);l&&o.safeInsert(l,n.modelCursor)&&(o.consumable.consume(n.viewItem,a),o.convertChildren(n.viewItem,l),o.updateConversionResult(l,n))}}function Um(i,t=null){const e=t===null||(s=>s.getAttribute(t)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?e:i.model.value;i.model={key:n,value:o}}function qm(i,t){const e=new yn(i.view);return(n,o,s)=>{if(!o.modelRange&&t)return;const a=e.match(o.viewItem);if(!a||(function(p,k){const y=typeof p=="function"?p(k):p;return typeof y=="object"&&!Th(y)?!1:!y.classes&&!y.attributes&&!y.styles}(i.view,o.viewItem)?a.match.name=!0:delete a.match.name,!s.consumable.test(o.viewItem,a.match)))return;const l=i.model.key,u=typeof i.model.value=="function"?i.model.value(o.viewItem,s):i.model.value;if(u===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(p,k,y,T){let P=!1;for(const N of Array.from(p.getItems({shallow:y})))T.schema.checkAttribute(N,k.key)&&(P=!0,N.hasAttribute(k.key)||T.writer.setAttribute(k.key,k.value,N));return P}(o.modelRange,{key:l,value:u},t,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(a.match.name=!0),s.consumable.consume(o.viewItem,a.match))}}function Wm(i,t){const e={};return e.view=i.view+"-"+t,e.model=(n,o)=>{const s=n.getAttribute("name"),a=i.model(s,o);return o.writer.createElement("$marker",{"data-name":a})},e}class Gm{constructor(t,e){this.model=t,this.view=new xm(e),this.mapper=new xh,this.downcastDispatcher=new Eh({mapper:this.mapper,schema:t.schema});const n=this.model.document,o=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,s,a),this.downcastDispatcher.convertSelection(o,s,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,l){return(u,f)=>{const p=f.newSelection,k=[];for(const T of p.getRanges())k.push(l.toModelRange(T));const y=a.createSelection(k,{backward:p.isBackward});y.isEqual(a.document.selection)||a.change(T=>{T.setSelection(y)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,l,u)=>{if(!u.consumable.consume(l.item,a.name))return;const f=u.writer,p=u.mapper.toViewPosition(l.range.start),k=f.createText(l.item.data);f.insert(p,k)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,l,u)=>{u.convertAttributes(l.item),l.reconversion||!l.item.is("element")||l.item.isEmpty||u.convertChildren(l.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,l,u)=>{const f=u.mapper.toViewPosition(l.position),p=l.position.getShiftedBy(l.length),k=u.mapper.toViewPosition(p,{isPhantom:!0}),y=u.writer.createRange(f,k),T=u.writer.remove(y.getTrimmed());for(const P of u.writer.createRangeIn(T).getItems())u.mapper.unbindViewElement(P,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=u.writer,p=f.document.selection;for(const k of p.getRanges())k.isCollapsed&&k.end.parent.isAttached()&&u.writer.mergeAttributes(k.start);f.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=l.selection;if(f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=[];for(const k of f.getRanges()){const y=u.mapper.toViewRange(k);p.push(y)}u.writer.setSelection(p,{backward:f.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=l.selection;if(!f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=u.writer,k=f.getFirstPosition(),y=u.mapper.toViewPosition(k),T=p.breakAttributes(y);p.setSelection(T)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const l=new g1(this.view.document,a.name);return l.rootName=a.rootName,this.mapper.bindElements(a,l),l})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(t){const e=typeof t=="string"?t:t.name,n=this.model.markers.get(e);if(!n)throw new v("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:e});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(t){this.model.change(()=>{this.model.document.differ._refreshItem(t)})}}tt(Gm,zt);class Ex{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new v("commandcollection-command-not-found",this,{commandName:t});return n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}class Ea{constructor(){this._consumables=new Map}add(t,e){let n;t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Dx(t),this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return n===void 0?null:t.is("$text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);n!==void 0&&(t.is("$text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={element:t,name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&e.attributes.push(a);const o=t.getClassNames();for(const a of o)e.classes.push(a);const s=t.getStyleNames();for(const a of s)e.styles.push(a);return e}static createFrom(t,e){if(e||(e=new Ea(t)),t.is("$text"))return e.add(t),e;t.is("element")&&e.add(t,Ea.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=Ea.createFrom(n,e);return e}}class Dx{constructor(t){this.element=t,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(n!==!0)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=nn(e)?e:[e],o=this._consumables[t];for(const s of n){if(t==="attributes"&&(s==="class"||s==="style"))throw new v("viewconsumable-invalid-attribute",this);if(o.set(s,!0),t==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!0)}}_test(t,e){const n=nn(e)?e:[e],o=this._consumables[t];for(const s of n)if(t!=="attributes"||s!=="class"&&s!=="style"){const a=o.get(s);if(a===void 0)return null;if(!a)return!1}else{const a=s=="class"?"classes":"styles",l=this._test(a,[...this._consumables[a].keys()]);if(l!==!0)return l}return!0}_consume(t,e){const n=nn(e)?e:[e],o=this._consumables[t];for(const s of n)if(t!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),t=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!1)}else{const a=s=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(t,e){const n=nn(e)?e:[e],o=this._consumables[t];for(const s of n)if(t!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{const a=s=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class Km{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new dr(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new dr(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new v("schema-cannot-register-item-twice",this,{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new v("schema-cannot-extend-missing-item",this,{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e=typeof t=="string"?t:t.is&&(t.is("$text")||t.is("$textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!!e&&!!(e.isObject||e.isLimit&&e.isSelectable&&e.isContent)}isInline(t){const e=this.getDefinition(t);return!(!e||!e.isInline)}isSelectable(t){const e=this.getDefinition(t);return!!e&&!(!e.isSelectable&&!e.isObject)}isContent(t){const e=this.getDefinition(t);return!!e&&!(!e.isContent&&!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof ht){const n=t.nodeBefore,o=t.nodeAfter;if(!(n instanceof fe))throw new v("schema-check-merge-no-element-before",this);if(!(o instanceof fe))throw new v("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;const s=t(n,o);typeof s=="boolean"&&(e.stop(),e.return=s)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{const s=t(n,o);typeof s=="boolean"&&(e.stop(),e.return=s)},{priority:"high"})}setAttributeProperties(t,e){this._attributeProperties[t]=Object.assign(this.getAttributeProperties(t),e)}getAttributeProperties(t){return this._attributeProperties[t]||{}}getLimitElement(t){let e;for(t instanceof ht?e=t.parent:e=(t instanceof X?[t]:Array.from(t.getRanges())).reduce((n,o)=>{const s=o.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed){const n=[...t.getFirstPosition().getAncestors(),new _e("",t.getAttributes())];return this.checkAttribute(n,e)}{const n=t.getRanges();for(const o of n)for(const s of o)if(this.checkAttribute(s.item,e))return!0}return!1}*getValidRanges(t,e){t=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(t);for(const n of t)yield*this._getValidRangesForRange(n,e)}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new X(t);let n,o;const s=t.getAncestors().reverse().find(a=>this.isLimit(a))||t.root;e!="both"&&e!="backward"||(n=new Go({boundaries:X._createIn(s),startPosition:t,direction:"backward"})),e!="both"&&e!="forward"||(o=new Go({boundaries:X._createIn(s),startPosition:t}));for(const a of function*(l,u){let f=!1;for(;!f;){if(f=!0,l){const p=l.next();p.done||(f=!1,yield{walker:l,value:p.value})}if(u){const p=u.next();p.done||(f=!1,yield{walker:u,value:p.value})}}}(n,o)){const l=a.walker==n?"elementEnd":"elementStart",u=a.value;if(u.type==l&&this.isObject(u.item))return X._createOn(u.item);if(this.checkChild(u.nextPosition,"$text"))return new X(u.nextPosition)}return null}findAllowedParent(t,e){let n=t.parent;for(;n;){if(this.checkChild(n,e))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(t,e,n){const o=n.model;for(const[s,a]of Object.entries(e))o.schema.checkAttribute(t,s)&&n.setAttribute(s,a,t)}removeDisallowedAttributes(t,e){for(const n of t)if(n.is("$text"))Ym(this,n,e);else{const o=X._createIn(n).getPositions();for(const s of o)Ym(this,s.nodeBefore||s.parent,e)}}getAttributesWithProperty(t,e,n){const o={};for(const[s,a]of t.getAttributes()){const l=this.getAttributeProperties(s);l[e]!==void 0&&(n!==void 0&&n!==l[e]||(o[s]=a))}return o}createContext(t){return new dr(t)}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const o of n)t[o]=Sx(e[o],o);for(const o of n)Tx(t,o);for(const o of n)Ix(t,o);for(const o of n)Mx(t,o);for(const o of n)Px(t,o),Nx(t,o);for(const o of n)Bx(t,o),Lx(t,o),Ox(t,o);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const o=e.getItem(n);if(t.allowIn.includes(o.name)){if(n==0)return!0;{const s=this.getDefinition(o);return this._checkContextMatch(s,e,n-1)}}return!1}*_getValidRangesForRange(t,e){let n=t.start,o=t.start;for(const s of t.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(X._createIn(s),e)),this.checkAttribute(s,e)||(n.isEqual(o)||(yield new X(n,o)),n=ht._createAfter(s)),o=ht._createAfter(s);n.isEqual(o)||(yield new X(n,o))}}tt(Km,zt);class dr{constructor(t){if(t instanceof dr)return t;typeof t=="string"?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),this._items=t.map(zx)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new dr([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}startsWith(t){return Array.from(this.getNames()).join(" ").startsWith(t)}}function Sx(i,t){const e={name:t,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const s of n){const a=Object.keys(s).filter(l=>l.startsWith("is"));for(const l of a)o[l]=s[l]}}(i,e),ur(i,e,"allowIn"),ur(i,e,"allowContentOf"),ur(i,e,"allowWhere"),ur(i,e,"allowAttributes"),ur(i,e,"allowAttributesOf"),ur(i,e,"allowChildren"),ur(i,e,"inheritTypesFrom"),function(n,o){for(const s of n){const a=s.inheritAllFrom;a&&(o.allowContentOf.push(a),o.allowWhere.push(a),o.allowAttributesOf.push(a),o.inheritTypesFrom.push(a))}}(i,e),e}function Tx(i,t){const e=i[t];for(const n of e.allowChildren){const o=i[n];o&&o.allowIn.push(t)}e.allowChildren.length=0}function Ix(i,t){for(const e of i[t].allowContentOf)i[e]&&Rx(i,e).forEach(n=>{n.allowIn.push(t)});delete i[t].allowContentOf}function Mx(i,t){for(const e of i[t].allowWhere){const n=i[e];if(n){const o=n.allowIn;i[t].allowIn.push(...o)}}delete i[t].allowWhere}function Px(i,t){for(const e of i[t].allowAttributesOf){const n=i[e];if(n){const o=n.allowAttributes;i[t].allowAttributes.push(...o)}}delete i[t].allowAttributesOf}function Nx(i,t){const e=i[t];for(const n of e.inheritTypesFrom){const o=i[n];if(o){const s=Object.keys(o).filter(a=>a.startsWith("is"));for(const a of s)a in e||(e[a]=o[a])}}delete e.inheritTypesFrom}function Bx(i,t){const e=i[t],n=e.allowIn.filter(o=>i[o]);e.allowIn=Array.from(new Set(n))}function Lx(i,t){const e=i[t];for(const n of e.allowIn)i[n].allowChildren.push(t)}function Ox(i,t){const e=i[t];e.allowAttributes=Array.from(new Set(e.allowAttributes))}function ur(i,t,e){for(const n of i)typeof n[e]=="string"?t[e].push(n[e]):Array.isArray(n[e])&&t[e].push(...n[e])}function Rx(i,t){const e=i[t];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(e.name));var n}function zx(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:t=>i.getAttribute(t)}}function Ym(i,t,e){for(const n of t.getAttributeKeys())i.checkAttribute(t,n)||e.removeAttribute(n,t)}class Qm{constructor(t={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(a,l){let u;for(const f of new dr(a)){const p={};for(const y of f.getAttributeKeys())p[y]=f.getAttribute(y);const k=l.createElement(f.name,p);u&&l.append(k,u),u=ht._createAt(k,0)}return u}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=Ea.createFrom(t),this.conversionApi.store={};const{modelRange:o}=this._convertItem(t,this._modelCursor),s=e.createDocumentFragment();if(o){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))e.append(a,s);s.markers=function(a,l){const u=new Set,f=new Map,p=X._createIn(a).getItems();for(const k of p)k.name=="$marker"&&u.add(k);for(const k of u){const y=k.getAttribute("data-name"),T=l.createPositionBefore(k);f.has(y)?f.get(y).end=T.clone():f.set(y,new X(T.clone())),l.remove(k)}return f}(s,e)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof X))throw new v("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){let n=e.is("position")?e:ht._createAt(e,0);const o=new X(n);for(const s of Array.from(t.getChildren())){const a=this._convertItem(s,n);a.modelRange instanceof X&&(o.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(t,e){const n=this._splitToAllowedParent(t,e);return!!n&&(this.conversionApi.writer.insert(t,n.position),!0)}_updateConversionResult(t,e){const n=this._getSplitParts(t),o=this.conversionApi.writer;e.modelRange||(e.modelRange=o.createRange(o.createPositionBefore(t),o.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(t);e.modelCursor=s?o.createPositionAt(s,0):e.modelRange.end}_splitToAllowedParent(t,e){const{schema:n,writer:o}=this.conversionApi;let s=n.findAllowedParent(e,t);if(s){if(s===e.parent)return{position:e};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return Vm(e,t,n)?{position:$m(e,o)}:null;const a=this.conversionApi.writer.split(e,s),l=[];for(const f of a.range.getWalker())if(f.type=="elementEnd")l.push(f.item);else{const p=l.pop(),k=f.item;this._registerSplitPair(p,k)}const u=a.range.end.parent;return this._cursorParents.set(t,u),{position:a.position,cursorParent:u}}_registerSplitPair(t,e){this._splitParts.has(t)||this._splitParts.set(t,[t]);const n=this._splitParts.get(t);this._splitParts.set(e,n),n.push(e)}_getSplitParts(t){let e;return e=this._splitParts.has(t)?this._splitParts.get(t):[t],e}_keepEmptyElement(t){this._emptyElementsToKeep.add(t)}_removeEmptyElements(){let t=!1;for(const e of this._splitParts.keys())e.isEmpty&&!this._emptyElementsToKeep.has(e)&&(this.conversionApi.writer.remove(e),this._splitParts.delete(e),t=!0);t&&this._removeEmptyElements()}}tt(Qm,V);class jx{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class Fx{constructor(t){this.domParser=new DOMParser,this.domConverter=new dl(t,{renderingMode:"data"}),this.htmlWriter=new jx}toData(t){const e=this.domConverter.viewToDom(t);return this.htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this.domConverter.domToView(e)}registerRawContentMatcher(t){this.domConverter.registerRawContentMatcher(t)}useFillerType(t){this.domConverter.blockFillerMode=t=="marked"?"markedNbsp":"nbsp"}_toDom(t){t.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(t=`<body>${t}</body>`);const e=this.domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class Zm{constructor(t,e){this.model=t,this.mapper=new xh,this.downcastDispatcher=new Eh({mapper:this.mapper,schema:t.schema}),this.downcastDispatcher.on("insert:$text",(n,o,s)=>{if(!s.consumable.consume(o.item,n.name))return;const a=s.writer,l=s.mapper.toViewPosition(o.range.start),u=a.createText(o.item.data);a.insert(l,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Qm({schema:t.schema}),this.viewDocument=new _a(e),this.stylesProcessor=e,this.htmlProcessor=new Fx(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Op(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:s,consumable:a,writer:l})=>{let u=o.modelCursor;if(!a.test(o.viewItem))return;if(!s.checkChild(u,"$text")){if(!Vm(u,"$text",s)||o.viewItem.data.trim().length==0)return;u=$m(u,l)}a.consume(o.viewItem);const f=l.createText(o.viewItem.data);l.insert(f,u),o.modelRange=l.createRange(u,u.getShiftedBy(f.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Fm)},{priority:"lowest"})}get(t={}){const{rootName:e="main",trim:n="empty"}=t;if(!this._checkIfRootsExists([e]))throw new v("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(e);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,t):""}stringify(t,e={}){const n=this.toView(t,e);return this.processor.toData(n)}toView(t,e={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const s=X._createIn(t),a=new ar(n);this.mapper.bindElements(t,a);const l=t.is("documentFragment")?t.markers:function(u){const f=[],p=u.root.document;if(!p)return new Map;const k=X._createIn(u);for(const y of p.model.markers){const T=y.getRange(),P=T.isCollapsed,N=T.start.isEqual(k.start)||T.end.isEqual(k.end);if(P&&N)f.push([y.name,T]);else{const B=k.getIntersection(T);B&&f.push([y.name,B])}}return f.sort(([y,T],[P,N])=>{if(T.end.compareWith(N.start)!=="after")return 1;if(T.start.compareWith(N.end)!=="before")return-1;switch(T.start.compareWith(N.start)){case"before":return 1;case"after":return-1;default:switch(T.end.compareWith(N.end)){case"before":return 1;case"after":return-1;default:return P.localeCompare(y)}}}),new Map(f)}(t);return this.downcastDispatcher.convert(s,l,o,e),a}init(t){if(this.model.document.version)throw new v("datacontroller-init-document-not-empty",this);let e={};if(typeof t=="string"?e.main=t:e=t,!this._checkIfRootsExists(Object.keys(e)))throw new v("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(e)){const s=this.model.document.getRoot(o);n.insert(this.parse(e[o],s),s,0)}}),Promise.resolve()}set(t,e={}){let n={};if(typeof t=="string"?n.main=t:n=t,!this._checkIfRootsExists(Object.keys(n)))throw new v("datacontroller-set-non-existent-root",this);this.model.enqueueChange(e.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const a=this.model.document.getRoot(s);o.remove(o.createRangeIn(a)),o.insert(this.parse(n[s],a),a,0)}})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}addStyleProcessorRules(t){t(this.stylesProcessor)}registerRawContentMatcher(t){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(t),this.htmlProcessor.registerRawContentMatcher(t)}destroy(){this.stopListening()}_checkIfRootsExists(t){for(const e of t)if(!this.model.document.getRootNames().includes(e))return!1;return!0}}tt(Zm,zt);class Vx{constructor(t,e){this._helpers=new Map,this._downcast=Re(t),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Re(e),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(t,e){const n=this._downcast.includes(e);if(!this._upcast.includes(e)&&!n)throw new v("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:t,dispatchers:[e],isDowncast:n})}for(t){if(!this._helpers.has(t))throw new v("conversion-for-unknown-group",this);return this._helpers.get(t)}elementToElement(t){this.for("downcast").elementToElement(t);for(const{model:e,view:n}of Mh(t))this.for("upcast").elementToElement({model:e,view:n,converterPriority:t.converterPriority})}attributeToElement(t){this.for("downcast").attributeToElement(t);for(const{model:e,view:n}of Mh(t))this.for("upcast").elementToAttribute({view:n,model:e,converterPriority:t.converterPriority})}attributeToAttribute(t){this.for("downcast").attributeToAttribute(t);for(const{model:e,view:n}of Mh(t))this.for("upcast").attributeToAttribute({view:n,model:e})}_createConversionHelpers({name:t,dispatchers:e,isDowncast:n}){if(this._helpers.has(t))throw new v("conversion-group-exists",this);const o=n?new Ax(e):new xx(e);this._helpers.set(t,o)}}function*Mh(i){if(i.model.values)for(const t of i.model.values){const e={key:i.model.key,value:t},n=i.view[t],o=i.upcastAlso?i.upcastAlso[t]:void 0;yield*Jm(e,n,o)}else yield*Jm(i.model,i.view,i.upcastAlso)}function*Jm(i,t,e){if(yield{model:i,view:t},e)for(const n of Re(e))yield{model:i,view:n}}class Zr{constructor(t={}){typeof t=="string"&&(t=t==="transparent"?{isUndoable:!1}:{},M("batch-constructor-deprecated-string-type"));const{isUndoable:e=!0,isLocal:n=!0,isUndo:o=!1,isTyping:s=!1}=t;this.operations=[],this.isUndoable=e,this.isLocal=n,this.isUndo=o,this.isTyping=s}get type(){return M("batch-type-deprecated"),"default"}get baseVersion(){for(const t of this.operations)if(t.baseVersion!==null)return t.baseVersion;return null}addOperation(t){return t.batch=this,this.operations.push(t),t}}class Gn{constructor(t){this.baseVersion=t,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const t=Object.assign({},this);return t.__className=this.constructor.className,delete t.batch,delete t.isDocumentOperation,t}static get className(){return"Operation"}static fromJSON(t){return new this(t.baseVersion)}}class Yo{constructor(t){this.markers=new Map,this._children=new Qr,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(t){return t==="documentFragment"||t==="model:documentFragment"}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(fe.fromJSON(n)):e.push(_e.fromJSON(n));return new Yo(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(o){return typeof o=="string"?[new _e(o)]:(An(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new _e(s):s instanceof Co?new _e(s.data,s.getAttributes()):s))}(e);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const o of n)o.parent=null;return n}}function Ph(i,t){const e=(t=tb(t)).reduce((s,a)=>s+a.offsetSize,0),n=i.parent;Ta(i);const o=i.index;return n._insertChild(o,t),Sa(n,o+t.length),Sa(n,o),new X(i,i.getShiftedBy(e))}function Xm(i){if(!i.isFlat)throw new v("operation-utils-remove-range-not-flat",this);const t=i.start.parent;Ta(i.start),Ta(i.end);const e=t._removeChildren(i.start.index,i.end.index-i.start.index);return Sa(t,i.start.index),e}function Da(i,t){if(!i.isFlat)throw new v("operation-utils-move-range-not-flat",this);const e=Xm(i);return Ph(t=t._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),e)}function tb(i){const t=[];i instanceof Array||(i=[i]);for(let e=0;e<i.length;e++)if(typeof i[e]=="string")t.push(new _e(i[e]));else if(i[e]instanceof Co)t.push(new _e(i[e].data,i[e].getAttributes()));else if(i[e]instanceof Yo||i[e]instanceof Qr)for(const n of i[e])t.push(n);else i[e]instanceof cr&&t.push(i[e]);for(let e=1;e<t.length;e++){const n=t[e],o=t[e-1];n instanceof _e&&o instanceof _e&&eb(n,o)&&(t.splice(e-1,2,new _e(o.data+n.data,o.getAttributes())),e--)}return t}function Sa(i,t){const e=i.getChild(t-1),n=i.getChild(t);if(e&&n&&e.is("$text")&&n.is("$text")&&eb(e,n)){const o=new _e(e.data+n.data,e.getAttributes());i._removeChildren(t-1,2),i._insertChild(t-1,o)}}function Ta(i){const t=i.textNode,e=i.parent;if(t){const n=i.offset-t.startOffset,o=t.index;e._removeChildren(o,1);const s=new _e(t.data.substr(0,n),t.getAttributes()),a=new _e(t.data.substr(n),t.getAttributes());e._insertChild(o,[s,a])}}function eb(i,t){const e=i.getAttributes(),n=t.getAttributes();for(const o of e){if(o[1]!==t.getAttribute(o[0]))return!1;n.next()}return n.next().done}const nb=function(i,t){return um(i,t)};class ze extends Gn{constructor(t,e,n,o,s){super(s),this.range=t.clone(),this.key=e,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new ze(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ze(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const t=super.toJSON();return t.range=this.range.toJSON(),t}_validate(){if(!this.range.isFlat)throw new v("attribute-operation-range-not-flat",this);for(const t of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!nb(t.getAttribute(this.key),this.oldValue))throw new v("attribute-operation-wrong-old-value",this,{item:t,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&t.hasAttribute(this.key))throw new v("attribute-operation-attribute-exists",this,{node:t,key:this.key})}}_execute(){nb(this.oldValue,this.newValue)||function(t,e,n){Ta(t.start),Ta(t.end);for(const o of t.getItems({shallow:!0})){const s=o.is("$textProxy")?o.textNode:o;n!==null?s._setAttribute(e,n):s._removeAttribute(e),Sa(s.parent,s.index)}Sa(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(t,e){return new ze(X.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class $x extends Gn{constructor(t,e){super(null),this.sourcePosition=t.clone(),this.howMany=e}get type(){return"detach"}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t}_validate(){if(this.sourcePosition.root.document)throw new v("detach-operation-on-document-node",this)}_execute(){Xm(X._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ge extends Gn{constructor(t,e,n,o){super(o),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toNext",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>t.maxOffset)throw new v("move-operation-nodes-do-not-exist",this);if(t===e&&n<o&&o<n+this.howMany)throw new v("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Ye(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new v("move-operation-node-into-itself",this)}}_execute(){Da(X._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=this.sourcePosition.toJSON(),t.targetPosition=this.targetPosition.toJSON(),t}static get className(){return"MoveOperation"}static fromJSON(t,e){const n=ht.fromJSON(t.sourcePosition,e),o=ht.fromJSON(t.targetPosition,e);return new this(n,t.howMany,o,t.baseVersion)}}class Ze extends Gn{constructor(t,e,n){super(n),this.position=t.clone(),this.position.stickiness="toNone",this.nodes=new Qr(tb(e)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const t=new Qr([...this.nodes].map(n=>n._clone(!0))),e=new Ze(this.position,t,this.baseVersion);return e.shouldReceiveAttributes=this.shouldReceiveAttributes,e}getReversed(){const t=this.position.root.document.graveyard,e=new ht(t,[0]);return new ge(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new v("insert-operation-position-invalid",this)}_execute(){const t=this.nodes;this.nodes=new Qr([...t].map(e=>e._clone(!0))),Ph(this.position,t)}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t.nodes=this.nodes.toJSON(),t}static get className(){return"InsertOperation"}static fromJSON(t,e){const n=[];for(const s of t.nodes)s.name?n.push(fe.fromJSON(s)):n.push(_e.fromJSON(s));const o=new Ze(ht.fromJSON(t.position,e),n,t.baseVersion);return o.shouldReceiveAttributes=t.shouldReceiveAttributes,o}}class xn extends Gn{constructor(t,e,n,o,s,a){super(a),this.name=t,this.oldRange=e?e.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}clone(){return new xn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new xn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return this.oldRange&&(t.oldRange=this.oldRange.toJSON()),this.newRange&&(t.newRange=this.newRange.toJSON()),delete t._markers,t}static get className(){return"MarkerOperation"}static fromJSON(t,e){return new xn(t.name,t.oldRange?X.fromJSON(t.oldRange,e):null,t.newRange?X.fromJSON(t.newRange,e):null,e.model.markers,t.affectsData,t.baseVersion)}}class En extends Gn{constructor(t,e,n,o){super(o),this.position=t,this.position.stickiness="toNext",this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new En(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new En(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof fe))throw new v("rename-operation-wrong-position",this);if(t.name!==this.oldName)throw new v("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const t=super.toJSON();return t.position=this.position.toJSON(),t}static get className(){return"RenameOperation"}static fromJSON(t,e){return new En(ht.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Qo extends Gn{constructor(t,e,n,o,s){super(s),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Qo(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Qo(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new v("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new v("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new v("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const t=super.toJSON();return t.root=this.root.toJSON(),t}static get className(){return"RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new v("rootattribute-operation-fromjson-no-root",this,{rootName:t.root});return new Qo(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}class $e extends Gn{constructor(t,e,n,o,s){super(s),this.sourcePosition=t.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=e,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new ht(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const t=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new X(this.sourcePosition,t)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.targetPosition._getTransformedByMergeOperation(this),e=this.sourcePosition.path.slice(0,-1),n=new ht(this.sourcePosition.root,e)._getTransformedByMergeOperation(this);return new ye(t,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent;if(!t.parent)throw new v("merge-operation-source-position-invalid",this);if(!e.parent)throw new v("merge-operation-target-position-invalid",this);if(this.howMany!=t.maxOffset)throw new v("merge-operation-how-many-invalid",this)}_execute(){const t=this.sourcePosition.parent;Da(X._createIn(t),this.targetPosition),Da(X._createOn(t),this.graveyardPosition)}toJSON(){const t=super.toJSON();return t.sourcePosition=t.sourcePosition.toJSON(),t.targetPosition=t.targetPosition.toJSON(),t.graveyardPosition=t.graveyardPosition.toJSON(),t}static get className(){return"MergeOperation"}static fromJSON(t,e){const n=ht.fromJSON(t.sourcePosition,e),o=ht.fromJSON(t.targetPosition,e),s=ht.fromJSON(t.graveyardPosition,e);return new this(n,t.howMany,o,s,t.baseVersion)}}class ye extends Gn{constructor(t,e,n,o,s){super(s),this.splitPosition=t.clone(),this.splitPosition.stickiness="toNext",this.howMany=e,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const t=this.insertionPosition.path.slice();return t.push(0),new ht(this.insertionPosition.root,t)}get movedRange(){const t=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new X(this.splitPosition,t)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const t=this.splitPosition.root.document.graveyard,e=new ht(t,[0]);return new $e(this.moveTargetPosition,this.howMany,this.splitPosition,e,this.baseVersion+1)}_validate(){const t=this.splitPosition.parent,e=this.splitPosition.offset;if(!t||t.maxOffset<e)throw new v("split-operation-position-invalid",this);if(!t.parent)throw new v("split-operation-split-in-root",this);if(this.howMany!=t.maxOffset-this.splitPosition.offset)throw new v("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new v("split-operation-graveyard-position-invalid",this)}_execute(){const t=this.splitPosition.parent;if(this.graveyardPosition)Da(X._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const e=t._clone();Ph(this.insertionPosition,e)}Da(new X(ht._createAt(t,this.splitPosition.offset),ht._createAt(t,t.maxOffset)),this.moveTargetPosition)}toJSON(){const t=super.toJSON();return t.splitPosition=this.splitPosition.toJSON(),t.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(t.graveyardPosition=this.graveyardPosition.toJSON()),t}static get className(){return"SplitOperation"}static getInsertionPosition(t){const e=t.path.slice(0,-1);return e[e.length-1]++,new ht(t.root,e,"toPrevious")}static fromJSON(t,e){const n=ht.fromJSON(t.splitPosition,e),o=ht.fromJSON(t.insertionPosition,e),s=t.graveyardPosition?ht.fromJSON(t.graveyardPosition,e):null;return new this(n,t.howMany,o,s,t.baseVersion)}}class Nh extends fe{constructor(t,e,n="main"){super(e),this._document=t,this.rootName=n}get document(){return this._document}is(t,e){return e?e===this.name&&(t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"):t==="rootElement"||t==="model:rootElement"||t==="element"||t==="model:element"||t==="node"||t==="model:node"}toJSON(){return this.rootName}}class Hx{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new _e(t,e)}createElement(t,e){return new fe(t,e)}createDocumentFragment(){return new Yo}cloneElement(t,e=!0){return t._clone(e)}insert(t,e,n=0){if(this._assertWriterUsedCorrectly(),t instanceof _e&&t.data=="")return;const o=ht._createAt(e,n);if(t.parent){if(rb(t.root,o.root))return void this.move(X._createOn(t),o);if(t.root.document)throw new v("model-writer-insert-forbidden-move",this);this.remove(t)}const s=o.root.document?o.root.document.version:null,a=new Ze(o,t,s);if(t instanceof _e&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),t instanceof Yo)for(const[l,u]of t.markers){const f=ht._createAt(u.root,0),p={range:new X(u.start._getCombined(f,o),u.end._getCombined(f,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(l)?this.updateMarker(l,p):this.addMarker(l,p)}}insertText(t,e,n,o){e instanceof Yo||e instanceof fe||e instanceof ht?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof Yo||e instanceof fe||e instanceof ht?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof Yo||e instanceof fe?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof Yo||e instanceof fe?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){if(this._assertWriterUsedCorrectly(),n instanceof X){const o=n.getMinimalFlatRanges();for(const s of o)ob(this,t,e,s)}else ib(this,t,e,n)}setAttributes(t,e){for(const[n,o]of Pn(t))this.setAttribute(n,o,e)}removeAttribute(t,e){if(this._assertWriterUsedCorrectly(),e instanceof X){const n=e.getMinimalFlatRanges();for(const o of n)ob(this,t,null,o)}else ib(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(t instanceof X)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof X))throw new v("writer-move-invalid-range",this);if(!t.isFlat)throw new v("writer-move-range-not-flat",this);const o=ht._createAt(e,n);if(o.isEqual(t.start))return;if(this._addOperationForAffectedMarkers("move",t),!rb(t.root,o.root))throw new v("writer-move-different-document",this);const s=t.root.document?t.root.document.version:null,a=new ge(t.start,t.end.offset-t.start.offset,o,s);this.batch.addOperation(a),this.model.applyOperation(a)}remove(t){this._assertWriterUsedCorrectly();const e=(t instanceof X?t:X._createOn(t)).getMinimalFlatRanges().reverse();for(const n of e)this._addOperationForAffectedMarkers("move",n),Ux(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(t){this._assertWriterUsedCorrectly();const e=t.nodeBefore,n=t.nodeAfter;if(this._addOperationForAffectedMarkers("merge",t),!(e instanceof fe))throw new v("writer-merge-no-element-before",this);if(!(n instanceof fe))throw new v("writer-merge-no-element-after",this);t.root.document?this._merge(t):this._mergeDetached(t)}createPositionFromPath(t,e,n){return this.model.createPositionFromPath(t,e,n)}createPositionAt(t,e){return this.model.createPositionAt(t,e)}createPositionAfter(t){return this.model.createPositionAfter(t)}createPositionBefore(t){return this.model.createPositionBefore(t)}createRange(t,e){return this.model.createRange(t,e)}createRangeIn(t){return this.model.createRangeIn(t)}createRangeOn(t){return this.model.createRangeOn(t)}createSelection(t,e,n){return this.model.createSelection(t,e,n)}_mergeDetached(t){const e=t.nodeBefore,n=t.nodeAfter;this.move(X._createIn(n),ht._createAt(e,"end")),this.remove(n)}_merge(t){const e=ht._createAt(t.nodeBefore,"end"),n=ht._createAt(t.nodeAfter,0),o=t.root.document.graveyard,s=new ht(o,[0]),a=t.root.document.version,l=new $e(n,t.nodeAfter.maxOffset,e,s,a);this.batch.addOperation(l),this.model.applyOperation(l)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof fe))throw new v("writer-rename-not-element-instance",this);const n=t.root.document?t.root.document.version:null,o=new En(ht._createBefore(t),t.name,e,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(t,e){this._assertWriterUsedCorrectly();let n,o,s=t.parent;if(!s.parent)throw new v("writer-split-element-no-parent",this);if(e||(e=s.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new v("writer-split-invalid-limit-element",this);do{const a=s.root.document?s.root.document.version:null,l=s.maxOffset-t.offset,u=ye.getInsertionPosition(t),f=new ye(t,l,u,null,a);this.batch.addOperation(f),this.model.applyOperation(f),n||o||(n=s,o=t.parent.nextSibling),s=(t=this.createPositionAfter(t.parent)).parent}while(s!==e);return{position:t,range:new X(ht._createAt(n,"end"),ht._createAt(o,0))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new v("writer-wrap-range-not-flat",this);const n=e instanceof fe?e:new fe(e);if(n.childCount>0)throw new v("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new v("writer-wrap-element-attached",this);this.insert(n,t.start);const o=new X(t.start.getShiftedBy(1),t.end.getShiftedBy(1));this.move(o,ht._createAt(n,0))}unwrap(t){if(this._assertWriterUsedCorrectly(),t.parent===null)throw new v("writer-unwrap-element-no-parent",this);this.move(X._createIn(t),this.createPositionAfter(t)),this.remove(t)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||typeof e.usingOperation!="boolean")throw new v("writer-addmarker-no-usingoperation",this);const n=e.usingOperation,o=e.range,s=e.affectsData!==void 0&&e.affectsData;if(this.model.markers.has(t))throw new v("writer-addmarker-marker-exists",this);if(!o)throw new v("writer-addmarker-no-range",this);return n?(Ia(this,t,null,o,s),this.model.markers.get(t)):this.model.markers._set(t,o,n,s)}updateMarker(t,e){this._assertWriterUsedCorrectly();const n=typeof t=="string"?t:t.name,o=this.model.markers.get(n);if(!o)throw new v("writer-updatemarker-marker-not-exists",this);if(!e)return M("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const s=typeof e.usingOperation=="boolean",a=typeof e.affectsData=="boolean",l=a?e.affectsData:o.affectsData;if(!s&&!e.range&&!a)throw new v("writer-updatemarker-wrong-options",this);const u=o.getRange(),f=e.range?e.range:u;s&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?Ia(this,n,null,f,l):(Ia(this,n,u,null,l),this.model.markers._set(n,f,void 0,l)):o.managedUsingOperations?Ia(this,n,u,f,l):this.model.markers._set(n,f,void 0,l)}removeMarker(t){this._assertWriterUsedCorrectly();const e=typeof t=="string"?t:t.name;if(!this.model.markers.has(e))throw new v("writer-removemarker-no-marker",this);const n=this.model.markers.get(e);if(!n.managedUsingOperations)return void this.model.markers._remove(e);Ia(this,e,n.getRange(),null,n.affectsData)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._setSelectionAttribute(t,e);else for(const[n,o]of Pn(t))this._setSelectionAttribute(n,o)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),typeof t=="string")this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=so._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=so._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new v("writer-incorrect-use",this)}_addOperationForAffectedMarkers(t,e){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let s=!1;if(t==="move")s=e.containsPosition(o.start)||e.start.isEqual(o.start)||e.containsPosition(o.end)||e.end.isEqual(o.end);else{const a=e.nodeBefore,l=e.nodeAfter,u=o.start.parent==a&&o.start.isAtEnd,f=o.end.parent==l&&o.end.offset==0,p=o.end.nodeAfter==l,k=o.start.nodeAfter==l;s=u||f||p||k}s&&this.updateMarker(n.name,{range:o})}}}function ob(i,t,e,n){const o=i.model,s=o.document;let a,l,u,f=n.start;for(const k of n.getWalker({shallow:!0}))u=k.item.getAttribute(t),a&&l!=u&&(l!=e&&p(),f=a),a=k.nextPosition,l=u;function p(){const k=new X(f,a),y=k.root.document?s.version:null,T=new ze(k,t,l,e,y);i.batch.addOperation(T),o.applyOperation(T)}a instanceof ht&&a!=f&&l!=e&&p()}function ib(i,t,e,n){const o=i.model,s=o.document,a=n.getAttribute(t);let l,u;if(a!=e){if(n.root===n){const f=n.document?s.version:null;u=new Qo(n,t,a,e,f)}else{l=new X(ht._createBefore(n),i.createPositionAfter(n));const f=l.root.document?s.version:null;u=new ze(l,t,a,e,f)}i.batch.addOperation(u),o.applyOperation(u)}}function Ia(i,t,e,n,o){const s=i.model,a=s.document,l=new xn(t,e,n,s.markers,o,a.version);i.batch.addOperation(l),s.applyOperation(l)}function Ux(i,t,e,n){let o;if(i.root.document){const s=n.document,a=new ht(s.graveyard,[0]);o=new ge(i,t,a,s.version)}else o=new $x(i,t);e.addOperation(o),n.applyOperation(o)}function rb(i,t){return i===t||i instanceof Nh&&t instanceof Nh}class qx{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems({shallow:!0}))this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{if(t.sourcePosition.isEqual(t.targetPosition)||t.sourcePosition.getShiftedBy(t.howMany).isEqual(t.targetPosition))return;const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=X._createFromPositionAndShift(t.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const e=t.splitPosition.parent;this._isInInsertedElement(e)||this._markRemove(e,t.splitPosition.offset,t.howMany),this._isInInsertedElement(t.insertionPosition.parent)||this._markInsert(t.insertionPosition.parent,t.insertionPosition.offset,1),t.graveyardPosition&&this._markRemove(t.graveyardPosition.parent,t.graveyardPosition.offset,1);break}case"merge":{const e=t.sourcePosition.parent;this._isInInsertedElement(e.parent)||this._markRemove(e.parent,e.startOffset,1);const n=t.graveyardPosition.parent;this._markInsert(n,t.graveyardPosition.offset,1);const o=t.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,t.targetPosition.offset,e.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(t,e,n){const o=this._changedMarkers.get(t);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{newMarkerData:n,oldMarkerData:e})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)n.oldMarkerData.range!=null&&t.push({name:e,range:n.oldMarkerData.range});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)n.newMarkerData.range!=null&&t.push({name:e,range:n.newMarkerData.range});return t}getChangedMarkers(){return Array.from(this._changedMarkers).map(([t,e])=>({name:t,data:{oldRange:e.oldMarkerData.range,newRange:e.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:t,oldMarkerData:e}of this._changedMarkers.values()){if(t.affectsData!==e.affectsData)return!0;if(t.affectsData){const n=t.range&&!e.range,o=!t.range&&e.range,s=t.range&&e.range&&!t.range.isEqual(e.range);if(n||o||s)return!0}}return!1}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let e=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((p,k)=>p.offset===k.offset?p.type!=k.type?p.type=="remove"?-1:1:0:p.offset<k.offset?-1:1),s=this._elementSnapshots.get(n),a=sb(n.getChildren()),l=Wx(s.length,o);let u=0,f=0;for(const p of l)if(p==="i")e.push(this._getInsertDiff(n,u,a[u])),u++;else if(p==="r")e.push(this._getRemoveDiff(n,u,s[f])),f++;else if(p==="a"){const k=a[u].attributes,y=s[f].attributes;let T;if(a[u].name=="$text")T=new X(ht._createAt(n,u),ht._createAt(n,u+1));else{const P=n.offsetToIndex(u);T=new X(ht._createAt(n,u),ht._createAt(n.getChild(P),0))}e.push(...this._getAttributesDiff(T,y,k)),u++,f++}else u++,f++}e.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<e.length;n++){const s=e[o],a=e[n],l=s.type=="remove"&&a.type=="remove"&&s.name=="$text"&&a.name=="$text"&&s.position.isEqual(a.position),u=s.type=="insert"&&a.type=="insert"&&s.name=="$text"&&a.name=="$text"&&s.position.parent==a.position.parent&&s.position.offset+s.length==a.position.offset,f=s.type=="attribute"&&a.type=="attribute"&&s.position.parent==a.position.parent&&s.range.isFlat&&a.range.isFlat&&s.position.offset+s.length==a.position.offset&&s.attributeKey==a.attributeKey&&s.attributeOldValue==a.attributeOldValue&&s.attributeNewValue==a.attributeNewValue;l||u||f?(s.length++,f&&(s.range.end=s.range.end.getShiftedBy(1)),e[n]=null):o=n}e=e.filter(n=>n);for(const n of e)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e,this._cachedChanges=e.filter(Gx),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(t){if(this._isInInsertedElement(t.parent))return;this._markRemove(t.parent,t.startOffset,t.offsetSize),this._markInsert(t.parent,t.startOffset,t.offsetSize),this._refreshedItems.add(t);const e=X._createOn(t);for(const n of this._markerCollection.getMarkersIntersectingRange(e)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(t,e,n){const o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){const o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,sb(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const o=t.offset+t.howMany,s=n.offset+n.howMany;if(t.type=="insert"&&(n.type=="insert"&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<s&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),n.type=="remove"&&t.offset<n.offset&&(n.offset+=t.howMany),n.type=="attribute")){if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<s){const a=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:a-n.howMany,count:this._changeCount++})}}if(t.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=t.howMany;else if(o<=s)if(t.offset<n.offset){const a=o-n.offset;n.offset=t.offset,n.howMany-=a,t.nodesToHandle-=a}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<s){const a=s-t.offset;n.howMany-=a,t.nodesToHandle-=a}}if(n.type=="remove"&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const a=o-n.offset;n.offset=t.offset,n.howMany-=a}else if(t.offset<s)if(o<=s){const a=n.howMany;n.howMany=t.offset-n.offset;const l=a-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:l,count:this._changeCount++})}else n.howMany-=s-t.offset}}if(t.type=="attribute"){if(n.type=="insert")if(t.offset<n.offset&&o>n.offset){if(o>s){const a={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(a,e),e.push(a)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<s&&(o>s?(t.nodesToHandle=o-s,t.offset=s):t.nodesToHandle=0);if(n.type=="remove"&&t.offset<n.offset&&o>n.offset){const a={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(a,e),e.push(a),t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}n.type=="attribute"&&(t.offset>=n.offset&&o<=s?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=s&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:ht._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:ht._createAt(t,e),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const o=[];n=new Map(n);for(const[s,a]of e){const l=n.has(s)?n.get(s):null;l!==a&&o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:s,attributeOldValue:a,attributeNewValue:l,changeCount:this._changeCount++}),n.delete(s)}for(const[s,a]of n)o.push({type:"attribute",position:t.start,range:t.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return o}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),o=t.startOffset;if(n){for(const s of n)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const o=new X(ht._createAt(t,e),ht._createAt(t,e+n));for(const s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function sb(i){const t=[];for(const e of i)if(e.is("$text"))for(let n=0;n<e.data.length;n++)t.push({name:"$text",attributes:new Map(e.getAttributes())});else t.push({name:e.name,attributes:new Map(e.getAttributes())});return t}function Wx(i,t){const e=[];let n=0,o=0;for(const s of t){if(s.offset>n){for(let a=0;a<s.offset-n;a++)e.push("e");o+=s.offset-n}if(s.type=="insert"){for(let a=0;a<s.howMany;a++)e.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let a=0;a<s.howMany;a++)e.push("r");n=s.offset,o+=s.howMany}else e.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,o+=s.howMany}if(o<i)for(let s=0;s<i-o-n;s++)e.push("e");return e}function Gx(i){const t=i.position&&i.position.root.rootName=="$graveyard",e=i.range&&i.range.root.rootName=="$graveyard";return!t&&!e}class Kx{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(t){this._operations.length&&t>this._version+1&&this._gaps.set(this._version,t),this._version=t}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(t){if(t.baseVersion!==this.version)throw new v("model-document-history-addoperation-incorrect-version",this,{operation:t,historyVersion:this.version});this._operations.push(t),this._version++,this._baseVersionToOperationIndex.set(t.baseVersion,this._operations.length-1)}getOperations(t,e=this.version){if(!this._operations.length)return[];const n=this._operations[0];t===void 0&&(t=n.baseVersion);let o=e-1;for(const[l,u]of this._gaps)t>l&&t<u&&(t=u),o>l&&o<u&&(o=l-1);if(o<n.baseVersion||t>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(t);s===void 0&&(s=0);let a=this._baseVersionToOperationIndex.get(o);return a===void 0&&(a=this._operations.length-1),this._operations.slice(s,a+1)}getOperation(t){const e=this._baseVersionToOperationIndex.get(t);if(e!==void 0)return this._operations[e]}setOperationAsUndone(t,e){this._undoPairs.set(e,t),this._undoneOperations.add(t)}isUndoingOperation(t){return this._undoPairs.has(t)}isUndoneOperation(t){return this._undoneOperations.has(t)}getUndoneOperation(t){return this._undoPairs.get(t)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function ab(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function cb(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const Yx=function(){const i=/\p{Regional_Indicator}{2}/u.source,t="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(e=>e.source).join("|")+")";return new RegExp(`${i}|${t}(?:\u200D${t})*`,"ug")}();function Qx(i,t){const e=String(i).matchAll(Yx);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}const Bh="$graveyard";class lb{constructor(t){this.model=t,this.history=new Kx,this.selection=new so(this),this.roots=new Cn({idProperty:"rootName"}),this.differ=new qx(t.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Bh),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(t,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(t.markers,"update",(e,n,o,s,a)=>{const l={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,a,l),o===null&&n.on("change",(u,f)=>{const p=n.getData();this.differ.bufferMarkerChange(n.name,{...p,range:f},p)})})}get version(){return this.history.version}set version(t){this.history.version=t}get graveyard(){return this.getRoot(Bh)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new v("model-document-createroot-name-exists",this,{name:e});const n=new Nh(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Bh)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=nl(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_handleChangeBlock(t){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(t),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",t.batch):this.fire("change",t.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model,n=e.schema,o=e.createPositionFromPath(t,[0]);return n.getNearestSelectionRange(o)||e.createRange(o)}_validateSelectionRange(t){return db(t.start)&&db(t.end)}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(this.selection.refresh(),e=n(t),e)break;while(e)}}function db(i){const t=i.textNode;if(t){const e=t.data,n=i.offset-t.startOffset;return!ab(e,n)&&!cb(e,n)}return!0}tt(lb,V);class ub{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){const e=t instanceof Jr?t.name:t;return this._markers.has(e)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){const s=t instanceof Jr?t.name:t;if(s.includes(","))throw new v("markercollection-incorrect-marker-name",this);const a=this._markers.get(s);if(a){const f=a.getData(),p=a.getRange();let k=!1;return p.isEqual(e)||(a._attachLiveRange(yo.fromRange(e)),k=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,k=!0),typeof o=="boolean"&&o!=a.affectsData&&(a._affectsData=o,k=!0),k&&this.fire("update:"+s,a,p,e,f),a}const l=yo.fromRange(e),u=new Jr(s,l,n,o);return this._markers.set(s,u),this.fire("update:"+s,u,null,e,{...u.getData(),range:null}),u}_remove(t){const e=t instanceof Jr?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(t){const e=t instanceof Jr?t.name:t,n=this._markers.get(e);if(!n)throw new v("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+e,n,o,o,n.getData())}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)e.getRange().getIntersection(t)!==null&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}tt(ub,V);class Jr{constructor(t,e,n,o){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.toRange()}is(t){return t==="marker"||t==="model:marker"}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}tt(Jr,V);class Je extends Gn{get type(){return"noop"}clone(){return new Je(this.baseVersion)}getReversed(){return new Je(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const co={};co[ze.className]=ze,co[Ze.className]=Ze,co[xn.className]=xn,co[ge.className]=ge,co[Je.className]=Je,co[Gn.className]=Gn,co[En.className]=En,co[Qo.className]=Qo,co[ye.className]=ye,co[$e.className]=$e;class rn extends ht{constructor(t,e,n="toNone"){if(super(t,e,n),!this.root.is("rootElement"))throw new v("model-liveposition-root-not-rootelement",t);Zx.call(this)}detach(){this.stopListening()}is(t){return t==="livePosition"||t==="model:livePosition"||t=="position"||t==="model:position"}toPosition(){return new ht(this.root,this.path.slice(),this.stickiness)}static fromPosition(t,e){return new this(t.root,t.path.slice(),e||t.stickiness)}}function Zx(){this.listenTo(this.root.document.model,"applyOperation",(i,t)=>{const e=t[0];e.isDocumentOperation&&Jx.call(this,e)},{priority:"low"})}function Jx(i){const t=this.getTransformedByOperation(i);if(!this.isEqual(t)){const e=this.toPosition();this.path=t.path,this.root=t.root,this.fire("change",e)}}tt(rn,V);class Xx{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._documentFragment=e.createDocumentFragment(),this._documentFragmentPosition=e.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(t){for(const e of Array.from(t))this._handleNode(e);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(t){const e=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(t);if(n.isAfter(e)){if(this._lastNode=t,this.position.parent!=t||!this.position.isAtEnd)throw new v("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?X._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new X(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(t){if(this.schema.isObject(t))return void this._handleObject(t);let e=this._checkAndAutoParagraphToAllowedPosition(t);e||(e=this._checkAndSplitToAllowedPosition(t),e)?(this._appendToFragment(t),this._firstNode||(this._firstNode=t),this._lastNode=t):this._handleDisallowedNode(t)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const t=rn.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=t.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=t.toPosition(),t.detach()}_handleObject(t){this._checkAndSplitToAllowedPosition(t)?this._appendToFragment(t):this._tryAutoparagraphing(t)}_handleDisallowedNode(t){t.is("element")?this.handleNodes(t.getChildren()):this._tryAutoparagraphing(t)}_appendToFragment(t){if(!this.schema.checkChild(this.position,t))throw new v("insertcontent-wrong-position",this,{node:t,position:this.position});this.writer.insert(t,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(t.offsetSize),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_setAffectedBoundaries(t){this._affectedStart||(this._affectedStart=rn.fromPosition(t,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(t)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=rn.fromPosition(t,"toNext"))}_mergeOnLeft(){const t=this._firstNode;if(!(t instanceof fe)||!this._canMergeLeft(t))return;const e=rn._createBefore(t);e.stickiness="toNext";const n=rn.fromPosition(this.position,"toNext");this._affectedStart.isEqual(e)&&(this._affectedStart.detach(),this._affectedStart=rn._createAt(e.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=rn._createAt(e.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_mergeOnRight(){const t=this._lastNode;if(!(t instanceof fe)||!this._canMergeRight(t))return;const e=rn._createAfter(t);if(e.stickiness="toNext",!this.position.isEqual(e))throw new v("insertcontent-invalid-insertion-position",this);this.position=ht._createAt(e.nodeBefore,"end");const n=rn.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(e)&&(this._affectedEnd.detach(),this._affectedEnd=rn._createAt(e.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=e.nodeBefore,this._lastNode=e.nodeBefore),this.writer.merge(e),e.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=rn._createAt(e.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),e.detach()}_canMergeLeft(t){const e=t.previousSibling;return e instanceof fe&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(e,t)}_canMergeRight(t){const e=t.nextSibling;return e instanceof fe&&this.canMergeWith.has(e)&&this.model.schema.checkMerge(t,e)}_tryAutoparagraphing(t){const e=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,e)&&this.schema.checkChild(e,t)&&(e._appendChild(t),this._handleNode(e))}_checkAndAutoParagraphToAllowedPosition(t){if(this.schema.checkChild(this.position.parent,t))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",t))return!1;this._insertPartialFragment();const e=this.writer.createElement("paragraph");return this.writer.insert(e,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=e,this.position=this.writer.createPositionAt(e,0),!0}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(this.position.parent,t);if(!e)return!1;for(e!=this.position.parent&&this._insertPartialFragment();e!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===e&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(t,e){return this.schema.checkChild(t,e)?t:this.schema.isLimit(t)?null:this._getAllowedIn(t.parent,e)}}function hb(i,t,e="auto"){const n=i.getSelectedElement();if(n&&t.schema.isObject(n)&&!t.schema.isInline(n))return["before","after"].includes(e)?t.createRange(t.createPositionAt(n,e)):t.createRangeOn(n);const o=Qe(i.getSelectedBlocks());if(!o)return t.createRange(i.focus);if(o.isEmpty)return t.createRange(t.createPositionAt(o,0));const s=t.createPositionAfter(o);return i.focus.isTouching(s)?t.createRange(s):t.createRange(t.createPositionBefore(o))}function tE(i,t,e,n,o={}){if(!i.schema.isObject(t))throw new v("insertobject-element-not-an-object",i,{object:t});let s;s=e?e.is("selection")?e:i.createSelection(e,n):i.document.selection;let a=s;o.findOptimalPosition&&i.schema.isBlock(t)&&(a=i.createSelection(hb(s,i,o.findOptimalPosition)));const l=Qe(s.getSelectedBlocks()),u={};return l&&Object.assign(u,i.schema.getAttributesWithProperty(l,"copyOnReplace",!0)),i.change(f=>{a.isCollapsed||i.deleteContent(a,{doNotAutoparagraph:!0});let p=t;const k=a.anchor.parent;!i.schema.checkChild(k,t)&&i.schema.checkChild(k,"paragraph")&&i.schema.checkChild("paragraph",t)&&(p=f.createElement("paragraph"),f.insert(t,p)),i.schema.setAllowedAttributes(p,u,f);const y=i.insertContent(p,a);return y.isCollapsed||o.setSelection&&function(T,P,N,B){const z=T.model;if(N=="after"){let q=P.nextSibling;!(q&&z.schema.checkChild(q,"$text"))&&z.schema.checkChild(P.parent,"paragraph")&&(q=T.createElement("paragraph"),z.schema.setAllowedAttributes(q,B,T),z.insertContent(q,T.createPositionAfter(P))),q&&T.setSelection(q,0)}else{if(N!="on")throw new v("insertobject-invalid-place-parameter-value",z);T.setSelection(P,"on")}}(f,t,o.setSelection,u),y})}function eE(i,t,e={}){if(t.isCollapsed)return;const n=t.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(s=>{if(!e.doNotResetEntireContent&&function(f,p){const k=f.getLimitElement(p);if(!p.containsEntireContent(k))return!1;const y=p.getFirstRange();return y.start.parent==y.end.parent?!1:f.checkChild(k,"paragraph")}(o,t))return void function(f,p){const k=f.model.schema.getLimitElement(p);f.remove(f.createRangeIn(k)),pb(f,f.createPositionAt(k,0),p)}(s,t);const a={};if(!e.doNotAutoparagraph){const f=t.getSelectedElement();f&&Object.assign(a,o.getAttributesWithProperty(f,"copyOnReplace",!0))}const[l,u]=function(f){const p=f.root.document.model,k=f.start;let y=f.end;if(p.hasContent(f,{ignoreMarkers:!0})){const T=function(P){const N=P.parent,B=N.root.document.model.schema,z=N.getAncestors({parentFirst:!0,includeSelf:!0});for(const q of z){if(B.isLimit(q))return null;if(B.isBlock(q))return q}}(y);if(T&&y.isTouching(p.createPositionAt(T,0))){const P=p.createSelection(f);p.modifySelection(P,{direction:"backward"});const N=P.getLastPosition(),B=p.createRange(N,y);p.hasContent(B,{ignoreMarkers:!0})||(y=N)}}return[rn.fromPosition(k,"toPrevious"),rn.fromPosition(y,"toNext")]}(n);l.isTouching(u)||s.remove(s.createRange(l,u)),e.leaveUnmerged||(function(f,p,k){const y=f.model;if(!Lh(f.model.schema,p,k))return;const[T,P]=function(N,B){const z=N.getAncestors(),q=B.getAncestors();let st=0;for(;z[st]&&z[st]==q[st];)st++;return[z[st],q[st]]}(p,k);!T||!P||(!y.hasContent(T,{ignoreMarkers:!0})&&y.hasContent(P,{ignoreMarkers:!0})?gb(f,p,k,T.parent):fb(f,p,k,T.parent))}(s,l,u),o.removeDisallowedAttributes(l.parent.getChildren(),s)),mb(s,t,l),!e.doNotAutoparagraph&&function(f,p){const k=f.checkChild(p,"$text"),y=f.checkChild(p,"paragraph");return!k&&y}(o,l)&&pb(s,l,t,a),l.detach(),u.detach()})}function fb(i,t,e,n){const o=t.parent,s=e.parent;if(o!=n&&s!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(s)).isEqual(t)||i.insert(s,t),i.merge(t);e.parent.isEmpty;){const a=e.parent;e=i.createPositionBefore(a),i.remove(a)}Lh(i.model.schema,t,e)&&fb(i,t,e,n)}}function gb(i,t,e,n){const o=t.parent,s=e.parent;if(o!=n&&s!=n){for(t=i.createPositionAfter(o),(e=i.createPositionBefore(s)).isEqual(t)||i.insert(o,e);t.parent.isEmpty;){const a=t.parent;t=i.createPositionBefore(a),i.remove(a)}e=i.createPositionBefore(s),function(a,l){const u=l.nodeBefore,f=l.nodeAfter;u.name!=f.name&&a.rename(u,f.name),a.clearAttributes(u),a.setAttributes(Object.fromEntries(f.getAttributes()),u),a.merge(l)}(i,e),Lh(i.model.schema,t,e)&&gb(i,t,e,n)}}function Lh(i,t,e){const n=t.parent,o=e.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(s,a,l){const u=new X(s,a);for(const f of u.getWalker())if(l.isLimit(f.item))return!1;return!0}(t,e,i)}function pb(i,t,e,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,t),mb(i,e,i.createPositionAt(o,0))}function mb(i,t,e){t instanceof so?i.setSelection(e):t.setTo(e)}const bb=' ,.?!:;"-()';function nE(i,t){const{isForward:e,walker:n,unit:o,schema:s,treatEmojiAsSingleUnit:a}=i,{type:l,item:u,nextPosition:f}=t;if(l=="text")return i.unit==="word"?function(p,k){let y=p.position.textNode;if(y){let T=p.position.offset-y.startOffset;for(;!iE(y.data,T,k)&&!rE(y,T,k);){p.next();const P=k?p.position.nodeAfter:p.position.nodeBefore;if(P&&P.is("$text")){const N=P.data.charAt(k?0:P.data.length-1);bb.includes(N)||(p.next(),y=p.position.textNode)}T=p.position.offset-y.startOffset}}return p.position}(n,e):function(p,k,y){const T=p.position.textNode;if(T){const P=T.data;let N=p.position.offset-T.startOffset;for(;ab(P,N)||k=="character"&&cb(P,N)||y&&Qx(P,N);)p.next(),N=p.position.offset-T.startOffset}return p.position}(n,o,a);if(l==(e?"elementStart":"elementEnd")){if(s.isSelectable(u))return ht._createAt(u,e?"after":"before");if(s.checkChild(f,"$text"))return f}else{if(s.isLimit(u))return void n.skip(()=>!0);if(s.checkChild(f,"$text"))return f}}function oE(i,t){const e=i.root,n=ht._createAt(e,t?"end":0);return t?new X(i,n):new X(n,i)}function iE(i,t,e){const n=t+(e?0:-1);return bb.includes(i.charAt(n))}function rE(i,t,e){return t===(e?i.endOffset:0)}function kb(i,t){const e=[];Array.from(i.getItems({direction:"backward"})).map(n=>t.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{e.push(n.start.parent),t.remove(n)}),e.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const s=t.createRangeOn(o);o=o.parent,t.remove(s)}})}function sE(i){i.document.registerPostFixer(t=>function(e,n){const o=n.document.selection,s=n.schema,a=[];let l=!1;for(const u of o.getRanges()){const f=aE(u,s);f&&!f.isEqual(u)?(a.push(f),l=!0):a.push(u)}l&&e.setSelection(function(u){const f=[...u],p=new Set;let k=1;for(;k<f.length;){const y=f[k],T=f.slice(0,k);for(const[P,N]of T.entries())if(!p.has(P)){if(y.isEqual(N))p.add(P);else if(y.isIntersecting(N)){p.add(P),p.add(k);const B=y.getJoined(N);f.push(B)}}k++}return f.filter((y,T)=>!p.has(T))}(a),{backward:o.isBackward})}(t,i))}function aE(i,t){return i.isCollapsed?function(e,n){const o=e.start,s=n.getNearestSelectionRange(o);if(!s){const l=o.getAncestors().reverse().find(u=>n.isObject(u));return l?X._createOn(l):null}if(!s.isCollapsed)return s;const a=s.start;return o.isEqual(a)?null:new X(a)}(i,t):function(e,n){const{start:o,end:s}=e,a=n.checkChild(o,"$text"),l=n.checkChild(s,"$text"),u=n.getLimitElement(o),f=n.getLimitElement(s);if(u===f){if(a&&l)return null;if(function(y,T,P){const N=y.nodeAfter&&!P.isLimit(y.nodeAfter)||P.checkChild(y,"$text"),B=T.nodeBefore&&!P.isLimit(T.nodeBefore)||P.checkChild(T,"$text");return N||B}(o,s,n)){const y=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),T=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),P=y?y.start:o,N=T?T.end:s;return new X(P,N)}}const p=u&&!u.is("rootElement"),k=f&&!f.is("rootElement");if(p||k){const y=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,T=p&&(!y||!_b(o.nodeAfter,n)),P=k&&(!y||!_b(s.nodeBefore,n));let N=o,B=s;return T&&(N=ht._createBefore(wb(u,n))),P&&(B=ht._createAfter(wb(f,n))),new X(N,B)}return null}(i,t)}function wb(i,t){let e=i,n=e;for(;t.isLimit(n)&&n.parent;)e=n,n=n.parent;return e}function _b(i,t){return i&&t.isSelectable(i)}class vb{constructor(){this.markers=new ub,this.document=new lb(this),this.schema=new Km,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((t,e)=>{if(e.name==="$marker")return!0}),sE(this),this.document.registerPostFixer(Fm)}change(t){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Zr,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}catch(e){v.rethrowUnexpectedError(e,this)}}enqueueChange(t,e){try{t?typeof t=="function"?(e=t,t=new Zr):t instanceof Zr||(t=new Zr(t)):t=new Zr,this._pendingChanges.push({batch:t,callback:e}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){v.rethrowUnexpectedError(n,this)}}applyOperation(t){t._execute()}insertContent(t,e,n){return function(o,s,a,l){return o.change(u=>{let f;f=a?a instanceof Ko||a instanceof so?a:u.createSelection(a,l):o.document.selection,f.isCollapsed||o.deleteContent(f,{doNotAutoparagraph:!0});const p=new Xx(o,u,f.anchor);let k;k=s.is("documentFragment")?s.getChildren():[s],p.handleNodes(k);const y=p.getSelectionRange();y&&(f instanceof so?u.setSelection(y):f.setTo(y));const T=p.getAffectedRange()||o.createRange(f.anchor);return p.destroy(),T})}(this,t,e,n)}insertObject(t,e,n,o){return tE(this,t,e,n,o)}deleteContent(t,e){eE(this,t,e)}modifySelection(t,e){(function(n,o,s={}){const a=n.schema,l=s.direction!="backward",u=s.unit?s.unit:"character",f=!!s.treatEmojiAsSingleUnit,p=o.focus,k=new Go({boundaries:oE(p,l),singleCharacters:!0,direction:l?"forward":"backward"}),y={walker:k,schema:a,isForward:l,unit:u,treatEmojiAsSingleUnit:f};let T;for(;T=k.next();){if(T.done)return;const P=nE(y,T.value);if(P)return void(o instanceof so?n.change(N=>{N.setSelectionFocus(P)}):o.setFocus(P))}})(this,t,e)}getSelectedContent(t){return function(e,n){return e.change(o=>{const s=o.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return s;const l=a.start.root,u=a.start.getCommonPath(a.end),f=l.getNodeByPath(u);let p;p=a.start.parent==a.end.parent?a:o.createRange(o.createPositionAt(f,a.start.path[u.length]),o.createPositionAt(f,a.end.path[u.length]+1));const k=p.end.offset-p.start.offset;for(const y of p.getItems({shallow:!0}))y.is("$textProxy")?o.appendText(y.data,y.getAttributes(),s):o.append(o.cloneElement(y,!0),s);if(p!=a){const y=a._getTransformedByMove(p.start,o.createPositionAt(s,0),k)[0],T=o.createRange(o.createPositionAt(s,0),y.start);kb(o.createRange(y.end,o.createPositionAt(s,"end")),o),kb(T,o)}return s})}(this,t)}hasContent(t,e={}){const n=t instanceof fe?X._createIn(t):t;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=e;if(!s){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!o||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(t,e,n){return new ht(t,e,n)}createPositionAt(t,e){return ht._createAt(t,e)}createPositionAfter(t){return ht._createAfter(t)}createPositionBefore(t){return ht._createBefore(t)}createRange(t,e){return new X(t,e)}createRangeIn(t){return X._createIn(t)}createRangeOn(t){return X._createOn(t)}createSelection(t,e,n){return new Ko(t,e,n)}createBatch(t){return new Zr(t)}createOperationFromJSON(t){return class{static fromJSON(e,n){return co[e.__className].fromJSON(e,n)}}.fromJSON(t,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new Hx(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),t}}tt(vb,zt);class cE extends Wo{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const o=e;e=(s,a)=>{this.editor.execute(o),a()}}super.set(t,e,n)}}class Ab{constructor(t={}){const e=t.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=t.context||new Yu({language:e}),this._context._addEditor(this,!t.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new Xc(t,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new Hr(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new Ex,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new vb;const o=new f1;this.data=new Zm(this.model,o),this.editing=new Gm(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Vx([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new cE(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(t){throw new v("editor-isreadonly-has-no-setter")}enableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)||(this._readOnlyLocks.add(t),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(t){if(typeof t!="string"&&typeof t!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:t});this._readOnlyLocks.has(t)&&(this._readOnlyLocks.delete(t),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const t=this.config,e=t.get("plugins"),n=t.get("removePlugins")||[],o=t.get("extraPlugins")||[],s=t.get("substitutePlugins")||[];return this.plugins.init(e.concat(o),n,s)}destroy(){let t=Promise.resolve();return this.state=="initializing"&&(t=new Promise(e=>this.once("ready",e))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...t){try{return this.commands.execute(...t)}catch(e){v.rethrowUnexpectedError(e,this)}}focus(){this.editing.view.focus()}}tt(Ab,zt);class lE{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){this._components.set(Oh(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new v("componentfactory-item-missing",this,{name:t});return this._components.get(Oh(t)).callback(this.editor.locale)}has(t){return this._components.has(Oh(t))}}function Oh(i){return String(i).toLowerCase()}class Cb{constructor(t){this.editor=t,this.componentFactory=new lE(t),this.focusTracker=new Ao,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}tt(Cb,zt);const dE={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},uE=dE;function hE(i,t){i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}const fE={updateSourceElement(i=this.data.get()){if(!this.sourceElement)throw new v("editor-missing-sourceelement",this);const t=this.config.get("updateSourceElementOnDestroy"),e=this.sourceElement instanceof HTMLTextAreaElement;hE(this.sourceElement,t||e?i:"")}};class yb extends nr{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Cn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if(typeof t!="string")throw new v("pendingactions-add-invalid-message",this);const e=Object.create(zt);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const xb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',Kn={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:xb};function Rh({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,s)=>{if(!t())return;const a=typeof s.composedPath=="function"?s.composedPath():[];for(const l of n)if(l.contains(s.target)||a.includes(l))return;e()})}function zh(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function jh({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}class hr extends Cn{constructor(t=[]){super(t,{idProperty:"viewUid"}),this.on("add",(e,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(e,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t;for(const e of this)this._renderViewIntoCollectionParent(e)}delegate(...t){if(!t.length||!t.every(e=>typeof e=="string"))throw new v("ui-viewcollection-delegate-wrong-events",this);return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const s of t)o.delegate(s).to(e)}),this.on("remove",(n,o)=>{for(const s of t)o.stopDelegating(s,e)})}}}_renderViewIntoCollectionParent(t,e){t.isRendered||t.render(),t.element&&this._parentElement&&this._parentElement.insertBefore(t.element,this._parentElement.children[e])}}var Eb=g(4793),gE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Eb.Z,gE),Eb.Z.locals;class Qt{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new Cn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Bn.bind(this,this)}createCollection(t){const e=new hr(t);return this._viewCollections.add(e),e}registerChild(t){An(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){An(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new Bn(t)}extendTemplate(t){Bn.extend(this.template,t)}render(){if(this.isRendered)throw new v("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}tt(Qt,Aa),tt(Qt,zt);class Bn{constructor(t){Object.assign(this,Ib(Tb(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new v("ui-template-revert-not-applied",[this,t]);this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)_l(n)?yield n:Fh(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new pE({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,s)=>new Db({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:s})}}static extend(t,e){if(t._isRendered)throw new v("template-extend-render",[this,t]);Bb(t,Ib(Tb(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text,e)throw new v("ui-template-wrong-syntax",this);return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),wl(this.text)?this._bindToObservable({schema:this.text,updater:mE(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,o,s;if(!this.attributes)return;const a=t.node,l=t.revertData;for(e in this.attributes)if(o=a.getAttribute(e),n=this.attributes[e],l&&(l.attributes[e]=o),s=Bt(n[0])&&n[0].ns?n[0].ns:null,wl(n)){const u=s?n[0].value:n;l&&Lb(e)&&u.unshift(o),this._bindToObservable({schema:u,updater:bE(a,e,s),data:t})}else e=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],t):(l&&o&&Lb(e)&&n.unshift(o),n=n.map(u=>u&&u.value||u).reduce((u,f)=>u.concat(f),[]).reduce(Pb,""),Xr(n)||a.setAttributeNS(s,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const s=t[o];wl(s)?this._bindToObservable({schema:[s],updater:kE(n,o),data:e}):n.style[o]=s}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let s=0;for(const a of this.children)if(Vh(a)){if(!o){a.setParent(e);for(const l of a)n.appendChild(l.element)}}else if(_l(a))o||(a.isRendered||a.render(),n.appendChild(a.element));else if(Yr(a))n.appendChild(a);else if(o){const l={children:[],bindings:[],attributes:{}};t.revertData.children.push(l),a._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:l})}else n.appendChild(a.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(o=>{const[s,a]=e.split("@");return o.activateDomEventListener(s,a,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;Sb(t,e,n);const s=t.filter(a=>!Xr(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(t,e,n));o&&o.bindings.push(s)}_revertTemplateFromNode(t,e){for(const n of e.bindings)for(const o of n)o();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const o=e.attributes[n];o===null?t.removeAttribute(n):t.setAttribute(n,o)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}tt(Bn,V);class Ma{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>Sb(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class pE extends Ma{activateDomEventListener(t,e,n){const o=(s,a)=>{e&&!a.target.matches(e)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class Db extends Ma{getValue(t){return!Xr(super.getValue(t))&&(this.valueIfTrue||!0)}}function wl(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(wl):i instanceof Ma)}function Sb(i,t,{node:e}){let n=function(o,s){return o.map(a=>a instanceof Ma?a.getValue(s):a)}(i,e);n=i.length==1&&i[0]instanceof Db?n[0]:n.reduce(Pb,""),Xr(n)?t.remove():t.set(n)}function mE(i){return{set(t){i.textContent=t},remove(){i.textContent=""}}}function bE(i,t,e){return{set(n){i.setAttributeNS(e,t,n)},remove(){i.removeAttributeNS(e,t)}}}function kE(i,t){return{set(e){i.style[t]=e},remove(){i.style[t]=null}}}function Tb(i){return Jc(i,t=>{if(t&&(t instanceof Ma||Fh(t)||_l(t)||Vh(t)))return t})}function Ib(i){if(typeof i=="string"?i=function(t){return{text:[t]}}(i):i.text&&function(t){t.text=Re(t.text)}(i),i.on&&(i.eventListeners=function(t){for(const e in t)Mb(t,e);return t}(i.on),delete i.on),!i.text){i.attributes&&function(e){for(const n in e)e[n].value&&(e[n].value=Re(e[n].value)),Mb(e,n)}(i.attributes);const t=[];if(i.children)if(Vh(i.children))t.push(i.children);else for(const e of i.children)Fh(e)||_l(e)||Yr(e)?t.push(e):t.push(new Bn(e));i.children=t}return i}function Mb(i,t){i[t]=Re(i[t])}function Pb(i,t){return Xr(t)?i:Xr(i)?t:`${i} ${t}`}function Nb(i,t){for(const e in t)i[e]?i[e].push(...t[e]):i[e]=t[e]}function Bb(i,t){if(t.attributes&&(i.attributes||(i.attributes={}),Nb(i.attributes,t.attributes)),t.eventListeners&&(i.eventListeners||(i.eventListeners={}),Nb(i.eventListeners,t.eventListeners)),t.text&&i.text.push(...t.text),t.children&&t.children.length){if(i.children.length!=t.children.length)throw new v("ui-template-extend-children-mismatch",i);let e=0;for(const n of t.children)Bb(i.children[e++],n)}}function Xr(i){return!i&&i!==0}function _l(i){return i instanceof Qt}function Fh(i){return i instanceof Bn}function Vh(i){return i instanceof hr}function Lb(i){return i=="class"||i=="style"}class wE extends hr{constructor(t,e=[]){super(e),this.locale=t}attachToDom(){this._bodyCollectionContainer=new Bn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let t=document.querySelector(".ck-body-wrapper");t||(t=pm(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(t)),t.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const t=document.querySelector(".ck-body-wrapper");t&&t.childElementCount==0&&t.remove()}}var Ob=g(6574),_E={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Ob.Z,_E),Ob.Z.locals;class vl extends Qt{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}var Rb=g(3332),vE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Rb.Z,vE),Rb.Z.locals;class zb extends Qt{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",n=>"ck-tooltip_"+n),e.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}var jb=g(4906),AE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(jb.Z,AE),jb.Z.locals;class xe extends Qt{constructor(t){super(t);const e=this.bindTemplate,n=x();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new vl,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",s=>!s),e.if("isVisible","ck-hidden",s=>!s),e.to("isOn",s=>s?"ck-on":"ck-off"),e.if("withText","ck-button_with-text"),e.if("withKeystroke","ck-button_with-keystroke")],type:e.to("type",s=>s||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,s=>!s),"aria-pressed":e.to("isOn",s=>!!this.isToggleable&&String(!!s))},children:this.children,on:{click:e.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};he.isSafari&&(o.on.mousedown=e.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const t=new zb;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new Qt,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_createKeystrokeView(){const t=new Qt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",e=>Bp(e))}]}),t}_getTooltipString(t,e,n){return t?typeof t=="string"?t:(n&&(n=Bp(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Fb=g(5332),CE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Fb.Z,CE),Fb.Z.locals;class Al extends xe{constructor(t){super(t),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Qt;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}var Vb=g(6781),yE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Vb.Z,yE),Vb.Z.locals;const $b='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Hb extends xe{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new vl;return t.content=$b,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}var Ub=g(7686),xE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Ub.Z,xE),Ub.Z.locals;class qb extends Qt{constructor(t){super(t);const e=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Wo,this.focusTracker=new Ao,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",e.to("class"),e.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(t,e)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),e())}),this.keystrokes.set("arrowleft",(t,e)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),e())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const t=new xe;return t.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),t.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),t.delegate("execute").to(this),t}_createArrowView(){const t=new xe,e=t.bindTemplate;return t.icon=$b,t.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":e.to("isOn",n=>String(n))}}),t.bind("isEnabled").to(this),t.bind("label").to(this),t.bind("tooltip").to(this),t.delegate("execute").to(this,"open"),t}}class EE extends Qt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.to("position",n=>`ck-dropdown__panel_${n}`),e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():M("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const t=this.children.last;typeof t.focusLast=="function"?t.focusLast():t.focus()}}}var Wb=g(5485),DE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Wb.Z,DE),Wb.Z.locals;function Gb({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){zo(t)&&(t=t()),zo(n)&&(n=n());const a=function(y){return y&&y.parentNode?y.offsetParent===Ce.document.body?null:y.offsetParent:null}(i),l=new we(i),u=new we(t);let f;const p=o&&function(y){y=Object.assign({top:0,bottom:0,left:0,right:0},y);const T=new we(Ce.window);return T.top+=y.top,T.height-=y.top,T.bottom-=y.bottom,T.height-=y.bottom,T}(s)||null,k={targetRect:u,elementRect:l,positionedElementAncestor:a,viewportRect:p};if(n||o){const y=n&&new we(n).getVisible();Object.assign(k,{limiterRect:y,viewportRect:p}),f=function(T,P){const{elementRect:N}=P,B=N.getArea(),z=T.map(Tt=>new $h(Tt,P)).filter(Tt=>!!Tt.name);let q=0,st=null;for(const Tt of z){const{limiterIntersectionArea:jt,viewportIntersectionArea:ve}=Tt;if(jt===B)return Tt;const re=ve**2+jt**2;re>q&&(q=re,st=Tt)}return st}(e,k)||new $h(e[0],k)}else f=new $h(e[0],k);return f}function Kb(i){const{scrollX:t,scrollY:e}=Ce.window;return i.clone().moveBy(t,e)}class $h{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect);if(!n)return;const{left:o,top:s,name:a,config:l}=n;this.name=a,this.config=l,this._positioningFunctionCorrdinates={left:o,top:s},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;if(t){const e=this._options.viewportRect;if(!e)return t.getIntersectionArea(this._rect);{const n=t.getIntersection(e);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const t=this._options.viewportRect;return t?t.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Kb(this._rect),this._options.positionedElementAncestor&&function(t,e){const n=Kb(new we(e)),o=mm(e);let s=0,a=0;s-=n.left,a-=n.top,s+=e.scrollLeft,a+=e.scrollTop,s-=o.left,a-=o.top,t.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class ts extends Qt{constructor(t,e,n){super(t);const o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Wo,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=ts._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const t=(e,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(e,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(e,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:t,north:e,southEast:n,southWest:o,northEast:s,northWest:a,southMiddleEast:l,southMiddleWest:u,northMiddleEast:f,northMiddleWest:p}=ts.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,l,u,t,s,a,f,p,e]:[o,n,u,l,t,a,s,p,f,e]}}function Yb(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}ts.defaultPanelPositions={south:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),southMiddleEast:(i,t)=>({top:i.bottom,left:i.left-(t.width-i.width)/4,name:"sme"}),southMiddleWest:(i,t)=>({top:i.bottom,left:i.left-3*(t.width-i.width)/4,name:"smw"}),north:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/2,name:"n"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),northMiddleEast:(i,t)=>({top:i.top-t.height,left:i.left-(t.width-i.width)/4,name:"nme"}),northMiddleWest:(i,t)=>({top:i.top-t.height,left:i.left-3*(t.width-i.width)/4,name:"nmw"})},ts._getOptimalPosition=Gb;class es{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];typeof n=="string"&&(n=[n]);for(const o of n)t.keystrokeHandler.set(o,(s,a)=>{this[e](),a()})}}get first(){return this.focusables.find(Hh)||null}get last(){return this.focusables.filter(Hh).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((e,n)=>{const o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(e===null)return this[t===1?"first":"last"];let o=(e+n+t)%n;do{const s=this.focusables.get(o);if(Hh(s))return s;o=(o+n+t)%n}while(o!==e);return null}}function Hh(i){return!(!i.focus||!Yb(i.element))}class Qb extends Qt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class SE extends Qt{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Zb(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var Jb=g(5542),TE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Jb.Z,TE),Jb.Z.locals;class Uh extends Qt{constructor(t,e){super(t);const n=this.bindTemplate,o=this.t;this.options=e||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Ao,this.keystrokes=new Wo,this.set("class"),this.set("isCompact",!1),this.itemsView=new IE(t),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=t.uiLanguageDirection==="rtl";this._focusCycler=new es({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var l;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(l=this,l.bindTemplate.to(u=>{u.target===l.element&&u.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new PE(this):new ME(this)}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){const n=Zb(t),o=n.items.filter((a,l,u)=>a==="|"||n.removeItems.indexOf(a)===-1&&(a==="-"?!this.options.shouldGroupWhenFull||(M("toolbarview-line-break-ignored-when-grouping-items",u),!1):!!e.has(a)||(M("toolbarview-item-unavailable",{name:a}),!1))),s=this._cleanSeparators(o).map(a=>a==="|"?new Qb:a==="-"?new SE:e.create(a));this.items.addMany(s)}_cleanSeparators(t){const e=a=>a!=="-"&&a!=="|",n=t.length,o=t.findIndex(e),s=n-t.slice().reverse().findIndex(e);return t.slice(o,s).filter((a,l,u)=>e(a)?!0:!(l>0&&u[l-1]===a))}}class IE extends Qt{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class ME{constructor(t){const e=t.bindTemplate;t.set("isVertical",!1),t.itemsView.children.bindTo(t.items).using(n=>n),t.focusables.bindTo(t.items).using(n=>n),t.extendTemplate({attributes:{class:[e.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class PE{constructor(t){this.view=t,this.viewChildren=t.children,this.viewFocusables=t.focusables,this.viewItemsView=t.itemsView,this.viewFocusTracker=t.focusTracker,this.viewLocale=t.locale,this.ungroupedItems=t.createCollection(),this.groupedItems=t.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,t.itemsView.children.bindTo(this.ungroupedItems).using(e=>e),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),t.children.on("add",this._updateFocusCycleableItems.bind(this)),t.children.on("remove",this._updateFocusCycleableItems.bind(this)),t.items.on("change",(e,n)=>{const o=n.index;for(const s of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=o;s<o+n.added.length;s++){const a=n.added[s-o];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),t.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(t){this.viewElement=t.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(t)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Yb(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const t=this.groupedItems.length;let e;for(;this._areItemsOverflowing;)this._groupLastItem(),e=!0;if(!e&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==t&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const t=this.viewElement,e=this.viewLocale.uiLanguageDirection,n=new we(t.lastChild),o=new we(t);if(!this.cachedPadding){const s=Ce.window.getComputedStyle(t),a=e==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[a])}return e==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let t;this.resizeObserver=new De(this.viewElement,e=>{t&&t===e.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),t=e.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(t){t.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Qb),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const t=this.viewLocale,e=t.t,n=fr(t);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=t.uiLanguageDirection==="ltr"?"sw":"se",ok(n,[]),n.buttonView.set({label:e("Show more items"),tooltip:!0,tooltipPosition:t.uiLanguageDirection==="rtl"?"se":"sw",icon:xb}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(t=>{this.viewFocusables.add(t)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Xb=g(1046),NE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Xb.Z,NE),Xb.Z.locals;class BE extends Qt{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Ao,this.keystrokes=new Wo,this._focusCycler=new es({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class tk extends Qt{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class LE extends Qt{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var ek=g(7339),OE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(ek.Z,OE),ek.Z.locals;var nk=g(3949),RE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(nk.Z,RE),nk.Z.locals;function fr(i,t=Hb){const e=new t(i),n=new EE(i),o=new ts(i,e,n);return e.bind("isEnabled").to(o),e instanceof Hb?e.bind("isOn").to(o,"isOpen"):e.arrowView.bind("isOn").to(o,"isOpen"),function(s){(function(a){a.on("render",()=>{Rh({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(s),function(a){a.on("execute",l=>{l.source instanceof Al||(a.isOpen=!1)})}(s),function(a){a.keystrokes.set("arrowdown",(l,u)=>{a.isOpen&&(a.panelView.focus(),u())}),a.keystrokes.set("arrowup",(l,u)=>{a.isOpen&&(a.panelView.focusLast(),u())})}(s)}(o),o}function ok(i,t,e={}){const n=i.locale,o=n.t,s=i.toolbarView=new Uh(n);s.set("ariaLabel",o("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map(a=>s.items.add(a)),e.enableActiveItemFocusOnDropdownOpen&&rk(i,()=>s.items.find(a=>a.isOn)),i.panelView.children.add(s),s.items.delegate("execute").to(i)}function ik(i,t){const e=i.locale,n=i.listView=new BE(e);n.items.bindTo(t).using(({type:o,model:s})=>{if(o==="separator")return new LE(e);if(o==="button"||o==="switchbutton"){const a=new tk(e);let l;return l=o==="button"?new xe(e):new Al(e),l.bind(...Object.keys(s)).to(s),l.delegate("execute").to(a),a.children.add(l),a}}),i.panelView.children.add(n),n.items.delegate("execute").to(i),rk(i,()=>n.items.find(o=>o instanceof tk&&o.children.first.isOn))}function rk(i,t){i.on("change:isOpen",()=>{if(!i.isOpen)return;const e=t();e&&(typeof e.focus=="function"?e.focus():M("ui-dropdown-focus-child-on-open-child-missing-focus",{view:e}))},{priority:"low"})}var sk=g(9688),zE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(sk.Z,zE),sk.Z.locals;class jE extends Qt{constructor(t){super(t),this.body=new wE(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var ak=g(3662),FE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(ak.Z,FE),ak.Z.locals;class ck extends Qt{constructor(t){super(t),this.set("text"),this.set("for"),this.id=`ck-editor__label_${x()}`;const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:e.to("for")},children:[{text:e.to("text")}]})}}class VE extends jE{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new ck;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class $E extends Qt{constructor(t,e,n){super(t),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(o=>{const s=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(s,a,l)=>{l?n(o):e(o)})}(this):e(this)}}class HE extends $E{constructor(t,e,n,o={}){super(t,e,n);const s=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}var lk=g(8847),UE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(lk.Z,UE),lk.Z.locals;var dk=g(4879),qE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(dk.Z,qE),dk.Z.locals;class WE extends Qt{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Ao,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",e.if("isFocused","ck-input_focused"),e.if("isEmpty","ck-input-text_empty"),e.if("hasError","ck-error")],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly"),inputmode:e.to("inputMode"),"aria-invalid":e.if("hasError",!0),"aria-describedby":e.to("ariaDescribedById")},on:{input:e.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:e.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(t,e,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(t){this.element.value=t||t===0?t:""}}class GE extends WE{constructor(t){super(t),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var uk=g(2577),KE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(uk.Z,KE),uk.Z.locals;class qh extends Qt{constructor(t,e){super(t);const n=`ck-labeled-field-view-${x()}`,o=`ck-labeled-field-view-status-${x()}`;this.fieldView=e(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,l)=>a||l);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",a=>!a),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(t){const e=new ck(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createStatusView(t){const e=new Qt(this.locale),n=this.bindTemplate;return e.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:t,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),e}focus(){this.fieldView.focus()}}function Wh(i,t,e){const n=new GE(i.locale);return n.set({id:t,ariaDescribedById:e}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class Gh extends nr{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Kh{constructor(t,e){e&&wh(this,e),t&&this.set(t)}}function Yh(i){return t=>t+i}tt(Kh,zt);var hk=g(8793),YE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(hk.Z,YE),hk.Z.locals;const fk=Yh("px"),gk=Ce.document.body;class Dn extends Qt{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",n=>`ck-balloon-panel_${n}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("class")],style:{top:e.to("top",fk),left:e.to("left",fk)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=Dn.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthMiddleWest,e.southArrowNorthMiddleEast,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthMiddleWest,e.northArrowSouthMiddleEast,e.northArrowSouthWest,e.northArrowSouthEast,e.viewportStickyNorth],limiter:gk,fitInViewport:!0},t),o=Dn._getOptimalPosition(n),s=parseInt(o.left),a=parseInt(o.top),{name:l,config:u={}}=o,{withArrow:f=!0}=u;Object.assign(this,{top:a,left:s,position:l,withArrow:f})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(t):this._stopPinning()},this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=Qh(t.target),n=t.limiter?Qh(t.limiter):gk;this.listenTo(Ce.document,"scroll",(o,s)=>{const a=s.target,l=e&&a.contains(e),u=n&&a.contains(n);!l&&!u&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(Ce.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(Ce.document,"scroll"),this.stopListening(Ce.window,"resize")}}function Qh(i){return Ho(i)?i:pl(i)?i.commonAncestorContainer:typeof i=="function"?Qh(i()):null}Dn.arrowHorizontalOffset=25,Dn.arrowVerticalOffset=10,Dn.stickyVerticalOffset=20,Dn._getOptimalPosition=Gb,Dn.defaultPositions=function({horizontalOffset:i=Dn.arrowHorizontalOffset,verticalOffset:t=Dn.arrowVerticalOffset,stickyVerticalOffset:e=Dn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(a,l)=>({top:o(a,l),left:a.left-l.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left-l.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(a,l)=>({top:o(a,l),left:a.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.right-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(a,l)=>({top:o(a,l),left:a.right-l.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.right-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(a,l)=>({top:o(a,l),left:a.right-l.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(a,l)=>({top:s(a),left:a.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(a,l)=>({top:s(a),left:a.left-l.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(a,l)=>({top:s(a),left:a.left-l.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(a,l)=>({top:s(a),left:a.left+a.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left+a.width/2-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left+a.width/2-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(a,l)=>({top:s(a),left:a.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.right-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(a,l)=>({top:s(a),left:a.right-l.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.right-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(a,l)=>({top:s(a),left:a.right-l.width+i,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(a,l,u)=>a.getIntersection(u)?{top:u.top+e,left:a.left+a.width/2-l.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(a,l){return a.top-l.height-t}function s(a){return a.bottom+t}}();var pk=g(4650),QE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(pk.Z,QE),pk.Z.locals;var mk=g(7676),ZE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(mk.Z,ZE),mk.Z.locals;const Cl=Yh("px");class yl extends Z{static get pluginName(){return"ContextualBalloon"}constructor(t){super(t),this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Dn(t.locale),t.ui.view.body.add(this.view),t.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this.hasView(t.view))throw new v("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new v("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new v("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new JE(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[s,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new XE(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class JE extends Qt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Ao,this.buttonPrevView=this._createButtonView(e("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(e("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new xe(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class XE extends Qt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Cl),left:n.to("left",Cl),width:n.to("width",Cl),height:n.to("height",Cl)}},children:this.content}),this.on("change:numberOfPanels",(o,s,a,l)=>{a>l?this._addPanels(a-l):this._removePanels(l-a),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Qt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new we(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var bk=g(5868),t2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(bk.Z,t2),bk.Z.locals;const Pa=Yh("px");class e2 extends Qt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Bn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?Pa(this._panelRect.height):null)}}}).render(),this._contentPanel=new Bn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?Pa(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",n=>n?Pa(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",n=>n?Pa(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Ce.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Pa(-Ce.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var kk=g(9695),n2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(kk.Z,n2),kk.Z.locals;var wk=g(4717),o2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(wk.Z,o2),wk.Z.locals;const xl=new WeakMap;function _k(i){const{view:t,element:e,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=i,a=t.document;xl.has(a)||(xl.set(a,new Map),a.registerPostFixer(l=>vk(a,l))),xl.get(a).set(e,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?e:null}),t.change(l=>vk(a,l))}function i2(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function vk(i,t){const e=xl.get(i),n=[];let o=!1;for(const[s,a]of e)a.isDirectHost&&(n.push(s),Ak(t,s,a)&&(o=!0));for(const[s,a]of e){if(a.isDirectHost)continue;const l=r2(s);l&&(n.includes(l)||(a.hostElement=l,Ak(t,s,a)&&(o=!0)))}return o}function Ak(i,t,e){const{text:n,isDirectHost:o,hostElement:s}=e;let a=!1;return s.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,s),a=!0),(o||t.childCount==1)&&function(l,u){if(!l.isAttached()||Array.from(l.getChildren()).some(y=>!y.is("uiElement")))return!1;if(u)return!0;const p=l.document;if(!p.isFocused)return!0;const k=p.selection.anchor;return k&&k.parent!==l}(s,e.keepOnFocus)?function(l,u){return!u.hasClass("ck-placeholder")&&(l.addClass("ck-placeholder",u),!0)}(i,s)&&(a=!0):i2(i,s)&&(a=!0),a}function r2(i){if(i.childCount){const t=i.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}const Zh=new Map;function ie(i,t,e){let n=Zh.get(i);n||(n=new Map,Zh.set(i,n)),n.set(t,e)}function s2(i){return[i]}function Ck(i,t,e={}){const n=function(o,s){const a=Zh.get(o);return a&&a.has(s)?a.get(s):s2}(i.constructor,t.constructor);try{return n(i=i.clone(),t,e)}catch(o){throw o}}function a2(i,t,e){i=i.slice(),t=t.slice();const n=new c2(e.document,e.useRelations,e.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(t);const o=n.originalOperations;if(i.length==0||t.length==0)return{operationsA:i,operationsB:t,originalOperations:o};const s=new WeakMap;for(const u of i)s.set(u,0);const a={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:t[t.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:t.length};let l=0;for(;l<i.length;){const u=i[l],f=s.get(u);if(f==t.length){l++;continue}const p=t[f],k=Ck(u,p,n.getContext(u,p,!0)),y=Ck(p,u,n.getContext(p,u,!1));n.updateRelation(u,p),n.setOriginalOperations(k,u),n.setOriginalOperations(y,p);for(const T of k)s.set(T,f+y.length);i.splice(l,1,...k),t.splice(f,1,...y)}if(e.padWithNoOps){const u=i.length-a.originalOperationsACount,f=t.length-a.originalOperationsBCount;xk(i,f-u),xk(t,u-f)}return yk(i,a.nextBaseVersionB),yk(t,a.nextBaseVersionA),{operationsA:i,operationsB:t,originalOperations:o}}class c2{constructor(t,e,n=!1){this.originalOperations=new Map,this._history=t.history,this._useRelations=e,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(t,e=null){const n=e?this.originalOperations.get(e):null;for(const o of t)this.originalOperations.set(o,n||o)}updateRelation(t,e){switch(t.constructor){case ge:switch(e.constructor){case $e:t.targetPosition.isEqual(e.sourcePosition)||e.movedRange.containsPosition(t.targetPosition)?this._setRelation(t,e,"insertAtSource"):t.targetPosition.isEqual(e.deletionPosition)?this._setRelation(t,e,"insertBetween"):t.targetPosition.isAfter(e.sourcePosition)&&this._setRelation(t,e,"moveTargetAfter");break;case ge:t.targetPosition.isEqual(e.sourcePosition)||t.targetPosition.isBefore(e.sourcePosition)?this._setRelation(t,e,"insertBefore"):this._setRelation(t,e,"insertAfter")}break;case ye:switch(e.constructor){case $e:t.splitPosition.isBefore(e.sourcePosition)&&this._setRelation(t,e,"splitBefore");break;case ge:if(t.splitPosition.isEqual(e.sourcePosition)||t.splitPosition.isBefore(e.sourcePosition))this._setRelation(t,e,"splitBefore");else{const n=X._createFromPositionAndShift(e.sourcePosition,e.howMany);if(t.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(t.splitPosition)){const o=n.end.offset-t.splitPosition.offset,s=t.splitPosition.offset-n.start.offset;this._setRelation(t,e,{howMany:o,offset:s})}}}break;case $e:switch(e.constructor){case $e:t.targetPosition.isEqual(e.sourcePosition)||this._setRelation(t,e,"mergeTargetNotMoved"),t.sourcePosition.isEqual(e.targetPosition)&&this._setRelation(t,e,"mergeSourceNotMoved"),t.sourcePosition.isEqual(e.sourcePosition)&&this._setRelation(t,e,"mergeSameElement");break;case ye:t.sourcePosition.isEqual(e.splitPosition)&&this._setRelation(t,e,"splitAtSource")}break;case xn:{const n=t.newRange;if(!n)return;switch(e.constructor){case ge:{const o=X._createFromPositionAndShift(e.sourcePosition,e.howMany),s=o.containsPosition(n.start)||o.start.isEqual(n.start),a=o.containsPosition(n.end)||o.end.isEqual(n.end);!s&&!a||o.containsRange(n)||this._setRelation(t,e,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()});break}case $e:{const o=n.start.isEqual(e.targetPosition),s=n.start.isEqual(e.deletionPosition),a=n.end.isEqual(e.deletionPosition),l=n.end.isEqual(e.sourcePosition);(o||s||a||l)&&this._setRelation(t,e,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:a,wasInRightElement:l});break}}break}}}getContext(t,e,n){return{aIsStrong:n,aWasUndone:this._wasUndone(t),bWasUndone:this._wasUndone(e),abRelation:this._useRelations?this._getRelation(t,e):null,baRelation:this._useRelations?this._getRelation(e,t):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(t){const e=this.originalOperations.get(t);return e.wasUndone||this._history.isUndoneOperation(e)}_getRelation(t,e){const n=this.originalOperations.get(e),o=this._history.getUndoneOperation(n);if(!o)return null;const s=this.originalOperations.get(t),a=this._relations.get(s);return a&&a.get(o)||null}_setRelation(t,e,n){const o=this.originalOperations.get(t),s=this.originalOperations.get(e);let a=this._relations.get(o);a||(a=new Map,this._relations.set(o,a)),a.set(s,n)}}function yk(i,t){for(const e of i)e.baseVersion=t++}function xk(i,t){for(let e=0;e<t;e++)i.push(new Je(0))}function Ek(i,t,e){const n=i.nodes.getNode(0).getAttribute(t);if(n==e)return null;const o=new X(i.position,i.position.getShiftedBy(i.howMany));return new ze(o,t,n,e,0)}function Dk(i,t){return i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany)===null}function ns(i,t){const e=[];for(let n=0;n<i.length;n++){const o=i[n],s=new ge(o.start,o.end.offset-o.start.offset,t,0);e.push(s);for(let a=n+1;a<i.length;a++)i[a]=i[a]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];t=t._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return e}ie(ze,ze,(i,t,e)=>{if(i.key===t.key&&i.range.start.hasSameParentAs(t.range.start)){const n=i.range.getDifference(t.range).map(s=>new ze(s,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(t.range);return o&&e.aIsStrong&&n.push(new ze(o,t.key,t.newValue,i.newValue,0)),n.length==0?[new Je(0)]:n}return[i]}),ie(ze,Ze,(i,t)=>{if(i.range.start.hasSameParentAs(t.position)&&i.range.containsPosition(t.position)){const e=i.range._getTransformedByInsertion(t.position,t.howMany,!t.shouldReceiveAttributes).map(n=>new ze(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(t.shouldReceiveAttributes){const n=Ek(t,i.key,i.oldValue);n&&e.unshift(n)}return e}return i.range=i.range._getTransformedByInsertion(t.position,t.howMany,!1)[0],[i]}),ie(ze,$e,(i,t)=>{const e=[];i.range.start.hasSameParentAs(t.deletionPosition)&&(i.range.containsPosition(t.deletionPosition)||i.range.start.isEqual(t.deletionPosition))&&e.push(X._createFromPositionAndShift(t.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(t);return n.isCollapsed||e.push(n),e.map(o=>new ze(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),ie(ze,ge,(i,t)=>function(n,o){const s=X._createFromPositionAndShift(o.sourcePosition,o.howMany);let a=null,l=[];s.containsRange(n,!0)?a=n:n.start.hasSameParentAs(s.start)?(l=n.getDifference(s),a=n.getIntersection(s)):l=[n];const u=[];for(let f of l){f=f._getTransformedByDeletion(o.sourcePosition,o.howMany);const p=o.getMovedRangeStart(),k=f.start.hasSameParentAs(p);f=f._getTransformedByInsertion(p,o.howMany,k),u.push(...f)}return a&&u.push(a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),u}(i.range,t).map(n=>new ze(n,i.key,i.oldValue,i.newValue,i.baseVersion))),ie(ze,ye,(i,t)=>{if(i.range.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(t.splitPosition)&&i.range.containsPosition(t.splitPosition)){const e=i.clone();return e.range=new X(t.moveTargetPosition.clone(),i.range.end._getCombined(t.splitPosition,t.moveTargetPosition)),i.range.end=t.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,e]}return i.range=i.range._getTransformedBySplitOperation(t),[i]}),ie(Ze,ze,(i,t)=>{const e=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(t.range.start)&&t.range.containsPosition(i.position)){const n=Ek(i,t.key,t.newValue);n&&e.push(n)}return e}),ie(Ze,Ze,(i,t,e)=>(i.position.isEqual(t.position)&&e.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(t)),[i])),ie(Ze,ge,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),ie(Ze,ye,(i,t)=>(i.position=i.position._getTransformedBySplitOperation(t),[i])),ie(Ze,$e,(i,t)=>(i.position=i.position._getTransformedByMergeOperation(t),[i])),ie(xn,Ze,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(t)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(t)[0]),[i])),ie(xn,xn,(i,t,e)=>{if(i.name==t.name){if(!e.aIsStrong)return[new Je(0)];i.oldRange=t.newRange?t.newRange.clone():null}return[i]}),ie(xn,$e,(i,t)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(t)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(t)),[i])),ie(xn,ge,(i,t,e)=>{if(i.oldRange&&(i.oldRange=X._createFromRanges(i.oldRange._getTransformedByMoveOperation(t))),i.newRange){if(e.abRelation){const n=X._createFromRanges(i.newRange._getTransformedByMoveOperation(t));if(e.abRelation.side=="left"&&t.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=e.abRelation.path,i.newRange.end=n.end,[i];if(e.abRelation.side=="right"&&t.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=e.abRelation.path,[i]}i.newRange=X._createFromRanges(i.newRange._getTransformedByMoveOperation(t))}return[i]}),ie(xn,ye,(i,t,e)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(t)),i.newRange){if(e.abRelation){const n=i.newRange._getTransformedBySplitOperation(t);return i.newRange.start.isEqual(t.splitPosition)&&e.abRelation.wasStartBeforeMergedElement?i.newRange.start=ht._createAt(t.insertionPosition):i.newRange.start.isEqual(t.splitPosition)&&!e.abRelation.wasInLeftElement&&(i.newRange.start=ht._createAt(t.moveTargetPosition)),i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasInRightElement?i.newRange.end=ht._createAt(t.moveTargetPosition):i.newRange.end.isEqual(t.splitPosition)&&e.abRelation.wasEndBeforeMergedElement?i.newRange.end=ht._createAt(t.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(t)}return[i]}),ie($e,Ze,(i,t)=>(i.sourcePosition.hasSameParentAs(t.position)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(t),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t),[i])),ie($e,$e,(i,t,e)=>{if(i.sourcePosition.isEqual(t.sourcePosition)&&i.targetPosition.isEqual(t.targetPosition)){if(e.bWasUndone){const n=t.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new ht(t.graveyardPosition.root,n),i.howMany=0,[i]}return[new Je(0)]}if(i.sourcePosition.isEqual(t.sourcePosition)&&!i.targetPosition.isEqual(t.targetPosition)&&!e.bWasUndone&&e.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=t.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const a=t.targetPosition._getTransformedByMergeOperation(t),l=i.targetPosition._getTransformedByMergeOperation(t);return[new ge(a,i.howMany,l,0)]}return[new Je(0)]}return i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(t),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),i.graveyardPosition.isEqual(t.graveyardPosition)&&e.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),ie($e,ge,(i,t,e)=>{const n=X._createFromPositionAndShift(t.sourcePosition,t.howMany);return t.type=="remove"&&!e.bWasUndone&&!e.forceWeakRemove&&i.deletionPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new Je(0)]:(i.sourcePosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.sourcePosition.hasSameParentAs(t.sourcePosition)&&(i.howMany-=t.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(t),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(t),i.graveyardPosition.isEqual(t.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)),[i])}),ie($e,ye,(i,t,e)=>{if(t.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(t.graveyardPosition,1),i.deletionPosition.isEqual(t.graveyardPosition)&&(i.howMany=t.howMany)),i.targetPosition.isEqual(t.splitPosition)){const n=t.howMany!=0,o=t.graveyardPosition&&i.deletionPosition.isEqual(t.graveyardPosition);if(n||o||e.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),[i]}if(i.sourcePosition.isEqual(t.splitPosition)){if(e.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i];if(e.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=t.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}return i.sourcePosition.hasSameParentAs(t.splitPosition)&&(i.howMany=t.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(t),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(t),[i]}),ie(ge,Ze,(i,t)=>{const e=X._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(t,!1)[0];return i.sourcePosition=e.start,i.howMany=e.end.offset-e.start.offset,i.targetPosition.isEqual(t.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(t)),[i]}),ie(ge,ge,(i,t,e)=>{const n=X._createFromPositionAndShift(i.sourcePosition,i.howMany),o=X._createFromPositionAndShift(t.sourcePosition,t.howMany);let s,a=e.aIsStrong,l=!e.aIsStrong;if(e.abRelation=="insertBefore"||e.baRelation=="insertAfter"?l=!0:e.abRelation!="insertAfter"&&e.baRelation!="insertBefore"||(l=!1),s=i.targetPosition.isEqual(t.targetPosition)&&l?i.targetPosition._getTransformedByDeletion(t.sourcePosition,t.howMany):i.targetPosition._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),Dk(i,t)&&Dk(t,i))return[t.getReversed()];if(n.containsPosition(t.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),ns([n],s);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),n.end=n.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),ns([n],s);const u=Ye(i.sourcePosition.getParentPath(),t.sourcePosition.getParentPath());if(u=="prefix"||u=="extension")return n.start=n.start._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),n.end=n.end._getTransformedByMove(t.sourcePosition,t.targetPosition,t.howMany),ns([n],s);i.type!="remove"||t.type=="remove"||e.aWasUndone||e.forceWeakRemove?i.type=="remove"||t.type!="remove"||e.bWasUndone||e.forceWeakRemove||(a=!1):a=!0;const f=[],p=n.getDifference(o);for(const y of p){y.start=y.start._getTransformedByDeletion(t.sourcePosition,t.howMany),y.end=y.end._getTransformedByDeletion(t.sourcePosition,t.howMany);const T=Ye(y.start.getParentPath(),t.getMovedRangeStart().getParentPath())=="same",P=y._getTransformedByInsertion(t.getMovedRangeStart(),t.howMany,T);f.push(...P)}const k=n.getIntersection(o);return k!==null&&a&&(k.start=k.start._getCombined(t.sourcePosition,t.getMovedRangeStart()),k.end=k.end._getCombined(t.sourcePosition,t.getMovedRangeStart()),f.length===0?f.push(k):f.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?f.unshift(k):f.push(k):f.splice(1,0,k)),f.length===0?[new Je(i.baseVersion)]:ns(f,s)}),ie(ge,ye,(i,t,e)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(t.insertionPosition)&&t.graveyardPosition&&e.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(t));const o=X._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(t.insertionPosition))return t.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(t.splitPosition)&&o.containsPosition(t.splitPosition)){let a=new X(t.splitPosition,o.end);return a=a._getTransformedBySplitOperation(t),ns([new X(o.start,t.splitPosition),a],n)}i.targetPosition.isEqual(t.splitPosition)&&e.abRelation=="insertAtSource"&&(n=t.moveTargetPosition),i.targetPosition.isEqual(t.insertionPosition)&&e.abRelation=="insertBetween"&&(n=i.targetPosition);const s=[o._getTransformedBySplitOperation(t)];if(t.graveyardPosition){const a=o.start.isEqual(t.graveyardPosition)||o.containsPosition(t.graveyardPosition);i.howMany>1&&a&&!e.aWasUndone&&s.push(X._createFromPositionAndShift(t.insertionPosition,1))}return ns(s,n)}),ie(ge,$e,(i,t,e)=>{const n=X._createFromPositionAndShift(i.sourcePosition,i.howMany);if(t.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(t.sourcePosition)){if(i.type!="remove"||e.forceWeakRemove){if(i.howMany==1)return e.bWasUndone?(i.sourcePosition=t.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]):[new Je(0)]}else if(!e.aWasUndone){const s=[];let a=t.graveyardPosition.clone(),l=t.targetPosition._getTransformedByMergeOperation(t);i.howMany>1&&(s.push(new ge(i.sourcePosition,i.howMany-1,i.targetPosition,0)),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),l=l._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const u=t.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),f=new ge(a,1,u,0),p=f.getMovedRangeStart().path.slice();p.push(0);const k=new ht(f.targetPosition.root,p);l=l._getTransformedByMove(a,u,1);const y=new ge(l,t.howMany,k,0);return s.push(f),s.push(y),s}}const o=X._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(t);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(t),[i]}),ie(En,Ze,(i,t)=>(i.position=i.position._getTransformedByInsertOperation(t),[i])),ie(En,$e,(i,t)=>i.position.isEqual(t.deletionPosition)?(i.position=t.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(t),[i])),ie(En,ge,(i,t)=>(i.position=i.position._getTransformedByMoveOperation(t),[i])),ie(En,En,(i,t,e)=>{if(i.position.isEqual(t.position)){if(!e.aIsStrong)return[new Je(0)];i.oldName=t.newName}return[i]}),ie(En,ye,(i,t)=>{if(Ye(i.position.path,t.splitPosition.getParentPath())=="same"&&!t.graveyardPosition){const e=new En(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,e]}return i.position=i.position._getTransformedBySplitOperation(t),[i]}),ie(Qo,Qo,(i,t,e)=>{if(i.root===t.root&&i.key===t.key){if(!e.aIsStrong||i.newValue===t.newValue)return[new Je(0)];i.oldValue=t.newValue}return[i]}),ie(ye,Ze,(i,t)=>(i.splitPosition.hasSameParentAs(t.position)&&i.splitPosition.offset<t.position.offset&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(t),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(t),[i])),ie(ye,$e,(i,t,e)=>{if(!i.graveyardPosition&&!e.bWasUndone&&i.splitPosition.hasSameParentAs(t.sourcePosition)){const n=t.graveyardPosition.path.slice();n.push(0);const o=new ht(t.graveyardPosition.root,n),s=ye.getInsertionPosition(new ht(t.graveyardPosition.root,n)),a=new ye(o,0,s,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ye.getInsertionPosition(i.splitPosition),i.graveyardPosition=a.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[a,i]}return i.splitPosition.hasSameParentAs(t.deletionPosition)&&!i.splitPosition.isAfter(t.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(t.targetPosition)&&(i.howMany+=t.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(t),i.insertionPosition=ye.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(t)),[i]}),ie(ye,ge,(i,t,e)=>{const n=X._createFromPositionAndShift(t.sourcePosition,t.howMany);if(i.graveyardPosition){const s=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!e.bWasUndone&&s){const a=i.splitPosition._getTransformedByMoveOperation(t),l=i.graveyardPosition._getTransformedByMoveOperation(t),u=l.path.slice();u.push(0);const f=new ht(l.root,u);return[new ge(a,i.howMany,f,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(t)}const o=i.splitPosition.isEqual(t.targetPosition);if(o&&(e.baRelation=="insertAtSource"||e.abRelation=="splitBefore"))return i.howMany+=t.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(t.sourcePosition,t.howMany),i.insertionPosition=ye.getInsertionPosition(i.splitPosition),[i];if(o&&e.abRelation&&e.abRelation.howMany){const{howMany:s,offset:a}=e.abRelation;return i.howMany+=s,i.splitPosition=i.splitPosition.getShiftedBy(a),[i]}if(i.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(i.splitPosition)){const s=t.howMany-(i.splitPosition.offset-t.sourcePosition.offset);return i.howMany-=s,i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany),i.splitPosition=t.sourcePosition.clone(),i.insertionPosition=ye.getInsertionPosition(i.splitPosition),[i]}return t.sourcePosition.isEqual(t.targetPosition)||(i.splitPosition.hasSameParentAs(t.sourcePosition)&&i.splitPosition.offset<=t.sourcePosition.offset&&(i.howMany-=t.howMany),i.splitPosition.hasSameParentAs(t.targetPosition)&&i.splitPosition.offset<t.targetPosition.offset&&(i.howMany+=t.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(t),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(t):i.insertionPosition=ye.getInsertionPosition(i.splitPosition),[i]}),ie(ye,ye,(i,t,e)=>{if(i.splitPosition.isEqual(t.splitPosition)){if(!i.graveyardPosition&&!t.graveyardPosition)return[new Je(0)];if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition))return[new Je(0)];if(e.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t),[i]}if(i.graveyardPosition&&t.graveyardPosition&&i.graveyardPosition.isEqual(t.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=t.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&e.aIsStrong){const a=[];return t.howMany&&a.push(new ge(t.moveTargetPosition,t.howMany,t.splitPosition,0)),i.howMany&&a.push(new ge(i.splitPosition,i.howMany,i.moveTargetPosition,0)),a}return[new Je(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(t)),i.splitPosition.isEqual(t.insertionPosition)&&e.abRelation=="splitBefore")return i.howMany++,[i];if(t.splitPosition.isEqual(i.insertionPosition)&&e.baRelation=="splitBefore"){const n=t.insertionPosition.path.slice();n.push(0);const o=new ht(t.insertionPosition.root,n);return[i,new ge(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(t.splitPosition)&&i.splitPosition.offset<t.splitPosition.offset&&(i.howMany-=t.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(t),i.insertionPosition=ye.getInsertionPosition(i.splitPosition),[i]});class l2 extends _i{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}class El extends _i{constructor(t){super(t),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(t){this.fire(t.type,t)}}class os{constructor(t){this.document=t}createDocumentFragment(t){return new ar(this.document,t)}createElement(t,e,n){return new Wn(this.document,t,e,n)}createText(t){return new ue(this.document,t)}clone(t,e=!1){return t._clone(e)}appendChild(t,e){return e._appendChild(t)}insertChild(t,e,n){return n._insertChild(t,e)}removeChildren(t,e,n){return n._removeChildren(t,e)}remove(t){const e=t.parent;return e?this.removeChildren(e.getChildIndex(t),1,e):[]}replace(t,e){const n=t.parent;if(n){const o=n.getChildIndex(t);return this.removeChildren(o,1,n),this.insertChild(o,e,n),!0}return!1}unwrapElement(t){const e=t.parent;if(e){const n=e.getChildIndex(t);this.remove(t),this.insertChild(n,t.getChildren(),e)}}rename(t,e){const n=new Wn(this.document,t,e.getAttributes(),e.getChildren());return this.replace(e,n)?n:null}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){Ge(t)&&n===void 0&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}createPositionAt(t,e){return Ct._createAt(t,e)}createPositionAfter(t){return Ct._createAfter(t)}createPositionBefore(t){return Ct._createBefore(t)}createRange(t,e){return new Vt(t,e)}createRangeOn(t){return Vt._createOn(t)}createRangeIn(t){return Vt._createIn(t)}createSelection(t,e,n){return new ro(t,e,n)}}class d2 extends Cb{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Zb(t.config.get("toolbar")),this._elementReplacer=new dx}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,o=e.editing.view,s=n.editable,a=o.document.getRoot();s.name=a.rootName,n.render();const l=s.element;this.setEditableElement(s.name,l),this.focusTracker.add(l),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(l),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy(),super.destroy()}_initToolbar(){const t=this.editor,e=this.view,n=t.editing.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:s,originFocusTracker:a,toolbar:l,beforeFocus:u,afterBlur:f}){a.add(l.element),s.set("Alt+F10",(p,k)=>{a.isFocused&&!l.focusTracker.isFocused&&(u&&u(),l.focus(),k())}),l.keystrokes.set("Esc",(p,k)=>{l.focusTracker.isFocused&&(o.focus(),f&&f(),k())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:e.toolbar})}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement,s=t.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");s&&_k({view:e,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}var Sk=g(3143),u2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ft()(Sk.Z,u2),Sk.Z.locals;class h2 extends VE{constructor(t,e,n={}){super(t),this.stickyPanel=new e2(t),this.toolbar=new Uh(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new HE(t,e)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Jh extends Ab{constructor(t,e={}){if(!Ho(t)&&e.initialData!==void 0)throw new v("editor-create-initial-data",null);super(e),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Ho(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),Ho(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new h2(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new d2(this,o),function(s){if(!zo(s.updateSourceElement))throw new v("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(a&&a.tagName.toLowerCase()==="textarea"&&a.form){let l;const u=a.form,f=()=>s.updateSourceElement();zo(u.submit)&&(l=u.submit,u.submit=()=>{f(),l.apply(u)}),u.addEventListener("submit",f),s.on("destroy",()=>{u.removeEventListener("submit",f),l&&(u.submit=l)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(Ho(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}tt(Jh,uE),tt(Jh,fE);class f2{constructor(t){this.files=function(e){const n=Array.from(e.files||[]),o=Array.from(e.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class Xh extends _i{constructor(t){super(t);const e=this.document;function n(o){return(s,a)=>{a.preventDefault();const l=a.dropRange?[a.dropRange]:null,u=new _(e,o);e.fire(u,{dataTransfer:a.dataTransfer,method:s.name,targetRanges:l,target:a.target}),u.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e={dataTransfer:new f2(t.clipboardData?t.clipboardData:t.dataTransfer)};t.type!="drop"&&t.type!="dragover"||(e.dropRange=function(n,o){const s=o.target.ownerDocument,a=o.clientX,l=o.clientY;let u;return s.caretRangeFromPoint&&s.caretRangeFromPoint(a,l)?u=s.caretRangeFromPoint(a,l):o.rangeParent&&(u=s.createRange(),u.setStart(o.rangeParent,o.rangeOffset),u.collapse(!0)),u?n.domConverter.domRangeToView(u):null}(this.view,t)),this.fire(t.type,t,e)}}const Tk=["figcaption","li"];function Ik(i){let t="";if(i.is("$text")||i.is("$textProxy"))t=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))t=i.getAttribute("alt");else if(i.is("element","br"))t=`
`;else{let e=null;for(const n of i.getChildren()){const o=Ik(n);e&&(e.is("containerElement")||n.is("containerElement"))&&(Tk.includes(e.name)||Tk.includes(n.name)?t+=`
`:t+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(r,c){(function(d,h){r.exports=h()})(Ti,function(){const d="SweetAlert2:",h=A=>{const C=[];for(let I=0;I<A.length;I++)C.indexOf(A[I])===-1&&C.push(A[I]);return C},g=A=>A.charAt(0).toUpperCase()+A.slice(1),m=A=>Array.prototype.slice.call(A),b=A=>{console.warn("".concat(d," ").concat(typeof A=="object"?A.join(" "):A))},_=A=>{console.error("".concat(d," ").concat(A))},w=[],x=A=>{w.includes(A)||(w.push(A),b(A))},E=(A,C)=>{x('"'.concat(A,'" is deprecated and will be removed in the next major release. Please use "').concat(C,'" instead.'))},S=A=>typeof A=="function"?A():A,v=A=>A&&typeof A.toPromise=="function",M=A=>v(A)?A.toPromise():Promise.resolve(A),W=A=>A&&Promise.resolve(A)===A,ct={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},it=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],H={},j=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],K=A=>Object.prototype.hasOwnProperty.call(ct,A),nt=A=>it.indexOf(A)!==-1,ut=A=>H[A],Dt=A=>{K(A)||b('Unknown parameter "'.concat(A,'"'))},V=A=>{j.includes(A)&&b('The parameter "'.concat(A,'" is incompatible with toasts'))},U=A=>{ut(A)&&E(A,ut(A))},G=A=>{!A.backdrop&&A.allowOutsideClick&&b('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const C in A)Dt(C),A.toast&&V(C),U(C)},Y="swal2-",et=A=>{const C={};for(const I in A)C[A[I]]=Y+A[I];return C},O=et(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),_t=et(["success","warning","info","question","error"]),pt=()=>document.body.querySelector(".".concat(O.container)),Bt=A=>{const C=pt();return C?C.querySelector(A):null},Pt=A=>Bt(".".concat(A)),yt=()=>Pt(O.popup),Kt=()=>Pt(O.icon),de=()=>Pt(O.title),ne=()=>Pt(O["html-container"]),oe=()=>Pt(O.image),zt=()=>Pt(O["progress-steps"]),ae=()=>Pt(O["validation-message"]),me=()=>Bt(".".concat(O.actions," .").concat(O.confirm)),F=()=>Bt(".".concat(O.actions," .").concat(O.deny)),ft=()=>Pt(O["input-label"]),lt=()=>Bt(".".concat(O.loader)),tt=()=>Bt(".".concat(O.actions," .").concat(O.cancel)),Z=()=>Pt(O.actions),te=()=>Pt(O.footer),vt=()=>Pt(O["timer-progress-bar"]),Lt=()=>Pt(O.close),L=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,$=()=>{const A=m(yt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((I,R)=>{const dt=parseInt(I.getAttribute("tabindex")),Rt=parseInt(R.getAttribute("tabindex"));return dt>Rt?1:dt<Rt?-1:0}),C=m(yt().querySelectorAll(L)).filter(I=>I.getAttribute("tabindex")!=="-1");return h(A.concat(C)).filter(I=>Ve(I))},Q=()=>!gt(document.body,O["toast-shown"])&&!gt(document.body,O["no-backdrop"]),ot=()=>yt()&&gt(yt(),O.toast),rt=()=>yt().hasAttribute("data-loading"),mt={previousBodyPadding:null},kt=(A,C)=>{if(A.textContent="",C){const R=new DOMParser().parseFromString(C,"text/html");m(R.querySelector("head").childNodes).forEach(dt=>{A.appendChild(dt)}),m(R.querySelector("body").childNodes).forEach(dt=>{A.appendChild(dt)})}},gt=(A,C)=>{if(!C)return!1;const I=C.split(/\s+/);for(let R=0;R<I.length;R++)if(!A.classList.contains(I[R]))return!1;return!0},wt=(A,C)=>{m(A.classList).forEach(I=>{!Object.values(O).includes(I)&&!Object.values(_t).includes(I)&&!Object.values(C.showClass).includes(I)&&A.classList.remove(I)})},at=(A,C,I)=>{if(wt(A,C),C.customClass&&C.customClass[I]){if(typeof C.customClass[I]!="string"&&!C.customClass[I].forEach)return b("Invalid type of customClass.".concat(I,'! Expected string or iterable object, got "').concat(typeof C.customClass[I],'"'));bt(A,C.customClass[I])}},Nt=(A,C)=>{if(!C)return null;switch(C){case"select":case"textarea":case"file":return A.querySelector(".".concat(O.popup," > .").concat(O[C]));case"checkbox":return A.querySelector(".".concat(O.popup," > .").concat(O.checkbox," input"));case"radio":return A.querySelector(".".concat(O.popup," > .").concat(O.radio," input:checked"))||A.querySelector(".".concat(O.popup," > .").concat(O.radio," input:first-child"));case"range":return A.querySelector(".".concat(O.popup," > .").concat(O.range," input"));default:return A.querySelector(".".concat(O.popup," > .").concat(O.input))}},Et=A=>{if(A.focus(),A.type!=="file"){const C=A.value;A.value="",A.value=C}},It=(A,C,I)=>{!A||!C||(typeof C=="string"&&(C=C.split(/\s+/).filter(Boolean)),C.forEach(R=>{Array.isArray(A)?A.forEach(dt=>{I?dt.classList.add(R):dt.classList.remove(R)}):I?A.classList.add(R):A.classList.remove(R)}))},bt=(A,C)=>{It(A,C,!0)},$t=(A,C)=>{It(A,C,!1)},Yt=(A,C)=>{const I=m(A.childNodes);for(let R=0;R<I.length;R++)if(gt(I[R],C))return I[R]},Ht=(A,C,I)=>{I==="".concat(parseInt(I))&&(I=parseInt(I)),I||parseInt(I)===0?A.style[C]=typeof I=="number"?"".concat(I,"px"):I:A.style.removeProperty(C)},Wt=function(A){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";A.style.display=C},ce=A=>{A.style.display="none"},Un=(A,C,I,R)=>{const dt=A.querySelector(C);dt&&(dt.style[I]=R)},Oo=(A,C,I)=>{C?Wt(A,I):ce(A)},Ve=A=>!!(A&&(A.offsetWidth||A.offsetHeight||A.getClientRects().length)),Ge=()=>!Ve(me())&&!Ve(F())&&!Ve(tt()),Ke=A=>A.scrollHeight>A.clientHeight,He=A=>{const C=window.getComputedStyle(A),I=parseFloat(C.getPropertyValue("animation-duration")||"0"),R=parseFloat(C.getPropertyValue("transition-duration")||"0");return I>0||R>0},no=function(A){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const I=vt();Ve(I)&&(C&&(I.style.transition="none",I.style.width="100%"),setTimeout(()=>{I.style.transition="width ".concat(A/1e3,"s linear"),I.style.width="0%"},10))},Gd=()=>{const A=vt(),C=parseInt(window.getComputedStyle(A).width);A.style.removeProperty("transition"),A.style.width="100%";const I=parseInt(window.getComputedStyle(A).width),R=C/I*100;A.style.removeProperty("transition"),A.style.width="".concat(R,"%")},bc=()=>typeof window=="undefined"||typeof document=="undefined",Kd=100,Ut={},Yd=()=>{Ut.previousActiveElement&&Ut.previousActiveElement.focus?(Ut.previousActiveElement.focus(),Ut.previousActiveElement=null):document.body&&document.body.focus()},ci=A=>new Promise(C=>{if(!A)return C();const I=window.scrollX,R=window.scrollY;Ut.restoreFocusTimeout=setTimeout(()=>{Yd(),C()},Kd),window.scrollTo(I,R)}),Or=`
 <div aria-labelledby="`.concat(O.title,'" aria-describedby="').concat(O["html-container"],'" class="').concat(O.popup,`" tabindex="-1">
   <button type="button" class="`).concat(O.close,`"></button>
   <ul class="`).concat(O["progress-steps"],`"></ul>
   <div class="`).concat(O.icon,`"></div>
   <img class="`).concat(O.image,`" />
   <h2 class="`).concat(O.title,'" id="').concat(O.title,`"></h2>
   <div class="`).concat(O["html-container"],'" id="').concat(O["html-container"],`"></div>
   <input class="`).concat(O.input,`" />
   <input type="file" class="`).concat(O.file,`" />
   <div class="`).concat(O.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(O.select,`"></select>
   <div class="`).concat(O.radio,`"></div>
   <label for="`).concat(O.checkbox,'" class="').concat(O.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(O.label,`"></span>
   </label>
   <textarea class="`).concat(O.textarea,`"></textarea>
   <div class="`).concat(O["validation-message"],'" id="').concat(O["validation-message"],`"></div>
   <div class="`).concat(O.actions,`">
     <div class="`).concat(O.loader,`"></div>
     <button type="button" class="`).concat(O.confirm,`"></button>
     <button type="button" class="`).concat(O.deny,`"></button>
     <button type="button" class="`).concat(O.cancel,`"></button>
   </div>
   <div class="`).concat(O.footer,`"></div>
   <div class="`).concat(O["timer-progress-bar-container"],`">
     <div class="`).concat(O["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),Qd=()=>{const A=pt();return A?(A.remove(),$t([document.documentElement,document.body],[O["no-backdrop"],O["toast-shown"],O["has-column"]]),!0):!1},Ro=()=>{Ut.currentInstance.resetValidationMessage()},Zd=()=>{const A=yt(),C=Yt(A,O.input),I=Yt(A,O.file),R=A.querySelector(".".concat(O.range," input")),dt=A.querySelector(".".concat(O.range," output")),Rt=Yt(A,O.select),Ne=A.querySelector(".".concat(O.checkbox," input")),kn=Yt(A,O.textarea);C.oninput=Ro,I.onchange=Ro,Rt.onchange=Ro,Ne.onchange=Ro,kn.oninput=Ro,R.oninput=()=>{Ro(),dt.value=R.value},R.onchange=()=>{Ro(),R.nextSibling.value=R.value}},Jd=A=>typeof A=="string"?document.querySelector(A):A,zo=A=>{const C=yt();C.setAttribute("role",A.toast?"alert":"dialog"),C.setAttribute("aria-live",A.toast?"polite":"assertive"),A.toast||C.setAttribute("aria-modal","true")},Vs=A=>{window.getComputedStyle(A).direction==="rtl"&&bt(pt(),O.rtl)},kc=A=>{const C=Qd();if(bc()){_("SweetAlert2 requires document to initialize");return}const I=document.createElement("div");I.className=O.container,C&&bt(I,O["no-transition"]),kt(I,Or);const R=Jd(A.target);R.appendChild(I),zo(A),Vs(R),Zd()},$s=(A,C)=>{A instanceof HTMLElement?C.appendChild(A):typeof A=="object"?Xd(A,C):A&&kt(C,A)},Xd=(A,C)=>{A.jquery?jo(C,A):kt(C,A.toString())},jo=(A,C)=>{if(A.textContent="",0 in C)for(let I=0;I in C;I++)A.appendChild(C[I].cloneNode(!0));else A.appendChild(C.cloneNode(!0))},Yi=(()=>{if(bc())return!1;const A=document.createElement("div"),C={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const I in C)if(Object.prototype.hasOwnProperty.call(C,I)&&typeof A.style[I]!="undefined")return C[I];return!1})(),tu=()=>{const A=document.createElement("div");A.className=O["scrollbar-measure"],document.body.appendChild(A);const C=A.getBoundingClientRect().width-A.clientWidth;return document.body.removeChild(A),C},eu=(A,C)=>{const I=Z(),R=lt();!C.showConfirmButton&&!C.showDenyButton&&!C.showCancelButton?ce(I):Wt(I),at(I,C,"actions"),nu(I,R,C),kt(R,C.loaderHtml),at(R,C,"loader")};function nu(A,C,I){const R=me(),dt=F(),Rt=tt();Hs(R,"confirm",I),Hs(dt,"deny",I),Hs(Rt,"cancel",I),ou(R,dt,Rt,I),I.reverseButtons&&(I.toast?(A.insertBefore(Rt,R),A.insertBefore(dt,R)):(A.insertBefore(Rt,C),A.insertBefore(dt,C),A.insertBefore(R,C)))}function ou(A,C,I,R){if(!R.buttonsStyling)return $t([A,C,I],O.styled);bt([A,C,I],O.styled),R.confirmButtonColor&&(A.style.backgroundColor=R.confirmButtonColor,bt(A,O["default-outline"])),R.denyButtonColor&&(C.style.backgroundColor=R.denyButtonColor,bt(C,O["default-outline"])),R.cancelButtonColor&&(I.style.backgroundColor=R.cancelButtonColor,bt(I,O["default-outline"]))}function Hs(A,C,I){Oo(A,I["show".concat(g(C),"Button")],"inline-block"),kt(A,I["".concat(C,"ButtonText")]),A.setAttribute("aria-label",I["".concat(C,"ButtonAriaLabel")]),A.className=O[C],at(A,I,"".concat(C,"Button")),bt(A,I["".concat(C,"ButtonClass")])}function iu(A,C){typeof C=="string"?A.style.background=C:C||bt([document.documentElement,document.body],O["no-backdrop"])}function ru(A,C){C in O?bt(A,O[C]):(b('The "position" parameter is not valid, defaulting to "center"'),bt(A,O.center))}function Fo(A,C){if(C&&typeof C=="string"){const I="grow-".concat(C);I in O&&bt(A,O[I])}}const Qi=(A,C)=>{const I=pt();!I||(iu(I,C.backdrop),ru(I,C.position),Fo(I,C.grow),at(I,C,"container"))};var Gt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const su=["input","file","range","select","radio","checkbox","textarea"],au=(A,C)=>{const I=yt(),R=Gt.innerParams.get(A),dt=!R||C.input!==R.input;su.forEach(Rt=>{const Ne=O[Rt],kn=Yt(I,Ne);du(Rt,C.inputAttributes),kn.className=Ne,dt&&ce(kn)}),C.input&&(dt&&cu(C),uu(C))},cu=A=>{if(!hn[A.input])return _('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(A.input,'"'));const C=qs(A.input),I=hn[A.input](C,A);Wt(I),setTimeout(()=>{Et(I)})},lu=A=>{for(let C=0;C<A.attributes.length;C++){const I=A.attributes[C].name;["type","value","style"].includes(I)||A.removeAttribute(I)}},du=(A,C)=>{const I=Nt(yt(),A);if(!!I){lu(I);for(const R in C)I.setAttribute(R,C[R])}},uu=A=>{const C=qs(A.input);A.customClass&&bt(C,A.customClass.input)},Us=(A,C)=>{(!A.placeholder||C.inputPlaceholder)&&(A.placeholder=C.inputPlaceholder)},qn=(A,C,I)=>{if(I.inputLabel){A.id=O.input;const R=document.createElement("label"),dt=O["input-label"];R.setAttribute("for",A.id),R.className=dt,bt(R,I.customClass.inputLabel),R.innerText=I.inputLabel,C.insertAdjacentElement("beforebegin",R)}},qs=A=>{const C=O[A]?O[A]:O.input;return Yt(yt(),C)},hn={};hn.text=hn.email=hn.password=hn.number=hn.tel=hn.url=(A,C)=>(typeof C.inputValue=="string"||typeof C.inputValue=="number"?A.value=C.inputValue:W(C.inputValue)||b('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof C.inputValue,'"')),qn(A,A,C),Us(A,C),A.type=C.input,A),hn.file=(A,C)=>(qn(A,A,C),Us(A,C),A),hn.range=(A,C)=>{const I=A.querySelector("input"),R=A.querySelector("output");return I.value=C.inputValue,I.type=C.input,R.value=C.inputValue,qn(I,A,C),A},hn.select=(A,C)=>{if(A.textContent="",C.inputPlaceholder){const I=document.createElement("option");kt(I,C.inputPlaceholder),I.value="",I.disabled=!0,I.selected=!0,A.appendChild(I)}return qn(A,A,C),A},hn.radio=A=>(A.textContent="",A),hn.checkbox=(A,C)=>{const I=Nt(yt(),"checkbox");I.value="1",I.id=O.checkbox,I.checked=Boolean(C.inputValue);const R=A.querySelector("span");return kt(R,C.inputPlaceholder),A},hn.textarea=(A,C)=>{A.value=C.inputValue,Us(A,C),qn(A,A,C);const I=R=>parseInt(window.getComputedStyle(R).marginLeft)+parseInt(window.getComputedStyle(R).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const R=parseInt(window.getComputedStyle(yt()).width),dt=()=>{const Rt=A.offsetWidth+I(A);Rt>R?yt().style.width="".concat(Rt,"px"):yt().style.width=null};new MutationObserver(dt).observe(A,{attributes:!0,attributeFilter:["style"]})}}),A};const hu=(A,C)=>{const I=ne();at(I,C,"htmlContainer"),C.html?($s(C.html,I),Wt(I,"block")):C.text?(I.textContent=C.text,Wt(I,"block")):ce(I),au(A,C)},Rr=(A,C)=>{const I=te();Oo(I,C.footer),C.footer&&$s(C.footer,I),at(I,C,"footer")},fu=(A,C)=>{const I=Lt();kt(I,C.closeButtonHtml),at(I,C,"closeButton"),Oo(I,C.showCloseButton),I.setAttribute("aria-label",C.closeButtonAriaLabel)},gu=(A,C)=>{const I=Gt.innerParams.get(A),R=Kt();if(I&&C.icon===I.icon){_c(R,C),wc(R,C);return}if(!C.icon&&!C.iconHtml)return ce(R);if(C.icon&&Object.keys(_t).indexOf(C.icon)===-1)return _('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(C.icon,'"')),ce(R);Wt(R),_c(R,C),wc(R,C),bt(R,C.showClass.icon)},wc=(A,C)=>{for(const I in _t)C.icon!==I&&$t(A,_t[I]);bt(A,_t[C.icon]),di(A,C),pu(),at(A,C,"icon")},pu=()=>{const A=yt(),C=window.getComputedStyle(A).getPropertyValue("background-color"),I=A.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let R=0;R<I.length;R++)I[R].style.backgroundColor=C},li=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,zr=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,_c=(A,C)=>{A.textContent="",C.iconHtml?kt(A,ui(C.iconHtml)):C.icon==="success"?kt(A,li):C.icon==="error"?kt(A,zr):kt(A,ui({question:"?",warning:"!",info:"i"}[C.icon]))},di=(A,C)=>{if(!!C.iconColor){A.style.color=C.iconColor,A.style.borderColor=C.iconColor;for(const I of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Un(A,I,"backgroundColor",C.iconColor);Un(A,".swal2-success-ring","borderColor",C.iconColor)}},ui=A=>'<div class="'.concat(O["icon-content"],'">').concat(A,"</div>"),mu=(A,C)=>{const I=oe();if(!C.imageUrl)return ce(I);Wt(I,""),I.setAttribute("src",C.imageUrl),I.setAttribute("alt",C.imageAlt),Ht(I,"width",C.imageWidth),Ht(I,"height",C.imageHeight),I.className=O.image,at(I,C,"image")},jr=A=>{const C=document.createElement("li");return bt(C,O["progress-step"]),kt(C,A),C},Ws=A=>{const C=document.createElement("li");return bt(C,O["progress-step-line"]),A.progressStepsDistance&&(C.style.width=A.progressStepsDistance),C},bu=(A,C)=>{const I=zt();if(!C.progressSteps||C.progressSteps.length===0)return ce(I);Wt(I),I.textContent="",C.currentProgressStep>=C.progressSteps.length&&b("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),C.progressSteps.forEach((R,dt)=>{const Rt=jr(R);if(I.appendChild(Rt),dt===C.currentProgressStep&&bt(Rt,O["active-progress-step"]),dt!==C.progressSteps.length-1){const Ne=Ws(C);I.appendChild(Ne)}})},Gs=(A,C)=>{const I=de();Oo(I,C.title||C.titleText,"block"),C.title&&$s(C.title,I),C.titleText&&(I.innerText=C.titleText),at(I,C,"title")},hi=(A,C)=>{const I=pt(),R=yt();C.toast?(Ht(I,"width",C.width),R.style.width="100%",R.insertBefore(lt(),Kt())):Ht(R,"width",C.width),Ht(R,"padding",C.padding),C.color&&(R.style.color=C.color),C.background&&(R.style.background=C.background),ce(ae()),ku(R,C)},ku=(A,C)=>{A.className="".concat(O.popup," ").concat(Ve(A)?C.showClass.popup:""),C.toast?(bt([document.documentElement,document.body],O["toast-shown"]),bt(A,O.toast)):bt(A,O.modal),at(A,C,"popup"),typeof C.customClass=="string"&&bt(A,C.customClass),C.icon&&bt(A,O["icon-".concat(C.icon)])},Ks=(A,C)=>{hi(A,C),Qi(A,C),bu(A,C),gu(A,C),mu(A,C),Gs(A,C),fu(A,C),hu(A,C),eu(A,C),Rr(A,C),typeof C.didRender=="function"&&C.didRender(yt())},Vo=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wu=()=>{m(document.body.children).forEach(C=>{C===pt()||C.contains(pt())||(C.hasAttribute("aria-hidden")&&C.setAttribute("data-previous-aria-hidden",C.getAttribute("aria-hidden")),C.setAttribute("aria-hidden","true"))})},vc=()=>{m(document.body.children).forEach(C=>{C.hasAttribute("data-previous-aria-hidden")?(C.setAttribute("aria-hidden",C.getAttribute("data-previous-aria-hidden")),C.removeAttribute("data-previous-aria-hidden")):C.removeAttribute("aria-hidden")})},Fr=["swal-title","swal-html","swal-footer"],nn=A=>{const C=typeof A.template=="string"?document.querySelector(A.template):A.template;if(!C)return{};const I=C.content;return Ys(I),Object.assign(_u(I),Ac(I),Cc(I),yc(I),Zi(I),vu(I,Fr))},_u=A=>{const C={};return m(A.querySelectorAll("swal-param")).forEach(I=>{wo(I,["name","value"]);const R=I.getAttribute("name"),dt=I.getAttribute("value");typeof ct[R]=="boolean"&&dt==="false"&&(C[R]=!1),typeof ct[R]=="object"&&(C[R]=JSON.parse(dt))}),C},Ac=A=>{const C={};return m(A.querySelectorAll("swal-button")).forEach(I=>{wo(I,["type","color","aria-label"]);const R=I.getAttribute("type");C["".concat(R,"ButtonText")]=I.innerHTML,C["show".concat(g(R),"Button")]=!0,I.hasAttribute("color")&&(C["".concat(R,"ButtonColor")]=I.getAttribute("color")),I.hasAttribute("aria-label")&&(C["".concat(R,"ButtonAriaLabel")]=I.getAttribute("aria-label"))}),C},Cc=A=>{const C={},I=A.querySelector("swal-image");return I&&(wo(I,["src","width","height","alt"]),I.hasAttribute("src")&&(C.imageUrl=I.getAttribute("src")),I.hasAttribute("width")&&(C.imageWidth=I.getAttribute("width")),I.hasAttribute("height")&&(C.imageHeight=I.getAttribute("height")),I.hasAttribute("alt")&&(C.imageAlt=I.getAttribute("alt"))),C},yc=A=>{const C={},I=A.querySelector("swal-icon");return I&&(wo(I,["type","color"]),I.hasAttribute("type")&&(C.icon=I.getAttribute("type")),I.hasAttribute("color")&&(C.iconColor=I.getAttribute("color")),C.iconHtml=I.innerHTML),C},Zi=A=>{const C={},I=A.querySelector("swal-input");I&&(wo(I,["type","label","placeholder","value"]),C.input=I.getAttribute("type")||"text",I.hasAttribute("label")&&(C.inputLabel=I.getAttribute("label")),I.hasAttribute("placeholder")&&(C.inputPlaceholder=I.getAttribute("placeholder")),I.hasAttribute("value")&&(C.inputValue=I.getAttribute("value")));const R=A.querySelectorAll("swal-input-option");return R.length&&(C.inputOptions={},m(R).forEach(dt=>{wo(dt,["value"]);const Rt=dt.getAttribute("value"),Ne=dt.innerHTML;C.inputOptions[Rt]=Ne})),C},vu=(A,C)=>{const I={};for(const R in C){const dt=C[R],Rt=A.querySelector(dt);Rt&&(wo(Rt,[]),I[dt.replace(/^swal-/,"")]=Rt.innerHTML.trim())}return I},Ys=A=>{const C=Fr.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);m(A.children).forEach(I=>{const R=I.tagName.toLowerCase();C.indexOf(R)===-1&&b("Unrecognized element <".concat(R,">"))})},wo=(A,C)=>{m(A.attributes).forEach(I=>{C.indexOf(I.name)===-1&&b(['Unrecognized attribute "'.concat(I.name,'" on <').concat(A.tagName.toLowerCase(),">."),"".concat(C.length?"Allowed attributes are: ".concat(C.join(", ")):"To set the value, use HTML within the element.")])})};var be={email:(A,C)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(A)?Promise.resolve():Promise.resolve(C||"Invalid email address"),url:(A,C)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(A)?Promise.resolve():Promise.resolve(C||"Invalid URL")};function Au(A){A.inputValidator||Object.keys(be).forEach(C=>{A.input===C&&(A.inputValidator=be[C])})}function Qs(A){(!A.target||typeof A.target=="string"&&!document.querySelector(A.target)||typeof A.target!="string"&&!A.target.appendChild)&&(b('Target parameter is not valid, defaulting to "body"'),A.target="body")}function xc(A){Au(A),A.showLoaderOnConfirm&&!A.preConfirm&&b(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Qs(A),typeof A.title=="string"&&(A.title=A.title.split(`
`).join("<br />")),kc(A)}class Ji{constructor(C,I){this.callback=C,this.remaining=I,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(C){const I=this.running;return I&&this.stop(),this.remaining+=C,I&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Zs=()=>{mt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(mt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(mt.previousBodyPadding+tu(),"px"))},fi=()=>{mt.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(mt.previousBodyPadding,"px"),mt.previousBodyPadding=null)},Ec=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!gt(document.body,O.iosfix)){const C=document.body.scrollTop;document.body.style.top="".concat(C*-1,"px"),bt(document.body,O.iosfix),Cu(),Js()}},Js=()=>{const A=navigator.userAgent,C=!!A.match(/iPad/i)||!!A.match(/iPhone/i),I=!!A.match(/WebKit/i);C&&I&&!A.match(/CriOS/i)&&yt().scrollHeight>window.innerHeight-44&&(pt().style.paddingBottom="".concat(44,"px"))},Cu=()=>{const A=pt();let C;A.ontouchstart=I=>{C=Dc(I)},A.ontouchmove=I=>{C&&(I.preventDefault(),I.stopPropagation())}},Dc=A=>{const C=A.target,I=pt();return yu(A)||Xs(A)?!1:C===I||!Ke(I)&&C.tagName!=="INPUT"&&C.tagName!=="TEXTAREA"&&!(Ke(ne())&&ne().contains(C))},yu=A=>A.touches&&A.touches.length&&A.touches[0].touchType==="stylus",Xs=A=>A.touches&&A.touches.length>1,xu=()=>{if(gt(document.body,O.iosfix)){const A=parseInt(document.body.style.top,10);$t(document.body,O.iosfix),document.body.style.top="",document.body.scrollTop=A*-1}},Sc=10,Eu=A=>{const C=pt(),I=yt();typeof A.willOpen=="function"&&A.willOpen(I);const dt=window.getComputedStyle(document.body).overflowY;Su(C,I,A),setTimeout(()=>{ta(C,I)},Sc),Q()&&(Du(C,A.scrollbarPadding,dt),wu()),!ot()&&!Ut.previousActiveElement&&(Ut.previousActiveElement=document.activeElement),typeof A.didOpen=="function"&&setTimeout(()=>A.didOpen(I)),$t(C,O["no-transition"])},Xi=A=>{const C=yt();if(A.target!==C)return;const I=pt();C.removeEventListener(Yi,Xi),I.style.overflowY="auto"},ta=(A,C)=>{Yi&&He(C)?(A.style.overflowY="hidden",C.addEventListener(Yi,Xi)):A.style.overflowY="auto"},Du=(A,C,I)=>{Ec(),C&&I!=="hidden"&&Zs(),setTimeout(()=>{A.scrollTop=0})},Su=(A,C,I)=>{bt(A,I.showClass.backdrop),C.style.setProperty("opacity","0","important"),Wt(C,"grid"),setTimeout(()=>{bt(C,I.showClass.popup),C.style.removeProperty("opacity")},Sc),bt([document.documentElement,document.body],O.shown),I.heightAuto&&I.backdrop&&!I.toast&&bt([document.documentElement,document.body],O["height-auto"])},gi=A=>{let C=yt();C||new Ur,C=yt();const I=lt();ot()?ce(Kt()):Tu(C,A),Wt(I),C.setAttribute("data-loading",!0),C.setAttribute("aria-busy",!0),C.focus()},Tu=(A,C)=>{const I=Z(),R=lt();!C&&Ve(me())&&(C=me()),Wt(I),C&&(ce(C),R.setAttribute("data-button-to-replace",C.className)),R.parentNode.insertBefore(R,C),bt([A,I],O.loading)},pi=(A,C)=>{C.input==="select"||C.input==="radio"?Pc(A,C):["text","email","number","tel","textarea"].includes(C.input)&&(v(C.inputValue)||W(C.inputValue))&&(gi(me()),Nc(A,C))},Iu=(A,C)=>{const I=A.getInput();if(!I)return null;switch(C.input){case"checkbox":return Tc(I);case"radio":return Ic(I);case"file":return Mc(I);default:return C.inputAutoTrim?I.value.trim():I.value}},Tc=A=>A.checked?1:0,Ic=A=>A.checked?A.value:null,Mc=A=>A.files.length?A.getAttribute("multiple")!==null?A.files:A.files[0]:null,Pc=(A,C)=>{const I=yt(),R=dt=>Bc[C.input](I,ea(dt),C);v(C.inputOptions)||W(C.inputOptions)?(gi(me()),M(C.inputOptions).then(dt=>{A.hideLoading(),R(dt)})):typeof C.inputOptions=="object"?R(C.inputOptions):_("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof C.inputOptions))},Nc=(A,C)=>{const I=A.getInput();ce(I),M(C.inputValue).then(R=>{I.value=C.input==="number"?parseFloat(R)||0:"".concat(R),Wt(I),I.focus(),A.hideLoading()}).catch(R=>{_("Error in inputValue promise: ".concat(R)),I.value="",Wt(I),I.focus(),A.hideLoading()})},Bc={select:(A,C,I)=>{const R=Yt(A,O.select),dt=(Rt,Ne,kn)=>{const Ue=document.createElement("option");Ue.value=kn,kt(Ue,Ne),Ue.selected=na(kn,I.inputValue),Rt.appendChild(Ue)};C.forEach(Rt=>{const Ne=Rt[0],kn=Rt[1];if(Array.isArray(kn)){const Ue=document.createElement("optgroup");Ue.label=Ne,Ue.disabled=!1,R.appendChild(Ue),kn.forEach(qo=>dt(Ue,qo[1],qo[0]))}else dt(R,kn,Ne)}),R.focus()},radio:(A,C,I)=>{const R=Yt(A,O.radio);C.forEach(Rt=>{const Ne=Rt[0],kn=Rt[1],Ue=document.createElement("input"),qo=document.createElement("label");Ue.type="radio",Ue.name=O.radio,Ue.value=Ne,na(Ne,I.inputValue)&&(Ue.checked=!0);const qr=document.createElement("span");kt(qr,kn),qr.className=O.label,qo.appendChild(Ue),qo.appendChild(qr),R.appendChild(qo)});const dt=R.querySelectorAll("input");dt.length&&dt[0].focus()}},ea=A=>{const C=[];return typeof Map!="undefined"&&A instanceof Map?A.forEach((I,R)=>{let dt=I;typeof dt=="object"&&(dt=ea(dt)),C.push([R,dt])}):Object.keys(A).forEach(I=>{let R=A[I];typeof R=="object"&&(R=ea(R)),C.push([I,R])}),C},na=(A,C)=>C&&C.toString()===A.toString(),Mu=A=>{const C=Gt.innerParams.get(A);A.disableButtons(),C.input?Oc(A,"confirm"):tr(A,!0)},Lc=A=>{const C=Gt.innerParams.get(A);A.disableButtons(),C.returnInputValueOnDeny?Oc(A,"deny"):Vr(A,!1)},oa=(A,C)=>{A.disableButtons(),C(Vo.cancel)},Oc=(A,C)=>{const I=Gt.innerParams.get(A);if(!I.input)return _('The "input" parameter is needed to be set when using returnInputValueOn'.concat(g(C)));const R=Iu(A,I);I.inputValidator?Rc(A,R,C):A.getInput().checkValidity()?C==="deny"?Vr(A,R):tr(A,R):(A.enableButtons(),A.showValidationMessage(I.validationMessage))},Rc=(A,C,I)=>{const R=Gt.innerParams.get(A);A.disableInput(),Promise.resolve().then(()=>M(R.inputValidator(C,R.validationMessage))).then(Rt=>{A.enableButtons(),A.enableInput(),Rt?A.showValidationMessage(Rt):I==="deny"?Vr(A,C):tr(A,C)})},Vr=(A,C)=>{const I=Gt.innerParams.get(A||void 0);I.showLoaderOnDeny&&gi(F()),I.preDeny?(Gt.awaitingPromise.set(A||void 0,!0),Promise.resolve().then(()=>M(I.preDeny(C,I.validationMessage))).then(dt=>{dt===!1?A.hideLoading():A.closePopup({isDenied:!0,value:typeof dt=="undefined"?C:dt})}).catch(dt=>ia(A||void 0,dt))):A.closePopup({isDenied:!0,value:C})},zc=(A,C)=>{A.closePopup({isConfirmed:!0,value:C})},ia=(A,C)=>{A.rejectPromise(C)},tr=(A,C)=>{const I=Gt.innerParams.get(A||void 0);I.showLoaderOnConfirm&&gi(),I.preConfirm?(A.resetValidationMessage(),Gt.awaitingPromise.set(A||void 0,!0),Promise.resolve().then(()=>M(I.preConfirm(C,I.validationMessage))).then(dt=>{Ve(ae())||dt===!1?A.hideLoading():zc(A,typeof dt=="undefined"?C:dt)}).catch(dt=>ia(A||void 0,dt))):zc(A,C)},Pu=(A,C,I)=>{Gt.innerParams.get(A).toast?ra(A,C,I):(aa(C),jc(C),Fc(A,C,I))},ra=(A,C,I)=>{C.popup.onclick=()=>{const R=Gt.innerParams.get(A);R&&(sa(R)||R.timer||R.input)||I(Vo.close)}},sa=A=>A.showConfirmButton||A.showDenyButton||A.showCancelButton||A.showCloseButton;let mi=!1;const aa=A=>{A.popup.onmousedown=()=>{A.container.onmouseup=function(C){A.container.onmouseup=void 0,C.target===A.container&&(mi=!0)}}},jc=A=>{A.container.onmousedown=()=>{A.popup.onmouseup=function(C){A.popup.onmouseup=void 0,(C.target===A.popup||A.popup.contains(C.target))&&(mi=!0)}}},Fc=(A,C,I)=>{C.container.onclick=R=>{const dt=Gt.innerParams.get(A);if(mi){mi=!1;return}R.target===C.container&&S(dt.allowOutsideClick)&&I(Vo.backdrop)}},Vc=()=>Ve(yt()),ca=()=>me()&&me().click(),$c=()=>F()&&F().click(),Nu=()=>tt()&&tt().click(),Bu=(A,C,I,R)=>{C.keydownTarget&&C.keydownHandlerAdded&&(C.keydownTarget.removeEventListener("keydown",C.keydownHandler,{capture:C.keydownListenerCapture}),C.keydownHandlerAdded=!1),I.toast||(C.keydownHandler=dt=>$o(A,dt,R),C.keydownTarget=I.keydownListenerCapture?window:yt(),C.keydownListenerCapture=I.keydownListenerCapture,C.keydownTarget.addEventListener("keydown",C.keydownHandler,{capture:C.keydownListenerCapture}),C.keydownHandlerAdded=!0)},la=(A,C,I)=>{const R=$();if(R.length)return C=C+I,C===R.length?C=0:C===-1&&(C=R.length-1),R[C].focus();yt().focus()},Hc=["ArrowRight","ArrowDown"],Lu=["ArrowLeft","ArrowUp"],$o=(A,C,I)=>{const R=Gt.innerParams.get(A);!R||(R.stopKeydownPropagation&&C.stopPropagation(),C.key==="Enter"?er(A,C,R):C.key==="Tab"?Ou(C,R):[...Hc,...Lu].includes(C.key)?Ru(C.key):C.key==="Escape"&&$r(C,R,I))},er=(A,C,I)=>{if(!(!S(I.allowEnterKey)||C.isComposing)&&C.target&&A.getInput()&&C.target.outerHTML===A.getInput().outerHTML){if(["textarea","file"].includes(I.input))return;ca(),C.preventDefault()}},Ou=(A,C)=>{const I=A.target,R=$();let dt=-1;for(let Rt=0;Rt<R.length;Rt++)if(I===R[Rt]){dt=Rt;break}A.shiftKey?la(C,dt,-1):la(C,dt,1),A.stopPropagation(),A.preventDefault()},Ru=A=>{const C=me(),I=F(),R=tt();if(![C,I,R].includes(document.activeElement))return;const dt=Hc.includes(A)?"nextElementSibling":"previousElementSibling",Rt=document.activeElement[dt];Rt instanceof HTMLElement&&Rt.focus()},$r=(A,C,I)=>{S(C.allowEscapeKey)&&(A.preventDefault(),I(Vo.esc))},da=A=>typeof A=="object"&&A.jquery,Uc=A=>A instanceof Element||da(A),zu=A=>{const C={};return typeof A[0]=="object"&&!Uc(A[0])?Object.assign(C,A[0]):["title","html","icon"].forEach((I,R)=>{const dt=A[R];typeof dt=="string"||Uc(dt)?C[I]=dt:dt!==void 0&&_("Unexpected type of ".concat(I,'! Expected "string" or "Element", got ').concat(typeof dt))}),C};function ju(){const A=this;for(var C=arguments.length,I=new Array(C),R=0;R<C;R++)I[R]=arguments[R];return new A(...I)}function qc(A){class C extends this{_main(R,dt){return super._main(R,Object.assign({},A,dt))}}return C}const Wc=()=>Ut.timeout&&Ut.timeout.getTimerLeft(),Gc=()=>{if(Ut.timeout)return Gd(),Ut.timeout.stop()},ua=()=>{if(Ut.timeout){const A=Ut.timeout.start();return no(A),A}},Fu=()=>{const A=Ut.timeout;return A&&(A.running?Gc():ua())},Kc=A=>{if(Ut.timeout){const C=Ut.timeout.increase(A);return no(C,!0),C}},Vu=()=>Ut.timeout&&Ut.timeout.isRunning();let ha=!1;const fa={};function Yc(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";fa[A]=this,ha||(document.body.addEventListener("click",$u),ha=!0)}const $u=A=>{for(let C=A.target;C&&C!==document;C=C.parentNode)for(const I in fa){const R=C.getAttribute(I);if(R){fa[I].fire({template:R});return}}};var Hu=Object.freeze({isValidParameter:K,isUpdatableParameter:nt,isDeprecatedParameter:ut,argsToParams:zu,isVisible:Vc,clickConfirm:ca,clickDeny:$c,clickCancel:Nu,getContainer:pt,getPopup:yt,getTitle:de,getHtmlContainer:ne,getImage:oe,getIcon:Kt,getInputLabel:ft,getCloseButton:Lt,getActions:Z,getConfirmButton:me,getDenyButton:F,getCancelButton:tt,getLoader:lt,getFooter:te,getTimerProgressBar:vt,getFocusableElements:$,getValidationMessage:ae,isLoading:rt,fire:ju,mixin:qc,showLoading:gi,enableLoading:gi,getTimerLeft:Wc,stopTimer:Gc,resumeTimer:ua,toggleTimer:Fu,increaseTimer:Kc,isTimerRunning:Vu,bindClickHandler:Yc});function ga(){const A=Gt.innerParams.get(this);if(!A)return;const C=Gt.domCache.get(this);ce(C.loader),ot()?A.icon&&Wt(Kt()):Uu(C),$t([C.popup,C.actions],O.loading),C.popup.removeAttribute("aria-busy"),C.popup.removeAttribute("data-loading"),C.confirmButton.disabled=!1,C.denyButton.disabled=!1,C.cancelButton.disabled=!1}const Uu=A=>{const C=A.popup.getElementsByClassName(A.loader.getAttribute("data-button-to-replace"));C.length?Wt(C[0],"inline-block"):Ge()&&ce(A.actions)};function Qc(A){const C=Gt.innerParams.get(A||this),I=Gt.domCache.get(A||this);return I?Nt(I.popup,C.input):null}var bi={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function Zc(A,C,I,R){ot()?Cn(A,R):(ci(I).then(()=>Cn(A,R)),Ut.keydownTarget.removeEventListener("keydown",Ut.keydownHandler,{capture:Ut.keydownListenerCapture}),Ut.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(C.setAttribute("style","display:none !important"),C.removeAttribute("class"),C.innerHTML=""):C.remove(),Q()&&(fi(),xu(),vc()),ke()}function ke(){$t([document.documentElement,document.body],[O.shown,O["height-auto"],O["no-backdrop"],O["toast-shown"]])}function ki(A){A=qu(A);const C=bi.swalPromiseResolve.get(this),I=Ho(this);this.isAwaitingPromise()?A.isDismissed||(pa(this),C(A)):I&&C(A)}function Jc(){return!!Gt.awaitingPromise.get(this)}const Ho=A=>{const C=yt();if(!C)return!1;const I=Gt.innerParams.get(A);if(!I||gt(C,I.hideClass.popup))return!1;$t(C,I.showClass.popup),bt(C,I.hideClass.popup);const R=pt();return $t(R,I.showClass.backdrop),bt(R,I.hideClass.backdrop),An(A,C,I),!0};function Xc(A){const C=bi.swalPromiseReject.get(this);pa(this),C&&C(A)}const pa=A=>{A.isAwaitingPromise()&&(Gt.awaitingPromise.delete(A),Gt.innerParams.get(A)||A._destroy())},qu=A=>typeof A=="undefined"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},A),An=(A,C,I)=>{const R=pt(),dt=Yi&&He(C);typeof I.willClose=="function"&&I.willClose(C),dt?tl(A,C,R,I.returnFocus,I.didClose):Zc(A,R,I.returnFocus,I.didClose)},tl=(A,C,I,R,dt)=>{Ut.swalCloseEventFinishedCallback=Zc.bind(null,A,I,R,dt),C.addEventListener(Yi,function(Rt){Rt.target===C&&(Ut.swalCloseEventFinishedCallback(),delete Ut.swalCloseEventFinishedCallback)})},Cn=(A,C)=>{setTimeout(()=>{typeof C=="function"&&C.bind(A.params)(),A._destroy()})};function Hr(A,C,I){const R=Gt.domCache.get(A);C.forEach(dt=>{R[dt].disabled=I})}function Re(A,C){if(!A)return!1;if(A.type==="radio"){const R=A.parentNode.parentNode.querySelectorAll("input");for(let dt=0;dt<R.length;dt++)R[dt].disabled=C}else A.disabled=C}function Wu(){Hr(this,["confirmButton","denyButton","cancelButton"],!1)}function Gu(){Hr(this,["confirmButton","denyButton","cancelButton"],!0)}function el(){return Re(this.getInput(),!1)}function Ku(){return Re(this.getInput(),!0)}function Yu(A){const C=Gt.domCache.get(this),I=Gt.innerParams.get(this);kt(C.validationMessage,A),C.validationMessage.className=O["validation-message"],I.customClass&&I.customClass.validationMessage&&bt(C.validationMessage,I.customClass.validationMessage),Wt(C.validationMessage);const R=this.getInput();R&&(R.setAttribute("aria-invalid",!0),R.setAttribute("aria-describedby",O["validation-message"]),Et(R),bt(R,O.inputerror))}function nr(){const A=Gt.domCache.get(this);A.validationMessage&&ce(A.validationMessage);const C=this.getInput();C&&(C.removeAttribute("aria-invalid"),C.removeAttribute("aria-describedby"),$t(C,O.inputerror))}function Ye(){return Gt.domCache.get(this).progressSteps}function nl(A){const C=yt(),I=Gt.innerParams.get(this);if(!C||gt(C,I.hideClass.popup))return b("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const R=Uo(A),dt=Object.assign({},I,R);Ks(this,dt),Gt.innerParams.set(this,dt),Object.defineProperties(this,{params:{value:Object.assign({},this.params,A),writable:!1,enumerable:!0}})}const Uo=A=>{const C={};return Object.keys(A).forEach(I=>{nt(I)?C[I]=A[I]:b('Invalid parameter to update: "'.concat(I,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),C};function ue(){const A=Gt.domCache.get(this),C=Gt.innerParams.get(this);if(!C){Pn(this);return}A.popup&&Ut.swalCloseEventFinishedCallback&&(Ut.swalCloseEventFinishedCallback(),delete Ut.swalCloseEventFinishedCallback),Ut.deferDisposalTimer&&(clearTimeout(Ut.deferDisposalTimer),delete Ut.deferDisposalTimer),typeof C.didDestroy=="function"&&C.didDestroy(),oo(this)}const oo=A=>{Pn(A),delete A.params,delete Ut.keydownHandler,delete Ut.keydownTarget,delete Ut.currentInstance},Pn=A=>{A.isAwaitingPromise()?(yn(Gt,A),Gt.awaitingPromise.set(A,!0)):(yn(bi,A),yn(Gt,A))},yn=(A,C)=>{for(const I in A)A[I].delete(C)};var ma=Object.freeze({hideLoading:ga,disableLoading:ga,getInput:Qc,close:ki,isAwaitingPromise:Jc,rejectPromise:Xc,closePopup:ki,closeModal:ki,closeToast:ki,enableButtons:Wu,disableButtons:Gu,enableInput:el,disableInput:Ku,showValidationMessage:Yu,resetValidationMessage:nr,getProgressSteps:Ye,update:nl,_destroy:ue});let or;class io{constructor(){if(typeof window=="undefined")return;or=this;for(var C=arguments.length,I=new Array(C),R=0;R<C;R++)I[R]=arguments[R];const dt=Object.freeze(this.constructor.argsToParams(I));Object.defineProperties(this,{params:{value:dt,writable:!1,enumerable:!0,configurable:!0}});const Rt=this._main(this.params);Gt.promise.set(this,Rt)}_main(C){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};G(Object.assign({},I,C)),Ut.currentInstance&&(Ut.currentInstance._destroy(),Q()&&vc()),Ut.currentInstance=this;const R=Zu(C,I);xc(R),Object.freeze(R),Ut.timeout&&(Ut.timeout.stop(),delete Ut.timeout),clearTimeout(Ut.restoreFocusTimeout);const dt=Ju(this);return Ks(this,R),Gt.innerParams.set(this,R),Qu(this,dt,R)}then(C){return Gt.promise.get(this).then(C)}finally(C){return Gt.promise.get(this).finally(C)}}const Qu=(A,C,I)=>new Promise((R,dt)=>{const Rt=Ne=>{A.closePopup({isDismissed:!0,dismiss:Ne})};bi.swalPromiseResolve.set(A,R),bi.swalPromiseReject.set(A,dt),C.confirmButton.onclick=()=>Mu(A),C.denyButton.onclick=()=>Lc(A),C.cancelButton.onclick=()=>oa(A,Rt),C.closeButton.onclick=()=>Rt(Vo.close),Pu(A,C,Rt),Bu(A,Ut,I,Rt),pi(A,I),Eu(I),ba(Ut,I,Rt),Xu(C,I),setTimeout(()=>{C.container.scrollTop=0})}),Zu=(A,C)=>{const I=nn(A),R=Object.assign({},ct,C,I,A);return R.showClass=Object.assign({},ct.showClass,R.showClass),R.hideClass=Object.assign({},ct.hideClass,R.hideClass),R},Ju=A=>{const C={popup:yt(),container:pt(),actions:Z(),confirmButton:me(),denyButton:F(),cancelButton:tt(),loader:lt(),closeButton:Lt(),validationMessage:ae(),progressSteps:zt()};return Gt.domCache.set(A,C),C},ba=(A,C,I)=>{const R=vt();ce(R),C.timer&&(A.timeout=new Ji(()=>{I("timer"),delete A.timeout},C.timer),C.timerProgressBar&&(Wt(R),at(R,C,"timerProgressBar"),setTimeout(()=>{A.timeout&&A.timeout.running&&no(C.timer)})))},Xu=(A,C)=>{if(!C.toast){if(!S(C.allowEnterKey))return eh();th(A,C)||la(C,-1,1)}},th=(A,C)=>C.focusDeny&&Ve(A.denyButton)?(A.denyButton.focus(),!0):C.focusCancel&&Ve(A.cancelButton)?(A.cancelButton.focus(),!0):C.focusConfirm&&Ve(A.confirmButton)?(A.confirmButton.focus(),!0):!1,eh=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(io.prototype,ma),Object.assign(io,Hu),Object.keys(ma).forEach(A=>{io[A]=function(){if(or)return or[A](...arguments)}}),io.DismissReason=Vo,io.version="11.4.0";const Ur=io;return Ur.default=Ur,Ur}),typeof Ti!="undefined"&&Ti.Sweetalert2&&(Ti.swal=Ti.sweetAlert=Ti.Swal=Ti.SweetAlert=Ti.Sweetalert2)})(Gy);var Xl=Gy.exports;class mF{static install(c,d={}){var h;const g=Xl.mixin(d),m=function(...b){return g.fire.call(g,...b)};Object.assign(m,Xl),Object.keys(Xl).filter(b=>typeof Xl[b]=="function").forEach(b=>{m[b]=g[b].bind(g)}),((h=c.config)==null?void 0:h.globalProperties)&&!c.config.globalProperties.$swal?(c.config.globalProperties.$swal=m,c.provide("$swal",m)):Object.prototype.hasOwnProperty.call(c,"$swal")||(c.prototype.$swal=m,c.swal=m)}}const sC=By("App",{web:()=>Py(()=>import("./web.e4749a26.js"),[]).then(r=>new r.AppWeb)});sC.addListener("backButton",({canGoBack:r})=>{r?window.history.back():sC.exitApp()});const bF=$P(),Fs=F0(nF);Fs.component("select2",pF);Fs.use(mF);Fs.use(bF);Fs.use(dp.exports.CKEditor);Fs.use(en);Fs.mount("#app");export{wF as W};