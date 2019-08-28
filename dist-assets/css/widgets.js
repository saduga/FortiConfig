var Widgets={};!function($){function gen_country_flag_icon_by_code(country_code,country_name){var className;return country_code?className="country_flag country_"+country_code:"Reserved"===country_name&&(className="country_flag country_RESERVED"),"<span class='"+className+"' title='"+country_name+"'></span> "}function gen_country_flag_icon_by_id(country_id,country_name){var low=255&country_id,high=country_id>>8,className="country_flag country_"+String.fromCharCode(low)+String.fromCharCode(high);return"<span class='"+className+"' title='"+country_name+"'></span> "}var level_idmap=["","low","medium","high","critical"];Widgets={format_fn:{address:function(element,column,config){$j(element).addClass("address");var html="",address=config[column.selector];if(config.children&&config.children.length>1&&(address='<span class="aggregate-session-addresses">'+$j.validator.format($j.getInfo("session-addresses"),config.children.length)+"</span>"),!address)return"";if((config.username||config.unauthuser)&&"source"===config.report_by){var authenticated="auth"===config.username_source;return html=fweb.util.avatars.userFormatFn({user:authenticated?config.username:null,unauthuser:config.unauthuser?config.unauthuser:authenticated?null:config.username,unauthusersource:config.unauthusersource||(config.unauthuser?"forticlient":config.username_source),uid:config.fctuid,alias:config.master_alias||config.alias,forticlient_status:config.forticlient_status,csfPath:config.csfPath}),html+" ("+address+")"+fweb.util.formatters.create_whois_lookup_anchor(address)}return"destination"==config.report_by&&config.country_id&&config.country_id>2&&(html+=gen_country_flag_icon_by_id(config.country_id,config.country)),config.resolved&&config.resolved!=address?html+config.resolved+" ("+address+")"+fweb.util.formatters.create_whois_lookup_anchor(address):html+address+fweb.util.formatters.create_whois_lookup_anchor(address)},username:function(element,column,config){var className="device_nouser",userName=$j.getInfo("unknown");return config.username&&(className="fa-user-unauthenticated","auth"==config.username_source&&(className="fa-user-authenticated"),userName=escapeHTML(config.username)),byod_common.gen_fw_icon(className,userName)},device:function(element,column,config){$j(element).addClass("device");var device=config.device,mac=config.mac,path=config.csfPath;if(!mac&&!device)return"";device||(device=$j.getInfo("detecting"));var alias=config.alias?config.alias:config.hostname;return byod_common.gen_fw_device_icon(mac,config.device,alias,!1,path,config.datasource)},apps:function(element,column,config){var app,app_id,app_name,i,html="",apps=config[column.selector]||[{id:0}],_len=apps.length;if(null==element){var filter_str="";for(i=0;i<_len;i++)app=apps[i],filter_str+=(app.name||$j.getInfo("unknown"))+"  "+app.id+"  ";return filter_str}for($j(element).addClass("apps fgd-apps-list"),i=0;i<_len;i++)app=apps[i],app_id=app.id||0,app_name=app.name||app.id||$j.getInfo("unknown"),html+=fgd_common.gen_app_html(app_id,app_name,config);return html},threatlevel:function(td,col,data){var value=data[col.selector],level=isNaN(value)?value:level_idmap[value];return["<span class='severity-label wide severity-",level,"'>",$.getInfo(level),"</span>"].join("")}},callbacks:{load:function(resolve_apps){$j(".ui-slider-compare-one, .ui-slider-compare-two",this).each(function(){$j(this).slider({disabled:!0,range:!0,values:[0,$j(this).data("sliderValue")],min:0,max:100})}),byod_common.setup_device_tooltips(),fgd_common.setup_tooltips("span.tooltip","fromclass",resolve_apps),fweb.util.dom.renderFQtip()}}},Widgets.gen_country_flag_icon_by_code=gen_country_flag_icon_by_code,Widgets.gen_country_flag_icon_by_id=gen_country_flag_icon_by_id}(jQuery);