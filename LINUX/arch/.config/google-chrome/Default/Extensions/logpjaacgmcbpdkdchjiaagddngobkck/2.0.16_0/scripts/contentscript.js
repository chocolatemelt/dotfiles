"use strict";var keySettings,globToRegex=function(a){for(var b="\\^$*+?.()|{}[]",c=["^"],d=0;d<a.length;++d){var e=a.charAt(d);"*"===e?c.push(".*"):(b.indexOf(e)>=0&&c.push("\\"),c.push(e))}return c.push("$"),new RegExp(c.join(""))},isAllowedSite=function(a){var b=document.URL,c=!0;if("true"===a.blacklist){for(var d=0;d<a.sitesArray.length;d++)if(b.match(globToRegex(a.sitesArray[d]))){c=!1;break}}else if("whitelist"===a.blacklist){c=!1;for(var e=0;e<a.sitesArray.length;e++)if(b.match(globToRegex(a.sitesArray[e]))){c=!0;break}}return c},fetchConfig=function(a){var b=keySettings.keys;if(b.length>0)for(var c=0;c<b.length;c++)if(b[c].key===a)return b[c];return!1},doAction=function(a){var b,c=a.action,d={};switch("copyurl"===c&&(d.text=document.URL),c){case"top":window.scrollTo(0,0);break;case"bottom":window.scrollTo(0,document.body.scrollHeight);break;case"scrollup":window.scrollBy(0,-50);break;case"scrollupmore":window.scrollBy(0,-500);break;case"scrolldown":window.scrollBy(0,50);break;case"scrolldownmore":window.scrollBy(0,500);break;case"scrollleft":window.scrollBy(-50,0);break;case"scrollleftmore":window.scrollBy(-500,0);break;case"scrollright":window.scrollBy(50,0);break;case"scrollrightmore":window.scrollBy(500,0);break;case"back":history.back();break;case"forward":history.forward();break;case"reload":window.location.reload();break;case"zoomin":b=document.body.style.zoom||1,document.body.style.zoom=(parseFloat(b)+.1).toFixed(1);break;case"zoomout":b=document.body.style.zoom||1,document.body.style.zoom=(parseFloat(b)-.1).toFixed(1);break;case"zoomreset":document.body.style.zoom=1;break;case"javascript":var e=document.createElement("script");e.textContent=a.code.replace(/^\s*javascript:/,""),document.body.appendChild(e),document.body.removeChild(e);break;case"buttonnexttab":a.button&&document.querySelector(a.button).click(),d.action="nexttab",chrome.runtime.sendMessage(d);break;case"disable":break;default:for(var f in a)d[f]=a[f];chrome.runtime.sendMessage(d)}},activateKey=function(a){if(isAllowedSite(a)){var b=function(){return doAction(a),!1};Mousetrap.bind(a.key,b)}};Mousetrap.stopCallback=function(a,b,c){var d=fetchConfig(c);return b.classList.contains("mousetrap")?!0:d.activeInInputs?!1:"INPUT"===b.tagName||"SELECT"===b.tagName||"TEXTAREA"===b.tagName||b.isContentEditable},chrome.runtime.sendMessage({action:"getKeys"},function(a){if(a){keySettings=JSON.parse(a);var b=keySettings.keys;if(b.length>0)for(var c=0;c<b.length;c++)activateKey(b[c])}});