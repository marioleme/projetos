_va.run=function(){var a=_va.getQueryStringParameter("vatpsessinfo");a&&(a=a.split("-"),_va.setCookie("va_tpkey",a[0]),_va.setCookie("va_tpsessionid",a[1]));_va.server=_va.getCookie("va_server");_va.sessionid=_va.getCookie("va_sessionid");_va.tpserver=_va.getCookie("va_tpserver");_va.tpkey=_va.getCookie("va_tpkey");_va.tpsessionid=_va.getCookie("va_tpsessionid");_va.pva_enabled=_va.getCookie("va_pva_enabled");_va.key&&_va.startTrack(!1);_va.tpkey&&_va.startTrack(!0);window.addEventListener?window.addEventListener("load",
_va.calcLoadTime,!1):window.attachEvent&&window.attachEvent("onload",_va.calcLoadTime);1==_va.singlepage&&(_va.currenturl=window.location.href,setInterval(function(){_va.currenturl!=window.location.href&&(_va.currenturl=window.location.href,_va.trackNow())},1E3))};
_va.startTrack=function(a){var b=a?_va.tpserver:_va.server;b&&"disabled"!=b?_va.track(a):(b="?sitekey="+encodeURIComponent(a?_va.tpkey:_va.key)+"&tp="+a,a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=document.location.protocol+"//license.maxly.com/api/getlicense.php"+b,b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))};
_va.track=function(a){var b=a?_va.tpserver:_va.server,c=a?_va.tpkey:_va.key,d=a?_va.tpsessionid:_va.sessionid,e=1==_va.singlepage;a||"#va"!=location.hash||_va.setCookie("va_enablewidget",1);1==_va.getCookie("va_enablewidget")?_va.startWidget(b):(c="?sitekey="+encodeURIComponent(c)+"&tp="+a+"&sessionid="+encodeURIComponent(d)+"&useragent="+encodeURIComponent(navigator.userAgent)+"&url="+encodeURIComponent(window.location.href)+"&referrer="+encodeURIComponent(document.referrer)+"&singlepage="+e+"&random="+
Math.random(),a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=document.location.protocol+"//"+b+".maxly.com/api/view.php"+c,b=document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))};_va.trackNow=function(){_va.startWidget=function(){};_va.track(!1)};_va.processConvQueue=function(a){var b=a?_va.tpcqueue:_va.cqueue;if(b&&b.length)for(var c=0;c<b.length;c++)_va.convert(b[c],a)};
_va.convert=function(a,b){var c=b?_va.tpserver:_va.server,d=b?_va.tpkey:_va.key,e=b?_va.tpsessionid:_va.sessionid;if(null==c||null==e)b?(_va.tpcqueue=_va.tpcqueue||[],_va.tpcqueue.push(a)):(_va.cqueue=_va.cqueue||[],_va.cqueue.push(a));else{var g=0,f=a.indexOf(",");0<=f&&(g=a.substring(f+1),a=a.substring(0,f));e="?sitekey="+encodeURIComponent(d)+"&goalkey="+encodeURIComponent(a)+"&revenue="+encodeURIComponent(g)+"&sessionid="+encodeURIComponent(e)+"&random="+Math.random();d=document.createElement("script");
d.type="text/javascript";d.async=!0;d.src=document.location.protocol+"//"+c+".maxly.com/api/convert.php"+e;c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(d,c)}};_va.calcLoadTime=function(){_va.loadtime=(new Date).getTime()-_va.starttime;_va.key&&_va.reportLoadTime(!1);_va.tpkey&&_va.reportLoadTime(!0)};
_va.reportLoadTime=function(a){var b=a?_va.tpserver:_va.server,c=a?_va.tpkey:_va.key,d=a?_va.tppvid:_va.pvid,e=_va.loadtime;(a?!_va.tploadtimereported:!_va.loadtimereported)&&e&&d&&(a?_va.tploadtimereported=!0:_va.loadtimereported=!0,c="?sitekey="+encodeURIComponent(c)+"&pvid="+encodeURIComponent(d)+"&timems="+encodeURIComponent(e)+"&random="+Math.random(),a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=document.location.protocol+"//"+b+".maxly.com/api/loaded.php"+c,b=
document.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))};_va.startWidget=function(a){var b="?sitekey="+encodeURIComponent(_va.key)+"&server="+encodeURIComponent(a),c=document.createElement("script");c.type="text/javascript";c.async=!0;c.src=document.location.protocol+"//"+a+".maxly.com/api/widgetjs.php"+b;a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)};_va.checkActivityTracking=function(){1==_va.pva_enabled&&_va.initActivityTracking()};
_va.initActivityTracking=function(){_va.pva_socket&&(_va.sendWindowBlur(),_va.pva_socket.close());_va.pva_socket=!1;_va.pva_currentformelement_obj=null;_va.pva_currentformelement_starttime=0;_va.pva_windowfocus_starttime=0;_va.pva_allinputs=null;_va.pva_ended=!1;"loaded"==document.readyState||"interactive"==document.readyState||"complete"==document.readyState?_va.createPvaSocketAndListeners():window.addEventListener&&window.addEventListener("DOMContentLoaded",_va.createPvaSocketAndListeners,!1)};
_va.createPvaSocketAndListeners=function(){"WebSocket"in window&&(_va.pva_socket=new WebSocket(("https:"==document.location.protocol?"wss":"ws")+"://s1.maxly.com","maxly-protocol"),_va.pva_socket.onopen=function(){_va.sendToSocket([{action:"init",tserver:_va.server,pvid:_va.pvid,clientstart:_va.starttime}]);window.addEventListener("mousedown",_va.sendClick,!1);for(var a=_va.HTMLCollectionToArray(document.getElementsByTagName("form")),b=0;b<a.length;b++)a[b].addEventListener("submit",_va.sendFormSubmit,
!1);!document.activeElement||"INPUT"!=document.activeElement.tagName&&"SELECT"!=document.activeElement.tagName&&"TEXTAREA"!=document.activeElement.tagName||(b={},b.target=document.activeElement,_va.markFieldFocus(b));_va.pva_allinputs=_va.HTMLCollectionToArray(document.getElementsByTagName("input"));_va.pva_allinputs=_va.pva_allinputs.concat(_va.HTMLCollectionToArray(document.getElementsByTagName("select")));_va.pva_allinputs=_va.pva_allinputs.concat(_va.HTMLCollectionToArray(document.getElementsByTagName("textarea")));
a=[];for(b=0;b<_va.pva_allinputs.length;b++){var c=_va.pva_allinputs[b];_va.checkFieldFilled(c,a,"prefill");c.addEventListener("focus",_va.markFieldFocus,!1);c.addEventListener("blur",_va.sendFieldBlur,!1)}a.length&&_va.sendToSocket(a);("undefined"===typeof document.hasFocus||document.hasFocus())&&_va.markWindowFocus();window.addEventListener("focus",_va.markWindowFocus,!1);window.addEventListener("blur",_va.sendWindowBlur,!1);window.addEventListener("beforeunload",_va.handleWindowClose,!1);window.addEventListener("pagehide",
_va.handleWindowClose,!1)},_va.pva_socket.onerror=_va.pva_socket.onmessage=_va.pva_socket.onclose=function(){})};_va.sendToSocket=function(a){_va.pva_socket&&_va.pva_socket.readyState&&_va.pva_socket.readyState==WebSocket.OPEN&&_va.pva_socket.send(JSON.stringify(a))};_va.sendClick=function(a){a=a||window.event;a=a.target||a.srcElement;var b=a.getAttribute("href");_va.sendToSocket([{action:"click",offsetms:new Date-_va.starttime,elementname:_va.getElementFullName(a,1),href:b}])};
_va.sendFormSubmit=function(a){a=a||window.event;a=a.target||a.srcElement;var b=a.getAttribute("action");_va.sendToSocket([{action:"submit",offsetms:new Date-_va.starttime,elementname:_va.getElementFullName(a,1),formaction:b}])};_va.markFieldFocus=function(a){a=a||window.event;_va.pva_currentformelement_obj=a.target||a.srcElement;_va.pva_currentformelement_starttime=new Date};
_va.sendFieldBlur=function(a){_va.pva_currentformelement_obj&&(a=_va.pva_currentformelement_obj.value.length,_va.sendToSocket([{action:"field",offsetms:new Date-_va.starttime,elementname:_va.getElementFullName(_va.pva_currentformelement_obj,1),focusms:new Date-_va.pva_currentformelement_starttime,valuelength:a}]),_va.pva_currentformelement_obj=null,_va.pva_currentformelement_starttime=0)};
_va.checkFieldFilled=function(a,b,c){if(""!=a.value&&("text"==a.type||"select-one"==a.type||"textarea"==a.type||"email"==a.type||"textarea"==a.type||"number"==a.type||"password"==a.type||"tel"==a.type||"url"==a.type||"radio"==a.type&&a.checked||"checkbox"==a.type&&a.checked)){var d=a.value.length;b.push({action:c,offsetms:new Date-_va.starttime,elementname:_va.getElementFullName(a,1),valuelength:d})}};_va.markWindowFocus=function(a){_va.pva_windowfocus_starttime=new Date};
_va.sendWindowBlur=function(a){0<_va.pva_windowfocus_starttime&&(_va.sendToSocket([{action:"window",offsetms:new Date-_va.starttime,focusms:new Date-_va.pva_windowfocus_starttime}]),_va.pva_windowfocus_starttime=0)};
_va.handleWindowClose=function(a){if(!_va.pva_ended){_va.sendFieldBlur();a=[];for(var b=0;b<_va.pva_allinputs.length;b++)_va.checkFieldFilled(_va.pva_allinputs[b],a,"fill");a.length&&_va.sendToSocket(a);_va.sendWindowBlur();_va.sendToSocket([{action:"end",clientend:(new Date).getTime()}]);_va.pva_ended=!0}};_va.cookiedays=1;_va.setCookie=function(a,b){var c=new Date;c.setTime(c.getTime()+864E5*_va.cookiedays);document.cookie=a+"="+b+"; domain="+_va.getDomain()+"; expires="+c.toUTCString()+"; path=/"};
_va.getCookie=function(a){a=document.cookie.split(a+"=");return 2==a.length?a.pop().split(";").shift():null};_va.getDomain=function(){var a=document.domain;if(""!=a){var a=a.split("."),b=a.length-1,c=a.length-2;if(2<a.length&&("co"==a[c]||"com"==a[c])){var b=a.length-1,d=a.length-2,c=a.length-3;return"."+a[c]+"."+a[d]+"."+a[b]}return"."+a[c]+"."+a[b]}return""};
_va.getQueryStringParameter=function(a){return(a=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search))&&decodeURIComponent(a[1].replace(/\+/g," "))};
_va.getElementFullName=function(a,b){try{if(a.id)return"#"+a.id;if(a.parentElement){var c=a.className?a.tagName+":"+a.className.split(" ").join("."):a.tagName;if(1==b&&(a.getAttribute("name")&&(c+=':"'+a.getAttribute("name")+'"'),a.textContent)){var d=a.textContent.replace(/\n/g,"").trim();25<d.length&&(d=d.substring(0,22)+"...");c+=':"'+d+'"'}return"BODY"==a.parentElement.tagName||3<=b?c:_va.getElementFullName(a.parentElement,b+1)+"->"+c}}catch(e){return"UNABLE_TO_NAME_ELEMENT"}return"HTML"};
_va.HTMLCollectionToArray=function(a){for(var b=a.length||0,c=Array(b);b--;)c[b]=a[b];return c};_va.createThirdPartyParameter=function(){return _va.getThirdPartyParameterName()+"="+_va.getThirdPartyParameterValue()};_va.getThirdPartyParameterName=function(){return"vatpsessinfo"};_va.getThirdPartyParameterValue=function(){return _va.key&&_va.sessionid?_va.key+"-"+_va.sessionid:""};_va.prepareVaThirdPartyLink=function(a){var b=-1==a.href.indexOf("?")?"?":"&";a.href=a.href+b+_va.createThirdPartyParameter()};
_va.prepareVaThirdPartyForm=function(a){if("post"==a.method){var b=-1==a.action.indexOf("?")?"?":"&";a.action=a.action+b+_va.createThirdPartyParameter()}else b=document.createElement("input"),b.type="hidden",b.name=_va.getThirdPartyParameterName(),b.value=_va.getThirdPartyParameterValue(),a.appendChild(b)};_va.ran||(_va.ran=!0,_va.run());