(function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["accessibleAutocomplete"]=t():e["accessibleAutocomplete"]=t()})(window,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=37)}([function(e,t,n){var m=n(1),v=n(6),y=n(7),_=n(16),b=n(18),g="prototype",x=function(e,t,n){var r,o,i,u,l=e&x.F,a=e&x.G,s=e&x.S,c=e&x.P,p=e&x.B,f=a?m:s?m[t]||(m[t]={}):(m[t]||{})[g],d=a?v:v[t]||(v[t]={}),h=d[g]||(d[g]={});for(r in a&&(n=t),n)i=((o=!l&&f&&f[r]!==undefined)?f:n)[r],u=p&&o?b(i,m):c&&"function"==typeof i?b(Function.call,i):i,f&&_(f,r,i,e&x.U),d[r]!=i&&y(d,r,u),c&&h[r]!=i&&(h[r]=i)};m.core=v,x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128,e.exports=x},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(4)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return r}),n.d(t,"createElement",function(){return r}),n.d(t,"cloneElement",function(){return i}),n.d(t,"Component",function(){return _}),n.d(t,"render",function(){return b}),n.d(t,"rerender",function(){return f}),n.d(t,"options",function(){return E});var a=function a(){},E={},s=[],c=[];function r(e,t){var n,r,o,i,u=c;for(i=arguments.length;2<i--;)s.push(arguments[i]);for(t&&null!=t.children&&(s.length||s.push(t.children),delete t.children);s.length;)if((r=s.pop())&&r.pop!==undefined)for(i=r.length;i--;)s.push(r[i]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?u[u.length-1]+=r:u===c?u=[r]:u.push(r),n=o;var l=new a;return l.nodeName=e,l.children=u,l.attributes=null==t?undefined:t,l.key=null==t?undefined:t.key,E.vnode!==undefined&&E.vnode(l),l}function N(e,t){for(var n in t)e[n]=t[n];return e}var o="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function i(e,t){return r(e.nodeName,N(N({},e.attributes),t),2<arguments.length?[].slice.call(arguments,2):e.children)}var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,u=[];function l(e){!e._dirty&&(e._dirty=!0)&&1==u.push(e)&&(E.debounceRendering||o)(f)}function f(){var e,t=u;for(u=[];e=t.pop();)e._dirty&&V(e)}function k(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function I(e){var t=N({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n!==undefined)for(var r in n)t[r]===undefined&&(t[r]=n[r]);return t}function P(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var u=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,d,u):e.removeEventListener(t,d,u),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(a){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var l=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e){return this._listeners[e.type](E.event&&E.event(e)||e)}var M=[],j=0,A=!1,T=!1;function L(){for(var e;e=M.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function B(e,t,n,r,o,i){j++||(A=null!=o&&o.ownerSVGElement!==undefined,T=null!=e&&!("__preactattr_"in e));var u=F(e,t,n,r,i);return o&&u.parentNode!==o&&o.appendChild(u),--j||(T=!1,i||L()),u}function F(e,t,n,r,o){var i=e,u=A;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&e.splitText!==undefined&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0))),i["__preactattr_"]=!0,i;var l=t.nodeName;if("function"==typeof l)return function d(e,t,n,r){var o=e&&e._component,i=o,u=e,l=o&&e._componentConstructor===t.nodeName,a=l,s=I(t);for(;o&&!a&&(o=o._parentComponent);)a=o.constructor===t.nodeName;o&&a&&(!r||o._component)?(U(o,s,3,n,r),e=o.base):(i&&!l&&(q(i),e=u=null),o=R(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e,u=null),U(o,s,1,n,r),e=o.base,u&&e!==u&&(u._component=null,D(u,!1)));return e}(e,t,n,r);if(A="svg"===l||"foreignObject"!==l&&A,l=String(l),(!e||!k(e,l))&&(i=function h(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}(l,A),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),D(e,!0)}var a=i.firstChild,s=i["__preactattr_"],c=t.children;if(null==s){s=i["__preactattr_"]={};for(var p=i.attributes,f=p.length;f--;)s[p[f].name]=p[f].value}return!T&&c&&1===c.length&&"string"==typeof c[0]&&null!=a&&a.splitText!==undefined&&null==a.nextSibling?a.nodeValue!=c[0]&&(a.nodeValue=c[0]):(c&&c.length||null!=a)&&function S(e,t,n,r,o){var i,u,l,a,s,c=e.childNodes,p=[],f={},d=0,h=0,m=c.length,v=0,y=t?t.length:0;if(0!==m)for(var _=0;_<m;_++){var b=c[_],g=b["__preactattr_"],x=y&&g?b._component?b._component.__key:g.key:null;null!=x?(d++,f[x]=b):(g||(b.splitText!==undefined?!o||b.nodeValue.trim():o))&&(p[v++]=b)}if(0!==y)for(var _=0;_<y;_++){a=t[_],s=null;var x=a.key;if(null!=x)d&&f[x]!==undefined&&(s=f[x],f[x]=undefined,d--);else if(h<v)for(i=h;i<v;i++)if(p[i]!==undefined&&(w=u=p[i],C=o,"string"==typeof(O=a)||"number"==typeof O?w.splitText!==undefined:"string"==typeof O.nodeName?!w._componentConstructor&&k(w,O.nodeName):C||w._componentConstructor===O.nodeName)){s=u,p[i]=undefined,i===v-1&&v--,i===h&&h++;break}s=F(s,a,n,r),l=c[_],s&&s!==e&&s!==l&&(null==l?e.appendChild(s):s===l.nextSibling?P(l):e.insertBefore(s,l))}var w,O,C;if(d)for(var _ in f)f[_]!==undefined&&D(f[_],!1);for(;h<=v;)(s=p[v--])!==undefined&&D(s,!1)}(i,c,n,r,T||null!=s.dangerouslySetInnerHTML),function m(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=undefined,A);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],A)}(i,t.attributes,s),A=u,i}function D(e,t){var n=e._component;n?q(n):(null!=e["__preactattr_"]&&e["__preactattr_"].ref&&e["__preactattr_"].ref(null),!1!==t&&null!=e["__preactattr_"]||P(e),h(e))}function h(e){for(e=e.lastChild;e;){var t=e.previousSibling;D(e,!0),e=t}}var m=[];function R(e,t,n){var r,o=m.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),_.call(r,t,n)):((r=new _(t,n)).constructor=e,r.render=y);o--;)if(m[o].constructor===e)return r.nextBase=m[o].nextBase,m.splice(o,1),r;return r}function y(e,t,n){return this.constructor(e,n)}function U(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,"undefined"==typeof e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?l(e):V(e,1,o)),e.__ref&&e.__ref(e))}function V(e,t,n,r){if(!e._disable){var o,i,u,l=e.props,a=e.state,s=e.context,c=e.prevProps||l,p=e.prevState||a,f=e.prevContext||s,d=e.base,h=e.nextBase,m=d||h,v=e._component,y=!1,_=f;if(e.constructor.getDerivedStateFromProps&&(a=N(N({},a),e.constructor.getDerivedStateFromProps(l,a)),e.state=a),d&&(e.props=c,e.state=p,e.context=f,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,a,s)?y=!0:e.componentWillUpdate&&e.componentWillUpdate(l,a,s),e.props=l,e.state=a,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!y){o=e.render(l,a,s),e.getChildContext&&(s=N(N({},s),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(_=e.getSnapshotBeforeUpdate(c,p));var b,g,x=o&&o.nodeName;if("function"==typeof x){var w=I(o);(i=v)&&i.constructor===x&&w.key==i.__key?U(i,w,1,s,!1):(b=i,e._component=i=R(x,w,s),i.nextBase=i.nextBase||h,i._parentComponent=e,U(i,w,0,s,!1),V(i,1,n,!0)),g=i.base}else u=m,(b=v)&&(u=e._component=null),(m||1===t)&&(u&&(u._component=null),g=function B(t,n,r,o,i,u){j++||(A=null!=i&&i.ownerSVGElement!==undefined,T=null!=t&&!("__preactattr_"in t));var l=F(t,n,r,o,u);return i&&l.parentNode!==i&&i.appendChild(l),--j||(T=!1,u||L()),l}(u,o,s,n||!d,m&&m.parentNode,!0));if(m&&g!==m&&i!==v){var O=m.parentNode;O&&g!==O&&(O.replaceChild(g,m),b||(m._component=null,D(m,!1)))}if(b&&q(b),(e.base=g)&&!r){for(var C=e,S=e;S=S._parentComponent;)(C=S).base=g;g._component=C,g._componentConstructor=C.constructor}}for(!d||n?M.unshift(e):y||(e.componentDidUpdate&&e.componentDidUpdate(c,p,_),E.afterUpdate&&E.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);j||r||L()}}function q(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?q(n):t&&(t["__preactattr_"]&&t["__preactattr_"].ref&&t["__preactattr_"].ref(null),P(e.nextBase=t),m.push(e),h(t)),e.__ref&&e.__ref(null)}function _(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function b(e,t,n){return B(n,e,{},!1,t,!1)}N(_.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=N(N({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),l(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),V(this,2)},render:function b(){}});var g={h:r,createElement:r,cloneElement:i,Component:_,render:b,rerender:f,options:E};t["default"]=g},function(e,t){var n=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(e,t,n){var r=n(8),o=n(40);e.exports=n(3)?function(e,t,n){return r.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(9),i=n(38),u=n(39),l=Object.defineProperty;t.f=n(3)?Object.defineProperty:function(e,t,n){if(o(e),t=u(t,!0),o(n),i)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(2);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(e===undefined?"":e,")_",(++n+r).toString(36))}},function(e,t,n){var r=n(22);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,t){e.exports=function(e){if(e==undefined)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var r=n(4);e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},function(e,t,n){var r=n(0);r(r.S+r.F,"Object",{assign:n(41)})},function(e,t,n){var r=n(2),o=n(1).document,i=r(o)&&r(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},function(e,t,n){var i=n(1),u=n(7),l=n(17),a=n(10)("src"),r="toString",o=Function[r],s=(""+o).split(r);n(6).inspectSource=function(e){return o.call(e)},(e.exports=function(e,t,n,r){var o="function"==typeof n;o&&(l(n,"name")||u(n,"name",t)),e[t]!==n&&(o&&(l(n,a)||u(n,a,e[t]?""+e[t]:s.join(String(t)))),e===i?e[t]=n:r?e[t]?e[t]=n:u(e,t,n):(delete e[t],u(e,t,n)))})(Function.prototype,r,function(){return"function"==typeof this&&this[a]||o.call(this)})},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var i=n(19);e.exports=function(r,o,e){if(i(r),o===undefined)return r;switch(e){case 1:return function(e){return r.call(o,e)};case 2:return function(e,t){return r.call(o,e,t)};case 3:return function(e,t,n){return r.call(o,e,t,n)}}return function(){return r.apply(o,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var r=n(42),o=n(28);e.exports=Object.keys||function(e){return r(e,o)}},function(e,t,n){var r=n(11),o=n(12);e.exports=function(e){return r(o(e))}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var a=n(21),s=n(24),c=n(43);e.exports=function(l){return function(e,t,n){var r,o=a(e),i=s(o.length),u=c(n,i);if(l&&t!=t){for(;u<i;)if((r=o[u++])!=r)return!0}else for(;u<i;u++)if((l||u in o)&&o[u]===t)return l||u||0;return!l&&-1}}},function(e,t,n){var r=n(25),o=Math.min;e.exports=function(e){return 0<e?o(r(e),9007199254740991):0}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(0<e?r:n)(e)}},function(e,t,n){var r=n(27)("keys"),o=n(10);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,t,n){var r=n(6),o=n(1),i="__core-js_shared__",u=o[i]||(o[i]={});(e.exports=function(e,t){return u[e]||(u[e]=t!==undefined?t:{})})("versions",[]).push({version:r.version,mode:n(44)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var r=n(12);e.exports=function(e){return Object(r(e))}},function(e,t,n){var r=n(8).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(3)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},function(e,t,n){"use strict";var r=n(0),o=n(32)(1);r(r.P+r.F*!n(13)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var b=n(18),g=n(11),x=n(29),w=n(24),r=n(47);e.exports=function(p,e){var f=1==p,d=2==p,h=3==p,m=4==p,v=6==p,y=5==p||v,_=e||r;return function(e,t,n){for(var r,o,i=x(e),u=g(i),l=b(t,n,3),a=w(u.length),s=0,c=f?_(e,a):d?_(e,0):undefined;s<a;s++)if((y||s in u)&&(o=l(r=u[s],s,i),p))if(f)c[s]=o;else if(o)switch(p){case 3:return!0;case 5:return r;case 6:return s;case 2:c.push(r)}else if(m)return!1;return v?-1:h||m?m:c}}},function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},function(e,t,n){var r=n(27)("wks"),o=n(10),i=n(1).Symbol,u="function"==typeof i;(e.exports=function(e){return r[e]||(r[e]=u&&i[e]||(u?i:o)("Symbol."+e))}).store=r},function(e,t,n){"use strict";var r=n(0),o=n(23)(!1),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!n(13)(i)),"Array",{indexOf:function(e){return u?i.apply(this,arguments)||0:o(this,e,arguments[1])}})},function(e,t,n){var r=n(0);r(r.S,"Object",{create:n(52)})},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(14),n(30),n(31),n(35),n(49),n(50);var r=n(5),o=function a(e){return e&&e.__esModule?e:{"default":e}}(n(51));function i(e){if(!e.element)throw new Error("element is not defined");if(!e.id)throw new Error("id is not defined");if(!e.source)throw new Error("source is not defined");Array.isArray(e.source)&&(e.source=u(e.source)),(0,r.render)((0,r.createElement)(o["default"],e),e.element)}var u=function u(n){return function(t,e){e(n.filter(function(e){return-1!==e.toLowerCase().indexOf(t.toLowerCase())}))}};i.enhanceSelectElement=function(n){if(!n.selectElement)throw new Error("selectElement is not defined");if(!n.source){var e=[].filter.call(n.selectElement.options,function(e){return e.value||n.preserveNullOptions});n.source=e.map(function(e){return e.textContent||e.innerText})}if(n.onConfirm=n.onConfirm||function(t){var e=[].filter.call(n.selectElement.options,function(e){return(e.textContent||e.innerText)===t})[0];e&&(e.selected=!0)},n.selectElement.value||n.defaultValue===undefined){var t=n.selectElement.options[n.selectElement.options.selectedIndex];n.defaultValue=t.textContent||t.innerText}n.name===undefined&&(n.name=""),n.id===undefined&&(n.selectElement.id===undefined?n.id="":n.id=n.selectElement.id),n.autoselect===undefined&&(n.autoselect=!0);var r=document.createElement("span");n.selectElement.parentNode.insertBefore(r,n.selectElement),i(Object.assign({},n,{element:r})),n.selectElement.style.display="none",n.selectElement.id=n.selectElement.id+"-select"};var l=i;t["default"]=l},function(e,t,n){e.exports=!n(3)&&!n(4)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){var o=n(2);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var f=n(20),d=n(45),h=n(46),m=n(29),v=n(11),o=Object.assign;e.exports=!o||n(4)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=o({},e)[n]||Object.keys(o({},t)).join("")!=r})?function(e,t){for(var n=m(e),r=arguments.length,o=1,i=d.f,u=h.f;o<r;)for(var l,a=v(arguments[o++]),s=i?f(a).concat(i(a)):f(a),c=s.length,p=0;p<c;)u.call(a,l=s[p++])&&(n[l]=a[l]);return n}:o},function(e,t,n){var u=n(17),l=n(21),a=n(23)(!1),s=n(26)("IE_PROTO");e.exports=function(e,t){var n,r=l(e),o=0,i=[];for(n in r)n!=s&&u(r,n)&&i.push(n);for(;t.length>o;)u(r,n=t[o++])&&(~a(i,n)||i.push(n));return i}},function(e,t,n){var r=n(25),o=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?o(e+t,0):i(e,t)}},function(e,t){e.exports=!1},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var r=n(48);e.exports=function(e,t){return new(r(e))(t)}},function(e,t,n){var r=n(2),o=n(33),i=n(34)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=undefined),r(t)&&null===(t=t[i])&&(t=undefined)),t===undefined?Array:t}},function(e,t,n){"use strict";var r=n(0),o=n(32)(2);r(r.P+r.F*!n(13)([].filter,!0),"Array",{filter:function(e){return o(this,e,arguments[1])}})},function(e,t,n){var r=n(0);r(r.S,"Array",{isArray:n(33)})},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(14),n(36),n(31),n(35),n(30),n(55),n(58);var $=n(5),H=o(n(60)),r=o(n(61));function o(e){return e&&e.__esModule?e:{"default":e}}function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u,l={13:"enter",27:"escape",32:"space",38:"up",40:"down"},z=((u=document.createElement("x")).style.cssText="pointer-events:auto","auto"===u.style.pointerEvents);function f(){return!(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g)||!navigator.userAgent.match(/AppleWebKit/g))}var a=function(n){function e(e){var t;return(t=n.call(this,e)||this).elementReferences={},t.state={focused:null,hovered:null,clicked:null,menuOpen:!1,options:e.defaultValue?[e.defaultValue]:[],query:e.defaultValue,selected:null},t.handleComponentBlur=t.handleComponentBlur.bind(i(i(t))),t.handleKeyDown=t.handleKeyDown.bind(i(i(t))),t.handleUpArrow=t.handleUpArrow.bind(i(i(t))),t.handleDownArrow=t.handleDownArrow.bind(i(i(t))),t.handleEnter=t.handleEnter.bind(i(i(t))),t.handlePrintableKey=t.handlePrintableKey.bind(i(i(t))),t.handleListMouseLeave=t.handleListMouseLeave.bind(i(i(t))),t.handleOptionBlur=t.handleOptionBlur.bind(i(i(t))),t.handleOptionClick=t.handleOptionClick.bind(i(i(t))),t.handleOptionFocus=t.handleOptionFocus.bind(i(i(t))),t.handleOptionMouseEnter=t.handleOptionMouseEnter.bind(i(i(t))),t.handleInputBlur=t.handleInputBlur.bind(i(i(t))),t.handleInputChange=t.handleInputChange.bind(i(i(t))),t.handleInputFocus=t.handleInputFocus.bind(i(i(t))),t.pollInputElement=t.pollInputElement.bind(i(i(t))),t.getDirectInputChanges=t.getDirectInputChanges.bind(i(i(t))),t}(function r(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,n);var t=e.prototype;return t.componentDidMount=function(){this.pollInputElement()},t.componentWillUnmount=function(){clearTimeout(this.$pollInput),clearTimeout(this.$blurInput)},t.pollInputElement=function(){var e=this;this.getDirectInputChanges(),this.$pollInput=setTimeout(function(){e.pollInputElement()},100)},t.getDirectInputChanges=function(){var e=this.elementReferences[-1];e&&e.value!==this.state.query&&this.handleInputChange({target:{value:e.value}})},t.componentDidUpdate=function(e,t){var n=this.state,r=n.focused,o=n.clicked,i=null===r,u=t.focused!==r;(u&&!i||null!==o)&&this.elementReferences[r].focus();var l=-1===r,a=u&&null===t.focused;if(l&&a){var s=this.elementReferences[r];s.setSelectionRange(0,s.value.length)}},t.hasAutoselect=function(){return!f()&&this.props.autoselect},t.templateInputValue=function(e){var t=this.props.templates&&this.props.templates.inputValue;return t?t(e):e},t.templateSuggestion=function(e){var t=this.props.templates&&this.props.templates.suggestion;return t?t(e):e},t.handleComponentBlur=function(e){var t,n=this.state,r=n.options,o=n.query,i=n.selected;this.props.confirmOnBlur?(t=e.query||o,this.props.onConfirm(r[i])):t=o,this.setState({focused:null,clicked:null,menuOpen:e.menuOpen||!1,query:t,selected:null})},t.handleListMouseLeave=function(e){this.setState({hovered:null})},t.handleOptionBlur=function(e,t){var n=this.state,r=n.focused,o=n.clicked,i=n.menuOpen,u=n.options,l=n.selected,a=null===e.relatedTarget&&null===o,s=e.relatedTarget===this.elementReferences[-1],c=r!==t&&-1!==r;if(!c&&a||!(c||s)){var p=i&&f();this.handleComponentBlur({menuOpen:p,query:this.templateInputValue(u[l])})}},t.handleInputBlur=function(e){var t=this,n=this.state,r=n.focused,o=n.menuOpen,i=n.options,u=n.query,l=n.selected,a=-1!==r;if(clearTimeout(this.$blurInput),!a){var s=o&&f(),c=f()?u:this.templateInputValue(i[l]);this.$blurInput=setTimeout(function(){return t.handleComponentBlur({menuOpen:s,query:c})},200)}},t.handleInputChange=function(e){var n=this,t=this.props,r=t.minLength,o=t.source,i=t.showAllValues,u=this.hasAutoselect(),l=e.target.value,a=0===l.length,s=this.state.query.length!==l.length,c=l.length>=r;this.setState({query:l}),i||!a&&s&&c?o(l,function(e){var t=0<e.length;n.setState({menuOpen:t,options:e,selected:u&&t?0:-1})}):!a&&c||this.setState({menuOpen:!1,options:[]})},t.handleInputClick=function(e){this.handleInputChange(e)},t.handleInputFocus=function(e){this.setState({focused:-1})},t.handleOptionFocus=function(e){this.setState({focused:e,hovered:null,selected:e})},t.handleOptionMouseEnter=function(e,t){f()||this.setState({hovered:t})},t.handleOptionClick=function(e,t){var n=this.state.options[t],r=this.templateInputValue(n);clearTimeout(this.$blurInput),this.props.onConfirm(n),this.setState({focused:-1,clicked:t,hovered:null,menuOpen:!1,query:r,selected:-1}),this.forceUpdate()},t.handleUpArrow=function(e){e.preventDefault();var t=this.state,n=t.menuOpen,r=t.selected;-1!==r&&n&&this.handleOptionFocus(r-1)},t.handleDownArrow=function(e){var t=this;if(e.preventDefault(),this.props.showAllValues&&!1===this.state.menuOpen)e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e,selected:0,focused:0,hovered:null})});else if(!0===this.state.menuOpen){var n=this.state,r=n.menuOpen,o=n.options,i=n.selected;i!==o.length-1&&r&&this.handleOptionFocus(i+1)}},t.handleSpace=function(e){var t=this;this.props.showAllValues&&!1===this.state.menuOpen&&""===this.state.query&&(e.preventDefault(),this.props.source("",function(e){t.setState({menuOpen:!0,options:e})})),-1!==this.state.focused&&(e.preventDefault(),this.handleOptionClick(e,this.state.focused))},t.handleEnter=function(e){this.state.menuOpen&&(e.preventDefault(),0<=this.state.selected&&this.handleOptionClick(e,this.state.selected))},t.handlePrintableKey=function(e){var t=this.elementReferences[-1];e.target===t||t.focus()},t.handleKeyDown=function(e){switch(l[e.keyCode]){case"up":this.handleUpArrow(e);break;case"down":this.handleDownArrow(e);break;case"space":this.handleSpace(e);break;case"enter":this.handleEnter(e);break;case"escape":this.handleComponentBlur({query:this.state.query});break;default:(function t(e){return 47<e&&e<58||32===e||8===e||64<e&&e<91||95<e&&e<112||185<e&&e<193||218<e&&e<223})(e.keyCode)&&this.handlePrintableKey(e)}},t.render=function(){var e,o=this,t=this.props,n=t.cssNamespace,r=t.displayMenu,i=t.id,u=t.minLength,l=t.name,a=t.placeholder,s=t.required,c=t.showAllValues,p=t.tNoResults,f=t.tStatusQueryTooShort,d=t.tStatusNoResults,h=t.tStatusSelectedOption,m=t.tStatusResults,v=t.dropdownArrow,y=this.state,_=y.focused,b=y.hovered,g=y.menuOpen,x=y.options,w=y.query,O=y.selected,C=this.hasAutoselect(),S=-1===_,E=0===x.length,N=0!==w.length,k=w.length>=u,I=this.props.showNoOptionsFound&&S&&E&&N&&k,P=n+"__wrapper",M=n+"__input",j=null!==_?" "+M+"--focused":"",A=this.props.showAllValues?" "+M+"--show-all-values":" "+M+"--default",T=n+"__dropdown-arrow-down",L=-1!==_&&null!==_,B=n+"__menu",F=B+"--"+r,D=B+"--"+(g||I?"visible":"hidden"),R=n+"__option",U=n+"__hint",V=this.templateInputValue(x[O]),q=V&&0===V.toLowerCase().indexOf(w.toLowerCase())&&C?w+V.substr(w.length):"",W=z&&q;return c&&"string"==typeof(e=v({className:T}))&&(e=(0,$.createElement)("div",{className:n+"__dropdown-arrow-down-wrapper",dangerouslySetInnerHTML:{__html:e}})),(0,$.createElement)("div",{className:P,onKeyDown:this.handleKeyDown,role:"combobox","aria-expanded":g?"true":"false"},(0,$.createElement)(H["default"],{length:x.length,queryLength:w.length,minQueryLength:u,selectedOption:this.templateInputValue(x[O]),selectedOptionIndex:O,tQueryTooShort:f,tNoResults:d,tSelectedOption:h,tResults:m}),W&&(0,$.createElement)("span",null,(0,$.createElement)("input",{className:U,readonly:!0,tabIndex:"-1",value:q})),(0,$.createElement)("input",Q({"aria-activedescendant":!!L&&i+"__option--"+_,"aria-owns":i+"__listbox",autoComplete:"off",className:""+M+j+A,id:i,onClick:function(e){return o.handleInputClick(e)},onBlur:this.handleInputBlur},function K(e){return{onInput:e}}(this.handleInputChange),{onFocus:this.handleInputFocus,name:l,placeholder:a,ref:function(e){o.elementReferences[-1]=e},type:"text",role:"textbox",required:s,value:w})),e,(0,$.createElement)("ul",{className:B+" "+F+" "+D,onMouseLeave:function(e){return o.handleListMouseLeave(e)},id:i+"__listbox",role:"listbox"},x.map(function(e,t){var n=(-1===_?O===t:_===t)&&null===b?" "+R+"--focused":"",r=t%2?" "+R+"--odd":"";return(0,$.createElement)("li",{"aria-selected":_===t,className:""+R+n+r,dangerouslySetInnerHTML:{__html:o.templateSuggestion(e)},id:i+"__option--"+t,key:t,onBlur:function(e){return o.handleOptionBlur(e,t)},onClick:function(e){return o.handleOptionClick(e,t)},onMouseEnter:function(e){return o.handleOptionMouseEnter(e,t)},ref:function(e){o.elementReferences[t]=e},role:"option",tabIndex:"-1"})}),I&&(0,$.createElement)("li",{className:R+" "+R+"--no-results"},p())))},e}($.Component);(t["default"]=a).defaultProps={autoselect:!1,cssNamespace:"autocomplete",defaultValue:"",displayMenu:"inline",minLength:0,name:"input-autocomplete",placeholder:"",onConfirm:function(){},confirmOnBlur:!0,showNoOptionsFound:!0,showAllValues:!1,required:!1,tNoResults:function(){return"No results found"},dropdownArrow:r["default"]}},function(e,t,r){var o=r(9),i=r(53),u=r(28),l=r(26)("IE_PROTO"),a=function(){},s="prototype",c=function(){var e,t=r(15)("iframe"),n=u.length;for(t.style.display="none",r(54).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),c=e.F;n--;)delete c[s][u[n]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[s]=o(e),n=new a,a[s]=null,n[l]=e):n=c(),t===undefined?n:i(n,t)}},function(e,t,n){var u=n(8),l=n(9),a=n(20);e.exports=n(3)?Object.defineProperties:function(e,t){l(e);for(var n,r=a(t),o=r.length,i=0;i<o;)u.f(e,n=r[i++],t[n]);return e}},function(e,t,n){var r=n(1).document;e.exports=r&&r.documentElement},function(e,t,n){var r=n(0);r(r.P,"Function",{bind:n(56)})},function(e,t,n){"use strict";var i=n(19),u=n(2),l=n(57),a=[].slice,s={};e.exports=Function.bind||function(t){var n=i(this),r=a.call(arguments,1),o=function(){var e=r.concat(a.call(arguments));return this instanceof o?function(e,t,n){if(!(t in s)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";s[t]=Function("F,a","return new F("+r.join(",")+")")}return s[t](e,n)}(n,e.length,e):l(n,e,t)};return u(n.prototype)&&(o.prototype=n.prototype),o}},function(e,t){e.exports=function(e,t,n){var r=n===undefined;switch(t.length){case 0:return r?e():e.call(n);case 1:return r?e(t[0]):e.call(n,t[0]);case 2:return r?e(t[0],t[1]):e.call(n,t[0],t[1]);case 3:return r?e(t[0],t[1],t[2]):e.call(n,t[0],t[1],t[2]);case 4:return r?e(t[0],t[1],t[2],t[3]):e.call(n,t[0],t[1],t[2],t[3])}return e.apply(n,t)}},function(e,t,n){n(59)("match",1,function(r,o,e){return[function(e){"use strict";var t=r(this),n=e==undefined?undefined:e[o];return n!==undefined?n.call(e,t):new RegExp(e)[o](String(t))},e]})},function(e,t,n){"use strict";var l=n(7),a=n(16),s=n(4),c=n(12),p=n(34);e.exports=function(t,e,n){var r=p(t),o=n(c,r,""[t]),i=o[0],u=o[1];s(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(a(String.prototype,t,i),l(RegExp.prototype,r,2==e?function(e,t){return u.call(e,this,t)}:function(e){return u.call(e,this)}))}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0,n(36);var m=n(5);var r=function(o){function e(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))||this).state={bump:!1},e}(function n(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t})(e,o);var t=e.prototype;return t.componentWillReceiveProps=function(e){e.queryLength!==this.props.queryLength&&this.setState(function(e){return{bump:!e.bump}})},t.render=function(){var e=this.props,t=e.length,n=e.queryLength,r=e.minQueryLength,o=e.selectedOption,i=e.selectedOptionIndex,u=e.tQueryTooShort,l=e.tNoResults,a=e.tSelectedOption,s=e.tResults,c=this.state.bump,p=n<r,f=0===t,d=o?a(o,t,i):"",h=null;return h=p?u(r):f?l():s(t,d),(0,m.createElement)("div",{"aria-atomic":"true","aria-live":"polite",role:"status",style:{border:"0",clip:"rect(0 0 0 0)",height:"1px",marginBottom:"-1px",marginRight:"-1px",overflow:"hidden",padding:"0",position:"absolute",whiteSpace:"nowrap",width:"1px"}},h,(0,m.createElement)("span",null,c?",":",,"))},e}(m.Component);(t["default"]=r).defaultProps={tQueryTooShort:function(e){return"Type in "+e+" or more characters for results."},tNoResults:function(){return"No search results."},tSelectedOption:function(e,t,n){return e+" ("+(n+1)+" of "+t+") is selected."},tResults:function(e,t){return e+" "+(1===e?"result":"results")+" "+(1===e?"is":"are")+" available. "+t}}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=n(5),o=function i(e){var t=e.className;return(0,r.createElement)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t,focusable:"false"},(0,r.createElement)("g",{stroke:"none",fill:"none","fill-rule":"evenodd"},(0,r.createElement)("polygon",{fill:"#000000",points:"0 0 22 0 11 17"})))};t["default"]=o}])["default"]});
//# sourceMappingURL=accessible-autocomplete.min.js.map
function get_data(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
              
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function create_data(){
get_data('/js/apprenticeships.json', function(data) {
    let page = document.getElementsByClassName('apprenticeship-search-page')[0];

   
     if(page){
    var target = document.getElementsByClassName('cd-apprenticeships-results')[0];

    //remove after UR
    var hidden = document.getElementsByClassName('design2')[0];

    if(!hidden){
    let courses = [];
    for (let x of data) {

    let course = `
    <div class="cd-apprenticeships-search-result__container">
        <h2 class="govuk-heading-m cd-apprenticeships-search-result-heading" >${x.StandardName}</h3>
        <p class="govuk-body cd-apprenticeships-search-result-text "><span class="govuk-!-font-weight-bold">Level: </span><span>${x.NotionalEndLevel}</span></p>
        <p class="cd-apprenticeships-search-result-text"><span class="govuk-!-font-weight-bold">unique id : </span><span>1234rftg</span></p>
        <a class="govuk-link cd-apprenticeships-search-result-link" href="/apprenticeships/add">Choose this apprenticeship</a>

    </div>`

      courses.push(course);
    }
    courses.forEach((course)=> {
    let container = document.createElement("div");
        container.innerHTML = course;
        if(target) {
            target.append(container);
            }
    });
        }
    }
});
}



function radioSwitcher(targetDiv) {
//const del = document.getElementsByClassName('delivery-checkbox');
   
const apprenticeshipQuestion = document.getElementsByClassName(targetDiv)[0];
    
if (apprenticeshipQuestion) {
    let button = document.querySelectorAll('.govuk-button')[0];
    let radios = document.querySelectorAll('.'+targetDiv+' input[type="radio"]');
  

    radios.forEach((f) => {
        f.addEventListener("click", function(x){

            button.setAttribute("href", x.target.value);
        })
    })
}
}

radioSwitcher('apprenticeship-type');
radioSwitcher('employerNationalQuestion');


const DualDeliveryPage = document.getElementsByClassName('dual-delivery')[0];

if (DualDeliveryPage) {
  
    let employerCheckbox = document.getElementById('employer');
    let selectOption = document.querySelectorAll('.select-list')[0];

    employerCheckbox.checked = true;
    employerCheckbox.style.backgroundColor = "red";
    employerCheckbox.addEventListener("click", () => {
        selectOption.classList.toggle("visible");
    })
   
}

const checkBoxes = document.querySelectorAll('.govuk-checkboxes__input');

let options = [];
 
function getOptions () {
    let x = ``;
checkBoxes.forEach((checkbox) => {
               
        if (checkbox.checked == true) {

           options.push(checkbox.value);
           let uniqueOptions = Array.from(new Set(options));

            let row = ` <tr class="govuk-table__row">
                    <th class="govuk-table__header" scope="row">venue<br /><span class="govuk-hint">postcode</span></th>
                    <td class="govuk-table__cell govuk-table__cell--numeric">${uniqueOptions}</td>
                    <td class="govuk-table__cell govuk-table__cell--numeric"><a href="/apprenticeships/ConfirmDelete">Delete</a></td>
                </tr>`;
            x = row;
        }

});
    return x;
}
let addAnother = document.getElementById('List');

if(addAnother) {

addAnother.addEventListener('click', () => {
    let v = getOptions();
    let target = document.getElementById("Results");
    target.innerHTML +=(v);
    let table = document.getElementById('ResultsTable');
    table.classList.add('visible-table');
});

    }
const searchpage = document.getElementsByClassName('apprenticeship-search-page')[0];

if (searchpage) {
 
    const pagination = document.getElementsByClassName('pagination')[0];
    const searchButton =  document.getElementsByClassName('submit')[0];
    const resultsContainer = document.getElementsByClassName('cd-apprenticeships-results')[0];
    const results2Container = document.getElementsByClassName('cd-apprenticeships2-results')[0];

    pagination.classList.add('hide');

    searchButton.addEventListener('click', () => {
        create_data();
        if (resultsContainer) {
            resultsContainer.classList.add('visible');
        }
        results2Container.classList.add('visible');
        pagination.classList.add('visible');

    })
}



const item = document.getElementsByClassName('item');
const items = [...item];


for(let x of items) {
    items.forEach( (item) => {
        //item.classList.remove('active'); 
console.log(item.classList);
    })
    x.addEventListener('click', () => {


        //if (x.classList.contains('active')) {
        //    x.classList.remove('active');
        //}
    x.classList.add('active');
items.forEach( (val) => {
    if (val.classList.contains('active')) {
    console.log(val.classList);
}
});

//if (x)
  //      console.log( ...x.childNodes);
    })
}



/* eslint-disable no-console */
// jQuery Validate Hooks

// see: https://gist.github.com/beccasaurus/957732#file-jquery-validate-hooks-js
// source: https://gist.githubusercontent.com/beccasaurus/957732/raw/e09b422c12c7d8098fa9ae5bb44b50d4e049baaf/jquery.validate.hooks.js

'use strict';

(function ($) {
    $.fn.addTriggersToJqueryValidate = function () {
        // Loop thru the elements that we jQuery validate is attached to
        // and return the loop, so jQuery function chaining will work.
        return this.each(function () {
            var form = $(this);

            // Grab this element's validator object (if it has one)
            var validator = form.data('validator');

            // Only run this code if there's a validator associated with this element
            if (!validator)
                return;

            // Only add these triggers to each element once
            if (form.data('jQueryValidateTriggersAdded'))
                return;
            else
                form.data('jQueryValidateTriggersAdded', true);

            // Override the function that validates the whole form to trigger a
            // formValidation event and either formValidationSuccess or formValidationError
            var oldForm = validator.form;
            validator.form = function () {
                var result = oldForm.apply(this, arguments);
                var form = this.currentForm;
                $(form).trigger((result == true) ? 'formValidationSuccess' : 'formValidationError', form);
                $(form).trigger('formValidation', [form, result]);
                return result;
            };

            // Override the function that validates the whole element to trigger a
            // elementValidation event and either elementValidationSuccess or elementValidationError
            var oldElement = validator.element;
            validator.element = function (element) {
                var result = oldElement.apply(this, arguments);
                $(element).trigger((result == true) ? 'elementValidationSuccess' : 'elementValidationError', element);
                $(element).trigger('elementValidation', [element, result]);
                return result;
            };
        });
    };

    /* Below here are helper methods for calling .bind() for you */

    $.fn.extend({
        // Wouldn't it be nice if, when the full form's validation runs, it triggers the
        // element* validation events?  Well, that's what this does!
        //
        // NOTE: This is VERY coupled with jquery.validation.unobtrusive and uses its
        //       element attributes to figure out which fields use validation and
        //       whether or not they're currently valid.
        //
        triggerElementValidationsOnFormValidation: function () {
            return this.each(function () {
                $(this).bind('formValidation', function (e, form) {
                    $(form).find('*[data-val=true]').each(function (i, field) {
                        if ($(field).hasClass('input-validation-error')) {
                            $(field).trigger('elementValidationError', field);
                            $(field).trigger('elementValidation', [field, false]);
                        } else {
                            $(field).trigger('elementValidationSuccess', field);
                            $(field).trigger('elementValidation', [field, true]);
                        }
                    });
                });
            });
        },

        formValidation: function (fn) {
            return this.each(function () {
                $(this).bind('formValidation', function (e, element, result) { fn(element, result); });
            });
        },

        formValidationSuccess: function (fn) {
            return this.each(function () {
                $(this).bind('formValidationSuccess', function (e, element) { fn(element); });
            });
        },

        formValidationError: function (fn) {
            return this.each(function () {
                $(this).bind('formValidationError', function (e, element) { fn(element); });
            });
        },

        formValidAndInvalid: function (valid, invalid) {
            return this.each(function () {
                $(this).bind('formValidationSuccess', function (e, element) { valid(element); });
                $(this).bind('formValidationError', function (e, element) { invalid(element); });
            });
        },

        elementValidation: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidation', function (e, element, result) { fn(element, result); });
            });
        },

        elementValidationSuccess: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidationSuccess', function (e, element) { fn(element); });
            });
        },

        elementValidationError: function (fn) {
            return this.each(function () {
                $(this).bind('elementValidationError', function (e, element) { fn(element); });
            });
        },

        elementValidAndInvalid: function (valid, invalid) {
            return this.each(function () {
                $(this).bind('elementValidationSuccess', function (e, element) { valid(element); });
                $(this).bind('elementValidationError', function (e, element) { invalid(element); });
            });
        }
    });
})(jQuery);


function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                //console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get('/js/lars.json', function(data) {
var target = document.getElementsByClassName('cd-lars-results')[0];

    let courses = [];
    for (let x of data) {

    let course = `
    <div class="cd-lars-search-result__container">
        <h3 class="govuk-heading-m" >${x.LearnAimRefTitle}</h3>
        <p class="govuk-body">LARS/QAN:<span class="govuk-!-font-weight-bold">${x.LearnAimRef}</span></p>
        <p class="govuk-body">Level: <span class="govuk-!-font-weight-bold">${x.NotionalNVQLevelv2}</span></p>
        <p class="govuk-body">Awarding body: <span class="govuk-!-font-weight-bold">${x.AwardOrgCode}</span></p>
        <p class="govuk-body"><a class="govuk-link" href="/addCourse">Choose this qualification</a></p>
     </div>`
      courses.push(course);
    }
    courses.forEach((course)=> {
    let container = document.createElement("div");
        container.innerHTML = course;
        if(target) {
            target.append(container);
            }
    });


});


const provider = document.getElementsByClassName('provider')[0];

//console.log(provider);

function ajax_get1(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                //console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };
 
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
 
ajax_get1('/js/providers.json', function(data) {
var target = document.getElementsByClassName('cd-provider-results')[0];

var provs = [];
for (let x of data) {

 x.ProviderContact.map((y) => {
    if (y.ContactType === "L") {
            let v = `
                        <td class="govuk-table__cell">${x.UnitedKingdomProviderReferenceNumber}</td>
                        <td class="govuk-table__cell">${x.ProviderName}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.Items[0]}, ${y.ContactAddress.StreetDescription}</td>
                        <td class="govuk-table__cell">${y.ContactAddress.PostCode}</td>
                        <td class="govuk-table__cell">${x.ProviderStatus}</td>
                        <td class="govuk-table__cell"><a class="govuk-link" href="../../providers/details">view</a></td>
                        `
provs.push(v)
        }
})

  

}


provs.forEach((x) => {
    let tb = document.createElement("tr");
    tb.classList.add("govuk-table__row");
    tb.innerHTML = x;
    if (target) {
        target.append(tb);
        }
});
});

const searchInput = document.getElementById("search");
const searchInputLabel = document.querySelector(".search-input-wrapper .cd-search__label");

if (provider == true) {


searchInput.addEventListener("focus", () => {


if (document.querySelector(":focus") !== searchInput) {
    searchInputLabel.classList.add("visible");
} else {
    searchInputLabel.classList.remove("visible");
}

})
    }

//export default Providers;

 let compare = {
        name: (a, b) => {
            a = a.replace(/^the /i, '');
            b = b.replace(/^the /i, '');

            if (a < b) {
                return -1;
            } else {
                return a > b ? 1 : 0;
            }
        },
        number: (a,b) => {
            return a - b;
        },
        duration: (a, b) => {
            a = a.split(':');
            b = b.split(':');

            a = Number(a[0]) * 60 + Number(a[1]);
            b = Number(b[0]) * 60 + Number(b[1]);

            return a - b;
        },
        date: (a, b) => {
            a = new Date(a);
            b = new Date(b);

            return a - b;
        }
    };

    $('.sortable').each(function () {

        let $table = $(this);
        let $tbody = $table.find('tbody');
        let $controls = $table.find('th.main');
        let rows = $tbody.find('tr').toArray();

        $controls.on('click', function () {
            let $header = $(this);
            let order = $header.data('sort');
            let column;


            if ($header.is('.ascending') || $header.is('.descending')) {
                $header.toggleClass('ascending descending');
                $tbody.append(rows.reverse());
            } else {
                $header.addClass('ascending');
                $header.siblings().removeClass('ascending descending');
                if (compare.hasOwnProperty(order)) {
                    column = $controls.index(this);

                    rows.sort(function (a, b) {
                        a = $(a).find('td').eq(column).text();
                        b = $(b).find('td').eq(column).text();
                        return compare[order](a, b);
                    });

                    $tbody.append(rows);
                }
            }
        });
    });

/* eslint-disable no-console */

"use strict";

(function ($) {
    var debounce = function (cb, delay) {
        var inDebounce;
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(inDebounce);
            inDebounce = setTimeout(function () {
                cb.apply(context, args);
            }, delay);
        };
    };

    var isNullOrWhitespace = function (input) {
        if (typeof input === 'undefined' || input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    var replaceAll = function (search, find, replace) {
        return search.split(find).join(replace);
    };

    var makeRequestWithPayload = function (payload, success) {
        console.log(payload);
        var qs = $.param(payload);
        qs = replaceAll(qs, "%5B%5D", "");
        $.get("/LarsSearch?" + qs, success);
    };

    var makeRequestWithUrl = function (url, success) {
        console.log(url);
        $.get(url, success);
    };

    var removeSearchResults = function () {
        var $larsSearchResultContainer = $("#LarsSearchResultContainer");
        $larsSearchResultContainer.html("");
    };

    var replaceSearchResult = function (searchResults) {
        var $larsSearchResultContainer = $("#LarsSearchResultContainer");
        $larsSearchResultContainer.html("");
        $larsSearchResultContainer.html(searchResults);
    };

    var $larsSearchTerm = $("#LarsSearchTerm");

    var doSearch = function () {
        if (isNullOrWhitespace($larsSearchTerm.val())) {
            removeSearchResults();
        } else {
            var $allCheckedNotionalNvqLevelV2FilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox:checked");
            var $allCheckedAwardOrgCodeFilterCheckboxes = $("input[name='AwardOrgCodeFilter']:checkbox:checked");
            var $allSectorSubjectAreaTier1FilterCheckboxes = $("input[name='SectorSubjectAreaTier1Filter']:checkbox:checked");
            var $allSectorSubjectAreaTier2FilterCheckboxes = $("input[name='SectorSubjectAreaTier2Filter']:checkbox:checked");

            makeRequestWithPayload({
                SearchTerm: $larsSearchTerm.val(),
                NotionalNVQLevelv2Filter: $allCheckedNotionalNvqLevelV2FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                AwardOrgCodeFilter: $allCheckedAwardOrgCodeFilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                SectorSubjectAreaTier1Filter: $allSectorSubjectAreaTier1FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get(),
                SectorSubjectAreaTier2Filter: $allSectorSubjectAreaTier2FilterCheckboxes.map(function () {
                    return $(this).val();
                }).get()
            }, onSucess);
        }
    };

    var assignEventsToAllCheckboxes = function () {
        var $notionalNvqLevelV2FilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox");
        var $awardOrgCodeFilterCheckboxes = $("input[name='AwardOrgCodeFilter']:checkbox");
        var $sectorSubjectAreaTier1FilterCheckboxes = $("input[name='SectorSubjectAreaTier1Filter']:checkbox");
        var $sectorSubjectAreaTier2FilterCheckboxes = $("input[name='SectorSubjectAreaTier2Filter']:checkbox");

        $notionalNvqLevelV2FilterCheckboxes.on("click", doSearch);
        $awardOrgCodeFilterCheckboxes.on("click", doSearch);
        $sectorSubjectAreaTier1FilterCheckboxes.on("click", doSearch);
        $sectorSubjectAreaTier2FilterCheckboxes.on("click", doSearch);
    };

    var assignEventToClearAllFiltersLink = function () {
        var $clearAllFiltersLink = $("#ClearAllFilters");

        $clearAllFiltersLink.on("click", function (e) {
            e.preventDefault();
            var $allCheckedFilterCheckboxes = $("input[name='NotionalNVQLevelv2Filter']:checkbox:checked, input[name='AwardOrgCodeFilter']:checkbox:checked, input[name='SectorSubjectAreaTier1Filter']:checkbox, input[name='SectorSubjectAreaTier2Filter']:checkbox");
            var allCheckedFilterCheckboxesLength = $allCheckedFilterCheckboxes.length;

            for (var i = 0; i < allCheckedFilterCheckboxesLength; i++) {
                if (i === (allCheckedFilterCheckboxesLength - 1)) {
                    $($allCheckedFilterCheckboxes[i]).trigger("click");
                } else {
                    $($allCheckedFilterCheckboxes[i]).prop('checked', false);
                }
            }
        });
    };

    var assignEventsToLarsSearchPagination = function () {
        var $larsSearchResultPaginationItems = $("#LarsSearchResultContainer .pagination .pagination__item");
        $larsSearchResultPaginationItems.on("click", function (e) {
            e.preventDefault();
            var url = $(e.target).attr("href");
            makeRequestWithUrl(url, onSucess);
        });
    };

    var onSucess = function (data) {
        replaceSearchResult(data);
        assignEventsToAllCheckboxes();
        assignEventToClearAllFiltersLink();
        assignEventsToLarsSearchPagination();
    };

    $larsSearchTerm.on("keyup", debounce(doSearch, 400));



    $(window).on('load', function(){


    //$(".section-title:first").addClass('open');
    //var openOnLoad = $(".section-title:first").next('.collapsing-section');
    //$(openOnLoad).slideDown();

    $(".section-title").on('focus', function () {
      if (!$(this).data("mouseDown"))
        $(this).click();
    });

    $(".section-title").on('mousedown', function () {
      $(this).data("mouseDown", true);
    });

    $(".section-title").on('mouseup', function () {
      $(this).removeData("mouseDown");
    });

    $(".section-title").on('click', function () {
      if ($(this).hasClass('open')) {
        //Close the current section
        $(this).removeClass('open');
        $('.collapsing-section').slideUp();

      }
      else {
        //close the prev section & open the newly click
        //$('.section-title').removeClass('open');
        //$('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
        $(this).addClass('open');
        $('.collapsing-section').addClass('open');
        var sectionToOpen = $(this).next('.collapsing-section');
        $(sectionToOpen).slideDown();
      }
    });



    var toggle = false;
    $('.btn').click(function() {
      toggle = !toggle;
      if(toggle){
        $('#A').animate({left: 0});
      }
      else{
        $('#A').animate({left:-400});
      }
    });
  });
})(jQuery);