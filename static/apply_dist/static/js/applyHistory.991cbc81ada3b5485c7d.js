(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{268:function(t,e,a){"use strict";a.r(e);var s=a(289);var o=a(279);for(var i in o)if(i!=="default")(function(t){a.d(e,t,function(){return o[t]})})(i);var r=a(285);var l=a(2);var n=Object(l["a"])(o["default"],s["a"],s["b"],false,null,"0ebd9c54",null);e["default"]=n.exports},279:function(t,e,a){"use strict";a.r(e);var s=a(280);var o=a.n(s);for(var i in s)if(i!=="default")(function(t){a.d(e,t,function(){return s[t]})})(i);e["default"]=o.a},280:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;var s="/derive_excel";var o="/get_self_good_apply_list";var i="/get_good_apply";var r="/update_good_apply";var l="/delete_good_apply";var n="/get_apply_status";var d={data:function t(){return{formData:{good_name:"",good_code:"",apply_reason:"",start_date:"",end_date:"",status:999},get_params:{good_name:"",good_code:"",reason:"",start_time:"",end_time:"",status:"",size:10,page:1},editFormData:{good_name:"",good_code:"",reason:"",num:1},deleteApplyId:0,precision:0,editDialogVisible:false,deleteDialogVisible:false,isDropdownShow:false,statusList:[],history:[],pagination:{current:1,count:10,limit:10},selected:{selectedRows:[]}}},created:function t(){this.loadData()},methods:{loadData:function t(){this.getGoodApplyList();this.getApplyStatus()},getApplyStatus:function t(){var e=this;this.$http.get(n).then(function(t){if(t){e.statusList=t.data}})},getGoodApplyList:function t(){var e=this;this.$http.get(o,{params:{start_time:this.get_params.start_time,end_time:this.get_params.end_time,good_code:this.get_params.good_code,good_name:this.get_params.good_name,reason:this.get_params.reason,status:this.get_params.status,page:this.get_params.page,size:this.get_params.size}}).then(function(t){e.history=t.data.apply_list;e.pagination.count=t.data.total_num})},search:function t(){if(this.formData.start_date){this.get_params.start_time=this.dateFormat("YYYY-mm-dd",this.formData.start_date)}else{this.get_params.start_time=""}if(this.formData.end_date){this.formData.end_date.setDate(this.formData.end_date.getDate()+1);this.get_params.end_time=this.dateFormat("YYYY-mm-dd",this.formData.end_date)}else{this.get_params.end_time=""}this.get_params.status=this.formData.status;if(this.formData.status===999||this.formData.status==="999"){this.get_params.status=""}this.get_params.good_name=this.formData.good_name;this.get_params.good_code=this.formData.good_code;this.get_params.reason=this.formData.apply_reason;this.pagination.current=1;this.get_params.page=this.pagination.current;console.log("this.get_params",this.get_params);this.getGoodApplyList()},editHistory:function t(e){var a=this;this.editDialogVisible=true;this.$http.get(i,{params:{id:e.id}}).then(function(t){if(t){console.log("id_apply",t);a.editFormData=t.data}})},deleteHistory:function t(e){this.deleteDialogVisible=true;this.deleteApplyId=e.id},confirmEdit:function t(){var e=this;this.editDialogVisible=false;var a="";var s="";var o="";if(this.editFormData.position){var i=this.editFormData.position.split(",");console.log("positionList",i);a=i[0];s=i[1];if(i.length>2){o=i[2]}console.log("school",a);console.log("academy",s);console.log("detail_position",o)}this.$http.post(r,{apply_time:this.editFormData.apply_time,apply_user:this.editFormData.apply_user,good_code:this.editFormData.good_code,good_name:this.editFormData.good_name,id:this.editFormData.id,num:this.editFormData.num,school:a,academy:s,detail_position:o,reason:this.editFormData.reason,require_date:this.editFormData.require_date,status:this.editFormData.status}).then(function(t){if(t.result===true){e.handleError({theme:"success"},t.message);e.getGoodApplyList()}})},confirmDelete:function t(){var e=this;this.deleteDialogVisible=false;this.$http.get(l,{params:{id:this.deleteApplyId}}).then(function(t){if(t.result===true){e.handleError({theme:"success"},t.message);e.getGoodApplyList()}})},exportData:function t(){var e=this;if(this.selected.selectedRows.length===0){this.handleError({theme:"warning"},"未选择任何数据");return}this.$http.post(s,{model:3,dataList:this.selected}).then(function(t){if(t&&t.result===true){var a=document.createElement("a");a.href=t.data.file_url;document.body.appendChild(a);a.click();document.body.removeChild(a);e.getGoodApplyList();e.selected.selectedRows=[]}else if(t&&t.result===false){e.handleError({theme:"error"},t.message)}})},selectRow:function t(e,a){var s=this.selected.selectedRows.indexOf(a.id);if(s!==-1){this.selected.selectedRows.splice(s,1)}else{this.selected.selectedRows.push(a.id)}console.log("this.selected.selectedRows",this.selected.selectedRows)},selectAll:function t(){var e=true;for(var a=0;a<this.history.length;a++){var s=this.selected.selectedRows.indexOf(this.history[a].id);if(s===-1){e=false}if(!e){break}}if(this.selected.selectedRows.length!==0&&!e){for(var o=0;o<this.history.length;o++){if(this.selected.selectedRows.indexOf(this.history[o].id)===-1){this.selected.selectedRows.push(this.history[o].id)}}}else if(this.selected.selectedRows.length!==0&&e){for(var i=0;i<this.history.length;i++){var r=this.selected.selectedRows.indexOf(this.history[i].id);this.selected.selectedRows.splice(r,1)}}else if(this.selected.selectedRows.length===0){for(var l=0;l<this.history.length;l++){this.selected.selectedRows.push(this.history[l].id)}}console.log("this.selected.selectedRows",this.selected.selectedRows)},handleError:function t(e,a){e.message=a;e.offsetY=80;this.$bkMessage(e)},handlePageLimitChange:function t(){this.pagination.limit=arguments[0];this.get_params.size=this.pagination.limit;this.pagination.current=1;this.get_params.page=this.pagination.current;this.selected.selectedRows=[];this.getGoodApplyList()},handlePageChange:function t(e){this.pagination.current=e;this.get_params.page=this.pagination.current;this.getGoodApplyList()},dateFormat:function t(e,a){var s;var o={"Y+":a.getFullYear().toString(),"m+":(a.getMonth()+1).toString(),"d+":a.getDate().toString(),"H+":a.getHours().toString(),"M+":a.getMinutes().toString(),"S+":a.getSeconds().toString()};for(var i in o){s=new RegExp("("+i+")").exec(e);if(s){e=e.replace(s[1],s[1].length===1?o[i]:o[i].padStart(s[1].length,"0"))}}return e},dropdownShow:function t(){this.isDropdownShow=true},dropdownHide:function t(){this.isDropdownShow=false},triggerHandler:function t(){this.$refs.dropdown.hide()},refresh:function t(){this.$router.go(0)}}};e.default=d},281:function(t,e,a){},285:function(t,e,a){"use strict";var s=a(281);var o=a.n(s);var i=o.a},289:function(t,e,a){"use strict";var s=function(){var t=this;var e=t.$createElement;var a=t._self._c||e;return a("div",{staticClass:"applyHistory-wrapper"},[a("div",{staticClass:"header"},[a("bk-divider",{attrs:{align:"left"}},[a("bk-tag",{staticStyle:{"font-size":"13px"},attrs:{type:"filled"}},[a("span",[t._v("历史记录")])])],1)],1),t._v(" "),a("div",{staticClass:"condition-form"},[a("bk-form",{ref:"infoForm",attrs:{"label-width":130,model:t.formData}},[a("bk-container",{attrs:{col:12,margin:6}},[a("bk-row",[a("bk-col",{attrs:{span:9}},[a("bk-row",{staticClass:"condition-form-row"},[a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"goodName"},[a("bk-form-item",{attrs:{label:"物品名称",property:"goodName"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.good_name,callback:function(e){t.$set(t.formData,"good_name",e)},expression:"formData.good_name"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"goodCode"},[a("bk-form-item",{attrs:{label:"物品编号",property:"goodCode"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.good_code,callback:function(e){t.$set(t.formData,"good_code",e)},expression:"formData.good_code"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"applyReason"},[a("bk-form-item",{attrs:{label:"申请原因",property:"applyReason"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.formData.apply_reason,callback:function(e){t.$set(t.formData,"apply_reason",e)},expression:"formData.apply_reason"}})],1)],1)])],1),t._v(" "),a("bk-row",{staticClass:"condition-form-row"},[a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"start-date"},[a("bk-form-item",{attrs:{label:"开始时间",property:"startDate","icon-offset":35}},[a("bk-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",timer:false,disabled:false},model:{value:t.formData.start_date,callback:function(e){t.$set(t.formData,"start_date",e)},expression:"formData.start_date"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"end-date"},[a("bk-form-item",{attrs:{label:"结束时间",property:"endDate","icon-offset":0}},[a("bk-date-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",timer:false,disabled:false},model:{value:t.formData.end_date,callback:function(e){t.$set(t.formData,"end_date",e)},expression:"formData.end_date"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticClass:"status"},[a("bk-form-item",{attrs:{label:"状态",property:"status"}},[a("bk-select",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("bk-option",{key:"999",attrs:{id:"999",name:"全部"}}),t._v(" "),t._l(t.statusList,function(t){return a("bk-option",{key:t.id,attrs:{id:t.id,name:t.name}})})],2)],1)],1)])],1)],1),t._v(" "),a("bk-col",{attrs:{span:3}},[a("div",{staticStyle:{"text-align":"center","line-height":"90px"}},[a("bk-button",{attrs:{size:"large",outline:true,theme:"primary",title:"查询"},on:{click:function(e){e.stopPropagation();e.preventDefault();return t.search(e)}}},[t._v("查询")])],1)])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"historyTable"},[a("div",{staticClass:"more-options"},[a("bk-dropdown-menu",{ref:"dropdown",on:{show:t.dropdownShow,hide:t.dropdownHide}},[a("div",{staticClass:"dropdown-trigger-btn",staticStyle:{"padding-left":"19px"},attrs:{slot:"dropdown-trigger"},slot:"dropdown-trigger"},[a("span",[t._v("批量操作")]),t._v(" "),a("i",{class:["bk-icon icon-angle-down",{"icon-flip":t.isDropdownShow}]})]),t._v(" "),a("ul",{staticClass:"bk-dropdown-list",attrs:{slot:"dropdown-content"},slot:"dropdown-content"},[a("li",[a("a",{staticClass:"multi-export",attrs:{href:"javascript:;"},on:{click:t.exportData}},[t._v("导出数据")])])])])],1),t._v(" "),a("bk-table",{attrs:{height:"430",data:t.history,size:t.medium,pagination:t.pagination},on:{select:t.selectRow,"select-all":t.selectAll,"row-mouse-enter":t.handleRowMouseEnter,"row-mouse-leave":t.handleRowMouseLeave,"page-change":t.handlePageChange,"page-limit-change":t.handlePageLimitChange}},[a("bk-table-column",{attrs:{type:"selection",width:"60"}}),t._v(" "),a("bk-table-column",{attrs:{label:"物品名称",prop:"good_name"}}),t._v(" "),a("bk-table-column",{attrs:{label:"物品编码",prop:"good_code"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请时间",prop:"apply_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"数量",prop:"num"}}),t._v(" "),a("bk-table-column",{attrs:{label:"申请原因",prop:"reason"}}),t._v(" "),a("bk-table-column",{attrs:{label:"状态",prop:"status"}}),t._v(" "),a("bk-table-column",{attrs:{label:"审核人",prop:"apply_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"审核日期",prop:"apply_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"备注",prop:"apply_time"}}),t._v(" "),a("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:e.row.status!=="导员审核中"},on:{click:function(a){t.editHistory(e.row)}}},[t._v("编辑")]),t._v(" "),a("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:"",disabled:e.row.status==="管理员审核中"},on:{click:function(a){t.deleteHistory(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"edit-history-dialog"},[a("bk-dialog",{attrs:{"render-directive":"show",theme:"primary",width:700,"mask-close":false,"header-position":"center","confirm-fn":t.confirmEdit,"ok-text":"确定修改",title:"编辑申请记录"},model:{value:t.editDialogVisible,callback:function(e){t.editDialogVisible=e},expression:"editDialogVisible"}},[a("div",[a("bk-form",{ref:"remark",attrs:{"label-width":100,model:t.remark,rules:t.rules}},[a("bk-container",{attrs:{col:12,margin:6}},[a("bk-row",{staticStyle:{margin:"0 0 30px 0"}},[a("bk-col",{attrs:{span:6}},[a("div",[a("bk-form-item",{attrs:{label:"物品名称",property:"goodName"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.editFormData.good_name,callback:function(e){t.$set(t.editFormData,"good_name",e)},expression:"editFormData.good_name"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:6}},[a("div",[a("bk-form-item",{attrs:{label:"物品编号",property:"goodCode"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.editFormData.good_code,callback:function(e){t.$set(t.editFormData,"good_code",e)},expression:"editFormData.good_code"}})],1)],1)])],1),t._v(" "),a("bk-row",{staticStyle:{margin:"0 0 30px 0"}},[a("bk-col",{attrs:{span:6}},[a("div",[a("bk-form-item",{attrs:{label:"申请原因",property:"applyReason"}},[a("bk-input",{attrs:{placeholder:"请输入"},model:{value:t.editFormData.reason,callback:function(e){t.$set(t.editFormData,"reason",e)},expression:"editFormData.reason"}})],1)],1)]),t._v(" "),a("bk-col",{attrs:{span:6}},[a("div",{staticClass:"apply-num"},[a("bk-form-item",{attrs:{label:"申请数量"}},[a("bk-input",{attrs:{type:"number",min:1,precision:t.precision},model:{value:t.editFormData.num,callback:function(e){t.$set(t.editFormData,"num",e)},expression:"editFormData.num"}})],1)],1)])],1)],1)],1)],1)])],1),t._v(" "),a("div",{staticClass:"delete-confirm-dialog"},[a("bk-dialog",{attrs:{"render-directive":"show",theme:"primary",width:700,"mask-close":false,"header-position":"center","confirm-fn":t.confirmDelete,"ok-text":"确定删除",title:"确定删除记录？"},model:{value:t.deleteDialogVisible,callback:function(e){t.deleteDialogVisible=e},expression:"deleteDialogVisible"}})],1)],1)])};var o=[];a.d(e,"a",function(){return s});a.d(e,"b",function(){return o})}}]);