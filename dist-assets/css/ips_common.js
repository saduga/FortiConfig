var ips_common=function($j){function QuarantineSetting(config){this._min=config.min,this._max=config.max,this.key=config.key,this.lang_key=config.lang_key}var BUILD_SYMBOLS=fweb.BUILD.SYMBOLS,severity_sort_index={info:-20,low:-10,medium:0,high:10,critical:20},severity_sort_fn=function(a,b){return severity_sort_index[a]-severity_sort_index[b]},severity_reverse_sort_fn=function(a,b){return severity_sort_index[b]-severity_sort_index[a]},insensitive_case_sort_fn=function(a,b){var la=a.toLowerCase(),lb=b.toLowerCase();return la<lb?-1:la>lb?1:0};severity_sort_fn.kind="comp";var loc_lang_cache={client:$.getInfo("loc_client"),server:$.getInfo("loc_server")};QuarantineSetting.prototype.get_min=function(model){return"m"===this.key&&(model.d>0||model.h>0)?0:this._min},QuarantineSetting.prototype.get_max=function(){return this._max},QuarantineSetting.prototype.pattern=new RegExp(/^\d+$/);var that={DEFINES:{SNIFFER_PROFILE:"sniffer-profile"},IPS_ATTR_ID_MAX:BUILD_SYMBOLS.IPS_ATTR_ID_MAX,IPS_ATTR_ID_ALL:BUILD_SYMBOLS.IPS_ATTR_ID_ALL,IPS_ATTR_NONE:BUILD_SYMBOLS.IPS_ATTR_NONE,IPS_ATTR_OS:BUILD_SYMBOLS.IPS_ATTR_OS,IPS_ATTR_APP:BUILD_SYMBOLS.IPS_ATTR_APP,IPS_ATTR_PROTOCOL:BUILD_SYMBOLS.IPS_ATTR_PROTOCOL,IPS_ATTR_SEVERITY:BUILD_SYMBOLS.IPS_ATTR_SEVERITY,IPS_ATTR_LOCATION:BUILD_SYMBOLS.IPS_ATTR_LOCATION,IPS_ATTR_APP_CAT:BUILD_SYMBOLS.IPS_ATTR_APP_CAT,IPS_ATTR_APP_SUB_CAT:BUILD_SYMBOLS.IPS_ATTR_APP_SUB_CAT,IPS_ATTR_VENDOR:BUILD_SYMBOLS.IPS_ATTR_VENDOR,IPS_ATTR_TECHNOLOGY:BUILD_SYMBOLS.IPS_ATTR_TECHNOLOGY,IPS_ATTR_BEHAVIOR:BUILD_SYMBOLS.IPS_ATTR_BEHAVIOR,IPS_ATTR_POPULARITY:BUILD_SYMBOLS.IPS_ATTR_POPULARITY,IPS_ATTR_MAX:BUILD_SYMBOLS.IPS_ATTR_MAX,ATTR_TYPES_ENUM:["IPS_ATTR_NONE","IPS_ATTR_OS","IPS_ATTR_APP","IPS_ATTR_PROTOCOL","IPS_ATTR_SEVERITY","IPS_ATTR_LOCATION","IPS_ATTR_APP_CAT","IPS_ATTR_APP_SUB_CAT","IPS_ATTR_VENDOR","IPS_ATTR_TECHNOLOGY","IPS_ATTR_BEHAVIOR","IPS_ATTR_POPULARITY"],IPS_SENSOR_PASS:0,IPS_BEHAVIOR_EVASIVE_ID:3,APP_ID_AIM:1,APP_ID_ICQ:2,APP_ID_MSN:3,APP_ID_YAHOO:4,APP_ID_BITTORRENT:6,APP_ID_EDONKEY:7,APP_ID_GNUTELLA:8,APP_ID_KAZAA:9,APP_ID_SKYPE:10,APP_ID_WINNY:11,APP_ID_IMP2P_MAX:14,POPULARITY_MAX:5,CAT_SEPARATOR:" ",FMETA_TYPE_INTEGER:1,FMETA_TYPE_BITMAP:2,FMETA_TYPE_ENUM:3,FMETA_TYPE_STRING:4,CVE_LOOKUP_URL:"http://cve.mitre.org/cgi-bin/cvename.cgi?name=",attr_map:{},cat_map:{},exclude_signatures_setting_dfd:null,UNCOMMON_CATEGORIES:{IPS_ATTR_APP_CAT:[""]},SHOWN_CATEGORIES:{IPS_ATTR_VENDOR:["Adobe","Alibaba","AOL","Apple","Cisco","EBay","Facebook","Google","LogMeIn","Microsoft","RealNetworks","Sina","Symantec","Tencent","Yahoo"],IPS_ATTR_APP:["Adobe","Apache","Apple","CGI_app","Cisco","HP","IBM","IE","IIS","MS_Office","Mozilla","Novell","Oracle","PHP_app","Sun"],IPS_ATTR_PROTOCOL:["DNS","FTP","HTTP","ICMP","IMAP","LDAP","POP3","SCCP","SIP","SMTP","SNMP","SSH","SSL","TCP","UDP"]},INDUSTRIAL_ID:347,WEB_OTHERS_ID:346,BOTNET_ID:340,QUARANTINE_SETTINGS:{days:new QuarantineSetting({min:0,max:364,key:"d",lang_key:"quar_expire_day"}),hours:new QuarantineSetting({min:0,max:23,key:"h",lang_key:"quar_expire_hour"}),minutes:new QuarantineSetting({min:1,max:59,key:"m",lang_key:"quar_expire_min"})},DEFAULT_QUARANTINE_STRING:"000d00h05m",QUARANTINE_REGEX:/(\d+)([hmd])/g,EMPTY_QUARANTINE_MODEL:{d:0,h:0,m:0},ips_get_rule_link:function(rule_id){var id=Number(rule_id);return app_id_to_rule_id.hasOwnProperty(rule_id)&&(id=app_id_to_rule_id[id]),"http://www.fortinet.com/ids/VID"+id},fct_vuln_get_link:function(vulnid){return"http://fortiguard.com/product/encyclopedia/vuln/"+vulnid},vulnid_format_fn:function(name,row){var template='<a class="sig_name" target="_blank" href="{{ link }}" rel="noopener noreferrer">{{ name }}</a>',id=row[name],link=ips_common.fct_vuln_get_link(id),context={link:link,name:id};return fweb.util.dom.renderTemplate(template,context)},ips_get_start_id_for_type:function(type){return(type-1)*this.IPS_ATTR_ID_MAX},ips_get_attr_map_id:function(type,id){return id=Number(id),id==that.IPS_ATTR_ID_ALL?0:this.ips_get_start_id_for_type(type)+id+1},ips_get_type_from_id:function(id){id=Number(id);for(var type=this.IPS_ATTR_NONE,attr_type=0;attr_type<this.ATTR_TYPES_ENUM.length;++attr_type){var attr_starting_id=this.ips_get_start_id_for_type(attr_type);if(id<attr_starting_id)break;type=attr_type}return type},ips_get_id_from_mapped:function(type,id){return id=Number(id),0===id?that.IPS_ATTR_ID_ALL:id-1-that.ips_get_start_id_for_type(type)},ips_get_attr_string:function(type,id){return that.attr_map[type][that.ips_get_attr_map_id(type,id)]},ips_get_attr_relative_id:function(type,text){return that.ips_get_id_from_mapped(type,that.attr_map[type][text])},get_default_quarantine_object:function(){var obj={};return that.gen_expiry_object(that.DEFAULT_QUARANTINE_STRING,obj),obj},get_quarantine_time_format:function(expires){var str_key,lang_key,str=expires,settings_keys=Object.keys(this.QUARANTINE_SETTINGS),settings=this.QUARANTINE_SETTINGS;return settings_keys.forEach(function(k){str_key=settings[k].key,lang_key=settings[k].lang_key,str=str.replace(str_key," "+$.getInfo(lang_key)+" ")}),$.getInfo("quarantine_expire")+" "+str},format_expires:function(expires){var val,quarantine_string="",settings=that.QUARANTINE_SETTINGS,settings_keys=Object.keys(settings);return settings_keys.forEach(function(k){val=expires[settings[k].key],(!val||val<settings[k].get_min(expires)||val>settings[k].get_max())&&(val=settings[k].get_min(expires)),val>0&&(quarantine_string+=val+settings[k].key)}),quarantine_string},gen_expiry_object:function(expiry_string,obj){var match,regex=that.QUARANTINE_REGEX;for(regex.lastIndex=0,$.extend(obj,that.EMPTY_QUARANTINE_MODEL);null!==(match=regex.exec(expiry_string));)obj[match[2]]=+match[1]},quarantine_expiry_validator:function(){var val,min,max,error_ctxt,settings_keys=Object.keys(that.QUARANTINE_SETTINGS),obj=this,settings=that.QUARANTINE_SETTINGS,valid=!0,msg="",template=$.getInfo("quarantine_expiry_range_error");return settings_keys.forEach(function(k){min=settings[k].get_min(obj),max=settings[k].get_max(),val=obj[settings[k].key],(void 0===val||"number"!=typeof val||val<min||val>max)&&(valid=!1,error_ctxt={duration:$.getInfo(k),min:min.toString(),max:max.toString()},msg+=fweb.util.dom.renderTemplate(template,error_ctxt)+"<br>")}),valid?valid:msg},load_attr_map:function(res){var i,len=res.length;for(i=0;i<len;++i){var obj=res[i],id=obj.id,type=ips_common.ips_get_type_from_id(id);ips_common.attr_map[type]||(ips_common.attr_map[type]={}),ips_common.attr_map[type][obj.id]=obj.name,ips_common.attr_map[type][obj.name]=obj.id}i=0;for(var behavior_attr=ips_common.IPS_ATTR_BEHAVIOR,start_behavior_id=ips_common.ips_get_start_id_for_type(behavior_attr),unused_behavior_id=start_behavior_id+1;i<ips_common.IPS_ATTR_ID_MAX&&ips_common.attr_map[behavior_attr].hasOwnProperty(unused_behavior_id);)unused_behavior_id++,i++;i<ips_common.IPS_ATTR_ID_MAX&&(ips_common.attr_map[behavior_attr][unused_behavior_id]="None");var pop_attr=ips_common.IPS_ATTR_POPULARITY,start_pop_id=ips_common.ips_get_start_id_for_type(pop_attr),pop_id=start_pop_id+1;for(ips_common.attr_map[pop_attr]={},i=0;i<ips_common.POPULARITY_MAX;i++)ips_common.attr_map[pop_attr][pop_id]=String(ips_common.POPULARITY_MAX-i),pop_id++},populate_category:function(type,skip_category_ids){for(var categories=[],type_str=ips_common.TYPE_STR[type],uncommon_cats=ips_common.UNCOMMON_CATEGORIES[type_str],shown_cats=ips_common.SHOWN_CATEGORIES[type_str],_id=0;_id<that.IPS_ATTR_ID_MAX;++_id)if(!($j.isArray(skip_category_ids)&&$j.inArray(_id,skip_category_ids)>=0)){var val=that.ips_get_attr_string(type,_id);that.cat_map.hasOwnProperty(type)||(that.cat_map[type]={}),val&&(categories.push(val),that.cat_map[type][val]=_id)}var is_uncommon=function(cat){return uncommon_cats&&uncommon_cats.indexOf(cat)>-1},extra_filter=$j.inArray(type,[ips_common.IPS_ATTR_VENDOR,ips_common.IPS_ATTR_PROTOCOL,ips_common.IPS_ATTR_APP])>=0,is_default_shown=function(cat){return shown_cats&&shown_cats.indexOf(cat)>-1};type!=ips_common.IPS_ATTR_POPULARITY&&(type==ips_common.IPS_ATTR_APP_CAT?categories.sort(function(a,b){var is_a_uncommon=is_uncommon(a),is_b_uncommon=is_uncommon(b),same_type=!(is_a_uncommon^is_b_uncommon);return same_type?insensitive_case_sort_fn(a,b):is_a_uncommon<is_b_uncommon?-1:is_a_uncommon>is_b_uncommon?1:0}):type==ips_common.IPS_ATTR_SEVERITY?categories.sort(severity_reverse_sort_fn):extra_filter?categories.sort(function(a,b){var is_a_shown=is_default_shown(a),is_b_shown=is_default_shown(b),same_type=!(is_a_shown^is_b_shown);return same_type?"Other"===a?1:"Other"===b?-1:insensitive_case_sort_fn(a,b):is_a_shown<is_b_shown?1:is_a_shown>is_b_shown?-1:0}):categories.sort());for(var len=categories.length,li=[],uncommon_separator_added=!1,initial_hide_separator_added=!1,uncommon_filter=type===ips_common.IPS_ATTR_APP_CAT,i=0;i<len;i++){var cat=categories[i],is_uncommon_cat=is_uncommon(cat),is_initial_hide_cat=extra_filter&&!is_default_shown(cat),initial_hide=extra_filter&&is_initial_hide_cat||uncommon_filter&&is_uncommon_cat,toggle_cls=initial_hide?" collapsible":"",id=that.cat_map[type][cat],chk_id=type+"_"+id,chk=["<input"," type='checkbox'"," data-filter_type='",type,"' value='",id,"' class='chk_left filter_",type,"' id='",chk_id,"' checked='checked'",is_rw_admin?"":" disabled='disabled'","/>"].join(""),inner="";inner=type==that.IPS_ATTR_POPULARITY?fweb.util.formatters.popularity_rating(cat):type==that.IPS_ATTR_SEVERITY?that.gen_severity_bar(cat):cat;var label=["<label for='",chk_id,"'>",inner,"</label>"].join("");is_uncommon_cat&&!uncommon_separator_added?(li.push('<li class="hr uncommon collapsible"></li>'),uncommon_separator_added=!0):is_initial_hide_cat&&!initial_hide_separator_added&&(li.push('<li class="hr collapsible"></li>'),initial_hide_separator_added=!0),li.push("<li class='"+toggle_cls+"'>"+chk+label+"</li>")}$j("#list_"+type).html(li.join(""))},gen_sig_action:function(action){return'<span class="utm_action_sprite_text action_'+action+'">'+$j.getInfo(action)+"</span>"},gen_severity_bar:function(severity){return fweb.util.formatters.severity_bar(severity)},init:function(){is_rw_admin||($j("input").disable(),$j("#submit_return").enable())},build_metadata_map:function(result){var map=result.reduce(function(previousMap,resource){var obj={name:resource.name,id:resource.id,values:{},type:resource.type};return resource.values.forEach(function(val){obj.values[val.subid]=val.subname}),previousMap[resource.id]=obj,previousMap[resource.name]=obj,previousMap},{});return map},add_metadata_attrs:function(entry,metadata_map){(entry.metadata||[]).forEach(function(meta){var value,values,metadataInfo=metadata_map[meta.metaid]||{};if(metadataInfo.type===ips_common.FMETA_TYPE_ENUM)value=metadataInfo.values[meta.valueid];else if(metadataInfo.type==ips_common.FMETA_TYPE_INTEGER||metadataInfo.type==ips_common.FMETA_TYPE_STRING)value=meta.valueid;else if(metadataInfo.type===ips_common.FMETA_TYPE_BITMAP){values=[];for(var bitMask in metadataInfo.values)metadataInfo.values.hasOwnProperty(bitMask)&&meta.valueid&bitMask&&values.push(metadataInfo.values[bitMask])}value&&(values=entry[metadataInfo.name]||[],values.push(value)),entry[metadataInfo.name]=values})},format_cve_link:function(cve_value){if(!cve_value)return"";var cve=Number(cve_value).toString(),cve_id=["CVE",cve.slice(0,4),cve.slice(4)].join("-"),url=ips_common.CVE_LOOKUP_URL+cve_id;return'<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+cve_id+"</a>"},ips_cve_format_fn:function(td,column,entry){var cve_values=entry[column.selector]||[];return cve_values.map(that.format_cve_link).join(", ")},log_cve_format_fn:function(name,row){var value=row[name];return value?'<div class="flex-wrap cveid">'+value.split(" ").map(function(cveid){var url=ips_common.CVE_LOOKUP_URL+cveid;return'<div class="cell-collection-member"><a href="'+url+'" target="_blank" rel="noopener noreferrer">'+cveid+"</a></div>"}).join("")+"</div>":""},severity_sort_fn:severity_sort_fn,location_format_fn:function(td,column,entry){var locations=entry.location.split(",");return $.map(locations,function(location){return loc_lang_cache[$.trim(location)]||$.getInfo($.trim(location))}).join(", ")}},app_id_to_rule_id={};app_id_to_rule_id[that.APP_ID_AIM]=108855297,app_id_to_rule_id[that.APP_ID_MSN]=108855298,app_id_to_rule_id[that.APP_ID_YAHOO]=108855299,app_id_to_rule_id[that.APP_ID_BITTORRENT]=109051908,app_id_to_rule_id[that.APP_ID_EDONKEY]=109051907,app_id_to_rule_id[that.APP_ID_GNUTELLA]=109051905,app_id_to_rule_id[that.APP_ID_KAZAA]=109051906,app_id_to_rule_id[that.APP_ID_SKYPE]=109051909,app_id_to_rule_id[that.APP_ID_WINNY]=109051911,that.TYPE_STR={};var type_str_cats=$j.extend({},that.UNCOMMON_CATEGORIES,that.SHOWN_CATEGORIES);for(var type_str in type_str_cats)type_str_cats.hasOwnProperty(type_str)&&(that.TYPE_STR[that[type_str]]=type_str);return that.ATTRS_WITH_ID_TEXT_CONVERSION={category:that.IPS_ATTR_APP_CAT,behavior:that.IPS_ATTR_BEHAVIOR,protocol:that.IPS_ATTR_PROTOCOL,protocols:that.IPS_ATTR_PROTOCOL,technology:that.IPS_ATTR_TECHNOLOGY,vendor:that.IPS_ATTR_VENDOR},that}(jQuery);