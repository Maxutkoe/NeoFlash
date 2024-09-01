"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2840],{11890:function(e,t,r){r.d(t,{NQ:function(){return o},XJ:function(){return s},pm:function(){return a}}),r(19601);var n=r(87735),i=r(6896);function o(e){if(!e)return!1;var t=e.type,r=e.mp4Url,n=e.webmUrl,o=e.streamSrc,s=e.youtubeSrc,a=e.vimeoSrc,c=e.vhSrc,l=e.stub;return t===i.Z.Uploaded?Boolean(r||n):t===i.Z.Stream?Boolean(o):t===i.Z.Youtube?Boolean(s):t===i.Z.Vimeo?Boolean(a):t===i.Z.VH&&(Boolean(c)||Boolean(l))}function s(e){var t=parseFloat(String(e));return isNaN(t)?void 0:t+"px"}function a(e,t){var r=t?(0,n.parse)(t):{};return Object.assign(e,r)}},62840:function(e,t,r){r.r(t),r.d(t,{LcVideoBlock:function(){return me},LcVideoBlockComponent:function(){return be}}),r(41539),r(81299),r(12419),r(47941),r(82526),r(57327),r(88449),r(2490),r(59849),r(38880),r(57658),r(15581),r(34514),r(54747),r(49337);var n=r(15671),i=r(43144),o=r(60136),s=r(82963),a=r(61120),c=r(4942),l=(r(92222),r(74916),r(4723),r(77601),r(87735)),u=r(87363),p=r(14134),y=r(63487),d=r(41799),f=r(5834),v=r(24695),h=r(8729),b=r(50439),m=r(47330),O=r(30633),g=r(46127),P=r(20703),w=r(83616),j=r(14544),Z=r(45987),S=r(97326),I=r(99724),k=r(25673),R=r(85893),x=["src","visibilityRootRef","isVisible","isIntersecting","children","unobserve"];function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){(0,o.Z)(u,e);var t,r,l=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(){var e;(0,n.Z)(this,u);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=l.call.apply(l,[this].concat(r)),(0,c.Z)((0,S.Z)(e),"state",{isMounted:!1}),e}return(0,i.Z)(u,[{key:"renderBordersWrapper",value:function(e){var t=this.props.bordersWrapper;return t?(0,R.jsx)(j.LcBorders,B(B({isComponentWrapper:!0},t),{},{children:e})):e}},{key:"componentDidMount",value:function(){this.setState({isMounted:!0})}},{key:"render",value:function(){var e=this.props,t=e.src,r=e.visibilityRootRef,n=e.isVisible,i=e.isIntersecting,o=(e.children,e.unobserve,(0,Z.Z)(e,x)),s=this.state.isMounted&&(f.h||n||i);return this.renderBordersWrapper((0,R.jsx)("iframe",B(B({},o),{},{src:s?t:void 0,ref:r})))}}]),u}(u.PureComponent),U=(0,I.g)(k.nb)(C),D=["mp4Url","webmUrl","visibilityRootRef","isVisible","isIntersecting","children","unobserve"];function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){(0,o.Z)(l,e);var t,r,c=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function l(){return(0,n.Z)(this,l),c.apply(this,arguments)}return(0,i.Z)(l,[{key:"renderBordersWrapper",value:function(e){var t=this.props.bordersWrapper;return t?(0,R.jsx)(j.LcBorders,W(W({isComponentWrapper:!0},t),{},{children:e})):e}},{key:"render",value:function(){var e=this.props,t=e.mp4Url,r=e.webmUrl,n=e.visibilityRootRef,i=e.isVisible,o=e.isIntersecting,s=(e.children,e.unobserve,(0,Z.Z)(e,D)),a=f.h||i||o;return this.renderBordersWrapper((0,R.jsxs)("video",W(W({},s),{},{ref:n,children:[t&&a&&(0,R.jsx)("source",{src:t,type:"video/mp4"}),r&&a&&(0,R.jsx)("source",{src:r,type:"video/webm"})]})))}}]),l}(u.PureComponent),E=(0,I.g)(k.nb)(N),L=r(6896),_=r(11890),H=r(93433),M=(r(64211),r(41874),r(55877)),F=r(42881);var Y=function(e){(0,o.Z)(u,e);var t,r,l=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(){var e;(0,n.Z)(this,u);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=l.call.apply(l,[this].concat(r)),(0,c.Z)((0,S.Z)(e),"state",{isUserPlay:e.props.autoplay,wasPlayerControlled:!1,isPlay:e.props.autoplay}),(0,c.Z)((0,S.Z)(e),"onPlay",(function(){e.setState((function(e){var t=e.isUserPlay;return e.wasPlayerControlled?{isUserPlay:t,wasPlayerControlled:!1,isPlay:!0}:{isUserPlay:!0,wasPlayerControlled:!1,isPlay:!0}}))})),(0,c.Z)((0,S.Z)(e),"onPause",(function(){e.setState((function(e){var t=e.isUserPlay;return e.wasPlayerControlled?{isUserPlay:t,wasPlayerControlled:!1,isPlay:!1}:{isUserPlay:!1,wasPlayerControlled:!1,isPlay:!1}}))})),e}return(0,i.Z)(u,[{key:"isShown",get:function(){var e=this.props,t=e.isIntersecting,r=e.isVisible;return t||r}},{key:"componentDidUpdate",value:function(e,t){var r=this,n=this.props,i=n.playOnInvisible,o=n.player,s=n.eventsOnPause,a=n.eventsOnPlay,c=this.state,l=c.isPlay,u=c.isUserPlay,p=c.wasPlayerControlled;i||!o||e.player||(s.forEach((function(e){o.on(e,r.onPause)})),a.forEach((function(e){o.on(e,r.onPlay)}))),l===t.isPlay&&u===t.isUserPlay&&p||!i&&o&&u&&(this.isShown&&!l&&(this.setState({wasPlayerControlled:!0}),o.play()),!this.isShown&&l&&(this.setState({wasPlayerControlled:!0}),o.pause()))}},{key:"render",value:function(){return this.props.container}}]),u}(u.PureComponent),Q=["contentId","visibilityRootRef","isVisible","isIntersecting","unobserve","playOnInvisible","params"];function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=["play"],K=["pause"],T=(0,p.Z)("lc-video-block"),X=function(e){(0,o.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function p(){var e;(0,n.Z)(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=u.call.apply(u,[this].concat(r)),(0,c.Z)((0,S.Z)(e),"containerId",(0,M.v4)()),(0,c.Z)((0,S.Z)(e),"state",{vimeoUrl:"",wasScriptAttached:!1,player:null,isPlaying:!1}),(0,c.Z)((0,S.Z)(e),"onClick",(function(){var t=e.props.params,r=t.controls,n=t.autoplay,i=e.state,o=i.player,s=i.isPlaying;r||!o||n||(s?(o.pause(),e.setState({isPlaying:!1})):(o.play(),e.setState({isPlaying:!0})))})),e}return(0,i.Z)(p,[{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.params,n=t.contentId,i=t.isIntersecting,o=t.isVisible,s=[].concat((0,H.Z)(Object.keys(r)),(0,H.Z)(Object.keys(e.params))).some((function(t){return e.params[t]!==r[t]}));n&&(o||i||f.h)&&!this.state.wasScriptAttached?(this.setState({vimeoUrl:"https://player.vimeo.com/video/".concat(n,"?").concat((0,l.stringify)($($({},r),{},{autoplay:this.isAutoplay}))),wasScriptAttached:!0}),this.attachPlayerScript()):n&&f.h&&s&&this.setState({vimeoUrl:"https://player.vimeo.com/video/".concat(n,"?").concat((0,l.stringify)($($({},r),{},{autoplay:this.isAutoplay})))})}},{key:"isAutoplay",get:function(){var e=this.props,t=e.params,r=e.playOnInvisible,n=e.isVisible,i=e.isIntersecting;return t.autoplay&&(r||n||i)}},{key:"attachPlayerScript",value:function(){var e=this;(0,F.$)("//yastatic.net/s3/lpc-ext/static/_lib/vimeo/2.20.1/vimeo.js").then((function(){e.initPlayer()}))}},{key:"initPlayer",value:function(){var e,t,r,n,i=window.Vimeo,o=this.props,s=o.params,a=o.contentId;i&&a&&null!==(e=this.props.visibilityRootRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.id&&this.setState({player:new i.Player(null===(r=this.props.visibilityRootRef)||void 0===r||null===(n=r.current)||void 0===n?void 0:n.id,$({contentId:a},$($({},s),{},{autoplay:this.isAutoplay})))}),i||console.error("Vimeo script was attached, but there is no Vimeo in window")}},{key:"renderOverlay",value:function(){var e=this.props.params,t=e.controls,r=e.autoplay;return t||f.h||r?null:(0,R.jsx)("div",{className:T("overlay",{vimeo:!0})(),onClick:this.onClick})}},{key:"container",get:function(){var e=this.props,t=(e.contentId,e.visibilityRootRef),r=(e.isVisible,e.isIntersecting,e.unobserve,e.playOnInvisible,e.params,(0,Z.Z)(e,Q));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("iframe",$({src:this.state.vimeoUrl,id:this.containerId,frameBorder:"no",scrolling:"no",allowFullScreen:!0,ref:t},r),this.containerId),this.renderOverlay()]})}},{key:"render",value:function(){var e=this.props,t=e.playOnInvisible,r=e.params.autoplay,n=e.isIntersecting,i=e.isVisible,o=Boolean(r);return(0,R.jsx)(Y,{player:this.state.player,autoplay:o,eventsOnPlay:z,eventsOnPause:K,container:this.container,playOnInvisible:t,isIntersecting:n,isVisible:i})}}]),p}(u.PureComponent),q=(0,I.g)({enableRoot:!1})(X),G=["contentId","visibilityRootRef","isVisible","isIntersecting","unobserve","playOnInvisible","params"];function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=["started","resumed"],ne=["paused"],ie=(0,p.Z)("lc-video-block"),oe=function(e){(0,o.Z)(u,e);var t,r,l=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(){var e;(0,n.Z)(this,u);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=l.call.apply(l,[this].concat(r)),(0,c.Z)((0,S.Z)(e),"containerId",(0,M.v4)()),(0,c.Z)((0,S.Z)(e),"state",{wasScriptAttached:!1,player:null,isPlaying:!1,isStarted:!1}),(0,c.Z)((0,S.Z)(e),"handleClick",(function(){var t=e.props.params,r=t.hidden,n=t.autoplay,i=e.state,o=i.player,s=i.isPlaying;r&&o&&!n&&(s?o.pause():o.play(),e.setState((function(e){return{isPlaying:!e.isPlaying}})))})),e}return(0,i.Z)(u,[{key:"isAutoplay",get:function(){var e=this.props,t=e.params,r=e.playOnInvisible,n=e.isVisible,i=e.isIntersecting;return t.autoplay&&(r||n||i)}},{key:"attachPlayerScript",value:function(){var e=this;(0,F.$)("//yastatic.net/vh-player/loader.js").then((function(){e.initPlayer()}))}},{key:"componentDidUpdate",value:function(e){var t=this.props,r=t.contentId,n=t.isIntersecting,i=t.isVisible,o=t.params,s=[].concat((0,H.Z)(Object.keys(o)),(0,H.Z)(Object.keys(e.params))).some((function(t){return e.params[t]!==o[t]})),a=r!==e.contentId;if(r&&(n||i||f.h)&&!this.state.wasScriptAttached)this.setState({wasScriptAttached:!0}),this.attachPlayerScript();else if(r&&f.h&&(s||a)){var c;null===(c=this.state.player)||void 0===c||c.destroy(),this.setState({isStarted:!1}),this.initPlayer()}}},{key:"initPlayer",value:function(){var e,t,r,n,i,o,s=this,a=null===(e=window.Yandex)||void 0===e?void 0:e.VH,c=this.props,l=c.params,u=c.contentId;a&&u&&null!==(t=this.props.visibilityRootRef)&&void 0!==t&&null!==(r=t.current)&&void 0!==r&&r.id&&(this.setState({player:new a.Player(null===(n=this.props.visibilityRootRef)||void 0===n||null===(i=n.current)||void 0===i?void 0:i.id,{contentId:u,params:te(te({},l),{},{autoplay:this.isAutoplay?1:0})})}),null===(o=this.state.player)||void 0===o||o.on("started",(function(){return s.setState({isStarted:!0,isPlaying:!0})}))),a||console.error("VH script was attached, but there is no VH in window")}},{key:"componentWillUnmount",value:function(){var e;null===(e=this.state.player)||void 0===e||e.destroy()}},{key:"renderOverlay",value:function(){var e=this.props.params,t=e.hidden,r=e.autoplay,n=this.state.isStarted,i=t===k.JZ;return!t||t&&!i||f.h||r||!n?null:(0,R.jsx)("div",{className:ie("overlay",{vh:!0})(),onClick:this.handleClick})}},{key:"container",get:function(){var e=this.props,t=(e.contentId,e.visibilityRootRef),r=(e.isVisible,e.isIntersecting,e.unobserve,e.playOnInvisible,e.params,(0,Z.Z)(e,G));return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("div",te({id:this.containerId,ref:t},r),this.containerId),this.renderOverlay()]})}},{key:"render",value:function(){var e=this.props,t=e.playOnInvisible,r=e.params.autoplay,n=e.isIntersecting,i=e.isVisible,o=Boolean(r);return(0,R.jsx)(Y,{player:this.state.player,autoplay:o,eventsOnPlay:re,eventsOnPause:ne,container:this.container,playOnInvisible:t,isIntersecting:n,isVisible:i})}}]),u}(u.PureComponent),se=(0,I.g)({enableRoot:!1})(oe),ae=(r(69600),["contentId","visibilityRootRef","isVisible","isIntersecting","unobserve","params","className"]);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=(0,p.Z)("lc-video-block"),pe={width:"100%",height:"100%"},ye=function(e){(0,o.Z)(p,e);var t,r,u=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function p(){var e;(0,n.Z)(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=u.call.apply(u,[this].concat(r)),(0,c.Z)((0,S.Z)(e),"containerId",(0,M.v4)()),(0,c.Z)((0,S.Z)(e),"eventsId",parseInt(e.containerId.split("-").join(""),16)),(0,c.Z)((0,S.Z)(e),"state",{isStart:!1,isShown:!1,isPlaying:!1}),(0,c.Z)((0,S.Z)(e),"onIframePost",(function(t){if("https://www.youtube.com"===t.origin&&t.data){var r=JSON.parse(t.data);if(r.id===e.eventsId&&r.info){var n=r.info.playerState;1===n&&e.setState({isStart:!0,isPlaying:!0}),0===n&&e.setState({isStart:!1,isPlaying:!1})}}})),(0,c.Z)((0,S.Z)(e),"handleClick",(function(){var t,r,n,i,o,s=e.props,a=s.visibilityRootRef,c=s.params,l=c.autoplay,u=c.mute,p=e.state.isPlaying;null==a||null===(t=a.current)||void 0===t||!t.contentWindow||"1"===l&&"1"===u||(p?null==a||null===(r=a.current)||void 0===r||null===(n=r.contentWindow)||void 0===n||n.postMessage('{"event":"command","id":'.concat(e.eventsId,',"func":"pauseVideo","channel":"widget"}'),"*"):null==a||null===(i=a.current)||void 0===i||null===(o=i.contentWindow)||void 0===o||o.postMessage('{"event":"command","id":'.concat(e.eventsId,',"func":"playVideo","channel":"widget"}'),"*"),e.setState((function(e){return{isPlaying:!e.isPlaying}})))})),e}return(0,i.Z)(p,[{key:"componentDidUpdate",value:function(){var e,t=this,r=this.props,n=r.contentId,i=r.isIntersecting,o=r.isVisible,s=r.visibilityRootRef;n&&(o||i||f.h)&&!this.state.isShown&&(this.setState({isShown:!0}),null==s||null===(e=s.current)||void 0===e||e.addEventListener("load",(function(){var e,r;null==s||null===(e=s.current)||void 0===e||null===(r=e.contentWindow)||void 0===r||r.postMessage('{"event":"listening","id":'.concat(t.eventsId,',"channel":"widget"}'),"*"),window.addEventListener("message",t.onIframePost)})))}},{key:"renderOverlay",value:function(){var e=this.props.params,t=e.controls,r=e.autoplay,n=e.mute;return"0"===t&&("1"===r&&"1"===n||this.state.isStart)?(0,R.jsx)("div",{className:ue("overlay")(),onClick:this.handleClick}):null}},{key:"youtubeUrl",get:function(){return"https://www.youtube.com/embed/".concat(this.props.contentId,"?").concat((0,l.stringify)(this.props.params))}},{key:"render",value:function(){var e=this.state,t=e.isStart,r=e.isShown,n=this.props,i=(n.contentId,n.visibilityRootRef),o=(n.isVisible,n.isIntersecting,n.unobserve,n.params),s=n.className,a=(0,Z.Z)(n,ae),c="0"===o.controls&&t?{height:"calc(100% + 1000px)",margin:"-500px 0 0 0"}:{};return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("div",{style:{overflow:"hidden"},className:s,children:[(0,R.jsx)("iframe",le({src:r?this.youtubeUrl:void 0,ref:i,id:this.containerId,frameBorder:"no",scrolling:"no",allowFullScreen:!0,style:le(le({},pe),c)},a),this.containerId),this.renderOverlay()]})})}}]),p}(u.PureComponent),de=(0,I.g)({enableRoot:!1})(ye);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var he=(0,p.Z)("lc-video-block"),be=function(e){(0,o.Z)(u,e);var t,r,c=(t=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,a.Z)(t);if(r){var i=(0,a.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function u(){return(0,n.Z)(this,u),c.apply(this,arguments)}return(0,i.Z)(u,[{key:"styles",get:function(){return{"--video-block-width":this.props.customWidth||"100%"}}},{key:"videoStyles",get:function(){var e=this.props.video,t=e.ratio,r=e.customRatioPx,n=void 0===r?k.VS:r;return t!==L.B.Custom?{}:{width:(0,_.XJ)(n.width),height:(0,_.XJ)(n.height)}}},{key:"isReducedMotionOn",get:function(){return d.N&&window.matchMedia("(prefers-reduced-motion: reduce)").matches||!1}},{key:"isAutoplay",get:function(){return this.props.video.autoplay&&!f.h&&!this.isReducedMotionOn}},{key:"isControlShown",get:function(){return this.props.video.showControls||this.isReducedMotionOn}},{key:"render",value:function(){var e=this,t=this.props,r=t.video,n=t.mix,i=void 0===n?"":n,o=t.resizerMix,s=void 0===o?"":o,a=t.width,c=t.customWidth,l=t.hasBreakpoints,u=void 0!==l&&l,p=r.ratio,y=void 0===p?"":p,d=r.mask;if(!(0,_.NQ)(r))return null;var v=ve(ve({"in-grid2":(0,w.TO)(this.props),"has-breakpoints":u},a&&{width:a}),{},{"custom-width":Boolean(c)});return(0,R.jsx)("div",{className:he.mix(i)(v)(),style:this.styles,children:(0,R.jsx)(P.f,{value:d,children:function(t){return(0,R.jsx)("div",{className:he.mix(s)("resizer",{ratio:y})(),style:e.videoStyles,children:(0,R.jsxs)("div",{className:he("content")(),style:t,children:[e.renderVideo(),f.h&&(0,R.jsx)("div",{className:he("disable-layer")()}),e.renderVideoStub()]})})}})})}},{key:"renderVideo",value:function(){var e=this.props,t=e.video,r=t.type,n=t.mp4Url,i=t.webmUrl,o=t.loop,s=t.muted,a=e.bordersWrapper,c=e.userQuery,l=c?"?".concat(c):"";return r===L.Z.Uploaded?(0,R.jsx)(E,{className:he("video-object")(),autoPlay:this.isAutoplay,playsInline:this.isAutoplay,loop:o,muted:s,controls:this.isControlShown,preload:"auto",mp4Url:n&&"".concat(n).concat(l),webmUrl:i&&"".concat(i).concat(l),bordersWrapper:(0,w.TO)(this.props)?void 0:a}):r===L.Z.Vimeo?this.renderVimeoVideo():r===L.Z.VH?this.renderVHVideo():r===L.Z.Youtube?this.renderYoutubeVideo():(0,R.jsx)(U,{className:he("video-object")(),src:this.getIframeUrl(),frameBorder:"no",scrolling:"no",bordersWrapper:a,allowFullScreen:!0})}},{key:"renderBordersWrapper",value:function(e){var t=this.props.bordersWrapper;return t?(0,R.jsx)(j.LcBorders,ve(ve({isComponentWrapper:!0},t),{},{children:e})):e}},{key:"renderYoutubeVideo",value:function(){var e=this.props,t=e.video,r=t.loop,n=t.muted,i=t.youtubeSrc,o=void 0===i?"":i,s=e.userQuery,a=-1===o.indexOf("youtube.com")&&-1===o.indexOf("youtu.be")?o:this.extractYoutubeIdFromUrl(o),c={loop:r?"1":"0",autoplay:this.isAutoplay?"1":"0",mute:n?"1":"0",controls:this.isControlShown?"1":"0",disablekb:this.isControlShown?"0":"1",rel:"0",enablejsapi:"1"};r&&(c.playlist=a);var u=s?(0,l.parse)(s):{};return this.renderBordersWrapper((0,R.jsx)(de,{params:ve(ve({},c),u),contentId:a,className:he("video-object")()}))}},{key:"renderVimeoVideo",value:function(){var e=this.props,t=e.video,r=t.loop,n=t.muted,i=t.playOnInvisible,o=e.userQuery,s=o?(0,l.parse)(o):{},a=ve({loop:r,autoplay:this.isAutoplay,muted:n,autopause:!1,controls:this.isControlShown,keyboard:this.isControlShown},s);return this.renderBordersWrapper((0,R.jsx)(q,{contentId:this.extractVimeoIdFromUrl(this.props.video.vimeoSrc||""),params:a,playOnInvisible:i,className:he("video-object")()}))}},{key:"renderVHVideo",value:function(){var e=this.props,t=e.video,r=t.loop,n=t.muted,i=t.vhChannel,o=t.poster,s=t.playOnInvisible,a=e.isScreenshotMode,c=e.userQuery;if(a)return null;var u=this.extractVHIdFromUrl(this.props.video.vhSrc||""),p=c?(0,l.parse)(c):{},y={loop:r?1:0,autoplay:this.isAutoplay?1:0,mute:n?1:0,object_fit:"cover"};return i&&(y.from=i),this.isControlShown||(y.hidden=k.JZ),o&&(y.preview_src=o),this.renderBordersWrapper((0,R.jsx)(se,{params:ve(ve({},y),p),contentId:u,playOnInvisible:s,className:he("video-object")()}))}},{key:"renderVideoStub",value:function(){var e=this.props,t=e.video,r=t.type,n=t.stub,i=e.isScreenshotMode;if((f.h||i)&&r===L.Z.VH&&n){var o={backgroundImage:"url(".concat(n,")")};return(0,R.jsx)("div",{className:he("vh-player-stub")(),style:o})}return null}},{key:"getIframeUrl",value:function(){var e=this.props.video,t=e.streamSrc,r=void 0===t?"":t,n=e.loop,i=e.muted,o=e.showControls,s=e.player,a=void 0===s?k.db:s;if(!this.isHSL(r))return console.warn("Ожидается ссылка формата .m3u8"),"";var c={loop:n,muted:i,autoplay:this.isAutoplay,hq_url:r};return o||(c.hidden="*"),"".concat(a.host,"/").concat(a.version,"/?").concat((0,l.stringify)((0,_.pm)(c,this.props.userQuery)))}},{key:"extractYoutubeIdFromUrl",value:function(e){var t=e.match(k.uo);return t?t[1]:""}},{key:"extractVimeoIdFromUrl",value:function(e){var t=e.match(k.a2);return t?t[2]:e}},{key:"extractVHIdFromUrl",value:function(e){var t=e.match(k.rY);return t?t[1]||t[2]:e}},{key:"isHSL",value:function(e){return/\.m3u8$/.test(e)}}]),u}(u.PureComponent);(0,c.Z)(be,"defaultProps",{mix:""});var me=(0,y.qC)((0,b.$)("LcVideoBlock"),(0,g.K)((function(e){return{isScreenshotMode:(0,v.Tz)(e)}})),h.H,O.W,m.V)(be)}}]);