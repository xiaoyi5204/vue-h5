"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[486],{41486:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-container"},[e("div",{staticClass:"warpper"},[e("div",{staticClass:"list"},[e("div",{staticClass:"logo"}),e("div",{staticClass:"demo-home__title"},[t._v("VUE H5开发模板")]),e("div",{staticClass:"item"}),e("div",{staticClass:"item"},[e("van-button",{attrs:{size:"small"},on:{click:t.doDispatch}},[t._v("打开WPS")]),e("van-button",{attrs:{size:"small"},on:{click:t.doDispatch1}},[t._v("打开WPS1~")])],1)])])])},a=[];const i={Login:"/user/login",UserInfo:"/user/userinfo",UserName:"/user/name"};var n=i,r=(s(34948),s(82318)),c=s(94335),l=s(6692),u=s(7114);const d=c.A.create({baseURL:u.baseApi,withCredentials:!0,timeout:5e3});d.interceptors.request.use((t=>(t.hideloading||r.A.loading({forbidClick:!0}),l.A.getters.token&&(t.headers["X-Token"]=""),t)),(t=>Promise.reject(t))),d.interceptors.response.use((t=>{r.A.clear();const e=t.data;return e.status&&200!==e.status?(401===e.status&&l.A.dispatch("FedLogOut").then((()=>{location.reload()})),Promise.reject(e||"error")):Promise.resolve(e)}),(t=>(r.A.clear(),Promise.reject(t))));var p=d;function h(t){return p({url:n.UserInfo,method:"post",data:t,hideloading:!0})}var m=s(95353),v={data(){return{wechat:`${this.$cdn}/wx/640.gif`}},computed:{...(0,m.L8)(["userName"])},mounted(){this.initData()},methods:{initData(){const t={user:"sunnie"};h(t).then((()=>{})).catch((()=>{}))},doDispatch(){var t="http://yourserver.com/path/to/pptfile.pptx",e="wps://ppt?file="+encodeURIComponent(t);window.location.href=e},doDispatch1(){var t="https://example.com/your-presentation.pptx",e="wps://office?src="+encodeURIComponent(t),s=document.createElement("a");s.href=e,s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)},goGithub(){window.location.href="https://github.com/sunniejs/vue-h5-template"}}},f=v,C=s(845),b=(0,C.A)(f,o,a,!1,null,null,null),w=b.exports}}]);