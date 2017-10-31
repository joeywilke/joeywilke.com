!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],r=n.length,i=window.console=window.console||{};r--;)e=n[r],i[e]||(i[e]=t)}(),/*!
 * @preserve
 *
 * Readmore.js jQuery plugin
 * Author: @jed_foster
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";function t(e,t,n){var r;return function(){var i=this,a=arguments,o=function(){r=null,n||e.apply(i,a)},s=n&&!r;clearTimeout(r),r=setTimeout(o,t),s&&e.apply(i,a)}}function n(e){var t=++l;return String(null==e?"rmjs-":e)+t}function r(e){var t=e.clone().css({height:"auto",width:e.width(),maxHeight:"none",overflow:"hidden"}).insertAfter(e),n=t.outerHeight(),r=parseInt(t.css({maxHeight:""}).css("max-height").replace(/[^-\d\.]/g,""),10),i=e.data("defaultHeight");t.remove();var a=r||e.data("collapsedHeight")||i;e.data({expandedHeight:n,maxHeight:r,collapsedHeight:a}).css({maxHeight:"none"})}function i(e){if(!c[e.selector]){var t=" ";e.embedCSS&&""!==e.blockCSS&&(t+=e.selector+" + [data-readmore-toggle], "+e.selector+"[data-readmore]{"+e.blockCSS+"}"),t+=e.selector+"[data-readmore]{transition: height "+e.speed+"ms;}",function(e,t){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t)),e.getElementsByTagName("head")[0].appendChild(n)}(document,t),c[e.selector]=!0}}function a(t,n){this.element=t,this.options=e.extend({},s,n),i(this.options),this._defaults=s,this._name=o,this.init(),window.addEventListener?(window.addEventListener("load",u),window.addEventListener("resize",u)):(window.attachEvent("load",u),window.attachEvent("resize",u))}var o="readmore",s={speed:100,collapsedHeight:200,heightMargin:16,moreLink:'<a href="#">Read More</a>',lessLink:'<a href="#">Close</a>',embedCSS:!0,blockCSS:"display: block; width: 100%;",startOpen:!1,beforeToggle:function(){},afterToggle:function(){}},c={},l=0,u=t(function(){e("[data-readmore]").each(function(){var t=e(this),n="true"===t.attr("aria-expanded");r(t),t.css({height:t.data(n?"expandedHeight":"collapsedHeight")})})},100);a.prototype={init:function(){var t=e(this.element);t.data({defaultHeight:this.options.collapsedHeight,heightMargin:this.options.heightMargin}),r(t);var i=t.data("collapsedHeight"),a=t.data("heightMargin");if(t.outerHeight(!0)<=i+a)return!0;var o=t.attr("id")||n(),s=this.options.startOpen?this.options.lessLink:this.options.moreLink;t.attr({"data-readmore":"","aria-expanded":this.options.startOpen,id:o}),t.after(e(s).on("click",function(e){return function(n){e.toggle(this,t[0],n)}}(this)).attr({"data-readmore-toggle":"","aria-controls":o})),this.options.startOpen||t.css({height:i})},toggle:function(t,n,r){r&&r.preventDefault(),t||(t=e('[aria-controls="'+_this.element.id+'"]')[0]),n||(n=_this.element);var i=e(n),a="",o="",s=!1,c=i.data("collapsedHeight");i.height()<=c?(a=i.data("expandedHeight")+"px",o="lessLink",s=!0):(a=c,o="moreLink"),this.options.beforeToggle(t,i,!s),i.css({height:a}),i.on("transitionend",function(n){return function(){n.options.afterToggle(t,i,s),e(this).attr({"aria-expanded":s}).off("transitionend")}}(this)),e(t).replaceWith(e(this.options[o]).on("click",function(e){return function(t){e.toggle(this,n,t)}}(this)).attr({"data-readmore-toggle":"","aria-controls":i.attr("id")}))},destroy:function(){e(this.element).each(function(){var t=e(this);t.attr({"data-readmore":null,"aria-expanded":null}).css({maxHeight:"",height:""}).next("[data-readmore-toggle]").remove(),t.removeData()})}},e.fn.readmore=function(t){var n=arguments,r=this.selector;return t=t||{},"object"==typeof t?this.each(function(){if(e.data(this,"plugin_"+o)){var n=e.data(this,"plugin_"+o);n.destroy.apply(n)}t.selector=r,e.data(this,"plugin_"+o,new a(this,t))}):"string"==typeof t&&"_"!==t[0]&&"init"!==t?this.each(function(){var r=e.data(this,"plugin_"+o);r instanceof a&&"function"==typeof r[t]&&r[t].apply(r,Array.prototype.slice.call(n,1))}):void 0}}),!function(e){"use strict";function t(e,n){if(!(this instanceof t)){var r=new t(e,n);return r.open(),r}this.id=t.id++,this.setup(e,n),this.chainCallbacks(t._callbackChain)}if("undefined"==typeof e)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var n=[],r=function(t){return n=e.grep(n,function(e){return e!==t&&e.$instance.closest("body").length>0})},i=function(e,t){var n={},r=new RegExp("^"+t+"([A-Z])(.*)");for(var i in e){var a=i.match(r);if(a){var o=(a[1]+a[2].replace(/([A-Z])/g,"-$1")).toLowerCase();n[o]=e[i]}}return n},a={keyup:"onKeyUp",resize:"onResize"},o=function(n){e.each(t.opened().reverse(),function(){return n.isDefaultPrevented()||!1!==this[a[n.type]](n)?void 0:(n.preventDefault(),n.stopPropagation(),!1)})},s=function(n){if(n!==t._globalHandlerInstalled){t._globalHandlerInstalled=n;var r=e.map(a,function(e,n){return n+"."+t.prototype.namespace}).join(" ");e(window)[n?"on":"off"](r,o)}};t.prototype={constructor:t,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:e.noop,beforeContent:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterContent:e.noop,afterClose:e.noop,onKeyUp:e.noop,onResize:e.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(t,n){"object"!=typeof t||t instanceof e!=0||n||(n=t,t=void 0);var r=e.extend(this,n,{target:t}),i=r.resetCss?r.namespace+"-reset":r.namespace,a=e(r.background||['<div class="'+i+"-loading "+i+'">','<div class="'+i+'-content">','<span class="'+i+"-close-icon "+r.namespace+'-close">',r.closeIcon,"</span>",'<div class="'+r.namespace+'-inner">'+r.loading+"</div>","</div>","</div>"].join("")),o="."+r.namespace+"-close"+(r.otherClose?","+r.otherClose:"");return r.$instance=a.clone().addClass(r.variant),r.$instance.on(r.closeTrigger+"."+r.namespace,function(t){var n=e(t.target);("background"===r.closeOnClick&&n.is("."+r.namespace)||"anywhere"===r.closeOnClick||n.closest(o).length)&&(r.close(t),t.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var t=this,n=this.constructor.contentFilters,r=function(e){return t.$currentTarget&&t.$currentTarget.attr(e)},i=r(t.targetAttr),a=t.target||i||"",o=n[t.type];if(!o&&a in n&&(o=n[a],a=t.target&&i),a=a||r("href")||"",!o)for(var s in n)t[s]&&(o=n[s],a=t[s]);if(!o){var c=a;if(a=null,e.each(t.contentFilters,function(){return o=n[this],o.test&&(a=o.test(c)),!a&&o.regex&&c.match&&c.match(o.regex)&&(a=c),!a}),!a)return"console"in window&&window.console.error("Featherlight: no content filter found "+(c?' for "'+c+'"':" (no target specified)")),!1}return o.process.call(t,a)},setContent:function(t){var n=this;return(t.is("iframe")||e("iframe",t).length>0)&&n.$instance.addClass(n.namespace+"-iframe"),n.$instance.removeClass(n.namespace+"-loading"),n.$instance.find("."+n.namespace+"-inner").not(t).slice(1).remove().end().replaceWith(e.contains(n.$instance[0],t[0])?"":t),n.$content=t.addClass(n.namespace+"-inner"),n},open:function(t){var r=this;if(r.$instance.hide().appendTo(r.root),!(t&&t.isDefaultPrevented()||r.beforeOpen(t)===!1)){t&&t.preventDefault();var i=r.getContent();if(i)return n.push(r),s(!0),r.$instance.fadeIn(r.openSpeed),r.beforeContent(t),e.when(i).always(function(e){r.setContent(e),r.afterContent(t)}).then(r.$instance.promise()).done(function(){r.afterOpen(t)})}return r.$instance.detach(),e.Deferred().reject().promise()},close:function(t){var n=this,i=e.Deferred();return n.beforeClose(t)===!1?i.reject():(0===r(n).length&&s(!1),n.$instance.fadeOut(n.closeSpeed,function(){n.$instance.detach(),n.afterClose(t),i.resolve()})),i.promise()},resize:function(e,t){if(e&&t){this.$content.css("width","").css("height","");var n=Math.max(e/parseInt(this.$content.parent().css("width"),10),t/parseInt(this.$content.parent().css("height"),10));n>1&&this.$content.css("width",""+e/n+"px").css("height",""+t/n+"px")}},chainCallbacks:function(t){for(var n in t)this[n]=e.proxy(t[n],this,e.proxy(this[n],this))}},e.extend(t,{id:0,autoBind:"[data-featherlight]",defaults:t.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(t){return t instanceof e&&t},process:function(t){return this.persist!==!1?e(t):e(t).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(t){var n=this,r=e.Deferred(),i=new Image,a=e('<img src="'+t+'" alt="" class="'+n.namespace+'-image" />');return i.onload=function(){a.naturalWidth=i.width,a.naturalHeight=i.height,r.resolve(a)},i.onerror=function(){r.reject(a)},i.src=t,r.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(t){return e(t)}},ajax:{regex:/./,process:function(t){var n=e.Deferred(),r=e("<div></div>").load(t,function(e,t){"error"!==t&&n.resolve(r.contents()),n.fail()});return n.promise()}},iframe:{process:function(t){var n=new e.Deferred,r=e("<iframe/>").hide().attr("src",t).css(i(this,"iframe")).on("load",function(){n.resolve(r.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return n.promise()}},text:{process:function(t){return e("<div>",{text:t})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(t,n){var r=this,i=new RegExp("^data-"+n+"-(.*)"),a={};return t&&t.attributes&&e.each(t.attributes,function(){var t=this.name.match(i);if(t){var n=this.value,o=e.camelCase(t[1]);if(e.inArray(o,r.functionAttributes)>=0)n=new Function(n);else try{n=e.parseJSON(n)}catch(s){}a[o]=n}}),a},extend:function(t,n){var r=function(){this.constructor=t};return r.prototype=this.prototype,t.prototype=new r,t.__super__=this.prototype,e.extend(t,this,n),t.defaults=t.prototype,t},attach:function(t,n,r){var i=this;"object"!=typeof n||n instanceof e!=0||r||(r=n,n=void 0),r=e.extend({},r);var a,o=r.namespace||i.defaults.namespace,s=e.extend({},i.defaults,i.readElementConfig(t[0],o),r);return t.on(s.openTrigger+"."+s.namespace,s.filter,function(o){var c=e.extend({$source:t,$currentTarget:e(this)},i.readElementConfig(t[0],s.namespace),i.readElementConfig(this,s.namespace),r),l=a||e(this).data("featherlight-persisted")||new i(n,c);"shared"===l.persist?a=l:l.persist!==!1&&e(this).data("featherlight-persisted",l),c.$currentTarget.blur(),l.open(o)}),t},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var t=this;return r(),e.grep(n,function(e){return e instanceof t})},close:function(e){var t=this.current();return t?t.close(e):void 0},_onReady:function(){var t=this;t.autoBind&&(e(t.autoBind).each(function(){t.attach(e(this))}),e(document).on("click",t.autoBind,function(n){n.isDefaultPrevented()||"featherlight"===n.namespace||(n.preventDefault(),t.attach(e(n.currentTarget)),e(n.target).trigger("click.featherlight"))}))},_callbackChain:{onKeyUp:function(t,n){return 27===n.keyCode?(this.closeOnEsc&&e.featherlight.close(n),!1):t(n)},onResize:function(e,t){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),e(t)},afterContent:function(e,t){var n=e(t);return this.onResize(t),n}}}),e.featherlight=t,e.fn.featherlight=function(e,n){return t.attach(this,e,n)},e(document).ready(function(){t._onReady()})}(jQuery),!function(e,t,n,r){"use strict";if(!t.history.pushState)return e.fn.smoothState=function(){return this},void(e.fn.smoothState.options={});if(!e.fn.smoothState){var i=e("html, body"),a=t.console,o={debug:!1,anchors:"a",forms:"form",blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",cacheLength:0,loadingClass:"is-loading",alterRequest:function(e){return e},onBefore:function(e,t){},onStart:{duration:0,render:function(e){}},onProgress:{duration:0,render:function(e){}},onReady:{duration:0,render:function(e,t){e.html(t)}},onAfter:function(e,t){}},s={isExternal:function(e){var n=e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof n[1]&&n[1].length>0&&n[1].toLowerCase()!==t.location.protocol?!0:"string"==typeof n[2]&&n[2].length>0&&n[2].replace(new RegExp(":("+{"http:":80,"https:":443}[t.location.protocol]+")?$"),"")!==t.location.host?!0:!1},stripHash:function(e){return e.replace(/#.*/,"")},isHash:function(e,n){n=n||t.location.href;var r=e.indexOf("#")>-1?!0:!1,i=s.stripHash(e)===s.stripHash(n)?!0:!1;return r&&i},translate:function(t){var n={dataType:"html",type:"GET"};return t="string"==typeof t?e.extend({},n,{url:t}):e.extend({},n,t)},shouldLoadAnchor:function(e,t){var n=e.prop("href");return!(s.isExternal(n)||s.isHash(n)||e.is(t)||e.prop("target"))},clearIfOverCapacity:function(e,t){return Object.keys||(Object.keys=function(e){var t,n=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.push(t);return n}),Object.keys(e).length>t&&(e={}),e},storePageIn:function(t,n,r,i){var a=e(r);return t[n]={status:"loaded",title:a.filter("title").first().text(),html:a.filter("#"+i)},t},triggerAllAnimationEndEvent:function(t,n){n=" "+n||"";var r=0,i="animationstart webkitAnimationStart oanimationstart MSAnimationStart",a="animationend webkitAnimationEnd oanimationend MSAnimationEnd",o="allanimationend",c=function(n){e(n.delegateTarget).is(t)&&(n.stopPropagation(),r++)},l=function(n){e(n.delegateTarget).is(t)&&(n.stopPropagation(),r--,0===r&&t.trigger(o))};t.on(i,c),t.on(a,l),t.on("allanimationend"+n,function(){r=0,s.redraw(t)})},redraw:function(e){e.height()}},c=function(n){if(null!==n.state){var r=t.location.href,i=e("#"+n.state.id),a=i.data("smoothState");a.href===r||s.isHash(r,a.href)||a.load(r,!1)}},l=function(r,o){var c=e(r),l=c.prop("id"),u=null,f=!1,d={},h=t.location.href,p=function(e){e=e||!1,e&&d.hasOwnProperty(e)?delete d[e]:d={},c.data("smoothState").cache=d},g=function(t,n){n=n||e.noop;var r=s.translate(t);if(!d.hasOwnProperty(r.url)||"undefined"!=typeof r.data){d=s.clearIfOverCapacity(d,o.cacheLength),d[r.url]={status:"fetching"};var i=e.ajax(r);i.success(function(e){s.storePageIn(d,r.url,e,l),c.data("smoothState").cache=d}),i.error(function(){d[r.url].status="error"}),n&&i.complete(n)}},m=function(){if(u){var t=e(u,c);if(t.length){var r=t.offset().top;n.body.scrollTop=r}u=null}},v=function(r){var s="#"+l,u=d[r]?e(d[r].html.html()):null;u.length?(n.title=d[r].title,c.data("smoothState").href=r,o.loadingClass&&i.removeClass(o.loadingClass),o.onReady.render(c,u),c.one("ss.onReadyEnd",function(){f=!1,o.onAfter(c,u),m()}),t.setTimeout(function(){c.trigger("ss.onReadyEnd")},o.onReady.duration)):!u&&o.debug&&a?a.warn("No element with an id of "+s+" in response from "+r+" in "+d):t.location=r},y=function(e,n){var r=s.translate(e);"undefined"==typeof n&&(n=!0);var u=!1,f=!1,h={loaded:function(){var e=u?"ss.onProgressEnd":"ss.onStartEnd";f&&u?f&&v(r.url):c.one(e,function(){v(r.url)}),n&&t.history.pushState({id:l},d[r.url].title,r.url)},fetching:function(){u||(u=!0,c.one("ss.onStartEnd",function(){o.loadingClass&&i.addClass(o.loadingClass),o.onProgress.render(c),t.setTimeout(function(){c.trigger("ss.onProgressEnd"),f=!0},o.onProgress.duration)})),t.setTimeout(function(){d.hasOwnProperty(r.url)&&h[d[r.url].status]()},10)},error:function(){o.debug&&a?a.log("There was an error loading: "+r.url):t.location=r.url}};d.hasOwnProperty(r.url)||g(r),o.onStart.render(c),t.setTimeout(function(){i.scrollTop(0),c.trigger("ss.onStartEnd")},o.onStart.duration),h[d[r.url].status]()},w=function(t){var n,r=e(t.currentTarget);s.shouldLoadAnchor(r,o.blacklist)&&!f&&(t.stopPropagation(),n=s.translate(r.prop("href")),n=o.alterRequest(n),g(n))},A=function(t){var n=e(t.currentTarget);if(!t.metaKey&&!t.ctrlKey&&s.shouldLoadAnchor(n,o.blacklist)){var r=s.translate(n.prop("href"));f=!0,t.stopPropagation(),t.preventDefault(),u=n.prop("hash"),r=o.alterRequest(r),o.onBefore(n,c),y(r)}},x=function(t){var n=e(t.currentTarget);if(!n.is(o.blacklist)){t.preventDefault(),t.stopPropagation();var r={url:n.prop("action"),data:n.serialize(),type:n.prop("method")};f=!0,r=o.alterRequest(r),"get"===r.type.toLowerCase()&&(r.url=r.url+"?"+r.data),o.onBefore(n,c),y(r)}},S=function(e){e.on("click",o.anchors,A),e.on("submit",o.forms,x),o.prefetch&&e.on(o.prefetchOn,o.anchors,w)},b=function(){var e=c.prop("class");c.removeClass(e),s.redraw(c),c.addClass(e)};return o=e.extend({},e.fn.smoothState.options,o),null===t.history.state&&t.history.replaceState({id:l},n.title,h),s.storePageIn(d,h,n.documentElement.outerHTML,l),s.triggerAllAnimationEndEvent(c,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),S(c),{href:h,cache:d,clear:p,load:y,fetch:g,restartCSSAnimations:b}},u=function(t){return this.each(function(){var n=this.tagName.toLowerCase();this.id&&"body"!==n&&"html"!==n&&!e.data(this,"smoothState")?e.data(this,"smoothState",new l(this,t)):!this.id&&a?a.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==n&&"html"!==n||!a||a.warn("The smoothstate container cannot be the "+this.tagName+" tag")})};t.onpopstate=c,e.smoothStateUtility=s,e.fn.smoothState=u,e.fn.smoothState.options=o}}(jQuery,window,document),!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<41&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},a=function(){clearTimeout(t),t=setTimeout(i,99)},o=e.matchMedia&&matchMedia("(orientation: landscape)"),s=function(){a(),o&&o.addListener&&o.addListener(a)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?s():document.addEventListener("DOMContentLoaded",s),a}())}(window),function(e,t,n){"use strict";function r(e){return" "===e||"    "===e||"\n"===e||"\f"===e||"\r"===e}function i(t,n){var r=new e.Image;return r.onerror=function(){E[t]=!1,ee()},r.onload=function(){E[t]=1===r.width,ee()},r.src=n,"pending"}function a(){I=!1,B=e.devicePixelRatio,_={},U={},y.DPR=B||1,W.width=Math.max(e.innerWidth||0,C.clientWidth),W.height=Math.max(e.innerHeight||0,C.clientHeight),W.vw=W.width/100,W.vh=W.height/100,v=[W.height,W.width,B].join("-"),W.em=y.getEmValue(),W.rem=W.em}function o(e,t,n,r){var i,a,o,s;return"saveData"===T.algorithm?e>2.7?s=n+1:(a=t-n,i=Math.pow(e-.6,1.5),o=a*i,r&&(o+=.1*i),s=e+o):s=n>1?Math.sqrt(e*t):e,s>n}function s(e){var t,n=y.getSet(e),r=!1;"pending"!==n&&(r=v,n&&(t=y.setRes(n),y.applySetCandidate(t,e))),e[y.ns].evaled=r}function c(e,t){return e.res-t.res}function l(e,t,n){var r;return!n&&t&&(n=e[y.ns].sets,n=n&&n[n.length-1]),r=u(t,n),r&&(t=y.makeUrl(t),e[y.ns].curSrc=t,e[y.ns].curCan=r,r.res||Y(r,r.set.sizes)),r}function u(e,t){var n,r,i;if(e&&t)for(i=y.parseSet(t),e=y.makeUrl(e),n=0;n<i.length;n++)if(e===y.makeUrl(i[n].url)){r=i[n];break}return r}function f(e,t){var n,r,i,a,o=e.getElementsByTagName("source");for(n=0,r=o.length;r>n;n++)i=o[n],i[y.ns]=!0,a=i.getAttribute("srcset"),a&&t.push({srcset:a,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function d(e,t){function n(t){var n,r=t.exec(e.substring(d));return r?(n=r[0],d+=n.length,n):void 0}function i(){var e,n,r,i,a,c,l,u,f,d=!1,p={};for(i=0;i<s.length;i++)a=s[i],c=a[a.length-1],l=a.substring(0,a.length-1),u=parseInt(l,10),f=parseFloat(l),V.test(l)&&"w"===c?((e||n)&&(d=!0),0===u?d=!0:e=u):J.test(l)&&"x"===c?((e||n||r)&&(d=!0),0>f?d=!0:n=f):V.test(l)&&"h"===c?((r||n)&&(d=!0),0===u?d=!0:r=u):d=!0;d||(p.url=o,e&&(p.w=e),n&&(p.d=n),r&&(p.h=r),r||n||e||(p.d=1),1===p.d&&(t.has1x=!0),p.set=t,h.push(p))}function a(){for(n(q),c="",l="in descriptor";;){if(u=e.charAt(d),"in descriptor"===l)if(r(u))c&&(s.push(c),c="",l="after descriptor");else{if(","===u)return d+=1,c&&s.push(c),void i();if("("===u)c+=u,l="in parens";else{if(""===u)return c&&s.push(c),void i();c+=u}}else if("in parens"===l)if(")"===u)c+=u,l="in descriptor";else{if(""===u)return s.push(c),void i();c+=u}else if("after descriptor"===l)if(r(u));else{if(""===u)return void i();l="in descriptor",d-=1}d+=1}}for(var o,s,c,l,u,f=e.length,d=0,h=[];;){if(n(N),d>=f)return h;o=n(G),s=[],","===o.slice(-1)?(o=o.replace(K,""),i()):a()}}function h(e){function t(e){function t(){a&&(o.push(a),a="")}function n(){o[0]&&(s.push(o),o=[])}for(var i,a="",o=[],s=[],c=0,l=0,u=!1;;){if(i=e.charAt(l),""===i)return t(),n(),s;if(u){if("*"===i&&"/"===e[l+1]){u=!1,l+=2,t();continue}l+=1}else{if(r(i)){if(e.charAt(l-1)&&r(e.charAt(l-1))||!a){l+=1;continue}if(0===c){t(),l+=1;continue}i=" "}else if("("===i)c+=1;else if(")"===i)c-=1;else{if(","===i){t(),n(),l+=1;continue}if("/"===i&&"*"===e.charAt(l+1)){u=!0,l+=2;continue}}a+=i,l+=1}}}function n(e){return u.test(e)&&parseFloat(e)>=0?!0:f.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var i,a,o,s,c,l,u=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,f=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(a=t(e),o=a.length,i=0;o>i;i++)if(s=a[i],c=s[s.length-1],n(c)){if(l=c,s.pop(),0===s.length)return l;if(s=s.join(" "),y.matchesMedia(s))return l}return"100vw"}t.createElement("picture");var p,g,m,v,y={},w=function(){},A=t.createElement("img"),x=A.getAttribute,S=A.setAttribute,b=A.removeAttribute,C=t.documentElement,E={},T={algorithm:""},k="data-pfsrc",R=k+"set",z=navigator.userAgent,P=/rident/.test(z)||/ecko/.test(z)&&z.match(/rv\:(\d+)/)&&RegExp.$1>35,L="currentSrc",H=/\s+\+?\d+(e\d+)?w/,O=/(\([^)]+\))?\s*(.+)/,j=e.picturefillCFG,D="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",M="font-size:100%!important;",I=!0,_={},U={},B=e.devicePixelRatio,W={px:1,"in":96},F=t.createElement("a"),Q=!1,q=/^[ \t\n\r\u000c]+/,N=/^[, \t\n\r\u000c]+/,G=/^[^ \t\n\r\u000c]+/,K=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,Z=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},$=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in _))if(_[t]=!1,r&&(i=t.match(e)))_[t]=i[1]*W[i[2]];else try{_[t]=new Function("e",n(t))(W)}catch(a){}return _[t]}}(),Y=function(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){var n,r,i,a=e||{};if(a.elements&&1===a.elements.nodeType&&("IMG"===a.elements.nodeName.toUpperCase()?a.elements=[a.elements]:(a.context=a.elements,a.elements=null)),n=a.elements||y.qsa(a.context||t,a.reevaluate||a.reselect?y.sel:y.selShort),i=n.length){for(y.setupRun(a),Q=!0,r=0;i>r;r++)y.fillImg(n[r],a);y.teardownRun(a)}};p=e.console&&console.warn?function(e){console.warn(e)}:w,L in A||(L="src"),E["image/jpeg"]=!0,E["image/gif"]=!0,E["image/png"]=!0,E["image/svg+xml"]=t.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in A,y.supSizes="sizes"in A,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&!function(e){A.srcset="data:,a",e.src="data:,a",y.supSrcset=A.complete===e.complete,y.supPicture=y.supSrcset&&y.supPicture}(t.createElement("img")),y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=T,y.supSrcset&&(y.sel+=",img["+R+"]"),y.DPR=B||1,y.u=W,y.types=E,m=y.supSrcset&&!y.supSizes,y.setSize=w,y.makeUrl=X(function(e){return F.href=e,F.href}),y.qsa=function(e,t){return e.querySelectorAll(t)},y.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?y.matchesMedia=function(e){return!e||matchMedia(e).matches}:y.matchesMedia=y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return e?$(e):!0},y.calcLength=function(e){var t=$(e,!0)||!1;return 0>t&&(t=!1),t},y.supportsType=function(e){return e?E[e]:!0},y.parseSize=X(function(e){var t=(e||"").match(O);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=d(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!g&&(e=t.body)){var n=t.createElement("div"),r=C.style.cssText,i=e.style.cssText;n.style.cssText=D,C.style.cssText=M,e.style.cssText=M,e.appendChild(n),g=n.offsetWidth,e.removeChild(n),g=parseFloat(g,10),C.style.cssText=r,e.style.cssText=i}return g||16},y.calcListLength=function(e){if(!(e in U)||T.uT){var t=y.calcLength(h(e));U[e]=t?t:W.width}return U[e]},y.setRes=function(e){var t;if(e){t=y.parseSet(e);for(var n=0,r=t.length;r>n;n++)Y(t[n],e.sizes)}return t},y.setRes.res=Y,y.applySetCandidate=function(e,t){if(e.length){var n,r,i,a,s,u,f,d,h,p=t[y.ns],g=y.DPR;if(u=p.curSrc||t[L],f=p.curCan||l(t,u,e[0].set),f&&f.set===e[0].set&&(h=P&&!t.complete&&f.res-.1>g,h||(f.cached=!0,f.res>=g&&(s=f))),!s)for(e.sort(c),a=e.length,s=e[a-1],r=0;a>r;r++)if(n=e[r],n.res>=g){i=r-1,s=e[i]&&(h||u!==y.makeUrl(n.url))&&o(e[i].res,n.res,g,e[i].cached)?e[i]:n;break}s&&(d=y.makeUrl(s.url),p.curSrc=d,p.curCan=s,d!==u&&y.setSrc(t,s),y.setSize(t))}},y.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},y.getSet=function(e){var t,n,r,i=!1,a=e[y.ns].sets;for(t=0;t<a.length&&!i;t++)if(n=a[t],n.srcset&&y.matchesMedia(n.media)&&(r=y.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},y.parseSets=function(e,t,r){var i,a,o,s,c=t&&"PICTURE"===t.nodeName.toUpperCase(),l=e[y.ns];(l.src===n||r.src)&&(l.src=x.call(e,"src"),l.src?S.call(e,k,l.src):b.call(e,k)),(l.srcset===n||r.srcset||!y.supSrcset||e.srcset)&&(i=x.call(e,"srcset"),l.srcset=i,s=!0),l.sets=[],c&&(l.pic=!0,f(t,l.sets)),l.srcset?(a={srcset:l.srcset,sizes:x.call(e,"sizes")},l.sets.push(a),o=(m||l.src)&&H.test(l.srcset||""),o||!l.src||u(l.src,a)||a.has1x||(a.srcset+=", "+l.src,a.cands.push({url:l.src,d:1,set:a}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=n,l.supported=!(c||a&&!y.supSrcset||o),s&&y.supSrcset&&!l.supported&&(i?(S.call(e,R,i),e.srcset=""):b.call(e,R)),l.supported&&!l.srcset&&(!l.src&&e.src||e.src!==y.makeUrl(l.src))&&(null===l.src?e.removeAttribute("src"):e.src=l.src),l.parsed=!0},y.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),n=e[y.ns],(r||n.evaled!==v)&&((!n.parsed||t.reevaluate)&&y.parseSets(e,e.parentNode,t),n.supported?n.evaled=v:s(e))},y.setupRun=function(){(!Q||I||B!==e.devicePixelRatio)&&a()},y.supPicture?(ee=w,y.fillImg=w):!function(){var n,r=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";a=setTimeout(i,"loading"===e?200:999),t.body&&(y.fillImgs(),n=n||r.test(e),n&&clearTimeout(a))},a=setTimeout(i,t.body?9:99),o=function(e,t){var n,r,i=function(){var a=new Date-r;t>a?n=setTimeout(i,t-a):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}},s=C.clientHeight,c=function(){I=Math.max(e.innerWidth||0,C.clientWidth)!==W.width||C.clientHeight!==s,s=C.clientHeight,I&&y.fillImgs()};Z(e,"resize",o(c,99)),Z(t,"readystatechange",i)}(),y.picturefill=ee,y.fillImgs=ee,y.teardownRun=w,ee._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(T[t]=e[0],Q&&y.fillImgs({reselect:!0}))}};for(;j&&j.length;)e.picturefillCFG.push(j.shift());e.picturefill=ee,"object"==typeof module&&"object"==typeof module.exports?module.exports=ee:"function"==typeof define&&define.amd&&define("picturefill",function(){return ee}),y.supPicture||(E["image/webp"]=i("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document);