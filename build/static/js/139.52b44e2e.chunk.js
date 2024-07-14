"use strict";(self.webpackChunkhuzefa_portfolio=self.webpackChunkhuzefa_portfolio||[]).push([[139],{9266:(e,t,o)=>{var n=o(4836);t.Z=void 0;var r=n(o(5649)),i=o(184),a=(0,r.default)((0,i.jsx)("path",{d:"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z"}),"LiveTv");t.Z=a},3208:(e,t,o)=>{o.d(t,{Z:()=>v});var n=o(7462),r=o(3366),i=o(2791),a=o(6752),s=o(3967),p=o(4999),l=o(2071),c=o(184);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function f(e){return"scale(".concat(e,", ").concat(e**2,")")}const d={entering:{opacity:1,transform:f(1)},entered:{opacity:1,transform:"none"}},m="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),h=i.forwardRef((function(e,t){const{addEndListener:o,appear:h=!0,children:v,easing:g,in:y,onEnter:b,onEntered:w,onEntering:x,onExit:O,onExited:T,onExiting:E,style:P,timeout:Z="auto",TransitionComponent:R=a.ZP}=e,M=(0,r.Z)(e,u),j=i.useRef(),L=i.useRef(),D=(0,s.Z)(),k=i.useRef(null),A=(0,l.Z)(k,v.ref,t),C=e=>t=>{if(e){const o=k.current;void 0===t?e(o):e(o,t)}},S=C(x),W=C(((e,t)=>{(0,p.n)(e);const{duration:o,delay:n,easing:r}=(0,p.C)({style:P,timeout:Z,easing:g},{mode:"enter"});let i;"auto"===Z?(i=D.transitions.getAutoHeightDuration(e.clientHeight),L.current=i):i=o,e.style.transition=[D.transitions.create("opacity",{duration:i,delay:n}),D.transitions.create("transform",{duration:m?i:.666*i,delay:n,easing:r})].join(","),b&&b(e,t)})),B=C(w),H=C(E),N=C((e=>{const{duration:t,delay:o,easing:n}=(0,p.C)({style:P,timeout:Z,easing:g},{mode:"exit"});let r;"auto"===Z?(r=D.transitions.getAutoHeightDuration(e.clientHeight),L.current=r):r=t,e.style.transition=[D.transitions.create("opacity",{duration:r,delay:o}),D.transitions.create("transform",{duration:m?r:.666*r,delay:m?o:o||.333*r,easing:n})].join(","),e.style.opacity=0,e.style.transform=f(.75),O&&O(e)})),F=C(T);return i.useEffect((()=>()=>{clearTimeout(j.current)}),[]),(0,c.jsx)(R,(0,n.Z)({appear:h,in:y,nodeRef:k,onEnter:W,onEntered:B,onEntering:S,onExit:N,onExited:F,onExiting:H,addEndListener:e=>{"auto"===Z&&(j.current=setTimeout(e,L.current||0)),o&&o(k.current,e)},timeout:"auto"===Z?null:Z},M,{children:(e,t)=>i.cloneElement(v,(0,n.Z)({style:(0,n.Z)({opacity:0,transform:f(.75),visibility:"exited"!==e||y?void 0:"hidden"},d[e],P,v.props.style),ref:A},t))}))}));h.muiSupportAuto=!0;const v=h},3356:(e,t,o)=>{o.d(t,{Z:()=>ht});var n=o(3366),r=o(7462),i=o(2791),a=o(3733),s=o(4419),p=o(183),l=o(2065),c=o(6934),u=o(3967),f=o(1402),d=o(4036),m=o(3208),h=o(6117),v=o(2876),g=o(4913);function y(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function b(e){return e instanceof y(e).Element||e instanceof Element}function w(e){return e instanceof y(e).HTMLElement||e instanceof HTMLElement}function x(e){return"undefined"!==typeof ShadowRoot&&(e instanceof y(e).ShadowRoot||e instanceof ShadowRoot)}var O=Math.max,T=Math.min,E=Math.round;function P(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function Z(){return!/^((?!chrome|android).)*safari/i.test(P())}function R(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&w(e)&&(r=e.offsetWidth>0&&E(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&E(n.height)/e.offsetHeight||1);var a=(b(e)?y(e):window).visualViewport,s=!Z()&&o,p=(n.left+(s&&a?a.offsetLeft:0))/r,l=(n.top+(s&&a?a.offsetTop:0))/i,c=n.width/r,u=n.height/i;return{width:c,height:u,top:l,right:p+c,bottom:l+u,left:p,x:p,y:l}}function M(e){var t=y(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function j(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return((b(e)?e.ownerDocument:e.document)||window.document).documentElement}function D(e){return R(L(e)).left+M(e).scrollLeft}function k(e){return y(e).getComputedStyle(e)}function A(e){var t=k(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function C(e,t,o){void 0===o&&(o=!1);var n=w(t),r=w(t)&&function(e){var t=e.getBoundingClientRect(),o=E(t.width)/e.offsetWidth||1,n=E(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),i=L(t),a=R(e,r,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(n||!n&&!o)&&(("body"!==j(t)||A(i))&&(s=function(e){return e!==y(e)&&w(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:M(e);var t}(t)),w(t)?((p=R(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=D(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function S(e){var t=R(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function W(e){return"html"===j(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||L(e)}function B(e){return["html","body","#document"].indexOf(j(e))>=0?e.ownerDocument.body:w(e)&&A(e)?e:B(W(e))}function H(e,t){var o;void 0===t&&(t=[]);var n=B(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=y(n),a=r?[i].concat(i.visualViewport||[],A(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(H(W(a)))}function N(e){return["table","td","th"].indexOf(j(e))>=0}function F(e){return w(e)&&"fixed"!==k(e).position?e.offsetParent:null}function I(e){for(var t=y(e),o=F(e);o&&N(o)&&"static"===k(o).position;)o=F(o);return o&&("html"===j(o)||"body"===j(o)&&"static"===k(o).position)?t:o||function(e){var t=/firefox/i.test(P());if(/Trident/i.test(P())&&w(e)&&"fixed"===k(e).position)return null;var o=W(e);for(x(o)&&(o=o.host);w(o)&&["html","body"].indexOf(j(o))<0;){var n=k(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var V="top",z="bottom",q="right",U="left",_="auto",$=[V,z,q,U],X="start",Y="end",G="clippingParents",J="viewport",K="popper",Q="reference",ee=$.reduce((function(e,t){return e.concat([t+"-"+X,t+"-"+Y])}),[]),te=[].concat($,[_]).reduce((function(e,t){return e.concat([t,t+"-"+X,t+"-"+Y])}),[]),oe=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ne(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function re(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var ie={placement:"bottom",modifiers:[],strategy:"absolute"};function ae(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function se(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?ie:r;return function(e,t,o){void 0===o&&(o=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},ie,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:r,setOptions:function(o){var s="function"===typeof o?o(r.options):o;l(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:b(e)?H(e):e.contextElement?H(e.contextElement):[],popper:H(t)};var c=function(e){var t=ne(e);return oe.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=c.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:p,options:n}),l=function(){};a.push(s||l)}})),p.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(ae(t,o)){r.rects={reference:C(t,I(o),"fixed"===r.options.strategy),popper:S(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var i=r.orderedModifiers[n],a=i.fn,l=i.options,c=void 0===l?{}:l,u=i.name;"function"===typeof a&&(r=a({state:r,options:c,name:u,instance:p})||r)}else r.reset=!1,n=-1}}},update:re((function(){return new Promise((function(e){p.forceUpdate(),e(r)}))})),destroy:function(){l(),s=!0}};if(!ae(e,t))return p;function l(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var pe={passive:!0};function le(e){return e.split("-")[0]}function ce(e){return e.split("-")[1]}function ue(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fe(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?le(r):null,a=r?ce(r):null,s=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2;switch(i){case V:t={x:s,y:o.y-n.height};break;case z:t={x:s,y:o.y+o.height};break;case q:t={x:o.x+o.width,y:p};break;case U:t={x:o.x-n.width,y:p};break;default:t={x:o.x,y:o.y}}var l=i?ue(i):null;if(null!=l){var c="y"===l?"height":"width";switch(a){case X:t[l]=t[l]-(o[c]/2-n[c]/2);break;case Y:t[l]=t[l]+(o[c]/2-n[c]/2)}}return t}var de={top:"auto",right:"auto",bottom:"auto",left:"auto"};function me(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof c?c({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),w=U,x=V,O=window;if(l){var T=I(o),P="clientHeight",Z="clientWidth";if(T===y(o)&&"static"!==k(T=L(o)).position&&"absolute"===s&&(P="scrollHeight",Z="scrollWidth"),r===V||(r===U||r===q)&&i===Y)x=z,h-=(u&&T===O&&O.visualViewport?O.visualViewport.height:T[P])-n.height,h*=p?1:-1;if(r===U||(r===V||r===z)&&i===Y)w=q,d-=(u&&T===O&&O.visualViewport?O.visualViewport.width:T[Z])-n.width,d*=p?1:-1}var R,M=Object.assign({position:s},l&&de),j=!0===c?function(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:E(o*r)/r||0,y:E(n*r)/r||0}}({x:d,y:h},y(o)):{x:d,y:h};return d=j.x,h=j.y,p?Object.assign({},M,((R={})[x]=b?"0":"",R[w]=g?"0":"",R.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",R)):Object.assign({},M,((t={})[x]=b?h+"px":"",t[w]=g?d+"px":"",t.transform="",t))}const he={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=te.reduce((function(e,o){return e[o]=function(e,t,o){var n=le(e),r=[U,V].indexOf(n)>=0?-1:1,i="function"===typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[U,q].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],p=s.x,l=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=l),t.modifiersData[n]=a}};var ve={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return ve[e]}))}var ye={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,(function(e){return ye[e]}))}function we(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&x(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function xe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Oe(e,t,o){return t===J?xe(function(e,t){var o=y(e),n=L(e),r=o.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,p=0;if(r){i=r.width,a=r.height;var l=Z();(l||!l&&"fixed"===t)&&(s=r.offsetLeft,p=r.offsetTop)}return{width:i,height:a,x:s+D(e),y:p}}(e,o)):b(t)?function(e,t){var o=R(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):xe(function(e){var t,o=L(e),n=M(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=O(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=O(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+D(e),p=-n.scrollTop;return"rtl"===k(r||o).direction&&(s+=O(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(L(e)))}function Te(e,t,o,n){var r="clippingParents"===t?function(e){var t=H(W(e)),o=["absolute","fixed"].indexOf(k(e).position)>=0&&w(e)?I(e):e;return b(o)?t.filter((function(e){return b(e)&&we(e,o)&&"body"!==j(e)})):[]}(e):[].concat(t),i=[].concat(r,[o]),a=i[0],s=i.reduce((function(t,o){var r=Oe(e,o,n);return t.top=O(r.top,t.top),t.right=T(r.right,t.right),t.bottom=T(r.bottom,t.bottom),t.left=O(r.left,t.left),t}),Oe(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ee(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Pe(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function Ze(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.strategy,a=void 0===i?e.strategy:i,s=o.boundary,p=void 0===s?G:s,l=o.rootBoundary,c=void 0===l?J:l,u=o.elementContext,f=void 0===u?K:u,d=o.altBoundary,m=void 0!==d&&d,h=o.padding,v=void 0===h?0:h,g=Ee("number"!==typeof v?v:Pe(v,$)),y=f===K?Q:K,w=e.rects.popper,x=e.elements[m?y:f],O=Te(b(x)?x:x.contextElement||L(e.elements.popper),p,c,a),T=R(e.elements.reference),E=fe({reference:T,element:w,strategy:"absolute",placement:r}),P=xe(Object.assign({},w,E)),Z=f===K?P:T,M={top:O.top-Z.top+g.top,bottom:Z.bottom-O.bottom+g.bottom,left:O.left-Z.left+g.left,right:Z.right-O.right+g.right},j=e.modifiersData.offset;if(f===K&&j){var D=j[r];Object.keys(M).forEach((function(e){var t=[q,z].indexOf(e)>=0?1:-1,o=[V,z].indexOf(e)>=0?"y":"x";M[e]+=D[o]*t}))}return M}function Re(e,t,o){return O(e,T(t,o))}const Me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,p=o.boundary,l=o.rootBoundary,c=o.altBoundary,u=o.padding,f=o.tether,d=void 0===f||f,m=o.tetherOffset,h=void 0===m?0:m,v=Ze(t,{boundary:p,rootBoundary:l,padding:u,altBoundary:c}),g=le(t.placement),y=ce(t.placement),b=!y,w=ue(g),x="x"===w?"y":"x",E=t.modifiersData.popperOffsets,P=t.rects.reference,Z=t.rects.popper,R="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,M="number"===typeof R?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(E){if(i){var D,k="y"===w?V:U,A="y"===w?z:q,C="y"===w?"height":"width",W=E[w],B=W+v[k],H=W-v[A],N=d?-Z[C]/2:0,F=y===X?P[C]:Z[C],_=y===X?-Z[C]:-P[C],$=t.elements.arrow,Y=d&&$?S($):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[k],K=G[A],Q=Re(0,P[C],Y[C]),ee=b?P[C]/2-N-Q-J-M.mainAxis:F-Q-J-M.mainAxis,te=b?-P[C]/2+N+Q+K+M.mainAxis:_+Q+K+M.mainAxis,oe=t.elements.arrow&&I(t.elements.arrow),ne=oe?"y"===w?oe.clientTop||0:oe.clientLeft||0:0,re=null!=(D=null==j?void 0:j[w])?D:0,ie=W+te-re,ae=Re(d?T(B,W+ee-re-ne):B,W,d?O(H,ie):H);E[w]=ae,L[w]=ae-W}if(s){var se,pe="x"===w?V:U,fe="x"===w?z:q,de=E[x],me="y"===x?"height":"width",he=de+v[pe],ve=de-v[fe],ge=-1!==[V,U].indexOf(g),ye=null!=(se=null==j?void 0:j[x])?se:0,be=ge?he:de-P[me]-Z[me]-ye+M.altAxis,we=ge?de+P[me]+Z[me]-ye-M.altAxis:ve,xe=d&&ge?function(e,t,o){var n=Re(e,t,o);return n>o?o:n}(be,de,we):Re(d?be:he,de,d?we:ve);E[x]=xe,L[x]=xe-de}t.modifiersData[n]=L}},requiresIfExists:["offset"]};const je={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=le(o.placement),p=ue(s),l=[U,q].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return Ee("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Pe(e,$))}(r.padding,o),u=S(i),f="y"===p?V:U,d="y"===p?z:q,m=o.rects.reference[l]+o.rects.reference[p]-a[p]-o.rects.popper[l],h=a[p]-o.rects.reference[p],v=I(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=c[f],w=g-u[l]-c[d],x=g/2-u[l]/2+y,O=Re(b,x,w),T=p;o.modifiersData[n]=((t={})[T]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&we(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Le(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function De(e){return[V,q,z,U].some((function(t){return e[t]>=0}))}var ke=se({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,p=y(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&l.forEach((function(e){e.addEventListener("scroll",o.update,pe)})),s&&p.addEventListener("resize",o.update,pe),function(){i&&l.forEach((function(e){e.removeEventListener("scroll",o.update,pe)})),s&&p.removeEventListener("resize",o.update,pe)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,p=void 0===s||s,l={placement:le(t.placement),variation:ce(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,me(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,me(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];w(r)&&j(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});w(n)&&j(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},he,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,p=o.fallbackPlacements,l=o.padding,c=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=le(v),y=p||(g===v||!m?[ge(v)]:function(e){if(le(e)===_)return[];var t=ge(e);return[be(e),t,be(t)]}(v)),b=[v].concat(y).reduce((function(e,o){return e.concat(le(o)===_?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,p=o.allowedAutoPlacements,l=void 0===p?te:p,c=ce(n),u=c?s?ee:ee.filter((function(e){return ce(e)===c})):$,f=u.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,o){return t[o]=Ze(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[le(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:c,rootBoundary:u,padding:l,flipVariations:m,allowedAutoPlacements:h}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,T=!0,E=b[0],P=0;P<b.length;P++){var Z=b[P],R=le(Z),M=ce(Z)===X,j=[V,z].indexOf(R)>=0,L=j?"width":"height",D=Ze(t,{placement:Z,boundary:c,rootBoundary:u,altBoundary:f,padding:l}),k=j?M?q:U:M?z:V;w[L]>x[L]&&(k=ge(k));var A=ge(k),C=[];if(i&&C.push(D[R]<=0),s&&C.push(D[k]<=0,D[A]<=0),C.every((function(e){return e}))){E=Z,T=!1;break}O.set(Z,C)}if(T)for(var S=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},W=m?3:1;W>0;W--){if("break"===S(W))break}t.placement!==E&&(t.modifiersData[n]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},Me,je,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Ze(t,{elementContext:"reference"}),s=Ze(t,{altBoundary:!0}),p=Le(a,n),l=Le(s,r,i),c=De(p),u=De(l);t.modifiersData[o]={referenceClippingOffsets:p,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}}]}),Ae=o(6174),Ce=o(1217),Se=o(5878);function We(e){return(0,Ce.Z)("MuiPopper",e)}(0,Se.Z)("MuiPopper",["root"]);var Be=o(1107),He=o(184);const Ne={disableDefaultClasses:!1},Fe=i.createContext(Ne);const Ie=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Ve=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function ze(e){return"function"===typeof e?e():e}function qe(e){return void 0!==e.nodeType}const Ue=()=>(0,s.Z)({root:["root"]},function(e){const{disableDefaultClasses:t}=i.useContext(Fe);return o=>t?"":e(o)}(We)),_e={},$e=i.forwardRef((function(e,t){var o;const{anchorEl:a,children:s,direction:p,disablePortal:l,modifiers:c,open:u,placement:f,popperOptions:d,popperRef:m,slotProps:g={},slots:y={},TransitionProps:b}=e,w=(0,n.Z)(e,Ie),x=i.useRef(null),O=(0,h.Z)(x,t),T=i.useRef(null),E=(0,h.Z)(T,m),P=i.useRef(E);(0,v.Z)((()=>{P.current=E}),[E]),i.useImperativeHandle(m,(()=>T.current),[]);const Z=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(f,p),[R,M]=i.useState(Z),[j,L]=i.useState(ze(a));i.useEffect((()=>{T.current&&T.current.forceUpdate()})),i.useEffect((()=>{a&&L(ze(a))}),[a]),(0,v.Z)((()=>{if(!j||!u)return;let e=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;M(t.placement)}}];null!=c&&(e=e.concat(c)),d&&null!=d.modifiers&&(e=e.concat(d.modifiers));const t=ke(j,x.current,(0,r.Z)({placement:Z},d,{modifiers:e}));return P.current(t),()=>{t.destroy(),P.current(null)}}),[j,l,c,u,d,Z]);const D={placement:R};null!==b&&(D.TransitionProps=b);const k=Ue(),A=null!=(o=y.root)?o:"div",C=(0,Be.y)({elementType:A,externalSlotProps:g.root,externalForwardedProps:w,additionalProps:{role:"tooltip",ref:O},ownerState:e,className:k.root});return(0,He.jsx)(A,(0,r.Z)({},C,{children:"function"===typeof s?s(D):s}))})),Xe=i.forwardRef((function(e,t){const{anchorEl:o,children:a,container:s,direction:p="ltr",disablePortal:l=!1,keepMounted:c=!1,modifiers:u,open:f,placement:d="bottom",popperOptions:m=_e,popperRef:h,style:v,transition:y=!1,slotProps:b={},slots:w={}}=e,x=(0,n.Z)(e,Ve),[O,T]=i.useState(!0);if(!c&&!f&&(!y||O))return null;let E;if(s)E=s;else if(o){const e=ze(o);E=e&&qe(e)?(0,g.Z)(e).body:(0,g.Z)(null).body}const P=f||!c||y&&!O?void 0:"none",Z=y?{in:f,onEnter:()=>{T(!1)},onExited:()=>{T(!0)}}:void 0;return(0,He.jsx)(Ae.h,{disablePortal:l,container:E,children:(0,He.jsx)($e,(0,r.Z)({anchorEl:o,direction:p,disablePortal:l,modifiers:u,ref:t,open:y?!O:f,placement:d,popperOptions:m,popperRef:h,slotProps:b,slots:w},x,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:P},v),TransitionProps:Z,children:a}))})}));var Ye=o(9120);const Ge=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Je=(0,c.ZP)(Xe,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Ke=i.forwardRef((function(e,t){var o;const i=(0,Ye.Z)(),a=(0,f.Z)({props:e,name:"MuiPopper"}),{anchorEl:s,component:p,components:l,componentsProps:c,container:u,disablePortal:d,keepMounted:m,modifiers:h,open:v,placement:g,popperOptions:y,popperRef:b,transition:w,slots:x,slotProps:O}=a,T=(0,n.Z)(a,Ge),E=null!=(o=null==x?void 0:x.root)?o:null==l?void 0:l.Root,P=(0,r.Z)({anchorEl:s,container:u,disablePortal:d,keepMounted:m,modifiers:h,open:v,placement:g,popperOptions:y,popperRef:b,transition:w},T);return(0,He.jsx)(Je,(0,r.Z)({as:p,direction:null==i?void 0:i.direction,slots:{root:E},slotProps:null!=O?O:c},P,{ref:t}))}));var Qe=o(9683),et=o(2071),tt=o(7384),ot=o(3031),nt=o(5158);function rt(e){return(0,Ce.Z)("MuiTooltip",e)}const it=(0,Se.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),at=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];const st=(0,c.ZP)(Ke,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((e=>{let{theme:t,ownerState:o,open:n}=e;return(0,r.Z)({zIndex:(t.vars||t).zIndex.tooltip,pointerEvents:"none"},!o.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},o.arrow&&{['&[data-popper-placement*="bottom"] .'.concat(it.arrow)]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},['&[data-popper-placement*="top"] .'.concat(it.arrow)]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},['&[data-popper-placement*="right"] .'.concat(it.arrow)]:(0,r.Z)({},o.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),['&[data-popper-placement*="left"] .'.concat(it.arrow)]:(0,r.Z)({},o.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})})),pt=(0,c.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,d.Z)(o.placement.split("-")[0]))]]}})((e=>{let{theme:t,ownerState:o}=e;return(0,r.Z)({backgroundColor:t.vars?t.vars.palette.Tooltip.bg:(0,l.Fq)(t.palette.grey[700],.92),borderRadius:(t.vars||t).shape.borderRadius,color:(t.vars||t).palette.common.white,fontFamily:t.typography.fontFamily,padding:"4px 8px",fontSize:t.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:t.typography.fontWeightMedium},o.arrow&&{position:"relative",margin:0},o.touch&&{padding:"8px 16px",fontSize:t.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:t.typography.fontWeightRegular},{[".".concat(it.popper,'[data-popper-placement*="left"] &')]:(0,r.Z)({transformOrigin:"right center"},o.isRtl?(0,r.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"}):(0,r.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"})),[".".concat(it.popper,'[data-popper-placement*="right"] &')]:(0,r.Z)({transformOrigin:"left center"},o.isRtl?(0,r.Z)({marginRight:"14px"},o.touch&&{marginRight:"24px"}):(0,r.Z)({marginLeft:"14px"},o.touch&&{marginLeft:"24px"})),[".".concat(it.popper,'[data-popper-placement*="top"] &')]:(0,r.Z)({transformOrigin:"center bottom",marginBottom:"14px"},o.touch&&{marginBottom:"24px"}),[".".concat(it.popper,'[data-popper-placement*="bottom"] &')]:(0,r.Z)({transformOrigin:"center top",marginTop:"14px"},o.touch&&{marginTop:"24px"})});var n})),lt=(0,c.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((e=>{let{theme:t}=e;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,l.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}}));let ct=!1,ut=null,ft={x:0,y:0};function dt(e,t){return o=>{t&&t(o),e(o)}}const mt=i.forwardRef((function(e,t){var o,l,c,h,v,g,y,b,w,x,O,T,E,P,Z,R,M,j,L;const D=(0,f.Z)({props:e,name:"MuiTooltip"}),{arrow:k=!1,children:A,components:C={},componentsProps:S={},describeChild:W=!1,disableFocusListener:B=!1,disableHoverListener:H=!1,disableInteractive:N=!1,disableTouchListener:F=!1,enterDelay:I=100,enterNextDelay:V=0,enterTouchDelay:z=700,followCursor:q=!1,id:U,leaveDelay:_=0,leaveTouchDelay:$=1500,onClose:X,onOpen:Y,open:G,placement:J="bottom",PopperComponent:K,PopperProps:Q={},slotProps:ee={},slots:te={},title:oe,TransitionComponent:ne=m.Z,TransitionProps:re}=D,ie=(0,n.Z)(D,at),ae=i.isValidElement(A)?A:(0,He.jsx)("span",{children:A}),se=(0,u.Z)(),pe="rtl"===se.direction,[le,ce]=i.useState(),[ue,fe]=i.useState(null),de=i.useRef(!1),me=N||q,he=i.useRef(),ve=i.useRef(),ge=i.useRef(),ye=i.useRef(),[be,we]=(0,nt.Z)({controlled:G,default:!1,name:"Tooltip",state:"open"});let xe=be;const Oe=(0,tt.Z)(U),Te=i.useRef(),Ee=i.useCallback((()=>{void 0!==Te.current&&(document.body.style.WebkitUserSelect=Te.current,Te.current=void 0),clearTimeout(ye.current)}),[]);i.useEffect((()=>()=>{clearTimeout(he.current),clearTimeout(ve.current),clearTimeout(ge.current),Ee()}),[Ee]);const Pe=e=>{clearTimeout(ut),ct=!0,we(!0),Y&&!xe&&Y(e)},Ze=(0,Qe.Z)((e=>{clearTimeout(ut),ut=setTimeout((()=>{ct=!1}),800+_),we(!1),X&&xe&&X(e),clearTimeout(he.current),he.current=setTimeout((()=>{de.current=!1}),se.transitions.duration.shortest)})),Re=e=>{de.current&&"touchstart"!==e.type||(le&&le.removeAttribute("title"),clearTimeout(ve.current),clearTimeout(ge.current),I||ct&&V?ve.current=setTimeout((()=>{Pe(e)}),ct?V:I):Pe(e))},Me=e=>{clearTimeout(ve.current),clearTimeout(ge.current),ge.current=setTimeout((()=>{Ze(e)}),_)},{isFocusVisibleRef:je,onBlur:Le,onFocus:De,ref:ke}=(0,ot.Z)(),[,Ae]=i.useState(!1),Ce=e=>{Le(e),!1===je.current&&(Ae(!1),Me(e))},Se=e=>{le||ce(e.currentTarget),De(e),!0===je.current&&(Ae(!0),Re(e))},We=e=>{de.current=!0;const t=ae.props;t.onTouchStart&&t.onTouchStart(e)},Be=Re,Ne=Me,Fe=e=>{We(e),clearTimeout(ge.current),clearTimeout(he.current),Ee(),Te.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",ye.current=setTimeout((()=>{document.body.style.WebkitUserSelect=Te.current,Re(e)}),z)},Ie=e=>{ae.props.onTouchEnd&&ae.props.onTouchEnd(e),Ee(),clearTimeout(ge.current),ge.current=setTimeout((()=>{Ze(e)}),$)};i.useEffect((()=>{if(xe)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ze(e)}}),[Ze,xe]);const Ve=(0,et.Z)(ae.ref,ke,ce,t);oe||0===oe||(xe=!1);const ze=i.useRef(),qe={},Ue="string"===typeof oe;W?(qe.title=xe||!Ue||H?null:oe,qe["aria-describedby"]=xe?Oe:null):(qe["aria-label"]=Ue?oe:null,qe["aria-labelledby"]=xe&&!Ue?Oe:null);const _e=(0,r.Z)({},qe,ie,ae.props,{className:(0,a.Z)(ie.className,ae.props.className),onTouchStart:We,ref:Ve},q?{onMouseMove:e=>{const t=ae.props;t.onMouseMove&&t.onMouseMove(e),ft={x:e.clientX,y:e.clientY},ze.current&&ze.current.update()}}:{});const $e={};F||(_e.onTouchStart=Fe,_e.onTouchEnd=Ie),H||(_e.onMouseOver=dt(Be,_e.onMouseOver),_e.onMouseLeave=dt(Ne,_e.onMouseLeave),me||($e.onMouseOver=Be,$e.onMouseLeave=Ne)),B||(_e.onFocus=dt(Se,_e.onFocus),_e.onBlur=dt(Ce,_e.onBlur),me||($e.onFocus=Se,$e.onBlur=Ce));const Xe=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(ue),options:{element:ue,padding:4}}];return null!=(e=Q.popperOptions)&&e.modifiers&&(t=t.concat(Q.popperOptions.modifiers)),(0,r.Z)({},Q.popperOptions,{modifiers:t})}),[ue,Q]),Ye=(0,r.Z)({},D,{isRtl:pe,arrow:k,disableInteractive:me,placement:J,PopperComponentProp:K,touch:de.current}),Ge=(e=>{const{classes:t,disableInteractive:o,arrow:n,touch:r,placement:i}=e,a={popper:["popper",!o&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,d.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,s.Z)(a,rt,t)})(Ye),Je=null!=(o=null!=(l=te.popper)?l:C.Popper)?o:st,it=null!=(c=null!=(h=null!=(v=te.transition)?v:C.Transition)?h:ne)?c:m.Z,mt=null!=(g=null!=(y=te.tooltip)?y:C.Tooltip)?g:pt,ht=null!=(b=null!=(w=te.arrow)?w:C.Arrow)?b:lt,vt=(0,p.$)(Je,(0,r.Z)({},Q,null!=(x=ee.popper)?x:S.popper,{className:(0,a.Z)(Ge.popper,null==Q?void 0:Q.className,null==(O=null!=(T=ee.popper)?T:S.popper)?void 0:O.className)}),Ye),gt=(0,p.$)(it,(0,r.Z)({},re,null!=(E=ee.transition)?E:S.transition),Ye),yt=(0,p.$)(mt,(0,r.Z)({},null!=(P=ee.tooltip)?P:S.tooltip,{className:(0,a.Z)(Ge.tooltip,null==(Z=null!=(R=ee.tooltip)?R:S.tooltip)?void 0:Z.className)}),Ye),bt=(0,p.$)(ht,(0,r.Z)({},null!=(M=ee.arrow)?M:S.arrow,{className:(0,a.Z)(Ge.arrow,null==(j=null!=(L=ee.arrow)?L:S.arrow)?void 0:j.className)}),Ye);return(0,He.jsxs)(i.Fragment,{children:[i.cloneElement(ae,_e),(0,He.jsx)(Je,(0,r.Z)({as:null!=K?K:Ke,placement:J,anchorEl:q?{getBoundingClientRect:()=>({top:ft.y,left:ft.x,right:ft.x,bottom:ft.y,width:0,height:0})}:le,popperRef:ze,open:!!le&&xe,id:Oe,transition:!0},$e,vt,{popperOptions:Xe,children:e=>{let{TransitionProps:t}=e;return(0,He.jsx)(it,(0,r.Z)({timeout:se.transitions.duration.shorter},t,gt,{children:(0,He.jsxs)(mt,(0,r.Z)({},yt,{children:[oe,k?(0,He.jsx)(ht,(0,r.Z)({},bt,{ref:fe})):null]}))}))}}))]})})),ht=mt}}]);
//# sourceMappingURL=139.52b44e2e.chunk.js.map