(function(d){var g=function(b,c){var a;if("string"===typeof f)a="G";else{a=f.tracker[b||"default"];if(null===a)return;a=(a||f.tracker["default"]).match(/[0-9]*/g).join("").split("").map(function(a){return String.fromCharCode(a.charCodeAt(0)+23)}).join("")}return[a].concat(c?[c]:[]).join(".")},l=function(){return{tracker:"default UA-40782729-1 script UA-40782729-2 script_update UA-40782729-2".split(" ")}},m=function(){return{options:["default",{sampleRate:1}],tracker:["default","UA-40861355-1","script",
"UA-40861355-2","script_update","UA-40861355-3","error","UA-40861355-4","browser",null]}},q=function(){return"UA-57518333-1"},n={"default":l,gcal:l,G3XV:l,neuu:q,jecn:q,dhdg:m,dcgo:m,bnim:m,mfdh:l,heif:l},f=function(b){var c=b();"string"===typeof c&&(c={tracker:["default",c]});var a,e={options:{},tracker:{}};Object.keys(e).forEach(function(b){if(c[b])for(a=0;a<c[b].length;a+=2)e[b][c[b][a]]=c[b][a+1]});return e}(n[rea.runtime.short_id]||n["default"]),t=[{msg:"Attempting to use a disconnected port object"},
{msg:"Function.prototype.apply: Arguments list has wrong type",url:"event_bindings"},{msg:"Script error."}],r=!1,s=!1,k=!1;d._gaq=d._gaq||[];var u=function(){(function(b,c,a,e){b.GoogleAnalyticsObject="ga";b.ga=b.ga||function(){(b.ga.q=b.ga.q||[]).push(arguments)};b.ga.l=1*new Date;a=c.createElement("script");e=c.getElementsByTagName("script")[0];a.async=!0;a.src="https://ssl.google-analytics.com/analytics.js";e.parentNode.insertBefore(a,e)})(d,document)},h=function(b){b&&d.ga.apply(d,arguments)},
w=function(){if(!s){u();var b=[],c=null,a=!d.localStorage;a&&(c={storage:"none",clientId:d.localStorage.getItem("ga_clientId")});var e={};Object.keys(f.tracker).forEach(function(a){var d=g(a);d&&!e[d]&&(e[d]=!0,b.push(["create",f.tracker[a],"auto",d].concat(c?[c]:[])),Object.keys((f.options||{})[a]||[]).forEach(function(c){b.push([d+".set",c,f.options[a][c]])}),b.push([d+".set","checkProtocolTask",null]),b.push([d+".set","anonymizeIp",!0]))});b.forEach(function(a){d.ga.apply(d,a)});a&&h(function(){d.localStorage.setItem("ga_clientId",
d.ga.getByName(g()).get("clientId"))});h(g("pageview","send"),"pageview",d.location.pathname||d.location.href);n[rea.runtime.short_id]||window.setTimeout(v,3E4);s=!0}},v=function(){k&&h(g("extension","send"),"event","Extension","ID",rea.runtime.id+" @ "+navigator.userAgent,null,{nonInteraction:!0})},p=function(b,c,a){if(k&&b.search){void 0===c&&(c="");void 0===a&&(c+=" "+window.location.href,a="");var e=!1;t.forEach(function(a){if(a.msg||a.url)a.msg&&-1==b.search(a.msg)||a.url&&-1==c.search(a.url)||
(e=!0)});e||h(g("error","send"),"event","Error",b,c+":"+a,null,{nonInteraction:!0})}};Registry.register("statistics","58",{init:function(b,c){window.onerror=function(a,e,d,g,f){p(a,c+" "+b+"@"+rea.extension.urls.prepareForReport(e),[d+":"+g,f?f.stack:""].join(";"))};document.onsecuritypolicyviolation=function(a){p("CSP violation of "+a.effectiveDirective,c+" "+b+"@"+rea.extension.urls.prepareForReport(a.documentURI),[a.sourceFile," -> ",a.lineNumber+":"+a.columnNumber,a?a.stack:""].join(";"))};
r=!0},setEnabled:function(b){r&&!Registry.isDevVersion("statistics")&&(k=b)&&w()},tB:function(b){if(k){var c="";b.updated&&(c="Updated");h(g("browser","send"),"event","Browser",c,navigator.userAgent,null,{nonInteraction:!0})}},tS:function(b,c,a){if(k){var e="",d;"i"===a?(e="Installed",b+=" <"+(c?c:"?")+">"):"u"===a?(e="Updated",d=g("script_update","send")):"b"===a?(e="Blacklisted",b+=" <"+(c?c:"?")+">"):"m"===a?(e="Revealed",b=c):e="Removed";h(d||g("script","send"),"event","Script",e,b,null,{nonInteraction:!1})}},
tE:p,tG:function(b,c,a){if(k){var d="",f="";"clicked"===b?(f="Click",d=c+":"+a):"button"===b?(f="Button",d=c):"dialog"===b&&(f="Dialog");h(g("begging","send"),"event","Begging",f,d,null,{nonInteraction:!1})}}})})(window);
