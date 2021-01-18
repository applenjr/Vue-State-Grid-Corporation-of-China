(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-751fa03e"],{"11c3":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",{staticClass:"pathActive"},[e._v("人员管理")]),a("el-breadcrumb-item",{staticClass:"active"},[e._v("人员信息")])],1),a("el-main",{staticClass:"main-con"},[a("div",{staticClass:"header-search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[a("el-form-item",{attrs:{label:""}},[a("el-input",{attrs:{placeholder:"请输入搜索人员"},model:{value:e.formInline.person,callback:function(t){e.$set(e.formInline,"person",t)},expression:"formInline.person"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")])],1)],1),a("div",{staticClass:"oper-btns"},[a("el-button",{staticClass:"test",on:{click:e.test}},[e._v("获取测试")]),a("el-button",{staticClass:"add-btn",attrs:{icon:"el-icon-circle-plus-outline"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增")]),a("el-button",{staticClass:"bigdel-btn",attrs:{icon:"el-icon-delete"},on:{click:e.delectAll}},[e._v("批量删除")]),a("el-button",{staticClass:"clear-btn",attrs:{icon:"el-icon-delete"},on:{click:e.Clear}},[e._v("清空")])],1)],1),a("el-table",{ref:"multipleTable",staticClass:"man-table",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",stripe:""},on:{"selection-change":e.handleDetailSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"42"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"42"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"70"}}),a("el-table-column",{attrs:{prop:"number",label:"工号",width:"90"}}),a("el-table-column",{attrs:{prop:"sex",label:"性别",width:"70"}}),a("el-table-column",{attrs:{prop:"birth",label:"出生日期"}}),a("el-table-column",{attrs:{prop:"tel",label:"联系方式",width:"110"}}),a("el-table-column",{attrs:{prop:"address",label:"家庭住址",width:"170"}}),a("el-table-column",{attrs:{prop:"post",label:"岗位",width:"110"}}),a("el-table-column",{attrs:{prop:"onboardingtime",label:"入职时间"}}),a("el-table-column",{attrs:{prop:"settings",label:"设置",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"edit-btn",attrs:{icon:"iconfont iconbianji"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}}),a("el-button",{staticClass:"del-btn",attrs:{icon:"iconfont iconshanchu"},on:{click:function(a){return e.handleDelete(t.$index)}}})]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[10,20,30,40],"page-size":10,layout:"sizes,total, prev, pager, next, jumper",total:159},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{staticClass:"addManDialog",attrs:{title:"新增人员",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{label:"姓名",prop:"name","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"工号",prop:"number","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),a("el-form-item",{attrs:{label:"性别",prop:"sex","label-width":e.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择性别"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[a("el-option",{attrs:{label:"男",value:"男"}}),a("el-option",{attrs:{label:"女",value:"女"}})],1)],1),a("el-form-item",{attrs:{label:"出生日期",prop:"birth","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.birth,callback:function(t){e.$set(e.form,"birth",t)},expression:"form.birth"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"tel","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"家庭住址",prop:"address","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),a("el-form-item",{attrs:{label:"岗位",prop:"post","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.post,callback:function(t){e.$set(e.form,"post",t)},expression:"form.post"}})],1),a("el-form-item",{attrs:{label:"入职时间",prop:"onboardingtime","label-width":e.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入",autocomplete:"off",clearable:!0},model:{value:e.form.onboardingtime,callback:function(t){e.$set(e.form,"onboardingtime",t)},expression:"form.onboardingtime"}})],1),a("el-form-item",{attrs:{"label-width":e.formLabelWidth}},[a("el-button",{staticClass:"sub-btn",attrs:{type:"primary"},on:{click:function(t){return e.submitForm(e.form)}}},[e._v("确认提交 ")])],1)],1)],1)],1)],1)},o=[],i=(a("4160"),a("a434"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("bc3a")),n=a.n(i),r={name:"ManManagement",components:{},data:function(){return{formInline:{person:""},form:{},checkedDetail:[],tableData:[{id:"1",number:"1001",name:"张三",sex:"男",birth:"1975.12.9",tel:"13509876543",address:"文苑路九号",post:"接线员",onboardingtime:"2020.2.3"},{id:"2",number:"1002",name:"李四",sex:"男",birth:"1973.9.9",tel:"13509876343",address:"文苑路九号",post:"接线员",onboardingtime:"2020.2.6"}],multipleSelection:[],currentPage4:4,dialogFormVisible:!1,rules:{number:[{required:!0,message:"请输入工号",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],name:[{required:!0,message:"请输入名字",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],places:[{required:!0,message:"请输入",trigger:"blur"}]},formLabelWidth:"100px"}},computed:{},methods:{handleDetailSelectionChange:function(e){this.checkedDetail=e},handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e){var t=this;this.$confirm("删除后无法更改, 是否确定?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.tableData.splice(e,1)})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},delectAll:function(){for(var e=this,t=0;t<this.tableData.length;t++){var a=this.tableData[t];a.id=t+1}0==this.checkedDetail.length?this.$alert("请先选择要删除的数据","提示",{confirmButtonText:"确定"}):this.$confirm("删除后无法更改, 是否确定?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.checkedDetail.forEach((function(t){e.tableData.forEach((function(a,l){t.id==a.id&&e.tableData.splice(l,1)}))}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},submitForm:function(e){var t=this.tableData.length+1,a={};a.id=t,a.name=e.name,a.number=e.number,a.sex=e.sex,a.birth=e.birth,a.tel=e.tel,a.address=e.address,a.post=e.post,a.onboardingtime=e.onboardingtime,void 0==a.id||void 0==a.name||void 0==a.number||void 0==a.sex||void 0==a.birth||void 0==a.tel||void 0==a.address||void 0==a.post||void 0==a.onboardingtime?this.$alert("请将信息填写完整","提示",{confirmButtonText:"确定"}):this.tableData.push(a)},test:function(){var e=this.tableData.length+1,t={},a=!1,l=this;n()({method:"get",url:"http://120.26.234.200:8080/member"}).then((function(o){a=!a,console.log(o.data.data[0].fields.sex),isNaN(o.data.data[0].fields.sex)||("1"==o.data.data[0].fields.sex.toString()?t.sex="男":"0"==o.data.data[0].fields.sex.toString()&&(t.sex="女")),t.id=e,t.name=o.data.data[0].fields.name,t.number=o.data.data[0].fields.number,t.birth=o.data.data[0].fields.birth,t.tel=o.data.data[0].fields.tel,t.address=o.data.data[0].fields.address,t.post=o.data.data[0].fields.post,t.onboardingtime=o.data.data[0].fields.onboardingtime,void 0==t.id||void 0==t.name||void 0==t.number||void 0==t.sex||void 0==t.birth||void 0==t.tel||void 0==t.address||void 0==t.post||void 0==t.onboardingtime?this.$alert("请将信息填写完整","提示",{confirmButtonText:"确定"}):l.tableData.push(t)})).catch((function(e){console.log(e),console.log("请求失败: "+e.status+","+e.statusText)}))},Clear:function(){var e=this;this.$confirm("清空后无法恢复, 是否确定?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.tableData=void 0})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}},created:function(){},mounted:function(){}},s=r,c=(a("5d17"),a("eb4a"),a("2877")),d=Object(c["a"])(s,l,o,!1,null,"2badec7e",null);t["default"]=d.exports},"5d17":function(e,t,a){"use strict";var l=a("e01a"),o=a.n(l);o.a},e01a:function(e,t,a){},eb4a:function(e,t,a){"use strict";var l=a("ff86"),o=a.n(l);o.a},ff86:function(e,t,a){}}]);
//# sourceMappingURL=chunk-751fa03e.c11b7aca.js.map