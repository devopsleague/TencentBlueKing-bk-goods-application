(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{404:function(t,e,a){"use strict";a.r(e);var i=a(439);var s=a(419);for(var r in s)if(r!=="default")(function(t){a.d(e,t,function(){return s[t]})})(r);var n=a(434);var o=a(3);var l=Object(o["a"])(s["default"],i["a"],i["b"],false,null,"62ed9f64",null);e["default"]=l.exports},419:function(t,e,a){"use strict";a.r(e);var i=a(420);var s=a.n(i);for(var r in i)if(r!=="default")(function(t){a.d(e,t,function(){return i[t]})})(r);e["default"]=s.a},420:function(t,e,a){"use strict";var i=a(1);Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var s=i(a(5));var r=a(19);var n=a(163);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach(function(e){(0,s.default)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var c={data:function t(){return{isDropdownShow:false,dialogVisible:false,remark:"无",formData:{applicant:0,startDate:"",endDate:"",campus:0,college:0},getParams:{size:10,page:1,start_time:"",end_time:"",apply_user:"",position:""},rules:{inputRemark:[{required:true,message:"必填项",trigger:"blur"}]},campusList:[],collegeList:[],apply:[],pagination:{current:1,count:10,limit:10},selected:{selectedRows:[]},okText:"",dialogTitle:"",startDateOptions:{},endDateOptions:{}}},computed:l({},(0,r.mapState)({userInfo:function t(e){return e.user.userInfo}})),watch:{"formData.startDate":function t(e){this.endDateOptions={disabledDate:function t(a){if(a<e.setDate(e.getDate())){return true}return false}}},"formData.endDate":function t(e){this.startDateOptions={disabledDate:function t(a){if(a>e.setDate(e.getDate())){return true}return false}}},"formData.campus":function t(e){var a=this;if(e===0){return}this.formData.college=0;var i=this.getParentCode(e);this.$http.get(n.getSubPositionListUrl,{params:{parent_code:i}}).then(function(t){a.collegeList=t.data})}},created:function t(){this.loadData()},mounted:function t(){},methods:{loadData:function t(){this.getRootPositionList();this.getApplyUser();this.getApply()},getApplyUser:function t(){var e=this;this.$http.get(n.getApplyUserUrl).then(function(t){if(t){e.applicantList=t.data}})},getApply:function t(){var e=this;this.$http.get(n.getApplyUrl,{params:this.getParams}).then(function(t){if(t){e.apply=t.data.apply_list;e.pagination.count=t.data.total_num}})},getOkText:function t(){return this.okText},getDialogTitle:function t(){return this.dialogTitle},singleAgree:function t(e){if(this.selected.selectedRows.indexOf(e.id)===-1){this.selected.selectedRows.push(e.id)}this.agree()},singleDisagree:function t(e){if(this.selected.selectedRows.indexOf(e.id)===-1){this.selected.selectedRows.push(e.id)}this.disagree()},agree:function t(){if(this.selected.selectedRows.length===0){this.handleError({theme:"warning"},"未选择任何数据");return}this.okText="确定同意";this.dialogTitle="同意申请";this.triggerHandler();this.dialogVisible=true},confirmAgree:function t(){var e=this;this.$refs.remark.validate().then(function(t){var a=e.selected.selectedRows;var i=e.remark;e.$http.post(n.examineApplyUrl,{apply_id_list:a,model:"agree",remark:i}).then(function(t){if(t.result===true){e.handleError({theme:"success"},t.message)}else if(t.result===false){e.handleError({theme:"error"},t.message)}});e.selected.selectedRows=[];e.dialogVisible=false;e.getApply()},function(t){})},disagree:function t(){if(this.selected.selectedRows.length===0){this.handleError({theme:"warning"},"未选择任何数据");return}this.okText="确定拒绝";this.dialogTitle="拒绝申请";this.triggerHandler();this.dialogVisible=true},confirmDisagree:function t(){var e=this;this.$refs.remark.validate().then(function(t){var a=e.selected.selectedRows;var i=e.remark;e.$http.post(n.examineApplyUrl,{apply_id_list:a,model:"reject",remark:i}).then(function(t){if(t.result===true){e.handleError({theme:"success"},t.message)}else if(t.result===false){e.handleError({theme:"error"},t.message)}});e.selected.selectedRows=[];e.dialogVisible=false;e.getApply()},function(t){})},confirm:function t(){if(this.okText==="确定同意"){return this.confirmAgree}else if(this.okText==="确定拒绝"){return this.confirmDisagree}},search:function t(){var e=this;this.getParams.start_time=this.formData.startDate?this.moment(this.formData.startDate).format("YYYY-MM-DD"):"";this.getParams.end_time=this.formData.endDate?this.moment(this.formData.endDate).format("YYYY-MM-DD"):"";this.getParams.apply_user=this.formData.applicant||"";var a="";var i="";if(this.formData.campus===0||this.formData.campus==="0"){a=""}else{a=this.campusList.find(function(t){return t.id===e.formData.campus}).name||""}if(this.formData.college===0||this.formData.college==="0"){i=""}else{i=this.collegeList.find(function(t){return t.id===e.formData.college}).name||""}this.getParams.position=!a&&!i?"":a+","+i;this.pagination.current=1;this.getParams.page=this.pagination.current;this.getApply()},getParentCode:function t(e){var a="";for(var i=0;i<this.campusList.length;i++){if(this.campusList[i].id===e){a=this.campusList[i].code;break}}return a},getRootPositionList:function t(){var e=this;this.$http.get(n.getRootPositionListUrl).then(function(t){e.campusList=t.data})},selectRow:function t(e,a){var i=this.selected.selectedRows.indexOf(a.id);if(i!==-1){this.selected.selectedRows.splice(i,1)}else{this.selected.selectedRows.push(a.id)}},selectAll:function t(){var e=true;for(var a=0;a<this.apply.length;a++){var i=this.selected.selectedRows.indexOf(this.apply[a].id);if(i===-1){e=false}if(!e){break}}if(this.selected.selectedRows.length!==0&&!e){for(var s=0;s<this.apply.length;s++){if(this.selected.selectedRows.indexOf(this.apply[s].id)===-1){this.selected.selectedRows.push(this.apply[s].id)}}}else if(this.selected.selectedRows.length!==0&&e){for(var r=0;r<this.apply.length;r++){var n=this.selected.selectedRows.indexOf(this.apply[r].id);this.selected.selectedRows.splice(n,1)}}else if(this.selected.selectedRows.length===0){for(var o=0;o<this.apply.length;o++){this.selected.selectedRows.push(this.apply[o].id)}}},handleError:function t(e,a){e.message=a;e.offsetY=80;this.$bkMessage(e)},handlePageLimitChange:function t(){this.pagination.limit=arguments[0];this.getParams.size=this.pagination.limit;this.pagination.current=1;this.getParams.page=this.pagination.current;this.selected.selectedRows=[];this.getApply()},handlePageChange:function t(e){this.pagination.current=e;this.getParams.page=this.pagination.current;this.getApply()},triggerHandler:function t(){this.$refs.dropdown.hide()}}};e.default=c},421:function(t,e,a){},434:function(t,e,a){"use strict";var i=a(421);var s=a.n(i);var r=s.a},439:function(t,e,a){"use strict";var i=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"applyManagement-wrapper"},[a("div",{staticClass:"condition-form"},[a("bk-form",{ref:"infoForm",attrs:{"label-width":130,model:t.formData}},[a("bk-container",{attrs:{col:12,margin:6}},[a("bk-row",[a("bk-col",{attrs:{span:9}},[a("bk-row",{staticClass:"condition-form-row"},[a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"applicant"},[a("bk-form-item",{staticClass:"applicant-item",attrs:{label:"申请人",property:"applicant"}},[a("bk-select",{model:{value:t.formData.applicant,callback:function(e){t.$set(t.formData,"applicant",e)},expression:"formData.applicant"}},[a("bk-option",{key:"0",attrs:{id:"0",name:"全部"}}),t._v(" "),t._l(t.applicantList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.username,name:t.username}})})],2)],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"start-date"},[a("bk-form-item",{attrs:{label:"开始时间",property:"startDate","icon-offset":35}},[a("bk-date-picker",{staticStyle:{width:"100%"},attrs:{options:t.startDateOptions,placeholder:"请选择",timer:false,disabled:false},model:{value:t.formData.startDate,callback:function(e){t.$set(t.formData,"startDate",e)},expression:"formData.startDate"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"end-date"},[a("bk-form-item",{attrs:{label:"结束时间",property:"endDate","icon-offset":0}},[a("bk-date-picker",{staticStyle:{width:"100%"},attrs:{options:t.endDateOptions,placeholder:"请选择",timer:false,disabled:false},model:{value:t.formData.endDate,callback:function(e){t.$set(t.formData,"endDate",e)},expression:"formData.endDate"}})],1)],1)])],1),t._v(" "),a("bk-row",{staticClass:"condition-form-row"},[a("bk-col",{attrs:{span:3,offset:3}},[a("div",{staticClass:"campus"},[a("bk-form-item",{attrs:{label:"校区",property:"campus"}},[a("bk-select",{model:{value:t.formData.campus,callback:function(e){t.$set(t.formData,"campus",e)},expression:"formData.campus"}},[a("bk-option",{key:"0",attrs:{id:"0",name:"全部"}}),t._v(" "),t._l(t.campusList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})})],2)],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"college"},[a("bk-form-item",{attrs:{label:"学院",property:"college"}},[a("bk-select",{model:{value:t.formData.college,callback:function(e){t.$set(t.formData,"college",e)},expression:"formData.college"}},[a("bk-option",{key:"0",attrs:{id:"0",name:"全部"}}),t._v(" "),t._l(t.collegeList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})})],2)],1)],1)])],1)],1),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticStyle:{"text-align":"center","line-height":"90px"}},[a("bk-button",{attrs:{size:"large",outline:true,theme:"primary",title:"查询"},on:{click:function(e){e.stopPropagation();e.preventDefault();return t.search(e)}}},[t._v("查询")])],1)])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"applyTable"},[a("div",{staticClass:"more-options"},[a("bk-dropdown-menu",{ref:"dropdown",on:{show:function(e){t.isDropdownShow=true},hide:function(e){t.isDropdownShow=false}}},[a("div",{staticClass:"dropdown-trigger-btn",staticStyle:{"padding-left":"19px"},attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[a("span",[t._v("批量操作")]),t._v(" "),a("i",{class:["bk-icon icon-angle-down",{"icon-flip":t.isDropdownShow}]})]),t._v(" "),a("ul",{staticClass:"bk-dropdown-list",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[a("li",[a("a",{staticClass:"multi-agree",attrs:{href:"javascript:;"},on:{click:t.agree}},[t._v("批量同意")])]),t._v(" "),a("li",[a("a",{staticClass:"multi-disagree",attrs:{href:"javascript:;"},on:{click:t.disagree}},[t._v("批量拒绝")])])])])],1),t._v(" "),a("bk-table",{attrs:{height:"430",data:t.apply,size:t.medium,pagination:t.pagination},on:{select:t.selectRow,"select-all":t.selectAll,"row-mouse-enter":t.handleRowMouseEnter,"row-mouse-leave":t.handleRowMouseLeave,"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange}},[a("bk-table-column",{attrs:{type:"selection",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"使用人",prop:"apply_user"}}),t._v(" "),a("bk-table-column",{attrs:{label:"物品编码",prop:"good_code"}}),t._v(" "),a("bk-table-column",{attrs:{label:"物品名称",prop:"good_name"}}),t._v(" "),a("bk-table-column",{attrs:{label:"数量",prop:"num"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请时间",prop:"apply_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"地址",prop:"position"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请原因",prop:"reason"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){t.singleAgree(e.row)}}},[t._v("同意")]),t._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(a){t.singleDisagree(e.row)}}},[t._v("拒绝")])]}}])})],1),t._v(" "),a("div",{staticClass:"confirm-agree-dialog"},[a("bk-dialog",{attrs:{"render-directive":"show",theme:"primary",width:700,"mask-close":false,"header-position":"center","confirm-fn":t.confirm(),"ok-text":t.getOkText(),title:t.getDialogTitle()},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[a("div",{staticClass:"input-remark"},[a("bk-form",{ref:"remark",attrs:{"label-width":100,model:t.remark,rules:t.rules}},[a("bk-form-item",{attrs:{label:"备注",required:true,property:"inputRemark"}},[a("bk-input",{attrs:{type:"textarea",placeholder:"请输入"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1)],1)])],1)],1)])};var s=[];a.d(e,"a",function(){return i});a.d(e,"b",function(){return s})}}]);