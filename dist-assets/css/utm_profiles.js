!function(utm,$){"use strict";function profileEditURL(){var segments=window.location.href.split("edit/");return segments[0]+"edit/"}function changeProfile(){window.location.href=profileEditURL()+encodeURIComponent(this.value)+"/"}function newProfile(){window.location.href=profileEditURL()}function switchProfile(profile_mkey){window.location.href=profileEditURL()+encodeURIComponent(profile_mkey)+"/"}function cloneProfile(){function doClone(mkey,qType){fweb.cmdbClone({mkey:mkey,mkey_type:"string",qType:qType}).done(function(nkey){switchProfile(nkey)})}var $selected=$("#sel_profile :selected"),mkey=$selected.val(),qType=$selected.data("qtype");specialCase.clone?specialCase.clone(mkey).then(function(nkey){nkey?switchProfile(nkey):null===nkey&&doClone(mkey,qType)}):doClone(mkey,qType)}function deleteProfile(){$.confirm($.getInfo("del_confirm")).done(function(){var $selected=$("#sel_profile :selected"),mkey=$selected.val(),qType=$selected.data("qtype");CMDB.delete(null,null,mkey,{type:qType}).then(function(){specialCase.postDelete&&specialCase.postDelete(mkey),utm.profileActions.list()},CMDB.notify_failure)})}function listProfiles(){var index=window.location.href.indexOf("edit/");window.location.href=window.location.href.slice(0,index)}function setSpecialCaseCloneHandler(handler){specialCase.clone=handler}function setSpecialCasePostDelete(handler){specialCase.postDelete=handler}var specialCase={};utm.profileActions={change:changeProfile,new:newProfile,clone:cloneProfile,delete:deleteProfile,list:listProfiles},utm.setCloneHandler=setSpecialCaseCloneHandler,utm.setPostDelete=setSpecialCasePostDelete,$(document).ready(function(){$("input.disabled").disable(!0),$("#sel_profile").change(utm.profileActions.change),$("#prof_add").click(utm.profileActions.new),$("#prof_clone").click(utm.profileActions.clone),$("#prof_del").click(utm.profileActions.delete),$("#prof_list").click(utm.profileActions.list);var $selected=$("#sel_profile :selected");(0===$selected.data("qdel")||$selected.data("qref")>0)&&$("#prof_del").hide()})}(window.UTMProfiles=window.UTMProfiles||{},jQuery);