"use strict";(self["webpackChunkvue_h5_template"]=self["webpackChunkvue_h5_template"]||[]).push([[124],{91124:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"index-container"},[t("el-form",{attrs:{"label-width":"80px",model:e.form}},[t("el-form-item",{attrs:{label:"合同年限"}},[t("el-input-number",{attrs:{"controls-position":"right"},model:{value:e.form.year,callback:function(t){e.$set(e.form,"year",t)},expression:"form.year"}})],1),t("el-form-item",{attrs:{label:"入职时间"}},[t("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.curDate,callback:function(t){e.$set(e.form,"curDate",t)},expression:"form.curDate"}})],1),t("el-form-item",{attrs:{label:"终止日期"}},[t("el-input",{staticClass:"result-input",attrs:{disabled:""},model:{value:e.expiryDate,callback:function(t){e.expiryDate=t},expression:"expiryDate"}})],1)],1)],1)},l=[],o=r(72661),n={name:"contract_pc",data(){return{form:{curDate:new Date,year:3}}},computed:{text(){const{formattedDate:e}=(0,o.Yq)(this.form.curDate);return e},expiryDate(){const e=(0,o.My)(this.form.curDate,this.form.year),{formattedDate:t}=(0,o.Yq)(e);return t}},watch:{},methods:{onConfirm(e){this.curDate=e}}},s=n,c=r(81656),i=(0,c.A)(s,a,l,!1,null,"7c64b84b",null),u=i.exports}}]);