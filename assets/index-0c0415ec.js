function Cp(e,i){for(var n=0;n<i.length;n++){const r=i[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(r,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function Ep(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Cc={exports:{}},Hl={},Ec={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Mp=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Lp=Symbol.for("react.profiler"),_p=Symbol.for("react.provider"),Np=Symbol.for("react.context"),Bp=Symbol.for("react.forward_ref"),Wp=Symbol.for("react.suspense"),Op=Symbol.for("react.memo"),Rp=Symbol.for("react.lazy"),Za=Symbol.iterator;function $p(e){return e===null||typeof e!="object"?null:(e=Za&&e[Za]||e["@@iterator"],typeof e=="function"?e:null)}var Dc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Uc={};function Ji(e,i,n){this.props=e,this.context=i,this.refs=Uc,this.updater=n||Dc}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(e,i){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,i,"setState")};Ji.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lc(){}Lc.prototype=Ji.prototype;function Rs(e,i,n){this.props=e,this.context=i,this.refs=Uc,this.updater=n||Dc}var $s=Rs.prototype=new Lc;$s.constructor=Rs;Mc($s,Ji.prototype);$s.isPureReactComponent=!0;var Qa=Array.isArray,_c=Object.prototype.hasOwnProperty,Gs={current:null},Nc={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,i,n){var r,l={},o=null,s=null;if(i!=null)for(r in i.ref!==void 0&&(s=i.ref),i.key!==void 0&&(o=""+i.key),i)_c.call(i,r)&&!Nc.hasOwnProperty(r)&&(l[r]=i[r]);var a=arguments.length-2;if(a===1)l.children=n;else if(1<a){for(var d=Array(a),c=0;c<a;c++)d[c]=arguments[c+2];l.children=d}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)l[r]===void 0&&(l[r]=a[r]);return{$$typeof:er,type:e,key:o,ref:s,props:l,_owner:Gs.current}}function Gp(e,i){return{$$typeof:er,type:e.type,key:i,ref:e.ref,props:e.props,_owner:e._owner}}function Vs(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function Vp(e){var i={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return i[n]})}var Ya=/\/+/g;function io(e,i){return typeof e=="object"&&e!==null&&e.key!=null?Vp(""+e.key):i.toString(36)}function Mr(e,i,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case er:case Dp:s=!0}}if(s)return s=e,l=l(s),e=r===""?"."+io(s,0):r,Qa(l)?(n="",e!=null&&(n=e.replace(Ya,"$&/")+"/"),Mr(l,i,n,"",function(c){return c})):l!=null&&(Vs(l)&&(l=Gp(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(Ya,"$&/")+"/")+e)),i.push(l)),1;if(s=0,r=r===""?".":r+":",Qa(e))for(var a=0;a<e.length;a++){o=e[a];var d=r+io(o,a);s+=Mr(o,i,n,d,l)}else if(d=$p(e),typeof d=="function")for(e=d.call(e),a=0;!(o=e.next()).done;)o=o.value,d=r+io(o,a++),s+=Mr(o,i,n,d,l);else if(o==="object")throw i=String(e),Error("Objects are not valid as a React child (found: "+(i==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":i)+"). If you meant to render a collection of children, use an array instead.");return s}function cr(e,i,n){if(e==null)return e;var r=[],l=0;return Mr(e,r,"","",function(o){return i.call(n,o,l++)}),r}function Zp(e){if(e._status===-1){var i=e._result;i=i(),i.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},Ur={transition:null},Qp={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:Ur,ReactCurrentOwner:Gs};U.Children={map:cr,forEach:function(e,i,n){cr(e,function(){i.apply(this,arguments)},n)},count:function(e){var i=0;return cr(e,function(){i++}),i},toArray:function(e){return cr(e,function(i){return i})||[]},only:function(e){if(!Vs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Ji;U.Fragment=Mp;U.Profiler=Lp;U.PureComponent=Rs;U.StrictMode=Up;U.Suspense=Wp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;U.cloneElement=function(e,i,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),l=e.key,o=e.ref,s=e._owner;if(i!=null){if(i.ref!==void 0&&(o=i.ref,s=Gs.current),i.key!==void 0&&(l=""+i.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(d in i)_c.call(i,d)&&!Nc.hasOwnProperty(d)&&(r[d]=i[d]===void 0&&a!==void 0?a[d]:i[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){a=Array(d);for(var c=0;c<d;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:er,type:e.type,key:l,ref:o,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:Np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_p,_context:e},e.Consumer=e};U.createElement=Bc;U.createFactory=function(e){var i=Bc.bind(null,e);return i.type=e,i};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Bp,render:e}};U.isValidElement=Vs;U.lazy=function(e){return{$$typeof:Rp,_payload:{_status:-1,_result:e},_init:Zp}};U.memo=function(e,i){return{$$typeof:Op,type:e,compare:i===void 0?null:i}};U.startTransition=function(e){var i=Ur.transition;Ur.transition={};try{e()}finally{Ur.transition=i}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,i){return be.current.useCallback(e,i)};U.useContext=function(e){return be.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return be.current.useDeferredValue(e)};U.useEffect=function(e,i){return be.current.useEffect(e,i)};U.useId=function(){return be.current.useId()};U.useImperativeHandle=function(e,i,n){return be.current.useImperativeHandle(e,i,n)};U.useInsertionEffect=function(e,i){return be.current.useInsertionEffect(e,i)};U.useLayoutEffect=function(e,i){return be.current.useLayoutEffect(e,i)};U.useMemo=function(e,i){return be.current.useMemo(e,i)};U.useReducer=function(e,i,n){return be.current.useReducer(e,i,n)};U.useRef=function(e){return be.current.useRef(e)};U.useState=function(e){return be.current.useState(e)};U.useSyncExternalStore=function(e,i,n){return be.current.useSyncExternalStore(e,i,n)};U.useTransition=function(){return be.current.useTransition()};U.version="18.2.0";Ec.exports=U;var I=Ec.exports;const _i=Ep(I),Yp=Cp({__proto__:null,default:_i},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp=I,Xp=Symbol.for("react.element"),Jp=Symbol.for("react.fragment"),qp=Object.prototype.hasOwnProperty,eu=Kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tu={key:!0,ref:!0,__self:!0,__source:!0};function Wc(e,i,n){var r,l={},o=null,s=null;n!==void 0&&(o=""+n),i.key!==void 0&&(o=""+i.key),i.ref!==void 0&&(s=i.ref);for(r in i)qp.call(i,r)&&!tu.hasOwnProperty(r)&&(l[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:Xp,type:e,key:o,ref:s,props:l,_owner:eu.current}}Hl.Fragment=Jp;Hl.jsx=Wc;Hl.jsxs=Wc;Cc.exports=Hl;var t=Cc.exports,No={},Oc={exports:{}},Le={},Rc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function i(P,C){var E=P.length;P.push(C);e:for(;0<E;){var W=E-1>>>1,O=P[W];if(0<l(O,C))P[W]=C,P[E]=O,E=W;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var C=P[0],E=P.pop();if(E!==C){P[0]=E;e:for(var W=0,O=P.length,Qt=O>>>1;W<Qt;){var Ve=2*(W+1)-1,jt=P[Ve],Ce=Ve+1,st=P[Ce];if(0>l(jt,E))Ce<O&&0>l(st,jt)?(P[W]=st,P[Ce]=E,W=Ce):(P[W]=jt,P[Ve]=E,W=Ve);else if(Ce<O&&0>l(st,E))P[W]=st,P[Ce]=E,W=Ce;else break e}}return C}function l(P,C){var E=P.sortIndex-C.sortIndex;return E!==0?E:P.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var d=[],c=[],x=1,g=null,m=3,j=!1,w=!1,b=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function u(P){for(var C=n(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=P)r(c),C.sortIndex=C.expirationTime,i(d,C);else break;C=n(c)}}function y(P){if(b=!1,u(P),!w)if(n(d)!==null)w=!0,sn(k);else{var C=n(c);C!==null&&Zt(y,C.startTime-P)}}function k(P,C){w=!1,b&&(b=!1,h(T),T=-1),j=!0;var E=m;try{for(u(C),g=n(d);g!==null&&(!(g.expirationTime>C)||P&&!Fe());){var W=g.callback;if(typeof W=="function"){g.callback=null,m=g.priorityLevel;var O=W(g.expirationTime<=C);C=e.unstable_now(),typeof O=="function"?g.callback=O:g===n(d)&&r(d),u(C)}else r(d);g=n(d)}if(g!==null)var Qt=!0;else{var Ve=n(c);Ve!==null&&Zt(y,Ve.startTime-C),Qt=!1}return Qt}finally{g=null,m=E,j=!1}}var z=!1,v=null,T=-1,V=5,M=-1;function Fe(){return!(e.unstable_now()-M<V)}function Gt(){if(v!==null){var P=e.unstable_now();M=P;var C=!0;try{C=v(!0,P)}finally{C?Vt():(z=!1,v=null)}}else z=!1}var Vt;if(typeof f=="function")Vt=function(){f(Gt)};else if(typeof MessageChannel<"u"){var ar=new MessageChannel,eo=ar.port2;ar.port1.onmessage=Gt,Vt=function(){eo.postMessage(null)}}else Vt=function(){A(Gt,0)};function sn(P){v=P,z||(z=!0,Vt())}function Zt(P,C){T=A(function(){P(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||j||(w=!0,sn(k))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var C=3;break;default:C=m}var E=m;m=C;try{return P()}finally{m=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,C){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var E=m;m=P;try{return C()}finally{m=E}},e.unstable_scheduleCallback=function(P,C,E){var W=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?W+E:W):E=W,P){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=E+O,P={id:x++,callback:C,priorityLevel:P,startTime:E,expirationTime:O,sortIndex:-1},E>W?(P.sortIndex=E,i(c,P),n(d)===null&&P===n(c)&&(b?(h(T),T=-1):b=!0,Zt(y,E-W))):(P.sortIndex=O,i(d,P),w||j||(w=!0,sn(k))),P},e.unstable_shouldYield=Fe,e.unstable_wrapCallback=function(P){var C=m;return function(){var E=m;m=C;try{return P.apply(this,arguments)}finally{m=E}}}})($c);Rc.exports=$c;var iu=Rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gc=I,Ue=iu;function S(e){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)i+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vc=new Set,Dn={};function hi(e,i){Ni(e,i),Ni(e+"Capture",i)}function Ni(e,i){for(Dn[e]=i,e=0;e<i.length;e++)Vc.add(i[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bo=Object.prototype.hasOwnProperty,nu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ka={},Xa={};function ru(e){return Bo.call(Xa,e)?!0:Bo.call(Ka,e)?!1:nu.test(e)?Xa[e]=!0:(Ka[e]=!0,!1)}function lu(e,i,n,r){if(n!==null&&n.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ou(e,i,n,r){if(i===null||typeof i>"u"||lu(e,i,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function ve(e,i,n,r,l,o,s){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=i,this.sanitizeURL=o,this.removeEmptyString=s}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var i=e[0];ue[i]=new ve(i,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var i=e.replace(Zs,Qs);ue[i]=new ve(i,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var i=e.replace(Zs,Qs);ue[i]=new ve(i,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var i=e.replace(Zs,Qs);ue[i]=new ve(i,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ys(e,i,n,r){var l=ue.hasOwnProperty(i)?ue[i]:null;(l!==null?l.type!==0:r||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(ou(i,n,l,r)&&(n=null),r||l===null?ru(i)&&(n===null?e.removeAttribute(i):e.setAttribute(i,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(i=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(i):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,i,n):e.setAttribute(i,n))))}var yt=Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fr=Symbol.for("react.element"),ji=Symbol.for("react.portal"),wi=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),Qc=Symbol.for("react.context"),Xs=Symbol.for("react.forward_ref"),Oo=Symbol.for("react.suspense"),Ro=Symbol.for("react.suspense_list"),Js=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Yc=Symbol.for("react.offscreen"),Ja=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ja&&e[Ja]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,no;function jn(e){if(no===void 0)try{throw Error()}catch(n){var i=n.stack.trim().match(/\n( *(at )?)/);no=i&&i[1]||""}return`
`+no+e}var ro=!1;function lo(e,i){if(!e||ro)return"";ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(c){var r=c}Reflect.construct(e,[],i)}else{try{i.call()}catch(c){r=c}e.call(i.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),s=l.length-1,a=o.length-1;1<=s&&0<=a&&l[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(l[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||l[s]!==o[a]){var d=`
`+l[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=a);break}}}finally{ro=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function su(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=lo(e.type,!1),e;case 11:return e=lo(e.type.render,!1),e;case 1:return e=lo(e.type,!0),e;default:return""}}function $o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wi:return"Fragment";case ji:return"Portal";case Wo:return"Profiler";case Ks:return"StrictMode";case Oo:return"Suspense";case Ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Qc:return(e.displayName||"Context")+".Consumer";case Zc:return(e._context.displayName||"Context")+".Provider";case Xs:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Js:return i=e.displayName||null,i!==null?i:$o(e.type)||"Memo";case St:i=e._payload,e=e._init;try{return $o(e(i))}catch{}}return null}function au(e){var i=e.type;switch(e.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=i.render,e=e.displayName||e.name||"",i.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $o(i);case 8:return i===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kc(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function du(e){var i=Kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),r=""+e[i];if(!e.hasOwnProperty(i)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return l.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,i,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function hr(e){e._valueTracker||(e._valueTracker=du(e))}function Xc(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var n=i.getValue(),r="";return e&&(r=Kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(i.setValue(e),!0):!1}function el(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Go(e,i){var n=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qa(e,i){var n=i.defaultValue==null?"":i.defaultValue,r=i.checked!=null?i.checked:i.defaultChecked;n=Nt(i.value!=null?i.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Jc(e,i){i=i.checked,i!=null&&Ys(e,"checked",i,!1)}function Vo(e,i){Jc(e,i);var n=Nt(i.value),r=i.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}i.hasOwnProperty("value")?Zo(e,i.type,n):i.hasOwnProperty("defaultValue")&&Zo(e,i.type,Nt(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(e.defaultChecked=!!i.defaultChecked)}function ed(e,i,n){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var r=i.type;if(!(r!=="submit"&&r!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+e._wrapperState.initialValue,n||i===e.value||(e.value=i),e.defaultValue=i}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zo(e,i,n){(i!=="number"||el(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Ci(e,i,n,r){if(e=e.options,i){i={};for(var l=0;l<n.length;l++)i["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=i.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),i=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}i!==null||e[l].disabled||(i=e[l])}i!==null&&(i.selected=!0)}}function Qo(e,i){if(i.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function td(e,i){var n=i.value;if(n==null){if(n=i.children,i=i.defaultValue,n!=null){if(i!=null)throw Error(S(92));if(wn(n)){if(1<n.length)throw Error(S(93));n=n[0]}i=n}i==null&&(i=""),n=i}e._wrapperState={initialValue:Nt(n)}}function qc(e,i){var n=Nt(i.value),r=Nt(i.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),i.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function id(e){var i=e.textContent;i===e._wrapperState.initialValue&&i!==""&&i!==null&&(e.value=i)}function ef(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yo(e,i){return e==null||e==="http://www.w3.org/1999/xhtml"?ef(i):e==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pr,tf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(i,n,r,l)})}:e}(function(e,i){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;i.firstChild;)e.appendChild(i.firstChild)}});function Mn(e,i){if(i){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=i;return}}e.textContent=i}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cu=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){cu.forEach(function(i){i=i+e.charAt(0).toUpperCase()+e.substring(1),kn[i]=kn[e]})});function nf(e,i,n){return i==null||typeof i=="boolean"||i===""?"":n||typeof i!="number"||i===0||kn.hasOwnProperty(e)&&kn[e]?(""+i).trim():i+"px"}function rf(e,i){e=e.style;for(var n in i)if(i.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=nf(n,i[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var fu=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ko(e,i){if(i){if(fu[e]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(S(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(S(61))}if(i.style!=null&&typeof i.style!="object")throw Error(S(62))}}function Xo(e,i){if(e.indexOf("-")===-1)return typeof i.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jo=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qo=null,Ei=null,Di=null;function nd(e){if(e=nr(e)){if(typeof qo!="function")throw Error(S(280));var i=e.stateNode;i&&(i=Dl(i),qo(e.stateNode,e.type,i))}}function lf(e){Ei?Di?Di.push(e):Di=[e]:Ei=e}function of(){if(Ei){var e=Ei,i=Di;if(Di=Ei=null,nd(e),i)for(e=0;e<i.length;e++)nd(i[e])}}function sf(e,i){return e(i)}function af(){}var oo=!1;function df(e,i,n){if(oo)return e(i,n);oo=!0;try{return sf(e,i,n)}finally{oo=!1,(Ei!==null||Di!==null)&&(af(),of())}}function Un(e,i){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,i,typeof n));return n}var es=!1;if(ut)try{var cn={};Object.defineProperty(cn,"passive",{get:function(){es=!0}}),window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch{es=!1}function hu(e,i,n,r,l,o,s,a,d){var c=Array.prototype.slice.call(arguments,3);try{i.apply(n,c)}catch(x){this.onError(x)}}var zn=!1,tl=null,il=!1,ts=null,pu={onError:function(e){zn=!0,tl=e}};function uu(e,i,n,r,l,o,s,a,d){zn=!1,tl=null,hu.apply(pu,arguments)}function gu(e,i,n,r,l,o,s,a,d){if(uu.apply(this,arguments),zn){if(zn){var c=tl;zn=!1,tl=null}else throw Error(S(198));il||(il=!0,ts=c)}}function pi(e){var i=e,n=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,i.flags&4098&&(n=i.return),e=i.return;while(e)}return i.tag===3?n:null}function cf(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function rd(e){if(pi(e)!==e)throw Error(S(188))}function xu(e){var i=e.alternate;if(!i){if(i=pi(e),i===null)throw Error(S(188));return i!==e?null:e}for(var n=e,r=i;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return rd(l),e;if(o===r)return rd(l),i;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=l,r=o;else{for(var s=!1,a=l.child;a;){if(a===n){s=!0,n=l,r=o;break}if(a===r){s=!0,r=l,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=l;break}if(a===r){s=!0,r=o,n=l;break}a=a.sibling}if(!s)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:i}function ff(e){return e=xu(e),e!==null?hf(e):null}function hf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var i=hf(e);if(i!==null)return i;e=e.sibling}return null}var pf=Ue.unstable_scheduleCallback,ld=Ue.unstable_cancelCallback,mu=Ue.unstable_shouldYield,yu=Ue.unstable_requestPaint,ne=Ue.unstable_now,ju=Ue.unstable_getCurrentPriorityLevel,ea=Ue.unstable_ImmediatePriority,uf=Ue.unstable_UserBlockingPriority,nl=Ue.unstable_NormalPriority,wu=Ue.unstable_LowPriority,gf=Ue.unstable_IdlePriority,Tl=null,lt=null;function bu(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Tl,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:ku,vu=Math.log,Su=Math.LN2;function ku(e){return e>>>=0,e===0?32:31-(vu(e)/Su|0)|0}var ur=64,gr=4194304;function bn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rl(e,i){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~l;a!==0?r=bn(a):(o&=s,o!==0&&(r=bn(o)))}else s=n&~l,s!==0?r=bn(s):o!==0&&(r=bn(o));if(r===0)return 0;if(i!==0&&i!==r&&!(i&l)&&(l=r&-r,o=i&-i,l>=o||l===16&&(o&4194240)!==0))return i;if(r&4&&(r|=n&16),i=e.entangledLanes,i!==0)for(e=e.entanglements,i&=r;0<i;)n=31-Xe(i),l=1<<n,r|=e[n],i&=~l;return r}function zu(e,i){switch(e){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Au(e,i){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Xe(o),a=1<<s,d=l[s];d===-1?(!(a&n)||a&r)&&(l[s]=zu(a,i)):d<=i&&(e.expiredLanes|=a),o&=~a}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=ur;return ur<<=1,!(ur&4194240)&&(ur=64),e}function so(e){for(var i=[],n=0;31>n;n++)i.push(e);return i}function tr(e,i,n){e.pendingLanes|=i,i!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,i=31-Xe(i),e[i]=n}function Iu(e,i){var n=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Xe(n),o=1<<l;i[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ta(e,i){var n=e.entangledLanes|=i;for(e=e.entanglements;n;){var r=31-Xe(n),l=1<<r;l&i|e[r]&i&&(e[r]|=i),n&=~l}}var B=0;function mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var yf,ia,jf,wf,bf,ns=!1,xr=[],Tt=null,Ft=null,Ct=null,Ln=new Map,_n=new Map,zt=[],Pu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function od(e,i){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Ft=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Ln.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(i.pointerId)}}function fn(e,i,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:i,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},i!==null&&(i=nr(i),i!==null&&ia(i)),e):(e.eventSystemFlags|=r,i=e.targetContainers,l!==null&&i.indexOf(l)===-1&&i.push(l),e)}function Hu(e,i,n,r,l){switch(i){case"focusin":return Tt=fn(Tt,e,i,n,r,l),!0;case"dragenter":return Ft=fn(Ft,e,i,n,r,l),!0;case"mouseover":return Ct=fn(Ct,e,i,n,r,l),!0;case"pointerover":var o=l.pointerId;return Ln.set(o,fn(Ln.get(o)||null,e,i,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,_n.set(o,fn(_n.get(o)||null,e,i,n,r,l)),!0}return!1}function vf(e){var i=qt(e.target);if(i!==null){var n=pi(i);if(n!==null){if(i=n.tag,i===13){if(i=cf(n),i!==null){e.blockedOn=i,bf(e.priority,function(){jf(n)});return}}else if(i===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lr(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var n=rs(e.domEventName,e.eventSystemFlags,i[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jo=r,n.target.dispatchEvent(r),Jo=null}else return i=nr(n),i!==null&&ia(i),e.blockedOn=n,!1;i.shift()}return!0}function sd(e,i,n){Lr(e)&&n.delete(i)}function Tu(){ns=!1,Tt!==null&&Lr(Tt)&&(Tt=null),Ft!==null&&Lr(Ft)&&(Ft=null),Ct!==null&&Lr(Ct)&&(Ct=null),Ln.forEach(sd),_n.forEach(sd)}function hn(e,i){e.blockedOn===i&&(e.blockedOn=null,ns||(ns=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Tu)))}function Nn(e){function i(l){return hn(l,e)}if(0<xr.length){hn(xr[0],e);for(var n=1;n<xr.length;n++){var r=xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&hn(Tt,e),Ft!==null&&hn(Ft,e),Ct!==null&&hn(Ct,e),Ln.forEach(i),_n.forEach(i),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&zt.shift()}var Mi=yt.ReactCurrentBatchConfig,ll=!0;function Fu(e,i,n,r){var l=B,o=Mi.transition;Mi.transition=null;try{B=1,na(e,i,n,r)}finally{B=l,Mi.transition=o}}function Cu(e,i,n,r){var l=B,o=Mi.transition;Mi.transition=null;try{B=4,na(e,i,n,r)}finally{B=l,Mi.transition=o}}function na(e,i,n,r){if(ll){var l=rs(e,i,n,r);if(l===null)yo(e,i,r,ol,n),od(e,r);else if(Hu(l,e,i,n,r))r.stopPropagation();else if(od(e,r),i&4&&-1<Pu.indexOf(e)){for(;l!==null;){var o=nr(l);if(o!==null&&yf(o),o=rs(e,i,n,r),o===null&&yo(e,i,r,ol,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else yo(e,i,r,null,n)}}var ol=null;function rs(e,i,n,r){if(ol=null,e=qs(r),e=qt(e),e!==null)if(i=pi(e),i===null)e=null;else if(n=i.tag,n===13){if(e=cf(i),e!==null)return e;e=null}else if(n===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null);return ol=e,null}function Sf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ju()){case ea:return 1;case uf:return 4;case nl:case wu:return 16;case gf:return 536870912;default:return 16}default:return 16}}var It=null,ra=null,_r=null;function kf(){if(_r)return _r;var e,i=ra,n=i.length,r,l="value"in It?It.value:It.textContent,o=l.length;for(e=0;e<n&&i[e]===l[e];e++);var s=n-e;for(r=1;r<=s&&i[n-r]===l[o-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Nr(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function ad(){return!1}function _e(e){function i(n,r,l,o,s){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mr:ad,this.isPropagationStopped=ad,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),i}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},la=_e(qi),ir=ee({},qi,{view:0,detail:0}),Eu=_e(ir),ao,co,pn,Fl=ee({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&e.type==="mousemove"?(ao=e.screenX-pn.screenX,co=e.screenY-pn.screenY):co=ao=0,pn=e),ao)},movementY:function(e){return"movementY"in e?e.movementY:co}}),dd=_e(Fl),Du=ee({},Fl,{dataTransfer:0}),Mu=_e(Du),Uu=ee({},ir,{relatedTarget:0}),fo=_e(Uu),Lu=ee({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),_u=_e(Lu),Nu=ee({},qi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bu=_e(Nu),Wu=ee({},qi,{data:0}),cd=_e(Wu),Ou={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=$u[e])?!!i[e]:!1}function oa(){return Gu}var Vu=ee({},ir,{key:function(e){if(e.key){var i=Ou[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zu=_e(Vu),Qu=ee({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fd=_e(Qu),Yu=ee({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),Ku=_e(Yu),Xu=ee({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ju=_e(Xu),qu=ee({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=_e(qu),t0=[9,13,27,32],sa=ut&&"CompositionEvent"in window,An=null;ut&&"documentMode"in document&&(An=document.documentMode);var i0=ut&&"TextEvent"in window&&!An,zf=ut&&(!sa||An&&8<An&&11>=An),hd=String.fromCharCode(32),pd=!1;function Af(e,i){switch(e){case"keyup":return t0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bi=!1;function n0(e,i){switch(e){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(pd=!0,hd);case"textInput":return e=i.data,e===hd&&pd?null:e;default:return null}}function r0(e,i){if(bi)return e==="compositionend"||!sa&&Af(e,i)?(e=kf(),_r=ra=It=null,bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zf&&i.locale!=="ko"?null:i.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ud(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!l0[e.type]:i==="textarea"}function Pf(e,i,n,r){lf(r),i=sl(i,"onChange"),0<i.length&&(n=new la("onChange","change",null,n,r),e.push({event:n,listeners:i}))}var In=null,Bn=null;function o0(e){Nf(e,0)}function Cl(e){var i=ki(e);if(Xc(i))return e}function s0(e,i){if(e==="change")return i}var Hf=!1;if(ut){var ho;if(ut){var po="oninput"in document;if(!po){var gd=document.createElement("div");gd.setAttribute("oninput","return;"),po=typeof gd.oninput=="function"}ho=po}else ho=!1;Hf=ho&&(!document.documentMode||9<document.documentMode)}function xd(){In&&(In.detachEvent("onpropertychange",Tf),Bn=In=null)}function Tf(e){if(e.propertyName==="value"&&Cl(Bn)){var i=[];Pf(i,Bn,e,qs(e)),df(o0,i)}}function a0(e,i,n){e==="focusin"?(xd(),In=i,Bn=n,In.attachEvent("onpropertychange",Tf)):e==="focusout"&&xd()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(Bn)}function c0(e,i){if(e==="click")return Cl(i)}function f0(e,i){if(e==="input"||e==="change")return Cl(i)}function h0(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var et=typeof Object.is=="function"?Object.is:h0;function Wn(e,i){if(et(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var n=Object.keys(e),r=Object.keys(i);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Bo.call(i,l)||!et(e[l],i[l]))return!1}return!0}function md(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,i){var n=md(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=i&&r>=i)return{node:n,offset:i-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=md(n)}}function Ff(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Ff(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Cf(){for(var e=window,i=el();i instanceof e.HTMLIFrameElement;){try{var n=typeof i.contentWindow.location.href=="string"}catch{n=!1}if(n)e=i.contentWindow;else break;i=el(e.document)}return i}function aa(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}function p0(e){var i=Cf(),n=e.focusedElem,r=e.selectionRange;if(i!==n&&n&&n.ownerDocument&&Ff(n.ownerDocument.documentElement,n)){if(r!==null&&aa(n)){if(i=r.start,e=r.end,e===void 0&&(e=i),"selectionStart"in n)n.selectionStart=i,n.selectionEnd=Math.min(e,n.value.length);else if(e=(i=n.ownerDocument||document)&&i.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=yd(n,o);var s=yd(n,r);l&&s&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(i=i.createRange(),i.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(i),e.extend(s.node,s.offset)):(i.setEnd(s.node,s.offset),e.addRange(i)))}}for(i=[],e=n;e=e.parentNode;)e.nodeType===1&&i.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<i.length;n++)e=i[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u0=ut&&"documentMode"in document&&11>=document.documentMode,vi=null,ls=null,Pn=null,os=!1;function jd(e,i,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||vi==null||vi!==el(r)||(r=vi,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Wn(Pn,r)||(Pn=r,r=sl(ls,"onSelect"),0<r.length&&(i=new la("onSelect","select",null,i,n),e.push({event:i,listeners:r}),i.target=vi)))}function yr(e,i){var n={};return n[e.toLowerCase()]=i.toLowerCase(),n["Webkit"+e]="webkit"+i,n["Moz"+e]="moz"+i,n}var Si={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionend:yr("Transition","TransitionEnd")},uo={},Ef={};ut&&(Ef=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function El(e){if(uo[e])return uo[e];if(!Si[e])return e;var i=Si[e],n;for(n in i)if(i.hasOwnProperty(n)&&n in Ef)return uo[e]=i[n];return e}var Df=El("animationend"),Mf=El("animationiteration"),Uf=El("animationstart"),Lf=El("transitionend"),_f=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,i){_f.set(e,i),hi(i,[e])}for(var go=0;go<wd.length;go++){var xo=wd[go],g0=xo.toLowerCase(),x0=xo[0].toUpperCase()+xo.slice(1);Wt(g0,"on"+x0)}Wt(Df,"onAnimationEnd");Wt(Mf,"onAnimationIteration");Wt(Uf,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(Lf,"onTransitionEnd");Ni("onMouseEnter",["mouseout","mouseover"]);Ni("onMouseLeave",["mouseout","mouseover"]);Ni("onPointerEnter",["pointerout","pointerover"]);Ni("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(vn));function bd(e,i,n){var r=e.type||"unknown-event";e.currentTarget=n,gu(r,i,void 0,e),e.currentTarget=null}function Nf(e,i){i=(i&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(i)for(var s=r.length-1;0<=s;s--){var a=r[s],d=a.instance,c=a.currentTarget;if(a=a.listener,d!==o&&l.isPropagationStopped())break e;bd(l,a,c),o=d}else for(s=0;s<r.length;s++){if(a=r[s],d=a.instance,c=a.currentTarget,a=a.listener,d!==o&&l.isPropagationStopped())break e;bd(l,a,c),o=d}}}if(il)throw e=ts,il=!1,ts=null,e}function Q(e,i){var n=i[fs];n===void 0&&(n=i[fs]=new Set);var r=e+"__bubble";n.has(r)||(Bf(i,e,2,!1),n.add(r))}function mo(e,i,n){var r=0;i&&(r|=4),Bf(n,e,r,i)}var jr="_reactListening"+Math.random().toString(36).slice(2);function On(e){if(!e[jr]){e[jr]=!0,Vc.forEach(function(n){n!=="selectionchange"&&(m0.has(n)||mo(n,!1,e),mo(n,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[jr]||(i[jr]=!0,mo("selectionchange",!1,i))}}function Bf(e,i,n,r){switch(Sf(i)){case 1:var l=Fu;break;case 4:l=Cu;break;default:l=na}n=l.bind(null,i,n,e),l=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(i,n,{capture:!0,passive:l}):e.addEventListener(i,n,!0):l!==void 0?e.addEventListener(i,n,{passive:l}):e.addEventListener(i,n,!1)}function yo(e,i,n,r,l){var o=r;if(!(i&1)&&!(i&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===l||a.nodeType===8&&a.parentNode===l)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;s=s.return}for(;a!==null;){if(s=qt(a),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}a=a.parentNode}}r=r.return}df(function(){var c=o,x=qs(n),g=[];e:{var m=_f.get(e);if(m!==void 0){var j=la,w=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":j=Zu;break;case"focusin":w="focus",j=fo;break;case"focusout":w="blur",j=fo;break;case"beforeblur":case"afterblur":j=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Ku;break;case Df:case Mf:case Uf:j=_u;break;case Lf:j=Ju;break;case"scroll":j=Eu;break;case"wheel":j=e0;break;case"copy":case"cut":case"paste":j=Bu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=fd}var b=(i&4)!==0,A=!b&&e==="scroll",h=b?m!==null?m+"Capture":null:m;b=[];for(var f=c,u;f!==null;){u=f;var y=u.stateNode;if(u.tag===5&&y!==null&&(u=y,h!==null&&(y=Un(f,h),y!=null&&b.push(Rn(f,y,u)))),A)break;f=f.return}0<b.length&&(m=new j(m,w,null,n,x),g.push({event:m,listeners:b}))}}if(!(i&7)){e:{if(m=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",m&&n!==Jo&&(w=n.relatedTarget||n.fromElement)&&(qt(w)||w[gt]))break e;if((j||m)&&(m=x.window===x?x:(m=x.ownerDocument)?m.defaultView||m.parentWindow:window,j?(w=n.relatedTarget||n.toElement,j=c,w=w?qt(w):null,w!==null&&(A=pi(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=c),j!==w)){if(b=dd,y="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=fd,y="onPointerLeave",h="onPointerEnter",f="pointer"),A=j==null?m:ki(j),u=w==null?m:ki(w),m=new b(y,f+"leave",j,n,x),m.target=A,m.relatedTarget=u,y=null,qt(x)===c&&(b=new b(h,f+"enter",w,n,x),b.target=u,b.relatedTarget=A,y=b),A=y,j&&w)t:{for(b=j,h=w,f=0,u=b;u;u=mi(u))f++;for(u=0,y=h;y;y=mi(y))u++;for(;0<f-u;)b=mi(b),f--;for(;0<u-f;)h=mi(h),u--;for(;f--;){if(b===h||h!==null&&b===h.alternate)break t;b=mi(b),h=mi(h)}b=null}else b=null;j!==null&&vd(g,m,j,b,!1),w!==null&&A!==null&&vd(g,A,w,b,!0)}}e:{if(m=c?ki(c):window,j=m.nodeName&&m.nodeName.toLowerCase(),j==="select"||j==="input"&&m.type==="file")var k=s0;else if(ud(m))if(Hf)k=f0;else{k=d0;var z=a0}else(j=m.nodeName)&&j.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=c0);if(k&&(k=k(e,c))){Pf(g,k,n,x);break e}z&&z(e,m,c),e==="focusout"&&(z=m._wrapperState)&&z.controlled&&m.type==="number"&&Zo(m,"number",m.value)}switch(z=c?ki(c):window,e){case"focusin":(ud(z)||z.contentEditable==="true")&&(vi=z,ls=c,Pn=null);break;case"focusout":Pn=ls=vi=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,jd(g,n,x);break;case"selectionchange":if(u0)break;case"keydown":case"keyup":jd(g,n,x)}var v;if(sa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else bi?Af(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(zf&&n.locale!=="ko"&&(bi||T!=="onCompositionStart"?T==="onCompositionEnd"&&bi&&(v=kf()):(It=x,ra="value"in It?It.value:It.textContent,bi=!0)),z=sl(c,T),0<z.length&&(T=new cd(T,e,null,n,x),g.push({event:T,listeners:z}),v?T.data=v:(v=If(n),v!==null&&(T.data=v)))),(v=i0?n0(e,n):r0(e,n))&&(c=sl(c,"onBeforeInput"),0<c.length&&(x=new cd("onBeforeInput","beforeinput",null,n,x),g.push({event:x,listeners:c}),x.data=v))}Nf(g,i)})}function Rn(e,i,n){return{instance:e,listener:i,currentTarget:n}}function sl(e,i){for(var n=i+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Un(e,n),o!=null&&r.unshift(Rn(e,o,l)),o=Un(e,i),o!=null&&r.push(Rn(e,o,l))),e=e.return}return r}function mi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vd(e,i,n,r,l){for(var o=i._reactName,s=[];n!==null&&n!==r;){var a=n,d=a.alternate,c=a.stateNode;if(d!==null&&d===r)break;a.tag===5&&c!==null&&(a=c,l?(d=Un(n,o),d!=null&&s.unshift(Rn(n,d,a))):l||(d=Un(n,o),d!=null&&s.push(Rn(n,d,a)))),n=n.return}s.length!==0&&e.push({event:i,listeners:s})}var y0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function Sd(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(j0,"")}function wr(e,i,n){if(i=Sd(i),Sd(e)!==i&&n)throw Error(S(425))}function al(){}var ss=null,as=null;function ds(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(v0)}:cs;function v0(e){setTimeout(function(){throw e})}function jo(e,i){var n=i,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Nn(i);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Nn(i)}function Et(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(i===0)return e;i--}else n==="/$"&&i++}e=e.previousSibling}return null}var en=Math.random().toString(36).slice(2),rt="__reactFiber$"+en,$n="__reactProps$"+en,gt="__reactContainer$"+en,fs="__reactEvents$"+en,S0="__reactListeners$"+en,k0="__reactHandles$"+en;function qt(e){var i=e[rt];if(i)return i;for(var n=e.parentNode;n;){if(i=n[gt]||n[rt]){if(n=i.alternate,i.child!==null||n!==null&&n.child!==null)for(e=zd(e);e!==null;){if(n=e[rt])return n;e=zd(e)}return i}e=n,n=e.parentNode}return null}function nr(e){return e=e[rt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Dl(e){return e[$n]||null}var hs=[],zi=-1;function Ot(e){return{current:e}}function K(e){0>zi||(e.current=hs[zi],hs[zi]=null,zi--)}function Z(e,i){zi++,hs[zi]=e.current,e.current=i}var Bt={},ye=Ot(Bt),Ae=Ot(!1),si=Bt;function Bi(e,i){var n=e.type.contextTypes;if(!n)return Bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===i)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=i[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ie(e){return e=e.childContextTypes,e!=null}function dl(){K(Ae),K(ye)}function Ad(e,i,n){if(ye.current!==Bt)throw Error(S(168));Z(ye,i),Z(Ae,n)}function Wf(e,i,n){var r=e.stateNode;if(i=i.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in i))throw Error(S(108,au(e)||"Unknown",l));return ee({},n,r)}function cl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,si=ye.current,Z(ye,e),Z(Ae,Ae.current),!0}function Id(e,i,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Wf(e,i,si),r.__reactInternalMemoizedMergedChildContext=e,K(Ae),K(ye),Z(ye,e)):K(Ae),Z(Ae,n)}var ct=null,Ml=!1,wo=!1;function Of(e){ct===null?ct=[e]:ct.push(e)}function z0(e){Ml=!0,Of(e)}function Rt(){if(!wo&&ct!==null){wo=!0;var e=0,i=B;try{var n=ct;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,Ml=!1}catch(l){throw ct!==null&&(ct=ct.slice(e+1)),pf(ea,Rt),l}finally{B=i,wo=!1}}return null}var Ai=[],Ii=0,fl=null,hl=0,Ne=[],Be=0,ai=null,ft=1,ht="";function Xt(e,i){Ai[Ii++]=hl,Ai[Ii++]=fl,fl=e,hl=i}function Rf(e,i,n){Ne[Be++]=ft,Ne[Be++]=ht,Ne[Be++]=ai,ai=e;var r=ft;e=ht;var l=32-Xe(r)-1;r&=~(1<<l),n+=1;var o=32-Xe(i)+l;if(30<o){var s=l-l%5;o=(r&(1<<s)-1).toString(32),r>>=s,l-=s,ft=1<<32-Xe(i)+l|n<<l|r,ht=o+e}else ft=1<<o|n<<l|r,ht=e}function da(e){e.return!==null&&(Xt(e,1),Rf(e,1,0))}function ca(e){for(;e===fl;)fl=Ai[--Ii],Ai[Ii]=null,hl=Ai[--Ii],Ai[Ii]=null;for(;e===ai;)ai=Ne[--Be],Ne[Be]=null,ht=Ne[--Be],Ne[Be]=null,ft=Ne[--Be],Ne[Be]=null}var Me=null,De=null,X=!1,Ke=null;function $f(e,i){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=i,n.return=e,i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)}function Pd(e,i){switch(e.tag){case 5:var n=e.type;return i=i.nodeType!==1||n.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(e.stateNode=i,Me=e,De=Et(i.firstChild),!0):!1;case 6:return i=e.pendingProps===""||i.nodeType!==3?null:i,i!==null?(e.stateNode=i,Me=e,De=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(n=ai!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:i,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=i,n.return=e,e.child=n,Me=e,De=null,!0):!1;default:return!1}}function ps(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(X){var i=De;if(i){var n=i;if(!Pd(e,i)){if(ps(e))throw Error(S(418));i=Et(n.nextSibling);var r=Me;i&&Pd(e,i)?$f(r,n):(e.flags=e.flags&-4097|2,X=!1,Me=e)}}else{if(ps(e))throw Error(S(418));e.flags=e.flags&-4097|2,X=!1,Me=e}}}function Hd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function br(e){if(e!==Me)return!1;if(!X)return Hd(e),X=!0,!1;var i;if((i=e.tag!==3)&&!(i=e.tag!==5)&&(i=e.type,i=i!=="head"&&i!=="body"&&!ds(e.type,e.memoizedProps)),i&&(i=De)){if(ps(e))throw Gf(),Error(S(418));for(;i;)$f(e,i),i=Et(i.nextSibling)}if(Hd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(i===0){De=Et(e.nextSibling);break e}i--}else n!=="$"&&n!=="$!"&&n!=="$?"||i++}e=e.nextSibling}De=null}}else De=Me?Et(e.stateNode.nextSibling):null;return!0}function Gf(){for(var e=De;e;)e=Et(e.nextSibling)}function Wi(){De=Me=null,X=!1}function fa(e){Ke===null?Ke=[e]:Ke.push(e)}var A0=yt.ReactCurrentBatchConfig;function Qe(e,i){if(e&&e.defaultProps){i=ee({},i),e=e.defaultProps;for(var n in e)i[n]===void 0&&(i[n]=e[n]);return i}return i}var pl=Ot(null),ul=null,Pi=null,ha=null;function pa(){ha=Pi=ul=null}function ua(e){var i=pl.current;K(pl),e._currentValue=i}function gs(e,i,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,r!==null&&(r.childLanes|=i)):r!==null&&(r.childLanes&i)!==i&&(r.childLanes|=i),e===n)break;e=e.return}}function Ui(e,i){ul=e,ha=Pi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&i&&(ke=!0),e.firstContext=null)}function Re(e){var i=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:i,next:null},Pi===null){if(ul===null)throw Error(S(308));Pi=e,ul.dependencies={lanes:0,firstContext:e}}else Pi=Pi.next=e;return i}var ei=null;function ga(e){ei===null?ei=[e]:ei.push(e)}function Vf(e,i,n,r){var l=i.interleaved;return l===null?(n.next=n,ga(i)):(n.next=l.next,l.next=n),i.interleaved=n,xt(e,r)}function xt(e,i){e.lanes|=i;var n=e.alternate;for(n!==null&&(n.lanes|=i),n=e,e=e.return;e!==null;)e.childLanes|=i,n=e.alternate,n!==null&&(n.childLanes|=i),n=e,e=e.return;return n.tag===3?n.stateNode:null}var kt=!1;function xa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,i){return{eventTime:e,lane:i,tag:0,payload:null,callback:null,next:null}}function Dt(e,i,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var l=r.pending;return l===null?i.next=i:(i.next=l.next,l.next=i),r.pending=i,xt(e,n)}return l=r.interleaved,l===null?(i.next=i,ga(r)):(i.next=l.next,l.next=i),r.interleaved=i,xt(e,n)}function Br(e,i,n){if(i=i.updateQueue,i!==null&&(i=i.shared,(n&4194240)!==0)){var r=i.lanes;r&=e.pendingLanes,n|=r,i.lanes=n,ta(e,n)}}function Td(e,i){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?l=o=i:o=o.next=i}else l=o=i;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=i:e.next=i,n.lastBaseUpdate=i}function gl(e,i,n,r){var l=e.updateQueue;kt=!1;var o=l.firstBaseUpdate,s=l.lastBaseUpdate,a=l.shared.pending;if(a!==null){l.shared.pending=null;var d=a,c=d.next;d.next=null,s===null?o=c:s.next=c,s=d;var x=e.alternate;x!==null&&(x=x.updateQueue,a=x.lastBaseUpdate,a!==s&&(a===null?x.firstBaseUpdate=c:a.next=c,x.lastBaseUpdate=d))}if(o!==null){var g=l.baseState;s=0,x=c=d=null,a=o;do{var m=a.lane,j=a.eventTime;if((r&m)===m){x!==null&&(x=x.next={eventTime:j,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,b=a;switch(m=i,j=n,b.tag){case 1:if(w=b.payload,typeof w=="function"){g=w.call(j,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,m=typeof w=="function"?w.call(j,g,m):w,m==null)break e;g=ee({},g,m);break e;case 2:kt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[a]:m.push(a))}else j={eventTime:j,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},x===null?(c=x=j,d=g):x=x.next=j,s|=m;if(a=a.next,a===null){if(a=l.shared.pending,a===null)break;m=a,a=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(1);if(x===null&&(d=g),l.baseState=d,l.firstBaseUpdate=c,l.lastBaseUpdate=x,i=l.shared.interleaved,i!==null){l=i;do s|=l.lane,l=l.next;while(l!==i)}else o===null&&(l.shared.lanes=0);ci|=s,e.lanes=s,e.memoizedState=g}}function Fd(e,i,n){if(e=i.effects,i.effects=null,e!==null)for(i=0;i<e.length;i++){var r=e[i],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(S(191,l));l.call(r)}}}var Qf=new Gc.Component().refs;function xs(e,i,n,r){i=e.memoizedState,n=n(r,i),n=n==null?i:ee({},i,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ul={isMounted:function(e){return(e=e._reactInternals)?pi(e)===e:!1},enqueueSetState:function(e,i,n){e=e._reactInternals;var r=we(),l=Ut(e),o=pt(r,l);o.payload=i,n!=null&&(o.callback=n),i=Dt(e,o,l),i!==null&&(Je(i,e,l,r),Br(i,e,l))},enqueueReplaceState:function(e,i,n){e=e._reactInternals;var r=we(),l=Ut(e),o=pt(r,l);o.tag=1,o.payload=i,n!=null&&(o.callback=n),i=Dt(e,o,l),i!==null&&(Je(i,e,l,r),Br(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var n=we(),r=Ut(e),l=pt(n,r);l.tag=2,i!=null&&(l.callback=i),i=Dt(e,l,r),i!==null&&(Je(i,e,r,n),Br(i,e,r))}};function Cd(e,i,n,r,l,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):i.prototype&&i.prototype.isPureReactComponent?!Wn(n,r)||!Wn(l,o):!0}function Yf(e,i,n){var r=!1,l=Bt,o=i.contextType;return typeof o=="object"&&o!==null?o=Re(o):(l=Ie(i)?si:ye.current,r=i.contextTypes,o=(r=r!=null)?Bi(e,l):Bt),i=new i(n,o),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ul,e.stateNode=i,i._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),i}function Ed(e,i,n,r){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(n,r),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(n,r),i.state!==e&&Ul.enqueueReplaceState(i,i.state,null)}function ms(e,i,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=Qf,xa(e);var o=i.contextType;typeof o=="object"&&o!==null?l.context=Re(o):(o=Ie(i)?si:ye.current,l.context=Bi(e,o)),l.state=e.memoizedState,o=i.getDerivedStateFromProps,typeof o=="function"&&(xs(e,i,o,n),l.state=e.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&Ul.enqueueReplaceState(l,l.state,null),gl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,i,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var l=r,o=""+e;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===o?i.ref:(i=function(s){var a=l.refs;a===Qf&&(a=l.refs={}),s===null?delete a[o]:a[o]=s},i._stringRef=o,i)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function vr(e,i){throw e=Object.prototype.toString.call(i),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e))}function Dd(e){var i=e._init;return i(e._payload)}function Kf(e){function i(h,f){if(e){var u=h.deletions;u===null?(h.deletions=[f],h.flags|=16):u.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)i(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function l(h,f){return h=Lt(h,f),h.index=0,h.sibling=null,h}function o(h,f,u){return h.index=u,e?(u=h.alternate,u!==null?(u=u.index,u<f?(h.flags|=2,f):u):(h.flags|=2,f)):(h.flags|=1048576,f)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,u,y){return f===null||f.tag!==6?(f=Io(u,h.mode,y),f.return=h,f):(f=l(f,u),f.return=h,f)}function d(h,f,u,y){var k=u.type;return k===wi?x(h,f,u.props.children,y,u.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&Dd(k)===f.type)?(y=l(f,u.props),y.ref=un(h,f,u),y.return=h,y):(y=Vr(u.type,u.key,u.props,null,h.mode,y),y.ref=un(h,f,u),y.return=h,y)}function c(h,f,u,y){return f===null||f.tag!==4||f.stateNode.containerInfo!==u.containerInfo||f.stateNode.implementation!==u.implementation?(f=Po(u,h.mode,y),f.return=h,f):(f=l(f,u.children||[]),f.return=h,f)}function x(h,f,u,y,k){return f===null||f.tag!==7?(f=ri(u,h.mode,y,k),f.return=h,f):(f=l(f,u),f.return=h,f)}function g(h,f,u){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Io(""+f,h.mode,u),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case fr:return u=Vr(f.type,f.key,f.props,null,h.mode,u),u.ref=un(h,null,f),u.return=h,u;case ji:return f=Po(f,h.mode,u),f.return=h,f;case St:var y=f._init;return g(h,y(f._payload),u)}if(wn(f)||dn(f))return f=ri(f,h.mode,u,null),f.return=h,f;vr(h,f)}return null}function m(h,f,u,y){var k=f!==null?f.key:null;if(typeof u=="string"&&u!==""||typeof u=="number")return k!==null?null:a(h,f,""+u,y);if(typeof u=="object"&&u!==null){switch(u.$$typeof){case fr:return u.key===k?d(h,f,u,y):null;case ji:return u.key===k?c(h,f,u,y):null;case St:return k=u._init,m(h,f,k(u._payload),y)}if(wn(u)||dn(u))return k!==null?null:x(h,f,u,y,null);vr(h,u)}return null}function j(h,f,u,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(u)||null,a(f,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fr:return h=h.get(y.key===null?u:y.key)||null,d(f,h,y,k);case ji:return h=h.get(y.key===null?u:y.key)||null,c(f,h,y,k);case St:var z=y._init;return j(h,f,u,z(y._payload),k)}if(wn(y)||dn(y))return h=h.get(u)||null,x(f,h,y,k,null);vr(f,y)}return null}function w(h,f,u,y){for(var k=null,z=null,v=f,T=f=0,V=null;v!==null&&T<u.length;T++){v.index>T?(V=v,v=null):V=v.sibling;var M=m(h,v,u[T],y);if(M===null){v===null&&(v=V);break}e&&v&&M.alternate===null&&i(h,v),f=o(M,f,T),z===null?k=M:z.sibling=M,z=M,v=V}if(T===u.length)return n(h,v),X&&Xt(h,T),k;if(v===null){for(;T<u.length;T++)v=g(h,u[T],y),v!==null&&(f=o(v,f,T),z===null?k=v:z.sibling=v,z=v);return X&&Xt(h,T),k}for(v=r(h,v);T<u.length;T++)V=j(v,h,T,u[T],y),V!==null&&(e&&V.alternate!==null&&v.delete(V.key===null?T:V.key),f=o(V,f,T),z===null?k=V:z.sibling=V,z=V);return e&&v.forEach(function(Fe){return i(h,Fe)}),X&&Xt(h,T),k}function b(h,f,u,y){var k=dn(u);if(typeof k!="function")throw Error(S(150));if(u=k.call(u),u==null)throw Error(S(151));for(var z=k=null,v=f,T=f=0,V=null,M=u.next();v!==null&&!M.done;T++,M=u.next()){v.index>T?(V=v,v=null):V=v.sibling;var Fe=m(h,v,M.value,y);if(Fe===null){v===null&&(v=V);break}e&&v&&Fe.alternate===null&&i(h,v),f=o(Fe,f,T),z===null?k=Fe:z.sibling=Fe,z=Fe,v=V}if(M.done)return n(h,v),X&&Xt(h,T),k;if(v===null){for(;!M.done;T++,M=u.next())M=g(h,M.value,y),M!==null&&(f=o(M,f,T),z===null?k=M:z.sibling=M,z=M);return X&&Xt(h,T),k}for(v=r(h,v);!M.done;T++,M=u.next())M=j(v,h,T,M.value,y),M!==null&&(e&&M.alternate!==null&&v.delete(M.key===null?T:M.key),f=o(M,f,T),z===null?k=M:z.sibling=M,z=M);return e&&v.forEach(function(Gt){return i(h,Gt)}),X&&Xt(h,T),k}function A(h,f,u,y){if(typeof u=="object"&&u!==null&&u.type===wi&&u.key===null&&(u=u.props.children),typeof u=="object"&&u!==null){switch(u.$$typeof){case fr:e:{for(var k=u.key,z=f;z!==null;){if(z.key===k){if(k=u.type,k===wi){if(z.tag===7){n(h,z.sibling),f=l(z,u.props.children),f.return=h,h=f;break e}}else if(z.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===St&&Dd(k)===z.type){n(h,z.sibling),f=l(z,u.props),f.ref=un(h,z,u),f.return=h,h=f;break e}n(h,z);break}else i(h,z);z=z.sibling}u.type===wi?(f=ri(u.props.children,h.mode,y,u.key),f.return=h,h=f):(y=Vr(u.type,u.key,u.props,null,h.mode,y),y.ref=un(h,f,u),y.return=h,h=y)}return s(h);case ji:e:{for(z=u.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===u.containerInfo&&f.stateNode.implementation===u.implementation){n(h,f.sibling),f=l(f,u.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else i(h,f);f=f.sibling}f=Po(u,h.mode,y),f.return=h,h=f}return s(h);case St:return z=u._init,A(h,f,z(u._payload),y)}if(wn(u))return w(h,f,u,y);if(dn(u))return b(h,f,u,y);vr(h,u)}return typeof u=="string"&&u!==""||typeof u=="number"?(u=""+u,f!==null&&f.tag===6?(n(h,f.sibling),f=l(f,u),f.return=h,h=f):(n(h,f),f=Io(u,h.mode,y),f.return=h,h=f),s(h)):n(h,f)}return A}var Oi=Kf(!0),Xf=Kf(!1),rr={},ot=Ot(rr),Gn=Ot(rr),Vn=Ot(rr);function ti(e){if(e===rr)throw Error(S(174));return e}function ma(e,i){switch(Z(Vn,i),Z(Gn,e),Z(ot,rr),e=i.nodeType,e){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Yo(null,"");break;default:e=e===8?i.parentNode:i,i=e.namespaceURI||null,e=e.tagName,i=Yo(i,e)}K(ot),Z(ot,i)}function Ri(){K(ot),K(Gn),K(Vn)}function Jf(e){ti(Vn.current);var i=ti(ot.current),n=Yo(i,e.type);i!==n&&(Z(Gn,e),Z(ot,n))}function ya(e){Gn.current===e&&(K(ot),K(Gn))}var J=Ot(0);function xl(e){for(var i=e;i!==null;){if(i.tag===13){var n=i.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var bo=[];function ja(){for(var e=0;e<bo.length;e++)bo[e]._workInProgressVersionPrimary=null;bo.length=0}var Wr=yt.ReactCurrentDispatcher,vo=yt.ReactCurrentBatchConfig,di=0,q=null,se=null,de=null,ml=!1,Hn=!1,Zn=0,I0=0;function ge(){throw Error(S(321))}function wa(e,i){if(i===null)return!1;for(var n=0;n<i.length&&n<e.length;n++)if(!et(e[n],i[n]))return!1;return!0}function ba(e,i,n,r,l,o){if(di=o,q=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Wr.current=e===null||e.memoizedState===null?F0:C0,e=n(r,l),Hn){o=0;do{if(Hn=!1,Zn=0,25<=o)throw Error(S(301));o+=1,de=se=null,i.updateQueue=null,Wr.current=E0,e=n(r,l)}while(Hn)}if(Wr.current=yl,i=se!==null&&se.next!==null,di=0,de=se=q=null,ml=!1,i)throw Error(S(300));return e}function va(){var e=Zn!==0;return Zn=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?q.memoizedState=de=e:de=de.next=e,de}function $e(){if(se===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var i=de===null?q.memoizedState:de.next;if(i!==null)de=i,se=e;else{if(e===null)throw Error(S(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},de===null?q.memoizedState=de=e:de=de.next=e}return de}function Qn(e,i){return typeof i=="function"?i(e):i}function So(e){var i=$e(),n=i.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=se,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var s=l.next;l.next=o.next,o.next=s}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var a=s=null,d=null,c=o;do{var x=c.lane;if((di&x)===x)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:x,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(a=d=g,s=r):d=d.next=g,q.lanes|=x,ci|=x}c=c.next}while(c!==null&&c!==o);d===null?s=r:d.next=a,et(r,i.memoizedState)||(ke=!0),i.memoizedState=r,i.baseState=s,i.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,q.lanes|=o,ci|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[i.memoizedState,n.dispatch]}function ko(e){var i=$e(),n=i.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=i.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do o=e(o,s.action),s=s.next;while(s!==l);et(o,i.memoizedState)||(ke=!0),i.memoizedState=o,i.baseQueue===null&&(i.baseState=o),n.lastRenderedState=o}return[o,r]}function qf(){}function eh(e,i){var n=q,r=$e(),l=i(),o=!et(r.memoizedState,l);if(o&&(r.memoizedState=l,ke=!0),r=r.queue,Sa(nh.bind(null,n,r,e),[e]),r.getSnapshot!==i||o||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Yn(9,ih.bind(null,n,r,l,i),void 0,null),fe===null)throw Error(S(349));di&30||th(n,i,l)}return l}function th(e,i,n){e.flags|=16384,e={getSnapshot:i,value:n},i=q.updateQueue,i===null?(i={lastEffect:null,stores:null},q.updateQueue=i,i.stores=[e]):(n=i.stores,n===null?i.stores=[e]:n.push(e))}function ih(e,i,n,r){i.value=n,i.getSnapshot=r,rh(i)&&lh(e)}function nh(e,i,n){return n(function(){rh(i)&&lh(e)})}function rh(e){var i=e.getSnapshot;e=e.value;try{var n=i();return!et(e,n)}catch{return!0}}function lh(e){var i=xt(e,1);i!==null&&Je(i,e,1,-1)}function Md(e){var i=it();return typeof e=="function"&&(e=e()),i.memoizedState=i.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},i.queue=e,e=e.dispatch=T0.bind(null,q,e),[i.memoizedState,e]}function Yn(e,i,n,r){return e={tag:e,create:i,destroy:n,deps:r,next:null},i=q.updateQueue,i===null?(i={lastEffect:null,stores:null},q.updateQueue=i,i.lastEffect=e.next=e):(n=i.lastEffect,n===null?i.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,i.lastEffect=e)),e}function oh(){return $e().memoizedState}function Or(e,i,n,r){var l=it();q.flags|=e,l.memoizedState=Yn(1|i,n,void 0,r===void 0?null:r)}function Ll(e,i,n,r){var l=$e();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&wa(r,s.deps)){l.memoizedState=Yn(i,n,o,r);return}}q.flags|=e,l.memoizedState=Yn(1|i,n,o,r)}function Ud(e,i){return Or(8390656,8,e,i)}function Sa(e,i){return Ll(2048,8,e,i)}function sh(e,i){return Ll(4,2,e,i)}function ah(e,i){return Ll(4,4,e,i)}function dh(e,i){if(typeof i=="function")return e=e(),i(e),function(){i(null)};if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function ch(e,i,n){return n=n!=null?n.concat([e]):null,Ll(4,4,dh.bind(null,i,e),n)}function ka(){}function fh(e,i){var n=$e();i=i===void 0?null:i;var r=n.memoizedState;return r!==null&&i!==null&&wa(i,r[1])?r[0]:(n.memoizedState=[e,i],e)}function hh(e,i){var n=$e();i=i===void 0?null:i;var r=n.memoizedState;return r!==null&&i!==null&&wa(i,r[1])?r[0]:(e=e(),n.memoizedState=[e,i],e)}function ph(e,i,n){return di&21?(et(n,i)||(n=xf(),q.lanes|=n,ci|=n,e.baseState=!0),i):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function P0(e,i){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),i()}finally{B=n,vo.transition=r}}function uh(){return $e().memoizedState}function H0(e,i,n){var r=Ut(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gh(e))xh(i,n);else if(n=Vf(e,i,n,r),n!==null){var l=we();Je(n,e,r,l),mh(n,i,r)}}function T0(e,i,n){var r=Ut(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gh(e))xh(i,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=i.lastRenderedReducer,o!==null))try{var s=i.lastRenderedState,a=o(s,n);if(l.hasEagerState=!0,l.eagerState=a,et(a,s)){var d=i.interleaved;d===null?(l.next=l,ga(i)):(l.next=d.next,d.next=l),i.interleaved=l;return}}catch{}finally{}n=Vf(e,i,l,r),n!==null&&(l=we(),Je(n,e,r,l),mh(n,i,r))}}function gh(e){var i=e.alternate;return e===q||i!==null&&i===q}function xh(e,i){Hn=ml=!0;var n=e.pending;n===null?i.next=i:(i.next=n.next,n.next=i),e.pending=i}function mh(e,i,n){if(n&4194240){var r=i.lanes;r&=e.pendingLanes,n|=r,i.lanes=n,ta(e,n)}}var yl={readContext:Re,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},F0={readContext:Re,useCallback:function(e,i){return it().memoizedState=[e,i===void 0?null:i],e},useContext:Re,useEffect:Ud,useImperativeHandle:function(e,i,n){return n=n!=null?n.concat([e]):null,Or(4194308,4,dh.bind(null,i,e),n)},useLayoutEffect:function(e,i){return Or(4194308,4,e,i)},useInsertionEffect:function(e,i){return Or(4,2,e,i)},useMemo:function(e,i){var n=it();return i=i===void 0?null:i,e=e(),n.memoizedState=[e,i],e},useReducer:function(e,i,n){var r=it();return i=n!==void 0?n(i):i,r.memoizedState=r.baseState=i,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=H0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var i=it();return e={current:e},i.memoizedState=e},useState:Md,useDebugValue:ka,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Md(!1),i=e[0];return e=P0.bind(null,e[1]),it().memoizedState=e,[i,e]},useMutableSource:function(){},useSyncExternalStore:function(e,i,n){var r=q,l=it();if(X){if(n===void 0)throw Error(S(407));n=n()}else{if(n=i(),fe===null)throw Error(S(349));di&30||th(r,i,n)}l.memoizedState=n;var o={value:n,getSnapshot:i};return l.queue=o,Ud(nh.bind(null,r,o,e),[e]),r.flags|=2048,Yn(9,ih.bind(null,r,o,n,i),void 0,null),n},useId:function(){var e=it(),i=fe.identifierPrefix;if(X){var n=ht,r=ft;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,i=":"+i+"R"+n,n=Zn++,0<n&&(i+="H"+n.toString(32)),i+=":"}else n=I0++,i=":"+i+"r"+n.toString(32)+":";return e.memoizedState=i},unstable_isNewReconciler:!1},C0={readContext:Re,useCallback:fh,useContext:Re,useEffect:Sa,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:ah,useMemo:hh,useReducer:So,useRef:oh,useState:function(){return So(Qn)},useDebugValue:ka,useDeferredValue:function(e){var i=$e();return ph(i,se.memoizedState,e)},useTransition:function(){var e=So(Qn)[0],i=$e().memoizedState;return[e,i]},useMutableSource:qf,useSyncExternalStore:eh,useId:uh,unstable_isNewReconciler:!1},E0={readContext:Re,useCallback:fh,useContext:Re,useEffect:Sa,useImperativeHandle:ch,useInsertionEffect:sh,useLayoutEffect:ah,useMemo:hh,useReducer:ko,useRef:oh,useState:function(){return ko(Qn)},useDebugValue:ka,useDeferredValue:function(e){var i=$e();return se===null?i.memoizedState=e:ph(i,se.memoizedState,e)},useTransition:function(){var e=ko(Qn)[0],i=$e().memoizedState;return[e,i]},useMutableSource:qf,useSyncExternalStore:eh,useId:uh,unstable_isNewReconciler:!1};function $i(e,i){try{var n="",r=i;do n+=su(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:i,stack:l,digest:null}}function zo(e,i,n){return{value:e,source:null,stack:n??null,digest:i??null}}function ys(e,i){try{console.error(i.value)}catch(n){setTimeout(function(){throw n})}}var D0=typeof WeakMap=="function"?WeakMap:Map;function yh(e,i,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=i.value;return n.callback=function(){wl||(wl=!0,Ps=r),ys(e,i)},n}function jh(e,i,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=i.value;n.payload=function(){return r(l)},n.callback=function(){ys(e,i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ys(e,i),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})}),n}function Ld(e,i,n){var r=e.pingCache;if(r===null){r=e.pingCache=new D0;var l=new Set;r.set(i,l)}else l=r.get(i),l===void 0&&(l=new Set,r.set(i,l));l.has(n)||(l.add(n),e=Q0.bind(null,e,i,n),i.then(e,e))}function _d(e){do{var i;if((i=e.tag===13)&&(i=e.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return e;e=e.return}while(e!==null);return null}function Nd(e,i,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===i?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(i=pt(-1,1),i.tag=2,Dt(n,i,1))),n.lanes|=1),e)}var M0=yt.ReactCurrentOwner,ke=!1;function je(e,i,n,r){i.child=e===null?Xf(i,null,n,r):Oi(i,e.child,n,r)}function Bd(e,i,n,r,l){n=n.render;var o=i.ref;return Ui(i,l),r=ba(e,i,n,r,o,l),n=va(),e!==null&&!ke?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,mt(e,i,l)):(X&&n&&da(i),i.flags|=1,je(e,i,r,l),i.child)}function Wd(e,i,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Ca(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(i.tag=15,i.type=o,wh(e,i,o,r,l)):(e=Vr(n.type,null,r,i,i.mode,l),e.ref=i.ref,e.return=i,i.child=e)}if(o=e.child,!(e.lanes&l)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(s,r)&&e.ref===i.ref)return mt(e,i,l)}return i.flags|=1,e=Lt(o,r),e.ref=i.ref,e.return=i,i.child=e}function wh(e,i,n,r,l){if(e!==null){var o=e.memoizedProps;if(Wn(o,r)&&e.ref===i.ref)if(ke=!1,i.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(ke=!0);else return i.lanes=e.lanes,mt(e,i,l)}return js(e,i,n,r,l)}function bh(e,i,n){var r=i.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ti,Ee),Ee|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:e,cachePool:null,transitions:null},i.updateQueue=null,Z(Ti,Ee),Ee|=e,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Z(Ti,Ee),Ee|=r}else o!==null?(r=o.baseLanes|n,i.memoizedState=null):r=n,Z(Ti,Ee),Ee|=r;return je(e,i,l,n),i.child}function vh(e,i){var n=i.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(i.flags|=512,i.flags|=2097152)}function js(e,i,n,r,l){var o=Ie(n)?si:ye.current;return o=Bi(i,o),Ui(i,l),n=ba(e,i,n,r,o,l),r=va(),e!==null&&!ke?(i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~l,mt(e,i,l)):(X&&r&&da(i),i.flags|=1,je(e,i,n,l),i.child)}function Od(e,i,n,r,l){if(Ie(n)){var o=!0;cl(i)}else o=!1;if(Ui(i,l),i.stateNode===null)Rr(e,i),Yf(i,n,r),ms(i,n,r,l),r=!0;else if(e===null){var s=i.stateNode,a=i.memoizedProps;s.props=a;var d=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=Ie(n)?si:ye.current,c=Bi(i,c));var x=n.getDerivedStateFromProps,g=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||d!==c)&&Ed(i,s,r,c),kt=!1;var m=i.memoizedState;s.state=m,gl(i,r,s,l),d=i.memoizedState,a!==r||m!==d||Ae.current||kt?(typeof x=="function"&&(xs(i,n,x,r),d=i.memoizedState),(a=kt||Cd(i,n,a,r,m,d,c))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(i.flags|=4194308)):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=r,i.memoizedState=d),s.props=r,s.state=d,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(i.flags|=4194308),r=!1)}else{s=i.stateNode,Zf(e,i),a=i.memoizedProps,c=i.type===i.elementType?a:Qe(i.type,a),s.props=c,g=i.pendingProps,m=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Re(d):(d=Ie(n)?si:ye.current,d=Bi(i,d));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==g||m!==d)&&Ed(i,s,r,d),kt=!1,m=i.memoizedState,s.state=m,gl(i,r,s,l);var w=i.memoizedState;a!==g||m!==w||Ae.current||kt?(typeof j=="function"&&(xs(i,n,j,r),w=i.memoizedState),(c=kt||Cd(i,n,c,r,m,w,d)||!1)?(x||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,d)),typeof s.componentDidUpdate=="function"&&(i.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(i.flags|=1024),i.memoizedProps=r,i.memoizedState=w),s.props=r,s.state=w,s.context=d,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(i.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(i.flags|=1024),r=!1)}return ws(e,i,n,r,o,l)}function ws(e,i,n,r,l,o){vh(e,i);var s=(i.flags&128)!==0;if(!r&&!s)return l&&Id(i,n,!1),mt(e,i,o);r=i.stateNode,M0.current=i;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return i.flags|=1,e!==null&&s?(i.child=Oi(i,e.child,null,o),i.child=Oi(i,null,a,o)):je(e,i,a,o),i.memoizedState=r.state,l&&Id(i,n,!0),i.child}function Sh(e){var i=e.stateNode;i.pendingContext?Ad(e,i.pendingContext,i.pendingContext!==i.context):i.context&&Ad(e,i.context,!1),ma(e,i.containerInfo)}function Rd(e,i,n,r,l){return Wi(),fa(l),i.flags|=256,je(e,i,n,r),i.child}var bs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function kh(e,i,n){var r=i.pendingProps,l=J.current,o=!1,s=(i.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(l&2)!==0),a?(o=!0,i.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Z(J,l&1),e===null)return us(i),e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(i.mode&1?e.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(s=r.children,e=r.fallback,o?(r=i.mode,o=i.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Bl(s,r,0,null),e=ri(e,r,n,null),o.return=i,e.return=i,o.sibling=e,i.child=o,i.child.memoizedState=vs(n),i.memoizedState=bs,e):za(i,s));if(l=e.memoizedState,l!==null&&(a=l.dehydrated,a!==null))return U0(e,i,s,r,a,l,n);if(o){o=r.fallback,s=i.mode,l=e.child,a=l.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&i.child!==l?(r=i.child,r.childLanes=0,r.pendingProps=d,i.deletions=null):(r=Lt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),a!==null?o=Lt(a,o):(o=ri(o,s,n,null),o.flags|=2),o.return=i,r.return=i,r.sibling=o,i.child=r,r=o,o=i.child,s=e.child.memoizedState,s=s===null?vs(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,i.memoizedState=bs,r}return o=e.child,e=o.sibling,r=Lt(o,{mode:"visible",children:r.children}),!(i.mode&1)&&(r.lanes=n),r.return=i,r.sibling=null,e!==null&&(n=i.deletions,n===null?(i.deletions=[e],i.flags|=16):n.push(e)),i.child=r,i.memoizedState=null,r}function za(e,i){return i=Bl({mode:"visible",children:i},e.mode,0,null),i.return=e,e.child=i}function Sr(e,i,n,r){return r!==null&&fa(r),Oi(i,e.child,null,n),e=za(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function U0(e,i,n,r,l,o,s){if(n)return i.flags&256?(i.flags&=-257,r=zo(Error(S(422))),Sr(e,i,s,r)):i.memoizedState!==null?(i.child=e.child,i.flags|=128,null):(o=r.fallback,l=i.mode,r=Bl({mode:"visible",children:r.children},l,0,null),o=ri(o,l,s,null),o.flags|=2,r.return=i,o.return=i,r.sibling=o,i.child=r,i.mode&1&&Oi(i,e.child,null,s),i.child.memoizedState=vs(s),i.memoizedState=bs,o);if(!(i.mode&1))return Sr(e,i,s,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=zo(o,r,void 0),Sr(e,i,s,r)}if(a=(s&e.childLanes)!==0,ke||a){if(r=fe,r!==null){switch(s&-s){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|s)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,xt(e,l),Je(r,e,l,-1))}return Fa(),r=zo(Error(S(421))),Sr(e,i,s,r)}return l.data==="$?"?(i.flags|=128,i.child=e.child,i=Y0.bind(null,e),l._reactRetry=i,null):(e=o.treeContext,De=Et(l.nextSibling),Me=i,X=!0,Ke=null,e!==null&&(Ne[Be++]=ft,Ne[Be++]=ht,Ne[Be++]=ai,ft=e.id,ht=e.overflow,ai=i),i=za(i,r.children),i.flags|=4096,i)}function $d(e,i,n){e.lanes|=i;var r=e.alternate;r!==null&&(r.lanes|=i),gs(e.return,i,n)}function Ao(e,i,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=i,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function zh(e,i,n){var r=i.pendingProps,l=r.revealOrder,o=r.tail;if(je(e,i,r.children,n),r=J.current,r&2)r=r&1|2,i.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,i);else if(e.tag===19)$d(e,n,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(J,r),!(i.mode&1))i.memoizedState=null;else switch(l){case"forwards":for(n=i.child,l=null;n!==null;)e=n.alternate,e!==null&&xl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=i.child,i.child=null):(l=n.sibling,n.sibling=null),Ao(i,!1,l,n,o);break;case"backwards":for(n=null,l=i.child,i.child=null;l!==null;){if(e=l.alternate,e!==null&&xl(e)===null){i.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Ao(i,!0,n,null,o);break;case"together":Ao(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Rr(e,i){!(i.mode&1)&&e!==null&&(e.alternate=null,i.alternate=null,i.flags|=2)}function mt(e,i,n){if(e!==null&&(i.dependencies=e.dependencies),ci|=i.lanes,!(n&i.childLanes))return null;if(e!==null&&i.child!==e.child)throw Error(S(153));if(i.child!==null){for(e=i.child,n=Lt(e,e.pendingProps),i.child=n,n.return=i;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=i;n.sibling=null}return i.child}function L0(e,i,n){switch(i.tag){case 3:Sh(i),Wi();break;case 5:Jf(i);break;case 1:Ie(i.type)&&cl(i);break;case 4:ma(i,i.stateNode.containerInfo);break;case 10:var r=i.type._context,l=i.memoizedProps.value;Z(pl,r._currentValue),r._currentValue=l;break;case 13:if(r=i.memoizedState,r!==null)return r.dehydrated!==null?(Z(J,J.current&1),i.flags|=128,null):n&i.child.childLanes?kh(e,i,n):(Z(J,J.current&1),e=mt(e,i,n),e!==null?e.sibling:null);Z(J,J.current&1);break;case 19:if(r=(n&i.childLanes)!==0,e.flags&128){if(r)return zh(e,i,n);i.flags|=128}if(l=i.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Z(J,J.current),r)break;return null;case 22:case 23:return i.lanes=0,bh(e,i,n)}return mt(e,i,n)}var Ah,Ss,Ih,Ph;Ah=function(e,i){for(var n=i.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break;for(;n.sibling===null;){if(n.return===null||n.return===i)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};Ih=function(e,i,n,r){var l=e.memoizedProps;if(l!==r){e=i.stateNode,ti(ot.current);var o=null;switch(n){case"input":l=Go(e,l),r=Go(e,r),o=[];break;case"select":l=ee({},l,{value:void 0}),r=ee({},r,{value:void 0}),o=[];break;case"textarea":l=Qo(e,l),r=Qo(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=al)}Ko(n,r);var s;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var a=l[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Dn.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var d=r[c];if(a=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&d!==a&&(d!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&a[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,a=a?a.__html:void 0,d!=null&&a!==d&&(o=o||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&Q("scroll",e),o||a===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(i.updateQueue=c)&&(i.flags|=4)}};Ph=function(e,i,n,r){n!==r&&(i.flags|=4)};function gn(e,i){if(!X)switch(e.tailMode){case"hidden":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function xe(e){var i=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(i)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,i}function _0(e,i,n){var r=i.pendingProps;switch(ca(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(i),null;case 1:return Ie(i.type)&&dl(),xe(i),null;case 3:return r=i.stateNode,Ri(),K(Ae),K(ye),ja(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(br(i)?i.flags|=4:e===null||e.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Ke!==null&&(Fs(Ke),Ke=null))),Ss(e,i),xe(i),null;case 5:ya(i);var l=ti(Vn.current);if(n=i.type,e!==null&&i.stateNode!=null)Ih(e,i,n,r,l),e.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!r){if(i.stateNode===null)throw Error(S(166));return xe(i),null}if(e=ti(ot.current),br(i)){r=i.stateNode,n=i.type;var o=i.memoizedProps;switch(r[rt]=i,r[$n]=o,e=(i.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(l=0;l<vn.length;l++)Q(vn[l],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":qa(r,o),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Q("invalid",r);break;case"textarea":td(r,o),Q("invalid",r)}Ko(n,o),l=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wr(r.textContent,a,e),l=["children",""+a]):Dn.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Q("scroll",r)}switch(n){case"input":hr(r),ed(r,o,!0);break;case"textarea":hr(r),id(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=al)}r=l,i.updateQueue=r,r!==null&&(i.flags|=4)}else{s=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ef(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[rt]=i,e[$n]=r,Ah(e,i,!1,!1),i.stateNode=e;e:{switch(s=Xo(n,r),n){case"dialog":Q("cancel",e),Q("close",e),l=r;break;case"iframe":case"object":case"embed":Q("load",e),l=r;break;case"video":case"audio":for(l=0;l<vn.length;l++)Q(vn[l],e);l=r;break;case"source":Q("error",e),l=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),l=r;break;case"details":Q("toggle",e),l=r;break;case"input":qa(e,r),l=Go(e,r),Q("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=ee({},r,{value:void 0}),Q("invalid",e);break;case"textarea":td(e,r),l=Qo(e,r),Q("invalid",e);break;default:l=r}Ko(n,l),a=l;for(o in a)if(a.hasOwnProperty(o)){var d=a[o];o==="style"?rf(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&tf(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Mn(e,d):typeof d=="number"&&Mn(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Dn.hasOwnProperty(o)?d!=null&&o==="onScroll"&&Q("scroll",e):d!=null&&Ys(e,o,d,s))}switch(n){case"input":hr(e),ed(e,r,!1);break;case"textarea":hr(e),id(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ci(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ci(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xe(i),null;case 6:if(e&&i.stateNode!=null)Ph(e,i,e.memoizedProps,r);else{if(typeof r!="string"&&i.stateNode===null)throw Error(S(166));if(n=ti(Vn.current),ti(ot.current),br(i)){if(r=i.stateNode,n=i.memoizedProps,r[rt]=i,(o=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wr(r.nodeValue,n,(e.mode&1)!==0)}o&&(i.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=i,i.stateNode=r}return xe(i),null;case 13:if(K(J),r=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&De!==null&&i.mode&1&&!(i.flags&128))Gf(),Wi(),i.flags|=98560,o=!1;else if(o=br(i),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=i.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[rt]=i}else Wi(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;xe(i),o=!1}else Ke!==null&&(Fs(Ke),Ke=null),o=!0;if(!o)return i.flags&65536?i:null}return i.flags&128?(i.lanes=n,i):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(i.child.flags|=8192,i.mode&1&&(e===null||J.current&1?ae===0&&(ae=3):Fa())),i.updateQueue!==null&&(i.flags|=4),xe(i),null);case 4:return Ri(),Ss(e,i),e===null&&On(i.stateNode.containerInfo),xe(i),null;case 10:return ua(i.type._context),xe(i),null;case 17:return Ie(i.type)&&dl(),xe(i),null;case 19:if(K(J),o=i.memoizedState,o===null)return xe(i),null;if(r=(i.flags&128)!==0,s=o.rendering,s===null)if(r)gn(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=i.child;e!==null;){if(s=xl(e),s!==null){for(i.flags|=128,gn(o,!1),r=s.updateQueue,r!==null&&(i.updateQueue=r,i.flags|=4),i.subtreeFlags=0,r=n,n=i.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(J,J.current&1|2),i.child}e=e.sibling}o.tail!==null&&ne()>Gi&&(i.flags|=128,r=!0,gn(o,!1),i.lanes=4194304)}else{if(!r)if(e=xl(s),e!==null){if(i.flags|=128,r=!0,n=e.updateQueue,n!==null&&(i.updateQueue=n,i.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return xe(i),null}else 2*ne()-o.renderingStartTime>Gi&&n!==1073741824&&(i.flags|=128,r=!0,gn(o,!1),i.lanes=4194304);o.isBackwards?(s.sibling=i.child,i.child=s):(n=o.last,n!==null?n.sibling=s:i.child=s,o.last=s)}return o.tail!==null?(i=o.tail,o.rendering=i,o.tail=i.sibling,o.renderingStartTime=ne(),i.sibling=null,n=J.current,Z(J,r?n&1|2:n&1),i):(xe(i),null);case 22:case 23:return Ta(),r=i.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(i.flags|=8192),r&&i.mode&1?Ee&1073741824&&(xe(i),i.subtreeFlags&6&&(i.flags|=8192)):xe(i),null;case 24:return null;case 25:return null}throw Error(S(156,i.tag))}function N0(e,i){switch(ca(i),i.tag){case 1:return Ie(i.type)&&dl(),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ri(),K(Ae),K(ye),ja(),e=i.flags,e&65536&&!(e&128)?(i.flags=e&-65537|128,i):null;case 5:return ya(i),null;case 13:if(K(J),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(S(340));Wi()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(J),null;case 4:return Ri(),null;case 10:return ua(i.type._context),null;case 22:case 23:return Ta(),null;case 24:return null;default:return null}}var kr=!1,me=!1,B0=typeof WeakSet=="function"?WeakSet:Set,H=null;function Hi(e,i){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,i,r)}else n.current=null}function ks(e,i,n){try{n()}catch(r){te(e,i,r)}}var Gd=!1;function W0(e,i){if(ss=ll,e=Cf(),aa(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,d=-1,c=0,x=0,g=e,m=null;t:for(;;){for(var j;g!==n||l!==0&&g.nodeType!==3||(a=s+l),g!==o||r!==0&&g.nodeType!==3||(d=s+r),g.nodeType===3&&(s+=g.nodeValue.length),(j=g.firstChild)!==null;)m=g,g=j;for(;;){if(g===e)break t;if(m===n&&++c===l&&(a=s),m===o&&++x===r&&(d=s),(j=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=j}n=a===-1||d===-1?null:{start:a,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(as={focusedElem:e,selectionRange:n},ll=!1,H=i;H!==null;)if(i=H,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,H=e;else for(;H!==null;){i=H;try{var w=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,A=w.memoizedState,h=i.stateNode,f=h.getSnapshotBeforeUpdate(i.elementType===i.type?b:Qe(i.type,b),A);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var u=i.stateNode.containerInfo;u.nodeType===1?u.textContent="":u.nodeType===9&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){te(i,i.return,y)}if(e=i.sibling,e!==null){e.return=i.return,H=e;break}H=i.return}return w=Gd,Gd=!1,w}function Tn(e,i,n){var r=i.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&ks(i,n,o)}l=l.next}while(l!==r)}}function _l(e,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==i)}}function zs(e){var i=e.ref;if(i!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof i=="function"?i(e):i.current=e}}function Hh(e){var i=e.alternate;i!==null&&(e.alternate=null,Hh(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&(delete i[rt],delete i[$n],delete i[fs],delete i[S0],delete i[k0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Th(e){return e.tag===5||e.tag===3||e.tag===4}function Vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,i,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?n.nodeType===8?n.parentNode.insertBefore(e,i):n.insertBefore(e,i):(n.nodeType===8?(i=n.parentNode,i.insertBefore(e,n)):(i=n,i.appendChild(e)),n=n._reactRootContainer,n!=null||i.onclick!==null||(i.onclick=al));else if(r!==4&&(e=e.child,e!==null))for(As(e,i,n),e=e.sibling;e!==null;)As(e,i,n),e=e.sibling}function Is(e,i,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,i?n.insertBefore(e,i):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Is(e,i,n),e=e.sibling;e!==null;)Is(e,i,n),e=e.sibling}var he=null,Ye=!1;function bt(e,i,n){for(n=n.child;n!==null;)Fh(e,i,n),n=n.sibling}function Fh(e,i,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:me||Hi(n,i);case 6:var r=he,l=Ye;he=null,bt(e,i,n),he=r,Ye=l,he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Ye?(e=he,n=n.stateNode,e.nodeType===8?jo(e.parentNode,n):e.nodeType===1&&jo(e,n),Nn(e)):jo(he,n.stateNode));break;case 4:r=he,l=Ye,he=n.stateNode.containerInfo,Ye=!0,bt(e,i,n),he=r,Ye=l;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ks(n,i,s),l=l.next}while(l!==r)}bt(e,i,n);break;case 1:if(!me&&(Hi(n,i),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){te(n,i,a)}bt(e,i,n);break;case 21:bt(e,i,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,bt(e,i,n),me=r):bt(e,i,n);break;default:bt(e,i,n)}}function Zd(e){var i=e.updateQueue;if(i!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new B0),i.forEach(function(r){var l=K0.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Ze(e,i){var n=i.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,s=i,a=s;e:for(;a!==null;){switch(a.tag){case 5:he=a.stateNode,Ye=!1;break e;case 3:he=a.stateNode.containerInfo,Ye=!0;break e;case 4:he=a.stateNode.containerInfo,Ye=!0;break e}a=a.return}if(he===null)throw Error(S(160));Fh(o,s,l),he=null,Ye=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(c){te(l,i,c)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ch(i,e),i=i.sibling}function Ch(e,i){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(i,e),tt(e),r&4){try{Tn(3,e,e.return),_l(3,e)}catch(b){te(e,e.return,b)}try{Tn(5,e,e.return)}catch(b){te(e,e.return,b)}}break;case 1:Ze(i,e),tt(e),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Ze(i,e),tt(e),r&512&&n!==null&&Hi(n,n.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(b){te(e,e.return,b)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Jc(l,o),Xo(a,s);var c=Xo(a,o);for(s=0;s<d.length;s+=2){var x=d[s],g=d[s+1];x==="style"?rf(l,g):x==="dangerouslySetInnerHTML"?tf(l,g):x==="children"?Mn(l,g):Ys(l,x,g,c)}switch(a){case"input":Vo(l,o);break;case"textarea":qc(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var j=o.value;j!=null?Ci(l,!!o.multiple,j,!1):m!==!!o.multiple&&(o.defaultValue!=null?Ci(l,!!o.multiple,o.defaultValue,!0):Ci(l,!!o.multiple,o.multiple?[]:"",!1))}l[$n]=o}catch(b){te(e,e.return,b)}}break;case 6:if(Ze(i,e),tt(e),r&4){if(e.stateNode===null)throw Error(S(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(b){te(e,e.return,b)}}break;case 3:if(Ze(i,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nn(i.containerInfo)}catch(b){te(e,e.return,b)}break;case 4:Ze(i,e),tt(e);break;case 13:Ze(i,e),tt(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Pa=ne())),r&4&&Zd(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(me=(c=me)||x,Ze(i,e),me=c):Ze(i,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!x&&e.mode&1)for(H=e,x=e.child;x!==null;){for(g=H=x;H!==null;){switch(m=H,j=m.child,m.tag){case 0:case 11:case 14:case 15:Tn(4,m,m.return);break;case 1:Hi(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{i=r,w.props=i.memoizedProps,w.state=i.memoizedState,w.componentWillUnmount()}catch(b){te(r,n,b)}}break;case 5:Hi(m,m.return);break;case 22:if(m.memoizedState!==null){Yd(g);continue}}j!==null?(j.return=m,H=j):Yd(g)}x=x.sibling}e:for(x=null,g=e;;){if(g.tag===5){if(x===null){x=g;try{l=g.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,d=g.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,a.style.display=nf("display",s))}catch(b){te(e,e.return,b)}}}else if(g.tag===6){if(x===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(b){te(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;x===g&&(x=null),g=g.return}x===g&&(x=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(i,e),tt(e),r&4&&Zd(e);break;case 21:break;default:Ze(i,e),tt(e)}}function tt(e){var i=e.flags;if(i&2){try{e:{for(var n=e.return;n!==null;){if(Th(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Mn(l,""),r.flags&=-33);var o=Vd(e);Is(e,o,l);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Vd(e);As(e,a,s);break;default:throw Error(S(161))}}catch(d){te(e,e.return,d)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function O0(e,i,n){H=e,Eh(e)}function Eh(e,i,n){for(var r=(e.mode&1)!==0;H!==null;){var l=H,o=l.child;if(l.tag===22&&r){var s=l.memoizedState!==null||kr;if(!s){var a=l.alternate,d=a!==null&&a.memoizedState!==null||me;a=kr;var c=me;if(kr=s,(me=d)&&!c)for(H=l;H!==null;)s=H,d=s.child,s.tag===22&&s.memoizedState!==null?Kd(l):d!==null?(d.return=s,H=d):Kd(l);for(;o!==null;)H=o,Eh(o),o=o.sibling;H=l,kr=a,me=c}Qd(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,H=o):Qd(e)}}function Qd(e){for(;H!==null;){var i=H;if(i.flags&8772){var n=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:me||_l(5,i);break;case 1:var r=i.stateNode;if(i.flags&4&&!me)if(n===null)r.componentDidMount();else{var l=i.elementType===i.type?n.memoizedProps:Qe(i.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=i.updateQueue;o!==null&&Fd(i,o,r);break;case 3:var s=i.updateQueue;if(s!==null){if(n=null,i.child!==null)switch(i.child.tag){case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}Fd(i,s,n)}break;case 5:var a=i.stateNode;if(n===null&&i.flags&4){n=a;var d=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var c=i.alternate;if(c!==null){var x=c.memoizedState;if(x!==null){var g=x.dehydrated;g!==null&&Nn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||i.flags&512&&zs(i)}catch(m){te(i,i.return,m)}}if(i===e){H=null;break}if(n=i.sibling,n!==null){n.return=i.return,H=n;break}H=i.return}}function Yd(e){for(;H!==null;){var i=H;if(i===e){H=null;break}var n=i.sibling;if(n!==null){n.return=i.return,H=n;break}H=i.return}}function Kd(e){for(;H!==null;){var i=H;try{switch(i.tag){case 0:case 11:case 15:var n=i.return;try{_l(4,i)}catch(d){te(i,n,d)}break;case 1:var r=i.stateNode;if(typeof r.componentDidMount=="function"){var l=i.return;try{r.componentDidMount()}catch(d){te(i,l,d)}}var o=i.return;try{zs(i)}catch(d){te(i,o,d)}break;case 5:var s=i.return;try{zs(i)}catch(d){te(i,s,d)}}}catch(d){te(i,i.return,d)}if(i===e){H=null;break}var a=i.sibling;if(a!==null){a.return=i.return,H=a;break}H=i.return}}var R0=Math.ceil,jl=yt.ReactCurrentDispatcher,Aa=yt.ReactCurrentOwner,Oe=yt.ReactCurrentBatchConfig,L=0,fe=null,le=null,pe=0,Ee=0,Ti=Ot(0),ae=0,Kn=null,ci=0,Nl=0,Ia=0,Fn=null,Se=null,Pa=0,Gi=1/0,at=null,wl=!1,Ps=null,Mt=null,zr=!1,Pt=null,bl=0,Cn=0,Hs=null,$r=-1,Gr=0;function we(){return L&6?ne():$r!==-1?$r:$r=ne()}function Ut(e){return e.mode&1?L&2&&pe!==0?pe&-pe:A0.transition!==null?(Gr===0&&(Gr=xf()),Gr):(e=B,e!==0||(e=window.event,e=e===void 0?16:Sf(e.type)),e):1}function Je(e,i,n,r){if(50<Cn)throw Cn=0,Hs=null,Error(S(185));tr(e,n,r),(!(L&2)||e!==fe)&&(e===fe&&(!(L&2)&&(Nl|=n),ae===4&&At(e,pe)),Pe(e,r),n===1&&L===0&&!(i.mode&1)&&(Gi=ne()+500,Ml&&Rt()))}function Pe(e,i){var n=e.callbackNode;Au(e,i);var r=rl(e,e===fe?pe:0);if(r===0)n!==null&&ld(n),e.callbackNode=null,e.callbackPriority=0;else if(i=r&-r,e.callbackPriority!==i){if(n!=null&&ld(n),i===1)e.tag===0?z0(Xd.bind(null,e)):Of(Xd.bind(null,e)),b0(function(){!(L&6)&&Rt()}),n=null;else{switch(mf(r)){case 1:n=ea;break;case 4:n=uf;break;case 16:n=nl;break;case 536870912:n=gf;break;default:n=nl}n=Wh(n,Dh.bind(null,e))}e.callbackPriority=i,e.callbackNode=n}}function Dh(e,i){if($r=-1,Gr=0,L&6)throw Error(S(327));var n=e.callbackNode;if(Li()&&e.callbackNode!==n)return null;var r=rl(e,e===fe?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||i)i=vl(e,r);else{i=r;var l=L;L|=2;var o=Uh();(fe!==e||pe!==i)&&(at=null,Gi=ne()+500,ni(e,i));do try{V0();break}catch(a){Mh(e,a)}while(1);pa(),jl.current=o,L=l,le!==null?i=0:(fe=null,pe=0,i=ae)}if(i!==0){if(i===2&&(l=is(e),l!==0&&(r=l,i=Ts(e,l))),i===1)throw n=Kn,ni(e,0),At(e,r),Pe(e,ne()),n;if(i===6)At(e,r);else{if(l=e.current.alternate,!(r&30)&&!$0(l)&&(i=vl(e,r),i===2&&(o=is(e),o!==0&&(r=o,i=Ts(e,o))),i===1))throw n=Kn,ni(e,0),At(e,r),Pe(e,ne()),n;switch(e.finishedWork=l,e.finishedLanes=r,i){case 0:case 1:throw Error(S(345));case 2:Jt(e,Se,at);break;case 3:if(At(e,r),(r&130023424)===r&&(i=Pa+500-ne(),10<i)){if(rl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=cs(Jt.bind(null,e,Se,at),i);break}Jt(e,Se,at);break;case 4:if(At(e,r),(r&4194240)===r)break;for(i=e.eventTimes,l=-1;0<r;){var s=31-Xe(r);o=1<<s,s=i[s],s>l&&(l=s),r&=~o}if(r=l,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=cs(Jt.bind(null,e,Se,at),r);break}Jt(e,Se,at);break;case 5:Jt(e,Se,at);break;default:throw Error(S(329))}}}return Pe(e,ne()),e.callbackNode===n?Dh.bind(null,e):null}function Ts(e,i){var n=Fn;return e.current.memoizedState.isDehydrated&&(ni(e,i).flags|=256),e=vl(e,i),e!==2&&(i=Se,Se=n,i!==null&&Fs(i)),e}function Fs(e){Se===null?Se=e:Se.push.apply(Se,e)}function $0(e){for(var i=e;;){if(i.flags&16384){var n=i.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!et(o(),l))return!1}catch{return!1}}}if(n=i.child,i.subtreeFlags&16384&&n!==null)n.return=i,i=n;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function At(e,i){for(i&=~Ia,i&=~Nl,e.suspendedLanes|=i,e.pingedLanes&=~i,e=e.expirationTimes;0<i;){var n=31-Xe(i),r=1<<n;e[n]=-1,i&=~r}}function Xd(e){if(L&6)throw Error(S(327));Li();var i=rl(e,0);if(!(i&1))return Pe(e,ne()),null;var n=vl(e,i);if(e.tag!==0&&n===2){var r=is(e);r!==0&&(i=r,n=Ts(e,r))}if(n===1)throw n=Kn,ni(e,0),At(e,i),Pe(e,ne()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=i,Jt(e,Se,at),Pe(e,ne()),null}function Ha(e,i){var n=L;L|=1;try{return e(i)}finally{L=n,L===0&&(Gi=ne()+500,Ml&&Rt())}}function fi(e){Pt!==null&&Pt.tag===0&&!(L&6)&&Li();var i=L;L|=1;var n=Oe.transition,r=B;try{if(Oe.transition=null,B=1,e)return e()}finally{B=r,Oe.transition=n,L=i,!(L&6)&&Rt()}}function Ta(){Ee=Ti.current,K(Ti)}function ni(e,i){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w0(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(ca(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:Ri(),K(Ae),K(ye),ja();break;case 5:ya(r);break;case 4:Ri();break;case 13:K(J);break;case 19:K(J);break;case 10:ua(r.type._context);break;case 22:case 23:Ta()}n=n.return}if(fe=e,le=e=Lt(e.current,null),pe=Ee=i,ae=0,Kn=null,Ia=Nl=ci=0,Se=Fn=null,ei!==null){for(i=0;i<ei.length;i++)if(n=ei[i],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=l,r.next=s}n.pending=r}ei=null}return e}function Mh(e,i){do{var n=le;try{if(pa(),Wr.current=yl,ml){for(var r=q.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ml=!1}if(di=0,de=se=q=null,Hn=!1,Zn=0,Aa.current=null,n===null||n.return===null){ae=1,Kn=i,le=null;break}e:{var o=e,s=n.return,a=n,d=i;if(i=pe,a.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,x=a,g=x.tag;if(!(x.mode&1)&&(g===0||g===11||g===15)){var m=x.alternate;m?(x.updateQueue=m.updateQueue,x.memoizedState=m.memoizedState,x.lanes=m.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=_d(s);if(j!==null){j.flags&=-257,Nd(j,s,a,o,i),j.mode&1&&Ld(o,c,i),i=j,d=c;var w=i.updateQueue;if(w===null){var b=new Set;b.add(d),i.updateQueue=b}else w.add(d);break e}else{if(!(i&1)){Ld(o,c,i),Fa();break e}d=Error(S(426))}}else if(X&&a.mode&1){var A=_d(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Nd(A,s,a,o,i),fa($i(d,a));break e}}o=d=$i(d,a),ae!==4&&(ae=2),Fn===null?Fn=[o]:Fn.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,i&=-i,o.lanes|=i;var h=yh(o,d,i);Td(o,h);break e;case 1:a=d;var f=o.type,u=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Mt===null||!Mt.has(u)))){o.flags|=65536,i&=-i,o.lanes|=i;var y=jh(o,a,i);Td(o,y);break e}}o=o.return}while(o!==null)}_h(n)}catch(k){i=k,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function Uh(){var e=jl.current;return jl.current=yl,e===null?yl:e}function Fa(){(ae===0||ae===3||ae===2)&&(ae=4),fe===null||!(ci&268435455)&&!(Nl&268435455)||At(fe,pe)}function vl(e,i){var n=L;L|=2;var r=Uh();(fe!==e||pe!==i)&&(at=null,ni(e,i));do try{G0();break}catch(l){Mh(e,l)}while(1);if(pa(),L=n,jl.current=r,le!==null)throw Error(S(261));return fe=null,pe=0,ae}function G0(){for(;le!==null;)Lh(le)}function V0(){for(;le!==null&&!mu();)Lh(le)}function Lh(e){var i=Bh(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,i===null?_h(e):le=i,Aa.current=null}function _h(e){var i=e;do{var n=i.alternate;if(e=i.return,i.flags&32768){if(n=N0(n,i),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,le=null;return}}else if(n=_0(n,i,Ee),n!==null){le=n;return}if(i=i.sibling,i!==null){le=i;return}le=i=e}while(i!==null);ae===0&&(ae=5)}function Jt(e,i,n){var r=B,l=Oe.transition;try{Oe.transition=null,B=1,Z0(e,i,n,r)}finally{Oe.transition=l,B=r}return null}function Z0(e,i,n,r){do Li();while(Pt!==null);if(L&6)throw Error(S(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Iu(e,o),e===fe&&(le=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,Wh(nl,function(){return Li(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var s=B;B=1;var a=L;L|=4,Aa.current=null,W0(e,n),Ch(n,e),p0(as),ll=!!ss,as=ss=null,e.current=n,O0(n),yu(),L=a,B=s,Oe.transition=o}else e.current=n;if(zr&&(zr=!1,Pt=e,bl=l),o=e.pendingLanes,o===0&&(Mt=null),bu(n.stateNode),Pe(e,ne()),i!==null)for(r=e.onRecoverableError,n=0;n<i.length;n++)l=i[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(wl)throw wl=!1,e=Ps,Ps=null,e;return bl&1&&e.tag!==0&&Li(),o=e.pendingLanes,o&1?e===Hs?Cn++:(Cn=0,Hs=e):Cn=0,Rt(),null}function Li(){if(Pt!==null){var e=mf(bl),i=Oe.transition,n=B;try{if(Oe.transition=null,B=16>e?16:e,Pt===null)var r=!1;else{if(e=Pt,Pt=null,bl=0,L&6)throw Error(S(331));var l=L;for(L|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var a=o.deletions;if(a!==null){for(var d=0;d<a.length;d++){var c=a[d];for(H=c;H!==null;){var x=H;switch(x.tag){case 0:case 11:case 15:Tn(8,x,o)}var g=x.child;if(g!==null)g.return=x,H=g;else for(;H!==null;){x=H;var m=x.sibling,j=x.return;if(Hh(x),x===c){H=null;break}if(m!==null){m.return=j,H=m;break}H=j}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var A=b.sibling;b.sibling=null,b=A}while(b!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Tn(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,H=h;break e}H=o.return}}var f=e.current;for(H=f;H!==null;){s=H;var u=s.child;if(s.subtreeFlags&2064&&u!==null)u.return=s,H=u;else e:for(s=f;H!==null;){if(a=H,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:_l(9,a)}}catch(k){te(a,a.return,k)}if(a===s){H=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,H=y;break e}H=a.return}}if(L=l,Rt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Tl,e)}catch{}r=!0}return r}finally{B=n,Oe.transition=i}}return!1}function Jd(e,i,n){i=$i(n,i),i=yh(e,i,1),e=Dt(e,i,1),i=we(),e!==null&&(tr(e,1,i),Pe(e,i))}function te(e,i,n){if(e.tag===3)Jd(e,e,n);else for(;i!==null;){if(i.tag===3){Jd(i,e,n);break}else if(i.tag===1){var r=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=$i(n,e),e=jh(i,e,1),i=Dt(i,e,1),e=we(),i!==null&&(tr(i,1,e),Pe(i,e));break}}i=i.return}}function Q0(e,i,n){var r=e.pingCache;r!==null&&r.delete(i),i=we(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(pe&n)===n&&(ae===4||ae===3&&(pe&130023424)===pe&&500>ne()-Pa?ni(e,0):Ia|=n),Pe(e,i)}function Nh(e,i){i===0&&(e.mode&1?(i=gr,gr<<=1,!(gr&130023424)&&(gr=4194304)):i=1);var n=we();e=xt(e,i),e!==null&&(tr(e,i,n),Pe(e,n))}function Y0(e){var i=e.memoizedState,n=0;i!==null&&(n=i.retryLane),Nh(e,n)}function K0(e,i){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(i),Nh(e,n)}var Bh;Bh=function(e,i,n){if(e!==null)if(e.memoizedProps!==i.pendingProps||Ae.current)ke=!0;else{if(!(e.lanes&n)&&!(i.flags&128))return ke=!1,L0(e,i,n);ke=!!(e.flags&131072)}else ke=!1,X&&i.flags&1048576&&Rf(i,hl,i.index);switch(i.lanes=0,i.tag){case 2:var r=i.type;Rr(e,i),e=i.pendingProps;var l=Bi(i,ye.current);Ui(i,n),l=ba(null,i,r,e,l,n);var o=va();return i.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ie(r)?(o=!0,cl(i)):o=!1,i.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,xa(i),l.updater=Ul,i.stateNode=l,l._reactInternals=i,ms(i,r,e,n),i=ws(null,i,r,!0,o,n)):(i.tag=0,X&&o&&da(i),je(null,i,l,n),i=i.child),i;case 16:r=i.elementType;e:{switch(Rr(e,i),e=i.pendingProps,l=r._init,r=l(r._payload),i.type=r,l=i.tag=J0(r),e=Qe(r,e),l){case 0:i=js(null,i,r,e,n);break e;case 1:i=Od(null,i,r,e,n);break e;case 11:i=Bd(null,i,r,e,n);break e;case 14:i=Wd(null,i,r,Qe(r.type,e),n);break e}throw Error(S(306,r,""))}return i;case 0:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Qe(r,l),js(e,i,r,l,n);case 1:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Qe(r,l),Od(e,i,r,l,n);case 3:e:{if(Sh(i),e===null)throw Error(S(387));r=i.pendingProps,o=i.memoizedState,l=o.element,Zf(e,i),gl(i,r,null,n);var s=i.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},i.updateQueue.baseState=o,i.memoizedState=o,i.flags&256){l=$i(Error(S(423)),i),i=Rd(e,i,r,n,l);break e}else if(r!==l){l=$i(Error(S(424)),i),i=Rd(e,i,r,n,l);break e}else for(De=Et(i.stateNode.containerInfo.firstChild),Me=i,X=!0,Ke=null,n=Xf(i,null,r,n),i.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wi(),r===l){i=mt(e,i,n);break e}je(e,i,r,n)}i=i.child}return i;case 5:return Jf(i),e===null&&us(i),r=i.type,l=i.pendingProps,o=e!==null?e.memoizedProps:null,s=l.children,ds(r,l)?s=null:o!==null&&ds(r,o)&&(i.flags|=32),vh(e,i),je(e,i,s,n),i.child;case 6:return e===null&&us(i),null;case 13:return kh(e,i,n);case 4:return ma(i,i.stateNode.containerInfo),r=i.pendingProps,e===null?i.child=Oi(i,null,r,n):je(e,i,r,n),i.child;case 11:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Qe(r,l),Bd(e,i,r,l,n);case 7:return je(e,i,i.pendingProps,n),i.child;case 8:return je(e,i,i.pendingProps.children,n),i.child;case 12:return je(e,i,i.pendingProps.children,n),i.child;case 10:e:{if(r=i.type._context,l=i.pendingProps,o=i.memoizedProps,s=l.value,Z(pl,r._currentValue),r._currentValue=s,o!==null)if(et(o.value,s)){if(o.children===l.children&&!Ae.current){i=mt(e,i,n);break e}}else for(o=i.child,o!==null&&(o.return=i);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var d=a.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=pt(-1,n&-n),d.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var x=c.pending;x===null?d.next=d:(d.next=x.next,x.next=d),c.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),gs(o.return,n,i),a.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===i.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(S(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gs(s,n,i),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===i){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}je(e,i,l.children,n),i=i.child}return i;case 9:return l=i.type,r=i.pendingProps.children,Ui(i,n),l=Re(l),r=r(l),i.flags|=1,je(e,i,r,n),i.child;case 14:return r=i.type,l=Qe(r,i.pendingProps),l=Qe(r.type,l),Wd(e,i,r,l,n);case 15:return wh(e,i,i.type,i.pendingProps,n);case 17:return r=i.type,l=i.pendingProps,l=i.elementType===r?l:Qe(r,l),Rr(e,i),i.tag=1,Ie(r)?(e=!0,cl(i)):e=!1,Ui(i,n),Yf(i,r,l),ms(i,r,l,n),ws(null,i,r,!0,e,n);case 19:return zh(e,i,n);case 22:return bh(e,i,n)}throw Error(S(156,i.tag))};function Wh(e,i){return pf(e,i)}function X0(e,i,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,i,n,r){return new X0(e,i,n,r)}function Ca(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return Ca(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xs)return 11;if(e===Js)return 14}return 2}function Lt(e,i){var n=e.alternate;return n===null?(n=We(e.tag,i,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=i,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,i=e.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vr(e,i,n,r,l,o){var s=2;if(r=e,typeof e=="function")Ca(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wi:return ri(n.children,l,o,i);case Ks:s=8,l|=8;break;case Wo:return e=We(12,n,i,l|2),e.elementType=Wo,e.lanes=o,e;case Oo:return e=We(13,n,i,l),e.elementType=Oo,e.lanes=o,e;case Ro:return e=We(19,n,i,l),e.elementType=Ro,e.lanes=o,e;case Yc:return Bl(n,l,o,i);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zc:s=10;break e;case Qc:s=9;break e;case Xs:s=11;break e;case Js:s=14;break e;case St:s=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return i=We(s,n,i,l),i.elementType=e,i.type=r,i.lanes=o,i}function ri(e,i,n,r){return e=We(7,e,r,i),e.lanes=n,e}function Bl(e,i,n,r){return e=We(22,e,r,i),e.elementType=Yc,e.lanes=n,e.stateNode={isHidden:!1},e}function Io(e,i,n){return e=We(6,e,null,i),e.lanes=n,e}function Po(e,i,n){return i=We(4,e.children!==null?e.children:[],e.key,i),i.lanes=n,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}function q0(e,i,n,r,l){this.tag=i,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ea(e,i,n,r,l,o,s,a,d){return e=new q0(e,i,n,a,d),i===1?(i=1,o===!0&&(i|=8)):i=0,o=We(3,null,null,i),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xa(o),e}function eg(e,i,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ji,key:r==null?null:""+r,children:e,containerInfo:i,implementation:n}}function Oh(e){if(!e)return Bt;e=e._reactInternals;e:{if(pi(e)!==e||e.tag!==1)throw Error(S(170));var i=e;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ie(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Wf(e,n,i)}return i}function Rh(e,i,n,r,l,o,s,a,d){return e=Ea(n,r,!0,e,l,o,s,a,d),e.context=Oh(null),n=e.current,r=we(),l=Ut(n),o=pt(r,l),o.callback=i??null,Dt(n,o,l),e.current.lanes=l,tr(e,l,r),Pe(e,r),e}function Wl(e,i,n,r){var l=i.current,o=we(),s=Ut(l);return n=Oh(n),i.context===null?i.context=n:i.pendingContext=n,i=pt(o,s),i.payload={element:e},r=r===void 0?null:r,r!==null&&(i.callback=r),e=Dt(l,i,s),e!==null&&(Je(e,l,s,o),Br(e,l,s)),s}function Sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qd(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<i?n:i}}function Da(e,i){qd(e,i),(e=e.alternate)&&qd(e,i)}function tg(){return null}var $h=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ma(e){this._internalRoot=e}Ol.prototype.render=Ma.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(S(409));Wl(e,i,null,null)};Ol.prototype.unmount=Ma.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;fi(function(){Wl(null,e,null,null)}),i[gt]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var i=wf();e={blockedOn:null,target:e,priority:i};for(var n=0;n<zt.length&&i!==0&&i<zt[n].priority;n++);zt.splice(n,0,e),n===0&&vf(e)}};function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ec(){}function ig(e,i,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=Sl(s);o.call(c)}}var s=Rh(i,r,e,0,null,!1,!1,"",ec);return e._reactRootContainer=s,e[gt]=s.current,On(e.nodeType===8?e.parentNode:e),fi(),s}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var a=r;r=function(){var c=Sl(d);a.call(c)}}var d=Ea(e,0,!1,null,null,!1,!1,"",ec);return e._reactRootContainer=d,e[gt]=d.current,On(e.nodeType===8?e.parentNode:e),fi(function(){Wl(i,d,n,r)}),d}function $l(e,i,n,r,l){var o=n._reactRootContainer;if(o){var s=o;if(typeof l=="function"){var a=l;l=function(){var d=Sl(s);a.call(d)}}Wl(i,s,e,l)}else s=ig(n,i,e,l,r);return Sl(s)}yf=function(e){switch(e.tag){case 3:var i=e.stateNode;if(i.current.memoizedState.isDehydrated){var n=bn(i.pendingLanes);n!==0&&(ta(i,n|1),Pe(i,ne()),!(L&6)&&(Gi=ne()+500,Rt()))}break;case 13:fi(function(){var r=xt(e,1);if(r!==null){var l=we();Je(r,e,1,l)}}),Da(e,1)}};ia=function(e){if(e.tag===13){var i=xt(e,134217728);if(i!==null){var n=we();Je(i,e,134217728,n)}Da(e,134217728)}};jf=function(e){if(e.tag===13){var i=Ut(e),n=xt(e,i);if(n!==null){var r=we();Je(n,e,i,r)}Da(e,i)}};wf=function(){return B};bf=function(e,i){var n=B;try{return B=e,i()}finally{B=n}};qo=function(e,i,n){switch(i){case"input":if(Vo(e,n),i=n.name,n.type==="radio"&&i!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<n.length;i++){var r=n[i];if(r!==e&&r.form===e.form){var l=Dl(r);if(!l)throw Error(S(90));Xc(r),Vo(r,l)}}}break;case"textarea":qc(e,n);break;case"select":i=n.value,i!=null&&Ci(e,!!n.multiple,i,!1)}};sf=Ha;af=fi;var ng={usingClientEntryPoint:!1,Events:[nr,ki,Dl,lf,of,Ha]},xn={findFiberByHostInstance:qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rg={bundleType:xn.bundleType,version:xn.version,rendererPackageName:xn.rendererPackageName,rendererConfig:xn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ff(e),e===null?null:e.stateNode},findFiberByHostInstance:xn.findFiberByHostInstance||tg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ar=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ar.isDisabled&&Ar.supportsFiber)try{Tl=Ar.inject(rg),lt=Ar}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ng;Le.createPortal=function(e,i){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ua(i))throw Error(S(200));return eg(e,i,null,n)};Le.createRoot=function(e,i){if(!Ua(e))throw Error(S(299));var n=!1,r="",l=$h;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(r=i.identifierPrefix),i.onRecoverableError!==void 0&&(l=i.onRecoverableError)),i=Ea(e,1,!1,null,null,n,!1,r,l),e[gt]=i.current,On(e.nodeType===8?e.parentNode:e),new Ma(i)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ff(i),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return fi(e)};Le.hydrate=function(e,i,n){if(!Rl(i))throw Error(S(200));return $l(null,e,i,!0,n)};Le.hydrateRoot=function(e,i,n){if(!Ua(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",s=$h;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),i=Rh(i,null,e,1,n??null,l,!1,o,s),e[gt]=i.current,On(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[n,l]:i.mutableSourceEagerHydrationData.push(n,l);return new Ol(i)};Le.render=function(e,i,n){if(!Rl(i))throw Error(S(200));return $l(null,e,i,!1,n)};Le.unmountComponentAtNode=function(e){if(!Rl(e))throw Error(S(40));return e._reactRootContainer?(fi(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Le.unstable_batchedUpdates=Ha;Le.unstable_renderSubtreeIntoContainer=function(e,i,n,r){if(!Rl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return $l(e,i,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function Gh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)}catch(e){console.error(e)}}Gh(),Oc.exports=Le;var lg=Oc.exports,tc=lg;No.createRoot=tc.createRoot,No.hydrateRoot=tc.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xn(){return Xn=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xn.apply(this,arguments)}var Ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ht||(Ht={}));const ic="popstate";function og(e){e===void 0&&(e={});function i(r,l){let{pathname:o,search:s,hash:a}=r.location;return Cs("",{pathname:o,search:s,hash:a},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(r,l){return typeof l=="string"?l:kl(l)}return ag(i,n,null,e)}function oe(e,i){if(e===!1||e===null||typeof e>"u")throw new Error(i)}function Vh(e,i){if(!e){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function sg(){return Math.random().toString(36).substr(2,8)}function nc(e,i){return{usr:e.state,key:e.key,idx:i}}function Cs(e,i,n,r){return n===void 0&&(n=null),Xn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof i=="string"?tn(i):i,{state:n,key:i&&i.key||r||sg()})}function kl(e){let{pathname:i="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(i+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(i+=r.charAt(0)==="#"?r:"#"+r),i}function tn(e){let i={};if(e){let n=e.indexOf("#");n>=0&&(i.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(i.search=e.substr(r),e=e.substr(0,r)),e&&(i.pathname=e)}return i}function ag(e,i,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:o=!1}=r,s=l.history,a=Ht.Pop,d=null,c=x();c==null&&(c=0,s.replaceState(Xn({},s.state,{idx:c}),""));function x(){return(s.state||{idx:null}).idx}function g(){a=Ht.Pop;let A=x(),h=A==null?null:A-c;c=A,d&&d({action:a,location:b.location,delta:h})}function m(A,h){a=Ht.Push;let f=Cs(b.location,A,h);n&&n(f,A),c=x()+1;let u=nc(f,c),y=b.createHref(f);try{s.pushState(u,"",y)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;l.location.assign(y)}o&&d&&d({action:a,location:b.location,delta:1})}function j(A,h){a=Ht.Replace;let f=Cs(b.location,A,h);n&&n(f,A),c=x();let u=nc(f,c),y=b.createHref(f);s.replaceState(u,"",y),o&&d&&d({action:a,location:b.location,delta:0})}function w(A){let h=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof A=="string"?A:kl(A);return f=f.replace(/ $/,"%20"),oe(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let b={get action(){return a},get location(){return e(l,s)},listen(A){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(ic,g),d=A,()=>{l.removeEventListener(ic,g),d=null}},createHref(A){return i(l,A)},createURL:w,encodeLocation(A){let h=w(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:j,go(A){return s.go(A)}};return b}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function dg(e,i,n){n===void 0&&(n="/");let r=typeof i=="string"?tn(i):i,l=La(r.pathname||"/",n);if(l==null)return null;let o=Zh(e);cg(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let d=vg(l);s=jg(o[a],d)}return s}function Zh(e,i,n,r){i===void 0&&(i=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(o,s,a)=>{let d={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(oe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let c=_t([r,d.relativePath]),x=n.concat(d);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zh(o.children,i,x,c)),!(o.path==null&&!o.index)&&i.push({path:c,score:mg(c,o.index),routesMeta:x})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))l(o,s);else for(let d of Qh(o.path))l(o,s,d)}),i}function Qh(e){let i=e.split("/");if(i.length===0)return[];let[n,...r]=i,l=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return l?[o,""]:[o];let s=Qh(r.join("/")),a=[];return a.push(...s.map(d=>d===""?o:[o,d].join("/"))),l&&a.push(...s),a.map(d=>e.startsWith("/")&&d===""?"/":d)}function cg(e){e.sort((i,n)=>i.score!==n.score?n.score-i.score:yg(i.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fg=/^:[\w-]+$/,hg=3,pg=2,ug=1,gg=10,xg=-2,lc=e=>e==="*";function mg(e,i){let n=e.split("/"),r=n.length;return n.some(lc)&&(r+=xg),i&&(r+=pg),n.filter(l=>!lc(l)).reduce((l,o)=>l+(fg.test(o)?hg:o===""?ug:gg),r)}function yg(e,i){return e.length===i.length&&e.slice(0,-1).every((r,l)=>r===i[l])?e[e.length-1]-i[i.length-1]:0}function jg(e,i){let{routesMeta:n}=e,r={},l="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],d=s===n.length-1,c=l==="/"?i:i.slice(l.length)||"/",x=wg({path:a.relativePath,caseSensitive:a.caseSensitive,end:d},c);if(!x)return null;Object.assign(r,x.params);let g=a.route;o.push({params:r,pathname:_t([l,x.pathname]),pathnameBase:Ag(_t([l,x.pathnameBase])),route:g}),x.pathnameBase!=="/"&&(l=_t([l,x.pathnameBase]))}return o}function wg(e,i){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=bg(e.path,e.caseSensitive,e.end),l=i.match(n);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),a=l.slice(1);return{params:r.reduce((c,x,g)=>{let{paramName:m,isOptional:j}=x;if(m==="*"){let b=a[g]||"";s=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const w=a[g];return j&&!w?c[m]=void 0:c[m]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function bg(e,i,n){i===void 0&&(i=!1),n===void 0&&(n=!0),Vh(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,d)=>(r.push({paramName:a,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,i?void 0:"i"),r]}function vg(e){try{return e.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Vh(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),e}}function La(e,i){if(i==="/")return e;if(!e.toLowerCase().startsWith(i.toLowerCase()))return null;let n=i.endsWith("/")?i.length-1:i.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Sg(e,i){i===void 0&&(i="/");let{pathname:n,search:r="",hash:l=""}=typeof e=="string"?tn(e):e;return{pathname:n?n.startsWith("/")?n:kg(n,i):i,search:Ig(r),hash:Pg(l)}}function kg(e,i){let n=i.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function Ho(e,i,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function zg(e){return e.filter((i,n)=>n===0||i.route.path&&i.route.path.length>0)}function Yh(e,i){let n=zg(e);return i?n.map((r,l)=>l===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Kh(e,i,n,r){r===void 0&&(r=!1);let l;typeof e=="string"?l=tn(e):(l=Xn({},e),oe(!l.pathname||!l.pathname.includes("?"),Ho("?","pathname","search",l)),oe(!l.pathname||!l.pathname.includes("#"),Ho("#","pathname","hash",l)),oe(!l.search||!l.search.includes("#"),Ho("#","search","hash",l)));let o=e===""||l.pathname==="",s=o?"/":l.pathname,a;if(s==null)a=n;else{let g=i.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),g-=1;l.pathname=m.join("/")}a=g>=0?i[g]:"/"}let d=Sg(l,a),c=s&&s!=="/"&&s.endsWith("/"),x=(o||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||x)&&(d.pathname+="/"),d}const _t=e=>e.join("/").replace(/\/\/+/g,"/"),Ag=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ig=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Xh=["post","put","patch","delete"];new Set(Xh);const Tg=["get",...Xh];new Set(Tg);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jn(){return Jn=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Jn.apply(this,arguments)}const _a=I.createContext(null),Fg=I.createContext(null),ui=I.createContext(null),Gl=I.createContext(null),$t=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Jh=I.createContext(null);function Cg(e,i){let{relative:n}=i===void 0?{}:i;lr()||oe(!1);let{basename:r,navigator:l}=I.useContext(ui),{hash:o,pathname:s,search:a}=ep(e,{relative:n}),d=s;return r!=="/"&&(d=s==="/"?r:_t([r,s])),l.createHref({pathname:d,search:a,hash:o})}function lr(){return I.useContext(Gl)!=null}function or(){return lr()||oe(!1),I.useContext(Gl).location}function qh(e){I.useContext(ui).static||I.useLayoutEffect(e)}function Eg(){let{isDataRoute:e}=I.useContext($t);return e?Qg():Dg()}function Dg(){lr()||oe(!1);let e=I.useContext(_a),{basename:i,future:n,navigator:r}=I.useContext(ui),{matches:l}=I.useContext($t),{pathname:o}=or(),s=JSON.stringify(Yh(l,n.v7_relativeSplatPath)),a=I.useRef(!1);return qh(()=>{a.current=!0}),I.useCallback(function(c,x){if(x===void 0&&(x={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let g=Kh(c,JSON.parse(s),o,x.relative==="path");e==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:_t([i,g.pathname])),(x.replace?r.replace:r.push)(g,x.state,x)},[i,r,s,o,e])}const Mg=I.createContext(null);function Ug(e){let i=I.useContext($t).outlet;return i&&I.createElement(Mg.Provider,{value:e},i)}function ep(e,i){let{relative:n}=i===void 0?{}:i,{future:r}=I.useContext(ui),{matches:l}=I.useContext($t),{pathname:o}=or(),s=JSON.stringify(Yh(l,r.v7_relativeSplatPath));return I.useMemo(()=>Kh(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Lg(e,i){return _g(e,i)}function _g(e,i,n,r){lr()||oe(!1);let{navigator:l}=I.useContext(ui),{matches:o}=I.useContext($t),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=or(),x;if(i){var g;let A=typeof i=="string"?tn(i):i;d==="/"||(g=A.pathname)!=null&&g.startsWith(d)||oe(!1),x=A}else x=c;let m=x.pathname||"/",j=m;if(d!=="/"){let A=d.replace(/^\//,"").split("/");j="/"+m.replace(/^\//,"").split("/").slice(A.length).join("/")}let w=dg(e,{pathname:j}),b=Rg(w&&w.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:_t([d,l.encodeLocation?l.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?d:_t([d,l.encodeLocation?l.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),o,n,r);return i&&b?I.createElement(Gl.Provider,{value:{location:Jn({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Ht.Pop}},b):b}function Ng(){let e=Zg(),i=Hg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},i),n?I.createElement("pre",{style:l},n):null,o)}const Bg=I.createElement(Ng,null);class Wg extends I.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,n){return n.location!==i.location||n.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:n.error,location:n.location,revalidation:i.revalidation||n.revalidation}}componentDidCatch(i,n){console.error("React Router caught the following error during render",i,n)}render(){return this.state.error!==void 0?I.createElement($t.Provider,{value:this.props.routeContext},I.createElement(Jh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Og(e){let{routeContext:i,match:n,children:r}=e,l=I.useContext(_a);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement($t.Provider,{value:i},r)}function Rg(e,i,n,r){var l;if(i===void 0&&(i=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let s=e,a=(l=n)==null?void 0:l.errors;if(a!=null){let x=s.findIndex(g=>g.route.id&&(a==null?void 0:a[g.route.id])!==void 0);x>=0||oe(!1),s=s.slice(0,Math.min(s.length,x+1))}let d=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let x=0;x<s.length;x++){let g=s[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=x),g.route.id){let{loaderData:m,errors:j}=n,w=g.route.loader&&m[g.route.id]===void 0&&(!j||j[g.route.id]===void 0);if(g.route.lazy||w){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((x,g,m)=>{let j,w=!1,b=null,A=null;n&&(j=a&&g.route.id?a[g.route.id]:void 0,b=g.route.errorElement||Bg,d&&(c<0&&m===0?(Yg("route-fallback",!1),w=!0,A=null):c===m&&(w=!0,A=g.route.hydrateFallbackElement||null)));let h=i.concat(s.slice(0,m+1)),f=()=>{let u;return j?u=b:w?u=A:g.route.Component?u=I.createElement(g.route.Component,null):g.route.element?u=g.route.element:u=x,I.createElement(Og,{match:g,routeContext:{outlet:x,matches:h,isDataRoute:n!=null},children:u})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?I.createElement(Wg,{location:n.location,revalidation:n.revalidation,component:b,error:j,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var tp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(tp||{}),zl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(zl||{});function $g(e){let i=I.useContext(_a);return i||oe(!1),i}function Gg(e){let i=I.useContext(Fg);return i||oe(!1),i}function Vg(e){let i=I.useContext($t);return i||oe(!1),i}function ip(e){let i=Vg(),n=i.matches[i.matches.length-1];return n.route.id||oe(!1),n.route.id}function Zg(){var e;let i=I.useContext(Jh),n=Gg(zl.UseRouteError),r=ip(zl.UseRouteError);return i!==void 0?i:(e=n.errors)==null?void 0:e[r]}function Qg(){let{router:e}=$g(tp.UseNavigateStable),i=ip(zl.UseNavigateStable),n=I.useRef(!1);return qh(()=>{n.current=!0}),I.useCallback(function(l,o){o===void 0&&(o={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Jn({fromRouteId:i},o)))},[e,i])}const oc={};function Yg(e,i,n){!i&&!oc[e]&&(oc[e]=!0)}function Kg(e){return Ug(e.context)}function _(e){oe(!1)}function Xg(e){let{basename:i="/",children:n=null,location:r,navigationType:l=Ht.Pop,navigator:o,static:s=!1,future:a}=e;lr()&&oe(!1);let d=i.replace(/^\/*/,"/"),c=I.useMemo(()=>({basename:d,navigator:o,static:s,future:Jn({v7_relativeSplatPath:!1},a)}),[d,a,o,s]);typeof r=="string"&&(r=tn(r));let{pathname:x="/",search:g="",hash:m="",state:j=null,key:w="default"}=r,b=I.useMemo(()=>{let A=La(x,d);return A==null?null:{location:{pathname:A,search:g,hash:m,state:j,key:w},navigationType:l}},[d,x,g,m,j,w,l]);return b==null?null:I.createElement(ui.Provider,{value:c},I.createElement(Gl.Provider,{children:n,value:b}))}function Jg(e){let{children:i,location:n}=e;return Lg(Es(i),n)}new Promise(()=>{});function Es(e,i){i===void 0&&(i=[]);let n=[];return I.Children.forEach(e,(r,l)=>{if(!I.isValidElement(r))return;let o=[...i,l];if(r.type===I.Fragment){n.push.apply(n,Es(r.props.children,o));return}r.type!==_&&oe(!1),!r.props.index||!r.props.children||oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Es(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ds.apply(this,arguments)}function qg(e,i){if(e==null)return{};var n={},r=Object.keys(e),l,o;for(o=0;o<r.length;o++)l=r[o],!(i.indexOf(l)>=0)&&(n[l]=e[l]);return n}function ex(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function tx(e,i){return e.button===0&&(!i||i==="_self")&&!ex(e)}const ix=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],nx="6";try{window.__reactRouterVersion=nx}catch{}const rx="startTransition",sc=Yp[rx];function lx(e){let{basename:i,children:n,future:r,window:l}=e,o=I.useRef();o.current==null&&(o.current=og({window:l,v5Compat:!0}));let s=o.current,[a,d]=I.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},x=I.useCallback(g=>{c&&sc?sc(()=>d(g)):d(g)},[d,c]);return I.useLayoutEffect(()=>s.listen(x),[s,x]),I.createElement(Xg,{basename:i,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const ox=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vi=I.forwardRef(function(i,n){let{onClick:r,relative:l,reloadDocument:o,replace:s,state:a,target:d,to:c,preventScrollReset:x,unstable_viewTransition:g}=i,m=qg(i,ix),{basename:j}=I.useContext(ui),w,b=!1;if(typeof c=="string"&&sx.test(c)&&(w=c,ox))try{let u=new URL(window.location.href),y=c.startsWith("//")?new URL(u.protocol+c):new URL(c),k=La(y.pathname,j);y.origin===u.origin&&k!=null?c=k+y.search+y.hash:b=!0}catch{}let A=Cg(c,{relative:l}),h=ax(c,{replace:s,state:a,target:d,preventScrollReset:x,relative:l,unstable_viewTransition:g});function f(u){r&&r(u),u.defaultPrevented||h(u)}return I.createElement("a",Ds({},m,{href:w||A,onClick:b||o?r:f,ref:n,target:d}))});var ac;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ac||(ac={}));var dc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dc||(dc={}));function ax(e,i){let{target:n,replace:r,state:l,preventScrollReset:o,relative:s,unstable_viewTransition:a}=i===void 0?{}:i,d=Eg(),c=or(),x=ep(e,{relative:s});return I.useCallback(g=>{if(tx(g,n)){g.preventDefault();let m=r!==void 0?r:kl(c)===kl(x);d(e,{replace:m,state:l,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,d,x,r,l,n,e,o,s,a])}var ze=function(){return ze=Object.assign||function(i){for(var n,r=1,l=arguments.length;r<l;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])}return i},ze.apply(this,arguments)};function Al(e,i,n){if(n||arguments.length===2)for(var r=0,l=i.length,o;r<l;r++)(o||!(r in i))&&(o||(o=Array.prototype.slice.call(i,0,r)),o[r]=i[r]);return e.concat(o||Array.prototype.slice.call(i))}var Y="-ms-",En="-moz-",N="-webkit-",np="comm",Vl="rule",Na="decl",dx="@import",rp="@keyframes",cx="@layer",lp=Math.abs,Ba=String.fromCharCode,Ms=Object.assign;function fx(e,i){return ce(e,0)^45?(((i<<2^ce(e,0))<<2^ce(e,1))<<2^ce(e,2))<<2^ce(e,3):0}function op(e){return e.trim()}function dt(e,i){return(e=i.exec(e))?e[0]:e}function D(e,i,n){return e.replace(i,n)}function Zr(e,i,n){return e.indexOf(i,n)}function ce(e,i){return e.charCodeAt(i)|0}function Zi(e,i,n){return e.slice(i,n)}function nt(e){return e.length}function sp(e){return e.length}function Sn(e,i){return i.push(e),e}function hx(e,i){return e.map(i).join("")}function cc(e,i){return e.filter(function(n){return!dt(n,i)})}var Zl=1,Qi=1,ap=0,Ge=0,re=0,nn="";function Ql(e,i,n,r,l,o,s,a){return{value:e,root:i,parent:n,type:r,props:l,children:o,line:Zl,column:Qi,length:s,return:"",siblings:a}}function vt(e,i){return Ms(Ql("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},i)}function yi(e){for(;e.root;)e=vt(e.root,{children:[e]});Sn(e,e.siblings)}function px(){return re}function ux(){return re=Ge>0?ce(nn,--Ge):0,Qi--,re===10&&(Qi=1,Zl--),re}function qe(){return re=Ge<ap?ce(nn,Ge++):0,Qi++,re===10&&(Qi=1,Zl++),re}function li(){return ce(nn,Ge)}function Qr(){return Ge}function Yl(e,i){return Zi(nn,e,i)}function Us(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gx(e){return Zl=Qi=1,ap=nt(nn=e),Ge=0,[]}function xx(e){return nn="",e}function To(e){return op(Yl(Ge-1,Ls(e===91?e+2:e===40?e+1:e)))}function mx(e){for(;(re=li())&&re<33;)qe();return Us(e)>2||Us(re)>3?"":" "}function yx(e,i){for(;--i&&qe()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return Yl(e,Qr()+(i<6&&li()==32&&qe()==32))}function Ls(e){for(;qe();)switch(re){case e:return Ge;case 34:case 39:e!==34&&e!==39&&Ls(re);break;case 40:e===41&&Ls(e);break;case 92:qe();break}return Ge}function jx(e,i){for(;qe()&&e+re!==47+10;)if(e+re===42+42&&li()===47)break;return"/*"+Yl(i,Ge-1)+"*"+Ba(e===47?e:qe())}function wx(e){for(;!Us(li());)qe();return Yl(e,Ge)}function bx(e){return xx(Yr("",null,null,null,[""],e=gx(e),0,[0],e))}function Yr(e,i,n,r,l,o,s,a,d){for(var c=0,x=0,g=s,m=0,j=0,w=0,b=1,A=1,h=1,f=0,u="",y=l,k=o,z=r,v=u;A;)switch(w=f,f=qe()){case 40:if(w!=108&&ce(v,g-1)==58){Zr(v+=D(To(f),"&","&\f"),"&\f",lp(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:v+=To(f);break;case 9:case 10:case 13:case 32:v+=mx(w);break;case 92:v+=yx(Qr()-1,7);continue;case 47:switch(li()){case 42:case 47:Sn(vx(jx(qe(),Qr()),i,n,d),d);break;default:v+="/"}break;case 123*b:a[c++]=nt(v)*h;case 125*b:case 59:case 0:switch(f){case 0:case 125:A=0;case 59+x:h==-1&&(v=D(v,/\f/g,"")),j>0&&nt(v)-g&&Sn(j>32?hc(v+";",r,n,g-1,d):hc(D(v," ","")+";",r,n,g-2,d),d);break;case 59:v+=";";default:if(Sn(z=fc(v,i,n,c,x,l,a,u,y=[],k=[],g,o),o),f===123)if(x===0)Yr(v,i,z,z,y,o,g,a,k);else switch(m===99&&ce(v,3)===110?100:m){case 100:case 108:case 109:case 115:Yr(e,z,z,r&&Sn(fc(e,z,z,0,0,l,a,u,l,y=[],g,k),k),l,k,g,a,r?y:k);break;default:Yr(v,z,z,z,[""],k,0,a,k)}}c=x=j=0,b=h=1,u=v="",g=s;break;case 58:g=1+nt(v),j=w;default:if(b<1){if(f==123)--b;else if(f==125&&b++==0&&ux()==125)continue}switch(v+=Ba(f),f*b){case 38:h=x>0?1:(v+="\f",-1);break;case 44:a[c++]=(nt(v)-1)*h,h=1;break;case 64:li()===45&&(v+=To(qe())),m=li(),x=g=nt(u=v+=wx(Qr())),f++;break;case 45:w===45&&nt(v)==2&&(b=0)}}return o}function fc(e,i,n,r,l,o,s,a,d,c,x,g){for(var m=l-1,j=l===0?o:[""],w=sp(j),b=0,A=0,h=0;b<r;++b)for(var f=0,u=Zi(e,m+1,m=lp(A=s[b])),y=e;f<w;++f)(y=op(A>0?j[f]+" "+u:D(u,/&\f/g,j[f])))&&(d[h++]=y);return Ql(e,i,n,l===0?Vl:a,d,c,x,g)}function vx(e,i,n,r){return Ql(e,i,n,np,Ba(px()),Zi(e,2,-2),0,r)}function hc(e,i,n,r,l){return Ql(e,i,n,Na,Zi(e,0,r),Zi(e,r+1,-1),r,l)}function dp(e,i,n){switch(fx(e,i)){case 5103:return N+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return N+e+e;case 4789:return En+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return N+e+En+e+Y+e+e;case 5936:switch(ce(e,i+11)){case 114:return N+e+Y+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return N+e+Y+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return N+e+Y+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return N+e+Y+e+e;case 6165:return N+e+Y+"flex-"+e+e;case 5187:return N+e+D(e,/(\w+).+(:[^]+)/,N+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return N+e+Y+"flex-item-"+D(e,/flex-|-self/g,"")+(dt(e,/flex-|baseline/)?"":Y+"grid-row-"+D(e,/flex-|-self/g,""))+e;case 4675:return N+e+Y+"flex-line-pack"+D(e,/align-content|flex-|-self/g,"")+e;case 5548:return N+e+Y+D(e,"shrink","negative")+e;case 5292:return N+e+Y+D(e,"basis","preferred-size")+e;case 6060:return N+"box-"+D(e,"-grow","")+N+e+Y+D(e,"grow","positive")+e;case 4554:return N+D(e,/([^-])(transform)/g,"$1"+N+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,N+"$1"),/(image-set)/,N+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,N+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,N+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+N+e+e;case 4200:if(!dt(e,/flex-|baseline/))return Y+"grid-column-align"+Zi(e,i)+e;break;case 2592:case 3360:return Y+D(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,l){return i=l,dt(r.props,/grid-\w+-end/)})?~Zr(e+(n=n[i].value),"span",0)?e:Y+D(e,"-start","")+e+Y+"grid-row-span:"+(~Zr(n,"span",0)?dt(n,/\d+/):+dt(n,/\d+/)-+dt(e,/\d+/))+";":Y+D(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return dt(r.props,/grid-\w+-start/)})?e:Y+D(D(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,N+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(nt(e)-1-i>6)switch(ce(e,i+1)){case 109:if(ce(e,i+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+N+"$2-$3$1"+En+(ce(e,i+3)==108?"$3":"$2-$3"))+e;case 115:return~Zr(e,"stretch",0)?dp(D(e,"stretch","fill-available"),i,n)+e:e}break;case 5152:case 5920:return D(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,l,o,s,a,d,c){return Y+l+":"+o+c+(s?Y+l+"-span:"+(a?d:+d-+o)+c:"")+e});case 4949:if(ce(e,i+6)===121)return D(e,":",":"+N)+e;break;case 6444:switch(ce(e,ce(e,14)===45?18:11)){case 120:return D(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+N+(ce(e,14)===45?"inline-":"")+"box$3$1"+N+"$2$3$1"+Y+"$2box$3")+e;case 100:return D(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return D(e,"scroll-","scroll-snap-")+e}return e}function Il(e,i){for(var n="",r=0;r<e.length;r++)n+=i(e[r],r,e,i)||"";return n}function Sx(e,i,n,r){switch(e.type){case cx:if(e.children.length)break;case dx:case Na:return e.return=e.return||e.value;case np:return"";case rp:return e.return=e.value+"{"+Il(e.children,r)+"}";case Vl:if(!nt(e.value=e.props.join(",")))return""}return nt(n=Il(e.children,r))?e.return=e.value+"{"+n+"}":""}function kx(e){var i=sp(e);return function(n,r,l,o){for(var s="",a=0;a<i;a++)s+=e[a](n,r,l,o)||"";return s}}function zx(e){return function(i){i.root||(i=i.return)&&e(i)}}function Ax(e,i,n,r){if(e.length>-1&&!e.return)switch(e.type){case Na:e.return=dp(e.value,e.length,n);return;case rp:return Il([vt(e,{value:D(e.value,"@","@"+N)})],r);case Vl:if(e.length)return hx(n=e.props,function(l){switch(dt(l,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yi(vt(e,{props:[D(l,/:(read-\w+)/,":"+En+"$1")]})),yi(vt(e,{props:[l]})),Ms(e,{props:cc(n,r)});break;case"::placeholder":yi(vt(e,{props:[D(l,/:(plac\w+)/,":"+N+"input-$1")]})),yi(vt(e,{props:[D(l,/:(plac\w+)/,":"+En+"$1")]})),yi(vt(e,{props:[D(l,/:(plac\w+)/,Y+"input-$1")]})),yi(vt(e,{props:[l]})),Ms(e,{props:cc(n,r)});break}return""})}}var Ix={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Yi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",cp="active",fp="data-styled-version",Kl="6.1.11",Wa=`/*!sc*/
`,Oa=typeof window<"u"&&"HTMLElement"in window,Px=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Xl=Object.freeze([]),Ki=Object.freeze({});function Hx(e,i,n){return n===void 0&&(n=Ki),e.theme!==n.theme&&e.theme||i||n.theme}var hp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Tx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fx=/(^-|-$)/g;function pc(e){return e.replace(Tx,"-").replace(Fx,"")}var Cx=/(a)(d)/gi,Ir=52,uc=function(e){return String.fromCharCode(e+(e>25?39:97))};function _s(e){var i,n="";for(i=Math.abs(e);i>Ir;i=i/Ir|0)n=uc(i%Ir)+n;return(uc(i%Ir)+n).replace(Cx,"$1-$2")}var Fo,pp=5381,Fi=function(e,i){for(var n=i.length;n;)e=33*e^i.charCodeAt(--n);return e},up=function(e){return Fi(pp,e)};function Ex(e){return _s(up(e)>>>0)}function Dx(e){return e.displayName||e.name||"Component"}function Co(e){return typeof e=="string"&&!0}var gp=typeof Symbol=="function"&&Symbol.for,xp=gp?Symbol.for("react.memo"):60115,Mx=gp?Symbol.for("react.forward_ref"):60112,Ux={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_x=((Fo={})[Mx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fo[xp]=mp,Fo);function gc(e){return("type"in(i=e)&&i.type.$$typeof)===xp?mp:"$$typeof"in e?_x[e.$$typeof]:Ux;var i}var Nx=Object.defineProperty,Bx=Object.getOwnPropertyNames,xc=Object.getOwnPropertySymbols,Wx=Object.getOwnPropertyDescriptor,Ox=Object.getPrototypeOf,mc=Object.prototype;function yp(e,i,n){if(typeof i!="string"){if(mc){var r=Ox(i);r&&r!==mc&&yp(e,r,n)}var l=Bx(i);xc&&(l=l.concat(xc(i)));for(var o=gc(e),s=gc(i),a=0;a<l.length;++a){var d=l[a];if(!(d in Lx||n&&n[d]||s&&d in s||o&&d in o)){var c=Wx(i,d);try{Nx(e,d,c)}catch{}}}}return e}function Xi(e){return typeof e=="function"}function Ra(e){return typeof e=="object"&&"styledComponentId"in e}function ii(e,i){return e&&i?"".concat(e," ").concat(i):e||i||""}function yc(e,i){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=i?i+e[r]:e[r];return n}function qn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ns(e,i,n){if(n===void 0&&(n=!1),!n&&!qn(e)&&!Array.isArray(e))return i;if(Array.isArray(i))for(var r=0;r<i.length;r++)e[r]=Ns(e[r],i[r]);else if(qn(i))for(var r in i)e[r]=Ns(e[r],i[r]);return e}function $a(e,i){Object.defineProperty(e,"toString",{value:i})}function sr(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(i.length>0?" Args: ".concat(i.join(", ")):""))}var Rx=function(){function e(i){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=i}return e.prototype.indexOfGroup=function(i){for(var n=0,r=0;r<i;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(i,n){if(i>=this.groupSizes.length){for(var r=this.groupSizes,l=r.length,o=l;i>=o;)if((o<<=1)<0)throw sr(16,"".concat(i));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=l;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(i+1),d=(s=0,n.length);s<d;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[i]++,a++)},e.prototype.clearGroup=function(i){if(i<this.length){var n=this.groupSizes[i],r=this.indexOfGroup(i),l=r+n;this.groupSizes[i]=0;for(var o=r;o<l;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(i){var n="";if(i>=this.length||this.groupSizes[i]===0)return n;for(var r=this.groupSizes[i],l=this.indexOfGroup(i),o=l+r,s=l;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Wa);return n},e}(),Kr=new Map,Pl=new Map,Xr=1,Pr=function(e){if(Kr.has(e))return Kr.get(e);for(;Pl.has(Xr);)Xr++;var i=Xr++;return Kr.set(e,i),Pl.set(i,e),i},$x=function(e,i){Xr=i+1,Kr.set(e,i),Pl.set(i,e)},Gx="style[".concat(Yi,"][").concat(fp,'="').concat(Kl,'"]'),Vx=new RegExp("^".concat(Yi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Zx=function(e,i,n){for(var r,l=n.split(","),o=0,s=l.length;o<s;o++)(r=l[o])&&e.registerName(i,r)},Qx=function(e,i){for(var n,r=((n=i.textContent)!==null&&n!==void 0?n:"").split(Wa),l=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var d=a.match(Vx);if(d){var c=0|parseInt(d[1],10),x=d[2];c!==0&&($x(x,c),Zx(e,x,d[3]),e.getTag().insertRules(c,l)),l.length=0}else l.push(a)}}};function Yx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jp=function(e){var i=document.head,n=e||i,r=document.createElement("style"),l=function(a){var d=Array.from(a.querySelectorAll("style[".concat(Yi,"]")));return d[d.length-1]}(n),o=l!==void 0?l.nextSibling:null;r.setAttribute(Yi,cp),r.setAttribute(fp,Kl);var s=Yx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},Kx=function(){function e(i){this.element=jp(i),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,l=0,o=r.length;l<o;l++){var s=r[l];if(s.ownerNode===n)return s}throw sr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(i,n){try{return this.sheet.insertRule(n,i),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(i){this.sheet.deleteRule(i),this.length--},e.prototype.getRule=function(i){var n=this.sheet.cssRules[i];return n&&n.cssText?n.cssText:""},e}(),Xx=function(){function e(i){this.element=jp(i),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(i,n){if(i<=this.length&&i>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[i]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(i){this.element.removeChild(this.nodes[i]),this.length--},e.prototype.getRule=function(i){return i<this.length?this.nodes[i].textContent:""},e}(),Jx=function(){function e(i){this.rules=[],this.length=0}return e.prototype.insertRule=function(i,n){return i<=this.length&&(this.rules.splice(i,0,n),this.length++,!0)},e.prototype.deleteRule=function(i){this.rules.splice(i,1),this.length--},e.prototype.getRule=function(i){return i<this.length?this.rules[i]:""},e}(),jc=Oa,qx={isServer:!Oa,useCSSOMInjection:!Px},wp=function(){function e(i,n,r){i===void 0&&(i=Ki),n===void 0&&(n={});var l=this;this.options=ze(ze({},qx),i),this.gs=n,this.names=new Map(r),this.server=!!i.isServer,!this.server&&Oa&&jc&&(jc=!1,function(o){for(var s=document.querySelectorAll(Gx),a=0,d=s.length;a<d;a++){var c=s[a];c&&c.getAttribute(Yi)!==cp&&(Qx(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),$a(this,function(){return function(o){for(var s=o.getTag(),a=s.length,d="",c=function(g){var m=function(h){return Pl.get(h)}(g);if(m===void 0)return"continue";var j=o.names.get(m),w=s.getGroup(g);if(j===void 0||w.length===0)return"continue";var b="".concat(Yi,".g").concat(g,'[id="').concat(m,'"]'),A="";j!==void 0&&j.forEach(function(h){h.length>0&&(A+="".concat(h,","))}),d+="".concat(w).concat(b,'{content:"').concat(A,'"}').concat(Wa)},x=0;x<a;x++)c(x);return d}(l)})}return e.registerId=function(i){return Pr(i)},e.prototype.reconstructWithOptions=function(i,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),i),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(i){return this.gs[i]=(this.gs[i]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(i=function(n){var r=n.useCSSOMInjection,l=n.target;return n.isServer?new Jx(l):r?new Kx(l):new Xx(l)}(this.options),new Rx(i)));var i},e.prototype.hasNameForId=function(i,n){return this.names.has(i)&&this.names.get(i).has(n)},e.prototype.registerName=function(i,n){if(Pr(i),this.names.has(i))this.names.get(i).add(n);else{var r=new Set;r.add(n),this.names.set(i,r)}},e.prototype.insertRules=function(i,n,r){this.registerName(i,n),this.getTag().insertRules(Pr(i),r)},e.prototype.clearNames=function(i){this.names.has(i)&&this.names.get(i).clear()},e.prototype.clearRules=function(i){this.getTag().clearGroup(Pr(i)),this.clearNames(i)},e.prototype.clearTag=function(){this.tag=void 0},e}(),em=/&/g,tm=/^\s*\/\/.*$/gm;function bp(e,i){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(i," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(i," ")),n.props=n.props.map(function(r){return"".concat(i," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=bp(n.children,i)),n})}function im(e){var i,n,r,l=e===void 0?Ki:e,o=l.options,s=o===void 0?Ki:o,a=l.plugins,d=a===void 0?Xl:a,c=function(m,j,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(i):m},x=d.slice();x.push(function(m){m.type===Vl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(em,n).replace(r,c))}),s.prefix&&x.push(Ax),x.push(Sx);var g=function(m,j,w,b){j===void 0&&(j=""),w===void 0&&(w=""),b===void 0&&(b="&"),i=b,n=j,r=new RegExp("\\".concat(n,"\\b"),"g");var A=m.replace(tm,""),h=bx(w||j?"".concat(w," ").concat(j," { ").concat(A," }"):A);s.namespace&&(h=bp(h,s.namespace));var f=[];return Il(h,kx(x.concat(zx(function(u){return f.push(u)})))),f};return g.hash=d.length?d.reduce(function(m,j){return j.name||sr(15),Fi(m,j.name)},pp).toString():"",g}var nm=new wp,Bs=im(),vp=_i.createContext({shouldForwardProp:void 0,styleSheet:nm,stylis:Bs});vp.Consumer;_i.createContext(void 0);function wc(){return I.useContext(vp)}var rm=function(){function e(i,n){var r=this;this.inject=function(l,o){o===void 0&&(o=Bs);var s=r.name+o.hash;l.hasNameForId(r.id,s)||l.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=i,this.id="sc-keyframes-".concat(i),this.rules=n,$a(this,function(){throw sr(12,String(r.name))})}return e.prototype.getName=function(i){return i===void 0&&(i=Bs),this.name+i.hash},e}(),lm=function(e){return e>="A"&&e<="Z"};function bc(e){for(var i="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;lm(r)?i+="-"+r.toLowerCase():i+=r}return i.startsWith("ms-")?"-"+i:i}var Sp=function(e){return e==null||e===!1||e===""},kp=function(e){var i,n,r=[];for(var l in e){var o=e[l];e.hasOwnProperty(l)&&!Sp(o)&&(Array.isArray(o)&&o.isCss||Xi(o)?r.push("".concat(bc(l),":"),o,";"):qn(o)?r.push.apply(r,Al(Al(["".concat(l," {")],kp(o),!1),["}"],!1)):r.push("".concat(bc(l),": ").concat((i=l,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||i in Ix||i.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function oi(e,i,n,r){if(Sp(e))return[];if(Ra(e))return[".".concat(e.styledComponentId)];if(Xi(e)){if(!Xi(o=e)||o.prototype&&o.prototype.isReactComponent||!i)return[e];var l=e(i);return oi(l,i,n,r)}var o;return e instanceof rm?n?(e.inject(n,r),[e.getName(r)]):[e]:qn(e)?kp(e):Array.isArray(e)?Array.prototype.concat.apply(Xl,e.map(function(s){return oi(s,i,n,r)})):[e.toString()]}function om(e){for(var i=0;i<e.length;i+=1){var n=e[i];if(Xi(n)&&!Ra(n))return!1}return!0}var sm=up(Kl),am=function(){function e(i,n,r){this.rules=i,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&om(i),this.componentId=n,this.baseHash=Fi(sm,n),this.baseStyle=r,wp.registerId(n)}return e.prototype.generateAndInjectStyles=function(i,n,r){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))l=ii(l,this.staticRulesId);else{var o=yc(oi(this.rules,i,n,r)),s=_s(Fi(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}l=ii(l,s),this.staticRulesId=s}else{for(var d=Fi(this.baseHash,r.hash),c="",x=0;x<this.rules.length;x++){var g=this.rules[x];if(typeof g=="string")c+=g;else if(g){var m=yc(oi(g,i,n,r));d=Fi(d,m+x),c+=m}}if(c){var j=_s(d>>>0);n.hasNameForId(this.componentId,j)||n.insertRules(this.componentId,j,r(c,".".concat(j),void 0,this.componentId)),l=ii(l,j)}}return l},e}(),zp=_i.createContext(void 0);zp.Consumer;var Eo={};function dm(e,i,n){var r=Ra(e),l=e,o=!Co(e),s=i.attrs,a=s===void 0?Xl:s,d=i.componentId,c=d===void 0?function(y,k){var z=typeof y!="string"?"sc":pc(y);Eo[z]=(Eo[z]||0)+1;var v="".concat(z,"-").concat(Ex(Kl+z+Eo[z]));return k?"".concat(k,"-").concat(v):v}(i.displayName,i.parentComponentId):d,x=i.displayName,g=x===void 0?function(y){return Co(y)?"styled.".concat(y):"Styled(".concat(Dx(y),")")}(e):x,m=i.displayName&&i.componentId?"".concat(pc(i.displayName),"-").concat(i.componentId):i.componentId||c,j=r&&l.attrs?l.attrs.concat(a).filter(Boolean):a,w=i.shouldForwardProp;if(r&&l.shouldForwardProp){var b=l.shouldForwardProp;if(i.shouldForwardProp){var A=i.shouldForwardProp;w=function(y,k){return b(y,k)&&A(y,k)}}else w=b}var h=new am(n,m,r?l.componentStyle:void 0);function f(y,k){return function(z,v,T){var V=z.attrs,M=z.componentStyle,Fe=z.defaultProps,Gt=z.foldedComponentIds,Vt=z.styledComponentId,ar=z.target,eo=_i.useContext(zp),sn=wc(),Zt=z.shouldForwardProp||sn.shouldForwardProp,P=Hx(v,eo,Fe)||Ki,C=function(jt,Ce,st){for(var an,Yt=ze(ze({},Ce),{className:void 0,theme:st}),to=0;to<jt.length;to+=1){var dr=Xi(an=jt[to])?an(Yt):an;for(var wt in dr)Yt[wt]=wt==="className"?ii(Yt[wt],dr[wt]):wt==="style"?ze(ze({},Yt[wt]),dr[wt]):dr[wt]}return Ce.className&&(Yt.className=ii(Yt.className,Ce.className)),Yt}(V,v,P),E=C.as||ar,W={};for(var O in C)C[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&C.theme===P||(O==="forwardedAs"?W.as=C.forwardedAs:Zt&&!Zt(O,E)||(W[O]=C[O]));var Qt=function(jt,Ce){var st=wc(),an=jt.generateAndInjectStyles(Ce,st.styleSheet,st.stylis);return an}(M,C),Ve=ii(Gt,Vt);return Qt&&(Ve+=" "+Qt),C.className&&(Ve+=" "+C.className),W[Co(E)&&!hp.has(E)?"class":"className"]=Ve,W.ref=T,I.createElement(E,W)}(u,y,k)}f.displayName=g;var u=_i.forwardRef(f);return u.attrs=j,u.componentStyle=h,u.displayName=g,u.shouldForwardProp=w,u.foldedComponentIds=r?ii(l.foldedComponentIds,l.styledComponentId):"",u.styledComponentId=m,u.target=r?l.target:e,Object.defineProperty(u,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(k){for(var z=[],v=1;v<arguments.length;v++)z[v-1]=arguments[v];for(var T=0,V=z;T<V.length;T++)Ns(k,V[T],!0);return k}({},l.defaultProps,y):y}}),$a(u,function(){return".".concat(u.styledComponentId)}),o&&yp(u,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),u}function vc(e,i){for(var n=[e[0]],r=0,l=i.length;r<l;r+=1)n.push(i[r],e[r+1]);return n}var Sc=function(e){return Object.assign(e,{isCss:!0})};function cm(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];if(Xi(e)||qn(e))return Sc(oi(vc(Xl,Al([e],i,!0))));var r=e;return i.length===0&&r.length===1&&typeof r[0]=="string"?oi(r):Sc(oi(vc(r,i)))}function Ws(e,i,n){if(n===void 0&&(n=Ki),!i)throw sr(1,i);var r=function(l){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(i,n,cm.apply(void 0,Al([l],o,!1)))};return r.attrs=function(l){return Ws(e,i,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,l).filter(Boolean)}))},r.withConfig=function(l){return Ws(e,i,ze(ze({},n),l))},r}var Ap=function(e){return Ws(dm,e)},p=Ap;hp.forEach(function(e){p[e]=Ap(e)});function Ip({color:e="#ef8f30",solid:i}){return t.jsx(t.Fragment,{children:i?t.jsxs("svg",{x:"0px",y:"0px",viewBox:"0 0 203.4 64.3",fill:e,children:[t.jsx("path",{d:`M102.3,0H69c-1.4,0-2.8,0.7-3.6,2L35.6,54.1c-0.5,0.7-1.2,1.1-1.9,1.1c-0.8,0-1.5-0.4-1.9-1.1c-0.4-0.6-0.4-1.4,0-2l26.6-46\r
	C59.1,4.8,59,3.3,58.3,2s-2-2-3.5-2H21.5c-1.4,0-2.8,0.7-3.6,2L2.8,28.4c-0.8,1.3-0.8,2.9,0,4.1l17,29.8c0.8,1.2,2.1,1.9,3.5,1.9\r
	h46.5c1.5,0,2.9-0.8,3.6-2l31.7-54.7l0.8-1.4c0.7-1.3,0.7-2.8-0.1-4.1C105,0.7,103.7,0,102.3,0L102.3,0z`}),t.jsx("path",{d:`M149.8,0h-33.3c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8L80.2,58.6l-0.1,0.2\r
	c-0.4,1.2-0.2,2.6,0.6,3.7c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1\r
	C152.6,0.7,151.3,0,149.8,0L149.8,0z`}),t.jsx("path",{d:`M197.3,0H164c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8l-29.1,50.4l-0.1,0.2\r
	c-0.4,1.2-0.2,2.6,0.6,3.7c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1\r
	C200.1,0.7,198.8,0,197.3,0L197.3,0z`})]}):t.jsxs("svg",{x:"0px",y:"0px",viewBox:"0 0 203.4 64.3",fill:e,children:[t.jsx("path",{d:`M102.3,3c0.4,0,0.7,0.2,0.9,0.6c0.1,0.1,0.3,0.5,0,1.1L102.5,6L70.8,60.7c-0.1,0.3-0.5,0.5-1,0.5H23.3c-0.4,0-0.7-0.2-1-0.5\r
	L5.4,31l-0.1-0.1l-0.1-0.1c-0.1-0.2-0.1-0.6,0.1-0.9l0,0l0,0L20.5,3.5c0.3-0.4,0.7-0.5,1-0.5h33.3c0.6,0,0.8,0.3,0.9,0.4\r
	c0.1,0.3,0.3,0.8,0.1,1.2L29.2,50.5c-1,1.6-1,3.6,0,5.1c0.9,1.6,2.6,2.5,4.5,2.5c1.7,0,3.3-0.9,4.3-2.4l0.1-0.1l0.1-0.1L68,3.5\r
	C68.2,3.1,68.7,3,69,3H102.3 M102.3,0H69c-1.4,0-2.8,0.7-3.6,2L35.6,54.1c-0.5,0.7-1.2,1.1-1.9,1.1c-0.8,0-1.5-0.4-1.9-1.1\r
	c-0.4-0.6-0.4-1.4,0-2l26.6-46C59.1,4.8,59,3.3,58.3,2c-0.7-1.3-2-2-3.5-2H21.5c-1.4,0-2.8,0.7-3.6,2L2.8,28.4\r
	c-0.8,1.3-0.8,2.9,0,4.1l17,29.8c0.8,1.2,2.1,1.9,3.5,1.9h46.5c1.5,0,2.9-0.8,3.6-2l31.7-54.7l0.8-1.4c0.7-1.3,0.7-2.8-0.1-4.1\r
	C105,0.7,103.7,0,102.3,0L102.3,0z`}),t.jsx("path",{d:`M149.8,3c0.6,0,0.8,0.3,0.9,0.4c0.1,0.3,0.3,0.8,0.1,1.2l-32.3,55.9c-0.3,0.4-0.7,0.6-1.2,0.6H84c-0.4,0-0.6-0.2-0.9-0.5\r
	c-0.2-0.2-0.3-0.6-0.2-0.8l29-50.2l0-0.1l0-0.1l0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.4l0.1-0.2l3.1-5.3c0.1-0.3,0.5-0.5,1-0.5H149.8\r
	 M149.8,0h-33.3c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8L80.2,58.6l-0.1,0.2c-0.4,1.2-0.2,2.6,0.6,3.7\r
	c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1C152.6,0.7,151.3,0,149.8,0L149.8,0z`}),t.jsx("path",{d:`M197.3,3c0.6,0,0.8,0.3,0.9,0.4c0.1,0.3,0.3,0.8,0.1,1.2L166,60.6c-0.3,0.4-0.7,0.6-1.2,0.6h-33.3c-0.4,0-0.6-0.2-0.9-0.5\r
	c-0.2-0.2-0.3-0.6-0.2-0.8l29-50.2l0-0.1l0-0.1l0.1-0.1c0.1-0.1,0.1-0.2,0.2-0.4l0.1-0.2l3.1-5.3c0.1-0.3,0.5-0.5,1-0.5H197.3\r
	 M197.3,0H164c-1.5,0-2.9,0.8-3.6,2l-3.1,5.3l-0.1,0.1c-0.1,0.3-0.3,0.6-0.4,0.8l-29.1,50.4l-0.1,0.2c-0.4,1.2-0.2,2.6,0.6,3.7\r
	c0.8,1.1,2,1.7,3.3,1.7h33.3c1.5,0,2.9-0.8,3.7-2l32.4-56.1c0.7-1.3,0.6-2.8-0.1-4.1C200.1,0.7,198.8,0,197.3,0L197.3,0z`})]})})}function fm({color:e="#3a3a3a",solid:i}){return t.jsx(t.Fragment,{children:i?t.jsxs("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 251.1 34",fill:e,children:[t.jsx("path",{fill:"#3a3a3a",d:"M4.2,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M17,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M17,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M29.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M29.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M42.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M42.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M68.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M68.1,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M80.8,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M80.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M93.6,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M93.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M106.4,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M119.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M131.9,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M144.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M144.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M157.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M157.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M170.2,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M170.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M183,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M195.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M208.6,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M208.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M221.3,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M221.3,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M234.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M246.9,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M246.9,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M20.2,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M250.1,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M147.9,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M44.9,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M96,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M223.7,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M173.4,4.2c0-1.8-1.4-3.2-3.2-3.2s-1.8.4-2.4,1.1h0c-2.3,2.3-1.6,5.5-3.8,7.8l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.5.6-.8,1.3-.8,2.2,0,1.8,1.4,3.2,3.2,3.2s2.2-.7,2.8-1.6c1.5-2.2,1.2-5,3.2-7l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6,1.1-1.4,1.1-2.4Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M71.3,29.8c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-2.9-1.3-4.1-2.1c-.8-1-1.8-1.8-1.8-3.7,0-3.2,2.8-3.2,2.8-6.4s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2-.3-2.7-2.8-2.9-2.8-5.9s2.8-3.2,2.8-6.4h0s0,0,0-.1c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2,0,0,0,.1h0c0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0,0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0h0c0,1.7,1.5,3.1,3.2,3.1,3.2,0,3.2-2.8,6.4-2.8s3.2,2.7,6.3,2.8c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0c1.8,0,3.2-1.4,3.2-3.2Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M122.4,4.2c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-3.2-2.8-6.4-2.8-3.2,1.4-3.2,3.2,1.4,3.2,3.2,3.2c3.2,0,3.2-2.8,6.4-2.8s2.8,1.2,3.9,2c.8,1.2,2,1.9,2,4s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M199,4.2c0-1.7-1.3-3.1-3-3.2h0s0,0-.1,0c0,0,0,0,0,0-.2,0-.5,0-.7,0-2.4.4-2.7,2.7-5.6,2.7s-3.2-2.8-6.4-2.8h0s0,0-.1,0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,0,0,.1,0h0c3.2,0,3.2-2.8,6.4-2.8s2.7,1,3.6,1.8c.8,1.3,2.2,2,2.2,4.2s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"})]}):t.jsxs("svg",{id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 251.1 34",fill:e,children:[t.jsx("path",{fill:"#3a3a3a",d:"M4.2,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M17,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M17,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M29.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M29.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M42.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M42.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M68.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M68.1,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M80.8,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M80.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M93.6,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M93.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M106.4,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M119.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M131.9,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M144.7,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M144.7,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M157.5,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M157.5,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M170.2,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M170.2,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M183,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M195.8,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M208.6,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M208.6,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M221.3,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M221.3,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M234.1,1c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M246.9,13.8c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#3a3a3a",d:"M246.9,26.6c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2-1.4-3.2-3.2-3.2h0Z"}),t.jsx("path",{fill:"#e0a070",d:"M20.2,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#e0a070",d:"M250.1,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#e0a070",d:"M147.9,4.2c0-1.8-1.4-3.2-3.2-3.2s-2,.5-2.6,1.4c-1.8,2.2-1.3,5.2-3.5,7.4l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8-.6.6-.9,1.4-.9,2.3,0,3.2,2.8,3.2,2.8,6.4s-2.8,3.2-2.8,6.4,1.4,3.2,3.2,3.2,3.2-1.4,3.2-3.2h0c0-3.2-2.8-3.2-2.8-6.4s.8-2.5,1.5-3.4h0c3.1-3.1,1.9-6.3,4.1-8.5l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6.9-1.4.9-2.3Z"}),t.jsx("path",{fill:"#e0a070",d:"M44.9,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#e0a070",d:"M96,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#e0a070",d:"M223.7,14.9h0c-2.3-2.3-5.5-1.6-7.8-3.9l-1.2-1.2c-2.3-2.3-1.6-5.5-3.8-7.8h0c-.6-.6-1.4-1-2.4-1-1.8,0-3.2,1.4-3.2,3.2s.4,1.8,1.1,2.4h0c2.3,2.3,5.5,1.6,7.8,3.8l1.2,1.2c2,2,1.7,4.8,3.2,7,.5,1,1.6,1.6,2.8,1.6,1.8,0,3.2-1.4,3.2-3.2s-.3-1.6-.8-2.1Z"}),t.jsx("path",{fill:"#e0a070",d:"M173.4,4.2c0-1.8-1.4-3.2-3.2-3.2s-1.8.4-2.4,1.1h0c-2.3,2.3-1.6,5.5-3.8,7.8l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.5.6-.8,1.3-.8,2.2,0,1.8,1.4,3.2,3.2,3.2s2.2-.7,2.8-1.6c1.5-2.2,1.2-5,3.2-7l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8h0c.6-.6,1.1-1.4,1.1-2.4Z"}),t.jsx("path",{fill:"#e0a070",d:"M71.3,29.8c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-2.9-1.3-4.1-2.1c-.8-1-1.8-1.8-1.8-3.7,0-3.2,2.8-3.2,2.8-6.4s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0-.1,0,0,0,0,0,0,0,0,0-.1,0-.2-.3-2.7-2.8-2.9-2.8-5.9s2.8-3.2,2.8-6.4h0s0,0,0-.1c0-1.8-1.4-3.2-3.2-3.2s-3.2,1.4-3.2,3.2,0,0,0,.1h0c0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0,0,3.2,2.8,3.2,2.8,6.4s-2.5,3.2-2.8,5.9c0,0,0,.1,0,.2,0,0,0,0,0,0,0,0,0,0,0,.1s0,0,0,0c0,0,0,0,0,0h0c0,1.7,1.5,3.1,3.2,3.1,3.2,0,3.2-2.8,6.4-2.8s3.2,2.7,6.3,2.8c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0c1.8,0,3.2-1.4,3.2-3.2Z"}),t.jsx("path",{fill:"#e0a070",d:"M122.4,4.2c0-1.8-1.4-3.2-3.2-3.2h0s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0-3.1,0-3.2,2.8-6.3,2.8s-3.2-2.8-6.4-2.8-3.2,1.4-3.2,3.2,1.4,3.2,3.2,3.2c3.2,0,3.2-2.8,6.4-2.8s2.8,1.2,3.9,2c.8,1.2,2,1.9,2,4s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"}),t.jsx("path",{fill:"#e0a070",d:"M199,4.2c0-1.7-1.3-3.1-3-3.2h0s0,0-.1,0c0,0,0,0,0,0-.2,0-.5,0-.7,0-2.4.4-2.7,2.7-5.6,2.7s-3.2-2.8-6.4-2.8h0s0,0-.1,0c-1.8,0-3.2,1.4-3.2,3.2s1.4,3.2,3.2,3.2,0,0,.1,0h0c3.2,0,3.2-2.8,6.4-2.8s2.7,1,3.6,1.8c.8,1.3,2.2,2,2.2,4.2s-.8,2.5-1.5,3.4h0c-3.1,3.1-1.9,6.3-4.1,8.5l-1.2,1.2c-2.3,2.3-5.5,1.6-7.8,3.8h0c-.6.6-.9,1.4-.9,2.3,0,1.8,1.4,3.2,3.2,3.2s2-.5,2.6-1.4c1.8-2.2,1.3-5.2,3.5-7.4l1.2-1.2c2.3-2.3,5.5-1.6,7.8-3.8.6-.6.9-1.4.9-2.3,0-3.2-2.8-3.2-2.8-6.4s2.8-3.2,2.8-6.4Z"})]})})}const F={orange:"#e0a070",orangedk:"#d88d59",blau:"#74898B",graudk:"#3a3a3a",graumt:"#8c8b89",grauhl:"#bebcb9",papier:"#dedcd8"},hm=p.div`
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
  background: ${F.papier};

  @media (min-width: 768px) {
    height: 80px;
  }
`,pm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,um=p.div`
  flex: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 4px 0;
  color: ${F.graudk};
  font-weight: 900;
  background: ${F.orange};
  border-radius: 2px 2px 0 0;
  transition: background 150ms;

  &:hover {
    background: ${F.orangedk};
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
`,gm=p.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px 0 0 0;
  color: ${F.graudk};

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
`,xm=p.div`
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
`,mm=p.div`
  display: flex;
  margin: 8px 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`,kc=p.a`
  flex: 1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 56px;
  padding: 8px 16px;
  background: ${F.orange};
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
    background: ${F.orangedk};
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
`;function ym(){return t.jsx(hm,{children:t.jsxs(pm,{children:[t.jsx(um,{children:t.jsx(Vi,{to:"/",title:"VII","aria-label":"Header Logo: Home",children:t.jsx(Ip,{solid:!0,color:"#3a3a3a"})})}),t.jsx(gm,{children:t.jsx(fm,{solid:!0})}),t.jsx(xm,{children:t.jsx("h1",{children:"//SEANSWIDLER"})}),t.jsxs(mm,{children:[t.jsx(kc,{href:"https://www.linkedin.com/in/sean-swidler-80a5b4b7/","aria-label":"Header: LinkedIn",title:"LinkedIn",target:"_blank",children:t.jsx("img",{src:"/public/images/icon-linkedin.svg",alt:"LinkedIn"})}),t.jsx(kc,{href:"mailto:sevensines@gmail.com","aria-label":"Footer: Email",title:"Email",target:"_blank",children:t.jsx("img",{src:"/public/images/icon-email.svg",alt:"Email"})})]})]})})}const jm=p.div`
  margin: auto;
`,wm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 56px;
  margin-top: 32px;
  padding-left: clamp(16px, 5vw, 80px);
  padding-right: clamp(16px, 5vw, 80px);
  box-sizing: border-box;
  background: ${F.papier};
`,bm=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,vm=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 102px;
  height: 34px;
  color: ${F.orange};
  font-weight: 900;

  svg {
    max-width: 64px;
  }
`,Sm=p.div`
  display: flex;
`,zc=p.a`
  position: relative;
  margin: 0px;
  padding: 4px 16px;
  color: ${F.graudk};
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
    background: ${F.graudk};
    transform-origin: right center;
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(1, 0, 0, 1);
    will-change: transform;
  }
  &:hover,
  &:focus,
  &.has-focus {
    color: ${F.graudk};
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
`;function km(){return t.jsxs(t.Fragment,{children:[t.jsx(jm,{}),t.jsx(wm,{children:t.jsxs(bm,{children:[t.jsx(vm,{"aria-label":"Footer: Logo",children:t.jsx(Vi,{to:"/","aria-label":"Footer: Home",children:t.jsx(Ip,{solid:!0,color:"#3a3a3a"})})}),t.jsxs(Sm,{"aria-label":"navigation",children:[t.jsx(zc,{href:"mailto:sevensines@gmail.com","aria-label":"Footer: Email",title:"Email",target:"_blank",children:"Email"}),t.jsx(zc,{href:"https://www.linkedin.com/in/sean-swidler-80a5b4b7/","aria-label":"Footer: LinkedIn",title:"LinkedIn",target:"_blank",children:"LinkedIn"})]})]})})]})}const zm=()=>t.jsxs(t.Fragment,{children:[t.jsx(ym,{}),t.jsx(Kg,{}),t.jsx(km,{})]}),Am=p.div`
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
  background: ${F.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`,Im=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};
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
`,Pm=p.div`
  display: flex;
  background: ${F.orange};
`,Hm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 36px;
  height: auto;
  text-align: center;
  @media (min-width: 768px) {
    width: 56px;
  }
`,Tm=p.div`
  display: flex;
  flex: 1 1 100%;
  height: 32px;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: ${F.blau};

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
    background-color: ${F.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`,Fm=p.div`
  display: flex;
`,Cm=p.div`
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
`,Em=p.div`
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
    color: ${F.graumt};
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
`;function Mm(){return t.jsx(Am,{children:t.jsxs(Im,{children:[t.jsxs(Pm,{children:[t.jsx(Hm,{children:"i"}),t.jsx(Tm,{children:t.jsx("img",{src:"/public/images/tower.jpg"})})]}),t.jsxs(Fm,{children:[t.jsx(Cm,{children:t.jsx("img",{src:"/public/images/braille-bio.svg"})}),t.jsx(Em,{children:"I'm a Front End Web Developer with over 10 years of experience designing and building responsive user-focused websites and web based applications. With a background in graphic design, I bring a strong visual sensibility alongside solid technical skills, allowing me to translate complex ideas into clean, intuitive user experiences. Throughout my career, I've focused on creating scalable, accessible, and responsive UI solutions that balance performance with thoughtful design. I enjoy collaborating with cross-functional teams to deliver products that are both visually compelling and easy to use."}),t.jsxs(Dm,{children:[t.jsx("h4",{children:"20"}),t.jsx("h4",{children:"26"})]})]})]})})}const Um=[{title:"Microsoft",url:"/Microsoft",logo:"/public/images/ms/mic.svg",bg:"/public/images/ms/mic-tile-clr.jpg",sigil:"⠍⠎⠞",role:"Front End Development,Email Development,Graphic Design"},{title:"Gates Foundation",url:"/Gates",logo:"/public/images/gt/gts.svg",bg:"/public/images/gt/gts-tile-clr.jpg",sigil:"⠞⠛⠋",role:"Front End Development,Email Development,Graphic Design"},{title:"T-Mobile",url:"/T-Mobile",logo:"/public/images/tm/tmo.svg",bg:"/public/images/tm/tmo-tile-clr.jpg",sigil:"⠞⠍⠕",role:"Front End Development,Graphic Design"},{title:"Verizon",url:"/Verizon",logo:"/public/images/vz/vzn.svg",bg:"/public/images/vz/vzn-tile-clr.jpg",sigil:"⠧⠵⠝",role:"Front End Development,Graphic Design"},{title:"AT&T",url:"/ATT",logo:"/public/images/at/att.svg",bg:"/public/images/at/att-tile-clr.jpg",sigil:"⠁⠞⠞",role:"Front End Development,Graphic Design"},{title:"DirecTV",url:"/DirecTV",logo:"/public/images/dt/dtv.svg",bg:"/public/images/dt/dtv-tile-clr.jpg",sigil:"⠙⠞⠧",role:"Front End Development,Graphic Design"},{title:"Dish",url:"/Dish",logo:"/public/images/ds/dsh.svg",bg:"/public/images/ds/dsh-tile-clr.jpg",sigil:"⠙⠎⠓",role:"Front End Development,Graphic Design"},{title:"ADT",url:"/ADT",logo:"/public/images/ad/adt.svg",bg:"/public/images/ad/adt-tile-clr.jpg",sigil:"⠁⠙⠞",role:"Front End Development,Graphic Design"}],Lm=[{title:"Azure",url:"/Microsoft/Azure",logo:"/public/images/ms/azr.svg",bg:"/public/images/ms/mic-tile-clr.jpg",sgl:"⠁⠵⠗",role:"Front End Development,Email Development,Graphic Design"},{title:"Student",url:"/Microsoft/Student",logo:"/public/images/ms/stu.svg",bg:"/public/images/ms/mic-stu.jpg",sgl:"⠎⠞⠥",role:"Front End Development,Email Development,Graphic Design"},{title:"Windows 10",url:"/Microsoft/Windows10",logo:"/public/images/ms/ten.svg",bg:"/public/images/ms/mic-win.jpg",sgl:"⠞⠑⠝",role:"Front End Development,Email Development,Graphic Design"},{title:"Expert Zone",url:"/Microsoft/ExpertZone",logo:"/public/images/ms/xpz.svg",bg:"/public/images/ms/mic-exp.jpg",sgl:"⠑⠭⠏",role:"Front End Development,Email Development,Graphic Design"},{title:"Power BI",url:"/Microsoft/PowerBI",logo:"/public/images/ms/pbi.svg",bg:"/public/images/ms/mic-pow.jpg",sgl:"⠏⠃⠊",role:"Front End Development,Email Development,Graphic Design"},{title:"Visual Studio",url:"/Microsoft/VisualStudio",logo:"/public/images/ms/vst.svg",bg:"/public/images/ms/mic-vis.jpg",sgl:"⠧⠎⠞",role:"Front End Development,Email Development,Graphic Design"}],_m=[{title:"Newsletter",url:"/Microsoft/Azure/Newsletter",bg:"/public/images/ms/mic-ess.jpg"},{title:"Azure Essentials",url:"/Microsoft/Azure/Essentials",bg:"/public/images/ms/mic-nws.jpg"},{title:"Service Alerts",url:"/Microsoft/Azure/Alerts",bg:"/public/images/ms/mic-srv.jpg"}],Nm=[{title:"The Giving Pledge",url:"/Gates/GivingPledge",bg:"/public/images/gt/gts-gvp.jpg"},{title:"Annual Letter",url:"/Gates/AnnualLetter",bg:"/public/images/gt/gts-ltr.jpg"}],Bm=[{title:"Free Tuesdays",url:"/T-Mobile/Tuesdays",bg:"/public/images/tm/tmo-tue.jpg"},{title:"3 for 1",url:"/T-Mobile/3for1",bg:"/public/images/tm/tmo-341.jpg"},{title:"Jump",url:"/T-Mobile/Jump",bg:"/public/images/tm/tmo-jmp.jpg"},{title:"Pay As You Go",url:"/T-Mobile/Pay",bg:"/public/images/tm/tmo-pyg.jpg"},{title:"Prepaid",url:"/T-Mobile/Prepaid",bg:"/public/images/tm/tmo-pre.jpg"},{title:"Data Stash",url:"/T-Mobile/Stash",bg:"/public/images/tm/tmo-dat.jpg"}],Wm=[{title:"Business",url:"/ADT/Business",bg:"/public/images/ad/adt-bus.jpg"},{title:"Residential",url:"/ADT/Residential",bg:"/public/images/ad/adt-tile-clr.jpg"}],Jr=p(Vi)`
  text-decoration: none;
  border: 0;
  color: ${F.orange};
`,Om=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};
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
`,Rm=p.div`
  position: relative;  
  display: flex;
  flex: 1;
  height: 100%;
  padding: 0;
  background: ${F.blau};
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
    background-color: ${F.graudk};
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
`,$m=p.div`
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
      background-color: ${F.graudk};
      img {
        height: 100%;
        max-width: 60%;
      }
    }
  }
`,Gm=p.div`
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
    background: ${F.graudk};
    color: ${F.orange};
    font-size: clamp(1.2em, 2vw, 1.8em);
    font-weight: 500;
    text-transform: uppercase;
    span {
      color: ${F.graumt};
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
`,Pp=p.div`
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
    color: ${F.graudk};
    font-size: 1.1rem;
    background: ${F.orange};
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
      background: ${F.orangedk};
      span {
        opacity: 1;
      }
    }
  }
`;function Hp({count:e,title:i,sgl:n,role:r="",logo:l,bg:o,link:s}){const a=r.split(","),c={animation:`${(e+1)*100+500}ms fadeInUp ease-out`};return t.jsxs(Om,{style:c,children:[t.jsx(Jr,{to:s,title:i,"aria-label":i,children:t.jsxs(Rm,{children:[t.jsx($m,{children:t.jsx("span",{children:t.jsx("img",{src:l,alt:i,border:"0"})})}),t.jsx("img",{src:o,border:"0"})]})}),t.jsxs(Gm,{children:[t.jsxs("div",{children:[t.jsx(Jr,{to:s,title:i,"aria-label":i,children:t.jsxs("h4",{children:[`${i}`,t.jsx("span",{children:`${n}`})]})}),t.jsx("ul",{children:a.length>1&&a.map(x=>t.jsx("li",{children:x},x))})]}),t.jsx(Pp,{children:t.jsx(Jr,{to:s,title:i,"aria-label":i,children:t.jsxs("button",{title:i,"aria-label":`Button: View ${i}`,children:[t.jsx("span",{children:"⠿"}),"VIEW",t.jsx("span",{children:"⠿"})]})})})]})]})}const Vm=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0 clamp(16px, 5vw, 80px);
  box-sizing: border-box;
`,rn=p.div`
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
`;function Zm(){return t.jsx(Vm,{children:t.jsx(rn,{children:Um.map((e,i)=>t.jsx(Hp,{title:e.title,link:e.url,logo:e.logo,bg:e.bg,sgl:e.sigil,role:e.role,count:i},e.title))})})}function Qm(){return t.jsxs(t.Fragment,{children:[t.jsx(Mm,{}),t.jsx(Zm,{})]})}const Ym=p.div`
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
`,Km=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
  margin: 0 0 16px 0;
  background: ${F.graudk};
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};
`,Xm=p.div`
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
`;function Te({logo:e,alt:i,fixedLogo:n}){return t.jsx(Ym,{children:t.jsx(Km,{children:t.jsx(Xm,{children:t.jsx("img",{src:e,alt:i,border:"0",className:n?"_no-anim":""})})})})}const Jm=p.div`
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
  background: ${F.papier};
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
`,qm=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  padding: 16px;
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};
`;function R({children:e,fadeOnly:i}){return t.jsx(Jm,{className:i?"_fadeOnly":"",children:t.jsx(qm,{children:e})})}const e1=p.div`
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
  background: ${F.papier};

  @media (min-width: 768px) {
    margin: 0;
  }
`,t1=p.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1904px;
  border: 2px solid ${F.graudk};
  border-radius: 4px;
  box-shadow: 2px 3px 0px ${F.grauhl};
`,i1=p.ul`
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
      color: ${F.graudk};
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
        background: ${F.orange};
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
      color: ${F.graudk};
      content: "⊸";
    }
  }

  @media (min-width: 768px) {
    li {
      font-size: 18px;
    }
  }
`;function $({route:e}){return t.jsx(e1,{children:t.jsx(t1,{children:t.jsxs(i1,{children:[t.jsx("li",{children:t.jsx(Vi,{to:"/",title:"Home","aria-label":"Breadcrumb: Home",children:"Home"})}),e&&e.map(i=>t.jsx("li",{children:t.jsx(Vi,{to:i.url,title:i.text,"aria-label":i.text,children:i.text})},i.text))]})})})}const Ac=p.div`
  display: flex;
  justify-content: space-between;
  &.bt {
    transform: rotate(180deg);
  }
`,Hr=p.div`
  width: 12px;
  height: 1px;
  background: ${F.orange};
`,Tr=p.div`
  width: 1px;
  height: 12px;
  background: ${F.orange};
`,Fr=p.div`
  display: flex;
  flex-direction: column;

  &.tr {
    transform: rotate(90deg);
  }
`;function n1({children:e}){return t.jsxs(t.Fragment,{children:[t.jsxs(Ac,{children:[t.jsxs(Fr,{children:[t.jsx(Hr,{}),t.jsx(Tr,{})]}),t.jsxs(Fr,{className:"tr",children:[t.jsx(Hr,{}),t.jsx(Tr,{})]})]}),e,t.jsxs(Ac,{className:"bt",children:[t.jsxs(Fr,{children:[t.jsx(Hr,{}),t.jsx(Tr,{})]}),t.jsxs(Fr,{className:"tr",children:[t.jsx(Hr,{}),t.jsx(Tr,{})]})]})]})}const r1=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  h2 {
    margin: 0;
    color: ${F.graudk};
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
  a {
    color: ${F.orangedk};
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 768px) {
    p {
      order: 2;
      padding: 16px;
      font-size: 1rem;
    }
  }
`;function G({title:e,children:i}){return t.jsx(n1,{children:t.jsx(r1,{children:t.jsx("p",{children:i})})})}function l1(){const e=[{text:"Microsoft",url:"/Microsoft"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/mic.svg",alt:"Microsoft"}),t.jsxs(R,{children:[t.jsx(G,{title:"Microsoft",children:"Microsoft is an American multinational technology company that develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services. Its best known software products are the Microsoft Windows line of operating systems, Microsoft Office office suite, and Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2011, it was the world's largest software maker by revenue, and one of the world's most valuable companies."}),t.jsx("br",{}),t.jsx(rn,{children:Lm.map(i=>t.jsx(Hp,{title:i.title,link:i.url,logo:i.logo,bg:i.bg,sgl:i.sgl,role:i.role},i.title))})]})]})}const o1=p(Vi)`
  text-decoration: none;
  border: 0;
`,Tp=p.div`
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
    color: ${F.orange};
    text-align: center;
    background-color: ${F.graudk};
  }
`,s1=p.div`
  position: relative;
  display: flex;
  flex: 1 1 100%;
  height: 50vw;
  max-height: 220px;
  background-color: ${F.blau};
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
    background-color: ${F.graudk};
    mix-blend-mode: lighten;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  &:hover {
    background: ${F.orange};
    padding: 1%;
    transition: padding 500ms;
    img {
      filter: grayscale(0%) contrast(1) blur(0);
      mix-blend-mode: normal;
      transition: filter 500ms, mixBlendMode 500ms;
    }

    > ${Tp} {
      opacity: 0;
      transition: opacity 500ms;
    }
  }
`;function Jl({title:e,bg:i,link:n}){return t.jsx(o1,{to:n,title:e,"aria-label":e,children:t.jsxs(s1,{children:[t.jsx(Tp,{children:t.jsx("span",{children:e})}),t.jsx("img",{src:i})]})})}function ql({fixedLogo:e}){return t.jsx(Te,{logo:"/public/images/ms/azr.svg",alt:"Microsoft Azure",fixedLogo:e})}function a1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(ql,{}),t.jsxs(R,{children:[t.jsxs(G,{title:"Azure",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"Microsoft Azure is a cloud computing platform and infrastructure created by Microsoft for building, deploying, and managing applications and services through a global network of Microsoft-managed data centers. It provides both PaaS and IaaS services and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems."]}),t.jsx("br",{}),t.jsx(rn,{className:"_three",children:_m.map(i=>t.jsx(Jl,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const d1=p.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 16px;
`,c1=p.div`
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
`;function ie({viewSelected:e,children:i}){return t.jsx(d1,{children:t.jsx(c1,{className:(`${e}`||"").toLowerCase(),children:i})})}function f1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Essentials",url:"/Microsoft/Azure/Essentials"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(ql,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Azure Essentials",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The Microsoft Azure Essentials campaign is a full scale website aimed at onboarding new and veteran developers to the Azure Web Services platform. Through Azure Essentials users have access to informational materials on Azure technologies, free self-paced courses, hands-on demos, learning resources for Azure certifications, live and recorded webinars, and ebooks. This campaign was launched globally, localized into 32 languages, and has seen over 1 million subscribers since launch."]}),t.jsx("br",{}),t.jsxs(ie,{viewSelected:"desktop",children:[t.jsx("div",{children:t.jsx("img",{src:"/public/images/ms/azr-homepage-enus.jpg",width:"100%",height:"auto"})}),t.jsx("div",{children:t.jsx("img",{src:"/public/images/ms/azr-webinar-enus.jpg",width:"100%",height:"auto"})}),t.jsx("div",{children:t.jsx("img",{src:"/public/images/ms/azr-pivot-enus.jpg",width:"100%",height:"auto"})})]})]})]})}function h1(){return t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"620px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),t.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),t.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:t.jsx("img",{src:"/public/images/ms/nws-img/ms-logo-azure-top.png",width:"74",height:"30",border:"0",align:"left"})}),t.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"500",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_02.png",width:"500",height:"76",border:"0"})}),t.jsx("td",{width:"98",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("table",{width:"98",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"98",colSpan:"3",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_05.jpg",width:"98",height:"30",border:"0"})})})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5"},children:t.jsx("table",{width:"282",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{width:"282",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",padding:"5px 0px 0px 0px"},children:"September 2016"})}),t.jsx("tr",{children:t.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"48px",fontWeight:"100",lineHeight:"50px"},children:"Newsletter"})})]})})}),t.jsx("td",{width:"20",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"261",align:"right",valign:"top",style:{background:"#326fb5",display:"block"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_07.png",width:"261",height:"97",border:"0",alt:"Azure"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("table",{width:"528",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#announcements",style:{color:"#fffffe",textDecoration:"none"},children:"Announcements"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"72",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#learning",style:{color:"#fffffe",textDecoration:"none"},children:"Learning"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"67",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#partners",style:{color:"#fffffe",textDecoration:"none"},children:"Partners"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#success",style:{color:"#fffffe",textDecoration:"none"},children:"Success Stories"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"85",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#AzureStore",style:{color:"#fffffe",textDecoration:"none"},children:"Azure Store"})})]})})})}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",colSpan:"3",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"10px",fontWeight:"500"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"376",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("br",{}),t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"announcements",children:"Announcements"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Run SAP applications on Microsoft Azure"}),t.jsx("br",{}),"Azure is now certified for SAP Business Suite, SAP Business All-In-One, SAP NetWeaver, and SAP HANA Developer Edition, all of which include full support from both Microsoft and SAP. Plus, you can deploy and provision reconfigured SAP solutions in minutes directly to Azure using the"," ",t.jsx("a",{href:"",alias:"Body: Announcements: SAP Cloud Appliance Library tool",title:"SAP Cloud Appliance Library tool",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP Cloud Appliance Library tool"}),". For more information, visit the"," ",t.jsx("a",{href:"",alias:"Body: Announcements: SAP on Azure",title:"SAP on Azure",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP on Azure"})," ","website.",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Brazil South region generally available"}),t.jsx("br",{}),"Earlier this month we announced the general availability of the Brazil South region, located in the São Paulo state. Azure customers can now host their services in Brazil South with the same service-level coverage they receive in Azure regions worldwide. Learn more about the new region in"," ",t.jsx("a",{href:"",alias:"Body: Announcements: The Official Microsoft Blog",title:"The Official Microsoft Blog",style:{color:"#3da5dd",textDecoration:"none"},children:"The Official Microsoft Blog"}),".",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Hyper-V Recovery Manager adds replication feature, gets new name"}),t.jsx("br",{}),"Hyper-V Recovery Manager, now called Azure Site Recovery, added an important new preview feature. Now you can replicate running virtual machines from your site to Azure, and use Azure as your disaster recovery location, avoiding the complexity and expense of a secondary datacenter."," ",t.jsx("a",{href:"",alias:"Body: Announcements: Learn more",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"Learn more"})," ","or try the new capability in preview mode in the"," ",t.jsx("a",{href:"",alias:"Body: Announcements: Azure Management Portal",title:"Azure Management Portal",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure Management Portal"}),".",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Introducing Scheduler Premium tier and updates to Standard tier"}),t.jsx("br",{}),"Now Scheduler offers two important updates that enable you to operate at even higher scale:",t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",t.jsx("strong",{children:"•"}),"  "]}),t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["Scalable Standard tier. Scale to up to 10 Standard units, which at 10 job collections per unit enables you to create up to 100 job collections.",t.jsx("br",{}),t.jsx("br",{})]})]}),t.jsxs("tr",{children:[t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",t.jsx("strong",{children:"•"}),"  "]}),t.jsx("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:"New Premium tier. Receive 10,000 job collections per month with every Premium unit."})]})]})}),t.jsx("br",{}),"By using Scheduler, you can invoke actions—such as calling HTTP/S endpoints or posting a message to a storage queue—on any schedule. For more information, visit the"," ",t.jsx("a",{href:"",alias:"Body: Announcements: More Scheduler Information",title:"Scheduler",style:{color:"#3da5dd",textDecoration:"none"},children:"Scheduler"})," website.",t.jsx("br",{})," "]})})})})}),t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"167",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#a5ce00",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"3",style:{padding:"8px 0px",borderBottom:"2px solid #ffffff"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),t.jsx("td",{align:"left",valign:"middle",bgcolor:"#a5ce00",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"1em",padding:"5px 0 5px"},children:t.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:"Free Azure Trial"})}),t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),t.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#a5ce00",style:{padding:"5px 0 5px"},children:t.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/33333_Azure_ArrowCTA.png",width:"24",height:"24",border:"0"})})}),t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "})]})})})})})})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"3",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Partners"})}),t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Helium_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:"Helium"})})]})})})}),t.jsx("td",{width:"8",children:" "})]})]})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"4",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Success Stories"})}),t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Mazda_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{color:"#3da5dd",textDecoration:"none"},children:"Mazda"})})]})})})}),t.jsx("td",{width:"8",children:" "})]})]})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsxs("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#4d4d4d",padding:"0 0 10px"},children:[t.jsx("strong",{children:t.jsx("a",{href:"",alias:"Body: Azure Store: Azure Store",title:"Visit Azure Store",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Partner updates"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/AlertLogic_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{color:"#3da5dd",textDecoration:"none"},children:"Alert Logic"})})]})})})]}),t.jsx("td",{width:"8",children:" "})]})})})]})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"learning",children:"Learning"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Get started with ExpressRoute"}),t.jsx("br",{}),"Learn everything you need to know about Azure ExpressRoute, recently announced as generally available. Get information about ExpressRoute basics, exchange providers, network service providers, pricing, case studies, and more. Read the"," ",t.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Ganesh Srinivasan",title:"blog post",style:{color:"#3da5dd",textDecoration:"none"},children:"blog post"})," ","by Ganesh Srinivasan.",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"The future of cryptography with Azure Web Sites"}),t.jsx("br",{}),"Securing your site with SSL has never been more important. Even though encryption isn’t new, cryptographers keep looking for ways to be more secure, and the Web Sites team is always looking for ways to support the latest and greatest. Today the greatest is Elliptic Curve Cryptography (ECC) certificates, which is now supported by Web Sites. For more information, read this"," ",t.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Erez Benari",title:"blog post",style:{color:"#3da5dd",textDecoration:"none"},children:"blog post"})," ","by Erez Benari.",t.jsx("br",{})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"partners",children:"Partners"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Helium",alias:"Body: Partner: Helium Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/Helium_Tile_2014-06.png",alt:"Helium",width:"125",height:"129",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Ceiba empowers life sciences and healthcare data while reducing management costs. Its Helium solution delivers application reporting functions and associated information within common user applications, simplifying data access, and increasing productivity.",t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Partner: Helium Learn More",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"Learn more"})]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"success",children:"Success Stories"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Mazda",alias:"Body: Success: Mazda Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/Mazda_Tile_2014-06.png",alt:"Mazda",width:"125",height:"129",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["To improve disaster protection for applications that its dealers use to run their businesses, Mazda North American Operations revamped its data protection using a StorSimple hybrid cloud storage solution based on Microsoft Azure. Mazda now has more reliable, real-time data protection and can restore data in minutes. It has eliminated backup work for engineers and reduced data protection costs by 95 percent.",t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Success: Mazda Read the full story",title:"Read the full story",style:{color:"#3da5dd",textDecoration:"none"},children:"Read the full story"})]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"AzureStore",children:"Azure Store"})}),t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Azure Store: Visit Azure Store",title:"Visit Azure Store",style:{color:"#3da5dd",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Visit Azure Store"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Partner updates"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Alert Logic",alias:"Body: Azure Store: Alert Logic Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/AlertLogic_Tile_2014-06.png",alt:"Alert Logic",width:"125",height:"93",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Alert Logic’s recently published"," ",t.jsx("a",{href:"",alias:"Body: Azure Store: Cloud Security Report",title:"Cloud Security Report",style:{color:"#3da5dd",textDecoration:"none"},children:"Cloud Security Report"})," ","contains data-driven research on cyberthreats in cloud, hosting, and on-premises environments, based on six months of data from more than 2,200 customers. Alert Logic now offers two editions of its Log Manager service in the Azure Store—Security and Security & Compliance—with multiple capabilities to help Azure customers employ best practices in active protection, forensic analysis, and compliance.",t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Azure Store: Alert Logic - Visit Store Page",title:"Visit Store page",style:{color:"#3da5dd",textDecoration:"none"},children:"Visit Store page"})]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[t.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"Quick Links"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"Azure Management portal",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"Management portal"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Account",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"Account"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Azure Forums",alias:"Quick Links: Azure Forums",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Forums"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"Azure Friday",alias:"Quick Links: Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Channel 9",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Stack Overflow",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stack Overflow"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"Twitter",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Facebook",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Blog",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"Blog"})]})]})})})]}),t.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"434",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"One Microsoft Way, Redmond, WA 98052 USA"}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:t.jsx("img",{src:"/public/images/ms/nws-img/MS_Logo_white_100.png",width:"75",height:"16",border:"0",align:"left"})}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsx("tr",{children:t.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),t.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function p1(){return t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"620px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),t.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),t.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:t.jsx("img",{src:"/public/images/ms/nws-img/ms-logo-azure-top.png",width:"74",height:"30",border:"0",align:"left"})}),t.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"500",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_02.png",width:"500",height:"76",border:"0"})}),t.jsx("td",{width:"98",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("table",{width:"98",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"98",colSpan:"3",valign:"bottom",align:"left",style:{background:"#f1f1f1",lineHeight:"1px"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_05.png",width:"98",height:"30",border:"0"})})})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5"},children:t.jsx("table",{width:"282",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{width:"282",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500",padding:"5px 0px 0px 0px"},children:"2016年9月"})}),t.jsx("tr",{children:t.jsx("td",{width:"282",align:"left",valign:"top",style:{background:"#326fb5",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"48px",fontWeight:"100",lineHeight:"50px"},children:"Newsletter"})})]})})}),t.jsx("td",{width:"20",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"261",align:"right",valign:"top",style:{background:"#326fb5",display:"block"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Azure2014-NewsLetter-EN_07.png",width:"261",height:"97",border:"0",alt:"Azure"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("table",{width:"528",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#326fb5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#announcements",style:{color:"#fffffe",textDecoration:"none"},children:"最新情報"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"72",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#learning",style:{color:"#fffffe",textDecoration:"none"},children:"トレーニング情報"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"67",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#partners",style:{color:"#fffffe",textDecoration:"none"},children:"パートナー"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"112",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#success",style:{color:"#fffffe",textDecoration:"none"},children:"導入事例"})}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"}}),t.jsx("td",{width:"85",align:"left",valign:"top",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:t.jsx("a",{href:"#AzureStore",style:{color:"#fffffe",textDecoration:"none"},children:"Azure Store"})})]})})})}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",colSpan:"3",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"10px",fontWeight:"500"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"376",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("br",{}),t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"announcements",children:"最新情報"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Microsoft Azure 上で SAP アプリケーションを実行する"}),t.jsx("br",{}),"Azure における SAP Business Suite、SAP Business All-In-One、SAP NetWeaver、SAP HANA Developer Edition の認定が完了しました。これらすべてに Microsoft と SAP によるフルサポートが含まれています。また、"," ",t.jsx("a",{href:"",alias:"Body: Announcements: SAP Cloud Appliance Library tool",title:"SAP Cloud Appliance Library tool",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP Cloud Appliance Library ツール"}),"を使用すると、構成済みの SAP ソリューションを数分で Azure に直接導入したりプロビジョニングしたりできます。詳細については、「"," ",t.jsx("a",{href:"",alias:"Body: Announcements: SAP on Azure",title:"SAP on Azure",style:{color:"#3da5dd",textDecoration:"none"},children:"SAP on Azure"})," ","(英語)」Web サイトをご覧ください。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"ブラジル南部リージョンの一般提供開始"}),t.jsx("br",{}),"先日、サンパウロ州のブラジル南部リージョンの一般提供開始についてお知らせしました。Azure のお客様は、世界中の Azure リージョンと同様のサービス レベル契約範囲で、ブラジル南部でのサービスをホストできるようになります。新しいリージョンについては、"," ",t.jsx("a",{href:"",alias:"Body: Announcements: The Official Microsoft Blog",title:"The Official Microsoft Blog",style:{color:"#3da5dd",textDecoration:"none"},children:"The Official Microsoft Blog"}),"(英語)をお読みください。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Hyper-V Recovery Manager へのレプリケーション機能の追加および名称の変更"}),t.jsx("br",{}),"Hyper-V Recovery Manager は Azure Site Recovery という名称に変更され、重要な新しいプレビュー機能が追加されました。実行中の仮想マシンをオンプレミスから Azure にレプリケートし、Azure を障害復旧の拠点として使用できるようになります。そのため、二次データセンターにかかる費用と複雑さを回避することができます。プレビューの"," ",t.jsx("a",{href:"",alias:"Body: Announcements: Learn more",title:"詳細",style:{color:"#3da5dd",textDecoration:"none"},children:"詳細"})," ","(英語)を参照するか、"," ",t.jsx("a",{href:"",alias:"Body: Announcements: Azure Management Portal",title:"Azure 管理ポータル",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure 管理ポータル"}),"でプレビューの新しい機能をお試しください。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Scheduler Premium (プレミアム) レベルの公開および Standard (標準) レベルの更新"}),t.jsx("br",{}),"Scheduler は、より高いレベルでの動作を可能にする 2 つの重要な更新を提供します。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",t.jsx("strong",{children:"•"}),"  "]}),t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:[t.jsx("strong",{children:"拡張性のある Standard (標準) レベル。"}),"最大 10 個の Standard (標準) ユニットまで拡張できます。ユニットあたり 10 個のジョブ コレクションが作成できるため、最大 100 個のジョブ コレクションを作成できます。",t.jsx("br",{}),t.jsx("br",{})]})]}),t.jsxs("tr",{children:[t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:["  ",t.jsx("strong",{children:"•"}),"  "]}),t.jsxs("td",{align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},children:[t.jsx("strong",{children:"新しい Premium (プレミアム) レベル。"}),"Premium (プレミアム) ユニットあたり、月ごとに 1 万個のジョブ コレクションを受け取ることができます。"]})]})]})}),t.jsx("br",{}),"Scheduler を使用することで、設定したスケジュールに応じて HTTP/S エンドポイントを呼び出したり、ストレージ キューにメッセージを格納したりするなどの操作を実行できます。詳細については、「",t.jsx("a",{href:"",alias:"Body: Announcements: More Scheduler Information",title:"Scheduler",style:{color:"#3da5dd",textDecoration:"none"},children:"Scheduler"}),"」Web サイトをご覧ください。",t.jsx("br",{})," "]})})})})}),t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"167",align:"left",valign:"top",style:{background:"#ffffff",padding:"0px 0px 0px 0px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#a5ce00",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"3",style:{padding:"8px 0px",borderBottom:"2px solid #ffffff"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),t.jsx("td",{align:"left",valign:"middle",bgcolor:"#a5ce00",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"1em",padding:"5px 0 5px"},children:t.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:"Free Azure Trial"})}),t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "}),t.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#a5ce00",style:{padding:"5px 0 5px"},children:t.jsx("a",{href:"",title:"Free Azure trial",alias:"Right Rail: Free Azure trial CTA",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/33333_Azure_ArrowCTA.png",width:"24",height:"24",border:"0"})})}),t.jsx("td",{width:"10",bgcolor:"#a5ce00",children:" "})]})})})})})})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"3",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Partners"})}),t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Helium_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#partners",alias:"Right Zone: Helium",title:"Helium",style:{color:"#3da5dd",textDecoration:"none"},children:"Helium"})})]})})})}),t.jsx("td",{width:"8",children:" "})]})]})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{valign:"top",colSpan:"4",style:{background:"#f1f1f1",padding:"10px 10px",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:"Success Stories"})}),t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsx("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/Mazda_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#success",alias:"Right Zone: Mazda",title:"Mazda",style:{color:"#3da5dd",textDecoration:"none"},children:"Mazda"})})]})})})}),t.jsx("td",{width:"8",children:" "})]})]})}),t.jsx("table",{width:"167",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",style:{borderBottom:"2px solid #ffffff"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"8",children:" "}),t.jsxs("td",{valign:"top",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#4d4d4d",padding:"0 0 10px"},children:[t.jsx("strong",{children:t.jsx("a",{href:"",alias:"Body: Azure Store: Azure Store",title:"Visit Azure Store",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("strong",{children:"Partner updates"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"151",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"35",valign:"middle",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",paddingLeft:"10px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/nws-img/AlertLogic_Thumbnail_2014-06.png",width:"25",height:"25",border:"0"})})}),t.jsx("td",{width:"116",valign:"middle",align:"left",style:{fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",color:"#444444",padding:"0 0 10px"},children:t.jsx("a",{href:"#AzureStore",alias:"Right Zone: Alert Logic",title:"Alert Logic",style:{color:"#3da5dd",textDecoration:"none"},children:"Alert Logic"})})]})})})]}),t.jsx("td",{width:"8",children:" "})]})})})]})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"learning",children:"ラーニング"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"ExpressRoute を使ってみましょう"}),t.jsx("br",{}),"一般提供が開始された Azure ExpressRoute について知っておくべきことをすべて学習することができます。ExpressRoute の基本、Exchange プロバイダー、ネットワーク サービス プロバイダー、料金、ケース スタディなどに関する情報を入手することができます。Ganesh Srinivasan による",t.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Ganesh Srinivasan",title:"ブログ記事 ",style:{color:"#3da5dd",textDecoration:"none"},children:"ブログ記事"})," ","をご覧ください。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"Azure Web Sites の暗号化のについて"}),t.jsx("br",{}),"お客様のサイトを SSL で保護することがこれまで以上に重要になっています。暗号化は既に目新しくはありませんが、暗号の専門家はより安全な方法を探し続け、Web Sites チームは最新かつ最高のものをサポートする方法を常に探しています。現在、最高の暗号化は楕円曲線暗号 (ECC) を用いた認証で、これは既に Azure Web Sites によってサポートされています。詳細については、Erez Benari による",t.jsx("a",{href:"",alias:"Body: Learning: Blog Post by Erez Benari",title:"ブログ記事 ",style:{color:"#3da5dd",textDecoration:"none"},children:"ブログ記事"})," ","をご覧ください。",t.jsx("br",{})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"partners",children:"パートナー"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Helium",alias:"Body: Partner: Helium Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/Helium_Tile_2014-06.png",alt:"Helium",width:"125",height:"129",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Ceiba は管理コストを削減しながら、ライフ サイエンスと医療のデータを強化します。Helium ソリューションは、機能や一般的なユーザー アプリケーション内の関連情報を報告するアプリケーション、データ アクセスを簡素化するアプリケーション、および生産性を向上させるアプリケーションを提供します。 詳細については、",t.jsx("a",{href:"",alias:"Body: Partner: Helium Learn More",title:"Learn more",style:{color:"#3da5dd",textDecoration:"none"},children:"こちら"}),"(英語) をご覧ください。"]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"success",children:"導入事例"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Mazda",alias:"Body: Success: Mazda Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/Mazda_Tile_2014-06.png",alt:"Mazda",width:"125",height:"129",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("br",{}),"ディーラーがビジネス遂行に使用するアプリケーションの障害保護を向上させるため、Mazda North American Operations は Azure を利用した当社のハイブリッド クラウド ストレージ ソリューションである StorSimple を使用して、データ保護を改良しました。Mazda はより信頼できるリアルタイムなデータ保護を手に入れ、数分でデータを復元できるようになりました。エンジニアのバックアップ作業が不要になり、データ保護にかかるコストが 95% まで削減されています。",t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Success: Mazda Read the full story",title:"Read the full story",style:{color:"#3da5dd",textDecoration:"none"},children:"Read the full story"})]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})}),t.jsx("tr",{children:t.jsxs("td",{width:"528",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("span",{style:{fontSize:"26px"},children:t.jsx("a",{name:"AzureStore",children:"Azure Store"})}),t.jsx("br",{}),t.jsx("a",{href:"",alias:"Body: Azure Store: Visit Azure Store",title:"Azure Store にアクセス",style:{color:"#3da5dd",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"24px",fontWeight:"100",textDecoration:"none"},children:"Azure Store にアクセス"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{fontSize:"18px",lineHeight:"24px",fontWeight:"100"},children:"パートナー様の更新情報"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellSpacing:"0",cellPadding:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",style:{paddingTop:"10px"},width:"125",children:t.jsx("a",{href:"",title:"Alert Logic",alias:"Body: Azure Store: Alert Logic Image",border:"0",children:t.jsx("img",{src:"/public/images/ms/nws-img/AlertLogic_Tile_2014-06.png",alt:"Alert Logic",width:"125",height:"93",border:"0"})})}),t.jsx("td",{width:"30",children:" "}),t.jsxs("td",{valign:"top",align:"left",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:["Alert Logic が最近発表した「",t.jsx("a",{href:"",alias:"Body: Azure Store: Cloud Security Report",title:"Cloud Security Report (クラウド セキュリティ レポート)",style:{color:"#3da5dd",textDecoration:"none"},children:"Cloud Security Report (クラウド セキュリティ レポート)"}),"」には、クラウド、ホスティング、およびオンプレミスの環境におけるサイバー攻撃の脅威に関するデータ駆動型の調査が含まれています。この調査は 6 か月間にわたる 2,200 以上の顧客からのデータに基づいています。Alert Logic は Azure Store で Security および Security & Compliance という 2 つのエディションのログ管理サービスを提供しています。これらには複数の機能があり、Azure のお客様がアクティブ保護、フォレンジック分析、およびコンプライアンスにおいてベスト プラクティスを採用するようサポートします。 詳細については、",t.jsx("a",{href:"",alias:"Body: Azure Store: Alert Logic - Visit Store Page",title:"こちらから",style:{color:"#3da5dd",textDecoration:"none"},children:"こちらから"})," ","(英語)Store ページにアクセスしてください。"]})]})})})]})}),t.jsx("tr",{children:t.jsx("td",{style:{lineHeight:"10px"},children:" "})})]})})}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[t.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"リンク"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"管理ポータル",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"管理ポータル"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"アカウント情報",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"アカウント情報"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"フォーラム",alias:"Quick Links: Azure Forums",style:{color:"#f0f6fa",textDecoration:"none"},children:"フォーラム"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"Azure Friday (英語)",alias:"Quick Links: Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Channel 9 (英語)",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9 (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Stackoverflow (英語)",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow (英語)"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:[t.jsx("a",{href:"",title:"Twitter (英語)",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Facebook (英語)",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"ブログ",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"ブログ"})]})]})})})]}),t.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"434",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"日本マイクロソフト株式会社 〒108-0075 東京都港区港南 2-16-3 品川グランドセントラルタワー"}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:t.jsx("img",{src:"/public/images/ms/nws-img/MS_Logo_white_100.png",width:"75",height:"16",border:"0",align:"left"})}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsx("tr",{children:t.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),t.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function u1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Newsletter",url:"/Microsoft/Azure/Newsletter"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(ql,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Azure Newsletter • United States & Japan",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"The Azure Newsletter is a monthly digital publication that helps subscribers in the United States and Japan stay informed on the latest Azure features, events, and community activities. It also features sponsored content from Partners and showcases success stories of major corporations using Azure."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsxs(t.Fragment,{children:[t.jsx(h1,{}),t.jsx(p1,{})]})})]})]})}function g1(){return t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"600px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),t.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),t.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:t.jsx("img",{src:"/public/images/ms/azr-img/ms-logo-azure-top.png",width:"74",height:"30",border:"0",align:"left"})}),t.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",display:"block"},children:t.jsx("img",{src:"/public/images/ms/azr-img/Azure2014-InformativeV2_02.png",width:"598",height:"70",border:"0"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"334",align:"left",valign:"middle",style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"17px",fontWeight:"100",lineHeight:"22px",paddingBottom:"24px"},children:[t.jsx("br",{}),"We’ve been charging you an incorrect price on one or more Azure services, and we are taking steps to correct it."]}),t.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"179",align:"left",valign:"top",style:{background:"#ffffff",display:"block"},children:t.jsx("img",{src:"/public/images/ms/azr-img/Azure2014-InformativeV2_04.png",width:"179",height:"170",border:"0",alt:"Azure"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:["Due to a system issue, we’ve been extending a 5-percent lower price than your customers are entitled to on one or more Azure services. The issue has been fixed, and beginning February 1, 2015, you’ll see the correct pricing in your Azure account. Please note that we won’t be making corrections to prior months’ invoices.",t.jsx("br",{}),t.jsx("br",{}),"No action is required on you or your customers’ part, and we apologize for any inconvenience this issue may have caused.",t.jsx("br",{}),t.jsx("br",{}),"Please"," ",t.jsx("a",{href:"",title:"contact us",alias:"Body: Contact Us",style:{color:"#3da5dd",textDecoration:"none"},children:"contact us"})," ","if you have any questions.",t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),"Thank you,",t.jsx("br",{}),t.jsx("br",{}),"Your Azure Team"]}),t.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{valign:"top",style:{background:"#ffffff",padding:"20px 0",borderTop:"1px solid #dfdfdf"},children:t.jsx("table",{width:"513",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{width:"513",align:"left",valign:"top",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"26px",paddingBottom:"15px",paddingTop:"15px"},children:[t.jsx("span",{style:{fontSize:"17px",fontWeight:"100"},children:"Account Information"}),t.jsx("br",{}),t.jsx("strong",{children:"Partner Name: "}),"Test Partner",t.jsx("br",{}),t.jsx("strong",{children:"Company Name: "}),"Test Company",t.jsx("br",{}),t.jsx("strong",{children:"Enrollment Number: "}),"123456789",t.jsx("br",{})]})})})})}),t.jsx("td",{width:"50",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#505050",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0"},children:["This message from Microsoft is an important part of a program, service, or product that you or your company purchased or participates in. Microsoft respects your privacy. Please read our"," ",t.jsx("a",{href:"",title:"Privacy Statement",alias:"Footer: Privacy Statement",style:{color:"#3da5dd",textDecoration:"none"},children:"Privacy Statement"}),"."]}),t.jsx("td",{width:"50",style:{background:"#505050",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"433",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:"One Microsoft Way, Redmond, WA 98052 USA"}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:t.jsx("img",{src:"/public/images/ms/azr-img/MS_Logo_white_100.png",width:"75",height:"16",border:"0",align:"left"})}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsx("tr",{children:t.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),t.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function x1(){return t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"100%",style:{maxWidth:"600px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{backgroundColor:"none"},align:"right",valign:"top",width:"50%",children:" "}),t.jsxs("td",{style:{backgroundColor:"none"},valign:"top",children:[t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #000000",display:"block"},width:"598",children:t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"598",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#f1f1f1"},width:"42",children:" "}),t.jsx("td",{style:{background:"#f1f1f1"},width:"74",children:t.jsx("img",{src:"/public/images/ms/azr-img/ms-logo.png",height:"30",align:"left",border:"0",width:"74"})}),t.jsx("td",{style:{background:"#f1f1f1"},width:"482",children:" "})]})})})}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]}),t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px",display:"block"},align:"",width:"598",children:t.jsx("img",{src:"/public/images/ms/azr-img/top.png",height:"70",border:"0",width:"598"})}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})]})}),t.jsx("table",{bgcolor:"#ffffff",border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"35",children:" "}),t.jsxs("td",{style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"22px",fontWeight:"100",lineHeight:"24px",paddingBottom:"24px"},align:"left",valign:"top",width:"345",children:[t.jsx("br",{}),t.jsx("br",{}),"Wenn man Spaß hat, vergeht die Zeit wie im Flug.",t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:"Wie Sie wissen, umfasst Ihre kostenlose Testversion Gutschriften im Wert von 150€, die Sie einen Monat lang nutzen können. Sie haben Ihre Testversion vor mehr als zwei Wochen aktiviert."})]}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"20",children:" "}),t.jsx("td",{style:{background:"#ffffff",display:"block"},align:"right",valign:"top",width:"198",children:t.jsx("img",{src:"/public/images/ms/azr-img/middle.png",alt:"Azure",height:"216",border:"0",width:"198"})}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),t.jsx("td",{style:{background:"#f2f2f7",lineHeight:"1px"},width:"35",children:" "}),t.jsxs("td",{style:{background:"#f2f2f7",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"513",children:[t.jsxs("span",{style:{fontSize:"18px",fontWeight:"100"},children:["Sind Sie den Lösungen wie Infrastrukturdienste, Websites, Mediendienste, mobile Dienste und Lösungen für große Datenmengen bereits verfallen?"," "]}),t.jsx("br",{}),t.jsx("br",{}),"Dann haben wir gute Nachrichten für Sie! Wenn Sie zu einem kostenpflichtigen Abonnement wechseln, bevor Ihre Testversion abläuft, können Sie nach wie vor alle nicht eingesetzten Gutschriften bis zum Ende der Testphase nutzen.",t.jsx("br",{}),t.jsx("br",{}),"Wenn Sie Ihr Abonnement weiterhin unterbrechungsfrei verwenden möchten, können Sie heute Ihr Abonnement durch Befolgen dieser Schritte in ein kostenpflichtiges Abonnement umwandeln:",t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[t.jsx("img",{src:"/public/images/ms/azr-img/num1.png",alt:"1",height:"25",border:"0",width:"25"}),"  "]}),t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Melden Sie sich bei Ihrem"," ",t.jsxs("a",{href:"",style:{color:"#3da5dd",textDecoration:"underline"},children:["Windows Azure-Konto"," "]}),"an",t.jsx("br",{}),t.jsx("br",{})]})]}),t.jsxs("tr",{children:[t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[t.jsx("img",{src:"/public/images/ms/azr-img/num2.png",alt:"2",height:"25",border:"0",width:"25"}),"  "]}),t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Wählen Sie Ihr kostenloses Testabonnement aus",t.jsx("br",{}),t.jsx("br",{})]})]}),t.jsxs("tr",{children:[t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:[t.jsx("img",{src:"/public/images/ms/azr-img/num3.png",alt:"3",height:"25",border:"0",width:"25"}),"  "]}),t.jsxs("td",{style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",paddingTop:"0px"},align:"left",valign:"top",children:["Klicken Sie auf „Jetzt Upgrade ausführen” und wählen Sie „Ja, mein Abonnement aktualisieren.” aus",t.jsx("br",{}),t.jsx("br",{})]})]})]})})]}),t.jsx("td",{style:{background:"#f2f2f7",lineHeight:"1px"},width:"50",children:" "}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"35",children:" "}),t.jsxs("td",{style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"513",children:["Haben Sie weitere Fragen zu Preisen? Nutzen Sie unseren"," ",t.jsx("a",{href:"",title:"Preisrechner",style:{color:"#3da5dd",textDecoration:"underline"},children:"Preisrechner"}),".",t.jsx("br",{}),t.jsx("br",{}),"Mit freundlichen Grüßen",t.jsx("br",{}),"Ihr Windows Azure-Team"]}),t.jsx("td",{style:{background:"#ffffff",lineHeight:"1px"},width:"50",children:" "}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px"},width:"1"})]})})}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#326fb5",lineHeight:"1px",borderLeft:"1px solid #000000",borderTop:"1px solid #898989"},width:"35",children:" "}),t.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},align:"left",valign:"top",width:"530",children:[t.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"Connect"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"530",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"176",children:[t.jsx("a",{href:"",title:"Verwaltungsportal",style:{color:"#f0f6fa",textDecoration:"none"},children:"Verwaltungsportal"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Info zu Mein Konto",style:{color:"#f0f6fa",textDecoration:"none"},children:"Info zu Mein Konto"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Newsletter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Newsletter"})]}),t.jsx("td",{style:{background:"#398bc9"},align:"left",valign:"top",width:"1"}),t.jsx("td",{style:{background:"#326fb5"},align:"left",valign:"top",width:"30"}),t.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"156",children:[t.jsx("a",{href:"",title:"Windows Azure Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Windows Azure Friday"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Stackoverflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow"})]}),t.jsx("td",{style:{background:"#398bc9"},align:"left",valign:"top",width:"1"}),t.jsx("td",{style:{background:"#326fb5"},align:"left",valign:"top",width:"30"}),t.jsxs("td",{style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},align:"left",valign:"top",width:"146",children:[t.jsx("a",{href:"",title:"Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"Blog"})]})]})})})]}),t.jsx("td",{style:{background:"#326fb5",lineHeight:"1px",borderRight:"1px solid #000000",borderTop:"1px solid #898989"},width:"25",children:" "})]})})}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderLeft:"1px solid #000000",borderTop:"1px solid #898989"},width:"35",children:" "}),t.jsxs("td",{style:{background:"#000000",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},align:"left",valign:"top",width:"513",children:["Diese Nachricht von Microsoft stellt einen wichtigen Teil eines Programms, Diensts oder Produkts dar, das bzw. den Sie oder Ihr Unternehmen erworben haben bzw. an dem Sie oder Ihr Unternehmen teilnehmen. Microsoft respektiert Ihre Privatsphäre. Lesen Sie unsere"," ",t.jsx("a",{href:"",title:"Datenschutzbestimmungen",style:{color:"#3da5dd",textDecoration:"underline"},children:"Datenschutzbestimmungen"}),"."]}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderRight:"1px solid #000000",borderTop:"1px solid #898989"},width:"50",children:" "})]})})}),t.jsx("table",{border:"0",cellPadding:"0",cellSpacing:"0",width:"600",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderTop:"solid 2px #898989"},width:"35",children:" "}),t.jsx("td",{style:{background:"#000000",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"393",children:"One Microsoft Way, Redmond, WA 98052 USA"}),t.jsx("td",{style:{background:"#000000",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"20",children:" "}),t.jsx("td",{style:{background:"#000000",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 2px #898989"},align:"left",valign:"top",width:"100",children:t.jsx("img",{src:"/public/images/ms/azr-img/bottom.png",height:"21",align:"left",border:"0",width:"100"})}),t.jsx("td",{style:{background:"#000000",lineHeight:"1px",borderTop:"solid 2px #898989"},width:"50",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{colSpan:"5",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},align:"left",valign:"top",width:"600",children:" "})})]})})]}),t.jsx("td",{style:{backgroundColor:"none"},align:"left",valign:"top",width:"50%",children:" "})]})})})}function m1(){return t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",style:{maxWidth:"600px"},children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{valign:"top",align:"right",width:"50%",style:{backgroundColor:"none"},children:" "}),t.jsxs("td",{valign:"top",style:{backgroundColor:"none"},children:[t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",style:{background:"#ffffff",lineHeight:"1px",display:"block",borderTop:"1px solid #000000"},children:t.jsx("table",{width:"598",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"42",style:{background:"#f1f1f1"},children:" "}),t.jsx("td",{width:"74",style:{background:"#f1f1f1"},children:t.jsx("img",{src:"/public/images/ms/azr-img/ms-logo-azure-top.png",width:"74",height:"30",border:"0",align:"left"})}),t.jsx("td",{width:"482",style:{background:"#f1f1f1"},children:" "})]})})})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"598",align:"right",style:{background:"#f5f5f5",lineHeight:"1px",display:"block"},children:t.jsx("img",{src:"/public/images/ms/azr-img/Azure2014-Nurture_02.png",width:"598",height:"70",border:"0"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})]})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"302",align:"left",valign:"top",style:{background:"#ffffff",color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",fontWeight:"100",lineHeight:"22px",paddingBottom:"24px"},children:[t.jsx("br",{}),t.jsxs("span",{style:{fontSize:"30px",lineHeight:"32px"},children:["Azure の評価版を",t.jsx("br",{}),"お選びいただき",t.jsx("br",{}),"ありがとうございま‍す‍。"]}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{color:"#404041",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"18px",fontWeight:"500"},children:"柔軟性の高い Web アプリケーションおよびサイトの構築、アプリケーションまたはデータベースのクラウドへの移行、モバイル アプリケーション用のクラウド バック エンドの構築、ビデオのエンコードおよびストリーミングなど、お客様がどのようなことに関心を持っているかにかかわらず、クラウドには多くの活用方法があります。"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"296",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"296",align:"left",style:{padding:"10px 0 20px"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"15",bgcolor:"#81bc00",children:" "}),t.jsx("td",{align:"left",valign:"middle",bgcolor:"#81bc00",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"17px",padding:"7px 0"},children:t.jsx("a",{href:"",title:"活用方法を見つける",alias:"CTA: Check out ways to put the cloud to work for you!: ja-JP",style:{color:"#ffffff",textDecoration:"none"},children:"活用方法を見つける"})}),t.jsx("td",{width:"10",bgcolor:"#81bc00",children:" "}),t.jsx("td",{align:"right",valign:"middle",width:"28",bgcolor:"#81bc00",style:{padding:"7px 0"},children:t.jsx("a",{href:"",title:"活用方法を見つける",alias:"CTA: Check out ways to put the cloud to work for you!: ja-JP",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/33333_Azure_ArrowCTA.png",width:"28",height:"28",border:"0"})})}),t.jsx("td",{width:"10",bgcolor:"#81bc00",children:" "})]})})})})})})})]}),t.jsx("td",{width:"90",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"171",align:"right",valign:"top",style:{background:"#ffffff",display:"block"},children:t.jsx("img",{src:"/public/images/ms/azr-img/Azure2014-Nurture_04.png",width:"171",height:"260",border:"0",alt:"Azure"})}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsxs("td",{width:"528",align:"left",valign:"top",style:{background:"#ffffff",padding:"20px 0",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",borderTop:"1px solid #dfdfdf"},children:[t.jsx("span",{style:{fontSize:"17px",fontWeight:"100"},children:"私たちが使用開始をお手伝いいたします。以下の関心があるリンクをクリックしてください。"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:t.jsx("a",{href:"",title:"仮想マシン",alias:"Body: Virtual Machines Image",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/azure-nurturelist-monitor-2014.png",width:"40",height:"40",border:"0"})})}),t.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[t.jsx("strong",{children:"仮想マシン"}),t.jsx("br",{}),t.jsx("a",{href:"",title:"仮想マシン",alias:"Body: Virtual Machines: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"仮想マシン"}),"の作成と実行"]})]}),t.jsxs("tr",{children:[t.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:t.jsx("a",{href:"",title:"Web サイト",alias:"Body: Websites Image",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/azure-nurturelist-globe-2014.png",width:"40",height:"40",border:"0"})})}),t.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[t.jsx("strong",{children:"Web サイト"}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Web サイト",alias:"Body: Web Sites: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"Web サイト"}),"の構築とデプロイ"]})]}),t.jsxs("tr",{children:[t.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:t.jsx("a",{href:"",title:"モバイル",alias:"Body: video image",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/azure-nurturelist-mobile-2014.png",width:"40",height:"40",border:"0"})})}),t.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[t.jsx("strong",{children:"モバイル"}),t.jsx("br",{}),"Android iOS または Phone 8 用の",t.jsx("a",{href:"",title:"モバイル",alias:"Body: Mobile: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"モバイル"})," ","バック エンドのサインアップ"]})]}),t.jsxs("tr",{children:[t.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:t.jsx("a",{href:"",title:"保存、バックアップ、および回復",alias:"Body: Store, back up, and recover image",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/azure-nurturelist-calender-2014.png",width:"40",height:"40",border:"0"})})}),t.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 0px 10px"},children:[t.jsx("strong",{children:"保存とバックアップ"}),t.jsx("br",{}),"データの",t.jsx("a",{href:"",title:"保存、バックアップ、および回復",alias:"Body: Store, backup and recover: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"保存、バックアップ、および回復"})]})]}),t.jsxs("tr",{children:[t.jsx("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 10px 10px"},children:t.jsx("a",{href:"",title:"ビデオ",alias:"Body: video image",style:{color:"#3da5dd",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/azr-img/azure-nurturelist-hexplay-2014.png",width:"40",height:"40",border:"0"})})}),t.jsxs("td",{align:"left",valign:"middle",style:{color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"10px 10px 10px 10"},children:[t.jsx("strong",{children:"メディア"}),t.jsx("br",{}),t.jsx("a",{href:"",title:"ビデオ",alias:"Body: video: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ビデオ"}),"のエンコードおよび共有"]})]})]})}),t.jsx("br",{}),"すべての"," ",t.jsx("a",{href:"",title:"Azure ソリューション",alias:"Body: Azure solutions: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"Azure ソリューション"}),"もご覧ください。",t.jsx("br",{}),t.jsx("br",{}),"何卒、よろしくお願いいたします。",t.jsx("br",{}),t.jsx("br",{}),"Azure チーム",t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("td",{width:"35",style:{background:"#ffffff",lineHeight:"1px",borderTop:"1px solid #dfdfdf"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsxs("td",{width:"538",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px",padding:"20px 0",borderTop:"1px solid #898989"},children:[t.jsx("span",{style:{fontSize:"18px",fontWeight:"100"},children:"リンク"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{width:"530",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsxs("td",{width:"176",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[t.jsx("a",{href:"",title:"管理ポータル",alias:"Quick Links: Management Portal",style:{color:"#f0f6fa",textDecoration:"none"},children:"管理ポータル"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"アカウント情報",alias:"Quick Links: Account",style:{color:"#f0f6fa",textDecoration:"none"},children:"アカウント情報"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"ニュースレター (英語)",alias:"Quick Links: Newsletter",style:{color:"#f0f6fa",textDecoration:"none"},children:"ニュースレター (英語)"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"156",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[t.jsx("a",{href:"",title:"Azure Friday (英語)",alias:"Quick Links: Windows Friday",style:{color:"#f0f6fa",textDecoration:"none"},children:"Azure Friday (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Channel 9 (英語)",alias:"Quick Links: Channel 9",style:{color:"#f0f6fa",textDecoration:"none"},children:"Channel 9 (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Stackoverflow (英語)",alias:"Quick Links: Stack Overflow",style:{color:"#f0f6fa",textDecoration:"none"},children:"Stackoverflow (英語)"})]}),t.jsx("td",{width:"1",align:"left",valign:"top",style:{background:"#398bc9"}}),t.jsx("td",{width:"30",align:"left",valign:"top",style:{background:"#326fb5"}}),t.jsxs("td",{width:"146",align:"left",valign:"top",style:{background:"#326fb5",color:"#f0f6fa",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"15px"},children:[t.jsx("a",{href:"",title:"Twitter (英語)",alias:"Quick Links: Twitter",style:{color:"#f0f6fa",textDecoration:"none"},children:"Twitter (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Facebook (英語)",alias:"Quick Links: Facebook",style:{color:"#f0f6fa",textDecoration:"none"},children:"Facebook (英語)"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"ブログ (英語)",alias:"Quick Links: Blog",style:{color:"#f0f6fa",textDecoration:"none"},children:"ブログ (英語)"})]})]})})})]}),t.jsx("td",{width:"25",style:{background:"#326fb5",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsxs("td",{width:"513",align:"left",valign:"top",style:{background:"#505050",color:"#fffffe",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"15px",padding:"20px 0",borderTop:"1px solid #898989"},children:["弊社はお客様のプライバシーを尊重しています。詳細は、オンライン"," ",t.jsx("a",{href:"",title:"プライバシーに関する声明",alias:"Footer: Privacy Statement: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"プライバシーに関する声明"}),"を参照してください。",t.jsx("br",{}),t.jsx("br",{}),"マイクロソフトから今後プロモーショナル メールを受け取りたくない場合は、"," ",t.jsx("a",{href:"",title:"ここ",alias:"Footer: Unsubscribe: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ここ"}),"をクリックしてください。",t.jsx("br",{}),t.jsx("br",{}),"これらの設定により、購読中のニュース レターや特定のマイクロソフト製品の一部となっているサービス コミュニケーションなどに影響が及ぶことはありません。 弊社からの他の情報配信に関する詳細設定を行うには、"," ",t.jsx("a",{href:"",title:"ここ",alias:"Footer: Contact Preferences: ja-JP",style:{color:"#3da5dd",textDecoration:"none"},children:"ここ"}),"をクリックしてください。"]}),t.jsx("td",{width:"50",style:{background:"#505050",lineHeight:"1px",borderTop:"1px solid #898989"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]})})}),t.jsx("table",{width:"600",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"433",valign:"top",align:"left",style:{background:"#505050",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:t.jsx("span",{style:{fontSize:"10"},children:"日本マイクロソフト株式会社 〒108-0075 東京都港区港南 2-16-3 品川グランドセントラルタワー"})}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"75",valign:"top",align:"left",style:{background:"#505050",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:t.jsx("img",{src:"/public/images/ms/azr-img/MS_Logo_white_100.png",width:"75",height:"16",border:"0",align:"left"})}),t.jsx("td",{width:"35",style:{background:"#505050",lineHeight:"1px",borderTop:"solid 1px #898989",borderBottom:"solid 1px #000000"},children:" "}),t.jsx("td",{width:"1",style:{background:"#000000",lineHeight:"1px"}})]}),t.jsx("tr",{children:t.jsx("td",{width:"600",colSpan:"7",valign:"top",align:"left",style:{background:"none",color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px"},children:" "})})]})})]}),t.jsx("td",{valign:"top",align:"left",width:"50%",style:{backgroundColor:"none"},children:" "})]})})})}function y1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Azure",url:"/Microsoft/Azure"},{text:"Service Alerts",url:"/Microsoft/Azure/Alerts"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(ql,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Azure Service Alerts • Global",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"Azure Service Alerts are email notifications that keep global Azure subscribers informed on the latest Azure features, updates, outages, and migrations. These service communications are delivered globally and are localized into 44 languages."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsxs(t.Fragment,{children:[t.jsx(g1,{}),t.jsx("br",{}),t.jsx(x1,{}),t.jsx("br",{}),t.jsx(m1,{})]})})]})]})}const j1=p.table`
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
`;function w1(){return t.jsx(j1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",className:"_student",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),t.jsx("td",{width:"466",align:"left",valign:"middle",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:t.jsx("a",{href:"",title:"Microsoft Student Partners",alias:"Header Image: Microsoft Student Partners",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSPartnerLogo-466_2015-04.png",border:"0",alt:"Microsoft Student Partners",className:"header"})})}),t.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),t.jsxs("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"54",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:t.jsx("a",{href:"",title:"Facebook",alias:"Header Social: Facebook",style:{textDecoration:"none",border:"0px",color:"#000001"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSPartner_Facebook_2015-04.png",width:"20",height:"20",border:"0",alt:"Facebook"})})}),t.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:t.jsx("a",{href:"",title:"Twitter",alias:"Header Social: Twitter",style:{textDecoration:"none",border:"0px",color:"#000001"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSPartner_Twitter_2015-04.png",width:"20",height:"20",border:"0",alt:"Twitter"})})}),t.jsx("td",{width:"5",align:"left",style:{color:"#ffffff",padding:"15px 0"},children:" "}),t.jsx("td",{width:"20",align:"left",valign:"top",style:{color:"#000000",padding:"0 0 15px"},children:t.jsx("a",{href:"",title:"Instagram",alias:"Header Social: Instagram",style:{textDecoration:"none",border:"0px",color:"#000001"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSPartner_IG_2015-04.png",width:"20",height:"20",border:"0",alt:"Instagram"})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#2b73d4",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"18px",padding:"0 0 6px"},children:"April 2015"})}),t.jsx("tr",{children:t.jsxs("td",{width:"174",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"11px",padding:"0px 0px 5px 0px"},children:["Having trouble viewing this email?"," ",t.jsx("a",{href:"",title:"View as a webpage",alias:"Preheader: View as a webpage",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"underline"},children:"View as a webpage."})]})})]})})]}),t.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"380",valign:"top",bgcolor:"#ffffff",className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{width:"340",colSpan:"3",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_Headline_Scott_2015-04.png",width:"177",height:"24",border:"0",alt:"A Message From Scott Burmester"})})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "}),t.jsxs("td",{width:"340",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"15px 0px 25px 0px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Welcome to our Worldwide MSP Newsletter"}),t.jsx("br",{}),t.jsx("br",{}),"Hello MSPs! When I was given the honor of becoming the MSP Program Manager, one of my first goals was to facilitate better worldwide connections within our amazing community. We started toward this goal by creating the"," ",t.jsx("a",{href:"",title:"WW MSP Yammer Network",alias:"Body: WW MSP Yammer Network",style:{textDecoration:"underline",color:"#404041"},children:"WW MSP Yammer Network"})," ","and our"," ",t.jsx("a",{href:"",title:"monthly MSP calls",alias:"Body: monthly MSP calls",style:{textDecoration:"underline",color:"#404041"},children:"monthly MSP calls"}),", which allow us to share best practices and gain insight from MSP stakeholders around the globe. We’ll use this newsletter as one more worldwide communication vehicle to share exclusive content, program benefits and offers specifically for our MSPs. We hope you enjoy!"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "})]})]})})}),t.jsx("td",{width:"260",valign:"top",align:"center",className:"block",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"0"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_hires.jpg",border:"0",alt:"Welcome to our worldwide MSP newsletter",width:"260",className:"sectionIMG"})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",valign:"middle",align:"center",bgcolor:"#ffffff",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:t.jsx("a",{href:"",title:"Microsoft Azure Offer for Students",alias:"Section Image: Build 2015",style:{textDecoration:"none",color:"#404041"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_azurestudent.jpg",border:"0",alt:"Microsoft Azure Offer for Students",className:"topstoryIMG"})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_2015-04_Headline_TopStoriesB.png",border:"0",alt:"Top Stories"})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",bgcolor:"#ffffff",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"540",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0px 25px 0px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Microsoft Azure Offer for Students"}),t.jsx("br",{}),t.jsx("br",{}),"In March, we launched a new"," ",t.jsx("a",{href:"",title:"Microsoft Azure",alias:"Body: Microsoft Azure",style:{textDecoration:"underline",color:"#404041"},children:"Microsoft Azure"})," ","offer specifically for students. After receiving initial feedback from our student developer community, we adjusted the redemption process of the offer and would now like to have our MSPs test it so we can make it even better in the months to come."," ",t.jsx("a",{href:"",title:"We welcome your feedback",alias:"Body: We welcome your feedback",style:{textDecoration:"underline",color:"#404041"},children:"We welcome your feedback"}),"!"]}),t.jsx("td",{width:"80",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"380",valign:"top",bgcolor:"#ffffff",className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "}),t.jsxs("td",{width:"340",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"15px 0px 25px 0px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Windows 10 Technical Preview"}),t.jsx("br",{}),t.jsx("br",{}),"We’re building Windows 10 in a whole new way. You can help build Windows 10 alongside PC experts, IT pros, and developers from around the world through the Windows Insider Program.",t.jsx("br",{}),t.jsx("br",{}),"This is not only the one place to receive the latest Windows 10 builds, but also a community of developers who are looking to impact future versions of Windows."," ",t.jsx("a",{href:"",title:"Join the program now",alias:"Body: Join the program now",style:{textDecoration:"underline",color:"#404041"},children:"Join the program now"}),"!"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",padding:"15px 0px 25px 0px"},children:" "})]})})})}),t.jsx("td",{width:"260",valign:"top",align:"center",className:"block",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"0"},children:t.jsx("a",{href:"",title:"Windows 10 Technical Preview",alias:"Section Image: Windows 10 Technical Preview",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_win10.jpg",border:"0",alt:"Windows 10 Technical Preview",width:"260",className:"sectionIMG"})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",valign:"middle",align:"center",bgcolor:"#ffffff",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:t.jsx("a",{href:"",title:"Spain MSP changing perceptions of Microsoft",alias:"Section Image: How do student devs",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_spain.jpg",border:"0",alt:"Spain MSP changing perceptions of Microsoft",className:"topstoryIMG"})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_Headline_Country_2015-04.png",border:"0",alt:"Country Spotlight"})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",bgcolor:"#ffffff",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"560",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Spain MSP Changing Perceptions of Microsoft"}),t.jsx("br",{}),t.jsx("br",{}),"Roya Change Lee carried her spirit and passion as a MSP into her new role as a TE Intern."," ",t.jsx("a",{href:"",title:"Find out how",alias:"Body: Find out how",style:{textDecoration:"underline",color:"#404041"},children:"Find out how"})," ","she revitalized the MSP program in Spain to help change perceptions about Microsoft."]}),t.jsx("td",{width:"60",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",className:"mob-320",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"640",colSpan:"2",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"0",msoLineHeightRule:"exactly",lineHeight:"24px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_2015-04_Headline_KeyDatesB.png",border:"0",alt:"Key Dates + Events"})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "}),t.jsx("td",{width:"320",className:"block",align:"left",valign:"top",bgcolor:"#ffffff",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"280",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Key Dates"}),t.jsx("br",{}),t.jsx("br",{}),"Be sure to mark your calendars with these important dates!",t.jsxs("ul",{children:[t.jsx("li",{style:{paddingBottom:"6px"},children:t.jsx("a",{href:"",title:"Worldwide MSP Call: April 28, 2015",alias:"Body: Worldwide MSP Call: April 28, 2015",style:{textDecoration:"underline",color:"#404041"},children:"Worldwide MSP Call: April 28, 2015"})}),t.jsx("li",{style:{paddingBottom:"6px"},children:t.jsx("a",{href:"",title:"Build Conference Live Stream: April 29 – May 1, 2015",alias:"Body: Build Conference Live Stream: April 29 – May 1, 2015",style:{textDecoration:"underline",color:"#404041"},children:"Build Conference Live Stream: April 29 – May 1, 2015"})})]})]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),t.jsx("td",{width:"320",className:"block",align:"left",valign:"top",bgcolor:"#ffffff",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"280",valign:"top",align:"left",style:{color:"#404040",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",padding:"10px 0 25px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Upcoming Events"}),t.jsx("br",{}),t.jsx("br",{}),"Don’t miss out on the latest coding activities!",t.jsxs("ul",{children:[t.jsx("li",{style:{paddingBottom:"6px"},children:t.jsx("a",{href:"",title:"Free Windows 10 Game Jams: May – June 2015. Find an event and register today!",alias:"Body: Free Windows 10 Game Jams: May – June 2015. Find an event and register today!",style:{textDecoration:"underline",color:"#404041"},children:"Free Windows 10 Game Jams: May – June 2015. Find an event and register today!"})}),t.jsx("li",{style:{paddingBottom:"6px"},children:t.jsx("a",{href:"",title:"Build Tours: May – June 2015",alias:"Body: Build Tours: May – June 2015",style:{textDecoration:"underline",color:"#404041"},children:"Build Tours: May – June 2015"})})]})]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "})]})})})}),t.jsx("td",{width:"30",className:"mobile-hidden",bgcolor:"#e6e6e6",children:" "})]})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"6px 0"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e6e6e6",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{padding:"0px 0px 20px 0px"},children:" "}),t.jsxs("td",{width:"340",align:"left",style:{fontFamily:"Arial,sans-serif",fontSize:"9px",color:"#4d4d4d",lineHeight:"16px",textAlign:"left",padding:"0px 0px 20px 0px"},children:["Microsoft Corporation",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052 USA"]}),t.jsx("td",{width:"300",align:"right",valign:"bottom",style:{lineHeight:"1px",padding:"0px 0px 20px 0px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSLogo_Footer_2015-04.png",alt:"Microsoft",width:"75",height:"16",title:"Microsoft",border:"0",style:{border:"none"}})}),t.jsx("td",{width:"30",children:" "})]})})})]})})})})}const b1=p.table`
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
`;function v1(){return t.jsx(b1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),t.jsx("td",{width:"410",align:"left",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:t.jsx("a",{href:"",title:"Microsoft Imagine",alias:"Header Image: Microsoft Imagine",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_MSImagineLogo_2014-12.png",border:"0",alt:"Microsoft Imagine",className:"header"})})}),t.jsx("td",{width:"135",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "}),t.jsx("td",{width:"115",align:"right",style:{color:"#ffffff",fontSize:"11px",padding:"24px 0 8px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_mslogowt_115.png",border:"0",alt:"Microsoft",className:"logo"})}),t.jsx("td",{width:"20",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"24px 0 8px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"10px 0 25px"},children:" "}),t.jsx("td",{width:"410",align:"left",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"24px",padding:"10px 0 25px"},children:"Dream it. Build it. Live it."}),t.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"0px 0 25px"},children:" "}),t.jsx("td",{width:"230",align:"right",valign:"bottom",style:{color:"#ffffff",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100",fontSize:"18px",padding:"10px 0 25px"},children:"March 2015"}),t.jsx("td",{width:"20",align:"left",style:{color:"#009285",padding:"10px 0 25px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"right",style:{color:"#ffffff",fontSize:"11px"},children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3589dc",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#3589dc"},children:" "}),t.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",padding:"10px 0 25px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Want to win $1,000?"}),t.jsx("br",{}),t.jsx("br",{}),"With just two"," ",t.jsx("a",{href:"",title:"Code Hunt contests",alias:"Body: Code Hunt contests",style:{textDecoration:"underline",color:"#fffffe"},children:"Code Hunt contests"})," ","left, you’re almost out of time to test your coding skills. You get a snippet of code, which you have to rewrite to produce a desired output in as few lines of code as possible. Puzzles start easy, but quickly get more difficult."," ",t.jsx("a",{href:"",title:"Sign up to play!",alias:"Body: Sign up to play!",style:{textDecoration:"underline",color:"#fffffe"},children:"Sign up to play!"})]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#3589dc",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),t.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px"},children:t.jsx("a",{href:"",title:"Sign up to play!",alias:"Section Image: Code Hunt",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_codehunt.jpg",border:"0",alt:"Want to win $1,000?",className:"sectionIMG"})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-seri",fontSize:"15px",padding:"35px 0"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Imagine Cup World Finals return to Seattle!"}),t.jsx("br",{}),t.jsx("br",{}),"For the second year in a row, the Imagine Cup World Finals will be held in Seattle, July 27 – July 31. In addition to the $50K competition prize, we’ve created customized Boot Camps for each category winner with help from"," ",t.jsx("a",{href:"",title:"Microsoft Ventures",alias:"Body: Microsoft Ventures",style:{textDecoration:"underline",color:"#000001"},children:"Microsoft Ventures"}),","," ",t.jsx("a",{href:"",title:"YouthSpark",alias:"Body: YouthSpark",style:{textDecoration:"underline",color:"#000001"},children:"YouthSpark"})," ","and"," ",t.jsx("a",{href:"",title:"PAX",alias:"Body: PAX",style:{textDecoration:"underline",color:"#000001"},children:"PAX"}),"."," ",t.jsx("a",{href:"",title:"Learn more",alias:"Body: Learn more",style:{textDecoration:"underline",color:"#000001"},children:"Learn more"}),"!"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),t.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"35px 0"},children:t.jsx("a",{href:"",title:"Learn more",alias:"Section Image: Learn more",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_bootcamp.jpg",border:"0",alt:"Imagine Cup World Finals return to Seattle!",className:"sectionIMG"})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#009285",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#009285"},children:" "}),t.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0"},children:[t.jsxs("span",{style:{fontSize:"22px",lineHeight:"28px"},children:["Free Office 365 for Students"," "]}),t.jsx("br",{}),t.jsx("br",{}),"U.S. students can now get Office 365 ProPlus for free using a new"," ",t.jsx("a",{href:"",title:"self-service sign-up process",alias:"Body: Self-service Sign-up Process",style:{textDecoration:"underline",color:"#fffffe"},children:"self-service sign-up process"}),". The offer gives you access to Word, PowerPoint, Excel, Outlook, OneNote, Access, Publisher and more, plus 1 TB of storage on OneDrive for Business."]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#009285",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0px"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Create cross-platform games with Marmalade!"}),t.jsx("br",{}),t.jsx("br",{}),"Want to build games for Windows 8 and Windows Phone 8 with a fun, high-performance and cross-platform development tool? Then watch"," ",t.jsx("a",{href:"",title:"Creating Your First Marmalade Game",alias:"Body: Creating Your First Marmalade Game",style:{textDecoration:"underline",color:"#000001"},children:"Creating Your First Marmalade Game"}),", on-demand."," ",t.jsx("a",{href:"",title:"Take advantage of this free online training today",alias:"Body: Take advantage of this free online training today",style:{textDecoration:"underline",color:"#000001"},children:"Take advantage of this free online training today"}),"!"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#00c8f5",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#00c8f5"},children:" "}),t.jsxs("td",{width:"660",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",lineHeight:"20px",padding:"35px 0"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Learn from the Pros"}),t.jsx("br",{}),t.jsx("br",{}),"Struggling to finish an app? A"," ",t.jsx("a",{href:"",title:"new video series",alias:"Body: new video series",style:{textDecoration:"underline",color:"#000001"},children:"new video series"})," ","shows how developers are using Microsoft technologies along with developer tools like Visual Studio Online to take their apps to the next level. Watch the videos and learn from the pros."," ",t.jsx("a",{href:"",title:"Watch now",alias:"Body: Watch now",style:{textDecoration:"underline",color:"#000001"},children:"Watch now"}),"."]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#00c8f5",fontSize:"13px",lineHeight:"20px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff"},children:" "}),t.jsxs("td",{width:"310",valign:"top",align:"left",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"15px",padding:"35px 0"},children:[t.jsx("span",{style:{fontSize:"22px",lineHeight:"28px"},children:"Imagine Cup winners become entrepreneurs"}),t.jsx("br",{}),t.jsx("br",{}),"Team Estimeet, winners in 2014’s Imagine Cup Innovation Category, recounts its time at Microsoft Ventures London Accelerator. See how the team is turning its winning app into a viable business."," ",t.jsx("a",{href:"",title:"Follow their journey on the Student Developer Blog",alias:"Body: Follow their journey on the Student Developer Blog",style:{textDecoration:"underline",color:"#000001"},children:"Follow their journey on the Student Developer Blog"}),"."]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontSize:"13px",lineHeight:"20px"},children:" "})]})})})}),t.jsx("td",{width:"350",valign:"middle",className:"block",align:"center",style:{color:"#444444",fontSize:"13px",lineHeight:"0px",padding:"35px 0"},children:t.jsx("a",{href:"",title:"Follow their journey on the Student Developer Blog",alias:"Section Image: Follow their journey on the Student Developer Blog",style:{textDecoration:"none",border:"0px",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_innovate.jpg",border:"0",alt:"Imagine Cup winners become entrepreneurs",className:"sectionIMG"})})})]})})}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"234",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"234",align:"center",bgcolor:"#009285",children:t.jsx("a",{href:"",title:"The Windows 8.1 Developer Getting Started Guide",alias:"Evergreen: The Windows 8.1 Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_EvG_81Dev_2014-11.png",border:"0",alt:"Windows 8.1 Developer",className:"EvG"})})})})})})}),t.jsx("td",{width:"18",className:"mobile-hidden",children:" "}),t.jsx("td",{width:"232",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"232",align:"center",bgcolor:"#009285",children:t.jsx("a",{href:"",title:"The Windows Phone Developer Getting Started Guide",alias:"Evergreen: Windows Phone Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_EvG_PhoneDev_2014-11.png",border:"0",alt:"Windows Phone Developer",className:"EvG"})})})})})})}),t.jsx("td",{width:"18",className:"mobile-hidden",children:" "}),t.jsx("td",{width:"234",className:"block",align:"center",valign:"top",style:{padding:"10px 0px"},children:t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"234",align:"center",bgcolor:"#009285",children:t.jsx("a",{href:"",title:"The Windows Azure Developer Getting Started Guide",alias:"Evergreen: Windows Azure Developer Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33539_EvG_AzureDev_2014-11.png",border:"0",alt:"Windows Azure Developer",className:"EvG"})})})})})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",className:"mob-320",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",align:"center",valign:"top",children:" "})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f1f1f1",className:"mob-320",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"12",style:{padding:"0px 0px 20px 0px"},children:" "}),t.jsxs("td",{width:"376",align:"left",style:{fontFamily:"Arial,sans-serif",fontSize:"9px",color:"#4d4d4d",lineHeight:"16px",textAlign:"left",padding:"0px 0px 20px 0px"},children:["Microsoft Corporation",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052 USA"]}),t.jsx("td",{width:"300",align:"right",valign:"bottom",style:{lineHeight:"1px",padding:"0px 0px 20px 0px"},children:t.jsx("img",{src:"/public/images/ms/stu-img/33333_logo_microsoft_clear.png",alt:"Microsoft",width:"75",height:"13",title:"Microsoft",border:"0",style:{border:"none"}})}),t.jsx("td",{width:"12",children:" "})]})})})]})})})})}function S1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Student",url:"/Microsoft/Student"}];return t.jsxs(t.Fragment,{children:[" ",t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/stu.svg",alt:"Microsoft Student"}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Microsoft Student & Imagine Cup Newsletter",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"Microsoft Student and Imagine Cup are services that offer students and educators access to computer programming courses and webinars sponsored by Office 365. Students who are enrolled at qualifying schools also receive access to Microsoft products, scholarships, internships, programs and jobs. The Student and Imagine Cup Newsletters are monthly digital publications that help subscribers stay informed on the latest products, events, and educational activities."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsxs(t.Fragment,{children:[t.jsx(w1,{}),t.jsx("br",{}),t.jsx(v1,{})]})})]})]})}const k1=p.table`
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
`;function z1(){return t.jsx(k1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_headerlogo150x35_2014-09.png",width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),t.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"500",align:"right",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"ltr"},children:"Home | Why Windows | Latest Devices | Windows 10"}),t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"4",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"400",align:"left",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"370",align:"left",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:["Congratulations on reserving Windows 10",t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsx("td",{width:"370",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:"Your free upgrade is coming in August, and now that you’ve reserved it, you won’t miss a minute of Windows 10 helping you do great things."})})})]}),t.jsx("td",{width:"10",children:" "})]})})}),t.jsx("td",{width:"300",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:t.jsx("img",{src:"/public/images/ms/ten-img/splithero_ltr.jpg",width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:["You’ll get a notification when your upgrade is ready. Windows will automatically take care of the download in advance. That way you can install and start using Windows 10 immediately – or schedule a time that’s convenient for you. If you have any more questions, check out the upgrade FAQ.",t.jsx("br",{}),t.jsx("br",{}),"Read the FAQ   ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:"What’s in the “Get Windows 10” app?"}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:t.jsx("img",{src:"/public/images/ms/ten-img/getwin10_ltr.jpg",width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsx("td",{width:"660",align:"left",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"ltr"},children:"You’ve just reserved your free upgrade using the “Get Windows 10 app”. You can also use the app to confirm the reservation, check to see if your device is compatible with Windows 10, and un-reserve if you wish to cancel your reservation prior to your Windows 10 upgrade."}),t.jsx("td",{width:"20",children:" "})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"ltr"},children:[t.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 is full of great features"}),t.jsx("br",{}),t.jsx("br",{}),"In addition to features you many have heard about such as Cortana and our new web browser, Windows 10 contains lots of other exciting tools to help you do great things.",t.jsx("br",{}),t.jsx("br",{}),"Learn more   ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"ltr"},children:[t.jsxs("em",{children:["Windows Offer Details",t.jsx("br",{}),"Windows 10 is a free upgrade, for a limited time, for qualified Windows 7 and Windows 8.1 devices (including devices you already own). It is our intent that most of these devices will qualify, but some hardware/software requirements apply and feature availability may vary by device. The availability of Windows 10 upgrade for Windows Phone 8.1 devices may vary by OEM, mobile operator or carrier. Devices must be connected to the internet and have Windows Update enabled. ISP fees may apply. Windows 7 SP1 and Windows 8.1 Update required. Some editions are excluded: Windows 7 Enterprise, Windows 8/8.1 Enterprise, and Windows RT/RT 8.1. Active Software Assurance customers in volume licensing have the benefit to upgrade to Windows 10 enterprise offerings outside of this offer. To check for compatibility and other important installation information, visit your device manufacturer’s website and the www.windows.com/windows10specs."]}),t.jsx("br",{}),t.jsx("br",{}),"Microsoft respects your privacy. Please read our online Privacy Statement."]}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),t.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052 USA"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),t.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_FooterLogo125x27_2014-09.png",width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}const A1=p.table`
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
`;function I1(){return t.jsx(A1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"500",align:"left",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"rtl"},children:"בית | מדוע Windows | המכשירים העדכניים ביותר | Windows 10"}),t.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_headerlogo150x35_2014-09.png",width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"2",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"300",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"rtl"},class:"block",children:t.jsx("img",{src:"/public/images/ms/ten-img/splithero_rtl.jpg",width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})}),t.jsx("td",{width:"400",align:"right",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"rtl"},class:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"370",align:"right",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"rtl"},children:["השדרוג החינמי שלך יגיע באוגוסט, וכעת, ולאחר ששריינת אותו, לא תחמיץ אף דקה מחוויית Windows 10, שתסייע לך לבצע דברים נהדרים.",t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsx("td",{width:"370",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"rtl"},children:"לאחר שהוא יהיה זמין ב-29 ביולי, Windows 10 יורד למכשיר שלך. תקבל הודעה כשהיא תהיה מוכנה להתקנה — תוכל להתקין אותה מיד או לבחור מועד נוח יותר עבורך."})})})]}),t.jsx("td",{width:"10",children:" "})]})})})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"rtl"},children:["היות ושריינת לעצמך שדרוג, Windows תתכונן להורדה באופן אוטומטי. לאחר מכן תקבל הודעה כשהשדרוג יהיה מוכן להתקנה. כך תוכל להתקין ולהתחיל להשתמש מיד ב- Windows 10 - או שתוכל לתזמן מועד התקנה נוח יותר עבורך. לשאלות נוספות, קרא את השאלות הנפוצות בנושא השדרוג.",t.jsx("br",{}),t.jsx("br",{}),"להתקין ולהתחיל להשתמש ב- Windows 10 ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"rtl"},children:"מהי אפליקציית Get Windows 10?"}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:t.jsx("img",{src:"/public/images/ms/ten-img/getwin10_rtl.jpg",width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsx("td",{width:"660",align:"right",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"rtl"},children:'זה עתה שריינת עבורך שדרוג חינמי באמצעות שימוש באפליקציית "קבל את Windows 10". באפשרותך להשתמש באפליקציה גם כדי לוודא את הזמנתך, לבדוק אם המכשיר שלך תואם ל- Windows 10 ולבטל את הזמנתך טרם השדרוג ל- Windows 10.'}),t.jsx("td",{width:"20",children:" "})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"rtl"},children:[t.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 מלאה בתכונות נהדרות"}),t.jsx("br",{}),t.jsx("br",{}),"בנוסף לתכונות שבוודאי שמעת עליהן, כגון Cortana* ודפדפן האינטרנט החדש שלנו, Microsoft Edge, Windows 10 מכילה כלים מלהיבים רבים נוספים שיסייעו לך לבצע דברים נהדרים.",t.jsx("br",{}),t.jsx("br",{}),"למידע נוסף   ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"rtl"},children:[t.jsxs("em",{children:["פרטי מבצע Windows",t.jsx("br",{}),"כן, בחינם! מבצע שדרוג זה הוא עבור גרסה מלאה של Windows 10, לא גירסת ניסיון. נדרשת הורדה של 3GB; חלים תעריפי נתונים רגילים. כדי לנצל מבצע חינמי זה, עליך לשדרג ל-Windows 10 תוך שנת זמינות אחת. לאחר השדרוג, תקבל את Windows 10 ללא תשלום במכשיר זה.",t.jsx("br",{}),t.jsx("br",{}),"עורכי הדין שלנו הכריחו אותנו לומר זאת:",t.jsx("br",{}),"מבצע שדרוג Windows 10 זמין עבור מכשירי Windows 7- Windows 8.1 זכאים, כולל מכשירים הנמצאים כבר ברשותך. דרישות חומרה/תוכנה מסוימות חלות וזמינות התכונות עשויה להשתנות בהתאם למכשיר ולשוק. זמינות השדרוג ל- Windows 10 עבור מכשירי Windows Phone 8.1 עשויה להשתנות בהתאם ליצרן (OEM), למפעיל, או לספק הסלולאר. המכשירים חייבים להיות מחוברים לאינטרנט - Windows Update צריך להיות זמין. נדרשים Windows 7 SP1 - Windows 8.1 Update. מהדורות מסוימות אינן נכללות: Windows 7 Enterprise, Windows 8/8.1 Enterprise - Windows RT/RT 8.1. לקוחות Software Assurance פעילים ברישוי רב משתמשים זכאים לשדרוג ל- Windows 10 במסגרת מבצעים לארגונים, מלבד מבצע זה. כדי לבדוק את התאימות ומידע חשוב אחר אודות ההתקנה, בקר באתר האינטרנט של יצרן המכשיר ובדף המפרט של Windows 10. ייתכן שעם הזמן יחולו דרישות נוספות עבור עדכונים. האבטחה והתכונות מתעדכנות באופן אוטומטי ותכונה זו זמינה תמיד.",t.jsx("br",{}),t.jsx("br",{}),"*לא זמין בכל השווקים."]}),t.jsx("br",{}),t.jsx("br",{}),"חברת Microsoft מכבדת את פרטיותך.",t.jsx("br",{}),"למידע נוסף, קרא את הצהרת הפרטיות המקוונת שלנו."]}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),t.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052 USA"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),t.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_FooterLogo125x27_2014-09.png",width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}const P1=p.table`
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
`;function H1(){return t.jsx(P1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"150",style:{background:"#ffffff",padding:"15px 0 25px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_headerlogo150x35_2014-09.png",width:"150",height:"35",border:"0",align:"left",alt:"Windows"})}),t.jsx("td",{width:"10",style:{background:"#ffffff",lineHeight:"1px"},children:" "}),t.jsx("td",{width:"500",align:"right",style:{backgroundColor:"#ffffff",color:"#999999",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",lineHeight:"15px",padding:"15px 0 25px",direction:"ltr"},children:"หน้าแรก | ทำไมต้องใช้ Windows | อุปกรณ์ล่าสุด | Windows 10"}),t.jsx("td",{width:"20",style:{background:"#ffffff",lineHeight:"1px"},children:" "})]})}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"4",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"400",align:"left",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"370",align:"left",valign:"middle",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:["ยินดีด้วย คุณได้ทำการจอง Windows 10 แล้ว",t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tr",{children:t.jsx("td",{width:"370",align:"left",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:"การอัพเกรดฟรีของคุณจะใช้ได้ตั้งแต่วันที่ 29 กรกฎาคม และตอนนี้เมื่อคุณได้จองการอัพเกรดแล้ว คุณจะไม่พลาดการทำงานอันยอดเยี่ยมของ Windows 10 แม้แต่นาทีเดียว"})})})]}),t.jsx("td",{width:"10",children:" "})]})})}),t.jsx("td",{width:"300",align:"right",valign:"top",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"32px",lineHeight:"40px",direction:"ltr"},class:"block",children:t.jsx("img",{src:"/public/images/ms/ten-img/splithero_ltr.jpg",width:"300",height:"339",border:"0",alt:"Windows 10",class:"sectionImg"})})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 0px 0px",direction:"ltr"},children:["คุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมใช้งาน Windows จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ ซึ่งจะทำให้คุณสามารถติดตั้งและเริ่มใช้งาน Windows 10 ได้ทันที หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด",t.jsx("br",{}),t.jsx("br",{}),"อ่านคำถามที่พบบ่อย   ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsx("td",{width:"660",align:"center",valign:"top",style:{color:"#0078d7",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100",padding:"0 0 30px",direction:"ltr"},children:"แอพ ติดตั้ง Windows 10 ใช้ทำอะไรได้บ้าง"}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"center",valign:"middle",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif"},children:t.jsx("img",{src:"/public/images/ms/ten-img/getwin10_ltr.jpg",width:"600",height:"383",border:"0",alt:"Get Windows 10",class:"hero"})})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"left",valign:"top",style:{padding:"10px 0 40px",color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"22px",direction:"ltr"},children:["คุณได้จองการอัพเกรดฟรีโดยใช้ “แอพติดตั้ง Windows 10” เรียบร้อยแล้ว นอกจากนี้คุณยังสามารถใช้แอพเพื่อยืนยันการจอง และตรวจสอบเพื่อดูว่าอุปกรณ์ของคุณสามารถใช้งานกับ Windows 10 ได้ และยกเลิกการจองหากคุณต้องการยกเลิกการจองก่อนทำการอัพเกรดเป็น Windows 10",t.jsx("br",{}),t.jsx("br",{}),"เนื่องจากคุณได้จองการอัพเกรดแล้ว Windows จะจัดการการดาวน์โหลดให้พร้อมไว้ล่วงหน้าโดยอัตโนมัติ จากนั้นคุณจะได้รับการแจ้งเตือนเมื่อการอัพเกรดของคุณพร้อมติดตั้ง ซึ่งจะทำให้คุณสามารถเริ่มใช้งาน Windows 10 ได้ทันที หรืออาจเลือกกำหนดเวลาที่สะดวกสำหรับคุณ หากคุณมีคำถามเพิ่มเติม โปรดอ่านข้อมูลในส่วนคำถามที่พบบ่อยในการอัพเกรด"]}),t.jsx("td",{width:"20",children:" "})]})]}),t.jsxs("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#0078d7",children:[t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"20",children:" "}),t.jsxs("td",{width:"660",align:"left",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px 15px 0px",direction:"ltr"},children:[t.jsx("span",{style:{fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontSize:"26px",lineHeight:"32px",fontWeight:"100"},children:"Windows 10 มีคุณสมบัติอันยอดเยี่ยมมากมาย"}),t.jsx("br",{}),t.jsx("br",{}),"นอกจากคุณสมบัติอย่าง Cortana* และ Microsoft Edge ซึ่งเป็นเบราว์เซอร์รุ่นใหม่ของเราที่คุณอาจเคยได้ยินมาบ้างแล้ว Windows 10 ยังมีเครื่องมืออันน่าตื่นเต้นอื่นๆ อีกมากมายเพื่อช่วยคุณสร้างสรรค์งานอันยอดเยี่ยม",t.jsx("br",{}),t.jsx("br",{}),"เรียนรู้เพิ่มเติม   ",t.jsx("img",{src:"/public/images/ms/ten-img/33333_azure_arrowcta.png",width:"16",height:"16",border:"0"})]}),t.jsx("td",{width:"20",children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"700",colSpan:"3",align:"left",valign:"middle",style:{color:"#505050",fontFamily:"Segoe UI&,Arial,sans-serif"},children:" "})})]}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"640",align:"left",valign:"top",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"20px 0",direction:"ltr"},children:[t.jsxs("em",{children:["*รายละเอียดข้อเสนอ Windows",t.jsx("br",{}),"ใช่แล้ว ฟรี! ข้อเสนอการอัพเกรดนี้สำหรับ Windows 10 รุ่นสมบูรณ์ ไม่ใช่รุ่นทดลอง ต้องดาวน์โหลด 3GB โดยมีค่าบริการข้อมูลตามมาตรฐาน ในการรับข้อเสนอฟรีนี้ คุณต้องอัพเกรด Windows 10 ภายในหนึ่งปีที่สามารถทำได้ เมื่ออัพเกรดแล้ว คุณจะใช้งาน Windows 10 ได้ฟรีบนอุปกรณ์นั้น",t.jsx("br",{}),t.jsx("br",{}),"แผนกกฎหมายของเราแนะนำให้พูดว่า: ข้อเสนอการอัพเกรด Windows 10 ใช้ได้กับอุปกรณ์ Windows 7 และ Windows 8.1 ที่มีคุณสมบัติตามกำหนดรวมถึงอุปกรณ์ที่เป็นของคุณด้วย อาจมีข้อกำหนดด้านฮาร์ดแวร์/ซอฟต์แวร์บางประการ และคุณลักษณะที่ใช้ได้อาจแตกต่างกันไป ขึ้นอยู่กับตัวอุปกรณ์และตลาด สิทธิ์การอัพเกรดเป็น Windows 10 สำหรับอุปกรณ์ Windows Phone 8.1 อาจแตกต่างกันไปตาม OEM และผู้ให้บริการโครงข่ายโทรศัพท์มือถือ จะต้องเชื่อมต่ออุปกรณ์กับอินเทอร์เน็ตและเปิดใช้งาน การอัพเดต Windows ต้องมีการอัพเดต Windows 7 SP1 และ Windows 8.1 มีบางรุ่นที่ไม่มีสิทธิ์: Windows 7 Enterprise, Windows 8/8.1 Enterprise และ Windows RT/RT 8.1 ลูกค้าที่มี Software Assurance แบบ Volume Licensing ที่ยังใช้งานได้จะได้รับสิทธิประโยชน์ในการอัพเกรดเป็น Windows 10 Enterprise นอกเหนือจากข้อเสนอนี้ ในการตรวจสอบความเข้ากันได้ของอุปกรณ์และข้อมูลการติดตั้งที่สำคัญอื่นๆ โปรดเยี่ยมชมเว็บไซต์ของผู้ผลิตอุปกรณ์ของคุณ และหน้า Windows 10 Specifications อาจจำเป็นต้องอัพเดตเพิ่มเติมเมื่อเวลาผ่านไป การรักษาความปลอดภัยและคุณลักษณะได้รับการอัพเดตโดยอัตโนมัติซึ่งมีการเปิดใช้งานอยู่เสมอ",t.jsx("br",{}),t.jsx("br",{}),"*อาจไม่มีให้ใช้งานในบางตลาด"]}),t.jsx("br",{}),t.jsx("br",{}),"Microsoft เคารพในความเป็นส่วนตัวของคุณ หากต้องการเรียนรู้เพิ่มเติม โปรดอ่านคำ ชี้แจงสิทธิ์ส่วนบุคคล ออนไลน์ของเรา"]}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px"},children:" "})]})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#d2d2d2",children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "}),t.jsxs("td",{width:"395",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4d4d4d",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",padding:"0px 0px 15px 0px"},children:["Microsoft Corporation",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052 USA"]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:" "}),t.jsx("td",{width:"125",valign:"bottom",align:"right",style:{background:"#d2d2d2",color:"#4c4c4c",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"11px",padding:"0px 0px 15px 0px"},children:t.jsx("img",{src:"/public/images/ms/ten-img/33547_FooterLogo125x27_2014-09.png",width:"125",height:"27",border:"0",align:"left",alt:"Microsoft"})}),t.jsx("td",{width:"30",style:{background:"#d2d2d2",lineHeight:"1px",padding:"0px 0px 15px 0px"},children:" "})]})})]})})})}function T1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Windows 10",url:"/Microsoft/Windows10"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/ten.svg",alt:"Microsoft Student"}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Windows 10 Preview Registration",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"The Windows 10 Preview Registration campaign was an effort to promote the launch of Microsoft's latest edition of its operating system Windows 10. The site offered users access to register for a preview release of the OS before the official release. This campaign was launched globally, localized into 32 languages, and saw nearly 10 million pre-registrations over the course of the enrollment period."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsxs(t.Fragment,{children:[t.jsx(z1,{}),t.jsx("br",{}),t.jsx(I1,{}),t.jsx("br",{}),t.jsx(H1,{})]})})]})]})}const F1=p.table`
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
`;function C1(){return t.jsx(F1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"576",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "}),t.jsx("td",{width:"94",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Microsoft",alias:"Header Image: Microsoft",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_MS_Logo_Header_2014-10.png",width:"94",height:"19",border:"0",alt:"Microsoft"})})}),t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"ExpertZone News",alias:"Header Image: ExpertZone News",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_EZNews_Logo_Header_2014-10.png",class:"bannerScale",width:"372",height:"56",border:"0",alt:"ExpertZone News"})})})]})})})]})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero Image: Tons of blockbuster games make this the best year ever for Xbox One.",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_hero.jpg",class:"hero",width:"700",height:"390",border:"0",alt:"Tons of blockbuster games make this the best year ever for Xbox One."})})})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#107c10",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI Light, Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"20px 0px 20px 0px"},class:"mobileAdjust",children:"Tons of blockbuster games make this the best year ever for Xbox One."}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"169",valign:"middle",align:"left",style:{color:"#505051",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",fontWeight:"bold",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA: Get your customers ready to play",style:{color:"#505050"},children:"Get your customers ready to play"})}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"6",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA Arrow: Get your customers ready to play",style:{color:"#107c10",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png",width:"6",height:"12",alt:"▶",border:"0"})})}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 Image: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_enter.jpg",class:"sectionImg",border:"0",alt:"Keep everybody entertained with Windows."})})}),t.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 20px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"340",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Keep everybody entertained with Windows."}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",fontWeight:"bold"},class:"mobileAdjust",children:"Help customers discover new games, apps, and music"})," ",t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA Arrow: Help customers discover the newest, coolest games, apps, and music",style:{color:"#107c10",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png",width:"6",height:"12",alt:"▶",border:"0"})})]}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e5e5e5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"320",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"The fun is just getting started with Windows 10."}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#107c10",fontWeight:"bold"},class:"mobileAdjust",children:"See how Cortana and Continuum are changing the future"})," ",t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA Arrow: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#107c10",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_drkgrnArrowCTA_2014-10.png",width:"6",height:"12",alt:"▶",border:"0"})})]}),t.jsx("td",{width:"50",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),t.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 Image: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{textDecoration:"none",color:"#107c10"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_winpc.jpg",class:"sectionImg",border:"0",alt:"The fun is just getting started with Windows 10."})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3a3a3a",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),t.jsx("td",{width:"110",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"30px 0px 30px 0px"},children:t.jsx("a",{href:"",title:"Using Windows 10? Share your thoughts using #EZWindowsInsider",alias:"Social Banner Image: Using Windows 10? Share your thoughts using #EZWindowsInsider",style:{textDecoration:"none",color:"#5dc21e"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_IntNL_BannerLogo_2015-02.png",width:"110",height:"110",border:"0",alt:"EZ"})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),t.jsx("td",{width:"500",valign:"middle",align:"left",style:{color:"#5dc21e",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"30px 0px 30px 0px"},children:t.jsx("span",{style:{color:"#ffffff",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Using Windows 10? Share your thoughts using #EZWindowsInsider"})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),t.jsxs("td",{width:"505",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:["Microsoft Corporation ",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052",t.jsx("br",{}),"USA"]}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),t.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Microsoft",alias:"Footer  Image: Microsoft",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33417_CloudOS_LogoMicrosoft.png",alt:"Microsoft",border:"0"})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}})]})})})]})})})})}const E1=p.table`
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
`;function D1(){return t.jsx(E1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",class:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"576",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "}),t.jsx("td",{width:"94",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Microsoft",alias:"Header Image: Microsoft",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_MS_Logo_Header_2014-10.png",width:"94",height:"19",border:"0",alt:"Microsoft"})})}),t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 10px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"0px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"ExpertZone News",alias:"Header Image: ExpertZone News",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_EZNews_Logo_Header_2014-10.png",class:"bannerScale",width:"372",height:"56",border:"0",alt:"ExpertZone News"})})})]})})})]})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero Image: Tons of blockbuster games make this the best year ever for Xbox One.",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_jhero.jpg",class:"hero",width:"700",height:"390",border:"0",alt:"Tons of blockbuster games make this the best year ever for Xbox One."})})})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI Light, Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"20px 0px 20px 0px"},class:"mobileAdjust",children:"新世代の Windows を発表いたしました。"}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"169",valign:"middle",align:"left",style:{color:"#505051",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",fontWeight:"bold",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA: Get your customers ready to play",style:{color:"#505050"},children:"詳しくはこちら"})}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"6",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Get your customers ready to play",alias:"Hero CTA Arrow: Get your customers ready to play",style:{color:"#68217a",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_purparrowcta_2014-11.png",width:"6",height:"12",alt:"▶",border:"0"})})}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 Image: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_jwinpc.jpg",class:"sectionImg",border:"0",alt:"Keep everybody entertained with Windows."})})}),t.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 20px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"340",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"引き続き Windows 8.1 をご案内下さい"}),t.jsx("br",{}),"Windows 10 について発表をいたしましたが、当面はこれまで通りの内容で Windows 8.1 搭載 PC をしっかりとご案内ください。 現段階で積極的に Windows 10 無償アップグレードのご案内をする必要はありません。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",fontWeight:"bold"},class:"mobileAdjust",children:"詳しくはこちら"})," ",t.jsx("a",{href:"",title:"Help customers discover the newest, coolest games, apps, and music",alias:"Story 1 CTA Arrow: Help customers discover the newest, coolest games, apps, and music",style:{color:"#68217a",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_purparrowcta_2014-11.png",width:"6",height:"12",alt:"▶",border:"0"})})]}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#e5e5e5",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"400",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"320",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#505050",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"Windows でエンターテイメント!"}),t.jsx("br",{}),"仕事にも趣味にも使える機能が備わっている Windows PC およびタブレットは、ゲームをしたり、音楽を聴いたり、写真でスライド ショーを作ったり、ビデオを見たり編集したりするのにもおすすめです。",t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#68217a",fontWeight:"bold"},class:"mobileAdjust",children:"詳しくはこちら"})," ",t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 CTA Arrow: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{color:"#68217a",textDecoration:"none !important"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_purparrowcta_2014-11.png",width:"6",height:"12",alt:"▶",border:"0"})})]}),t.jsx("td",{width:"50",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),t.jsx("td",{width:"300",valign:"top",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",lineHeight:"1px"},children:t.jsx("a",{href:"",title:"See how Cortana, Continuum, and Xbox on Windows are changing the future",alias:"Story 2 Image: See how Xbox on Windows, Cortana, and Continuum are changing the future",style:{textDecoration:"none",color:"#68217a"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_jentry.jpg",class:"sectionImg",border:"0",alt:"The fun is just getting started with Windows 10."})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#3a3a3a",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),t.jsx("td",{width:"110",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"36px",fontWeight:"100",lineHeight:"40px",padding:"30px 0px 30px 0px"},children:t.jsx("a",{href:"",title:"Using Windows 10? Share your thoughts using #EZWindowsInsider",alias:"Social Banner Image: Using Windows 10? Share your thoughts using #EZWindowsInsider",style:{textDecoration:"none",color:"#5dc21e"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33522_ez_pc_bannerlogo_2014-11.png",width:"110",height:"110",border:"0",alt:"EZ"})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "}),t.jsx("td",{width:"500",valign:"middle",align:"left",style:{color:"#5dc21e",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"30px 0px 30px 0px"},children:t.jsx("span",{style:{color:"#ffffff",fontSize:"36px",lineHeight:"40px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},class:"mobileAdjust",children:"新しい ExpertZone を ぜひご利用ください!"})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"30px 0px 30px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),t.jsxs("td",{width:"505",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:["Microsoft Corporation ",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052",t.jsx("br",{}),"USA"]}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}}),t.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Microsoft",alias:"Footer  Image: Microsoft",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/xpz-img/33417_CloudOS_LogoMicrosoft.png",alt:"Microsoft",border:"0"})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"10px 0px 10px 0px"}})]})})})]})})})})}function M1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Expert Zone",url:"/Microsoft/ExpertZone"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/xpz.svg",alt:"Expert Zone"}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Expert Zone Newsletter • United States & Japan",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"The Expert Zone Newsletter is a promotional publication that helps global retail professionals who sell Windows Phone, Windows, Xbox, Office and all other Microsoft products stay informed on the latest Microsoft products, features, events, and community activities."]}),t.jsx("br",{}),t.jsxs(ie,{viewSelected:"desktop",children:[t.jsx(C1,{}),t.jsx("br",{}),t.jsx(D1,{})]})]})]})}const U1=p.table`
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
`;function L1(){return t.jsx(U1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"700px !important",fontFamily:"Segoe UI, Arial, Helvetica, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"320",align:"right",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Power BI",alias:"Header Image: Power BI",style:{textDecoration:"none"},target:"_blank",children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_PBIheaderLogo2.png",width:"118",height:"33",border:"0",alt:"Power BI"})})}),t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 30px 0px"},children:" "}),t.jsx("td",{width:"670",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 30px 0px"},children:t.jsx("a",{href:"",title:"Power BI Newsletter",alias:"Header Image: Power BI Newsletter",style:{textDecoration:"none",color:"#fffffe"},target:"_blank",children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_NLHeaderA.png",className:"bannerScale",width:"560",height:"36",border:"0",alt:"Microsoft Power BI Newsletter"})})})]})})})]})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{width:"700",valign:"top",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},target:"_blank",children:t.jsx("a",{href:"",title:"Try the Preview Now!",alias:"Hero Image: Experience what’s coming next for Power BI",style:{textDecoration:"none",color:"#fffffe"},children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_HeroMain_01.png",className:"hero",width:"700",height:"292",border:"0",alt:"Experience what’s coming next for Power BI"})})})})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#333333",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"405",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"24px",lineHeight:"30px",padding:"20px 0px 20px 0px"},className:"mobileAdjust",children:"Experience what’s coming next for Power BI"}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"205",valign:"middle",align:"right",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#f2c811",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "}),t.jsx("td",{width:"185",valign:"middle",align:"center",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:t.jsx("a",{href:"",title:"Try the Preview Now!",alias:"Hero CTA: Try the Preview Now!",style:{color:"#000001"},children:"Try the Preview Now!"})}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})})}),t.jsx("td",{width:"30",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",valign:"middle",align:"center",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",padding:"20px 0px 20px 0px"},className:"block",children:t.jsx("a",{href:"",title:"Try Power BI with Google Analytics",alias:"Story 1 Image: Try Power BI with Google Analytics",style:{color:"#f2c811",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_Story1_01.png",className:"sectionImg",border:"0",alt:"Try Power BI with Google Analytics"})})}),t.jsx("td",{width:"350",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"310",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#333333",fontSize:"30px",lineHeight:"36px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"Visualize and Explore your Google Analytics data with Power BI"}),t.jsx("br",{}),t.jsx("br",{}),"Now you can connect to your Google Analytics data using"," ",t.jsx("a",{href:"",title:"Power BI",alias:"Story 1: Power BI",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI"})," ","and the"," ",t.jsx("a",{href:"",title:"Power BI Designer",alias:"Story 1: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"}),". Start unlocking your website’s insights today.",t.jsx("table",{width:"290",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{colSpan:"3",children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),t.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Try Power BI with Google Analytics",alias:"Story 1 CTA: Try Power BI with Google Analytics",style:{color:"#000001",textDecoration:"none"},children:"Try Power BI with Google Analytics"})}),t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]})]})})]}),t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"350",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"20px 0px 20px 0px"},className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "}),t.jsxs("td",{width:"310",valign:"middle",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:[t.jsx("span",{style:{color:"#333333",fontSize:"30px",lineHeight:"36px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"The Power BI Designer gets its biggest update yet"}),t.jsx("br",{}),t.jsx("br",{}),"Last week we announced the biggest"," ",t.jsx("a",{href:"",title:"Power BI Designer",alias:"Story 2: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"})," ","update since the"," ",t.jsx("a",{href:"",title:"preview launch on December 18, 2014",alias:"Story 2: preview launch on December 18, 2014",style:{color:"#E6BE1D",textDecoration:"none"},children:"preview launch on December 18, 2014"}),". This update includes the ability to create measures using DAX, as well as several other new Modeling & Query features.",t.jsx("table",{width:"290",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{colSpan:"3",children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),t.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"Learn more about the update",alias:"Story 2 CTA 1: Learn more about the update",style:{color:"#000001",textDecoration:"none"},children:"Learn more about the update"})}),t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]}),t.jsx("tr",{children:t.jsx("td",{colSpan:"3",children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "}),t.jsx("td",{width:"260",valign:"middle",align:"center",bgcolor:"#f2c811",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:t.jsx("a",{href:"",title:"The Power BI Designer Experience",alias:"Story 2 CTA 2: The Power BI Designer Experience",style:{color:"#000001",textDecoration:"none"},children:"The Power BI Designer Experience"})}),t.jsx("td",{width:"15",valign:"middle",align:"left",bgcolor:"#f2c811",style:{color:"#f2c811",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px",padding:"10px 0px 10px 0px"},children:" "})]})]})})]}),t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"14px",lineHeight:"17px"},children:" "})]})})})}),t.jsx("td",{width:"350",valign:"middle",align:"center",style:{color:"#444444",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",lineHeight:"1px",paddingBottom:"10px"},className:"block",children:t.jsx("a",{href:"",title:"Learn more about the update",alias:"Story 2 Image: Learn more about the update",style:{color:"#f2c811",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_Story2_01.png",className:"sectionImg",border:"0",alt:"Learn more about the update"})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#4C68B0",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),t.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["What Visualization should I use?",t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Use these tips to help you pick the right visualization for your data",alias:"Triple Banner CTA 1: Use these tips to help you pick the right visualization for your data",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Use these tips to help you pick the right visualization for your data"})]}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),t.jsx("td",{width:"11",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),t.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["Using SendGrid?",t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Get more out of your email analytics. Monitor and analyze your email deliverability statistics with Power BI",alias:"Triple Banner CTA 2: Get more out of your email analytics.",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Get more out of your email analytics. Monitor and analyze your email deliverability statistics with Power BI"})]}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),t.jsx("td",{width:"11",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"hide",children:" "}),t.jsxs("td",{width:"206",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px",msoLineHeightRule:"exactly"},className:"block",children:["Customer Support with Zendesk?",t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Get better insights into your Zendesk customer support with Power BI",alias:"Triple Banner CTA 3: Get better insights into your Zendesk customer support with Power BI",style:{color:"#fffffe",fontWeight:"bold",textDecoration:"none"},children:"Get better insights into your Zendesk customer support with Power BI"})]}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),t.jsx("td",{width:"10",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsxs("td",{width:"465",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px"},className:"block",children:[t.jsx("span",{style:{color:"#333333",fontSize:"24px",lineHeight:"30px",fontFamily:"Segoe UI Light,Segoe UI,Arial,sans-serif",fontWeight:"100"},className:"mobileAdjust",children:"More about Power BI"}),t.jsx("br",{}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"PowerBI.com",alias:"Extra Links 1: PowerBI.com",style:{color:"#E6BE1D",textDecoration:"none"},children:"PowerBI.com"})}),t.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Power BI Designer",alias:"Extra Links 4: Power BI Designer",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Designer"})})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Blog",alias:"Extra Links 2: Blog",style:{color:"#E6BE1D",textDecoration:"none"},children:"Blog"})}),t.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Power BI Mobile",alias:"Extra Links 5: Power BI Mobile",style:{color:"#E6BE1D",textDecoration:"none"},children:"Power BI Mobile"})})]}),t.jsxs("tr",{children:[t.jsx("td",{width:"205",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Support",alias:"Extra Links 3: Support",style:{color:"#E6BE1D",textDecoration:"none"},children:"Support"})}),t.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"270",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Analysis Services Connector",alias:"Extra Links 6: Analysis Services Connector",style:{color:"#E6BE1D",textDecoration:"none"},children:"Analysis Services Connector"})})]})]})})]}),t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},className:"block",children:" "}),t.jsx("td",{width:"175",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"20px 0px 20px 0px"},className:"block",children:t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",children:t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"YouTube",alias:"YouTube",children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_Twitter_Tile2015.png",height:"31",width:"31",border:"0",alt:"YouTube"})})}),t.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Facebook",alias:"Facebook",children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_Youtube_Tile2015.png",height:"31",width:"31",border:"0",alt:"Facebook"})})}),t.jsx("td",{width:"10",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "}),t.jsx("td",{width:"31",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:t.jsx("a",{href:"",title:"Twitter",alias:"Twitter",children:t.jsx("img",{src:"/public/images/ms/pbi-img/33531_FB_Tile2015.png",height:"31",width:"31",border:"0",alt:"Twitter"})})}),t.jsx("td",{width:"62",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]}),t.jsx("tr",{children:t.jsx("td",{width:"175",colSpan:"6",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px",padding:"5px 0px"},children:"Follow us to stay up to date with the latest news about Power BI"})})]})})}),t.jsx("td",{width:"20",valign:"middle",align:"left",style:{color:"#333333",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"16px",lineHeight:"20px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},children:" "}),t.jsxs("td",{width:"525",valign:"top",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:["Microsoft Corporation ",t.jsx("br",{}),"One Microsoft Way",t.jsx("br",{}),"Redmond, WA 98052",t.jsx("br",{}),"USA"]}),t.jsx("td",{width:"30",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:" "}),t.jsx("td",{width:"105",valign:"bottom",align:"left",style:{color:"#505050",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},className:"block",children:t.jsx("a",{href:"",title:"Microsoft",alias:"Footer Image: Microsoft",style:{textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/pbi-img/33417_CloudOS_LogoMicrosoft.png",alt:"Microsoft",border:"0"})})}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{color:"#ffffff",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"10px",lineHeight:"12px",padding:"0px 0px 10px 0px"},children:" "})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsx("td",{align:"left",style:{color:"#ffffff",fontFamily:"Seoge UI,Arial,sans-serif",fontSize:"11px"},children:" "})})})})]})})})})}function _1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Power BI",url:"/Microsoft/PowerBI"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/pbi.svg",alt:"Power BI"}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Power BI Newsletter",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"Power BI is a cloud-based business analytics service that enables anyone to visualize and analyze data with greater speed, efficiency, and understanding. It connects users to a broad range of data through easy-to-use dashboards, interactive reports, and compelling visualizations that bring data to life. The Power BI Newsletter is a monthly digital publication that helps subscribers stay informed on the latest Power BI features, events, and community activities."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(L1,{})})]})]})}const N1=p.table`
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
`;function B1(){return t.jsx(N1,{cellPadding:"0",cellSpacing:"0",border:"0",align:"center",children:t.jsx("tbody",{children:t.jsx("tr",{children:t.jsxs("td",{align:"center",valign:"top",bgcolor:"#ffffff",className:"bodywrap",style:{width:"600px",fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"25",valign:"top",align:"left",style:{padding:"2px 0"},children:" "}),t.jsx("td",{width:"575",height:"25",align:"left",valign:"middle",style:{padding:"10px 0"},children:t.jsx("a",{href:"",style:{textDecoration:"none"},alias:"Banner: Visual Studio Online",title:"Visual Studio Online",children:t.jsx("img",{src:"/public/images/ms/vst-img/VSO_HeaderLogo2_2015-02.png",alt:"Visual Studio Online",style:{display:"block"},border:"0"})})})]})})}),t.jsx("table",{width:"100%",cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#ffffff",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"15",valign:"top",align:"left",style:{paddingTop:"0"},children:" "}),t.jsxs("td",{width:"565",valign:"top",align:"left",className:"scaling",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",lineHeight:"25px"},children:"Here’s how easy it is to start your backlog:"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Start Your Backlog",alias:"Body Image: Start Your Backlog",style:{color:"#0044cc",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/vst-img/33542_VSO_Agile_Kanban.gif",width:"565",height:"342",border:"0",alt:"start your backlog",className:"gif"})}),t.jsx("br",{}),t.jsx("br",{}),"That’s it! Now you’re ready to check in code, invite more team members, or add more backlog items to get your project started. For a full walk-through on backlogs and other Visual Studio Online features, check out our"," ",t.jsx("a",{href:"",title:"Getting Started Guide",alias:"Body: Getting Started Guide",style:{color:"#0060a6",textDecoration:"none"},children:"Getting Started Guide"}),".",t.jsx("br",{}),t.jsx("br",{}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",bgcolor:"#68217a",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"15",children:" "}),t.jsx("td",{align:"left",valign:"middle",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"15px",padding:"7px 0"},children:t.jsx("a",{href:"",title:"Getting Started Guide",alias:"CTA: Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:"Getting Started Guide"})}),t.jsx("td",{width:"15",children:" "}),t.jsx("td",{align:"right",valign:"middle",width:"28",style:{color:"#f0f0f0",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"18px",padding:"7px 0"},children:t.jsx("a",{href:"",title:"Getting Started Guide",alias:"CTA: Getting Started Guide",style:{color:"#ffffff",textDecoration:"none"},children:t.jsx("img",{src:"/public/images/ms/vst-img/33333_Azure_ArrowCTA.png",width:"20",height:"20",border:"0"})})}),t.jsx("td",{width:"10",children:" "})]})})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"100",lineHeight:"30px"},children:"Answers. Insights. Expertise."}),t.jsx("br",{}),"Need an answer? Have an answer? We deploy new bits to Visual Studio Online every 3 weeks, so you can shape the service with your feedback via:"," ",t.jsx("a",{href:"",title:"UserVoice portal",alias:"Body: UserVoice Portal",style:{color:"#0060a6",textDecoration:"none"},children:"UserVoice portal"}),","," ",t.jsx("a",{href:"",title:"MSDN Forums",alias:"Body: MSDN forums",style:{color:"#0060a6",textDecoration:"none"},children:"MSDN forums"})," ","or mention #VSOnline on Twitter. And make sure to check out"," ",t.jsx("a",{href:"",title:"Brian Harry’s blog",alias:"Body: Brian Harry’s Blog",style:{color:"#0060a6",textDecoration:"none"},children:"Brian Harry’s blog"})," ","as he goes into the details about how new Visual Studio Online features will help your team!",t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),"Cheers,",t.jsx("br",{}),"The Visual Studio Online team",t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("td",{width:"20",valign:"top",align:"left",style:{paddingTop:"0"},children:" "})]})})}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",bgcolor:"#ffffff",children:t.jsxs("tbody",{children:[t.jsx("tr",{children:t.jsx("td",{colSpan:"3",width:"600",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"12px",lineHeight:"20px",borderTop:"1px solid #d2d2d2"},children:" "})}),t.jsxs("tr",{children:[t.jsx("td",{width:"15",bgcolor:"#ffffff",style:{lineHeight:"1px"},children:" "}),t.jsxs("td",{width:"565",valign:"top",align:"left",bgcolor:"#ffffff",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",lineHeight:"18px",color:"#292929"},children:[t.jsx("span",{style:{color:"#68217a",fontFamily:"Segoe UI,Helvetica,Arial,sans-serif",fontSize:"20px",fontWeight:"100",lineHeight:"30px"},children:"Useful Links"}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Visual Studio News",alias:"Body: Visual Studio News",style:{color:"#0060a6",textDecoration:"none"},children:"Visual Studio News"}),t.jsx("br",{}),t.jsx("a",{href:"",title:"Visual Studio Online Support",alias:"Body: Visual Studio Online Support",style:{color:"#0060a6",textDecoration:"none"},children:"Visual Studio Online Support"})]}),t.jsx("td",{width:"20",bgcolor:"#ffffff",style:{lineHeight:"1px"},children:" "})]}),t.jsx("tr",{children:t.jsx("td",{colSpan:"3",width:"600",style:{color:"#000000",fontFamily:"Segoe UI,Arial,sans-serif",fontSize:"13px",lineHeight:"20px"},children:" "})})]})}),t.jsx("table",{cellPadding:"0",cellSpacing:"0",border:"0",width:"100%",bgcolor:"#eeeeee",children:t.jsx("tbody",{children:t.jsxs("tr",{children:[t.jsx("td",{width:"45",valign:"top",align:"left",style:{paddingBottom:"13px"},children:" "}),t.jsx("td",{width:"445",style:{fontFamily:"Segoe UI, Helvetica, Arial, sans-serif",fontSize:"10px",color:"#505050"},children:"Microsoft Corporation | One Microsoft Way | Redmond, WA 98052 USA"}),t.jsx("td",{width:"60",align:"right",children:t.jsx("a",{href:"http://www.microsoft.com/",target:"_blank",children:t.jsx("img",{src:"/public/images/ms/vst-img/ms-logo-metro-generic-bk.gif",wdith:"60",height:"11",alt:"Microsoft",border:"0",style:{display:"block"}})})}),t.jsx("td",{width:"45",valign:"top",align:"left",style:{paddingBottom:"13px"},children:" "})]})})})]})})})})}function W1(){const e=[{text:"Microsoft",url:"/Microsoft"},{text:"Visual Studio",url:"/Microsoft/VisualStudio"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ms/vst.svg",alt:"Visual Studio"}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Visual Studio Promotions",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"Microsoft Visual Studio is an integrated development environment (IDE) from Microsoft. It is used to develop computer programs for Microsoft Windows, as well as web sites, web applications and web services. The Visual Studio promotional email campaigns are digital publications that help subscribers stay informed on the latest Visual Studio products, features, events, and community activities."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(B1,{})})]})]})}function Ga({fixedLogo:e}){return t.jsx(Te,{logo:"/public/images/gt/gts.svg",alt:"Gates Foundtaion",fixedLogo:e})}function O1(){const e=[{text:"The Gates Foundation",url:"/Gates"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Ga,{}),t.jsxs(R,{children:[t.jsx(G,{title:"The Gates Foundation",children:"The Bill & Melinda Gates Foundation is a private foundation founded by Bill and Melinda Gates. It was launched in 2000 and is said to be the largest private foundation in the US. The primary aims of the foundation are to enhance healthcare and reduce extreme poverty globally and in America, to expand educational opportunities and access to information technology. The foundation, based in Seattle, Washington, is controlled by its three trustees: Bill and Melinda Gates, and Warren Buffett."}),t.jsx("br",{}),t.jsx(rn,{className:"_three",children:Nm.map(i=>t.jsx(Jl,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}function R1(){const e=[{text:"Gates",url:"/Gates"},{text:"The Giving Pledge",url:"/Gates/GivingPledge"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Ga,{fixedLogo:!0}),t.jsxs(R,{children:[t.jsxs(G,{title:"The Giving Pledge",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),t.jsx("a",{href:"https://givingpledge.org/",title:"The Giving Pledge","aria-label":"Link: The Giving Pledge",children:"The Giving Pledge"})," ","site wide redesign and rebuild was part of a campaign to encourage wealthy people to contribute a majority of their wealth to philanthropic causes. As of 2018, the pledge has 173 signers, either individuals or couples. Most of the signers of the pledge are billionaires, and their pledges total over $365 billion. On The Giving Pledge's website, each individual or couple writes a letter explaining why they chose to give."]}),t.jsx("br",{}),t.jsxs(ie,{viewSelected:"desktop",children:[t.jsx("div",{children:t.jsx("img",{src:"/public/images/gt/gates_landing.jpg",width:"100%",height:"auto"})}),t.jsx("div",{children:t.jsx("img",{src:"/public/images/gt/gates_letter.jpg",width:"100%",height:"auto"})}),t.jsx("div",{children:t.jsx("img",{src:"/public/images/gt/gates_learning.jpg",width:"100%",height:"auto"})}),t.jsx("div",{children:t.jsx("img",{src:"/public/images/gt/gates_history.jpg",width:"100%",height:"auto"})})]})]})]})}const $1=p.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: lightgrey;
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`,G1=p.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  background: lightgrey;
  object {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;function V1(){const e=[{text:"Gates",url:"/Gates"},{text:"Annual Letter",url:"/Gates/AnnualLetter"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Ga,{fixedLogo:!0}),t.jsxs(R,{children:[t.jsxs(G,{title:"Gates Foundation Annual Letter 2013",children:[t.jsx("b",{children:"Front End Developer • Email Developer • Graphic Designer"}),t.jsx("br",{}),"The Gates Foundation Annual Letter is a yearly publication to higlight the foundations current philanthropic endeavors and discuss the specific focus for year ahead."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsxs(t.Fragment,{children:[t.jsx($1,{children:t.jsx("iframe",{src:"https://www.youtube.com/embed/380sy5_ZQzo?rel=0",frameBorder:"0",gesture:"media",allow:"encrypted-media",allowFullScreen:!0,className:"letter-vid"})}),t.jsx("br",{}),t.jsx(G1,{children:t.jsx("object",{data:"/public/files/AL2013_English.pdf",type:"application/pdf",width:"100%",height:"100%",children:t.jsx("p",{children:"The Gates Foundation Annual Letter 2013"})})})]})})]})]})}function gi({fixedLogo:e}){return t.jsx(Te,{logo:"/public/images/tm/tmo.svg",alt:"T-Mobile",fixedLogo:e})}function Z1(){const e=[{text:"T-Mobile",url:"/T-Mobile"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{}),t.jsxs(R,{children:[t.jsxs(G,{title:"T-Mobile",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"T-Mobile US provides wireless voice, messaging, and data services in the United States, Puerto Rico and the U.S. Virgin Islands. The company operates the third largest wireless network in the U.S. market with over 65.5 million customers. Its nationwide network reaches 98 percent of Americans. As of 2011, J. D. Power and Associates, a global marketing-information-services firm, ranked the company highest among major wireless carriers for retail-store satisfaction four years consecutively and highest for wireless customer care two years consecutively."]}),t.jsx("br",{}),t.jsx(rn,{className:"_three",children:Bm.map(i=>t.jsx(Jl,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const Q1="/assets/tmo-logo-f9ed0424.svg",Y1=p.div`
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
`,K1=p.div`
  width: 225px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${Q1}) no-repeat center;
`,X1=p.div`
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
`;function ln(){return t.jsxs(Y1,{children:[t.jsx(K1,{}),t.jsx(X1,{children:t.jsx("h5",{children:"Order now! (800)-555-1234"})})]})}const J1="/assets/Swiss721BT-Heavy-webfont-b28238c4.ttf",q1="/assets/Swiss721BT-Bold-webfont-ebc6b4ac.ttf",ey="/assets/Swiss721BT-Roman-webfont-7a699b33.ttf",ty=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;

  @font-face {
    font-family: swis721 heavy;
    src: url(${J1});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 bold;
    src: url(${q1});
    font-weight: bold;
  }
  @font-face {
    font-family: swis721 roman;
    src: url(${ey});
    font-weight: normal;
  }
`;function on({children:e}){return t.jsx(ty,{children:e})}const iy=p.div`
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
`,ny=p.div`
  width: 180px;
  height: 164px;
  background: url("/public/images/tm/tue-img/hero.png") no-repeat top center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 1;
    width: 100%;
    height: auto;
  }
`,ry=p.div`
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
`,ly=p.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: stretch;
  margin: 0px auto;
  padding: 2%;
  background: rgb(242, 242, 242);
`,oy=p.div`
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
`,sy=p.div`
  padding: 16px;
  text-align: center;
  font-size: 1em;
  font-family: "swis721 roman", helvetica, arial, sans-serif;
  color: #575757;
  @media (min-width: 768px) {
    font-size: 1.5em;
  }
`,ay=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Do=p.div`
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
`,dy=p.div`
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
`,cy=p.div`
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
`,Cr=p.div`
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
`,fy=p.div`
  flex: 1;
  background: url("/public/images/tm/tue-img/tmo-graph.svg") no-repeat center
    bottom;
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
`,hy=p.div`
  display: flex;
  flex-direction: column-reverse;
  padding: 0 4% 4% 4%;
  background: #e20074;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,py=p.div`
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
`,uy=p.div`
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
`;function gy(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(iy,{children:[t.jsx(ny,{}),t.jsxs(ry,{children:[t.jsx("h2",{children:"SIGN UP FOR A T-MOBILE PLAN AND GET FREE STUFF. EVERY WEEK."}),t.jsx("img",{src:"/public/images/tm/tue-img/tmo-freetuesdays.svg",alt:"Introducing T-Mobile Tuesdays. Free Stuff. Every Week."}),t.jsxs("h3",{children:["Plus, Get Thanked with a share of Un-carrier stock.",t.jsx("br",{}),"Just for being a customer."]}),t.jsx("br",{}),t.jsxs("h4",{children:[t.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),t.jsx("br",{}),t.jsxs("p",{children:["Qualifying plan req'd. For best experience use App. Obtain prospectus by calling toll free 1-855-256-9253 or visiting",t.jsx("u",{children:"http://www.t-mobile.com/prospectus"}),"."]})]})]}),t.jsxs(ly,{children:[t.jsx(oy,{children:"Get Free Stuff Every Tuesday"}),t.jsx(sy,{children:"Just for being a customer. No hoops. No strings."}),t.jsxs(ay,{children:[t.jsxs(Do,{children:[t.jsx("h3",{children:"Free"}),t.jsx("h4",{children:"Pizza"}),t.jsx("img",{src:"/public/images/tm/tue-img/tmo-dominos.svg",border:"0",alt:"Domino's Pizza"}),t.jsx("h5",{children:"A Medium 2 Topping Pizza"})]}),t.jsxs(Do,{children:[t.jsx("h3",{children:"Free"}),t.jsx("h4",{children:"Movies"}),t.jsx("img",{src:"/public/images/tm/tue-img/tmo-vudu.svg",border:"0",alt:"Vudu"}),t.jsx("h5",{children:"A Movie with Vudu"})]}),t.jsxs(Do,{children:[t.jsx("h3",{children:"Free"}),t.jsx("h4",{children:"Treats"}),t.jsx("img",{src:"/public/images/tm/tue-img/tmo-wendys.svg",border:"0",alt:"Wendy's"}),t.jsx("h5",{children:"A Wendy's Frosty"})]})]}),t.jsx(dy,{children:t.jsxs("h4",{children:[t.jsx("span",{children:"Call now! "}),"(800)-555-1234"]})})]}),t.jsx(cy,{children:t.jsxs(fy,{children:[t.jsx(Cr,{children:"We're also making you"}),t.jsx(Cr,{children:"an owner of the compnay"}),t.jsx(Cr,{children:"Get your share of"}),t.jsx(Cr,{children:"Un-Carrier Stock"})]})}),t.jsxs(hy,{children:[t.jsxs(py,{children:[t.jsxs("p",{children:["You’re more than just a customer to us. So we’re giving you the biggest thanking of all by making you an owner in the Un-carrier with a share of the company.",t.jsx("br",{}),t.jsx("br",{}),"Sign up with T-Mobile today and claim your free share of stock. Shares will be available in the app within 3 weeks of joining T‑Mobile."]}),t.jsxs("h4",{children:[t.jsx("span",{children:"Call now! "}),"(800)-555-1234"]})]}),t.jsxs(uy,{children:[t.jsx("img",{src:"/public/images/tm/tue-img/tmo-stockup.svg"}),t.jsx("h5",{children:"REFER A FRIEND FOR EVEN MORE SHARES"}),t.jsx("p",{children:"Increase your ownership stake with a share of stock for every friend or family member you bring to T‑Mobile."})]})]})]})}function xy(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Tuesdays",url:"/T-Mobile/Tuesdays"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"T-Mobile Tuesdays",children:[t.jsx("b",{children:"Front End Developer"}),t.jsx("br",{}),"The T-Mobile Tuesdays click to call landing page campaign was part of T-Mobile's 11th Un-Carrier initiative ",t.jsx("b",{children:"#GetThanked"}),` in which they announced the T-Mobile Tuesdays app. The app "thanked" T-Mobile customers with free stuff and prizes from Gilt, Domino's, StubHub, Wendy's, VUDU, Fandango, Legendary Pictures and Universal Pictures, Lyft and more. In addition, the campaign introduced Stock Up, a program that offered a full share of T-Mobile US (TMUS) common stock to existing and new customers. Customers could also grow their ownership up to 100 shares a year by referring new customers to T-Mobile.`]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(gy,{})})]})]})}const my=p.div`
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
`,yy=p.div`
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
`,jy=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url("/public/images/tm/tfo-img/hero.jpg") no-repeat center center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-size: contain;
  }
`,Ic=p.div`
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
`,wy=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #e20074;
  background: url("/public/images/tm/tfo-img/tile.png");
  border-left: 8px solid #e20074;
  border-right: 8px solid #e20074;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Mo=p.div`
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
`;function by(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(my,{children:[t.jsxs(yy,{children:[t.jsx("h2",{children:"NOW CALL AND TEXT IN"}),t.jsx("h2",{children:"MEXICO & CANADA"}),t.jsx("h2",{children:"JUST LIKE YOU DO IN THE U.S."}),t.jsx("h3",{children:"Unlimited calling to Mexico and Canada from the U.S. Plus, get 4G LTE data and unlimited calling and texting when you’re in Mexico and Canada, just like in the U.S."}),t.jsxs("h4",{children:[t.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),t.jsx("h6",{children:"Device, network & coverage impact experience and speeds, which vary. Image does not depict coverage."})]}),t.jsx(jy,{})]}),t.jsxs(Ic,{children:[t.jsx("h3",{children:"Our new simple choice plans include coverage in 3 countries for the price of 1"}),t.jsx("h2",{children:"U.S., Mexico, and Canada"})]}),t.jsxs(wy,{children:[t.jsxs(Mo,{children:[t.jsx("img",{src:"/public/images/tm/tfo-img/mobile.svg",border:"0"}),t.jsx("h5",{children:"Unlimited calling to and from the U.S. to any number, including mobile phones, in Mexico and Canada."})]}),t.jsxs(Mo,{children:[t.jsx("img",{src:"/public/images/tm/tfo-img/travel.svg",border:"0"}),t.jsx("h5",{children:"Now when you travel throughout the U.S., Mexico, & Canada your phone works the same with 4G LTE data and unlimited calling and texting."})]}),t.jsxs(Mo,{children:[t.jsx("img",{src:"/public/images/tm/tfo-img/nodolla.svg",border:"0"}),t.jsx("h5",{children:"No other plan includes this much freedom and flexibility at no extra charge."})]})]}),t.jsxs(Ic,{children:[t.jsx("h2",{children:"Call now! (800)-555-1234"}),t.jsx("h6",{children:"Coverage not available in some areas"})]})]})}function vy(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"3 for 1",url:"/T-Mobile/3for1"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"3 Countries for the Price of 1",children:[t.jsx("b",{children:"Front End Developer"}),t.jsx("br",{}),"The 3 Countries for the Price of 1 click to call landing page campaign was part of T-Mobile's Simple Choice announcement. T-Mobile had expanded its coverage. Unlimited calling in the U.S., Mexico, and Canada was now is automatically included with our new Simple Choice plans. This also included 4G LTE data and unlimited talk and text in either country at no extra charge."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(by,{})})]})]})}const Sy=p.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  background-image: url("/public/images/tm/jmp-img/jump-tile.png");

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,ky=p.div`
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
`,zy=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url("/public/images/tm/jmp-img/jodgirl.png") no-repeat center
    center;
  background-size: cover;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom right;
    background-size: contain;
  }
`,Fp=p.div`
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
`,Ay=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,Uo=p.div`
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
`,Iy=p(Fp)`
  padding: 24px;
  background-image: url("/public/images/tm/jmp-img/jump-tile.png");
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function Py(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(Sy,{children:[t.jsxs(ky,{children:[t.jsx("img",{src:"/public/images/tm/jmp-img/jodlogo.svg",border:"0"}),t.jsx("h3",{children:"Get the phone you want when you want up to 3X a year."}),t.jsxs("h4",{children:[t.jsx("span",{children:"Call now! "}),"(800)-555-1234"]}),t.jsx("h6",{children:"For eligible devices. At participating stores."})]}),t.jsx(zy,{})]}),t.jsxs(Fp,{children:[t.jsx("h2",{children:"Don’t get stuck with a phone you don’t want!"}),t.jsx("h3",{children:"Don’t get stuck with a phone you don’t want! With JUMP! On Demand, a new upgrade program only from T-Mobile, you can switch to the latest phones with no waiting period or upgrade fees. Simply trade in your phone for a new one whenever you want up to three times a year. Available on select smartphones."})]}),t.jsxs(Ay,{children:[t.jsxs(Uo,{children:[t.jsx("img",{src:"/public/images/tm/jmp-img/newphone.svg",border:"0"}),t.jsxs("h5",{children:[t.jsx("strong",{children:"Zero Upfront"}),t.jsx("br",{}),"Switch to a new phone whenever you want and pay nothing upfront."]})]}),t.jsxs(Uo,{children:[t.jsx("img",{src:"/public/images/tm/jmp-img/nodolla.svg",border:"0"}),t.jsxs("h5",{children:[t.jsx("strong",{children:"Zero at Upgrade"}),t.jsx("br",{}),"Never pay to upgrade—just trade in your unwanted device."]})]}),t.jsxs(Uo,{children:[t.jsx("img",{src:"/public/images/tm/jmp-img/calendar.svg",border:"0"}),t.jsxs("h5",{children:[t.jsx("strong",{children:"Zero Waiting"}),t.jsx("br",{}),"Why wait 2 years to upgrade when you don’t have to?"]})]})]}),t.jsxs(Iy,{children:[t.jsx("h2",{children:"Call now! (800)-555-1234"}),t.jsx("h6",{children:"Offer not available in some areas"})]})]})}function Hy(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Jump",url:"/T-Mobile/Jump"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"JUMP! On Demand",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The JUMP! On Demand click to call landing page campaign was part of T-Mobile's introduction of JUMP!, an on-demand service for customers to swap old smartphones for a new smartphone up to 3x per year with zero upfront costs and zero upgrade charges."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(Py,{})})]})]})}const Ty=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1px;
  background: #efefef;
  background-image: url("/public/images/tm/pyg-img/tile.png");

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;
  }
`,Fy=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url("/public/images/tm/pyg-img/grocerycart.png") no-repeat center
    center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
  }
`,Cy=p.div`
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
`,qr=p.div`
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
`,Ey=p.ul`
  padding: 0 2% 0 12%;
  list-style-image: url("/public/images/tm/pyg-img/check.png");

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
`,Dy=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 0 4% 2% 4%;
  background-color: #ffffff;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Pc=p.div`
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
`,My=p(qr)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function Uy(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(Ty,{children:[t.jsx(Fy,{}),t.jsxs(Cy,{children:[t.jsx("h2",{children:"We’ve changed the game for"}),t.jsx("h2",{children:"Pay as You GO!"}),t.jsx("h5",{children:"Get the talk and text you need, right when you need it. Add data as you go. All with no credit check and no annual contract."}),t.jsx("h3",{children:"Prepaid Pay As You Go Plans"}),t.jsx("h3",{children:"$3/mo"}),t.jsx("h5",{children:"Get any combination of 30 minutes of talk or 30 texts."}),t.jsxs("h4",{children:[t.jsx("span",{children:"ORDER NOW! CALL "}),"(800)-555-1234"]}),t.jsx("h6",{children:"Capable device required for 4G LTE speeds. Coverage not available in some areas."})]})]}),t.jsxs(qr,{children:[t.jsx("h2",{children:"Prepaid Pay As You Go Plans"}),t.jsxs(Ey,{children:[t.jsx("li",{children:"No annual service contract"}),t.jsx("li",{children:"No credit check"}),t.jsx("li",{children:"No deposit"}),t.jsx("li",{children:"Keep your phone number from month to month"}),t.jsx("li",{children:"All on T-Mobile’s nationwide network"})]})]}),t.jsxs(qr,{children:[t.jsx("h2",{children:"Want more? No problem."}),t.jsx("h3",{children:"Add additional talk and text at a low flat rate of 10 cents per minute/message (sending and receiving)."})]}),t.jsxs(qr,{children:[t.jsx("h2",{children:"Add a high-speed data pass."}),t.jsx("h3",{children:"Need high-speed data? Our flexible passes will keep you streaming and downloading at 4G LTE speeds, plus each pass includes Smartphone Mobile HotSpot."})]}),t.jsxs(Dy,{children:[t.jsx(Pc,{children:t.jsxs("h5",{children:[t.jsxs("strong",{children:["$5",t.jsx("span",{children:"/DAY"})]}),t.jsx("br",{}),"Daily pass—up to 500MB 4G LTE data"]})}),t.jsx(Pc,{children:t.jsxs("h5",{children:[t.jsxs("strong",{children:["$10",t.jsx("span",{children:"/week"})]}),t.jsx("br",{}),"Weekly pass—up to 1GB of 4G LTE data"]})})]}),t.jsxs(My,{children:[t.jsx("h2",{children:"Call now! (800)-555-1234"}),t.jsx("h6",{children:"Offer not available in some areas"})]})]})}function Ly(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Pay As You Go",url:"/T-Mobile/Pay"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Pay As You Go",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The Pay As You Go click to call landing page campaign was part of T-Mobile's prepaid pay as you go plans which offered no annual contract, no credit check, no deposit, and nationwide coverage. The campaign also offered high-speed data passes with daily and weekly rates for streaming and downloading at 4G LTE. Passes also included Smartphone Mobile HotSpot."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(Uy,{})})]})]})}const _y=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/public/images/tm/pre-img/prehero.png") no-repeat top center;
  background-size: cover;
`,Ny=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,By=p.div`
  flex: 2;
`,Wy=p.div`
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
`,Oy=p.div`
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
`,Ry=p.div`
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
`,$y=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Gy=p.div`
  flex: 1;
  min-height: 200px;
  background: url("/public/images/tm/pre-img/byod.png") no-repeat center center;
  background-size: contain;
  @media (min-width: 768px) {
    flex: 2;
  }
`,Vy=p.div`
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
`,Zy=p(Ry)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function Qy(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(_y,{children:[t.jsxs(Ny,{children:[t.jsx(By,{}),t.jsxs(Wy,{children:[t.jsx("h2",{children:"We’re breaking the rules of prepaid."}),t.jsx("h3",{children:"Don’t settle for second-rate prepaid wireless."}),t.jsx("h5",{children:"Get 4G LTE data and unlimited talk and text with no data overages, no credit check, and no annual contract. All on T-Mobile's Nationwide 4G LTE Network."}),t.jsx("br",{}),t.jsx("h3",{children:"Choose from three Simply Prepaid plans:"})]})]}),t.jsxs(Oy,{children:[t.jsxs(Lo,{children:[t.jsx("h2",{children:t.jsxs("strong",{children:[t.jsx("sup",{children:"$"}),"40",t.jsx("span",{children:"/ month"})]})}),t.jsx("h3",{children:"4G LTE DATA"}),t.jsxs("h4",{children:["UNLIMITED TALK & TEXT",t.jsx("sup",{children:"*"})]}),t.jsx("h5",{children:"on our network + up to 1GB of 4G LTE"})]}),t.jsxs(Lo,{children:[t.jsx("h2",{children:t.jsxs("strong",{children:[t.jsx("sup",{children:"$"}),"50",t.jsx("span",{children:"/ month"})]})}),t.jsx("h3",{children:"4G LTE DATA"}),t.jsxs("h4",{children:["UNLIMITED TALK & TEXT",t.jsx("sup",{children:"*"})]}),t.jsx("h5",{children:"on our network + up to 3GB of 4G LTE"})]}),t.jsxs(Lo,{children:[t.jsx("h2",{children:t.jsxs("strong",{children:[t.jsx("sup",{children:"$"}),"60",t.jsx("span",{children:"/ month"})]})}),t.jsx("h3",{children:"4G LTE DATA"}),t.jsxs("h4",{children:["UNLIMITED TALK & TEXT",t.jsx("sup",{children:"*"})]}),t.jsx("h5",{children:"on our network + up to 5GB of 4G LTE"})]})]})]}),t.jsxs($y,{children:[t.jsx(Gy,{}),t.jsxs(Vy,{children:[t.jsxs("h3",{children:["Got your own device?",t.jsx("br",{}),"Bring it."]}),t.jsxs("h5",{children:["Bring your device over to T-Mobile and sign up for new prepaid services without an annual service contract or credit check. A simple switch of your sim card could get you unlimited talk, text and data on our nationwide 4G LTE network.",t.jsx("br",{}),t.jsx("br",{}),"Call now to sign up for new services, or to add a new line to your existing account."]}),t.jsx("h6",{children:"Your device must be compatible with our network and capable of using a T-Mobile SIM card."})]})]}),t.jsxs(Zy,{children:[t.jsx("h2",{children:"Call now! (800)-555-1234"}),t.jsx("h6",{children:"Offer not available in some areas"})]})]})}function Yy(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Simply Prepaid",url:"/T-Mobile/Prepaid"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Simply Prepaid",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The Simply Prepaid click to call landing page campaign was part of T-Mobile's Simply Prepaid announcement offering 3 monthly prepaid options for umlimited talk, text, and data packages. The offer also included the option to bring your own device without an annual service contract or credit check."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(Qy,{})})]})]})}const Ky=p.div`
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
`,Xy=p.div`
  flex: 2;
  width: 100%;
  min-height: 240px;
  background: url("/public/images/tm/pre-img/datahero.jpg") no-repeat bottom
    center;
  background-size: contain;

  @media (min-width: 768px) {
    height: initial;
    background-position: bottom left;
  }
`,Jy=p.div`
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
`,Os=p.div`
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
`,qy=p.ul`
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
`,e2=p(Os)`
  padding: 24px;
  background: #e20074;
  h2 {
    color: #ffffff;
  }
  h6 {
    margin: 12px auto 0;
    color: #ffffff;
  }
`;function t2(){return t.jsxs(on,{children:[t.jsx(ln,{}),t.jsxs(Ky,{children:[t.jsx(Xy,{}),t.jsxs(Jy,{children:[t.jsx("h2",{children:"Introducing Data Stash"}),t.jsx("h3",{children:"Don't lose what you don't use."}),t.jsx("h5",{children:"Now when you buy extra 4G LTE data, your unused data rolls to the next month. First, we'll start you with 10GB of Free 4G LTE data."}),t.jsxs("h4",{children:[t.jsx("span",{children:"SWITCH NOW! CALL "}),"(800)-555-1234"]}),t.jsx("h6",{children:"Qualifying service req'd. Free 10GB avail. until 12/31/15. Use free 10GB before data begins rolling, rolled data good for 12 mos."})]})]}),t.jsxs(Os,{children:[t.jsx("h2",{children:"Go ahead - Keep the data that's yours."}),t.jsx("h3",{children:"Data Stash™ lets you roll the extra unused 4G LTE data you paid for into the next month. It’s automatically included with your qualifying postpaid or prepaid Simple Choice plan, with no fees and no overage data charges, ever."})]}),t.jsxs(Os,{children:[t.jsx("h2",{children:"Here’s how it works:"}),t.jsxs(qy,{children:[t.jsx("li",{children:"Available to all T-Mobile customers on a postpaid or prepaid Simple Choice plan who purchase 3GB or more of 4G LTE data (1GB or more for postpaid tablet plans). No need to sign up – your Data Stash will begin automatically once you’ve used the up to 10GB of free 4G LTE data we give you!"}),t.jsx("li",{children:"Within a day or so of activating, you’ll have access to your one-time 10GB of Free 4G LTE data."}),t.jsx("li",{children:"Once you’ve used up your Free 10GB, you’ll automatically start rolling your unused 4G LTE data into the next month."}),t.jsx("li",{children:"At the end of the month, all your unused 4G LTE data – rounded up to the nearest megabyte – rolls into your Data Stash to be used any time in the next 12 months."})]})]}),t.jsxs(e2,{children:[t.jsx("h2",{children:"Call now! (800)-555-1234"}),t.jsx("h6",{children:"Offer not available in some areas"})]})]})}function i2(){const e=[{text:"T-Mobile",url:"/T-Mobile"},{text:"Data Stash",url:"/T-Mobile/Stash"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(gi,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Data Stash",children:[t.jsx("b",{children:"Front End Developer"}),t.jsx("br",{}),"The Data Stash click to call landing page campaign was part of T-Mobile's introduction of Data Stash, a free service that allowed users roll unused data over to the following month."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(t2,{})})]})]})}const n2="/assets/vzn-clr-1f6b4dff.svg",r2=p.div`
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
`,l2=p.div`
  width: 148px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url(${n2}) no-repeat center center;
  background-size: contain;
`,o2=p.div`
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
`;function s2(){return t.jsxs(r2,{children:[t.jsx(l2,{}),t.jsx(o2,{children:t.jsx("h5",{children:"Order now! (800)-555-1234"})})]})}const a2=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Neue Hass Display;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplay.woff2");
  }
  @font-face {
    font-family: Neue Hass Display Med;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplayMedium.woff2");
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass Display;
    src: url("/public/fonts/vz/NeueHaasGroteskDisplayBold.woff2");
    font-weight: bold;
  }
  @font-face {
    font-family: Neue Hass;
    src: url("/public/fonts/vz/NeueHaasGroteskText.woff2");
  }
  @font-face {
    font-family: Neue Hass Med;
    src: url("/public/fonts/vz/NeueHaasGroteskTextMedium.woff2");
    font-weight: 600;
  }
  @font-face {
    font-family: Neue Hass;
    src: url("/public/fonts/vz/NeueHaasGroteskTextBold.woff2");
    font-weight: bold;
  }
`,d2=p.div`
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
`,c2=p.div`
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
`,f2=p.div`
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
`,h2=p.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  padding: 12px 4%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,p2=p.div`
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
`;function u2(){return t.jsxs(a2,{children:[t.jsx(s2,{}),t.jsxs(d2,{children:[t.jsx("h1",{children:"One plan."}),t.jsx("h1",{children:"Pick a size."}),t.jsx("h1",{children:"Simple."}),t.jsx("h2",{children:"Introducing XXL. 18GB / $100."}),t.jsxs(c2,{children:[t.jsxs(mn,{children:[t.jsx("img",{src:"/public/images/vz/xxl-img/cone_s.png",border:"0"}),t.jsx(yn,{children:"S"}),t.jsx("h5",{children:"1GB / $30"})]}),t.jsxs(mn,{children:[t.jsx("img",{src:"/public/images/vz/xxl-img/cone_m.png",border:"0"}),t.jsx(yn,{children:"M"}),t.jsx("h5",{children:"3GB / $45"})]}),t.jsxs(mn,{children:[t.jsx("img",{src:"/public/images/vz/xxl-img/cone_l.png",border:"0"}),t.jsx(yn,{children:"L"}),t.jsx("h5",{children:"6GB / $60"})]}),t.jsxs(mn,{children:[t.jsx("img",{src:"/public/images/vz/xxl-img/cone_xl.png",border:"0"}),t.jsx(yn,{children:"XL"}),t.jsx("h5",{children:"12GB / $80"})]}),t.jsxs(mn,{children:[t.jsx("img",{src:"/public/images/vz/xxl-img/cone_xxl.png",border:"0"}),t.jsx(yn,{children:"XXL"}),t.jsx("h5",{children:"18GB / $100"})]})]}),t.jsx("h3",{children:t.jsx("strong",{children:"All sizes include unlimited talk and text."})}),t.jsx("h3",{children:"Call now and find your plan!"}),t.jsx("h4",{children:"(800)-555-1234"}),t.jsx("h6",{children:"Plan cost per month plus $20/month/smartphone purchased on device payment. Taxes/fees apply."})]}),t.jsxs(f2,{children:[t.jsx("h2",{children:"What else do you get?"}),t.jsxs(h2,{children:[t.jsxs("div",{children:[t.jsx("h3",{children:t.jsx("strong",{children:"Share Data."})}),t.jsx("h5",{children:"Share your data with family and across your devices."})]}),t.jsxs("div",{children:[t.jsx("h3",{children:t.jsx("strong",{children:"Switch sizes anytime."})}),t.jsx("h5",{children:"If you need more data, you can switch sizes any time. And if you’d rather not switch, each extra GB is only $15.Share your data with family and across your devices."})]}),t.jsxs("div",{children:[t.jsx("h3",{children:t.jsx("strong",{children:"All on the best network."})}),t.jsx("h5",{children:"Enjoy the largest and most reliable 4G LTE network in the country. More coverage, faster speeds and better connection."})]})]})]}),t.jsxs(p2,{children:[t.jsx("h3",{children:"Call now and find your plan!"}),t.jsx("h4",{children:"(800)-555-1234"})]})]})}function g2(){const e=[{text:"Verizon",url:"/Verizon"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/vz/vzn.svg",alt:"Verizon"}),t.jsxs(R,{children:[t.jsxs(G,{title:"Introducing XXL",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The XXL click to call landing page campaign was part of Verizon's introduction of a 5th data pricing option to simple size plans. All sizes included unlimited talk and text with varying amounts of data at varying price points. Also included was cross-device data sharing, the ability to switch between plans, and full nationwide coverage."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(u2,{})})]})]})}const x2=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: ATT Bold;
    src: url("/public/fonts/at/omnesatt-medium.woff");
    font-weight: bold;
  }
  @font-face {
    font-family: ATT Regular;
    src: url("/public/fonts/at/omnesatt-regular.woff");
    font-weight: normal;
  }
  @font-face {
    font-family: ATT Light;
    src: url("/public/fonts/at/omnesatt-light.woff");
    font-weight: light;
  }
`,m2=p.div`
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
`,y2=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url("/public/images/at/att-img/att-logo.svg") no-repeat center;
  background-size: cover;
`,j2=p.div`
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
`,w2=p.div`
  padding: 0 20px;
  background: linear-gradient(
    to bottom,
    rgba(254, 255, 255, 1) 0%,
    rgba(242, 242, 242, 1) 100%
  );
`,b2=p.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  background: url("/public/images/at/att-img/hero_outdoors.jpg") no-repeat
    center center;
  background-size: cover;
`,xi=p.div`
  position: absolute;
  width: 24px;
  height: 24px;
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,v2=p(xi)`
  top: 82%;
  left: 10%;
  background: url("/public/images/at/att-img/circle_water.png") no-repeat center
    center;
  background-size: contain;
`,S2=p(xi)`
  top: 43%;
  left: 26%;
  background: url("/public/images/at/att-img/circle_fire.png") no-repeat center
    center;
  background-size: contain;
`,k2=p(xi)`
  top: 64%;
  left: 40%;
  background: url("/public/images/at/att-img/circle_lock.png") no-repeat center
    center;
  background-size: contain;
`,z2=p(xi)`
  top: 44%;
  left: 50%;
  background: url("/public/images/at/att-img/circle_remote.png") no-repeat
    center center;
  background-size: contain;
`,A2=p(xi)`
  top: 26%;
  left: 63%;
  background: url("/public/images/at/att-img/circle_bulb.png") no-repeat center
    center;
  background-size: contain;
`,I2=p(xi)`
  top: 68%;
  left: 68%;
  background: url("/public/images/at/att-img/circle_garage.png") no-repeat
    center center;
  background-size: contain;
`,P2=p(xi)`
  top: 42%;
  left: 92%;
  background: url("/public/images/at/att-img/circle_video.png") no-repeat center
    center;
  background-size: contain;
`,H2=p.div`
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
`,T2=p.div`
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
`,F2=p.div`
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
`,_o=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px 20px 32px 20px;
  border: 1px solid #ccc;

  &:nth-child(1) {
    background: url("/public/images/at/att-img/700.png") no-repeat top right;
  }
  &:nth-child(2) {
    background: url("/public/images/at/att-img/1200.png") no-repeat top right;
  }
  &:nth-child(3) {
    background: url("/public/images/at/att-img/1700.png") no-repeat top right;
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
`,C2=p.div`
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
`;function E2(){return t.jsxs(x2,{children:[t.jsxs(m2,{children:[t.jsx(y2,{}),t.jsx(j2,{children:t.jsxs("h5",{children:[t.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),t.jsxs(w2,{children:[t.jsxs(b2,{children:[t.jsx(v2,{}),t.jsx(S2,{}),t.jsx(k2,{}),t.jsx(z2,{}),t.jsx(A2,{}),t.jsx(I2,{}),t.jsx(P2,{})]}),t.jsxs(H2,{children:[t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_water.png",border:"0"}),t.jsxs("h5",{children:["Water",t.jsx("br",{}),"Detection*"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_security.png",border:"0"}),t.jsxs("h5",{children:["Fire & CO2",t.jsx("br",{}),"Monitoring"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_door.png",border:"0"}),t.jsxs("h5",{children:["Professional",t.jsx("br",{}),"Monitoring"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_alerts.png",border:"0"}),t.jsxs("h5",{children:["Text &",t.jsx("br",{}),"Email Alerts"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_panel.png",border:"0"}),t.jsxs("h5",{children:["Lighting &",t.jsx("br",{}),"Thermostat"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_program.png",border:"0"}),t.jsxs("h5",{children:["Remote",t.jsx("br",{}),"Access"]})]}),t.jsxs(Kt,{children:[t.jsx("img",{src:"/public/images/at/att-img/icon_monitor.png",border:"0"}),t.jsxs("h5",{children:["Video",t.jsx("br",{}),"Monitoring"]})]})]})]}),t.jsxs(T2,{children:[t.jsx("h2",{children:"AT&T Digital Life gives you a simple way to help you stay connected to your home when you're away. With three affordable packages, you pick the level of smart home security that's right for you.*"}),t.jsxs(F2,{children:[t.jsxs(_o,{children:[t.jsx("h3",{children:"Smart Security Package"}),t.jsxs("h2",{children:[t.jsx("sup",{children:"$"}),"29.99"]}),t.jsx("h4",{children:"includes $700 in equipment if purchased separately."}),t.jsx("p",{children:"Home security with window and door sensors, a motion sensor and indoor siren.*"})]}),t.jsxs(_o,{children:[t.jsx("h3",{children:"Smart Security and Automation Package"}),t.jsxs("h2",{children:[t.jsx("sup",{children:"$"}),"49.99"]}),t.jsx("h4",{children:"includes $1,200 in equipment if purchased separately."}),t.jsx("p",{children:"Get everything in the Smart Security package, plus an outdoor video camera package and remote access door lock package.*"})]}),t.jsxs(_o,{children:[t.jsx("h3",{children:"Premium Security and Automation Package"}),t.jsxs("h2",{children:[t.jsx("sup",{children:"$"}),"99.99"]}),t.jsx("h4",{children:"includes $1,700 in equipment if purchased separately."}),t.jsx("p",{children:"Get everything in the Smart Security and Automation package plus energy package with thermostat and lighting control, and water detection package.*"})]})]}),t.jsx("h6",{children:"*Digital Life: Ltd avail. in select mkts. 2-year security agmt. w/equip fees and monthly svc charges req'd. Door lock, thermostat/lighting control, water detection and camera functions each req. purchase of sep. automation pkg. w/sep. equip. fees & monthly svc charges or security + automation package. AT&T-Certified Like-New equip. provided. Early termination (up to $840) and other fees, chgs and restr's apply. Data charges may apply for app download and usage. Coverage and service not avail. everywhere. See below for complete details."})]}),t.jsxs(C2,{children:[t.jsx("h3",{children:"Discover how you can benefit from a smart home."}),t.jsx("h4",{children:"(800)-555-1234"})]})]})}function D2(){const e=[{text:"AT&T",url:"/ATT"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/at/att.svg",alt:"AT&T Digital Life"}),t.jsxs(R,{children:[t.jsxs(G,{title:"AT&T Smart Security",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The AT&T Smart Security click to call landing page campaign was part of AT&T Digital Life's introduction of home security and automation services. Users can customize the AT&T Digital Life wireless system to fit their homes. AT&T Digital Life currently offers 24/7 Professional Monitoring, Video Monitoring, Remote Door Locks, Lighting & Thermostat Control, Water Detection and Fire & Carbon Monoxide Monitoring. Users also get mobile access to arm and disarm the system, view video from security cameras, monitor sensors lock and unlock doors, and turn off devices utilizing smart plugs."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(E2,{})})]})]})}const M2=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;

  @font-face {
    font-family: Din Black;
    src: url("/public/fonts/dt/DINBk.woff");
    font-weight: bold;
  }
  @font-face {
    font-family: Din Bold;
    src: url("/public/fonts/dt/DINBd.woff");
    font-weight: bold;
  }
  @font-face {
    font-family: Din;
    src: url("/public/fonts/dt/DINrg.woff");
    font-weight: normal;
  }
  @font-face {
    font-family: Din Med;
    src: url("/public/fonts/dt/DINMd.woff");
  }
`,U2=p.div`
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
`,L2=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url("/public/images/dt/dtv-img/dtv-clr.svg") no-repeat center;
  background-size: cover;
`,_2=p.div`
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
`,N2=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  background: url("/public/images/dt/dtv-img/home-hero.jpg") no-repeat center
    center;
  background-size: cover;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,B2=p.div`
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
    list-style-image: url("/public/images/dt/dtv-img/check.svg");

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
`,W2=p.div`
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
`,O2=p.div`
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
`;function R2(){return t.jsxs(M2,{children:[t.jsxs(U2,{children:[t.jsx(L2,{}),t.jsx(_2,{children:t.jsxs("h5",{children:[t.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),t.jsxs(N2,{children:[t.jsxs(B2,{children:[t.jsx("h2",{children:"Get every Out-of-Market NFL game live Every Sunday exclusively on DIRECTV"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Every out-of-market game"}),t.jsx("li",{children:"Expert commentary"}),t.jsx("li",{children:"Fantasy player analysis"})]}),t.jsxs("h4",{children:[t.jsx("span",{children:"Call to order DIRECTV today! "}),"(800)-555-1234"]})]}),t.jsxs(W2,{children:[t.jsx("h4",{children:"CHOICE"}),t.jsxs("h5",{children:["Get First 3 months of HBO®, STARZ®, SHOWTIME® and Cinemax® at no extra cost.",t.jsx("br",{}),t.jsx("br",{}),"2016 NFL SUNDAY TICKET included at no extra cost with CHOICE Package and above."]}),t.jsxs("h3",{children:["175+",t.jsx("br",{}),t.jsx("span",{children:"Channels"})]}),t.jsxs("h2",{children:["$60",t.jsx("span",{children:"/mo"})]}),t.jsx("h6",{children:"For 24 Months w/ 24-mo. TV agmt & other qual. AT&T service. Regional sports fee applies in certain markets."})]})]}),t.jsxs(O2,{children:[t.jsxs("h3",{children:["Discover the DIRECTV Difference DIRECTV has the right package for every price range",t.jsx("br",{}),t.jsx("br",{}),"Call to order DIRECTV today"]}),t.jsx("h4",{children:"(800)-555-1234"})]})]})}function $2(){const e=[{text:"DirecTV",url:"/DirecTV"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/dt/dtv.svg",alt:"DirectTV"}),t.jsxs(R,{children:[t.jsxs(G,{title:"DirecTV NFL & Choice Package",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The Directv NFL & Choice Package click to call landing page campaign was part of DIRECTV's Choice Package for new customers which included 3 free months of HBO, STARZ, SHOWTIME and Cinemax. The 2016 NFL Sunday Ticket, which inlcuded every Out-of-Market NFL game live every Sunday, was also included at no extra cost."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(R2,{})})]})]})}const He="'Open Sans', Helvetica, Arial, sans-serif",G2=p.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, #ef1b4a 0%, #992786 100%);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Ari Black", ${He};
  }
  p {
    font-family: ${He};
  }
  @font-face {
    font-family: Ari Black;
    src: url("/public/fonts/ds/ariblk.ttf");
    font-weight: bold;
  }
`,V2=p.div`
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
`,Z2=p.div`
  width: 126px;
  height: 35px;
  padding: 20px 20px 0 20px;
  background: url("/public/images/ds/dsh-img/dsh-wht.svg") no-repeat center;
  background-size: cover;
`,Q2=p.div`
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
`,Y2=p.div`
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
`,K2=p.div`
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
`,X2=p.div`
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
    font-family: ${He};
    text-align: center;
    color: #ffffff;
    border-bottom: 3px solid #ffffff;
    font-weight: lighter;
  }
  h4 {
    margin: 0;
    padding: 0;
    color: #ffffff;
    font-family: ${He};
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
`,J2=p.div`
  flex: 2;

  h3 {
    margin: 0;
    padding: 16px 0 0 0;
    color: #ffffff;
    font-size: 1.8em;
    line-height: 1em;
    letter-spacing: 6px;
    text-align: center;
    font-family: ${He};
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
    font-family: ${He};
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
`,q2=p.div`
  width: 320px;
  margin: 0 40px;
  padding: 24px 0;
  border-bottom: 3px solid #fff;
  h4 {
    width: 260px;
    margin: 0 auto;
    padding: 10px 0;
    color: #992786;
    font-family: ${He};
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
`,ej=p.div`
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
`,tj=p.div`
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
      font-family: ${He};
      font-weight: lighter;
    }
  }
  h4 {
    margin: 0;
    padding: 4px 0;
    font-size: 1.2em;
    line-height: 1.4em;
    font-family: ${He};
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
`,ij=p.div`
  flex: 1;
  padding: 0 24px;
`,nj=p.div`
  flex: 1;
  padding: 0 24px;

  @media (min-width: 768px) {
    border-left: 5px solid #fff;
  }
`,rj=p.div`
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
    font-family: ${He};
    font-weight: normal;
    text-align: center;
  }
  h6 {
    margin: 0;
    padding: 12px 0;
    color: #ffffff;
    font-size: 0.8em;
    font-family: ${He};
    font-weight: lighter;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
  @media (min-width: 960px) {
    width: 860px;
  }
`,lj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0 12px;
    font-family: ${He};
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
`,oj=p.div`
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
    font-family: ${He};
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
`,sj=p.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`,aj=p.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  @media (min-width: 768px) {
    border-left: 3px solid #fff;
  }
`,dj=p.div`
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
    font-family: ${He};
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
`;function cj(){return t.jsxs(G2,{children:[t.jsxs(V2,{children:[t.jsx(Z2,{}),t.jsx(Q2,{children:t.jsxs("h5",{children:[t.jsx("span",{children:"Call for a quote "}),"(800)-555-1234"]})})]}),t.jsxs(Y2,{children:[t.jsx("h1",{children:"2-YEAR"}),t.jsx("h1",{children:"TV PRICE LOCK"}),t.jsx("img",{src:"/public/images/ds/dsh-img/lock-white.svg",border:"0"})]}),t.jsxs(K2,{children:[t.jsxs(X2,{children:[t.jsx("div",{children:t.jsxs("h2",{children:[t.jsx("sup",{children:"$"}),"49"]})}),t.jsxs("div",{children:[t.jsx("h3",{children:"99"}),t.jsx("h4",{children:"MO"})]})]}),t.jsxs(J2,{children:[t.jsx("h3",{children:"190 CHANNELS"}),t.jsx("h4",{children:"HOPPER SMART DVR"})]})]}),t.jsx(q2,{children:t.jsxs("h4",{children:[t.jsx("span",{children:"LOCK IN YOUR PRICE TODAY! "}),"(800)-555-1234"]})}),t.jsx(ej,{children:t.jsx("img",{src:"/public/images/ds/dsh-img/channels.png",border:"0"})}),t.jsxs(tj,{children:[t.jsx(ij,{children:t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," Local channels fee"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," Regional sports fee"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," HD programming fee"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," DVR fee"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"No"})," 1st TV Monthly fee"]}),t.jsx("li",{children:"Just $49.99/mo plus taxes"})]})}),t.jsxs(nj,{children:[t.jsx("h4",{children:t.jsx("strong",{children:"Want to lock more?"})}),t.jsx("h4",{children:"Each additional TV for $7/mo"}),t.jsx("h4",{children:"240 channels for $15/mo more"}),t.jsx("h4",{children:"290 channels for $25/mo more"})]})]}),t.jsxs(rj,{children:[t.jsx("h5",{children:t.jsx("strong",{children:"PLUS YOU CHOOSE"})}),t.jsxs(lj,{children:[t.jsx("img",{src:"/public/images/ds/dsh-img/netflix.png",border:"0",alt:"Netflix"}),t.jsx("p",{children:"- or -"}),t.jsx("img",{src:"/public/images/ds/dsh-img/redzone.png",border:"0",alt:"RedZone"})]}),t.jsxs("div",{children:[t.jsx("h5",{children:"Included for 1 year with no hassle"}),t.jsx("h6",{children:"No need to call. automatically removed after 1 year.*"})]})]}),t.jsxs(oj,{children:[t.jsxs(sj,{children:[t.jsx("p",{children:"Free Premiums for 3 months "}),t.jsx("img",{src:"/public/images/ds/dsh-img/premiums.png",border:"0"})]}),t.jsxs(aj,{children:[t.jsx("p",{children:"Free Professional Installation"}),t.jsx("img",{src:"/public/images/ds/dsh-img/van.png",border:"0"})]})]}),t.jsxs(dj,{children:[t.jsx("h3",{children:"CALL NOW!"}),t.jsx("h4",{children:"(800)-555-1234"}),t.jsxs("h6",{children:["Requires credit qualification, 24-month commitment with early termination fee and e-bill autopay.",t.jsx("br",{}),"Terms & Conditions"]})]})]})}function fj(){const e=[{text:"Dish",url:"/Dish"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Te,{logo:"/public/images/ds/dsh.svg",alt:"Dish"}),t.jsxs(R,{children:[t.jsxs(G,{title:"2 Year Price Lock",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"The 2 Year Price Lock click to call landing page campaign was part of Dish Network's special offer in which new customer could lock in pricing on entertainment bundles for 2 years. Offer also included free installation and a special 1 year subscription to the streaming service Netflix or the NFL Network Multi-Sport Pack - Red Zone."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(cj,{})})]})]})}function Va({fixedLogo:e}){return t.jsx(Te,{logo:"/public/images/ad/adt.svg",alt:"ADT",fixedLogo:e})}function hj(){const e=[{text:"ADT",url:"/ADT"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Va,{}),t.jsxs(R,{children:[t.jsxs(G,{title:"ADT",children:[t.jsx("b",{children:"Front End Developer • Graphic Designer"}),t.jsx("br",{}),"ADT Security Services is an American corporation that provides residential and small business electronic security, fire protection and other related alarm monitoring services in 35 countries. ADT is the largest security company in the United States and Canada, serving over 6.5 million customers. As of 2013 ADT holds 25% market share of the residential market and 13% of the small business market in the US."]}),t.jsx("br",{}),t.jsx(rn,{className:"_three",children:Wm.map(i=>t.jsx(Jl,{link:i.url,title:i.title,bg:i.bg},i.title))})]})]})}const Hc="/assets/zurch-8469b5d1.ttf",pj="/assets/zurchitalic-a3fa2d10.ttf",uj="/assets/zurchitalbold-81627c14.ttf",gj="/assets/zurchlight-057986b9.ttf",xj=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url(${Hc});
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url(${Hc});
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url(${uj});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url(${pj});
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url(${gj});
  }
`;function mj({children:e}){return t.jsx(xj,{children:e})}const yj=p.div`
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
`,jj=p.div`
  width: 136px;
  height: 48px;
  padding: 20px 20px 0 20px;
  background: url("/public/images/ad/adt-img/adt-biz.svg") no-repeat center;
  background-size: cover;
`,wj=p.div`
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
`,bj=p.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url("/public/images/ad/adt-img/biz-hero.jpg") no-repeat center
    center;
  background-size: cover;
`,vj=p.div`
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
`,Tc=p.div`
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
`,Sj=p.div`
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
`,kj=p.div`
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
`,Er=p.div`
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
`,zj=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Aj=p.div`
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
`,Ij=p.div`
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
`,Pj=p.div`
  display: flex;
  flex-direction: column;

  input {
    wisth: 100%;
    height: 32px;
    margin: 6px 0;
    padding: 4px;
    border: 1px solid #0061a8;
  }
`;function Hj(){return t.jsxs(mj,{children:[t.jsxs(yj,{children:[t.jsx(jj,{}),t.jsx(wj,{children:t.jsxs("h5",{children:[t.jsx("span",{children:"Call for a Free Onsite Consultation "}),"(800)-555-1234"]})})]}),t.jsx(bj,{children:t.jsxs(vj,{children:[t.jsx("h1",{children:"Save 50%"}),t.jsxs("h3",{children:["on installation of",t.jsx("br",{}),"an adt security system"]}),t.jsx("h3",{children:t.jsx("span",{children:"and"})}),t.jsxs("h2",{children:["install 1 camera",t.jsx("br",{}),"get 1 free"]}),t.jsx("h4",{children:"up to 8 cameras"}),t.jsx("h6",{children:"See important terms and pricing here."})]})}),t.jsx(Tc,{children:t.jsxs("h4",{children:[t.jsx("span",{children:"To schedule an appointment, call "}),"(800)-555-1234"]})}),t.jsxs(Sj,{children:[t.jsx("h4",{children:"Business Surveillance Products"}),t.jsxs(kj,{children:[t.jsxs(Er,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam3.png",border:"0"}),t.jsx("h5",{children:"Wireless Day/ Night Camera"}),t.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),t.jsxs(Er,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam4.png",border:"0"}),t.jsx("h5",{children:"Wireless Day/ Night Camera"}),t.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),t.jsxs(Er,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam2.png",border:"0"}),t.jsx("h5",{children:"Wireless Day/ Night Camera"}),t.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]}),t.jsxs(Er,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam1.png",border:"0"}),t.jsx("h5",{children:"Wireless Day/ Night Camera"}),t.jsx("p",{children:"Video motion- detection capable, with a light sensor for night vision. Captures clear, crisp images in a dark or low-light environment."})]})]})]}),t.jsx(Tc,{children:t.jsx("h4",{children:"What type of business are you? Get video surveillance."})}),t.jsxs(zj,{children:[t.jsxs(Aj,{children:[t.jsx("h4",{children:"Control your business from anywhere with your mobile device."}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-hanger.svg",border:"0"}),"Retail"]}),t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-stetho.svg",border:"0"}),"Clinical"]}),t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-gear.svg",border:"0"}),"Tech"]}),t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-bell.svg",border:"0"}),"Food"]}),t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-monitor.svg",border:"0"}),"Office"]}),t.jsxs("li",{children:[t.jsx("img",{src:"/public/images/ad/adt-img/adt-coffee.svg",border:"0"}),"Services"]})]})]}),t.jsxs(Ij,{children:[t.jsx("h5",{children:"Free Security Quote"}),t.jsx("p",{children:"Please complete the form below and an ADT Representative will call you with information about ADT's products and services."}),t.jsxs(Pj,{children:[t.jsx("input",{type:"text",placeholder:"Business Name"}),t.jsx("input",{type:"text",placeholder:"First Name"}),t.jsx("input",{type:"text",placeholder:"Last Name"}),t.jsx("input",{type:"tel",placeholder:"Phone"}),t.jsx("input",{type:"email",placeholder:"Email"}),t.jsx("input",{type:"number",placeholder:"Zip Code"})]})]})]})]})}function Tj(){const e=[{text:"ADT",url:"/ADT"},{text:"Business",url:"/ADT/Business"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Va,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Business Surveillance",children:[t.jsx("b",{children:"Front End Developer"}),t.jsx("br",{}),"The Business Surveillance click to call landing page campaign was part of ADT's special offer for small businesses featuring a variety surveillance and monitoring products with installation at a discounted price when new customers sign up for a 3yr. contract. The page also featured a quote form which customers could complete to be contacted by an ADT Representative for pricing options."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(Hj,{})})]})]})}const Fj=p.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  @font-face {
    font-family: Zurch;
    src: url("/public/fonts/ad/zurch.ttf");
    font-weight: normal;
  }
  @font-face {
    font-family: Zurch Bold;
    src: url("/public/fonts/ad/zurch.ttf");
    font-weight: bold;
  }
  @font-face {
    font-family: Zurch Ital Bold;
    src: url("/public/fonts/ad/zurchitalbold.ttf");
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Ital;
    src: url("/public/fonts/ad/zurchitalic.ttf");
    font-style: italic;
  }
  @font-face {
    font-family: Zurch Light;
    src: url("/public/fonts/ad/zurchlight.ttf");
  }
`,Cj=p.div`
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
`,Ej=p.div`
  width: 136px;
  height: 48px;
  padding: 20px 20px 0 20px;
  background: url("/public/images/ad/adt-img/adt-res.svg") no-repeat center;
  background-size: cover;
`,Dj=p.div`
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
`,Mj=p.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4%;
  background: url("/public/images/ad/adt-img/res-hero.jpg") no-repeat center
    center;
  background-size: cover;
`,Uj=p.div`
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
`,Fc=p.div`
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
`,Lj=p.div`
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
`,_j=p.div`
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
`,Dr=p.div`
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
`,Nj=p.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background: #e6faff;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`,Bj=p.div`
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
`,Wj=p.div`
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
`,Oj=p.div`
  display: flex;
  flex-direction: column;

  input {
    wisth: 100%;
    height: 32px;
    margin: 6px 0;
    padding: 4px;
    border: 1px solid #0061a8;
  }
`;function Rj(){return t.jsxs(Fj,{children:[t.jsxs(Cj,{children:[t.jsx(Ej,{}),t.jsx(Dj,{children:t.jsxs("h5",{children:[t.jsx("span",{children:"Call for a Free Home Security Review "}),"(800)-555-1234"]})})]}),t.jsx(Mj,{children:t.jsxs(Uj,{children:[t.jsxs("h2",{children:["Free Installation",t.jsx("br",{}),"on ADT Pulse Video"]}),t.jsx("h3",{children:"Including A Wireless Security Camera"}),t.jsx("h1",{children:"$449"}),t.jsx("h5",{children:"Instant Savings"}),t.jsx("h6",{children:"See important terms and pricing here."})]})}),t.jsx(Fc,{children:t.jsxs("h4",{children:[t.jsx("span",{children:"To schedule an appointment, call "}),"(800)-555-1234"]})}),t.jsxs(Lj,{children:[t.jsx("h4",{children:"Home Surveillance Products"}),t.jsxs(_j,{children:[t.jsxs(Dr,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam3.png",border:"0"}),t.jsx("h5",{children:"Wireless Security Camera"}),t.jsx("p",{children:"Remotely check in on your home and make sure all is safe while you're out and about."})]}),t.jsxs(Dr,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam1.png",border:"0"}),t.jsx("h5",{children:"Dome Security Camera"}),t.jsx("p",{children:"These can be mounted almost anywhere, provides 360° viewing with clear imaging."})]}),t.jsxs(Dr,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam6.png",border:"0"}),t.jsx("h5",{children:"Indoor Color Security Camera"}),t.jsx("p",{children:"High-resolution color cameras allow you to see around your home in full color."})]}),t.jsxs(Dr,{children:[t.jsx("img",{src:"/public/images/ad/adt-img/biz-cam7.png",border:"0"}),t.jsx("h5",{children:"DVR"}),t.jsx("p",{children:"Clear audio and video and remote viewing, record from all cameras at the same time."})]})]})]}),t.jsx(Fc,{children:t.jsx("h4",{children:"Get video surveillance with ADT Pulse Solutions"})}),t.jsxs(Nj,{children:[t.jsxs(Bj,{children:[t.jsx("h4",{children:"Control your home from anywhere with your mobile device. Free"}),t.jsx("img",{src:"/public/images/ad/adt-img/pulse-promo.png",border:"0"})]}),t.jsxs(Wj,{children:[t.jsx("h5",{children:"Free Security Quote"}),t.jsx("p",{children:"Please complete the form below and an ADT Representative will call you with information about ADT's products and services."}),t.jsxs(Oj,{children:[t.jsx("input",{type:"text",placeholder:"Business Name"}),t.jsx("input",{type:"text",placeholder:"First Name"}),t.jsx("input",{type:"text",placeholder:"Last Name"}),t.jsx("input",{type:"tel",placeholder:"Phone"}),t.jsx("input",{type:"email",placeholder:"Email"}),t.jsx("input",{type:"number",placeholder:"Zip Code"})]})]})]})]})}function $j(){const e=[{text:"ADT",url:"/ADT"},{text:"Residential",url:"/ADT/Residential"}];return t.jsxs(t.Fragment,{children:[t.jsx($,{route:e}),t.jsx(Va,{fixedLogo:!0}),t.jsxs(R,{fadeOnly:!0,children:[t.jsxs(G,{title:"Residential Surveillance",children:[t.jsx("b",{children:"Front End Developer"}),t.jsx("br",{}),"The Residential Surveillance click to call landing page campaign was part of ADT's special offer for residential and home surveillance featuring a variety surveillance and monitoring products with installation at a discounted price when new customers sign up for a 3yr. contract. The page also featured a quote form which customers could complete to be contacted by an ADT Representative for pricing options."]}),t.jsx("br",{}),t.jsx(ie,{viewSelected:"desktop",children:t.jsx(Rj,{})})]})]})}const Gj=p.div`
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
  background: ${F.papier};

  @media (min-width: 768px) {
    margin: 12px 0 32px 0;
  }
`,Vj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1904px;
`,Zj=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    text-align: center;
  }
`;function Qj(){return t.jsx(Gj,{children:t.jsx(Vj,{children:t.jsxs(Zj,{children:[t.jsx("h1",{children:"404"}),t.jsx(Pp,{children:t.jsx(Jr,{to:"/",title:"HOME","aria-label":"Button: Home",children:t.jsxs("button",{title:"HOME","aria-label":"Button: HOME",children:[t.jsx("span",{children:"⠿"}),"HOME",t.jsx("span",{children:"⠿"})]})})})]})})})}const Yj=p.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;function Kj(){const e=or();return I.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[e]),t.jsx(Yj,{children:t.jsx(Jg,{children:t.jsxs(_,{path:"/",element:t.jsx(zm,{}),children:[t.jsx(_,{index:!0,element:t.jsx(Qm,{})}),t.jsx(_,{exact:!0,path:"/Microsoft",element:t.jsx(l1,{})}),t.jsx(_,{path:"/Microsoft/Azure",element:t.jsx(a1,{})}),t.jsx(_,{path:"/Microsoft/Azure/Essentials",element:t.jsx(f1,{})}),t.jsx(_,{path:"/Microsoft/Azure/Newsletter",element:t.jsx(u1,{})}),t.jsx(_,{path:"/Microsoft/Azure/Alerts",element:t.jsx(y1,{})}),t.jsx(_,{path:"/Microsoft/Student",element:t.jsx(S1,{})}),t.jsx(_,{path:"/Microsoft/Windows10",element:t.jsx(T1,{})}),t.jsx(_,{path:"/Microsoft/ExpertZone",element:t.jsx(M1,{})}),t.jsx(_,{path:"/Microsoft/PowerBI",element:t.jsx(_1,{})}),t.jsx(_,{path:"/Microsoft/VisualStudio",element:t.jsx(W1,{})}),t.jsx(_,{exact:!0,path:"/Gates",element:t.jsx(O1,{})}),t.jsx(_,{path:"/Gates/GivingPledge",element:t.jsx(R1,{})}),t.jsx(_,{path:"/Gates/AnnualLetter",element:t.jsx(V1,{})}),t.jsx(_,{exact:!0,path:"/T-Mobile",element:t.jsx(Z1,{})}),t.jsx(_,{path:"/T-Mobile/Tuesdays",element:t.jsx(xy,{})}),t.jsx(_,{path:"/T-Mobile/3for1",element:t.jsx(vy,{})}),t.jsx(_,{path:"/T-Mobile/Jump",element:t.jsx(Hy,{})}),t.jsx(_,{path:"/T-Mobile/Pay",element:t.jsx(Ly,{})}),t.jsx(_,{path:"/T-Mobile/Prepaid",element:t.jsx(Yy,{})}),t.jsx(_,{path:"/T-Mobile/Stash",element:t.jsx(i2,{})}),t.jsx(_,{exact:!0,path:"/Verizon",element:t.jsx(g2,{})}),t.jsx(_,{exact:!0,path:"/ATT",element:t.jsx(D2,{})}),t.jsx(_,{exact:!0,path:"/DirecTV",element:t.jsx($2,{})}),t.jsx(_,{exact:!0,path:"/Dish",element:t.jsx(fj,{})}),t.jsx(_,{exact:!0,path:"/ADT",element:t.jsx(hj,{})}),t.jsx(_,{path:"/ADT/Business",element:t.jsx(Tj,{})}),t.jsx(_,{path:"/ADT/Residential",element:t.jsx($j,{})}),t.jsx(_,{path:"*",element:t.jsx(Qj,{})})]})})})}const Xj=document.getElementById("root");No.createRoot(Xj).render(t.jsx(lx,{children:t.jsx(Kj,{})}));
