(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=classNames.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):void 0!==(n=(function(){return classNames}).apply(t,[]))&&(e.exports=n)}()},1143:function(e){"use strict";e.exports=function(e,t,n,r,o,a,i,s){if(!e){var l;if(void 0===t)l=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,a,i,s],c=0;(l=Error(t.replace(/%s/g,function(){return u[c++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},2703:function(e,t,n){"use strict";var r=n(414);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6998:function(e,t,n){"use strict";let r,o;n.d(t,{Z:function(){return eh}});var a=n(4184),i=n.n(a),s=n(7294);let l=s.createContext(null);function extends_extends(){return(extends_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function defaultKey(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function useUncontrolledProp(e,t,n){var r=(0,s.useRef)(void 0!==e),o=(0,s.useState)(t),a=o[0],i=o[1],l=void 0!==e,u=r.current;return r.current=l,!l&&u&&a!==t&&i(t),[l?e:a,(0,s.useCallback)(function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),i(e)},[n])]}function useUncontrolled(e,t){return Object.keys(t).reduce(function(n,r){var o,a=n[defaultKey(r)],i=n[r],s=objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(n,[defaultKey(r),r].map(_toPropertyKey)),l=t[r],u=useUncontrolledProp(i,a,e[l]),c=u[0],d=u[1];return extends_extends({},s,((o={})[r]=c,o[l]=d,o))},e)}function componentWillReceiveProps(e){function updater(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}this.setState(updater.bind(this))}function componentWillUpdate(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}n(1143),componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0;var u=n(5893);let c=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:d,Provider:f}=c;function useBootstrapPrefix(e,t){let{prefixes:n}=(0,s.useContext)(c);return e||n[t]||t}let p=s.forwardRef(({bsPrefix:e,className:t,as:n,...r},o)=>{e=useBootstrapPrefix(e,"navbar-brand");let a=n||(r.href?"a":"span");return(0,u.jsx)(a,{...r,ref:o,className:i()(t,e)})});function ownerDocument(e){return e&&e.ownerDocument||document}function ownerWindow(e){var t=ownerDocument(e);return t&&t.defaultView||window}function getComputedStyle(e,t){return ownerWindow(e).getComputedStyle(e,t)}p.displayName="NavbarBrand";var m=/([A-Z])/g;function hyphenate(e){return e.replace(m,"-$1").toLowerCase()}var h=/^ms-/;function hyphenateStyleName(e){return hyphenate(e).replace(h,"-ms-")}var g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function isTransform(e){return!!(e&&g.test(e))}var css=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(hyphenateStyleName(t))||getComputedStyle(e).getPropertyValue(hyphenateStyleName(t));Object.keys(t).forEach(function(o){var a=t[o];a||0===a?isTransform(o)?r+=o+"("+a+") ":n+=hyphenateStyleName(o)+": "+a+";":e.style.removeProperty(hyphenateStyleName(o))}),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function inheritsLoose_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_setPrototypeOf(e,t)}var v=n(3935),E={disabled:!1},x=s.createContext(null),y="unmounted",b="exited",C="entering",N="entered",T="exiting",R=function(e){function Transition(t,n){r=e.call(this,t,n)||this;var r,o,a=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?a?(o=b,r.appearStatus=C):o=N:o=t.unmountOnExit||t.mountOnEnter?y:b,r.state={status:o},r.nextCallback=null,r}inheritsLoose_inheritsLoose(Transition,e),Transition.getDerivedStateFromProps=function(e,t){return e.in&&t.status===y?{status:b}:null};var t=Transition.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==C&&n!==N&&(t=C):(n===C||n===N)&&(t=T)}this.updateStatus(!1,t)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},t.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===C){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===b&&this.setState({status:y})},t.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[v.findDOMNode(this),r],a=o[0],i=o[1],s=this.getTimeouts(),l=r?s.appear:s.enter;if(!e&&!n||E.disabled){this.safeSetState({status:N},function(){t.props.onEntered(a)});return}this.props.onEnter(a,i),this.safeSetState({status:C},function(){t.props.onEntering(a,i),t.onTransitionEnd(l,function(){t.safeSetState({status:N},function(){t.props.onEntered(a,i)})})})},t.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||E.disabled){this.safeSetState({status:b},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:b},function(){e.props.onExited(r)})})})},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},t.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},t.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=o[0],i=o[1];this.props.addEndListener(a,i)}null!=e&&setTimeout(this.nextCallback,e)},t.render=function(){var e=this.state.status;if(e===y)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,objectWithoutPropertiesLoose_objectWithoutPropertiesLoose(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(x.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},Transition}(s.Component);function Transition_noop(){}R.contextType=x,R.propTypes={},R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Transition_noop,onEntering:Transition_noop,onEntered:Transition_noop,onExit:Transition_noop,onExiting:Transition_noop,onExited:Transition_noop},R.UNMOUNTED=y,R.EXITED=b,R.ENTERING=C,R.ENTERED=N,R.EXITING=T;var w=!!("undefined"!=typeof window&&window.document&&window.document.createElement),O=!1,_=!1;try{var k={get passive(){return O=!0},get once(){return _=O=!0}};w&&(window.addEventListener("test",k,k),window.removeEventListener("test",k,!0))}catch(e){}var esm_addEventListener=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!_){var o=r.once,a=r.capture,i=n;!_&&o&&(i=n.__once||function onceHandler(e){this.removeEventListener(t,onceHandler,a),n.call(this,e)},n.__once=i),e.addEventListener(t,i,O?r:a)}e.addEventListener(t,n,r)},esm_removeEventListener=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)},esm_listen=function(e,t,n,r){return esm_addEventListener(e,t,n,r),function(){esm_removeEventListener(e,t,n,r)}};function triggerEvent(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}function parseDuration(e){var t=css(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}function emulateTransitionEnd(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout(function(){r||triggerEvent(e,"transitionend",!0)},t+n),a=esm_listen(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(o),a()}}function transitionEnd(e,t,n,r){null==n&&(n=parseDuration(e)||0);var o=emulateTransitionEnd(e,n,r),a=esm_listen(e,"transitionend",t);return function(){o(),a()}}function transitionEndListener_parseDuration(e,t){let n=css(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function transitionEndListener(e,t){let n=transitionEndListener_parseDuration(e,"transitionDuration"),r=transitionEndListener_parseDuration(e,"transitionDelay"),o=transitionEnd(e,n=>{n.target===e&&(o(),t(n))},n+r)}var esm_createChainedFunction=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}},null)};function triggerBrowserReflow(e){e.offsetHeight}let toFnRef=e=>e&&"function"!=typeof e?t=>{e.current=t}:e;function mergeRefs(e,t){let n=toFnRef(e),r=toFnRef(t);return e=>{n&&n(e),r&&r(e)}}var esm_useMergedRefs=function(e,t){return(0,s.useMemo)(()=>mergeRefs(e,t),[e,t])};function safeFindDOMNode(e){return e&&"setState"in e?v.findDOMNode(e):null!=e?e:null}let S=s.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:a,addEndListener:i,children:l,childRef:c,...d},f)=>{let p=(0,s.useRef)(null),m=esm_useMergedRefs(p,c),attachRef=e=>{m(safeFindDOMNode(e))},normalize=e=>t=>{e&&p.current&&e(p.current,t)},h=(0,s.useCallback)(normalize(e),[e]),g=(0,s.useCallback)(normalize(t),[t]),v=(0,s.useCallback)(normalize(n),[n]),E=(0,s.useCallback)(normalize(r),[r]),x=(0,s.useCallback)(normalize(o),[o]),y=(0,s.useCallback)(normalize(a),[a]),b=(0,s.useCallback)(normalize(i),[i]);return(0,u.jsx)(R,{ref:f,...d,onEnter:h,onEntered:v,onEntering:g,onExit:E,onExited:y,onExiting:x,addEndListener:b,nodeRef:p,children:"function"==typeof l?(e,t)=>l(e,{...t,ref:attachRef}):s.cloneElement(l,{ref:attachRef})})}),M={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function getDefaultDimensionValue(e,t){let n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],o=M[e];return r+parseInt(css(t,o[0]),10)+parseInt(css(t,o[1]),10)}let j={[b]:"collapse",[T]:"collapsing",[C]:"collapsing",[N]:"collapse show"},L=s.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,className:a,children:l,dimension:c="height",in:d=!1,timeout:f=300,mountOnEnter:p=!1,unmountOnExit:m=!1,appear:h=!1,getDimensionValue:g=getDefaultDimensionValue,...v},E)=>{let x="function"==typeof c?c():c,y=(0,s.useMemo)(()=>esm_createChainedFunction(e=>{e.style[x]="0"},e),[x,e]),b=(0,s.useMemo)(()=>esm_createChainedFunction(e=>{let t=`scroll${x[0].toUpperCase()}${x.slice(1)}`;e.style[x]=`${e[t]}px`},t),[x,t]),C=(0,s.useMemo)(()=>esm_createChainedFunction(e=>{e.style[x]=null},n),[x,n]),N=(0,s.useMemo)(()=>esm_createChainedFunction(e=>{e.style[x]=`${g(x,e)}px`,triggerBrowserReflow(e)},r),[r,g,x]),T=(0,s.useMemo)(()=>esm_createChainedFunction(e=>{e.style[x]=null},o),[x,o]);return(0,u.jsx)(S,{ref:E,addEndListener:transitionEndListener,...v,"aria-expanded":v.role?d:null,onEnter:y,onEntering:b,onEntered:C,onExit:N,onExiting:T,childRef:l.ref,in:d,timeout:f,mountOnEnter:p,unmountOnExit:m,appear:h,children:(e,t)=>s.cloneElement(l,{...t,className:i()(a,l.props.className,j[e],"width"===x&&"collapse-horizontal")})})}),P=s.createContext(null);P.displayName="NavbarContext";let D=s.forwardRef(({children:e,bsPrefix:t,...n},r)=>{t=useBootstrapPrefix(t,"navbar-collapse");let o=(0,s.useContext)(P);return(0,u.jsx)(L,{in:!!(o&&o.expanded),...n,children:(0,u.jsx)("div",{ref:r,className:t,children:e})})});D.displayName="NavbarCollapse";var esm_useCommittedRef=function(e){let t=(0,s.useRef)(e);return(0,s.useEffect)(()=>{t.current=e},[e]),t};function useEventCallback(e){let t=esm_useCommittedRef(e);return(0,s.useCallback)(function(...e){return t.current&&t.current(...e)},[t])}let B=s.forwardRef(({bsPrefix:e,className:t,children:n,label:r="Toggle navigation",as:o="button",onClick:a,...l},c)=>{e=useBootstrapPrefix(e,"navbar-toggler");let{onToggle:d,expanded:f}=(0,s.useContext)(P)||{},p=useEventCallback(e=>{a&&a(e),d&&d()});return"button"===o&&(l.type="button"),(0,u.jsx)(o,{...l,ref:c,onClick:p,"aria-label":r,className:i()(t,e,!f&&"collapsed"),children:n||(0,u.jsx)("span",{className:`${e}-icon`})})});B.displayName="NavbarToggle";let W=void 0!==n.g&&n.g.navigator&&"ReactNative"===n.g.navigator.product,F="undefined"!=typeof document;var $=F||W?s.useLayoutEffect:s.useEffect;let A=new WeakMap,getMatcher=(e,t)=>{if(!e||!t)return;let n=A.get(t)||new Map;A.set(t,n);let r=n.get(e);return r||((r=t.matchMedia(e)).refCount=0,n.set(r.media,r)),r};function useMediaQuery(e,t="undefined"==typeof window?void 0:window){let n=getMatcher(e,t),[r,o]=(0,s.useState)(()=>!!n&&n.matches);return $(()=>{let n=getMatcher(e,t);if(!n)return o(!1);let r=A.get(t),handleChange=()=>{o(n.matches)};return n.refCount++,n.addListener(handleChange),handleChange(),()=>{n.removeListener(handleChange),n.refCount--,n.refCount<=0&&(null==r||r.delete(n.media)),n=void 0}},[e]),r}function createBreakpointHook(e){let t=Object.keys(e);function and(e,t){return e===t?t:e?`${e} and ${t}`:t}function getNext(e){return t[Math.min(t.indexOf(e)+1,t.length-1)]}function getMaxQuery(t){let n=getNext(t),r=e[n];return r="number"==typeof r?`${r-.2}px`:`calc(${r} - 0.2px)`,`(max-width: ${r})`}function getMinQuery(t){let n=e[t];return"number"==typeof n&&(n=`${n}px`),`(min-width: ${n})`}return function(e,t,n){let r;return"object"==typeof e?(r=e,n=t,t=!0):r={[e]:t=t||!0},useMediaQuery((0,s.useMemo)(()=>Object.entries(r).reduce((e,[t,n])=>(("up"===n||!0===n)&&(e=and(e,getMinQuery(t))),("down"===n||!0===n)&&(e=and(e,getMaxQuery(t))),e),""),[JSON.stringify(r)]),n)}}let I=createBreakpointHook({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function activeElement(e){void 0===e&&(e=ownerDocument());try{var t=e.activeElement;if(!t||!t.nodeName)return null;return t}catch(t){return e.body}}function contains(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}function useMounted(){let e=(0,s.useRef)(!0),t=(0,s.useRef)(()=>e.current);return(0,s.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function useUpdatedRef(e){let t=(0,s.useRef)(e);return t.current=e,t}function useWillUnmount(e){let t=useUpdatedRef(e);(0,s.useEffect)(()=>()=>t.current(),[])}function usePrevious(e){let t=(0,s.useRef)(null);return(0,s.useEffect)(()=>{t.current=e}),t.current}function dataAttr(e){return`data-rr-ui-${e}`}function getBodyScrollbarWidth(e=document){let t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}let U=dataAttr("modal-open");let ModalManager=class ModalManager{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return getBodyScrollbarWidth(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){let t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(css(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(U,""),css(r,t)}reset(){[...this.modals].forEach(e=>this.remove(e))}removeContainerStyle(e){let t=this.getElement();t.removeAttribute(U),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return -1!==t||(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state))),t}remove(e){let t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};var H=ModalManager;let V=(0,s.createContext)(w?window:void 0);function useWindow(){return(0,s.useContext)(V)}V.Provider;let resolveContainerRef=(e,t)=>w?null==e?(t||ownerDocument()).body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect))?e:null:null;function useWaitForDOMRef(e,t){let n=useWindow(),[r,o]=(0,s.useState)(()=>resolveContainerRef(e,null==n?void 0:n.document));if(!r){let t=resolveContainerRef(e);t&&o(t)}return(0,s.useEffect)(()=>{t&&r&&t(r)},[t,r]),(0,s.useEffect)(()=>{let t=resolveContainerRef(e);t!==r&&o(t)},[e,r]),r}var esm_NoopTransition=function({children:e,in:t,onExited:n,mountOnEnter:r,unmountOnExit:o}){let a=(0,s.useRef)(null),i=(0,s.useRef)(t),l=useEventCallback(n);(0,s.useEffect)(()=>{t?i.current=!0:l(a.current)},[t,l]);let u=esm_useMergedRefs(a,e.ref),c=(0,s.cloneElement)(e,{ref:u});return t?c:o||!i.current&&r?null:c};function useTransition({in:e,onTransition:t}){let n=(0,s.useRef)(null),r=(0,s.useRef)(!0),o=useEventCallback(t);return $(()=>{if(!n.current)return;let t=!1;return o({in:e,element:n.current,initial:r.current,isStale:()=>t}),()=>{t=!0}},[e,o]),$(()=>(r.current=!1,()=>{r.current=!0}),[]),n}function ImperativeTransition({children:e,in:t,onExited:n,onEntered:r,transition:o}){let[a,i]=(0,s.useState)(!t);t&&a&&i(!1);let l=useTransition({in:!!t,onTransition:e=>{Promise.resolve(o(e)).then(()=>{e.isStale()||(e.in?null==r||r(e.element,e.initial):(i(!0),null==n||n(e.element)))},t=>{throw e.in||i(!0),t})}}),u=esm_useMergedRefs(l,e.ref);return a&&!t?null:(0,s.cloneElement)(e,{ref:u})}function renderTransition(e,t,n){return e?(0,u.jsx)(e,Object.assign({},n)):t?(0,u.jsx)(ImperativeTransition,Object.assign({},n,{transition:t})):(0,u.jsx)(esm_NoopTransition,Object.assign({},n))}function isEscKey(e){return"Escape"===e.code||27===e.keyCode}let K=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Modal_objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function getManager(e){return r||(r=new H({ownerDocument:null==e?void 0:e.document})),r}function useModalManager(e){let t=useWindow(),n=e||getManager(t),r=(0,s.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,s.useCallback)(e=>{r.current.dialog=e},[]),setBackdropRef:(0,s.useCallback)(e=>{r.current.backdrop=e},[])})}let q=(0,s.forwardRef)((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:a,children:i,backdrop:l=!0,keyboard:c=!0,onBackdropClick:d,onEscapeKeyDown:f,transition:p,runTransition:m,backdropTransition:h,runBackdropTransition:g,autoFocus:E=!0,enforceFocus:x=!0,restoreFocus:y=!0,restoreFocusOptions:b,renderDialog:C,renderBackdrop:N=e=>(0,u.jsx)("div",Object.assign({},e)),manager:T,container:R,onShow:O,onHide:_=()=>{},onExit:k,onExited:S,onExiting:M,onEnter:j,onEntering:L,onEntered:P}=e,D=Modal_objectWithoutPropertiesLoose(e,K),B=useWindow(),W=useWaitForDOMRef(R),F=useModalManager(T),$=useMounted(),A=usePrevious(n),[I,U]=(0,s.useState)(!n),H=(0,s.useRef)(null);(0,s.useImperativeHandle)(t,()=>F,[F]),w&&!A&&n&&(H.current=activeElement(null==B?void 0:B.document)),n&&I&&U(!1);let V=useEventCallback(()=>{if(F.add(),Y.current=esm_listen(document,"keydown",X),Q.current=esm_listen(document,"focus",()=>setTimeout(z),!0),O&&O(),E){var e,t;let n=activeElement(null!=(e=null==(t=F.dialog)?void 0:t.ownerDocument)?e:null==B?void 0:B.document);F.dialog&&n&&!contains(F.dialog,n)&&(H.current=n,F.dialog.focus())}}),q=useEventCallback(()=>{if(F.remove(),null==Y.current||Y.current(),null==Q.current||Q.current(),y){var e;null==(e=H.current)||null==e.focus||e.focus(b),H.current=null}});(0,s.useEffect)(()=>{n&&W&&V()},[n,W,V]),(0,s.useEffect)(()=>{I&&q()},[I,q]),useWillUnmount(()=>{q()});let z=useEventCallback(()=>{if(!x||!$()||!F.isTopModal())return;let e=activeElement(null==B?void 0:B.document);F.dialog&&e&&!contains(F.dialog,e)&&F.dialog.focus()}),G=useEventCallback(e=>{e.target===e.currentTarget&&(null==d||d(e),!0===l&&_())}),X=useEventCallback(e=>{c&&isEscKey(e)&&F.isTopModal()&&(null==f||f(e),e.defaultPrevented||_())}),Q=(0,s.useRef)(),Y=(0,s.useRef)();if(!W)return null;let Z=Object.assign({role:r,ref:F.setDialogRef,"aria-modal":"dialog"===r||void 0},D,{style:a,className:o,tabIndex:-1}),J=C?C(Z):(0,u.jsx)("div",Object.assign({},Z,{children:s.cloneElement(i,{role:"document"})}));J=renderTransition(p,m,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!n,onExit:k,onExiting:M,onExited:(...e)=>{U(!0),null==S||S(...e)},onEnter:j,onEntering:L,onEntered:P,children:J});let ee=null;return l&&(ee=renderTransition(h,g,{in:!!n,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:ee=N({ref:F.setBackdropRef,onClick:G})})),(0,u.jsx)(u.Fragment,{children:v.createPortal((0,u.jsxs)(u.Fragment,{children:[ee,J]}),W)})});q.displayName="Modal";var z=Object.assign(q,{Manager:H});let G={[C]:"show",[N]:"show"},X=s.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},a)=>{let l={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},c=(0,s.useCallback)((e,t)=>{triggerBrowserReflow(e),null==r||r(e,t)},[r]);return(0,u.jsx)(S,{ref:a,addEndListener:transitionEndListener,...l,onEnter:c,childRef:t.ref,children:(r,o)=>s.cloneElement(t,{...o,className:i()("fade",e,t.props.className,G[r],n[r])})})});X.displayName="Fade";let Q=s.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=useBootstrapPrefix(t,"offcanvas-body"),(0,u.jsx)(n,{ref:o,className:i()(e,t),...r})));Q.displayName="OffcanvasBody";let Y={[C]:"show",[N]:"show"},Z=s.forwardRef(({bsPrefix:e,className:t,children:n,in:r=!1,mountOnEnter:o=!1,unmountOnExit:a=!1,appear:l=!1,...c},d)=>(e=useBootstrapPrefix(e,"offcanvas"),(0,u.jsx)(S,{ref:d,addEndListener:transitionEndListener,in:r,mountOnEnter:o,unmountOnExit:a,appear:l,...c,childRef:n.ref,children:(r,o)=>s.cloneElement(n,{...o,className:i()(t,n.props.className,(r===C||r===T)&&`${e}-toggling`,Y[r])})})));Z.displayName="OffcanvasToggling";let J=s.createContext({onHide(){}});var ee=n(5697),et=n.n(ee);let en={"aria-label":et().string,onClick:et().func,variant:et().oneOf(["white"])},er=s.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},o)=>(0,u.jsx)("button",{ref:o,type:"button",className:i()("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));er.displayName="CloseButton",er.propTypes=en;let eo=s.forwardRef(({closeLabel:e="Close",closeVariant:t,closeButton:n=!1,onHide:r,children:o,...a},i)=>{let l=(0,s.useContext)(J),c=useEventCallback(()=>{null==l||l.onHide(),null==r||r()});return(0,u.jsxs)("div",{ref:i,...a,children:[o,n&&(0,u.jsx)(er,{"aria-label":e,variant:t,onClick:c})]})}),ea=s.forwardRef(({bsPrefix:e,className:t,closeLabel:n="Close",closeButton:r=!1,...o},a)=>(e=useBootstrapPrefix(e,"offcanvas-header"),(0,u.jsx)(eo,{ref:a,...o,className:i()(t,e),closeLabel:n,closeButton:r})));ea.displayName="OffcanvasHeader";let ei=s.forwardRef((e,t)=>(0,u.jsx)("div",{...e,ref:t,className:i()(e.className,"h5")})),es=s.forwardRef(({className:e,bsPrefix:t,as:n=ei,...r},o)=>(t=useBootstrapPrefix(t,"offcanvas-title"),(0,u.jsx)(n,{ref:o,className:i()(e,t),...r})));function hasClass(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function addClass(e,t){e.classList?e.classList.add(t):hasClass(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}es.displayName="OffcanvasTitle";var el=Function.prototype.bind.call(Function.prototype.call,[].slice);function qsa(e,t){return el(e.querySelectorAll(t))}function replaceClassName(e,t){return e.replace(RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function removeClass(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=replaceClassName(e.className,t):e.setAttribute("class",replaceClassName(e.className&&e.className.baseVal||"",t))}let eu={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};let BootstrapModalManager=class BootstrapModalManager extends H{adjustAndStore(e,t,n){let r=t.style[e];t.dataset[e]=r,css(t,{[e]:`${parseFloat(css(t,e))+n}px`})}restore(e,t){let n=t.dataset[e];void 0!==n&&(delete t.dataset[e],css(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);let t=this.getElement();if(addClass(t,"modal-open"),!e.scrollBarWidth)return;let n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";qsa(t,eu.FIXED_CONTENT).forEach(t=>this.adjustAndStore(n,t,e.scrollBarWidth)),qsa(t,eu.STICKY_CONTENT).forEach(t=>this.adjustAndStore(r,t,-e.scrollBarWidth)),qsa(t,eu.NAVBAR_TOGGLER).forEach(t=>this.adjustAndStore(r,t,e.scrollBarWidth))}removeContainerStyle(e){super.removeContainerStyle(e);let t=this.getElement();removeClass(t,"modal-open");let n=this.isRTL?"paddingLeft":"paddingRight",r=this.isRTL?"marginLeft":"marginRight";qsa(t,eu.FIXED_CONTENT).forEach(e=>this.restore(n,e)),qsa(t,eu.STICKY_CONTENT).forEach(e=>this.restore(r,e)),qsa(t,eu.NAVBAR_TOGGLER).forEach(e=>this.restore(r,e))}};function getSharedManager(e){return o||(o=new BootstrapModalManager(e)),o}function DialogTransition(e){return(0,u.jsx)(Z,{...e})}function BackdropTransition(e){return(0,u.jsx)(X,{...e})}let ec=s.forwardRef(({bsPrefix:e,className:t,children:n,"aria-labelledby":r,placement:o="start",responsive:a,show:l=!1,backdrop:c=!0,keyboard:d=!0,scroll:f=!1,onEscapeKeyDown:p,onShow:m,onHide:h,container:g,autoFocus:v=!0,enforceFocus:E=!0,restoreFocus:x=!0,restoreFocusOptions:y,onEntered:b,onExit:C,onExiting:N,onEnter:T,onEntering:R,onExited:w,backdropClassName:O,manager:_,renderStaticNode:k=!1,...S},M)=>{let j=(0,s.useRef)();e=useBootstrapPrefix(e,"offcanvas");let{onToggle:L}=(0,s.useContext)(P)||{},[D,B]=(0,s.useState)(!1),W=I(a||"xs","up");(0,s.useEffect)(()=>{B(a?l&&!W:l)},[l,a,W]);let F=useEventCallback(()=>{null==L||L(),null==h||h()}),$=(0,s.useMemo)(()=>({onHide:F}),[F]);function getModalManager(){return _||(f?(j.current||(j.current=new BootstrapModalManager({handleContainerOverflow:!1})),j.current):getSharedManager())}let A=(0,s.useCallback)(t=>(0,u.jsx)("div",{...t,className:i()(`${e}-backdrop`,O)}),[O,e]),renderDialog=s=>(0,u.jsx)("div",{...s,...S,className:i()(t,a?`${e}-${a}`:e,`${e}-${o}`),"aria-labelledby":r,children:n});return(0,u.jsxs)(u.Fragment,{children:[!D&&(a||k)&&renderDialog({}),(0,u.jsx)(J.Provider,{value:$,children:(0,u.jsx)(z,{show:D,ref:M,backdrop:c,container:g,keyboard:d,autoFocus:v,enforceFocus:E&&!f,restoreFocus:x,restoreFocusOptions:y,onEscapeKeyDown:p,onShow:m,onHide:F,onEnter:(e,...t)=>{e&&(e.style.visibility="visible"),null==T||T(e,...t)},onEntering:R,onEntered:b,onExit:C,onExiting:N,onExited:(e,...t)=>{e&&(e.style.visibility=""),null==w||w(...t)},manager:getModalManager(),transition:DialogTransition,backdropTransition:BackdropTransition,renderBackdrop:A,renderDialog:renderDialog})})]})});ec.displayName="Offcanvas";var ed=Object.assign(ec,{Body:Q,Header:ea,Title:es});let ef=s.forwardRef((e,t)=>{let n=(0,s.useContext)(P);return(0,u.jsx)(ed,{ref:t,show:!!(null!=n&&n.expanded),...e,renderStaticNode:!0})});ef.displayName="NavbarOffcanvas";let ep=s.forwardRef(({className:e,bsPrefix:t,as:n="span",...r},o)=>(t=useBootstrapPrefix(t,"navbar-text"),(0,u.jsx)(n,{ref:o,className:i()(e,t),...r})));ep.displayName="NavbarText";let em=s.forwardRef((e,t)=>{let{bsPrefix:n,expand:r=!0,variant:o="light",bg:a,fixed:c,sticky:d,className:f,as:p="nav",expanded:m,onToggle:h,onSelect:g,collapseOnSelect:v=!1,...E}=useUncontrolled(e,{expanded:"onToggle"}),x=useBootstrapPrefix(n,"navbar"),y=(0,s.useCallback)((...e)=>{null==g||g(...e),v&&m&&(null==h||h(!1))},[g,v,m,h]);void 0===E.role&&"nav"!==p&&(E.role="navigation");let b=`${x}-expand`;"string"==typeof r&&(b=`${b}-${r}`);let C=(0,s.useMemo)(()=>({onToggle:()=>null==h?void 0:h(!m),bsPrefix:x,expanded:!!m,expand:r}),[x,m,r,h]);return(0,u.jsx)(P.Provider,{value:C,children:(0,u.jsx)(l.Provider,{value:y,children:(0,u.jsx)(p,{ref:t,...E,className:i()(f,x,r&&b,o&&`${x}-${o}`,a&&`bg-${a}`,d&&`sticky-${d}`,c&&`fixed-${c}`)})})})});em.displayName="Navbar";var eh=Object.assign(em,{Brand:p,Collapse:D,Offcanvas:ef,Text:ep,Toggle:B})}}]);