(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/chatinput"],{"187a":function(t,n,e){"use strict";e.r(n);var u=e("a75f"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"2ca2":function(t,n,e){"use strict";e.r(n);var u=e("9d6f"),a=e("187a");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("9467");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},"3d73":function(t,n,e){},9467:function(t,n,e){"use strict";var u=e("3d73"),a=e.n(u);a.a},"9d6f":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},a75f:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"chat-input",data:function(){return{inputValue:""}},methods:{startRecognize:function(){var n={},e=this;n.engine="iFly",e.inputValue="",plus.speech.startRecognize(n,function(n){console.log(t(n," at components\\chatinput.vue:30")),e.inputValue+=n},function(n){console.log(t("语音识别失败："+n.message," at components\\chatinput.vue:33"))})},sendMessge:function(){var t=this;""==t.inputValue.trim()?t.inputValue="":(this.$emit("send-message",{type:"text",content:t.inputValue}),t.inputValue="")}}};n.default=e}).call(this,e("0de9")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chatinput-create-component',
    {
        'components/chatinput-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("2ca2"))
        })
    },
    [['components/chatinput-create-component']]
]);                
