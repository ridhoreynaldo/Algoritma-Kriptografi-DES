
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector});}
return els[0];}})();;(function(){var prevEls={};CloudflareApps.createElement=function(options,prevEl){CloudflareApps.internal.markSelectors();try{if(prevEl&&prevEl.parentNode){var replacedEl;if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId];}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl);delete prevEls[prevEl.cfAppsElementId];}else{prevEl.parentNode.removeChild(prevEl);}}
var element=document.createElement('cloudflare-app');var container;try{container=CloudflareApps.querySelector(options.selector);}catch(e){}
if(!container){return element;}
if(!container.parentNode&&(options.method=="after"||options.method=="before"||options.method=="replace")){return element;}
if(container==document.body){if(options.method=="after")
options.method="append";else if(options.method=="before")
options.method="prepend";}
switch(options.method){case"prepend":if(container.firstChild){container.insertBefore(element,container.firstChild);break;}
case"append":container.appendChild(element);break;case"after":if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling);}else{container.parentNode.appendChild(element);}
break;case"before":container.parentNode.insertBefore(element,container);break;case"replace":try{id=element.cfAppsElementId=Math.random().toString(36);prevEls[id]=container;}catch(e){}
container.parentNode.replaceChild(element,container);}
return element;}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined"){console.error("Error creating Cloudflare Apps element",e);}}}})();;(function(){CloudflareApps.matchPage=function(patterns){if(!patterns||!patterns.length){return true;}
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed;var loc=url.host+url.path;}else{var loc=document.location.host+document.location.pathname;}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i');if(re.test(loc)){return true;}}
return false;}})();;CloudflareApps.installs["vgQQj4xXjc6k"]={appId:"FKAQLLHf4tr5",scope:{}};;CloudflareApps.installs["vgQQj4xXjc6k"].options={"behavior":{"outMode":"out"},"fewerParticles":true,"interaction":{"onClick":"push","onHover":"grab"},"showAdvanced":true};;CloudflareApps.installs["ReDR8WQOfaUT"]={appId:"t8Sk01am_9iA",scope:{}};;CloudflareApps.installs["ReDR8WQOfaUT"].options={"advancedOptions":{"disableOnAJAX":false,"disableOnPushState":true},"color":"purple","hidePage":false,"showAdvanced":true,"theme":"minimal"};;CloudflareApps.installs["iSZW6n3Vjx_C"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["iSZW6n3Vjx_C"].options={"id":"UA-23771752-1","social":true};;if(CloudflareApps.matchPage(CloudflareApps.installs['ReDR8WQOfaUT'].URLPatterns)){window.paceOptions=window.paceOptions||{};window.paceOptions.restartOnPushState=false;};if(CloudflareApps.matchPage(CloudflareApps.installs['ReDR8WQOfaUT'].URLPatterns)){(function(){var AjaxMonitor,Bar,DocumentMonitor,ElementMonitor,ElementTracker,EventLagMonitor,Evented,Events,NoTargetError,Pace,RequestIntercept,SOURCE_KEYS,Scaler,SocketRequestTracker,XHRRequestTracker,animation,avgAmplitude,bar,cancelAnimation,cancelAnimationFrame,defaultOptions,extend,extendNative,getFromDOM,getIntercept,handlePushState,ignoreStack,init,now,options,paceHideStyle,requestAnimationFrame,result,runAnimation,scalers,shouldIgnoreURL,shouldTrack,source,sources,uniScaler,_WebSocket,_XDomainRequest,_XMLHttpRequest,_i,_intercept,_len,_pushState,_ref,_ref1,_replaceState,__slice=[].slice,__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;};defaultOptions={hidePage:false,catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:true,ignoreURLs:[]}};now=function(){var _ref;return(_ref=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?_ref:+(new Date);};requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(requestAnimationFrame==null){requestAnimationFrame=function(fn){return setTimeout(fn,50);};cancelAnimationFrame=function(id){return clearTimeout(id);};}
runAnimation=function(fn){var last,tick;last=now();tick=function(){var diff;diff=now()-last;if(diff>=33){last=now();return fn(diff,function(){return requestAnimationFrame(tick);});}else{return setTimeout(tick,33-diff);}};return tick();};result=function(){var args,key,obj;obj=arguments[0],key=arguments[1],args=3<=arguments.length?__slice.call(arguments,2):[];if(typeof obj[key]==='function'){return obj[key].apply(obj,args);}else{return obj[key];}};extend=function(){var key,out,source,sources,val,_i,_len;out=arguments[0],sources=2<=arguments.length?__slice.call(arguments,1):[];for(_i=0,_len=sources.length;_i<_len;_i++){source=sources[_i];if(source){for(key in source){if(!__hasProp.call(source,key))continue;val=source[key];if((out[key]!=null)&&typeof out[key]==='object'&&(val!=null)&&typeof val==='object'){extend(out[key],val);}else{out[key]=val;}}}}
return out;};avgAmplitude=function(arr){var count,sum,v,_i,_len;sum=count=0;for(_i=0,_len=arr.length;_i<_len;_i++){v=arr[_i];sum+=Math.abs(v);count++;}
return sum/count;};getFromDOM=function(key,json){var data,e,el;if(key==null){key='options';}
if(json==null){json=true;}
el=document.querySelector("[data-pace-"+key+"]");if(!el){return;}
data=el.getAttribute("data-pace-"+key);if(!json){return data;}
try{return JSON.parse(data);}catch(_error){e=_error;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",e):void 0;}};Evented=(function(){function Evented(){}
Evented.prototype.on=function(event,handler,ctx,once){var _base;if(once==null){once=false;}
if(this.bindings==null){this.bindings={};}
if((_base=this.bindings)[event]==null){_base[event]=[];}
return this.bindings[event].push({handler:handler,ctx:ctx,once:once});};Evented.prototype.once=function(event,handler,ctx){return this.on(event,handler,ctx,true);};Evented.prototype.off=function(event,handler){var i,_ref,_results;if(((_ref=this.bindings)!=null?_ref[event]:void 0)==null){return;}
if(handler==null){return delete this.bindings[event];}else{i=0;_results=[];while(i<this.bindings[event].length){if(this.bindings[event][i].handler===handler){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};Evented.prototype.trigger=function(){var args,ctx,event,handler,i,once,_ref,_ref1,_results;event=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];if((_ref=this.bindings)!=null?_ref[event]:void 0){i=0;_results=[];while(i<this.bindings[event].length){_ref1=this.bindings[event][i],handler=_ref1.handler,ctx=_ref1.ctx,once=_ref1.once;handler.apply(ctx!=null?ctx:this,args);if(once){_results.push(this.bindings[event].splice(i,1));}else{_results.push(i++);}}
return _results;}};return Evented;})();Pace=window.Pace||{};window.Pace=Pace;extend(Pace,Evented.prototype);options=Pace.options=extend({},defaultOptions,window.paceOptions,getFromDOM());_ref=['ajax','document','eventLag','elements'];for(_i=0,_len=_ref.length;_i<_len;_i++){source=_ref[_i];if(options[source]===true){options[source]=defaultOptions[source];}}
NoTargetError=(function(_super){__extends(NoTargetError,_super);function NoTargetError(){_ref1=NoTargetError.__super__.constructor.apply(this,arguments);return _ref1;}
return NoTargetError;})(Error);Bar=(function(){function Bar(){this.progress=0;}
Bar.prototype.getElement=function(){var targetElement;if(this.el==null){targetElement=document.querySelector(options.target);if(!targetElement){throw new NoTargetError;}
this.el=document.createElement('div');this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,'');document.body.className+=' pace-running';this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(targetElement.firstChild!=null){targetElement.insertBefore(this.el,targetElement.firstChild);}else{targetElement.appendChild(this.el);}}
return this.el;};Bar.prototype.finish=function(){var el;el=this.getElement();el.className=el.className.replace('pace-active','');el.className+=' pace-inactive';document.body.className=document.body.className.replace('pace-running','');return document.body.className+=' pace-done';};Bar.prototype.update=function(prog){this.progress=prog;return this.render();};Bar.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement());}catch(_error){NoTargetError=_error;}
return this.el=void 0;};Bar.prototype.render=function(){var el,progressStr;if(document.querySelector(options.target)==null){return false;}
el=this.getElement();el.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){el.children[0].setAttribute('data-progress-text',""+(this.progress|0)+"%");if(this.progress>=100){progressStr='99';}else{progressStr=this.progress<10?"0":"";progressStr+=this.progress|0;}
el.children[0].setAttribute('data-progress',""+progressStr);}
return this.lastRenderedProgress=this.progress;};Bar.prototype.done=function(){return this.progress>=100;};return Bar;})();Events=(function(){function Events(){this.bindings={};}
Events.prototype.trigger=function(name,val){var binding,_j,_len1,_ref2,_results;if(this.bindings[name]!=null){_ref2=this.bindings[name];_results=[];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){binding=_ref2[_j];_results.push(binding.call(this,val));}
return _results;}};Events.prototype.on=function(name,fn){var _base;if((_base=this.bindings)[name]==null){_base[name]=[];}
return this.bindings[name].push(fn);};return Events;})();_XMLHttpRequest=window.XMLHttpRequest;_XDomainRequest=window.XDomainRequest;_WebSocket=window.WebSocket;extendNative=function(to,from){var e,key,val,_results;_results=[];for(key in from.prototype){try{val=from.prototype[key];if((to[key]==null)&&typeof val!=='function'){_results.push(to[key]=val);}else{_results.push(void 0);}}catch(_error){e=_error;}}
return _results;};ignoreStack=[];Pace.ignore=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('ignore');ret=fn.apply(null,args);ignoreStack.shift();return ret;};Pace.track=function(){var args,fn,ret;fn=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];ignoreStack.unshift('track');ret=fn.apply(null,args);ignoreStack.shift();return ret;};shouldTrack=function(method){var _ref2;if(method==null){method='GET';}
if(ignoreStack[0]==='track'){return'force';}
if(!ignoreStack.length&&options.ajax){if(method==='socket'&&options.ajax.trackWebSockets){return true;}else if(_ref2=method.toUpperCase(),__indexOf.call(options.ajax.trackMethods,_ref2)>=0){return true;}}
return false;};RequestIntercept=(function(_super){__extends(RequestIntercept,_super);function RequestIntercept(){var monitorXHR,_this=this;RequestIntercept.__super__.constructor.apply(this,arguments);monitorXHR=function(req){var _open;_open=req.open;return req.open=function(type,url,async){if(shouldTrack(type)){_this.trigger('request',{type:type,url:url,request:req});}
return _open.apply(req,arguments);};};window.XMLHttpRequest=function(flags){var req;req=new _XMLHttpRequest(flags);monitorXHR(req);return req;};try{extendNative(window.XMLHttpRequest,_XMLHttpRequest);}catch(_error){}
if(_XDomainRequest!=null){window.XDomainRequest=function(){var req;req=new _XDomainRequest;monitorXHR(req);return req;};try{extendNative(window.XDomainRequest,_XDomainRequest);}catch(_error){}}
if((_WebSocket!=null)&&options.ajax.trackWebSockets){window.WebSocket=function(url,protocols){var req;if(protocols!=null){req=new _WebSocket(url,protocols);}else{req=new _WebSocket(url);}
if(shouldTrack('socket')){_this.trigger('request',{type:'socket',url:url,protocols:protocols,request:req});}
return req;};try{extendNative(window.WebSocket,_WebSocket);}catch(_error){}}}
return RequestIntercept;})(Events);_intercept=null;getIntercept=function(){if(_intercept==null){_intercept=new RequestIntercept;}
return _intercept;};shouldIgnoreURL=function(url){var pattern,_j,_len1,_ref2;_ref2=options.ajax.ignoreURLs;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){pattern=_ref2[_j];if(typeof pattern==='string'){if(url.indexOf(pattern)!==-1){return true;}}else{if(pattern.test(url)){return true;}}}
return false;};getIntercept().on('request',function(_arg){var after,args,request,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(!Pace.running&&(options.restartOnRequestAfter!==false||shouldTrack(type)==='force')){args=arguments;after=options.restartOnRequestAfter||0;if(typeof after==='boolean'){after=0;}
return setTimeout(function(){var stillActive,_j,_len1,_ref2,_ref3,_results;if(type==='socket'){stillActive=request.readyState<2;}else{stillActive=(0<(_ref2=request.readyState)&&_ref2<4);}
if(stillActive){Pace.restart();_ref3=Pace.sources;_results=[];for(_j=0,_len1=_ref3.length;_j<_len1;_j++){source=_ref3[_j];if(source instanceof AjaxMonitor){source.watch.apply(source,args);break;}else{_results.push(void 0);}}
return _results;}},after);}});AjaxMonitor=(function(){function AjaxMonitor(){var _this=this;this.elements=[];getIntercept().on('request',function(){return _this.watch.apply(_this,arguments);});}
AjaxMonitor.prototype.watch=function(_arg){var request,tracker,type,url;type=_arg.type,request=_arg.request,url=_arg.url;if(shouldIgnoreURL(url)){return;}
if(type==='socket'){tracker=new SocketRequestTracker(request);}else{tracker=new XHRRequestTracker(request);}
return this.elements.push(tracker);};return AjaxMonitor;})();XHRRequestTracker=(function(){function XHRRequestTracker(request){var event,size,_j,_len1,_onreadystatechange,_ref2,_this=this;this.progress=0;if(window.ProgressEvent!=null){size=null;request.addEventListener('progress',function(evt){if(evt.lengthComputable){return _this.progress=100*evt.loaded/evt.total;}else{return _this.progress=_this.progress+(100-_this.progress)/2;}},false);_ref2=['load','abort','timeout','error'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}else{_onreadystatechange=request.onreadystatechange;request.onreadystatechange=function(){var _ref3;if((_ref3=request.readyState)===0||_ref3===4){_this.progress=100;}else if(request.readyState===3){_this.progress=50;}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}}
return XHRRequestTracker;})();SocketRequestTracker=(function(){function SocketRequestTracker(request){var event,_j,_len1,_ref2,_this=this;this.progress=0;_ref2=['error','open'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){event=_ref2[_j];request.addEventListener(event,function(){return _this.progress=100;},false);}}
return SocketRequestTracker;})();ElementMonitor=(function(){function ElementMonitor(options){var selector,_j,_len1,_ref2;if(options==null){options={};}
this.elements=[];if(options.selectors==null){options.selectors=[];}
_ref2=options.selectors;for(_j=0,_len1=_ref2.length;_j<_len1;_j++){selector=_ref2[_j];this.elements.push(new ElementTracker(selector));}}
return ElementMonitor;})();ElementTracker=(function(){function ElementTracker(selector){this.selector=selector;this.progress=0;this.check();}
ElementTracker.prototype.check=function(){var _this=this;if(document.querySelector(this.selector)){return this.done();}else{return setTimeout((function(){return _this.check();}),options.elements.checkInterval);}};ElementTracker.prototype.done=function(){return this.progress=100;};return ElementTracker;})();DocumentMonitor=(function(){DocumentMonitor.prototype.states={loading:0,interactive:50,complete:100};function DocumentMonitor(){var _onreadystatechange,_ref2,_this=this;this.progress=(_ref2=this.states[document.readyState])!=null?_ref2:100;_onreadystatechange=document.onreadystatechange;document.onreadystatechange=function(){if(_this.states[document.readyState]!=null){_this.progress=_this.states[document.readyState];}
return typeof _onreadystatechange==="function"?_onreadystatechange.apply(null,arguments):void 0;};}
return DocumentMonitor;})();EventLagMonitor=(function(){function EventLagMonitor(){var avg,interval,last,points,samples,_this=this;this.progress=0;avg=0;samples=[];points=0;last=now();interval=setInterval(function(){var diff;diff=now()-last-50;last=now();samples.push(diff);if(samples.length>options.eventLag.sampleCount){samples.shift();}
avg=avgAmplitude(samples);if(++points>=options.eventLag.minSamples&&avg<options.eventLag.lagThreshold){_this.progress=100;return clearInterval(interval);}else{return _this.progress=100*(3/(avg+3));}},50);}
return EventLagMonitor;})();Scaler=(function(){function Scaler(source){this.source=source;this.last=this.sinceLastUpdate=0;this.rate=options.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=result(this.source,'progress');}}
Scaler.prototype.tick=function(frameTime,val){var scaling;if(val==null){val=result(this.source,'progress');}
if(val>=100){this.done=true;}
if(val===this.last){this.sinceLastUpdate+=frameTime;}else{if(this.sinceLastUpdate){this.rate=(val-this.last)/this.sinceLastUpdate;}
this.catchup=(val-this.progress)/options.catchupTime;this.sinceLastUpdate=0;this.last=val;}
if(val>this.progress){this.progress+=this.catchup*frameTime;}
scaling=1-Math.pow(this.progress/100,options.easeFactor);this.progress+=scaling*this.rate*frameTime;this.progress=Math.min(this.lastProgress+options.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress;};return Scaler;})();sources=null;scalers=null;bar=null;uniScaler=null;animation=null;cancelAnimation=null;Pace.running=false;handlePushState=function(){if(options.restartOnPushState){return Pace.restart();}};if(window.history.pushState!=null){_pushState=window.history.pushState;window.history.pushState=function(){handlePushState();return _pushState.apply(window.history,arguments);};}
if(window.history.replaceState!=null){_replaceState=window.history.replaceState;window.history.replaceState=function(){handlePushState();return _replaceState.apply(window.history,arguments);};}
SOURCE_KEYS={ajax:AjaxMonitor,elements:ElementMonitor,document:DocumentMonitor,eventLag:EventLagMonitor};(init=function(){var type,_j,_k,_len1,_len2,_ref2,_ref3,_ref4;Pace.sources=sources=[];_ref2=['ajax','elements','document','eventLag'];for(_j=0,_len1=_ref2.length;_j<_len1;_j++){type=_ref2[_j];if(options[type]!==false){sources.push(new SOURCE_KEYS[type](options[type]));}}
_ref4=(_ref3=options.extraSources)!=null?_ref3:[];for(_k=0,_len2=_ref4.length;_k<_len2;_k++){source=_ref4[_k];sources.push(new source(options));}
Pace.bar=bar=new Bar;scalers=[];return uniScaler=new Scaler;})();Pace.stop=function(){Pace.trigger('stop');Pace.running=false;bar.destroy();cancelAnimation=true;if(animation!=null){if(typeof cancelAnimationFrame==="function"){cancelAnimationFrame(animation);}
animation=null;}
return init();};Pace.restart=function(){Pace.trigger('restart');Pace.stop();return Pace.start();};Pace.go=function(){var start;Pace.running=true;bar.render();start=now();cancelAnimation=false;return animation=runAnimation(function(frameTime,enqueueNextFrame){var avg,count,done,element,elements,i,j,remaining,scaler,scalerList,sum,_j,_k,_len1,_len2,_ref2;remaining=100-bar.progress;count=sum=0;done=true;for(i=_j=0,_len1=sources.length;_j<_len1;i=++_j){source=sources[i];scalerList=scalers[i]!=null?scalers[i]:scalers[i]=[];elements=(_ref2=source.elements)!=null?_ref2:[source];for(j=_k=0,_len2=elements.length;_k<_len2;j=++_k){element=elements[j];scaler=scalerList[j]!=null?scalerList[j]:scalerList[j]=new Scaler(element);done&=scaler.done;if(scaler.done){continue;}
count++;sum+=scaler.tick(frameTime);}}
avg=sum/count;bar.update(uniScaler.tick(frameTime,avg));if(bar.done()||done||cancelAnimation){bar.update(100);Pace.trigger('done');return setTimeout(function(){bar.finish();Pace.running=false;return Pace.trigger('hide');},Math.max(options.ghostTime,Math.max(options.minTime-(now()-start),0)));}else{return enqueueNextFrame();}});};paceHideStyle=null;Pace.start=function(_options){extend(options,_options);if(options.hidePage){if(!paceHideStyle){paceHideStyle=document.createElement('style');document.head.appendChild(paceHideStyle);}
paceHideStyle.innerHTML="body > *:not(.pace), body:before, body:after { -webkit-transition: opacity .4s ease-in-out; -moz-transition: opacity .4s ease-in-out; -o-transition: opacity .4s ease-in-out; -ms-transition: opacity .4s ease-in-out; transition: opacity .4s ease-in-out } body:not(.pace-done) > *:not(.pace), body:not(.pace-done):before, body:not(.pace-done):after { opacity: 0 }";}else{if(paceHideStyle!=null){paceHideStyle.innerHTML='';}}
Pace.running=true;try{bar.render();}catch(_error){NoTargetError=_error;}
if(!document.querySelector('.pace')){return setTimeout(Pace.start,50);}else{Pace.trigger('start');return Pace.go();}};if(typeof define==='function'&&define.amd){define(function(){return Pace;});}else if(typeof exports==='object'){module.exports=Pace;}else{if(options.startOnPageLoad){Pace.start();}}}).call(this);};if(CloudflareApps.matchPage(CloudflareApps.installs['iSZW6n3Vjx_C'].URLPatterns)){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');};if(CloudflareApps.matchPage(CloudflareApps.installs['iSZW6n3Vjx_C'].URLPatterns)){(function(){var options=CloudflareApps.installs['iSZW6n3Vjx_C'].options
if(!options.id)return
window.ga('create',options.id,'auto')
window.ga('send','pageview')
if(options.social){(function(b){(function(a){"__CF"in b&&"DJS"in b.__CF?b.__CF.DJS.push(a):"addEventListener"in b?b.addEventListener("load",a,!1):b.attachEvent("onload",a)})(function(){"FB"in b&&"Event"in FB&&"subscribe"in FB.Event&&(FB.Event.subscribe("edge.create",function(a){_gaq.push(["_trackSocial","facebook","like",a])}),FB.Event.subscribe("edge.remove",function(a){_gaq.push(["_trackSocial","facebook","unlike",a])}),FB.Event.subscribe("message.send",function(a){_gaq.push(["_trackSocial","facebook","send",a])}));"twttr"in b&&"events"in twttr&&"bind"in twttr.events&&twttr.events.bind("tweet",function(a){if(a){var b;if(a.target&&a.target.nodeName=="IFRAME")a:{if(a=a.target.src){a=a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);b=0;for(var c;c=a[b];++b)if(c.indexOf("url")===0){b=unescape(c.split("=")[1]);break a}}b=void 0}_gaq.push(["_trackSocial","twitter","tweet",b])}})})})(window);}}())};if(CloudflareApps.matchPage(CloudflareApps.installs['vgQQj4xXjc6k'].URLPatterns)){(function(Math){var trimLeft=/^\s+/,trimRight=/\s+$/,tinyCounter=0,mathRound=Math.round,mathMin=Math.min,mathMax=Math.max,mathRandom=Math.random;function tinycolor(color,opts){color=(color)?color:'';opts=opts||{};if(color instanceof tinycolor){return color;}
if(!(this instanceof tinycolor)){return new tinycolor(color,opts);}
var rgb=inputToRGB(color);this._originalInput=color,this._r=rgb.r,this._g=rgb.g,this._b=rgb.b,this._a=rgb.a,this._roundA=mathRound(100*this._a)/100,this._format=opts.format||rgb.format;this._gradientType=opts.gradientType;if(this._r<1){this._r=mathRound(this._r);}
if(this._g<1){this._g=mathRound(this._g);}
if(this._b<1){this._b=mathRound(this._b);}
this._ok=rgb.ok;this._tc_id=tinyCounter++;}
tinycolor.prototype={isDark:function(){return this.getBrightness()<128;},isLight:function(){return!this.isDark();},isValid:function(){return this._ok;},getOriginalInput:function(){return this._originalInput;},getFormat:function(){return this._format;},getAlpha:function(){return this._a;},getBrightness:function(){var rgb=this.toRgb();return(rgb.r*299+rgb.g*587+rgb.b*114)/1000;},getLuminance:function(){var rgb=this.toRgb();var RsRGB,GsRGB,BsRGB,R,G,B;RsRGB=rgb.r/255;GsRGB=rgb.g/255;BsRGB=rgb.b/255;if(RsRGB<=0.03928){R=RsRGB/12.92;}else{R=Math.pow(((RsRGB+0.055)/1.055),2.4);}
if(GsRGB<=0.03928){G=GsRGB/12.92;}else{G=Math.pow(((GsRGB+0.055)/1.055),2.4);}
if(BsRGB<=0.03928){B=BsRGB/12.92;}else{B=Math.pow(((BsRGB+0.055)/1.055),2.4);}
return(0.2126*R)+(0.7152*G)+(0.0722*B);},setAlpha:function(value){this._a=boundAlpha(value);this._roundA=mathRound(100*this._a)/100;return this;},toHsv:function(){var hsv=rgbToHsv(this._r,this._g,this._b);return{h:hsv.h*360,s:hsv.s,v:hsv.v,a:this._a};},toHsvString:function(){var hsv=rgbToHsv(this._r,this._g,this._b);var h=mathRound(hsv.h*360),s=mathRound(hsv.s*100),v=mathRound(hsv.v*100);return(this._a==1)?"hsv("+h+", "+s+"%, "+v+"%)":"hsva("+h+", "+s+"%, "+v+"%, "+this._roundA+")";},toHsl:function(){var hsl=rgbToHsl(this._r,this._g,this._b);return{h:hsl.h*360,s:hsl.s,l:hsl.l,a:this._a};},toHslString:function(){var hsl=rgbToHsl(this._r,this._g,this._b);var h=mathRound(hsl.h*360),s=mathRound(hsl.s*100),l=mathRound(hsl.l*100);return(this._a==1)?"hsl("+h+", "+s+"%, "+l+"%)":"hsla("+h+", "+s+"%, "+l+"%, "+this._roundA+")";},toHex:function(allow3Char){return rgbToHex(this._r,this._g,this._b,allow3Char);},toHexString:function(allow3Char){return'#'+this.toHex(allow3Char);},toHex8:function(){return rgbaToHex(this._r,this._g,this._b,this._a);},toHex8String:function(){return'#'+this.toHex8();},toRgb:function(){return{r:mathRound(this._r),g:mathRound(this._g),b:mathRound(this._b),a:this._a};},toRgbString:function(){return(this._a==1)?"rgb("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+")":"rgba("+mathRound(this._r)+", "+mathRound(this._g)+", "+mathRound(this._b)+", "+this._roundA+")";},toPercentageRgb:function(){return{r:mathRound(bound01(this._r,255)*100)+"%",g:mathRound(bound01(this._g,255)*100)+"%",b:mathRound(bound01(this._b,255)*100)+"%",a:this._a};},toPercentageRgbString:function(){return(this._a==1)?"rgb("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%)":"rgba("+mathRound(bound01(this._r,255)*100)+"%, "+mathRound(bound01(this._g,255)*100)+"%, "+mathRound(bound01(this._b,255)*100)+"%, "+this._roundA+")";},toName:function(){if(this._a===0){return"transparent";}
if(this._a<1){return false;}
return hexNames[rgbToHex(this._r,this._g,this._b,true)]||false;},toFilter:function(secondColor){var hex8String='#'+rgbaToHex(this._r,this._g,this._b,this._a);var secondHex8String=hex8String;var gradientType=this._gradientType?"GradientType = 1, ":"";if(secondColor){var s=tinycolor(secondColor);secondHex8String=s.toHex8String();}
return"progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";},toString:function(format){var formatSet=!!format;format=format||this._format;var formattedString=false;var hasAlpha=this._a<1&&this._a>=0;var needsAlphaFormat=!formatSet&&hasAlpha&&(format==="hex"||format==="hex6"||format==="hex3"||format==="name");if(needsAlphaFormat){if(format==="name"&&this._a===0){return this.toName();}
return this.toRgbString();}
if(format==="rgb"){formattedString=this.toRgbString();}
if(format==="prgb"){formattedString=this.toPercentageRgbString();}
if(format==="hex"||format==="hex6"){formattedString=this.toHexString();}
if(format==="hex3"){formattedString=this.toHexString(true);}
if(format==="hex8"){formattedString=this.toHex8String();}
if(format==="name"){formattedString=this.toName();}
if(format==="hsl"){formattedString=this.toHslString();}
if(format==="hsv"){formattedString=this.toHsvString();}
return formattedString||this.toHexString();},clone:function(){return tinycolor(this.toString());},_applyModification:function(fn,args){var color=fn.apply(null,[this].concat([].slice.call(args)));this._r=color._r;this._g=color._g;this._b=color._b;this.setAlpha(color._a);return this;},lighten:function(){return this._applyModification(lighten,arguments);},brighten:function(){return this._applyModification(brighten,arguments);},darken:function(){return this._applyModification(darken,arguments);},desaturate:function(){return this._applyModification(desaturate,arguments);},saturate:function(){return this._applyModification(saturate,arguments);},greyscale:function(){return this._applyModification(greyscale,arguments);},spin:function(){return this._applyModification(spin,arguments);},_applyCombination:function(fn,args){return fn.apply(null,[this].concat([].slice.call(args)));},analogous:function(){return this._applyCombination(analogous,arguments);},complement:function(){return this._applyCombination(complement,arguments);},monochromatic:function(){return this._applyCombination(monochromatic,arguments);},splitcomplement:function(){return this._applyCombination(splitcomplement,arguments);},triad:function(){return this._applyCombination(triad,arguments);},tetrad:function(){return this._applyCombination(tetrad,arguments);}};tinycolor.fromRatio=function(color,opts){if(typeof color=="object"){var newColor={};for(var i in color){if(color.hasOwnProperty(i)){if(i==="a"){newColor[i]=color[i];}
else{newColor[i]=convertToPercentage(color[i]);}}}
color=newColor;}
return tinycolor(color,opts);};function inputToRGB(color){var rgb={r:0,g:0,b:0};var a=1;var s=null;var v=null;var l=null;var ok=false;var format=false;if(typeof color=="string"){color=stringInputToObject(color);}
if(typeof color=="object"){if(isValidCSSUnit(color.r)&&isValidCSSUnit(color.g)&&isValidCSSUnit(color.b)){rgb=rgbToRgb(color.r,color.g,color.b);ok=true;format=String(color.r).substr(-1)==="%"?"prgb":"rgb";}
else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.v)){s=convertToPercentage(color.s);v=convertToPercentage(color.v);rgb=hsvToRgb(color.h,s,v);ok=true;format="hsv";}
else if(isValidCSSUnit(color.h)&&isValidCSSUnit(color.s)&&isValidCSSUnit(color.l)){s=convertToPercentage(color.s);l=convertToPercentage(color.l);rgb=hslToRgb(color.h,s,l);ok=true;format="hsl";}
if(color.hasOwnProperty("a")){a=color.a;}}
a=boundAlpha(a);return{ok:ok,format:color.format||format,r:mathMin(255,mathMax(rgb.r,0)),g:mathMin(255,mathMax(rgb.g,0)),b:mathMin(255,mathMax(rgb.b,0)),a:a};}
function rgbToRgb(r,g,b){return{r:bound01(r,255)*255,g:bound01(g,255)*255,b:bound01(b,255)*255};}
function rgbToHsl(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,l=(max+min)/2;if(max==min){h=s=0;}
else{var d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,l:l};}
function hslToRgb(h,s,l){var r,g,b;h=bound01(h,360);s=bound01(s,100);l=bound01(l,100);function hue2rgb(p,q,t){if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;}
if(s===0){r=g=b=l;}
else{var q=l<0.5?l*(1+s):l+s-l*s;var p=2*l-q;r=hue2rgb(p,q,h+1/3);g=hue2rgb(p,q,h);b=hue2rgb(p,q,h-1/3);}
return{r:r*255,g:g*255,b:b*255};}
function rgbToHsv(r,g,b){r=bound01(r,255);g=bound01(g,255);b=bound01(b,255);var max=mathMax(r,g,b),min=mathMin(r,g,b);var h,s,v=max;var d=max-min;s=max===0?0:d/max;if(max==min){h=0;}
else{switch(max){case r:h=(g-b)/d+(g<b?6:0);break;case g:h=(b-r)/d+2;break;case b:h=(r-g)/d+4;break;}
h/=6;}
return{h:h,s:s,v:v};}
function hsvToRgb(h,s,v){h=bound01(h,360)*6;s=bound01(s,100);v=bound01(v,100);var i=Math.floor(h),f=h-i,p=v*(1-s),q=v*(1-f*s),t=v*(1-(1-f)*s),mod=i%6,r=[v,q,p,p,t,v][mod],g=[t,v,v,q,p,p][mod],b=[p,p,t,v,v,q][mod];return{r:r*255,g:g*255,b:b*255};}
function rgbToHex(r,g,b,allow3Char){var hex=[pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];if(allow3Char&&hex[0].charAt(0)==hex[0].charAt(1)&&hex[1].charAt(0)==hex[1].charAt(1)&&hex[2].charAt(0)==hex[2].charAt(1)){return hex[0].charAt(0)+hex[1].charAt(0)+hex[2].charAt(0);}
return hex.join("");}
function rgbaToHex(r,g,b,a){var hex=[pad2(convertDecimalToHex(a)),pad2(mathRound(r).toString(16)),pad2(mathRound(g).toString(16)),pad2(mathRound(b).toString(16))];return hex.join("");}
tinycolor.equals=function(color1,color2){if(!color1||!color2){return false;}
return tinycolor(color1).toRgbString()==tinycolor(color2).toRgbString();};tinycolor.random=function(){return tinycolor.fromRatio({r:mathRandom(),g:mathRandom(),b:mathRandom()});};function desaturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s-=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function saturate(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.s+=amount/100;hsl.s=clamp01(hsl.s);return tinycolor(hsl);}
function greyscale(color){return tinycolor(color).desaturate(100);}
function lighten(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l+=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function brighten(color,amount){amount=(amount===0)?0:(amount||10);var rgb=tinycolor(color).toRgb();rgb.r=mathMax(0,mathMin(255,rgb.r-mathRound(255* -(amount/100))));rgb.g=mathMax(0,mathMin(255,rgb.g-mathRound(255* -(amount/100))));rgb.b=mathMax(0,mathMin(255,rgb.b-mathRound(255* -(amount/100))));return tinycolor(rgb);}
function darken(color,amount){amount=(amount===0)?0:(amount||10);var hsl=tinycolor(color).toHsl();hsl.l-=amount/100;hsl.l=clamp01(hsl.l);return tinycolor(hsl);}
function spin(color,amount){var hsl=tinycolor(color).toHsl();var hue=(hsl.h+amount)%360;hsl.h=hue<0?360+hue:hue;return tinycolor(hsl);}
function complement(color){var hsl=tinycolor(color).toHsl();hsl.h=(hsl.h+180)%360;return tinycolor(hsl);}
function triad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+120)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+240)%360,s:hsl.s,l:hsl.l})];}
function tetrad(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+90)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+180)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+270)%360,s:hsl.s,l:hsl.l})];}
function splitcomplement(color){var hsl=tinycolor(color).toHsl();var h=hsl.h;return[tinycolor(color),tinycolor({h:(h+72)%360,s:hsl.s,l:hsl.l}),tinycolor({h:(h+216)%360,s:hsl.s,l:hsl.l})];}
function analogous(color,results,slices){results=results||6;slices=slices||30;var hsl=tinycolor(color).toHsl();var part=360/slices;var ret=[tinycolor(color)];for(hsl.h=((hsl.h-(part*results>>1))+720)%360;--results;){hsl.h=(hsl.h+part)%360;ret.push(tinycolor(hsl));}
return ret;}
function monochromatic(color,results){results=results||6;var hsv=tinycolor(color).toHsv();var h=hsv.h,s=hsv.s,v=hsv.v;var ret=[];var modification=1/results;while(results--){ret.push(tinycolor({h:h,s:s,v:v}));v=(v+modification)%1;}
return ret;}
tinycolor.mix=function(color1,color2,amount){amount=(amount===0)?0:(amount||50);var rgb1=tinycolor(color1).toRgb();var rgb2=tinycolor(color2).toRgb();var p=amount/100;var w=p*2-1;var a=rgb2.a-rgb1.a;var w1;if(w*a==-1){w1=w;}else{w1=(w+a)/(1+w*a);}
w1=(w1+1)/2;var w2=1-w1;var rgba={r:rgb2.r*w1+rgb1.r*w2,g:rgb2.g*w1+rgb1.g*w2,b:rgb2.b*w1+rgb1.b*w2,a:rgb2.a*p+rgb1.a*(1-p)};return tinycolor(rgba);};tinycolor.readability=function(color1,color2){var c1=tinycolor(color1);var c2=tinycolor(color2);return(Math.max(c1.getLuminance(),c2.getLuminance())+0.05)/(Math.min(c1.getLuminance(),c2.getLuminance())+0.05);};tinycolor.isReadable=function(color1,color2,wcag2){var readability=tinycolor.readability(color1,color2);var wcag2Parms,out;out=false;wcag2Parms=validateWCAG2Parms(wcag2);switch(wcag2Parms.level+wcag2Parms.size){case"AAsmall":case"AAAlarge":out=readability>=4.5;break;case"AAlarge":out=readability>=3;break;case"AAAsmall":out=readability>=7;break;}
return out;};tinycolor.mostReadable=function(baseColor,colorList,args){var bestColor=null;var bestScore=0;var readability;var includeFallbackColors,level,size;args=args||{};includeFallbackColors=args.includeFallbackColors;level=args.level;size=args.size;for(var i=0;i<colorList.length;i++){readability=tinycolor.readability(baseColor,colorList[i]);if(readability>bestScore){bestScore=readability;bestColor=tinycolor(colorList[i]);}}
if(tinycolor.isReadable(baseColor,bestColor,{"level":level,"size":size})||!includeFallbackColors){return bestColor;}
else{args.includeFallbackColors=false;return tinycolor.mostReadable(baseColor,["#fff","#000"],args);}};var names=tinycolor.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var hexNames=tinycolor.hexNames=flip(names);function flip(o){var flipped={};for(var i in o){if(o.hasOwnProperty(i)){flipped[o[i]]=i;}}
return flipped;}
function boundAlpha(a){a=parseFloat(a);if(isNaN(a)||a<0||a>1){a=1;}
return a;}
function bound01(n,max){if(isOnePointZero(n)){n="100%";}
var processPercent=isPercentage(n);n=mathMin(max,mathMax(0,parseFloat(n)));if(processPercent){n=parseInt(n*max,10)/100;}
if((Math.abs(n-max)<0.000001)){return 1;}
return(n%max)/parseFloat(max);}
function clamp01(val){return mathMin(1,mathMax(0,val));}
function parseIntFromHex(val){return parseInt(val,16);}
function isOnePointZero(n){return typeof n=="string"&&n.indexOf('.')!=-1&&parseFloat(n)===1;}
function isPercentage(n){return typeof n==="string"&&n.indexOf('%')!=-1;}
function pad2(c){return c.length==1?'0'+c:''+c;}
function convertToPercentage(n){if(n<=1){n=(n*100)+"%";}
return n;}
function convertDecimalToHex(d){return Math.round(parseFloat(d)*255).toString(16);}
function convertHexToDecimal(h){return(parseIntFromHex(h)/255);}
var matchers=(function(){var CSS_INTEGER="[-\\+]?\\d+%?";var CSS_NUMBER="[-\\+]?\\d*\\.\\d+%?";var CSS_UNIT="(?:"+CSS_NUMBER+")|(?:"+CSS_INTEGER+")";var PERMISSIVE_MATCH3="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";var PERMISSIVE_MATCH4="[\\s|\\(]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")[,|\\s]+("+CSS_UNIT+")\\s*\\)?";return{CSS_UNIT:new RegExp(CSS_UNIT),rgb:new RegExp("rgb"+PERMISSIVE_MATCH3),rgba:new RegExp("rgba"+PERMISSIVE_MATCH4),hsl:new RegExp("hsl"+PERMISSIVE_MATCH3),hsla:new RegExp("hsla"+PERMISSIVE_MATCH4),hsv:new RegExp("hsv"+PERMISSIVE_MATCH3),hsva:new RegExp("hsva"+PERMISSIVE_MATCH4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};})();function isValidCSSUnit(color){return!!matchers.CSS_UNIT.exec(color);}
function stringInputToObject(color){color=color.replace(trimLeft,'').replace(trimRight,'').toLowerCase();var named=false;if(names[color]){color=names[color];named=true;}
else if(color=='transparent'){return{r:0,g:0,b:0,a:0,format:"name"};}
var match;if((match=matchers.rgb.exec(color))){return{r:match[1],g:match[2],b:match[3]};}
if((match=matchers.rgba.exec(color))){return{r:match[1],g:match[2],b:match[3],a:match[4]};}
if((match=matchers.hsl.exec(color))){return{h:match[1],s:match[2],l:match[3]};}
if((match=matchers.hsla.exec(color))){return{h:match[1],s:match[2],l:match[3],a:match[4]};}
if((match=matchers.hsv.exec(color))){return{h:match[1],s:match[2],v:match[3]};}
if((match=matchers.hsva.exec(color))){return{h:match[1],s:match[2],v:match[3],a:match[4]};}
if((match=matchers.hex8.exec(color))){return{a:convertHexToDecimal(match[1]),r:parseIntFromHex(match[2]),g:parseIntFromHex(match[3]),b:parseIntFromHex(match[4]),format:named?"name":"hex8"};}
if((match=matchers.hex6.exec(color))){return{r:parseIntFromHex(match[1]),g:parseIntFromHex(match[2]),b:parseIntFromHex(match[3]),format:named?"name":"hex"};}
if((match=matchers.hex3.exec(color))){return{r:parseIntFromHex(match[1]+''+match[1]),g:parseIntFromHex(match[2]+''+match[2]),b:parseIntFromHex(match[3]+''+match[3]),format:named?"name":"hex"};}
return false;}
function validateWCAG2Parms(parms){var level,size;parms=parms||{"level":"AA","size":"small"};level=(parms.level||"AA").toUpperCase();size=(parms.size||"small").toLowerCase();if(level!=="AA"&&level!=="AAA"){level="AA";}
if(size!=="small"&&size!=="large"){size="small";}
return{"level":level,"size":size};}
if(typeof module!=="undefined"&&module.exports){module.exports=tinycolor;}
else if(typeof define==='function'&&define.amd){define(function(){return tinycolor;});}
else{window.tinycolor=tinycolor;}})(Math);};if(CloudflareApps.matchPage(CloudflareApps.installs['vgQQj4xXjc6k'].URLPatterns)){var pJS=function(tag_id,params){var canvas_el=document.querySelector("#"+tag_id+" > .particles-js-canvas-el")
this.pJS={canvas:{el:canvas_el,w:canvas_el.offsetWidth,h:canvas_el.offsetHeight},particles:{number:{value:400,density:{enable:true,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:false,anim:{enable:false,speed:2,opacity_min:0,sync:false}},size:{value:20,random:false,anim:{enable:false,speed:20,size_min:0,sync:false}},line_linked:{enable:true,distance:100,color:"#fff",opacity:1,width:1},move:{enable:true,speed:2,direction:"none",random:false,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:3000,rotateY:3000}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:0.4},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:false,fn:{interact:{},modes:{},vendors:{}},tmp:{}}
var pJS=this.pJS
if(params){Object.deepExtend(pJS,params)}
pJS.tmp.obj={size_value:pJS.particles.size.value,size_anim_speed:pJS.particles.size.anim.speed,move_speed:pJS.particles.move.speed,line_linked_distance:pJS.particles.line_linked.distance,line_linked_width:pJS.particles.line_linked.width,mode_grab_distance:pJS.interactivity.modes.grab.distance,mode_bubble_distance:pJS.interactivity.modes.bubble.distance,mode_bubble_size:pJS.interactivity.modes.bubble.size,mode_repulse_distance:pJS.interactivity.modes.repulse.distance}
pJS.fn.retinaInit=function(){if(pJS.retina_detect&&window.devicePixelRatio>1){pJS.canvas.pxratio=window.devicePixelRatio
pJS.tmp.retina=true}
else{pJS.canvas.pxratio=1
pJS.tmp.retina=false}
pJS.canvas.w=pJS.canvas.el.offsetWidth*pJS.canvas.pxratio
pJS.canvas.h=pJS.canvas.el.offsetHeight*pJS.canvas.pxratio
pJS.particles.size.value=pJS.tmp.obj.size_value*pJS.canvas.pxratio
pJS.particles.size.anim.speed=pJS.tmp.obj.size_anim_speed*pJS.canvas.pxratio
pJS.particles.move.speed=pJS.tmp.obj.move_speed*pJS.canvas.pxratio
pJS.particles.line_linked.distance=pJS.tmp.obj.line_linked_distance*pJS.canvas.pxratio
pJS.interactivity.modes.grab.distance=pJS.tmp.obj.mode_grab_distance*pJS.canvas.pxratio
pJS.interactivity.modes.bubble.distance=pJS.tmp.obj.mode_bubble_distance*pJS.canvas.pxratio
pJS.particles.line_linked.width=pJS.tmp.obj.line_linked_width*pJS.canvas.pxratio
pJS.interactivity.modes.bubble.size=pJS.tmp.obj.mode_bubble_size*pJS.canvas.pxratio
pJS.interactivity.modes.repulse.distance=pJS.tmp.obj.mode_repulse_distance*pJS.canvas.pxratio}
pJS.fn.canvasInit=function(){pJS.canvas.ctx=pJS.canvas.el.getContext("2d")}
pJS.fn.canvasSize=function(){pJS.canvas.el.width=pJS.canvas.w
pJS.canvas.el.height=pJS.canvas.h
if(pJS&&pJS.interactivity.events.resize){window.addEventListener("resize",function(){pJS.canvas.w=pJS.canvas.el.offsetWidth
pJS.canvas.h=pJS.canvas.el.offsetHeight
if(pJS.tmp.retina){pJS.canvas.w*=pJS.canvas.pxratio
pJS.canvas.h*=pJS.canvas.pxratio}
pJS.canvas.el.width=pJS.canvas.w
pJS.canvas.el.height=pJS.canvas.h
if(!pJS.particles.move.enable){pJS.fn.particlesEmpty()
pJS.fn.particlesCreate()
pJS.fn.particlesDraw()
pJS.fn.vendors.densityAutoParticles()}
pJS.fn.vendors.densityAutoParticles()})}}
pJS.fn.canvasPaint=function(){pJS.canvas.ctx.fillRect(0,0,pJS.canvas.w,pJS.canvas.h)}
pJS.fn.canvasClear=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)}
pJS.fn.particle=function(color,opacity,position){this.radius=(pJS.particles.size.random?Math.random():1)*pJS.particles.size.value
if(pJS.particles.size.anim.enable){this.size_status=false
this.vs=pJS.particles.size.anim.speed/100
if(!pJS.particles.size.anim.sync){this.vs=this.vs*Math.random()}}
this.x=position?position.x:Math.random()*pJS.canvas.w
this.y=position?position.y:Math.random()*pJS.canvas.h
if(this.x>pJS.canvas.w-this.radius*2)this.x=this.x-this.radius
else if(this.x<this.radius*2)this.x=this.x+this.radius
if(this.y>pJS.canvas.h-this.radius*2)this.y=this.y-this.radius
else if(this.y<this.radius*2)this.y=this.y+this.radius
if(pJS.particles.move.bounce){pJS.fn.vendors.checkOverlap(this,position)}
this.color={}
if(typeof color.value==="object"){if(Array.isArray(color.value)){var color_selected=color.value[Math.floor(Math.random()*pJS.particles.color.value.length)]
this.color.rgb=hexToRgb(color_selected)}else{if(color.value.r!=undefined&&color.value.g!=undefined&&color.value.b!=undefined){this.color.rgb={r:parseInt(color.value.r,10),g:parseInt(color.value.g,10),b:parseInt(color.value.b,10)}}
if(color.value.h!=undefined&&color.value.s!=undefined&&color.value.l!=undefined){this.color.hsl={h:color.value.h,s:color.value.s,l:color.value.l}}}}
else if(color.value==="random"){this.color.rgb={r:(Math.floor(Math.random()*(255-0+1))+0),g:(Math.floor(Math.random()*(255-0+1))+0),b:(Math.floor(Math.random()*(255-0+1))+0)}}
else if(typeof color.value==="string"){this.color=color
this.color.rgb=hexToRgb(this.color.value)}
this.opacity=(pJS.particles.opacity.random?Math.random():1)*pJS.particles.opacity.value
if(pJS.particles.opacity.anim.enable){this.opacity_status=false
this.vo=pJS.particles.opacity.anim.speed/100
if(!pJS.particles.opacity.anim.sync){this.vo=this.vo*Math.random()}}
var velbase={}
switch(pJS.particles.move.direction){case"top":velbase={x:0,y:-1}
break
case"top-right":velbase={x:0.5,y:-0.5}
break
case"right":velbase={x:1,y:-0}
break
case"bottom-right":velbase={x:0.5,y:0.5}
break
case"bottom":velbase={x:0,y:1}
break
case"bottom-left":velbase={x:-0.5,y:1}
break
case"left":velbase={x:-1,y:0}
break
case"top-left":velbase={x:-0.5,y:-0.5}
break
default:velbase={x:0,y:0}
break}
if(pJS.particles.move.straight){this.vx=velbase.x
this.vy=velbase.y
if(pJS.particles.move.random){this.vx=this.vx*(Math.random())
this.vy=this.vy*(Math.random())}}else{this.vx=velbase.x+Math.random()-0.5
this.vy=velbase.y+Math.random()-0.5}
this.vx_i=this.vx
this.vy_i=this.vy
var shape_type=pJS.particles.shape.type
if(typeof(shape_type)=="object"){if(shape_type instanceof Array){var shape_selected=shape_type[Math.floor(Math.random()*shape_type.length)]
this.shape=shape_selected}}else{this.shape=shape_type}
if(this.shape=="image"){var sh=pJS.particles.shape
this.img={src:sh.image.src,ratio:sh.image.width/sh.image.height}
if(!this.img.ratio)this.img.ratio=1
if(pJS.tmp.img_type=="svg"&&pJS.tmp.source_svg!=undefined){pJS.fn.vendors.createSvgImg(this)
if(pJS.tmp.pushing){this.img.loaded=false}}}}
pJS.fn.particle.prototype.draw=function(){var p=this
if(p.radius_bubble!=undefined){var radius=p.radius_bubble}else{var radius=p.radius}
if(p.opacity_bubble!=undefined){var opacity=p.opacity_bubble}else{var opacity=p.opacity}
if(p.color.rgb){var color_value="rgba("+p.color.rgb.r+","+p.color.rgb.g+","+p.color.rgb.b+","+opacity+")"}else{var color_value="hsla("+p.color.hsl.h+","+p.color.hsl.s+"%,"+p.color.hsl.l+"%,"+opacity+")"}
pJS.canvas.ctx.fillStyle=color_value
pJS.canvas.ctx.beginPath()
switch(p.shape){case"circle":pJS.canvas.ctx.arc(p.x,p.y,radius,0,Math.PI*2,false)
break
case"edge":pJS.canvas.ctx.rect(p.x-radius,p.y-radius,radius*2,radius*2)
break
case"triangle":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius,p.y+radius/1.66,radius*2,3,2)
break
case"polygon":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius/(pJS.particles.shape.polygon.nb_sides/3.5),p.y-radius/(2.66/3.5),radius*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,1)
break
case"star":pJS.fn.vendors.drawShape(pJS.canvas.ctx,p.x-radius*2/(pJS.particles.shape.polygon.nb_sides/4),p.y-radius/(2*2.66/3.5),radius*2*2.66/(pJS.particles.shape.polygon.nb_sides/3),pJS.particles.shape.polygon.nb_sides,2)
break
case"image":function draw(){pJS.canvas.ctx.drawImage(img_obj,p.x-radius,p.y-radius,radius*2,radius*2/p.img.ratio)}
if(pJS.tmp.img_type=="svg"){var img_obj=p.img.obj}else{var img_obj=pJS.tmp.img_obj}
if(img_obj){draw()}
break}
pJS.canvas.ctx.closePath()
if(pJS.particles.shape.stroke.width>0){pJS.canvas.ctx.strokeStyle=pJS.particles.shape.stroke.color
pJS.canvas.ctx.lineWidth=pJS.particles.shape.stroke.width
pJS.canvas.ctx.stroke()}
pJS.canvas.ctx.fill()}
pJS.fn.particlesCreate=function(){for(var i=0;i<pJS.particles.number.value;i++){pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value))}}
pJS.fn.particlesUpdate=function(){for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i]
if(pJS.particles.move.enable){var ms=pJS.particles.move.speed/2
p.x+=p.vx*ms
p.y+=p.vy*ms}
if(pJS.particles.opacity.anim.enable){if(p.opacity_status==true){if(p.opacity>=pJS.particles.opacity.value)p.opacity_status=false
p.opacity+=p.vo}else{if(p.opacity<=pJS.particles.opacity.anim.opacity_min)p.opacity_status=true
p.opacity-=p.vo}
if(p.opacity<0)p.opacity=0}
if(pJS.particles.size.anim.enable){if(p.size_status==true){if(p.radius>=pJS.particles.size.value)p.size_status=false
p.radius+=p.vs}else{if(p.radius<=pJS.particles.size.anim.size_min)p.size_status=true
p.radius-=p.vs}
if(p.radius<0)p.radius=0}
if(pJS.particles.move.out_mode=="bounce"){var new_pos={x_left:p.radius,x_right:pJS.canvas.w,y_top:p.radius,y_bottom:pJS.canvas.h}}else{var new_pos={x_left:-p.radius,x_right:pJS.canvas.w+p.radius,y_top:-p.radius,y_bottom:pJS.canvas.h+p.radius}}
if(p.x-p.radius>pJS.canvas.w){p.x=new_pos.x_left
p.y=Math.random()*pJS.canvas.h}
else if(p.x+p.radius<0){p.x=new_pos.x_right
p.y=Math.random()*pJS.canvas.h}
if(p.y-p.radius>pJS.canvas.h){p.y=new_pos.y_top
p.x=Math.random()*pJS.canvas.w}
else if(p.y+p.radius<0){p.y=new_pos.y_bottom
p.x=Math.random()*pJS.canvas.w}
switch(pJS.particles.move.out_mode){case"bounce":if(p.x+p.radius>pJS.canvas.w)p.vx=-p.vx
else if(p.x-p.radius<0)p.vx=-p.vx
if(p.y+p.radius>pJS.canvas.h)p.vy=-p.vy
else if(p.y-p.radius<0)p.vy=-p.vy
break}
if(isInArray("grab",pJS.interactivity.events.onhover.mode)){pJS.fn.modes.grabParticle(p)}
if(isInArray("bubble",pJS.interactivity.events.onhover.mode)||isInArray("bubble",pJS.interactivity.events.onclick.mode)){pJS.fn.modes.bubbleParticle(p)}
if(isInArray("repulse",pJS.interactivity.events.onhover.mode)||isInArray("repulse",pJS.interactivity.events.onclick.mode)){pJS.fn.modes.repulseParticle(p)}
if(pJS.particles.line_linked.enable||pJS.particles.move.attract.enable){for(var j=i+1;j<pJS.particles.array.length;j++){var p2=pJS.particles.array[j]
if(pJS.particles.line_linked.enable){pJS.fn.interact.linkParticles(p,p2)}
if(pJS.particles.move.attract.enable){pJS.fn.interact.attractParticles(p,p2)}
if(pJS.particles.move.bounce){pJS.fn.interact.bounceParticles(p,p2)}}}}}
pJS.fn.particlesDraw=function(){pJS.canvas.ctx.clearRect(0,0,pJS.canvas.w,pJS.canvas.h)
pJS.fn.particlesUpdate()
for(var i=0;i<pJS.particles.array.length;i++){var p=pJS.particles.array[i]
p.draw()}}
pJS.fn.particlesEmpty=function(){pJS.particles.array=[]}
pJS.fn.particlesRefresh=function(){cancelRequestAnimFrame(pJS.fn.checkAnimFrame)
cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
pJS.tmp.source_svg=undefined
pJS.tmp.img_obj=undefined
pJS.tmp.count_svg=0
pJS.fn.particlesEmpty()
pJS.fn.canvasClear()
pJS.fn.vendors.start()}
pJS.fn.interact.linkParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=pJS.particles.line_linked.distance){var opacity_line=pJS.particles.line_linked.opacity-(dist/(1/pJS.particles.line_linked.opacity))/pJS.particles.line_linked.distance
if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line
pJS.canvas.ctx.strokeStyle="rgba("+color_line.r+","+color_line.g+","+color_line.b+","+opacity_line+")"
pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width
pJS.canvas.ctx.beginPath()
pJS.canvas.ctx.moveTo(p1.x,p1.y)
pJS.canvas.ctx.lineTo(p2.x,p2.y)
pJS.canvas.ctx.stroke()
pJS.canvas.ctx.closePath()}}}
pJS.fn.interact.attractParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=pJS.particles.line_linked.distance){var ax=dx/(pJS.particles.move.attract.rotateX*1000),ay=dy/(pJS.particles.move.attract.rotateY*1000)
p1.vx-=ax
p1.vy-=ay
p2.vx+=ax
p2.vy+=ay}}
pJS.fn.interact.bounceParticles=function(p1,p2){var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy),dist_p=p1.radius+p2.radius
if(dist<=dist_p){p1.vx=-p1.vx
p1.vy=-p1.vy
p2.vx=-p2.vx
p2.vy=-p2.vy}}
pJS.fn.modes.pushParticles=function(nb,pos){pJS.tmp.pushing=true
for(var i=0;i<nb;i++){pJS.particles.array.shift()
pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color,pJS.particles.opacity.value,{"x":pos?pos.pos_x:Math.random()*pJS.canvas.w,"y":pos?pos.pos_y:Math.random()*pJS.canvas.h}))
if(i==nb-1){if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}
pJS.tmp.pushing=false}}}
pJS.fn.modes.removeParticles=function(nb){pJS.particles.array.splice(0,nb)
if(!pJS.particles.move.enable){pJS.fn.particlesDraw()}}
pJS.fn.modes.bubbleParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray("bubble",pJS.interactivity.events.onhover.mode)){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),ratio=1-dist_mouse/pJS.interactivity.modes.bubble.distance
function init(){p.opacity_bubble=p.opacity
p.radius_bubble=p.radius}
if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(ratio>=0&&pJS.interactivity.status=="mousemove"){if(pJS.interactivity.modes.bubble.size!=pJS.particles.size.value){if(pJS.interactivity.modes.bubble.size>pJS.particles.size.value){var size=p.radius+(pJS.interactivity.modes.bubble.size*ratio)
if(size>=0){p.radius_bubble=size}}else{var dif=p.radius-pJS.interactivity.modes.bubble.size,size=p.radius-(dif*ratio)
if(size>0){p.radius_bubble=size}else{p.radius_bubble=0}}}
if(pJS.interactivity.modes.bubble.opacity!=pJS.particles.opacity.value){if(pJS.interactivity.modes.bubble.opacity>pJS.particles.opacity.value){var opacity=pJS.interactivity.modes.bubble.opacity*ratio
if(opacity>p.opacity&&opacity<=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}else{var opacity=p.opacity-(pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio
if(opacity<p.opacity&&opacity>=pJS.interactivity.modes.bubble.opacity){p.opacity_bubble=opacity}}}}}else{init()}
if(pJS.interactivity.status=="mouseleave"){init()}}
else if(pJS.interactivity.events.onclick.enable&&isInArray("bubble",pJS.interactivity.events.onclick.mode)){if(pJS.tmp.bubble_clicking){var dx_mouse=p.x-pJS.interactivity.mouse.click_pos_x,dy_mouse=p.y-pJS.interactivity.mouse.click_pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse),time_spent=(new Date().getTime()-pJS.interactivity.mouse.click_time)/1000
if(time_spent>pJS.interactivity.modes.bubble.duration){pJS.tmp.bubble_duration_end=true}
if(time_spent>pJS.interactivity.modes.bubble.duration*2){pJS.tmp.bubble_clicking=false
pJS.tmp.bubble_duration_end=false}}
function process(bubble_param,particles_param,p_obj_bubble,p_obj,id){if(bubble_param!=particles_param){if(!pJS.tmp.bubble_duration_end){if(dist_mouse<=pJS.interactivity.modes.bubble.distance){if(p_obj_bubble!=undefined)var obj=p_obj_bubble
else var obj=p_obj
if(obj!=bubble_param){var value=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration)
if(id=="size")p.radius_bubble=value
if(id=="opacity")p.opacity_bubble=value}}else{if(id=="size")p.radius_bubble=undefined
if(id=="opacity")p.opacity_bubble=undefined}}else{if(p_obj_bubble!=undefined){var value_tmp=p_obj-(time_spent*(p_obj-bubble_param)/pJS.interactivity.modes.bubble.duration),dif=bubble_param-value_tmp
value=bubble_param+dif
if(id=="size")p.radius_bubble=value
if(id=="opacity")p.opacity_bubble=value}}}}
if(pJS.tmp.bubble_clicking){process(pJS.interactivity.modes.bubble.size,pJS.particles.size.value,p.radius_bubble,p.radius,"size")
process(pJS.interactivity.modes.bubble.opacity,pJS.particles.opacity.value,p.opacity_bubble,p.opacity,"opacity")}}}
pJS.fn.modes.repulseParticle=function(p){if(pJS.interactivity.events.onhover.enable&&isInArray("repulse",pJS.interactivity.events.onhover.mode)&&pJS.interactivity.status=="mousemove"){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse)
var normVec={x:dx_mouse/dist_mouse,y:dy_mouse/dist_mouse},repulseRadius=pJS.interactivity.modes.repulse.distance,velocity=100,repulseFactor=clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity,0,50)
var pos={x:p.x+normVec.x*repulseFactor,y:p.y+normVec.y*repulseFactor}
if(pJS.particles.move.out_mode=="bounce"){if(pos.x-p.radius>0&&pos.x+p.radius<pJS.canvas.w)p.x=pos.x
if(pos.y-p.radius>0&&pos.y+p.radius<pJS.canvas.h)p.y=pos.y}else{p.x=pos.x
p.y=pos.y}}
else if(pJS.interactivity.events.onclick.enable&&isInArray("repulse",pJS.interactivity.events.onclick.mode)){if(!pJS.tmp.repulse_finish){pJS.tmp.repulse_count++
if(pJS.tmp.repulse_count==pJS.particles.array.length){pJS.tmp.repulse_finish=true}}
if(pJS.tmp.repulse_clicking){var repulseRadius=Math.pow(pJS.interactivity.modes.repulse.distance/6,3)
var dx=pJS.interactivity.mouse.click_pos_x-p.x,dy=pJS.interactivity.mouse.click_pos_y-p.y,d=dx*dx+dy*dy
var force=-repulseRadius/d*1
function process(){var f=Math.atan2(dy,dx)
p.vx=force*Math.cos(f)
p.vy=force*Math.sin(f)
if(pJS.particles.move.out_mode=="bounce"){var pos={x:p.x+p.vx,y:p.y+p.vy}
if(pos.x+p.radius>pJS.canvas.w)p.vx=-p.vx
else if(pos.x-p.radius<0)p.vx=-p.vx
if(pos.y+p.radius>pJS.canvas.h)p.vy=-p.vy
else if(pos.y-p.radius<0)p.vy=-p.vy}}
if(d<=repulseRadius){process()}}else{if(pJS.tmp.repulse_clicking==false){p.vx=p.vx_i
p.vy=p.vy_i}}}}
pJS.fn.modes.grabParticle=function(p){if(pJS.interactivity.events.onhover.enable&&pJS.interactivity.status=="mousemove"){var dx_mouse=p.x-pJS.interactivity.mouse.pos_x,dy_mouse=p.y-pJS.interactivity.mouse.pos_y,dist_mouse=Math.sqrt(dx_mouse*dx_mouse+dy_mouse*dy_mouse)
if(dist_mouse<=pJS.interactivity.modes.grab.distance){var opacity_line=pJS.interactivity.modes.grab.line_linked.opacity-(dist_mouse/(1/pJS.interactivity.modes.grab.line_linked.opacity))/pJS.interactivity.modes.grab.distance
if(opacity_line>0){var color_line=pJS.particles.line_linked.color_rgb_line
pJS.canvas.ctx.strokeStyle="rgba("+color_line.r+","+color_line.g+","+color_line.b+","+opacity_line+")"
pJS.canvas.ctx.lineWidth=pJS.particles.line_linked.width
pJS.canvas.ctx.beginPath()
pJS.canvas.ctx.moveTo(p.x,p.y)
pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x,pJS.interactivity.mouse.pos_y)
pJS.canvas.ctx.stroke()
pJS.canvas.ctx.closePath()}}}}
pJS.fn.vendors.eventsListeners=function(){if(pJS.interactivity.detect_on=="window"){pJS.interactivity.el=window}else{pJS.interactivity.el=pJS.canvas.el}
if(pJS.interactivity.events.onhover.enable||pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener("mousemove",function(e){if(pJS.interactivity.el==window){var pos_x=e.clientX,pos_y=e.clientY}
else{var pos_x=e.offsetX||e.clientX,pos_y=e.offsetY||e.clientY}
pJS.interactivity.mouse.pos_x=pos_x
pJS.interactivity.mouse.pos_y=pos_y
if(pJS.tmp.retina){pJS.interactivity.mouse.pos_x*=pJS.canvas.pxratio
pJS.interactivity.mouse.pos_y*=pJS.canvas.pxratio}
pJS.interactivity.status="mousemove"})
pJS.interactivity.el.addEventListener("mouseleave",function(e){pJS.interactivity.mouse.pos_x=null
pJS.interactivity.mouse.pos_y=null
pJS.interactivity.status="mouseleave"})}
if(pJS.interactivity.events.onclick.enable){pJS.interactivity.el.addEventListener("click",function(){pJS.interactivity.mouse.click_pos_x=pJS.interactivity.mouse.pos_x
pJS.interactivity.mouse.click_pos_y=pJS.interactivity.mouse.pos_y
pJS.interactivity.mouse.click_time=new Date().getTime()
if(pJS.interactivity.events.onclick.enable){switch(pJS.interactivity.events.onclick.mode){case"push":if(pJS.particles.move.enable){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}else{if(pJS.interactivity.modes.push.particles_nb==1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb,pJS.interactivity.mouse)}
else if(pJS.interactivity.modes.push.particles_nb>1){pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb)}}
break
case"remove":pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb)
break
case"bubble":pJS.tmp.bubble_clicking=true
break
case"repulse":pJS.tmp.repulse_clicking=true
pJS.tmp.repulse_count=0
pJS.tmp.repulse_finish=false
setTimeout(function(){pJS.tmp.repulse_clicking=false},pJS.interactivity.modes.repulse.duration*1000)
break}}})}}
pJS.fn.vendors.densityAutoParticles=function(){if(pJS.particles.number.density.enable){var area=pJS.canvas.el.width*pJS.canvas.el.height/1000
if(pJS.tmp.retina){area=area/(pJS.canvas.pxratio*2)}
var nb_particles=area*pJS.particles.number.value/pJS.particles.number.density.value_area
var missing_particles=pJS.particles.array.length-nb_particles
if(missing_particles<0)pJS.fn.modes.pushParticles(Math.abs(missing_particles))
else pJS.fn.modes.removeParticles(missing_particles)}}
pJS.fn.vendors.checkOverlap=function(p1,position){for(var i=0;i<pJS.particles.array.length;i++){var p2=pJS.particles.array[i]
var dx=p1.x-p2.x,dy=p1.y-p2.y,dist=Math.sqrt(dx*dx+dy*dy)
if(dist<=p1.radius+p2.radius){p1.x=position?position.x:Math.random()*pJS.canvas.w
p1.y=position?position.y:Math.random()*pJS.canvas.h
pJS.fn.vendors.checkOverlap(p1)}}}
pJS.fn.vendors.createSvgImg=function(p){var svgXml=pJS.tmp.source_svg,rgbHex=/#([0-9A-F]{3,6})/gi,coloredSvgXml=svgXml.replace(rgbHex,function(m,r,g,b){if(p.color.rgb){var color_value="rgba("+p.color.rgb.r+","+p.color.rgb.g+","+p.color.rgb.b+","+p.opacity+")"}else{var color_value="hsla("+p.color.hsl.h+","+p.color.hsl.s+"%,"+p.color.hsl.l+"%,"+p.opacity+")"}
return color_value})
var svg=new Blob([coloredSvgXml],{type:"image/svg+xml;charset=utf-8"}),DOMURL=window.URL||window.webkitURL||window,url=DOMURL.createObjectURL(svg)
var img=new Image()
img.addEventListener("load",function(){p.img.obj=img
p.img.loaded=true
DOMURL.revokeObjectURL(url)
pJS.tmp.count_svg++})
img.src=url}
pJS.fn.vendors.destroypJS=function(){cancelAnimationFrame(pJS.fn.drawAnimFrame)
canvas_el.remove()
pJSDom=[]}
pJS.fn.vendors.drawShape=function(c,startX,startY,sideLength,sideCountNumerator,sideCountDenominator){var sideCount=sideCountNumerator*sideCountDenominator
var decimalSides=sideCountNumerator/sideCountDenominator
var interiorAngleDegrees=(180*(decimalSides-2))/decimalSides
var interiorAngle=Math.PI-Math.PI*interiorAngleDegrees/180
c.save()
c.beginPath()
c.translate(startX,startY)
c.moveTo(0,0)
for(var i=0;i<sideCount;i++){c.lineTo(sideLength,0)
c.translate(sideLength,0)
c.rotate(interiorAngle)}
c.fill()
c.restore()}
pJS.fn.vendors.exportImg=function(){window.open(pJS.canvas.el.toDataURL("image/png"),"_blank")}
pJS.fn.vendors.loadImg=function(type){pJS.tmp.img_error=undefined
if(pJS.particles.shape.image.src!=""){if(type=="svg"){var xhr=new XMLHttpRequest()
xhr.open("GET",pJS.particles.shape.image.src)
xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){pJS.tmp.source_svg=data.currentTarget.response
pJS.fn.vendors.checkBeforeDraw()}else{console.log("Error pJS - Image not found")
pJS.tmp.img_error=true}}}
xhr.send()}else{var img=new Image()
img.addEventListener("load",function(){pJS.tmp.img_obj=img
pJS.fn.vendors.checkBeforeDraw()})
img.src=pJS.particles.shape.image.src}}else{console.log("Error pJS - No image.src")
pJS.tmp.img_error=true}}
pJS.fn.vendors.draw=function(){if(pJS.particles.shape.type=="image"){if(pJS.tmp.img_type=="svg"){if(pJS.tmp.count_svg>=pJS.particles.number.value){pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}else{if(pJS.tmp.img_obj!=undefined){pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}else{if(!pJS.tmp.img_error)pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}}else{pJS.fn.particlesDraw()
if(!pJS.particles.move.enable)cancelRequestAnimFrame(pJS.fn.drawAnimFrame)
else pJS.fn.drawAnimFrame=requestAnimFrame(pJS.fn.vendors.draw)}}
pJS.fn.vendors.checkBeforeDraw=function(){if(pJS.particles.shape.type=="image"){if(pJS.tmp.img_type=="svg"&&pJS.tmp.source_svg==undefined){pJS.tmp.checkAnimFrame=requestAnimFrame(check)}else{cancelRequestAnimFrame(pJS.tmp.checkAnimFrame)
if(!pJS.tmp.img_error){pJS.fn.vendors.init()
pJS.fn.vendors.draw()}}}else{pJS.fn.vendors.init()
pJS.fn.vendors.draw()}}
pJS.fn.vendors.init=function(){pJS.fn.retinaInit()
pJS.fn.canvasInit()
pJS.fn.canvasSize()
pJS.fn.canvasPaint()
pJS.fn.particlesCreate()
pJS.fn.vendors.densityAutoParticles()
pJS.particles.line_linked.color_rgb_line=hexToRgb(pJS.particles.line_linked.color)}
pJS.fn.vendors.start=function(){if(isInArray("image",pJS.particles.shape.type)){pJS.tmp.img_type=pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length-3)
pJS.fn.vendors.loadImg(pJS.tmp.img_type)}else{pJS.fn.vendors.checkBeforeDraw()}}
pJS.fn.vendors.eventsListeners()
pJS.fn.vendors.start()}
Object.deepExtend=function(destination,source){for(var property in source){if(source[property]&&source[property].constructor&&source[property].constructor===Object){destination[property]=destination[property]||{}
arguments.callee(destination[property],source[property])}else{destination[property]=source[property]}}
return destination}
window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}})()
window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})()
function hexToRgb(hex){var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i
hex=hex.replace(shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b})
var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
return result?{r:parseInt(result[1],16),g:parseInt(result[2],16),b:parseInt(result[3],16)}:null}
function clamp(number,min,max){return Math.min(Math.max(number,min),max)}
function isInArray(value,array){return array.indexOf(value)>-1}
window.pJSDom=[]
window.particlesJS=function(tag_id,params){if(typeof(tag_id)!="string"){params=tag_id
tag_id="particles-js"}
if(!tag_id){tag_id="particles-js"}
var pJS_tag=document.getElementById(tag_id),pJS_canvas_class="particles-js-canvas-el",exist_canvas=pJS_tag.getElementsByClassName(pJS_canvas_class)
if(exist_canvas.length){while(exist_canvas.length>0){pJS_tag.removeChild(exist_canvas[0])}}
var canvas_el=document.createElement("canvas")
canvas_el.className=pJS_canvas_class
canvas_el.style.width="100%"
canvas_el.style.height="100%"
var canvas=document.getElementById(tag_id).appendChild(canvas_el)
if(canvas!=null){pJSDom.push(new pJS(tag_id,params))}}
window.particlesJS.load=function(tag_id,path_config_json,callback){var xhr=new XMLHttpRequest()
xhr.open("GET",path_config_json)
xhr.onreadystatechange=function(data){if(xhr.readyState==4){if(xhr.status==200){var params=JSON.parse(data.currentTarget.response)
window.particlesJS(tag_id,params)
if(callback)callback()}else{console.log("Error pJS - XMLHttpRequest status: "+xhr.status)
console.log("Error pJS - File config not found")}}}
xhr.send()}};if(CloudflareApps.matchPage(CloudflareApps.installs['vgQQj4xXjc6k'].URLPatterns)){"use strict";(function(){if(!window.addEventListener)return;var _window=window;var tinycolor=_window.tinycolor;var CONTAINER_ID="eager-particles-js";var getComputedStyle=document.defaultView.getComputedStyle.bind(document.defaultView);var options=CloudflareApps.installs['vgQQj4xXjc6k'].options;var element=void 0;function getParticleColor(){var particleColor=void 0;if(options.particleColor){particleColor=tinycolor(options.particleColor);}else{var backgroundColor=options.backgroundColor||getComputedStyle(document.body).backgroundColor;var components=tinycolor(backgroundColor).toHsl();components.l=Math.abs((components.l+0.5)%1)+(1-components.s)*0.1;particleColor=tinycolor(components);}
return{hex:particleColor.toHexString(),rgb:particleColor.toRgb()};}
function getInteractivityEvents(){return{onhover:{enable:options.interaction.onHover!=="none",mode:options.interaction.onHover},onclick:{enable:options.interaction.onClick!=="none",mode:options.interaction.onClick},resize:true};}
function updateElement(){var particleColor=getParticleColor();element=Eager.createElement({selector:"body",method:"prepend"},element);element.id=CONTAINER_ID;if(element.parentNode.tagName!=="BODY"){element.parentNode.setAttribute("data-particle-parent","");}
element.style.backgroundColor=options.backgroundColor;window.particlesJS(CONTAINER_ID,{particles:{number:{value:options.fewerParticles?40:80,density:{enable:true,value_area:800}},color:{value:particleColor.hex},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:0.8,random:true,anim:{enable:true,speed:1,opacity_min:0.1,sync:false}},size:{value:3,random:true,anim:{enable:false,speed:40,size_min:0.1,sync:false}},line_linked:{enable:true,distance:160,color:particleColor.hex,opacity:0.45,width:1},move:{enable:true,speed:6,direction:"none",random:false,straight:false,out_mode:options.behavior.outMode,bounce:false,attract:{enable:false,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:getInteractivityEvents(),modes:{grab:{distance:200,line_linked:{opacity:0.4}},bubble:{distance:350,size:3.1,duration:2,opacity:0.8,speed:3},repulse:{distance:80,duration:0.3},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true});}
if(document.readyState==="loading"){window.addEventListener("load",updateElement);}else{updateElement();}
window.CloudflareApps.installs['vgQQj4xXjc6k'].scope={setColors:function setColors(nextOptions){options=nextOptions;if(!window.pJSDom){updateElement();return;}
if(element)element.style.backgroundColor=options.backgroundColor;var _getParticleColor=getParticleColor();var hex=_getParticleColor.hex;var rgb=_getParticleColor.rgb;window.pJSDom.forEach(function(_ref){var particles=_ref.pJS.particles;particles.color.value=hex;particles.color.rgb=rgb;particles.line_linked.color=hex;particles.line_linked.color_rgb_line=rgb;});},setCommon:function setCommon(nextOptions){options=nextOptions;if(!window.pJSDom){updateElement();return;}
window.pJSDom.forEach(function(_ref2){var pJS=_ref2.pJS;pJS.particles.move.out_mode=options.behavior.outMode;pJS.interactivity.events=getInteractivityEvents();});},setResetworthy:function setResetworthy(nextOptions){options=nextOptions;if(window.pJSDom){window.pJSDom.forEach(function($){return $.pJS.fn.vendors.destroypJS();});}
updateElement();}};})();};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LyogVGhpcyBpcyBhIGNvbXBpbGVkIGZpbGUsIHlvdSBzaG91bGQgYmUgZWRpdGluZyB0aGUgZmlsZSBpbiB0aGUgdGVtcGxhdGVzIGRpcmVjdG9yeSAqLwoucGFjZSAucGFjZS1wcm9ncmVzcyB7CiAgYmFja2dyb3VuZDogIzdjNjBlMDsKICBwb3NpdGlvbjogZml4ZWQ7CiAgei1pbmRleDogMjAwMDsKICB0b3A6IDA7CiAgbGVmdDogMDsKICBoZWlnaHQ6IDJweDsKCiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAxczsKICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDFzOwogIC1vLXRyYW5zaXRpb246IHdpZHRoIDFzOwogIHRyYW5zaXRpb246IHdpZHRoIDFzOwp9CgoucGFjZS1pbmFjdGl2ZSB7CiAgZGlzcGxheTogbm9uZTsKfQojZWFnZXItcGFydGljbGVzLWpzIHsKICBib3R0b206IDA7CiAgZGlzcGxheTogYmxvY2s7CiAgbGVmdDogMDsKICBwb3NpdGlvbjogZml4ZWQ7CiAgcmlnaHQ6IDA7CiAgdG9wOiAwOwogIHotaW5kZXg6IC0xOwp9CgojZWFnZXItcGFydGljbGVzLWpzIC5wYXJ0aWNsZXMtanMtY2FudmFzLWVsIHsKICBkaXNwbGF5OiBibG9jazsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7Cn0=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();