Registry.registerRaw("environment.js","58",function(){Context.domContentLoaded|=0;Context.pageLoaded|=0;Context.domNodeInserted|=0;Context.props={};Context.adjustLogLevel=function(a){void 0!==a&&(logLevel=a);D|=60<=logLevel};var v=function(){var a={objs:{},push:function(b,d){0!==d&&1!==d&&(d=0);var c=Math.floor(19831206*Math.random()+1);a.objs[c]={fn:b,prio:d};return c},remove:function(b){delete a.objs[b]},get:function(b){for(var d=[],c=0;1>=c;c++)for(var h in a.objs)a.objs.hasOwnProperty(h)&&
(a.objs[h].prio!==c||void 0!==b&&h!=b||d.push(a.objs[h].fn));return void 0===b?d:d[0]},finalize:function(b){if(void 0===b){b=a.get();for(var d=0;d<b.length;d++)b[d]()}else return a.objs[b]&&(d=a.objs[b].fn(),delete a.objs[b]),d}};return a}();Context.adjustLogLevel();var N=function(a){return{}.toString.apply(a).match(/\s([a-z|A-Z]+)/)[1]},J=function(a,b){void 0==b&&(b=100);return b&&a&&(a==document||J(a.parentNode,b-1))},S=function(){var a=function(){};a.prototype={};return new a},ia=function(a,b){var d=
["blur","close","focus","postMessage"],c=["eval"],h={};a.forEach(function(a){a.context_prop&&(h[(a.name.split(".")||[])[1]]=!0)});var e=function(a,b,f,g){var q=function(f,c,l,g,d){var q=c[l];g&&"string"===typeof q?c[l]=new Function(q):d&&(c[l]=function(){return q.apply(a,arguments)});return f.apply(b,c)},l=function(f){return f==b?a:f},e=function(a,b,f,c){f||(f=a);var l=function(){var l=a[b].apply(f,arguments);c&&(l=c(l));return l};l.__proto__=a[b];l.prototype=a[b].prototype;return l},s=function(f){var l,
c,g=null,g=function(g){l=g;c=function(){return g.apply(a,arguments)};b[f]=c};a.__defineGetter__(f,function(){return void 0===l||c!==b[f]?b[f]:l});a.__defineSetter__(f,g)},u=function(f,c){var g,d=null,q=null,d="function"===typeof c.get?c.get:function(){c.opts&&c.opts.get_cb&&c.opts.get_cb.apply(this,[arguments,u]);return void 0===g?l(b[f]):g};"function"===typeof c.set?q=c.set:c.get||(q=function(a){g=a});d&&a.__defineGetter__(f,d);q&&a.__defineSetter__(f,q)};Object.keys(g).forEach(function(a){f[a]=
f[a]||!1!==g[a]});Object.keys(f).forEach(function(r){if(!1!==g[r]){var t,p={};try{try{!(t=g[r])||t.needs_grant&&!0!==h[r]?"function"===typeof b[r]?f[r].proto?p.wrap=!0:b[r].prototype&&-1==d.indexOf(r)||-1!=c.indexOf(r)?p.direct=!0:p.bind=!0:"number"===typeof b[r]||"string"===typeof b[r]?p.get=!0:f[r].event&&f[r].proto?p.event=!0:p.direct=!0:t.wrap?(p.wrap=!0,p.that=t.that):t.direct?p.direct=!0:t.enhance?p.enhance=t.enhance:t.get||t.set?(p.get=t.get,p.set=t.set,p.opts=t.opts):t.wrap_callback&&(p.enhance=
function(){var a=t.wrap_callback,f=b[r];return function(){return q(f,arguments,a.cb_index,a.auto_eval,a.set_context)}}())}catch(v){p.get=!0}p.direct?a[r]=l(b[r]):p.bind?a[r]=b[r].bind(b):p.enhance?a[r]=p.enhance:p.event?s(r):p.get||p.set?u(r,p):p.wrap&&(a[r]=e(b,r,p.that,l))}catch(fa){console.warn("env: error while creating a new sandbox: "+fa.message)}}});return a};return function(){var a=S(),c={setTimeout:{wrap_callback:{cb_index:0,auto_eval:!0,set_context:!0}},setInterval:{wrap_callback:{cb_index:0,
auto_eval:!0,set_context:!0}},close:{needs_grant:!0,get:function(){return window.self==window.top?function(a){return ga(a)}:window.close}},focus:{needs_grant:!0,get:function(){return function(a){return ha(a)}}},location:{get:!0,set:function(a){window.location.href=a}},document:{get:function(){var a=window.document;b(a);return a}},clearInterval:{get:function(){return safeWindow.clearInterval}},clearTimeout:{get:function(){return safeWindow.clearTimeout}},addEventListener:{wrap_callback:{cb_index:1,
auto_eval:!0}},removeEventListener:{wrap_callback:{cb_index:1,auto_eval:!0}}};(function(){var a=Math.max(window.frames.length,7);c.length={get:!0,opts:{get_cb:function(b,f){for(var c=window.frames.length,l=a;l<c;l++)f(String(l),{get:!0});a=Math.max(c,a)}}};for(var b=0;b<a;b++)c[String(b)]={get:!0}})();["confirm","prompt","alert"].forEach(function(a){c[a]={enhance:safeWindow[a]}});var f=e(a,window,Context.windowProps,c),g={context:f,filter:function(a){return a==window?f:a},filterEvent:function(a){var b=
{},f;for(f in a)if("function"===typeof a[f])b[f]=function(){var b=f;return function(){return a[b].apply(a,arguments)}}();else{var c=g.filter(a[f]);b[f]=c}return b}};return g}()},ja=function(a,b,d,c,h,e){var m=null;try{var k=c.sandboxes[a.uuid];k.__TMbackref||(k.__TMbackref={});var f=["context"],g=[void 0];c.elements[a.uuid].forEach(function(a){a.name?a.overwrite?(f.push(a.name),g.push(a.value)):a.scriptid?(k.__TMbackref[a.name+"_"+a.scriptid]=a.value,f.push(a.name),g.push('context.__TMbackref["'+
a.name+"_"+a.scriptid+'"]')):a.context_prop||(k[a.name]=a.value,f.push(a.name),g.push("context."+a.name)):D&&console.warn("env: WARN: unexpected item in props elem: "+JSON.stringify(a))});m=['with (context) {(function(module) {"use strict";try {\nmodule.apply(context, [',g.join(","),"]);} catch (e) {if (e.message && e.stack) {console.error(\"ERROR: Execution of script '",a.name.replace(/(['"])/g,"\\$1"),'\' failed! " + e.message);console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));} else {console.error(e);}}\n})(function ',
e,"(",f.join(","),") {",Context.enforce_strict_mode?'"use strict";\n':"",d,b,"\n})}\n"].join("");c=function(a,b){(new Function("context",m)).apply(b,[b])};h?h(c,[m,k]):c(m,k)}catch(q){chromeEmu.extension.sendMessage({method:"syntaxCheck",code:[d,b].join("")},function(f){var c="";if(f.errors){var c=d.split("\n").length-1,g="",k;for(k in f.errors){var e=f.errors[k];if(e&&0<=e.line&&e.reason)var h=e.line,g=g+[h>c?"script:":"require:"," (",e.code,") ",e.reason.replace(/.$/,"")," on line: ",h>c?h-c:h,
" at character: ",e.character,"\n"].join("")}c="JSHINT output:\n"+g}else c=b;k=q.stack?q.stack.replace(/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g,""):"";D||f.errors?console.error("Syntax error @ '"+a.name+"'!\n##########################\n"+c+"##########################\n\n"+k):console.error("Syntax error @ '"+a.name+"'!\n\n",k);safeWindow.setTimeout(function(){D&&chromeEmu.extension.sendMessage({method:"copyToClipboard",data:{content:b,type:"test"},id:"42"},function(){});throw q;
},1)})}},A=[],s={events:[],done:{},running:null},F=function(a,b,d,c){var h={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:!0,srcElement:null,target:null,timeStamp:(new Date).getTime()};d="string"===typeof d?new Function(d):d;var e=new Event,m;for(m in h)e[m]=h[m];for(m in b)e[m]=b[m];e.type=a;d.apply(c,[e])},C=function(){Context.domContentLoaded||
!D||console.log("env: DOMContentLoaded Event!");Context.domContentLoaded=!0;B();safeDocument.removeEventListener("DOMContentLoaded",C,!1)},K=function(a){Context.domNodeInserted||!D||console.log("env: first DOMNodeInserted Event!");Context.domNodeInserted=!0;s&&s.events.push({event:a,domContentLoaded:Context.domContentLoaded})},G=function(){Context.pageLoaded||!D||console.log("env: load Event!");Context.domContentLoaded=!0;Context.pageLoaded=!0;B();safeDocument.removeEventListener("DOMContentLoaded",
C,!1);safeDocument.removeEventListener("load",G,!1)},L=function(){safeDocument.removeEventListener("DOMNodeInserted",K,!1);safeDocument.removeEventListener("DOMContentLoaded",C,!1);safeDocument.removeEventListener("load",G,!1);safeWindow.removeEventListener("unload",L,!1);if(null!=v){for(var a=v.get(),b=0;b<a.length;b++)a[b]();v=null}chromeEmu.clean&&chromeEmu.clean()},B=function(){for(var a=A.length;0<A.length;)A.shift().fn();window.setTimeout(function(){s&&(s=null)},2E3);return a},U=function(a){if(document.body)a&&
(a(),a=null);else{var b=["load","DOMNodeInserted","DOMContentLoaded"],d=function(){b.forEach(function(a){safeDocument.removeEventListener(a,d,!1)});U(a)};b.forEach(function(a){safeDocument.addEventListener(a,d,!1)})}},V=function(a){A.push({fn:a});Context.domContentLoaded?B():D&&console.log("env: schedule for later events!")},ka=function(a){return V(function(){safeWindow.setTimeout(a,1)})},z=null,W=function(a){z||(z={},["write","writeln"].forEach(function(b){z[b]=a.__proto__[b];a.__proto__[b]=function(){var d=
document.documentElement,c=z[b].apply(a,arguments);d!==document.documentElement&&(z=null,W(document),Context.write_listeners.forEach(function(a){a()}));return c}}))},Q={},x=[],X=function(a,b,d,c){if(!a.__addEventListener){a.__addEventListener=a.addEventListener;a.__removeEventListener=a.removeEventListener;var h=[],e=function(a){for(var b=0;b<h.length;b++)if(h[b].fn===a)return b};a.removeEventListener=function(a,b,c){c=!!c;"DOMNodeInserted"==a&&s&&s.running==b&&(s.running=null);var d,l;if(void 0!==
(d=e(b))&&(l=h[d].listeners)){if(b=l[a+"-"+c])this.__removeEventListener(a,b,c),delete l[a+"-"+c];Object.getOwnPropertyNames(l).length||h.splice(d,1)}else this.__removeEventListener(a,b,c)};var m=function(a,b,c,d){if(b){var e=x.length;b=parseInt(["DOMContentLoaded"==c?1:2,d?1:2,d?b:3-b,(new Date).getTime()].join("0"));for(c=0;c<x.length;c++)if(d=x[c],!d||!d.prio||d.prio>b){e=c;break}x.splice(e,0,{prio:b,fn:a})}else x.push({fn:a})};a.addEventListener=function(a,f,g){if("load"==a||"DOMContentLoaded"==
a||"DOMNodeInserted"==a){g=!!g;var q=!0,l=this;if(!c)try{try{throw Error();}catch(T){var v=/tms_[0-9a-f_]+/;if(T.stack)for(var u=T.stack.split("\n"),r,t=0;t<u.length&&(!(r=u[t].match(v))||!(c=Q[r[0]]));t++);else{var p=function(a,b){void 0===b&&(b=10);if(0==b)return null;if(a.caller){var c,f,d;try{return d=a.caller.toString(),(f=d.match(/^function[^(]+/))&&f.length&&(c=f[0].match(v))?c[0]:p(a.caller,b-1)}catch(e){D&&console.warn("env: unable to detect caller context",e)}}return null};if(t=p(arguments.callee))c=
Q[t]}}}catch(ea){D&&console.error("env: Error: event "+a,ea)}c&&"document-idle"!==c.run_at&&(u=null,"load"==a?Context.pageLoaded&&(u=function(){var a=l.document||l,a=a||document;F("load",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:a,relatedNode:a,srcElement:a},f,l)},q=!1,m(u,b,a,g)):"DOMContentLoaded"==a?Context.domContentLoaded&&(u=function(){var a=l.document||l,a=a||document;F("DOMContentLoaded",{attrName:"null",newValue:"null",
prevValue:"null",eventPhase:Event.AT_TARGET,attrChange:MutationEvent.ADDITION,target:a,relatedNode:a,srcElement:a},f,l)},q=!1,m(u,b,a,g)):"DOMNodeInserted"==a&&s&&!s.done[c.uuid]&&(s.done[c.uuid]=!0,u=function(){var b="document-start"!==c.run_at&&"document-body"!==c.run_at;s.running=f;if(s.running){a:if(s)for(var d=s.events.length,e=0;e<d;e++)if(b&&!s.events[e].domContentLoaded||F("DOMNodeInserted",{attrName:"",newValue:"",prevValue:"",eventPhase:Event.AT_TARGET,target:s.events[e].event.target,relatedNode:s.events[e].event.relatedNode,
srcElement:s.events[e].event.srcElement},f,l),!s.running)break a;l.__addEventListener(a,f,g)}s.running=null},m(u)),u&&(safeWindow.setTimeout(function(){if(x.length){var a=x.shift();a&&a.fn&&a.fn()}},1),q=!1));q&&(q=function(a){return f.call(this,d(a))},void 0===(t=e(f))&&(t=h.length,h.push({fn:f,listeners:{}})),h[t].listeners[a+"-"+g]=q,this.__addEventListener(a,q,g))}else this.__addEventListener(a,f,g)};v.push(function(){a.removeEventListener=a.__removeEventListener;a.addEventListener=a.__addEventListener})}},
la=function(a){a.__evaluate||(a.__evaluate=a.evaluate,a.evaluate=function(a,d,c,h,e){d||(d=this);var m;if("undefined"!=typeof XPathResult){var k=null;try{m=this.__evaluate(a,d,c,h,e)}catch(f){k=f}var g=!1;try{g|=!!m.snapshotLength}catch(q){}try{g|=!!m.singleNodeValue}catch(l){}if(!g&&"."!=a.charAt(0)&&!J(d)){a=("/"==a.charAt(0)?".":"./")+a;try{m=this.__evaluate(a,d,c,h,e)}catch(s){}}if(!g&&k)throw k;}else m=d.selectNodes(a);return m},v.push(function(){a.evaluate=a.__evaluate}))},Y=function(a){v.finalize(a)},
Z=function(a,b,d){var c=TM_context_id+"#"+a,h=null,e=chromeEmu.extension.connect("registerMenuCommand_"+c);e.postMessage({method:"registerMenuCmd",name:a,id:TM_context_id,menuId:c,accessKey:d});e.onMessage.addListener(function(a){a.run&&null!==h&&void 0!==v.get(h)?safeWindow.setTimeout(function(){b()},1):null!==h&&(v.remove(h),h=null)});e.onDisconnect.addListener(function(){e=null});return h=v.push(function(){e&&e.disconnect()},1)},$=function(a,b){"boolean"===typeof b?b={loadInBackground:b}:b||(b=
{});var d=void 0===b.active?void 0===b.loadInBackground?!0:!b.loadInBackground:b.active,c=void 0===b.insert?!0:b.insert,h=null,e=!1,m=null,k,f=chromeEmu.extension.connect("openInTab_"+TM_context_id),g=function(){var a=[];return{run:function(b){b&&a.push(b);if(h)for(;a.length;)a.pop()()}}}();a&&0==a.search(/^\/\//)&&(a=window.location.protocol+a);f.onMessage.addListener(function(a){a.tabId?e?q():(h=a.tabId,g.run()):a.name?k=a.name:a.close&&(e=!0,m&&(m(),m=void 0))});f.onDisconnect.addListener(function(){f=
null});f.postMessage({method:"openInTab",details:{url:a,id:TM_context_id,options:{active:!!d,insert:!!c}},id:TM_context_id});var q=function(){f&&f.postMessage({method:"closeTab",id:TM_context_id})},d={};Object.defineProperties(d,{close:{value:function(){e?D&&console.debug("env: attempt to close already closed tab!"):(e=!0,q())}},closed:{get:function(){return e}},onclose:{get:function(){return m},set:function(a){m=a}},name:{get:function(){return k},set:function(a){g.run(function(){f&&f.postMessage({method:"nameTab",
id:TM_context_id,name:a})})}}});return d},aa=function(a,b){var d=!1,c="Object"===N(a)?a:{url:a,name:b};c.url&&"/"===c.url[0]&&(c.url=window.location.origin+c.url);var h=c.context;delete c.context;var e=chromeEmu.extension.connect("download_"+TM_context_id);e.postMessage({method:"download",details:c,id:TM_context_id});var m=function(a,b){b=b||{};a&&!d&&safeWindow.setTimeout(function(){a.apply(b,[b])},1)};e.onMessage.addListener(function(a){try{a.data&&h&&(a.data.context=h),a.load?c.onload&&(a.data.responseXML&&
(a.data.responseXML=safeWindow.unescape(a.data.responseXML)),m(c.onload,a.data)):a.progress?c.onprogress&&m(c.onprogress,a.data):a.timeout?c.ontimeout&&m(c.ontimeout,a.data):c.onerror&&m(c.onerror,a.data)}catch(b){console.log("env: Error: TM_download - ",b,c)}});return{abort:function(){d=!0}}},ba=function(a){var b=!1;a.url&&"/"===a.url[0]&&(a.url=window.location.origin+a.url);var d=a.context;delete a.context;var c=function(){var a={};Object.getOwnPropertyNames(XMLHttpRequest.__proto__).forEach(function(b){a[b]=
!0});var b=function(){};Object.getOwnPropertyNames(XMLHttpRequest).forEach(function(c){a[c]||(b[c]=XMLHttpRequest[c])});return b}(),h=function(a,d){d=d||{};a&&!b&&safeWindow.setTimeout(function(){d.__proto__=c;a.apply(d,[d])},1)};if("FormData"!==N(a.data)){var e=chromeEmu.extension.connect("xhr_"+TM_context_id),m=[];e.postMessage({method:"xhr",details:a,callbacks:{onloadstart:!!a.onloadstart,onload:!!a.onload,onreadystatechange:!!a.onreadystatechange,onerror:!!a.onerror,ontimeout:!!a.ontimeout,onprogress:!!a.onprogress,
onpartial:!0},id:TM_context_id});e.onMessage.addListener(function(b){try{if(b.data&&d&&(b.data.context=d),b.data&&b.onload){m.length&&(b.data.response_data=m.join(""),m=null);if(b.data.response_data){var c=b.data.response_data,e=b.data.response_types;["response_data","response_types"].forEach(function(a){delete b.data[a]});if(e){var l={response:function(b){var c=a.responseType?a.responseType.toLowerCase():"",d=function(a){for(var c=new Uint8Array(a.length),d=0;d<a.length;d++)c[d]=b.charCodeAt(d);
return c.buffer};return"arraybuffer"==c?d(b):"blob"==c?new Blob([d(b)]):"json"==c?JSON.parse(b):b},responseText:function(a){return a},responseXML:function(a){return(new DOMParser).parseFromString(a,"text/xml")}},k;for(k in l)if(l.hasOwnProperty(k))if(e[k])try{b.data[k]=l[k](c)}catch(s){console.warn("GM_xmlhttpRequest: ",s)}else b.data[k]=null}else console.warn("GM_xmlhttpRequest: got unusual response!"),b.data.responseText=c}h(a.onreadystatechange,b.data);h(a.onload,b.data)}else b.onreadystatechange?
4!=b.data.readyState&&h(a.onreadystatechange,b.data):b.onpartial?m.push(b.data.partial):(l=["onloadstart","onprogress","ontimeout"].filter(function(a){return!!b[a]})[0]||"onerror",h(a[l],b.data))}catch(u){console.log("env: Error: TM_xmlhttpRequest",u,a)}})}else{var k=new XMLHttpRequest;void 0===a.async&&(a.async=!0);k.open(a.method,a.url,a.async,a.user,a.password);if(a.headers)for(e in a.headers)k.setRequestHeader(e,a.headers[e]);a.overrideMimeType&&k.overrideMimeType(a.overrideMimeType);a.responseType&&
(k.responseType=a.responseType);"abort error load loadstart progress readystatechange timeout".split(" ").forEach(function(b){k["on"+b]=function(){var c="",e=a.url;if(2<k.readyState&&(c=k.getAllResponseHeaders(),4==k.readyState)){c&&(c=c.replace(/TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/,""));var l=k.getResponseHeader("TM-finalURL"+Context.short_id);l&&(e=l)}c={readyState:k.readyState,status:"",statusText:"",responseHeaders:c,finalUrl:e,context:d};4==k.readyState&&(k.responseType&&""!=k.responseType?
c.response=k.response:(c.responseText=k.responseText,c.responseXML=k.responseXML),c.status=k.status,c.statusText=k.statusText);h(a["on"+b],c)}});k.send(a.data)}return{abort:function(){b=!0}}},ca=function(a,b){chromeEmu.extension.sendMessage({method:"installScript",url:a,id:TM_context_id},function(a){b&&b(a)})},ga=function(a){chromeEmu.extension.sendMessage({method:"closeTab",id:TM_context_id},function(b){b.error&&console.warn(b.error);a&&a()})},ha=function(a){chromeEmu.extension.sendMessage({method:"focusTab",
id:TM_context_id},function(b){b.error&&console.warn(b.error);a&&a()})},ma=function(a,b){var d=[],c=a.storage,h=a.script.uuid,e=a.script,m=null;(function(){m=chromeEmu.extension.connect("storageListener_"+TM_context_id);m.onMessage.addListener(function(a){if(a.storage)for(var H in a.storage.data)if(a.storage.data.hasOwnProperty(H)){var d=c.data[H];c.data[H]=a.storage.data[H];g(H,d,c.data[H],!0)}a.removed&&(c[a.removed]=b);a.error&&console.log("env: Error: storage listener... :(")});m.postMessage({method:"addStorageListener",
uuid:h,id:TM_context_id})})();var k=function(a){m.postMessage({method:"saveStorageKey",uuid:h,key:a,value:c.data[a],id:TM_context_id,ts:c.ts})},f=function(a,c,d){d===b&&(d=function(a){return a});var e=[],f=null;a&&a.length&&(f={GM_info:!0},a.forEach(function(a){f[a]=!0}));c.forEach(function(a){f&&!f[d(a.name)]||e.push(a)});return e},g=function(a,b,c,e){if(b!=c)for(var f in d)if(d.hasOwnProperty(f)){var h=d[f];if(h&&h.key==a&&h.cb)try{h.cb(a,u(b),u(c),e)}catch(g){D&&console.warn("env: value change listener of '"+
a+"' failed with: "+g.message)}}},q=function(a,b){var c=0;d.forEach(function(a){a.id>c&&(c=a.id)});c++;d.push({id:c,key:a,cb:b});return c},l=function(a){var c;d.every(function(b,d){return b.id==a?(c=d,!1):!0});if(c!==b)return d.splice(c,1),!0},s=function(a){var b=c.data[a];c.ts=(new Date).getTime();delete c.data[a];k(a);g(a,b,c.data[a],!1)},x=function(){var a=[],b;for(b in c.data)c.data.hasOwnProperty(b)&&a.push(b);return a},u=function(a,b){if("string"===typeof a){var c=a[0];a=a.substring(1);switch(c){case "b":return"true"===
a;case "n":return Number(a);case "o":try{return JSON.parse(a)}catch(d){console.log("env: parseValueFromStorage: "+d)}return b;default:return a}}else return b},r=function(a,b){return u(c.data[a],b)},t=function(a,b){var d=c.data[a],e=(typeof b)[0];switch(e){case "o":try{b=e+JSON.stringify(b)}catch(f){console.log(f);return}break;default:b=e+b}c.ts=(new Date).getTime();c.data[a]=b;k(a);g(a,d,c.data[a],!1)},p=function(a){for(var b in e.resources){var c=e.resources[b];if(c.name==a)return c.resText}return null},
z=function(a){for(var b in e.resources){var c=e.resources[b];if(c.name==a)return c.resURL}return null},A=function(a){console.log(a)},B=function(a){try{var b=safeDocument.createElement("style");b.textContent=a;(document.head||document.body||document.documentElement||document).appendChild(b);return b}catch(c){console.log("Error: env: adding style "+c)}},C=function(b,c,d,e,f){var h=null,g={method:"notification",id:TM_context_id},l=["timeout","text","image","title","highlight"],k=null;"object"===typeof b?
k=b:"object"===typeof f&&(k=f);k?(l.forEach(function(a){g[a]=k[a]}),h=k.ondone,e=k.onclick,"function"===typeof c&&(h=c)):("number"===typeof f&&(g.timeout=f),g.image=d,g.title=c,g.text=b);g.text&&(g.image=g.image||a.script.icon64||a.script.icon,g.title=g.title||a.script.name);g.text||g.highlight?chromeEmu.extension.sendMessage(g,function(a){e&&a.clicked&&e();h&&h(!0===a.clicked)}):console.warn("TM_notification: neither a message text nor the hightlight options was given!")},F=function(a,b,c){var d=
typeof b,e="text",f="text/plain";"object"===d?(b.type&&(e=b.type),b.mimetype&&(f=b.mimetype)):"string"===d&&(e=b);chromeEmu.extension.sendMessage({method:"copyToClipboard",data:{content:a,type:e,mimetype:f},id:TM_context_id},function(){c&&c()})},G=function(a){chromeEmu.extension.sendMessage({method:"getTab",id:TM_context_id,uid:e.uuid},function(b){a&&a(b.data)})},O=function(a,b){chromeEmu.extension.sendMessage({method:"setTab",id:TM_context_id,tab:a,uid:e.uuid},function(){b&&b()})},J=function(a){chromeEmu.extension.sendMessage({method:"getTabs",
id:TM_context_id,uid:e.uuid},function(b){a&&a(b.data)})},n=function(a,b){var c=window,d="__u__"+Math.floor(19831206*Math.random()+1),e=d+"_";c[d]=a;c[e]=b;var f=Context.eval.call(window,'window["'+d+'"].apply(this, window["'+e+'"])');delete c[d];delete c[e];return f},w=[],E=null,y;for(y in e.grant)if(e.grant.hasOwnProperty(y)&&"none"===e.grant[y]){E=n;break}var I=e.namespace+"_"+!!E;Context.props[I]===b&&(Context.props[I]={sandboxes:{},elements:{}},v.push(function(){Context.props[I]=null}));if(!E){w.push({name:"window",
value:"context",overwrite:!0});var R={window:window};for(y in R)R.hasOwnProperty(y)&&function(){var a=y.replace(/^(.)/g,function(a){return a.toUpperCase()});w.push({name:"unsafe"+a,value:R[y]})}()}w.push({name:"CDATA",value:function(a){this.src=a;this.toXMLString=this.toString=function(){return this.src}}});w.push({name:"uneval",value:function(a){try{return"\\$1 = "+JSON.stringify(a)+";"}catch(b){console.log(b)}}});Context.use_strong_mode||w.push({name:"undefined",value:b});w.push({name:"define",
value:b});w.push({name:"module",value:b});w.push({name:"console",value:console});E||(w.push({name:"cloneInto",value:function(a){return a}}),w.push({name:"exportFunction",value:function(a,c,d){d&&d.defineAs!==b&&(c[d.defineAs]=a);return a}}),w.push({name:"createObjectIn",value:function(a,c){var d={};c&&c.defineAs!==b&&(a[c.defineAs]=d);return d}}));n=[];n.push({name:"TM_addStyle",value:B});n.push({name:"TM_deleteValue",value:s});n.push({name:"TM_listValues",value:x});n.push({name:"TM_getValue",value:r});
n.push({name:"TM_log",value:A});n.push({name:"TM_registerMenuCommand",value:Z});n.push({name:"TM_unregisterMenuCommand",value:Y});n.push({name:"TM_openInTab",value:$});n.push({name:"TM_setValue",value:t});n.push({name:"TM_addValueChangeListener",value:q});n.push({name:"TM_removeValueChangeListener",value:l});n.push({name:"TM_xmlhttpRequest",value:ba});n.push({name:"TM_download",value:aa});n.push({name:"TM_setClipboard",value:F});n.push({name:"TM_getTab",value:G});n.push({name:"TM_setTab",value:O});
n.push({name:"TM_saveTab",value:O});n.push({name:"TM_getTabs",value:J});n.push({name:"TM_installScript",value:ca});n.push({name:"TM_notification",value:C});n.push({name:"TM_getResourceText",value:p,scriptid:e.uuid});n.push({name:"TM_getResourceURL",value:z,scriptid:e.uuid});n.push({name:"window.close",context_prop:!0});n.push({name:"window.focus",context_prop:!0});var M=[],K=new function(){this.GM_addStyle=function(a){return B(a)};this.GM_deleteValue=function(a){return s(a)};this.GM_listValues=function(){return x()};
this.GM_getValue=function(a,b){return r(a,b)};this.GM_addValueChangeListener=function(a,b){return q(a,b)};this.GM_removeValueChangeListener=function(a){return l(a)};this.GM_log=function(a){return A(a)};this.GM_registerMenuCommand=function(a,b,c){return Z(a,b,c)};this.GM_unregisterMenuCommand=function(a){return Y(a)};this.GM_openInTab=function(a,b){return $(a,b)};this.GM_setValue=function(a,b){return t(a,b)};this.GM_xmlhttpRequest=function(a){return ba(a)};this.GM_download=function(){return aa.apply(this,
arguments)};this.GM_getResourceText=function(a){return p(a)};this.GM_getResourceURL=function(a){return z(a)};this.GM_notification=function(a,b,c,d,e){return C(a,b,c,d,e)};this.GM_installScript=function(a,b){return ca(a,b)};this.GM_getTab=function(a){return G(a)};this.GM_setTab=function(a,b){return O(a,b)};this.GM_saveTab=function(a){return O(a)};this.GM_getTabs=function(a){return J(a)};this.GM_setClipboard=function(a,b,c){return F(a,b,c)};Object.defineProperties(this,{GM_info:{get:function(){var b=
{observers:1,id:1,enabled:1,hash:1,fileURL:1},c={script:{}},d;for(d in e)e.hasOwnProperty(d)&&!b[d]&&(c.script[d]=e[d]);b=e.options.updateURL||e.options.fileURL;c.script["run-at"]=e.options.override.run_at||e.options.run_at;c.script.excludes=e.options.override.orig_excludes;c.script.includes=e.options.override.orig_includes;c.script.matches=e.options.override.orig_matches;c.script.grant=e.grant;c.script.unwrap=!1;c.scriptMetaStr=a.header;c.scriptSource=a.code;c.scriptWillUpdate=!!b;c.scriptUpdateURL=
b;c.version=Context.version;c.scriptHandler="Tampermonkey";c.isIncognito=Context.isIncognito;c.downloadMode=Context.downloadMode;return c},enumerable:!0,configurable:!0}})},L=[];for(y in K)L.push({name:y,value:K[y]});M=M.concat(f(e.grant,n,function(a){return a.replace(/^TM_/,"GM_")}));M=M.concat(f(e.grant,L));w=w.concat(M);e.options.compat_prototypes&&(D&&console.log("env: option: add toSource"),Object.prototype.toSource||Object.defineProperties(Object.prototype,{toSource:{value:function(){var a=
N(this);if("String"===a)return"(String('"+this.replace(/\'/g,"\\'")+"'))";if("Number"===a)return"(Number('"+Number(this)+"'))";if("Array"===a){for(var b="(new Array(",c=0;c<this.length;c++)a=N(this[c]),b="Null"===a?b+"null":"Undefined"===a?b+"undefined":b+this[c].toSource(),c+1<this.length&&(b+=",");return b+"))"}return"JSON.parse(unescape('"+safeWindow.escape(JSON.stringify(this))+"'))"},enumerable:!1,writable:!0,configurable:!0}}),D&&console.log("env: option: add some array generics"),"indexOf lastIndexOf filter forEach every map some slice".split(" ").forEach(function(a){if("function"!==
typeof Array[a]){var b={};b[a]={value:function(b){return Array.prototype[a].apply(b,Array.prototype.slice.call(arguments,1))},enumerable:!1,writable:!0,configurable:!0};Object.defineProperties(Array,b)}}));f="";if(E)n=S();else{var P=ia(w,function(a){la(a);W(a);X(a,2,P.filterEvent)}),n={run_at:a.script.options.run_at,uuid:a.script.uuid},f="tms_"+a.script.uuid.replace(/-/g,"_");Q[f]=n;X(P.context,1,P.filterEvent,n);n=P.context}Context.props[I].sandboxes[a.script.uuid]=n;Context.props[I].elements[a.script.uuid]=
w;D&&console.debug("env: execute script "+e.name+" @ the "+(E?"un":"")+"safe context now!");ja(e,a.code,a.requires,Context.props[I],E,f);v.push(function(){m.postMessage({method:"removeStorageListener",uuid:h,storage:c,id:TM_context_id});try{m.disconnect(),m=null}catch(b){}a=d=null})},da=function(a){var b=function(){ma(a)};"document-start"==a.script.options.run_at?(D&&console.debug("env: run '"+a.script.name+"' ASAP -> document-start"),b()):"document-body"==a.script.options.run_at?(D&&console.debug("env: schedule '"+
a.script.name+"' for document-body"),U(b)):"context-menu"==a.script.options.run_at?(D&&console.debug("env: run '"+a.script.name+"' ASAP -> context-menu"),b()):"document-end"==a.script.options.run_at?(D&&console.debug("env: schedule '"+a.script.name+"' for document-end"),V(b)):(D&&console.debug("env: schedule '"+a.script.name+"' for document-idle"),ka(b))};chromeEmu.extension.onMessage.addListener(function(a,b,d){a.id&&a.id!=TM_context_id?console.warn("env: Not for me! "+TM_context_id+"!="+a.id):(b=
window.self==window.top,"executeScript"==a.method?a.url&&0!==safeWindow.location.href.search(a.url)?D&&console.log("exec: URL doesn't match",safeWindow.location,a):a.topframe&&!b?D&&console.log("exec: topframe doesn't match",window.self,a):da(a):"onLoad"==a.method?(document.readyState&&"complete"!==document.readyState||(Context.domContentLoaded=!0,B()),d({})):b&&("loadUrl"==a.method?(window.location=a.url,d({})):"reload"==a.method?(window.location.reload(),d({})):"confirm"==a.method?safeWindow.setTimeout(function(){var b=
safeWindow.confirm(a.msg);d({confirm:b})},100):"showMsg"==a.method?safeWindow.setTimeout(function(){safeWindow.setTimeout(function(){safeWindow.alert(a.msg)},1);d({})},100):"setForeignAttr"==a.method?(window[a.attr]=a.value,d({})):console.log("env: unknown method "+a.method)))});Context.pageLoaded||(safeDocument.addEventListener("load",G,!1),safeDocument.addEventListener("DOMNodeInserted",K,!1),Context.domContentLoaded||safeDocument.addEventListener("DOMContentLoaded",C,!1));safeWindow.addEventListener("unload",
L,!1);D&&console.debug("env: initialized (content, id:"+TM_context_id+", "+window.location.origin+window.location.pathname+") ");Context.scripts.forEach(da)});