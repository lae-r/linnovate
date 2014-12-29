// Copyrights, ATPLogic.co.il

var g_fx_e='', g_fxf_streach = true;

function getInternetExplorerVersion() {
  var rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer')
  {
    var ua = navigator.userAgent; var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if (re.exec(ua) != null) rv = parseFloat( RegExp.$1 );
  } return rv;
}

var isIE6 = getInternetExplorerVersion() == 6;
var isIE7 = getInternetExplorerVersion() == 7;

function g_init(direction){ g_addLoadEvent(function(){ g_refresh(direction, g_fxf_streach); }); try{ g_refresh(direction, false); } catch(e) {}}
function g_refresh(direction, streach){if(isIE6||isIE7)g_fixIE(direction);g_fx(streach);}
function g_fx(streach){if(g_fx_e=='')g_fx_init();if(streach) g_fx_strech(g_fx_e.strech);g_fx_valign(g_fx_e.valign);} 
function g_fx_init(){g_fx_e={'strech':[],'valign':[]};var g_t=g_css('.g_fx_*'),idx=0;for(;idx<g_t.length;idx++){var g_t_fx=g_rgx_split(g_t[idx].className,'g_fx_*'),idx2=0;for(;idx2<g_t_fx.length;idx2++){var g_t_fx_a=g_t_fx[idx2].split('_');switch(g_t_fx_a[2]){case'strech':g_fx_e.strech.push(g_t[idx]);continue;break;case'valign':g_fx_e.strech.push(g_t[idx]);continue;break;case'va':g_fx_e.valign.push([g_t[idx],g_t_fx_a[3]]);continue;break;}console.log('[ATPLogic:GridsFW] - Unknown FX "'+g_t_fx[idx2]+'"');}}}
function g_fx_strech(els){var idx=0;for(;idx<els.length;idx++){var g_t=els[idx].parentNode.offsetHeight-els[idx].offsetTop+(isIE6||isIE7?0:els[idx].parentNode.offsetTop);if(g_t!=els[idx].offsetHeight){els[idx].style.height=g_t+'px';els[idx].style.height=g_t-(els[idx].offsetHeight-g_t)+'px';}}}
function g_fx_valign(els){var idx=0;for(;idx<els.length;idx++){var g_t_e=els[idx][0];var g_t=(g_t_e.parentNode.offsetHeight)-g_t_e.offsetHeight;g_t_e.style.marginTop=(g_t/100*els[idx][1])+'px';}}
function g_fixIE(direction){if(g_fluids=='')g_fixIE_init(direction);var idx=0;for(;idx<g_fluids.length;idx++)g_fixIE_margins(g_fluids[idx].fEl,g_fluids[idx].lEl,g_fluids[idx].rEl);} var g_fluids='';function g_fixIE_init(direction){g_fluids=new Array();var g_t=g_css('.g_fluid'),idx=0;for(;idx<g_t.length;idx++){var bEl='',aEl='',hasOpposite=false,cObj=g_t[idx].previousSibling;while(cObj){if(cObj.className){if(!hasOpposite&&cObj.className.match(/(\b)g_opposite(\b)/)){hasOpposite=true;aEl=cObj;}else if(cObj.className&&cObj.className.match(/(\b)g_cell(\b)/)){bEl=cObj;if(isIE6){if(direction=='ltr')bEl.style.marginRight='-3px';else bEl.style.marginLeft='-3px';}break;}}cObj=cObj.previousSibling;}if(direction=='ltr')g_fluids[idx]={'fEl':g_t[idx],'lEl':bEl,'rEl':aEl};else g_fluids[idx]={'fEl':g_t[idx],'lEl':aEl,'rEl':bEl};}}
function g_fixIE_margins(fEl,lEl,rEl){fEl.style.marginLeft=0;fEl.style.marginRight=0;var parentWidth=fEl.parentNode.offsetWidth,marginLeft=0,marginRight=0;if(lEl!=''){marginLeft=lEl.offsetLeft+lEl.offsetWidth;if(lEl.style.marginRight)marginLeft-=3;}if(rEl!=''){marginRight=parentWidth-rEl.offsetLeft;if(rEl.style.marginLeft)marginRight-=3;}fEl.style.marginLeft=marginLeft;fEl.style.marginRight=marginRight;}
function g_rgx_split(text,find){return text.match(new RegExp('(\\b)'+find.replace('*','(\\S*)')+'(\\b)','g'));}
function g_css(all_selectors){var selected=new Array();if(!document.getElementsByTagName)return selected;all_selectors=all_selectors.replace(/\s*([^\w])\s*/g,"$1");var selectors=all_selectors.split(",");var getElements=function(context,tag){if(!tag)tag='*';var found=new Array;for(var a=0,len=context.length;con=context[a],a<len;a++){var eles;if(tag=='*')eles=con.all?con.all:con.getElementsByTagName("*");else eles=con.getElementsByTagName(tag);for(var b=0,leng=eles.length;b<leng;b++)found.push(eles[b]);}return found;};COMMA:for(var i=0,len1=selectors.length;selector=selectors[i],i<len1;i++){var context=new Array(document),inheriters=selector.split(" ");SPACE:for(var j=0,len2=inheriters.length;element=inheriters[j],j<len2;j++){var left_bracket=element.indexOf("["),right_bracket=element.indexOf("]"),pos=element.indexOf("#");if(pos+1&&!(pos>left_bracket&&pos<right_bracket)){var parts=element.split("#"),tag=parts[0],id=parts[1],ele=document.getElementById(id);if(!ele||(tag&&ele.nodeName.toLowerCase()!=tag)){continue COMMA;}context=new Array(ele);continue SPACE;}pos=element.indexOf(".");if(pos+1&&!(pos>left_bracket&&pos<right_bracket)){var parts=element.split('.'),tag=parts[0],class_name=parts[1].replace('*','(\\S*)'),found=getElements(context,tag);context=new Array;for(var l=0,len=found.length;fnd=found[l],l<len;l++){if(fnd.className&&fnd.className.match(new RegExp('(\\b)'+class_name+'(\\b)')))context.push(fnd);}continue SPACE;}if(element.indexOf('[')+1){if(element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)){tag=RegExp.$1,attr=RegExp.$2,operator=RegExp.$3,value=RegExp.$4;}var found=getElements(context,tag);context=new Array;for(var l=0,len=found.length;fnd=found[l],l<len;l++){if(operator=='='&&fnd.getAttribute(attr)!=value)continue;if(operator=='~'&&!fnd.getAttribute(attr).match(new RegExp('(^|\\s)'+value+'(\\s|$)')))continue;if(operator=='|'&&!fnd.getAttribute(attr).match(new RegExp('^'+value+'-?')))continue;if(operator=='^'&&fnd.getAttribute(attr).indexOf(value)!=0)continue;if(operator=='$'&&fnd.getAttribute(attr).lastIndexOf(value)!=(fnd.getAttribute(attr).length-value.length))continue;if(operator=='*'&&!(fnd.getAttribute(attr).indexOf(value)+1))continue;else if(!fnd.getAttribute(attr))continue;context.push(fnd);}continue SPACE;}var found=getElements(context,element);context=found;}for(var o=0,len=context.length;o<len;o++)selected.push(context[o]);}return selected;}
function g_onReady(fn){if (isIE6) g_addLoadEvent(fn); else window.g_onReady_e.push(fn);};(function(){window.g_onReady_e=[];function _runFunctions(){for(var i in window.g_onReady_e){(window.g_onReady_e[i])();}};var _khtml=/(WebKit|khtml)/i.test(navigator.userAgent);if(document.addEventListener&&!_khtml){document.addEventListener("DOMContentLoaded",_runFunctions,false);}else if(_khtml){var _timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){clearInterval(_timer);_runFunctions();}},10);}else{document.write("<script id=__ie_ondom defer src=javascript:void(0)><\/script>");var script=document.getElementById("__ie_ondom");script.onreadystatechange=function(){if(this.readyState=="complete"){_runFunctions();}};}})();
function g_addLoadEvent(func) { var oldonload = window.onload; if (typeof window.onload != 'function') { window.onload = func; } else { window.onload = function() { if (oldonload) { oldonload(); } func(); }}}
function g_enter(event,uxUID) { if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {__doPostBack(uxUID,'');return false;}} else {return true;} }
function g_enterFn(event,fn) { if(event.which || event.keyCode){if ((event.which == 13) || (event.keyCode == 13)) {return fn();}} else {return true;} }
var g_Cookies = {
    get: function(name) { var c = document.cookie.match(new RegExp('(^|;)\\s*' + name + '=([^;\\s]*)')); return ((c && c.length >= 3) ? unescape(c[2]) : null); },
    set: function(name, value, days, path, domain, secure) { if (days) { var d = new Date(); d.setTime(d.getTime() + (days * 8.64e7)); } document.cookie = name + '=' + escape(value) + (days ? ('; expires=' + d.toGMTString()) : '') + '; path=' + (path || '/') + (domain ? ('; domain=' + domain) : '') + (secure ? '; secure' : ''); },
    del: function(name, path, domain) { this.set(name, '', -1, path, domain); }
};
var g_json = {
    stringify: function (obj) { var t = typeof (obj); if (t != "object" || obj === null) { if (t == "string") obj = '"'+obj+'"'; return String(obj); } else { var n, v, json = [], arr = (obj && obj.constructor == Array); for (n in obj) { v = obj[n]; t = typeof(v); if (t == "string") v = '"'+v+'"'; else if (t == "object" && v !== null) v = g_json.stringify(v); json.push((arr ? "" : '"' + n + '":') + String(v)); } return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}"); } },
    parse: function (str) { if (str === "") str = '""'; eval("var p=" + str + ";"); return p; } };

function g_handleEnterNext (field, event) {
	var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
	if (keyCode == 13) {
		var i,ci,formElements = field.form.elements;
		for (i = 0; i < formElements.length; i++) if (field == formElements[i]) break; ci = i; i = (i + 1) % formElements.length; for (; !g_checkInput(formElements[i]) && i != ci;) i = (i + 1) % formElements.length;
		formElements[i].focus(); return false;
	} else return true; }
function g_checkInput (field) {
    if (!field) return false;
    switch(field.tagName.toLowerCase()) { case 'input': switch(field.type) { case 'text': case 'password': case 'radio': case 'checkbox': return true; } break; case 'select': return true; }
    return false; }
function g_InitEnterNext() {
	var uxInputElements = g_css('input,select');
	for (var _idx = 0; _idx < uxInputElements.length; _idx++)
		if (!(uxInputElements[_idx].onkeydown || uxInputElements[_idx].keydown) && !(uxInputElements[_idx].onkeypress || uxInputElements[_idx].keypress) && g_checkInput(uxInputElements[_idx]))
			uxInputElements[_idx].onkeydown = function(evt){return g_handleEnterNext(this, evt ? evt : window.event);}; }
