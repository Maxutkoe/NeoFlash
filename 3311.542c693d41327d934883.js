"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3311],{78251:function(t,e,n){n.d(e,{E:function(){return i}}),n(87363);var r=n(24763),o=n(11681),c=n(85893);function i(t){var e=t.align,n=t.tag,i=t.anchorHash,u=void 0===i?"":i,a=t.content,l=void 0===a?"":a,s=t.liveEdit,f=t.onChange;return"string"==typeof l?(0,c.jsx)(o.f,{text:l,align:e,tag:n,liveEdit:s,liveEditId:null==s?void 0:s.id,onChange:f}):(0,c.jsx)(r.cq,{content:l,align:e,tag:n,anchorHash:u,liveEdit:s})}},11681:function(t,e,n){n.d(e,{f:function(){return F}}),n(41539),n(81299),n(12419),n(47941),n(82526),n(57327),n(88449),n(2490),n(59849),n(38880),n(57658),n(15581),n(34514),n(54747),n(49337);var r=n(15671),o=n(43144),c=n(97326),i=n(60136),u=n(82963),a=n(61120),l=n(4942),s=(n(92222),n(87363)),f=n(14134),p=n(34536),y=n(45987),h=(n(74916),n(15306),n(9980)),v=n(63487),d=n(24695),O=n(50439),g=n(46127),b=n(13258),j=["tag","children","lpcQuery"];function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var P=new h({html:!0}),E=function(t){(0,i.Z)(p,t);var e,n,f=(e=p,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)});function p(){var t;(0,r.Z)(this,p);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t=f.call.apply(f,[this].concat(n)),(0,l.Z)((0,c.Z)(t),"ref",s.createRef()),t}return(0,o.Z)(p,[{key:"componentDidMount",value:function(){this.extendUrlsForCustomLinks()}},{key:"extendUrlsForCustomLinks",value:function(){var t=this;this.ref.current&&this.ref.current.querySelectorAll("a").forEach((function(e){var n=e.getAttribute("href")||"",r=(0,b.$F)(n,t.props.lpcQuery);r&&(e.href=r),e.setAttribute("data-smooth-scroll","true")}))}},{key:"render",value:function(){var t,e=this.props,n=e.tag,r=e.children,o=(e.lpcQuery,(0,y.Z)(e,j)),c="string"!=typeof(t=r)?t:P.render(t).replace(/^<p>([\s\S]+?)<\/p>\n$/,"$1");return s.createElement(n,Z(Z({},o),{},{dangerouslySetInnerHTML:{__html:c},ref:this.ref}))}}]),p}(s.Component),x=(0,v.qC)((0,O.$)("LcMarkdown"),(0,g.K)((function(t){return{lpcQuery:(0,d.y0)(t).lpcQuery}})))(E),w=n(85893),S=["tag","children"];function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?D(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R=function(t){(0,i.Z)(l,t);var e,n,c=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)});function l(){return(0,r.Z)(this,l),c.apply(this,arguments)}return(0,o.Z)(l,[{key:"render",value:function(){var t=this.props,e=t.tag,n=t.children,r=(0,y.Z)(t,S);return(0,w.jsx)(x,k(k({},r),{},{tag:e,children:n}))}}]),l}(s.PureComponent);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}(0,l.Z)(R,"defaultProps",{tag:"div"}),n(70096);var _=(0,f.Z)("lc-styled-text"),B=null;function A(t){var e=t.text,n=t.className,r=void 0===n?"":n,o=t.align,c=t.tag;return(0,w.jsx)("div",{className:_.mix(r)(),children:(0,w.jsx)(R,{tag:c,className:_("text",{align:o||""})(),children:e})})}function H(t){var e=t.liveEdit;return e&&e.id&&(0,p.Hr)()}function N(t){return H(t)?function(t){var e=t.text,n=t.liveEdit,r=t.className,o=void 0===r?"":r,c=t.align,i=t.tag,u=t.onChange,a=t.onFocus,l=t.onBlur,s=t.isSectionSelected;return B?(0,w.jsx)(B,{align:c,tag:i,className:o,text:e,onChange:u,onFocus:a,onBlur:l,liveEdit:n,liveEditId:null==n?void 0:n.id,isSectionSelected:s},"".concat(null==n?void 0:n.id,":").concat(e)):A(t)}(t):A(t)}var M=function(t){(0,i.Z)(f,t);var e,n,s=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)});function f(){var t;(0,r.Z)(this,f);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t=s.call.apply(s,[this].concat(n)),(0,l.Z)((0,c.Z)(t),"state",{content:""}),(0,l.Z)((0,c.Z)(t),"_isMounted",!1),t}return(0,o.Z)(f,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.setLpcComponent()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return this.state.content}},{key:"setLpcComponent",value:function(){var t=this;H(this.props)&&(0,p.hs)("LcStyledTextLiveEdit").then((function(e){t._isMounted&&(e&&e.LcStyledTextLiveEdit&&(B=e.LcStyledTextLiveEdit),t.forceUpdate())}))}}],[{key:"getDerivedStateFromProps",value:function(t){return{content:N(t)}}}]),f}(s.PureComponent),F=(0,g.K)((function(t,e){var n=(0,d._c)(t,e.liveEdit);return L(L({},e),{},{isSectionSelected:n})}))(M)},23311:function(t,e,n){n.d(e,{S:function(){return k},a:function(){return S}}),n(41539),n(81299),n(12419),n(47941),n(82526),n(57327),n(88449),n(2490),n(59849),n(38880),n(57658),n(15581),n(34514),n(54747),n(49337);var r=n(15671),o=n(43144),c=n(97326),i=n(60136),u=n(82963),a=n(61120),l=n(4942),s=(n(92222),n(87363)),f=n(14134),p=n(63487),y=n(50439),h=n(18444),v=n(62912),d=n(78251),O=n(46825),g=n(48548),b=n(5834),j=n(1871),m=n(21437),Z=n(40695),P=n(85893);function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){(0,l.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w="lc-text-block",S=(0,f.Z)(w),D=function(t){(0,i.Z)(f,t);var e,n,s=(e=f,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,a.Z)(e);if(n){var o=(0,a.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,u.Z)(this,t)});function f(){var t;(0,r.Z)(this,f);for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return t=s.call.apply(s,[this].concat(n)),(0,l.Z)((0,c.Z)(t),"state",{isEditor:!1}),t}return(0,o.Z)(f,[{key:"componentDidMount",value:function(){this.setState({isEditor:b.h})}},{key:"styles",get:function(){var t=this.props,e=t.typeface,n=t.color,r=t.letterSpacing,o=t.lineHeight,c=this.props,i=c.weight,u=c.font,a=c.size;i||(i=e?O.$x[e]:400),u&&(0,O.AF)(u)&&(u="text"===u?"YS Text":"YS Display");var l={"--font-weight":i,"--font-size":a&&(0,Z.l)(a)?a:void 0,"--color":null!=n?n:"initial","--font-family":u,"--letter-spacing":r?(0,g.U)(r):"normal"};return o&&(l.lineHeight=(0,g.U)(o)),l}},{key:"render",value:function(){var t=this.props,e=t.mix,n=void 0===e?"":e,r=t.align,o=t.anchorHash,c=t.content,i=void 0===c?"":c,u=t.liveEdit,a=t.tag,l=t.onlyContent,s=t.onChange,f=t.size,p=void 0===f?v.BT.S:f,y=t.hasBreakpoints,h=t.dataElementName,g=void 0===h?"":h,b=t.dataItemIndex,Z=void 0===b?"":b,E=this.state.isEditor,w=this.props.fontSlug,D=void 0===w?"":w,k=function(t){return t!==v.$t.None?t:void 0}(a),R=(0,j.Z)(E&&""!==g,{"data-element-name":g}),C=(0,j.Z)(E&&""!==Z,{"data-item-index":Z});return(0,O.AF)(D)||(D=""),(0,P.jsx)("div",x(x(x({className:S({size:(0,m.E)(p)||!1,bpsize:y&&p?(0,m.E)(p):"",font:D}).mix(n)(),style:this.styles},R),C),{},{children:l?i:(0,P.jsx)(d.E,{content:i,liveEdit:u,align:r,tag:k,anchorHash:o,onChange:s})}))}}]),f}(s.PureComponent),k=(0,p.qC)((0,y.$)("LcTextBlock"),(0,h.u)(w))(D)},1871:function(t,e,n){function r(t,e){return t?e:{}}n.d(e,{Z:function(){return r}})}}]);