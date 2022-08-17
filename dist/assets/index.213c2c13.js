const GT=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const k of m.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function d(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerpolicy&&(m.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?m.credentials="include":g.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(g){if(g.ep)return;g.ep=!0;const m=d(g);fetch(g.href,m)}};GT();function yc(r,c){const d=Object.create(null),h=r.split(",");for(let g=0;g<h.length;g++)d[h[g]]=!0;return c?g=>!!d[g.toLowerCase()]:g=>!!d[g]}const KT="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",YT=yc(KT),QT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ZT=yc(QT);function bA(r){return!!r||r===""}function qs(r){if(Ae(r)){const c={};for(let d=0;d<r.length;d++){const h=r[d],g=wt(h)?eI(h):qs(h);if(g)for(const m in g)c[m]=g[m]}return c}else{if(wt(r))return r;if(vt(r))return r}}const JT=/;(?![^(]*\))/g,XT=/:(.+)/;function eI(r){const c={};return r.split(JT).forEach(d=>{if(d){const h=d.split(XT);h.length>1&&(c[h[0].trim()]=h[1].trim())}}),c}function Zt(r){let c="";if(wt(r))c=r;else if(Ae(r))for(let d=0;d<r.length;d++){const h=Zt(r[d]);h&&(c+=h+" ")}else if(vt(r))for(const d in r)r[d]&&(c+=d+" ");return c.trim()}function tI(r){if(!r)return null;let{class:c,style:d}=r;return c&&!wt(c)&&(r.class=Zt(c)),d&&(r.style=qs(d)),r}function nI(r,c){if(r.length!==c.length)return!1;let d=!0;for(let h=0;d&&h<r.length;h++)d=Xo(r[h],c[h]);return d}function Xo(r,c){if(r===c)return!0;let d=e_(r),h=e_(c);if(d||h)return d&&h?r.getTime()===c.getTime():!1;if(d=zs(r),h=zs(c),d||h)return r===c;if(d=Ae(r),h=Ae(c),d||h)return d&&h?nI(r,c):!1;if(d=vt(r),h=vt(c),d||h){if(!d||!h)return!1;const g=Object.keys(r).length,m=Object.keys(c).length;if(g!==m)return!1;for(const k in r){const _=r.hasOwnProperty(k),w=c.hasOwnProperty(k);if(_&&!w||!_&&w||!Xo(r[k],c[k]))return!1}}return String(r)===String(c)}function xc(r,c){return r.findIndex(d=>Xo(d,c))}const Ke=r=>wt(r)?r:r==null?"":Ae(r)||vt(r)&&(r.toString===_A||!Oe(r.toString))?JSON.stringify(r,wA,2):String(r),wA=(r,c)=>c&&c.__v_isRef?wA(r,c.value):Ir(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((d,[h,g])=>(d[`${h} =>`]=g,d),{})}:Fi(c)?{[`Set(${c.size})`]:[...c.values()]}:vt(c)&&!Ae(c)&&!AA(c)?String(c):c,Qe={},Tr=[],zn=()=>{},oI=()=>!1,iI=/^on[^a-z]/,Ws=r=>iI.test(r),Ju=r=>r.startsWith("onUpdate:"),At=Object.assign,Xu=(r,c)=>{const d=r.indexOf(c);d>-1&&r.splice(d,1)},rI=Object.prototype.hasOwnProperty,He=(r,c)=>rI.call(r,c),Ae=Array.isArray,Ir=r=>Gs(r)==="[object Map]",Fi=r=>Gs(r)==="[object Set]",e_=r=>Gs(r)==="[object Date]",Oe=r=>typeof r=="function",wt=r=>typeof r=="string",zs=r=>typeof r=="symbol",vt=r=>r!==null&&typeof r=="object",eh=r=>vt(r)&&Oe(r.then)&&Oe(r.catch),_A=Object.prototype.toString,Gs=r=>_A.call(r),sI=r=>Gs(r).slice(8,-1),AA=r=>Gs(r)==="[object Object]",th=r=>wt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Es=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=r=>{const c=Object.create(null);return d=>c[d]||(c[d]=r(d))},aI=/-(\w)/g,pn=Ec(r=>r.replace(aI,(c,d)=>d?d.toUpperCase():"")),cI=/\B([A-Z])/g,eo=Ec(r=>r.replace(cI,"-$1").toLowerCase()),Ks=Ec(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ds=Ec(r=>r?`on${Ks(r)}`:""),Or=(r,c)=>!Object.is(r,c),Mr=(r,c)=>{for(let d=0;d<r.length;d++)r[d](c)},dc=(r,c,d)=>{Object.defineProperty(r,c,{configurable:!0,enumerable:!1,value:d})},ei=r=>{const c=parseFloat(r);return isNaN(c)?r:c};let t_;const lI=()=>t_||(t_=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let un;class nh{constructor(c=!1){this.active=!0,this.effects=[],this.cleanups=[],!c&&un&&(this.parent=un,this.index=(un.scopes||(un.scopes=[])).push(this)-1)}run(c){if(this.active){const d=un;try{return un=this,c()}finally{un=d}}}on(){un=this}off(){un=this.parent}stop(c){if(this.active){let d,h;for(d=0,h=this.effects.length;d<h;d++)this.effects[d].stop();for(d=0,h=this.cleanups.length;d<h;d++)this.cleanups[d]();if(this.scopes)for(d=0,h=this.scopes.length;d<h;d++)this.scopes[d].stop(!0);if(this.parent&&!c){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function oh(r){return new nh(r)}function vA(r,c=un){c&&c.active&&c.effects.push(r)}function dI(){return un}function uI(r){un&&un.cleanups.push(r)}const ih=r=>{const c=new Set(r);return c.w=0,c.n=0,c},CA=r=>(r.w&ti)>0,yA=r=>(r.n&ti)>0,hI=({deps:r})=>{if(r.length)for(let c=0;c<r.length;c++)r[c].w|=ti},fI=r=>{const{deps:c}=r;if(c.length){let d=0;for(let h=0;h<c.length;h++){const g=c[h];CA(g)&&!yA(g)?g.delete(r):c[d++]=g,g.w&=~ti,g.n&=~ti}c.length=d}},_u=new WeakMap;let Cs=0,ti=1;const Au=30;let Rn;const Ni=Symbol(""),vu=Symbol("");class Ys{constructor(c,d=null,h){this.fn=c,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,vA(this,h)}run(){if(!this.active)return this.fn();let c=Rn,d=Qo;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=Rn,Rn=this,Qo=!0,ti=1<<++Cs,Cs<=Au?hI(this):n_(this),this.fn()}finally{Cs<=Au&&fI(this),ti=1<<--Cs,Rn=this.parent,Qo=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Rn===this?this.deferStop=!0:this.active&&(n_(this),this.onStop&&this.onStop(),this.active=!1)}}function n_(r){const{deps:c}=r;if(c.length){for(let d=0;d<c.length;d++)c[d].delete(r);c.length=0}}function gI(r,c){r.effect&&(r=r.effect.fn);const d=new Ys(r);c&&(At(d,c),c.scope&&vA(d,c.scope)),(!c||!c.lazy)&&d.run();const h=d.run.bind(d);return h.effect=d,h}function pI(r){r.effect.stop()}let Qo=!0;const xA=[];function Vi(){xA.push(Qo),Qo=!1}function Ui(){const r=xA.pop();Qo=r===void 0?!0:r}function mn(r,c,d){if(Qo&&Rn){let h=_u.get(r);h||_u.set(r,h=new Map);let g=h.get(d);g||h.set(d,g=ih()),EA(g)}}function EA(r,c){let d=!1;Cs<=Au?yA(r)||(r.n|=ti,d=!CA(r)):d=!r.has(Rn),d&&(r.add(Rn),Rn.deps.push(r))}function So(r,c,d,h,g,m){const k=_u.get(r);if(!k)return;let _=[];if(c==="clear")_=[...k.values()];else if(d==="length"&&Ae(r))k.forEach((w,y)=>{(y==="length"||y>=h)&&_.push(w)});else switch(d!==void 0&&_.push(k.get(d)),c){case"add":Ae(r)?th(d)&&_.push(k.get("length")):(_.push(k.get(Ni)),Ir(r)&&_.push(k.get(vu)));break;case"delete":Ae(r)||(_.push(k.get(Ni)),Ir(r)&&_.push(k.get(vu)));break;case"set":Ir(r)&&_.push(k.get(Ni));break}if(_.length===1)_[0]&&Cu(_[0]);else{const w=[];for(const y of _)y&&w.push(...y);Cu(ih(w))}}function Cu(r,c){const d=Ae(r)?r:[...r];for(const h of d)h.computed&&o_(h);for(const h of d)h.computed||o_(h)}function o_(r,c){(r!==Rn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const mI=yc("__proto__,__v_isRef,__isVue"),DA=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(zs)),kI=Dc(),bI=Dc(!1,!0),wI=Dc(!0),_I=Dc(!0,!0),i_=AI();function AI(){const r={};return["includes","indexOf","lastIndexOf"].forEach(c=>{r[c]=function(...d){const h=je(this);for(let m=0,k=this.length;m<k;m++)mn(h,"get",m+"");const g=h[c](...d);return g===-1||g===!1?h[c](...d.map(je)):g}}),["push","pop","shift","unshift","splice"].forEach(c=>{r[c]=function(...d){Vi();const h=je(this)[c].apply(this,d);return Ui(),h}}),r}function Dc(r=!1,c=!1){return function(h,g,m){if(g==="__v_isReactive")return!r;if(g==="__v_isReadonly")return r;if(g==="__v_isShallow")return c;if(g==="__v_raw"&&m===(r?c?BA:NA:c?PA:MA).get(h))return h;const k=Ae(h);if(!r&&k&&He(i_,g))return Reflect.get(i_,g,m);const _=Reflect.get(h,g,m);return(zs(g)?DA.has(g):mI(g))||(r||mn(h,"get",g),c)?_:mt(_)?k&&th(g)?_:_.value:vt(_)?r?sh(_):co(_):_}}const vI=SA(),CI=SA(!0);function SA(r=!1){return function(d,h,g,m){let k=d[h];if(Lr(k)&&mt(k)&&!mt(g))return!1;if(!r&&!Lr(g)&&(uc(g)||(g=je(g),k=je(k)),!Ae(d)&&mt(k)&&!mt(g)))return k.value=g,!0;const _=Ae(d)&&th(h)?Number(h)<d.length:He(d,h),w=Reflect.set(d,h,g,m);return d===je(m)&&(_?Or(g,k)&&So(d,"set",h,g):So(d,"add",h,g)),w}}function yI(r,c){const d=He(r,c);r[c];const h=Reflect.deleteProperty(r,c);return h&&d&&So(r,"delete",c,void 0),h}function xI(r,c){const d=Reflect.has(r,c);return(!zs(c)||!DA.has(c))&&mn(r,"has",c),d}function EI(r){return mn(r,"iterate",Ae(r)?"length":Ni),Reflect.ownKeys(r)}const TA={get:kI,set:vI,deleteProperty:yI,has:xI,ownKeys:EI},IA={get:wI,set(r,c){return!0},deleteProperty(r,c){return!0}},DI=At({},TA,{get:bI,set:CI}),SI=At({},IA,{get:_I}),rh=r=>r,Sc=r=>Reflect.getPrototypeOf(r);function $a(r,c,d=!1,h=!1){r=r.__v_raw;const g=je(r),m=je(c);d||(c!==m&&mn(g,"get",c),mn(g,"get",m));const{has:k}=Sc(g),_=h?rh:d?ch:js;if(k.call(g,c))return _(r.get(c));if(k.call(g,m))return _(r.get(m));r!==g&&r.get(c)}function qa(r,c=!1){const d=this.__v_raw,h=je(d),g=je(r);return c||(r!==g&&mn(h,"has",r),mn(h,"has",g)),r===g?d.has(r):d.has(r)||d.has(g)}function Wa(r,c=!1){return r=r.__v_raw,!c&&mn(je(r),"iterate",Ni),Reflect.get(r,"size",r)}function r_(r){r=je(r);const c=je(this);return Sc(c).has.call(c,r)||(c.add(r),So(c,"add",r,r)),this}function s_(r,c){c=je(c);const d=je(this),{has:h,get:g}=Sc(d);let m=h.call(d,r);m||(r=je(r),m=h.call(d,r));const k=g.call(d,r);return d.set(r,c),m?Or(c,k)&&So(d,"set",r,c):So(d,"add",r,c),this}function a_(r){const c=je(this),{has:d,get:h}=Sc(c);let g=d.call(c,r);g||(r=je(r),g=d.call(c,r)),h&&h.call(c,r);const m=c.delete(r);return g&&So(c,"delete",r,void 0),m}function c_(){const r=je(this),c=r.size!==0,d=r.clear();return c&&So(r,"clear",void 0,void 0),d}function Ga(r,c){return function(h,g){const m=this,k=m.__v_raw,_=je(k),w=c?rh:r?ch:js;return!r&&mn(_,"iterate",Ni),k.forEach((y,C)=>h.call(g,w(y),w(C),m))}}function Ka(r,c,d){return function(...h){const g=this.__v_raw,m=je(g),k=Ir(m),_=r==="entries"||r===Symbol.iterator&&k,w=r==="keys"&&k,y=g[r](...h),C=d?rh:c?ch:js;return!c&&mn(m,"iterate",w?vu:Ni),{next(){const{value:x,done:A}=y.next();return A?{value:x,done:A}:{value:_?[C(x[0]),C(x[1])]:C(x),done:A}},[Symbol.iterator](){return this}}}}function zo(r){return function(...c){return r==="delete"?!1:this}}function TI(){const r={get(m){return $a(this,m)},get size(){return Wa(this)},has:qa,add:r_,set:s_,delete:a_,clear:c_,forEach:Ga(!1,!1)},c={get(m){return $a(this,m,!1,!0)},get size(){return Wa(this)},has:qa,add:r_,set:s_,delete:a_,clear:c_,forEach:Ga(!1,!0)},d={get(m){return $a(this,m,!0)},get size(){return Wa(this,!0)},has(m){return qa.call(this,m,!0)},add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear"),forEach:Ga(!0,!1)},h={get(m){return $a(this,m,!0,!0)},get size(){return Wa(this,!0)},has(m){return qa.call(this,m,!0)},add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{r[m]=Ka(m,!1,!1),d[m]=Ka(m,!0,!1),c[m]=Ka(m,!1,!0),h[m]=Ka(m,!0,!0)}),[r,d,c,h]}const[II,MI,PI,NI]=TI();function Tc(r,c){const d=c?r?NI:PI:r?MI:II;return(h,g,m)=>g==="__v_isReactive"?!r:g==="__v_isReadonly"?r:g==="__v_raw"?h:Reflect.get(He(d,g)&&g in h?d:h,g,m)}const BI={get:Tc(!1,!1)},OI={get:Tc(!1,!0)},LI={get:Tc(!0,!1)},RI={get:Tc(!0,!0)},MA=new WeakMap,PA=new WeakMap,NA=new WeakMap,BA=new WeakMap;function zI(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jI(r){return r.__v_skip||!Object.isExtensible(r)?0:zI(sI(r))}function co(r){return Lr(r)?r:Ic(r,!1,TA,BI,MA)}function OA(r){return Ic(r,!1,DI,OI,PA)}function sh(r){return Ic(r,!0,IA,LI,NA)}function FI(r){return Ic(r,!0,SI,RI,BA)}function Ic(r,c,d,h,g){if(!vt(r)||r.__v_raw&&!(c&&r.__v_isReactive))return r;const m=g.get(r);if(m)return m;const k=jI(r);if(k===0)return r;const _=new Proxy(r,k===2?h:d);return g.set(r,_),_}function to(r){return Lr(r)?to(r.__v_raw):!!(r&&r.__v_isReactive)}function Lr(r){return!!(r&&r.__v_isReadonly)}function uc(r){return!!(r&&r.__v_isShallow)}function ah(r){return to(r)||Lr(r)}function je(r){const c=r&&r.__v_raw;return c?je(c):r}function Dn(r){return dc(r,"__v_skip",!0),r}const js=r=>vt(r)?co(r):r,ch=r=>vt(r)?sh(r):r;function lh(r){Qo&&Rn&&(r=je(r),EA(r.dep||(r.dep=ih())))}function Mc(r,c){r=je(r),r.dep&&Cu(r.dep)}function mt(r){return!!(r&&r.__v_isRef===!0)}function jn(r){return RA(r,!1)}function LA(r){return RA(r,!0)}function RA(r,c){return mt(r)?r:new VI(r,c)}class VI{constructor(c,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?c:je(c),this._value=d?c:js(c)}get value(){return lh(this),this._value}set value(c){c=this.__v_isShallow?c:je(c),Or(c,this._rawValue)&&(this._rawValue=c,this._value=this.__v_isShallow?c:js(c),Mc(this))}}function UI(r){Mc(r)}function Se(r){return mt(r)?r.value:r}const HI={get:(r,c,d)=>Se(Reflect.get(r,c,d)),set:(r,c,d,h)=>{const g=r[c];return mt(g)&&!mt(d)?(g.value=d,!0):Reflect.set(r,c,d,h)}};function dh(r){return to(r)?r:new Proxy(r,HI)}class $I{constructor(c){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:h}=c(()=>lh(this),()=>Mc(this));this._get=d,this._set=h}get value(){return this._get()}set value(c){this._set(c)}}function qI(r){return new $I(r)}function yu(r){const c=Ae(r)?new Array(r.length):{};for(const d in r)c[d]=Ss(r,d);return c}class WI{constructor(c,d,h){this._object=c,this._key=d,this._defaultValue=h,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}}function Ss(r,c,d){const h=r[c];return mt(h)?h:new WI(r,c,d)}class GI{constructor(c,d,h,g){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ys(c,()=>{this._dirty||(this._dirty=!0,Mc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=h}get value(){const c=je(this);return lh(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}function KI(r,c,d=!1){let h,g;const m=Oe(r);return m?(h=r,g=zn):(h=r.get,g=r.set),new GI(h,g,m||!g,d)}const Ts=[];function zA(r,...c){Vi();const d=Ts.length?Ts[Ts.length-1].component:null,h=d&&d.appContext.config.warnHandler,g=YI();if(h)no(h,d,11,[r+c.join(""),d&&d.proxy,g.map(({vnode:m})=>`at <${Iv(d,m.type)}>`).join(`
`),g]);else{const m=[`[Vue warn]: ${r}`,...c];g.length&&m.push(`
`,...QI(g)),console.warn(...m)}Ui()}function YI(){let r=Ts[Ts.length-1];if(!r)return[];const c=[];for(;r;){const d=c[0];d&&d.vnode===r?d.recurseCount++:c.push({vnode:r,recurseCount:0});const h=r.component&&r.component.parent;r=h&&h.vnode}return c}function QI(r){const c=[];return r.forEach((d,h)=>{c.push(...h===0?[]:[`
`],...ZI(d))}),c}function ZI({vnode:r,recurseCount:c}){const d=c>0?`... (${c} recursive calls)`:"",h=r.component?r.component.parent==null:!1,g=` at <${Iv(r.component,r.type,h)}`,m=">"+d;return r.props?[g,...JI(r.props),m]:[g+m]}function JI(r){const c=[],d=Object.keys(r);return d.slice(0,3).forEach(h=>{c.push(...jA(h,r[h]))}),d.length>3&&c.push(" ..."),c}function jA(r,c,d){return wt(c)?(c=JSON.stringify(c),d?c:[`${r}=${c}`]):typeof c=="number"||typeof c=="boolean"||c==null?d?c:[`${r}=${c}`]:mt(c)?(c=jA(r,je(c.value),!0),d?c:[`${r}=Ref<`,c,">"]):Oe(c)?[`${r}=fn${c.name?`<${c.name}>`:""}`]:(c=je(c),d?c:[`${r}=`,c])}function no(r,c,d,h){let g;try{g=h?r(...h):r()}catch(m){Hi(m,c,d)}return g}function gn(r,c,d,h){if(Oe(r)){const m=no(r,c,d,h);return m&&eh(m)&&m.catch(k=>{Hi(k,c,d)}),m}const g=[];for(let m=0;m<r.length;m++)g.push(gn(r[m],c,d,h));return g}function Hi(r,c,d,h=!0){const g=c?c.vnode:null;if(c){let m=c.parent;const k=c.proxy,_=d;for(;m;){const y=m.ec;if(y){for(let C=0;C<y.length;C++)if(y[C](r,k,_)===!1)return}m=m.parent}const w=c.appContext.config.errorHandler;if(w){no(w,null,10,[r,k,_]);return}}XI(r,d,g,h)}function XI(r,c,d,h=!0){console.error(r)}let hc=!1,xu=!1;const fn=[];let yo=0;const Is=[];let ys=null,yr=0;const Ms=[];let Ho=null,xr=0;const FA=Promise.resolve();let uh=null,Eu=null;function so(r){const c=uh||FA;return r?c.then(this?r.bind(this):r):c}function eM(r){let c=yo+1,d=fn.length;for(;c<d;){const h=c+d>>>1;Fs(fn[h])<r?c=h+1:d=h}return c}function hh(r){(!fn.length||!fn.includes(r,hc&&r.allowRecurse?yo+1:yo))&&r!==Eu&&(r.id==null?fn.push(r):fn.splice(eM(r.id),0,r),VA())}function VA(){!hc&&!xu&&(xu=!0,uh=FA.then(HA))}function tM(r){const c=fn.indexOf(r);c>yo&&fn.splice(c,1)}function UA(r,c,d,h){Ae(r)?d.push(...r):(!c||!c.includes(r,r.allowRecurse?h+1:h))&&d.push(r),VA()}function nM(r){UA(r,ys,Is,yr)}function fh(r){UA(r,Ho,Ms,xr)}function Pc(r,c=null){if(Is.length){for(Eu=c,ys=[...new Set(Is)],Is.length=0,yr=0;yr<ys.length;yr++)ys[yr]();ys=null,yr=0,Eu=null,Pc(r,c)}}function fc(r){if(Pc(),Ms.length){const c=[...new Set(Ms)];if(Ms.length=0,Ho){Ho.push(...c);return}for(Ho=c,Ho.sort((d,h)=>Fs(d)-Fs(h)),xr=0;xr<Ho.length;xr++)Ho[xr]();Ho=null,xr=0}}const Fs=r=>r.id==null?1/0:r.id;function HA(r){xu=!1,hc=!0,Pc(r),fn.sort((d,h)=>Fs(d)-Fs(h));const c=zn;try{for(yo=0;yo<fn.length;yo++){const d=fn[yo];d&&d.active!==!1&&no(d,null,14)}}finally{yo=0,fn.length=0,fc(),hc=!1,uh=null,(fn.length||Is.length||Ms.length)&&HA(r)}}let Er,Ya=[];function $A(r,c){var d,h;Er=r,Er?(Er.enabled=!0,Ya.forEach(({event:g,args:m})=>Er.emit(g,...m)),Ya=[]):typeof window!="undefined"&&window.HTMLElement&&!(!((h=(d=window.navigator)===null||d===void 0?void 0:d.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((c.__VUE_DEVTOOLS_HOOK_REPLAY__=c.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{$A(m,c)}),setTimeout(()=>{Er||(c.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Ya=[])},3e3)):Ya=[]}function oM(r,c,...d){if(r.isUnmounted)return;const h=r.vnode.props||Qe;let g=d;const m=c.startsWith("update:"),k=m&&c.slice(7);if(k&&k in h){const C=`${k==="modelValue"?"model":k}Modifiers`,{number:x,trim:A}=h[C]||Qe;A&&(g=d.map(T=>T.trim())),x&&(g=d.map(ei))}let _,w=h[_=Ds(c)]||h[_=Ds(pn(c))];!w&&m&&(w=h[_=Ds(eo(c))]),w&&gn(w,r,6,g);const y=h[_+"Once"];if(y){if(!r.emitted)r.emitted={};else if(r.emitted[_])return;r.emitted[_]=!0,gn(y,r,6,g)}}function qA(r,c,d=!1){const h=c.emitsCache,g=h.get(r);if(g!==void 0)return g;const m=r.emits;let k={},_=!1;if(!Oe(r)){const w=y=>{const C=qA(y,c,!0);C&&(_=!0,At(k,C))};!d&&c.mixins.length&&c.mixins.forEach(w),r.extends&&w(r.extends),r.mixins&&r.mixins.forEach(w)}return!m&&!_?(h.set(r,null),null):(Ae(m)?m.forEach(w=>k[w]=null):At(k,m),h.set(r,k),k)}function Nc(r,c){return!r||!Ws(c)?!1:(c=c.slice(2).replace(/Once$/,""),He(r,c[0].toLowerCase()+c.slice(1))||He(r,eo(c))||He(r,c))}let Wt=null,Bc=null;function Vs(r){const c=Wt;return Wt=r,Bc=r&&r.type.__scopeId||null,c}function iM(r){Bc=r}function rM(){Bc=null}const sM=r=>Xn;function Xn(r,c=Wt,d){if(!c||r._n)return r;const h=(...g)=>{h._d&&Nu(-1);const m=Vs(c),k=r(...g);return Vs(m),h._d&&Nu(1),k};return h._n=!0,h._c=!0,h._d=!0,h}function oc(r){const{type:c,vnode:d,proxy:h,withProxy:g,props:m,propsOptions:[k],slots:_,attrs:w,emit:y,render:C,renderCache:x,data:A,setupState:T,ctx:V,inheritAttrs:oe}=r;let X,z;const B=Vs(r);try{if(d.shapeFlag&4){const Z=g||h;X=hn(C.call(Z,Z,x,m,T,A,V)),z=w}else{const Z=c;X=hn(Z.length>1?Z(m,{attrs:w,slots:_,emit:y}):Z(m,null)),z=c.props?w:cM(w)}}catch(Z){Bs.length=0,Hi(Z,r,1),X=_e(Gt)}let $=X;if(z&&oe!==!1){const Z=Object.keys(z),{shapeFlag:ie}=$;Z.length&&ie&7&&(k&&Z.some(Ju)&&(z=lM(z,k)),$=ao($,z))}return d.dirs&&($=ao($),$.dirs=$.dirs?$.dirs.concat(d.dirs):d.dirs),d.transition&&($.transition=d.transition),X=$,Vs(B),X}function aM(r){let c;for(let d=0;d<r.length;d++){const h=r[d];if(ni(h)){if(h.type!==Gt||h.children==="v-if"){if(c)return;c=h}}else return}return c}const cM=r=>{let c;for(const d in r)(d==="class"||d==="style"||Ws(d))&&((c||(c={}))[d]=r[d]);return c},lM=(r,c)=>{const d={};for(const h in r)(!Ju(h)||!(h.slice(9)in c))&&(d[h]=r[h]);return d};function dM(r,c,d){const{props:h,children:g,component:m}=r,{props:k,children:_,patchFlag:w}=c,y=m.emitsOptions;if(c.dirs||c.transition)return!0;if(d&&w>=0){if(w&1024)return!0;if(w&16)return h?l_(h,k,y):!!k;if(w&8){const C=c.dynamicProps;for(let x=0;x<C.length;x++){const A=C[x];if(k[A]!==h[A]&&!Nc(y,A))return!0}}}else return(g||_)&&(!_||!_.$stable)?!0:h===k?!1:h?k?l_(h,k,y):!0:!!k;return!1}function l_(r,c,d){const h=Object.keys(c);if(h.length!==Object.keys(r).length)return!0;for(let g=0;g<h.length;g++){const m=h[g];if(c[m]!==r[m]&&!Nc(d,m))return!0}return!1}function gh({vnode:r,parent:c},d){for(;c&&c.subTree===r;)(r=c.vnode).el=d,c=c.parent}const WA=r=>r.__isSuspense,uM={name:"Suspense",__isSuspense:!0,process(r,c,d,h,g,m,k,_,w,y){r==null?fM(c,d,h,g,m,k,_,w,y):gM(r,c,d,h,g,k,_,w,y)},hydrate:pM,create:ph,normalize:mM},hM=uM;function Us(r,c){const d=r.props&&r.props[c];Oe(d)&&d()}function fM(r,c,d,h,g,m,k,_,w){const{p:y,o:{createElement:C}}=w,x=C("div"),A=r.suspense=ph(r,g,h,c,x,d,m,k,_,w);y(null,A.pendingBranch=r.ssContent,x,null,h,A,m,k),A.deps>0?(Us(r,"onPending"),Us(r,"onFallback"),y(null,r.ssFallback,c,d,h,null,m,k),Pr(A,r.ssFallback)):A.resolve()}function gM(r,c,d,h,g,m,k,_,{p:w,um:y,o:{createElement:C}}){const x=c.suspense=r.suspense;x.vnode=c,c.el=r.el;const A=c.ssContent,T=c.ssFallback,{activeBranch:V,pendingBranch:oe,isInFallback:X,isHydrating:z}=x;if(oe)x.pendingBranch=A,Jn(A,oe)?(w(oe,A,x.hiddenContainer,null,g,x,m,k,_),x.deps<=0?x.resolve():X&&(w(V,T,d,h,g,null,m,k,_),Pr(x,T))):(x.pendingId++,z?(x.isHydrating=!1,x.activeBranch=oe):y(oe,g,x),x.deps=0,x.effects.length=0,x.hiddenContainer=C("div"),X?(w(null,A,x.hiddenContainer,null,g,x,m,k,_),x.deps<=0?x.resolve():(w(V,T,d,h,g,null,m,k,_),Pr(x,T))):V&&Jn(A,V)?(w(V,A,d,h,g,x,m,k,_),x.resolve(!0)):(w(null,A,x.hiddenContainer,null,g,x,m,k,_),x.deps<=0&&x.resolve()));else if(V&&Jn(A,V))w(V,A,d,h,g,x,m,k,_),Pr(x,A);else if(Us(c,"onPending"),x.pendingBranch=A,x.pendingId++,w(null,A,x.hiddenContainer,null,g,x,m,k,_),x.deps<=0)x.resolve();else{const{timeout:B,pendingId:$}=x;B>0?setTimeout(()=>{x.pendingId===$&&x.fallback(T)},B):B===0&&x.fallback(T)}}function ph(r,c,d,h,g,m,k,_,w,y,C=!1){const{p:x,m:A,um:T,n:V,o:{parentNode:oe,remove:X}}=y,z=ei(r.props&&r.props.timeout),B={vnode:r,parent:c,parentComponent:d,isSVG:k,container:h,hiddenContainer:g,anchor:m,deps:0,pendingId:0,timeout:typeof z=="number"?z:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:C,isUnmounted:!1,effects:[],resolve($=!1){const{vnode:Z,activeBranch:ie,pendingBranch:ge,pendingId:L,effects:j,parentComponent:U,container:H}=B;if(B.isHydrating)B.isHydrating=!1;else if(!$){const fe=ie&&ge.transition&&ge.transition.mode==="out-in";fe&&(ie.transition.afterLeave=()=>{L===B.pendingId&&A(ge,H,pe,0)});let{anchor:pe}=B;ie&&(pe=V(ie),T(ie,U,B,!0)),fe||A(ge,H,pe,0)}Pr(B,ge),B.pendingBranch=null,B.isInFallback=!1;let K=B.parent,Y=!1;for(;K;){if(K.pendingBranch){K.effects.push(...j),Y=!0;break}K=K.parent}Y||fh(j),B.effects=[],Us(Z,"onResolve")},fallback($){if(!B.pendingBranch)return;const{vnode:Z,activeBranch:ie,parentComponent:ge,container:L,isSVG:j}=B;Us(Z,"onFallback");const U=V(ie),H=()=>{!B.isInFallback||(x(null,$,L,U,ge,null,j,_,w),Pr(B,$))},K=$.transition&&$.transition.mode==="out-in";K&&(ie.transition.afterLeave=H),B.isInFallback=!0,T(ie,ge,null,!0),K||H()},move($,Z,ie){B.activeBranch&&A(B.activeBranch,$,Z,ie),B.container=$},next(){return B.activeBranch&&V(B.activeBranch)},registerDep($,Z){const ie=!!B.pendingBranch;ie&&B.deps++;const ge=$.vnode.el;$.asyncDep.catch(L=>{Hi(L,$,0)}).then(L=>{if($.isUnmounted||B.isUnmounted||B.pendingId!==$.suspenseId)return;$.asyncResolved=!0;const{vnode:j}=$;Bu($,L,!1),ge&&(j.el=ge);const U=!ge&&$.subTree.el;Z($,j,oe(ge||$.subTree.el),ge?null:V($.subTree),B,k,w),U&&X(U),gh($,j.el),ie&&--B.deps===0&&B.resolve()})},unmount($,Z){B.isUnmounted=!0,B.activeBranch&&T(B.activeBranch,d,$,Z),B.pendingBranch&&T(B.pendingBranch,d,$,Z)}};return B}function pM(r,c,d,h,g,m,k,_,w){const y=c.suspense=ph(c,h,d,r.parentNode,document.createElement("div"),null,g,m,k,_,!0),C=w(r,y.pendingBranch=c.ssContent,d,y,m,k);return y.deps===0&&y.resolve(),C}function mM(r){const{shapeFlag:c,children:d}=r,h=c&32;r.ssContent=d_(h?d.default:d),r.ssFallback=h?d_(d.fallback):_e(Gt)}function d_(r){let c;if(Oe(r)){const d=Ri&&r._c;d&&(r._d=!1,ye()),r=r(),d&&(r._d=!0,c=on,wv())}return Ae(r)&&(r=aM(r)),r=hn(r),c&&!r.dynamicChildren&&(r.dynamicChildren=c.filter(d=>d!==r)),r}function GA(r,c){c&&c.pendingBranch?Ae(r)?c.effects.push(...r):c.effects.push(r):fh(r)}function Pr(r,c){r.activeBranch=c;const{vnode:d,parentComponent:h}=r,g=d.el=c.el;h&&h.subTree===d&&(h.vnode.el=g,gh(h,g))}function Ps(r,c){if(Et){let d=Et.provides;const h=Et.parent&&Et.parent.provides;h===d&&(d=Et.provides=Object.create(h)),d[r]=c}}function Fn(r,c,d=!1){const h=Et||Wt;if(h){const g=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(g&&r in g)return g[r];if(arguments.length>1)return d&&Oe(c)?c.call(h.proxy):c}}function kM(r,c){return Qs(r,null,c)}function KA(r,c){return Qs(r,null,{flush:"post"})}function bM(r,c){return Qs(r,null,{flush:"sync"})}const u_={};function Zo(r,c,d){return Qs(r,c,d)}function Qs(r,c,{immediate:d,deep:h,flush:g,onTrack:m,onTrigger:k}=Qe){const _=Et;let w,y=!1,C=!1;if(mt(r)?(w=()=>r.value,y=uc(r)):to(r)?(w=()=>r,h=!0):Ae(r)?(C=!0,y=r.some(z=>to(z)||uc(z)),w=()=>r.map(z=>{if(mt(z))return z.value;if(to(z))return Pi(z);if(Oe(z))return no(z,_,2)})):Oe(r)?c?w=()=>no(r,_,2):w=()=>{if(!(_&&_.isUnmounted))return x&&x(),gn(r,_,3,[A])}:w=zn,c&&h){const z=w;w=()=>Pi(z())}let x,A=z=>{x=X.onStop=()=>{no(z,_,4)}};if(jr)return A=zn,c?d&&gn(c,_,3,[w(),C?[]:void 0,A]):w(),zn;let T=C?[]:u_;const V=()=>{if(!!X.active)if(c){const z=X.run();(h||y||(C?z.some((B,$)=>Or(B,T[$])):Or(z,T)))&&(x&&x(),gn(c,_,3,[z,T===u_?void 0:T,A]),T=z)}else X.run()};V.allowRecurse=!!c;let oe;g==="sync"?oe=V:g==="post"?oe=()=>Lt(V,_&&_.suspense):oe=()=>nM(V);const X=new Ys(w,oe);return c?d?V():T=X.run():g==="post"?Lt(X.run.bind(X),_&&_.suspense):X.run(),()=>{X.stop(),_&&_.scope&&Xu(_.scope.effects,X)}}function wM(r,c,d){const h=this.proxy,g=wt(r)?r.includes(".")?YA(h,r):()=>h[r]:r.bind(h,h);let m;Oe(c)?m=c:(m=c.handler,d=c);const k=Et;oi(this);const _=Qs(g,m.bind(h),d);return k?oi(k):Jo(),_}function YA(r,c){const d=c.split(".");return()=>{let h=r;for(let g=0;g<d.length&&h;g++)h=h[d[g]];return h}}function Pi(r,c){if(!vt(r)||r.__v_skip||(c=c||new Set,c.has(r)))return r;if(c.add(r),mt(r))Pi(r.value,c);else if(Ae(r))for(let d=0;d<r.length;d++)Pi(r[d],c);else if(Fi(r)||Ir(r))r.forEach(d=>{Pi(d,c)});else if(AA(r))for(const d in r)Pi(r[d],c);return r}function mh(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Io(()=>{r.isMounted=!0}),zc(()=>{r.isUnmounting=!0}),r}const En=[Function,Array],_M={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:En,onEnter:En,onAfterEnter:En,onEnterCancelled:En,onBeforeLeave:En,onLeave:En,onAfterLeave:En,onLeaveCancelled:En,onBeforeAppear:En,onAppear:En,onAfterAppear:En,onAppearCancelled:En},setup(r,{slots:c}){const d=lo(),h=mh();let g;return()=>{const m=c.default&&Oc(c.default(),!0);if(!m||!m.length)return;let k=m[0];if(m.length>1){for(const oe of m)if(oe.type!==Gt){k=oe;break}}const _=je(r),{mode:w}=_;if(h.isLeaving)return nu(k);const y=h_(k);if(!y)return nu(k);const C=Rr(y,_,h,d);Li(y,C);const x=d.subTree,A=x&&h_(x);let T=!1;const{getTransitionKey:V}=y.type;if(V){const oe=V();g===void 0?g=oe:oe!==g&&(g=oe,T=!0)}if(A&&A.type!==Gt&&(!Jn(y,A)||T)){const oe=Rr(A,_,h,d);if(Li(A,oe),w==="out-in")return h.isLeaving=!0,oe.afterLeave=()=>{h.isLeaving=!1,d.update()},nu(k);w==="in-out"&&y.type!==Gt&&(oe.delayLeave=(X,z,B)=>{const $=QA(h,A);$[String(A.key)]=A,X._leaveCb=()=>{z(),X._leaveCb=void 0,delete C.delayedLeave},C.delayedLeave=B})}return k}}},kh=_M;function QA(r,c){const{leavingVNodes:d}=r;let h=d.get(c.type);return h||(h=Object.create(null),d.set(c.type,h)),h}function Rr(r,c,d,h){const{appear:g,mode:m,persisted:k=!1,onBeforeEnter:_,onEnter:w,onAfterEnter:y,onEnterCancelled:C,onBeforeLeave:x,onLeave:A,onAfterLeave:T,onLeaveCancelled:V,onBeforeAppear:oe,onAppear:X,onAfterAppear:z,onAppearCancelled:B}=c,$=String(r.key),Z=QA(d,r),ie=(j,U)=>{j&&gn(j,h,9,U)},ge=(j,U)=>{const H=U[1];ie(j,U),Ae(j)?j.every(K=>K.length<=1)&&H():j.length<=1&&H()},L={mode:m,persisted:k,beforeEnter(j){let U=_;if(!d.isMounted)if(g)U=oe||_;else return;j._leaveCb&&j._leaveCb(!0);const H=Z[$];H&&Jn(r,H)&&H.el._leaveCb&&H.el._leaveCb(),ie(U,[j])},enter(j){let U=w,H=y,K=C;if(!d.isMounted)if(g)U=X||w,H=z||y,K=B||C;else return;let Y=!1;const fe=j._enterCb=pe=>{Y||(Y=!0,pe?ie(K,[j]):ie(H,[j]),L.delayedLeave&&L.delayedLeave(),j._enterCb=void 0)};U?ge(U,[j,fe]):fe()},leave(j,U){const H=String(r.key);if(j._enterCb&&j._enterCb(!0),d.isUnmounting)return U();ie(x,[j]);let K=!1;const Y=j._leaveCb=fe=>{K||(K=!0,U(),fe?ie(V,[j]):ie(T,[j]),j._leaveCb=void 0,Z[H]===r&&delete Z[H])};Z[H]=r,A?ge(A,[j,Y]):Y()},clone(j){return Rr(j,c,d,h)}};return L}function nu(r){if(Zs(r))return r=ao(r),r.children=null,r}function h_(r){return Zs(r)?r.children?r.children[0]:void 0:r}function Li(r,c){r.shapeFlag&6&&r.component?Li(r.component.subTree,c):r.shapeFlag&128?(r.ssContent.transition=c.clone(r.ssContent),r.ssFallback.transition=c.clone(r.ssFallback)):r.transition=c}function Oc(r,c=!1,d){let h=[],g=0;for(let m=0;m<r.length;m++){let k=r[m];const _=d==null?k.key:String(d)+String(k.key!=null?k.key:m);k.type===$e?(k.patchFlag&128&&g++,h=h.concat(Oc(k.children,c,_))):(c||k.type!==Gt)&&h.push(_!=null?ao(k,{key:_}):k)}if(g>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}function $i(r){return Oe(r)?{setup:r,name:r.name}:r}const Bi=r=>!!r.type.__asyncLoader;function AM(r){Oe(r)&&(r={loader:r});const{loader:c,loadingComponent:d,errorComponent:h,delay:g=200,timeout:m,suspensible:k=!0,onError:_}=r;let w=null,y,C=0;const x=()=>(C++,w=null,A()),A=()=>{let T;return w||(T=w=c().catch(V=>{if(V=V instanceof Error?V:new Error(String(V)),_)return new Promise((oe,X)=>{_(V,()=>oe(x()),()=>X(V),C+1)});throw V}).then(V=>T!==w&&w?w:(V&&(V.__esModule||V[Symbol.toStringTag]==="Module")&&(V=V.default),y=V,V)))};return $i({name:"AsyncComponentWrapper",__asyncLoader:A,get __asyncResolved(){return y},setup(){const T=Et;if(y)return()=>ou(y,T);const V=B=>{w=null,Hi(B,T,13,!h)};if(k&&T.suspense||jr)return A().then(B=>()=>ou(B,T)).catch(B=>(V(B),()=>h?_e(h,{error:B}):null));const oe=jn(!1),X=jn(),z=jn(!!g);return g&&setTimeout(()=>{z.value=!1},g),m!=null&&setTimeout(()=>{if(!oe.value&&!X.value){const B=new Error(`Async component timed out after ${m}ms.`);V(B),X.value=B}},m),A().then(()=>{oe.value=!0,T.parent&&Zs(T.parent.vnode)&&hh(T.parent.update)}).catch(B=>{V(B),X.value=B}),()=>{if(oe.value&&y)return ou(y,T);if(X.value&&h)return _e(h,{error:X.value});if(d&&!z.value)return _e(d)}}})}function ou(r,{vnode:{ref:c,props:d,children:h,shapeFlag:g},parent:m}){const k=_e(r,d,h);return k.ref=c,k}const Zs=r=>r.type.__isKeepAlive,vM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:c}){const d=lo(),h=d.ctx;if(!h.renderer)return()=>{const B=c.default&&c.default();return B&&B.length===1?B[0]:B};const g=new Map,m=new Set;let k=null;const _=d.suspense,{renderer:{p:w,m:y,um:C,o:{createElement:x}}}=h,A=x("div");h.activate=(B,$,Z,ie,ge)=>{const L=B.component;y(B,$,Z,0,_),w(L.vnode,B,$,Z,L,_,ie,B.slotScopeIds,ge),Lt(()=>{L.isDeactivated=!1,L.a&&Mr(L.a);const j=B.props&&B.props.onVnodeMounted;j&&nn(j,L.parent,B)},_)},h.deactivate=B=>{const $=B.component;y(B,A,null,1,_),Lt(()=>{$.da&&Mr($.da);const Z=B.props&&B.props.onVnodeUnmounted;Z&&nn(Z,$.parent,B),$.isDeactivated=!0},_)};function T(B){iu(B),C(B,d,_,!0)}function V(B){g.forEach(($,Z)=>{const ie=bc($.type);ie&&(!B||!B(ie))&&oe(Z)})}function oe(B){const $=g.get(B);!k||$.type!==k.type?T($):k&&iu(k),g.delete(B),m.delete(B)}Zo(()=>[r.include,r.exclude],([B,$])=>{B&&V(Z=>xs(B,Z)),$&&V(Z=>!xs($,Z))},{flush:"post",deep:!0});let X=null;const z=()=>{X!=null&&g.set(X,ru(d.subTree))};return Io(z),Rc(z),zc(()=>{g.forEach(B=>{const{subTree:$,suspense:Z}=d,ie=ru($);if(B.type===ie.type){iu(ie);const ge=ie.component.da;ge&&Lt(ge,Z);return}T(B)})}),()=>{if(X=null,!c.default)return null;const B=c.default(),$=B[0];if(B.length>1)return k=null,B;if(!ni($)||!($.shapeFlag&4)&&!($.shapeFlag&128))return k=null,$;let Z=ru($);const ie=Z.type,ge=bc(Bi(Z)?Z.type.__asyncResolved||{}:ie),{include:L,exclude:j,max:U}=r;if(L&&(!ge||!xs(L,ge))||j&&ge&&xs(j,ge))return k=Z,$;const H=Z.key==null?ie:Z.key,K=g.get(H);return Z.el&&(Z=ao(Z),$.shapeFlag&128&&($.ssContent=Z)),X=H,K?(Z.el=K.el,Z.component=K.component,Z.transition&&Li(Z,Z.transition),Z.shapeFlag|=512,m.delete(H),m.add(H)):(m.add(H),U&&m.size>parseInt(U,10)&&oe(m.values().next().value)),Z.shapeFlag|=256,k=Z,WA($.type)?$:Z}}},CM=vM;function xs(r,c){return Ae(r)?r.some(d=>xs(d,c)):wt(r)?r.split(",").includes(c):r.test?r.test(c):!1}function ZA(r,c){XA(r,"a",c)}function JA(r,c){XA(r,"da",c)}function XA(r,c,d=Et){const h=r.__wdc||(r.__wdc=()=>{let g=d;for(;g;){if(g.isDeactivated)return;g=g.parent}return r()});if(Lc(c,h,d),d){let g=d.parent;for(;g&&g.parent;)Zs(g.parent.vnode)&&yM(h,c,d,g),g=g.parent}}function yM(r,c,d,h){const g=Lc(c,r,h,!0);Js(()=>{Xu(h[c],g)},d)}function iu(r){let c=r.shapeFlag;c&256&&(c-=256),c&512&&(c-=512),r.shapeFlag=c}function ru(r){return r.shapeFlag&128?r.ssContent:r}function Lc(r,c,d=Et,h=!1){if(d){const g=d[r]||(d[r]=[]),m=c.__weh||(c.__weh=(...k)=>{if(d.isUnmounted)return;Vi(),oi(d);const _=gn(c,d,r,k);return Jo(),Ui(),_});return h?g.unshift(m):g.push(m),m}}const To=r=>(c,d=Et)=>(!jr||r==="sp")&&Lc(r,c,d),ev=To("bm"),Io=To("m"),tv=To("bu"),Rc=To("u"),zc=To("bum"),Js=To("um"),nv=To("sp"),ov=To("rtg"),iv=To("rtc");function rv(r,c=Et){Lc("ec",r,c)}function Jt(r,c){const d=Wt;if(d===null)return r;const h=Fc(d)||d.proxy,g=r.dirs||(r.dirs=[]);for(let m=0;m<c.length;m++){let[k,_,w,y=Qe]=c[m];Oe(k)&&(k={mounted:k,updated:k}),k.deep&&Pi(_),g.push({dir:k,instance:h,value:_,oldValue:void 0,arg:w,modifiers:y})}return r}function Zn(r,c,d,h){const g=r.dirs,m=c&&c.dirs;for(let k=0;k<g.length;k++){const _=g[k];m&&(_.oldValue=m[k].value);let w=_.dir[h];w&&(Vi(),gn(w,d,8,[r.el,_,r,c]),Ui())}}const bh="components",xM="directives";function Gr(r,c){return wh(bh,r,!0,c)||r}const sv=Symbol();function Nr(r){return wt(r)?wh(bh,r,!1)||r:r||sv}function EM(r){return wh(xM,r)}function wh(r,c,d=!0,h=!1){const g=Wt||Et;if(g){const m=g.type;if(r===bh){const _=bc(m,!1);if(_&&(_===c||_===pn(c)||_===Ks(pn(c))))return m}const k=f_(g[r]||m[r],c)||f_(g.appContext[r],c);return!k&&h?m:k}}function f_(r,c){return r&&(r[c]||r[pn(c)]||r[Ks(pn(c))])}function oo(r,c,d,h){let g;const m=d&&d[h];if(Ae(r)||wt(r)){g=new Array(r.length);for(let k=0,_=r.length;k<_;k++)g[k]=c(r[k],k,void 0,m&&m[k])}else if(typeof r=="number"){g=new Array(r);for(let k=0;k<r;k++)g[k]=c(k+1,k,void 0,m&&m[k])}else if(vt(r))if(r[Symbol.iterator])g=Array.from(r,(k,_)=>c(k,_,void 0,m&&m[_]));else{const k=Object.keys(r);g=new Array(k.length);for(let _=0,w=k.length;_<w;_++){const y=k[_];g[_]=c(r[y],y,_,m&&m[_])}}else g=[];return d&&(d[h]=g),g}function DM(r,c){for(let d=0;d<c.length;d++){const h=c[d];if(Ae(h))for(let g=0;g<h.length;g++)r[h[g].name]=h[g].fn;else h&&(r[h.name]=h.fn)}return r}function SM(r,c,d={},h,g){if(Wt.isCE||Wt.parent&&Bi(Wt.parent)&&Wt.parent.isCE)return _e("slot",c==="default"?null:{name:c},h&&h());let m=r[c];m&&m._c&&(m._d=!1),ye();const k=m&&av(m(d)),_=Eo($e,{key:d.key||`_${c}`},k||(h?h():[]),k&&r._===1?64:-2);return!g&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),m&&m._c&&(m._d=!0),_}function av(r){return r.some(c=>ni(c)?!(c.type===Gt||c.type===$e&&!av(c.children)):!0)?r:null}function TM(r){const c={};for(const d in r)c[Ds(d)]=r[d];return c}const Du=r=>r?Ev(r)?Fc(r)||r.proxy:Du(r.parent):null,gc=At(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Du(r.parent),$root:r=>Du(r.root),$emit:r=>r.emit,$options:r=>lv(r),$forceUpdate:r=>r.f||(r.f=()=>hh(r.update)),$nextTick:r=>r.n||(r.n=so.bind(r.proxy)),$watch:r=>wM.bind(r)}),Su={get({_:r},c){const{ctx:d,setupState:h,data:g,props:m,accessCache:k,type:_,appContext:w}=r;let y;if(c[0]!=="$"){const T=k[c];if(T!==void 0)switch(T){case 1:return h[c];case 2:return g[c];case 4:return d[c];case 3:return m[c]}else{if(h!==Qe&&He(h,c))return k[c]=1,h[c];if(g!==Qe&&He(g,c))return k[c]=2,g[c];if((y=r.propsOptions[0])&&He(y,c))return k[c]=3,m[c];if(d!==Qe&&He(d,c))return k[c]=4,d[c];Tu&&(k[c]=0)}}const C=gc[c];let x,A;if(C)return c==="$attrs"&&mn(r,"get",c),C(r);if((x=_.__cssModules)&&(x=x[c]))return x;if(d!==Qe&&He(d,c))return k[c]=4,d[c];if(A=w.config.globalProperties,He(A,c))return A[c]},set({_:r},c,d){const{data:h,setupState:g,ctx:m}=r;return g!==Qe&&He(g,c)?(g[c]=d,!0):h!==Qe&&He(h,c)?(h[c]=d,!0):He(r.props,c)||c[0]==="$"&&c.slice(1)in r?!1:(m[c]=d,!0)},has({_:{data:r,setupState:c,accessCache:d,ctx:h,appContext:g,propsOptions:m}},k){let _;return!!d[k]||r!==Qe&&He(r,k)||c!==Qe&&He(c,k)||(_=m[0])&&He(_,k)||He(h,k)||He(gc,k)||He(g.config.globalProperties,k)},defineProperty(r,c,d){return d.get!=null?r._.accessCache[c]=0:He(d,"value")&&this.set(r,c,d.value,null),Reflect.defineProperty(r,c,d)}},IM=At({},Su,{get(r,c){if(c!==Symbol.unscopables)return Su.get(r,c,r)},has(r,c){return c[0]!=="_"&&!YT(c)}});let Tu=!0;function MM(r){const c=lv(r),d=r.proxy,h=r.ctx;Tu=!1,c.beforeCreate&&g_(c.beforeCreate,r,"bc");const{data:g,computed:m,methods:k,watch:_,provide:w,inject:y,created:C,beforeMount:x,mounted:A,beforeUpdate:T,updated:V,activated:oe,deactivated:X,beforeDestroy:z,beforeUnmount:B,destroyed:$,unmounted:Z,render:ie,renderTracked:ge,renderTriggered:L,errorCaptured:j,serverPrefetch:U,expose:H,inheritAttrs:K,components:Y,directives:fe,filters:pe}=c;if(y&&PM(y,h,null,r.appContext.config.unwrapInjectedRef),k)for(const De in k){const Fe=k[De];Oe(Fe)&&(h[De]=Fe.bind(d))}if(g){const De=g.call(d,d);vt(De)&&(r.data=co(De))}if(Tu=!0,m)for(const De in m){const Fe=m[De],lt=Oe(Fe)?Fe.bind(d,d):Oe(Fe.get)?Fe.get.bind(d,d):zn,tt=!Oe(Fe)&&Oe(Fe.set)?Fe.set.bind(d):zn,Ye=bt({get:lt,set:tt});Object.defineProperty(h,De,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ie=>Ye.value=Ie})}if(_)for(const De in _)cv(_[De],h,d,De);if(w){const De=Oe(w)?w.call(d):w;Reflect.ownKeys(De).forEach(Fe=>{Ps(Fe,De[Fe])})}C&&g_(C,r,"c");function Te(De,Fe){Ae(Fe)?Fe.forEach(lt=>De(lt.bind(d))):Fe&&De(Fe.bind(d))}if(Te(ev,x),Te(Io,A),Te(tv,T),Te(Rc,V),Te(ZA,oe),Te(JA,X),Te(rv,j),Te(iv,ge),Te(ov,L),Te(zc,B),Te(Js,Z),Te(nv,U),Ae(H))if(H.length){const De=r.exposed||(r.exposed={});H.forEach(Fe=>{Object.defineProperty(De,Fe,{get:()=>d[Fe],set:lt=>d[Fe]=lt})})}else r.exposed||(r.exposed={});ie&&r.render===zn&&(r.render=ie),K!=null&&(r.inheritAttrs=K),Y&&(r.components=Y),fe&&(r.directives=fe)}function PM(r,c,d=zn,h=!1){Ae(r)&&(r=Iu(r));for(const g in r){const m=r[g];let k;vt(m)?"default"in m?k=Fn(m.from||g,m.default,!0):k=Fn(m.from||g):k=Fn(m),mt(k)&&h?Object.defineProperty(c,g,{enumerable:!0,configurable:!0,get:()=>k.value,set:_=>k.value=_}):c[g]=k}}function g_(r,c,d){gn(Ae(r)?r.map(h=>h.bind(c.proxy)):r.bind(c.proxy),c,d)}function cv(r,c,d,h){const g=h.includes(".")?YA(d,h):()=>d[h];if(wt(r)){const m=c[r];Oe(m)&&Zo(g,m)}else if(Oe(r))Zo(g,r.bind(d));else if(vt(r))if(Ae(r))r.forEach(m=>cv(m,c,d,h));else{const m=Oe(r.handler)?r.handler.bind(d):c[r.handler];Oe(m)&&Zo(g,m,r)}}function lv(r){const c=r.type,{mixins:d,extends:h}=c,{mixins:g,optionsCache:m,config:{optionMergeStrategies:k}}=r.appContext,_=m.get(c);let w;return _?w=_:!g.length&&!d&&!h?w=c:(w={},g.length&&g.forEach(y=>pc(w,y,k,!0)),pc(w,c,k)),m.set(c,w),w}function pc(r,c,d,h=!1){const{mixins:g,extends:m}=c;m&&pc(r,m,d,!0),g&&g.forEach(k=>pc(r,k,d,!0));for(const k in c)if(!(h&&k==="expose")){const _=NM[k]||d&&d[k];r[k]=_?_(r[k],c[k]):c[k]}return r}const NM={data:p_,props:Si,emits:Si,methods:Si,computed:Si,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Si,directives:Si,watch:OM,provide:p_,inject:BM};function p_(r,c){return c?r?function(){return At(Oe(r)?r.call(this,this):r,Oe(c)?c.call(this,this):c)}:c:r}function BM(r,c){return Si(Iu(r),Iu(c))}function Iu(r){if(Ae(r)){const c={};for(let d=0;d<r.length;d++)c[r[d]]=r[d];return c}return r}function Qt(r,c){return r?[...new Set([].concat(r,c))]:c}function Si(r,c){return r?At(At(Object.create(null),r),c):c}function OM(r,c){if(!r)return c;if(!c)return r;const d=At(Object.create(null),r);for(const h in c)d[h]=Qt(r[h],c[h]);return d}function LM(r,c,d,h=!1){const g={},m={};dc(m,jc,1),r.propsDefaults=Object.create(null),dv(r,c,g,m);for(const k in r.propsOptions[0])k in g||(g[k]=void 0);d?r.props=h?g:OA(g):r.type.props?r.props=g:r.props=m,r.attrs=m}function RM(r,c,d,h){const{props:g,attrs:m,vnode:{patchFlag:k}}=r,_=je(g),[w]=r.propsOptions;let y=!1;if((h||k>0)&&!(k&16)){if(k&8){const C=r.vnode.dynamicProps;for(let x=0;x<C.length;x++){let A=C[x];if(Nc(r.emitsOptions,A))continue;const T=c[A];if(w)if(He(m,A))T!==m[A]&&(m[A]=T,y=!0);else{const V=pn(A);g[V]=Mu(w,_,V,T,r,!1)}else T!==m[A]&&(m[A]=T,y=!0)}}}else{dv(r,c,g,m)&&(y=!0);let C;for(const x in _)(!c||!He(c,x)&&((C=eo(x))===x||!He(c,C)))&&(w?d&&(d[x]!==void 0||d[C]!==void 0)&&(g[x]=Mu(w,_,x,void 0,r,!0)):delete g[x]);if(m!==_)for(const x in m)(!c||!He(c,x)&&!0)&&(delete m[x],y=!0)}y&&So(r,"set","$attrs")}function dv(r,c,d,h){const[g,m]=r.propsOptions;let k=!1,_;if(c)for(let w in c){if(Es(w))continue;const y=c[w];let C;g&&He(g,C=pn(w))?!m||!m.includes(C)?d[C]=y:(_||(_={}))[C]=y:Nc(r.emitsOptions,w)||(!(w in h)||y!==h[w])&&(h[w]=y,k=!0)}if(m){const w=je(d),y=_||Qe;for(let C=0;C<m.length;C++){const x=m[C];d[x]=Mu(g,w,x,y[x],r,!He(y,x))}}return k}function Mu(r,c,d,h,g,m){const k=r[d];if(k!=null){const _=He(k,"default");if(_&&h===void 0){const w=k.default;if(k.type!==Function&&Oe(w)){const{propsDefaults:y}=g;d in y?h=y[d]:(oi(g),h=y[d]=w.call(null,c),Jo())}else h=w}k[0]&&(m&&!_?h=!1:k[1]&&(h===""||h===eo(d))&&(h=!0))}return h}function uv(r,c,d=!1){const h=c.propsCache,g=h.get(r);if(g)return g;const m=r.props,k={},_=[];let w=!1;if(!Oe(r)){const C=x=>{w=!0;const[A,T]=uv(x,c,!0);At(k,A),T&&_.push(...T)};!d&&c.mixins.length&&c.mixins.forEach(C),r.extends&&C(r.extends),r.mixins&&r.mixins.forEach(C)}if(!m&&!w)return h.set(r,Tr),Tr;if(Ae(m))for(let C=0;C<m.length;C++){const x=pn(m[C]);m_(x)&&(k[x]=Qe)}else if(m)for(const C in m){const x=pn(C);if(m_(x)){const A=m[C],T=k[x]=Ae(A)||Oe(A)?{type:A}:A;if(T){const V=w_(Boolean,T.type),oe=w_(String,T.type);T[0]=V>-1,T[1]=oe<0||V<oe,(V>-1||He(T,"default"))&&_.push(x)}}}const y=[k,_];return h.set(r,y),y}function m_(r){return r[0]!=="$"}function k_(r){const c=r&&r.toString().match(/^\s*function (\w+)/);return c?c[1]:r===null?"null":""}function b_(r,c){return k_(r)===k_(c)}function w_(r,c){return Ae(c)?c.findIndex(d=>b_(d,r)):Oe(c)&&b_(c,r)?0:-1}const hv=r=>r[0]==="_"||r==="$stable",_h=r=>Ae(r)?r.map(hn):[hn(r)],zM=(r,c,d)=>{if(c._n)return c;const h=Xn((...g)=>_h(c(...g)),d);return h._c=!1,h},fv=(r,c,d)=>{const h=r._ctx;for(const g in r){if(hv(g))continue;const m=r[g];if(Oe(m))c[g]=zM(g,m,h);else if(m!=null){const k=_h(m);c[g]=()=>k}}},gv=(r,c)=>{const d=_h(c);r.slots.default=()=>d},jM=(r,c)=>{if(r.vnode.shapeFlag&32){const d=c._;d?(r.slots=je(c),dc(c,"_",d)):fv(c,r.slots={})}else r.slots={},c&&gv(r,c);dc(r.slots,jc,1)},FM=(r,c,d)=>{const{vnode:h,slots:g}=r;let m=!0,k=Qe;if(h.shapeFlag&32){const _=c._;_?d&&_===1?m=!1:(At(g,c),!d&&_===1&&delete g._):(m=!c.$stable,fv(c,g)),k=c}else c&&(gv(r,c),k={default:1});if(m)for(const _ in g)!hv(_)&&!(_ in k)&&delete g[_]};function pv(){return{app:null,config:{isNativeTag:oI,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let VM=0;function UM(r,c){return function(h,g=null){Oe(h)||(h=Object.assign({},h)),g!=null&&!vt(g)&&(g=null);const m=pv(),k=new Set;let _=!1;const w=m.app={_uid:VM++,_component:h,_props:g,_container:null,_context:m,_instance:null,version:Bv,get config(){return m.config},set config(y){},use(y,...C){return k.has(y)||(y&&Oe(y.install)?(k.add(y),y.install(w,...C)):Oe(y)&&(k.add(y),y(w,...C))),w},mixin(y){return m.mixins.includes(y)||m.mixins.push(y),w},component(y,C){return C?(m.components[y]=C,w):m.components[y]},directive(y,C){return C?(m.directives[y]=C,w):m.directives[y]},mount(y,C,x){if(!_){const A=_e(h,g);return A.appContext=m,C&&c?c(A,y):r(A,y,x),_=!0,w._container=y,y.__vue_app__=w,Fc(A.component)||A.component.proxy}},unmount(){_&&(r(null,w._container),delete w._container.__vue_app__)},provide(y,C){return m.provides[y]=C,w}};return w}}function mc(r,c,d,h,g=!1){if(Ae(r)){r.forEach((A,T)=>mc(A,c&&(Ae(c)?c[T]:c),d,h,g));return}if(Bi(h)&&!g)return;const m=h.shapeFlag&4?Fc(h.component)||h.component.proxy:h.el,k=g?null:m,{i:_,r:w}=r,y=c&&c.r,C=_.refs===Qe?_.refs={}:_.refs,x=_.setupState;if(y!=null&&y!==w&&(wt(y)?(C[y]=null,He(x,y)&&(x[y]=null)):mt(y)&&(y.value=null)),Oe(w))no(w,_,12,[k,C]);else{const A=wt(w),T=mt(w);if(A||T){const V=()=>{if(r.f){const oe=A?C[w]:w.value;g?Ae(oe)&&Xu(oe,m):Ae(oe)?oe.includes(m)||oe.push(m):A?(C[w]=[m],He(x,w)&&(x[w]=C[w])):(w.value=[m],r.k&&(C[r.k]=w.value))}else A?(C[w]=k,He(x,w)&&(x[w]=k)):T&&(w.value=k,r.k&&(C[r.k]=k))};k?(V.id=-1,Lt(V,d)):V()}}}let jo=!1;const Qa=r=>/svg/.test(r.namespaceURI)&&r.tagName!=="foreignObject",Za=r=>r.nodeType===8;function HM(r){const{mt:c,p:d,o:{patchProp:h,createText:g,nextSibling:m,parentNode:k,remove:_,insert:w,createComment:y}}=r,C=(z,B)=>{if(!B.hasChildNodes()){d(null,z,B),fc(),B._vnode=z;return}jo=!1,x(B.firstChild,z,null,null,null),fc(),B._vnode=z,jo&&console.error("Hydration completed but contains mismatches.")},x=(z,B,$,Z,ie,ge=!1)=>{const L=Za(z)&&z.data==="[",j=()=>oe(z,B,$,Z,ie,L),{type:U,ref:H,shapeFlag:K,patchFlag:Y}=B,fe=z.nodeType;B.el=z,Y===-2&&(ge=!1,B.dynamicChildren=null);let pe=null;switch(U){case zr:fe!==3?B.children===""?(w(B.el=g(""),k(z),z),pe=z):pe=j():(z.data!==B.children&&(jo=!0,z.data=B.children),pe=m(z));break;case Gt:fe!==8||L?pe=j():pe=m(z);break;case Oi:if(fe!==1&&fe!==3)pe=j();else{pe=z;const xe=!B.children.length;for(let Te=0;Te<B.staticCount;Te++)xe&&(B.children+=pe.nodeType===1?pe.outerHTML:pe.data),Te===B.staticCount-1&&(B.anchor=pe),pe=m(pe);return pe}break;case $e:L?pe=V(z,B,$,Z,ie,ge):pe=j();break;default:if(K&1)fe!==1||B.type.toLowerCase()!==z.tagName.toLowerCase()?pe=j():pe=A(z,B,$,Z,ie,ge);else if(K&6){B.slotScopeIds=ie;const xe=k(z);if(c(B,xe,null,$,Z,Qa(xe),ge),pe=L?X(z):m(z),pe&&Za(pe)&&pe.data==="teleport end"&&(pe=m(pe)),Bi(B)){let Te;L?(Te=_e($e),Te.anchor=pe?pe.previousSibling:xe.lastChild):Te=z.nodeType===3?zt(""):_e("div"),Te.el=z,B.component.subTree=Te}}else K&64?fe!==8?pe=j():pe=B.type.hydrate(z,B,$,Z,ie,ge,r,T):K&128&&(pe=B.type.hydrate(z,B,$,Z,Qa(k(z)),ie,ge,r,x))}return H!=null&&mc(H,null,Z,B),pe},A=(z,B,$,Z,ie,ge)=>{ge=ge||!!B.dynamicChildren;const{type:L,props:j,patchFlag:U,shapeFlag:H,dirs:K}=B,Y=L==="input"&&K||L==="option";if(Y||U!==-1){if(K&&Zn(B,null,$,"created"),j)if(Y||!ge||U&48)for(const pe in j)(Y&&pe.endsWith("value")||Ws(pe)&&!Es(pe))&&h(z,pe,null,j[pe],!1,void 0,$);else j.onClick&&h(z,"onClick",null,j.onClick,!1,void 0,$);let fe;if((fe=j&&j.onVnodeBeforeMount)&&nn(fe,$,B),K&&Zn(B,null,$,"beforeMount"),((fe=j&&j.onVnodeMounted)||K)&&GA(()=>{fe&&nn(fe,$,B),K&&Zn(B,null,$,"mounted")},Z),H&16&&!(j&&(j.innerHTML||j.textContent))){let pe=T(z.firstChild,B,z,$,Z,ie,ge);for(;pe;){jo=!0;const xe=pe;pe=pe.nextSibling,_(xe)}}else H&8&&z.textContent!==B.children&&(jo=!0,z.textContent=B.children)}return z.nextSibling},T=(z,B,$,Z,ie,ge,L)=>{L=L||!!B.dynamicChildren;const j=B.children,U=j.length;for(let H=0;H<U;H++){const K=L?j[H]:j[H]=hn(j[H]);if(z)z=x(z,K,Z,ie,ge,L);else{if(K.type===zr&&!K.children)continue;jo=!0,d(null,K,$,null,Z,ie,Qa($),ge)}}return z},V=(z,B,$,Z,ie,ge)=>{const{slotScopeIds:L}=B;L&&(ie=ie?ie.concat(L):L);const j=k(z),U=T(m(z),B,j,$,Z,ie,ge);return U&&Za(U)&&U.data==="]"?m(B.anchor=U):(jo=!0,w(B.anchor=y("]"),j,U),U)},oe=(z,B,$,Z,ie,ge)=>{if(jo=!0,B.el=null,ge){const U=X(z);for(;;){const H=m(z);if(H&&H!==U)_(H);else break}}const L=m(z),j=k(z);return _(z),d(null,B,j,L,$,Z,Qa(j),ie),L},X=z=>{let B=0;for(;z;)if(z=m(z),z&&Za(z)&&(z.data==="["&&B++,z.data==="]")){if(B===0)return m(z);B--}return z};return[C,x]}const Lt=GA;function mv(r){return bv(r)}function kv(r){return bv(r,HM)}function bv(r,c){const d=lI();d.__VUE__=!0;const{insert:h,remove:g,patchProp:m,createElement:k,createText:_,createComment:w,setText:y,setElementText:C,parentNode:x,nextSibling:A,setScopeId:T=zn,cloneNode:V,insertStaticContent:oe}=r,X=(M,R,q,J=null,ee=null,ce=null,ke=!1,le=null,de=!!R.dynamicChildren)=>{if(M===R)return;M&&!Jn(M,R)&&(J=Q(M),nt(M,ee,ce,!0),M=null),R.patchFlag===-2&&(de=!1,R.dynamicChildren=null);const{type:ae,ref:ve,shapeFlag:me}=R;switch(ae){case zr:z(M,R,q,J);break;case Gt:B(M,R,q,J);break;case Oi:M==null&&$(R,q,J,ke);break;case $e:fe(M,R,q,J,ee,ce,ke,le,de);break;default:me&1?ge(M,R,q,J,ee,ce,ke,le,de):me&6?pe(M,R,q,J,ee,ce,ke,le,de):(me&64||me&128)&&ae.process(M,R,q,J,ee,ce,ke,le,de,Ue)}ve!=null&&ee&&mc(ve,M&&M.ref,ce,R||M,!R)},z=(M,R,q,J)=>{if(M==null)h(R.el=_(R.children),q,J);else{const ee=R.el=M.el;R.children!==M.children&&y(ee,R.children)}},B=(M,R,q,J)=>{M==null?h(R.el=w(R.children||""),q,J):R.el=M.el},$=(M,R,q,J)=>{[M.el,M.anchor]=oe(M.children,R,q,J,M.el,M.anchor)},Z=({el:M,anchor:R},q,J)=>{let ee;for(;M&&M!==R;)ee=A(M),h(M,q,J),M=ee;h(R,q,J)},ie=({el:M,anchor:R})=>{let q;for(;M&&M!==R;)q=A(M),g(M),M=q;g(R)},ge=(M,R,q,J,ee,ce,ke,le,de)=>{ke=ke||R.type==="svg",M==null?L(R,q,J,ee,ce,ke,le,de):H(M,R,ee,ce,ke,le,de)},L=(M,R,q,J,ee,ce,ke,le)=>{let de,ae;const{type:ve,props:me,shapeFlag:we,transition:Ce,patchFlag:Ve,dirs:Ge}=M;if(M.el&&V!==void 0&&Ve===-1)de=M.el=V(M.el);else{if(de=M.el=k(M.type,ce,me&&me.is,me),we&8?C(de,M.children):we&16&&U(M.children,de,null,J,ee,ce&&ve!=="foreignObject",ke,le),Ge&&Zn(M,null,J,"created"),me){for(const ot in me)ot!=="value"&&!Es(ot)&&m(de,ot,null,me[ot],ce,M.children,J,ee,re);"value"in me&&m(de,"value",null,me.value),(ae=me.onVnodeBeforeMount)&&nn(ae,J,M)}j(de,M,M.scopeId,ke,J)}Ge&&Zn(M,null,J,"beforeMount");const Le=(!ee||ee&&!ee.pendingBranch)&&Ce&&!Ce.persisted;Le&&Ce.beforeEnter(de),h(de,R,q),((ae=me&&me.onVnodeMounted)||Le||Ge)&&Lt(()=>{ae&&nn(ae,J,M),Le&&Ce.enter(de),Ge&&Zn(M,null,J,"mounted")},ee)},j=(M,R,q,J,ee)=>{if(q&&T(M,q),J)for(let ce=0;ce<J.length;ce++)T(M,J[ce]);if(ee){let ce=ee.subTree;if(R===ce){const ke=ee.vnode;j(M,ke,ke.scopeId,ke.slotScopeIds,ee.parent)}}},U=(M,R,q,J,ee,ce,ke,le,de=0)=>{for(let ae=de;ae<M.length;ae++){const ve=M[ae]=le?qo(M[ae]):hn(M[ae]);X(null,ve,R,q,J,ee,ce,ke,le)}},H=(M,R,q,J,ee,ce,ke)=>{const le=R.el=M.el;let{patchFlag:de,dynamicChildren:ae,dirs:ve}=R;de|=M.patchFlag&16;const me=M.props||Qe,we=R.props||Qe;let Ce;q&&Ei(q,!1),(Ce=we.onVnodeBeforeUpdate)&&nn(Ce,q,R,M),ve&&Zn(R,M,q,"beforeUpdate"),q&&Ei(q,!0);const Ve=ee&&R.type!=="foreignObject";if(ae?K(M.dynamicChildren,ae,le,q,J,Ve,ce):ke||lt(M,R,le,null,q,J,Ve,ce,!1),de>0){if(de&16)Y(le,R,me,we,q,J,ee);else if(de&2&&me.class!==we.class&&m(le,"class",null,we.class,ee),de&4&&m(le,"style",me.style,we.style,ee),de&8){const Ge=R.dynamicProps;for(let Le=0;Le<Ge.length;Le++){const ot=Ge[Le],sn=me[ot],uo=we[ot];(uo!==sn||ot==="value")&&m(le,ot,sn,uo,ee,M.children,q,J,re)}}de&1&&M.children!==R.children&&C(le,R.children)}else!ke&&ae==null&&Y(le,R,me,we,q,J,ee);((Ce=we.onVnodeUpdated)||ve)&&Lt(()=>{Ce&&nn(Ce,q,R,M),ve&&Zn(R,M,q,"updated")},J)},K=(M,R,q,J,ee,ce,ke)=>{for(let le=0;le<R.length;le++){const de=M[le],ae=R[le],ve=de.el&&(de.type===$e||!Jn(de,ae)||de.shapeFlag&70)?x(de.el):q;X(de,ae,ve,null,J,ee,ce,ke,!0)}},Y=(M,R,q,J,ee,ce,ke)=>{if(q!==J){for(const le in J){if(Es(le))continue;const de=J[le],ae=q[le];de!==ae&&le!=="value"&&m(M,le,ae,de,ke,R.children,ee,ce,re)}if(q!==Qe)for(const le in q)!Es(le)&&!(le in J)&&m(M,le,q[le],null,ke,R.children,ee,ce,re);"value"in J&&m(M,"value",q.value,J.value)}},fe=(M,R,q,J,ee,ce,ke,le,de)=>{const ae=R.el=M?M.el:_(""),ve=R.anchor=M?M.anchor:_("");let{patchFlag:me,dynamicChildren:we,slotScopeIds:Ce}=R;Ce&&(le=le?le.concat(Ce):Ce),M==null?(h(ae,q,J),h(ve,q,J),U(R.children,q,ve,ee,ce,ke,le,de)):me>0&&me&64&&we&&M.dynamicChildren?(K(M.dynamicChildren,we,q,ee,ce,ke,le),(R.key!=null||ee&&R===ee.subTree)&&Ah(M,R,!0)):lt(M,R,q,ve,ee,ce,ke,le,de)},pe=(M,R,q,J,ee,ce,ke,le,de)=>{R.slotScopeIds=le,M==null?R.shapeFlag&512?ee.ctx.activate(R,q,J,ke,de):xe(R,q,J,ee,ce,ke,de):Te(M,R,de)},xe=(M,R,q,J,ee,ce,ke)=>{const le=M.component=xv(M,J,ee);if(Zs(M)&&(le.ctx.renderer=Ue),Dv(le),le.asyncDep){if(ee&&ee.registerDep(le,De),!M.el){const de=le.subTree=_e(Gt);B(null,de,R,q)}return}De(le,M,R,q,ee,ce,ke)},Te=(M,R,q)=>{const J=R.component=M.component;if(dM(M,R,q))if(J.asyncDep&&!J.asyncResolved){Fe(J,R,q);return}else J.next=R,tM(J.update),J.update();else R.el=M.el,J.vnode=R},De=(M,R,q,J,ee,ce,ke)=>{const le=()=>{if(M.isMounted){let{next:ve,bu:me,u:we,parent:Ce,vnode:Ve}=M,Ge=ve,Le;Ei(M,!1),ve?(ve.el=Ve.el,Fe(M,ve,ke)):ve=Ve,me&&Mr(me),(Le=ve.props&&ve.props.onVnodeBeforeUpdate)&&nn(Le,Ce,ve,Ve),Ei(M,!0);const ot=oc(M),sn=M.subTree;M.subTree=ot,X(sn,ot,x(sn.el),Q(sn),M,ee,ce),ve.el=ot.el,Ge===null&&gh(M,ot.el),we&&Lt(we,ee),(Le=ve.props&&ve.props.onVnodeUpdated)&&Lt(()=>nn(Le,Ce,ve,Ve),ee)}else{let ve;const{el:me,props:we}=R,{bm:Ce,m:Ve,parent:Ge}=M,Le=Bi(R);if(Ei(M,!1),Ce&&Mr(Ce),!Le&&(ve=we&&we.onVnodeBeforeMount)&&nn(ve,Ge,R),Ei(M,!0),me&&Ee){const ot=()=>{M.subTree=oc(M),Ee(me,M.subTree,M,ee,null)};Le?R.type.__asyncLoader().then(()=>!M.isUnmounted&&ot()):ot()}else{const ot=M.subTree=oc(M);X(null,ot,q,J,M,ee,ce),R.el=ot.el}if(Ve&&Lt(Ve,ee),!Le&&(ve=we&&we.onVnodeMounted)){const ot=R;Lt(()=>nn(ve,Ge,ot),ee)}(R.shapeFlag&256||Ge&&Bi(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&M.a&&Lt(M.a,ee),M.isMounted=!0,R=q=J=null}},de=M.effect=new Ys(le,()=>hh(ae),M.scope),ae=M.update=()=>de.run();ae.id=M.uid,Ei(M,!0),ae()},Fe=(M,R,q)=>{R.component=M;const J=M.vnode.props;M.vnode=R,M.next=null,RM(M,R.props,J,q),FM(M,R.children,q),Vi(),Pc(void 0,M.update),Ui()},lt=(M,R,q,J,ee,ce,ke,le,de=!1)=>{const ae=M&&M.children,ve=M?M.shapeFlag:0,me=R.children,{patchFlag:we,shapeFlag:Ce}=R;if(we>0){if(we&128){Ye(ae,me,q,J,ee,ce,ke,le,de);return}else if(we&256){tt(ae,me,q,J,ee,ce,ke,le,de);return}}Ce&8?(ve&16&&re(ae,ee,ce),me!==ae&&C(q,me)):ve&16?Ce&16?Ye(ae,me,q,J,ee,ce,ke,le,de):re(ae,ee,ce,!0):(ve&8&&C(q,""),Ce&16&&U(me,q,J,ee,ce,ke,le,de))},tt=(M,R,q,J,ee,ce,ke,le,de)=>{M=M||Tr,R=R||Tr;const ae=M.length,ve=R.length,me=Math.min(ae,ve);let we;for(we=0;we<me;we++){const Ce=R[we]=de?qo(R[we]):hn(R[we]);X(M[we],Ce,q,null,ee,ce,ke,le,de)}ae>ve?re(M,ee,ce,!0,!1,me):U(R,q,J,ee,ce,ke,le,de,me)},Ye=(M,R,q,J,ee,ce,ke,le,de)=>{let ae=0;const ve=R.length;let me=M.length-1,we=ve-1;for(;ae<=me&&ae<=we;){const Ce=M[ae],Ve=R[ae]=de?qo(R[ae]):hn(R[ae]);if(Jn(Ce,Ve))X(Ce,Ve,q,null,ee,ce,ke,le,de);else break;ae++}for(;ae<=me&&ae<=we;){const Ce=M[me],Ve=R[we]=de?qo(R[we]):hn(R[we]);if(Jn(Ce,Ve))X(Ce,Ve,q,null,ee,ce,ke,le,de);else break;me--,we--}if(ae>me){if(ae<=we){const Ce=we+1,Ve=Ce<ve?R[Ce].el:J;for(;ae<=we;)X(null,R[ae]=de?qo(R[ae]):hn(R[ae]),q,Ve,ee,ce,ke,le,de),ae++}}else if(ae>we)for(;ae<=me;)nt(M[ae],ee,ce,!0),ae++;else{const Ce=ae,Ve=ae,Ge=new Map;for(ae=Ve;ae<=we;ae++){const Kt=R[ae]=de?qo(R[ae]):hn(R[ae]);Kt.key!=null&&Ge.set(Kt.key,ae)}let Le,ot=0;const sn=we-Ve+1;let uo=!1,ea=0;const ri=new Array(sn);for(ae=0;ae<sn;ae++)ri[ae]=0;for(ae=Ce;ae<=me;ae++){const Kt=M[ae];if(ot>=sn){nt(Kt,ee,ce,!0);continue}let Ut;if(Kt.key!=null)Ut=Ge.get(Kt.key);else for(Le=Ve;Le<=we;Le++)if(ri[Le-Ve]===0&&Jn(Kt,R[Le])){Ut=Le;break}Ut===void 0?nt(Kt,ee,ce,!0):(ri[Ut-Ve]=ae+1,Ut>=ea?ea=Ut:uo=!0,X(Kt,R[Ut],q,null,ee,ce,ke,le,de),ot++)}const Vt=uo?$M(ri):Tr;for(Le=Vt.length-1,ae=sn-1;ae>=0;ae--){const Kt=Ve+ae,Ut=R[Kt],si=Kt+1<ve?R[Kt+1].el:J;ri[ae]===0?X(null,Ut,q,si,ee,ce,ke,le,de):uo&&(Le<0||ae!==Vt[Le]?Ie(Ut,q,si,2):Le--)}}},Ie=(M,R,q,J,ee=null)=>{const{el:ce,type:ke,transition:le,children:de,shapeFlag:ae}=M;if(ae&6){Ie(M.component.subTree,R,q,J);return}if(ae&128){M.suspense.move(R,q,J);return}if(ae&64){ke.move(M,R,q,Ue);return}if(ke===$e){h(ce,R,q);for(let me=0;me<de.length;me++)Ie(de[me],R,q,J);h(M.anchor,R,q);return}if(ke===Oi){Z(M,R,q);return}if(J!==2&&ae&1&&le)if(J===0)le.beforeEnter(ce),h(ce,R,q),Lt(()=>le.enter(ce),ee);else{const{leave:me,delayLeave:we,afterLeave:Ce}=le,Ve=()=>h(ce,R,q),Ge=()=>{me(ce,()=>{Ve(),Ce&&Ce()})};we?we(ce,Ve,Ge):Ge()}else h(ce,R,q)},nt=(M,R,q,J=!1,ee=!1)=>{const{type:ce,props:ke,ref:le,children:de,dynamicChildren:ae,shapeFlag:ve,patchFlag:me,dirs:we}=M;if(le!=null&&mc(le,null,q,M,!0),ve&256){R.ctx.deactivate(M);return}const Ce=ve&1&&we,Ve=!Bi(M);let Ge;if(Ve&&(Ge=ke&&ke.onVnodeBeforeUnmount)&&nn(Ge,R,M),ve&6)se(M.component,q,J);else{if(ve&128){M.suspense.unmount(q,J);return}Ce&&Zn(M,null,R,"beforeUnmount"),ve&64?M.type.remove(M,R,q,ee,Ue,J):ae&&(ce!==$e||me>0&&me&64)?re(ae,R,q,!1,!0):(ce===$e&&me&384||!ee&&ve&16)&&re(de,R,q),J&&Ft(M)}(Ve&&(Ge=ke&&ke.onVnodeUnmounted)||Ce)&&Lt(()=>{Ge&&nn(Ge,R,M),Ce&&Zn(M,null,R,"unmounted")},q)},Ft=M=>{const{type:R,el:q,anchor:J,transition:ee}=M;if(R===$e){O(q,J);return}if(R===Oi){ie(M);return}const ce=()=>{g(q),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(M.shapeFlag&1&&ee&&!ee.persisted){const{leave:ke,delayLeave:le}=ee,de=()=>ke(q,ce);le?le(M.el,ce,de):de()}else ce()},O=(M,R)=>{let q;for(;M!==R;)q=A(M),g(M),M=q;g(R)},se=(M,R,q)=>{const{bum:J,scope:ee,update:ce,subTree:ke,um:le}=M;J&&Mr(J),ee.stop(),ce&&(ce.active=!1,nt(ke,M,R,q)),le&&Lt(le,R),Lt(()=>{M.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},re=(M,R,q,J=!1,ee=!1,ce=0)=>{for(let ke=ce;ke<M.length;ke++)nt(M[ke],R,q,J,ee)},Q=M=>M.shapeFlag&6?Q(M.component.subTree):M.shapeFlag&128?M.suspense.next():A(M.anchor||M.el),W=(M,R,q)=>{M==null?R._vnode&&nt(R._vnode,null,null,!0):X(R._vnode||null,M,R,null,null,null,q),fc(),R._vnode=M},Ue={p:X,um:nt,m:Ie,r:Ft,mt:xe,mc:U,pc:lt,pbc:K,n:Q,o:r};let he,Ee;return c&&([he,Ee]=c(Ue)),{render:W,hydrate:he,createApp:UM(W,he)}}function Ei({effect:r,update:c},d){r.allowRecurse=c.allowRecurse=d}function Ah(r,c,d=!1){const h=r.children,g=c.children;if(Ae(h)&&Ae(g))for(let m=0;m<h.length;m++){const k=h[m];let _=g[m];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=g[m]=qo(g[m]),_.el=k.el),d||Ah(k,_))}}function $M(r){const c=r.slice(),d=[0];let h,g,m,k,_;const w=r.length;for(h=0;h<w;h++){const y=r[h];if(y!==0){if(g=d[d.length-1],r[g]<y){c[h]=g,d.push(h);continue}for(m=0,k=d.length-1;m<k;)_=m+k>>1,r[d[_]]<y?m=_+1:k=_;y<r[d[m]]&&(m>0&&(c[h]=d[m-1]),d[m]=h)}}for(m=d.length,k=d[m-1];m-- >0;)d[m]=k,k=c[k];return d}const qM=r=>r.__isTeleport,Ns=r=>r&&(r.disabled||r.disabled===""),__=r=>typeof SVGElement!="undefined"&&r instanceof SVGElement,Pu=(r,c)=>{const d=r&&r.to;return wt(d)?c?c(d):null:d},WM={__isTeleport:!0,process(r,c,d,h,g,m,k,_,w,y){const{mc:C,pc:x,pbc:A,o:{insert:T,querySelector:V,createText:oe,createComment:X}}=y,z=Ns(c.props);let{shapeFlag:B,children:$,dynamicChildren:Z}=c;if(r==null){const ie=c.el=oe(""),ge=c.anchor=oe("");T(ie,d,h),T(ge,d,h);const L=c.target=Pu(c.props,V),j=c.targetAnchor=oe("");L&&(T(j,L),k=k||__(L));const U=(H,K)=>{B&16&&C($,H,K,g,m,k,_,w)};z?U(d,ge):L&&U(L,j)}else{c.el=r.el;const ie=c.anchor=r.anchor,ge=c.target=r.target,L=c.targetAnchor=r.targetAnchor,j=Ns(r.props),U=j?d:ge,H=j?ie:L;if(k=k||__(ge),Z?(A(r.dynamicChildren,Z,U,g,m,k,_),Ah(r,c,!0)):w||x(r,c,U,H,g,m,k,_,!1),z)j||Ja(c,d,ie,y,1);else if((c.props&&c.props.to)!==(r.props&&r.props.to)){const K=c.target=Pu(c.props,V);K&&Ja(c,K,null,y,0)}else j&&Ja(c,ge,L,y,1)}},remove(r,c,d,h,{um:g,o:{remove:m}},k){const{shapeFlag:_,children:w,anchor:y,targetAnchor:C,target:x,props:A}=r;if(x&&m(C),(k||!Ns(A))&&(m(y),_&16))for(let T=0;T<w.length;T++){const V=w[T];g(V,c,d,!0,!!V.dynamicChildren)}},move:Ja,hydrate:GM};function Ja(r,c,d,{o:{insert:h},m:g},m=2){m===0&&h(r.targetAnchor,c,d);const{el:k,anchor:_,shapeFlag:w,children:y,props:C}=r,x=m===2;if(x&&h(k,c,d),(!x||Ns(C))&&w&16)for(let A=0;A<y.length;A++)g(y[A],c,d,2);x&&h(_,c,d)}function GM(r,c,d,h,g,m,{o:{nextSibling:k,parentNode:_,querySelector:w}},y){const C=c.target=Pu(c.props,w);if(C){const x=C._lpa||C.firstChild;if(c.shapeFlag&16)if(Ns(c.props))c.anchor=y(k(r),c,_(r),d,h,g,m),c.targetAnchor=x;else{c.anchor=k(r);let A=x;for(;A;)if(A=k(A),A&&A.nodeType===8&&A.data==="teleport anchor"){c.targetAnchor=A,C._lpa=c.targetAnchor&&k(c.targetAnchor);break}y(x,c,C,d,h,g,m)}}return c.anchor&&k(c.anchor)}const KM=WM,$e=Symbol(void 0),zr=Symbol(void 0),Gt=Symbol(void 0),Oi=Symbol(void 0),Bs=[];let on=null;function ye(r=!1){Bs.push(on=r?null:[])}function wv(){Bs.pop(),on=Bs[Bs.length-1]||null}let Ri=1;function Nu(r){Ri+=r}function _v(r){return r.dynamicChildren=Ri>0?on||Tr:null,wv(),Ri>0&&on&&on.push(r),r}function Ne(r,c,d,h,g,m){return _v(P(r,c,d,h,g,m,!0))}function Eo(r,c,d,h,g){return _v(_e(r,c,d,h,g,!0))}function ni(r){return r?r.__v_isVNode===!0:!1}function Jn(r,c){return r.type===c.type&&r.key===c.key}function YM(r){}const jc="__vInternal",Av=({key:r})=>r!=null?r:null,ic=({ref:r,ref_key:c,ref_for:d})=>r!=null?wt(r)||mt(r)||Oe(r)?{i:Wt,r,k:c,f:!!d}:r:null;function P(r,c=null,d=null,h=0,g=null,m=r===$e?0:1,k=!1,_=!1){const w={__v_isVNode:!0,__v_skip:!0,type:r,props:c,key:c&&Av(c),ref:c&&ic(c),scopeId:Bc,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:h,dynamicProps:g,dynamicChildren:null,appContext:null};return _?(vh(w,d),m&128&&r.normalize(w)):d&&(w.shapeFlag|=wt(d)?8:16),Ri>0&&!k&&on&&(w.patchFlag>0||m&6)&&w.patchFlag!==32&&on.push(w),w}const _e=QM;function QM(r,c=null,d=null,h=0,g=null,m=!1){if((!r||r===sv)&&(r=Gt),ni(r)){const _=ao(r,c,!0);return d&&vh(_,d),Ri>0&&!m&&on&&(_.shapeFlag&6?on[on.indexOf(r)]=_:on.push(_)),_.patchFlag|=-2,_}if(r5(r)&&(r=r.__vccOpts),c){c=vv(c);let{class:_,style:w}=c;_&&!wt(_)&&(c.class=Zt(_)),vt(w)&&(ah(w)&&!Ae(w)&&(w=At({},w)),c.style=qs(w))}const k=wt(r)?1:WA(r)?128:qM(r)?64:vt(r)?4:Oe(r)?2:0;return P(r,c,d,h,g,k,m,!0)}function vv(r){return r?ah(r)||jc in r?At({},r):r:null}function ao(r,c,d=!1){const{props:h,ref:g,patchFlag:m,children:k}=r,_=c?yv(h||{},c):h;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:_,key:_&&Av(_),ref:c&&c.ref?d&&g?Ae(g)?g.concat(ic(c)):[g,ic(c)]:ic(c):g,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:k,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:c&&r.type!==$e?m===-1?16:m|16:m,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&ao(r.ssContent),ssFallback:r.ssFallback&&ao(r.ssFallback),el:r.el,anchor:r.anchor}}function zt(r=" ",c=0){return _e(zr,null,r,c)}function Cv(r,c){const d=_e(Oi,null,r);return d.staticCount=c,d}function Br(r="",c=!1){return c?(ye(),Eo(Gt,null,r)):_e(Gt,null,r)}function hn(r){return r==null||typeof r=="boolean"?_e(Gt):Ae(r)?_e($e,null,r.slice()):typeof r=="object"?qo(r):_e(zr,null,String(r))}function qo(r){return r.el===null||r.memo?r:ao(r)}function vh(r,c){let d=0;const{shapeFlag:h}=r;if(c==null)c=null;else if(Ae(c))d=16;else if(typeof c=="object")if(h&65){const g=c.default;g&&(g._c&&(g._d=!1),vh(r,g()),g._c&&(g._d=!0));return}else{d=32;const g=c._;!g&&!(jc in c)?c._ctx=Wt:g===3&&Wt&&(Wt.slots._===1?c._=1:(c._=2,r.patchFlag|=1024))}else Oe(c)?(c={default:c,_ctx:Wt},d=32):(c=String(c),h&64?(d=16,c=[zt(c)]):d=8);r.children=c,r.shapeFlag|=d}function yv(...r){const c={};for(let d=0;d<r.length;d++){const h=r[d];for(const g in h)if(g==="class")c.class!==h.class&&(c.class=Zt([c.class,h.class]));else if(g==="style")c.style=qs([c.style,h.style]);else if(Ws(g)){const m=c[g],k=h[g];k&&m!==k&&!(Ae(m)&&m.includes(k))&&(c[g]=m?[].concat(m,k):k)}else g!==""&&(c[g]=h[g])}return c}function nn(r,c,d,h=null){gn(r,c,7,[d,h])}const ZM=pv();let JM=0;function xv(r,c,d){const h=r.type,g=(c?c.appContext:r.appContext)||ZM,m={uid:JM++,vnode:r,type:h,parent:c,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new nh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uv(h,g),emitsOptions:qA(h,g),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:h.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=c?c.root:m,m.emit=oM.bind(null,m),r.ce&&r.ce(m),m}let Et=null;const lo=()=>Et||Wt,oi=r=>{Et=r,r.scope.on()},Jo=()=>{Et&&Et.scope.off(),Et=null};function Ev(r){return r.vnode.shapeFlag&4}let jr=!1;function Dv(r,c=!1){jr=c;const{props:d,children:h}=r.vnode,g=Ev(r);LM(r,d,g,c),jM(r,h);const m=g?XM(r,c):void 0;return jr=!1,m}function XM(r,c){const d=r.type;r.accessCache=Object.create(null),r.proxy=Dn(new Proxy(r.ctx,Su));const{setup:h}=d;if(h){const g=r.setupContext=h.length>1?Tv(r):null;oi(r),Vi();const m=no(h,r,0,[r.props,g]);if(Ui(),Jo(),eh(m)){if(m.then(Jo,Jo),c)return m.then(k=>{Bu(r,k,c)}).catch(k=>{Hi(k,r,0)});r.asyncDep=m}else Bu(r,m,c)}else Sv(r,c)}function Bu(r,c,d){Oe(c)?r.type.__ssrInlineRender?r.ssrRender=c:r.render=c:vt(c)&&(r.setupState=dh(c)),Sv(r,d)}let kc,Ou;function e5(r){kc=r,Ou=c=>{c.render._rc&&(c.withProxy=new Proxy(c.ctx,IM))}}const t5=()=>!kc;function Sv(r,c,d){const h=r.type;if(!r.render){if(!c&&kc&&!h.render){const g=h.template;if(g){const{isCustomElement:m,compilerOptions:k}=r.appContext.config,{delimiters:_,compilerOptions:w}=h,y=At(At({isCustomElement:m,delimiters:_},k),w);h.render=kc(g,y)}}r.render=h.render||zn,Ou&&Ou(r)}oi(r),Vi(),MM(r),Ui(),Jo()}function n5(r){return new Proxy(r.attrs,{get(c,d){return mn(r,"get","$attrs"),c[d]}})}function Tv(r){const c=h=>{r.exposed=h||{}};let d;return{get attrs(){return d||(d=n5(r))},slots:r.slots,emit:r.emit,expose:c}}function Fc(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(dh(Dn(r.exposed)),{get(c,d){if(d in c)return c[d];if(d in gc)return gc[d](r)}}))}const o5=/(?:^|[-_])(\w)/g,i5=r=>r.replace(o5,c=>c.toUpperCase()).replace(/[-_]/g,"");function bc(r,c=!0){return Oe(r)?r.displayName||r.name:r.name||c&&r.__name}function Iv(r,c,d=!1){let h=bc(c);if(!h&&c.__file){const g=c.__file.match(/([^/\\]+)\.\w+$/);g&&(h=g[1])}if(!h&&r&&r.parent){const g=m=>{for(const k in m)if(m[k]===c)return k};h=g(r.components||r.parent.type.components)||g(r.appContext.components)}return h?i5(h):d?"App":"Anonymous"}function r5(r){return Oe(r)&&"__vccOpts"in r}const bt=(r,c)=>KI(r,c,jr);function s5(){return null}function a5(){return null}function c5(r){}function l5(r,c){return null}function d5(){return Mv().slots}function u5(){return Mv().attrs}function Mv(){const r=lo();return r.setupContext||(r.setupContext=Tv(r))}function h5(r,c){const d=Ae(r)?r.reduce((h,g)=>(h[g]={},h),{}):r;for(const h in c){const g=d[h];g?Ae(g)||Oe(g)?d[h]={type:g,default:c[h]}:g.default=c[h]:g===null&&(d[h]={default:c[h]})}return d}function f5(r,c){const d={};for(const h in r)c.includes(h)||Object.defineProperty(d,h,{enumerable:!0,get:()=>r[h]});return d}function g5(r){const c=lo();let d=r();return Jo(),eh(d)&&(d=d.catch(h=>{throw oi(c),h})),[d,()=>oi(c)]}function Vc(r,c,d){const h=arguments.length;return h===2?vt(c)&&!Ae(c)?ni(c)?_e(r,null,[c]):_e(r,c):_e(r,null,c):(h>3?d=Array.prototype.slice.call(arguments,2):h===3&&ni(d)&&(d=[d]),_e(r,c,d))}const Pv=Symbol(""),p5=()=>{{const r=Fn(Pv);return r||zA("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),r}};function m5(){}function k5(r,c,d,h){const g=d[h];if(g&&Nv(g,r))return g;const m=c();return m.memo=r.slice(),d[h]=m}function Nv(r,c){const d=r.memo;if(d.length!=c.length)return!1;for(let h=0;h<d.length;h++)if(Or(d[h],c[h]))return!1;return Ri>0&&on&&on.push(r),!0}const Bv="3.2.37",b5={createComponentInstance:xv,setupComponent:Dv,renderComponentRoot:oc,setCurrentRenderingInstance:Vs,isVNode:ni,normalizeVNode:hn},w5=b5,_5=null,A5=null,v5="http://www.w3.org/2000/svg",Ii=typeof document!="undefined"?document:null,A_=Ii&&Ii.createElement("template"),C5={insert:(r,c,d)=>{c.insertBefore(r,d||null)},remove:r=>{const c=r.parentNode;c&&c.removeChild(r)},createElement:(r,c,d,h)=>{const g=c?Ii.createElementNS(v5,r):Ii.createElement(r,d?{is:d}:void 0);return r==="select"&&h&&h.multiple!=null&&g.setAttribute("multiple",h.multiple),g},createText:r=>Ii.createTextNode(r),createComment:r=>Ii.createComment(r),setText:(r,c)=>{r.nodeValue=c},setElementText:(r,c)=>{r.textContent=c},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Ii.querySelector(r),setScopeId(r,c){r.setAttribute(c,"")},cloneNode(r){const c=r.cloneNode(!0);return"_value"in r&&(c._value=r._value),c},insertStaticContent(r,c,d,h,g,m){const k=d?d.previousSibling:c.lastChild;if(g&&(g===m||g.nextSibling))for(;c.insertBefore(g.cloneNode(!0),d),!(g===m||!(g=g.nextSibling)););else{A_.innerHTML=h?`<svg>${r}</svg>`:r;const _=A_.content;if(h){const w=_.firstChild;for(;w.firstChild;)_.appendChild(w.firstChild);_.removeChild(w)}c.insertBefore(_,d)}return[k?k.nextSibling:c.firstChild,d?d.previousSibling:c.lastChild]}};function y5(r,c,d){const h=r._vtc;h&&(c=(c?[c,...h]:[...h]).join(" ")),c==null?r.removeAttribute("class"):d?r.setAttribute("class",c):r.className=c}function x5(r,c,d){const h=r.style,g=wt(d);if(d&&!g){for(const m in d)Lu(h,m,d[m]);if(c&&!wt(c))for(const m in c)d[m]==null&&Lu(h,m,"")}else{const m=h.display;g?c!==d&&(h.cssText=d):c&&r.removeAttribute("style"),"_vod"in r&&(h.display=m)}}const v_=/\s*!important$/;function Lu(r,c,d){if(Ae(d))d.forEach(h=>Lu(r,c,h));else if(d==null&&(d=""),c.startsWith("--"))r.setProperty(c,d);else{const h=E5(r,c);v_.test(d)?r.setProperty(eo(h),d.replace(v_,""),"important"):r[h]=d}}const C_=["Webkit","Moz","ms"],su={};function E5(r,c){const d=su[c];if(d)return d;let h=pn(c);if(h!=="filter"&&h in r)return su[c]=h;h=Ks(h);for(let g=0;g<C_.length;g++){const m=C_[g]+h;if(m in r)return su[c]=m}return c}const y_="http://www.w3.org/1999/xlink";function D5(r,c,d,h,g){if(h&&c.startsWith("xlink:"))d==null?r.removeAttributeNS(y_,c.slice(6,c.length)):r.setAttributeNS(y_,c,d);else{const m=ZT(c);d==null||m&&!bA(d)?r.removeAttribute(c):r.setAttribute(c,m?"":d)}}function S5(r,c,d,h,g,m,k){if(c==="innerHTML"||c==="textContent"){h&&k(h,g,m),r[c]=d==null?"":d;return}if(c==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=d;const w=d==null?"":d;(r.value!==w||r.tagName==="OPTION")&&(r.value=w),d==null&&r.removeAttribute(c);return}let _=!1;if(d===""||d==null){const w=typeof r[c];w==="boolean"?d=bA(d):d==null&&w==="string"?(d="",_=!0):w==="number"&&(d=0,_=!0)}try{r[c]=d}catch{}_&&r.removeAttribute(c)}const[Ov,T5]=(()=>{let r=Date.now,c=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(r=performance.now.bind(performance));const d=navigator.userAgent.match(/firefox\/(\d+)/i);c=!!(d&&Number(d[1])<=53)}return[r,c]})();let Ru=0;const I5=Promise.resolve(),M5=()=>{Ru=0},P5=()=>Ru||(I5.then(M5),Ru=Ov());function xo(r,c,d,h){r.addEventListener(c,d,h)}function N5(r,c,d,h){r.removeEventListener(c,d,h)}function B5(r,c,d,h,g=null){const m=r._vei||(r._vei={}),k=m[c];if(h&&k)k.value=h;else{const[_,w]=O5(c);if(h){const y=m[c]=L5(h,g);xo(r,_,y,w)}else k&&(N5(r,_,k,w),m[c]=void 0)}}const x_=/(?:Once|Passive|Capture)$/;function O5(r){let c;if(x_.test(r)){c={};let d;for(;d=r.match(x_);)r=r.slice(0,r.length-d[0].length),c[d[0].toLowerCase()]=!0}return[eo(r.slice(2)),c]}function L5(r,c){const d=h=>{const g=h.timeStamp||Ov();(T5||g>=d.attached-1)&&gn(R5(h,d.value),c,5,[h])};return d.value=r,d.attached=P5(),d}function R5(r,c){if(Ae(c)){const d=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{d.call(r),r._stopped=!0},c.map(h=>g=>!g._stopped&&h&&h(g))}else return c}const E_=/^on[a-z]/,z5=(r,c,d,h,g=!1,m,k,_,w)=>{c==="class"?y5(r,h,g):c==="style"?x5(r,d,h):Ws(c)?Ju(c)||B5(r,c,d,h,k):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):j5(r,c,h,g))?S5(r,c,h,m,k,_,w):(c==="true-value"?r._trueValue=h:c==="false-value"&&(r._falseValue=h),D5(r,c,h,g))};function j5(r,c,d,h){return h?!!(c==="innerHTML"||c==="textContent"||c in r&&E_.test(c)&&Oe(d)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&r.tagName==="INPUT"||c==="type"&&r.tagName==="TEXTAREA"||E_.test(c)&&wt(d)?!1:c in r}function Lv(r,c){const d=$i(r);class h extends Uc{constructor(m){super(d,m,c)}}return h.def=d,h}const F5=r=>Lv(r,Qv),V5=typeof HTMLElement!="undefined"?HTMLElement:class{};class Uc extends V5{constructor(c,d={},h){super(),this._def=c,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,so(()=>{this._connected||(ju(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const g of h)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const c=h=>{const{props:g,styles:m}=h,k=!Ae(g),_=g?k?Object.keys(g):g:[];let w;if(k)for(const y in this._props){const C=g[y];(C===Number||C&&C.type===Number)&&(this._props[y]=ei(this._props[y]),(w||(w=Object.create(null)))[y]=!0)}this._numberProps=w;for(const y of Object.keys(this))y[0]!=="_"&&this._setProp(y,this[y],!0,!1);for(const y of _.map(pn))Object.defineProperty(this,y,{get(){return this._getProp(y)},set(C){this._setProp(y,C)}});this._applyStyles(m),this._update()},d=this._def.__asyncLoader;d?d().then(c):c(this._def)}_setAttr(c){let d=this.getAttribute(c);this._numberProps&&this._numberProps[c]&&(d=ei(d)),this._setProp(pn(c),d,!1)}_getProp(c){return this._props[c]}_setProp(c,d,h=!0,g=!0){d!==this._props[c]&&(this._props[c]=d,g&&this._instance&&this._update(),h&&(d===!0?this.setAttribute(eo(c),""):typeof d=="string"||typeof d=="number"?this.setAttribute(eo(c),d+""):d||this.removeAttribute(eo(c))))}_update(){ju(this._createVNode(),this.shadowRoot)}_createVNode(){const c=_e(this._def,At({},this._props));return this._instance||(c.ce=d=>{this._instance=d,d.isCE=!0,d.emit=(g,...m)=>{this.dispatchEvent(new CustomEvent(g,{detail:m}))};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof Uc){d.parent=h._instance;break}}),c}_applyStyles(c){c&&c.forEach(d=>{const h=document.createElement("style");h.textContent=d,this.shadowRoot.appendChild(h)})}}function U5(r="$style"){{const c=lo();if(!c)return Qe;const d=c.type.__cssModules;if(!d)return Qe;const h=d[r];return h||Qe}}function H5(r){const c=lo();if(!c)return;const d=()=>zu(c.subTree,r(c.proxy));KA(d),Io(()=>{const h=new MutationObserver(d);h.observe(c.subTree.el.parentNode,{childList:!0}),Js(()=>h.disconnect())})}function zu(r,c){if(r.shapeFlag&128){const d=r.suspense;r=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{zu(d.activeBranch,c)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)D_(r.el,c);else if(r.type===$e)r.children.forEach(d=>zu(d,c));else if(r.type===Oi){let{el:d,anchor:h}=r;for(;d&&(D_(d,c),d!==h);)d=d.nextSibling}}function D_(r,c){if(r.nodeType===1){const d=r.style;for(const h in c)d.setProperty(`--${h}`,c[h])}}const Fo="transition",ws="animation",Ch=(r,{slots:c})=>Vc(kh,zv(r),c);Ch.displayName="Transition";const Rv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$5=Ch.props=At({},kh.props,Rv),Di=(r,c=[])=>{Ae(r)?r.forEach(d=>d(...c)):r&&r(...c)},S_=r=>r?Ae(r)?r.some(c=>c.length>1):r.length>1:!1;function zv(r){const c={};for(const Y in r)Y in Rv||(c[Y]=r[Y]);if(r.css===!1)return c;const{name:d="v",type:h,duration:g,enterFromClass:m=`${d}-enter-from`,enterActiveClass:k=`${d}-enter-active`,enterToClass:_=`${d}-enter-to`,appearFromClass:w=m,appearActiveClass:y=k,appearToClass:C=_,leaveFromClass:x=`${d}-leave-from`,leaveActiveClass:A=`${d}-leave-active`,leaveToClass:T=`${d}-leave-to`}=r,V=q5(g),oe=V&&V[0],X=V&&V[1],{onBeforeEnter:z,onEnter:B,onEnterCancelled:$,onLeave:Z,onLeaveCancelled:ie,onBeforeAppear:ge=z,onAppear:L=B,onAppearCancelled:j=$}=c,U=(Y,fe,pe)=>{$o(Y,fe?C:_),$o(Y,fe?y:k),pe&&pe()},H=(Y,fe)=>{Y._isLeaving=!1,$o(Y,x),$o(Y,T),$o(Y,A),fe&&fe()},K=Y=>(fe,pe)=>{const xe=Y?L:B,Te=()=>U(fe,Y,pe);Di(xe,[fe,Te]),T_(()=>{$o(fe,Y?w:m),Co(fe,Y?C:_),S_(xe)||I_(fe,h,oe,Te)})};return At(c,{onBeforeEnter(Y){Di(z,[Y]),Co(Y,m),Co(Y,k)},onBeforeAppear(Y){Di(ge,[Y]),Co(Y,w),Co(Y,y)},onEnter:K(!1),onAppear:K(!0),onLeave(Y,fe){Y._isLeaving=!0;const pe=()=>H(Y,fe);Co(Y,x),Fv(),Co(Y,A),T_(()=>{!Y._isLeaving||($o(Y,x),Co(Y,T),S_(Z)||I_(Y,h,X,pe))}),Di(Z,[Y,pe])},onEnterCancelled(Y){U(Y,!1),Di($,[Y])},onAppearCancelled(Y){U(Y,!0),Di(j,[Y])},onLeaveCancelled(Y){H(Y),Di(ie,[Y])}})}function q5(r){if(r==null)return null;if(vt(r))return[au(r.enter),au(r.leave)];{const c=au(r);return[c,c]}}function au(r){return ei(r)}function Co(r,c){c.split(/\s+/).forEach(d=>d&&r.classList.add(d)),(r._vtc||(r._vtc=new Set)).add(c)}function $o(r,c){c.split(/\s+/).forEach(h=>h&&r.classList.remove(h));const{_vtc:d}=r;d&&(d.delete(c),d.size||(r._vtc=void 0))}function T_(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let W5=0;function I_(r,c,d,h){const g=r._endId=++W5,m=()=>{g===r._endId&&h()};if(d)return setTimeout(m,d);const{type:k,timeout:_,propCount:w}=jv(r,c);if(!k)return h();const y=k+"end";let C=0;const x=()=>{r.removeEventListener(y,A),m()},A=T=>{T.target===r&&++C>=w&&x()};setTimeout(()=>{C<w&&x()},_+1),r.addEventListener(y,A)}function jv(r,c){const d=window.getComputedStyle(r),h=V=>(d[V]||"").split(", "),g=h(Fo+"Delay"),m=h(Fo+"Duration"),k=M_(g,m),_=h(ws+"Delay"),w=h(ws+"Duration"),y=M_(_,w);let C=null,x=0,A=0;c===Fo?k>0&&(C=Fo,x=k,A=m.length):c===ws?y>0&&(C=ws,x=y,A=w.length):(x=Math.max(k,y),C=x>0?k>y?Fo:ws:null,A=C?C===Fo?m.length:w.length:0);const T=C===Fo&&/\b(transform|all)(,|$)/.test(d[Fo+"Property"]);return{type:C,timeout:x,propCount:A,hasTransform:T}}function M_(r,c){for(;r.length<c.length;)r=r.concat(r);return Math.max(...c.map((d,h)=>P_(d)+P_(r[h])))}function P_(r){return Number(r.slice(0,-1).replace(",","."))*1e3}function Fv(){return document.body.offsetHeight}const Vv=new WeakMap,Uv=new WeakMap,G5={name:"TransitionGroup",props:At({},$5,{tag:String,moveClass:String}),setup(r,{slots:c}){const d=lo(),h=mh();let g,m;return Rc(()=>{if(!g.length)return;const k=r.moveClass||`${r.name||"v"}-move`;if(!J5(g[0].el,d.vnode.el,k))return;g.forEach(Y5),g.forEach(Q5);const _=g.filter(Z5);Fv(),_.forEach(w=>{const y=w.el,C=y.style;Co(y,k),C.transform=C.webkitTransform=C.transitionDuration="";const x=y._moveCb=A=>{A&&A.target!==y||(!A||/transform$/.test(A.propertyName))&&(y.removeEventListener("transitionend",x),y._moveCb=null,$o(y,k))};y.addEventListener("transitionend",x)})}),()=>{const k=je(r),_=zv(k);let w=k.tag||$e;g=m,m=c.default?Oc(c.default()):[];for(let y=0;y<m.length;y++){const C=m[y];C.key!=null&&Li(C,Rr(C,_,h,d))}if(g)for(let y=0;y<g.length;y++){const C=g[y];Li(C,Rr(C,_,h,d)),Vv.set(C,C.el.getBoundingClientRect())}return _e(w,null,m)}}},K5=G5;function Y5(r){const c=r.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function Q5(r){Uv.set(r,r.el.getBoundingClientRect())}function Z5(r){const c=Vv.get(r),d=Uv.get(r),h=c.left-d.left,g=c.top-d.top;if(h||g){const m=r.el.style;return m.transform=m.webkitTransform=`translate(${h}px,${g}px)`,m.transitionDuration="0s",r}}function J5(r,c,d){const h=r.cloneNode();r._vtc&&r._vtc.forEach(k=>{k.split(/\s+/).forEach(_=>_&&h.classList.remove(_))}),d.split(/\s+/).forEach(k=>k&&h.classList.add(k)),h.style.display="none";const g=c.nodeType===1?c:c.parentNode;g.appendChild(h);const{hasTransform:m}=jv(h);return g.removeChild(h),m}const ii=r=>{const c=r.props["onUpdate:modelValue"]||!1;return Ae(c)?d=>Mr(c,d):c};function X5(r){r.target.composing=!0}function N_(r){const c=r.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const Rt={created(r,{modifiers:{lazy:c,trim:d,number:h}},g){r._assign=ii(g);const m=h||g.props&&g.props.type==="number";xo(r,c?"change":"input",k=>{if(k.target.composing)return;let _=r.value;d&&(_=_.trim()),m&&(_=ei(_)),r._assign(_)}),d&&xo(r,"change",()=>{r.value=r.value.trim()}),c||(xo(r,"compositionstart",X5),xo(r,"compositionend",N_),xo(r,"change",N_))},mounted(r,{value:c}){r.value=c==null?"":c},beforeUpdate(r,{value:c,modifiers:{lazy:d,trim:h,number:g}},m){if(r._assign=ii(m),r.composing||document.activeElement===r&&r.type!=="range"&&(d||h&&r.value.trim()===c||(g||r.type==="number")&&ei(r.value)===c))return;const k=c==null?"":c;r.value!==k&&(r.value=k)}},yh={deep:!0,created(r,c,d){r._assign=ii(d),xo(r,"change",()=>{const h=r._modelValue,g=Fr(r),m=r.checked,k=r._assign;if(Ae(h)){const _=xc(h,g),w=_!==-1;if(m&&!w)k(h.concat(g));else if(!m&&w){const y=[...h];y.splice(_,1),k(y)}}else if(Fi(h)){const _=new Set(h);m?_.add(g):_.delete(g),k(_)}else k(Hv(r,m))})},mounted:B_,beforeUpdate(r,c,d){r._assign=ii(d),B_(r,c,d)}};function B_(r,{value:c,oldValue:d},h){r._modelValue=c,Ae(c)?r.checked=xc(c,h.props.value)>-1:Fi(c)?r.checked=c.has(h.props.value):c!==d&&(r.checked=Xo(c,Hv(r,!0)))}const xh={created(r,{value:c},d){r.checked=Xo(c,d.props.value),r._assign=ii(d),xo(r,"change",()=>{r._assign(Fr(r))})},beforeUpdate(r,{value:c,oldValue:d},h){r._assign=ii(h),c!==d&&(r.checked=Xo(c,h.props.value))}},Eh={deep:!0,created(r,{value:c,modifiers:{number:d}},h){const g=Fi(c);xo(r,"change",()=>{const m=Array.prototype.filter.call(r.options,k=>k.selected).map(k=>d?ei(Fr(k)):Fr(k));r._assign(r.multiple?g?new Set(m):m:m[0])}),r._assign=ii(h)},mounted(r,{value:c}){O_(r,c)},beforeUpdate(r,c,d){r._assign=ii(d)},updated(r,{value:c}){O_(r,c)}};function O_(r,c){const d=r.multiple;if(!(d&&!Ae(c)&&!Fi(c))){for(let h=0,g=r.options.length;h<g;h++){const m=r.options[h],k=Fr(m);if(d)Ae(c)?m.selected=xc(c,k)>-1:m.selected=c.has(k);else if(Xo(Fr(m),c)){r.selectedIndex!==h&&(r.selectedIndex=h);return}}!d&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function Fr(r){return"_value"in r?r._value:r.value}function Hv(r,c){const d=c?"_trueValue":"_falseValue";return d in r?r[d]:c}const $v={created(r,c,d){Xa(r,c,d,null,"created")},mounted(r,c,d){Xa(r,c,d,null,"mounted")},beforeUpdate(r,c,d,h){Xa(r,c,d,h,"beforeUpdate")},updated(r,c,d,h){Xa(r,c,d,h,"updated")}};function qv(r,c){switch(r){case"SELECT":return Eh;case"TEXTAREA":return Rt;default:switch(c){case"checkbox":return yh;case"radio":return xh;default:return Rt}}}function Xa(r,c,d,h,g){const k=qv(r.tagName,d.props&&d.props.type)[g];k&&k(r,c,d,h)}function eP(){Rt.getSSRProps=({value:r})=>({value:r}),xh.getSSRProps=({value:r},c)=>{if(c.props&&Xo(c.props.value,r))return{checked:!0}},yh.getSSRProps=({value:r},c)=>{if(Ae(r)){if(c.props&&xc(r,c.props.value)>-1)return{checked:!0}}else if(Fi(r)){if(c.props&&r.has(c.props.value))return{checked:!0}}else if(r)return{checked:!0}},$v.getSSRProps=(r,c)=>{if(typeof c.type!="string")return;const d=qv(c.type.toUpperCase(),c.props&&c.props.type);if(d.getSSRProps)return d.getSSRProps(r,c)}}const tP=["ctrl","shift","alt","meta"],nP={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,c)=>tP.some(d=>r[`${d}Key`]&&!c.includes(d))},Hc=(r,c)=>(d,...h)=>{for(let g=0;g<c.length;g++){const m=nP[c[g]];if(m&&m(d,c))return}return r(d,...h)},oP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},iP=(r,c)=>d=>{if(!("key"in d))return;const h=eo(d.key);if(c.some(g=>g===h||oP[g]===h))return r(d)},Wv={beforeMount(r,{value:c},{transition:d}){r._vod=r.style.display==="none"?"":r.style.display,d&&c?d.beforeEnter(r):_s(r,c)},mounted(r,{value:c},{transition:d}){d&&c&&d.enter(r)},updated(r,{value:c,oldValue:d},{transition:h}){!c!=!d&&(h?c?(h.beforeEnter(r),_s(r,!0),h.enter(r)):h.leave(r,()=>{_s(r,!1)}):_s(r,c))},beforeUnmount(r,{value:c}){_s(r,c)}};function _s(r,c){r.style.display=c?r._vod:"none"}function rP(){Wv.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const Gv=At({patchProp:z5},C5);let Os,L_=!1;function Kv(){return Os||(Os=mv(Gv))}function Yv(){return Os=L_?Os:kv(Gv),L_=!0,Os}const ju=(...r)=>{Kv().render(...r)},Qv=(...r)=>{Yv().hydrate(...r)},Zv=(...r)=>{const c=Kv().createApp(...r),{mount:d}=c;return c.mount=h=>{const g=Jv(h);if(!g)return;const m=c._component;!Oe(m)&&!m.render&&!m.template&&(m.template=g.innerHTML),g.innerHTML="";const k=d(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),k},c},sP=(...r)=>{const c=Yv().createApp(...r),{mount:d}=c;return c.mount=h=>{const g=Jv(h);if(g)return d(g,!0,g instanceof SVGElement)},c};function Jv(r){return wt(r)?document.querySelector(r):r}let R_=!1;const aP=()=>{R_||(R_=!0,eP(),rP())},cP=()=>{};var lP=Object.freeze(Object.defineProperty({__proto__:null,compile:cP,EffectScope:nh,ReactiveEffect:Ys,customRef:qI,effect:gI,effectScope:oh,getCurrentScope:dI,isProxy:ah,isReactive:to,isReadonly:Lr,isRef:mt,isShallow:uc,markRaw:Dn,onScopeDispose:uI,proxyRefs:dh,reactive:co,readonly:sh,ref:jn,shallowReactive:OA,shallowReadonly:FI,shallowRef:LA,stop:pI,toRaw:je,toRef:Ss,toRefs:yu,triggerRef:UI,unref:Se,camelize:pn,capitalize:Ks,normalizeClass:Zt,normalizeProps:tI,normalizeStyle:qs,toDisplayString:Ke,toHandlerKey:Ds,BaseTransition:kh,Comment:Gt,Fragment:$e,KeepAlive:CM,Static:Oi,Suspense:hM,Teleport:KM,Text:zr,callWithAsyncErrorHandling:gn,callWithErrorHandling:no,cloneVNode:ao,compatUtils:A5,computed:bt,createBlock:Eo,createCommentVNode:Br,createElementBlock:Ne,createElementVNode:P,createHydrationRenderer:kv,createPropsRestProxy:f5,createRenderer:mv,createSlots:DM,createStaticVNode:Cv,createTextVNode:zt,createVNode:_e,defineAsyncComponent:AM,defineComponent:$i,defineEmits:a5,defineExpose:c5,defineProps:s5,get devtools(){return Er},getCurrentInstance:lo,getTransitionRawChildren:Oc,guardReactiveProps:vv,h:Vc,handleError:Hi,initCustomFormatter:m5,inject:Fn,isMemoSame:Nv,isRuntimeOnly:t5,isVNode:ni,mergeDefaults:h5,mergeProps:yv,nextTick:so,onActivated:ZA,onBeforeMount:ev,onBeforeUnmount:zc,onBeforeUpdate:tv,onDeactivated:JA,onErrorCaptured:rv,onMounted:Io,onRenderTracked:iv,onRenderTriggered:ov,onServerPrefetch:nv,onUnmounted:Js,onUpdated:Rc,openBlock:ye,popScopeId:rM,provide:Ps,pushScopeId:iM,queuePostFlushCb:fh,registerRuntimeCompiler:e5,renderList:oo,renderSlot:SM,resolveComponent:Gr,resolveDirective:EM,resolveDynamicComponent:Nr,resolveFilter:_5,resolveTransitionHooks:Rr,setBlockTracking:Nu,setDevtoolsHook:$A,setTransitionHooks:Li,ssrContextKey:Pv,ssrUtils:w5,toHandlers:TM,transformVNodeArgs:YM,useAttrs:u5,useSSRContext:p5,useSlots:d5,useTransitionState:mh,version:Bv,warn:zA,watch:Zo,watchEffect:kM,watchPostEffect:KA,watchSyncEffect:bM,withAsyncContext:g5,withCtx:Xn,withDefaults:l5,withDirectives:Jt,withMemo:k5,withScopeId:sM,Transition:Ch,TransitionGroup:K5,VueElement:Uc,createApp:Zv,createSSRApp:sP,defineCustomElement:Lv,defineSSRCustomElement:F5,hydrate:Qv,initDirectivesForSSR:aP,render:ju,useCssModule:U5,useCssVars:H5,vModelCheckbox:yh,vModelDynamic:$v,vModelRadio:xh,vModelSelect:Eh,vModelText:Rt,vShow:Wv,withKeys:iP,withModifiers:Hc},Symbol.toStringTag,{value:"Module"})),dP=!1;function ec(r,c,d){return Array.isArray(r)?(r.length=Math.max(r.length,c),r.splice(c,1,d),d):(r[c]=d,d)}function cu(r,c){if(Array.isArray(r)){r.splice(c,1);return}delete r[c]}function uP(){return Xv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Xv(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const hP=typeof Proxy=="function",fP="devtools-plugin:setup",gP="plugin:settings:set";let wr,Fu;function pP(){var r;return wr!==void 0||(typeof window!="undefined"&&window.performance?(wr=!0,Fu=window.performance):typeof global!="undefined"&&((r=global.perf_hooks)===null||r===void 0?void 0:r.performance)?(wr=!0,Fu=global.perf_hooks.performance):wr=!1),wr}function mP(){return pP()?Fu.now():Date.now()}class kP{constructor(c,d){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=c,this.hook=d;const h={};if(c.settings)for(const k in c.settings){const _=c.settings[k];h[k]=_.defaultValue}const g=`__vue-devtools-plugin-settings__${c.id}`;let m=Object.assign({},h);try{const k=localStorage.getItem(g),_=JSON.parse(k);Object.assign(m,_)}catch{}this.fallbacks={getSettings(){return m},setSettings(k){try{localStorage.setItem(g,JSON.stringify(k))}catch{}m=k},now(){return mP()}},d&&d.on(gP,(k,_)=>{k===this.plugin.id&&this.fallbacks.setSettings(_)}),this.proxiedOn=new Proxy({},{get:(k,_)=>this.target?this.target.on[_]:(...w)=>{this.onQueue.push({method:_,args:w})}}),this.proxiedTarget=new Proxy({},{get:(k,_)=>this.target?this.target[_]:_==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(_)?(...w)=>(this.targetQueue.push({method:_,args:w,resolve:()=>{}}),this.fallbacks[_](...w)):(...w)=>new Promise(y=>{this.targetQueue.push({method:_,args:w,resolve:y})})})}async setRealTarget(c){this.target=c;for(const d of this.onQueue)this.target.on[d.method](...d.args);for(const d of this.targetQueue)d.resolve(await this.target[d.method](...d.args))}}function eC(r,c){const d=r,h=Xv(),g=uP(),m=hP&&d.enableEarlyProxy;if(g&&(h.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!m))g.emit(fP,r,c);else{const k=m?new kP(d,g):null;(h.__VUE_DEVTOOLS_PLUGINS__=h.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:d,setupFn:c,proxy:k}),k&&c(k.proxiedTarget)}}/*!
  * pinia v2.0.18
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Vu;const Hs=r=>Vu=r,tC=Symbol("pinia");function zi(r){return r&&typeof r=="object"&&Object.prototype.toString.call(r)==="[object Object]"&&typeof r.toJSON!="function"}var io;(function(r){r.direct="direct",r.patchObject="patch object",r.patchFunction="patch function"})(io||(io={}));const Ko=typeof window!="undefined",z_=(()=>typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:typeof globalThis=="object"?globalThis:{HTMLElement:null})();function bP(r,{autoBom:c=!1}={}){return c&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob([String.fromCharCode(65279),r],{type:r.type}):r}function Dh(r,c,d){const h=new XMLHttpRequest;h.open("GET",r),h.responseType="blob",h.onload=function(){iC(h.response,c,d)},h.onerror=function(){console.error("could not download file")},h.send()}function nC(r){const c=new XMLHttpRequest;c.open("HEAD",r,!1);try{c.send()}catch{}return c.status>=200&&c.status<=299}function rc(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{const d=document.createEvent("MouseEvents");d.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(d)}}const sc=typeof navigator=="object"?navigator:{userAgent:""},oC=(()=>/Macintosh/.test(sc.userAgent)&&/AppleWebKit/.test(sc.userAgent)&&!/Safari/.test(sc.userAgent))(),iC=Ko?typeof HTMLAnchorElement!="undefined"&&"download"in HTMLAnchorElement.prototype&&!oC?wP:"msSaveOrOpenBlob"in sc?_P:AP:()=>{};function wP(r,c="download",d){const h=document.createElement("a");h.download=c,h.rel="noopener",typeof r=="string"?(h.href=r,h.origin!==location.origin?nC(h.href)?Dh(r,c,d):(h.target="_blank",rc(h)):rc(h)):(h.href=URL.createObjectURL(r),setTimeout(function(){URL.revokeObjectURL(h.href)},4e4),setTimeout(function(){rc(h)},0))}function _P(r,c="download",d){if(typeof r=="string")if(nC(r))Dh(r,c,d);else{const h=document.createElement("a");h.href=r,h.target="_blank",setTimeout(function(){rc(h)})}else navigator.msSaveOrOpenBlob(bP(r,d),c)}function AP(r,c,d,h){if(h=h||open("","_blank"),h&&(h.document.title=h.document.body.innerText="downloading..."),typeof r=="string")return Dh(r,c,d);const g=r.type==="application/octet-stream",m=/constructor/i.test(String(z_.HTMLElement))||"safari"in z_,k=/CriOS\/[\d]+/.test(navigator.userAgent);if((k||g&&m||oC)&&typeof FileReader!="undefined"){const _=new FileReader;_.onloadend=function(){let w=_.result;if(typeof w!="string")throw h=null,new Error("Wrong reader.result type");w=k?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),h?h.location.href=w:location.assign(w),h=null},_.readAsDataURL(r)}else{const _=URL.createObjectURL(r);h?h.location.assign(_):location.href=_,h=null,setTimeout(function(){URL.revokeObjectURL(_)},4e4)}}function Pt(r,c){const d="\u{1F34D} "+r;typeof __VUE_DEVTOOLS_TOAST__=="function"?__VUE_DEVTOOLS_TOAST__(d,c):c==="error"?console.error(d):c==="warn"?console.warn(d):console.log(d)}function Sh(r){return"_a"in r&&"install"in r}function rC(){if(!("clipboard"in navigator))return Pt("Your browser doesn't support the Clipboard API","error"),!0}function sC(r){return r instanceof Error&&r.message.toLowerCase().includes("document is not focused")?(Pt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0):!1}async function vP(r){if(!rC())try{await navigator.clipboard.writeText(JSON.stringify(r.state.value)),Pt("Global state copied to clipboard.")}catch(c){if(sC(c))return;Pt("Failed to serialize the state. Check the console for more details.","error"),console.error(c)}}async function CP(r){if(!rC())try{r.state.value=JSON.parse(await navigator.clipboard.readText()),Pt("Global state pasted from clipboard.")}catch(c){if(sC(c))return;Pt("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(c)}}async function yP(r){try{iC(new Blob([JSON.stringify(r.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(c){Pt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(c)}}let Ao;function xP(){Ao||(Ao=document.createElement("input"),Ao.type="file",Ao.accept=".json");function r(){return new Promise((c,d)=>{Ao.onchange=async()=>{const h=Ao.files;if(!h)return c(null);const g=h.item(0);return c(g?{text:await g.text(),file:g}:null)},Ao.oncancel=()=>c(null),Ao.onerror=d,Ao.click()})}return r}async function EP(r){try{const d=await(await xP())();if(!d)return;const{text:h,file:g}=d;r.state.value=JSON.parse(h),Pt(`Global state imported from "${g.name}".`)}catch(c){Pt("Failed to export the state as JSON. Check the console for more details.","error"),console.error(c)}}function On(r){return{_custom:{display:r}}}const aC="\u{1F34D} Pinia (root)",Uu="_root";function DP(r){return Sh(r)?{id:Uu,label:aC}:{id:r.$id,label:r.$id}}function SP(r){if(Sh(r)){const d=Array.from(r._s.keys()),h=r._s;return{state:d.map(m=>({editable:!0,key:m,value:r.state.value[m]})),getters:d.filter(m=>h.get(m)._getters).map(m=>{const k=h.get(m);return{editable:!1,key:m,value:k._getters.reduce((_,w)=>(_[w]=k[w],_),{})}})}}const c={state:Object.keys(r.$state).map(d=>({editable:!0,key:d,value:r.$state[d]}))};return r._getters&&r._getters.length&&(c.getters=r._getters.map(d=>({editable:!1,key:d,value:r[d]}))),r._customProperties.size&&(c.customProperties=Array.from(r._customProperties).map(d=>({editable:!0,key:d,value:r[d]}))),c}function TP(r){return r?Array.isArray(r)?r.reduce((c,d)=>(c.keys.push(d.key),c.operations.push(d.type),c.oldValue[d.key]=d.oldValue,c.newValue[d.key]=d.newValue,c),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:On(r.type),key:On(r.key),oldValue:r.oldValue,newValue:r.newValue}:{}}function IP(r){switch(r){case io.direct:return"mutation";case io.patchFunction:return"$patch";case io.patchObject:return"$patch";default:return"unknown"}}let Sr=!0;const ac=[],Ti="pinia:mutations",qt="pinia",wc=r=>"\u{1F34D} "+r;function MP(r,c){eC({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ac,app:r},d=>{typeof d.now!="function"&&Pt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),d.addTimelineLayer({id:Ti,label:"Pinia \u{1F34D}",color:15064968}),d.addInspector({id:qt,label:"Pinia \u{1F34D}",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{vP(c)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await CP(c),d.sendInspectorTree(qt),d.sendInspectorState(qt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{yP(c)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await EP(c),d.sendInspectorTree(qt),d.sendInspectorState(qt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:"Reset the state (option store only)",action:h=>{const g=c._s.get(h);g?g._isOptionsAPI?(g.$reset(),Pt(`Store "${h}" reset.`)):Pt(`Cannot reset "${h}" store because it's a setup store.`,"warn"):Pt(`Cannot reset "${h}" store because it wasn't found.`,"warn")}}]}),d.on.inspectComponent((h,g)=>{const m=h.componentInstance&&h.componentInstance.proxy;if(m&&m._pStores){const k=h.componentInstance.proxy._pStores;Object.values(k).forEach(_=>{h.instanceData.state.push({type:wc(_.$id),key:"state",editable:!0,value:_._isOptionsAPI?{_custom:{value:je(_.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>_.$reset()}]}}:Object.keys(_.$state).reduce((w,y)=>(w[y]=_.$state[y],w),{})}),_._getters&&_._getters.length&&h.instanceData.state.push({type:wc(_.$id),key:"getters",editable:!1,value:_._getters.reduce((w,y)=>{try{w[y]=_[y]}catch(C){w[y]=C}return w},{})})})}}),d.on.getInspectorTree(h=>{if(h.app===r&&h.inspectorId===qt){let g=[c];g=g.concat(Array.from(c._s.values())),h.rootNodes=(h.filter?g.filter(m=>"$id"in m?m.$id.toLowerCase().includes(h.filter.toLowerCase()):aC.toLowerCase().includes(h.filter.toLowerCase())):g).map(DP)}}),d.on.getInspectorState(h=>{if(h.app===r&&h.inspectorId===qt){const g=h.nodeId===Uu?c:c._s.get(h.nodeId);if(!g)return;g&&(h.state=SP(g))}}),d.on.editInspectorState((h,g)=>{if(h.app===r&&h.inspectorId===qt){const m=h.nodeId===Uu?c:c._s.get(h.nodeId);if(!m)return Pt(`store "${h.nodeId}" not found`,"error");const{path:k}=h;Sh(m)?k.unshift("state"):(k.length!==1||!m._customProperties.has(k[0])||k[0]in m.$state)&&k.unshift("$state"),Sr=!1,h.set(m,k,h.state.value),Sr=!0}}),d.on.editComponentState(h=>{if(h.type.startsWith("\u{1F34D}")){const g=h.type.replace(/^🍍\s*/,""),m=c._s.get(g);if(!m)return Pt(`store "${g}" not found`,"error");const{path:k}=h;if(k[0]!=="state")return Pt(`Invalid path for store "${g}":
${k}
Only state can be modified.`);k[0]="$state",Sr=!1,h.set(m,k,h.state.value),Sr=!0}})})}function PP(r,c){ac.includes(wc(c.$id))||ac.push(wc(c.$id)),eC({id:"dev.esm.pinia",label:"Pinia \u{1F34D}",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:ac,app:r,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},d=>{const h=typeof d.now=="function"?d.now.bind(d):Date.now;c.$onAction(({after:k,onError:_,name:w,args:y})=>{const C=cC++;d.addTimelineEvent({layerId:Ti,event:{time:h(),title:"\u{1F6EB} "+w,subtitle:"start",data:{store:On(c.$id),action:On(w),args:y},groupId:C}}),k(x=>{Mi=void 0,d.addTimelineEvent({layerId:Ti,event:{time:h(),title:"\u{1F6EC} "+w,subtitle:"end",data:{store:On(c.$id),action:On(w),args:y,result:x},groupId:C}})}),_(x=>{Mi=void 0,d.addTimelineEvent({layerId:Ti,event:{time:h(),logType:"error",title:"\u{1F4A5} "+w,subtitle:"end",data:{store:On(c.$id),action:On(w),args:y,error:x},groupId:C}})})},!0),c._customProperties.forEach(k=>{Zo(()=>Se(c[k]),(_,w)=>{d.notifyComponentUpdate(),d.sendInspectorState(qt),Sr&&d.addTimelineEvent({layerId:Ti,event:{time:h(),title:"Change",subtitle:k,data:{newValue:_,oldValue:w},groupId:Mi}})},{deep:!0})}),c.$subscribe(({events:k,type:_},w)=>{if(d.notifyComponentUpdate(),d.sendInspectorState(qt),!Sr)return;const y={time:h(),title:IP(_),data:{store:On(c.$id),...TP(k)},groupId:Mi};Mi=void 0,_===io.patchFunction?y.subtitle="\u2935\uFE0F":_===io.patchObject?y.subtitle="\u{1F9E9}":k&&!Array.isArray(k)&&(y.subtitle=k.type),k&&(y.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:k}}),d.addTimelineEvent({layerId:Ti,event:y})},{detached:!0,flush:"sync"});const g=c._hotUpdate;c._hotUpdate=Dn(k=>{g(k),d.addTimelineEvent({layerId:Ti,event:{time:h(),title:"\u{1F525} "+c.$id,subtitle:"HMR update",data:{store:On(c.$id),info:On("HMR update")}}}),d.notifyComponentUpdate(),d.sendInspectorTree(qt),d.sendInspectorState(qt)});const{$dispose:m}=c;c.$dispose=()=>{m(),d.notifyComponentUpdate(),d.sendInspectorTree(qt),d.sendInspectorState(qt),d.getSettings().logStoreChanges&&Pt(`Disposed "${c.$id}" store \u{1F5D1}`)},d.notifyComponentUpdate(),d.sendInspectorTree(qt),d.sendInspectorState(qt),d.getSettings().logStoreChanges&&Pt(`"${c.$id}" store installed \u{1F195}`)})}let cC=0,Mi;function j_(r,c){const d=c.reduce((h,g)=>(h[g]=je(r)[g],h),{});for(const h in d)r[h]=function(){const g=cC,m=new Proxy(r,{get(...k){return Mi=g,Reflect.get(...k)},set(...k){return Mi=g,Reflect.set(...k)}});return d[h].apply(m,arguments)}}function NP({app:r,store:c,options:d}){if(!c.$id.startsWith("__hot:")){if(d.state&&(c._isOptionsAPI=!0),typeof d.state=="function"){j_(c,Object.keys(d.actions));const h=c._hotUpdate;je(c)._hotUpdate=function(g){h.apply(this,arguments),j_(c,Object.keys(g._hmrPayload.actions))}}PP(r,c)}}function BP(){const r=oh(!0),c=r.run(()=>jn({}));let d=[],h=[];const g=Dn({install(m){Hs(g),g._a=m,m.provide(tC,g),m.config.globalProperties.$pinia=g,Ko&&MP(m,g),h.forEach(k=>d.push(k)),h=[]},use(m){return!this._a&&!dP?h.push(m):d.push(m),this},_p:d,_a:null,_e:r,_s:new Map,state:c});return Ko&&!0&&typeof Proxy!="undefined"&&g.use(NP),g}function lC(r,c){for(const d in c){const h=c[d];if(!(d in r))continue;const g=r[d];zi(g)&&zi(h)&&!mt(h)&&!to(h)?r[d]=lC(g,h):r[d]=h}return r}const OP=()=>{};function F_(r,c,d,h=OP){r.push(c);const g=()=>{const m=r.indexOf(c);m>-1&&(r.splice(m,1),h())};return!d&&lo()&&Js(g),g}function _r(r,...c){r.slice().forEach(d=>{d(...c)})}function Hu(r,c){for(const d in c){if(!c.hasOwnProperty(d))continue;const h=c[d],g=r[d];zi(g)&&zi(h)&&r.hasOwnProperty(d)&&!mt(h)&&!to(h)?r[d]=Hu(g,h):r[d]=h}return r}const LP=Symbol("pinia:skipHydration");function RP(r){return!zi(r)||!r.hasOwnProperty(LP)}const{assign:Ln}=Object;function V_(r){return!!(mt(r)&&r.effect)}function U_(r,c,d,h){const{state:g,actions:m,getters:k}=c,_=d.state.value[r];let w;function y(){!_&&!h&&(d.state.value[r]=g?g():{});const C=yu(h?jn(g?g():{}).value:d.state.value[r]);return Ln(C,m,Object.keys(k||{}).reduce((x,A)=>(A in C&&console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${A}" in store "${r}".`),x[A]=Dn(bt(()=>{Hs(d);const T=d._s.get(r);return k[A].call(T,T)})),x),{}))}return w=$u(r,y,c,d,h,!0),w.$reset=function(){const x=g?g():{};this.$patch(A=>{Ln(A,x)})},w}function $u(r,c,d={},h,g,m){let k;const _=Ln({actions:{}},d);if(!h._e.active)throw new Error("Pinia destroyed");const w={deep:!0};w.onTrigger=U=>{y?T=U:y==!1&&!L._hotUpdating&&(Array.isArray(T)?T.push(U):console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."))};let y,C,x=Dn([]),A=Dn([]),T;const V=h.state.value[r];!m&&!V&&!g&&(h.state.value[r]={});const oe=jn({});let X;function z(U){let H;y=C=!1,T=[],typeof U=="function"?(U(h.state.value[r]),H={type:io.patchFunction,storeId:r,events:T}):(Hu(h.state.value[r],U),H={type:io.patchObject,payload:U,storeId:r,events:T});const K=X=Symbol();so().then(()=>{X===K&&(y=!0)}),C=!0,_r(x,H,h.state.value[r])}const B=()=>{throw new Error(`\u{1F34D}: Store "${r}" is built using the setup syntax and does not implement $reset().`)};function $(){k.stop(),x=[],A=[],h._s.delete(r)}function Z(U,H){return function(){Hs(h);const K=Array.from(arguments),Y=[],fe=[];function pe(De){Y.push(De)}function xe(De){fe.push(De)}_r(A,{args:K,name:U,store:L,after:pe,onError:xe});let Te;try{Te=H.apply(this&&this.$id===r?this:L,K)}catch(De){throw _r(fe,De),De}return Te instanceof Promise?Te.then(De=>(_r(Y,De),De)).catch(De=>(_r(fe,De),Promise.reject(De))):(_r(Y,Te),Te)}}const ie=Dn({actions:{},getters:{},state:[],hotState:oe}),ge={_p:h,$id:r,$onAction:F_.bind(null,A),$patch:z,$reset:B,$subscribe(U,H={}){const K=F_(x,U,H.detached,()=>Y()),Y=k.run(()=>Zo(()=>h.state.value[r],fe=>{(H.flush==="sync"?C:y)&&U({storeId:r,type:io.direct,events:T},fe)},Ln({},w,H)));return K},$dispose:$},L=co(Ln(Ko?{_customProperties:Dn(new Set),_hmrPayload:ie}:{},ge));h._s.set(r,L);const j=h._e.run(()=>(k=oh(),k.run(()=>c())));for(const U in j){const H=j[U];if(mt(H)&&!V_(H)||to(H))g?ec(oe.value,U,Ss(j,U)):m||(V&&RP(H)&&(mt(H)?H.value=V[U]:Hu(H,V[U])),h.state.value[r][U]=H),ie.state.push(U);else if(typeof H=="function"){const K=g?H:Z(U,H);j[U]=K,ie.actions[U]=H,_.actions[U]=H}else V_(H)&&(ie.getters[U]=m?d.getters[U]:H,Ko&&(j._getters||(j._getters=Dn([]))).push(U))}Ln(L,j),Ln(je(L),j),Object.defineProperty(L,"$state",{get:()=>g?oe.value:h.state.value[r],set:U=>{if(g)throw new Error("cannot set hotState");z(H=>{Ln(H,U)})}});{L._hotUpdate=Dn(H=>{L._hotUpdating=!0,H._hmrPayload.state.forEach(K=>{if(K in L.$state){const Y=H.$state[K],fe=L.$state[K];typeof Y=="object"&&zi(Y)&&zi(fe)?lC(Y,fe):H.$state[K]=fe}ec(L,K,Ss(H.$state,K))}),Object.keys(L.$state).forEach(K=>{K in H.$state||cu(L,K)}),y=!1,C=!1,h.state.value[r]=Ss(H._hmrPayload,"hotState"),C=!0,so().then(()=>{y=!0});for(const K in H._hmrPayload.actions){const Y=H[K];ec(L,K,Z(K,Y))}for(const K in H._hmrPayload.getters){const Y=H._hmrPayload.getters[K],fe=m?bt(()=>(Hs(h),Y.call(L,L))):Y;ec(L,K,fe)}Object.keys(L._hmrPayload.getters).forEach(K=>{K in H._hmrPayload.getters||cu(L,K)}),Object.keys(L._hmrPayload.actions).forEach(K=>{K in H._hmrPayload.actions||cu(L,K)}),L._hmrPayload=H._hmrPayload,L._getters=H._getters,L._hotUpdating=!1});const U={writable:!0,configurable:!0,enumerable:!1};Ko&&["_p","_hmrPayload","_getters","_customProperties"].forEach(H=>{Object.defineProperty(L,H,{value:L[H],...U})})}return h._p.forEach(U=>{if(Ko){const H=k.run(()=>U({store:L,app:h._a,pinia:h,options:_}));Object.keys(H||{}).forEach(K=>L._customProperties.add(K)),Ln(L,H)}else Ln(L,k.run(()=>U({store:L,app:h._a,pinia:h,options:_})))}),L.$state&&typeof L.$state=="object"&&typeof L.$state.constructor=="function"&&!L.$state.constructor.toString().includes("[native code]")&&console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${L.$id}".`),V&&m&&d.hydrate&&d.hydrate(L.$state,V),y=!0,C=!0,L}function $c(r,c,d){let h,g;const m=typeof c=="function";typeof r=="string"?(h=r,g=m?d:c):(g=r,h=r.id);function k(_,w){const y=lo();if(_=_||y&&Fn(tC),_&&Hs(_),!Vu)throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);_=Vu,_._s.has(h)||(m?$u(h,c,g,_):U_(h,g,_),k._pinia=_);const C=_._s.get(h);if(w){const x="__hot:"+h,A=m?$u(x,c,g,_,!0):U_(x,Ln({},g),_,!0);w._hotUpdate(A),delete _.state.value[x],_._s.delete(x)}if(Ko&&y&&y.proxy&&!w){const x=y.proxy,A="_pStores"in x?x._pStores:x._pStores={};A[h]=C}return C}return k.$id=h,k}var tc=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function dC(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function zP(r){if(r.__esModule)return r;var c=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach(function(d){var h=Object.getOwnPropertyDescriptor(r,d);Object.defineProperty(c,d,h.get?h:{enumerable:!0,get:function(){return r[d]}})}),c}var Th={exports:{}},jP=zP(lP);/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(r,c){(function(d,h){r.exports=h(jP)})(window,function(d){return function(h){var g={};function m(k){if(g[k])return g[k].exports;var _=g[k]={i:k,l:!1,exports:{}};return h[k].call(_.exports,_,_.exports,m),_.l=!0,_.exports}return m.m=h,m.c=g,m.d=function(k,_,w){m.o(k,_)||Object.defineProperty(k,_,{enumerable:!0,get:w})},m.r=function(k){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})},m.t=function(k,_){if(1&_&&(k=m(k)),8&_||4&_&&typeof k=="object"&&k&&k.__esModule)return k;var w=Object.create(null);if(m.r(w),Object.defineProperty(w,"default",{enumerable:!0,value:k}),2&_&&typeof k!="string")for(var y in k)m.d(w,y,function(C){return k[C]}.bind(null,y));return w},m.n=function(k){var _=k&&k.__esModule?function(){return k.default}:function(){return k};return m.d(_,"a",_),_},m.o=function(k,_){return Object.prototype.hasOwnProperty.call(k,_)},m.p="",m(m.s=3)}([function(h,g){h.exports=d},function(h,g,m){(function(k){var _=typeof k=="object"&&k&&k.Object===Object&&k;g.a=_}).call(this,m(2))},function(h,g){var m;m=function(){return this}();try{m=m||new Function("return this")()}catch{typeof window=="object"&&(m=window)}h.exports=m},function(h,g,m){m.r(g);var k=m(0),_=m.n(k),w=function(O){var se=typeof O;return O!=null&&(se=="object"||se=="function")},y=m(1),C=typeof self=="object"&&self&&self.Object===Object&&self,x=y.a||C||Function("return this")(),A=function(){return x.Date.now()},T=/\s/,V=function(O){for(var se=O.length;se--&&T.test(O.charAt(se)););return se},oe=/^\s+/,X=function(O){return O&&O.slice(0,V(O)+1).replace(oe,"")},z=x.Symbol,B=Object.prototype,$=B.hasOwnProperty,Z=B.toString,ie=z?z.toStringTag:void 0,ge=function(O){var se=$.call(O,ie),re=O[ie];try{O[ie]=void 0;var Q=!0}catch{}var W=Z.call(O);return Q&&(se?O[ie]=re:delete O[ie]),W},L=Object.prototype.toString,j=function(O){return L.call(O)},U=z?z.toStringTag:void 0,H=function(O){return O==null?O===void 0?"[object Undefined]":"[object Null]":U&&U in Object(O)?ge(O):j(O)},K=function(O){return O!=null&&typeof O=="object"},Y=function(O){return typeof O=="symbol"||K(O)&&H(O)=="[object Symbol]"},fe=/^[-+]0x[0-9a-f]+$/i,pe=/^0b[01]+$/i,xe=/^0o[0-7]+$/i,Te=parseInt,De=function(O){if(typeof O=="number")return O;if(Y(O))return NaN;if(w(O)){var se=typeof O.valueOf=="function"?O.valueOf():O;O=w(se)?se+"":se}if(typeof O!="string")return O===0?O:+O;O=X(O);var re=pe.test(O);return re||xe.test(O)?Te(O.slice(2),re?2:8):fe.test(O)?NaN:+O},Fe=Math.max,lt=Math.min,tt=function(O,se,re){var Q,W,Ue,he,Ee,M,R=0,q=!1,J=!1,ee=!0;if(typeof O!="function")throw new TypeError("Expected a function");function ce(me){var we=Q,Ce=W;return Q=W=void 0,R=me,he=O.apply(Ce,we)}function ke(me){return R=me,Ee=setTimeout(de,se),q?ce(me):he}function le(me){var we=me-M;return M===void 0||we>=se||we<0||J&&me-R>=Ue}function de(){var me=A();if(le(me))return ae(me);Ee=setTimeout(de,function(we){var Ce=se-(we-M);return J?lt(Ce,Ue-(we-R)):Ce}(me))}function ae(me){return Ee=void 0,ee&&Q?ce(me):(Q=W=void 0,he)}function ve(){var me=A(),we=le(me);if(Q=arguments,W=this,M=me,we){if(Ee===void 0)return ke(M);if(J)return clearTimeout(Ee),Ee=setTimeout(de,se),ce(M)}return Ee===void 0&&(Ee=setTimeout(de,se)),he}return se=De(se)||0,w(re)&&(q=!!re.leading,Ue=(J="maxWait"in re)?Fe(De(re.maxWait)||0,se):Ue,ee="trailing"in re?!!re.trailing:ee),ve.cancel=function(){Ee!==void 0&&clearTimeout(Ee),R=0,Q=M=W=Ee=void 0},ve.flush=function(){return Ee===void 0?he:ae(A())},ve},Ye={name:"ckeditor",created(){const{CKEDITOR_VERSION:O}=window;if(O){const[se]=O.split(".").map(Number);se<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(k.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const O=Object.assign({},this.config);this.modelValue&&(O.initialData=this.modelValue),this.editor.create(this.$el,O).then(se=>{this.instance=Object(k.markRaw)(se),this.setUpEditorEvents(),this.modelValue!==O.initialData&&se.setData(this.modelValue),this.disabled&&se.enableReadOnlyMode("Integration Sample"),this.$emit("ready",se)}).catch(se=>{console.error(se)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(O){this.instance&&O!==this.lastEditorData&&this.instance.setData(O)},disabled(O){O?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const O=this.instance,se=tt(re=>{const Q=this.lastEditorData=O.getData();this.$emit("update:modelValue",Q,re,O),this.$emit("input",Q,re,O)},300,{leading:!0});O.model.document.on("change:data",se),O.editing.view.document.on("focus",re=>{this.$emit("focus",re,O)}),O.editing.view.document.on("blur",re=>{this.$emit("blur",re,O)})}}};const Ie=_.a?_.a.version:k.version,[nt]=Ie.split(".").map(O=>parseInt(O,10));if(nt<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Ft={install(O){O.component("ckeditor",Ye)},component:Ye};g.default=Ft}]).default})})(Th);var uC=dC(Th.exports);/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof window!="undefined";function FP(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const ct=Object.assign;function lu(r,c){const d={};for(const h in c){const g=c[h];d[h]=Vn(g)?g.map(r):r(g)}return d}const Ls=()=>{},Vn=Array.isArray,VP=/\/$/,UP=r=>r.replace(VP,"");function du(r,c,d="/"){let h,g={},m="",k="";const _=c.indexOf("#");let w=c.indexOf("?");return _<w&&_>=0&&(w=-1),w>-1&&(h=c.slice(0,w),m=c.slice(w+1,_>-1?_:c.length),g=r(m)),_>-1&&(h=h||c.slice(0,_),k=c.slice(_,c.length)),h=WP(h!=null?h:c,d),{fullPath:h+(m&&"?")+m+k,path:h,query:g,hash:k}}function HP(r,c){const d=c.query?r(c.query):"";return c.path+(d&&"?")+d+(c.hash||"")}function H_(r,c){return!c||!r.toLowerCase().startsWith(c.toLowerCase())?r:r.slice(c.length)||"/"}function $P(r,c,d){const h=c.matched.length-1,g=d.matched.length-1;return h>-1&&h===g&&Vr(c.matched[h],d.matched[g])&&hC(c.params,d.params)&&r(c.query)===r(d.query)&&c.hash===d.hash}function Vr(r,c){return(r.aliasOf||r)===(c.aliasOf||c)}function hC(r,c){if(Object.keys(r).length!==Object.keys(c).length)return!1;for(const d in r)if(!qP(r[d],c[d]))return!1;return!0}function qP(r,c){return Vn(r)?$_(r,c):Vn(c)?$_(c,r):r===c}function $_(r,c){return Vn(c)?r.length===c.length&&r.every((d,h)=>d===c[h]):r.length===1&&r[0]===c}function WP(r,c){if(r.startsWith("/"))return r;if(!r)return c;const d=c.split("/"),h=r.split("/");let g=d.length-1,m,k;for(m=0;m<h.length;m++)if(k=h[m],k!==".")if(k==="..")g>1&&g--;else break;return d.slice(0,g).join("/")+"/"+h.slice(m-(m===h.length?1:0)).join("/")}var $s;(function(r){r.pop="pop",r.push="push"})($s||($s={}));var Rs;(function(r){r.back="back",r.forward="forward",r.unknown=""})(Rs||(Rs={}));function GP(r){if(!r)if(Dr){const c=document.querySelector("base");r=c&&c.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),UP(r)}const KP=/^[^#]+#/;function YP(r,c){return r.replace(KP,"#")+c}function QP(r,c){const d=document.documentElement.getBoundingClientRect(),h=r.getBoundingClientRect();return{behavior:c.behavior,left:h.left-d.left-(c.left||0),top:h.top-d.top-(c.top||0)}}const qc=()=>({left:window.pageXOffset,top:window.pageYOffset});function ZP(r){let c;if("el"in r){const d=r.el,h=typeof d=="string"&&d.startsWith("#"),g=typeof d=="string"?h?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!g)return;c=QP(g,r)}else c=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function q_(r,c){return(history.state?history.state.position-c:-1)+r}const qu=new Map;function JP(r,c){qu.set(r,c)}function XP(r){const c=qu.get(r);return qu.delete(r),c}let eN=()=>location.protocol+"//"+location.host;function fC(r,c){const{pathname:d,search:h,hash:g}=c,m=r.indexOf("#");if(m>-1){let _=g.includes(r.slice(m))?r.slice(m).length:1,w=g.slice(_);return w[0]!=="/"&&(w="/"+w),H_(w,"")}return H_(d,r)+h+g}function tN(r,c,d,h){let g=[],m=[],k=null;const _=({state:A})=>{const T=fC(r,location),V=d.value,oe=c.value;let X=0;if(A){if(d.value=T,c.value=A,k&&k===V){k=null;return}X=oe?A.position-oe.position:0}else h(T);g.forEach(z=>{z(d.value,V,{delta:X,type:$s.pop,direction:X?X>0?Rs.forward:Rs.back:Rs.unknown})})};function w(){k=d.value}function y(A){g.push(A);const T=()=>{const V=g.indexOf(A);V>-1&&g.splice(V,1)};return m.push(T),T}function C(){const{history:A}=window;!A.state||A.replaceState(ct({},A.state,{scroll:qc()}),"")}function x(){for(const A of m)A();m=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",C)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",C),{pauseListeners:w,listen:y,destroy:x}}function W_(r,c,d,h=!1,g=!1){return{back:r,current:c,forward:d,replaced:h,position:window.history.length,scroll:g?qc():null}}function nN(r){const{history:c,location:d}=window,h={value:fC(r,d)},g={value:c.state};g.value||m(h.value,{back:null,current:h.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function m(w,y,C){const x=r.indexOf("#"),A=x>-1?(d.host&&document.querySelector("base")?r:r.slice(x))+w:eN()+r+w;try{c[C?"replaceState":"pushState"](y,"",A),g.value=y}catch(T){console.error(T),d[C?"replace":"assign"](A)}}function k(w,y){const C=ct({},c.state,W_(g.value.back,w,g.value.forward,!0),y,{position:g.value.position});m(w,C,!0),h.value=w}function _(w,y){const C=ct({},g.value,c.state,{forward:w,scroll:qc()});m(C.current,C,!0);const x=ct({},W_(h.value,w,null),{position:C.position+1},y);m(w,x,!1),h.value=w}return{location:h,state:g,push:_,replace:k}}function oN(r){r=GP(r);const c=nN(r),d=tN(r,c.state,c.location,c.replace);function h(m,k=!0){k||d.pauseListeners(),history.go(m)}const g=ct({location:"",base:r,go:h,createHref:YP.bind(null,r)},c,d);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>c.state.value}),g}function iN(r){return typeof r=="string"||r&&typeof r=="object"}function gC(r){return typeof r=="string"||typeof r=="symbol"}const Vo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pC=Symbol("");var G_;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(G_||(G_={}));function Ur(r,c){return ct(new Error,{type:r,[pC]:!0},c)}function Uo(r,c){return r instanceof Error&&pC in r&&(c==null||!!(r.type&c))}const K_="[^/]+?",rN={sensitive:!1,strict:!1,start:!0,end:!0},sN=/[.+*?^${}()[\]/\\]/g;function aN(r,c){const d=ct({},rN,c),h=[];let g=d.start?"^":"";const m=[];for(const y of r){const C=y.length?[]:[90];d.strict&&!y.length&&(g+="/");for(let x=0;x<y.length;x++){const A=y[x];let T=40+(d.sensitive?.25:0);if(A.type===0)x||(g+="/"),g+=A.value.replace(sN,"\\$&"),T+=40;else if(A.type===1){const{value:V,repeatable:oe,optional:X,regexp:z}=A;m.push({name:V,repeatable:oe,optional:X});const B=z||K_;if(B!==K_){T+=10;try{new RegExp(`(${B})`)}catch(Z){throw new Error(`Invalid custom RegExp for param "${V}" (${B}): `+Z.message)}}let $=oe?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;x||($=X&&y.length<2?`(?:/${$})`:"/"+$),X&&($+="?"),g+=$,T+=20,X&&(T+=-8),oe&&(T+=-20),B===".*"&&(T+=-50)}C.push(T)}h.push(C)}if(d.strict&&d.end){const y=h.length-1;h[y][h[y].length-1]+=.7000000000000001}d.strict||(g+="/?"),d.end?g+="$":d.strict&&(g+="(?:/|$)");const k=new RegExp(g,d.sensitive?"":"i");function _(y){const C=y.match(k),x={};if(!C)return null;for(let A=1;A<C.length;A++){const T=C[A]||"",V=m[A-1];x[V.name]=T&&V.repeatable?T.split("/"):T}return x}function w(y){let C="",x=!1;for(const A of r){(!x||!C.endsWith("/"))&&(C+="/"),x=!1;for(const T of A)if(T.type===0)C+=T.value;else if(T.type===1){const{value:V,repeatable:oe,optional:X}=T,z=V in y?y[V]:"";if(Vn(z)&&!oe)throw new Error(`Provided param "${V}" is an array but it is not repeatable (* or + modifiers)`);const B=Vn(z)?z.join("/"):z;if(!B)if(X)A.length<2&&r.length>1&&(C.endsWith("/")?C=C.slice(0,-1):x=!0);else throw new Error(`Missing required param "${V}"`);C+=B}}return C}return{re:k,score:h,keys:m,parse:_,stringify:w}}function cN(r,c){let d=0;for(;d<r.length&&d<c.length;){const h=c[d]-r[d];if(h)return h;d++}return r.length<c.length?r.length===1&&r[0]===40+40?-1:1:r.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function lN(r,c){let d=0;const h=r.score,g=c.score;for(;d<h.length&&d<g.length;){const m=cN(h[d],g[d]);if(m)return m;d++}if(Math.abs(g.length-h.length)===1){if(Y_(h))return 1;if(Y_(g))return-1}return g.length-h.length}function Y_(r){const c=r[r.length-1];return r.length>0&&c[c.length-1]<0}const dN={type:0,value:""},uN=/[a-zA-Z0-9_]/;function hN(r){if(!r)return[[]];if(r==="/")return[[dN]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function c(T){throw new Error(`ERR (${d})/"${y}": ${T}`)}let d=0,h=d;const g=[];let m;function k(){m&&g.push(m),m=[]}let _=0,w,y="",C="";function x(){!y||(d===0?m.push({type:0,value:y}):d===1||d===2||d===3?(m.length>1&&(w==="*"||w==="+")&&c(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:y,regexp:C,repeatable:w==="*"||w==="+",optional:w==="*"||w==="?"})):c("Invalid state to consume buffer"),y="")}function A(){y+=w}for(;_<r.length;){if(w=r[_++],w==="\\"&&d!==2){h=d,d=4;continue}switch(d){case 0:w==="/"?(y&&x(),k()):w===":"?(x(),d=1):A();break;case 4:A(),d=h;break;case 1:w==="("?d=2:uN.test(w)?A():(x(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&_--);break;case 2:w===")"?C[C.length-1]=="\\"?C=C.slice(0,-1)+w:d=3:C+=w;break;case 3:x(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&_--,C="";break;default:c("Unknown state");break}}return d===2&&c(`Unfinished custom RegExp for param "${y}"`),x(),k(),g}function fN(r,c,d){const h=aN(hN(r.path),d),g=ct(h,{record:r,parent:c,children:[],alias:[]});return c&&!g.record.aliasOf==!c.record.aliasOf&&c.children.push(g),g}function gN(r,c){const d=[],h=new Map;c=Z_({strict:!1,end:!0,sensitive:!1},c);function g(C){return h.get(C)}function m(C,x,A){const T=!A,V=mN(C);V.aliasOf=A&&A.record;const oe=Z_(c,C),X=[V];if("alias"in C){const $=typeof C.alias=="string"?[C.alias]:C.alias;for(const Z of $)X.push(ct({},V,{components:A?A.record.components:V.components,path:Z,aliasOf:A?A.record:V}))}let z,B;for(const $ of X){const{path:Z}=$;if(x&&Z[0]!=="/"){const ie=x.record.path,ge=ie[ie.length-1]==="/"?"":"/";$.path=x.record.path+(Z&&ge+Z)}if(z=fN($,x,oe),A?A.alias.push(z):(B=B||z,B!==z&&B.alias.push(z),T&&C.name&&!Q_(z)&&k(C.name)),V.children){const ie=V.children;for(let ge=0;ge<ie.length;ge++)m(ie[ge],z,A&&A.children[ge])}A=A||z,w(z)}return B?()=>{k(B)}:Ls}function k(C){if(gC(C)){const x=h.get(C);x&&(h.delete(C),d.splice(d.indexOf(x),1),x.children.forEach(k),x.alias.forEach(k))}else{const x=d.indexOf(C);x>-1&&(d.splice(x,1),C.record.name&&h.delete(C.record.name),C.children.forEach(k),C.alias.forEach(k))}}function _(){return d}function w(C){let x=0;for(;x<d.length&&lN(C,d[x])>=0&&(C.record.path!==d[x].record.path||!mC(C,d[x]));)x++;d.splice(x,0,C),C.record.name&&!Q_(C)&&h.set(C.record.name,C)}function y(C,x){let A,T={},V,oe;if("name"in C&&C.name){if(A=h.get(C.name),!A)throw Ur(1,{location:C});oe=A.record.name,T=ct(pN(x.params,A.keys.filter(B=>!B.optional).map(B=>B.name)),C.params),V=A.stringify(T)}else if("path"in C)V=C.path,A=d.find(B=>B.re.test(V)),A&&(T=A.parse(V),oe=A.record.name);else{if(A=x.name?h.get(x.name):d.find(B=>B.re.test(x.path)),!A)throw Ur(1,{location:C,currentLocation:x});oe=A.record.name,T=ct({},x.params,C.params),V=A.stringify(T)}const X=[];let z=A;for(;z;)X.unshift(z.record),z=z.parent;return{name:oe,path:V,params:T,matched:X,meta:bN(X)}}return r.forEach(C=>m(C)),{addRoute:m,resolve:y,removeRoute:k,getRoutes:_,getRecordMatcher:g}}function pN(r,c){const d={};for(const h of c)h in r&&(d[h]=r[h]);return d}function mN(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:kN(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function kN(r){const c={},d=r.props||!1;if("component"in r)c.default=d;else for(const h in r.components)c[h]=typeof d=="boolean"?d:d[h];return c}function Q_(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function bN(r){return r.reduce((c,d)=>ct(c,d.meta),{})}function Z_(r,c){const d={};for(const h in r)d[h]=h in c?c[h]:r[h];return d}function mC(r,c){return c.children.some(d=>d===r||mC(r,d))}const kC=/#/g,wN=/&/g,_N=/\//g,AN=/=/g,vN=/\?/g,bC=/\+/g,CN=/%5B/g,yN=/%5D/g,wC=/%5E/g,xN=/%60/g,_C=/%7B/g,EN=/%7C/g,AC=/%7D/g,DN=/%20/g;function Ih(r){return encodeURI(""+r).replace(EN,"|").replace(CN,"[").replace(yN,"]")}function SN(r){return Ih(r).replace(_C,"{").replace(AC,"}").replace(wC,"^")}function Wu(r){return Ih(r).replace(bC,"%2B").replace(DN,"+").replace(kC,"%23").replace(wN,"%26").replace(xN,"`").replace(_C,"{").replace(AC,"}").replace(wC,"^")}function TN(r){return Wu(r).replace(AN,"%3D")}function IN(r){return Ih(r).replace(kC,"%23").replace(vN,"%3F")}function MN(r){return r==null?"":IN(r).replace(_N,"%2F")}function _c(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function PN(r){const c={};if(r===""||r==="?")return c;const h=(r[0]==="?"?r.slice(1):r).split("&");for(let g=0;g<h.length;++g){const m=h[g].replace(bC," "),k=m.indexOf("="),_=_c(k<0?m:m.slice(0,k)),w=k<0?null:_c(m.slice(k+1));if(_ in c){let y=c[_];Vn(y)||(y=c[_]=[y]),y.push(w)}else c[_]=w}return c}function J_(r){let c="";for(let d in r){const h=r[d];if(d=TN(d),h==null){h!==void 0&&(c+=(c.length?"&":"")+d);continue}(Vn(h)?h.map(m=>m&&Wu(m)):[h&&Wu(h)]).forEach(m=>{m!==void 0&&(c+=(c.length?"&":"")+d,m!=null&&(c+="="+m))})}return c}function NN(r){const c={};for(const d in r){const h=r[d];h!==void 0&&(c[d]=Vn(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return c}const BN=Symbol(""),X_=Symbol(""),Mh=Symbol(""),vC=Symbol(""),Gu=Symbol("");function As(){let r=[];function c(h){return r.push(h),()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)}}function d(){r=[]}return{add:c,list:()=>r,reset:d}}function Wo(r,c,d,h,g){const m=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((k,_)=>{const w=x=>{x===!1?_(Ur(4,{from:d,to:c})):x instanceof Error?_(x):iN(x)?_(Ur(2,{from:c,to:x})):(m&&h.enterCallbacks[g]===m&&typeof x=="function"&&m.push(x),k())},y=r.call(h&&h.instances[g],c,d,w);let C=Promise.resolve(y);r.length<3&&(C=C.then(w)),C.catch(x=>_(x))})}function uu(r,c,d,h){const g=[];for(const m of r)for(const k in m.components){let _=m.components[k];if(!(c!=="beforeRouteEnter"&&!m.instances[k]))if(ON(_)){const y=(_.__vccOpts||_)[c];y&&g.push(Wo(y,d,h,m,k))}else{let w=_();g.push(()=>w.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${k}" at "${m.path}"`));const C=FP(y)?y.default:y;m.components[k]=C;const A=(C.__vccOpts||C)[c];return A&&Wo(A,d,h,m,k)()}))}}return g}function ON(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function eA(r){const c=Fn(Mh),d=Fn(vC),h=bt(()=>c.resolve(Se(r.to))),g=bt(()=>{const{matched:w}=h.value,{length:y}=w,C=w[y-1],x=d.matched;if(!C||!x.length)return-1;const A=x.findIndex(Vr.bind(null,C));if(A>-1)return A;const T=tA(w[y-2]);return y>1&&tA(C)===T&&x[x.length-1].path!==T?x.findIndex(Vr.bind(null,w[y-2])):A}),m=bt(()=>g.value>-1&&jN(d.params,h.value.params)),k=bt(()=>g.value>-1&&g.value===d.matched.length-1&&hC(d.params,h.value.params));function _(w={}){return zN(w)?c[Se(r.replace)?"replace":"push"](Se(r.to)).catch(Ls):Promise.resolve()}return{route:h,href:bt(()=>h.value.href),isActive:m,isExactActive:k,navigate:_}}const LN=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eA,setup(r,{slots:c}){const d=co(eA(r)),{options:h}=Fn(Mh),g=bt(()=>({[nA(r.activeClass,h.linkActiveClass,"router-link-active")]:d.isActive,[nA(r.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const m=c.default&&c.default(d);return r.custom?m:Vc("a",{"aria-current":d.isExactActive?r.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:g.value},m)}}}),RN=LN;function zN(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const c=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return r.preventDefault&&r.preventDefault(),!0}}function jN(r,c){for(const d in c){const h=c[d],g=r[d];if(typeof h=="string"){if(h!==g)return!1}else if(!Vn(g)||g.length!==h.length||h.some((m,k)=>m!==g[k]))return!1}return!0}function tA(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const nA=(r,c,d)=>r!=null?r:c!=null?c:d,FN=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:c,slots:d}){const h=Fn(Gu),g=bt(()=>r.route||h.value),m=Fn(X_,0),k=bt(()=>{let y=Se(m);const{matched:C}=g.value;let x;for(;(x=C[y])&&!x.components;)y++;return y}),_=bt(()=>g.value.matched[k.value]);Ps(X_,bt(()=>k.value+1)),Ps(BN,_),Ps(Gu,g);const w=jn();return Zo(()=>[w.value,_.value,r.name],([y,C,x],[A,T,V])=>{C&&(C.instances[x]=y,T&&T!==C&&y&&y===A&&(C.leaveGuards.size||(C.leaveGuards=T.leaveGuards),C.updateGuards.size||(C.updateGuards=T.updateGuards))),y&&C&&(!T||!Vr(C,T)||!A)&&(C.enterCallbacks[x]||[]).forEach(oe=>oe(y))},{flush:"post"}),()=>{const y=g.value,C=_.value,x=C&&C.components[r.name],A=r.name;if(!x)return oA(d.default,{Component:x,route:y});const T=C.props[r.name],V=T?T===!0?y.params:typeof T=="function"?T(y):T:null,X=Vc(x,ct({},V,c,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(C.instances[A]=null)},ref:w}));return oA(d.default,{Component:X,route:y})||X}}});function oA(r,c){if(!r)return null;const d=r(c);return d.length===1?d[0]:d}const VN=FN;function UN(r){const c=gN(r.routes,r),d=r.parseQuery||PN,h=r.stringifyQuery||J_,g=r.history,m=As(),k=As(),_=As(),w=LA(Vo);let y=Vo;Dr&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const C=lu.bind(null,O=>""+O),x=lu.bind(null,MN),A=lu.bind(null,_c);function T(O,se){let re,Q;return gC(O)?(re=c.getRecordMatcher(O),Q=se):Q=O,c.addRoute(Q,re)}function V(O){const se=c.getRecordMatcher(O);se&&c.removeRoute(se)}function oe(){return c.getRoutes().map(O=>O.record)}function X(O){return!!c.getRecordMatcher(O)}function z(O,se){if(se=ct({},se||w.value),typeof O=="string"){const Ee=du(d,O,se.path),M=c.resolve({path:Ee.path},se),R=g.createHref(Ee.fullPath);return ct(Ee,M,{params:A(M.params),hash:_c(Ee.hash),redirectedFrom:void 0,href:R})}let re;if("path"in O)re=ct({},O,{path:du(d,O.path,se.path).path});else{const Ee=ct({},O.params);for(const M in Ee)Ee[M]==null&&delete Ee[M];re=ct({},O,{params:x(O.params)}),se.params=x(se.params)}const Q=c.resolve(re,se),W=O.hash||"";Q.params=C(A(Q.params));const Ue=HP(h,ct({},O,{hash:SN(W),path:Q.path})),he=g.createHref(Ue);return ct({fullPath:Ue,hash:W,query:h===J_?NN(O.query):O.query||{}},Q,{redirectedFrom:void 0,href:he})}function B(O){return typeof O=="string"?du(d,O,w.value.path):ct({},O)}function $(O,se){if(y!==O)return Ur(8,{from:se,to:O})}function Z(O){return L(O)}function ie(O){return Z(ct(B(O),{replace:!0}))}function ge(O){const se=O.matched[O.matched.length-1];if(se&&se.redirect){const{redirect:re}=se;let Q=typeof re=="function"?re(O):re;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=B(Q):{path:Q},Q.params={}),ct({query:O.query,hash:O.hash,params:"path"in Q?{}:O.params},Q)}}function L(O,se){const re=y=z(O),Q=w.value,W=O.state,Ue=O.force,he=O.replace===!0,Ee=ge(re);if(Ee)return L(ct(B(Ee),{state:W,force:Ue,replace:he}),se||re);const M=re;M.redirectedFrom=se;let R;return!Ue&&$P(h,Q,re)&&(R=Ur(16,{to:M,from:Q}),tt(Q,Q,!0,!1)),(R?Promise.resolve(R):U(M,Q)).catch(q=>Uo(q)?Uo(q,2)?q:lt(q):De(q,M,Q)).then(q=>{if(q){if(Uo(q,2))return L(ct(B(q.to),{state:W,force:Ue,replace:he}),se||M)}else q=K(M,Q,!0,he,W);return H(M,Q,q),q})}function j(O,se){const re=$(O,se);return re?Promise.reject(re):Promise.resolve()}function U(O,se){let re;const[Q,W,Ue]=HN(O,se);re=uu(Q.reverse(),"beforeRouteLeave",O,se);for(const Ee of Q)Ee.leaveGuards.forEach(M=>{re.push(Wo(M,O,se))});const he=j.bind(null,O,se);return re.push(he),Ar(re).then(()=>{re=[];for(const Ee of m.list())re.push(Wo(Ee,O,se));return re.push(he),Ar(re)}).then(()=>{re=uu(W,"beforeRouteUpdate",O,se);for(const Ee of W)Ee.updateGuards.forEach(M=>{re.push(Wo(M,O,se))});return re.push(he),Ar(re)}).then(()=>{re=[];for(const Ee of O.matched)if(Ee.beforeEnter&&!se.matched.includes(Ee))if(Vn(Ee.beforeEnter))for(const M of Ee.beforeEnter)re.push(Wo(M,O,se));else re.push(Wo(Ee.beforeEnter,O,se));return re.push(he),Ar(re)}).then(()=>(O.matched.forEach(Ee=>Ee.enterCallbacks={}),re=uu(Ue,"beforeRouteEnter",O,se),re.push(he),Ar(re))).then(()=>{re=[];for(const Ee of k.list())re.push(Wo(Ee,O,se));return re.push(he),Ar(re)}).catch(Ee=>Uo(Ee,8)?Ee:Promise.reject(Ee))}function H(O,se,re){for(const Q of _.list())Q(O,se,re)}function K(O,se,re,Q,W){const Ue=$(O,se);if(Ue)return Ue;const he=se===Vo,Ee=Dr?history.state:{};re&&(Q||he?g.replace(O.fullPath,ct({scroll:he&&Ee&&Ee.scroll},W)):g.push(O.fullPath,W)),w.value=O,tt(O,se,re,he),lt()}let Y;function fe(){Y||(Y=g.listen((O,se,re)=>{const Q=z(O),W=ge(Q);if(W){L(ct(W,{replace:!0}),Q).catch(Ls);return}y=Q;const Ue=w.value;Dr&&JP(q_(Ue.fullPath,re.delta),qc()),U(Q,Ue).catch(he=>Uo(he,12)?he:Uo(he,2)?(L(he.to,Q).then(Ee=>{Uo(Ee,20)&&!re.delta&&re.type===$s.pop&&g.go(-1,!1)}).catch(Ls),Promise.reject()):(re.delta&&g.go(-re.delta,!1),De(he,Q,Ue))).then(he=>{he=he||K(Q,Ue,!1),he&&(re.delta?g.go(-re.delta,!1):re.type===$s.pop&&Uo(he,20)&&g.go(-1,!1)),H(Q,Ue,he)}).catch(Ls)}))}let pe=As(),xe=As(),Te;function De(O,se,re){lt(O);const Q=xe.list();return Q.length?Q.forEach(W=>W(O,se,re)):console.error(O),Promise.reject(O)}function Fe(){return Te&&w.value!==Vo?Promise.resolve():new Promise((O,se)=>{pe.add([O,se])})}function lt(O){return Te||(Te=!O,fe(),pe.list().forEach(([se,re])=>O?re(O):se()),pe.reset()),O}function tt(O,se,re,Q){const{scrollBehavior:W}=r;if(!Dr||!W)return Promise.resolve();const Ue=!re&&XP(q_(O.fullPath,0))||(Q||!re)&&history.state&&history.state.scroll||null;return so().then(()=>W(O,se,Ue)).then(he=>he&&ZP(he)).catch(he=>De(he,O,se))}const Ye=O=>g.go(O);let Ie;const nt=new Set;return{currentRoute:w,listening:!0,addRoute:T,removeRoute:V,hasRoute:X,getRoutes:oe,resolve:z,options:r,push:Z,replace:ie,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:m.add,beforeResolve:k.add,afterEach:_.add,onError:xe.add,isReady:Fe,install(O){const se=this;O.component("RouterLink",RN),O.component("RouterView",VN),O.config.globalProperties.$router=se,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(w)}),Dr&&!Ie&&w.value===Vo&&(Ie=!0,Z(g.location).catch(W=>{}));const re={};for(const W in Vo)re[W]=bt(()=>w.value[W]);O.provide(Mh,se),O.provide(vC,co(re)),O.provide(Gu,w);const Q=O.unmount;nt.add(O),O.unmount=function(){nt.delete(O),nt.size<1&&(y=Vo,Y&&Y(),Y=null,w.value=Vo,Ie=!1,Te=!1),Q()}}}}function Ar(r){return r.reduce((c,d)=>c.then(()=>d()),Promise.resolve())}function HN(r,c){const d=[],h=[],g=[],m=Math.max(c.matched.length,r.matched.length);for(let k=0;k<m;k++){const _=c.matched[k];_&&(r.matched.find(y=>Vr(y,_))?h.push(_):d.push(_));const w=r.matched[k];w&&(c.matched.find(y=>Vr(y,w))||g.push(w))}return[d,h,g]}var Ph={exports:{}},CC=function(c,d){return function(){for(var g=new Array(arguments.length),m=0;m<g.length;m++)g[m]=arguments[m];return c.apply(d,g)}},$N=CC,Nh=Object.prototype.toString,Bh=function(r){return function(c){var d=Nh.call(c);return r[d]||(r[d]=d.slice(8,-1).toLowerCase())}}(Object.create(null));function qi(r){return r=r.toLowerCase(),function(d){return Bh(d)===r}}function Oh(r){return Array.isArray(r)}function Ac(r){return typeof r=="undefined"}function qN(r){return r!==null&&!Ac(r)&&r.constructor!==null&&!Ac(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var yC=qi("ArrayBuffer");function WN(r){var c;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?c=ArrayBuffer.isView(r):c=r&&r.buffer&&yC(r.buffer),c}function GN(r){return typeof r=="string"}function KN(r){return typeof r=="number"}function xC(r){return r!==null&&typeof r=="object"}function cc(r){if(Bh(r)!=="object")return!1;var c=Object.getPrototypeOf(r);return c===null||c===Object.prototype}var YN=qi("Date"),QN=qi("File"),ZN=qi("Blob"),JN=qi("FileList");function Lh(r){return Nh.call(r)==="[object Function]"}function XN(r){return xC(r)&&Lh(r.pipe)}function eB(r){var c="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Nh.call(r)===c||Lh(r.toString)&&r.toString()===c)}var tB=qi("URLSearchParams");function nB(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function oB(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Rh(r,c){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Oh(r))for(var d=0,h=r.length;d<h;d++)c.call(null,r[d],d,r);else for(var g in r)Object.prototype.hasOwnProperty.call(r,g)&&c.call(null,r[g],g,r)}function Ku(){var r={};function c(g,m){cc(r[m])&&cc(g)?r[m]=Ku(r[m],g):cc(g)?r[m]=Ku({},g):Oh(g)?r[m]=g.slice():r[m]=g}for(var d=0,h=arguments.length;d<h;d++)Rh(arguments[d],c);return r}function iB(r,c,d){return Rh(c,function(g,m){d&&typeof g=="function"?r[m]=$N(g,d):r[m]=g}),r}function rB(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function sB(r,c,d,h){r.prototype=Object.create(c.prototype,h),r.prototype.constructor=r,d&&Object.assign(r.prototype,d)}function aB(r,c,d){var h,g,m,k={};c=c||{};do{for(h=Object.getOwnPropertyNames(r),g=h.length;g-- >0;)m=h[g],k[m]||(c[m]=r[m],k[m]=!0);r=Object.getPrototypeOf(r)}while(r&&(!d||d(r,c))&&r!==Object.prototype);return c}function cB(r,c,d){r=String(r),(d===void 0||d>r.length)&&(d=r.length),d-=c.length;var h=r.indexOf(c,d);return h!==-1&&h===d}function lB(r){if(!r)return null;var c=r.length;if(Ac(c))return null;for(var d=new Array(c);c-- >0;)d[c]=r[c];return d}var dB=function(r){return function(c){return r&&c instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),jt={isArray:Oh,isArrayBuffer:yC,isBuffer:qN,isFormData:eB,isArrayBufferView:WN,isString:GN,isNumber:KN,isObject:xC,isPlainObject:cc,isUndefined:Ac,isDate:YN,isFile:QN,isBlob:ZN,isFunction:Lh,isStream:XN,isURLSearchParams:tB,isStandardBrowserEnv:oB,forEach:Rh,merge:Ku,extend:iB,trim:nB,stripBOM:rB,inherits:sB,toFlatObject:aB,kindOf:Bh,kindOfTest:qi,endsWith:cB,toArray:lB,isTypedArray:dB,isFileList:JN},vr=jt;function iA(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var EC=function(c,d,h){if(!d)return c;var g;if(h)g=h(d);else if(vr.isURLSearchParams(d))g=d.toString();else{var m=[];vr.forEach(d,function(w,y){w===null||typeof w=="undefined"||(vr.isArray(w)?y=y+"[]":w=[w],vr.forEach(w,function(x){vr.isDate(x)?x=x.toISOString():vr.isObject(x)&&(x=JSON.stringify(x)),m.push(iA(y)+"="+iA(x))}))}),g=m.join("&")}if(g){var k=c.indexOf("#");k!==-1&&(c=c.slice(0,k)),c+=(c.indexOf("?")===-1?"?":"&")+g}return c},uB=jt;function Wc(){this.handlers=[]}Wc.prototype.use=function(c,d,h){return this.handlers.push({fulfilled:c,rejected:d,synchronous:h?h.synchronous:!1,runWhen:h?h.runWhen:null}),this.handlers.length-1};Wc.prototype.eject=function(c){this.handlers[c]&&(this.handlers[c]=null)};Wc.prototype.forEach=function(c){uB.forEach(this.handlers,function(h){h!==null&&c(h)})};var hB=Wc,fB=jt,gB=function(c,d){fB.forEach(c,function(g,m){m!==d&&m.toUpperCase()===d.toUpperCase()&&(c[d]=g,delete c[m])})},DC=jt;function Hr(r,c,d,h,g){Error.call(this),this.message=r,this.name="AxiosError",c&&(this.code=c),d&&(this.config=d),h&&(this.request=h),g&&(this.response=g)}DC.inherits(Hr,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var SC=Hr.prototype,TC={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){TC[r]={value:r}});Object.defineProperties(Hr,TC);Object.defineProperty(SC,"isAxiosError",{value:!0});Hr.from=function(r,c,d,h,g,m){var k=Object.create(SC);return DC.toFlatObject(r,k,function(w){return w!==Error.prototype}),Hr.call(k,r.message,c,d,h,g),k.name=r.name,m&&Object.assign(k,m),k};var Kr=Hr,IC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bn=jt;function pB(r,c){c=c||new FormData;var d=[];function h(m){return m===null?"":Bn.isDate(m)?m.toISOString():Bn.isArrayBuffer(m)||Bn.isTypedArray(m)?typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function g(m,k){if(Bn.isPlainObject(m)||Bn.isArray(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+k);d.push(m),Bn.forEach(m,function(w,y){if(!Bn.isUndefined(w)){var C=k?k+"."+y:y,x;if(w&&!k&&typeof w=="object"){if(Bn.endsWith(y,"{}"))w=JSON.stringify(w);else if(Bn.endsWith(y,"[]")&&(x=Bn.toArray(w))){x.forEach(function(A){!Bn.isUndefined(A)&&c.append(C,h(A))});return}}g(w,C)}}),d.pop()}else c.append(k,h(m))}return g(r),c}var MC=pB,hu=Kr,mB=function(c,d,h){var g=h.config.validateStatus;!h.status||!g||g(h.status)?c(h):d(new hu("Request failed with status code "+h.status,[hu.ERR_BAD_REQUEST,hu.ERR_BAD_RESPONSE][Math.floor(h.status/100)-4],h.config,h.request,h))},nc=jt,kB=nc.isStandardBrowserEnv()?function(){return{write:function(d,h,g,m,k,_){var w=[];w.push(d+"="+encodeURIComponent(h)),nc.isNumber(g)&&w.push("expires="+new Date(g).toGMTString()),nc.isString(m)&&w.push("path="+m),nc.isString(k)&&w.push("domain="+k),_===!0&&w.push("secure"),document.cookie=w.join("; ")},read:function(d){var h=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return h?decodeURIComponent(h[3]):null},remove:function(d){this.write(d,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),bB=function(c){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(c)},wB=function(c,d){return d?c.replace(/\/+$/,"")+"/"+d.replace(/^\/+/,""):c},_B=bB,AB=wB,PC=function(c,d){return c&&!_B(d)?AB(c,d):d},fu=jt,vB=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],CB=function(c){var d={},h,g,m;return c&&fu.forEach(c.split(`
`),function(_){if(m=_.indexOf(":"),h=fu.trim(_.substr(0,m)).toLowerCase(),g=fu.trim(_.substr(m+1)),h){if(d[h]&&vB.indexOf(h)>=0)return;h==="set-cookie"?d[h]=(d[h]?d[h]:[]).concat([g]):d[h]=d[h]?d[h]+", "+g:g}}),d},rA=jt,yB=rA.isStandardBrowserEnv()?function(){var c=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a"),h;function g(m){var k=m;return c&&(d.setAttribute("href",k),k=d.href),d.setAttribute("href",k),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return h=g(window.location.href),function(k){var _=rA.isString(k)?g(k):k;return _.protocol===h.protocol&&_.host===h.host}}():function(){return function(){return!0}}(),Yu=Kr,xB=jt;function NC(r){Yu.call(this,r==null?"canceled":r,Yu.ERR_CANCELED),this.name="CanceledError"}xB.inherits(NC,Yu,{__CANCEL__:!0});var Gc=NC,EB=function(c){var d=/^([-+\w]{1,25})(:?\/\/|:)/.exec(c);return d&&d[1]||""},vs=jt,DB=mB,SB=kB,TB=EC,IB=PC,MB=CB,PB=yB,NB=IC,vo=Kr,BB=Gc,OB=EB,sA=function(c){return new Promise(function(h,g){var m=c.data,k=c.headers,_=c.responseType,w;function y(){c.cancelToken&&c.cancelToken.unsubscribe(w),c.signal&&c.signal.removeEventListener("abort",w)}vs.isFormData(m)&&vs.isStandardBrowserEnv()&&delete k["Content-Type"];var C=new XMLHttpRequest;if(c.auth){var x=c.auth.username||"",A=c.auth.password?unescape(encodeURIComponent(c.auth.password)):"";k.Authorization="Basic "+btoa(x+":"+A)}var T=IB(c.baseURL,c.url);C.open(c.method.toUpperCase(),TB(T,c.params,c.paramsSerializer),!0),C.timeout=c.timeout;function V(){if(!!C){var z="getAllResponseHeaders"in C?MB(C.getAllResponseHeaders()):null,B=!_||_==="text"||_==="json"?C.responseText:C.response,$={data:B,status:C.status,statusText:C.statusText,headers:z,config:c,request:C};DB(function(ie){h(ie),y()},function(ie){g(ie),y()},$),C=null}}if("onloadend"in C?C.onloadend=V:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(V)},C.onabort=function(){!C||(g(new vo("Request aborted",vo.ECONNABORTED,c,C)),C=null)},C.onerror=function(){g(new vo("Network Error",vo.ERR_NETWORK,c,C,C)),C=null},C.ontimeout=function(){var B=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded",$=c.transitional||NB;c.timeoutErrorMessage&&(B=c.timeoutErrorMessage),g(new vo(B,$.clarifyTimeoutError?vo.ETIMEDOUT:vo.ECONNABORTED,c,C)),C=null},vs.isStandardBrowserEnv()){var oe=(c.withCredentials||PB(T))&&c.xsrfCookieName?SB.read(c.xsrfCookieName):void 0;oe&&(k[c.xsrfHeaderName]=oe)}"setRequestHeader"in C&&vs.forEach(k,function(B,$){typeof m=="undefined"&&$.toLowerCase()==="content-type"?delete k[$]:C.setRequestHeader($,B)}),vs.isUndefined(c.withCredentials)||(C.withCredentials=!!c.withCredentials),_&&_!=="json"&&(C.responseType=c.responseType),typeof c.onDownloadProgress=="function"&&C.addEventListener("progress",c.onDownloadProgress),typeof c.onUploadProgress=="function"&&C.upload&&C.upload.addEventListener("progress",c.onUploadProgress),(c.cancelToken||c.signal)&&(w=function(z){!C||(g(!z||z&&z.type?new BB:z),C.abort(),C=null)},c.cancelToken&&c.cancelToken.subscribe(w),c.signal&&(c.signal.aborted?w():c.signal.addEventListener("abort",w))),m||(m=null);var X=OB(T);if(X&&["http","https","file"].indexOf(X)===-1){g(new vo("Unsupported protocol "+X+":",vo.ERR_BAD_REQUEST,c));return}C.send(m)})},LB=null,Mt=jt,aA=gB,cA=Kr,RB=IC,zB=MC,jB={"Content-Type":"application/x-www-form-urlencoded"};function lA(r,c){!Mt.isUndefined(r)&&Mt.isUndefined(r["Content-Type"])&&(r["Content-Type"]=c)}function FB(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=sA),r}function VB(r,c,d){if(Mt.isString(r))try{return(c||JSON.parse)(r),Mt.trim(r)}catch(h){if(h.name!=="SyntaxError")throw h}return(d||JSON.stringify)(r)}var Kc={transitional:RB,adapter:FB(),transformRequest:[function(c,d){if(aA(d,"Accept"),aA(d,"Content-Type"),Mt.isFormData(c)||Mt.isArrayBuffer(c)||Mt.isBuffer(c)||Mt.isStream(c)||Mt.isFile(c)||Mt.isBlob(c))return c;if(Mt.isArrayBufferView(c))return c.buffer;if(Mt.isURLSearchParams(c))return lA(d,"application/x-www-form-urlencoded;charset=utf-8"),c.toString();var h=Mt.isObject(c),g=d&&d["Content-Type"],m;if((m=Mt.isFileList(c))||h&&g==="multipart/form-data"){var k=this.env&&this.env.FormData;return zB(m?{"files[]":c}:c,k&&new k)}else if(h||g==="application/json")return lA(d,"application/json"),VB(c);return c}],transformResponse:[function(c){var d=this.transitional||Kc.transitional,h=d&&d.silentJSONParsing,g=d&&d.forcedJSONParsing,m=!h&&this.responseType==="json";if(m||g&&Mt.isString(c)&&c.length)try{return JSON.parse(c)}catch(k){if(m)throw k.name==="SyntaxError"?cA.from(k,cA.ERR_BAD_RESPONSE,this,null,this.response):k}return c}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:LB},validateStatus:function(c){return c>=200&&c<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};Mt.forEach(["delete","get","head"],function(c){Kc.headers[c]={}});Mt.forEach(["post","put","patch"],function(c){Kc.headers[c]=Mt.merge(jB)});var zh=Kc,UB=jt,HB=zh,$B=function(c,d,h){var g=this||HB;return UB.forEach(h,function(k){c=k.call(g,c,d)}),c},BC=function(c){return!!(c&&c.__CANCEL__)},dA=jt,gu=$B,qB=BC,WB=zh,GB=Gc;function pu(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new GB}var KB=function(c){pu(c),c.headers=c.headers||{},c.data=gu.call(c,c.data,c.headers,c.transformRequest),c.headers=dA.merge(c.headers.common||{},c.headers[c.method]||{},c.headers),dA.forEach(["delete","get","head","post","put","patch","common"],function(g){delete c.headers[g]});var d=c.adapter||WB.adapter;return d(c).then(function(g){return pu(c),g.data=gu.call(c,g.data,g.headers,c.transformResponse),g},function(g){return qB(g)||(pu(c),g&&g.response&&(g.response.data=gu.call(c,g.response.data,g.response.headers,c.transformResponse))),Promise.reject(g)})},dn=jt,OC=function(c,d){d=d||{};var h={};function g(C,x){return dn.isPlainObject(C)&&dn.isPlainObject(x)?dn.merge(C,x):dn.isPlainObject(x)?dn.merge({},x):dn.isArray(x)?x.slice():x}function m(C){if(dn.isUndefined(d[C])){if(!dn.isUndefined(c[C]))return g(void 0,c[C])}else return g(c[C],d[C])}function k(C){if(!dn.isUndefined(d[C]))return g(void 0,d[C])}function _(C){if(dn.isUndefined(d[C])){if(!dn.isUndefined(c[C]))return g(void 0,c[C])}else return g(void 0,d[C])}function w(C){if(C in d)return g(c[C],d[C]);if(C in c)return g(void 0,c[C])}var y={url:k,method:k,data:k,baseURL:_,transformRequest:_,transformResponse:_,paramsSerializer:_,timeout:_,timeoutMessage:_,withCredentials:_,adapter:_,responseType:_,xsrfCookieName:_,xsrfHeaderName:_,onUploadProgress:_,onDownloadProgress:_,decompress:_,maxContentLength:_,maxBodyLength:_,beforeRedirect:_,transport:_,httpAgent:_,httpsAgent:_,cancelToken:_,socketPath:_,responseEncoding:_,validateStatus:w};return dn.forEach(Object.keys(c).concat(Object.keys(d)),function(x){var A=y[x]||m,T=A(x);dn.isUndefined(T)&&A!==w||(h[x]=T)}),h},LC={version:"0.27.2"},YB=LC.version,Go=Kr,jh={};["object","boolean","number","function","string","symbol"].forEach(function(r,c){jh[r]=function(h){return typeof h===r||"a"+(c<1?"n ":" ")+r}});var uA={};jh.transitional=function(c,d,h){function g(m,k){return"[Axios v"+YB+"] Transitional option '"+m+"'"+k+(h?". "+h:"")}return function(m,k,_){if(c===!1)throw new Go(g(k," has been removed"+(d?" in "+d:"")),Go.ERR_DEPRECATED);return d&&!uA[k]&&(uA[k]=!0,console.warn(g(k," has been deprecated since v"+d+" and will be removed in the near future"))),c?c(m,k,_):!0}};function QB(r,c,d){if(typeof r!="object")throw new Go("options must be an object",Go.ERR_BAD_OPTION_VALUE);for(var h=Object.keys(r),g=h.length;g-- >0;){var m=h[g],k=c[m];if(k){var _=r[m],w=_===void 0||k(_,m,r);if(w!==!0)throw new Go("option "+m+" must be "+w,Go.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new Go("Unknown option "+m,Go.ERR_BAD_OPTION)}}var ZB={assertOptions:QB,validators:jh},RC=jt,JB=EC,hA=hB,fA=KB,Yc=OC,XB=PC,zC=ZB,Cr=zC.validators;function $r(r){this.defaults=r,this.interceptors={request:new hA,response:new hA}}$r.prototype.request=function(c,d){typeof c=="string"?(d=d||{},d.url=c):d=c||{},d=Yc(this.defaults,d),d.method?d.method=d.method.toLowerCase():this.defaults.method?d.method=this.defaults.method.toLowerCase():d.method="get";var h=d.transitional;h!==void 0&&zC.assertOptions(h,{silentJSONParsing:Cr.transitional(Cr.boolean),forcedJSONParsing:Cr.transitional(Cr.boolean),clarifyTimeoutError:Cr.transitional(Cr.boolean)},!1);var g=[],m=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(d)===!1||(m=m&&T.synchronous,g.unshift(T.fulfilled,T.rejected))});var k=[];this.interceptors.response.forEach(function(T){k.push(T.fulfilled,T.rejected)});var _;if(!m){var w=[fA,void 0];for(Array.prototype.unshift.apply(w,g),w=w.concat(k),_=Promise.resolve(d);w.length;)_=_.then(w.shift(),w.shift());return _}for(var y=d;g.length;){var C=g.shift(),x=g.shift();try{y=C(y)}catch(A){x(A);break}}try{_=fA(y)}catch(A){return Promise.reject(A)}for(;k.length;)_=_.then(k.shift(),k.shift());return _};$r.prototype.getUri=function(c){c=Yc(this.defaults,c);var d=XB(c.baseURL,c.url);return JB(d,c.params,c.paramsSerializer)};RC.forEach(["delete","get","head","options"],function(c){$r.prototype[c]=function(d,h){return this.request(Yc(h||{},{method:c,url:d,data:(h||{}).data}))}});RC.forEach(["post","put","patch"],function(c){function d(h){return function(m,k,_){return this.request(Yc(_||{},{method:c,headers:h?{"Content-Type":"multipart/form-data"}:{},url:m,data:k}))}}$r.prototype[c]=d(),$r.prototype[c+"Form"]=d(!0)});var eO=$r,tO=Gc;function qr(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var c;this.promise=new Promise(function(g){c=g});var d=this;this.promise.then(function(h){if(!!d._listeners){var g,m=d._listeners.length;for(g=0;g<m;g++)d._listeners[g](h);d._listeners=null}}),this.promise.then=function(h){var g,m=new Promise(function(k){d.subscribe(k),g=k}).then(h);return m.cancel=function(){d.unsubscribe(g)},m},r(function(g){d.reason||(d.reason=new tO(g),c(d.reason))})}qr.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};qr.prototype.subscribe=function(c){if(this.reason){c(this.reason);return}this._listeners?this._listeners.push(c):this._listeners=[c]};qr.prototype.unsubscribe=function(c){if(!!this._listeners){var d=this._listeners.indexOf(c);d!==-1&&this._listeners.splice(d,1)}};qr.source=function(){var c,d=new qr(function(g){c=g});return{token:d,cancel:c}};var nO=qr,oO=function(c){return function(h){return c.apply(null,h)}},iO=jt,rO=function(c){return iO.isObject(c)&&c.isAxiosError===!0},gA=jt,sO=CC,lc=eO,aO=OC,cO=zh;function jC(r){var c=new lc(r),d=sO(lc.prototype.request,c);return gA.extend(d,lc.prototype,c),gA.extend(d,c),d.create=function(g){return jC(aO(r,g))},d}var rn=jC(cO);rn.Axios=lc;rn.CanceledError=Gc;rn.CancelToken=nO;rn.isCancel=BC;rn.VERSION=LC.version;rn.toFormData=MC;rn.AxiosError=Kr;rn.Cancel=rn.CanceledError;rn.all=function(c){return Promise.all(c)};rn.spread=oO;rn.isAxiosError=rO;Ph.exports=rn;Ph.exports.default=rn;var Do=Ph.exports;const pA="https://elapor.helpulstudio.com/api",ro=$c({id:"auth",state:()=>({token:"",user:[]}),getters:{getToken:r=>r.token,getUser:r=>r.user},actions:{login(r){Do.post(`${pA}/login`,{nrp:r.nrp,password:r.password}).then(c=>{console.log(c.data.data.access_token),this.token=c.data.data.access_token,console.log(this.token),ji.push("/")}).catch(c=>{alert(c.response.data.meta.message)})},logout(){Do({method:"post",url:`${pA}/logout`,headers:{Authorization:`Bearer ${this.token}`}}).then(r=>{this.token=null,console.log("Berhasil keluar"),ji.push("/login")}).catch(r=>{console.log(r.response.data.message)})}}}),lO={class:"bg-base-100 fixed px-5 py-3 bottom-0 left-0 right-0"},dO={class:"flex justify-between"},uO=P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-white",height:"24",width:"24"},[P("path",{d:"M4.5 20.5v-9.25l-1.875 1.425-.9-1.2L12 3.625l10.275 7.85-.9 1.175-1.875-1.4v9.25ZM6 19h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4.125q-.375 0-.625-.25T7.125 14q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Zm4 0q-.375 0-.625-.25t-.25-.625q0-.375.25-.625t.625-.25q.375 0 .625.25t.25.625q0 .375-.25.625t-.625.25Z"})],-1),hO=zt(" Home "),fO=P("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[P("path",{d:"M6 21.5q-1.05 0-1.775-.725Q3.5 20.05 3.5 19v-2.5h3V2.7l1.375 1.175L9.3 2.7l1.4 1.175L12.1 2.7l1.4 1.175L14.9 2.7l1.4 1.175L17.7 2.7l1.425 1.175L20.5 2.7V19q0 1.05-.725 1.775-.725.725-1.775.725ZM18 20q.425 0 .712-.288Q19 19.425 19 19V5H8v11.5h9V19q0 .425.288.712.287.288.712.288ZM9.2 8.75v-1.5h5.675v1.5Zm0 3v-1.5h5.675v1.5Zm7.75-2.875q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25Zm0 3q-.375 0-.638-.25-.262-.25-.262-.625t.262-.625q.263-.25.638-.25.35 0 .612.25.263.25.263.625t-.263.625q-.262.25-.612.25ZM6 20h9.5v-2H5v1q0 .425.287.712Q5.575 20 6 20Zm-1 0v-2 2Z"})],-1),gO=zt(" Pekerjaan "),pO=P("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[P("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),mO=zt(" Histori "),kO=P("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[P("path",{d:"m10.95 17.425 5.3-5.3-1.075-1.075-4.25 4.225-2.1-2.125-1.075 1.075ZM6.3 21.5q-.75 0-1.275-.525Q4.5 20.45 4.5 19.7V4.3q0-.75.525-1.275Q5.55 2.5 6.3 2.5h7.95l5.25 5.25V19.7q0 .75-.525 1.275-.525.525-1.275.525Zm7.2-13V4H6.3q-.1 0-.2.1t-.1.2v15.4q0 .1.1.2t.2.1h11.4q.1 0 .2-.1t.1-.2V8.5ZM6 4v4.5V4 20 4Z"})],-1),bO=zt(" Isidentil "),wO=P("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},[P("path",{d:"M5.4 21q-.75 0-1.275-.525Q3.6 19.95 3.6 19.2V5.3q0-.75.525-1.275Q4.65 3.5 5.4 3.5h6.725V5H5.4q-.1 0-.2.1t-.1.2v13.9q0 .1.1.2t.2.1h6.725V21Zm10.725-4.475-1.025-1.1L17.525 13h-8.4v-1.5h8.4L15.1 9.075l1.025-1.1L20.4 12.25Z"})],-1),_O=zt(" Keluar "),AO=[wO,_O],Mo={__name:"Bottombar",setup(r){const c=ro(),d=()=>{c.logout()};return(h,g)=>{const m=Gr("router-link");return ye(),Ne("div",lO,[P("div",dO,[_e(m,{to:"/",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:Xn(()=>[uO,hO]),_:1}),_e(m,{to:"/working",class:"btn btn-ghost btn-circle capitalize my-auto"},{default:Xn(()=>[fO,gO]),_:1}),_e(m,{to:"/reporting-history",class:"btn btn-ghost btn-circle capitalize"},{default:Xn(()=>[pO,mO]),_:1}),_e(m,{to:"/reporting-history-isidentil",class:"btn btn-ghost btn-circle capitalize"},{default:Xn(()=>[kO,bO]),_:1}),P("button",{onClick:d,class:"btn btn-ghost btn-circle capitalize"},AO)])])}}};var FC="/assets/logo-polri.9819c9fb.png",vO=(r,c)=>{const d=r.__vccOpts||r;for(const[h,g]of c)d[h]=g;return d};const CO={},yO={class:"bg-base-100 sticky px-5 top-0 left-0 right-0 z-20"},xO={class:"flex justify-between"},EO=P("img",{src:FC,class:"h-10 w-10 my-auto"},null,-1),DO=P("p",{class:"my-auto"},"E-lapor",-1),SO=P("img",{src:"https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360",class:"w-7 h-7"},null,-1);function TO(r,c){const d=Gr("router-link");return ye(),Ne("div",yO,[P("div",xO,[EO,DO,_e(d,{to:"/profile",class:"btn btn-ghost btn-circle capitalize"},{default:Xn(()=>[SO]),_:1})])])}var Po=vO(CO,[["render",TO]]);const Fh=$c({id:"news",state:()=>({news:[],newsDetail:""}),getters:{getNews:r=>r.news,getNewsDetails:r=>r.newsDetail},actions:{fetchNews(){const c=ro().getToken;Do.get("https://elapor.helpulstudio.com/getAllNews/",{Authorization:`Bearer ${c}`}).then(d=>{console.log(d.data.data),this.news=d.data.data}).catch(d=>{alert(d.response.data.meta.message)})},fetchDetailNews(r){console.log(r),this.newsDetail=this.news[r],console.log(this.newsDetail),ji.push("/news-detail")}}}),IO={class:"bg-white max-w-lg mx-auto"},MO={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},PO=P("div",{class:"flex justify-between"},[P("p",{class:"text-md font-bold text-center border-rose-800 bg-slate-800 w-full border-y-2 py-2 text-white"},"Pengumuman/Berita")],-1),NO=["src"],BO={class:"card-body"},OO={class:"card-title text-sm"},LO=P("p",{class:"text-sm"},"Klik tombol dibawah untuk membaca.",-1),RO={class:"card-actions justify-end"},zO=["onClick"],jO={__name:"HomePage",setup(r){const c=Fh(),d=bt(()=>c.getNews);Io(()=>{c.fetchNews()});const h="https://elapor.helpulstudio.com/storage/",g=m=>{c.fetchDetailNews(m)};return(m,k)=>(ye(),Ne("div",IO,[_e(Po),P("main",MO,[PO,(ye(!0),Ne($e,null,oo(Se(d),(_,w)=>(ye(),Ne("div",{class:"card card-side bg-base-100 shadow-xl",key:_.news_id},[P("figure",null,[P("img",{src:`${h}${_.news_image}`,class:"w-32 h-full",alt:"Movie"},null,8,NO)]),P("div",BO,[P("h2",OO,Ke(_.news_title.substring(0,40)+".."),1),LO,P("div",RO,[P("button",{onClick:y=>g(w),class:"btn btn-sm capitalize"},"Selengkapnya",8,zO)])])]))),128))]),_e(Mo)]))}},FO={class:"max-w-lg mx-auto"},VO={class:"min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},UO={class:"w-full space-y-8"},HO=P("div",null,[P("img",{class:"mx-auto h-12 w-auto",src:FC,alt:"Workflow"}),P("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},"Masuk E-Lapor")],-1),$O=["onSubmit"],qO=P("input",{type:"hidden",name:"remember",value:"true"},null,-1),WO={class:"rounded-md shadow-sm -space-y-px"},GO=P("label",{for:"email-address",class:"sr-only"},"Nrp",-1),KO=P("label",{for:"password",class:"sr-only"},"Password",-1),YO=P("div",null,[P("button",{type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white btn"}," Masuk ")],-1),QO={__name:"LoginPage",setup(r){const c=ro(),d=co({nrp:"",password:""}),h=()=>{c.login(d)};return(g,m)=>(ye(),Ne("div",FO,[P("div",VO,[P("div",UO,[HO,P("form",{class:"mt-8 space-y-6",onSubmit:Hc(h,["prevent"])},[qO,P("div",WO,[P("div",null,[GO,Jt(P("input",{id:"email-address",name:"nrp",type:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Nrp Kerja","onUpdate:modelValue":m[0]||(m[0]=k=>d.nrp=k)},null,512),[[Rt,d.nrp]])]),P("div",null,[KO,Jt(P("input",{id:"password",name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Password","onUpdate:modelValue":m[1]||(m[1]=k=>d.password=k)},null,512),[[Rt,d.password]])])]),YO],40,$O)])])]))}},mu="https://elapor.helpulstudio.com/api",Qc=$c({id:"jobtask",state:()=>({jobTask:[],jobTaskDetail:null,jobTaskId:null,jobTaskAssigned:null}),getters:{getJobtask:r=>r.jobTask,getJobtaskAssigned:r=>r.jobTaskAssigned,getJobtaskDetail:r=>r.jobTaskDetail,getJobTaskId:r=>r.jobTaskId},actions:{fetchJobTask(){const c=ro().getToken;Do.get(`${mu}/jobtask-data`,{headers:{Authorization:`Bearer ${c}`}}).then(d=>{console.log(d.data.data),this.jobTask=d.data.data,this.jobTaskAssigned=this.jobTask.filter(h=>h.jobtask.job_task_status==="Ditugaskan").length}).catch(d=>{alert(d.response.data.meta.message)})},createReport(...r){this.jobTaskId=r[1],console.log(r),console.log(this.jobTaskId),ji.push("/reporting")},sendReport(r){const d=ro().getToken;console.log(r.jobtask_documentation);let h=new FormData;h.append("location_latitude",r.latitude),h.append("location_longitude",r.longitude),h.append("jobtask_documentation",r.jobtask_documentation),h.append("report_about",r.report_about),h.append("report_source_information",r.report_source_information),h.append("report_date",r.report_date),h.append("report_place",r.report_place),h.append("report_activities",r.report_activities),h.append("report_analysis",r.report_analysis),h.append("report_prediction",r.report_prediction),h.append("report_steps_taken",r.report_steps_taken),h.append("report_recommendation",r.report_recomendation),Do({method:"post",url:`${mu}/jobtask-result/${this.jobTaskId}`,data:h,headers:{Authorization:`Bearer ${d}`,"Content-Type":"multipart/form-data"}}).then(g=>{console.log(g),alert(g)}).catch(g=>{console.log(g),alert(g)})},getReport(r){const d=ro().getToken;Do.get(`${mu}/jobtask-result/${r}`,{headers:{Authorization:`Bearer ${d}`}}).then(h=>{console.log(h.data.data[0].jobtask_result[0]),this.jobTaskDetail=h.data.data[0].jobtask_result[0],ji.push("/detail-reporting")}).catch(h=>{console.log(h)})}}}),ZO={class:"bg-white max-w-lg mx-auto"},JO={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},XO=P("div",{class:"flex justify-between"},[P("p",{class:"my-auto text-xl font-bold"},"Data Pekerjaan")],-1),eL={key:0,class:"card-body"},tL={class:"card-title"},nL={class:"card-actions justify-end flex"},oL=["onClick"],iL=P("button",{class:"btn btn-sm"},"Lihat Arahan",-1),rL={__name:"HistoryPage",setup(r){const c=Qc(),d=bt(()=>c.getJobtask);return Io(()=>{c.fetchJobTask()}),(h,g)=>(ye(),Ne("div",ZO,[_e(Po),P("main",JO,[XO,(ye(!0),Ne($e,null,oo(Se(d),m=>(ye(),Ne("div",{class:"card border-l-4 border-red-500 card-sm bg-base-100 shadow-md",key:m.job_task_id},[m.jobtask.job_task_status!="Ditugaskan"?(ye(),Ne("div",eL,[P("h2",tL,Ke(m.jobtask.job_task_name),1),P("p",null,"Tanggal : "+Ke(m.jobtask.job_task_date),1),P("p",null,"Lokasi : "+Ke(m.jobtask.job_task_place),1),P("p",null,"Status : "+Ke(m.jobtask.job_task_status),1),P("div",nL,[P("button",{onClick:k=>Se(c).getReport(m.jobtask.job_task_id),class:"btn btn-sm bg-white border-2 text-slate-800 hover:text-white"},"Lihat Detail Laporan",8,oL),iL])])):Br("",!0)]))),128))]),_e(Mo)]))}},ku="https://elapor.helpulstudio.com/api",VC=$c({id:"isidentil",state:()=>({isidentilReportingData:[],isidentilReporting:null}),getters:{getIsidentilReportingData:r=>r.isidentilReportingData},actions:{sendIsidentil(r){const d=ro().token;let h=new FormData;h.append("location_latitude",r.latitude),h.append("location_longitude",r.longitude),h.append("jobtask_documentation",r.jobtask_documentation),h.append("sector_id",r.sector_id),h.append("report_about",r.report_about),h.append("report_source_information",r.report_source_information),h.append("report_date",r.report_date),h.append("report_place",r.report_place),h.append("report_activities",r.report_activities),h.append("report_analysis",r.report_analysis),h.append("report_prediction",r.report_prediction),h.append("report_steps_taken",r.report_steps_taken),h.append("report_recommendation",r.report_recomendation),Do({method:"post",url:`${ku}/report-data`,data:h,headers:{Authorization:`Bearer ${d}`,"Content-Type":"multipart/form-data"}}).then(g=>{console.log(g)}).catch(g=>{console.log(g)})},getIsidentil(){const c=ro().getToken;Do.get(`${ku}/report-data`,{headers:{Authorization:`Bearer ${c}`}}).then(d=>{console.log(d.data.data),this.isidentilReportingData=d.data.data}).catch(d=>{console.log(d)})},getDetailIsidentil(r){const d=ro().getToken;Do.get(`${ku}/report-detail/${r}`,{headers:{Authorization:`Bearer ${d}`}}).then(h=>{console.log(h)}).catch(h=>{console.log(h)})}}}),sL={class:"bg-white max-w-lg mx-auto"},aL={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},cL={class:"flex justify-between"},lL={class:"my-auto"},dL={class:"card border-l-4 border-red-500 card-sm bg-base-100 shadow-md"},uL={class:"card-body"},hL={class:"card-title"},fL={class:"card-actions justify-end flex"},gL=["onClick"],pL=P("button",{class:"btn btn-sm"},"Lihat Arahan",-1),mL={__name:"HistoryIsidentilPage",setup(r){const c=VC(),d=bt(()=>c.getIsidentilReportingData);Io(()=>{c.getIsidentil()});const h=g=>{c.getDetailIsidentil(g)};return(g,m)=>(ye(),Ne("div",sL,[_e(Po),P("main",aL,[P("div",cL,[P("p",lL,"Total pekerjaan : "+Ke(Se(d).length),1)]),(ye(!0),Ne($e,null,oo(Se(d),k=>(ye(),Ne("div",{key:k},[P("div",dL,[P("div",uL,[P("h2",hL,Ke(k.report_about.substring(0,40)+".."),1),P("p",null,"Tanggal : "+Ke(k.report_date),1),P("p",null,"Lokasi : "+Ke(k.report_place),1),P("div",fL,[P("button",{onClick:_=>h(k.report_task_id),class:"btn btn-sm bg-white border-2 text-slate-800 hover:text-white"},"Lihat Detail Laporan",8,gL),pL])])])]))),128))]),_e(Mo)]))}},kL={class:"bg-white max-w-lg mx-auto"},bL=Cv('<main class="mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"><div class="mx-auto"><div class="avatar"><div class="w-24 rounded-full"><img src="https://placeimg.com/192/192/people"></div></div></div><div class="grid grid-cols-3 mt-10 justify-between text-center"><div><p class="font-semibold text-md mx-auto">Tugas Total</p><p class="text-sm mx-auto">5</p></div><div><p class="font-semibold text-md mx-auto">Ditugaskan</p><p class="text-sm mx-auto">3</p></div><div><p class="font-semibold text-md mx-auto">Selesai</p><p class="text-sm mx-auto">2</p></div></div><div id="profile-section" class="mt-5 gap-y-4 grid"><div><h4 class="text-md font-semibold text-gray-300">Nama</h4><p class="text-md">Rudy Kurniawan</p></div><div><h4 class="text-md font-semibold text-gray-300">Email</h4><p class="text-md">rudykurniawan@gmail.com</p></div><div><h4 class="text-md font-semibold text-gray-300">Pangkat</h4><p class="text-md">Sersan 1</p></div><div><h4 class="text-md font-semibold text-gray-300">Atasan</h4><p class="text-md">Rahmed ilyas</p></div><div><button class="btn w-full">Ubah Profil</button></div></div></main>',1),wL={__name:"ProfilePage",setup(r){return(c,d)=>(ye(),Ne("div",kL,[_e(Po),bL,_e(Mo)]))}},_L={class:"bg-white max-w-lg mx-auto"},AL={class:"mx-5 mt-10 grid mb-20 gap-y-4 z-10 py-2"},vL={class:"flex justify-between"},CL={class:"my-auto"},yL=zt("Buat Laporan Isidentil"),xL={key:0,class:"card-body"},EL={class:"card-title"},DL={class:"card-actions justify-end flex"},SL=["onClick"],TL={__name:"WorkingPage",setup(r){const c=Qc(),d=bt(()=>c.getJobtask),h=bt(()=>c.getJobtaskAssigned);Io(()=>{c.fetchJobTask()});const g=(...m)=>{c.createReport(...m)};return(m,k)=>{const _=Gr("router-link");return ye(),Ne("div",_L,[_e(Po),P("main",AL,[P("div",vL,[P("p",CL,"Total pekerjaan : "+Ke(Se(h)),1),_e(_,{to:"/reporting-isidentil",class:"btn btn-sm"},{default:Xn(()=>[yL]),_:1})]),(ye(!0),Ne($e,null,oo(Se(d),(w,y)=>(ye(),Ne("div",{class:"card border-l-4 border-red-500 card-sm bg-base-100 shadow-md",key:w.job_task_id},[w.jobtask.job_task_status=="Ditugaskan"?(ye(),Ne("div",xL,[P("h2",EL,Ke(w.jobtask.job_task_name),1),P("p",null,"Tanggal : "+Ke(w.jobtask.job_task_date),1),P("p",null,"Lokasi : "+Ke(w.jobtask.job_task_place),1),P("p",null,"Status : "+Ke(w.jobtask.job_task_status),1),P("div",DL,[P("button",{onClick:C=>g(y,w.jobtask.job_task_id),class:"btn btn-sm"},"Buat Laporan",8,SL)])])):Br("",!0)]))),128))]),_e(Mo)])}}},IL="modulepreload",mA={},ML="/",UC=function(c,d){return!d||d.length===0?c():Promise.all(d.map(h=>{if(h=`${ML}${h}`,h in mA)return;mA[h]=!0;const g=h.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const k=document.createElement("link");if(k.rel=g?"stylesheet":IL,g||(k.as="script",k.crossOrigin=""),k.href=h,document.head.appendChild(k),g)return new Promise((_,w)=>{k.addEventListener("load",_),k.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${h}`)))})})).then(()=>c())};/*! Capacitor: https://capacitorjs.com/ - MIT License */const PL=r=>{const c=new Map;c.set("web",{name:"web"});const d=r.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:c},h=(m,k)=>{d.platforms.set(m,k)},g=m=>{d.platforms.has(m)&&(d.currentPlatform=d.platforms.get(m))};return d.addPlatform=h,d.setPlatform=g,d},NL=r=>r.CapacitorPlatforms=PL(r),HC=NL(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});HC.addPlatform;HC.setPlatform;var Wr;(function(r){r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE"})(Wr||(Wr={}));class bu extends Error{constructor(c,d,h){super(c),this.message=c,this.code=d,this.data=h}}const BL=r=>{var c,d;return r!=null&&r.androidBridge?"android":!((d=(c=r==null?void 0:r.webkit)===null||c===void 0?void 0:c.messageHandlers)===null||d===void 0)&&d.bridge?"ios":"web"},OL=r=>{var c,d,h,g,m;const k=r.CapacitorCustomPlatform||null,_=r.Capacitor||{},w=_.Plugins=_.Plugins||{},y=r.CapacitorPlatforms,C=()=>k!==null?k.name:BL(r),x=((c=y==null?void 0:y.currentPlatform)===null||c===void 0?void 0:c.getPlatform)||C,A=()=>x()!=="web",T=((d=y==null?void 0:y.currentPlatform)===null||d===void 0?void 0:d.isNativePlatform)||A,V=L=>{const j=Z.get(L);return!!(j!=null&&j.platforms.has(x())||z(L))},oe=((h=y==null?void 0:y.currentPlatform)===null||h===void 0?void 0:h.isPluginAvailable)||V,X=L=>{var j;return(j=_.PluginHeaders)===null||j===void 0?void 0:j.find(U=>U.name===L)},z=((g=y==null?void 0:y.currentPlatform)===null||g===void 0?void 0:g.getPluginHeader)||X,B=L=>r.console.error(L),$=(L,j,U)=>Promise.reject(`${U} does not have an implementation of "${j}".`),Z=new Map,ie=(L,j={})=>{const U=Z.get(L);if(U)return console.warn(`Capacitor plugin "${L}" already registered. Cannot register plugins twice.`),U.proxy;const H=x(),K=z(L);let Y;const fe=async()=>(!Y&&H in j?Y=typeof j[H]=="function"?Y=await j[H]():Y=j[H]:k!==null&&!Y&&"web"in j&&(Y=typeof j.web=="function"?Y=await j.web():Y=j.web),Y),pe=(tt,Ye)=>{var Ie,nt;if(K){const Ft=K==null?void 0:K.methods.find(O=>Ye===O.name);if(Ft)return Ft.rtype==="promise"?O=>_.nativePromise(L,Ye.toString(),O):(O,se)=>_.nativeCallback(L,Ye.toString(),O,se);if(tt)return(Ie=tt[Ye])===null||Ie===void 0?void 0:Ie.bind(tt)}else{if(tt)return(nt=tt[Ye])===null||nt===void 0?void 0:nt.bind(tt);throw new bu(`"${L}" plugin is not implemented on ${H}`,Wr.Unimplemented)}},xe=tt=>{let Ye;const Ie=(...nt)=>{const Ft=fe().then(O=>{const se=pe(O,tt);if(se){const re=se(...nt);return Ye=re==null?void 0:re.remove,re}else throw new bu(`"${L}.${tt}()" is not implemented on ${H}`,Wr.Unimplemented)});return tt==="addListener"&&(Ft.remove=async()=>Ye()),Ft};return Ie.toString=()=>`${tt.toString()}() { [capacitor code] }`,Object.defineProperty(Ie,"name",{value:tt,writable:!1,configurable:!1}),Ie},Te=xe("addListener"),De=xe("removeListener"),Fe=(tt,Ye)=>{const Ie=Te({eventName:tt},Ye),nt=async()=>{const O=await Ie;De({eventName:tt,callbackId:O},Ye)},Ft=new Promise(O=>Ie.then(()=>O({remove:nt})));return Ft.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await nt()},Ft},lt=new Proxy({},{get(tt,Ye){switch(Ye){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return K?Fe:Te;case"removeListener":return De;default:return xe(Ye)}}});return w[L]=lt,Z.set(L,{name:L,proxy:lt,platforms:new Set([...Object.keys(j),...K?[H]:[]])}),lt},ge=((m=y==null?void 0:y.currentPlatform)===null||m===void 0?void 0:m.registerPlugin)||ie;return _.convertFileSrc||(_.convertFileSrc=L=>L),_.getPlatform=x,_.handleError=B,_.isNativePlatform=T,_.isPluginAvailable=oe,_.pluginMethodNoop=$,_.registerPlugin=ge,_.Exception=bu,_.DEBUG=!!_.DEBUG,_.isLoggingEnabled=!!_.isLoggingEnabled,_.platform=_.getPlatform(),_.isNative=_.isNativePlatform(),_},LL=r=>r.Capacitor=OL(r),vc=LL(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),$C=vc.registerPlugin;vc.Plugins;class nz{constructor(c){this.listeners={},this.windowListeners={},c&&(console.warn(`Capacitor WebPlugin "${c.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=c)}addListener(c,d){this.listeners[c]||(this.listeners[c]=[]),this.listeners[c].push(d);const g=this.windowListeners[c];g&&!g.registered&&this.addWindowListener(g);const m=async()=>this.removeListener(c,d),k=Promise.resolve({remove:m});return Object.defineProperty(k,"remove",{value:async()=>{console.warn("Using addListener() without 'await' is deprecated."),await m()}}),k}async removeAllListeners(){this.listeners={};for(const c in this.windowListeners)this.removeWindowListener(this.windowListeners[c]);this.windowListeners={}}notifyListeners(c,d){const h=this.listeners[c];h&&h.forEach(g=>g(d))}hasListeners(c){return!!this.listeners[c].length}registerWindowListener(c,d){this.windowListeners[d]={registered:!1,windowEventName:c,pluginEventName:d,handler:h=>{this.notifyListeners(d,h)}}}unimplemented(c="not implemented"){return new vc.Exception(c,Wr.Unimplemented)}unavailable(c="not available"){return new vc.Exception(c,Wr.Unavailable)}async removeListener(c,d){const h=this.listeners[c];if(!h)return;const g=h.indexOf(d);this.listeners[c].splice(g,1),this.listeners[c].length||this.removeWindowListener(this.windowListeners[c])}addWindowListener(c){window.addEventListener(c.windowEventName,c.handler),c.registered=!0}removeWindowListener(c){!c||(window.removeEventListener(c.windowEventName,c.handler),c.registered=!1)}}const qC=$C("Geolocation",{web:()=>UC(()=>import("./web.db080f0e.js"),[]).then(r=>new r.GeolocationWeb)});var Qu={exports:{}};(function(r,c){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){r.exports=h()}(self,()=>(()=>{var d={3062:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},903:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3143:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4717:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},9315:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const T=A},8733:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3508:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},2640:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},5083:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4036:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3773:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3689:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},1905:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},9773:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},2347:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},7754:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4652:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},7442:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},9292:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},1613:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const T=A},6306:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3881:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},6945:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4906:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},5332:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},6781:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},5485:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3949:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},7686:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},7339:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},9688:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},8847:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},6574:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4879:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3662:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},2577:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},1046:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},8793:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4650:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},7676:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},5868:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},6764:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},9695:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},5542:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3332:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4793:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},3488:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},8506:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},4921:(k,_,w)=>{w.d(_,{Z:()=>T});var y=w(1799),C=w.n(y),x=w(2609),A=w.n(x)()(C());A.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const T=A},2609:k=>{k.exports=function(_){var w=[];return w.toString=function(){return this.map(function(y){var C=_(y);return y[2]?"@media ".concat(y[2]," {").concat(C,"}"):C}).join("")},w.i=function(y,C,x){typeof y=="string"&&(y=[[null,y,""]]);var A={};if(x)for(var T=0;T<this.length;T++){var V=this[T][0];V!=null&&(A[V]=!0)}for(var oe=0;oe<y.length;oe++){var X=[].concat(y[oe]);x&&A[X[0]]||(C&&(X[2]?X[2]="".concat(C," and ").concat(X[2]):X[2]=C),w.push(X))}},w}},1799:k=>{function _(y,C){return function(x){if(Array.isArray(x))return x}(y)||function(x,A){var T=x&&(typeof Symbol!="undefined"&&x[Symbol.iterator]||x["@@iterator"]);if(T!=null){var V,oe,X=[],z=!0,B=!1;try{for(T=T.call(x);!(z=(V=T.next()).done)&&(X.push(V.value),!A||X.length!==A);z=!0);}catch($){B=!0,oe=$}finally{try{z||T.return==null||T.return()}finally{if(B)throw oe}}return X}}(y,C)||function(x,A){if(!!x){if(typeof x=="string")return w(x,A);var T=Object.prototype.toString.call(x).slice(8,-1);if(T==="Object"&&x.constructor&&(T=x.constructor.name),T==="Map"||T==="Set")return Array.from(x);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return w(x,A)}}(y,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(y,C){(C==null||C>y.length)&&(C=y.length);for(var x=0,A=new Array(C);x<C;x++)A[x]=y[x];return A}k.exports=function(y){var C=_(y,4),x=C[1],A=C[3];if(!A)return x;if(typeof btoa=="function"){var T=btoa(unescape(encodeURIComponent(JSON.stringify(A)))),V="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(T),oe="/*# ".concat(V," */"),X=A.sources.map(function(z){return"/*# sourceURL=".concat(A.sourceRoot||"").concat(z," */")});return[x].concat(X).concat([oe]).join(`
`)}return[x].join(`
`)}},6062:(k,_,w)=>{var y,C=function(){return y===void 0&&(y=Boolean(window&&document&&document.all&&!window.atob)),y},x=function(){var L={};return function(j){if(L[j]===void 0){var U=document.querySelector(j);if(window.HTMLIFrameElement&&U instanceof window.HTMLIFrameElement)try{U=U.contentDocument.head}catch{U=null}L[j]=U}return L[j]}}(),A=[];function T(L){for(var j=-1,U=0;U<A.length;U++)if(A[U].identifier===L){j=U;break}return j}function V(L,j){for(var U={},H=[],K=0;K<L.length;K++){var Y=L[K],fe=j.base?Y[0]+j.base:Y[0],pe=U[fe]||0,xe="".concat(fe," ").concat(pe);U[fe]=pe+1;var Te=T(xe),De={css:Y[1],media:Y[2],sourceMap:Y[3]};Te!==-1?(A[Te].references++,A[Te].updater(De)):A.push({identifier:xe,updater:ge(De,j),references:1}),H.push(xe)}return H}function oe(L){var j=document.createElement("style"),U=L.attributes||{};if(U.nonce===void 0){var H=w.nc;H&&(U.nonce=H)}if(Object.keys(U).forEach(function(Y){j.setAttribute(Y,U[Y])}),typeof L.insert=="function")L.insert(j);else{var K=x(L.insert||"head");if(!K)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");K.appendChild(j)}return j}var X,z=(X=[],function(L,j){return X[L]=j,X.filter(Boolean).join(`
`)});function B(L,j,U,H){var K=U?"":H.media?"@media ".concat(H.media," {").concat(H.css,"}"):H.css;if(L.styleSheet)L.styleSheet.cssText=z(j,K);else{var Y=document.createTextNode(K),fe=L.childNodes;fe[j]&&L.removeChild(fe[j]),fe.length?L.insertBefore(Y,fe[j]):L.appendChild(Y)}}function $(L,j,U){var H=U.css,K=U.media,Y=U.sourceMap;if(K?L.setAttribute("media",K):L.removeAttribute("media"),Y&&typeof btoa!="undefined"&&(H+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Y))))," */")),L.styleSheet)L.styleSheet.cssText=H;else{for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(document.createTextNode(H))}}var Z=null,ie=0;function ge(L,j){var U,H,K;if(j.singleton){var Y=ie++;U=Z||(Z=oe(j)),H=B.bind(null,U,Y,!1),K=B.bind(null,U,Y,!0)}else U=oe(j),H=$.bind(null,U,j),K=function(){(function(fe){if(fe.parentNode===null)return!1;fe.parentNode.removeChild(fe)})(U)};return H(L),function(fe){if(fe){if(fe.css===L.css&&fe.media===L.media&&fe.sourceMap===L.sourceMap)return;H(L=fe)}else K()}}k.exports=function(L,j){(j=j||{}).singleton||typeof j.singleton=="boolean"||(j.singleton=C());var U=V(L=L||[],j);return function(H){if(H=H||[],Object.prototype.toString.call(H)==="[object Array]"){for(var K=0;K<U.length;K++){var Y=T(U[K]);A[Y].references--}for(var fe=V(H,j),pe=0;pe<U.length;pe++){var xe=T(U[pe]);A[xe].references===0&&(A[xe].updater(),A.splice(xe,1))}U=fe}}}}},h={};function g(k){var _=h[k];if(_!==void 0)return _.exports;var w=h[k]={id:k,exports:{}};return d[k](w,w.exports,g),w.exports}g.n=k=>{var _=k&&k.__esModule?()=>k.default:()=>k;return g.d(_,{a:_}),_},g.d=(k,_)=>{for(var w in _)g.o(_,w)&&!g.o(k,w)&&Object.defineProperty(k,w,{enumerable:!0,get:_[w]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(k,_)=>Object.prototype.hasOwnProperty.call(k,_),g.nc=void 0;var m={};return(()=>{g.d(m,{default:()=>tu});const k=function(){return function i(){i.called=!0}};class _{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=k(),this.off=k()}}const w=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function y(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+w[i>>0&255]+w[i>>8&255]+w[i>>16&255]+w[i>>24&255]+w[e>>0&255]+w[e>>8&255]+w[e>>16&255]+w[e>>24&255]+w[t>>0&255]+w[t>>8&255]+w[t>>16&255]+w[t>>24&255]+w[n>>0&255]+w[n>>8&255]+w[n>>16&255]+w[n>>24&255]}const C={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function x(i,e){const t=C.get(e.priority);for(let n=0;n<i.length;n++)if(C.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class A extends Error{constructor(e,t,n){super(function(o,s){const a=new WeakSet,l=(p,b)=>{if(typeof b=="object"&&b!==null){if(a.has(b))return`[object ${b.constructor.name}]`;a.add(b)}return b},u=s?` ${JSON.stringify(s,l)}`:"",f=oe(o);return o+u+f}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new A(e.message,t);throw n.stack=e.stack,n}}function T(i,e){console.warn(...X(i,e))}function V(i,e){console.error(...X(i,e))}function oe(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function X(i,e){const t=oe(i);return e?[i,e,t]:[i,t]}const z="35.0.1",B=typeof window=="object"?window:g.g;if(B.CKEDITOR_VERSION)throw new A("ckeditor-duplicated-modules",null);B.CKEDITOR_VERSION=z;const $=Symbol("listeningTo"),Z=Symbol("emitterId"),ie=Symbol("delegations"),ge={on(i,e,t={}){this.listenTo(this,i,e,t)},once(i,e,t){let n=!1;this.listenTo(this,i,(o,...s)=>{n||(n=!0,o.off(),e.call(this,o,...s))},t)},off(i,e){this.stopListening(this,i,e)},listenTo(i,e,t,n={}){let o,s;this[$]||(this[$]={});const a=this[$];U(i)||j(i);const l=U(i);(o=a[l])||(o=a[l]={emitter:i,callbacks:{}}),(s=o.callbacks[e])||(s=o.callbacks[e]=[]),s.push(t),function(u,f,p,b,v){f._addEventListener?f._addEventListener(p,b,v):u._addEventListener.call(f,p,b,v)}(this,i,e,t,n)},stopListening(i,e,t){const n=this[$];let o=i&&U(i);const s=n&&o?n[o]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!n||i&&!s||e&&!a))if(t)pe(this,i,e,t),a.indexOf(t)!==-1&&(a.length===1?delete s.callbacks[e]:pe(this,i,e,t));else if(a){for(;t=a.pop();)pe(this,i,e,t);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(i,e);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[$]}},fire(i,...e){try{const t=i instanceof _?i:new _(this,i),n=t.name;let o=Y(this,n);if(t.path.push(this),o){const a=[t,...e];o=Array.from(o);for(let l=0;l<o.length&&(o[l].callback.apply(this,a),t.off.called&&(delete t.off.called,this._removeEventListener(n,o[l].callback)),!t.stop.called);l++);}const s=this[ie];if(s){const a=s.get(n),l=s.get("*");a&&fe(a,t,e),l&&fe(l,t,e)}return t.return}catch(t){A.rethrowUnexpectedError(t,this)}},delegate(...i){return{to:(e,t)=>{this[ie]||(this[ie]=new Map),i.forEach(n=>{const o=this[ie].get(n);o?o.set(e,t):this[ie].set(n,new Map([[e,t]]))})}}},stopDelegating(i,e){if(this[ie])if(i)if(e){const t=this[ie].get(i);t&&t.delete(e)}else this[ie].delete(i);else this[ie].clear()},_addEventListener(i,e,t){(function(s,a){const l=H(s);if(l[a])return;let u=a,f=null;const p=[];for(;u!==""&&!l[u];)l[u]={callbacks:[],childEvents:[]},p.push(l[u]),f&&l[u].childEvents.push(f),f=u,u=u.substr(0,u.lastIndexOf(":"));if(u!==""){for(const b of p)b.callbacks=l[u].callbacks.slice();l[u].childEvents.push(f)}})(this,i);const n=K(this,i),o={callback:e,priority:C.get(t.priority)};for(const s of n)x(s,o)},_removeEventListener(i,e){const t=K(this,i);for(const n of t)for(let o=0;o<n.length;o++)n[o].callback==e&&(n.splice(o,1),o--)}},L=ge;function j(i,e){i[Z]||(i[Z]=e||y())}function U(i){return i[Z]}function H(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function K(i,e){const t=H(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const s=K(i,t.childEvents[o]);n=n.concat(s)}return n}function Y(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Y(i,e.substr(0,e.lastIndexOf(":"))):null}function fe(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const s=new _(e.source,o);s.path=[...e.path],n.fire(s,...t)}}function pe(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}const xe=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Te=Symbol("observableProperties"),De=Symbol("boundObservables"),Fe=Symbol("boundProperties"),lt=Symbol("decoratedMethods"),tt=Symbol("decoratedOriginal"),Ye={set(i,e){if(xe(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);nt(this);const t=this[Te];if(i in this&&!t.has(i))throw new A("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>t.get(i),set(n){const o=t.get(i);let s=this.fire("set:"+i,i,n,o);s===void 0&&(s=n),o===s&&t.has(i)||(t.set(i,s),this.fire("change:"+i,i,s,o))}}),this[i]=e},bind(...i){if(!i.length||!se(i))throw new A("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new A("observable-bind-duplicate-properties",this);nt(this);const e=this[Fe];i.forEach(n=>{if(e.has(n))throw new A("observable-bind-rebind",this)});const t=new Map;return i.forEach(n=>{const o={property:n,to:[]};e.set(n,o),t.set(n,o)}),{to:Ft,toMany:O,_observable:this,_bindProperties:i,_to:[],_bindings:t}},unbind(...i){if(!this[Te])return;const e=this[Fe],t=this[De];if(i.length){if(!se(i))throw new A("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=e.get(n);o&&(o.to.forEach(([s,a])=>{const l=t.get(s),u=l[a];u.delete(o),u.size||delete l[a],Object.keys(l).length||(t.delete(s),this.stopListening(s,"change"))}),e.delete(n))})}else t.forEach((n,o)=>{this.stopListening(o,"change")}),t.clear(),e.clear()},decorate(i){nt(this);const e=this[i];if(!e)throw new A("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(t,n)=>{t.return=e.apply(this,n)}),this[i]=function(...t){return this.fire(i,t)},this[i][tt]=e,this[lt]||(this[lt]=[]),this[lt].push(i)},...L};Ye.stopListening=function(i,e,t){if(!i&&this[lt]){for(const n of this[lt])this[n]=this[n][tt];delete this[lt]}L.stopListening.call(this,i,e,t)};const Ie=Ye;function nt(i){i[Te]||(Object.defineProperty(i,Te,{value:new Map}),Object.defineProperty(i,De,{value:new Map}),Object.defineProperty(i,Fe,{value:new Map}))}function Ft(...i){const e=function(...s){if(!s.length)throw new A("observable-bind-to-parse-error",null);const a={to:[]};let l;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")l.properties.push(u);else{if(typeof u!="object")throw new A("observable-bind-to-parse-error",null);l={observable:u,properties:[]},a.to.push(l)}}),a}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new A("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new A("observable-bind-to-extra-callback",this);var o;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new A("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(s=>{const a=o[De];let l;a.get(s.observable)||o.listenTo(s.observable,"change",(u,f)=>{l=a.get(s.observable)[f],l&&l.forEach(p=>{re(o,p.property)})})}),function(s){let a;s._bindings.forEach((l,u)=>{s._to.forEach(f=>{a=f.properties[l.callback?0:s._bindProperties.indexOf(u)],l.to.push([f.observable,a]),function(p,b,v,E){const D=p[De],S=D.get(v),I=S||{};I[E]||(I[E]=new Set),I[E].add(b),S||D.set(v,I)}(s._observable,l,f.observable,a)})})}(this),this._bindProperties.forEach(s=>{re(this._observable,s)})}function O(i,e,t){if(this._bindings.size>1)throw new A("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const s=n.map(a=>[a,o]);return Array.prototype.concat.apply([],s)}(i,e),t)}function se(i){return i.every(e=>typeof e=="string")}function re(i,e){const t=i[Fe].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}function Q(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(s=>{if(s in i.prototype)return;const a=Object.getOwnPropertyDescriptor(t,s);a.enumerable=!1,Object.defineProperty(i.prototype,s,a)})})}class W{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ue,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ue),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ue(i){i.return=!1,i.stop()}Q(W,Ie);class he{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ee,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ee),this.refresh())}execute(){}destroy(){this.stopListening()}}function Ee(i){i.return=!1,i.stop()}Q(he,Ie);class M extends he{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){x(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const R=typeof tc=="object"&&tc&&tc.Object===Object&&tc;var q=typeof self=="object"&&self&&self.Object===Object&&self;const J=R||q||Function("return this")(),ee=J.Symbol;var ce=Object.prototype,ke=ce.hasOwnProperty,le=ce.toString,de=ee?ee.toStringTag:void 0;const ae=function(i){var e=ke.call(i,de),t=i[de];try{i[de]=void 0;var n=!0}catch{}var o=le.call(i);return n&&(e?i[de]=t:delete i[de]),o};var ve=Object.prototype.toString;const me=function(i){return ve.call(i)};var we=ee?ee.toStringTag:void 0;const Ce=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":we&&we in Object(i)?ae(i):me(i)},Ve=function(i,e){return function(t){return i(e(t))}},Ge=Ve(Object.getPrototypeOf,Object),Le=function(i){return i!=null&&typeof i=="object"};var ot=Function.prototype,sn=Object.prototype,uo=ot.toString,ea=sn.hasOwnProperty,ri=uo.call(Object);const Vt=function(i){if(!Le(i)||Ce(i)!="[object Object]")return!1;var e=Ge(i);if(e===null)return!0;var t=ea.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&uo.call(t)==ri},Kt=function(){this.__data__=[],this.size=0},Ut=function(i,e){return i===e||i!=i&&e!=e},si=function(i,e){for(var t=i.length;t--;)if(Ut(i[t][0],e))return t;return-1};var i0=Array.prototype.splice;const r0=function(i){var e=this.__data__,t=si(e,i);return!(t<0)&&(t==e.length-1?e.pop():i0.call(e,t,1),--this.size,!0)},s0=function(i){var e=this.__data__,t=si(e,i);return t<0?void 0:e[t][1]},a0=function(i){return si(this.__data__,i)>-1},c0=function(i,e){var t=this.__data__,n=si(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function Wi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Wi.prototype.clear=Kt,Wi.prototype.delete=r0,Wi.prototype.get=s0,Wi.prototype.has=a0,Wi.prototype.set=c0;const ta=Wi,l0=function(){this.__data__=new ta,this.size=0},d0=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},u0=function(i){return this.__data__.get(i)},h0=function(i){return this.__data__.has(i)},ai=function(i){if(!xe(i))return!1;var e=Ce(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Jc=J["__core-js_shared__"];var Vh=function(){var i=/[^.]+$/.exec(Jc&&Jc.keys&&Jc.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const f0=function(i){return!!Vh&&Vh in i};var g0=Function.prototype.toString;const ci=function(i){if(i!=null){try{return g0.call(i)}catch{}try{return i+""}catch{}}return""};var p0=/^\[object .+?Constructor\]$/,m0=Function.prototype,k0=Object.prototype,b0=m0.toString,w0=k0.hasOwnProperty,_0=RegExp("^"+b0.call(w0).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const A0=function(i){return!(!xe(i)||f0(i))&&(ai(i)?_0:p0).test(ci(i))},v0=function(i,e){return i==null?void 0:i[e]},li=function(i,e){var t=v0(i,e);return A0(t)?t:void 0},Yr=li(J,"Map"),Qr=li(Object,"create"),C0=function(){this.__data__=Qr?Qr(null):{},this.size=0},y0=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var x0=Object.prototype.hasOwnProperty;const E0=function(i){var e=this.__data__;if(Qr){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return x0.call(e,i)?e[i]:void 0};var D0=Object.prototype.hasOwnProperty;const S0=function(i){var e=this.__data__;return Qr?e[i]!==void 0:D0.call(e,i)},T0=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Qr&&e===void 0?"__lodash_hash_undefined__":e,this};function Gi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Gi.prototype.clear=C0,Gi.prototype.delete=y0,Gi.prototype.get=E0,Gi.prototype.has=S0,Gi.prototype.set=T0;const Uh=Gi,I0=function(){this.size=0,this.__data__={hash:new Uh,map:new(Yr||ta),string:new Uh}},M0=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},na=function(i,e){var t=i.__data__;return M0(e)?t[typeof e=="string"?"string":"hash"]:t.map},P0=function(i){var e=na(this,i).delete(i);return this.size-=e?1:0,e},N0=function(i){return na(this,i).get(i)},B0=function(i){return na(this,i).has(i)},O0=function(i,e){var t=na(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function Ki(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Ki.prototype.clear=I0,Ki.prototype.delete=P0,Ki.prototype.get=N0,Ki.prototype.has=B0,Ki.prototype.set=O0;const oa=Ki,L0=function(i,e){var t=this.__data__;if(t instanceof ta){var n=t.__data__;if(!Yr||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new oa(n)}return t.set(i,e),this.size=t.size,this};function Yi(i){var e=this.__data__=new ta(i);this.size=e.size}Yi.prototype.clear=l0,Yi.prototype.delete=d0,Yi.prototype.get=u0,Yi.prototype.has=h0,Yi.prototype.set=L0;const Zr=Yi,R0=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},ia=function(){try{var i=li(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Xc=function(i,e,t){e=="__proto__"&&ia?ia(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var z0=Object.prototype.hasOwnProperty;const el=function(i,e,t){var n=i[e];z0.call(i,e)&&Ut(n,t)&&(t!==void 0||e in i)||Xc(i,e,t)},Qi=function(i,e,t,n){var o=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var l=e[s],u=n?n(t[l],i[l],l,t,i):void 0;u===void 0&&(u=i[l]),o?Xc(t,l,u):el(t,l,u)}return t},j0=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},Hh=function(i){return Le(i)&&Ce(i)=="[object Arguments]"};var $h=Object.prototype,F0=$h.hasOwnProperty,V0=$h.propertyIsEnumerable;const tl=Hh(function(){return arguments}())?Hh:function(i){return Le(i)&&F0.call(i,"callee")&&!V0.call(i,"callee")},Yt=Array.isArray,U0=function(){return!1};var qh=c&&!c.nodeType&&c,Wh=qh&&!0&&r&&!r.nodeType&&r,Gh=Wh&&Wh.exports===qh?J.Buffer:void 0;const Jr=(Gh?Gh.isBuffer:void 0)||U0;var H0=/^(?:0|[1-9]\d*)$/;const nl=function(i,e){var t=typeof i;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&H0.test(i))&&i>-1&&i%1==0&&i<e},Kh=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var ft={};ft["[object Float32Array]"]=ft["[object Float64Array]"]=ft["[object Int8Array]"]=ft["[object Int16Array]"]=ft["[object Int32Array]"]=ft["[object Uint8Array]"]=ft["[object Uint8ClampedArray]"]=ft["[object Uint16Array]"]=ft["[object Uint32Array]"]=!0,ft["[object Arguments]"]=ft["[object Array]"]=ft["[object ArrayBuffer]"]=ft["[object Boolean]"]=ft["[object DataView]"]=ft["[object Date]"]=ft["[object Error]"]=ft["[object Function]"]=ft["[object Map]"]=ft["[object Number]"]=ft["[object Object]"]=ft["[object RegExp]"]=ft["[object Set]"]=ft["[object String]"]=ft["[object WeakMap]"]=!1;const $0=function(i){return Le(i)&&Kh(i.length)&&!!ft[Ce(i)]},ol=function(i){return function(e){return i(e)}};var Yh=c&&!c.nodeType&&c,Xr=Yh&&!0&&r&&!r.nodeType&&r,il=Xr&&Xr.exports===Yh&&R.process;const Zi=function(){try{var i=Xr&&Xr.require&&Xr.require("util").types;return i||il&&il.binding&&il.binding("util")}catch{}}();var Qh=Zi&&Zi.isTypedArray;const rl=Qh?ol(Qh):$0;var q0=Object.prototype.hasOwnProperty;const Zh=function(i,e){var t=Yt(i),n=!t&&tl(i),o=!t&&!n&&Jr(i),s=!t&&!n&&!o&&rl(i),a=t||n||o||s,l=a?j0(i.length,String):[],u=l.length;for(var f in i)!e&&!q0.call(i,f)||a&&(f=="length"||o&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||nl(f,u))||l.push(f);return l};var W0=Object.prototype;const sl=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||W0)},G0=Ve(Object.keys,Object);var K0=Object.prototype.hasOwnProperty;const Y0=function(i){if(!sl(i))return G0(i);var e=[];for(var t in Object(i))K0.call(i,t)&&t!="constructor"&&e.push(t);return e},ra=function(i){return i!=null&&Kh(i.length)&&!ai(i)},al=function(i){return ra(i)?Zh(i):Y0(i)},Q0=function(i,e){return i&&Qi(e,al(e),i)},Z0=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var J0=Object.prototype.hasOwnProperty;const X0=function(i){if(!xe(i))return Z0(i);var e=sl(i),t=[];for(var n in i)(n!="constructor"||!e&&J0.call(i,n))&&t.push(n);return t},Ji=function(i){return ra(i)?Zh(i,!0):X0(i)},ey=function(i,e){return i&&Qi(e,Ji(e),i)};var Jh=c&&!c.nodeType&&c,Xh=Jh&&!0&&r&&!r.nodeType&&r,ef=Xh&&Xh.exports===Jh?J.Buffer:void 0,tf=ef?ef.allocUnsafe:void 0;const nf=function(i,e){if(e)return i.slice();var t=i.length,n=tf?tf(t):new i.constructor(t);return i.copy(n),n},of=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},ty=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,s=[];++t<n;){var a=i[t];e(a,t,i)&&(s[o++]=a)}return s},rf=function(){return[]};var ny=Object.prototype.propertyIsEnumerable,sf=Object.getOwnPropertySymbols;const cl=sf?function(i){return i==null?[]:(i=Object(i),ty(sf(i),function(e){return ny.call(i,e)}))}:rf,oy=function(i,e){return Qi(i,cl(i),e)},af=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},cf=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)af(e,cl(i)),i=Ge(i);return e}:rf,iy=function(i,e){return Qi(i,cf(i),e)},lf=function(i,e,t){var n=e(i);return Yt(i)?n:af(n,t(i))},ll=function(i){return lf(i,al,cl)},ry=function(i){return lf(i,Ji,cf)},dl=li(J,"DataView"),ul=li(J,"Promise"),hl=li(J,"Set"),fl=li(J,"WeakMap");var df="[object Map]",uf="[object Promise]",hf="[object Set]",ff="[object WeakMap]",gf="[object DataView]",sy=ci(dl),ay=ci(Yr),cy=ci(ul),ly=ci(hl),dy=ci(fl),di=Ce;(dl&&di(new dl(new ArrayBuffer(1)))!=gf||Yr&&di(new Yr)!=df||ul&&di(ul.resolve())!=uf||hl&&di(new hl)!=hf||fl&&di(new fl)!=ff)&&(di=function(i){var e=Ce(i),t=e=="[object Object]"?i.constructor:void 0,n=t?ci(t):"";if(n)switch(n){case sy:return gf;case ay:return df;case cy:return uf;case ly:return hf;case dy:return ff}return e});const es=di;var uy=Object.prototype.hasOwnProperty;const hy=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&uy.call(i,"index")&&(t.index=i.index,t.input=i.input),t},sa=J.Uint8Array,gl=function(i){var e=new i.constructor(i.byteLength);return new sa(e).set(new sa(i)),e},fy=function(i,e){var t=e?gl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var gy=/\w*$/;const py=function(i){var e=new i.constructor(i.source,gy.exec(i));return e.lastIndex=i.lastIndex,e};var pf=ee?ee.prototype:void 0,mf=pf?pf.valueOf:void 0;const my=function(i){return mf?Object(mf.call(i)):{}},kf=function(i,e){var t=e?gl(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},ky=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return gl(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return fy(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return kf(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return py(i);case"[object Symbol]":return my(i)}};var bf=Object.create;const by=function(){function i(){}return function(e){if(!xe(e))return{};if(bf)return bf(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),wf=function(i){return typeof i.constructor!="function"||sl(i)?{}:by(Ge(i))},wy=function(i){return Le(i)&&es(i)=="[object Map]"};var _f=Zi&&Zi.isMap;const _y=_f?ol(_f):wy,Ay=function(i){return Le(i)&&es(i)=="[object Set]"};var Af=Zi&&Zi.isSet;const vy=Af?ol(Af):Ay;var vf="[object Arguments]",Cf="[object Function]",Cy="[object Object]",dt={};dt[vf]=dt["[object Array]"]=dt["[object ArrayBuffer]"]=dt["[object DataView]"]=dt["[object Boolean]"]=dt["[object Date]"]=dt["[object Float32Array]"]=dt["[object Float64Array]"]=dt["[object Int8Array]"]=dt["[object Int16Array]"]=dt["[object Int32Array]"]=dt["[object Map]"]=dt["[object Number]"]=dt["[object Object]"]=dt["[object RegExp]"]=dt["[object Set]"]=dt["[object String]"]=dt["[object Symbol]"]=dt["[object Uint8Array]"]=dt["[object Uint8ClampedArray]"]=dt["[object Uint16Array]"]=dt["[object Uint32Array]"]=!0,dt["[object Error]"]=dt[Cf]=dt["[object WeakMap]"]=!1;const pl=function i(e,t,n,o,s,a){var l,u=1&t,f=2&t,p=4&t;if(n&&(l=s?n(e,o,s,a):n(e)),l!==void 0)return l;if(!xe(e))return e;var b=Yt(e);if(b){if(l=hy(e),!u)return of(e,l)}else{var v=es(e),E=v==Cf||v=="[object GeneratorFunction]";if(Jr(e))return nf(e,u);if(v==Cy||v==vf||E&&!s){if(l=f||E?{}:wf(e),!u)return f?iy(e,ey(l,e)):oy(e,Q0(l,e))}else{if(!dt[v])return s?e:{};l=ky(e,v,u)}}a||(a=new Zr);var D=a.get(e);if(D)return D;a.set(e,l),vy(e)?e.forEach(function(I){l.add(i(I,t,n,I,e,a))}):_y(e)&&e.forEach(function(I,N){l.set(N,i(I,t,n,N,e,a))});var S=b?void 0:(p?f?ry:ll:f?Ji:al)(e);return R0(S||e,function(I,N){S&&(I=e[N=I]),el(l,N,i(I,t,n,N,e,a))}),l},yf=function(i,e){return pl(i,5,e=typeof e=="function"?e:void 0)},ui=function(i){return Le(i)&&i.nodeType===1&&!Vt(i)};class xf{constructor(e,t){this._config={},t&&this.define(Ef(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Vt(t))return void this._setObjectToTarget(e,t,o);const s=t.split(".");t=s.pop();for(const a of s)Vt(e[a])||(e[a]={}),e=e[a];if(Vt(n))return Vt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Vt(e[o])){e=null;break}e=e[o]}return e?Ef(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function Ef(i){return yf(i,yy)}function yy(i){return ui(i)?i:void 0}function bn(i){return!(!i||!i[Symbol.iterator])}class Df{constructor(e={},t={}){const n=bn(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new A("collection-add-item-invalid-index",this);let n=0;for(const o of e){const s=this._getItemIdBeforeAdding(o),a=t+n;this._items.splice(a,0,o),this._itemMap.set(s,o),this.fire("add",o,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new A("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new A("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,s,a)=>{const l=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(l&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const f=e(s);if(!f)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const b of this._skippedIndexesFromExternal)a>b&&p--;for(const b of t._skippedIndexesFromExternal)p>=b&&p++;this._bindToExternalToInternalMap.set(s,f),this._bindToInternalToExternalMap.set(f,s),this.add(f,p);for(let b=0;b<t._skippedIndexesFromExternal.length;b++)p<=t._skippedIndexesFromExternal[b]&&t._skippedIndexesFromExternal[b]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,s,a)=>{const l=this._bindToExternalToInternalMap.get(s);l&&this.remove(l),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(a<f&&u.push(f-1),a>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new A("collection-add-invalid-id",this);if(this.get(n))throw new A("collection-add-item-already-exists",this)}else e[t]=n=y();return n}_remove(e){let t,n,o,s=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),s=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],s=!o,o&&(n=o[a])):(o=e,n=o[a],t=this._items.indexOf(o),s=t==-1||!this._itemMap.get(n)),s)throw new A("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const l=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(l),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}Q(Df,L);const Sn=Df;class ml{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,s]of n)this._contextPlugins.set(o,s),this._contextPlugins.set(s,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new A("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,s=this._context;(function D(S,I=new Set){S.forEach(N=>{u(N)&&(I.has(N)||(I.add(N),N.pluginName&&!o._availablePlugins.has(N.pluginName)&&o._availablePlugins.set(N.pluginName,N),N.requires&&D(N.requires,I)))})})(e),v(e);const a=[...function D(S,I=new Set){return S.map(N=>u(N)?N:o._availablePlugins.get(N)).reduce((N,F)=>I.has(F)?N:(I.add(F),F.requires&&(v(F.requires,F),D(F.requires,I).forEach(te=>N.add(te))),N.add(F)),new Set)}(e.filter(D=>!p(D,t)))];(function(D,S){for(const I of S){if(typeof I!="function")throw new A("plugincollection-replace-plugin-invalid-type",null,{pluginItem:I});const N=I.pluginName;if(!N)throw new A("plugincollection-replace-plugin-missing-name",null,{pluginItem:I});if(I.requires&&I.requires.length)throw new A("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:N});const F=o._availablePlugins.get(N);if(!F)throw new A("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:N});const te=D.indexOf(F);if(te===-1){if(o._contextPlugins.has(F))return;throw new A("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:N})}if(F.requires&&F.requires.length)throw new A("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:N});D.splice(te,1,I),o._availablePlugins.set(N,I)}})(a,n);const l=function(D){return D.map(S=>{const I=o._contextPlugins.get(S)||new S(s);return o._add(S,I),I})}(a);return E(l,"init").then(()=>E(l,"afterInit")).then(()=>l);function u(D){return typeof D=="function"}function f(D){return u(D)&&D.isContextPlugin}function p(D,S){return S.some(I=>I===D||b(D)===I||b(I)===D)}function b(D){return u(D)?D.pluginName||D.name:D}function v(D,S=null){D.map(I=>u(I)?I:o._availablePlugins.get(I)||I).forEach(I=>{(function(N,F){if(!u(N))throw F?new A("plugincollection-soft-required",s,{missingPlugin:N,requiredBy:b(F)}):new A("plugincollection-plugin-not-found",s,{plugin:N})})(I,S),function(N,F){if(!!f(F)&&!f(N))throw new A("plugincollection-context-required",s,{plugin:b(N),requiredBy:b(F)})}(I,S),function(N,F){if(!!F&&!!p(N,t))throw new A("plugincollection-required",s,{plugin:b(N),requiredBy:b(F)})}(I,S)})}function E(D,S){return D.reduce((I,N)=>N[S]?o._contextPlugins.has(N)?I:I.then(N[S].bind(N)):I,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new A("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function Dt(i){return Array.isArray(i)?i:[i]}function xy(i,e,t=1){if(typeof t!="number")throw new A("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(u,f){return!!window.CKEDITOR_TRANSLATIONS[u]&&!!window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(i,o))return t!==1?e.plural:e.string;const s=window.CKEDITOR_TRANSLATIONS[i].dictionary,a=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(u=>u===1?0:1),l=s[o];return typeof l=="string"?l:l[Number(a(t))]}Q(ml,L),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Ey=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Sf(i){return Ey.includes(i)?"rtl":"ltr"}class Dy{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Sf(this.uiLanguage),this.contentLanguageDirection=Sf(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Dt(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,s){return o.replace(/%(\d+)/g,(a,l)=>l<s.length?s[l]:a)}(xy(this.uiLanguage,e,n),t)}}class Sy{constructor(e){this.config=new xf(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new ml(this,t);const n=this.config.get("language")||{};this.locale=new Dy({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Sn,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new A("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new A("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new A("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class ts{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function Ht(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}Q(ts,Ie);const Tf=function(i){return pl(i,4)};class hi{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new A("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Ht(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Tf(this);return delete e.parent,e}is(e){return e==="node"||e==="view:node"}}Q(hi,L);class it extends hi{constructor(e,t){super(e),this._textData=t}is(e){return e==="$text"||e==="view:$text"||e==="text"||e==="view:text"||e==="node"||e==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof it&&(this===e||this.data===e.data)}_clone(){return new it(this.document,this.data)}}class ho{constructor(e,t,n){if(this.textNode=e,t<0||t>e.data.length)throw new A("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new A("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return e==="$textProxy"||e==="view:$textProxy"||e==="textProxy"||e==="view:textProxy"}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function Un(i){return bn(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}class Hn{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=If(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const s=If(n,o);s&&t.push({element:n,pattern:o,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function If(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const s=new Set(o.getAttributeKeys());return Vt(n)?(n.style!==void 0&&T("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&T("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),kl(n,s,a=>o.getAttribute(a))}(e.attributes,i),!t.attributes)?null:!(e.classes&&(t.classes=function(n,o){return kl(n,o.getClassNames())}(e.classes,i),!t.classes))&&!(e.styles&&(t.styles=function(n,o){return kl(n,o.getStyleNames(!0),s=>o.getStyle(s))}(e.styles,i),!t.styles))&&t}function kl(i,e,t){const n=function(a){return Array.isArray(a)?a.map(l=>Vt(l)?(l.key!==void 0&&l.value!==void 0||T("matcher-pattern-missing-key-or-value",l),[l.key,l.value]):[l,!0]):Vt(a)?Object.entries(a):[[a,!0]]}(i),o=Array.from(e),s=[];return n.forEach(([a,l])=>{o.forEach(u=>{(function(f,p){return f===!0||f===p||f instanceof RegExp&&p.match(f)})(a,u)&&function(f,p,b){if(f===!0)return!0;const v=b(p);return f===v||f instanceof RegExp&&!!String(v).match(f)}(l,u,t)&&s.push(u)})}),!n.length||s.length<n.length?null:s}const aa=function(i){return typeof i=="symbol"||Le(i)&&Ce(i)=="[object Symbol]"};var Ty=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Iy=/^\w*$/;const My=function(i,e){if(Yt(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!aa(i))||Iy.test(i)||!Ty.test(i)||e!=null&&i in Object(e)};function bl(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],s=t.cache;if(s.has(o))return s.get(o);var a=i.apply(this,n);return t.cache=s.set(o,a)||s,a};return t.cache=new(bl.Cache||oa),t}bl.Cache=oa;const Py=bl;var Ny=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,By=/\\(\\)?/g,Oy=function(i){var e=Py(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(Ny,function(t,n,o,s){e.push(o?s.replace(By,"$1"):n||t)}),e});const Ly=Oy,Ry=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var Mf=ee?ee.prototype:void 0,Pf=Mf?Mf.toString:void 0;const zy=function i(e){if(typeof e=="string")return e;if(Yt(e))return Ry(e,i)+"";if(aa(e))return Pf?Pf.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},wl=function(i){return i==null?"":zy(i)},_l=function(i,e){return Yt(i)?i:My(i,e)?[i]:Ly(wl(i))},jy=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Al=function(i){if(typeof i=="string"||aa(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},Nf=function(i,e){for(var t=0,n=(e=_l(e,i)).length;i!=null&&t<n;)i=i[Al(e[t++])];return t&&t==n?i:void 0},Bf=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(o);++n<o;)s[n]=i[n+e];return s},Fy=function(i,e){return e.length<2?i:Nf(i,Bf(e,0,-1))},Vy=function(i,e){return e=_l(e,i),(i=Fy(i,e))==null||delete i[Al(jy(e))]},Uy=function(i,e){return i==null||Vy(i,e)},ca=function(i,e,t){var n=i==null?void 0:Nf(i,e);return n===void 0?t:n},vl=function(i,e,t){(t!==void 0&&!Ut(i[e],t)||t===void 0&&!(e in i))&&Xc(i,e,t)},Hy=function(i){return function(e,t,n){for(var o=-1,s=Object(e),a=n(e),l=a.length;l--;){var u=a[i?l:++o];if(t(s[u],u,s)===!1)break}return e}}(),$y=function(i){return Le(i)&&ra(i)},Cl=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},qy=function(i){return Qi(i,Ji(i))},Wy=function(i,e,t,n,o,s,a){var l=Cl(i,t),u=Cl(e,t),f=a.get(u);if(f)vl(i,t,f);else{var p=s?s(l,u,t+"",i,e,a):void 0,b=p===void 0;if(b){var v=Yt(u),E=!v&&Jr(u),D=!v&&!E&&rl(u);p=u,v||E||D?Yt(l)?p=l:$y(l)?p=of(l):E?(b=!1,p=nf(u,!0)):D?(b=!1,p=kf(u,!0)):p=[]:Vt(u)||tl(u)?(p=l,tl(l)?p=qy(l):xe(l)&&!ai(l)||(p=wf(u))):b=!1}b&&(a.set(u,p),o(p,u,n,s,a),a.delete(u)),vl(i,t,p)}},Gy=function i(e,t,n,o,s){e!==t&&Hy(t,function(a,l){if(s||(s=new Zr),xe(a))Wy(e,t,l,n,i,o,s);else{var u=o?o(Cl(e,l),a,l+"",e,t,s):void 0;u===void 0&&(u=a),vl(e,l,u)}},Ji)},fi=function(i){return i},Ky=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Of=Math.max;const Yy=function(i,e,t){return e=Of(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,s=Of(n.length-e,0),a=Array(s);++o<s;)a[o]=n[e+o];o=-1;for(var l=Array(e+1);++o<e;)l[o]=n[o];return l[e]=t(a),Ky(i,this,l)}},Qy=function(i){return function(){return i}},Zy=ia?function(i,e){return ia(i,"toString",{configurable:!0,enumerable:!1,value:Qy(e),writable:!0})}:fi;var Jy=Date.now;const Xy=function(i){var e=0,t=0;return function(){var n=Jy(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(Zy),e1=function(i,e){return Xy(Yy(i,e,fi),i+"")},t1=function(i,e,t){if(!xe(t))return!1;var n=typeof e;return!!(n=="number"?ra(t)&&nl(e,t.length):n=="string"&&e in t)&&Ut(t[e],i)},Lf=function(i){return e1(function(e,t){var n=-1,o=t.length,s=o>1?t[o-1]:void 0,a=o>2?t[2]:void 0;for(s=i.length>3&&typeof s=="function"?(o--,s):void 0,a&&t1(t[0],t[1],a)&&(s=o<3?void 0:s,o=1),e=Object(e);++n<o;){var l=t[n];l&&i(e,l,n,s)}return e})},Rf=Lf(function(i,e,t){Gy(i,e,t)}),n1=function(i,e,t,n){if(!xe(i))return i;for(var o=-1,s=(e=_l(e,i)).length,a=s-1,l=i;l!=null&&++o<s;){var u=Al(e[o]),f=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return i;if(o!=a){var p=l[u];(f=n?n(p,u,l):void 0)===void 0&&(f=xe(p)?p:nl(e[o+1])?[]:{})}el(l,u,f),l=l[u]}return i},o1=function(i,e,t){return i==null?i:n1(i,e,t)};class i1{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,s=0,a=0,l=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const p=n.charAt(f);if(o===null)switch(p){case":":l||(l=n.substr(s,f-s),a=f+1);break;case'"':case"'":o=p;break;case";":{const b=n.substr(a,f-a);l&&u.set(l.trim(),b.trim()),l=null,s=f+1;break}}else p===o&&(o=null)}return u}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(xe(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=yl(e);Uy(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!xe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=ca(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class r1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(xe(t))xl(n,yl(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:s,value:a}=o(t);xl(n,s,a)}else xl(n,e,t)}getNormalized(e,t){if(!e)return Rf({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ca(t,n);const o=n(e,t);if(o)return o}return ca(t,yl(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const s=this.getNormalized(o,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function yl(i){return i.replace("-",".")}function xl(i,e,t){let n=t;xe(t)&&(n=Rf({},ca(i,e),t)),o1(i,e,n)}class wn extends hi{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(s){s=Un(s);for(const[a,l]of s)l===null?s.delete(a):typeof l!="string"&&s.set(a,String(l));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");zf(this._classes,s),this._attrs.delete("class")}this._styles=new i1(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="view:element"):e==="element"||e==="view:element"||e==="node"||e==="view:node"}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof wn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new Hn(...e);let n=this.parent;for(;n;){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new it(s,a)]:(bn(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new it(s,l):l instanceof ho?new it(s,l.data):l))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?zf(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Dt(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Dt(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Dt(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function zf(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}class la extends wn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=jf}is(e,t=null){return t?t===this.name&&(e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}}function jf(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}class da extends la{constructor(e,t,n,o){super(e,t,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&(e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}destroy(){this.stopListening()}}Q(da,Ie);const Ff=Symbol("rootName");class s1 extends da{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&(e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}get rootName(){return this.getCustomProperty(Ff)}set rootName(e){this._setCustomProperty(Ff,e)}set _name(e){this.name=e}}class gi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new A("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new A("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=ue._createAt(e.startPosition):this.position=ue._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof it){if(e.isAtEnd)return this.position=ue._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof wn)return this.shallow?e.offset++:e=new ue(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof it){if(this.singleCharacters)return e=new ue(o,0),this.position=e,this._next();{let s,a=o.data.length;return o==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new ho(o,0,a),e=ue._createAfter(s)):(s=new ho(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new ho(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=ue._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof it){if(e.isAtStart)return this.position=ue._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof wn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new ue(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof it){if(this.singleCharacters)return e=new ue(o,o.data.length),this.position=e,this._previous();{let s,a=o.data.length;if(o==this._boundaryStartParent){const l=this.boundaries.start.offset;s=new ho(o,l,o.data.length-l),a=s.data.length,e=ue._createBefore(s)}else s=new ho(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof o=="string"){let s;if(this.singleCharacters)s=1;else{const l=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-l}e.offset-=s;const a=new ho(n,e.offset,s);return this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=ue._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,s){return t instanceof ho&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ue._createAfter(t.textNode):(o=ue._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ue._createBefore(t.textNode):(o=ue._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:s}}}}class ue{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof da);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ue._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new gi(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}is(e){return e==="position"||e==="view:position"}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=Ht(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new gi(e)}clone(){return new ue(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ue)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new A("view-createpositionat-offset-required",n)}return new ue(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ue(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new A("view-position-after-root",e,{root:e});return new ue(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ue(e.textNode,e.offsetInText);if(!e.parent)throw new A("view-position-before-root",e,{root:e});return new ue(e.parent,e.index)}}class Be{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new gi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ua,{direction:"backward"}),t=this.end.getLastMatchingPosition(ua);return e.parent.is("$text")&&e.isAtStart&&(e=ue._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ue._createAfter(t.parent)),new Be(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ua);if(e.isAfter(this.end)||e.isEqual(this.end))return new Be(e,e);let t=this.end.getLastMatchingPosition(ua,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new ue(n,0)),o&&o.is("$text")&&(t=new ue(o,o.data.length)),new Be(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Be(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Be(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Be(t,n)}return null}getWalker(e={}){return e.boundaries=this,new gi(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Be(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new gi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new gi(e);yield t.position;for(const n of t)yield n.nextPosition}is(e){return e==="range"||e==="view:range"}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new ue(e,t),new ue(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ue._createBefore(e),t)}}function ua(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function El(i){let e=0;for(const t of i)e++;return e}class Tn{constructor(e=null,t,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=El(this.getRanges());if(t!=El(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(e,t,n){if(e===null)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Tn||e instanceof Dl)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Be)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof ue)this._setRanges([new Be(e)]),this._setFakeOptions(t);else if(e instanceof hi){const o=!!n&&!!n.backward;let s;if(t===void 0)throw new A("view-selection-setto-required-second-parameter",this);s=t=="in"?Be._createIn(e):t=="on"?Be._createOn(e):new Be(ue._createAt(e,t)),this._setRanges([s],o),this._setFakeOptions(n)}else{if(!bn(e))throw new A("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new A("view-selection-setfocus-no-ranges",this);const n=ue._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Be(n,o),!0):this._addRange(new Be(o,n)),this.fire("change")}is(e){return e==="selection"||e==="view:selection"}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Be))throw new A("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new A("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Be(e.start,e.end))}}Q(Tn,L);class Dl{constructor(e=null,t,n){this._selection=new Tn,this._selection.delegate("change").to(this),this._selection.setTo(e,t,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return e==="selection"||e=="documentSelection"||e=="view:selection"||e=="view:documentSelection"}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setFocus(e,t){this._selection.setFocus(e,t)}}Q(Dl,L);class ns extends _{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Sl=Symbol("bubbling contexts"),a1={fire(i,...e){try{const t=i instanceof _?i:new _(this,i),n=Tl(this);if(!n.size)return;if(os(t,"capturing",this),Xi(n,"$capture",t,...e))return t.return;const o=t.startRange||this.selection.getFirstRange(),s=o?o.getContainedElement():null,a=!!s&&Boolean(Vf(n,s));let l=s||function(u){if(!u)return null;const f=u.start.parent,p=u.end.parent,b=f.getPath(),v=p.getPath();return b.length>v.length?f:p}(o);if(os(t,"atTarget",l),!a){if(Xi(n,"$text",t,...e))return t.return;os(t,"bubbling",l)}for(;l;){if(l.is("rootElement")){if(Xi(n,"$root",t,...e))return t.return}else if(l.is("element")&&Xi(n,l.name,t,...e))return t.return;if(Xi(n,l,t,...e))return t.return;l=l.parent,os(t,"bubbling",l)}return os(t,"bubbling",this),Xi(n,"$document",t,...e),t.return}catch(t){A.rethrowUnexpectedError(t,this)}},_addEventListener(i,e,t){const n=Dt(t.context||"$document"),o=Tl(this);for(const s of n){let a=o.get(s);a||(a=Object.create(L),o.set(s,a)),this.listenTo(a,i,e,t)}},_removeEventListener(i,e){const t=Tl(this);for(const n of t.values())this.stopListening(n,i,e)}},c1=a1;function os(i,e,t){i instanceof ns&&(i._eventPhase=e,i._currentTarget=t)}function Xi(i,e,t,...n){const o=typeof e=="string"?i.get(e):Vf(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function Vf(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Tl(i){return i[Sl]||(i[Sl]=new Map),i[Sl]}class is{constructor(e){this.selection=new Dl,this.roots=new Sn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}Q(is,c1),Q(is,Ie);class er extends wn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=l1,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new A("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&(e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"):e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function l1(){if(Il(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Il(i)>1)return null;i=i.parent}return!i||Il(i)>1?null:this.childCount}function Il(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}er.DEFAULT_PRIORITY=10;class Uf extends wn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=d1}is(e,t=null){return t?t===this.name&&(e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"):e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof hi||Array.from(t).length>0))throw new A("view-emptyelement-cannot-add",[this,t])}}function d1(){return null}const pi=navigator.userAgent.toLowerCase(),u1={isMac:Hf(pi),isWindows:function(i){return i.indexOf("windows")>-1}(pi),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(pi),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(pi),isiOS:function(i){return!!i.match(/iphone|ipad/i)||Hf(i)&&navigator.maxTouchPoints>0}(pi),isAndroid:function(i){return i.indexOf("android")>-1}(pi),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(pi),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},Ze=u1;function Hf(i){return i.indexOf("macintosh")>-1}const h1={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},f1={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ze=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);i[t.toLowerCase()]=e}for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),g1=Object.fromEntries(Object.entries(ze).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function $n(i){let e;if(typeof i=="string"){if(e=ze[i.toLowerCase()],!e)throw new A("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?ze.alt:0)+(i.ctrlKey?ze.ctrl:0)+(i.shiftKey?ze.shift:0)+(i.metaKey?ze.cmd:0);return e}function Ml(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return $n(t.slice(0,-1));const n=$n(t);return Ze.isMac&&n==ze.ctrl?ze.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function $f(i){let e=Ml(i);return Object.entries(Ze.isMac?h1:f1).reduce((t,[n,o])=>((e&ze[n])!=0&&(e&=~ze[n],t+=o),t),"")+(e?g1[e]:"")}function Pl(i,e){const t=e==="ltr";switch(i){case ze.arrowleft:return t?"left":"right";case ze.arrowright:return t?"right":"left";case ze.arrowup:return"up";case ze.arrowdown:return"down"}}class Nl extends wn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=m1}is(e,t=null){return t?t===this.name&&(e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"):e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof hi||Array.from(t).length>0))throw new A("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function p1(i){i.document.on("arrowKey",(e,t)=>function(n,o,s){if(o.keyCode==ze.arrowright){const a=o.domTarget.ownerDocument.defaultView.getSelection(),l=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(l||o.shiftKey){const u=a.focusNode,f=a.focusOffset,p=s.domPositionToView(u,f);if(p===null)return;let b=!1;const v=p.getLastMatchingPosition(E=>(E.item.is("uiElement")&&(b=!0),!(!E.item.is("uiElement")&&!E.item.is("attributeElement"))));if(b){const E=s.viewPositionToDom(v);l?a.collapse(E.parent,E.offset):a.extend(E.parent,E.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function m1(){return null}class qf extends wn{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=k1}is(e,t=null){return t?t===this.name&&(e==="rawElement"||e==="view:rawElement"||e==="element"||e==="view:element"):e==="rawElement"||e==="view:rawElement"||e===this.name||e==="view:"+this.name||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof hi||Array.from(t).length>0))throw new A("view-rawelement-cannot-add",[this,t])}}function k1(){return null}class mi{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="view:documentFragment"}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(s,a){return typeof a=="string"?[new it(s,a)]:(bn(a)||(a=[a]),Array.from(a).map(l=>typeof l=="string"?new it(s,l):l instanceof ho?new it(s,l.data):l))}(this.document,t);for(const s of o)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}Q(mi,L);class Wf{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(e,t,n){this.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new mi(this.document,e)}createText(e){return new it(this.document,e)}createAttributeElement(e,t,n={}){const o=new er(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let s=null;Vt(n)?o=n:s=n;const a=new la(this.document,e,t,s);return o.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const o=new da(this.document,e,t);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Uf(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Nl(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const s=new qf(this.document,e,t);return s.render=n||(()=>{}),o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Vt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ue?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new A("view-writer-break-non-container-element",this.document);if(!t.parent)throw new A("view-writer-break-root",this.document);if(e.isAtStart)return ue._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ue._createAfter(t),n);const o=new Be(e,ue._createAt(t,"end")),s=new ue(n,0);this.move(o,s)}return ue._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,l=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ue(a,l))}const o=n.getChild(t-1),s=n.getChild(t);if(!o||!s)return e;if(o.is("$text")&&s.is("$text"))return Kf(o,s);if(o.is("attributeElement")&&s.is("attributeElement")&&o.isSimilar(s)){const a=o.childCount;return o._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new ue(o,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new A("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),s=o instanceof it?ue._createAt(o,"end"):ue._createAt(t,"end");return this.move(Be._createIn(n),ue._createAt(t,"end")),this.remove(Be._createOn(n)),s}insert(e,t){Yf(t=bn(t)?[...t]:[t],this.document);const n=t.reduce((a,l)=>{const u=a[a.length-1],f=!l.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(l):a.push({breakAttributes:f,nodes:[l]}),a},[]);let o=null,s=e;for(const{nodes:a,breakAttributes:l}of n){const u=this._insertNodes(s,a,l);o||(o=u.start),s=u.end}return o?new Be(o,s):new Be(e)}remove(e){const t=e instanceof Be?e:Be._createOn(e);if(rs(t,this.document),t.isCollapsed)return new mi(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),s=n.parent,a=o.offset-n.offset,l=s._removeChildren(n.offset,a);for(const f of l)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new mi(this.document,l)}clear(e,t){rs(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const s=o.item;let a;if(s.is("element")&&t.isSimilar(s))a=Be._createOn(s);else if(!o.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const l=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));l&&(a=Be._createIn(l))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,s=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof er))throw new A("view-writer-wrap-invalid-attribute",this.document);if(rs(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(o=o.getLastMatchingPosition(a=>a.item.is("uiElement"))),o=this._wrapPosition(o,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new Be(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof er))throw new A("view-writer-unwrap-invalid-attribute",this.document);if(rs(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(l,u)}rename(e,t){const n=new la(this.document,e,t.getAttributes());return this.insert(ue._createAfter(t),n),this.move(Be._createIn(t),ue._createAt(n,0)),this.remove(Be._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ue._createAt(e,t)}createPositionAfter(e){return ue._createAfter(e)}createPositionBefore(e){return ue._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Tn(e,t,n)}createSlot(e){if(!this._slotFactory)throw new A("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,s;if(o=n?Bl(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new A("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?Ol(e):e;const a=o._insertChild(s.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const l=s.getShiftedBy(a),u=this.mergeAttributes(s);u.isEqual(s)||l.offset--;const f=this.mergeAttributes(l);return new Be(u,f)}_wrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const u=e.getChild(s),f=u.is("$text"),p=u.is("attributeElement");if(p&&this._wrapAttributeElement(o,u))a.push(new ue(e,s));else if(f||!p||b1(o,u)){const b=o._clone();u._remove(),b._appendChild(u),e._insertChild(s,b),this._addToClonedElementsGroup(b),a.push(new ue(e,s))}else this._wrapChildren(u,0,u.childCount,o);s++}let l=0;for(const u of a)u.offset-=l,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let s=t;const a=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(o)){const f=u.getChildren(),p=u.childCount;u._remove(),e._insertChild(s,f),this._removeFromClonedElementsGroup(u),a.push(new ue(e,s),new ue(e,s+p)),s+=p,n+=p-1}else this._unwrapAttributeElement(o,u)?(a.push(new ue(e,s),new ue(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,o),s++);else s++}let l=0;for(const u of a)u.offset-=l,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(l++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),s=n.parent,a=this._wrapChildren(s,n.offset,o.offset,t),l=this.mergeAttributes(a.start);l.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(l,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Gf(e.clone());e.parent.is("$text")&&(e=Ol(e));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new Be(e,e.getShiftedBy(1));this.wrap(o,t);const s=new ue(n.parent,n.index);n._remove();const a=s.nodeBefore,l=s.nodeAfter;return a instanceof it&&l instanceof it?Kf(a,l):Gf(s)}_wrapAttributeElement(e,t){if(!Qf(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Qf(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(rs(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new Be(u,u)}const s=this._breakAttributes(o,t),a=s.parent.childCount,l=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-a,new Be(l,s)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new A("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new A("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new A("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Ll(o.parent)||Ll(o))return e.clone();if(o.is("$text"))return this._breakAttributes(Ol(e),t);if(n==o.childCount){const s=new ue(o.parent,o.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new ue(o.parent,o.index);return this._breakAttributes(s,t)}{const s=o.index+1,a=o._clone();o.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const l=o.childCount-n,u=o._removeChildren(n,l);a._appendChild(u);const f=new ue(o.parent,s);return this._breakAttributes(f,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Bl(i){let e=i.parent;for(;!Ll(e);){if(!e)return;e=e.parent}return e}function b1(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function Gf(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ue(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ue(t,0):i}function Ol(i){if(i.offset==i.parent.data.length)return new ue(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ue(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new it(i.root.document,e)),new ue(i.parent.parent,i.parent.index+1)}function Kf(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ue(i,t)}function Yf(i,e){for(const t of i){if(!w1.some(n=>t instanceof n))throw new A("view-writer-insert-invalid-node-type",e);t.is("$text")||Yf(t.getChildren(),e)}}const w1=[it,er,la,Uf,qf,Nl];function Ll(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function rs(i,e){const t=Bl(i.start),n=Bl(i.end);if(!t||!n||t!==n)throw new A("view-writer-invalid-range-container",e)}function Qf(i,e){return i.id===null&&e.id===null}function Nt(i){return Object.prototype.toString.call(i)=="[object Text]"}const Zf=i=>i.createTextNode("\xA0"),Jf=i=>{const e=i.createElement("span");return e.dataset.ckeFiller=!0,e.innerText="\xA0",e},Xf=i=>{const e=i.createElement("br");return e.dataset.ckeFiller=!0,e},ha="\u2060".repeat(7);function an(i){return Nt(i)&&i.data.substr(0,7)===ha}function fa(i){return i.data.length==7&&an(i)}function Rl(i){return an(i)?i.data.slice(7):i.data}function _1(i,e){if(e.keyCode==ze.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;an(n)&&o<=7&&t.collapse(n,0)}}}function eg(i,e,t,n=!1){t=t||function(l,u){return l===u};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),s=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(l,u,f){const p=tg(l,u,f);if(p===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const b=ng(l,p),v=ng(u,p),E=tg(b,v,f),D=l.length-E,S=u.length-E;return{firstIndex:p,lastIndexOld:D,lastIndexNew:S}}(o,s,t);return n?function(l,u){const{firstIndex:f,lastIndexOld:p,lastIndexNew:b}=l;if(f===-1)return Array(u).fill("equal");let v=[];return f>0&&(v=v.concat(Array(f).fill("equal"))),b-f>0&&(v=v.concat(Array(b-f).fill("insert"))),p-f>0&&(v=v.concat(Array(p-f).fill("delete"))),b<u&&(v=v.concat(Array(u-b).fill("equal"))),v}(a,s.length):function(l,u){const f=[],{firstIndex:p,lastIndexOld:b,lastIndexNew:v}=u;return v-p>0&&f.push({index:p,type:"insert",values:l.slice(p,v)}),b-p>0&&f.push({index:p+(v-p),type:"delete",howMany:b-p}),f}(s,a)}function tg(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function ng(i,e){return i.slice(e).reverse()}function No(i,e,t){t=t||function(S,I){return S===I};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return No.fastDiff(i,e,t,!0);let s,a;if(o<n){const S=i;i=e,e=S,s="delete",a="insert"}else s="insert",a="delete";const l=i.length,u=e.length,f=u-l,p={},b={};function v(S){const I=(b[S-1]!==void 0?b[S-1]:-1)+1,N=b[S+1]!==void 0?b[S+1]:-1,F=I>N?-1:1;p[S+F]&&(p[S]=p[S+F].slice(0)),p[S]||(p[S]=[]),p[S].push(I>N?s:a);let te=Math.max(I,N),be=te-S;for(;be<l&&te<u&&t(i[be],e[te]);)be++,te++,p[S].push("equal");return te}let E,D=0;do{for(E=-D;E<f;E++)b[E]=v(E);for(E=f+D;E>f;E--)b[E]=v(E);b[f]=v(f),D++}while(b[f]!==u);return p[f].slice(1)}function og(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function ig(i){const e=i.parentNode;e&&e.removeChild(i)}function tr(i){return i&&i.nodeType===Node.COMMENT_NODE}function nr(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}No.fastDiff=eg;var A1=g(6062),Pe=g.n(A1),rg=g(9315),v1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(rg.Z,v1),rg.Z.locals;class sg{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),Ze.isBlink&&!Ze.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new A("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(Ze.isBlink&&!Ze.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ue._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;an(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=ag(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),s=this._findReplaceActions(o,t,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const l of s)if(l==="replace"){const u=a.equal+a.insert,f=a.equal+a.delete,p=e.getChild(u);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,t[f]),ig(n[u]),a.equal++}else a[l]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ue._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Nt(t.parent)&&an(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!an(e))throw new A("view-renderer-filler-was-lost",this);fa(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const l=a.findAncestor(u=>u.hasAttribute("contenteditable"));return!l||l.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,s=e.nodeAfter;return!(o instanceof it||s instanceof it)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),o=this.domConverter.viewToDom(e),s=n.data;let a=o.data;const l=t.inlineFillerPosition;if(l&&l.parent==e.parent&&l.offset==e.index&&(a=ha+a),s!=a){const u=eg(s,a);for(const f of u)f.type==="insert"?n.insertData(f.index,f.values.join("")):n.deleteData(f.index,f.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),o=e.getAttributeKeys();for(const s of o)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const o=t.inlineFillerPosition,s=this.domConverter.mapViewToDom(e).childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&ag(n.ownerDocument,a,o.offset);const l=this._diffNodeLists(s,a);let u=0;const f=new Set;for(const p of l)p==="delete"?(f.add(s[u]),ig(s[u])):p==="equal"&&u++;u=0;for(const p of l)p==="insert"?(og(n,u,a[u]),u++):p==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[u])),u++);for(const p of f)p.parentNode||this.domConverter.unbindDomElement(p)}_diffNodeLists(e,t){return No(e=function(n,o){const s=Array.from(n);return s.length==0||!o||s[s.length-1]==o&&s.pop(),s}(e,this._fakeSelectionContainer),t,C1.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let o=[],s=[],a=[];const l={equal:0,insert:0,delete:0};for(const u of e)u==="insert"?a.push(n[l.equal+l.insert]):u==="delete"?s.push(t[l.equal+l.delete]):(o=o.concat(No(s,a,cg).map(f=>f==="equal"?"replace":f)),o.push("equal"),s=[],a=[]),l[u]++;return o.concat(No(s,a,cg).map(u=>u==="equal"?"replace":u))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(Ze.isBlink&&!Ze.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const l=a.createElement("div");return l.className="ck-fake-selection-container",Object.assign(l.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),l.textContent="\xA0",l}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),s=t.createRange();o.removeAllRanges(),s.selectNodeContents(n),o.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),Ze.isGecko&&function(s,a){const l=s.parent;if(l.nodeType!=Node.ELEMENT_NODE||s.offset!=l.childNodes.length-1)return;const u=l.childNodes[s.offset];u&&u.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments)if(e.getSelection().rangeCount){const t=e.activeElement,n=this.domConverter.mapDomToView(t);t&&n&&e.getSelection().removeAllRanges()}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function ag(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(Nt(o))return o.data=ha+o.data,o;{const s=i.createTextNode(ha);return Array.isArray(e)?n.splice(t,0,s):og(e,t,s),s}}function cg(i,e){return nr(i)&&nr(e)&&!Nt(i)&&!Nt(e)&&!tr(i)&&!tr(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function C1(i,e,t){return e===t||(Nt(e)&&Nt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}Q(sg,Ie);const ut={window,document};function zl(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function lg(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const y1=Xf(ut.document),x1=Zf(ut.document),E1=Jf(ut.document),ga="data-ck-unsafe-attribute-",dg="data-ck-unsafe-element";class pa{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ut.document:ut.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new Hn,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Tn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)o.appendChild(s[0]);const a=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),l=[];let u;for(;u=a.nextNode();)l.push(u);for(const f of l){for(const b of f.getAttributeNames())this.setDomElementAttribute(f,b,f.getAttribute(b));const p=f.tagName.toLowerCase();this._shouldRenameElement(p)&&(fg(p),f.replaceWith(this._createReplacementDomElement(p,f)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(fg(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o=null){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);s||T("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(ga+t)&&s&&e.removeAttribute(ga+t),e.setAttribute(s?t:ga+t,n)}removeDomElementAttribute(e,t){t!=dg&&(e.removeAttribute(t),e.removeAttribute(ga+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const s of e.getChildren()){n===o&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(a&&T("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return an(n)&&(o+=7),{parent:n,offset:o}}{let n,o,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const a=e.nodeBefore;if(o=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(e.nodeBefore),!o)return null;n=o.parentNode,s=o.nextSibling}return Nt(s)&&an(s)?{parent:s,offset:7}:{parent:n,offset:o?zl(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(tr(e)&&t.skipComments)return null;if(Nt(e)){if(fa(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new it(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new mi(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const s=e.attributes;if(s)for(let a=s.length,l=0;l<a;l++)o._setAttribute(s[l].name,s[l].value);if(this._isViewElementWithRawContent(o,t)||tr(e)){const a=tr(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))o._appendChild(s);return o}}*domChildrenToView(e,t={}){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],s=this.domToView(o,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;Nt(o)&&(o=o.parentNode);const s=this.fakeSelectionToView(o);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const s=e.getRangeAt(o),a=this.domRangeToView(s);a&&n.push(a)}return new Tn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Be(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,zl(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ue._createBefore(n);if(Nt(e)){if(fa(e))return this.domPositionToView(e.parentNode,zl(e));const o=this.findCorrespondingViewText(e);let s=t;return o?(an(e)&&(s-=7,s=s<0?0:s),new ue(o,s)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new ue(o,0)}else{const o=e.childNodes[t-1],s=Nt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(s&&s.parent)return new ue(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(fa(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof it?o.nextSibling:null}else{const o=this.mapDomToView(e.parentNode);if(o){const s=o.getChild(0);return s instanceof it?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=ut.window,s=[];ug(t,a=>{const{scrollLeft:l,scrollTop:u}=a;s.push([l,u])}),t.focus(),ug(t,a=>{const[l,u]=s.shift();a.scrollLeft=l,a.scrollTop=u}),ut.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(y1):!(e.tagName!=="BR"||!hg(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(E1)||function(t,n){return t.isEqualNode(x1)&&hg(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=lg(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Zf(this._domDocument);case"markedNbsp":return Jf(this._domDocument);case"br":return Xf(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Nt(e)&&an(e)&&t<7||this.isElement(e)&&an(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(f,p){return lg(f).some(b=>b.tagName&&p.includes(b.tagName.toLowerCase()))}(e,this.preElements))return Rl(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,o);s&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Rl(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const l=o&&this.isElement(o)&&o.tagName!="BR",u=o&&Nt(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||l||u)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!an(e)}_getTouchingInlineViewNode(e,t){const n=new gi({startPosition:t?ue._createAfter(e):ue._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let s=!0;do if(!s&&e[n]?e=e[n]:e[o]?(e=e[o],s=!1):(e=e.parentNode,s=!0),!e||this._isBlockElement(e))return null;while(!Nt(e)&&e.tagName!="BR"&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(tr(e))return new Nl(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new wn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t=null){const n=this._domDocument.createElement("span");if(n.setAttribute(dg,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function ug(i,e){for(;i&&i!=ut.document;)e(i),i=i.parentNode}function hg(i,e){const t=i.parentNode;return t&&t.tagName&&e.includes(t.tagName.toLowerCase())}function fg(i){i==="script"&&T("domconverter-unsafe-script-element-detected"),i==="style"&&T("domconverter-unsafe-style-element-detected")}function ma(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const jl=Lf(function(i,e){Qi(e,Ji(e),i)}),D1=jl({},L,{listenTo(i,e,t,n={}){if(nr(i)||ma(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},s=this._getProxyEmitter(i,o)||new gg(i,o);this.listenTo(s,e,t,n)}else L.listenTo.call(this,i,e,t,n)},stopListening(i,e,t){if(nr(i)||ma(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,e,t)}else L.stopListening.call(this,i,e,t)},_getProxyEmitter(i,e){return function(t,n){const o=t[$];return o&&o[n]?o[n].emitter:null}(this,pg(i,e))},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(i,e)).filter(e=>!!e)}}),ss=D1;class gg{constructor(e,t){j(this,pg(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),L._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){L._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function pg(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=y())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}Q(gg,L);class qn{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}Q(qn,ss);const S1=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},T1=function(i){return this.__data__.has(i)};function ka(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new oa;++e<t;)this.add(i[e])}ka.prototype.add=ka.prototype.push=S1,ka.prototype.has=T1;const I1=ka,M1=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},P1=function(i,e){return i.has(e)},mg=function(i,e,t,n,o,s){var a=1&t,l=i.length,u=e.length;if(l!=u&&!(a&&u>l))return!1;var f=s.get(i),p=s.get(e);if(f&&p)return f==e&&p==i;var b=-1,v=!0,E=2&t?new I1:void 0;for(s.set(i,e),s.set(e,i);++b<l;){var D=i[b],S=e[b];if(n)var I=a?n(S,D,b,e,i,s):n(D,S,b,i,e,s);if(I!==void 0){if(I)continue;v=!1;break}if(E){if(!M1(e,function(N,F){if(!P1(E,F)&&(D===N||o(D,N,t,n,s)))return E.push(F)})){v=!1;break}}else if(D!==S&&!o(D,S,t,n,s)){v=!1;break}}return s.delete(i),s.delete(e),v},N1=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},B1=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var kg=ee?ee.prototype:void 0,Fl=kg?kg.valueOf:void 0;const O1=function(i,e,t,n,o,s,a){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!s(new sa(i),new sa(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Ut(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var l=N1;case"[object Set]":var u=1&n;if(l||(l=B1),i.size!=e.size&&!u)return!1;var f=a.get(i);if(f)return f==e;n|=2,a.set(i,e);var p=mg(l(i),l(e),n,o,s,a);return a.delete(i),p;case"[object Symbol]":if(Fl)return Fl.call(i)==Fl.call(e)}return!1};var L1=Object.prototype.hasOwnProperty;const R1=function(i,e,t,n,o,s){var a=1&t,l=ll(i),u=l.length;if(u!=ll(e).length&&!a)return!1;for(var f=u;f--;){var p=l[f];if(!(a?p in e:L1.call(e,p)))return!1}var b=s.get(i),v=s.get(e);if(b&&v)return b==e&&v==i;var E=!0;s.set(i,e),s.set(e,i);for(var D=a;++f<u;){var S=i[p=l[f]],I=e[p];if(n)var N=a?n(I,S,p,e,i,s):n(S,I,p,i,e,s);if(!(N===void 0?S===I||o(S,I,t,n,s):N)){E=!1;break}D||(D=p=="constructor")}if(E&&!D){var F=i.constructor,te=e.constructor;F==te||!("constructor"in i)||!("constructor"in e)||typeof F=="function"&&F instanceof F&&typeof te=="function"&&te instanceof te||(E=!1)}return s.delete(i),s.delete(e),E};var bg="[object Arguments]",wg="[object Array]",ba="[object Object]",_g=Object.prototype.hasOwnProperty;const z1=function(i,e,t,n,o,s){var a=Yt(i),l=Yt(e),u=a?wg:es(i),f=l?wg:es(e),p=(u=u==bg?ba:u)==ba,b=(f=f==bg?ba:f)==ba,v=u==f;if(v&&Jr(i)){if(!Jr(e))return!1;a=!0,p=!1}if(v&&!p)return s||(s=new Zr),a||rl(i)?mg(i,e,t,n,o,s):O1(i,e,u,t,n,o,s);if(!(1&t)){var E=p&&_g.call(i,"__wrapped__"),D=b&&_g.call(e,"__wrapped__");if(E||D){var S=E?i.value():i,I=D?e.value():e;return s||(s=new Zr),o(S,I,t,n,s)}}return!!v&&(s||(s=new Zr),R1(i,e,t,n,o,s))},Ag=function i(e,t,n,o,s){return e===t||(e==null||t==null||!Le(e)&&!Le(t)?e!=e&&t!=t:z1(e,t,n,o,i,s))},j1=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?Ag(i,e,void 0,t):!!n};class vg extends qn{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,o=new Set;for(const f of e)if(f.type==="childList"){const p=t.mapDomToView(f.target);if(p&&(p.is("uiElement")||p.is("rawElement")))continue;p&&!this._isBogusBrMutation(f)&&o.add(p)}for(const f of e){const p=t.mapDomToView(f.target);if((!p||!p.is("uiElement")&&!p.is("rawElement"))&&f.type==="characterData"){const b=t.findCorrespondingViewText(f.target);b&&!o.has(b.parent)?n.set(b,{type:"text",oldText:b.data,newText:Rl(f.target),node:b}):!b&&an(f.target)&&o.add(t.mapDomToView(f.target.parentNode))}}const s=[];for(const f of n.values())this.renderer.markToSync("text",f.node),s.push(f);for(const f of o){const p=t.mapViewToDom(f),b=Array.from(f.getChildren()),v=Array.from(t.domChildrenToView(p,{withChildren:!1}));j1(b,v,u)||(this.renderer.markToSync("children",f),s.push({type:"children",oldChildren:b,newChildren:v,node:f}))}const a=e[0].target.ownerDocument.getSelection();let l=null;if(a&&a.anchorNode){const f=t.domPositionToView(a.anchorNode,a.anchorOffset),p=t.domPositionToView(a.focusNode,a.focusOffset);f&&p&&(l=new Tn(f),l.setFocus(p))}function u(f,p){if(!Array.isArray(f))return f===p||!(!f.is("$text")||!p.is("$text"))&&f.data===p.data}s.length&&(this.document.fire("mutations",s,l),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Vl{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,jl(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Bo extends qn{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Vl(this.view,t,n))}}class F1 extends Bo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return $n(this)}})}}const Ul=function(){return J.Date.now()};var V1=/\s/;const U1=function(i){for(var e=i.length;e--&&V1.test(i.charAt(e)););return e};var H1=/^\s+/;const $1=function(i){return i&&i.slice(0,U1(i)+1).replace(H1,"")};var q1=/^[-+]0x[0-9a-f]+$/i,W1=/^0b[01]+$/i,G1=/^0o[0-7]+$/i,K1=parseInt;const Cg=function(i){if(typeof i=="number")return i;if(aa(i))return NaN;if(xe(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=xe(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=$1(i);var t=W1.test(i);return t||G1.test(i)?K1(i.slice(2),t?2:8):q1.test(i)?NaN:+i};var Y1=Math.max,Q1=Math.min;const wa=function(i,e,t){var n,o,s,a,l,u,f=0,p=!1,b=!1,v=!0;if(typeof i!="function")throw new TypeError("Expected a function");function E(te){var be=n,Me=o;return n=o=void 0,f=te,a=i.apply(Me,be)}function D(te){return f=te,l=setTimeout(I,e),p?E(te):a}function S(te){var be=te-u;return u===void 0||be>=e||be<0||b&&te-f>=s}function I(){var te=Ul();if(S(te))return N(te);l=setTimeout(I,function(be){var Me=e-(be-u);return b?Q1(Me,s-(be-f)):Me}(te))}function N(te){return l=void 0,v&&n?E(te):(n=o=void 0,a)}function F(){var te=Ul(),be=S(te);if(n=arguments,o=this,u=te,be){if(l===void 0)return D(u);if(b)return clearTimeout(l),l=setTimeout(I,e),E(u)}return l===void 0&&(l=setTimeout(I,e)),a}return e=Cg(e)||0,xe(t)&&(p=!!t.leading,s=(b="maxWait"in t)?Y1(Cg(t.maxWait)||0,e):s,v="trailing"in t?!!t.trailing:v),F.cancel=function(){l!==void 0&&clearTimeout(l),f=0,n=u=o=l=void 0},F.flush=function(){return l===void 0?a:N(Ul())},F};class Z1 extends qn{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=wa(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Tn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ze.arrowleft&&e!=ze.arrowup||n.setTo(n.getFirstPosition()),e!=ze.arrowright&&e!=ze.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class J1 extends qn{constructor(e){super(e),this.mutationObserver=e.getObserver(vg),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=wa(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=wa(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(o,s)=>{this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class X1 extends Bo{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const s=t.selection.editableElement;s!==null&&s!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class ex extends Bo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class tx extends Bo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class nx{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const yg=function(i){return typeof i=="string"||!Yt(i)&&Le(i)&&Ce(i)=="[object String]"};function xg(i,e,t={},n=[]){const o=t&&t.xmlns,s=o?i.createElementNS(o,e):i.createElement(e);for(const a in t)s.setAttribute(a,t[a]);!yg(n)&&bn(n)||(n=[n]);for(let a of n)yg(a)&&(a=i.createTextNode(a)),s.appendChild(a);return s}class pt{constructor(e,t){pt._observerInstance||pt._createObserver(),this._element=e,this._callback=t,pt._addElementCallback(e,t),pt._observerInstance.observe(e)}destroy(){pt._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){pt._elementCallbacks||(pt._elementCallbacks=new Map);let n=pt._elementCallbacks.get(e);n||(n=new Set,pt._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=pt._getElementCallbacks(e);n&&(n.delete(t),n.size||(pt._elementCallbacks.delete(e),pt._observerInstance.unobserve(e))),pt._elementCallbacks&&!pt._elementCallbacks.size&&(pt._observerInstance=null,pt._elementCallbacks=null)}static _getElementCallbacks(e){return pt._elementCallbacks?pt._elementCallbacks.get(e):null}static _createObserver(){pt._observerInstance=new ut.window.ResizeObserver(e=>{for(const t of e){const n=pt._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function St(i){const e=i.next();return e.done?null:e.value}pt._observerInstance=null,pt._elementCallbacks=null;class Hl{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new A("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}Q(Hl,ss),Q(Hl,Ie);const Wn=Hl;class fo{constructor(){this._listener=Object.create(ss)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+$n(n),n)})}set(e,t,n={}){const o=Ml(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(a,l)=>{t(l,()=>{l.preventDefault(),l.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+$n(e),e)}destroy(){this._listener.stopListening()}}class ox extends qn{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==ze.arrowright||o==ze.arrowleft||o==ze.arrowup||o==ze.arrowdown)){const s=new ns(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var o})}observe(){}}class ix extends qn{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=ze.tab||o.ctrlKey)return;const s=new ns(t,"tab",t.selection.getFirstRange());t.fire(s,o),s.stop.called&&n.stop()})}observe(){}}function _a(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Eg(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const Dg=["top","right","bottom","left","width","height"];class rt{constructor(e){const t=_a(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Tg(e)||t)if(t){const n=rt.getDomRangeRects(e);Aa(this,rt.getBoundingRect(n))}else Aa(this,e.getBoundingClientRect());else if(ma(e)){const{innerWidth:n,innerHeight:o}=e;Aa(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Aa(this,e)}clone(){return new rt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new rt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Sg(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Sg(n);){const o=new rt(n),s=t.getIntersection(o);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of Dg)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(ma(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const s=Eg(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new rt(o));else{let o=e.startContainer;Nt(o)&&(o=o.parentNode);const s=new rt(o.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new rt(t))}}function Aa(i,e){for(const t of Dg)i[t]=e[t]}function Sg(i){return!!Tg(i)&&i===i.ownerDocument.body}function Tg(i){return ui(i)}function rx(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),s=new rt(i).excludeScrollbarsAndBorders();if(![o,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:l}=i;Mg(o,s)?l-=s.top-e.top+t:Ig(n,s)&&(l+=e.bottom-s.bottom+t),Pg(e,s)?a-=s.left-e.left+t:Ng(e,s)&&(a+=e.right-s.right+t),i.scrollTo(a,l)}}function sx(i,e){const t=$l(i);let n,o;for(;i!=t.document.body;)o=e(),n=new rt(i).excludeScrollbarsAndBorders(),n.contains(o)||(Mg(o,n)?i.scrollTop-=n.top-o.top:Ig(o,n)&&(i.scrollTop+=o.bottom-n.bottom),Pg(o,n)?i.scrollLeft-=n.left-o.left:Ng(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function Ig(i,e){return i.bottom>e.bottom}function Mg(i,e){return i.top<e.top}function Pg(i,e){return i.left<e.left}function Ng(i,e){return i.right>e.right}function $l(i){return _a(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function ax(i){if(_a(i)){let e=i.commonAncestorContainer;return Nt(e)&&(e=e.parentNode),e}return i.parentNode}function Bg(i,e){const t=$l(i),n=new rt(i);if(t===e)return n;{let o=t;for(;o!=e;){const s=o.frameElement,a=new rt(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),o=o.parent}}return n}class Og{constructor(e){this.document=new is(e),this.domConverter=new pa(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new sg(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Wf(this.document),this.addObserver(vg),this.addObserver(J1),this.addObserver(X1),this.addObserver(F1),this.addObserver(Z1),this.addObserver(ex),this.addObserver(ox),this.addObserver(ix),Ze.isAndroid&&this.addObserver(tx),this.document.on("arrowKey",_1,{priority:"low"}),p1(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:a,value:l}of Array.from(e.attributes))o[a]=l,a==="class"?this._writer.addClass(l.split(" "),n):this._writer.setAttribute(a,l,n);this._initialDomRootAttributes.set(e,o);const s=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(a,l)=>this._renderer.markToSync("children",l)),n.on("change:attributes",(a,l)=>this._renderer.markToSync("attributes",l)),n.on("change:text",(a,l)=>this._renderer.markToSync("text",l)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const o=$l(t);let s=o,a=null;for(;s;){let l;l=ax(s==o?t:a),sx(l,()=>Bg(t,s));const u=Bg(t,s);if(rx(s,u,n),s.parent!=s){if(a=s.frameElement,s=s.parent,!a)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new A("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){A.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return ue._createAt(e,t)}createPositionAfter(e){return ue._createAfter(e)}createPositionBefore(e){return ue._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Tn(e,t,n)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}Q(Og,Ie);class ki{constructor(e){this.parent=null,this._attrs=Un(e)}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new A("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new A("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let s=0;for(;n[s]==o[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=Ht(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}is(e){return e==="node"||e==="model:node"}_clone(){return new ki(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=Un(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class st extends ki{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return e==="$text"||e==="model:$text"||e==="text"||e==="model:text"||e==="node"||e==="model:node"}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new st(this.data,this.getAttributes())}static fromJSON(e){return new st(e.data,e.attributes)}}class Gn{constructor(e,t,n){if(this.textNode=e,t<0||t>e.offsetSize)throw new A("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new A("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return e==="$textProxy"||e==="model:$textProxy"||e==="textProxy"||e==="model:textProxy"}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class or{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new A("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new A("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof ki))throw new A("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Je extends ki{constructor(e,t,n){super(t),this.name=e,this._children=new or,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="model:element"):e==="element"||e==="model:element"||e==="node"||e==="model:node"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={includeSelf:!1}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):null;return new Je(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new st(o)]:(bn(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new st(s):s instanceof Gn?new st(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t=null;if(e.children){t=[];for(const n of e.children)n.name?t.push(Je.fromJSON(n)):t.push(st.fromJSON(n))}return new Je(e.name,e.attributes,t)}}class go{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new A("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new A("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=ne._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,s;do o=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const o=as(t,n),s=o||Lg(t,n,o);if(s instanceof Je)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,bi("elementStart",s,e,t,1);if(s instanceof st){let a;if(this.singleCharacters)a=1;else{let f=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<f&&(f=this.boundaries.end.offset),a=f-t.offset}const l=t.offset-s.startOffset,u=new Gn(s,l,a);return t.offset+=a,this.position=t,bi("text",u,e,t,a)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():bi("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const o=t.parent,s=as(t,o),a=s||Rg(t,o,s);if(a instanceof Je)return t.offset--,this.shallow?(this.position=t,bi("elementStart",a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():bi("elementEnd",a,e,t));if(a instanceof st){let l;if(this.singleCharacters)l=1;else{let p=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>p&&(p=this.boundaries.start.offset),l=t.offset-p}const u=t.offset-a.startOffset,f=new Gn(a,u-l,l);return t.offset-=l,this.position=t,bi("text",f,e,t,l)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,bi("elementStart",n,e,t,1)}}function bi(i,e,t,n,o){return{done:!1,value:{type:i,item:e,previousPosition:t,nextPosition:n,length:o}}}class ne{constructor(e,t,n="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new A("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new A("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new A("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new A("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return as(this,this.parent)}get nodeAfter(){const e=this.parent;return Lg(this,e,as(this,e))}get nodeBefore(){const e=this.parent;return Rg(this,e,as(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=Ht(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new go(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=Ht(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=ne._createAt(this),n=ne._createAt(e);break;case"after":t=ne._createAt(e),n=ne._createAt(this);break;default:return!1}let o=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==o.maxOffset)return!1;t.path=t.path.slice(0,-1),o=o.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(e){return e==="position"||e==="model:position"}hasSameParentAs(e){return this.root!==e.root?!1:Ht(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=ne._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?ne._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=ne._createAt(this);if(this.root!=e.root)return n;if(Ht(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(Ht(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=ne._createAt(this);if(this.root!=e.root)return n;if(Ht(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(Ht(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return ne._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=ne._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof ne)return new ne(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new A("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new A("model-position-parent-incorrect",[this,e]);const s=o.getPath();return s.push(t),new this(o.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new A("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new A("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new ne(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new A("model-position-fromjson-no-root",t,{rootName:e.root});return new ne(t.getRoot(e.root),e.path,e.stickiness)}}function as(i,e){const t=e.getChild(e.offsetToIndex(i.offset));return t&&t.is("$text")&&t.startOffset<i.offset?t:null}function Lg(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset))}function Rg(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset)-1)}class G{constructor(e,t=null){this.start=ne._createAt(e),this.end=t?ne._createAt(t):ne._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new go({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return Ht(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=ne._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return e==="range"||e==="model:range"}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new G(this.start,e.start)),this.containsPosition(e.end)&&t.push(new G(e.end,this.end))):t.push(new G(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new G(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,s=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(s)&&(s=e.end),new G(o,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=ne._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const s=o.maxOffset-n.offset;s!==0&&e.push(new G(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],a=s-n.offset;a!==0&&e.push(new G(n,n.getShiftedBy(a))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new go(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new go(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new go(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new G(this.start,this.end)]}getTransformedByOperations(e){const t=[new G(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const s=t[o].getTransformedByOperation(n);t.splice(o,1,...s),o+=s.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let s=n+1;s<t.length;s++){const a=t[s];(o.containsRange(a)||a.containsRange(o)||o.isEqual(a))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new G(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new G(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=ne._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new G(t,n)):new G(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new G(this.start,e),new G(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new G(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const b=this.start._getTransformedByMove(e,t,n);return[new G(b)]}const s=G._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const b=this.start._getTransformedByMove(e,t,n),v=this.end._getTransformedByMove(e,t,n);return[new G(b,v)]}let l;const u=this.getDifference(s);let f=null;const p=this.getIntersection(s);if(u.length==1?f=new G(u[0].start._getTransformedByDeletion(e,n),u[0].end._getTransformedByDeletion(e,n)):u.length==2&&(f=new G(this.start,this.end._getTransformedByDeletion(e,n))),l=f?f._getTransformedByInsertion(a,n,p!==null||o):[],p){const b=new G(p.start._getCombined(s.start,a),p.end._getCombined(s.start,a));l.length==2?l.splice(1,0,b):l.push(b)}return l}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new G(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(ne._createAt(e,0),ne._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(ne._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new A("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,a)=>s.start.isAfter(a.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(o.start);s++)o.start=ne._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(o.end);s++)o.end=ne._createAt(e[s].end);return o}static fromJSON(e,t){return new this(ne.fromJSON(e.start,t),ne.fromJSON(e.end,t))}}class ql{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new A("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=ne._createAt(o,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new G(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Be(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const s of o.getElementsWithSameId())n.add(s);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let s=0;s<t;s++)o+=this.getModelLength(e.getChild(s));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,s=0,a=0;if(e.is("$text"))return new ue(e,t);for(;s<t;)n=e.getChild(a),o=this.getModelLength(n),s+=o,a++;return s==t?this._moveViewPositionToTextNode(new ue(e,a)):this.findPositionIn(n,t-(s-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof it?new ue(t,t.data.length):n instanceof it?new ue(n,0):e}}Q(ql,L);class cx{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=va(t),e instanceof Gn&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=va(t),e instanceof Gn&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=va(t),e instanceof Gn&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=va(t),e instanceof Gn&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[s,a]of o){const l=s.split(":")[0];a&&e==l&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new A("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,s=Symbol("$textProxy:"+e.data);let a,l;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),l=a.get(n),l||(l=new Map,a.set(n,l)),l.set(o,s),s}}function va(i){const e=i.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?i:e.length>1?e[0]+":"+e[1]:e[0]}class Wl{constructor(e){this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const a of e.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,o);const s=this._reduceChanges(e.getChanges());for(const a of s)a.type==="insert"?this._convertInsert(G._createFromPositionAndShift(a.position,a.length),o):a.type==="reinsert"?this._convertReinsert(G._createFromPositionAndShift(a.position,a.length),o):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,o):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,o);for(const a of o.mapper.flushUnboundMarkerNames()){const l=t.get(a).getRange();this._convertMarkerRemove(a,l,o),this._convertMarkerAdd(a,l,o)}for(const a of e.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const s=this._createConversionApi(n,void 0,o);this._convertInsert(e,s);for(const[a,l]of t)this._convertMarkerAdd(a,l,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,o),this.fire("selection",{selection:e},s),e.isCollapsed){for(const a of o){const l=a.getRange();if(!lx(e.getFirstPosition(),a,s.mapper))continue;const u={item:e,markerName:a.name,markerRange:l};s.consumable.test(e,"addMarker:"+a.name)&&this.fire("addMarker:"+a.name,u,s)}for(const a of e.getAttributeKeys()){const l={item:e,range:e.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:e.getAttribute(a)};s.consumable.test(e,"attribute:"+l.attributeKey)&&this.fire("attribute:"+l.attributeKey+":$text",l,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(zg))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire("remove:"+n,{position:e,length:t},o)}_convertAttribute(e,t,n,o,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const a of e){const l={item:a.item,range:G._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,l,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(zg))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o="addMarker:"+e;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const s of t.getItems()){if(!n.consumable.test(s,o))continue;const a={item:s,range:G._createOn(s),markerName:e,markerRange:t};this.fire(o,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire("removeMarker:"+e,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const s of o.getAttributeKeys())e.add(o,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(u,f){const p=f.item.name||"$text";return`${u}:${p}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),l=a.get(s);if(l){if(l.has(o))return;l.add(o)}else a.set(s,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:G._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new cx,writer:e,options:n,convertItem:s=>this._convertInsert(G._createOn(s),o),convertChildren:s=>this._convertInsert(G._createIn(s),o,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,o),canReuseView:s=>!t.has(o.mapper.toModelElement(s))};return this._firedEventsMap.set(o,new Map),o}}function lx(i,e,t){const n=e.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function zg(i){return{item:i.item,range:G._createFromPositionAndShift(i.previousPosition,i.length)}}Q(Wl,L);class po{constructor(e,t,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,n)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new G(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new G(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new G(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,n){if(e===null)this._setRanges([]);else if(e instanceof po)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof G)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof ne)this._setRanges([new G(e)]);else if(e instanceof ki){const o=!!n&&!!n.backward;let s;if(t=="in")s=G._createIn(e);else if(t=="on")s=G._createOn(e);else{if(t===void 0)throw new A("model-selection-setto-required-second-parameter",[this,e]);s=new G(ne._createAt(e,t))}this._setRanges([s],o)}else{if(!bn(e))throw new A("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const n=(e=Array.from(e)).some(o=>{if(!(o instanceof G))throw new A("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(o))});if(e.length!==this._ranges.length||n){this._removeAllRanges();for(const o of e)this._pushRange(o);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(this.anchor===null)throw new A("model-selection-setfocus-no-ranges",[this,e]);const n=ne._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new G(n,o)),this._lastRangeBackward=!0):(this._pushRange(new G(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(e){return e==="selection"||e==="model:selection"}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=Fg(t.start,e);n&&Gl(n,t)&&(yield n);for(const s of t.getWalker()){const a=s.item;s.type=="elementEnd"&&dx(a,e,t)&&(yield a)}const o=Fg(t.end,e);o&&!t.end.isTouching(ne._createAt(o,0))&&Gl(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=ne._createAt(e,0),n=ne._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new G(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new A("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function jg(i,e){return!e.has(i)&&(e.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function dx(i,e,t){return jg(i,e)&&Gl(i,t)}function Fg(i,e){const t=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const s=n.find(a=>!o&&(o=t.isLimit(a),!o&&jg(a,e)));return n.forEach(a=>e.add(a)),s}function Gl(i,e){const t=function(n){const o=n.root.document.model.schema;let s=n.parent;for(;s;){if(o.isBlock(s))return s;s=s.parent}}(i);return t?!e.containsRange(G._createOn(t),!0):!0}Q(po,L);class Kn extends G{constructor(e,t){super(e,t),ux.call(this)}detach(){this.stopListening()}is(e){return e==="liveRange"||e==="model:liveRange"||e=="range"||e==="model:range"}toRange(){return new G(this.start,this.end)}static fromRange(e){return new Kn(e.start,e.end)}}function ux(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&hx.call(this,t)},{priority:"low"})}function hx(i){const e=this.getTransformedByOperation(i),t=G._createFromRanges(e),n=!t.isEqual(this),o=function(a,l){switch(l.type){case"insert":return a.containsPosition(l.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(l.sourcePosition)||a.start.isEqual(l.sourcePosition)||a.containsPosition(l.targetPosition);case"split":return a.containsPosition(l.splitPosition)||a.containsPosition(l.insertionPosition)}return!1}(this,i);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=i.type=="remove"?i.sourcePosition:i.deletionPosition);const a=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",a,{deletionPosition:s})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:s})}Q(Kn,L);const cs="selection:";class In{constructor(e){this._selection=new fx(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return e==="selection"||e=="model:selection"||e=="documentSelection"||e=="model:documentSelection"}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return cs+e}static _isStoreAttributeKey(e){return e.startsWith(cs)}}Q(In,L);class fx extends po{constructor(e){super(),this.markers=new Sn({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new A("document-selection-wrong-position",this,{range:t})}),this.listenTo(this._model.markers,"update",(t,n,o,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,s){const a=o.document.differ;for(const l of a.getChanges()){if(l.type!="insert")continue;const u=l.position.parent;l.length===u.maxOffset&&o.enqueueChange(s,f=>{const p=Array.from(u.getAttributeKeys()).filter(b=>b.startsWith(cs));for(const b of p)f.removeAttribute(b,u)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,n){super.setTo(e,t,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=y();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new A("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=Kn.fromRange(e);return t.on("change:range",(n,o,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const a=this._ranges.indexOf(t);this._ranges.splice(a,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const s=o.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const a=o.getRange();for(const l of this.getRanges())a.containsRange(l,!l.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const s=Array.from(this.markers),a=this.markers.has(e);if(t){let l=!1;for(const u of this.getRanges())if(t.containsRange(u,!u.isCollapsed)){l=!0;break}l&&!a?(this.markers.add(e),o=!0):!l&&a&&(this.markers.remove(e),o=!0)}else a&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=Un(this._getSurroundingAttributes()),n=Un(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,a]of this._attributePriority)a=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const o=[];for(const[s,a]of this.getAttributes())n.has(s)&&n.get(s)===a||o.push(s);for(const[s]of n)this.hasAttribute(s)||o.push(s);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(cs)&&(yield[t.substr(cs.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Ca(o)),n||(n=Ca(s)),!this.isGravityOverridden&&!n){let a=o;for(;a&&!t.isInline(a)&&!n;)a=a.previousSibling,n=Ca(a)}if(!n){let a=s;for(;a&&!t.isInline(a)&&!n;)a=a.nextSibling,n=Ca(a)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const s of o){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Ca(i){return i instanceof Gn||i instanceof st?i.getAttributes():null}class Vg{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const Mn=function(i){return pl(i,5)};class gx extends Vg{elementToElement(e){return this.add(function(t){return(t=Mn(t)).model=$g(t.model),t.view=ls(t.view,"container"),t.model.attributes.length&&(t.model.children=!0),n=>{n.on("insert:"+t.model.name,function(o,s=mx){return(a,l,u)=>{if(!s(l.item,u.consumable,{preflight:!0}))return;const f=o(l.item,u,l);if(!f)return;s(l.item,u.consumable);const p=u.mapper.toViewPosition(l.range.start);u.mapper.bindElements(l.item,f),u.writer.insert(p,f),u.convertAttributes(l.item),Yg(f,l.item.getChildren(),u,{reconversion:l.reconversion})}}(t.view,Kg(t.model)),{priority:t.converterPriority||"normal"}),(t.model.children||t.model.attributes.length)&&n.on("reduceChanges",Gg(t.model),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){return(t=Mn(t)).model=$g(t.model),t.view=ls(t.view,"container"),t.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(t.model.name,"$text"))throw new A("conversion-element-to-structure-disallowed-text",n,{elementName:t.model.name});var o,s;n.on("insert:"+t.model.name,(o=t.view,s=Kg(t.model),(a,l,u)=>{if(!s(l.item,u.consumable,{preflight:!0}))return;const f=new Map;u.writer._registerSlotFactory(function(v,E,D){return(S,I="children")=>{const N=S.createContainerElement("$slot");let F=null;if(I==="children")F=Array.from(v.getChildren());else{if(typeof I!="function")throw new A("conversion-slot-mode-unknown",D.dispatcher,{modeOrFilter:I});F=Array.from(v.getChildren()).filter(te=>I(te))}return E.set(N,F),N}}(l.item,f,u));const p=o(l.item,u,l);if(u.writer._clearSlotFactory(),!p)return;(function(v,E,D){const S=Array.from(E.values()).flat(),I=new Set(S);if(I.size!=S.length)throw new A("conversion-slot-filter-overlap",D.dispatcher,{element:v});if(I.size!=v.childCount)throw new A("conversion-slot-filter-incomplete",D.dispatcher,{element:v})})(l.item,f,u),s(l.item,u.consumable);const b=u.mapper.toViewPosition(l.range.start);u.mapper.bindElements(l.item,p),u.writer.insert(b,p),u.convertAttributes(l.item),function(v,E,D,S){D.mapper.on("modelToViewPosition",F,{priority:"highest"});let I=null,N=null;for([I,N]of E)Yg(v,N,D,S),D.writer.move(D.writer.createRangeIn(I),D.writer.createPositionBefore(I)),D.writer.remove(I);function F(te,be){const Me=be.modelPosition.nodeAfter,at=N.indexOf(Me);at<0||(be.viewPosition=be.mapper.findPositionIn(I,at))}D.mapper.off("modelToViewPosition",F)}(p,f,u,{reconversion:l.reconversion})}),{priority:t.converterPriority||"normal"}),n.on("reduceChanges",Gg(t.model),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=Mn(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=ls(t.view[s],"attribute");else t.view=ls(t.view,"attribute");const o=qg(t);return s=>{s.on(n,function(a){return(l,u,f)=>{if(!f.consumable.test(u.item,l.name))return;const p=a(u.attributeOldValue,f,u),b=a(u.attributeNewValue,f,u);if(!p&&!b)return;f.consumable.consume(u.item,l.name);const v=f.writer,E=v.document.selection;if(u.item instanceof po||u.item instanceof In)v.wrap(E.getFirstRange(),b);else{let D=f.mapper.toViewRange(u.range);u.attributeOldValue!==null&&p&&(D=v.unwrap(D,p)),u.attributeNewValue!==null&&b&&v.wrap(D,b)}}}(o),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Mn(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=Wg(t.view[s]);else t.view=Wg(t.view);const o=qg(t);return s=>{var a;s.on(n,(a=o,(l,u,f)=>{if(!f.consumable.test(u.item,l.name))return;const p=a(u.attributeOldValue,f,u),b=a(u.attributeNewValue,f,u);if(!p&&!b)return;f.consumable.consume(u.item,l.name);const v=f.mapper.toViewElement(u.item),E=f.writer;if(!v)throw new A("conversion-attribute-to-attribute-on-text",f.dispatcher,u);if(u.attributeOldValue!==null&&p)if(p.key=="class"){const D=Dt(p.value);for(const S of D)E.removeClass(S,v)}else if(p.key=="style"){const D=Object.keys(p.value);for(const S of D)E.removeStyle(S,v)}else E.removeAttribute(p.key,v);if(u.attributeNewValue!==null&&b)if(b.key=="class"){const D=Dt(b.value);for(const S of D)E.addClass(S,v)}else if(b.key=="style"){const D=Object.keys(b.value);for(const S of D)E.setStyle(S,b.value[S],v)}else E.setAttribute(b.key,b.value,v)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){return(t=Mn(t)).view=ls(t.view,"ui"),n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(s,a,l)=>{a.isOpening=!0;const u=o(a,l);a.isOpening=!1;const f=o(a,l);if(!u||!f)return;const p=a.markerRange;if(p.isCollapsed&&!l.consumable.consume(p,s.name))return;for(const E of p)if(!l.consumable.consume(E.item,s.name))return;const b=l.mapper,v=l.writer;v.insert(b.toViewPosition(p.start),u),l.mapper.bindElementToMarker(u,a.markerName),p.isCollapsed||(v.insert(b.toViewPosition(p.end),f),l.mapper.bindElementToMarker(f,a.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,(t.view,(s,a,l)=>{const u=l.mapper.markerNameToElements(a.markerName);if(u){for(const f of u)l.mapper.unbindElementFromMarkerName(f,a.markerName),l.writer.clear(l.writer.createRangeOn(f),f);l.writer.clearClonedElementsGroup(a.markerName),s.stop()}}),{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(s,a,l)=>{if(!a.item||!(a.item instanceof po||a.item instanceof In||a.item.is("$textProxy")))return;const u=Kl(o,a,l);if(!u||!l.consumable.consume(a.item,s.name))return;const f=l.writer,p=Ug(f,u),b=f.document.selection;if(a.item instanceof po||a.item instanceof In)f.wrap(b.getFirstRange(),p,b);else{const v=l.mapper.toViewRange(a.range),E=f.wrap(v,p);for(const D of E.getItems())if(D.is("attributeElement")&&D.isSimilar(p)){l.mapper.bindElementToMarker(D,a.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on("addMarker:"+t.model,function(s){return(a,l,u)=>{if(!l.item||!(l.item instanceof Je))return;const f=Kl(s,l,u);if(!f||!u.consumable.test(l.item,a.name))return;const p=u.mapper.toViewElement(l.item);if(p&&p.getCustomProperty("addHighlight")){u.consumable.consume(l.item,a.name);for(const b of G._createIn(l.item))u.consumable.consume(b.item,a.name);p.getCustomProperty("addHighlight")(p,f,u.writer),u.mapper.bindElementToMarker(p,l.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,function(s){return(a,l,u)=>{if(l.markerRange.isCollapsed)return;const f=Kl(s,l,u);if(!f)return;const p=Ug(u.writer,f),b=u.mapper.markerNameToElements(l.markerName);if(b){for(const v of b)u.mapper.unbindElementFromMarkerName(v,l.markerName),v.is("attributeElement")?u.writer.unwrap(u.writer.createRangeOn(v),p):v.getCustomProperty("removeHighlight")(v,f.id,u.writer);u.writer.clearClonedElementsGroup(l.markerName),a.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=Mn(t)).model;return t.view||(t.view=o=>({group:n,name:o.substr(t.model.length+1)})),o=>{var s;o.on("addMarker:"+n,(s=t.view,(a,l,u)=>{const f=s(l.markerName,u);if(!f)return;const p=l.markerRange;u.consumable.consume(p,a.name)&&(Hg(p,!1,u,l,f),Hg(p,!0,u,l,f),a.stop())}),{priority:t.converterPriority||"normal"}),o.on("removeMarker:"+n,function(a){return(l,u,f)=>{const p=a(u.markerName,f);if(!p)return;const b=f.mapper.markerNameToElements(u.markerName);if(b){for(const E of b)f.mapper.unbindElementFromMarkerName(E,u.markerName),E.is("containerElement")?(v(`data-${p.group}-start-before`,E),v(`data-${p.group}-start-after`,E),v(`data-${p.group}-end-before`,E),v(`data-${p.group}-end-after`,E)):f.writer.clear(f.writer.createRangeOn(E),E);f.writer.clearClonedElementsGroup(u.markerName),l.stop()}function v(E,D){if(D.hasAttribute(E)){const S=new Set(D.getAttribute(E).split(","));S.delete(p.name),S.size==0?f.writer.removeAttribute(E,D):f.writer.setAttribute(E,Array.from(S).join(","),D)}}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}}function Ug(i,e){const t=i.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Hg(i,e,t,n,o){const s=e?i.start:i.end,a=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,l=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(a||l){let u,f;e&&a||!e&&!l?(u=a,f=!0):(u=l,f=!1);const p=t.mapper.toViewElement(u);if(p)return void function(b,v,E,D,S,I){const N=`data-${I.group}-${v?"start":"end"}-${E?"before":"after"}`,F=b.hasAttribute(N)?b.getAttribute(N).split(","):[];F.unshift(I.name),D.writer.setAttribute(N,F.join(","),b),D.mapper.bindElementToMarker(b,S.markerName)}(p,e,f,t,n,o)}(function(u,f,p,b,v){const E=`${v.group}-${f?"start":"end"}`,D=v.name?{name:v.name}:null,S=p.writer.createUIElement(E,D);p.writer.insert(u,S),p.mapper.bindElementToMarker(S,b.markerName)})(t.mapper.toViewPosition(s),e,t,n,o)}function $g(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function ls(i,e){return typeof i=="function"?i:(t,n)=>function(o,s,a){typeof o=="string"&&(o={name:o});let l;const u=s.writer,f=Object.assign({},o.attributes);if(a=="container")l=u.createContainerElement(o.name,f);else if(a=="attribute"){const p={priority:o.priority||er.DEFAULT_PRIORITY};l=u.createAttributeElement(o.name,f,p)}else l=u.createUIElement(o.name,f);if(o.styles){const p=Object.keys(o.styles);for(const b of p)u.setStyle(b,o.styles[b],l)}if(o.classes){const p=o.classes;if(typeof p=="string")u.addClass(p,l);else for(const b of p)u.addClass(b,l)}return l}(i,n,e)}function qg(i){return i.model.values?(e,t)=>{const n=i.view[e];return n?n(e,t):null}:i.view}function Wg(i){return typeof i=="string"?e=>({key:i,value:e}):typeof i=="object"?i.value?()=>i:e=>({key:i.key,value:e}):i}function Kl(i,e,t){const n=typeof i=="function"?i(e,t):i;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Gg(i){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(i);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const a=s.position?s.position.parent:s.range.start.nodeAfter;if(a&&e(a,s)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const l=ne._createBefore(a);o.push({type:"remove",name:a.name,position:l,length:1},{type:"reinsert",name:a.name,position:l,length:1})}}else o.push(s)}n.changes=o}}function Kg(i){return(e,t,n={})=>{const o=["insert"];for(const s of i.attributes)e.hasAttribute(s)&&o.push(`attribute:${s}`);return!!o.every(s=>t.test(e,s))&&(n.preflight||o.forEach(s=>t.consume(e,s)),!0)}}function Yg(i,e,t,n){for(const o of e)px(i.root,o,t,n)||t.convertItem(o)}function px(i,e,t,n){const{writer:o,mapper:s}=t;if(!n.reconversion)return!1;const a=s.toViewElement(e);return!(!a||a.root==i)&&!!t.canReuseView(a)&&(o.move(o.createRangeOn(a),s.toViewPosition(ne._createBefore(e))),!0)}function mx(i,e,{preflight:t}={}){return t?e.test(i,"insert"):e.consume(i,"insert")}function Qg(i){const{schema:e,document:t}=i.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function Zg(i,e,t){const n=t.createContext(i);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function Jg(i,e){const t=e.createElement("paragraph");return e.insert(t,i),e.createPositionAt(t,0)}class kx extends Vg{elementToElement(e){return this.add(Xg(e))}elementToAttribute(e){return this.add(function(t){ep(t=Mn(t));const n=tp(t,!1),o=Yl(t.view),s=o?"element:"+o:"element";return a=>{a.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Mn(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const a=s.view.key;let l;return a=="class"||a=="style"?l={[a=="class"?"classes":"styles"]:s.view.value}:l={attributes:{[a]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(l.name=s.view.name),s.view=l,a}(t)),ep(t,n);const o=tp(t,!0);return s=>{s.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){return function(n){const o=n.model;n.model=(s,a)=>{const l=typeof o=="string"?o:o(s,a);return a.writer.createElement("$marker",{"data-name":l})}}(t=Mn(t)),Xg(t)}(e))}dataToMarker(e){return this.add(function(t){(t=Mn(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n=Ql(np(t,"start")),o=Ql(np(t,"end"));return s=>{s.on("element:"+t.view+"-start",n,{priority:t.converterPriority||"normal"}),s.on("element:"+t.view+"-end",o,{priority:t.converterPriority||"normal"});const a=C.get("low"),l=C.get("highest"),u=C.get(t.converterPriority)/l;s.on("element",function(f){return(p,b,v)=>{const E=`data-${f.view}`;function D(S,I){for(const N of I){const F=f.model(N,v),te=v.writer.createElement("$marker",{"data-name":F});v.writer.insert(te,S),b.modelCursor.isEqual(S)?b.modelCursor=b.modelCursor.getShiftedBy(1):b.modelCursor=b.modelCursor._getTransformedByInsertion(S,1),b.modelRange=b.modelRange._getTransformedByInsertion(S,1)[0]}}(v.consumable.test(b.viewItem,{attributes:E+"-end-after"})||v.consumable.test(b.viewItem,{attributes:E+"-start-after"})||v.consumable.test(b.viewItem,{attributes:E+"-end-before"})||v.consumable.test(b.viewItem,{attributes:E+"-start-before"}))&&(b.modelRange||Object.assign(b,v.convertChildren(b.viewItem,b.modelCursor)),v.consumable.consume(b.viewItem,{attributes:E+"-end-after"})&&D(b.modelRange.end,b.viewItem.getAttribute(E+"-end-after").split(",")),v.consumable.consume(b.viewItem,{attributes:E+"-start-after"})&&D(b.modelRange.end,b.viewItem.getAttribute(E+"-start-after").split(",")),v.consumable.consume(b.viewItem,{attributes:E+"-end-before"})&&D(b.modelRange.start,b.viewItem.getAttribute(E+"-end-before").split(",")),v.consumable.consume(b.viewItem,{attributes:E+"-start-before"})&&D(b.modelRange.start,b.viewItem.getAttribute(E+"-start-before").split(",")))}}(t),{priority:a+u})}}(e))}}function Xg(i){const e=Ql(i=Mn(i)),t=Yl(i.view),n=t?"element:"+t:"element";return o=>{o.on(n,e,{priority:i.converterPriority||"normal"})}}function Yl(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function Ql(i){const e=new Hn(i.view);return(t,n,o)=>{const s=e.match(n.viewItem);if(!s)return;const a=s.match;if(a.name=!0,!o.consumable.test(n.viewItem,a))return;const l=function(u,f,p){return u instanceof Function?u(f,p):p.writer.createElement(u)}(i.model,n.viewItem,o);l&&o.safeInsert(l,n.modelCursor)&&(o.consumable.consume(n.viewItem,a),o.convertChildren(n.viewItem,l),o.updateConversionResult(l,n))}}function ep(i,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?t:i.model.value;i.model={key:n,value:o}}function tp(i,e){const t=new Hn(i.view);return(n,o,s)=>{if(!o.modelRange&&e)return;const a=t.match(o.viewItem);if(!a||(function(p,b){const v=typeof p=="function"?p(b):p;return typeof v=="object"&&!Yl(v)?!1:!v.classes&&!v.attributes&&!v.styles}(i.view,o.viewItem)?a.match.name=!0:delete a.match.name,!s.consumable.test(o.viewItem,a.match)))return;const l=i.model.key,u=typeof i.model.value=="function"?i.model.value(o.viewItem,s):i.model.value;if(u===null)return;o.modelRange||Object.assign(o,s.convertChildren(o.viewItem,o.modelCursor)),function(p,b,v,E){let D=!1;for(const S of Array.from(p.getItems({shallow:v})))E.schema.checkAttribute(S,b.key)&&(D=!0,S.hasAttribute(b.key)||E.writer.setAttribute(b.key,b.value,S));return D}(o.modelRange,{key:l,value:u},e,s)&&(s.consumable.test(o.viewItem,{name:!0})&&(a.match.name=!0),s.consumable.consume(o.viewItem,a.match))}}function np(i,e){const t={};return t.view=i.view+"-"+e,t.model=(n,o)=>{const s=n.getAttribute("name"),a=i.model(s,o);return o.writer.createElement("$marker",{"data-name":a})},t}class op{constructor(e,t){this.model=e,this.view=new Og(t),this.mapper=new ql,this.downcastDispatcher=new Wl({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,s,a),this.downcastDispatcher.convertSelection(o,s,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,l){return(u,f)=>{const p=f.newSelection,b=[];for(const E of p.getRanges())b.push(l.toModelRange(E));const v=a.createSelection(b,{backward:p.isBackward});v.isEqual(a.document.selection)||a.change(E=>{E.setSelection(v)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,l,u)=>{if(!u.consumable.consume(l.item,a.name))return;const f=u.writer,p=u.mapper.toViewPosition(l.range.start),b=f.createText(l.item.data);f.insert(p,b)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,l,u)=>{u.convertAttributes(l.item),l.reconversion||!l.item.is("element")||l.item.isEmpty||u.convertChildren(l.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,l,u)=>{const f=u.mapper.toViewPosition(l.position),p=l.position.getShiftedBy(l.length),b=u.mapper.toViewPosition(p,{isPhantom:!0}),v=u.writer.createRange(f,b),E=u.writer.remove(v.getTrimmed());for(const D of u.writer.createRangeIn(E).getItems())u.mapper.unbindViewElement(D,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=u.writer,p=f.document.selection;for(const b of p.getRanges())b.isCollapsed&&b.end.parent.isAttached()&&u.writer.mergeAttributes(b.start);f.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=l.selection;if(f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=[];for(const b of f.getRanges()){const v=u.mapper.toViewRange(b);p.push(v)}u.writer.setSelection(p,{backward:f.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,l,u)=>{const f=l.selection;if(!f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=u.writer,b=f.getFirstPosition(),v=u.mapper.toViewPosition(b),E=p.breakAttributes(v);p.setSelection(E)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const l=new s1(this.view.document,a.name);return l.rootName=a.rootName,this.mapper.bindElements(a,l),l})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new A("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}Q(op,Ie);class bx{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new A("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class ds{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new wx(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&t.attributes.push(a);const o=e.getClassNames();for(const a of o)t.classes.push(a);const s=e.getStyleNames();for(const a of s)t.styles.push(a);return t}static createFrom(e,t){if(t||(t=new ds(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,ds.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=ds.createFrom(n,t);return t}}class wx{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const n=Yt(t)?t:[t],o=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new A("viewconsumable-invalid-attribute",this);if(o.set(s,!0),e==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!0)}}_test(e,t){const n=Yt(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const a=o.get(s);if(a===void 0)return null;if(!a)return!1}else{const a=s=="class"?"classes":"styles",l=this._test(a,[...this._consumables[a].keys()]);if(l!==!0)return l}return!0}_consume(e,t){const n=Yt(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(o.set(s,!1),e=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))o.set(a,!1)}else{const a=s=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(e,t){const n=Yt(t)?t:[t],o=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")o.get(s)===!1&&o.set(s,!0);else{const a=s=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class ip{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new wi(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new wi(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new A("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new A("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof ne){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof Je))throw new A("schema-check-merge-no-element-before",this);if(!(o instanceof Je))throw new A("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const s=e(n,o);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof ne?t=e.parent:t=(e instanceof G?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const s=o.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new st("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const s of o)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new G(e);let n,o;const s=e.getAncestors().reverse().find(a=>this.isLimit(a))||e.root;t!="both"&&t!="backward"||(n=new go({boundaries:G._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new go({boundaries:G._createIn(s),startPosition:e}));for(const a of function*(l,u){let f=!1;for(;!f;){if(f=!0,l){const p=l.next();p.done||(f=!1,yield{walker:l,value:p.value})}if(u){const p=u.next();p.done||(f=!1,yield{walker:u,value:p.value})}}}(n,o)){const l=a.walker==n?"elementEnd":"elementStart",u=a.value;if(u.type==l&&this.isObject(u.item))return G._createOn(u.item);if(this.checkChild(u.nextPosition,"$text"))return new G(u.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[s,a]of Object.entries(t))o.schema.checkAttribute(e,s)&&n.setAttribute(s,a,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))rp(this,n,t);else{const o=G._createIn(n).getPositions();for(const s of o)rp(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[s,a]of e.getAttributes()){const l=this.getAttributeProperties(s);l[t]!==void 0&&(n!==void 0&&n!==l[t]||(o[s]=a))}return o}createContext(e){return new wi(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=_x(t[o],o);for(const o of n)Ax(e,o);for(const o of n)vx(e,o);for(const o of n)Cx(e,o);for(const o of n)yx(e,o),xx(e,o);for(const o of n)Ex(e,o),Dx(e,o),Sx(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const s=this.getDefinition(o);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(G._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(o)||(yield new G(n,o)),n=ne._createAfter(s)),o=ne._createAfter(s);n.isEqual(o)||(yield new G(n,o))}}Q(ip,Ie);class wi{constructor(e){if(e instanceof wi)return e;typeof e=="string"?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(Ix)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new wi([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function _x(i,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const s of n){const a=Object.keys(s).filter(l=>l.startsWith("is"));for(const l of a)o[l]=s[l]}}(i,t),_i(i,t,"allowIn"),_i(i,t,"allowContentOf"),_i(i,t,"allowWhere"),_i(i,t,"allowAttributes"),_i(i,t,"allowAttributesOf"),_i(i,t,"allowChildren"),_i(i,t,"inheritTypesFrom"),function(n,o){for(const s of n){const a=s.inheritAllFrom;a&&(o.allowContentOf.push(a),o.allowWhere.push(a),o.allowAttributesOf.push(a),o.inheritTypesFrom.push(a))}}(i,t),t}function Ax(i,e){const t=i[e];for(const n of t.allowChildren){const o=i[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function vx(i,e){for(const t of i[e].allowContentOf)i[t]&&Tx(i,t).forEach(n=>{n.allowIn.push(e)});delete i[e].allowContentOf}function Cx(i,e){for(const t of i[e].allowWhere){const n=i[t];if(n){const o=n.allowIn;i[e].allowIn.push(...o)}}delete i[e].allowWhere}function yx(i,e){for(const t of i[e].allowAttributesOf){const n=i[t];if(n){const o=n.allowAttributes;i[e].allowAttributes.push(...o)}}delete i[e].allowAttributesOf}function xx(i,e){const t=i[e];for(const n of t.inheritTypesFrom){const o=i[n];if(o){const s=Object.keys(o).filter(a=>a.startsWith("is"));for(const a of s)a in t||(t[a]=o[a])}}delete t.inheritTypesFrom}function Ex(i,e){const t=i[e],n=t.allowIn.filter(o=>i[o]);t.allowIn=Array.from(new Set(n))}function Dx(i,e){const t=i[e];for(const n of t.allowIn)i[n].allowChildren.push(e)}function Sx(i,e){const t=i[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function _i(i,e,t){for(const n of i)typeof n[t]=="string"?e[t].push(n[t]):Array.isArray(n[t])&&e[t].push(...n[t])}function Tx(i,e){const t=i[e];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function Ix(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:e=>i.getAttribute(e)}}function rp(i,e,t){for(const n of e.getAttributeKeys())i.checkAttribute(e,n)||t.removeAttribute(n,e)}class sp{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(a,l){let u;for(const f of new wi(a)){const p={};for(const v of f.getAttributeKeys())p[v]=f.getAttribute(v);const b=l.createElement(f.name,p);u&&l.append(b,u),u=ne._createAt(b,0)}return u}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=ds.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))t.append(a,s);s.markers=function(a,l){const u=new Set,f=new Map,p=G._createIn(a).getItems();for(const b of p)b.name=="$marker"&&u.add(b);for(const b of u){const v=b.getAttribute("data-name"),E=l.createPositionBefore(b);f.has(v)?f.get(v).end=E.clone():f.set(v,new G(E.clone())),l.remove(b)}return f}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof G))throw new A("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:ne._createAt(t,0);const o=new G(n);for(const s of Array.from(e.getChildren())){const a=this._convertItem(s,n);a.modelRange instanceof G&&(o.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?o.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return Zg(t,e,n)?{position:Jg(t,o)}:null;const a=this.conversionApi.writer.split(t,s),l=[];for(const f of a.range.getWalker())if(f.type=="elementEnd")l.push(f.item);else{const p=l.pop(),b=f.item;this._registerSplitPair(p,b)}const u=a.range.end.parent;return this._cursorParents.set(e,u),{position:a.position,cursorParent:u}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}Q(sp,L);class Mx{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class Px{constructor(e){this.domParser=new DOMParser,this.domConverter=new pa(e,{renderingMode:"data"}),this.htmlWriter=new Mx}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class ap{constructor(e,t){this.model=e,this.mapper=new ql,this.downcastDispatcher=new Wl({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,s)=>{if(!s.consumable.consume(o.item,n.name))return;const a=s.writer,l=s.mapper.toViewPosition(o.range.start),u=a.createText(o.item.data);a.insert(l,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,s)=>{s.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||s.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new sp({schema:e.schema}),this.viewDocument=new is(t),this.stylesProcessor=t,this.htmlProcessor=new Px(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Wf(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:s,consumable:a,writer:l})=>{let u=o.modelCursor;if(!a.test(o.viewItem))return;if(!s.checkChild(u,"$text")){if(!Zg(u,"$text",s)||o.viewItem.data.trim().length==0)return;u=Jg(u,l)}a.consume(o.viewItem);const f=l.createText(o.viewItem.data);l.insert(f,u),o.modelRange=l.createRange(u,u.getShiftedBy(f.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,s)=>{if(!o.modelRange&&s.consumable.consume(o.viewItem,{name:!0})){const{modelRange:a,modelCursor:l}=s.convertChildren(o.viewItem,o.modelCursor);o.modelRange=a,o.modelCursor=l}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},Qg)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new A("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const s=G._createIn(e),a=new mi(n);this.mapper.bindElements(e,a);const l=e.is("documentFragment")?e.markers:function(u){const f=[],p=u.root.document;if(!p)return new Map;const b=G._createIn(u);for(const v of p.model.markers){const E=v.getRange(),D=E.isCollapsed,S=E.start.isEqual(b.start)||E.end.isEqual(b.end);if(D&&S)f.push([v.name,E]);else{const I=b.getIntersection(E);I&&f.push([v.name,I])}}return f.sort(([v,E],[D,S])=>{if(E.end.compareWith(S.start)!=="after")return 1;if(E.start.compareWith(S.end)!=="before")return-1;switch(E.start.compareWith(S.start)){case"before":return 1;case"after":return-1;default:switch(E.end.compareWith(S.end)){case"before":return 1;case"after":return-1;default:return D.localeCompare(v)}}}),new Map(f)}(e);return this.downcastDispatcher.convert(s,l,o,t),a}init(e){if(this.model.document.version)throw new A("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new A("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const s=this.model.document.getRoot(o);n.insert(this.parse(t[o],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new A("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const a=this.model.document.getRoot(s);o.remove(o.createRangeIn(a)),o.insert(this.parse(n[s],a),a,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}Q(ap,Ie);class Nx{constructor(e,t){this._helpers=new Map,this._downcast=Dt(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Dt(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new A("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new A("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of Zl(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new A("conversion-group-exists",this);const o=n?new gx(t):new kx(t);this._helpers.set(e,o)}}function*Zl(i){if(i.model.values)for(const e of i.model.values){const t={key:i.model.key,value:e},n=i.view[e],o=i.upcastAlso?i.upcastAlso[e]:void 0;yield*cp(t,n,o)}else yield*cp(i.model,i.view,i.upcastAlso)}function*cp(i,e,t){if(yield{model:i,view:e},t)for(const n of Dt(t))yield{model:i,view:n}}class ir{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},T("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=s}get type(){return T("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class _n{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class mo{constructor(e){this.markers=new Map,this._children=new or,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="model:documentFragment"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Je.fromJSON(n)):t.push(st.fromJSON(n));return new mo(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new st(o)]:(bn(o)||(o=[o]),Array.from(o).map(s=>typeof s=="string"?new st(s):s instanceof Gn?new st(s.data,s.getAttributes()):s))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}function Jl(i,e){const t=(e=dp(e)).reduce((s,a)=>s+a.offsetSize,0),n=i.parent;fs(i);const o=i.index;return n._insertChild(o,e),hs(n,o+e.length),hs(n,o),new G(i,i.getShiftedBy(t))}function lp(i){if(!i.isFlat)throw new A("operation-utils-remove-range-not-flat",this);const e=i.start.parent;fs(i.start),fs(i.end);const t=e._removeChildren(i.start.index,i.end.index-i.start.index);return hs(e,i.start.index),t}function us(i,e){if(!i.isFlat)throw new A("operation-utils-move-range-not-flat",this);const t=lp(i);return Jl(e=e._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),t)}function dp(i){const e=[];i instanceof Array||(i=[i]);for(let t=0;t<i.length;t++)if(typeof i[t]=="string")e.push(new st(i[t]));else if(i[t]instanceof Gn)e.push(new st(i[t].data,i[t].getAttributes()));else if(i[t]instanceof mo||i[t]instanceof or)for(const n of i[t])e.push(n);else i[t]instanceof ki&&e.push(i[t]);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof st&&o instanceof st&&up(n,o)&&(e.splice(t-1,2,new st(o.data+n.data,o.getAttributes())),t--)}return e}function hs(i,e){const t=i.getChild(e-1),n=i.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&up(t,n)){const o=new st(t.data+n.data,t.getAttributes());i._removeChildren(e-1,2),i._insertChild(e-1,o)}}function fs(i){const e=i.textNode,t=i.parent;if(e){const n=i.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const s=new st(e.data.substr(0,n),e.getAttributes()),a=new st(e.data.substr(n),e.getAttributes());t._insertChild(o,[s,a])}}function up(i,e){const t=i.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const hp=function(i,e){return Ag(i,e)};class Ct extends _n{constructor(e,t,n,o,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Ct(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ct(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new A("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!hp(e.getAttribute(this.key),this.oldValue))throw new A("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new A("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){hp(this.oldValue,this.newValue)||function(e,t,n){fs(e.start),fs(e.end);for(const o of e.getItems({shallow:!0})){const s=o.is("$textProxy")?o.textNode:o;n!==null?s._setAttribute(t,n):s._removeAttribute(t),hs(s.parent,s.index)}hs(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Ct(G.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Bx extends _n{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new A("detach-operation-on-document-node",this)}_execute(){lp(G._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Xe extends _n{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new A("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new A("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&Ht(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new A("move-operation-node-into-itself",this)}}_execute(){us(G._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=ne.fromJSON(e.sourcePosition,t),o=ne.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class Tt extends _n{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new or(dp(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new or([...this.nodes].map(n=>n._clone(!0))),t=new Tt(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new ne(e,[0]);return new Xe(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new A("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new or([...e].map(t=>t._clone(!0))),Jl(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(Je.fromJSON(s)):n.push(st.fromJSON(s));const o=new Tt(ne.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class Xt extends _n{constructor(e,t,n,o,s,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=o}get type(){return"marker"}clone(){return new Xt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new Xt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new Xt(e.name,e.oldRange?G.fromJSON(e.oldRange,t):null,e.newRange?G.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class en extends _n{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new en(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new en(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Je))throw new A("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new A("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new en(ne.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class ko extends _n{constructor(e,t,n,o,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new ko(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new ko(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new A("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new A("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new A("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new A("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new ko(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class yt extends _n{constructor(e,t,n,o,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new ne(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new G(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new ne(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new ht(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new A("merge-operation-source-position-invalid",this);if(!t.parent)throw new A("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new A("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;us(G._createIn(e),this.targetPosition),us(G._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=ne.fromJSON(e.sourcePosition,t),o=ne.fromJSON(e.targetPosition,t),s=ne.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,s,e.baseVersion)}}class ht extends _n{constructor(e,t,n,o,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new ne(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new G(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new ne(e,[0]);return new yt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new A("split-operation-position-invalid",this);if(!e.parent)throw new A("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new A("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new A("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)us(G._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Jl(this.insertionPosition,t)}us(new G(ne._createAt(e,this.splitPosition.offset),ne._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new ne(e.root,t,"toPrevious")}static fromJSON(e,t){const n=ne.fromJSON(e.splitPosition,t),o=ne.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?ne.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,s,e.baseVersion)}}class Xl extends Je{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}is(e,t){return t?t===this.name&&(e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"):e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"||e==="node"||e==="model:node"}toJSON(){return this.rootName}}class Ox{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new st(e,t)}createElement(e,t){return new Je(e,t)}createDocumentFragment(){return new mo}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof st&&e.data=="")return;const o=ne._createAt(t,n);if(e.parent){if(pp(e.root,o.root))return void this.move(G._createOn(e),o);if(e.root.document)throw new A("model-writer-insert-forbidden-move",this);this.remove(e)}const s=o.root.document?o.root.document.version:null,a=new Tt(o,e,s);if(e instanceof st&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),e instanceof mo)for(const[l,u]of e.markers){const f=ne._createAt(u.root,0),p={range:new G(u.start._getCombined(f,o),u.end._getCombined(f,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(l)?this.updateMarker(l,p):this.addMarker(l,p)}}insertText(e,t,n,o){t instanceof mo||t instanceof Je||t instanceof ne?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof mo||t instanceof Je||t instanceof ne?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof mo||t instanceof Je?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof mo||t instanceof Je?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof G){const o=n.getMinimalFlatRanges();for(const s of o)fp(this,e,t,s)}else gp(this,e,t,n)}setAttributes(e,t){for(const[n,o]of Un(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof G){const n=t.getMinimalFlatRanges();for(const o of n)fp(this,e,null,o)}else gp(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof G)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof G))throw new A("writer-move-invalid-range",this);if(!e.isFlat)throw new A("writer-move-range-not-flat",this);const o=ne._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!pp(e.root,o.root))throw new A("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,a=new Xe(e.start,e.end.offset-e.start.offset,o,s);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof G?e:G._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),Lx(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Je))throw new A("writer-merge-no-element-before",this);if(!(n instanceof Je))throw new A("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,n){return this.model.createSelection(e,t,n)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(G._createIn(n),ne._createAt(t,"end")),this.remove(n)}_merge(e){const t=ne._createAt(e.nodeBefore,"end"),n=ne._createAt(e.nodeAfter,0),o=e.root.document.graveyard,s=new ne(o,[0]),a=e.root.document.version,l=new yt(n,e.nodeAfter.maxOffset,t,s,a);this.batch.addOperation(l),this.model.applyOperation(l)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Je))throw new A("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new en(ne._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,s=e.parent;if(!s.parent)throw new A("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new A("writer-split-invalid-limit-element",this);do{const a=s.root.document?s.root.document.version:null,l=s.maxOffset-e.offset,u=ht.getInsertionPosition(e),f=new ht(e,l,u,null,a);this.batch.addOperation(f),this.model.applyOperation(f),n||o||(n=s,o=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new G(ne._createAt(n,"end"),ne._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new A("writer-wrap-range-not-flat",this);const n=t instanceof Je?t:new Je(t);if(n.childCount>0)throw new A("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new A("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new G(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,ne._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new A("writer-unwrap-element-no-parent",this);this.move(G._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new A("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new A("writer-addmarker-marker-exists",this);if(!o)throw new A("writer-addmarker-no-range",this);return n?(gs(this,e,null,o,s),this.model.markers.get(e)):this.model.markers._set(e,o,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new A("writer-updatemarker-marker-not-exists",this);if(!t)return T("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const s=typeof t.usingOperation=="boolean",a=typeof t.affectsData=="boolean",l=a?t.affectsData:o.affectsData;if(!s&&!t.range&&!a)throw new A("writer-updatemarker-wrong-options",this);const u=o.getRange(),f=t.range?t.range:u;s&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?gs(this,n,null,f,l):(gs(this,n,u,null,l),this.model.markers._set(n,f,void 0,l)):o.managedUsingOperations?gs(this,n,u,f,l):this.model.markers._set(n,f,void 0,l)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new A("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);gs(this,t,n.getRange(),null,n.affectsData)}setSelection(e,t,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of Un(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=In._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=In._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new A("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let s=!1;if(e==="move")s=t.containsPosition(o.start)||t.start.isEqual(o.start)||t.containsPosition(o.end)||t.end.isEqual(o.end);else{const a=t.nodeBefore,l=t.nodeAfter,u=o.start.parent==a&&o.start.isAtEnd,f=o.end.parent==l&&o.end.offset==0,p=o.end.nodeAfter==l,b=o.start.nodeAfter==l;s=u||f||p||b}s&&this.updateMarker(n.name,{range:o})}}}function fp(i,e,t,n){const o=i.model,s=o.document;let a,l,u,f=n.start;for(const b of n.getWalker({shallow:!0}))u=b.item.getAttribute(e),a&&l!=u&&(l!=t&&p(),f=a),a=b.nextPosition,l=u;function p(){const b=new G(f,a),v=b.root.document?s.version:null,E=new Ct(b,e,l,t,v);i.batch.addOperation(E),o.applyOperation(E)}a instanceof ne&&a!=f&&l!=t&&p()}function gp(i,e,t,n){const o=i.model,s=o.document,a=n.getAttribute(e);let l,u;if(a!=t){if(n.root===n){const f=n.document?s.version:null;u=new ko(n,e,a,t,f)}else{l=new G(ne._createBefore(n),i.createPositionAfter(n));const f=l.root.document?s.version:null;u=new Ct(l,e,a,t,f)}i.batch.addOperation(u),o.applyOperation(u)}}function gs(i,e,t,n,o){const s=i.model,a=s.document,l=new Xt(e,t,n,s.markers,o,a.version);i.batch.addOperation(l),s.applyOperation(l)}function Lx(i,e,t,n){let o;if(i.root.document){const s=n.document,a=new ne(s.graveyard,[0]);o=new Xe(i,e,a,s.version)}else o=new Bx(i,e);t.addOperation(o),n.applyOperation(o)}function pp(i,e){return i===e||i instanceof Xl&&e instanceof Xl}class Rx{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),n=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),n||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=G._createFromPositionAndShift(e.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const n=e.graveyardPosition.parent;this._markInsert(n,e.graveyardPosition.offset,1);const o=e.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||s)return!0}}return!1}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((p,b)=>p.offset===b.offset?p.type!=b.type?p.type=="remove"?-1:1:0:p.offset<b.offset?-1:1),s=this._elementSnapshots.get(n),a=mp(n.getChildren()),l=zx(s.length,o);let u=0,f=0;for(const p of l)if(p==="i")t.push(this._getInsertDiff(n,u,a[u])),u++;else if(p==="r")t.push(this._getRemoveDiff(n,u,s[f])),f++;else if(p==="a"){const b=a[u].attributes,v=s[f].attributes;let E;if(a[u].name=="$text")E=new G(ne._createAt(n,u),ne._createAt(n,u+1));else{const D=n.offsetToIndex(u);E=new G(ne._createAt(n,u),ne._createAt(n.getChild(D),0))}t.push(...this._getAttributesDiff(E,v,b)),u++,f++}else u++,f++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const s=t[o],a=t[n],l=s.type=="remove"&&a.type=="remove"&&s.name=="$text"&&a.name=="$text"&&s.position.isEqual(a.position),u=s.type=="insert"&&a.type=="insert"&&s.name=="$text"&&a.name=="$text"&&s.position.parent==a.position.parent&&s.position.offset+s.length==a.position.offset,f=s.type=="attribute"&&a.type=="attribute"&&s.position.parent==a.position.parent&&s.range.isFlat&&a.range.isFlat&&s.position.offset+s.length==a.position.offset&&s.attributeKey==a.attributeKey&&s.attributeOldValue==a.attributeOldValue&&s.attributeNewValue==a.attributeNewValue;l||u||f?(s.length++,f&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(jx),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=G._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,mp(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const a=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:a-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=s)if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a,e.nodesToHandle-=a}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const a=s-e.offset;n.howMany-=a,e.nodesToHandle-=a}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const a=o-n.offset;n.offset=e.offset,n.howMany-=a}else if(e.offset<s)if(o<=s){const a=n.howMany;n.howMany=e.offset-n.offset;const l=a-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:l,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>s){const a={type:"attribute",offset:s,howMany:o-s,count:this._changeCount++};this._handleChange(a,t),t.push(a)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(o>s?(e.nodesToHandle=o-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const a={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(a,t),t.push(a),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:ne._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:ne._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[s,a]of t){const l=n.has(s)?n.get(s):null;l!==a&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:a,attributeNewValue:l,changeCount:this._changeCount++}),n.delete(s)}for(const[s,a]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&o>=s.offset&&o<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new G(ne._createAt(e,t),ne._createAt(e,t+n));for(const s of o.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function mp(i){const e=[];for(const t of i)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function zx(i,e){const t=[];let n=0,o=0;for(const s of e){if(s.offset>n){for(let a=0;a<s.offset-n;a++)t.push("e");o+=s.offset-n}if(s.type=="insert"){for(let a=0;a<s.howMany;a++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let a=0;a<s.howMany;a++)t.push("r");n=s.offset,o+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,o+=s.howMany}if(o<i)for(let s=0;s<i-o-n;s++)t.push("e");return t}function jx(i){const e=i.position&&i.position.root.rootName=="$graveyard",t=i.range&&i.range.root.rootName=="$graveyard";return!e&&!t}class Fx{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new A("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[l,u]of this._gaps)e>l&&e<u&&(e=u),o>l&&o<u&&(o=l-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let a=this._baseVersionToOperationIndex.get(o);return a===void 0&&(a=this._operations.length-1),this._operations.slice(s,a+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function kp(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function bp(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const Vx=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function Ux(i,e){const t=String(i).matchAll(Vx);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const ed="$graveyard";class wp{constructor(e){this.model=e,this.history=new Fx,this.selection=new In(this),this.roots=new Sn({idProperty:"rootName"}),this.differ=new Rx(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",ed),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,s,a)=>{const l={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,a,l),o===null&&n.on("change",(u,f)=>{const p=n.getData();this.differ.bufferMarkerChange(n.name,{...p,range:f},p)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(ed)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new A("model-document-createroot-name-exists",this,{name:t});const n=new Xl(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=ed)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Tf(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return _p(e.start)&&_p(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function _p(i){const e=i.textNode;if(e){const t=e.data,n=i.offset-e.startOffset;return!kp(t,n)&&!bp(t,n)}return!0}Q(wp,L);class Ap{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof rr?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const s=e instanceof rr?e.name:e;if(s.includes(","))throw new A("markercollection-incorrect-marker-name",this);const a=this._markers.get(s);if(a){const f=a.getData(),p=a.getRange();let b=!1;return p.isEqual(t)||(a._attachLiveRange(Kn.fromRange(t)),b=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,b=!0),typeof o=="boolean"&&o!=a.affectsData&&(a._affectsData=o,b=!0),b&&this.fire("update:"+s,a,p,t,f),a}const l=Kn.fromRange(t),u=new rr(s,l,n,o);return this._markers.set(s,u),this.fire("update:"+s,u,null,t,{...u.getData(),range:null}),u}_remove(e){const t=e instanceof rr?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire("update:"+t,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof rr?e.name:e,n=this._markers.get(t);if(!n)throw new A("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+t,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}Q(Ap,L);class rr{constructor(e,t,n,o){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new A("marker-destroyed",this);return this._liveRange.toRange()}is(e){return e==="marker"||e==="model:marker"}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}Q(rr,L);class It extends _n{get type(){return"noop"}clone(){return new It(this.baseVersion)}getReversed(){return new It(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Pn={};Pn[Ct.className]=Ct,Pn[Tt.className]=Tt,Pn[Xt.className]=Xt,Pn[Xe.className]=Xe,Pn[It.className]=It,Pn[_n.className]=_n,Pn[en.className]=en,Pn[ko.className]=ko,Pn[ht.className]=ht,Pn[yt.className]=yt;class Bt extends ne{constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new A("model-liveposition-root-not-rootelement",e);Hx.call(this)}detach(){this.stopListening()}is(e){return e==="livePosition"||e==="model:livePosition"||e=="position"||e==="model:position"}toPosition(){return new ne(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function Hx(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&$x.call(this,t)},{priority:"low"})}function $x(i){const e=this.getTransformedByOperation(i);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}Q(Bt,L);class qx{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new A("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?G._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new G(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Bt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new A("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Bt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Bt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Je)||!this._canMergeLeft(e))return;const t=Bt._createBefore(e);t.stickiness="toNext";const n=Bt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Bt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Bt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Je)||!this._canMergeRight(e))return;const t=Bt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new A("insertcontent-invalid-insertion-position",this);this.position=ne._createAt(t.nodeBefore,"end");const n=Bt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Bt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Bt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Je&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Je&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function vp(i,e,t="auto"){const n=i.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return["before","after"].includes(t)?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=St(i.getSelectedBlocks());if(!o)return e.createRange(i.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const s=e.createPositionAfter(o);return i.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(o))}function Wx(i,e,t,n,o={}){if(!i.schema.isObject(e))throw new A("insertobject-element-not-an-object",i,{object:e});let s;s=t?t.is("selection")?t:i.createSelection(t,n):i.document.selection;let a=s;o.findOptimalPosition&&i.schema.isBlock(e)&&(a=i.createSelection(vp(s,i,o.findOptimalPosition)));const l=St(s.getSelectedBlocks()),u={};return l&&Object.assign(u,i.schema.getAttributesWithProperty(l,"copyOnReplace",!0)),i.change(f=>{a.isCollapsed||i.deleteContent(a,{doNotAutoparagraph:!0});let p=e;const b=a.anchor.parent;!i.schema.checkChild(b,e)&&i.schema.checkChild(b,"paragraph")&&i.schema.checkChild("paragraph",e)&&(p=f.createElement("paragraph"),f.insert(e,p)),i.schema.setAllowedAttributes(p,u,f);const v=i.insertContent(p,a);return v.isCollapsed||o.setSelection&&function(E,D,S,I){const N=E.model;if(S=="after"){let F=D.nextSibling;!(F&&N.schema.checkChild(F,"$text"))&&N.schema.checkChild(D.parent,"paragraph")&&(F=E.createElement("paragraph"),N.schema.setAllowedAttributes(F,I,E),N.insertContent(F,E.createPositionAfter(D))),F&&E.setSelection(F,0)}else{if(S!="on")throw new A("insertobject-invalid-place-parameter-value",N);E.setSelection(D,"on")}}(f,e,o.setSelection,u),v})}function Gx(i,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(s=>{if(!t.doNotResetEntireContent&&function(f,p){const b=f.getLimitElement(p);if(!p.containsEntireContent(b))return!1;const v=p.getFirstRange();return v.start.parent==v.end.parent?!1:f.checkChild(b,"paragraph")}(o,e))return void function(f,p){const b=f.model.schema.getLimitElement(p);f.remove(f.createRangeIn(b)),xp(f,f.createPositionAt(b,0),p)}(s,e);const a={};if(!t.doNotAutoparagraph){const f=e.getSelectedElement();f&&Object.assign(a,o.getAttributesWithProperty(f,"copyOnReplace",!0))}const[l,u]=function(f){const p=f.root.document.model,b=f.start;let v=f.end;if(p.hasContent(f,{ignoreMarkers:!0})){const E=function(D){const S=D.parent,I=S.root.document.model.schema,N=S.getAncestors({parentFirst:!0,includeSelf:!0});for(const F of N){if(I.isLimit(F))return null;if(I.isBlock(F))return F}}(v);if(E&&v.isTouching(p.createPositionAt(E,0))){const D=p.createSelection(f);p.modifySelection(D,{direction:"backward"});const S=D.getLastPosition(),I=p.createRange(S,v);p.hasContent(I,{ignoreMarkers:!0})||(v=S)}}return[Bt.fromPosition(b,"toPrevious"),Bt.fromPosition(v,"toNext")]}(n);l.isTouching(u)||s.remove(s.createRange(l,u)),t.leaveUnmerged||(function(f,p,b){const v=f.model;if(!td(f.model.schema,p,b))return;const[E,D]=function(S,I){const N=S.getAncestors(),F=I.getAncestors();let te=0;for(;N[te]&&N[te]==F[te];)te++;return[N[te],F[te]]}(p,b);!E||!D||(!v.hasContent(E,{ignoreMarkers:!0})&&v.hasContent(D,{ignoreMarkers:!0})?yp(f,p,b,E.parent):Cp(f,p,b,E.parent))}(s,l,u),o.removeDisallowedAttributes(l.parent.getChildren(),s)),Ep(s,e,l),!t.doNotAutoparagraph&&function(f,p){const b=f.checkChild(p,"$text"),v=f.checkChild(p,"paragraph");return!b&&v}(o,l)&&xp(s,l,e,a),l.detach(),u.detach()})}function Cp(i,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(s)).isEqual(e)||i.insert(s,e),i.merge(e);t.parent.isEmpty;){const a=t.parent;t=i.createPositionBefore(a),i.remove(a)}td(i.model.schema,e,t)&&Cp(i,e,t,n)}}function yp(i,e,t,n){const o=e.parent,s=t.parent;if(o!=n&&s!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(s)).isEqual(e)||i.insert(o,t);e.parent.isEmpty;){const a=e.parent;e=i.createPositionBefore(a),i.remove(a)}t=i.createPositionBefore(s),function(a,l){const u=l.nodeBefore,f=l.nodeAfter;u.name!=f.name&&a.rename(u,f.name),a.clearAttributes(u),a.setAttributes(Object.fromEntries(f.getAttributes()),u),a.merge(l)}(i,t),td(i.model.schema,e,t)&&yp(i,e,t,n)}}function td(i,e,t){const n=e.parent,o=t.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(s,a,l){const u=new G(s,a);for(const f of u.getWalker())if(l.isLimit(f.item))return!1;return!0}(e,t,i)}function xp(i,e,t,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,e),Ep(i,t,i.createPositionAt(o,0))}function Ep(i,e,t){e instanceof In?i.setSelection(t):e.setTo(t)}const Dp=' ,.?!:;"-()';function Kx(i,e){const{isForward:t,walker:n,unit:o,schema:s,treatEmojiAsSingleUnit:a}=i,{type:l,item:u,nextPosition:f}=e;if(l=="text")return i.unit==="word"?function(p,b){let v=p.position.textNode;if(v){let E=p.position.offset-v.startOffset;for(;!Qx(v.data,E,b)&&!Zx(v,E,b);){p.next();const D=b?p.position.nodeAfter:p.position.nodeBefore;if(D&&D.is("$text")){const S=D.data.charAt(b?0:D.data.length-1);Dp.includes(S)||(p.next(),v=p.position.textNode)}E=p.position.offset-v.startOffset}}return p.position}(n,t):function(p,b,v){const E=p.position.textNode;if(E){const D=E.data;let S=p.position.offset-E.startOffset;for(;kp(D,S)||b=="character"&&bp(D,S)||v&&Ux(D,S);)p.next(),S=p.position.offset-E.startOffset}return p.position}(n,o,a);if(l==(t?"elementStart":"elementEnd")){if(s.isSelectable(u))return ne._createAt(u,t?"after":"before");if(s.checkChild(f,"$text"))return f}else{if(s.isLimit(u))return void n.skip(()=>!0);if(s.checkChild(f,"$text"))return f}}function Yx(i,e){const t=i.root,n=ne._createAt(t,e?"end":0);return e?new G(i,n):new G(n,i)}function Qx(i,e,t){const n=e+(t?0:-1);return Dp.includes(i.charAt(n))}function Zx(i,e,t){return e===(t?i.endOffset:0)}function Sp(i,e){const t=[];Array.from(i.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const s=e.createRangeOn(o);o=o.parent,e.remove(s)}})}function Jx(i){i.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,s=n.schema,a=[];let l=!1;for(const u of o.getRanges()){const f=Xx(u,s);f&&!f.isEqual(u)?(a.push(f),l=!0):a.push(u)}l&&t.setSelection(function(u){const f=[...u],p=new Set;let b=1;for(;b<f.length;){const v=f[b],E=f.slice(0,b);for(const[D,S]of E.entries())if(!p.has(D)){if(v.isEqual(S))p.add(D);else if(v.isIntersecting(S)){p.add(D),p.add(b);const I=v.getJoined(S);f.push(I)}}b++}return f.filter((v,E)=>!p.has(E))}(a),{backward:o.isBackward})}(e,i))}function Xx(i,e){return i.isCollapsed?function(t,n){const o=t.start,s=n.getNearestSelectionRange(o);if(!s){const l=o.getAncestors().reverse().find(u=>n.isObject(u));return l?G._createOn(l):null}if(!s.isCollapsed)return s;const a=s.start;return o.isEqual(a)?null:new G(a)}(i,e):function(t,n){const{start:o,end:s}=t,a=n.checkChild(o,"$text"),l=n.checkChild(s,"$text"),u=n.getLimitElement(o),f=n.getLimitElement(s);if(u===f){if(a&&l)return null;if(function(v,E,D){const S=v.nodeAfter&&!D.isLimit(v.nodeAfter)||D.checkChild(v,"$text"),I=E.nodeBefore&&!D.isLimit(E.nodeBefore)||D.checkChild(E,"$text");return S||I}(o,s,n)){const v=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),E=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),D=v?v.start:o,S=E?E.end:s;return new G(D,S)}}const p=u&&!u.is("rootElement"),b=f&&!f.is("rootElement");if(p||b){const v=o.nodeAfter&&s.nodeBefore&&o.nodeAfter.parent===s.nodeBefore.parent,E=p&&(!v||!Ip(o.nodeAfter,n)),D=b&&(!v||!Ip(s.nodeBefore,n));let S=o,I=s;return E&&(S=ne._createBefore(Tp(u,n))),D&&(I=ne._createAfter(Tp(f,n))),new G(S,I)}return null}(i,e)}function Tp(i,e){let t=i,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Ip(i,e){return i&&e.isSelectable(i)}class Mp{constructor(){this.markers=new Ap,this.document=new wp(this),this.schema=new ip,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),Jx(this),this.document.registerPostFixer(Qg)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new ir,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){A.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new ir):e instanceof ir||(e=new ir(e)):e=new ir,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){A.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,s,a,l){return o.change(u=>{let f;f=a?a instanceof po||a instanceof In?a:u.createSelection(a,l):o.document.selection,f.isCollapsed||o.deleteContent(f,{doNotAutoparagraph:!0});const p=new qx(o,u,f.anchor);let b;b=s.is("documentFragment")?s.getChildren():[s],p.handleNodes(b);const v=p.getSelectionRange();v&&(f instanceof In?u.setSelection(v):f.setTo(v));const E=p.getAffectedRange()||o.createRange(f.anchor);return p.destroy(),E})}(this,e,t,n)}insertObject(e,t,n,o){return Wx(this,e,t,n,o)}deleteContent(e,t){Gx(this,e,t)}modifySelection(e,t){(function(n,o,s={}){const a=n.schema,l=s.direction!="backward",u=s.unit?s.unit:"character",f=!!s.treatEmojiAsSingleUnit,p=o.focus,b=new go({boundaries:Yx(p,l),singleCharacters:!0,direction:l?"forward":"backward"}),v={walker:b,schema:a,isForward:l,unit:u,treatEmojiAsSingleUnit:f};let E;for(;E=b.next();){if(E.done)return;const D=Kx(v,E.value);if(D)return void(o instanceof In?n.change(S=>{S.setSelectionFocus(D)}):o.setFocus(D))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const s=o.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return s;const l=a.start.root,u=a.start.getCommonPath(a.end),f=l.getNodeByPath(u);let p;p=a.start.parent==a.end.parent?a:o.createRange(o.createPositionAt(f,a.start.path[u.length]),o.createPositionAt(f,a.end.path[u.length]+1));const b=p.end.offset-p.start.offset;for(const v of p.getItems({shallow:!0}))v.is("$textProxy")?o.appendText(v.data,v.getAttributes(),s):o.append(o.cloneElement(v,!0),s);if(p!=a){const v=a._getTransformedByMove(p.start,o.createPositionAt(s,0),b)[0],E=o.createRange(o.createPositionAt(s,0),v.start);Sp(o.createRange(v.end,o.createPositionAt(s,"end")),o),Sp(E,o)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof Je?G._createIn(e):e;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:s=!1}=t;if(!s){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!o||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new ne(e,t,n)}createPositionAt(e,t){return ne._createAt(e,t)}createPositionAfter(e){return ne._createAfter(e)}createPositionBefore(e){return ne._createBefore(e)}createRange(e,t){return new G(e,t)}createRangeIn(e){return G._createIn(e)}createRangeOn(e){return G._createOn(e)}createSelection(e,t,n){return new po(e,t,n)}createBatch(e){return new ir(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return Pn[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Ox(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}Q(Mp,Ie);class eE extends fo{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(s,a)=>{this.editor.execute(o),a()}}super.set(e,t,n)}}class Pp{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new Sy({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new xf(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new ml(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new bx,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new Mp;const o=new r1;this.data=new ap(this.model,o),this.editing=new op(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Nx([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new eE(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new A("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new A("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new A("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){A.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}Q(Pp,Ie);class tE{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(nd(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new A("componentfactory-item-missing",this,{name:e});return this._components.get(nd(e)).callback(this.editor.locale)}has(e){return this._components.has(nd(e))}}function nd(i){return String(i).toLowerCase()}class Np{constructor(e){this.editor=e,this.componentFactory=new tE(e),this.focusTracker=new Wn,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}Q(Np,Ie);const nE={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},oE=nE;function iE(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}const rE={updateSourceElement(i=this.data.get()){if(!this.sourceElement)throw new A("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;iE(this.sourceElement,e||t?i:"")}};class Bp extends ts{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Sn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new A("pendingactions-add-invalid-message",this);const t=Object.create(Ie);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const Op='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',An={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:Op};function od({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,s)=>{if(!e())return;const a=typeof s.composedPath=="function"?s.composedPath():[];for(const l of n)if(l.contains(s.target)||a.includes(l))return;t()})}function id(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function rd({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}class Ai extends Sn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new A("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const s of e)o.delegate(s).to(t)}),this.on("remove",(n,o)=>{for(const s of e)o.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var Lp=g(4793),sE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Lp.Z,sE),Lp.Z.locals;class Re{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Sn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=cn.bind(this,this)}createCollection(e){const t=new Ai(e);return this._viewCollections.add(t),t}registerChild(e){bn(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){bn(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new cn(e)}extendTemplate(e){cn.extend(this.template,e)}render(){if(this.isRendered)throw new A("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}Q(Re,ss),Q(Re,Ie);class cn{constructor(e){Object.assign(this,Fp(jp(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new A("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)xa(n)?yield n:sd(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new aE({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,s)=>new Rp({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:s})}}static extend(e,t){if(e._isRendered)throw new A("template-extend-render",[this,e]);$p(e,Fp(jp(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new A("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),ya(this.text)?this._bindToObservable({schema:this.text,updater:cE(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,o,s;if(!this.attributes)return;const a=e.node,l=e.revertData;for(t in this.attributes)if(o=a.getAttribute(t),n=this.attributes[t],l&&(l.attributes[t]=o),s=xe(n[0])&&n[0].ns?n[0].ns:null,ya(n)){const u=s?n[0].value:n;l&&qp(t)&&u.unshift(o),this._bindToObservable({schema:u,updater:lE(a,t,s),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(l&&o&&qp(t)&&n.unshift(o),n=n.map(u=>u&&u.value||u).reduce((u,f)=>u.concat(f),[]).reduce(Up,""),sr(n)||a.setAttributeNS(s,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const s=e[o];ya(s)?this._bindToObservable({schema:[s],updater:dE(n,o),data:t}):n.style[o]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let s=0;for(const a of this.children)if(ad(a)){if(!o){a.setParent(t);for(const l of a)n.appendChild(l.element)}}else if(xa(a))o||(a.isRendered||a.render(),n.appendChild(a.element));else if(nr(a))n.appendChild(a);else if(o){const l={children:[],bindings:[],attributes:{}};e.revertData.children.push(l),a._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:l})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[s,a]=t.split("@");return o.activateDomEventListener(s,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;zp(e,t,n);const s=e.filter(a=>!sr(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));o&&o.bindings.push(s)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const o of n)o();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const o=t.attributes[n];o===null?e.removeAttribute(n):e.setAttribute(n,o)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}Q(cn,L);class ps{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>zp(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class aE extends ps{activateDomEventListener(e,t,n){const o=(s,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Rp extends ps{getValue(e){return!sr(super.getValue(e))&&(this.valueIfTrue||!0)}}function ya(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(ya):i instanceof ps)}function zp(i,e,{node:t}){let n=function(o,s){return o.map(a=>a instanceof ps?a.getValue(s):a)}(i,t);n=i.length==1&&i[0]instanceof Rp?n[0]:n.reduce(Up,""),sr(n)?e.remove():e.set(n)}function cE(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function lE(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function dE(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function jp(i){return yf(i,e=>{if(e&&(e instanceof ps||sd(e)||xa(e)||ad(e)))return e})}function Fp(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=Dt(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)Vp(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Dt(t[n].value)),Vp(t,n)}(i.attributes);const e=[];if(i.children)if(ad(i.children))e.push(i.children);else for(const t of i.children)sd(t)||xa(t)||nr(t)?e.push(t):e.push(new cn(t));i.children=e}return i}function Vp(i,e){i[e]=Dt(i[e])}function Up(i,e){return sr(e)?i:sr(i)?e:`${i} ${e}`}function Hp(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function $p(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Hp(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Hp(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new A("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)$p(i.children[t++],n)}}function sr(i){return!i&&i!==0}function xa(i){return i instanceof Re}function sd(i){return i instanceof cn}function ad(i){return i instanceof Ai}function qp(i){return i=="class"||i=="style"}class uE extends Ai{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new cn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=xg(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var Wp=g(6574),hE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Wp.Z,hE),Wp.Z.locals;class Ea extends Re{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var Gp=g(3332),fE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Gp.Z,fE),Gp.Z.locals;class Kp extends Re{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",n=>"ck-tooltip_"+n),t.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}var Yp=g(4906),gE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Yp.Z,gE),Yp.Z.locals;class gt extends Re{constructor(e){super(e);const t=this.bindTemplate,n=y();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Ea,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s))},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};Ze.isSafari&&(o.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new Kp;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new Re,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Re;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>$f(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=$f(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var Qp=g(5332),pE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Qp.Z,pE),Qp.Z.locals;class Da extends gt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Re;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Zp=g(6781),mE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Zp.Z,mE),Zp.Z.locals;const Jp='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Xp extends gt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ea;return e.content=Jp,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var em=g(7686),kE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(em.Z,kE),em.Z.locals;class tm extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new fo,this.focusTracker=new Wn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new gt;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new gt,t=e.bindTemplate;return e.icon=Jp,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class bE extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():T("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var nm=g(5485),wE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(nm.Z,wE),nm.Z.locals;function om({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:s}){ai(e)&&(e=e()),ai(n)&&(n=n());const a=function(v){return v&&v.parentNode?v.offsetParent===ut.document.body?null:v.offsetParent:null}(i),l=new rt(i),u=new rt(e);let f;const p=o&&function(v){v=Object.assign({top:0,bottom:0,left:0,right:0},v);const E=new rt(ut.window);return E.top+=v.top,E.height-=v.top,E.bottom-=v.bottom,E.height-=v.bottom,E}(s)||null,b={targetRect:u,elementRect:l,positionedElementAncestor:a,viewportRect:p};if(n||o){const v=n&&new rt(n).getVisible();Object.assign(b,{limiterRect:v,viewportRect:p}),f=function(E,D){const{elementRect:S}=D,I=S.getArea(),N=E.map(be=>new cd(be,D)).filter(be=>!!be.name);let F=0,te=null;for(const be of N){const{limiterIntersectionArea:Me,viewportIntersectionArea:at}=be;if(Me===I)return be;const We=at**2+Me**2;We>F&&(F=We,te=be)}return te}(t,b)||new cd(t[0],b)}else f=new cd(t[0],b);return f}function im(i){const{scrollX:e,scrollY:t}=ut.window;return i.clone().moveBy(e,t)}class cd{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:s,name:a,config:l}=n;this.name=a,this.config=l,this._positioningFunctionCorrdinates={left:o,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=im(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=im(new rt(t)),o=Eg(t);let s=0,a=0;s-=n.left,a-=n.top,s+=t.scrollLeft,a+=t.scrollTop,s-=o.left,a-=o.top,e.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class ar extends Re{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new fo,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",s=>!s)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=ar._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:s,northWest:a,southMiddleEast:l,southMiddleWest:u,northMiddleEast:f,northMiddleWest:p}=ar.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,l,u,e,s,a,f,p,t]:[o,n,u,l,e,a,s,p,f,t]}}function rm(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}ar.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},ar._getOptimalPosition=om;class cr{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(s,a)=>{this[t](),a()})}}get first(){return this.focusables.find(ld)||null}get last(){return this.focusables.filter(ld).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const s=this.focusables.get(o);if(ld(s))return s;o=(o+n+e)%n}while(o!==t);return null}}function ld(i){return!(!i.focus||!rm(i.element))}class sm extends Re{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class _E extends Re{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function am(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var cm=g(5542),AE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(cm.Z,AE),cm.Z.locals;class dd extends Re{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Wn,this.keystrokes=new fo,this.set("class"),this.set("isCompact",!1),this.itemsView=new vE(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new cr({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var l;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(l=this,l.bindTemplate.to(u=>{u.target===l.element&&u.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new yE(this):new CE(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=am(e),o=n.items.filter((a,l,u)=>a==="|"||n.removeItems.indexOf(a)===-1&&(a==="-"?!this.options.shouldGroupWhenFull||(T("toolbarview-line-break-ignored-when-grouping-items",u),!1):!!t.has(a)||(T("toolbarview-item-unavailable",{name:a}),!1))),s=this._cleanSeparators(o).map(a=>a==="|"?new sm:a==="-"?new _E:t.create(a));this.items.addMany(s)}_cleanSeparators(e){const t=a=>a!=="-"&&a!=="|",n=e.length,o=e.findIndex(t),s=n-e.slice().reverse().findIndex(t);return e.slice(o,s).filter((a,l,u)=>t(a)?!0:!(l>0&&u[l-1]===a))}}class vE extends Re{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class CE{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class yE{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index;for(const s of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=o;s<o+n.added.length;s++){const a=n.added[s-o];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!rm(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new rt(e.lastChild),o=new rt(e);if(!this.cachedPadding){const s=ut.window.getComputedStyle(e),a=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[a])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new pt(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new sm),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=vi(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",fm(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:Op}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var lm=g(1046),xE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(lm.Z,xE),lm.Z.locals;class EE extends Re{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Wn,this.keystrokes=new fo,this._focusCycler=new cr({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class dm extends Re{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class DE extends Re{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var um=g(7339),SE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(um.Z,SE),um.Z.locals;var hm=g(3949),TE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(hm.Z,TE),hm.Z.locals;function vi(i,e=Xp){const t=new e(i),n=new bE(i),o=new ar(i,t,n);return t.bind("isEnabled").to(o),t instanceof Xp?t.bind("isOn").to(o,"isOpen"):t.arrowView.bind("isOn").to(o,"isOpen"),function(s){(function(a){a.on("render",()=>{od({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(s),function(a){a.on("execute",l=>{l.source instanceof Da||(a.isOpen=!1)})}(s),function(a){a.keystrokes.set("arrowdown",(l,u)=>{a.isOpen&&(a.panelView.focus(),u())}),a.keystrokes.set("arrowup",(l,u)=>{a.isOpen&&(a.panelView.focusLast(),u())})}(s)}(o),o}function fm(i,e,t={}){const n=i.locale,o=n.t,s=i.toolbarView=new dd(n);s.set("ariaLabel",o("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(a=>s.items.add(a)),t.enableActiveItemFocusOnDropdownOpen&&pm(i,()=>s.items.find(a=>a.isOn)),i.panelView.children.add(s),s.items.delegate("execute").to(i)}function gm(i,e){const t=i.locale,n=i.listView=new EE(t);n.items.bindTo(e).using(({type:o,model:s})=>{if(o==="separator")return new DE(t);if(o==="button"||o==="switchbutton"){const a=new dm(t);let l;return l=o==="button"?new gt(t):new Da(t),l.bind(...Object.keys(s)).to(s),l.delegate("execute").to(a),a.children.add(l),a}}),i.panelView.children.add(n),n.items.delegate("execute").to(i),pm(i,()=>n.items.find(o=>o instanceof dm&&o.children.first.isOn))}function pm(i,e){i.on("change:isOpen",()=>{if(!i.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():T("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:"low"})}var mm=g(9688),IE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(mm.Z,IE),mm.Z.locals;class ME extends Re{constructor(e){super(e),this.body=new uE(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var km=g(3662),PE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(km.Z,PE),km.Z.locals;class bm extends Re{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${y()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class NE extends ME{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new bm;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class BE extends Re{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const s=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",s),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(s,a,l)=>{l?n(o):t(o)})}(this):t(this)}}class OE extends BE{constructor(e,t,n,o={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var wm=g(8847),LE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(wm.Z,LE),wm.Z.locals;var _m=g(4879),RE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(_m.Z,RE),_m.Z.locals;class zE extends Re{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Wn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class jE extends zE{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var Am=g(2577),FE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Am.Z,FE),Am.Z.locals;class ud extends Re{constructor(e,t){super(e);const n=`ck-labeled-field-view-${y()}`,o=`ck-labeled-field-view-status-${y()}`;this.fieldView=t(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,l)=>a||l);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",a=>!a),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new bm(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new Re(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function hd(i,e,t){const n=new jE(i.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class fd extends ts{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class gd{constructor(e,t){t&&jl(this,t),e&&this.set(e)}}function pd(i){return e=>e+i}Q(gd,Ie);var vm=g(8793),VE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(vm.Z,VE),vm.Z.locals;const Cm=pd("px"),ym=ut.document.body;class tn extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Cm),left:t.to("left",Cm)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=tn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:ym,fitInViewport:!0},e),o=tn._getOptimalPosition(n),s=parseInt(o.left),a=parseInt(o.top),{name:l,config:u={}}=o,{withArrow:f=!0}=u;Object.assign(this,{top:a,left:s,position:l,withArrow:f})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=md(e.target),n=e.limiter?md(e.limiter):ym;this.listenTo(ut.document,"scroll",(o,s)=>{const a=s.target,l=t&&a.contains(t),u=n&&a.contains(n);!l&&!u&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(ut.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(ut.document,"scroll"),this.stopListening(ut.window,"resize")}}function md(i){return ui(i)?i:_a(i)?i.commonAncestorContainer:typeof i=="function"?md(i()):null}tn.arrowHorizontalOffset=25,tn.arrowVerticalOffset=10,tn.stickyVerticalOffset=20,tn._getOptimalPosition=om,tn.defaultPositions=function({horizontalOffset:i=tn.arrowHorizontalOffset,verticalOffset:e=tn.arrowVerticalOffset,stickyVerticalOffset:t=tn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(a,l)=>({top:o(a,l),left:a.left-l.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left-l.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(a,l)=>({top:o(a,l),left:a.left+a.width/2-l.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(a,l)=>({top:o(a,l),left:a.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(a,l)=>({top:o(a,l),left:a.right-.25*l.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(a,l)=>({top:o(a,l),left:a.right-l.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(a,l)=>({top:o(a,l),left:a.right-.75*l.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(a,l)=>({top:o(a,l),left:a.right-l.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(a,l)=>({top:s(a),left:a.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(a,l)=>({top:s(a),left:a.left-l.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(a,l)=>({top:s(a),left:a.left-l.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(a,l)=>({top:s(a),left:a.left+a.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.left+a.width/2-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.left+a.width/2-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(a,l)=>({top:s(a),left:a.left+a.width/2-l.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(a,l)=>({top:s(a),left:a.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(a,l)=>({top:s(a),left:a.right-.25*l.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(a,l)=>({top:s(a),left:a.right-l.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(a,l)=>({top:s(a),left:a.right-.75*l.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(a,l)=>({top:s(a),left:a.right-l.width+i,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(a,l,u)=>a.getIntersection(u)?{top:u.top+t,left:a.left+a.width/2-l.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(a,l){return a.top-l.height-e}function s(a){return a.bottom+e}}();var xm=g(4650),UE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(xm.Z,UE),xm.Z.locals;var Em=g(7676),HE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Em.Z,HE),Em.Z.locals;const Sa=pd("px");class Ta extends W{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new tn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new A("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new A("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new A("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new $E(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new qE(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class $E extends Re{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Wn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new gt(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class qE extends Re{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Sa),left:n.to("left",Sa),width:n.to("width",Sa),height:n.to("height",Sa)}},children:this.content}),this.on("change:numberOfPanels",(o,s,a,l)=>{a>l?this._addPanels(a-l):this._removePanels(l-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new Re;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new rt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var Dm=g(5868),WE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Dm.Z,WE),Dm.Z.locals;const ms=pd("px");class GE extends Re{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new cn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?ms(this._panelRect.height):null)}}}).render(),this._contentPanel=new cn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?ms(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?ms(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?ms(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(ut.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:ms(-ut.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var Sm=g(9695),KE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Sm.Z,KE),Sm.Z.locals;var Tm=g(4717),YE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Tm.Z,YE),Tm.Z.locals;const Ia=new WeakMap;function Im(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:s=!1}=i,a=e.document;Ia.has(a)||(Ia.set(a,new Map),a.registerPostFixer(l=>Mm(a,l))),Ia.get(a).set(t,{text:n,isDirectHost:o,keepOnFocus:s,hostElement:o?t:null}),e.change(l=>Mm(a,l))}function QE(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function Mm(i,e){const t=Ia.get(i),n=[];let o=!1;for(const[s,a]of t)a.isDirectHost&&(n.push(s),Pm(e,s,a)&&(o=!0));for(const[s,a]of t){if(a.isDirectHost)continue;const l=ZE(s);l&&(n.includes(l)||(a.hostElement=l,Pm(e,s,a)&&(o=!0)))}return o}function Pm(i,e,t){const{text:n,isDirectHost:o,hostElement:s}=t;let a=!1;return s.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,s),a=!0),(o||e.childCount==1)&&function(l,u){if(!l.isAttached()||Array.from(l.getChildren()).some(v=>!v.is("uiElement")))return!1;if(u)return!0;const p=l.document;if(!p.isFocused)return!0;const b=p.selection.anchor;return b&&b.parent!==l}(s,t.keepOnFocus)?function(l,u){return!u.hasClass("ck-placeholder")&&(l.addClass("ck-placeholder",u),!0)}(i,s)&&(a=!0):QE(i,s)&&(a=!0),a}function ZE(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const kd=new Map;function qe(i,e,t){let n=kd.get(i);n||(n=new Map,kd.set(i,n)),n.set(e,t)}function JE(i){return[i]}function Nm(i,e,t={}){const n=function(o,s){const a=kd.get(o);return a&&a.has(s)?a.get(s):JE}(i.constructor,e.constructor);try{return n(i=i.clone(),e,t)}catch(o){throw o}}function XE(i,e,t){i=i.slice(),e=e.slice();const n=new eD(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(e);const o=n.originalOperations;if(i.length==0||e.length==0)return{operationsA:i,operationsB:e,originalOperations:o};const s=new WeakMap;for(const u of i)s.set(u,0);const a={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:e.length};let l=0;for(;l<i.length;){const u=i[l],f=s.get(u);if(f==e.length){l++;continue}const p=e[f],b=Nm(u,p,n.getContext(u,p,!0)),v=Nm(p,u,n.getContext(p,u,!1));n.updateRelation(u,p),n.setOriginalOperations(b,u),n.setOriginalOperations(v,p);for(const E of b)s.set(E,f+v.length);i.splice(l,1,...b),e.splice(f,1,...v)}if(t.padWithNoOps){const u=i.length-a.originalOperationsACount,f=e.length-a.originalOperationsBCount;Om(i,f-u),Om(e,u-f)}return Bm(i,a.nextBaseVersionB),Bm(e,a.nextBaseVersionA),{operationsA:i,operationsB:e,originalOperations:o}}class eD{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){switch(e.constructor){case Xe:switch(t.constructor){case yt:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case Xe:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case ht:switch(t.constructor){case yt:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case Xe:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=G._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:s})}}}break;case yt:switch(t.constructor){case yt:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case ht:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case Xt:{const n=e.newRange;if(!n)return;switch(t.constructor){case Xe:{const o=G._createFromPositionAndShift(t.sourcePosition,t.howMany),s=o.containsPosition(n.start)||o.start.isEqual(n.start),a=o.containsPosition(n.end)||o.end.isEqual(n.end);!s&&!a||o.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()});break}case yt:{const o=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),l=n.end.isEqual(t.sourcePosition);(o||s||a||l)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:a,wasInRightElement:l});break}}break}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const s=this.originalOperations.get(e),a=this._relations.get(s);return a&&a.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),s=this.originalOperations.get(t);let a=this._relations.get(o);a||(a=new Map,this._relations.set(o,a)),a.set(s,n)}}function Bm(i,e){for(const t of i)t.baseVersion=e++}function Om(i,e){for(let t=0;t<e;t++)i.push(new It(0))}function Lm(i,e,t){const n=i.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new G(i.position,i.position.getShiftedBy(i.howMany));return new Ct(o,e,n,t,0)}function Rm(i,e){return i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function lr(i,e){const t=[];for(let n=0;n<i.length;n++){const o=i[n],s=new Xe(o.start,o.end.offset-o.start.offset,e,0);t.push(s);for(let a=n+1;a<i.length;a++)i[a]=i[a]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}qe(Ct,Ct,(i,e,t)=>{if(i.key===e.key&&i.range.start.hasSameParentAs(e.range.start)){const n=i.range.getDifference(e.range).map(s=>new Ct(s,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new Ct(o,e.key,e.newValue,i.newValue,0)),n.length==0?[new It(0)]:n}return[i]}),qe(Ct,Tt,(i,e)=>{if(i.range.start.hasSameParentAs(e.position)&&i.range.containsPosition(e.position)){const t=i.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Ct(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(e.shouldReceiveAttributes){const n=Lm(e,i.key,i.oldValue);n&&t.unshift(n)}return t}return i.range=i.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[i]}),qe(Ct,yt,(i,e)=>{const t=[];i.range.start.hasSameParentAs(e.deletionPosition)&&(i.range.containsPosition(e.deletionPosition)||i.range.start.isEqual(e.deletionPosition))&&t.push(G._createFromPositionAndShift(e.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new Ct(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),qe(Ct,Xe,(i,e)=>function(n,o){const s=G._createFromPositionAndShift(o.sourcePosition,o.howMany);let a=null,l=[];s.containsRange(n,!0)?a=n:n.start.hasSameParentAs(s.start)?(l=n.getDifference(s),a=n.getIntersection(s)):l=[n];const u=[];for(let f of l){f=f._getTransformedByDeletion(o.sourcePosition,o.howMany);const p=o.getMovedRangeStart(),b=f.start.hasSameParentAs(p);f=f._getTransformedByInsertion(p,o.howMany,b),u.push(...f)}return a&&u.push(a._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),u}(i.range,e).map(n=>new Ct(n,i.key,i.oldValue,i.newValue,i.baseVersion))),qe(Ct,ht,(i,e)=>{if(i.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(e.splitPosition)&&i.range.containsPosition(e.splitPosition)){const t=i.clone();return t.range=new G(e.moveTargetPosition.clone(),i.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),i.range.end=e.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,t]}return i.range=i.range._getTransformedBySplitOperation(e),[i]}),qe(Tt,Ct,(i,e)=>{const t=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(i.position)){const n=Lm(i,e.key,e.newValue);n&&t.push(n)}return t}),qe(Tt,Tt,(i,e,t)=>(i.position.isEqual(e.position)&&t.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(e)),[i])),qe(Tt,Xe,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),qe(Tt,ht,(i,e)=>(i.position=i.position._getTransformedBySplitOperation(e),[i])),qe(Tt,yt,(i,e)=>(i.position=i.position._getTransformedByMergeOperation(e),[i])),qe(Xt,Tt,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(e)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(e)[0]),[i])),qe(Xt,Xt,(i,e,t)=>{if(i.name==e.name){if(!t.aIsStrong)return[new It(0)];i.oldRange=e.newRange?e.newRange.clone():null}return[i]}),qe(Xt,yt,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(e)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(e)),[i])),qe(Xt,Xe,(i,e,t)=>{if(i.oldRange&&(i.oldRange=G._createFromRanges(i.oldRange._getTransformedByMoveOperation(e))),i.newRange){if(t.abRelation){const n=G._createFromRanges(i.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=t.abRelation.path,i.newRange.end=n.end,[i];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=t.abRelation.path,[i]}i.newRange=G._createFromRanges(i.newRange._getTransformedByMoveOperation(e))}return[i]}),qe(Xt,ht,(i,e,t)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(e)),i.newRange){if(t.abRelation){const n=i.newRange._getTransformedBySplitOperation(e);return i.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?i.newRange.start=ne._createAt(e.insertionPosition):i.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(i.newRange.start=ne._createAt(e.moveTargetPosition)),i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?i.newRange.end=ne._createAt(e.moveTargetPosition):i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?i.newRange.end=ne._createAt(e.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(e)}return[i]}),qe(yt,Tt,(i,e)=>(i.sourcePosition.hasSameParentAs(e.position)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(e),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e),[i])),qe(yt,yt,(i,e,t)=>{if(i.sourcePosition.isEqual(e.sourcePosition)&&i.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new ne(e.graveyardPosition.root,n),i.howMany=0,[i]}return[new It(0)]}if(i.sourcePosition.isEqual(e.sourcePosition)&&!i.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const a=e.targetPosition._getTransformedByMergeOperation(e),l=i.targetPosition._getTransformedByMergeOperation(e);return[new Xe(a,i.howMany,l,0)]}return[new It(0)]}return i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(e),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),i.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),qe(yt,Xe,(i,e,t)=>{const n=G._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&i.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new It(0)]:(i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition.hasSameParentAs(e.sourcePosition)&&(i.howMany-=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(e),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(e),i.graveyardPosition.isEqual(e.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)),[i])}),qe(yt,ht,(i,e,t)=>{if(e.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),i.deletionPosition.isEqual(e.graveyardPosition)&&(i.howMany=e.howMany)),i.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&i.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),[i]}if(i.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i];if(t.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=e.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}return i.sourcePosition.hasSameParentAs(e.splitPosition)&&(i.howMany=e.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}),qe(Xe,Tt,(i,e)=>{const t=G._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(e,!1)[0];return i.sourcePosition=t.start,i.howMany=t.end.offset-t.start.offset,i.targetPosition.isEqual(e.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e)),[i]}),qe(Xe,Xe,(i,e,t)=>{const n=G._createFromPositionAndShift(i.sourcePosition,i.howMany),o=G._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,a=t.aIsStrong,l=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?l=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(l=!1),s=i.targetPosition.isEqual(e.targetPosition)&&l?i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):i.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Rm(i,e)&&Rm(e,i))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),lr([n],s);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),lr([n],s);const u=Ht(i.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(u=="prefix"||u=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),lr([n],s);i.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?i.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(a=!1):a=!0;const f=[],p=n.getDifference(o);for(const v of p){v.start=v.start._getTransformedByDeletion(e.sourcePosition,e.howMany),v.end=v.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const E=Ht(v.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",D=v._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,E);f.push(...D)}const b=n.getIntersection(o);return b!==null&&a&&(b.start=b.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),b.end=b.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),f.length===0?f.push(b):f.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?f.unshift(b):f.push(b):f.splice(1,0,b)),f.length===0?[new It(i.baseVersion)]:lr(f,s)}),qe(Xe,ht,(i,e,t)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(e));const o=G._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let a=new G(e.splitPosition,o.end);return a=a._getTransformedBySplitOperation(e),lr([new G(o.start,e.splitPosition),a],n)}i.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),i.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=i.targetPosition);const s=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);i.howMany>1&&a&&!t.aWasUndone&&s.push(G._createFromPositionAndShift(e.insertionPosition,1))}return lr(s,n)}),qe(Xe,yt,(i,e,t)=>{const n=G._createFromPositionAndShift(i.sourcePosition,i.howMany);if(e.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(i.type!="remove"||t.forceWeakRemove){if(i.howMany==1)return t.bWasUndone?(i.sourcePosition=e.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]):[new It(0)]}else if(!t.aWasUndone){const s=[];let a=e.graveyardPosition.clone(),l=e.targetPosition._getTransformedByMergeOperation(e);i.howMany>1&&(s.push(new Xe(i.sourcePosition,i.howMany-1,i.targetPosition,0)),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),l=l._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const u=e.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),f=new Xe(a,1,u,0),p=f.getMovedRangeStart().path.slice();p.push(0);const b=new ne(f.targetPosition.root,p);l=l._getTransformedByMove(a,u,1);const v=new Xe(l,e.howMany,b,0);return s.push(f),s.push(v),s}}const o=G._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(e);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]}),qe(en,Tt,(i,e)=>(i.position=i.position._getTransformedByInsertOperation(e),[i])),qe(en,yt,(i,e)=>i.position.isEqual(e.deletionPosition)?(i.position=e.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(e),[i])),qe(en,Xe,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),qe(en,en,(i,e,t)=>{if(i.position.isEqual(e.position)){if(!t.aIsStrong)return[new It(0)];i.oldName=e.newName}return[i]}),qe(en,ht,(i,e)=>{if(Ht(i.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new en(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,t]}return i.position=i.position._getTransformedBySplitOperation(e),[i]}),qe(ko,ko,(i,e,t)=>{if(i.root===e.root&&i.key===e.key){if(!t.aIsStrong||i.newValue===e.newValue)return[new It(0)];i.oldValue=e.newValue}return[i]}),qe(ht,Tt,(i,e)=>(i.splitPosition.hasSameParentAs(e.position)&&i.splitPosition.offset<e.position.offset&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(e),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(e),[i])),qe(ht,yt,(i,e,t)=>{if(!i.graveyardPosition&&!t.bWasUndone&&i.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new ne(e.graveyardPosition.root,n),s=ht.getInsertionPosition(new ne(e.graveyardPosition.root,n)),a=new ht(o,0,s,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=ht.getInsertionPosition(i.splitPosition),i.graveyardPosition=a.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[a,i]}return i.splitPosition.hasSameParentAs(e.deletionPosition)&&!i.splitPosition.isAfter(e.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=ht.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),qe(ht,Xe,(i,e,t)=>{const n=G._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.graveyardPosition){const s=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!t.bWasUndone&&s){const a=i.splitPosition._getTransformedByMoveOperation(e),l=i.graveyardPosition._getTransformedByMoveOperation(e),u=l.path.slice();u.push(0);const f=new ne(l.root,u);return[new Xe(a,i.howMany,f,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)}const o=i.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return i.howMany+=e.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),i.insertionPosition=ht.getInsertionPosition(i.splitPosition),[i];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:a}=t.abRelation;return i.howMany+=s,i.splitPosition=i.splitPosition.getShiftedBy(a),[i]}if(i.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.splitPosition)){const s=e.howMany-(i.splitPosition.offset-e.sourcePosition.offset);return i.howMany-=s,i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany),i.splitPosition=e.sourcePosition.clone(),i.insertionPosition=ht.getInsertionPosition(i.splitPosition),[i]}return e.sourcePosition.isEqual(e.targetPosition)||(i.splitPosition.hasSameParentAs(e.sourcePosition)&&i.splitPosition.offset<=e.sourcePosition.offset&&(i.howMany-=e.howMany),i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(e),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(e):i.insertionPosition=ht.getInsertionPosition(i.splitPosition),[i]}),qe(ht,ht,(i,e,t)=>{if(i.splitPosition.isEqual(e.splitPosition)){if(!i.graveyardPosition&&!e.graveyardPosition)return[new It(0)];if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition))return[new It(0)];if(t.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e),[i]}if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const a=[];return e.howMany&&a.push(new Xe(e.moveTargetPosition,e.howMany,e.splitPosition,0)),i.howMany&&a.push(new Xe(i.splitPosition,i.howMany,i.moveTargetPosition,0)),a}return[new It(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e)),i.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return i.howMany++,[i];if(e.splitPosition.isEqual(i.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new ne(e.insertionPosition.root,n);return[i,new Xe(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(e.splitPosition)&&i.splitPosition.offset<e.splitPosition.offset&&(i.howMany-=e.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(e),i.insertionPosition=ht.getInsertionPosition(i.splitPosition),[i]});class tD extends Bo{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class Ma extends Bo{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class dr{constructor(e){this.document=e}createDocumentFragment(e){return new mi(this.document,e)}createElement(e,t,n){return new wn(this.document,e,t,n)}createText(e){return new it(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new wn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Vt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return ue._createAt(e,t)}createPositionAfter(e){return ue._createAfter(e)}createPositionBefore(e){return ue._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Tn(e,t,n)}}class nD extends Np{constructor(e,t){super(e),this.view=t,this._toolbarConfig=am(e.config.get("toolbar")),this._elementReplacer=new nx}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,s=n.editable,a=o.document.getRoot();s.name=a.rootName,n.render();const l=s.element;this.setEditableElement(s.name,l),this.focusTracker.add(l),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(l),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,n=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:s,originFocusTracker:a,toolbar:l,beforeFocus:u,afterBlur:f}){a.add(l.element),s.set("Alt+F10",(p,b)=>{a.isFocused&&!l.focusTracker.isFocused&&(u&&u(),l.focus(),b())}),l.keystrokes.set("Esc",(p,b)=>{l.focusTracker.isFocused&&(o.focus(),f&&f(),b())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,s=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");s&&Im({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}var zm=g(3143),oD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(zm.Z,oD),zm.Z.locals;class iD extends NE{constructor(e,t,n={}){super(e),this.stickyPanel=new GE(e),this.toolbar=new dd(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new OE(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class bd extends Pp{constructor(e,t={}){if(!ui(e)&&t.initialData!==void 0)throw new A("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return ui(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(e)),ui(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new iD(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new nD(this,o),function(s){if(!ai(s.updateSourceElement))throw new A("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(a&&a.tagName.toLowerCase()==="textarea"&&a.form){let l;const u=a.form,f=()=>s.updateSourceElement();ai(u.submit)&&(l=u.submit,u.submit=()=>{f(),l.apply(u)}),u.addEventListener("submit",f),s.on("destroy",()=>{u.removeEventListener("submit",f),l&&(u.submit=l)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(ui(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}Q(bd,oE),Q(bd,rE);class rD{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class wd extends Bo{constructor(e){super(e);const t=this.document;function n(o){return(s,a)=>{a.preventDefault();const l=a.dropRange?[a.dropRange]:null,u=new _(t,o);t.fire(u,{dataTransfer:a.dataTransfer,method:s.name,targetRanges:l,target:a.target}),u.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new rD(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const s=o.target.ownerDocument,a=o.clientX,l=o.clientY;let u;return s.caretRangeFromPoint&&s.caretRangeFromPoint(a,l)?u=s.caretRangeFromPoint(a,l):o.rangeParent&&(u=s.createRange(),u.setStart(o.rangeParent,o.rangeOffset),u.collapse(!0)),u?n.domConverter.domRangeToView(u):null}(this.view,e)),this.fire(e.type,e,t)}}const jm=["figcaption","li"];function Fm(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=Fm(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(jm.includes(t.name)||jm.includes(n.name)?e+=`
`:e+=`
