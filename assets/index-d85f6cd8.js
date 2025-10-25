(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dr={},Yp={get exports(){return Dr},set exports(e){Dr=e}},Io={},b={},Xp={get exports(){return b},set exports(e){b=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),Qp=Symbol.for("react.portal"),Zp=Symbol.for("react.fragment"),Kp=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),qp=Symbol.for("react.context"),eh=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.memo"),rh=Symbol.for("react.lazy"),du=Symbol.iterator;function ih(e){return e===null||typeof e!="object"?null:(e=du&&e[du]||e["@@iterator"],typeof e=="function"?e:null)}var qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ef=Object.assign,tf={};function sr(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nf(){}nf.prototype=sr.prototype;function ns(e,t,n){this.props=e,this.context=t,this.refs=tf,this.updater=n||qc}var rs=ns.prototype=new nf;rs.constructor=ns;ef(rs,sr.prototype);rs.isPureReactComponent=!0;var pu=Array.isArray,rf=Object.prototype.hasOwnProperty,is={current:null},of={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)rf.call(t,r)&&!of.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:e,key:o,ref:l,props:i,_owner:is.current}}function oh(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function lh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var hu=/\/+/g;function vl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lh(""+e.key):t.toString(36)}function Mi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ai:case Qp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+vl(l,0):r,pu(i)?(n="",e!=null&&(n=e.replace(hu,"$&/")+"/"),Mi(i,t,n,"",function(u){return u})):i!=null&&(os(i)&&(i=oh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(hu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",pu(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+vl(o,a);l+=Mi(o,t,n,s,i)}else if(s=ih(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+vl(o,a++),l+=Mi(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function pi(e,t,n){if(e==null)return e;var r=[],i=0;return Mi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ah(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Fi={transition:null},sh={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Fi,ReactCurrentOwner:is};U.Children={map:pi,forEach:function(e,t,n){pi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pi(e,function(){t++}),t},toArray:function(e){return pi(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=sr;U.Fragment=Zp;U.Profiler=Gp;U.PureComponent=ns;U.StrictMode=Kp;U.Suspense=th;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ef({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=is.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)rf.call(t,s)&&!of.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:e.type,key:i,ref:o,props:r,_owner:l}};U.createContext=function(e){return e={$$typeof:qp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jp,_context:e},e.Consumer=e};U.createElement=lf;U.createFactory=function(e){var t=lf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:eh,render:e}};U.isValidElement=os;U.lazy=function(e){return{$$typeof:rh,_payload:{_status:-1,_result:e},_init:ah}};U.memo=function(e,t){return{$$typeof:nh,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Fi.transition;Fi.transition={};try{e()}finally{Fi.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return We.current.useCallback(e,t)};U.useContext=function(e){return We.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return We.current.useDeferredValue(e)};U.useEffect=function(e,t){return We.current.useEffect(e,t)};U.useId=function(){return We.current.useId()};U.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return We.current.useMemo(e,t)};U.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};U.useRef=function(e){return We.current.useRef(e)};U.useState=function(e){return We.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return We.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(Xp);const Ie=Jc(b);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh=b,ch=Symbol.for("react.element"),fh=Symbol.for("react.fragment"),dh=Object.prototype.hasOwnProperty,ph=uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hh={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)dh.call(t,r)&&!hh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ch,type:e,key:o,ref:l,props:i,_owner:ph.current}}Io.Fragment=fh;Io.jsx=af;Io.jsxs=af;(function(e){e.exports=Io})(Yp);const sf=Dr.Fragment,S=Dr.jsx,D=Dr.jsxs;var Ql={},Gi={},mh={get exports(){return Gi},set exports(e){Gi=e}},et={},Zl={},gh={get exports(){return Zl},set exports(e){Zl=e}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var A=_.length;_.push(z);e:for(;0<A;){var V=A-1>>>1,P=_[V];if(0<i(P,z))_[V]=z,_[A]=P,A=V;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var z=_[0],A=_.pop();if(A!==z){_[0]=A;e:for(var V=0,P=_.length,L=P>>>1;V<L;){var R=2*(V+1)-1,F=_[R],y=R+1,B=_[y];if(0>i(F,A))y<P&&0>i(B,F)?(_[V]=B,_[y]=A,V=y):(_[V]=F,_[R]=A,V=R);else if(y<P&&0>i(B,A))_[V]=B,_[y]=A,V=y;else break e}}return z}function i(_,z){var A=_.sortIndex-z.sortIndex;return A!==0?A:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],f=1,p=null,h=3,m=!1,v=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=_)r(u),z.sortIndex=z.expirationTime,t(s,z);else break;z=n(u)}}function x(_){if(w=!1,g(_),!v)if(n(s)!==null)v=!0,ct(E);else{var z=n(u);z!==null&&_e(x,z.startTime-_)}}function E(_,z){v=!1,w&&(w=!1,d(N),N=-1),m=!0;var A=h;try{for(g(z),p=n(s);p!==null&&(!(p.expirationTime>z)||_&&!ce());){var V=p.callback;if(typeof V=="function"){p.callback=null,h=p.priorityLevel;var P=V(p.expirationTime<=z);z=e.unstable_now(),typeof P=="function"?p.callback=P:p===n(s)&&r(s),g(z)}else r(s);p=n(s)}if(p!==null)var L=!0;else{var R=n(u);R!==null&&_e(x,R.startTime-z),L=!1}return L}finally{p=null,h=A,m=!1}}var O=!1,I=null,N=-1,H=5,M=-1;function ce(){return!(e.unstable_now()-M<H)}function le(){if(I!==null){var _=e.unstable_now();M=_;var z=!0;try{z=I(!0,_)}finally{z?pe():(O=!1,I=null)}}else O=!1}var pe;if(typeof c=="function")pe=function(){c(le)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,xe=we.port2;we.port1.onmessage=le,pe=function(){xe.postMessage(null)}}else pe=function(){C(le,0)};function ct(_){I=_,O||(O=!0,pe())}function _e(_,z){N=C(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,ct(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var A=h;h=z;try{return _()}finally{h=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var A=h;h=_;try{return z()}finally{h=A}},e.unstable_scheduleCallback=function(_,z,A){var V=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?V+A:V):A=V,_){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=A+P,_={id:f++,callback:z,priorityLevel:_,startTime:A,expirationTime:P,sortIndex:-1},A>V?(_.sortIndex=A,t(u,_),n(s)===null&&_===n(u)&&(w?(d(N),N=-1):w=!0,_e(x,A-V))):(_.sortIndex=P,t(s,_),v||m||(v=!0,ct(E))),_},e.unstable_shouldYield=ce,e.unstable_wrapCallback=function(_){var z=h;return function(){var A=h;h=z;try{return _.apply(this,arguments)}finally{h=A}}}})(uf);(function(e){e.exports=uf})(gh);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=b,qe=Zl;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ff=new Set,jr={};function _n(e,t){qn(e,t),qn(e+"Capture",t)}function qn(e,t){for(jr[e]=t,e=0;e<t.length;e++)ff.add(t[e])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,vh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mu={},gu={};function yh(e){return Kl.call(gu,e)?!0:Kl.call(mu,e)?!1:vh.test(e)?gu[e]=!0:(mu[e]=!0,!1)}function wh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xh(e,t,n,r){if(t===null||typeof t>"u"||wh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Le[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function as(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ls,as);Le[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ls,as);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ls,as);Le[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var i=Le.hasOwnProperty(t)?Le[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xh(t,n,i,r)&&(n=null),r||i===null?yh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),zn=Symbol.for("react.portal"),$n=Symbol.for("react.fragment"),us=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),pf=Symbol.for("react.context"),cs=Symbol.for("react.forward_ref"),Jl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),vu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,yl;function Sr(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var wl=!1;function xl(e,t){if(!e||wl)return"";wl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{wl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sr(e):""}function Sh(e){switch(e.tag){case 5:return Sr(e.type);case 16:return Sr("Lazy");case 13:return Sr("Suspense");case 19:return Sr("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $n:return"Fragment";case zn:return"Portal";case Gl:return"Profiler";case us:return"StrictMode";case Jl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pf:return(e.displayName||"Context")+".Consumer";case df:return(e._context.displayName||"Context")+".Provider";case cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:ea(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return ea(e(t))}catch{}}return null}function Eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ea(t);case 8:return t===us?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ch(e){var t=mf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=Ch(e))}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ta(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function yu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vf(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function na(e,t){vf(e,t);var n=nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ra(e,t.type,n):t.hasOwnProperty("defaultValue")&&ra(e,t.type,nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ra(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ia(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Er(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:nn(n)}}function yf(e,t){var n=nn(t.value),r=nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Su(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,xf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kh=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){kh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Ef(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var _h=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function la(e,t){if(t){if(_h[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ua=null,Qn=null,Zn=null;function Eu(e){if(e=ci(e)){if(typeof ua!="function")throw Error(k(280));var t=e.stateNode;t&&(t=$o(t),ua(e.stateNode,e.type,t))}}function Cf(e){Qn?Zn?Zn.push(e):Zn=[e]:Qn=e}function kf(){if(Qn){var e=Qn,t=Zn;if(Zn=Qn=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function _f(e,t){return e(t)}function Pf(){}var Sl=!1;function Tf(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return _f(e,t,n)}finally{Sl=!1,(Qn!==null||Zn!==null)&&(Pf(),kf())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=$o(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var ca=!1;if(Lt)try{var hr={};Object.defineProperty(hr,"passive",{get:function(){ca=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{ca=!1}function Ph(e,t,n,r,i,o,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Nr=!1,qi=null,eo=!1,fa=null,Th={onError:function(e){Nr=!0,qi=e}};function Oh(e,t,n,r,i,o,l,a,s){Nr=!1,qi=null,Ph.apply(Th,arguments)}function Nh(e,t,n,r,i,o,l,a,s){if(Oh.apply(this,arguments),Nr){if(Nr){var u=qi;Nr=!1,qi=null}else throw Error(k(198));eo||(eo=!0,fa=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Of(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(Pn(e)!==e)throw Error(k(188))}function Ih(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Cu(i),e;if(o===r)return Cu(i),t;o=o.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Nf(e){return e=Ih(e),e!==null?If(e):null}function If(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=If(e);if(t!==null)return t;e=e.sibling}return null}var Af=qe.unstable_scheduleCallback,ku=qe.unstable_cancelCallback,Ah=qe.unstable_shouldYield,Lh=qe.unstable_requestPaint,me=qe.unstable_now,Rh=qe.unstable_getCurrentPriorityLevel,ps=qe.unstable_ImmediatePriority,Lf=qe.unstable_UserBlockingPriority,to=qe.unstable_NormalPriority,zh=qe.unstable_LowPriority,Rf=qe.unstable_IdlePriority,Ao=null,kt=null;function $h(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ao,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Fh,bh=Math.log,Mh=Math.LN2;function Fh(e){return e>>>=0,e===0?32:31-(bh(e)/Mh|0)|0}var vi=64,yi=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Cr(a):(o&=l,o!==0&&(r=Cr(o)))}else l=n&~i,l!==0?r=Cr(l):o!==0&&(r=Cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function Dh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-vt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=Dh(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zf(){var e=vi;return vi<<=1,!(vi&4194240)&&(vi=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function Hh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function $f(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bf,ms,Mf,Ff,Df,pa=!1,wi=[],Yt=null,Xt=null,Qt=null,Ur=new Map,Br=new Map,Wt=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Ur.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Uh(e,t,n,r,i){switch(t){case"focusin":return Yt=mr(Yt,e,t,n,r,i),!0;case"dragenter":return Xt=mr(Xt,e,t,n,r,i),!0;case"mouseover":return Qt=mr(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ur.set(o,mr(Ur.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Br.set(o,mr(Br.get(o)||null,e,t,n,r,i)),!0}return!1}function jf(e){var t=dn(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Of(n),t!==null){e.blockedOn=t,Df(e.priority,function(){Mf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Di(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return t=ci(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function Pu(e,t,n){Di(e)&&n.delete(t)}function Bh(){pa=!1,Yt!==null&&Di(Yt)&&(Yt=null),Xt!==null&&Di(Xt)&&(Xt=null),Qt!==null&&Di(Qt)&&(Qt=null),Ur.forEach(Pu),Br.forEach(Pu)}function gr(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Bh)))}function Vr(e){function t(i){return gr(i,e)}if(0<wi.length){gr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Yt!==null&&gr(Yt,e),Xt!==null&&gr(Xt,e),Qt!==null&&gr(Qt,e),Ur.forEach(t),Br.forEach(t),n=0;n<Wt.length;n++)r=Wt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)jf(n),n.blockedOn===null&&Wt.shift()}var Kn=bt.ReactCurrentBatchConfig,ro=!0;function Vh(e,t,n,r){var i=G,o=Kn.transition;Kn.transition=null;try{G=1,gs(e,t,n,r)}finally{G=i,Kn.transition=o}}function Yh(e,t,n,r){var i=G,o=Kn.transition;Kn.transition=null;try{G=4,gs(e,t,n,r)}finally{G=i,Kn.transition=o}}function gs(e,t,n,r){if(ro){var i=ha(e,t,n,r);if(i===null)Ll(e,t,r,io,n),_u(e,r);else if(Uh(i,e,t,n,r))r.stopPropagation();else if(_u(e,r),t&4&&-1<Wh.indexOf(e)){for(;i!==null;){var o=ci(i);if(o!==null&&bf(o),o=ha(e,t,n,r),o===null&&Ll(e,t,r,io,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ll(e,t,r,null,n)}}var io=null;function ha(e,t,n,r){if(io=null,e=ds(r),e=dn(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Of(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function Hf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rh()){case ps:return 1;case Lf:return 4;case to:case zh:return 16;case Rf:return 536870912;default:return 16}default:return 16}}var Bt=null,vs=null,ji=null;function Wf(){if(ji)return ji;var e,t=vs,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ji=i.slice(e,1<r?1-r:void 0)}function Hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Tu(){return!1}function tt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xi:Tu,this.isPropagationStopped=Tu,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=tt(ur),ui=ue({},ur,{view:0,detail:0}),Xh=tt(ui),Cl,kl,vr,Lo=ue({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vr&&(vr&&e.type==="mousemove"?(Cl=e.screenX-vr.screenX,kl=e.screenY-vr.screenY):kl=Cl=0,vr=e),Cl)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Ou=tt(Lo),Qh=ue({},Lo,{dataTransfer:0}),Zh=tt(Qh),Kh=ue({},ui,{relatedTarget:0}),_l=tt(Kh),Gh=ue({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),Jh=tt(Gh),qh=ue({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),em=tt(qh),tm=ue({},ur,{data:0}),Nu=tt(tm),nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function om(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=im[e])?!!t[e]:!1}function ws(){return om}var lm=ue({},ui,{key:function(e){if(e.key){var t=nm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ws,charCode:function(e){return e.type==="keypress"?Hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),am=tt(lm),sm=ue({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=tt(sm),um=ue({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ws}),cm=tt(um),fm=ue({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),dm=tt(fm),pm=ue({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hm=tt(pm),mm=[9,13,27,32],xs=Lt&&"CompositionEvent"in window,Ir=null;Lt&&"documentMode"in document&&(Ir=document.documentMode);var gm=Lt&&"TextEvent"in window&&!Ir,Uf=Lt&&(!xs||Ir&&8<Ir&&11>=Ir),Au=String.fromCharCode(32),Lu=!1;function Bf(e,t){switch(e){case"keyup":return mm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function vm(e,t){switch(e){case"compositionend":return Vf(t);case"keypress":return t.which!==32?null:(Lu=!0,Au);case"textInput":return e=t.data,e===Au&&Lu?null:e;default:return null}}function ym(e,t){if(bn)return e==="compositionend"||!xs&&Bf(e,t)?(e=Wf(),ji=vs=Bt=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Uf&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ru(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wm[e.type]:t==="textarea"}function Yf(e,t,n,r){Cf(r),t=oo(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ar=null,Yr=null;function xm(e){rd(e,0)}function Ro(e){var t=Dn(e);if(gf(t))return e}function Sm(e,t){if(e==="change")return t}var Xf=!1;if(Lt){var Pl;if(Lt){var Tl="oninput"in document;if(!Tl){var zu=document.createElement("div");zu.setAttribute("oninput","return;"),Tl=typeof zu.oninput=="function"}Pl=Tl}else Pl=!1;Xf=Pl&&(!document.documentMode||9<document.documentMode)}function $u(){Ar&&(Ar.detachEvent("onpropertychange",Qf),Yr=Ar=null)}function Qf(e){if(e.propertyName==="value"&&Ro(Yr)){var t=[];Yf(t,Yr,e,ds(e)),Tf(xm,t)}}function Em(e,t,n){e==="focusin"?($u(),Ar=t,Yr=n,Ar.attachEvent("onpropertychange",Qf)):e==="focusout"&&$u()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ro(Yr)}function km(e,t){if(e==="click")return Ro(t)}function _m(e,t){if(e==="input"||e==="change")return Ro(t)}function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:Pm;function Xr(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kl.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mu(e,t){var n=bu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bu(n)}}function Zf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kf(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function Ss(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tm(e){var t=Kf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zf(n.ownerDocument.documentElement,n)){if(r!==null&&Ss(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Mu(n,o);var l=Mu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Om=Lt&&"documentMode"in document&&11>=document.documentMode,Mn=null,ma=null,Lr=null,ga=!1;function Fu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ga||Mn==null||Mn!==Ji(r)||(r=Mn,"selectionStart"in r&&Ss(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Xr(Lr,r)||(Lr=r,r=oo(ma,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Fn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},Ol={},Gf={};Lt&&(Gf=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function zo(e){if(Ol[e])return Ol[e];if(!Fn[e])return e;var t=Fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gf)return Ol[e]=t[n];return e}var Jf=zo("animationend"),qf=zo("animationiteration"),ed=zo("animationstart"),td=zo("transitionend"),nd=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(e,t){nd.set(e,t),_n(t,[e])}for(var Nl=0;Nl<Du.length;Nl++){var Il=Du[Nl],Nm=Il.toLowerCase(),Im=Il[0].toUpperCase()+Il.slice(1);on(Nm,"on"+Im)}on(Jf,"onAnimationEnd");on(qf,"onAnimationIteration");on(ed,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(td,"onTransitionEnd");qn("onMouseEnter",["mouseout","mouseover"]);qn("onMouseLeave",["mouseout","mouseover"]);qn("onPointerEnter",["pointerout","pointerover"]);qn("onPointerLeave",["pointerout","pointerover"]);_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_n("onBeforeInput",["compositionend","keypress","textInput","paste"]);_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));function ju(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Nh(r,t,void 0,e),e.currentTarget=null}function rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;ju(i,a,u),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;ju(i,a,u),o=s}}}if(eo)throw e=fa,eo=!1,fa=null,e}function ne(e,t){var n=t[Sa];n===void 0&&(n=t[Sa]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Ei]){e[Ei]=!0,ff.forEach(function(n){n!=="selectionchange"&&(Am.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Al("selectionchange",!1,t))}}function id(e,t,n,r){switch(Hf(t)){case 1:var i=Vh;break;case 4:i=Yh;break;default:i=gs}n=i.bind(null,t,n,e),i=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ll(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=dn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Tf(function(){var u=o,f=ds(n),p=[];e:{var h=nd.get(e);if(h!==void 0){var m=ys,v=e;switch(e){case"keypress":if(Hi(n)===0)break e;case"keydown":case"keyup":m=am;break;case"focusin":v="focus",m=_l;break;case"focusout":v="blur",m=_l;break;case"beforeblur":case"afterblur":m=_l;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=cm;break;case Jf:case qf:case ed:m=Jh;break;case td:m=dm;break;case"scroll":m=Xh;break;case"wheel":m=hm;break;case"copy":case"cut":case"paste":m=em;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Iu}var w=(t&4)!==0,C=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var c=u,g;c!==null;){g=c;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,d!==null&&(x=Wr(c,d),x!=null&&w.push(Zr(c,x,g)))),C)break;c=c.return}0<w.length&&(h=new m(h,v,null,n,f),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==sa&&(v=n.relatedTarget||n.fromElement)&&(dn(v)||v[Rt]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?dn(v):null,v!==null&&(C=Pn(v),v!==C||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=Ou,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=Iu,x="onPointerLeave",d="onPointerEnter",c="pointer"),C=m==null?h:Dn(m),g=v==null?h:Dn(v),h=new w(x,c+"leave",m,n,f),h.target=C,h.relatedTarget=g,x=null,dn(f)===u&&(w=new w(d,c+"enter",v,n,f),w.target=g,w.relatedTarget=C,x=w),C=x,m&&v)t:{for(w=m,d=v,c=0,g=w;g;g=Tn(g))c++;for(g=0,x=d;x;x=Tn(x))g++;for(;0<c-g;)w=Tn(w),c--;for(;0<g-c;)d=Tn(d),g--;for(;c--;){if(w===d||d!==null&&w===d.alternate)break t;w=Tn(w),d=Tn(d)}w=null}else w=null;m!==null&&Hu(p,h,m,w,!1),v!==null&&C!==null&&Hu(p,C,v,w,!0)}}e:{if(h=u?Dn(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=Sm;else if(Ru(h))if(Xf)E=_m;else{E=Cm;var O=Em}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=km);if(E&&(E=E(e,u))){Yf(p,E,n,f);break e}O&&O(e,h,u),e==="focusout"&&(O=h._wrapperState)&&O.controlled&&h.type==="number"&&ra(h,"number",h.value)}switch(O=u?Dn(u):window,e){case"focusin":(Ru(O)||O.contentEditable==="true")&&(Mn=O,ma=u,Lr=null);break;case"focusout":Lr=ma=Mn=null;break;case"mousedown":ga=!0;break;case"contextmenu":case"mouseup":case"dragend":ga=!1,Fu(p,n,f);break;case"selectionchange":if(Om)break;case"keydown":case"keyup":Fu(p,n,f)}var I;if(xs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bn?Bf(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Uf&&n.locale!=="ko"&&(bn||N!=="onCompositionStart"?N==="onCompositionEnd"&&bn&&(I=Wf()):(Bt=f,vs="value"in Bt?Bt.value:Bt.textContent,bn=!0)),O=oo(u,N),0<O.length&&(N=new Nu(N,e,null,n,f),p.push({event:N,listeners:O}),I?N.data=I:(I=Vf(n),I!==null&&(N.data=I)))),(I=gm?vm(e,n):ym(e,n))&&(u=oo(u,"onBeforeInput"),0<u.length&&(f=new Nu("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=I))}rd(p,t)})}function Zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Wr(e,n),o!=null&&r.unshift(Zr(e,o,i)),o=Wr(e,t),o!=null&&r.push(Zr(e,o,i))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,i?(s=Wr(n,o),s!=null&&l.unshift(Zr(n,s,a))):i||(s=Wr(n,o),s!=null&&l.push(Zr(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Lm=/\r\n?/g,Rm=/\u0000|\uFFFD/g;function Wu(e){return(typeof e=="string"?e:""+e).replace(Lm,`
`).replace(Rm,"")}function Ci(e,t,n){if(t=Wu(t),Wu(e)!==t&&n)throw Error(k(425))}function lo(){}var va=null,ya=null;function wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,Uu=typeof Promise=="function"?Promise:void 0,$m=typeof queueMicrotask=="function"?queueMicrotask:typeof Uu<"u"?function(e){return Uu.resolve(null).then(e).catch(bm)}:xa;function bm(e){setTimeout(function(){throw e})}function Rl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Vr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+cr,Kr="__reactProps$"+cr,Rt="__reactContainer$"+cr,Sa="__reactEvents$"+cr,Mm="__reactListeners$"+cr,Fm="__reactHandles$"+cr;function dn(e){var t=e[Ct];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[Ct]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bu(e);e!==null;){if(n=e[Ct])return n;e=Bu(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[Ct]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Dn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function $o(e){return e[Kr]||null}var Ea=[],jn=-1;function ln(e){return{current:e}}function ie(e){0>jn||(e.current=Ea[jn],Ea[jn]=null,jn--)}function te(e,t){jn++,Ea[jn]=e.current,e.current=t}var rn={},Fe=ln(rn),Xe=ln(!1),yn=rn;function er(e,t){var n=e.type.contextTypes;if(!n)return rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function ao(){ie(Xe),ie(Fe)}function Vu(e,t,n){if(Fe.current!==rn)throw Error(k(168));te(Fe,t),te(Xe,n)}function od(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(k(108,Eh(e)||"Unknown",i));return ue({},n,r)}function so(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rn,yn=Fe.current,te(Fe,e),te(Xe,Xe.current),!0}function Yu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=od(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,ie(Xe),ie(Fe),te(Fe,e)):ie(Xe),te(Xe,n)}var Ot=null,bo=!1,zl=!1;function ld(e){Ot===null?Ot=[e]:Ot.push(e)}function Dm(e){bo=!0,ld(e)}function an(){if(!zl&&Ot!==null){zl=!0;var e=0,t=G;try{var n=Ot;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ot=null,bo=!1}catch(i){throw Ot!==null&&(Ot=Ot.slice(e+1)),Af(ps,an),i}finally{G=t,zl=!1}}return null}var Hn=[],Wn=0,uo=null,co=0,rt=[],it=0,wn=null,Nt=1,It="";function sn(e,t){Hn[Wn++]=co,Hn[Wn++]=uo,uo=e,co=t}function ad(e,t,n){rt[it++]=Nt,rt[it++]=It,rt[it++]=wn,wn=e;var r=Nt;e=It;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var o=32-vt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Nt=1<<32-vt(t)+i|n<<i|r,It=o+e}else Nt=1<<o|n<<i|r,It=e}function Es(e){e.return!==null&&(sn(e,1),ad(e,1,0))}function Cs(e){for(;e===uo;)uo=Hn[--Wn],Hn[Wn]=null,co=Hn[--Wn],Hn[Wn]=null;for(;e===wn;)wn=rt[--it],rt[it]=null,It=rt[--it],rt[it]=null,Nt=rt[--it],rt[it]=null}var Je=null,Ge=null,oe=!1,mt=null;function sd(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Je=e,Ge=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Je=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=wn!==null?{id:Nt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Je=e,Ge=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(oe){var t=Ge;if(t){var n=t;if(!Xu(e,t)){if(Ca(e))throw Error(k(418));t=Zt(n.nextSibling);var r=Je;t&&Xu(e,t)?sd(r,n):(e.flags=e.flags&-4097|2,oe=!1,Je=e)}}else{if(Ca(e))throw Error(k(418));e.flags=e.flags&-4097|2,oe=!1,Je=e}}}function Qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Je=e}function ki(e){if(e!==Je)return!1;if(!oe)return Qu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wa(e.type,e.memoizedProps)),t&&(t=Ge)){if(Ca(e))throw ud(),Error(k(418));for(;t;)sd(e,t),t=Zt(t.nextSibling)}if(Qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Je?Zt(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=Ge;e;)e=Zt(e.nextSibling)}function tr(){Ge=Je=null,oe=!1}function ks(e){mt===null?mt=[e]:mt.push(e)}var jm=bt.ReactCurrentBatchConfig;function pt(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var fo=ln(null),po=null,Un=null,_s=null;function Ps(){_s=Un=po=null}function Ts(e){var t=fo.current;ie(fo),e._currentValue=t}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Gn(e,t){po=e,_s=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(_s!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(po===null)throw Error(k(308));Un=e,po.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var pn=null;function Os(e){pn===null?pn=[e]:pn.push(e)}function cd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Os(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,Os(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function Zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var i=e.updateQueue;Ht=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=s))}if(o!==null){var p=i.baseState;l=0,f=u=s=null,a=o;do{var h=a.lane,m=a.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(h=t,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(m,p,h);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(m,p,h):v,h==null)break e;p=ue({},p,h);break e;case 2:Ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=m,s=p):f=f.next=m,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(s=p),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Sn|=l,e.lanes=l,e.memoizedState=p}}function Ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var dd=new cf.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=Jt(e),o=At(r,i);o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(yt(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=Jt(e),o=At(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Kt(e,o,i),t!==null&&(yt(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=Jt(e),i=At(n,r);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,r),t!==null&&(yt(t,e,r,n),Wi(t,e,r))}};function Gu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(i,o):!0}function pd(e,t,n){var r=!1,i=rn,o=t.contextType;return typeof o=="object"&&o!==null?o=at(o):(i=Qe(t)?yn:Fe.current,r=t.contextTypes,o=(r=r!=null)?er(e,i):rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ju(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Ta(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=dd,Ns(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=at(o):(o=Qe(t)?yn:Fe.current,i.context=er(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Pa(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mo.enqueueReplaceState(i,i.state,null),ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===dd&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qu(e){var t=e._init;return t(e._payload)}function hd(e){function t(d,c){if(e){var g=d.deletions;g===null?(d.deletions=[c],d.flags|=16):g.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=qt(d,c),d.index=0,d.sibling=null,d}function o(d,c,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<c?(d.flags|=2,c):g):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,g,x){return c===null||c.tag!==6?(c=Hl(g,d.mode,x),c.return=d,c):(c=i(c,g),c.return=d,c)}function s(d,c,g,x){var E=g.type;return E===$n?f(d,c,g.props.children,x,g.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&qu(E)===c.type)?(x=i(c,g.props),x.ref=yr(d,c,g),x.return=d,x):(x=Qi(g.type,g.key,g.props,null,d.mode,x),x.ref=yr(d,c,g),x.return=d,x)}function u(d,c,g,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==g.containerInfo||c.stateNode.implementation!==g.implementation?(c=Wl(g,d.mode,x),c.return=d,c):(c=i(c,g.children||[]),c.return=d,c)}function f(d,c,g,x,E){return c===null||c.tag!==7?(c=vn(g,d.mode,x,E),c.return=d,c):(c=i(c,g),c.return=d,c)}function p(d,c,g){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Hl(""+c,d.mode,g),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hi:return g=Qi(c.type,c.key,c.props,null,d.mode,g),g.ref=yr(d,null,c),g.return=d,g;case zn:return c=Wl(c,d.mode,g),c.return=d,c;case jt:var x=c._init;return p(d,x(c._payload),g)}if(Er(c)||pr(c))return c=vn(c,d.mode,g,null),c.return=d,c;_i(d,c)}return null}function h(d,c,g,x){var E=c!==null?c.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(d,c,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case hi:return g.key===E?s(d,c,g,x):null;case zn:return g.key===E?u(d,c,g,x):null;case jt:return E=g._init,h(d,c,E(g._payload),x)}if(Er(g)||pr(g))return E!==null?null:f(d,c,g,x,null);_i(d,g)}return null}function m(d,c,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(g)||null,a(c,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case hi:return d=d.get(x.key===null?g:x.key)||null,s(c,d,x,E);case zn:return d=d.get(x.key===null?g:x.key)||null,u(c,d,x,E);case jt:var O=x._init;return m(d,c,g,O(x._payload),E)}if(Er(x)||pr(x))return d=d.get(g)||null,f(c,d,x,E,null);_i(c,x)}return null}function v(d,c,g,x){for(var E=null,O=null,I=c,N=c=0,H=null;I!==null&&N<g.length;N++){I.index>N?(H=I,I=null):H=I.sibling;var M=h(d,I,g[N],x);if(M===null){I===null&&(I=H);break}e&&I&&M.alternate===null&&t(d,I),c=o(M,c,N),O===null?E=M:O.sibling=M,O=M,I=H}if(N===g.length)return n(d,I),oe&&sn(d,N),E;if(I===null){for(;N<g.length;N++)I=p(d,g[N],x),I!==null&&(c=o(I,c,N),O===null?E=I:O.sibling=I,O=I);return oe&&sn(d,N),E}for(I=r(d,I);N<g.length;N++)H=m(I,d,N,g[N],x),H!==null&&(e&&H.alternate!==null&&I.delete(H.key===null?N:H.key),c=o(H,c,N),O===null?E=H:O.sibling=H,O=H);return e&&I.forEach(function(ce){return t(d,ce)}),oe&&sn(d,N),E}function w(d,c,g,x){var E=pr(g);if(typeof E!="function")throw Error(k(150));if(g=E.call(g),g==null)throw Error(k(151));for(var O=E=null,I=c,N=c=0,H=null,M=g.next();I!==null&&!M.done;N++,M=g.next()){I.index>N?(H=I,I=null):H=I.sibling;var ce=h(d,I,M.value,x);if(ce===null){I===null&&(I=H);break}e&&I&&ce.alternate===null&&t(d,I),c=o(ce,c,N),O===null?E=ce:O.sibling=ce,O=ce,I=H}if(M.done)return n(d,I),oe&&sn(d,N),E;if(I===null){for(;!M.done;N++,M=g.next())M=p(d,M.value,x),M!==null&&(c=o(M,c,N),O===null?E=M:O.sibling=M,O=M);return oe&&sn(d,N),E}for(I=r(d,I);!M.done;N++,M=g.next())M=m(I,d,N,M.value,x),M!==null&&(e&&M.alternate!==null&&I.delete(M.key===null?N:M.key),c=o(M,c,N),O===null?E=M:O.sibling=M,O=M);return e&&I.forEach(function(le){return t(d,le)}),oe&&sn(d,N),E}function C(d,c,g,x){if(typeof g=="object"&&g!==null&&g.type===$n&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case hi:e:{for(var E=g.key,O=c;O!==null;){if(O.key===E){if(E=g.type,E===$n){if(O.tag===7){n(d,O.sibling),c=i(O,g.props.children),c.return=d,d=c;break e}}else if(O.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&qu(E)===O.type){n(d,O.sibling),c=i(O,g.props),c.ref=yr(d,O,g),c.return=d,d=c;break e}n(d,O);break}else t(d,O);O=O.sibling}g.type===$n?(c=vn(g.props.children,d.mode,x,g.key),c.return=d,d=c):(x=Qi(g.type,g.key,g.props,null,d.mode,x),x.ref=yr(d,c,g),x.return=d,d=x)}return l(d);case zn:e:{for(O=g.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===g.containerInfo&&c.stateNode.implementation===g.implementation){n(d,c.sibling),c=i(c,g.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Wl(g,d.mode,x),c.return=d,d=c}return l(d);case jt:return O=g._init,C(d,c,O(g._payload),x)}if(Er(g))return v(d,c,g,x);if(pr(g))return w(d,c,g,x);_i(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,g),c.return=d,d=c):(n(d,c),c=Hl(g,d.mode,x),c.return=d,d=c),l(d)):n(d,c)}return C}var nr=hd(!0),md=hd(!1),fi={},_t=ln(fi),Gr=ln(fi),Jr=ln(fi);function hn(e){if(e===fi)throw Error(k(174));return e}function Is(e,t){switch(te(Jr,t),te(Gr,e),te(_t,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}ie(_t),te(_t,t)}function rr(){ie(_t),ie(Gr),ie(Jr)}function gd(e){hn(Jr.current);var t=hn(_t.current),n=oa(t,e.type);t!==n&&(te(Gr,e),te(_t,n))}function As(e){Gr.current===e&&(ie(_t),ie(Gr))}var ae=ln(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Ls(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Ui=bt.ReactCurrentDispatcher,bl=bt.ReactCurrentBatchConfig,xn=0,se=null,ve=null,Se=null,go=!1,Rr=!1,qr=0,Hm=0;function ze(){throw Error(k(321))}function Rs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function zs(e,t,n,r,i,o){if(xn=o,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Vm:Ym,e=n(r,i),Rr){o=0;do{if(Rr=!1,qr=0,25<=o)throw Error(k(301));o+=1,Se=ve=null,t.updateQueue=null,Ui.current=Xm,e=n(r,i)}while(Rr)}if(Ui.current=vo,t=ve!==null&&ve.next!==null,xn=0,Se=ve=se=null,go=!1,t)throw Error(k(300));return e}function $s(){var e=qr!==0;return qr=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?se.memoizedState=Se=e:Se=Se.next=e,Se}function st(){if(ve===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Se===null?se.memoizedState:Se.next;if(t!==null)Se=t,ve=e;else{if(e===null)throw Error(k(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?se.memoizedState=Se=e:Se=Se.next=e}return Se}function ei(e,t){return typeof t=="function"?t(e):t}function Ml(e){var t=st(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ve,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,u=o;do{var f=u.lane;if((xn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,se.lanes|=f,Sn|=f}u=u.next}while(u!==null&&u!==o);s===null?l=r:s.next=a,wt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,se.lanes|=o,Sn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Fl(e){var t=st(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);wt(o,t.memoizedState)||(Ye=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vd(){}function yd(e,t){var n=se,r=st(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,bs(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,ti(9,xd.bind(null,n,r,i,t),void 0,null),Ee===null)throw Error(k(349));xn&30||wd(n,t,i)}return i}function wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xd(e,t,n,r){t.value=n,t.getSnapshot=r,Ed(t)&&Cd(e)}function Sd(e,t,n){return n(function(){Ed(t)&&Cd(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Cd(e){var t=zt(e,1);t!==null&&yt(t,e,1,-1)}function ec(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:e},t.queue=e,e=e.dispatch=Bm.bind(null,se,e),[t.memoizedState,e]}function ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function kd(){return st().memoizedState}function Bi(e,t,n,r){var i=Et();se.flags|=e,i.memoizedState=ti(1|t,n,void 0,r===void 0?null:r)}function Fo(e,t,n,r){var i=st();r=r===void 0?null:r;var o=void 0;if(ve!==null){var l=ve.memoizedState;if(o=l.destroy,r!==null&&Rs(r,l.deps)){i.memoizedState=ti(t,n,o,r);return}}se.flags|=e,i.memoizedState=ti(1|t,n,o,r)}function tc(e,t){return Bi(8390656,8,e,t)}function bs(e,t){return Fo(2048,8,e,t)}function _d(e,t){return Fo(4,2,e,t)}function Pd(e,t){return Fo(4,4,e,t)}function Td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4,4,Td.bind(null,t,e),n)}function Ms(){}function Nd(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Id(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ad(e,t,n){return xn&21?(wt(n,t)||(n=zf(),se.lanes|=n,Sn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function Wm(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=bl.transition;bl.transition={};try{e(!1),t()}finally{G=n,bl.transition=r}}function Ld(){return st().memoizedState}function Um(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rd(e))zd(t,n);else if(n=cd(e,t,n,r),n!==null){var i=He();yt(n,e,r,i),$d(n,t,r)}}function Bm(e,t,n){var r=Jt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))zd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,wt(a,l)){var s=t.interleaved;s===null?(i.next=i,Os(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=cd(e,t,i,r),n!==null&&(i=He(),yt(n,e,r,i),$d(n,t,r))}}function Rd(e){var t=e.alternate;return e===se||t!==null&&t===se}function zd(e,t){Rr=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var vo={readContext:at,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Vm={readContext:at,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Bi(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Bi(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Um.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:ec,useDebugValue:Ms,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=ec(!1),t=e[0];return e=Wm.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Et();if(oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),Ee===null)throw Error(k(349));xn&30||wd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,tc(Sd.bind(null,r,o,e),[e]),r.flags|=2048,ti(9,xd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=Ee.identifierPrefix;if(oe){var n=It,r=Nt;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Hm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:at,useCallback:Nd,useContext:at,useEffect:bs,useImperativeHandle:Od,useInsertionEffect:_d,useLayoutEffect:Pd,useMemo:Id,useReducer:Ml,useRef:kd,useState:function(){return Ml(ei)},useDebugValue:Ms,useDeferredValue:function(e){var t=st();return Ad(t,ve.memoizedState,e)},useTransition:function(){var e=Ml(ei)[0],t=st().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1},Xm={readContext:at,useCallback:Nd,useContext:at,useEffect:bs,useImperativeHandle:Od,useInsertionEffect:_d,useLayoutEffect:Pd,useMemo:Id,useReducer:Fl,useRef:kd,useState:function(){return Fl(ei)},useDebugValue:Ms,useDeferredValue:function(e){var t=st();return ve===null?t.memoizedState=e:Ad(t,ve.memoizedState,e)},useTransition:function(){var e=Fl(ei)[0],t=st().memoizedState;return[e,t]},useMutableSource:vd,useSyncExternalStore:yd,useId:Ld,unstable_isNewReconciler:!1};function ir(e,t){try{var n="",r=t;do n+=Sh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function bd(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,Fa=r),Oa(e,t)},n}function Md(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Oa(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oa(e,t),typeof r!="function"&&(Gt===null?Gt=new Set([this]):Gt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function nc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=sg.bind(null,e,t,n),t.then(e,e))}function rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ic(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Kt(n,t,1))),n.lanes|=1),e)}var Zm=bt.ReactCurrentOwner,Ye=!1;function De(e,t,n,r){t.child=e===null?md(t,null,n,r):nr(t,e.child,n,r)}function oc(e,t,n,r,i){n=n.render;var o=t.ref;return Gn(t,i),r=zs(e,t,n,r,o,i),n=$s(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(oe&&n&&Es(t),t.flags|=1,De(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Fd(e,t,o,r,i)):(e=Qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(l,r)&&e.ref===t.ref)return $t(e,t,i)}return t.flags|=1,e=qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xr(o,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,$t(e,t,i)}return Na(e,t,n,r,i)}function Dd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Vn,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Vn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,te(Vn,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,te(Vn,Ke),Ke|=r;return De(e,t,i,n),t.child}function jd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Na(e,t,n,r,i){var o=Qe(n)?yn:Fe.current;return o=er(t,o),Gn(t,i),n=zs(e,t,n,r,o,i),r=$s(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,$t(e,t,i)):(oe&&r&&Es(t),t.flags|=1,De(e,t,n,i),t.child)}function ac(e,t,n,r,i){if(Qe(n)){var o=!0;so(t)}else o=!1;if(Gn(t,i),t.stateNode===null)Vi(e,t),pd(t,n,r),Ta(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Qe(n)?yn:Fe.current,u=er(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ju(t,l,r,u),Ht=!1;var h=t.memoizedState;l.state=h,ho(t,r,l,i),s=t.memoizedState,a!==r||h!==s||Xe.current||Ht?(typeof f=="function"&&(Pa(t,n,f,r),s=t.memoizedState),(a=Ht||Gu(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fd(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:pt(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=at(s):(s=Qe(n)?yn:Fe.current,s=er(t,s));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&Ju(t,l,r,s),Ht=!1,h=t.memoizedState,l.state=h,ho(t,r,l,i);var v=t.memoizedState;a!==p||h!==v||Xe.current||Ht?(typeof m=="function"&&(Pa(t,n,m,r),v=t.memoizedState),(u=Ht||Gu(t,n,u,r,h,v,s)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ia(e,t,n,r,o,i)}function Ia(e,t,n,r,i,o){jd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Yu(t,n,!1),$t(e,t,o);r=t.stateNode,Zm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=nr(t,e.child,null,o),t.child=nr(t,null,a,o)):De(e,t,a,o),t.memoizedState=r.state,i&&Yu(t,n,!0),t.child}function Hd(e){var t=e.stateNode;t.pendingContext?Vu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vu(e,t.context,!1),Is(e,t.containerInfo)}function sc(e,t,n,r,i){return tr(),ks(i),t.flags|=256,De(e,t,n,r),t.child}var Aa={dehydrated:null,treeContext:null,retryLane:0};function La(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wd(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),te(ae,i&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ho(l,r,0,null),e=vn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=La(n),t.memoizedState=Aa,e):Fs(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Km(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=qt(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=qt(a,o):(o=vn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?La(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Aa,r}return o=e.child,e=o.sibling,r=qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fs(e,t){return t=Ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pi(e,t,n,r){return r!==null&&ks(r),nr(t,e.child,null,n),e=Fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Km(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(k(422))),Pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ho({mode:"visible",children:r.children},i,0,null),o=vn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&nr(t,e.child,null,l),t.child.memoizedState=La(l),t.memoizedState=Aa,o);if(!(t.mode&1))return Pi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(k(419)),r=Dl(o,r,void 0),Pi(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ye||a){if(r=Ee,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,zt(e,i),yt(r,e,i,-1))}return Bs(),r=Dl(Error(k(421))),Pi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ug.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ge=Zt(i.nextSibling),Je=t,oe=!0,mt=null,e!==null&&(rt[it++]=Nt,rt[it++]=It,rt[it++]=wn,Nt=e.id,It=e.overflow,wn=t),t=Fs(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function jl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ud(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(De(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jl(t,!0,n,null,o);break;case"together":jl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Sn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Gm(e,t,n){switch(t.tag){case 3:Hd(t),tr();break;case 5:gd(t);break;case 1:Qe(t.type)&&so(t);break;case 4:Is(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;te(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?Wd(e,t,n):(te(ae,ae.current&1),e=$t(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ud(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,Dd(e,t,n)}return $t(e,t,n)}var Bd,Ra,Vd,Yd;Bd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ra=function(){};Vd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hn(_t.current);var o=null;switch(n){case"input":i=ta(e,i),r=ta(e,r),o=[];break;case"select":i=ue({},i,{value:void 0}),r=ue({},r,{value:void 0}),o=[];break;case"textarea":i=ia(e,i),r=ia(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=lo)}la(n,r);var l;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),o||a===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function wr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jm(e,t,n){var r=t.pendingProps;switch(Cs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Qe(t.type)&&ao(),$e(t),null;case 3:return r=t.stateNode,rr(),ie(Xe),ie(Fe),Ls(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Ha(mt),mt=null))),Ra(e,t),$e(t),null;case 5:As(t);var i=hn(Jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Vd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return $e(t),null}if(e=hn(_t.current),ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ct]=t,r[Kr]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<kr.length;i++)ne(kr[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":yu(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":xu(r,o),ne("invalid",r)}la(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ci(r.textContent,a,e),i=["children",""+a]):jr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":mi(r),wu(r,o,!0);break;case"textarea":mi(r),Su(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ct]=t,e[Kr]=r,Bd(e,t,!1,!1),t.stateNode=e;e:{switch(l=aa(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<kr.length;i++)ne(kr[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":yu(e,r),i=ta(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":xu(e,r),i=ia(e,r),ne("invalid",e);break;default:i=r}la(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Ef(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&xf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Hr(e,s):typeof s=="number"&&Hr(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jr.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ne("scroll",e):s!=null&&ss(e,o,s,l))}switch(n){case"input":mi(e),wu(e,r,!1);break;case"textarea":mi(e),Su(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)Yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=hn(Jr.current),hn(_t.current),ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ct]=t,(o=r.nodeValue!==n)&&(e=Je,e!==null))switch(e.tag){case 3:Ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ci(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return $e(t),null;case 13:if(ie(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&t.mode&1&&!(t.flags&128))ud(),tr(),t.flags|=98560,o=!1;else if(o=ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ct]=t}else tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else mt!==null&&(Ha(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):Bs())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return rr(),Ra(e,t),e===null&&Qr(t.stateNode.containerInfo),$e(t),null;case 10:return Ts(t.type._context),$e(t),null;case 17:return Qe(t.type)&&ao(),$e(t),null;case 19:if(ie(ae),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)wr(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=mo(e),l!==null){for(t.flags|=128,wr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&me()>or&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304)}else{if(!r)if(e=mo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!oe)return $e(t),null}else 2*me()-o.renderingStartTime>or&&n!==1073741824&&(t.flags|=128,r=!0,wr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=me(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Us(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function qm(e,t){switch(Cs(t),t.tag){case 1:return Qe(t.type)&&ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rr(),ie(Xe),ie(Fe),Ls(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return As(t),null;case 13:if(ie(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ie(ae),null;case 4:return rr(),null;case 10:return Ts(t.type._context),null;case 22:case 23:return Us(),null;case 24:return null;default:return null}}var Ti=!1,Me=!1,eg=typeof WeakSet=="function"?WeakSet:Set,$=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function za(e,t,n){try{n()}catch(r){de(e,t,r)}}var cc=!1;function tg(e,t){if(va=ro,e=Kf(),Ss(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,f=0,p=e,h=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(a=l+i),p!==o||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(m=p.firstChild)!==null;)h=p,p=m;for(;;){if(p===e)break t;if(h===n&&++u===i&&(a=l),h===o&&++f===r&&(s=l),(m=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=m}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ya={focusedElem:e,selectionRange:n},ro=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,C=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:pt(t.type,w),C);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){de(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return v=cc,cc=!1,v}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&za(t,n,o)}i=i.next}while(i!==r)}}function Do(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function $a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xd(e){var t=e.alternate;t!==null&&(e.alternate=null,Xd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[Kr],delete t[Sa],delete t[Mm],delete t[Fm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qd(e){return e.tag===5||e.tag===3||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ba(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=lo));else if(r!==4&&(e=e.child,e!==null))for(ba(e,t,n),e=e.sibling;e!==null;)ba(e,t,n),e=e.sibling}function Ma(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ma(e,t,n),e=e.sibling;e!==null;)Ma(e,t,n),e=e.sibling}var Ne=null,ht=!1;function Dt(e,t,n){for(n=n.child;n!==null;)Zd(e,t,n),n=n.sibling}function Zd(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ao,n)}catch{}switch(n.tag){case 5:Me||Bn(n,t);case 6:var r=Ne,i=ht;Ne=null,Dt(e,t,n),Ne=r,ht=i,Ne!==null&&(ht?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(ht?(e=Ne,n=n.stateNode,e.nodeType===8?Rl(e.parentNode,n):e.nodeType===1&&Rl(e,n),Vr(e)):Rl(Ne,n.stateNode));break;case 4:r=Ne,i=ht,Ne=n.stateNode.containerInfo,ht=!0,Dt(e,t,n),Ne=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&za(n,t,l),i=i.next}while(i!==r)}Dt(e,t,n);break;case 1:if(!Me&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){de(n,t,a)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Dt(e,t,n),Me=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var i=cg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,ht=!1;break e;case 3:Ne=a.stateNode.containerInfo,ht=!0;break e;case 4:Ne=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(Ne===null)throw Error(k(160));Zd(o,l,i),Ne=null,ht=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kd(t,e),t=t.sibling}function Kd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{zr(3,e,e.return),Do(3,e)}catch(w){de(e,e.return,w)}try{zr(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:dt(t,e),St(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(dt(t,e),St(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var i=e.stateNode;try{Hr(i,"")}catch(w){de(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vf(i,o),aa(a,l);var u=aa(a,o);for(l=0;l<s.length;l+=2){var f=s[l],p=s[l+1];f==="style"?Ef(i,p):f==="dangerouslySetInnerHTML"?xf(i,p):f==="children"?Hr(i,p):ss(i,f,p,u)}switch(a){case"input":na(i,o);break;case"textarea":yf(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Xn(i,!!o.multiple,m,!1):h!==!!o.multiple&&(o.defaultValue!=null?Xn(i,!!o.multiple,o.defaultValue,!0):Xn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Kr]=o}catch(w){de(e,e.return,w)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(k(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){de(e,e.return,w)}}break;case 3:if(dt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vr(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Hs=me())),r&4&&dc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||f,dt(t,e),Me=u):dt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for($=e,f=e.child;f!==null;){for(p=$=f;$!==null;){switch(h=$,m=h.child,h.tag){case 0:case 11:case 14:case 15:zr(4,h,h.return);break;case 1:Bn(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){de(r,n,w)}}break;case 5:Bn(h,h.return);break;case 22:if(h.memoizedState!==null){hc(p);continue}}m!==null?(m.return=h,$=m):hc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Sf("display",l))}catch(w){de(e,e.return,w)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){de(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dt(t,e),St(e),r&4&&dc(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qd(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var o=fc(e);Ma(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=fc(e);ba(e,a,l);break;default:throw Error(k(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ng(e,t,n){$=e,Gd(e)}function Gd(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var i=$,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ti;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Me;a=Ti;var u=Me;if(Ti=l,(Me=s)&&!u)for($=i;$!==null;)l=$,s=l.child,l.tag===22&&l.memoizedState!==null?mc(i):s!==null?(s.return=l,$=s):mc(i);for(;o!==null;)$=o,Gd(o),o=o.sibling;$=i,Ti=a,Me=u}pc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,$=o):pc(e)}}function pc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Do(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ku(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ku(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Vr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Me||t.flags&512&&$a(t)}catch(h){de(t,t.return,h)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function hc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function mc(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Do(4,t)}catch(s){de(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){de(t,i,s)}}var o=t.return;try{$a(t)}catch(s){de(t,o,s)}break;case 5:var l=t.return;try{$a(t)}catch(s){de(t,l,s)}}}catch(s){de(t,t.return,s)}if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}var rg=Math.ceil,yo=bt.ReactCurrentDispatcher,Ds=bt.ReactCurrentOwner,lt=bt.ReactCurrentBatchConfig,Y=0,Ee=null,ge=null,Ae=0,Ke=0,Vn=ln(0),ye=0,ni=null,Sn=0,jo=0,js=0,$r=null,Ve=null,Hs=0,or=1/0,Tt=null,wo=!1,Fa=null,Gt=null,Oi=!1,Vt=null,xo=0,br=0,Da=null,Yi=-1,Xi=0;function He(){return Y&6?me():Yi!==-1?Yi:Yi=me()}function Jt(e){return e.mode&1?Y&2&&Ae!==0?Ae&-Ae:jm.transition!==null?(Xi===0&&(Xi=zf()),Xi):(e=G,e!==0||(e=window.event,e=e===void 0?16:Hf(e.type)),e):1}function yt(e,t,n,r){if(50<br)throw br=0,Da=null,Error(k(185));si(e,n,r),(!(Y&2)||e!==Ee)&&(e===Ee&&(!(Y&2)&&(jo|=n),ye===4&&Ut(e,Ae)),Ze(e,r),n===1&&Y===0&&!(t.mode&1)&&(or=me()+500,bo&&an()))}function Ze(e,t){var n=e.callbackNode;jh(e,t);var r=no(e,e===Ee?Ae:0);if(r===0)n!==null&&ku(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ku(n),t===1)e.tag===0?Dm(gc.bind(null,e)):ld(gc.bind(null,e)),$m(function(){!(Y&6)&&an()}),n=null;else{switch($f(r)){case 1:n=ps;break;case 4:n=Lf;break;case 16:n=to;break;case 536870912:n=Rf;break;default:n=to}n=op(n,Jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jd(e,t){if(Yi=-1,Xi=0,Y&6)throw Error(k(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=no(e,e===Ee?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=Y;Y|=2;var o=ep();(Ee!==e||Ae!==t)&&(Tt=null,or=me()+500,gn(e,t));do try{lg();break}catch(a){qd(e,a)}while(1);Ps(),yo.current=o,Y=i,ge!==null?t=0:(Ee=null,Ae=0,t=ye)}if(t!==0){if(t===2&&(i=da(e),i!==0&&(r=i,t=ja(e,i))),t===1)throw n=ni,gn(e,0),Ut(e,r),Ze(e,me()),n;if(t===6)Ut(e,r);else{if(i=e.current.alternate,!(r&30)&&!ig(i)&&(t=So(e,r),t===2&&(o=da(e),o!==0&&(r=o,t=ja(e,o))),t===1))throw n=ni,gn(e,0),Ut(e,r),Ze(e,me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:un(e,Ve,Tt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=Hs+500-me(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xa(un.bind(null,e,Ve,Tt),t);break}un(e,Ve,Tt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-vt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rg(r/1960))-r,10<r){e.timeoutHandle=xa(un.bind(null,e,Ve,Tt),r);break}un(e,Ve,Tt);break;case 5:un(e,Ve,Tt);break;default:throw Error(k(329))}}}return Ze(e,me()),e.callbackNode===n?Jd.bind(null,e):null}function ja(e,t){var n=$r;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=So(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&Ha(t)),e}function Ha(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function ig(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~js,t&=~jo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if(Y&6)throw Error(k(327));Jn();var t=no(e,0);if(!(t&1))return Ze(e,me()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=da(e);r!==0&&(t=r,n=ja(e,r))}if(n===1)throw n=ni,gn(e,0),Ut(e,t),Ze(e,me()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Ve,Tt),Ze(e,me()),null}function Ws(e,t){var n=Y;Y|=1;try{return e(t)}finally{Y=n,Y===0&&(or=me()+500,bo&&an())}}function En(e){Vt!==null&&Vt.tag===0&&!(Y&6)&&Jn();var t=Y;Y|=1;var n=lt.transition,r=G;try{if(lt.transition=null,G=1,e)return e()}finally{G=r,lt.transition=n,Y=t,!(Y&6)&&an()}}function Us(){Ke=Vn.current,ie(Vn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,zm(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Cs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ao();break;case 3:rr(),ie(Xe),ie(Fe),Ls();break;case 5:As(r);break;case 4:rr();break;case 13:ie(ae);break;case 19:ie(ae);break;case 10:Ts(r.type._context);break;case 22:case 23:Us()}n=n.return}if(Ee=e,ge=e=qt(e.current,null),Ae=Ke=t,ye=0,ni=null,js=jo=Sn=0,Ve=$r=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}pn=null}return e}function qd(e,t){do{var n=ge;try{if(Ps(),Ui.current=vo,go){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(xn=0,Se=ve=se=null,Rr=!1,qr=0,Ds.current=null,n===null||n.return===null){ye=1,ni=t,ge=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=a,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=rc(l);if(m!==null){m.flags&=-257,ic(m,l,a,o,t),m.mode&1&&nc(o,u,t),t=m,s=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(s),t.updateQueue=w}else v.add(s);break e}else{if(!(t&1)){nc(o,u,t),Bs();break e}s=Error(k(426))}}else if(oe&&a.mode&1){var C=rc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),ic(C,l,a,o,t),ks(ir(s,a));break e}}o=s=ir(s,a),ye!==4&&(ye=2),$r===null?$r=[o]:$r.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=bd(o,s,t);Zu(o,d);break e;case 1:a=s;var c=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Gt===null||!Gt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Md(o,a,t);Zu(o,x);break e}}o=o.return}while(o!==null)}np(n)}catch(E){t=E,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function ep(){var e=yo.current;return yo.current=vo,e===null?vo:e}function Bs(){(ye===0||ye===3||ye===2)&&(ye=4),Ee===null||!(Sn&268435455)&&!(jo&268435455)||Ut(Ee,Ae)}function So(e,t){var n=Y;Y|=2;var r=ep();(Ee!==e||Ae!==t)&&(Tt=null,gn(e,t));do try{og();break}catch(i){qd(e,i)}while(1);if(Ps(),Y=n,yo.current=r,ge!==null)throw Error(k(261));return Ee=null,Ae=0,ye}function og(){for(;ge!==null;)tp(ge)}function lg(){for(;ge!==null&&!Ah();)tp(ge)}function tp(e){var t=ip(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?np(e):ge=t,Ds.current=null}function np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qm(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,ge=null;return}}else if(n=Jm(n,t,Ke),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ye===0&&(ye=5)}function un(e,t,n){var r=G,i=lt.transition;try{lt.transition=null,G=1,ag(e,t,n,r)}finally{lt.transition=i,G=r}return null}function ag(e,t,n,r){do Jn();while(Vt!==null);if(Y&6)throw Error(k(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Hh(e,o),e===Ee&&(ge=Ee=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,op(to,function(){return Jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=lt.transition,lt.transition=null;var l=G;G=1;var a=Y;Y|=4,Ds.current=null,tg(e,n),Kd(n,e),Tm(ya),ro=!!va,ya=va=null,e.current=n,ng(n),Lh(),Y=a,G=l,lt.transition=o}else e.current=n;if(Oi&&(Oi=!1,Vt=e,xo=i),o=e.pendingLanes,o===0&&(Gt=null),$h(n.stateNode),Ze(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Fa,Fa=null,e;return xo&1&&e.tag!==0&&Jn(),o=e.pendingLanes,o&1?e===Da?br++:(br=0,Da=e):br=0,an(),null}function Jn(){if(Vt!==null){var e=$f(xo),t=lt.transition,n=G;try{if(lt.transition=null,G=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,xo=0,Y&6)throw Error(k(331));var i=Y;for(Y|=4,$=e.current;$!==null;){var o=$,l=o.child;if($.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for($=u;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:zr(8,f,o)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var h=f.sibling,m=f.return;if(Xd(f),f===u){$=null;break}if(h!==null){h.return=m,$=h;break}$=m}}}var v=o.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,$=l;else e:for(;$!==null;){if(o=$,o.flags&2048)switch(o.tag){case 0:case 11:case 15:zr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,$=d;break e}$=o.return}}var c=e.current;for($=c;$!==null;){l=$;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,$=g;else e:for(l=c;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Do(9,a)}}catch(E){de(a,a.return,E)}if(a===l){$=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,$=x;break e}$=a.return}}if(Y=i,an(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ao,e)}catch{}r=!0}return r}finally{G=n,lt.transition=t}}return!1}function vc(e,t,n){t=ir(n,t),t=bd(e,t,1),e=Kt(e,t,1),t=He(),e!==null&&(si(e,1,t),Ze(e,t))}function de(e,t,n){if(e.tag===3)vc(e,e,n);else for(;t!==null;){if(t.tag===3){vc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gt===null||!Gt.has(r))){e=ir(n,e),e=Md(t,e,1),t=Kt(t,e,1),e=He(),t!==null&&(si(t,1,e),Ze(t,e));break}}t=t.return}}function sg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Ae&n)===n&&(ye===4||ye===3&&(Ae&130023424)===Ae&&500>me()-Hs?gn(e,0):js|=n),Ze(e,t)}function rp(e,t){t===0&&(e.mode&1?(t=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):t=1);var n=He();e=zt(e,t),e!==null&&(si(e,t,n),Ze(e,n))}function ug(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rp(e,n)}function cg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),rp(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Gm(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,oe&&t.flags&1048576&&ad(t,co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vi(e,t),e=t.pendingProps;var i=er(t,Fe.current);Gn(t,n),i=zs(null,t,r,e,i,n);var o=$s();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,so(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ns(t),i.updater=Mo,t.stateNode=i,i._reactInternals=t,Ta(t,r,e,n),t=Ia(null,t,r,!0,o,n)):(t.tag=0,oe&&o&&Es(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=dg(r),e=pt(r,e),i){case 0:t=Na(null,t,r,e,n);break e;case 1:t=ac(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=lc(null,t,r,pt(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ac(e,t,r,i,n);case 3:e:{if(Hd(t),e===null)throw Error(k(387));r=t.pendingProps,o=t.memoizedState,i=o.element,fd(e,t),ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ir(Error(k(423)),t),t=sc(e,t,r,n,i);break e}else if(r!==i){i=ir(Error(k(424)),t),t=sc(e,t,r,n,i);break e}else for(Ge=Zt(t.stateNode.containerInfo.firstChild),Je=t,oe=!0,mt=null,n=md(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tr(),r===i){t=$t(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return gd(t),e===null&&ka(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,wa(r,i)?l=null:o!==null&&wa(r,o)&&(t.flags|=32),jd(e,t),De(e,t,l,n),t.child;case 6:return e===null&&ka(t),null;case 13:return Wd(e,t,n);case 4:return Is(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nr(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),oc(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,te(fo,r._currentValue),r._currentValue=l,o!==null)if(wt(o.value,l)){if(o.children===i.children&&!Xe.current){t=$t(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=At(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),_a(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),_a(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Gn(t,n),i=at(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),lc(e,t,r,i,n);case 15:return Fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),Vi(e,t),t.tag=1,Qe(r)?(e=!0,so(t)):e=!1,Gn(t,n),pd(t,r,i),Ta(t,r,i,n),Ia(null,t,r,!0,e,n);case 19:return Ud(e,t,n);case 22:return Dd(e,t,n)}throw Error(k(156,t.tag))};function op(e,t){return Af(e,t)}function fg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new fg(e,t,n,r)}function Vs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dg(e){if(typeof e=="function")return Vs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cs)return 11;if(e===fs)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Vs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case $n:return vn(n.children,i,o,t);case us:l=8,i|=8;break;case Gl:return e=ot(12,n,t,i|2),e.elementType=Gl,e.lanes=o,e;case Jl:return e=ot(13,n,t,i),e.elementType=Jl,e.lanes=o,e;case ql:return e=ot(19,n,t,i),e.elementType=ql,e.lanes=o,e;case hf:return Ho(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case df:l=10;break e;case pf:l=9;break e;case cs:l=11;break e;case fs:l=14;break e;case jt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ot(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function vn(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function Ho(e,t,n,r){return e=ot(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,i,o,l,a,s){return e=new pg(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(o),e}function hg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lp(e){if(!e)return rn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Qe(n))return od(e,n,t)}return t}function ap(e,t,n,r,i,o,l,a,s){return e=Ys(n,r,!0,e,i,o,l,a,s),e.context=lp(null),n=e.current,r=He(),i=Jt(n),o=At(r,i),o.callback=t??null,Kt(n,o,i),e.current.lanes=i,si(e,i,r),Ze(e,r),e}function Wo(e,t,n,r){var i=t.current,o=He(),l=Jt(i);return n=lp(n),t.context===null?t.context=n:t.pendingContext=n,t=At(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Kt(i,t,l),e!==null&&(yt(e,i,l,o),Wi(e,i,l)),l}function Eo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Xs(e,t){yc(e,t),(e=e.alternate)&&yc(e,t)}function mg(){return null}var sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qs(e){this._internalRoot=e}Uo.prototype.render=Qs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Wo(e,t,null,null)};Uo.prototype.unmount=Qs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;En(function(){Wo(null,e,null,null)}),t[Rt]=null}};function Uo(e){this._internalRoot=e}Uo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ff();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&jf(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wc(){}function gg(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Eo(l);o.call(u)}}var l=ap(t,r,e,0,null,!1,!1,"",wc);return e._reactRootContainer=l,e[Rt]=l.current,Qr(e.nodeType===8?e.parentNode:e),En(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Eo(s);a.call(u)}}var s=Ys(e,0,!1,null,null,!1,!1,"",wc);return e._reactRootContainer=s,e[Rt]=s.current,Qr(e.nodeType===8?e.parentNode:e),En(function(){Wo(t,s,n,r)}),s}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Eo(l);a.call(s)}}Wo(t,l,e,i)}else l=gg(n,t,e,i,r);return Eo(l)}bf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(hs(t,n|1),Ze(t,me()),!(Y&6)&&(or=me()+500,an()))}break;case 13:En(function(){var r=zt(e,1);if(r!==null){var i=He();yt(r,e,1,i)}}),Xs(e,1)}};ms=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=He();yt(t,e,134217728,n)}Xs(e,134217728)}};Mf=function(e){if(e.tag===13){var t=Jt(e),n=zt(e,t);if(n!==null){var r=He();yt(n,e,t,r)}Xs(e,t)}};Ff=function(){return G};Df=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};ua=function(e,t,n){switch(t){case"input":if(na(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$o(r);if(!i)throw Error(k(90));gf(r),na(r,i)}}}break;case"textarea":yf(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};_f=Ws;Pf=En;var vg={usingClientEntryPoint:!1,Events:[ci,Dn,$o,Cf,kf,Ws]},xr={findFiberByHostInstance:dn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},yg={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Nf(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||mg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ni.isDisabled&&Ni.supportsFiber)try{Ao=Ni.inject(yg),kt=Ni}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vg;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(t))throw Error(k(200));return hg(e,t,null,n)};et.createRoot=function(e,t){if(!Zs(e))throw Error(k(299));var n=!1,r="",i=sp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,i),e[Rt]=t.current,Qr(e.nodeType===8?e.parentNode:e),new Qs(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Nf(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return En(e)};et.hydrate=function(e,t,n){if(!Bo(t))throw Error(k(200));return Vo(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Zs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ap(t,null,e,1,n??null,i,!1,o,l),e[Rt]=t.current,Qr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Uo(t)};et.render=function(e,t,n){if(!Bo(t))throw Error(k(200));return Vo(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!Bo(e))throw Error(k(40));return e._reactRootContainer?(En(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};et.unstable_batchedUpdates=Ws;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bo(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Vo(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=et})(mh);const _r=Jc(Gi);var xc=Gi;Ql.createRoot=xc.createRoot,Ql.hydrateRoot=xc.hydrateRoot;var Co={},wg={get exports(){return Co},set exports(e){Co=e}},J={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Yo=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Qo=Symbol.for("react.profiler"),Zo=Symbol.for("react.provider"),Ko=Symbol.for("react.context"),xg=Symbol.for("react.server_context"),Go=Symbol.for("react.forward_ref"),Jo=Symbol.for("react.suspense"),qo=Symbol.for("react.suspense_list"),el=Symbol.for("react.memo"),tl=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),up;up=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ks:switch(e=e.type,e){case Yo:case Qo:case Xo:case Jo:case qo:return e;default:switch(e=e&&e.$$typeof,e){case xg:case Ko:case Go:case tl:case el:case Zo:return e;default:return t}}case Gs:return t}}}J.ContextConsumer=Ko;J.ContextProvider=Zo;J.Element=Ks;J.ForwardRef=Go;J.Fragment=Yo;J.Lazy=tl;J.Memo=el;J.Portal=Gs;J.Profiler=Qo;J.StrictMode=Xo;J.Suspense=Jo;J.SuspenseList=qo;J.isAsyncMode=function(){return!1};J.isConcurrentMode=function(){return!1};J.isContextConsumer=function(e){return ut(e)===Ko};J.isContextProvider=function(e){return ut(e)===Zo};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ks};J.isForwardRef=function(e){return ut(e)===Go};J.isFragment=function(e){return ut(e)===Yo};J.isLazy=function(e){return ut(e)===tl};J.isMemo=function(e){return ut(e)===el};J.isPortal=function(e){return ut(e)===Gs};J.isProfiler=function(e){return ut(e)===Qo};J.isStrictMode=function(e){return ut(e)===Xo};J.isSuspense=function(e){return ut(e)===Jo};J.isSuspenseList=function(e){return ut(e)===qo};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Yo||e===Qo||e===Xo||e===Jo||e===qo||e===Sg||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Zo||e.$$typeof===Ko||e.$$typeof===Go||e.$$typeof===up||e.getModuleId!==void 0)};J.typeOf=ut;(function(e){e.exports=J})(wg);function Eg(e){function t(P,L,R,F,y){for(var B=0,T=0,fe=0,Q=0,K,W,Pe=0,Be=0,X,Re=X=K=0,Z=0,Te=0,fr=0,Oe=0,di=R.length,dr=di-1,ft,j="",he="",ml="",gl="",Ft;Z<di;){if(W=R.charCodeAt(Z),Z===dr&&T+Q+fe+B!==0&&(T!==0&&(W=T===47?10:47),Q=fe=B=0,di++,dr++),T+Q+fe+B===0){if(Z===dr&&(0<Te&&(j=j.replace(h,"")),0<j.trim().length)){switch(W){case 32:case 9:case 59:case 13:case 10:break;default:j+=R.charAt(Z)}W=59}switch(W){case 123:for(j=j.trim(),K=j.charCodeAt(0),X=1,Oe=++Z;Z<di;){switch(W=R.charCodeAt(Z)){case 123:X++;break;case 125:X--;break;case 47:switch(W=R.charCodeAt(Z+1)){case 42:case 47:e:{for(Re=Z+1;Re<dr;++Re)switch(R.charCodeAt(Re)){case 47:if(W===42&&R.charCodeAt(Re-1)===42&&Z+2!==Re){Z=Re+1;break e}break;case 10:if(W===47){Z=Re+1;break e}}Z=Re}}break;case 91:W++;case 40:W++;case 34:case 39:for(;Z++<dr&&R.charCodeAt(Z)!==W;);}if(X===0)break;Z++}switch(X=R.substring(Oe,Z),K===0&&(K=(j=j.replace(p,"").trim()).charCodeAt(0)),K){case 64:switch(0<Te&&(j=j.replace(h,"")),W=j.charCodeAt(1),W){case 100:case 109:case 115:case 45:Te=L;break;default:Te=ct}if(X=t(L,Te,X,W,y+1),Oe=X.length,0<_&&(Te=n(ct,j,fr),Ft=a(3,X,Te,L,pe,le,Oe,W,y,F),j=Te.join(""),Ft!==void 0&&(Oe=(X=Ft.trim()).length)===0&&(W=0,X="")),0<Oe)switch(W){case 115:j=j.replace(O,l);case 100:case 109:case 45:X=j+"{"+X+"}";break;case 107:j=j.replace(c,"$1 $2"),X=j+"{"+X+"}",X=xe===1||xe===2&&o("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=j+X,F===112&&(X=(he+=X,""))}else X="";break;default:X=t(L,n(L,j,fr),X,F,y+1)}ml+=X,X=fr=Te=Re=K=0,j="",W=R.charCodeAt(++Z);break;case 125:case 59:if(j=(0<Te?j.replace(h,""):j).trim(),1<(Oe=j.length))switch(Re===0&&(K=j.charCodeAt(0),K===45||96<K&&123>K)&&(Oe=(j=j.replace(" ",":")).length),0<_&&(Ft=a(1,j,L,P,pe,le,he.length,F,y,F))!==void 0&&(Oe=(j=Ft.trim()).length)===0&&(j="\0\0"),K=j.charCodeAt(0),W=j.charCodeAt(1),K){case 0:break;case 64:if(W===105||W===99){gl+=j+R.charAt(Z);break}default:j.charCodeAt(Oe-1)!==58&&(he+=i(j,K,W,j.charCodeAt(2)))}fr=Te=Re=K=0,j="",W=R.charCodeAt(++Z)}}switch(W){case 13:case 10:T===47?T=0:1+K===0&&F!==107&&0<j.length&&(Te=1,j+="\0"),0<_*A&&a(0,j,L,P,pe,le,he.length,F,y,F),le=1,pe++;break;case 59:case 125:if(T+Q+fe+B===0){le++;break}default:switch(le++,ft=R.charAt(Z),W){case 9:case 32:if(Q+B+T===0)switch(Pe){case 44:case 58:case 9:case 32:ft="";break;default:W!==32&&(ft=" ")}break;case 0:ft="\\0";break;case 12:ft="\\f";break;case 11:ft="\\v";break;case 38:Q+T+B===0&&(Te=fr=1,ft="\f"+ft);break;case 108:if(Q+T+B+we===0&&0<Re)switch(Z-Re){case 2:Pe===112&&R.charCodeAt(Z-3)===58&&(we=Pe);case 8:Be===111&&(we=Be)}break;case 58:Q+T+B===0&&(Re=Z);break;case 44:T+fe+Q+B===0&&(Te=1,ft+="\r");break;case 34:case 39:T===0&&(Q=Q===W?0:Q===0?W:Q);break;case 91:Q+T+fe===0&&B++;break;case 93:Q+T+fe===0&&B--;break;case 41:Q+T+B===0&&fe--;break;case 40:if(Q+T+B===0){if(K===0)switch(2*Pe+3*Be){case 533:break;default:K=1}fe++}break;case 64:T+fe+Q+B+Re+X===0&&(X=1);break;case 42:case 47:if(!(0<Q+B+fe))switch(T){case 0:switch(2*W+3*R.charCodeAt(Z+1)){case 235:T=47;break;case 220:Oe=Z,T=42}break;case 42:W===47&&Pe===42&&Oe+2!==Z&&(R.charCodeAt(Oe+2)===33&&(he+=R.substring(Oe,Z+1)),ft="",T=0)}}T===0&&(j+=ft)}Be=Pe,Pe=W,Z++}if(Oe=he.length,0<Oe){if(Te=L,0<_&&(Ft=a(2,he,Te,P,pe,le,Oe,F,y,F),Ft!==void 0&&(he=Ft).length===0))return gl+he+ml;if(he=Te.join(",")+"{"+he+"}",xe*we!==0){switch(xe!==2||o(he,2)||(we=0),we){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(g,"::-webkit-input-$1")+he.replace(g,"::-moz-$1")+he.replace(g,":-ms-input-$1")+he}we=0}}return gl+he+ml}function n(P,L,R){var F=L.trim().split(C);L=F;var y=F.length,B=P.length;switch(B){case 0:case 1:var T=0;for(P=B===0?"":P[0]+" ";T<y;++T)L[T]=r(P,L[T],R).trim();break;default:var fe=T=0;for(L=[];T<y;++T)for(var Q=0;Q<B;++Q)L[fe++]=r(P[Q]+" ",F[T],R).trim()}return L}function r(P,L,R){var F=L.charCodeAt(0);switch(33>F&&(F=(L=L.trim()).charCodeAt(0)),F){case 38:return L.replace(d,"$1"+P.trim());case 58:return P.trim()+L.replace(d,"$1"+P.trim());default:if(0<1*R&&0<L.indexOf("\f"))return L.replace(d,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+L}function i(P,L,R,F){var y=P+";",B=2*L+3*R+4*F;if(B===944){P=y.indexOf(":",9)+1;var T=y.substring(P,y.length-1).trim();return T=y.substring(0,P).trim()+T+";",xe===1||xe===2&&o(T,1)?"-webkit-"+T+T:T}if(xe===0||xe===2&&!o(y,1))return y;switch(B){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(ce,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return T=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+T+"-webkit-"+y+"-ms-flex-pack"+T+y;case 1005:return v.test(y)?y.replace(m,":-webkit-")+y.replace(m,":-moz-")+y:y;case 1e3:switch(T=y.substring(13).trim(),L=T.indexOf("-")+1,T.charCodeAt(0)+T.charCodeAt(L)){case 226:T=y.replace(E,"tb");break;case 232:T=y.replace(E,"tb-rl");break;case 220:T=y.replace(E,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+T+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(L=(y=P).length-10,T=(y.charCodeAt(L)===33?y.substring(0,L):y).substring(P.indexOf(":",7)+1).trim(),B=T.charCodeAt(0)+(T.charCodeAt(7)|0)){case 203:if(111>T.charCodeAt(8))break;case 115:y=y.replace(T,"-webkit-"+T)+";"+y;break;case 207:case 102:y=y.replace(T,"-webkit-"+(102<B?"inline-":"")+"box")+";"+y.replace(T,"-webkit-"+T)+";"+y.replace(T,"-ms-"+T+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return T=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+T+"-ms-flex-"+T+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(N,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(N,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(M.test(P)===!0)return(T=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),L,R,F).replace(":fill-available",":stretch"):y.replace(T,"-webkit-"+T)+y.replace(T,"-moz-"+T.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,R+F===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+y}return y}function o(P,L){var R=P.indexOf(L===1?":":"{"),F=P.substring(0,L!==3?R:10);return R=P.substring(R+1,P.length-1),z(L!==2?F:F.replace(H,"$1"),R,L)}function l(P,L){var R=i(L,L.charCodeAt(0),L.charCodeAt(1),L.charCodeAt(2));return R!==L+";"?R.replace(I," or ($1)").substring(4):"("+L+")"}function a(P,L,R,F,y,B,T,fe,Q,K){for(var W=0,Pe=L,Be;W<_;++W)switch(Be=_e[W].call(f,P,Pe,R,F,y,B,T,fe,Q,K)){case void 0:case!1:case!0:case null:break;default:Pe=Be}if(Pe!==L)return Pe}function s(P){switch(P){case void 0:case null:_=_e.length=0;break;default:if(typeof P=="function")_e[_++]=P;else if(typeof P=="object")for(var L=0,R=P.length;L<R;++L)s(P[L]);else A=!!P|0}return s}function u(P){return P=P.prefix,P!==void 0&&(z=null,P?typeof P!="function"?xe=1:(xe=2,z=P):xe=0),u}function f(P,L){var R=P;if(33>R.charCodeAt(0)&&(R=R.trim()),V=R,R=[V],0<_){var F=a(-1,L,R,R,pe,le,0,0,0,0);F!==void 0&&typeof F=="string"&&(L=F)}var y=t(ct,R,L,0,0);return 0<_&&(F=a(-2,y,R,R,pe,le,y.length,0,0,0),F!==void 0&&(y=F)),V="",we=0,le=pe=1,y}var p=/^\0+/g,h=/[\0\r\f]/g,m=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,C=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,x=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,N=/-self|flex-/g,H=/[^]*?(:[rp][el]a[\w-]+)[^]*/,M=/stretch|:\s*\w+\-(?:conte|avail)/,ce=/([^-])(image-set\()/,le=1,pe=1,we=0,xe=1,ct=[],_e=[],_=0,z=null,A=0,V="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var Cg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function kg(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var _g=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Sc=kg(function(e){return _g.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Wa={},Pg={get exports(){return Wa},set exports(e){Wa=e}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=typeof Symbol=="function"&&Symbol.for,Js=ke?Symbol.for("react.element"):60103,qs=ke?Symbol.for("react.portal"):60106,nl=ke?Symbol.for("react.fragment"):60107,rl=ke?Symbol.for("react.strict_mode"):60108,il=ke?Symbol.for("react.profiler"):60114,ol=ke?Symbol.for("react.provider"):60109,ll=ke?Symbol.for("react.context"):60110,eu=ke?Symbol.for("react.async_mode"):60111,al=ke?Symbol.for("react.concurrent_mode"):60111,sl=ke?Symbol.for("react.forward_ref"):60112,ul=ke?Symbol.for("react.suspense"):60113,Tg=ke?Symbol.for("react.suspense_list"):60120,cl=ke?Symbol.for("react.memo"):60115,fl=ke?Symbol.for("react.lazy"):60116,Og=ke?Symbol.for("react.block"):60121,Ng=ke?Symbol.for("react.fundamental"):60117,Ig=ke?Symbol.for("react.responder"):60118,Ag=ke?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Js:switch(e=e.type,e){case eu:case al:case nl:case il:case rl:case ul:return e;default:switch(e=e&&e.$$typeof,e){case ll:case sl:case fl:case cl:case ol:return e;default:return t}}case qs:return t}}}function cp(e){return nt(e)===al}q.AsyncMode=eu;q.ConcurrentMode=al;q.ContextConsumer=ll;q.ContextProvider=ol;q.Element=Js;q.ForwardRef=sl;q.Fragment=nl;q.Lazy=fl;q.Memo=cl;q.Portal=qs;q.Profiler=il;q.StrictMode=rl;q.Suspense=ul;q.isAsyncMode=function(e){return cp(e)||nt(e)===eu};q.isConcurrentMode=cp;q.isContextConsumer=function(e){return nt(e)===ll};q.isContextProvider=function(e){return nt(e)===ol};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Js};q.isForwardRef=function(e){return nt(e)===sl};q.isFragment=function(e){return nt(e)===nl};q.isLazy=function(e){return nt(e)===fl};q.isMemo=function(e){return nt(e)===cl};q.isPortal=function(e){return nt(e)===qs};q.isProfiler=function(e){return nt(e)===il};q.isStrictMode=function(e){return nt(e)===rl};q.isSuspense=function(e){return nt(e)===ul};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===nl||e===al||e===il||e===rl||e===ul||e===Tg||typeof e=="object"&&e!==null&&(e.$$typeof===fl||e.$$typeof===cl||e.$$typeof===ol||e.$$typeof===ll||e.$$typeof===sl||e.$$typeof===Ng||e.$$typeof===Ig||e.$$typeof===Ag||e.$$typeof===Og)};q.typeOf=nt;(function(e){e.exports=q})(Pg);var tu=Wa,Lg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zg={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nu={};nu[tu.ForwardRef]=zg;nu[tu.Memo]=fp;function Ec(e){return tu.isMemo(e)?fp:nu[e.$$typeof]||Lg}var $g=Object.defineProperty,bg=Object.getOwnPropertyNames,Cc=Object.getOwnPropertySymbols,Mg=Object.getOwnPropertyDescriptor,Fg=Object.getPrototypeOf,kc=Object.prototype;function dp(e,t,n){if(typeof t!="string"){if(kc){var r=Fg(t);r&&r!==kc&&dp(e,r,n)}var i=bg(t);Cc&&(i=i.concat(Cc(t)));for(var o=Ec(e),l=Ec(t),a=0;a<i.length;++a){var s=i[a];if(!Rg[s]&&!(n&&n[s])&&!(l&&l[s])&&!(o&&o[s])){var u=Mg(t,s);try{$g(e,s,u)}catch{}}}}return e}var Dg=dp;function gt(){return(gt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _c=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ua=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Co.typeOf(e)},ko=Object.freeze([]),en=Object.freeze({});function lr(e){return typeof e=="function"}function Pc(e){return e.displayName||e.name||"Component"}function ru(e){return e&&typeof e.styledComponentId=="string"}var ar=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",iu=typeof window<"u"&&"HTMLElement"in window,jg=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1),Hg={};function Cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Wg=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Cn(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Zi=new Map,_o=new Map,Mr=1,Ii=function(e){if(Zi.has(e))return Zi.get(e);for(;_o.has(Mr);)Mr++;var t=Mr++;return Zi.set(e,t),_o.set(t,e),t},Ug=function(e){return _o.get(e)},Bg=function(e,t){t>=Mr&&(Mr=t+1),Zi.set(e,t),_o.set(t,e)},Vg="style["+ar+'][data-styled-version="5.3.6"]',Yg=new RegExp("^"+ar+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Xg=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Qg=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(Yg);if(a){var s=0|parseInt(a[1],10),u=a[2];s!==0&&(Bg(u,s),Xg(e,u,a[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(l)}}},Zg=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},pp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var s=a.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(ar))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(ar,"active"),r.setAttribute("data-styled-version","5.3.6");var l=Zg();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Kg=function(){function e(n){var r=this.element=pp(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var s=o[l];if(s.ownerNode===i)return s}Cn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Gg=function(){function e(n){var r=this.element=pp(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Jg=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Tc=iu,qg={isServer:!iu,useCSSOMInjection:!jg},Po=function(){function e(n,r,i){n===void 0&&(n=en),r===void 0&&(r={}),this.options=gt({},qg,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&iu&&Tc&&(Tc=!1,function(o){for(var l=document.querySelectorAll(Vg),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(ar)!=="active"&&(Qg(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return Ii(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(gt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new Jg(l):o?new Kg(l):new Gg(l),new Wg(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(Ii(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Ii(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(Ii(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=Ug(l);if(a!==void 0){var s=n.names.get(a),u=r.getGroup(l);if(s&&u&&s.size){var f=ar+".g"+l+'[id="'+a+'"]',p="";s!==void 0&&s.forEach(function(h){h.length>0&&(p+=h+",")}),o+=""+u+f+'{content:"'+p+`"}/*!sc*/
`}}}return o}(this)},e}(),ev=/(a)(d)/gi,Oc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ba(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Oc(t%52)+n;return(Oc(t%52)+n).replace(ev,"$1-$2")}var Yn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hp=function(e){return Yn(5381,e)};function mp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(lr(n)&&!ru(n))return!1}return!0}var tv=hp("5.3.6"),nv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mp(t),this.componentId=n,this.baseHash=Yn(tv,n),this.baseStyle=r,Po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=kn(this.rules,t,n,r).join(""),a=Ba(Yn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var s=r(l,"."+a,void 0,i);n.insertRules(i,a,s)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,f=Yn(this.baseHash,r.hash),p="",h=0;h<u;h++){var m=this.rules[h];if(typeof m=="string")p+=m;else if(m){var v=kn(m,t,n,r),w=Array.isArray(v)?v.join(""):v;f=Yn(f,w+h),p+=w}}if(p){var C=Ba(f>>>0);if(!n.hasNameForId(i,C)){var d=r(p,"."+C,void 0,i);n.insertRules(i,C,d)}o.push(C)}}return o.join(" ")},e}(),rv=/^\s*\/\/.*$/gm,iv=[":","[",".","#"];function ov(e){var t,n,r,i,o=e===void 0?en:e,l=o.options,a=l===void 0?en:l,s=o.plugins,u=s===void 0?ko:s,f=new Eg(a),p=[],h=function(w){function C(d){if(d)try{w(d+"}")}catch{}}return function(d,c,g,x,E,O,I,N,H,M){switch(d){case 1:if(H===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if(N===0)return c+"/*|*/";break;case 3:switch(N){case 102:case 112:return w(g[0]+c),"";default:return c+(M===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(C)}}}(function(w){p.push(w)}),m=function(w,C,d){return C===0&&iv.indexOf(d[n.length])!==-1||d.match(i)?w:"."+t};function v(w,C,d,c){c===void 0&&(c="&");var g=w.replace(rv,""),x=C&&d?d+" "+C+" { "+g+" }":g;return t=c,n=C,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(d||!C?"":C,x)}return f.use([].concat(u,[function(w,C,d){w===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,m))},h,function(w){if(w===-2){var C=p;return p=[],C}}])),v.hash=u.length?u.reduce(function(w,C){return C.name||Cn(15),Yn(w,C.name)},5381).toString():"",v}var gp=Ie.createContext();gp.Consumer;var vp=Ie.createContext(),lv=(vp.Consumer,new Po),Va=ov();function yp(){return b.useContext(gp)||lv}function wp(){return b.useContext(vp)||Va}var av=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Va);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Cn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Va),this.name+t.hash},e}(),sv=/([A-Z])/,uv=/([A-Z])/g,cv=/^ms-/,fv=function(e){return"-"+e.toLowerCase()};function Nc(e){return sv.test(e)?e.replace(uv,fv).replace(cv,"-ms-"):e}var Ic=function(e){return e==null||e===!1||e===""};function kn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=kn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Ic(e))return"";if(ru(e))return"."+e.styledComponentId;if(lr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return kn(s,t,n,r)}var u;return e instanceof av?n?(e.inject(n,r),e.getName(r)):e:Ua(e)?function f(p,h){var m,v,w=[];for(var C in p)p.hasOwnProperty(C)&&!Ic(p[C])&&(Array.isArray(p[C])&&p[C].isCss||lr(p[C])?w.push(Nc(C)+":",p[C],";"):Ua(p[C])?w.push.apply(w,f(p[C],C)):w.push(Nc(C)+": "+(m=C,(v=p[C])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||m in Cg?String(v).trim():v+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var Ac=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function xp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return lr(e)||Ua(e)?Ac(kn(_c(ko,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ac(kn(_c(e,n)))}var Sp=function(e,t,n){return n===void 0&&(n=en),e.theme!==n.theme&&e.theme||t||n.theme},dv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pv=/(^-|-$)/g;function Ul(e){return e.replace(dv,"-").replace(pv,"")}var Ep=function(e){return Ba(hp(e)>>>0)};function Ai(e){return typeof e=="string"&&!0}var Ya=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},hv=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function mv(e,t,n){var r=e[n];Ya(t)&&Ya(r)?Cp(r,t):e[n]=t}function Cp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Ya(l))for(var a in l)hv(a)&&mv(e,l[a],a)}return e}var ri=Ie.createContext();ri.Consumer;function gv(e){var t=b.useContext(ri),n=b.useMemo(function(){return function(r,i){if(!r)return Cn(14);if(lr(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?Cn(8):i?gt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ie.createElement(ri.Provider,{value:n},e.children):null}var Bl={};function kp(e,t,n){var r=ru(e),i=!Ai(e),o=t.attrs,l=o===void 0?ko:o,a=t.componentId,s=a===void 0?function(c,g){var x=typeof c!="string"?"sc":Ul(c);Bl[x]=(Bl[x]||0)+1;var E=x+"-"+Ep("5.3.6"+x+Bl[x]);return g?g+"-"+E:E}(t.displayName,t.parentComponentId):a,u=t.displayName,f=u===void 0?function(c){return Ai(c)?"styled."+c:"Styled("+Pc(c)+")"}(e):u,p=t.displayName&&t.componentId?Ul(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,m=t.shouldForwardProp;r&&e.shouldForwardProp&&(m=t.shouldForwardProp?function(c,g,x){return e.shouldForwardProp(c,g,x)&&t.shouldForwardProp(c,g,x)}:e.shouldForwardProp);var v,w=new nv(n,p,r?e.componentStyle:void 0),C=w.isStatic&&l.length===0,d=function(c,g){return function(x,E,O,I){var N=x.attrs,H=x.componentStyle,M=x.defaultProps,ce=x.foldedComponentIds,le=x.shouldForwardProp,pe=x.styledComponentId,we=x.target,xe=function(F,y,B){F===void 0&&(F=en);var T=gt({},y,{theme:F}),fe={};return B.forEach(function(Q){var K,W,Pe,Be=Q;for(K in lr(Be)&&(Be=Be(T)),Be)T[K]=fe[K]=K==="className"?(W=fe[K],Pe=Be[K],W&&Pe?W+" "+Pe:W||Pe):Be[K]}),[T,fe]}(Sp(E,b.useContext(ri),M)||en,E,N),ct=xe[0],_e=xe[1],_=function(F,y,B,T){var fe=yp(),Q=wp(),K=y?F.generateAndInjectStyles(en,fe,Q):F.generateAndInjectStyles(B,fe,Q);return K}(H,I,ct),z=O,A=_e.$as||E.$as||_e.as||E.as||we,V=Ai(A),P=_e!==E?gt({},E,{},_e):E,L={};for(var R in P)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?L.as=P[R]:(le?le(R,Sc,A):!V||Sc(R))&&(L[R]=P[R]));return E.style&&_e.style!==E.style&&(L.style=gt({},E.style,{},_e.style)),L.className=Array.prototype.concat(ce,pe,_!==pe?_:null,E.className,_e.className).filter(Boolean).join(" "),L.ref=z,b.createElement(A,L)}(v,c,g,C)};return d.displayName=f,(v=Ie.forwardRef(d)).attrs=h,v.componentStyle=w,v.displayName=f,v.shouldForwardProp=m,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ko,v.styledComponentId=p,v.target=r?e.target:e,v.withComponent=function(c){var g=t.componentId,x=function(O,I){if(O==null)return{};var N,H,M={},ce=Object.keys(O);for(H=0;H<ce.length;H++)N=ce[H],I.indexOf(N)>=0||(M[N]=O[N]);return M}(t,["componentId"]),E=g&&g+"-"+(Ai(c)?c:Ul(Pc(c)));return kp(c,gt({},x,{attrs:h,componentId:E}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Cp({},e.defaultProps,c):c}}),v.toString=function(){return"."+v.styledComponentId},i&&Dg(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Xa=function(e){return function t(n,r,i){if(i===void 0&&(i=en),!Co.isValidElementType(r))return Cn(1,String(r));var o=function(){return n(r,i,xp.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,gt({},i,{},l))},o.attrs=function(l){return t(n,r,gt({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(kp,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Xa[e]=Xa(e)});var vv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=mp(n),Po.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(kn(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&Po.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function yv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=xp.apply(void 0,[e].concat(n)),o="sc-global-"+Ep(JSON.stringify(i)),l=new vv(i,o);function a(u){var f=yp(),p=wp(),h=b.useContext(ri),m=b.useRef(f.allocateGSInstance(o)).current;return f.server&&s(m,u,f,h,p),b.useLayoutEffect(function(){if(!f.server)return s(m,u,f,h,p),function(){return l.removeStyles(m,f)}},[m,u,f,h,p]),null}function s(u,f,p,h,m){if(l.isStatic)l.renderStyles(u,Hg,p,m);else{var v=gt({},f,{theme:Sp(f,h,a.defaultProps)});l.renderStyles(u,v,p,m)}}return Ie.memo(a)}const ee=Xa,wv=ee.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;

  background: ${e=>e.theme.gradientSection};
`,xv=ee.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8rem;

  position: relative;
  width: 100%;
  max-width: 1224px;

  padding: 0 2rem 0 2rem;

  .branchBg {
    position: absolute;
    right: -2%;
    top: 15%;
    z-index: 0;

    transform: scaleX(-1);
    rotate: -10deg;
  }

  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 125%;

    color: ${e=>e.theme.gray100};
  }

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    max-width: 418px;

    color: ${e=>e.theme.gray300};
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    z-index: 1;

    max-width: 500px;
    width: 100%;
  }

  button {
    max-width: 195px;
    margin-top: 1.5rem;
  }

  img {
    margin-top: -4.25rem;
    margin-left: 2rem;
  }

  @media (max-width: 1024px) {
    gap: 3rem;

    h1 {
      font-size: 3rem !important;
    }
  }

  @media (max-width: 940px) {
    img:first-child {
      width: 309.5px;
      height: 424.75px;
    }
  }

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 2rem !important;
    }

    p {
      font-size: 1rem;
    }

    img:first-child {
      margin-top: 0;
      margin-left: 0;

      z-index: 1;
    }

    div {
      align-items: center;
      padding-top: 2rem;

      button {
        width: 100%;
        max-width: 428px;
      }
    }
  }
`,Sv="/assets/CTA-6eb93219.png",ou="/assets/branch_bg-8217f60c.png";function Ev(){return S(wv,{id:"cta",children:D(xv,{children:[S("img",{width:496,height:680,src:Sv,alt:"balança simbolo da justiça"}),D("div",{children:[S("h1",{children:"Sobre mim"}),S("p",{children:"Sou advogado com mais de 10 anos de experiência em diversas áreas do direito. Graduado pela Universidade Federal, pós-graduado em Direito Empresarial e Tributário. Atuo com dedicação para garantir justiça, proteção e soluções eficazes aos meus clientes, sempre priorizando a ética e a transparência em cada caso."})]}),S("img",{className:"branchBg",src:ou,alt:"ramo de fundo"})]})})}const Cv=ee.footer`
  width: 100%;

  padding: 0 1.5rem 0 1.5rem;

  background: linear-gradient(
        ${e=>e.theme.gray800},
        ${e=>e.theme.gray800}
      )
      padding-box,
    ${e=>e.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;
`,kv=ee.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 1224px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    p {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 150%;

      color: ${e=>e.theme.gray500};
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.5rem 0 2.5rem 0;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background: linear-gradient(
            ${e=>e.theme.gray700},
            ${e=>e.theme.gray700}
          )
          padding-box,
        ${e=>e.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;

      border-radius: 8px;

      cursor: pointer;
    }
  }

  @media (max-width: 820px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem 0 0 0;

    div {
      flex-direction: column;
      flex-direction: column;
      align-items: flex-start;

      div {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
`,_v="/assets/logo_gray-d7c19134.svg",Pv="/assets/linkedin_icon-68b232da.svg",Ki="/assets/face_icon-dbf2e936.svg",Tv="/assets/insta_icon-b7757643.svg";function Ov(){return S(Cv,{children:D(kv,{children:[D("div",{children:[S("img",{width:54,height:48,src:_v,alt:"logomarca antonio"}),D("div",{children:[S("p",{children:"Francisco Roney ©"}),S("p",{children:"Advocacia Especializada"})]})]}),D("nav",{children:[S("a",{target:"_blank",href:"http://linkedin.com/in/francisco-roney-de-sousa-ribeiro-33aa9185/?originalSubdomain=br",rel:"noreferrer",children:S("img",{width:40,height:40,src:Pv,alt:"linkedin"})}),S("a",{target:"_blank",href:"http://facebook.com/nsfadvogados/",rel:"noreferrer",children:S("img",{width:40,height:40,src:Ki,alt:"facebook"})}),S("a",{target:"_blank",href:"https://www.instagram.com/roneysousa/",rel:"noreferrer",children:S("img",{width:40,height:40,src:Tv,alt:"instagram"})})]})]})})}const Nv=ee.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 100px;
  height: 100px;

  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;

  padding: 0 1rem 0 1rem;

  background: ${e=>e.theme.gradientDark};
  filter: drop-shadow(4px 21px 32px #a39185);
  backdrop-filter: blur(8px);

  @media (max-width: 600px) {
    max-height: 72px;
  }
`,Iv=ee.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 100%;
    width: 100%;
  }

  a:last-child {
    img {
      opacity: 0;
      transform: translate(-100%, 0);
      transition: transform 0.3s, opacity 0.5s;
    }
    overflow: hidden;
  }

  &:hover {
    a:last-child {
      img {
        transform: translate(0, 0);
        opacity: 1;
      }
    }
  }

  @media (max-width: 1240px) {
    a:last-child {
      display: none;
    }
  }

  @media (max-width: 360px) {
    a > img {
      width: 32px;
    }
  }
`,Av=ee.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1224px;
  height: 100%;
  margin: 0 auto;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    a:hover {
      button {
        background: #a39185;
        color: #fff;
      }
    }
  }

  @media (max-width: 950px) {
    nav {
      display: none;
    }
  }
`,Lv="/assets/logo_small-8d29d74a.svg",Rv="/assets/logo_extends-22bedd5d.svg",dl=ee.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: ${e=>e.theme.primaryDefault};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.5s;
  border: none;

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: ${e=>e.theme.gray100};

  &:hover {
    background: ${e=>e.theme.primaryDark};
  }
`,zv=ee(dl)`
  background: transparent;
`,$v=ee(dl)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid #ffffff;
  border-radius: 6px;

  &:hover {
    border: 1px solid transparent;
  }
`,Li=ee(dl)`
  padding: 0.62rem 2rem;
  background: transparent;

  border: 1px solid transparent;
  border-radius: 6px;

  &:hover {
    background: ${e=>e.theme.primaryDark};
  }
`;function bv(){return S(Nv,{children:D(Av,{children:[D(Iv,{children:[S("a",{href:"#home",children:S("img",{src:Lv,alt:"logomarca Antonio"})}),S("a",{href:"#home",children:S("img",{src:Rv,alt:"Logomarca Antonio"})})]}),D("nav",{children:[S("a",{href:"#home",children:S(Li,{children:"Home"})}),S("a",{href:"#cta",children:S(Li,{children:"Sobre mim"})}),S("a",{href:"#services",children:S(Li,{children:"Áreas de atuação"})}),S("a",{href:"Login Site/index.html",children:S(Li,{children:"Meus processos"})}),S("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=5588999453173",target:"_blank",rel:"noreferrer",children:S($v,{children:"Entrar em contato"})})]})]})})}const Mv=ee.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: relative;

  width: 100%;
  max-width: 1224px;

  padding: 0 2rem 0 2rem;

  .branchBg {
    position: absolute;
    left: -9%;
    top: 0.15%;
    z-index: 0;
  }

  .parallaxImg {
    height: 100%;
    width: 100%;
  }

  .paralaxContainer {
    position: absolute;
    right: 10.5%;
    top: 0;
    z-index: 1;

    animation: showElementLeft 1s;
  }

  .paralaxItem {
    position: absolute;
    width: 396px;
    height: 139px;
    right: -40%;
    top: 70%;

    animation: showElementTop 1s;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    gap: 8px;

    background: ${e=>e.theme.gradientBorder};
    filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
    backdrop-filter: blur(12px);

    border-radius: 4px;

    p {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 29px;
      color: ${e=>e.theme.gray200};
      opacity: 0.8;
    }

    strong {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.37rem;
      color: ${e=>e.theme.gray100};
    }
  }

  @media (max-width: 1024px) or (max-height: 690px) {
    .parallaxImg {
      width: 400px;
    }

    .paralaxContainer {
      right: 5%;
    }
  }

  @media (max-width: 850px) {
    .parallaxImg {
      width: 350px;
    }

    .paralaxContainer {
      top: 10%;
    }
  }

  @media (max-width: 821px) {
    .parallaxImg {
      width: 311px;
    }

    .paralaxContainer {
      top: 10%;

      .paralaxItem {
        width: 273px;
        height: 96px;
        padding: 1.37rem;
        gap: 5.5px;

        p {
          font-size: 1rem;
          line-height: 20px;
        }

        strong {
          font-size: 1.37rem;
          line-height: 1.32rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .homeBg {
      display: flex;
      justify-content: center;
    }

    .paralaxContainer {
      position: relative;
      margin-top: 2rem;
      right: 0;
    }
  }

  @keyframes showElementLeft {
    0% {
      transform: translateX(500px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes showElementTop {
    0% {
      transform: translateY(500px);
    }
    50% {
      transform: translateY(-200px);
    }
    100% {
      right: -40%;
      top: 70%;
    }
  }
`,Fv=ee.div`
  margin: 9rem 0 0 16%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;

  max-width: 550px;
  max-height: 566px;
  width: 44%;

  h1 {
    animation: showElementRight 1s;
  }

  p {
    font-family: 'Fira Sans';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;
    color: #a8a8aa;
    opacity: 0.8;

    animation: showElementRight 1.1s;

    width: 100%;
    max-width: 350px;

    margin: 6.81rem 0 2rem 0;
    padding: 0 1.5rem 0 0;
  }

  .buttonContainer {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;

    animation: showElementRight 1.3s;

    width: 90%;
    max-width: 350px;

    a:last-child:hover button {
      background: #a39185;
      color: #fff;
    }
  }
  @media (max-width: 1024px) or (max-height: 690px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-height: 690px) {
    p {
      margin: 2.7rem 0 2rem 0;
    }
  }

  @media (max-width: 1120px) {
    margin: 9rem 0 0 10%;
  }

  @media (max-width: 1105px) {
    margin: 9rem 0 0 9%;
  }

  @media (max-width: 895px) {
    margin: 6rem 0 0 6%;

    .buttonContainer {
      width: 100%;
    }
  }

  @media (max-width: 821px) {
    margin: 7rem 0 0 0%;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }

    .buttonContainer {
      flex-direction: column;
      gap: 1rem;

      button {
        width: 90%;
      }
    }
  }

  @media (max-width: 600px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    gap: 2rem;

    p {
      max-width: 100%;

      margin: 0 0 0 0;
      padding: 0 0 0 0;
    }

    .buttonContainer {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      width: 100%;
      max-width: 100%;

      a {
        width: 100%;
        max-width: 306px;
      }

      button {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  @keyframes showElementRight {
    0% {
      transform: translateX(-500px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,Dv="/assets/home_img-ba0b5428.webp";var jv=4,Hv=.001,Wv=1e-7,Uv=10,Pr=11,Ri=1/(Pr-1),Bv=typeof Float32Array=="function";function _p(e,t){return 1-3*t+3*e}function Pp(e,t){return 3*t-6*e}function Tp(e){return 3*e}function To(e,t,n){return((_p(t,n)*e+Pp(t,n))*e+Tp(t))*e}function Op(e,t,n){return 3*_p(t,n)*e*e+2*Pp(t,n)*e+Tp(t)}function Vv(e,t,n,r,i){var o,l,a=0;do l=t+(n-t)/2,o=To(l,r,i)-e,o>0?n=l:t=l;while(Math.abs(o)>Wv&&++a<Uv);return l}function Yv(e,t,n,r){for(var i=0;i<jv;++i){var o=Op(t,n,r);if(o===0)return t;var l=To(t,n,r)-e;t-=l/o}return t}function Xv(e){return e}var Lc=function(t,n,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===n&&r===i)return Xv;for(var o=Bv?new Float32Array(Pr):new Array(Pr),l=0;l<Pr;++l)o[l]=To(l*Ri,t,r);function a(s){for(var u=0,f=1,p=Pr-1;f!==p&&o[f]<=s;++f)u+=Ri;--f;var h=(s-o[f])/(o[f+1]-o[f]),m=u+h*Ri,v=Op(m,t,r);return v>=Hv?Yv(s,m,t,r):v===0?m:Vv(s,u,u+Ri,t,r)}return function(u){return u===0?0:u===1?1:To(a(u),n,i)}},lu=function(t){this.startX=t.startX,this.startY=t.startY,this.endX=t.endX,this.endY=t.endY,this.totalX=this.endX-this.startX,this.totalY=this.endY-this.startY,this.startMultiplierX=t.startMultiplierX||1,this.endMultiplierX=t.endMultiplierX||1,this.startMultiplierY=t.startMultiplierY||1,this.endMultiplierY=t.endMultiplierY||1};function tn(){return tn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tn.apply(this,arguments)}var Oo;(function(e){e.speed="speed",e.translateX="translateX",e.translateY="translateY",e.rotate="rotate",e.rotateX="rotateX",e.rotateY="rotateY",e.rotateZ="rotateZ",e.scale="scale",e.scaleX="scaleX",e.scaleY="scaleY",e.scaleZ="scaleZ",e.opacity="opacity"})(Oo||(Oo={}));var mn;(function(e){e.px="px",e["%"]="%",e.vh="vh",e.vw="vw"})(mn||(mn={}));var Fr;(function(e){e.deg="deg",e.turn="turn",e.rad="rad"})(Fr||(Fr={}));var Qa;(function(e){e[""]=""})(Qa||(Qa={}));var xt;(function(e){e.vertical="vertical",e.horizontal="horizontal"})(xt||(xt={}));var Rc;(function(e){e.ease="ease",e.easeIn="easeIn",e.easeOut="easeOut",e.easeInOut="easeInOut",e.easeInQuad="easeInQuad",e.easeInCubic="easeInCubic",e.easeInQuart="easeInQuart",e.easeInQuint="easeInQuint",e.easeInSine="easeInSine",e.easeInExpo="easeInExpo",e.easeInCirc="easeInCirc",e.easeOutQuad="easeOutQuad",e.easeOutCubic="easeOutCubic",e.easeOutQuart="easeOutQuart",e.easeOutQuint="easeOutQuint",e.easeOutSine="easeOutSine",e.easeOutExpo="easeOutExpo",e.easeOutCirc="easeOutCirc",e.easeInOutQuad="easeInOutQuad",e.easeInOutCubic="easeInOutCubic",e.easeInOutQuart="easeInOutQuart",e.easeInOutQuint="easeInOutQuint",e.easeInOutSine="easeInOutSine",e.easeInOutExpo="easeInOutExpo",e.easeInOutCirc="easeInOutCirc",e.easeInBack="easeInBack",e.easeOutBack="easeOutBack",e.easeInOutBack="easeInOutBack"})(Rc||(Rc={}));var zc=0;function Qv(){return++zc,zc}var Zv=function(){function e(n){var r=n.el.getBoundingClientRect();if(n.view.scrollContainer){var i=n.view.scrollContainer.getBoundingClientRect();r=tn({},r,{top:r.top-i.top,right:r.right-i.left,bottom:r.bottom-i.top,left:r.left-i.left})}this.height=n.el.offsetHeight,this.width=n.el.offsetWidth,this.left=r.left,this.right=r.right,this.top=r.top,this.bottom=r.bottom,n.rootMargin&&this._setRectWithRootMargin(n.rootMargin)}var t=e.prototype;return t._setRectWithRootMargin=function(r){var i=r.top+r.bottom,o=r.left+r.right;this.top-=r.top,this.right+=r.right,this.bottom+=r.bottom,this.left-=r.left,this.height+=i,this.width+=o},e}(),Kv=[Qa[""],mn.px,mn["%"],mn.vh,mn.vw,Fr.deg,Fr.turn,Fr.rad];function zi(e,t){t===void 0&&(t=mn["%"]);var n={value:0,unit:t};if(typeof e>"u")return n;var r=typeof e=="number"||typeof e=="string";if(!r)throw new Error("Invalid value provided. Must provide a value as a string or number");e=String(e),n.value=parseFloat(e),n.unit=e.match(/[\d.\-+]*\s*(.*)/)[1]||t;var i=Kv.includes(n.unit);if(!i)throw new Error("Invalid unit provided.");return n}var $c={ease:[.25,.1,.25,1],easeIn:[.42,0,1,1],easeOut:[0,0,.58,1],easeInOut:[.42,0,.58,1],easeInQuad:[.55,.085,.68,.53],easeInCubic:[.55,.055,.675,.19],easeInQuart:[.895,.03,.685,.22],easeInQuint:[.755,.05,.855,.06],easeInSine:[.47,0,.745,.715],easeInExpo:[.95,.05,.795,.035],easeInCirc:[.6,.04,.98,.335],easeOutQuad:[.25,.46,.45,.94],easeOutCubic:[.215,.61,.355,1],easeOutQuart:[.165,.84,.44,1],easeOutQuint:[.23,1,.32,1],easeOutSine:[.39,.575,.565,1],easeOutExpo:[.19,1,.22,1],easeOutCirc:[.075,.82,.165,1],easeInOutQuad:[.455,.03,.515,.955],easeInOutCubic:[.645,.045,.355,1],easeInOutQuart:[.77,0,.175,1],easeInOutQuint:[.86,0,.07,1],easeInOutSine:[.445,.05,.55,.95],easeInOutExpo:[1,0,0,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};function Np(e){if(Array.isArray(e))return Lc(e[0],e[1],e[2],e[3]);if(typeof e=="string"&&typeof $c[e]<"u"){var t=$c[e];return Lc(t[0],t[1],t[2],t[3])}}var Gv=Object.values(Oo),Jv={speed:"px",translateX:"%",translateY:"%",rotate:"deg",rotateX:"deg",rotateY:"deg",rotateZ:"deg",scale:"",scaleX:"",scaleY:"",scaleZ:"",opacity:""};function bc(e,t){var n={};return Gv.forEach(function(r){var i=Jv[r];if(typeof(e==null?void 0:e[r])=="number"){var o=e==null?void 0:e[r],l=(o||0)*10+"px",a=(o||0)*-10+"px",s=zi(l),u=zi(a),f={start:s.value,end:u.value,unit:s.unit};t===xt.vertical&&(n.translateY=f),t===xt.horizontal&&(n.translateX=f)}if(Array.isArray(e==null?void 0:e[r])){var p=e==null?void 0:e[r];if(typeof p[0]<"u"&&typeof p[1]<"u"){var h=zi(p==null?void 0:p[0],i),m=zi(p==null?void 0:p[1],i),v=Np(p==null?void 0:p[2]);if(n[r]={start:h.value,end:m.value,unit:h.unit,easing:v},h.unit!==m.unit)throw new Error("Must provide matching units for the min and max offset values of each axis.")}}}),n}function Mc(e,t,n,r){var i=n-e,o=i/t;return r&&(o=r(o)),o}function qv(e,t,n){var r=n>=e&&n<=t;return r}function e0(e,t,n,r,i){return(n-t)*(e-r)/(i-r)+t}function Ip(e,t){var n=e0(typeof e.easing=="function"?e.easing(t):t,(e==null?void 0:e.start)||0,(e==null?void 0:e.end)||0,0,1);return{value:n,unit:e==null?void 0:e.unit}}var t0=Object.values(Oo).filter(function(e){return e!=="opacity"});function n0(e,t){var n=Object.keys(t),r=n.includes("opacity"),i="transform"+(r?",opacity":"");e.style.willChange=i}function r0(e,t,n){if(n){var r=o0(e,t),i=i0(e,t);n.style.transform=r,n.style.opacity=i}}function i0(e,t){var n=e.opacity&&Ip(e.opacity,t);if(typeof n>"u"||typeof n.value>"u"||typeof n.unit>"u")return"";var r=""+n.value;return r}function o0(e,t){var n=t0.reduce(function(r,i){var o=e[i]&&Ip(e[i],t);if(typeof o>"u"||typeof o.value>"u"||typeof o.unit>"u")return r;var l=i+"("+o.value+o.unit+")";return r+l},"");return n}function Za(e){var t=e.el;t&&(t.style.transform="",t.style.opacity="")}function l0(e,t,n,r){var i=e.top-t.height,o=e.left-t.width,l=e.bottom,a=e.right;o+=n.x,a+=n.x,i+=n.y,l+=n.y,r&&(n.y+e.top<t.height&&(i=0),n.x+e.left<t.width&&(o=0),l>t.scrollHeight-t.height&&(l=t.scrollHeight-t.height),a>t.scrollWidth-t.width&&(a=t.scrollWidth-t.width));var s=new lu({startX:o,startY:i,endX:a,endY:l});return s}function On(e,t,n){var r=t>e,i=(Math.abs(e)+Math.abs(t))*(r?-1:1),o=n+i,l=Math.max(n/o,1);return l}function Fc(e,t){var n=e.start,r=e.end,i=e.unit;if(i==="%"){var o=t/100;n=n*o,r=r*o}if(i==="vw"){var l=n/100,a=r/100;n=window.innerWidth*l,r=window.innerWidth*a}if(i==="vh"){var s=n/100,u=r/100;n=window.innerHeight*s,r=window.innerHeight*u}return{start:n,end:r}}var Dc={start:0,end:0,unit:""};function a0(e,t,n,r,i,o){var l=n.translateX||Dc,a=n.translateY||Dc,s=Fc(l,e.width),u=s.start,f=s.end,p=Fc(a,e.height),h=p.start,m=p.end,v=e.top-t.height,w=e.left-t.width,C=e.bottom,d=e.right,c=1,g=1;i===xt.vertical&&(c=On(h,m,t.height+e.height),g=c);var x=1,E=1;if(i===xt.horizontal&&(x=On(u,f,t.width+e.width),E=x),h<0&&(v=v+h*c),m>0&&(C=C+m*g),u<0&&(w=w+u*x),f>0&&(d=d+f*E),w+=r.x,d+=r.x,v+=r.y,C+=r.y,o){var O=r.y+e.top<t.height,I=r.x+e.left<t.width,N=r.y+e.bottom>t.scrollHeight-t.height,H=r.x+e.right>t.scrollWidth-t.height;if(O&&N&&(c=1,g=1,v=0,C=t.scrollHeight-t.height),I&&H&&(x=1,E=1,w=0,d=t.scrollWidth-t.width),!O&&N){v=e.top-t.height+r.y,C=t.scrollHeight-t.height;var M=C-v;c=On(h,m,M),g=1,h<0&&(v=v+h*c)}if(!I&&H){w=e.left-t.width+r.x,d=t.scrollWidth-t.width;var ce=d-w;x=On(u,f,ce),E=1,u<0&&(w=w+u*x)}if(O&&!N){v=0,C=e.bottom+r.y;var le=C-v;c=1,g=On(h,m,le),m>0&&(C=C+m*g)}if(I&&!H){w=0,d=e.right+r.x;var pe=d-w;x=1,E=On(u,f,pe),f>0&&(d=d+f*E)}}var we=new lu({startX:w,startY:v,endX:d,endY:C,startMultiplierX:x,endMultiplierX:E,startMultiplierY:c,endMultiplierY:g});return we}function s0(e,t){var n=tn({},e);return n.translateX&&(n.translateX=tn({},e.translateX,{start:n.translateX.start*t.startMultiplierX,end:n.translateX.end*t.endMultiplierX})),n.translateY&&(n.translateY=tn({},e.translateY,{start:n.translateY.start*t.startMultiplierY,end:n.translateY.end*t.endMultiplierY})),n}function u0(e,t,n){return e.rootMargin||e.targetElement||e.shouldDisableScalingTranslations?!1:!!(t.translateX&&n===xt.horizontal||t.translateY&&n===xt.vertical)}var jc=function(t,n,r){return Math.min(Math.max(t,n),r)},c0=function(){function e(n){this.el=n.el,this.props=n.props,this.scrollAxis=n.scrollAxis,this.id=Qv(),this.effects=bc(this.props,this.scrollAxis),this.isInView=null,this.progress=0,this._setElementEasing(n.props.easing),n0(n.el,this.effects)}var t=e.prototype;return t.updateProps=function(r){return this.props=tn({},this.props,r),this.effects=bc(r,this.scrollAxis),this._setElementEasing(r.easing),this},t.setCachedAttributes=function(r,i){Za(this),this.rect=new Zv({el:this.props.targetElement||this.el,rootMargin:this.props.rootMargin,view:r});var o=u0(this.props,this.effects,this.scrollAxis);return typeof this.props.startScroll=="number"&&typeof this.props.endScroll=="number"?(this.limits=new lu({startX:this.props.startScroll,startY:this.props.startScroll,endX:this.props.endScroll,endY:this.props.endScroll}),this._setElementStyles(),this):(o?(this.limits=a0(this.rect,r,this.effects,i,this.scrollAxis,this.props.shouldAlwaysCompleteAnimation),this.scaledEffects=s0(this.effects,this.limits)):this.limits=l0(this.rect,r,i,this.props.shouldAlwaysCompleteAnimation),this._setElementStyles(),this)},t._updateElementIsInView=function(r){var i=this.isInView===null;r!==this.isInView&&(r?this.props.onEnter&&this.props.onEnter(this):i||(this._setFinalProgress(),this._setElementStyles(),this.props.onExit&&this.props.onExit(this))),this.isInView=r},t._setFinalProgress=function(){var r=jc(Math.round(this.progress),0,1);this._updateElementProgress(r)},t._setElementStyles=function(){if(!this.props.disabled){var r=this.scaledEffects||this.effects;r0(r,this.progress,this.el)}},t._updateElementProgress=function(r){this.progress=r,this.props.onProgressChange&&this.props.onProgressChange(this.progress),this.props.onChange&&this.props.onChange(this)},t._setElementEasing=function(r){this.easing=Np(r)},t.updatePosition=function(r){if(!this.limits)return this;var i=this.scrollAxis===xt.vertical,o=this.isInView===null,l=i?this.limits.startY:this.limits.startX,a=i?this.limits.endY:this.limits.endX,s=i?this.limits.totalY:this.limits.totalX,u=i?r.y:r.x,f=qv(l,a,u);if(this._updateElementIsInView(f),f){var p=Mc(l,s,u,this.easing);this._updateElementProgress(p),this._setElementStyles()}else o&&(this.progress=jc(Math.round(Mc(l,s,u,this.easing)),0,1),this._setElementStyles());return this},e}(),Hc=function(){function e(n){this.scrollContainer=n.scrollContainer,this.width=n.width,this.height=n.height,this.scrollHeight=n.scrollHeight,this.scrollWidth=n.scrollWidth}var t=e.prototype;return t.hasChanged=function(r){return r.width!==this.width||r.height!==this.height||r.scrollWidth!==this.scrollWidth||r.scrollHeight!==this.scrollHeight},t.setSize=function(r){return this.width=r.width,this.height=r.height,this.scrollHeight=r.scrollHeight,this.scrollWidth=r.scrollWidth,this},e}(),f0=function(){function e(n,r){this.x=n,this.y=r,this.dx=0,this.dy=0}var t=e.prototype;return t.setScroll=function(r,i){return this.dx=r-this.x,this.dy=i-this.y,this.x=r,this.y=i,this},e}();function d0(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}return e}var Ap=function(){function e(n){var r=n.scrollAxis,i=r===void 0?xt.vertical:r,o=n.scrollContainer;this.scrollAxis=i,this.elements=[],this._hasScrollContainer=!!o,this.viewEl=o??window;var l=this._getScrollPosition(),a=l[0],s=l[1];this.scroll=new f0(a,s),this.view=new Hc({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:this._hasScrollContainer?o:void 0}),this._ticking=!1,this._supportsPassive=d0(),this._bindAllMethods(),this._addListeners(this.viewEl),this._addResizeObserver(),this._setViewSize()}e.init=function(r){var i=typeof window<"u";if(!i)throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");return new e(r)};var t=e.prototype;return t._bindAllMethods=function(){var r=this;["_addListeners","_removeListeners","_getScrollPosition","_handleScroll","_handleUpdateCache","_updateAllElements","_updateElementPosition","_setViewSize","_addResizeObserver","_checkIfViewHasChanged","_getViewParams","getElements","createElement","removeElementById","resetElementStyles","updateElementPropsById","update","updateScrollContainer","destroy"].forEach(function(i){r[i]=r[i].bind(r)})},t._addListeners=function(r){r.addEventListener("scroll",this._handleScroll,this._supportsPassive?{passive:!0}:!1),window.addEventListener("resize",this._handleUpdateCache,!1),window.addEventListener("blur",this._handleUpdateCache,!1),window.addEventListener("focus",this._handleUpdateCache,!1),window.addEventListener("load",this._handleUpdateCache,!1)},t._removeListeners=function(r){var i;r.removeEventListener("scroll",this._handleScroll,!1),window.removeEventListener("resize",this._handleUpdateCache,!1),window.removeEventListener("blur",this._handleUpdateCache,!1),window.removeEventListener("focus",this._handleUpdateCache,!1),window.removeEventListener("load",this._handleUpdateCache,!1),(i=this._resizeObserver)==null||i.disconnect()},t._addResizeObserver=function(){var r=this;try{var i=this._hasScrollContainer?this.viewEl:document.documentElement;this._resizeObserver=new ResizeObserver(function(){return r.update()}),this._resizeObserver.observe(i)}catch{console.warn("Failed to create the resize observer in the ParallaxContoller")}},t._getScrollPosition=function(){var r=this._hasScrollContainer?this.viewEl.scrollLeft:window.pageXOffset,i=this._hasScrollContainer?this.viewEl.scrollTop:window.pageYOffset;return[r,i]},t._handleScroll=function(){var r=this._getScrollPosition(),i=r[0],o=r[1];this.scroll.setScroll(i,o),!this._ticking&&this.elements.length>0&&(this._ticking=!0,window.requestAnimationFrame(this._updateAllElements))},t._handleUpdateCache=function(){this._setViewSize(),this._updateAllElements({updateCache:!0})},t._updateAllElements=function(r){var i=this,o=r===void 0?{}:r,l=o.updateCache;this.elements&&this.elements.forEach(function(a){l&&a.setCachedAttributes(i.view,i.scroll),i._updateElementPosition(a)}),this._ticking=!1},t._updateElementPosition=function(r){r.props.disabled||r.updatePosition(this.scroll)},t._getViewParams=function(){if(this._hasScrollContainer){var r=this.viewEl.offsetWidth,i=this.viewEl.offsetHeight,o=this.viewEl.scrollHeight,l=this.viewEl.scrollWidth;return this.view.setSize({width:r,height:i,scrollHeight:o,scrollWidth:l})}var a=document.documentElement,s=window.innerWidth||a.clientWidth,u=window.innerHeight||a.clientHeight,f=a.scrollHeight,p=a.scrollWidth;return{width:s,height:u,scrollHeight:f,scrollWidth:p}},t._setViewSize=function(){return this.view.setSize(this._getViewParams())},t._checkIfViewHasChanged=function(){return this.view.hasChanged(this._getViewParams())},t.getElements=function(){return this.elements},t.createElement=function(r){var i=new c0(tn({},r,{scrollAxis:this.scrollAxis}));return i.setCachedAttributes(this.view,this.scroll),this.elements=this.elements?[].concat(this.elements,[i]):[i],this._updateElementPosition(i),this._checkIfViewHasChanged()&&this.update(),i},t.removeElementById=function(r){this.elements&&(this.elements=this.elements.filter(function(i){return i.id!==r}))},t.updateElementPropsById=function(r,i){this.elements&&(this.elements=this.elements.map(function(o){return o.id===r?o.updateProps(i):o})),this.update()},t.resetElementStyles=function(r){Za(r)},t.update=function(){var r=this._getScrollPosition(),i=r[0],o=r[1];this.scroll.setScroll(i,o),this._setViewSize(),this._updateAllElements({updateCache:!0})},t.updateScrollContainer=function(r){this._removeListeners(this.viewEl),this.viewEl=r,this._hasScrollContainer=!!r,this.view=new Hc({width:0,height:0,scrollWidth:0,scrollHeight:0,scrollContainer:r}),this._setViewSize(),this._addListeners(this.viewEl),this._updateAllElements({updateCache:!0})},t.disableAllElements=function(){this.elements&&(this.elements=this.elements.map(function(r){return r.updateProps({disabled:!0})})),this.update()},t.enableAllElements=function(){this.elements&&(this.elements=this.elements.map(function(r){return r.updateProps({disabled:!1})})),this.update()},t.destroy=function(){this._removeListeners(this.viewEl),this.elements&&this.elements.forEach(function(r){return Za(r)}),this.elements=void 0},e}();function p0(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ka(e,t)}function Ka(e,t){return Ka=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ka(e,t)}function h0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function m0(e){return Object.keys(e).forEach(function(t){return e[t]===void 0?delete e[t]:{}}),e}var g0=["disabled","easing","endScroll","onChange","onEnter","onExit","onProgressChange","opacity","rootMargin","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","shouldAlwaysCompleteAnimation","shouldDisableScalingTranslations","speed","startScroll","targetElement","translateX","translateY"];function Lp(e){var t=e.disabled,n=e.easing,r=e.endScroll,i=e.onChange,o=e.onEnter,l=e.onExit,a=e.onProgressChange,s=e.opacity,u=e.rootMargin,f=e.rotate,p=e.rotateX,h=e.rotateY,m=e.rotateZ,v=e.scale,w=e.scaleX,C=e.scaleY,d=e.scaleZ,c=e.shouldAlwaysCompleteAnimation,g=e.shouldDisableScalingTranslations,x=e.speed,E=e.startScroll,O=e.targetElement,I=e.translateX,N=e.translateY,H=h0(e,g0),M=m0({disabled:t,easing:n,endScroll:r,onChange:i,onEnter:o,onExit:l,onProgressChange:a,opacity:s,rootMargin:u,rotate:f,rotateX:p,rotateY:h,rotateZ:m,scale:v,scaleX:w,scaleY:C,scaleZ:d,shouldAlwaysCompleteAnimation:c,shouldDisableScalingTranslations:g,speed:x,startScroll:E,targetElement:O,translateX:I,translateY:N});return{parallaxProps:M,rest:H}}function v0(e){b.useEffect(function(){var t=typeof window>"u",n=e instanceof Ap;if(!t&&!e&&!n)throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.")},[e])}var Rp=Ie.createContext(null);function y0(){var e=b.useContext(Rp),t=typeof window>"u";if(t)return null;if(!e)throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");return e}function w0(e){var t=y0(),n=b.useRef(null),r=Lp(e),i=r.parallaxProps;v0(t);var o=b.useState(),l=o[0],a=o[1];return b.useEffect(function(){var s;if(n.current instanceof HTMLElement){var u={el:n.current,props:i};s=t==null?void 0:t.createElement(u),a(s)}else throw new Error("You must assign the ref returned by the useParallax() hook to an HTML Element.");return function(){s&&(t==null||t.removeElementById(s.id))}},[]),b.useEffect(function(){l&&(e.disabled&&(t==null||t.resetElementStyles(l)),t==null||t.updateElementPropsById(l.id,i))},[e.disabled,e.easing,e.endScroll,e.onChange,e.onEnter,e.onExit,e.onProgressChange,e.opacity,e.rootMargin,e.rotate,e.rotateX,e.rotateY,e.rotateZ,e.scale,e.scaleX,e.scaleY,e.scaleZ,e.shouldAlwaysCompleteAnimation,e.shouldDisableScalingTranslations,e.speed,e.startScroll,e.targetElement,e.translateX,e.translateY]),{ref:n,controller:t,element:l}}function x0(e){var t=Lp(e),n=t.parallaxProps,r=t.rest,i=w0(n),o=i.ref;return Ie.createElement("div",Object.assign({ref:o},r),e.children)}var S0=function(t){var n=typeof window>"u";return n?null:Ap.init(t)},zp=function(e){p0(t,e);function t(r){var i;return i=e.call(this,r)||this,i.controller=S0({scrollAxis:r.scrollAxis,scrollContainer:r.scrollContainer}),i}var n=t.prototype;return n.componentDidUpdate=function(i){i.scrollContainer!==this.props.scrollContainer&&this.controller.updateScrollContainer(this.props.scrollContainer)},n.componentWillUnmount=function(){this.controller=this.controller.destroy()},n.render=function(){var i=this.props.children;return Ie.createElement(Rp.Provider,{value:this.controller},i)},t}(b.Component);zp.defaultProps={scrollAxis:xt.vertical};function E0(){return D(Mv,{id:"home",children:[D(Fv,{children:[S("h1",{children:"Resolvemos seus problemas jurídicos com advogados experientes"}),S("p",{children:"Estamos aqui para ajudar a cuidar da sua legalidade com o melhor atendimento especialmente para você"}),D("div",{className:"buttonContainer",children:[S("a",{href:"#services",children:S(dl,{style:{backgroundColor:"#a39185",color:"#fff"},children:"Vamos começar"})}),S("a",{href:"#services",children:S(zv,{children:"Saber mais"})})]})]}),S("div",{className:"homeBg",children:D("div",{className:"paralaxContainer",children:[D(x0,{className:"paralaxItem",speed:-10,children:[S("p",{children:"Trabalhamos em prol da"}),S("strong",{children:"Justiça"})]}),S("img",{width:452,height:716,className:"parallaxImg",src:Dv,alt:"estatua justiça"})]})}),S("img",{className:"branchBg",src:ou,alt:"ramo fundo"})]})}const C0=ee.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  padding: 100px 1.5rem 0 1.5rem;

  position: relative;

  margin-bottom: 12rem;

  .branchBg {
    position: absolute;
    right: -25%;
    top: -8%;

    transform: scaleX(-1);
    rotate: -10deg;
  }

  .headerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    max-width: 1224px;
    width: 100%;

    h2 {
      color: ${e=>e.theme.gray100};
      font-family: 'Lato';
      font-weight: 400;
      font-size: 2.5rem;
      line-height: 125%;
      text-align: center;

      @media (max-width: 580px) {
        font-size: 1.5rem;
      }
    }

    p {
      font-family: 'Lato';
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 29px;
      color: ${e=>e.theme.gray200};
      opacity: 0.8;
      text-align: center;

      max-width: 635px;
    }
  }

  @media (max-width: 580px) {
    margin-bottom: 2rem;
  }
`,k0=ee.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;

  max-width: 1224px;

  @media (max-width: 1150px) {
    gap: 0;
  }
  @media (max-width: 1120px) {
    gap: 0;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`,Nn=ee.div`
  width: 20.18rem;
  height: 15.12rem;
  z-index: 1;

  background: linear-gradient(
        ${e=>e.theme.gray700},
        ${e=>e.theme.gray700}
      )
      padding-box,
    ${e=>e.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;

  padding: 1.5rem;
  border-radius: 8px;

  overflow: hidden;
  cursor: pointer;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1120px) {
    transform: scale(0.9);
  }
  @media (max-width: 1150px) {
    transform: scale(0.95);
  }

  &:hover,
  &:active {
    .description {
      animation: toRight 0.5s;
      transform: translate(0, 0);
    }

    .casesCount {
      opacity: 0;
    }

    .header {
      animation: toBottom 0.5s;
      transform: translate(0, 0);
    }

    .arrow {
      animation: toTop 0.5s;
      transform: translate(0, 0);
    }
  }

  h3 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 150%;
  }

  .description {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${e=>e.theme.gray300};

    transform: translate(-120%, 0);
    transition: transform 0.5s;
  }

  .casesCount {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 150%;

    color: ${e=>e.theme.gray500};
    transition: opacity 0.3s;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1;
  }

  .arrow {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    transform: translate(-50%, 50%);
    transition: transform 0.5s;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    margin-right: 3.31rem;
    transform: translate(0, 200%);
    transition: transform 0.5s;
  }

  @keyframes toRight {
    0% {
      transform: translate(-120%, 0);
    }
    50% {
      transform: translate(10%, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes toBottom {
    0% {
      transform: translate(0, 200%);
    }
    50% {
      transform: translate(0, -20%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes toTop {
    0% {
      transform: translate(-50%, 50%);
    }
    50% {
      transform: translate(20%, -20%);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`,In="/assets/arrow-1650733b.svg",_0="/assets/card_icon_1-add53097.svg",P0="/assets/card_icon_2-f7f7db7e.svg",T0="/assets/card_icon_3-abc22155.svg",O0="/assets/card_icon_4-8be37798.svg",N0="/assets/card_icon_5-ff81a720.svg",I0="/assets/card_icon_6-7b1cf61c.svg";function A0(){return D(C0,{id:"services",children:[D("div",{className:"headerContainer",children:[S("h2",{children:"Nossas áreas de atuação"}),S("p",{children:"Tratamos cada trabalho de forma abrangente e acreditamos na força da comunicação clara e fácil."})]}),D(k0,{children:[D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:_0,alt:"Direito Empresarial do trabalho"}),S("h3",{children:"Direito Empresarial do trabalho"})]}),S("p",{className:"description",children:"Oferecemos assessoria jurídica completa para empresas, incluindo contratos, negociações, fusões e aquisições, garantindo a proteção dos interesses empresariais e o cumprimento das leis trabalhistas."}),S("p",{className:"casesCount",children:"85 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]}),D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:P0,alt:"Direito de família"}),S("h3",{children:"Direito de família"})]}),S("p",{className:"description",children:"Atuamos em questões familiares como divórcio, guarda de filhos, pensão alimentícia e partilha de bens, buscando sempre soluções que preservem o bem-estar de todos os envolvidos."}),S("p",{className:"casesCount",children:"62 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]}),D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:T0,alt:"Direito tributário"}),S("h3",{children:"Direito tributário"})]}),S("p",{className:"description",children:"Prestamos consultoria especializada em planejamento tributário, defesa em autuações fiscais e recuperação de créditos, otimizando a carga tributária de empresas e pessoas físicas."}),S("p",{className:"casesCount",children:"47 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]}),D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:O0,alt:"Direito digital"}),S("h3",{children:"Direito digital"})]}),S("p",{className:"description",children:"Protegemos direitos digitais, incluindo privacidade de dados, propriedade intelectual online, contratos digitais e defesa contra crimes cibernéticos."}),S("p",{className:"casesCount",children:"33 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]}),D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:N0,alt:"Registro de marcas e patentes"}),S("h3",{children:"Registro de marcas e patentes"})]}),S("p",{className:"description",children:"Realizamos o registro e proteção de marcas, patentes e direitos autorais, assegurando a propriedade intelectual de empresas e criadores."}),S("p",{className:"casesCount",children:"54 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]}),D(Nn,{children:[D("div",{className:"contentContainer",children:[D("div",{className:"header",children:[S("img",{width:40,height:40,src:I0,alt:"Cobrança extrajudicial"}),S("h3",{children:"Cobrança extrajudicial"})]}),S("p",{className:"description",children:"Realizamos cobranças extrajudiciais eficientes, utilizando negociações e acordos para recuperar dívidas de forma rápida e econômica."}),S("p",{className:"casesCount",children:"71 Casos solucionados"})]}),S("img",{className:"arrow",src:In,alt:"ocultar mostrar conteudo"})]})]}),S("img",{className:"branchBg",src:ou,alt:"ramo de fundo"})]})}const L0=ee.section`
  padding: 4rem 0;

  h2 {
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 300;
    position: relative;

    &:after {
      content: '';
      width: 60px;
      height: 2px;
      background: #a39185;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 3rem;

    button {
      background: none;
      border: none;
      color: #a39185;
      font-size: 3rem;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0 1rem;

      &:hover {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }

    .indicators {
      display: flex;
      gap: 0.5rem;

      .indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(163, 145, 133, 0.3);
        cursor: pointer;
        transition: background 0.3s ease;

        &.active {
          background: #a39185;
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .testimonial-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .navigation {
      gap: 1rem;

      button {
        font-size: 2rem;
      }
    }
  }
`,R0=ee.div`
  background: linear-gradient(135deg, rgba(163, 145, 133, 0.1), rgba(28, 28, 28, 0.9));
  border: 1px solid rgba(163, 145, 133, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(163, 145, 133, 0.2);
  }

  &.active {
    border-color: #a39185;
    box-shadow: 0 0 20px rgba(163, 145, 133, 0.5);
  }

  .quote-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 1rem;
    opacity: 0.7;
  }

  p {
    color: #fff;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
    flex-grow: 1;
  }

  .author {
    display: flex;
    justify-content: center;
    margin-top: auto;

    strong {
      color: #a39185;
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    height: 300px;

    p {
      font-size: 1rem;
    }
  }
`,z0=ee.div`
  display: flex;
  justify-content: center;
  gap: 0.2rem;
  margin-bottom: 1rem;

  .star {
    color: rgba(163, 145, 133, 0.3);
    font-size: 1.2rem;

    &.filled {
      color: #a39185;
    }
  }
`;ee.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  z-index: 1;

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 150%;

    color: ${e=>e.theme.gray300};
    max-width: 392px;
  }

  a {
    display: flex;
    justify-content: flex-start;
  }

  button {
    max-width: 195px;
    margin-top: 1.5rem;
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 1024px) {
    a {
      justify-content: center;
      max-width: 100%;
      width: 100%;
    }
    button {
      max-width: 100%;
      width: 100%;
    }
  }
`;ee.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60%;
  position: relative;

  .currentCard {
    transform: scale(1);
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 670px) {
    flex-direction: column;

    gap: 2rem;
    width: 100%;

    .currentCard {
      position: static;
      z-index: 0;
    }
  }
`;ee.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: scale(0.7);

  background: linear-gradient(
        ${e=>e.theme.gray700},
        ${e=>e.theme.gray700}
      )
      padding-box,
    ${e=>e.theme.gradientBorder} border-box;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 16px 0px 48px #a39185,
    -16px 0px 48px #a39185;

  padding: 2rem;
  gap: 2rem;

  width: 24.43rem;
  height: 16.75rem;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;

    width: 100%;

    .name {
      align-self: center;

      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 150%;

      color: ${e=>e.theme.gray050};
    }
  }

  .content {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${e=>e.theme.gray300};
  }

  @media (max-width: 670px) {
    transform: scale(1);
  }
`;ee.div`
  .testimonial-content {
    padding: 1rem;
    margin: 0;
  }
`;ee.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }
  }

  .testimonial-content {
    text-align: center;
    max-width: 800px;

    p {
      color: #fff;
      font-size: 1.2rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    strong {
      color: #a39185;
      font-size: 1.1rem;
      display: block;
    }
  }
`;const $0="/assets/comment_icon-e1076827.svg",$i=[{text:"O Dr. Roney demonstrou excelência e profissionalismo em todo o processo. Sua dedicação ao meu caso foi fundamental para alcançarmos um resultado positivo.",author:"Carlos Silva",rating:5,avatar:Ki},{text:"Agradeço ao Dr. Roney pela condução do meu processo. Sua competência e conhecimento jurídico são impressionantes.",author:"Maria Santos",rating:5,avatar:Ki},{text:"Excelente atendimento do Dr. Roney. Sempre muito atencioso e dedicado, explicando cada etapa do processo com clareza.",author:"João Oliveira",rating:5,avatar:Ki}];function b0(){const[e,t]=b.useState(0),n=()=>{t(o=>(o+1)%$i.length)},r=()=>{t(o=>o-1<0?$i.length-1:o-1)},i=o=>Array.from({length:5},(l,a)=>S("span",{className:a<o?"star filled":"star",children:"★"},a));return D(L0,{children:[S("h2",{children:"Depoimentos"}),S("div",{className:"testimonial-grid",children:$i.map((o,l)=>D(R0,{className:l===e?"active":"",children:[S("img",{src:$0,alt:"Quote",className:"quote-icon"}),S("p",{children:o.text}),S(z0,{children:i(o.rating)}),S("div",{className:"author",children:S("strong",{children:o.author})})]},l))}),D("div",{className:"navigation",children:[S("button",{onClick:r,"aria-label":"Depoimento anterior",children:"‹"}),S("div",{className:"indicators",children:$i.map((o,l)=>S("span",{className:l===e?"indicator active":"indicator",onClick:()=>t(l)},l))}),S("button",{onClick:n,"aria-label":"Próximo depoimento",children:"›"})]})]})}const M0=ee.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  background: #1c1a22;
  @media (max-width: 820px) {
    overflow-x: hidden;
  }
`;ee.div`
  max-width: 1224px;
  width: 100%;

  position: sticky;
  bottom: 200px;

  margin: -15rem 0 0 1rem;

  @media (max-width: 820px) {
    display: none;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    a {
      background: linear-gradient(
            ${e=>e.theme.gray700},
            ${e=>e.theme.gray700}
          )
          padding-box,
        ${e=>e.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;
      z-index: 3;

      border-radius: 8px;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;const F0=ee.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 54px;

  width: 64px;
  height: 64px;

  background: ${e=>e.theme.gradientBorder};
  filter: drop-shadow(29px 4px 56px rgba(20, 20, 21, 0.25));
  backdrop-filter: blur(12px);

  backdrop-filter: blur(8px);

  @media (max-width: 820px) {
    display: block;
  }
`,D0="/assets/wpp-icon-0422aa25.svg",j0="/assets/in_white-100e851a.svg",H0="/assets/face-white-548331c8.svg",W0="/assets/insta-white-be0fdc09.svg",U0="/assets/logo-sidebar-f81be94a.svg";function B0(e){if(Array.isArray(e))return e}function V0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,l,a=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}function Ga(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $p(e,t){if(e){if(typeof e=="string")return Ga(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ga(e,t)}}function Y0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X0(e,t){return B0(e)||V0(e,t)||$p(e,t)||Y0()}function je(e){return je=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},je(e)}function Wc(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(t){for(var r=[],i=0;i<t.length;i++){var o=t[i];if(o){var l=je(o);if(l==="string"||l==="number")r.push(o);else if(l==="object"){var a=Array.isArray(o)?o:Object.entries(o).map(function(s){var u=X0(s,2),f=u[0],p=u[1];return p?f:null});r=a.length?r.concat(a.filter(function(s){return!!s})):r}}}return r.join(" ")}}function bp(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q0(e,t){if(je(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(je(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Mp(e){var t=Q0(e,"string");return je(t)==="symbol"?t:String(t)}function Uc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Mp(r.key),r)}}function Fp(e,t,n){return t&&Uc(e.prototype,t),n&&Uc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dp(e,t,n){return t=Mp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vl(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=Z0(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,l=!1,a;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return o=u.done,u},e:function(u){l=!0,a=u},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(l)throw a}}}}function Z0(e,t){if(e){if(typeof e=="string")return Bc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bc(e,t)}}function Bc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re=function(){function e(){bp(this,e)}return Fp(e,null,[{key:"innerWidth",value:function(n){if(n){var r=n.offsetWidth,i=getComputedStyle(n);return r+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),r}return 0}},{key:"width",value:function(n){if(n){var r=n.offsetWidth,i=getComputedStyle(n);return r-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),r}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var n=document.documentElement;return(window.pageYOffset||n.scrollTop)-(n.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var n=document.documentElement;return(window.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}},{key:"getOuterWidth",value:function(n,r){if(n){var i=n.offsetWidth||n.getBoundingClientRect().width;if(r){var o=getComputedStyle(n);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}return 0}},{key:"getOuterHeight",value:function(n,r){if(n){var i=n.offsetHeight||n.getBoundingClientRect().height;if(r){var o=getComputedStyle(n);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}return 0}},{key:"getClientHeight",value:function(n,r){if(n){var i=n.clientHeight;if(r){var o=getComputedStyle(n);i+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return i}return 0}},{key:"getClientWidth",value:function(n,r){if(n){var i=n.clientWidth;if(r){var o=getComputedStyle(n);i+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return i}return 0}},{key:"getViewport",value:function(){var n=window,r=document,i=r.documentElement,o=r.getElementsByTagName("body")[0],l=n.innerWidth||i.clientWidth||o.clientWidth,a=n.innerHeight||i.clientHeight||o.clientHeight;return{width:l,height:a}}},{key:"getOffset",value:function(n){if(n){var r=n.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(n){if(n)for(var r=n.parentNode.childNodes,i=0,o=0;o<r.length;o++){if(r[o]===n)return i;r[o].nodeType===1&&i++}return-1}},{key:"addMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var i=r.split(" "),o=0;o<i.length;o++)n.classList.add(i[o]);else for(var l=r.split(" "),a=0;a<l.length;a++)n.className+=" "+l[a]}},{key:"removeMultipleClasses",value:function(n,r){if(n&&r)if(n.classList)for(var i=r.split(" "),o=0;o<i.length;o++)n.classList.remove(i[o]);else for(var l=r.split(" "),a=0;a<l.length;a++)n.className=n.className.replace(new RegExp("(^|\\b)"+l[a].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(n,r){n&&r&&(n.classList?n.classList.add(r):n.className+=" "+r)}},{key:"removeClass",value:function(n,r){n&&r&&(n.classList?n.classList.remove(r):n.className=n.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(n,r){return n?n.classList?n.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(n.className):!1}},{key:"find",value:function(n,r){return n?Array.from(n.querySelectorAll(r)):[]}},{key:"findSingle",value:function(n,r){return n?n.querySelector(r):null}},{key:"getHeight",value:function(n){if(n){var r=n.offsetHeight,i=getComputedStyle(n);return r-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),r}return 0}},{key:"getWidth",value:function(n){if(n){var r=n.offsetWidth,i=getComputedStyle(n);return r-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),r}return 0}},{key:"alignOverlay",value:function(n,r,i){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;n&&r&&(i==="self"?this.relativePosition(n,r):(o&&(n.style.minWidth=e.getOuterWidth(r)+"px"),this.absolutePosition(n,r)))}},{key:"absolutePosition",value:function(n,r){if(n){var i=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),o=i.height,l=i.width,a=r.offsetHeight,s=r.offsetWidth,u=r.getBoundingClientRect(),f=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),m,v;u.top+a+o>h.height?(m=u.top+f-o,m<0&&(m=f),n.style.transformOrigin="bottom"):(m=a+u.top+f,n.style.transformOrigin="top"),u.left+s+l>h.width?v=Math.max(0,u.left+p+s-l):v=u.left+p,n.style.top=m+"px",n.style.left=v+"px"}}},{key:"relativePosition",value:function(n,r){if(n){var i=n.offsetParent?{width:n.offsetWidth,height:n.offsetHeight}:this.getHiddenElementDimensions(n),o=r.offsetHeight,l=r.getBoundingClientRect(),a=this.getViewport(),s,u;l.top+o+i.height>a.height?(s=-1*i.height,l.top+s<0&&(s=-1*l.top),n.style.transformOrigin="bottom"):(s=o,n.style.transformOrigin="top"),i.width>a.width?u=l.left*-1:l.left+i.width>a.width?u=(l.left+i.width-a.width)*-1:u=0,n.style.top=s+"px",n.style.left=u+"px"}}},{key:"flipfitCollision",value:function(n,r){var i=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",a=arguments.length>4?arguments[4]:void 0;if(n&&r){var s=r.getBoundingClientRect(),u=this.getViewport(),f=o.split(" "),p=l.split(" "),h=function(d,c){return c?+d.substring(d.search(/(\+|-)/g))||0:d.substring(0,d.search(/(\+|-)/g))||d},m={my:{x:h(f[0]),y:h(f[1]||f[0]),offsetX:h(f[0],!0),offsetY:h(f[1]||f[0],!0)},at:{x:h(p[0]),y:h(p[1]||p[0]),offsetX:h(p[0],!0),offsetY:h(p[1]||p[0],!0)}},v={left:function(){var d=m.my.offsetX+m.at.offsetX;return d+s.left+(m.my.x==="left"?0:-1*(m.my.x==="center"?i.getOuterWidth(n)/2:i.getOuterWidth(n)))},top:function(){var d=m.my.offsetY+m.at.offsetY;return d+s.top+(m.my.y==="top"?0:-1*(m.my.y==="center"?i.getOuterHeight(n)/2:i.getOuterHeight(n)))}},w={count:{x:0,y:0},left:function(){var d=v.left(),c=e.getWindowScrollLeft();n.style.left=d+c+"px",this.count.x===2?(n.style.left=c+"px",this.count.x=0):d<0&&(this.count.x++,m.my.x="left",m.at.x="right",m.my.offsetX*=-1,m.at.offsetX*=-1,this.right())},right:function(){var d=v.left()+e.getOuterWidth(r),c=e.getWindowScrollLeft();n.style.left=d+c+"px",this.count.x===2?(n.style.left=u.width-e.getOuterWidth(n)+c+"px",this.count.x=0):d+e.getOuterWidth(n)>u.width&&(this.count.x++,m.my.x="right",m.at.x="left",m.my.offsetX*=-1,m.at.offsetX*=-1,this.left())},top:function(){var d=v.top(),c=e.getWindowScrollTop();n.style.top=d+c+"px",this.count.y===2?(n.style.left=c+"px",this.count.y=0):d<0&&(this.count.y++,m.my.y="top",m.at.y="bottom",m.my.offsetY*=-1,m.at.offsetY*=-1,this.bottom())},bottom:function(){var d=v.top()+e.getOuterHeight(r),c=e.getWindowScrollTop();n.style.top=d+c+"px",this.count.y===2?(n.style.left=u.height-e.getOuterHeight(n)+c+"px",this.count.y=0):d+e.getOuterHeight(r)>u.height&&(this.count.y++,m.my.y="bottom",m.at.y="top",m.my.offsetY*=-1,m.at.offsetY*=-1,this.top())},center:function(d){if(d==="y"){var c=v.top()+e.getOuterHeight(r)/2;n.style.top=c+e.getWindowScrollTop()+"px",c<0?this.bottom():c+e.getOuterHeight(r)>u.height&&this.top()}else{var g=v.left()+e.getOuterWidth(r)/2;n.style.left=g+e.getWindowScrollLeft()+"px",g<0?this.left():g+e.getOuterWidth(n)>u.width&&this.right()}}};w[m.at.x]("x"),w[m.at.y]("y"),this.isFunction(a)&&a(m)}}},{key:"findCollisionPosition",value:function(n){if(n){var r=n==="top"||n==="bottom",i=n==="left"?"right":"left",o=n==="top"?"bottom":"top";return r?{axis:"y",my:"center ".concat(o),at:"center ".concat(n)}:{axis:"x",my:"".concat(i," center"),at:"".concat(n," center")}}}},{key:"getParents",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return n.parentNode===null?r:this.getParents(n.parentNode,r.concat([n.parentNode]))}},{key:"getScrollableParents",value:function(n){var r=[];if(n){var i=this.getParents(n),o=/(auto|scroll)/,l=function(d){var c=d?getComputedStyle(d):null;return c&&(o.test(c.getPropertyValue("overflow"))||o.test(c.getPropertyValue("overflowX"))||o.test(c.getPropertyValue("overflowY")))},a=Vl(i),s;try{for(a.s();!(s=a.n()).done;){var u=s.value,f=u.nodeType===1&&u.dataset.scrollselectors;if(f){var p=f.split(","),h=Vl(p),m;try{for(h.s();!(m=h.n()).done;){var v=m.value,w=this.findSingle(u,v);w&&l(w)&&r.push(w)}}catch(C){h.e(C)}finally{h.f()}}u.nodeType!==9&&l(u)&&r.push(u)}}catch(C){a.e(C)}finally{a.f()}}return r}},{key:"getHiddenElementOuterHeight",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetHeight;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementOuterWidth",value:function(n){if(n){n.style.visibility="hidden",n.style.display="block";var r=n.offsetWidth;return n.style.display="none",n.style.visibility="visible",r}return 0}},{key:"getHiddenElementDimensions",value:function(n){var r={};return n&&(n.style.visibility="hidden",n.style.display="block",r.width=n.offsetWidth,r.height=n.offsetHeight,n.style.display="none",n.style.visibility="visible"),r}},{key:"fadeIn",value:function(n,r){if(n){n.style.opacity=0;var i=+new Date,o=0,l=function a(){o=+n.style.opacity+(new Date().getTime()-i)/r,n.style.opacity=o,i=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};l()}}},{key:"fadeOut",value:function(n,r){if(n)var i=1,o=50,l=o/r,a=setInterval(function(){i-=l,i<=0&&(i=0,clearInterval(a)),n.style.opacity=i},o)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"appendChild",value:function(n,r){if(this.isElement(r))r.appendChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(n);else throw new Error("Cannot append "+r+" to "+n)}},{key:"removeChild",value:function(n,r){if(this.isElement(r))r.removeChild(n);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(n);else throw new Error("Cannot remove "+n+" from "+r)}},{key:"isElement",value:function(n){return(typeof HTMLElement>"u"?"undefined":je(HTMLElement))==="object"?n instanceof HTMLElement:n&&je(n)==="object"&&n!==null&&n.nodeType===1&&typeof n.nodeName=="string"}},{key:"scrollInView",value:function(n,r){var i=getComputedStyle(n).getPropertyValue("borderTopWidth"),o=i?parseFloat(i):0,l=getComputedStyle(n).getPropertyValue("paddingTop"),a=l?parseFloat(l):0,s=n.getBoundingClientRect(),u=r.getBoundingClientRect(),f=u.top+document.body.scrollTop-(s.top+document.body.scrollTop)-o-a,p=n.scrollTop,h=n.clientHeight,m=this.getOuterHeight(r);f<0?n.scrollTop=p+f:f+m>h&&(n.scrollTop=p+f-h+m)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(n){if(n){var r=getComputedStyle(n);return n.offsetWidth-n.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);var o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}},{key:"getBrowser",value:function(){if(!this.browser){var n=this.resolveUserAgent();this.browser={},n.browser&&(this.browser[n.browser]=!0,this.browser.version=n.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var n=navigator.userAgent.toLowerCase(),r=/(chrome)[ ]([\w.]+)/.exec(n)||/(webkit)[ ]([\w.]+)/.exec(n)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(n)||/(msie) ([\w.]+)/.exec(n)||n.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n)||[];return{browser:r[1]||"",version:r[2]||"0"}}},{key:"isVisible",value:function(n){return n&&(n.clientHeight!==0||n.getClientRects().length!==0||getComputedStyle(n).display!=="none")}},{key:"isExist",value:function(n){return n!==null&&typeof n<"u"&&n.nodeName&&n.parentNode}},{key:"hasDOM",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"getFocusableElements",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=e.find(n,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(r,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r)),o=[],l=Vl(i),a;try{for(l.s();!(a=l.n()).done;){var s=a.value;getComputedStyle(s).display!=="none"&&getComputedStyle(s).visibility!=="hidden"&&o.push(s)}}catch(u){l.e(u)}finally{l.f()}return o}},{key:"getFirstFocusableElement",value:function(n,r){var i=e.getFocusableElements(n,r);return i.length>0?i[0]:null}},{key:"getLastFocusableElement",value:function(n,r){var i=e.getFocusableElements(n,r);return i.length>0?i[i.length-1]:null}},{key:"focus",value:function(n,r){var i=r===void 0?!0:!r;n&&document.activeElement!==n&&n.focus({preventScroll:i})}},{key:"getCursorOffset",value:function(n,r,i,o){if(n){var l=getComputedStyle(n),a=document.createElement("div");a.style.position="absolute",a.style.top="0px",a.style.left="0px",a.style.visibility="hidden",a.style.pointerEvents="none",a.style.overflow=l.overflow,a.style.width=l.width,a.style.height=l.height,a.style.padding=l.padding,a.style.border=l.border,a.style.overflowWrap=l.overflowWrap,a.style.whiteSpace=l.whiteSpace,a.style.lineHeight=l.lineHeight,a.innerHTML=r.replace(/\r\n|\r|\n/g,"<br />");var s=document.createElement("span");s.textContent=o,a.appendChild(s);var u=document.createTextNode(i);a.appendChild(u),document.body.appendChild(a);var f=s.offsetLeft,p=s.offsetTop,h=s.clientHeight;return document.body.removeChild(a),{left:Math.abs(f-n.scrollLeft),top:Math.abs(p-n.scrollTop)+h}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(n,r,i){n[r].apply(n,i)}},{key:"isClickable",value:function(n){var r=n.nodeName,i=n.parentElement&&n.parentElement.nodeName;return r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||i==="INPUT"||i==="TEXTAREA"||i==="BUTTON"||i==="A"||this.hasClass(n,"p-button")||this.hasClass(n.parentElement,"p-button")||this.hasClass(n.parentElement,"p-checkbox")||this.hasClass(n.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(n,r){if(typeof r=="string")n.style.cssText=this.style;else for(var i in this.style)n.style[i]=r[i]}},{key:"exportCSV",value:function(n,r){var i=new Blob([n],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(i,r+".csv");else{var o=e.saveAs({name:r+".csv",src:URL.createObjectURL(i)});o||(n="data:text/csv;charset=utf-8,"+n,window.open(encodeURI(n)))}}},{key:"saveAs",value:function(n){if(n){var r=document.createElement("a");if(r.download!==void 0){var i=n.name,o=n.src;return r.setAttribute("href",o),r.setAttribute("download",i),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}}return!1}},{key:"createInlineStyle",value:function(n){var r=document.createElement("style");try{n||(n={}.REACT_APP_CSS_NONCE)}catch{}return n&&r.setAttribute("nonce",n),document.head.appendChild(r),r}},{key:"removeInlineStyle",value:function(n){if(this.isExist(n)){try{document.head.removeChild(n)}catch{}n=null}return n}},{key:"getTargetElement",value:function(n){if(!n)return null;if(n==="document")return document;if(n==="window")return window;if(je(n)==="object"&&n.hasOwnProperty("current"))return this.isExist(n.current)?n.current:null;var r=function(l){return!!(l&&l.constructor&&l.call&&l.apply)},i=r(n)?n():n;return i&&i.nodeType===9||this.isExist(i)?i:null}},{key:"getAttributeNames",value:function(n){var r,i,o;for(i=[],o=n.attributes,r=0;r<o.length;++r)i.push(o[r].nodeName);return i.sort(),i}},{key:"isEqualElement",value:function(n,r){var i,o,l,a,s;if(i=e.getAttributeNames(n),o=e.getAttributeNames(r),i.join(",")!==o.join(","))return!1;for(var u=0;u<i.length;++u)if(l=i[u],l==="style")for(var f=n.style,p=r.style,h=/^\d+$/,m=0,v=Object.keys(f);m<v.length;m++){var w=v[m];if(!h.test(w)&&f[w]!==p[w])return!1}else if(n.getAttribute(l)!==r.getAttribute(l))return!1;for(a=n.firstChild,s=r.firstChild;a&&s;a=a.nextSibling,s=s.nextSibling){if(a.nodeType!==s.nodeType)return!1;if(a.nodeType===1){if(!e.isEqualElement(a,s))return!1}else if(a.nodeValue!==s.nodeValue)return!1}return!(a||s)}}]),e}();Dp(re,"DATA_PROPS",["data-"]);Dp(re,"ARIA_PROPS",["aria","focus-target"]);function K0(e){if(Array.isArray(e))return Ga(e)}function G0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function J0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jp(e){return K0(e)||G0(e)||$p(e)||J0()}var No=function(){function e(){bp(this,e)}return Fp(e,null,[{key:"equals",value:function(n,r,i){return i&&n&&je(n)==="object"&&r&&je(r)==="object"?this.resolveFieldData(n,i)===this.resolveFieldData(r,i):this.deepEquals(n,r)}},{key:"deepEquals",value:function(n,r){if(n===r)return!0;if(n&&r&&je(n)=="object"&&je(r)=="object"){var i=Array.isArray(n),o=Array.isArray(r),l,a,s;if(i&&o){if(a=n.length,a!==r.length)return!1;for(l=a;l--!==0;)if(!this.deepEquals(n[l],r[l]))return!1;return!0}if(i!==o)return!1;var u=n instanceof Date,f=r instanceof Date;if(u!==f)return!1;if(u&&f)return n.getTime()===r.getTime();var p=n instanceof RegExp,h=r instanceof RegExp;if(p!==h)return!1;if(p&&h)return n.toString()===r.toString();var m=Object.keys(n);if(a=m.length,a!==Object.keys(r).length)return!1;for(l=a;l--!==0;)if(!Object.prototype.hasOwnProperty.call(r,m[l]))return!1;for(l=a;l--!==0;)if(s=m[l],!this.deepEquals(n[s],r[s]))return!1;return!0}return n!==n&&r!==r}},{key:"resolveFieldData",value:function(n,r){if(n&&Object.keys(n).length&&r){if(this.isFunction(r))return r(n);if(e.isNotEmpty(n[r]))return n[r];if(r.indexOf(".")===-1)return n[r];for(var i=r.split("."),o=n,l=0,a=i.length;l<a;++l){if(o==null)return null;o=o[i[l]]}return o}else return null}},{key:"isFunction",value:function(n){return!!(n&&n.constructor&&n.call&&n.apply)}},{key:"isLetter",value:function(n){return n&&(n.toUpperCase()!=n.toLowerCase()||n.codePointAt(0)>127)}},{key:"findDiffKeys",value:function(n,r){return!n||!r?{}:Object.keys(n).filter(function(i){return!r.hasOwnProperty(i)}).reduce(function(i,o){return i[o]=n[o],i},{})}},{key:"reduceKeys",value:function(n,r){var i={};return!n||!r||r.length===0||Object.keys(n).filter(function(o){return r.some(function(l){return o.startsWith(l)})}).forEach(function(o){i[o]=n[o],delete n[o]}),i}},{key:"reorderArray",value:function(n,r,i){var o;if(n&&r!==i){if(i>=n.length)for(o=i-n.length;o--+1;)n.push(void 0);n.splice(i,0,n.splice(r,1)[0])}}},{key:"findIndexInList",value:function(n,r,i){var o=this;return r?i?r.findIndex(function(l){return o.equals(l,n,i)}):r.findIndex(function(l){return l===n}):-1}},{key:"getJSXElement",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return this.isFunction(n)?n.apply(void 0,i):n}},{key:"getPropValue",value:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];var l=i;return i&&i.length===1&&(l=i[0]),this.isFunction(n)?n.apply(void 0,jp(l)):n}},{key:"getRefElement",value:function(n){return n?je(n)==="object"&&n.hasOwnProperty("current")?n.current:n:null}},{key:"combinedRefs",value:function(n,r){n&&r&&(typeof r=="function"?r(n.current):r.current=n.current)}},{key:"removeAccents",value:function(n){return n&&n.search(/[\xC0-\xFF]/g)>-1&&(n=n.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),n}},{key:"isEmpty",value:function(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!(n instanceof Date)&&je(n)==="object"&&Object.keys(n).length===0}},{key:"isNotEmpty",value:function(n){return!this.isEmpty(n)}},{key:"sort",value:function(n,r){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,o=arguments.length>3?arguments[3]:void 0,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,a=e.compare(n,r,o,i),s=i;return(e.isEmpty(n)||e.isEmpty(r))&&(s=l===1?i:l),s*a}},{key:"compare",value:function(n,r,i){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,l=-1,a=e.isEmpty(n),s=e.isEmpty(r);return a&&s?l=0:a?l=o:s?l=-o:typeof n=="string"&&typeof r=="string"?l=n.localeCompare(r,i,{numeric:!0}):l=n<r?-1:n>r?1:0,l}}]),e}();function q0(){var e=[],t=function(a,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,f=i(a,s,u),p=f.value+(f.key===a?0:u)+1;return e.push({key:a,value:p}),p},n=function(a){e=e.filter(function(s){return s.value!==a})},r=function(a,s){return i(a,s).value},i=function(a,s){var u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return jp(e).reverse().find(function(f){return s?!0:f.key===a})||{key:a,value:u}},o=function(a){return a&&parseInt(a.style.zIndex,10)||0};return{get:o,set:function(a,s,u,f){s&&(s.style.zIndex=String(t(a,u,f)))},clear:function(a){a&&(n(Ln.get(a)),a.style.zIndex="")},getCurrent:function(a,s){return r(a,s)}}}var Ln=q0(),be=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function ii(e){return ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ii(e)}function ey(e,t){if(ii(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(ii(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hp(e){var t=ey(e,"string");return ii(t)==="symbol"?t:String(t)}function Pt(e,t,n){return t=Hp(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hp(r.key),r)}}function ty(e,t,n){return t&&Vc(e.prototype,t),n&&Vc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ny(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Ce=ty(function e(){ny(this,e)});Pt(Ce,"ripple",!1);Pt(Ce,"inputStyle","outlined");Pt(Ce,"locale","en");Pt(Ce,"appendTo",null);Pt(Ce,"cssTransition",!0);Pt(Ce,"autoZIndex",!0);Pt(Ce,"nonce",null);Pt(Ce,"nullSortOrder",1);Pt(Ce,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Pt(Ce,"filterMatchModeOptions",{text:[be.STARTS_WITH,be.CONTAINS,be.NOT_CONTAINS,be.ENDS_WITH,be.EQUALS,be.NOT_EQUALS],numeric:[be.EQUALS,be.NOT_EQUALS,be.LESS_THAN,be.LESS_THAN_OR_EQUAL_TO,be.GREATER_THAN,be.GREATER_THAN_OR_EQUAL_TO],date:[be.DATE_IS,be.DATE_IS_NOT,be.DATE_BEFORE,be.DATE_AFTER]});var ry={en:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",filter:"Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",custom:"Custom",clear:"Clear",close:"Close",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",weekHeader:"Wk",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No available options",emptyMessage:"No results found",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",pageLabel:"Page",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",previousPageLabel:"Previous Page",selectLabel:"Select",unselectLabel:"Unselect",expandLabel:"Expand",collapseLabel:"Collapse"}}};function iy(e,t){var n=t||Ce.locale;try{return oy(n)[e]}catch{throw new Error("The ".concat(e," option is not found in the current locale('").concat(n,"')."))}}function oy(e){var t=e||Ce.locale;return ry[t]}function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}function Wp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function qa(e,t){return qa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qa(e,t)}function Up(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,qa(e,t)}function ly(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function ay(e,t){e.classList?e.classList.add(t):ly(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Yc(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function sy(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Yc(e.className,t):e.setAttribute("class",Yc(e.className&&e.className.baseVal||"",t))}const Xc={disabled:!1},Bp=Ie.createContext(null);var Vp=function(t){return t.scrollTop},Tr="unmounted",cn="exited",fn="entering",Rn="entered",es="exiting",Mt=function(e){Up(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var l=i,a=l&&!l.isMounting?r.enter:r.appear,s;return o.appearStatus=null,r.in?a?(s=cn,o.appearStatus=fn):s=Rn:r.unmountOnExit||r.mountOnEnter?s=Tr:s=cn,o.state={status:s},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var l=i.in;return l&&o.status===Tr?{status:cn}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var l=this.state.status;this.props.in?l!==fn&&l!==Rn&&(o=fn):(l===fn||l===Rn)&&(o=es)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,l,a;return o=l=a=i,i!=null&&typeof i!="number"&&(o=i.exit,l=i.enter,a=i.appear!==void 0?i.appear:l),{exit:o,enter:l,appear:a}},n.updateStatus=function(i,o){if(i===void 0&&(i=!1),o!==null)if(this.cancelNextCallback(),o===fn){if(this.props.unmountOnExit||this.props.mountOnEnter){var l=this.props.nodeRef?this.props.nodeRef.current:_r.findDOMNode(this);l&&Vp(l)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===cn&&this.setState({status:Tr})},n.performEnter=function(i){var o=this,l=this.props.enter,a=this.context?this.context.isMounting:i,s=this.props.nodeRef?[a]:[_r.findDOMNode(this),a],u=s[0],f=s[1],p=this.getTimeouts(),h=a?p.appear:p.enter;if(!i&&!l||Xc.disabled){this.safeSetState({status:Rn},function(){o.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:fn},function(){o.props.onEntering(u,f),o.onTransitionEnd(h,function(){o.safeSetState({status:Rn},function(){o.props.onEntered(u,f)})})})},n.performExit=function(){var i=this,o=this.props.exit,l=this.getTimeouts(),a=this.props.nodeRef?void 0:_r.findDOMNode(this);if(!o||Xc.disabled){this.safeSetState({status:cn},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:es},function(){i.props.onExiting(a),i.onTransitionEnd(l.exit,function(){i.safeSetState({status:cn},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,l=!0;return this.nextCallback=function(a){l&&(l=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var l=this.props.nodeRef?this.props.nodeRef.current:_r.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!l||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],u=s[0],f=s[1];this.props.addEndListener(u,f)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Tr)return null;var o=this.props,l=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=Wp(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Ie.createElement(Bp.Provider,{value:null},typeof l=="function"?l(i,a):Ie.cloneElement(Ie.Children.only(l),a))},t}(Ie.Component);Mt.contextType=Bp;Mt.propTypes={};function An(){}Mt.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:An,onEntering:An,onEntered:An,onExit:An,onExiting:An,onExited:An};Mt.UNMOUNTED=Tr;Mt.EXITED=cn;Mt.ENTERING=fn;Mt.ENTERED=Rn;Mt.EXITING=es;const uy=Mt;var cy=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return ay(t,r)})},Yl=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return sy(t,r)})},au=function(e){Up(t,e);function t(){for(var r,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return r=e.call.apply(e,[this].concat(o))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(a,s){var u=r.resolveArguments(a,s),f=u[0],p=u[1];r.removeClasses(f,"exit"),r.addClass(f,p?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(a,s)},r.onEntering=function(a,s){var u=r.resolveArguments(a,s),f=u[0],p=u[1],h=p?"appear":"enter";r.addClass(f,h,"active"),r.props.onEntering&&r.props.onEntering(a,s)},r.onEntered=function(a,s){var u=r.resolveArguments(a,s),f=u[0],p=u[1],h=p?"appear":"enter";r.removeClasses(f,h),r.addClass(f,h,"done"),r.props.onEntered&&r.props.onEntered(a,s)},r.onExit=function(a){var s=r.resolveArguments(a),u=s[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(a)},r.onExiting=function(a){var s=r.resolveArguments(a),u=s[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(a)},r.onExited=function(a){var s=r.resolveArguments(a),u=s[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(a)},r.resolveArguments=function(a,s){return r.props.nodeRef?[r.props.nodeRef.current,a]:[a,s]},r.getClassNames=function(a){var s=r.props.classNames,u=typeof s=="string",f=u&&s?s+"-":"",p=u?""+f+a:s[a],h=u?p+"-active":s[a+"Active"],m=u?p+"-done":s[a+"Done"];return{baseClassName:p,activeClassName:h,doneClassName:m}},r}var n=t.prototype;return n.addClass=function(i,o,l){var a=this.getClassNames(o)[l+"ClassName"],s=this.getClassNames("enter"),u=s.doneClassName;o==="appear"&&l==="done"&&u&&(a+=" "+u),l==="active"&&i&&Vp(i),a&&(this.appliedClasses[o][l]=a,cy(i,a))},n.removeClasses=function(i,o){var l=this.appliedClasses[o],a=l.base,s=l.active,u=l.done;this.appliedClasses[o]={},a&&Yl(i,a),s&&Yl(i,s),u&&Yl(i,u)},n.render=function(){var i=this.props;i.classNames;var o=Wp(i,["classNames"]);return Ie.createElement(uy,Ja({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(Ie.Component);au.defaultProps={classNames:""};au.propTypes={};const fy=au;var dy=function(t){var n=b.useRef(void 0);return b.useEffect(function(){n.current=t}),n.current},su=function(t){return b.useEffect(t,[])},oi=function(t,n){var r=b.useRef(!1);return b.useEffect(function(){if(!r.current){r.current=!0;return}return t&&t()},n)},pl=function(t){return b.useEffect(function(){return t},[])},Qc=function(t){var n=t.target,r=n===void 0?"document":n,i=t.type,o=t.listener,l=t.options,a=t.when,s=a===void 0?!0:a,u=b.useRef(null),f=b.useRef(null),p=dy(l),h=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};No.isNotEmpty(w.target)&&(m(),(w.when||s)&&(u.current=re.getTargetElement(w.target))),!f.current&&u.current&&(f.current=function(C){return o&&o(C)},u.current.addEventListener(i,f.current,l))},m=function(){f.current&&(u.current.removeEventListener(i,f.current,l),f.current=null)};return b.useEffect(function(){s?u.current=re.getTargetElement(r):(m(),u.current=null)},[r,s]),b.useEffect(function(){f.current&&(f.current!==o||p!==l)&&(m(),s&&h())},[o,l]),pl(function(){m()}),[h,m]};function li(e){return li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},li(e)}function py(e,t){if(li(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(li(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function hy(e){var t=py(e,"string");return li(t)==="symbol"?t:String(t)}function my(e,t,n){return t=hy(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Xl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zc(Object(n),!0).forEach(function(r){my(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var uu=b.forwardRef(function(e,t){var n=e.disabled||e.options&&e.options.disabled||!Ce.cssTransition,r=function(m,v){e.onEnter&&e.onEnter(m,v),e.options&&e.options.onEnter&&e.options.onEnter(m,v)},i=function(m,v){e.onEntering&&e.onEntering(m,v),e.options&&e.options.onEntering&&e.options.onEntering(m,v)},o=function(m,v){e.onEntered&&e.onEntered(m,v),e.options&&e.options.onEntered&&e.options.onEntered(m,v)},l=function(m){e.onExit&&e.onExit(m),e.options&&e.options.onExit&&e.options.onExit(m)},a=function(m){e.onExiting&&e.onExiting(m),e.options&&e.options.onExiting&&e.options.onExiting(m)},s=function(m){e.onExited&&e.onExited(m),e.options&&e.options.onExited&&e.options.onExited(m)};if(oi(function(){if(n){var h=No.getRefElement(e.nodeRef);e.in?(r(h,!0),i(h,!0),o(h,!0)):(l(h),a(h),s(h))}},[e.in]),n)return e.in?e.children:null;var u={nodeRef:e.nodeRef,in:e.in,onEnter:r,onEntering:i,onEntered:o,onExit:l,onExiting:a,onExited:s},f={classNames:e.classNames,timeout:e.timeout,unmountOnExit:e.unmountOnExit},p=Xl(Xl(Xl({},f),e.options||{}),u);return b.createElement(fy,p,e.children)});uu.displayName="CSSTransition";uu.defaultProps={__TYPE:"CSSTransition"};function gy(e){if(Array.isArray(e))return e}function vy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,l,a=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}function Kc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yy(e,t){if(e){if(typeof e=="string")return Kc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kc(e,t)}}function wy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xy(e,t){return gy(e)||vy(e,t)||yy(e,t)||wy()}var cu=b.memo(function(e){var t=b.useState(e.visible&&re.hasDOM()),n=xy(t,2),r=n[0],i=n[1];su(function(){re.hasDOM()&&!r&&(i(!0),e.onMounted&&e.onMounted())}),oi(function(){e.onMounted&&e.onMounted()},[r]),pl(function(){e.onUnmounted&&e.onUnmounted()});var o=e.element||e.children;if(o&&r){var l=e.appendTo||Ce.appendTo||document.body;return l==="self"?o:_r.createPortal(o,l)}return null});cu.displayName="Portal";cu.defaultProps={__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null};var fu=b.memo(b.forwardRef(function(){var e=b.useRef(null),t=b.useRef(null),n=function(){return e.current&&e.current.parentElement},r=function(){t.current&&(t.current.addEventListener("mousedown",l),re.isTouchDevice()&&t.current.addEventListener("touchstart",o))},i=function(){t.current&&(t.current.removeEventListener("mousedown",l),re.isTouchDevice()&&t.current.removeEventListener("touchstart",o))},o=function(f){var p=re.getOffset(t.current),h=f.targetTouches[0].pageX-p.left+document.body.scrollTop-re.getWidth(e.current)/2,m=f.targetTouches[0].pageY-p.top+document.body.scrollLeft-re.getHeight(e.current)/2;a(h,m)},l=function(f){if(!re.isTouchDevice()){var p=re.getOffset(t.current),h=f.pageX-p.left+document.body.scrollTop-re.getWidth(e.current)/2,m=f.pageY-p.top+document.body.scrollLeft-re.getHeight(e.current)/2;a(h,m)}},a=function(f,p){if(!(!e.current||getComputedStyle(e.current,null).display==="none")){if(re.removeClass(e.current,"p-ink-active"),!re.getHeight(e.current)&&!re.getWidth(e.current)){var h=Math.max(re.getOuterWidth(t.current),re.getOuterHeight(t.current));e.current.style.height=h+"px",e.current.style.width=h+"px"}e.current.style.top=p+"px",e.current.style.left=f+"px",re.addClass(e.current,"p-ink-active")}},s=function(f){re.removeClass(f.currentTarget,"p-ink-active")};return su(function(){e.current&&(t.current=n(),r())}),oi(function(){e.current&&!t.current&&(t.current=n(),r())}),pl(function(){e.current&&(t.current=null,i())}),Ce.ripple?b.createElement("span",{role:"presentation",ref:e,className:"p-ink",onAnimationEnd:s}):null}));fu.displayName="Ripple";fu.defaultProps={__TYPE:"Ripple"};function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}function Sy(e){if(Array.isArray(e))return e}function Ey(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,l,a=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);s=!0);}catch(f){u=!0,i=f}finally{try{if(!s&&n.return!=null&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw i}}return a}}function Gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Cy(e,t){if(e){if(typeof e=="string")return Gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(e,t)}}function ky(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bi(e,t){return Sy(e)||Ey(e,t)||Cy(e,t)||ky()}var hl=b.forwardRef(function(e,t){var n=b.useState(!1),r=bi(n,2),i=r[0],o=r[1],l=b.useState(!1),a=bi(l,2),s=a[0],u=a[1],f=b.useRef(null),p=b.useRef(null),h=b.useRef(null),m=Qc({type:"keydown",listener:function(A){A.which===27&&Ln.get(p.current)===Ln.getCurrent("modal",Ce.autoZIndex)&&H(A)}}),v=bi(m,2),w=v[0],C=v[1],d=Qc({type:"click",listener:function(A){A.which!==2&&E(A)&&H(A)}}),c=bi(d,2),g=c[0],x=c[1],E=function(A){return f&&f.current&&!f.current.contains(A.target)},O=function(){var A=["left","right","top","bottom"],V=A.find(function(P){return P===e.position});return V?"p-sidebar-".concat(V):""},I=function(){var A=document.activeElement,V=A&&f&&f.current.contains(A);!V&&e.showCloseIcon&&h.current.focus()},N=function(A){e.dismissable&&e.modal&&p.current===A.target&&H(A)},H=function(A){e.onHide(),A.preventDefault()},M=function(){e.onShow&&e.onShow(),I(),pe()},ce=function(){e.modal&&re.addClass(p.current,"p-component-overlay-leave")},le=function(){Ln.clear(p.current),o(!1),we()},pe=function(){e.closeOnEscape&&w(),e.dismissable&&!e.modal&&g(),e.blockScroll&&re.addClass(document.body,"p-overflow-hidden")},we=function(){C(),x(),e.blockScroll&&re.removeClass(document.body,"p-overflow-hidden")};b.useImperativeHandle(t,function(){return{props:e,getElement:function(){return f.current},gteMask:function(){return p.current},getCloseIcon:function(){return h.current}}}),su(function(){e.visible&&o(!0)}),oi(function(){e.visible&&!i&&o(!0),e.visible!==s&&i&&u(e.visible)}),oi(function(){i&&(Ln.set("modal",p.current,Ce.autoZIndex,e.baseZIndex||Ce.zIndex.modal),u(!0))},[i]),pl(function(){we(),p.current&&Ln.clear(p.current)});var xe=function(){if(e.showCloseIcon){var A=e.ariaCloseLabel||iy("close");return b.createElement("button",{type:"button",ref:h,className:"p-sidebar-close p-sidebar-icon p-link",onClick:H,"aria-label":A},b.createElement("span",{className:"p-sidebar-close-icon pi pi-times","aria-hidden":"true"}),b.createElement(fu,null))}return null},ct=function(){return e.icons?No.getJSXElement(e.icons,e):null},_e=function(){var A=No.findDiffKeys(e,hl.defaultProps),V=Wc("p-sidebar p-component",e.className),P=Wc("p-sidebar-mask",{"p-component-overlay p-component-overlay-enter":e.modal,"p-sidebar-mask-scrollblocker":e.blockScroll,"p-sidebar-visible":i,"p-sidebar-full":e.fullScreen},O(),e.maskClassName),L=xe(),R=ct(),F={enter:e.fullScreen?150:300,exit:e.fullScreen?150:300};return b.createElement("div",{ref:p,style:e.maskStyle,className:P,onMouseDown:N},b.createElement(uu,{nodeRef:f,classNames:"p-sidebar",in:s,timeout:F,options:e.transitionOptions,unmountOnExit:!0,onEntered:M,onExiting:ce,onExited:le},b.createElement("div",ts({ref:f,id:e.id,className:V,style:e.style},A,{role:"complementary"}),b.createElement("div",{className:"p-sidebar-header"},R,L),b.createElement("div",{className:"p-sidebar-content"},e.children))))},_=function(){var A=_e();return b.createElement(cu,{element:A,appendTo:e.appendTo,visible:!0})};return i&&_()});hl.displayName="Sidebar";hl.defaultProps={__TYPE:"Sidebar",id:null,style:null,className:null,maskStyle:null,maskClassName:null,visible:!1,position:"left",fullScreen:!1,blockScroll:!1,baseZIndex:0,dismissable:!0,showCloseIcon:!0,ariaCloseLabel:null,closeOnEscape:!0,icons:null,modal:!0,appendTo:null,transitionOptions:null,onShow:null,onHide:null};const _y=ee.img`
  background: transparent;
  border: none;
  cursor: pointer;

  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 7;

  @media (min-width: 950px) {
    display: none;
  }
`,Py=ee.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background: ${e=>e.theme.primaryDark};

  transition: display 5s;

  width: 100%;
  height: 100%;
  padding: 2rem;

  z-index: 6;

  a {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 150%;

    color: ${e=>e.theme.gray100};
  }

  p {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 150%;

    color: ${e=>e.theme.gray100};
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }

  .socialNav {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    a {
      background: linear-gradient(
            rgba(255, 255, 255, 0.04),
            rgba(255, 255, 255, 0.04)
          )
          padding-box,
        ${e=>e.theme.gradientBorder} border-box;
      border-radius: 8px;
      border: 1px solid transparent;

      border-radius: 8px;

      cursor: pointer;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  footer {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    p {
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 150%;

      color: ${e=>e.theme.gray050};
    }
  }
`;const Ty="/assets/hamb-78f15b4e.svg";function Oy(){const[e,t]=b.useState(!1);return D(sf,{children:[S(_y,{src:Ty,onClick:()=>t(!0),alt:"mostrar sidebar"}),S(hl,{style:{background:"#a39185"},visible:e,fullScreen:!0,onHide:()=>t(!1),children:D(Py,{children:[D("nav",{children:[S("a",{href:"#depoimentos",onClick:()=>t(!1),children:"Depoimentos"}),S("a",{href:"#contato",onClick:()=>t(!1),children:"Contato"}),S("a",{href:"#services",onClick:()=>t(!1),children:"Áreas de atuação"}),S("a",{href:"#home",onClick:()=>t(!1),children:"Home"}),S("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=55051991276728",target:"_blank",rel:"noreferrer",children:"Entrar em contato"}),D("nav",{className:"socialNav",children:[S("a",{target:"_blank",href:"https://www.linkedin.com/in/antonio-junior-adv/",rel:"noreferrer",children:S("img",{width:40,height:40,src:j0,alt:"linkedin"})}),S("a",{target:"_blank",href:"https://www.facebook.com/antoniojradv",rel:"noreferrer",children:S("img",{width:40,height:40,src:H0,alt:"facebook"})}),S("a",{target:"_blank",href:"https://www.instagram.com/antoniojunioradvocacia/",rel:"noreferrer",children:S("img",{width:40,height:40,src:W0,alt:"instagram"})})]})]}),D("footer",{children:[S("img",{src:U0,alt:"logomarca Antonio"}),S("p",{children:"Empresa de advocacia especializada em resolver problemas jurídicos."})]})]})})]})}function Ny(){return D(M0,{children:[S(bv,{}),S(Oy,{}),S(E0,{}),S(A0,{}),S(Ev,{}),S(b0,{}),S(F0,{children:S("a",{href:"http://api.whatsapp.com/send?1=pt_BR&phone=55000000000000",target:"_blank",rel:"noreferrer",children:S("img",{src:D0,alt:"whatsapp"})})}),S(Ov,{})]})}const Iy=yv`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1C1A22;
        color: #fff;

        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
    }

    html {
        @media (max-width: 1088px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
        border-radius: 8px;
        width: 0.5rem;
        background: rgba(37, 35, 42, 1);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: rgba(168, 168, 170, 1);
  }
    }

    body, input, textarea, button {
        font-family: 'roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1 {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 3.5rem;
        line-height: 125%
    }

    li {
            list-style-type: none;
    }

    a {
        text-decoration: none;

    }
`,Ay={gray900:"rgba(20, 20, 21, 1)",gray800:"rgba(28, 26, 34, 1)",gray700:"rgba(37, 35, 42, 1)",gray600:"rgba(80, 78, 85, 1)",gray500:"rgba(118, 117, 121, 1)",gray400:"rgba(125, 122, 133, 1)",gray300:"rgba(168, 168, 170, 1)",gray200:"rgba(199, 198, 200, 1)",gray100:"rgba(255, 255, 255, 1)",gray050:"rgba(255, 255, 255, 0.8)",gradientDark:"linear-gradient(90.1deg, rgba(20, 20, 21, 0) 1.59%, rgba(20, 20, 21, 0.24) 99.92%);",gradientSection:"linear-gradient(180deg, #25232A 0%, rgba(37, 35, 42, 0) 100%);",gradientLight:"linear-gradient(329.9deg, rgba(255, 255, 255, 0.08) 14.05%, rgba(255, 255, 255, 0.0368) 87%);",gradientBorder:"linear-gradient(137.62deg, rgba(255, 255, 255, 0.08) 1.79%, rgba(255, 255, 255, 0) 97.61%)",primaryDark:"rgba(97, 52, 203, 1)",primaryDefault:"rgba(130, 87, 229, 1)",primaryLight:"rgba(153, 109, 255, 1)"};function Ly(){return S(sf,{children:S(zp,{children:D(gv,{theme:Ay,children:[S(Ny,{}),S(Iy,{})]})})})}Ql.createRoot(document.getElementById("root")).render(S(Ie.StrictMode,{children:S(Ly,{})}));
