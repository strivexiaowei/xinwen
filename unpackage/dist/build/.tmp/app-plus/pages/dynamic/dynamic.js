(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dynamic/dynamic"],{"04a7":function(t,n,e){"use strict";var i=e("cacc"),a=e.n(i);a.a},2685:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"36da":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("2f62");function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},i=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.forEach(function(n){o(t,n,e[n])})}return t}function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"a139"))},r=function(){return e.e("components/uni-fab/uni-fab").then(e.bind(null,"6ac6"))},l={components:{uniSwiperDot:u,uniFab:r},data:function(){return{info:[{colorClass:"uni-bg-red",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg",content:"内容 A"},{colorClass:"uni-bg-green",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg",content:"内容 B"},{colorClass:"uni-bg-blue",url:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg",content:"内容 C"}],modeIndex:-1,styleIndex:-1,current:0,horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF"},content:[{iconPath:"/static/xiewenz.png",selectedIconPath:"/static/xiewenz.png",text:"写文章",active:!1},{iconPath:"/static/xiangfa.png",selectedIconPath:"/static/xiangfa.png",text:"发动态",active:!1}],dynList:[]}},computed:c({},(0,a.mapState)(["locallPath"])),methods:{change:function(t){this.current=t.detail.current},selectStyle:function(t){this.dotsStyles=this.dotStyle[t],this.styleIndex=t},trigger:function(n){console.log(t(n," at pages\\dynamic\\dynamic.vue:117"));var e=n.index;0===e||i.navigateTo({url:"../new-dynamic/new-dynamic"})},getList:function(){var n=this;i.request({url:this.locallPath+"/BBS/dynamicList",method:"POST",data:{pageSize:10,page:1},success:function(e){console.log(t(e," at pages\\dynamic\\dynamic.vue:138")),n.dynList=e.data}})},previewImage:function(t){var n=this;i.previewImage({urls:this.dynList[t].imgs.map(function(t){return n.locallPath+"/uploads/images/"+t+"/view"})})}},onLoad:function(){this.getList()}};n.default=l}).call(this,e("0de9")["default"],e("6e42")["default"])},"98c0":function(t,n,e){"use strict";e.r(n);var i=e("36da"),a=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,function(){return i[t]})}(c);n["default"]=a.a},aeaa:function(t,n,e){"use strict";e.r(n);var i=e("2685"),a=e("98c0");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("04a7");var o=e("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports},cacc:function(t,n,e){},db13:function(t,n,e){"use strict";(function(t){e("91e2"),e("921b");i(e("66fd"));var n=i(e("aeaa"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["db13","common/runtime","common/vendor"]]]);