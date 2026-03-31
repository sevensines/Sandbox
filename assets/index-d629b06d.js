function Sp(t,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in t)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(t,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function kp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hc={exports:{}},Ul={},Gc={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tr=Symbol.for("react.element"),Ip=Symbol.for("react.portal"),zp=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),Dp=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Up=Symbol.for("react.forward_ref"),Rp=Symbol.for("react.suspense"),Tp=Symbol.for("react.memo"),Fp=Symbol.for("react.lazy"),ed=Symbol.iterator;function Pp(t){return t===null||typeof t!="object"?null:(t=ed&&t[ed]||t["@@iterator"],typeof t=="function"?t:null)}var Bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Lc={};function $i(t,i,n){this.props=t,this.context=i,this.refs=Lc,this.updater=n||Bc}$i.prototype.isReactComponent={};$i.prototype.setState=function(t,i){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,i,"setState")};$i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wc(){}Wc.prototype=$i.prototype;function Vs(t,i,n){this.props=t,this.context=i,this.refs=Lc,this.updater=n||Bc}var Xs=Vs.prototype=new Wc;Xs.constructor=Vs;Zc(Xs,$i.prototype);Xs.isPureReactComponent=!0;var td=Array.isArray,Oc=Object.prototype.hasOwnProperty,Ks={current:null},Yc={key:!0,ref:!0,__self:!0,__source:!0};function Qc(t,i,n){var r,l={},o=null,s=null;if(i!=null)for(r in i.ref!==void 0&&(s=i.ref),i.key!==void 0&&(o=""+i.key),i)Oc.call(i,r)&&!Yc.hasOwnProperty(r)&&(l[r]=i[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];l.children=d}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:tr,type:t,key:o,ref:s,props:l,_owner:Ks.current}}function Cp(t,i){return{$$typeof:tr,type:t.type,key:i,ref:t.ref,props:t.props,_owner:t._owner}}function qs(t){return typeof t=="object"&&t!==null&&t.$$typeof===tr}function Hp(t){var i={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return i[n]})}var id=/\/+/g;function lo(t,i){return typeof t=="object"&&t!==null&&t.key!=null?Hp(""+t.key):i.toString(36)}function Cr(t,i,n,r,l){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case tr:case Ip:s=!0}}if(s)return s=t,l=l(s),t=r===""?"."+lo(s,0):r,td(l)?(n="",t!=null&&(n=t.replace(id,"$&/")+"/"),Cr(l,i,n,"",function(c){return c})):l!=null&&(qs(l)&&(l=Cp(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(id,"$&/")+"/")+t)),i.push(l)),1;if(s=0,r=r===""?".":r+":",td(t))for(var a=0;a<t.length;a++){o=t[a];var d=r+lo(o,a);s+=Cr(o,i,n,d,l)}else if(d=Pp(t),typeof d=="function")for(t=d.call(t),a=0;!(o=t.next()).done;)o=o.value,d=r+lo(o,a++),s+=Cr(o,i,n,d,l);else if(o==="object")throw i=String(t),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return s}function fr(t,i,n){if(t==null)return t;var r=[],l=0;return Cr(t,r,"","",function(o){return i.call(n,o,l++)}),r}function Gp(t){if(t._status===-1){var i=t._result;i=i(),i.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=i)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},Hr={transition:null},Bp={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:Hr,ReactCurrentOwner:Ks};P.Children={map:fr,forEach:function(t,i,n){fr(t,function(){i.apply(this,arguments)},n)},count:function(t){var i=0;return fr(t,function(){i++}),i},toArray:function(t){return fr(t,function(i){return i})||[]},only:function(t){if(!qs(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};P.Component=$i;P.Fragment=zp;P.Profiler=Mp;P.PureComponent=Vs;P.StrictMode=Ep;P.Suspense=Rp;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bp;P.cloneElement=function(t,i,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zc({},t.props),l=t.key,o=t.ref,s=t._owner;if(i!=null){if(i.ref!==void 0&&(o=i.ref,s=Ks.current),i.key!==void 0&&(l=""+i.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(d in i)Oc.call(i,d)&&!Yc.hasOwnProperty(d)&&(r[d]=i[d]===void 0&&a!==void 0?a[d]:i[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tr,type:t.type,key:l,ref:o,props:r,_owner:s}};P.createContext=function(t){return t={$$typeof:Np,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dp,_context:t},t.Consumer=t};P.createElement=Qc;P.createFactory=function(t){var i=Qc.bind(null,t);return i.type=t,i};P.createRef=function(){return{current:null}};P.forwardRef=function(t){return{$$typeof:Up,render:t}};P.isValidElement=qs;P.lazy=function(t){return{$$typeof:Fp,_payload:{_status:-1,_result:t},_init:Gp}};P.memo=function(t,i){return{$$typeof:Tp,type:t,compare:i===void 0?null:i}};P.startTransition=function(t){var i=Hr.transition;Hr.transition={};try{t()}finally{Hr.transition=i}};P.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};P.useCallback=function(t,i){return we.current.useCallback(t,i)};P.useContext=function(t){return we.current.useContext(t)};P.useDebugValue=function(){};P.useDeferredValue=function(t){return we.current.useDeferredValue(t)};P.useEffect=function(t,i){return we.current.useEffect(t,i)};P.useId=function(){return we.current.useId()};P.useImperativeHandle=function(t,i,n){return we.current.useImperativeHandle(t,i,n)};P.useInsertionEffect=function(t,i){return we.current.useInsertionEffect(t,i)};P.useLayoutEffect=function(t,i){return we.current.useLayoutEffect(t,i)};P.useMemo=function(t,i){return we.current.useMemo(t,i)};P.useReducer=function(t,i,n){return we.current.useReducer(t,i,n)};P.useRef=function(t){return we.current.useRef(t)};P.useState=function(t){return we.current.useState(t)};P.useSyncExternalStore=function(t,i,n){return we.current.useSyncExternalStore(t,i,n)};P.useTransition=function(){return we.current.useTransition()};P.version="18.2.0";Gc.exports=P;var z=Gc.exports;const Hi=kp(z),Zp=Sp({__proto__:null,default:Hi},[z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp=z,Wp=Symbol.for("react.element"),Op=Symbol.for("react.fragment"),Yp=Object.prototype.hasOwnProperty,Qp=Lp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jp={key:!0,ref:!0,__self:!0,__source:!0};function Jc(t,i,n){var r,l={},o=null,s=null;n!==void 0&&(o=""+n),i.key!==void 0&&(o=""+i.key),i.ref!==void 0&&(s=i.ref);for(r in i)Yp.call(i,r)&&!Jp.hasOwnProperty(r)&&(l[r]=i[r]);if(t&&t.defaultProps)for(r in i=t.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:Wp,type:t,key:o,ref:s,props:l,_owner:Qp.current}}Ul.Fragment=Op;Ul.jsx=Jc;Ul.jsxs=Jc;Hc.exports=Ul;var e=Hc.exports,Oo={},Vc={exports:{}},Ce={},Xc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function i(E,U){var R=E.length;E.push(U);e:for(;0<R;){var Z=R-1>>>1,L=E[Z];if(0<l(L,U))E[Z]=U,E[R]=L,R=Z;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var U=E[0],R=E.pop();if(R!==U){E[0]=R;e:for(var Z=0,L=E.length,Vt=L>>>1;Z<Vt;){var Qe=2*(Z+1)-1,yt=E[Qe],Ue=Qe+1,st=E[Ue];if(0>l(yt,R))Ue<L&&0>l(st,yt)?(E[Z]=st,E[Ue]=R,Z=Ue):(E[Z]=yt,E[Qe]=R,Z=Qe);else if(Ue<L&&0>l(st,R))E[Z]=st,E[Ue]=R,Z=Ue;else break e}}return U}function l(E,U){var R=E.sortIndex-U.sortIndex;return R!==0?R:E.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var d=[],c=[],g=1,u=null,x=3,y=!1,j=!1,w=!1,I=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(E){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=E)r(c),U.sortIndex=U.expirationTime,i(d,U);else break;U=n(c)}}function m(E){if(w=!1,A(E),!j)if(n(d)!==null)j=!0,an(S);else{var U=n(c);U!==null&&Jt(m,U.startTime-E)}}function S(E,U){j=!1,w&&(w=!1,h(D),D=-1),y=!0;var R=x;try{for(A(U),u=n(d);u!==null&&(!(u.expirationTime>U)||E&&!Ne());){var Z=u.callback;if(typeof Z=="function"){u.callback=null,x=u.priorityLevel;var L=Z(u.expirationTime<=U);U=t.unstable_now(),typeof L=="function"?u.callback=L:u===n(d)&&r(d),A(U)}else r(d);u=n(d)}if(u!==null)var Vt=!0;else{var Qe=n(c);Qe!==null&&Jt(m,Qe.startTime-U),Vt=!1}return Vt}finally{u=null,x=R,y=!1}}var k=!1,b=null,D=-1,Q=5,F=-1;function Ne(){return!(t.unstable_now()-F<Q)}function Yt(){if(b!==null){var E=t.unstable_now();F=E;var U=!0;try{U=b(!0,E)}finally{U?Qt():(k=!1,b=null)}}else k=!1}var Qt;if(typeof f=="function")Qt=function(){f(Yt)};else if(typeof MessageChannel<"u"){var dr=new MessageChannel,no=dr.port2;dr.port1.onmessage=Yt,Qt=function(){no.postMessage(null)}}else Qt=function(){I(Yt,0)};function an(E){b=E,k||(k=!0,Qt())}function Jt(E,U){D=I(function(){E(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_continueExecution=function(){j||y||(j=!0,an(S))},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_getFirstCallbackNode=function(){return n(d)},t.unstable_next=function(E){switch(x){case 1:case 2:case 3:var U=3;break;default:U=x}var R=x;x=U;try{return E()}finally{x=R}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(E,U){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=x;x=E;try{return U()}finally{x=R}},t.unstable_scheduleCallback=function(E,U,R){var Z=t.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Z+R:Z):R=Z,E){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=R+L,E={id:g++,callback:U,priorityLevel:E,startTime:R,expirationTime:L,sortIndex:-1},R>Z?(E.sortIndex=R,i(c,E),n(d)===null&&E===n(c)&&(w?(h(D),D=-1):w=!0,Jt(m,R-Z))):(E.sortIndex=L,i(d,E),j||y||(j=!0,an(S))),E},t.unstable_shouldYield=Ne,t.unstable_wrapCallback=function(E){var U=x;return function(){var R=x;x=U;try{return E.apply(this,arguments)}finally{x=R}}}})(Kc);Xc.exports=Kc;var Vp=Xc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=z,Pe=Vp;function v(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)i+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _c=new Set,Fn={};function hi(t,i){Gi(t,i),Gi(t+"Capture",i)}function Gi(t,i){for(Fn[t]=i,t=0;t<i.length;t++)_c.add(i[t])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yo=Object.prototype.hasOwnProperty,Xp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nd={},rd={};function Kp(t){return Yo.call(rd,t)?!0:Yo.call(nd,t)?!1:Xp.test(t)?rd[t]=!0:(nd[t]=!0,!1)}function qp(t,i,n,r){if(n!==null&&n.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _p(t,i,n,r){if(i===null||typeof i>"u"||qp(t,i,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function be(t,i,n,r,l,o,s){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=t,this.type=i,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];Ae[i]=new be(i,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new be(t,5,!1,t.toLowerCase(),null,!1,!1)});var _s=/[\-:]([a-z])/g;function $s(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_s,$s);Ae[i]=new be(i,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_s,$s);Ae[i]=new be(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_s,$s);Ae[i]=new be(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new be(t,1,!1,t.toLowerCase(),null,!0,!0)});function ea(t,i,n,r){var l=Ae.hasOwnProperty(i)?Ae[i]:null;(l!==null?l.type!==0:r||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(_p(i,n,l,r)&&(n=null),r||l===null?Kp(i)&&(n===null?t.removeAttribute(i):t.setAttribute(i,""+n)):l.mustUseProperty?t[l.propertyName]=n===null?l.type===3?!1:"":n:(i=l.attributeName,r=l.attributeNamespace,n===null?t.removeAttribute(i):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?t.setAttributeNS(r,i,n):t.setAttribute(i,n))))}var mt=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hr=Symbol.for("react.element"),yi=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),ta=Symbol.for("react.strict_mode"),Qo=Symbol.for("react.profiler"),$c=Symbol.for("react.provider"),ef=Symbol.for("react.context"),ia=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),Vo=Symbol.for("react.suspense_list"),na=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),tf=Symbol.for("react.offscreen"),ld=Symbol.iterator;function cn(t){return t===null||typeof t!="object"?null:(t=ld&&t[ld]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,oo;function jn(t){if(oo===void 0)try{throw Error()}catch(n){var i=n.stack.trim().match(/\n( *(at )?)/);oo=i&&i[1]||""}return`
`+oo+t}var so=!1;function ao(t,i){if(!t||so)return"";so=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(c){var r=c}Reflect.construct(t,[],i)}else{try{i.call()}catch(c){r=c}t.call(i.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,a=o.length-1;1<=s&&0<=a&&l[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==o[a]){var d=`
`+l[s].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=s&&0<=a);break}}}finally{so=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?jn(t):""}function $p(t){switch(t.tag){case 5:return jn(t.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return t=ao(t.type,!1),t;case 11:return t=ao(t.type.render,!1),t;case 1:return t=ao(t.type,!0),t;default:return""}}function Xo(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ji:return"Fragment";case yi:return"Portal";case Qo:return"Profiler";case ta:return"StrictMode";case Jo:return"Suspense";case Vo:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ef:return(t.displayName||"Context")+".Consumer";case $c:return(t._context.displayName||"Context")+".Provider";case ia:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case na:return i=t.displayName||null,i!==null?i:Xo(t.type)||"Memo";case vt:i=t._payload,t=t._init;try{return Xo(t(i))}catch{}}return null}function eA(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xo(i);case 8:return i===ta?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Gt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nf(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function tA(t){var i=nf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),r=""+t[i];if(!t.hasOwnProperty(i)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,i,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function pr(t){t._valueTracker||(t._valueTracker=tA(t))}function rf(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var n=i.getValue(),r="";return t&&(r=nf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(i.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ko(t,i){var n=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function od(t,i){var n=i.defaultValue==null?"":i.defaultValue,r=i.checked!=null?i.checked:i.defaultChecked;n=Gt(i.value!=null?i.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lf(t,i){i=i.checked,i!=null&&ea(t,"checked",i,!1)}function qo(t,i){lf(t,i);var n=Gt(i.value),r=i.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?_o(t,i.type,n):i.hasOwnProperty("defaultValue")&&_o(t,i.type,Gt(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function sd(t,i,n){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var r=i.type;if(!(r!=="submit"&&r!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,n||i===t.value||(t.value=i),t.defaultValue=i}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _o(t,i,n){(i!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var wn=Array.isArray;function Ui(t,i,n,r){if(t=t.options,i){i={};for(var l=0;l<n.length;l++)i["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=i.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gt(n),i=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}i!==null||t[l].disabled||(i=t[l])}i!==null&&(i.selected=!0)}}function $o(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(v(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ad(t,i){var n=i.value;if(n==null){if(n=i.children,i=i.defaultValue,n!=null){if(i!=null)throw Error(v(92));if(wn(n)){if(1<n.length)throw Error(v(93));n=n[0]}i=n}i==null&&(i=""),n=i}t._wrapperState={initialValue:Gt(n)}}function of(t,i){var n=Gt(i.value),r=Gt(i.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),i.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dd(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function sf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function es(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?sf(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ar,af=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,n,r,l){MSApp.execUnsafeLocalFunction(function(){return t(i,n,r,l)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ar=Ar||document.createElement("div"),Ar.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ar.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Pn(t,i){if(i){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=i;return}}t.textContent=i}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iA=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(t){iA.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),kn[i]=kn[t]})});function df(t,i,n){return i==null||typeof i=="boolean"||i===""?"":n||typeof i!="number"||i===0||kn.hasOwnProperty(t)&&kn[t]?(""+i).trim():i+"px"}function cf(t,i){t=t.style;for(var n in i)if(i.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=df(n,i[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,l):t[n]=l}}var nA=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ts(t,i){if(i){if(nA[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(v(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(v(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(v(61))}if(i.style!=null&&typeof i.style!="object")throw Error(v(62))}}function is(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ns=null;function ra(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,Ri=null,Ti=null;function cd(t){if(t=rr(t)){if(typeof rs!="function")throw Error(v(280));var i=t.stateNode;i&&(i=Cl(i),rs(t.stateNode,t.type,i))}}function ff(t){Ri?Ti?Ti.push(t):Ti=[t]:Ri=t}function hf(){if(Ri){var t=Ri,i=Ti;if(Ti=Ri=null,cd(t),i)for(t=0;t<i.length;t++)cd(i[t])}}function pf(t,i){return t(i)}function Af(){}var co=!1;function uf(t,i,n){if(co)return t(i,n);co=!0;try{return pf(t,i,n)}finally{co=!1,(Ri!==null||Ti!==null)&&(Af(),hf())}}function Cn(t,i){var n=t.stateNode;if(n===null)return null;var r=Cl(n);if(r===null)return null;n=r[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(v(231,i,typeof n));return n}var ls=!1;if(At)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){ls=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{ls=!1}function rA(t,i,n,r,l,o,s,a,d){var c=Array.prototype.slice.call(arguments,3);try{i.apply(n,c)}catch(g){this.onError(g)}}var In=!1,nl=null,rl=!1,os=null,lA={onError:function(t){In=!0,nl=t}};function oA(t,i,n,r,l,o,s,a,d){In=!1,nl=null,rA.apply(lA,arguments)}function sA(t,i,n,r,l,o,s,a,d){if(oA.apply(this,arguments),In){if(In){var c=nl;In=!1,nl=null}else throw Error(v(198));rl||(rl=!0,os=c)}}function pi(t){var i=t,n=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(n=i.return),t=i.return;while(t)}return i.tag===3?n:null}function gf(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function fd(t){if(pi(t)!==t)throw Error(v(188))}function aA(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(v(188));return i!==t?null:t}for(var n=t,r=i;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return fd(l),t;if(o===r)return fd(l),i;o=o.sibling}throw Error(v(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s)throw Error(v(189))}}if(n.alternate!==r)throw Error(v(190))}if(n.tag!==3)throw Error(v(188));return n.stateNode.current===n?t:i}function xf(t){return t=aA(t),t!==null?mf(t):null}function mf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=mf(t);if(i!==null)return i;t=t.sibling}return null}var yf=Pe.unstable_scheduleCallback,hd=Pe.unstable_cancelCallback,dA=Pe.unstable_shouldYield,cA=Pe.unstable_requestPaint,ne=Pe.unstable_now,fA=Pe.unstable_getCurrentPriorityLevel,la=Pe.unstable_ImmediatePriority,jf=Pe.unstable_UserBlockingPriority,ll=Pe.unstable_NormalPriority,hA=Pe.unstable_LowPriority,wf=Pe.unstable_IdlePriority,Rl=null,lt=null;function pA(t){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:gA,AA=Math.log,uA=Math.LN2;function gA(t){return t>>>=0,t===0?32:31-(AA(t)/uA|0)|0}var ur=64,gr=4194304;function bn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,i){var n=t.pendingLanes;if(n===0)return 0;var r=0,l=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=bn(a):(o&=s,o!==0&&(r=bn(o)))}else s=n&~l,s!==0?r=bn(s):o!==0&&(r=bn(o));if(r===0)return 0;if(i!==0&&i!==r&&!(i&l)&&(l=r&-r,o=i&-i,l>=o||l===16&&(o&4194240)!==0))return i;if(r&4&&(r|=n&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=r;0<i;)n=31-qe(i),l=1<<n,r|=t[n],i&=~l;return r}function xA(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mA(t,i){for(var n=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,d=l[s];d===-1?(!(a&n)||a&r)&&(l[s]=xA(a,i)):d<=i&&(t.expiredLanes|=a),o&=~a}}function ss(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bf(){var t=ur;return ur<<=1,!(ur&4194240)&&(ur=64),t}function fo(t){for(var i=[],n=0;31>n;n++)i.push(t);return i}function ir(t,i,n){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-qe(i),t[i]=n}function yA(t,i){var n=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var l=31-qe(n),o=1<<l;i[l]=0,r[l]=-1,t[l]=-1,n&=~o}}function oa(t,i){var n=t.entangledLanes|=i;for(t=t.entanglements;n;){var r=31-qe(n),l=1<<r;l&i|t[r]&i&&(t[r]|=i),n&=~l}}var B=0;function vf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sf,sa,kf,If,zf,as=!1,xr=[],Dt=null,Nt=null,Ut=null,Hn=new Map,Gn=new Map,kt=[],jA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(t,i){switch(t){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Hn.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(i.pointerId)}}function hn(t,i,n,r,l,o){return t===null||t.nativeEvent!==o?(t={blockedOn:i,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},i!==null&&(i=rr(i),i!==null&&sa(i)),t):(t.eventSystemFlags|=r,i=t.targetContainers,l!==null&&i.indexOf(l)===-1&&i.push(l),t)}function wA(t,i,n,r,l){switch(i){case"focusin":return Dt=hn(Dt,t,i,n,r,l),!0;case"dragenter":return Nt=hn(Nt,t,i,n,r,l),!0;case"mouseover":return Ut=hn(Ut,t,i,n,r,l),!0;case"pointerover":var o=l.pointerId;return Hn.set(o,hn(Hn.get(o)||null,t,i,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Gn.set(o,hn(Gn.get(o)||null,t,i,n,r,l)),!0}return!1}function Ef(t){var i=$t(t.target);if(i!==null){var n=pi(i);if(n!==null){if(i=n.tag,i===13){if(i=gf(n),i!==null){t.blockedOn=i,zf(t.priority,function(){kf(n)});return}}else if(i===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gr(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var n=ds(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ns=r,n.target.dispatchEvent(r),ns=null}else return i=rr(n),i!==null&&sa(i),t.blockedOn=n,!1;i.shift()}return!0}function Ad(t,i,n){Gr(t)&&n.delete(i)}function bA(){as=!1,Dt!==null&&Gr(Dt)&&(Dt=null),Nt!==null&&Gr(Nt)&&(Nt=null),Ut!==null&&Gr(Ut)&&(Ut=null),Hn.forEach(Ad),Gn.forEach(Ad)}function pn(t,i){t.blockedOn===i&&(t.blockedOn=null,as||(as=!0,Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority,bA)))}function Bn(t){function i(l){return pn(l,t)}if(0<xr.length){pn(xr[0],t);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dt!==null&&pn(Dt,t),Nt!==null&&pn(Nt,t),Ut!==null&&pn(Ut,t),Hn.forEach(i),Gn.forEach(i),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Ef(n),n.blockedOn===null&&kt.shift()}var Fi=mt.ReactCurrentBatchConfig,sl=!0;function vA(t,i,n,r){var l=B,o=Fi.transition;Fi.transition=null;try{B=1,aa(t,i,n,r)}finally{B=l,Fi.transition=o}}function SA(t,i,n,r){var l=B,o=Fi.transition;Fi.transition=null;try{B=4,aa(t,i,n,r)}finally{B=l,Fi.transition=o}}function aa(t,i,n,r){if(sl){var l=ds(t,i,n,r);if(l===null)wo(t,i,r,al,n),pd(t,r);else if(wA(l,t,i,n,r))r.stopPropagation();else if(pd(t,r),i&4&&-1<jA.indexOf(t)){for(;l!==null;){var o=rr(l);if(o!==null&&Sf(o),o=ds(t,i,n,r),o===null&&wo(t,i,r,al,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else wo(t,i,r,null,n)}}var al=null;function ds(t,i,n,r){if(al=null,t=ra(r),t=$t(t),t!==null)if(i=pi(t),i===null)t=null;else if(n=i.tag,n===13){if(t=gf(i),t!==null)return t;t=null}else if(n===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return al=t,null}function Mf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fA()){case la:return 1;case jf:return 4;case ll:case hA:return 16;case wf:return 536870912;default:return 16}default:return 16}}var zt=null,da=null,Br=null;function Df(){if(Br)return Br;var t,i=da,n=i.length,r,l="value"in zt?zt.value:zt.textContent,o=l.length;for(t=0;t<n&&i[t]===l[t];t++);var s=n-t;for(r=1;r<=s&&i[n-r]===l[o-r];r++);return Br=l.slice(t,1<r?1-r:void 0)}function Zr(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function mr(){return!0}function ud(){return!1}function He(t){function i(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mr:ud,this.isPropagationStopped=ud,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),i}var en={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=He(en),nr=ee({},en,{view:0,detail:0}),kA=He(nr),ho,po,An,Tl=ee({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==An&&(An&&t.type==="mousemove"?(ho=t.screenX-An.screenX,po=t.screenY-An.screenY):po=ho=0,An=t),ho)},movementY:function(t){return"movementY"in t?t.movementY:po}}),gd=He(Tl),IA=ee({},Tl,{dataTransfer:0}),zA=He(IA),EA=ee({},nr,{relatedTarget:0}),Ao=He(EA),MA=ee({},en,{animationName:0,elapsedTime:0,pseudoElement:0}),DA=He(MA),NA=ee({},en,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),UA=He(NA),RA=ee({},en,{data:0}),xd=He(RA),TA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FA={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CA(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=PA[t])?!!i[t]:!1}function fa(){return CA}var HA=ee({},nr,{key:function(t){if(t.key){var i=TA[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zr(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FA[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(t){return t.type==="keypress"?Zr(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zr(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GA=He(HA),BA=ee({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=He(BA),ZA=ee({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),LA=He(ZA),WA=ee({},en,{propertyName:0,elapsedTime:0,pseudoElement:0}),OA=He(WA),YA=ee({},Tl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QA=He(YA),JA=[9,13,27,32],ha=At&&"CompositionEvent"in window,zn=null;At&&"documentMode"in document&&(zn=document.documentMode);var VA=At&&"TextEvent"in window&&!zn,Nf=At&&(!ha||zn&&8<zn&&11>=zn),yd=String.fromCharCode(32),jd=!1;function Uf(t,i){switch(t){case"keyup":return JA.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wi=!1;function XA(t,i){switch(t){case"compositionend":return Rf(i);case"keypress":return i.which!==32?null:(jd=!0,yd);case"textInput":return t=i.data,t===yd&&jd?null:t;default:return null}}function KA(t,i){if(wi)return t==="compositionend"||!ha&&Uf(t,i)?(t=Df(),Br=da=zt=null,wi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nf&&i.locale!=="ko"?null:i.data;default:return null}}var qA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!qA[t.type]:i==="textarea"}function Tf(t,i,n,r){ff(r),i=dl(i,"onChange"),0<i.length&&(n=new ca("onChange","change",null,n,r),t.push({event:n,listeners:i}))}var En=null,Zn=null;function _A(t){Yf(t,0)}function Fl(t){var i=Si(t);if(rf(i))return t}function $A(t,i){if(t==="change")return i}var Ff=!1;if(At){var uo;if(At){var go="oninput"in document;if(!go){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),go=typeof bd.oninput=="function"}uo=go}else uo=!1;Ff=uo&&(!document.documentMode||9<document.documentMode)}function vd(){En&&(En.detachEvent("onpropertychange",Pf),Zn=En=null)}function Pf(t){if(t.propertyName==="value"&&Fl(Zn)){var i=[];Tf(i,Zn,t,ra(t)),uf(_A,i)}}function eu(t,i,n){t==="focusin"?(vd(),En=i,Zn=n,En.attachEvent("onpropertychange",Pf)):t==="focusout"&&vd()}function tu(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(Zn)}function iu(t,i){if(t==="click")return Fl(i)}function nu(t,i){if(t==="input"||t==="change")return Fl(i)}function ru(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var et=typeof Object.is=="function"?Object.is:ru;function Ln(t,i){if(et(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var n=Object.keys(t),r=Object.keys(i);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Yo.call(i,l)||!et(t[l],i[l]))return!1}return!0}function Sd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kd(t,i){var n=Sd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=i&&r>=i)return{node:n,offset:i-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sd(n)}}function Cf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Cf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Hf(){for(var t=window,i=il();i instanceof t.HTMLIFrameElement;){try{var n=typeof i.contentWindow.location.href=="string"}catch{n=!1}if(n)t=i.contentWindow;else break;i=il(t.document)}return i}function pa(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function lu(t){var i=Hf(),n=t.focusedElem,r=t.selectionRange;if(i!==n&&n&&n.ownerDocument&&Cf(n.ownerDocument.documentElement,n)){if(r!==null&&pa(n)){if(i=r.start,t=r.end,t===void 0&&(t=i),"selectionStart"in n)n.selectionStart=i,n.selectionEnd=Math.min(t,n.value.length);else if(t=(i=n.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!t.extend&&o>r&&(l=r,r=o,o=l),l=kd(n,o);var s=kd(n,r);l&&s&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(i=i.createRange(),i.setStart(l.node,l.offset),t.removeAllRanges(),o>r?(t.addRange(i),t.extend(s.node,s.offset)):(i.setEnd(s.node,s.offset),t.addRange(i)))}}for(i=[],t=n;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<i.length;n++)t=i[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ou=At&&"documentMode"in document&&11>=document.documentMode,bi=null,cs=null,Mn=null,fs=!1;function Id(t,i,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fs||bi==null||bi!==il(r)||(r=bi,"selectionStart"in r&&pa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mn&&Ln(Mn,r)||(Mn=r,r=dl(cs,"onSelect"),0<r.length&&(i=new ca("onSelect","select",null,i,n),t.push({event:i,listeners:r}),i.target=bi)))}function yr(t,i){var n={};return n[t.toLowerCase()]=i.toLowerCase(),n["Webkit"+t]="webkit"+i,n["Moz"+t]="moz"+i,n}var vi={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},xo={},Gf={};At&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Pl(t){if(xo[t])return xo[t];if(!vi[t])return t;var i=vi[t],n;for(n in i)if(i.hasOwnProperty(n)&&n in Gf)return xo[t]=i[n];return t}var Bf=Pl("animationend"),Zf=Pl("animationiteration"),Lf=Pl("animationstart"),Wf=Pl("transitionend"),Of=new Map,zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(t,i){Of.set(t,i),hi(i,[t])}for(var mo=0;mo<zd.length;mo++){var yo=zd[mo],su=yo.toLowerCase(),au=yo[0].toUpperCase()+yo.slice(1);Zt(su,"on"+au)}Zt(Bf,"onAnimationEnd");Zt(Zf,"onAnimationIteration");Zt(Lf,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Wf,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),du=new Set("cancel close invalid load scroll toggle".split(" ").concat(vn));function Ed(t,i,n){var r=t.type||"unknown-event";t.currentTarget=n,sA(r,i,void 0,t),t.currentTarget=null}function Yf(t,i){i=(i&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],l=r.event;r=r.listeners;e:{var o=void 0;if(i)for(var s=r.length-1;0<=s;s--){var a=r[s],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==o&&l.isPropagationStopped())break e;Ed(l,a,c),o=d}else for(s=0;s<r.length;s++){if(a=r[s],d=a.instance,c=a.currentTarget,a=a.listener,d!==o&&l.isPropagationStopped())break e;Ed(l,a,c),o=d}}}if(rl)throw t=os,rl=!1,os=null,t}function V(t,i){var n=i[gs];n===void 0&&(n=i[gs]=new Set);var r=t+"__bubble";n.has(r)||(Qf(i,t,2,!1),n.add(r))}function jo(t,i,n){var r=0;i&&(r|=4),Qf(n,t,r,i)}var jr="_reactListening"+Math.random().toString(36).slice(2);function Wn(t){if(!t[jr]){t[jr]=!0,_c.forEach(function(n){n!=="selectionchange"&&(du.has(n)||jo(n,!1,t),jo(n,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[jr]||(i[jr]=!0,jo("selectionchange",!1,i))}}function Qf(t,i,n,r){switch(Mf(i)){case 1:var l=vA;break;case 4:l=SA;break;default:l=aa}n=l.bind(null,i,n,t),l=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(i,n,{capture:!0,passive:l}):t.addEventListener(i,n,!0):l!==void 0?t.addEventListener(i,n,{passive:l}):t.addEventListener(i,n,!1)}function wo(t,i,n,r,l){var o=r;if(!(i&1)&&!(i&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;s=s.return}for(;a!==null;){if(s=$t(a),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}a=a.parentNode}}r=r.return}uf(function(){var c=o,g=ra(n),u=[];e:{var x=Of.get(t);if(x!==void 0){var y=ca,j=t;switch(t){case"keypress":if(Zr(n)===0)break e;case"keydown":case"keyup":y=GA;break;case"focusin":j="focus",y=Ao;break;case"focusout":j="blur",y=Ao;break;case"beforeblur":case"afterblur":y=Ao;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=LA;break;case Bf:case Zf:case Lf:y=DA;break;case Wf:y=OA;break;case"scroll":y=kA;break;case"wheel":y=QA;break;case"copy":case"cut":case"paste":y=UA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=md}var w=(i&4)!==0,I=!w&&t==="scroll",h=w?x!==null?x+"Capture":null:x;w=[];for(var f=c,A;f!==null;){A=f;var m=A.stateNode;if(A.tag===5&&m!==null&&(A=m,h!==null&&(m=Cn(f,h),m!=null&&w.push(On(f,m,A)))),I)break;f=f.return}0<w.length&&(x=new y(x,j,null,n,g),u.push({event:x,listeners:w}))}}if(!(i&7)){e:{if(x=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",x&&n!==ns&&(j=n.relatedTarget||n.fromElement)&&($t(j)||j[ut]))break e;if((y||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,y?(j=n.relatedTarget||n.toElement,y=c,j=j?$t(j):null,j!==null&&(I=pi(j),j!==I||j.tag!==5&&j.tag!==6)&&(j=null)):(y=null,j=c),y!==j)){if(w=gd,m="onMouseLeave",h="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=md,m="onPointerLeave",h="onPointerEnter",f="pointer"),I=y==null?x:Si(y),A=j==null?x:Si(j),x=new w(m,f+"leave",y,n,g),x.target=I,x.relatedTarget=A,m=null,$t(g)===c&&(w=new w(h,f+"enter",j,n,g),w.target=A,w.relatedTarget=I,m=w),I=m,y&&j)t:{for(w=y,h=j,f=0,A=w;A;A=xi(A))f++;for(A=0,m=h;m;m=xi(m))A++;for(;0<f-A;)w=xi(w),f--;for(;0<A-f;)h=xi(h),A--;for(;f--;){if(w===h||h!==null&&w===h.alternate)break t;w=xi(w),h=xi(h)}w=null}else w=null;y!==null&&Md(u,x,y,w,!1),j!==null&&I!==null&&Md(u,I,j,w,!0)}}e:{if(x=c?Si(c):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var S=$A;else if(wd(x))if(Ff)S=nu;else{S=tu;var k=eu}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=iu);if(S&&(S=S(t,c))){Tf(u,S,n,g);break e}k&&k(t,x,c),t==="focusout"&&(k=x._wrapperState)&&k.controlled&&x.type==="number"&&_o(x,"number",x.value)}switch(k=c?Si(c):window,t){case"focusin":(wd(k)||k.contentEditable==="true")&&(bi=k,cs=c,Mn=null);break;case"focusout":Mn=cs=bi=null;break;case"mousedown":fs=!0;break;case"contextmenu":case"mouseup":case"dragend":fs=!1,Id(u,n,g);break;case"selectionchange":if(ou)break;case"keydown":case"keyup":Id(u,n,g)}var b;if(ha)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else wi?Uf(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Nf&&n.locale!=="ko"&&(wi||D!=="onCompositionStart"?D==="onCompositionEnd"&&wi&&(b=Df()):(zt=g,da="value"in zt?zt.value:zt.textContent,wi=!0)),k=dl(c,D),0<k.length&&(D=new xd(D,t,null,n,g),u.push({event:D,listeners:k}),b?D.data=b:(b=Rf(n),b!==null&&(D.data=b)))),(b=VA?XA(t,n):KA(t,n))&&(c=dl(c,"onBeforeInput"),0<c.length&&(g=new xd("onBeforeInput","beforeinput",null,n,g),u.push({event:g,listeners:c}),g.data=b))}Yf(u,i)})}function On(t,i,n){return{instance:t,listener:i,currentTarget:n}}function dl(t,i){for(var n=i+"Capture",r=[];t!==null;){var l=t,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Cn(t,n),o!=null&&r.unshift(On(t,o,l)),o=Cn(t,i),o!=null&&r.push(On(t,o,l))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Md(t,i,n,r,l){for(var o=i._reactName,s=[];n!==null&&n!==r;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===r)break;a.tag===5&&c!==null&&(a=c,l?(d=Cn(n,o),d!=null&&s.unshift(On(n,d,a))):l||(d=Cn(n,o),d!=null&&s.push(On(n,d,a)))),n=n.return}s.length!==0&&t.push({event:i,listeners:s})}var cu=/\r\n?/g,fu=/\u0000|\uFFFD/g;function Dd(t){return(typeof t=="string"?t:""+t).replace(cu,`
`).replace(fu,"")}function wr(t,i,n){if(i=Dd(i),Dd(t)!==i&&n)throw Error(v(425))}function cl(){}var hs=null,ps=null;function As(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,hu=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,pu=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(Au)}:us;function Au(t){setTimeout(function(){throw t})}function bo(t,i){var n=i,r=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){t.removeChild(l),Bn(i);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(i)}function Rt(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Ud(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(i===0)return t;i--}else n==="/$"&&i++}t=t.previousSibling}return null}var tn=Math.random().toString(36).slice(2),rt="__reactFiber$"+tn,Yn="__reactProps$"+tn,ut="__reactContainer$"+tn,gs="__reactEvents$"+tn,uu="__reactListeners$"+tn,gu="__reactHandles$"+tn;function $t(t){var i=t[rt];if(i)return i;for(var n=t.parentNode;n;){if(i=n[ut]||n[rt]){if(n=i.alternate,i.child!==null||n!==null&&n.child!==null)for(t=Ud(t);t!==null;){if(n=t[rt])return n;t=Ud(t)}return i}t=n,n=t.parentNode}return null}function rr(t){return t=t[rt]||t[ut],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Si(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(v(33))}function Cl(t){return t[Yn]||null}var xs=[],ki=-1;function Lt(t){return{current:t}}function K(t){0>ki||(t.current=xs[ki],xs[ki]=null,ki--)}function J(t,i){ki++,xs[ki]=t.current,t.current=i}var Bt={},me=Lt(Bt),Ie=Lt(!1),si=Bt;function Bi(t,i){var n=t.type.contextTypes;if(!n)return Bt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===i)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=i[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=l),l}function ze(t){return t=t.childContextTypes,t!=null}function fl(){K(Ie),K(me)}function Rd(t,i,n){if(me.current!==Bt)throw Error(v(168));J(me,i),J(Ie,n)}function Jf(t,i,n){var r=t.stateNode;if(i=i.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in i))throw Error(v(108,eA(t)||"Unknown",l));return ee({},n,r)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bt,si=me.current,J(me,t),J(Ie,Ie.current),!0}function Td(t,i,n){var r=t.stateNode;if(!r)throw Error(v(169));n?(t=Jf(t,i,si),r.__reactInternalMemoizedMergedChildContext=t,K(Ie),K(me),J(me,t)):K(Ie),J(Ie,n)}var ct=null,Hl=!1,vo=!1;function Vf(t){ct===null?ct=[t]:ct.push(t)}function xu(t){Hl=!0,Vf(t)}function Wt(){if(!vo&&ct!==null){vo=!0;var t=0,i=B;try{var n=ct;for(B=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,Hl=!1}catch(l){throw ct!==null&&(ct=ct.slice(t+1)),yf(la,Wt),l}finally{B=i,vo=!1}}return null}var Ii=[],zi=0,pl=null,Al=0,Ge=[],Be=0,ai=null,ft=1,ht="";function qt(t,i){Ii[zi++]=Al,Ii[zi++]=pl,pl=t,Al=i}function Xf(t,i,n){Ge[Be++]=ft,Ge[Be++]=ht,Ge[Be++]=ai,ai=t;var r=ft;t=ht;var l=32-qe(r)-1;r&=~(1<<l),n+=1;var o=32-qe(i)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,ft=1<<32-qe(i)+l|n<<l|r,ht=o+t}else ft=1<<o|n<<l|r,ht=t}function Aa(t){t.return!==null&&(qt(t,1),Xf(t,1,0))}function ua(t){for(;t===pl;)pl=Ii[--zi],Ii[zi]=null,Al=Ii[--zi],Ii[zi]=null;for(;t===ai;)ai=Ge[--Be],Ge[Be]=null,ht=Ge[--Be],Ge[Be]=null,ft=Ge[--Be],Ge[Be]=null}var Fe=null,Te=null,q=!1,Ke=null;function Kf(t,i){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=i,n.return=t,i=t.deletions,i===null?(t.deletions=[n],t.flags|=16):i.push(n)}function Fd(t,i){switch(t.tag){case 5:var n=t.type;return i=i.nodeType!==1||n.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fe=t,Te=Rt(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fe=t,Te=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(n=ai!==null?{id:ft,overflow:ht}:null,t.memoizedState={dehydrated:i,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=i,n.return=t,t.child=n,Fe=t,Te=null,!0):!1;default:return!1}}function ms(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ys(t){if(q){var i=Te;if(i){var n=i;if(!Fd(t,i)){if(ms(t))throw Error(v(418));i=Rt(n.nextSibling);var r=Fe;i&&Fd(t,i)?Kf(r,n):(t.flags=t.flags&-4097|2,q=!1,Fe=t)}}else{if(ms(t))throw Error(v(418));t.flags=t.flags&-4097|2,q=!1,Fe=t}}}function Pd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fe=t}function br(t){if(t!==Fe)return!1;if(!q)return Pd(t),q=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!As(t.type,t.memoizedProps)),i&&(i=Te)){if(ms(t))throw qf(),Error(v(418));for(;i;)Kf(t,i),i=Rt(i.nextSibling)}if(Pd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(i===0){Te=Rt(t.nextSibling);break e}i--}else n!=="$"&&n!=="$!"&&n!=="$?"||i++}t=t.nextSibling}Te=null}}else Te=Fe?Rt(t.stateNode.nextSibling):null;return!0}function qf(){for(var t=Te;t;)t=Rt(t.nextSibling)}function Zi(){Te=Fe=null,q=!1}function ga(t){Ke===null?Ke=[t]:Ke.push(t)}var mu=mt.ReactCurrentBatchConfig;function Ve(t,i){if(t&&t.defaultProps){i=ee({},i),t=t.defaultProps;for(var n in t)i[n]===void 0&&(i[n]=t[n]);return i}return i}var ul=Lt(null),gl=null,Ei=null,xa=null;function ma(){xa=Ei=gl=null}function ya(t){var i=ul.current;K(ul),t._currentValue=i}function js(t,i,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,r!==null&&(r.childLanes|=i)):r!==null&&(r.childLanes&i)!==i&&(r.childLanes|=i),t===n)break;t=t.return}}function Pi(t,i){gl=t,xa=Ei=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Se=!0),t.firstContext=null)}function We(t){var i=t._currentValue;if(xa!==t)if(t={context:t,memoizedValue:i,next:null},Ei===null){if(gl===null)throw Error(v(308));Ei=t,gl.dependencies={lanes:0,firstContext:t}}else Ei=Ei.next=t;return i}var ei=null;function ja(t){ei===null?ei=[t]:ei.push(t)}function _f(t,i,n,r){var l=i.interleaved;return l===null?(n.next=n,ja(i)):(n.next=l.next,l.next=n),i.interleaved=n,gt(t,r)}function gt(t,i){t.lanes|=i;var n=t.alternate;for(n!==null&&(n.lanes|=i),n=t,t=t.return;t!==null;)t.childLanes|=i,n=t.alternate,n!==null&&(n.childLanes|=i),n=t,t=t.return;return n.tag===3?n.stateNode:null}var St=!1;function wa(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pt(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Tt(t,i,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,C&2){var l=r.pending;return l===null?i.next=i:(i.next=l.next,l.next=i),r.pending=i,gt(t,n)}return l=r.interleaved,l===null?(i.next=i,ja(r)):(i.next=l.next,l.next=i),r.interleaved=i,gt(t,n)}function Lr(t,i,n){if(i=i.updateQueue,i!==null&&(i=i.shared,(n&4194240)!==0)){var r=i.lanes;r&=t.pendingLanes,n|=r,i.lanes=n,oa(t,n)}}function Cd(t,i){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=i:o=o.next=i}else l=o=i;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=i:t.next=i,n.lastBaseUpdate=i}function xl(t,i,n,r){var l=t.updateQueue;St=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var d=a,c=d.next;d.next=null,s===null?o=c:s.next=c,s=d;var g=t.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==s&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=d))}if(o!==null){var u=l.baseState;s=0,g=c=d=null,a=o;do{var x=a.lane,y=a.eventTime;if((r&x)===x){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var j=t,w=a;switch(x=i,y=n,w.tag){case 1:if(j=w.payload,typeof j=="function"){u=j.call(y,u,x);break e}u=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=w.payload,x=typeof j=="function"?j.call(y,u,x):j,x==null)break e;u=ee({},u,x);break e;case 2:St=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,x=l.effects,x===null?l.effects=[a]:x.push(a))}else y={eventTime:y,lane:x,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,d=u):g=g.next=y,s|=x;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;x=a,a=x.next,x.next=null,l.lastBaseUpdate=x,l.shared.pending=null}}while(1);if(g===null&&(d=u),l.baseState=d,l.firstBaseUpdate=c,l.lastBaseUpdate=g,i=l.shared.interleaved,i!==null){l=i;do s|=l.lane,l=l.next;while(l!==i)}else o===null&&(l.shared.lanes=0);ci|=s,t.lanes=s,t.memoizedState=u}}function Hd(t,i,n){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var r=t[i],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(v(191,l));l.call(r)}}}var eh=new qc.Component().refs;function ws(t,i,n,r){i=t.memoizedState,n=n(r,i),n=n==null?i:ee({},i,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gl={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,n){t=t._reactInternals;var r=je(),l=Pt(t),o=pt(r,l);o.payload=i,n!=null&&(o.callback=n),i=Tt(t,o,l),i!==null&&(_e(i,t,l,r),Lr(i,t,l))},enqueueReplaceState:function(t,i,n){t=t._reactInternals;var r=je(),l=Pt(t),o=pt(r,l);o.tag=1,o.payload=i,n!=null&&(o.callback=n),i=Tt(t,o,l),i!==null&&(_e(i,t,l,r),Lr(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var n=je(),r=Pt(t),l=pt(n,r);l.tag=2,i!=null&&(l.callback=i),i=Tt(t,l,r),i!==null&&(_e(i,t,r,n),Lr(i,t,r))}};function Gd(t,i,n,r,l,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):i.prototype&&i.prototype.isPureReactComponent?!Ln(n,r)||!Ln(l,o):!0}function th(t,i,n){var r=!1,l=Bt,o=i.contextType;return typeof o=="object"&&o!==null?o=We(o):(l=ze(i)?si:me.current,r=i.contextTypes,o=(r=r!=null)?Bi(t,l):Bt),i=new i(n,o),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Gl,t.stateNode=i,i._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=o),i}function Bd(t,i,n,r){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(n,r),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(n,r),i.state!==t&&Gl.enqueueReplaceState(i,i.state,null)}function bs(t,i,n,r){var l=t.stateNode;l.props=n,l.state=t.memoizedState,l.refs=eh,wa(t);var o=i.contextType;typeof o=="object"&&o!==null?l.context=We(o):(o=ze(i)?si:me.current,l.context=Bi(t,o)),l.state=t.memoizedState,o=i.getDerivedStateFromProps,typeof o=="function"&&(ws(t,i,o,n),l.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&Gl.enqueueReplaceState(l,l.state,null),xl(t,n,l,r),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function un(t,i,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(v(309));var r=n.stateNode}if(!r)throw Error(v(147,t));var l=r,o=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===o?i.ref:(i=function(s){var a=l.refs;a===eh&&(a=l.refs={}),s===null?delete a[o]:a[o]=s},i._stringRef=o,i)}if(typeof t!="string")throw Error(v(284));if(!n._owner)throw Error(v(290,t))}return t}function vr(t,i){throw t=Object.prototype.toString.call(i),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zd(t){var i=t._init;return i(t._payload)}function ih(t){function i(h,f){if(t){var A=h.deletions;A===null?(h.deletions=[f],h.flags|=16):A.push(f)}}function n(h,f){if(!t)return null;for(;f!==null;)i(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function l(h,f){return h=Ct(h,f),h.index=0,h.sibling=null,h}function o(h,f,A){return h.index=A,t?(A=h.alternate,A!==null?(A=A.index,A<f?(h.flags|=2,f):A):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,f,A,m){return f===null||f.tag!==6?(f=Do(A,h.mode,m),f.return=h,f):(f=l(f,A),f.return=h,f)}function d(h,f,A,m){var S=A.type;return S===ji?g(h,f,A.props.children,m,A.key):f!==null&&(f.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Zd(S)===f.type)?(m=l(f,A.props),m.ref=un(h,f,A),m.return=h,m):(m=Vr(A.type,A.key,A.props,null,h.mode,m),m.ref=un(h,f,A),m.return=h,m)}function c(h,f,A,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==A.containerInfo||f.stateNode.implementation!==A.implementation?(f=No(A,h.mode,m),f.return=h,f):(f=l(f,A.children||[]),f.return=h,f)}function g(h,f,A,m,S){return f===null||f.tag!==7?(f=ri(A,h.mode,m,S),f.return=h,f):(f=l(f,A),f.return=h,f)}function u(h,f,A){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Do(""+f,h.mode,A),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hr:return A=Vr(f.type,f.key,f.props,null,h.mode,A),A.ref=un(h,null,f),A.return=h,A;case yi:return f=No(f,h.mode,A),f.return=h,f;case vt:var m=f._init;return u(h,m(f._payload),A)}if(wn(f)||cn(f))return f=ri(f,h.mode,A,null),f.return=h,f;vr(h,f)}return null}function x(h,f,A,m){var S=f!==null?f.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return S!==null?null:a(h,f,""+A,m);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case hr:return A.key===S?d(h,f,A,m):null;case yi:return A.key===S?c(h,f,A,m):null;case vt:return S=A._init,x(h,f,S(A._payload),m)}if(wn(A)||cn(A))return S!==null?null:g(h,f,A,m,null);vr(h,A)}return null}function y(h,f,A,m,S){if(typeof m=="string"&&m!==""||typeof m=="number")return h=h.get(A)||null,a(f,h,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hr:return h=h.get(m.key===null?A:m.key)||null,d(f,h,m,S);case yi:return h=h.get(m.key===null?A:m.key)||null,c(f,h,m,S);case vt:var k=m._init;return y(h,f,A,k(m._payload),S)}if(wn(m)||cn(m))return h=h.get(A)||null,g(f,h,m,S,null);vr(f,m)}return null}function j(h,f,A,m){for(var S=null,k=null,b=f,D=f=0,Q=null;b!==null&&D<A.length;D++){b.index>D?(Q=b,b=null):Q=b.sibling;var F=x(h,b,A[D],m);if(F===null){b===null&&(b=Q);break}t&&b&&F.alternate===null&&i(h,b),f=o(F,f,D),k===null?S=F:k.sibling=F,k=F,b=Q}if(D===A.length)return n(h,b),q&&qt(h,D),S;if(b===null){for(;D<A.length;D++)b=u(h,A[D],m),b!==null&&(f=o(b,f,D),k===null?S=b:k.sibling=b,k=b);return q&&qt(h,D),S}for(b=r(h,b);D<A.length;D++)Q=y(b,h,D,A[D],m),Q!==null&&(t&&Q.alternate!==null&&b.delete(Q.key===null?D:Q.key),f=o(Q,f,D),k===null?S=Q:k.sibling=Q,k=Q);return t&&b.forEach(function(Ne){return i(h,Ne)}),q&&qt(h,D),S}function w(h,f,A,m){var S=cn(A);if(typeof S!="function")throw Error(v(150));if(A=S.call(A),A==null)throw Error(v(151));for(var k=S=null,b=f,D=f=0,Q=null,F=A.next();b!==null&&!F.done;D++,F=A.next()){b.index>D?(Q=b,b=null):Q=b.sibling;var Ne=x(h,b,F.value,m);if(Ne===null){b===null&&(b=Q);break}t&&b&&Ne.alternate===null&&i(h,b),f=o(Ne,f,D),k===null?S=Ne:k.sibling=Ne,k=Ne,b=Q}if(F.done)return n(h,b),q&&qt(h,D),S;if(b===null){for(;!F.done;D++,F=A.next())F=u(h,F.value,m),F!==null&&(f=o(F,f,D),k===null?S=F:k.sibling=F,k=F);return q&&qt(h,D),S}for(b=r(h,b);!F.done;D++,F=A.next())F=y(b,h,D,F.value,m),F!==null&&(t&&F.alternate!==null&&b.delete(F.key===null?D:F.key),f=o(F,f,D),k===null?S=F:k.sibling=F,k=F);return t&&b.forEach(function(Yt){return i(h,Yt)}),q&&qt(h,D),S}function I(h,f,A,m){if(typeof A=="object"&&A!==null&&A.type===ji&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case hr:e:{for(var S=A.key,k=f;k!==null;){if(k.key===S){if(S=A.type,S===ji){if(k.tag===7){n(h,k.sibling),f=l(k,A.props.children),f.return=h,h=f;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===vt&&Zd(S)===k.type){n(h,k.sibling),f=l(k,A.props),f.ref=un(h,k,A),f.return=h,h=f;break e}n(h,k);break}else i(h,k);k=k.sibling}A.type===ji?(f=ri(A.props.children,h.mode,m,A.key),f.return=h,h=f):(m=Vr(A.type,A.key,A.props,null,h.mode,m),m.ref=un(h,f,A),m.return=h,h=m)}return s(h);case yi:e:{for(k=A.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===A.containerInfo&&f.stateNode.implementation===A.implementation){n(h,f.sibling),f=l(f,A.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else i(h,f);f=f.sibling}f=No(A,h.mode,m),f.return=h,h=f}return s(h);case vt:return k=A._init,I(h,f,k(A._payload),m)}if(wn(A))return j(h,f,A,m);if(cn(A))return w(h,f,A,m);vr(h,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,f!==null&&f.tag===6?(n(h,f.sibling),f=l(f,A),f.return=h,h=f):(n(h,f),f=Do(A,h.mode,m),f.return=h,h=f),s(h)):n(h,f)}return I}var Li=ih(!0),nh=ih(!1),lr={},ot=Lt(lr),Qn=Lt(lr),Jn=Lt(lr);function ti(t){if(t===lr)throw Error(v(174));return t}function ba(t,i){switch(J(Jn,i),J(Qn,t),J(ot,lr),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:es(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=es(i,t)}K(ot),J(ot,i)}function Wi(){K(ot),K(Qn),K(Jn)}function rh(t){ti(Jn.current);var i=ti(ot.current),n=es(i,t.type);i!==n&&(J(Qn,t),J(ot,n))}function va(t){Qn.current===t&&(K(ot),K(Qn))}var _=Lt(0);function ml(t){for(var i=t;i!==null;){if(i.tag===13){var n=i.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var So=[];function Sa(){for(var t=0;t<So.length;t++)So[t]._workInProgressVersionPrimary=null;So.length=0}var Wr=mt.ReactCurrentDispatcher,ko=mt.ReactCurrentBatchConfig,di=0,$=null,se=null,de=null,yl=!1,Dn=!1,Vn=0,yu=0;function ue(){throw Error(v(321))}function ka(t,i){if(i===null)return!1;for(var n=0;n<i.length&&n<t.length;n++)if(!et(t[n],i[n]))return!1;return!0}function Ia(t,i,n,r,l,o){if(di=o,$=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wr.current=t===null||t.memoizedState===null?vu:Su,t=n(r,l),Dn){o=0;do{if(Dn=!1,Vn=0,25<=o)throw Error(v(301));o+=1,de=se=null,i.updateQueue=null,Wr.current=ku,t=n(r,l)}while(Dn)}if(Wr.current=jl,i=se!==null&&se.next!==null,di=0,de=se=$=null,yl=!1,i)throw Error(v(300));return t}function za(){var t=Vn!==0;return Vn=0,t}function it(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?$.memoizedState=de=t:de=de.next=t,de}function Oe(){if(se===null){var t=$.alternate;t=t!==null?t.memoizedState:null}else t=se.next;var i=de===null?$.memoizedState:de.next;if(i!==null)de=i,se=t;else{if(t===null)throw Error(v(310));se=t,t={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?$.memoizedState=de=t:de=de.next=t}return de}function Xn(t,i){return typeof i=="function"?i(t):i}function Io(t){var i=Oe(),n=i.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=se,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=s=null,d=null,c=o;do{var g=c.lane;if((di&g)===g)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=u,s=r):d=d.next=u,$.lanes|=g,ci|=g}c=c.next}while(c!==null&&c!==o);d===null?s=r:d.next=a,et(r,i.memoizedState)||(Se=!0),i.memoizedState=r,i.baseState=s,i.baseQueue=d,n.lastRenderedState=r}if(t=n.interleaved,t!==null){l=t;do o=l.lane,$.lanes|=o,ci|=o,l=l.next;while(l!==t)}else l===null&&(n.lanes=0);return[i.memoizedState,n.dispatch]}function zo(t){var i=Oe(),n=i.queue;if(n===null)throw Error(v(311));n.lastRenderedReducer=t;var r=n.dispatch,l=n.pending,o=i.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=t(o,s.action),s=s.next;while(s!==l);et(o,i.memoizedState)||(Se=!0),i.memoizedState=o,i.baseQueue===null&&(i.baseState=o),n.lastRenderedState=o}return[o,r]}function lh(){}function oh(t,i){var n=$,r=Oe(),l=i(),o=!et(r.memoizedState,l);if(o&&(r.memoizedState=l,Se=!0),r=r.queue,Ea(dh.bind(null,n,r,t),[t]),r.getSnapshot!==i||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Kn(9,ah.bind(null,n,r,l,i),void 0,null),fe===null)throw Error(v(349));di&30||sh(n,i,l)}return l}function sh(t,i,n){t.flags|=16384,t={getSnapshot:i,value:n},i=$.updateQueue,i===null?(i={lastEffect:null,stores:null},$.updateQueue=i,i.stores=[t]):(n=i.stores,n===null?i.stores=[t]:n.push(t))}function ah(t,i,n,r){i.value=n,i.getSnapshot=r,ch(i)&&fh(t)}function dh(t,i,n){return n(function(){ch(i)&&fh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var n=i();return!et(t,n)}catch{return!0}}function fh(t){var i=gt(t,1);i!==null&&_e(i,t,1,-1)}function Ld(t){var i=it();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xn,lastRenderedState:t},i.queue=t,t=t.dispatch=bu.bind(null,$,t),[i.memoizedState,t]}function Kn(t,i,n,r){return t={tag:t,create:i,destroy:n,deps:r,next:null},i=$.updateQueue,i===null?(i={lastEffect:null,stores:null},$.updateQueue=i,i.lastEffect=t.next=t):(n=i.lastEffect,n===null?i.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,i.lastEffect=t)),t}function hh(){return Oe().memoizedState}function Or(t,i,n,r){var l=it();$.flags|=t,l.memoizedState=Kn(1|i,n,void 0,r===void 0?null:r)}function Bl(t,i,n,r){var l=Oe();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&ka(r,s.deps)){l.memoizedState=Kn(i,n,o,r);return}}$.flags|=t,l.memoizedState=Kn(1|i,n,o,r)}function Wd(t,i){return Or(8390656,8,t,i)}function Ea(t,i){return Bl(2048,8,t,i)}function ph(t,i){return Bl(4,2,t,i)}function Ah(t,i){return Bl(4,4,t,i)}function uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function gh(t,i,n){return n=n!=null?n.concat([t]):null,Bl(4,4,uh.bind(null,i,t),n)}function Ma(){}function xh(t,i){var n=Oe();i=i===void 0?null:i;var r=n.memoizedState;return r!==null&&i!==null&&ka(i,r[1])?r[0]:(n.memoizedState=[t,i],t)}function mh(t,i){var n=Oe();i=i===void 0?null:i;var r=n.memoizedState;return r!==null&&i!==null&&ka(i,r[1])?r[0]:(t=t(),n.memoizedState=[t,i],t)}function yh(t,i,n){return di&21?(et(n,i)||(n=bf(),$.lanes|=n,ci|=n,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function ju(t,i){var n=B;B=n!==0&&4>n?n:4,t(!0);var r=ko.transition;ko.transition={};try{t(!1),i()}finally{B=n,ko.transition=r}}function jh(){return Oe().memoizedState}function wu(t,i,n){var r=Pt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wh(t))bh(i,n);else if(n=_f(t,i,n,r),n!==null){var l=je();_e(n,t,r,l),vh(n,i,r)}}function bu(t,i,n){var r=Pt(t),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wh(t))bh(i,l);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=i.lastRenderedReducer,o!==null))try{var s=i.lastRenderedState,a=o(s,n);if(l.hasEagerState=!0,l.eagerState=a,et(a,s)){var d=i.interleaved;d===null?(l.next=l,ja(i)):(l.next=d.next,d.next=l),i.interleaved=l;return}}catch{}finally{}n=_f(t,i,l,r),n!==null&&(l=je(),_e(n,t,r,l),vh(n,i,r))}}function wh(t){var i=t.alternate;return t===$||i!==null&&i===$}function bh(t,i){Dn=yl=!0;var n=t.pending;n===null?i.next=i:(i.next=n.next,n.next=i),t.pending=i}function vh(t,i,n){if(n&4194240){var r=i.lanes;r&=t.pendingLanes,n|=r,i.lanes=n,oa(t,n)}}var jl={readContext:We,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},vu={readContext:We,useCallback:function(t,i){return it().memoizedState=[t,i===void 0?null:i],t},useContext:We,useEffect:Wd,useImperativeHandle:function(t,i,n){return n=n!=null?n.concat([t]):null,Or(4194308,4,uh.bind(null,i,t),n)},useLayoutEffect:function(t,i){return Or(4194308,4,t,i)},useInsertionEffect:function(t,i){return Or(4,2,t,i)},useMemo:function(t,i){var n=it();return i=i===void 0?null:i,t=t(),n.memoizedState=[t,i],t},useReducer:function(t,i,n){var r=it();return i=n!==void 0?n(i):i,r.memoizedState=r.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},r.queue=t,t=t.dispatch=wu.bind(null,$,t),[r.memoizedState,t]},useRef:function(t){var i=it();return t={current:t},i.memoizedState=t},useState:Ld,useDebugValue:Ma,useDeferredValue:function(t){return it().memoizedState=t},useTransition:function(){var t=Ld(!1),i=t[0];return t=ju.bind(null,t[1]),it().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,n){var r=$,l=it();if(q){if(n===void 0)throw Error(v(407));n=n()}else{if(n=i(),fe===null)throw Error(v(349));di&30||sh(r,i,n)}l.memoizedState=n;var o={value:n,getSnapshot:i};return l.queue=o,Wd(dh.bind(null,r,o,t),[t]),r.flags|=2048,Kn(9,ah.bind(null,r,o,n,i),void 0,null),n},useId:function(){var t=it(),i=fe.identifierPrefix;if(q){var n=ht,r=ft;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,i=":"+i+"R"+n,n=Vn++,0<n&&(i+="H"+n.toString(32)),i+=":"}else n=yu++,i=":"+i+"r"+n.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Su={readContext:We,useCallback:xh,useContext:We,useEffect:Ea,useImperativeHandle:gh,useInsertionEffect:ph,useLayoutEffect:Ah,useMemo:mh,useReducer:Io,useRef:hh,useState:function(){return Io(Xn)},useDebugValue:Ma,useDeferredValue:function(t){var i=Oe();return yh(i,se.memoizedState,t)},useTransition:function(){var t=Io(Xn)[0],i=Oe().memoizedState;return[t,i]},useMutableSource:lh,useSyncExternalStore:oh,useId:jh,unstable_isNewReconciler:!1},ku={readContext:We,useCallback:xh,useContext:We,useEffect:Ea,useImperativeHandle:gh,useInsertionEffect:ph,useLayoutEffect:Ah,useMemo:mh,useReducer:zo,useRef:hh,useState:function(){return zo(Xn)},useDebugValue:Ma,useDeferredValue:function(t){var i=Oe();return se===null?i.memoizedState=t:yh(i,se.memoizedState,t)},useTransition:function(){var t=zo(Xn)[0],i=Oe().memoizedState;return[t,i]},useMutableSource:lh,useSyncExternalStore:oh,useId:jh,unstable_isNewReconciler:!1};function Oi(t,i){try{var n="",r=i;do n+=$p(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:i,stack:l,digest:null}}function Eo(t,i,n){return{value:t,source:null,stack:n??null,digest:i??null}}function vs(t,i){try{console.error(i.value)}catch(n){setTimeout(function(){throw n})}}var Iu=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,i,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=i.value;return n.callback=function(){bl||(bl=!0,Rs=r),vs(t,i)},n}function kh(t,i,n){n=pt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var l=i.value;n.payload=function(){return r(l)},n.callback=function(){vs(t,i)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vs(t,i),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})}),n}function Od(t,i,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Iu;var l=new Set;r.set(i,l)}else l=r.get(i),l===void 0&&(l=new Set,r.set(i,l));l.has(n)||(l.add(n),t=Bu.bind(null,t,i,n),i.then(t,t))}function Yd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Qd(t,i,n,r,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===i?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(i=pt(-1,1),i.tag=2,Tt(n,i,1))),n.lanes|=1),t)}var zu=mt.ReactCurrentOwner,Se=!1;function ye(t,i,n,r){i.child=t===null?nh(i,null,n,r):Li(i,t.child,n,r)}function Jd(t,i,n,r,l){n=n.render;var o=i.ref;return Pi(i,l),r=Ia(t,i,n,r,o,l),n=za(),t!==null&&!Se?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~l,xt(t,i,l)):(q&&n&&Aa(i),i.flags|=1,ye(t,i,r,l),i.child)}function Vd(t,i,n,r,l){if(t===null){var o=n.type;return typeof o=="function"&&!Ca(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(i.tag=15,i.type=o,Ih(t,i,o,r,l)):(t=Vr(n.type,null,r,i,i.mode,l),t.ref=i.ref,t.return=i,i.child=t)}if(o=t.child,!(t.lanes&l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ln,n(s,r)&&t.ref===i.ref)return xt(t,i,l)}return i.flags|=1,t=Ct(o,r),t.ref=i.ref,t.return=i,i.child=t}function Ih(t,i,n,r,l){if(t!==null){var o=t.memoizedProps;if(Ln(o,r)&&t.ref===i.ref)if(Se=!1,i.pendingProps=r=o,(t.lanes&l)!==0)t.flags&131072&&(Se=!0);else return i.lanes=t.lanes,xt(t,i,l)}return Ss(t,i,n,r,l)}function zh(t,i,n){var r=i.pendingProps,l=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Di,Re),Re|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,J(Di,Re),Re|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,J(Di,Re),Re|=r}else o!==null?(r=o.baseLanes|n,i.memoizedState=null):r=n,J(Di,Re),Re|=r;return ye(t,i,l,n),i.child}function Eh(t,i){var n=i.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(i.flags|=512,i.flags|=2097152)}function Ss(t,i,n,r,l){var o=ze(n)?si:me.current;return o=Bi(i,o),Pi(i,l),n=Ia(t,i,n,r,o,l),r=za(),t!==null&&!Se?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~l,xt(t,i,l)):(q&&r&&Aa(i),i.flags|=1,ye(t,i,n,l),i.child)}function Xd(t,i,n,r,l){if(ze(n)){var o=!0;hl(i)}else o=!1;if(Pi(i,l),i.stateNode===null)Yr(t,i),th(i,n,r),bs(i,n,r,l),r=!0;else if(t===null){var s=i.stateNode,a=i.memoizedProps;s.props=a;var d=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=We(c):(c=ze(n)?si:me.current,c=Bi(i,c));var g=n.getDerivedStateFromProps,u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||d!==c)&&Bd(i,s,r,c),St=!1;var x=i.memoizedState;s.state=x,xl(i,r,s,l),d=i.memoizedState,a!==r||x!==d||Ie.current||St?(typeof g=="function"&&(ws(i,n,g,r),d=i.memoizedState),(a=St||Gd(i,n,a,r,x,d,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(i.flags|=4194308)):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=r,i.memoizedState=d),s.props=r,s.state=d,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),r=!1)}else{s=i.stateNode,$f(t,i),a=i.memoizedProps,c=i.type===i.elementType?a:Ve(i.type,a),s.props=c,u=i.pendingProps,x=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=We(d):(d=ze(n)?si:me.current,d=Bi(i,d));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==u||x!==d)&&Bd(i,s,r,d),St=!1,x=i.memoizedState,s.state=x,xl(i,r,s,l);var j=i.memoizedState;a!==u||x!==j||Ie.current||St?(typeof y=="function"&&(ws(i,n,y,r),j=i.memoizedState),(c=St||Gd(i,n,c,r,x,j,d)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,j,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,j,d)),typeof s.componentDidUpdate=="function"&&(i.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(i.flags|=1024),i.memoizedProps=r,i.memoizedState=j),s.props=r,s.state=j,s.context=d,r=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&x===t.memoizedState||(i.flags|=1024),r=!1)}return ks(t,i,n,r,o,l)}function ks(t,i,n,r,l,o){Eh(t,i);var s=(i.flags&128)!==0;if(!r&&!s)return l&&Td(i,n,!1),xt(t,i,o);r=i.stateNode,zu.current=i;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return i.flags|=1,t!==null&&s?(i.child=Li(i,t.child,null,o),i.child=Li(i,null,a,o)):ye(t,i,a,o),i.memoizedState=r.state,l&&Td(i,n,!0),i.child}function Mh(t){var i=t.stateNode;i.pendingContext?Rd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Rd(t,i.context,!1),ba(t,i.containerInfo)}function Kd(t,i,n,r,l){return Zi(),ga(l),i.flags|=256,ye(t,i,n,r),i.child}var Is={dehydrated:null,treeContext:null,retryLane:0};function zs(t){return{baseLanes:t,cachePool:null,transitions:null}}function Dh(t,i,n){var r=i.pendingProps,l=_.current,o=!1,s=(i.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(l&2)!==0),a?(o=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),J(_,l&1),t===null)return ys(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(s=r.children,t=r.fallback,o?(r=i.mode,o=i.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Wl(s,r,0,null),t=ri(t,r,n,null),o.return=i,t.return=i,o.sibling=t,i.child=o,i.child.memoizedState=zs(n),i.memoizedState=Is,t):Da(i,s));if(l=t.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return Eu(t,i,s,r,a,l,n);if(o){o=r.fallback,s=i.mode,l=t.child,a=l.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&i.child!==l?(r=i.child,r.childLanes=0,r.pendingProps=d,i.deletions=null):(r=Ct(l,d),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=Ct(a,o):(o=ri(o,s,n,null),o.flags|=2),o.return=i,r.return=i,r.sibling=o,i.child=r,r=o,o=i.child,s=t.child.memoizedState,s=s===null?zs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,i.memoizedState=Is,r}return o=t.child,t=o.sibling,r=Ct(o,{mode:"visible",children:r.children}),!(i.mode&1)&&(r.lanes=n),r.return=i,r.sibling=null,t!==null&&(n=i.deletions,n===null?(i.deletions=[t],i.flags|=16):n.push(t)),i.child=r,i.memoizedState=null,r}function Da(t,i){return i=Wl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Sr(t,i,n,r){return r!==null&&ga(r),Li(i,t.child,null,n),t=Da(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Eu(t,i,n,r,l,o,s){if(n)return i.flags&256?(i.flags&=-257,r=Eo(Error(v(422))),Sr(t,i,s,r)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(o=r.fallback,l=i.mode,r=Wl({mode:"visible",children:r.children},l,0,null),o=ri(o,l,s,null),o.flags|=2,r.return=i,o.return=i,r.sibling=o,i.child=r,i.mode&1&&Li(i,t.child,null,s),i.child.memoizedState=zs(s),i.memoizedState=Is,o);if(!(i.mode&1))return Sr(t,i,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(v(419)),r=Eo(o,r,void 0),Sr(t,i,s,r)}if(a=(s&t.childLanes)!==0,Se||a){if(r=fe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,gt(t,l),_e(r,t,l,-1))}return Pa(),r=Eo(Error(v(421))),Sr(t,i,s,r)}return l.data==="$?"?(i.flags|=128,i.child=t.child,i=Zu.bind(null,t),l._reactRetry=i,null):(t=o.treeContext,Te=Rt(l.nextSibling),Fe=i,q=!0,Ke=null,t!==null&&(Ge[Be++]=ft,Ge[Be++]=ht,Ge[Be++]=ai,ft=t.id,ht=t.overflow,ai=i),i=Da(i,r.children),i.flags|=4096,i)}function qd(t,i,n){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i),js(t.return,i,n)}function Mo(t,i,n,r,l){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=i,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Nh(t,i,n){var r=i.pendingProps,l=r.revealOrder,o=r.tail;if(ye(t,i,r.children,n),r=_.current,r&2)r=r&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qd(t,n,i);else if(t.tag===19)qd(t,n,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(_,r),!(i.mode&1))i.memoizedState=null;else switch(l){case"forwards":for(n=i.child,l=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=i.child,i.child=null):(l=n.sibling,n.sibling=null),Mo(i,!1,l,n,o);break;case"backwards":for(n=null,l=i.child,i.child=null;l!==null;){if(t=l.alternate,t!==null&&ml(t)===null){i.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Mo(i,!0,n,null,o);break;case"together":Mo(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yr(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function xt(t,i,n){if(t!==null&&(i.dependencies=t.dependencies),ci|=i.lanes,!(n&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(v(153));if(i.child!==null){for(t=i.child,n=Ct(t,t.pendingProps),i.child=n,n.return=i;t.sibling!==null;)t=t.sibling,n=n.sibling=Ct(t,t.pendingProps),n.return=i;n.sibling=null}return i.child}function Mu(t,i,n){switch(i.tag){case 3:Mh(i),Zi();break;case 5:rh(i);break;case 1:ze(i.type)&&hl(i);break;case 4:ba(i,i.stateNode.containerInfo);break;case 10:var r=i.type._context,l=i.memoizedProps.value;J(ul,r._currentValue),r._currentValue=l;break;case 13:if(r=i.memoizedState,r!==null)return r.dehydrated!==null?(J(_,_.current&1),i.flags|=128,null):n&i.child.childLanes?Dh(t,i,n):(J(_,_.current&1),t=xt(t,i,n),t!==null?t.sibling:null);J(_,_.current&1);break;case 19:if(r=(n&i.childLanes)!==0,t.flags&128){if(r)return Nh(t,i,n);i.flags|=128}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),J(_,_.current),r)break;return null;case 22:case 23:return i.lanes=0,zh(t,i,n)}return xt(t,i,n)}var Uh,Es,Rh,Th;Uh=function(t,i){for(var n=i.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};Rh=function(t,i,n,r){var l=t.memoizedProps;if(l!==r){t=i.stateNode,ti(ot.current);var o=null;switch(n){case"input":l=Ko(t,l),r=Ko(t,r),o=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":l=$o(t,l),r=$o(t,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=cl)}ts(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var d=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&a[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fn.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&V("scroll",t),o||a===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(i.updateQueue=c)&&(i.flags|=4)}};Th=function(t,i,n,r){n!==r&&(i.flags|=4)};function gn(t,i){if(!q)switch(t.tailMode){case"hidden":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ge(t){var i=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(i)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=n,i}function Du(t,i,n){var r=i.pendingProps;switch(ua(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(i),null;case 1:return ze(i.type)&&fl(),ge(i),null;case 3:return r=i.stateNode,Wi(),K(Ie),K(me),Sa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(br(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ke!==null&&(Ps(Ke),Ke=null))),Es(t,i),ge(i),null;case 5:va(i);var l=ti(Jn.current);if(n=i.type,t!==null&&i.stateNode!=null)Rh(t,i,n,r,l),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!r){if(i.stateNode===null)throw Error(v(166));return ge(i),null}if(t=ti(ot.current),br(i)){r=i.stateNode,n=i.type;var o=i.memoizedProps;switch(r[rt]=i,r[Yn]=o,t=(i.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<vn.length;l++)V(vn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":od(r,o),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},V("invalid",r);break;case"textarea":ad(r,o),V("invalid",r)}ts(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,t),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,t),l=["children",""+a]):Fn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&V("scroll",r)}switch(n){case"input":pr(r),sd(r,o,!0);break;case"textarea":pr(r),dd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=cl)}r=l,i.updateQueue=r,r!==null&&(i.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[rt]=i,t[Yn]=r,Uh(t,i,!1,!1),i.stateNode=t;e:{switch(s=is(n,r),n){case"dialog":V("cancel",t),V("close",t),l=r;break;case"iframe":case"object":case"embed":V("load",t),l=r;break;case"video":case"audio":for(l=0;l<vn.length;l++)V(vn[l],t);l=r;break;case"source":V("error",t),l=r;break;case"img":case"image":case"link":V("error",t),V("load",t),l=r;break;case"details":V("toggle",t),l=r;break;case"input":od(t,r),l=Ko(t,r),V("invalid",t);break;case"option":l=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),V("invalid",t);break;case"textarea":ad(t,r),l=$o(t,r),V("invalid",t);break;default:l=r}ts(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?cf(t,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&af(t,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Pn(t,d):typeof d=="number"&&Pn(t,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Fn.hasOwnProperty(o)?d!=null&&o==="onScroll"&&V("scroll",t):d!=null&&ea(t,o,d,s))}switch(n){case"input":pr(t),sd(t,r,!1);break;case"textarea":pr(t),dd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Ui(t,!!r.multiple,o,!1):r.defaultValue!=null&&Ui(t,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return ge(i),null;case 6:if(t&&i.stateNode!=null)Th(t,i,t.memoizedProps,r);else{if(typeof r!="string"&&i.stateNode===null)throw Error(v(166));if(n=ti(Jn.current),ti(ot.current),br(i)){if(r=i.stateNode,n=i.memoizedProps,r[rt]=i,(o=r.nodeValue!==n)&&(t=Fe,t!==null))switch(t.tag){case 3:wr(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(t.mode&1)!==0)}o&&(i.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=i,i.stateNode=r}return ge(i),null;case 13:if(K(_),r=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Te!==null&&i.mode&1&&!(i.flags&128))qf(),Zi(),i.flags|=98560,o=!1;else if(o=br(i),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(v(318));if(o=i.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(v(317));o[rt]=i}else Zi(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;ge(i),o=!1}else Ke!==null&&(Ps(Ke),Ke=null),o=!0;if(!o)return i.flags&65536?i:null}return i.flags&128?(i.lanes=n,i):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(i.child.flags|=8192,i.mode&1&&(t===null||_.current&1?ae===0&&(ae=3):Pa())),i.updateQueue!==null&&(i.flags|=4),ge(i),null);case 4:return Wi(),Es(t,i),t===null&&Wn(i.stateNode.containerInfo),ge(i),null;case 10:return ya(i.type._context),ge(i),null;case 17:return ze(i.type)&&fl(),ge(i),null;case 19:if(K(_),o=i.memoizedState,o===null)return ge(i),null;if(r=(i.flags&128)!==0,s=o.rendering,s===null)if(r)gn(o,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(s=ml(t),s!==null){for(i.flags|=128,gn(o,!1),r=s.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),i.subtreeFlags=0,r=n,n=i.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(_,_.current&1|2),i.child}t=t.sibling}o.tail!==null&&ne()>Yi&&(i.flags|=128,r=!0,gn(o,!1),i.lanes=4194304)}else{if(!r)if(t=ml(s),t!==null){if(i.flags|=128,r=!0,n=t.updateQueue,n!==null&&(i.updateQueue=n,i.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!q)return ge(i),null}else 2*ne()-o.renderingStartTime>Yi&&n!==1073741824&&(i.flags|=128,r=!0,gn(o,!1),i.lanes=4194304);o.isBackwards?(s.sibling=i.child,i.child=s):(n=o.last,n!==null?n.sibling=s:i.child=s,o.last=s)}return o.tail!==null?(i=o.tail,o.rendering=i,o.tail=i.sibling,o.renderingStartTime=ne(),i.sibling=null,n=_.current,J(_,r?n&1|2:n&1),i):(ge(i),null);case 22:case 23:return Fa(),r=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(i.flags|=8192),r&&i.mode&1?Re&1073741824&&(ge(i),i.subtreeFlags&6&&(i.flags|=8192)):ge(i),null;case 24:return null;case 25:return null}throw Error(v(156,i.tag))}function Nu(t,i){switch(ua(i),i.tag){case 1:return ze(i.type)&&fl(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Wi(),K(Ie),K(me),Sa(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return va(i),null;case 13:if(K(_),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(v(340));Zi()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return K(_),null;case 4:return Wi(),null;case 10:return ya(i.type._context),null;case 22:case 23:return Fa(),null;case 24:return null;default:return null}}var kr=!1,xe=!1,Uu=typeof WeakSet=="function"?WeakSet:Set,M=null;function Mi(t,i){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,i,r)}else n.current=null}function Ms(t,i,n){try{n()}catch(r){te(t,i,r)}}var _d=!1;function Ru(t,i){if(hs=sl,t=Hf(),pa(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,d=-1,c=0,g=0,u=t,x=null;t:for(;;){for(var y;u!==n||l!==0&&u.nodeType!==3||(a=s+l),u!==o||r!==0&&u.nodeType!==3||(d=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(y=u.firstChild)!==null;)x=u,u=y;for(;;){if(u===t)break t;if(x===n&&++c===l&&(a=s),x===o&&++g===r&&(d=s),(y=u.nextSibling)!==null)break;u=x,x=u.parentNode}u=y}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:t,selectionRange:n},sl=!1,M=i;M!==null;)if(i=M,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,M=t;else for(;M!==null;){i=M;try{var j=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var w=j.memoizedProps,I=j.memoizedState,h=i.stateNode,f=h.getSnapshotBeforeUpdate(i.elementType===i.type?w:Ve(i.type,w),I);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var A=i.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(m){te(i,i.return,m)}if(t=i.sibling,t!==null){t.return=i.return,M=t;break}M=i.return}return j=_d,_d=!1,j}function Nn(t,i,n){var r=i.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&t)===t){var o=l.destroy;l.destroy=void 0,o!==void 0&&Ms(i,n,o)}l=l.next}while(l!==r)}}function Zl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==i)}}function Ds(t){var i=t.ref;if(i!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof i=="function"?i(t):i.current=t}}function Fh(t){var i=t.alternate;i!==null&&(t.alternate=null,Fh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[rt],delete i[Yn],delete i[gs],delete i[uu],delete i[gu])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ph(t){return t.tag===5||t.tag===3||t.tag===4}function $d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ph(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ns(t,i,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,i?n.nodeType===8?n.parentNode.insertBefore(t,i):n.insertBefore(t,i):(n.nodeType===8?(i=n.parentNode,i.insertBefore(t,n)):(i=n,i.appendChild(t)),n=n._reactRootContainer,n!=null||i.onclick!==null||(i.onclick=cl));else if(r!==4&&(t=t.child,t!==null))for(Ns(t,i,n),t=t.sibling;t!==null;)Ns(t,i,n),t=t.sibling}function Us(t,i,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,i?n.insertBefore(t,i):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Us(t,i,n),t=t.sibling;t!==null;)Us(t,i,n),t=t.sibling}var he=null,Xe=!1;function wt(t,i,n){for(n=n.child;n!==null;)Ch(t,i,n),n=n.sibling}function Ch(t,i,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:xe||Mi(n,i);case 6:var r=he,l=Xe;he=null,wt(t,i,n),he=r,Xe=l,he!==null&&(Xe?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Xe?(t=he,n=n.stateNode,t.nodeType===8?bo(t.parentNode,n):t.nodeType===1&&bo(t,n),Bn(t)):bo(he,n.stateNode));break;case 4:r=he,l=Xe,he=n.stateNode.containerInfo,Xe=!0,wt(t,i,n),he=r,Xe=l;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ms(n,i,s),l=l.next}while(l!==r)}wt(t,i,n);break;case 1:if(!xe&&(Mi(n,i),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,i,a)}wt(t,i,n);break;case 21:wt(t,i,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,wt(t,i,n),xe=r):wt(t,i,n);break;default:wt(t,i,n)}}function ec(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uu),i.forEach(function(r){var l=Lu.bind(null,t,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Je(t,i){var n=i.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=t,s=i,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Xe=!1;break e;case 3:he=a.stateNode.containerInfo,Xe=!0;break e;case 4:he=a.stateNode.containerInfo,Xe=!0;break e}a=a.return}if(he===null)throw Error(v(160));Ch(o,s,l),he=null,Xe=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(c){te(l,i,c)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hh(i,t),i=i.sibling}function Hh(t,i){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(i,t),tt(t),r&4){try{Nn(3,t,t.return),Zl(3,t)}catch(w){te(t,t.return,w)}try{Nn(5,t,t.return)}catch(w){te(t,t.return,w)}}break;case 1:Je(i,t),tt(t),r&512&&n!==null&&Mi(n,n.return);break;case 5:if(Je(i,t),tt(t),r&512&&n!==null&&Mi(n,n.return),t.flags&32){var l=t.stateNode;try{Pn(l,"")}catch(w){te(t,t.return,w)}}if(r&4&&(l=t.stateNode,l!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&lf(l,o),is(a,s);var c=is(a,o);for(s=0;s<d.length;s+=2){var g=d[s],u=d[s+1];g==="style"?cf(l,u):g==="dangerouslySetInnerHTML"?af(l,u):g==="children"?Pn(l,u):ea(l,g,u,c)}switch(a){case"input":qo(l,o);break;case"textarea":of(l,o);break;case"select":var x=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Ui(l,!!o.multiple,y,!1):x!==!!o.multiple&&(o.defaultValue!=null?Ui(l,!!o.multiple,o.defaultValue,!0):Ui(l,!!o.multiple,o.multiple?[]:"",!1))}l[Yn]=o}catch(w){te(t,t.return,w)}}break;case 6:if(Je(i,t),tt(t),r&4){if(t.stateNode===null)throw Error(v(162));l=t.stateNode,o=t.memoizedProps;try{l.nodeValue=o}catch(w){te(t,t.return,w)}}break;case 3:if(Je(i,t),tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(i.containerInfo)}catch(w){te(t,t.return,w)}break;case 4:Je(i,t),tt(t);break;case 13:Je(i,t),tt(t),l=t.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ra=ne())),r&4&&ec(t);break;case 22:if(g=n!==null&&n.memoizedState!==null,t.mode&1?(xe=(c=xe)||g,Je(i,t),xe=c):Je(i,t),tt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!g&&t.mode&1)for(M=t,g=t.child;g!==null;){for(u=M=g;M!==null;){switch(x=M,y=x.child,x.tag){case 0:case 11:case 14:case 15:Nn(4,x,x.return);break;case 1:Mi(x,x.return);var j=x.stateNode;if(typeof j.componentWillUnmount=="function"){r=x,n=x.return;try{i=r,j.props=i.memoizedProps,j.state=i.memoizedState,j.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:Mi(x,x.return);break;case 22:if(x.memoizedState!==null){ic(u);continue}}y!==null?(y.return=x,M=y):ic(u)}g=g.sibling}e:for(g=null,u=t;;){if(u.tag===5){if(g===null){g=u;try{l=u.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=u.stateNode,d=u.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=df("display",s))}catch(w){te(t,t.return,w)}}}else if(u.tag===6){if(g===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(w){te(t,t.return,w)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;g===u&&(g=null),u=u.return}g===u&&(g=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:Je(i,t),tt(t),r&4&&ec(t);break;case 21:break;default:Je(i,t),tt(t)}}function tt(t){var i=t.flags;if(i&2){try{e:{for(var n=t.return;n!==null;){if(Ph(n)){var r=n;break e}n=n.return}throw Error(v(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Pn(l,""),r.flags&=-33);var o=$d(t);Us(t,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=$d(t);Ns(t,a,s);break;default:throw Error(v(161))}}catch(d){te(t,t.return,d)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Tu(t,i,n){M=t,Gh(t)}function Gh(t,i,n){for(var r=(t.mode&1)!==0;M!==null;){var l=M,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||kr;if(!s){var a=l.alternate,d=a!==null&&a.memoizedState!==null||xe;a=kr;var c=xe;if(kr=s,(xe=d)&&!c)for(M=l;M!==null;)s=M,d=s.child,s.tag===22&&s.memoizedState!==null?nc(l):d!==null?(d.return=s,M=d):nc(l);for(;o!==null;)M=o,Gh(o),o=o.sibling;M=l,kr=a,xe=c}tc(t)}else l.subtreeFlags&8772&&o!==null?(o.return=l,M=o):tc(t)}}function tc(t){for(;M!==null;){var i=M;if(i.flags&8772){var n=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:xe||Zl(5,i);break;case 1:var r=i.stateNode;if(i.flags&4&&!xe)if(n===null)r.componentDidMount();else{var l=i.elementType===i.type?n.memoizedProps:Ve(i.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=i.updateQueue;o!==null&&Hd(i,o,r);break;case 3:var s=i.updateQueue;if(s!==null){if(n=null,i.child!==null)switch(i.child.tag){case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}Hd(i,s,n)}break;case 5:var a=i.stateNode;if(n===null&&i.flags&4){n=a;var d=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var c=i.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var u=g.dehydrated;u!==null&&Bn(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}xe||i.flags&512&&Ds(i)}catch(x){te(i,i.return,x)}}if(i===t){M=null;break}if(n=i.sibling,n!==null){n.return=i.return,M=n;break}M=i.return}}function ic(t){for(;M!==null;){var i=M;if(i===t){M=null;break}var n=i.sibling;if(n!==null){n.return=i.return,M=n;break}M=i.return}}function nc(t){for(;M!==null;){var i=M;try{switch(i.tag){case 0:case 11:case 15:var n=i.return;try{Zl(4,i)}catch(d){te(i,n,d)}break;case 1:var r=i.stateNode;if(typeof r.componentDidMount=="function"){var l=i.return;try{r.componentDidMount()}catch(d){te(i,l,d)}}var o=i.return;try{Ds(i)}catch(d){te(i,o,d)}break;case 5:var s=i.return;try{Ds(i)}catch(d){te(i,s,d)}}}catch(d){te(i,i.return,d)}if(i===t){M=null;break}var a=i.sibling;if(a!==null){a.return=i.return,M=a;break}M=i.return}}var Fu=Math.ceil,wl=mt.ReactCurrentDispatcher,Na=mt.ReactCurrentOwner,Le=mt.ReactCurrentBatchConfig,C=0,fe=null,le=null,pe=0,Re=0,Di=Lt(0),ae=0,qn=null,ci=0,Ll=0,Ua=0,Un=null,ve=null,Ra=0,Yi=1/0,at=null,bl=!1,Rs=null,Ft=null,Ir=!1,Et=null,vl=0,Rn=0,Ts=null,Qr=-1,Jr=0;function je(){return C&6?ne():Qr!==-1?Qr:Qr=ne()}function Pt(t){return t.mode&1?C&2&&pe!==0?pe&-pe:mu.transition!==null?(Jr===0&&(Jr=bf()),Jr):(t=B,t!==0||(t=window.event,t=t===void 0?16:Mf(t.type)),t):1}function _e(t,i,n,r){if(50<Rn)throw Rn=0,Ts=null,Error(v(185));ir(t,n,r),(!(C&2)||t!==fe)&&(t===fe&&(!(C&2)&&(Ll|=n),ae===4&&It(t,pe)),Ee(t,r),n===1&&C===0&&!(i.mode&1)&&(Yi=ne()+500,Hl&&Wt()))}function Ee(t,i){var n=t.callbackNode;mA(t,i);var r=ol(t,t===fe?pe:0);if(r===0)n!==null&&hd(n),t.callbackNode=null,t.callbackPriority=0;else if(i=r&-r,t.callbackPriority!==i){if(n!=null&&hd(n),i===1)t.tag===0?xu(rc.bind(null,t)):Vf(rc.bind(null,t)),pu(function(){!(C&6)&&Wt()}),n=null;else{switch(vf(r)){case 1:n=la;break;case 4:n=jf;break;case 16:n=ll;break;case 536870912:n=wf;break;default:n=ll}n=Jh(n,Bh.bind(null,t))}t.callbackPriority=i,t.callbackNode=n}}function Bh(t,i){if(Qr=-1,Jr=0,C&6)throw Error(v(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=ol(t,t===fe?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||i)i=Sl(t,r);else{i=r;var l=C;C|=2;var o=Lh();(fe!==t||pe!==i)&&(at=null,Yi=ne()+500,ni(t,i));do try{Hu();break}catch(a){Zh(t,a)}while(1);ma(),wl.current=o,C=l,le!==null?i=0:(fe=null,pe=0,i=ae)}if(i!==0){if(i===2&&(l=ss(t),l!==0&&(r=l,i=Fs(t,l))),i===1)throw n=qn,ni(t,0),It(t,r),Ee(t,ne()),n;if(i===6)It(t,r);else{if(l=t.current.alternate,!(r&30)&&!Pu(l)&&(i=Sl(t,r),i===2&&(o=ss(t),o!==0&&(r=o,i=Fs(t,o))),i===1))throw n=qn,ni(t,0),It(t,r),Ee(t,ne()),n;switch(t.finishedWork=l,t.finishedLanes=r,i){case 0:case 1:throw Error(v(345));case 2:_t(t,ve,at);break;case 3:if(It(t,r),(r&130023424)===r&&(i=Ra+500-ne(),10<i)){if(ol(t,0)!==0)break;if(l=t.suspendedLanes,(l&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=us(_t.bind(null,t,ve,at),i);break}_t(t,ve,at);break;case 4:if(It(t,r),(r&4194240)===r)break;for(i=t.eventTimes,l=-1;0<r;){var s=31-qe(r);o=1<<s,s=i[s],s>l&&(l=s),r&=~o}if(r=l,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fu(r/1960))-r,10<r){t.timeoutHandle=us(_t.bind(null,t,ve,at),r);break}_t(t,ve,at);break;case 5:_t(t,ve,at);break;default:throw Error(v(329))}}}return Ee(t,ne()),t.callbackNode===n?Bh.bind(null,t):null}function Fs(t,i){var n=Un;return t.current.memoizedState.isDehydrated&&(ni(t,i).flags|=256),t=Sl(t,i),t!==2&&(i=ve,ve=n,i!==null&&Ps(i)),t}function Ps(t){ve===null?ve=t:ve.push.apply(ve,t)}function Pu(t){for(var i=t;;){if(i.flags&16384){var n=i.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!et(o(),l))return!1}catch{return!1}}}if(n=i.child,i.subtreeFlags&16384&&n!==null)n.return=i,i=n;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function It(t,i){for(i&=~Ua,i&=~Ll,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var n=31-qe(i),r=1<<n;t[n]=-1,i&=~r}}function rc(t){if(C&6)throw Error(v(327));Ci();var i=ol(t,0);if(!(i&1))return Ee(t,ne()),null;var n=Sl(t,i);if(t.tag!==0&&n===2){var r=ss(t);r!==0&&(i=r,n=Fs(t,r))}if(n===1)throw n=qn,ni(t,0),It(t,i),Ee(t,ne()),n;if(n===6)throw Error(v(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,_t(t,ve,at),Ee(t,ne()),null}function Ta(t,i){var n=C;C|=1;try{return t(i)}finally{C=n,C===0&&(Yi=ne()+500,Hl&&Wt())}}function fi(t){Et!==null&&Et.tag===0&&!(C&6)&&Ci();var i=C;C|=1;var n=Le.transition,r=B;try{if(Le.transition=null,B=1,t)return t()}finally{B=r,Le.transition=n,C=i,!(C&6)&&Wt()}}function Fa(){Re=Di.current,K(Di)}function ni(t,i){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hu(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ua(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Wi(),K(Ie),K(me),Sa();break;case 5:va(r);break;case 4:Wi();break;case 13:K(_);break;case 19:K(_);break;case 10:ya(r.type._context);break;case 22:case 23:Fa()}n=n.return}if(fe=t,le=t=Ct(t.current,null),pe=Re=i,ae=0,qn=null,Ua=Ll=ci=0,ve=Un=null,ei!==null){for(i=0;i<ei.length;i++)if(n=ei[i],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}ei=null}return t}function Zh(t,i){do{var n=le;try{if(ma(),Wr.current=jl,yl){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}yl=!1}if(di=0,de=se=$=null,Dn=!1,Vn=0,Na.current=null,n===null||n.return===null){ae=1,qn=i,le=null;break}e:{var o=t,s=n.return,a=n,d=i;if(i=pe,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,g=a,u=g.tag;if(!(g.mode&1)&&(u===0||u===11||u===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Yd(s);if(y!==null){y.flags&=-257,Qd(y,s,a,o,i),y.mode&1&&Od(o,c,i),i=y,d=c;var j=i.updateQueue;if(j===null){var w=new Set;w.add(d),i.updateQueue=w}else j.add(d);break e}else{if(!(i&1)){Od(o,c,i),Pa();break e}d=Error(v(426))}}else if(q&&a.mode&1){var I=Yd(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Qd(I,s,a,o,i),ga(Oi(d,a));break e}}o=d=Oi(d,a),ae!==4&&(ae=2),Un===null?Un=[o]:Un.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,i&=-i,o.lanes|=i;var h=Sh(o,d,i);Cd(o,h);break e;case 1:a=d;var f=o.type,A=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(Ft===null||!Ft.has(A)))){o.flags|=65536,i&=-i,o.lanes|=i;var m=kh(o,a,i);Cd(o,m);break e}}o=o.return}while(o!==null)}Oh(n)}catch(S){i=S,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Lh(){var t=wl.current;return wl.current=jl,t===null?jl:t}function Pa(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(ci&268435455)&&!(Ll&268435455)||It(fe,pe)}function Sl(t,i){var n=C;C|=2;var r=Lh();(fe!==t||pe!==i)&&(at=null,ni(t,i));do try{Cu();break}catch(l){Zh(t,l)}while(1);if(ma(),C=n,wl.current=r,le!==null)throw Error(v(261));return fe=null,pe=0,ae}function Cu(){for(;le!==null;)Wh(le)}function Hu(){for(;le!==null&&!dA();)Wh(le)}function Wh(t){var i=Qh(t.alternate,t,Re);t.memoizedProps=t.pendingProps,i===null?Oh(t):le=i,Na.current=null}function Oh(t){var i=t;do{var n=i.alternate;if(t=i.return,i.flags&32768){if(n=Nu(n,i),n!==null){n.flags&=32767,le=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,le=null;return}}else if(n=Du(n,i,Re),n!==null){le=n;return}if(i=i.sibling,i!==null){le=i;return}le=i=t}while(i!==null);ae===0&&(ae=5)}function _t(t,i,n){var r=B,l=Le.transition;try{Le.transition=null,B=1,Gu(t,i,n,r)}finally{Le.transition=l,B=r}return null}function Gu(t,i,n,r){do Ci();while(Et!==null);if(C&6)throw Error(v(327));n=t.finishedWork;var l=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(v(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(yA(t,o),t===fe&&(le=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ir||(Ir=!0,Jh(ll,function(){return Ci(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Le.transition,Le.transition=null;var s=B;B=1;var a=C;C|=4,Na.current=null,Ru(t,n),Hh(n,t),lu(ps),sl=!!hs,ps=hs=null,t.current=n,Tu(n),cA(),C=a,B=s,Le.transition=o}else t.current=n;if(Ir&&(Ir=!1,Et=t,vl=l),o=t.pendingLanes,o===0&&(Ft=null),pA(n.stateNode),Ee(t,ne()),i!==null)for(r=t.onRecoverableError,n=0;n<i.length;n++)l=i[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(bl)throw bl=!1,t=Rs,Rs=null,t;return vl&1&&t.tag!==0&&Ci(),o=t.pendingLanes,o&1?t===Ts?Rn++:(Rn=0,Ts=t):Rn=0,Wt(),null}function Ci(){if(Et!==null){var t=vf(vl),i=Le.transition,n=B;try{if(Le.transition=null,B=16>t?16:t,Et===null)var r=!1;else{if(t=Et,Et=null,vl=0,C&6)throw Error(v(331));var l=C;for(C|=4,M=t.current;M!==null;){var o=M,s=o.child;if(M.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(M=c;M!==null;){var g=M;switch(g.tag){case 0:case 11:case 15:Nn(8,g,o)}var u=g.child;if(u!==null)u.return=g,M=u;else for(;M!==null;){g=M;var x=g.sibling,y=g.return;if(Fh(g),g===c){M=null;break}if(x!==null){x.return=y,M=x;break}M=y}}}var j=o.alternate;if(j!==null){var w=j.child;if(w!==null){j.child=null;do{var I=w.sibling;w.sibling=null,w=I}while(w!==null)}}M=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,M=s;else e:for(;M!==null;){if(o=M,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Nn(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,M=h;break e}M=o.return}}var f=t.current;for(M=f;M!==null;){s=M;var A=s.child;if(s.subtreeFlags&2064&&A!==null)A.return=s,M=A;else e:for(s=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zl(9,a)}}catch(S){te(a,a.return,S)}if(a===s){M=null;break e}var m=a.sibling;if(m!==null){m.return=a.return,M=m;break e}M=a.return}}if(C=l,Wt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Rl,t)}catch{}r=!0}return r}finally{B=n,Le.transition=i}}return!1}function lc(t,i,n){i=Oi(n,i),i=Sh(t,i,1),t=Tt(t,i,1),i=je(),t!==null&&(ir(t,1,i),Ee(t,i))}function te(t,i,n){if(t.tag===3)lc(t,t,n);else for(;i!==null;){if(i.tag===3){lc(i,t,n);break}else if(i.tag===1){var r=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){t=Oi(n,t),t=kh(i,t,1),i=Tt(i,t,1),t=je(),i!==null&&(ir(i,1,t),Ee(i,t));break}}i=i.return}}function Bu(t,i,n){var r=t.pingCache;r!==null&&r.delete(i),i=je(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>ne()-Ra?ni(t,0):Ua|=n),Ee(t,i)}function Yh(t,i){i===0&&(t.mode&1?(i=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):i=1);var n=je();t=gt(t,i),t!==null&&(ir(t,i,n),Ee(t,n))}function Zu(t){var i=t.memoizedState,n=0;i!==null&&(n=i.retryLane),Yh(t,n)}function Lu(t,i){var n=0;switch(t.tag){case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(v(314))}r!==null&&r.delete(i),Yh(t,n)}var Qh;Qh=function(t,i,n){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ie.current)Se=!0;else{if(!(t.lanes&n)&&!(i.flags&128))return Se=!1,Mu(t,i,n);Se=!!(t.flags&131072)}else Se=!1,q&&i.flags&1048576&&Xf(i,Al,i.index);switch(i.lanes=0,i.tag){case 2:var r=i.type;Yr(t,i),t=i.pendingProps;var l=Bi(i,me.current);Pi(i,n),l=Ia(null,i,r,t,l,n);var o=za();return i.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ze(r)?(o=!0,hl(i)):o=!1,i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wa(i),l.updater=Gl,i.stateNode=l,l._reactInternals=i,bs(i,r,t,n),i=ks(null,i,r,!0,o,n)):(i.tag=0,q&&o&&Aa(i),ye(null,i,l,n),i=i.child),i;case 16:r=i.elementType;e:{switch(Yr(t,i),t=i.pendingProps,l=r._init,r=l(r._payload),i.type=r,l=i.tag=Ou(r),t=Ve(r,t),l){case 0:i=Ss(null,i,r,t,n);break e;case 1:i=Xd(null,i,r,t,n);break e;case 11:i=Jd(null,i,r,t,n);break e;case 14:i=Vd(null,i,r,Ve(r.type,t),n);break e}throw Error(v(306,r,""))}return i;case 0:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Ve(r,l),Ss(t,i,r,l,n);case 1:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Ve(r,l),Xd(t,i,r,l,n);case 3:e:{if(Mh(i),t===null)throw Error(v(387));r=i.pendingProps,o=i.memoizedState,l=o.element,$f(t,i),xl(i,r,null,n);var s=i.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},i.updateQueue.baseState=o,i.memoizedState=o,i.flags&256){l=Oi(Error(v(423)),i),i=Kd(t,i,r,n,l);break e}else if(r!==l){l=Oi(Error(v(424)),i),i=Kd(t,i,r,n,l);break e}else for(Te=Rt(i.stateNode.containerInfo.firstChild),Fe=i,q=!0,Ke=null,n=nh(i,null,r,n),i.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zi(),r===l){i=xt(t,i,n);break e}ye(t,i,r,n)}i=i.child}return i;case 5:return rh(i),t===null&&ys(i),r=i.type,l=i.pendingProps,o=t!==null?t.memoizedProps:null,s=l.children,As(r,l)?s=null:o!==null&&As(r,o)&&(i.flags|=32),Eh(t,i),ye(t,i,s,n),i.child;case 6:return t===null&&ys(i),null;case 13:return Dh(t,i,n);case 4:return ba(i,i.stateNode.containerInfo),r=i.pendingProps,t===null?i.child=Li(i,null,r,n):ye(t,i,r,n),i.child;case 11:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Ve(r,l),Jd(t,i,r,l,n);case 7:return ye(t,i,i.pendingProps,n),i.child;case 8:return ye(t,i,i.pendingProps.children,n),i.child;case 12:return ye(t,i,i.pendingProps.children,n),i.child;case 10:e:{if(r=i.type._context,l=i.pendingProps,o=i.memoizedProps,s=l.value,J(ul,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===l.children&&!Ie.current){i=xt(t,i,n);break e}}else for(o=i.child,o!==null&&(o.return=i);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var d=a.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=pt(-1,n&-n),d.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?d.next=d:(d.next=g.next,g.next=d),c.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),js(o.return,n,i),a.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===i.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(v(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),js(s,n,i),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===i){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ye(t,i,l.children,n),i=i.child}return i;case 9:return l=i.type,r=i.pendingProps.children,Pi(i,n),l=We(l),r=r(l),i.flags|=1,ye(t,i,r,n),i.child;case 14:return r=i.type,l=Ve(r,i.pendingProps),l=Ve(r.type,l),Vd(t,i,r,l,n);case 15:return Ih(t,i,i.type,i.pendingProps,n);case 17:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Ve(r,l),Yr(t,i),i.tag=1,ze(r)?(t=!0,hl(i)):t=!1,Pi(i,n),th(i,r,l),bs(i,r,l,n),ks(null,i,r,!0,t,n);case 19:return Nh(t,i,n);case 22:return zh(t,i,n)}throw Error(v(156,i.tag))};function Jh(t,i){return yf(t,i)}function Wu(t,i,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,i,n,r){return new Wu(t,i,n,r)}function Ca(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ou(t){if(typeof t=="function")return Ca(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ia)return 11;if(t===na)return 14}return 2}function Ct(t,i){var n=t.alternate;return n===null?(n=Ze(t.tag,i,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=i,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,i=t.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Vr(t,i,n,r,l,o){var s=2;if(r=t,typeof t=="function")Ca(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case ji:return ri(n.children,l,o,i);case ta:s=8,l|=8;break;case Qo:return t=Ze(12,n,i,l|2),t.elementType=Qo,t.lanes=o,t;case Jo:return t=Ze(13,n,i,l),t.elementType=Jo,t.lanes=o,t;case Vo:return t=Ze(19,n,i,l),t.elementType=Vo,t.lanes=o,t;case tf:return Wl(n,l,o,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $c:s=10;break e;case ef:s=9;break e;case ia:s=11;break e;case na:s=14;break e;case vt:s=16,r=null;break e}throw Error(v(130,t==null?t:typeof t,""))}return i=Ze(s,n,i,l),i.elementType=t,i.type=r,i.lanes=o,i}function ri(t,i,n,r){return t=Ze(7,t,r,i),t.lanes=n,t}function Wl(t,i,n,r){return t=Ze(22,t,r,i),t.elementType=tf,t.lanes=n,t.stateNode={isHidden:!1},t}function Do(t,i,n){return t=Ze(6,t,null,i),t.lanes=n,t}function No(t,i,n){return i=Ze(4,t.children!==null?t.children:[],t.key,i),i.lanes=n,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Yu(t,i,n,r,l){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fo(0),this.expirationTimes=fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ha(t,i,n,r,l,o,s,a,d){return t=new Yu(t,i,n,a,d),i===1?(i=1,o===!0&&(i|=8)):i=0,o=Ze(3,null,null,i),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(o),t}function Qu(t,i,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yi,key:r==null?null:""+r,children:t,containerInfo:i,implementation:n}}function Vh(t){if(!t)return Bt;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(v(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ze(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(v(171))}if(t.tag===1){var n=t.type;if(ze(n))return Jf(t,n,i)}return i}function Xh(t,i,n,r,l,o,s,a,d){return t=Ha(n,r,!0,t,l,o,s,a,d),t.context=Vh(null),n=t.current,r=je(),l=Pt(n),o=pt(r,l),o.callback=i??null,Tt(n,o,l),t.current.lanes=l,ir(t,l,r),Ee(t,r),t}function Ol(t,i,n,r){var l=i.current,o=je(),s=Pt(l);return n=Vh(n),i.context===null?i.context=n:i.pendingContext=n,i=pt(o,s),i.payload={element:t},r=r===void 0?null:r,r!==null&&(i.callback=r),t=Tt(l,i,s),t!==null&&(_e(t,l,s,o),Lr(t,l,s)),s}function kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oc(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<i?n:i}}function Ga(t,i){oc(t,i),(t=t.alternate)&&oc(t,i)}function Ju(){return null}var Kh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ba(t){this._internalRoot=t}Yl.prototype.render=Ba.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(v(409));Ol(t,i,null,null)};Yl.prototype.unmount=Ba.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;fi(function(){Ol(null,t,null,null)}),i[ut]=null}};function Yl(t){this._internalRoot=t}Yl.prototype.unstable_scheduleHydration=function(t){if(t){var i=If();t={blockedOn:null,target:t,priority:i};for(var n=0;n<kt.length&&i!==0&&i<kt[n].priority;n++);kt.splice(n,0,t),n===0&&Ef(t)}};function Za(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sc(){}function Vu(t,i,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=kl(s);o.call(c)}}var s=Xh(i,r,t,0,null,!1,!1,"",sc);return t._reactRootContainer=s,t[ut]=s.current,Wn(t.nodeType===8?t.parentNode:t),fi(),s}for(;l=t.lastChild;)t.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=kl(d);a.call(c)}}var d=Ha(t,0,!1,null,null,!1,!1,"",sc);return t._reactRootContainer=d,t[ut]=d.current,Wn(t.nodeType===8?t.parentNode:t),fi(function(){Ol(i,d,n,r)}),d}function Jl(t,i,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var a=l;l=function(){var d=kl(s);a.call(d)}}Ol(i,s,t,l)}else s=Vu(n,i,t,l,r);return kl(s)}Sf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var n=bn(i.pendingLanes);n!==0&&(oa(i,n|1),Ee(i,ne()),!(C&6)&&(Yi=ne()+500,Wt()))}break;case 13:fi(function(){var r=gt(t,1);if(r!==null){var l=je();_e(r,t,1,l)}}),Ga(t,1)}};sa=function(t){if(t.tag===13){var i=gt(t,134217728);if(i!==null){var n=je();_e(i,t,134217728,n)}Ga(t,134217728)}};kf=function(t){if(t.tag===13){var i=Pt(t),n=gt(t,i);if(n!==null){var r=je();_e(n,t,i,r)}Ga(t,i)}};If=function(){return B};zf=function(t,i){var n=B;try{return B=t,i()}finally{B=n}};rs=function(t,i,n){switch(i){case"input":if(qo(t,n),i=n.name,n.type==="radio"&&i!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<n.length;i++){var r=n[i];if(r!==t&&r.form===t.form){var l=Cl(r);if(!l)throw Error(v(90));rf(r),qo(r,l)}}}break;case"textarea":of(t,n);break;case"select":i=n.value,i!=null&&Ui(t,!!n.multiple,i,!1)}};pf=Ta;Af=fi;var Xu={usingClientEntryPoint:!1,Events:[rr,Si,Cl,ff,hf,Ta]},xn={findFiberByHostInstance:$t,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ku={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xf(t),t===null?null:t.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||Ju,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zr.isDisabled&&zr.supportsFiber)try{Rl=zr.inject(Ku),lt=zr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xu;Ce.createPortal=function(t,i){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(i))throw Error(v(200));return Qu(t,i,null,n)};Ce.createRoot=function(t,i){if(!Za(t))throw Error(v(299));var n=!1,r="",l=Kh;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),i=Ha(t,1,!1,null,null,n,!1,r,l),t[ut]=i.current,Wn(t.nodeType===8?t.parentNode:t),new Ba(i)};Ce.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=xf(i),t=t===null?null:t.stateNode,t};Ce.flushSync=function(t){return fi(t)};Ce.hydrate=function(t,i,n){if(!Ql(i))throw Error(v(200));return Jl(null,t,i,!0,n)};Ce.hydrateRoot=function(t,i,n){if(!Za(t))throw Error(v(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=Kh;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),i=Xh(i,null,t,1,n??null,l,!1,o,s),t[ut]=i.current,Wn(t),r)for(t=0;t<r.length;t++)n=r[t],l=n._getVersion,l=l(n._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[n,l]:i.mutableSourceEagerHydrationData.push(n,l);return new Yl(i)};Ce.render=function(t,i,n){if(!Ql(i))throw Error(v(200));return Jl(null,t,i,!1,n)};Ce.unmountComponentAtNode=function(t){if(!Ql(t))throw Error(v(40));return t._reactRootContainer?(fi(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[ut]=null})}),!0):!1};Ce.unstable_batchedUpdates=Ta;Ce.unstable_renderSubtreeIntoContainer=function(t,i,n,r){if(!Ql(n))throw Error(v(200));if(t==null||t._reactInternals===void 0)throw Error(v(38));return Jl(t,i,n,!1,r)};Ce.version="18.2.0-next-9e3b772b8-20220608";function qh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qh)}catch(t){console.error(t)}}qh(),Vc.exports=Ce;var qu=Vc.exports,ac=qu;Oo.createRoot=ac.createRoot,Oo.hydrateRoot=ac.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _n(){return _n=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},_n.apply(this,arguments)}var Mt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mt||(Mt={}));const dc="popstate";function _u(t){t===void 0&&(t={});function i(r,l){let{pathname:o,search:s,hash:a}=r.location;return Cs("",{pathname:o,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:Il(l)}return eg(i,n,null,t)}function oe(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function _h(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function $u(){return Math.random().toString(36).substr(2,8)}function cc(t,i){return{usr:t.state,key:t.key,idx:i}}function Cs(t,i,n,r){return n===void 0&&(n=null),_n({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof i=="string"?nn(i):i,{state:n,key:i&&i.key||r||$u()})}function Il(t){let{pathname:i="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function nn(t){let i={};if(t){let n=t.indexOf("#");n>=0&&(i.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(i.search=t.substr(r),t=t.substr(0,r)),t&&(i.pathname=t)}return i}function eg(t,i,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,a=Mt.Pop,d=null,c=g();c==null&&(c=0,s.replaceState(_n({},s.state,{idx:c}),""));function g(){return(s.state||{idx:null}).idx}function u(){a=Mt.Pop;let I=g(),h=I==null?null:I-c;c=I,d&&d({action:a,location:w.location,delta:h})}function x(I,h){a=Mt.Push;let f=Cs(w.location,I,h);n&&n(f,I),c=g()+1;let A=cc(f,c),m=w.createHref(f);try{s.pushState(A,"",m)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;l.location.assign(m)}o&&d&&d({action:a,location:w.location,delta:1})}function y(I,h){a=Mt.Replace;let f=Cs(w.location,I,h);n&&n(f,I),c=g();let A=cc(f,c),m=w.createHref(f);s.replaceState(A,"",m),o&&d&&d({action:a,location:w.location,delta:0})}function j(I){let h=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof I=="string"?I:Il(I);return f=f.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let w={get action(){return a},get location(){return t(l,s)},listen(I){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(dc,u),d=I,()=>{l.removeEventListener(dc,u),d=null}},createHref(I){return i(l,I)},createURL:j,encodeLocation(I){let h=j(I);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:y,go(I){return s.go(I)}};return w}var fc;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(fc||(fc={}));function tg(t,i,n){n===void 0&&(n="/");let r=typeof i=="string"?nn(i):i,l=La(r.pathname||"/",n);if(l==null)return null;let o=$h(t);ig(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let d=Ag(l);s=fg(o[a],d)}return s}function $h(t,i,n,r){i===void 0&&(i=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,s,a)=>{let d={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(oe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let c=Ht([r,d.relativePath]),g=n.concat(d);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),$h(o.children,i,g,c)),!(o.path==null&&!o.index)&&i.push({path:c,score:dg(c,o.index),routesMeta:g})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,s);else for(let d of e0(o.path))l(o,s,d)}),i}function e0(t){let i=t.split("/");if(i.length===0)return[];let[n,...r]=i,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let s=e0(r.join("/")),a=[];return a.push(...s.map(d=>d===""?o:[o,d].join("/"))),l&&a.push(...s),a.map(d=>t.startsWith("/")&&d===""?"/":d)}function ig(t){t.sort((i,n)=>i.score!==n.score?n.score-i.score:cg(i.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ng=/^:[\w-]+$/,rg=3,lg=2,og=1,sg=10,ag=-2,hc=t=>t==="*";function dg(t,i){let n=t.split("/"),r=n.length;return n.some(hc)&&(r+=ag),i&&(r+=lg),n.filter(l=>!hc(l)).reduce((l,o)=>l+(ng.test(o)?rg:o===""?og:sg),r)}function cg(t,i){return t.length===i.length&&t.slice(0,-1).every((r,l)=>r===i[l])?t[t.length-1]-i[i.length-1]:0}function fg(t,i){let{routesMeta:n}=t,r={},l="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],d=s===n.length-1,c=l==="/"?i:i.slice(l.length)||"/",g=hg({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},c);if(!g)return null;Object.assign(r,g.params);let u=a.route;o.push({params:r,pathname:Ht([l,g.pathname]),pathnameBase:mg(Ht([l,g.pathnameBase])),route:u}),g.pathnameBase!=="/"&&(l=Ht([l,g.pathnameBase]))}return o}function hg(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=pg(t.path,t.caseSensitive,t.end),l=i.match(n);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,g,u)=>{let{paramName:x,isOptional:y}=g;if(x==="*"){let w=a[u]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const j=a[u];return y&&!j?c[x]=void 0:c[x]=(j||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function pg(t,i,n){i===void 0&&(i=!1),n===void 0&&(n=!0),_h(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,d)=>(r.push({paramName:a,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),r]}function Ag(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return _h(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),t}}function La(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let n=i.endsWith("/")?i.length-1:i.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ug(t,i){i===void 0&&(i="/");let{pathname:n,search:r="",hash:l=""}=typeof t=="string"?nn(t):t;return{pathname:n?n.startsWith("/")?n:gg(n,i):i,search:yg(r),hash:jg(l)}}function gg(t,i){let n=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Uo(t,i,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xg(t){return t.filter((i,n)=>n===0||i.route.path&&i.route.path.length>0)}function t0(t,i){let n=xg(t);return i?n.map((r,l)=>l===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function i0(t,i,n,r){r===void 0&&(r=!1);let l;typeof t=="string"?l=nn(t):(l=_n({},t),oe(!l.pathname||!l.pathname.includes("?"),Uo("?","pathname","search",l)),oe(!l.pathname||!l.pathname.includes("#"),Uo("#","pathname","hash",l)),oe(!l.search||!l.search.includes("#"),Uo("#","search","hash",l)));let o=t===""||l.pathname==="",s=o?"/":l.pathname,a;if(s==null)a=n;else{let u=i.length-1;if(!r&&s.startsWith("..")){let x=s.split("/");for(;x[0]==="..";)x.shift(),u-=1;l.pathname=x.join("/")}a=u>=0?i[u]:"/"}let d=ug(l,a),c=s&&s!=="/"&&s.endsWith("/"),g=(o||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||g)&&(d.pathname+="/"),d}const Ht=t=>t.join("/").replace(/\/\/+/g,"/"),mg=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),yg=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jg=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wg(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n0=["post","put","patch","delete"];new Set(n0);const bg=["get",...n0];new Set(bg);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $n(){return $n=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$n.apply(this,arguments)}const Wa=z.createContext(null),vg=z.createContext(null),Ai=z.createContext(null),Vl=z.createContext(null),Ot=z.createContext({outlet:null,matches:[],isDataRoute:!1}),r0=z.createContext(null);function Sg(t,i){let{relative:n}=i===void 0?{}:i;or()||oe(!1);let{basename:r,navigator:l}=z.useContext(Ai),{hash:o,pathname:s,search:a}=o0(t,{relative:n}),d=s;return r!=="/"&&(d=s==="/"?r:Ht([r,s])),l.createHref({pathname:d,search:a,hash:o})}function or(){return z.useContext(Vl)!=null}function sr(){return or()||oe(!1),z.useContext(Vl).location}function l0(t){z.useContext(Ai).static||z.useLayoutEffect(t)}function kg(){let{isDataRoute:t}=z.useContext(Ot);return t?Bg():Ig()}function Ig(){or()||oe(!1);let t=z.useContext(Wa),{basename:i,future:n,navigator:r}=z.useContext(Ai),{matches:l}=z.useContext(Ot),{pathname:o}=sr(),s=JSON.stringify(t0(l,n.v7_relativeSplatPath)),a=z.useRef(!1);return l0(()=>{a.current=!0}),z.useCallback(function(c,g){if(g===void 0&&(g={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=i0(c,JSON.parse(s),o,g.relative==="path");t==null&&i!=="/"&&(u.pathname=u.pathname==="/"?i:Ht([i,u.pathname])),(g.replace?r.replace:r.push)(u,g.state,g)},[i,r,s,o,t])}const zg=z.createContext(null);function Eg(t){let i=z.useContext(Ot).outlet;return i&&z.createElement(zg.Provider,{value:t},i)}function o0(t,i){let{relative:n}=i===void 0?{}:i,{future:r}=z.useContext(Ai),{matches:l}=z.useContext(Ot),{pathname:o}=sr(),s=JSON.stringify(t0(l,r.v7_relativeSplatPath));return z.useMemo(()=>i0(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function Mg(t,i){return Dg(t,i)}function Dg(t,i,n,r){or()||oe(!1);let{navigator:l}=z.useContext(Ai),{matches:o}=z.useContext(Ot),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=sr(),g;if(i){var u;let I=typeof i=="string"?nn(i):i;d==="/"||(u=I.pathname)!=null&&u.startsWith(d)||oe(!1),g=I}else g=c;let x=g.pathname||"/",y=x;if(d!=="/"){let I=d.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(I.length).join("/")}let j=tg(t,{pathname:y}),w=Fg(j&&j.map(I=>Object.assign({},I,{params:Object.assign({},a,I.params),pathname:Ht([d,l.encodeLocation?l.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?d:Ht([d,l.encodeLocation?l.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),o,n,r);return i&&w?z.createElement(Vl.Provider,{value:{location:$n({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Mt.Pop}},w):w}function Ng(){let t=Gg(),i=wg(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},i),n?z.createElement("pre",{style:l},n):null,o)}const Ug=z.createElement(Ng,null);class Rg extends z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,n){return n.location!==i.location||n.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:n.error,location:n.location,revalidation:i.revalidation||n.revalidation}}componentDidCatch(i,n){console.error("React Router caught the following error during render",i,n)}render(){return this.state.error!==void 0?z.createElement(Ot.Provider,{value:this.props.routeContext},z.createElement(r0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Tg(t){let{routeContext:i,match:n,children:r}=t,l=z.useContext(Wa);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),z.createElement(Ot.Provider,{value:i},r)}function Fg(t,i,n,r){var l;if(i===void 0&&(i=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(l=n)==null?void 0:l.errors;if(a!=null){let g=s.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);g>=0||oe(!1),s=s.slice(0,Math.min(s.length,g+1))}let d=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<s.length;g++){let u=s[g];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=g),u.route.id){let{loaderData:x,errors:y}=n,j=u.route.loader&&x[u.route.id]===void 0&&(!y||y[u.route.id]===void 0);if(u.route.lazy||j){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((g,u,x)=>{let y,j=!1,w=null,I=null;n&&(y=a&&u.route.id?a[u.route.id]:void 0,w=u.route.errorElement||Ug,d&&(c<0&&x===0?(Zg("route-fallback",!1),j=!0,I=null):c===x&&(j=!0,I=u.route.hydrateFallbackElement||null)));let h=i.concat(s.slice(0,x+1)),f=()=>{let A;return y?A=w:j?A=I:u.route.Component?A=z.createElement(u.route.Component,null):u.route.element?A=u.route.element:A=g,z.createElement(Tg,{match:u,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:A})};return n&&(u.route.ErrorBoundary||u.route.errorElement||x===0)?z.createElement(Rg,{location:n.location,revalidation:n.revalidation,component:w,error:y,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var s0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(s0||{}),zl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zl||{});function Pg(t){let i=z.useContext(Wa);return i||oe(!1),i}function Cg(t){let i=z.useContext(vg);return i||oe(!1),i}function Hg(t){let i=z.useContext(Ot);return i||oe(!1),i}function a0(t){let i=Hg(),n=i.matches[i.matches.length-1];return n.route.id||oe(!1),n.route.id}function Gg(){var t;let i=z.useContext(r0),n=Cg(zl.UseRouteError),r=a0(zl.UseRouteError);return i!==void 0?i:(t=n.errors)==null?void 0:t[r]}function Bg(){let{router:t}=Pg(s0.UseNavigateStable),i=a0(zl.UseNavigateStable),n=z.useRef(!1);return l0(()=>{n.current=!0}),z.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,$n({fromRouteId:i},o)))},[t,i])}const pc={};function Zg(t,i,n){!i&&!pc[t]&&(pc[t]=!0)}function Lg(t){return Eg(t.context)}function H(t){oe(!1)}function Wg(t){let{basename:i="/",children:n=null,location:r,navigationType:l=Mt.Pop,navigator:o,static:s=!1,future:a}=t;or()&&oe(!1);let d=i.replace(/^\/*/,"/"),c=z.useMemo(()=>({basename:d,navigator:o,static:s,future:$n({v7_relativeSplatPath:!1},a)}),[d,a,o,s]);typeof r=="string"&&(r=nn(r));let{pathname:g="/",search:u="",hash:x="",state:y=null,key:j="default"}=r,w=z.useMemo(()=>{let I=La(g,d);return I==null?null:{location:{pathname:I,search:u,hash:x,state:y,key:j},navigationType:l}},[d,g,u,x,y,j,l]);return w==null?null:z.createElement(Ai.Provider,{value:c},z.createElement(Vl.Provider,{children:n,value:w}))}function Og(t){let{children:i,location:n}=t;return Mg(Hs(i),n)}new Promise(()=>{});function Hs(t,i){i===void 0&&(i=[]);let n=[];return z.Children.forEach(t,(r,l)=>{if(!z.isValidElement(r))return;let o=[...i,l];if(r.type===z.Fragment){n.push.apply(n,Hs(r.props.children,o));return}r.type!==H&&oe(!1),!r.props.index||!r.props.children||oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Hs(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Gs.apply(this,arguments)}function Yg(t,i){if(t==null)return{};var n={},r=Object.keys(t),l,o;for(o=0;o<r.length;o++)l=r[o],!(i.indexOf(l)>=0)&&(n[l]=t[l]);return n}function Qg(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jg(t,i){return t.button===0&&(!i||i==="_self")&&!Qg(t)}const Vg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Xg="6";try{window.__reactRouterVersion=Xg}catch{}const Kg="startTransition",Ac=Zp[Kg];function qg(t){let{basename:i,children:n,future:r,window:l}=t,o=z.useRef();o.current==null&&(o.current=_u({window:l,v5Compat:!0}));let s=o.current,[a,d]=z.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},g=z.useCallback(u=>{c&&Ac?Ac(()=>d(u)):d(u)},[d,c]);return z.useLayoutEffect(()=>s.listen(g),[s,g]),z.createElement(Wg,{basename:i,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const _g=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qi=z.forwardRef(function(i,n){let{onClick:r,relative:l,reloadDocument:o,replace:s,state:a,target:d,to:c,preventScrollReset:g,unstable_viewTransition:u}=i,x=Yg(i,Vg),{basename:y}=z.useContext(Ai),j,w=!1;if(typeof c=="string"&&$g.test(c)&&(j=c,_g))try{let A=new URL(window.location.href),m=c.startsWith("//")?new URL(A.protocol+c):new URL(c),S=La(m.pathname,y);m.origin===A.origin&&S!=null?c=S+m.search+m.hash:w=!0}catch{}let I=Sg(c,{relative:l}),h=ex(c,{replace:s,state:a,target:d,preventScrollReset:g,relative:l,unstable_viewTransition:u});function f(A){r&&r(A),A.defaultPrevented||h(A)}return z.createElement("a",Gs({},x,{href:j||I,onClick:w||o?r:f,ref:n,target:d}))});var uc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(uc||(uc={}));var gc;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gc||(gc={}));function ex(t,i){let{target:n,replace:r,state:l,preventScrollReset:o,relative:s,unstable_viewTransition:a}=i===void 0?{}:i,d=kg(),c=sr(),g=o0(t,{relative:s});return z.useCallback(u=>{if(Jg(u,n)){u.preventDefault();let x=r!==void 0?r:Il(c)===Il(g);d(t,{replace:x,state:l,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,d,g,r,l,n,t,o,s,a])}var ke=function(){return ke=Object.assign||function(i){for(var n,r=1,l=arguments.length;r<l;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])}return i},ke.apply(this,arguments)};function El(t,i,n){if(n||arguments.length===2)for(var r=0,l=i.length,o;r<l;r++)(o||!(r in i))&&(o||(o=Array.prototype.slice.call(i,0,r)),o[r]=i[r]);return t.concat(o||Array.prototype.slice.call(i))}var X="-ms-",Tn="-moz-",G="-webkit-",d0="comm",Xl="rule",Oa="decl",tx="@import",c0="@keyframes",ix="@layer",f0=Math.abs,Ya=String.fromCharCode,Bs=Object.assign;function nx(t,i){return ce(t,0)^45?(((i<<2^ce(t,0))<<2^ce(t,1))<<2^ce(t,2))<<2^ce(t,3):0}function h0(t){return t.trim()}function dt(t,i){return(t=i.exec(t))?t[0]:t}function T(t,i,n){return t.replace(i,n)}function Xr(t,i,n){return t.indexOf(i,n)}function ce(t,i){return t.charCodeAt(i)|0}function Ji(t,i,n){return t.slice(i,n)}function nt(t){return t.length}function p0(t){return t.length}function Sn(t,i){return i.push(t),t}function rx(t,i){return t.map(i).join("")}function xc(t,i){return t.filter(function(n){return!dt(n,i)})}var Kl=1,Vi=1,A0=0,Ye=0,re=0,rn="";function ql(t,i,n,r,l,o,s,a){return{value:t,root:i,parent:n,type:r,props:l,children:o,line:Kl,column:Vi,length:s,return:"",siblings:a}}function bt(t,i){return Bs(ql("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},i)}function mi(t){for(;t.root;)t=bt(t.root,{children:[t]});Sn(t,t.siblings)}function lx(){return re}function ox(){return re=Ye>0?ce(rn,--Ye):0,Vi--,re===10&&(Vi=1,Kl--),re}function $e(){return re=Ye<A0?ce(rn,Ye++):0,Vi++,re===10&&(Vi=1,Kl++),re}function li(){return ce(rn,Ye)}function Kr(){return Ye}function _l(t,i){return Ji(rn,t,i)}function Zs(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sx(t){return Kl=Vi=1,A0=nt(rn=t),Ye=0,[]}function ax(t){return rn="",t}function Ro(t){return h0(_l(Ye-1,Ls(t===91?t+2:t===40?t+1:t)))}function dx(t){for(;(re=li())&&re<33;)$e();return Zs(t)>2||Zs(re)>3?"":" "}function cx(t,i){for(;--i&&$e()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return _l(t,Kr()+(i<6&&li()==32&&$e()==32))}function Ls(t){for(;$e();)switch(re){case t:return Ye;case 34:case 39:t!==34&&t!==39&&Ls(re);break;case 40:t===41&&Ls(t);break;case 92:$e();break}return Ye}function fx(t,i){for(;$e()&&t+re!==47+10;)if(t+re===42+42&&li()===47)break;return"/*"+_l(i,Ye-1)+"*"+Ya(t===47?t:$e())}function hx(t){for(;!Zs(li());)$e();return _l(t,Ye)}function px(t){return ax(qr("",null,null,null,[""],t=sx(t),0,[0],t))}function qr(t,i,n,r,l,o,s,a,d){for(var c=0,g=0,u=s,x=0,y=0,j=0,w=1,I=1,h=1,f=0,A="",m=l,S=o,k=r,b=A;I;)switch(j=f,f=$e()){case 40:if(j!=108&&ce(b,u-1)==58){Xr(b+=T(Ro(f),"&","&\f"),"&\f",f0(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=Ro(f);break;case 9:case 10:case 13:case 32:b+=dx(j);break;case 92:b+=cx(Kr()-1,7);continue;case 47:switch(li()){case 42:case 47:Sn(Ax(fx($e(),Kr()),i,n,d),d);break;default:b+="/"}break;case 123*w:a[c++]=nt(b)*h;case 125*w:case 59:case 0:switch(f){case 0:case 125:I=0;case 59+g:h==-1&&(b=T(b,/\f/g,"")),y>0&&nt(b)-u&&Sn(y>32?yc(b+";",r,n,u-1,d):yc(T(b," ","")+";",r,n,u-2,d),d);break;case 59:b+=";";default:if(Sn(k=mc(b,i,n,c,g,l,a,A,m=[],S=[],u,o),o),f===123)if(g===0)qr(b,i,k,k,m,o,u,a,S);else switch(x===99&&ce(b,3)===110?100:x){case 100:case 108:case 109:case 115:qr(t,k,k,r&&Sn(mc(t,k,k,0,0,l,a,A,l,m=[],u,S),S),l,S,u,a,r?m:S);break;default:qr(b,k,k,k,[""],S,0,a,S)}}c=g=y=0,w=h=1,A=b="",u=s;break;case 58:u=1+nt(b),y=j;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&ox()==125)continue}switch(b+=Ya(f),f*w){case 38:h=g>0?1:(b+="\f",-1);break;case 44:a[c++]=(nt(b)-1)*h,h=1;break;case 64:li()===45&&(b+=Ro($e())),x=li(),g=u=nt(A=b+=hx(Kr())),f++;break;case 45:j===45&&nt(b)==2&&(w=0)}}return o}function mc(t,i,n,r,l,o,s,a,d,c,g,u){for(var x=l-1,y=l===0?o:[""],j=p0(y),w=0,I=0,h=0;w<r;++w)for(var f=0,A=Ji(t,x+1,x=f0(I=s[w])),m=t;f<j;++f)(m=h0(I>0?y[f]+" "+A:T(A,/&\f/g,y[f])))&&(d[h++]=m);return ql(t,i,n,l===0?Xl:a,d,c,g,u)}function Ax(t,i,n,r){return ql(t,i,n,d0,Ya(lx()),Ji(t,2,-2),0,r)}function yc(t,i,n,r,l){return ql(t,i,n,Oa,Ji(t,0,r),Ji(t,r+1,-1),r,l)}function u0(t,i,n){switch(nx(t,i)){case 5103:return G+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+t+t;case 4789:return Tn+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return G+t+Tn+t+X+t+t;case 5936:switch(ce(t,i+11)){case 114:return G+t+X+T(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return G+t+X+T(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return G+t+X+T(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return G+t+X+t+t;case 6165:return G+t+X+"flex-"+t+t;case 5187:return G+t+T(t,/(\w+).+(:[^]+)/,G+"box-$1$2"+X+"flex-$1$2")+t;case 5443:return G+t+X+"flex-item-"+T(t,/flex-|-self/g,"")+(dt(t,/flex-|baseline/)?"":X+"grid-row-"+T(t,/flex-|-self/g,""))+t;case 4675:return G+t+X+"flex-line-pack"+T(t,/align-content|flex-|-self/g,"")+t;case 5548:return G+t+X+T(t,"shrink","negative")+t;case 5292:return G+t+X+T(t,"basis","preferred-size")+t;case 6060:return G+"box-"+T(t,"-grow","")+G+t+X+T(t,"grow","positive")+t;case 4554:return G+T(t,/([^-])(transform)/g,"$1"+G+"$2")+t;case 6187:return T(T(T(t,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),t,"")+t;case 5495:case 3959:return T(t,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return T(T(t,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+t+t;case 4200:if(!dt(t,/flex-|baseline/))return X+"grid-column-align"+Ji(t,i)+t;break;case 2592:case 3360:return X+T(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,l){return i=l,dt(r.props,/grid-\w+-end/)})?~Xr(t+(n=n[i].value),"span",0)?t:X+T(t,"-start","")+t+X+"grid-row-span:"+(~Xr(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(t,/\d+/))+";":X+T(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?t:X+T(T(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return T(t,/(.+)-inline(.+)/,G+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(t)-1-i>6)switch(ce(t,i+1)){case 109:if(ce(t,i+4)!==45)break;case 102:return T(t,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+Tn+(ce(t,i+3)==108?"$3":"$2-$3"))+t;case 115:return~Xr(t,"stretch",0)?u0(T(t,"stretch","fill-available"),i,n)+t:t}break;case 5152:case 5920:return T(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,o,s,a,d,c){return X+l+":"+o+c+(s?X+l+"-span:"+(a?d:+d-+o)+c:"")+t});case 4949:if(ce(t,i+6)===121)return T(t,":",":"+G)+t;break;case 6444:switch(ce(t,ce(t,14)===45?18:11)){case 120:return T(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ce(t,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+X+"$2box$3")+t;case 100:return T(t,":",":"+X)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return T(t,"scroll-","scroll-snap-")+t}return t}function Ml(t,i){for(var n="",r=0;r<t.length;r++)n+=i(t[r],r,t,i)||"";return n}function ux(t,i,n,r){switch(t.type){case ix:if(t.children.length)break;case tx:case Oa:return t.return=t.return||t.value;case d0:return"";case c0:return t.return=t.value+"{"+Ml(t.children,r)+"}";case Xl:if(!nt(t.value=t.props.join(",")))return""}return nt(n=Ml(t.children,r))?t.return=t.value+"{"+n+"}":""}function gx(t){var i=p0(t);return function(n,r,l,o){for(var s="",a=0;a<i;a++)s+=t[a](n,r,l,o)||"";return s}}function xx(t){return function(i){i.root||(i=i.return)&&t(i)}}function mx(t,i,n,r){if(t.length>-1&&!t.return)switch(t.type){case Oa:t.return=u0(t.value,t.length,n);return;case c0:return Ml([bt(t,{value:T(t.value,"@","@"+G)})],r);case Xl:if(t.length)return rx(n=t.props,function(l){switch(dt(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(bt(t,{props:[T(l,/:(read-\w+)/,":"+Tn+"$1")]})),mi(bt(t,{props:[l]})),Bs(t,{props:xc(n,r)});break;case"::placeholder":mi(bt(t,{props:[T(l,/:(plac\w+)/,":"+G+"input-$1")]})),mi(bt(t,{props:[T(l,/:(plac\w+)/,":"+Tn+"$1")]})),mi(bt(t,{props:[T(l,/:(plac\w+)/,X+"input-$1")]})),mi(bt(t,{props:[l]})),Bs(t,{props:xc(n,r)});break}return""})}}var yx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",g0="active",x0="data-styled-version",$l="6.1.11",Qa=`/*!sc*/
`,Ja=typeof window<"u"&&"HTMLElement"in window,jx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),eo=Object.freeze([]),Ki=Object.freeze({});function wx(t,i,n){return n===void 0&&(n=Ki),t.theme!==n.theme&&t.theme||i||n.theme}var m0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,vx=/(^-|-$)/g;function jc(t){return t.replace(bx,"-").replace(vx,"")}var Sx=/(a)(d)/gi,Er=52,wc=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ws(t){var i,n="";for(i=Math.abs(t);i>Er;i=i/Er|0)n=wc(i%Er)+n;return(wc(i%Er)+n).replace(Sx,"$1-$2")}var To,y0=5381,Ni=function(t,i){for(var n=i.length;n;)t=33*t^i.charCodeAt(--n);return t},j0=function(t){return Ni(y0,t)};function kx(t){return Ws(j0(t)>>>0)}function Ix(t){return t.displayName||t.name||"Component"}function Fo(t){return typeof t=="string"&&!0}var w0=typeof Symbol=="function"&&Symbol.for,b0=w0?Symbol.for("react.memo"):60115,zx=w0?Symbol.for("react.forward_ref"):60112,Ex={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Mx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dx=((To={})[zx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},To[b0]=v0,To);function bc(t){return("type"in(i=t)&&i.type.$$typeof)===b0?v0:"$$typeof"in t?Dx[t.$$typeof]:Ex;var i}var Nx=Object.defineProperty,Ux=Object.getOwnPropertyNames,vc=Object.getOwnPropertySymbols,Rx=Object.getOwnPropertyDescriptor,Tx=Object.getPrototypeOf,Sc=Object.prototype;function S0(t,i,n){if(typeof i!="string"){if(Sc){var r=Tx(i);r&&r!==Sc&&S0(t,r,n)}var l=Ux(i);vc&&(l=l.concat(vc(i)));for(var o=bc(t),s=bc(i),a=0;a<l.length;++a){var d=l[a];if(!(d in Mx||n&&n[d]||s&&d in s||o&&d in o)){var c=Rx(i,d);try{Nx(t,d,c)}catch{}}}}return t}function qi(t){return typeof t=="function"}function Va(t){return typeof t=="object"&&"styledComponentId"in t}function ii(t,i){return t&&i?"".concat(t," ").concat(i):t||i||""}function kc(t,i){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=i?i+t[r]:t[r];return n}function er(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Os(t,i,n){if(n===void 0&&(n=!1),!n&&!er(t)&&!Array.isArray(t))return i;if(Array.isArray(i))for(var r=0;r<i.length;r++)t[r]=Os(t[r],i[r]);else if(er(i))for(var r in i)t[r]=Os(t[r],i[r]);return t}function Xa(t,i){Object.defineProperty(t,"toString",{value:i})}function ar(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Fx=function(){function t(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return t.prototype.indexOfGroup=function(i){for(var n=0,r=0;r<i;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(i,n){if(i>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,o=l;i>=o;)if((o<<=1)<0)throw ar(16,"".concat(i));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=l;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(i+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[i]++,a++)},t.prototype.clearGroup=function(i){if(i<this.length){var n=this.groupSizes[i],r=this.indexOfGroup(i),l=r+n;this.groupSizes[i]=0;for(var o=r;o<l;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(i){var n="";if(i>=this.length||this.groupSizes[i]===0)return n;for(var r=this.groupSizes[i],l=this.indexOfGroup(i),o=l+r,s=l;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Qa);return n},t}(),_r=new Map,Dl=new Map,$r=1,Mr=function(t){if(_r.has(t))return _r.get(t);for(;Dl.has($r);)$r++;var i=$r++;return _r.set(t,i),Dl.set(i,t),i},Px=function(t,i){$r=i+1,_r.set(t,i),Dl.set(i,t)},Cx="style[".concat(Xi,"][").concat(x0,'="').concat($l,'"]'),Hx=new RegExp("^".concat(Xi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gx=function(t,i,n){for(var r,l=n.split(","),o=0,s=l.length;o<s;o++)(r=l[o])&&t.registerName(i,r)},Bx=function(t,i){for(var n,r=((n=i.textContent)!==null&&n!==void 0?n:"").split(Qa),l=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var d=a.match(Hx);if(d){var c=0|parseInt(d[1],10),g=d[2];c!==0&&(Px(g,c),Gx(t,g,d[3]),t.getTag().insertRules(c,l)),l.length=0}else l.push(a)}}};function Zx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var k0=function(t){var i=document.head,n=t||i,r=document.createElement("style"),l=function(a){var d=Array.from(a.querySelectorAll("style[".concat(Xi,"]")));return d[d.length-1]}(n),o=l!==void 0?l.nextSibling:null;r.setAttribute(Xi,g0),r.setAttribute(x0,$l);var s=Zx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Lx=function(){function t(i){this.element=k0(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,l=0,o=r.length;l<o;l++){var s=r[l];if(s.ownerNode===n)return s}throw ar(17)}(this.element),this.length=0}return t.prototype.insertRule=function(i,n){try{return this.sheet.insertRule(n,i),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},t.prototype.getRule=function(i){var n=this.sheet.cssRules[i];return n&&n.cssText?n.cssText:""},t}(),Wx=function(){function t(i){this.element=k0(i),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(i,n){if(i<=this.length&&i>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[i]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},t.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},t}(),Ox=function(){function t(i){this.rules=[],this.length=0}return t.prototype.insertRule=function(i,n){return i<=this.length&&(this.rules.splice(i,0,n),this.length++,!0)},t.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},t.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},t}(),Ic=Ja,Yx={isServer:!Ja,useCSSOMInjection:!jx},I0=function(){function t(i,n,r){i===void 0&&(i=Ki),n===void 0&&(n={});var l=this;this.options=ke(ke({},Yx),i),this.gs=n,this.names=new Map(r),this.server=!!i.isServer,!this.server&&Ja&&Ic&&(Ic=!1,function(o){for(var s=document.querySelectorAll(Cx),a=0,d=s.length;a<d;a++){var c=s[a];c&&c.getAttribute(Xi)!==g0&&(Bx(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Xa(this,function(){return function(o){for(var s=o.getTag(),a=s.length,d="",c=function(u){var x=function(h){return Dl.get(h)}(u);if(x===void 0)return"continue";var y=o.names.get(x),j=s.getGroup(u);if(y===void 0||j.length===0)return"continue";var w="".concat(Xi,".g").concat(u,'[id="').concat(x,'"]'),I="";y!==void 0&&y.forEach(function(h){h.length>0&&(I+="".concat(h,","))}),d+="".concat(j).concat(w,'{content:"').concat(I,'"}').concat(Qa)},g=0;g<a;g++)c(g);return d}(l)})}return t.registerId=function(i){return Mr(i)},t.prototype.reconstructWithOptions=function(i,n){return n===void 0&&(n=!0),new t(ke(ke({},this.options),i),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(i=function(n){var r=n.useCSSOMInjection,l=n.target;return n.isServer?new Ox(l):r?new Lx(l):new Wx(l)}(this.options),new Fx(i)));var i},t.prototype.hasNameForId=function(i,n){return this.names.has(i)&&this.names.get(i).has(n)},t.prototype.registerName=function(i,n){if(Mr(i),this.names.has(i))this.names.get(i).add(n);else{var r=new Set;r.add(n),this.names.set(i,r)}},t.prototype.insertRules=function(i,n,r){this.registerName(i,n),this.getTag().insertRules(Mr(i),r)},t.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},t.prototype.clearRules=function(i){this.getTag().clearGroup(Mr(i)),this.clearNames(i)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Qx=/&/g,Jx=/^\s*\/\/.*$/gm;function z0(t,i){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(i," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(i," ")),n.props=n.props.map(function(r){return"".concat(i," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=z0(n.children,i)),n})}function Vx(t){var i,n,r,l=t===void 0?Ki:t,o=l.options,s=o===void 0?Ki:o,a=l.plugins,d=a===void 0?eo:a,c=function(x,y,j){return j.startsWith(n)&&j.endsWith(n)&&j.replaceAll(n,"").length>0?".".concat(i):x},g=d.slice();g.push(function(x){x.type===Xl&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Qx,n).replace(r,c))}),s.prefix&&g.push(mx),g.push(ux);var u=function(x,y,j,w){y===void 0&&(y=""),j===void 0&&(j=""),w===void 0&&(w="&"),i=w,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var I=x.replace(Jx,""),h=px(j||y?"".concat(j," ").concat(y," { ").concat(I," }"):I);s.namespace&&(h=z0(h,s.namespace));var f=[];return Ml(h,gx(g.concat(xx(function(A){return f.push(A)})))),f};return u.hash=d.length?d.reduce(function(x,y){return y.name||ar(15),Ni(x,y.name)},y0).toString():"",u}var Xx=new I0,Ys=Vx(),E0=Hi.createContext({shouldForwardProp:void 0,styleSheet:Xx,stylis:Ys});E0.Consumer;Hi.createContext(void 0);function zc(){return z.useContext(E0)}var Kx=function(){function t(i,n){var r=this;this.inject=function(l,o){o===void 0&&(o=Ys);var s=r.name+o.hash;l.hasNameForId(r.id,s)||l.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=n,Xa(this,function(){throw ar(12,String(r.name))})}return t.prototype.getName=function(i){return i===void 0&&(i=Ys),this.name+i.hash},t}(),qx=function(t){return t>="A"&&t<="Z"};function Ec(t){for(var i="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;qx(r)?i+="-"+r.toLowerCase():i+=r}return i.startsWith("ms-")?"-"+i:i}var M0=function(t){return t==null||t===!1||t===""},D0=function(t){var i,n,r=[];for(var l in t){var o=t[l];t.hasOwnProperty(l)&&!M0(o)&&(Array.isArray(o)&&o.isCss||qi(o)?r.push("".concat(Ec(l),":"),o,";"):er(o)?r.push.apply(r,El(El(["".concat(l," {")],D0(o),!1),["}"],!1)):r.push("".concat(Ec(l),": ").concat((i=l,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||i in yx||i.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function oi(t,i,n,r){if(M0(t))return[];if(Va(t))return[".".concat(t.styledComponentId)];if(qi(t)){if(!qi(o=t)||o.prototype&&o.prototype.isReactComponent||!i)return[t];var l=t(i);return oi(l,i,n,r)}var o;return t instanceof Kx?n?(t.inject(n,r),[t.getName(r)]):[t]:er(t)?D0(t):Array.isArray(t)?Array.prototype.concat.apply(eo,t.map(function(s){return oi(s,i,n,r)})):[t.toString()]}function _x(t){for(var i=0;i<t.length;i+=1){var n=t[i];if(qi(n)&&!Va(n))return!1}return!0}var $x=j0($l),em=function(){function t(i,n,r){this.rules=i,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_x(i),this.componentId=n,this.baseHash=Ni($x,n),this.baseStyle=r,I0.registerId(n)}return t.prototype.generateAndInjectStyles=function(i,n,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))l=ii(l,this.staticRulesId);else{var o=kc(oi(this.rules,i,n,r)),s=Ws(Ni(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}l=ii(l,s),this.staticRulesId=s}else{for(var d=Ni(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var u=this.rules[g];if(typeof u=="string")c+=u;else if(u){var x=kc(oi(u,i,n,r));d=Ni(d,x+g),c+=x}}if(c){var y=Ws(d>>>0);n.hasNameForId(this.componentId,y)||n.insertRules(this.componentId,y,r(c,".".concat(y),void 0,this.componentId)),l=ii(l,y)}}return l},t}(),N0=Hi.createContext(void 0);N0.Consumer;var Po={};function tm(t,i,n){var r=Va(t),l=t,o=!Fo(t),s=i.attrs,a=s===void 0?eo:s,d=i.componentId,c=d===void 0?function(m,S){var k=typeof m!="string"?"sc":jc(m);Po[k]=(Po[k]||0)+1;var b="".concat(k,"-").concat(kx($l+k+Po[k]));return S?"".concat(S,"-").concat(b):b}(i.displayName,i.parentComponentId):d,g=i.displayName,u=g===void 0?function(m){return Fo(m)?"styled.".concat(m):"Styled(".concat(Ix(m),")")}(t):g,x=i.displayName&&i.componentId?"".concat(jc(i.displayName),"-").concat(i.componentId):i.componentId||c,y=r&&l.attrs?l.attrs.concat(a).filter(Boolean):a,j=i.shouldForwardProp;if(r&&l.shouldForwardProp){var w=l.shouldForwardProp;if(i.shouldForwardProp){var I=i.shouldForwardProp;j=function(m,S){return w(m,S)&&I(m,S)}}else j=w}var h=new em(n,x,r?l.componentStyle:void 0);function f(m,S){return function(k,b,D){var Q=k.attrs,F=k.componentStyle,Ne=k.defaultProps,Yt=k.foldedComponentIds,Qt=k.styledComponentId,dr=k.target,no=Hi.useContext(N0),an=zc(),Jt=k.shouldForwardProp||an.shouldForwardProp,E=wx(b,no,Ne)||Ki,U=function(yt,Ue,st){for(var dn,Xt=ke(ke({},Ue),{className:void 0,theme:st}),ro=0;ro<yt.length;ro+=1){var cr=qi(dn=yt[ro])?dn(Xt):dn;for(var jt in cr)Xt[jt]=jt==="className"?ii(Xt[jt],cr[jt]):jt==="style"?ke(ke({},Xt[jt]),cr[jt]):cr[jt]}return Ue.className&&(Xt.className=ii(Xt.className,Ue.className)),Xt}(Q,b,E),R=U.as||dr,Z={};for(var L in U)U[L]===void 0||L[0]==="$"||L==="as"||L==="theme"&&U.theme===E||(L==="forwardedAs"?Z.as=U.forwardedAs:Jt&&!Jt(L,R)||(Z[L]=U[L]));var Vt=function(yt,Ue){var st=zc(),dn=yt.generateAndInjectStyles(Ue,st.styleSheet,st.stylis);return dn}(F,U),Qe=ii(Yt,Qt);return Vt&&(Qe+=" "+Vt),U.className&&(Qe+=" "+U.className),Z[Fo(R)&&!m0.has(R)?"class":"className"]=Qe,Z.ref=D,z.createElement(R,Z)}(A,m,S)}f.displayName=u;var A=Hi.forwardRef(f);return A.attrs=y,A.componentStyle=h,A.displayName=u,A.shouldForwardProp=j,A.foldedComponentIds=r?ii(l.foldedComponentIds,l.styledComponentId):"",A.styledComponentId=x,A.target=r?l.target:t,Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(S){for(var k=[],b=1;b<arguments.length;b++)k[b-1]=arguments[b];for(var D=0,Q=k;D<Q.length;D++)Os(S,Q[D],!0);return S}({},l.defaultProps,m):m}}),Xa(A,function(){return".".concat(A.styledComponentId)}),o&&S0(A,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),A}function Mc(t,i){for(var n=[t[0]],r=0,l=i.length;r<l;r+=1)n.push(i[r],t[r+1]);return n}var Dc=function(t){return Object.assign(t,{isCss:!0})};function im(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];if(qi(t)||er(t))return Dc(oi(Mc(eo,El([t],i,!0))));var r=t;return i.length===0&&r.length===1&&typeof r[0]=="string"?oi(r):Dc(oi(Mc(r,i)))}function Qs(t,i,n){if(n===void 0&&(n=Ki),!i)throw ar(1,i);var r=function(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(i,n,im.apply(void 0,El([l],o,!1)))};return r.attrs=function(l){return Qs(t,i,ke(ke({},n),{attrs:Array.prototype.concat(n.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return Qs(t,i,ke(ke({},n),l))},r}var U0=function(t){return Qs(tm,t)},p=U0;m0.forEach(function(t){p[t]=U0(t)});function R0({color:t="#ef8f30",solid:i}){return e.jsx(e.Fragment,{children:i?e.jsxs("svg",{x:"0px",y:"0px",viewBox:"0 0 203.4 64.3",fill:t,children:[e.jsx("path",{d:`M102.3,0H69c-1.4,0-2.8,0.7-3.6,2L35.6,54.1c-0.5,0.7-1.2,1.1-1.9,1.1c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.6-0.4-1.4,0-2l26.6-46\r
	C59.1,4.8,59,3.3,58.3,2s-2-2-3.5-2H21.5c-1.4,0-2.8,0.7-3.6,2L2.8,28.4c-0.8,1.3-0.8,2.9,0,4.1l17,29.8c0.8,1.2,2.1,1.9,3.5,1.9\r
	h46.5c1.5,0,2.9-0.8,3.6-2l31.7-54.7l0.8-1.4c0.7-1.3,0.7-2.8-0.1-4.1C105,0.7,103.7,0,102.3,0L102.3,0z`}),e.jsx("path",{d:`M149.8,0h-33.3c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8L80.2,58.6l-0.1,0.2\r
	c-0.4,1.2-0.2,2.6,0.6,3.7c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1\r
	C152.6,0.7,151.3,0,149.8,0L149.8,0z`}),e.jsx("path",{d:`M197.3,0H164c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8l-29.1,50.4l-0.1,0.2\r
	c-0.4,1.2-0.2,2.6,0.6,3.7c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1\r
	C200.1,0.7,198.8,0,197.3,0L197.3,0z`})]}):e.jsxs("svg",{x:"0px",y:"0px",viewBox:"0 0 203.4 64.3",fill:t,children:[e.jsx("path",{d:`M102.3,3c0.4,0,0.7,0.2,0.9,0.6c0.1,0.1,0.3,0.5,0,1.1L102.5,6L70.8,60.7c-0.1,0.3-0.5,0.5-1,0.5H23.3c-0.4,0-0.7-0.2-1-0.5\r
	L5.4,31l-0.1-0.1l-0.1-0.1c-0.1-0.2-0.1-0.6,0.1-0.9l0,0l0,0L20.5,3.5c0.3-0.4,0.7-0.5,1-0.5h33.3c0.6,0,0.8,0.3,0.9,0.4\r
	c0.1,0.3,0.3,0.8,0.1,1.2L29.2,50.5c-1,1.6-1,3.6,0,5.1c0.9,1.6,2.6,2.5,4.5,2.5c1.7,0,3.3-0.9,4.3-2.4l0.1-0.1l0.1-0.1L68,3.5\r
	C68.2,3.1,68.7,3,69,3H102.3 M102.3,0H69c-1.4,0-2.8,0.7-3.6,2L35.6,54.1c-0.5,0.7-1.2,1.1-1.9,1.1c-0.8,0-1.5-0.4-1.9-1.1\r
	c-0.4-0.6-0.4-1.4,0-2l26.6-46C59.1,4.8,59,3.3,58.3,2c-0.7-1.3-2-2-3.5-2H21.5c-1.4,0-2.8,0.7-3.6,2L2.8,28.4\r
	c-0.8,1.3-0.8,2.9,0,4.1l17,29.8c0.8,1.2,2.1,1.9,3.5,1.9h46.5c1.5,0,2.9-0.8,3.6-2l31.7-54.7l0.8-1.4c0.7-1.3,0.7-2.8-0.1-4.1\r
	C105,0.7,103.7,0,102.3,0L102.3,0z`}),e.jsx("path",{d:`M149.8,3c0.6,0,0.8,0.3,0.9,0.4c0.1,0.3,0.3,0.8,0.1,1.2l-32.3,55.9c-0.3,0.4-0.7,0.6-1.2,0.6H84c-0.4,0-0.6-0.2-0.9-0.5\r
	c-0.2-0.2-0.3-0.6-0.2-0.8l29-50.2l0-0.1l0-0.1l0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.4l0.1-0.2l3.1-5.3c0.1-0.3,0.5-0.5,1-0.5H149.8\r
	 M149.8,0h-33.3c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8L80.2,58.6l-0.1,0.2c-0.4,1.2-0.2,2.6,0.6,3.7\r
	c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1C152.6,0.7,151.3,0,149.8,0L149.8,0z`}),e.jsx("path",{d:`M197.3,3c0.6,0,0.8,0.3,0.9,0.4c0.1,0.3,0.3,0.8,0.1,1.2L166,60.6c-0.3,0.4-0.7,0.6-1.2,0.6h-33.3c-0.4,0-0.6-0.2-0.9-0.5\r
	c-0.2-0.2-0.3-0.6-0.2-0.8l29-50.2l0-0.1l0-0.1l0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.4l0.1-0.2l3.1-5.3c0.1-0.3,0.5-0.5,1-0.5H197.3\r
	 M197.3,0H164c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8l-29.1,50.4l-0.1,0.2c-0.4,1.2-0.2,2.6,0.6,3.7\r
	c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1C200.1,0.7,198.8,0,197.3,0L197.3,0z`})]})})}function nm({color:t="#3a3a3a",solid:i}){return e.jsx(e.Fragment,{children:i?e.jsxs("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 251.1 34",fill:t,children:[e.jsx("path",{fill:"#3a3a3a",d:"M4.2,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M17,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M17,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M29.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M29.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M42.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M42.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M68.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M68.1,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M80.8,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M80.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M93.6,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M93.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M106.4,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M119.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M131.9,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M144.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M144.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M157.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M157.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M170.2,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M170.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M183,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M195.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M208.6,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M208.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M221.3,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M221.3,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M234.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M246.9,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M246.9,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M20.2,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M250.1,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M147.9,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M44.9,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M96,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M223.7,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M173.4,4.2c0-1.8-1.4-3.2-3.2-3.2s-1.8.4-2.4,1.1h0c-2.3,2.3-1.6,5.5-3.8,7.8l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.5.6-.8,1.3-.8,2.2,0,1.8,1.4,3.2,3.2,3.2s2.2-.7,2.8-1.6c1.5-2.2,1.2-5,3.2-7l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6,1.1-1.4,1.1-2.4Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M71.3,29.8c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-2.9-1.3-4.1-2.1c-.8-1-1.8-1.8-1.8-3.7,0-3.2,2.8-3.2,2.8-6.4s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2-.3-2.7-2.8-2.9-2.8-5.9s2.8-3.2,2.8-6.4h0s0,0,0-.1c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2,0,0,0,.1h0c0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0,0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0h0c0,1.7,1.5,3.1,3.2,3.1,3.2,0,3.2-2.8,6.4-2.8s3.2,2.7,6.3,2.8c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0c1.8,0,3.2-1.4,3.2-3.2Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M122.4,4.2c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-3.2-2.8-6.4-2.8-3.2,1.4-3.2,3.2,1.4,3.2,3.2,3.2c3.2,0,3.2-2.8,6.4-2.8s2.8,1.2,3.9,2c.8,1.2,2,1.9,2,4s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M199,4.2c0-1.7-1.3-3.1-3-3.2h0s0,0-.1,0c0,0,0,0,0,0-.2,0-.5,0-.7,0-2.4.4-2.7,2.7-5.6,2.7s-3.2-2.8-6.4-2.8h0s0,0-.1,0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,0,0,.1,0h0c3.2,0,3.2-2.8,6.4-2.8s2.7,1,3.6,1.8c.8,1.3,2.2,2,2.2,4.2s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"})]}):e.jsxs("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 251.1 34",fill:t,children:[e.jsx("path",{fill:"#3a3a3a",d:"M4.2,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M17,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M17,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M29.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M29.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M42.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M42.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M68.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M68.1,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M80.8,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M80.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M93.6,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M93.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M106.4,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M119.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M131.9,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M144.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M144.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M157.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M157.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M170.2,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M170.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M183,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M195.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M208.6,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M208.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M221.3,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M221.3,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M234.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M246.9,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#3a3a3a",d:"M246.9,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),e.jsx("path",{fill:"#e0a070",d:"M20.2,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#e0a070",d:"M250.1,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#e0a070",d:"M147.9,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),e.jsx("path",{fill:"#e0a070",d:"M44.9,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#e0a070",d:"M96,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#e0a070",d:"M223.7,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),e.jsx("path",{fill:"#e0a070",d:"M173.4,4.2c0-1.8-1.4-3.2-3.2-3.2s-1.8.4-2.4,1.1h0c-2.3,2.3-1.6,5.5-3.8,7.8l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.5.6-.8,1.3-.8,2.2,0,1.8,1.4,3.2,3.2,3.2s2.2-.7,2.8-1.6c1.5-2.2,1.2-5,3.2-7l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6,1.1-1.4,1.1-2.4Z"}),e.jsx("path",{fill:"#e0a070",d:"M71.3,29.8c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-2.9-1.3-4.1-2.1c-.8-1-1.8-1.8-1.8-3.7,0-3.2,2.8-3.2,2.8-6.4s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2-.3-2.7-2.8-2.9-2.8-5.9s2.8-3.2,2.8-6.4h0s0,0,0-.1c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2,0,0,0,.1h0c0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0,0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0h0c0,1.7,1.5,3.1,3.2,3.1,3.2,0,3.2-2.8,6.4-2.8s3.2,2.7,6.3,2.8c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0c1.8,0,3.2-1.4,3.2-3.2Z"}),e.jsx("path",{fill:"#e0a070",d:"M122.4,4.2c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-3.2-2.8-6.4-2.8-3.2,1.4-3.2,3.2,1.4,3.2,3.2,3.2c3.2,0,3.2-2.8,6.4-2.8s2.8,1.2,3.9,2c.8,1.2,2,1.9,2,4s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"}),e.jsx("path",{fill:"#e0a070",d:"M199,4.2c0-1.7-1.3-3.1-3-3.2h0s0,0-.1,0c0,0,0,0,0,0-.2,0-.5,0-.7,0-2.4.4-2.7,2.7-5.6,2.7s-3.2-2.8-6.4-2.8h0s0,0-.1,0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,0,0,.1,0h0c3.2,0,3.2-2.8,6.4-2.8s2.7,1,3.6,1.8c.8,1.3,2.2,2,2.2,4.2s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"})]})})}const Dr={orange:"#ef8f30",orangemd:"#cc7a29",orangelt:"#f2bf80",orangexl:"#f2e3d1",gray:"#00161a",olive:"#07373a",white:"#ffffff"},N={orange:"#e0a070",orangedk:"#d88d59",blau:"#74898B",graudk:"#3a3a3a",graumt:"#8c8b89",grauhl:"#bebcb9",papier:"#dedcd8"},rm="/assets/icon-linkedin-8d8d40c0.svg",lm="/assets/icon-email-0f9d3743.svg",om=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};

  @media (min-width: 768px) {
    height: 80px;
  }
`,sm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,am=p.div`
  flex: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 4px 0;
  color: ${N.graudk};
  font-weight: 900;
  background: ${N.orange};
  border-radius: 2px 2px 0 0;
  transition: background 150ms;

  &:hover {
    background: ${N.orangedk};
    transition: background 150ms;
  }

  a {
    display: flex;
    justify-content: center;
  }

  svg {
    width: 84px;
  }

  @media (min-width: 768px) {
    width: 132px;
    padding: 0;
    border-radius: 2px 0 0 2px;
    svg {
      width: 102px;
    }
  }
`,dm=p.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px 0 0 0;
  color: ${N.graudk};

  svg {
    width: 100%;
    max-width: 84px;
  }
  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 0 0 16px;
    background: none;
    svg {
      max-width: 220px;
    }
  }
`,cm=p.div`
  padding: 8px 16px 0 16px;
  h1 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: clamp(1em, 1.8em, 1.8em);
    font-weight: 400;
  }
  @media (min-width: 768px) {
    padding: 0 16px;
  }
`,fm=p.div`
  display: flex;
  margin: 8px 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`,Nc=p.a`
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56px;
  padding: 8px 16px;
  background: ${N.orange};
  border: unset;
  overflow: hidden;
  cursor: pointer;
  transition: background 150ms;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${N.orangedk};
    opacity: 0;
    border-radius: 25%;
    transform: translate(-50%, -50%);
    transition:
      width 400ms,
      height 150ms,
      opacity 400ms;
  }

  &:last-child {
    border-radius: 0 2px 2px 0;
  }

  img {
    width: 100%;
    height: 20px;
    transition: transform 250ms;
  }

  &:hover {
    transition: background 150ms;

    img {
      transform: scale(109%);
      transition: transform 250ms;
    }

    &::before {
      width: 150%;
      height: 100%;
      opacity: 1;
    }
  }
`;function hm(){return e.jsx(om,{children:e.jsxs(sm,{children:[e.jsx(am,{children:e.jsx(Qi,{to:"/",title:"VII","aria-label":"Header Logo: Home",children:e.jsx(R0,{solid:!0,color:"#3a3a3a"})})}),e.jsx(dm,{children:e.jsx(nm,{solid:!0})}),e.jsx(cm,{children:e.jsx("h1",{children:"//SEANSWIDLER"})}),e.jsxs(fm,{children:[e.jsx(Nc,{href:"https://www.linkedin.com/in/sean-swidler-80a5b4b7/","aria-label":"Header: LinkedIn",title:"LinkedIn",target:"_blank",children:e.jsx("img",{src:rm,alt:"LinkedIn"})}),e.jsx(Nc,{href:"mailto:sevensines@gmail.com","aria-label":"Footer: Email",title:"Email",target:"_blank",children:e.jsx("img",{src:lm,alt:"Email"})})]})]})})}const pm=p.div`
  margin: auto;
`,Am=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 56px;
  margin-top: 32px;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};
`,um=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,gm=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 102px;
  height: 34px;
  color: ${N.orange};
  font-weight: 900;

  svg {
    max-width: 64px;
  }
`,xm=p.div`
  display: flex;
`,Uc=p.a`
  position: relative;
  margin: 0px;
  padding: 4px 16px;
  color: ${N.graudk};
  font-size: 12px;
  font-weight: 900;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${N.graudk};
    transform-origin: right center;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    will-change: transform;
  }
  &:hover,
  &:focus,
  &.has-focus {
    color: ${N.graudk};
    text-decoration: none;
    transition: color 500ms;
    &:after {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }

  @media (min-width: 768px) {
    margin: 0 12px;
  }
`;function mm(){return e.jsxs(e.Fragment,{children:[e.jsx(pm,{}),e.jsx(Am,{children:e.jsxs(um,{children:[e.jsx(gm,{"aria-label":"Footer: Logo",children:e.jsx(Qi,{to:"/","aria-label":"Footer: Home",children:e.jsx(R0,{solid:!0,color:"#3a3a3a"})})}),e.jsxs(xm,{"aria-label":"navigation",children:[e.jsx(Uc,{href:"mailto:sevensines@gmail.com","aria-label":"Footer: Email",title:"Email",target:"_blank",children:"Email"}),e.jsx(Uc,{href:"https://www.linkedin.com/in/sean-swidler-80a5b4b7/","aria-label":"Footer: LinkedIn",title:"LinkedIn",target:"_blank",children:"LinkedIn"})]})]})})]})}const ym=()=>e.jsxs(e.Fragment,{children:[e.jsx(hm,{}),e.jsx(Lg,{}),e.jsx(mm,{})]}),jm="/assets/tower-0e6991e5.jpg",wm="/assets/braille-bio-f31d6898.svg",bm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`,vm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};
  animation: 400ms fadeIn ease-out;

  @keyframes fadeIn {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`,Sm=p.div`
  display: flex;
  background: ${N.orange};
`,km=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 36px;
  height: auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 56px;
  }
`,Im=p.div`
  display: flex;
  flex: 1 1 100%;
  height: 32px;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: ${N.blau};

  img {
    filter: grayscale(100%) contrast(1) blur(0);
    flex 1 0 100%;
    height: 100%;
    max-width: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
    position: relative;
    width: 100%;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${N.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`,zm=p.div`
  display: flex;
`,Em=p.div`
  display: flex;
  flex-direction: column;
  width: 36px;
  height: auto;
  padding: 14px 8px 0 8px;
  text-align: center;
  opacity: 0.4;
  order: 2;

  @media (min-width: 768px) {
    width: 56px;
    padding: 20px 8px 0 8px;
    order: 1;
  }
`,Mm=p.div`
  flex: 1;
  padding: 8px 16px 8px 8px;
  order: 3;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    order: 2;
    padding: 16px;
    font-size: 1rem;
  }
  @media (min-width: 960px) {
    padding: 16px 32px 24px 32px;
  }
`,Dm=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 0;
  height: auto;
  padding: 0;
  text-align: center;
  order: 1;

  h4 {
    position: absolute;
    bottom: 20px;
    margin: 0;
    padding: 0 0 0 8px;
    color: ${N.graumt};
    font-size: clamp(1em, 1.2em, 1.2em);
    font-weight: 400;
    &:last-child {
      bottom: 4px;
    }
  }

  @media (min-width: 768px) {
    width: 108px;
    padding: 0 16px;
    order: 3;
    h4 {
      bottom: 36px;
      padding: 0;
      font-size: clamp(1em, 4em, 4em);
      &:last-child {
        bottom: -8px;
      }
    }
  }
  @media (min-width: 960px) {
    width: 124px;
    h4 {
      bottom: 42px;
      font-size: clamp(1em, 4.5em, 5em);
      &:last-child {
        bottom: -16px;
      }
    }
  }
`;function Nm(){return e.jsx(bm,{children:e.jsxs(vm,{children:[e.jsxs(Sm,{children:[e.jsx(km,{children:"i"}),e.jsx(Im,{children:e.jsx("img",{src:jm})})]}),e.jsxs(zm,{children:[e.jsx(Em,{children:e.jsx("img",{src:wm})}),e.jsx(Mm,{children:"I'm a Front End Web Developer with over 10 years of experience designing and building responsive user-focused websites and web based applications. With a background in graphic design, I bring a strong visual sensibility alongside solid technical skills, allowing me to translate complex ideas into clean, intuitive user experiences. Throughout my career, I've focused on creating scalable, accessible, and responsive UI solutions that balance performance with thoughtful design. I enjoy collaborating with cross-functional teams to deliver products that are both visually compelling and easy to use."}),e.jsxs(Dm,{children:[e.jsx("h4",{children:"20"}),e.jsx("h4",{children:"26"})]})]})]})})}const T0="/assets/mic-11fbc524.svg",F0="/assets/mic-tile-clr-983454f0.jpg",P0="/assets/azr-99dbd13b.svg",Um="/assets/mic-ess-a2f34a1c.jpg",Rm="/assets/mic-nws-02f52a1f.jpg",Tm="/assets/mic-srv-e51f33c7.jpg",C0="/assets/stu-27c62274.svg",Fm="/assets/mic-stu-11919872.jpg",H0="/assets/ten-628ec645.svg",Pm="/assets/mic-win-26b039d4.jpg",G0="/assets/xpz-560e6906.svg",Cm="/assets/mic-exp-69f81ea5.jpg",B0="/assets/pbi-4b90f28a.svg",Hm="/assets/mic-pow-4bf1035f.jpg",Z0="/assets/vst-91027ff3.svg",Gm="/assets/mic-vis-81739d3d.jpg",L0="/assets/gts-cfc42831.svg",Bm="/assets/gts-tile-clr-4f6e6725.jpg",Zm="/assets/gts-gvp-a0b6525d.jpg",Lm="/assets/gts-ltr-09d8ced5.jpg",W0="/assets/tmo-f4059d26.svg",Wm="/assets/tmo-tile-clr-f6017ff5.jpg",Om="/assets/tmo-tue-51b34c41.jpg",Ym="/assets/tmo-341-096421c6.jpg",Qm="/assets/tmo-jmp-2784491d.jpg",Jm="/assets/tmo-pyg-aa97cde7.jpg",Vm="/assets/tmo-pre-16c43b57.jpg",Xm="/assets/tmo-dat-5da28bc0.jpg",O0="/assets/vzn-584b247f.svg",Km="/assets/vzn-tile-clr-33b40bfe.jpg",Y0="/assets/att-eae57d9b.svg",qm="/assets/att-tile-clr-3d17f5e3.jpg",Q0="/assets/dtv-f5e1ca81.svg",_m="/assets/dtv-tile-clr-358440da.jpg",J0="/assets/dsh-fa82703f.svg",$m="/assets/dsh-tile-clr-01e4218b.jpg",V0="/assets/adt-ac6c868c.svg",X0="/assets/adt-tile-clr-98fbb7fd.jpg",e1="/assets/adt-bus-fddd5514.jpg",t1=[{title:"Microsoft",url:"/Microsoft",logo:T0,bg:F0,sigil:"⠍⠎⠞",role:"Front End Development,Email Development,Graphic Design"},{title:"Gates Foundation",url:"/Gates",logo:L0,bg:Bm,sigil:"⠞⠛⠋",role:"Front End Development,Email Development,Graphic Design"},{title:"T-Mobile",url:"/T-Mobile",logo:W0,bg:Wm,sigil:"⠞⠍⠕",role:"Front End Development,Graphic Design"},{title:"Verizon",url:"/Verizon",logo:O0,bg:Km,sigil:"⠧⠵⠝",role:"Front End Development,Graphic Design"},{title:"AT&T",url:"/ATT",logo:Y0,bg:qm,sigil:"⠁⠞⠞",role:"Front End Development,Graphic Design"},{title:"DirecTV",url:"/DirecTV",logo:Q0,bg:_m,sigil:"⠙⠞⠧",role:"Front End Development,Graphic Design"},{title:"Dish",url:"/Dish",logo:J0,bg:$m,sigil:"⠙⠎⠓",role:"Front End Development,Graphic Design"},{title:"ADT",url:"/ADT",logo:V0,bg:X0,sigil:"⠁⠙⠞",role:"Front End Development,Graphic Design"}],i1=[{title:"Azure",url:"/Microsoft/Azure",logo:P0,bg:F0,sgl:"⠁⠵⠗",role:"Front End Development,Email Development,Graphic Design"},{title:"Student",url:"/Microsoft/Student",logo:C0,bg:Fm,sgl:"⠎⠞⠥",role:"Front End Development,Email Development,Graphic Design"},{title:"Windows 10",url:"/Microsoft/Windows10",logo:H0,bg:Pm,sgl:"⠞⠑⠝",role:"Front End Development,Email Development,Graphic Design"},{title:"Expert Zone",url:"/Microsoft/ExpertZone",logo:G0,bg:Cm,sgl:"⠑⠭⠏",role:"Front End Development,Email Development,Graphic Design"},{title:"Power BI",url:"/Microsoft/PowerBI",logo:B0,bg:Hm,sgl:"⠏⠃⠊",role:"Front End Development,Email Development,Graphic Design"},{title:"Visual Studio",url:"/Microsoft/VisualStudio",logo:Z0,bg:Gm,sgl:"⠧⠎⠞",role:"Front End Development,Email Development,Graphic Design"}],n1=[{title:"Newsletter",url:"/Microsoft/Azure/Newsletter",bg:Um},{title:"Azure Essentials",url:"/Microsoft/Azure/Essentials",bg:Rm},{title:"Service Alerts",url:"/Microsoft/Azure/Alerts",bg:Tm}],r1=[{title:"The Giving Pledge",url:"/Gates/GivingPledge",bg:Zm},{title:"Annual Letter",url:"/Gates/AnnualLetter",bg:Lm}],l1=[{title:"Free Tuesdays",url:"/T-Mobile/Tuesdays",bg:Om},{title:"3 for 1",url:"/T-Mobile/3for1",bg:Ym},{title:"Jump",url:"/T-Mobile/Jump",bg:Qm},{title:"Pay As You Go",url:"/T-Mobile/Pay",bg:Jm},{title:"Prepaid",url:"/T-Mobile/Prepaid",bg:Vm},{title:"Data Stash",url:"/T-Mobile/Stash",bg:Xm}],o1=[{title:"Business",url:"/ADT/Business",bg:e1},{title:"Residential",url:"/ADT/Residential",bg:X0}],el=p(Qi)`
  text-decoration: none;
  border: 0;
  color: ${N.orange};
`,s1=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};
  overflow: hidden;

  @media (min-width: 560px) {
    flex-direction: row;
    height: 220px;
  }

  @keyframes fadeInUp {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`,a1=p.div`
  position: relative;  
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0;
  background: ${N.blau};
  overflow: hidden;
  
  > img {
    position: relative;
    flex 1 0 100%;
    width: 100%;   
    max-width: 100%;
    height: 25vw;
    filter: grayscale(100%) contrast(2) blur(0);
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${N.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  @media (min-width: 560px) {
    > img {
      height: 100%;
    }
  }
`,d1=p.div`
  display: none;
  @media (min-width: 560px) {
    position: absolute;
    top: 0px;
    left: -3px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 220px;
    height: 100%;
    transform: rotate(90deg);

    span {
      width: 100%;
      padding: 3%;
      text-align: center;
      background-color: ${N.graudk};
      img {
        height: 100%;
        max-width: 60%;
      }
    }
  }
`,c1=p.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;

  h4 {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 8px;
    background: ${N.graudk};
    color: ${N.orange};
    font-size: clamp(1.2em, 2vw, 1.8em);
    font-weight: 500;
    text-transform: uppercase;
    span {
      color: ${N.graumt};
    }
  }

  ul {
    margin: 0 0 0 12px;
    padding: 12px 12px 16px 12px;

    li {
      padding: 8px 0 0 12px;
      font-size: 0.8rem;
      line-height: 1.2;
      &::marker {
        content: "◢";
      }
    }
  }

  @media (min-width: 768px) {
    h4 {
      padding: 0 8px 0 32px;
    }
    ul {
      margin: 0 0 0 16px;
      padding: 12px 24px 0 24px;

      li {
        font-size: 1rem;
        padding: 8px 0 0 12px;
      }
    }
  }
`,K0=p.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 24px 16px 0;

  button {
    position: relative;
    top: 0;
    right: 0;
    padding: 8px 16px;
    font-family: "Source Code Pro", "Courier New", monospace, sans-serif;
    font-weight: 400;
    color: ${N.graudk};
    font-size: 1.1rem;
    background: ${N.orange};
    clip-path: polygon(
      12% 0,
      0 0,
      100% 0,
      100% 0,
      100% 68%,
      88% 100%,
      0 100%,
      0 32%
    );
    border: 0 !important;
    cursor: pointer;
    transition:
      background 150ms,
      font-size 150ms,
      top 150ms,
      box-shadow 150ms;

    span {
      opacity: 0.4;
      transition: opacity 150ms;
    }

    &:hover {
      top: -2px;
      background: ${N.orangedk};
      span {
        opacity: 1;
      }
    }
  }
`;function q0({count:t,title:i,sgl:n,role:r="",logo:l,bg:o,link:s}){const a=r.split(","),c={animation:`${(t+1)*100+500}ms fadeInUp ease-out`};return e.jsxs(s1,{style:c,children:[e.jsx(el,{to:s,title:i,"aria-label":i,children:e.jsxs(a1,{children:[e.jsx(d1,{children:e.jsx("span",{children:e.jsx("img",{src:l,alt:i,border:"0"})})}),e.jsx("img",{src:o,border:"0"})]})}),e.jsxs(c1,{children:[e.jsxs("div",{children:[e.jsx(el,{to:s,title:i,"aria-label":i,children:e.jsxs("h4",{children:[`${i}`,e.jsx("span",{children:`${n}`})]})}),e.jsx("ul",{children:a.length>1&&a.map(g=>e.jsx("li",{children:g},g))})]}),e.jsx(K0,{children:e.jsx(el,{to:s,title:i,"aria-label":i,children:e.jsxs("button",{title:i,"aria-label":`Button: View ${i}`,children:[e.jsx("span",{children:"⠿"}),"VIEW",e.jsx("span",{children:"⠿"})]})})})]})]})}const f1=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 clamp(16px, 5vw, 80px);
  box-sizing: border-box;
`,ln=p.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 32px;
  row-gap: 16px;
  margin: 0 auto;
  width: 100%;
  max-width: 1904px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 32px;
    &._three {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;function h1(){return e.jsx(f1,{children:e.jsx(ln,{children:t1.map((t,i)=>e.jsx(q0,{title:t.title,link:t.url,logo:t.logo,bg:t.bg,sgl:t.sigil,role:t.role,count:i},t.title))})})}function p1(){return e.jsxs(e.Fragment,{children:[e.jsx(Nm,{}),e.jsx(h1,{})]})}const A1=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
`,u1=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
  margin: 0 0 16px 0;
  background: ${N.graudk};
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};
`,g1=p.div`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  padding: 1vw;
  padding-left: clamp(30px, 5vw, 80px);
  padding-right: clamp(30px, 5vw, 80px);

  img {
    width: 100%;
    max-width: 280px;
    height: auto;
    animation: 800ms fadeLogo ease;

    @keyframes fadeLogo {
      0% {
        transform: translateY(10%);
        opacity: 0;
      }
      100% {
        transform: translateY(0%);
        opacity: 1;
      }
    }

    &._no-anim {
      animation: none;
    }
  }
`;function De({logo:t,alt:i,fixedLogo:n}){return e.jsx(A1,{children:e.jsx(u1,{children:e.jsx(g1,{children:e.jsx("img",{src:t,alt:i,border:"0",className:n?"_no-anim":""})})})})}const x1=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};
  animation: 1000ms fadeArticle ease;

  &._fadeOnly {
    animation: 1000ms fadeOnly ease;
  }

  @keyframes fadeArticle {
    0% {
      transform: translateY(10%);
      opacity: 0;
    }
    50% {
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOnly {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`,m1=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  padding: 16px;
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};
`;function W({children:t,fadeOnly:i}){return e.jsx(x1,{className:i?"_fadeOnly":"",children:e.jsx(m1,{children:t})})}const y1=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0 0 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};

  @media (min-width: 768px) {
    margin: 0;
  }
`,j1=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${N.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${N.grauhl};
`,w1=p.ul`
  margin: 0;
  padding: 4px 16px;
  list-style: none;

  li {
    position: relative;
    display: inline;
    font-size: 14px;
    a {
      position: relative;
      margin: 0px 4px;
      padding: 4px 0 0 0;
      color: ${N.graudk};
      font-weight: 900;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;

      &:first-child {
        margin: 0px 4px 0 0;
      }

      &:after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${N.orange};
        transform-origin: right center;
        transform: scaleX(0);
        transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
        will-change: transform;
      }
      &:hover,
      &:focus,
      &.has-focus {
        text-decoration: none;
        transition: color 500ms;
        &:after {
          transform: scaleX(1);
          transform-origin: left center;
        }
      }
    }
  }
  li + li {
    &:before {
      padding: 8px;
      color: ${N.graudk};
      content: "⊸";
    }
  }

  @media (min-width: 768px) {
    li {
      font-size: 18px;
    }
  }
`;function O({route:t}){return e.jsx(y1,{children:e.jsx(j1,{children:e.jsxs(w1,{children:[e.jsx("li",{children:e.jsx(Qi,{to:"/",title:"Home","aria-label":"Breadcrumb: Home",children:"Home"})}),t&&t.map(i=>e.jsx("li",{children:e.jsx(Qi,{to:i.url,title:i.text,"aria-label":i.text,children:i.text})},i.text))]})})})}const Rc=p.div`
  display: flex;
  justify-content: space-between;
  &.bt {
    transform: rotate(180deg);
  }
`,Nr=p.div`
  width: 12px;
  height: 1px;
  background: ${N.orange};
`,Ur=p.div`
  width: 1px;
  height: 12px;
  background: ${N.orange};
`,Rr=p.div`
  display: flex;
  flex-direction: column;

  &.tr {
    transform: rotate(90deg);
  }
`;function b1({children:t}){return e.jsxs(e.Fragment,{children:[e.jsxs(Rc,{children:[e.jsxs(Rr,{children:[e.jsx(Nr,{}),e.jsx(Ur,{})]}),e.jsxs(Rr,{className:"tr",children:[e.jsx(Nr,{}),e.jsx(Ur,{})]})]}),t,e.jsxs(Rc,{className:"bt",children:[e.jsxs(Rr,{children:[e.jsx(Nr,{}),e.jsx(Ur,{})]}),e.jsxs(Rr,{className:"tr",children:[e.jsx(Nr,{}),e.jsx(Ur,{})]})]})]})}const v1=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  h2 {
    margin: 0;
    color: ${N.graudk};
    font-weight: 900;
    text-transform: uppercase;
  }
  p {
    margin: 0 0 4px 0;
    font-size: 0.8rem;
    b {
      font-size: 125%;
    }
  }
  @media (min-width: 768px) {
    p {
      order: 2;
      padding: 16px;
      font-size: 1rem;
    }
  }
`;function Y({title:t,children:i}){return e.jsx(b1,{children:e.jsx(v1,{children:e.jsx("p",{children:i})})})}function S1(){const t=[{text:"Microsoft",url:"/Microsoft"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:T0,alt:"Microsoft"}),e.jsxs(W,{children:[e.jsx(Y,{title:"Microsoft",children:"Microsoft is an American multinational technology company that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services. Its best known software products are the Microsoft Windows line of operating systems, Microsoft Office office suite, and Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2011, it was the world's largest software maker by revenue, and one of the world's most valuable companies."}),e.jsx("br",{}),e.jsx(ln,{children:i1.map(i=>e.jsx(q0,{title:i.title,link:i.url,logo:i.logo,bg:i.bg,sgl:i.sgl,role:i.role},i.title))})]})]})}const k1=p(Qi)`
  text-decoration: none;
  border: 0;
`,_0=p.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 500ms;
  span {
    width: 100%;
    padding: 3% 0;
    font-size: 2rem;
    font-weight: 100;
    color: ${N.orange};
    text-align: center;
    background-color: ${N.graudk};
  }
`,I1=p.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 50vw;
  max-height: 220px;
  background-color: ${N.blau};
  overflow: hidden;
  transition: padding 500ms;

  > img {
    filter: grayscale(100%) contrast(1) blur(0);
    flex 1 0 100%;
    height: 100%;
    max-width: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    opacity: 1;
    position: relative;
    width: 100%;
  }

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    background-color: ${N.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &:hover {
    background: ${N.orange};
    padding: 1%;
    transition: padding 500ms;
    img {
      filter: grayscale(0%) contrast(1) blur(0);
      mix-blend-mode: normal;
      transition: filter 500ms, mixBlendMode 500ms;
    }

    > ${_0} {
      opacity: 0;
      transition: opacity 500ms;
    }
  }
`;function to({title:t,bg:i,link:n}){return e.jsx(k1,{to:n,title:t,"aria-label":t,children:e.jsxs(I1,{children:[e.jsx(_0,{children:e.jsx("span",{children:t})}),e.jsx("img",{src:i})]})})}function io({fixedLogo:t}){return e.jsx(De,{logo:P0,alt:"Microsoft Azure",fixedLogo:t})}function z1(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(io,{}),e.jsxs(W,{children:[e.jsxs(Y,{title:"Azure",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"Microsoft Azure is a cloud computing platform and infrastructure created by Microsoft for building, deploying, and managing applications and services through a global network of Microsoft-managed data centers. It provides both PaaS and IaaS services and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems."]}),e.jsx("br",{}),e.jsx(ln,{className:"_three",children:n1.map(i=>e.jsx(to,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const E1=p.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 16px;
`,M1=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  transition: width 300ms;

  &.desktop {
    width: 100%;
    max-width: 1280px;
    transition: width 300ms;
  }
  &.tablet {
    width: 768px;
    transition: width 300ms;
  }
  &.mobile {
    width: 320px;
    transition: width 300ms;
  }
`;function ie({viewSelected:t,children:i}){return e.jsx(E1,{children:e.jsx(M1,{className:(`${t}`||"").toLowerCase(),children:i})})}const D1="/assets/azr-homepage-enus-15e43442.jpg",N1="/assets/azr-webinar-enus-a415baf1.jpg",U1="/assets/azr-pivot-enus-9d0ff0fc.jpg";function R1(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Essentials",url:"/Microsoft/Azure/Essentials"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(io,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Azure Essentials",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The Microsoft Azure Essentials campaign is a full scale website aimed at onboarding new and veteran developers to the Azure Web Services platform. Through Azure Essentials users have access to informational materials on Azure technologies, free self-paced courses, hands-on demos, learning resources for Azure certifications, live and recorded webinars, and ebooks. This campaign was launched globally, localized into 32 languages, and has seen over 1 million subscribers since launch."]}),e.jsx("br",{}),e.jsxs(ie,{viewSelected:"desktop",children:[e.jsx("div",{children:e.jsx("img",{src:D1,width:"100%",height:"auto"})}),e.jsx("div",{children:e.jsx("img",{src:N1,width:"100%",height:"auto"})}),e.jsx("div",{children:e.jsx("img",{src:U1,width:"100%",height:"auto"})})]})]})]})}const $0="/assets/ms-logo-azure-top-34c57bae.png",ep="/assets/Azure2014-NewsLetter-EN_02-44b40d23.png",tp="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QNvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODdDRDlBOTNEMUFBRTMxMTg1N0NEQjA1RkJGMjEzNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDVFQjc0OThBRTI5MTFFM0FBMzhERTM1NDBFOENBQzciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDVFQjc0OTdBRTI5MTFFM0FBMzhERTM1NDBFOENBQzciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQURFN0U3OUFCQUJFMzExQkE2NDg0QzE2QTI1QzM1QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4N0NEOUE5M0QxQUFFMzExODU3Q0RCMDVGQkYyMTM2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIAB4AYgMBEQACEQEDEQH/xABvAAEAAgIDAAAAAAAAAAAAAAAABQgBBgIDBwEBAQAAAAAAAAAAAAAAAAAAAAEQAAEDAgMEBwkAAAAAAAAAAAEAAgMRBCEFBjFBEgdxoSJSohMIUWGRwUJyM5MUEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8AsugICAgICAgICAgICAgICAgICAgICAgICAgIKn5d6ouYts1rLm3y++ptfJDIx5/VIxvhRYmrb1Na/lo8ZHlzmb2B0jHnoDpa9SET2X+qNkJaNQaYurOPYZ7aQSA9DJWwjxoR6FpvnNy31AWR2ecxQXL8Ba3lbaSp+keZRrj9riiRuoIIqNiDKAgICAgICAgozdWGjhrK7isczDsh43usbgRzVxALW8L2ceBJGPs2orneWtnEa216y5buHBIx3wc2nWqOiETVPlFwNMeGvyQRt43L3Eh7gyTvNFTX30UG98sXc8mFjtHNv5MvbiGy8P8AE5o3N/rLYcR3SCgtZpeXUMun7GXUcMVvnb4w6+gt/wAbHknsjtSDAUrRxFdiIlUBAQEBAQEH/9k=",ip="/assets/Azure2014-NewsLetter-EN_07-f1a5ae7b.png",np="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZEQzREMEMyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZEQzREMEQyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkRDNEQwQTJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkRDNEQwQjJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq/tAFkAAAE5SURBVHjaxFaBEYMgDIxdoHaDjsAIdgNH6AhuYjdwBEeoG9gNHAE3oIEGjyIV0Cp/l7M0CSEhCQHwQAiRI1VILRIXc3DiSZkc1oIMNSIeTbRhVCgtb3rygDlkGfF6y+sy1FhtKA5IRcRBC9LRqGOMNRuuo/EapTBq3GEj5B7GfqUrQfhWzxY85V+JZDAG+DOMO1WOZGSZE/+WZVnnCxV+rsZfD9QZlxIJP09aXoBSWqV+4ImZo2SuHh1dMhVQl/gs4pqCXXdsQV471YJxWraiEwUZpagoGXmHQl0mwhKSYfKVxxnJjMxIefByGBXTj2kx7xprwF3dSTNPsA9+Nu8kIT00aWRIdaHHvAo5FTPzeWbt3a0t/N56wlho4R/f2o5u3mmep8Mf4CQjRpIhKsmYmGQQ3nPUfwswACAKzdYI3hSjAAAAAElFTkSuQmCC",rp="/assets/Helium_Thumbnail_2014-06-7f2a0d14.png",lp="/assets/Helium_Tile_2014-06-de0d5e58.png",op="/assets/Mazda_Thumbnail_2014-06-ee80d340.png",sp="/assets/Mazda_Tile_2014-06-7ea4c320.png",ap="/assets/AlertLogic_Thumbnail_2014-06-f4e69c53.png",dp="/assets/AlertLogic_Tile_2014-06-596856ba.png",cp="/assets/MS_Logo_white_100-b0831751.png";function T1(){return e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"620px"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),e.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),e.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:e.jsx("img",{src:$0,width:"74",height:"30",border:"0",align:"left"})}),e.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"500",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("img",{src:ep,width:"500",height:"76",border:"0"})}),e.jsx("td",{width:"98",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("table",{width:"98",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"98",colSpan:"3",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("img",{src:tp,width:"98",height:"30",border:"0"})})})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5"},children:e.jsx("table",{width:"282",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{width:"282",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",padding:"5px 0px 0px 0px"},children:"September 2016"})}),e.jsx("tr",{children:e.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"48px",fontWeight:"100",lineHeight:"50px"},children:"Newsletter"})})]})})}),e.jsx("td",{width:"20",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"261",align:"right",valign:"top",style:{background:"#326fb5",display:"block"},children:e.jsx("img",{src:ip,width:"261",height:"97",border:"0",alt:"Azure"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("table",{width:"528",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#announcements",style:{color:"#fffffe",textDecoration:"none"},children:"Announcements"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"72",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#learning",style:{color:"#fffffe",textDecoration:"none"},children:"Learning"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"67",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#partners",style:{color:"#fffffe",textDecoration:"none"},children:"Partners"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#success",style:{color:"#fffffe",textDecoration:"none"},children:"Success Stories"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"85",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#AzureStore",style:{color:"#fffffe",textDecoration:"none"},children:"Azure Store"})})]})})})}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",colSpan:"3",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"10px",fontWeight:"500"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"376",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("br",{}),e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"announcements",children:"Announcements"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Run SAP applications on Microsoft Azure"}),e.jsx("br",{}),"Azure is now certified for SAP Business Suite, SAP Business All-In-One, SAP NetWeaver, and SAP HANA Developer Edition, all of which include full support from both Microsoft and SAP. Plus, you can deploy and provision reconfigured SAP solutions in minutes directly to Azure using the"," ",e.jsx("a",{href:"",alias:"Body: Announcements: SAP Cloud Appliance Library tool",title:"SAP Cloud Appliance Library tool",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP Cloud Appliance Library tool"}),". For more information, visit the"," ",e.jsx("a",{href:"",alias:"Body: Announcements: SAP on Azure",title:"SAP on Azure",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP on Azure"})," ","website.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Brazil South region generally available"}),e.jsx("br",{}),"Earlier this month we announced the general availability of the Brazil South region, located in the São Paulo state. Azure customers can now host their services in Brazil South with the same service-level coverage they receive in Azure regions worldwide. Learn more about the new region in"," ",e.jsx("a",{href:"",alias:"Body: Announcements: The Official Microsoft Blog",title:"The Official Microsoft Blog",style:{color:"#3da5dd",textDecoration:"none"},children:"The Official Microsoft Blog"}),".",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Hyper-V Recovery Manager adds replication feature, gets new name"}),e.jsx("br",{}),"Hyper-V Recovery Manager, now called Azure Site Recovery, added an important new preview feature. Now you can replicate running virtual machines from your site to Azure, and use Azure as your disaster recovery location, avoiding the complexity and expense of a secondary datacenter."," ",e.jsx("a",{href:"",alias:"Body: Announcements: Learn more",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"Learn more"})," ","or try the new capability in preview mode in the"," ",e.jsx("a",{href:"",alias:"Body: Announcements: Azure Management Portal",title:"Azure Management Portal",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure Management Portal"}),".",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Introducing Scheduler Premium tier and updates to Standard tier"}),e.jsx("br",{}),"Now Scheduler offers two important updates that enable you to operate at even higher scale:",e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",e.jsx("strong",{children:"•"}),"  "]}),e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["Scalable Standard tier. Scale to up to 10 Standard units, which at 10 job collections per unit enables you to create up to 100 job collections.",e.jsx("br",{}),e.jsx("br",{})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",e.jsx("strong",{children:"•"}),"  "]}),e.jsx("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:"New Premium tier. Receive 10,000 job collections per month with every Premium unit."})]})]})}),e.jsx("br",{}),"By using Scheduler, you can invoke actions—such as calling HTTP/S endpoints or posting a message to a storage queue—on any schedule. For more information, visit the"," ",e.jsx("a",{href:"",alias:"Body: Announcements: More Scheduler Information",title:"Scheduler",style:{color:"#3da5dd",textDecoration:"none"},children:"Scheduler"})," website.",e.jsx("br",{})," "]})})})})}),e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"167",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#a5ce00",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"3",style:{padding:"8px 0px",borderBottom:"2px solid #ffffff"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),e.jsx("td",{align:"left",valign:"middle",bgcolor:"#a5ce00",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"1em",padding:"5px 0 5px"},children:e.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:"Free Azure Trial"})}),e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),e.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#a5ce00",style:{padding:"5px 0 5px"},children:e.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:np,width:"24",height:"24",border:"0"})})}),e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "})]})})})})})})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"3",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Partners"})}),e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:rp,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:"Helium"})})]})})})}),e.jsx("td",{width:"8",children:" "})]})]})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"4",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Success Stories"})}),e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{textDecoration:"none"},children:e.jsx("img",{src:op,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{color:"#3da5dd",textDecoration:"none"},children:"Mazda"})})]})})})}),e.jsx("td",{width:"8",children:" "})]})]})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsxs("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#4d4d4d",padding:"0 0 10px"},children:[e.jsx("strong",{children:e.jsx("a",{href:"",alias:"Body: Azure Store: Azure Store",title:"Visit Azure Store",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Partner updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{textDecoration:"none"},children:e.jsx("img",{src:ap,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{color:"#3da5dd",textDecoration:"none"},children:"Alert Logic"})})]})})})]}),e.jsx("td",{width:"8",children:" "})]})})})]})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"learning",children:"Learning"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Get started with ExpressRoute"}),e.jsx("br",{}),"Learn everything you need to know about Azure ExpressRoute, recently announced as generally available. Get information about ExpressRoute basics, exchange providers, network service providers, pricing, case studies, and more. Read the"," ",e.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Ganesh Srinivasan",title:"blog post",style:{color:"#3da5dd",textDecoration:"none"},children:"blog post"})," ","by Ganesh Srinivasan.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"The future of cryptography with Azure Web Sites"}),e.jsx("br",{}),"Securing your site with SSL has never been more important. Even though encryption isn’t new, cryptographers keep looking for ways to be more secure, and the Web Sites team is always looking for ways to support the latest and greatest. Today the greatest is Elliptic Curve Cryptography (ECC) certificates, which is now supported by Web Sites. For more information, read this"," ",e.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Erez Benari",title:"blog post",style:{color:"#3da5dd",textDecoration:"none"},children:"blog post"})," ","by Erez Benari.",e.jsx("br",{})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"partners",children:"Partners"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Helium",alias:"Body: Partner: Helium Image",border:"0",children:e.jsx("img",{src:lp,alt:"Helium",width:"125",height:"129",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Ceiba empowers life sciences and healthcare data while reducing management costs. Its Helium solution delivers application reporting functions and associated information within common user applications, simplifying data access, and increasing productivity.",e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Partner: Helium Learn More",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"Learn more"})]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"success",children:"Success Stories"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Mazda",alias:"Body: Success: Mazda Image",border:"0",children:e.jsx("img",{src:sp,alt:"Mazda",width:"125",height:"129",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["To improve disaster protection for applications that its dealers use to run their businesses, Mazda North American Operations revamped its data protection using a StorSimple hybrid cloud storage solution based on Microsoft Azure. Mazda now has more reliable, real-time data protection and can restore data in minutes. It has eliminated backup work for engineers and reduced data protection costs by 95 percent.",e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Success: Mazda Read the full story",title:"Read the full story",style:{color:"#3da5dd",textDecoration:"none"},children:"Read the full story"})]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"AzureStore",children:"Azure Store"})}),e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Azure Store: Visit Azure Store",title:"Visit Azure Store",style:{color:"#3da5dd",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Visit Azure Store"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Partner updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Alert Logic",alias:"Body: Azure Store: Alert Logic Image",border:"0",children:e.jsx("img",{src:dp,alt:"Alert Logic",width:"125",height:"93",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Alert Logic’s recently published"," ",e.jsx("a",{href:"",alias:"Body: Azure Store: Cloud Security Report",title:"Cloud Security Report",style:{color:"#3da5dd",textDecoration:"none"},children:"Cloud Security Report"})," ","contains data-driven research on cyberthreats in cloud, hosting, and on-premises environments, based on six months of data from more than 2,200 customers. Alert Logic now offers two editions of its Log Manager service in the Azure Store—Security and Security & Compliance—with multiple capabilities to help Azure customers employ best practices in active protection, forensic analysis, and compliance.",e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Azure Store: Alert Logic - Visit Store Page",title:"Visit Store page",style:{color:"#3da5dd",textDecoration:"none"},children:"Visit Store page"})]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"Quick Links"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"Azure Management portal",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"Management portal"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Account",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"Account"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Azure Forums",alias:"Quick Links: Azure Forums",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Forums"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"Azure Friday",alias:"Quick Links: Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Channel 9",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Stack Overflow",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stack Overflow"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"Twitter",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Facebook",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Blog",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"Blog"})]})]})})})]}),e.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"434",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"One Microsoft Way, Redmond, WA 98052 USA"}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:e.jsx("img",{src:cp,width:"75",height:"16",border:"0",align:"left"})}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsx("tr",{children:e.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),e.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function F1(){return e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"620px"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),e.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),e.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:e.jsx("img",{src:$0,width:"74",height:"30",border:"0",align:"left"})}),e.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"500",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("img",{src:ep,width:"500",height:"76",border:"0"})}),e.jsx("td",{width:"98",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("table",{width:"98",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"98",colSpan:"3",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:e.jsx("img",{src:tp,width:"98",height:"30",border:"0"})})})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5"},children:e.jsx("table",{width:"282",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{width:"282",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",padding:"5px 0px 0px 0px"},children:"2016年9月"})}),e.jsx("tr",{children:e.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"48px",fontWeight:"100",lineHeight:"50px"},children:"Newsletter"})})]})})}),e.jsx("td",{width:"20",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"261",align:"right",valign:"top",style:{background:"#326fb5",display:"block"},children:e.jsx("img",{src:ip,width:"261",height:"97",border:"0",alt:"Azure"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("table",{width:"528",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#announcements",style:{color:"#fffffe",textDecoration:"none"},children:"最新情報"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"72",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#learning",style:{color:"#fffffe",textDecoration:"none"},children:"トレーニング情報"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"67",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#partners",style:{color:"#fffffe",textDecoration:"none"},children:"パートナー"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#success",style:{color:"#fffffe",textDecoration:"none"},children:"導入事例"})}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),e.jsx("td",{width:"85",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:e.jsx("a",{href:"#AzureStore",style:{color:"#fffffe",textDecoration:"none"},children:"Azure Store"})})]})})})}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",colSpan:"3",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"10px",fontWeight:"500"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"376",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("br",{}),e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"announcements",children:"最新情報"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Microsoft Azure 上で SAP アプリケーションを実行する"}),e.jsx("br",{}),"Azure における SAP Business Suite、SAP Business All-In-One、SAP NetWeaver、SAP HANA Developer Edition の認定が完了しました。これらすべてに Microsoft と SAP によるフルサポートが含まれています。また、"," ",e.jsx("a",{href:"",alias:"Body: Announcements: SAP Cloud Appliance Library tool",title:"SAP Cloud Appliance Library tool",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP Cloud Appliance Library ツール"}),"を使用すると、構成済みの SAP ソリューションを数分で Azure に直接導入したりプロビジョニングしたりできます。詳細については、「"," ",e.jsx("a",{href:"",alias:"Body: Announcements: SAP on Azure",title:"SAP on Azure",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP on Azure"})," ","(英語)」Web サイトをご覧ください。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"ブラジル南部リージョンの一般提供開始"}),e.jsx("br",{}),"先日、サンパウロ州のブラジル南部リージョンの一般提供開始についてお知らせしました。Azure のお客様は、世界中の Azure リージョンと同様のサービス レベル契約範囲で、ブラジル南部でのサービスをホストできるようになります。新しいリージョンについては、"," ",e.jsx("a",{href:"",alias:"Body: Announcements: The Official Microsoft Blog",title:"The Official Microsoft Blog",style:{color:"#3da5dd",textDecoration:"none"},children:"The Official Microsoft Blog"}),"(英語)をお読みください。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Hyper-V Recovery Manager へのレプリケーション機能の追加および名称の変更"}),e.jsx("br",{}),"Hyper-V Recovery Manager は Azure Site Recovery という名称に変更され、重要な新しいプレビュー機能が追加されました。実行中の仮想マシンをオンプレミスから Azure にレプリケートし、Azure を障害復旧の拠点として使用できるようになります。そのため、二次データセンターにかかる費用と複雑さを回避することができます。プレビューの"," ",e.jsx("a",{href:"",alias:"Body: Announcements: Learn more",title:"詳細",style:{color:"#3da5dd",textDecoration:"none"},children:"詳細"})," ","(英語)を参照するか、"," ",e.jsx("a",{href:"",alias:"Body: Announcements: Azure Management Portal",title:"Azure 管理ポータル",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure 管理ポータル"}),"でプレビューの新しい機能をお試しください。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Scheduler Premium (プレミアム) レベルの公開および Standard (標準) レベルの更新"}),e.jsx("br",{}),"Scheduler は、より高いレベルでの動作を可能にする 2 つの重要な更新を提供します。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",e.jsx("strong",{children:"•"}),"  "]}),e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:[e.jsx("strong",{children:"拡張性のある Standard (標準) レベル。"}),"最大 10 個の Standard (標準) ユニットまで拡張できます。ユニットあたり 10 個のジョブ コレクションが作成できるため、最大 100 個のジョブ コレクションを作成できます。",e.jsx("br",{}),e.jsx("br",{})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",e.jsx("strong",{children:"•"}),"  "]}),e.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:[e.jsx("strong",{children:"新しい Premium (プレミアム) レベル。"}),"Premium (プレミアム) ユニットあたり、月ごとに 1 万個のジョブ コレクションを受け取ることができます。"]})]})]})}),e.jsx("br",{}),"Scheduler を使用することで、設定したスケジュールに応じて HTTP/S エンドポイントを呼び出したり、ストレージ キューにメッセージを格納したりするなどの操作を実行できます。詳細については、「",e.jsx("a",{href:"",alias:"Body: Announcements: More Scheduler Information",title:"Scheduler",style:{color:"#3da5dd",textDecoration:"none"},children:"Scheduler"}),"」Web サイトをご覧ください。",e.jsx("br",{})," "]})})})})}),e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"167",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#a5ce00",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"3",style:{padding:"8px 0px",borderBottom:"2px solid #ffffff"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),e.jsx("td",{align:"left",valign:"middle",bgcolor:"#a5ce00",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"1em",padding:"5px 0 5px"},children:e.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:"Free Azure Trial"})}),e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),e.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#a5ce00",style:{padding:"5px 0 5px"},children:e.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:np,width:"24",height:"24",border:"0"})})}),e.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "})]})})})})})})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"3",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Partners"})}),e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:rp,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:"Helium"})})]})})})}),e.jsx("td",{width:"8",children:" "})]})]})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{valign:"top",colSpan:"4",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Success Stories"})}),e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{textDecoration:"none"},children:e.jsx("img",{src:op,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{color:"#3da5dd",textDecoration:"none"},children:"Mazda"})})]})})})}),e.jsx("td",{width:"8",children:" "})]})]})}),e.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"8",children:" "}),e.jsxs("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#4d4d4d",padding:"0 0 10px"},children:[e.jsx("strong",{children:e.jsx("a",{href:"",alias:"Body: Azure Store: Azure Store",title:"Visit Azure Store",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"Partner updates"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{textDecoration:"none"},children:e.jsx("img",{src:ap,width:"25",height:"25",border:"0"})})}),e.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:e.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{color:"#3da5dd",textDecoration:"none"},children:"Alert Logic"})})]})})})]}),e.jsx("td",{width:"8",children:" "})]})})})]})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"learning",children:"ラーニング"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"ExpressRoute を使ってみましょう"}),e.jsx("br",{}),"一般提供が開始された Azure ExpressRoute について知っておくべきことをすべて学習することができます。ExpressRoute の基本、Exchange プロバイダー、ネットワーク サービス プロバイダー、料金、ケース スタディなどに関する情報を入手することができます。Ganesh Srinivasan による",e.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Ganesh Srinivasan",title:"ブログ記事 ",style:{color:"#3da5dd",textDecoration:"none"},children:"ブログ記事"})," ","をご覧ください。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Azure Web Sites の暗号化のについて"}),e.jsx("br",{}),"お客様のサイトを SSL で保護することがこれまで以上に重要になっています。暗号化は既に目新しくはありませんが、暗号の専門家はより安全な方法を探し続け、Web Sites チームは最新かつ最高のものをサポートする方法を常に探しています。現在、最高の暗号化は楕円曲線暗号 (ECC) を用いた認証で、これは既に Azure Web Sites によってサポートされています。詳細については、Erez Benari による",e.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Erez Benari",title:"ブログ記事 ",style:{color:"#3da5dd",textDecoration:"none"},children:"ブログ記事"})," ","をご覧ください。",e.jsx("br",{})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"partners",children:"パートナー"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Helium",alias:"Body: Partner: Helium Image",border:"0",children:e.jsx("img",{src:lp,alt:"Helium",width:"125",height:"129",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Ceiba は管理コストを削減しながら、ライフ サイエンスと医療のデータを強化します。Helium ソリューションは、機能や一般的なユーザー アプリケーション内の関連情報を報告するアプリケーション、データ アクセスを簡素化するアプリケーション、および生産性を向上させるアプリケーションを提供します。 詳細については、",e.jsx("a",{href:"",alias:"Body: Partner: Helium Learn More",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"こちら"}),"(英語) をご覧ください。"]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"success",children:"導入事例"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Mazda",alias:"Body: Success: Mazda Image",border:"0",children:e.jsx("img",{src:sp,alt:"Mazda",width:"125",height:"129",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("br",{}),"ディーラーがビジネス遂行に使用するアプリケーションの障害保護を向上させるため、Mazda North American Operations は Azure を利用した当社のハイブリッド クラウド ストレージ ソリューションである StorSimple を使用して、データ保護を改良しました。Mazda はより信頼できるリアルタイムなデータ保護を手に入れ、数分でデータを復元できるようになりました。エンジニアのバックアップ作業が不要になり、データ保護にかかるコストが 95% まで削減されています。",e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Success: Mazda Read the full story",title:"Read the full story",style:{color:"#3da5dd",textDecoration:"none"},children:"Read the full story"})]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})}),e.jsx("tr",{children:e.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("span",{style:{fontSize:"26px"},children:e.jsx("a",{name:"AzureStore",children:"Azure Store"})}),e.jsx("br",{}),e.jsx("a",{href:"",alias:"Body: Azure Store: Visit Azure Store",title:"Azure Store にアクセス",style:{color:"#3da5dd",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store にアクセス"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"パートナー様の更新情報"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:e.jsx("a",{href:"",title:"Alert Logic",alias:"Body: Azure Store: Alert Logic Image",border:"0",children:e.jsx("img",{src:dp,alt:"Alert Logic",width:"125",height:"93",border:"0"})})}),e.jsx("td",{width:"30",children:" "}),e.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Alert Logic が最近発表した「",e.jsx("a",{href:"",alias:"Body: Azure Store: Cloud Security Report",title:"Cloud Security Report (クラウド セキュリティ レポート)",style:{color:"#3da5dd",textDecoration:"none"},children:"Cloud Security Report (クラウド セキュリティ レポート)"}),"」には、クラウド、ホスティング、およびオンプレミスの環境におけるサイバー攻撃の脅威に関するデータ駆動型の調査が含まれています。この調査は 6 か月間にわたる 2,200 以上の顧客からのデータに基づいています。Alert Logic は Azure Store で Security および Security & Compliance という 2 つのエディションのログ管理サービスを提供しています。これらには複数の機能があり、Azure のお客様がアクティブ保護、フォレンジック分析、およびコンプライアンスにおいてベスト プラクティスを採用するようサポートします。 詳細については、",e.jsx("a",{href:"",alias:"Body: Azure Store: Alert Logic - Visit Store Page",title:"こちらから",style:{color:"#3da5dd",textDecoration:"none"},children:"こちらから"})," ","(英語)Store ページにアクセスしてください。"]})]})})})]})}),e.jsx("tr",{children:e.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"リンク"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"管理ポータル",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"管理ポータル"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"アカウント情報",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"アカウント情報"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"フォーラム",alias:"Quick Links: Azure Forums",style:{color:"#f0f6fa",textDecoration:"none"},children:"フォーラム"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"Azure Friday (英語)",alias:"Quick Links: Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Channel 9 (英語)",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9 (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Stackoverflow (英語)",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow (英語)"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[e.jsx("a",{href:"",title:"Twitter (英語)",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Facebook (英語)",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"ブログ",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"ブログ"})]})]})})})]}),e.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"434",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"日本マイクロソフト株式会社 〒108-0075 東京都港区港南 2-16-3 品川グランドセントラルタワー"}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:e.jsx("img",{src:cp,width:"75",height:"16",border:"0",align:"left"})}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsx("tr",{children:e.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),e.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function P1(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Newsletter",url:"/Microsoft/Azure/Newsletter"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(io,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Azure Newsletter • United States & Japan",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"The Azure Newsletter is a monthly digital publication that helps subscribers in the United States and Japan stay informed on the latest Azure features, events, and community activities. It also features sponsored content from Partners and showcases success stories of major corporations using Azure."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsxs(e.Fragment,{children:[e.jsx(T1,{}),e.jsx(F1,{})]})})]})]})}const fp="/assets/ms-logo-azure-top-34c57bae.png",hp="/assets/MS_Logo_white_100-b0831751.png",C1="/assets/azure2014-informativev2_02-78da31b3.png",H1="/assets/azure2014-informativev2_04-ac5f6ca1.png";function G1(){return e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"600px"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),e.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{width:"600",align:"right",style:{backgroundColor:"none",color:"#3f4042",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",fontWeight:"bold",padding:"24px 0 3px"},children:["Having trouble viewing this email?"," ",e.jsx("a",{href:"",title:"View as a webpage",alias:"Preheader: View as a webpage",style:{color:"#3da5dd",textDecoration:"none"},children:"View as a webpage"}),"."]})})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),e.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:e.jsx("img",{src:fp,width:"74",height:"30",border:"0",align:"left"})}),e.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",display:"block"},children:e.jsx("img",{src:C1,width:"598",height:"70",border:"0"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"334",align:"left",valign:"middle",style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"17px",fontWeight:"100",lineHeight:"22px",paddingBottom:"24px"},children:[e.jsx("br",{}),"We’ve been charging you an incorrect price on one or more Azure services, and we are taking steps to correct it."]}),e.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"179",align:"left",valign:"top",style:{background:"#ffffff",display:"block"},children:e.jsx("img",{src:H1,width:"179",height:"170",border:"0",alt:"Azure"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:["Due to a system issue, we’ve been extending a 5-percent lower price than your customers are entitled to on one or more Azure services. The issue has been fixed, and beginning February 1, 2015, you’ll see the correct pricing in your Azure account. Please note that we won’t be making corrections to prior months’ invoices.",e.jsx("br",{}),e.jsx("br",{}),"No action is required on you or your customers’ part, and we apologize for any inconvenience this issue may have caused.",e.jsx("br",{}),e.jsx("br",{}),"Please"," ",e.jsx("a",{href:"",title:"contact us",alias:"Body: Contact Us",style:{color:"#3da5dd",textDecoration:"none"},children:"contact us"})," ","if you have any questions.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"Thank you,",e.jsx("br",{}),e.jsx("br",{}),"Your Azure Team"]}),e.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{valign:"top",style:{background:"#ffffff",padding:"20px 0",borderTop:"1px solid #dfdfdf"},children:e.jsx("table",{width:"513",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{width:"513",align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"26px",paddingBottom:"15px",paddingTop:"15px"},children:[e.jsx("span",{style:{fontSize:"17px",fontWeight:"100"},children:"Account Information"}),e.jsx("br",{}),e.jsx("strong",{children:"Partner Name: "}),"Test Partner",e.jsx("br",{}),e.jsx("strong",{children:"Company Name: "}),"Test Company",e.jsx("br",{}),e.jsx("strong",{children:"Enrollment Number: "}),"123456789",e.jsx("br",{})]})})})})}),e.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#505050",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0"},children:["This message from Microsoft is an important part of a program, service, or product that you or your company purchased or participates in. Microsoft respects your privacy. Please read our"," ",e.jsx("a",{href:"",title:"Privacy Statement",alias:"Footer: Privacy Statement",style:{color:"#3da5dd",textDecoration:"none"},children:"Privacy Statement"}),"."]}),e.jsx("td",{width:"50",style:{background:"#505050",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"433",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"One Microsoft Way, Redmond, WA 98052 USA"}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:e.jsx("img",{src:hp,width:"75",height:"16",border:"0",align:"left"})}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsx("tr",{children:e.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),e.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}const B1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAeCAIAAAAErR/HAAAAA3NCSVQICAjb4U/gAAAEoElEQVRYhe1YTWwbRRR+SezsBrseg+LdqJK9UYjXzY83ErFT8seBtAccp+IvUkhUQSUkLkhFCHGFS1VVcEWoElAkSOgBUSlNIlCSArETKd60ol774B9VWUdQe4XorknwbhTbHKYyK9vlEjeQKN/pzfd23rxv3s6btesURYGji/r/OoHHi2N5hxnH8g4zjrg8QyHJF66+V8Xx0c+z4gf3d2JlfK/tRY9t4kByqwGOePUOQp4sywewSiwWn705tx7i9aRhn0EvXb4CAO7urnNj/hJ5NyzMzS8AwNTkRDgsCJGof9TXw7n3uda/IBaLf/vdDQBQstnTfd5NUWxlGKhV9eKJZC6nloaBYLBkMwxDURRClpos9CiEwwIAvPryS+enJr+anpmeuY75/VYPQ9O0eCKB67MpioqSLbkYhx0hC03ReLgpipmMpKkqx7kBQFYUK0JiagshSyvDbIpiSkwBAE3TLheLp6TTGTGVAgAX67RarQBwNywosgwALMu2tNDpdEbOZgGAIIlNUVRVDS9kRagG8hCyKEo2xG9geXgjMYmHgdW1qcmJVoaZvTknRKL6uYHVNYIgNE0bHhzAr3HJxba3j4+/sh7il5ZvPdxEVfV6vV/PfCNJUmm6f9QXFgTMlIqG7eHBAUPdSVf9Wx9XzXuAfl3L/1VGnmi0VchDtI2KJ5PpdAYhJESiDocdAPQ1BID1EI9dw0ODmqoRJIELBQD+UV+hUAisriFkOTsyAgCLy8vxZDIWi/MbGwDw7jsXNU2VFSUQCEiShIMoSnZufmFufuH81OQPi0uSJE1NTgDA4tItbFsRMqTB9H2xq1LbBQA69wvs/lbGF0zeopEuIznOHU8mQzxvRQgAOLc7LAhlz8QTCQAYHhrEhx4AsLw+T28P515ZCQAA296O30lRFPnbdzKZDEJIUbKfX7vmH/W1MkwguKoPEuI3JEkqFAskSQAAJvW24X6ucCOpQgUuOJ9oeLDQsJ0o43dpyJtPl5EuF4uQJZ5IkiSBkKWHqyIP/7DE+vVwMI6SjazWMmNs1LcSCAqR6PTM9TMjz2OSJMiHBklUZq5Hze49r8ejaZqiZLnu7qoPOOx2AAiF+FxOzeXUdDqj92I9YSEiy7Isy2EhgkkxtXVuzO8f9QFASkyRjQQAhHgeR0iltgCg1Lf0wJdtbTonAHBuN+4B3CPutz6vN55I8rfvhCNR3Ev0XtbppChKkqRPPr2KGYqiejj3pctXAsEgPsasi6UpStzaEiLRUhPy9j7T1ETqQ+Et+OyLL/s8vQ1vXHz/p193K7N5zdnU8GC2fvePMj5v7iqa+/4ZF4sMw7TQtNFoQAixrLN0tGjKxjAOgiStFgvDOJqbmzs7TpEEsZfPc93dLMuazCbsIknSaDR0dnSYTKa9/B5CyOvxnD0zYjQaCILY2dlx2O3PDQ11dXWazebOjlOqqpIkSduo/v5nBwf6dcsxANDW1ra9vW0wGlwsW/fjvd8/DP1ZKW/2haca771Z7eyN5+m3q9bnf4gj/kltOGGscz5prOorkE9XYRtPPt6Maoq64z8CDzGO5R1mHMs7zDji8v4G6DTw0m9RZV4AAAAASUVORK5CYII=",Z1="data:image/png;base64,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",L1="/assets/middle-ae19546a.png",W1="data:image/png;base64,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",O1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAA3NCSVQICAjb4U/gAAABzElEQVQ4jd3VPSwDUQAH8Hcv7zmlXlvXQS8hnKhBfCcGFauBxCQSCQm7RdhMpk4WiZgY7CYSjOIjkZQSJCoq0aigF7xqz/U1ZThOcVdVnfyny8v//XLv7t07jlIFGOVaSe5FEueUBR+T2ohkQ9UEtzgLXBZkOIX7bvlkdek85r95NpwAAKgR+MFaa6vAZ7KiLLUQiK4FY2ZKerqk4mF3SQmGBlaUpca25TBl2UBaRIKn2wWdgzlDAIAwZWPbcpSlPlkzx/S3kM559x8+LJ+sboXiZu3RevtqX+XGgGRW8N88+2T1zVo8fTLrLfVW9NWX/nh3c0cUAAADlJ3Jqlnp5FYZX7+6vDctaAlTFqAM7kcy9SZ37nYzFvRsXivwMJLIpvpjDmUGY8mXvFhA3xP/22oQcF4gyYZgh8uSF6uplIdugh0mZ1v2cVhQp6uQo1RZCcVn/Q9/sYbqSL9khQCA7vIikeT+1ESC+yUr0N/jVJuDR1wOEI+4iWa7dv1muSzI63H+luMR5/U43e9r+thfboK9Hmf2ixUJToeA4X9o/pQuB2Oq+XfKI65HKh6pJV/GDSwtK6H4gZy4eGT62S0SXGXDjUJBZ1lh+u9HzythBLNHHEy50wAAAABJRU5ErkJggg==",Y1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAA3NCSVQICAjb4U/gAAACd0lEQVQ4jaWVz2sTQRTH3w4z2WaTTpJmqSZVSyMmrUJFKwUtFLw0gl7EQ/VgUf8BsSDePNRLDtWDBREPCnpWL/YgHrTQFhRjY7XURppiUxISs5hMutluN1QP0TUmkx+t39Pw3nc++2bf2x2BMQ14SmrFD5nNZWbEcsVSxOfA+yk5Kls8VszdIlSzwor+bFmNpDa4GwDggFu8GLD3ucV6rLyx9SiafxlTa1HKFfTZLvtbWwnisPLG1uiskmBGM6CSvJTcOeE2cWjHIABIMGN0VskbW/+wJhbYdkEmLjSXLa0xAIQVfSZeqPb1y+KFg86eXVaJoNWs/nwx93RlvdoWSW2EFb3PLSIAeLLEcQDA+FBHp0tcTGnhNVW2kavH28912bnO+58ZAOAoM74qOtdx603yVUIzaxwf6jjb4+CWlmBGlBloLsMHAYAJAoB3GT2jFvc5K2fK1HRSQ/OZzVrpCkkWtJqt+eB5xUBq8WczoEsBKhH0Nl5vjFGdnCk/Jed721az+sSn7H+xZBGFTnoAYGw6Xd/ZgCWL6MGpPZIF3Z5JRRsNM+p1k1o5PyUl0M3XyfKecuVzYOH9Grs29Z0LuhvskAj6ktbSatGMP17Icgu8cawN+ylxWfEPrViRC3baJIIAoLvd2l0Wn/q2Xs1yWfGgp0VgTJuMF+5F6jWooUYO0WGfHQHA6b2Sl9Z8aw3lpWTYZwezj2P9LhELOwCJWLh+xFla/2Z5rDg0IG8XJ2IhNCD7/5zp73z5KQkNyM0f1ktJOQi499DDJfYipuq1v1MRC2d8tisBWhHnsEqajBc+KpsrOcP8d3sp6XKQw27L4O6W8uvH1C8vufongpxrdAAAAABJRU5ErkJggg==",Q1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAIAAABLixI0AAAAA3NCSVQICAjb4U/gAAACj0lEQVQ4jZ2Vz0/TYBzGv61vKWVbgW2AqyGGKsUfmaJETJxBL2iiXAknTeRgwoELxn9ALzsYY0JiPBCN8Wj0JEajicQoByIwQSOMMCKQLTPtgHd0pbx1eiipE942g+fUvO/zft5fz7cvg7EBNGUMa0LdnMcktWbZLXI1OiRyp8MVEQFRhzA7WeOa+XJeT2Q3qAMAoDnEX2vxt4V4L1aeFJ8k829TuhulVJdl3w0lEOBYCitPigOjWhqTckC2JJG7fy7k4Ng9gwAgjcnAqJYnxf9Yg9/xbkEOLj65an8jABjXzM9LhZ2+Tkm4clg82iBUcayqWx9SeHB6dactkd0Y18y2EM8CwLPZdeqcFw766/xoJJV/PbsGAN3RYH+0hup89A0DAEpiMqeZVMeDCU01t85CmcNDXY1nG33UpaUxSWLCTqp0EAA4IADImb/dbLY+ZQw0pW56mwBAEbm+1iAAPE3k3DxTGkG69ceD0h+t6Y4GAaBAindHMu/S9IKzxXr0AcCMZj6fzn1cyFdxbN+ZOkXkPMxM75tlt7MvVXuYv3fpwMwv4+b7DNXQbGeiHI2ppqpbR+oFDw97IuS1bEeKyIV9aHHVdQdyNULnI8KLJCWrnZJwK9bwZVnPrhNfxb6LcgA877E1yCNF5GoFtGJY2/p+rls/ssaxeqGjKVAgxcUVcyiRG3MJY62AOiKVDMbG8FLhYYKS5vJ1/bjYI/tZALjaWCV5Xra3JJHrkf3g5OtOey2PmD2AeMTcPrVV8FusiIDisfBucTxi4rGwE+B/+VJELh4Ll79ZSeRKQUB9hx7P4lcp3XSvUx4xXbKvt0Xc1k5h2RpeKnzVNhfWiPPvlkSuqZo7Garo2F9Z+vw4+gvSeAvG3l1b+AAAAABJRU5ErkJggg==";function J1(){return e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"100%",style:{maxWidth:"600px"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{backgroundColor:"none"},align:"right",valign:"top",width:"50%",children:" "}),e.jsxs("td",{style:{backgroundColor:"none"},valign:"top",children:[e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{style:{backgroundColor:"none",color:"#3f4042",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",fontWeight:"bold",padding:"24px 0 3px"},align:"right",width:"600",children:e.jsx("a",{href:"",title:"",style:{color:"#3da5dd",textDecoration:"none"},children:"Lesen browser"})})})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},width:"598",children:e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"598",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#f1f1f1"},width:"42",children:" "}),e.jsx("td",{style:{background:"#f1f1f1"},width:"74",children:e.jsx("img",{src:B1,height:"30",align:"left",border:"0",width:"74"})}),e.jsx("td",{style:{background:"#f1f1f1"},width:"482",children:" "})]})})})}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px",display:"block"},align:"",width:"598",children:e.jsx("img",{src:Z1,height:"70",border:"0",width:"598"})}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})]})}),e.jsx("table",{bgcolor:"#ffffff",border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"35",children:" "}),e.jsxs("td",{style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"22px",fontWeight:"100",lineHeight:"24px",paddingBottom:"24px"},align:"left",valign:"top",width:"345",children:[e.jsx("br",{}),e.jsx("br",{}),"Wenn man Spaß hat, vergeht die Zeit wie im Flug.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:"Wie Sie wissen, umfasst Ihre kostenlose Testversion Gutschriften im Wert von 150€, die Sie einen Monat lang nutzen können. Sie haben Ihre Testversion vor mehr als zwei Wochen aktiviert."})]}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"20",children:" "}),e.jsx("td",{style:{background:"#ffffff",display:"block"},align:"right",valign:"top",width:"198",children:e.jsx("img",{src:L1,alt:"Azure",height:"216",border:"0",width:"198"})}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),e.jsx("td",{style:{background:"#f2f2f7",lineHeight:"1px"},width:"35",children:" "}),e.jsxs("td",{style:{background:"#f2f2f7",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"513",children:[e.jsxs("span",{style:{fontSize:"18px",fontWeight:"100"},children:["Sind Sie den Lösungen wie Infrastrukturdienste, Websites, Mediendienste, mobile Dienste und Lösungen für große Datenmengen bereits verfallen?"," "]}),e.jsx("br",{}),e.jsx("br",{}),"Dann haben wir gute Nachrichten für Sie! Wenn Sie zu einem kostenpflichtigen Abonnement wechseln, bevor Ihre Testversion abläuft, können Sie nach wie vor alle nicht eingesetzten Gutschriften bis zum Ende der Testphase nutzen.",e.jsx("br",{}),e.jsx("br",{}),"Wenn Sie Ihr Abonnement weiterhin unterbrechungsfrei verwenden möchten, können Sie heute Ihr Abonnement durch Befolgen dieser Schritte in ein kostenpflichtiges Abonnement umwandeln:",e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[e.jsx("img",{src:O1,alt:"1",height:"25",border:"0",width:"25"}),"  "]}),e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Melden Sie sich bei Ihrem"," ",e.jsxs("a",{href:"",style:{color:"#3da5dd",textDecoration:"underline"},children:["Windows Azure-Konto"," "]}),"an",e.jsx("br",{}),e.jsx("br",{})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[e.jsx("img",{src:Y1,alt:"2",height:"25",border:"0",width:"25"}),"  "]}),e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Wählen Sie Ihr kostenloses Testabonnement aus",e.jsx("br",{}),e.jsx("br",{})]})]}),e.jsxs("tr",{children:[e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[e.jsx("img",{src:Q1,alt:"3",height:"25",border:"0",width:"25"}),"  "]}),e.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Klicken Sie auf „Jetzt Upgrade ausführen” und wählen Sie „Ja, mein Abonnement aktualisieren.” aus",e.jsx("br",{}),e.jsx("br",{})]})]})]})})]}),e.jsx("td",{style:{background:"#f2f2f7",lineHeight:"1px"},width:"50",children:" "}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"35",children:" "}),e.jsxs("td",{style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"513",children:["Haben Sie weitere Fragen zu Preisen? Nutzen Sie unseren"," ",e.jsx("a",{href:"",title:"Preisrechner",style:{color:"#3da5dd",textDecoration:"underline"},children:"Preisrechner"}),".",e.jsx("br",{}),e.jsx("br",{}),"Mit freundlichen Grüßen",e.jsx("br",{}),"Ihr Windows Azure-Team"]}),e.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"50",children:" "}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#326fb5",lineHeight:"1px",borderLeft:"1px solid #000000",borderTop:"1px solid #898989"},width:"35",children:" "}),e.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},align:"left",valign:"top",width:"530",children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"Connect"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"530",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"176",children:[e.jsx("a",{href:"",title:"Verwaltungsportal",style:{color:"#f0f6fa",textDecoration:"none"},children:"Verwaltungsportal"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Info zu Mein Konto",style:{color:"#f0f6fa",textDecoration:"none"},children:"Info zu Mein Konto"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Newsletter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Newsletter"})]}),e.jsx("td",{style:{background:"#398bc9"},align:"left",valign:"top",width:"1"}),e.jsx("td",{style:{background:"#326fb5"},align:"left",valign:"top",width:"30"}),e.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"156",children:[e.jsx("a",{href:"",title:"Windows Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Windows Azure Friday"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Stackoverflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow"})]}),e.jsx("td",{style:{background:"#398bc9"},align:"left",valign:"top",width:"1"}),e.jsx("td",{style:{background:"#326fb5"},align:"left",valign:"top",width:"30"}),e.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"146",children:[e.jsx("a",{href:"",title:"Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"Blog"})]})]})})})]}),e.jsx("td",{style:{background:"#326fb5",lineHeight:"1px",borderRight:"1px solid #000000",borderTop:"1px solid #898989"},width:"25",children:" "})]})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderLeft:"1px solid #000000",borderTop:"1px solid #898989"},width:"35",children:" "}),e.jsxs("td",{style:{background:"#000000",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},align:"left",valign:"top",width:"513",children:["Diese Nachricht von Microsoft stellt einen wichtigen Teil eines Programms, Diensts oder Produkts dar, das bzw. den Sie oder Ihr Unternehmen erworben haben bzw. an dem Sie oder Ihr Unternehmen teilnehmen. Microsoft respektiert Ihre Privatsphäre. Lesen Sie unsere"," ",e.jsx("a",{href:"",title:"Datenschutzbestimmungen",style:{color:"#3da5dd",textDecoration:"underline"},children:"Datenschutzbestimmungen"}),"."]}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderRight:"1px solid #000000",borderTop:"1px solid #898989"},width:"50",children:" "})]})})}),e.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderTop:"solid 2px #898989"},width:"35",children:" "}),e.jsx("td",{style:{background:"#000000",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"393",children:"One Microsoft Way, Redmond, WA 98052 USA"}),e.jsx("td",{style:{background:"#000000",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"20",children:" "}),e.jsx("td",{style:{background:"#000000",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"100",children:e.jsx("img",{src:W1,height:"21",align:"left",border:"0",width:"100"})}),e.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderTop:"solid 2px #898989"},width:"50",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},align:"left",valign:"top",width:"600",children:" "})})]})})]}),e.jsx("td",{style:{backgroundColor:"none"},align:"left",valign:"top",width:"50%",children:" "})]})})})}const V1="/assets/azure2014-nurture_02-1db9dbc1.png",X1="/assets/azure2014-nurture_04-b709b470.png",K1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZEQzREMEMyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZEQzREMEQyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkRDNEQwQTJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkRDNEQwQjJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq/tAFkAAAE5SURBVHjaxFaBEYMgDIxdoHaDjsAIdgNH6AhuYjdwBEeoG9gNHAE3oIEGjyIV0Cp/l7M0CSEhCQHwQAiRI1VILRIXc3DiSZkc1oIMNSIeTbRhVCgtb3rygDlkGfF6y+sy1FhtKA5IRcRBC9LRqGOMNRuuo/EapTBq3GEj5B7GfqUrQfhWzxY85V+JZDAG+DOMO1WOZGSZE/+WZVnnCxV+rsZfD9QZlxIJP09aXoBSWqV+4ImZo2SuHh1dMhVQl/gs4pqCXXdsQV471YJxWraiEwUZpagoGXmHQl0mwhKSYfKVxxnJjMxIefByGBXTj2kx7xprwF3dSTNPsA9+Nu8kIT00aWRIdaHHvAo5FTPzeWbt3a0t/N56wlho4R/f2o5u3mmep8Mf4CQjRpIhKsmYmGQQ3nPUfwswACAKzdYI3hSjAAAAAElFTkSuQmCC",q1="/assets/azure-nurturelist-monitor-2014-4eeab891.png",_1="/assets/azure-nurturelist-globe-2014-aec6386d.png",$1="/assets/azure-nurturelist-mobile-2014-b65492f4.png",ey="/assets/azure-nurturelist-calender-2014-0a42dbed.png",ty="/assets/azure-nurturelist-hexplay-2014-420eea26.png";function iy(){return e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"600px"},children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),e.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{width:"600",align:"right",style:{backgroundColor:"none",color:"#3f4042",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",fontWeight:"bold",padding:"24px 0 3px",borderBottom:"1px solid #000000"},children:["この電子メールが正しく表示されない場合は、"," ",e.jsx("a",{href:"",title:"Web ページとして表示してください",alias:"Preheader: View as a webpage",style:{color:"#3da5dd"},children:"Web ページとして表示してください"}),"。"]})})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",display:"block"},children:e.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),e.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:e.jsx("img",{src:fp,width:"74",height:"30",border:"0",align:"left"})}),e.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"598",align:"right",style:{background:"#f5f5f5",lineHeight:"1px",display:"block"},children:e.jsx("img",{src:V1,width:"598",height:"70",border:"0"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"302",align:"left",valign:"top",style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",fontWeight:"100",lineHeight:"22px",paddingBottom:"24px"},children:[e.jsx("br",{}),e.jsxs("span",{style:{fontSize:"30px",lineHeight:"32px"},children:["Azure の評価版を",e.jsx("br",{}),"お選びいただき",e.jsx("br",{}),"ありがとうございま‍す‍。"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:"柔軟性の高い Web アプリケーションおよびサイトの構築、アプリケーションまたはデータベースのクラウドへの移行、モバイル アプリケーション用のクラウド バック エンドの構築、ビデオのエンコードおよびストリーミングなど、お客様がどのようなことに関心を持っているかにかかわらず、クラウドには多くの活用方法があります。"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"296",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"296",align:"left",style:{padding:"10px 0 20px"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"15",bgcolor:"#81bc00",children:" "}),e.jsx("td",{align:"left",valign:"middle",bgcolor:"#81bc00",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"17px",padding:"7px 0"},children:e.jsx("a",{href:"",title:"活用方法を見つける",alias:"CTA: Check out ways to put the cloud to work for you!: ja-JP",style:{color:"#ffffff",textDecoration:"none"},children:"活用方法を見つける"})}),e.jsx("td",{width:"10",bgcolor:"#81bc00",children:" "}),e.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#81bc00",style:{padding:"7px 0"},children:e.jsx("a",{href:"",title:"活用方法を見つける",alias:"CTA: Check out ways to put the cloud to work for you!: ja-JP",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:K1,width:"28",height:"28",border:"0"})})}),e.jsx("td",{width:"10",bgcolor:"#81bc00",children:" "})]})})})})})})})]}),e.jsx("td",{width:"90",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"171",align:"right",valign:"top",style:{background:"#ffffff",display:"block"},children:e.jsx("img",{src:X1,width:"171",height:"260",border:"0",alt:"Azure"})}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsxs("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:[e.jsx("span",{style:{fontSize:"17px",fontWeight:"100"},children:"私たちが使用開始をお手伝いいたします。以下の関心があるリンクをクリックしてください。"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:e.jsx("a",{href:"",title:"仮想マシン",alias:"Body: Virtual Machines Image",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:q1,width:"40",height:"40",border:"0"})})}),e.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[e.jsx("strong",{children:"仮想マシン"}),e.jsx("br",{}),e.jsx("a",{href:"",title:"仮想マシン",alias:"Body: Virtual Machines: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"仮想マシン"}),"の作成と実行"]})]}),e.jsxs("tr",{children:[e.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:e.jsx("a",{href:"",title:"Web サイト",alias:"Body: Websites Image",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:_1,width:"40",height:"40",border:"0"})})}),e.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[e.jsx("strong",{children:"Web サイト"}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Web サイト",alias:"Body: Web Sites: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"Web サイト"}),"の構築とデプロイ"]})]}),e.jsxs("tr",{children:[e.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:e.jsx("a",{href:"",title:"モバイル",alias:"Body: video image",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:$1,width:"40",height:"40",border:"0"})})}),e.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[e.jsx("strong",{children:"モバイル"}),e.jsx("br",{}),"Android iOS または Phone 8 用の",e.jsx("a",{href:"",title:"モバイル",alias:"Body: Mobile: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"モバイル"})," ","バック エンドのサインアップ"]})]}),e.jsxs("tr",{children:[e.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:e.jsx("a",{href:"",title:"保存、バックアップ、および回復",alias:"Body: Store, back up, and recover image",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:ey,width:"40",height:"40",border:"0"})})}),e.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[e.jsx("strong",{children:"保存とバックアップ"}),e.jsx("br",{}),"データの",e.jsx("a",{href:"",title:"保存、バックアップ、および回復",alias:"Body: Store, backup and recover: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"保存、バックアップ、および回復"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 10px 10px"},children:e.jsx("a",{href:"",title:"ビデオ",alias:"Body: video image",style:{color:"#3da5dd",textDecoration:"none"},children:e.jsx("img",{src:ty,width:"40",height:"40",border:"0"})})}),e.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 10px 10"},children:[e.jsx("strong",{children:"メディア"}),e.jsx("br",{}),e.jsx("a",{href:"",title:"ビデオ",alias:"Body: video: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ビデオ"}),"のエンコードおよび共有"]})]})]})}),e.jsx("br",{}),"すべての"," ",e.jsx("a",{href:"",title:"Azure ソリューション",alias:"Body: Azure solutions: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure ソリューション"}),"もご覧ください。",e.jsx("br",{}),e.jsx("br",{}),"何卒、よろしくお願いいたします。",e.jsx("br",{}),e.jsx("br",{}),"Azure チーム",e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[e.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"リンク"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[e.jsx("a",{href:"",title:"管理ポータル",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"管理ポータル"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"アカウント情報",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"アカウント情報"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"ニュースレター (英語)",alias:"Quick Links: Newsletter",style:{color:"#f0f6fa",textDecoration:"none"},children:"ニュースレター (英語)"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[e.jsx("a",{href:"",title:"Azure Friday (英語)",alias:"Quick Links: Windows Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Channel 9 (英語)",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9 (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Stackoverflow (英語)",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow (英語)"})]}),e.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),e.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),e.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[e.jsx("a",{href:"",title:"Twitter (英語)",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Facebook (英語)",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook (英語)"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"ブログ (英語)",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"ブログ (英語)"})]})]})})})]}),e.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#505050",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"15px",padding:"20px 0",borderTop:"1px solid #898989"},children:["弊社はお客様のプライバシーを尊重しています。詳細は、オンライン"," ",e.jsx("a",{href:"",title:"プライバシーに関する声明",alias:"Footer: Privacy Statement: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"プライバシーに関する声明"}),"を参照してください。",e.jsx("br",{}),e.jsx("br",{}),"マイクロソフトから今後プロモーショナル メールを受け取りたくない場合は、"," ",e.jsx("a",{href:"",title:"ここ",alias:"Footer: Unsubscribe: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ここ"}),"をクリックしてください。",e.jsx("br",{}),e.jsx("br",{}),"これらの設定により、購読中のニュース レターや特定のマイクロソフト製品の一部となっているサービス コミュニケーションなどに影響が及ぶことはありません。 弊社からの他の情報配信に関する詳細設定を行うには、"," ",e.jsx("a",{href:"",title:"ここ",alias:"Footer: Contact Preferences: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ここ"}),"をクリックしてください。"]}),e.jsx("td",{width:"50",style:{background:"#505050",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),e.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"433",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:e.jsx("span",{style:{fontSize:"10"},children:"日本マイクロソフト株式会社 〒108-0075 東京都港区港南 2-16-3 品川グランドセントラルタワー"})}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:e.jsx("img",{src:hp,width:"75",height:"16",border:"0",align:"left"})}),e.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),e.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),e.jsx("tr",{children:e.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),e.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function ny(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Service Alerts",url:"/Microsoft/Azure/Alerts"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(io,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Azure Service Alerts • Global",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"Azure Service Alerts are email notifications that keep global Azure subscribers informed on the latest Azure features, updates, outages, and migrations. These service communications are delivered globally and are localized into 44 languages."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsxs(e.Fragment,{children:[e.jsx(G1,{}),e.jsx("br",{}),e.jsx(J1,{}),e.jsx("br",{}),e.jsx(iy,{})]})})]})]})}const ry="/assets/33539_mspartnerlogo-466_2015-04-4e869bd8.png",ly="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAQCAYAAABeB4LeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RkFFNEM0NUU5RjkxMUU0ODdFM0MyNjEyQjBCNjY3OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RkFFNEM0NkU5RjkxMUU0ODdFM0MyNjEyQjBCNjY3OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlGQUU0QzQzRTlGOTExRTQ4N0UzQzI2MTJCMEI2Njc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjlGQUU0QzQ0RTlGOTExRTQ4N0UzQzI2MTJCMEI2Njc4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qQMU0AAABJRJREFUeNrkl3uIVFUcx885M3tntm11x9VMFzLTbCui/MNSawut6MFgooSQvTCtyB5gEAWhRggGEVb2oMIyJVqoJCwqFJUtNF8pWFGrZpGtj1Xcx0w7z3v7/sbv3c7cvdNK7B+2/eCz5845Z/ae8z2/xxndNfOib5VS14Csssy4OladMZtXzf39432NmZWJTpVDt2dNiYAomAHWaweDeUelN81XbqpeaedPNdhMNhvncyxkXMYcPjsV/keVSGjOUapnzyRVbB+jTN0xKKcHnVjmDOa4/Yx74lXFE47K7b9a6Xi63P/+e4ZjVy+A5f9GrH5Nw//yh69QxY7ReE6NQM/X6G4DT4RMbwTfgUPgAjCB4b3mLBDqXPALeAo8YkWbM2BildxLaaUjBfGzanycDEaBRSFTHwMTwYVgHOjwNT8LxFoCRoLHwRAwG+TBHQMnFvxCmyL+9IlY8Zy7An13Ws+XgOPgPPBAYN5NYAHHFDchJz8UXG/lUOmfD24JWZkcyEIWMNtG8H23B/rHs/2Z7TTm9bpSgq/NdlTOVBmj827BdOvw7G9VxZJfmPLCIVX2KnrXB+x/mgvdAG4GB7h5EewVhu0U8CVPVuw5MBrs7n2XUueD4eBRsNRai2zmRob5ksBYE/gGvAEeDnwnAd4BM9n3VWCPb4Fnom01De8ybE4Grg5DYpHI1likZ89Ir7AaK0+HXB1Ew33y0JWvUilUwOjf4ztBK7iXm/Vz2E/gE4pVpLBiObZb6DUixC6QBLU8vgbQQu9cBh7ie0SgeWAF+Ih5UYT6FYwF9/HwFlCovfTcOeA1cISp4XJqIX1v8gDFu9aCt6ONyS8Mw7EsJPNelcl4CbMl0WTmpbabrFca9wLFQdAx9G7Ew/tWzFDMRRTrfvAiPUK8qz3EQw+D6RRqKRcstt0KNxH0Bn72C8JtoBu8TAGSDMmjDEN593uc+yTbJJ3jdQo9i7npc4q1DnwvjkCxmuWQot01DaL6lRVy0TgTcWI403v+IQw/E2+JR/Eu7ZXUZKYexQWJMA8yDMRW83PQsqyMYvtD73PlItextSPiCNvjLB5yABI5L3E9vkP8YX3nKNsEPb1isTFKclYoiLoM9u4W3H7qVNFP8gHzE/CrYAy4FXzKvvqQ/1PNsPO9JaSMlL3lENvrrL5r2Z4C8hNiGJhLIZ5lCPvFw7cpbA8w3FWFgxq4q0PRjSjXM3ae91sJvwyfV5YVhb6VaxfvOXeDH8EOcJAnnQuc+GK2LTwE2exlfEcrE/eHVjU+aIWhFJj1rHoTmUP9ULfX7nu4hPGqgRELW9AIwbwbVUZ7aS5iN0d7mCDlorqRfa10/3aGXxtFEruUuUPaScwdHhP01kD4NzGkZtB7n+c9zs+Bc+ily7jhTjCViT/Jq8Jy3qfEfuD3jlmH28zKPFmrtaf2hucseJ5bs61l2NTmpvi2Fb3R3NdmYeq6TMZRizctVB2ZWjU0lipdUv9vvw31Gc1BgMTrc2r6xTtUd7ZGDUKdesXyb6WdAfxEmeYdpyswngKFUj7Sp9PptLE71YThv50WbBDaXwIMAK0MSK2bTuREAAAAAElFTkSuQmCC",oy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUE3MTVENUU3OUQxMUU0QkYzNEI2MEEzODVEMUFCQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUE3MTVENkU3OUQxMUU0QkYzNEI2MEEzODVEMUFCQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1QTcxNUQzRTc5RDExRTRCRjM0QjYwQTM4NUQxQUJBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1QTcxNUQ0RTc5RDExRTRCRjM0QjYwQTM4NUQxQUJBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JNLSKQAAAU9JREFUeNpi/P//PwO5gImBAkCRZhYi1f3++//3XwZWZiBiJEHzpx//ph/9uuvmj3ff/glwMpU783pocBCl+fvv/3HL3p+89QbCfcHAcPEpB7GaN175DtfJy8cvxsOsLMJCrLPvvP4DYRgrC88ME+RmYwQiYjWL8DBDGBbybNL8zESFNjDh3H/35+8/hqcf/0JEHr7/e+fNH2AQyAsy83FAI5gRawoDhrD9lNdffv7/+vPP/19fQepYOHi42IGa+wMEQvQ58dn85x/DizcfUNzy58fnTz+ADAFOIQLOZmNmVJcRev/935uv//79+ASymY1bhIeVk5XRSIYVrgy7s4FiwCTBzsI44eDnqfueA0WCTMXbvfn+/QfazETAZkZGBmFukCIhLqhSoJ3wcCI2YwBDCML4+vMfybmKiYkRjUH3/Pzv33+SNcP1YHU2QIABAJf1gVt3XxDVAAAAAElFTkSuQmCC",sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MkVGNkNDNkU3OUQxMUU0QjA3MEY3OThBNDFGNzE5OCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MkVGNkNDN0U3OUQxMUU0QjA3MEY3OThBNDFGNzE5OCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYyRUY2Q0M0RTc5RDExRTRCMDcwRjc5OEE0MUY3MTk4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYyRUY2Q0M1RTc5RDExRTRCMDcwRjc5OEE0MUY3MTk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pHAsIgAAAUVJREFUeNpi/P//PwO5gImBAjBENbMgc37//c/KzIim4uDdnwfv/NSRZPXW4nj37Z8AJxMnK1QNI3Jon3z4q3Pf5+khAuK8zBCRuSe+1mx8xvD/H5CtJSf04fv/FXFCqqIs2J19/OYbvzlvt177AXQFkLvq4neITiC49ugdHwejEBcTdmcDjVSVFrr99F3K4o96CoIW8mxPP/xFVjApSECYG4fm55/+3n72AcT6/+/S/beX7qM4ipGVk5+DCWdoS/Mz22kI4QpbA1kucV7cmoEhWenCh0tzpBEXOwsjvng2kGbNdJTk4uFHEzdXE4kw5MSXSB69/3v43k9XdQ5ZAWZkcXUZoanBAphJAD3Aard9uvnkHVxEQkQgwpAr3Yob6CNMj6AkEiDz4fs/997+/fnn/7//DMBYVRNlgScYAppHSJYECDAA+nBynUQ3eNwAAAAASUVORK5CYII=",ay="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MUMxN0YyNEU3OUQxMUU0ODVGNEIyMTJEMTBBRTVCQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3MUMxN0YyNUU3OUQxMUU0ODVGNEIyMTJEMTBBRTVCQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxQzE3RjIyRTc5RDExRTQ4NUY0QjIxMkQxMEFFNUJBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxQzE3RjIzRTc5RDExRTQ4NUY0QjIxMkQxMEFFNUJBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GR3L2QAAAZlJREFUeNpi/P//PwO5gImBAjBwmlmQOd9+/V976fubr//YmVEUff/9/+uv/2K8zKH6nMLcTNg1Lzj1tXnLU6yWMDKx/P/3595biS5ffuzOfvj+L1Z9/eGyh4rkFSUFLz77jdPP/JxMaNoYmdkY/v9jYWJUFmYBktxsjDj9jAzEhAV6/QV42Rnb937OXfEkbxXL/7+/DMzEcdr88fs/Hl5+Zx1RRjbuKcECLmrs5vJsM0MFgJarSfLIiQu++/YPp+Zvv/+rirJ4anKws7JI8kFDXJyXmZGV01uLw0SODZ9moIeA0mZybKzMDOmr3r/+8u/Lz/+56z78//3dXYMDGGH44pmJEaQZaHm5E2/t5lf6bZ+AYQb0aoq9pJ4UK9BT+DT//c8ATAwvP/9NtuD20JTr3f8ZaFu6FY+BNOvffwxvv/7jwhPaotxM/3588p/LrCjMwsfO+PPP/3//GWaf+Pri09/nn/7ef/7e21AMxZvIWfLR+7+TDn+59foPxHuQRPrzL8g7nKyM4jxMObY8upKs2DWPkPwMEGAAf4ijRR/8mdQAAAAASUVORK5CYII=",dy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAAYCAIAAAA6WIu0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjE3MzE1QTU3OUZEMTFFNjg0NzNDRTM3RTY1QjU3NzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjE3MzE1QTY3OUZEMTFFNjg0NzNDRTM3RTY1QjU3NzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTczMTVBMzc5RkQxMUU2ODQ3M0NFMzdFNjVCNTc3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MTczMTVBNDc5RkQxMUU2ODQ3M0NFMzdFNjVCNTc3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlTgcKkAAAVeSURBVHja7Jl/TNR1GMf54cHBwcEFR8IRUCwqB9oit1zKNFyb9mP8k83c2OKPXFut2ebapLb+ya3aai37I+doc2ul/ZFL05YyXWm2yCxlRmIM0OOQ4zy587iDC+r19WGfPrtfYIv65/Ps9t3z/Xyfz/O8n+fz/jyfzyD71aP1WUaMaJJjSmDEcMKI4YQRwwkjhhNGDCeMGE4YMZww8j/Lkn8wZzo2+/GOYXet7fGXPGqw98T1ni+uL1/vbN54GwYH3r4SCc5u2Vnz9Yc+/1Acg9YOd3GZ7dR+P68NqxwPP+WWKXxq217lqswb7o10d/nFA4NB3/RPR64N98bEIByI8xVdj3voPa84X/lk6eAvEdHFOcqZw9fOHQs5XDktWyqW3mVPhzDPniPhdGzqlelt26svfh+68G0IewI1POQkfZU4eQkwEeVQYROHvNatcDSuLZU09cro1UiGp2KhD52PnP0qKDBUvpI+TykmurPcJpBU7oveJygQz58PxUYHYmpwwh/3np85+ekE+Yxeil78xnqNR2fBzSqu3lxW5sk/umcUS3S7I5fSHHgjQAL8WG/Gz3VbKYmHSPCPva94xVgSnorO4hB9eWupCqqce+4pFB2D47tD/T3h7q5RCMFrfXPRvtd9rHE6hOJKx6ZHX7bGSb7dXUEUvKHwyjixxIC8eApZUYQQCpvCwysAVCKqMsogHTyeEEVCHH5/3HNvgRSEOjAuNSF9cS6lULUqdOYe2TX6X5wd7BjQeJpyvX2T+jgjPMmn/4dwQ4tNjU+GZsYGY6QKxN/PTE9FZpoeKc0rtIwhe3mNvabRwVc+WfzwWRXpO23Rbs0zFTzzHbk680Lj8WRIaiWQ4sqc8ur83hNRvLEv2XbO8uwLJycyIER0bBL90a2Vd68sxgP5Nq4tQLn5K2A7Mu6qysMGxeFawhOdEVH0xK8OxAha2+TIUE8BnAGerz9KAec25OkIBQEJRXO6LZs7VxTRZVFC439iNn5lSgdQ02hfdE6w4aCwbAshtf61vjmPfFgP6Jw8d1377Q8+UcRWozHS0J7eWQHoPVu97BLpPVIXGkYsMsNCWm3jkwCbQ1Y0pbCQ2AS8U6LjvLXDBUXglk6meRHq2CS64hm92l4850opCxeWip6fDrwAlkWdt4Dtb3oo+74dY6c+888bF+6CXPbV4nJi4OwNeE1bpvXJnta/cmSSDwWtqPubnqR3/3oX+2nkUhSFEsAquMX14rEXqiAB7GYvqhORSpW4bXQ/SrnptWohh8iy1SVsCz0iC/nsO3VsGtFxTpWtQ7rF9tt3IaJAOFzdcV9hBoSIjo1PTOGA5xDhfOS8//HgDRR+KPTIBdaKxB/YYHUpEmQtvX1RHIb8cQpoK8jRATOeAR6DYEOhB8DdVZsddIvkcMzCTPUkLmHQsedgYNHvmLCB/tnasRT9o5cHIbWshwj3LzJMqBrnJb91zzmDI9NwnIps2ObiDvH5W2OwisVjpTFo6yyjJbKKH7RftlLqLKNDYIB9iXuukcqnbftrYVhKeNLqj++9Ctu+3DWCPdNxBcjLv06mQ4hAIIWNI6CtcwazsC/AyPO7a2Nhq59hxnrIFXghIomTIEtFQ+XK8u6mIRxufLFcNSEFWA6jlPC4eGVlBcjiJqRZ8ZAcDh7jnz0mlw9CYEZS9c3Ft3TNzL7V/5XDaDguKcnBkaCjyAiWrByvco+TWQnT+SSrK8YJIcRA2avNpCzTAVCDKdEmIEyZmoKXED1l6ORXNV2fkgGPfjFKgKdnnQBJTyG5zsmFXSxOGDF/szJiOGHEcMKUwIjhhBHDCSOGE0YMJ4z8y/KXAAMAL4b5Fj9GL5YAAAAASUVORK5CYII=",cy="/assets/33539_hires-09f585bb.jpg",fy="/assets/33539_azurestudent-ba2a7d5d.jpg",hy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAYCAMAAAC1BuGgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODgwNkI3RDJFMkU2MTFFNEI3QjNEOERFRkQ3OEZEM0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODgwNkI3RDNFMkU2MTFFNEI3QjNEOERFRkQ3OEZEM0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ODA2QjdEMEUyRTYxMUU0QjdCM0Q4REVGRDc4RkQzRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4ODA2QjdEMUUyRTYxMUU0QjdCM0Q4REVGRDc4RkQzRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Prc1DxoAAAH7UExURf//4uK14vrp59w8I////+JvS/Tn59xQS9w8Gfr//Pr//d4+AO5xI/r//////v7Qi+JxX/r/+//+29xjl+Cl1+6Ws9w+M9w8MfnQmPzcv91xrt5hWu93KN08AOByrubH7OR1rvjHsv7vzeKlzf7/7Pv+/Pfz/P7//+KBrutyMfXU3/zcw9w8KOyNsv/uuPDU3f/+7/7/+u62wd1/uO5xLPv7/tw8PPbk5uuET/j9/+BQGfHc8eRZHf/33PrDiv7w3/Lg9OWvxOqzsOuKafnp4fKKPP7/9OO65fjz++JxU/T7/+WvyfXw/NxxruFxkd9HDN+g0///5f3Xmfrk1ffDsOBvWu6+wv//8fvUrO5xM/vcvembrPrnyNw+SPbDm/v7/frk1+pcGeFpVt08I/n9/+JxWvWcVd08WfCbYdw8Jf/rt/7Qj/Kgafr//u6zmP/+9O6auvq1Z/77///5z+JhM+V/r99pW+BvX/707O5/bd9yrt4/M98+APq6n+BQJf7Xl/i+gvq1aP//8+VimPngz//+3Pnp5/7ntvagV/WcW9+KmPGbVfGmkfrp2exkHdxSb/v++92FvO/c8+OWm+ir1OpkT/rDldw8HeqBm+GgyPCnrf/60+61peu52OnL7O+FXO5/Ofb8/9xHi/vQse/n+ulejPCQS/309dw8AMpJhfQAAAEgSURBVHjaYlhBbcAwauKoiYPYRGE2JiYmCT99lzgbILMlQ3ZFrKN58CwU0YScmW0xM9iYeucDpZYRMrHfyTo8xEjNXis+SI5L22F2IkeAm2JYD6poa0FKeymX5Jy5QKlugr5mZmQwEVFxNZMX0uWcNk+ojyPAMMpCFll08aTipV78UlySeVOAUunEmBjJGCij484gysuS31CzItbbwyANRbSpYxHQxNyKmKlAqU5iTOQxVo2I9tFT4LQrWbGCo8tZw5I/GSEqWLskq3lhfRWnncBkoFQ2USaKK5vyKWn6ChYC+dNF1FlsFyCLNk6cUMQCcivfcqBUJeHUw87KDSHEQq1AfA5pT39U0cyyJAHW6nKB1Dqw1GieGTVxEJsIEGAA7n9xWjcVwk4AAAAASUVORK5CYII=",py="/assets/33539_win10-dca66ab2.jpg",Ay="/assets/33539_spain-8579a03a.jpg",uy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAYCAIAAABGElUoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENkQ0OThERUU3OUUxMUU0OTM0N0JDOThEMUMzOTFGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENkQ0OThERkU3OUUxMUU0OTM0N0JDOThEMUMzOTFGOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2RDQ5OERDRTc5RTExRTQ5MzQ3QkM5OEQxQzM5MUY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ2RDQ5OERERTc5RTExRTQ5MzQ3QkM5OEQxQzM5MUY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AHqv+QAAA4VJREFUeNrsWF1IlEEUvRM+mD/0a6UEClYSiCJFmJQoZhaxgoayJBomKkSWIUmYQqQGCVGhPViYFBSiROAGJhmFhUn0ohhhaSiUCxmV+fs2nduMn9vyFWJoBXNYlpm7d+7cOffMHdSHOr6RwSJgmaHAMGuYNTDMGmYNswaGWcPsfwyfhSx60SEe3KavoxSbIjOL6Mk90dmKqUzNo4Q0nvY8kycu0syUKMuUR8rpk1u0NshTdRQcJq6UyOhdcKDhfhWMVxHBgSehETLntKgtpW2J8kAOnLGEtwC+jIqHTdTdTiuDZOlVUV+hIyRlwpMG+8T9Rrb8SIkXesVXKQF93eJGlTzfTNOToquNHjVrn7XB2u7rp5Kcy0olppYvIrOgtSydCqpl2FaegseGSplXwXlggO+P7/Wppiept5OmJtjS2ymaazm54X4BspIyxPAbunRMlt+kiBjx1MXHcxaDU/41PhWhKHQLua7L+i61LbPgapRFNWLoNc+xBU6LIlUdJv9A9nfkyp37RdNlMTFmE3+WaOTDWYFW1A9qcBZ72cGsTnK3A4xz/JN1EskstmZZrY58rSNMz+VSYjpLFXj3ioscm2KzLCqeXj5GVfQ0MlaCcQwgjVVBs2cbZ37XbeQIDZVQEMUfpPBILT3Q5x4ArTLZyYcHgsMgNK2soBCVkpwaZy7SCm3iewKXpvMul216gjn1C+BvhMK1AEZHdHxff44ZFIKEF7/PoglgS89pwAo9tgZ2gK5ZJr/C6AjrThUJxDlyoSC5L2vOISGNBehqFMdT0BnYcu2MKN5Lh0p/qqVf4LxOodxWrxePWviioIp//wXDMVyN6FZ8vME+PcUAHwzQ9SA61Nw9RB8G2X/NBosa2hzNN84WEN3ZW3SnRulatxr4W8COETHs4x6gtz1sQUdqGUQfZ2eExUL3kHjexkq31SkSnpnSY0QO3gSFoq1zFa3yJztZ+xDp0jPLGyemQywiIxyPhp4WxuGDAT8m4Hp7osiOEheOokNZ15nXZpX8LjQ8C6pZ19b5PYFnEDGxiyOfouK0UTG4Yw/kzNLLjqKxz+jFNsvR6JGw9SIhGRSpux1GFoRtB/sziAX+F1HdR0saXlNlWe6vG6JiSo097RirJV4OymgNbDf1XKIAC94frxwsZ/wEqK09I88/nyVi1sD8pWCYNcwaGGYNs4ZZA8Psv4DvAgwAF+muNnlamSUAAAAASUVORK5CYII=",gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAYCAMAAAAh4EhSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzU3MEIxNDFFMkU2MTFFNDhERUE5Q0FFQkVBRDYzNTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzU3MEIxNDJFMkU2MTFFNDhERUE5Q0FFQkVBRDYzNTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNTcwQjEzRkUyRTYxMUU0OERFQTlDQUVCRUFENjM1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNTcwQjE0MEUyRTYxMUU0OERFQTlDQUVCRUFENjM1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phi3chgAAALTUExURa1EAF5EAF4AAF5+AOZ+AP+nAOanAP65ACNkAPetAPu5AO+zAHZyAPe5AOetAOaoAK2nAMJkAGBkANm3AItGAP6zAEBWAO+oAIsZAP+2AF5OAOuwAP+tAOenAF5GAABEAK1/APW5AO65AAAzAAAuANm1AGBEAAw5AOeoAOF6AK2DAKx9AP+vAE8JAJ2XAFVyAEA9ACMuAH4mADMNANmCACgAAF5LAPGJAL1WAJ1+AAAiAAAjAAAZAK+NAPO5AAAJAIuNAN6zANC3AK1yADlkAAAgAKhzAJ2IAPutAP+3AP+wAL2vAJ1WABEbAPezANCnALipAK2jADUAAPO2AP6nAFVEAJ0zAGBsANmUAItYALinAMxkAHdLAKJcAMKhAMpkAMKtAAAdAKhOAKKaAOq2ABEAAPOqAGgvAGF+AJ2JANCyAJhIAOKnAGENAPe2AEVpANBpAOqaAK1QAHd2AIt9AHiJAL1gANl6AOacAC8NAHmCAJVyAHYbANCiAH0dABkJAMB2AL1XANmqAL6aAG9tAOmNAABDAPqdAK1XADppAOatALhbABlLAL1cAL2cAMJ/APOdAOunAEFgAP25APCaAEtWACMAAH9GAHaJAP6mACM2ACUAAItMAF51AF5MADVQAKKdAAwqAPqgALltAJJXACxgAHhGAEslAOGdANCqAKijAKKXAMdgAPmnAG0NAE5tALNMALxWAGxzABlWAK+AAEAAAO61AMF1AHCCAHeJAOa5ABE6AG8SAPe4AAASAGBXAG8dAG4dAMyYAFl6ANC1AGFlAAwSAO6NAEAJAEtkAJ2QAKygAKx2ANmzAGl9ANuMAJ2eAEUAANyMAKieAMZ5AJJyAAAqAL2eAHYSAFISANyNAAA9AO+2AJJ/AAwmACVMAIWQABkAAEtXAPGnAPOkAKhtALWXAOafAKJQALijAK1+AL2KANWwABElAOKZAAAAAP+5AAPIpFkAAAIISURBVHjaYvhAJ8AwatGoRaMWUdciQaFtHUfPqzFKuc3LWrQs+YOMCKPZ3ZQPH8rkogQZGRnltIFSwiYxZquRtDAybsqumhwy3V2EkfGy4P6znkklQBaj0IoljMV2uCxikG/wDWR5z6NVoZsRr676gZVJ7OmJfMWZue8P33LeKqawHSh1ybTlzCmQ4idNYC0qls82KgtrHutjEnu1kuH9+jyJuf0+73m2HJyvfRWnjxisjHdwAS2y5W20Mt7JDrSI+YOFtZPmwkhlYRAbJNVqOvU6F0hxNDPUojjz+lUbNj9mElNwZHhbuUACpE5Ap25W5h3cFr1/X8rO8t5ASKldF+ghsEVrrI+E9SxOvQCxCChlkm7/gB0YqssNpYSBWmxCHXRuhK+bwcpkKJfAwNG7+ybYog8T5kybhNuittjEAJb3evy8khIcXCCL9N8dcJly8f37951rwRbp8Rc2P98DlJOMeHHyEDAOGG7787FbvN/nDVTLxs3A4WH0HmyR1+ucIhvcFsl3Gd2/AjRWAGbR+/eP3hS4vmTrvlYLtuj9++rZ7++dBikud4AGgvwu84dLFUFqmRk4uI4HgS2SqXlvfw6nRZx87Jz8frJs/Lwf0qRBAuJsfOwg0Q+iGnvFuT+IgqQ42YKRtbABlUhO5AapZePmBOoCqdPgBaqVHi0ZRi0atYjKACDAAHokBk7amL98AAAAAElFTkSuQmCC",xy=p.table`
  max-width: 700px;
  td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  }
  img {
    border: none;
  }
  img.EvG {
    width: 100%;
    max-width: 216px;
    min-width: 100px;
  }
  img.sectionIMG {
    max-width: 260px !important;
    width: 100%;
  }
  img.topstoryIMG {
    max-width: 640px;
    width: 100%;
  }
  @media (max-width: 699px) {
    *[class*="mobile-hidden"] {
      display: none !important;
    }
    td[class="block"] {
      width: 320px !important;
      display: block !important;
    }
    .mob-320 {
      width: 320px !important;
      display: block !important;
    }
    img.header {
      width: 200px !important;
      height: 54px !important;
    }
    img.header2 {
      width: 205px !important;
      height: 37px !important;
    }
    img.logo {
      width: 60px !important;
      height: 14px !important;
    }
    img.sectionIMG {
      min-width: 130px !important;
      width: 100% !important;
      display: block !important;
    }
    img.topstoryIMG {
      min-width: 320px !important;
      width: 100% !important;
      display: block !important;
    }
  }
`;function my(){return e.jsx(xy,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",className:"_student",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"466",align:"left",valign:"middle",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:e.jsx("a",{href:"",title:"Microsoft Student Partners",alias:"Header Image: Microsoft Student Partners",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:ry,border:"0",alt:"Microsoft Student Partners",className:"header"})})}),e.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsxs("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"54",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:e.jsx("a",{href:"",title:"Facebook",alias:"Header Social: Facebook",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:oy,width:"20",height:"20",border:"0",alt:"Facebook"})})}),e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:e.jsx("a",{href:"",title:"Twitter",alias:"Header Social: Twitter",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:sy,width:"20",height:"20",border:"0",alt:"Twitter"})})}),e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),e.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:e.jsx("a",{href:"",title:"Instagram",alias:"Header Social: Instagram",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:ay,width:"20",height:"20",border:"0",alt:"Instagram"})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"18px",padding:"0 0 6px"},children:"April 2015"})}),e.jsx("tr",{children:e.jsxs("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"11px",padding:"0px 0px 5px 0px"},children:["Having trouble viewing this email?"," ",e.jsx("a",{href:"",title:"View as a webpage",alias:"Preheader: View as a webpage",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"underline"},children:"View as a webpage."})]})})]})})]}),e.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"380",valign:"top",bgcolor:"#ffffff",className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{width:"340",colSpan:"3",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px"},children:e.jsx("img",{src:dy,width:"177",height:"24",border:"0",alt:"A Message From Scott Burmester"})})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "}),e.jsxs("td",{width:"340",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"15px 0px 25px 0px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Welcome to our Worldwide MSP Newsletter"}),e.jsx("br",{}),e.jsx("br",{}),"Hello MSPs! When I was given the honor of becoming the MSP Program Manager, one of my first goals was to facilitate better worldwide connections within our amazing community. We started toward this goal by creating the"," ",e.jsx("a",{href:"",title:"WW MSP Yammer Network",alias:"Body: WW MSP Yammer Network",style:{textDecoration:"underline",color:"#404041"},children:"WW MSP Yammer Network"})," ","and our"," ",e.jsx("a",{href:"",title:"monthly MSP calls",alias:"Body: monthly MSP calls",style:{textDecoration:"underline",color:"#404041"},children:"monthly MSP calls"}),", which allow us to share best practices and gain insight from MSP stakeholders around the globe. We’ll use this newsletter as one more worldwide communication vehicle to share exclusive content, program benefits and offers specifically for our MSPs. We hope you enjoy!"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "})]})]})})}),e.jsx("td",{width:"260",valign:"top",align:"center",className:"block",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"0"},children:e.jsx("img",{src:cy,border:"0",alt:"Welcome to our worldwide MSP newsletter",width:"260",className:"sectionIMG"})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",valign:"middle",align:"center",bgcolor:"#ffffff",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:e.jsx("a",{href:"",title:"Microsoft Azure Offer for Students",alias:"Section Image: Build 2015",style:{textDecoration:"none",color:"#404041"},children:e.jsx("img",{src:fy,border:"0",alt:"Microsoft Azure Offer for Students",className:"topstoryIMG"})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:e.jsx("img",{src:hy,border:"0",alt:"Top Stories"})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",bgcolor:"#ffffff",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"540",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0px 25px 0px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Microsoft Azure Offer for Students"}),e.jsx("br",{}),e.jsx("br",{}),"In March, we launched a new"," ",e.jsx("a",{href:"",title:"Microsoft Azure",alias:"Body: Microsoft Azure",style:{textDecoration:"underline",color:"#404041"},children:"Microsoft Azure"})," ","offer specifically for students. After receiving initial feedback from our student developer community, we adjusted the redemption process of the offer and would now like to have our MSPs test it so we can make it even better in the months to come."," ",e.jsx("a",{href:"",title:"We welcome your feedback",alias:"Body: We welcome your feedback",style:{textDecoration:"underline",color:"#404041"},children:"We welcome your feedback"}),"!"]}),e.jsx("td",{width:"80",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"380",valign:"top",bgcolor:"#ffffff",className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "}),e.jsxs("td",{width:"340",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"15px 0px 25px 0px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Windows 10 Technical Preview"}),e.jsx("br",{}),e.jsx("br",{}),"We’re building Windows 10 in a whole new way. You can help build Windows 10 alongside PC experts, IT pros, and developers from around the world through the Windows Insider Program.",e.jsx("br",{}),e.jsx("br",{}),"This is not only the one place to receive the latest Windows 10 builds, but also a community of developers who are looking to impact future versions of Windows."," ",e.jsx("a",{href:"",title:"Join the program now",alias:"Body: Join the program now",style:{textDecoration:"underline",color:"#404041"},children:"Join the program now"}),"!"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "})]})})})}),e.jsx("td",{width:"260",valign:"top",align:"center",className:"block",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"0"},children:e.jsx("a",{href:"",title:"Windows 10 Technical Preview",alias:"Section Image: Windows 10 Technical Preview",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:py,border:"0",alt:"Windows 10 Technical Preview",width:"260",className:"sectionIMG"})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",valign:"middle",align:"center",bgcolor:"#ffffff",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:e.jsx("a",{href:"",title:"Spain MSP changing perceptions of Microsoft",alias:"Section Image: How do student devs",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:Ay,border:"0",alt:"Spain MSP changing perceptions of Microsoft",className:"topstoryIMG"})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:e.jsx("img",{src:uy,border:"0",alt:"Country Spotlight"})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",bgcolor:"#ffffff",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"560",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Spain MSP Changing Perceptions of Microsoft"}),e.jsx("br",{}),e.jsx("br",{}),"Roya Change Lee carried her spirit and passion as a MSP into her new role as a TE Intern."," ",e.jsx("a",{href:"",title:"Find out how",alias:"Body: Find out how",style:{textDecoration:"underline",color:"#404041"},children:"Find out how"})," ","she revitalized the MSP program in Spain to help change perceptions about Microsoft."]}),e.jsx("td",{width:"60",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"640",colSpan:"2",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:e.jsx("img",{src:gy,border:"0",alt:"Key Dates + Events"})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),e.jsx("td",{width:"320",className:"block",align:"left",valign:"top",bgcolor:"#ffffff",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"280",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Key Dates"}),e.jsx("br",{}),e.jsx("br",{}),"Be sure to mark your calendars with these important dates!",e.jsxs("ul",{children:[e.jsx("li",{style:{paddingBottom:"6px"},children:e.jsx("a",{href:"",title:"Worldwide MSP Call: April 28, 2015",alias:"Body: Worldwide MSP Call: April 28, 2015",style:{textDecoration:"underline",color:"#404041"},children:"Worldwide MSP Call: April 28, 2015"})}),e.jsx("li",{style:{paddingBottom:"6px"},children:e.jsx("a",{href:"",title:"Build Conference Live Stream: April 29 – May 1, 2015",alias:"Body: Build Conference Live Stream: April 29 – May 1, 2015",style:{textDecoration:"underline",color:"#404041"},children:"Build Conference Live Stream: April 29 – May 1, 2015"})})]})]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),e.jsx("td",{width:"320",className:"block",align:"left",valign:"top",bgcolor:"#ffffff",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"280",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Upcoming Events"}),e.jsx("br",{}),e.jsx("br",{}),"Don’t miss out on the latest coding activities!",e.jsxs("ul",{children:[e.jsx("li",{style:{paddingBottom:"6px"},children:e.jsx("a",{href:"",title:"Free Windows 10 Game Jams: May – June 2015. Find an event and register today!",alias:"Body: Free Windows 10 Game Jams: May – June 2015. Find an event and register today!",style:{textDecoration:"underline",color:"#404041"},children:"Free Windows 10 Game Jams: May – June 2015. Find an event and register today!"})}),e.jsx("li",{style:{paddingBottom:"6px"},children:e.jsx("a",{href:"",title:"Build Tours: May – June 2015",alias:"Body: Build Tours: May – June 2015",style:{textDecoration:"underline",color:"#404041"},children:"Build Tours: May – June 2015"})})]})]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),e.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{padding:"0px 0px 20px 0px"},children:" "}),e.jsxs("td",{width:"340",align:"left",style:{fontFamily:"Arial,sans-serif",fontSize:"9px",color:"#4d4d4d",lineHeight:"16px",textAlign:"left",padding:"0px 0px 20px 0px"},children:["Microsoft Corporation",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052 USA"]}),e.jsx("td",{width:"300",align:"right",valign:"bottom",style:{lineHeight:"1px",padding:"0px 0px 20px 0px"},children:e.jsx("img",{src:ly,alt:"Microsoft",width:"75",height:"16",title:"Microsoft",border:"0",style:{border:"none"}})}),e.jsx("td",{width:"30",children:" "})]})})})]})})})})}const yy="/assets/33539_msimaginelogo_2014-12-e26d8a46.png",jy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAaCAYAAACEuGN0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOTUyODgzNTc0MEQxMUU0QkRFQjlBMDgzQzRFRTM3RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOTUyODgzNjc0MEQxMUU0QkRFQjlBMDgzQzRFRTM3RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NTI4ODMzNzQwRDExRTRCREVCOUEwODNDNEVFMzdFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU5NTI4ODM0NzQwRDExRTRCREVCOUEwODNDNEVFMzdFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gDJDIAAABk5JREFUeNrsWnlsFFUY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",wy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAANCAMAAADWkWOpAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk3RTU2QjRGNzk1MTFFMUJFOTY4QTkzMDVFMjkxMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk3RTU2QjVGNzk1MTFFMUJFOTY4QTkzMDVFMjkxMzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTdFNTZCMkY3OTUxMUUxQkU5NjhBOTMwNUUyOTEzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OTdFNTZCM0Y3OTUxMUUxQkU5NjhBOTMwNUUyOTEzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpI80nwAAAJAUExURQAAAOfn5+Tk5AYGBnh4ePv7+/r6+gEBAV1dXSoqKjIyMubm5i4uLsHBwTU1Nbi4uOXl5f39/RISEggICJSUlOrq6kVFRbm5ufz8/Hp6ekpKSkNDQ1lZWTw8PDY2NgoKCgsLCywsLDg4OCEhIUBAQCIiIg8PDwMDAwUFBRgYGI2NjW9vb9/f39PT05WVlcbGxsvLy87Ozp2dnYmJiU1NTePj4+jo6Nvb28jIyPf397+/v7Ozs5+fn8/Pz3Z2doKCgoODg7CwsK6urgICAhMTE8PDw1xcXGFhYT09PbW1tREREfPz8y0tLVJSUiUlJWRkZPX19QcHBy8vL1RUVDc3N/n5+QQEBFdXV09PTw4ODqurq6enpx8fHygoKAkJCfb29g0NDR4eHiAgICcnJ1tbW/j4+MrKynBwcO3t7Xl5eX19fUxMTEJCQqioqN3d3aWlpezs7JycnEZGRvDw8NjY2Ovr676+vrKysrGxscTExKmpqUlJSUhISGZmZsXFxenp6WNjY1NTU1ZWVo+Pj+Li4mVlZX5+fszMzFVVVUdHRxYWFtbW1nNzc/Hx8dfX125ubqGhoR0dHVhYWK2trV9fXxUVFdTU1La2tnt7e8nJyaKioqamptzc3ODg4NnZ2dDQ0AwMDFBQUMLCwn9/f6ysrLe3tyMjI46Ojp6enpGRkWtra4uLixQUFNra2u7u7pKSkvLy8j4+PhcXF5CQkJiYmBwcHDo6OmdnZzQ0NCkpKbS0tNHR0by8vPT09Dk5Of///5US+DMAAADAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AB5m9HMAAAI+SURBVHjarJJFextBEERLFku2LLTMMjMzM1PMzMwQO8zMzMzMzKm/llnny2F98iF96ZrtmbfdNQPyR9YKV8OYNK5unHN6cz3hXXxOGyP/BDIaoW6StOxE5PIKejeti+WJmr7tGR6TcpYVeLBajUD7TUdFoWZdrBg8Jf1hlLMu2WBoo1RwKZOYcUpIxZULOeqx+Ma31XHUeJQ8ipO2ZnXnLoqUXFJ8gpb8UaiydjfjRrKMdTcwTdlDzkdX+UWZM6y+ZK4BQLlb+L7PSKitELphC7NVIk/wdYFIXfbsEfwLGSsqLBH1ZAFyOuFIhzuP2HDyie5+PBA6Ve6LzhdT0Cqu4ffCxFmqYEotKkNKyleEnYmNxsWrMpY4bbKm87GeAVC4wYsbkCpdVLU2XCEs3ii0CvbNEA0zPuL9PPlTHFnCQ9ILarlf2hH24PplvKFBYs2wuWbVn+/t+8lpPBPSIyLNXIfgaS5AJ5Ya6PkRCRQ/z1zDCmXmS1NYUz6DJVYag/tPS6Vc5XnSB9Ij8hwM4a2ifqQkldaLa/6FOn6AnWxdyyodpkUY+0VN/d8Zn8OHbKt1KlvIOZj2UJp6QHSHAM1s0DiZJwY/LPUVArOchSE1c4CtZB+M6QhkolU5qwt3voqsIgda8G00JDLQsaSP7cBRHsDxezNBZXcYi0LJL0OljPWuw8KxXf7LpK510uF+iEz0i3IN3Tb6qcSGRZ8ul63STOenwaC9B5md12tr2rGNtA93i7d2TNkgY/23+CPAAI4fzjohzET3AAAAAElFTkSuQmCC",by="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDOTlCNDVFNTc0MEUxMUU0QUJFREMyM0FCNkY4NDk2QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDOTlCNDVFNjc0MEUxMUU0QUJFREMyM0FCNkY4NDk2QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM5OUI0NUUzNzQwRTExRTRBQkVEQzIzQUI2Rjg0OTZCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM5OUI0NUU0NzQwRTExRTRBQkVEQzIzQUI2Rjg0OTZCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FQTQkAAAAU1JREFUeNrkVruKg0AUPUYJiJvSwj6Qxg+xT2GnsfQvhHyGhW0gf5BSklokRaq0u4KQwgdqENzRXdyXZM2gyy574eroHDnOOfcOwwB4JPmA8SJhyKXCyDEhGY/MEU/wA/H7STRNw3a7xel0wvF4xOFwwHK57MRGr+bflZvNpuqK9Xr9GRtRrWS1WkFV1c45juO+vqMhMQzjw3MQBNjtds3Ydd1h5PI8r5Unz/NKluVbeDq5yrJ8a+ckwfl8Hr66rtdrO2YYBlmW3cT38oRlWViWBVEUURQF5vN5O8fzPGzbbogEQYDjONjv9/d7Mp1Oq75hmiadJ+RbhGHYS8q6Kak9Iavp9TO+79N5UleToiiN5rXptQeLxeJF6yiCruvNPU1TxHE8TJ+QPar14HK5fIen65P30tUlLEnSH9/q/yfJbGSOWd0nT2Ofu54FGAAeYAjayq56GwAAAABJRU5ErkJggg==",vy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEOUE4MjZDNTc0MEUxMUU0ODMyMEI1Mjc3MDdGRTYxNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEOUE4MjZDNjc0MEUxMUU0ODMyMEI1Mjc3MDdGRTYxNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ5QTgyNkMzNzQwRTExRTQ4MzIwQjUyNzcwN0ZFNjE3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ5QTgyNkM0NzQwRTExRTQ4MzIwQjUyNzcwN0ZFNjE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XnFs7AAAAYdJREFUeNrslr2KwkAUhccNiiEGLGyUIDaWopW+ghYWvoDvkCdQsBFSaZXeXkgT30ELEcTGSpC1FCdpEtCzifvDuk7MRMhWHrgpMpP7ZWbO3JkEIeTdiwyJT3bCe4DELB9CvZBjZFgvSCQI+YLgmajValAU5eZdKpX6248GQlqtFgRBYCZvNBpYLBbwZVkWBoMB2u02hsMhZFnmg6TT6WsC0zTvAPl8HqfTCSy5rotyucwHEUURlNLrh/4fN5vNn7ZqtYogTSYTZLNZ/ukajUY3CVarFXq9HsbjMRNwOByC1o4NkSQJs9kMUbTdbgMhbyzPOY5DSqVSJJ+u1+uH7TTInrvdjnsk3W432nR9h2EYXIDj8YhkMvkcxPe+bduhkE6n82jT0tAdX6lUsFwuAwG+40IqAxtSr9eh6zqm0ynm8zkul8tdcn+EqqrylB82pFAooN/vX235W+fzGZvNBpqmoVgs8tY4GlqFc7kcyWQ+T2cPQvb7PfF4r0MrXsi/3FZiv3d9CDAAD3uAkvUj0iIAAAAASUVORK5CYII=",Sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNTQ2NkE2Qzc0MEUxMUU0ODE3RkIwQjU0ODc2RDgzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNTQ2NkE2RDc0MEUxMUU0ODE3RkIwQjU0ODc2RDgzRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1NDY2QTZBNzQwRTExRTQ4MTdGQjBCNTQ4NzZEODNEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1NDY2QTZCNzQwRTExRTQ4MTdGQjBCNTQ4NzZEODNEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0Q4wlwAAAhJJREFUeNrsVs2raVEU/52LRN6AmTIQ5WMgZWJGKSUjZWZgYmSgpAz8ASbKhJkykKkMjGUo5SMpA5GPcDNReueJfJ13zn73qus6vXPvi9H71Tp77dZp//Zav7XPPhSAV9YUeBx+UeyDwYPxwhr9YA76BU/AU0jEfAGTyQSr1Yrj8QiG4ZeNoihIpVLMZjPU63Xe936+iX81dnFmv98zX0UgEGBu1+LWv1sut9tNdvc3dDodZDIZNBoNMnc6ncLLtdvtBNU6Ho+jVqtBo9FgPp/jcDgIF/5yuQgi8Xg8UCgUcLlcZH46nf69uxKJBOx2O4LBIFarFclkvV6jUCiQONckgoUPh8NEyH6/z0wmE+LHYrEP79hstqvgzWaTjOl0WrjwXFtySKVSqFarxC8Wi59E57JgN4FoNPpHYLH46+USiURgW5n4RqPxU0wul4OmaV4tBJFwXZbP54mfy+VgsViIr1KpUKlUIJPJSHw6nX6fhGvNbreLcrkMs9mMXq+H0WhEyuT1ejEcDpHNZqFUKr9P8l4Gv9+PUCiEdrtNiAeDAZLJJAwGw4dPzruWgg4jVwYODoeDCL/dblEqldBqtaDT6bBcLkkWer0earWaZMVBIpEIJxmPx2T0+XzEhGKxWNz/iL6dkx+3gUgkAq1We83qXpufz+erbTYbsOeEZH17afGS/L8Z+TRhnkHy8P+u3wIMAHbIKtdImOzwAAAAAElFTkSuQmCC",ky="/assets/33539_codehunt-341e285a.jpg",Iy="/assets/33539_bootcamp-27b7b235.jpg",zy="/assets/33539_innovate-e6d41d83.jpg",Ey="/assets/33539_evg_81dev_2014-11-9ec27a0a.png",My="/assets/33539_evg_phonedev_2014-11-e8c1b1fb.png",Dy="/assets/33539_evg_azuredev_2014-11-89dd044b.png",Ny=p.table`
  max-width: 700px;

  td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    font-family: "Segoe UI", Helvetica, Arial, sans-serif;
  }
  img {
    border: none;
  }
  img.EvG {
    width: 100%;
    max-width: 216px;
    min-width: 100px;
  }

  @media screen and (max-width: 699px) {
    *[class*="mobile-hidden"] {
      display: none !important;
    }
    td[class="block"] {
      width: 320px !important;
      display: block !important;
    }
    .mob-320 {
      width: 320px !important;
      display: block !important;
    }
    img.header {
      width: 205px !important;
      height: 37px !important;
    }
    img.logo {
      width: 60px !important;
      height: 14px !important;
    }
    img.sectionIMG {
      padding-bottom: 10px;
    }
    img.sectionIMG {
      min-width: 130px !important;
      width: 100% !important;
      display: block !important;
    }
  }
  @media (min-width: 481px) {
    img.sectionIMG {
      max-width: 370px !important;
      width: 100%;
      min-width: 200px;
    }
  }
`;function Uy(){return e.jsx(Ny,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"410",align:"left",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:e.jsx("a",{href:"",title:"Microsoft Imagine",alias:"Header Image: Microsoft Imagine",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:yy,border:"0",alt:"Microsoft Imagine",className:"header"})})}),e.jsx("td",{width:"135",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"115",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:e.jsx("img",{src:jy,border:"0",alt:"Microsoft",className:"logo"})}),e.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"10px 0 25px"},children:" "}),e.jsx("td",{width:"410",align:"left",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"24px",padding:"10px 0 25px"},children:"Dream it. Build it. Live it."}),e.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"0px 0 25px"},children:" "}),e.jsx("td",{width:"230",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"18px",padding:"10px 0 25px"},children:"March 2015"}),e.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"10px 0 25px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",align:"left",style:{color:"#e6e6e6",padding:"15px 0"},children:" "}),e.jsx("td",{width:"25",align:"left",valign:"middle",style:{color:"#000000",padding:"15px 0"},children:e.jsx("a",{href:"",title:"Facebook",alias:"Header Social: Facebook",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:by,width:"25",height:"25",border:"0",alt:"Facebook"})})}),e.jsx("td",{width:"10",align:"left",style:{color:"#e6e6e6",padding:"15px 0"},children:" "}),e.jsx("td",{width:"25",align:"left",valign:"middle",style:{color:"#000000",padding:"15px 0"},children:e.jsx("a",{href:"",title:"Twitter",alias:"Header Social: Twitter",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:vy,width:"25",height:"25",border:"0",alt:"Twitter"})})}),e.jsx("td",{width:"10",align:"left",style:{color:"#e6e6e6",padding:"15px 0"},children:" "}),e.jsx("td",{width:"25",align:"left",valign:"middle",style:{color:"#000000",padding:"15px 0"},children:e.jsx("a",{href:"",title:"Instagram",alias:"Header Social: Instagram",style:{textDecoration:"none",border:"0px",color:"#000001"},children:e.jsx("img",{src:Sy,width:"25",height:"25",border:"0",alt:"Instagram"})})}),e.jsx("td",{width:"20",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsxs("td",{width:"545",align:"right",valign:"middle",style:{color:"#000000",fontSize:"12px",lineHeight:"15px",padding:"15px 0"},children:["Having trouble viewing this email?",e.jsx("br",{}),e.jsx("a",{href:"",title:"View in browser",alias:"Preheader: View in browser",style:{color:"#000000"},children:e.jsx("strong",{children:"View in browser"})})]}),e.jsx("td",{width:"20",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px"},children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3589dc",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#3589dc"},children:" "}),e.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",padding:"10px 0 25px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Want to win $1,000?"}),e.jsx("br",{}),e.jsx("br",{}),"With just two"," ",e.jsx("a",{href:"",title:"Code Hunt contests",alias:"Body: Code Hunt contests",style:{textDecoration:"underline",color:"#fffffe"},children:"Code Hunt contests"})," ","left, you’re almost out of time to test your coding skills. You get a snippet of code, which you have to rewrite to produce a desired output in as few lines of code as possible. Puzzles start easy, but quickly get more difficult."," ",e.jsx("a",{href:"",title:"Sign up to play!",alias:"Body: Sign up to play!",style:{textDecoration:"underline",color:"#fffffe"},children:"Sign up to play!"})]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#3589dc",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),e.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:e.jsx("a",{href:"",title:"Sign up to play!",alias:"Section Image: Code Hunt",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:ky,border:"0",alt:"Want to win $1,000?",className:"sectionIMG"})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-seri",fontSize:"15px",padding:"35px 0"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Imagine Cup World Finals return to Seattle!"}),e.jsx("br",{}),e.jsx("br",{}),"For the second year in a row, the Imagine Cup World Finals will be held in Seattle, July 27 – July 31. In addition to the $50K competition prize, we’ve created customized Boot Camps for each category winner with help from"," ",e.jsx("a",{href:"",title:"Microsoft Ventures",alias:"Body: Microsoft Ventures",style:{textDecoration:"underline",color:"#000001"},children:"Microsoft Ventures"}),","," ",e.jsx("a",{href:"",title:"YouthSpark",alias:"Body: YouthSpark",style:{textDecoration:"underline",color:"#000001"},children:"YouthSpark"})," ","and"," ",e.jsx("a",{href:"",title:"PAX",alias:"Body: PAX",style:{textDecoration:"underline",color:"#000001"},children:"PAX"}),"."," ",e.jsx("a",{href:"",title:"Learn more",alias:"Body: Learn more",style:{textDecoration:"underline",color:"#000001"},children:"Learn more"}),"!"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),e.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"35px 0"},children:e.jsx("a",{href:"",title:"Learn more",alias:"Section Image: Learn more",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:Iy,border:"0",alt:"Imagine Cup World Finals return to Seattle!",className:"sectionIMG"})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#009285"},children:" "}),e.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0"},children:[e.jsxs("span",{style:{fontSize:"22px",lineHeight:"28px"},children:["Free Office 365 for Students"," "]}),e.jsx("br",{}),e.jsx("br",{}),"U.S. students can now get Office 365 ProPlus for free using a new"," ",e.jsx("a",{href:"",title:"self-service sign-up process",alias:"Body: Self-service Sign-up Process",style:{textDecoration:"underline",color:"#fffffe"},children:"self-service sign-up process"}),". The offer gives you access to Word, PowerPoint, Excel, Outlook, OneNote, Access, Publisher and more, plus 1 TB of storage on OneDrive for Business."]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#009285",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0px"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Create cross-platform games with Marmalade!"}),e.jsx("br",{}),e.jsx("br",{}),"Want to build games for Windows 8 and Windows Phone 8 with a fun, high-performance and cross-platform development tool? Then watch"," ",e.jsx("a",{href:"",title:"Creating Your First Marmalade Game",alias:"Body: Creating Your First Marmalade Game",style:{textDecoration:"underline",color:"#000001"},children:"Creating Your First Marmalade Game"}),", on-demand."," ",e.jsx("a",{href:"",title:"Take advantage of this free online training today",alias:"Body: Take advantage of this free online training today",style:{textDecoration:"underline",color:"#000001"},children:"Take advantage of this free online training today"}),"!"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#00c8f5",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#00c8f5"},children:" "}),e.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Learn from the Pros"}),e.jsx("br",{}),e.jsx("br",{}),"Struggling to finish an app? A"," ",e.jsx("a",{href:"",title:"new video series",alias:"Body: new video series",style:{textDecoration:"underline",color:"#000001"},children:"new video series"})," ","shows how developers are using Microsoft technologies along with developer tools like Visual Studio Online to take their apps to the next level. Watch the videos and learn from the pros."," ",e.jsx("a",{href:"",title:"Watch now",alias:"Body: Watch now",style:{textDecoration:"underline",color:"#000001"},children:"Watch now"}),"."]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#00c8f5",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),e.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",padding:"35px 0"},children:[e.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Imagine Cup winners become entrepreneurs"}),e.jsx("br",{}),e.jsx("br",{}),"Team Estimeet, winners in 2014’s Imagine Cup Innovation Category, recounts its time at Microsoft Ventures London Accelerator. See how the team is turning its winning app into a viable business."," ",e.jsx("a",{href:"",title:"Follow their journey on the Student Developer Blog",alias:"Body: Follow their journey on the Student Developer Blog",style:{textDecoration:"underline",color:"#000001"},children:"Follow their journey on the Student Developer Blog"}),"."]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),e.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"35px 0"},children:e.jsx("a",{href:"",title:"Follow their journey on the Student Developer Blog",alias:"Section Image: Follow their journey on the Student Developer Blog",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:e.jsx("img",{src:zy,border:"0",alt:"Imagine Cup winners become entrepreneurs",className:"sectionIMG"})})})]})})}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"234",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"234",align:"center",bgcolor:"#009285",children:e.jsx("a",{href:"",title:"The Windows 8.1 Developer Getting Started Guide",alias:"Evergreen: The Windows 8.1 Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:Ey,border:"0",alt:"Windows 8.1 Developer",className:"EvG"})})})})})})}),e.jsx("td",{width:"18",className:"mobile-hidden",children:" "}),e.jsx("td",{width:"232",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"232",align:"center",bgcolor:"#009285",children:e.jsx("a",{href:"",title:"The Windows Phone Developer Getting Started Guide",alias:"Evergreen: Windows Phone Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:My,border:"0",alt:"Windows Phone Developer",className:"EvG"})})})})})})}),e.jsx("td",{width:"18",className:"mobile-hidden",children:" "}),e.jsx("td",{width:"234",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"234",align:"center",bgcolor:"#009285",children:e.jsx("a",{href:"",title:"The Windows Azure Developer Getting Started Guide",alias:"Evergreen: Windows Azure Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:Dy,border:"0",alt:"Windows Azure Developer",className:"EvG"})})})})})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",className:"mob-320",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",align:"center",valign:"top",children:" "})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",className:"mob-320",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"12",style:{padding:"0px 0px 20px 0px"},children:" "}),e.jsxs("td",{width:"376",align:"left",style:{fontFamily:"Arial,sans-serif",fontSize:"9px",color:"#4d4d4d",lineHeight:"16px",textAlign:"left",padding:"0px 0px 20px 0px"},children:["Microsoft Corporation",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052 USA"]}),e.jsx("td",{width:"300",align:"right",valign:"bottom",style:{lineHeight:"1px",padding:"0px 0px 20px 0px"},children:e.jsx("img",{src:wy,alt:"Microsoft",width:"75",height:"13",title:"Microsoft",border:"0",style:{border:"none"}})}),e.jsx("td",{width:"12",children:" "})]})})})]})})})})}function Ry(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Student",url:"/Microsoft/Student"}];return e.jsxs(e.Fragment,{children:[" ",e.jsx(O,{route:t}),e.jsx(De,{logo:C0,alt:"Microsoft Student"}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Microsoft Student & Imagine Cup Newsletter",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"Microsoft Student and Imagine Cup are services that offer students and educators access to computer programming courses and webinars sponsored by Office 365. Students who are enrolled at qualifying schools also receive access to Microsoft products, scholarships, internships, programs and jobs. The Student and Imagine Cup Newsletters are monthly digital publications that help subscribers stay informed on the latest products, events, and educational activities."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsxs(e.Fragment,{children:[e.jsx(my,{}),e.jsx("br",{}),e.jsx(Uy,{})]})})]})]})}const Ka="/assets/33547_headerlogo150x35_2014-09-3d63508b.png",pp="/assets/splithero_ltr-c29c29dd.jpg",Ap="/assets/getwin10_ltr-2f5bf5db.jpg",_i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZEQzREMEMyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZEQzREMEQyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkRDNEQwQTJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkRDNEQwQjJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq/tAFkAAAE5SURBVHjaxFaBEYMgDIxdoHaDjsAIdgNH6AhuYjdwBEeoG9gNHAE3oIEGjyIV0Cp/l7M0CSEhCQHwQAiRI1VILRIXc3DiSZkc1oIMNSIeTbRhVCgtb3rygDlkGfF6y+sy1FhtKA5IRcRBC9LRqGOMNRuuo/EapTBq3GEj5B7GfqUrQfhWzxY85V+JZDAG+DOMO1WOZGSZE/+WZVnnCxV+rsZfD9QZlxIJP09aXoBSWqV+4ImZo2SuHh1dMhVQl/gs4pqCXXdsQV471YJxWraiEwUZpagoGXmHQl0mwhKSYfKVxxnJjMxIefByGBXTj2kx7xprwF3dSTNPsA9+Nu8kIT00aWRIdaHHvAo5FTPzeWbt3a0t/N56wlho4R/f2o5u3mmep8Mf4CQjRpIhKsmYmGQQ3nPUfwswACAKzdYI3hSjAAAAAElFTkSuQmCC",qa="/assets/33547_footerlogo125x27_2014-09-d8a986b3.png",Ty=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 767px) {
    table {
      max-width: 320px;
    }
    .block {
      display: block;
      width: 100%;
      padding: 5px 0px 5px 0px;
    }
    .mobileAdjust {
      fontsize: 24px !important;
      lineheight: 28px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;function Fy(){return e.jsx(Ty,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:e.jsx("img",{src:Ka,width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),e.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"500",align:"right",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"ltr"},children:"Home | Why Windows | Latest Devices | Windows 10"}),e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"4",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"400",align:"left",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"370",align:"left",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:["Congratulations on reserving Windows 10",e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsx("td",{width:"370",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:"Your free upgrade is coming in August, and now that you’ve reserved it, you won’t miss a minute of Windows 10 helping you do great things."})})})]}),e.jsx("td",{width:"10",children:" "})]})})}),e.jsx("td",{width:"300",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:e.jsx("img",{src:pp,width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:["You’ll get a notification when your upgrade is ready. Windows will automatically take care of the download in advance. That way you can install and start using Windows 10 immediately – or schedule a time that’s convenient for you. If you have any more questions, check out the upgrade FAQ.",e.jsx("br",{}),e.jsx("br",{}),"Read the FAQ   ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:"What’s in the “Get Windows 10” app?"}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:e.jsx("img",{src:Ap,width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsx("td",{width:"660",align:"left",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"ltr"},children:"You’ve just reserved your free upgrade using the “Get Windows 10 app”. You can also use the app to confirm the reservation, check to see if your device is compatible with Windows 10, and un-reserve if you wish to cancel your reservation prior to your Windows 10 upgrade."}),e.jsx("td",{width:"20",children:" "})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"ltr"},children:[e.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 is full of great features"}),e.jsx("br",{}),e.jsx("br",{}),"In addition to features you many have heard about such as Cortana and our new web browser, Windows 10 contains lots of other exciting tools to help you do great things.",e.jsx("br",{}),e.jsx("br",{}),"Learn more   ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"ltr"},children:[e.jsxs("em",{children:["Windows Offer Details",e.jsx("br",{}),"Windows 10 is a free upgrade, for a limited time, for qualified Windows 7 and Windows 8.1 devices (including devices you already own). It is our intent that most of these devices will qualify, but some hardware/software requirements apply and feature availability may vary by device. The availability of Windows 10 upgrade for Windows Phone 8.1 devices may vary by OEM, mobile operator or carrier. Devices must be connected to the internet and have Windows Update enabled. ISP fees may apply. Windows 7 SP1 and Windows 8.1 Update required. Some editions are excluded: Windows 7 Enterprise, Windows 8/8.1 Enterprise, and Windows RT/RT 8.1. Active Software Assurance customers in volume licensing have the benefit to upgrade to Windows 10 enterprise offerings outside of this offer. To check for compatibility and other important installation information, visit your device manufacturer’s website and the www.windows.com/windows10specs."]}),e.jsx("br",{}),e.jsx("br",{}),"Microsoft respects your privacy. Please read our online Privacy Statement."]}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),e.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052 USA"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),e.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:e.jsx("img",{src:qa,width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}const Py="/assets/splithero_rtl-d92ae0b8.jpg",Cy="/assets/getwin10_rtl-5cf6f1aa.jpg",Hy=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  .dsk-hidden {
    display: none;
  }
  .mbl-hidden {
    display: inline-block;
  }
  @media only screen and (max-width: 767px) {
    table {
      max-width: 320px;
    }
    .mbl-hidden {
      display: none;
      visibility: none;
    }
    .dsk-hidden {
      display: block;
    }
    .block {
      display: block;
      width: 100%;
      padding: 5px 0px 5px 0px;
    }
    .mobileAdjust {
      font-size: 24px !important;
      line-height: 28px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;function Gy(){return e.jsx(Hy,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"500",align:"left",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"rtl"},children:"בית | מדוע Windows | המכשירים העדכניים ביותר | Windows 10"}),e.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:e.jsx("img",{src:Ka,width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"2",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"300",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"rtl"},class:"block",children:e.jsx("img",{src:Py,width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})}),e.jsx("td",{width:"400",align:"right",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"rtl"},class:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"370",align:"right",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"rtl"},children:["השדרוג החינמי שלך יגיע באוגוסט, וכעת, ולאחר ששריינת אותו, לא תחמיץ אף דקה מחוויית Windows 10, שתסייע לך לבצע דברים נהדרים.",e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsx("td",{width:"370",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"rtl"},children:"לאחר שהוא יהיה זמין ב-29 ביולי, Windows 10 יורד למכשיר שלך. תקבל הודעה כשהיא תהיה מוכנה להתקנה — תוכל להתקין אותה מיד או לבחור מועד נוח יותר עבורך."})})})]}),e.jsx("td",{width:"10",children:" "})]})})})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"rtl"},children:["היות ושריינת לעצמך שדרוג, Windows תתכונן להורדה באופן אוטומטי. לאחר מכן תקבל הודעה כשהשדרוג יהיה מוכן להתקנה. כך תוכל להתקין ולהתחיל להשתמש מיד ב- Windows 10 - או שתוכל לתזמן מועד התקנה נוח יותר עבורך. לשאלות נוספות, קרא את השאלות הנפוצות בנושא השדרוג.",e.jsx("br",{}),e.jsx("br",{}),"להתקין ולהתחיל להשתמש ב- Windows 10 ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"rtl"},children:"מהי אפליקציית Get Windows 10?"}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:e.jsx("img",{src:Cy,width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsx("td",{width:"660",align:"right",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"rtl"},children:'זה עתה שריינת עבורך שדרוג חינמי באמצעות שימוש באפליקציית "קבל את Windows 10". באפשרותך להשתמש באפליקציה גם כדי לוודא את הזמנתך, לבדוק אם המכשיר שלך תואם ל- Windows 10 ולבטל את הזמנתך טרם השדרוג ל- Windows 10.'}),e.jsx("td",{width:"20",children:" "})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"rtl"},children:[e.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 מלאה בתכונות נהדרות"}),e.jsx("br",{}),e.jsx("br",{}),"בנוסף לתכונות שבוודאי שמעת עליהן, כגון Cortana* ודפדפן האינטרנט החדש שלנו, Microsoft Edge, Windows 10 מכילה כלים מלהיבים רבים נוספים שיסייעו לך לבצע דברים נהדרים.",e.jsx("br",{}),e.jsx("br",{}),"למידע נוסף   ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"rtl"},children:[e.jsxs("em",{children:["פרטי מבצע Windows",e.jsx("br",{}),"כן, בחינם! מבצע שדרוג זה הוא עבור גרסה מלאה של Windows 10, לא גירסת ניסיון. נדרשת הורדה של 3GB; חלים תעריפי נתונים רגילים. כדי לנצל מבצע חינמי זה, עליך לשדרג ל-Windows 10 תוך שנת זמינות אחת. לאחר השדרוג, תקבל את Windows 10 ללא תשלום במכשיר זה.",e.jsx("br",{}),e.jsx("br",{}),"עורכי הדין שלנו הכריחו אותנו לומר זאת:",e.jsx("br",{}),"מבצע שדרוג Windows 10 זמין עבור מכשירי Windows 7- Windows 8.1 זכאים, כולל מכשירים הנמצאים כבר ברשותך. דרישות חומרה/תוכנה מסוימות חלות וזמינות התכונות עשויה להשתנות בהתאם למכשיר ולשוק. זמינות השדרוג ל- Windows 10 עבור מכשירי Windows Phone 8.1 עשויה להשתנות בהתאם ליצרן (OEM), למפעיל, או לספק הסלולאר. המכשירים חייבים להיות מחוברים לאינטרנט - Windows Update צריך להיות זמין. נדרשים Windows 7 SP1 - Windows 8.1 Update. מהדורות מסוימות אינן נכללות: Windows 7 Enterprise, Windows 8/8.1 Enterprise - Windows RT/RT 8.1. לקוחות Software Assurance פעילים ברישוי רב משתמשים זכאים לשדרוג ל- Windows 10 במסגרת מבצעים לארגונים, מלבד מבצע זה. כדי לבדוק את התאימות ומידע חשוב אחר אודות ההתקנה, בקר באתר האינטרנט של יצרן המכשיר ובדף המפרט של Windows 10. ייתכן שעם הזמן יחולו דרישות נוספות עבור עדכונים. האבטחה והתכונות מתעדכנות באופן אוטומטי ותכונה זו זמינה תמיד.",e.jsx("br",{}),e.jsx("br",{}),"*לא זמין בכל השווקים."]}),e.jsx("br",{}),e.jsx("br",{}),"חברת Microsoft מכבדת את פרטיותך.",e.jsx("br",{}),"למידע נוסף, קרא את הצהרת הפרטיות המקוונת שלנו."]}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),e.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052 USA"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),e.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:e.jsx("img",{src:qa,width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}const By=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 767px) {
    table {
      max-width: 320px;
    }
    .block {
      display: block;
      width: 100%;
      padding: 5px 0px 5px 0px;
    }
    .mobileAdjust {
      fontsize: 24px !important;
      lineheight: 28px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;function Zy(){return e.jsx(By,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:e.jsx("img",{src:Ka,width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),e.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),e.jsx("td",{width:"500",align:"right",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"ltr"},children:"หน้าแรก | ทำไมต้องใช้ Windows | อุปกรณ์ล่าสุด | Windows 10"}),e.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"4",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"400",align:"left",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"370",align:"left",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:["ยินดีด้วย คุณได้ทำการจอง Windows 10 แล้ว",e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tr",{children:e.jsx("td",{width:"370",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:"การอัพเกรดฟรีของคุณจะใช้ได้ตั้งแต่วันที่ 29 กรกฎาคม และตอนนี้เมื่อคุณได้จองการอัพเกรดแล้ว คุณจะไม่พลาดการทำงานอันยอดเยี่ยมของ Windows 10 แม้แต่นาทีเดียว"})})})]}),e.jsx("td",{width:"10",children:" "})]})})}),e.jsx("td",{width:"300",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:e.jsx("img",{src:pp,width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:["คุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมใช้งาน Windows จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ ซึ่งจะทำให้คุณสามารถติดตั้งและเริ่มใช้งาน Windows 10 ได้ทันที หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด",e.jsx("br",{}),e.jsx("br",{}),"อ่านคำถามที่พบบ่อย   ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:"แอพ ติดตั้ง Windows 10 ใช้ทำอะไรได้บ้าง"}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:e.jsx("img",{src:Ap,width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"left",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"ltr"},children:["คุณได้จองการอัพเกรดฟรีโดยใช้ “แอพติดตั้ง Windows 10” เรียบร้อยแล้ว นอกจากนี้คุณยังสามารถใช้แอพเพื่อยืนยันการจอง และตรวจสอบเพื่อดูว่าอุปกรณ์ของคุณสามารถใช้งานกับ Windows 10 ได้ และยกเลิกการจองหากคุณต้องการยกเลิกการจองก่อนทำการอัพเกรดเป็น Windows 10",e.jsx("br",{}),e.jsx("br",{}),"เนื่องจากคุณได้จองการอัพเกรดแล้ว Windows จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ จากนั้นคุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมติดตั้ง ซึ่งจะทำให้คุณสามารถเริ่มใช้งาน Windows 10 ได้ทันที หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด"]}),e.jsx("td",{width:"20",children:" "})]})]}),e.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"20",children:" "}),e.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"ltr"},children:[e.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 มีคุณสมบัติอันยอดเยี่ยมมากมาย"}),e.jsx("br",{}),e.jsx("br",{}),"นอกจากคุณสมบัติอย่าง Cortana* และ Microsoft Edge ซึ่งเป็นเบราว์เซอร์รุ่นใหม่ของเราที่คุณอาจเคยได้ยินมาบ้างแล้ว Windows 10 ยังมีเครื่องมืออันน่าตื่นเต้นอื่นๆ อีกมากมายเพื่อช่วยคุณสร้างสรรค์งานอันยอดเยี่ยม",e.jsx("br",{}),e.jsx("br",{}),"เรียนรู้เพิ่มเติม   ",e.jsx("img",{src:_i,width:"16",height:"16",border:"0"})]}),e.jsx("td",{width:"20",children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"ltr"},children:[e.jsxs("em",{children:["*รายละเอียดข้อเสนอ Windows",e.jsx("br",{}),"ใช่แล้ว ฟรี! ข้อเสนอการอัพเกรดนี้สำหรับ Windows 10 รุ่นสมบูรณ์ ไม่ใช่รุ่นทดลอง ต้องดาวน์โหลด 3GB โดยมีค่าบริการข้อมูลตามมาตรฐาน ในการรับข้อเสนอฟรีนี้ คุณต้องอัพเกรด Windows 10 ภายในหนึ่งปีที่สามารถทำได้ เมื่ออัพเกรดแล้ว คุณจะใช้งาน Windows 10 ได้ฟรีบนอุปกรณ์นั้น",e.jsx("br",{}),e.jsx("br",{}),"แผนกกฎหมายของเราแนะนำให้พูดว่า: ข้อเสนอการอัพเกรด Windows 10 ใช้ได้กับอุปกรณ์ Windows 7 และ Windows 8.1 ที่มีคุณสมบัติตามกำหนดรวมถึงอุปกรณ์ที่เป็นของคุณด้วย อาจมีข้อกำหนดด้านฮาร์ดแวร์/ซอฟต์แวร์บางประการ และคุณลักษณะที่ใช้ได้อาจแตกต่างกันไป ขึ้นอยู่กับตัวอุปกรณ์และตลาด สิทธิ์การอัพเกรดเป็น Windows 10 สำหรับอุปกรณ์ Windows Phone 8.1 อาจแตกต่างกันไปตาม OEM และผู้ให้บริการโครงข่ายโทรศัพท์มือถือ จะต้องเชื่อมต่ออุปกรณ์กับอินเทอร์เน็ตและเปิดใช้งาน การอัพเดต Windows ต้องมีการอัพเดต Windows 7 SP1 และ Windows 8.1 มีบางรุ่นที่ไม่มีสิทธิ์: Windows 7 Enterprise, Windows 8/8.1 Enterprise และ Windows RT/RT 8.1 ลูกค้าที่มี Software Assurance แบบ Volume Licensing ที่ยังใช้งานได้จะได้รับสิทธิประโยชน์ในการอัพเกรดเป็น Windows 10 Enterprise นอกเหนือจากข้อเสนอนี้ ในการตรวจสอบความเข้ากันได้ของอุปกรณ์และข้อมูลการติดตั้งที่สำคัญอื่นๆ โปรดเยี่ยมชมเว็บไซต์ของผู้ผลิตอุปกรณ์ของคุณ และหน้า Windows 10 Specifications อาจจำเป็นต้องอัพเดตเพิ่มเติมเมื่อเวลาผ่านไป การรักษาความปลอดภัยและคุณลักษณะได้รับการอัพเดตโดยอัตโนมัติซึ่งมีการเปิดใช้งานอยู่เสมอ",e.jsx("br",{}),e.jsx("br",{}),"*อาจไม่มีให้ใช้งานในบางตลาด"]}),e.jsx("br",{}),e.jsx("br",{}),"Microsoft เคารพในความเป็นส่วนตัวของคุณ หากต้องการเรียนรู้เพิ่มเติม โปรดอ่านคำ ชี้แจงสิทธิ์ส่วนบุคคล ออนไลน์ของเรา"]}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),e.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052 USA"]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),e.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:e.jsx("img",{src:qa,width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),e.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}function Ly(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Windows 10",url:"/Microsoft/Windows10"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:H0,alt:"Microsoft Student"}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Windows 10 Preview Registration",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"The Windows 10 Preview Registration campaign was an effort to promote the launch of Microsoft's latest edition of its operating system Windows 10. The site offered users access to register for a preview release of the OS before the official release. This campaign was launched globally, localized into 32 languages, and saw nearly 10 million pre-registrations over the course of the enrollment period."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsxs(e.Fragment,{children:[e.jsx(Fy,{}),e.jsx("br",{}),e.jsx(Gy,{}),e.jsx("br",{}),e.jsx(Zy,{})]})})]})]})}const up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAAATCAYAAAAZFLrcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjlmNjljOS04OTJhLTgwNDItOGJkYS00YTI0NGQ4NDVkY2EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTM4MTVFQzY0RTg0MTFFNDkzRjhGMzU2M0JDNjk5NEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTM4MTVFQzU0RTg0MTFFNDkzRjhGMzU2M0JDNjk5NEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhkYTE4MzdlLTBiMzgtZGU0Yy04YzgzLTY2ZjkxYzBmYTE3NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNjlmNjljOS04OTJhLTgwNDItOGJkYS00YTI0NGQ4NDVkY2EiLz4gPC9y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",gp="/assets/33522_eznews_logo_header_2014-10-dddc8537.png",Wy="/assets/33522_ez_hero-cd12e344.jpg",xp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAXCAYAAAAIqmGLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyODUyQzVENTQzMTFFMkFGNERDMUQ3RDJFQ0E1NUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyODUyQzZENTQzMTFFMkFGNERDMUQ3RDJFQ0E1NUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzI4NTJDM0Q1NDMxMUUyQUY0REMxRDdEMkVDQTU1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzI4NTJDNEQ1NDMxMUUyQUY0REMxRDdEMkVDQTU1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puzbf1AAAAn1SURBVHjarFp7jJxV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",Co="/assets/33522_drkgrnArrowcta_2014-10-a4ba1b9c.png",Oy="/assets/33522_ez_enter-9487e2ab.jpg",Yy="/assets/33522_ez_winpc-d839246b.jpg",Qy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2VpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozRjNFN0VDNDRFODExMUU0OURDM0IwNkE3QTZGMTYzQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTY3RUZBQkFDQTkxMUU0QUZDNkZEQTlGOEM1OTEwQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTY3RUZBQUFDQTkxMUU0QUZDNkZEQTlGOEM1OTEwQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTI5RkQ2Mzc1OTYyMTFFNDhDREJCQkJEMzRFMzI5NTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTI5RkQ2Mzg1OTYyMTFFNDhDREJCQkJEMzRFMzI5NTMiLz4gPC9yZGY6RGVzY3JpcHRp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",Jy=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 480px) {
    .mobileAdjust {
      fontsize: 16px !important;
      lineheight: 18px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;function Vy(){return e.jsx(Jy,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"540",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",lineHeight:"13px",padding:"24px 0 8px"},children:"Xbox and Windows bring entertainment to a new level."}),e.jsx("td",{width:"10",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"140",align:"right",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",lineHeight:"13px",padding:"24px 0 8px"},children:e.jsx("a",{href:"",title:"Read online.",alias:"Preheader: Read online",style:{color:"#fffffe"},children:"Read online."})}),e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"576",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "}),e.jsx("td",{width:"94",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Microsoft",alias:"Header Image: Microsoft",style:{textDecoration:"none"},children:e.jsx("img",{src:up,width:"94",height:"19",border:"0",alt:"Microsoft"})})}),e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"ExpertZone News",alias:"Header Image: ExpertZone News",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:gp,class:"bannerScale",width:"372",height:"56",border:"0",alt:"ExpertZone News"})})})]})})})]})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero Image: Tons of blockbuster games make this the best year ever for Xbox One.",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:Wy,class:"hero",width:"700",height:"390",border:"0",alt:"Tons of blockbuster games make this the best year ever for Xbox One."})})})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI Light, Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"20px 0px 20px 0px"},class:"mobileAdjust",children:"Tons of blockbuster games make this the best year ever for Xbox One."}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"169",valign:"middle",align:"left",style:{color:"#505051",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",fontWeight:"bold",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA: Get your customers ready to play",style:{color:"#505050"},children:"Get your customers ready to play"})}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"6",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA Arrow: Get your customers ready to play",style:{color:"#107c10",textDecoration:"none !important"},children:e.jsx("img",{src:Co,width:"6",height:"12",alt:"▶",border:"0"})})}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 Image: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",textDecoration:"none"},children:e.jsx("img",{src:Oy,class:"sectionImg",border:"0",alt:"Keep everybody entertained with Windows."})})}),e.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 20px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"340",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Keep everybody entertained with Windows."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",fontWeight:"bold"},class:"mobileAdjust",children:"Help customers discover new games, apps, and music"})," ",e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA Arrow: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",textDecoration:"none !important"},children:e.jsx("img",{src:Co,width:"6",height:"12",alt:"▶",border:"0"})})]}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e5e5e5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"320",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"The fun is just getting started with Windows 10."}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#107c10",fontWeight:"bold"},class:"mobileAdjust",children:"See how Cortana and Continuum are changing the future"})," ",e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA Arrow: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#107c10",textDecoration:"none !important"},children:e.jsx("img",{src:Co,width:"6",height:"12",alt:"▶",border:"0"})})]}),e.jsx("td",{width:"50",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),e.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 Image: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{textDecoration:"none",color:"#107c10"},children:e.jsx("img",{src:Yy,class:"sectionImg",border:"0",alt:"The fun is just getting started with Windows 10."})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3a3a3a",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),e.jsx("td",{width:"110",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"30px 0px 30px 0px"},children:e.jsx("a",{href:"",title:"Using Windows 10? Share your thoughts using #EZWindowsInsider",alias:"Social Banner Image: Using Windows 10? Share your thoughts using #EZWindowsInsider",style:{textDecoration:"none",color:"#5dc21e"},children:e.jsx("img",{src:Qy,width:"110",height:"110",border:"0",alt:"EZ"})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),e.jsx("td",{width:"500",valign:"middle",align:"left",style:{color:"#5dc21e",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"30px 0px 30px 0px"},children:e.jsx("span",{style:{color:"#ffffff",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Using Windows 10? Share your thoughts using #EZWindowsInsider"})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),e.jsxs("td",{width:"505",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:["Microsoft Corporation ",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052",e.jsx("br",{}),"USA"]}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),e.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Microsoft",alias:"Footer  Image: Microsoft",style:{textDecoration:"none"},children:e.jsx("img",{src:xp,alt:"Microsoft",border:"0"})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}})]})})})]})})})})}const Xy="/assets/33522_ez_jhero-668d1161.jpg",Ho="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAYAAABBV8wuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTlEOEVDMUY2NjBEMTFFNEE5RDhGQUM5N0U0NEY0QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlEOEVDMUU2NjBEMTFFNEE5RDhGQUM5N0U0NEY0QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI1MjJFNEFENTk1RjExRTQ5NDAwODk5NTZDNjJFNDY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI1MjJFNEFFNTk1RjExRTQ5NDAwODk5NTZDNjJFNDY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+c8gUEQAAAHRJREFUeNpizNdsbY1KCa9mQANMQFy1bM7KqUDMhC4BAllAvAgoyYIuAQLRQLwWKMmBLgECfkC8FSjJiy4BAk4gndgkvgFxE7rELyAOBDr/CLLEXyCOAAruQrb8PxAnAgXXozs3Byi4GN2DFUDBaeguAAgwAADaITyV+42YAAAAAElFTkSuQmCC",Ky="/assets/33522_ez_jentry-26acb3ce.jpg",qy="/assets/33522_ez_jwinpc-c38af55c.jpg",_y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUI1MkRCQkM2NjBEMTFFNEE2RjBDNDk5M0NFNTk3QTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUI1MkRCQkI2NjBEMTFFNEE2RjBDNDk5M0NFNTk3QTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk5OEM1NkJFNTk1RjExRTRBNTkxQkMyNjQ2QkJGRjNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk5OEM1NkJGNTk1RjExRTRBNTkxQkMyNjQ2QkJGRjNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wcxy2AAABxtJREFUeNrsnWtsFFUU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",$y=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[class="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[class="sectionImg"] {
    max-width: 300px;
    min-width: 150px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 480px) {
    .mobileAdjust {
      fontsize: 16px !important;
      lineheight: 18px !important;
    }
    .bannerScale {
      width: 250px !important;
      height: 38px !important;
    }
  }
`;function e2(){return e.jsx($y,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"540",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",lineHeight:"13px",padding:"24px 0 8px"},children:"新世代の Windows を発表いたしました。"}),e.jsx("td",{width:"10",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),e.jsx("td",{width:"140",align:"right",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",lineHeight:"13px",padding:"24px 0 8px"},children:e.jsx("a",{href:"",title:"オンラインで読む",alias:"Preheader: Read online",style:{color:"#fffffe"},children:"オンラインで読む"})}),e.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"576",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "}),e.jsx("td",{width:"94",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Microsoft",alias:"Header Image: Microsoft",style:{textDecoration:"none"},children:e.jsx("img",{src:up,width:"94",height:"19",border:"0",alt:"Microsoft"})})}),e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"ExpertZone News",alias:"Header Image: ExpertZone News",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:gp,class:"bannerScale",width:"372",height:"56",border:"0",alt:"ExpertZone News"})})})]})})})]})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero Image: Tons of blockbuster games make this the best year ever for Xbox One.",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:Xy,class:"hero",width:"700",height:"390",border:"0",alt:"Tons of blockbuster games make this the best year ever for Xbox One."})})})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI Light, Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"20px 0px 20px 0px"},class:"mobileAdjust",children:"新世代の Windows を発表いたしました。"}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"169",valign:"middle",align:"left",style:{color:"#505051",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",fontWeight:"bold",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA: Get your customers ready to play",style:{color:"#505050"},children:"詳しくはこちら"})}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"6",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA Arrow: Get your customers ready to play",style:{color:"#68217a",textDecoration:"none !important"},children:e.jsx("img",{src:Ho,width:"6",height:"12",alt:"▶",border:"0"})})}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 Image: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",textDecoration:"none"},children:e.jsx("img",{src:qy,class:"sectionImg",border:"0",alt:"Keep everybody entertained with Windows."})})}),e.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 20px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"340",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"引き続き Windows 8.1 をご案内下さい"}),e.jsx("br",{}),"Windows 10 について発表をいたしましたが、当面はこれまで通りの内容で Windows 8.1 搭載 PC をしっかりとご案内ください。 現段階で積極的に Windows 10 無償アップグレードのご案内をする必要はありません。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",fontWeight:"bold"},class:"mobileAdjust",children:"詳しくはこちら"})," ",e.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA Arrow: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",textDecoration:"none !important"},children:e.jsx("img",{src:Ho,width:"6",height:"12",alt:"▶",border:"0"})})]}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e5e5e5",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"320",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Windows でエンターテイメント!"}),e.jsx("br",{}),"仕事にも趣味にも使える機能が備わっている Windows PC およびタブレットは、ゲームをしたり、音楽を聴いたり、写真でスライド ショーを作ったり、ビデオを見たり編集したりするのにもおすすめです。",e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#68217a",fontWeight:"bold"},class:"mobileAdjust",children:"詳しくはこちら"})," ",e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA Arrow: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#68217a",textDecoration:"none !important"},children:e.jsx("img",{src:Ho,width:"6",height:"12",alt:"▶",border:"0"})})]}),e.jsx("td",{width:"50",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),e.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:e.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 Image: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{textDecoration:"none",color:"#68217a"},children:e.jsx("img",{src:Ky,class:"sectionImg",border:"0",alt:"The fun is just getting started with Windows 10."})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3a3a3a",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),e.jsx("td",{width:"110",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"30px 0px 30px 0px"},children:e.jsx("a",{href:"",title:"Using Windows 10? Share your thoughts using #EZWindowsInsider",alias:"Social Banner Image: Using Windows 10? Share your thoughts using #EZWindowsInsider",style:{textDecoration:"none",color:"#5dc21e"},children:e.jsx("img",{src:_y,width:"110",height:"110",border:"0",alt:"EZ"})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),e.jsx("td",{width:"500",valign:"middle",align:"left",style:{color:"#5dc21e",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"30px 0px 30px 0px"},children:e.jsx("span",{style:{color:"#ffffff",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"新しい ExpertZone を ぜひご利用ください!"})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),e.jsxs("td",{width:"505",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:["Microsoft Corporation ",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052",e.jsx("br",{}),"USA"]}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),e.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Microsoft",alias:"Footer  Image: Microsoft",style:{textDecoration:"none"},children:e.jsx("img",{src:xp,alt:"Microsoft",border:"0"})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}})]})})})]})})})})}function t2(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Expert Zone",url:"/Microsoft/ExpertZone"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:G0,alt:"Expert Zone"}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Expert Zone Newsletter • United States & Japan",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"The Expert Zone Newsletter is a promotional publication that helps global retail professionals who sell Windows Phone, Windows, Xbox, Office and all other Microsoft products stay informed on the latest Microsoft products, features, events, and community activities."]}),e.jsx("br",{}),e.jsxs(ie,{viewSelected:"desktop",children:[e.jsx(Vy,{}),e.jsx("br",{}),e.jsx(e2,{})]})]})]})}const i2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAA0CAYAAAA9tCJZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y5RkQ1REZFRUM4MTFFNDlEOTc4NTBBNjg3MjQwOTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y5RkQ1RTBFRUM4MTFFNDlEOTc4NTBBNjg3MjQwOTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjlGRDVEREVFQzgxMUU0OUQ5Nzg1MEE2ODcyNDA5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjlGRDVERUVFQzgxMUU0OUQ5Nzg1MEE2ODcyNDA5NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrnUrQIAAAh6SURBVHja7F1tqBRV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",n2="/assets/33531_nlheadera-5b4b2e00.png",r2="/assets/33531_heromain_01-1f9a49ba.png",l2="/assets/33531_story1_01-8d0b0920.png",o2="/assets/33531_story2_01-a9cb67b6.png",s2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAIAAACQzIFuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAtySURBVHgBAGILnfQB6yQpAAAAAAAAAAAAAAAAAAAAAAABAgMD/e3r//X2AhgZAAcG/eTkAQEAARkXAf8CAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAD/AP34+AEzMwIEB//Y1f7w8QQ3NQIODf3U1//8/QEDAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAD/Af/94d0GWlkQtK0AIyH97+8PvLkKiYj+5uYB/f7//f3/AAABAAIAAAL/AAD/AQD/AAAAAAIBAAEAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAQD//gcJ+6yxAwAAAhYYBS8wBAAA+qer/PXw/erl++nq/uHjAAMB++Xk/+PlAfv8+9zY/PLw/gcFAQAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAYYG/28u/z09QVQSgdpYgAAAPijoQIAAAuNjBPSzQRmZPvd2QpoZQdsZwIPDA6RlgQ0Mv/n5/8AAQAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAEBBwX+9/D4h4sMU1UMYGD1s7X63NkKd3oJamkCBgUQlI8AIiYHUk4Ja2kADxAMbmgGNjb+7uoAAP8AAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAA//7+AxIX96qo/fv9AAAA+J6hAgAAB15a/MDB7igwAwAACEZG/dXY/uPkAPz8AAAA//HyAQAGAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREP3e4vzV1vz8+/zJywAAAQMB/wH5+v8LCQAAAAINDAABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wABAQEE+/oA9/YA9PL/AAT//f4AAgMBBQX/AAABBAMA/wD/AP/9//4AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAME/wYEAQIEAwUHAgD9/ggJ/fj4/+bgAQAA//z6AQkJAPb3/ODlAAAAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH+/AAJCwELC/0D/wIA/vzP0wQ8Owh9ggAAAPzP0gDz9AU0NAyXkQAAAAD+/f8A/QAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAD/AP//AP8BAP8CAAD+AgH88fD/8vP/AgP9Cwz2gIQADwsQgn3z0dL6uLT5wsIBFBMIT077+ff//v4AAgMB//8AAAAAAAAAAAAAAAAAAAAB6yQpAAAAAAAAAAAAAQMD/vn5/+bmAPr5/QAA/wD8Ag4UAQQH/e7oAAAEAAD5BBMaBCYk+MfDAAD/AAAABCow/+TlAAAA/vj5Avr1AhATARgVAP3/AP//AAAAAAAAAeskKQAAAAAAAAAEBP/u7f/19gRJSwYtLAAGBQAA///t7v/8+wMVFgAAAP8DAv7n6P/z8wIWFQIREv/5+P7l5gEKCgAAAAEQEP349/i+vADKzwQjIf8BAQD//wAAAAHrJCkAAAABAQH/8/X97OkKq6YMUFEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD69/X0W2L6r6sEJysA/f0AAAACAAAAAAAA//39++zrCpWUDFBRAQAA///9AP//AP39AP//AAAAAAAAAAAAAAAAAAAA/wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAABgkLDa6pBkZL/+LiAAEBAAAAAgAAAAAAAP/v7wUtLgpmYwEAAOxAQOwFD+5CSOoJEu1MT/4AAAAAAAAAAAAAAAAAAPiSle06P/8AAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAUAAAp3cv/3+AD9/QAAAAQAAAAAAAD/9/oGGxcCAAD+AAACJi386fH7xcf9FxMEJSgCAAAAAAD/AP8BAAEAAAD83+H90NQBAAAAAAD/AAAAAAABAAAAAAAAAAABAP8AAAH+Dg//DQ8A/f0AAgICAAAAAAAAAAMA/fv8/wAAAQAAEpqTEce8/vv4E6SgEpCK+NXW+Lu8/gD/+bu7/O3uASEfBCgp9aSm852e/gAA/gAA9rq58GJm+MvN/AABAAAABfr5Af/+AAEBAAAAAgAAAAAAAAAAAAD//wAAAAEAAAAAAAHt7wEAAgDw9AAAAPeiofJYXgIAAvJcY/nEwwY1Mfvb1PFrbPJkY/3b3Pvk4fBHS/qlp+5ESPrd3QAAAAD//wAA/wAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAD//PwAAQH+/f0AAAAFDQ8DFxYBAAAAGRcDBgj+8fL+AQITz80IMTf6sbL7mJ0HQEEV+fMFEBD8oKQAAAD/AAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIC/wMDAAAAAQMD/wIC/e/wBiMkByIhASUk/+7vAREQ/dfY8mFm/OLcAO3uAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQEAAAD+/wEDBAAAAAP5+gEHBf8HBPz29QgCAAyNjgNOTwAAAAEAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/fwABgUAAAABBgMA/fwDAQD//P0AAAD9AwEC+/sA2d8IPTwOnZr739799fcAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAD/AAEBAAAAAAAAAAAAAP3+///4Afv8AAAA/v7+/uXl9c3N/NPaAQoKAgwJ+9LQ9dna/dLSARMUASUk/dPY+/4A7CIj+ZKUAAAAAAIBAAAAAAAAAAAAAgAAAAAAAAD+//8FBQAAAAAAAAAAAP8EAgIECgEFA/8AAAI8O/zp5PVYXP4TDAANDQANEAAYGfNQVv7c2AZQUwVcV/389uwYHgQfJQdvbAAAAP8HCAEBAQAA/wAAAAQAAAAAAAABDA0A2tr/+PYACAoA/wACISIQ3tcDERL//v8JQ0MDy80BDAoDHhwB/gEA//8T3tX82N3/AwIDIRwBAAAS0Mv+ubwETEsEERIAAAD73d7+8/EDFhQAAAAB6yQpAAAAAAEB/tvWCIWNDnpy/gAAAAAAAAAAAAAAAQD/AAABAAAAAAAAAAAA/gAAAQAAAQAAAAAAAAAA/wD+AQAAAQACAAAA/wAAAQAA/QAA8Dc9/dXUAhoaAP//AgAAAAAAAAEAAQAYHvODg/a0twAAAAIAAAIAAAIAAAEAAQEAAAEAAAEAAAEAAAMAAAIAAAEAAAEAAAEAAAIAAgEAAgAAAAAAAAAAAPr5+O5WW/vKxwMcHAD//wAAAAHrJCkAAAAAAAD/AwQA7u0A9vcET00FKysBAf/+/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgX/8PL6v7z9x8sCJCQBAf8A/wAAAAAB6yQpAAAAAAAAAAAAAQMD/vj4/ubnAPv3AAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAACAg8RAhgX//7+AP//AAAAAAAAAQAA//8P0uCJNtVwHQAAAABJRU5ErkJggg==",a2="data:image/png;base64,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",d2="/assets/33531_twitter_tile2015-06eb9707.png",c2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAAXCAYAAAAIqmGLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0MyODUyQzVENTQzMTFFMkFGNERDMUQ3RDJFQ0E1NUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0MyODUyQzZENTQzMTFFMkFGNERDMUQ3RDJFQ0E1NUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QzI4NTJDM0Q1NDMxMUUyQUY0REMxRDdEMkVDQTU1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QzI4NTJDNEQ1NDMxMUUyQUY0REMxRDdEMkVDQTU1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puzbf1AAAAn1SURBVHjarFp7jJxV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",f2=p.table`
  .bodywrap {
    max-width: 700px !important;
    margin: auto;
  }
  img[className="hero"] {
    max-width: 700px;
    width: 100% !important;
    height: auto !important;
  }
  img[className="sectionImg"] {
    max-width: 350px;
    min-width: 100px;
    width: 100% !important;
    height: auto !important;
  }
  a {
    textdecoration: none;
  }
  a:hover {
    textdecoration: underline;
  }
  table {
    max-width: 700px;
  }
  table td {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
  }
  img {
    border: none;
  }
  @media only screen and (max-width: 480px) {
    .block {
      display: block;
      width: 100%;
    }
    .mobileAdjust {
      fontsize: 24px !important;
      lineheight: 28px !important;
    }
    .bannerScale {
      width: 300px !important;
      height: 19px !important;
    }
    .hide {
      display: none;
    }
  }
`;function h2(){return e.jsx(f2,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"320",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Power BI",alias:"Header Image: Power BI",style:{textDecoration:"none"},target:"_blank",children:e.jsx("img",{src:i2,width:"118",height:"33",border:"0",alt:"Power BI"})})}),e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 30px 0px"},children:" "}),e.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 30px 0px"},children:e.jsx("a",{href:"",title:"Power BI Newsletter",alias:"Header Image: Power BI Newsletter",style:{textDecoration:"none",color:"#fffffe"},target:"_blank",children:e.jsx("img",{src:n2,className:"bannerScale",width:"560",height:"36",border:"0",alt:"Microsoft Power BI Newsletter"})})})]})})})]})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},target:"_blank",children:e.jsx("a",{href:"",title:"Try the Preview Now!",alias:"Hero Image: Experience what’s coming next for Power BI",style:{textDecoration:"none",color:"#fffffe"},children:e.jsx("img",{src:r2,className:"hero",width:"700",height:"292",border:"0",alt:"Experience what’s coming next for Power BI"})})})})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"24px",lineHeight:"30px",padding:"20px 0px 20px 0px"},className:"mobileAdjust",children:"Experience what’s coming next for Power BI"}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f2c811",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),e.jsx("td",{width:"185",valign:"middle",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:e.jsx("a",{href:"",title:"Try the Preview Now!",alias:"Hero CTA: Try the Preview Now!",style:{color:"#000001"},children:"Try the Preview Now!"})}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),e.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",valign:"middle",align:"center",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",padding:"20px 0px 20px 0px"},className:"block",children:e.jsx("a",{href:"",title:"Try Power BI with Google Analytics",alias:"Story 1 Image: Try Power BI with Google Analytics",style:{color:"#f2c811",textDecoration:"none"},children:e.jsx("img",{src:l2,className:"sectionImg",border:"0",alt:"Try Power BI with Google Analytics"})})}),e.jsx("td",{width:"350",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"310",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#333333",fontSize:"30px",lineHeight:"36px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"Visualize and Explore your Google Analytics data with Power BI"}),e.jsx("br",{}),e.jsx("br",{}),"Now you can connect to your Google Analytics data using"," ",e.jsx("a",{href:"",title:"Power BI",alias:"Story 1: Power BI",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI"})," ","and the"," ",e.jsx("a",{href:"",title:"Power BI Designer",alias:"Story 1: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"}),". Start unlocking your website’s insights today.",e.jsx("table",{width:"290",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),e.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Try Power BI with Google Analytics",alias:"Story 1 CTA: Try Power BI with Google Analytics",style:{color:"#000001",textDecoration:"none"},children:"Try Power BI with Google Analytics"})}),e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]})]})})]}),e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"350",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),e.jsxs("td",{width:"310",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[e.jsx("span",{style:{color:"#333333",fontSize:"30px",lineHeight:"36px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"The Power BI Designer gets its biggest update yet"}),e.jsx("br",{}),e.jsx("br",{}),"Last week we announced the biggest"," ",e.jsx("a",{href:"",title:"Power BI Designer",alias:"Story 2: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"})," ","update since the"," ",e.jsx("a",{href:"",title:"preview launch on December 18, 2014",alias:"Story 2: preview launch on December 18, 2014",style:{color:"#E6BE1D",textDecoration:"none"},children:"preview launch on December 18, 2014"}),". This update includes the ability to create measures using DAX, as well as several other new Modeling & Query features.",e.jsx("table",{width:"290",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),e.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"Learn more about the update",alias:"Story 2 CTA 1: Learn more about the update",style:{color:"#000001",textDecoration:"none"},children:"Learn more about the update"})}),e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:"3",children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),e.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:e.jsx("a",{href:"",title:"The Power BI Designer Experience",alias:"Story 2 CTA 2: The Power BI Designer Experience",style:{color:"#000001",textDecoration:"none"},children:"The Power BI Designer Experience"})}),e.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]})]})})]}),e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),e.jsx("td",{width:"350",valign:"middle",align:"center",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"1px",paddingBottom:"10px"},className:"block",children:e.jsx("a",{href:"",title:"Learn more about the update",alias:"Story 2 Image: Learn more about the update",style:{color:"#f2c811",textDecoration:"none"},children:e.jsx("img",{src:o2,className:"sectionImg",border:"0",alt:"Learn more about the update"})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#4C68B0",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),e.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["What Visualization should I use?",e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Use these tips to help you pick the right visualization for your data",alias:"Triple Banner CTA 1: Use these tips to help you pick the right visualization for your data",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Use these tips to help you pick the right visualization for your data"})]}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),e.jsx("td",{width:"11",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),e.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["Using SendGrid?",e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Get more out of your email analytics. Monitor and analyze your email deliverability statistics with Power BI",alias:"Triple Banner CTA 2: Get more out of your email analytics.",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Get more out of your email analytics. Monitor and analyze your email deliverability statistics with Power BI"})]}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),e.jsx("td",{width:"11",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),e.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["Customer Support with Zendesk?",e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Get better insights into your Zendesk customer support with Power BI",alias:"Triple Banner CTA 3: Get better insights into your Zendesk customer support with Power BI",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Get better insights into your Zendesk customer support with Power BI"})]}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),e.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsxs("td",{width:"465",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px"},className:"block",children:[e.jsx("span",{style:{color:"#333333",fontSize:"24px",lineHeight:"30px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"More about Power BI"}),e.jsx("br",{}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"PowerBI.com",alias:"Extra Links 1: PowerBI.com",style:{color:"#E6BE1D",textDecoration:"none"},children:"PowerBI.com"})}),e.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Power BI Designer",alias:"Extra Links 4: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Blog",alias:"Extra Links 2: Blog",style:{color:"#E6BE1D",textDecoration:"none"},children:"Blog"})}),e.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Power BI Mobile",alias:"Extra Links 5: Power BI Mobile",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Mobile"})})]}),e.jsxs("tr",{children:[e.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Support",alias:"Extra Links 3: Support",style:{color:"#E6BE1D",textDecoration:"none"},children:"Support"})}),e.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Analysis Services Connector",alias:"Extra Links 6: Analysis Services Connector",style:{color:"#E6BE1D",textDecoration:"none"},children:"Analysis Services Connector"})})]})]})})]}),e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),e.jsx("td",{width:"175",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px"},className:"block",children:e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"YouTube",alias:"YouTube",children:e.jsx("img",{src:d2,height:"31",width:"31",border:"0",alt:"YouTube"})})}),e.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Facebook",alias:"Facebook",children:e.jsx("img",{src:s2,height:"31",width:"31",border:"0",alt:"Facebook"})})}),e.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),e.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:e.jsx("a",{href:"",title:"Twitter",alias:"Twitter",children:e.jsx("img",{src:a2,height:"31",width:"31",border:"0",alt:"Twitter"})})}),e.jsx("td",{width:"62",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]}),e.jsx("tr",{children:e.jsx("td",{width:"175",colSpan:"6",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:"Follow us to stay up to date with the latest news about Power BI"})})]})})}),e.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},children:" "}),e.jsxs("td",{width:"525",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:["Microsoft Corporation ",e.jsx("br",{}),"One Microsoft Way",e.jsx("br",{}),"Redmond, WA 98052",e.jsx("br",{}),"USA"]}),e.jsx("td",{width:"30",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:" "}),e.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:e.jsx("a",{href:"",title:"Microsoft",alias:"Footer Image: Microsoft",style:{textDecoration:"none"},children:e.jsx("img",{src:c2,alt:"Microsoft",border:"0"})})}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},children:" "})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px"},children:" "})})})})]})})})})}function p2(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Power BI",url:"/Microsoft/PowerBI"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:B0,alt:"Power BI"}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Power BI Newsletter",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"Power BI is a cloud-based business analytics service that enables anyone to visualize and analyze data with greater speed, efficiency, and understanding. It connects users to a broad range of data through easy-to-use dashboards, interactive reports, and compelling visualizations that bring data to life. The Power BI Newsletter is a monthly digital publication that helps subscribers stay informed on the latest Power BI features, events, and community activities."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(h2,{})})]})]})}const A2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAAAZCAYAAABkWi/IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAylpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ1QjY0ODNBRDlFMTFFNEIxMTRFN0I0RjMwRkM2RTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ1QjY0ODJBRDlFMTFFNEIxMTRFN0I0RjMwRkM2RTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOmEyNzA3ZTBiLWMxNWUtMTY0Yi04Y2ZmLWI5ZjhmZjg3OGQ3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDphMjcwN2UwYi1jMTVlLTE2NGItOGNmZi1iOWY4ZmY4NzhkNzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6dH9yzAAAJm0lEQVR4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",u2="/assets/33542_vso_agile_kanban-be171a52.gif",g2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEZEQzREMEMyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEZEQzREMEQyREM3MTFFMjkxNkJCNDE1MEI5RTY1OUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RkRDNEQwQTJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RkRDNEQwQjJEQzcxMUUyOTE2QkI0MTUwQjlFNjU5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq/tAFkAAAE5SURBVHjaxFaBEYMgDIxdoHaDjsAIdgNH6AhuYjdwBEeoG9gNHAE3oIEGjyIV0Cp/l7M0CSEhCQHwQAiRI1VILRIXc3DiSZkc1oIMNSIeTbRhVCgtb3rygDlkGfF6y+sy1FhtKA5IRcRBC9LRqGOMNRuuo/EapTBq3GEj5B7GfqUrQfhWzxY85V+JZDAG+DOMO1WOZGSZE/+WZVnnCxV+rsZfD9QZlxIJP09aXoBSWqV+4ImZo2SuHh1dMhVQl/gs4pqCXXdsQV471YJxWraiEwUZpagoGXmHQl0mwhKSYfKVxxnJjMxIefByGBXTj2kx7xprwF3dSTNPsA9+Nu8kIT00aWRIdaHHvAo5FTPzeWbt3a0t/N56wlho4R/f2o5u3mmep8Mf4CQjRpIhKsmYmGQQ3nPUfwswACAKzdYI3hSjAAAAAElFTkSuQmCC",x2="data:image/gif;base64,R0lGODlhPAALAPcAAFJSUoODg5GRkZ+fn0hISCYmJt3d3UJCQra2tuPj42lpac3NzZSUlCUlJScnJyQkJMfHx3BwcEVFRSkpKXt7ezExMc/Pz0ZGRiMjI8bGxn9/f/Pz88zMzNjY2GVlZfr6+r6+vj8/P1JSUpmZmTQ0NF5eXjY2NlVVVX5+fkREREpKSqOjo+/v76qqqmxsbCoqKp+fn9ra2uLi4vz8/KCgoOjo6PPz839/f+vr6y4uLrCwsImJiVBQUEdHRzY2NkxMTJiYmLq6um9vb9/f30JCQjg4OI+Pj/j4+CgoKLu7u+bm5qSkpCYmJisrKyoqKpubmy8vL4+Pj4ODg7e3tywsLNvb26ampjk5OUFBQYSEhLu7u3p6esfHx3h4eL29vc3NzX19ffLy8tTU1FlZWWRkZFxcXMHBwWZmZre3tzAwMHp6ejY2NlRUVH19fW1tbYuLi5CQkHBwcGxsbDMzM0xMTPj4+F9fX8DAwPf395mZmWhoaI2Njerq6l1dXa6urpycnE5OTj09PTU1NXV1dU1NTVlZWXZ2dnR0dC8vL9ra2isrK4CAgODg4NXV1ebm5tfX12JiYtjY2ElJSS0tLTMzM5eXl6qqqiMjI////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAJgALAAAAAA8AAsAAAj/ABEg4ICpYME6AhNh0pLHoMOHECNKdMihRwE7Di9dyoHH4R+NATDNuWRhosmTEK8wQUGjBowEmDReeuJQAkhMQUag3HkywSVCBRVcWhAzBRIJBs1cshnSEgODEFBEEMDCAoNGSzRgmtGiSwQgGwraADLoRqSCQ3ZE0AAB06MAlwIxYKDiEgUGlwB4uNQWU4kJcC6FJHCpYIRLBUg08CJgqcYNhCchulQkwQciD0LkEIDJioMGggpgkDJApmmZALhcIoNJRgE9pQcXbnGpRw1MjBI0LlLFgKFLLmZgAnPJA4dLYzB9UMLiRZOSQ3w86GAgb9ChMQFgIoAEx5ZLX2Jv/C9c4lISh413FAxxiY/YBz5wUGFypgMmP5fcGKRwqVJ17ZgIRZR1KwiWhgqYiEcYJnRcEgN6lwxQ0BoNfGCQAxVgksEPlzQAAw2XtGHQHpcY8d91A2p3RAUFXLJCgoKNh4kcl3BmUGMSYsLDJVMUlMElIhgUxCUpQHDJBQb1cQkIJwZ4SQbZFXTDJRUcAaNsmHSgSAEuGHECCDgWhEYDUGiQhQkF3AECAAKocUkhOl5yQhSQYAAIJk3yx8YiBwhRkAxEvFGQDgfo5MEBBS0gghMTXBDDEgfoYBACFzgwwQ/niYGFAy+U4QgmYcRBCQYkHBJWAn0WpIQkD5gQEAA7",m2=p.table`
  .bodywrap {
    max-width: 600px;
    margin: auto;
  }
  @media only screen and (max-width: 767px) {
    .block {
      display: block;
      width: 100%;
    }
  }
  img[className="gif"] {
    max-width: 565px;
    width: 100% !important;
    height: auto !important;
  }
  img[className="video"] {
    max-width: 450px;
    width: 100% !important;
    height: auto !important;
  }
`;function y2(){return e.jsx(m2,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"600px",fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"25",valign:"top",align:"left",style:{padding:"2px 0"},children:" "}),e.jsx("td",{width:"575",height:"25",align:"left",valign:"middle",style:{padding:"10px 0"},children:e.jsx("a",{href:"",style:{textDecoration:"none"},alias:"Banner: Visual Studio Online",title:"Visual Studio Online",children:e.jsx("img",{src:A2,alt:"Visual Studio Online",style:{display:"block"},border:"0"})})})]})})}),e.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"15",valign:"top",align:"left",style:{paddingTop:"0"},children:" "}),e.jsxs("td",{width:"565",valign:"top",align:"left",className:"scaling",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",lineHeight:"25px"},children:"Here’s how easy it is to start your backlog:"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Start Your Backlog",alias:"Body Image: Start Your Backlog",style:{color:"#0044cc",textDecoration:"none"},children:e.jsx("img",{src:u2,width:"565",height:"342",border:"0",alt:"start your backlog",className:"gif"})}),e.jsx("br",{}),e.jsx("br",{}),"That’s it! Now you’re ready to check in code, invite more team members, or add more backlog items to get your project started. For a full walk-through on backlogs and other Visual Studio Online features, check out our"," ",e.jsx("a",{href:"",title:"Getting Started Guide",alias:"Body: Getting Started Guide",style:{color:"#0060a6",textDecoration:"none"},children:"Getting Started Guide"}),".",e.jsx("br",{}),e.jsx("br",{}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"15",children:" "}),e.jsx("td",{align:"left",valign:"middle",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"15px",padding:"7px 0"},children:e.jsx("a",{href:"",title:"Getting Started Guide",alias:"CTA: Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:"Getting Started Guide"})}),e.jsx("td",{width:"15",children:" "}),e.jsx("td",{align:"right",valign:"middle",width:"28",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",padding:"7px 0"},children:e.jsx("a",{href:"",title:"Getting Started Guide",alias:"CTA: Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:e.jsx("img",{src:g2,width:"20",height:"20",border:"0"})})}),e.jsx("td",{width:"10",children:" "})]})})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"100",lineHeight:"30px"},children:"Answers. Insights. Expertise."}),e.jsx("br",{}),"Need an answer? Have an answer? We deploy new bits to Visual Studio Online every 3 weeks, so you can shape the service with your feedback via:"," ",e.jsx("a",{href:"",title:"UserVoice portal",alias:"Body: UserVoice Portal",style:{color:"#0060a6",textDecoration:"none"},children:"UserVoice portal"}),","," ",e.jsx("a",{href:"",title:"MSDN Forums",alias:"Body: MSDN forums",style:{color:"#0060a6",textDecoration:"none"},children:"MSDN forums"})," ","or mention #VSOnline on Twitter. And make sure to check out"," ",e.jsx("a",{href:"",title:"Brian Harry’s blog",alias:"Body: Brian Harry’s Blog",style:{color:"#0060a6",textDecoration:"none"},children:"Brian Harry’s blog"})," ","as he goes into the details about how new Visual Studio Online features will help your team!",e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),"Cheers,",e.jsx("br",{}),"The Visual Studio Online team",e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("td",{width:"20",valign:"top",align:"left",style:{paddingTop:"0"},children:" "})]})})}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",bgcolor:"#ffffff",children:e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsx("td",{colSpan:"3",width:"600",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"20px",borderTop:"1px solid #d2d2d2"},children:" "})}),e.jsxs("tr",{children:[e.jsx("td",{width:"15",bgcolor:"#ffffff",style:{lineHeight:"1px"},children:" "}),e.jsxs("td",{width:"565",valign:"top",align:"left",bgcolor:"#ffffff",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[e.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"100",lineHeight:"30px"},children:"Useful Links"}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Visual Studio News",alias:"Body: Visual Studio News",style:{color:"#0060a6",textDecoration:"none"},children:"Visual Studio News"}),e.jsx("br",{}),e.jsx("a",{href:"",title:"Visual Studio Online Support",alias:"Body: Visual Studio Online Support",style:{color:"#0060a6",textDecoration:"none"},children:"Visual Studio Online Support"})]}),e.jsx("td",{width:"20",bgcolor:"#ffffff",style:{lineHeight:"1px"},children:" "})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:"3",width:"600",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:" "})})]})}),e.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",bgcolor:"#eeeeee",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"45",valign:"top",align:"left",style:{paddingBottom:"13px"},children:" "}),e.jsx("td",{width:"445",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"10px",color:"#505050"},children:"Microsoft Corporation | One Microsoft Way | Redmond, WA 98052 USA"}),e.jsx("td",{width:"60",align:"right",children:e.jsx("a",{href:"http://www.microsoft.com/",target:"_blank",children:e.jsx("img",{src:x2,wdith:"60",height:"11",alt:"Microsoft",border:"0",style:{display:"block"}})})}),e.jsx("td",{width:"45",valign:"top",align:"left",style:{paddingBottom:"13px"},children:" "})]})})})]})})})})}function j2(){const t=[{text:"Microsoft",url:"/Microsoft"},{text:"Visual Studio",url:"/Microsoft/VisualStudio"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:Z0,alt:"Visual Studio"}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Visual Studio Promotions",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs for Microsoft Windows, as well as web sites, web applications and web services. The Visual Studio promotional email campaigns are digital publications that help subscribers stay informed on the latest Visual Studio products, features, events, and community activities."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(y2,{})})]})]})}function _a({fixedLogo:t}){return e.jsx(De,{logo:L0,alt:"Gates Foundtaion",fixedLogo:t})}function w2(){const t=[{text:"The Gates Foundation",url:"/Gates"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(_a,{}),e.jsxs(W,{children:[e.jsx(Y,{title:"The Gates Foundation",children:"The Bill & Melinda Gates Foundation is a private foundation founded by Bill and Melinda Gates. It was launched in 2000 and is said to be the largest private foundation in the US. The primary aims of the foundation are to enhance healthcare and reduce extreme poverty globally and in America, to expand educational opportunities and access to information technology. The foundation, based in Seattle, Washington, is controlled by its three trustees: Bill and Melinda Gates, and Warren Buffett."}),e.jsx("br",{}),e.jsx(ln,{className:"_three",children:r1.map(i=>e.jsx(to,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const b2=p.a`
  display: inline-block;
  width: fit-content;
  padding: 4px 16px;
  color: ${Dr.orange};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid ${Dr.orange};
  border-radius: 4px;
  transition: color 300ms, background 300ms;

  &:hover,
  &:active {
    color: ${Dr.gray};
    background: ${Dr.orange};
    transition: color 300ms, background 300ms;
  }
`;function v2({text:t,url:i,blank:n}){return e.jsx(b2,{title:t,href:i,"aria-label":`link: ${t}`,target:n?"_blank":"",children:t})}const S2="/assets/gates_landing-f6698f55.jpg",k2="/assets/gates_learning-1088a84c.jpg",I2="/assets/gates_letter-6108e154.jpg",z2="/assets/gates_history-4fc94f3b.jpg";function E2(){const t=[{text:"Gates",url:"/Gates"},{text:"The Giving Pledge",url:"/Gates/GivingPledge"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(_a,{fixedLogo:!0}),e.jsxs(W,{children:[e.jsxs(Y,{title:"The Giving Pledge",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"The Giving Pledge site wide redesign and rebuild was part of a campaign to encourage wealthy people to contribute a majority of their wealth to philanthropic causes. As of 2018, the pledge has 173 signers, either individuals or couples. Most of the signers of the pledge are billionaires, and their pledges total over $365 billion. On The Giving Pledge's website, each individual or couple writes a letter explaining why they chose to give.",e.jsx("br",{}),e.jsx("br",{}),e.jsx(v2,{text:"GivingPledge.org",url:"https://givingpledge.org/",blank:!0})]}),e.jsx("br",{}),e.jsxs(ie,{viewSelected:"desktop",children:[e.jsx("div",{children:e.jsx("img",{src:S2,width:"100%",height:"auto"})}),e.jsx("div",{children:e.jsx("img",{src:I2,width:"100%",height:"auto"})}),e.jsx("div",{children:e.jsx("img",{src:k2,width:"100%",height:"auto"})}),e.jsx("div",{children:e.jsx("img",{src:z2,width:"100%",height:"auto"})})]})]})]})}const M2="/assets/AL2013_English-da2b3676.pdf";function D2(){const t=[{text:"Gates",url:"/Gates"},{text:"Annual Letter",url:"/Gates/AnnualLetter"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(_a,{fixedLogo:!0}),e.jsxs(W,{children:[e.jsxs(Y,{title:"Gates Foundation Annual Letter 2013",children:[e.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),e.jsx("br",{}),"The Gates Foundation Annual Letter is a yearly publication to higlight the foundations current philanthropic endeavors and discuss the specific focus for year ahead."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsxs(e.Fragment,{children:[e.jsx("iframe",{width:"605",height:"605",src:"https://www.youtube.com/embed/380sy5_ZQzo?rel=0",frameborder:"0",gesture:"media",allow:"encrypted-media",allowfullscreen:!0,className:"letter-vid"}),e.jsx("br",{}),e.jsx("object",{data:M2,type:"application/pdf",width:"100%",height:"100%",children:e.jsx("p",{children:"The Gates Foundation Annual Letter 2013"})})]})})]})]})}function ui({fixedLogo:t}){return e.jsx(De,{logo:W0,alt:"T-Mobile",fixedLogo:t})}function N2(){const t=[{text:"T-Mobile",url:"/T-Mobile"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{}),e.jsxs(W,{children:[e.jsxs(Y,{title:"T-Mobile",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"T-Mobile US provides wireless voice, messaging, and data services in the United States, Puerto Rico and the U.S. Virgin Islands. The company operates the third largest wireless network in the U.S. market with over 65.5 million customers. Its nationwide network reaches 98 percent of Americans. As of 2011, J. D. Power and Associates, a global marketing-information-services firm, ranked the company highest among major wireless carriers for retail-store satisfaction four years consecutively and highest for wireless customer care two years consecutively."]}),e.jsx("br",{}),e.jsx(ln,{className:"_three",children:l1.map(i=>e.jsx(to,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const U2="/assets/tmo-logo-f9ed0424.svg",R2=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,T2=p.div`
  width: 225px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${U2}) no-repeat center;
`,F2=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #e20074;
    font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
  }
`;function on(){return e.jsxs(R2,{children:[e.jsx(T2,{}),e.jsx(F2,{children:e.jsx("h5",{children:"Order now! (800)-555-1234"})})]})}const P2="/assets/Swiss721BT-Heavy-webfont-b28238c4.ttf",C2="/assets/Swiss721BT-Bold-webfont-ebc6b4ac.ttf",H2="/assets/Swiss721BT-Roman-webfont-7a699b33.ttf",G2=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;

  @font-face {
    font-family: swis721 heavy;
    src: url(${P2});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 bold;
    src: url(${C2});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 roman;
    src: url(${H2});
    font-weight: normal;
  }
`;function sn({children:t}){return e.jsx(G2,{children:t})}const B2="/assets/hero-9e1209d7.png",Z2="/assets/tmo-freetuesdays-b4f6096f.svg",L2="/assets/tmo-dominos-e56fd382.svg",W2="/assets/tmo-vudu-6e75b65b.svg",O2="/assets/tmo-wendys-a284ecd8.svg",Y2="/assets/tmo-graph-5c84bcaf.svg",Q2="/assets/tmo-stockup-f72dcca7.svg",J2=p.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,V2=p.div`
  width: 180px;
  height: 164px;
  background: url(${B2}) no-repeat top center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 1;
    width: 100%;
    height: auto;
  }
`,X2=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  img {
    width: 60%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding-top: 5px;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.15em;
    line-height: 1.3em;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  p {
    color: #666666;
    font-size: 55%;
    text-align: center;
  }

  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,K2=p.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: 0px auto;
  padding: 2%;
  background: rgb(242, 242, 242);
`,q2=p.div`
  width: fit-content;
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 2%;
  font-size: 1.3em;
  font-family: "swis721 bold", helvetica, arial, sans-serif;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  background: #000000;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 2.2em;
    line-height: 1;
  }
`,_2=p.div`
  padding: 16px;
  text-align: center;
  font-size: 1em;
  font-family: "swis721 roman", helvetica, arial, sans-serif;
  color: #575757;
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`,$2=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Go=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0;
    padding: 0;
    font-size: 1.8em;
    line-height: 1;
    color: #444444;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 3em;
    line-height: 1;
    color: #e20074;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1;
    color: #444444;
    text-transform: uppercase;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  img {
    width: 120px;
    height: 120px;
  }
`,ej=p.div`
  padding-top: 20px;
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,tj=p.div`
  display: flex;
  width: 100%;
  height: 360px;
  flex-direction: column;
  align-items: stretch;
  margin: 0px auto;
  padding: 2% 0 0 0;
  background: rgb(238, 238, 238);
  @media (min-width: 768px) {
    height: 540px;
  }
`,Tr=p.div`
  width: fit-content;
  height: auto;
  text-align: center;
  margin: 12px;
  padding: 2%;
  font-size: 1.1em;
  font-family: "swis721 bold", helvetica, arial, sans-serif;
  font-weight: 600;
  line-height: 0.8;
  text-transform: uppercase;
  background: #000000;
  color: #ffffff;
  @media (min-width: 768px) {
    padding: 16px 20px;
    font-size: 1.8em;
    line-height: 1;
  }
`,ij=p.div`
  flex: 1;
  background: url(${Y2}) no-repeat center bottom;
  background-size: contain;

  div:nth-child(1) {
    margin: 12px 12px 12px 10%;
  }
  div:nth-child(2) {
    margin: 12px 12px 12px 20%;
  }
  div:nth-child(3) {
    margin: 12px 12px 12px 6%;
    background: #e20074;
  }
  div:nth-child(4) {
    margin: 12px 12px 12px 12%;
    background: #e20074;
  }
`,nj=p.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 4% 4% 4%;
  background: #e20074;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,rj=p.div`
  flex: 1;
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  p {
    font-size: 1.2em;
    line-height: 1.3em;
    font-family:
      swis721 roman,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      text-align: left;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,lj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  h5 {
    margin: 16px 0 0 0;
    padding: 0;
    font-size: 1.6em;
    text-align: center;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  p {
    margin: 0;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
    font-family:
      swis721 roman,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }

  img {
    align-self: center;
    width: 75%;
    height: auto;
  }
`;function oj(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(J2,{children:[e.jsx(V2,{}),e.jsxs(X2,{children:[e.jsx("h2",{children:"SIGN UP FOR A T-MOBILE PLAN AND GET FREE STUFF. EVERY WEEK."}),e.jsx("img",{src:Z2,alt:"Introducing T-Mobile Tuesdays. Free Stuff. Every Week."}),e.jsxs("h3",{children:["Plus, Get Thanked with a share of Un-carrier stock.",e.jsx("br",{}),"Just for being a customer."]}),e.jsx("br",{}),e.jsxs("h4",{children:[e.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),e.jsx("br",{}),e.jsxs("p",{children:["Qualifying plan req'd. For best experience use App. Obtain prospectus by calling toll free 1-855-256-9253 or visiting",e.jsx("u",{children:"http://www.t-mobile.com/prospectus"}),"."]})]})]}),e.jsxs(K2,{children:[e.jsx(q2,{children:"Get Free Stuff Every Tuesday"}),e.jsx(_2,{children:"Just for being a customer. No hoops. No strings."}),e.jsxs($2,{children:[e.jsxs(Go,{children:[e.jsx("h3",{children:"Free"}),e.jsx("h4",{children:"Pizza"}),e.jsx("img",{src:L2,border:"0",alt:"Domino's Pizza"}),e.jsx("h5",{children:"A Medium 2 Topping Pizza"})]}),e.jsxs(Go,{children:[e.jsx("h3",{children:"Free"}),e.jsx("h4",{children:"Movies"}),e.jsx("img",{src:W2,border:"0",alt:"Vudu"}),e.jsx("h5",{children:"A Movie with Vudu"})]}),e.jsxs(Go,{children:[e.jsx("h3",{children:"Free"}),e.jsx("h4",{children:"Treats"}),e.jsx("img",{src:O2,border:"0",alt:"Wendy's"}),e.jsx("h5",{children:"A Wendy's Frosty"})]})]}),e.jsx(ej,{children:e.jsxs("h4",{children:[e.jsx("span",{children:"Call now! "}),"(800)-555-1234"]})})]}),e.jsx(tj,{children:e.jsxs(ij,{children:[e.jsx(Tr,{children:"We're also making you"}),e.jsx(Tr,{children:"an owner of the compnay"}),e.jsx(Tr,{children:"Get your share of"}),e.jsx(Tr,{children:"Un-Carrier Stock"})]})}),e.jsxs(nj,{children:[e.jsxs(rj,{children:[e.jsxs("p",{children:["You’re more than just a customer to us. So we’re giving you the biggest thanking of all by making you an owner in the Un-carrier with a share of the company.",e.jsx("br",{}),e.jsx("br",{}),"Sign up with T-Mobile today and claim your free share of stock. Shares will be available in the app within 3 weeks of joining T‑Mobile."]}),e.jsxs("h4",{children:[e.jsx("span",{children:"Call now! "}),"(800)-555-1234"]})]}),e.jsxs(lj,{children:[e.jsx("img",{src:Q2}),e.jsx("h5",{children:"REFER A FRIEND FOR EVEN MORE SHARES"}),e.jsx("p",{children:"Increase your ownership stake with a share of stock for every friend or family member you bring to T‑Mobile."})]})]})]})}function sj(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Tuesdays",url:"/T-Mobile/Tuesdays"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"T-Mobile Tuesdays",children:[e.jsx("b",{children:"Front End Developer"}),e.jsx("br",{}),"The T-Mobile Tuesdays click to call landing page campaign was part of T-Mobile's 11th Un-Carrier initiative ",e.jsx("b",{children:"#GetThanked"}),` in which they announced the T-Mobile Tuesdays app. The app "thanked" T-Mobile customers with free stuff and prizes from Gilt, Domino's, StubHub, Wendy's, VUDU, Fandango, Legendary Pictures and Universal Pictures, Lyft and more. In addition, the campaign introduced Stock Up, a program that offered a full share of T-Mobile US (TMUS) common stock to existing and new customers. Customers could also grow their ownership up to 100 shares a year by referring new customers to T-Mobile.`]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(oj,{})})]})]})}const aj="/assets/hero-646eec68.jpg",dj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjZDQzUyRjM4MDAyMTFFNUEyODk5MjgxNEZDNTY5NTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjZDQzUyRjQ4MDAyMTFFNUEyODk5MjgxNEZDNTY5NTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNkNDNTJGMTgwMDIxMUU1QTI4OTkyODE0RkM1Njk1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNkNDNTJGMjgwMDIxMUU1QTI4OTkyODE0RkM1Njk1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlfkRBQAAACrSURBVHjatNZZCoAwDARQzf3vW0EpCopL7ZJlRvD7QdtkZl5SEpGJ9sm2rjlnInD8VOM6HJ7xnD7J+FwvwyjfD9yoPFCsUZ8AoNEcMZTRm2GIMVgScWO8hYKGas1FDO0edRuGRe0zbEngMMxRYzU8WWYynGGpN/xprDRCca8xon1iaAAKS9/ANKKOAatcLQPZ6aoGuDT+DXwrLQxK7X0brF59G8Tifhq7AAMAYW26wOPPbAEAAAAASUVORK5CYII=",cj="/assets/mobile-a22ccdb5.svg",fj="/assets/travel-295a034e.svg",hj="/assets/nodolla-fba8bf48.svg",pj=p.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #000000;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,Aj=p.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;

  img {
    width: 60%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
    &:nth-child(2) {
      color: #ffffff;
      font-size: 2rem;
    }
    &:nth-child(3) {
      font-size: 1.3rem;
    }
  }
  h3 {
    margin: 0 auto;
    padding: 12px;
    color: #ffffff;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h6 {
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: normal;
    text-align: center;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.6em;
      &:nth-child(2) {
        color: #ffffff;
        font-size: 3.3rem;
      }
      &:nth-child(3) {
        font-size: 2.1rem;
      }
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,uj=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${aj}) no-repeat center center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-size: contain;
  }
`,Tc=p.div`
  padding: 24px;
  text-align: center;
  background-color: #e20074;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    margin: 0 auto;
    padding: 0 0 12px 0;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    padding: 3%;
    h2 {
      margin: 0 20%;
      font-size: 2.9em;
    }
    h3 {
      margin: 0 22%;
      font-size: 1.65em;
    }
  }
`,gj=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #e20074;
  background: url(${dj});
  border-left: 8px solid #e20074;
  border-right: 8px solid #e20074;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Bo=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  img {
    width: 120px;
    height: 120px;
  }
`;function xj(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(pj,{children:[e.jsxs(Aj,{children:[e.jsx("h2",{children:"NOW CALL AND TEXT IN"}),e.jsx("h2",{children:"MEXICO & CANADA"}),e.jsx("h2",{children:"JUST LIKE YOU DO IN THE U.S."}),e.jsx("h3",{children:"Unlimited calling to Mexico and Canada from the U.S. Plus, get 4G LTE data and unlimited calling and texting when you’re in Mexico and Canada, just like in the U.S."}),e.jsxs("h4",{children:[e.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),e.jsx("h6",{children:"Device, network & coverage impact experience and speeds, which vary. Image does not depict coverage."})]}),e.jsx(uj,{})]}),e.jsxs(Tc,{children:[e.jsx("h3",{children:"Our new simple choice plans include coverage in 3 countries for the price of 1"}),e.jsx("h2",{children:"U.S., Mexico, and Canada"})]}),e.jsxs(gj,{children:[e.jsxs(Bo,{children:[e.jsx("img",{src:cj,border:"0"}),e.jsx("h5",{children:"Unlimited calling to and from the U.S. to any number, including mobile phones, in Mexico and Canada."})]}),e.jsxs(Bo,{children:[e.jsx("img",{src:fj,border:"0"}),e.jsx("h5",{children:"Now when you travel throughout the U.S., Mexico, & Canada your phone works the same with 4G LTE data and unlimited calling and texting."})]}),e.jsxs(Bo,{children:[e.jsx("img",{src:hj,border:"0"}),e.jsx("h5",{children:"No other plan includes this much freedom and flexibility at no extra charge."})]})]}),e.jsxs(Tc,{children:[e.jsx("h2",{children:"Call now! (800)-555-1234"}),e.jsx("h6",{children:"Coverage not available in some areas"})]})]})}function mj(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"3 for 1",url:"/T-Mobile/3for1"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"3 Countries for the Price of 1",children:[e.jsx("b",{children:"Front End Developer"}),e.jsx("br",{}),"The 3 Countries for the Price of 1 click to call landing page campaign was part of T-Mobile's Simple Choice announcement. T-Mobile had expanded its coverage. Unlimited calling in the U.S., Mexico, and Canada was now is automatically included with our new Simple Choice plans. This also included 4G LTE data and unlimited talk and text in either country at no extra charge."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(xj,{})})]})]})}const yj="/assets/jodgirl-212a6b24.png",jj="/assets/jodlogo-2880aecb.svg",mp="/assets/jump-tile-057d89b8.png",wj="/assets/newphone-ce42de85.svg",bj="/assets/nodolla-fba8bf48.svg",vj="/assets/calendar-1cf74aa8.svg",Sj=p.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background-image: url(${mp});

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,kj=p.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;

  img {
    width: 60%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
    &:nth-child(2) {
      color: #ffffff;
      font-size: 2rem;
    }
    &:nth-child(3) {
      font-size: 1.3rem;
    }
  }
  h3 {
    margin: 0 auto;
    padding: 12px;
    color: #ffffff;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h6 {
    padding-top: 0;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: normal;
    text-align: center;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 2.6em;
      &:nth-child(2) {
        color: #ffffff;
        font-size: 3.3rem;
      }
      &:nth-child(3) {
        font-size: 2.1rem;
      }
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,Ij=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${yj}) no-repeat center center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom right;
    background-size: contain;
  }
`,yp=p.div`
  padding: 24px 24px 0 24px;
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
  }
  h6 {
    font-weight: normal;
    color: #444444;
  }
`,zj=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Zo=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;

    > strong {
      color: #000000;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
    }
  }
  img {
    width: 120px;
    height: 120px;
  }
`,Ej=p(yp)`
  padding: 24px;
  background-image: url(${mp});
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function Mj(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(Sj,{children:[e.jsxs(kj,{children:[e.jsx("img",{src:jj,border:"0"}),e.jsx("h3",{children:"Get the phone you want when you want up to 3X a year."}),e.jsxs("h4",{children:[e.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),e.jsx("h6",{children:"For eligible devices. At participating stores."})]}),e.jsx(Ij,{})]}),e.jsxs(yp,{children:[e.jsx("h2",{children:"Don’t get stuck with a phone you don’t want!"}),e.jsx("h3",{children:"Don’t get stuck with a phone you don’t want! With JUMP! On Demand, a new upgrade program only from T-Mobile, you can switch to the latest phones with no waiting period or upgrade fees. Simply trade in your phone for a new one whenever you want up to three times a year. Available on select smartphones."})]}),e.jsxs(zj,{children:[e.jsxs(Zo,{children:[e.jsx("img",{src:wj,border:"0"}),e.jsxs("h5",{children:[e.jsx("strong",{children:"Zero Upfront"}),e.jsx("br",{}),"Switch to a new phone whenever you want and pay nothing upfront."]})]}),e.jsxs(Zo,{children:[e.jsx("img",{src:bj,border:"0"}),e.jsxs("h5",{children:[e.jsx("strong",{children:"Zero at Upgrade"}),e.jsx("br",{}),"Never pay to upgrade—just trade in your unwanted device."]})]}),e.jsxs(Zo,{children:[e.jsx("img",{src:vj,border:"0"}),e.jsxs("h5",{children:[e.jsx("strong",{children:"Zero Waiting"}),e.jsx("br",{}),"Why wait 2 years to upgrade when you don’t have to?"]})]})]}),e.jsxs(Ej,{children:[e.jsx("h2",{children:"Call now! (800)-555-1234"}),e.jsx("h6",{children:"Offer not available in some areas"})]})]})}function Dj(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Jump",url:"/T-Mobile/Jump"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"JUMP! On Demand",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The JUMP! On Demand click to call landing page campaign was part of T-Mobile's introduction of JUMP!, an on-demand service for customers to swap old smartphones for a new smartphone up to 3x per year with zero upfront costs and zero upgrade charges."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(Mj,{})})]})]})}const Nj="/assets/grocerycart-49c511ba.png",Uj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjZDQzUyRjM4MDAyMTFFNUEyODk5MjgxNEZDNTY5NTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjZDQzUyRjQ4MDAyMTFFNUEyODk5MjgxNEZDNTY5NTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNkNDNTJGMTgwMDIxMUU1QTI4OTkyODE0RkM1Njk1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNkNDNTJGMjgwMDIxMUU1QTI4OTkyODE0RkM1Njk1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlfkRBQAAACrSURBVHjatNZZCoAwDARQzf3vW0EpCopL7ZJlRvD7QdtkZl5SEpGJ9sm2rjlnInD8VOM6HJ7xnD7J+FwvwyjfD9yoPFCsUZ8AoNEcMZTRm2GIMVgScWO8hYKGas1FDO0edRuGRe0zbEngMMxRYzU8WWYynGGpN/xprDRCca8xon1iaAAKS9/ANKKOAatcLQPZ6aoGuDT+DXwrLQxK7X0brF59G8Tifhq7AAMAYW26wOPPbAEAAAAASUVORK5CYII=",Rj="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEE2NTlGMTc4ODZEMTFFNTkwQjVENDY4QjA0QzZGRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEE2NTlGMTg4ODZEMTFFNTkwQjVENDY4QjA0QzZGRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNEFGRjIwMDg4M0YxMUU1OTBCNUQ0NjhCMDRDNkZGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QTY1OUYxNjg4NkQxMUU1OTBCNUQ0NjhCMDRDNkZGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps8oZrQAAADqSURBVHjaYmQgAbCvF1cAUglA/OBn4MsF////Z2AhQbMAkDoPxAJI/AlMJDigAKYZCvxBBCkGxKPxFxJtANC5IH8rIAmBw4AUF9Sj8RthDCYybP8AxBtgHBZoaPZDFV0AOq2QgO0TgWo+ILsgAYodQCENNLCAgO0TkE3D5oV6aIIhaDvMAFBoPkASA3sJaIgDIdvBBkBNTEQTDwDi+YRsh3sBKHEAOWShQAGNvwBbLCGHQSLUmdjAAqAlD/AaAHVeIw4DcImjxgLQEFAgHSDWdlzRWIjkFXyuAgNGPAWHAjTT4LQdVKAABBgAgPxW2QJ4J6sAAAAASUVORK5CYII=",Tj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #efefef;
  background-image: url(${Uj});

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,Fj=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${Nj}) no-repeat center center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
  }
`,Pj=p.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4%;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
    &:nth-child(2) {
      font-size: 2.8rem;
    }
  }
  h3 {
    margin: 0 auto;
    padding: 0 12px;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.6em;
    line-height: 1em;
    text-align: center;
    &:nth-child(5) {
      font-size: 3.2rem;
    }
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h5 {
    margin: 0 auto;
    padding: 12px;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h6 {
    color: #777777;
    font-size: 0.6rem;
    font-weight: normal;
    text-align: center;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 1.8em;
      &:nth-child(2) {
        font-size: 3.7rem;
      }
    }
    h3 {
      font-size: 1.9em;
      line-height: 1em;
      &:nth-child(5) {
        font-size: 3.7rem;
      }
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,tl=p.div`
  padding: 24px 24px 0 24px;
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
  }
  h6 {
    font-weight: normal;
    color: #444444;
  }
`,Cj=p.ul`
  padding: 0 2% 0 12%;
  list-style-image: url(${Rj});

  li {
    margin: 0;
    padding: 0;
    font-family: "swis721 roman", "Open Sans", sans-serif;
    font-size: 1.2em;
    line-height: 1.4em;
    color: #000000;
    text-align: left;
  }
  @media (min-width: 768px) {
    column-count: 2;
    li {
      font-size: 1.2em;
      line-height: 2em;
    }
  }
`,Hj=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 0 4% 2% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Fc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;

    > strong {
      font-size: 3.6em;
      line-height: 1.3em;
      color: #000000;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
      > span {
        font-size: 1.6rem;
      }
    }
  }
`,Gj=p(tl)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function Bj(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(Tj,{children:[e.jsx(Fj,{}),e.jsxs(Pj,{children:[e.jsx("h2",{children:"We’ve changed the game for"}),e.jsx("h2",{children:"Pay as You GO!"}),e.jsx("h5",{children:"Get the talk and text you need, right when you need it. Add data as you go. All with no credit check and no annual contract."}),e.jsx("h3",{children:"Prepaid Pay As You Go Plans"}),e.jsx("h3",{children:"$3/mo"}),e.jsx("h5",{children:"Get any combination of 30 minutes of talk or 30 texts."}),e.jsxs("h4",{children:[e.jsx("span",{children:"ORDER NOW! CALL "}),"(800)-555-1234"]}),e.jsx("h6",{children:"Capable device required for 4G LTE speeds. Coverage not available in some areas."})]})]}),e.jsxs(tl,{children:[e.jsx("h2",{children:"Prepaid Pay As You Go Plans"}),e.jsxs(Cj,{children:[e.jsx("li",{children:"No annual service contract"}),e.jsx("li",{children:"No credit check"}),e.jsx("li",{children:"No deposit"}),e.jsx("li",{children:"Keep your phone number from month to month"}),e.jsx("li",{children:"All on T-Mobile’s nationwide network"})]})]}),e.jsxs(tl,{children:[e.jsx("h2",{children:"Want more? No problem."}),e.jsx("h3",{children:"Add additional talk and text at a low flat rate of 10 cents per minute/message (sending and receiving)."})]}),e.jsxs(tl,{children:[e.jsx("h2",{children:"Add a high-speed data pass."}),e.jsx("h3",{children:"Need high-speed data? Our flexible passes will keep you streaming and downloading at 4G LTE speeds, plus each pass includes Smartphone Mobile HotSpot."})]}),e.jsxs(Hj,{children:[e.jsx(Fc,{children:e.jsxs("h5",{children:[e.jsxs("strong",{children:["$5",e.jsx("span",{children:"/DAY"})]}),e.jsx("br",{}),"Daily pass—up to 500MB 4G LTE data"]})}),e.jsx(Fc,{children:e.jsxs("h5",{children:[e.jsxs("strong",{children:["$10",e.jsx("span",{children:"/week"})]}),e.jsx("br",{}),"Weekly pass—up to 1GB of 4G LTE data"]})})]}),e.jsxs(Gj,{children:[e.jsx("h2",{children:"Call now! (800)-555-1234"}),e.jsx("h6",{children:"Offer not available in some areas"})]})]})}function Zj(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Pay As You Go",url:"/T-Mobile/Pay"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Pay As You Go",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The Pay As You Go click to call landing page campaign was part of T-Mobile's prepaid pay as you go plans which offered no annual contract, no credit check, no deposit, and nationwide coverage. The campaign also offered high-speed data passes with daily and weekly rates for streaming and downloading at 4G LTE. Passes also included Smartphone Mobile HotSpot."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(Bj,{})})]})]})}const Lj="/assets/prehero-0139df76.png",Wj="/assets/byod-d73cced5.png",Oj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(${Lj}) no-repeat top center;
  background-size: cover;
`,Yj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Qj=p.div`
  flex: 2;
`,Jj=p.div`
  flex: 3;
  padding: 4% 4% 0 4%;
  line-height: 0rem;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  h3 {
    margin: 0;
    padding: 20px 0;
    font-size: 1.2em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  h5 {
    margin: 0;
    padding: 0;
    font-size: 1.2em;
    line-height: 1em;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3em;
    }
    h3 {
      font-size: 1.4em;
      line-height: 1.2em;
    }
  }
`,Vj=p.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 8px;
  padding: 20px 0 8% 0;
  @media (min-width: 768px) {
    padding: 20px 0 8% 0;
    grid-template-columns: repeat(3, 1fr);
  }
`,Lo=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 200px;
  padding: 0;

  h2 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.2em;
    line-height: 1.3em;
    color: #444444;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;

    > strong {
      font-size: 6em;
      line-height: 1.3rem;
      color: #e20074;
      font-family: "swis721 bold", helvetica, arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
      > span {
        font-size: 0.8rem;
        color: #000000;
      }
      > sup {
        position: relative;
        top: -24px;
        font-size: 1.2rem;
        line-height: 0rem;
      }
    }
  }
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.8em;
    line-height: 1rem;
    color: #e20074;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  h4 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1em;
    line-height: 0.1rem;
    color: #000000;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 0.6em;
    line-height: 0.6rem;
    color: #000000;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
    font-weight: 600;
    text-align: center;
  }
`,Xj=p.div`
  padding: 24px 24px 0 24px;
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
  }
  h6 {
    font-weight: normal;
    color: #444444;
  }
`,Kj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,qj=p.div`
  flex: 1;
  min-height: 200px;
  background: url(${Wj}) no-repeat center center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 2;
  }
`,_j=p.div`
  flex: 3;
  padding: 24px;
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #e20074;
    font-family: "swis721 bold", helvetica, arial, sans-serif;
    font-weight: 600;
  }
  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1em;
    line-height: 1.2em;
    color: #000000;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
  }
  h6 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 0.6em;
    line-height: 1.2em;
    color: #777777;
    font-family: "swis721 roman", helvetica, arial, sans-serif;
  }
`,$j=p(Xj)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function ew(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(Oj,{children:[e.jsxs(Yj,{children:[e.jsx(Qj,{}),e.jsxs(Jj,{children:[e.jsx("h2",{children:"We’re breaking the rules of prepaid."}),e.jsx("h3",{children:"Don’t settle for second-rate prepaid wireless."}),e.jsx("h5",{children:"Get 4G LTE data and unlimited talk and text with no data overages, no credit check, and no annual contract. All on T-Mobile's Nationwide 4G LTE Network."}),e.jsx("br",{}),e.jsx("h3",{children:"Choose from three Simply Prepaid plans:"})]})]}),e.jsxs(Vj,{children:[e.jsxs(Lo,{children:[e.jsx("h2",{children:e.jsxs("strong",{children:[e.jsx("sup",{children:"$"}),"40",e.jsx("span",{children:"/ month"})]})}),e.jsx("h3",{children:"4G LTE DATA"}),e.jsxs("h4",{children:["UNLIMITED TALK & TEXT",e.jsx("sup",{children:"*"})]}),e.jsx("h5",{children:"on our network + up to 1GB of 4G LTE"})]}),e.jsxs(Lo,{children:[e.jsx("h2",{children:e.jsxs("strong",{children:[e.jsx("sup",{children:"$"}),"50",e.jsx("span",{children:"/ month"})]})}),e.jsx("h3",{children:"4G LTE DATA"}),e.jsxs("h4",{children:["UNLIMITED TALK & TEXT",e.jsx("sup",{children:"*"})]}),e.jsx("h5",{children:"on our network + up to 3GB of 4G LTE"})]}),e.jsxs(Lo,{children:[e.jsx("h2",{children:e.jsxs("strong",{children:[e.jsx("sup",{children:"$"}),"60",e.jsx("span",{children:"/ month"})]})}),e.jsx("h3",{children:"4G LTE DATA"}),e.jsxs("h4",{children:["UNLIMITED TALK & TEXT",e.jsx("sup",{children:"*"})]}),e.jsx("h5",{children:"on our network + up to 5GB of 4G LTE"})]})]})]}),e.jsxs(Kj,{children:[e.jsx(qj,{}),e.jsxs(_j,{children:[e.jsxs("h3",{children:["Got your own device?",e.jsx("br",{}),"Bring it."]}),e.jsxs("h5",{children:["Bring your device over to T-Mobile and sign up for new prepaid services without an annual service contract or credit check. A simple switch of your sim card could get you unlimited talk, text and data on our nationwide 4G LTE network.",e.jsx("br",{}),e.jsx("br",{}),"Call now to sign up for new services, or to add a new line to your existing account."]}),e.jsx("h6",{children:"Your device must be compatible with our network and capable of using a T-Mobile SIM card."})]})]}),e.jsxs($j,{children:[e.jsx("h2",{children:"Call now! (800)-555-1234"}),e.jsx("h6",{children:"Offer not available in some areas"})]})]})}function tw(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Simply Prepaid",url:"/T-Mobile/Prepaid"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Simply Prepaid",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The Simply Prepaid click to call landing page campaign was part of T-Mobile's Simply Prepaid announcement offering 3 monthly prepaid options for umlimited talk, text, and data packages. The offer also included the option to bring your own device without an annual service contract or credit check."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(ew,{})})]})]})}const iw="/assets/datahero-8dc35535.jpg",nw=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #f5f5f5;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,rw=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url(${iw}) no-repeat bottom center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom left;
  }
`,lw=p.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2%;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1em;
    color: #e20074;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
    text-transform: uppercase;
  }
  h3 {
    margin: 0 auto;
    padding: 0 12px;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.6em;
    line-height: 1em;
    text-align: center;
    &:nth-child(5) {
      font-size: 3.2rem;
    }
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #e20074;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  h5 {
    margin: 0 auto;
    padding: 12px;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.2em;
    line-height: 1.3em;
    text-align: center;
  }
  h6 {
    color: #777777;
    font-size: 0.6rem;
    font-weight: normal;
    text-align: center;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 4em;
    }
    h3 {
      font-size: 1.9em;
      line-height: 1em;
      &:nth-child(5) {
        font-size: 3.7rem;
      }
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #e20074;
      border-radius: 0;
      background: transparent;
      span {
        display: inline-block;
      }
    }
  }
`,Js=p.div`
  padding: 24px 24px 0 24px;
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin: 0 auto;
    padding: 0;
    font-size: 1.8em;
    line-height: 1em;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    text-align: center;
  }
  h3 {
    margin: 0 auto;
    padding: 12px 0 0 0;
    color: #444444;
    font-family:
      swis721 roman,
      "swis721 roman",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1em;
    line-height: 1.1em;
    text-align: center;
  }
  h6 {
    font-weight: normal;
    color: #444444;
  }
`,ow=p.ul`
  padding: 0 2% 2% 2%;

  li {
    margin: 0;
    padding: 0;
    font-family: "swis721 roman", "Open Sans", sans-serif;
    font-size: 1em;
    line-height: 1.6em;
    color: #000000;
    text-align: left;
  }
`,sw=p(Js)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function aw(){return e.jsxs(sn,{children:[e.jsx(on,{}),e.jsxs(nw,{children:[e.jsx(rw,{}),e.jsxs(lw,{children:[e.jsx("h2",{children:"Introducing Data Stash"}),e.jsx("h3",{children:"Don't lose what you don't use."}),e.jsx("h5",{children:"Now when you buy extra 4G LTE data, your unused data rolls to the next month. First, we'll start you with 10GB of Free 4G LTE data."}),e.jsxs("h4",{children:[e.jsx("span",{children:"SWITCH NOW! CALL "}),"(800)-555-1234"]}),e.jsx("h6",{children:"Qualifying service req'd. Free 10GB avail. until 12/31/15. Use free 10GB before data begins rolling, rolled data good for 12 mos."})]})]}),e.jsxs(Js,{children:[e.jsx("h2",{children:"Go ahead - Keep the data that's yours."}),e.jsx("h3",{children:"Data Stash™ lets you roll the extra unused 4G LTE data you paid for into the next month. It’s automatically included with your qualifying postpaid or prepaid Simple Choice plan, with no fees and no overage data charges, ever."})]}),e.jsxs(Js,{children:[e.jsx("h2",{children:"Here’s how it works:"}),e.jsxs(ow,{children:[e.jsx("li",{children:"Available to all T-Mobile customers on a postpaid or prepaid Simple Choice plan who purchase 3GB or more of 4G LTE data (1GB or more for postpaid tablet plans). No need to sign up – your Data Stash will begin automatically once you’ve used the up to 10GB of free 4G LTE data we give you!"}),e.jsx("li",{children:"Within a day or so of activating, you’ll have access to your one-time 10GB of Free 4G LTE data."}),e.jsx("li",{children:"Once you’ve used up your Free 10GB, you’ll automatically start rolling your unused 4G LTE data into the next month."}),e.jsx("li",{children:"At the end of the month, all your unused 4G LTE data – rounded up to the nearest megabyte – rolls into your Data Stash to be used any time in the next 12 months."})]})]}),e.jsxs(sw,{children:[e.jsx("h2",{children:"Call now! (800)-555-1234"}),e.jsx("h6",{children:"Offer not available in some areas"})]})]})}function dw(){const t=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Data Stash",url:"/T-Mobile/Stash"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(ui,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Data Stash",children:[e.jsx("b",{children:"Front End Developer"}),e.jsx("br",{}),"The Data Stash click to call landing page campaign was part of T-Mobile's introduction of Data Stash, a free service that allowed users roll unused data over to the following month."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(aw,{})})]})]})}const cw="/assets/NeueHaasGroteskDisplay-0be9d6fb.woff2",fw="/assets/NeueHaasGroteskDisplayBold-5bb59582.woff2",hw="/assets/NeueHaasGroteskDisplayMedium-dd389a25.woff2",pw="/assets/NeueHaasGroteskText-b0d6fe58.woff2",Aw="/assets/NeueHaasGroteskTextBold-d661a815.woff2",uw="/assets/NeueHaasGroteskTextMedium-c59f4768.woff2",gw="/assets/vzn-clr-1f6b4dff.svg",xw=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,mw=p.div`
  width: 148px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${gw}) no-repeat center center;
  background-size: contain;
`,yw=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #eb1d24;
    font-family: "swis721 heavy", "open sans", helvetica, arial, sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1em;
  }
`;function jw(){return e.jsxs(xw,{children:[e.jsx(mw,{}),e.jsx(yw,{children:e.jsx("h5",{children:"Order now! (800)-555-1234"})})]})}const ww="/assets/cone_s-9df4f601.png",bw="/assets/cone_m-f166f898.png",vw="/assets/cone_l-08ab7500.png",Sw="/assets/cone_xl-c99c53dc.png",kw="/assets/cone_xxl-1ab74efc.png",Iw=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Neue Hass Display;
    src: url(${cw});
  }
  @font-face {
    font-family: Neue Hass Display Med;
    src: url(${hw});
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass Display;
    src: url(${fw});
    font-weight: bold;
  }
  @font-face {
    font-family: Neue Hass;
    src: url(${pw});
  }
  @font-face {
    font-family: Neue Hass Med;
    src: url(${uw});
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass;
    src: url(${Aw});
    font-weight: bold;
  }
`,zw=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #f2f2f2;

  h1 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #cd040b;
    font-size: 4em;
    line-height: 1em;
    text-align: center;
  }
  h2 {
    margin: 0;
    padding: 12px 00;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 24px auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #cd040b;
  }
  h6 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 0.625em;
    line-height: 1.2;
    letter-spacing: -0.025em;
    font-weight: normal;
  }

  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 24px 0;
      font-size: 2em;
      color: #cd040b;
      border-radius: 0;
      background: transparent;
    }
  }
`,Ew=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 64px;
  padding: 4%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(5, 1fr);
  }
`,mn=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 175px;
  padding: 2%;

  h5 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 1.6em;
    line-height: 1em;
    color: #cd040b;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    text-align: center;
  }
  img {
    position: absolute;
    z-index: 2;
    bottom: 44px;
    right: 0px;
    width: 44px;
    height: auto;
    @media (min-width: 768px) {
      width: 50px;
    }
  }
`,yn=p.div`
  position: relative;
  display: block;
  width: 115px;
  height: 115px;
  margin: 0px auto;
  padding-top: 25px;
  color: #000000;
  text-align: center;
  font-size: 3em;
  font-weight: 700;
  font-family: "Haas Text Bold", "Open Sans", Helvetica, Arial, sans-serif;
  background: #abe0f9 none repeat scroll 0% 0%;
  border-radius: 50%;
`,Mw=p.div`
  display: flex;
  flex-direction: column;
  padding: 4%;
  h2 {
    margin: 0;
    padding: 12px 00;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-weight: bold;
    color: #000000;
    font-size: 2em;
    line-height: 1em;
    text-align: center;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1em;
    font-weight: normal;
    strong {
      color: #cd040b;
    }
  }
  h5 {
    margin: 0;
    padding: 4px 0 0 0;
    font-size: 1.2em;
    line-height: 1.4em;
    color: #000000;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    font-weight: normal;
  }
`,Dw=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 12px 4%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Nw=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #f2f2f2;
  h3 {
    margin: 0;
    padding: 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #000000;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #ffffff;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #cd040b;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #cd040b;
      border-radius: 0;
      background: transparent;
    }
  }
`;function Uw(){return e.jsxs(Iw,{children:[e.jsx(jw,{}),e.jsxs(zw,{children:[e.jsx("h1",{children:"One plan."}),e.jsx("h1",{children:"Pick a size."}),e.jsx("h1",{children:"Simple."}),e.jsx("h2",{children:"Introducing XXL. 18GB / $100."}),e.jsxs(Ew,{children:[e.jsxs(mn,{children:[e.jsx("img",{src:ww,border:"0"}),e.jsx(yn,{children:"S"}),e.jsx("h5",{children:"1GB / $30"})]}),e.jsxs(mn,{children:[e.jsx("img",{src:bw,border:"0"}),e.jsx(yn,{children:"M"}),e.jsx("h5",{children:"3GB / $45"})]}),e.jsxs(mn,{children:[e.jsx("img",{src:vw,border:"0"}),e.jsx(yn,{children:"L"}),e.jsx("h5",{children:"6GB / $60"})]}),e.jsxs(mn,{children:[e.jsx("img",{src:Sw,border:"0"}),e.jsx(yn,{children:"XL"}),e.jsx("h5",{children:"12GB / $80"})]}),e.jsxs(mn,{children:[e.jsx("img",{src:kw,border:"0"}),e.jsx(yn,{children:"XXL"}),e.jsx("h5",{children:"18GB / $100"})]})]}),e.jsx("h3",{children:e.jsx("strong",{children:"All sizes include unlimited talk and text."})}),e.jsx("h3",{children:"Call now and find your plan!"}),e.jsx("h4",{children:"(800)-555-1234"}),e.jsx("h6",{children:"Plan cost per month plus $20/month/smartphone purchased on device payment. Taxes/fees apply."})]}),e.jsxs(Mw,{children:[e.jsx("h2",{children:"What else do you get?"}),e.jsxs(Dw,{children:[e.jsxs("div",{children:[e.jsx("h3",{children:e.jsx("strong",{children:"Share Data."})}),e.jsx("h5",{children:"Share your data with family and across your devices."})]}),e.jsxs("div",{children:[e.jsx("h3",{children:e.jsx("strong",{children:"Switch sizes anytime."})}),e.jsx("h5",{children:"If you need more data, you can switch sizes any time. And if you’d rather not switch, each extra GB is only $15.Share your data with family and across your devices."})]}),e.jsxs("div",{children:[e.jsx("h3",{children:e.jsx("strong",{children:"All on the best network."})}),e.jsx("h5",{children:"Enjoy the largest and most reliable 4G LTE network in the country. More coverage, faster speeds and better connection."})]})]})]}),e.jsxs(Nw,{children:[e.jsx("h3",{children:"Call now and find your plan!"}),e.jsx("h4",{children:"(800)-555-1234"})]})]})}function Rw(){const t=[{text:"Verizon",url:"/Verizon"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:O0,alt:"Verizon"}),e.jsxs(W,{children:[e.jsxs(Y,{title:"Introducing XXL",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The XXL click to call landing page campaign was part of Verizon's introduction of a 5th data pricing option to simple size plans. All sizes included unlimited talk and text with varying amounts of data at varying price points. Also included was cross-device data sharing, the ability to switch between plans, and full nationwide coverage."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(Uw,{})})]})]})}const Tw="/assets/omnesatt-medium-d29c62c4.woff",Fw="/assets/omnesatt-regular-255ab71c.woff",Pw="/assets/omnesatt-light-fab09655.woff",Cw="/assets/att-logo-c8ea9484.svg",Hw="/assets/hero_outdoors-3cf21a05.jpg",Gw="/assets/circle_water-7a3dc869.png",Bw="/assets/icon_water-9f8bcebc.png",Zw="/assets/circle_fire-754a3d6e.png",Lw="/assets/icon_security-26c77026.png",Ww="/assets/circle_lock-890f38b5.png",Ow="/assets/icon_door-f46a33dc.png",Yw="/assets/circle_remote-8fa517b2.png",Qw="/assets/icon_alerts-12303961.png",Jw="/assets/circle_bulb-8c6953ca.png",Vw="/assets/icon_panel-8c19c848.png",Xw="/assets/circle_garage-23aece28.png",Kw="/assets/icon_program-8a943980.png",qw="/assets/circle_video-853fbd02.png",_w="/assets/icon_monitor-ae882657.png",$w="/assets/700-6637b66f.png",eb="/assets/1200-e7b2fb59.png",tb="/assets/1700-ececfcc7.png",ib=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: ATT Bold;
    src: url(${Tw});
    font-weight: bold;
  }
  @font-face {
    font-family: ATT Regular;
    src: url(${Fw});
    font-weight: normal;
  }
  @font-face {
    font-family: ATT Light;
    src: url(${Pw});
    font-weight: light;
  }
`,nb=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #f2f2f2;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,rb=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${Cw}) no-repeat center;
  background-size: cover;
`,lb=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #009ede;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: bold;

    span {
      color: #000000;
      font-family:
        "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`,ob=p.div`
  padding: 0 20px;
  background: linear-gradient(
    to bottom,
    rgba(254, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
`,sb=p.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: url(${Hw}) no-repeat center center;
  background-size: cover;
`,gi=p.div`
  position: absolute;
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,ab=p(gi)`
  top: 82%;
  left: 10%;
  background: url(${Gw}) no-repeat center center;
  background-size: contain;
`,db=p(gi)`
  top: 43%;
  left: 26%;
  background: url(${Zw}) no-repeat center center;
  background-size: contain;
`,cb=p(gi)`
  top: 64%;
  left: 40%;
  background: url(${Ww}) no-repeat center center;
  background-size: contain;
`,fb=p(gi)`
  top: 44%;
  left: 50%;
  background: url(${Yw}) no-repeat center center;
  background-size: contain;
`,hb=p(gi)`
  top: 26%;
  left: 63%;
  background: url(${Jw}) no-repeat center center;
  background-size: contain;
`,pb=p(gi)`
  top: 68%;
  left: 68%;
  background: url(${Xw}) no-repeat center center;
  background-size: contain;
`,Ab=p(gi)`
  top: 42%;
  left: 92%;
  background: url(${qw}) no-repeat center center;
  background-size: contain;
`,ub=p.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    top: -42px;
    column-gap: 0px;
    row-gap: 0px;
    padding: 0 20px;
  }
  @media (min-width: 960px) {
    top: -62px;
  }
`,Kt=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;

  img {
    display: none;
  }

  h5 {
    margin: 0;
    padding: 12px;
    color: #ffffff;
    font-size: 1em;
    line-height: 1em;
    font-family:
      "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
    text-align: center;
    background: #009ede;
  }
  @media (min-width: 768px) {
    min-width: 12%;
    padding: 0 12px;

    h5 {
      padding: 12px 0 0 0;
      color: #000000;
      background: transparent;
      font-size: 0.8em;
      line-height: 0.8em;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  @media (min-width: 960px) {
    min-width: 14%;
    h5 {
      font-size: 1em;
      line-height: 1em;
    }
  }
`,gb=p.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;

  h2 {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family:
      "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
  }
  h6 {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family:
      "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
  }
`,xb=p.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  column-gap: 20px;
  row-gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Wo=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 32px 20px;
  border: 1px solid #ccc;

  &:nth-child(1) {
    background: url(${$w}) no-repeat top right;
  }
  &:nth-child(2) {
    background: url(${eb}) no-repeat top right;
  }
  &:nth-child(3) {
    background: url(${tb}) no-repeat top right;
  }

  h2 {
    padding: 12px 0 0 0;
    font-size: 4em;
    line-height: 1em;
    font-family: "ATT Bold", "Open Sans", Helvetica, Arial, sans-serif;
    color: #078cc5;
    text-align: center;
    sup {
      font-size: 0.4em;
      line-height: 0.6rem;
    }
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1em;
    font-family:
      "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
    color: #000000;
    text-align: center;
  }
  h4 {
    margin: 0;
    padding: 0;
    font-size: 1.2em;
    line-height: 1em;
    font-family:
      "ATT Light", "ATT Reg", "Open Sans", Helvetica, Arial, sans-serif;
    color: #078cc5;
    text-align: center;
  }
  p {
    margin: 0;
    padding: 12px 0 0 0;
    font-size: 1em;
    line-height: 1.2em;
    color: #000000;
    text-align: center;
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3em;
    }
    h3 {
      font-size: 1.4em;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 4em;
    }
    h3 {
      font-size: 2em;
    }
  }
`,mb=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #078cc5;
  h3 {
    margin: 0;
    padding: 0 0 12px 0;
    font-family:
      Neue Hass Text,
      helvetica,
      arial,
      sans-serif;
    color: #ffffff;
    font-size: 1.6em;
    line-height: 1.4em;
    font-weight: normal;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #078cc5;
    font-family:
      Neue Hass Display,
      helvetica,
      arial,
      sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
    }
  }
`;function yb(){return e.jsxs(ib,{children:[e.jsxs(nb,{children:[e.jsx(rb,{}),e.jsx(lb,{children:e.jsxs("h5",{children:[e.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),e.jsxs(ob,{children:[e.jsxs(sb,{children:[e.jsx(ab,{}),e.jsx(db,{}),e.jsx(cb,{}),e.jsx(fb,{}),e.jsx(hb,{}),e.jsx(pb,{}),e.jsx(Ab,{})]}),e.jsxs(ub,{children:[e.jsxs(Kt,{children:[e.jsx("img",{src:Bw,border:"0"}),e.jsxs("h5",{children:["Water",e.jsx("br",{}),"Detection*"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:Lw,border:"0"}),e.jsxs("h5",{children:["Fire & CO2",e.jsx("br",{}),"Monitoring"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:Ow,border:"0"}),e.jsxs("h5",{children:["Professional",e.jsx("br",{}),"Monitoring"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:Qw,border:"0"}),e.jsxs("h5",{children:["Text &",e.jsx("br",{}),"Email Alerts"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:Vw,border:"0"}),e.jsxs("h5",{children:["Lighting &",e.jsx("br",{}),"Thermostat"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:Kw,border:"0"}),e.jsxs("h5",{children:["Remote",e.jsx("br",{}),"Access"]})]}),e.jsxs(Kt,{children:[e.jsx("img",{src:_w,border:"0"}),e.jsxs("h5",{children:["Video",e.jsx("br",{}),"Monitoring"]})]})]})]}),e.jsxs(gb,{children:[e.jsx("h2",{children:"AT&T Digital Life gives you a simple way to help you stay connected to your home when you're away. With three affordable packages, you pick the level of smart home security that's right for you.*"}),e.jsxs(xb,{children:[e.jsxs(Wo,{children:[e.jsx("h3",{children:"Smart Security Package"}),e.jsxs("h2",{children:[e.jsx("sup",{children:"$"}),"29.99"]}),e.jsx("h4",{children:"includes $700 in equipment if purchased separately."}),e.jsx("p",{children:"Home security with window and door sensors, a motion sensor and indoor siren.*"})]}),e.jsxs(Wo,{children:[e.jsx("h3",{children:"Smart Security and Automation Package"}),e.jsxs("h2",{children:[e.jsx("sup",{children:"$"}),"49.99"]}),e.jsx("h4",{children:"includes $1,200 in equipment if purchased separately."}),e.jsx("p",{children:"Get everything in the Smart Security package, plus an outdoor video camera package and remote access door lock package.*"})]}),e.jsxs(Wo,{children:[e.jsx("h3",{children:"Premium Security and Automation Package"}),e.jsxs("h2",{children:[e.jsx("sup",{children:"$"}),"99.99"]}),e.jsx("h4",{children:"includes $1,700 in equipment if purchased separately."}),e.jsx("p",{children:"Get everything in the Smart Security and Automation package plus energy package with thermostat and lighting control, and water detection package.*"})]})]}),e.jsx("h6",{children:"*Digital Life: Ltd avail. in select mkts. 2-year security agmt. w/equip fees and monthly svc charges req'd. Door lock, thermostat/lighting control, water detection and camera functions each req. purchase of sep. automation pkg. w/sep. equip. fees & monthly svc charges or security + automation package. AT&T-Certified Like-New equip. provided. Early termination (up to $840) and other fees, chgs and restr's apply. Data charges may apply for app download and usage. Coverage and service not avail. everywhere. See below for complete details."})]}),e.jsxs(mb,{children:[e.jsx("h3",{children:"Discover how you can benefit from a smart home."}),e.jsx("h4",{children:"(800)-555-1234"})]})]})}function jb(){const t=[{text:"AT&T",url:"/ATT"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:Y0,alt:"AT&T Digital Life"}),e.jsxs(W,{children:[e.jsxs(Y,{title:"AT&T Smart Security",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The AT&T Smart Security click to call landing page campaign was part of AT&T Digital Life's introduction of home security and automation services. Users can customize the AT&T Digital Life wireless system to fit their homes. AT&T Digital Life currently offers 24/7 Professional Monitoring, Video Monitoring, Remote Door Locks, Lighting & Thermostat Control, Water Detection and Fire & Carbon Monoxide Monitoring. Users also get mobile access to arm and disarm the system, view video from security cameras, monitor sensors lock and unlock doors, and turn off devices utilizing smart plugs."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(yb,{})})]})]})}const wb="/assets/DINBk-68cd537a.woff",bb="/assets/DINBd-b02f72e0.woff",vb="/assets/DINrg-66f185e3.woff",Sb="/assets/DINMd-cb7be0d9.woff",kb="/assets/dtv-clr-cf0bf2b7.svg",Ib="/assets/home-hero-4b63d3eb.jpg",zb="/assets/check-08b54760.svg",Eb=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Din Black;
    src: url(${wb});
    font-weight: bold;
  }
  @font-face {
    font-family: Din Bold;
    src: url(${bb});
    font-weight: bold;
  }
  @font-face {
    font-family: Din;
    src: url(${vb});
    font-weight: normal;
  }
  @font-face {
    font-family: Din Med;
    src: url(${Sb});
  }
`,Mb=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #000000;
  box-shadow: 0px 2px 2px -2px #999;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Db=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${kb}) no-repeat center;
  background-size: cover;
`,Nb=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #ffd700;
    text-transform: uppercase;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`,Ub=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  background: url(${Ib}) no-repeat center center;
  background-size: cover;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Rb=p.div`
  flex: 1;
  padding: 24px;
  h2 {
    margin: 0;
    padding: 0;
    font-size: 2em;
    line-height: 1.1em;
    color: #ffffff;
    text-shadow: 1px 1px 5px #434343;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
  }
  ul {
    padding: 0 2% 2% 6%;
    list-style-image: url(${zb});

    li {
      margin: 0;
      padding: 0;
      font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
      font-size: 1.4em;
      line-height: 1.8em;
      color: #ffffff;
      text-align: left;
    }
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #000000;
    font-family:
      swis721 bold,
      "swis721 bold",
      "open sans",
      helvetica,
      arial,
      sans-serif;
    font-size: 1.4em;
    text-align: center;
    background: #ffa40f;
    border-bottom: 2px #ad6f0a solid;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    h2 {
      font-size: 3.2em;
    }
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      line-height: 1em;
      color: #ffa40f;
      border: 0;
      border-radius: 0;
      background: transparent;
      span {
        display: block;
        color: #ffa40f;
        text-shadow: 1px 1px 5px #434343;
      }
    }
  }
`,Tb=p.div`
  width: 240px;
  background: #0390c6;
  h2 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 2.8em;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
    span {
      font-size: 0.4em;
    }
  }
  h3 {
    margin: 0 10px;
    padding: 16px 10px 10px 10px;
    text-align: center;
    font-size: 2.4em;
    line-height: 0.6em;
    font-family: "Din Med", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #ffffff;
    background: #0284b3;
    span {
      font-size: 1.4rem;
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
  h4 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 1.2em;
    font-family: "Din Med", "Open Sans", Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: #ffffff;
    background: #0284b3;
  }
  h5 {
    margin: 0;
    padding: 10px;
    text-align: center;
    font-size: 0.9em;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
  }
  h6 {
    margin: 0;
    padding: 10px;
    font-size: 0.6em;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
  }
`,Fb=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 24px;
  background: #03adee;
  h3 {
    margin: 0;
    padding: 0 0 16px 0;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
    font-size: 1.6em;
    line-height: 1.2em;
    font-weight: normal;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 8px 0;
    color: #03adee;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
  }
  @media (min-width: 768px) {
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
    }
  }
`;function Pb(){return e.jsxs(Eb,{children:[e.jsxs(Mb,{children:[e.jsx(Db,{}),e.jsx(Nb,{children:e.jsxs("h5",{children:[e.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),e.jsxs(Ub,{children:[e.jsxs(Rb,{children:[e.jsx("h2",{children:"Get every Out-of-Market NFL game live Every Sunday exclusively on DIRECTV"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Every out-of-market game"}),e.jsx("li",{children:"Expert commentary"}),e.jsx("li",{children:"Fantasy player analysis"})]}),e.jsxs("h4",{children:[e.jsx("span",{children:"Call to order DIRECTV today! "}),"(800)-555-1234"]})]}),e.jsxs(Tb,{children:[e.jsx("h4",{children:"CHOICE"}),e.jsxs("h5",{children:["Get First 3 months of HBO®, STARZ®, SHOWTIME® and Cinemax® at no extra cost.",e.jsx("br",{}),e.jsx("br",{}),"2016 NFL SUNDAY TICKET included at no extra cost with CHOICE Package and above."]}),e.jsxs("h3",{children:["175+",e.jsx("br",{}),e.jsx("span",{children:"Channels"})]}),e.jsxs("h2",{children:["$60",e.jsx("span",{children:"/mo"})]}),e.jsx("h6",{children:"For 24 Months w/ 24-mo. TV agmt & other qual. AT&T service. Regional sports fee applies in certain markets."})]})]}),e.jsxs(Fb,{children:[e.jsxs("h3",{children:["Discover the DIRECTV Difference DIRECTV has the right package for every price range",e.jsx("br",{}),e.jsx("br",{}),"Call to order DIRECTV today"]}),e.jsx("h4",{children:"(800)-555-1234"})]})]})}function Cb(){const t=[{text:"DirecTV",url:"/DirecTV"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:Q0,alt:"DirectTV"}),e.jsxs(W,{children:[e.jsxs(Y,{title:"DirecTV NFL & Choice Package",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The Directv NFL & Choice Package click to call landing page campaign was part of DIRECTV's Choice Package for new customers which included 3 free months of HBO, STARZ, SHOWTIME and Cinemax. The 2016 NFL Sunday Ticket, which inlcuded every Out-of-Market NFL game live every Sunday, was also included at no extra cost."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(Pb,{})})]})]})}const Hb="/assets/ariblk-7bff8efa.ttf",Gb="/assets/dsh-wht-44d6aa87.svg",Bb="/assets/lock-white-f8c3473d.svg",Zb="/assets/channels-9f6aaf29.png",Lb="/assets/netflix-53d4b82c.png",Wb="/assets/redzone-ff217d94.png",Ob="/assets/premiums-76f20811.png",Yb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAATCAYAAAAJdPQAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNjgwMTE3NDA3MjA2ODExOEY2MjkzQTc1MDgyQUEwMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNEFGRjFGNzg4M0YxMUU1OTBCNUQ0NjhCMDRDNkZGQyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNEFGRjFGNjg4M0YxMUU1OTBCNUQ0NjhCMDRDNkZGQyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5ODAxMTc0MDcyMDY4MTE4RjYyOTNBNzUwODJBQTAzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA2ODAxMTc0MDcyMDY4MTE4RjYyOTNBNzUwODJBQTAzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PFX80wAABNdJREFUeNrUV3tQVFUY/93L3bvsk4UFZnkIA2iFkjOOI4NGRTBu2NRkOaYZaTT0+K+mmLGZ+iPHqYkJTXRGmEj9x0ZFJSrBfIxQBCgiNUCIIm8WBHZlgWXZ9+3cs7kDyAJO2Exn5sy9+33nO+e33+P3ncsIgoD/y+Ae1uDclsM6RZQmmpPyPMsxnP//el/BzJLN93umnGEYuOxOx7P7t131islpi5llLx0MNVS35xHjSuE/HB6Xu7q9tDGXZsBigFa8VhRtGTCfFY1HmvqElqPVwo19F4Tey63zHjTaPiSYO0cEr12/MN5rmqEnewqm1oEFAZvaBo+JONiFwl6+tTAy7dCOQ4qIoFdvnarHhazvUPdZGRq+/gXdl1rntR2ovYOmwio4rQ5c2/szbpc0zNCP/NmLxoLLEDzz143gdDsWzNkfXzwYkn44a58sXLX5dsl1XP38JwhuD/hgOTx2NwKkc5u7nW6M3RmGx+GGy+aARMZj/Z6Xwatl1H6sy0jXSTVympd3r3UiMESB4Md0c6fwQgVWqt+vTC/MKlDFhGzvLPvDB5ThAshTgMfjmXNft8OFWyfr6ft4jwkBnPcIWZgKXKAEXeVNmBwcAyvhIA9XwTFmJRHowGBdB/1D2lWRfsGyc4e+KDKt4PUCTUJ4lrHFgOt552l9ShRSeqBEztPJKwMfsBUB9le2YeXODYjb9CQ8ThfNe9GbtnsWuKYcMPzejvC1MQjUKsAHybD2Iz00CWEw/TWweOo6/Vw+n/hmys7M73PeCOC5NFGmjg0BoQ643V5PsjwHNoCFWJxynfpBz9pcsI1OeT3BsSQSZDKi3AmHxY6IDStImnjQ8NV5RGckErBySlXivgKExYGt+vBksv7org+C4sJ2TF/Aq2TQrU9YNA8HxYXS/Kv/shxuktfmDiPx2CDGu02wDo/DYjAj+pkV5DkKc/sQJvpHqUzUyYfV8+7NiCEq31YUvbF4VzEpgMyl6DQ2kwVDN3oIaCUkSh6qZSEkBSZBogXnpJ3mrCxMCYZlMTUyAWVMCCYJYE4qQXCijq6bPkwthm+1SVHvUakuOT55qYCKI1CrRKx+1QyZmO8+78eH+d41y8PpUxUVvOC+bHFULivVyDSzFWJYui+0UK50WZ2PrN+7CAcP1HnZwGmx+Ym/lwj+8TdzZLpOJO/GA5cgJZXqnHJCqgpEat4WaFdGLinQ4cZeVH9yljJGAGEZkOawbvcmLEt/YjYd0qbA0isDy7xzX2FsNqDxm4tIevtp6I9lQ3/kLajjQ1Hz6Q+wma1LBtQ+NoXfck8jfE0M9Eez8TyZy19ZQ8Ebm/tnrLX0mfso2HcN+R4S8uH7ir4rNxGaFIWknFQodEGU/57auxlW4yRGiCeWatyt76K0tm53JmUQ0s6x+v00BD+uQ+/lm751jgn7RdI9S3xp0F3RXEEqN1umVYQOXu0sUceHxRNxpY++1LJaTspt7DzXtNputqaKl6F/B5VBX2VbFWGEe6S5iCmY7iu+WG0GqZM2dax2hxj+nkutFzOP53T6vSKWvlCgIZ3ohPeO5qkhBnsWe5V82ElAf0GeNeJRY93GE2cy8uX+1jL+vhTObNwvj0hJSHFOTFnSDmyvf5RfAL9+fCqFk/Fyckeo3Xol1+Zv3d8CDAAOt3H15j5bXgAAAABJRU5ErkJggg==",Me="'Open Sans', Helvetica, Arial, sans-serif",Qb=p.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #ef1b4a 0%, #992786 100%);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ari Black", ${Me};
  }
  p {
    font-family: ${Me};
  }
  @font-face {
    font-family: Ari Black;
    src: url(${Hb});
    font-weight: bold;
  }
`,Jb=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  background: #ef1b4a;
  border-bottom: 2px solid #ffffff;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,Vb=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${Gb}) no-repeat center;
  background-size: cover;
`,Xb=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`,Kb=p.div`
  position: relative;
  width: 320px;
  margin: 0 40px;
  padding: 30px 0 40px 0;
  border-bottom: 3px solid #fff;
  h1 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-size: 4.8em;
    line-height: 0.9em;
    font-weight: bold;
    text-align: center;
    &:nth-child(2) {
      font-size: 2.3em;
    }
  }
  img {
    position: absolute;
    bottom: 42px;
    right: 62px;
    width: 27px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 700px;
    h1 {
      font-size: 10em;
      &:nth-child(2) {
        font-size: 4.6em;
      }
    }
    img {
      position: absolute;
      bottom: 43px;
      right: 153px;
      width: 55px;
      height: auto;
    }
  }
  @media (min-width: 960px) {
    width: 860px;
    h1 {
      font-size: 12em;
      &:nth-child(2) {
        font-size: 5.6em;
      }
    }
    img {
      position: absolute;
      bottom: 45px;
      right: 191px;
      width: 66px;
      height: auto;
    }
  }
`,qb=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0 32px 0;
  border-bottom: 3px solid #fff;
  @media (min-width: 768px) {
    width: 700px;
    flex-direction: row;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`,_b=p.div`
  flex: 1;
  display: flex;
  justify-content: center;

  h2 {
    margin: 0;
    padding: 0 8px 0 0;
    font-size: 6em;
    line-height: 1em;
    color: #ffffff;
    sup {
      position: relative;
      top: -16px;
      font-size: 2rem;
      line-height: 0;
    }
  }
  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    font-size: 2.6em;
    line-height: 1em;
    font-family: ${Me};
    text-align: center;
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
    font-weight: lighter;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: ${Me};
    font-size: 1.8em;
    line-height: 1em;
    text-align: center;
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    padding-right: 24px;
    h2 {
      font-size: 7em;
      sup {
        top: -16px;
        font-size: 2rem;
      }
    }
    h3 {
      padding: 16px 0 0 0;
      font-size: 3em;
    }
    h4 {
      font-size: 2.2em;
    }
  }
  @media (min-width: 960px) {
    h2 {
      font-size: 8em;
      sup {
        top: -16px;
        font-size: 3rem;
      }
    }
    h3 {
      font-size: 3.6em;
    }
    h4 {
      font-size: 2.4em;
    }
  }
`,$b=p.div`
  flex: 2;

  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    color: #ffffff;
    font-size: 1.8em;
    line-height: 1em;
    letter-spacing: 6px;
    text-align: center;
    font-family: ${Me};
    font-weight: lighter;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    letter-spacing: 6px;
    font-size: 1.1em;
    line-height: 1.2em;
    text-align: center;
    font-family: ${Me};
    font-weight: lighter;
  }
  @media (min-width: 768px) {
    padding-left: 24px;
    border-left: 3px solid #ffffff;
    h3 {
      font-size: 3em;
      letter-spacing: 4px;
      border-bottom: 3px solid #fff;
    }
    h4 {
      font-size: 2em;
      line-height: 1em;
      letter-spacing: 4px;
    }
  }
  @media (min-width: 960px) {
    h3 {
      font-size: 3.6em;
      letter-spacing: 6px;
    }
    h4 {
      font-size: 2.4em;
      letter-spacing: 6px;
    }
  }
`,e3=p.div`
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #992786;
    font-family: ${Me};
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-bottom: 3px solid #992786;
    border-radius: 10px;

    span {
      display: none;
    }
  }
  @media (min-width: 768px) {
    width: 700px;
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2.4em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
      border-bottom: 0;
      span {
        display: inline-block;
      }
    }
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`,t3=p.div`
  display: flex;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 5px solid #fff;
  img {
    width: 100%;
    max-width: 820px;
    height: auto;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`,i3=p.div`
  display: flex;
  width: 320px;
  flex-direction: column;
  align-items: center;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 5px solid #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      color: #ffffff;
      font-size: 1.2em;
      line-height: 1.4em;
      font-family: ${Me};
      font-weight: lighter;
    }
  }
  h4 {
    margin: 0;
    padding: 4px 0;
    font-size: 1.2em;
    line-height: 1.4em;
    font-family: ${Me};
    font-weight: lighter;
    text-align: center;
    color: #ffffff;
    strong {
      font-family: "Ari Black", "Open Sans", Helvetica, Arial, sans-serif;
      font-weight: initial;
      text-transform: uppercase;
    }
  }
  @media (min-width: 768px) {
    width: 700px;
    flex-direction: row;
    h4 {
      font-size: 1.2em;
    }
  }
  @media (min-width: 960px) {
    width: 860px;
    h4 {
      font-size: 1.4em;
    }
  }
`,n3=p.div`
  flex: 1;
  padding: 0 24px;
`,r3=p.div`
  flex: 1;
  padding: 0 24px;

  @media (min-width: 768px) {
    border-left: 5px solid #fff;
  }
`,l3=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;

  h5 {
    margin: 0;
    padding: 12px 0;
    color: #ffffff;
    font-size: 1.4em;
    font-family: ${Me};
    font-weight: normal;
    text-align: center;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    color: #ffffff;
    font-size: 0.8em;
    font-family: ${Me};
    font-weight: lighter;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`,o3=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0 12px;
    font-family: ${Me};
    color: #ffffff;
  }

  img {
    padding: 12px 24px;
    background: #ffffff;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,s3=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;

  p {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-size: 1.2em;
    text-align: center;
    font-family: ${Me};
  }
  img {
    display: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
    img {
      display: flex;
    }
  }
`,a3=p.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`,d3=p.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 768px) {
    border-left: 3px solid #fff;
  }
`,c3=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: auto;
  margin: 0 auto;
  padding: 24px;
  h3 {
    margin: 0;
    padding: 0 0 4px 0;
    font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    color: #ffffff;
    font-size: 1.6em;
    line-height: 1.2em;
    font-weight: normal;
    text-align: center;
  }
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 8px 0;
    color: #992786;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1.8em;
    text-align: center;
    background: #ffffff;
    border-radius: 4px;
  }
  h6 {
    color: #ffffff;
    text-align: center;
    font-family: ${Me};
    font-weight: normal;
  }
  @media (min-width: 768px) {
    width: 700px;
    h4 {
      width: auto;
      margin: 0 auto;
      padding: 0;
      font-size: 2em;
      color: #ffffff;
      border-radius: 0;
      background: transparent;
    }
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`;function f3(){return e.jsxs(Qb,{children:[e.jsxs(Jb,{children:[e.jsx(Vb,{}),e.jsx(Xb,{children:e.jsxs("h5",{children:[e.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),e.jsxs(Kb,{children:[e.jsx("h1",{children:"2-YEAR"}),e.jsx("h1",{children:"TV PRICE LOCK"}),e.jsx("img",{src:Bb,border:"0"})]}),e.jsxs(qb,{children:[e.jsxs(_b,{children:[e.jsx("div",{children:e.jsxs("h2",{children:[e.jsx("sup",{children:"$"}),"49"]})}),e.jsxs("div",{children:[e.jsx("h3",{children:"99"}),e.jsx("h4",{children:"MO"})]})]}),e.jsxs($b,{children:[e.jsx("h3",{children:"190 CHANNELS"}),e.jsx("h4",{children:"HOPPER SMART DVR"})]})]}),e.jsx(e3,{children:e.jsxs("h4",{children:[e.jsx("span",{children:"LOCK IN YOUR PRICE TODAY! "}),"(800)-555-1234"]})}),e.jsx(t3,{children:e.jsx("img",{src:Zb,border:"0"})}),e.jsxs(i3,{children:[e.jsx(n3,{children:e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," Local channels fee"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," Regional sports fee"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," HD programming fee"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," DVR fee"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No"})," 1st TV Monthly fee"]}),e.jsx("li",{children:"Just $49.99/mo plus taxes"})]})}),e.jsxs(r3,{children:[e.jsx("h4",{children:e.jsx("strong",{children:"Want to lock more?"})}),e.jsx("h4",{children:"Each additional TV for $7/mo"}),e.jsx("h4",{children:"240 channels for $15/mo more"}),e.jsx("h4",{children:"290 channels for $25/mo more"})]})]}),e.jsxs(l3,{children:[e.jsx("h5",{children:e.jsx("strong",{children:"PLUS YOU CHOOSE"})}),e.jsxs(o3,{children:[e.jsx("img",{src:Lb,border:"0",alt:"Netflix"}),e.jsx("p",{children:"- or -"}),e.jsx("img",{src:Wb,border:"0",alt:"RedZone"})]}),e.jsxs("div",{children:[e.jsx("h5",{children:"Included for 1 year with no hassle"}),e.jsx("h6",{children:"No need to call. automatically removed after 1 year.*"})]})]}),e.jsxs(s3,{children:[e.jsxs(a3,{children:[e.jsx("p",{children:"Free Premiums for 3 months "}),e.jsx("img",{src:Ob,border:"0"})]}),e.jsxs(d3,{children:[e.jsx("p",{children:"Free Professional Installation"}),e.jsx("img",{src:Yb,border:"0"})]})]}),e.jsxs(c3,{children:[e.jsx("h3",{children:"CALL NOW!"}),e.jsx("h4",{children:"(800)-555-1234"}),e.jsxs("h6",{children:["Requires credit qualification, 24-month commitment with early termination fee and e-bill autopay.",e.jsx("br",{}),"Terms & Conditions"]})]})]})}function h3(){const t=[{text:"Dish",url:"/Dish"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx(De,{logo:J0,alt:"Dish"}),e.jsxs(W,{children:[e.jsxs(Y,{title:"2 Year Price Lock",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"The 2 Year Price Lock click to call landing page campaign was part of Dish Network's special offer in which new customer could lock in pricing on entertainment bundles for 2 years. Offer also included free installation and a special 1 year subscription to the streaming service Netflix or the NFL Network Multi-Sport Pack - Red Zone."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(f3,{})})]})]})}function $a({fixedLogo:t}){return e.jsx(De,{logo:V0,alt:"ADT",fixedLogo:t})}function p3(){const t=[{text:"ADT",url:"/ADT"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx($a,{}),e.jsxs(W,{children:[e.jsxs(Y,{title:"ADT",children:[e.jsx("b",{children:"Front End Developer • Graphic Designer"}),e.jsx("br",{}),"ADT Security Services is an American corporation that provides residential and small business electronic security, fire protection and other related alarm monitoring services in 35 countries. ADT is the largest security company in the United States and Canada, serving over 6.5 million customers. As of 2013 ADT holds 25% market share of the residential market and 13% of the small business market in the US."]}),e.jsx("br",{}),e.jsx(ln,{className:"_three",children:o1.map(i=>e.jsx(to,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const Nl="/assets/zurch-8469b5d1.ttf",jp="/assets/zurchitalic-a3fa2d10.ttf",wp="/assets/zurchitalbold-81627c14.ttf",bp="/assets/zurchlight-057986b9.ttf",A3=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url(${Nl});
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url(${Nl});
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url(${wp});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url(${jp});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url(${bp});
  }
`;function u3({children:t}){return e.jsx(A3,{children:t})}const g3="/assets/adt-biz-66790acc.svg",x3="/assets/biz-hero-6a473ab6.jpg",vp="/assets/biz-cam1-de0eca9f.png",m3="/assets/biz-cam2-c7cfb426.png",y3="/assets/biz-cam3-f44aa274.png",j3="/assets/biz-cam4-e224e021.png",w3="/assets/adt-hanger-c3ce843e.svg",b3="/assets/adt-stetho-14fe388c.svg",v3="/assets/adt-gear-d12fa669.svg",S3="/assets/adt-bell-0c264176.svg",k3="/assets/adt-monitor-9dfb9e08.svg",I3="/assets/adt-coffee-f474ceeb.svg",z3=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 2px -2px #999;
  border-top: 5px solid #0f9aff;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,E3=p.div`
  width: 136px;
  height: 48px;
  padding: 20px 20px 0 20px;
  background: url(${g3}) no-repeat center;
  background-size: cover;
`,M3=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #0061aa;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`,D3=p.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url(${x3}) no-repeat center center;
  background-size: cover;
`,N3=p.div`
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.7em;
    color: #0f9aff;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }
  h2 {
    margin: 0;
    padding: 12px 0;
    font-size: 2.2em;
    line-height: 1em;
    color: #0061a8;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #0061a8;
    font-size: 1.3em;
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
    span {
      color: #0f9aff;
    }
  }
  h4 {
    margin: 0;
    padding: 12px 0;
    font-size: 1.3em;
    line-height: 1em;
    color: #0061a8;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Ital Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    font-size: 0.6em;
    line-height: 1em;
    color: #000000;
    text-align: center;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    background-color: rgba(255, 255, 255, 0.6);
  }
`,Pc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 24px;
  background: #0f9aff;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 1.4em;
    color: #ffffff;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
    text-align: center;
    border-radius: 0;
    background: transparent;
  }
`,U3=p.div`
  display: flex;
  flex-direction: column;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 20px;
    font-size: 1.4em;
    color: #0f9aff;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
`,R3=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  padding: 0 4% 4% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Fr=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px 8px 8px;

  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      max-width: 200px;
    }
  }
`,T3=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,F3=p.div`
  flex: 3;
  padding: 4%;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
    column-count: 2;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin: 0;
      padding: 24px 0;
      font-size: 1.4em;
      line-height: 0.8em;
      color: #000000;
      font-family:
        Zurch Light,
        "Open Sans",
        Helvetica,
        Arial,
        sans-serif;

      img {
        width: 32px;
        height: 32px;
        margin-right: 12px;
      }
    }
  }
  @media (min-width: 768px) {
    ul {
      li {
        font-size: 2.4em;
        img {
          width: 48px;
          height: 48px;
          margin-right: 12px;
        }
      }
    }
  }
`,P3=p.div`
  flex: 1;
  background: #ffffff;
  padding: 20px;
  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 0.8em;
    color: #000000;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
`,C3=p.div`
  display: flex;
  flex-direction: column;

  input {
    wisth: 100%;
    height: 32px;
    margin: 6px 0;
    padding: 4px;
    border: 1px solid #0061a8;
  }
`;function H3(){return e.jsxs(u3,{children:[e.jsxs(z3,{children:[e.jsx(E3,{}),e.jsx(M3,{children:e.jsxs("h5",{children:[e.jsx("span",{children:"Call for a Free Onsite Consultation "}),"(800)-555-1234"]})})]}),e.jsx(D3,{children:e.jsxs(N3,{children:[e.jsx("h1",{children:"Save 50%"}),e.jsxs("h3",{children:["on installation of",e.jsx("br",{}),"an adt security system"]}),e.jsx("h3",{children:e.jsx("span",{children:"and"})}),e.jsxs("h2",{children:["install 1 camera",e.jsx("br",{}),"get 1 free"]}),e.jsx("h4",{children:"up to 8 cameras"}),e.jsx("h6",{children:"See important terms and pricing here."})]})}),e.jsx(Pc,{children:e.jsxs("h4",{children:[e.jsx("span",{children:"To schedule an appointment, call "}),"(800)-555-1234"]})}),e.jsxs(U3,{children:[e.jsx("h4",{children:"Business Surveillance Products"}),e.jsxs(R3,{children:[e.jsxs(Fr,{children:[e.jsx("img",{src:y3,border:"0"}),e.jsx("h5",{children:"Wireless Day/ Night Camera"}),e.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),e.jsxs(Fr,{children:[e.jsx("img",{src:j3,border:"0"}),e.jsx("h5",{children:"Wireless Day/ Night Camera"}),e.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),e.jsxs(Fr,{children:[e.jsx("img",{src:m3,border:"0"}),e.jsx("h5",{children:"Wireless Day/ Night Camera"}),e.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),e.jsxs(Fr,{children:[e.jsx("img",{src:vp,border:"0"}),e.jsx("h5",{children:"Wireless Day/ Night Camera"}),e.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]})]})]}),e.jsx(Pc,{children:e.jsx("h4",{children:"What type of business are you? Get video surveillance."})}),e.jsxs(T3,{children:[e.jsxs(F3,{children:[e.jsx("h4",{children:"Control your business from anywhere with your mobile device."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("img",{src:w3,border:"0"}),"Retail"]}),e.jsxs("li",{children:[e.jsx("img",{src:b3,border:"0"}),"Clinical"]}),e.jsxs("li",{children:[e.jsx("img",{src:v3,border:"0"}),"Tech"]}),e.jsxs("li",{children:[e.jsx("img",{src:S3,border:"0"}),"Food"]}),e.jsxs("li",{children:[e.jsx("img",{src:k3,border:"0"}),"Office"]}),e.jsxs("li",{children:[e.jsx("img",{src:I3,border:"0"}),"Services"]})]})]}),e.jsxs(P3,{children:[e.jsx("h5",{children:"Free Security Quote"}),e.jsx("p",{children:"Please complete the form below and an ADT Representative will call you with information about ADT's products and services."}),e.jsxs(C3,{children:[e.jsx("input",{type:"text",placeholder:"Business Name"}),e.jsx("input",{type:"text",placeholder:"First Name"}),e.jsx("input",{type:"text",placeholder:"Last Name"}),e.jsx("input",{type:"tel",placeholder:"Phone"}),e.jsx("input",{type:"email",placeholder:"Email"}),e.jsx("input",{type:"number",placeholder:"Zip Code"})]})]})]})]})}function G3(){const t=[{text:"ADT",url:"/ADT"},{text:"Business",url:"/ADT/Business"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx($a,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Business Surveillance",children:[e.jsx("b",{children:"Front End Developer"}),e.jsx("br",{}),"The Business Surveillance click to call landing page campaign was part of ADT's special offer for small businesses featuring a variety surveillance and monitoring products with installation at a discounted price when new customers sign up for a 3yr. contract. The page also featured a quote form which customers could complete to be contacted by an ADT Representative for pricing options."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(H3,{})})]})]})}const B3="/assets/adt-res-054fc2d3.svg",Z3="/assets/res-hero-60b2765a.jpg",L3="/assets/biz-cam6-03378b5e.png",W3="/assets/biz-cam5-f48b034e.png",O3="/assets/biz-cam7-f42f8ccd.png",Y3="/assets/pulse-promo-a4869705.png",Q3=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url(${Nl});
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url(${Nl});
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url(${wp});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url(${jp});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url(${bp});
  }
`,J3=p.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 2px -2px #999;
  border-top: 5px solid #0f9aff;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`,V3=p.div`
  width: 136px;
  height: 48px;
  padding: 20px 20px 0 20px;
  background: url(${B3}) no-repeat center;
  background-size: cover;
`,X3=p.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  h5 {
    margin: 0;
    padding: 0;
    color: #0061aa;
    font-family: "Din Bold", "Open Sans", Helvetica, Arial, sans-serif;
    font-size: 1em;
    font-weight: bold;
    span {
      font-family: "Din", "Open Sans", Helvetica, Arial, sans-serif;
    }
  }
`,K3=p.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url(${Z3}) no-repeat center center;
  background-size: cover;
`,q3=p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 3px double #0061a8;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 3.7em;
    color: #0f9aff;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }
  h2 {
    margin: 0;
    padding: 12px 0;
    font-size: 2.2em;
    line-height: 1em;
    color: #0061a8;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }
  h3 {
    margin: 0;
    padding: 0;
    color: #0061a8;
    font-size: 1.3em;
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
    span {
      color: #0f9aff;
    }
  }
  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px;
    font-size: 1.3em;
    line-height: 1em;
    color: #ffffff;
    text-transform: uppercase;
    text-align: center;
    font-family:
      Zurch Ital Bold,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
    background: #0061a8;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    font-size: 0.6em;
    line-height: 1em;
    color: #000000;
    text-align: center;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
  @media (min-width: 768px) {
    max-width: 50%;
    background-color: rgba(255, 255, 255, 0.6);
  }
`,Cc=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 12px 24px;
  background: #0f9aff;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 1.4em;
    color: #ffffff;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
    text-align: center;
    border-radius: 0;
    background: transparent;
  }
`,_3=p.div`
  display: flex;
  flex-direction: column;
  h4 {
    width: auto;
    margin: 0 auto;
    padding: 20px;
    font-size: 1.4em;
    color: #0f9aff;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
`,$3=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 12px;
  padding: 0 4% 4% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,Pr=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px 8px 8px;

  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    margin: 0;
    padding: 0;
    color: #000000;
    font-family:
      Zurch Light,
      "Open Sans",
      Helvetica,
      Arial,
      sans-serif;
  }

  img {
    width: 100%;
    max-width: 100px;
    height: auto;
  }

  @media (min-width: 768px) {
    img {
      max-width: 200px;
    }
  }
`,ev=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,tv=p.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;

  h4 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  img {
    width: 100%;
    max-width: 640px;
    height: auto;
  }
`,iv=p.div`
  flex: 1;
  background: #ffffff;
  padding: 20px;
  h5 {
    width: auto;
    margin: 0 auto;
    padding: 12px 0 0 0;
    font-size: 1.2em;
    color: #0061a8;
    font-family: Zurch, "Open Sans", Helvetica, Arial, sans-serif;
  }
  p {
    width: auto;
    margin: 0 auto;
    padding: 0;
    font-size: 0.8em;
    color: #000000;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
  }
`,nv=p.div`
  display: flex;
  flex-direction: column;

  input {
    wisth: 100%;
    height: 32px;
    margin: 6px 0;
    padding: 4px;
    border: 1px solid #0061a8;
  }
`;function rv(){return e.jsxs(Q3,{children:[e.jsxs(J3,{children:[e.jsx(V3,{}),e.jsx(X3,{children:e.jsxs("h5",{children:[e.jsx("span",{children:"Call for a Free Home Security Review "}),"(800)-555-1234"]})})]}),e.jsx(K3,{children:e.jsxs(q3,{children:[e.jsxs("h2",{children:["Free Installation",e.jsx("br",{}),"on ADT Pulse Video"]}),e.jsx("h3",{children:"Including A Wireless Security Camera"}),e.jsx("h1",{children:"$449"}),e.jsx("h5",{children:"Instant Savings"}),e.jsx("h6",{children:"See important terms and pricing here."})]})}),e.jsx(Cc,{children:e.jsxs("h4",{children:[e.jsx("span",{children:"To schedule an appointment, call "}),"(800)-555-1234"]})}),e.jsxs(_3,{children:[e.jsx("h4",{children:"Home Surveillance Products"}),e.jsxs($3,{children:[e.jsxs(Pr,{children:[e.jsx("img",{src:W3,border:"0"}),e.jsx("h5",{children:"Wireless Security Camera"}),e.jsx("p",{children:"Remotely check in on your home and make sure all is safe while you're out and about."})]}),e.jsxs(Pr,{children:[e.jsx("img",{src:vp,border:"0"}),e.jsx("h5",{children:"Dome Security Camera"}),e.jsx("p",{children:"These can be mounted almost anywhere, provides 360° viewing with clear imaging."})]}),e.jsxs(Pr,{children:[e.jsx("img",{src:L3,border:"0"}),e.jsx("h5",{children:"Indoor Color Security Camera"}),e.jsx("p",{children:"High-resolution color cameras allow you to see around your home in full color."})]}),e.jsxs(Pr,{children:[e.jsx("img",{src:O3,border:"0"}),e.jsx("h5",{children:"DVR"}),e.jsx("p",{children:"Clear audio and video and remote viewing, record from all cameras at the same time."})]})]})]}),e.jsx(Cc,{children:e.jsx("h4",{children:"Get video surveillance with ADT Pulse Solutions"})}),e.jsxs(ev,{children:[e.jsxs(tv,{children:[e.jsx("h4",{children:"Control your home from anywhere with your mobile device. Free"}),e.jsx("img",{src:Y3,border:"0"})]}),e.jsxs(iv,{children:[e.jsx("h5",{children:"Free Security Quote"}),e.jsx("p",{children:"Please complete the form below and an ADT Representative will call you with information about ADT's products and services."}),e.jsxs(nv,{children:[e.jsx("input",{type:"text",placeholder:"Business Name"}),e.jsx("input",{type:"text",placeholder:"First Name"}),e.jsx("input",{type:"text",placeholder:"Last Name"}),e.jsx("input",{type:"tel",placeholder:"Phone"}),e.jsx("input",{type:"email",placeholder:"Email"}),e.jsx("input",{type:"number",placeholder:"Zip Code"})]})]})]})]})}function lv(){const t=[{text:"ADT",url:"/ADT"},{text:"Residential",url:"/ADT/Residential"}];return e.jsxs(e.Fragment,{children:[e.jsx(O,{route:t}),e.jsx($a,{fixedLogo:!0}),e.jsxs(W,{fadeOnly:!0,children:[e.jsxs(Y,{title:"Residential Surveillance",children:[e.jsx("b",{children:"Front End Developer"}),e.jsx("br",{}),"The Residential Surveillance click to call landing page campaign was part of ADT's special offer for residential and home surveillance featuring a variety surveillance and monitoring products with installation at a discounted price when new customers sign up for a 3yr. contract. The page also featured a quote form which customers could complete to be contacted by an ADT Representative for pricing options."]}),e.jsx("br",{}),e.jsx(ie,{viewSelected:"desktop",children:e.jsx(rv,{})})]})]})}const ov=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 16px 0;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${N.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`,sv=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
`,av=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;function dv(){return e.jsx(ov,{children:e.jsx(sv,{children:e.jsxs(av,{children:[e.jsx("h1",{children:"404"}),e.jsx(K0,{children:e.jsx(el,{to:"/",title:"HOME","aria-label":"Button: Home",children:e.jsxs("button",{title:"HOME","aria-label":"Button: HOME",children:[e.jsx("span",{children:"⠿"}),"HOME",e.jsx("span",{children:"⠿"})]})})})]})})})}const cv=p.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;function fv(){const t=sr();return z.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[t]),e.jsx(cv,{children:e.jsx(Og,{children:e.jsxs(H,{path:"/",element:e.jsx(ym,{}),children:[e.jsx(H,{index:!0,element:e.jsx(p1,{})}),e.jsx(H,{exact:!0,path:"/Microsoft",element:e.jsx(S1,{})}),e.jsx(H,{path:"/Microsoft/Azure",element:e.jsx(z1,{})}),e.jsx(H,{path:"/Microsoft/Azure/Essentials",element:e.jsx(R1,{})}),e.jsx(H,{path:"/Microsoft/Azure/Newsletter",element:e.jsx(P1,{})}),e.jsx(H,{path:"/Microsoft/Azure/Alerts",element:e.jsx(ny,{})}),e.jsx(H,{path:"/Microsoft/Student",element:e.jsx(Ry,{})}),e.jsx(H,{path:"/Microsoft/Windows10",element:e.jsx(Ly,{})}),e.jsx(H,{path:"/Microsoft/ExpertZone",element:e.jsx(t2,{})}),e.jsx(H,{path:"/Microsoft/PowerBI",element:e.jsx(p2,{})}),e.jsx(H,{path:"/Microsoft/VisualStudio",element:e.jsx(j2,{})}),e.jsx(H,{exact:!0,path:"/Gates",element:e.jsx(w2,{})}),e.jsx(H,{path:"/Gates/GivingPledge",element:e.jsx(E2,{})}),e.jsx(H,{path:"/Gates/AnnualLetter",element:e.jsx(D2,{})}),e.jsx(H,{exact:!0,path:"/T-Mobile",element:e.jsx(N2,{})}),e.jsx(H,{path:"/T-Mobile/Tuesdays",element:e.jsx(sj,{})}),e.jsx(H,{path:"/T-Mobile/3for1",element:e.jsx(mj,{})}),e.jsx(H,{path:"/T-Mobile/Jump",element:e.jsx(Dj,{})}),e.jsx(H,{path:"/T-Mobile/Pay",element:e.jsx(Zj,{})}),e.jsx(H,{path:"/T-Mobile/Prepaid",element:e.jsx(tw,{})}),e.jsx(H,{path:"/T-Mobile/Stash",element:e.jsx(dw,{})}),e.jsx(H,{exact:!0,path:"/Verizon",element:e.jsx(Rw,{})}),e.jsx(H,{exact:!0,path:"/ATT",element:e.jsx(jb,{})}),e.jsx(H,{exact:!0,path:"/DirecTV",element:e.jsx(Cb,{})}),e.jsx(H,{exact:!0,path:"/Dish",element:e.jsx(h3,{})}),e.jsx(H,{exact:!0,path:"/ADT",element:e.jsx(p3,{})}),e.jsx(H,{path:"/ADT/Business",element:e.jsx(G3,{})}),e.jsx(H,{path:"/ADT/Residential",element:e.jsx(lv,{})}),e.jsx(H,{path:"*",element:e.jsx(dv,{})})]})})})}const hv=document.getElementById("root");Oo.createRoot(hv).render(e.jsx(qg,{children:e.jsx(fv,{})}));
