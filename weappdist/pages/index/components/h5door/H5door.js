!function(t,e,s,i){"use strict";s.defineProperty(t,"__esModule",{value:!0});var r=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t};function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),s.defineProperty(t,n.key,n)}}var o,a,u,l=e("../../npm/@tarojs/taro-weapp/index.js"),p=(u=l)&&u.__esModule?u:{default:u};function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=s.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(s.setPrototypeOf?s.setPrototypeOf(t,e):t.__proto__=e)}(g,l.Component),r(g,[{key:"_constructor",value:function(){(function t(e,r,n){null===e&&(e=Function.prototype);var o=s.getOwnPropertyDescriptor(e,r);if(void 0===o){var a=s.getPrototypeOf(e);return null===a?void 0:t(a,r,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0})(g.prototype.__proto__||s.getPrototypeOf(g.prototype),"_constructor",this).apply(this,arguments),this.state={jumpUrl:"",urlList:[],showWebview:!1},this.$$refs=new p.default.RefsArray}},{key:"componentDidMount",value:function(){this.getUrlList()}},{key:"_createData",value:function(t,e,r){this.__state=t||this.state||{},this.__props=e||this.props||{},this.$prefix;var n=this.__state,o=(n.jumpUrl,n.urlList),a=(n.showWebview,0<o.length?o.map(function(t,e){return t={$original:(0,l.internal_get_original)(t)},{$loopState__temp3:0<o.length?"/pages/index/assets/img/search.png":null,$original:t.$original}}):[]);return s.assign(this.__state,{anonymousState__temp:"/pages/index/assets/img/scan.png",loopArray7:a}),this.__state}}]),a=o=g,o.$$events=["onUrlInputChange","scanCode","setJumpUrl","clearHistory","jump"],o.$$componentPath="pages/index/components/h5door/H5door",a);function g(){var t,e,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,g);for(var r=arguments.length,n=i(r),a=0;a<r;a++)n[a]=arguments[a];return(e=o=c(this,(t=g.__proto__||s.getPrototypeOf(g)).call.apply(t,[this].concat(n)))).$usedState=["anonymousState__temp","loopArray7","jumpUrl","urlList","showWebview"],o.getUrlList=function(){var t=[],e=p.default.getStorageSync("debug-url");e&&(t=t.concat(e.split(","))),o.setState({urlList:t})},o.setJumpUrl=function(t){o.setState({jumpUrl:t.target.dataset.url})},o.scanCode=function(){p.default.scanCode({success:function(t){o.setState({jumpUrl:t.result},function(){o.jump()})}})},o.onUrlInputChange=function(t){o.setState({jumpUrl:t.detail.value})},o.clearHistory=function(){p.default.clearStorageSync(),o.getUrlList()},o.storageUrl=function(){var t=o.state,e=t.jumpUrl,r=t.urlList;if(-1===r.indexOf(e)){var n=[].concat(function(t){if(i.isArray(t)){for(var e=0,r=i(t.length);e<t.length;e++)r[e]=t[e];return r}return i.from(t)}(r),[e]);o.setState({urlList:n}),p.default.setStorage({key:"debug-url",data:n.join(",")})}},o.jump=function(){o.state.jumpUrl?(o.storageUrl(),o.setState({showWebview:!0})):p.default.showToast({title:"请输入跳转链接"})},o.customComponents=[],c(o,e)}t.default=f,Component(e("../../npm/@tarojs/taro-weapp/index.js").default.createComponent(f))}(exports,require,Object,Array);