$(function(){"use strict";var test_input=document.createElement("input");test_input.setAttribute("type","number"),test_input.value="test",("text"===test_input.type||test_input.value)&&$("input[type=number]").spinner(),$(".dlg_close").click(function(){var resolve=null!=this.getAttribute("data-dialog-resolve");fweb.util.location.go_back($("#redir").val(),resolve)}),$(".post_action").click(function(){var params={csrfmiddlewaretoken:fweb.util.persist.getPythonCsrfToken()};$.each(this.attributes,function(param_name,param_value){var prefix="__postparam__";"string"==typeof param_name&&0===param_name.indexOf(prefix)&&(params[param_name.slice(prefix.length)]=param_value)}),$.post(this.value,params,function(data){data&&data.redir?document.location.href=data.redir:document.location.reload()})}),$(document).ready(function(){var highlight=/(^\?|&)highlight(=|&|$)/.test(location.search),highlightTarget=location.hash||top.location.hash;if(highlight&&highlightTarget)try{$("label"+highlightTarget).highlight()}catch(err){throw new Error("Invalid id specified in URL hash")}}),$.fn.enc_password_fix=function(){var $container=$(this);$container.find(":password").change(function(){var $this=$(this);this.placeholder="",$this.removeData("enc_val"),$this.off("focus.password blur.password"),this.name==="-"+$(this).data("name")+"-"&&$(this).attr("name",$(this).data("name"));var id="#"+this.id+"-changed";$(id).val(!0)}).each(function(){this.placeholder=this.placeholder||" ";var $this=$(this),name=this.name||$this.data("name");name&&this.value&&($this.data("name",this.name).attr("name","-"+this.name+"-"),$this.on("focus.password",function(){$this.data("enc_val",$this.data("enc_val")||$this.val()),$this.hasClass("required")?$this.val(""):$this.on("keydown.password",function(){$this.val(""),$this.off("keydown.password")})}).on("blur.password",function(){if($this.not(".inline-edit")){var enc_val=$this.data("enc_val");enc_val&&this.name==="-"+$this.data("name")+"-"&&$this.val(enc_val)}}))})},$("form").enc_password_fix(),$("span.dlg_help").each(function(){var title=$(this).attr("title");$(this).qtip({content:{text:title}})});var query_str=null;$("form").submit(function(){var $form=$(this);$form.find("#submit_ok, #submit_return, #submit_apply").each(function(i,elem){$(elem).addClass("busy").prop("disabled",!0)});var form_data=$form.serialize(),is_form_valid=$form.valid(),is_validate_pending=$form.validate().pendingRequest;if(0===is_validate_pending&&is_form_valid){if(query_str===form_data)return!1;query_str=form_data}else 0!==is_validate_pending&&is_form_valid||$form.find("#submit_ok, #submit_return, #submit_apply").each(function(i,elem){$(elem).removeClass("busy").prop("disabled",!1)})})});