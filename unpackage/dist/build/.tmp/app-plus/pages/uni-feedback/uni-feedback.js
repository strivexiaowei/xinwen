(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uni-feedback/uni-feedback"],{1464:function(e,t,n){"use strict";n.r(t);var s=n("a33d"),i=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=i.a},"349c":function(e,t,n){"use strict";(function(e){n("91e2"),n("921b");s(n("66fd"));var t=s(n("9a84"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"41e0":function(e,t,n){},6728:function(e,t,n){"use strict";var s=n("41e0"),i=n.n(s);i.a},"9a84":function(e,t,n){"use strict";n.r(t);var s=n("dc64"),i=n("1464");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("6728");var o=n("2877"),c=Object(o["a"])(i["default"],s["a"],s["b"],!1,null,null,null);t["default"]=c.exports},a33d:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{msgContents:["界面显示错乱","启动缓慢，卡出翔了","UI无法直视，丑哭了","偶发性崩溃"],stars:[1,2,3,4,5],imageList:[],sendDate:{score:0,content:"",contact:""}}},onLoad:function(){var e={appid:plus.runtime.appid,imei:plus.device.imei,p:"Android"===plus.os.name?"a":"i",md:plus.device.model,app_version:plus.runtime.version,plus_version:plus.runtime.innerVersion,os:plus.os.version,net:""+plus.networkinfo.getCurrentType()};this.sendDate=Object.assign(e,this.sendDate)},methods:{close:function(e){this.imageList.splice(e,1)},chooseMsg:function(){var t=this;e.showActionSheet({itemList:this.msgContents,success:function(e){t.sendDate.content=t.msgContents[e.tapIndex]}})},chooseImg:function(){var t=this;e.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:8-this.imageList.length,success:function(e){t.imageList=t.imageList.concat(e.tempFilePaths)}})},chooseStar:function(e){this.sendDate.score=e},previewImage:function(){e.previewImage({urls:this.imageList})},send:function(){var t=this;console.log(n(JSON.stringify(this.sendDate)," at pages\\uni-feedback\\uni-feedback.vue:111"));var s=this.imageList.map(function(e,t){return{name:"image"+t,uri:e}});e.uploadFile({url:"https://service.dcloud.net.cn/feedback",files:s,formData:this.sendDate,success:function(n){200===n.statusCode&&(e.showToast({title:"反馈成功!"}),t.imageList=[],t.sendDate={score:0,content:"",contact:""})},fail:function(t){e.showToast({title:"失败",icon:"none"}),console.log(n(t," at pages\\uni-feedback\\uni-feedback.vue:140"))}})}}};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},dc64:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i})}},[["349c","common/runtime","common/vendor"]]]);