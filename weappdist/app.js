!function(e,t,r){"use strict";r.defineProperty(e,"__esModule",{value:!0});var n=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e};function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),r.defineProperty(e,o.key,o)}}t("./pages/index/npm/@tarojs/async-await/index.js");var a,i=t("./pages/index/npm/@tarojs/taro-weapp/index.js"),p=(a=i)&&a.__esModule?a:{default:a};var s=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=r.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(r.setPrototypeOf?r.setPrototypeOf(e,t):e.__proto__=t)}(u,i.Component),n(u,[{key:"_createData",value:function(){}}]),u);function u(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||r.getPrototypeOf(u)).apply(this,arguments));return e.config={pages:["pages/index/index"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#fff",navigationBarTitleText:"WeChat",navigationBarTextStyle:"black"},permission:{"scope.userLocation":{desc:"您的位置信息将用于小程序定位"}}},e.globalData={},e}e.default=s,App(t("./pages/index/npm/@tarojs/taro-weapp/index.js").default.createApp(s)),p.default.initPxTransform({designWidth:750,deviceRatio:{640:1.17,750:1,828:.905}})}(exports,require,Object);