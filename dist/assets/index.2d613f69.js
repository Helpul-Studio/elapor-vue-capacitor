const rI=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const b of f)if(b.type==="childList")for(const g of b.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function c(f){const b={};return f.integrity&&(b.integrity=f.integrity),f.referrerpolicy&&(b.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?b.credentials="include":f.crossorigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function u(f){if(f.ep)return;f.ep=!0;const b=c(f);fetch(f.href,b)}};rI();function Vd(r,a){const c=Object.create(null),u=r.split(",");for(let f=0;f<u.length;f++)c[u[f]]=!0;return a?f=>!!c[f.toLowerCase()]:f=>!!c[f]}const sI="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",aI=Vd(sI),lI="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cI=Vd(lI);function g0(r){return!!r||r===""}function Sl(r){if(Ve(r)){const a={};for(let c=0;c<r.length;c++){const u=r[c],f=Ht(u)?hI(u):Sl(u);if(f)for(const b in f)a[b]=f[b]}return a}else{if(Ht(r))return r;if(Kt(r))return r}}const dI=/;(?![^(]*\))/g,uI=/:(.+)/;function hI(r){const a={};return r.split(dI).forEach(c=>{if(c){const u=c.split(uI);u.length>1&&(a[u[0].trim()]=u[1].trim())}}),a}function it(r){let a="";if(Ht(r))a=r;else if(Ve(r))for(let c=0;c<r.length;c++){const u=it(r[c]);u&&(a+=u+" ")}else if(Kt(r))for(const c in r)r[c]&&(a+=c+" ");return a.trim()}function fI(r){if(!r)return null;let{class:a,style:c}=r;return a&&!Ht(a)&&(r.class=it(a)),c&&(r.style=Sl(c)),r}function pI(r,a){if(r.length!==a.length)return!1;let c=!0;for(let u=0;c&&u<r.length;u++)c=nr(r[u],a[u]);return c}function nr(r,a){if(r===a)return!0;let c=Jv(r),u=Jv(a);if(c||u)return c&&u?r.getTime()===a.getTime():!1;if(c=_l(r),u=_l(a),c||u)return r===a;if(c=Ve(r),u=Ve(a),c||u)return c&&u?pI(r,a):!1;if(c=Kt(r),u=Kt(a),c||u){if(!c||!u)return!1;const f=Object.keys(r).length,b=Object.keys(a).length;if(f!==b)return!1;for(const g in r){const _=r.hasOwnProperty(g),k=a.hasOwnProperty(g);if(_&&!k||!_&&k||!nr(r[g],a[g]))return!1}}return String(r)===String(a)}function $d(r,a){return r.findIndex(c=>nr(c,a))}const Le=r=>Ht(r)?r:r==null?"":Ve(r)||Kt(r)&&(r.toString===b0||!Xe(r.toString))?JSON.stringify(r,m0,2):String(r),m0=(r,a)=>a&&a.__v_isRef?m0(r,a.value):zs(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((c,[u,f])=>(c[`${u} =>`]=f,c),{})}:qr(a)?{[`Set(${a.size})`]:[...a.values()]}:Kt(a)&&!Ve(a)&&!k0(a)?String(a):a,bt={},Rs=[],Mo=()=>{},gI=()=>!1,mI=/^on[^a-z]/,Dl=r=>mI.test(r),Hp=r=>r.startsWith("onUpdate:"),Gt=Object.assign,Up=(r,a)=>{const c=r.indexOf(a);c>-1&&r.splice(c,1)},bI=Object.prototype.hasOwnProperty,ft=(r,a)=>bI.call(r,a),Ve=Array.isArray,zs=r=>Tl(r)==="[object Map]",qr=r=>Tl(r)==="[object Set]",Jv=r=>Tl(r)==="[object Date]",Xe=r=>typeof r=="function",Ht=r=>typeof r=="string",_l=r=>typeof r=="symbol",Kt=r=>r!==null&&typeof r=="object",qp=r=>Kt(r)&&Xe(r.then)&&Xe(r.catch),b0=Object.prototype.toString,Tl=r=>b0.call(r),kI=r=>Tl(r).slice(8,-1),k0=r=>Tl(r)==="[object Object]",Wp=r=>Ht(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,ll=Vd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hd=r=>{const a=Object.create(null);return c=>a[c]||(a[c]=r(c))},wI=/-(\w)/g,no=Hd(r=>r.replace(wI,(a,c)=>c?c.toUpperCase():"")),_I=/\B([A-Z])/g,Go=Hd(r=>r.replace(_I,"-$1").toLowerCase()),Il=Hd(r=>r.charAt(0).toUpperCase()+r.slice(1)),cl=Hd(r=>r?`on${Il(r)}`:""),$s=(r,a)=>!Object.is(r,a),js=(r,a)=>{for(let c=0;c<r.length;c++)r[c](a)},Ed=(r,a,c)=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!1,value:c})},or=r=>{const a=parseFloat(r);return isNaN(a)?r:a};let Xv;const vI=()=>Xv||(Xv=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Jn;class Gp{constructor(a=!1){this.active=!0,this.effects=[],this.cleanups=[],!a&&Jn&&(this.parent=Jn,this.index=(Jn.scopes||(Jn.scopes=[])).push(this)-1)}run(a){if(this.active){const c=Jn;try{return Jn=this,a()}finally{Jn=c}}}on(){Jn=this}off(){Jn=this.parent}stop(a){if(this.active){let c,u;for(c=0,u=this.effects.length;c<u;c++)this.effects[c].stop();for(c=0,u=this.cleanups.length;c<u;c++)this.cleanups[c]();if(this.scopes)for(c=0,u=this.scopes.length;c<u;c++)this.scopes[c].stop(!0);if(this.parent&&!a){const f=this.parent.scopes.pop();f&&f!==this&&(this.parent.scopes[this.index]=f,f.index=this.index)}this.active=!1}}}function Kp(r){return new Gp(r)}function w0(r,a=Jn){a&&a.active&&a.effects.push(r)}function AI(){return Jn}function CI(r){Jn&&Jn.cleanups.push(r)}const Yp=r=>{const a=new Set(r);return a.w=0,a.n=0,a},_0=r=>(r.w&ir)>0,v0=r=>(r.n&ir)>0,yI=({deps:r})=>{if(r.length)for(let a=0;a<r.length;a++)r[a].w|=ir},xI=r=>{const{deps:a}=r;if(a.length){let c=0;for(let u=0;u<a.length;u++){const f=a[u];_0(f)&&!v0(f)?f.delete(r):a[c++]=f,f.w&=~ir,f.n&=~ir}a.length=c}},hp=new WeakMap;let rl=0,ir=1;const fp=30;let Io;const jr=Symbol(""),pp=Symbol("");class Ml{constructor(a,c=null,u){this.fn=a,this.scheduler=c,this.active=!0,this.deps=[],this.parent=void 0,w0(this,u)}run(){if(!this.active)return this.fn();let a=Io,c=er;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=Io,Io=this,er=!0,ir=1<<++rl,rl<=fp?yI(this):eA(this),this.fn()}finally{rl<=fp&&xI(this),ir=1<<--rl,Io=this.parent,er=c,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Io===this?this.deferStop=!0:this.active&&(eA(this),this.onStop&&this.onStop(),this.active=!1)}}function eA(r){const{deps:a}=r;if(a.length){for(let c=0;c<a.length;c++)a[c].delete(r);a.length=0}}function EI(r,a){r.effect&&(r=r.effect.fn);const c=new Ml(r);a&&(Gt(c,a),a.scope&&w0(c,a.scope)),(!a||!a.lazy)&&c.run();const u=c.run.bind(c);return u.effect=c,u}function SI(r){r.effect.stop()}let er=!0;const A0=[];function Wr(){A0.push(er),er=!1}function Gr(){const r=A0.pop();er=r===void 0?!0:r}function oo(r,a,c){if(er&&Io){let u=hp.get(r);u||hp.set(r,u=new Map);let f=u.get(c);f||u.set(c,f=Yp()),C0(f)}}function C0(r,a){let c=!1;rl<=fp?v0(r)||(r.n|=ir,c=!_0(r)):c=!r.has(Io),c&&(r.add(Io),Io.deps.push(r))}function _i(r,a,c,u,f,b){const g=hp.get(r);if(!g)return;let _=[];if(a==="clear")_=[...g.values()];else if(c==="length"&&Ve(r))g.forEach((k,E)=>{(E==="length"||E>=u)&&_.push(k)});else switch(c!==void 0&&_.push(g.get(c)),a){case"add":Ve(r)?Wp(c)&&_.push(g.get("length")):(_.push(g.get(jr)),zs(r)&&_.push(g.get(pp)));break;case"delete":Ve(r)||(_.push(g.get(jr)),zs(r)&&_.push(g.get(pp)));break;case"set":zs(r)&&_.push(g.get(jr));break}if(_.length===1)_[0]&&gp(_[0]);else{const k=[];for(const E of _)E&&k.push(...E);gp(Yp(k))}}function gp(r,a){const c=Ve(r)?r:[...r];for(const u of c)u.computed&&tA(u);for(const u of c)u.computed||tA(u)}function tA(r,a){(r!==Io||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const DI=Vd("__proto__,__v_isRef,__isVue"),y0=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(_l)),TI=Ud(),II=Ud(!1,!0),MI=Ud(!0),PI=Ud(!0,!0),nA=BI();function BI(){const r={};return["includes","indexOf","lastIndexOf"].forEach(a=>{r[a]=function(...c){const u=ct(this);for(let b=0,g=this.length;b<g;b++)oo(u,"get",b+"");const f=u[a](...c);return f===-1||f===!1?u[a](...c.map(ct)):f}}),["push","pop","shift","unshift","splice"].forEach(a=>{r[a]=function(...c){Wr();const u=ct(this)[a].apply(this,c);return Gr(),u}}),r}function Ud(r=!1,a=!1){return function(u,f,b){if(f==="__v_isReactive")return!r;if(f==="__v_isReadonly")return r;if(f==="__v_isShallow")return a;if(f==="__v_raw"&&b===(r?a?M0:I0:a?T0:D0).get(u))return u;const g=Ve(u);if(!r&&g&&ft(nA,f))return Reflect.get(nA,f,b);const _=Reflect.get(u,f,b);return(_l(f)?y0.has(f):DI(f))||(r||oo(u,"get",f),a)?_:jt(_)?g&&Wp(f)?_:_.value:Kt(_)?r?Zp(_):Dn(_):_}}const NI=x0(),LI=x0(!0);function x0(r=!1){return function(c,u,f,b){let g=c[u];if(Hs(g)&&jt(g)&&!jt(f))return!1;if(!r&&!Hs(f)&&(Sd(f)||(f=ct(f),g=ct(g)),!Ve(c)&&jt(g)&&!jt(f)))return g.value=f,!0;const _=Ve(c)&&Wp(u)?Number(u)<c.length:ft(c,u),k=Reflect.set(c,u,f,b);return c===ct(b)&&(_?$s(f,g)&&_i(c,"set",u,f):_i(c,"add",u,f)),k}}function OI(r,a){const c=ft(r,a);r[a];const u=Reflect.deleteProperty(r,a);return u&&c&&_i(r,"delete",a,void 0),u}function RI(r,a){const c=Reflect.has(r,a);return(!_l(a)||!y0.has(a))&&oo(r,"has",a),c}function zI(r){return oo(r,"iterate",Ve(r)?"length":jr),Reflect.ownKeys(r)}const E0={get:TI,set:NI,deleteProperty:OI,has:RI,ownKeys:zI},S0={get:MI,set(r,a){return!0},deleteProperty(r,a){return!0}},jI=Gt({},E0,{get:II,set:LI}),FI=Gt({},S0,{get:PI}),Qp=r=>r,qd=r=>Reflect.getPrototypeOf(r);function nd(r,a,c=!1,u=!1){r=r.__v_raw;const f=ct(r),b=ct(a);c||(a!==b&&oo(f,"get",a),oo(f,"get",b));const{has:g}=qd(f),_=u?Qp:c?Xp:vl;if(g.call(f,a))return _(r.get(a));if(g.call(f,b))return _(r.get(b));r!==f&&r.get(a)}function od(r,a=!1){const c=this.__v_raw,u=ct(c),f=ct(r);return a||(r!==f&&oo(u,"has",r),oo(u,"has",f)),r===f?c.has(r):c.has(r)||c.has(f)}function id(r,a=!1){return r=r.__v_raw,!a&&oo(ct(r),"iterate",jr),Reflect.get(r,"size",r)}function oA(r){r=ct(r);const a=ct(this);return qd(a).has.call(a,r)||(a.add(r),_i(a,"add",r,r)),this}function iA(r,a){a=ct(a);const c=ct(this),{has:u,get:f}=qd(c);let b=u.call(c,r);b||(r=ct(r),b=u.call(c,r));const g=f.call(c,r);return c.set(r,a),b?$s(a,g)&&_i(c,"set",r,a):_i(c,"add",r,a),this}function rA(r){const a=ct(this),{has:c,get:u}=qd(a);let f=c.call(a,r);f||(r=ct(r),f=c.call(a,r)),u&&u.call(a,r);const b=a.delete(r);return f&&_i(a,"delete",r,void 0),b}function sA(){const r=ct(this),a=r.size!==0,c=r.clear();return a&&_i(r,"clear",void 0,void 0),c}function rd(r,a){return function(u,f){const b=this,g=b.__v_raw,_=ct(g),k=a?Qp:r?Xp:vl;return!r&&oo(_,"iterate",jr),g.forEach((E,x)=>u.call(f,k(E),k(x),b))}}function sd(r,a,c){return function(...u){const f=this.__v_raw,b=ct(f),g=zs(b),_=r==="entries"||r===Symbol.iterator&&g,k=r==="keys"&&g,E=f[r](...u),x=c?Qp:a?Xp:vl;return!a&&oo(b,"iterate",k?pp:jr),{next(){const{value:D,done:v}=E.next();return v?{value:D,done:v}:{value:_?[x(D[0]),x(D[1])]:x(D),done:v}},[Symbol.iterator](){return this}}}}function Vi(r){return function(...a){return r==="delete"?!1:this}}function VI(){const r={get(b){return nd(this,b)},get size(){return id(this)},has:od,add:oA,set:iA,delete:rA,clear:sA,forEach:rd(!1,!1)},a={get(b){return nd(this,b,!1,!0)},get size(){return id(this)},has:od,add:oA,set:iA,delete:rA,clear:sA,forEach:rd(!1,!0)},c={get(b){return nd(this,b,!0)},get size(){return id(this,!0)},has(b){return od.call(this,b,!0)},add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear"),forEach:rd(!0,!1)},u={get(b){return nd(this,b,!0,!0)},get size(){return id(this,!0)},has(b){return od.call(this,b,!0)},add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear"),forEach:rd(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(b=>{r[b]=sd(b,!1,!1),c[b]=sd(b,!0,!1),a[b]=sd(b,!1,!0),u[b]=sd(b,!0,!0)}),[r,c,a,u]}const[$I,HI,UI,qI]=VI();function Wd(r,a){const c=a?r?qI:UI:r?HI:$I;return(u,f,b)=>f==="__v_isReactive"?!r:f==="__v_isReadonly"?r:f==="__v_raw"?u:Reflect.get(ft(c,f)&&f in u?c:u,f,b)}const WI={get:Wd(!1,!1)},GI={get:Wd(!1,!0)},KI={get:Wd(!0,!1)},YI={get:Wd(!0,!0)},D0=new WeakMap,T0=new WeakMap,I0=new WeakMap,M0=new WeakMap;function QI(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ZI(r){return r.__v_skip||!Object.isExtensible(r)?0:QI(kI(r))}function Dn(r){return Hs(r)?r:Gd(r,!1,E0,WI,D0)}function P0(r){return Gd(r,!1,jI,GI,T0)}function Zp(r){return Gd(r,!0,S0,KI,I0)}function JI(r){return Gd(r,!0,FI,YI,M0)}function Gd(r,a,c,u,f){if(!Kt(r)||r.__v_raw&&!(a&&r.__v_isReactive))return r;const b=f.get(r);if(b)return b;const g=ZI(r);if(g===0)return r;const _=new Proxy(r,g===2?u:c);return f.set(r,_),_}function Ko(r){return Hs(r)?Ko(r.__v_raw):!!(r&&r.__v_isReactive)}function Hs(r){return!!(r&&r.__v_isReadonly)}function Sd(r){return!!(r&&r.__v_isShallow)}function Jp(r){return Ko(r)||Hs(r)}function ct(r){const a=r&&r.__v_raw;return a?ct(a):r}function mo(r){return Ed(r,"__v_skip",!0),r}const vl=r=>Kt(r)?Dn(r):r,Xp=r=>Kt(r)?Zp(r):r;function eg(r){er&&Io&&(r=ct(r),C0(r.dep||(r.dep=Yp())))}function Kd(r,a){r=ct(r),r.dep&&gp(r.dep)}function jt(r){return!!(r&&r.__v_isRef===!0)}function mt(r){return N0(r,!1)}function B0(r){return N0(r,!0)}function N0(r,a){return jt(r)?r:new XI(r,a)}class XI{constructor(a,c){this.__v_isShallow=c,this.dep=void 0,this.__v_isRef=!0,this._rawValue=c?a:ct(a),this._value=c?a:vl(a)}get value(){return eg(this),this._value}set value(a){a=this.__v_isShallow?a:ct(a),$s(a,this._rawValue)&&(this._rawValue=a,this._value=this.__v_isShallow?a:vl(a),Kd(this))}}function e5(r){Kd(r)}function Y(r){return jt(r)?r.value:r}const t5={get:(r,a,c)=>Y(Reflect.get(r,a,c)),set:(r,a,c,u)=>{const f=r[a];return jt(f)&&!jt(c)?(f.value=c,!0):Reflect.set(r,a,c,u)}};function tg(r){return Ko(r)?r:new Proxy(r,t5)}class n5{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:c,set:u}=a(()=>eg(this),()=>Kd(this));this._get=c,this._set=u}get value(){return this._get()}set value(a){this._set(a)}}function o5(r){return new n5(r)}function Bn(r){const a=Ve(r)?new Array(r.length):{};for(const c in r)a[c]=dl(r,c);return a}class i5{constructor(a,c,u){this._object=a,this._key=c,this._defaultValue=u,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}}function dl(r,a,c){const u=r[a];return jt(u)?u:new i5(r,a,c)}class r5{constructor(a,c,u,f){this._setter=c,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ml(a,()=>{this._dirty||(this._dirty=!0,Kd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!f,this.__v_isReadonly=u}get value(){const a=ct(this);return eg(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function L0(r,a,c=!1){let u,f;const b=Xe(r);return b?(u=r,f=Mo):(u=r.get,f=r.set),new r5(u,f,b||!f,c)}const ul=[];function O0(r,...a){Wr();const c=ul.length?ul[ul.length-1].component:null,u=c&&c.appContext.config.warnHandler,f=s5();if(u)Yo(u,c,11,[r+a.join(""),c&&c.proxy,f.map(({vnode:b})=>`at <${EC(c,b.type)}>`).join(`
`),f]);else{const b=[`[Vue warn]: ${r}`,...a];f.length&&b.push(`
`,...a5(f)),console.warn(...b)}Gr()}function s5(){let r=ul[ul.length-1];if(!r)return[];const a=[];for(;r;){const c=a[0];c&&c.vnode===r?c.recurseCount++:a.push({vnode:r,recurseCount:0});const u=r.component&&r.component.parent;r=u&&u.vnode}return a}function a5(r){const a=[];return r.forEach((c,u)=>{a.push(...u===0?[]:[`
`],...l5(c))}),a}function l5({vnode:r,recurseCount:a}){const c=a>0?`... (${a} recursive calls)`:"",u=r.component?r.component.parent==null:!1,f=` at <${EC(r.component,r.type,u)}`,b=">"+c;return r.props?[f,...c5(r.props),b]:[f+b]}function c5(r){const a=[],c=Object.keys(r);return c.slice(0,3).forEach(u=>{a.push(...R0(u,r[u]))}),c.length>3&&a.push(" ..."),a}function R0(r,a,c){return Ht(a)?(a=JSON.stringify(a),c?a:[`${r}=${a}`]):typeof a=="number"||typeof a=="boolean"||a==null?c?a:[`${r}=${a}`]:jt(a)?(a=R0(r,ct(a.value),!0),c?a:[`${r}=Ref<`,a,">"]):Xe(a)?[`${r}=fn${a.name?`<${a.name}>`:""}`]:(a=ct(a),c?a:[`${r}=`,a])}function Yo(r,a,c,u){let f;try{f=u?r(...u):r()}catch(b){Kr(b,a,c)}return f}function to(r,a,c,u){if(Xe(r)){const b=Yo(r,a,c,u);return b&&qp(b)&&b.catch(g=>{Kr(g,a,c)}),b}const f=[];for(let b=0;b<r.length;b++)f.push(to(r[b],a,c,u));return f}function Kr(r,a,c,u=!0){const f=a?a.vnode:null;if(a){let b=a.parent;const g=a.proxy,_=c;for(;b;){const E=b.ec;if(E){for(let x=0;x<E.length;x++)if(E[x](r,g,_)===!1)return}b=b.parent}const k=a.appContext.config.errorHandler;if(k){Yo(k,null,10,[r,g,_]);return}}d5(r,c,f,u)}function d5(r,a,c,u=!0){console.error(r)}let Dd=!1,mp=!1;const eo=[];let bi=0;const hl=[];let sl=null,Ps=0;const fl=[];let Gi=null,Bs=0;const z0=Promise.resolve();let ng=null,bp=null;function Hn(r){const a=ng||z0;return r?a.then(this?r.bind(this):r):a}function u5(r){let a=bi+1,c=eo.length;for(;a<c;){const u=a+c>>>1;Al(eo[u])<r?a=u+1:c=u}return a}function og(r){(!eo.length||!eo.includes(r,Dd&&r.allowRecurse?bi+1:bi))&&r!==bp&&(r.id==null?eo.push(r):eo.splice(u5(r.id),0,r),j0())}function j0(){!Dd&&!mp&&(mp=!0,ng=z0.then(V0))}function h5(r){const a=eo.indexOf(r);a>bi&&eo.splice(a,1)}function F0(r,a,c,u){Ve(r)?c.push(...r):(!a||!a.includes(r,r.allowRecurse?u+1:u))&&c.push(r),j0()}function f5(r){F0(r,sl,hl,Ps)}function ig(r){F0(r,Gi,fl,Bs)}function Yd(r,a=null){if(hl.length){for(bp=a,sl=[...new Set(hl)],hl.length=0,Ps=0;Ps<sl.length;Ps++)sl[Ps]();sl=null,Ps=0,bp=null,Yd(r,a)}}function Td(r){if(Yd(),fl.length){const a=[...new Set(fl)];if(fl.length=0,Gi){Gi.push(...a);return}for(Gi=a,Gi.sort((c,u)=>Al(c)-Al(u)),Bs=0;Bs<Gi.length;Bs++)Gi[Bs]();Gi=null,Bs=0}}const Al=r=>r.id==null?1/0:r.id;function V0(r){mp=!1,Dd=!0,Yd(r),eo.sort((c,u)=>Al(c)-Al(u));const a=Mo;try{for(bi=0;bi<eo.length;bi++){const c=eo[bi];c&&c.active!==!1&&Yo(c,null,14)}}finally{bi=0,eo.length=0,Td(),Dd=!1,ng=null,(eo.length||hl.length||fl.length)&&V0(r)}}let Ns,ad=[];function $0(r,a){var c,u;Ns=r,Ns?(Ns.enabled=!0,ad.forEach(({event:f,args:b})=>Ns.emit(f,...b)),ad=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((u=(c=window.navigator)===null||c===void 0?void 0:c.userAgent)===null||u===void 0)&&u.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(b=>{$0(b,a)}),setTimeout(()=>{Ns||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ad=[])},3e3)):ad=[]}function p5(r,a,...c){if(r.isUnmounted)return;const u=r.vnode.props||bt;let f=c;const b=a.startsWith("update:"),g=b&&a.slice(7);if(g&&g in u){const x=`${g==="modelValue"?"model":g}Modifiers`,{number:D,trim:v}=u[x]||bt;v&&(f=c.map(I=>I.trim())),D&&(f=c.map(or))}let _,k=u[_=cl(a)]||u[_=cl(no(a))];!k&&b&&(k=u[_=cl(Go(a))]),k&&to(k,r,6,f);const E=u[_+"Once"];if(E){if(!r.emitted)r.emitted={};else if(r.emitted[_])return;r.emitted[_]=!0,to(E,r,6,f)}}function H0(r,a,c=!1){const u=a.emitsCache,f=u.get(r);if(f!==void 0)return f;const b=r.emits;let g={},_=!1;if(!Xe(r)){const k=E=>{const x=H0(E,a,!0);x&&(_=!0,Gt(g,x))};!c&&a.mixins.length&&a.mixins.forEach(k),r.extends&&k(r.extends),r.mixins&&r.mixins.forEach(k)}return!b&&!_?(u.set(r,null),null):(Ve(b)?b.forEach(k=>g[k]=null):Gt(g,b),u.set(r,g),g)}function Qd(r,a){return!r||!Dl(a)?!1:(a=a.slice(2).replace(/Once$/,""),ft(r,a[0].toLowerCase()+a.slice(1))||ft(r,Go(a))||ft(r,a))}let En=null,Zd=null;function Cl(r){const a=En;return En=r,Zd=r&&r.type.__scopeId||null,a}function g5(r){Zd=r}function m5(){Zd=null}const b5=r=>yn;function yn(r,a=En,c){if(!a||r._n)return r;const u=(...f)=>{u._d&&yp(-1);const b=Cl(a),g=r(...f);return Cl(b),u._d&&yp(1),g};return u._n=!0,u._c=!0,u._d=!0,u}function wd(r){const{type:a,vnode:c,proxy:u,withProxy:f,props:b,propsOptions:[g],slots:_,attrs:k,emit:E,render:x,renderCache:D,data:v,setupState:I,ctx:$,inheritAttrs:le}=r;let G,H;const N=Cl(r);try{if(c.shapeFlag&4){const te=f||u;G=Xn(x.call(te,te,D,b,I,v,$)),H=k}else{const te=a;G=Xn(te.length>1?te(b,{attrs:k,slots:_,emit:E}):te(b,null)),H=a.props?k:w5(k)}}catch(te){ml.length=0,Kr(te,r,1),G=Ce(Sn)}let W=G;if(H&&le!==!1){const te=Object.keys(H),{shapeFlag:ie}=W;te.length&&ie&7&&(g&&te.some(Hp)&&(H=_5(H,g)),W=Zo(W,H))}return c.dirs&&(W=Zo(W),W.dirs=W.dirs?W.dirs.concat(c.dirs):c.dirs),c.transition&&(W.transition=c.transition),G=W,Cl(N),G}function k5(r){let a;for(let c=0;c<r.length;c++){const u=r[c];if(rr(u)){if(u.type!==Sn||u.children==="v-if"){if(a)return;a=u}}else return}return a}const w5=r=>{let a;for(const c in r)(c==="class"||c==="style"||Dl(c))&&((a||(a={}))[c]=r[c]);return a},_5=(r,a)=>{const c={};for(const u in r)(!Hp(u)||!(u.slice(9)in a))&&(c[u]=r[u]);return c};function v5(r,a,c){const{props:u,children:f,component:b}=r,{props:g,children:_,patchFlag:k}=a,E=b.emitsOptions;if(a.dirs||a.transition)return!0;if(c&&k>=0){if(k&1024)return!0;if(k&16)return u?aA(u,g,E):!!g;if(k&8){const x=a.dynamicProps;for(let D=0;D<x.length;D++){const v=x[D];if(g[v]!==u[v]&&!Qd(E,v))return!0}}}else return(f||_)&&(!_||!_.$stable)?!0:u===g?!1:u?g?aA(u,g,E):!0:!!g;return!1}function aA(r,a,c){const u=Object.keys(a);if(u.length!==Object.keys(r).length)return!0;for(let f=0;f<u.length;f++){const b=u[f];if(a[b]!==r[b]&&!Qd(c,b))return!0}return!1}function rg({vnode:r,parent:a},c){for(;a&&a.subTree===r;)(r=a.vnode).el=c,a=a.parent}const U0=r=>r.__isSuspense,A5={name:"Suspense",__isSuspense:!0,process(r,a,c,u,f,b,g,_,k,E){r==null?y5(a,c,u,f,b,g,_,k,E):x5(r,a,c,u,f,g,_,k,E)},hydrate:E5,create:sg,normalize:S5},C5=A5;function yl(r,a){const c=r.props&&r.props[a];Xe(c)&&c()}function y5(r,a,c,u,f,b,g,_,k){const{p:E,o:{createElement:x}}=k,D=x("div"),v=r.suspense=sg(r,f,u,a,D,c,b,g,_,k);E(null,v.pendingBranch=r.ssContent,D,null,u,v,b,g),v.deps>0?(yl(r,"onPending"),yl(r,"onFallback"),E(null,r.ssFallback,a,c,u,null,b,g),Fs(v,r.ssFallback)):v.resolve()}function x5(r,a,c,u,f,b,g,_,{p:k,um:E,o:{createElement:x}}){const D=a.suspense=r.suspense;D.vnode=a,a.el=r.el;const v=a.ssContent,I=a.ssFallback,{activeBranch:$,pendingBranch:le,isInFallback:G,isHydrating:H}=D;if(le)D.pendingBranch=v,Wo(v,le)?(k(le,v,D.hiddenContainer,null,f,D,b,g,_),D.deps<=0?D.resolve():G&&(k($,I,c,u,f,null,b,g,_),Fs(D,I))):(D.pendingId++,H?(D.isHydrating=!1,D.activeBranch=le):E(le,f,D),D.deps=0,D.effects.length=0,D.hiddenContainer=x("div"),G?(k(null,v,D.hiddenContainer,null,f,D,b,g,_),D.deps<=0?D.resolve():(k($,I,c,u,f,null,b,g,_),Fs(D,I))):$&&Wo(v,$)?(k($,v,c,u,f,D,b,g,_),D.resolve(!0)):(k(null,v,D.hiddenContainer,null,f,D,b,g,_),D.deps<=0&&D.resolve()));else if($&&Wo(v,$))k($,v,c,u,f,D,b,g,_),Fs(D,v);else if(yl(a,"onPending"),D.pendingBranch=v,D.pendingId++,k(null,v,D.hiddenContainer,null,f,D,b,g,_),D.deps<=0)D.resolve();else{const{timeout:N,pendingId:W}=D;N>0?setTimeout(()=>{D.pendingId===W&&D.fallback(I)},N):N===0&&D.fallback(I)}}function sg(r,a,c,u,f,b,g,_,k,E,x=!1){const{p:D,m:v,um:I,n:$,o:{parentNode:le,remove:G}}=E,H=or(r.props&&r.props.timeout),N={vnode:r,parent:a,parentComponent:c,isSVG:g,container:u,hiddenContainer:f,anchor:b,deps:0,pendingId:0,timeout:typeof H=="number"?H:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:x,isUnmounted:!1,effects:[],resolve(W=!1){const{vnode:te,activeBranch:ie,pendingBranch:ee,pendingId:V,effects:q,parentComponent:Z,container:K}=N;if(N.isHydrating)N.isHydrating=!1;else if(!W){const xe=ie&&ee.transition&&ee.transition.mode==="out-in";xe&&(ie.transition.afterLeave=()=>{V===N.pendingId&&v(ee,K,me,0)});let{anchor:me}=N;ie&&(me=$(ie),I(ie,Z,N,!0)),xe||v(ee,K,me,0)}Fs(N,ee),N.pendingBranch=null,N.isInFallback=!1;let oe=N.parent,R=!1;for(;oe;){if(oe.pendingBranch){oe.effects.push(...q),R=!0;break}oe=oe.parent}R||ig(q),N.effects=[],yl(te,"onResolve")},fallback(W){if(!N.pendingBranch)return;const{vnode:te,activeBranch:ie,parentComponent:ee,container:V,isSVG:q}=N;yl(te,"onFallback");const Z=$(ie),K=()=>{!N.isInFallback||(D(null,W,V,Z,ee,null,q,_,k),Fs(N,W))},oe=W.transition&&W.transition.mode==="out-in";oe&&(ie.transition.afterLeave=K),N.isInFallback=!0,I(ie,ee,null,!0),oe||K()},move(W,te,ie){N.activeBranch&&v(N.activeBranch,W,te,ie),N.container=W},next(){return N.activeBranch&&$(N.activeBranch)},registerDep(W,te){const ie=!!N.pendingBranch;ie&&N.deps++;const ee=W.vnode.el;W.asyncDep.catch(V=>{Kr(V,W,0)}).then(V=>{if(W.isUnmounted||N.isUnmounted||N.pendingId!==W.suspenseId)return;W.asyncResolved=!0;const{vnode:q}=W;xp(W,V,!1),ee&&(q.el=ee);const Z=!ee&&W.subTree.el;te(W,q,le(ee||W.subTree.el),ee?null:$(W.subTree),N,g,k),Z&&G(Z),rg(W,q.el),ie&&--N.deps===0&&N.resolve()})},unmount(W,te){N.isUnmounted=!0,N.activeBranch&&I(N.activeBranch,c,W,te),N.pendingBranch&&I(N.pendingBranch,c,W,te)}};return N}function E5(r,a,c,u,f,b,g,_,k){const E=a.suspense=sg(a,u,c,r.parentNode,document.createElement("div"),null,f,b,g,_,!0),x=k(r,E.pendingBranch=a.ssContent,c,E,b,g);return E.deps===0&&E.resolve(),x}function S5(r){const{shapeFlag:a,children:c}=r,u=a&32;r.ssContent=lA(u?c.default:c),r.ssFallback=u?lA(c.fallback):Ce(Sn)}function lA(r){let a;if(Xe(r)){const c=Hr&&r._c;c&&(r._d=!1,pe()),r=r(),c&&(r._d=!0,a=$n,bC())}return Ve(r)&&(r=k5(r)),r=Xn(r),a&&!r.dynamicChildren&&(r.dynamicChildren=a.filter(c=>c!==r)),r}function q0(r,a){a&&a.pendingBranch?Ve(r)?a.effects.push(...r):a.effects.push(r):ig(r)}function Fs(r,a){r.activeBranch=a;const{vnode:c,parentComponent:u}=r,f=c.el=a.el;u&&u.subTree===c&&(u.vnode.el=f,rg(u,f))}function pl(r,a){if(sn){let c=sn.provides;const u=sn.parent&&sn.parent.provides;u===c&&(c=sn.provides=Object.create(u)),c[r]=a}}function Po(r,a,c=!1){const u=sn||En;if(u){const f=u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides;if(f&&r in f)return f[r];if(arguments.length>1)return c&&Xe(a)?a.call(u.proxy):a}}function D5(r,a){return Pl(r,null,a)}function W0(r,a){return Pl(r,null,{flush:"post"})}function T5(r,a){return Pl(r,null,{flush:"sync"})}const cA={};function rn(r,a,c){return Pl(r,a,c)}function Pl(r,a,{immediate:c,deep:u,flush:f,onTrack:b,onTrigger:g}=bt){const _=sn;let k,E=!1,x=!1;if(jt(r)?(k=()=>r.value,E=Sd(r)):Ko(r)?(k=()=>r,u=!0):Ve(r)?(x=!0,E=r.some(H=>Ko(H)||Sd(H)),k=()=>r.map(H=>{if(jt(H))return H.value;if(Ko(H))return zr(H);if(Xe(H))return Yo(H,_,2)})):Xe(r)?a?k=()=>Yo(r,_,2):k=()=>{if(!(_&&_.isUnmounted))return D&&D(),to(r,_,3,[v])}:k=Mo,a&&u){const H=k;k=()=>zr(H())}let D,v=H=>{D=G.onStop=()=>{Yo(H,_,4)}};if(Ws)return v=Mo,a?c&&to(a,_,3,[k(),x?[]:void 0,v]):k(),Mo;let I=x?[]:cA;const $=()=>{if(!!G.active)if(a){const H=G.run();(u||E||(x?H.some((N,W)=>$s(N,I[W])):$s(H,I)))&&(D&&D(),to(a,_,3,[H,I===cA?void 0:I,v]),I=H)}else G.run()};$.allowRecurse=!!a;let le;f==="sync"?le=$:f==="post"?le=()=>wn($,_&&_.suspense):le=()=>f5($);const G=new Ml(k,le);return a?c?$():I=G.run():f==="post"?wn(G.run.bind(G),_&&_.suspense):G.run(),()=>{G.stop(),_&&_.scope&&Up(_.scope.effects,G)}}function I5(r,a,c){const u=this.proxy,f=Ht(r)?r.includes(".")?G0(u,r):()=>u[r]:r.bind(u,u);let b;Xe(a)?b=a:(b=a.handler,c=a);const g=sn;sr(this);const _=Pl(f,b.bind(u),c);return g?sr(g):tr(),_}function G0(r,a){const c=a.split(".");return()=>{let u=r;for(let f=0;f<c.length&&u;f++)u=u[c[f]];return u}}function zr(r,a){if(!Kt(r)||r.__v_skip||(a=a||new Set,a.has(r)))return r;if(a.add(r),jt(r))zr(r.value,a);else if(Ve(r))for(let c=0;c<r.length;c++)zr(r[c],a);else if(qr(r)||zs(r))r.forEach(c=>{zr(c,a)});else if(k0(r))for(const c in r)zr(r[c],a);return r}function ag(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yt(()=>{r.isMounted=!0}),tu(()=>{r.isUnmounting=!0}),r}const go=[Function,Array],M5={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:go,onEnter:go,onAfterEnter:go,onEnterCancelled:go,onBeforeLeave:go,onLeave:go,onAfterLeave:go,onLeaveCancelled:go,onBeforeAppear:go,onAppear:go,onAfterAppear:go,onAppearCancelled:go},setup(r,{slots:a}){const c=Nn(),u=ag();let f;return()=>{const b=a.default&&Jd(a.default(),!0);if(!b||!b.length)return;let g=b[0];if(b.length>1){for(const le of b)if(le.type!==Sn){g=le;break}}const _=ct(r),{mode:k}=_;if(u.isLeaving)return Yf(g);const E=dA(g);if(!E)return Yf(g);const x=Us(E,_,u,c);$r(E,x);const D=c.subTree,v=D&&dA(D);let I=!1;const{getTransitionKey:$}=E.type;if($){const le=$();f===void 0?f=le:le!==f&&(f=le,I=!0)}if(v&&v.type!==Sn&&(!Wo(E,v)||I)){const le=Us(v,_,u,c);if($r(v,le),k==="out-in")return u.isLeaving=!0,le.afterLeave=()=>{u.isLeaving=!1,c.update()},Yf(g);k==="in-out"&&E.type!==Sn&&(le.delayLeave=(G,H,N)=>{const W=K0(u,v);W[String(v.key)]=v,G._leaveCb=()=>{H(),G._leaveCb=void 0,delete x.delayedLeave},x.delayedLeave=N})}return g}}},lg=M5;function K0(r,a){const{leavingVNodes:c}=r;let u=c.get(a.type);return u||(u=Object.create(null),c.set(a.type,u)),u}function Us(r,a,c,u){const{appear:f,mode:b,persisted:g=!1,onBeforeEnter:_,onEnter:k,onAfterEnter:E,onEnterCancelled:x,onBeforeLeave:D,onLeave:v,onAfterLeave:I,onLeaveCancelled:$,onBeforeAppear:le,onAppear:G,onAfterAppear:H,onAppearCancelled:N}=a,W=String(r.key),te=K0(c,r),ie=(q,Z)=>{q&&to(q,u,9,Z)},ee=(q,Z)=>{const K=Z[1];ie(q,Z),Ve(q)?q.every(oe=>oe.length<=1)&&K():q.length<=1&&K()},V={mode:b,persisted:g,beforeEnter(q){let Z=_;if(!c.isMounted)if(f)Z=le||_;else return;q._leaveCb&&q._leaveCb(!0);const K=te[W];K&&Wo(r,K)&&K.el._leaveCb&&K.el._leaveCb(),ie(Z,[q])},enter(q){let Z=k,K=E,oe=x;if(!c.isMounted)if(f)Z=G||k,K=H||E,oe=N||x;else return;let R=!1;const xe=q._enterCb=me=>{R||(R=!0,me?ie(oe,[q]):ie(K,[q]),V.delayedLeave&&V.delayedLeave(),q._enterCb=void 0)};Z?ee(Z,[q,xe]):xe()},leave(q,Z){const K=String(r.key);if(q._enterCb&&q._enterCb(!0),c.isUnmounting)return Z();ie(D,[q]);let oe=!1;const R=q._leaveCb=xe=>{oe||(oe=!0,Z(),xe?ie($,[q]):ie(I,[q]),q._leaveCb=void 0,te[K]===r&&delete te[K])};te[K]=r,v?ee(v,[q,R]):R()},clone(q){return Us(q,a,c,u)}};return V}function Yf(r){if(Bl(r))return r=Zo(r),r.children=null,r}function dA(r){return Bl(r)?r.children?r.children[0]:void 0:r}function $r(r,a){r.shapeFlag&6&&r.component?$r(r.component.subTree,a):r.shapeFlag&128?(r.ssContent.transition=a.clone(r.ssContent),r.ssFallback.transition=a.clone(r.ssFallback)):r.transition=a}function Jd(r,a=!1,c){let u=[],f=0;for(let b=0;b<r.length;b++){let g=r[b];const _=c==null?g.key:String(c)+String(g.key!=null?g.key:b);g.type===Je?(g.patchFlag&128&&f++,u=u.concat(Jd(g.children,a,_))):(a||g.type!==Sn)&&u.push(_!=null?Zo(g,{key:_}):g)}if(f>1)for(let b=0;b<u.length;b++)u[b].patchFlag=-2;return u}function Yr(r){return Xe(r)?{setup:r,name:r.name}:r}const Fr=r=>!!r.type.__asyncLoader;function P5(r){Xe(r)&&(r={loader:r});const{loader:a,loadingComponent:c,errorComponent:u,delay:f=200,timeout:b,suspensible:g=!0,onError:_}=r;let k=null,E,x=0;const D=()=>(x++,k=null,v()),v=()=>{let I;return k||(I=k=a().catch($=>{if($=$ instanceof Error?$:new Error(String($)),_)return new Promise((le,G)=>{_($,()=>le(D()),()=>G($),x+1)});throw $}).then($=>I!==k&&k?k:($&&($.__esModule||$[Symbol.toStringTag]==="Module")&&($=$.default),E=$,$)))};return Yr({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return E},setup(){const I=sn;if(E)return()=>Qf(E,I);const $=N=>{k=null,Kr(N,I,13,!u)};if(g&&I.suspense||Ws)return v().then(N=>()=>Qf(N,I)).catch(N=>($(N),()=>u?Ce(u,{error:N}):null));const le=mt(!1),G=mt(),H=mt(!!f);return f&&setTimeout(()=>{H.value=!1},f),b!=null&&setTimeout(()=>{if(!le.value&&!G.value){const N=new Error(`Async component timed out after ${b}ms.`);$(N),G.value=N}},b),v().then(()=>{le.value=!0,I.parent&&Bl(I.parent.vnode)&&og(I.parent.update)}).catch(N=>{$(N),G.value=N}),()=>{if(le.value&&E)return Qf(E,I);if(G.value&&u)return Ce(u,{error:G.value});if(c&&!H.value)return Ce(c)}}})}function Qf(r,{vnode:{ref:a,props:c,children:u,shapeFlag:f},parent:b}){const g=Ce(r,c,u);return g.ref=a,g}const Bl=r=>r.type.__isKeepAlive,B5={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:a}){const c=Nn(),u=c.ctx;if(!u.renderer)return()=>{const N=a.default&&a.default();return N&&N.length===1?N[0]:N};const f=new Map,b=new Set;let g=null;const _=c.suspense,{renderer:{p:k,m:E,um:x,o:{createElement:D}}}=u,v=D("div");u.activate=(N,W,te,ie,ee)=>{const V=N.component;E(N,W,te,0,_),k(V.vnode,N,W,te,V,_,ie,N.slotScopeIds,ee),wn(()=>{V.isDeactivated=!1,V.a&&js(V.a);const q=N.props&&N.props.onVnodeMounted;q&&Vn(q,V.parent,N)},_)},u.deactivate=N=>{const W=N.component;E(N,v,null,1,_),wn(()=>{W.da&&js(W.da);const te=N.props&&N.props.onVnodeUnmounted;te&&Vn(te,W.parent,N),W.isDeactivated=!0},_)};function I(N){Zf(N),x(N,c,_,!0)}function $(N){f.forEach((W,te)=>{const ie=Ld(W.type);ie&&(!N||!N(ie))&&le(te)})}function le(N){const W=f.get(N);!g||W.type!==g.type?I(W):g&&Zf(g),f.delete(N),b.delete(N)}rn(()=>[r.include,r.exclude],([N,W])=>{N&&$(te=>al(N,te)),W&&$(te=>!al(W,te))},{flush:"post",deep:!0});let G=null;const H=()=>{G!=null&&f.set(G,Jf(c.subTree))};return Yt(H),eu(H),tu(()=>{f.forEach(N=>{const{subTree:W,suspense:te}=c,ie=Jf(W);if(N.type===ie.type){Zf(ie);const ee=ie.component.da;ee&&wn(ee,te);return}I(N)})}),()=>{if(G=null,!a.default)return null;const N=a.default(),W=N[0];if(N.length>1)return g=null,N;if(!rr(W)||!(W.shapeFlag&4)&&!(W.shapeFlag&128))return g=null,W;let te=Jf(W);const ie=te.type,ee=Ld(Fr(te)?te.type.__asyncResolved||{}:ie),{include:V,exclude:q,max:Z}=r;if(V&&(!ee||!al(V,ee))||q&&ee&&al(q,ee))return g=te,W;const K=te.key==null?ie:te.key,oe=f.get(K);return te.el&&(te=Zo(te),W.shapeFlag&128&&(W.ssContent=te)),G=K,oe?(te.el=oe.el,te.component=oe.component,te.transition&&$r(te,te.transition),te.shapeFlag|=512,b.delete(K),b.add(K)):(b.add(K),Z&&b.size>parseInt(Z,10)&&le(b.values().next().value)),te.shapeFlag|=256,g=te,U0(W.type)?W:te}}},N5=B5;function al(r,a){return Ve(r)?r.some(c=>al(c,a)):Ht(r)?r.split(",").includes(a):r.test?r.test(a):!1}function Y0(r,a){Z0(r,"a",a)}function Q0(r,a){Z0(r,"da",a)}function Z0(r,a,c=sn){const u=r.__wdc||(r.__wdc=()=>{let f=c;for(;f;){if(f.isDeactivated)return;f=f.parent}return r()});if(Xd(a,u,c),c){let f=c.parent;for(;f&&f.parent;)Bl(f.parent.vnode)&&L5(u,a,c,f),f=f.parent}}function L5(r,a,c,u){const f=Xd(a,r,u,!0);Nl(()=>{Up(u[a],f)},c)}function Zf(r){let a=r.shapeFlag;a&256&&(a-=256),a&512&&(a-=512),r.shapeFlag=a}function Jf(r){return r.shapeFlag&128?r.ssContent:r}function Xd(r,a,c=sn,u=!1){if(c){const f=c[r]||(c[r]=[]),b=a.__weh||(a.__weh=(...g)=>{if(c.isUnmounted)return;Wr(),sr(c);const _=to(a,c,r,g);return tr(),Gr(),_});return u?f.unshift(b):f.push(b),b}}const vi=r=>(a,c=sn)=>(!Ws||r==="sp")&&Xd(r,a,c),J0=vi("bm"),Yt=vi("m"),X0=vi("bu"),eu=vi("u"),tu=vi("bum"),Nl=vi("um"),eC=vi("sp"),tC=vi("rtg"),nC=vi("rtc");function oC(r,a=sn){Xd("ec",r,a)}function kt(r,a){const c=En;if(c===null)return r;const u=ou(c)||c.proxy,f=r.dirs||(r.dirs=[]);for(let b=0;b<a.length;b++){let[g,_,k,E=bt]=a[b];Xe(g)&&(g={mounted:g,updated:g}),g.deep&&zr(_),f.push({dir:g,instance:u,value:_,oldValue:void 0,arg:k,modifiers:E})}return r}function qo(r,a,c,u){const f=r.dirs,b=a&&a.dirs;for(let g=0;g<f.length;g++){const _=f[g];b&&(_.oldValue=b[g].value);let k=_.dir[u];k&&(Wr(),to(k,c,8,[r.el,_,r,a]),Gr())}}const cg="components",O5="directives";function lr(r,a){return dg(cg,r,!0,a)||r}const iC=Symbol();function Vs(r){return Ht(r)?dg(cg,r,!1)||r:r||iC}function R5(r){return dg(O5,r)}function dg(r,a,c=!0,u=!1){const f=En||sn;if(f){const b=f.type;if(r===cg){const _=Ld(b,!1);if(_&&(_===a||_===no(a)||_===Il(no(a))))return b}const g=uA(f[r]||b[r],a)||uA(f.appContext[r],a);return!g&&u?b:g}}function uA(r,a){return r&&(r[a]||r[no(a)]||r[Il(no(a))])}function $t(r,a,c,u){let f;const b=c&&c[u];if(Ve(r)||Ht(r)){f=new Array(r.length);for(let g=0,_=r.length;g<_;g++)f[g]=a(r[g],g,void 0,b&&b[g])}else if(typeof r=="number"){f=new Array(r);for(let g=0;g<r;g++)f[g]=a(g+1,g,void 0,b&&b[g])}else if(Kt(r))if(r[Symbol.iterator])f=Array.from(r,(g,_)=>a(g,_,void 0,b&&b[_]));else{const g=Object.keys(r);f=new Array(g.length);for(let _=0,k=g.length;_<k;_++){const E=g[_];f[_]=a(r[E],E,_,b&&b[_])}}else f=[];return c&&(c[u]=f),f}function z5(r,a){for(let c=0;c<a.length;c++){const u=a[c];if(Ve(u))for(let f=0;f<u.length;f++)r[u[f].name]=u[f].fn;else u&&(r[u.name]=u.fn)}return r}function Cn(r,a,c={},u,f){if(En.isCE||En.parent&&Fr(En.parent)&&En.parent.isCE)return Ce("slot",a==="default"?null:{name:a},u&&u());let b=r[a];b&&b._c&&(b._d=!1),pe();const g=b&&rC(b(c)),_=wi(Je,{key:c.key||`_${a}`},g||(u?u():[]),g&&r._===1?64:-2);return!f&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),b&&b._c&&(b._d=!0),_}function rC(r){return r.some(a=>rr(a)?!(a.type===Sn||a.type===Je&&!rC(a.children)):!0)?r:null}function j5(r){const a={};for(const c in r)a[cl(c)]=r[c];return a}const kp=r=>r?AC(r)?ou(r)||r.proxy:kp(r.parent):null,Id=Gt(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>kp(r.parent),$root:r=>kp(r.root),$emit:r=>r.emit,$options:r=>aC(r),$forceUpdate:r=>r.f||(r.f=()=>og(r.update)),$nextTick:r=>r.n||(r.n=Hn.bind(r.proxy)),$watch:r=>I5.bind(r)}),wp={get({_:r},a){const{ctx:c,setupState:u,data:f,props:b,accessCache:g,type:_,appContext:k}=r;let E;if(a[0]!=="$"){const I=g[a];if(I!==void 0)switch(I){case 1:return u[a];case 2:return f[a];case 4:return c[a];case 3:return b[a]}else{if(u!==bt&&ft(u,a))return g[a]=1,u[a];if(f!==bt&&ft(f,a))return g[a]=2,f[a];if((E=r.propsOptions[0])&&ft(E,a))return g[a]=3,b[a];if(c!==bt&&ft(c,a))return g[a]=4,c[a];_p&&(g[a]=0)}}const x=Id[a];let D,v;if(x)return a==="$attrs"&&oo(r,"get",a),x(r);if((D=_.__cssModules)&&(D=D[a]))return D;if(c!==bt&&ft(c,a))return g[a]=4,c[a];if(v=k.config.globalProperties,ft(v,a))return v[a]},set({_:r},a,c){const{data:u,setupState:f,ctx:b}=r;return f!==bt&&ft(f,a)?(f[a]=c,!0):u!==bt&&ft(u,a)?(u[a]=c,!0):ft(r.props,a)||a[0]==="$"&&a.slice(1)in r?!1:(b[a]=c,!0)},has({_:{data:r,setupState:a,accessCache:c,ctx:u,appContext:f,propsOptions:b}},g){let _;return!!c[g]||r!==bt&&ft(r,g)||a!==bt&&ft(a,g)||(_=b[0])&&ft(_,g)||ft(u,g)||ft(Id,g)||ft(f.config.globalProperties,g)},defineProperty(r,a,c){return c.get!=null?r._.accessCache[a]=0:ft(c,"value")&&this.set(r,a,c.value,null),Reflect.defineProperty(r,a,c)}},F5=Gt({},wp,{get(r,a){if(a!==Symbol.unscopables)return wp.get(r,a,r)},has(r,a){return a[0]!=="_"&&!aI(a)}});let _p=!0;function V5(r){const a=aC(r),c=r.proxy,u=r.ctx;_p=!1,a.beforeCreate&&hA(a.beforeCreate,r,"bc");const{data:f,computed:b,methods:g,watch:_,provide:k,inject:E,created:x,beforeMount:D,mounted:v,beforeUpdate:I,updated:$,activated:le,deactivated:G,beforeDestroy:H,beforeUnmount:N,destroyed:W,unmounted:te,render:ie,renderTracked:ee,renderTriggered:V,errorCaptured:q,serverPrefetch:Z,expose:K,inheritAttrs:oe,components:R,directives:xe,filters:me}=a;if(E&&$5(E,u,null,r.appContext.config.unwrapInjectedRef),g)for(const Se in g){const Ue=g[Se];Xe(Ue)&&(u[Se]=Ue.bind(c))}if(f){const Se=f.call(c,c);Kt(Se)&&(r.data=Dn(Se))}if(_p=!0,b)for(const Se in b){const Ue=b[Se],ht=Xe(Ue)?Ue.bind(c,c):Xe(Ue.get)?Ue.get.bind(c,c):Mo,et=!Xe(Ue)&&Xe(Ue.set)?Ue.set.bind(c):Mo,ze=Me({get:ht,set:et});Object.defineProperty(u,Se,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Fe=>ze.value=Fe})}if(_)for(const Se in _)sC(_[Se],u,c,Se);if(k){const Se=Xe(k)?k.call(c):k;Reflect.ownKeys(Se).forEach(Ue=>{pl(Ue,Se[Ue])})}x&&hA(x,r,"c");function Re(Se,Ue){Ve(Ue)?Ue.forEach(ht=>Se(ht.bind(c))):Ue&&Se(Ue.bind(c))}if(Re(J0,D),Re(Yt,v),Re(X0,I),Re(eu,$),Re(Y0,le),Re(Q0,G),Re(oC,q),Re(nC,ee),Re(tC,V),Re(tu,N),Re(Nl,te),Re(eC,Z),Ve(K))if(K.length){const Se=r.exposed||(r.exposed={});K.forEach(Ue=>{Object.defineProperty(Se,Ue,{get:()=>c[Ue],set:ht=>c[Ue]=ht})})}else r.exposed||(r.exposed={});ie&&r.render===Mo&&(r.render=ie),oe!=null&&(r.inheritAttrs=oe),R&&(r.components=R),xe&&(r.directives=xe)}function $5(r,a,c=Mo,u=!1){Ve(r)&&(r=vp(r));for(const f in r){const b=r[f];let g;Kt(b)?"default"in b?g=Po(b.from||f,b.default,!0):g=Po(b.from||f):g=Po(b),jt(g)&&u?Object.defineProperty(a,f,{enumerable:!0,configurable:!0,get:()=>g.value,set:_=>g.value=_}):a[f]=g}}function hA(r,a,c){to(Ve(r)?r.map(u=>u.bind(a.proxy)):r.bind(a.proxy),a,c)}function sC(r,a,c,u){const f=u.includes(".")?G0(c,u):()=>c[u];if(Ht(r)){const b=a[r];Xe(b)&&rn(f,b)}else if(Xe(r))rn(f,r.bind(c));else if(Kt(r))if(Ve(r))r.forEach(b=>sC(b,a,c,u));else{const b=Xe(r.handler)?r.handler.bind(c):a[r.handler];Xe(b)&&rn(f,b,r)}}function aC(r){const a=r.type,{mixins:c,extends:u}=a,{mixins:f,optionsCache:b,config:{optionMergeStrategies:g}}=r.appContext,_=b.get(a);let k;return _?k=_:!f.length&&!c&&!u?k=a:(k={},f.length&&f.forEach(E=>Md(k,E,g,!0)),Md(k,a,g)),b.set(a,k),k}function Md(r,a,c,u=!1){const{mixins:f,extends:b}=a;b&&Md(r,b,c,!0),f&&f.forEach(g=>Md(r,g,c,!0));for(const g in a)if(!(u&&g==="expose")){const _=H5[g]||c&&c[g];r[g]=_?_(r[g],a[g]):a[g]}return r}const H5={data:fA,props:Nr,emits:Nr,methods:Nr,computed:Nr,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:Nr,directives:Nr,watch:q5,provide:fA,inject:U5};function fA(r,a){return a?r?function(){return Gt(Xe(r)?r.call(this,this):r,Xe(a)?a.call(this,this):a)}:a:r}function U5(r,a){return Nr(vp(r),vp(a))}function vp(r){if(Ve(r)){const a={};for(let c=0;c<r.length;c++)a[r[c]]=r[c];return a}return r}function Pn(r,a){return r?[...new Set([].concat(r,a))]:a}function Nr(r,a){return r?Gt(Gt(Object.create(null),r),a):a}function q5(r,a){if(!r)return a;if(!a)return r;const c=Gt(Object.create(null),r);for(const u in a)c[u]=Pn(r[u],a[u]);return c}function W5(r,a,c,u=!1){const f={},b={};Ed(b,nu,1),r.propsDefaults=Object.create(null),lC(r,a,f,b);for(const g in r.propsOptions[0])g in f||(f[g]=void 0);c?r.props=u?f:P0(f):r.type.props?r.props=f:r.props=b,r.attrs=b}function G5(r,a,c,u){const{props:f,attrs:b,vnode:{patchFlag:g}}=r,_=ct(f),[k]=r.propsOptions;let E=!1;if((u||g>0)&&!(g&16)){if(g&8){const x=r.vnode.dynamicProps;for(let D=0;D<x.length;D++){let v=x[D];if(Qd(r.emitsOptions,v))continue;const I=a[v];if(k)if(ft(b,v))I!==b[v]&&(b[v]=I,E=!0);else{const $=no(v);f[$]=Ap(k,_,$,I,r,!1)}else I!==b[v]&&(b[v]=I,E=!0)}}}else{lC(r,a,f,b)&&(E=!0);let x;for(const D in _)(!a||!ft(a,D)&&((x=Go(D))===D||!ft(a,x)))&&(k?c&&(c[D]!==void 0||c[x]!==void 0)&&(f[D]=Ap(k,_,D,void 0,r,!0)):delete f[D]);if(b!==_)for(const D in b)(!a||!ft(a,D)&&!0)&&(delete b[D],E=!0)}E&&_i(r,"set","$attrs")}function lC(r,a,c,u){const[f,b]=r.propsOptions;let g=!1,_;if(a)for(let k in a){if(ll(k))continue;const E=a[k];let x;f&&ft(f,x=no(k))?!b||!b.includes(x)?c[x]=E:(_||(_={}))[x]=E:Qd(r.emitsOptions,k)||(!(k in u)||E!==u[k])&&(u[k]=E,g=!0)}if(b){const k=ct(c),E=_||bt;for(let x=0;x<b.length;x++){const D=b[x];c[D]=Ap(f,k,D,E[D],r,!ft(E,D))}}return g}function Ap(r,a,c,u,f,b){const g=r[c];if(g!=null){const _=ft(g,"default");if(_&&u===void 0){const k=g.default;if(g.type!==Function&&Xe(k)){const{propsDefaults:E}=f;c in E?u=E[c]:(sr(f),u=E[c]=k.call(null,a),tr())}else u=k}g[0]&&(b&&!_?u=!1:g[1]&&(u===""||u===Go(c))&&(u=!0))}return u}function cC(r,a,c=!1){const u=a.propsCache,f=u.get(r);if(f)return f;const b=r.props,g={},_=[];let k=!1;if(!Xe(r)){const x=D=>{k=!0;const[v,I]=cC(D,a,!0);Gt(g,v),I&&_.push(...I)};!c&&a.mixins.length&&a.mixins.forEach(x),r.extends&&x(r.extends),r.mixins&&r.mixins.forEach(x)}if(!b&&!k)return u.set(r,Rs),Rs;if(Ve(b))for(let x=0;x<b.length;x++){const D=no(b[x]);pA(D)&&(g[D]=bt)}else if(b)for(const x in b){const D=no(x);if(pA(D)){const v=b[x],I=g[D]=Ve(v)||Xe(v)?{type:v}:v;if(I){const $=bA(Boolean,I.type),le=bA(String,I.type);I[0]=$>-1,I[1]=le<0||$<le,($>-1||ft(I,"default"))&&_.push(D)}}}const E=[g,_];return u.set(r,E),E}function pA(r){return r[0]!=="$"}function gA(r){const a=r&&r.toString().match(/^\s*function (\w+)/);return a?a[1]:r===null?"null":""}function mA(r,a){return gA(r)===gA(a)}function bA(r,a){return Ve(a)?a.findIndex(c=>mA(c,r)):Xe(a)&&mA(a,r)?0:-1}const dC=r=>r[0]==="_"||r==="$stable",ug=r=>Ve(r)?r.map(Xn):[Xn(r)],K5=(r,a,c)=>{if(a._n)return a;const u=yn((...f)=>ug(a(...f)),c);return u._c=!1,u},uC=(r,a,c)=>{const u=r._ctx;for(const f in r){if(dC(f))continue;const b=r[f];if(Xe(b))a[f]=K5(f,b,u);else if(b!=null){const g=ug(b);a[f]=()=>g}}},hC=(r,a)=>{const c=ug(a);r.slots.default=()=>c},Y5=(r,a)=>{if(r.vnode.shapeFlag&32){const c=a._;c?(r.slots=ct(a),Ed(a,"_",c)):uC(a,r.slots={})}else r.slots={},a&&hC(r,a);Ed(r.slots,nu,1)},Q5=(r,a,c)=>{const{vnode:u,slots:f}=r;let b=!0,g=bt;if(u.shapeFlag&32){const _=a._;_?c&&_===1?b=!1:(Gt(f,a),!c&&_===1&&delete f._):(b=!a.$stable,uC(a,f)),g=a}else a&&(hC(r,a),g={default:1});if(b)for(const _ in f)!dC(_)&&!(_ in g)&&delete f[_]};function fC(){return{app:null,config:{isNativeTag:gI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Z5=0;function J5(r,a){return function(u,f=null){Xe(u)||(u=Object.assign({},u)),f!=null&&!Kt(f)&&(f=null);const b=fC(),g=new Set;let _=!1;const k=b.app={_uid:Z5++,_component:u,_props:f,_container:null,_context:b,_instance:null,version:IC,get config(){return b.config},set config(E){},use(E,...x){return g.has(E)||(E&&Xe(E.install)?(g.add(E),E.install(k,...x)):Xe(E)&&(g.add(E),E(k,...x))),k},mixin(E){return b.mixins.includes(E)||b.mixins.push(E),k},component(E,x){return x?(b.components[E]=x,k):b.components[E]},directive(E,x){return x?(b.directives[E]=x,k):b.directives[E]},mount(E,x,D){if(!_){const v=Ce(u,f);return v.appContext=b,x&&a?a(v,E):r(v,E,D),_=!0,k._container=E,E.__vue_app__=k,ou(v.component)||v.component.proxy}},unmount(){_&&(r(null,k._container),delete k._container.__vue_app__)},provide(E,x){return b.provides[E]=x,k}};return k}}function Pd(r,a,c,u,f=!1){if(Ve(r)){r.forEach((v,I)=>Pd(v,a&&(Ve(a)?a[I]:a),c,u,f));return}if(Fr(u)&&!f)return;const b=u.shapeFlag&4?ou(u.component)||u.component.proxy:u.el,g=f?null:b,{i:_,r:k}=r,E=a&&a.r,x=_.refs===bt?_.refs={}:_.refs,D=_.setupState;if(E!=null&&E!==k&&(Ht(E)?(x[E]=null,ft(D,E)&&(D[E]=null)):jt(E)&&(E.value=null)),Xe(k))Yo(k,_,12,[g,x]);else{const v=Ht(k),I=jt(k);if(v||I){const $=()=>{if(r.f){const le=v?x[k]:k.value;f?Ve(le)&&Up(le,b):Ve(le)?le.includes(b)||le.push(b):v?(x[k]=[b],ft(D,k)&&(D[k]=x[k])):(k.value=[b],r.k&&(x[r.k]=k.value))}else v?(x[k]=g,ft(D,k)&&(D[k]=g)):I&&(k.value=g,r.k&&(x[r.k]=g))};g?($.id=-1,wn($,c)):$()}}}let $i=!1;const ld=r=>/svg/.test(r.namespaceURI)&&r.tagName!=="foreignObject",cd=r=>r.nodeType===8;function X5(r){const{mt:a,p:c,o:{patchProp:u,createText:f,nextSibling:b,parentNode:g,remove:_,insert:k,createComment:E}}=r,x=(H,N)=>{if(!N.hasChildNodes()){c(null,H,N),Td(),N._vnode=H;return}$i=!1,D(N.firstChild,H,null,null,null),Td(),N._vnode=H,$i&&console.error("Hydration completed but contains mismatches.")},D=(H,N,W,te,ie,ee=!1)=>{const V=cd(H)&&H.data==="[",q=()=>le(H,N,W,te,ie,V),{type:Z,ref:K,shapeFlag:oe,patchFlag:R}=N,xe=H.nodeType;N.el=H,R===-2&&(ee=!1,N.dynamicChildren=null);let me=null;switch(Z){case qs:xe!==3?N.children===""?(k(N.el=f(""),g(H),H),me=H):me=q():(H.data!==N.children&&($i=!0,H.data=N.children),me=b(H));break;case Sn:xe!==8||V?me=q():me=b(H);break;case Vr:if(xe!==1&&xe!==3)me=q();else{me=H;const Ie=!N.children.length;for(let Re=0;Re<N.staticCount;Re++)Ie&&(N.children+=me.nodeType===1?me.outerHTML:me.data),Re===N.staticCount-1&&(N.anchor=me),me=b(me);return me}break;case Je:V?me=$(H,N,W,te,ie,ee):me=q();break;default:if(oe&1)xe!==1||N.type.toLowerCase()!==H.tagName.toLowerCase()?me=q():me=v(H,N,W,te,ie,ee);else if(oe&6){N.slotScopeIds=ie;const Ie=g(H);if(a(N,Ie,null,W,te,ld(Ie),ee),me=V?G(H):b(H),me&&cd(me)&&me.data==="teleport end"&&(me=b(me)),Fr(N)){let Re;V?(Re=Ce(Je),Re.anchor=me?me.previousSibling:Ie.lastChild):Re=H.nodeType===3?xt(""):Ce("div"),Re.el=H,N.component.subTree=Re}}else oe&64?xe!==8?me=q():me=N.type.hydrate(H,N,W,te,ie,ee,r,I):oe&128&&(me=N.type.hydrate(H,N,W,te,ld(g(H)),ie,ee,r,D))}return K!=null&&Pd(K,null,te,N),me},v=(H,N,W,te,ie,ee)=>{ee=ee||!!N.dynamicChildren;const{type:V,props:q,patchFlag:Z,shapeFlag:K,dirs:oe}=N,R=V==="input"&&oe||V==="option";if(R||Z!==-1){if(oe&&qo(N,null,W,"created"),q)if(R||!ee||Z&48)for(const me in q)(R&&me.endsWith("value")||Dl(me)&&!ll(me))&&u(H,me,null,q[me],!1,void 0,W);else q.onClick&&u(H,"onClick",null,q.onClick,!1,void 0,W);let xe;if((xe=q&&q.onVnodeBeforeMount)&&Vn(xe,W,N),oe&&qo(N,null,W,"beforeMount"),((xe=q&&q.onVnodeMounted)||oe)&&q0(()=>{xe&&Vn(xe,W,N),oe&&qo(N,null,W,"mounted")},te),K&16&&!(q&&(q.innerHTML||q.textContent))){let me=I(H.firstChild,N,H,W,te,ie,ee);for(;me;){$i=!0;const Ie=me;me=me.nextSibling,_(Ie)}}else K&8&&H.textContent!==N.children&&($i=!0,H.textContent=N.children)}return H.nextSibling},I=(H,N,W,te,ie,ee,V)=>{V=V||!!N.dynamicChildren;const q=N.children,Z=q.length;for(let K=0;K<Z;K++){const oe=V?q[K]:q[K]=Xn(q[K]);if(H)H=D(H,oe,te,ie,ee,V);else{if(oe.type===qs&&!oe.children)continue;$i=!0,c(null,oe,W,null,te,ie,ld(W),ee)}}return H},$=(H,N,W,te,ie,ee)=>{const{slotScopeIds:V}=N;V&&(ie=ie?ie.concat(V):V);const q=g(H),Z=I(b(H),N,q,W,te,ie,ee);return Z&&cd(Z)&&Z.data==="]"?b(N.anchor=Z):($i=!0,k(N.anchor=E("]"),q,Z),Z)},le=(H,N,W,te,ie,ee)=>{if($i=!0,N.el=null,ee){const Z=G(H);for(;;){const K=b(H);if(K&&K!==Z)_(K);else break}}const V=b(H),q=g(H);return _(H),c(null,N,q,V,W,te,ld(q),ie),V},G=H=>{let N=0;for(;H;)if(H=b(H),H&&cd(H)&&(H.data==="["&&N++,H.data==="]")){if(N===0)return b(H);N--}return H};return[x,D]}const wn=q0;function pC(r){return mC(r)}function gC(r){return mC(r,X5)}function mC(r,a){const c=vI();c.__VUE__=!0;const{insert:u,remove:f,patchProp:b,createElement:g,createText:_,createComment:k,setText:E,setElementText:x,parentNode:D,nextSibling:v,setScopeId:I=Mo,cloneNode:$,insertStaticContent:le}=r,G=(z,U,X,ce=null,ue=null,ke=null,ye=!1,_e=null,ve=!!U.dynamicChildren)=>{if(z===U)return;z&&!Wo(z,U)&&(ce=se(z),qe(z,ue,ke,!0),z=null),U.patchFlag===-2&&(ve=!1,U.dynamicChildren=null);const{type:he,ref:je,shapeFlag:Te}=U;switch(he){case qs:H(z,U,X,ce);break;case Sn:N(z,U,X,ce);break;case Vr:z==null&&W(U,X,ce,ye);break;case Je:xe(z,U,X,ce,ue,ke,ye,_e,ve);break;default:Te&1?ee(z,U,X,ce,ue,ke,ye,_e,ve):Te&6?me(z,U,X,ce,ue,ke,ye,_e,ve):(Te&64||Te&128)&&he.process(z,U,X,ce,ue,ke,ye,_e,ve,rt)}je!=null&&ue&&Pd(je,z&&z.ref,ke,U||z,!U)},H=(z,U,X,ce)=>{if(z==null)u(U.el=_(U.children),X,ce);else{const ue=U.el=z.el;U.children!==z.children&&E(ue,U.children)}},N=(z,U,X,ce)=>{z==null?u(U.el=k(U.children||""),X,ce):U.el=z.el},W=(z,U,X,ce)=>{[z.el,z.anchor]=le(z.children,U,X,ce,z.el,z.anchor)},te=({el:z,anchor:U},X,ce)=>{let ue;for(;z&&z!==U;)ue=v(z),u(z,X,ce),z=ue;u(U,X,ce)},ie=({el:z,anchor:U})=>{let X;for(;z&&z!==U;)X=v(z),f(z),z=X;f(U)},ee=(z,U,X,ce,ue,ke,ye,_e,ve)=>{ye=ye||U.type==="svg",z==null?V(U,X,ce,ue,ke,ye,_e,ve):K(z,U,ue,ke,ye,_e,ve)},V=(z,U,X,ce,ue,ke,ye,_e)=>{let ve,he;const{type:je,props:Te,shapeFlag:Be,transition:Ae,patchFlag:$e,dirs:st}=z;if(z.el&&$!==void 0&&$e===-1)ve=z.el=$(z.el);else{if(ve=z.el=g(z.type,ke,Te&&Te.is,Te),Be&8?x(ve,z.children):Be&16&&Z(z.children,ve,null,ce,ue,ke&&je!=="foreignObject",ye,_e),st&&qo(z,null,ce,"created"),Te){for(const We in Te)We!=="value"&&!ll(We)&&b(ve,We,null,Te[We],ke,z.children,ce,ue,de);"value"in Te&&b(ve,"value",null,Te.value),(he=Te.onVnodeBeforeMount)&&Vn(he,ce,z)}q(ve,z,z.scopeId,ye,ce)}st&&qo(z,null,ce,"beforeMount");const Qe=(!ue||ue&&!ue.pendingBranch)&&Ae&&!Ae.persisted;Qe&&Ae.beforeEnter(ve),u(ve,U,X),((he=Te&&Te.onVnodeMounted)||Qe||st)&&wn(()=>{he&&Vn(he,ce,z),Qe&&Ae.enter(ve),st&&qo(z,null,ce,"mounted")},ue)},q=(z,U,X,ce,ue)=>{if(X&&I(z,X),ce)for(let ke=0;ke<ce.length;ke++)I(z,ce[ke]);if(ue){let ke=ue.subTree;if(U===ke){const ye=ue.vnode;q(z,ye,ye.scopeId,ye.slotScopeIds,ue.parent)}}},Z=(z,U,X,ce,ue,ke,ye,_e,ve=0)=>{for(let he=ve;he<z.length;he++){const je=z[he]=_e?Yi(z[he]):Xn(z[he]);G(null,je,U,X,ce,ue,ke,ye,_e)}},K=(z,U,X,ce,ue,ke,ye)=>{const _e=U.el=z.el;let{patchFlag:ve,dynamicChildren:he,dirs:je}=U;ve|=z.patchFlag&16;const Te=z.props||bt,Be=U.props||bt;let Ae;X&&Pr(X,!1),(Ae=Be.onVnodeBeforeUpdate)&&Vn(Ae,X,U,z),je&&qo(U,z,X,"beforeUpdate"),X&&Pr(X,!0);const $e=ue&&U.type!=="foreignObject";if(he?oe(z.dynamicChildren,he,_e,X,ce,$e,ke):ye||ht(z,U,_e,null,X,ce,$e,ke,!1),ve>0){if(ve&16)R(_e,U,Te,Be,X,ce,ue);else if(ve&2&&Te.class!==Be.class&&b(_e,"class",null,Be.class,ue),ve&4&&b(_e,"style",Te.style,Be.style,ue),ve&8){const st=U.dynamicProps;for(let Qe=0;Qe<st.length;Qe++){const We=st[Qe],dt=Te[We],Tn=Be[We];(Tn!==dt||We==="value")&&b(_e,We,dt,Tn,ue,z.children,X,ce,de)}}ve&1&&z.children!==U.children&&x(_e,U.children)}else!ye&&he==null&&R(_e,U,Te,Be,X,ce,ue);((Ae=Be.onVnodeUpdated)||je)&&wn(()=>{Ae&&Vn(Ae,X,U,z),je&&qo(U,z,X,"updated")},ce)},oe=(z,U,X,ce,ue,ke,ye)=>{for(let _e=0;_e<U.length;_e++){const ve=z[_e],he=U[_e],je=ve.el&&(ve.type===Je||!Wo(ve,he)||ve.shapeFlag&70)?D(ve.el):X;G(ve,he,je,null,ce,ue,ke,ye,!0)}},R=(z,U,X,ce,ue,ke,ye)=>{if(X!==ce){for(const _e in ce){if(ll(_e))continue;const ve=ce[_e],he=X[_e];ve!==he&&_e!=="value"&&b(z,_e,he,ve,ye,U.children,ue,ke,de)}if(X!==bt)for(const _e in X)!ll(_e)&&!(_e in ce)&&b(z,_e,X[_e],null,ye,U.children,ue,ke,de);"value"in ce&&b(z,"value",X.value,ce.value)}},xe=(z,U,X,ce,ue,ke,ye,_e,ve)=>{const he=U.el=z?z.el:_(""),je=U.anchor=z?z.anchor:_("");let{patchFlag:Te,dynamicChildren:Be,slotScopeIds:Ae}=U;Ae&&(_e=_e?_e.concat(Ae):Ae),z==null?(u(he,X,ce),u(je,X,ce),Z(U.children,X,je,ue,ke,ye,_e,ve)):Te>0&&Te&64&&Be&&z.dynamicChildren?(oe(z.dynamicChildren,Be,X,ue,ke,ye,_e),(U.key!=null||ue&&U===ue.subTree)&&hg(z,U,!0)):ht(z,U,X,je,ue,ke,ye,_e,ve)},me=(z,U,X,ce,ue,ke,ye,_e,ve)=>{U.slotScopeIds=_e,z==null?U.shapeFlag&512?ue.ctx.activate(U,X,ce,ye,ve):Ie(U,X,ce,ue,ke,ye,ve):Re(z,U,ve)},Ie=(z,U,X,ce,ue,ke,ye)=>{const _e=z.component=vC(z,ce,ue);if(Bl(z)&&(_e.ctx.renderer=rt),CC(_e),_e.asyncDep){if(ue&&ue.registerDep(_e,Se),!z.el){const ve=_e.subTree=Ce(Sn);N(null,ve,U,X)}return}Se(_e,z,U,X,ue,ke,ye)},Re=(z,U,X)=>{const ce=U.component=z.component;if(v5(z,U,X))if(ce.asyncDep&&!ce.asyncResolved){Ue(ce,U,X);return}else ce.next=U,h5(ce.update),ce.update();else U.el=z.el,ce.vnode=U},Se=(z,U,X,ce,ue,ke,ye)=>{const _e=()=>{if(z.isMounted){let{next:je,bu:Te,u:Be,parent:Ae,vnode:$e}=z,st=je,Qe;Pr(z,!1),je?(je.el=$e.el,Ue(z,je,ye)):je=$e,Te&&js(Te),(Qe=je.props&&je.props.onVnodeBeforeUpdate)&&Vn(Qe,Ae,je,$e),Pr(z,!0);const We=wd(z),dt=z.subTree;z.subTree=We,G(dt,We,D(dt.el),se(dt),z,ue,ke),je.el=We.el,st===null&&rg(z,We.el),Be&&wn(Be,ue),(Qe=je.props&&je.props.onVnodeUpdated)&&wn(()=>Vn(Qe,Ae,je,$e),ue)}else{let je;const{el:Te,props:Be}=U,{bm:Ae,m:$e,parent:st}=z,Qe=Fr(U);if(Pr(z,!1),Ae&&js(Ae),!Qe&&(je=Be&&Be.onVnodeBeforeMount)&&Vn(je,st,U),Pr(z,!0),Te&&Oe){const We=()=>{z.subTree=wd(z),Oe(Te,z.subTree,z,ue,null)};Qe?U.type.__asyncLoader().then(()=>!z.isUnmounted&&We()):We()}else{const We=z.subTree=wd(z);G(null,We,X,ce,z,ue,ke),U.el=We.el}if($e&&wn($e,ue),!Qe&&(je=Be&&Be.onVnodeMounted)){const We=U;wn(()=>Vn(je,st,We),ue)}(U.shapeFlag&256||st&&Fr(st.vnode)&&st.vnode.shapeFlag&256)&&z.a&&wn(z.a,ue),z.isMounted=!0,U=X=ce=null}},ve=z.effect=new Ml(_e,()=>og(he),z.scope),he=z.update=()=>ve.run();he.id=z.uid,Pr(z,!0),he()},Ue=(z,U,X)=>{U.component=z;const ce=z.vnode.props;z.vnode=U,z.next=null,G5(z,U.props,ce,X),Q5(z,U.children,X),Wr(),Yd(void 0,z.update),Gr()},ht=(z,U,X,ce,ue,ke,ye,_e,ve=!1)=>{const he=z&&z.children,je=z?z.shapeFlag:0,Te=U.children,{patchFlag:Be,shapeFlag:Ae}=U;if(Be>0){if(Be&128){ze(he,Te,X,ce,ue,ke,ye,_e,ve);return}else if(Be&256){et(he,Te,X,ce,ue,ke,ye,_e,ve);return}}Ae&8?(je&16&&de(he,ue,ke),Te!==he&&x(X,Te)):je&16?Ae&16?ze(he,Te,X,ce,ue,ke,ye,_e,ve):de(he,ue,ke,!0):(je&8&&x(X,""),Ae&16&&Z(Te,X,ce,ue,ke,ye,_e,ve))},et=(z,U,X,ce,ue,ke,ye,_e,ve)=>{z=z||Rs,U=U||Rs;const he=z.length,je=U.length,Te=Math.min(he,je);let Be;for(Be=0;Be<Te;Be++){const Ae=U[Be]=ve?Yi(U[Be]):Xn(U[Be]);G(z[Be],Ae,X,null,ue,ke,ye,_e,ve)}he>je?de(z,ue,ke,!0,!1,Te):Z(U,X,ce,ue,ke,ye,_e,ve,Te)},ze=(z,U,X,ce,ue,ke,ye,_e,ve)=>{let he=0;const je=U.length;let Te=z.length-1,Be=je-1;for(;he<=Te&&he<=Be;){const Ae=z[he],$e=U[he]=ve?Yi(U[he]):Xn(U[he]);if(Wo(Ae,$e))G(Ae,$e,X,null,ue,ke,ye,_e,ve);else break;he++}for(;he<=Te&&he<=Be;){const Ae=z[Te],$e=U[Be]=ve?Yi(U[Be]):Xn(U[Be]);if(Wo(Ae,$e))G(Ae,$e,X,null,ue,ke,ye,_e,ve);else break;Te--,Be--}if(he>Te){if(he<=Be){const Ae=Be+1,$e=Ae<je?U[Ae].el:ce;for(;he<=Be;)G(null,U[he]=ve?Yi(U[he]):Xn(U[he]),X,$e,ue,ke,ye,_e,ve),he++}}else if(he>Be)for(;he<=Te;)qe(z[he],ue,ke,!0),he++;else{const Ae=he,$e=he,st=new Map;for(he=$e;he<=Be;he++){const Dt=U[he]=ve?Yi(U[he]):Xn(U[he]);Dt.key!=null&&st.set(Dt.key,he)}let Qe,We=0;const dt=Be-$e+1;let Tn=!1,ro=0;const Ut=new Array(dt);for(he=0;he<dt;he++)Ut[he]=0;for(he=Ae;he<=Te;he++){const Dt=z[he];if(We>=dt){qe(Dt,ue,ke,!0);continue}let Ft;if(Dt.key!=null)Ft=st.get(Dt.key);else for(Qe=$e;Qe<=Be;Qe++)if(Ut[Qe-$e]===0&&Wo(Dt,U[Qe])){Ft=Qe;break}Ft===void 0?qe(Dt,ue,ke,!0):(Ut[Ft-$e]=he+1,Ft>=ro?ro=Ft:Tn=!0,G(Dt,U[Ft],X,null,ue,ke,ye,_e,ve),We++)}const Qt=Tn?eM(Ut):Rs;for(Qe=Qt.length-1,he=dt-1;he>=0;he--){const Dt=$e+he,Ft=U[Dt],In=Dt+1<je?U[Dt+1].el:ce;Ut[he]===0?G(null,Ft,X,In,ue,ke,ye,_e,ve):Tn&&(Qe<0||he!==Qt[Qe]?Fe(Ft,X,In,2):Qe--)}}},Fe=(z,U,X,ce,ue=null)=>{const{el:ke,type:ye,transition:_e,children:ve,shapeFlag:he}=z;if(he&6){Fe(z.component.subTree,U,X,ce);return}if(he&128){z.suspense.move(U,X,ce);return}if(he&64){ye.move(z,U,X,rt);return}if(ye===Je){u(ke,U,X);for(let Te=0;Te<ve.length;Te++)Fe(ve[Te],U,X,ce);u(z.anchor,U,X);return}if(ye===Vr){te(z,U,X);return}if(ce!==2&&he&1&&_e)if(ce===0)_e.beforeEnter(ke),u(ke,U,X),wn(()=>_e.enter(ke),ue);else{const{leave:Te,delayLeave:Be,afterLeave:Ae}=_e,$e=()=>u(ke,U,X),st=()=>{Te(ke,()=>{$e(),Ae&&Ae()})};Be?Be(ke,$e,st):st()}else u(ke,U,X)},qe=(z,U,X,ce=!1,ue=!1)=>{const{type:ke,props:ye,ref:_e,children:ve,dynamicChildren:he,shapeFlag:je,patchFlag:Te,dirs:Be}=z;if(_e!=null&&Pd(_e,null,X,z,!0),je&256){U.ctx.deactivate(z);return}const Ae=je&1&&Be,$e=!Fr(z);let st;if($e&&(st=ye&&ye.onVnodeBeforeUnmount)&&Vn(st,U,z),je&6)re(z.component,X,ce);else{if(je&128){z.suspense.unmount(X,ce);return}Ae&&qo(z,null,U,"beforeUnmount"),je&64?z.type.remove(z,U,X,ue,rt,ce):he&&(ke!==Je||Te>0&&Te&64)?de(he,U,X,!1,!0):(ke===Je&&Te&384||!ue&&je&16)&&de(ve,U,X),ce&&ut(z)}($e&&(st=ye&&ye.onVnodeUnmounted)||Ae)&&wn(()=>{st&&Vn(st,U,z),Ae&&qo(z,null,U,"unmounted")},X)},ut=z=>{const{type:U,el:X,anchor:ce,transition:ue}=z;if(U===Je){L(X,ce);return}if(U===Vr){ie(z);return}const ke=()=>{f(X),ue&&!ue.persisted&&ue.afterLeave&&ue.afterLeave()};if(z.shapeFlag&1&&ue&&!ue.persisted){const{leave:ye,delayLeave:_e}=ue,ve=()=>ye(X,ke);_e?_e(z.el,ke,ve):ve()}else ke()},L=(z,U)=>{let X;for(;z!==U;)X=v(z),f(z),z=X;f(U)},re=(z,U,X)=>{const{bum:ce,scope:ue,update:ke,subTree:ye,um:_e}=z;ce&&js(ce),ue.stop(),ke&&(ke.active=!1,qe(ye,z,U,X)),_e&&wn(_e,U),wn(()=>{z.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},de=(z,U,X,ce=!1,ue=!1,ke=0)=>{for(let ye=ke;ye<z.length;ye++)qe(z[ye],U,X,ce,ue)},se=z=>z.shapeFlag&6?se(z.component.subTree):z.shapeFlag&128?z.suspense.next():v(z.anchor||z.el),ne=(z,U,X)=>{z==null?U._vnode&&qe(U._vnode,null,null,!0):G(U._vnode||null,z,U,null,null,null,X),Td(),U._vnode=z},rt={p:G,um:qe,m:Fe,r:ut,mt:Ie,mc:Z,pc:ht,pbc:oe,n:se,o:r};let Ee,Oe;return a&&([Ee,Oe]=a(rt)),{render:ne,hydrate:Ee,createApp:J5(ne,Ee)}}function Pr({effect:r,update:a},c){r.allowRecurse=a.allowRecurse=c}function hg(r,a,c=!1){const u=r.children,f=a.children;if(Ve(u)&&Ve(f))for(let b=0;b<u.length;b++){const g=u[b];let _=f[b];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=f[b]=Yi(f[b]),_.el=g.el),c||hg(g,_))}}function eM(r){const a=r.slice(),c=[0];let u,f,b,g,_;const k=r.length;for(u=0;u<k;u++){const E=r[u];if(E!==0){if(f=c[c.length-1],r[f]<E){a[u]=f,c.push(u);continue}for(b=0,g=c.length-1;b<g;)_=b+g>>1,r[c[_]]<E?b=_+1:g=_;E<r[c[b]]&&(b>0&&(a[u]=c[b-1]),c[b]=u)}}for(b=c.length,g=c[b-1];b-- >0;)c[b]=g,g=a[g];return c}const tM=r=>r.__isTeleport,gl=r=>r&&(r.disabled||r.disabled===""),kA=r=>typeof SVGElement!="undefined"&&r instanceof SVGElement,Cp=(r,a)=>{const c=r&&r.to;return Ht(c)?a?a(c):null:c},nM={__isTeleport:!0,process(r,a,c,u,f,b,g,_,k,E){const{mc:x,pc:D,pbc:v,o:{insert:I,querySelector:$,createText:le,createComment:G}}=E,H=gl(a.props);let{shapeFlag:N,children:W,dynamicChildren:te}=a;if(r==null){const ie=a.el=le(""),ee=a.anchor=le("");I(ie,c,u),I(ee,c,u);const V=a.target=Cp(a.props,$),q=a.targetAnchor=le("");V&&(I(q,V),g=g||kA(V));const Z=(K,oe)=>{N&16&&x(W,K,oe,f,b,g,_,k)};H?Z(c,ee):V&&Z(V,q)}else{a.el=r.el;const ie=a.anchor=r.anchor,ee=a.target=r.target,V=a.targetAnchor=r.targetAnchor,q=gl(r.props),Z=q?c:ee,K=q?ie:V;if(g=g||kA(ee),te?(v(r.dynamicChildren,te,Z,f,b,g,_),hg(r,a,!0)):k||D(r,a,Z,K,f,b,g,_,!1),H)q||dd(a,c,ie,E,1);else if((a.props&&a.props.to)!==(r.props&&r.props.to)){const oe=a.target=Cp(a.props,$);oe&&dd(a,oe,null,E,0)}else q&&dd(a,ee,V,E,1)}},remove(r,a,c,u,{um:f,o:{remove:b}},g){const{shapeFlag:_,children:k,anchor:E,targetAnchor:x,target:D,props:v}=r;if(D&&b(x),(g||!gl(v))&&(b(E),_&16))for(let I=0;I<k.length;I++){const $=k[I];f($,a,c,!0,!!$.dynamicChildren)}},move:dd,hydrate:oM};function dd(r,a,c,{o:{insert:u},m:f},b=2){b===0&&u(r.targetAnchor,a,c);const{el:g,anchor:_,shapeFlag:k,children:E,props:x}=r,D=b===2;if(D&&u(g,a,c),(!D||gl(x))&&k&16)for(let v=0;v<E.length;v++)f(E[v],a,c,2);D&&u(_,a,c)}function oM(r,a,c,u,f,b,{o:{nextSibling:g,parentNode:_,querySelector:k}},E){const x=a.target=Cp(a.props,k);if(x){const D=x._lpa||x.firstChild;if(a.shapeFlag&16)if(gl(a.props))a.anchor=E(g(r),a,_(r),c,u,f,b),a.targetAnchor=D;else{a.anchor=g(r);let v=D;for(;v;)if(v=g(v),v&&v.nodeType===8&&v.data==="teleport anchor"){a.targetAnchor=v,x._lpa=a.targetAnchor&&g(a.targetAnchor);break}E(D,a,x,c,u,f,b)}}return a.anchor&&g(a.anchor)}const iM=nM,Je=Symbol(void 0),qs=Symbol(void 0),Sn=Symbol(void 0),Vr=Symbol(void 0),ml=[];let $n=null;function pe(r=!1){ml.push($n=r?null:[])}function bC(){ml.pop(),$n=ml[ml.length-1]||null}let Hr=1;function yp(r){Hr+=r}function kC(r){return r.dynamicChildren=Hr>0?$n||Rs:null,bC(),Hr>0&&$n&&$n.push(r),r}function we(r,a,c,u,f,b){return kC(S(r,a,c,u,f,b,!0))}function wi(r,a,c,u,f){return kC(Ce(r,a,c,u,f,!0))}function rr(r){return r?r.__v_isVNode===!0:!1}function Wo(r,a){return r.type===a.type&&r.key===a.key}function rM(r){}const nu="__vInternal",wC=({key:r})=>r!=null?r:null,_d=({ref:r,ref_key:a,ref_for:c})=>r!=null?Ht(r)||jt(r)||Xe(r)?{i:En,r,k:a,f:!!c}:r:null;function S(r,a=null,c=null,u=0,f=null,b=r===Je?0:1,g=!1,_=!1){const k={__v_isVNode:!0,__v_skip:!0,type:r,props:a,key:a&&wC(a),ref:a&&_d(a),scopeId:Zd,slotScopeIds:null,children:c,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:b,patchFlag:u,dynamicProps:f,dynamicChildren:null,appContext:null};return _?(fg(k,c),b&128&&r.normalize(k)):c&&(k.shapeFlag|=Ht(c)?8:16),Hr>0&&!g&&$n&&(k.patchFlag>0||b&6)&&k.patchFlag!==32&&$n.push(k),k}const Ce=sM;function sM(r,a=null,c=null,u=0,f=null,b=!1){if((!r||r===iC)&&(r=Sn),rr(r)){const _=Zo(r,a,!0);return c&&fg(_,c),Hr>0&&!b&&$n&&(_.shapeFlag&6?$n[$n.indexOf(r)]=_:$n.push(_)),_.patchFlag|=-2,_}if(mM(r)&&(r=r.__vccOpts),a){a=_C(a);let{class:_,style:k}=a;_&&!Ht(_)&&(a.class=it(_)),Kt(k)&&(Jp(k)&&!Ve(k)&&(k=Gt({},k)),a.style=Sl(k))}const g=Ht(r)?1:U0(r)?128:tM(r)?64:Kt(r)?4:Xe(r)?2:0;return S(r,a,c,u,f,g,b,!0)}function _C(r){return r?Jp(r)||nu in r?Gt({},r):r:null}function Zo(r,a,c=!1){const{props:u,ref:f,patchFlag:b,children:g}=r,_=a?Bd(u||{},a):u;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:_,key:_&&wC(_),ref:a&&a.ref?c&&f?Ve(f)?f.concat(_d(a)):[f,_d(a)]:_d(a):f,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:g,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:a&&r.type!==Je?b===-1?16:b|16:b,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Zo(r.ssContent),ssFallback:r.ssFallback&&Zo(r.ssFallback),el:r.el,anchor:r.anchor}}function xt(r=" ",a=0){return Ce(qs,null,r,a)}function aM(r,a){const c=Ce(Vr,null,r);return c.staticCount=a,c}function ot(r="",a=!1){return a?(pe(),wi(Sn,null,r)):Ce(Sn,null,r)}function Xn(r){return r==null||typeof r=="boolean"?Ce(Sn):Ve(r)?Ce(Je,null,r.slice()):typeof r=="object"?Yi(r):Ce(qs,null,String(r))}function Yi(r){return r.el===null||r.memo?r:Zo(r)}function fg(r,a){let c=0;const{shapeFlag:u}=r;if(a==null)a=null;else if(Ve(a))c=16;else if(typeof a=="object")if(u&65){const f=a.default;f&&(f._c&&(f._d=!1),fg(r,f()),f._c&&(f._d=!0));return}else{c=32;const f=a._;!f&&!(nu in a)?a._ctx=En:f===3&&En&&(En.slots._===1?a._=1:(a._=2,r.patchFlag|=1024))}else Xe(a)?(a={default:a,_ctx:En},c=32):(a=String(a),u&64?(c=16,a=[xt(a)]):c=8);r.children=a,r.shapeFlag|=c}function Bd(...r){const a={};for(let c=0;c<r.length;c++){const u=r[c];for(const f in u)if(f==="class")a.class!==u.class&&(a.class=it([a.class,u.class]));else if(f==="style")a.style=Sl([a.style,u.style]);else if(Dl(f)){const b=a[f],g=u[f];g&&b!==g&&!(Ve(b)&&b.includes(g))&&(a[f]=b?[].concat(b,g):g)}else f!==""&&(a[f]=u[f])}return a}function Vn(r,a,c,u=null){to(r,a,7,[c,u])}const lM=fC();let cM=0;function vC(r,a,c){const u=r.type,f=(a?a.appContext:r.appContext)||lM,b={uid:cM++,vnode:r,type:u,parent:a,appContext:f,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(f.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cC(u,f),emitsOptions:H0(u,f),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:u.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:c,suspenseId:c?c.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return b.ctx={_:b},b.root=a?a.root:b,b.emit=p5.bind(null,b),r.ce&&r.ce(b),b}let sn=null;const Nn=()=>sn||En,sr=r=>{sn=r,r.scope.on()},tr=()=>{sn&&sn.scope.off(),sn=null};function AC(r){return r.vnode.shapeFlag&4}let Ws=!1;function CC(r,a=!1){Ws=a;const{props:c,children:u}=r.vnode,f=AC(r);W5(r,c,f,a),Y5(r,u);const b=f?dM(r,a):void 0;return Ws=!1,b}function dM(r,a){const c=r.type;r.accessCache=Object.create(null),r.proxy=mo(new Proxy(r.ctx,wp));const{setup:u}=c;if(u){const f=r.setupContext=u.length>1?xC(r):null;sr(r),Wr();const b=Yo(u,r,0,[r.props,f]);if(Gr(),tr(),qp(b)){if(b.then(tr,tr),a)return b.then(g=>{xp(r,g,a)}).catch(g=>{Kr(g,r,0)});r.asyncDep=b}else xp(r,b,a)}else yC(r,a)}function xp(r,a,c){Xe(a)?r.type.__ssrInlineRender?r.ssrRender=a:r.render=a:Kt(a)&&(r.setupState=tg(a)),yC(r,c)}let Nd,Ep;function uM(r){Nd=r,Ep=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,F5))}}const hM=()=>!Nd;function yC(r,a,c){const u=r.type;if(!r.render){if(!a&&Nd&&!u.render){const f=u.template;if(f){const{isCustomElement:b,compilerOptions:g}=r.appContext.config,{delimiters:_,compilerOptions:k}=u,E=Gt(Gt({isCustomElement:b,delimiters:_},g),k);u.render=Nd(f,E)}}r.render=u.render||Mo,Ep&&Ep(r)}sr(r),Wr(),V5(r),Gr(),tr()}function fM(r){return new Proxy(r.attrs,{get(a,c){return oo(r,"get","$attrs"),a[c]}})}function xC(r){const a=u=>{r.exposed=u||{}};let c;return{get attrs(){return c||(c=fM(r))},slots:r.slots,emit:r.emit,expose:a}}function ou(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(tg(mo(r.exposed)),{get(a,c){if(c in a)return a[c];if(c in Id)return Id[c](r)}}))}const pM=/(?:^|[-_])(\w)/g,gM=r=>r.replace(pM,a=>a.toUpperCase()).replace(/[-_]/g,"");function Ld(r,a=!0){return Xe(r)?r.displayName||r.name:r.name||a&&r.__name}function EC(r,a,c=!1){let u=Ld(a);if(!u&&a.__file){const f=a.__file.match(/([^/\\]+)\.\w+$/);f&&(u=f[1])}if(!u&&r&&r.parent){const f=b=>{for(const g in b)if(b[g]===a)return g};u=f(r.components||r.parent.type.components)||f(r.appContext.components)}return u?gM(u):c?"App":"Anonymous"}function mM(r){return Xe(r)&&"__vccOpts"in r}const Me=(r,a)=>L0(r,a,Ws);function bM(){return null}function kM(){return null}function wM(r){}function _M(r,a){return null}function vM(){return SC().slots}function AM(){return SC().attrs}function SC(){const r=Nn();return r.setupContext||(r.setupContext=xC(r))}function CM(r,a){const c=Ve(r)?r.reduce((u,f)=>(u[f]={},u),{}):r;for(const u in a){const f=c[u];f?Ve(f)||Xe(f)?c[u]={type:f,default:a[u]}:f.default=a[u]:f===null&&(c[u]={default:a[u]})}return c}function yM(r,a){const c={};for(const u in r)a.includes(u)||Object.defineProperty(c,u,{enumerable:!0,get:()=>r[u]});return c}function xM(r){const a=Nn();let c=r();return tr(),qp(c)&&(c=c.catch(u=>{throw sr(a),u})),[c,()=>sr(a)]}function iu(r,a,c){const u=arguments.length;return u===2?Kt(a)&&!Ve(a)?rr(a)?Ce(r,null,[a]):Ce(r,a):Ce(r,null,a):(u>3?c=Array.prototype.slice.call(arguments,2):u===3&&rr(c)&&(c=[c]),Ce(r,a,c))}const DC=Symbol(""),EM=()=>{{const r=Po(DC);return r||O0("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),r}};function SM(){}function DM(r,a,c,u){const f=c[u];if(f&&TC(f,r))return f;const b=a();return b.memo=r.slice(),c[u]=b}function TC(r,a){const c=r.memo;if(c.length!=a.length)return!1;for(let u=0;u<c.length;u++)if($s(c[u],a[u]))return!1;return Hr>0&&$n&&$n.push(r),!0}const IC="3.2.37",TM={createComponentInstance:vC,setupComponent:CC,renderComponentRoot:wd,setCurrentRenderingInstance:Cl,isVNode:rr,normalizeVNode:Xn},IM=TM,MM=null,PM=null,BM="http://www.w3.org/2000/svg",Or=typeof document!="undefined"?document:null,wA=Or&&Or.createElement("template"),NM={insert:(r,a,c)=>{a.insertBefore(r,c||null)},remove:r=>{const a=r.parentNode;a&&a.removeChild(r)},createElement:(r,a,c,u)=>{const f=a?Or.createElementNS(BM,r):Or.createElement(r,c?{is:c}:void 0);return r==="select"&&u&&u.multiple!=null&&f.setAttribute("multiple",u.multiple),f},createText:r=>Or.createTextNode(r),createComment:r=>Or.createComment(r),setText:(r,a)=>{r.nodeValue=a},setElementText:(r,a)=>{r.textContent=a},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Or.querySelector(r),setScopeId(r,a){r.setAttribute(a,"")},cloneNode(r){const a=r.cloneNode(!0);return"_value"in r&&(a._value=r._value),a},insertStaticContent(r,a,c,u,f,b){const g=c?c.previousSibling:a.lastChild;if(f&&(f===b||f.nextSibling))for(;a.insertBefore(f.cloneNode(!0),c),!(f===b||!(f=f.nextSibling)););else{wA.innerHTML=u?`<svg>${r}</svg>`:r;const _=wA.content;if(u){const k=_.firstChild;for(;k.firstChild;)_.appendChild(k.firstChild);_.removeChild(k)}a.insertBefore(_,c)}return[g?g.nextSibling:a.firstChild,c?c.previousSibling:a.lastChild]}};function LM(r,a,c){const u=r._vtc;u&&(a=(a?[a,...u]:[...u]).join(" ")),a==null?r.removeAttribute("class"):c?r.setAttribute("class",a):r.className=a}function OM(r,a,c){const u=r.style,f=Ht(c);if(c&&!f){for(const b in c)Sp(u,b,c[b]);if(a&&!Ht(a))for(const b in a)c[b]==null&&Sp(u,b,"")}else{const b=u.display;f?a!==c&&(u.cssText=c):a&&r.removeAttribute("style"),"_vod"in r&&(u.display=b)}}const _A=/\s*!important$/;function Sp(r,a,c){if(Ve(c))c.forEach(u=>Sp(r,a,u));else if(c==null&&(c=""),a.startsWith("--"))r.setProperty(a,c);else{const u=RM(r,a);_A.test(c)?r.setProperty(Go(u),c.replace(_A,""),"important"):r[u]=c}}const vA=["Webkit","Moz","ms"],Xf={};function RM(r,a){const c=Xf[a];if(c)return c;let u=no(a);if(u!=="filter"&&u in r)return Xf[a]=u;u=Il(u);for(let f=0;f<vA.length;f++){const b=vA[f]+u;if(b in r)return Xf[a]=b}return a}const AA="http://www.w3.org/1999/xlink";function zM(r,a,c,u,f){if(u&&a.startsWith("xlink:"))c==null?r.removeAttributeNS(AA,a.slice(6,a.length)):r.setAttributeNS(AA,a,c);else{const b=cI(a);c==null||b&&!g0(c)?r.removeAttribute(a):r.setAttribute(a,b?"":c)}}function jM(r,a,c,u,f,b,g){if(a==="innerHTML"||a==="textContent"){u&&g(u,f,b),r[a]=c==null?"":c;return}if(a==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=c;const k=c==null?"":c;(r.value!==k||r.tagName==="OPTION")&&(r.value=k),c==null&&r.removeAttribute(a);return}let _=!1;if(c===""||c==null){const k=typeof r[a];k==="boolean"?c=g0(c):c==null&&k==="string"?(c="",_=!0):k==="number"&&(c=0,_=!0)}try{r[a]=c}catch{}_&&r.removeAttribute(a)}const[MC,FM]=(()=>{let r=Date.now,a=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(r=performance.now.bind(performance));const c=navigator.userAgent.match(/firefox\/(\d+)/i);a=!!(c&&Number(c[1])<=53)}return[r,a]})();let Dp=0;const VM=Promise.resolve(),$M=()=>{Dp=0},HM=()=>Dp||(VM.then($M),Dp=MC());function ki(r,a,c,u){r.addEventListener(a,c,u)}function UM(r,a,c,u){r.removeEventListener(a,c,u)}function qM(r,a,c,u,f=null){const b=r._vei||(r._vei={}),g=b[a];if(u&&g)g.value=u;else{const[_,k]=WM(a);if(u){const E=b[a]=GM(u,f);ki(r,_,E,k)}else g&&(UM(r,_,g,k),b[a]=void 0)}}const CA=/(?:Once|Passive|Capture)$/;function WM(r){let a;if(CA.test(r)){a={};let c;for(;c=r.match(CA);)r=r.slice(0,r.length-c[0].length),a[c[0].toLowerCase()]=!0}return[Go(r.slice(2)),a]}function GM(r,a){const c=u=>{const f=u.timeStamp||MC();(FM||f>=c.attached-1)&&to(KM(u,c.value),a,5,[u])};return c.value=r,c.attached=HM(),c}function KM(r,a){if(Ve(a)){const c=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{c.call(r),r._stopped=!0},a.map(u=>f=>!f._stopped&&u&&u(f))}else return a}const yA=/^on[a-z]/,YM=(r,a,c,u,f=!1,b,g,_,k)=>{a==="class"?LM(r,u,f):a==="style"?OM(r,c,u):Dl(a)?Hp(a)||qM(r,a,c,u,g):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):QM(r,a,u,f))?jM(r,a,u,b,g,_,k):(a==="true-value"?r._trueValue=u:a==="false-value"&&(r._falseValue=u),zM(r,a,u,f))};function QM(r,a,c,u){return u?!!(a==="innerHTML"||a==="textContent"||a in r&&yA.test(a)&&Xe(c)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&r.tagName==="INPUT"||a==="type"&&r.tagName==="TEXTAREA"||yA.test(a)&&Ht(c)?!1:a in r}function PC(r,a){const c=Yr(r);class u extends ru{constructor(b){super(c,b,a)}}return u.def=c,u}const ZM=r=>PC(r,WC),JM=typeof HTMLElement!="undefined"?HTMLElement:class{};class ru extends JM{constructor(a,c={},u){super(),this._def=a,this._props=c,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&u?u(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,Hn(()=>{this._connected||(Ip(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let u=0;u<this.attributes.length;u++)this._setAttr(this.attributes[u].name);new MutationObserver(u=>{for(const f of u)this._setAttr(f.attributeName)}).observe(this,{attributes:!0});const a=u=>{const{props:f,styles:b}=u,g=!Ve(f),_=f?g?Object.keys(f):f:[];let k;if(g)for(const E in this._props){const x=f[E];(x===Number||x&&x.type===Number)&&(this._props[E]=or(this._props[E]),(k||(k=Object.create(null)))[E]=!0)}this._numberProps=k;for(const E of Object.keys(this))E[0]!=="_"&&this._setProp(E,this[E],!0,!1);for(const E of _.map(no))Object.defineProperty(this,E,{get(){return this._getProp(E)},set(x){this._setProp(E,x)}});this._applyStyles(b),this._update()},c=this._def.__asyncLoader;c?c().then(a):a(this._def)}_setAttr(a){let c=this.getAttribute(a);this._numberProps&&this._numberProps[a]&&(c=or(c)),this._setProp(no(a),c,!1)}_getProp(a){return this._props[a]}_setProp(a,c,u=!0,f=!0){c!==this._props[a]&&(this._props[a]=c,f&&this._instance&&this._update(),u&&(c===!0?this.setAttribute(Go(a),""):typeof c=="string"||typeof c=="number"?this.setAttribute(Go(a),c+""):c||this.removeAttribute(Go(a))))}_update(){Ip(this._createVNode(),this.shadowRoot)}_createVNode(){const a=Ce(this._def,Gt({},this._props));return this._instance||(a.ce=c=>{this._instance=c,c.isCE=!0,c.emit=(f,...b)=>{this.dispatchEvent(new CustomEvent(f,{detail:b}))};let u=this;for(;u=u&&(u.parentNode||u.host);)if(u instanceof ru){c.parent=u._instance;break}}),a}_applyStyles(a){a&&a.forEach(c=>{const u=document.createElement("style");u.textContent=c,this.shadowRoot.appendChild(u)})}}function XM(r="$style"){{const a=Nn();if(!a)return bt;const c=a.type.__cssModules;if(!c)return bt;const u=c[r];return u||bt}}function eP(r){const a=Nn();if(!a)return;const c=()=>Tp(a.subTree,r(a.proxy));W0(c),Yt(()=>{const u=new MutationObserver(c);u.observe(a.subTree.el.parentNode,{childList:!0}),Nl(()=>u.disconnect())})}function Tp(r,a){if(r.shapeFlag&128){const c=r.suspense;r=c.activeBranch,c.pendingBranch&&!c.isHydrating&&c.effects.push(()=>{Tp(c.activeBranch,a)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)xA(r.el,a);else if(r.type===Je)r.children.forEach(c=>Tp(c,a));else if(r.type===Vr){let{el:c,anchor:u}=r;for(;c&&(xA(c,a),c!==u);)c=c.nextSibling}}function xA(r,a){if(r.nodeType===1){const c=r.style;for(const u in a)c.setProperty(`--${u}`,a[u])}}const Hi="transition",Xa="animation",pg=(r,{slots:a})=>iu(lg,NC(r),a);pg.displayName="Transition";const BC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tP=pg.props=Gt({},lg.props,BC),Br=(r,a=[])=>{Ve(r)?r.forEach(c=>c(...a)):r&&r(...a)},EA=r=>r?Ve(r)?r.some(a=>a.length>1):r.length>1:!1;function NC(r){const a={};for(const R in r)R in BC||(a[R]=r[R]);if(r.css===!1)return a;const{name:c="v",type:u,duration:f,enterFromClass:b=`${c}-enter-from`,enterActiveClass:g=`${c}-enter-active`,enterToClass:_=`${c}-enter-to`,appearFromClass:k=b,appearActiveClass:E=g,appearToClass:x=_,leaveFromClass:D=`${c}-leave-from`,leaveActiveClass:v=`${c}-leave-active`,leaveToClass:I=`${c}-leave-to`}=r,$=nP(f),le=$&&$[0],G=$&&$[1],{onBeforeEnter:H,onEnter:N,onEnterCancelled:W,onLeave:te,onLeaveCancelled:ie,onBeforeAppear:ee=H,onAppear:V=N,onAppearCancelled:q=W}=a,Z=(R,xe,me)=>{Ki(R,xe?x:_),Ki(R,xe?E:g),me&&me()},K=(R,xe)=>{R._isLeaving=!1,Ki(R,D),Ki(R,I),Ki(R,v),xe&&xe()},oe=R=>(xe,me)=>{const Ie=R?V:N,Re=()=>Z(xe,R,me);Br(Ie,[xe,Re]),SA(()=>{Ki(xe,R?k:b),mi(xe,R?x:_),EA(Ie)||DA(xe,u,le,Re)})};return Gt(a,{onBeforeEnter(R){Br(H,[R]),mi(R,b),mi(R,g)},onBeforeAppear(R){Br(ee,[R]),mi(R,k),mi(R,E)},onEnter:oe(!1),onAppear:oe(!0),onLeave(R,xe){R._isLeaving=!0;const me=()=>K(R,xe);mi(R,D),OC(),mi(R,v),SA(()=>{!R._isLeaving||(Ki(R,D),mi(R,I),EA(te)||DA(R,u,G,me))}),Br(te,[R,me])},onEnterCancelled(R){Z(R,!1),Br(W,[R])},onAppearCancelled(R){Z(R,!0),Br(q,[R])},onLeaveCancelled(R){K(R),Br(ie,[R])}})}function nP(r){if(r==null)return null;if(Kt(r))return[ep(r.enter),ep(r.leave)];{const a=ep(r);return[a,a]}}function ep(r){return or(r)}function mi(r,a){a.split(/\s+/).forEach(c=>c&&r.classList.add(c)),(r._vtc||(r._vtc=new Set)).add(a)}function Ki(r,a){a.split(/\s+/).forEach(u=>u&&r.classList.remove(u));const{_vtc:c}=r;c&&(c.delete(a),c.size||(r._vtc=void 0))}function SA(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let oP=0;function DA(r,a,c,u){const f=r._endId=++oP,b=()=>{f===r._endId&&u()};if(c)return setTimeout(b,c);const{type:g,timeout:_,propCount:k}=LC(r,a);if(!g)return u();const E=g+"end";let x=0;const D=()=>{r.removeEventListener(E,v),b()},v=I=>{I.target===r&&++x>=k&&D()};setTimeout(()=>{x<k&&D()},_+1),r.addEventListener(E,v)}function LC(r,a){const c=window.getComputedStyle(r),u=$=>(c[$]||"").split(", "),f=u(Hi+"Delay"),b=u(Hi+"Duration"),g=TA(f,b),_=u(Xa+"Delay"),k=u(Xa+"Duration"),E=TA(_,k);let x=null,D=0,v=0;a===Hi?g>0&&(x=Hi,D=g,v=b.length):a===Xa?E>0&&(x=Xa,D=E,v=k.length):(D=Math.max(g,E),x=D>0?g>E?Hi:Xa:null,v=x?x===Hi?b.length:k.length:0);const I=x===Hi&&/\b(transform|all)(,|$)/.test(c[Hi+"Property"]);return{type:x,timeout:D,propCount:v,hasTransform:I}}function TA(r,a){for(;r.length<a.length;)r=r.concat(r);return Math.max(...a.map((c,u)=>IA(c)+IA(r[u])))}function IA(r){return Number(r.slice(0,-1).replace(",","."))*1e3}function OC(){return document.body.offsetHeight}const RC=new WeakMap,zC=new WeakMap,iP={name:"TransitionGroup",props:Gt({},tP,{tag:String,moveClass:String}),setup(r,{slots:a}){const c=Nn(),u=ag();let f,b;return eu(()=>{if(!f.length)return;const g=r.moveClass||`${r.name||"v"}-move`;if(!cP(f[0].el,c.vnode.el,g))return;f.forEach(sP),f.forEach(aP);const _=f.filter(lP);OC(),_.forEach(k=>{const E=k.el,x=E.style;mi(E,g),x.transform=x.webkitTransform=x.transitionDuration="";const D=E._moveCb=v=>{v&&v.target!==E||(!v||/transform$/.test(v.propertyName))&&(E.removeEventListener("transitionend",D),E._moveCb=null,Ki(E,g))};E.addEventListener("transitionend",D)})}),()=>{const g=ct(r),_=NC(g);let k=g.tag||Je;f=b,b=a.default?Jd(a.default()):[];for(let E=0;E<b.length;E++){const x=b[E];x.key!=null&&$r(x,Us(x,_,u,c))}if(f)for(let E=0;E<f.length;E++){const x=f[E];$r(x,Us(x,_,u,c)),RC.set(x,x.el.getBoundingClientRect())}return Ce(k,null,b)}}},rP=iP;function sP(r){const a=r.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function aP(r){zC.set(r,r.el.getBoundingClientRect())}function lP(r){const a=RC.get(r),c=zC.get(r),u=a.left-c.left,f=a.top-c.top;if(u||f){const b=r.el.style;return b.transform=b.webkitTransform=`translate(${u}px,${f}px)`,b.transitionDuration="0s",r}}function cP(r,a,c){const u=r.cloneNode();r._vtc&&r._vtc.forEach(g=>{g.split(/\s+/).forEach(_=>_&&u.classList.remove(_))}),c.split(/\s+/).forEach(g=>g&&u.classList.add(g)),u.style.display="none";const f=a.nodeType===1?a:a.parentNode;f.appendChild(u);const{hasTransform:b}=LC(u);return f.removeChild(u),b}const ar=r=>{const a=r.props["onUpdate:modelValue"]||!1;return Ve(a)?c=>js(a,c):a};function dP(r){r.target.composing=!0}function MA(r){const a=r.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const yt={created(r,{modifiers:{lazy:a,trim:c,number:u}},f){r._assign=ar(f);const b=u||f.props&&f.props.type==="number";ki(r,a?"change":"input",g=>{if(g.target.composing)return;let _=r.value;c&&(_=_.trim()),b&&(_=or(_)),r._assign(_)}),c&&ki(r,"change",()=>{r.value=r.value.trim()}),a||(ki(r,"compositionstart",dP),ki(r,"compositionend",MA),ki(r,"change",MA))},mounted(r,{value:a}){r.value=a==null?"":a},beforeUpdate(r,{value:a,modifiers:{lazy:c,trim:u,number:f}},b){if(r._assign=ar(b),r.composing||document.activeElement===r&&r.type!=="range"&&(c||u&&r.value.trim()===a||(f||r.type==="number")&&or(r.value)===a))return;const g=a==null?"":a;r.value!==g&&(r.value=g)}},gg={deep:!0,created(r,a,c){r._assign=ar(c),ki(r,"change",()=>{const u=r._modelValue,f=Gs(r),b=r.checked,g=r._assign;if(Ve(u)){const _=$d(u,f),k=_!==-1;if(b&&!k)g(u.concat(f));else if(!b&&k){const E=[...u];E.splice(_,1),g(E)}}else if(qr(u)){const _=new Set(u);b?_.add(f):_.delete(f),g(_)}else g(jC(r,b))})},mounted:PA,beforeUpdate(r,a,c){r._assign=ar(c),PA(r,a,c)}};function PA(r,{value:a,oldValue:c},u){r._modelValue=a,Ve(a)?r.checked=$d(a,u.props.value)>-1:qr(a)?r.checked=a.has(u.props.value):a!==c&&(r.checked=nr(a,jC(r,!0)))}const mg={created(r,{value:a},c){r.checked=nr(a,c.props.value),r._assign=ar(c),ki(r,"change",()=>{r._assign(Gs(r))})},beforeUpdate(r,{value:a,oldValue:c},u){r._assign=ar(u),a!==c&&(r.checked=nr(a,u.props.value))}},ea={deep:!0,created(r,{value:a,modifiers:{number:c}},u){const f=qr(a);ki(r,"change",()=>{const b=Array.prototype.filter.call(r.options,g=>g.selected).map(g=>c?or(Gs(g)):Gs(g));r._assign(r.multiple?f?new Set(b):b:b[0])}),r._assign=ar(u)},mounted(r,{value:a}){BA(r,a)},beforeUpdate(r,a,c){r._assign=ar(c)},updated(r,{value:a}){BA(r,a)}};function BA(r,a){const c=r.multiple;if(!(c&&!Ve(a)&&!qr(a))){for(let u=0,f=r.options.length;u<f;u++){const b=r.options[u],g=Gs(b);if(c)Ve(a)?b.selected=$d(a,g)>-1:b.selected=a.has(g);else if(nr(Gs(b),a)){r.selectedIndex!==u&&(r.selectedIndex=u);return}}!c&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function Gs(r){return"_value"in r?r._value:r.value}function jC(r,a){const c=a?"_trueValue":"_falseValue";return c in r?r[c]:a}const FC={created(r,a,c){ud(r,a,c,null,"created")},mounted(r,a,c){ud(r,a,c,null,"mounted")},beforeUpdate(r,a,c,u){ud(r,a,c,u,"beforeUpdate")},updated(r,a,c,u){ud(r,a,c,u,"updated")}};function VC(r,a){switch(r){case"SELECT":return ea;case"TEXTAREA":return yt;default:switch(a){case"checkbox":return gg;case"radio":return mg;default:return yt}}}function ud(r,a,c,u,f){const g=VC(r.tagName,c.props&&c.props.type)[f];g&&g(r,a,c,u)}function uP(){yt.getSSRProps=({value:r})=>({value:r}),mg.getSSRProps=({value:r},a)=>{if(a.props&&nr(a.props.value,r))return{checked:!0}},gg.getSSRProps=({value:r},a)=>{if(Ve(r)){if(a.props&&$d(r,a.props.value)>-1)return{checked:!0}}else if(qr(r)){if(a.props&&r.has(a.props.value))return{checked:!0}}else if(r)return{checked:!0}},FC.getSSRProps=(r,a)=>{if(typeof a.type!="string")return;const c=VC(a.type.toUpperCase(),a.props&&a.props.type);if(c.getSSRProps)return c.getSSRProps(r,a)}}const hP=["ctrl","shift","alt","meta"],fP={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,a)=>hP.some(c=>r[`${c}Key`]&&!a.includes(c))},bo=(r,a)=>(c,...u)=>{for(let f=0;f<a.length;f++){const b=fP[a[f]];if(b&&b(c,a))return}return r(c,...u)},pP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gP=(r,a)=>c=>{if(!("key"in c))return;const u=Go(c.key);if(a.some(f=>f===u||pP[f]===u))return r(c)},$C={beforeMount(r,{value:a},{transition:c}){r._vod=r.style.display==="none"?"":r.style.display,c&&a?c.beforeEnter(r):el(r,a)},mounted(r,{value:a},{transition:c}){c&&a&&c.enter(r)},updated(r,{value:a,oldValue:c},{transition:u}){!a!=!c&&(u?a?(u.beforeEnter(r),el(r,!0),u.enter(r)):u.leave(r,()=>{el(r,!1)}):el(r,a))},beforeUnmount(r,{value:a}){el(r,a)}};function el(r,a){r.style.display=a?r._vod:"none"}function mP(){$C.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const HC=Gt({patchProp:YM},NM);let bl,NA=!1;function UC(){return bl||(bl=pC(HC))}function qC(){return bl=NA?bl:gC(HC),NA=!0,bl}const Ip=(...r)=>{UC().render(...r)},WC=(...r)=>{qC().hydrate(...r)},GC=(...r)=>{const a=UC().createApp(...r),{mount:c}=a;return a.mount=u=>{const f=KC(u);if(!f)return;const b=a._component;!Xe(b)&&!b.render&&!b.template&&(b.template=f.innerHTML),f.innerHTML="";const g=c(f,!1,f instanceof SVGElement);return f instanceof Element&&(f.removeAttribute("v-cloak"),f.setAttribute("data-v-app","")),g},a},bP=(...r)=>{const a=qC().createApp(...r),{mount:c}=a;return a.mount=u=>{const f=KC(u);if(f)return c(f,!0,f instanceof SVGElement)},a};function KC(r){return Ht(r)?document.querySelector(r):r}let LA=!1;const kP=()=>{LA||(LA=!0,uP(),mP())},wP=()=>{};var _P=Object.freeze(Object.defineProperty({__proto__:null,compile:wP,EffectScope:Gp,ReactiveEffect:Ml,customRef:o5,effect:EI,effectScope:Kp,getCurrentScope:AI,isProxy:Jp,isReactive:Ko,isReadonly:Hs,isRef:jt,isShallow:Sd,markRaw:mo,onScopeDispose:CI,proxyRefs:tg,reactive:Dn,readonly:Zp,ref:mt,shallowReactive:P0,shallowReadonly:JI,shallowRef:B0,stop:SI,toRaw:ct,toRef:dl,toRefs:Bn,triggerRef:e5,unref:Y,camelize:no,capitalize:Il,normalizeClass:it,normalizeProps:fI,normalizeStyle:Sl,toDisplayString:Le,toHandlerKey:cl,BaseTransition:lg,Comment:Sn,Fragment:Je,KeepAlive:N5,Static:Vr,Suspense:C5,Teleport:iM,Text:qs,callWithAsyncErrorHandling:to,callWithErrorHandling:Yo,cloneVNode:Zo,compatUtils:PM,computed:Me,createBlock:wi,createCommentVNode:ot,createElementBlock:we,createElementVNode:S,createHydrationRenderer:gC,createPropsRestProxy:yM,createRenderer:pC,createSlots:z5,createStaticVNode:aM,createTextVNode:xt,createVNode:Ce,defineAsyncComponent:P5,defineComponent:Yr,defineEmits:kM,defineExpose:wM,defineProps:bM,get devtools(){return Ns},getCurrentInstance:Nn,getTransitionRawChildren:Jd,guardReactiveProps:_C,h:iu,handleError:Kr,initCustomFormatter:SM,inject:Po,isMemoSame:TC,isRuntimeOnly:hM,isVNode:rr,mergeDefaults:CM,mergeProps:Bd,nextTick:Hn,onActivated:Y0,onBeforeMount:J0,onBeforeUnmount:tu,onBeforeUpdate:X0,onDeactivated:Q0,onErrorCaptured:oC,onMounted:Yt,onRenderTracked:nC,onRenderTriggered:tC,onServerPrefetch:eC,onUnmounted:Nl,onUpdated:eu,openBlock:pe,popScopeId:m5,provide:pl,pushScopeId:g5,queuePostFlushCb:ig,registerRuntimeCompiler:uM,renderList:$t,renderSlot:Cn,resolveComponent:lr,resolveDirective:R5,resolveDynamicComponent:Vs,resolveFilter:MM,resolveTransitionHooks:Us,setBlockTracking:yp,setDevtoolsHook:$0,setTransitionHooks:$r,ssrContextKey:DC,ssrUtils:IM,toHandlers:j5,transformVNodeArgs:rM,useAttrs:AM,useSSRContext:EM,useSlots:vM,useTransitionState:ag,version:IC,warn:O0,watch:rn,watchEffect:D5,watchPostEffect:W0,watchSyncEffect:T5,withAsyncContext:xM,withCtx:yn,withDefaults:_M,withDirectives:kt,withMemo:DM,withScopeId:b5,Transition:pg,TransitionGroup:rP,VueElement:ru,createApp:GC,createSSRApp:bP,defineCustomElement:PC,defineSSRCustomElement:ZM,hydrate:WC,initDirectivesForSSR:kP,render:Ip,useCssModule:XM,useCssVars:eP,vModelCheckbox:gg,vModelDynamic:FC,vModelRadio:mg,vModelSelect:ea,vModelText:yt,vShow:$C,withKeys:gP,withModifiers:bo},Symbol.toStringTag,{value:"Module"})),vP=!1;function hd(r,a,c){return Array.isArray(r)?(r.length=Math.max(r.length,a),r.splice(a,1,c),c):(r[a]=c,c)}function tp(r,a){if(Array.isArray(r)){r.splice(a,1);return}delete r[a]}function AP(){return YC().__VUE_DEVTOOLS_GLOBAL_HOOK__}function YC(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const CP=typeof Proxy=="function",yP="devtools-plugin:setup",xP="plugin:settings:set";let Ss,Mp;function EP(){var r;return Ss!==void 0||(typeof window!="undefined"&&window.performance?(Ss=!0,Mp=window.performance):typeof global!="undefined"&&((r=global.perf_hooks)===null||r===void 0?void 0:r.performance)?(Ss=!0,Mp=global.perf_hooks.performance):Ss=!1),Ss}function SP(){return EP()?Mp.now():Date.now()}class DP{constructor(a,c){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=a,this.hook=c;const u={};if(a.settings)for(const g in a.settings){const _=a.settings[g];u[g]=_.defaultValue}const f=`__vue-devtools-plugin-settings__${a.id}`;let b=Object.assign({},u);try{const g=localStorage.getItem(f),_=JSON.parse(g);Object.assign(b,_)}catch{}this.fallbacks={getSettings(){return b},setSettings(g){try{localStorage.setItem(f,JSON.stringify(g))}catch{}b=g},now(){return SP()}},c&&c.on(xP,(g,_)=>{g===this.plugin.id&&this.fallbacks.setSettings(_)}),this.proxiedOn=new Proxy({},{get:(g,_)=>this.target?this.target.on[_]:(...k)=>{this.onQueue.push({method:_,args:k})}}),this.proxiedTarget=new Proxy({},{get:(g,_)=>this.target?this.target[_]:_==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(_)?(...k)=>(this.targetQueue.push({method:_,args:k,resolve:()=>{}}),this.fallbacks[_](...k)):(...k)=>new Promise(E=>{this.targetQueue.push({method:_,args:k,resolve:E})})})}async setRealTarget(a){this.target=a;for(const c of this.onQueue)this.target.on[c.method](...c.args);for(const c of this.targetQueue)c.resolve(await this.target[c.method](...c.args))}}function QC(r,a){const c=r,u=YC(),f=AP(),b=CP&&c.enableEarlyProxy;if(f&&(u.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!b))f.emit(yP,r,a);else{const g=b?new DP(c,f):null;(u.__VUE_DEVTOOLS_PLUGINS__=u.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:c,setupFn:a,proxy:g}),g&&a(g.proxiedTarget)}}/*!
  * pinia v2.0.18
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Pp;const xl=r=>Pp=r,ZC=Symbol("pinia");function Ur(r){return r&&typeof r=="object"&&Object.prototype.toString.call(r)==="[object Object]"&&typeof r.toJSON!="function"}var Qo;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(Qo||(Qo={}));const Ji=typeof window!="undefined",OA=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function TP(r,{autoBom:a=!1}={}){return a&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob([String.fromCharCode(65279),r],{type:r.type}):r}function bg(r,a,c){const u=new XMLHttpRequest;u.open("GET",r),u.responseType="blob",u.onload=function(){ey(u.response,a,c)},u.onerror=function(){console.error("could not download file")},u.send()}function JC(r){const a=new XMLHttpRequest;a.open("HEAD",r,!1);try{a.send()}catch{}return a.status>=200&&a.status<=299}function vd(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{const c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(c)}}const Ad=typeof navigator=="object"?navigator:{userAgent:""},XC=(()=>/Macintosh/.test(Ad.userAgent)&&/AppleWebKit/.test(Ad.userAgent)&&!/Safari/.test(Ad.userAgent))(),ey=Ji?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!XC?IP:"msSaveOrOpenBlob"in Ad?MP:PP:()=>{};function IP(r,a="download",c){const u=document.createElement("a");u.download=a,u.rel="noopener",typeof r=="string"?(u.href=r,u.origin!==location.origin?JC(u.href)?bg(r,a,c):(u.target="_blank",vd(u)):vd(u)):(u.href=URL.createObjectURL(r),setTimeout(function(){URL.revokeObjectURL(u.href)},4e4),setTimeout(function(){vd(u)},0))}function MP(r,a="download",c){if(typeof r=="string")if(JC(r))bg(r,a,c);else{const u=document.createElement("a");u.href=r,u.target="_blank",setTimeout(function(){vd(u)})}else navigator.msSaveOrOpenBlob(TP(r,c),a)}function PP(r,a,c,u){if(u=u||open("","_blank"),u&&(u.document.title=u.document.body.innerText="downloading..."),typeof r=="string")return bg(r,a,c);const f=r.type==="application/octet-stream",b=/constructor/i.test(String(OA.HTMLElement))||"safari"in OA,g=/CriOS\/[\d]+/.test(navigator.userAgent);if((g||f&&b||XC)&&typeof FileReader!="undefined"){const _=new FileReader;_.onloadend=function(){let k=_.result;if(typeof k!="string")throw u=null,new Error("Wrong reader.result type");k=g?k:k.replace(/^data:[^;]*;/,"data:attachment/file;"),u?u.location.href=k:location.assign(k),u=null},_.readAsDataURL(r)}else{const _=URL.createObjectURL(r);u?u.location.assign(_):location.href=_,u=null,setTimeout(function(){URL.revokeObjectURL(_)},4e4)}}function pn(r,a){const c="\u{1F34D} "+r;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(c,a):a==="error"?console.error(c):a==="warn"?console.warn(c):console.log(c)}function kg(r){return"_a"in r&&"install"in r}function ty(){if(!("clipboard"in navigator))return pn("Your browser doesn't support the Clipboard API","error"),!0}function ny(r){return r instanceof Error&&r.message.toLowerCase().includes("document is not focused")?(pn('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function BP(r){if(!ty())try{await navigator.clipboard.writeText(JSON.stringify(r.state.value)),pn("Global state copied to clipboard.")}catch(a){if(ny(a))return;pn("Failed to serialize the state. Check the console for more details.","error"),console.error(a)}}async function NP(r){if(!ty())try{r.state.value=JSON.parse(await navigator.clipboard.readText()),pn("Global state pasted from clipboard.")}catch(a){if(ny(a))return;pn("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(a)}}async function LP(r){try{ey(new Blob([JSON.stringify(r.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(a){pn("Failed to export the state as JSON. Check the console for more details.","error"),console.error(a)}}let pi;function OP(){pi||(pi=document.createElement("input"),pi.type="file",pi.accept=".json");function r(){return new Promise((a,c)=>{pi.onchange=async()=>{const u=pi.files;if(!u)return a(null);const f=u.item(0);return a(f?{text:await f.text(),file:f}:null)},pi.oncancel=()=>a(null),pi.onerror=c,pi.click()})}return r}async function RP(r){try{const c=await(await OP())();if(!c)return;const{text:u,file:f}=c;r.state.value=JSON.parse(u),pn(`Global state imported from "${f.name}".`)}catch(a){pn("Failed to export the state as JSON. Check the console for more details.","error"),console.error(a)}}function Do(r){return{_custom:{display:r}}}const oy="\u{1F34D} Pinia (root)",Bp="_root";function zP(r){return kg(r)?{id:Bp,label:oy}:{id:r.$id,label:r.$id}}function jP(r){if(kg(r)){const c=Array.from(r._s.keys()),u=r._s;return{state:c.map(b=>({editable:!0,key:b,value:r.state.value[b]})),getters:c.filter(b=>u.get(b)._getters).map(b=>{const g=u.get(b);return{editable:!1,key:b,value:g._getters.reduce((_,k)=>(_[k]=g[k],_),{})}})}}const a={state:Object.keys(r.$state).map(c=>({editable:!0,key:c,value:r.$state[c]}))};return r._getters&&r._getters.length&&(a.getters=r._getters.map(c=>({editable:!1,key:c,value:r[c]}))),r._customProperties.size&&(a.customProperties=Array.from(r._customProperties).map(c=>({editable:!0,key:c,value:r[c]}))),a}function FP(r){return r?Array.isArray(r)?r.reduce((a,c)=>(a.keys.push(c.key),a.operations.push(c.type),a.oldValue[c.key]=c.oldValue,a.newValue[c.key]=c.newValue,a),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:Do(r.type),key:Do(r.key),oldValue:r.oldValue,newValue:r.newValue}:{}}function VP(r){switch(r){case Qo.direct:return"mutation";case Qo.patchFunction:return"$patch";case Qo.patchObject:return"$patch";default:return"unknown"}}let Os=!0;const Cd=[],Lr="pinia:mutations",xn="pinia",Od=r=>"\u{1F34D} "+r;function $P(r,a){QC({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Cd,app:r},c=>{typeof c.now!="function"&&pn("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),c.addTimelineLayer({id:Lr,label:"Pinia \u{1F34D}",color:15064968}),c.addInspector({id:xn,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{BP(a)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await NP(a),c.sendInspectorTree(xn),c.sendInspectorState(xn)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{LP(a)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await RP(a),c.sendInspectorTree(xn),c.sendInspectorState(xn)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:u=>{const f=a._s.get(u);f?f._isOptionsAPI?(f.$reset(),pn(`Store "${u}" reset.`)):pn(`Cannot reset "${u}" store because it's a setup store.`,"warn"):pn(`Cannot reset "${u}" store because it wasn't found.`,"warn")}}]}),c.on.inspectComponent((u,f)=>{const b=u.componentInstance&&u.componentInstance.proxy;if(b&&b._pStores){const g=u.componentInstance.proxy._pStores;Object.values(g).forEach(_=>{u.instanceData.state.push({type:Od(_.$id),key:"state",editable:!0,value:_._isOptionsAPI?{_custom:{value:ct(_.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>_.$reset()}]}}:Object.keys(_.$state).reduce((k,E)=>(k[E]=_.$state[E],k),{})}),_._getters&&_._getters.length&&u.instanceData.state.push({type:Od(_.$id),key:"getters",editable:!1,value:_._getters.reduce((k,E)=>{try{k[E]=_[E]}catch(x){k[E]=x}return k},{})})})}}),c.on.getInspectorTree(u=>{if(u.app===r&&u.inspectorId===xn){let f=[a];f=f.concat(Array.from(a._s.values())),u.rootNodes=(u.filter?f.filter(b=>"$id"in b?b.$id.toLowerCase().includes(u.filter.toLowerCase()):oy.toLowerCase().includes(u.filter.toLowerCase())):f).map(zP)}}),c.on.getInspectorState(u=>{if(u.app===r&&u.inspectorId===xn){const f=u.nodeId===Bp?a:a._s.get(u.nodeId);if(!f)return;f&&(u.state=jP(f))}}),c.on.editInspectorState((u,f)=>{if(u.app===r&&u.inspectorId===xn){const b=u.nodeId===Bp?a:a._s.get(u.nodeId);if(!b)return pn(`store "${u.nodeId}" not found`,"error");const{path:g}=u;kg(b)?g.unshift("state"):(g.length!==1||!b._customProperties.has(g[0])||g[0]in b.$state)&&g.unshift("$state"),Os=!1,u.set(b,g,u.state.value),Os=!0}}),c.on.editComponentState(u=>{if(u.type.startsWith("\u{1F34D}")){const f=u.type.replace(/^🍍\s*/,""),b=a._s.get(f);if(!b)return pn(`store "${f}" not found`,"error");const{path:g}=u;if(g[0]!=="state")return pn(`Invalid path for store "${f}":
${g}
Only state can be modified.`);g[0]="$state",Os=!1,u.set(b,g,u.state.value),Os=!0}})})}function HP(r,a){Cd.includes(Od(a.$id))||Cd.push(Od(a.$id)),QC({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:Cd,app:r,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},c=>{const u=typeof c.now=="function"?c.now.bind(c):Date.now;a.$onAction(({after:g,onError:_,name:k,args:E})=>{const x=iy++;c.addTimelineEvent({layerId:Lr,event:{time:u(),title:"\u{1F6EB} "+k,subtitle:"start",data:{store:Do(a.$id),action:Do(k),args:E},groupId:x}}),g(D=>{Rr=void 0,c.addTimelineEvent({layerId:Lr,event:{time:u(),title:"\u{1F6EC} "+k,subtitle:"end",data:{store:Do(a.$id),action:Do(k),args:E,result:D},groupId:x}})}),_(D=>{Rr=void 0,c.addTimelineEvent({layerId:Lr,event:{time:u(),logType:"error",title:"\u{1F4A5} "+k,subtitle:"end",data:{store:Do(a.$id),action:Do(k),args:E,error:D},groupId:x}})})},!0),a._customProperties.forEach(g=>{rn(()=>Y(a[g]),(_,k)=>{c.notifyComponentUpdate(),c.sendInspectorState(xn),Os&&c.addTimelineEvent({layerId:Lr,event:{time:u(),title:"Change",subtitle:g,data:{newValue:_,oldValue:k},groupId:Rr}})},{deep:!0})}),a.$subscribe(({events:g,type:_},k)=>{if(c.notifyComponentUpdate(),c.sendInspectorState(xn),!Os)return;const E={time:u(),title:VP(_),data:{store:Do(a.$id),...FP(g)},groupId:Rr};Rr=void 0,_===Qo.patchFunction?E.subtitle="\u2935\uFE0F":_===Qo.patchObject?E.subtitle="\u{1F9E9}":g&&!Array.isArray(g)&&(E.subtitle=g.type),g&&(E.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:g}}),c.addTimelineEvent({layerId:Lr,event:E})},{detached:!0,flush:"sync"});const f=a._hotUpdate;a._hotUpdate=mo(g=>{f(g),c.addTimelineEvent({layerId:Lr,event:{time:u(),title:"\u{1F525} "+a.$id,subtitle:"HMR update",data:{store:Do(a.$id),info:Do("HMR update")}}}),c.notifyComponentUpdate(),c.sendInspectorTree(xn),c.sendInspectorState(xn)});const{$dispose:b}=a;a.$dispose=()=>{b(),c.notifyComponentUpdate(),c.sendInspectorTree(xn),c.sendInspectorState(xn),c.getSettings().logStoreChanges&&pn(`Disposed "${a.$id}" store \u{1F5D1}`)},c.notifyComponentUpdate(),c.sendInspectorTree(xn),c.sendInspectorState(xn),c.getSettings().logStoreChanges&&pn(`"${a.$id}" store installed \u{1F195}`)})}let iy=0,Rr;function RA(r,a){const c=a.reduce((u,f)=>(u[f]=ct(r)[f],u),{});for(const u in c)r[u]=function(){const f=iy,b=new Proxy(r,{get(...g){return Rr=f,Reflect.get(...g)},set(...g){return Rr=f,Reflect.set(...g)}});return c[u].apply(b,arguments)}}function UP({app:r,store:a,options:c}){if(!a.$id.startsWith("__hot:")){if(c.state&&(a._isOptionsAPI=!0),typeof c.state=="function"){RA(a,Object.keys(c.actions));const u=a._hotUpdate;ct(a)._hotUpdate=function(f){u.apply(this,arguments),RA(a,Object.keys(f._hmrPayload.actions))}}HP(r,a)}}function qP(){const r=Kp(!0),a=r.run(()=>mt({}));let c=[],u=[];const f=mo({install(b){xl(f),f._a=b,b.provide(ZC,f),b.config.globalProperties.$pinia=f,Ji&&$P(b,f),u.forEach(g=>c.push(g)),u=[]},use(b){return!this._a&&!vP?u.push(b):c.push(b),this},_p:c,_a:null,_e:r,_s:new Map,state:a});return Ji&&!0&&typeof Proxy!="undefined"&&f.use(UP),f}function ry(r,a){for(const c in a){const u=a[c];if(!(c in r))continue;const f=r[c];Ur(f)&&Ur(u)&&!jt(u)&&!Ko(u)?r[c]=ry(f,u):r[c]=u}return r}const WP=()=>{};function zA(r,a,c,u=WP){r.push(a);const f=()=>{const b=r.indexOf(a);b>-1&&(r.splice(b,1),u())};return!c&&Nn()&&Nl(f),f}function Ds(r,...a){r.slice().forEach(c=>{c(...a)})}function Np(r,a){for(const c in a){if(!a.hasOwnProperty(c))continue;const u=a[c],f=r[c];Ur(f)&&Ur(u)&&r.hasOwnProperty(c)&&!jt(u)&&!Ko(u)?r[c]=Np(f,u):r[c]=u}return r}const GP=Symbol("pinia:skipHydration");function KP(r){return!Ur(r)||!r.hasOwnProperty(GP)}const{assign:To}=Object;function jA(r){return!!(jt(r)&&r.effect)}function FA(r,a,c,u){const{state:f,actions:b,getters:g}=a,_=c.state.value[r];let k;function E(){!_&&!u&&(c.state.value[r]=f?f():{});const x=Bn(u?mt(f?f():{}).value:c.state.value[r]);return To(x,b,Object.keys(g||{}).reduce((D,v)=>(v in x&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${v}" in store "${r}".`),D[v]=mo(Me(()=>{xl(c);const I=c._s.get(r);return g[v].call(I,I)})),D),{}))}return k=Lp(r,E,a,c,u,!0),k.$reset=function(){const D=f?f():{};this.$patch(v=>{To(v,D)})},k}function Lp(r,a,c={},u,f,b){let g;const _=To({actions:{}},c);if(!u._e.active)throw new Error("Pinia destroyed");const k={deep:!0};k.onTrigger=Z=>{E?I=Z:E==!1&&!V._hotUpdating&&(Array.isArray(I)?I.push(Z):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let E,x,D=mo([]),v=mo([]),I;const $=u.state.value[r];!b&&!$&&!f&&(u.state.value[r]={});const le=mt({});let G;function H(Z){let K;E=x=!1,I=[],typeof Z=="function"?(Z(u.state.value[r]),K={type:Qo.patchFunction,storeId:r,events:I}):(Np(u.state.value[r],Z),K={type:Qo.patchObject,payload:Z,storeId:r,events:I});const oe=G=Symbol();Hn().then(()=>{G===oe&&(E=!0)}),x=!0,Ds(D,K,u.state.value[r])}const N=()=>{throw new Error(`\u{1F34D}: Store "${r}" is built using the setup syntax and does not implement $reset().`)};function W(){g.stop(),D=[],v=[],u._s.delete(r)}function te(Z,K){return function(){xl(u);const oe=Array.from(arguments),R=[],xe=[];function me(Se){R.push(Se)}function Ie(Se){xe.push(Se)}Ds(v,{args:oe,name:Z,store:V,after:me,onError:Ie});let Re;try{Re=K.apply(this&&this.$id===r?this:V,oe)}catch(Se){throw Ds(xe,Se),Se}return Re instanceof Promise?Re.then(Se=>(Ds(R,Se),Se)).catch(Se=>(Ds(xe,Se),Promise.reject(Se))):(Ds(R,Re),Re)}}const ie=mo({actions:{},getters:{},state:[],hotState:le}),ee={_p:u,$id:r,$onAction:zA.bind(null,v),$patch:H,$reset:N,$subscribe(Z,K={}){const oe=zA(D,Z,K.detached,()=>R()),R=g.run(()=>rn(()=>u.state.value[r],xe=>{(K.flush==="sync"?x:E)&&Z({storeId:r,type:Qo.direct,events:I},xe)},To({},k,K)));return oe},$dispose:W},V=Dn(To(Ji?{_customProperties:mo(new Set),_hmrPayload:ie}:{},ee));u._s.set(r,V);const q=u._e.run(()=>(g=Kp(),g.run(()=>a())));for(const Z in q){const K=q[Z];if(jt(K)&&!jA(K)||Ko(K))f?hd(le.value,Z,dl(q,Z)):b||($&&KP(K)&&(jt(K)?K.value=$[Z]:Np(K,$[Z])),u.state.value[r][Z]=K),ie.state.push(Z);else if(typeof K=="function"){const oe=f?K:te(Z,K);q[Z]=oe,ie.actions[Z]=K,_.actions[Z]=K}else jA(K)&&(ie.getters[Z]=b?c.getters[Z]:K,Ji&&(q._getters||(q._getters=mo([]))).push(Z))}To(V,q),To(ct(V),q),Object.defineProperty(V,"$state",{get:()=>f?le.value:u.state.value[r],set:Z=>{if(f)throw new Error("cannot set hotState");H(K=>{To(K,Z)})}});{V._hotUpdate=mo(K=>{V._hotUpdating=!0,K._hmrPayload.state.forEach(oe=>{if(oe in V.$state){const R=K.$state[oe],xe=V.$state[oe];typeof R=="object"&&Ur(R)&&Ur(xe)?ry(R,xe):K.$state[oe]=xe}hd(V,oe,dl(K.$state,oe))}),Object.keys(V.$state).forEach(oe=>{oe in K.$state||tp(V,oe)}),E=!1,x=!1,u.state.value[r]=dl(K._hmrPayload,"hotState"),x=!0,Hn().then(()=>{E=!0});for(const oe in K._hmrPayload.actions){const R=K[oe];hd(V,oe,te(oe,R))}for(const oe in K._hmrPayload.getters){const R=K._hmrPayload.getters[oe],xe=b?Me(()=>(xl(u),R.call(V,V))):R;hd(V,oe,xe)}Object.keys(V._hmrPayload.getters).forEach(oe=>{oe in K._hmrPayload.getters||tp(V,oe)}),Object.keys(V._hmrPayload.actions).forEach(oe=>{oe in K._hmrPayload.actions||tp(V,oe)}),V._hmrPayload=K._hmrPayload,V._getters=K._getters,V._hotUpdating=!1});const Z={writable:!0,configurable:!0,enumerable:!1};Ji&&["_p","_hmrPayload","_getters","_customProperties"].forEach(K=>{Object.defineProperty(V,K,{value:V[K],...Z})})}return u._p.forEach(Z=>{if(Ji){const K=g.run(()=>Z({store:V,app:u._a,pinia:u,options:_}));Object.keys(K||{}).forEach(oe=>V._customProperties.add(oe)),To(V,K)}else To(V,g.run(()=>Z({store:V,app:u._a,pinia:u,options:_})))}),V.$state&&typeof V.$state=="object"&&typeof V.$state.constructor=="function"&&!V.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${V.$id}".`),$&&b&&c.hydrate&&c.hydrate(V.$state,$),E=!0,x=!0,V}function cr(r,a,c){let u,f;const b=typeof a=="function";typeof r=="string"?(u=r,f=b?c:a):(f=r,u=r.id);function g(_,k){const E=Nn();if(_=_||E&&Po(ZC),_&&xl(_),!Pp)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);_=Pp,_._s.has(u)||(b?Lp(u,a,f,_):FA(u,f,_),g._pinia=_);const x=_._s.get(u);if(k){const D="__hot:"+u,v=b?Lp(D,a,f,_,!0):FA(D,To({},f),_,!0);k._hotUpdate(v),delete _.state.value[D],_._s.delete(D)}if(Ji&&E&&E.proxy&&!k){const D=E.proxy,v="_pStores"in D?D._pStores:D._pStores={};v[u]=x}return x}return g.$id=u,g}var fd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function sy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function YP(r){if(r.__esModule)return r;var a=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(c){var u=Object.getOwnPropertyDescriptor(r,c);Object.defineProperty(a,c,u.get?u:{enumerable:!0,get:function(){return r[c]}})}),a}var wg={exports:{}},QP=YP(_P);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,a){(function(c,u){r.exports=u(QP)})(window,function(c){return function(u){var f={};function b(g){if(f[g])return f[g].exports;var _=f[g]={i:g,l:!1,exports:{}};return u[g].call(_.exports,_,_.exports,b),_.l=!0,_.exports}return b.m=u,b.c=f,b.d=function(g,_,k){b.o(g,_)||Object.defineProperty(g,_,{enumerable:!0,get:k})},b.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},b.t=function(g,_){if(1&_&&(g=b(g)),8&_||4&_&&typeof g=="object"&&g&&g.__esModule)return g;var k=Object.create(null);if(b.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:g}),2&_&&typeof g!="string")for(var E in g)b.d(k,E,function(x){return g[x]}.bind(null,E));return k},b.n=function(g){var _=g&&g.__esModule?function(){return g.default}:function(){return g};return b.d(_,"a",_),_},b.o=function(g,_){return Object.prototype.hasOwnProperty.call(g,_)},b.p="",b(b.s=3)}([function(u,f){u.exports=c},function(u,f,b){(function(g){var _=typeof g=="object"&&g&&g.Object===Object&&g;f.a=_}).call(this,b(2))},function(u,f){var b;b=function(){return this}();try{b=b||new Function("return this")()}catch{typeof window=="object"&&(b=window)}u.exports=b},function(u,f,b){b.r(f);var g=b(0),_=b.n(g),k=function(L){var re=typeof L;return L!=null&&(re=="object"||re=="function")},E=b(1),x=typeof self=="object"&&self&&self.Object===Object&&self,D=E.a||x||Function("return this")(),v=function(){return D.Date.now()},I=/\s/,$=function(L){for(var re=L.length;re--&&I.test(L.charAt(re)););return re},le=/^\s+/,G=function(L){return L&&L.slice(0,$(L)+1).replace(le,"")},H=D.Symbol,N=Object.prototype,W=N.hasOwnProperty,te=N.toString,ie=H?H.toStringTag:void 0,ee=function(L){var re=W.call(L,ie),de=L[ie];try{L[ie]=void 0;var se=!0}catch{}var ne=te.call(L);return se&&(re?L[ie]=de:delete L[ie]),ne},V=Object.prototype.toString,q=function(L){return V.call(L)},Z=H?H.toStringTag:void 0,K=function(L){return L==null?L===void 0?"[object Undefined]":"[object Null]":Z&&Z in Object(L)?ee(L):q(L)},oe=function(L){return L!=null&&typeof L=="object"},R=function(L){return typeof L=="symbol"||oe(L)&&K(L)=="[object Symbol]"},xe=/^[-+]0x[0-9a-f]+$/i,me=/^0b[01]+$/i,Ie=/^0o[0-7]+$/i,Re=parseInt,Se=function(L){if(typeof L=="number")return L;if(R(L))return NaN;if(k(L)){var re=typeof L.valueOf=="function"?L.valueOf():L;L=k(re)?re+"":re}if(typeof L!="string")return L===0?L:+L;L=G(L);var de=me.test(L);return de||Ie.test(L)?Re(L.slice(2),de?2:8):xe.test(L)?NaN:+L},Ue=Math.max,ht=Math.min,et=function(L,re,de){var se,ne,rt,Ee,Oe,z,U=0,X=!1,ce=!1,ue=!0;if(typeof L!="function")throw new TypeError("Expected a function");function ke(Te){var Be=se,Ae=ne;return se=ne=void 0,U=Te,Ee=L.apply(Ae,Be)}function ye(Te){return U=Te,Oe=setTimeout(ve,re),X?ke(Te):Ee}function _e(Te){var Be=Te-z;return z===void 0||Be>=re||Be<0||ce&&Te-U>=rt}function ve(){var Te=v();if(_e(Te))return he(Te);Oe=setTimeout(ve,function(Be){var Ae=re-(Be-z);return ce?ht(Ae,rt-(Be-U)):Ae}(Te))}function he(Te){return Oe=void 0,ue&&se?ke(Te):(se=ne=void 0,Ee)}function je(){var Te=v(),Be=_e(Te);if(se=arguments,ne=this,z=Te,Be){if(Oe===void 0)return ye(z);if(ce)return clearTimeout(Oe),Oe=setTimeout(ve,re),ke(z)}return Oe===void 0&&(Oe=setTimeout(ve,re)),Ee}return re=Se(re)||0,k(de)&&(X=!!de.leading,rt=(ce="maxWait"in de)?Ue(Se(de.maxWait)||0,re):rt,ue="trailing"in de?!!de.trailing:ue),je.cancel=function(){Oe!==void 0&&clearTimeout(Oe),U=0,se=z=ne=Oe=void 0},je.flush=function(){return Oe===void 0?Ee:he(v())},je},ze={name:"ckeditor",created(){const{CKEDITOR_VERSION:L}=window;if(L){const[re]=L.split(".").map(Number);re<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(g.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const L=Object.assign({},this.config);this.modelValue&&(L.initialData=this.modelValue),this.editor.create(this.$el,L).then(re=>{this.instance=Object(g.markRaw)(re),this.setUpEditorEvents(),this.modelValue!==L.initialData&&re.setData(this.modelValue),this.disabled&&re.enableReadOnlyMode("Integration Sample"),this.$emit("ready",re)}).catch(re=>{console.error(re)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(L){this.instance&&L!==this.lastEditorData&&this.instance.setData(L)},disabled(L){L?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const L=this.instance,re=et(de=>{const se=this.lastEditorData=L.getData();this.$emit("update:modelValue",se,de,L),this.$emit("input",se,de,L)},300,{leading:!0});L.model.document.on("change:data",re),L.editing.view.document.on("focus",de=>{this.$emit("focus",de,L)}),L.editing.view.document.on("blur",de=>{this.$emit("blur",de,L)})}}};const Fe=_.a?_.a.version:g.version,[qe]=Fe.split(".").map(L=>parseInt(L,10));if(qe<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const ut={install(L){L.component("ckeditor",ze)},component:ze};f.default=ut}]).default})})(wg);var Ll=sy(wg.exports);/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ls=typeof window!="undefined";function ZP(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const Pt=Object.assign;function np(r,a){const c={};for(const u in a){const f=a[u];c[u]=Bo(f)?f.map(r):r(f)}return c}const kl=()=>{},Bo=Array.isArray,JP=/\/$/,XP=r=>r.replace(JP,"");function op(r,a,c="/"){let u,f={},b="",g="";const _=a.indexOf("#");let k=a.indexOf("?");return _<k&&_>=0&&(k=-1),k>-1&&(u=a.slice(0,k),b=a.slice(k+1,_>-1?_:a.length),f=r(b)),_>-1&&(u=u||a.slice(0,_),g=a.slice(_,a.length)),u=oB(u!=null?u:a,c),{fullPath:u+(b&&"?")+b+g,path:u,query:f,hash:g}}function eB(r,a){const c=a.query?r(a.query):"";return a.path+(c&&"?")+c+(a.hash||"")}function VA(r,a){return!a||!r.toLowerCase().startsWith(a.toLowerCase())?r:r.slice(a.length)||"/"}function tB(r,a,c){const u=a.matched.length-1,f=c.matched.length-1;return u>-1&&u===f&&Ks(a.matched[u],c.matched[f])&&ay(a.params,c.params)&&r(a.query)===r(c.query)&&a.hash===c.hash}function Ks(r,a){return(r.aliasOf||r)===(a.aliasOf||a)}function ay(r,a){if(Object.keys(r).length!==Object.keys(a).length)return!1;for(const c in r)if(!nB(r[c],a[c]))return!1;return!0}function nB(r,a){return Bo(r)?$A(r,a):Bo(a)?$A(a,r):r===a}function $A(r,a){return Bo(a)?r.length===a.length&&r.every((c,u)=>c===a[u]):r.length===1&&r[0]===a}function oB(r,a){if(r.startsWith("/"))return r;if(!r)return a;const c=a.split("/"),u=r.split("/");let f=c.length-1,b,g;for(b=0;b<u.length;b++)if(g=u[b],g!==".")if(g==="..")f>1&&f--;else break;return c.slice(0,f).join("/")+"/"+u.slice(b-(b===u.length?1:0)).join("/")}var El;(function(r){r.pop="pop",r.push="push"})(El||(El={}));var wl;(function(r){r.back="back",r.forward="forward",r.unknown=""})(wl||(wl={}));function iB(r){if(!r)if(Ls){const a=document.querySelector("base");r=a&&a.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),XP(r)}const rB=/^[^#]+#/;function sB(r,a){return r.replace(rB,"#")+a}function aB(r,a){const c=document.documentElement.getBoundingClientRect(),u=r.getBoundingClientRect();return{behavior:a.behavior,left:u.left-c.left-(a.left||0),top:u.top-c.top-(a.top||0)}}const su=()=>({left:window.pageXOffset,top:window.pageYOffset});function lB(r){let a;if("el"in r){const c=r.el,u=typeof c=="string"&&c.startsWith("#"),f=typeof c=="string"?u?document.getElementById(c.slice(1)):document.querySelector(c):c;if(!f)return;a=aB(f,r)}else a=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function HA(r,a){return(history.state?history.state.position-a:-1)+r}const Op=new Map;function cB(r,a){Op.set(r,a)}function dB(r){const a=Op.get(r);return Op.delete(r),a}let uB=()=>location.protocol+"//"+location.host;function ly(r,a){const{pathname:c,search:u,hash:f}=a,b=r.indexOf("#");if(b>-1){let _=f.includes(r.slice(b))?r.slice(b).length:1,k=f.slice(_);return k[0]!=="/"&&(k="/"+k),VA(k,"")}return VA(c,r)+u+f}function hB(r,a,c,u){let f=[],b=[],g=null;const _=({state:v})=>{const I=ly(r,location),$=c.value,le=a.value;let G=0;if(v){if(c.value=I,a.value=v,g&&g===$){g=null;return}G=le?v.position-le.position:0}else u(I);f.forEach(H=>{H(c.value,$,{delta:G,type:El.pop,direction:G?G>0?wl.forward:wl.back:wl.unknown})})};function k(){g=c.value}function E(v){f.push(v);const I=()=>{const $=f.indexOf(v);$>-1&&f.splice($,1)};return b.push(I),I}function x(){const{history:v}=window;!v.state||v.replaceState(Pt({},v.state,{scroll:su()}),"")}function D(){for(const v of b)v();b=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",x),{pauseListeners:k,listen:E,destroy:D}}function UA(r,a,c,u=!1,f=!1){return{back:r,current:a,forward:c,replaced:u,position:window.history.length,scroll:f?su():null}}function fB(r){const{history:a,location:c}=window,u={value:ly(r,c)},f={value:a.state};f.value||b(u.value,{back:null,current:u.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function b(k,E,x){const D=r.indexOf("#"),v=D>-1?(c.host&&document.querySelector("base")?r:r.slice(D))+k:uB()+r+k;try{a[x?"replaceState":"pushState"](E,"",v),f.value=E}catch(I){console.error(I),c[x?"replace":"assign"](v)}}function g(k,E){const x=Pt({},a.state,UA(f.value.back,k,f.value.forward,!0),E,{position:f.value.position});b(k,x,!0),u.value=k}function _(k,E){const x=Pt({},f.value,a.state,{forward:k,scroll:su()});b(x.current,x,!0);const D=Pt({},UA(u.value,k,null),{position:x.position+1},E);b(k,D,!1),u.value=k}return{location:u,state:f,push:_,replace:g}}function pB(r){r=iB(r);const a=fB(r),c=hB(r,a.state,a.location,a.replace);function u(b,g=!0){g||c.pauseListeners(),history.go(b)}const f=Pt({location:"",base:r,go:u,createHref:sB.bind(null,r)},a,c);return Object.defineProperty(f,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(f,"state",{enumerable:!0,get:()=>a.state.value}),f}function gB(r){return typeof r=="string"||r&&typeof r=="object"}function cy(r){return typeof r=="string"||typeof r=="symbol"}const Ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dy=Symbol("");var qA;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(qA||(qA={}));function Ys(r,a){return Pt(new Error,{type:r,[dy]:!0},a)}function qi(r,a){return r instanceof Error&&dy in r&&(a==null||!!(r.type&a))}const WA="[^/]+?",mB={sensitive:!1,strict:!1,start:!0,end:!0},bB=/[.+*?^${}()[\]/\\]/g;function kB(r,a){const c=Pt({},mB,a),u=[];let f=c.start?"^":"";const b=[];for(const E of r){const x=E.length?[]:[90];c.strict&&!E.length&&(f+="/");for(let D=0;D<E.length;D++){const v=E[D];let I=40+(c.sensitive?.25:0);if(v.type===0)D||(f+="/"),f+=v.value.replace(bB,"\\$&"),I+=40;else if(v.type===1){const{value:$,repeatable:le,optional:G,regexp:H}=v;b.push({name:$,repeatable:le,optional:G});const N=H||WA;if(N!==WA){I+=10;try{new RegExp(`(${N})`)}catch(te){throw new Error(`Invalid custom RegExp for param "${$}" (${N}): `+te.message)}}let W=le?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;D||(W=G&&E.length<2?`(?:/${W})`:"/"+W),G&&(W+="?"),f+=W,I+=20,G&&(I+=-8),le&&(I+=-20),N===".*"&&(I+=-50)}x.push(I)}u.push(x)}if(c.strict&&c.end){const E=u.length-1;u[E][u[E].length-1]+=.7000000000000001}c.strict||(f+="/?"),c.end?f+="$":c.strict&&(f+="(?:/|$)");const g=new RegExp(f,c.sensitive?"":"i");function _(E){const x=E.match(g),D={};if(!x)return null;for(let v=1;v<x.length;v++){const I=x[v]||"",$=b[v-1];D[$.name]=I&&$.repeatable?I.split("/"):I}return D}function k(E){let x="",D=!1;for(const v of r){(!D||!x.endsWith("/"))&&(x+="/"),D=!1;for(const I of v)if(I.type===0)x+=I.value;else if(I.type===1){const{value:$,repeatable:le,optional:G}=I,H=$ in E?E[$]:"";if(Bo(H)&&!le)throw new Error(`Provided param "${$}" is an array but it is not repeatable (* or + modifiers)`);const N=Bo(H)?H.join("/"):H;if(!N)if(G)v.length<2&&r.length>1&&(x.endsWith("/")?x=x.slice(0,-1):D=!0);else throw new Error(`Missing required param "${$}"`);x+=N}}return x}return{re:g,score:u,keys:b,parse:_,stringify:k}}function wB(r,a){let c=0;for(;c<r.length&&c<a.length;){const u=a[c]-r[c];if(u)return u;c++}return r.length<a.length?r.length===1&&r[0]===40+40?-1:1:r.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function _B(r,a){let c=0;const u=r.score,f=a.score;for(;c<u.length&&c<f.length;){const b=wB(u[c],f[c]);if(b)return b;c++}if(Math.abs(f.length-u.length)===1){if(GA(u))return 1;if(GA(f))return-1}return f.length-u.length}function GA(r){const a=r[r.length-1];return r.length>0&&a[a.length-1]<0}const vB={type:0,value:""},AB=/[a-zA-Z0-9_]/;function CB(r){if(!r)return[[]];if(r==="/")return[[vB]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function a(I){throw new Error(`ERR (${c})/"${E}": ${I}`)}let c=0,u=c;const f=[];let b;function g(){b&&f.push(b),b=[]}let _=0,k,E="",x="";function D(){!E||(c===0?b.push({type:0,value:E}):c===1||c===2||c===3?(b.length>1&&(k==="*"||k==="+")&&a(`A repeatable param (${E}) must be alone in its segment. eg: '/:ids+.`),b.push({type:1,value:E,regexp:x,repeatable:k==="*"||k==="+",optional:k==="*"||k==="?"})):a("Invalid state to consume buffer"),E="")}function v(){E+=k}for(;_<r.length;){if(k=r[_++],k==="\\"&&c!==2){u=c,c=4;continue}switch(c){case 0:k==="/"?(E&&D(),g()):k===":"?(D(),c=1):v();break;case 4:v(),c=u;break;case 1:k==="("?c=2:AB.test(k)?v():(D(),c=0,k!=="*"&&k!=="?"&&k!=="+"&&_--);break;case 2:k===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+k:c=3:x+=k;break;case 3:D(),c=0,k!=="*"&&k!=="?"&&k!=="+"&&_--,x="";break;default:a("Unknown state");break}}return c===2&&a(`Unfinished custom RegExp for param "${E}"`),D(),g(),f}function yB(r,a,c){const u=kB(CB(r.path),c),f=Pt(u,{record:r,parent:a,children:[],alias:[]});return a&&!f.record.aliasOf==!a.record.aliasOf&&a.children.push(f),f}function xB(r,a){const c=[],u=new Map;a=YA({strict:!1,end:!0,sensitive:!1},a);function f(x){return u.get(x)}function b(x,D,v){const I=!v,$=SB(x);$.aliasOf=v&&v.record;const le=YA(a,x),G=[$];if("alias"in x){const W=typeof x.alias=="string"?[x.alias]:x.alias;for(const te of W)G.push(Pt({},$,{components:v?v.record.components:$.components,path:te,aliasOf:v?v.record:$}))}let H,N;for(const W of G){const{path:te}=W;if(D&&te[0]!=="/"){const ie=D.record.path,ee=ie[ie.length-1]==="/"?"":"/";W.path=D.record.path+(te&&ee+te)}if(H=yB(W,D,le),v?v.alias.push(H):(N=N||H,N!==H&&N.alias.push(H),I&&x.name&&!KA(H)&&g(x.name)),$.children){const ie=$.children;for(let ee=0;ee<ie.length;ee++)b(ie[ee],H,v&&v.children[ee])}v=v||H,k(H)}return N?()=>{g(N)}:kl}function g(x){if(cy(x)){const D=u.get(x);D&&(u.delete(x),c.splice(c.indexOf(D),1),D.children.forEach(g),D.alias.forEach(g))}else{const D=c.indexOf(x);D>-1&&(c.splice(D,1),x.record.name&&u.delete(x.record.name),x.children.forEach(g),x.alias.forEach(g))}}function _(){return c}function k(x){let D=0;for(;D<c.length&&_B(x,c[D])>=0&&(x.record.path!==c[D].record.path||!uy(x,c[D]));)D++;c.splice(D,0,x),x.record.name&&!KA(x)&&u.set(x.record.name,x)}function E(x,D){let v,I={},$,le;if("name"in x&&x.name){if(v=u.get(x.name),!v)throw Ys(1,{location:x});le=v.record.name,I=Pt(EB(D.params,v.keys.filter(N=>!N.optional).map(N=>N.name)),x.params),$=v.stringify(I)}else if("path"in x)$=x.path,v=c.find(N=>N.re.test($)),v&&(I=v.parse($),le=v.record.name);else{if(v=D.name?u.get(D.name):c.find(N=>N.re.test(D.path)),!v)throw Ys(1,{location:x,currentLocation:D});le=v.record.name,I=Pt({},D.params,x.params),$=v.stringify(I)}const G=[];let H=v;for(;H;)G.unshift(H.record),H=H.parent;return{name:le,path:$,params:I,matched:G,meta:TB(G)}}return r.forEach(x=>b(x)),{addRoute:b,resolve:E,removeRoute:g,getRoutes:_,getRecordMatcher:f}}function EB(r,a){const c={};for(const u of a)u in r&&(c[u]=r[u]);return c}function SB(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:DB(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function DB(r){const a={},c=r.props||!1;if("component"in r)a.default=c;else for(const u in r.components)a[u]=typeof c=="boolean"?c:c[u];return a}function KA(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function TB(r){return r.reduce((a,c)=>Pt(a,c.meta),{})}function YA(r,a){const c={};for(const u in r)c[u]=u in a?a[u]:r[u];return c}function uy(r,a){return a.children.some(c=>c===r||uy(r,c))}const hy=/#/g,IB=/&/g,MB=/\//g,PB=/=/g,BB=/\?/g,fy=/\+/g,NB=/%5B/g,LB=/%5D/g,py=/%5E/g,OB=/%60/g,gy=/%7B/g,RB=/%7C/g,my=/%7D/g,zB=/%20/g;function _g(r){return encodeURI(""+r).replace(RB,"|").replace(NB,"[").replace(LB,"]")}function jB(r){return _g(r).replace(gy,"{").replace(my,"}").replace(py,"^")}function Rp(r){return _g(r).replace(fy,"%2B").replace(zB,"+").replace(hy,"%23").replace(IB,"%26").replace(OB,"`").replace(gy,"{").replace(my,"}").replace(py,"^")}function FB(r){return Rp(r).replace(PB,"%3D")}function VB(r){return _g(r).replace(hy,"%23").replace(BB,"%3F")}function $B(r){return r==null?"":VB(r).replace(MB,"%2F")}function Rd(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function HB(r){const a={};if(r===""||r==="?")return a;const u=(r[0]==="?"?r.slice(1):r).split("&");for(let f=0;f<u.length;++f){const b=u[f].replace(fy," "),g=b.indexOf("="),_=Rd(g<0?b:b.slice(0,g)),k=g<0?null:Rd(b.slice(g+1));if(_ in a){let E=a[_];Bo(E)||(E=a[_]=[E]),E.push(k)}else a[_]=k}return a}function QA(r){let a="";for(let c in r){const u=r[c];if(c=FB(c),u==null){u!==void 0&&(a+=(a.length?"&":"")+c);continue}(Bo(u)?u.map(b=>b&&Rp(b)):[u&&Rp(u)]).forEach(b=>{b!==void 0&&(a+=(a.length?"&":"")+c,b!=null&&(a+="="+b))})}return a}function UB(r){const a={};for(const c in r){const u=r[c];u!==void 0&&(a[c]=Bo(u)?u.map(f=>f==null?null:""+f):u==null?u:""+u)}return a}const qB=Symbol(""),ZA=Symbol(""),vg=Symbol(""),by=Symbol(""),zp=Symbol("");function tl(){let r=[];function a(u){return r.push(u),()=>{const f=r.indexOf(u);f>-1&&r.splice(f,1)}}function c(){r=[]}return{add:a,list:()=>r,reset:c}}function Qi(r,a,c,u,f){const b=u&&(u.enterCallbacks[f]=u.enterCallbacks[f]||[]);return()=>new Promise((g,_)=>{const k=D=>{D===!1?_(Ys(4,{from:c,to:a})):D instanceof Error?_(D):gB(D)?_(Ys(2,{from:a,to:D})):(b&&u.enterCallbacks[f]===b&&typeof D=="function"&&b.push(D),g())},E=r.call(u&&u.instances[f],a,c,k);let x=Promise.resolve(E);r.length<3&&(x=x.then(k)),x.catch(D=>_(D))})}function ip(r,a,c,u){const f=[];for(const b of r)for(const g in b.components){let _=b.components[g];if(!(a!=="beforeRouteEnter"&&!b.instances[g]))if(WB(_)){const E=(_.__vccOpts||_)[a];E&&f.push(Qi(E,c,u,b,g))}else{let k=_();f.push(()=>k.then(E=>{if(!E)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${b.path}"`));const x=ZP(E)?E.default:E;b.components[g]=x;const v=(x.__vccOpts||x)[a];return v&&Qi(v,c,u,b,g)()}))}}return f}function WB(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function JA(r){const a=Po(vg),c=Po(by),u=Me(()=>a.resolve(Y(r.to))),f=Me(()=>{const{matched:k}=u.value,{length:E}=k,x=k[E-1],D=c.matched;if(!x||!D.length)return-1;const v=D.findIndex(Ks.bind(null,x));if(v>-1)return v;const I=XA(k[E-2]);return E>1&&XA(x)===I&&D[D.length-1].path!==I?D.findIndex(Ks.bind(null,k[E-2])):v}),b=Me(()=>f.value>-1&&QB(c.params,u.value.params)),g=Me(()=>f.value>-1&&f.value===c.matched.length-1&&ay(c.params,u.value.params));function _(k={}){return YB(k)?a[Y(r.replace)?"replace":"push"](Y(r.to)).catch(kl):Promise.resolve()}return{route:u,href:Me(()=>u.value.href),isActive:b,isExactActive:g,navigate:_}}const GB=Yr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:JA,setup(r,{slots:a}){const c=Dn(JA(r)),{options:u}=Po(vg),f=Me(()=>({[e0(r.activeClass,u.linkActiveClass,"router-link-active")]:c.isActive,[e0(r.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:c.isExactActive}));return()=>{const b=a.default&&a.default(c);return r.custom?b:iu("a",{"aria-current":c.isExactActive?r.ariaCurrentValue:null,href:c.href,onClick:c.navigate,class:f.value},b)}}}),KB=GB;function YB(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const a=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return r.preventDefault&&r.preventDefault(),!0}}function QB(r,a){for(const c in a){const u=a[c],f=r[c];if(typeof u=="string"){if(u!==f)return!1}else if(!Bo(f)||f.length!==u.length||u.some((b,g)=>b!==f[g]))return!1}return!0}function XA(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const e0=(r,a,c)=>r!=null?r:a!=null?a:c,ZB=Yr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:a,slots:c}){const u=Po(zp),f=Me(()=>r.route||u.value),b=Po(ZA,0),g=Me(()=>{let E=Y(b);const{matched:x}=f.value;let D;for(;(D=x[E])&&!D.components;)E++;return E}),_=Me(()=>f.value.matched[g.value]);pl(ZA,Me(()=>g.value+1)),pl(qB,_),pl(zp,f);const k=mt();return rn(()=>[k.value,_.value,r.name],([E,x,D],[v,I,$])=>{x&&(x.instances[D]=E,I&&I!==x&&E&&E===v&&(x.leaveGuards.size||(x.leaveGuards=I.leaveGuards),x.updateGuards.size||(x.updateGuards=I.updateGuards))),E&&x&&(!I||!Ks(x,I)||!v)&&(x.enterCallbacks[D]||[]).forEach(le=>le(E))},{flush:"post"}),()=>{const E=f.value,x=_.value,D=x&&x.components[r.name],v=r.name;if(!D)return t0(c.default,{Component:D,route:E});const I=x.props[r.name],$=I?I===!0?E.params:typeof I=="function"?I(E):I:null,G=iu(D,Pt({},$,a,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(x.instances[v]=null)},ref:k}));return t0(c.default,{Component:G,route:E})||G}}});function t0(r,a){if(!r)return null;const c=r(a);return c.length===1?c[0]:c}const JB=ZB;function XB(r){const a=xB(r.routes,r),c=r.parseQuery||HB,u=r.stringifyQuery||QA,f=r.history,b=tl(),g=tl(),_=tl(),k=B0(Ui);let E=Ui;Ls&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=np.bind(null,L=>""+L),D=np.bind(null,$B),v=np.bind(null,Rd);function I(L,re){let de,se;return cy(L)?(de=a.getRecordMatcher(L),se=re):se=L,a.addRoute(se,de)}function $(L){const re=a.getRecordMatcher(L);re&&a.removeRoute(re)}function le(){return a.getRoutes().map(L=>L.record)}function G(L){return!!a.getRecordMatcher(L)}function H(L,re){if(re=Pt({},re||k.value),typeof L=="string"){const Oe=op(c,L,re.path),z=a.resolve({path:Oe.path},re),U=f.createHref(Oe.fullPath);return Pt(Oe,z,{params:v(z.params),hash:Rd(Oe.hash),redirectedFrom:void 0,href:U})}let de;if("path"in L)de=Pt({},L,{path:op(c,L.path,re.path).path});else{const Oe=Pt({},L.params);for(const z in Oe)Oe[z]==null&&delete Oe[z];de=Pt({},L,{params:D(L.params)}),re.params=D(re.params)}const se=a.resolve(de,re),ne=L.hash||"";se.params=x(v(se.params));const rt=eB(u,Pt({},L,{hash:jB(ne),path:se.path})),Ee=f.createHref(rt);return Pt({fullPath:rt,hash:ne,query:u===QA?UB(L.query):L.query||{}},se,{redirectedFrom:void 0,href:Ee})}function N(L){return typeof L=="string"?op(c,L,k.value.path):Pt({},L)}function W(L,re){if(E!==L)return Ys(8,{from:re,to:L})}function te(L){return V(L)}function ie(L){return te(Pt(N(L),{replace:!0}))}function ee(L){const re=L.matched[L.matched.length-1];if(re&&re.redirect){const{redirect:de}=re;let se=typeof de=="function"?de(L):de;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=N(se):{path:se},se.params={}),Pt({query:L.query,hash:L.hash,params:"path"in se?{}:L.params},se)}}function V(L,re){const de=E=H(L),se=k.value,ne=L.state,rt=L.force,Ee=L.replace===!0,Oe=ee(de);if(Oe)return V(Pt(N(Oe),{state:ne,force:rt,replace:Ee}),re||de);const z=de;z.redirectedFrom=re;let U;return!rt&&tB(u,se,de)&&(U=Ys(16,{to:z,from:se}),et(se,se,!0,!1)),(U?Promise.resolve(U):Z(z,se)).catch(X=>qi(X)?qi(X,2)?X:ht(X):Se(X,z,se)).then(X=>{if(X){if(qi(X,2))return V(Pt(N(X.to),{state:ne,force:rt,replace:Ee}),re||z)}else X=oe(z,se,!0,Ee,ne);return K(z,se,X),X})}function q(L,re){const de=W(L,re);return de?Promise.reject(de):Promise.resolve()}function Z(L,re){let de;const[se,ne,rt]=eN(L,re);de=ip(se.reverse(),"beforeRouteLeave",L,re);for(const Oe of se)Oe.leaveGuards.forEach(z=>{de.push(Qi(z,L,re))});const Ee=q.bind(null,L,re);return de.push(Ee),Ts(de).then(()=>{de=[];for(const Oe of b.list())de.push(Qi(Oe,L,re));return de.push(Ee),Ts(de)}).then(()=>{de=ip(ne,"beforeRouteUpdate",L,re);for(const Oe of ne)Oe.updateGuards.forEach(z=>{de.push(Qi(z,L,re))});return de.push(Ee),Ts(de)}).then(()=>{de=[];for(const Oe of L.matched)if(Oe.beforeEnter&&!re.matched.includes(Oe))if(Bo(Oe.beforeEnter))for(const z of Oe.beforeEnter)de.push(Qi(z,L,re));else de.push(Qi(Oe.beforeEnter,L,re));return de.push(Ee),Ts(de)}).then(()=>(L.matched.forEach(Oe=>Oe.enterCallbacks={}),de=ip(rt,"beforeRouteEnter",L,re),de.push(Ee),Ts(de))).then(()=>{de=[];for(const Oe of g.list())de.push(Qi(Oe,L,re));return de.push(Ee),Ts(de)}).catch(Oe=>qi(Oe,8)?Oe:Promise.reject(Oe))}function K(L,re,de){for(const se of _.list())se(L,re,de)}function oe(L,re,de,se,ne){const rt=W(L,re);if(rt)return rt;const Ee=re===Ui,Oe=Ls?history.state:{};de&&(se||Ee?f.replace(L.fullPath,Pt({scroll:Ee&&Oe&&Oe.scroll},ne)):f.push(L.fullPath,ne)),k.value=L,et(L,re,de,Ee),ht()}let R;function xe(){R||(R=f.listen((L,re,de)=>{const se=H(L),ne=ee(se);if(ne){V(Pt(ne,{replace:!0}),se).catch(kl);return}E=se;const rt=k.value;Ls&&cB(HA(rt.fullPath,de.delta),su()),Z(se,rt).catch(Ee=>qi(Ee,12)?Ee:qi(Ee,2)?(V(Ee.to,se).then(Oe=>{qi(Oe,20)&&!de.delta&&de.type===El.pop&&f.go(-1,!1)}).catch(kl),Promise.reject()):(de.delta&&f.go(-de.delta,!1),Se(Ee,se,rt))).then(Ee=>{Ee=Ee||oe(se,rt,!1),Ee&&(de.delta?f.go(-de.delta,!1):de.type===El.pop&&qi(Ee,20)&&f.go(-1,!1)),K(se,rt,Ee)}).catch(kl)}))}let me=tl(),Ie=tl(),Re;function Se(L,re,de){ht(L);const se=Ie.list();return se.length?se.forEach(ne=>ne(L,re,de)):console.error(L),Promise.reject(L)}function Ue(){return Re&&k.value!==Ui?Promise.resolve():new Promise((L,re)=>{me.add([L,re])})}function ht(L){return Re||(Re=!L,xe(),me.list().forEach(([re,de])=>L?de(L):re()),me.reset()),L}function et(L,re,de,se){const{scrollBehavior:ne}=r;if(!Ls||!ne)return Promise.resolve();const rt=!de&&dB(HA(L.fullPath,0))||(se||!de)&&history.state&&history.state.scroll||null;return Hn().then(()=>ne(L,re,rt)).then(Ee=>Ee&&lB(Ee)).catch(Ee=>Se(Ee,L,re))}const ze=L=>f.go(L);let Fe;const qe=new Set;return{currentRoute:k,listening:!0,addRoute:I,removeRoute:$,hasRoute:G,getRoutes:le,resolve:H,options:r,push:te,replace:ie,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:b.add,beforeResolve:g.add,afterEach:_.add,onError:Ie.add,isReady:Ue,install(L){const re=this;L.component("RouterLink",KB),L.component("RouterView",JB),L.config.globalProperties.$router=re,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Y(k)}),Ls&&!Fe&&k.value===Ui&&(Fe=!0,te(f.location).catch(ne=>{}));const de={};for(const ne in Ui)de[ne]=Me(()=>k.value[ne]);L.provide(vg,re),L.provide(by,Dn(de)),L.provide(zp,k);const se=L.unmount;qe.add(L),L.unmount=function(){qe.delete(L),qe.size<1&&(E=Ui,R&&R(),R=null,k.value=Ui,Fe=!1,Re=!1),se()}}}}function Ts(r){return r.reduce((a,c)=>a.then(()=>c()),Promise.resolve())}function eN(r,a){const c=[],u=[],f=[],b=Math.max(a.matched.length,r.matched.length);for(let g=0;g<b;g++){const _=a.matched[g];_&&(r.matched.find(E=>Ks(E,_))?u.push(_):c.push(_));const k=r.matched[g];k&&(a.matched.find(E=>Ks(E,k))||f.push(k))}return[c,u,f]}var Ag={exports:{}},ky=function(a,c){return function(){for(var f=new Array(arguments.length),b=0;b<f.length;b++)f[b]=arguments[b];return a.apply(c,f)}},tN=ky,Cg=Object.prototype.toString,yg=function(r){return function(a){var c=Cg.call(a);return r[c]||(r[c]=c.slice(8,-1).toLowerCase())}}(Object.create(null));function Qr(r){return r=r.toLowerCase(),function(c){return yg(c)===r}}function xg(r){return Array.isArray(r)}function zd(r){return typeof r=="undefined"}function nN(r){return r!==null&&!zd(r)&&r.constructor!==null&&!zd(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var wy=Qr("ArrayBuffer");function oN(r){var a;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?a=ArrayBuffer.isView(r):a=r&&r.buffer&&wy(r.buffer),a}function iN(r){return typeof r=="string"}function rN(r){return typeof r=="number"}function _y(r){return r!==null&&typeof r=="object"}function yd(r){if(yg(r)!=="object")return!1;var a=Object.getPrototypeOf(r);return a===null||a===Object.prototype}var sN=Qr("Date"),aN=Qr("File"),lN=Qr("Blob"),cN=Qr("FileList");function Eg(r){return Cg.call(r)==="[object Function]"}function dN(r){return _y(r)&&Eg(r.pipe)}function uN(r){var a="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Cg.call(r)===a||Eg(r.toString)&&r.toString()===a)}var hN=Qr("URLSearchParams");function fN(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function pN(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Sg(r,a){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),xg(r))for(var c=0,u=r.length;c<u;c++)a.call(null,r[c],c,r);else for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&a.call(null,r[f],f,r)}function jp(){var r={};function a(f,b){yd(r[b])&&yd(f)?r[b]=jp(r[b],f):yd(f)?r[b]=jp({},f):xg(f)?r[b]=f.slice():r[b]=f}for(var c=0,u=arguments.length;c<u;c++)Sg(arguments[c],a);return r}function gN(r,a,c){return Sg(a,function(f,b){c&&typeof f=="function"?r[b]=tN(f,c):r[b]=f}),r}function mN(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function bN(r,a,c,u){r.prototype=Object.create(a.prototype,u),r.prototype.constructor=r,c&&Object.assign(r.prototype,c)}function kN(r,a,c){var u,f,b,g={};a=a||{};do{for(u=Object.getOwnPropertyNames(r),f=u.length;f-- >0;)b=u[f],g[b]||(a[b]=r[b],g[b]=!0);r=Object.getPrototypeOf(r)}while(r&&(!c||c(r,a))&&r!==Object.prototype);return a}function wN(r,a,c){r=String(r),(c===void 0||c>r.length)&&(c=r.length),c-=a.length;var u=r.indexOf(a,c);return u!==-1&&u===c}function _N(r){if(!r)return null;var a=r.length;if(zd(a))return null;for(var c=new Array(a);a-- >0;)c[a]=r[a];return c}var vN=function(r){return function(a){return r&&a instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),_n={isArray:xg,isArrayBuffer:wy,isBuffer:nN,isFormData:uN,isArrayBufferView:oN,isString:iN,isNumber:rN,isObject:_y,isPlainObject:yd,isUndefined:zd,isDate:sN,isFile:aN,isBlob:lN,isFunction:Eg,isStream:dN,isURLSearchParams:hN,isStandardBrowserEnv:pN,forEach:Sg,merge:jp,extend:gN,trim:fN,stripBOM:mN,inherits:bN,toFlatObject:kN,kindOf:yg,kindOfTest:Qr,endsWith:wN,toArray:_N,isTypedArray:vN,isFileList:cN},Is=_n;function n0(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var vy=function(a,c,u){if(!c)return a;var f;if(u)f=u(c);else if(Is.isURLSearchParams(c))f=c.toString();else{var b=[];Is.forEach(c,function(k,E){k===null||typeof k=="undefined"||(Is.isArray(k)?E=E+"[]":k=[k],Is.forEach(k,function(D){Is.isDate(D)?D=D.toISOString():Is.isObject(D)&&(D=JSON.stringify(D)),b.push(n0(E)+"="+n0(D))}))}),f=b.join("&")}if(f){var g=a.indexOf("#");g!==-1&&(a=a.slice(0,g)),a+=(a.indexOf("?")===-1?"?":"&")+f}return a},AN=_n;function au(){this.handlers=[]}au.prototype.use=function(a,c,u){return this.handlers.push({fulfilled:a,rejected:c,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1};au.prototype.eject=function(a){this.handlers[a]&&(this.handlers[a]=null)};au.prototype.forEach=function(a){AN.forEach(this.handlers,function(u){u!==null&&a(u)})};var CN=au,yN=_n,xN=function(a,c){yN.forEach(a,function(f,b){b!==c&&b.toUpperCase()===c.toUpperCase()&&(a[c]=f,delete a[b])})},Ay=_n;function Qs(r,a,c,u,f){Error.call(this),this.message=r,this.name="AxiosError",a&&(this.code=a),c&&(this.config=c),u&&(this.request=u),f&&(this.response=f)}Ay.inherits(Qs,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Cy=Qs.prototype,yy={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){yy[r]={value:r}});Object.defineProperties(Qs,yy);Object.defineProperty(Cy,"isAxiosError",{value:!0});Qs.from=function(r,a,c,u,f,b){var g=Object.create(Cy);return Ay.toFlatObject(r,g,function(k){return k!==Error.prototype}),Qs.call(g,r.message,a,c,u,f),g.name=r.name,b&&Object.assign(g,b),g};var ta=Qs,xy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},So=_n;function EN(r,a){a=a||new FormData;var c=[];function u(b){return b===null?"":So.isDate(b)?b.toISOString():So.isArrayBuffer(b)||So.isTypedArray(b)?typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function f(b,g){if(So.isPlainObject(b)||So.isArray(b)){if(c.indexOf(b)!==-1)throw Error("Circular reference detected in "+g);c.push(b),So.forEach(b,function(k,E){if(!So.isUndefined(k)){var x=g?g+"."+E:E,D;if(k&&!g&&typeof k=="object"){if(So.endsWith(E,"{}"))k=JSON.stringify(k);else if(So.endsWith(E,"[]")&&(D=So.toArray(k))){D.forEach(function(v){!So.isUndefined(v)&&a.append(x,u(v))});return}}f(k,x)}}),c.pop()}else a.append(g,u(b))}return f(r),a}var Ey=EN,rp=ta,SN=function(a,c,u){var f=u.config.validateStatus;!u.status||!f||f(u.status)?a(u):c(new rp("Request failed with status code "+u.status,[rp.ERR_BAD_REQUEST,rp.ERR_BAD_RESPONSE][Math.floor(u.status/100)-4],u.config,u.request,u))},pd=_n,DN=pd.isStandardBrowserEnv()?function(){return{write:function(c,u,f,b,g,_){var k=[];k.push(c+"="+encodeURIComponent(u)),pd.isNumber(f)&&k.push("expires="+new Date(f).toGMTString()),pd.isString(b)&&k.push("path="+b),pd.isString(g)&&k.push("domain="+g),_===!0&&k.push("secure"),document.cookie=k.join("; ")},read:function(c){var u=document.cookie.match(new RegExp("(^|;\\s*)("+c+")=([^;]*)"));return u?decodeURIComponent(u[3]):null},remove:function(c){this.write(c,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),TN=function(a){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(a)},IN=function(a,c){return c?a.replace(/\/+$/,"")+"/"+c.replace(/^\/+/,""):a},MN=TN,PN=IN,Sy=function(a,c){return a&&!MN(c)?PN(a,c):c},sp=_n,BN=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],NN=function(a){var c={},u,f,b;return a&&sp.forEach(a.split(`
`),function(_){if(b=_.indexOf(":"),u=sp.trim(_.substr(0,b)).toLowerCase(),f=sp.trim(_.substr(b+1)),u){if(c[u]&&BN.indexOf(u)>=0)return;u==="set-cookie"?c[u]=(c[u]?c[u]:[]).concat([f]):c[u]=c[u]?c[u]+", "+f:f}}),c},o0=_n,LN=o0.isStandardBrowserEnv()?function(){var a=/(msie|trident)/i.test(navigator.userAgent),c=document.createElement("a"),u;function f(b){var g=b;return a&&(c.setAttribute("href",g),g=c.href),c.setAttribute("href",g),{href:c.href,protocol:c.protocol?c.protocol.replace(/:$/,""):"",host:c.host,search:c.search?c.search.replace(/^\?/,""):"",hash:c.hash?c.hash.replace(/^#/,""):"",hostname:c.hostname,port:c.port,pathname:c.pathname.charAt(0)==="/"?c.pathname:"/"+c.pathname}}return u=f(window.location.href),function(g){var _=o0.isString(g)?f(g):g;return _.protocol===u.protocol&&_.host===u.host}}():function(){return function(){return!0}}(),Fp=ta,ON=_n;function Dy(r){Fp.call(this,r==null?"canceled":r,Fp.ERR_CANCELED),this.name="CanceledError"}ON.inherits(Dy,Fp,{__CANCEL__:!0});var lu=Dy,RN=function(a){var c=/^([-+\w]{1,25})(:?\/\/|:)/.exec(a);return c&&c[1]||""},nl=_n,zN=SN,jN=DN,FN=vy,VN=Sy,$N=NN,HN=LN,UN=xy,gi=ta,qN=lu,WN=RN,i0=function(a){return new Promise(function(u,f){var b=a.data,g=a.headers,_=a.responseType,k;function E(){a.cancelToken&&a.cancelToken.unsubscribe(k),a.signal&&a.signal.removeEventListener("abort",k)}nl.isFormData(b)&&nl.isStandardBrowserEnv()&&delete g["Content-Type"];var x=new XMLHttpRequest;if(a.auth){var D=a.auth.username||"",v=a.auth.password?unescape(encodeURIComponent(a.auth.password)):"";g.Authorization="Basic "+btoa(D+":"+v)}var I=VN(a.baseURL,a.url);x.open(a.method.toUpperCase(),FN(I,a.params,a.paramsSerializer),!0),x.timeout=a.timeout;function $(){if(!!x){var H="getAllResponseHeaders"in x?$N(x.getAllResponseHeaders()):null,N=!_||_==="text"||_==="json"?x.responseText:x.response,W={data:N,status:x.status,statusText:x.statusText,headers:H,config:a,request:x};zN(function(ie){u(ie),E()},function(ie){f(ie),E()},W),x=null}}if("onloadend"in x?x.onloadend=$:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout($)},x.onabort=function(){!x||(f(new gi("Request aborted",gi.ECONNABORTED,a,x)),x=null)},x.onerror=function(){f(new gi("Network Error",gi.ERR_NETWORK,a,x,x)),x=null},x.ontimeout=function(){var N=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded",W=a.transitional||UN;a.timeoutErrorMessage&&(N=a.timeoutErrorMessage),f(new gi(N,W.clarifyTimeoutError?gi.ETIMEDOUT:gi.ECONNABORTED,a,x)),x=null},nl.isStandardBrowserEnv()){var le=(a.withCredentials||HN(I))&&a.xsrfCookieName?jN.read(a.xsrfCookieName):void 0;le&&(g[a.xsrfHeaderName]=le)}"setRequestHeader"in x&&nl.forEach(g,function(N,W){typeof b=="undefined"&&W.toLowerCase()==="content-type"?delete g[W]:x.setRequestHeader(W,N)}),nl.isUndefined(a.withCredentials)||(x.withCredentials=!!a.withCredentials),_&&_!=="json"&&(x.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&x.addEventListener("progress",a.onDownloadProgress),typeof a.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",a.onUploadProgress),(a.cancelToken||a.signal)&&(k=function(H){!x||(f(!H||H&&H.type?new qN:H),x.abort(),x=null)},a.cancelToken&&a.cancelToken.subscribe(k),a.signal&&(a.signal.aborted?k():a.signal.addEventListener("abort",k))),b||(b=null);var G=WN(I);if(G&&["http","https","file"].indexOf(G)===-1){f(new gi("Unsupported protocol "+G+":",gi.ERR_BAD_REQUEST,a));return}x.send(b)})},GN=null,fn=_n,r0=xN,s0=ta,KN=xy,YN=Ey,QN={"Content-Type":"application/x-www-form-urlencoded"};function a0(r,a){!fn.isUndefined(r)&&fn.isUndefined(r["Content-Type"])&&(r["Content-Type"]=a)}function ZN(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=i0),r}function JN(r,a,c){if(fn.isString(r))try{return(a||JSON.parse)(r),fn.trim(r)}catch(u){if(u.name!=="SyntaxError")throw u}return(c||JSON.stringify)(r)}var cu={transitional:KN,adapter:ZN(),transformRequest:[function(a,c){if(r0(c,"Accept"),r0(c,"Content-Type"),fn.isFormData(a)||fn.isArrayBuffer(a)||fn.isBuffer(a)||fn.isStream(a)||fn.isFile(a)||fn.isBlob(a))return a;if(fn.isArrayBufferView(a))return a.buffer;if(fn.isURLSearchParams(a))return a0(c,"application/x-www-form-urlencoded;charset=utf-8"),a.toString();var u=fn.isObject(a),f=c&&c["Content-Type"],b;if((b=fn.isFileList(a))||u&&f==="multipart/form-data"){var g=this.env&&this.env.FormData;return YN(b?{"files[]":a}:a,g&&new g)}else if(u||f==="application/json")return a0(c,"application/json"),JN(a);return a}],transformResponse:[function(a){var c=this.transitional||cu.transitional,u=c&&c.silentJSONParsing,f=c&&c.forcedJSONParsing,b=!u&&this.responseType==="json";if(b||f&&fn.isString(a)&&a.length)try{return JSON.parse(a)}catch(g){if(b)throw g.name==="SyntaxError"?s0.from(g,s0.ERR_BAD_RESPONSE,this,null,this.response):g}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:GN},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};fn.forEach(["delete","get","head"],function(a){cu.headers[a]={}});fn.forEach(["post","put","patch"],function(a){cu.headers[a]=fn.merge(QN)});var Dg=cu,XN=_n,eL=Dg,tL=function(a,c,u){var f=this||eL;return XN.forEach(u,function(g){a=g.call(f,a,c)}),a},Ty=function(a){return!!(a&&a.__CANCEL__)},l0=_n,ap=tL,nL=Ty,oL=Dg,iL=lu;function lp(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new iL}var rL=function(a){lp(a),a.headers=a.headers||{},a.data=ap.call(a,a.data,a.headers,a.transformRequest),a.headers=l0.merge(a.headers.common||{},a.headers[a.method]||{},a.headers),l0.forEach(["delete","get","head","post","put","patch","common"],function(f){delete a.headers[f]});var c=a.adapter||oL.adapter;return c(a).then(function(f){return lp(a),f.data=ap.call(a,f.data,f.headers,a.transformResponse),f},function(f){return nL(f)||(lp(a),f&&f.response&&(f.response.data=ap.call(a,f.response.data,f.response.headers,a.transformResponse))),Promise.reject(f)})},Zn=_n,Iy=function(a,c){c=c||{};var u={};function f(x,D){return Zn.isPlainObject(x)&&Zn.isPlainObject(D)?Zn.merge(x,D):Zn.isPlainObject(D)?Zn.merge({},D):Zn.isArray(D)?D.slice():D}function b(x){if(Zn.isUndefined(c[x])){if(!Zn.isUndefined(a[x]))return f(void 0,a[x])}else return f(a[x],c[x])}function g(x){if(!Zn.isUndefined(c[x]))return f(void 0,c[x])}function _(x){if(Zn.isUndefined(c[x])){if(!Zn.isUndefined(a[x]))return f(void 0,a[x])}else return f(void 0,c[x])}function k(x){if(x in c)return f(a[x],c[x]);if(x in a)return f(void 0,a[x])}var E={url:g,method:g,data:g,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:k};return Zn.forEach(Object.keys(a).concat(Object.keys(c)),function(D){var v=E[D]||b,I=v(D);Zn.isUndefined(I)&&v!==k||(u[D]=I)}),u},My={version:"0.27.2"},sL=My.version,Zi=ta,Tg={};["object","boolean","number","function","string","symbol"].forEach(function(r,a){Tg[r]=function(u){return typeof u===r||"a"+(a<1?"n ":" ")+r}});var c0={};Tg.transitional=function(a,c,u){function f(b,g){return"[Axios v"+sL+"] Transitional option '"+b+"'"+g+(u?". "+u:"")}return function(b,g,_){if(a===!1)throw new Zi(f(g," has been removed"+(c?" in "+c:"")),Zi.ERR_DEPRECATED);return c&&!c0[g]&&(c0[g]=!0,console.warn(f(g," has been deprecated since v"+c+" and will be removed in the near future"))),a?a(b,g,_):!0}};function aL(r,a,c){if(typeof r!="object")throw new Zi("options must be an object",Zi.ERR_BAD_OPTION_VALUE);for(var u=Object.keys(r),f=u.length;f-- >0;){var b=u[f],g=a[b];if(g){var _=r[b],k=_===void 0||g(_,b,r);if(k!==!0)throw new Zi("option "+b+" must be "+k,Zi.ERR_BAD_OPTION_VALUE);continue}if(c!==!0)throw new Zi("Unknown option "+b,Zi.ERR_BAD_OPTION)}}var lL={assertOptions:aL,validators:Tg},Py=_n,cL=vy,d0=CN,u0=rL,du=Iy,dL=Sy,By=lL,Ms=By.validators;function Zs(r){this.defaults=r,this.interceptors={request:new d0,response:new d0}}Zs.prototype.request=function(a,c){typeof a=="string"?(c=c||{},c.url=a):c=a||{},c=du(this.defaults,c),c.method?c.method=c.method.toLowerCase():this.defaults.method?c.method=this.defaults.method.toLowerCase():c.method="get";var u=c.transitional;u!==void 0&&By.assertOptions(u,{silentJSONParsing:Ms.transitional(Ms.boolean),forcedJSONParsing:Ms.transitional(Ms.boolean),clarifyTimeoutError:Ms.transitional(Ms.boolean)},!1);var f=[],b=!0;this.interceptors.request.forEach(function(I){typeof I.runWhen=="function"&&I.runWhen(c)===!1||(b=b&&I.synchronous,f.unshift(I.fulfilled,I.rejected))});var g=[];this.interceptors.response.forEach(function(I){g.push(I.fulfilled,I.rejected)});var _;if(!b){var k=[u0,void 0];for(Array.prototype.unshift.apply(k,f),k=k.concat(g),_=Promise.resolve(c);k.length;)_=_.then(k.shift(),k.shift());return _}for(var E=c;f.length;){var x=f.shift(),D=f.shift();try{E=x(E)}catch(v){D(v);break}}try{_=u0(E)}catch(v){return Promise.reject(v)}for(;g.length;)_=_.then(g.shift(),g.shift());return _};Zs.prototype.getUri=function(a){a=du(this.defaults,a);var c=dL(a.baseURL,a.url);return cL(c,a.params,a.paramsSerializer)};Py.forEach(["delete","get","head","options"],function(a){Zs.prototype[a]=function(c,u){return this.request(du(u||{},{method:a,url:c,data:(u||{}).data}))}});Py.forEach(["post","put","patch"],function(a){function c(u){return function(b,g,_){return this.request(du(_||{},{method:a,headers:u?{"Content-Type":"multipart/form-data"}:{},url:b,data:g}))}}Zs.prototype[a]=c(),Zs.prototype[a+"Form"]=c(!0)});var uL=Zs,hL=lu;function Js(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(f){a=f});var c=this;this.promise.then(function(u){if(!!c._listeners){var f,b=c._listeners.length;for(f=0;f<b;f++)c._listeners[f](u);c._listeners=null}}),this.promise.then=function(u){var f,b=new Promise(function(g){c.subscribe(g),f=g}).then(u);return b.cancel=function(){c.unsubscribe(f)},b},r(function(f){c.reason||(c.reason=new hL(f),a(c.reason))})}Js.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Js.prototype.subscribe=function(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]};Js.prototype.unsubscribe=function(a){if(!!this._listeners){var c=this._listeners.indexOf(a);c!==-1&&this._listeners.splice(c,1)}};Js.source=function(){var a,c=new Js(function(f){a=f});return{token:c,cancel:a}};var fL=Js,pL=function(a){return function(u){return a.apply(null,u)}},gL=_n,mL=function(a){return gL.isObject(a)&&a.isAxiosError===!0},h0=_n,bL=ky,xd=uL,kL=Iy,wL=Dg;function Ny(r){var a=new xd(r),c=bL(xd.prototype.request,a);return h0.extend(c,xd.prototype,a),h0.extend(c,a),c.create=function(f){return Ny(kL(r,f))},c}var Un=Ny(wL);Un.Axios=xd;Un.CanceledError=lu;Un.CancelToken=fL;Un.isCancel=Ty;Un.VERSION=My.version;Un.toFormData=Ey;Un.AxiosError=ta;Un.Cancel=Un.CanceledError;Un.all=function(a){return Promise.all(a)};Un.spread=pL;Un.isAxiosError=mL;Ag.exports=Un;Ag.exports.default=Un;var Rt=Ag.exports;const gd="https://elapor.helpulstudio.com/api",Lt=cr({id:"auth",state:()=>({token:localStorage.getItem("token"),user:"",role:""}),getters:{getToken:r=>r.token,getUser:r=>r.user,getRole:r=>r.role},actions:{login(r){Rt.post(`${gd}/login`,{nrp:r.nrp,password:r.password}).then(a=>{console.log(a.data.data.access_token),localStorage.setItem("token",a.data.data.access_token),this.token=localStorage.getItem("token"),this.role=a.data.data.user_role,this.role=="subordinate"?en.push("/"):en.push("/principal")}).catch(a=>{alert(a.response.data.meta.message)})},logout(){Rt({method:"post",url:`${gd}/logout`,headers:{Authorization:`Bearer ${this.token}`}}).then(r=>{localStorage.removeItem("token"),console.log("Berhasil keluar"),window.location.replace("/login")}).catch(r=>{console.log(r.response.data.message)})},fetchUser(){Rt.get(`${gd}/profile`,{headers:{Authorization:`Bearer ${this.token}`}}).then(r=>{this.user=r.data.data,this.role=r.data.data.data_user.user_role}).catch(r=>{console.log(r)})},updateProfile(r){let a=new FormData;a.append("email",r.email),a.append("user_photo",r.user_photo),a.append("name",r.name),Rt({method:"post",url:`${gd}/update-profile`,data:a,headers:{Authorization:`Bearer ${this.token}`,"Content-Type":"multipart/form-data"}}).then(c=>{this.fetchUser(),en.push("/profile"),console.log(c)}).catch(c=>{console.log(c)})}}}),_L={class:"bg-base-100 fixed px-5 py-3 bottom-0 left-0 right-0"},vL={key:0,class:"flex justify-between"},AL=S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white",height:"24",width:"24"},[S("path",{d:"M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"})],-1),CL=xt(" Home "),yL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),xL=xt(" Pekerjaan "),EL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),SL=xt(" Histori "),DL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),TL=xt(" Isidentil "),IL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"})],-1),ML=xt(" Keluar "),PL=[IL,ML],BL={key:1,class:"flex justify-between"},NL=S("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white",height:"24",width:"24"},[S("path",{d:"M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"})],-1),LL=xt(" Home "),OL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),RL=xt(" Pekerjaan "),zL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),jL=xt(" Isidentil "),FL=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),VL=xt(" Berita "),$L=S("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[S("path",{d:"M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"})],-1),HL=xt(" Keluar "),UL=[$L,HL],an={__name:"Bottombar",setup(r){const a=Lt(),c=Me(()=>a.getRole),u=()=>{a.logout()};return Yt(()=>{a.fetchUser()}),(f,b)=>{const g=lr("router-link");return pe(),we("div",_L,[Y(c)=="subordinate"?(pe(),we("div",vL,[Ce(g,{to:"/",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[AL,CL]),_:1}),Ce(g,{to:"/working",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[yL,xL]),_:1}),Ce(g,{to:"/reporting-history",class:"btn btn-ghost btn-circle capitalize"},{default:yn(()=>[EL,SL]),_:1}),Ce(g,{to:"/reporting-history-isidentil",class:"btn btn-ghost btn-circle capitalize"},{default:yn(()=>[DL,TL]),_:1}),S("button",{onClick:u,class:"btn btn-ghost btn-circle capitalize"},PL)])):(pe(),we("div",BL,[Ce(g,{to:"/principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[NL,LL]),_:1}),Ce(g,{to:"/working-principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[OL,RL]),_:1}),Ce(g,{to:"/working-isidentil-principal",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[zL,jL]),_:1}),Ce(g,{to:"/add-news",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:yn(()=>[FL,VL]),_:1}),S("button",{onClick:u,class:"btn btn-ghost btn-circle capitalize"},UL)]))])}}};var Ly="/assets/logo-polri.9819c9fb.png",qL=(r,a)=>{const c=r.__vccOpts||r;for(const[u,f]of a)c[u]=f;return c};const WL={},GL={class:"bg-base-100 sticky px-5 top-0 left-0 right-0 z-20"},KL={class:"flex justify-between"},YL=S("img",{src:Ly,class:"h-10 w-10 my-auto"},null,-1),QL=S("p",{class:"my-auto"},"E-lapor",-1),ZL=S("img",{src:"https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360",class:"w-7 h-7"},null,-1);function JL(r,a){const c=lr("router-link");return pe(),we("div",GL,[S("div",KL,[YL,QL,Ce(c,{to:"/profile",class:"btn btn-ghost btn-circle capitalize"},{default:yn(()=>[ZL]),_:1})])])}var ln=qL(WL,[["render",JL]]);const XL="https://elapor.helpulstudio.com/api",uu=cr({id:"news",state:()=>({news:[],newsDetail:""}),getters:{getNews:r=>r.news,getNewsDetails:r=>r.newsDetail},actions:{fetchNews(){const a=Lt().getToken;Rt.get("https://elapor.helpulstudio.com/getAllNews/",{Authorization:`Bearer ${a}`}).then(c=>{console.log(c.data.data),this.news=c.data.data}).catch(c=>{alert(c.response.data.meta.message)})},fetchDetailNews(r){console.log(r),this.newsDetail=this.news[r],console.log(this.newsDetail),en.push("/news-detail")},sendNews(r){const c=Lt().getToken;console.log(r);let u=new FormData;u.append("sector_id",r.sector_id),u.append("news_title",r.news_title),u.append("news_field",r.news_field),u.append("news_image",r.news_image),Rt({method:"post",url:`${XL}/news/add-news`,data:u,headers:{Authorization:`Bearer ${c}`,"Content-Type":"multipart/form-data"}}).then(f=>{console.log(f),en.push("/")}).catch(f=>{console.log(f),alert(f)})}}}),eO={class:"bg-white max-w-lg mx-auto"},tO={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},nO=S("div",{class:"flex justify-between"},[S("p",{class:"text-md font-bold text-center border-rose-800 bg-slate-800 w-full border-y-2 py-2 text-white"},"Pengumuman/Berita")],-1),oO=["src"],iO={class:"card-body"},rO={class:"card-title text-sm"},sO=S("p",{class:"text-sm"},"Klik tombol dibawah untuk membaca.",-1),aO={class:"card-actions justify-end"},lO=["onClick"],cO={__name:"HomePage",setup(r){const a=uu(),c=Me(()=>a.getNews);Yt(()=>{a.fetchNews()});const u="https://elapor.helpulstudio.com/storage/",f=b=>{a.fetchDetailNews(b)};return(b,g)=>(pe(),we("div",eO,[Ce(ln),S("main",tO,[nO,(pe(!0),we(Je,null,$t(Y(c),(_,k)=>(pe(),we("div",{class:"card card-side bg-base-100 shadow-xl",key:_.news_id},[S("figure",null,[S("img",{src:`${u}${_.news_image}`,class:"w-32 h-full",alt:"Movie"},null,8,oO)]),S("div",iO,[S("h2",rO,Le(_.news_title.substring(0,40)+".."),1),sO,S("div",aO,[S("button",{onClick:E=>f(k),class:"btn btn-sm capitalize"},"Selengkapnya",8,lO)])])]))),128))]),Ce(an)]))}},ol="https://elapor.helpulstudio.com/api",Ig=cr({id:"jobtask-principal",state:()=>({jobTaskPrincipal:[],jobTaskPrincipalDetail:null}),getters:{getJobtaskPrincipal:r=>r.jobTaskPrincipal,getJobtaskPrincipalDetail:r=>r.jobTaskPrincipalDetail},actions:{fetchAllJobtaskPrincipal(){const a=Lt().getToken;Rt.get(`${ol}/getAllJobtask`,{headers:{Authorization:`Bearer ${a}`}}).then(c=>{console.log(c.data.data),this.jobTaskPrincipal=c.data.data}).catch(c=>{console.log(c)})},fetchJobtaskPrincipalDetail(r){console.log(r);const c=Lt().getToken;Rt.get(`${ol}/jobtask/get-jobtask/${r}`,{headers:{Authorization:`Bearer ${c}`}}).then(u=>{console.log(u.data),this.jobTaskPrincipalDetail=u.data,en.push("/detail-reporting-principal")}).catch(u=>{console.log(u)})},deleteJobtaskPrincipal(r){const c=Lt().getToken;Rt.delete(`${ol}/jobtask/delete-jobtask/${r}`,{headers:{Authorization:`Bearer ${c}`}}).then(u=>{console.log(u),en.push("/working-principal")}).catch(u=>{alert(u)})},addJobtask(r){const c=Lt().getToken;console.log(r.subordinate),Rt.post(`${ol}/jobtask/add-jobtask`,{sector_id:r.sector_id,job_task_name:r.job_task_name,job_task_place:r.job_task_place,job_task_date:r.job_task_date,subordinate:r.subordinate},{headers:{Authorization:`Bearer ${c}`}}).then(u=>{console.log(u),en.push("/working-principal")}).catch(u=>{console.log(u)})},addInstruction(...r){const c=Lt().getToken,u=r[0];Rt.put(`${ol}/jobtask/update-jobtask/${u}`,{sector_id:r[2].sector_id,job_task_name:r[2].job_task_name,job_task_place:r[2].job_task_place,job_task_date:r[2].job_task_date,job_task_note:r[1].job_task_note,job_task_status:"Selesai"},{headers:{Authorization:`Bearer ${c}`}}).then(f=>{console.log(f),en.push("/working-principal")}).catch(f=>{console.log(f)})}}}),dO={class:"bg-white max-w-lg mx-auto"},uO={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},hO={class:"w-full px-4 md:px-6 text-xl text-gray-800 leading-normal",style:{"font-family":"Georgia,serif"}},fO={class:"font-sans"},pO=S("p",{class:"btn btn-xs capitalize text-base md:text-sm font-bold no-underline hover:underline"},"Ke Halaman Utama",-1),gO={class:"justify-between my-2 text-md"},mO=S("h4",{class:"font-sans break-normal text-gray-900"},[S("span",{class:"font-bold"},"Judul :")],-1),bO={class:"justify-between my-2 text-md"},kO=S("h4",{class:"font-sans break-normal text-gray-900 text-md"},[S("span",{class:"font-bold"},"Tempat :")],-1),wO={class:"justify-between my-2 text-md"},_O=S("h4",{class:"font-sans break-normal text-gray-900 text-md"},[S("span",{class:"font-bold"},"Tanggal :")],-1),vO={class:"justify-between my-2 text-md"},AO=S("h4",{class:"font-sans break-normal text-gray-900 text-md"},[S("span",{class:"font-bold"},"Status :")],-1),CO={key:0},yO=xt(": "),xO={class:"text-md md:text-base mt-10 font-bold text-slate-800 mb-3"},EO={key:0,class:"mb-4 space-y-6"},SO=["src"],DO={class:"text-md"},TO=S("h4",{class:"font-bold"},"Sumber Informasi",-1),IO=["innerHTML"],MO=S("h4",{class:"font-bold"},"Aktifitas",-1),PO=["innerHTML"],BO=S("h4",{class:"font-bold"},"Analisis",-1),NO=["innerHTML"],LO=S("h4",{class:"font-bold"},"Prediksi",-1),OO=["innerHTML"],RO=S("h4",{class:"font-bold"},"Langkah langkah yang diambil",-1),zO=["innerHTML"],jO=S("h4",{class:"font-bold"},"Anggota Terlibat",-1),FO=["innerHTML"],VO=S("h4",{class:"font-bold"},"Rekomendasi",-1),$O=["innerHTML"],HO=S("h4",{class:"font-bold"},"Arahan Kepala",-1),UO=["innerHTML"],qO={key:0,class:"mx-5"},WO=["src"],GO={class:"flex-1 px-2"},KO={class:"text-base font-bold md:text-xl leading-none mb-2"},YO={class:"text-gray-600 text-xs md:text-base"},QO={class:"flex w-full items-center mx-auto font-sans px-4 py-5"},ZO={class:"flex"},JO={class:""},XO=S("p",{class:"text-xl text-center font-bold"},"Form Pengarahan",-1),e4={class:"px-4 py-5 bg-white space-y-6 sm:p-6"},t4={class:"grid"},n4=S("label",{for:"company-website",class:"block text-sm font-medium text-gray-700"}," Pengarahan ",-1),o4={class:"mt-1 flex rounded-md shadow-sm"},i4=S("div",{class:"px-4 py-3 bg-gray-50 text-right sm:px-6"},[S("button",{type:"submit",class:"btn-sm capitalize inline-flex justify-center border border-transparent shadow-sm bg-yellow-500 text-slate-800 border-none text-sm font-medium rounded-md btn focus:outline-none"},"Beri Pengarahan")],-1),r4={__name:"DetailReportPage",setup(r){const a=Ig(),c=Me(()=>a.getJobtaskPrincipalDetail),u="https://elapor.helpulstudio.com/storage/",f=Dn({sector_id:"",job_task_name:"",job_task_place:"",job_task_date:"",job_task_note:""});return(b,g)=>(pe(),we("div",dO,[Ce(ln),S("main",uO,[S("div",hO,[S("div",fO,[pO,S("div",gO,[mO,S("p",null,Le(Y(c).job_task_name),1)]),S("div",bO,[kO,S("p",null,Le(Y(c).job_task_place),1)]),S("div",wO,[_O,S("p",null,Le(Y(c).job_task_date),1)]),S("div",vO,[AO,S("p",null,[xt(Le(Y(c).job_task_status)+" ",1),Y(c).job_task_status=="Ditugaskan"||Y(c).job_task_status=="Menunggu Konfirmasi"?(pe(),we("span",CO,[yO,(pe(!0),we(Je,null,$t(Y(c).jobtask_subordinate,_=>(pe(),we("div",{key:_},Le(_.subordinate.name),1))),128))])):ot("",!0)])]),S("p",xO,"Kategori : "+Le(Y(c).sector.sector_name),1),Y(c).jobtask_result.length>0?(pe(),we("div",EO,[S("div",null,[S("img",{src:`${u}${Y(c).jobtask_result[0].jobtask_documentation}`,class:"max-w-full my-10 h-auto rounded-lg",alt:""},null,8,SO)]),S("div",DO,[TO,S("p",{innerHTML:Y(c).jobtask_result[0].report_source_information},null,8,IO)]),S("div",null,[MO,S("div",{class:"list-decimal",innerHTML:Y(c).jobtask_result[0].report_activities},null,8,PO)]),S("div",null,[BO,S("div",{class:"list-decimal",innerHTML:Y(c).jobtask_result[0].report_analysis},null,8,NO)]),S("div",null,[LO,S("p",{innerHTML:Y(c).jobtask_result[0].report_prediction},null,8,OO)]),S("div",null,[RO,S("p",{innerHTML:Y(c).jobtask_result[0].report_steps_taken},null,8,zO)]),S("div",null,[jO,S("p",{innerHTML:Y(c).jobtask_result[0].report_teamwise},null,8,FO)]),S("div",null,[VO,S("p",{innerHTML:Y(c).jobtask_result[0].report_recommendation},null,8,$O)]),S("div",null,[HO,S("p",{innerHTML:Y(c).job_task_note},null,8,UO)])])):ot("",!0)])]),Y(c).jobtask_result[0]?(pe(),we("div",qO,[S("img",{class:"w-10 h-10 my-5 rounded-full",src:`${u}${Y(c).jobtask_result[0].subordinate.user_photo}`,alt:"Avatar of Author"},null,8,WO),S("div",GO,[S("p",KO,Le(Y(c).jobtask_result[0].subordinate.name),1),S("p",YO,"Jabatan : "+Le(Y(c).jobtask_result[0].subordinate.occupation),1)])])):ot("",!0),S("div",QO,[S("div",ZO,[Y(c).jobtask_result.length>0&&Y(c).job_task_status!="Selesai"?(pe(),we("form",{key:0,onSubmit:g[1]||(g[1]=bo(_=>Y(a).addInstruction(Y(c).job_task_id,f,Y(c)),["prevent"])),enctype:"multipart/form-data"},[S("div",JO,[XO,S("div",e4,[S("div",t4,[n4,S("div",o4,[kt(S("input",{type:"text",name:"company-website",id:"company-website",class:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 p-2",placeholder:"pengarahan","onUpdate:modelValue":g[0]||(g[0]=_=>f.job_task_note=_)},null,512),[[yt,f.job_task_note]])])])]),i4])],32)):Y(c).jobtask_result.length==0?(pe(),we("button",{key:1,class:"btn btn-sm bg-rose-700 border-none",onClick:g[2]||(g[2]=_=>Y(a).deleteJobtaskPrincipal(Y(c).job_task_id))},"Hapus Tugas")):ot("",!0)])])]),Ce(an)]))}};function Uo(r){return[null,void 0].indexOf(r)!==-1}function s4(r,a,c){const{object:u,valueProp:f,mode:b}=Bn(r),g=Nn().proxy,_=c.iv,k=D=>{_.value=x(D);const v=E(D);a.emit("change",v,g),a.emit("input",v),a.emit("update:modelValue",v)},E=D=>u.value||Uo(D)?D:Array.isArray(D)?D.map(v=>v[f.value]):D[f.value],x=D=>Uo(D)?b.value==="single"?{}:[]:D;return{update:k}}function a4(r,a){const{value:c,modelValue:u,mode:f,valueProp:b}=Bn(r),g=mt(f.value!=="single"?[]:{}),_=u&&u.value!==void 0?u:c,k=Me(()=>f.value==="single"?g.value[b.value]:g.value.map(x=>x[b.value])),E=Me(()=>f.value!=="single"?g.value.map(x=>x[b.value]).join(","):g.value[b.value]);return{iv:g,internalValue:g,ev:_,externalValue:_,textValue:E,plainValue:k}}function l4(r,a,c){const{regex:u}=Bn(r),f=Nn().proxy,b=c.isOpen,g=c.open,_=mt(null),k=mt(null),E=()=>{_.value=""},x=I=>{_.value=I.target.value},D=I=>{if(u&&u.value){let $=u.value;typeof $=="string"&&($=new RegExp($)),I.key.match($)||I.preventDefault()}},v=I=>{if(u&&u.value){let le=(I.clipboardData||window.clipboardData).getData("Text"),G=u.value;typeof G=="string"&&(G=new RegExp(G)),le.split("").every(H=>!!H.match(G))||I.preventDefault()}a.emit("paste",I,f)};return rn(_,I=>{!b.value&&I&&g(),a.emit("search-change",I,f)}),{search:_,input:k,clearSearch:E,handleSearchInput:x,handleKeypress:D,handlePaste:v}}function c4(r,a,c){const{groupSelect:u,mode:f,groups:b,disabledProp:g}=Bn(r),_=mt(null),k=x=>{x===void 0||x!==null&&x[g.value]||b.value&&x&&x.group&&(f.value==="single"||!u.value)||(_.value=x)};return{pointer:_,setPointer:k,clearPointer:()=>{k(null)}}}function md(r,a=!0){return a?String(r).toLowerCase().trim():String(r).normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase().trim()}function d4(r){return Object.prototype.toString.call(r)==="[object Object]"}function u4(r,a){const c=a.slice().sort();return r.length===a.length&&r.slice().sort().every(function(u,f){return u===c[f]})}function h4(r,a,c){const{options:u,mode:f,trackBy:b,limit:g,hideSelected:_,createTag:k,createOption:E,label:x,appendNewTag:D,appendNewOption:v,multipleLabel:I,object:$,loading:le,delay:G,resolveOnLoad:H,minChars:N,filterResults:W,clearOnSearch:te,clearOnSelect:ie,valueProp:ee,canDeselect:V,max:q,strict:Z,closeOnSelect:K,groups:oe,reverse:R,infinite:xe,groupOptions:me,groupHideEmpty:Ie,groupSelect:Re,onCreate:Se,disabledProp:Ue,searchStart:ht}=Bn(r),et=Nn().proxy,ze=c.iv,Fe=c.ev,qe=c.search,ut=c.clearSearch,L=c.update,re=c.pointer,de=c.clearPointer,se=c.focus,ne=c.deactivate,rt=c.close,Ee=mt([]),Oe=mt([]),z=mt(!1),U=mt(null),X=mt(xe.value&&g.value===-1?10:g.value),ce=Me(()=>k.value||E.value||!1),ue=Me(()=>D.value!==void 0?D.value:v.value!==void 0?v.value:!0),ke=Me(()=>{if(oe.value){let J=Oe.value||[],Ne=[];return J.forEach(nt=>{Ci(nt[me.value]).forEach(Zt=>{Ne.push(Object.assign({},Zt,nt[Ue.value]?{[Ue.value]:!0}:{}))})}),Ne}else{let J=Ci(Oe.value||[]);return Ee.value.length&&(J=J.concat(Ee.value)),J}}),ye=Me(()=>oe.value?wo((Oe.value||[]).map(J=>{const Ne=Ci(J[me.value]);return{...J,group:!0,[me.value]:Jo(Ne,!1).map(nt=>Object.assign({},nt,J[Ue.value]?{[Ue.value]:!0}:{})),__VISIBLE__:Jo(Ne).map(nt=>Object.assign({},nt,J[Ue.value]?{[Ue.value]:!0}:{}))}})):[]),_e=Me(()=>{let J=ke.value;return R.value&&(J=J.reverse()),Ae.value.length&&(J=Ae.value.concat(J)),Jo(J)}),ve=Me(()=>{let J=_e.value;return X.value>0&&(J=J.slice(0,X.value)),J}),he=Me(()=>{switch(f.value){case"single":return!Uo(ze.value[ee.value]);case"multiple":case"tags":return!Uo(ze.value)&&ze.value.length>0}}),je=Me(()=>I!==void 0&&I.value!==void 0?I.value(ze.value,et):ze.value&&ze.value.length>1?`${ze.value.length} options selected`:"1 option selected"),Te=Me(()=>!ke.value.length&&!z.value&&!Ae.value.length),Be=Me(()=>ke.value.length>0&&ve.value.length==0&&(qe.value&&oe.value||!oe.value)),Ae=Me(()=>ce.value===!1||!qe.value?[]:ko(qe.value)!==-1?[]:[{[ee.value]:qe.value,[x.value]:qe.value,[$e.value]:qe.value,__CREATE__:!0}]),$e=Me(()=>b.value||x.value),st=Me(()=>{switch(f.value){case"single":return null;case"multiple":case"tags":return[]}}),Qe=Me(()=>le.value||z.value),We=J=>{switch(typeof J!="object"&&(J=qn(J)),f.value){case"single":L(J);break;case"multiple":case"tags":L(ze.value.concat(J));break}a.emit("select",Tn(J),J,et)},dt=J=>{switch(typeof J!="object"&&(J=qn(J)),f.value){case"single":Qt();break;case"tags":case"multiple":L(Array.isArray(J)?ze.value.filter(Ne=>J.map(nt=>nt[ee.value]).indexOf(Ne[ee.value])===-1):ze.value.filter(Ne=>Ne[ee.value]!=J[ee.value]));break}a.emit("deselect",Tn(J),J,et)},Tn=J=>$.value?J:J[ee.value],ro=J=>{dt(J)},Ut=(J,Ne)=>{if(Ne.button!==0){Ne.preventDefault();return}ro(J)},Qt=()=>{a.emit("clear",et),L(st.value)},Dt=J=>{if(J.group!==void 0)return f.value==="single"?!1:Ai(J[me.value])&&J[me.value].length;switch(f.value){case"single":return!Uo(ze.value)&&ze.value[ee.value]==J[ee.value];case"tags":case"multiple":return!Uo(ze.value)&&ze.value.map(Ne=>Ne[ee.value]).indexOf(J[ee.value])!==-1}},Ft=J=>J[Ue.value]===!0,In=()=>q===void 0||q.value===-1||!he.value&&q.value>0?!1:ze.value.length>=q.value,oa=J=>{if(!Ft(J)){if(Se&&Se.value&&!Dt(J)&&J.__CREATE__&&(J={...J},delete J.__CREATE__,J=Se.value(J,et),J instanceof Promise)){z.value=!0,J.then(Ne=>{z.value=!1,dr(Ne)});return}dr(J)}},dr=J=>{switch(J.__CREATE__&&(J={...J},delete J.__CREATE__),f.value){case"single":if(J&&Dt(J)){V.value&&dt(J);return}J&&Ge(J),ie.value&&ut(),K.value&&(de(),rt()),J&&We(J);break;case"multiple":if(J&&Dt(J)){dt(J);return}if(In())return;J&&(Ge(J),We(J)),ie.value&&ut(),_.value&&de(),K.value&&rt();break;case"tags":if(J&&Dt(J)){dt(J);return}if(In())return;J&&Ge(J),ie.value&&ut(),J&&We(J),_.value&&de(),K.value&&rt();break}K.value||se()},ia=J=>{if(!(Ft(J)||f.value==="single"||!Re.value)){switch(f.value){case"multiple":case"tags":No(J[me.value])?dt(J[me.value]):We(J[me.value].filter(Ne=>ze.value.map(nt=>nt[ee.value]).indexOf(Ne[ee.value])===-1).filter(Ne=>!Ne[Ue.value]).filter((Ne,nt)=>ze.value.length+1+nt<=q.value||q.value===-1));break}K.value&&ne()}},Ge=J=>{qn(J[ee.value])===void 0&&ce.value&&(a.emit("tag",J[ee.value],et),a.emit("option",J[ee.value],et),ue.value&&aa(J),ut())},ra=()=>{f.value!=="single"&&We(ve.value)},No=J=>J.find(Ne=>!Dt(Ne)&&!Ne[Ue.value])===void 0,Ai=J=>J.find(Ne=>!Dt(Ne))===void 0,qn=J=>ke.value[ke.value.map(Ne=>String(Ne[ee.value])).indexOf(String(J))],ko=(J,Ne=!0)=>ke.value.map(nt=>parseInt(nt[$e.value])==nt[$e.value]?parseInt(nt[$e.value]):nt[$e.value]).indexOf(parseInt(J)==J?parseInt(J):J),sa=J=>["tags","multiple"].indexOf(f.value)!==-1&&_.value&&Dt(J),aa=J=>{Ee.value.push(J)},wo=J=>Ie.value?J.filter(Ne=>qe.value?Ne.__VISIBLE__.length:Ne[me.value].length):J.filter(Ne=>qe.value?Ne.__VISIBLE__.length:!0),Jo=(J,Ne=!0)=>{let nt=J;return qe.value&&W.value&&(nt=nt.filter(Zt=>ht.value?md(Zt[$e.value],Z.value).startsWith(md(qe.value,Z.value)):md(Zt[$e.value],Z.value).indexOf(md(qe.value,Z.value))!==-1)),_.value&&Ne&&(nt=nt.filter(Zt=>!sa(Zt))),nt},Ci=J=>{let Ne=J;return d4(Ne)&&(Ne=Object.keys(Ne).map(nt=>{let Zt=Ne[nt];return{[ee.value]:nt,[$e.value]:Zt,[x.value]:Zt}})),Ne=Ne.map(nt=>typeof nt=="object"?nt:{[ee.value]:nt,[$e.value]:nt,[x.value]:nt}),Ne},Lo=()=>{Uo(Fe.value)||(ze.value=xi(Fe.value))},yi=J=>(z.value=!0,new Promise((Ne,nt)=>{u.value(qe.value,et).then(Zt=>{Oe.value=Zt||[],typeof J=="function"&&J(Zt),z.value=!1}).catch(Zt=>{console.error(Zt),Oe.value=[],z.value=!1}).finally(()=>{Ne()})})),Wn=()=>{if(!!he.value)if(f.value==="single"){let J=qn(ze.value[ee.value]);if(J!==void 0){let Ne=J[x.value];ze.value[x.value]=Ne,$.value&&(Fe.value[x.value]=Ne)}}else ze.value.forEach((J,Ne)=>{let nt=qn(ze.value[Ne][ee.value]);if(nt!==void 0){let Zt=nt[x.value];ze.value[Ne][x.value]=Zt,$.value&&(Fe.value[Ne][x.value]=Zt)}})},Xo=J=>{yi(J)},xi=J=>Uo(J)?f.value==="single"?{}:[]:$.value?J:f.value==="single"?qn(J)||{}:J.filter(Ne=>!!qn(Ne)).map(Ne=>qn(Ne)),Zr=()=>{U.value=rn(qe,J=>{J.length<N.value||!J&&N.value!==0||(z.value=!0,te.value&&(Oe.value=[]),setTimeout(()=>{J==qe.value&&u.value(qe.value,et).then(Ne=>{(J==qe.value||!qe.value)&&(Oe.value=Ne,re.value=ve.value.filter(nt=>nt[Ue.value]!==!0)[0]||null,z.value=!1)}).catch(Ne=>{console.error(Ne)})},G.value))},{flush:"sync"})};if(f.value!=="single"&&!Uo(Fe.value)&&!Array.isArray(Fe.value))throw new Error(`v-model must be an array when using "${f.value}" mode`);return u&&typeof u.value=="function"?H.value?yi(Lo):$.value==!0&&Lo():(Oe.value=u.value,Lo()),G.value>-1&&Zr(),rn(G,(J,Ne)=>{U.value&&U.value(),J>=0&&Zr()}),rn(Fe,J=>{if(Uo(J)){ze.value=xi(J);return}switch(f.value){case"single":($.value?J[ee.value]!=ze.value[ee.value]:J!=ze.value[ee.value])&&(ze.value=xi(J));break;case"multiple":case"tags":u4($.value?J.map(Ne=>Ne[ee.value]):J,ze.value.map(Ne=>Ne[ee.value]))||(ze.value=xi(J));break}},{deep:!0}),rn(u,(J,Ne)=>{typeof r.options=="function"?H.value&&yi():(Oe.value=r.options,Object.keys(ze.value).length||Lo(),Wn())}),rn(x,Wn),{pfo:_e,fo:ve,filteredOptions:ve,hasSelected:he,multipleLabelText:je,eo:ke,extendedOptions:ke,fg:ye,filteredGroups:ye,noOptions:Te,noResults:Be,resolving:z,busy:Qe,offset:X,select:We,deselect:dt,remove:ro,selectAll:ra,clear:Qt,isSelected:Dt,isDisabled:Ft,isMax:In,getOption:qn,handleOptionClick:oa,handleGroupClick:ia,handleTagRemove:Ut,refreshOptions:Xo,resolveOptions:yi,refreshLabels:Wn}}function f4(r,a,c){const{valueProp:u,showOptions:f,searchable:b,groupLabel:g,groups:_,mode:k,groupSelect:E,disabledProp:x}=Bn(r),D=c.fo,v=c.fg,I=c.handleOptionClick,$=c.handleGroupClick,le=c.search,G=c.pointer,H=c.setPointer,N=c.clearPointer,W=c.multiselect,te=c.isOpen,ie=Me(()=>D.value.filter(L=>!L[x.value])),ee=Me(()=>v.value.filter(L=>!L[x.value])),V=Me(()=>k.value!=="single"&&E.value),q=Me(()=>G.value&&G.value.group),Z=Me(()=>qe(G.value)),K=Me(()=>{const L=q.value?G.value:qe(G.value),re=ee.value.map(se=>se[g.value]).indexOf(L[g.value]);let de=ee.value[re-1];return de===void 0&&(de=R.value),de}),oe=Me(()=>{let L=ee.value.map(re=>re.label).indexOf(q.value?G.value[g.value]:qe(G.value)[g.value])+1;return ee.value.length<=L&&(L=0),ee.value[L]}),R=Me(()=>[...ee.value].slice(-1)[0]),xe=Me(()=>G.value.__VISIBLE__.filter(L=>!L[x.value])[0]),me=Me(()=>{const L=Z.value.__VISIBLE__.filter(re=>!re[x.value]);return L[L.map(re=>re[u.value]).indexOf(G.value[u.value])-1]}),Ie=Me(()=>{const L=qe(G.value).__VISIBLE__.filter(re=>!re[x.value]);return L[L.map(re=>re[u.value]).indexOf(G.value[u.value])+1]}),Re=Me(()=>[...K.value.__VISIBLE__.filter(L=>!L[x.value])].slice(-1)[0]),Se=Me(()=>[...R.value.__VISIBLE__.filter(L=>!L[x.value])].slice(-1)[0]),Ue=L=>!!G.value&&(!L.group&&G.value[u.value]==L[u.value]||L.group!==void 0&&G.value[g.value]==L[g.value])?!0:void 0,ht=()=>{H(ie.value[0]||null)},et=()=>{!G.value||G.value[x.value]===!0||(q.value?$(G.value):I(G.value))},ze=()=>{if(G.value===null)H((_.value&&V.value?ee.value[0]:ie.value[0])||null);else if(_.value&&V.value){let L=q.value?xe.value:Ie.value;L===void 0&&(L=oe.value),H(L||null)}else{let L=ie.value.map(re=>re[u.value]).indexOf(G.value[u.value])+1;ie.value.length<=L&&(L=0),H(ie.value[L]||null)}Hn(()=>{ut()})},Fe=()=>{if(G.value===null){let L=ie.value[ie.value.length-1];_.value&&V.value&&(L=Se.value,L===void 0&&(L=R.value)),H(L||null)}else if(_.value&&V.value){let L=q.value?Re.value:me.value;L===void 0&&(L=q.value?K.value:Z.value),H(L||null)}else{let L=ie.value.map(re=>re[u.value]).indexOf(G.value[u.value])-1;L<0&&(L=ie.value.length-1),H(ie.value[L]||null)}Hn(()=>{ut()})},qe=L=>ee.value.find(re=>re.__VISIBLE__.map(de=>de[u.value]).indexOf(L[u.value])!==-1),ut=()=>{let L=W.value.querySelector("[data-pointed]");if(!L)return;let re=L.parentElement.parentElement;_.value&&(re=q.value?L.parentElement.parentElement.parentElement:L.parentElement.parentElement.parentElement.parentElement),L.offsetTop+L.offsetHeight>re.clientHeight+re.scrollTop&&(re.scrollTop=L.offsetTop+L.offsetHeight-re.clientHeight),L.offsetTop<re.scrollTop&&(re.scrollTop=L.offsetTop)};return rn(le,L=>{b.value&&(L.length&&f.value?ht():N())}),rn(te,L=>{if(L){let re=W.value.querySelectorAll("[data-selected]")[0];if(!re)return;let de=re.parentElement.parentElement;Hn(()=>{de.scrollTop>0||(de.scrollTop=re.offsetTop)})}}),{pointer:G,canPointGroups:V,isPointed:Ue,setPointerFirst:ht,selectPointer:et,forwardPointer:ze,backwardPointer:Fe}}function p4(r,a,c){const{disabled:u}=Bn(r),f=Nn().proxy,b=mt(!1);return{isOpen:b,open:()=>{b.value||u.value||(b.value=!0,a.emit("open",f))},close:()=>{!b.value||(b.value=!1,a.emit("close",f))}}}function g4(r,a,c){const{searchable:u,disabled:f}=Bn(r),b=c.input,g=c.open,_=c.close,k=c.clearSearch,E=c.isOpen,x=mt(null),D=mt(null),v=mt(!1),I=Me(()=>u.value||f.value?-1:0),$=()=>{u.value&&b.value.blur(),x.value.blur()},le=()=>{u.value&&!f.value&&b.value.focus()},G=()=>{le()},H=()=>{f.value||(v.value=!0,g())},N=()=>{v.value=!1,setTimeout(()=>{v.value||(_(),k())},1)};return{multiselect:x,tags:D,tabindex:I,isActive:v,blur:$,focus:le,handleFocus:G,activate:H,deactivate:N,handleCaretClick:()=>{N(),$()},handleMousedown:ie=>{E.value&&(ie.target.isEqualNode(x.value)||ie.target.isEqualNode(D.value))?setTimeout(()=>{N()},0):document.activeElement.isEqualNode(x.value)&&!E.value&&H()}}}function m4(r,a,c){const{mode:u,addTagOn:f,openDirection:b,searchable:g,showOptions:_,valueProp:k,groups:E,addOptionOn:x,createTag:D,createOption:v,reverse:I}=Bn(r),$=Nn().proxy,le=c.iv,G=c.update,H=c.search,N=c.setPointer,W=c.selectPointer,te=c.backwardPointer,ie=c.forwardPointer,ee=c.isOpen,V=c.open,q=c.blur,Z=c.fo,K=Me(()=>D.value||v.value||!1),oe=Me(()=>f.value!==void 0?f.value:x.value!==void 0?x.value:["enter"]),R=()=>{u.value==="tags"&&!_.value&&K.value&&g.value&&!E.value&&N(Z.value[Z.value.map(Ie=>Ie[k.value]).indexOf(H.value)])};return{handleKeydown:Ie=>{switch(a.emit("keydown",Ie,$),Ie.key){case"Backspace":if(u.value==="single"||g.value&&[null,""].indexOf(H.value)===-1||le.value.length===0)return;G([...le.value].slice(0,-1));break;case"Enter":if(Ie.preventDefault(),oe.value.indexOf("enter")===-1&&K.value)return;R(),W();break;case" ":if(!K.value&&!g.value){Ie.preventDefault(),R(),W();return}if(!K.value)return!1;if(oe.value.indexOf("space")===-1&&K.value)return;Ie.preventDefault(),R(),W();break;case"Tab":case";":case",":if(oe.value.indexOf(Ie.key.toLowerCase())===-1||!K.value)return;R(),W(),Ie.preventDefault();break;case"Escape":q();break;case"ArrowUp":if(Ie.preventDefault(),!_.value)return;ee.value||V(),te();break;case"ArrowDown":if(Ie.preventDefault(),!_.value)return;ee.value||V(),ie();break}},handleKeyup:Ie=>{a.emit("keyup",Ie,$)},preparePointer:R}}function b4(r,a,c){const{classes:u,disabled:f,openDirection:b,showOptions:g}=Bn(r),_=c.isOpen,k=c.isPointed,E=c.isSelected,x=c.isDisabled,D=c.isActive,v=c.canPointGroups,I=c.resolving,$=c.fo,le=Me(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",spacer:"multiselect-spacer",...u.value})),G=Me(()=>!!(_.value&&g.value&&(!I.value||I.value&&$.value.length)));return{classList:Me(()=>{const N=le.value;return{container:[N.container].concat(f.value?N.containerDisabled:[]).concat(G.value&&b.value==="top"?N.containerOpenTop:[]).concat(G.value&&b.value!=="top"?N.containerOpen:[]).concat(D.value?N.containerActive:[]),spacer:N.spacer,singleLabel:N.singleLabel,singleLabelText:N.singleLabelText,multipleLabel:N.multipleLabel,search:N.search,tags:N.tags,tag:[N.tag].concat(f.value?N.tagDisabled:[]),tagRemove:N.tagRemove,tagRemoveIcon:N.tagRemoveIcon,tagsSearchWrapper:N.tagsSearchWrapper,tagsSearch:N.tagsSearch,tagsSearchCopy:N.tagsSearchCopy,placeholder:N.placeholder,caret:[N.caret].concat(_.value?N.caretOpen:[]),clear:N.clear,clearIcon:N.clearIcon,spinner:N.spinner,inifinite:N.inifinite,inifiniteSpinner:N.inifiniteSpinner,dropdown:[N.dropdown].concat(b.value==="top"?N.dropdownTop:[]).concat(!_.value||!g.value||!G.value?N.dropdownHidden:[]),options:[N.options].concat(b.value==="top"?N.optionsTop:[]),group:N.group,groupLabel:W=>{let te=[N.groupLabel];return k(W)?te.push(E(W)?N.groupLabelSelectedPointed:N.groupLabelPointed):E(W)&&v.value?te.push(x(W)?N.groupLabelSelectedDisabled:N.groupLabelSelected):x(W)&&te.push(N.groupLabelDisabled),v.value&&te.push(N.groupLabelPointable),te},groupOptions:N.groupOptions,option:(W,te)=>{let ie=[N.option];return k(W)?ie.push(E(W)?N.optionSelectedPointed:N.optionPointed):E(W)?ie.push(x(W)?N.optionSelectedDisabled:N.optionSelected):(x(W)||te&&x(te))&&ie.push(N.optionDisabled),ie},noOptions:N.noOptions,noResults:N.noResults,fakeInput:N.fakeInput}}),showDropdown:G}}function k4(r,a,c){const{limit:u,infinite:f}=Bn(r),b=c.isOpen,g=c.offset,_=c.search,k=c.pfo,E=c.eo,x=mt(null),D=mt(null),v=Me(()=>g.value<k.value.length),I=le=>{const{isIntersecting:G,target:H}=le[0];if(G){const N=H.offsetParent,W=N.scrollTop;g.value+=u.value==-1?10:u.value,Hn(()=>{N.scrollTop=W})}},$=()=>{b.value&&g.value<k.value.length?x.value.observe(D.value):!b.value&&x.value&&x.value.disconnect()};return rn(b,()=>{!f.value||$()}),rn(_,()=>{!f.value||(g.value=u.value,$())},{flush:"post"}),rn(E,()=>{!f.value||$()},{immediate:!1,flush:"post"}),Yt(()=>{window&&window.IntersectionObserver&&(x.value=new IntersectionObserver(I))}),{hasMore:v,infiniteLoader:D}}function w4(r,a,c){const{placeholder:u,id:f,valueProp:b,label:g,mode:_,groupLabel:k}=Bn(r),E=c.pointer,x=c.iv,D=c.isSelected,v=c.hasSelected,I=c.multipleLabelText,$=mt(null),le=Me(()=>{let ee=[];return f&&f.value&&ee.push(f.value),ee.push("multiselect-options"),ee.join("-")}),G=Me(()=>{let ee=[];if(f&&f.value&&ee.push(f.value),ee.push("multiselect-option"),E.value&&E.value[b.value]!==void 0)return ee.push(E.value[b.value]),ee.join("-")}),H=Me(()=>{let ee=[];return $.value&&ee.push($.value),u.value&&!v.value&&ee.push(u.value),_.value==="single"&&x.value&&x.value[g.value]!==void 0&&ee.push(x.value[g.value]),_.value==="multiple"&&v.value&&ee.push(I.value),_.value==="tags"&&v.value&&ee.push(...x.value.map(V=>V[g.value])),ee.join(", ")}),N=Me(()=>H.value),W=ee=>{let V=[];return f&&f.value&&V.push(f.value),V.push("multiselect-option"),V.push(ee[b.value]),V.join("-")},te=ee=>{let V=[];return D(ee)&&V.push("\u2713"),V.push(ee[g.value]),V.join(" ")},ie=ee=>{let V=[];return V.push(ee[k.value]),V.join(" ")};return Yt(()=>{if(f&&f.value&&document&&document.querySelector){let ee=document.querySelector(`[for="${f.value}"]`);$.value=ee?ee.innerText:null}}),{ariaOwns:le,ariaLabel:H,ariaPlaceholder:N,ariaActiveDescendant:G,ariaOptionId:W,ariaOptionLabel:te,ariaGroupLabel:ie}}function _4(r,a,c,u={}){return c.forEach(f=>{f&&(u={...u,...f(r,a,u)})}),u}var Mg={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1}},setup(r,a){return _4(r,a,[a4,c4,p4,l4,s4,g4,h4,k4,f4,m4,b4,w4])}};const v4=["tabindex","id","dir","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],A4=["type","modelValue","value","autocomplete","id","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],C4=["onClick"],y4=["type","modelValue","value","id","autocomplete","aria-owns","aria-expanded","aria-label","aria-placeholder","aria-activedescendant"],x4=["innerHTML"],E4=["innerHTML"],S4=["id"],D4=["data-pointed","onMouseenter","onClick"],T4=["innerHTML"],I4=["aria-label"],M4=["data-pointed","data-selected","id","aria-label","onMouseenter","onClick"],P4=["innerHTML"],B4=["id","aria-label","data-pointed","data-selected","onMouseenter","onClick"],N4=["innerHTML"],L4=["innerHTML"],O4=["innerHTML"],R4=["value"],z4=["name","value"],j4=["name","value"];function F4(r,a,c,u,f,b){return pe(),we("div",{ref:"multiselect",tabindex:r.tabindex,class:it(r.classList.container),id:c.searchable?void 0:c.id,dir:c.rtl?"rtl":void 0,"aria-owns":r.ariaOwns,"aria-expanded":r.isOpen,"aria-label":r.ariaLabel,"aria-placeholder":r.ariaPlaceholder,"aria-activedescendant":r.ariaActiveDescendant,onFocusin:a[8]||(a[8]=(...g)=>r.activate&&r.activate(...g)),onFocusout:a[9]||(a[9]=(...g)=>r.deactivate&&r.deactivate(...g)),onKeydown:a[10]||(a[10]=(...g)=>r.handleKeydown&&r.handleKeydown(...g)),onKeyup:a[11]||(a[11]=(...g)=>r.handleKeyup&&r.handleKeyup(...g)),onFocus:a[12]||(a[12]=(...g)=>r.handleFocus&&r.handleFocus(...g)),onMousedown:a[13]||(a[13]=(...g)=>r.handleMousedown&&r.handleMousedown(...g)),role:"combobox"},[ot(" Search "),c.mode!=="tags"&&c.searchable&&!c.disabled?(pe(),we("input",Bd({key:0,type:c.inputType,modelValue:r.search,value:r.search,class:r.classList.search,autocomplete:c.autocomplete,id:c.searchable?c.id:void 0},c.attrs,{"aria-owns":r.ariaOwns,"aria-expanded":r.isOpen,"aria-label":r.ariaLabel,"aria-placeholder":r.ariaPlaceholder,"aria-activedescendant":r.ariaActiveDescendant,onInput:a[0]||(a[0]=(...g)=>r.handleSearchInput&&r.handleSearchInput(...g)),onKeypress:a[1]||(a[1]=(...g)=>r.handleKeypress&&r.handleKeypress(...g)),onPaste:a[2]||(a[2]=bo((...g)=>r.handlePaste&&r.handlePaste(...g),["stop"])),ref:"input",role:"combobox"}),null,16,A4)):ot("v-if",!0),ot(" Tags (with search) "),c.mode=="tags"?(pe(),we("div",{key:1,class:it(r.classList.tags)},[(pe(!0),we(Je,null,$t(r.iv,(g,_,k)=>Cn(r.$slots,"tag",{option:g,handleTagRemove:r.handleTagRemove,disabled:c.disabled},()=>[(pe(),we("span",{class:it(r.classList.tag),key:k},[xt(Le(g[c.label])+" ",1),c.disabled?ot("v-if",!0):(pe(),we("span",{key:0,class:it(r.classList.tagRemove),onClick:E=>r.handleTagRemove(g,E)},[S("span",{class:it(r.classList.tagRemoveIcon)},null,2)],10,C4))],2))])),256)),S("div",{class:it(r.classList.tagsSearchWrapper),ref:"tags"},[ot(" Used for measuring search width "),S("span",{class:it(r.classList.tagsSearchCopy)},Le(r.search),3),ot(" Actual search input "),c.searchable&&!c.disabled?(pe(),we("input",Bd({key:0,type:c.inputType,modelValue:r.search,value:r.search,class:r.classList.tagsSearch,id:c.searchable?c.id:void 0,autocomplete:c.autocomplete},c.attrs,{"aria-owns":r.ariaOwns,"aria-expanded":r.isOpen,"aria-label":r.ariaLabel,"aria-placeholder":r.ariaPlaceholder,"aria-activedescendant":r.ariaActiveDescendant,onInput:a[3]||(a[3]=(...g)=>r.handleSearchInput&&r.handleSearchInput(...g)),onKeypress:a[4]||(a[4]=(...g)=>r.handleKeypress&&r.handleKeypress(...g)),onPaste:a[5]||(a[5]=bo((...g)=>r.handlePaste&&r.handlePaste(...g),["stop"])),ref:"input",role:"combobox"}),null,16,y4)):ot("v-if",!0)],2)],2)):ot("v-if",!0),ot(" Single label "),c.mode=="single"&&r.hasSelected&&!r.search&&r.iv?Cn(r.$slots,"singlelabel",{key:2,value:r.iv},()=>[S("div",{class:it(r.classList.singleLabel)},[S("span",{class:it(r.classList.singleLabelText),innerHTML:r.iv[c.label]},null,10,x4)],2)]):ot("v-if",!0),ot(" Multiple label "),c.mode=="multiple"&&r.hasSelected&&!r.search?Cn(r.$slots,"multiplelabel",{key:3,values:r.iv},()=>[S("div",{class:it(r.classList.multipleLabel),innerHTML:r.multipleLabelText},null,10,E4)]):ot("v-if",!0),ot(" Placeholder "),c.placeholder&&!r.hasSelected&&!r.search?Cn(r.$slots,"placeholder",{key:4},()=>[S("div",{class:it(r.classList.placeholder)},Le(c.placeholder),3)]):ot("v-if",!0),ot(" Spinner "),c.loading||r.resolving?Cn(r.$slots,"spinner",{key:5},()=>[S("span",{class:it(r.classList.spinner)},null,2)]):ot("v-if",!0),ot(" Clear "),r.hasSelected&&!c.disabled&&c.canClear&&!r.busy?Cn(r.$slots,"clear",{key:6,clear:r.clear},()=>[S("span",{class:it(r.classList.clear),onClick:a[6]||(a[6]=(...g)=>r.clear&&r.clear(...g))},[S("span",{class:it(r.classList.clearIcon)},null,2)],2)]):ot("v-if",!0),ot(" Caret "),c.caret&&c.showOptions?Cn(r.$slots,"caret",{key:7},()=>[S("span",{class:it(r.classList.caret),onClick:a[7]||(a[7]=(...g)=>r.handleCaretClick&&r.handleCaretClick(...g))},null,2)]):ot("v-if",!0),ot(" Options "),S("div",{class:it(r.classList.dropdown),tabindex:"-1"},[Cn(r.$slots,"beforelist",{options:r.fo}),S("ul",{class:it(r.classList.options),id:r.ariaOwns,role:"listbox"},[c.groups?(pe(!0),we(Je,{key:0},$t(r.fg,(g,_,k)=>(pe(),we("li",{class:it(r.classList.group),key:k},[S("div",{class:it(r.classList.groupLabel(g)),"data-pointed":r.isPointed(g),onMouseenter:E=>r.setPointer(g),onClick:E=>r.handleGroupClick(g),role:"none"},[Cn(r.$slots,"grouplabel",{group:g,isSelected:r.isSelected,isPointed:r.isPointed},()=>[S("span",{innerHTML:g[c.groupLabel]},null,8,T4)])],42,D4),S("ul",{class:it(r.classList.groupOptions),"aria-label":r.ariaGroupLabel(g),role:"group"},[(pe(!0),we(Je,null,$t(g.__VISIBLE__,(E,x,D)=>(pe(),we("li",{class:it(r.classList.option(E,g)),key:D,"data-pointed":r.isPointed(E),"data-selected":r.isSelected(E)||void 0,id:r.ariaOptionId(E),"aria-label":r.ariaOptionLabel(E),onMouseenter:v=>r.setPointer(E),onClick:v=>r.handleOptionClick(E),role:"option"},[Cn(r.$slots,"option",{option:E,isSelected:r.isSelected,isPointed:r.isPointed,search:r.search},()=>[S("span",{innerHTML:E[c.label]},null,8,P4)])],42,M4))),128))],10,I4)],2))),128)):(pe(!0),we(Je,{key:1},$t(r.fo,(g,_,k)=>(pe(),we("li",{id:r.ariaOptionId(g),"aria-label":r.ariaOptionLabel(g),class:it(r.classList.option(g)),key:k,"data-pointed":r.isPointed(g),"data-selected":r.isSelected(g)||void 0,onMouseenter:E=>r.setPointer(g),onClick:E=>r.handleOptionClick(g),role:"option"},[Cn(r.$slots,"option",{option:g,isSelected:r.isSelected,isPointed:r.isPointed,search:r.search},()=>[S("span",{innerHTML:g[c.label]},null,8,N4)])],42,B4))),128))],10,S4),r.noOptions?Cn(r.$slots,"nooptions",{key:0},()=>[S("div",{class:it(r.classList.noOptions),innerHTML:c.noOptionsText},null,10,L4)]):ot("v-if",!0),r.noResults?Cn(r.$slots,"noresults",{key:1},()=>[S("div",{class:it(r.classList.noResults),innerHTML:c.noResultsText},null,10,O4)]):ot("v-if",!0),c.infinite&&r.hasMore?(pe(),we("div",{key:2,class:it(r.classList.inifinite),ref:"infiniteLoader"},[Cn(r.$slots,"infinite",{},()=>[S("span",{class:it(r.classList.inifiniteSpinner)},null,2)])],2)):ot("v-if",!0),Cn(r.$slots,"afterlist",{options:r.fo})],2),ot(" Hacky input element to show HTML5 required warning "),c.required?(pe(),we("input",{key:8,class:it(r.classList.fakeInput),tabindex:"-1",value:r.textValue,required:""},null,10,R4)):ot("v-if",!0),ot(" Native input support "),c.nativeSupport?(pe(),we(Je,{key:9},[c.mode=="single"?(pe(),we("input",{key:0,type:"hidden",name:c.name,value:r.plainValue!==void 0?r.plainValue:""},null,8,z4)):(pe(!0),we(Je,{key:1},$t(r.plainValue,(g,_)=>(pe(),we("input",{type:"hidden",name:`${c.name}[]`,value:g,key:_},null,8,j4))),128))],64)):ot("v-if",!0),ot(" Create height for empty input "),S("div",{class:it(r.classList.spacer)},null,2)],42,v4)}Mg.render=F4;Mg.__file="src/Multiselect.vue";const V4="https://elapor.helpulstudio.com",hu=cr({id:"sector",state:()=>({sector:[]}),getters:{getSector:r=>r.sector},actions:{fetchSector(){Rt.get(`${V4}/getAllSector`,{}).then(r=>{this.sector=r.data.data})}}}),$4="https://elapor.helpulstudio.com/api",H4=cr({id:"subordinate-store",state:()=>({subordinate:[{value:"1",label:"Batman"},{value:"2",label:"Robin"},{value:"joker",label:"Joker"}]}),getters:{getSubordinate:r=>r.subordinate},actions:{fetchSubordinate(){const a=Lt().getToken;Rt.get(`${$4}/getSubordinate`,{headers:{Authorization:`Bearer ${a}`}}).then(c=>{console.log(c.data.data);const f=c.data.data.map(b=>{const g={};return g.value=b.user_id,g.label=b.name,g});this.subordinate=f}).catch(c=>{console.log(c),alert(c)})}}});var Vp={exports:{}};(function(r,a){(function(c){const u=c.en=c.en||{};u.dictionary=Object.assign(u.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(c,u){r.exports=u()}(self,()=>(()=>{var c={3062:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},903:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3143:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4717:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},9315:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const I=v},8733:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3508:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},2640:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},5083:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4036:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3773:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3689:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},1905:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},9773:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},2347:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},7754:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4652:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},7442:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},9292:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},1613:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const I=v},6306:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3881:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},6945:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4906:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},5332:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},6781:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},5485:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3949:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},7686:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},7339:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},9688:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},8847:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},6574:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4879:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3662:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},2577:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},1046:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},8793:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4650:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},7676:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},5868:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},6764:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},9695:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},5542:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3332:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4793:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},3488:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},8506:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},4921:(g,_,k)=>{k.d(_,{Z:()=>I});var E=k(1799),x=k.n(E),D=k(2609),v=k.n(D)()(x());v.push([g.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const I=v},2609:g=>{g.exports=function(_){var k=[];return k.toString=function(){return this.map(function(E){var x=_(E);return E[2]?"@media ".concat(E[2]," {").concat(x,"}"):x}).join("")},k.i=function(E,x,D){typeof E=="string"&&(E=[[null,E,""]]);var v={};if(D)for(var I=0;I<this.length;I++){var $=this[I][0];$!=null&&(v[$]=!0)}for(var le=0;le<E.length;le++){var G=[].concat(E[le]);D&&v[G[0]]||(x&&(G[2]?G[2]="".concat(x," and ").concat(G[2]):G[2]=x),k.push(G))}},k}},1799:g=>{function _(E,x){return function(D){if(Array.isArray(D))return D}(E)||function(D,v){var I=D&&(typeof Symbol!="undefined"&&D[Symbol.iterator]||D["@@iterator"]);if(I!=null){var $,le,G=[],H=!0,N=!1;try{for(I=I.call(D);!(H=($=I.next()).done)&&(G.push($.value),!v||G.length!==v);H=!0);}catch(W){N=!0,le=W}finally{try{H||I.return==null||I.return()}finally{if(N)throw le}}return G}}(E,x)||function(D,v){if(!!D){if(typeof D=="string")return k(D,v);var I=Object.prototype.toString.call(D).slice(8,-1);if(I==="Object"&&D.constructor&&(I=D.constructor.name),I==="Map"||I==="Set")return Array.from(D);if(I==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I))return k(D,v)}}(E,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(E,x){(x==null||x>E.length)&&(x=E.length);for(var D=0,v=new Array(x);D<x;D++)v[D]=E[D];return v}g.exports=function(E){var x=_(E,4),D=x[1],v=x[3];if(!v)return D;if(typeof btoa=="function"){var I=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),$="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(I),le="/*# ".concat($," */"),G=v.sources.map(function(H){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(H," */")});return[D].concat(G).concat([le]).join(`
`)}return[D].join(`
`)}},6062:(g,_,k)=>{var E,x=function(){return E===void 0&&(E=Boolean(window&&document&&document.all&&!window.atob)),E},D=function(){var V={};return function(q){if(V[q]===void 0){var Z=document.querySelector(q);if(window.HTMLIFrameElement&&Z instanceof window.HTMLIFrameElement)try{Z=Z.contentDocument.head}catch{Z=null}V[q]=Z}return V[q]}}(),v=[];function I(V){for(var q=-1,Z=0;Z<v.length;Z++)if(v[Z].identifier===V){q=Z;break}return q}function $(V,q){for(var Z={},K=[],oe=0;oe<V.length;oe++){var R=V[oe],xe=q.base?R[0]+q.base:R[0],me=Z[xe]||0,Ie="".concat(xe," ").concat(me);Z[xe]=me+1;var Re=I(Ie),Se={css:R[1],media:R[2],sourceMap:R[3]};Re!==-1?(v[Re].references++,v[Re].updater(Se)):v.push({identifier:Ie,updater:ee(Se,q),references:1}),K.push(Ie)}return K}function le(V){var q=document.createElement("style"),Z=V.attributes||{};if(Z.nonce===void 0){var K=k.nc;K&&(Z.nonce=K)}if(Object.keys(Z).forEach(function(R){q.setAttribute(R,Z[R])}),typeof V.insert=="function")V.insert(q);else{var oe=D(V.insert||"head");if(!oe)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");oe.appendChild(q)}return q}var G,H=(G=[],function(V,q){return G[V]=q,G.filter(Boolean).join(`
`)});function N(V,q,Z,K){var oe=Z?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(V.styleSheet)V.styleSheet.cssText=H(q,oe);else{var R=document.createTextNode(oe),xe=V.childNodes;xe[q]&&V.removeChild(xe[q]),xe.length?V.insertBefore(R,xe[q]):V.appendChild(R)}}function W(V,q,Z){var K=Z.css,oe=Z.media,R=Z.sourceMap;if(oe?V.setAttribute("media",oe):V.removeAttribute("media"),R&&typeof btoa!="undefined"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R))))," */")),V.styleSheet)V.styleSheet.cssText=K;else{for(;V.firstChild;)V.removeChild(V.firstChild);V.appendChild(document.createTextNode(K))}}var te=null,ie=0;function ee(V,q){var Z,K,oe;if(q.singleton){var R=ie++;Z=te||(te=le(q)),K=N.bind(null,Z,R,!1),oe=N.bind(null,Z,R,!0)}else Z=le(q),K=W.bind(null,Z,q),oe=function(){(function(xe){if(xe.parentNode===null)return!1;xe.parentNode.removeChild(xe)})(Z)};return K(V),function(xe){if(xe){if(xe.css===V.css&&xe.media===V.media&&xe.sourceMap===V.sourceMap)return;K(V=xe)}else oe()}}g.exports=function(V,q){(q=q||{}).singleton||typeof q.singleton=="boolean"||(q.singleton=x());var Z=$(V=V||[],q);return function(K){if(K=K||[],Object.prototype.toString.call(K)==="[object Array]"){for(var oe=0;oe<Z.length;oe++){var R=I(Z[oe]);v[R].references--}for(var xe=$(K,q),me=0;me<Z.length;me++){var Ie=I(Z[me]);v[Ie].references===0&&(v[Ie].updater(),v.splice(Ie,1))}Z=xe}}}}},u={};function f(g){var _=u[g];if(_!==void 0)return _.exports;var k=u[g]={id:g,exports:{}};return c[g](k,k.exports,f),k.exports}f.n=g=>{var _=g&&g.__esModule?()=>g.default:()=>g;return f.d(_,{a:_}),_},f.d=(g,_)=>{for(var k in _)f.o(_,k)&&!f.o(g,k)&&Object.defineProperty(g,k,{enumerable:!0,get:_[k]})},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(g,_)=>Object.prototype.hasOwnProperty.call(g,_),f.nc=void 0;var b={};return(()=>{f.d(b,{default:()=>Kf});const g=function(){return function i(){i.called=!0}};class _{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=g(),this.off=g()}}const k=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function E(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+k[i>>0&255]+k[i>>8&255]+k[i>>16&255]+k[i>>24&255]+k[e>>0&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+k[t>>0&255]+k[t>>8&255]+k[t>>16&255]+k[t>>24&255]+k[n>>0&255]+k[n>>8&255]+k[n>>16&255]+k[n>>24&255]}const x={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function D(i,e){const t=x.get(e.priority);for(let n=0;n<i.length;n++)if(x.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class v extends Error{constructor(e,t,n){super(function(o,s){const l=new WeakSet,d=(m,w)=>{if(typeof w=="object"&&w!==null){if(l.has(w))return`[object ${w.constructor.name}]`;l.add(w)}return w},h=s?` ${JSON.stringify(s,d)}`:"",p=le(o);return o+h+p}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new v(e.message,t);throw n.stack=e.stack,n}}function I(i,e){console.warn(...G(i,e))}function $(i,e){console.error(...G(i,e))}function le(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function G(i,e){const t=le(i);return e?[i,e,t]:[i,t]}const H="35.0.1",N=typeof window=="object"?window:f.g;if(N.CKEDITOR_VERSION)throw new v("ckeditor-duplicated-modules",null);N.CKEDITOR_VERSION=H;const W=Symbol("listeningTo"),te=Symbol("emitterId"),ie=Symbol("delegations"),ee={on(i,e,t={}){this.listenTo(this,i,e,t)},once(i,e,t){let n=!1;this.listenTo(this,i,(o,...s)=>{n||(n=!0,o.off(),e.call(this,o,...s))},t)},off(i,e){this.stopListening(this,i,e)},listenTo(i,e,t,n={}){let o,s;this[W]||(this[W]={});const l=this[W];Z(i)||q(i);const d=Z(i);(o=l[d])||(o=l[d]={emitter:i,callbacks:{}}),(s=o.callbacks[e])||(s=o.callbacks[e]=[]),s.push(t),function(h,p,m,w,y){p._addEventListener?p._addEventListener(m,w,y):h._addEventListener.call(p,m,w,y)}(this,i,e,t,n)},stopListening(i,e,t){const n=this[W];let o=i&&Z(i);const s=n&&o?n[o]:void 0,l=s&&e?s.callbacks[e]:void 0;if(!(!n||i&&!s||e&&!l))if(t)me(this,i,e,t),l.indexOf(t)!==-1&&(l.length===1?delete s.callbacks[e]:me(this,i,e,t));else if(l){for(;t=l.pop();)me(this,i,e,t);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(i,e);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[W]}},fire(i,...e){try{const t=i instanceof _?i:new _(this,i),n=t.name;let o=R(this,n);if(t.path.push(this),o){const l=[t,...e];o=Array.from(o);for(let d=0;d<o.length&&(o[d].callback.apply(this,l),t.off.called&&(delete t.off.called,this._removeEventListener(n,o[d].callback)),!t.stop.called);d++);}const s=this[ie];if(s){const l=s.get(n),d=s.get("*");l&&xe(l,t,e),d&&xe(d,t,e)}return t.return}catch(t){v.rethrowUnexpectedError(t,this)}},delegate(...i){return{to:(e,t)=>{this[ie]||(this[ie]=new Map),i.forEach(n=>{const o=this[ie].get(n);o?o.set(e,t):this[ie].set(n,new Map([[e,t]]))})}}},stopDelegating(i,e){if(this[ie])if(i)if(e){const t=this[ie].get(i);t&&t.delete(e)}else this[ie].delete(i);else this[ie].clear()},_addEventListener(i,e,t){(function(s,l){const d=K(s);if(d[l])return;let h=l,p=null;const m=[];for(;h!==""&&!d[h];)d[h]={callbacks:[],childEvents:[]},m.push(d[h]),p&&d[h].childEvents.push(p),p=h,h=h.substr(0,h.lastIndexOf(":"));if(h!==""){for(const w of m)w.callbacks=d[h].callbacks.slice();d[h].childEvents.push(p)}})(this,i);const n=oe(this,i),o={callback:e,priority:x.get(t.priority)};for(const s of n)D(s,o)},_removeEventListener(i,e){const t=oe(this,i);for(const n of t)for(let o=0;o<n.length;o++)n[o].callback==e&&(n.splice(o,1),o--)}},V=ee;function q(i,e){i[te]||(i[te]=e||E())}function Z(i){return i[te]}function K(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function oe(i,e){const t=K(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=oe(i,t.childEvents[o]);n=n.concat(s)}return n}function R(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?R(i,e.substr(0,e.lastIndexOf(":"))):null}function xe(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new _(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function me(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}const Ie=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Re=Symbol("observableProperties"),Se=Symbol("boundObservables"),Ue=Symbol("boundProperties"),ht=Symbol("decoratedMethods"),et=Symbol("decoratedOriginal"),ze={set(i,e){if(Ie(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);qe(this);const t=this[Re];if(i in this&&!t.has(i))throw new v("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>t.get(i),set(n){const o=t.get(i);let s=this.fire("set:"+i,i,n,o);s===void 0&&(s=n),o===s&&t.has(i)||(t.set(i,s),this.fire("change:"+i,i,s,o))}}),this[i]=e},bind(...i){if(!i.length||!re(i))throw new v("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new v("observable-bind-duplicate-properties",this);qe(this);const e=this[Ue];i.forEach(n=>{if(e.has(n))throw new v("observable-bind-rebind",this)});const t=new Map;return i.forEach(n=>{const o={property:n,to:[]};e.set(n,o),t.set(n,o)}),{to:ut,toMany:L,_observable:this,_bindProperties:i,_to:[],_bindings:t}},unbind(...i){if(!this[Re])return;const e=this[Ue],t=this[Se];if(i.length){if(!re(i))throw new v("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=e.get(n);o&&(o.to.forEach(([s,l])=>{const d=t.get(s),h=d[l];h.delete(o),h.size||delete d[l],Object.keys(d).length||(t.delete(s),this.stopListening(s,"change"))}),e.delete(n))})}else t.forEach((n,o)=>{this.stopListening(o,"change")}),t.clear(),e.clear()},decorate(i){qe(this);const e=this[i];if(!e)throw new v("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(t,n)=>{t.return=e.apply(this,n)}),this[i]=function(...t){return this.fire(i,t)},this[i][et]=e,this[ht]||(this[ht]=[]),this[ht].push(i)},...V};ze.stopListening=function(i,e,t){if(!i&&this[ht]){for(const n of this[ht])this[n]=this[n][et];delete this[ht]}V.stopListening.call(this,i,e,t)};const Fe=ze;function qe(i){i[Re]||(Object.defineProperty(i,Re,{value:new Map}),Object.defineProperty(i,Se,{value:new Map}),Object.defineProperty(i,Ue,{value:new Map}))}function ut(...i){const e=function(...s){if(!s.length)throw new v("observable-bind-to-parse-error",null);const l={to:[]};let d;return typeof s[s.length-1]=="function"&&(l.callback=s.pop()),s.forEach(h=>{if(typeof h=="string")d.properties.push(h);else{if(typeof h!="object")throw new v("observable-bind-to-parse-error",null);d={observable:h,properties:[]},l.to.push(d)}}),l}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new v("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new v("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new v("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const l=o[Se];let d;l.get(s.observable)||o.listenTo(s.observable,"change",(h,p)=>{d=l.get(s.observable)[p],d&&d.forEach(m=>{de(o,m.property)})})}),function(s){let l;s._bindings.forEach((d,h)=>{s._to.forEach(p=>{l=p.properties[d.callback?0:s._bindProperties.indexOf(h)],d.to.push([p.observable,l]),function(m,w,y,T){const P=m[Se],B=P.get(y),O=B||{};O[T]||(O[T]=new Set),O[T].add(w),B||P.set(y,O)}(s._observable,d,p.observable,l)})})}(this),this._bindProperties.forEach(s=>{de(this._observable,s)})}function L(i,e,t){if(this._bindings.size>1)throw new v("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(l=>[l,o]);return Array.prototype.concat.apply([],s)}(i,e),t)}function re(i){return i.every(e=>typeof e=="string")}function de(i,e){const t=i[Ue].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}function se(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(s=>{if(s in i.prototype)return;const l=Object.getOwnPropertyDescriptor(t,s);l.enumerable=!1,Object.defineProperty(i.prototype,s,l)})})}class ne{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",rt,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",rt),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function rt(i){i.return=!1,i.stop()}se(ne,Fe);class Ee{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Oe,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Oe),this.refresh())}execute(){}destroy(){this.stopListening()}}function Oe(i){i.return=!1,i.stop()}se(Ee,Fe);class z extends Ee{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){D(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const U=typeof fd=="object"&&fd&&fd.Object===Object&&fd;var X=typeof self=="object"&&self&&self.Object===Object&&self;const ce=U||X||Function("return this")(),ue=ce.Symbol;var ke=Object.prototype,ye=ke.hasOwnProperty,_e=ke.toString,ve=ue?ue.toStringTag:void 0;const he=function(i){var e=ye.call(i,ve),t=i[ve];try{i[ve]=void 0;var n=!0}catch{}var o=_e.call(i);return n&&(e?i[ve]=t:delete i[ve]),o};var je=Object.prototype.toString;const Te=function(i){return je.call(i)};var Be=ue?ue.toStringTag:void 0;const Ae=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":Be&&Be in Object(i)?he(i):Te(i)},$e=function(i,e){return function(t){return i(e(t))}},st=$e(Object.getPrototypeOf,Object),Qe=function(i){return i!=null&&typeof i=="object"};var We=Function.prototype,dt=Object.prototype,Tn=We.toString,ro=dt.hasOwnProperty,Ut=Tn.call(Object);const Qt=function(i){if(!Qe(i)||Ae(i)!="[object Object]")return!1;var e=st(i);if(e===null)return!0;var t=ro.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Tn.call(t)==Ut},Dt=function(){this.__data__=[],this.size=0},Ft=function(i,e){return i===e||i!=i&&e!=e},In=function(i,e){for(var t=i.length;t--;)if(Ft(i[t][0],e))return t;return-1};var oa=Array.prototype.splice;const dr=function(i){var e=this.__data__,t=In(e,i);return!(t<0)&&(t==e.length-1?e.pop():oa.call(e,t,1),--this.size,!0)},ia=function(i){var e=this.__data__,t=In(e,i);return t<0?void 0:e[t][1]},Ge=function(i){return In(this.__data__,i)>-1},ra=function(i,e){var t=this.__data__,n=In(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function No(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}No.prototype.clear=Dt,No.prototype.delete=dr,No.prototype.get=ia,No.prototype.has=Ge,No.prototype.set=ra;const Ai=No,qn=function(){this.__data__=new Ai,this.size=0},ko=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},sa=function(i){return this.__data__.get(i)},aa=function(i){return this.__data__.has(i)},wo=function(i){if(!Ie(i))return!1;var e=Ae(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Jo=ce["__core-js_shared__"];var Ci=function(){var i=/[^.]+$/.exec(Jo&&Jo.keys&&Jo.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Lo=function(i){return!!Ci&&Ci in i};var yi=Function.prototype.toString;const Wn=function(i){if(i!=null){try{return yi.call(i)}catch{}try{return i+""}catch{}}return""};var Xo=/^\[object .+?Constructor\]$/,xi=Function.prototype,Zr=Object.prototype,J=xi.toString,Ne=Zr.hasOwnProperty,nt=RegExp("^"+J.call(Ne).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Zt=function(i){return!(!Ie(i)||Lo(i))&&(wo(i)?nt:Xo).test(Wn(i))},bu=function(i,e){return i==null?void 0:i[e]},ei=function(i,e){var t=bu(i,e);return Zt(t)?t:void 0},ur=ei(ce,"Map"),tt=ei(Object,"create"),ku=function(){this.__data__=tt?tt(null):{},this.size=0},wu=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var _u=Object.prototype.hasOwnProperty;const vu=function(i){var e=this.__data__;if(tt){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return _u.call(e,i)?e[i]:void 0};var Au=Object.prototype.hasOwnProperty;const Cu=function(i){var e=this.__data__;return tt?e[i]!==void 0:Au.call(e,i)},la=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=tt&&e===void 0?"__lodash_hash_undefined__":e,this};function so(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}so.prototype.clear=ku,so.prototype.delete=wu,so.prototype.get=vu,so.prototype.has=Cu,so.prototype.set=la;const ca=so,vn=function(){this.size=0,this.__data__={hash:new ca,map:new(ur||Ai),string:new ca}},yu=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Jr=function(i,e){var t=i.__data__;return yu(e)?t[typeof e=="string"?"string":"hash"]:t.map},xu=function(i){var e=Jr(this,i).delete(i);return this.size-=e?1:0,e},Eu=function(i){return Jr(this,i).get(i)},Ol=function(i){return Jr(this,i).has(i)},Su=function(i,e){var t=Jr(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Ei(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ei.prototype.clear=vn,Ei.prototype.delete=xu,Ei.prototype.get=Eu,Ei.prototype.has=Ol,Ei.prototype.set=Su;const Xr=Ei,Rl=function(i,e){var t=this.__data__;if(t instanceof Ai){var n=t.__data__;if(!ur||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new Xr(n)}return t.set(i,e),this.size=t.size,this};function Si(i){var e=this.__data__=new Ai(i);this.size=e.size}Si.prototype.clear=qn,Si.prototype.delete=ko,Si.prototype.get=sa,Si.prototype.has=aa,Si.prototype.set=Rl;const Di=Si,Du=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},es=function(){try{var i=ei(Object,"defineProperty");return i({},"",{}),i}catch{}}(),da=function(i,e,t){e=="__proto__"&&es?es(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var Tu=Object.prototype.hasOwnProperty;const ua=function(i,e,t){var n=i[e];Tu.call(i,e)&&Ft(n,t)&&(t!==void 0||e in i)||da(i,e,t)},Ti=function(i,e,t,n){var o=!t;t||(t={});for(var s=-1,l=e.length;++s<l;){var d=e[s],h=n?n(t[d],i[d],d,t,i):void 0;h===void 0&&(h=i[d]),o?da(t,d,h):ua(t,d,h)}return t},Iu=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},ha=function(i){return Qe(i)&&Ae(i)=="[object Arguments]"};var ti=Object.prototype,Mu=ti.hasOwnProperty,zl=ti.propertyIsEnumerable;const ts=ha(function(){return arguments}())?ha:function(i){return Qe(i)&&Mu.call(i,"callee")&&!zl.call(i,"callee")},gn=Array.isArray,Pu=function(){return!1};var jl=a&&!a.nodeType&&a,Fl=jl&&!0&&r&&!r.nodeType&&r,Vl=Fl&&Fl.exports===jl?ce.Buffer:void 0;const hr=(Vl?Vl.isBuffer:void 0)||Pu;var Bu=/^(?:0|[1-9]\d*)$/;const fa=function(i,e){var t=typeof i;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&Bu.test(i))&&i>-1&&i%1==0&&i<e},Oo=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Et={};Et["[object Float32Array]"]=Et["[object Float64Array]"]=Et["[object Int8Array]"]=Et["[object Int16Array]"]=Et["[object Int32Array]"]=Et["[object Uint8Array]"]=Et["[object Uint8ClampedArray]"]=Et["[object Uint16Array]"]=Et["[object Uint32Array]"]=!0,Et["[object Arguments]"]=Et["[object Array]"]=Et["[object ArrayBuffer]"]=Et["[object Boolean]"]=Et["[object DataView]"]=Et["[object Date]"]=Et["[object Error]"]=Et["[object Function]"]=Et["[object Map]"]=Et["[object Number]"]=Et["[object Object]"]=Et["[object RegExp]"]=Et["[object Set]"]=Et["[object String]"]=Et["[object WeakMap]"]=!1;const Nu=function(i){return Qe(i)&&Oo(i.length)&&!!Et[Ae(i)]},pa=function(i){return function(e){return i(e)}};var $l=a&&!a.nodeType&&a,fr=$l&&!0&&r&&!r.nodeType&&r,ga=fr&&fr.exports===$l&&U.process;const Ii=function(){try{var i=fr&&fr.require&&fr.require("util").types;return i||ga&&ga.binding&&ga.binding("util")}catch{}}();var Hl=Ii&&Ii.isTypedArray;const ma=Hl?pa(Hl):Nu;var Lu=Object.prototype.hasOwnProperty;const Ul=function(i,e){var t=gn(i),n=!t&&ts(i),o=!t&&!n&&hr(i),s=!t&&!n&&!o&&ma(i),l=t||n||o||s,d=l?Iu(i.length,String):[],h=d.length;for(var p in i)!e&&!Lu.call(i,p)||l&&(p=="length"||o&&(p=="offset"||p=="parent")||s&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||fa(p,h))||d.push(p);return d};var Ou=Object.prototype;const ba=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Ou)},Ru=$e(Object.keys,Object);var ql=Object.prototype.hasOwnProperty;const zu=function(i){if(!ba(i))return Ru(i);var e=[];for(var t in Object(i))ql.call(i,t)&&t!="constructor"&&e.push(t);return e},pr=function(i){return i!=null&&Oo(i.length)&&!wo(i)},ka=function(i){return pr(i)?Ul(i):zu(i)},ju=function(i,e){return i&&Ti(e,ka(e),i)},Fu=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Mi=Object.prototype.hasOwnProperty;const Vu=function(i){if(!Ie(i))return Fu(i);var e=ba(i),t=[];for(var n in i)(n!="constructor"||!e&&Mi.call(i,n))&&t.push(n);return t},Pi=function(i){return pr(i)?Ul(i,!0):Vu(i)},$u=function(i,e){return i&&Ti(e,Pi(e),i)};var Wl=a&&!a.nodeType&&a,Gl=Wl&&!0&&r&&!r.nodeType&&r,Kl=Gl&&Gl.exports===Wl?ce.Buffer:void 0,Yl=Kl?Kl.allocUnsafe:void 0;const Ql=function(i,e){if(e)return i.slice();var t=i.length,n=Yl?Yl(t):new i.constructor(t);return i.copy(n),n},Zl=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},wa=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,s=[];++t<n;){var l=i[t];e(l,t,i)&&(s[o++]=l)}return s},_a=function(){return[]};var Hu=Object.prototype.propertyIsEnumerable,Jl=Object.getOwnPropertySymbols;const va=Jl?function(i){return i==null?[]:(i=Object(i),wa(Jl(i),function(e){return Hu.call(i,e)}))}:_a,Xl=function(i,e){return Ti(i,va(i),e)},ec=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},ns=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)ec(e,va(i)),i=st(i);return e}:_a,tc=function(i,e){return Ti(i,ns(i),e)},Aa=function(i,e,t){var n=e(i);return gn(i)?n:ec(n,t(i))},gr=function(i){return Aa(i,ka,va)},Uu=function(i){return Aa(i,Pi,ns)},Ca=ei(ce,"DataView"),ya=ei(ce,"Promise"),Bi=ei(ce,"Set"),xa=ei(ce,"WeakMap");var nc="[object Map]",oc="[object Promise]",ic="[object Set]",Ea="[object WeakMap]",rc="[object DataView]",qu=Wn(Ca),Wu=Wn(ur),Sa=Wn(ya),sc=Wn(Bi),Gu=Wn(xa),ni=Ae;(Ca&&ni(new Ca(new ArrayBuffer(1)))!=rc||ur&&ni(new ur)!=nc||ya&&ni(ya.resolve())!=oc||Bi&&ni(new Bi)!=ic||xa&&ni(new xa)!=Ea)&&(ni=function(i){var e=Ae(i),t=e=="[object Object]"?i.constructor:void 0,n=t?Wn(t):"";if(n)switch(n){case qu:return rc;case Wu:return nc;case Sa:return oc;case sc:return ic;case Gu:return Ea}return e});const mr=ni;var Ku=Object.prototype.hasOwnProperty;const Yu=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Ku.call(i,"index")&&(t.index=i.index,t.input=i.input),t},os=ce.Uint8Array,Da=function(i){var e=new i.constructor(i.byteLength);return new os(e).set(new os(i)),e},ac=function(i,e){var t=e?Da(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var Qu=/\w*$/;const Zu=function(i){var e=new i.constructor(i.source,Qu.exec(i));return e.lastIndex=i.lastIndex,e};var lc=ue?ue.prototype:void 0,cc=lc?lc.valueOf:void 0;const dc=function(i){return cc?Object(cc.call(i)):{}},Ta=function(i,e){var t=e?Da(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},Ju=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return Da(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return ac(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Ta(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return Zu(i);case"[object Symbol]":return dc(i)}};var uc=Object.create;const Xu=function(){function i(){}return function(e){if(!Ie(e))return{};if(uc)return uc(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),Ia=function(i){return typeof i.constructor!="function"||ba(i)?{}:Xu(st(i))},Ma=function(i){return Qe(i)&&mr(i)=="[object Map]"};var hc=Ii&&Ii.isMap;const eh=hc?pa(hc):Ma,th=function(i){return Qe(i)&&mr(i)=="[object Set]"};var Pa=Ii&&Ii.isSet;const nh=Pa?pa(Pa):th;var fc="[object Arguments]",Ni="[object Function]",pc="[object Object]",St={};St[fc]=St["[object Array]"]=St["[object ArrayBuffer]"]=St["[object DataView]"]=St["[object Boolean]"]=St["[object Date]"]=St["[object Float32Array]"]=St["[object Float64Array]"]=St["[object Int8Array]"]=St["[object Int16Array]"]=St["[object Int32Array]"]=St["[object Map]"]=St["[object Number]"]=St["[object Object]"]=St["[object RegExp]"]=St["[object Set]"]=St["[object String]"]=St["[object Symbol]"]=St["[object Uint8Array]"]=St["[object Uint8ClampedArray]"]=St["[object Uint16Array]"]=St["[object Uint32Array]"]=!0,St["[object Error]"]=St[Ni]=St["[object WeakMap]"]=!1;const Li=function i(e,t,n,o,s,l){var d,h=1&t,p=2&t,m=4&t;if(n&&(d=s?n(e,o,s,l):n(e)),d!==void 0)return d;if(!Ie(e))return e;var w=gn(e);if(w){if(d=Yu(e),!h)return Zl(e,d)}else{var y=mr(e),T=y==Ni||y=="[object GeneratorFunction]";if(hr(e))return Ql(e,h);if(y==pc||y==fc||T&&!s){if(d=p||T?{}:Ia(e),!h)return p?tc(e,$u(d,e)):Xl(e,ju(d,e))}else{if(!St[y])return s?e:{};d=Ju(e,y,h)}}l||(l=new Di);var P=l.get(e);if(P)return P;l.set(e,d),nh(e)?e.forEach(function(O){d.add(i(O,t,n,O,e,l))}):eh(e)&&e.forEach(function(O,F){d.set(F,i(O,t,n,F,e,l))});var B=w?void 0:(m?p?Uu:gr:p?Pi:ka)(e);return Du(B||e,function(O,F){B&&(O=e[F=O]),ua(d,F,i(O,t,n,F,e,l))}),d},gc=function(i,e){return Li(i,5,e=typeof e=="function"?e:void 0)},oi=function(i){return Qe(i)&&i.nodeType===1&&!Qt(i)};class mc{constructor(e,t){this._config={},t&&this.define(Ba(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Qt(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const l of s)Qt(e[l])||(e[l]={}),e=e[l];if(Qt(n))return Qt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Qt(e[o])){e=null;break}e=e[o]}return e?Ba(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Ba(i){return gc(i,oh)}function oh(i){return oi(i)?i:void 0}function Ln(i){return!(!i||!i[Symbol.iterator])}class bc{constructor(e={},t={}){const n=Ln(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new v("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),l=t+n;this._items.splice(l,0,o),this._itemMap.set(s,o),this.fire("add",o,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new v("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new v("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,l)=>{const d=t._bindToCollection==this,h=t._bindToInternalToExternalMap.get(s);if(d&&h)this._bindToExternalToInternalMap.set(s,h),this._bindToInternalToExternalMap.set(h,s);else{const p=e(s);if(!p)return void this._skippedIndexesFromExternal.push(l);let m=l;for(const w of this._skippedIndexesFromExternal)l>w&&m--;for(const w of t._skippedIndexesFromExternal)m>=w&&m++;this._bindToExternalToInternalMap.set(s,p),this._bindToInternalToExternalMap.set(p,s),this.add(p,m);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)m<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,l)=>{const d=this._bindToExternalToInternalMap.get(s);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((h,p)=>(l<p&&h.push(p-1),l>p&&h.push(p),h),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new v("collection-add-invalid-id",this);if(this.get(n))throw new v("collection-add-item-already-exists",this)}else e[t]=n=E();return n}_remove(e){let t,n,o,s=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[l])):(o=e,n=o[l],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new v("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(d),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}se(bc,V);const On=bc;class is{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new v("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function P(B,O=new Set){B.forEach(F=>{h(F)&&(O.has(F)||(O.add(F),F.pluginName&&!o._availablePlugins.has(F.pluginName)&&o._availablePlugins.set(F.pluginName,F),F.requires&&P(F.requires,O)))})})(e),y(e);const l=[...function P(B,O=new Set){return B.map(F=>h(F)?F:o._availablePlugins.get(F)).reduce((F,Q)=>O.has(Q)?F:(O.add(Q),Q.requires&&(y(Q.requires,Q),P(Q.requires,O).forEach(fe=>F.add(fe))),F.add(Q)),new Set)}(e.filter(P=>!m(P,t)))];(function(P,B){for(const O of B){if(typeof O!="function")throw new v("plugincollection-replace-plugin-invalid-type",null,{pluginItem:O});const F=O.pluginName;if(!F)throw new v("plugincollection-replace-plugin-missing-name",null,{pluginItem:O});if(O.requires&&O.requires.length)throw new v("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:F});const Q=o._availablePlugins.get(F);if(!Q)throw new v("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:F});const fe=P.indexOf(Q);if(fe===-1){if(o._contextPlugins.has(Q))return;throw new v("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:F})}if(Q.requires&&Q.requires.length)throw new v("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:F});P.splice(fe,1,O),o._availablePlugins.set(F,O)}})(l,n);const d=function(P){return P.map(B=>{const O=o._contextPlugins.get(B)||new B(s);return o._add(B,O),O})}(l);return T(d,"init").then(()=>T(d,"afterInit")).then(()=>d);function h(P){return typeof P=="function"}function p(P){return h(P)&&P.isContextPlugin}function m(P,B){return B.some(O=>O===P||w(P)===O||w(O)===P)}function w(P){return h(P)?P.pluginName||P.name:P}function y(P,B=null){P.map(O=>h(O)?O:o._availablePlugins.get(O)||O).forEach(O=>{(function(F,Q){if(!h(F))throw Q?new v("plugincollection-soft-required",s,{missingPlugin:F,requiredBy:w(Q)}):new v("plugincollection-plugin-not-found",s,{plugin:F})})(O,B),function(F,Q){if(!!p(Q)&&!p(F))throw new v("plugincollection-context-required",s,{plugin:w(F),requiredBy:w(Q)})}(O,B),function(F,Q){if(!!Q&&!!m(F,t))throw new v("plugincollection-required",s,{plugin:w(F),requiredBy:w(Q)})}(O,B)})}function T(P,B){return P.reduce((O,F)=>F[B]?o._contextPlugins.has(F)?O:O.then(F[B].bind(F)):O,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new v("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function Jt(i){return Array.isArray(i)?i:[i]}function ih(i,e,t=1){if(typeof t!="number")throw new v("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(h,p){return!!window.CKEDITOR_TRANSLATIONS[h]&&!!window.CKEDITOR_TRANSLATIONS[h].dictionary[p]}(i,o))return t!==1?e.plural:e.string;const s=window.CKEDITOR_TRANSLATIONS[i].dictionary,l=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(h=>h===1?0:1),d=s[o];return typeof d=="string"?d:d[Number(l(t))]}se(is,V),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const rh=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function kc(i){return rh.includes(i)?"rtl":"ltr"}class sh{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=kc(this.uiLanguage),this.contentLanguageDirection=kc(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Jt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(l,d)=>d<s.length?s[d]:l)}(ih(this.uiLanguage,e,n),t)}}class ah{constructor(e){this.config=new mc(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new is(this,t);const n=this.config.get("language")||{};this.locale=new sh({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new On,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new v("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new v("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new v("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class br{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function cn(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}se(br,Fe);const wc=function(i){return Li(i,4)};class ii{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new v("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=cn(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=wc(this);return delete e.parent,e}is(e){return e==="node"||e==="view:node"}}se(ii,V);class wt extends ii{constructor(e,t){super(e),this._textData=t}is(e){return e==="$text"||e==="view:$text"||e==="text"||e==="view:text"||e==="node"||e==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof wt&&(this===e||this.data===e.data)}_clone(){return new wt(this.document,this.data)}}class _o{constructor(e,t,n){if(this.textNode=e,t<0||t>e.data.length)throw new v("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new v("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return e==="$textProxy"||e==="view:$textProxy"||e==="textProxy"||e==="view:textProxy"}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function Gn(i){return Ln(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}class Rn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=Na(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=Na(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Na(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return Qt(n)?(n.style!==void 0&&I("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&I("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),kr(n,s,l=>o.getAttribute(l))}(e.attributes,i),!t.attributes)?null:!(e.classes&&(t.classes=function(n,o){return kr(n,o.getClassNames())}(e.classes,i),!t.classes))&&!(e.styles&&(t.styles=function(n,o){return kr(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,i),!t.styles))&&t}function kr(i,e,t){const n=function(l){return Array.isArray(l)?l.map(d=>Qt(d)?(d.key!==void 0&&d.value!==void 0||I("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):Qt(l)?Object.entries(l):[[l,!0]]}(i),o=Array.from(e),s=[];return n.forEach(([l,d])=>{o.forEach(h=>{(function(p,m){return p===!0||p===m||p instanceof RegExp&&m.match(p)})(l,h)&&function(p,m,w){if(p===!0)return!0;const y=w(m);return p===y||p instanceof RegExp&&!!String(y).match(p)}(d,h,t)&&s.push(h)})}),!n.length||s.length<n.length?null:s}const vo=function(i){return typeof i=="symbol"||Qe(i)&&Ae(i)=="[object Symbol]"};var lh=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ch=/^\w*$/;const dh=function(i,e){if(gn(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!vo(i))||ch.test(i)||!lh.test(i)||e!=null&&i in Object(e)};function La(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var l=i.apply(this,n);return t.cache=s.set(o,l)||s,l};return t.cache=new(La.Cache||Xr),t}La.Cache=Xr;const uh=La;var hh=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fh=/\\(\\)?/g,rs=function(i){var e=uh(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(hh,function(t,n,o,s){e.push(o?s.replace(fh,"$1"):n||t)}),e});const A=rs,C=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var M=ue?ue.prototype:void 0,j=M?M.toString:void 0;const ge=function i(e){if(typeof e=="string")return e;if(gn(e))return C(e,i)+"";if(vo(e))return j?j.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},He=function(i){return i==null?"":ge(i)},qt=function(i,e){return gn(i)?i:dh(i,e)?[i]:A(He(i))},Mn=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},nn=function(i){if(typeof i=="string"||vo(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},ri=function(i,e){for(var t=0,n=(e=qt(e,i)).length;i!=null&&t<n;)i=i[nn(e[t++])];return t&&t==n?i:void 0},ss=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=i[n+e];return s},Jy=function(i,e){return e.length<2?i:ri(i,ss(e,0,-1))},Xy=function(i,e){return e=qt(e,i),(i=Jy(i,e))==null||delete i[nn(Mn(e))]},e1=function(i,e){return i==null||Xy(i,e)},_c=function(i,e,t){var n=i==null?void 0:ri(i,e);return n===void 0?t:n},ph=function(i,e,t){(t!==void 0&&!Ft(i[e],t)||t===void 0&&!(e in i))&&da(i,e,t)},t1=function(i){return function(e,t,n){for(var o=-1,s=Object(e),l=n(e),d=l.length;d--;){var h=l[i?d:++o];if(t(s[h],h,s)===!1)break}return e}}(),n1=function(i){return Qe(i)&&pr(i)},gh=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},o1=function(i){return Ti(i,Pi(i))},i1=function(i,e,t,n,o,s,l){var d=gh(i,t),h=gh(e,t),p=l.get(h);if(p)ph(i,t,p);else{var m=s?s(d,h,t+"",i,e,l):void 0,w=m===void 0;if(w){var y=gn(h),T=!y&&hr(h),P=!y&&!T&&ma(h);m=h,y||T||P?gn(d)?m=d:n1(d)?m=Zl(d):T?(w=!1,m=Ql(h,!0)):P?(w=!1,m=Ta(h,!0)):m=[]:Qt(h)||ts(h)?(m=d,ts(d)?m=o1(d):Ie(d)&&!wo(d)||(m=Ia(h))):w=!1}w&&(l.set(h,m),o(m,h,n,s,l),l.delete(h)),ph(i,t,m)}},r1=function i(e,t,n,o,s){e!==t&&t1(t,function(l,d){if(s||(s=new Di),Ie(l))i1(e,t,d,n,i,o,s);else{var h=o?o(gh(e,d),l,d+"",e,t,s):void 0;h===void 0&&(h=l),ph(e,d,h)}},Pi)},wr=function(i){return i},s1=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Bg=Math.max;const a1=function(i,e,t){return e=Bg(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,s=Bg(n.length-e,0),l=Array(s);++o<s;)l[o]=n[e+o];o=-1;for(var d=Array(e+1);++o<e;)d[o]=n[o];return d[e]=t(l),s1(i,this,d)}},l1=function(i){return function(){return i}},c1=es?function(i,e){return es(i,"toString",{configurable:!0,enumerable:!1,value:l1(e),writable:!0})}:wr;var d1=Date.now;const u1=function(i){var e=0,t=0;return function(){var n=d1(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(c1),h1=function(i,e){return u1(a1(i,e,wr),i+"")},f1=function(i,e,t){if(!Ie(t))return!1;var n=typeof e;return!!(n=="number"?pr(t)&&fa(e,t.length):n=="string"&&e in t)&&Ft(t[e],i)},Ng=function(i){return h1(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,l=o>2?t[2]:void 0;for(s=i.length>3&&typeof s=="function"?(o--,s):void 0,l&&f1(t[0],t[1],l)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var d=t[n];d&&i(e,d,n,s)}return e})},Lg=Ng(function(i,e,t){r1(i,e,t)}),p1=function(i,e,t,n){if(!Ie(i))return i;for(var o=-1,s=(e=qt(e,i)).length,l=s-1,d=i;d!=null&&++o<s;){var h=nn(e[o]),p=t;if(h==="__proto__"||h==="constructor"||h==="prototype")return i;if(o!=l){var m=d[h];(p=n?n(m,h,d):void 0)===void 0&&(p=Ie(m)?m:fa(e[o+1])?[]:{})}ua(d,h,p),d=d[h]}return i},g1=function(i,e,t){return i==null?i:p1(i,e,t)};class m1{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,s=0,l=0,d=null;const h=new Map;if(n==="")return h;n.charAt(n.length-1)!=";"&&(n+=";");for(let p=0;p<n.length;p++){const m=n.charAt(p);if(o===null)switch(m){case":":d||(d=n.substr(s,p-s),l=p+1);break;case'"':case"'":o=m;break;case";":{const w=n.substr(l,p-l);d&&h.set(d.trim(),w.trim()),d=null,s=p+1;break}}else m===o&&(o=null)}return h}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Ie(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=mh(e);e1(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Ie(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=_c(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class b1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Ie(t))bh(n,mh(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:l}=o(t);bh(n,s,l)}else bh(n,e,t)}getNormalized(e,t){if(!e)return Lg({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return _c(t,n);const o=n(e,t);if(o)return o}return _c(t,mh(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function mh(i){return i.replace("-",".")}function bh(i,e,t){let n=t;Ie(t)&&(n=Lg({},_c(i,e),t)),g1(i,e,n)}class ao extends ii{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(s){s=Gn(s);for(const[l,d]of s)d===null?s.delete(l):typeof d!="string"&&s.set(l,String(d));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");Og(this._classes,s),this._attrs.delete("class")}this._styles=new m1(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="view:element"):e==="element"||e==="view:element"||e==="node"||e==="view:node"}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof ao))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Rn(...e);let n=this.parent;for(;n;){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,l){return typeof l=="string"?[new wt(s,l)]:(Ln(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new wt(s,d):d instanceof _o?new wt(s,d.data):d))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?Og(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Jt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Jt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Jt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Og(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}class vc extends ao{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=Rg}is(e,t=null){return t?t===this.name&&(e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}}function Rg(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}class Ac extends vc{constructor(e,t,n,o){super(e,t,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&(e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}destroy(){this.stopListening()}}se(Ac,Fe);const zg=Symbol("rootName");class k1 extends Ac{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&(e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}get rootName(){return this.getCustomProperty(zg)}set rootName(e){this._setCustomProperty(zg,e)}set _name(e){this.name=e}}class _r{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new v("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=De._createAt(e.startPosition):this.position=De._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof wt){if(e.isAtEnd)return this.position=De._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof ao)return this.shallow?e.offset++:e=new De(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof wt){if(this.singleCharacters)return e=new De(o,0),this.position=e,this._next();{let s,l=o.data.length;return o==this._boundaryEndParent?(l=this.boundaries.end.offset,s=new _o(o,0,l),e=De._createAfter(s)):(s=new _o(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,l)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new _o(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",l,t,e,s)}return e=De._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof wt){if(e.isAtStart)return this.position=De._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof ao)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new De(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof wt){if(this.singleCharacters)return e=new De(o,o.data.length),this.position=e,this._previous();{let s,l=o.data.length;if(o==this._boundaryStartParent){const d=this.boundaries.start.offset;s=new _o(o,d,o.data.length-d),l=s.data.length,e=De._createBefore(s)}else s=new _o(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,l)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-d}e.offset-=s;const l=new _o(n,e.offset,s);return this.position=e,this._formatReturnValue("text",l,t,e,s)}return e=De._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof _o&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=De._createAfter(t.textNode):(o=De._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=De._createBefore(t.textNode):(o=De._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class De{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ac);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=De._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new _r(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}is(e){return e==="position"||e==="view:position"}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=cn(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new _r(e)}clone(){return new De(this.parent,this.offset)}static _createAt(e,t){if(e instanceof De)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new v("view-createpositionat-offset-required",n)}return new De(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new De(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new v("view-position-after-root",e,{root:e});return new De(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new De(e.textNode,e.offsetInText);if(!e.parent)throw new v("view-position-before-root",e,{root:e});return new De(e.parent,e.index)}}class Ze{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new _r({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Cc,{direction:"backward"}),t=this.end.getLastMatchingPosition(Cc);return e.parent.is("$text")&&e.isAtStart&&(e=De._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=De._createAfter(t.parent)),new Ze(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Cc);if(e.isAfter(this.end)||e.isEqual(this.end))return new Ze(e,e);let t=this.end.getLastMatchingPosition(Cc,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new De(n,0)),o&&o.is("$text")&&(t=new De(o,o.data.length)),new Ze(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Ze(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Ze(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Ze(t,n)}return null}getWalker(e={}){return e.boundaries=this,new _r(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Ze(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new _r(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new _r(e);yield t.position;for(const n of t)yield n.nextPosition}is(e){return e==="range"||e==="view:range"}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new De(e,t),new De(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(De._createBefore(e),t)}}function Cc(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function kh(i){let e=0;for(const t of i)e++;return e}class Ao{constructor(e=null,t,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=kh(this.getRanges());if(t!=kh(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(e,t,n){if(e===null)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Ao||e instanceof wh)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Ze)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof De)this._setRanges([new Ze(e)]),this._setFakeOptions(t);else if(e instanceof ii){const o=!!n&&!!n.backward;let s;if(t===void 0)throw new v("view-selection-setto-required-second-parameter",this);s=t=="in"?Ze._createIn(e):t=="on"?Ze._createOn(e):new Ze(De._createAt(e,t)),this._setRanges([s],o),this._setFakeOptions(n)}else{if(!Ln(e))throw new v("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new v("view-selection-setfocus-no-ranges",this);const n=De._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Ze(n,o),!0):this._addRange(new Ze(o,n)),this.fire("change")}is(e){return e==="selection"||e==="view:selection"}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Ze))throw new v("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new v("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Ze(e.start,e.end))}}se(Ao,V);class wh{constructor(e=null,t,n){this._selection=new Ao,this._selection.delegate("change").to(this),this._selection.setTo(e,t,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return e==="selection"||e=="documentSelection"||e=="view:selection"||e=="view:documentSelection"}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setFocus(e,t){this._selection.setFocus(e,t)}}se(wh,V);class Oa extends _{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const _h=Symbol("bubbling contexts"),w1={fire(i,...e){try{const t=i instanceof _?i:new _(this,i),n=vh(this);if(!n.size)return;if(Ra(t,"capturing",this),as(n,"$capture",t,...e))return t.return;const o=t.startRange||this.selection.getFirstRange(),s=o?o.getContainedElement():null,l=!!s&&Boolean(jg(n,s));let d=s||function(h){if(!h)return null;const p=h.start.parent,m=h.end.parent,w=p.getPath(),y=m.getPath();return w.length>y.length?p:m}(o);if(Ra(t,"atTarget",d),!l){if(as(n,"$text",t,...e))return t.return;Ra(t,"bubbling",d)}for(;d;){if(d.is("rootElement")){if(as(n,"$root",t,...e))return t.return}else if(d.is("element")&&as(n,d.name,t,...e))return t.return;if(as(n,d,t,...e))return t.return;d=d.parent,Ra(t,"bubbling",d)}return Ra(t,"bubbling",this),as(n,"$document",t,...e),t.return}catch(t){v.rethrowUnexpectedError(t,this)}},_addEventListener(i,e,t){const n=Jt(t.context||"$document"),o=vh(this);for(const s of n){let l=o.get(s);l||(l=Object.create(V),o.set(s,l)),this.listenTo(l,i,e,t)}},_removeEventListener(i,e){const t=vh(this);for(const n of t.values())this.stopListening(n,i,e)}},_1=w1;function Ra(i,e,t){i instanceof Oa&&(i._eventPhase=e,i._currentTarget=t)}function as(i,e,t,...n){const o=typeof e=="string"?i.get(e):jg(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function jg(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function vh(i){return i[_h]||(i[_h]=new Map),i[_h]}class za{constructor(e){this.selection=new wh,this.roots=new On({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}se(za,_1),se(za,Fe);class ls extends ao{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=v1,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new v("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&(e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"):e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function v1(){if(Ah(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Ah(i)>1)return null;i=i.parent}return!i||Ah(i)>1?null:this.childCount}function Ah(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}ls.DEFAULT_PRIORITY=10;class Fg extends ao{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=A1}is(e,t=null){return t?t===this.name&&(e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"):e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof ii||Array.from(t).length>0))throw new v("view-emptyelement-cannot-add",[this,t])}}function A1(){return null}const vr=navigator.userAgent.toLowerCase(),C1={isMac:Vg(vr),isWindows:function(i){return i.indexOf("windows")>-1}(vr),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(vr),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(vr),isiOS:function(i){return!!i.match(/iphone|ipad/i)||Vg(i)&&navigator.maxTouchPoints>0}(vr),isAndroid:function(i){return i.indexOf("android")>-1}(vr),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(vr),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},_t=C1;function Vg(i){return i.indexOf("macintosh")>-1}const y1={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},x1={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},lt=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);i[t.toLowerCase()]=e}for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),E1=Object.fromEntries(Object.entries(lt).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function Ro(i){let e;if(typeof i=="string"){if(e=lt[i.toLowerCase()],!e)throw new v("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?lt.alt:0)+(i.ctrlKey?lt.ctrl:0)+(i.shiftKey?lt.shift:0)+(i.metaKey?lt.cmd:0);return e}function Ch(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Ro(t.slice(0,-1));const n=Ro(t);return _t.isMac&&n==lt.ctrl?lt.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function $g(i){let e=Ch(i);return Object.entries(_t.isMac?y1:x1).reduce((t,[n,o])=>((e&lt[n])!=0&&(e&=~lt[n],t+=o),t),"")+(e?E1[e]:"")}function yh(i,e){const t=e==="ltr";switch(i){case lt.arrowleft:return t?"left":"right";case lt.arrowright:return t?"right":"left";case lt.arrowup:return"up";case lt.arrowdown:return"down"}}class xh extends ao{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=D1}is(e,t=null){return t?t===this.name&&(e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"):e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof ii||Array.from(t).length>0))throw new v("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function S1(i){i.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==lt.arrowright){const l=o.domTarget.ownerDocument.defaultView.getSelection(),d=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(d||o.shiftKey){const h=l.focusNode,p=l.focusOffset,m=s.domPositionToView(h,p);if(m===null)return;let w=!1;const y=m.getLastMatchingPosition(T=>(T.item.is("uiElement")&&(w=!0),!(!T.item.is("uiElement")&&!T.item.is("attributeElement"))));if(w){const T=s.viewPositionToDom(y);d?l.collapse(T.parent,T.offset):l.extend(T.parent,T.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function D1(){return null}class Hg extends ao{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=T1}is(e,t=null){return t?t===this.name&&(e==="rawElement"||e==="view:rawElement"||e==="element"||e==="view:element"):e==="rawElement"||e==="view:rawElement"||e===this.name||e==="view:"+this.name||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof ii||Array.from(t).length>0))throw new v("view-rawelement-cannot-add",[this,t])}}function T1(){return null}class Ar{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="view:documentFragment"}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,l){return typeof l=="string"?[new wt(s,l)]:(Ln(l)||(l=[l]),Array.from(l).map(d=>typeof d=="string"?new wt(s,d):d instanceof _o?new wt(s,d.data):d))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}se(Ar,V);class Ug{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(e,t,n){this.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Ar(this.document,e)}createText(e){return new wt(this.document,e)}createAttributeElement(e,t,n={}){const o=new ls(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;Qt(n)?o=n:s=n;const l=new vc(this.document,e,t,s);return o.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const o=new Ac(this.document,e,t);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Fg(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new xh(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new Hg(this.document,e,t);return s.render=n||(()=>{}),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Qt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof De?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new v("view-writer-break-non-container-element",this.document);if(!t.parent)throw new v("view-writer-break-root",this.document);if(e.isAtStart)return De._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(De._createAfter(t),n);const o=new Ze(e,De._createAt(t,"end")),s=new De(n,0);this.move(o,s)}return De._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new De(l,d))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return Wg(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const l=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new De(o,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new v("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof wt?De._createAt(o,"end"):De._createAt(t,"end");return this.move(Ze._createIn(n),De._createAt(t,"end")),this.remove(Ze._createOn(n)),s}insert(e,t){Gg(t=Ln(t)?[...t]:[t],this.document);const n=t.reduce((l,d)=>{const h=l[l.length-1],p=!d.is("uiElement");return h&&h.breakAttributes==p?h.nodes.push(d):l.push({breakAttributes:p,nodes:[d]}),l},[]);let o=null,s=e;for(const{nodes:l,breakAttributes:d}of n){const h=this._insertNodes(s,l,d);o||(o=h.start),s=h.end}return o?new Ze(o,s):new Ze(e)}remove(e){const t=e instanceof Ze?e:Ze._createOn(e);if(ja(t,this.document),t.isCollapsed)return new Ar(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,l=o.offset-n.offset,d=s._removeChildren(n.offset,l);for(const p of d)this._removeFromClonedElementsGroup(p);const h=this.mergeAttributes(n);return t.start=h,t.end=h.clone(),new Ar(this.document,d)}clear(e,t){ja(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let l;if(s.is("element")&&t.isSimilar(s))l=Ze._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const d=s.getAncestors().find(h=>h.is("element")&&t.isSimilar(h));d&&(l=Ze._createIn(d))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof ls))throw new v("view-writer-wrap-invalid-attribute",this.document);if(ja(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(o=o.getLastMatchingPosition(l=>l.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new Ze(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof ls))throw new v("view-writer-unwrap-invalid-attribute",this.document);if(ja(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,l=this._unwrapChildren(s,n.offset,o.offset,t),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const h=this.mergeAttributes(l.end);return new Ze(d,h)}rename(e,t){const n=new vc(this.document,e,t.getAttributes());return this.insert(De._createAfter(t),n),this.move(Ze._createIn(t),De._createAt(n,0)),this.remove(Ze._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return De._createAt(e,t)}createPositionAfter(e){return De._createAfter(e)}createPositionBefore(e){return De._createBefore(e)}createRange(e,t){return new Ze(e,t)}createRangeOn(e){return Ze._createOn(e)}createRangeIn(e){return Ze._createIn(e)}createSelection(e,t,n){return new Ao(e,t,n)}createSlot(e){if(!this._slotFactory)throw new v("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?Eh(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new v("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?Sh(e):e;const l=o._insertChild(s.offset,t);for(const m of t)this._addToClonedElementsGroup(m);const d=s.getShiftedBy(l),h=this.mergeAttributes(s);h.isEqual(s)||d.offset--;const p=this.mergeAttributes(d);return new Ze(h,p)}_wrapChildren(e,t,n,o){let s=t;const l=[];for(;s<n;){const h=e.getChild(s),p=h.is("$text"),m=h.is("attributeElement");if(m&&this._wrapAttributeElement(o,h))l.push(new De(e,s));else if(p||!m||I1(o,h)){const w=o._clone();h._remove(),w._appendChild(h),e._insertChild(s,w),this._addToClonedElementsGroup(w),l.push(new De(e,s))}else this._wrapChildren(h,0,h.childCount,o);s++}let d=0;for(const h of l)h.offset-=d,h.offset!=t&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return Ze._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const l=[];for(;s<n;){const h=e.getChild(s);if(h.is("attributeElement"))if(h.isSimilar(o)){const p=h.getChildren(),m=h.childCount;h._remove(),e._insertChild(s,p),this._removeFromClonedElementsGroup(h),l.push(new De(e,s),new De(e,s+m)),s+=m,n+=m-1}else this._unwrapAttributeElement(o,h)?(l.push(new De(e,s),new De(e,s+1)),s++):(this._unwrapChildren(h,0,h.childCount,o),s++);else s++}let d=0;for(const h of l)h.offset-=d,!(h.offset==t||h.offset==n)&&(this.mergeAttributes(h).isEqual(h)||(d++,n--));return Ze._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,l=this._wrapChildren(s,n.offset,o.offset,t),d=this.mergeAttributes(l.start);d.isEqual(l.start)||l.end.offset--;const h=this.mergeAttributes(l.end);return new Ze(d,h)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return qg(e.clone());e.parent.is("$text")&&(e=Sh(e));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new Ze(e,e.getShiftedBy(1));this.wrap(o,t);const s=new De(n.parent,n.index);n._remove();const l=s.nodeBefore,d=s.nodeAfter;return l instanceof wt&&d instanceof wt?Wg(l,d):qg(s)}_wrapAttributeElement(e,t){if(!Kg(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Kg(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(ja(e,this.document),e.isCollapsed){const h=this._breakAttributes(e.start,t);return new Ze(h,h)}const s=this._breakAttributes(o,t),l=s.parent.childCount,d=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-l,new Ze(d,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new v("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new v("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new v("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Dh(o.parent)||Dh(o))return e.clone();if(o.is("$text"))return this._breakAttributes(Sh(e),t);if(n==o.childCount){const s=new De(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new De(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,l=o._clone();o.parent._insertChild(s,l),this._addToClonedElementsGroup(l);const d=o.childCount-n,h=o._removeChildren(n,d);l._appendChild(h);const p=new De(o.parent,s);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Eh(i){let e=i.parent;for(;!Dh(e);){if(!e)return;e=e.parent}return e}function I1(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function qg(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new De(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new De(t,0):i}function Sh(i){if(i.offset==i.parent.data.length)return new De(i.parent.parent,i.parent.index+1);if(i.offset===0)return new De(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new wt(i.root.document,e)),new De(i.parent.parent,i.parent.index+1)}function Wg(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new De(i,t)}function Gg(i,e){for(const t of i){if(!M1.some(n=>t instanceof n))throw new v("view-writer-insert-invalid-node-type",e);t.is("$text")||Gg(t.getChildren(),e)}}const M1=[wt,ls,vc,Fg,Hg,xh];function Dh(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function ja(i,e){const t=Eh(i.start),n=Eh(i.end);if(!t||!n||t!==n)throw new v("view-writer-invalid-range-container",e)}function Kg(i,e){return i.id===null&&e.id===null}function mn(i){return Object.prototype.toString.call(i)=="[object Text]"}const Yg=i=>i.createTextNode("\xA0"),Qg=i=>{const e=i.createElement("span");return e.dataset.ckeFiller=!0,e.innerText="\xA0",e},Zg=i=>{const e=i.createElement("br");return e.dataset.ckeFiller=!0,e},yc="\u2060".repeat(7);function Kn(i){return mn(i)&&i.data.substr(0,7)===yc}function xc(i){return i.data.length==7&&Kn(i)}function Th(i){return Kn(i)?i.data.slice(7):i.data}function P1(i,e){if(e.keyCode==lt.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Kn(n)&&o<=7&&t.collapse(n,0)}}}function Jg(i,e,t,n=!1){t=t||function(d,h){return d===h};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),s=Array.isArray(e)?e:Array.prototype.slice.call(e),l=function(d,h,p){const m=Xg(d,h,p);if(m===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const w=em(d,m),y=em(h,m),T=Xg(w,y,p),P=d.length-T,B=h.length-T;return{firstIndex:m,lastIndexOld:P,lastIndexNew:B}}(o,s,t);return n?function(d,h){const{firstIndex:p,lastIndexOld:m,lastIndexNew:w}=d;if(p===-1)return Array(h).fill("equal");let y=[];return p>0&&(y=y.concat(Array(p).fill("equal"))),w-p>0&&(y=y.concat(Array(w-p).fill("insert"))),m-p>0&&(y=y.concat(Array(m-p).fill("delete"))),w<h&&(y=y.concat(Array(h-w).fill("equal"))),y}(l,s.length):function(d,h){const p=[],{firstIndex:m,lastIndexOld:w,lastIndexNew:y}=h;return y-m>0&&p.push({index:m,type:"insert",values:d.slice(m,y)}),w-m>0&&p.push({index:m+(y-m),type:"delete",howMany:w-m}),p}(s,l)}function Xg(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function em(i,e){return i.slice(e).reverse()}function Oi(i,e,t){t=t||function(B,O){return B===O};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return Oi.fastDiff(i,e,t,!0);let s,l;if(o<n){const B=i;i=e,e=B,s="delete",l="insert"}else s="insert",l="delete";const d=i.length,h=e.length,p=h-d,m={},w={};function y(B){const O=(w[B-1]!==void 0?w[B-1]:-1)+1,F=w[B+1]!==void 0?w[B+1]:-1,Q=O>F?-1:1;m[B+Q]&&(m[B]=m[B+Q].slice(0)),m[B]||(m[B]=[]),m[B].push(O>F?s:l);let fe=Math.max(O,F),Pe=fe-B;for(;Pe<d&&fe<h&&t(i[Pe],e[fe]);)Pe++,fe++,m[B].push("equal");return fe}let T,P=0;do{for(T=-P;T<p;T++)w[T]=y(T);for(T=p+P;T>p;T--)w[T]=y(T);w[p]=y(p),P++}while(w[p]!==h);return m[p].slice(1)}function tm(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function nm(i){const e=i.parentNode;e&&e.removeChild(i)}function cs(i){return i&&i.nodeType===Node.COMMENT_NODE}function ds(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}Oi.fastDiff=Jg;var B1=f(6062),Ye=f.n(B1),om=f(9315),N1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(om.Z,N1),om.Z.locals;class im{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),_t.isBlink&&!_t.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new v("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(_t.isBlink&&!_t.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=De._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Kn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=rm(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),s=this._findReplaceActions(o,t,n);if(s.indexOf("replace")!==-1){const l={equal:0,insert:0,delete:0};for(const d of s)if(d==="replace"){const h=l.equal+l.insert,p=l.equal+l.delete,m=e.getChild(h);!m||m.is("uiElement")||m.is("rawElement")||this._updateElementMappings(m,t[p]),nm(n[h]),l.equal++}else l[d]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?De._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&mn(t.parent)&&Kn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Kn(e))throw new v("view-renderer-filler-was-lost",this);xc(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const d=l.findAncestor(h=>h.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof wt||s instanceof wt)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),o=this.domConverter.viewToDom(e),s=n.data;let l=o.data;const d=t.inlineFillerPosition;if(d&&d.parent==e.parent&&d.offset==e.index&&(l=yc+l),s!=l){const h=Jg(s,l);for(const p of h)p.type==="insert"?n.insertData(p.index,p.values.join("")):n.deleteData(p.index,p.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const o=t.inlineFillerPosition,s=this.domConverter.mapViewToDom(e).childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&rm(n.ownerDocument,l,o.offset);const d=this._diffNodeLists(s,l);let h=0;const p=new Set;for(const m of d)m==="delete"?(p.add(s[h]),nm(s[h])):m==="equal"&&h++;h=0;for(const m of d)m==="insert"?(tm(n,h,l[h]),h++):m==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[h])),h++);for(const m of p)m.parentNode||this.domConverter.unbindDomElement(m)}_diffNodeLists(e,t){return Oi(e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),t,L1.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let o=[],s=[],l=[];const d={equal:0,insert:0,delete:0};for(const h of e)h==="insert"?l.push(n[d.equal+d.insert]):h==="delete"?s.push(t[d.equal+d.delete]):(o=o.concat(Oi(s,l,sm).map(p=>p==="equal"?"replace":p)),o.push("equal"),s=[],l=[]),d[h]++;return o.concat(Oi(s,l,sm).map(h=>h==="equal"?"replace":h))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(_t.isBlink&&!_t.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const d=l.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent="\xA0",d}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),_t.isGecko&&function(s,l){const d=s.parent;if(d.nodeType!=Node.ELEMENT_NODE||s.offset!=d.childNodes.length-1)return;const h=d.childNodes[s.offset];h&&h.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments)if(e.getSelection().rangeCount){const t=e.activeElement,n=this.domConverter.mapDomToView(t);t&&n&&e.getSelection().removeAllRanges()}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function rm(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(mn(o))return o.data=yc+o.data,o;{const s=i.createTextNode(yc);return Array.isArray(e)?n.splice(t,0,s):tm(e,t,s),s}}function sm(i,e){return ds(i)&&ds(e)&&!mn(i)&&!mn(e)&&!cs(i)&&!cs(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function L1(i,e,t){return e===t||(mn(e)&&mn(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}se(im,Fe);const Bt={window,document};function Ih(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function am(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const O1=Zg(Bt.document),R1=Yg(Bt.document),z1=Qg(Bt.document),Ec="data-ck-unsafe-attribute-",lm="data-ck-unsafe-element";class Sc{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Bt.document:Bt.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Rn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Ao(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const l=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),d=[];let h;for(;h=l.nextNode();)d.push(h);for(const p of d){for(const w of p.getAttributeNames())this.setDomElementAttribute(p,w,p.getAttribute(w));const m=p.tagName.toLowerCase();this._shouldRenameElement(m)&&(um(m),p.replaceWith(this._createReplacementDomElement(m,p)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(um(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o=null){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||I("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Ec+t)&&s&&e.removeAttribute(Ec+t),e.setAttribute(s?t:Ec+t,n)}removeDomElementAttribute(e,t){t!=lm&&(e.removeAttribute(t),e.removeAttribute(Ec+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const l=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(l&&I("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Kn(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const l=e.nodeBefore;if(o=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(e.nodeBefore),!o)return null;n=o.parentNode,s=o.nextSibling}return mn(s)&&Kn(s)?{parent:s,offset:7}:{parent:n,offset:o?Ih(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(cs(e)&&t.skipComments)return null;if(mn(e)){if(xc(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new wt(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Ar(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const s=e.attributes;if(s)for(let l=s.length,d=0;d<l;d++)o._setAttribute(s[d].name,s[d].value);if(this._isViewElementWithRawContent(o,t)||cs(e)){const l=cs(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",l),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))o._appendChild(s);return o}}*domChildrenToView(e,t={}){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],s=this.domToView(o,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;mn(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),l=this.domRangeToView(s);l&&n.push(l)}return new Ao(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Ze(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Ih(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return De._createBefore(n);if(mn(e)){if(xc(e))return this.domPositionToView(e.parentNode,Ih(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(Kn(e)&&(s-=7,s=s<0?0:s),new De(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new De(o,0)}else{const o=e.childNodes[t-1],s=mn(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new De(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(xc(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof wt?o.nextSibling:null}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof wt?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Bt.window,s=[];cm(t,l=>{const{scrollLeft:d,scrollTop:h}=l;s.push([d,h])}),t.focus(),cm(t,l=>{const[d,h]=s.shift();l.scrollLeft=d,l.scrollTop=h}),Bt.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(O1):!(e.tagName!=="BR"||!dm(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(z1)||function(t,n){return t.isEqualNode(R1)&&dm(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=am(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Yg(this._domDocument);case"markedNbsp":return Qg(this._domDocument);case"br":return Zg(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(mn(e)&&Kn(e)&&t<7||this.isElement(e)&&Kn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(p,m){return am(p).some(w=>w.tagName&&m.includes(w.tagName.toLowerCase()))}(e,this.preElements))return Th(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),l=this._checkShouldRightTrimDomText(e,o);s&&(t=t.replace(/^ /,"")),l&&(t=t.replace(/ $/,"")),t=Th(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const d=o&&this.isElement(o)&&o.tagName!="BR",h=o&&mn(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||d||h)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Kn(e)}_getTouchingInlineViewNode(e,t){const n=new _r({startPosition:t?De._createAfter(e):De._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let s=!0;do if(!s&&e[n]?e=e[n]:e[o]?(e=e[o],s=!1):(e=e.parentNode,s=!0),!e||this._isBlockElement(e))return null;while(!mn(e)&&e.tagName!="BR"&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(cs(e))return new xh(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new ao(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t=null){const n=this._domDocument.createElement("span");if(n.setAttribute(lm,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function cm(i,e){for(;i&&i!=Bt.document;)e(i),i=i.parentNode}function dm(i,e){const t=i.parentNode;return t&&t.tagName&&e.includes(t.tagName.toLowerCase())}function um(i){i==="script"&&I("domconverter-unsafe-script-element-detected"),i==="style"&&I("domconverter-unsafe-style-element-detected")}function Dc(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const Mh=Ng(function(i,e){Ti(e,Pi(e),i)}),j1=Mh({},V,{listenTo(i,e,t,n={}){if(ds(i)||Dc(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},s=this._getProxyEmitter(i,o)||new hm(i,o);this.listenTo(s,e,t,n)}else V.listenTo.call(this,i,e,t,n)},stopListening(i,e,t){if(ds(i)||Dc(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,e,t)}else V.stopListening.call(this,i,e,t)},_getProxyEmitter(i,e){return function(t,n){const o=t[W];return o&&o[n]?o[n].emitter:null}(this,fm(i,e))},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(i,e)).filter(e=>!!e)}}),Fa=j1;class hm{constructor(e,t){q(this,fm(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),V._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){V._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function fm(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=E())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}se(hm,V);class zo{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}se(zo,Fa);const F1=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},V1=function(i){return this.__data__.has(i)};function Tc(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new Xr;++e<t;)this.add(i[e])}Tc.prototype.add=Tc.prototype.push=F1,Tc.prototype.has=V1;const $1=Tc,H1=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},U1=function(i,e){return i.has(e)},pm=function(i,e,t,n,o,s){var l=1&t,d=i.length,h=e.length;if(d!=h&&!(l&&h>d))return!1;var p=s.get(i),m=s.get(e);if(p&&m)return p==e&&m==i;var w=-1,y=!0,T=2&t?new $1:void 0;for(s.set(i,e),s.set(e,i);++w<d;){var P=i[w],B=e[w];if(n)var O=l?n(B,P,w,e,i,s):n(P,B,w,i,e,s);if(O!==void 0){if(O)continue;y=!1;break}if(T){if(!H1(e,function(F,Q){if(!U1(T,Q)&&(P===F||o(P,F,t,n,s)))return T.push(Q)})){y=!1;break}}else if(P!==B&&!o(P,B,t,n,s)){y=!1;break}}return s.delete(i),s.delete(e),y},q1=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},W1=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var gm=ue?ue.prototype:void 0,Ph=gm?gm.valueOf:void 0;const G1=function(i,e,t,n,o,s,l){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!s(new os(i),new os(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ft(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var d=q1;case"[object Set]":var h=1&n;if(d||(d=W1),i.size!=e.size&&!h)return!1;var p=l.get(i);if(p)return p==e;n|=2,l.set(i,e);var m=pm(d(i),d(e),n,o,s,l);return l.delete(i),m;case"[object Symbol]":if(Ph)return Ph.call(i)==Ph.call(e)}return!1};var K1=Object.prototype.hasOwnProperty;const Y1=function(i,e,t,n,o,s){var l=1&t,d=gr(i),h=d.length;if(h!=gr(e).length&&!l)return!1;for(var p=h;p--;){var m=d[p];if(!(l?m in e:K1.call(e,m)))return!1}var w=s.get(i),y=s.get(e);if(w&&y)return w==e&&y==i;var T=!0;s.set(i,e),s.set(e,i);for(var P=l;++p<h;){var B=i[m=d[p]],O=e[m];if(n)var F=l?n(O,B,m,e,i,s):n(B,O,m,i,e,s);if(!(F===void 0?B===O||o(B,O,t,n,s):F)){T=!1;break}P||(P=m=="constructor")}if(T&&!P){var Q=i.constructor,fe=e.constructor;Q==fe||!("constructor"in i)||!("constructor"in e)||typeof Q=="function"&&Q instanceof Q&&typeof fe=="function"&&fe instanceof fe||(T=!1)}return s.delete(i),s.delete(e),T};var mm="[object Arguments]",bm="[object Array]",Ic="[object Object]",km=Object.prototype.hasOwnProperty;const Q1=function(i,e,t,n,o,s){var l=gn(i),d=gn(e),h=l?bm:mr(i),p=d?bm:mr(e),m=(h=h==mm?Ic:h)==Ic,w=(p=p==mm?Ic:p)==Ic,y=h==p;if(y&&hr(i)){if(!hr(e))return!1;l=!0,m=!1}if(y&&!m)return s||(s=new Di),l||ma(i)?pm(i,e,t,n,o,s):G1(i,e,h,t,n,o,s);if(!(1&t)){var T=m&&km.call(i,"__wrapped__"),P=w&&km.call(e,"__wrapped__");if(T||P){var B=T?i.value():i,O=P?e.value():e;return s||(s=new Di),o(B,O,t,n,s)}}return!!y&&(s||(s=new Di),Y1(i,e,t,n,o,s))},wm=function i(e,t,n,o,s){return e===t||(e==null||t==null||!Qe(e)&&!Qe(t)?e!=e&&t!=t:Q1(e,t,n,o,i,s))},Z1=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?wm(i,e,void 0,t):!!n};class _m extends zo{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,o=new Set;for(const p of e)if(p.type==="childList"){const m=t.mapDomToView(p.target);if(m&&(m.is("uiElement")||m.is("rawElement")))continue;m&&!this._isBogusBrMutation(p)&&o.add(m)}for(const p of e){const m=t.mapDomToView(p.target);if((!m||!m.is("uiElement")&&!m.is("rawElement"))&&p.type==="characterData"){const w=t.findCorrespondingViewText(p.target);w&&!o.has(w.parent)?n.set(w,{type:"text",oldText:w.data,newText:Th(p.target),node:w}):!w&&Kn(p.target)&&o.add(t.mapDomToView(p.target.parentNode))}}const s=[];for(const p of n.values())this.renderer.markToSync("text",p.node),s.push(p);for(const p of o){const m=t.mapViewToDom(p),w=Array.from(p.getChildren()),y=Array.from(t.domChildrenToView(m,{withChildren:!1}));Z1(w,y,h)||(this.renderer.markToSync("children",p),s.push({type:"children",oldChildren:w,newChildren:y,node:p}))}const l=e[0].target.ownerDocument.getSelection();let d=null;if(l&&l.anchorNode){const p=t.domPositionToView(l.anchorNode,l.anchorOffset),m=t.domPositionToView(l.focusNode,l.focusOffset);p&&m&&(d=new Ao(p),d.setFocus(m))}function h(p,m){if(!Array.isArray(p))return p===m||!(!p.is("$text")||!m.is("$text"))&&p.data===m.data}s.length&&(this.document.fire("mutations",s,d),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Bh{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Mh(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Ri extends zo{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Bh(this.view,t,n))}}class J1 extends Ri{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Ro(this)}})}}const Nh=function(){return ce.Date.now()};var X1=/\s/;const ex=function(i){for(var e=i.length;e--&&X1.test(i.charAt(e)););return e};var tx=/^\s+/;const nx=function(i){return i&&i.slice(0,ex(i)+1).replace(tx,"")};var ox=/^[-+]0x[0-9a-f]+$/i,ix=/^0b[01]+$/i,rx=/^0o[0-7]+$/i,sx=parseInt;const vm=function(i){if(typeof i=="number")return i;if(vo(i))return NaN;if(Ie(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Ie(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=nx(i);var t=ix.test(i);return t||rx.test(i)?sx(i.slice(2),t?2:8):ox.test(i)?NaN:+i};var ax=Math.max,lx=Math.min;const Mc=function(i,e,t){var n,o,s,l,d,h,p=0,m=!1,w=!1,y=!0;if(typeof i!="function")throw new TypeError("Expected a function");function T(fe){var Pe=n,Ke=o;return n=o=void 0,p=fe,l=i.apply(Ke,Pe)}function P(fe){return p=fe,d=setTimeout(O,e),m?T(fe):l}function B(fe){var Pe=fe-h;return h===void 0||Pe>=e||Pe<0||w&&fe-p>=s}function O(){var fe=Nh();if(B(fe))return F(fe);d=setTimeout(O,function(Pe){var Ke=e-(Pe-h);return w?lx(Ke,s-(Pe-p)):Ke}(fe))}function F(fe){return d=void 0,y&&n?T(fe):(n=o=void 0,l)}function Q(){var fe=Nh(),Pe=B(fe);if(n=arguments,o=this,h=fe,Pe){if(d===void 0)return P(h);if(w)return clearTimeout(d),d=setTimeout(O,e),T(h)}return d===void 0&&(d=setTimeout(O,e)),l}return e=vm(e)||0,Ie(t)&&(m=!!t.leading,s=(w="maxWait"in t)?ax(vm(t.maxWait)||0,e):s,y="trailing"in t?!!t.trailing:y),Q.cancel=function(){d!==void 0&&clearTimeout(d),p=0,n=h=o=d=void 0},Q.flush=function(){return d===void 0?l:F(Nh())},Q};class cx extends zo{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Mc(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Ao(t.getRanges(),{backward:t.isBackward,fake:!1});e!=lt.arrowleft&&e!=lt.arrowup||n.setTo(n.getFirstPosition()),e!=lt.arrowright&&e!=lt.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class dx extends zo{constructor(e){super(e),this.mutationObserver=e.getObserver(_m),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Mc(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Mc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(o,s)=>{this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ux extends Ri{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class hx extends Ri{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class fx extends Ri{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class px{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const Am=function(i){return typeof i=="string"||!gn(i)&&Qe(i)&&Ae(i)=="[object String]"};function Cm(i,e,t={},n=[]){const o=t&&t.xmlns,s=o?i.createElementNS(o,e):i.createElement(e);for(const l in t)s.setAttribute(l,t[l]);!Am(n)&&Ln(n)||(n=[n]);for(let l of n)Am(l)&&(l=i.createTextNode(l)),s.appendChild(l);return s}class zt{constructor(e,t){zt._observerInstance||zt._createObserver(),this._element=e,this._callback=t,zt._addElementCallback(e,t),zt._observerInstance.observe(e)}destroy(){zt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){zt._elementCallbacks||(zt._elementCallbacks=new Map);let n=zt._elementCallbacks.get(e);n||(n=new Set,zt._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=zt._getElementCallbacks(e);n&&(n.delete(t),n.size||(zt._elementCallbacks.delete(e),zt._observerInstance.unobserve(e))),zt._elementCallbacks&&!zt._elementCallbacks.size&&(zt._observerInstance=null,zt._elementCallbacks=null)}static _getElementCallbacks(e){return zt._elementCallbacks?zt._elementCallbacks.get(e):null}static _createObserver(){zt._observerInstance=new Bt.window.ResizeObserver(e=>{for(const t of e){const n=zt._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function dn(i){const e=i.next();return e.done?null:e.value}zt._observerInstance=null,zt._elementCallbacks=null;class Lh{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new v("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}se(Lh,Fa),se(Lh,Fe);const jo=Lh;class si{constructor(){this._listener=Object.create(Fa)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Ro(n),n)})}set(e,t,n={}){const o=Ch(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(l,d)=>{t(d,()=>{d.preventDefault(),d.stopPropagation(),l.stop()}),l.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+Ro(e),e)}destroy(){this._listener.stopListening()}}class gx extends zo{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==lt.arrowright||o==lt.arrowleft||o==lt.arrowup||o==lt.arrowdown)){const s=new Oa(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var o})}observe(){}}class mx extends zo{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=lt.tab||o.ctrlKey)return;const s=new Oa(t,"tab",t.selection.getFirstRange());t.fire(s,o),s.stop.called&&n.stop()})}observe(){}}function Pc(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ym(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const xm=["top","right","bottom","left","width","height"];class Tt{constructor(e){const t=Pc(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Sm(e)||t)if(t){const n=Tt.getDomRangeRects(e);Bc(this,Tt.getBoundingRect(n))}else Bc(this,e.getBoundingClientRect());else if(Dc(e)){const{innerWidth:n,innerHeight:o}=e;Bc(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Bc(this,e)}clone(){return new Tt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Tt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Em(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Em(n);){const o=new Tt(n),s=t.getIntersection(o);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of xm)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Dc(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=ym(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new Tt(o));else{let o=e.startContainer;mn(o)&&(o=o.parentNode);const s=new Tt(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Tt(t))}}function Bc(i,e){for(const t of xm)i[t]=e[t]}function Em(i){return!!Sm(i)&&i===i.ownerDocument.body}function Sm(i){return oi(i)}function bx(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),s=new Tt(i).excludeScrollbarsAndBorders();if(![o,n].every(l=>s.contains(l))){let{scrollX:l,scrollY:d}=i;Tm(o,s)?d-=s.top-e.top+t:Dm(n,s)&&(d+=e.bottom-s.bottom+t),Im(e,s)?l-=s.left-e.left+t:Mm(e,s)&&(l+=e.right-s.right+t),i.scrollTo(l,d)}}function kx(i,e){const t=Oh(i);let n,o;for(;i!=t.document.body;)o=e(),n=new Tt(i).excludeScrollbarsAndBorders(),n.contains(o)||(Tm(o,n)?i.scrollTop-=n.top-o.top:Dm(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Im(o,n)?i.scrollLeft-=n.left-o.left:Mm(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Dm(i,e){return i.bottom>e.bottom}function Tm(i,e){return i.top<e.top}function Im(i,e){return i.left<e.left}function Mm(i,e){return i.right>e.right}function Oh(i){return Pc(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function wx(i){if(Pc(i)){let e=i.commonAncestorContainer;return mn(e)&&(e=e.parentNode),e}return i.parentNode}function Pm(i,e){const t=Oh(i),n=new Tt(i);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,l=new Tt(s).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),o=o.parent}}return n}class Bm{constructor(e){this.document=new za(e),this.domConverter=new Sc(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new im(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Ug(this.document),this.addObserver(_m),this.addObserver(dx),this.addObserver(ux),this.addObserver(J1),this.addObserver(cx),this.addObserver(hx),this.addObserver(gx),this.addObserver(mx),_t.isAndroid&&this.addObserver(fx),this.document.on("arrowKey",P1,{priority:"low"}),S1(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:l,value:d}of Array.from(e.attributes))o[l]=d,l==="class"?this._writer.addClass(d.split(" "),n):this._writer.setAttribute(l,d,n);this._initialDomRootAttributes.set(e,o);const s=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(l,d)=>this._renderer.markToSync("children",d)),n.on("change:attributes",(l,d)=>this._renderer.markToSync("attributes",d)),n.on("change:text",(l,d)=>this._renderer.markToSync("text",d)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const l of this._observers.values())l.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=Oh(t);let s=o,l=null;for(;s;){let d;d=wx(s==o?t:l),kx(d,()=>Pm(t,s));const h=Pm(t,s);if(bx(s,h,n),s.parent!=s){if(l=s.frameElement,s=s.parent,!l)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new v("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){v.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return De._createAt(e,t)}createPositionAfter(e){return De._createAfter(e)}createPositionBefore(e){return De._createBefore(e)}createRange(e,t){return new Ze(e,t)}createRangeOn(e){return Ze._createOn(e)}createRangeIn(e){return Ze._createIn(e)}createSelection(e,t,n){return new Ao(e,t,n)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}se(Bm,Fe);class Cr{constructor(e){this.parent=null,this._attrs=Gn(e)}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=cn(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}is(e){return e==="node"||e==="model:node"}_clone(){return new Cr(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Gn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class It extends Cr{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return e==="$text"||e==="model:$text"||e==="text"||e==="model:text"||e==="node"||e==="model:node"}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new It(this.data,this.getAttributes())}static fromJSON(e){return new It(e.data,e.attributes)}}class Fo{constructor(e,t,n){if(this.textNode=e,t<0||t>e.offsetSize)throw new v("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new v("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return e==="$textProxy"||e==="model:$textProxy"||e==="textProxy"||e==="model:textProxy"}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class us{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new v("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new v("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Cr))throw new v("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class vt extends Cr{constructor(e,t,n){super(t),this.name=e,this._children=new us,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="model:element"):e==="element"||e==="model:element"||e==="node"||e==="model:node"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={includeSelf:!1}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):null;return new vt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new It(o)]:(Ln(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new It(s):s instanceof Fo?new It(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t=null;if(e.children){t=[];for(const n of e.children)n.name?t.push(vt.fromJSON(n)):t.push(It.fromJSON(n))}return new vt(e.name,e.attributes,t)}}class ai{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new v("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=be._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,s;do o=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const o=Va(t,n),s=o||Nm(t,n,o);if(s instanceof vt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,yr("elementStart",s,e,t,1);if(s instanceof It){let l;if(this.singleCharacters)l=1;else{let p=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<p&&(p=this.boundaries.end.offset),l=p-t.offset}const d=t.offset-s.startOffset,h=new Fo(s,d,l);return t.offset+=l,this.position=t,yr("text",h,e,t,l)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():yr("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const o=t.parent,s=Va(t,o),l=s||Lm(t,o,s);if(l instanceof vt)return t.offset--,this.shallow?(this.position=t,yr("elementStart",l,e,t,1)):(t.path.push(l.maxOffset),this.position=t,this._visitedParent=l,this.ignoreElementEnd?this._previous():yr("elementEnd",l,e,t));if(l instanceof It){let d;if(this.singleCharacters)d=1;else{let m=l.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>m&&(m=this.boundaries.start.offset),d=t.offset-m}const h=t.offset-l.startOffset,p=new Fo(l,h-d,d);return t.offset-=d,this.position=t,yr("text",p,e,t,d)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,yr("elementStart",n,e,t,1)}}function yr(i,e,t,n,o){return{done:!1,value:{type:i,item:e,previousPosition:t,nextPosition:n,length:o}}}class be{constructor(e,t,n="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new v("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new v("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new v("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new v("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Va(this,this.parent)}get nodeAfter(){const e=this.parent;return Nm(this,e,Va(this,e))}get nodeBefore(){const e=this.parent;return Lm(this,e,Va(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=cn(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ai(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=cn(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=be._createAt(this),n=be._createAt(e);break;case"after":t=be._createAt(e),n=be._createAt(this);break;default:return!1}let o=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==o.maxOffset)return!1;t.path=t.path.slice(0,-1),o=o.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(e){return e==="position"||e==="model:position"}hasSameParentAs(e){return this.root!==e.root?!1:cn(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=be._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?be._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=be._createAt(this);if(this.root!=e.root)return n;if(cn(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(cn(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=be._createAt(this);if(this.root!=e.root)return n;if(cn(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(cn(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return be._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=be._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof be)return new be(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new v("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new v("model-position-parent-incorrect",[this,e]);const s=o.getPath();return s.push(t),new this(o.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new v("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new v("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new be(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new v("model-position-fromjson-no-root",t,{rootName:e.root});return new be(t.getRoot(e.root),e.path,e.stickiness)}}function Va(i,e){const t=e.getChild(e.offsetToIndex(i.offset));return t&&t.is("$text")&&t.startOffset<i.offset?t:null}function Nm(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset))}function Lm(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset)-1)}class ae{constructor(e,t=null){this.start=be._createAt(e),this.end=t?be._createAt(t):be._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new ai({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return cn(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=be._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return e==="range"||e==="model:range"}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new ae(this.start,e.start)),this.containsPosition(e.end)&&t.push(new ae(e.end,this.end))):t.push(new ae(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new ae(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,s=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(s)&&(s=e.end),new ae(o,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=be._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const s=o.maxOffset-n.offset;s!==0&&e.push(new ae(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],l=s-n.offset;l!==0&&e.push(new ae(n,n.getShiftedBy(l))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new ai(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ai(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ai(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new ae(this.start,this.end)]}getTransformedByOperations(e){const t=[new ae(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const s=t[o].getTransformedByOperation(n);t.splice(o,1,...s),o+=s.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let s=n+1;s<t.length;s++){const l=t[s];(o.containsRange(l)||l.containsRange(o)||o.isEqual(l))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new ae(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new ae(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=be._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new ae(t,n)):new ae(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new ae(this.start,e),new ae(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new ae(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const w=this.start._getTransformedByMove(e,t,n);return[new ae(w)]}const s=ae._createFromPositionAndShift(e,n),l=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const w=this.start._getTransformedByMove(e,t,n),y=this.end._getTransformedByMove(e,t,n);return[new ae(w,y)]}let d;const h=this.getDifference(s);let p=null;const m=this.getIntersection(s);if(h.length==1?p=new ae(h[0].start._getTransformedByDeletion(e,n),h[0].end._getTransformedByDeletion(e,n)):h.length==2&&(p=new ae(this.start,this.end._getTransformedByDeletion(e,n))),d=p?p._getTransformedByInsertion(l,n,m!==null||o):[],m){const w=new ae(m.start._getCombined(s.start,l),m.end._getCombined(s.start,l));d.length==2?d.splice(1,0,w):d.push(w)}return d}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new ae(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(be._createAt(e,0),be._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(be._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new v("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,l)=>s.start.isAfter(l.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(o.start);s++)o.start=be._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(o.end);s++)o.end=be._createAt(e[s].end);return o}static fromJSON(e,t){return new this(be.fromJSON(e.start,t),be.fromJSON(e.end,t))}}class Rh{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new v("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=be._createAt(o,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new ae(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Ze(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const s of o.getElementsWithSameId())n.add(s);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let s=0;s<t;s++)o+=this.getModelLength(e.getChild(s));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,s=0,l=0;if(e.is("$text"))return new De(e,t);for(;s<t;)n=e.getChild(l),o=this.getModelLength(n),s+=o,l++;return s==t?this._moveViewPositionToTextNode(new De(e,l)):this.findPositionIn(n,t-(s-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof wt?new De(t,t.data.length):n instanceof wt?new De(n,0):e}}se(Rh,V);class _x{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Nc(t),e instanceof Fo&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Nc(t),e instanceof Fo&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Nc(t),e instanceof Fo&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=Nc(t),e instanceof Fo&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[s,l]of o){const d=s.split(":")[0];l&&e==d&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new v("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,s=Symbol("$textProxy:"+e.data);let l,d;return l=this._textProxyRegistry.get(t),l||(l=new Map,this._textProxyRegistry.set(t,l)),d=l.get(n),d||(d=new Map,l.set(n,d)),d.set(o,s),s}}function Nc(i){const e=i.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?i:e.length>1?e[0]+":"+e[1]:e[0]}class zh{constructor(e){this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const l of e.getMarkersToRemove())this._convertMarkerRemove(l.name,l.range,o);const s=this._reduceChanges(e.getChanges());for(const l of s)l.type==="insert"?this._convertInsert(ae._createFromPositionAndShift(l.position,l.length),o):l.type==="reinsert"?this._convertReinsert(ae._createFromPositionAndShift(l.position,l.length),o):l.type==="remove"?this._convertRemove(l.position,l.length,l.name,o):this._convertAttribute(l.range,l.attributeKey,l.attributeOldValue,l.attributeNewValue,o);for(const l of o.mapper.flushUnboundMarkerNames()){const d=t.get(l).getRange();this._convertMarkerRemove(l,d,o),this._convertMarkerAdd(l,d,o)}for(const l of e.getMarkersToAdd())this._convertMarkerAdd(l.name,l.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const s=this._createConversionApi(n,void 0,o);this._convertInsert(e,s);for(const[l,d]of t)this._convertMarkerAdd(l,d,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,o),this.fire("selection",{selection:e},s),e.isCollapsed){for(const l of o){const d=l.getRange();if(!vx(e.getFirstPosition(),l,s.mapper))continue;const h={item:e,markerName:l.name,markerRange:d};s.consumable.test(e,"addMarker:"+l.name)&&this.fire("addMarker:"+l.name,h,s)}for(const l of e.getAttributeKeys()){const d={item:e,range:e.getFirstRange(),attributeKey:l,attributeOldValue:null,attributeNewValue:e.getAttribute(l)};s.consumable.test(e,"attribute:"+d.attributeKey)&&this.fire("attribute:"+d.attributeKey+":$text",d,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(Om))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire("remove:"+n,{position:e,length:t},o)}_convertAttribute(e,t,n,o,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const l of e){const d={item:l.item,range:ae._createFromPositionAndShift(l.previousPosition,l.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,d,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(Om))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o="addMarker:"+e;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const s of t.getItems()){if(!n.consumable.test(s,o))continue;const l={item:s,range:ae._createOn(s),markerName:e,markerRange:t};this.fire(o,l,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire("removeMarker:"+e,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const s of o.getAttributeKeys())e.add(o,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(h,p){const m=p.item.name||"$text";return`${h}:${m}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,l=this._firedEventsMap.get(n),d=l.get(s);if(d){if(d.has(o))return;d.add(o)}else l.set(s,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:ae._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new _x,writer:e,options:n,convertItem:s=>this._convertInsert(ae._createOn(s),o),convertChildren:s=>this._convertInsert(ae._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!t.has(o.mapper.toModelElement(s))};return this._firedEventsMap.set(o,new Map),o}}function vx(i,e,t){const n=e.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function Om(i){return{item:i.item,range:ae._createFromPositionAndShift(i.previousPosition,i.length)}}se(zh,V);class li{constructor(e,t,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,n)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new ae(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new ae(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new ae(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,n){if(e===null)this._setRanges([]);else if(e instanceof li)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof ae)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof be)this._setRanges([new ae(e)]);else if(e instanceof Cr){const o=!!n&&!!n.backward;let s;if(t=="in")s=ae._createIn(e);else if(t=="on")s=ae._createOn(e);else{if(t===void 0)throw new v("model-selection-setto-required-second-parameter",[this,e]);s=new ae(be._createAt(e,t))}this._setRanges([s],o)}else{if(!Ln(e))throw new v("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const n=(e=Array.from(e)).some(o=>{if(!(o instanceof ae))throw new v("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(o))});if(e.length!==this._ranges.length||n){this._removeAllRanges();for(const o of e)this._pushRange(o);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(this.anchor===null)throw new v("model-selection-setfocus-no-ranges",[this,e]);const n=be._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new ae(n,o)),this._lastRangeBackward=!0):(this._pushRange(new ae(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(e){return e==="selection"||e==="model:selection"}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=zm(t.start,e);n&&jh(n,t)&&(yield n);for(const s of t.getWalker()){const l=s.item;s.type=="elementEnd"&&Ax(l,e,t)&&(yield l)}const o=zm(t.end,e);o&&!t.end.isTouching(be._createAt(o,0))&&jh(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=be._createAt(e,0),n=be._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new ae(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new v("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Rm(i,e){return!e.has(i)&&(e.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function Ax(i,e,t){return Rm(i,e)&&jh(i,t)}function zm(i,e){const t=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const s=n.find(l=>!o&&(o=t.isLimit(l),!o&&Rm(l,e)));return n.forEach(l=>e.add(l)),s}function jh(i,e){const t=function(n){const o=n.root.document.model.schema;let s=n.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(i);return t?!e.containsRange(ae._createOn(t),!0):!0}se(li,V);class Vo extends ae{constructor(e,t){super(e,t),Cx.call(this)}detach(){this.stopListening()}is(e){return e==="liveRange"||e==="model:liveRange"||e=="range"||e==="model:range"}toRange(){return new ae(this.start,this.end)}static fromRange(e){return new Vo(e.start,e.end)}}function Cx(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&yx.call(this,t)},{priority:"low"})}function yx(i){const e=this.getTransformedByOperation(i),t=ae._createFromRanges(e),n=!t.isEqual(this),o=function(l,d){switch(d.type){case"insert":return l.containsPosition(d.position);case"move":case"remove":case"reinsert":case"merge":return l.containsPosition(d.sourcePosition)||l.start.isEqual(d.sourcePosition)||l.containsPosition(d.targetPosition);case"split":return l.containsPosition(d.splitPosition)||l.containsPosition(d.insertionPosition)}return!1}(this,i);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=i.type=="remove"?i.sourcePosition:i.deletionPosition);const l=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",l,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}se(Vo,V);const $a="selection:";class Co{constructor(e){this._selection=new xx(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return e==="selection"||e=="model:selection"||e=="documentSelection"||e=="model:documentSelection"}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return $a+e}static _isStoreAttributeKey(e){return e.startsWith($a)}}se(Co,V);class xx extends li{constructor(e){super(),this.markers=new On({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new v("document-selection-wrong-position",this,{range:t})}),this.listenTo(this._model.markers,"update",(t,n,o,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,s){const l=o.document.differ;for(const d of l.getChanges()){if(d.type!="insert")continue;const h=d.position.parent;d.length===h.maxOffset&&o.enqueueChange(s,p=>{const m=Array.from(h.getAttributeKeys()).filter(w=>w.startsWith($a));for(const w of m)p.removeAttribute(w,h)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,n){super.setTo(e,t,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=E();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new v("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=Vo.fromRange(e);return t.on("change:range",(n,o,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const l=this._ranges.indexOf(t);this._ranges.splice(l,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const l=o.getRange();for(const d of this.getRanges())l.containsRange(d,!d.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const s=Array.from(this.markers),l=this.markers.has(e);if(t){let d=!1;for(const h of this.getRanges())if(t.containsRange(h,!h.isCollapsed)){d=!0;break}d&&!l?(this.markers.add(e),o=!0):!d&&l&&(this.markers.remove(e),o=!0)}else l&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=Gn(this._getSurroundingAttributes()),n=Gn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,l]of this._attributePriority)l=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const o=[];for(const[s,l]of this.getAttributes())n.has(s)&&n.get(s)===l||o.push(s);for(const[s]of n)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith($a)&&(yield[t.substr($a.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Lc(o)),n||(n=Lc(s)),!this.isGravityOverridden&&!n){let l=o;for(;l&&!t.isInline(l)&&!n;)l=l.previousSibling,n=Lc(l)}if(!n){let l=s;for(;l&&!t.isInline(l)&&!n;)l=l.nextSibling,n=Lc(l)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const s of o){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Lc(i){return i instanceof Fo||i instanceof It?i.getAttributes():null}class jm{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const yo=function(i){return Li(i,5)};class Ex extends jm{elementToElement(e){return this.add(function(t){return(t=yo(t)).model=$m(t.model),t.view=Ha(t.view,"container"),t.model.attributes.length&&(t.model.children=!0),n=>{n.on("insert:"+t.model.name,function(o,s=Dx){return(l,d,h)=>{if(!s(d.item,h.consumable,{preflight:!0}))return;const p=o(d.item,h,d);if(!p)return;s(d.item,h.consumable);const m=h.mapper.toViewPosition(d.range.start);h.mapper.bindElements(d.item,p),h.writer.insert(m,p),h.convertAttributes(d.item),Gm(p,d.item.getChildren(),h,{reconversion:d.reconversion})}}(t.view,Wm(t.model)),{priority:t.converterPriority||"normal"}),(t.model.children||t.model.attributes.length)&&n.on("reduceChanges",qm(t.model),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){return(t=yo(t)).model=$m(t.model),t.view=Ha(t.view,"container"),t.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(t.model.name,"$text"))throw new v("conversion-element-to-structure-disallowed-text",n,{elementName:t.model.name});var o,s;n.on("insert:"+t.model.name,(o=t.view,s=Wm(t.model),(l,d,h)=>{if(!s(d.item,h.consumable,{preflight:!0}))return;const p=new Map;h.writer._registerSlotFactory(function(y,T,P){return(B,O="children")=>{const F=B.createContainerElement("$slot");let Q=null;if(O==="children")Q=Array.from(y.getChildren());else{if(typeof O!="function")throw new v("conversion-slot-mode-unknown",P.dispatcher,{modeOrFilter:O});Q=Array.from(y.getChildren()).filter(fe=>O(fe))}return T.set(F,Q),F}}(d.item,p,h));const m=o(d.item,h,d);if(h.writer._clearSlotFactory(),!m)return;(function(y,T,P){const B=Array.from(T.values()).flat(),O=new Set(B);if(O.size!=B.length)throw new v("conversion-slot-filter-overlap",P.dispatcher,{element:y});if(O.size!=y.childCount)throw new v("conversion-slot-filter-incomplete",P.dispatcher,{element:y})})(d.item,p,h),s(d.item,h.consumable);const w=h.mapper.toViewPosition(d.range.start);h.mapper.bindElements(d.item,m),h.writer.insert(w,m),h.convertAttributes(d.item),function(y,T,P,B){P.mapper.on("modelToViewPosition",Q,{priority:"highest"});let O=null,F=null;for([O,F]of T)Gm(y,F,P,B),P.writer.move(P.writer.createRangeIn(O),P.writer.createPositionBefore(O)),P.writer.remove(O);function Q(fe,Pe){const Ke=Pe.modelPosition.nodeAfter,Mt=F.indexOf(Ke);Mt<0||(Pe.viewPosition=Pe.mapper.findPositionIn(O,Mt))}P.mapper.off("modelToViewPosition",Q)}(m,p,h,{reconversion:d.reconversion})}),{priority:t.converterPriority||"normal"}),n.on("reduceChanges",qm(t.model),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=yo(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=Ha(t.view[s],"attribute");else t.view=Ha(t.view,"attribute");const o=Hm(t);return s=>{s.on(n,function(l){return(d,h,p)=>{if(!p.consumable.test(h.item,d.name))return;const m=l(h.attributeOldValue,p,h),w=l(h.attributeNewValue,p,h);if(!m&&!w)return;p.consumable.consume(h.item,d.name);const y=p.writer,T=y.document.selection;if(h.item instanceof li||h.item instanceof Co)y.wrap(T.getFirstRange(),w);else{let P=p.mapper.toViewRange(h.range);h.attributeOldValue!==null&&m&&(P=y.unwrap(P,m)),h.attributeNewValue!==null&&w&&y.wrap(P,w)}}}(o),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=yo(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=Um(t.view[s]);else t.view=Um(t.view);const o=Hm(t);return s=>{var l;s.on(n,(l=o,(d,h,p)=>{if(!p.consumable.test(h.item,d.name))return;const m=l(h.attributeOldValue,p,h),w=l(h.attributeNewValue,p,h);if(!m&&!w)return;p.consumable.consume(h.item,d.name);const y=p.mapper.toViewElement(h.item),T=p.writer;if(!y)throw new v("conversion-attribute-to-attribute-on-text",p.dispatcher,h);if(h.attributeOldValue!==null&&m)if(m.key=="class"){const P=Jt(m.value);for(const B of P)T.removeClass(B,y)}else if(m.key=="style"){const P=Object.keys(m.value);for(const B of P)T.removeStyle(B,y)}else T.removeAttribute(m.key,y);if(h.attributeNewValue!==null&&w)if(w.key=="class"){const P=Jt(w.value);for(const B of P)T.addClass(B,y)}else if(w.key=="style"){const P=Object.keys(w.value);for(const B of P)T.setStyle(B,w.value[B],y)}else T.setAttribute(w.key,w.value,y)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){return(t=yo(t)).view=Ha(t.view,"ui"),n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(s,l,d)=>{l.isOpening=!0;const h=o(l,d);l.isOpening=!1;const p=o(l,d);if(!h||!p)return;const m=l.markerRange;if(m.isCollapsed&&!d.consumable.consume(m,s.name))return;for(const T of m)if(!d.consumable.consume(T.item,s.name))return;const w=d.mapper,y=d.writer;y.insert(w.toViewPosition(m.start),h),d.mapper.bindElementToMarker(h,l.markerName),m.isCollapsed||(y.insert(w.toViewPosition(m.end),p),d.mapper.bindElementToMarker(p,l.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,(t.view,(s,l,d)=>{const h=d.mapper.markerNameToElements(l.markerName);if(h){for(const p of h)d.mapper.unbindElementFromMarkerName(p,l.markerName),d.writer.clear(d.writer.createRangeOn(p),p);d.writer.clearClonedElementsGroup(l.markerName),s.stop()}}),{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(s,l,d)=>{if(!l.item||!(l.item instanceof li||l.item instanceof Co||l.item.is("$textProxy")))return;const h=Fh(o,l,d);if(!h||!d.consumable.consume(l.item,s.name))return;const p=d.writer,m=Fm(p,h),w=p.document.selection;if(l.item instanceof li||l.item instanceof Co)p.wrap(w.getFirstRange(),m,w);else{const y=d.mapper.toViewRange(l.range),T=p.wrap(y,m);for(const P of T.getItems())if(P.is("attributeElement")&&P.isSimilar(m)){d.mapper.bindElementToMarker(P,l.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on("addMarker:"+t.model,function(s){return(l,d,h)=>{if(!d.item||!(d.item instanceof vt))return;const p=Fh(s,d,h);if(!p||!h.consumable.test(d.item,l.name))return;const m=h.mapper.toViewElement(d.item);if(m&&m.getCustomProperty("addHighlight")){h.consumable.consume(d.item,l.name);for(const w of ae._createIn(d.item))h.consumable.consume(w.item,l.name);m.getCustomProperty("addHighlight")(m,p,h.writer),h.mapper.bindElementToMarker(m,d.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,function(s){return(l,d,h)=>{if(d.markerRange.isCollapsed)return;const p=Fh(s,d,h);if(!p)return;const m=Fm(h.writer,p),w=h.mapper.markerNameToElements(d.markerName);if(w){for(const y of w)h.mapper.unbindElementFromMarkerName(y,d.markerName),y.is("attributeElement")?h.writer.unwrap(h.writer.createRangeOn(y),m):y.getCustomProperty("removeHighlight")(y,p.id,h.writer);h.writer.clearClonedElementsGroup(d.markerName),l.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=yo(t)).model;return t.view||(t.view=o=>({group:n,name:o.substr(t.model.length+1)})),o=>{var s;o.on("addMarker:"+n,(s=t.view,(l,d,h)=>{const p=s(d.markerName,h);if(!p)return;const m=d.markerRange;h.consumable.consume(m,l.name)&&(Vm(m,!1,h,d,p),Vm(m,!0,h,d,p),l.stop())}),{priority:t.converterPriority||"normal"}),o.on("removeMarker:"+n,function(l){return(d,h,p)=>{const m=l(h.markerName,p);if(!m)return;const w=p.mapper.markerNameToElements(h.markerName);if(w){for(const T of w)p.mapper.unbindElementFromMarkerName(T,h.markerName),T.is("containerElement")?(y(`data-${m.group}-start-before`,T),y(`data-${m.group}-start-after`,T),y(`data-${m.group}-end-before`,T),y(`data-${m.group}-end-after`,T)):p.writer.clear(p.writer.createRangeOn(T),T);p.writer.clearClonedElementsGroup(h.markerName),d.stop()}function y(T,P){if(P.hasAttribute(T)){const B=new Set(P.getAttribute(T).split(","));B.delete(m.name),B.size==0?p.writer.removeAttribute(T,P):p.writer.setAttribute(T,Array.from(B).join(","),P)}}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}}function Fm(i,e){const t=i.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Vm(i,e,t,n,o){const s=e?i.start:i.end,l=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,d=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(l||d){let h,p;e&&l||!e&&!d?(h=l,p=!0):(h=d,p=!1);const m=t.mapper.toViewElement(h);if(m)return void function(w,y,T,P,B,O){const F=`data-${O.group}-${y?"start":"end"}-${T?"before":"after"}`,Q=w.hasAttribute(F)?w.getAttribute(F).split(","):[];Q.unshift(O.name),P.writer.setAttribute(F,Q.join(","),w),P.mapper.bindElementToMarker(w,B.markerName)}(m,e,p,t,n,o)}(function(h,p,m,w,y){const T=`${y.group}-${p?"start":"end"}`,P=y.name?{name:y.name}:null,B=m.writer.createUIElement(T,P);m.writer.insert(h,B),m.mapper.bindElementToMarker(B,w.markerName)})(t.mapper.toViewPosition(s),e,t,n,o)}function $m(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function Ha(i,e){return typeof i=="function"?i:(t,n)=>function(o,s,l){typeof o=="string"&&(o={name:o});let d;const h=s.writer,p=Object.assign({},o.attributes);if(l=="container")d=h.createContainerElement(o.name,p);else if(l=="attribute"){const m={priority:o.priority||ls.DEFAULT_PRIORITY};d=h.createAttributeElement(o.name,p,m)}else d=h.createUIElement(o.name,p);if(o.styles){const m=Object.keys(o.styles);for(const w of m)h.setStyle(w,o.styles[w],d)}if(o.classes){const m=o.classes;if(typeof m=="string")h.addClass(m,d);else for(const w of m)h.addClass(w,d)}return d}(i,n,e)}function Hm(i){return i.model.values?(e,t)=>{const n=i.view[e];return n?n(e,t):null}:i.view}function Um(i){return typeof i=="string"?e=>({key:i,value:e}):typeof i=="object"?i.value?()=>i:e=>({key:i.key,value:e}):i}function Fh(i,e,t){const n=typeof i=="function"?i(e,t):i;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function qm(i){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(i);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const l=s.position?s.position.parent:s.range.start.nodeAfter;if(l&&e(l,s)){if(!n.reconvertedElements.has(l)){n.reconvertedElements.add(l);const d=be._createBefore(l);o.push({type:"remove",name:l.name,position:d,length:1},{type:"reinsert",name:l.name,position:d,length:1})}}else o.push(s)}n.changes=o}}function Wm(i){return(e,t,n={})=>{const o=["insert"];for(const s of i.attributes)e.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>t.test(e,s))&&(n.preflight||o.forEach(s=>t.consume(e,s)),!0)}}function Gm(i,e,t,n){for(const o of e)Sx(i.root,o,t,n)||t.convertItem(o)}function Sx(i,e,t,n){const{writer:o,mapper:s}=t;if(!n.reconversion)return!1;const l=s.toViewElement(e);return!(!l||l.root==i)&&!!t.canReuseView(l)&&(o.move(o.createRangeOn(l),s.toViewPosition(be._createBefore(e))),!0)}function Dx(i,e,{preflight:t}={}){return t?e.test(i,"insert"):e.consume(i,"insert")}function Km(i){const{schema:e,document:t}=i.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function Ym(i,e,t){const n=t.createContext(i);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function Qm(i,e){const t=e.createElement("paragraph");return e.insert(t,i),e.createPositionAt(t,0)}class Tx extends jm{elementToElement(e){return this.add(Zm(e))}elementToAttribute(e){return this.add(function(t){Jm(t=yo(t));const n=Xm(t,!1),o=Vh(t.view),s=o?"element:"+o:"element";return l=>{l.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=yo(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const l=s.view.key;let d;return l=="class"||l=="style"?d={[l=="class"?"classes":"styles"]:s.view.value}:d={attributes:{[l]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(d.name=s.view.name),s.view=d,l}(t)),Jm(t,n);const o=Xm(t,!0);return s=>{s.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){return function(n){const o=n.model;n.model=(s,l)=>{const d=typeof o=="string"?o:o(s,l);return l.writer.createElement("$marker",{"data-name":d})}}(t=yo(t)),Zm(t)}(e))}dataToMarker(e){return this.add(function(t){(t=yo(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n=$h(eb(t,"start")),o=$h(eb(t,"end"));return s=>{s.on("element:"+t.view+"-start",n,{priority:t.converterPriority||"normal"}),s.on("element:"+t.view+"-end",o,{priority:t.converterPriority||"normal"});const l=x.get("low"),d=x.get("highest"),h=x.get(t.converterPriority)/d;s.on("element",function(p){return(m,w,y)=>{const T=`data-${p.view}`;function P(B,O){for(const F of O){const Q=p.model(F,y),fe=y.writer.createElement("$marker",{"data-name":Q});y.writer.insert(fe,B),w.modelCursor.isEqual(B)?w.modelCursor=w.modelCursor.getShiftedBy(1):w.modelCursor=w.modelCursor._getTransformedByInsertion(B,1),w.modelRange=w.modelRange._getTransformedByInsertion(B,1)[0]}}(y.consumable.test(w.viewItem,{attributes:T+"-end-after"})||y.consumable.test(w.viewItem,{attributes:T+"-start-after"})||y.consumable.test(w.viewItem,{attributes:T+"-end-before"})||y.consumable.test(w.viewItem,{attributes:T+"-start-before"}))&&(w.modelRange||Object.assign(w,y.convertChildren(w.viewItem,w.modelCursor)),y.consumable.consume(w.viewItem,{attributes:T+"-end-after"})&&P(w.modelRange.end,w.viewItem.getAttribute(T+"-end-after").split(",")),y.consumable.consume(w.viewItem,{attributes:T+"-start-after"})&&P(w.modelRange.end,w.viewItem.getAttribute(T+"-start-after").split(",")),y.consumable.consume(w.viewItem,{attributes:T+"-end-before"})&&P(w.modelRange.start,w.viewItem.getAttribute(T+"-end-before").split(",")),y.consumable.consume(w.viewItem,{attributes:T+"-start-before"})&&P(w.modelRange.start,w.viewItem.getAttribute(T+"-start-before").split(",")))}}(t),{priority:l+h})}}(e))}}function Zm(i){const e=$h(i=yo(i)),t=Vh(i.view),n=t?"element:"+t:"element";return o=>{o.on(n,e,{priority:i.converterPriority||"normal"})}}function Vh(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function $h(i){const e=new Rn(i.view);return(t,n,o)=>{const s=e.match(n.viewItem);if(!s)return;const l=s.match;if(l.name=!0,!o.consumable.test(n.viewItem,l))return;const d=function(h,p,m){return h instanceof Function?h(p,m):m.writer.createElement(h)}(i.model,n.viewItem,o);d&&o.safeInsert(d,n.modelCursor)&&(o.consumable.consume(n.viewItem,l),o.convertChildren(n.viewItem,d),o.updateConversionResult(d,n))}}function Jm(i,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?t:i.model.value;i.model={key:n,value:o}}function Xm(i,e){const t=new Rn(i.view);return(n,o,s)=>{if(!o.modelRange&&e)return;const l=t.match(o.viewItem);if(!l||(function(m,w){const y=typeof m=="function"?m(w):m;return typeof y=="object"&&!Vh(y)?!1:!y.classes&&!y.attributes&&!y.styles}(i.view,o.viewItem)?l.match.name=!0:delete l.match.name,!s.consumable.test(o.viewItem,l.match)))return;const d=i.model.key,h=typeof i.model.value=="function"?i.model.value(o.viewItem,s):i.model.value;if(h===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(m,w,y,T){let P=!1;for(const B of Array.from(m.getItems({shallow:y})))T.schema.checkAttribute(B,w.key)&&(P=!0,B.hasAttribute(w.key)||T.writer.setAttribute(w.key,w.value,B));return P}(o.modelRange,{key:d,value:h},e,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(l.match.name=!0),s.consumable.consume(o.viewItem,l.match))}}function eb(i,e){const t={};return t.view=i.view+"-"+e,t.model=(n,o)=>{const s=n.getAttribute("name"),l=i.model(s,o);return o.writer.createElement("$marker",{"data-name":l})},t}class tb{constructor(e,t){this.model=e,this.view=new Bm(t),this.mapper=new Rh,this.downcastDispatcher=new zh({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(l=>{this.downcastDispatcher.convertChanges(n.differ,s,l),this.downcastDispatcher.convertSelection(o,s,l)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(l,d){return(h,p)=>{const m=p.newSelection,w=[];for(const T of m.getRanges())w.push(d.toModelRange(T));const y=l.createSelection(w,{backward:m.isBackward});y.isEqual(l.document.selection)||l.change(T=>{T.setSelection(y)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(l,d,h)=>{if(!h.consumable.consume(d.item,l.name))return;const p=h.writer,m=h.mapper.toViewPosition(d.range.start),w=p.createText(d.item.data);p.insert(m,w)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(l,d,h)=>{h.convertAttributes(d.item),d.reconversion||!d.item.is("element")||d.item.isEmpty||h.convertChildren(d.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(l,d,h)=>{const p=h.mapper.toViewPosition(d.position),m=d.position.getShiftedBy(d.length),w=h.mapper.toViewPosition(m,{isPhantom:!0}),y=h.writer.createRange(p,w),T=h.writer.remove(y.getTrimmed());for(const P of h.writer.createRangeIn(T).getItems())h.mapper.unbindViewElement(P,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const p=h.writer,m=p.document.selection;for(const w of m.getRanges())w.isCollapsed&&w.end.parent.isAttached()&&h.writer.mergeAttributes(w.start);p.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const p=d.selection;if(p.isCollapsed||!h.consumable.consume(p,"selection"))return;const m=[];for(const w of p.getRanges()){const y=h.mapper.toViewRange(w);m.push(y)}h.writer.setSelection(m,{backward:p.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(l,d,h)=>{const p=d.selection;if(!p.isCollapsed||!h.consumable.consume(p,"selection"))return;const m=h.writer,w=p.getFirstPosition(),y=h.mapper.toViewPosition(w),T=m.breakAttributes(y);m.setSelection(T)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(l=>{if(l.rootName=="$graveyard")return null;const d=new k1(this.view.document,l.name);return d.rootName=l.rootName,this.mapper.bindElements(l,d),d})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new v("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}se(tb,Fe);class Ix{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new v("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Ua{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new Mx(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const l of n)l!="style"&&l!="class"&&t.attributes.push(l);const o=e.getClassNames();for(const l of o)t.classes.push(l);const s=e.getStyleNames();for(const l of s)t.styles.push(l);return t}static createFrom(e,t){if(t||(t=new Ua(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Ua.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Ua.createFrom(n,t);return t}}class Mx{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const n=gn(t)?t:[t],o=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new v("viewconsumable-invalid-attribute",this);if(o.set(s,!0),e==="styles")for(const l of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(l,!0)}}_test(e,t){const n=gn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const l=o.get(s);if(l===void 0)return null;if(!l)return!1}else{const l=s=="class"?"classes":"styles",d=this._test(l,[...this._consumables[l].keys()]);if(d!==!0)return d}return!0}_consume(e,t){const n=gn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),e=="styles")for(const l of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(l,!1)}else{const l=s=="class"?"classes":"styles";this._consume(l,[...this._consumables[l].keys()])}}_revert(e,t){const n=gn(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{const l=s=="class"?"classes":"styles";this._revert(l,[...this._consumables[l].keys()])}}}class nb{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new xr(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new xr(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new v("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new v("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof be){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof vt))throw new v("schema-check-merge-no-element-before",this);if(!(o instanceof vt))throw new v("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof be?t=e.parent:t=(e instanceof ae?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const s=o.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new It("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const s of o)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new ae(e);let n,o;const s=e.getAncestors().reverse().find(l=>this.isLimit(l))||e.root;t!="both"&&t!="backward"||(n=new ai({boundaries:ae._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new ai({boundaries:ae._createIn(s),startPosition:e}));for(const l of function*(d,h){let p=!1;for(;!p;){if(p=!0,d){const m=d.next();m.done||(p=!1,yield{walker:d,value:m.value})}if(h){const m=h.next();m.done||(p=!1,yield{walker:h,value:m.value})}}}(n,o)){const d=l.walker==n?"elementEnd":"elementStart",h=l.value;if(h.type==d&&this.isObject(h.item))return ae._createOn(h.item);if(this.checkChild(h.nextPosition,"$text"))return new ae(h.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[s,l]of Object.entries(t))o.schema.checkAttribute(e,s)&&n.setAttribute(s,l,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))ob(this,n,t);else{const o=ae._createIn(n).getPositions();for(const s of o)ob(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[s,l]of e.getAttributes()){const d=this.getAttributeProperties(s);d[t]!==void 0&&(n!==void 0&&n!==d[t]||(o[s]=l))}return o}createContext(e){return new xr(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=Px(t[o],o);for(const o of n)Bx(e,o);for(const o of n)Nx(e,o);for(const o of n)Lx(e,o);for(const o of n)Ox(e,o),Rx(e,o);for(const o of n)zx(e,o),jx(e,o),Fx(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const s=this.getDefinition(o);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(ae._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(o)||(yield new ae(n,o)),n=be._createAfter(s)),o=be._createAfter(s);n.isEqual(o)||(yield new ae(n,o))}}se(nb,Fe);class xr{constructor(e){if(e instanceof xr)return e;typeof e=="string"?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map($x)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new xr([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Px(i,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const s of n){const l=Object.keys(s).filter(d=>d.startsWith("is"));for(const d of l)o[d]=s[d]}}(i,t),Er(i,t,"allowIn"),Er(i,t,"allowContentOf"),Er(i,t,"allowWhere"),Er(i,t,"allowAttributes"),Er(i,t,"allowAttributesOf"),Er(i,t,"allowChildren"),Er(i,t,"inheritTypesFrom"),function(n,o){for(const s of n){const l=s.inheritAllFrom;l&&(o.allowContentOf.push(l),o.allowWhere.push(l),o.allowAttributesOf.push(l),o.inheritTypesFrom.push(l))}}(i,t),t}function Bx(i,e){const t=i[e];for(const n of t.allowChildren){const o=i[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function Nx(i,e){for(const t of i[e].allowContentOf)i[t]&&Vx(i,t).forEach(n=>{n.allowIn.push(e)});delete i[e].allowContentOf}function Lx(i,e){for(const t of i[e].allowWhere){const n=i[t];if(n){const o=n.allowIn;i[e].allowIn.push(...o)}}delete i[e].allowWhere}function Ox(i,e){for(const t of i[e].allowAttributesOf){const n=i[t];if(n){const o=n.allowAttributes;i[e].allowAttributes.push(...o)}}delete i[e].allowAttributesOf}function Rx(i,e){const t=i[e];for(const n of t.inheritTypesFrom){const o=i[n];if(o){const s=Object.keys(o).filter(l=>l.startsWith("is"));for(const l of s)l in t||(t[l]=o[l])}}delete t.inheritTypesFrom}function zx(i,e){const t=i[e],n=t.allowIn.filter(o=>i[o]);t.allowIn=Array.from(new Set(n))}function jx(i,e){const t=i[e];for(const n of t.allowIn)i[n].allowChildren.push(e)}function Fx(i,e){const t=i[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function Er(i,e,t){for(const n of i)typeof n[t]=="string"?e[t].push(n[t]):Array.isArray(n[t])&&e[t].push(...n[t])}function Vx(i,e){const t=i[e];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function $x(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:e=>i.getAttribute(e)}}function ob(i,e,t){for(const n of e.getAttributeKeys())i.checkAttribute(e,n)||t.removeAttribute(n,e)}class ib{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(l,d){let h;for(const p of new xr(l)){const m={};for(const y of p.getAttributeKeys())m[y]=p.getAttribute(y);const w=d.createElement(p.name,m);h&&d.append(w,h),h=be._createAt(w,0)}return h}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Ua.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const l of Array.from(this._modelCursor.parent.getChildren()))t.append(l,s);s.markers=function(l,d){const h=new Set,p=new Map,m=ae._createIn(l).getItems();for(const w of m)w.name=="$marker"&&h.add(w);for(const w of h){const y=w.getAttribute("data-name"),T=d.createPositionBefore(w);p.has(y)?p.get(y).end=T.clone():p.set(y,new ae(T.clone())),d.remove(w)}return p}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof ae))throw new v("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:be._createAt(t,0);const o=new ae(n);for(const s of Array.from(e.getChildren())){const l=this._convertItem(s,n);l.modelRange instanceof ae&&(o.end=l.modelRange.end,n=l.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?o.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return Ym(t,e,n)?{position:Qm(t,o)}:null;const l=this.conversionApi.writer.split(t,s),d=[];for(const p of l.range.getWalker())if(p.type=="elementEnd")d.push(p.item);else{const m=d.pop(),w=p.item;this._registerSplitPair(m,w)}const h=l.range.end.parent;return this._cursorParents.set(e,h),{position:l.position,cursorParent:h}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}se(ib,V);class Hx{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class Ux{constructor(e){this.domParser=new DOMParser,this.domConverter=new Sc(e,{renderingMode:"data"}),this.htmlWriter=new Hx}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class rb{constructor(e,t){this.model=e,this.mapper=new Rh,this.downcastDispatcher=new zh({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,s)=>{if(!s.consumable.consume(o.item,n.name))return;const l=s.writer,d=s.mapper.toViewPosition(o.range.start),h=l.createText(o.item.data);l.insert(d,h)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new ib({schema:e.schema}),this.viewDocument=new za(t),this.stylesProcessor=t,this.htmlProcessor=new Ux(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Ug(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:s,consumable:l,writer:d})=>{let h=o.modelCursor;if(!l.test(o.viewItem))return;if(!s.checkChild(h,"$text")){if(!Ym(h,"$text",s)||o.viewItem.data.trim().length==0)return;h=Qm(h,d)}l.consume(o.viewItem);const p=d.createText(o.viewItem.data);d.insert(p,h),o.modelRange=d.createRange(h,h.getShiftedBy(p.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:l,modelCursor:d}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=l,o.modelCursor=d}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:l,modelCursor:d}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=l,o.modelCursor=d}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Km)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new v("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const s=ae._createIn(e),l=new Ar(n);this.mapper.bindElements(e,l);const d=e.is("documentFragment")?e.markers:function(h){const p=[],m=h.root.document;if(!m)return new Map;const w=ae._createIn(h);for(const y of m.model.markers){const T=y.getRange(),P=T.isCollapsed,B=T.start.isEqual(w.start)||T.end.isEqual(w.end);if(P&&B)p.push([y.name,T]);else{const O=w.getIntersection(T);O&&p.push([y.name,O])}}return p.sort(([y,T],[P,B])=>{if(T.end.compareWith(B.start)!=="after")return 1;if(T.start.compareWith(B.end)!=="before")return-1;switch(T.start.compareWith(B.start)){case"before":return 1;case"after":return-1;default:switch(T.end.compareWith(B.end)){case"before":return 1;case"after":return-1;default:return P.localeCompare(y)}}}),new Map(p)}(e);return this.downcastDispatcher.convert(s,d,o,t),l}init(e){if(this.model.document.version)throw new v("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new v("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const s=this.model.document.getRoot(o);n.insert(this.parse(t[o],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new v("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const l=this.model.document.getRoot(s);o.remove(o.createRangeIn(l)),o.insert(this.parse(n[s],l),l,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}se(rb,Fe);class qx{constructor(e,t){this._helpers=new Map,this._downcast=Jt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Jt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new v("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new v("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of Hh(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of Hh(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of Hh(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new v("conversion-group-exists",this);const o=n?new Ex(t):new Tx(t);this._helpers.set(e,o)}}function*Hh(i){if(i.model.values)for(const e of i.model.values){const t={key:i.model.key,value:e},n=i.view[e],o=i.upcastAlso?i.upcastAlso[e]:void 0;yield*sb(t,n,o)}else yield*sb(i.model,i.view,i.upcastAlso)}function*sb(i,e,t){if(yield{model:i,view:e},t)for(const n of Jt(t))yield{model:i,view:n}}class hs{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},I("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=s}get type(){return I("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class lo{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class ci{constructor(e){this.markers=new Map,this._children=new us,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="model:documentFragment"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(vt.fromJSON(n)):t.push(It.fromJSON(n));return new ci(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new It(o)]:(Ln(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new It(s):s instanceof Fo?new It(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}function Uh(i,e){const t=(e=lb(e)).reduce((s,l)=>s+l.offsetSize,0),n=i.parent;Ga(i);const o=i.index;return n._insertChild(o,e),Wa(n,o+e.length),Wa(n,o),new ae(i,i.getShiftedBy(t))}function ab(i){if(!i.isFlat)throw new v("operation-utils-remove-range-not-flat",this);const e=i.start.parent;Ga(i.start),Ga(i.end);const t=e._removeChildren(i.start.index,i.end.index-i.start.index);return Wa(e,i.start.index),t}function qa(i,e){if(!i.isFlat)throw new v("operation-utils-move-range-not-flat",this);const t=ab(i);return Uh(e=e._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),t)}function lb(i){const e=[];i instanceof Array||(i=[i]);for(let t=0;t<i.length;t++)if(typeof i[t]=="string")e.push(new It(i[t]));else if(i[t]instanceof Fo)e.push(new It(i[t].data,i[t].getAttributes()));else if(i[t]instanceof ci||i[t]instanceof us)for(const n of i[t])e.push(n);else i[t]instanceof Cr&&e.push(i[t]);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof It&&o instanceof It&&cb(n,o)&&(e.splice(t-1,2,new It(o.data+n.data,o.getAttributes())),t--)}return e}function Wa(i,e){const t=i.getChild(e-1),n=i.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&cb(t,n)){const o=new It(t.data+n.data,t.getAttributes());i._removeChildren(e-1,2),i._insertChild(e-1,o)}}function Ga(i){const e=i.textNode,t=i.parent;if(e){const n=i.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const s=new It(e.data.substr(0,n),e.getAttributes()),l=new It(e.data.substr(n),e.getAttributes());t._insertChild(o,[s,l])}}function cb(i,e){const t=i.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const db=function(i,e){return wm(i,e)};class Xt extends lo{constructor(e,t,n,o,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Xt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Xt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new v("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!db(e.getAttribute(this.key),this.oldValue))throw new v("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new v("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){db(this.oldValue,this.newValue)||function(e,t,n){Ga(e.start),Ga(e.end);for(const o of e.getItems({shallow:!0})){const s=o.is("$textProxy")?o.textNode:o;n!==null?s._setAttribute(t,n):s._removeAttribute(t),Wa(s.parent,s.index)}Wa(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Xt(ae.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Wx extends lo{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new v("detach-operation-on-document-node",this)}_execute(){ab(ae._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class At extends lo{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new v("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new v("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&cn(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new v("move-operation-node-into-itself",this)}}_execute(){qa(ae._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=be.fromJSON(e.sourcePosition,t),o=be.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class un extends lo{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new us(lb(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new us([...this.nodes].map(n=>n._clone(!0))),t=new un(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new be(e,[0]);return new At(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new v("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new us([...e].map(t=>t._clone(!0))),Uh(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(vt.fromJSON(s)):n.push(It.fromJSON(s));const o=new un(be.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class zn extends lo{constructor(e,t,n,o,s,l){super(l),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}clone(){return new zn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new zn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new zn(e.name,e.oldRange?ae.fromJSON(e.oldRange,t):null,e.newRange?ae.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class jn extends lo{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new jn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new jn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof vt))throw new v("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new v("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new jn(be.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class di extends lo{constructor(e,t,n,o,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new di(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new di(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new v("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new v("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new v("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new v("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new di(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class tn extends lo{constructor(e,t,n,o,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new be(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new ae(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new be(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Nt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new v("merge-operation-source-position-invalid",this);if(!t.parent)throw new v("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new v("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;qa(ae._createIn(e),this.targetPosition),qa(ae._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=be.fromJSON(e.sourcePosition,t),o=be.fromJSON(e.targetPosition,t),s=be.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,s,e.baseVersion)}}class Nt extends lo{constructor(e,t,n,o,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new be(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new ae(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new be(e,[0]);return new tn(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new v("split-operation-position-invalid",this);if(!e.parent)throw new v("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new v("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new v("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)qa(ae._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Uh(this.insertionPosition,t)}qa(new ae(be._createAt(e,this.splitPosition.offset),be._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new be(e.root,t,"toPrevious")}static fromJSON(e,t){const n=be.fromJSON(e.splitPosition,t),o=be.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?be.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,s,e.baseVersion)}}class qh extends vt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}is(e,t){return t?t===this.name&&(e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"):e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"||e==="node"||e==="model:node"}toJSON(){return this.rootName}}class Gx{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new It(e,t)}createElement(e,t){return new vt(e,t)}createDocumentFragment(){return new ci}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof It&&e.data=="")return;const o=be._createAt(t,n);if(e.parent){if(fb(e.root,o.root))return void this.move(ae._createOn(e),o);if(e.root.document)throw new v("model-writer-insert-forbidden-move",this);this.remove(e)}const s=o.root.document?o.root.document.version:null,l=new un(o,e,s);if(e instanceof It&&(l.shouldReceiveAttributes=!0),this.batch.addOperation(l),this.model.applyOperation(l),e instanceof ci)for(const[d,h]of e.markers){const p=be._createAt(h.root,0),m={range:new ae(h.start._getCombined(p,o),h.end._getCombined(p,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(d)?this.updateMarker(d,m):this.addMarker(d,m)}}insertText(e,t,n,o){t instanceof ci||t instanceof vt||t instanceof be?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof ci||t instanceof vt||t instanceof be?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof ci||t instanceof vt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof ci||t instanceof vt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof ae){const o=n.getMinimalFlatRanges();for(const s of o)ub(this,e,t,s)}else hb(this,e,t,n)}setAttributes(e,t){for(const[n,o]of Gn(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof ae){const n=t.getMinimalFlatRanges();for(const o of n)ub(this,e,null,o)}else hb(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof ae)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof ae))throw new v("writer-move-invalid-range",this);if(!e.isFlat)throw new v("writer-move-range-not-flat",this);const o=be._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!fb(e.root,o.root))throw new v("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,l=new At(e.start,e.end.offset-e.start.offset,o,s);this.batch.addOperation(l),this.model.applyOperation(l)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof ae?e:ae._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),Kx(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof vt))throw new v("writer-merge-no-element-before",this);if(!(n instanceof vt))throw new v("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,n){return this.model.createSelection(e,t,n)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(ae._createIn(n),be._createAt(t,"end")),this.remove(n)}_merge(e){const t=be._createAt(e.nodeBefore,"end"),n=be._createAt(e.nodeAfter,0),o=e.root.document.graveyard,s=new be(o,[0]),l=e.root.document.version,d=new tn(n,e.nodeAfter.maxOffset,t,s,l);this.batch.addOperation(d),this.model.applyOperation(d)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof vt))throw new v("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new jn(be._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,s=e.parent;if(!s.parent)throw new v("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new v("writer-split-invalid-limit-element",this);do{const l=s.root.document?s.root.document.version:null,d=s.maxOffset-e.offset,h=Nt.getInsertionPosition(e),p=new Nt(e,d,h,null,l);this.batch.addOperation(p),this.model.applyOperation(p),n||o||(n=s,o=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new ae(be._createAt(n,"end"),be._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new v("writer-wrap-range-not-flat",this);const n=t instanceof vt?t:new vt(t);if(n.childCount>0)throw new v("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new v("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new ae(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,be._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new v("writer-unwrap-element-no-parent",this);this.move(ae._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new v("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new v("writer-addmarker-marker-exists",this);if(!o)throw new v("writer-addmarker-no-range",this);return n?(Ka(this,e,null,o,s),this.model.markers.get(e)):this.model.markers._set(e,o,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new v("writer-updatemarker-marker-not-exists",this);if(!t)return I("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const s=typeof t.usingOperation=="boolean",l=typeof t.affectsData=="boolean",d=l?t.affectsData:o.affectsData;if(!s&&!t.range&&!l)throw new v("writer-updatemarker-wrong-options",this);const h=o.getRange(),p=t.range?t.range:h;s&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?Ka(this,n,null,p,d):(Ka(this,n,h,null,d),this.model.markers._set(n,p,void 0,d)):o.managedUsingOperations?Ka(this,n,h,p,d):this.model.markers._set(n,p,void 0,d)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new v("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Ka(this,t,n.getRange(),null,n.affectsData)}setSelection(e,t,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of Gn(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=Co._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=Co._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new v("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let s=!1;if(e==="move")s=t.containsPosition(o.start)||t.start.isEqual(o.start)||t.containsPosition(o.end)||t.end.isEqual(o.end);else{const l=t.nodeBefore,d=t.nodeAfter,h=o.start.parent==l&&o.start.isAtEnd,p=o.end.parent==d&&o.end.offset==0,m=o.end.nodeAfter==d,w=o.start.nodeAfter==d;s=h||p||m||w}s&&this.updateMarker(n.name,{range:o})}}}function ub(i,e,t,n){const o=i.model,s=o.document;let l,d,h,p=n.start;for(const w of n.getWalker({shallow:!0}))h=w.item.getAttribute(e),l&&d!=h&&(d!=t&&m(),p=l),l=w.nextPosition,d=h;function m(){const w=new ae(p,l),y=w.root.document?s.version:null,T=new Xt(w,e,d,t,y);i.batch.addOperation(T),o.applyOperation(T)}l instanceof be&&l!=p&&d!=t&&m()}function hb(i,e,t,n){const o=i.model,s=o.document,l=n.getAttribute(e);let d,h;if(l!=t){if(n.root===n){const p=n.document?s.version:null;h=new di(n,e,l,t,p)}else{d=new ae(be._createBefore(n),i.createPositionAfter(n));const p=d.root.document?s.version:null;h=new Xt(d,e,l,t,p)}i.batch.addOperation(h),o.applyOperation(h)}}function Ka(i,e,t,n,o){const s=i.model,l=s.document,d=new zn(e,t,n,s.markers,o,l.version);i.batch.addOperation(d),s.applyOperation(d)}function Kx(i,e,t,n){let o;if(i.root.document){const s=n.document,l=new be(s.graveyard,[0]);o=new At(i,e,l,s.version)}else o=new Wx(i,e);t.addOperation(o),n.applyOperation(o)}function fb(i,e){return i===e||i instanceof qh&&e instanceof qh}class Yx{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),n=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),n||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=ae._createFromPositionAndShift(e.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const n=e.graveyardPosition.parent;this._markInsert(n,e.graveyardPosition.offset,1);const o=e.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||s)return!0}}return!1}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((m,w)=>m.offset===w.offset?m.type!=w.type?m.type=="remove"?-1:1:0:m.offset<w.offset?-1:1),s=this._elementSnapshots.get(n),l=pb(n.getChildren()),d=Qx(s.length,o);let h=0,p=0;for(const m of d)if(m==="i")t.push(this._getInsertDiff(n,h,l[h])),h++;else if(m==="r")t.push(this._getRemoveDiff(n,h,s[p])),p++;else if(m==="a"){const w=l[h].attributes,y=s[p].attributes;let T;if(l[h].name=="$text")T=new ae(be._createAt(n,h),be._createAt(n,h+1));else{const P=n.offsetToIndex(h);T=new ae(be._createAt(n,h),be._createAt(n.getChild(P),0))}t.push(...this._getAttributesDiff(T,y,w)),h++,p++}else h++,p++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const s=t[o],l=t[n],d=s.type=="remove"&&l.type=="remove"&&s.name=="$text"&&l.name=="$text"&&s.position.isEqual(l.position),h=s.type=="insert"&&l.type=="insert"&&s.name=="$text"&&l.name=="$text"&&s.position.parent==l.position.parent&&s.position.offset+s.length==l.position.offset,p=s.type=="attribute"&&l.type=="attribute"&&s.position.parent==l.position.parent&&s.range.isFlat&&l.range.isFlat&&s.position.offset+s.length==l.position.offset&&s.attributeKey==l.attributeKey&&s.attributeOldValue==l.attributeOldValue&&s.attributeNewValue==l.attributeNewValue;d||h||p?(s.length++,p&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(Zx),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=ae._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,pb(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const l=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:l-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=s)if(e.offset<n.offset){const l=o-n.offset;n.offset=e.offset,n.howMany-=l,e.nodesToHandle-=l}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const l=s-e.offset;n.howMany-=l,e.nodesToHandle-=l}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const l=o-n.offset;n.offset=e.offset,n.howMany-=l}else if(e.offset<s)if(o<=s){const l=n.howMany;n.howMany=e.offset-n.offset;const d=l-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:d,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>s){const l={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(l,t),t.push(l)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(o>s?(e.nodesToHandle=o-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const l={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(l,t),t.push(l),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:be._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:be._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[s,l]of t){const d=n.has(s)?n.get(s):null;d!==l&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:l,attributeNewValue:d,changeCount:this._changeCount++}),n.delete(s)}for(const[s,l]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:l,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new ae(be._createAt(e,t),be._createAt(e,t+n));for(const s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function pb(i){const e=[];for(const t of i)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function Qx(i,e){const t=[];let n=0,o=0;for(const s of e){if(s.offset>n){for(let l=0;l<s.offset-n;l++)t.push("e");o+=s.offset-n}if(s.type=="insert"){for(let l=0;l<s.howMany;l++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let l=0;l<s.howMany;l++)t.push("r");n=s.offset,o+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,o+=s.howMany}if(o<i)for(let s=0;s<i-o-n;s++)t.push("e");return t}function Zx(i){const e=i.position&&i.position.root.rootName=="$graveyard",t=i.range&&i.range.root.rootName=="$graveyard";return!e&&!t}class Jx{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new v("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[d,h]of this._gaps)e>d&&e<h&&(e=h),o>d&&o<h&&(o=d-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let l=this._baseVersionToOperationIndex.get(o);return l===void 0&&(l=this._operations.length-1),this._operations.slice(s,l+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function gb(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function mb(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Xx=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function eE(i,e){const t=String(i).matchAll(Xx);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Wh="$graveyard";class bb{constructor(e){this.model=e,this.history=new Jx,this.selection=new Co(this),this.roots=new On({idProperty:"rootName"}),this.differ=new Yx(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Wh),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,s,l)=>{const d={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,l,d),o===null&&n.on("change",(h,p)=>{const m=n.getData();this.differ.bufferMarkerChange(n.name,{...m,range:p},m)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Wh)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new v("model-document-createroot-name-exists",this,{name:t});const n=new qh(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Wh)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=wc(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return kb(e.start)&&kb(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function kb(i){const e=i.textNode;if(e){const t=e.data,n=i.offset-e.startOffset;return!gb(t,n)&&!mb(t,n)}return!0}se(bb,V);class wb{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof fs?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const s=e instanceof fs?e.name:e;if(s.includes(","))throw new v("markercollection-incorrect-marker-name",this);const l=this._markers.get(s);if(l){const p=l.getData(),m=l.getRange();let w=!1;return m.isEqual(t)||(l._attachLiveRange(Vo.fromRange(t)),w=!0),n!=l.managedUsingOperations&&(l._managedUsingOperations=n,w=!0),typeof o=="boolean"&&o!=l.affectsData&&(l._affectsData=o,w=!0),w&&this.fire("update:"+s,l,m,t,p),l}const d=Vo.fromRange(t),h=new fs(s,d,n,o);return this._markers.set(s,h),this.fire("update:"+s,h,null,t,{...h.getData(),range:null}),h}_remove(e){const t=e instanceof fs?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire("update:"+t,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof fs?e.name:e,n=this._markers.get(t);if(!n)throw new v("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+t,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}se(wb,V);class fs{constructor(e,t,n,o){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.toRange()}is(e){return e==="marker"||e==="model:marker"}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}se(fs,V);class hn extends lo{get type(){return"noop"}clone(){return new hn(this.baseVersion)}getReversed(){return new hn(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const xo={};xo[Xt.className]=Xt,xo[un.className]=un,xo[zn.className]=zn,xo[At.className]=At,xo[hn.className]=hn,xo[lo.className]=lo,xo[jn.className]=jn,xo[di.className]=di,xo[Nt.className]=Nt,xo[tn.className]=tn;class bn extends be{constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new v("model-liveposition-root-not-rootelement",e);tE.call(this)}detach(){this.stopListening()}is(e){return e==="livePosition"||e==="model:livePosition"||e=="position"||e==="model:position"}toPosition(){return new be(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function tE(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&nE.call(this,t)},{priority:"low"})}function nE(i){const e=this.getTransformedByOperation(i);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}se(bn,V);class oE{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new v("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?ae._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new ae(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=bn.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new v("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=bn.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=bn.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof vt)||!this._canMergeLeft(e))return;const t=bn._createBefore(e);t.stickiness="toNext";const n=bn.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=bn._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=bn._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof vt)||!this._canMergeRight(e))return;const t=bn._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new v("insertcontent-invalid-insertion-position",this);this.position=be._createAt(t.nodeBefore,"end");const n=bn.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=bn._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=bn._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof vt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof vt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function _b(i,e,t="auto"){const n=i.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return["before","after"].includes(t)?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=dn(i.getSelectedBlocks());if(!o)return e.createRange(i.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const s=e.createPositionAfter(o);return i.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(o))}function iE(i,e,t,n,o={}){if(!i.schema.isObject(e))throw new v("insertobject-element-not-an-object",i,{object:e});let s;s=t?t.is("selection")?t:i.createSelection(t,n):i.document.selection;let l=s;o.findOptimalPosition&&i.schema.isBlock(e)&&(l=i.createSelection(_b(s,i,o.findOptimalPosition)));const d=dn(s.getSelectedBlocks()),h={};return d&&Object.assign(h,i.schema.getAttributesWithProperty(d,"copyOnReplace",!0)),i.change(p=>{l.isCollapsed||i.deleteContent(l,{doNotAutoparagraph:!0});let m=e;const w=l.anchor.parent;!i.schema.checkChild(w,e)&&i.schema.checkChild(w,"paragraph")&&i.schema.checkChild("paragraph",e)&&(m=p.createElement("paragraph"),p.insert(e,m)),i.schema.setAllowedAttributes(m,h,p);const y=i.insertContent(m,l);return y.isCollapsed||o.setSelection&&function(T,P,B,O){const F=T.model;if(B=="after"){let Q=P.nextSibling;!(Q&&F.schema.checkChild(Q,"$text"))&&F.schema.checkChild(P.parent,"paragraph")&&(Q=T.createElement("paragraph"),F.schema.setAllowedAttributes(Q,O,T),F.insertContent(Q,T.createPositionAfter(P))),Q&&T.setSelection(Q,0)}else{if(B!="on")throw new v("insertobject-invalid-place-parameter-value",F);T.setSelection(P,"on")}}(p,e,o.setSelection,h),y})}function rE(i,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(s=>{if(!t.doNotResetEntireContent&&function(p,m){const w=p.getLimitElement(m);if(!m.containsEntireContent(w))return!1;const y=m.getFirstRange();return y.start.parent==y.end.parent?!1:p.checkChild(w,"paragraph")}(o,e))return void function(p,m){const w=p.model.schema.getLimitElement(m);p.remove(p.createRangeIn(w)),Cb(p,p.createPositionAt(w,0),m)}(s,e);const l={};if(!t.doNotAutoparagraph){const p=e.getSelectedElement();p&&Object.assign(l,o.getAttributesWithProperty(p,"copyOnReplace",!0))}const[d,h]=function(p){const m=p.root.document.model,w=p.start;let y=p.end;if(m.hasContent(p,{ignoreMarkers:!0})){const T=function(P){const B=P.parent,O=B.root.document.model.schema,F=B.getAncestors({parentFirst:!0,includeSelf:!0});for(const Q of F){if(O.isLimit(Q))return null;if(O.isBlock(Q))return Q}}(y);if(T&&y.isTouching(m.createPositionAt(T,0))){const P=m.createSelection(p);m.modifySelection(P,{direction:"backward"});const B=P.getLastPosition(),O=m.createRange(B,y);m.hasContent(O,{ignoreMarkers:!0})||(y=B)}}return[bn.fromPosition(w,"toPrevious"),bn.fromPosition(y,"toNext")]}(n);d.isTouching(h)||s.remove(s.createRange(d,h)),t.leaveUnmerged||(function(p,m,w){const y=p.model;if(!Gh(p.model.schema,m,w))return;const[T,P]=function(B,O){const F=B.getAncestors(),Q=O.getAncestors();let fe=0;for(;F[fe]&&F[fe]==Q[fe];)fe++;return[F[fe],Q[fe]]}(m,w);!T||!P||(!y.hasContent(T,{ignoreMarkers:!0})&&y.hasContent(P,{ignoreMarkers:!0})?Ab(p,m,w,T.parent):vb(p,m,w,T.parent))}(s,d,h),o.removeDisallowedAttributes(d.parent.getChildren(),s)),yb(s,e,d),!t.doNotAutoparagraph&&function(p,m){const w=p.checkChild(m,"$text"),y=p.checkChild(m,"paragraph");return!w&&y}(o,d)&&Cb(s,d,e,l),d.detach(),h.detach()})}function vb(i,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(s)).isEqual(e)||i.insert(s,e),i.merge(e);t.parent.isEmpty;){const l=t.parent;t=i.createPositionBefore(l),i.remove(l)}Gh(i.model.schema,e,t)&&vb(i,e,t,n)}}function Ab(i,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(s)).isEqual(e)||i.insert(o,t);e.parent.isEmpty;){const l=e.parent;e=i.createPositionBefore(l),i.remove(l)}t=i.createPositionBefore(s),function(l,d){const h=d.nodeBefore,p=d.nodeAfter;h.name!=p.name&&l.rename(h,p.name),l.clearAttributes(h),l.setAttributes(Object.fromEntries(p.getAttributes()),h),l.merge(d)}(i,t),Gh(i.model.schema,e,t)&&Ab(i,e,t,n)}}function Gh(i,e,t){const n=e.parent,o=t.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(s,l,d){const h=new ae(s,l);for(const p of h.getWalker())if(d.isLimit(p.item))return!1;return!0}(e,t,i)}function Cb(i,e,t,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,e),yb(i,t,i.createPositionAt(o,0))}function yb(i,e,t){e instanceof Co?i.setSelection(t):e.setTo(t)}const xb=' ,.?!:;"-()';function sE(i,e){const{isForward:t,walker:n,unit:o,schema:s,treatEmojiAsSingleUnit:l}=i,{type:d,item:h,nextPosition:p}=e;if(d=="text")return i.unit==="word"?function(m,w){let y=m.position.textNode;if(y){let T=m.position.offset-y.startOffset;for(;!lE(y.data,T,w)&&!cE(y,T,w);){m.next();const P=w?m.position.nodeAfter:m.position.nodeBefore;if(P&&P.is("$text")){const B=P.data.charAt(w?0:P.data.length-1);xb.includes(B)||(m.next(),y=m.position.textNode)}T=m.position.offset-y.startOffset}}return m.position}(n,t):function(m,w,y){const T=m.position.textNode;if(T){const P=T.data;let B=m.position.offset-T.startOffset;for(;gb(P,B)||w=="character"&&mb(P,B)||y&&eE(P,B);)m.next(),B=m.position.offset-T.startOffset}return m.position}(n,o,l);if(d==(t?"elementStart":"elementEnd")){if(s.isSelectable(h))return be._createAt(h,t?"after":"before");if(s.checkChild(p,"$text"))return p}else{if(s.isLimit(h))return void n.skip(()=>!0);if(s.checkChild(p,"$text"))return p}}function aE(i,e){const t=i.root,n=be._createAt(t,e?"end":0);return e?new ae(i,n):new ae(n,i)}function lE(i,e,t){const n=e+(t?0:-1);return xb.includes(i.charAt(n))}function cE(i,e,t){return e===(t?i.endOffset:0)}function Eb(i,e){const t=[];Array.from(i.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const s=e.createRangeOn(o);o=o.parent,e.remove(s)}})}function dE(i){i.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,s=n.schema,l=[];let d=!1;for(const h of o.getRanges()){const p=uE(h,s);p&&!p.isEqual(h)?(l.push(p),d=!0):l.push(h)}d&&t.setSelection(function(h){const p=[...h],m=new Set;let w=1;for(;w<p.length;){const y=p[w],T=p.slice(0,w);for(const[P,B]of T.entries())if(!m.has(P)){if(y.isEqual(B))m.add(P);else if(y.isIntersecting(B)){m.add(P),m.add(w);const O=y.getJoined(B);p.push(O)}}w++}return p.filter((y,T)=>!m.has(T))}(l),{backward:o.isBackward})}(e,i))}function uE(i,e){return i.isCollapsed?function(t,n){const o=t.start,s=n.getNearestSelectionRange(o);if(!s){const d=o.getAncestors().reverse().find(h=>n.isObject(h));return d?ae._createOn(d):null}if(!s.isCollapsed)return s;const l=s.start;return o.isEqual(l)?null:new ae(l)}(i,e):function(t,n){const{start:o,end:s}=t,l=n.checkChild(o,"$text"),d=n.checkChild(s,"$text"),h=n.getLimitElement(o),p=n.getLimitElement(s);if(h===p){if(l&&d)return null;if(function(y,T,P){const B=y.nodeAfter&&!P.isLimit(y.nodeAfter)||P.checkChild(y,"$text"),O=T.nodeBefore&&!P.isLimit(T.nodeBefore)||P.checkChild(T,"$text");return B||O}(o,s,n)){const y=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),T=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),P=y?y.start:o,B=T?T.end:s;return new ae(P,B)}}const m=h&&!h.is("rootElement"),w=p&&!p.is("rootElement");if(m||w){const y=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,T=m&&(!y||!Db(o.nodeAfter,n)),P=w&&(!y||!Db(s.nodeBefore,n));let B=o,O=s;return T&&(B=be._createBefore(Sb(h,n))),P&&(O=be._createAfter(Sb(p,n))),new ae(B,O)}return null}(i,e)}function Sb(i,e){let t=i,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Db(i,e){return i&&e.isSelectable(i)}class Tb{constructor(){this.markers=new wb,this.document=new bb(this),this.schema=new nb,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),dE(this),this.document.registerPostFixer(Km)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new hs,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){v.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new hs):e instanceof hs||(e=new hs(e)):e=new hs,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){v.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,s,l,d){return o.change(h=>{let p;p=l?l instanceof li||l instanceof Co?l:h.createSelection(l,d):o.document.selection,p.isCollapsed||o.deleteContent(p,{doNotAutoparagraph:!0});const m=new oE(o,h,p.anchor);let w;w=s.is("documentFragment")?s.getChildren():[s],m.handleNodes(w);const y=m.getSelectionRange();y&&(p instanceof Co?h.setSelection(y):p.setTo(y));const T=m.getAffectedRange()||o.createRange(p.anchor);return m.destroy(),T})}(this,e,t,n)}insertObject(e,t,n,o){return iE(this,e,t,n,o)}deleteContent(e,t){rE(this,e,t)}modifySelection(e,t){(function(n,o,s={}){const l=n.schema,d=s.direction!="backward",h=s.unit?s.unit:"character",p=!!s.treatEmojiAsSingleUnit,m=o.focus,w=new ai({boundaries:aE(m,d),singleCharacters:!0,direction:d?"forward":"backward"}),y={walker:w,schema:l,isForward:d,unit:h,treatEmojiAsSingleUnit:p};let T;for(;T=w.next();){if(T.done)return;const P=sE(y,T.value);if(P)return void(o instanceof Co?n.change(B=>{B.setSelectionFocus(P)}):o.setFocus(P))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const s=o.createDocumentFragment(),l=n.getFirstRange();if(!l||l.isCollapsed)return s;const d=l.start.root,h=l.start.getCommonPath(l.end),p=d.getNodeByPath(h);let m;m=l.start.parent==l.end.parent?l:o.createRange(o.createPositionAt(p,l.start.path[h.length]),o.createPositionAt(p,l.end.path[h.length]+1));const w=m.end.offset-m.start.offset;for(const y of m.getItems({shallow:!0}))y.is("$textProxy")?o.appendText(y.data,y.getAttributes(),s):o.append(o.cloneElement(y,!0),s);if(m!=l){const y=l._getTransformedByMove(m.start,o.createPositionAt(s,0),w)[0],T=o.createRange(o.createPositionAt(s,0),y.start);Eb(o.createRange(y.end,o.createPositionAt(s,"end")),o),Eb(T,o)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof vt?ae._createIn(e):e;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=t;if(!s){for(const l of this.markers.getMarkersIntersectingRange(n))if(l.affectsData)return!0}for(const l of n.getItems())if(this.schema.isContent(l)&&(!l.is("$textProxy")||!o||l.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new be(e,t,n)}createPositionAt(e,t){return be._createAt(e,t)}createPositionAfter(e){return be._createAfter(e)}createPositionBefore(e){return be._createBefore(e)}createRange(e,t){return new ae(e,t)}createRangeIn(e){return ae._createIn(e)}createRangeOn(e){return ae._createOn(e)}createSelection(e,t,n){return new li(e,t,n)}createBatch(e){return new hs(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return xo[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Gx(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}se(Tb,Fe);class hE extends si{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(s,l)=>{this.editor.execute(o),l()}}super.set(e,t,n)}}class Ib{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new ah({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new mc(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new is(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new Ix,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new Tb;const o=new b1;this.data=new rb(this.model,o),this.editing=new tb(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new qx([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new hE(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new v("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){v.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}se(Ib,Fe);class fE{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Kh(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new v("componentfactory-item-missing",this,{name:e});return this._components.get(Kh(e)).callback(this.editor.locale)}has(e){return this._components.has(Kh(e))}}function Kh(i){return String(i).toLowerCase()}class Mb{constructor(e){this.editor=e,this.componentFactory=new fE(e),this.focusTracker=new jo,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}se(Mb,Fe);const pE={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},gE=pE;function mE(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}const bE={updateSourceElement(i=this.data.get()){if(!this.sourceElement)throw new v("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;mE(this.sourceElement,e||t?i:"")}};class Pb extends br{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new On({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new v("pendingactions-add-invalid-message",this);const t=Object.create(Fe);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Bb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',co={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:Bb};function Yh({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,s)=>{if(!e())return;const l=typeof s.composedPath=="function"?s.composedPath():[];for(const d of n)if(d.contains(s.target)||l.includes(d))return;t()})}function Qh(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Zh({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}class Sr extends On{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new v("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const s of e)o.delegate(s).to(t)}),this.on("remove",(n,o)=>{for(const s of e)o.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var Nb=f(4793),kE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Nb.Z,kE),Nb.Z.locals;class at{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new On,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Yn.bind(this,this)}createCollection(e){const t=new Sr(e);return this._viewCollections.add(t),t}registerChild(e){Ln(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Ln(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Yn(e)}extendTemplate(e){Yn.extend(this.template,e)}render(){if(this.isRendered)throw new v("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}se(at,Fa),se(at,Fe);class Yn{constructor(e){Object.assign(this,zb(Rb(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new v("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Rc(n)?yield n:Jh(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new wE({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,s)=>new Lb({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:s})}}static extend(e,t){if(e._isRendered)throw new v("template-extend-render",[this,e]);$b(e,zb(Rb(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new v("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Oc(this.text)?this._bindToObservable({schema:this.text,updater:_E(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,o,s;if(!this.attributes)return;const l=e.node,d=e.revertData;for(t in this.attributes)if(o=l.getAttribute(t),n=this.attributes[t],d&&(d.attributes[t]=o),s=Ie(n[0])&&n[0].ns?n[0].ns:null,Oc(n)){const h=s?n[0].value:n;d&&Hb(t)&&h.unshift(o),this._bindToObservable({schema:h,updater:vE(l,t,s),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(d&&o&&Hb(t)&&n.unshift(o),n=n.map(h=>h&&h.value||h).reduce((h,p)=>h.concat(p),[]).reduce(Fb,""),ps(n)||l.setAttributeNS(s,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const s=e[o];Oc(s)?this._bindToObservable({schema:[s],updater:AE(n,o),data:t}):n.style[o]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let s=0;for(const l of this.children)if(Xh(l)){if(!o){l.setParent(t);for(const d of l)n.appendChild(d.element)}}else if(Rc(l))o||(l.isRendered||l.render(),n.appendChild(l.element));else if(ds(l))n.appendChild(l);else if(o){const d={children:[],bindings:[],attributes:{}};e.revertData.children.push(d),l._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:d})}else n.appendChild(l.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[s,l]=t.split("@");return o.activateDomEventListener(s,l,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Ob(e,t,n);const s=e.filter(l=>!ps(l)).filter(l=>l.observable).map(l=>l.activateAttributeListener(e,t,n));o&&o.bindings.push(s)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const o of n)o();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const o=t.attributes[n];o===null?e.removeAttribute(n):e.setAttribute(n,o)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}se(Yn,V);class Ya{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Ob(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class wE extends Ya{activateDomEventListener(e,t,n){const o=(s,l)=>{t&&!l.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(l):this.observable.fire(this.eventNameOrFunction,l))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Lb extends Ya{getValue(e){return!ps(super.getValue(e))&&(this.valueIfTrue||!0)}}function Oc(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Oc):i instanceof Ya)}function Ob(i,e,{node:t}){let n=function(o,s){return o.map(l=>l instanceof Ya?l.getValue(s):l)}(i,t);n=i.length==1&&i[0]instanceof Lb?n[0]:n.reduce(Fb,""),ps(n)?e.remove():e.set(n)}function _E(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function vE(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function AE(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function Rb(i){return gc(i,e=>{if(e&&(e instanceof Ya||Jh(e)||Rc(e)||Xh(e)))return e})}function zb(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=Jt(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)jb(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Jt(t[n].value)),jb(t,n)}(i.attributes);const e=[];if(i.children)if(Xh(i.children))e.push(i.children);else for(const t of i.children)Jh(t)||Rc(t)||ds(t)?e.push(t):e.push(new Yn(t));i.children=e}return i}function jb(i,e){i[e]=Jt(i[e])}function Fb(i,e){return ps(e)?i:ps(i)?e:`${i} ${e}`}function Vb(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function $b(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Vb(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Vb(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new v("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)$b(i.children[t++],n)}}function ps(i){return!i&&i!==0}function Rc(i){return i instanceof at}function Jh(i){return i instanceof Yn}function Xh(i){return i instanceof Sr}function Hb(i){return i=="class"||i=="style"}class CE extends Sr{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Yn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=Cm(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Ub=f(6574),yE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Ub.Z,yE),Ub.Z.locals;class zc extends at{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var qb=f(3332),xE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(qb.Z,xE),qb.Z.locals;class Wb extends at{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",n=>"ck-tooltip_"+n),t.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}var Gb=f(4906),EE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Gb.Z,EE),Gb.Z.locals;class Ot extends at{constructor(e){super(e);const t=this.bindTemplate,n=E();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new zc,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s))},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};_t.isSafari&&(o.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new Wb;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new at,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new at;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>$g(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=$g(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Kb=f(5332),SE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Kb.Z,SE),Kb.Z.locals;class jc extends Ot{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new at;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Yb=f(6781),DE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Yb.Z,DE),Yb.Z.locals;const Qb='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Zb extends Ot{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new zc;return e.content=Qb,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var Jb=f(7686),TE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Jb.Z,TE),Jb.Z.locals;class Xb extends at{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new si,this.focusTracker=new jo,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new Ot;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new Ot,t=e.bindTemplate;return e.icon=Qb,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class IE extends at{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():I("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var ek=f(5485),ME={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(ek.Z,ME),ek.Z.locals;function tk({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){wo(e)&&(e=e()),wo(n)&&(n=n());const l=function(y){return y&&y.parentNode?y.offsetParent===Bt.document.body?null:y.offsetParent:null}(i),d=new Tt(i),h=new Tt(e);let p;const m=o&&function(y){y=Object.assign({top:0,bottom:0,left:0,right:0},y);const T=new Tt(Bt.window);return T.top+=y.top,T.height-=y.top,T.bottom-=y.bottom,T.height-=y.bottom,T}(s)||null,w={targetRect:h,elementRect:d,positionedElementAncestor:l,viewportRect:m};if(n||o){const y=n&&new Tt(n).getVisible();Object.assign(w,{limiterRect:y,viewportRect:m}),p=function(T,P){const{elementRect:B}=P,O=B.getArea(),F=T.map(Pe=>new ef(Pe,P)).filter(Pe=>!!Pe.name);let Q=0,fe=null;for(const Pe of F){const{limiterIntersectionArea:Ke,viewportIntersectionArea:Mt}=Pe;if(Ke===O)return Pe;const gt=Mt**2+Ke**2;gt>Q&&(Q=gt,fe=Pe)}return fe}(t,w)||new ef(t[0],w)}else p=new ef(t[0],w);return p}function nk(i){const{scrollX:e,scrollY:t}=Bt.window;return i.clone().moveBy(e,t)}class ef{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:s,name:l,config:d}=n;this.name=l,this.config=d,this._positioningFunctionCorrdinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=nk(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=nk(new Tt(t)),o=ym(t);let s=0,l=0;s-=n.left,l-=n.top,s+=t.scrollLeft,l+=t.scrollTop,s-=o.left,l-=o.top,e.moveBy(s,l)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class gs extends at{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new si,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=gs._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:s,northWest:l,southMiddleEast:d,southMiddleWest:h,northMiddleEast:p,northMiddleWest:m}=gs.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,d,h,e,s,l,p,m,t]:[o,n,h,d,e,l,s,m,p,t]}}function ok(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}gs.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},gs._getOptimalPosition=tk;class ms{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(s,l)=>{this[t](),l()})}}get first(){return this.focusables.find(tf)||null}get last(){return this.focusables.filter(tf).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const s=this.focusables.get(o);if(tf(s))return s;o=(o+n+e)%n}while(o!==t);return null}}function tf(i){return!(!i.focus||!ok(i.element))}class ik extends at{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class PE extends at{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function rk(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var sk=f(5542),BE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(sk.Z,BE),sk.Z.locals;class nf extends at{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new jo,this.keystrokes=new si,this.set("class"),this.set("isCompact",!1),this.itemsView=new NE(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new ms({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const l=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var d;this.options.shouldGroupWhenFull&&this.options.isFloating&&l.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:l,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(d=this,d.bindTemplate.to(h=>{h.target===d.element&&h.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new OE(this):new LE(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=rk(e),o=n.items.filter((l,d,h)=>l==="|"||n.removeItems.indexOf(l)===-1&&(l==="-"?!this.options.shouldGroupWhenFull||(I("toolbarview-line-break-ignored-when-grouping-items",h),!1):!!t.has(l)||(I("toolbarview-item-unavailable",{name:l}),!1))),s=this._cleanSeparators(o).map(l=>l==="|"?new ik:l==="-"?new PE:t.create(l));this.items.addMany(s)}_cleanSeparators(e){const t=l=>l!=="-"&&l!=="|",n=e.length,o=e.findIndex(t),s=n-e.slice().reverse().findIndex(t);return e.slice(o,s).filter((l,d,h)=>t(l)?!0:!(d>0&&h[d-1]===l))}}class NE extends at{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class LE{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class OE{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index;for(const s of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=o;s<o+n.added.length;s++){const l=n.added[s-o];s>this.ungroupedItems.length?this.groupedItems.add(l,s-this.ungroupedItems.length):this.ungroupedItems.add(l,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!ok(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new Tt(e.lastChild),o=new Tt(e);if(!this.cachedPadding){const s=Bt.window.getComputedStyle(e),l=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[l])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new zt(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new ik),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Dr(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",uk(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Bb}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var ak=f(1046),RE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(ak.Z,RE),ak.Z.locals;class zE extends at{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new jo,this.keystrokes=new si,this._focusCycler=new ms({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class lk extends at{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class jE extends at{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var ck=f(7339),FE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(ck.Z,FE),ck.Z.locals;var dk=f(3949),VE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(dk.Z,VE),dk.Z.locals;function Dr(i,e=Zb){const t=new e(i),n=new IE(i),o=new gs(i,t,n);return t.bind("isEnabled").to(o),t instanceof Zb?t.bind("isOn").to(o,"isOpen"):t.arrowView.bind("isOn").to(o,"isOpen"),function(s){(function(l){l.on("render",()=>{Yh({emitter:l,activator:()=>l.isOpen,callback:()=>{l.isOpen=!1},contextElements:[l.element]})})})(s),function(l){l.on("execute",d=>{d.source instanceof jc||(l.isOpen=!1)})}(s),function(l){l.keystrokes.set("arrowdown",(d,h)=>{l.isOpen&&(l.panelView.focus(),h())}),l.keystrokes.set("arrowup",(d,h)=>{l.isOpen&&(l.panelView.focusLast(),h())})}(s)}(o),o}function uk(i,e,t={}){const n=i.locale,o=n.t,s=i.toolbarView=new nf(n);s.set("ariaLabel",o("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(l=>s.items.add(l)),t.enableActiveItemFocusOnDropdownOpen&&fk(i,()=>s.items.find(l=>l.isOn)),i.panelView.children.add(s),s.items.delegate("execute").to(i)}function hk(i,e){const t=i.locale,n=i.listView=new zE(t);n.items.bindTo(e).using(({type:o,model:s})=>{if(o==="separator")return new jE(t);if(o==="button"||o==="switchbutton"){const l=new lk(t);let d;return d=o==="button"?new Ot(t):new jc(t),d.bind(...Object.keys(s)).to(s),d.delegate("execute").to(l),l.children.add(d),l}}),i.panelView.children.add(n),n.items.delegate("execute").to(i),fk(i,()=>n.items.find(o=>o instanceof lk&&o.children.first.isOn))}function fk(i,e){i.on("change:isOpen",()=>{if(!i.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():I("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:"low"})}var pk=f(9688),$E={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(pk.Z,$E),pk.Z.locals;class HE extends at{constructor(e){super(e),this.body=new CE(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var gk=f(3662),UE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(gk.Z,UE),gk.Z.locals;class mk extends at{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${E()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class qE extends HE{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new mk;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class WE extends at{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const s=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(s,l,d)=>{d?n(o):t(o)})}(this):t(this)}}class GE extends WE{constructor(e,t,n,o={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var bk=f(8847),KE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(bk.Z,KE),bk.Z.locals;var kk=f(4879),YE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(kk.Z,YE),kk.Z.locals;class QE extends at{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new jo,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class ZE extends QE{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var wk=f(2577),JE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(wk.Z,JE),wk.Z.locals;class of extends at{constructor(e,t){super(e);const n=`ck-labeled-field-view-${E()}`,o=`ck-labeled-field-view-status-${E()}`;this.fieldView=t(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(l,d)=>l||d);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",l=>!l),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new mk(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new at(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function rf(i,e,t){const n=new ZE(i.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class sf extends br{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class af{constructor(e,t){t&&Mh(this,t),e&&this.set(e)}}function lf(i){return e=>e+i}se(af,Fe);var _k=f(8793),XE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(_k.Z,XE),_k.Z.locals;const vk=lf("px"),Ak=Bt.document.body;class Fn extends at{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",vk),left:t.to("left",vk)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=Fn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:Ak,fitInViewport:!0},e),o=Fn._getOptimalPosition(n),s=parseInt(o.left),l=parseInt(o.top),{name:d,config:h={}}=o,{withArrow:p=!0}=h;Object.assign(this,{top:l,left:s,position:d,withArrow:p})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=cf(e.target),n=e.limiter?cf(e.limiter):Ak;this.listenTo(Bt.document,"scroll",(o,s)=>{const l=s.target,d=t&&l.contains(t),h=n&&l.contains(n);!d&&!h&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Bt.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Bt.document,"scroll"),this.stopListening(Bt.window,"resize")}}function cf(i){return oi(i)?i:Pc(i)?i.commonAncestorContainer:typeof i=="function"?cf(i()):null}Fn.arrowHorizontalOffset=25,Fn.arrowVerticalOffset=10,Fn.stickyVerticalOffset=20,Fn._getOptimalPosition=tk,Fn.defaultPositions=function({horizontalOffset:i=Fn.arrowHorizontalOffset,verticalOffset:e=Fn.arrowVerticalOffset,stickyVerticalOffset:t=Fn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(l,d)=>({top:o(l,d),left:l.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(l,d)=>({top:o(l,d),left:l.left-.25*d.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(l,d)=>({top:o(l,d),left:l.left-d.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(l,d)=>({top:o(l,d),left:l.left-.75*d.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(l,d)=>({top:o(l,d),left:l.left-d.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(l,d)=>({top:o(l,d),left:l.left+l.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(l,d)=>({top:o(l,d),left:l.left+l.width/2-.25*d.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(l,d)=>({top:o(l,d),left:l.left+l.width/2-d.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(l,d)=>({top:o(l,d),left:l.left+l.width/2-.75*d.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(l,d)=>({top:o(l,d),left:l.left+l.width/2-d.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(l,d)=>({top:o(l,d),left:l.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(l,d)=>({top:o(l,d),left:l.right-.25*d.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(l,d)=>({top:o(l,d),left:l.right-d.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(l,d)=>({top:o(l,d),left:l.right-.75*d.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(l,d)=>({top:o(l,d),left:l.right-d.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(l,d)=>({top:s(l),left:l.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(l,d)=>({top:s(l),left:l.left-.25*d.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(l,d)=>({top:s(l),left:l.left-d.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(l,d)=>({top:s(l),left:l.left-.75*d.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(l,d)=>({top:s(l),left:l.left-d.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(l,d)=>({top:s(l),left:l.left+l.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(l,d)=>({top:s(l),left:l.left+l.width/2-.25*d.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(l,d)=>({top:s(l),left:l.left+l.width/2-d.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(l,d)=>({top:s(l),left:l.left+l.width/2-.75*d.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(l,d)=>({top:s(l),left:l.left+l.width/2-d.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(l,d)=>({top:s(l),left:l.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(l,d)=>({top:s(l),left:l.right-.25*d.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(l,d)=>({top:s(l),left:l.right-d.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(l,d)=>({top:s(l),left:l.right-.75*d.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(l,d)=>({top:s(l),left:l.right-d.width+i,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(l,d,h)=>l.getIntersection(h)?{top:h.top+t,left:l.left+l.width/2-d.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(l,d){return l.top-d.height-e}function s(l){return l.bottom+e}}();var Ck=f(4650),e2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Ck.Z,e2),Ck.Z.locals;var yk=f(7676),t2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(yk.Z,t2),yk.Z.locals;const Fc=lf("px");class Vc extends ne{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new Fn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new v("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new v("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new v("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new n2(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new o2(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class n2 extends at{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new jo,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Ot(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class o2 extends at{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Fc),left:n.to("left",Fc),width:n.to("width",Fc),height:n.to("height",Fc)}},children:this.content}),this.on("change:numberOfPanels",(o,s,l,d)=>{l>d?this._addPanels(l-d):this._removePanels(d-l),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new at;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new Tt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var xk=f(5868),i2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(xk.Z,i2),xk.Z.locals;const Qa=lf("px");class r2 extends at{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Yn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Qa(this._panelRect.height):null)}}}).render(),this._contentPanel=new Yn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Qa(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Qa(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Qa(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Bt.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Qa(-Bt.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Ek=f(9695),s2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Ek.Z,s2),Ek.Z.locals;var Sk=f(4717),a2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Sk.Z,a2),Sk.Z.locals;const $c=new WeakMap;function Dk(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=i,l=e.document;$c.has(l)||($c.set(l,new Map),l.registerPostFixer(d=>Tk(l,d))),$c.get(l).set(t,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?t:null}),e.change(d=>Tk(l,d))}function l2(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function Tk(i,e){const t=$c.get(i),n=[];let o=!1;for(const[s,l]of t)l.isDirectHost&&(n.push(s),Ik(e,s,l)&&(o=!0));for(const[s,l]of t){if(l.isDirectHost)continue;const d=c2(s);d&&(n.includes(d)||(l.hostElement=d,Ik(e,s,l)&&(o=!0)))}return o}function Ik(i,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let l=!1;return s.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,s),l=!0),(o||e.childCount==1)&&function(d,h){if(!d.isAttached()||Array.from(d.getChildren()).some(y=>!y.is("uiElement")))return!1;if(h)return!0;const m=d.document;if(!m.isFocused)return!0;const w=m.selection.anchor;return w&&w.parent!==d}(s,t.keepOnFocus)?function(d,h){return!h.hasClass("ck-placeholder")&&(d.addClass("ck-placeholder",h),!0)}(i,s)&&(l=!0):l2(i,s)&&(l=!0),l}function c2(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const df=new Map;function pt(i,e,t){let n=df.get(i);n||(n=new Map,df.set(i,n)),n.set(e,t)}function d2(i){return[i]}function Mk(i,e,t={}){const n=function(o,s){const l=df.get(o);return l&&l.has(s)?l.get(s):d2}(i.constructor,e.constructor);try{return n(i=i.clone(),e,t)}catch(o){throw o}}function u2(i,e,t){i=i.slice(),e=e.slice();const n=new h2(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(e);const o=n.originalOperations;if(i.length==0||e.length==0)return{operationsA:i,operationsB:e,originalOperations:o};const s=new WeakMap;for(const h of i)s.set(h,0);const l={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:e.length};let d=0;for(;d<i.length;){const h=i[d],p=s.get(h);if(p==e.length){d++;continue}const m=e[p],w=Mk(h,m,n.getContext(h,m,!0)),y=Mk(m,h,n.getContext(m,h,!1));n.updateRelation(h,m),n.setOriginalOperations(w,h),n.setOriginalOperations(y,m);for(const T of w)s.set(T,p+y.length);i.splice(d,1,...w),e.splice(p,1,...y)}if(t.padWithNoOps){const h=i.length-l.originalOperationsACount,p=e.length-l.originalOperationsBCount;Bk(i,p-h),Bk(e,h-p)}return Pk(i,l.nextBaseVersionB),Pk(e,l.nextBaseVersionA),{operationsA:i,operationsB:e,originalOperations:o}}class h2{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){switch(e.constructor){case At:switch(t.constructor){case tn:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case At:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case Nt:switch(t.constructor){case tn:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case At:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=ae._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:s})}}}break;case tn:switch(t.constructor){case tn:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case Nt:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case zn:{const n=e.newRange;if(!n)return;switch(t.constructor){case At:{const o=ae._createFromPositionAndShift(t.sourcePosition,t.howMany),s=o.containsPosition(n.start)||o.start.isEqual(n.start),l=o.containsPosition(n.end)||o.end.isEqual(n.end);!s&&!l||o.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()});break}case tn:{const o=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),l=n.end.isEqual(t.deletionPosition),d=n.end.isEqual(t.sourcePosition);(o||s||l||d)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:l,wasInRightElement:d});break}}break}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const s=this.originalOperations.get(e),l=this._relations.get(s);return l&&l.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),s=this.originalOperations.get(t);let l=this._relations.get(o);l||(l=new Map,this._relations.set(o,l)),l.set(s,n)}}function Pk(i,e){for(const t of i)t.baseVersion=e++}function Bk(i,e){for(let t=0;t<e;t++)i.push(new hn(0))}function Nk(i,e,t){const n=i.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new ae(i.position,i.position.getShiftedBy(i.howMany));return new Xt(o,e,n,t,0)}function Lk(i,e){return i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function bs(i,e){const t=[];for(let n=0;n<i.length;n++){const o=i[n],s=new At(o.start,o.end.offset-o.start.offset,e,0);t.push(s);for(let l=n+1;l<i.length;l++)i[l]=i[l]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}pt(Xt,Xt,(i,e,t)=>{if(i.key===e.key&&i.range.start.hasSameParentAs(e.range.start)){const n=i.range.getDifference(e.range).map(s=>new Xt(s,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new Xt(o,e.key,e.newValue,i.newValue,0)),n.length==0?[new hn(0)]:n}return[i]}),pt(Xt,un,(i,e)=>{if(i.range.start.hasSameParentAs(e.position)&&i.range.containsPosition(e.position)){const t=i.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Xt(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(e.shouldReceiveAttributes){const n=Nk(e,i.key,i.oldValue);n&&t.unshift(n)}return t}return i.range=i.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[i]}),pt(Xt,tn,(i,e)=>{const t=[];i.range.start.hasSameParentAs(e.deletionPosition)&&(i.range.containsPosition(e.deletionPosition)||i.range.start.isEqual(e.deletionPosition))&&t.push(ae._createFromPositionAndShift(e.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new Xt(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),pt(Xt,At,(i,e)=>function(n,o){const s=ae._createFromPositionAndShift(o.sourcePosition,o.howMany);let l=null,d=[];s.containsRange(n,!0)?l=n:n.start.hasSameParentAs(s.start)?(d=n.getDifference(s),l=n.getIntersection(s)):d=[n];const h=[];for(let p of d){p=p._getTransformedByDeletion(o.sourcePosition,o.howMany);const m=o.getMovedRangeStart(),w=p.start.hasSameParentAs(m);p=p._getTransformedByInsertion(m,o.howMany,w),h.push(...p)}return l&&h.push(l._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),h}(i.range,e).map(n=>new Xt(n,i.key,i.oldValue,i.newValue,i.baseVersion))),pt(Xt,Nt,(i,e)=>{if(i.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(e.splitPosition)&&i.range.containsPosition(e.splitPosition)){const t=i.clone();return t.range=new ae(e.moveTargetPosition.clone(),i.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),i.range.end=e.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,t]}return i.range=i.range._getTransformedBySplitOperation(e),[i]}),pt(un,Xt,(i,e)=>{const t=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(i.position)){const n=Nk(i,e.key,e.newValue);n&&t.push(n)}return t}),pt(un,un,(i,e,t)=>(i.position.isEqual(e.position)&&t.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(e)),[i])),pt(un,At,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),pt(un,Nt,(i,e)=>(i.position=i.position._getTransformedBySplitOperation(e),[i])),pt(un,tn,(i,e)=>(i.position=i.position._getTransformedByMergeOperation(e),[i])),pt(zn,un,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(e)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(e)[0]),[i])),pt(zn,zn,(i,e,t)=>{if(i.name==e.name){if(!t.aIsStrong)return[new hn(0)];i.oldRange=e.newRange?e.newRange.clone():null}return[i]}),pt(zn,tn,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(e)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(e)),[i])),pt(zn,At,(i,e,t)=>{if(i.oldRange&&(i.oldRange=ae._createFromRanges(i.oldRange._getTransformedByMoveOperation(e))),i.newRange){if(t.abRelation){const n=ae._createFromRanges(i.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=t.abRelation.path,i.newRange.end=n.end,[i];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=t.abRelation.path,[i]}i.newRange=ae._createFromRanges(i.newRange._getTransformedByMoveOperation(e))}return[i]}),pt(zn,Nt,(i,e,t)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(e)),i.newRange){if(t.abRelation){const n=i.newRange._getTransformedBySplitOperation(e);return i.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?i.newRange.start=be._createAt(e.insertionPosition):i.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(i.newRange.start=be._createAt(e.moveTargetPosition)),i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?i.newRange.end=be._createAt(e.moveTargetPosition):i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?i.newRange.end=be._createAt(e.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(e)}return[i]}),pt(tn,un,(i,e)=>(i.sourcePosition.hasSameParentAs(e.position)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(e),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e),[i])),pt(tn,tn,(i,e,t)=>{if(i.sourcePosition.isEqual(e.sourcePosition)&&i.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new be(e.graveyardPosition.root,n),i.howMany=0,[i]}return[new hn(0)]}if(i.sourcePosition.isEqual(e.sourcePosition)&&!i.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const l=e.targetPosition._getTransformedByMergeOperation(e),d=i.targetPosition._getTransformedByMergeOperation(e);return[new At(l,i.howMany,d,0)]}return[new hn(0)]}return i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(e),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),i.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),pt(tn,At,(i,e,t)=>{const n=ae._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&i.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new hn(0)]:(i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition.hasSameParentAs(e.sourcePosition)&&(i.howMany-=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(e),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(e),i.graveyardPosition.isEqual(e.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)),[i])}),pt(tn,Nt,(i,e,t)=>{if(e.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),i.deletionPosition.isEqual(e.graveyardPosition)&&(i.howMany=e.howMany)),i.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&i.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),[i]}if(i.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i];if(t.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=e.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}return i.sourcePosition.hasSameParentAs(e.splitPosition)&&(i.howMany=e.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}),pt(At,un,(i,e)=>{const t=ae._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(e,!1)[0];return i.sourcePosition=t.start,i.howMany=t.end.offset-t.start.offset,i.targetPosition.isEqual(e.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e)),[i]}),pt(At,At,(i,e,t)=>{const n=ae._createFromPositionAndShift(i.sourcePosition,i.howMany),o=ae._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,l=t.aIsStrong,d=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?d=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(d=!1),s=i.targetPosition.isEqual(e.targetPosition)&&d?i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):i.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Lk(i,e)&&Lk(e,i))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),bs([n],s);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),bs([n],s);const h=cn(i.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(h=="prefix"||h=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),bs([n],s);i.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?i.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(l=!1):l=!0;const p=[],m=n.getDifference(o);for(const y of m){y.start=y.start._getTransformedByDeletion(e.sourcePosition,e.howMany),y.end=y.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const T=cn(y.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",P=y._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,T);p.push(...P)}const w=n.getIntersection(o);return w!==null&&l&&(w.start=w.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),w.end=w.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),p.length===0?p.push(w):p.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?p.unshift(w):p.push(w):p.splice(1,0,w)),p.length===0?[new hn(i.baseVersion)]:bs(p,s)}),pt(At,Nt,(i,e,t)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(e));const o=ae._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let l=new ae(e.splitPosition,o.end);return l=l._getTransformedBySplitOperation(e),bs([new ae(o.start,e.splitPosition),l],n)}i.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),i.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=i.targetPosition);const s=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const l=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);i.howMany>1&&l&&!t.aWasUndone&&s.push(ae._createFromPositionAndShift(e.insertionPosition,1))}return bs(s,n)}),pt(At,tn,(i,e,t)=>{const n=ae._createFromPositionAndShift(i.sourcePosition,i.howMany);if(e.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(i.type!="remove"||t.forceWeakRemove){if(i.howMany==1)return t.bWasUndone?(i.sourcePosition=e.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]):[new hn(0)]}else if(!t.aWasUndone){const s=[];let l=e.graveyardPosition.clone(),d=e.targetPosition._getTransformedByMergeOperation(e);i.howMany>1&&(s.push(new At(i.sourcePosition,i.howMany-1,i.targetPosition,0)),l=l._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),d=d._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const h=e.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),p=new At(l,1,h,0),m=p.getMovedRangeStart().path.slice();m.push(0);const w=new be(p.targetPosition.root,m);d=d._getTransformedByMove(l,h,1);const y=new At(d,e.howMany,w,0);return s.push(p),s.push(y),s}}const o=ae._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(e);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]}),pt(jn,un,(i,e)=>(i.position=i.position._getTransformedByInsertOperation(e),[i])),pt(jn,tn,(i,e)=>i.position.isEqual(e.deletionPosition)?(i.position=e.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(e),[i])),pt(jn,At,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),pt(jn,jn,(i,e,t)=>{if(i.position.isEqual(e.position)){if(!t.aIsStrong)return[new hn(0)];i.oldName=e.newName}return[i]}),pt(jn,Nt,(i,e)=>{if(cn(i.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new jn(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,t]}return i.position=i.position._getTransformedBySplitOperation(e),[i]}),pt(di,di,(i,e,t)=>{if(i.root===e.root&&i.key===e.key){if(!t.aIsStrong||i.newValue===e.newValue)return[new hn(0)];i.oldValue=e.newValue}return[i]}),pt(Nt,un,(i,e)=>(i.splitPosition.hasSameParentAs(e.position)&&i.splitPosition.offset<e.position.offset&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(e),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(e),[i])),pt(Nt,tn,(i,e,t)=>{if(!i.graveyardPosition&&!t.bWasUndone&&i.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new be(e.graveyardPosition.root,n),s=Nt.getInsertionPosition(new be(e.graveyardPosition.root,n)),l=new Nt(o,0,s,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),i.graveyardPosition=l.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[l,i]}return i.splitPosition.hasSameParentAs(e.deletionPosition)&&!i.splitPosition.isAfter(e.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),pt(Nt,At,(i,e,t)=>{const n=ae._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.graveyardPosition){const s=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!t.bWasUndone&&s){const l=i.splitPosition._getTransformedByMoveOperation(e),d=i.graveyardPosition._getTransformedByMoveOperation(e),h=d.path.slice();h.push(0);const p=new be(d.root,h);return[new At(l,i.howMany,p,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)}const o=i.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return i.howMany+=e.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),[i];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:l}=t.abRelation;return i.howMany+=s,i.splitPosition=i.splitPosition.getShiftedBy(l),[i]}if(i.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.splitPosition)){const s=e.howMany-(i.splitPosition.offset-e.sourcePosition.offset);return i.howMany-=s,i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany),i.splitPosition=e.sourcePosition.clone(),i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),[i]}return e.sourcePosition.isEqual(e.targetPosition)||(i.splitPosition.hasSameParentAs(e.sourcePosition)&&i.splitPosition.offset<=e.sourcePosition.offset&&(i.howMany-=e.howMany),i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(e),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(e):i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),[i]}),pt(Nt,Nt,(i,e,t)=>{if(i.splitPosition.isEqual(e.splitPosition)){if(!i.graveyardPosition&&!e.graveyardPosition)return[new hn(0)];if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition))return[new hn(0)];if(t.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e),[i]}if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const l=[];return e.howMany&&l.push(new At(e.moveTargetPosition,e.howMany,e.splitPosition,0)),i.howMany&&l.push(new At(i.splitPosition,i.howMany,i.moveTargetPosition,0)),l}return[new hn(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e)),i.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return i.howMany++,[i];if(e.splitPosition.isEqual(i.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new be(e.insertionPosition.root,n);return[i,new At(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(e.splitPosition)&&i.splitPosition.offset<e.splitPosition.offset&&(i.howMany-=e.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(e),i.insertionPosition=Nt.getInsertionPosition(i.splitPosition),[i]});class f2 extends Ri{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class Hc extends Ri{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class ks{constructor(e){this.document=e}createDocumentFragment(e){return new Ar(this.document,e)}createElement(e,t,n){return new ao(this.document,e,t,n)}createText(e){return new wt(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new ao(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Qt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return De._createAt(e,t)}createPositionAfter(e){return De._createAfter(e)}createPositionBefore(e){return De._createBefore(e)}createRange(e,t){return new Ze(e,t)}createRangeOn(e){return Ze._createOn(e)}createRangeIn(e){return Ze._createIn(e)}createSelection(e,t,n){return new Ao(e,t,n)}}class p2 extends Mb{constructor(e,t){super(e),this.view=t,this._toolbarConfig=rk(e.config.get("toolbar")),this._elementReplacer=new px}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,s=n.editable,l=o.document.getRoot();s.name=l.rootName,n.render();const d=s.element;this.setEditableElement(s.name,d),this.focusTracker.add(d),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(d),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,n=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:s,originFocusTracker:l,toolbar:d,beforeFocus:h,afterBlur:p}){l.add(d.element),s.set("Alt+F10",(m,w)=>{l.isFocused&&!d.focusTracker.isFocused&&(h&&h(),d.focus(),w())}),d.keystrokes.set("Esc",(m,w)=>{d.focusTracker.isFocused&&(o.focus(),p&&p(),w())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,s=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");s&&Dk({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}var Ok=f(3143),g2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Ye()(Ok.Z,g2),Ok.Z.locals;class m2 extends qE{constructor(e,t,n={}){super(e),this.stickyPanel=new r2(e),this.toolbar=new nf(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new GE(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class uf extends Ib{constructor(e,t={}){if(!oi(e)&&t.initialData!==void 0)throw new v("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return oi(s)?(l=s,l instanceof HTMLTextAreaElement?l.value:l.innerHTML):s;var l}(e)),oi(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new m2(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new p2(this,o),function(s){if(!wo(s.updateSourceElement))throw new v("attachtoform-missing-elementapi-interface",s);const l=s.sourceElement;if(l&&l.tagName.toLowerCase()==="textarea"&&l.form){let d;const h=l.form,p=()=>s.updateSourceElement();wo(h.submit)&&(d=h.submit,h.submit=()=>{p(),d.apply(h)}),h.addEventListener("submit",p),s.on("destroy",()=>{h.removeEventListener("submit",p),d&&(h.submit=d)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(oi(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}se(uf,gE),se(uf,bE);class b2{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class hf extends Ri{constructor(e){super(e);const t=this.document;function n(o){return(s,l)=>{l.preventDefault();const d=l.dropRange?[l.dropRange]:null,h=new _(t,o);t.fire(h,{dataTransfer:l.dataTransfer,method:s.name,targetRanges:d,target:l.target}),h.stop.called&&l.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new b2(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const s=o.target.ownerDocument,l=o.clientX,d=o.clientY;let h;return s.caretRangeFromPoint&&s.caretRangeFromPoint(l,d)?h=s.caretRangeFromPoint(l,d):o.rangeParent&&(h=s.createRange(),h.setStart(o.rangeParent,o.rangeOffset),h.collapse(!0)),h?n.domConverter.domRangeToView(h):null}(this.view,e)),this.fire(e.type,e,t)}}const Rk=["figcaption","li"];function zk(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=zk(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Rk.includes(t.name)||Rk.includes(n.name)?e+=`
`:e+=`

* sweetalert2 v11.4.0
* Released under the MIT License.
*/(function(r,a){(function(c,u){r.exports=u()})(Wi,function(){const c="SweetAlert2:",u=A=>{const C=[];for(let M=0;M<A.length;M++)C.indexOf(A[M])===-1&&C.push(A[M]);return C},f=A=>A.charAt(0).toUpperCase()+A.slice(1),b=A=>Array.prototype.slice.call(A),g=A=>{console.warn("".concat(c," ").concat(typeof A=="object"?A.join(" "):A))},_=A=>{console.error("".concat(c," ").concat(A))},k=[],E=A=>{k.includes(A)||(k.push(A),g(A))},x=(A,C)=>{E('"'.concat(A,'" is deprecated and will be removed in the next major release. Please use "').concat(C,'" instead.'))},D=A=>typeof A=="function"?A():A,v=A=>A&&typeof A.toPromise=="function",I=A=>v(A)?A.toPromise():Promise.resolve(A),$=A=>A&&Promise.resolve(A)===A,le={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},G=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],H={},N=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],W=A=>Object.prototype.hasOwnProperty.call(le,A),te=A=>G.indexOf(A)!==-1,ie=A=>H[A],ee=A=>{W(A)||g('Unknown parameter "'.concat(A,'"'))},V=A=>{N.includes(A)&&g('The parameter "'.concat(A,'" is incompatible with toasts'))},q=A=>{ie(A)&&x(A,ie(A))},Z=A=>{!A.backdrop&&A.allowOutsideClick&&g('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const C in A)ee(C),A.toast&&V(C),q(C)},K="swal2-",oe=A=>{const C={};for(const M in A)C[A[M]]=K+A[M];return C},R=oe(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),xe=oe(["success","warning","info","question","error"]),me=()=>document.body.querySelector(".".concat(R.container)),Ie=A=>{const C=me();return C?C.querySelector(A):null},Re=A=>Ie(".".concat(A)),Se=()=>Re(R.popup),Ue=()=>Re(R.icon),ht=()=>Re(R.title),et=()=>Re(R["html-container"]),ze=()=>Re(R.image),Fe=()=>Re(R["progress-steps"]),qe=()=>Re(R["validation-message"]),ut=()=>Ie(".".concat(R.actions," .").concat(R.confirm)),L=()=>Ie(".".concat(R.actions," .").concat(R.deny)),re=()=>Re(R["input-label"]),de=()=>Ie(".".concat(R.loader)),se=()=>Ie(".".concat(R.actions," .").concat(R.cancel)),ne=()=>Re(R.actions),rt=()=>Re(R.footer),Ee=()=>Re(R["timer-progress-bar"]),Oe=()=>Re(R.close),z=`
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
`,U=()=>{const A=b(Se().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((M,j)=>{const ge=parseInt(M.getAttribute("tabindex")),He=parseInt(j.getAttribute("tabindex"));return ge>He?1:ge<He?-1:0}),C=b(Se().querySelectorAll(z)).filter(M=>M.getAttribute("tabindex")!=="-1");return u(A.concat(C)).filter(M=>Ut(M))},X=()=>!_e(document.body,R["toast-shown"])&&!_e(document.body,R["no-backdrop"]),ce=()=>Se()&&_e(Se(),R.toast),ue=()=>Se().hasAttribute("data-loading"),ke={previousBodyPadding:null},ye=(A,C)=>{if(A.textContent="",C){const j=new DOMParser().parseFromString(C,"text/html");b(j.querySelector("head").childNodes).forEach(ge=>{A.appendChild(ge)}),b(j.querySelector("body").childNodes).forEach(ge=>{A.appendChild(ge)})}},_e=(A,C)=>{if(!C)return!1;const M=C.split(/\s+/);for(let j=0;j<M.length;j++)if(!A.classList.contains(M[j]))return!1;return!0},ve=(A,C)=>{b(A.classList).forEach(M=>{!Object.values(R).includes(M)&&!Object.values(xe).includes(M)&&!Object.values(C.showClass).includes(M)&&A.classList.remove(M)})},he=(A,C,M)=>{if(ve(A,C),C.customClass&&C.customClass[M]){if(typeof C.customClass[M]!="string"&&!C.customClass[M].forEach)return g("Invalid type of customClass.".concat(M,'! Expected string or iterable object, got "').concat(typeof C.customClass[M],'"'));Ae(A,C.customClass[M])}},je=(A,C)=>{if(!C)return null;switch(C){case"select":case"textarea":case"file":return A.querySelector(".".concat(R.popup," > .").concat(R[C]));case"checkbox":return A.querySelector(".".concat(R.popup," > .").concat(R.checkbox," input"));case"radio":return A.querySelector(".".concat(R.popup," > .").concat(R.radio," input:checked"))||A.querySelector(".".concat(R.popup," > .").concat(R.radio," input:first-child"));case"range":return A.querySelector(".".concat(R.popup," > .").concat(R.range," input"));default:return A.querySelector(".".concat(R.popup," > .").concat(R.input))}},Te=A=>{if(A.focus(),A.type!=="file"){const C=A.value;A.value="",A.value=C}},Be=(A,C,M)=>{!A||!C||(typeof C=="string"&&(C=C.split(/\s+/).filter(Boolean)),C.forEach(j=>{Array.isArray(A)?A.forEach(ge=>{M?ge.classList.add(j):ge.classList.remove(j)}):M?A.classList.add(j):A.classList.remove(j)}))},Ae=(A,C)=>{Be(A,C,!0)},$e=(A,C)=>{Be(A,C,!1)},st=(A,C)=>{const M=b(A.childNodes);for(let j=0;j<M.length;j++)if(_e(M[j],C))return M[j]},Qe=(A,C,M)=>{M==="".concat(parseInt(M))&&(M=parseInt(M)),M||parseInt(M)===0?A.style[C]=typeof M=="number"?"".concat(M,"px"):M:A.style.removeProperty(C)},We=function(A){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";A.style.display=C},dt=A=>{A.style.display="none"},Tn=(A,C,M,j)=>{const ge=A.querySelector(C);ge&&(ge.style[M]=j)},ro=(A,C,M)=>{C?We(A,M):dt(A)},Ut=A=>!!(A&&(A.offsetWidth||A.offsetHeight||A.getClientRects().length)),Qt=()=>!Ut(ut())&&!Ut(L())&&!Ut(se()),Dt=A=>A.scrollHeight>A.clientHeight,Ft=A=>{const C=window.getComputedStyle(A),M=parseFloat(C.getPropertyValue("animation-duration")||"0"),j=parseFloat(C.getPropertyValue("transition-duration")||"0");return M>0||j>0},In=function(A){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const M=Ee();Ut(M)&&(C&&(M.style.transition="none",M.style.width="100%"),setTimeout(()=>{M.style.transition="width ".concat(A/1e3,"s linear"),M.style.width="0%"},10))},oa=()=>{const A=Ee(),C=parseInt(window.getComputedStyle(A).width);A.style.removeProperty("transition"),A.style.width="100%";const M=parseInt(window.getComputedStyle(A).width),j=C/M*100;A.style.removeProperty("transition"),A.style.width="".concat(j,"%")},dr=()=>typeof window=="undefined"||typeof document=="undefined",ia=100,Ge={},ra=()=>{Ge.previousActiveElement&&Ge.previousActiveElement.focus?(Ge.previousActiveElement.focus(),Ge.previousActiveElement=null):document.body&&document.body.focus()},No=A=>new Promise(C=>{if(!A)return C();const M=window.scrollX,j=window.scrollY;Ge.restoreFocusTimeout=setTimeout(()=>{ra(),C()},ia),window.scrollTo(M,j)}),Ai=`
 <div aria-labelledby="`.concat(R.title,'" aria-describedby="').concat(R["html-container"],'" class="').concat(R.popup,`" tabindex="-1">
   <button type="button" class="`).concat(R.close,`"></button>
   <ul class="`).concat(R["progress-steps"],`"></ul>
   <div class="`).concat(R.icon,`"></div>
   <img class="`).concat(R.image,`" />
   <h2 class="`).concat(R.title,'" id="').concat(R.title,`"></h2>
   <div class="`).concat(R["html-container"],'" id="').concat(R["html-container"],`"></div>
   <input class="`).concat(R.input,`" />
   <input type="file" class="`).concat(R.file,`" />
   <div class="`).concat(R.range,`">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(R.select,`"></select>
   <div class="`).concat(R.radio,`"></div>
   <label for="`).concat(R.checkbox,'" class="').concat(R.checkbox,`">
     <input type="checkbox" />
     <span class="`).concat(R.label,`"></span>
   </label>
   <textarea class="`).concat(R.textarea,`"></textarea>
   <div class="`).concat(R["validation-message"],'" id="').concat(R["validation-message"],`"></div>
   <div class="`).concat(R.actions,`">
     <div class="`).concat(R.loader,`"></div>
     <button type="button" class="`).concat(R.confirm,`"></button>
     <button type="button" class="`).concat(R.deny,`"></button>
     <button type="button" class="`).concat(R.cancel,`"></button>
   </div>
   <div class="`).concat(R.footer,`"></div>
   <div class="`).concat(R["timer-progress-bar-container"],`">
     <div class="`).concat(R["timer-progress-bar"],`"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g,""),qn=()=>{const A=me();return A?(A.remove(),$e([document.documentElement,document.body],[R["no-backdrop"],R["toast-shown"],R["has-column"]]),!0):!1},ko=()=>{Ge.currentInstance.resetValidationMessage()},sa=()=>{const A=Se(),C=st(A,R.input),M=st(A,R.file),j=A.querySelector(".".concat(R.range," input")),ge=A.querySelector(".".concat(R.range," output")),He=st(A,R.select),qt=A.querySelector(".".concat(R.checkbox," input")),Mn=st(A,R.textarea);C.oninput=ko,M.onchange=ko,He.onchange=ko,qt.onchange=ko,Mn.oninput=ko,j.oninput=()=>{ko(),ge.value=j.value},j.onchange=()=>{ko(),j.nextSibling.value=j.value}},aa=A=>typeof A=="string"?document.querySelector(A):A,wo=A=>{const C=Se();C.setAttribute("role",A.toast?"alert":"dialog"),C.setAttribute("aria-live",A.toast?"polite":"assertive"),A.toast||C.setAttribute("aria-modal","true")},Jo=A=>{window.getComputedStyle(A).direction==="rtl"&&Ae(me(),R.rtl)},Ci=A=>{const C=qn();if(dr()){_("SweetAlert2 requires document to initialize");return}const M=document.createElement("div");M.className=R.container,C&&Ae(M,R["no-transition"]),ye(M,Ai);const j=aa(A.target);j.appendChild(M),wo(A),Jo(j),sa()},Lo=(A,C)=>{A instanceof HTMLElement?C.appendChild(A):typeof A=="object"?yi(A,C):A&&ye(C,A)},yi=(A,C)=>{A.jquery?Wn(C,A):ye(C,A.toString())},Wn=(A,C)=>{if(A.textContent="",0 in C)for(let M=0;M in C;M++)A.appendChild(C[M].cloneNode(!0));else A.appendChild(C.cloneNode(!0))},Xo=(()=>{if(dr())return!1;const A=document.createElement("div"),C={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const M in C)if(Object.prototype.hasOwnProperty.call(C,M)&&typeof A.style[M]!="undefined")return C[M];return!1})(),xi=()=>{const A=document.createElement("div");A.className=R["scrollbar-measure"],document.body.appendChild(A);const C=A.getBoundingClientRect().width-A.clientWidth;return document.body.removeChild(A),C},Zr=(A,C)=>{const M=ne(),j=de();!C.showConfirmButton&&!C.showDenyButton&&!C.showCancelButton?dt(M):We(M),he(M,C,"actions"),J(M,j,C),ye(j,C.loaderHtml),he(j,C,"loader")};function J(A,C,M){const j=ut(),ge=L(),He=se();nt(j,"confirm",M),nt(ge,"deny",M),nt(He,"cancel",M),Ne(j,ge,He,M),M.reverseButtons&&(M.toast?(A.insertBefore(He,j),A.insertBefore(ge,j)):(A.insertBefore(He,C),A.insertBefore(ge,C),A.insertBefore(j,C)))}function Ne(A,C,M,j){if(!j.buttonsStyling)return $e([A,C,M],R.styled);Ae([A,C,M],R.styled),j.confirmButtonColor&&(A.style.backgroundColor=j.confirmButtonColor,Ae(A,R["default-outline"])),j.denyButtonColor&&(C.style.backgroundColor=j.denyButtonColor,Ae(C,R["default-outline"])),j.cancelButtonColor&&(M.style.backgroundColor=j.cancelButtonColor,Ae(M,R["default-outline"]))}function nt(A,C,M){ro(A,M["show".concat(f(C),"Button")],"inline-block"),ye(A,M["".concat(C,"ButtonText")]),A.setAttribute("aria-label",M["".concat(C,"ButtonAriaLabel")]),A.className=R[C],he(A,M,"".concat(C,"Button")),Ae(A,M["".concat(C,"ButtonClass")])}function Zt(A,C){typeof C=="string"?A.style.background=C:C||Ae([document.documentElement,document.body],R["no-backdrop"])}function bu(A,C){C in R?Ae(A,R[C]):(g('The "position" parameter is not valid, defaulting to "center"'),Ae(A,R.center))}function ei(A,C){if(C&&typeof C=="string"){const M="grow-".concat(C);M in R&&Ae(A,R[M])}}const ur=(A,C)=>{const M=me();!M||(Zt(M,C.backdrop),bu(M,C.position),ei(M,C.grow),he(M,C,"container"))};var tt={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const ku=["input","file","range","select","radio","checkbox","textarea"],wu=(A,C)=>{const M=Se(),j=tt.innerParams.get(A),ge=!j||C.input!==j.input;ku.forEach(He=>{const qt=R[He],Mn=st(M,qt);Au(He,C.inputAttributes),Mn.className=qt,ge&&dt(Mn)}),C.input&&(ge&&_u(C),Cu(C))},_u=A=>{if(!vn[A.input])return _('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(A.input,'"'));const C=ca(A.input),M=vn[A.input](C,A);We(M),setTimeout(()=>{Te(M)})},vu=A=>{for(let C=0;C<A.attributes.length;C++){const M=A.attributes[C].name;["type","value","style"].includes(M)||A.removeAttribute(M)}},Au=(A,C)=>{const M=je(Se(),A);if(!!M){vu(M);for(const j in C)M.setAttribute(j,C[j])}},Cu=A=>{const C=ca(A.input);A.customClass&&Ae(C,A.customClass.input)},la=(A,C)=>{(!A.placeholder||C.inputPlaceholder)&&(A.placeholder=C.inputPlaceholder)},so=(A,C,M)=>{if(M.inputLabel){A.id=R.input;const j=document.createElement("label"),ge=R["input-label"];j.setAttribute("for",A.id),j.className=ge,Ae(j,M.customClass.inputLabel),j.innerText=M.inputLabel,C.insertAdjacentElement("beforebegin",j)}},ca=A=>{const C=R[A]?R[A]:R.input;return st(Se(),C)},vn={};vn.text=vn.email=vn.password=vn.number=vn.tel=vn.url=(A,C)=>(typeof C.inputValue=="string"||typeof C.inputValue=="number"?A.value=C.inputValue:$(C.inputValue)||g('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof C.inputValue,'"')),so(A,A,C),la(A,C),A.type=C.input,A),vn.file=(A,C)=>(so(A,A,C),la(A,C),A),vn.range=(A,C)=>{const M=A.querySelector("input"),j=A.querySelector("output");return M.value=C.inputValue,M.type=C.input,j.value=C.inputValue,so(M,A,C),A},vn.select=(A,C)=>{if(A.textContent="",C.inputPlaceholder){const M=document.createElement("option");ye(M,C.inputPlaceholder),M.value="",M.disabled=!0,M.selected=!0,A.appendChild(M)}return so(A,A,C),A},vn.radio=A=>(A.textContent="",A),vn.checkbox=(A,C)=>{const M=je(Se(),"checkbox");M.value="1",M.id=R.checkbox,M.checked=Boolean(C.inputValue);const j=A.querySelector("span");return ye(j,C.inputPlaceholder),A},vn.textarea=(A,C)=>{A.value=C.inputValue,la(A,C),so(A,A,C);const M=j=>parseInt(window.getComputedStyle(j).marginLeft)+parseInt(window.getComputedStyle(j).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const j=parseInt(window.getComputedStyle(Se()).width),ge=()=>{const He=A.offsetWidth+M(A);He>j?Se().style.width="".concat(He,"px"):Se().style.width=null};new MutationObserver(ge).observe(A,{attributes:!0,attributeFilter:["style"]})}}),A};const yu=(A,C)=>{const M=et();he(M,C,"htmlContainer"),C.html?(Lo(C.html,M),We(M,"block")):C.text?(M.textContent=C.text,We(M,"block")):dt(M),wu(A,C)},Jr=(A,C)=>{const M=rt();ro(M,C.footer),C.footer&&Lo(C.footer,M),he(M,C,"footer")},xu=(A,C)=>{const M=Oe();ye(M,C.closeButtonHtml),he(M,C,"closeButton"),ro(M,C.showCloseButton),M.setAttribute("aria-label",C.closeButtonAriaLabel)},Eu=(A,C)=>{const M=tt.innerParams.get(A),j=Ue();if(M&&C.icon===M.icon){Rl(j,C),Ol(j,C);return}if(!C.icon&&!C.iconHtml)return dt(j);if(C.icon&&Object.keys(xe).indexOf(C.icon)===-1)return _('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(C.icon,'"')),dt(j);We(j),Rl(j,C),Ol(j,C),Ae(j,C.showClass.icon)},Ol=(A,C)=>{for(const M in xe)C.icon!==M&&$e(A,xe[M]);Ae(A,xe[C.icon]),Si(A,C),Su(),he(A,C,"icon")},Su=()=>{const A=Se(),C=window.getComputedStyle(A).getPropertyValue("background-color"),M=A.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let j=0;j<M.length;j++)M[j].style.backgroundColor=C},Ei=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Xr=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Rl=(A,C)=>{A.textContent="",C.iconHtml?ye(A,Di(C.iconHtml)):C.icon==="success"?ye(A,Ei):C.icon==="error"?ye(A,Xr):ye(A,Di({question:"?",warning:"!",info:"i"}[C.icon]))},Si=(A,C)=>{if(!!C.iconColor){A.style.color=C.iconColor,A.style.borderColor=C.iconColor;for(const M of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Tn(A,M,"backgroundColor",C.iconColor);Tn(A,".swal2-success-ring","borderColor",C.iconColor)}},Di=A=>'<div class="'.concat(R["icon-content"],'">').concat(A,"</div>"),Du=(A,C)=>{const M=ze();if(!C.imageUrl)return dt(M);We(M,""),M.setAttribute("src",C.imageUrl),M.setAttribute("alt",C.imageAlt),Qe(M,"width",C.imageWidth),Qe(M,"height",C.imageHeight),M.className=R.image,he(M,C,"image")},es=A=>{const C=document.createElement("li");return Ae(C,R["progress-step"]),ye(C,A),C},da=A=>{const C=document.createElement("li");return Ae(C,R["progress-step-line"]),A.progressStepsDistance&&(C.style.width=A.progressStepsDistance),C},Tu=(A,C)=>{const M=Fe();if(!C.progressSteps||C.progressSteps.length===0)return dt(M);We(M),M.textContent="",C.currentProgressStep>=C.progressSteps.length&&g("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),C.progressSteps.forEach((j,ge)=>{const He=es(j);if(M.appendChild(He),ge===C.currentProgressStep&&Ae(He,R["active-progress-step"]),ge!==C.progressSteps.length-1){const qt=da(C);M.appendChild(qt)}})},ua=(A,C)=>{const M=ht();ro(M,C.title||C.titleText,"block"),C.title&&Lo(C.title,M),C.titleText&&(M.innerText=C.titleText),he(M,C,"title")},Ti=(A,C)=>{const M=me(),j=Se();C.toast?(Qe(M,"width",C.width),j.style.width="100%",j.insertBefore(de(),Ue())):Qe(j,"width",C.width),Qe(j,"padding",C.padding),C.color&&(j.style.color=C.color),C.background&&(j.style.background=C.background),dt(qe()),Iu(j,C)},Iu=(A,C)=>{A.className="".concat(R.popup," ").concat(Ut(A)?C.showClass.popup:""),C.toast?(Ae([document.documentElement,document.body],R["toast-shown"]),Ae(A,R.toast)):Ae(A,R.modal),he(A,C,"popup"),typeof C.customClass=="string"&&Ae(A,C.customClass),C.icon&&Ae(A,R["icon-".concat(C.icon)])},ha=(A,C)=>{Ti(A,C),ur(A,C),Tu(A,C),Eu(A,C),Du(A,C),ua(A,C),xu(A,C),yu(A,C),Zr(A,C),Jr(A,C),typeof C.didRender=="function"&&C.didRender(Se())},ti=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Mu=()=>{b(document.body.children).forEach(C=>{C===me()||C.contains(me())||(C.hasAttribute("aria-hidden")&&C.setAttribute("data-previous-aria-hidden",C.getAttribute("aria-hidden")),C.setAttribute("aria-hidden","true"))})},zl=()=>{b(document.body.children).forEach(C=>{C.hasAttribute("data-previous-aria-hidden")?(C.setAttribute("aria-hidden",C.getAttribute("data-previous-aria-hidden")),C.removeAttribute("data-previous-aria-hidden")):C.removeAttribute("aria-hidden")})},ts=["swal-title","swal-html","swal-footer"],gn=A=>{const C=typeof A.template=="string"?document.querySelector(A.template):A.template;if(!C)return{};const M=C.content;return fa(M),Object.assign(Pu(M),jl(M),Fl(M),Vl(M),hr(M),Bu(M,ts))},Pu=A=>{const C={};return b(A.querySelectorAll("swal-param")).forEach(M=>{Oo(M,["name","value"]);const j=M.getAttribute("name"),ge=M.getAttribute("value");typeof le[j]=="boolean"&&ge==="false"&&(C[j]=!1),typeof le[j]=="object"&&(C[j]=JSON.parse(ge))}),C},jl=A=>{const C={};return b(A.querySelectorAll("swal-button")).forEach(M=>{Oo(M,["type","color","aria-label"]);const j=M.getAttribute("type");C["".concat(j,"ButtonText")]=M.innerHTML,C["show".concat(f(j),"Button")]=!0,M.hasAttribute("color")&&(C["".concat(j,"ButtonColor")]=M.getAttribute("color")),M.hasAttribute("aria-label")&&(C["".concat(j,"ButtonAriaLabel")]=M.getAttribute("aria-label"))}),C},Fl=A=>{const C={},M=A.querySelector("swal-image");return M&&(Oo(M,["src","width","height","alt"]),M.hasAttribute("src")&&(C.imageUrl=M.getAttribute("src")),M.hasAttribute("width")&&(C.imageWidth=M.getAttribute("width")),M.hasAttribute("height")&&(C.imageHeight=M.getAttribute("height")),M.hasAttribute("alt")&&(C.imageAlt=M.getAttribute("alt"))),C},Vl=A=>{const C={},M=A.querySelector("swal-icon");return M&&(Oo(M,["type","color"]),M.hasAttribute("type")&&(C.icon=M.getAttribute("type")),M.hasAttribute("color")&&(C.iconColor=M.getAttribute("color")),C.iconHtml=M.innerHTML),C},hr=A=>{const C={},M=A.querySelector("swal-input");M&&(Oo(M,["type","label","placeholder","value"]),C.input=M.getAttribute("type")||"text",M.hasAttribute("label")&&(C.inputLabel=M.getAttribute("label")),M.hasAttribute("placeholder")&&(C.inputPlaceholder=M.getAttribute("placeholder")),M.hasAttribute("value")&&(C.inputValue=M.getAttribute("value")));const j=A.querySelectorAll("swal-input-option");return j.length&&(C.inputOptions={},b(j).forEach(ge=>{Oo(ge,["value"]);const He=ge.getAttribute("value"),qt=ge.innerHTML;C.inputOptions[He]=qt})),C},Bu=(A,C)=>{const M={};for(const j in C){const ge=C[j],He=A.querySelector(ge);He&&(Oo(He,[]),M[ge.replace(/^swal-/,"")]=He.innerHTML.trim())}return M},fa=A=>{const C=ts.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);b(A.children).forEach(M=>{const j=M.tagName.toLowerCase();C.indexOf(j)===-1&&g("Unrecognized element <".concat(j,">"))})},Oo=(A,C)=>{b(A.attributes).forEach(M=>{C.indexOf(M.name)===-1&&g(['Unrecognized attribute "'.concat(M.name,'" on <').concat(A.tagName.toLowerCase(),">."),"".concat(C.length?"Allowed attributes are: ".concat(C.join(", ")):"To set the value, use HTML within the element.")])})};var Et={email:(A,C)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(A)?Promise.resolve():Promise.resolve(C||"Invalid email address"),url:(A,C)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(A)?Promise.resolve():Promise.resolve(C||"Invalid URL")};function Nu(A){A.inputValidator||Object.keys(Et).forEach(C=>{A.input===C&&(A.inputValidator=Et[C])})}function pa(A){(!A.target||typeof A.target=="string"&&!document.querySelector(A.target)||typeof A.target!="string"&&!A.target.appendChild)&&(g('Target parameter is not valid, defaulting to "body"'),A.target="body")}function $l(A){Nu(A),A.showLoaderOnConfirm&&!A.preConfirm&&g(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),pa(A),typeof A.title=="string"&&(A.title=A.title.split(`
`).join("<br />")),Ci(A)}class fr{constructor(C,M){this.callback=C,this.remaining=M,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(C){const M=this.running;return M&&this.stop(),this.remaining+=C,M&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const ga=()=>{ke.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(ke.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(ke.previousBodyPadding+xi(),"px"))},Ii=()=>{ke.previousBodyPadding!==null&&(document.body.style.paddingRight="".concat(ke.previousBodyPadding,"px"),ke.previousBodyPadding=null)},Hl=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!_e(document.body,R.iosfix)){const C=document.body.scrollTop;document.body.style.top="".concat(C*-1,"px"),Ae(document.body,R.iosfix),Lu(),ma()}},ma=()=>{const A=navigator.userAgent,C=!!A.match(/iPad/i)||!!A.match(/iPhone/i),M=!!A.match(/WebKit/i);C&&M&&!A.match(/CriOS/i)&&Se().scrollHeight>window.innerHeight-44&&(me().style.paddingBottom="".concat(44,"px"))},Lu=()=>{const A=me();let C;A.ontouchstart=M=>{C=Ul(M)},A.ontouchmove=M=>{C&&(M.preventDefault(),M.stopPropagation())}},Ul=A=>{const C=A.target,M=me();return Ou(A)||ba(A)?!1:C===M||!Dt(M)&&C.tagName!=="INPUT"&&C.tagName!=="TEXTAREA"&&!(Dt(et())&&et().contains(C))},Ou=A=>A.touches&&A.touches.length&&A.touches[0].touchType==="stylus",ba=A=>A.touches&&A.touches.length>1,Ru=()=>{if(_e(document.body,R.iosfix)){const A=parseInt(document.body.style.top,10);$e(document.body,R.iosfix),document.body.style.top="",document.body.scrollTop=A*-1}},ql=10,zu=A=>{const C=me(),M=Se();typeof A.willOpen=="function"&&A.willOpen(M);const ge=window.getComputedStyle(document.body).overflowY;Fu(C,M,A),setTimeout(()=>{ka(C,M)},ql),X()&&(ju(C,A.scrollbarPadding,ge),Mu()),!ce()&&!Ge.previousActiveElement&&(Ge.previousActiveElement=document.activeElement),typeof A.didOpen=="function"&&setTimeout(()=>A.didOpen(M)),$e(C,R["no-transition"])},pr=A=>{const C=Se();if(A.target!==C)return;const M=me();C.removeEventListener(Xo,pr),M.style.overflowY="auto"},ka=(A,C)=>{Xo&&Ft(C)?(A.style.overflowY="hidden",C.addEventListener(Xo,pr)):A.style.overflowY="auto"},ju=(A,C,M)=>{Hl(),C&&M!=="hidden"&&ga(),setTimeout(()=>{A.scrollTop=0})},Fu=(A,C,M)=>{Ae(A,M.showClass.backdrop),C.style.setProperty("opacity","0","important"),We(C,"grid"),setTimeout(()=>{Ae(C,M.showClass.popup),C.style.removeProperty("opacity")},ql),Ae([document.documentElement,document.body],R.shown),M.heightAuto&&M.backdrop&&!M.toast&&Ae([document.documentElement,document.body],R["height-auto"])},Mi=A=>{let C=Se();C||new rs,C=Se();const M=de();ce()?dt(Ue()):Vu(C,A),We(M),C.setAttribute("data-loading",!0),C.setAttribute("aria-busy",!0),C.focus()},Vu=(A,C)=>{const M=ne(),j=de();!C&&Ut(ut())&&(C=ut()),We(M),C&&(dt(C),j.setAttribute("data-button-to-replace",C.className)),j.parentNode.insertBefore(j,C),Ae([A,M],R.loading)},Pi=(A,C)=>{C.input==="select"||C.input==="radio"?Yl(A,C):["text","email","number","tel","textarea"].includes(C.input)&&(v(C.inputValue)||$(C.inputValue))&&(Mi(ut()),Ql(A,C))},$u=(A,C)=>{const M=A.getInput();if(!M)return null;switch(C.input){case"checkbox":return Wl(M);case"radio":return Gl(M);case"file":return Kl(M);default:return C.inputAutoTrim?M.value.trim():M.value}},Wl=A=>A.checked?1:0,Gl=A=>A.checked?A.value:null,Kl=A=>A.files.length?A.getAttribute("multiple")!==null?A.files:A.files[0]:null,Yl=(A,C)=>{const M=Se(),j=ge=>Zl[C.input](M,wa(ge),C);v(C.inputOptions)||$(C.inputOptions)?(Mi(ut()),I(C.inputOptions).then(ge=>{A.hideLoading(),j(ge)})):typeof C.inputOptions=="object"?j(C.inputOptions):_("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof C.inputOptions))},Ql=(A,C)=>{const M=A.getInput();dt(M),I(C.inputValue).then(j=>{M.value=C.input==="number"?parseFloat(j)||0:"".concat(j),We(M),M.focus(),A.hideLoading()}).catch(j=>{_("Error in inputValue promise: ".concat(j)),M.value="",We(M),M.focus(),A.hideLoading()})},Zl={select:(A,C,M)=>{const j=st(A,R.select),ge=(He,qt,Mn)=>{const nn=document.createElement("option");nn.value=Mn,ye(nn,qt),nn.selected=_a(Mn,M.inputValue),He.appendChild(nn)};C.forEach(He=>{const qt=He[0],Mn=He[1];if(Array.isArray(Mn)){const nn=document.createElement("optgroup");nn.label=qt,nn.disabled=!1,j.appendChild(nn),Mn.forEach(ri=>ge(nn,ri[1],ri[0]))}else ge(j,Mn,qt)}),j.focus()},radio:(A,C,M)=>{const j=st(A,R.radio);C.forEach(He=>{const qt=He[0],Mn=He[1],nn=document.createElement("input"),ri=document.createElement("label");nn.type="radio",nn.name=R.radio,nn.value=qt,_a(qt,M.inputValue)&&(nn.checked=!0);const ss=document.createElement("span");ye(ss,Mn),ss.className=R.label,ri.appendChild(nn),ri.appendChild(ss),j.appendChild(ri)});const ge=j.querySelectorAll("input");ge.length&&ge[0].focus()}},wa=A=>{const C=[];return typeof Map!="undefined"&&A instanceof Map?A.forEach((M,j)=>{let ge=M;typeof ge=="object"&&(ge=wa(ge)),C.push([j,ge])}):Object.keys(A).forEach(M=>{let j=A[M];typeof j=="object"&&(j=wa(j)),C.push([M,j])}),C},_a=(A,C)=>C&&C.toString()===A.toString(),Hu=A=>{const C=tt.innerParams.get(A);A.disableButtons(),C.input?Xl(A,"confirm"):gr(A,!0)},Jl=A=>{const C=tt.innerParams.get(A);A.disableButtons(),C.returnInputValueOnDeny?Xl(A,"deny"):ns(A,!1)},va=(A,C)=>{A.disableButtons(),C(ti.cancel)},Xl=(A,C)=>{const M=tt.innerParams.get(A);if(!M.input)return _('The "input" parameter is needed to be set when using returnInputValueOn'.concat(f(C)));const j=$u(A,M);M.inputValidator?ec(A,j,C):A.getInput().checkValidity()?C==="deny"?ns(A,j):gr(A,j):(A.enableButtons(),A.showValidationMessage(M.validationMessage))},ec=(A,C,M)=>{const j=tt.innerParams.get(A);A.disableInput(),Promise.resolve().then(()=>I(j.inputValidator(C,j.validationMessage))).then(He=>{A.enableButtons(),A.enableInput(),He?A.showValidationMessage(He):M==="deny"?ns(A,C):gr(A,C)})},ns=(A,C)=>{const M=tt.innerParams.get(A||void 0);M.showLoaderOnDeny&&Mi(L()),M.preDeny?(tt.awaitingPromise.set(A||void 0,!0),Promise.resolve().then(()=>I(M.preDeny(C,M.validationMessage))).then(ge=>{ge===!1?A.hideLoading():A.closePopup({isDenied:!0,value:typeof ge=="undefined"?C:ge})}).catch(ge=>Aa(A||void 0,ge))):A.closePopup({isDenied:!0,value:C})},tc=(A,C)=>{A.closePopup({isConfirmed:!0,value:C})},Aa=(A,C)=>{A.rejectPromise(C)},gr=(A,C)=>{const M=tt.innerParams.get(A||void 0);M.showLoaderOnConfirm&&Mi(),M.preConfirm?(A.resetValidationMessage(),tt.awaitingPromise.set(A||void 0,!0),Promise.resolve().then(()=>I(M.preConfirm(C,M.validationMessage))).then(ge=>{Ut(qe())||ge===!1?A.hideLoading():tc(A,typeof ge=="undefined"?C:ge)}).catch(ge=>Aa(A||void 0,ge))):tc(A,C)},Uu=(A,C,M)=>{tt.innerParams.get(A).toast?Ca(A,C,M):(xa(C),nc(C),oc(A,C,M))},Ca=(A,C,M)=>{C.popup.onclick=()=>{const j=tt.innerParams.get(A);j&&(ya(j)||j.timer||j.input)||M(ti.close)}},ya=A=>A.showConfirmButton||A.showDenyButton||A.showCancelButton||A.showCloseButton;let Bi=!1;const xa=A=>{A.popup.onmousedown=()=>{A.container.onmouseup=function(C){A.container.onmouseup=void 0,C.target===A.container&&(Bi=!0)}}},nc=A=>{A.container.onmousedown=()=>{A.popup.onmouseup=function(C){A.popup.onmouseup=void 0,(C.target===A.popup||A.popup.contains(C.target))&&(Bi=!0)}}},oc=(A,C,M)=>{C.container.onclick=j=>{const ge=tt.innerParams.get(A);if(Bi){Bi=!1;return}j.target===C.container&&D(ge.allowOutsideClick)&&M(ti.backdrop)}},ic=()=>Ut(Se()),Ea=()=>ut()&&ut().click(),rc=()=>L()&&L().click(),qu=()=>se()&&se().click(),Wu=(A,C,M,j)=>{C.keydownTarget&&C.keydownHandlerAdded&&(C.keydownTarget.removeEventListener("keydown",C.keydownHandler,{capture:C.keydownListenerCapture}),C.keydownHandlerAdded=!1),M.toast||(C.keydownHandler=ge=>ni(A,ge,j),C.keydownTarget=M.keydownListenerCapture?window:Se(),C.keydownListenerCapture=M.keydownListenerCapture,C.keydownTarget.addEventListener("keydown",C.keydownHandler,{capture:C.keydownListenerCapture}),C.keydownHandlerAdded=!0)},Sa=(A,C,M)=>{const j=U();if(j.length)return C=C+M,C===j.length?C=0:C===-1&&(C=j.length-1),j[C].focus();Se().focus()},sc=["ArrowRight","ArrowDown"],Gu=["ArrowLeft","ArrowUp"],ni=(A,C,M)=>{const j=tt.innerParams.get(A);!j||(j.stopKeydownPropagation&&C.stopPropagation(),C.key==="Enter"?mr(A,C,j):C.key==="Tab"?Ku(C,j):[...sc,...Gu].includes(C.key)?Yu(C.key):C.key==="Escape"&&os(C,j,M))},mr=(A,C,M)=>{if(!(!D(M.allowEnterKey)||C.isComposing)&&C.target&&A.getInput()&&C.target.outerHTML===A.getInput().outerHTML){if(["textarea","file"].includes(M.input))return;Ea(),C.preventDefault()}},Ku=(A,C)=>{const M=A.target,j=U();let ge=-1;for(let He=0;He<j.length;He++)if(M===j[He]){ge=He;break}A.shiftKey?Sa(C,ge,-1):Sa(C,ge,1),A.stopPropagation(),A.preventDefault()},Yu=A=>{const C=ut(),M=L(),j=se();if(![C,M,j].includes(document.activeElement))return;const ge=sc.includes(A)?"nextElementSibling":"previousElementSibling",He=document.activeElement[ge];He instanceof HTMLElement&&He.focus()},os=(A,C,M)=>{D(C.allowEscapeKey)&&(A.preventDefault(),M(ti.esc))},Da=A=>typeof A=="object"&&A.jquery,ac=A=>A instanceof Element||Da(A),Qu=A=>{const C={};return typeof A[0]=="object"&&!ac(A[0])?Object.assign(C,A[0]):["title","html","icon"].forEach((M,j)=>{const ge=A[j];typeof ge=="string"||ac(ge)?C[M]=ge:ge!==void 0&&_("Unexpected type of ".concat(M,'! Expected "string" or "Element", got ').concat(typeof ge))}),C};function Zu(){const A=this;for(var C=arguments.length,M=new Array(C),j=0;j<C;j++)M[j]=arguments[j];return new A(...M)}function lc(A){class C extends this{_main(j,ge){return super._main(j,Object.assign({},A,ge))}}return C}const cc=()=>Ge.timeout&&Ge.timeout.getTimerLeft(),dc=()=>{if(Ge.timeout)return oa(),Ge.timeout.stop()},Ta=()=>{if(Ge.timeout){const A=Ge.timeout.start();return In(A),A}},Ju=()=>{const A=Ge.timeout;return A&&(A.running?dc():Ta())},uc=A=>{if(Ge.timeout){const C=Ge.timeout.increase(A);return In(C,!0),C}},Xu=()=>Ge.timeout&&Ge.timeout.isRunning();let Ia=!1;const Ma={};function hc(){let A=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";Ma[A]=this,Ia||(document.body.addEventListener("click",eh),Ia=!0)}const eh=A=>{for(let C=A.target;C&&C!==document;C=C.parentNode)for(const M in Ma){const j=C.getAttribute(M);if(j){Ma[M].fire({template:j});return}}};var th=Object.freeze({isValidParameter:W,isUpdatableParameter:te,isDeprecatedParameter:ie,argsToParams:Qu,isVisible:ic,clickConfirm:Ea,clickDeny:rc,clickCancel:qu,getContainer:me,getPopup:Se,getTitle:ht,getHtmlContainer:et,getImage:ze,getIcon:Ue,getInputLabel:re,getCloseButton:Oe,getActions:ne,getConfirmButton:ut,getDenyButton:L,getCancelButton:se,getLoader:de,getFooter:rt,getTimerProgressBar:Ee,getFocusableElements:U,getValidationMessage:qe,isLoading:ue,fire:Zu,mixin:lc,showLoading:Mi,enableLoading:Mi,getTimerLeft:cc,stopTimer:dc,resumeTimer:Ta,toggleTimer:Ju,increaseTimer:uc,isTimerRunning:Xu,bindClickHandler:hc});function Pa(){const A=tt.innerParams.get(this);if(!A)return;const C=tt.domCache.get(this);dt(C.loader),ce()?A.icon&&We(Ue()):nh(C),$e([C.popup,C.actions],R.loading),C.popup.removeAttribute("aria-busy"),C.popup.removeAttribute("data-loading"),C.confirmButton.disabled=!1,C.denyButton.disabled=!1,C.cancelButton.disabled=!1}const nh=A=>{const C=A.popup.getElementsByClassName(A.loader.getAttribute("data-button-to-replace"));C.length?We(C[0],"inline-block"):Qt()&&dt(A.actions)};function fc(A){const C=tt.innerParams.get(A||this),M=tt.domCache.get(A||this);return M?je(M.popup,C.input):null}var Ni={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};function pc(A,C,M,j){ce()?On(A,j):(No(M).then(()=>On(A,j)),Ge.keydownTarget.removeEventListener("keydown",Ge.keydownHandler,{capture:Ge.keydownListenerCapture}),Ge.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(C.setAttribute("style","display:none !important"),C.removeAttribute("class"),C.innerHTML=""):C.remove(),X()&&(Ii(),Ru(),zl()),St()}function St(){$e([document.documentElement,document.body],[R.shown,R["height-auto"],R["no-backdrop"],R["toast-shown"]])}function Li(A){A=oh(A);const C=Ni.swalPromiseResolve.get(this),M=oi(this);this.isAwaitingPromise()?A.isDismissed||(Ba(this),C(A)):M&&C(A)}function gc(){return!!tt.awaitingPromise.get(this)}const oi=A=>{const C=Se();if(!C)return!1;const M=tt.innerParams.get(A);if(!M||_e(C,M.hideClass.popup))return!1;$e(C,M.showClass.popup),Ae(C,M.hideClass.popup);const j=me();return $e(j,M.showClass.backdrop),Ae(j,M.hideClass.backdrop),Ln(A,C,M),!0};function mc(A){const C=Ni.swalPromiseReject.get(this);Ba(this),C&&C(A)}const Ba=A=>{A.isAwaitingPromise()&&(tt.awaitingPromise.delete(A),tt.innerParams.get(A)||A._destroy())},oh=A=>typeof A=="undefined"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},A),Ln=(A,C,M)=>{const j=me(),ge=Xo&&Ft(C);typeof M.willClose=="function"&&M.willClose(C),ge?bc(A,C,j,M.returnFocus,M.didClose):pc(A,j,M.returnFocus,M.didClose)},bc=(A,C,M,j,ge)=>{Ge.swalCloseEventFinishedCallback=pc.bind(null,A,M,j,ge),C.addEventListener(Xo,function(He){He.target===C&&(Ge.swalCloseEventFinishedCallback(),delete Ge.swalCloseEventFinishedCallback)})},On=(A,C)=>{setTimeout(()=>{typeof C=="function"&&C.bind(A.params)(),A._destroy()})};function is(A,C,M){const j=tt.domCache.get(A);C.forEach(ge=>{j[ge].disabled=M})}function Jt(A,C){if(!A)return!1;if(A.type==="radio"){const j=A.parentNode.parentNode.querySelectorAll("input");for(let ge=0;ge<j.length;ge++)j[ge].disabled=C}else A.disabled=C}function ih(){is(this,["confirmButton","denyButton","cancelButton"],!1)}function rh(){is(this,["confirmButton","denyButton","cancelButton"],!0)}function kc(){return Jt(this.getInput(),!1)}function sh(){return Jt(this.getInput(),!0)}function ah(A){const C=tt.domCache.get(this),M=tt.innerParams.get(this);ye(C.validationMessage,A),C.validationMessage.className=R["validation-message"],M.customClass&&M.customClass.validationMessage&&Ae(C.validationMessage,M.customClass.validationMessage),We(C.validationMessage);const j=this.getInput();j&&(j.setAttribute("aria-invalid",!0),j.setAttribute("aria-describedby",R["validation-message"]),Te(j),Ae(j,R.inputerror))}function br(){const A=tt.domCache.get(this);A.validationMessage&&dt(A.validationMessage);const C=this.getInput();C&&(C.removeAttribute("aria-invalid"),C.removeAttribute("aria-describedby"),$e(C,R.inputerror))}function cn(){return tt.domCache.get(this).progressSteps}function wc(A){const C=Se(),M=tt.innerParams.get(this);if(!C||_e(C,M.hideClass.popup))return g("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const j=ii(A),ge=Object.assign({},M,j);ha(this,ge),tt.innerParams.set(this,ge),Object.defineProperties(this,{params:{value:Object.assign({},this.params,A),writable:!1,enumerable:!0}})}const ii=A=>{const C={};return Object.keys(A).forEach(M=>{te(M)?C[M]=A[M]:g('Invalid parameter to update: "'.concat(M,`". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js

If you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md`))}),C};function wt(){const A=tt.domCache.get(this),C=tt.innerParams.get(this);if(!C){Gn(this);return}A.popup&&Ge.swalCloseEventFinishedCallback&&(Ge.swalCloseEventFinishedCallback(),delete Ge.swalCloseEventFinishedCallback),Ge.deferDisposalTimer&&(clearTimeout(Ge.deferDisposalTimer),delete Ge.deferDisposalTimer),typeof C.didDestroy=="function"&&C.didDestroy(),_o(this)}const _o=A=>{Gn(A),delete A.params,delete Ge.keydownHandler,delete Ge.keydownTarget,delete Ge.currentInstance},Gn=A=>{A.isAwaitingPromise()?(Rn(tt,A),tt.awaitingPromise.set(A,!0)):(Rn(Ni,A),Rn(tt,A))},Rn=(A,C)=>{for(const M in A)A[M].delete(C)};var Na=Object.freeze({hideLoading:Pa,disableLoading:Pa,getInput:fc,close:Li,isAwaitingPromise:gc,rejectPromise:mc,closePopup:Li,closeModal:Li,closeToast:Li,enableButtons:ih,disableButtons:rh,enableInput:kc,disableInput:sh,showValidationMessage:ah,resetValidationMessage:br,getProgressSteps:cn,update:wc,_destroy:wt});let kr;class vo{constructor(){if(typeof window=="undefined")return;kr=this;for(var C=arguments.length,M=new Array(C),j=0;j<C;j++)M[j]=arguments[j];const ge=Object.freeze(this.constructor.argsToParams(M));Object.defineProperties(this,{params:{value:ge,writable:!1,enumerable:!0,configurable:!0}});const He=this._main(this.params);tt.promise.set(this,He)}_main(C){let M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Z(Object.assign({},M,C)),Ge.currentInstance&&(Ge.currentInstance._destroy(),X()&&zl()),Ge.currentInstance=this;const j=ch(C,M);$l(j),Object.freeze(j),Ge.timeout&&(Ge.timeout.stop(),delete Ge.timeout),clearTimeout(Ge.restoreFocusTimeout);const ge=dh(this);return ha(this,j),tt.innerParams.set(this,j),lh(this,ge,j)}then(C){return tt.promise.get(this).then(C)}finally(C){return tt.promise.get(this).finally(C)}}const lh=(A,C,M)=>new Promise((j,ge)=>{const He=qt=>{A.closePopup({isDismissed:!0,dismiss:qt})};Ni.swalPromiseResolve.set(A,j),Ni.swalPromiseReject.set(A,ge),C.confirmButton.onclick=()=>Hu(A),C.denyButton.onclick=()=>Jl(A),C.cancelButton.onclick=()=>va(A,He),C.closeButton.onclick=()=>He(ti.close),Uu(A,C,He),Wu(A,Ge,M,He),Pi(A,M),zu(M),La(Ge,M,He),uh(C,M),setTimeout(()=>{C.container.scrollTop=0})}),ch=(A,C)=>{const M=gn(A),j=Object.assign({},le,C,M,A);return j.showClass=Object.assign({},le.showClass,j.showClass),j.hideClass=Object.assign({},le.hideClass,j.hideClass),j},dh=A=>{const C={popup:Se(),container:me(),actions:ne(),confirmButton:ut(),denyButton:L(),cancelButton:se(),loader:de(),closeButton:Oe(),validationMessage:qe(),progressSteps:Fe()};return tt.domCache.set(A,C),C},La=(A,C,M)=>{const j=Ee();dt(j),C.timer&&(A.timeout=new fr(()=>{M("timer"),delete A.timeout},C.timer),C.timerProgressBar&&(We(j),he(j,C,"timerProgressBar"),setTimeout(()=>{A.timeout&&A.timeout.running&&In(C.timer)})))},uh=(A,C)=>{if(!C.toast){if(!D(C.allowEnterKey))return fh();hh(A,C)||Sa(C,-1,1)}},hh=(A,C)=>C.focusDeny&&Ut(A.denyButton)?(A.denyButton.focus(),!0):C.focusCancel&&Ut(A.cancelButton)?(A.cancelButton.focus(),!0):C.focusConfirm&&Ut(A.confirmButton)?(A.confirmButton.focus(),!0):!1,fh=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};Object.assign(vo.prototype,Na),Object.assign(vo,th),Object.keys(Na).forEach(A=>{vo[A]=function(){if(kr)return kr[A](...arguments)}}),vo.DismissReason=ti,vo.version="11.4.0";const rs=vo;return rs.default=rs,rs}),typeof Wi!="undefined"&&Wi.Sweetalert2&&(Wi.swal=Wi.sweetAlert=Wi.Swal=Wi.SweetAlert=Wi.Sweetalert2)})(Zy);var kd=Zy.exports;class tV{static install(a,c={}){var u;const f=kd.mixin(c),b=function(...g){return f.fire.call(f,...g)};Object.assign(b,kd),Object.keys(kd).filter(g=>typeof kd[g]=="function").forEach(g=>{b[g]=f[g].bind(f)}),((u=a.config)==null?void 0:u.globalProperties)&&!a.config.globalProperties.$swal?(a.config.globalProperties.$swal=b,a.provide("$swal",b)):Object.prototype.hasOwnProperty.call(a,"$swal")||(a.prototype.$swal=b,a.swal=b)}}const p0=jy("App",{web:()=>Ry(()=>import("./web.82321692.js"),[]).then(r=>new r.AppWeb)});p0.addListener("backButton",({canGoBack:r})=>{r?window.history.back():p0.exitApp()});const nV=qP(),na=GC(V6);na.component("select2",eV);na.use(tV);na.use(nV);na.use(wg.exports.CKEditor);na.use(en);na.mount("#app");export{iV as W};