webpackJsonp([0],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"3Eo+":function(t,e){var n=0,s=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+s).toString(36))}},"52gC":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"D/bO":function(t,e){},D2L2:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},Dd8w:function(t,e,n){"use strict";e.__esModule=!0;var s,o=n("woOf"),i=(s=o)&&s.__esModule?s:{default:s};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}},Ibhu:function(t,e,n){var s=n("D2L2"),o=n("TcQ7"),i=n("vFc/")(!1),r=n("ax3d")("IE_PROTO");t.exports=function(t,e){var n,u=o(t),c=0,a=[];for(n in u)n!=r&&s(u,n)&&a.push(n);for(;e.length>c;)s(u,n=e[c++])&&(~i(a,n)||a.push(n));return a}},MU5D:function(t,e,n){var s=n("R9M2");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==s(t)?t.split(""):Object(t)}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},OC6q:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"home",components:{itemContent:n("pbNr").a}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("itemContent",{attrs:{"father-component":"home"}})],1)},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("WOIO")},null,null);e.default=i.exports},QRG4:function(t,e,n){var s=n("UuGF"),o=Math.min;t.exports=function(t){return t>0?o(s(t),9007199254740991):0}},R4wc:function(t,e,n){var s=n("kM2E");s(s.S+s.F,"Object",{assign:n("To3L")})},R9M2:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},TcQ7:function(t,e,n){var s=n("MU5D"),o=n("52gC");t.exports=function(t){return s(o(t))}},To3L:function(t,e,n){"use strict";var s=n("lktj"),o=n("1kS7"),i=n("NpIQ"),r=n("sB3e"),u=n("MU5D"),c=Object.assign;t.exports=!c||n("S82l")(function(){var t={},e={},n=Symbol(),s="abcdefghijklmnopqrst";return t[n]=7,s.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=s})?function(t,e){for(var n=r(t),c=arguments.length,a=1,h=o.f,d=i.f;c>a;)for(var l,m=u(arguments[a++]),f=h?s(m).concat(h(m)):s(m),p=f.length,v=0;p>v;)d.call(m,l=f[v++])&&(n[l]=m[l]);return n}:c},UuGF:function(t,e){var n=Math.ceil,s=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?s:n)(t)}},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},WOIO:function(t,e){},ax3d:function(t,e,n){var s=n("e8AB")("keys"),o=n("3Eo+");t.exports=function(t){return s[t]||(s[t]=o(t))}},e8AB:function(t,e,n){var s=n("7KvD"),o=s["__core-js_shared__"]||(s["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},fkB2:function(t,e,n){var s=n("UuGF"),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=s(t))<0?o(t+e,0):i(t,e)}},lktj:function(t,e,n){var s=n("Ibhu"),o=n("xnc9");t.exports=Object.keys||function(t){return s(t,o)}},pbNr:function(t,e,n){"use strict";var s=n("Dd8w"),o=n.n(s),i=n("NYxO"),r={name:"itemContent",data:function(){return{choosedId:null,choosedIds:[],choosedNum:null,choosedNums:[]}},computed:o()({},Object(i.d)(["questions","questionNum"]),Object(i.c)(["totalQusNum"])),props:["father-component"],methods:o()({},Object(i.b)(["addNum","reduceNum","initializeData"]),{addNewStyle:function(){if(!document.getElementById("new_style")){var t=document.createElement("style");t.id="new_style";try{t.appendChild(document.createTextNode(".current-question-enter{transform: translate(-6rem);}")),t.appendChild(document.createTextNode(".current-question-leave-to{transform: translate(6rem);}"))}catch(e){t.styeleSheet.cssText=".current-question-enter{transform: translate(-6rem);}",t.styeleSheet.cssText=".current-question-leave-to{transform: translate(6rem);}"}document.getElementsByTagName("head")[0].appendChild(t)}},removeNewStyle:function(){var t=document.getElementById("new_style");t&&document.getElementsByTagName("head")[0].removeChild(t)},remeberNumsAndIds:function(){null!==this.choosedIds[this.questionNum-1]?(this.choosedNums[this.questionNum-1]=this.choosedNum,this.choosedIds[this.questionNum-1]=this.choosedId):(this.choosedNums.push(this.choosedNum),this.choosedIds.push(this.choosedId))},prevQuestion:function(){this.removeNewStyle(),1==this.questionNum?alert("已经是第一个题了~"):(this.addNewStyle(),this.choosedId&&this.remeberNumsAndIds(),this.reduceNum(this.choosedId),this.choosedNum=this.choosedNums[this.questionNum-1],this.choosedId=this.choosedIds[this.questionNum-1])},nextQuestion:function(){this.choosedId?(this.removeNewStyle(),this.remeberNumsAndIds(),this.addNum(this.choosedId),this.choosedIds[this.questionNum-1]?(this.choosedId=this.choosedIds[this.questionNum-1],this.choosedNum=this.choosedNums[this.questionNum-1]):(this.choosedId=null,this.choosedNum=null)):alert("您还没有选择答案~")},submitAnswer:function(){this.choosedId?(this.removeNewStyle,this.remeberNumsAndIds(),this.addNum(this.choosedId),this.choosedIds[this.questionNum-1]?(this.choosedId=this.choosedIds[this.questionNum-1],this.choosedNum=this.choosedNums[this.questionNum-1]):(this.choosedId=null,this.choosedNum=null),this.$router.push("score")):alert("您还没有选择答案~")},choosed:function(t,e){this.choosedId=e,this.choosedNum=t},optionType:function(t){switch(t){case 0:return"A";case 1:return"B";case 2:return"C";case 3:return"D"}}}),created:function(){this.initializeData(),document.body.style.backgroundImage="url(./static/img/1-1.a92218b.jpg)"}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("header",{staticClass:"top-tip"},["home"==t.fatherComponent?n("span",{staticClass:"num-tip"},[t._v("共"+t._s(t.totalQusNum)+"题")]):t._e(),t._v(" "),"question"==t.fatherComponent?n("span",{staticClass:"num-tip"},[t._v("第"+t._s(t.questionNum)+"题")]):t._e()]),t._v(" "),"home"==t.fatherComponent?n("div",[n("div",{staticClass:"content-style home-content"}),t._v(" "),n("router-link",{staticClass:"btn-style start-btn",attrs:{to:"/atest/question"}})],1):t._e(),t._v(" "),"question"==t.fatherComponent?n("div",[n("div",{staticClass:"content-style question-content"},[n("transition",{attrs:{name:"current-question"}},[n("div",{key:t.questions[t.questionNum-1].question_id,staticClass:"question-list"},[n("h2",{staticClass:"question-title"},[t._v(t._s(t.questions[t.questionNum-1].question_title))]),t._v(" "),n("ul",t._l(t.questions[t.questionNum-1].answer_options,function(e,s){return n("li",{staticClass:"answer-list",on:{click:function(n){t.choosed(s,e.answer_id)}}},[n("span",{staticClass:"answer-option-num",class:{"has-choosed":t.choosedNum==s}},[t._v(t._s(t.optionType(s)))]),t._v(" "),n("span",{staticClass:"answer-option"},[t._v(t._s(e.answer_option))])])}))])])],1),t._v(" "),t.questionNum>0?n("span",{staticClass:"btn-style prev-btn",on:{click:t.prevQuestion}},[t._v("上一题")]):t._e(),t._v(" "),t.questionNum<t.questions.length?n("span",{staticClass:"btn-style next-btn",on:{click:t.nextQuestion}},[t._v("下一题")]):n("span",{staticClass:"btn-style submit-btn",on:{click:t.submitAnswer}},[t._v("提交")])]):t._e()])},staticRenderFns:[]};var c=n("VU/8")(r,u,!1,function(t){n("D/bO")},null,null);e.a=c.exports},sB3e:function(t,e,n){var s=n("52gC");t.exports=function(t){return Object(s(t))}},"vFc/":function(t,e,n){var s=n("TcQ7"),o=n("QRG4"),i=n("fkB2");t.exports=function(t){return function(e,n,r){var u,c=s(e),a=o(c.length),h=i(r,a);if(t&&n!=n){for(;a>h;)if((u=c[h++])!=u)return!0}else for(;a>h;h++)if((t||h in c)&&c[h]===n)return t||h||0;return!t&&-1}}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},xnc9:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")}});
//# sourceMappingURL=0.3da6099129c3fad0682b.js.map