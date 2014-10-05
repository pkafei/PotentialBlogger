/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);





/*! Hammer.JS - v1.1.3 - 2014-05-20
 * http://eightmedia.github.io/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */


!function(a,b){"use strict";function c(){d.READY||(s.determineEventTypes(),r.each(d.gestures,function(a){u.register(a)}),s.onTouch(d.DOCUMENT,n,u.detect),s.onTouch(d.DOCUMENT,o,u.detect),d.READY=!0)}var d=function v(a,b){return new v.Instance(a,b||{})};d.VERSION="1.1.3",d.defaults={behavior:{userSelect:"none",touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},d.DOCUMENT=document,d.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,d.HAS_TOUCHEVENTS="ontouchstart"in a,d.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent),d.NO_MOUSEEVENTS=d.HAS_TOUCHEVENTS&&d.IS_MOBILE||d.HAS_POINTEREVENTS,d.CALCULATE_INTERVAL=25;var e={},f=d.DIRECTION_DOWN="down",g=d.DIRECTION_LEFT="left",h=d.DIRECTION_UP="up",i=d.DIRECTION_RIGHT="right",j=d.POINTER_MOUSE="mouse",k=d.POINTER_TOUCH="touch",l=d.POINTER_PEN="pen",m=d.EVENT_START="start",n=d.EVENT_MOVE="move",o=d.EVENT_END="end",p=d.EVENT_RELEASE="release",q=d.EVENT_TOUCH="touch";d.READY=!1,d.plugins=d.plugins||{},d.gestures=d.gestures||{};var r=d.utils={extend:function(a,c,d){for(var e in c)!c.hasOwnProperty(e)||a[e]!==b&&d||(a[e]=c[e]);return a},on:function(a,b,c){a.addEventListener(b,c,!1)},off:function(a,b,c){a.removeEventListener(b,c,!1)},each:function(a,c,d){var e,f;if("forEach"in a)a.forEach(c,d);else if(a.length!==b){for(e=0,f=a.length;f>e;e++)if(c.call(d,a[e],e,a)===!1)return}else for(e in a)if(a.hasOwnProperty(e)&&c.call(d,a[e],e,a)===!1)return},inStr:function(a,b){return a.indexOf(b)>-1},inArray:function(a,b){if(a.indexOf){var c=a.indexOf(b);return-1===c?!1:c}for(var d=0,e=a.length;e>d;d++)if(a[d]===b)return d;return!1},toArray:function(a){return Array.prototype.slice.call(a,0)},hasParent:function(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1},getCenter:function(a){var b=[],c=[],d=[],e=[],f=Math.min,g=Math.max;return 1===a.length?{pageX:a[0].pageX,pageY:a[0].pageY,clientX:a[0].clientX,clientY:a[0].clientY}:(r.each(a,function(a){b.push(a.pageX),c.push(a.pageY),d.push(a.clientX),e.push(a.clientY)}),{pageX:(f.apply(Math,b)+g.apply(Math,b))/2,pageY:(f.apply(Math,c)+g.apply(Math,c))/2,clientX:(f.apply(Math,d)+g.apply(Math,d))/2,clientY:(f.apply(Math,e)+g.apply(Math,e))/2})},getVelocity:function(a,b,c){return{x:Math.abs(b/a)||0,y:Math.abs(c/a)||0}},getAngle:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return 180*Math.atan2(d,c)/Math.PI},getDirection:function(a,b){var c=Math.abs(a.clientX-b.clientX),d=Math.abs(a.clientY-b.clientY);return c>=d?a.clientX-b.clientX>0?g:i:a.clientY-b.clientY>0?h:f},getDistance:function(a,b){var c=b.clientX-a.clientX,d=b.clientY-a.clientY;return Math.sqrt(c*c+d*d)},getScale:function(a,b){return a.length>=2&&b.length>=2?this.getDistance(b[0],b[1])/this.getDistance(a[0],a[1]):1},getRotation:function(a,b){return a.length>=2&&b.length>=2?this.getAngle(b[1],b[0])-this.getAngle(a[1],a[0]):0},isVertical:function(a){return a==h||a==f},setPrefixedCss:function(a,b,c,d){var e=["","Webkit","Moz","O","ms"];b=r.toCamelCase(b);for(var f=0;f<e.length;f++){var g=b;if(e[f]&&(g=e[f]+g.slice(0,1).toUpperCase()+g.slice(1)),g in a.style){a.style[g]=(null==d||d)&&c||"";break}}},toggleBehavior:function(a,b,c){if(b&&a&&a.style){r.each(b,function(b,d){r.setPrefixedCss(a,d,b,c)});var d=c&&function(){return!1};"none"==b.userSelect&&(a.onselectstart=d),"none"==b.userDrag&&(a.ondragstart=d)}},toCamelCase:function(a){return a.replace(/[_-]([a-z])/g,function(a){return a[1].toUpperCase()})}},s=d.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(a,b,c,d){var e=b.split(" ");r.each(e,function(b){r.on(a,b,c),d&&d(b)})},off:function(a,b,c,d){var e=b.split(" ");r.each(e,function(b){r.off(a,b,c),d&&d(b)})},onTouch:function(a,b,c){var f=this,g=function(e){var g,h=e.type.toLowerCase(),i=d.HAS_POINTEREVENTS,j=r.inStr(h,"mouse");j&&f.preventMouseEvents||(j&&b==m&&0===e.button?(f.preventMouseEvents=!1,f.shouldDetect=!0):i&&b==m?f.shouldDetect=1===e.buttons||t.matchType(k,e):j||b!=m||(f.preventMouseEvents=!0,f.shouldDetect=!0),i&&b!=o&&t.updatePointer(b,e),f.shouldDetect&&(g=f.doDetect.call(f,e,b,a,c)),g==o&&(f.preventMouseEvents=!1,f.shouldDetect=!1,t.reset()),i&&b==o&&t.updatePointer(b,e))};return this.on(a,e[b],g),g},doDetect:function(a,b,c,d){var e=this.getTouchList(a,b),f=e.length,g=b,h=e.trigger,i=f;b==m?h=q:b==o&&(h=p,i=e.length-(a.changedTouches?a.changedTouches.length:1)),i>0&&this.started&&(g=n),this.started=!0;var j=this.collectEventData(c,g,e,a);return b!=o&&d.call(u,j),h&&(j.changedLength=i,j.eventType=h,d.call(u,j),j.eventType=g,delete j.changedLength),g==o&&(d.call(u,j),this.started=!1),g},determineEventTypes:function(){var b;return b=d.HAS_POINTEREVENTS?a.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:d.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],e[m]=b[0],e[n]=b[1],e[o]=b[2],e},getTouchList:function(a,b){if(d.HAS_POINTEREVENTS)return t.getTouchList();if(a.touches){if(b==n)return a.touches;var c=[],e=[].concat(r.toArray(a.touches),r.toArray(a.changedTouches)),f=[];return r.each(e,function(a){r.inArray(c,a.identifier)===!1&&f.push(a),c.push(a.identifier)}),f}return a.identifier=1,[a]},collectEventData:function(a,b,c,d){var e=k;return r.inStr(d.type,"mouse")||t.matchType(j,d)?e=j:t.matchType(l,d)&&(e=l),{center:r.getCenter(c),timeStamp:Date.now(),target:d.target,touches:c,eventType:b,pointerType:e,srcEvent:d,preventDefault:function(){var a=this.srcEvent;a.preventManipulation&&a.preventManipulation(),a.preventDefault&&a.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return u.stopDetect()}}}},t=d.PointerEvent={pointers:{},getTouchList:function(){var a=[];return r.each(this.pointers,function(b){a.push(b)}),a},updatePointer:function(a,b){a==o||a!=o&&1!==b.buttons?delete this.pointers[b.pointerId]:(b.identifier=b.pointerId,this.pointers[b.pointerId]=b)},matchType:function(a,b){if(!b.pointerType)return!1;var c=b.pointerType,d={};return d[j]=c===(b.MSPOINTER_TYPE_MOUSE||j),d[k]=c===(b.MSPOINTER_TYPE_TOUCH||k),d[l]=c===(b.MSPOINTER_TYPE_PEN||l),d[a]},reset:function(){this.pointers={}}},u=d.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(a,b){this.current||(this.stopped=!1,this.current={inst:a,startEvent:r.extend({},b),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(b))},detect:function(a){if(this.current&&!this.stopped){a=this.extendEventData(a);var b=this.current.inst,c=b.options;return r.each(this.gestures,function(d){!this.stopped&&b.enabled&&c[d.name]&&d.handler.call(d,a,b)},this),this.current&&(this.current.lastEvent=a),a.eventType==o&&this.stopDetect(),a}},stopDetect:function(){this.previous=r.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(a,b,c,e,f){var g=this.current,h=!1,i=g.lastCalcEvent,j=g.lastCalcData;i&&a.timeStamp-i.timeStamp>d.CALCULATE_INTERVAL&&(b=i.center,c=a.timeStamp-i.timeStamp,e=a.center.clientX-i.center.clientX,f=a.center.clientY-i.center.clientY,h=!0),(a.eventType==q||a.eventType==p)&&(g.futureCalcEvent=a),(!g.lastCalcEvent||h)&&(j.velocity=r.getVelocity(c,e,f),j.angle=r.getAngle(b,a.center),j.direction=r.getDirection(b,a.center),g.lastCalcEvent=g.futureCalcEvent||a,g.futureCalcEvent=a),a.velocityX=j.velocity.x,a.velocityY=j.velocity.y,a.interimAngle=j.angle,a.interimDirection=j.direction},extendEventData:function(a){var b=this.current,c=b.startEvent,d=b.lastEvent||c;(a.eventType==q||a.eventType==p)&&(c.touches=[],r.each(a.touches,function(a){c.touches.push({clientX:a.clientX,clientY:a.clientY})}));var e=a.timeStamp-c.timeStamp,f=a.center.clientX-c.center.clientX,g=a.center.clientY-c.center.clientY;return this.getCalculatedData(a,d.center,e,f,g),r.extend(a,{startEvent:c,deltaTime:e,deltaX:f,deltaY:g,distance:r.getDistance(c.center,a.center),angle:r.getAngle(c.center,a.center),direction:r.getDirection(c.center,a.center),scale:r.getScale(c.touches,a.touches),rotation:r.getRotation(c.touches,a.touches)}),a},register:function(a){var c=a.defaults||{};return c[a.name]===b&&(c[a.name]=!0),r.extend(d.defaults,c,!0),a.index=a.index||1e3,this.gestures.push(a),this.gestures.sort(function(a,b){return a.index<b.index?-1:a.index>b.index?1:0}),this.gestures}};d.Instance=function(a,b){var e=this;c(),this.element=a,this.enabled=!0,r.each(b,function(a,c){delete b[c],b[r.toCamelCase(c)]=a}),this.options=r.extend(r.extend({},d.defaults),b||{}),this.options.behavior&&r.toggleBehavior(this.element,this.options.behavior,!0),this.eventStartHandler=s.onTouch(a,m,function(a){e.enabled&&a.eventType==m?u.startDetect(e,a):a.eventType==q&&u.detect(a)}),this.eventHandlers=[]},d.Instance.prototype={on:function(a,b){var c=this;return s.on(c.element,a,b,function(a){c.eventHandlers.push({gesture:a,handler:b})}),c},off:function(a,b){var c=this;return s.off(c.element,a,b,function(a){var d=r.inArray({gesture:a,handler:b});d!==!1&&c.eventHandlers.splice(d,1)}),c},trigger:function(a,b){b||(b={});var c=d.DOCUMENT.createEvent("Event");c.initEvent(a,!0,!0),c.gesture=b;var e=this.element;return r.hasParent(b.target,e)&&(e=b.target),e.dispatchEvent(c),this},enable:function(a){return this.enabled=a,this},dispose:function(){var a,b;for(r.toggleBehavior(this.element,this.options.behavior,!1),a=-1;b=this.eventHandlers[++a];)r.off(this.element,b.gesture,b.handler);return this.eventHandlers=[],s.off(this.element,e[m],this.eventStartHandler),null}},function(a){function b(b,d){var e=u.current;if(!(d.options.dragMaxTouches>0&&b.touches.length>d.options.dragMaxTouches))switch(b.eventType){case m:c=!1;break;case n:if(b.distance<d.options.dragMinDistance&&e.name!=a)return;var j=e.startEvent.center;if(e.name!=a&&(e.name=a,d.options.dragDistanceCorrection&&b.distance>0)){var k=Math.abs(d.options.dragMinDistance/b.distance);j.pageX+=b.deltaX*k,j.pageY+=b.deltaY*k,j.clientX+=b.deltaX*k,j.clientY+=b.deltaY*k,b=u.extendEventData(b)}(e.lastEvent.dragLockToAxis||d.options.dragLockToAxis&&d.options.dragLockMinDistance<=b.distance)&&(b.dragLockToAxis=!0);var l=e.lastEvent.direction;b.dragLockToAxis&&l!==b.direction&&(b.direction=r.isVertical(l)?b.deltaY<0?h:f:b.deltaX<0?g:i),c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),d.trigger(a+b.direction,b);var q=r.isVertical(b.direction);(d.options.dragBlockVertical&&q||d.options.dragBlockHorizontal&&!q)&&b.preventDefault();break;case p:c&&b.changedLength<=d.options.dragMaxTouches&&(d.trigger(a+"end",b),c=!1);break;case o:c=!1}}var c=!1;d.gestures.Drag={name:a,index:50,handler:b,defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag"),d.gestures.Gesture={name:"gesture",index:1337,handler:function(a,b){b.trigger(this.name,a)}},function(a){function b(b,d){var e=d.options,f=u.current;switch(b.eventType){case m:clearTimeout(c),f.name=a,c=setTimeout(function(){f&&f.name==a&&d.trigger(a,b)},e.holdTimeout);break;case n:b.distance>e.holdThreshold&&clearTimeout(c);break;case p:clearTimeout(c)}}var c;d.gestures.Hold={name:a,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:b}}("hold"),d.gestures.Release={name:"release",index:1/0,handler:function(a,b){a.eventType==p&&b.trigger(this.name,a)}},d.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(a,b){if(a.eventType==p){var c=a.touches.length,d=b.options;if(c<d.swipeMinTouches||c>d.swipeMaxTouches)return;(a.velocityX>d.swipeVelocityX||a.velocityY>d.swipeVelocityY)&&(b.trigger(this.name,a),b.trigger(this.name+a.direction,a))}}},function(a){function b(b,d){var e,f,g=d.options,h=u.current,i=u.previous;switch(b.eventType){case m:c=!1;break;case n:c=c||b.distance>g.tapMaxDistance;break;case o:!r.inStr(b.srcEvent.type,"cancel")&&b.deltaTime<g.tapMaxTime&&!c&&(e=i&&i.lastEvent&&b.timeStamp-i.lastEvent.timeStamp,f=!1,i&&i.name==a&&e&&e<g.doubleTapInterval&&b.distance<g.doubleTapDistance&&(d.trigger("doubletap",b),f=!0),(!f||g.tapAlways)&&(h.name=a,d.trigger(h.name,b)))}}var c=!1;d.gestures.Tap={name:a,index:100,handler:b,defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap"),d.gestures.Touch={name:"touch",index:-1/0,defaults:{preventDefault:!1,preventMouse:!1},handler:function(a,b){return b.options.preventMouse&&a.pointerType==j?void a.stopDetect():(b.options.preventDefault&&a.preventDefault(),void(a.eventType==q&&b.trigger("touch",a)))}},function(a){function b(b,d){switch(b.eventType){case m:c=!1;break;case n:if(b.touches.length<2)return;var e=Math.abs(1-b.scale),f=Math.abs(b.rotation);if(e<d.options.transformMinScale&&f<d.options.transformMinRotation)return;u.current.name=a,c||(d.trigger(a+"start",b),c=!0),d.trigger(a,b),f>d.options.transformMinRotation&&d.trigger("rotate",b),e>d.options.transformMinScale&&(d.trigger("pinch",b),d.trigger("pinch"+(b.scale<1?"in":"out"),b));break;case p:c&&b.changedLength<2&&(d.trigger(a+"end",b),c=!1)}}var c=!1;d.gestures.Transform={name:a,index:45,defaults:{transformMinScale:.01,transformMinRotation:1},handler:b}}("transform"),"function"==typeof define&&define.amd?define(function(){return d}):"undefined"!=typeof module&&module.exports?module.exports=d:a.Hammer=d}(window);
//# sourceMappingURL=hammer.min.map



 /* http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2014 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function(window, undefined) {
  'use strict';

function setupPlugin(Hammer, $) {
    // provide polyfill for Date.now()
    // browser support: http://kangax.github.io/es5-compat-table/#Date.now
    if(!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }

    /**
     * the methods on/off are called by the instance, but with the jquery plugin
     * we use the jquery event methods instead.
     * @this    {Hammer.Instance}
     * @return  {jQuery}
     */
    Hammer.utils.each(['on', 'off'], function(method) {
        Hammer.utils[method] = function(element, type, handler) {
            $(element)[method](type, function($ev) {
                // append the jquery fixed properties/methods
                var data = $.extend({}, $ev.originalEvent, $ev);
                if(data.button === undefined) {
                    data.button = $ev.which - 1;
                }
                handler.call(this, data);
            });
        };
    });

    /**
     * trigger events
     * this is called by the gestures to trigger an event like 'tap'
     * @this    {Hammer.Instance}
     * @param   {String}    gesture
     * @param   {Object}    eventData
     * @return  {jQuery}
     */
    Hammer.Instance.prototype.trigger = function(gesture, eventData) {
        var el = $(this.element);
        if(el.has(eventData.target).length) {
            el = $(eventData.target);
        }

        return el.trigger({
            type: gesture,
            gesture: eventData
        });
    };

    /**
     * jQuery plugin
     * create instance of Hammer and watch for gestures,
     * and when called again you can change the options
     * @param   {Object}    [options={}]
     * @return  {jQuery}
     */
    $.fn.hammer = function(options) {
        return this.each(function() {
            var el = $(this);
            var inst = el.data('hammer');

            // start new hammer instance
            if(!inst) {
                el.data('hammer', new Hammer(this, options || {}));
                // change the options
            } else if(inst && options) {
                Hammer.utils.extend(inst.options, options);
            }
        });
    };
}


// AMD
if(typeof define == 'function' && define.amd) {
    define(['hammerjs', 'jquery'], setupPlugin);
} else {
    setupPlugin(window.Hammer, window.jQuery || window.Zepto);
}

})(window);


/*
jquery.animate-enhanced plugin v1.10
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett

(function(d,w){"function"===typeof define&&define.amd?define(["jquery"],function(){return w.apply(d,arguments)}):"object"===typeof module&&module.exports?module.exports=w.call(d,require("jquery")):w.call(d,d.jQuery)})("object"===typeof global?global:this,function(d){function w(a,b,k,c){if("d"!=k&&D(a)){var f=K.exec(b),e="auto"===a.css(k)?0:a.css(k),e="string"==typeof e?A(e):e;"string"==typeof b&&A(b);c=!0===c?0:e;var g=a.is(":hidden"),n=a.translation();"left"==k&&(c=parseInt(e,10)+n.x);"right"==k&&
(c=parseInt(e,10)+n.x);"top"==k&&(c=parseInt(e,10)+n.y);"bottom"==k&&(c=parseInt(e,10)+n.y);if(f||"show"!=b)f||"hide"!=b||(c=0);else if(c=1,g)elem=a[0],elem.style&&(display=elem.style.display,d._data(elem,"olddisplay")||"none"!==display||(display=elem.style.display=""),""===display&&"none"===d.css(elem,"display")&&d._data(elem,"olddisplay",L(elem.tagName)),""===display||"none"===display)&&(elem.style.display=d._data(elem,"olddisplay")||""),a.css("opacity",0);return f?(a=parseFloat(f[2]),f[1]&&(a=
("-="===f[1]?-1:1)*a+parseInt(c,10)),f[3]&&"px"!=f[3]&&(a+=f[3]),a):c}}function M(a,b,k,c,f,e,g,n){var m=a.data(r),m=m&&!q(m)?m:d.extend(!0,{},N),s=f;if(-1<d.inArray(b,B)){var l=m.meta,p=A(a.css(b))||0,t=b+"_o",s=f-p;l[b]=s;l[t]="auto"==a.css(b)?0+s:p+s||0;m.meta=l;g&&0===s&&(s=0-l[t],l[b]=s,l[t]=0)}return a.data(r,O(a,m,b,k,c,s,e,g,n))}function O(a,b,d,c,f,e,g,n,m){var s=!1;g=!0===g&&!0===n;b=b||{};b.original||(b.original={},s=!0);b.properties=b.properties||{};b.secondary=b.secondary||{};n=b.meta;
for(var r=b.original,p=b.properties,t=b.secondary,h=l.length-1;0<=h;h--){var u=l[h]+"transition-property",v=l[h]+"transition-duration",q=l[h]+"transition-timing-function";d=g?l[h]+"transform":d;s&&(r[u]=a.css(u)||"",r[v]=a.css(v)||"",r[q]=a.css(q)||"");var P=t,w=d,x;if(g){x=n.left;var E=n.top;x=!0===m||!0===C&&!1!==m&&F?"translate3d("+x+"px, "+E+"px, 0)":"translate("+x+"px,"+E+"px)"}else x=e;P[w]=x;p[u]=(p[u]?p[u]+",":"")+d;p[v]=(p[v]?p[v]+",":"")+c+"ms";p[q]=(p[q]?p[q]+",":"")+f}return b}function Q(a){for(var b in a)if(!("width"!=
b&&"height"!=b||"show"!=a[b]&&"hide"!=a[b]&&"toggle"!=a[b]))return!0;return!1}function q(a){for(var b in a)return!1;return!0}function L(a){a=a.toUpperCase();var b={LI:"list-item",TR:"table-row",TD:"table-cell",TH:"table-cell",CAPTION:"table-caption",COL:"table-column",COLGROUP:"table-column-group",TFOOT:"table-footer-group",THEAD:"table-header-group",TBODY:"table-row-group"};return"string"==typeof b[a]?b[a]:"block"}function A(a){return parseFloat(a.replace(a.match(/\D+$/),""))}function D(a){var b=
!0;a.each(function(a,d){return b=b&&d.ownerDocument});return b}function R(a,b,k){if(!D(k))return!1;var c=-1<d.inArray(a,S);"width"!=a&&"height"!=a&&"opacity"!=a||parseFloat(b)!==parseFloat(k.css(a))||(c=!1);return c}var G=d.fn.animate,H=d.fn.stop,S="top right bottom left opacity height width".split(" "),B=["top","right","bottom","left"],l=["-webkit-","-moz-","-o-",""],T=["avoidTransforms","useTranslate3d","leaveTransforms"],K=/^([+-]=)?([\d+-.]+)(.*)$/,U=/([A-Z])/g,N={secondary:{},meta:{top:0,right:0,
bottom:0,left:0}},r="jQe",I=null,y=!1,z=(document.body||document.documentElement).style,J=void 0!==z.WebkitTransition||void 0!==z.MozTransition||void 0!==z.OTransition||void 0!==z.transition,F="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,C=F;d.expr&&d.expr.filters&&(I=d.expr.filters.animated,d.expr.filters.animated=function(a){return d(a).data("events")&&d(a).data("events")["webkitTransitionEnd oTransitionEnd transitionend"]?!0:I.call(this,a)});d.extend({toggle3DByDefault:function(){return C=
!C},toggleDisabledByDefault:function(){return y=!y},setDisabledByDefault:function(a){return y=a}});d.fn.translation=function(){if(!this[0])return null;var a=window.getComputedStyle(this[0],null),b={x:0,y:0};if(a)for(var d=l.length-1;0<=d;d--){var c=a.getPropertyValue(l[d]+"transform");if(c&&/matrix/i.test(c)){a=c.replace(/^matrix\(/i,"").split(/, |\)$/g);b={x:parseInt(a[4],10),y:parseInt(a[5],10)};break}}return b};d.fn.animate=function(a,b,k,c){a=a||{};var f=!("undefined"!==typeof a.bottom||"undefined"!==
typeof a.right),e=d.speed(b,k,c),g=0,n=function(){g--;0===g&&"function"===typeof e.complete&&e.complete.apply(this,arguments)};return!0===("undefined"!==typeof a.avoidCSSTransitions?a.avoidCSSTransitions:y)||!J||q(a)||Q(a)||0>=e.duration||e.step?G.apply(this,arguments):this[!0===e.queue?"queue":"each"](function(){var b=d(this),c=d.extend({},e),k=function(c){var e=b.data(r)||{original:{}},g={};if(2==c.eventPhase){if(!0!==a.leaveTransforms){for(c=l.length-1;0<=c;c--)g[l[c]+"transform"]="";if(f&&"undefined"!==
typeof e.meta){c=0;for(var h;h=B[c];++c){var k=e.meta[h+"_o"];k&&(g[h]=k+"px",d(this).css(h,g[h]))}}}b.unbind("webkitTransitionEnd oTransitionEnd transitionend").css(e.original).css(g).data(r,null);"hide"===a.opacity&&(elem=b[0],elem.style&&(display=d.css(elem,"display"),"none"===display||d._data(elem,"olddisplay")||d._data(elem,"olddisplay",display),elem.style.display="none"),b.css("opacity",""));n.call(this)}},p={bounce:"cubic-bezier(0.0, 0.35, .5, 1.3)",linear:"linear",swing:"ease-in-out",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",
easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInExpo:"cubic-bezier(0.950, 0.050, 0.795, 0.035)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",
easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",
easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)"},t={},p=p[c.easing||"swing"]?p[c.easing||"swing"]:c.easing||"swing",h;for(h in a)if(-1===d.inArray(h,T)){var u=-1<d.inArray(h,B),v=w(b,a[h],h,u&&!0!==a.avoidTransforms);R(h,v,b)?M(b,h,c.duration,p,v,u&&!0!==a.avoidTransforms,f,a.useTranslate3d):t[h]=a[h]}b.unbind("webkitTransitionEnd oTransitionEnd transitionend");
h=b.data(r);if(!h||q(h)||q(h.secondary))c.queue=!1;else{g++;b.css(h.properties);var y=h.secondary;setTimeout(function(){b.bind("webkitTransitionEnd oTransitionEnd transitionend",k).css(y)})}q(t)||(g++,G.apply(b,[t,{duration:c.duration,easing:d.easing[c.easing]?c.easing:d.easing.swing?"swing":"linear",complete:n,queue:c.queue}]));return!0})};d.fn.animate.defaults={};d.fn.stop=function(a,b,k){if(!J)return H.apply(this,[a,b]);a&&this.queue([]);this.each(function(){var c=d(this),f=c.data(r);if(f&&!q(f)){var e,
g={};if(b){if(g=f.secondary,!k&&void 0!==typeof f.meta.left_o||void 0!==typeof f.meta.top_o)for(g.left=void 0!==typeof f.meta.left_o?f.meta.left_o:"auto",g.top=void 0!==typeof f.meta.top_o?f.meta.top_o:"auto",e=l.length-1;0<=e;e--)g[l[e]+"transform"]=""}else if(!q(f.secondary)){var n=window.getComputedStyle(c[0],null);if(n)for(var m in f.secondary)if(f.secondary.hasOwnProperty(m)&&(m=m.replace(U,"-$1").toLowerCase(),g[m]=n.getPropertyValue(m),!k&&/matrix/i.test(g[m])))for(e=g[m].replace(/^matrix\(/i,
"").split(/, |\)$/g),g.left=parseFloat(e[4])+parseFloat(c.css("left"))+"px"||"auto",g.top=parseFloat(e[5])+parseFloat(c.css("top"))+"px"||"auto",e=l.length-1;0<=e;e--)g[l[e]+"transform"]=""}c.unbind("webkitTransitionEnd oTransitionEnd transitionend");c.css(f.original).css(g).data(r,null)}else H.apply(c,[a,b])});return this}});


*/




/**************************************\
 *  cssAnimate 1.1.8 for jQuery       *
 *  (c) 2013 - Clemens Damke          *
 *  Licensed under MIT License        *
 *  Works with jQuery >=1.4.3         *
\**************************************/
(function(e){var t=parseFloat(e.fn.jquery);if(!t)t=0;var n=["Webkit","Moz","O","Ms","Khtml",""];var r=["borderRadius","boxShadow","userSelect","transformOrigin","transformStyle","transition","transitionDuration","transitionProperty","transitionTimingFunction","backgroundOrigin","backgroundSize","animation","filter","zoom","columns","perspective","perspectiveOrigin","appearance"];e.fn.cssSetQueue=function(t,n){v=this;var r=v.data("cssQueue")?v.data("cssQueue"):[];var i=v.data("cssCall")?v.data("cssCall"):[];var s=0;var o={};e.each(n,function(e,t){o[e]=t});while(1){if(!i[s]){i[s]=o.complete;break}s++}o.complete=s;r.push([t,o]);v.data({cssQueue:r,cssRunning:true,cssCall:i})};e.fn.cssRunQueue=function(){v=this;var e=v.data("cssQueue")?v.data("cssQueue"):[];if(e[0])v.cssEngine(e[0][0],e[0][1]);else v.data("cssRunning",false);e.shift();v.data("cssQueue",e)};e.cssMerge=function(t,n,r){e.each(n,function(n,i){e.each(r,function(e,r){t[r+n]=i})});return t};e.fn.cssAnimationData=function(e,t){var n=this;var r=n.data("cssAnimations");if(!r)r={};if(!r[e])r[e]=[];r[e].push(t);n.data("cssAnimations",r);return r[e]};e.fn.cssAnimationRemove=function(){var t=this;var n=t.data("cssAnimations");var r=t.data("identity");e.each(n,function(e,t){n[e]=t.splice(r+1,1)});t.data("cssAnimations",n)};e.css3D=function(t){e("body").data("cssPerspective",isFinite(t)?t:t?1e3:0).cssOriginal(e.cssMerge({},{TransformStyle:t?"preserve-3d":"flat"},n))};e.cssPropertySupporter=function(t){e.each(r,function(r,i){if(t[i])e.each(n,function(e,n){var r=i.substr(0,1);t[n+r[n?"toUpperCase":"toLowerCase"]()+i.substr(1)]=t[i]})});return t};e.cssAnimateSupport=function(){var t=false;e.each(n,function(e,n){t=document.body.style[n+"AnimationName"]!==undefined?true:t});return t};e.fn.cssEngine=function(t,r){function s(e){return String(e).replace(/([A-Z])/g,"-$1").toLowerCase()}var i=this;var i=this;if(typeof r.complete=="number")i.data("cssCallIndex",r.complete);var o={linear:"linear",swing:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};var u={};var a=e("body").data("cssPerspective");if(t.transform)e.each(n,function(e,n){var r=n+(n?"T":"t")+"ransform";var o=i.cssOriginal(s(r));var f=t.transform;if(!o||o=="none")u[r]="scale(1)";t[r]=(a&&!/perspective/gi.test(f)?"perspective("+a+") ":"")+f});t=e.cssPropertySupporter(t);var f=[];e.each(t,function(e,t){f.push(s(e))});var l=false;var c=[];var h=[];for(var p=0;p<f.length;p++){c.push(String(r.duration/1e3)+"s");var d=o[r.easing];h.push(d?d:r.easing)}c=i.cssAnimationData("dur",c.join(", ")).join(", ");h=i.cssAnimationData("eas",h.join(", ")).join(", ");var v=i.cssAnimationData("prop",f.join(", "));i.data("identity",v.length-1);v=v.join(", ");var m={transitionDuration:i.css("transition-duration")};var g={TransitionDuration:c,TransitionProperty:v,TransitionTimingFunction:h};var y={};y=e.cssMerge(y,g,n);var b=t;e.extend(y,t);if(y.display=="callbackHide")l=true;else if(y.display)u["display"]=y.display;i.cssOriginal(u);setTimeout(function(){i.cssOriginal(y);var t=i.data("runningCSS");t=!t?b:e.extend(t,b);i.data("runningCSS",t);setTimeout(function(){i.css(m);i.data("cssCallIndex","a");if(l)i.cssOriginal("display","none");i.cssAnimationRemove();if(r.queue)i.cssRunQueue();if(typeof r.complete=="number"){i.data("cssCall")[r.complete].call(i);i.data("cssCall")[r.complete]=0}else r.complete.call(i)},r.duration)},0)};e.str2Speed=function(e){return isNaN(e)?e=="slow"?1e3:e=="fast"?200:600:e};e.fn.cssAnimate=function(t,n,r,i){var s=this;var o={duration:0,easing:"swing",complete:function(){},queue:true};var u={};u=typeof n=="object"?n:{duration:n};u[r?typeof r=="function"?"complete":"easing":0]=r;u[i?"complete":0]=i;u.duration=e.str2Speed(u.duration);e.extend(o,u);if(e.cssAnimateSupport()){s.each(function(n,r){r=e(r);if(o.queue){var i=!r.data("cssRunning");r.cssSetQueue(t,o);if(i)r.cssRunQueue()}else r.cssEngine(t,o)})}else s.animate(t,o);return s};e.cssPresetOptGen=function(e,t){var n={};n[e?typeof e=="function"?"complete":"easing":0]=e;n[t?"complete":0]=t;return n};e.fn.cssFadeTo=function(t,n,r,i){var s=this;opt=e.cssPresetOptGen(r,i);var o={opacity:n};opt.duration=t;if(e.cssAnimateSupport()){s.each(function(t,r){r=e(r);if(r.data("displayOriginal")!=r.cssOriginal("display")&&r.cssOriginal("display")!="none")r.data("displayOriginal",r.cssOriginal("display")?r.cssOriginal("display"):"block");else r.data("displayOriginal","block");o.display=n?r.data("displayOriginal"):"callbackHide";r.cssAnimate(o,opt)})}else s.fadeTo(t,opt);return s};e.fn.cssFadeOut=function(t,n,r){if(e.cssAnimateSupport()){if(!this.cssOriginal("opacity"))this.cssOriginal("opacity",1);this.cssFadeTo(t,0,n,r)}else this.fadeOut(t,n,r);return this};e.fn.cssFadeIn=function(t,n,r){if(e.cssAnimateSupport()){if(this.cssOriginal("opacity"))this.cssOriginal("opacity",0);this.cssFadeTo(t,1,n,r)}else this.fadeIn(t,n,r);return this};e.cssPx2Int=function(e){return e.split("p")[0]*1};e.fn.cssStop=function(){var t=this,r=0;t.data("cssAnimations",false).each(function(i,s){s=e(s);var o={TransitionDuration:"0s"};var u=s.data("runningCSS");var a={};if(u)e.each(u,function(t,n){n=isFinite(e.cssPx2Int(n))?e.cssPx2Int(n):n;var r=[0,1];var i={color:["#000","#fff"],background:["#000","#fff"],"float":["none","left"],clear:["none","left"],border:["none","0px solid #fff"],position:["absolute","relative"],family:["Arial","Helvetica"],display:["none","block"],visibility:["hidden","visible"],transform:["translate(0,0)","scale(1)"]};e.each(i,function(e,n){if((new RegExp(e,"gi")).test(t))r=n});a[t]=r[0]!=n?r[0]:r[1]});else u={};o=e.cssMerge(a,o,n);s.cssOriginal(o);setTimeout(function(){var n=e(t[r]);n.cssOriginal(u).data({runningCSS:{},cssAnimations:{},cssQueue:[],cssRunning:false});if(typeof n.data("cssCallIndex")=="number")n.data("cssCall")[n.data("cssCallIndex")].call(n);n.data("cssCall",[]);r++},0)});return t};e.fn.cssDelay=function(e){return this.cssAnimate({},e)};e.fn.cssOriginal=e.fn.css;if(t<1.8)e.fn.css=function(t,n){var r=this,i={};if(typeof t=="string")if(n)i[e.camelCase(t)]=n;else return r.cssOriginal(t);else i=t;i=e.cssPropertySupporter(i);r.cssOriginal(i);return r};e.cssReplace=function(){e.fn.css=function(r,i){var s=this,o={};if(typeof r=="string")if(i)o[e.camelCase(r)]=i;else return s.cssOriginal(r);else o=r;if(!o.transitionDuration)o.transitionDuration="0s";if(t<1.8)o=e.cssPropertySupporter(o);var u=e("body").data("cssPerspective");if(o.transform)e.each(t<1.8?n:[""],function(e,t){var n=t+(t?"T":"t")+"ransform";var r=o.transform;o[n]=(u&&!/perspective/gi.test(r)?"perspective("+u+") ":"")+r});var a=s.cssOriginal("transition-duration");s.cssOriginal(o);setTimeout(function(){s.cssOriginal("transition-duration",a)},0);return s}}})(jQuery)









var trd_jQ =jQuery.noConflict(true);
















var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var a="";var k,h,f,j,g,e,d;var b=0;c=Base64._utf8_encode(c);while(b<c.length){k=c.charCodeAt(b++);h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a=a+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(e)+this._keyStr.charAt(d)}return a},decode:function(c){var a="";var k,h,f;var j,g,e,d;var b=0;if("undefined"==c){return false}c=c.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(b<c.length){j=this._keyStr.indexOf(c.charAt(b++));g=this._keyStr.indexOf(c.charAt(b++));e=this._keyStr.indexOf(c.charAt(b++));d=this._keyStr.indexOf(c.charAt(b++));k=(j<<2)|(g>>4);h=((g&15)<<4)|(e>>2);f=((e&3)<<6)|d;a=a+String.fromCharCode(k);if(e!=64){a=a+String.fromCharCode(h)}if(d!=64){a=a+String.fromCharCode(f)}}a=Base64._utf8_decode(a);return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");var a="";for(var e=0;e<b.length;e++){var d=b.charCodeAt(e);if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)}}}return a},_utf8_decode:function(a){var b="";var d=0;var e=c1=c2=0;while(d<a.length){e=a.charCodeAt(d);if(e<128){b+=String.fromCharCode(e);d++}else{if((e>191)&&(e<224)){c2=a.charCodeAt(d+1);b+=String.fromCharCode(((e&31)<<6)|(c2&63));d+=2}else{c2=a.charCodeAt(d+1);c3=a.charCodeAt(d+2);b+=String.fromCharCode(((e&15)<<12)|((c2&63)<<6)|(c3&63));d+=3}}}return b}};


trd_jQ.fn.reverse = function() {
    return this.pushStack(this.get().reverse(), arguments);
};

var isset_jquery = function(){
  return (window.trd_jQ) ? 1 : 0;
};



/*Browser library*/
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},

	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]

};
BrowserDetect.init();

// Create new ieUserAgent object
var ieUserAgent = {
    init: function() {
// Get the user agent string
	var ua = navigator.userAgent;
	this.compatibilityMode = false;
// Detect whether or not the browser is IE
	var ieRegex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	if (ieRegex.exec(ua) == null){
	    this.exception = "The user agent detected does not contai Internet Explorer.";
	    return false;
	}

// Get the current "emulated" version of IE
	this.renderVersion = parseFloat(RegExp.$1);
	this.version = this.renderVersion;

// Check the browser version with the rest of the agent string to detect compatibility mode
	if (ua.indexOf("Trident/6.0") > -1) {
	    if (ua.indexOf("MSIE 7.0") > -1) {
		this.compatibilityMode = true;
		this.version = 10; // IE 10
	    }
	}
	else if (ua.indexOf("Trident/5.0") > -1) {
	    if (ua.indexOf("MSIE 7.0") > -1) {
		this.compatibilityMode = true;
		this.version = 9; // IE 9
	    }
	}
	else if (ua.indexOf("Trident/4.0") > -1) {
	    if (ua.indexOf("MSIE 7.0") > -1) {
		this.compatibilityMode = true;
		this.version = 8; // IE 8
	    }
	}
	else if (ua.indexOf("MSIE 7.0") > -1)
	    this.version = 7; // IE 7
	else
	    this.version = 6; // IE 6
    }
};











var cookie = {
    // возвращает cookie если есть или undefined
    get: function (name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined 
     },

    // уcтанавливает cookie
    set : function(name, value, props) {
	props = props || {}
	var exp = props.expires
	if (typeof exp == "number" && exp) {
		var d = new Date()
		d.setTime(d.getTime() + exp*1000)
		exp = props.expires = d
	}
	if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

	value = encodeURIComponent(value)
	var updatedCookie = name + "=" + value
	for(var propName in props){
		updatedCookie += "; " + propName
		var propValue = props[propName]
		if(propValue !== true){ updatedCookie += "=" + propValue }
	}
	document.cookie = updatedCookie

    },
    // удаляет cookie
    erase : function(name) {
	cookie.set(name, null, { expires: -1 })
    }
};

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
	//return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	return navigator.userAgent.match(/iPhone|iPod/i);
        
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var is_mobile =  isMobile.any() ? 1 : 0;
var agent = isMobile.any();
if(is_ipad()) {agent = 'iPad';}
if(!agent) {agent = 'desktop';}


function is_ipad(){
      return navigator.userAgent.match(/iPad/i);
 } 
 
 function is_ipad_true(){
      if (navigator.userAgent.match(/iPad/i) == 'iPad') {
	  return 1 ;
      }
      
     return 0;
 }
 
 
function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

function f_clientHeight() {
	return f_filterResults (
		window.innerHeight ? window.innerHeight : 0,
		document.documentElement ? document.documentElement.clientHeight : 0,
		document.body ? document.body.clientHeight : 0
	);
}

function f_scrollTop() {
	return f_filterResults (
		window.pageYOffset ? window.pageYOffset : 0,
		document.documentElement ? document.documentElement.scrollTop : 0,
		document.body ? document.body.scrollTop : 0
	);
}

function IsScrollbarAtBottom(atbottom) {
    var documentHeight   = trd_jQ(document).height();
    var scrollDifference = trd_jQ(window).height() + trd_jQ(window).scrollTop();
    //console.log('s='+scrollDifference+'d='+documentHeight);
    // console.log('s='+(scrollDifference-documentHeight)*atbottom+'d='+f_clientHeight()*atbottom);
        if(!document.doctype){
	    var h = 900;
	//    console.log('s '+h*atbottom+' d'+f_scrollTop());
	    document.getElementsByTagName('body')[0].style.height =/* windowHeight*+*/  h+"px";
	    return  ( h*atbottom < f_scrollTop());
	}else{
	   return (documentHeight*atbottom < scrollDifference);
	}
//	return (documentHeight*atbottom < scrollDifference);
}

function f_filterResults(n_win, n_docel, n_body) {
	var n_result = n_win ? n_win : 0;
	if (n_docel && (!n_result || (n_result > n_docel)))
		n_result = n_docel;
	return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
}

function getURLParameters(paramName) {
        var sURL = window.document.URL.toString();  
    if (sURL.indexOf("?") > 0)
    {
       var arrParams = sURL.split("?");         
       var arrURLParams = arrParams[1].split("&");      
       var arrParamNames = new Array(arrURLParams.length);
       var arrParamValues = new Array(arrURLParams.length);     
       var i = 0;
       for (i=0;i<arrURLParams.length;i++)
       {
        var sParam =  arrURLParams[i].split("=");
        arrParamNames[i] = sParam[0];
        if (sParam[1] != "")
            arrParamValues[i] = unescape(sParam[1]);
        else
            arrParamValues[i] = "No Value";
       }

       for (i=0;i<arrURLParams.length;i++)
       {
                if(arrParamNames[i] == paramName){
            //alert("Param:"+arrParamValues[i]);
                return arrParamValues[i];
             }else{
		 return 0;
	     }
       }
       return "No Parameters Found";
    }
    
    return 0;

}

function log(){
    "use strict";

    if (typeof(console) !== "undefined" && console.log !== undefined)
    {
        try
        {
            console.log.apply(console, arguments);
        }
        catch (e)
        {
            var log = Function.prototype.bind.call(console.log, console);
            log.apply(console, arguments);
        }
    }
}

/*JSONP*/
(function(window, undefined) {
  var JSONP = function(url, method, callback){
    url = url || '';
    method = method || '';
    callback = callback || function(){};

    if(typeof method === 'function'){
      callback = method;
      method = 'callback';
    }

    var generatedFunction ='jsonp'+Math.round(Math.random()*1000001);

    window[generatedFunction] = function(json){
        callback(json);
        if(window[generatedFunction] && BrowserDetect.browser != 'Explorer') {
          delete window[generatedFunction];
        }
    };


    if(BrowserDetect.browser != 'Explorer'){
       var cusid = document.getElementsByTagName('script');
       if(cusid.length > 2) {
         for (var i = 1; i < cusid.length; ++i) {
              if(cusid[i].className === 'cross') {
               cusid[i].parentNode.removeChild(cusid[i]);
              }
           }
       }
    }

    if(url.indexOf('?') === -1){url = url+'?';}
    else{url = url+'&';}

    var jsonpScript = document.createElement('script');
    jsonpScript.setAttribute("src", url+method+'='+generatedFunction);
    jsonpScript.setAttribute("type", "text/javascript");
    jsonpScript.setAttribute("class", 'cross');
    jsonpScript.setAttribute("async", true);
    document.getElementsByTagName("head")[0].appendChild(jsonpScript);
  }
  window.JSONP = JSONP;
})(window);
/* ------------ */

var Url = {

	// публичная функция для кодирования URL
	encode : function (string) {
		return escape(this._utf8_encode(string));
	},

	// публичная функция для декодирования URL
	decode : function (string) {
		return this._utf8_decode(unescape(string));
	},

	// приватная функция для кодирования URL
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// приватная функция для декодирования URL
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

};

function print_r(arr, level) {
    var print_red_text = "";
    if(!level) level = 0;
    var level_padding = "";
    for(var j=0; j<level+1; j++) level_padding += "    ";
    if(typeof(arr) === 'object') {
        for(var item in arr) {
            var value = arr[item];
            if(typeof(value) === 'object') {
                print_red_text += level_padding + "'" + item + "' :\n";
                print_red_text += print_r(value,level+1);
		}
            else
                print_red_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
    }

    else  print_red_text = "===>"+arr+"<===("+typeof(arr)+")";
    return print_red_text;
}

function getElementTopLeft(id) {
    var ele = document.getElementById(id);
    var top = 0;
    var left = 0;
    while(ele.tagName != "BODY") {
        top += ele.offsetTop;
        left += ele.offsetLeft;
        ele = ele.offsetParent;
    }
    return { top: top, left: left };
}

function ltrim(stringToTrim) {
	return stringToTrim.replace(/^\s+/,"");
}

String.prototype.rtrim = function(s) { 
    return this.replace(new RegExp(s + "*$"),''); 
};

/* check domain */
function is_one_domen(_client_url, _task_url){
	    var client_url = _client_url.replace('http://www.','').replace('https://www.','').replace('www.', '').replace('http://','').split(/[/?#]/)[0];
	    var task_url   = _task_url.replace('http://www.','').replace('https://www.','').replace('www.', '').replace('http://','').split(/[/?#]/)[0];
	    if(client_url == task_url) {
		return true;
	    }
	    return false;
}  



function cross_post(url, data, success_callback, error_callback){
	    trd_jQ.ajax({
                        url: url,
                        dataType: 'jsonp',
			data: data,
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){
                            if (response.error===0 || response.result == 1) {
				if(success_callback){
				    success_callback(response);
				}
			    }else{
				if(error_callback){
				    error_callback(response);
				}
			    }
			}
	    });
}



    !(function($){
     /* '$:nomunge'; // Used by YUI compressor.*/

      // A few vars used in non-awesome browsers.
      var interval_id,
        last_hash,
        cache_bust = 1,

        // A var used in awesome browsers.
        rm_callback,

        // A few convenient shortcuts.
        window = this,
        FALSE = !1,

        // Reused internal strings.
        postMessage = 'postMessage',
        addEventListener = 'addEventListener',

        p_receiveMessage,

        // I couldn't get window.postMessage to actually work in Opera 9.64!
        has_postMessage = window[postMessage]  &&  BrowserDetect.dataBrowser['identity'] != "Opera"; /*!browser.opera; */



      $[postMessage] = function( message, target_url, target ) {
        if ( !target_url ) { return; }

        // Serialize the message if not a string. Note that this is the only real
        // jQuery dependency for this script. If removed, this script could be
        // written as very basic JavaScript.
        message = typeof message === 'string' ? message : $.param( message );

        // Default to parent if unspecified.
        target = target || parent;

        if ( has_postMessage ) {
          // The browser supports window.postMessage, so call it with a targetOrigin
          // set appropriately, based on the target_url parameter.
          target[postMessage]( message, target_url.replace( /([^:]+:\/\/[^\/]+).*/, '$1' ) );

        } else if ( target_url ) {
          // The browser does not support window.postMessage, so set the location
          // of the target to target_url#message. A bit ugly, but it works! A cache
          // bust parameter is added to ensure that repeat messages trigger the
          // callback.
          target.location = target_url.replace( /#.*$/, '' ) + '#' + (+new Date) + (cache_bust++) + '&' + message;
        }
      };



      $.receiveMessage = p_receiveMessage = function( callback, source_origin, delay ) {
        if ( has_postMessage ) {
          // Since the browser supports window.postMessage, the callback will be
          // bound to the actual event associated with window.postMessage.

          if ( callback ) {
            // Unbind an existing callback if it exists.
            rm_callback && p_receiveMessage();

            // Bind the callback. A reference to the callback is stored for ease of
            // unbinding.
            rm_callback = function(e) {

                //console.log(e);

              if ( ( typeof source_origin === 'string' && e.origin !== source_origin )
                || ( $.isFunction( source_origin ) && source_origin( e.origin ) === FALSE ) ) {
                return FALSE;
              }
              callback( e );
            };
          }

          if ( window[addEventListener] ) {
            window[ callback ? addEventListener : 'removeEventListener' ]( 'message', rm_callback, FALSE );
          } else {
            window[ callback ? 'attachEvent' : 'detachEvent' ]( 'onmessage', rm_callback );
          }

        } else {
          // Since the browser sucks, a polling loop will be started, and the
          // callback will be called whenever the location.hash changes.

          interval_id && clearInterval( interval_id );
          interval_id = null;

          if ( callback ) {
            delay = typeof source_origin === 'number'
              ? source_origin
              : typeof delay === 'number'
                ? delay
                : 100;

            interval_id = setInterval(function(){
              var hash = document.location.hash,
                re = /^#?\d+&/;
              if ( hash !== last_hash && re.test( hash ) ) {
                last_hash = hash;
                callback({ data: hash.replace( re, '' ) });
              }
            }, delay );
          }
        }
      };

    })(trd_jQ);


!(function($){

	/**
	 * Copyright 2012, Digital Fusion
	 * Licensed under the MIT license.
	 * http://teamdf.com/jquery-plugins/license/
	 *
	 * @author Sam Sehnert
	 * @desc A small plugin that checks whether elements are within
	 *		 the user visible viewport of a web browser.
	 *		 only accounts for vertical position, not horizontal.
	 */
	$.fn.visible = function(partial){
		
	    var $t				= $(this),
	    	$w				= $(window),
	    	viewTop			= $w.scrollTop(),
	    	viewBottom		= viewTop + $w.height(),
	    	_top			= $t.offset().top,
	    	_bottom			= _top + $t.height(),
	    	compareTop		= partial === true ? _bottom : _top,
	    	compareBottom	= partial === true ? _top : _bottom;
		
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
    
})(trd_jQ);

























	 
trd_jQ(document).ready(function() {
    // t: current time, b: begInnIng value, c: change In value, d: duration
trd_jQ.easing['jswing'] = trd_jQ.easing['swing'];

trd_jQ.extend( trd_jQ.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return trd_jQ.easing[trd_jQ.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - trd_jQ.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return trd_jQ.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return trd_jQ.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

});

/* support IE version */
 var supportIE = 10;

var socket1, socket2;
var config_window = [460, 750, 980, 1185, 1400, 1640];

var trd_window = {
    height:0,
    width: 0
};

var Hpanel= 0;
var Htpanel = 0;
var trdHpanel = 0;
trd_window.height = trd_jQ(window).height();
trd_window.width  = trd_jQ(window).width();

trd_jQ(window).resize(function(){
	trd_window.height = trd_jQ(window).height();
	trd_window.width  = trd_jQ(window).width();

	trdflame_panel.resize_pahel_height();
	trdflame_panel.panel_resize();
});


function response_panel_height(show_panel_mobile){

    var show_panel_mobile = show_panel_mobile || 0;

    if(is_mobile && show_panel_mobile){
	Htpanel = parseInt(trd_window.height *  0.03);
	Hpanel  = parseInt(trd_window.height * 0.35);
    }else{
	if(trd_window.width >=1185){
	    Hpanel = 380;
	    Htpanel = 40;
	}else if(trd_window.width >= 750 && trd_window.width <= 1185 ){
	    Hpanel = 300;
	    Htpanel = 40;
	}else{
	    Hpanel = 270;
	    Htpanel = 40;
	}
    }

    trdHpanel = Htpanel + Hpanel;
  //  alert('hpanel-'+Hpanel);
}

response_panel_height();


var trdflame_param = {
    connect_status: 'unknown',
    uid: 0,
    lang: 'en',
    baseurl: 'http://dev2.trendemon.com/',
    baseurl_code:'',
    fbid: '',
    appid: '146579985416736',
    aid: '',
    short_url: false,
    introurl: false,
    flame_show_panel_mobile : 0,
    direction: 'ltr',
    transparent_flame: 0,
    session_trendsetter_id: 0,
    href: '',
    client_url: '',
    trd_hash: '',
    use_flame_button: 0,
    flame_panel_iframe: '',
    use_flame_panel : 0,
    debug: false,


    get_main_param: function(){
        var js = document.getElementById('trdflame');
        var pattern = "^(([^:/\\?#]+):)?(//(([^:/\\?#]*)(?::([^/\\?#]*))?))?([^\\?#]*)(\\?([^#]*))?(#(.*))?$";
        var rx = new RegExp(pattern);
        var parts = rx.exec(js.src);
        parts = parts[9];

        parts = parts.split('&');
        var tmp='';
        for(var i=0; i<parts.length; i++){
            tmp =  parts[i].split('=');
            trdflame_param[ tmp[0] ] = tmp[1];
        }
        trdflame_param.baseurl =  Url.decode(trdflame_param.baseurl);
	trdflame_param.baseurl = trdflame_param.baseurl.rtrim('/')+'/';
        trdflame_param.baseurl_code =  trdflame_param.baseurl;

        var href = location.href;
        if(location.hash.length > 0 && location.hash.substr(1,2) == 'tt'){
	   trdflame_param.trd_hash = location.hash;
	   href = href.replace(location.hash, '');
	}
	trdflame_param.href = href;
	trdflame_param.shareurl = Url.encode(href);





	if(trdflame_param.lang === 'he'){
	    trdflame_param.direction = 'rtl';
	}else{
	    trdflame_param.direction = 'ltr';
	}

        if(location.hash.length > 0){
	    trdflame_param.client_url = location.href.replace(location.hash, '');
        }else{
	    trdflame_param.client_url = location.href;
        }

        discovery_feed.init();
	side_lift.init();
	//trdflame.stat_analysis();




    },
    social_share: function(name, url, _is_short , _text, _el){
		    var is_short = _is_short || 1;
		    var text = _text || '';
		    var el   =  trd_jQ(_el) || '';

		    if (trdflame_param.short_url && is_short == 1) {
			 url =  trdflame_param.short_url;
		    };

                    var lefto = screen.availWidth/2-150;
                    var righto = screen.availHeight/2-125;
                          switch(name){
                            case 'twitter':
                                  window.open('http://twitter.com/share?url='+Url.encode(url)+'&text='+Url.encode(text), '','toolbar=0,status=0,width=626,height=436');
                            break;
                            case 'google':
                                  window.open('https://plus.google.com/share?url='+Url.encode(url),'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                            break;
                            case 'facebook':
                                text = 'facebook share';
                                window.open('http://www.facebook.com/sharer.php?u='+Url.encode(url)+'&t='+Url.encode(text),'sharer','toolbar=0,status=1,width=650,height=350,left='+lefto+',top='+righto);
                            break;
                            case 'linkedin':
                                 window.open('http://www.linkedin.com/shareArticle?mini=true&url='+Url.encode(url),'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
                            break;
                            case 'vkontakte':
                                 window.open('http://vkontakte.ru/share.php?url='+Url.encode(url), '','toolbar=0,status=0,width=626,height=436');
                            break;

			    case 'email':
				 var text = trd_jQ(el).data('text');
				 var link = "mailto:?subject="+escape(text)+"&body="	  + escape(text+": "+url+"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n powered by trendemon.com");
				 window.location.href = link;
                            break;


                            default:
                            break;
                        }



                   return true;
    },
    random :function(){
        return Math.floor(Math.random()*10000);
    },
    dir: function(){
           return (trdflame_param.lang === 'he') ? 'rtl': 'ltr';
    },

    isused: function(_callback){

    var callback = _callback || function(){}

    if(getURLParameters('trdflame-preview') == 1){
	callback();
    }else{

	 var callback = callback || false;
	 JSONP(trdflame_param.baseurl+'apis/flame/isused/?uid='+trdflame_param.uid+'&aid='+trdflame_param.aid, 'trdflame', function(json) {
	     if(json){
		 if(json.used_flame == 1){
		     callback();
		 }
	     }


	 });
     }


    },


    loadcssjs: function(type, file, append, callback, getparam){




        var type = type || 'css';
        var append = append || 'trd-js';
        var loaded =false;
        var _getparam = getparam || '';

        var obj=false;
        switch(type){
            case 'css':
                obj = document.createElement('link');
                obj.setAttribute("rel", "stylesheet");
                obj.setAttribute("type", "text/css");
                obj.setAttribute("href", file+'?r='+trdflame_param.random()+_getparam);
            break;
            case 'js':
                obj = document.createElement('script');
                obj.setAttribute('type','text/javascript');
                obj.setAttribute('async', 'true');
                obj.setAttribute('src' , file+'?r='+trdflame_param.random());
            break;
        }

        if( (append === 'script' || append === 'link')){
            document.getElementsByTagName("head")[0].appendChild(obj);

        }else{
            var head = document.getElementById(append);
            head.appendChild(obj);

        }

        if(callback && type == 'css'){

          try{
              if (!loaded) {
                    obj.onload = callback();
                    loaded = true;
                }
          }catch(e){
              if (!loaded) {
                     obj.onload = function() { callback(); loaded = true; };
                }
          }

            //if(BrowserDetect.browser == 'Safari'){
            //   obj.onload = callback();
            //}else{
            //    obj.onload = function() { callback(); };
            //}
        }
    },
    fbid2get: function() {
        var fbid = '';
        if (trdflame_param.fbid && trdflame_param.fbid !== 'unknown') {
            fbid = '&fbid=' + trdflame_param.fbid;
        }
        return fbid;
    },

    is_tablet:function(){
	//alert('tets');

	if(trd_jQ('#trd-tablet').is(':visible')){
		 //     is_mobile = false;
	    return true;
	}
	return false;
    }
 };

var trdflame_button = {
    isopen          : false,
    is_social_open  : false,

    open_id: function(){

	if(trdflame_panel.is_expand){
	    trdflame_panel.collapse_panel();
	}

	if (trdflame_button.isopen === false) {

	    var fbid = trdflame_param.fbid2get();
	    JSONP(trdflame_param.baseurl + 'apis/flame/trdflameinstance/?aid=' + trdflame_param.aid + '&uid=' + trdflame_param.uid + '&owner=0&shareurl=' + trdflame_param.shareurl + fbid, 'trdflame', function(json) {

		if (json && json.error === 0) {
		    trdflame_param.short_url = json.short_url;
		    trd_jQ('.trd-button-popup', '.trd-root').slideUp(300);
		    trd_jQ('.trd-button-popup', '#trd-root').slideDown(300);
		    trdflame_button.isopen = true;
		};
	    });


	}else{
	    trdflame_button.close_id();
	}
    },
    close_id: function(el){
	  trd_jQ('.trd-iclose','#trd-root').parent().slideUp(300);
	  trdflame_button.isopen = false;
    },


    social_expand_id: function(){
	    trd_jQ('.trd-button-popup','#trd-root').css('height', '200px');
            trd_jQ('.trd-social-more','#trd-root').fadeOut(300);
            trd_jQ('.trd-btn-less','#trd-root').fadeIn(300);
            trd_jQ('.trdbutton-social', '#trd-root').slideDown(300);
    },

    social_collapse_id: function(){
	 trd_jQ('.trd-button-popup','#trd-root').css('height', '130px');
         trd_jQ('.trd-social-more','#trd-root').fadeIn(300);
         trd_jQ('.trdbutton-social', '#trd-root').slideUp(300);
    },


    open_class : function(el){

	if(trdflame_panel.is_expand){
	    trdflame_panel.collapse_panel();
	}


	if(trdflame_button.isopen === true) {
	    el = trd_jQ(el).next();
	    el.slideUp(300);
	    trdflame_button.isopen = false;
	    return false;
	}

	var fbid = trdflame_param.fbid2get();
	    JSONP(trdflame_param.baseurl + 'apis/flame/trdflameinstance/?aid=' + trdflame_param.aid + '&uid=' + trdflame_param.uid + '&owner=0&shareurl=' + trdflame_param.shareurl + fbid, 'trdflame', function(json) {

		if (json && json.error === 0) {
		    trdflame_param.short_url = json.short_url;
		    var current = trd_jQ(el).parent().find('.trd-button-popup');
		    trd_jQ('.trd-button-popup').slideUp(300);
		    current.slideDown(300);
		    trdflame_button.isopen = true;
		};
	    });
    },

    close_class: function(el){
	if(trdflame_button.isopen === true) {
	    trd_jQ(el).parent().slideUp(300);
	    trdflame_button.isopen = false;
	}
    },

    open_social_class:function(self){
	 self.fadeOut(300).parent().css('height', '200px').find('.trd-btn-less').fadeIn(300);
         self.parent().find('.trdbutton-social').slideDown(300);
    },

    close_social_class: function(self){

	var parent = self.parents('.trd-button-popup').eq(0);
	parent.find('.trd-social-more').fadeIn(300);
	parent.css('height', '130px').find('.trdbutton-social').slideUp(300);
    },



    init_button_open_panel: function(){
	               trd_jQ('.trd-openpanel', '.trd-root').each(function(i,el){
                           var self = trd_jQ(el);
                           self.bind('click', function(){
                              if(trdflame_panel.is_expand === false){


				   trdflame_panel.create_iframe_panel();

			     response_panel_height();

                               trd_jQ('#trdflame-panel').animate( {'height': trdHpanel+'px'}, 'slow');
                               trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': Hpanel+'px'}, 'slow');
                               trd_jQ('#trd-flamepanel-expand').attr('class','trd-closepanel');
                               trdflame_panel.is_expand = true;
			       discovery_feed.close();
                             }else{
                               trd_jQ('#trdflame-panel').animate( {'height': '40px'}, 'slow');
                               trd_jQ('#trdflame_panel').animate( {'height': '0px'}, 'slow');
                               trd_jQ('#trd-flamepanel-expand').attr('class',  'trd-openpanel');
                               trdflame_panel.is_expand = false;
                             }
                               return false;
                           });
                       });

                        trd_jQ('.trd-openpanel', '#trd-root').each(function(i,el){

                            var self = trd_jQ(el);
                           self.bind('click', function(){

                             if(trdflame_panel.is_expand === false){
				 trdflame_panel.create_iframe_panel();
				 response_panel_height();
                               trd_jQ('#trdflame-panel').animate( {'height': trdHpanel+'px'}, 'slow');
                               trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': Hpanel+'px'}, 'slow');
                               trd_jQ('#trd-flamepanel-expand').attr('class','trd-closepanel');
                               trdflame_panel.is_expand = true;
			       discovery_feed.close();
                             }else{
                               trd_jQ('#trdflame-panel').animate( {'height': '40px'}, 'slow');
                               trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': '0px'}, 'slow');
                               trd_jQ('#trd-flamepanel-expand').attr('class',  'trd-openpanel');
                               trdflame_panel.is_expand = false;
                             }

                               return false;
                           });
                       });
    },


    init: function(json){

			/* hide in mobile */
			if(is_mobile){
			    trd_jQ('#trd-root, .trd-root').remove();
			    return false;
			}


			if(json.code_button.length == 0){
			    trd_jQ('#trd-root, .trd-root').remove();
			}else{


                       if(trd_jQ('#trd-root')){


                          trd_jQ('#trd-root').html(json.code_button);
                          trdflame_button.isopen = false;


                       /* expand /collapse */
                          trd_jQ('.trdflameit','#trd-root').bind('click',function(){
			      trdflame_button.open_id();
                              return false;
                          });

			  trd_jQ('.trd-iclose','#trd-root').bind('click',function(){
                              trdflame_button.close_id();
                                return false;
                          });


                          /*expand / collapse social*/

                          trd_jQ('.trd-social-more','#trd-root').bind('click',function(){
			      trdflame_button.social_expand_id();
                              return false;
                          });

                          trd_jQ('.trd-btn-less','#trd-root').bind('click',function(){
                              trdflame_button.social_collapse_id();
                              return false;
                          });
                       }



                       if(trd_jQ('.trd-root').length > 0){

                          /* class load content */
                          trd_jQ('.trd-root').each(function(i,el){
                             trd_jQ(el).html(json.code_button);
                          });


	    /* expand collapse .class button */
                          trd_jQ('.trdflameit','.trd-root').each(function(i, el){
                                  trd_jQ(el).bind('click',function(){
					trdflame_button.open_class(el);
                                        return false;
                                    });
                          });
                          trd_jQ('.trd-iclose','.trd-root').each(function(i, el){
                             trd_jQ(el).bind('click',function(){
				    trdflame_button.close_class(el);
                                return false;
				});
                          });

                          /*expand / collapse social*/

                          trd_jQ('.trd-social-more','.trd-root').each(function(i, el){
                              trd_jQ(el).bind('click',function(){
                                  var self = trd_jQ(this);
                                 trdflame_button.open_social_class(self);
                              return false;
                              });
                          });

                          trd_jQ('.trd-btn-less','.trd-root').each(function(i, el){
                              var self = trd_jQ(el);
				self.fadeOut(300).bind('click', function(){
				trdflame_button.close_social_class(self);
                                return false;
                              });
                          });
                       }

                       /* button open/close panel */
			    if(is_mobile === 1){
			       if(trdflame_param.flame_show_panel_mobile === 1) {
				   trdflame_button.init_button_open_panel();
			       }else{
				   trd_jQ('.trdbutton-footer').remove();
			       }

			   }else{
			          trdflame_button.init_button_open_panel();
			   }
			}
  },

   init_redirect: function(url){
        if(url){
            trd_jQ('.trdflameit').attr('target', '_blank');
            trd_jQ('.trdflameit').bind('click', function(){
                window.open(url, '_blank');
                return false;
            });
        }
   }

};

// flame panel
var trdflame_panel = {

    is_expand           : false,
    is_expand_social    : false,
    timer               : false,
    panel_position      : 'left',
    isset_iframe	: false,
    iframe_id		: 'trdflame_panel',
    def_width		: 0,



    open_tooltip : function(){

        var cook = cookie.get('flame_tooltip');
        if(!cook ){
            trd_jQ('#trdpanel-flametext').fadeIn('slow');
            trd_jQ('#trd-flame-text-btn').bind('click', function(){
                trdflame_panel.manual_close();
                return false;
            });
        }
    },
    close_tooltip : function(){
         trd_jQ('#trdpanel-flametext').fadeOut('slow');
    },
    manual_close : function(){
        cookie.set('flame_tooltip', 1, {expires: 31536000});
        trdflame_panel.close_tooltip();
        return false;
    },
    init_redirect: function(url) {
        if (url) {
            trd_jQ('#trd-content-wrap, #trd-flamepanel-expand').bind('click', function(){
                window.open(
                        url,
                        '_blank'
                        );
                return false;
            });
        }
    },
    /* expand panel */
    expand_social: function(){
      if(trdflame_panel.soc_busy) return false;
      var fbid = trdflame_param.fbid2get();
      trdflame_panel.soc_busy = true;


      JSONP(trdflame_param.baseurl + 'apis/flame/trdflameinstance/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&owner=1&shareurl=' + trdflame_param.shareurl+fbid, 'trdflame', function(json) {

        if(json &&  json.error === 0) {

             trdflame_param.short_url = json.short_url;

             trd_jQ('#trd-panel-social-btn').css('display', 'block').find('.pshare').each(function (i,el){
			trd_jQ(this).stop(true, true).delay(50*i).animate({'opacity': "1"}, 100);
                    //trd_jQ(el).delay(200*i).animate({'opacity': "1"}, 300);
             });
             trdflame_panel.is_expand_social = true;
             trdflame_panel.soc_busy        = false;


          }
      });
    return false;
   },
    collapse_social: function(){
          if(trdflame_panel.soc_busy) return false;
          if(trdflame_panel.is_expand_social === true){
	    var l = trd_jQ('#trd-panel-social-btn').find('.pshare').size();
            trd_jQ('#trd-panel-social-btn').find('a').reverse().each(function (i,el){
                                         trd_jQ(el).delay(50*i).animate({'opacity': "0"}, 100,  function(){
					     if(i == l-1){
						 trd_jQ('#trd-panel-social-btn').css('display', 'none');
					     }
					 });
            });

	    trdflame_panel.is_expand_social = false;
        }
       return false;
   },

   resize_pahel_height : function(){
	  if(trdflame_panel.is_expand === true){

	       response_panel_height(trdflame_param.flame_show_panel_mobile);
	       trd_jQ('#trdflame-panel').animate( {'height': trdHpanel+'px'}, 'slow');
               trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': Hpanel+'px'}, 'slow');
	  }
    },

   expand_panel: function(){

//      if( 0 && is_mobile){
//        window.open(trdflame_param.introurl);
//        return false;
//      }


      discovery_feed.close();
      if(side_lift.lift_is_open){
	  side_lift.lift_close();
      }
      if(trdflame_panel.is_expand === false){

		    response_panel_height();

                               trd_jQ('#trdflame-panel').animate( {'height': trdHpanel+'px'}, 'slow');
                               trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': Hpanel+'px'}, 'slow');
                               trd_jQ('#trd-flamepanel-expand').attr('class','trd-closepanel');
                               trdflame_panel.is_expand = true;
                               trdflame_panel.manual_close();

	/* статистика по отрытию панели */
	 var fbid = trdflame_param.fbid2get();
	 JSONP(trdflame_param.baseurl + 'apis/flame/trdflameinstance/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&owner=2&shareurl=' + trdflame_param.shareurl+fbid, 'trdflame', function(json) {});


       }
       return false;
   },

   collapse_panel: function(){
     trd_jQ('#trdflame-panel').animate( {'height': Htpanel+'px'}, 'slow');
     trd_jQ('#trdflame_panel, #trd-iframe-panel').animate( {'height': '0px'}, 'slow');
     trd_jQ('#trd-flamepanel-expand').attr('class',  'trd-openpanel');
     if(is_mobile ||  trd_window.width < 750){
	 trd_jQ('#trd-panel-content').hide('fast');
     }
     trdflame_panel.is_expand = false;
   },


   create_iframe_panel: function(){
	    if(trdflame_panel.isset_iframe === false) {
		    var fbid = trdflame_param.fbid2get();
		    var panelparam = '?uid='+trdflame_param.uid+'&aid='+trdflame_param.aid+fbid;
		    var src =trdflame_param.baseurl+'apis/flamepanel/'+panelparam;


		    trd_jQ('<iframe />').attr({
			'id'    :   trdflame_panel.iframe_id,
			'src'   :    src,
			'width' :   '100%',
			'height':    0+'px',
			'frameborder': '0',
			'z-Index':     '9300',
			"scrolling":    'no'
		    }).appendTo('#trd-iframe-panel');
		    trdflame_panel.isset_iframe = true;
	    }
    },

    reload: function(){
	trd_jQ('#'+trdflame_panel.iframe_id).attr('src', trd_jQ('#'+trdflame_panel.iframe_id).attr('src'));
    },

    panel_resize : function(){

	return false;

		//if(is_ipad) return false;


//	if(!is_mobile) {
//	 trd_jQ('#trd-panel-mobile').fadeOut(300, function(){
//	     trd_jQ('#trd-panel-content').fadeIn(300);
//	 });
//      }else{
//	    trd_jQ('#trd-panel-content').fadeOut(300, function(){
//	       trd_jQ('#trd-panel-mobile').fadeIn(300);
//	   });
//      }
    },

    resize_panel: function(){



	var old_w = 215;
	var new_w = trd_jQ("#trd-content-wrap").width()+5+trd_jQ('#trd-flame-action table').width()+20;
	//console.log(new_w);
	if(old_w <= new_w && new_w<400){
	    trd_jQ('#trd-panel-content').width(new_w);
	}
    }
};

var trdflame_audio  = {
    support_audio  : false,
    progress_id    : false,
    progress_track : false,
    play_button    : null,
    intro_plaed	   : false,
    content_play   : false,
    folder	   : '',
    play_img_src   : 'moov_play_act.png',
    pause_img_src  : 'moov_pause_act.png',
    content_loaded : false,
    urls : [],
    ids  : [],
    player	   : false,
    index	   : 0,
    isPaused	   : false,
    is_mob	   : false,
    name_audio_id  : 'trd-player-audio',
    name_audio_box : 'trd-player',
    is_click	   : false,

    is_support_audio :function(el){
	    var a = document.createElement('audio');
	    return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
    },

    statistic: function(mid){
	if(!mid) return false;

	if(trdflame_audio.is_click === false){
	    JSONP(trdflame_param.baseurl + 'apis/flame/moovstat/?mid=' + mid, 'trdflame', function(json) {});
	    trdflame_audio.is_click = true;
	}
    },


    createPlayer :function() {

	if(trdflame_audio.is_mob){
	   trdflame_audio.name_audio_box = 'trd-player-mob';
	   trdflame_audio.name_audio_id = 'trd-player-audio-mob';
	}

	trd_jQ('#'+trdflame_audio.name_audio_box).empty();


	if(!trdflame_audio.is_support_audio()){

	    trd_jQ('#trd-flame-moovs-open').parents('td').eq(0).remove();
	    trd_jQ('#trd-flame-moovs').remove();
	    return false;
	}

	trdflame_audio.player = new Audio();
	trdflame_audio.player.id = trdflame_audio.name_audio_id;


	trdflame_audio.player.addEventListener('ended', function(){
	    trdflame_audio.index++;
	    trdflame_audio.playSong(trdflame_audio.index);
	},true);
        trdflame_audio.player.addEventListener('error',trdflame_audio.errorFallback,true);
	if(trdflame_audio.progress_id){
	    trdflame_audio.player.addEventListener('timeupdate', trdflame_audio.update_progress,false);
	}



	 trd_jQ('#'+trdflame_audio.name_audio_box).html(trdflame_audio.player);
	//document.getElementById("trd-player").appendChild(trdflame_audio.player);

	return  trdflame_audio.player;
    },

    playSong: function(index){

	if(index > 1) return false;

	//trdflame_audio.createPlayer();

	if(index === 0){
	    trdflame_audio.intro_plaed = true;
	}

	if(trdflame_audio.urls[trdflame_audio.index]!==undefined) {
            var audioPlayer = document.getElementById(trdflame_audio.player.id);
            if(audioPlayer) {
		audioPlayer.src = trdflame_audio.urls[index];
                //audioPlayer.load();
		//audioPlayer.duration = (audioPlayer.duration == "NaN") ? 1000 : audioPlayer.duration;
                audioPlayer.play();

		if(index > 0){
		    trdflame_audio.statistic(trdflame_audio.ids[index]);
		}


		trdflame_audio.isPaused = false;
            } else {
		//console.log('url to sound undefined');
               //trdflame_audio.createPlayer();
            }
        } else {
          //  alert('the end!');
        }
    },

    errorFallback: function(){
	alert('error load audio');
    },


    init: function(audio_intro_id, audio_content_id, play_button_id, folder, progress_id, is_mobile){


	trdflame_audio.is_mob = is_mobile;

	if(is_mobile){
	   trd_jQ('#trd-source-mob li').each(function(i, e){
		 trdflame_audio.urls.push(trd_jQ(this).text());
		 trdflame_audio.ids.push(trd_jQ(this).data('moov_id'));

	   });
	}else{
	    trdflame_audio.is_mob = false;
	    trd_jQ('#trd-source li').each(function(){
		trdflame_audio.urls.push(trd_jQ(this).text());
		trdflame_audio.ids.push(trd_jQ(this).data('moov_id'));
	    });
	}

	trdflame_audio.play_button       = trd_jQ('#'+play_button_id+' img');
	trdflame_audio.play_img_src =  trdflame_param.baseurl+ "images/moovs"+folder+"/"+trdflame_audio.play_img_src;
	trdflame_audio.pause_img_src = trdflame_param.baseurl+ "images/moovs"+folder+"/"+trdflame_audio.pause_img_src;

	if(progress_id !== undefined){
	    trdflame_audio.progress_id	     = trd_jQ('#'+progress_id);
	    trdflame_audio.progress_track    = trdflame_audio.progress_id.find('div');
	    trdflame_audio.progress_id_w     = trdflame_audio.progress_id.width();

	}	trdflame_audio.createPlayer();
    },

    update_progress : function(){



	    if( trdflame_audio.index < 1) return false;

	    var value = 0;
	    if (trdflame_audio.player.currentTime > 0) {
		  value = (100 * trdflame_audio.player.currentTime) / trdflame_audio.player.duration;
	    }
	    trdflame_audio.progress_track.css("width", value + "%");

   } ,
   runplay: function(){
	    trdflame_audio.play_button.attr('src', trdflame_audio.pause_img_src);
	    if( !trdflame_audio.intro_plaed ){
		 trdflame_audio.playSong(0);
	     }else{
		 trdflame_audio.playSong(1);
	     }
    },
    play: function(){
	var player = document.getElementById(trdflame_audio.player.id);
	if(trdflame_audio.isPaused === true){
	    player.play();
	    trdflame_audio.isPaused = false;
	    trdflame_audio.play_button.attr('src', trdflame_audio.pause_img_src);
	}else{
	    player.pause();
	    trdflame_audio.play_button.attr('src', trdflame_audio.play_img_src);
	    trdflame_audio.isPaused = true;
	}
    },
    pause: function(){
	var audioPlayer = document.getElementById(trdflame_audio.player.id);
	if(audioPlayer!==undefined) {
                audioPlayer.pause();
		trdflame_audio.play_button.attr('src', trdflame_audio.play_img_src);
		trdflame_audio.isPaused = true;
        } else {
            loadPlayer();
        }
    },
    seek: function(event){
	if(trdflame_audio.index > 0 ){
		var player = document.getElementById(trdflame_audio.player.id);
	        var w = trdflame_audio.progress_id_w;
		var offset_l = trdflame_audio.progress_id.offset().left - trd_jQ(window).scrollLeft();
		var left = Math.round( (event.clientX - offset_l) );
		var per = Math.ceil( (left*100)/w );
		player.pause();
                player.currentTime =  Math.ceil(per/100 * player.duration);
		player.play();
	    }
    },
    stop: function(){
	if( !trdflame_audio.intro_plaed ){
	    trdflame_audio.index = 0;
	}else{
	    trdflame_audio.index = 1;
	}
	var player = document.getElementById(trdflame_audio.player.id);
	    if(player){
		player.pause();
		trdflame_audio.intro_plaed = false;
		trdflame_audio.index = 0;
		 trdflame_audio.progress_track.css("width",  "0%");
		//player.currentTime = 0;

		trdflame_audio.play_button.attr('src', trdflame_audio.play_img_src);
	    }
        }

};

var trdflame_moov = {
    is_open: false,
    adapt_to_orientation: function () {
	    trdflame_audio.stop();
	    trd_jQ("#trd_moov_cont").fadeOut(300, function(){
		       trd_jQ("#trd_moov_start").fadeIn();
	    });
    },
    clear: function(){
	trdflame_audio.stop();
	trd_jQ('#trd_moov_start, #trd_moov_cont').fadeOut(300, function(){ trd_jQ(this).remove(); });
    },

    resize: function(){

	var new_h = 50*( trd_jQ('body').width()/290);
	trd_jQ('#trd_moov_start, #trd_moov_cont').height(new_h);
    },

    init: function(){
	trd_jQ.ajax({
                        url: trdflame_param.baseurl+'apis/flame/init_moovs/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&url='+trdflame_param.href,
                        dataType: 'jsonp',
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){
                            if (response.error===0) {

				trd_jQ(response.data).appendTo('body');

				trd_jQ(document).ready(function(){

	// trdflame_moov.resize();


					trdflame_audio.init('trd_audio_intro', 'trd_audio1', 'trd-moov-play', '', '',  true);
	//				/* start */
					trdflame_moov.show_start_btn();


					trd_jQ("#trd_moov_start").click(function(){
					    //intro play
					    trdflame_audio.runplay();

					    // show panel
					    trd_jQ("#trd_moov_cont").fadeIn(1000, function(){
						trd_jQ("#trd_moov_start").fadeOut();
						trdflame_moov.is_open = true;
					    });
					    return false;
					});

					trd_jQ("#trd-moov-play").click(function(){
					    trdflame_audio.play();
					    return false;
					});


					trd_jQ("#trd_moov_cont .trd_moov_stop").click(function(){
					     trd_jQ("#trd_moov_cont").fadeOut(300, function(){});

						trd_jQ("#trd_moov_start").fadeIn();
						trdflame_moov.is_open = false;
						trdflame_audio.stop();
						return false;
					});
					trd_jQ("#trd_moov_cont .trd_moov_share").click( function(){
					    trdflame_moov.moov_share();
					    return false;
					});

				});

				/* orientationchange */
				trd_jQ(window).bind( 'orientationchange', function(){ trdflame_moov.adapt_to_orientation(); });

                            } else {
                               // alert(response.msg);
                            }
                        }
                    });
    },


    show_start_btn : function(){
	trd_jQ("#trd_moov_start").fadeIn(50, function(){
	    trd_jQ("#trd_moov_start").css('display', 'block');
	});
	trd_jQ("#trd_moov_start").trigger('click');
    },
    moov_share: function(){
	var lefto =  screen.availWidth/2-150;
        var righto = screen.availHeight/2-125;
	window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURI(location.href),'sharer','toolbar=0,status=1,width=650,height=350,left='+lefto+',top='+righto);
    }

};

var trdflame_panel_moov = {

    is_open: false,
    flame_panel_w: 0,

    show_moov_panel: function(){

	 trdflame_panel_moov.flame_panel_w = 10000; //=trd_jQ('#trd-panel-content').width();

	 trdflame_panel.collapse_social();

	 if(trdflame_panel.panel_position === 'left'){

	    trd_jQ('#trd-panel-content').animate({left: "-="+trdflame_panel_moov.flame_panel_w+"px"}, 500, function(){
		trd_jQ('#trd-panel-content').hide(0);
		trd_jQ('#trd-flame-moovs').fadeIn(500, function(){});
	    });
	}else{
	    trd_jQ('#trd-panel-content').animate({left: "+="+trdflame_panel_moov.flame_panel_w+"px"}, 500, function(){
		trd_jQ('#trd-panel-content').hide(0);
		trd_jQ('#trd-flame-moovs').fadeIn(500, function(){});
	    });
	}
    },

    hide_moov_panel: function(){
	if(trdflame_panel.panel_position === 'left'){
	 trd_jQ('#trd-flame-moovs').fadeOut(300, function(){
	       trd_jQ('#trd-panel-content').css('display','block');
	       trdflame_panel.panel_resize();
	       trdflame_panel_moov.flame_panel_w=trd_jQ('#trd-panel-content').width();
		trd_jQ('#trd-panel-content').animate({left: 0}, 500);
      	});
	}else{
	   trd_jQ('#trd-flame-moovs').fadeOut(300, function(){
	       trd_jQ('#trd-panel-content').css('display','block');
	       trdflame_panel.panel_resize();
	       trdflame_panel_moov.flame_panel_w=trd_jQ('#trd-panel-content').width();
		trd_jQ('#trd-panel-content').animate({left: 0}, 500);
      	});
	}

    },

    init: function(){



	trdflame_audio.init('trd-panel-intro-audio', 'trd-panel-audio1', 'trd-panel-play', '/panel', 'trd-flame-moov-progressBar', false);

	trd_jQ('#trd-flame-moovs-open').bind('click', function(e){
	    e.preventDefault();
	    trdflame_panel_moov.show_moov_panel();
	    trdflame_audio.runplay();
	});
	trd_jQ('#trd-panel-play').bind('click', function(e){
	    e.preventDefault();
	    trdflame_audio.play();
	});
	trd_jQ('#trd-flame-close-moovs').bind('click', function(e){
	    e.preventDefault();
	    trdflame_panel_moov.hide_moov_panel();
	    trdflame_audio.stop();

	});
	trd_jQ('#trd-flame-moov-progressBar').bind('click', function(e){
	    e.preventDefault();
	    trdflame_audio.seek(e);
	});
    }
};


var side_lift = {

    lift_img_open : trdflame_param.baseurl+'images/discovery/lift_open.png',
    lift_img_close : trdflame_param.baseurl+'images/discovery/lift_close.png',
    lift_is_open: false,
    send_stat : false,
    check_first_task: false,

    init: function(){
	side_lift.lift_img_open = trdflame_param.baseurl+'images/discovery/lift_open.png';
	side_lift.lift_img_close = trdflame_param.baseurl+'images/discovery/lift_close.png';
    },

    cook_first_task : function(){
	if(!side_lift.check_first_task){
	    JSONP(trdflame_param.baseurl+'apis/discoveryfeed/cook_first/?&aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&lift=side&cl_url='+Url.encode(trdflame_param.client_url), 'trdflame', function(json) {   });
	    side_lift.check_first_task = true;
	}
    },


    send_statistics:function(){
	if(!side_lift.send_stat){
	    side_lift.send_stat = true;
	  //  JSONP(trdflame_param.baseurl+'apis/flame/lift_load_stat/?&aid='+trdflame_param.aid+'&uid='+trdflame_param.uid, 'trdflame', function(json) {   });
	}
    },


    create_iframe_lift: function(){
	return	trd_jQ('<iframe />').attr({
		    'id'    :     side_lift.iframe_id,
		    'src'   :     trdflame_param.baseurl+"apis/discoveryfeed/?uid="+trdflame_param.uid+"&aid="+trdflame_param.aid+'&extdomain='+window.location.hostname+'&cl_url='+Url.encode(trdflame_param.client_url)+"#side_lift",
		    'width' :     '100%',
		    'height':      '100%',
		    'frameborder': '0',
		    'z-Index':     '9300',
		    "scrolling":    'no'
		});
    },
      lift_open: function(){

	if(discovery_feed.is_show || discovery_feed.is_up)  {
	    discovery_feed.close();
	}

	if(trdflame_panel.is_expand){
	    trdflame_panel.collapse_panel();
	}

       trd_jQ('body').css('position', 'relative');
       trd_jQ('body').attr('width', trd_window.width).animate({marginLeft: -362, marginRight:362}, 600, 'easeInQuart', function(){
	   trd_jQ('#trd-lift-open').fadeOut(300, function(){
	       trd_jQ(this).attr('src', side_lift.lift_img_close);
		 // var t = setTimeout(function(){
		   trd_jQ('#trd-lift-open').css({marginRight:367}).fadeIn(400);
		   //if(t) delete t;
	       //}, 1000);
	   });
       });
       trd_jQ('#trd-discoverylift-content').animate({right: 0}, 600, 'easeInQuart');
       side_lift.lift_is_open = true;
       side_lift.cook_first_task();
    },

    lift_close: function(){

	trd_jQ('#trd-lift-open').fadeOut(300, function(){
	    trd_jQ(this).attr('src', side_lift.lift_img_open);
	    trd_jQ(this).css({marginRight:5}).fadeIn(400);
	 });

	/* revert body */
	trd_jQ('body').animate({marginLeft: 0,marginRight: 0}, 600,'easeInQuart'  ,function(){
            trd_jQ(this).removeAttr('width').removeAttr('style');
            trd_jQ('body').removeAttr('style');

        });
       trd_jQ('#trd-discoverylift-content').animate({right: -362}, 600, 'easeInQuart');



	side_lift.lift_is_open = false;
    },

    create: function(html){
	 trd_jQ.ajax({
                        url: trdflame_param.baseurl+'apis/discoveryfeed/count_task/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&client_url='+Url.encode(trdflame_param.client_url)+'&r='+Math.round(Math.random()*100),
                        dataType: 'jsonp',
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){
                            if (response.errors!=0) {
				return false;
			    }
			  if(parseInt(response.task_count) > 3){

					 var div_discovery_feed =  trd_jQ('<img id="trd-lift-open" src="'+side_lift.lift_img_open+'" />');
					    trd_jQ('body').append(div_discovery_feed);
					    trd_jQ(html).appendTo('body');

					    side_lift.create_iframe_lift().appendTo('#trd-discoverylift-content');
					    trd_jQ('#trd-lift-open').bind('click', function(ev){
						ev.preventDefault();
						if(!side_lift.lift_is_open){
						    side_lift.lift_open();
						}else{
						    side_lift.lift_close();
						}
					    });
					    trd_jQ('#trd-lift-close').bind('click', function(ev){
						ev.preventDefault();
						side_lift.lift_close();
					    });

					    var t = setTimeout(function(){
						trd_jQ('#trd-lift-open').fadeIn(300);
						if(t) delete t;
					    }, 3000);


			side_lift.send_statistics();
		    }
	    }
	});
    }
};


var discovery_feed = {

    up_img : trdflame_param.baseurl+'images/disup.png',
    down_img: trdflame_param.baseurl+'images/disdown.png',

    is_up	: false,
    is_send	: false,
    is_show	: false,

    scroll	: 0.6,
    is_used	: false,
    used_type   : 0,
    iframe_id	: 'trd-discovery-feed-iframe',
    timer_animate: 'slow',
    check_first_task : false,
    hide_feed_on_ipad     : false,
    iframe_src : '',

    init: function(){
	discovery_feed.up_img   = trdflame_param.baseurl+'images/disup.png';
	discovery_feed.down_img = trdflame_param.baseurl+'images/disdown.png';

    },

    _up: function(a, h){
	//var h = trd_jQ(window).height();
		//var h = document.body.clientHeight;
	discovery_feed.is_up = true;
	trd_jQ('#trd-discovery-feed').animate({
		'height': h-25
	    }, discovery_feed.timer_animate);
	trd_jQ('#trd-discovery-feed-iframe').animate({
	    'height': h-40-25
	}, discovery_feed.timer_animate, function(){
	    trd_jQ(a).find('img').attr('src', discovery_feed.down_img);
	});
    },


    up: function(a){

	var h = trd_jQ(window).height();
	if(h > 2000){
		discovery_feed._up(a, 700);
	}else{
	       discovery_feed._up(a, h);
	}

    },

    down: function(a){

	discovery_feed.is_up = false;
	trd_jQ('#trd-discovery-feed').animate({
	    'height': 360
	}, discovery_feed.timer_animate);
	trd_jQ('#trd-discovery-feed-iframe').animate({
	    'height': 320
	}, discovery_feed.timer_animate, function(){
	    trd_jQ(a).find('img').attr('src', discovery_feed.up_img);
	});
    },

    close: function(){
	trd_jQ('#trd-discovery-feed').remove();
    },

    reload: function(){
	trd_jQ('#'+discovery_feed.iframe_id).attr('src', discovery_feed.iframe_src);
      //  console.log('discovery reload');
    },


    create_iframe: function(){
	discovery_feed.iframe_src = trdflame_param.baseurl+"apis/discoveryfeed/?uid="+trdflame_param.uid+"&aid="+trdflame_param.aid+'&extdomain='+window.location.hostname+'&cl_url='+Url.encode(trdflame_param.client_url)+"#discovery_feed";
	return	trd_jQ('<iframe />').attr({
		    'id'    :     discovery_feed.iframe_id,
		    'src'   :     discovery_feed.iframe_src,
		    'width' :     '100%',
		    'height':      '320px',
		    'frameborder': '0',
		    'z-Index':     '9300',
		    "scrolling":    'no'
		});
    },


    create: function(html){



	 if(is_ipad_true() /*|| trdflame_param.is_tablet()*/ ){
	    if(discovery_feed.hide_feed_on_ipad == 1){
		return false;
	    }
	 }
         

	 trd_jQ.ajax({
                        url: trdflame_param.baseurl+'apis/discoveryfeed/count_task/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&client_url='+Url.encode(trdflame_param.client_url)+'&r='+Math.round(Math.random()*100),
                        dataType: 'jsonp',
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){
                            if (response.errors!=0) {
				return false;
			    }
			  if(parseInt(response.task_count) > 3){
				  
					    var div_discovery_feed =  trd_jQ('<div id="trd-discovery-feed">');
					    trd_jQ('body').append(div_discovery_feed);

					    trd_jQ(html).appendTo(div_discovery_feed);
					    discovery_feed.create_iframe().appendTo('#trd-discovery-feed');
					    trd_jQ('#trd-discovery-up').bind('click', function(ev){
					       ev.preventDefault();
					       if(discovery_feed.is_up){
						   discovery_feed.down(this);
					       }else{
						   discovery_feed.up(this);
					       }

					    });

					    trd_jQ('#trd-discovery-close').bind('click', function(ev){
					       ev.preventDefault();
					       discovery_feed.close();
					    });


					    window.onscroll = function(e) {
						    if ( IsScrollbarAtBottom(discovery_feed.scroll) ) {
							discovery_feed.show();
						    }
						};
				

		    }

		    if(!discovery_feed.is_send){
			discovery_feed.send_statistics();
			discovery_feed.is_send = true;

		    }

	    }
	});
    },



    show: function(){
	if(!discovery_feed.is_show &&  discovery_feed.is_used && !side_lift.lift_is_open){
	    trd_jQ('#trd-discovery-feed').animate({bottom: 0}, discovery_feed.timer_animate);
	    discovery_feed.is_show = true;


	    /* отсрочка */
	    var t = setTimeout(function(){

		discovery_feed.cook_first_task();

		if(t) delete t;
	    }, 4000);


	}
    },

    send_statistics:function(){
	//JSONP(trdflame_param.baseurl+'apis/flame/df_load_stat/?&aid='+trdflame_param.aid+'&uid='+trdflame_param.uid, 'trdflame', function(json) {   });
    },

    cook_first_task : function(){
	if(!discovery_feed.check_first_task){
	    JSONP(trdflame_param.baseurl+'apis/discoveryfeed/cook_first/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&lift=discovery'+'&cl_url='+Url.encode(trdflame_param.client_url), 'trdflame', function(json) {   });
	    discovery_feed.check_first_task = true;
	}
    }

};


var mobile_discovery_feed = {

    swipe_direction : '',
    is_show	    : false,
    animate_time    : 300,
    t		    : 50,
    t1		    : 100,
    used	    : false,
    have_short	    : false,
    ajax_load	    : false,
    check_first_task : false,
    normalize_width : 0,

    cook_first_task : function(){
	if(!mobile_discovery_feed.check_first_task){
	    JSONP(trdflame_param.baseurl+'apis/discoveryfeed/cook_first/?&aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&lift=mobile_discovery&cl_url='+Url.encode(trdflame_param.client_url), 'trdflame', function(json) {   });
	    mobile_discovery_feed.check_first_task = true;
	}
    },


    init: function(){
	mobile_discovery_feed.normalize_width = (trd_window.width >= trd_window.height) ?  trd_window.width : trd_window.height;
	 trd_jQ.ajax({
                        url: trdflame_param.baseurl+'apis/discoveryfeed/mdf_init/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&os='+BrowserDetect.OS+'&extdomain='+window.location.hostname+'&cl_url='+Url.encode(trdflame_param.client_url)+'&r='+Math.round(Math.random()*100),
                        dataType: 'jsonp',
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){

			    if(response.tasks && response.tasks.length > 0){

				trd_jQ('<img id="trd-dfm-start" />').attr('src', trdflame_param.baseurl+"images/discovery/dfm.png").appendTo('body');

				trd_jQ('<div id="trd-dfm">').appendTo('body');
				trd_jQ(response.tasks).appendTo('#trd-dfm');


				mobile_discovery_feed.update_size();

				mobile_discovery_feed.used = true;

				trd_jQ(window).hammer({
					preventDefault: false,
					gesture: true,
				     }).on("dragleft swipeleft dragright swiperight release", function(event) {
						if(!event.gesture) {
						     return;
						 }
				    	//console.log(event);
					switch(event.type){
					    case 'dragup':
					    case 'swipeup':
						event.gesture.preventDefault();
					    break;
					case 'dragdown':
					case 'swipedown':
					    event.gesture.preventDefault();
					break;
					   case 'dragright':
					   case 'swiperight':
					       event.gesture.preventDefault();
					   break;
					    case 'dragleft':
					    case 'swipeleft':
						event.gesture.preventDefault();
					    break;
					    case 'release':
					    case 'dragend':
							mobile_discovery_feed.direction = event.gesture.direction;
							if(mobile_discovery_feed.direction == 'left' && event.gesture.distance > 120){
							    mobile_discovery_feed.show();
							}
							if(mobile_discovery_feed.direction == 'right' && event.gesture.distance > 50){
							    mobile_discovery_feed.hide();
							}
					    break;
				       }
			    });

				trd_jQ('#trd-dfm-hide').bind('click', function(ev){
				    ev.preventDefault();
				   mobile_discovery_feed.hide();
				});

				trd_jQ('#trd-dfm-close').bind('click', function(ev){
				    ev.preventDefault();
				    mobile_discovery_feed.hide();
				});

				trd_jQ('.trd-dfm-sharestart').bind('click', function(ev){
				    ev.preventDefault();
				    mobile_discovery_feed.pre_share(this);
				});

				 trd_jQ('#trd-dfm-start').bind('click', function(){
				     mobile_discovery_feed.show();
				 });


				 mobile_discovery_feed.task_statistic();
			    }

			}

	 });

    },

     update_size: function(){
	var orient = window.orientation;
	var w =	0;
	if(orient == -90 || orient == 90){
	    w =	trd_jQ('#trd-dfm-list').height();
	}else{
	    w =	trd_jQ('#trd-dfm-list').width();
	}
	var nw = parseInt(w*15/100);
	trd_jQ('.trd-dfm-sharestart').width(nw).height(nw).fadeIn(200);
	var b = trd_jQ('#trd-dfm-share-src').find('a').length;
	var ifr =0; // trd_jQ('#trd-dfm-share-src').find('iframe').length;

	//alert(b);
	//alert(ifr);

	trd_jQ('.trd-dfm-soc-but').width(nw).height(nw);
	trd_jQ('.trd-dfm-social-buttons').css({
		left: nw,
		height:nw,
		width: nw*(b+ifr)+(3*2*(b+ifr))
	    });
    },





    show: function(){
	if(!mobile_discovery_feed.is_show && mobile_discovery_feed.used){
	    mobile_discovery_feed.is_show = true;


	    //trd_jQ('#trd-dfm-white-line').hide('fast');

	    trd_jQ('#trd-dfm').cssAnimate({right: "0"}, mobile_discovery_feed.animate_time, 'easeInOutCubic', function() {
		mobile_discovery_feed.scroll_hide(1);
		trd_jQ('#trd-dfm-close').fadeIn(300);
		mobile_discovery_feed.cook_first_task();
	    });
	 }

    },

    hide: function(){
	 if(mobile_discovery_feed.is_show && mobile_discovery_feed.used){
            mobile_discovery_feed.is_show = false;
            trd_jQ('#trd-dfm').cssAnimate({right: -(mobile_discovery_feed.normalize_width*1.3)+'px' }, mobile_discovery_feed.animate_time*1.2, 'easeInOutCubic' ,function() {
             mobile_discovery_feed.scroll_hide(0);
	    });
	 }
     },



     scroll_hide: function (hide){
       if(hide){
           trd_jQ('body').addClass('trd-dfm-noscroll');
       }else{
           trd_jQ('body').removeClass('trd-dfm-noscroll');
       }
   } ,

   start_show:function(){

     if(mobile_discovery_feed.used){
	 trd_jQ('#trd-dfm-start').fadeIn(300);
     }
   },
   start_social: function(el){
       var self = trd_jQ(el);
       if(self.hasClass('trd-dfm-has')){

	   if(self.hasClass('trd-dfm-hide')){
	       mobile_discovery_feed.soc_show(self);

	   }else{
	       mobile_discovery_feed.soc_hide(self);
	   }

       }else{

	   var src = trd_jQ('#trd-dfm-share-src').clone().removeAttr('id').attr('class', 'trd-dfm-social-buttons');
	   src.appendTo(self.parent()).show(100, function(){
	       self.addClass('trd-dfm-has');
	       mobile_discovery_feed.soc_show(self);
	       mobile_discovery_feed.soc_event(el);
	   });

       }
   },

   soc_event: function(src){
       trd_jQ(src).closest('.trd-dfm-img').find('.trd-dfm-social-buttons a').each(function(i,e){
		    trd_jQ(e).bind('click', function(ev){
			ev.preventDefault();
			var self_link = trd_jQ(e);
			var hash = '#td';
			if(trdflame_param.session_trendsetter_id != 0){
			    hash = hash + Base64.encode(trdflame_param.session_trendsetter_id.toString());
			}
			var url = trd_jQ(src).data('task_url') + hash;
			var type =self_link.data('type');

			var short = trd_jQ(src).data('shorturl');

			if(self_link.hasClass('trd-dfm-whatsapp')){
			    var href = mobile_discovery_feed.get_hash_url();
			    var text = trd_jQ(e).data('text');
			    self_link.data('href', Url.encode(href));
			    self_link.attr('href', 'whatsapp://send?text='+text+' '+Url.encode(href));
			    location.href = self_link.attr('href');
			    return false;
			}else{
			    if(short){
				trdflame_param.social_share(type, short, 1 , '', trd_jQ(this));
			    }else{
				trdflame_param.social_share(type, url, 0 , '', trd_jQ(this));
			    }
			}
		});

       });


   },
   soc_show: function(el){
        var soc = trd_jQ(el).next().find('a');
	var l = soc.length;

        soc.each(function (i,_el){

		trd_jQ(_el).delay(mobile_discovery_feed.t*i).animate({'opacity': "1"}, mobile_discovery_feed.t1, function(){
		    	    /*  last button */
			    if(i == l-1){
				mobile_discovery_feed.update_size();
			    }
		});
             });
	     trd_jQ(el).removeClass('trd-dfm-hide').addClass('trd-dfm-show');
	    return false;

   },
   soc_hide: function(el){
            var soc = el.next().find('a');
	    var l = soc.length;
            soc.reverse().each(function (i,_el){
			trd_jQ(_el).delay(mobile_discovery_feed.t*i).animate({'opacity': "0"}, mobile_discovery_feed.t1,  function(){
			     /*  last button */
			    if(i == l-1){

			    }
			});
            });
	    trd_jQ(el).removeClass('trd-dfm-show').addClass('trd-dfm-hide');
	return false;
   },

   /* send statistic for trd system */
   task_statistic: function(){
      trd_jQ('.trd-dfm-slide a').each(function(){
	  var self = trd_jQ(this);
	  var task_url = self.attr('href');
	  var task_id  = self.closest('.trd-dfm-task-item').data('item');

	  if(!is_one_domen(task_url, location.href)){
	      self.attr('target', '_blank');
	      self.bind('click', function(ev){
		  cross_post(
		      trdflame_param.baseurl+'apis/flame/cross_task_statistic',
		      {
			  u_id : trdflame_param.uid,
			  fb_id: trdflame_param.fbid,
			  t_id : task_id,
			  tr_id: trdflame_param.session_trendsetter_id,
			  type : 'discovery_feed'
		      });
	      });
	      return true;
	  }else{
	     self.bind('click', function(ev){
		    ev.preventDefault();
		    cross_post(
			    trdflame_param.baseurl+'apis/flame/cross_task_statistic',
			    {
				u_id : trdflame_param.uid,
				fb_id: trdflame_param.fbid,
				t_id : task_id,
				tr_id: trdflame_param.session_trendsetter_id,
				type : 'discovery_feed'
			    },
			    function(response){
				location.href = task_url;
			    }
		   );
		   return false;
	    });
	  }
      });
   },

   /* pre share create ti & get short */
   pre_share: function(el){
	  var self	    = trd_jQ(el);
	  var task_url	    = self.data('task_url');
	  var task_id	    = self.closest('.trd-dfm-task-item').data('item');
	  var taskinst_id   = self.closest('.trd-dfm-task-item').data('taskinstid');
       if(!is_one_domen(task_url, location.href)){
            var short = self.data('shorturl');
	     //debug
	     /*
	      
	      mobile_discovery_feed.start_social(el);
	      return;
	   */
	      /* get short */
	      if(!short){
		  var data = {
		      fbid: trdflame_param.fbid || 0,
		      aid : trdflame_param.aid  || 0,
		      uid : trdflame_param.uid  || 0,
		      id  : taskinst_id         || 0,
		      task_id: task_id          || 0
		  };
		  cross_post(
			  trdflame_param.baseurl+'apis/flamepanel/cross_sharetask/',
			  data,
			  function(response){

			      if(response.task_share_url){
				  self.attr('data-shorturl', response.task_share_url);
				  mobile_discovery_feed.start_social(el);
				  mobile_discovery_feed.have_short = true;
			      }
			  },
			  function(response){
			      // console.log(response.msg);
			      return  false;
			  }
		  );
	      }else{
		  mobile_discovery_feed.start_social(el);
	      }
	  }else{
		mobile_discovery_feed.start_social(el);
	  }
   },

   get_hash_url: function(){

	var hash = location.hash;
	var loc =  location.href;
	if(hash.length > 0){
	   loc = loc.replace(hash, '');

	}
	hash = '#tm';
	if(trdflame_param.session_trendsetter_id > 0){
	    hash = hash + Base64.encode(trdflame_param.session_trendsetter_id.toString());
	}
	return loc+hash;
    }



};


var mobile_flame = {
    is_open : false,
    div     : '',
    timer: 500,
    is_scrolled: false,
    H: 0,
    resize: function(){
	var new_h = 50*( trd_jQ('body').width()/290);
	trd_jQ('#trd-panel-mobile, #trd-mflame').height(new_h);
	return new_h;
    },
    init: function(){
	trd_jQ.ajax({
                        url: trdflame_param.baseurl+'apis/flame/mobile_flame/?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid+'&os='+BrowserDetect.OS+'&r='+Math.round(Math.random()*100)+'&url='+trdflame_param.href,
                        dataType: 'jsonp',
			type: 'POST',
			async: true,
			crossDomain: true,
			contentType: "application/json",
                        success: function(response){
                            if (response.errors===0) {
                               trd_jQ(response.html).appendTo('body');

			       //mobile_flame.H = mobile_flame.resize();

			       trd_jQ('#trd-panel-mobile').bind('click', function(ev){
				   ev.preventDefault();
				   if(!mobile_flame.is_open){
				       mobile_flame.open();
				   }else{
				       mobile_flame.close();
				   }
				   return false;
			       });
			       trd_jQ('#trd-mflame-hide').bind('click', function(ev){
				   ev.preventDefault();
				   mobile_flame.close();
				   return false;
			       });
			       trd_jQ('#trd-mflame-site').bind('click', function(ev){
				    ev.preventDefault();
				    window.open(trdflame_param.introurl);
				   return false;
				});

				trd_jQ('.trd-msoc').bind('click', function(ev){
				    ev.preventDefault();
				    var soc = trd_jQ(this).data('soc');
				    trdflame_param.social_share(soc, mobile_flame.get_hash_url(), 0, '', trd_jQ(this));
				    return false;
				});
				trd_jQ('#trd-mflame-close').bind('click', function(ev){
				    ev.preventDefault();
				    mobile_flame.hide();
				    return false;
				});

				/* orientationchange */
				trd_jQ(window).bind( 'orientationchange', function(){
				    mobile_flame.adapt_to_orientation();

				});
			    }
			}
	});
    },
    adapt_to_orientation: function () {
	    trd_jQ("#trd-mflame").fadeOut(300, function(){
		if(mobile_flame.is_scrolled){
		    mobile_flame.is_open = false;
		trd_jQ("#trd-panel-mobile").fadeIn();
		}
	    });
    },

    open: function(){
	trd_jQ('#trd-mflame').fadeIn(mobile_flame.timer, function(){
	       mobile_flame.is_open = true;
	       trd_jQ('#trd-panel-mobile').hide();
	});

    },
    close: function(){
	trd_jQ('#trd-mflame').fadeOut( mobile_flame.timer, function(){
	       mobile_flame.is_open = false;
	});
	trd_jQ('#trd-panel-mobile').show();
    },

    hide: function(){
	trd_jQ('#trd-panel-mobile, #trd-mflame').fadeOut(mobile_flame.timer, function(){
	   trd_jQ(this).remove() ;
	});
    },

    statistic_click: function(button_type){

    },

    get_hash_url: function(){

	var hash = location.hash;
	var loc =  location.href;
	if(hash.length > 0){
	   loc = loc.replace(hash, '');

	}
	hash = '#tm';
	if(trdflame_param.session_trendsetter_id > 0){
	    hash = hash + Base64.encode(trdflame_param.session_trendsetter_id.toString());
	}
	return loc+hash;
    }


};

var article_slideshow = {
    boxid       : 'trd-articleslideshow',
    iframe_id   : 'trd-articleslideshow-iframe',
    as_hide_df  : false,
    autoplay    : false,
    iframe_loaded: false,

    create_iframe: function(){

       var w = trd_jQ('#'+article_slideshow.boxid).width() 

	var iframe = trd_jQ('<iframe />').attr({
		    'id'    :      article_slideshow.iframe_id,
		    'src'   :      trdflame_param.baseurl+"apis/articleslideshow/?uid="+trdflame_param.uid+"&aid="+trdflame_param.aid+'&extdomain='+window.location.hostname+'&cl_url='+Url.encode(trdflame_param.client_url),
		    'width' :      w,
		    'height':      '1px',
		    'frameborder': '0',
		    'z-Index'    : '9300',
		    "scrolling"  : 'no'
		});

        iframe.load(function(){
            article_slideshow.iframe_loaded = true;
             /* run autoplay when slidershow visible on page */
                    trd_jQ(window).scroll(function(e) {
                        //partial
                        //complete
                        //console.log(trd_jQ('#'+article_slideshow.boxid).visible(true));
                        if(article_slideshow.iframe_loaded == true) {
                            if(trd_jQ('#'+article_slideshow.boxid).visible(true) == true  && article_slideshow.autoplay == false){
                                 trd_jQ.postMessage({ 'autoplay': 1  }, trdflame_param.baseurl.rtrim('/'), trd_jQ('#'+article_slideshow.iframe_id).get(0).contentWindow);
                                 article_slideshow.autoplay = true;
                            }
                            if(trd_jQ('#'+article_slideshow.boxid).visible(true) == false && article_slideshow.autoplay == true){
                                trd_jQ.postMessage({ 'autoplay': 0  }, trdflame_param.baseurl.rtrim('/'), trd_jQ('#'+article_slideshow.iframe_id).get(0).contentWindow);
                                article_slideshow.autoplay = false;
                            }
                        }
                    });
        });
        return iframe;
    },
    init: function(){
        cross_post(trdflame_param.baseurl+'apis/articleslideshow/preinit?aid='+trdflame_param.aid+'&uid='+trdflame_param.uid, {},
        function(response){
            if(response && response.use_as_show==1){
                article_slideshow.as_hide_df = response.as_hide_df;
                if(trd_jQ('#'+article_slideshow.boxid)){
                article_slideshow.create_iframe().appendTo('#'+article_slideshow.boxid);
                var if_height;
                    trd_jQ.receiveMessage(function(e){
                           var h = Number( e.data.replace( 'if_height=', '') );
                           if ( !isNaN( h ) && h > 0) {
                             // console.log(e);
                             if_height = h ;
                             trd_jQ('#trd-articleslideshow').attr('height',if_height);
                             trd_jQ('#'+article_slideshow.iframe_id).attr({'height':if_height});
                           }
                    }, trdflame_param.baseurl.rtrim('/') );
                }
            }
        },
        function(response){
                return false;
        });
    }
};


var trdflame = {

    timer: false,
    is_send_hash: 0,
    /* statistic query */
    clickstat: function(owner) {
        JSONP(trdflame_param.baseurl+'apis/flame/flamestat/?uid='+trdflame_param.uid+'&owner='+owner, 'trdflame', function(json) {   });
    },


    hide_error: function(){

             document.getElementById('trdbutton-errorbox').style.display = 'none';
             document.getElementById('trdpanel-errorbox').style.display = 'none';

             document.getElementById('trdbutton-connectbox').style.display = 'block';
             document.getElementById('trdbutton-socialbox').style.display = 'block';
             document.getElementById('trdpanel-connectbox').style.display = 'block';
             document.getElementById('trdpanel-socialbox').style.display  = 'block';
             if(trdflame.timer){
                 delete trdflame.timer;
                 trdflame.timer = false;
             }


    },
    error: function(json){
        if(json.error_type === 'user' && json.error === 1){

             document.getElementById('trdbutton-connectbox').style.display = 'none';
             document.getElementById('trdbutton-socialbox').style.display = 'none';
             document.getElementById('trdpanel-connectbox').style.display = 'none';
             document.getElementById('trdpanel-socialbox').style.display = 'none';

             document.getElementById('trdbutton-errorbox').innerHTML = json.error_msg;
             document.getElementById('trdbutton-errorbox').style.display = 'block';
             document.getElementById('trdpanel-errorbox').innerHTML = json.error_msg;
             document.getElementById('trdpanel-errorbox').style.display = 'block';

             trdflame.timer = setTimeout(function(){ trdflame.hide_error();}, 5000);
        }
    },


    loadjs: function(){


         if(!document.getElementById('trd-js')) {
           var body = document.getElementsByTagName('body')[0];
           var js_div = document.createElement('div');
           js_div.setAttribute('id', 'trd-js');
           body.appendChild(js_div);

            var js1 = document.createElement('script');
            js1.type = "text/javascript";
            js1.src = trdflame_param.baseurl+'js/easyxdm/json2.js';
            js_div.appendChild(js1);

           var js2 = document.createElement('script');
            js2.type = "text/javascript";
            js2.src = trdflame_param.baseurl+'js/easyxdm/easyXDM.js';
            js_div.appendChild(js2);

           if(BrowserDetect.browser === 'Explorer'){
             js2.onreadystatechange = function () {
                  if (this.readyState === 'complete') {
                     trdflame.postcallback();

                 }
             };
            }else{
                js2.onload = function(){
                    trdflame.postcallback();
                };
            }
         }
    },
    onMessage: function(message, origin){
          //  console.log(message);
        
                    if(message){
                        message = JSON.parse(message);
			//console.log(message);
                        switch(message.response){
                            /* дождались FB вносим измененния */
//                            case 'getstatus':
//                                trdflame_param.connect_status = message.status;
//                                trdflame_param.fbid = message.fbid;
//                                if(message.status === 'connected'){
//                                     trdflame.change_connected();
//                                 } else {
//				    trdflame.change_not_connected();
//                                 }
//                            break;
                            case 'onready_status':
				if(message.status === 'connected'){
                                    trdflame_param.connect_status = message.status;
				    trdflame_param.session_trendsetter_id = parseInt(message.tr_id);
				    trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
				    trdflame_param.fbid = message.fbid;
                                    trdflame.change_connected();
                                } else{
                                    
                                    trdflame.change_not_connected();
                                    trdflame_param.connect_status = message.status;
				}
				

                            break;
			    case 'check_connected_fb':
                                    trdflame_param.session_trendsetter_id = parseInt(message.tr_id);
				    trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
				    trdflame_param.fbid = message.fbid;
				    if(message.status == 'connected'){
					if(trdflame_param.connect_status !== 'connected'){
					    trdflame_param.connect_status = message.status;
					    trdflame.change_connected();
					}
				    }else{

					if(trdflame_param.connect_status == 'connected'){
					    trdflame_param.connect_status = message.status;
					    trdflame.change_not_connected();
					}
				    }
			    break;
                            case 'find_trd':
//                                    trdflame_param.session_trendsetter_id = parseInt(message.tr_id);
//				    trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
//				    trdflame_param.fbid = message.fbid;
//				    trdflame.change_connected();
			    break;
                             case 'logout_trd':
//                                    trdflame_param.session_trendsetter_id = 0;
//				    trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
//				    trdflame_param.fbid = 0;
//				    trdflame.change_not_connected();
			    break;

                            
                        }
                        
                        
                    }
                },
    postcallback: function(){
	     socket1 = new easyXDM.Socket({
                remote: trdflame_param.baseurl+"/apis/flame/flamefb/?aid="+trdflame_param.aid+'&uid='+trdflame_param.uid+'&url='+Base64.encode(trdflame_param.href+trdflame_param.trd_hash)+'&reffer='+Base64.encode(document.referrer),
                swf:    trdflame_param.baseurl + "/js/easyxdm/easyxdm.swf",
                container: 'trdbutton-connectbox',
                props: {
                   id: document.getElementById('trdflame_protokol_panel'),
                   'scrolling' :'no',
                   style: {height: '28px', width: '100%'}
                },
                onMessage:function(message, origin){
                    trdflame.onMessage(message, origin);
                },
                onReady: function() {
                    socket1.postMessage('onready_status');
		 //   trdflame_param.debug = 0;
                    if(trdflame_param.debug != 1){
		    setInterval(
                        function() {
			    trdflame.check_connected_fb();
                        },30000);
		    }
                }
            });
         return true;
    },
    check_connected_fb: function(){
	socket1.postMessage('check_connected_fb');
    },
    get_session_trendsetter_id: function(){
	 socket1.postMessage('get_session_trendsetter_id');
    },

    panel_intro_status: function(){
        socket1.postMessage('panel_intro_status');
    },

    update_status : function(){
     // socket1.postMessage('getstatus');
    },
    clear_flame : function(){
        trd_jQ('.trd-root, #trd-root').remove();
        trd_jQ('#trdflame-panel').remove();
        trd_jQ('#trd-iframe-panel').remove();
        trd_jQ('#trd-js').remove();

        return true;

    },


    tablet_div: function(){
	/* tablet  check */
	trd_jQ('body').append(trd_jQ('<div id="trd-tablet">'));
    },


    /* рисование без статуса FB */
    draw: function(){




        /* div for panel and iframe */
        trd_jQ('body').append('<div id="trdflame-panel">');
	trd_jQ('#trdflame-panel').height(Htpanel);

	var div =  trd_jQ('<div id="trd-iframe-panel">').css({
            'position' : 'fixed',
	    'height':'0px',
            'bottom' :   '0px',
            'left' : 0,
            'width': '100%',
            'line-height': 0,
            'z-Index': '2147483649'
        });
        trd_jQ('body').append(div);


		   var preview_offline = getURLParameters('trdflame-preview');


                   JSONP(trdflame_param.baseurl+'apis/flame/flameit/?shareurl='+trdflame_param.shareurl+'&uid='+trdflame_param.uid+'&baseurl='+trdflame_param.baseurl_code+'&ismobile='+is_mobile+'&preview_offline='+preview_offline, 'trdflame', function(json) {

                        trdflame_param.lang = json.flamelang;
                        if (trdflame_param.lang === 'he') {
                            trdflame_param.direction = 'rtl';
                        } else {
                            trdflame_param.direction = 'ltr';
                        }


			trdflame_param.use_flame_button	    = json.flame_use_button;
			trdflame_param.use_flame_panel	    = json.flame_use_panel;


			trdflame_param.flame_show_panel		= parseInt(json.flame_show_panel);
			trdflame_param.flame_show_panel_mobile  = parseInt(json.flame_show_panel_mobile);
			trdflame_param.transparent_flame	= parseInt(json.transparent_flame);


                        trdflame_param.introurl = json.url;
                        trdflame_button.init(json);
			trdflame_panel.is_expand = false;
                        trdflame_panel.panel_position = json.panel_position;
			trdflame_panel.def_width = json.flame_panel_width;


			discovery_feed.scroll = parseFloat(json.discovery_feed_scroll);
			discovery_feed.hide_feed_on_ipad = json.hide_feed_on_ipad;


			if(!is_mobile && trd_window.width > 750 && json.html_side_lift.length > 0){
			    side_lift.create(json.html_side_lift);
		}



			trdflame.loadjs();

			/* discovery_feed */
		//	if(!is_mobile && json.discovery_feed){
			if( json.discovery_feed && !is_mobile  /* (!is_mobile ||  trdflame_param.is_tablet() ) */){

                           if(json.as_hide_df == '1' && parseInt(trd_jQ('#trd-articleslideshow').length)){
                               discovery_feed.is_used =  0;
                           }else{
                               discovery_feed.is_used =  parseInt(json.discovery_feed);
                               discovery_feed.create(json.html_discovery_feed);
                           }




        		};







			/*transparent flame*/
			trdflame.transparent_flame_send();


			// if(is_ipad && is_mobile) { return false };



			   if(trdflame_param.flame_show_panel == 1){
			       trd_jQ('#trdflame-panel').html(json.code_panel);



			       trd_jQ('#trd-panel-content').css('height',Htpanel+'px');

			       if(is_mobile == 1 ){
				   if(trdflame_param.flame_show_panel_mobile == 1) {
				    trd_jQ(json.code_flamepanel_button).appendTo('body');
				    trd_jQ('.trdbutton-footer').remove();
				    mobile_flame.init();
				    trd_jQ('#trd-panel-mobile').bind('click', function() {
					if (is_mobile) {
					 //   location.href = trdflame_param.introurl;
					} else {
						    //   trdflame_panel.create_iframe_panel();
					    trdflame_panel.expand_panel();
					 //   trd_jQ('#trdflame-panel').addClass('trd-mobile-panel');
					 //   trd_jQ('#trd-panel-content').fadeIn(300);
					}
					return false;
				    });


				    window.onscroll = function(e) {
					    mobile_flame.is_scrolled = true;
						if ( IsScrollbarAtBottom(discovery_feed.scroll) ) {
						    trdflame_moov.clear();

						if(!mobile_flame.is_open){
						    trd_jQ("#trd-panel-mobile").fadeIn();
						}

						mobile_discovery_feed.start_show();
					    }
					};


				}
			       }else{
					if( trd_window.width > 750){
					  trd_jQ('#trd-panel-content').fadeIn(300, function(){
					     trd_jQ('#trd-panel-content').css('display', 'block');
					     response_panel_height(trdflame_param.flame_show_panel_mobile);
					     trdflame_panel.panel_resize();

					  });
					  trdflame_panel_moov.init();
					}
				   }
			   }


                          /*expand panel */
                          trd_jQ('#trd-content-wrap, #trd-flamepanel-expand').bind('click', function(){
			     trdflame_panel.create_iframe_panel();


			     if(trdflame_panel.is_expand === false){
                                trdflame_panel.expand_panel();
                             }else{
                                 trdflame_panel.collapse_panel();
                             }
                             return false;
                          });
                          /* panel social expand */
                          trd_jQ('#trd-flame-expand').bind('click', function(){
                                if(trdflame_panel.is_expand_social === false){
                                     trdflame_panel.expand_social();
                                 }else{
                                    trdflame_panel.collapse_social();
                                 }
                                 return false;
                          });

		           //     trdflame_panel.panel_resize();
                           if(json.error === 0){

                            }else{
                                if(json.error_type === 'system' && json.error_msg.length>0){
                                   if(trdflame_button.flame_btn){
                                    trdflame_button.init_redirect(json.url);
                                  }
                                     trdflame_panel.init_redirect(json.url);
                                }
                            }

			    trdflame_panel.resize_panel();
                   });
    },


    /* transparent flame hash */
    transparent_flame: function(trendsetter_id){
	    if(trdflame_param.transparent_flame == 1){

		var hash = 'tt';
		if(trendsetter_id > 0){
		    hash = hash + Base64.encode(trendsetter_id.toString());
		}
		location.hash = hash;
	    }
    },
    /* transparent flame send api */
    transparent_flame_send: function(){
	var hash = location.hash;
	if(hash.length > 0){
		if( hash.substr(1, 2) == 'tt'){
		    //var tr_hash    = Base64.decode(hash.replace('tt', ''));
		    //JSONP(trdflame_param.baseurl + 'apis/flame/transparent_flame/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&shareurl=' + trdflame_param.shareurl+'&tr_id='+tr_hash, 'trdflame', function(json) {});
		}else{
		    trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
		}
	    }else{
		trdflame.transparent_flame(trdflame_param.session_trendsetter_id);
	    }
    },



    change_not_connected: function() {

        var fbid = '&fbid=0'; //trdflame_param.fbid2get();
        if(document.getElementById('trdpanel-flametext')) {

            if( parseInt(trdflame_param.fbid) > 0 ){
                 trdflame_panel.close_tooltip();
             }else{
               if(trd_window.width > 750) {
		trdflame_panel.open_tooltip();
	       }
             }
       }

       /* не залогинен */
       JSONP(trdflame_param.baseurl + 'apis/flame/trdflame/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&shareurl=' + trdflame_param.shareurl+fbid+'&tr_id='+trdflame_param.session_trendsetter_id, 'trdflame', function(json) {

           if(json){
                var view = 1;
                if(json.trendsetter_status != 'ACTIVE'){
                 //  trdflame.clear_flame();
                    return false;
                }

                if(json.error === 0){
                   trdflame_param.short_url = json.short_url;
                }
                   /*превращаем в не залогиненное состояние*/
                    /* кнопка */
                    if (json.avatar!='') {

                      trd_jQ('.trd-avatar').html(json.avatar).css('display', 'none');
                      trd_jQ('#trdpanel-avatar').html(json.avatar).css('display', 'none');


                   } else {


                      trd_jQ('.trd-avatar').html(json.avatar).css('display', 'none');;
                      trd_jQ('#trdpanel-avatar').html(json.avatar).css('display', 'none');;
		      trd_jQ('#tda').css('width', '1px');

		      trd_jQ('.trd-overal').html(json.flame_code);
		      trd_jQ('#trdpanel-overal').html(json.flame_code);



                    if(view){
                        trdflame_panel.panel_resize();
                    }
		    trdflame_panel.resize_panel();
            }
		    // alert(trdflame_panel.def_width);

	    //trd_jQ('#trdflame-panel').width(trdflame_panel.def_width+'px');
	    trdflame_panel.reload();
        }
    });


	    if(discovery_feed.is_used){
		discovery_feed.reload();
	     }
    },




    change_connected: function(){

      var fbid = trdflame_param.fbid2get();
      if(document.getElementById('trdpanel-flametext')) {
            if( parseInt(trdflame_param.fbid) > 0 ){
                 trdflame_panel.close_tooltip();
             }else{
                 trdflame_panel.open_tooltip();
             }
     }





       /* залогинен */
        JSONP(trdflame_param.baseurl + 'apis/flame/trdflame/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&shareurl=' + trdflame_param.shareurl+fbid+'&tr_id='+trdflame_param.session_trendsetter_id, 'trdflame', function(json) {
            if(json){
                if(json.error == 0){

		    /* Trendsetter paused or deleted */
                    if(json.trendsetter_status != 'ACTIVE'){
                       trdflame.clear_flame();
                        return false;
                    }


		    if(parseInt(json.trendsetter_id) > 0){
			trdflame.transparent_flame(json.trendsetter_id);
		    }
                   trdflame_param.short_url = json.short_url;

		 //  trd_jQ('#trdflame-panel').removeAttr('style');
		 //  trd_jQ('#trdflame-panel').height(Htpanel);

		    /*превращаем в залогиненное состояние*/
                    /* кнопка */
                    trd_jQ('.trd-avatar').html(json.avatar).css('display', 'block');
		    trd_jQ('#tda').css('width', '35px');
                    trd_jQ('#trdpanel-avatar').html(json.avatar).css('display', 'block');
                    trd_jQ('.trd-overal').html(json.flame_code);
                    trd_jQ('#trdpanel-overal').html(json.flame_code);

                    /*панель*/
                    trdflame_panel.panel_resize();
		    trdflame_panel.resize_panel();

                }else{
                    trdflame.error(json);
                }
		trdflame_panel.reload();
            }
       });

        if(discovery_feed.is_used){
		discovery_feed.reload();
	}
   },

   flamepanel_reload: function(){

   },

    send_fb_data: function(data){

     var get = '';

     if(data['email']){
         get += '&email='+data['email'];
     }
     if(data['id']){
         get += '&fbid='+data['id'];
     }
     if(data['gender']){
         get += '&gender='+data['gender'];
     }
     if(data['birthday']){
        get +='&birthday='+data['birthday'];
     }
     if(data['first_name']){
         get += '&firstname='+data['first_name'];
     }
     if(data['last_name']){
         get += '&lastname='+data['last_name'];
     }
     if(trdflame_param.shareurl){
        get += '&shareurl='+trdflame_param.shareurl;
     }
     if(trdflame_param.uid){
         get += '&uid='+trdflame_param.uid;
     }

     get = '?'+ltrim(get);
     JSONP(trdflame_param.baseurl + 'apis/flame/flamereg/'+get, 'trdflame', function(json) {
             if(json){

                  if(json.error === 1  ) {
                     if(json.error_type === 'user'){
                         trdflame.error(json);
                         return false;
                     }
                  } else {
                    if( parseInt(json.is_login) ) {

                            trdflame.change_connected();

                    }else{
                        trdflame.change_not_connected();
                    }
                }

             }
     });





   },

    createtaskinstance: function(){
       fbid = trdflame_param.fbid2get();
       JSONP(trdflame_param.baseurl + 'apis/flame/trdflameinstance/?aid=' + trdflame_param.aid +'&uid=' + trdflame_param.uid + '&shareurl=' + trdflame_param.shareurl+fbid, 'trdflame', function(json) {
           if(json && json.error === 0){
               trdflame_param.shareurl = json.short_url;
           }else{
               trdflame.error(json.error_msg);
           }
       });
   },

   stat_analysis: function(){

    return false;

//    if(trdflame_param.aid == 42) {
//        var referrer = document.referrer;
//	trd_jQ.ajax({
//                        url: 'http://demo.trendemon.com/trd_w/index.php',
//                        dataType: 'jsonp',
//			data:{
//			    'ref': referrer,
//			    'url': trdflame_param.href,
//			    'act': 'in'
//			},
//			type: 'POST',
//			async: true,
//			crossDomain: true,
//			contentType: "application/json",
//                        success: function(response){}
//
//       });
//    }
   }

};

(function() {



    // Initialize the ieUserAgent object
    ieUserAgent.init();
    if(ieUserAgent && ieUserAgent.version < supportIE  || ieUserAgent.renderVersion < supportIE){
	log('You are using an older version of the browser');
	return;
    }

/* вставляем скрипт подключения и распарисиваем первичные параметры */
trdflame_param.get_main_param();
trdflame.tablet_div();
trdflame_param.is_tablet();


    trdflame_param.isused( function () {


	    /* первоначальная загрузка css библиотеки 1 файл статическая и динамическая часть */
	    var i = false;
	    trdflame_param.loadcssjs('css',trdflame_param.baseurl+'apis/flame/flamecss/'+trdflame_param.aid+'/'+trdflame_param.uid, 'link', function(){
		/* рисуем кнопку и панель для не залогиненного состояния и ждем ответа от аппликации */
		if(!i) {

		    if(is_mobile){
			trdflame_moov.init();
			mobile_discovery_feed.init();
		    }
                    article_slideshow.init();
		    trdflame.draw();

		    i = true;

		}
	    }, '&agent='+agent);

    });



})();

