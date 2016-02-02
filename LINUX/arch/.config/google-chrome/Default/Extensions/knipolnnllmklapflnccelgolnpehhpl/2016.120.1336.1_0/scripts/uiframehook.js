"use strict";this.default_uiframehook=this.default_uiframehook||{};(function(_){var window=this;
try{
_.aa=_.aa||{};_.k=this;_.ba="closure_uid_"+(1E9*Math.random()>>>0);_.ca=Date.now||function(){return+new Date};
}catch(e){_._DumpException(e)}
try{
var da,ea,ga;_.l=function(a){return void 0!==a};da=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}};ea=function(a,b,c){return a.call.apply(a.bind,arguments)};
ga=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b};_.p=function(a,b){function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Kd=function(a,c,f){for(var h=Array(arguments.length-2),m=2;m<arguments.length;m++)h[m-2]=arguments[m];return b.prototype[c].apply(a,h)}};
_.ha=function(a,b){var c=a.split("."),d=_.k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&_.l(b)?d[e]=b:d[e]?d=d[e]:d=d[e]={}};_.q=function(a,b,c){_.q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:da;return _.q.apply(null,arguments)};_.ia=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b};_.ja=function(a){return"function"==ga(a)};_.ka=function(a){return"number"==typeof a};
_.r=function(a){return"string"==typeof a};_.la=function(a){var b=ga(a);return"array"==b||"object"==b&&"number"==typeof a.length};_.t=function(a){return"array"==ga(a)};_.ma=function(a){a.Aa=function(){return a.Ib?a.Ib:a.Ib=new a}};_.na=function(){};_.oa=function(a){a=a.split(".");for(var b=_.k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b};_.pa=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,_.pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}; _.p(_.pa,Error);_.pa.prototype.name="CustomError";
var ra,ua;_.qa=function(a){return/^[\s\xa0]*$/.test(a)};ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};_.sa=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};_.ta=function(a){return null==a?"":String(a)};
_.va=function(a,b){for(var c=0,d=ra(String(a)).split("."),e=ra(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var m=d[h]||"",n=e[h]||"",u=RegExp("(\\d*)(\\D*)","g"),X=RegExp("(\\d*)(\\D*)","g");do{var ya=u.exec(m)||["","",""],fa=X.exec(n)||["","",""];if(0==ya[0].length&&0==fa[0].length)break;c=ua(0==ya[1].length?0:(0,window.parseInt)(ya[1],10),0==fa[1].length?0:(0,window.parseInt)(fa[1],10))||ua(0==ya[2].length,0==fa[2].length)||ua(ya[2],fa[2])}while(0==c)}return c}; ua=function(a,b){return a<b?-1:a>b?1:0};
var wa;wa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(_.r(a))return _.r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};_.v=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
_.xa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h=_.r(a)?a.split(""):a,m=0;m<d;m++)if(m in h){var n=h[m];b.call(c,n,m,a)&&(e[f++]=n)}return e};_.za=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=_.r(a)?a.split(""):a,h=0;h<d;h++)h in f&&(e[h]=b.call(c,f[h],h,a));return e};
_.Aa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=_.r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};_.Ca=function(a,b){var c=_.Ba(a,b,void 0);return 0>c?null:_.r(a)?a.charAt(c):a[c]};_.Ba=function(a,b,c){for(var d=a.length,e=_.r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1};_.Da=function(a,b){return 0<=wa(a,b)};
_.Ea=function(a,b){var c=wa(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d};_.Fa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)};_.Ga=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};
a:{var Ia=_.k.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){_.Ha=Ja;break a}}_.Ha=""}_.w=function(a){return-1!=_.Ha.indexOf(a)};var La,Ma,Na;_.Ka=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};La=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};Ma=function(a){return null!==a&&"withCredentials"in a};Na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");_.Oa=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Na.length;f++)c=Na[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
var Pa=function(){return _.w("Opera")||_.w("OPR")},Qa=function(){return(_.w("Chrome")||_.w("CriOS"))&&!Pa()&&!_.w("Edge")};var Ra;Ra=function(){return _.w("iPhone")&&!_.w("iPod")&&!_.w("iPad")};_.Sa=function(){return _.w("Windows")};var Ta,Ua,Xa,ab,bb,cb,db,fb;Ta=Pa();_.x=_.w("Trident")||_.w("MSIE");Ua=_.w("Edge");_.Va=_.w("Gecko")&&!(-1!=_.Ha.toLowerCase().indexOf("webkit")&&!_.w("Edge"))&&!(_.w("Trident")||_.w("MSIE"))&&!_.w("Edge");_.Wa=-1!=_.Ha.toLowerCase().indexOf("webkit")&&!_.w("Edge");Xa=_.k.navigator||null;_.Ya=Xa&&Xa.platform||"";_.Za=_.w("Macintosh");_.$a=_.Sa();
ab=function(){var a=_.Ha;if(_.Va)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(_.x)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(_.Wa)return/WebKit\/(\S+)/.exec(a)};bb=function(){var a=_.k.document;return a?a.documentMode:void 0};cb=function(){if(Ta&&_.k.opera){var a;var b=_.k.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=ab())&&(a=b?b[1]:"");return _.x&&(b=bb(),b>(0,window.parseFloat)(a))?String(b):a}();db={}; _.eb=function(a){return db[a]||(db[a]=0<=_.va(cb,a))};fb=_.k.document;_.gb=fb&&_.x?bb()||("CSS1Compat"==fb.compatMode?(0,window.parseInt)(cb,10):5):void 0;
var hb,ib,jb,kb,mb;hb=_.w("Firefox");ib=Ra()||_.w("iPod");jb=_.w("iPad");kb=_.w("Android")&&!(Qa()||_.w("Firefox")||Pa()||_.w("Silk"));_.lb=Qa();mb=_.w("Safari")&&!(Qa()||_.w("Coast")||Pa()||_.w("Edge")||_.w("Silk")||_.w("Android"))&&!(Ra()||_.w("iPad")||_.w("iPod"));
var nb,pb,ob,sb,ub,rb;nb=function(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("c`"+a);};_.qb=function(a){var b=[];ob(new pb,a,b);return b.join("")};pb=function(){};
ob=function(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(_.t(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ob(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),rb(d,c),c.push(":"),ob(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":rb(b,c);break;case "number":c.push((0,window.isFinite)(b)&&
!(0,window.isNaN)(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("d`"+typeof b);}}};sb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"};ub=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;rb=function(a,b){b.push('"',a.replace(ub,function(a){var b=sb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),sb[a]=b);return b}),'"')};
_.y=function(){this.V=this.V;this.H=this.H};_.y.prototype.V=!1;_.y.prototype.aa=function(){this.V||(this.V=!0,this.J())};_.y.prototype.J=function(){if(this.H)for(;this.H.length;)this.H.shift()()};var vb="StopIteration"in _.k?_.k.StopIteration:{message:"StopIteration",stack:""},wb=function(){};wb.prototype.next=function(){throw vb;};wb.prototype.wa=function(){return this};
var xb=function(a){if(a instanceof wb)return a;if("function"==typeof a.wa)return a.wa(!1);if(_.la(a)){var b=0,c=new wb;c.next=function(){for(;;){if(b>=a.length)throw vb;if(b in a)return a[b++];b++}};return c}throw Error("g");},yb=function(a,b){if(_.la(a))try{(0,_.v)(a,b,void 0)}catch(c){if(c!==vb)throw c;}else{a=xb(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==vb)throw c;}}},zb=function(a){if(_.la(a))return _.Ga(a);a=xb(a);var b=[];yb(a,function(a){b.push(a)});return b};
_.Ab=function(a,b){this.b={};this.a=[];this.c=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("b");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof _.Ab?(c=a.ba(),d=a.X()):(c=La(a),d=_.Ka(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}};_.Ab.prototype.X=function(){Bb(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};_.Ab.prototype.ba=function(){Bb(this);return this.a.concat()};_.Db=function(a,b){return Cb(a.b,b)};
_.Ab.prototype.clear=function(){this.b={};this.c=this.g=this.a.length=0};_.Ab.prototype.remove=function(a){return Cb(this.b,a)?(delete this.b[a],this.g--,this.c++,this.a.length>2*this.g&&Bb(this),!0):!1};var Bb=function(a){if(a.g!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Cb(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.g!=a.a.length){for(var e={},c=b=0;b<a.a.length;)d=a.a[b],Cb(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}};_.g=_.Ab.prototype;
_.g.get=function(a,b){return Cb(this.b,a)?this.b[a]:b};_.g.set=function(a,b){Cb(this.b,a)||(this.g++,this.a.push(a),this.c++);this.b[a]=b};_.g.forEach=function(a,b){for(var c=this.ba(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};_.g.clone=function(){return new _.Ab(this)};_.g.wa=function(a){Bb(this);var b=0,c=this.c,d=this,e=new wb;e.next=function(){if(c!=d.c)throw Error("h");if(b>=d.a.length)throw vb;var e=d.a[b++];return a?e:d.b[e]};return e}; var Cb=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};
_.Eb=function(a){if(a.X&&"function"==typeof a.X)return a.X();if(_.r(a))return a.split("");if(_.la(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return _.Ka(a)};
_.Fb=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(_.la(a)||_.r(a))(0,_.v)(a,b,void 0);else{var c;if(a.ba&&"function"==typeof a.ba)c=a.ba();else if(a.X&&"function"==typeof a.X)c=void 0;else if(_.la(a)||_.r(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=La(a);for(var d=_.Eb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};
var Gb=function(a,b,c){this.c=c;this.g=a;this.h=b;this.b=0;this.a=null};Gb.prototype.get=function(){var a;0<this.b?(this.b--,a=this.a,this.a=a.next,a.next=null):a=this.g();return a};var Hb=function(a,b){a.h(b);a.b<a.c&&(a.b++,b.next=a.a,a.a=b)};var Lb;_.Ib=[];_.Jb=[];_.Kb=!1;Lb=function(a){_.Ib[_.Ib.length]=a;if(_.Kb)for(var b=0;b<_.Jb.length;b++)a((0,_.q)(_.Jb[b].b,_.Jb[b]))};var Mb,Ob,Pb,Nb;Mb=function(a){_.k.setTimeout(function(){throw a;},0)};_.Qb=function(a,b){var c=a;b&&(c=(0,_.q)(a,b));c=Nb(c);!_.ja(_.k.setImmediate)||_.k.Window&&_.k.Window.prototype&&!_.w("Edge")&&_.k.Window.prototype.setImmediate==_.k.setImmediate?(Ob||(Ob=Pb()),Ob(c)):_.k.setImmediate(c)};
Pb=function(){var a=_.k.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!_.w("Presto")&&(a=function(){var a=window.document.createElement("IFRAME");a.style.display="none";a.src="";window.document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=(0,_.q)(function(a){if(("*"==
d||a.origin==d)&&a.data==c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!_.w("Trident")&&!_.w("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(_.l(c.next)){c=c.next;var a=c.Db;c.Db=null;a()}};return function(a){d.next={Db:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof window.document&&"onreadystatechange"in window.document.createElement("SCRIPT")?function(a){var b=
window.document.createElement("SCRIPT");b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};window.document.documentElement.appendChild(b)}:function(a){_.k.setTimeout(a,0)}};Nb=function(a){return a};Lb(function(a){Nb=a});
var Rb=function(){this.b=this.a=null},Tb=new Gb(function(){return new Sb},function(a){a.reset()},100);Rb.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};var Sb=function(){this.next=this.b=this.a=null};Sb.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Sb.prototype.reset=function(){this.next=this.b=this.a=null};
var Yb=function(a,b){Ub||Vb();Wb||(Ub(),Wb=!0);var c=Xb,d=Tb.get();d.set(a,b);c.b?c.b.next=d:c.a=d;c.b=d},Ub,Vb=function(){if(_.k.Promise&&_.k.Promise.resolve){var a=_.k.Promise.resolve(void 0);Ub=function(){a.then(Zb)}}else Ub=function(){_.Qb(Zb)}},Wb=!1,Xb=new Rb,Zb=function(){for(var a=null;a=Xb.remove();){try{a.a.call(a.b)}catch(b){Mb(b)}Hb(Tb,a)}Wb=!1};
_.$b=function(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0};_.ac=function(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};var dc,ec,ic,gc,nc,lc,jc,kc,pc,oc,qc;_.cc=function(a,b){this.a=0;this.j=void 0;this.c=this.b=this.g=null;this.h=this.H=!1;if(a!=_.na)try{var c=this;a.call(b,function(a){_.bc(c,2,a)},function(a){_.bc(c,3,a)})}catch(d){_.bc(this,3,d)}};dc=function(){this.next=this.context=this.b=this.c=this.a=null;this.g=!1};dc.prototype.reset=function(){this.context=this.b=this.c=this.a=null;this.g=!1};ec=new Gb(function(){return new dc},function(a){a.reset()},100);
_.fc=function(a,b,c){var d=ec.get();d.c=a;d.b=b;d.context=c;return d};_.cc.prototype.then=function(a,b,c){return gc(this,_.ja(a)?a:null,_.ja(b)?b:null,c)};_.$b(_.cc);_.cc.prototype.l=function(a){0==this.a&&Yb(function(){var b=new _.hc(a);ic(this,b)},this)};
ic=function(a,b){if(0==a.a)if(a.g){var c=a.g;if(c.b){for(var d=0,e=null,f=null,h=c.b;h&&(h.g||(d++,h.a==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.a&&1==d?ic(c,b):(f?(d=f,d.next==c.c&&(c.c=d),d.next=d.next.next):jc(c),kc(c,e,3,b)))}a.g=null}else _.bc(a,3,b)};_.mc=function(a,b){a.b||2!=a.a&&3!=a.a||lc(a);a.c?a.c.next=b:a.b=b;a.c=b};
gc=function(a,b,c,d){var e=_.fc(null,null,null);e.a=new _.cc(function(a,h){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(u){h(u)}}:a;e.b=c?function(b){try{var e=c.call(d,b);!_.l(e)&&b instanceof _.hc?h(b):a(e)}catch(u){h(u)}}:h});e.a.g=a;_.mc(a,e);return e.a};_.cc.prototype.D=function(a){this.a=0;_.bc(this,2,a)};_.cc.prototype.L=function(a){this.a=0;_.bc(this,3,a)};
_.bc=function(a,b,c){if(0==a.a){a==c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;var d;a:{var e=c,f=a.D,h=a.L;if(e instanceof _.cc)_.mc(e,_.fc(f||_.na,h||null,a)),d=!0;else if(_.ac(e))e.then(f,h,a),d=!0;else{if(_.ia(e))try{var m=e.then;if(_.ja(m)){nc(e,m,f,h,a);d=!0;break a}}catch(n){h.call(a,n);d=!0;break a}d=!1}}d||(a.j=c,a.a=b,a.g=null,lc(a),3!=b||c instanceof _.hc||oc(a,c))}};
nc=function(a,b,c,d,e){var f=!1,h=function(a){f||(f=!0,c.call(e,a))},m=function(a){f||(f=!0,d.call(e,a))};try{b.call(a,h,m)}catch(n){m(n)}};lc=function(a){a.H||(a.H=!0,Yb(a.v,a))};jc=function(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.c=null);return b};_.cc.prototype.v=function(){for(var a=null;a=jc(this);)kc(this,a,this.a,this.j);this.H=!1};
kc=function(a,b,c,d){if(3==c&&b.b&&!b.g)for(;a&&a.h;a=a.g)a.h=!1;if(b.a)b.a.g=null,pc(b,c,d);else try{b.g?b.c.call(b.context):pc(b,c,d)}catch(e){qc.call(null,e)}Hb(ec,b)};pc=function(a,b,c){2==b?a.c.call(a.context,c):a.b&&a.b.call(a.context,c)};oc=function(a,b){a.h=!0;Yb(function(){a.h&&qc.call(null,b)})};qc=Mb;_.hc=function(a){_.pa.call(this,a)};_.p(_.hc,_.pa);_.hc.prototype.name="cancel";
var sc;_.rc=!_.x||9<=+_.gb;sc=_.x&&!_.eb("9");!_.Wa||_.eb("528");_.Va&&_.eb("1.9b")||_.x&&_.eb("8")||Ta&&_.eb("9.5")||_.Wa&&_.eb("528");_.Va&&!_.eb("8")||_.x&&_.eb("9");_.z=function(a,b){this.type="undefined"!=typeof _.tc&&a instanceof _.tc?String(a):a;this.g=this.target=b;this.c=!1;this.Pb=!0};_.z.prototype.l=function(){this.c=!0};_.z.prototype.b=function(){this.Pb=!1};var uc=function(a){uc[" "](a);return a};uc[" "]=_.na;_.vc=function(a,b){try{return uc(a[b]),!0}catch(c){}return!1};var wc=function(a,b){_.z.call(this,a?a.type:"");this.g=this.target=null;this.keyCode=this.clientY=this.clientX=0;this.j=this.v=this.h=this.H=!1;this.a=this.state=null;if(a){this.type=a.type;var c=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;var d=a.relatedTarget;d&&_.Va&&_.vc(d,"nodeName");null===c?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY):(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=
void 0!==c.clientY?c.clientY:c.pageY);this.keyCode=a.keyCode||0;this.H=a.ctrlKey;this.h=a.altKey;this.v=a.shiftKey;this.j=a.metaKey;this.state=a.state;this.a=a;a.defaultPrevented&&this.b()}};_.p(wc,_.z);wc.prototype.l=function(){wc.G.l.call(this);this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0}; wc.prototype.b=function(){wc.G.b.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,sc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};
var xc,zc;xc="closure_listenable_"+(1E6*Math.random()|0);_.yc=function(a){return!(!a||!a[xc])};zc=0;var Ac=function(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.Ma=!!d;this.Za=e;this.key=++zc;this.removed=this.Wa=!1},Bc=function(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.Za=null};var Dc;_.Cc=function(a){this.src=a;this.a={};this.b=0};_.Ec=function(a,b,c,d,e,f){var h=b.toString();b=a.a[h];b||(b=a.a[h]=[],a.b++);var m=Dc(b,c,e,f);-1<m?(a=b[m],d||(a.Wa=!1)):(a=new Ac(c,a.src,h,!!e,f),a.Wa=d,b.push(a));return a};_.Cc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.a))return!1;var e=this.a[a];b=Dc(e,b,c,d);return-1<b?(Bc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.a[a],this.b--),!0):!1};
var Fc=function(a,b){var c=b.type;c in a.a&&_.Ea(a.a[c],b)&&(Bc(b),0==a.a[c].length&&(delete a.a[c],a.b--))};_.Cc.prototype.removeAll=function(a){a=a&&a.toString();var b=0,c;for(c in this.a)if(!a||c==a){for(var d=this.a[c],e=0;e<d.length;e++)++b,Bc(d[e]);delete this.a[c];this.b--}return b};_.Gc=function(a,b,c,d,e){a=a.a[b.toString()];b=-1;a&&(b=Dc(a,c,d,e));return-1<b?a[b]:null};Dc=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.Ma==!!c&&f.Za==d)return e}return-1};
var Ic,Qc,Pc,Sc;_.Hc="closure_lm_"+(1E6*Math.random()|0);Ic={};_.Jc=0;_.Kc=function(a,b,c,d,e){if(_.t(b))for(var f=0;f<b.length;f++)_.Kc(a,b[f],c,d,e);else c=_.Lc(c),_.yc(a)?a.ab(b,c,d,e):a&&(a=_.Mc(a))&&(b=_.Gc(a,b,c,!!d,e))&&_.Nc(b)};_.Nc=function(a){if(!_.ka(a)&&a&&!a.removed){var b=a.src;if(_.yc(b))Fc(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.Ma):b.detachEvent&&b.detachEvent(_.Oc(c),d);_.Jc--;(c=_.Mc(b))?(Fc(c,a),0==c.b&&(c.src=null,b[_.Hc]=null)):Bc(a)}}};
_.Oc=function(a){return a in Ic?Ic[a]:Ic[a]="on"+a};Qc=function(a,b,c,d){var e=!0;if(a=_.Mc(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Ma==c&&!f.removed&&(f=Pc(f,d),e=e&&!1!==f)}return e};Pc=function(a,b){var c=a.listener,d=a.Za||a.src;a.Wa&&_.Nc(a);return c.call(d,b)};
_.Rc=function(a,b){if(a.removed)return!0;if(!_.rc){var c=b||_.oa("window.event"),d=new wc(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.g;f;f=f.parentNode)c.push(f);for(var f=a.type,h=c.length-1;!d.c&&0<=h;h--){d.g=c[h];var m=Qc(c[h],f,!0,d),e=e&&m}for(h=0;!d.c&&h<c.length;h++)d.g=c[h],m=Qc(c[h],f,!1,d),e=e&&m}return e}return Pc(a,new wc(b,this))}; _.Mc=function(a){a=a[_.Hc];return a instanceof _.Cc?a:null};Sc="__closure_events_fn_"+(1E9*Math.random()>>>0);_.Lc=function(a){if(_.ja(a))return a;a[Sc]||(a[Sc]=function(b){return a.handleEvent(b)});return a[Sc]};Lb(function(a){_.Rc=a(_.Rc)});
_.A=function(){_.y.call(this);this.g=new _.Cc(this);this.sa=this;this.D=null};_.p(_.A,_.y);_.A.prototype[xc]=!0;_.A.prototype.L=function(a){this.D=a};_.A.prototype.removeEventListener=function(a,b,c,d){_.Kc(this,a,b,c,d)};
_.B=function(a,b){var c,d=a.D;if(d)for(c=[];d;d=d.D)c.push(d);var d=a.sa,e=b,f=e.type||e;if(_.r(e))e=new _.z(e,d);else if(e instanceof _.z)e.target=e.target||d;else{var h=e,e=new _.z(f,d);_.Oa(e,h)}var h=!0,m;if(c)for(var n=c.length-1;!e.c&&0<=n;n--)m=e.g=c[n],h=m.T(f,!0,e)&&h;e.c||(m=e.g=d,h=m.T(f,!0,e)&&h,e.c||(h=m.T(f,!1,e)&&h));if(c)for(n=0;!e.c&&n<c.length;n++)m=e.g=c[n],h=m.T(f,!1,e)&&h;return h};_.g=_.A.prototype;_.g.J=function(){_.A.G.J.call(this);this.g&&this.g.removeAll(void 0);this.D=null};
_.g.listen=function(a,b,c,d){return _.Ec(this.g,String(a),b,!1,c,d)};_.g.Ya=function(a,b,c,d){return _.Ec(this.g,String(a),b,!0,c,d)};_.g.ab=function(a,b,c,d){return this.g.remove(String(a),b,c,d)};_.g.T=function(a,b,c){a=this.g.a[String(a)];if(!a)return!0;a=a.concat();for(var d=!0,e=0;e<a.length;++e){var f=a[e];if(f&&!f.removed&&f.Ma==b){var h=f.listener,m=f.Za||f.src;f.Wa&&Fc(this.g,f);d=!1!==h.call(m,c)&&d}}return d&&0!=c.Pb};
var Tc=function(){};Tc.prototype.a=null;var Vc=function(a){var b;(b=a.a)||(b={},Uc(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Wc,Xc=function(){};_.p(Xc,Tc);var Yc=function(a){return(a=Uc(a))?new window.ActiveXObject(a):new window.XMLHttpRequest},Uc=function(a){if(!a.b&&"undefined"==typeof window.XMLHttpRequest&&"undefined"!=typeof window.ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new window.ActiveXObject(d),a.b=d}catch(e){}}throw Error("k");}return a.b};Wc=new Xc;
_.Zc=function(a,b,c){if(_.ja(a))c&&(a=(0,_.q)(a,c));else if(a&&"function"==typeof a.handleEvent)a=(0,_.q)(a.handleEvent,a);else throw Error("l");return 2147483647<+b?-1:_.k.setTimeout(a,b||0)};_.$c=function(a){_.k.clearTimeout(a)};var ad=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,bd=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?(0,window.decodeURIComponent)(h.replace(/\+/g," ")):"")}};
var cd=function(a){_.A.call(this);this.Ea=new _.Ab;this.I=a||null;this.b=!1;this.F=this.a=null;this.S="";this.j=0;this.h="";this.c=this.N=this.v=this.M=!1;this.l=0;this.B=null;this.ga="";this.Z=this.qa=!1},dd,ed,nd,ld,jd,od,pd;_.p(cd,_.A);dd=/^https?$/i;ed=["POST","PUT"];_.fd=[];_.gd=function(a,b,c,d,e,f,h){var m=new cd;_.fd.push(m);b&&m.listen("complete",b);m.Ya("ready",m.ta);f&&(m.l=Math.max(0,f));h&&(m.qa=h);m.send(a,c,d,e)};cd.prototype.ta=function(){this.aa();_.Ea(_.fd,this)};
cd.prototype.send=function(a,b,c,d){if(this.a)throw Error("m`"+this.S+"`"+a);b=b?b.toUpperCase():"GET";this.S=a;this.h="";this.j=0;this.M=!1;this.b=!0;this.a=this.I?Yc(this.I):Yc(Wc);this.F=this.I?Vc(this.I):Vc(Wc);this.a.onreadystatechange=(0,_.q)(this.fa,this);try{this.N=!0,this.a.open(b,String(a),!0),this.N=!1}catch(f){hd(this,f);return}a=c||"";var e=this.Ea.clone();d&&_.Fb(d,function(a,b){e.set(b,a)});d=_.Ca(e.ba(),id);c=_.k.FormData&&a instanceof _.k.FormData;!_.Da(ed,b)||d||c||e.set("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.ga&&(this.a.responseType=this.ga);Ma(this.a)&&(this.a.withCredentials=this.qa);try{jd(this),0<this.l&&((this.Z=kd(this.a))?(this.a.timeout=this.l,this.a.ontimeout=(0,_.q)(this.la,this)):this.B=_.Zc(this.la,this.l,this)),this.v=!0,this.a.send(a),this.v=!1}catch(f){hd(this,f)}};
var kd=function(a){return _.x&&_.eb(9)&&_.ka(a.timeout)&&_.l(a.ontimeout)},id=function(a){return"content-type"==a.toLowerCase()};cd.prototype.la=function(){"undefined"!=typeof _.aa&&this.a&&(this.h="Timed out after "+this.l+"ms, aborting",this.j=8,_.B(this,"timeout"),this.a&&this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1,this.j=8,_.B(this,"complete"),_.B(this,"abort"),ld(this)))};
var hd=function(a,b){a.b=!1;a.a&&(a.c=!0,a.a.abort(),a.c=!1);a.h=b;a.j=5;md(a);ld(a)},md=function(a){a.M||(a.M=!0,_.B(a,"complete"),_.B(a,"error"))};cd.prototype.J=function(){this.a&&(this.b&&(this.b=!1,this.c=!0,this.a.abort(),this.c=!1),ld(this,!0));cd.G.J.call(this)};cd.prototype.fa=function(){this.V||(this.N||this.v||this.c?nd(this):this.Y())};cd.prototype.Y=function(){nd(this)};
nd=function(a){if(a.b&&"undefined"!=typeof _.aa&&(!a.F[1]||4!=od(a)||2!=pd(a)))if(a.v&&4==od(a))_.Zc(a.fa,0,a);else if(_.B(a,"readystatechange"),4==od(a)){a.b=!1;try{if(_.qd(a))_.B(a,"complete"),_.B(a,"success");else{a.j=6;var b;try{b=2<od(a)?a.a.statusText:""}catch(c){b=""}a.h=b+" ["+pd(a)+"]";md(a)}}finally{ld(a)}}};ld=function(a,b){if(a.a){jd(a);var c=a.a,d=a.F[0]?_.na:null;a.a=null;a.F=null;b||_.B(a,"ready");try{c.onreadystatechange=d}catch(e){}}};
jd=function(a){a.a&&a.Z&&(a.a.ontimeout=null);_.ka(a.B)&&(_.$c(a.B),a.B=null)};_.qd=function(a){var b=pd(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.S).match(ad)[1]||null,!a&&_.k.self&&_.k.self.location&&(a=_.k.self.location.protocol,a=a.substr(0,a.length-1)),b=!dd.test(a?a.toLowerCase():"");c=b}return c};od=function(a){return a.a?a.a.readyState:0};pd=function(a){try{return 2<od(a)?a.a.status:-1}catch(b){return-1}}; Lb(function(a){cd.prototype.Y=a(cd.prototype.Y)});
var xd,Fd,yd,Ad,zd,Dd,Bd,wd,Gd;_.C=function(a,b){this.b=this.j=this.h="";this.c=null;this.l=this.a="";this.H=!1;var c;a instanceof _.C?(this.H=_.l(b)?b:a.H,_.rd(this,a.h),this.j=a.j,this.b=a.b,_.sd(this,a.c),this.a=a.a,_.td(this,a.g.clone()),_.ud(this,a.l)):a&&(c=String(a).match(ad))?(this.H=!!b,_.rd(this,c[1]||"",!0),this.j=_.vd(c[2]||""),this.b=_.vd(c[3]||"",!0),_.sd(this,c[4]),this.a=_.vd(c[5]||"",!0),_.td(this,c[6]||"",!0),_.ud(this,c[7]||"",!0)):(this.H=!!b,this.g=new wd(null,0,this.H))};
_.C.prototype.toString=function(){var a=[],b=this.h;b&&a.push(xd(b,yd,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.j)&&a.push(xd(b,yd,!0),"@"),a.push((0,window.encodeURIComponent)(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.c,null!=c&&a.push(":",String(c));if(c=this.a)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(xd(c,"/"==c.charAt(0)?zd:Ad,!0));(c=this.g.toString())&&a.push("?",c);(c=this.l)&&a.push("#",xd(c,Bd));return a.join("")};_.C.prototype.clone=function(){return new _.C(this)};
_.rd=function(a,b,c){a.h=c?_.vd(b,!0):b;a.h&&(a.h=a.h.replace(/:$/,""))};_.sd=function(a,b){if(b){b=+b;if((0,window.isNaN)(b)||0>b)throw Error("o`"+b);a.c=b}else a.c=null};_.td=function(a,b,c){b instanceof wd?(a.g=b,Cd(a.g,a.H)):(c||(b=xd(b,Dd)),a.g=new wd(b,0,a.H))};_.ud=function(a,b,c){a.l=c?_.vd(b):b;return a};_.Ed=function(a){return a instanceof _.C?a.clone():new _.C(a,void 0)};_.vd=function(a,b){return a?b?(0,window.decodeURI)(a.replace(/%25/g,"%2525")):(0,window.decodeURIComponent)(a):""};
xd=function(a,b,c){return _.r(a)?(a=(0,window.encodeURI)(a).replace(b,Fd),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null};Fd=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)};yd=/[#\/\?@]/g;Ad=/[\#\?:]/g;zd=/[\#\?]/g;Dd=/[\#\?@]/g;Bd=/#/g;wd=function(a,b,c){this.b=this.a=null;this.g=a||null;this.c=!!c};
Gd=function(a){a.a||(a.a=new _.Ab,a.b=0,a.g&&bd(a.g,function(b,c){var d=(0,window.decodeURIComponent)(b.replace(/\+/g," "));Gd(a);a.g=null;var d=Hd(a,d),e=a.a.get(d);e||a.a.set(d,e=[]);e.push(c);a.b=a.b+1}))};wd.prototype.remove=function(a){Gd(this);a=Hd(this,a);return _.Db(this.a,a)?(this.g=null,this.b=this.b-this.a.get(a).length,this.a.remove(a)):!1};wd.prototype.clear=function(){this.a=this.g=null;this.b=0};var Id=function(a,b){Gd(a);b=Hd(a,b);return _.Db(a.a,b)};
wd.prototype.ba=function(){Gd(this);for(var a=this.a.X(),b=this.a.ba(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};wd.prototype.X=function(a){Gd(this);var b=[];if(_.r(a))Id(this,a)&&(b=_.Fa(b,this.a.get(Hd(this,a))));else{a=this.a.X();for(var c=0;c<a.length;c++)b=_.Fa(b,a[c])}return b};wd.prototype.set=function(a,b){Gd(this);this.g=null;a=Hd(this,a);Id(this,a)&&(this.b=this.b-this.a.get(a).length);this.a.set(a,[b]);this.b=this.b+1;return this};
wd.prototype.get=function(a,b){var c=a?this.X(a):[];return 0<c.length?String(c[0]):b};_.Jd=function(a,b,c){a.remove(b);0<c.length&&(a.g=null,a.a.set(Hd(a,b),_.Ga(c)),a.b=a.b+c.length)};wd.prototype.toString=function(){if(this.g)return this.g;if(!this.a)return"";for(var a=[],b=this.a.ba(),c=0;c<b.length;c++)for(var d=b[c],e=(0,window.encodeURIComponent)(String(d)),d=this.X(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+(0,window.encodeURIComponent)(String(d[f])));a.push(h)}return this.g=a.join("&")};
wd.prototype.clone=function(){var a=new wd;a.g=this.g;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};var Hd=function(a,b){var c=String(b);a.c&&(c=c.toLowerCase());return c},Cd=function(a,b){b&&!a.c&&(Gd(a),a.g=null,a.a.forEach(function(a,b){var e=b.toLowerCase();b!=e&&(this.remove(b),_.Jd(this,e,a))},a));a.c=b};
var Kd;Kd=function(a){return(a=a.exec(_.Ha))?a[1]:""};_.Ld=function(){if(hb)return Kd(/Firefox\/([0-9.]+)/);if(_.x||Ua||Ta)return cb;if(_.lb)return Kd(/Chrome\/([0-9.]+)/);if(mb&&!(Ra()||_.w("iPad")||_.w("iPod")))return Kd(/Version\/([0-9.]+)/);if(ib||jb){var a;if(a=/Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ha))return a[1]+"."+a[2]}else if(kb)return(a=Kd(/Android\s+([0-9.]+)/))?a:Kd(/Version\/([0-9.]+)/);return""}();
var Md=function(a){this.b=a;this.g="empty";this.a=null};Md.prototype.setVersion=function(a){this.g=a;return this};Md.prototype.Ra=function(a){this.a=a;return this};var Nd=function(){};var Od=function(){};_.p(Od,Nd);Od.prototype.clear=function(){var a=zb(this.wa(!0)),b=this;(0,_.v)(a,function(a){b.remove(a)})};var Pd=function(a){this.a=a};_.p(Pd,Od);_.g=Pd.prototype;_.g.isAvailable=function(){if(!this.a)return!1;try{return this.a.setItem("__sak","1"),this.a.removeItem("__sak"),!0}catch(a){return!1}};_.g.set=function(a,b){try{this.a.setItem(a,b)}catch(c){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};_.g.get=function(a){a=this.a.getItem(a);if(!_.r(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};_.g.remove=function(a){this.a.removeItem(a)};
_.g.wa=function(a){var b=0,c=this.a,d=new wb;d.next=function(){if(b>=c.length)throw vb;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!_.r(d))throw"Storage mechanism: Invalid value was encountered";return d};return d};_.g.clear=function(){this.a.clear()};_.g.key=function(a){return this.a.key(a)};
var Qd=function(){var a=null;try{a=window.localStorage||null}catch(b){}this.a=a};_.p(Qd,Pd);var Sd=function(a,b){this.g=a;this.a=[];this.b=null;b&&(this.b=new Qd);if(null!=this.b&&this.b.isAvailable()){var c=this.b.get("__webmonitoring_RateThrottler_history_hourlyRate");if(null!=c)try{this.a=nb(c)||[]}catch(d){}}c=!1;_.t(this.a)||(this.a=[],c=!0);for(;this.a.length>this.g;)this.a.shift(),c=!0;c&&Rd(this)},Rd=function(a){if(null!=a.b&&a.b.isAvailable())try{a.b.set("__webmonitoring_RateThrottler_history_hourlyRate",_.qb(a.a))}catch(b){}};
_.Td=function(a){_.y.call(this);this.a=a;this.c=!1};_.p(_.Td,_.y);_.Td.prototype.setEnabled=function(a){this.c=a};var D=function(a){_.Td.call(this,a);this.D=100;this.l={};this.$=null;this.g="";this.L=!0;this.h=10;this.b=null;this.v=!1};_.p(D,_.Td);D.prototype.Vb=function(a){this.L=a;return this};D.prototype.setUseLocalStorage=D.prototype.Vb;D.prototype.td=function(a){this.h=Math.min(a,100);return this};D.prototype.setMaxErrorsPerHour=D.prototype.td;D.prototype.Tb=function(a){this.D=a;return this};D.prototype.setGlobalSampling=D.prototype.Tb;D.prototype.Ab=function(a,b){this.l[a]=b;return this};
D.prototype.addPerErrorMessageSampling=D.prototype.Ab;D.prototype.Sb=function(a){this.$=a;return this};D.prototype.setCallback=D.prototype.Sb;D.prototype.rd=function(a){this.g=a;return this};D.prototype.setClientId=D.prototype.rd;D.prototype.enable=function(){if(this.c)return!1;this.j=window.onerror;window.onerror=this.F.bind(this);this.setEnabled(!0);return!0};D.prototype.enable=D.prototype.enable;
D.prototype.Nb=function(a,b,c,d,e){var f=_.Ed(window.location.href);a=null!=e&&null!=e.message?e.message:a;var h;if(h=!_.ja(this.$)||this.$(f.a,a,b,c,d,e)){h=Object.keys(this.l);for(var m=100,n=0;n<h.length;++n){var u=h[n];(new RegExp(u)).test(a)&&(m=this.l[u])}if(h=(100*Math.random()).toFixed(6)>=this.D*m/100?!1:!0){0<=this.h&&null===this.b&&(this.b=new Sd(this.h,this.L));if(null===this.b)h=0;else{a:{h=this.b;m=(0,_.ca)();if(h.a.length==h.g)if(h.a[0]<m-36E5)h.a.shift();else{h=!1;break a}h.a.push(m);
Rd(h);h=!0}h=!h}h=!h}}h&&(h=Ud(this,f,a,b,c,d),h.product=this.a.b,h.version=this.a.g,Vd(this,"https://clients2.google.com/webmon",Wd(h),Xd(a,null!=e?_.ta(e.stack):"")),this.v&&(b=Ud(this,f,a,b,c,d),b.prod=this.a.b,b.ver=this.a.g,Vd(this,"https://clients2.google.com/cr/staging_report",Wd(b),Xd(a,null!=e?_.ta(e.stack):"")),e={product:this.a.b,url:f.a,js_errors_count:"1"},f=_.ta(this.a.a),_.qa(f)||(e.version=f),Vd(this,"https://clients2.google.com/cr/staging_perf",Wd(e))))};D.prototype.reportError=D.prototype.Nb;
D.prototype.F=function(a,b,c,d,e){this.Nb(a,b,c,d,e);null!=this.j&&_.ja(this.j)&&this.j(a,b,c,d,e)};
var Ud=function(a,b,c,d,e,f){b=b.a;var h;h="Other";Ta?h="Opera":_.x?h="Internet Explorer":hb?h="Firefox":_.lb?h="Chrome":mb&&(h="Safari");var m=_.w("CrOS")?"Chrome OS":_.w("Linux")?"Linux":_.Sa()?"Windows":_.w("Android")?"Android":Ra()?"iPhone":_.w("iPad")?"iPad":_.w("iPod")?"iPod":_.w("Macintosh")?"Mac":"Unknown",n=_.Ha,u="";_.Sa()?(u=/Windows (?:NT|Phone) ([0-9.]+)/,u=(n=u.exec(n))?n[1]:"0.0"):Ra()||_.w("iPad")||_.w("iPod")?(u=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,u=(n=u.exec(n))&&n[1].replace(/_/g,
".")):_.w("Macintosh")?(u=/Mac OS X ([0-9_.]+)/,u=(n=u.exec(n))?n[1].replace(/_/g,"."):"10"):_.w("Android")?(u=/Android\s+([^\);]+)(\)|;)/,u=(n=u.exec(n))&&n[1]):_.w("CrOS")&&(u=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,u=(n=u.exec(n))&&n[1]);c={url:b,type:"JavascriptError",error_message:c,browser:h,browser_version:_.Ld,os:m,os_version:u||""};null!=a.a.a&&(c.channel=a.a.a);_.qa(a.g)||(c.guid=a.g);null!=d&&(c.src=d);null!=e&&(c.line=e);null!=f&&(c.column=f);return c},Xd=function(a,b){if(_.qa(a))return b;
var c=b.split("\n");-1<c[0].indexOf(a)&&(c.splice(0,1),b=c.join("\n"));return b},Wd=function(a){var b="",c;for(c in a)b+=_.qa(b)?"?":"&",b+=c+"="+(0,window.encodeURIComponent)(a[c]);return b},Vd=function(a,b,c,d){d=d||"";var e=_.qa(d)?{}:{"Content-Type":"text/plain"};_.gd(b+c,a.B.bind(a,b),"POST",d,e,6E4,!0)};D.prototype.B=function(a,b){_.qd(b.target)};
var Yd=function(a){_.y.call(this);this.da=new Md(a);this.a={}};_.p(Yd,_.y);_.ha("webmonitoring.Monitoring",Yd);Yd.prototype.setVersion=function(a){this.da.setVersion(a);return this};Yd.prototype.setVersion=Yd.prototype.setVersion;Yd.prototype.Ra=function(a){this.da.Ra(a);return this};Yd.prototype.setChannel=Yd.prototype.Ra;Yd.prototype.Xa=function(){null!=this.a[2]||(this.a[2]=new D(this.da));return this.a[2]};Yd.prototype.createJsErrorsReporter=Yd.prototype.Xa;
var Zd=function(a){Yd.call(this,a)};_.p(Zd,Yd);Zd.prototype.setVersion=function(a){return Zd.G.setVersion.call(this,a)};Zd.prototype.Ra=function(a){return Zd.G.Ra.call(this,a)};Zd.prototype.Xa=function(){var a=Zd.G.Xa.call(this);a.v=!0;return a};_.$d=function(){Yd.call(this,"ultraviolet");this.setVersion(window.chrome.runtime.id)};_.p(_.$d,Zd);_.ma(_.$d);_.ae=function(){_.$d.Aa().Xa().Vb(!1).Tb(100).Ab("Script error.",0).enable()};_.$d.Aa();
}catch(e){_._DumpException(e)}
try{
_.vh="https://support.google.com/chrome/answer/185277?hl="+window.chrome.i18n.getMessage("@@ui_locale");window.chrome.i18n.getMessage("@@ui_locale");_.wh="https://support.google.com/hangouts/?p=chrome_desktop_app_outdated&hl="+window.chrome.i18n.getMessage("@@ui_locale");

}catch(e){_._DumpException(e)}
try{
_.ha("_DumpException",function(a){window.console.error(a.stack)});_.ae();window.open("","centralRoster")._OnUiFrameReady(window);
}catch(e){_._DumpException(e)}
}).call(this,this.default_uiframehook);
// Google Inc.
