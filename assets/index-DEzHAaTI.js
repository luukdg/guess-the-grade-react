import{R as qr,r as Yr}from"./index-CP0Rg2Sk.js";import{H as ef}from"./hls-CiLLo4G9.js";import{C as pn,M as tf}from"./mixin-D3UDm--6.js";var af=Object.create,Fh=Object.defineProperty,rf=Object.getOwnPropertyDescriptor,nf=Object.getOwnPropertyNames,sf=Object.getPrototypeOf,of=Object.prototype.hasOwnProperty,Vh=function(t,e){return function(){return t&&(e=t(t=0)),e}},He=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}},lf=function(t,e,i,a){if(e&&typeof e=="object"||typeof e=="function")for(var r=nf(e),n=0,s=r.length,o;n<s;n++)o=r[n],!of.call(t,o)&&o!==i&&Fh(t,o,{get:(function(l){return e[l]}).bind(null,o),enumerable:!(a=rf(e,o))||a.enumerable});return t},ze=function(t,e,i){return i=t!=null?af(sf(t)):{},lf(!t||!t.__esModule?Fh(i,"default",{value:t,enumerable:!0}):i,t)},gt=He(function(t,e){var i;typeof window<"u"?i=window:typeof global<"u"?i=global:typeof self<"u"?i=self:i={},e.exports=i});function ea(t,e){return e!=null&&typeof Symbol<"u"&&e[Symbol.hasInstance]?!!e[Symbol.hasInstance](t):ea(t,e)}var ta=Vh(function(){ta()});function Kh(t){"@swc/helpers - typeof";return t&&typeof Symbol<"u"&&t.constructor===Symbol?"symbol":typeof t}var qh=Vh(function(){}),Yh=He(function(t,e){var i=Array.prototype.slice;e.exports=a;function a(r,n){for(("length"in r)||(r=[r]),r=i.call(r);r.length;){var s=r.shift(),o=n(s);if(o)return o;s.childNodes&&s.childNodes.length&&(r=i.call(s.childNodes).concat(r))}}}),df=He(function(t,e){ta(),e.exports=i;function i(a,r){if(!ea(this,i))return new i(a,r);this.data=a,this.nodeValue=a,this.length=a.length,this.ownerDocument=r||null}i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),uf=He(function(t,e){ta(),e.exports=i;function i(a,r){if(!ea(this,i))return new i(a);this.data=a||"",this.length=this.data.length,this.ownerDocument=r||null}i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(a,r,n){var s=this.data,o=s.substring(0,a),l=s.substring(a+r,s.length);this.data=o+n+l,this.length=this.data.length}}),Gh=He(function(t,e){e.exports=i;function i(a){var r=this,n=a.type;a.target||(a.target=r),r.listeners||(r.listeners={});var s=r.listeners[n];if(s)return s.forEach(function(o){a.currentTarget=r,typeof o=="function"?o(a):o.handleEvent(a)});r.parentNode&&r.parentNode.dispatchEvent(a)}}),Qh=He(function(t,e){e.exports=i;function i(a,r){var n=this;n.listeners||(n.listeners={}),n.listeners[a]||(n.listeners[a]=[]),n.listeners[a].indexOf(r)===-1&&n.listeners[a].push(r)}}),Zh=He(function(t,e){e.exports=i;function i(a,r){var n=this;if(n.listeners&&n.listeners[a]){var s=n.listeners[a],o=s.indexOf(r);o!==-1&&s.splice(o,1)}}}),cf=He(function(t,e){qh(),e.exports=a;var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(h){switch(h.nodeType){case 3:return m(h.data);case 8:return"<!--"+h.data+"-->";default:return r(h)}}function r(h){var c=[],v=h.tagName;return h.namespaceURI==="http://www.w3.org/1999/xhtml"&&(v=v.toLowerCase()),c.push("<"+v+d(h)+o(h)),i.indexOf(v)>-1?c.push(" />"):(c.push(">"),h.childNodes.length?c.push.apply(c,h.childNodes.map(a)):h.textContent||h.innerText?c.push(m(h.textContent||h.innerText)):h.innerHTML&&c.push(h.innerHTML),c.push("</"+v+">")),c.join("")}function n(h,c){var v=Kh(h[c]);return c==="style"&&Object.keys(h.style).length>0?!0:h.hasOwnProperty(c)&&(v==="string"||v==="boolean"||v==="number")&&c!=="nodeName"&&c!=="className"&&c!=="tagName"&&c!=="textContent"&&c!=="innerText"&&c!=="namespaceURI"&&c!=="innerHTML"}function s(h){if(typeof h=="string")return h;var c="";return Object.keys(h).forEach(function(v){var g=h[v];v=v.replace(/[A-Z]/g,function(_){return"-"+_.toLowerCase()}),c+=v+":"+g+";"}),c}function o(h){var c=h.dataset,v=[];for(var g in c)v.push({name:"data-"+g,value:c[g]});return v.length?l(v):""}function l(h){var c=[];return h.forEach(function(v){var g=v.name,_=v.value;g==="style"&&(_=s(_)),c.push(g+'="'+p(_)+'"')}),c.length?" "+c.join(" "):""}function d(h){var c=[];for(var v in h)n(h,v)&&c.push({name:v,value:h[v]});for(var g in h._attributes)for(var _ in h._attributes[g]){var y=h._attributes[g][_],T=(y.prefix?y.prefix+":":"")+_;c.push({name:T,value:y.value})}return h.className&&c.push({name:"class",value:h.className}),c.length?l(c):""}function m(h){var c="";return typeof h=="string"?c=h:h&&(c=h.toString()),c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(h){return m(h).replace(/"/g,"&quot;")}}),jh=He(function(t,e){ta();var i=Yh(),a=Gh(),r=Qh(),n=Zh(),s=cf(),o="http://www.w3.org/1999/xhtml";e.exports=l;function l(d,m,p){if(!ea(this,l))return new l(d);var h=p===void 0?o:p||null;this.tagName=h===o?String(d).toUpperCase():d,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=m||null,this.namespaceURI=h,this._attributes={},this.tagName==="INPUT"&&(this.type="text")}l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(d){return d.parentNode&&d.parentNode.removeChild(d),this.childNodes.push(d),d.parentNode=this,d},l.prototype.replaceChild=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=this.childNodes.indexOf(m);return m.parentNode=null,this.childNodes[p]=d,d.parentNode=this,m},l.prototype.removeChild=function(d){var m=this.childNodes.indexOf(d);return this.childNodes.splice(m,1),d.parentNode=null,d},l.prototype.insertBefore=function(d,m){d.parentNode&&d.parentNode.removeChild(d);var p=m==null?-1:this.childNodes.indexOf(m);return p>-1?this.childNodes.splice(p,0,d):this.childNodes.push(d),d.parentNode=this,d},l.prototype.setAttributeNS=function(d,m,p){var h=null,c=m,v=m.indexOf(":");if(v>-1&&(h=m.substr(0,v),c=m.substr(v+1)),this.tagName==="INPUT"&&m==="type")this.type=p;else{var g=this._attributes[d]||(this._attributes[d]={});g[c]={value:p,prefix:h}}},l.prototype.getAttributeNS=function(d,m){var p=this._attributes[d],h=p&&p[m]&&p[m].value;return this.tagName==="INPUT"&&m==="type"?this.type:typeof h!="string"?null:h},l.prototype.removeAttributeNS=function(d,m){var p=this._attributes[d];p&&delete p[m]},l.prototype.hasAttributeNS=function(d,m){var p=this._attributes[d];return!!p&&m in p},l.prototype.setAttribute=function(d,m){return this.setAttributeNS(null,d,m)},l.prototype.getAttribute=function(d){return this.getAttributeNS(null,d)},l.prototype.removeAttribute=function(d){return this.removeAttributeNS(null,d)},l.prototype.hasAttribute=function(d){return this.hasAttributeNS(null,d)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(d){var m=d.split(" "),p=[];return i(this,function(h){if(h.nodeType===1){var c=h.className||"",v=c.split(" ");m.every(function(g){return v.indexOf(g)!==-1})&&p.push(h)}}),p},l.prototype.getElementsByTagName=function(d){d=d.toLowerCase();var m=[];return i(this.childNodes,function(p){p.nodeType===1&&(d==="*"||p.tagName.toLowerCase()===d)&&m.push(p)}),m},l.prototype.contains=function(d){return i(this,function(m){return d===m})||!1}}),hf=He(function(t,e){ta();var i=jh();e.exports=a;function a(r){if(!ea(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=r||null}a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(r){return String(r)}).join("")}}),mf=He(function(t,e){e.exports=i;function i(a){}i.prototype.initEvent=function(a,r,n){this.type=a,this.bubbles=r,this.cancelable=n},i.prototype.preventDefault=function(){}}),pf=He(function(t,e){ta();var i=Yh(),a=df(),r=uf(),n=jh(),s=hf(),o=mf(),l=Gh(),d=Qh(),m=Zh();e.exports=p;function p(){if(!ea(this,p))return new p;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}var h=p.prototype;h.createTextNode=function(c){return new r(c,this)},h.createElementNS=function(c,v){var g=c===null?null:String(c);return new n(v,this,g)},h.createElement=function(c){return new n(c,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(c){return new o(c)},h.createComment=function(c){return new a(c,this)},h.getElementById=function(c){c=String(c);var v=i(this.childNodes,function(g){if(String(g.id)===c)return g});return v||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=m,h.addEventListener=d,h.dispatchEvent=l}),vf=He(function(t,e){var i=pf();e.exports=new i}),zh=He(function(t,e){var i=typeof global<"u"?global:typeof window<"u"?window:{},a=vf(),r;typeof document<"u"?r=document:(r=i["__GLOBAL_DOCUMENT_CACHE@4"],r||(r=i["__GLOBAL_DOCUMENT_CACHE@4"]=a)),e.exports=r});function ff(t){if(Array.isArray(t))return t}function Ef(t,e){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],r=!0,n=!1,s,o;try{for(i=i.call(t);!(r=(s=i.next()).done)&&(a.push(s.value),!(e&&a.length===e));r=!0);}catch(l){n=!0,o=l}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw o}}return a}}function _f(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dl(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}function Xh(t,e){if(t){if(typeof t=="string")return dl(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(i);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return dl(t,e)}}function ti(t,e){return ff(t)||Ef(t,e)||Xh(t,e)||_f()}var Nr=ze(gt()),sc=ze(gt()),bf=ze(gt()),gf={now:function(){var t=bf.default.performance,e=t&&t.timing,i=e&&e.navigationStart,a=typeof i=="number"&&typeof t.now=="function"?i+t.now():Date.now();return Math.round(a)}},be=gf,Gr=function(){var t,e,i;if(typeof((t=sc.default.crypto)===null||t===void 0?void 0:t.getRandomValues)=="function"){i=new Uint8Array(32),sc.default.crypto.getRandomValues(i);for(var a=0;a<32;a++)i[a]=i[a]%16}else{i=[];for(var r=0;r<32;r++)i[r]=Math.random()*16|0}var n=0;e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(l){var d=l==="x"?i[n]:i[n]&3|8;return n++,d.toString(16)});var s=be.now(),o=s?.toString(16).substring(3);return o?e.substring(0,28)+o:e},Jh=function(){return("000000"+(Math.random()*Math.pow(36,6)<<0).toString(36)).slice(-6)},ct=function(t){if(t&&typeof t.nodeName<"u")return t.muxId||(t.muxId=Jh()),t.muxId;var e;try{e=document.querySelector(t)}catch{}return e&&!e.muxId&&(e.muxId=t),e?.muxId||t},Ws=function(t){var e;t&&typeof t.nodeName<"u"?(e=t,t=ct(e)):e=document.querySelector(t);var i=e&&e.nodeName?e.nodeName.toLowerCase():"";return[e,t,i]};function yf(t){if(Array.isArray(t))return dl(t)}function Tf(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Af(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(t){return yf(t)||Tf(t)||Xh(t)||Af()}var Hi={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4},kf=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,i,a,r,n,s,o=[console,t],l=(i=console.trace).bind.apply(i,ht(o)),d=(a=console.info).bind.apply(a,ht(o)),m=(r=console.debug).bind.apply(r,ht(o)),p=(n=console.warn).bind.apply(n,ht(o)),h=(s=console.error).bind.apply(s,ht(o)),c=e;return{trace:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(c>Hi.TRACE))return l.apply(void 0,ht(g))},debug:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(c>Hi.DEBUG))return m.apply(void 0,ht(g))},info:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(c>Hi.INFO))return d.apply(void 0,ht(g))},warn:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(c>Hi.WARN))return p.apply(void 0,ht(g))},error:function(){for(var v=arguments.length,g=new Array(v),_=0;_<v;_++)g[_]=arguments[_];if(!(c>Hi.ERROR))return h.apply(void 0,ht(g))},get level(){return c},set level(v){v!==this.level&&(c=v??e)}}},ee=kf("[mux]"),Uo=ze(gt());function ul(){var t=Uo.default.doNotTrack||Uo.default.navigator&&Uo.default.navigator.doNotTrack;return t==="1"}function N(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}ta();function Ie(t,e){if(!ea(t,e))throw new TypeError("Cannot call a class as a function")}function Sf(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Kt(t,e,i){return e&&Sf(t.prototype,e),t}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Fa(t){return Fa=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Fa(t)}function wf(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&(t=Fa(t),t!==null););return t}function Mn(t,e,i){return typeof Reflect<"u"&&Reflect.get?Mn=Reflect.get:Mn=function(a,r,n){var s=wf(a,r);if(s){var o=Object.getOwnPropertyDescriptor(s,r);return o.get?o.get.call(n||a):o.value}},Mn(t,e,i||t)}function cl(t,e){return cl=Object.setPrototypeOf||function(i,a){return i.__proto__=a,i},cl(t,e)}function If(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&cl(t,e)}function Rf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}qh();function Cf(t,e){return e&&(Kh(e)==="object"||typeof e=="function")?e:N(t)}function Df(t){var e=Rf();return function(){var i=Fa(t),a;if(e){var r=Fa(this).constructor;a=Reflect.construct(i,arguments,r)}else a=i.apply(this,arguments);return Cf(this,a)}}var Et=function(t){return Qr(t)[0]},Qr=function(t){if(typeof t!="string"||t==="")return["localhost"];var e=/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,i=t.match(e)||[],a=i[4],r;return a&&(r=(a.match(/[^\.]+\.[^\.]+$/)||[])[0]),[a,r]},Ho=ze(gt()),Lf={exists:function(){var t=Ho.default.performance,e=t&&t.timing;return e!==void 0},domContentLoadedEventEnd:function(){var t=Ho.default.performance,e=t&&t.timing;return e&&e.domContentLoadedEventEnd},navigationStart:function(){var t=Ho.default.performance,e=t&&t.timing;return e&&e.navigationStart}},Fs=Lf;function _e(t,e,i){i=i===void 0?1:i,t[e]=t[e]||0,t[e]+=i}function Vs(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{},a=Object.keys(i);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable}))),a.forEach(function(r){w(t,r,i[r])})}return t}function Mf(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);i.push.apply(i,a)}return i}function kd(t,e){return e=e??{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Mf(Object(e)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}),t}var xf=["x-cdn","content-type"],em=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],Of=xf.concat(em);function Sd(t){t=t||"";var e={},i=t.trim().split(/[\r\n]+/);return i.forEach(function(a){if(a){var r=a.split(": "),n=r.shift();n&&(Of.indexOf(n.toLowerCase())>=0||n.toLowerCase().indexOf("x-litix-")===0)&&(e[n]=r.join(": "))}}),e}function Ks(t){if(t){var e=em.find(function(i){return t[i]!==void 0});return e?t[e]:void 0}}var Nf=function(t){var e={};for(var i in t){var a=t[i],r=a["DATA-ID"].search("io.litix.data.");if(r!==-1){var n=a["DATA-ID"].replace("io.litix.data.","");e[n]=a.VALUE}}return e},tm=Nf,vn=function(t){if(!t)return{};var e=Fs.navigationStart(),i=t.loading,a=i?i.start:t.trequest,r=i?i.first:t.tfirst,n=i?i.end:t.tload;return{bytesLoaded:t.total,requestStart:Math.round(e+a),responseStart:Math.round(e+r),responseEnd:Math.round(e+n)}},tr=function(t){if(!(!t||typeof t.getAllResponseHeaders!="function"))return Sd(t.getAllResponseHeaders())},Pf=function(t,e,i){var a=arguments.length>4?arguments[4]:void 0,r=t.log,n=t.utils.secondsToMs,s=function(_){var y=parseInt(a.version),T;return y===1&&_.programDateTime!==null&&(T=_.programDateTime),y===0&&_.pdt!==null&&(T=_.pdt),T};if(!Fs.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(_,y){return t.emit(e,_,y)},l=function(_,y){var T=y.levels,E=y.audioTracks,k=y.url,D=y.stats,O=y.networkDetails,H=y.sessionData,Y={},X={};T.forEach(function(he,Oe){Y[Oe]={width:he.width,height:he.height,bitrate:he.bitrate,attrs:he.attrs}}),E.forEach(function(he,Oe){X[Oe]={name:he.name,language:he.lang,bitrate:he.bitrate}});var V=vn(D),P=V.bytesLoaded,Le=V.requestStart,Be=V.responseStart,We=V.responseEnd;o("requestcompleted",kd(Vs({},tm(H)),{request_event_type:_,request_bytes_loaded:P,request_start:Le,request_response_start:Be,request_response_end:We,request_type:"manifest",request_hostname:Et(k),request_response_headers:tr(O),request_rendition_lists:{media:Y,audio:X,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(_,y){var T=y.details,E=y.level,k=y.networkDetails,D=y.stats,O=vn(D),H=O.bytesLoaded,Y=O.requestStart,X=O.responseStart,V=O.responseEnd,P=T.fragments[T.fragments.length-1],Le=s(P)+n(P.duration);o("requestcompleted",{request_event_type:_,request_bytes_loaded:H,request_start:Y,request_response_start:X,request_response_end:V,request_current_level:E,request_type:"manifest",request_hostname:Et(T.url),request_response_headers:tr(k),video_holdback:T.holdBack&&n(T.holdBack),video_part_holdback:T.partHoldBack&&n(T.partHoldBack),video_part_target_duration:T.partTarget&&n(T.partTarget),video_target_duration:T.targetduration&&n(T.targetduration),video_source_is_live:T.live,player_manifest_newest_program_time:isNaN(Le)?void 0:Le})};i.on(a.Events.LEVEL_LOADED,d);var m=function(_,y){var T=y.details,E=y.networkDetails,k=y.stats,D=vn(k),O=D.bytesLoaded,H=D.requestStart,Y=D.responseStart,X=D.responseEnd;o("requestcompleted",{request_event_type:_,request_bytes_loaded:O,request_start:H,request_response_start:Y,request_response_end:X,request_type:"manifest",request_hostname:Et(T.url),request_response_headers:tr(E)})};i.on(a.Events.AUDIO_TRACK_LOADED,m);var p=function(_,y){var T=y.stats,E=y.networkDetails,k=y.frag;T=T||k.stats;var D=vn(T),O=D.bytesLoaded,H=D.requestStart,Y=D.responseStart,X=D.responseEnd,V=E?tr(E):void 0,P={request_event_type:_,request_bytes_loaded:O,request_start:H,request_response_start:Y,request_response_end:X,request_hostname:E?Et(E.responseURL):void 0,request_id:V?Ks(V):void 0,request_response_headers:V,request_media_duration:k.duration,request_url:E?.responseURL};k.type==="main"?(P.request_type="media",P.request_current_level=k.level,P.request_video_width=(i.levels[k.level]||{}).width,P.request_video_height=(i.levels[k.level]||{}).height,P.request_labeled_bitrate=(i.levels[k.level]||{}).bitrate):P.request_type=k.type,o("requestcompleted",P)};i.on(a.Events.FRAG_LOADED,p);var h=function(_,y){var T=y.frag,E=T.start,k=s(T),D={currentFragmentPDT:k,currentFragmentStart:n(E)};o("fragmentchange",D)};i.on(a.Events.FRAG_CHANGED,h);var c=function(_,y){var T=y.type,E=y.details,k=y.response,D=y.fatal,O=y.frag,H=y.networkDetails,Y=O?.url||y.url||"",X=H?tr(H):void 0;if((E===a.ErrorDetails.MANIFEST_LOAD_ERROR||E===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT||E===a.ErrorDetails.LEVEL_LOAD_ERROR||E===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:E,request_url:Y,request_hostname:Et(Y),request_id:X?Ks(X):void 0,request_type:E===a.ErrorDetails.FRAG_LOAD_ERROR||E===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":E===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||E===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":E===a.ErrorDetails.SUBTITLE_LOAD_ERROR||E===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":E===a.ErrorDetails.KEY_LOAD_ERROR||E===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:k?.code,request_error_text:k?.text}),D){var V,P="".concat(Y?"url: ".concat(Y,`
`):"")+"".concat(k&&(k.code||k.text)?"response: ".concat(k.code,", ").concat(k.text,`
`):"")+"".concat(y.reason?"failure reason: ".concat(y.reason,`
`):"")+"".concat(y.level?"level: ".concat(y.level,`
`):"")+"".concat(y.parent?"parent stream controller: ".concat(y.parent,`
`):"")+"".concat(y.buffer?"buffer length: ".concat(y.buffer,`
`):"")+"".concat(y.error?"error: ".concat(y.error,`
`):"")+"".concat(y.event?"event: ".concat(y.event,`
`):"")+"".concat(y.err?"error message: ".concat((V=y.err)===null||V===void 0?void 0:V.message,`
`):"");o("error",{player_error_code:T,player_error_message:E,player_error_context:P})}};i.on(a.Events.ERROR,c);var v=function(_,y){var T=y.frag,E=T&&T._url||"";o("requestcanceled",{request_event_type:_,request_url:E,request_type:"media",request_hostname:Et(E)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v);var g=function(_,y){var T=y.level,E=i.levels[T];if(E&&E.attrs&&E.attrs.BANDWIDTH){var k=E.attrs.BANDWIDTH,D,O=parseFloat(E.attrs["FRAME-RATE"]);isNaN(O)||(D=O),k?o("renditionchange",{video_source_fps:D,video_source_bitrate:k,video_source_width:E.width,video_source_height:E.height,video_source_rendition_name:E.name,video_source_codec:E?.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,g),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,m),i.off(a.Events.FRAG_LOADED,p),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,c),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,v),i.off(a.Events.LEVEL_SWITCHED,g),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},$f=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},oc=function(t,e){if(!t||!t.requestEndDate)return{};var i=Et(t.url),a=t.url,r=t.bytesLoaded,n=new Date(t.requestStartDate).getTime(),s=new Date(t.firstByteDate).getTime(),o=new Date(t.requestEndDate).getTime(),l=isNaN(t.duration)?0:t.duration,d=typeof e.getMetricsFor=="function"?e.getMetricsFor(t.mediaType).HttpList:e.getDashMetrics().getHttpRequests(t.mediaType),m;d.length>0&&(m=Sd(d[d.length-1]._responseHeaders||""));var p=m?Ks(m):void 0;return{requestStart:n,requestResponseStart:s,requestResponseEnd:o,requestBytesLoaded:r,requestResponseHeaders:m,requestMediaDuration:l,requestHostname:i,requestUrl:a,requestId:p}},Uf=function(t,e){var i=e.getQualityFor(t),a=e.getCurrentTrackFor(t).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},Hf=function(t){var e;return(e=t.match(/.*codecs\*?="(.*)"/))===null||e===void 0?void 0:e[1]},Bf=function(t){try{var e,i,a=(i=t.getVersion)===null||i===void 0||(e=i.call(t))===null||e===void 0?void 0:e.split(".").map(function(r){return parseInt(r)})[0];return a}catch{return!1}},Wf=function(t,e,i){var a=t.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=Bf(i),n=function(T,E){return t.emit(e,T,E)},s=function(T){var E=T.type,k=T.data,D=(k||{}).url;n("requestcompleted",{request_event_type:E,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:Et(D),request_url:D})};i.on("manifestLoaded",s);var o={},l=function(T){if(typeof T.getRequests!="function")return null;var E=T.getRequests({state:"executed"});return E.length===0?null:E[E.length-1]},d=function(T){var E=T.type,k=T.fragmentModel,D=T.chunk,O=l(k);m({type:E,request:O,chunk:D})},m=function(T){var E=T.type,k=T.chunk,D=T.request,O=(k||{}).mediaInfo,H=O||{},Y=H.type,X=H.bitrateList;X=X||[];var V={};X.forEach(function(Fe,Ae){V[Ae]={},V[Ae].width=Fe.width,V[Ae].height=Fe.height,V[Ae].bitrate=Fe.bandwidth,V[Ae].attrs={}}),Y==="video"?o.video=V:Y==="audio"?o.audio=V:o.media=V;var P=oc(D,i),Le=P.requestStart,Be=P.requestResponseStart,We=P.requestResponseEnd,he=P.requestResponseHeaders,Oe=P.requestMediaDuration,yt=P.requestHostname,Ne=P.requestUrl,lt=P.requestId;n("requestcompleted",{request_event_type:E,request_start:Le,request_response_start:Be,request_response_end:We,request_bytes_loaded:-1,request_type:Y+"_init",request_response_headers:he,request_hostname:yt,request_id:lt,request_url:Ne,request_media_duration:Oe,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",m):i.on("initFragmentLoaded",d);var p=function(T){var E=T.type,k=T.fragmentModel,D=T.chunk,O=l(k);h({type:E,request:O,chunk:D})},h=function(T){var E=T.type,k=T.chunk,D=T.request,O=k||{},H=O.mediaInfo,Y=O.start,X=H||{},V=X.type,P=oc(D,i),Le=P.requestStart,Be=P.requestResponseStart,We=P.requestResponseEnd,he=P.requestBytesLoaded,Oe=P.requestResponseHeaders,yt=P.requestMediaDuration,Ne=P.requestHostname,lt=P.requestUrl,Fe=P.requestId,Ae=Uf(V,i),Ve=Ae.currentLevel,Je=Ae.renditionWidth,ia=Ae.renditionHeight,mn=Ae.renditionBitrate;n("requestcompleted",{request_event_type:E,request_start:Le,request_response_start:Be,request_response_end:We,request_bytes_loaded:he,request_type:V,request_response_headers:Oe,request_hostname:Ne,request_id:Fe,request_url:lt,request_media_start_time:Y,request_media_duration:yt,request_current_level:Ve,request_labeled_bitrate:mn,request_video_width:Je,request_video_height:ia})};r>=4?i.on("mediaFragmentLoaded",h):i.on("mediaFragmentLoaded",p);var c={video:void 0,audio:void 0,totalBitrate:void 0},v=function(){if(c.video&&typeof c.video.bitrate=="number"){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var T=c.video.bitrate;if(c.audio&&typeof c.audio.bitrate=="number"&&(T+=c.audio.bitrate),T!==c.totalBitrate)return c.totalBitrate=T,{video_source_bitrate:T,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:Hf(c.video.codec)}}},g=function(T,E,k){if(typeof T.newQuality!="number"){a.warn("missing evt.newQuality in qualityChangeRendered event",T);return}var D=T.mediaType;if(D==="audio"||D==="video"){var O=i.getBitrateInfoListFor(D).find(function(Y){var X=Y.qualityIndex;return X===T.newQuality});if(!(O&&typeof O.bitrate=="number")){a.warn("missing bitrate info for ".concat(D));return}c[D]=kd(Vs({},O),{codec:i.getCurrentTrackFor(D).codec});var H=v();H&&n("renditionchange",H)}};i.on("qualityChangeRendered",g);var _=function(T){var E=T.request,k=T.mediaType;E=E||{},n("requestcanceled",{request_event_type:E.type+"_"+E.action,request_url:E.url,request_type:k,request_hostname:Et(E.url)})};i.on("fragmentLoadingAbandoned",_);var y=function(T){var E=T.error,k,D,O=(E==null||(k=E.data)===null||k===void 0?void 0:k.request)||{},H=(E==null||(D=E.data)===null||D===void 0?void 0:D.response)||{};E?.code===27&&n("requestfailed",{request_error:O.type+"_"+O.action,request_url:O.url,request_hostname:Et(O.url),request_type:O.mediaType,request_error_code:H.status,request_error_text:H.statusText});var Y="".concat(O!=null&&O.url?"url: ".concat(O.url,`
`):"")+"".concat(H!=null&&H.status||H!=null&&H.statusText?"response: ".concat(H?.status,", ").concat(H?.statusText,`
`):"");n("error",{player_error_code:E?.code,player_error_message:E?.message,player_error_context:Y})};i.on("error",y),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",m),i.off("mediaFragmentLoaded",h),i.off("qualityChangeRendered",g),i.off("error",y),i.off("fragmentLoadingAbandoned",_),delete i._stopMuxMonitor}},Ff=function(t){t&&typeof t._stopMuxMonitor=="function"&&t._stopMuxMonitor()},lc=0,Vf=(function(){function t(){Ie(this,t),w(this,"_listeners",void 0)}return Kt(t,[{key:"on",value:function(e,i,a){return i._eventEmitterGuid=i._eventEmitterGuid||++lc,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],a&&(i=i.bind(a)),this._listeners[e].push(i),i}},{key:"off",value:function(e,i){var a=this._listeners&&this._listeners[e];a&&a.forEach(function(r,n){r._eventEmitterGuid===i._eventEmitterGuid&&a.splice(n,1)})}},{key:"one",value:function(e,i,a){var r=this;i._eventEmitterGuid=i._eventEmitterGuid||++lc;var n=function(){r.off(e,n),i.apply(a||this,arguments)};n._eventEmitterGuid=i._eventEmitterGuid,this.on(e,n)}},{key:"emit",value:function(e,i){var a=this;if(this._listeners){i=i||{};var r=this._listeners["before*"]||[],n=this._listeners[e]||[],s=this._listeners["after"+e]||[],o=function(l,d){l=l.slice(),l.forEach(function(m){m.call(a,{type:e},d)})};o(r,i),o(n,i),o(s,i)}}}]),t})(),Kf=Vf,Bo=ze(gt()),qf=(function(){function t(e){var i=this;Ie(this,t),w(this,"_playbackHeartbeatInterval",void 0),w(this,"_playheadShouldBeProgressing",void 0),w(this,"pm",void 0),this.pm=e,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,e.on("playing",function(){i._playheadShouldBeProgressing=!0}),e.on("play",this._startPlaybackHeartbeatInterval.bind(this)),e.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),e.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),e.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),e.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),e.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),e.on("seeked",function(){e.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),e.on("timeupdate",function(){i._playbackHeartbeatInterval!==null&&e.emit("playbackheartbeat")}),e.on("devicesleep",function(a,r){i._playbackHeartbeatInterval!==null&&(Bo.default.clearInterval(i._playbackHeartbeatInterval),e.emit("playbackheartbeatend",{viewer_time:r.viewer_time}),i._playbackHeartbeatInterval=null)})}return Kt(t,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;this._playbackHeartbeatInterval===null&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=Bo.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,this._playbackHeartbeatInterval!==null&&(Bo.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),t})(),Yf=qf,Gf=function t(e){var i=this;Ie(this,t),w(this,"viewErrored",void 0),e.on("viewinit",function(){i.viewErrored=!1}),e.on("error",function(a,r){try{var n=e.errorTranslator({player_error_code:r.player_error_code,player_error_message:r.player_error_message,player_error_context:r.player_error_context,player_error_severity:r.player_error_severity,player_error_business_exception:r.player_error_business_exception});n&&(e.data.player_error_code=n.player_error_code||r.player_error_code,e.data.player_error_message=n.player_error_message||r.player_error_message,e.data.player_error_context=n.player_error_context||r.player_error_context,e.data.player_error_severity=n.player_error_severity||r.player_error_severity,e.data.player_error_business_exception=n.player_error_business_exception||r.player_error_business_exception,i.viewErrored=!0)}catch(s){e.mux.log.warn("Exception in error translator callback.",s),i.viewErrored=!0}}),e.on("aftererror",function(){var a,r,n,s,o;(a=e.data)===null||a===void 0||delete a.player_error_code,(r=e.data)===null||r===void 0||delete r.player_error_message,(n=e.data)===null||n===void 0||delete n.player_error_context,(s=e.data)===null||s===void 0||delete s.player_error_severity,(o=e.data)===null||o===void 0||delete o.player_error_business_exception})},Qf=Gf,Zf=(function(){function t(e){Ie(this,t),w(this,"_watchTimeTrackerLastCheckedTime",void 0),w(this,"pm",void 0),this.pm=e,this._watchTimeTrackerLastCheckedTime=null,e.on("playbackheartbeat",this._updateWatchTime.bind(this)),e.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return Kt(t,[{key:"_updateWatchTime",value:function(e,i){var a=i.viewer_time;this._watchTimeTrackerLastCheckedTime===null&&(this._watchTimeTrackerLastCheckedTime=a),_e(this.pm.data,"view_watch_time",a-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=a}},{key:"_clearWatchTimeState",value:function(e,i){this._updateWatchTime(e,i),this._watchTimeTrackerLastCheckedTime=null}}]),t})(),jf=Zf,zf=(function(){function t(e){var i=this;Ie(this,t),w(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),w(this,"_lastTime",void 0),w(this,"_isAdPlaying",void 0),w(this,"_callbackUpdatePlaybackTime",void 0),w(this,"pm",void 0),this.pm=e,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=be.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);e.on("playing",a),e.on("adplaying",a),e.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);e.on("playbackheartbeatend",r),e.on("seeking",r),e.on("adplaying",function(){i._isAdPlaying=!0}),e.on("adended",function(){i._isAdPlaying=!1}),e.on("adpause",function(){i._isAdPlaying=!1}),e.on("adbreakstart",function(){i._isAdPlaying=!1}),e.on("adbreakend",function(){i._isAdPlaying=!1}),e.on("adplay",function(){i._isAdPlaying=!1}),e.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=be.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return Kt(t,[{key:"_startPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime===null&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,i=be.now(),a=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?a=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(a=i-this._lastTime),a>0&&a<=1e3&&_e(this.pm.data,"view_content_playback_time",a),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=i}}]),t})(),Xf=zf,Jf=(function(){function t(e){Ie(this,t),w(this,"pm",void 0),this.pm=e;var i=this._updatePlayheadTime.bind(this);e.on("playbackheartbeat",i),e.on("playbackheartbeatend",i),e.on("timeupdate",i),e.on("destroy",function(){e.off("timeupdate",i)})}return Kt(t,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=typeof this.pm.data.view_max_playhead_position>"u"?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,i){var a=this,r=function(){a.pm.currentFragmentPDT&&a.pm.currentFragmentStart&&(a.pm.data.player_program_time=a.pm.currentFragmentPDT+a.pm.data.player_playhead_time-a.pm.currentFragmentStart)};if(i&&i.player_playhead_time)this.pm.data.player_playhead_time=i.player_playhead_time,r(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var n=this.pm.getPlayheadTime();typeof n<"u"&&(this.pm.data.player_playhead_time=n,r(),this._updateMaxPlayheadPosition())}}}]),t})(),eE=Jf,dc=300*1e3,tE=function t(e){if(Ie(this,t),!e.disableRebufferTracking){var i,a=function(n,s){r(s),i=void 0},r=function(n){if(i){var s=n.viewer_time-i;_e(e.data,"view_rebuffer_duration",s),i=n.viewer_time,e.data.view_rebuffer_duration>dc&&(e.emit("viewend"),e.send("viewend"),e.mux.log.warn("Ending view after rebuffering for longer than ".concat(dc,"ms, future events will be ignored unless a programchange or videochange occurs.")))}e.data.view_watch_time>=0&&e.data.view_rebuffer_count>0&&(e.data.view_rebuffer_frequency=e.data.view_rebuffer_count/e.data.view_watch_time,e.data.view_rebuffer_percentage=e.data.view_rebuffer_duration/e.data.view_watch_time)};e.on("playbackheartbeat",function(n,s){return r(s)}),e.on("rebufferstart",function(n,s){i||(_e(e.data,"view_rebuffer_count",1),i=s.viewer_time,e.one("rebufferend",a))}),e.on("viewinit",function(){i=void 0,e.off("rebufferend",a)})}},iE=tE,aE=(function(){function t(e){var i=this;Ie(this,t),w(this,"_lastCheckedTime",void 0),w(this,"_lastPlayheadTime",void 0),w(this,"_lastPlayheadTimeUpdatedTime",void 0),w(this,"_rebuffering",void 0),w(this,"pm",void 0),this.pm=e,!(e.disableRebufferTracking||e.disablePlayheadRebufferTracking)&&(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,e.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),e.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),e.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:be.now()})}))}return Kt(t,[{key:"_checkIfRebuffering",value:function(e,i){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,i);return}if(this._lastCheckedTime===null){this._prepareRebufferTrackerState(i.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,i,!0);return}var a=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.sustainedRebufferThreshold=="number"&&a>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=i.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:i.viewer_time});else{if(this._lastCheckedTime===null)return;var r=this.pm.data.player_playhead_time-this._lastPlayheadTime,n=i.viewer_time-this._lastPlayheadTimeUpdatedTime;typeof this.pm.minimumRebufferDuration=="number"&&r>0&&n-r>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+n-r}))}a?this._prepareRebufferTrackerState(i.viewer_time):this._clearRebufferTrackerState()}}]),t})(),rE=aE,nE=(function(){function t(e){var i=this;Ie(this,t),w(this,"NAVIGATION_START",void 0),w(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){var a=e.data,r=a.view_id;if(!a.view_program_changed){var n=function(s,o){var l=o.viewer_time;(s.type==="playing"&&typeof e.data.view_time_to_first_frame>"u"||s.type==="adplaying"&&(typeof e.data.view_time_to_first_frame>"u"||i._inPrerollPosition()))&&i.calculateTimeToFirstFrame(l||be.now(),r)};e.one("playing",n),e.one("adplaying",n),e.one("viewend",function(){e.off("playing",n),e.off("adplaying",n)})}})}return Kt(t,[{key:"_inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,i){i===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),t})(),sE=nE,oE=function t(e){var i=this;Ie(this,t),w(this,"_lastPlayerHeight",void 0),w(this,"_lastPlayerWidth",void 0),w(this,"_lastPlayheadPosition",void 0),w(this,"_lastSourceHeight",void 0),w(this,"_lastSourceWidth",void 0),e.on("viewinit",function(){i._lastPlayheadPosition=-1});var a=["pause","rebufferstart","seeking","error","adbreakstart","hb","renditionchange","orientationchange","viewend"],r=["playing","hb","renditionchange","orientationchange"];a.forEach(function(n){e.on(n,function(){if(i._lastPlayheadPosition>=0&&e.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var s=e.data.player_playhead_time-i._lastPlayheadPosition;if(s<0){i._lastPlayheadPosition=-1;return}var o=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),l=Math.max(0,o-1),d=Math.max(0,1-o);e.data.view_max_upscale_percentage=Math.max(e.data.view_max_upscale_percentage||0,l),e.data.view_max_downscale_percentage=Math.max(e.data.view_max_downscale_percentage||0,d),_e(e.data,"view_total_content_playback_time",s),_e(e.data,"view_total_upscaling",l*s),_e(e.data,"view_total_downscaling",d*s)}i._lastPlayheadPosition=-1})}),r.forEach(function(n){e.on(n,function(){i._lastPlayheadPosition=e.data.player_playhead_time,i._lastPlayerWidth=e.data.player_width,i._lastPlayerHeight=e.data.player_height,i._lastSourceWidth=e.data.video_source_width,i._lastSourceHeight=e.data.video_source_height})})},lE=oE,dE=2e3,uE=function t(e){var i=this;Ie(this,t),w(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var n=be.now(),s=(e.data.viewer_time||n)-(a||n);_e(e.data,"view_seek_duration",s),e.data.view_max_seek_time=Math.max(e.data.view_max_seek_time||0,s),i.isSeeking=!1,a=-1};e.on("seeking",function(n,s){if(Object.assign(e.data,s),i.isSeeking&&s.viewer_time-a<=dE){a=s.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=s.viewer_time,_e(e.data,"view_seek_count",1),e.send("seeking")}),e.on("seeked",function(){r()}),e.on("viewend",function(){i.isSeeking&&(r(),e.send("seeked")),i.isSeeking=!1,a=-1})},cE=uE,uc=function(t,e){t.push(e),t.sort(function(i,a){return i.viewer_time-a.viewer_time})},hE=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],mE=(function(){function t(e){var i=this;Ie(this,t),w(this,"_adHasPlayed",void 0),w(this,"_adRequests",void 0),w(this,"_adResponses",void 0),w(this,"_currentAdRequestNumber",void 0),w(this,"_currentAdResponseNumber",void 0),w(this,"_prerollPlayTime",void 0),w(this,"_wouldBeNewAdPlay",void 0),w(this,"isAdBreak",void 0),w(this,"pm",void 0),this.pm=e,e.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),hE.forEach(function(r){return e.on(r,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};e.on("adbreakstart",function(){i.isAdBreak=!0}),e.on("play",a),e.on("playing",a),e.on("viewend",a),e.on("adrequest",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},n),uc(i._adRequests,n),_e(e.data,"view_ad_request_count"),i.inPrerollPosition()&&(e.data.view_preroll_requested=!0,i._adHasPlayed||_e(e.data,"view_preroll_request_count"))}),e.on("adresponse",function(r,n){n=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},n),uc(i._adResponses,n);var s=i.findAdRequest(n.ad_request_id);s&&_e(e.data,"view_ad_request_time",Math.max(0,n.viewer_time-s.viewer_time))}),e.on("adplay",function(r,n){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,_e(e.data,"view_ad_played_count")),i.inPrerollPosition()&&!e.data.view_preroll_played&&(e.data.view_preroll_played=!0,i._adRequests.length>0&&(e.data.view_preroll_request_time=Math.max(0,n.viewer_time-i._adRequests[0].viewer_time)),e.data.view_start&&(e.data.view_startup_preroll_request_time=Math.max(0,n.viewer_time-e.data.view_start)),i._prerollPlayTime=n.viewer_time)}),e.on("adplaying",function(r,n){i.inPrerollPosition()&&typeof e.data.view_preroll_load_time>"u"&&typeof i._prerollPlayTime<"u"&&(e.data.view_preroll_load_time=n.viewer_time-i._prerollPlayTime,e.data.view_startup_preroll_load_time=n.viewer_time-i._prerollPlayTime)}),e.on("adclicked",function(r,n){i._wouldBeNewAdPlay||_e(e.data,"view_ad_clicked_count")}),e.on("adskipped",function(r,n){i._wouldBeNewAdPlay||_e(e.data,"view_ad_skipped_count")}),e.on("adended",function(){i._wouldBeNewAdPlay=!0}),e.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return Kt(t,[{key:"inPrerollPosition",value:function(){return typeof this.pm.data.view_content_playback_time>"u"||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var i=0;i<this._adRequests.length;i++)if(this._adRequests[i].ad_request_id===e)return this._adRequests[i]}},{key:"_updateAdData",value:function(e,i){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&i.ad_tag_url){var a=ti(Qr(i.ad_tag_url),2),r=a[0],n=a[1];this.pm.data.view_preroll_ad_tag_domain=n,this.pm.data.view_preroll_ad_tag_hostname=r}if(!this.pm.data.view_preroll_ad_asset_hostname&&i.ad_asset_url){var s=ti(Qr(i.ad_asset_url),2),o=s[0],l=s[1];this.pm.data.view_preroll_ad_asset_domain=l,this.pm.data.view_preroll_ad_asset_hostname=o}}this.pm.data.ad_asset_url=i?.ad_asset_url,this.pm.data.ad_tag_url=i?.ad_tag_url,this.pm.data.ad_creative_id=i?.ad_creative_id,this.pm.data.ad_id=i?.ad_id,this.pm.data.ad_universal_id=i?.ad_universal_id}}]),t})(),pE=mE,cc=ze(gt()),vE=function t(e){Ie(this,t);var i,a,r=function(){e.disableRebufferTracking||(_e(e.data,"view_waiting_rebuffer_count",1),i=be.now(),a=cc.default.setInterval(function(){if(i){var d=be.now();_e(e.data,"view_waiting_rebuffer_duration",d-i),i=d}},250))},n=function(){e.disableRebufferTracking||i&&(_e(e.data,"view_waiting_rebuffer_duration",be.now()-i),i=!1,cc.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};e.on("waiting",function(){s&&r()}),e.on("playing",function(){n(),o()}),e.on("pause",l),e.on("seeking",l)},fE=vE,EE=function t(e){var i=this;Ie(this,t),w(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=be.now(),e.on("before*",r)},r=function(n){var s=be.now(),o=i.lastWallClockTime;i.lastWallClockTime=s,s-o>3e4&&(e.emit("devicesleep",{viewer_time:o}),Object.assign(e.data,{viewer_time:o}),e.send("devicesleep"),e.emit("devicewake",{viewer_time:s}),Object.assign(e.data,{viewer_time:s}),e.send("devicewake"))};e.one("playbackheartbeat",a),e.on("playbackheartbeatend",function(){e.off("before*",r),e.one("playbackheartbeat",a)})},_E=EE,Wo=ze(gt()),im=(function(t){return t()})(function(){var t=function(){for(var i=0,a={};i<arguments.length;i++){var r=arguments[i];for(var n in r)a[n]=r[n]}return a};function e(i){function a(r,n,s){var o;if(typeof document<"u"){if(arguments.length>1){if(s=t({path:"/"},a.defaults,s),typeof s.expires=="number"){var l=new Date;l.setMilliseconds(l.getMilliseconds()+s.expires*864e5),s.expires=l}try{o=JSON.stringify(n),/^[\{\[]/.test(o)&&(n=o)}catch{}return i.write?n=i.write(n,r):n=encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),r=encodeURIComponent(String(r)),r=r.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),r=r.replace(/[\(\)]/g,escape),document.cookie=[r,"=",n,s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}r||(o={});for(var d=document.cookie?document.cookie.split("; "):[],m=/(%[0-9A-Z]{2})+/g,p=0;p<d.length;p++){var h=d[p].split("="),c=h.slice(1).join("=");c.charAt(0)==='"'&&(c=c.slice(1,-1));try{var v=h[0].replace(m,decodeURIComponent);if(c=i.read?i.read(c,v):i(c,v)||c.replace(m,decodeURIComponent),this.json)try{c=JSON.parse(c)}catch{}if(r===v){o=c;break}r||(o[v]=c)}catch{}}return o}}return a.set=a,a.get=function(r){return a.call(a,r)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(r,n){a(r,"",t(n,{expires:-1}))},a.withConverter=e,a}return e(function(){})}),am="muxData",bE=function(t){return Object.entries(t).map(function(e){var i=ti(e,2),a=i[0],r=i[1];return"".concat(a,"=").concat(r)}).join("&")},gE=function(t){return t.split("&").reduce(function(e,i){var a=ti(i.split("="),2),r=a[0],n=a[1],s=+n,o=n&&s==n?s:n;return e[r]=o,e},{})},rm=function(){var t;try{t=gE(im.get(am)||"")}catch{t={}}return t},nm=function(t){try{im.set(am,bE(t),{expires:365})}catch{}},yE=function(){var t=rm();return t.mux_viewer_id=t.mux_viewer_id||Gr(),t.msn=t.msn||Math.random(),nm(t),{mux_viewer_id:t.mux_viewer_id,mux_sample_number:t.msn}},TE=function(){var t=rm(),e=be.now();return t.session_start&&(t.sst=t.session_start,delete t.session_start),t.session_id&&(t.sid=t.session_id,delete t.session_id),t.session_expires&&(t.sex=t.session_expires,delete t.session_expires),(!t.sex||t.sex<e)&&(t.sid=Gr(),t.sst=e),t.sex=e+1500*1e3,nm(t),{session_id:t.sid,session_start:t.sst,session_expires:t.sex}};function AE(t,e){var i=e.beaconCollectionDomain,a=e.beaconDomain;if(i)return"https://"+i;t=t||"inferred";var r=a||"litix.io";return t.match(/^[a-z0-9]+$/)?"https://"+t+"."+r:"https://img.litix.io/a.gif"}var kE=ze(gt()),sm=function(){var t;switch(om()){case"cellular":t="cellular";break;case"ethernet":t="wired";break;case"wifi":t="wifi";break;case void 0:break;default:t="other"}return t},om=function(){var t=kE.default.navigator,e=t&&(t.connection||t.mozConnection||t.webkitConnection);return e&&e.type};sm.getConnectionFromAPI=om;var SE=sm,wE={a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"},IE=lm(wE),RE={ad:"ad",af:"affiliate",ag:"aggregate",ap:"api",al:"application",ao:"audio",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",bn:"brand",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ci:"client",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cq:"creator",cr:"creative",cs:"captions",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",dy:"dynamic",eb:"enabled",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",or:"origin",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pp:"pip",pr:"preload",ps:"position",pt:"part",py:"property",px:"pop",pz:"plan",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rg:"range",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sh:"shift",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",ss:"status",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"},hc=lm(RE);function lm(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[t[i]]=i);return e}function hl(t){var e={},i={};return Object.keys(t).forEach(function(a){var r=!1;if(t.hasOwnProperty(a)&&t[a]!==void 0){var n=a.split("_"),s=n[0],o=IE[s];o||(ee.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(l){l==="url"&&(r=!0),hc[l]?o+=hc[l]:Number.isInteger(Number(l))?o+=l:(ee.info("Data key word `"+l+"` not expected in "+a),o+="_"+l+"_")}),r?i[o]=t[a]:e[o]=t[a]}}),Object.assign(e,i)}var Wi=ze(gt()),CE=ze(zh()),DE={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},LE=56*1024,ME=["hb","requestcompleted","requestfailed","requestcanceled"],xE="https://img.litix.io",ai=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this._beaconUrl=t||xE,this._eventQueue=[],this._postInFlight=!1,this._resendAfterPost=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},DE,e)};ai.prototype.queueEvent=function(t,e){var i=Object.assign({},e);return this._eventQueue.length<=this._options.maxQueueLength||t==="eventrateexceeded"?(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength):!1};ai.prototype.flushEvents=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(t&&this._eventQueue.length===1){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()};ai.prototype.destroy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;this.destroyed=!0,t?this._clearBeaconQueue():this.flushEvents(),Wi.default.clearTimeout(this._sendTimeout)};ai.prototype._clearBeaconQueue=function(){var t=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,e=this._eventQueue.slice(t);t>0&&Object.assign(e[e.length-1],hl({mux_view_message:"event queue truncated"}));var i=this._createPayload(e);dm(this._beaconUrl,i,!0,function(){})};ai.prototype._sendBeaconQueue=function(){var t=this;if(this._postInFlight){this._resendAfterPost=!0;return}var e=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(e),a=be.now();dm(this._beaconUrl,i,!1,function(r,n){n?(t._eventQueue=e.concat(t._eventQueue),t._failureCount+=1,ee.info("Error sending beacon: "+n)):t._failureCount=0,t._roundTripTime=be.now()-a,t._postInFlight=!1,t._resendAfterPost&&(t._resendAfterPost=!1,t._eventQueue.length>0&&t._sendBeaconQueue())})};ai.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var t=Math.pow(2,this._failureCount-1);return t=t*Math.random(),(1+t)*this._options.baseTimeBetweenBeacons};ai.prototype._startBeaconSending=function(){var t=this;Wi.default.clearTimeout(this._sendTimeout),!this.destroyed&&(this._sendTimeout=Wi.default.setTimeout(function(){t._eventQueue.length&&t._sendBeaconQueue(),t._startBeaconSending()},this._getNextBeaconTime()))};ai.prototype._createPayload=function(t){var e=this,i={transmission_timestamp:Math.round(be.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){a=JSON.stringify({metadata:i,events:r||t}),n=a.length/1024},o=function(){return n<=e._options.maxPayloadKBSize};return s(),o()||(ee.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=t.filter(function(l){return ME.indexOf(l.e)===-1}),s()),o()||(ee.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(l){for(var d in l){var m=l[d],p=50*1024;typeof m=="string"&&m.length>p&&(l[d]=m.substring(0,p))}}),s()),a};var OE=typeof CE.default.exitPictureInPicture=="function"?function(t){return t.length<=LE}:function(t){return!1},dm=function(t,e,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,e)){a();return}if(Wi.default.fetch){Wi.default.fetch(t,{method:"POST",body:e,headers:{"Content-Type":"text/plain"},keepalive:OE(e)}).then(function(n){return a(null,n.ok?null:"Error")}).catch(function(n){return a(null,n)});return}if(Wi.default.XMLHttpRequest){var r=new Wi.default.XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)return a(null,r.status!==200?"error":void 0)},r.open("POST",t),r.setRequestHeader("Content-Type","text/plain"),r.send(e);return}a()},NE=ai,PE=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],$E=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],UE=["ad_id","ad_creative_id","ad_universal_id"],HE=["viewstart","error","ended","viewend"],BE=600*1e3,WE=(function(){function t(e,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Ie(this,t);var r,n,s,o,l,d,m,p,h,c,v,g;w(this,"mux",void 0),w(this,"envKey",void 0),w(this,"options",void 0),w(this,"eventQueue",void 0),w(this,"sampleRate",void 0),w(this,"disableCookies",void 0),w(this,"respectDoNotTrack",void 0),w(this,"previousBeaconData",void 0),w(this,"lastEventTime",void 0),w(this,"rateLimited",void 0),w(this,"pageLevelData",void 0),w(this,"viewerData",void 0),this.mux=e,this.envKey=i,this.options=a,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new NE(AE(this.envKey,this.options));var _;this.sampleRate=(_=this.options.sampleRate)!==null&&_!==void 0?_:1;var y;this.disableCookies=(y=this.options.disableCookies)!==null&&y!==void 0?y:!1;var T;this.respectDoNotTrack=(T=this.options.respectDoNotTrack)!==null&&T!==void 0?T:!1,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:(r=this.options.platform)===null||r===void 0?void 0:r.name,viewer_application_version:(n=this.options.platform)===null||n===void 0?void 0:n.version,viewer_application_engine:(s=this.options.platform)===null||s===void 0?void 0:s.layout,viewer_device_name:(o=this.options.platform)===null||o===void 0?void 0:o.product,viewer_device_category:"",viewer_device_manufacturer:(l=this.options.platform)===null||l===void 0?void 0:l.manufacturer,viewer_os_family:(m=this.options.platform)===null||m===void 0||(d=m.os)===null||d===void 0?void 0:d.family,viewer_os_architecture:(h=this.options.platform)===null||h===void 0||(p=h.os)===null||p===void 0?void 0:p.architecture,viewer_os_version:(v=this.options.platform)===null||v===void 0||(c=v.os)===null||c===void 0?void 0:c.version,viewer_connection_type:SE(),page_url:Wo.default===null||Wo.default===void 0||(g=Wo.default.location)===null||g===void 0?void 0:g.href},this.viewerData=this.disableCookies?{}:yE()}return Kt(t,[{key:"send",value:function(e,i){if(!(!e||!(i!=null&&i.view_id))){if(this.respectDoNotTrack&&ul())return ee.info("Not sending `"+e+"` because Do Not Track is enabled");if(!i||typeof i!="object")return ee.error("A data object was expected in send() but was not provided");var a=this.disableCookies?{}:TE(),r=kd(Vs({},this.pageLevelData,i,a,this.viewerData),{event:e,env_key:this.envKey});r.user_id&&(r.viewer_user_id=r.user_id,delete r.user_id);var n,s=((n=r.mux_sample_number)!==null&&n!==void 0?n:0)>=this.sampleRate,o=this._deduplicateBeaconData(e,r),l=hl(o);if(this.lastEventTime=this.mux.utils.now(),s)return ee.info("Not sending event due to sample rate restriction",e,r,l);if(this.envKey||ee.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,r,l),!this.rateLimited){if(ee.info("Sending event",e,r,l),this.rateLimited=!this.eventQueue.queueEvent(e,l),this.mux.WINDOW_UNLOADING&&e==="viewend")this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&e==="hb"?this.eventQueue.flushEvents(!0):HE.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return r.event="eventrateexceeded",l=hl(r),this.eventQueue.queueEvent(r.event,l),ee.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,i){var a=this,r={},n=i.view_id;if(n==="-1"||e==="viewstart"||e==="viewend"||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=BE)r=Vs({},i),n&&(this.previousBeaconData=r),n&&e==="viewend"&&(this.previousBeaconData=null);else{var s=e.indexOf("request")===0;Object.entries(i).forEach(function(o){var l=ti(o,2),d=l[0],m=l[1];a.previousBeaconData&&(m!==a.previousBeaconData[d]||PE.indexOf(d)>-1||a.objectHasChanged(s,d,m,a.previousBeaconData[d])||a.eventRequiresKey(e,d))&&(r[d]=m,a.previousBeaconData[d]=m)})}return r}},{key:"objectHasChanged",value:function(e,i,a,r){return!e||i.indexOf("request_")!==0?!1:i==="request_response_headers"||typeof a!="object"||typeof r!="object"?!0:Object.keys(a||{}).length!==Object.keys(r||{}).length}},{key:"eventRequiresKey",value:function(e,i){return!!(e==="renditionchange"&&i.indexOf("video_source_")===0||UE.includes(i)&&$E.includes(e))}}]),t})(),FE=function t(e){Ie(this,t);var i=0,a=0,r=0,n=0,s=0,o=0,l=0,d=function(h,c){var v=c.request_start,g=c.request_response_start,_=c.request_response_end,y=c.request_bytes_loaded;n++;var T,E;if(g?(T=g-(v??0),E=(_??0)-g):E=(_??0)-(v??0),E>0&&y&&y>0){var k=y/E*8e3;s++,a+=y,r+=E,e.data.view_min_request_throughput=Math.min(e.data.view_min_request_throughput||1/0,k),e.data.view_average_request_throughput=a/r*8e3,e.data.view_request_count=n,T>0&&(i+=T,e.data.view_max_request_latency=Math.max(e.data.view_max_request_latency||0,T),e.data.view_average_request_latency=i/s)}},m=function(h,c){n++,o++,e.data.view_request_count=n,e.data.view_request_failed_count=o},p=function(h,c){n++,l++,e.data.view_request_count=n,e.data.view_request_canceled_count=l};e.on("requestcompleted",d),e.on("requestfailed",m),e.on("requestcanceled",p)},VE=FE,KE=3600*1e3,qE=function t(e){var i=this;Ie(this,t),w(this,"_lastEventTime",void 0),e.on("before*",function(a,r){var n=r.viewer_time,s=be.now(),o=i._lastEventTime;if(i._lastEventTime=s,o&&s-o>KE){var l=Object.keys(e.data).reduce(function(m,p){return p.indexOf("video_")===0?Object.assign(m,w({},p,e.data[p])):m},{});e.mux.log.info("Received event after at least an hour inactivity, creating a new view");var d=e.playbackHeartbeat._playheadShouldBeProgressing;e._resetView(Object.assign({viewer_time:n},l)),e.playbackHeartbeat._playheadShouldBeProgressing=d,e.playbackHeartbeat._playheadShouldBeProgressing&&a.type!=="play"&&a.type!=="adbreakstart"&&(e.emit("play",{viewer_time:n}),a.type!=="playing"&&e.emit("playing",{viewer_time:n}))}})},YE=qE,GE=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],QE=new Set(["requestcompleted","requestfailed","requestcanceled"]),ZE=(function(t){If(i,t);var e=Df(i);function i(a,r,n){Ie(this,i);var s;s=e.call(this),w(N(s),"DOM_CONTENT_LOADED_EVENT_END",void 0),w(N(s),"NAVIGATION_START",void 0),w(N(s),"_destroyed",void 0),w(N(s),"_heartBeatTimeout",void 0),w(N(s),"adTracker",void 0),w(N(s),"dashjs",void 0),w(N(s),"data",void 0),w(N(s),"disablePlayheadRebufferTracking",void 0),w(N(s),"disableRebufferTracking",void 0),w(N(s),"errorTracker",void 0),w(N(s),"errorTranslator",void 0),w(N(s),"emitTranslator",void 0),w(N(s),"getAdData",void 0),w(N(s),"getPlayheadTime",void 0),w(N(s),"getStateData",void 0),w(N(s),"stateDataTranslator",void 0),w(N(s),"hlsjs",void 0),w(N(s),"id",void 0),w(N(s),"longResumeTracker",void 0),w(N(s),"minimumRebufferDuration",void 0),w(N(s),"mux",void 0),w(N(s),"playbackEventDispatcher",void 0),w(N(s),"playbackHeartbeat",void 0),w(N(s),"playbackHeartbeatTime",void 0),w(N(s),"playheadTime",void 0),w(N(s),"seekingTracker",void 0),w(N(s),"sustainedRebufferThreshold",void 0),w(N(s),"watchTimeTracker",void 0),w(N(s),"currentFragmentPDT",void 0),w(N(s),"currentFragmentStart",void 0),s.DOM_CONTENT_LOADED_EVENT_END=Fs.domContentLoadedEventEnd(),s.NAVIGATION_START=Fs.navigationStart();var o={debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(h){return h},emitTranslator:function(){for(var h=arguments.length,c=new Array(h),v=0;v<h;v++)c[v]=arguments[v];return c},stateDataTranslator:function(h){return h}};s.mux=a,s.id=r,n!=null&&n.beaconDomain&&s.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),n=Object.assign(o,n),n.data=n.data||{},n.data.property_key&&(n.data.env_key=n.data.property_key,delete n.data.property_key),ee.level=n.debug?Hi.DEBUG:Hi.WARN,s.getPlayheadTime=n.getPlayheadTime,s.getStateData=n.getStateData||function(){return{}},s.getAdData=n.getAdData||function(){},s.minimumRebufferDuration=n.minimumRebufferDuration,s.sustainedRebufferThreshold=n.sustainedRebufferThreshold,s.playbackHeartbeatTime=n.playbackHeartbeatTime,s.disableRebufferTracking=n.disableRebufferTracking,s.disableRebufferTracking&&s.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),s.disablePlayheadRebufferTracking=n.disablePlayheadRebufferTracking,s.errorTranslator=n.errorTranslator,s.emitTranslator=n.emitTranslator,s.stateDataTranslator=n.stateDataTranslator,s.playbackEventDispatcher=new WE(a,n.data.env_key,n),s.data={player_instance_id:Gr(),mux_sample_rate:n.sampleRate,beacon_domain:n.beaconCollectionDomain||n.beaconDomain},s.data.view_sequence_number=1,s.data.player_sequence_number=1;var l=(function(){typeof this.data.view_start>"u"&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(N(s));if(s.on("viewinit",function(h,c){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,c),this._initializeViewData(),this.one("play",l),this.one("adbreakstart",l)}),s.on("videochange",function(h,c){this._resetView(c)}),s.on("programchange",function(h,c){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),this._resetView(Object.assign(c,{view_program_changed:!0})),l(),this.emit("play"),this.emit("playing")}),s.on("fragmentchange",function(h,c){this.currentFragmentPDT=c.currentFragmentPDT,this.currentFragmentStart=c.currentFragmentStart}),s.on("destroy",s.destroy),typeof window<"u"&&typeof window.addEventListener=="function"&&typeof window.removeEventListener=="function"){var d=function(){var h=typeof s.data.view_start<"u";s.mux.WINDOW_HIDDEN=document.visibilityState==="hidden",h&&s.mux.WINDOW_HIDDEN&&(s.data.player_is_paused||s.emit("hb"))};window.addEventListener("visibilitychange",d,!1);var m=function(h){h.persisted||s.destroy()};window.addEventListener("pagehide",m,!1),s.on("destroy",function(){window.removeEventListener("visibilitychange",d),window.removeEventListener("pagehide",m)})}s.on("playerready",function(h,c){Object.assign(this.data,c)}),GE.forEach(function(h){s.on(h,function(c,v){h.indexOf("ad")!==0&&this._updateStateData(),Object.assign(this.data,v),this._sanitizeData()}),s.on("after"+h,function(){(h!=="error"||this.errorTracker.viewErrored)&&this.send(h)})}),s.on("viewend",function(h,c){Object.assign(s.data,c)});var p=function(h){var c=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=c-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time};return s.one("playerready",p),s.longResumeTracker=new YE(N(s)),s.errorTracker=new Qf(N(s)),new _E(N(s)),s.seekingTracker=new cE(N(s)),s.playheadTime=new eE(N(s)),s.playbackHeartbeat=new Yf(N(s)),new lE(N(s)),s.watchTimeTracker=new jf(N(s)),new Xf(N(s)),s.adTracker=new pE(N(s)),new rE(N(s)),new iE(N(s)),new sE(N(s)),new fE(N(s)),new VE(N(s)),n.hlsjs&&s.addHLSJS(n),n.dashjs&&s.addDashJS(n),s.emit("viewinit",n.data),s}return Kt(i,[{key:"emit",value:function(a,r){var n,s=Object.assign({viewer_time:this.mux.utils.now()},r),o=[a,s];if(this.emitTranslator)try{o=this.emitTranslator(a,s)}catch(l){this.mux.log.warn("Exception in emit translator callback.",l)}o!=null&&o.length&&(n=Mn(Fa(i.prototype),"emit",this)).call.apply(n,[this].concat(ht(o)))}},{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,typeof this.data.view_start<"u"&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(a){if(this.data.view_id){var r=Object.assign({},this.data),n=["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"];if(r.video_source_is_live===void 0&&(r.player_source_duration===1/0||r.video_source_duration===1/0?r.video_source_is_live=!0:(r.player_source_duration>0||r.video_source_duration>0)&&(r.video_source_is_live=!1)),r.video_source_is_live||n.forEach(function(d){r[d]=void 0}),r.video_source_url=r.video_source_url||r.player_source_url,r.video_source_url){var s=ti(Qr(r.video_source_url),2),o=s[0],l=s[1];r.video_source_domain=l,r.video_source_hostname=o}delete r.ad_request_id,this.playbackEventDispatcher.send(a,r),this.data.view_sequence_number++,this.data.player_sequence_number++,QE.has(a)||this._restartHeartBeat(),a==="viewend"&&delete this.data.view_id}}},{key:"_resetView",value:function(a){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",a)}},{key:"_updateStateData",value:function(){var a=this.getStateData();if(typeof this.stateDataTranslator=="function")try{a=this.stateDataTranslator(a)}catch(r){this.mux.log.warn("Exception in stateDataTranslator translator callback.",r)}Object.assign(this.data,a),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var a=this,r=["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"];r.forEach(function(s){var o=parseInt(a.data[s],10);a.data[s]=isNaN(o)?void 0:o});var n=["player_source_url","video_source_url"];n.forEach(function(s){if(a.data[s]){var o=a.data[s].toLowerCase();(o.indexOf("data:")===0||o.indexOf("blob:")===0)&&(a.data[s]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("video_")===0&&delete a.data[r]})}},{key:"_resetViewData",value:function(){var a=this;Object.keys(this.data).forEach(function(r){r.indexOf("view_")===0&&delete a.data[r]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var a=this,r=this.data.view_id=Gr(),n=function(){r===a.data.view_id&&_e(a.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",n):n()}},{key:"_restartHeartBeat",value:function(){var a=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){a.data.player_is_paused||a.emit("hb")},1e4)}},{key:"addHLSJS",value:function(a){if(!a.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=a.hlsjs,Pf(this.mux,this.id,a.hlsjs,{},a.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&($f(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(a){if(!a.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=a.dashjs,Wf(this.mux,this.id,a.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(Ff(this.dashjs),this.dashjs=void 0)}}]),i})(Kf),jE=ZE,ir=ze(zh());function zE(){return ir.default&&!!(ir.default.fullscreenElement||ir.default.webkitFullscreenElement||ir.default.mozFullScreenElement||ir.default.msFullscreenElement)}var XE=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],JE={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"};function e_(t,e,i){var a=ti(Ws(e),3),r=a[0],n=a[1],s=a[2],o=t.log,l=t.utils.getComputedStyle,d=t.utils.secondsToMs,m={automaticErrorTracking:!0};if(r){if(s!=="video"&&s!=="audio")return o.error("The element of `"+n+"` was not a media element.")}else return o.error("No element was found with the `"+n+"` query selector.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners"));var p={getPlayheadTime:function(){return d(r.currentTime)},getStateData:function(){var c,v,g,_=((c=(v=this).getPlayheadTime)===null||c===void 0?void 0:c.call(v))||d(r.currentTime),y=this.hlsjs&&this.hlsjs.url,T=this.dashjs&&typeof this.dashjs.getSource=="function"&&this.dashjs.getSource(),E={player_is_paused:r.paused,player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:zE(),video_poster_url:r.poster,video_source_url:y||T||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:r==null||(g=r.getVideoPlaybackQuality)===null||g===void 0?void 0:g.call(r).droppedVideoFrames};if(r.getStartDate&&_>0){var k=r.getStartDate();if(k&&typeof k.getTime=="function"&&k.getTime()){var D=k.getTime();if(E.player_program_time=D+_,r.seekable.length>0){var O=D+r.seekable.end(r.seekable.length-1);E.player_live_edge_program_time=O}}}return E}};i=Object.assign(m,i,p),i.data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:t.VERSION},i.data),r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(c,v){t.emit(n,c,v)},r.mux.updateData=function(c){r.mux.emit("hb",c)};var h=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(c){r.removeEventListener(c,r.mux.listeners[c],!1)}),delete r.mux.listeners,r.mux.destroy=h,r.mux.swapElement=h,r.mux.emit=h,r.mux.addHLSJS=h,r.mux.addDashJS=h,r.mux.removeHLSJS=h,r.mux.removeDashJS=h,r.mux.updateData=h,r.mux.setEmitTranslator=h,r.mux.setStateDataTranslator=h,r.mux.setGetPlayheadTime=h,r.mux.deleted=!0,t.emit(n,"destroy")},r.mux.swapElement=function(c){var v=ti(Ws(c),3),g=v[0],_=v[1],y=v[2];if(g){if(y!=="video"&&y!=="audio")return t.log.error("The element of `"+_+"` was not a media element.")}else return t.log.error("No element was found with the `"+_+"` query selector.");g.muxId=r.muxId,delete r.muxId,g.mux=g.mux||{},g.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(g.mux.listeners).forEach(function(T){r.removeEventListener(T,g.mux.listeners[T],!1),g.addEventListener(T,g.mux.listeners[T],!1)}),g.mux.swapElement=r.mux.swapElement,g.mux.destroy=r.mux.destroy,delete r.mux,r=g},r.mux.addHLSJS=function(c){t.addHLSJS(n,c)},r.mux.addDashJS=function(c){t.addDashJS(n,c)},r.mux.removeHLSJS=function(){t.removeHLSJS(n)},r.mux.removeDashJS=function(){t.removeDashJS(n)},r.mux.setEmitTranslator=function(c){t.setEmitTranslator(n,c)},r.mux.setStateDataTranslator=function(c){t.setStateDataTranslator(n,c)},r.mux.setGetPlayheadTime=function(c){c||(c=i.getPlayheadTime),t.setGetPlayheadTime(n,c)},t.init(n,i),t.emit(n,"playerready"),r.paused||(t.emit(n,"play"),r.readyState>2&&t.emit(n,"playing")),r.mux.listeners={},XE.forEach(function(c){c==="error"&&!i.automaticErrorTracking||(r.mux.listeners[c]=function(){var v={};if(c==="error"){if(!r.error||r.error.code===1)return;v.player_error_code=r.error.code,v.player_error_message=JE[r.error.code]||r.error.message}t.emit(n,c,v)},r.addEventListener(c,r.mux.listeners[c],!1))})}function t_(t,e,i,a){var r=a;if(t&&typeof t[e]=="function")try{r=t[e].apply(t,i)}catch(n){ee.info("safeCall error",n)}return r}var Pr=ze(gt()),ua;Pr.default&&Pr.default.WeakMap&&(ua=new WeakMap);function i_(t,e){if(!t||!e||!Pr.default||typeof Pr.default.getComputedStyle!="function")return"";var i;return ua&&ua.has(t)&&(i=ua.get(t)),i||(i=Pr.default.getComputedStyle(t,null),ua&&ua.set(t,i)),i.getPropertyValue(e)}function a_(t){return Math.floor(t*1e3)}var wi={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},_o=function(t){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(t),this.manifest};_o.prototype.process=function(t){var e;for(this.buffer+=t,e=this.buffer.indexOf(`
`);e>-1;e=this.buffer.indexOf(`
`))this.processLine(this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)};_o.prototype.processLine=function(t){var e=t.indexOf(":"),i=o_(t,e),a=i[0],r=i.length===2?wd(i[1]):void 0;if(a[0]!=="#")this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),this.manifest.targetDuration&&!("duration"in this.currentUri)&&(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case wi.TARGET_DURATION:{if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break}case wi.PART_INF:{Fo(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break}case wi.SERVER_CONTROL:{Fo(this.manifest,i),this.setHoldBack();break}case wi.INF:{r===0?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break}case wi.PROGRAM_DATE_TIME:{var n=r,s=new Date(n);this.manifest.dateTimeString||(this.manifest.dateTimeString=n,this.manifest.dateTimeObject=s),this.currentUri.dateTimeString=n,this.currentUri.dateTimeObject=s;break}case wi.VERSION:{Fo(this.manifest,i);break}case wi.SESSION_DATA:{var o=l_(i[1]),l=tm(o);Object.assign(this.manifest.sessionData,l)}}};_o.prototype.setHoldBack=function(){var t=this.manifest,e=t.serverControl,i=t.targetDuration,a=t.partTargetDuration;if(e){var r="holdBack",n="partHoldBack",s=i&&i*3,o=a&&a*2;i&&!e.hasOwnProperty(r)&&(e[r]=s),s&&e[r]<s&&(e[r]=s),a&&!e.hasOwnProperty(n)&&(e[n]=a*3),a&&e[n]<o&&(e[n]=o)}};var Fo=function(t,e){var i=um(e[0].replace("#EXT-X-","")),a;s_(e[1])?(a={},a=Object.assign(n_(e[1]),a)):a=wd(e[1]),t[i]=a},um=function(t){return t.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},wd=function(t){if(t.toLowerCase()==="yes"||t.toLowerCase()==="no")return t.toLowerCase()==="yes";var e=t.indexOf(":")!==-1?t:parseFloat(t);return isNaN(e)?t:e},r_=function(t){var e={},i=t.split("=");if(i.length>1){var a=um(i[0]);e[a]=wd(i[1])}return e},n_=function(t){for(var e=t.split(","),i={},a=0;e.length>a;a++){var r=e[a],n=r_(r);i=Object.assign(n,i)}return i},s_=function(t){return t.indexOf("=")>-1},o_=function(t,e){return e===-1?[t]:[t.substring(0,e),t.substring(e+1)]},l_=function(t){var e={};if(t){var i=t.search(","),a=t.slice(0,i),r=t.slice(i+1),n=[a,r];return n.forEach(function(s,o){for(var l=s.replace(/['"]+/g,"").split("="),d=0;d<l.length;d++)l[d]==="DATA-ID"&&(e["DATA-ID"]=l[1-d]),l[d]==="VALUE"&&(e.VALUE=l[1-d])}),{data:e}}},d_=_o,u_={safeCall:t_,safeIncrement:_e,getComputedStyle:i_,secondsToMs:a_,assign:Object.assign,headersStringToObject:Sd,cdnHeadersToRequestId:Ks,extractHostnameAndDomain:Qr,extractHostname:Et,manifestParser:d_,generateShortID:Jh,generateUUID:Gr,now:be.now,findMediaElement:Ws},c_=u_,h_={PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled",HEARTBEAT:"hb",DESTROY:"destroy"},m_=h_,p_="mux-embed",v_="5.9.0",f_="2.1",me={},yi=function(t){var e=arguments;typeof t=="string"?yi.hasOwnProperty(t)?Nr.default.setTimeout(function(){e=Array.prototype.splice.call(e,1),yi[t].apply(null,e)},0):ee.warn("`"+t+"` is an unknown task"):typeof t=="function"?Nr.default.setTimeout(function(){t(yi)},0):ee.warn("`"+t+"` is invalid.")},E_={loaded:be.now(),NAME:p_,VERSION:v_,API_VERSION:f_,PLAYER_TRACKED:!1,monitor:function(t,e){return e_(yi,t,e)},destroyMonitor:function(t){var e=ti(Ws(t),1),i=e[0];i&&i.mux&&typeof i.mux.destroy=="function"?i.mux.destroy():ee.error("A video element monitor for `"+t+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(t,e){var i=ct(t);me[i]?me[i].addHLSJS(e):ee.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(t,e){var i=ct(t);me[i]?me[i].addDashJS(e):ee.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(t){var e=ct(t);me[e]?me[e].removeHLSJS():ee.error("A monitor for `"+e+"` has not been initialized.")},removeDashJS:function(t){var e=ct(t);me[e]?me[e].removeDashJS():ee.error("A monitor for `"+e+"` has not been initialized.")},init:function(t,e){ul()&&e&&e.respectDoNotTrack&&ee.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=ct(t);me[i]=new jE(yi,i,e)},emit:function(t,e,i){var a=ct(t);me[a]?(me[a].emit(e,i),e==="destroy"&&delete me[a]):ee.error("A monitor for `"+a+"` has not been initialized.")},updateData:function(t,e){var i=ct(t);me[i]?me[i].emit("hb",e):ee.error("A monitor for `"+i+"` has not been initialized.")},setEmitTranslator:function(t,e){var i=ct(t);me[i]?me[i].emitTranslator=e:ee.error("A monitor for `"+i+"` has not been initialized.")},setStateDataTranslator:function(t,e){var i=ct(t);me[i]?me[i].stateDataTranslator=e:ee.error("A monitor for `"+i+"` has not been initialized.")},setGetPlayheadTime:function(t,e){var i=ct(t);me[i]?me[i].getPlayheadTime=e:ee.error("A monitor for `"+i+"` has not been initialized.")},checkDoNotTrack:ul,log:ee,utils:c_,events:m_,WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(yi,E_);typeof Nr.default<"u"&&typeof Nr.default.addEventListener=="function"&&Nr.default.addEventListener("pagehide",function(t){t.persisted||(yi.WINDOW_UNLOADING=!0)},!1);var Id=yi;var B=ef,te={VIDEO:"video",THUMBNAIL:"thumbnail",STORYBOARD:"storyboard",DRM:"drm"},x={NOT_AN_ERROR:0,NETWORK_OFFLINE:2000002,NETWORK_UNKNOWN_ERROR:2e6,NETWORK_NO_STATUS:2000001,NETWORK_INVALID_URL:24e5,NETWORK_NOT_FOUND:2404e3,NETWORK_NOT_READY:2412e3,NETWORK_GENERIC_SERVER_FAIL:25e5,NETWORK_TOKEN_MISSING:2403201,NETWORK_TOKEN_MALFORMED:2412202,NETWORK_TOKEN_EXPIRED:2403210,NETWORK_TOKEN_AUD_MISSING:2403221,NETWORK_TOKEN_AUD_MISMATCH:2403222,NETWORK_TOKEN_SUB_MISMATCH:2403232,ENCRYPTED_ERROR:5e6,ENCRYPTED_UNSUPPORTED_KEY_SYSTEM:5000001,ENCRYPTED_GENERATE_REQUEST_FAILED:5000002,ENCRYPTED_UPDATE_LICENSE_FAILED:5000003,ENCRYPTED_UPDATE_SERVER_CERT_FAILED:5000004,ENCRYPTED_CDM_ERROR:5000005,ENCRYPTED_OUTPUT_RESTRICTED:5000006,ENCRYPTED_MISSING_TOKEN:5000002},bo=t=>t===te.VIDEO?"playback":t,di=class pr extends Error{constructor(e,i=pr.MEDIA_ERR_CUSTOM,a,r){var n;super(e),this.name="MediaError",this.code=i,this.context=r,this.fatal=a??(i>=pr.MEDIA_ERR_NETWORK&&i<=pr.MEDIA_ERR_ENCRYPTED),this.message||(this.message=(n=pr.defaultMessages[this.code])!=null?n:"")}};di.MEDIA_ERR_ABORTED=1,di.MEDIA_ERR_NETWORK=2,di.MEDIA_ERR_DECODE=3,di.MEDIA_ERR_SRC_NOT_SUPPORTED=4,di.MEDIA_ERR_ENCRYPTED=5,di.MEDIA_ERR_CUSTOM=100,di.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var I=di,__=t=>t==null,Rd=(t,e)=>__(e)?!1:t in e,ml={ANY:"any",MUTED:"muted"},Q={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},Ht={MSE:"mse",NATIVE:"native"},vr={HEADER:"header",QUERY:"query",NONE:"none"},qs=Object.values(vr),Jt={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},mc={HLS:Jt.M3U8};[...Object.values(Jt)];var oA={upTo720p:"720p",upTo1080p:"1080p",upTo1440p:"1440p",upTo2160p:"2160p"},lA={noLessThan480p:"480p",noLessThan540p:"540p",noLessThan720p:"720p",noLessThan1080p:"1080p",noLessThan1440p:"1440p",noLessThan2160p:"2160p"},dA={DESCENDING:"desc"},b_="en",pl={code:b_},ve=(t,e,i,a,r=t)=>{r.addEventListener(e,i,a),t.addEventListener("teardown",()=>{r.removeEventListener(e,i)},{once:!0})};function g_(t,e,i){e&&i>e&&(i=e);for(let a=0;a<t.length;a++)if(t.start(a)<=i&&t.end(a)>=i)return!0;return!1}var Cd=t=>{let e=t.indexOf("?");if(e<0)return[t];let i=t.slice(0,e),a=t.slice(e);return[i,a]},go=t=>{let{type:e}=t;if(e){let i=e.toUpperCase();return Rd(i,mc)?mc[i]:e}return y_(t)},cm=t=>t==="VOD"?Q.ON_DEMAND:Q.LIVE,hm=t=>t==="EVENT"?Number.POSITIVE_INFINITY:t==="VOD"?Number.NaN:0,y_=t=>{let{src:e}=t;if(!e)return"";let i="";try{i=new URL(e).pathname}catch{console.error("invalid url")}let a=i.lastIndexOf(".");if(a<0)return A_(t)?Jt.M3U8:"";let r=i.slice(a+1).toUpperCase();return Rd(r,Jt)?Jt[r]:""},T_="mux.com",A_=({src:t,customDomain:e=T_})=>{let i;try{i=new URL(`${t}`)}catch{return!1}let a=i.protocol==="https:",r=i.hostname===`stream.${e}`.toLowerCase(),n=i.pathname.split("/"),s=n.length===2,o=!(n!=null&&n[1].includes("."));return a&&r&&s&&o},Oa=t=>{let e=(t??"").split(".")[1];if(e)try{let i=e.replace(/-/g,"+").replace(/_/g,"/"),a=decodeURIComponent(atob(i).split("").map(function(r){return"%"+("00"+r.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(a)}catch{return}},k_=({exp:t},e=Date.now())=>!t||t*1e3<e,S_=({sub:t},e)=>t!==e,w_=({aud:t},e)=>!t,I_=({aud:t},e)=>t!==e,mm="en";function L(t,e=!0){var i,a;let r=e&&(a=(i=pl)==null?void 0:i[t])!=null?a:t,n=e?pl.code:mm;return new R_(r,n)}var R_=class{constructor(e,i=(a=>(a=pl)!=null?a:mm)()){this.message=e,this.locale=i}format(e){return this.message.replace(/\{(\w+)\}/g,(i,a)=>{var r;return(r=e[a])!=null?r:""})}toString(){return this.message}},C_=Object.values(ml),pc=t=>typeof t=="boolean"||typeof t=="string"&&C_.includes(t),D_=(t,e,i)=>{let{autoplay:a}=t,r=!1,n=!1,s=pc(a)?a:!!a,o=()=>{r||ve(e,"playing",()=>{r=!0},{once:!0})};if(o(),ve(e,"loadstart",()=>{r=!1,o(),Vo(e,s)},{once:!0}),ve(e,"loadstart",()=>{i||(t.streamType&&t.streamType!==Q.UNKNOWN?n=t.streamType===Q.LIVE:n=!Number.isFinite(e.duration)),Vo(e,s)},{once:!0}),i&&i.once(B.Events.LEVEL_LOADED,(l,d)=>{var m;t.streamType&&t.streamType!==Q.UNKNOWN?n=t.streamType===Q.LIVE:n=(m=d.details.live)!=null?m:!1}),!s){let l=()=>{!n||Number.isFinite(t.startTime)||(i!=null&&i.liveSyncPosition?e.currentTime=i.liveSyncPosition:Number.isFinite(e.seekable.end(0))&&(e.currentTime=e.seekable.end(0)))};i&&ve(e,"play",()=>{e.preload==="metadata"?i.once(B.Events.LEVEL_UPDATED,l):l()},{once:!0})}return l=>{r||(s=pc(l)?l:!!l,Vo(e,s))}},Vo=(t,e)=>{if(!e)return;let i=t.muted,a=()=>t.muted=i;switch(e){case ml.ANY:t.play().catch(()=>{t.muted=!0,t.play().catch(a)});break;case ml.MUTED:t.muted=!0,t.play().catch(a);break;default:t.play().catch(()=>{});break}},L_=({preload:t,src:e},i,a)=>{let r=p=>{p!=null&&["","none","metadata","auto"].includes(p)?i.setAttribute("preload",p):i.removeAttribute("preload")};if(!a)return r(t),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=p=>{r(p);let h=p??i.preload;s||h==="none"||(h==="metadata"?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),m())},m=()=>{!n&&e&&(n=!0,a.loadSource(e))};return ve(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,m()},{once:!0}),d(t),d};function M_(t,e){var i;if(!("videoTracks"in t))return;let a=new WeakMap;e.on(B.Events.MANIFEST_PARSED,function(l,d){o();let m=t.addVideoTrack("main");m.selected=!0;for(let[p,h]of d.levels.entries()){let c=m.addRendition(h.url[0],h.width,h.height,h.videoCodec,h.bitrate);a.set(h,`${p}`),c.id=`${p}`}}),e.on(B.Events.AUDIO_TRACKS_UPDATED,function(l,d){s();for(let m of d.audioTracks){let p=m.default?"main":"alternative",h=t.addAudioTrack(p,m.name,m.lang);h.id=`${m.id}`,m.default&&(h.enabled=!0)}}),t.audioTracks.addEventListener("change",()=>{var l;let d=+((l=[...t.audioTracks].find(p=>p.enabled))==null?void 0:l.id),m=e.audioTracks.map(p=>p.id);d!=e.audioTrack&&m.includes(d)&&(e.audioTrack=d)}),e.on(B.Events.LEVELS_UPDATED,function(l,d){var m;let p=t.videoTracks[(m=t.videoTracks.selectedIndex)!=null?m:0];if(!p)return;let h=d.levels.map(c=>a.get(c));for(let c of t.videoRenditions)c.id&&!h.includes(c.id)&&p.removeRendition(c)});let r=l=>{let d=l.target.selectedIndex;d!=e.nextLevel&&(e.nextLevel=d)};(i=t.videoRenditions)==null||i.addEventListener("change",r);let n=()=>{for(let l of t.videoTracks)t.removeVideoTrack(l)},s=()=>{for(let l of t.audioTracks)t.removeAudioTrack(l)},o=()=>{n(),s()};e.once(B.Events.DESTROYING,o)}var Ko=t=>"time"in t?t.time:t.startTime;function x_(t,e){e.on(B.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(r,{tracks:n})=>{n.forEach(s=>{var o,l;let d=(o=s.subtitleTrack)!=null?o:s.closedCaptions,m=e.subtitleTracks.findIndex(({lang:h,name:c,type:v})=>h==d?.lang&&c===s.label&&v.toLowerCase()===s.kind),p=((l=s._id)!=null?l:s.default)?"default":`${s.kind}${m}`;Dd(t,s.kind,s.label,d?.lang,p,s.default)})});let i=()=>{if(!e.subtitleTracks.length)return;let r=Array.from(t.textTracks).find(o=>o.id&&o.mode==="showing"&&["subtitles","captions"].includes(o.kind));if(!r)return;let n=e.subtitleTracks[e.subtitleTrack],s=n?n.default?"default":`${e.subtitleTracks[e.subtitleTrack].type.toLowerCase()}${e.subtitleTrack}`:void 0;if(e.subtitleTrack<0||r?.id!==s){let o=e.subtitleTracks.findIndex(({lang:l,name:d,type:m,default:p})=>r.id==="default"&&p||l==r.language&&d===r.label&&m.toLowerCase()===r.kind);e.subtitleTrack=o}r?.id===s&&r.cues&&Array.from(r.cues).forEach(o=>{r.addCue(o)})};t.textTracks.addEventListener("change",i),e.on(B.Events.CUES_PARSED,(r,{track:n,cues:s})=>{let o=t.textTracks.getTrackById(n);if(!o)return;let l=o.mode==="disabled";l&&(o.mode="hidden"),s.forEach(d=>{var m;(m=o.cues)!=null&&m.getCueById(d.id)||o.addCue(d)}),l&&(o.mode="disabled")}),e.once(B.Events.DESTROYING,()=>{t.textTracks.removeEventListener("change",i),t.querySelectorAll("track[data-removeondestroy]").forEach(r=>{r.remove()})});let a=()=>{Array.from(t.textTracks).forEach(r=>{var n,s;if(!["subtitles","caption"].includes(r.kind)&&(r.label==="thumbnails"||r.kind==="chapters")){if(!((n=r.cues)!=null&&n.length)){let o="track";r.kind&&(o+=`[kind="${r.kind}"]`),r.label&&(o+=`[label="${r.label}"]`);let l=t.querySelector(o),d=(s=l?.getAttribute("src"))!=null?s:"";l?.removeAttribute("src"),setTimeout(()=>{l?.setAttribute("src",d)},0)}r.mode!=="hidden"&&(r.mode="hidden")}})};e.once(B.Events.MANIFEST_LOADED,a),e.once(B.Events.MEDIA_ATTACHED,a)}function Dd(t,e,i,a,r,n){let s=document.createElement("track");return s.kind=e,s.label=i,a&&(s.srclang=a),r&&(s.id=r),n&&(s.default=!0),s.track.mode=["subtitles","captions"].includes(e)?"disabled":"hidden",s.setAttribute("data-removeondestroy",""),t.append(s),s.track}function O_(t,e){let i=Array.prototype.find.call(t.querySelectorAll("track"),a=>a.track===e);i?.remove()}function cn(t,e,i){var a;return(a=Array.from(t.querySelectorAll("track")).find(r=>r.track.label===e&&r.track.kind===i))==null?void 0:a.track}async function pm(t,e,i,a){let r=cn(t,i,a);return r||(r=Dd(t,a,i),r.mode="hidden",await new Promise(n=>setTimeout(()=>n(void 0),0))),r.mode!=="hidden"&&(r.mode="hidden"),[...e].sort((n,s)=>Ko(s)-Ko(n)).forEach(n=>{var s,o;let l=n.value,d=Ko(n);if("endTime"in n&&n.endTime!=null)r?.addCue(new VTTCue(d,n.endTime,a==="chapters"?l:JSON.stringify(l??null)));else{let m=Array.prototype.findIndex.call(r?.cues,v=>v.startTime>=d),p=(s=r?.cues)==null?void 0:s[m],h=p?p.startTime:Number.isFinite(t.duration)?t.duration:Number.MAX_SAFE_INTEGER,c=(o=r?.cues)==null?void 0:o[m-1];c&&(c.endTime=d),r?.addCue(new VTTCue(d,h,a==="chapters"?l:JSON.stringify(l??null)))}}),t.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var Ld="cuepoints",vm=Object.freeze({label:Ld});async function fm(t,e,i=vm){return pm(t,e,i.label,"metadata")}var vl=t=>({time:t.startTime,value:JSON.parse(t.text)});function N_(t,e={label:Ld}){let i=cn(t,e.label,"metadata");return i!=null&&i.cues?Array.from(i.cues,a=>vl(a)):[]}function Em(t,e={label:Ld}){var i,a;let r=cn(t,e.label,"metadata");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return vl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return vl(s||r.activeCues[0])}async function P_(t,e=vm){return new Promise(i=>{ve(t,"loadstart",async()=>{let a=await fm(t,[],e);ve(t,"cuechange",()=>{let r=Em(t);if(r){let n=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}var Md="chapters",_m=Object.freeze({label:Md}),fl=t=>({startTime:t.startTime,endTime:t.endTime,value:t.text});async function bm(t,e,i=_m){return pm(t,e,i.label,"chapters")}function $_(t,e={label:Md}){var i;let a=cn(t,e.label,"chapters");return(i=a?.cues)!=null&&i.length?Array.from(a.cues,r=>fl(r)):[]}function gm(t,e={label:Md}){var i,a;let r=cn(t,e.label,"chapters");if(!((i=r?.activeCues)!=null&&i.length))return;if(r.activeCues.length===1)return fl(r.activeCues[0]);let{currentTime:n}=t,s=Array.prototype.find.call((a=r.activeCues)!=null?a:[],({startTime:o,endTime:l})=>o<=n&&l>n);return fl(s||r.activeCues[0])}async function U_(t,e=_m){return new Promise(i=>{ve(t,"loadstart",async()=>{let a=await bm(t,[],e);ve(t,"cuechange",()=>{let r=gm(t);if(r){let n=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:r});t.dispatchEvent(n)}},{},a),i(a)})})}function H_(t,e){if(e){let i=e.playingDate;if(i!=null)return new Date(i.getTime()-t.currentTime*1e3)}return typeof t.getStartDate=="function"?t.getStartDate():new Date(NaN)}function B_(t,e){if(e&&e.playingDate)return e.playingDate;if(typeof t.getStartDate=="function"){let i=t.getStartDate();return new Date(i.getTime()+t.currentTime*1e3)}return new Date(NaN)}var $r={VIDEO:"v",THUMBNAIL:"t",STORYBOARD:"s",DRM:"d"},W_=t=>{if(t===te.VIDEO)return $r.VIDEO;if(t===te.DRM)return $r.DRM},F_=(t,e)=>{var i,a;let r=bo(t),n=`${r}Token`;return(i=e.tokens)!=null&&i[r]?(a=e.tokens)==null?void 0:a[r]:Rd(n,e)?e[n]:void 0},Ys=(t,e,i,a,r=!1,n=!(s=>(s=globalThis.navigator)==null?void 0:s.onLine)())=>{var s,o;if(n){let y=L("Your device appears to be offline",r),T,E=I.MEDIA_ERR_NETWORK,k=new I(y,E,!1,T);return k.errorCategory=e,k.muxCode=x.NETWORK_OFFLINE,k.data=t,k}let l="status"in t?t.status:t.code,d=Date.now(),m=I.MEDIA_ERR_NETWORK;if(l===200)return;let p=bo(e),h=F_(e,i),c=W_(e),[v]=Cd((s=i.playbackId)!=null?s:"");if(!l||!v)return;let g=Oa(h);if(h&&!g){let y=L("The {tokenNamePrefix}-token provided is invalid or malformed.",r).format({tokenNamePrefix:p}),T=L("Compact JWT string: {token}",r).format({token:h}),E=new I(y,m,!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_TOKEN_MALFORMED,E.data=t,E}if(l>=500){let y=new I("",m,a??!0);return y.errorCategory=e,y.muxCode=x.NETWORK_UNKNOWN_ERROR,y}if(l===403)if(g){if(k_(g,d)){let y={timeStyle:"medium",dateStyle:"medium"},T=L("The video’s secured {tokenNamePrefix}-token has expired.",r).format({tokenNamePrefix:p}),E=L("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat("en",y).format((o=g.exp)!=null?o:0*1e3),currentDate:new Intl.DateTimeFormat("en",y).format(d)}),k=new I(T,m,!0,E);return k.errorCategory=e,k.muxCode=x.NETWORK_TOKEN_EXPIRED,k.data=t,k}if(S_(g,v)){let y=L("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p}),T=L("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",r).format({tokenNamePrefix:p,playbackId:v,tokenPlaybackId:g.sub}),E=new I(y,m,!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_TOKEN_SUB_MISMATCH,E.data=t,E}if(w_(g)){let y=L("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=L("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c}),E=new I(y,m,!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_TOKEN_AUD_MISSING,E.data=t,E}if(I_(g,c)){let y=L("The {tokenNamePrefix}-token is formatted with incorrect information.",r).format({tokenNamePrefix:p}),T=L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",r).format({tokenNamePrefix:p,expectedAud:c,aud:g.aud}),E=new I(y,m,!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_TOKEN_AUD_MISMATCH,E.data=t,E}}else{let y=L("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",r).format({tokenNamePrefix:p,category:e}),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new I(y,m,a??!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_TOKEN_MISSING,E.data=t,E}if(l===412){let y=L("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new I(y,m,a??!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_NOT_READY,E.streamType=i.streamType===Q.LIVE?"live":i.streamType===Q.ON_DEMAND?"on-demand":"unknown",E.data=t,E}if(l===404){let y=L("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new I(y,m,a??!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_NOT_FOUND,E.data=t,E}if(l===400){let y=L("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."),T=L("Specified playback ID: {playbackId}",r).format({playbackId:v}),E=new I(y,m,a??!0,T);return E.errorCategory=e,E.muxCode=x.NETWORK_INVALID_URL,E.data=t,E}let _=new I("",m,a??!0);return _.errorCategory=e,_.muxCode=x.NETWORK_UNKNOWN_ERROR,_.data=t,_},vc=B.DefaultConfig.capLevelController,ym=class Tm extends vc{constructor(e){super(e)}get levels(){var e;return(e=this.hls.levels)!=null?e:[]}getValidLevels(e){return this.levels.filter((i,a)=>this.isLevelAllowed(i)&&a<=e)}getMaxLevel(e){let i=super.getMaxLevel(e),a=this.getValidLevels(e);if(!a[i])return i;let r=Math.min(a[i].width,a[i].height),n=Tm.minMaxResolution;return r>=n?i:vc.getMaxLevelByMediaSize(a,n*(16/9),n)}};ym.minMaxResolution=720;var V_=ym,K_=V_,xn={FAIRPLAY:"fairplay",PLAYREADY:"playready",WIDEVINE:"widevine"},q_=t=>{if(t.includes("fps"))return xn.FAIRPLAY;if(t.includes("playready"))return xn.PLAYREADY;if(t.includes("widevine"))return xn.WIDEVINE},Y_=t=>{let e=t.split(`
`).find((i,a,r)=>a&&r[a-1].startsWith("#EXT-X-STREAM-INF"));return fetch(e).then(i=>i.status!==200?Promise.reject(i):i.text())},G_=t=>{let e=t.split(`
`).filter(a=>a.startsWith("#EXT-X-SESSION-DATA"));if(!e.length)return{};let i={};for(let a of e){let r=Z_(a),n=r["DATA-ID"];n&&(i[n]={...r})}return{sessionData:i}},Q_=/([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;function Z_(t){let e=[...t.matchAll(Q_)];return Object.fromEntries(e.map(([,i,a])=>[i,a]))}var j_=t=>{var e,i,a;let r=t.split(`
`),n=(i=((e=r.find(d=>d.startsWith("#EXT-X-PLAYLIST-TYPE")))!=null?e:"").split(":")[1])==null?void 0:i.trim(),s=cm(n),o=hm(n),l;if(s===Q.LIVE){let d=r.find(m=>m.startsWith("#EXT-X-PART-INF"));if(d)l=+d.split(":")[1].split("=")[1]*2;else{let m=r.find(h=>h.startsWith("#EXT-X-TARGETDURATION")),p=(a=m?.split(":"))==null?void 0:a[1];l=+(p??6)*3}}return{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}},z_=async(t,e)=>{if(e===Jt.MP4)return{streamType:Q.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0,sessionData:void 0};if(e===Jt.M3U8){let i=await fetch(t);if(!i.ok)return Promise.reject(i);let a=await i.text(),r=await Y_(a);return{...G_(a),...j_(r)}}return console.error(`Media type ${e} is an unrecognized or unsupported type for src ${t}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0,sessionData:void 0}},X_=async(t,e,i=go({src:t}))=>{var a,r,n,s;let{streamType:o,targetLiveWindow:l,liveEdgeStartOffset:d,sessionData:m}=await z_(t,i),p=m?.["com.apple.hls.chapters"];(p!=null&&p.URI||p!=null&&p.VALUE.toLocaleLowerCase().startsWith("http"))&&xd((a=p.URI)!=null?a:p.VALUE,e),((r=le.get(e))!=null?r:{}).liveEdgeStartOffset=d,((n=le.get(e))!=null?n:{}).targetLiveWindow=l,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((s=le.get(e))!=null?s:{}).streamType=o,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},xd=async(t,e)=>{var i,a;try{let r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Mux metadata: ${r.status} ${r.statusText}`);let n=await r.json(),s={};if(!((i=n?.[0])!=null&&i.metadata))return;for(let l of n[0].metadata)l.key&&l.value&&(s[l.key]=l.value);((a=le.get(e))!=null?a:{}).metadata=s;let o=new CustomEvent("muxmetadata");e.dispatchEvent(o)}catch(r){console.error(r)}},J_=t=>{var e;let i=t.type,a=cm(i),r=hm(i),n,s=!!((e=t.partList)!=null&&e.length);return a===Q.LIVE&&(n=s?t.partTarget*2:t.targetduration*3),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},eb=(t,e,i)=>{var a,r,n,s,o,l,d,m;let{streamType:p,targetLiveWindow:h,liveEdgeStartOffset:c,lowLatency:v}=J_(t);if(p===Q.LIVE){v?(i.config.backBufferLength=(a=i.userConfig.backBufferLength)!=null?a:4,i.config.maxFragLookUpTolerance=(r=i.userConfig.maxFragLookUpTolerance)!=null?r:.001,i.config.abrBandWidthUpFactor=(n=i.userConfig.abrBandWidthUpFactor)!=null?n:i.config.abrBandWidthFactor):i.config.backBufferLength=(s=i.userConfig.backBufferLength)!=null?s:8;let g=Object.freeze({get length(){return e.seekable.length},start(_){return e.seekable.start(_)},end(_){var y;return _>this.length||_<0||Number.isFinite(e.duration)?e.seekable.end(_):(y=i.liveSyncPosition)!=null?y:e.seekable.end(_)}});((o=le.get(e))!=null?o:{}).seekable=g}((l=le.get(e))!=null?l:{}).liveEdgeStartOffset=c,((d=le.get(e))!=null?d:{}).targetLiveWindow=h,e.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),((m=le.get(e))!=null?m:{}).streamType=p,e.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},fc,Ec,tb=(Ec=(fc=globalThis?.navigator)==null?void 0:fc.userAgent)!=null?Ec:"",_c,bc,gc,ib=(gc=(bc=(_c=globalThis?.navigator)==null?void 0:_c.userAgentData)==null?void 0:bc.platform)!=null?gc:"",yc,Tc,Ac,ab=(Ac=(Tc=(yc=globalThis?.navigator)==null?void 0:yc.userAgentData)==null?void 0:Tc.brands)!=null?Ac:[],rb=tb.toLowerCase().includes("android")||["x11","android"].some(t=>ib.toLowerCase().includes(t)),kc=ab.find(t=>t.brand==="Google Chrome"),nb=t=>{var e;return kc&&parseInt((e=kc.version)!=null?e:"0")>=141&&!!t.canPlayType("application/vnd.apple.mpegurl")},le=new WeakMap,ei="mux.com",Sc,wc,Am=(wc=(Sc=B).isSupported)==null?void 0:wc.call(Sc),sb=t=>rb||nb(t),Od=()=>Id.utils.now(),ob=Id.utils.generateUUID,El=({playbackId:t,customDomain:e=ei,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,assetStartTime:o,assetEndTime:l,playbackToken:d,tokens:{playback:m=d}={},extraSourceParams:p={}}={})=>{if(!t)return;let[h,c=""]=Cd(t),v=new URL(`https://stream.${e}/${h}.m3u8${c}`);return m||v.searchParams.has("token")?(v.searchParams.forEach((g,_)=>{_!="token"&&v.searchParams.delete(_)}),m&&v.searchParams.set("token",m)):(i&&v.searchParams.set("max_resolution",i),a&&(v.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&v.searchParams.set("rendition_order",r),n&&v.searchParams.set("program_start_time",`${n}`),s&&v.searchParams.set("program_end_time",`${s}`),o&&v.searchParams.set("asset_start_time",`${o}`),l&&v.searchParams.set("asset_end_time",`${l}`),Object.entries(p).forEach(([g,_])=>{_!=null&&v.searchParams.set(g,_)})),v.toString()},yo=t=>{if(!t)return;let[e]=t.split("?");return e||void 0},Nd=t=>{if(!t||!t.startsWith("https://stream."))return;let[e]=new URL(t).pathname.slice(1).split(/\.m3u8|\//);return e||void 0},lb=t=>{var e,i,a;return(e=t?.metadata)!=null&&e.video_id?t.metadata.video_id:Lm(t)&&(a=(i=yo(t.playbackId))!=null?i:Nd(t.src))!=null?a:t.src},km=t=>{var e;return(e=le.get(t))==null?void 0:e.error},db=t=>{var e;return(e=le.get(t))==null?void 0:e.metadata},_l=t=>{var e,i;return(i=(e=le.get(t))==null?void 0:e.streamType)!=null?i:Q.UNKNOWN},ub=t=>{var e,i;return(i=(e=le.get(t))==null?void 0:e.targetLiveWindow)!=null?i:Number.NaN},Pd=t=>{var e,i;return(i=(e=le.get(t))==null?void 0:e.seekable)!=null?i:t.seekable},cb=t=>{var e;let i=(e=le.get(t))==null?void 0:e.liveEdgeStartOffset;if(typeof i!="number")return Number.NaN;let a=Pd(t);return a.length?a.end(a.length-1)-i:Number.NaN},$d=.034,hb=(t,e,i=$d)=>Math.abs(t-e)<=i,Sm=(t,e,i=$d)=>t>e||hb(t,e,i),mb=(t,e=$d)=>t.paused&&Sm(t.currentTime,t.duration,e),wm=(t,e)=>{var i,a,r;if(!e||!t.buffered.length)return;if(t.readyState>2)return!1;let n=e.currentLevel>=0?(a=(i=e.levels)==null?void 0:i[e.currentLevel])==null?void 0:a.details:(r=e.levels.find(p=>!!p.details))==null?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(s!=null&&s.length))return;if(t.currentTime<t.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(t.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=t.buffered.start(t.buffered.length-1),m=t.buffered.end(t.buffered.length-1);return l>d&&l<m},Im=(t,e)=>t.ended||t.loop?t.ended:e&&wm(t,e)?!0:mb(t),pb=(t,e,i)=>{Rm(e,i,t);let{metadata:a={}}=t,{view_session_id:r=ob()}=a,n=lb(t);a.view_session_id=r,a.video_id=n,t.metadata=a;let s=m=>{var p;(p=e.mux)==null||p.emit("hb",{view_drm_type:m})};t.drmTypeCb=s,le.set(e,{retryCount:0});let o=vb(t,e),l=L_(t,e,o);t!=null&&t.muxDataKeepSession&&e!=null&&e.mux&&!e.mux.deleted?o&&e.mux.addHLSJS({hlsjs:o,Hls:o?B:void 0}):yb(t,e,o),Tb(t,e,o),P_(e),U_(e);let d=D_(t,e,o);return{engine:o,setAutoplay:d,setPreload:l}},Rm=(t,e,i)=>{let a=e?.engine;t!=null&&t.mux&&!t.mux.deleted&&(i!=null&&i.muxDataKeepSession?a&&t.mux.removeHLSJS():(t.mux.destroy(),delete t.mux)),a&&(a.detachMedia(),a.destroy()),t&&(t.hasAttribute("src")&&(t.removeAttribute("src"),t.load()),t.removeEventListener("error",xm),t.removeEventListener("error",bl),t.removeEventListener("durationchange",Mm),le.delete(t),t.dispatchEvent(new Event("teardown")))};function Cm(t,e){var i;let a=go(t);if(a!==Jt.M3U8)return!0;let r=!a||((i=e.canPlayType(a))!=null?i:!0),{preferPlayback:n}=t,s=n===Ht.MSE,o=n===Ht.NATIVE,l=Am&&(s||sb(e));return r&&(o||!l)}var vb=(t,e)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=t,l=go(t)===Jt.M3U8,d=Cm(t,e);if(l&&!d&&Am){let m={backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0},p=fb(a),h=Eb(t),c=[vr.QUERY,vr.HEADER].includes(s)?{useHeaders:s===vr.HEADER,sessionId:n?.view_session_id,contentId:n?.video_id}:void 0,v=o.capLevelToPlayerSize==null?{capLevelController:K_}:{},g=new B({debug:i,startPosition:r,cmcd:c,xhrSetup:(_,y)=>{var T,E;if(s&&s!==vr.QUERY)return;let k=new URL(y);if(!k.searchParams.has("CMCD"))return;let D=((E=(T=k.searchParams.get("CMCD"))==null?void 0:T.split(","))!=null?E:[]).filter(O=>O.startsWith("sid")||O.startsWith("cid")).join(",");k.searchParams.set("CMCD",D),_.open("GET",k)},...v,...m,...p,...h,...o});return g.on(B.Events.MANIFEST_PARSED,async function(_,y){var T,E;let k=(T=y.sessionData)==null?void 0:T["com.apple.hls.chapters"];(k!=null&&k.URI||k!=null&&k.VALUE.toLocaleLowerCase().startsWith("http"))&&xd((E=k?.URI)!=null?E:k?.VALUE,e)}),g}},fb=t=>t===Q.LIVE?{backBufferLength:8}:{},Eb=t=>{let{tokens:{drm:e}={},playbackId:i,drmTypeCb:a}=t,r=yo(i);return!e||!r?{}:{emeEnabled:!0,drmSystems:{"com.apple.fps":{licenseUrl:On(t,"fairplay"),serverCertificateUrl:Dm(t,"fairplay")},"com.widevine.alpha":{licenseUrl:On(t,"widevine")},"com.microsoft.playready":{licenseUrl:On(t,"playready")}},requestMediaKeySystemAccessFunc:(n,s)=>(n==="com.widevine.alpha"&&(s=[...s.map(o=>{var l;let d=(l=o.videoCapabilities)==null?void 0:l.map(m=>({...m,robustness:"HW_SECURE_ALL"}));return{...o,videoCapabilities:d}}),...s]),navigator.requestMediaKeySystemAccess(n,s).then(o=>{let l=q_(n);return a?.(l),o}))}},_b=async t=>{let e=await fetch(t);return e.status!==200?Promise.reject(e):await e.arrayBuffer()},bb=async(t,e)=>{let i=await fetch(e,{method:"POST",headers:{"Content-type":"application/octet-stream"},body:t});if(i.status!==200)return Promise.reject(i);let a=await i.arrayBuffer();return new Uint8Array(a)},gb=(t,e)=>{ve(e,"encrypted",async i=>{try{let a=i.initDataType;if(a!=="skd"){console.error(`Received unexpected initialization data type "${a}"`);return}if(!e.mediaKeys){let l=await navigator.requestMediaKeySystemAccess("com.apple.fps",[{initDataTypes:[a],videoCapabilities:[{contentType:"application/vnd.apple.mpegurl",robustness:""}],distinctiveIdentifier:"not-allowed",persistentState:"not-allowed",sessionTypes:["temporary"]}]).then(m=>{var p;return(p=t.drmTypeCb)==null||p.call(t,xn.FAIRPLAY),m}).catch(()=>{let m=L("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."),p=new I(m,I.MEDIA_ERR_ENCRYPTED,!0);p.errorCategory=te.DRM,p.muxCode=x.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM,nt(e,p)});if(!l)return;let d=await l.createMediaKeys();try{let m=await _b(Dm(t,"fairplay")).catch(p=>{if(p instanceof Response){let h=Ys(p,te.DRM,t);return console.error("mediaError",h?.message,h?.context),h?Promise.reject(h):Promise.reject(new Error("Unexpected error in app cert request"))}return Promise.reject(p)});await d.setServerCertificate(m).catch(()=>{let p=L("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."),h=new I(p,I.MEDIA_ERR_ENCRYPTED,!0);return h.errorCategory=te.DRM,h.muxCode=x.ENCRYPTED_UPDATE_SERVER_CERT_FAILED,Promise.reject(h)})}catch(m){nt(e,m);return}await e.setMediaKeys(d)}let r=i.initData;if(r==null){console.error(`Could not start encrypted playback due to missing initData in ${i.type} event`);return}let n=e.mediaKeys.createSession();n.addEventListener("keystatuseschange",()=>{n.keyStatuses.forEach(l=>{let d;if(l==="internal-error"){let m=L("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");d=new I(m,I.MEDIA_ERR_ENCRYPTED,!0),d.errorCategory=te.DRM,d.muxCode=x.ENCRYPTED_CDM_ERROR}else if(l==="output-restricted"||l==="output-downscaled"){let m=L("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");d=new I(m,I.MEDIA_ERR_ENCRYPTED,!1),d.errorCategory=te.DRM,d.muxCode=x.ENCRYPTED_OUTPUT_RESTRICTED}d&&nt(e,d)})});let s=await Promise.all([n.generateRequest(a,r).catch(()=>{let l=L("Failed to generate a DRM license request. This may be an issue with the player or your protected content."),d=new I(l,I.MEDIA_ERR_ENCRYPTED,!0);d.errorCategory=te.DRM,d.muxCode=x.ENCRYPTED_GENERATE_REQUEST_FAILED,nt(e,d)}),new Promise(l=>{n.addEventListener("message",d=>{l(d.message)},{once:!0})})]).then(([,l])=>l),o=await bb(s,On(t,"fairplay")).catch(l=>{if(l instanceof Response){let d=Ys(l,te.DRM,t);return console.error("mediaError",d?.message,d?.context),d?Promise.reject(d):Promise.reject(new Error("Unexpected error in license key request"))}return Promise.reject(l)});await n.update(o).catch(()=>{let l=L("Failed to update DRM license. This may be an issue with the player or your protected content."),d=new I(l,I.MEDIA_ERR_ENCRYPTED,!0);return d.errorCategory=te.DRM,d.muxCode=x.ENCRYPTED_UPDATE_LICENSE_FAILED,Promise.reject(d)})}catch(a){nt(e,a);return}})},On=({playbackId:t,tokens:{drm:e}={},customDomain:i=ei},a)=>{let r=yo(t);return`https://license.${i.toLocaleLowerCase().endsWith(ei)?i:ei}/license/${a}/${r}?token=${e}`},Dm=({playbackId:t,tokens:{drm:e}={},customDomain:i=ei},a)=>{let r=yo(t);return`https://license.${i.toLocaleLowerCase().endsWith(ei)?i:ei}/appcert/${a}/${r}?token=${e}`},Lm=({playbackId:t,src:e,customDomain:i})=>{if(t)return!0;if(typeof e!="string")return!1;let a=window?.location.href,r=new URL(e,a).hostname.toLocaleLowerCase();return r.includes(ei)||!!i&&r.includes(i.toLocaleLowerCase())},yb=(t,e,i)=>{var a;let{envKey:r,disableTracking:n,muxDataSDK:s=Id,muxDataSDKOptions:o={}}=t,l=Lm(t);if(!n&&(r||l)){let{playerInitTime:d,playerSoftwareName:m,playerSoftwareVersion:p,beaconCollectionDomain:h,debug:c,disableCookies:v}=t,g={...t.metadata,video_title:((a=t?.metadata)==null?void 0:a.video_title)||void 0},_=y=>typeof y.player_error_code=="string"?!1:typeof t.errorTranslator=="function"?t.errorTranslator(y):y;s.monitor(e,{debug:c,beaconCollectionDomain:h,hlsjs:i,Hls:i?B:void 0,automaticErrorTracking:!1,errorTranslator:_,disableCookies:v,...o,data:{...r?{env_key:r}:{},player_software_name:m,player_software:m,player_software_version:p,player_init_time:d,...g}})}},Tb=(t,e,i)=>{var a,r;let n=Cm(t,e),{src:s,customDomain:o=ei}=t,l=()=>{e.ended||t.disablePseudoEnded||!Im(e,i)||(wm(e,i)?e.currentTime=e.buffered.end(e.buffered.length-1):e.dispatchEvent(new Event("ended")))},d,m,p=()=>{let h=Pd(e),c,v;h.length>0&&(c=h.start(0),v=h.end(0)),(m!==v||d!==c)&&e.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),d=c,m=v};if(ve(e,"durationchange",p),e&&n){let h=go(t);if(typeof s=="string"){if(s.endsWith(".mp4")&&s.includes(o)){let g=Nd(s),_=new URL(`https://stream.${o}/${g}/metadata.json`);xd(_.toString(),e)}let c=()=>{if(_l(e)!==Q.LIVE||Number.isFinite(e.duration))return;let g=setInterval(p,1e3);e.addEventListener("teardown",()=>{clearInterval(g)},{once:!0}),ve(e,"durationchange",()=>{Number.isFinite(e.duration)&&clearInterval(g)})},v=async()=>X_(s,e,h).then(c).catch(g=>{if(g instanceof Response){let _=Ys(g,te.VIDEO,t);if(_){nt(e,_);return}}});if(e.preload==="none"){let g=()=>{v(),e.removeEventListener("loadedmetadata",_)},_=()=>{v(),e.removeEventListener("play",g)};ve(e,"play",g,{once:!0}),ve(e,"loadedmetadata",_,{once:!0})}else v();(a=t.tokens)!=null&&a.drm?gb(t,e):ve(e,"encrypted",()=>{let g=L("Attempting to play DRM-protected content without providing a DRM token."),_=new I(g,I.MEDIA_ERR_ENCRYPTED,!0);_.errorCategory=te.DRM,_.muxCode=x.ENCRYPTED_MISSING_TOKEN,nt(e,_)},{once:!0}),e.setAttribute("src",s),t.startTime&&(((r=le.get(e))!=null?r:{}).startTime=t.startTime,e.addEventListener("durationchange",Mm,{once:!0}))}else e.removeAttribute("src");e.addEventListener("error",xm),e.addEventListener("error",bl),e.addEventListener("emptied",()=>{e.querySelectorAll("track[data-removeondestroy]").forEach(c=>{c.remove()})},{once:!0}),ve(e,"pause",l),ve(e,"seeked",l),ve(e,"play",()=>{e.ended||Sm(e.currentTime,e.duration)&&(e.currentTime=e.seekable.length?e.seekable.start(0):0)})}else i&&s?(i.once(B.Events.LEVEL_LOADED,(h,c)=>{eb(c.details,e,i),p(),_l(e)===Q.LIVE&&!Number.isFinite(e.duration)&&(i.on(B.Events.LEVEL_UPDATED,p),ve(e,"durationchange",()=>{Number.isFinite(e.duration)&&i.off(B.Events.LEVELS_UPDATED,p)}))}),i.on(B.Events.ERROR,(h,c)=>{var v,g;let _=Ab(c,t);if(_.muxCode===x.NETWORK_NOT_READY){let y=(v=le.get(e))!=null?v:{},T=(g=y.retryCount)!=null?g:0;if(T<6){let E=T===0?5e3:6e4,k=new I(`Retrying in ${E/1e3} seconds...`,_.code,_.fatal);Object.assign(k,_),nt(e,k),setTimeout(()=>{y.retryCount=T+1,c.details==="manifestLoadError"&&c.url&&i.loadSource(c.url)},E);return}else{y.retryCount=0;let E=new I('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>',_.code,_.fatal);Object.assign(E,_),nt(e,E);return}}nt(e,_)}),i.on(B.Events.MANIFEST_LOADED,()=>{let h=le.get(e);h&&h.error&&(h.error=null,h.retryCount=0,e.dispatchEvent(new Event("emptied")),e.dispatchEvent(new Event("loadstart")))}),e.addEventListener("error",bl),ve(e,"waiting",l),M_(t,i),x_(e,i),i.attachMedia(e)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function Mm(t){var e;let i=t.target,a=(e=le.get(i))==null?void 0:e.startTime;if(a&&g_(i.seekable,i.duration,a)){let r=i.preload==="auto";r&&(i.preload="none"),i.currentTime=a,r&&(i.preload="auto")}}async function xm(t){if(!t.isTrusted)return;t.stopImmediatePropagation();let e=t.target;if(!(e!=null&&e.error))return;let{message:i,code:a}=e.error,r=new I(i,a);if(e.src&&a===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&e.readyState===HTMLMediaElement.HAVE_NOTHING){setTimeout(()=>{var n;let s=(n=km(e))!=null?n:e.error;s?.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED&&nt(e,r)},500);return}if(e.src&&(a!==I.MEDIA_ERR_DECODE||a!==void 0))try{let{status:n}=await fetch(e.src);r.data={response:{code:n}}}catch{}nt(e,r)}function nt(t,e){var i;e.fatal&&(((i=le.get(t))!=null?i:{}).error=e,t.dispatchEvent(new CustomEvent("error",{detail:e})))}function bl(t){var e,i;if(!(t instanceof CustomEvent)||!(t.detail instanceof I))return;let a=t.target,r=t.detail;!r||!r.fatal||(((e=le.get(a))!=null?e:{}).error=r,(i=a.mux)==null||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}var Ab=(t,e)=>{var i,a,r;console.error("getErrorFromHlsErrorData()",t);let n={[B.ErrorTypes.NETWORK_ERROR]:I.MEDIA_ERR_NETWORK,[B.ErrorTypes.MEDIA_ERROR]:I.MEDIA_ERR_DECODE,[B.ErrorTypes.KEY_SYSTEM_ERROR]:I.MEDIA_ERR_ENCRYPTED},s=m=>[B.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,B.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(m.details)?I.MEDIA_ERR_NETWORK:n[m.type],o=m=>{if(m.type===B.ErrorTypes.KEY_SYSTEM_ERROR)return te.DRM;if(m.type===B.ErrorTypes.NETWORK_ERROR)return te.VIDEO},l,d=s(t);if(d===I.MEDIA_ERR_NETWORK&&t.response){let m=(i=o(t))!=null?i:te.VIDEO;l=(a=Ys(t.response,m,e,t.fatal))!=null?a:new I("",d,t.fatal)}else if(d===I.MEDIA_ERR_ENCRYPTED)if(t.details===B.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE){let m=L("Attempting to play DRM-protected content without providing a DRM token.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_MISSING_TOKEN}else if(t.details===B.ErrorDetails.KEY_SYSTEM_NO_ACCESS){let m=L("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM}else if(t.details===B.ErrorDetails.KEY_SYSTEM_NO_SESSION){let m=L("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,!0),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_GENERATE_REQUEST_FAILED}else if(t.details===B.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED){let m=L("Failed to update DRM license. This may be an issue with the player or your protected content.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_UPDATE_LICENSE_FAILED}else if(t.details===B.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED){let m=L("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_UPDATE_SERVER_CERT_FAILED}else if(t.details===B.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR){let m=L("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_CDM_ERROR}else if(t.details===B.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED){let m=L("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");l=new I(m,I.MEDIA_ERR_ENCRYPTED,!1),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_OUTPUT_RESTRICTED}else l=new I(t.error.message,I.MEDIA_ERR_ENCRYPTED,t.fatal),l.errorCategory=te.DRM,l.muxCode=x.ENCRYPTED_ERROR;else l=new I("",d,t.fatal);return l.context||(l.context=`${t.url?`url: ${t.url}
`:""}${t.response&&(t.response.code||t.response.text)?`response: ${t.response.code}, ${t.response.text}
`:""}${t.reason?`failure reason: ${t.reason}
`:""}${t.level?`level: ${t.level}
`:""}${t.parent?`parent stream controller: ${t.parent}
`:""}${t.buffer?`buffer length: ${t.buffer}
`:""}${t.error?`error: ${t.error}
`:""}${t.event?`event: ${t.event}
`:""}${t.err?`error message: ${(r=t.err)==null?void 0:r.message}
`:""}`),l.data=t,l},Om=t=>{throw TypeError(t)},Ud=(t,e,i)=>e.has(t)||Om("Cannot "+i),Ce=(t,e,i)=>(Ud(t,e,"read from private field"),i?i.call(t):e.get(t)),ut=(t,e,i)=>e.has(t)?Om("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),it=(t,e,i,a)=>(Ud(t,e,"write to private field"),e.set(t,i),i),qo=(t,e,i)=>(Ud(t,e,"access private method"),i),kb=()=>{try{return"0.27.2"}catch{}return"UNKNOWN"},Sb=kb(),wb=()=>Sb,Ib=`
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`,b={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended",DRM_TOKEN:"drm-token",PLAYBACK_TOKEN:"playback-token",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",ASSET_START_TIME:"asset-start-time",ASSET_END_TIME:"asset-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PLAYER_INIT_TIME:"player-init-time",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type",LOGO:"logo"},Rb=Object.values(b),Ic=wb(),Rc="mux-video",wt,fr,Nn,Er,Pn,$n,Un,Hn,Bn,_r,br,Wn,Cb=class extends pn{constructor(){super(),ut(this,br),ut(this,wt),ut(this,fr),ut(this,Nn),ut(this,Er,{}),ut(this,Pn,{}),ut(this,$n),ut(this,Un),ut(this,Hn),ut(this,Bn),ut(this,_r,""),it(this,Nn,Od()),this.nativeEl.addEventListener("muxmetadata",e=>{var i;let a=db(this.nativeEl),r=(i=this.metadata)!=null?i:{};this.metadata={...a,...r},a?.["com.mux.video.branding"]==="mux-free-plan"&&(it(this,_r,"default"),this.updateLogo())})}static get NAME(){return Rc}static get VERSION(){return Ic}static get observedAttributes(){var e;return[...Rb,...(e=pn.observedAttributes)!=null?e:[]]}static getLogoHTML(e){return!e||e==="false"?"":e==="default"?Ib:`<img part="logo" src="${e}" />`}static getTemplateHTML(e={}){var i;return`
      ${pn.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i=e[b.LOGO])!=null?i:"")}
      </slot>
    `}get preferCmcd(){var e;return(e=this.getAttribute(b.PREFER_CMCD))!=null?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?qs.includes(e)?this.setAttribute(b.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${qs.join()}`):this.removeAttribute(b.PREFER_CMCD))}get playerInitTime(){return this.hasAttribute(b.PLAYER_INIT_TIME)?+this.getAttribute(b.PLAYER_INIT_TIME):Ce(this,Nn)}set playerInitTime(e){e!=this.playerInitTime&&(e==null?this.removeAttribute(b.PLAYER_INIT_TIME):this.setAttribute(b.PLAYER_INIT_TIME,`${+e}`))}get playerSoftwareName(){var e;return(e=Ce(this,Hn))!=null?e:Rc}set playerSoftwareName(e){it(this,Hn,e)}get playerSoftwareVersion(){var e;return(e=Ce(this,Un))!=null?e:Ic}set playerSoftwareVersion(e){it(this,Un,e)}get _hls(){var e;return(e=Ce(this,wt))==null?void 0:e.engine}get mux(){var e;return(e=this.nativeEl)==null?void 0:e.mux}get error(){var e;return(e=km(this.nativeEl))!=null?e:null}get errorTranslator(){return Ce(this,Bn)}set errorTranslator(e){it(this,Bn,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(e==null?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return(e=this.getAttribute(b.TYPE))!=null?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(b.TYPE,e):this.removeAttribute(b.TYPE))}get preload(){let e=this.getAttribute("preload");return e===""?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return this.getAttribute(b.DEBUG)!=null}set debug(e){e!==this.debug&&(e?this.setAttribute(b.DEBUG,""):this.removeAttribute(b.DEBUG))}get disableTracking(){return this.hasAttribute(b.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(b.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(b.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(b.DISABLE_COOKIES,""):this.removeAttribute(b.DISABLE_COOKIES))}get disablePseudoEnded(){return this.hasAttribute(b.DISABLE_PSEUDO_ENDED)}set disablePseudoEnded(e){e!==this.disablePseudoEnded&&(e?this.setAttribute(b.DISABLE_PSEUDO_ENDED,""):this.removeAttribute(b.DISABLE_PSEUDO_ENDED))}get startTime(){let e=this.getAttribute(b.START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set startTime(e){e!==this.startTime&&(e==null?this.removeAttribute(b.START_TIME):this.setAttribute(b.START_TIME,`${e}`))}get playbackId(){var e;return this.hasAttribute(b.PLAYBACK_ID)?this.getAttribute(b.PLAYBACK_ID):(e=Nd(this.src))!=null?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(b.PLAYBACK_ID,e):this.removeAttribute(b.PLAYBACK_ID))}get maxResolution(){var e;return(e=this.getAttribute(b.MAX_RESOLUTION))!=null?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(b.MAX_RESOLUTION,e):this.removeAttribute(b.MAX_RESOLUTION))}get minResolution(){var e;return(e=this.getAttribute(b.MIN_RESOLUTION))!=null?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(b.MIN_RESOLUTION,e):this.removeAttribute(b.MIN_RESOLUTION))}get renditionOrder(){var e;return(e=this.getAttribute(b.RENDITION_ORDER))!=null?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(b.RENDITION_ORDER,e):this.removeAttribute(b.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(b.PROGRAM_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programStartTime(e){e==null?this.removeAttribute(b.PROGRAM_START_TIME):this.setAttribute(b.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(b.PROGRAM_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set programEndTime(e){e==null?this.removeAttribute(b.PROGRAM_END_TIME):this.setAttribute(b.PROGRAM_END_TIME,`${e}`)}get assetStartTime(){let e=this.getAttribute(b.ASSET_START_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetStartTime(e){e==null?this.removeAttribute(b.ASSET_START_TIME):this.setAttribute(b.ASSET_START_TIME,`${e}`)}get assetEndTime(){let e=this.getAttribute(b.ASSET_END_TIME);if(e==null)return;let i=+e;return Number.isNaN(i)?void 0:i}set assetEndTime(e){e==null?this.removeAttribute(b.ASSET_END_TIME):this.setAttribute(b.ASSET_END_TIME,`${e}`)}get customDomain(){var e;return(e=this.getAttribute(b.CUSTOM_DOMAIN))!=null?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(b.CUSTOM_DOMAIN,e):this.removeAttribute(b.CUSTOM_DOMAIN))}get drmToken(){var e;return(e=this.getAttribute(b.DRM_TOKEN))!=null?e:void 0}set drmToken(e){e!==this.drmToken&&(e?this.setAttribute(b.DRM_TOKEN,e):this.removeAttribute(b.DRM_TOKEN))}get playbackToken(){var e,i,a,r;if(this.hasAttribute(b.PLAYBACK_TOKEN))return(e=this.getAttribute(b.PLAYBACK_TOKEN))!=null?e:void 0;if(this.hasAttribute(b.PLAYBACK_ID)){let[,n]=Cd((i=this.playbackId)!=null?i:"");return(a=new URLSearchParams(n).get("token"))!=null?a:void 0}if(this.src)return(r=new URLSearchParams(this.src).get("token"))!=null?r:void 0}set playbackToken(e){e!==this.playbackToken&&(e?this.setAttribute(b.PLAYBACK_TOKEN,e):this.removeAttribute(b.PLAYBACK_TOKEN))}get tokens(){let e=this.getAttribute(b.PLAYBACK_TOKEN),i=this.getAttribute(b.DRM_TOKEN);return{...Ce(this,Pn),...e!=null?{playback:e}:{},...i!=null?{drm:i}:{}}}set tokens(e){it(this,Pn,e??{})}get ended(){return Im(this.nativeEl,this._hls)}get envKey(){var e;return(e=this.getAttribute(b.ENV_KEY))!=null?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(b.ENV_KEY,e):this.removeAttribute(b.ENV_KEY))}get beaconCollectionDomain(){var e;return(e=this.getAttribute(b.BEACON_COLLECTION_DOMAIN))!=null?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(b.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(b.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return(e=this.getAttribute(b.STREAM_TYPE))!=null?e:_l(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(b.STREAM_TYPE,e):this.removeAttribute(b.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(b.TARGET_LIVE_WINDOW)?+this.getAttribute(b.TARGET_LIVE_WINDOW):ub(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(e==null?this.removeAttribute(b.TARGET_LIVE_WINDOW):this.setAttribute(b.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,i;if(this.hasAttribute(b.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:a}=this,r=(e=this.nativeEl.seekable.end(0))!=null?e:0,n=(i=this.nativeEl.seekable.start(0))!=null?i:0;return Math.max(n,r-a)}return cb(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(b.LIVE_EDGE_OFFSET))return+this.getAttribute(b.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.liveEdgeOffset&&(e==null?this.removeAttribute(b.LIVE_EDGE_OFFSET):this.setAttribute(b.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return Pd(this.nativeEl)}async addCuePoints(e){return fm(this.nativeEl,e)}get activeCuePoint(){return Em(this.nativeEl)}get cuePoints(){return N_(this.nativeEl)}async addChapters(e){return bm(this.nativeEl,e)}get activeChapter(){return gm(this.nativeEl)}get chapters(){return $_(this.nativeEl)}getStartDate(){return H_(this.nativeEl,this._hls)}get currentPdt(){return B_(this.nativeEl,this._hls)}get preferPlayback(){let e=this.getAttribute(b.PREFER_PLAYBACK);if(e===Ht.MSE||e===Ht.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===Ht.MSE||e===Ht.NATIVE?this.setAttribute(b.PREFER_PLAYBACK,e):this.removeAttribute(b.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![b.METADATA_URL].includes(e)).reduce((e,i)=>{let a=this.getAttribute(i);return a!=null&&(e[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),e},{}),...Ce(this,Er)}}set metadata(e){it(this,Er,e??{}),this.mux&&this.mux.emit("hb",Ce(this,Er))}get _hlsConfig(){return Ce(this,$n)}set _hlsConfig(e){it(this,$n,e)}get logo(){var e;return(e=this.getAttribute(b.LOGO))!=null?e:Ce(this,_r)}set logo(e){e?this.setAttribute(b.LOGO,e):this.removeAttribute(b.LOGO)}load(){it(this,wt,pb(this,this.nativeEl,Ce(this,wt)))}unload(){Rm(this.nativeEl,Ce(this,wt),this),it(this,wt,void 0)}attributeChangedCallback(e,i,a){var r,n;switch(pn.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,i,a),e){case b.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=a??void 0;break;case b.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=a??void 0;break;case"src":{let s=!!i,o=!!a;!s&&o?qo(this,br,Wn).call(this):s&&!o?this.unload():s&&o&&(this.unload(),qo(this,br,Wn).call(this));break}case"autoplay":if(a===i)break;(r=Ce(this,wt))==null||r.setAutoplay(this.autoplay);break;case"preload":if(a===i)break;(n=Ce(this,wt))==null||n.setPreload(a);break;case b.PLAYBACK_ID:this.src=El(this);break;case b.DEBUG:{let s=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=s);break}case b.METADATA_URL:a&&fetch(a).then(s=>s.json()).then(s=>this.metadata=s).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${a}!`));break;case b.STREAM_TYPE:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case b.TARGET_LIVE_WINDOW:(a==null||a!==i)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}));break;case b.LOGO:(a==null||a!==i)&&this.updateLogo();break}}updateLogo(){if(!this.shadowRoot)return;let e=this.shadowRoot.querySelector('slot[name="logo"]');if(!e)return;let i=this.constructor.getLogoHTML(Ce(this,_r)||this.logo);e.innerHTML=i}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.nativeEl&&this.src&&!Ce(this,wt)&&qo(this,br,Wn).call(this)}disconnectedCallback(){this.unload()}handleEvent(e){e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{composed:!0,detail:e.detail}))}};wt=new WeakMap,fr=new WeakMap,Nn=new WeakMap,Er=new WeakMap,Pn=new WeakMap,$n=new WeakMap,Un=new WeakMap,Hn=new WeakMap,Bn=new WeakMap,_r=new WeakMap,br=new WeakSet,Wn=async function(){Ce(this,fr)||(await it(this,fr,Promise.resolve()),it(this,fr,null),this.load())};const Gi=new WeakMap;class Yo extends Error{}class Db extends Error{}const Lb=["application/x-mpegURL","application/vnd.apple.mpegurl","audio/mpegurl"],Mb=globalThis.WeakRef?class extends Set{add(t){super.add(new WeakRef(t))}forEach(t){super.forEach(e=>{const i=e.deref();i&&t(i)})}}:Set;function xb(t){globalThis.chrome?.cast?.isAvailable?globalThis.cast?.framework?t():customElements.whenDefined("google-cast-button").then(t):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(t)}}function Ob(){return globalThis.chrome}function Nb(){const t="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome?.cast||document.querySelector(`script[src="${t}"]`))return;const e=document.createElement("script");e.src=t,document.head.append(e)}function gi(){return globalThis.cast?.framework?.CastContext.getInstance()}function Hd(){return gi()?.getCurrentSession()}function Bd(){return Hd()?.getSessionObj().media[0]}function Pb(t){return new Promise((e,i)=>{Bd().editTracksInfo(t,e,i)})}function $b(t){return new Promise((e,i)=>{Bd().getStatus(t,e,i)})}function Cc(t){return gi().setOptions({...Nm(),...t})}function Nm(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}function Ub(t){if(!t)return;const e=/\.([a-zA-Z0-9]+)(?:\?.*)?$/,i=t.match(e);return i?i[1]:null}function Hb(t){const e=t.split(`
`),i=[];for(let a=0;a<e.length;a++)if(e[a].trim().startsWith("#EXT-X-STREAM-INF")){const n=e[a+1]?e[a+1].trim():"";n&&!n.startsWith("#")&&i.push(n)}return i}function Bb(t){return t.split(`
`).find(a=>!a.trim().startsWith("#")&&a.trim()!=="")}async function Wb(t){try{const i=(await fetch(t,{method:"HEAD"})).headers.get("Content-Type");return Lb.some(a=>i===a)}catch(e){return console.error("Error while trying to get the Content-Type of the manifest",e),!1}}async function Fb(t){try{const e=await(await fetch(t)).text();let i=e;const a=Hb(e);if(a.length>0){const s=new URL(a[0],t).toString();i=await(await fetch(s)).text()}const r=Bb(i);return Ub(r)}catch(e){console.error("Error while trying to parse the manifest playlist",e);return}}const Fn=new Mb,ni=new WeakSet;let ye;xb(()=>{if(!globalThis.chrome?.cast?.isAvailable){console.debug("chrome.cast.isAvailable",globalThis.chrome?.cast?.isAvailable);return}ye||(ye=cast.framework,gi().addEventListener(ye.CastContextEventType.CAST_STATE_CHANGED,t=>{Fn.forEach(e=>Gi.get(e).onCastStateChanged?.(t))}),gi().addEventListener(ye.CastContextEventType.SESSION_STATE_CHANGED,t=>{Fn.forEach(e=>Gi.get(e).onSessionStateChanged?.(t))}),Fn.forEach(t=>Gi.get(t).init?.()))});let Dc=0;class Vb extends EventTarget{#t;#s;#i;#a;#e="disconnected";#r=!1;#o=new Set;#c=new WeakMap;constructor(e){super(),this.#t=e,Fn.add(this),Gi.set(this,{init:()=>this.#d(),onCastStateChanged:()=>this.#l(),onSessionStateChanged:()=>this.#p(),getCastPlayer:()=>this.#n}),this.#d()}get#n(){if(ni.has(this.#t))return this.#i}get state(){return this.#e}async watchAvailability(e){if(this.#t.disableRemotePlayback)throw new Yo("disableRemotePlayback attribute is present.");return this.#c.set(e,++Dc),this.#o.add(e),queueMicrotask(()=>e(this.#m())),Dc}async cancelWatchAvailability(e){if(this.#t.disableRemotePlayback)throw new Yo("disableRemotePlayback attribute is present.");e?this.#o.delete(e):this.#o.clear()}async prompt(){if(this.#t.disableRemotePlayback)throw new Yo("disableRemotePlayback attribute is present.");if(!globalThis.chrome?.cast?.isAvailable)throw new Db("The RemotePlayback API is disabled on this platform.");const e=ni.has(this.#t);ni.add(this.#t),Cc(this.#t.castOptions),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await gi().requestSession()}catch(i){if(e||ni.delete(this.#t),i==="cancel")return;throw new Error(i)}Gi.get(this.#t)?.loadOnPrompt?.()}#h(){ni.has(this.#t)&&(Object.entries(this.#a).forEach(([e,i])=>{this.#i.controller.removeEventListener(e,i)}),ni.delete(this.#t),this.#t.muted=this.#i.isMuted,this.#t.currentTime=this.#i.savedPlayerState.currentTime,this.#i.savedPlayerState.isPaused===!1&&this.#t.play())}#m(){const e=gi()?.getCastState();return e&&e!=="NO_DEVICES_AVAILABLE"}#l(){const e=gi().getCastState();if(ni.has(this.#t)&&e==="CONNECTING"&&(this.#e="connecting",this.dispatchEvent(new Event("connecting"))),!this.#r&&e?.includes("CONNECT")){this.#r=!0;for(let i of this.#o)i(!0)}else if(this.#r&&(!e||e==="NO_DEVICES_AVAILABLE")){this.#r=!1;for(let i of this.#o)i(!1)}}async#p(){const{SESSION_RESUMED:e}=ye.SessionState;if(gi().getSessionState()===e&&this.#t.castSrc===Bd()?.media.contentId){ni.add(this.#t),Object.entries(this.#a).forEach(([i,a])=>{this.#i.controller.addEventListener(i,a)});try{await $b(new chrome.cast.media.GetStatusRequest)}catch(i){console.error(i)}this.#a[ye.RemotePlayerEventType.IS_PAUSED_CHANGED](),this.#a[ye.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}}#d(){!ye||this.#s||(this.#s=!0,Cc(this.#t.castOptions),this.#t.textTracks.addEventListener("change",()=>this.#u()),this.#l(),this.#i=new ye.RemotePlayer,new ye.RemotePlayerController(this.#i),this.#a={[ye.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{e===!0?(this.#e="connected",this.dispatchEvent(new Event("connect"))):(this.#h(),this.#e="disconnected",this.dispatchEvent(new Event("disconnect")))},[ye.RemotePlayerEventType.DURATION_CHANGED]:()=>{this.#t.dispatchEvent(new Event("durationchange"))},[ye.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ye.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{this.#t.dispatchEvent(new Event("volumechange"))},[ye.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{this.#n?.isMediaLoaded&&this.#t.dispatchEvent(new Event("timeupdate"))},[ye.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{this.#t.dispatchEvent(new Event("resize"))},[ye.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{this.#t.dispatchEvent(new Event(this.paused?"pause":"play"))},[ye.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{this.#n?.playerState!==chrome.cast.media.PlayerState.PAUSED&&this.#t.dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[this.#n?.playerState]))},[ye.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{this.#n?.isMediaLoaded&&(await Promise.resolve(),this.#v())}})}#v(){this.#u()}async#u(){if(!this.#n)return;const i=(this.#i.mediaInfo?.tracks??[]).filter(({type:p})=>p===chrome.cast.media.TrackType.TEXT),a=[...this.#t.textTracks].filter(({kind:p})=>p==="subtitles"||p==="captions"),r=i.map(({language:p,name:h,trackId:c})=>{const{mode:v}=a.find(g=>g.language===p&&g.label===h)??{};return v?{mode:v,trackId:c}:!1}).filter(Boolean),s=r.filter(({mode:p})=>p!=="showing").map(({trackId:p})=>p),o=r.find(({mode:p})=>p==="showing"),l=Hd()?.getSessionObj().media[0]?.activeTrackIds??[];let d=l;if(l.length&&(d=d.filter(p=>!s.includes(p))),o?.trackId&&(d=[...d,o.trackId]),d=[...new Set(d)],!((p,h)=>p.length===h.length&&p.every(c=>h.includes(c)))(l,d))try{const p=new chrome.cast.media.EditTracksInfoRequest(d);await Pb(p)}catch(p){console.error(p)}}}const Kb=t=>class extends t{static observedAttributes=[...t.observedAttributes??[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"];#t={paused:!1};#s=Nm();#i;#a;get remote(){return this.#a?this.#a:Ob()?(this.disableRemotePlayback||Nb(),Gi.set(this,{loadOnPrompt:()=>this.#r()}),this.#a=new Vb(this)):super.remote}get#e(){return Gi.get(this.remote)?.getCastPlayer?.()}attributeChangedCallback(i,a,r){if(super.attributeChangedCallback(i,a,r),i==="cast-receiver"&&r){this.#s.receiverApplicationId=r;return}if(this.#e)switch(i){case"cast-stream-type":case"cast-src":this.load();break}}async#r(){this.#t.paused=super.paused,super.pause(),this.muted=super.muted;try{await this.load()}catch(i){console.error(i)}}async load(){if(!this.#e)return super.load();const i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType);i.customData=this.castCustomData;const a=[...this.querySelectorAll("track")].filter(({kind:o,src:l})=>l&&(o==="subtitles"||o==="captions")),r=[];let n=0;if(a.length&&(i.tracks=a.map(o=>{const l=++n;r.length===0&&o.track.mode==="showing"&&r.push(l);const d=new chrome.cast.media.Track(l,chrome.cast.media.TrackType.TEXT);return d.trackContentId=o.src,d.trackContentType="text/vtt",d.subtype=o.kind==="captions"?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,d.name=o.label,d.language=o.srclang,d})),this.castStreamType==="live"?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}],Wb(this.castSrc)){const o=await Fb(this.castSrc);o?.includes("m4s")||o?.includes("mp4")?(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.FMP4,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.FMP4):o?.includes("ts")&&(i.hlsSegmentFormat=chrome.cast.media.HlsSegmentFormat.TS,i.hlsVideoSegmentFormat=chrome.cast.media.HlsVideoSegmentFormat.TS)}const s=new chrome.cast.media.LoadRequest(i);s.currentTime=super.currentTime??0,s.autoplay=!this.#t.paused,s.activeTrackIds=r,await Hd()?.loadMedia(s),this.dispatchEvent(new Event("volumechange"))}play(){if(this.#e){this.#e.isPaused&&this.#e.controller?.playOrPause();return}return super.play()}pause(){if(this.#e){this.#e.isPaused||this.#e.controller?.playOrPause();return}super.pause()}get castOptions(){return this.#s}get castReceiver(){return this.getAttribute("cast-receiver")??void 0}set castReceiver(i){this.castReceiver!=i&&this.setAttribute("cast-receiver",`${i}`)}get castSrc(){return this.getAttribute("cast-src")??this.querySelector("source")?.src??this.currentSrc}set castSrc(i){this.castSrc!=i&&this.setAttribute("cast-src",`${i}`)}get castContentType(){return this.getAttribute("cast-content-type")??void 0}set castContentType(i){this.setAttribute("cast-content-type",`${i}`)}get castStreamType(){return this.getAttribute("cast-stream-type")??this.streamType??void 0}set castStreamType(i){this.setAttribute("cast-stream-type",`${i}`)}get castCustomData(){return this.#i}set castCustomData(i){const a=typeof i;if(!["object","undefined"].includes(a)){console.error(`castCustomData must be nullish or an object but value was of type ${a}`);return}this.#i=i}get readyState(){if(this.#e)switch(this.#e.playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return this.#e?this.#e.isPaused:super.paused}get muted(){return this.#e?this.#e?.isMuted:super.muted}set muted(i){if(this.#e){(i&&!this.#e.isMuted||!i&&this.#e.isMuted)&&this.#e.controller?.muteOrUnmute();return}super.muted=i}get volume(){return this.#e?this.#e?.volumeLevel??1:super.volume}set volume(i){if(this.#e){this.#e.volumeLevel=+i,this.#e.controller?.setVolumeLevel();return}super.volume=i}get duration(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.duration??NaN:super.duration}get currentTime(){return this.#e&&this.#e?.isMediaLoaded?this.#e?.currentTime??0:super.currentTime}set currentTime(i){if(this.#e){this.#e.currentTime=i,this.#e.controller?.seek();return}super.currentTime=i}};var Pm=t=>{throw TypeError(t)},$m=(t,e,i)=>e.has(t)||Pm("Cannot "+i),qb=(t,e,i)=>($m(t,e,"read from private field"),i?i.call(t):e.get(t)),Yb=(t,e,i)=>e.has(t)?Pm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Gb=(t,e,i,a)=>($m(t,e,"write to private field"),e.set(t,i),i),Um=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if(typeof DocumentFragment>"u"){class t extends Um{}globalThis.DocumentFragment=t}var Qb=class extends Um{},Zb={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Qb)}},jb={customElements:Zb},zb=typeof window>"u"||typeof globalThis.customElements>"u",Go=zb?jb:globalThis,Vn,Lc=class extends Kb(tf(Cb)){constructor(){super(...arguments),Yb(this,Vn)}get autoplay(){let t=this.getAttribute("autoplay");return t===null?!1:t===""?!0:t}set autoplay(t){let e=this.autoplay;t!==e&&(t?this.setAttribute("autoplay",typeof t=="string"?t:""):this.removeAttribute("autoplay"))}get muxCastCustomData(){return{mux:{playbackId:this.playbackId,minResolution:this.minResolution,maxResolution:this.maxResolution,renditionOrder:this.renditionOrder,customDomain:this.customDomain,tokens:{drm:this.drmToken},envKey:this.envKey,metadata:this.metadata,disableCookies:this.disableCookies,disableTracking:this.disableTracking,beaconCollectionDomain:this.beaconCollectionDomain,startTime:this.startTime,preferCmcd:this.preferCmcd}}}get castCustomData(){var t;return(t=qb(this,Vn))!=null?t:this.muxCastCustomData}set castCustomData(t){Gb(this,Vn,t)}};Vn=new WeakMap;Go.customElements.get("mux-video")||(Go.customElements.define("mux-video",Lc),Go.MuxVideoElement=Lc);const R={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},q={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Hm={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},Bm=Object.entries(Hm),u=Bm.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),Xb={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},ii=Bm.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...Xb});Object.entries(ii).reduce((t,[e,i])=>{const a=u[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const Jb=Object.entries(u).reduce((t,[e,i])=>{const a=ii[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),Ft={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Na={DISABLED:"disabled",SHOWING:"showing"},Qo={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},Ye={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},jt={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},eg={FULLSCREEN:"fullscreen"};function tg(t){return t?.map(ag).join(" ")}function ig(t){return t?.split(/\s+/).map(rg)}function ag(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function rg(t){if(t){const[e,i,a]=t.split(":");return{id:e,width:+i,height:+a}}}function ng(t){return t?.map(og).join(" ")}function sg(t){return t?.split(/\s+/).map(lg)}function og(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(n=>n!=null).join(":")}}function lg(t){if(t){const[e,i,a,r]=t.split(":");return{id:e,kind:i,language:a,label:r}}}function dg(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Wd(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}function Wm(t){return typeof t!="string"?!1:!isNaN(t)&&!isNaN(parseFloat(t))}const Fm=t=>new Promise(e=>setTimeout(e,t)),Mc=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ug=(t,e)=>{const i=t===1?Mc[e].singular:Mc[e].plural;return`${t} ${i}`},Ur=t=>{if(!Wd(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0);return`${[a.getHours(),a.getMinutes(),a.getSeconds()].map((o,l)=>o&&ug(o,l)).filter(o=>o).join(", ")}${i?" remaining":""}`};function Ti(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600);const s=Math.floor(e/60%60),o=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=a="0"),n=n>0||o>0?n+":":"",r=((n||s>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+n+r+a}const cg={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it."};var xc;const Zo={en:cg};let gl=((xc=globalThis.navigator)==null?void 0:xc.language)||"en";const hg=t=>{gl=t},mg=t=>{var e,i,a;const[r]=gl.split("-");return((e=Zo[gl])==null?void 0:e[t])||((i=Zo[r])==null?void 0:i[t])||((a=Zo.en)==null?void 0:a[t])||t},C=(t,e={})=>mg(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`);let Vm=class{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}};class Km extends Vm{}let Oc=class extends Km{constructor(){super(...arguments),this.role=null}};class pg{observe(){}unobserve(){}disconnect(){}}const qm={createElement:function(){return new Zr.HTMLElement},createElementNS:function(){return new Zr.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},Zr={ResizeObserver:pg,document:qm,Node:Km,Element:Oc,HTMLElement:class extends Oc{constructor(){super(...arguments),this.innerHTML=""}get content(){return new Zr.DocumentFragment}},DocumentFragment:class extends Vm{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},Ym=typeof window>"u"||typeof window.customElements>"u",Gm=Object.keys(Zr).every(t=>t in globalThis),f=Ym&&!Gm?Zr:globalThis,Te=Ym&&!Gm?qm:globalThis.document,Nc=new WeakMap,Fd=t=>{let e=Nc.get(t);return e||Nc.set(t,e=new Set),e},Qm=new f.ResizeObserver(t=>{for(const e of t)for(const i of Fd(e.target))i(e)});function Va(t,e){Fd(t).add(e),Qm.observe(t)}function Ka(t,e){const i=Fd(t);i.delete(e),i.size||Qm.unobserve(t)}function Xe(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Ue(t){var e;return(e=yl(t))!=null?e:ja(t,"media-controller")}function yl(t){var e;const{MEDIA_CONTROLLER:i}=q,a=t.getAttribute(i);if(a)return(e=To(t))==null?void 0:e.getElementById(a)}const Zm=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},vg=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},jm=(t,e)=>vg(t,e)[0],ri=(t,e)=>!t||!e?!1:t?.contains(e)?!0:ri(t,e.getRootNode().host),ja=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||ja(t.getRootNode().host,e)};function Vd(t=document){var e;const i=t?.activeElement;return i?(e=Vd(i.shadowRoot))!=null?e:i:null}function To(t){var e;const i=(e=t?.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function zm(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const n=getComputedStyle(r);if(i&&n.opacity==="0"||a&&n.visibility==="hidden"||n.display==="none")return!1;r=r.parentElement,e--}return!0}function fg(t,e,i,a){const r=a.x-i.x,n=a.y-i.y,s=r*r+n*n;if(s===0)return 0;const o=((t-i.x)*r+(e-i.y)*n)/s;return Math.max(0,Math.min(1,o))}function Ee(t,e){const i=Eg(t,a=>a===e);return i||Xm(t,e)}function Eg(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let n;try{n=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const s of n??[])if(e(s.selectorText))return s}}function Xm(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],n=r?.[r.length-1];return n?.sheet?(n?.sheet.insertRule(`${e}{}`,n.sheet.cssRules.length),(a=n.sheet.cssRules)==null?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function ie(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function de(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}ie(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function W(t,e){return t.hasAttribute(e)}function F(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}W(t,e)!=i&&t.toggleAttribute(e,i)}function ae(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function re(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;ae(t,e,void 0)!==a&&t.setAttribute(e,a)}var Jm=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},si=(t,e,i)=>(Jm(t,e,"read from private field"),i?i.call(t):e.get(t)),_g=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},fn=(t,e,i,a)=>(Jm(t,e,"write to private field"),e.set(t,i),i),Pe;function bg(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Ao extends f.HTMLElement{constructor(){if(super(),_g(this,Pe,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===q.MEDIA_CONTROLLER&&(i&&((n=(r=si(this,Pe))==null?void 0:r.unassociateElement)==null||n.call(r,this),fn(this,Pe,null)),a&&this.isConnected&&(fn(this,Pe,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=si(this,Pe))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a,r;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),fn(this,Pe,gg(this)),this.getAttribute(q.MEDIA_CONTROLLER)&&((i=(e=si(this,Pe))==null?void 0:e.associateElement)==null||i.call(e,this)),(a=si(this,Pe))==null||a.addEventListener("pointerdown",this),(r=si(this,Pe))==null||r.addEventListener("click",this)}disconnectedCallback(){var e,i,a,r;this.getAttribute(q.MEDIA_CONTROLLER)&&((i=(e=si(this,Pe))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=si(this,Pe))==null||a.removeEventListener("pointerdown",this),(r=si(this,Pe))==null||r.removeEventListener("click",this),fn(this,Pe,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a?.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:n,clientY:s}=e,{left:o,top:l,width:d,height:m}=this.getBoundingClientRect(),p=n-o,h=s-l;if(p<0||h<0||p>d||h>m||d===0&&m===0)return;const c=this._pointerType||"mouse";if(this._pointerType=void 0,c===Qo.TOUCH){this.handleTap(e);return}else if(c===Qo.MOUSE||c===Qo.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){F(this,u.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(i,{composed:!0,bubbles:!0}))}}Pe=new WeakMap;Ao.shadowRootOptions={mode:"open"};Ao.getTemplateHTML=bg;function gg(t){var e;const i=t.getAttribute(q.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):ja(t,"media-controller")}f.customElements.get("media-gesture-receiver")||f.customElements.define("media-gesture-receiver",Ao);var Pc=Ao,Kd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},je=(t,e,i)=>(Kd(t,e,"read from private field"),i?i.call(t):e.get(t)),Ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Di=(t,e,i,a)=>(Kd(t,e,"write to private field"),e.set(t,i),i),st=(t,e,i)=>(Kd(t,e,"access private method"),i),Gs,ca,jr,Ca,Kn,Tl,ep,gr,qn,Al,tp,kl,ip,zr,ko,So,qd,qa,Xr;const M={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function yg(t){return`
    <style>
      
      :host([${u.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${M.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${M.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${M.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${M.AUDIO}])[${M.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${M.AUDIO}])[${M.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${M.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${M.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${M.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${M.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${M.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${M.USER_INACTIVE}]:not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_AIRPLAYING}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${M.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${M.USER_INACTIVE}]:not([${M.NO_AUTOHIDE}]):not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${M.USER_INACTIVE}][${M.AUTOHIDE_OVER_CONTROLS}]:not([${M.NO_AUTOHIDE}]):not([${u.MEDIA_PAUSED}]):not([${u.MEDIA_IS_CASTING}]):not([${M.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${M.AUDIO}])[${u.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Pc.shadowRootOptions.mode}">
          ${Pc.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const Tg=Object.values(u),Ag="sm:384 md:576 lg:768 xl:960";function kg(t){ap(t.target,t.contentRect.width)}function ap(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(M.BREAKPOINTS))!=null?i:Ag,r=Sg(a),n=wg(r,e);let s=!1;if(Object.keys(r).forEach(o=>{if(n.includes(o)){t.hasAttribute(`breakpoint${o}`)||(t.setAttribute(`breakpoint${o}`,""),s=!0);return}t.hasAttribute(`breakpoint${o}`)&&(t.removeAttribute(`breakpoint${o}`),s=!0)}),s){const o=new CustomEvent(ii.BREAKPOINTS_CHANGE,{detail:n});t.dispatchEvent(o)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(ii.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function Sg(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function wg(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class wo extends f.HTMLElement{constructor(){if(super(),Ge(this,Tl),Ge(this,Al),Ge(this,kl),Ge(this,zr),Ge(this,So),Ge(this,qa),Ge(this,Gs,0),Ge(this,ca,null),Ge(this,jr,null),Ge(this,Ca,void 0),this.breakpointsComputed=!1,Ge(this,Kn,new MutationObserver(st(this,Tl,ep).bind(this))),Ge(this,gr,!1),Ge(this,qn,i=>{je(this,gr)||(setTimeout(()=>{kg(i),Di(this,gr,!1)},0),Di(this,gr,!0))}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const i=Xe(this.attributes),a=this.constructor.getTemplateHTML(i);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(a):this.shadowRoot.innerHTML=a}const e=this.querySelector(":scope > slot[slot=media]");e&&e.addEventListener("slotchange",()=>{if(!e.assignedElements({flatten:!0}).length){je(this,ca)&&this.mediaUnsetCallback(je(this,ca));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[M.AUTOHIDE,M.GESTURES_DISABLED].concat(Tg).filter(e=>![u.MEDIA_RENDITION_LIST,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_CHAPTERS_CUES,u.MEDIA_WIDTH,u.MEDIA_HEIGHT,u.MEDIA_ERROR,u.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==M.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return e?.nodeName=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(Di(this,ca,e),e.localName.includes("-")&&await f.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;je(this,Kn).observe(this,{childList:!0,subtree:!0}),Va(this,je(this,qn));const i=this.getAttribute(M.AUDIO)!=null,a=C(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(M.USER_INACTIVE,""),ap(this,this.getBoundingClientRect().width),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=f.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;je(this,Kn).disconnect(),Ka(this,je(this,qn)),this.media&&this.mediaUnsetCallback(this.media),(e=f.window)==null||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){Di(this,ca,null)}handleEvent(e){switch(e.type){case"pointerdown":Di(this,Gs,e.timeStamp);break;case"pointermove":st(this,Al,tp).call(this,e);break;case"pointerup":st(this,kl,ip).call(this,e);break;case"mouseleave":st(this,zr,ko).call(this);break;case"mouseup":this.removeAttribute(M.KEYBOARD_CONTROL);break;case"keyup":st(this,qa,Xr).call(this),this.setAttribute(M.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);Di(this,Ca,isNaN(i)?0:i)}get autohide(){return(je(this,Ca)===void 0?2:je(this,Ca)).toString()}get breakpoints(){return ae(this,M.BREAKPOINTS)}set breakpoints(e){re(this,M.BREAKPOINTS,e)}get audio(){return W(this,M.AUDIO)}set audio(e){F(this,M.AUDIO,e)}get gesturesDisabled(){return W(this,M.GESTURES_DISABLED)}set gesturesDisabled(e){F(this,M.GESTURES_DISABLED,e)}get keyboardControl(){return W(this,M.KEYBOARD_CONTROL)}set keyboardControl(e){F(this,M.KEYBOARD_CONTROL,e)}get noAutohide(){return W(this,M.NO_AUTOHIDE)}set noAutohide(e){F(this,M.NO_AUTOHIDE,e)}get autohideOverControls(){return W(this,M.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){F(this,M.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return W(this,M.USER_INACTIVE)}set userInteractive(e){F(this,M.USER_INACTIVE,e)}}Gs=new WeakMap;ca=new WeakMap;jr=new WeakMap;Ca=new WeakMap;Kn=new WeakMap;Tl=new WeakSet;ep=function(t){const e=this.media;for(const i of t){if(i.type!=="childList")continue;const a=i.removedNodes;for(const r of a){if(r.slot!="media"||i.target!=this)continue;let n=i.previousSibling&&i.previousSibling.previousElementSibling;if(!n||!e)this.mediaUnsetCallback(r);else{let s=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(s=!1);s&&this.mediaUnsetCallback(r)}}if(e)for(const r of i.addedNodes)r===e&&this.handleMediaUpdated(e)}};gr=new WeakMap;qn=new WeakMap;Al=new WeakSet;tp=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-je(this,Gs)<250)return;st(this,So,qd).call(this),clearTimeout(je(this,jr));const e=this.hasAttribute(M.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&st(this,qa,Xr).call(this)};kl=new WeakSet;ip=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(M.USER_INACTIVE);[this,this.media].includes(t.target)&&e?st(this,zr,ko).call(this):st(this,qa,Xr).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e?.localName))&&st(this,qa,Xr).call(this)};zr=new WeakSet;ko=function(){if(je(this,Ca)<0||this.hasAttribute(M.USER_INACTIVE))return;this.setAttribute(M.USER_INACTIVE,"");const t=new f.CustomEvent(ii.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};So=new WeakSet;qd=function(){if(!this.hasAttribute(M.USER_INACTIVE))return;this.removeAttribute(M.USER_INACTIVE);const t=new f.CustomEvent(ii.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};qa=new WeakSet;Xr=function(){st(this,So,qd).call(this),clearTimeout(je(this,jr));const t=parseInt(this.autohide);t<0||Di(this,jr,setTimeout(()=>{st(this,zr,ko).call(this)},t*1e3))};wo.shadowRootOptions={mode:"open"};wo.getTemplateHTML=yg;f.customElements.get("media-container")||f.customElements.define("media-container",wo);var rp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},we=(t,e,i)=>(rp(t,e,"read from private field"),i?i.call(t):e.get(t)),ar=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},En=(t,e,i,a)=>(rp(t,e,"write to private field"),e.set(t,i),i),ha,ma,Qs,Fi,Qt,ui;class Yd{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){ar(this,Qt),ar(this,ha,void 0),ar(this,ma,void 0),ar(this,Qs,void 0),ar(this,Fi,new Set),En(this,ha,e),En(this,ma,i),En(this,Qs,new Set(a))}[Symbol.iterator](){return we(this,Qt,ui).values()}get length(){return we(this,Qt,ui).size}get value(){var e;return(e=[...we(this,Qt,ui)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(En(this,Fi,new Set),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...we(this,Qt,ui)][e]}values(){return we(this,Qt,ui).values()}forEach(e,i){we(this,Qt,ui).forEach(e,i)}add(...e){var i,a;e.forEach(r=>we(this,Fi).add(r)),!(this.value===""&&!((i=we(this,ha))!=null&&i.hasAttribute(`${we(this,ma)}`)))&&((a=we(this,ha))==null||a.setAttribute(`${we(this,ma)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>we(this,Fi).delete(a)),(i=we(this,ha))==null||i.setAttribute(`${we(this,ma)}`,`${this.value}`)}contains(e){return we(this,Qt,ui).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}ha=new WeakMap;ma=new WeakMap;Qs=new WeakMap;Fi=new WeakMap;Qt=new WeakSet;ui=function(){return we(this,Fi).size?we(this,Fi):we(this,Qs)};const Ig=(t="")=>t.split(/\s+/),np=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?Ft.CAPTIONS:Ft.SUBTITLES,language:i,label:r}},Io=(t="",e={})=>Ig(t).map(i=>{const a=np(i);return{...e,...a}}),sp=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?np(e):e):typeof t=="string"?Io(t):[t]:[],Sl=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Jr=(t=[])=>Array.prototype.map.call(t,Sl).join(" "),Rg=(t,e)=>i=>i[t]===e,op=t=>{const e=Object.entries(t).map(([i,a])=>Rg(i,a));return i=>e.every(a=>a(i))},Hr=(t,e=[],i=[])=>{const a=sp(i).map(op),r=n=>a.some(s=>s(n));Array.from(e).filter(r).forEach(n=>{n.mode=t})},Ro=(t,e=()=>!0)=>{if(!t?.textTracks)return[];const i=typeof e=="function"?e:op(e);return Array.from(t.textTracks).filter(i)},lp=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(u.MEDIA_SUBTITLES_SHOWING)},Cg=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const n=(e=a[r])==null?void 0:e.call(a);if(n instanceof Promise)return n.catch(()=>{})}else i?.webkitEnterFullscreen?i.webkitEnterFullscreen():i?.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},$c="exitFullscreen"in Te?"exitFullscreen":"webkitExitFullscreen"in Te?"webkitExitFullscreen":"webkitCancelFullScreen"in Te?"webkitCancelFullScreen":void 0,Dg=t=>{var e;const{documentElement:i}=t;if($c){const a=(e=i?.[$c])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},yr="fullscreenElement"in Te?"fullscreenElement":"webkitFullscreenElement"in Te?"webkitFullscreenElement":void 0,Lg=t=>{const{documentElement:e,media:i}=t,a=e?.[yr];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===eg.FULLSCREEN?i:a},Mg=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const n=Lg(t);if(!n)return!1;if(n===r||n===i)return!0;if(n.localName.includes("-")){let s=n.shadowRoot;if(!(yr in s))return ri(n,r);for(;s?.[yr];){if(s[yr]===r)return!0;s=(e=s[yr])==null?void 0:e.shadowRoot}}return!1},xg="fullscreenEnabled"in Te?"fullscreenEnabled":"webkitFullscreenEnabled"in Te?"webkitFullscreenEnabled":void 0,Og=t=>{const{documentElement:e,media:i}=t;return!!e?.[xg]||i&&"webkitSupportsFullscreen"in i};let _n;const Gd=()=>{var t,e;return _n||(_n=(e=(t=Te)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),_n)},Ng=async(t=Gd())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([Pg(t,i.signal),$g(t,e)]);return i.abort(),a},Pg=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),$g=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await Fm(10)}return t.volume!==e},Ug=/.*Version\/.*Safari\/.*/.test(f.navigator.userAgent),dp=(t=Gd())=>f.matchMedia("(display-mode: standalone)").matches&&Ug?!1:typeof t?.requestPictureInPicture=="function",up=(t=Gd())=>Og({documentElement:Te,media:t}),Hg=up(),Bg=dp(),Wg=!!f.WebKitPlaybackTargetAvailabilityEvent,Fg=!!f.chrome,Zs=t=>Ro(t.media,e=>[Ft.SUBTITLES,Ft.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),cp=t=>Ro(t.media,e=>e.mode===Na.SHOWING&&[Ft.SUBTITLES,Ft.CAPTIONS].includes(e.kind)),hp=(t,e)=>{const i=Zs(t),a=cp(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)Hr(Na.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let n=i[0];const{options:s}=t;if(!s?.noSubtitlesLangPref){const m=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),p=m?[m,...globalThis.navigator.languages]:globalThis.navigator.languages,h=i.filter(c=>p.some(v=>c.language.toLowerCase().startsWith(v.split("-")[0]))).sort((c,v)=>{const g=p.findIndex(y=>c.language.toLowerCase().startsWith(y.split("-")[0])),_=p.findIndex(y=>v.language.toLowerCase().startsWith(y.split("-")[0]));return g-_});h[0]&&(n=h[0])}const{language:o,label:l,kind:d}=n;Hr(Na.DISABLED,i,a),Hr(Na.SHOWING,i,[{language:o,label:l,kind:d}])}}},Qd=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?Vg(t,e):Object.entries(t).every(([i,a])=>i in e&&Qd(a,e[i])),Vg=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,n)=>Qd(r,e[n])):!0},Kg=Object.values(jt);let js;const qg=Ng().then(t=>(js=t,js)),Yg=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof f.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=f.customElements.get(i);a&&e instanceof a||(await f.customElements.whenDefined(i),f.customElements.upgrade(e))}))},Gg=new f.DOMParser,Qg=t=>t&&(Gg.parseFromString(t,"text/html").body.textContent||t),Tr={mediaError:{get(t,e){const{media:i}=t;if(e?.type!=="playing")return i?.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if(e?.type!=="playing")return(i=a?.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if(e?.type!=="playing")return(a=(i=r?.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i?.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i?.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i?.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i?.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i?.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i?.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=f.localStorage.getItem("media-chrome-pref-muted")!==null,n=i.hasAttribute("muted");if(a){r&&f.localStorage.removeItem("media-chrome-pref-muted");return}if(n&&!r)return;f.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=f.localStorage.getItem("media-chrome-pref-muted")==="true";Tr.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i?.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?f.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&f.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=f.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Tr.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof e?.volume>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i?.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Wd(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e?.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return e?.readyState<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i?.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i?.buffered)!=null?e:[];return Array.from(a).map((r,n)=>[Number(a.start(n).toFixed(3)),Number(a.end(n).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[jt.LIVE,jt.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(Kg.includes(r))return r===jt.UNKNOWN?a:r;const n=e.duration;return n===1/0?jt.LIVE:Number.isFinite(n)?jt.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Tr.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===jt.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Tr.mediaStreamType.get(t)===jt.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const n=r.end(r.length-1)-i;return e.currentTime>=n},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return Zs(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return cp(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:n}=e;if(!r)return;const s=o=>{var l;!n.defaultSubtitles||o&&![Ft.CAPTIONS,Ft.SUBTITLES].includes((l=o?.track)==null?void 0:l.kind)||hp(e,!0)};return r.addEventListener("loadstart",s),(i=r.textTracks)==null||i.addEventListener("addtrack",s),(a=r.textTracks)==null||a.addEventListener("removetrack",s),()=>{var o,l;r.removeEventListener("loadstart",s),(o=r.textTracks)==null||o.removeEventListener("addtrack",s),(l=r.textTracks)==null||l.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=Ro(i,{kind:Ft.CHAPTERS});return Array.from((e=a?.cues)!=null?e:[]).map(({text:r,startTime:n,endTime:s})=>({text:Qg(r),startTime:n,endTime:s}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),n=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r?.addEventListener("load",t),n?.addEventListener("load",t),()=>{r?.removeEventListener("load",t),n?.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?ri(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let n=r.pictureInPictureElement.shadowRoot;for(;n?.pictureInPictureElement;){if(n.pictureInPictureElement===a)return!0;n=(i=n.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!Te.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const n=()=>{i.removeEventListener("loadedmetadata",s),i.preload="none"},s=()=>{i.requestPictureInPicture().catch(a),n()};i.addEventListener("loadedmetadata",s),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),n()},1e3)}else throw r}else throw r})}else Te.pictureInPictureElement&&Te.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i?.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r?.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!i?.videoRenditions){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,n=>n.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i?.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a?.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!i?.audioTracks){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return Mg(t)},set(t,e,i){var a;t?(Cg(e),i.detail&&((a=e.media)==null||a.focus())):Dg(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!i?.remote||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:!!i.remote.state},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&f.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!Hg||!up(e))return Ye.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!Bg||!dp(e))return Ye.UNSUPPORTED;if(e?.disablePictureInPicture)return Ye.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(js===!1||e?.volume==null)return Ye.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{js==null&&qg.then(e=>t(e?void 0:Ye.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!Fg||!((i=a?.remote)!=null&&i.state))return Ye.UNSUPPORTED;if(!(e==null||e==="available"))return Ye.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!Wg)return Ye.UNSUPPORTED;if(e?.availability==="not-available")return Ye.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a?.remote)==null||i.watchAvailability(n=>{t({availability:n?"available":"not-available"})}).catch(n=>{n.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var n;(n=a?.remote)==null||n.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!i?.videoRenditions)return Ye.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return Ye.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!a?.audioTracks)return Ye.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return Ye.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Zg={[R.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,n;const{media:s}=e,o=i??void 0;let l,d;if(s&&o!=null){const[c]=Ro(s,{kind:Ft.METADATA,label:"thumbnails"}),v=Array.prototype.find.call((a=c?.cues)!=null?a:[],(g,_,y)=>_===0?g.endTime>o:_===y.length-1?g.startTime<=o:g.startTime<=o&&g.endTime>o);if(v){const g=/'^(?:[a-z]+:)?\/\//i.test(v.text)||(r=s?.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,_=new URL(v.text,g);d=new URLSearchParams(_.hash).get("#xywh").split(",").map(T=>+T),l=_.href}}const m=t.mediaDuration.get(e);let h=(n=t.mediaChaptersCues.get(e).find((c,v,g)=>v===g.length-1&&m===c.endTime?c.startTime<=o&&c.endTime>=o:c.startTime<=o&&c.endTime>o))==null?void 0:n.text;return i!=null&&h==null&&(h=""),{mediaPreviewTime:o,mediaPreviewImage:l,mediaPreviewCoords:d,mediaPreviewChapter:h}},[R.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[R.MEDIA_PLAY_REQUEST](t,e){var i,a,r,n;const s="mediaPaused",l=t.mediaStreamType.get(e)===jt.LIVE,d=!((i=e.options)!=null&&i.noAutoSeekToLive),m=t.mediaTargetLiveWindow.get(e)>0;if(l&&d&&!m){const p=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(p){const h=(n=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?n:0,c=p-h;t.mediaCurrentTime.set(c,e)}}t[s].set(!1,e)},[R.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[R.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[R.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[R.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[R.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[R.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const n="mediaCurrentTime",s=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(s)))return;const o=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,l=s-o;t[n].set(l,e)},[R.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,n=Zs(e),s=sp(i),o=(a=s[0])==null?void 0:a.language;o&&!r.noSubtitlesLangPref&&f.localStorage.setItem("media-chrome-pref-subtitles-lang",o),Hr(Na.SHOWING,n,s)},[R.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=Zs(e),r=i??[];Hr(Na.DISABLED,a,r)},[R.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){hp(e,i)},[R.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[R.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[R.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[R.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[R.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[R.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[R.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[R.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},jg=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Tr,requestMap:r=Zg,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{const o=[],l={options:{...n}};let d=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const m=g=>{g!=null&&(Qd(g,d)||(d=Object.freeze({...d,...g}),o.forEach(_=>_(d))))},p=()=>{const g=Object.entries(a).reduce((_,[y,{get:T}])=>(_[y]=T(l),_),{});m(g)},h={};let c;const v=async(g,_)=>{var y,T,E,k,D,O,H,Y,X,V,P,Le,Be,We,he,Oe;const yt=!!c;if(c={...l,...c??{},...g},yt)return;await Yg(...Object.values(g));const Ne=o.length>0&&_===0&&s,lt=l.media!==c.media,Fe=((y=l.media)==null?void 0:y.textTracks)!==((T=c.media)==null?void 0:T.textTracks),Ae=((E=l.media)==null?void 0:E.videoRenditions)!==((k=c.media)==null?void 0:k.videoRenditions),Ve=((D=l.media)==null?void 0:D.audioTracks)!==((O=c.media)==null?void 0:O.audioTracks),Je=((H=l.media)==null?void 0:H.remote)!==((Y=c.media)==null?void 0:Y.remote),ia=l.documentElement!==c.documentElement,mn=!!l.media&&(lt||Ne),Yu=!!((X=l.media)!=null&&X.textTracks)&&(Fe||Ne),Gu=!!((V=l.media)!=null&&V.videoRenditions)&&(Ae||Ne),Qu=!!((P=l.media)!=null&&P.audioTracks)&&(Ve||Ne),Zu=!!((Le=l.media)!=null&&Le.remote)&&(Je||Ne),ju=!!l.documentElement&&(ia||Ne),zu=mn||Yu||Gu||Qu||Zu||ju,aa=o.length===0&&_===1&&s,Xu=!!c.media&&(lt||aa),Ju=!!((Be=c.media)!=null&&Be.textTracks)&&(Fe||aa),ec=!!((We=c.media)!=null&&We.videoRenditions)&&(Ae||aa),tc=!!((he=c.media)!=null&&he.audioTracks)&&(Ve||aa),ic=!!((Oe=c.media)!=null&&Oe.remote)&&(Je||aa),ac=!!c.documentElement&&(ia||aa),rc=Xu||Ju||ec||tc||ic||ac;if(!(zu||rc)){Object.entries(c).forEach(([J,er])=>{l[J]=er}),p(),c=void 0;return}Object.entries(a).forEach(([J,{get:er,mediaEvents:Gv=[],textTracksEvents:Qv=[],videoRenditionsEvents:Zv=[],audioTracksEvents:jv=[],remoteEvents:zv=[],rootEvents:Xv=[],stateOwnersUpdateHandlers:Jv=[]}])=>{h[J]||(h[J]={});const Ke=ue=>{const qe=er(l,ue);m({[J]:qe})};let ke;ke=h[J].mediaEvents,Gv.forEach(ue=>{ke&&mn&&(l.media.removeEventListener(ue,ke),h[J].mediaEvents=void 0),Xu&&(c.media.addEventListener(ue,Ke),h[J].mediaEvents=Ke)}),ke=h[J].textTracksEvents,Qv.forEach(ue=>{var qe,dt;ke&&Yu&&((qe=l.media.textTracks)==null||qe.removeEventListener(ue,ke),h[J].textTracksEvents=void 0),Ju&&((dt=c.media.textTracks)==null||dt.addEventListener(ue,Ke),h[J].textTracksEvents=Ke)}),ke=h[J].videoRenditionsEvents,Zv.forEach(ue=>{var qe,dt;ke&&Gu&&((qe=l.media.videoRenditions)==null||qe.removeEventListener(ue,ke),h[J].videoRenditionsEvents=void 0),ec&&((dt=c.media.videoRenditions)==null||dt.addEventListener(ue,Ke),h[J].videoRenditionsEvents=Ke)}),ke=h[J].audioTracksEvents,jv.forEach(ue=>{var qe,dt;ke&&Qu&&((qe=l.media.audioTracks)==null||qe.removeEventListener(ue,ke),h[J].audioTracksEvents=void 0),tc&&((dt=c.media.audioTracks)==null||dt.addEventListener(ue,Ke),h[J].audioTracksEvents=Ke)}),ke=h[J].remoteEvents,zv.forEach(ue=>{var qe,dt;ke&&Zu&&((qe=l.media.remote)==null||qe.removeEventListener(ue,ke),h[J].remoteEvents=void 0),ic&&((dt=c.media.remote)==null||dt.addEventListener(ue,Ke),h[J].remoteEvents=Ke)}),ke=h[J].rootEvents,Xv.forEach(ue=>{ke&&ju&&(l.documentElement.removeEventListener(ue,ke),h[J].rootEvents=void 0),ac&&(c.documentElement.addEventListener(ue,Ke),h[J].rootEvents=Ke)});const nc=h[J].stateOwnersUpdateHandlers;Jv.forEach(ue=>{nc&&zu&&nc(),rc&&(h[J].stateOwnersUpdateHandlers=ue(Ke,c))})}),Object.entries(c).forEach(([J,er])=>{l[J]=er}),p(),c=void 0};return v({media:t,fullscreenElement:e,documentElement:i,options:n}),{dispatch(g){const{type:_,detail:y}=g;if(r[_]&&d.mediaErrorCode==null){m(r[_](a,l,g));return}_==="mediaelementchangerequest"?v({media:y}):_==="fullscreenelementchangerequest"?v({fullscreenElement:y}):_==="documentelementchangerequest"?v({documentElement:y}):_==="optionschangerequest"&&(Object.entries(y??{}).forEach(([T,E])=>{l.options[T]=E}),p())},getState(){return d},subscribe(g){return v({},o.length+1),o.push(g),g(d),()=>{const _=o.indexOf(g);_>=0&&(v({},o.length-1),o.splice(_,1))}}}};var Zd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$=(t,e,i)=>(Zd(t,e,"read from private field"),i?i.call(t):e.get(t)),qt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},oi=(t,e,i,a)=>(Zd(t,e,"write to private field"),e.set(t,i),i),_i=(t,e,i)=>(Zd(t,e,"access private method"),i),Vi,Ar,G,kr,It,Yn,Gn,wl,Ya,en,Qn,Il;const mp=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c"],Uc=10,Hc=.025,S={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",SEEK_TO_LIVE_OFFSET:"seektoliveoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",LANG:"lang"};class pp extends wo{constructor(){super(),qt(this,Gn),qt(this,Ya),qt(this,Qn),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,qt(this,Vi,new Yd(this,S.HOTKEYS)),qt(this,Ar,void 0),qt(this,G,void 0),qt(this,kr,void 0),qt(this,It,void 0),qt(this,Yn,i=>{var a;(a=$(this,G))==null||a.dispatch(i)}),this.associateElement(this);let e={};oi(this,kr,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const n=a.toLowerCase(),s=new f.CustomEvent(Jb[n],{composed:!0,detail:r});this.dispatchEvent(s)}),e=i}),this.hasAttribute(S.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(S.NO_HOTKEYS,S.HOTKEYS,S.DEFAULT_STREAM_TYPE,S.DEFAULT_SUBTITLES,S.DEFAULT_DURATION,S.NO_MUTED_PREF,S.NO_VOLUME_PREF,S.LANG)}get mediaStore(){return $(this,G)}set mediaStore(e){var i,a;if($(this,G)&&((i=$(this,It))==null||i.call(this),oi(this,It,void 0)),oi(this,G,e),!$(this,G)&&!this.hasAttribute(S.NO_DEFAULT_STORE)){_i(this,Gn,wl).call(this);return}oi(this,It,(a=$(this,G))==null?void 0:a.subscribe($(this,kr)))}get fullscreenElement(){var e;return(e=$(this,Ar))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(S.FULLSCREEN_ELEMENT)&&this.removeAttribute(S.FULLSCREEN_ELEMENT),oi(this,Ar,e),(i=$(this,G))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return W(this,S.DEFAULT_SUBTITLES)}set defaultSubtitles(e){F(this,S.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return ae(this,S.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){re(this,S.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return ie(this,S.DEFAULT_DURATION)}set defaultDuration(e){de(this,S.DEFAULT_DURATION,e)}get noHotkeys(){return W(this,S.NO_HOTKEYS)}set noHotkeys(e){F(this,S.NO_HOTKEYS,e)}get keysUsed(){return ae(this,S.KEYS_USED)}set keysUsed(e){re(this,S.KEYS_USED,e)}get liveEdgeOffset(){return ie(this,S.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){de(this,S.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return W(this,S.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){F(this,S.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return W(this,S.NO_VOLUME_PREF)}set noVolumePref(e){F(this,S.NO_VOLUME_PREF,e)}get noMutedPref(){return W(this,S.NO_MUTED_PREF)}set noMutedPref(e){F(this,S.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return W(this,S.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){F(this,S.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return W(this,S.NO_DEFAULT_STORE)}set noDefaultStore(e){F(this,S.NO_DEFAULT_STORE,e)}attributeChangedCallback(e,i,a){var r,n,s,o,l,d,m,p,h,c,v;if(super.attributeChangedCallback(e,i,a),e===S.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(S.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===S.HOTKEYS)$(this,Vi).value=a;else if(e===S.DEFAULT_SUBTITLES&&a!==i)(r=$(this,G))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES)}});else if(e===S.DEFAULT_STREAM_TYPE)(s=$(this,G))==null||s.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(n=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?n:void 0}});else if(e===S.LIVE_EDGE_OFFSET)(o=$(this,G))==null||o.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?void 0:+this.getAttribute(S.LIVE_EDGE_OFFSET)}});else if(e===S.SEEK_TO_LIVE_OFFSET)(l=$(this,G))==null||l.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):void 0}});else if(e===S.NO_AUTO_SEEK_TO_LIVE)(d=$(this,G))==null||d.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE)}});else if(e===S.FULLSCREEN_ELEMENT){const g=a?(m=this.getRootNode())==null?void 0:m.getElementById(a):void 0;oi(this,Ar,g),(p=$(this,G))==null||p.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===S.LANG&&a!==i?(hg(a),(h=$(this,G))==null||h.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===S.NO_VOLUME_PREF&&a!==i?(c=$(this,G))==null||c.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF)}}):e===S.NO_MUTED_PREF&&a!==i&&((v=$(this,G))==null||v.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(S.NO_MUTED_PREF)}}))}connectedCallback(){var e,i;!$(this,G)&&!this.hasAttribute(S.NO_DEFAULT_STORE)&&_i(this,Gn,wl).call(this),(e=$(this,G))==null||e.dispatch({type:"documentelementchangerequest",detail:Te}),super.connectedCallback(),$(this,G)&&!$(this,It)&&oi(this,It,(i=$(this,G))==null?void 0:i.subscribe($(this,kr))),this.hasAttribute(S.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r;(e=super.disconnectedCallback)==null||e.call(this),$(this,G)&&((i=$(this,G))==null||i.dispatch({type:"documentelementchangerequest",detail:void 0}),(a=$(this,G))==null||a.dispatch({type:R.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),$(this,It)&&((r=$(this,It))==null||r.call(this),oi(this,It,void 0))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=$(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=$(this,G))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Fc(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),n=i0(e,a,r);Object.values(R).forEach(s=>{e.addEventListener(s,$(this,Yn))}),i.set(e,n)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(R).forEach(r=>{e.removeEventListener(r,$(this,Yn))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),$(this,G)&&Object.entries($(this,G).getState()).forEach(([r,n])=>{Fc([e],r,n)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",_i(this,Qn,Il))}disableHotkeys(){this.removeEventListener("keydown",_i(this,Qn,Il)),this.removeEventListener("keyup",_i(this,Ya,en))}get hotkeys(){return ae(this,S.HOTKEYS)}set hotkeys(e){re(this,S.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,n,s,o,l;const d=e.target;if(((r=(a=(i=d.getAttribute(S.KEYS_USED))==null?void 0:i.split(" "))!=null?a:d?.keysUsed)!=null?r:[]).map(v=>v==="Space"?" ":v).filter(Boolean).includes(e.key))return;let p,h,c;if(!$(this,Vi).contains(`no${e.key.toLowerCase()}`)&&!(e.key===" "&&$(this,Vi).contains("nospace")))switch(e.key){case" ":case"k":p=$(this,G).getState().mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new f.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"m":p=this.mediaStore.getState().mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST,this.dispatchEvent(new f.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"f":p=this.mediaStore.getState().mediaIsFullscreen?R.MEDIA_EXIT_FULLSCREEN_REQUEST:R.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new f.CustomEvent(p,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new f.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{const v=this.hasAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_BACKWARD_SEEK_OFFSET):Uc;h=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)-v,0),c=new f.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(c);break}case"ArrowRight":{const v=this.hasAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(S.KEYBOARD_FORWARD_SEEK_OFFSET):Uc;h=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)+v,0),c=new f.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(c);break}case"ArrowUp":{const v=this.hasAttribute(S.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_UP_VOLUME_STEP):Hc;h=Math.min(((o=this.mediaStore.getState().mediaVolume)!=null?o:1)+v,1),c=new f.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(c);break}case"ArrowDown":{const v=this.hasAttribute(S.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(S.KEYBOARD_DOWN_VOLUME_STEP):Hc;h=Math.max(((l=this.mediaStore.getState().mediaVolume)!=null?l:1)-v,0),c=new f.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:h}),this.dispatchEvent(c);break}}}}Vi=new WeakMap;Ar=new WeakMap;G=new WeakMap;kr=new WeakMap;It=new WeakMap;Yn=new WeakMap;Gn=new WeakSet;wl=function(){var t;this.mediaStore=jg({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(S.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(S.DEFAULT_DURATION)?+this.getAttribute(S.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(S.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(S.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(S.SEEK_TO_LIVE_OFFSET):this.hasAttribute(S.LIVE_EDGE_OFFSET)?+this.getAttribute(S.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(S.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(S.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(S.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(S.NO_SUBTITLES_LANG_PREF)}})};Ya=new WeakSet;en=function(t){const{key:e}=t;if(!mp.includes(e)){this.removeEventListener("keyup",_i(this,Ya,en));return}this.keyboardShortcutHandler(t)};Qn=new WeakSet;Il=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!mp.includes(a)){this.removeEventListener("keyup",_i(this,Ya,en));return}const r=t.target,n=r instanceof HTMLElement&&(r.tagName.toLowerCase()==="media-volume-range"||r.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(a)&&!($(this,Vi).contains(`no${a.toLowerCase()}`)||a===" "&&$(this,Vi).contains("nospace"))&&!n&&t.preventDefault(),this.addEventListener("keyup",_i(this,Ya,en),{once:!0})};const zg=Object.values(u),Xg=Object.values(Hm),vp=t=>{var e,i,a,r;let{observedAttributes:n}=t.constructor;!n&&((e=t.nodeName)!=null&&e.includes("-"))&&(f.customElements.upgrade(t),{observedAttributes:n}=t.constructor);const s=(r=(a=(i=t?.getAttribute)==null?void 0:i.call(t,q.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(o=>zg.includes(o)):[]},Jg=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&f.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof f.customElements.get(t.nodeName.toLowerCase()))&&f.customElements.upgrade(t),Xg.some(a=>a in t)},Rl=t=>Jg(t)||!!vp(t).length,Bc=t=>{var e;return(e=t?.join)==null?void 0:e.call(t,":")},Wc={[u.MEDIA_SUBTITLES_LIST]:Jr,[u.MEDIA_SUBTITLES_SHOWING]:Jr,[u.MEDIA_SEEKABLE]:Bc,[u.MEDIA_BUFFERED]:t=>t?.map(Bc).join(" "),[u.MEDIA_PREVIEW_COORDS]:t=>t?.join(" "),[u.MEDIA_RENDITION_LIST]:tg,[u.MEDIA_AUDIO_TRACK_LIST]:ng},e0=async(t,e,i)=>{var a,r;if(t.isConnected||await Fm(0),typeof i=="boolean"||i==null)return F(t,e,i);if(typeof i=="number")return de(t,e,i);if(typeof i=="string")return re(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const n=(r=(a=Wc[e])==null?void 0:a.call(Wc,i))!=null?r:i;return t.setAttribute(e,n)},t0=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Li=(t,e)=>{if(t0(t))return;const i=(r,n)=>{var s,o;Rl(r)&&n(r);const{children:l=[]}=r??{},d=(o=(s=r?.shadowRoot)==null?void 0:s.children)!=null?o:[];[...l,...d].forEach(p=>Li(p,n))},a=t?.nodeName.toLowerCase();if(a.includes("-")&&!Rl(t)){f.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Fc=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=vp(a),n=e.toLowerCase();r.includes(n)&&e0(a,n,i)})},i0=(t,e,i)=>{Li(t,e);const a=m=>{var p;const h=(p=m?.composedPath()[0])!=null?p:m.target;e(h)},r=m=>{var p;const h=(p=m?.composedPath()[0])!=null?p:m.target;i(h)};t.addEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r);const n=m=>{m.forEach(p=>{const{addedNodes:h=[],removedNodes:c=[],type:v,target:g,attributeName:_}=p;v==="childList"?(Array.prototype.forEach.call(h,y=>Li(y,e)),Array.prototype.forEach.call(c,y=>Li(y,i))):v==="attributes"&&_===q.MEDIA_CHROME_ATTRIBUTES&&(Rl(g)?e(g):i(g))})};let s=[];const o=m=>{const p=m.target;p.name!=="media"&&(s.forEach(h=>Li(h,i)),s=[...p.assignedElements({flatten:!0})],s.forEach(h=>Li(h,e)))};t.addEventListener("slotchange",o);const l=new MutationObserver(n);return l.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Li(t,i),t.removeEventListener("slotchange",o),l.disconnect(),t.removeEventListener(R.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(R.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};f.customElements.get("media-controller")||f.customElements.define("media-controller",pp);var a0=pp;const ra={PLACEMENT:"placement",BOUNDS:"bounds"};function r0(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class Co extends f.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!zm(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=ja(this,"#"+this.bounds))!=null?e:Ue(this);if(!r)return;const{x:n,width:s}=r.getBoundingClientRect(),{x:o,width:l}=this.getBoundingClientRect(),d=o+l,m=n+s,p=a.getPropertyValue("--media-tooltip-offset-x"),h=p?parseFloat(p.replace("px","")):0,c=a.getPropertyValue("--media-tooltip-container-margin"),v=c?parseFloat(c.replace("px","")):0,g=o-n+h-v,_=d-m+h+v;if(g<0){this.style.setProperty("--media-tooltip-offset-x",`${g}px`);return}if(_>0){this.style.setProperty("--media-tooltip-offset-x",`${_}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[ra.PLACEMENT,ra.BOUNDS]}get placement(){return ae(this,ra.PLACEMENT)}set placement(e){re(this,ra.PLACEMENT,e)}get bounds(){return ae(this,ra.BOUNDS)}set bounds(e){re(this,ra.BOUNDS,e)}}Co.shadowRootOptions={mode:"open"};Co.getTemplateHTML=r0;f.customElements.get("media-tooltip")||f.customElements.define("media-tooltip",Co);var Vc=Co,jd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},pe=(t,e,i)=>(jd(t,e,"read from private field"),i?i.call(t):e.get(t)),na=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bn=(t,e,i,a)=>(jd(t,e,"write to private field"),e.set(t,i),i),n0=(t,e,i)=>(jd(t,e,"access private method"),i),Rt,Da,bi,pa,Zn,Cl,fp;const li={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function s0(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${Vc.shadowRootOptions.mode}">
          ${Vc.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function o0(t,e){return`
    <slot></slot>
  `}function l0(){return""}class De extends f.HTMLElement{constructor(){if(super(),na(this,Cl),na(this,Rt,void 0),this.preventClick=!1,this.tooltipEl=null,na(this,Da,e=>{this.preventClick||this.handleClick(e),setTimeout(pe(this,bi),0)}),na(this,bi,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),na(this,pa,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",pe(this,pa));return}this.preventClick||this.handleClick(e)}),na(this,Zn,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",pe(this,pa));return}this.addEventListener("keyup",pe(this,pa),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",li.TOOLTIP_PLACEMENT,q.MEDIA_CONTROLLER,u.MEDIA_LANG]}enable(){this.addEventListener("click",pe(this,Da)),this.addEventListener("keydown",pe(this,Zn)),this.tabIndex=0}disable(){this.removeEventListener("click",pe(this,Da)),this.removeEventListener("keydown",pe(this,Zn)),this.removeEventListener("keyup",pe(this,pa)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===q.MEDIA_CONTROLLER?(i&&((n=(r=pe(this,Rt))==null?void 0:r.unassociateElement)==null||n.call(r,this),bn(this,Rt,null)),a&&this.isConnected&&(bn(this,Rt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=pe(this,Rt))==null?void 0:o.associateElement)==null||l.call(o,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===li.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===u.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),pe(this,bi).call(this)}connectedCallback(){var e,i,a;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(bn(this,Rt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=pe(this,Rt))==null?void 0:i.associateElement)==null||a.call(i,this)),f.customElements.whenDefined("media-tooltip").then(()=>n0(this,Cl,fp).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=pe(this,Rt))==null?void 0:e.unassociateElement)==null||i.call(e,this),bn(this,Rt,null),this.removeEventListener("mouseenter",pe(this,bi)),this.removeEventListener("focus",pe(this,bi)),this.removeEventListener("click",pe(this,Da))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return ae(this,li.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){re(this,li.TOOLTIP_PLACEMENT,e)}get mediaController(){return ae(this,q.MEDIA_CONTROLLER)}set mediaController(e){re(this,q.MEDIA_CONTROLLER,e)}get disabled(){return W(this,li.DISABLED)}set disabled(e){F(this,li.DISABLED,e)}get noTooltip(){return W(this,li.NO_TOOLTIP)}set noTooltip(e){F(this,li.NO_TOOLTIP,e)}handleClick(e){}}Rt=new WeakMap;Da=new WeakMap;bi=new WeakMap;pa=new WeakMap;Zn=new WeakMap;Cl=new WeakSet;fp=function(){this.addEventListener("mouseenter",pe(this,bi)),this.addEventListener("focus",pe(this,bi)),this.addEventListener("click",pe(this,Da));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};De.shadowRootOptions={mode:"open"};De.getTemplateHTML=s0;De.getSlotTemplateHTML=o0;De.getTooltipContentHTML=l0;f.customElements.get("media-chrome-button")||f.customElements.define("media-chrome-button",De);const Kc=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function d0(t){return`
    <style>
      :host([${u.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Kc}</slot>
      <slot name="exit">${Kc}</slot>
    </slot>
  `}function u0(){return`
    <slot name="tooltip-enter">${C("start airplay")}</slot>
    <slot name="tooltip-exit">${C("stop airplay")}</slot>
  `}const qc=t=>{const e=t.mediaIsAirplaying?C("stop airplay"):C("start airplay");t.setAttribute("aria-label",e)};class zd extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_AIRPLAYING,u.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),qc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_IS_AIRPLAYING&&qc(this)}get mediaIsAirplaying(){return W(this,u.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){F(this,u.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return ae(this,u.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){re(this,u.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new f.CustomEvent(R.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}zd.getSlotTemplateHTML=d0;zd.getTooltipContentHTML=u0;f.customElements.get("media-airplay-button")||f.customElements.define("media-airplay-button",zd);const c0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,h0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function m0(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${c0}</slot>
      <slot name="off">${h0}</slot>
    </slot>
  `}function p0(){return`
    <slot name="tooltip-enable">${C("Enable captions")}</slot>
    <slot name="tooltip-disable">${C("Disable captions")}</slot>
  `}const Yc=t=>{t.setAttribute("aria-checked",lp(t).toString())};class Xd extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",C("closed captions")),Yc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_SUBTITLES_SHOWING&&Yc(this)}get mediaSubtitlesList(){return Gc(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Qc(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Gc(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Qc(this,u.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new f.CustomEvent(R.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Xd.getSlotTemplateHTML=m0;Xd.getTooltipContentHTML=p0;const Gc=(t,e)=>{const i=t.getAttribute(e);return i?Io(i):[]},Qc=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Jr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};f.customElements.get("media-captions-button")||f.customElements.define("media-captions-button",Xd);const v0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',f0='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function E0(t){return`
    <style>
      :host([${u.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${v0}</slot>
      <slot name="exit">${f0}</slot>
    </slot>
  `}function _0(){return`
    <slot name="tooltip-enter">${C("Start casting")}</slot>
    <slot name="tooltip-exit">${C("Stop casting")}</slot>
  `}const Zc=t=>{const e=t.mediaIsCasting?C("stop casting"):C("start casting");t.setAttribute("aria-label",e)};class Jd extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_CASTING,u.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Zc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_IS_CASTING&&Zc(this)}get mediaIsCasting(){return W(this,u.MEDIA_IS_CASTING)}set mediaIsCasting(e){F(this,u.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return ae(this,u.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){re(this,u.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?R.MEDIA_EXIT_CAST_REQUEST:R.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}}Jd.getSlotTemplateHTML=E0;Jd.getTooltipContentHTML=_0;f.customElements.get("media-cast-button")||f.customElements.define("media-cast-button",Jd);var eu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Qi=(t,e,i)=>(eu(t,e,"read from private field"),e.get(t)),Yt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tu=(t,e,i,a)=>(eu(t,e,"write to private field"),e.set(t,i),i),Ii=(t,e,i)=>(eu(t,e,"access private method"),i),zs,tn,Ji,jn,Dl,Ll,Ep,Ml,_p,xl,bp,Ol,gp,Nl,yp;function b0(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function g0(t){return`
    <slot id="content"></slot>
  `}const rr={OPEN:"open",ANCHOR:"anchor"};class hn extends f.HTMLElement{constructor(){super(),Yt(this,jn),Yt(this,Ll),Yt(this,Ml),Yt(this,xl),Yt(this,Ol),Yt(this,Nl),Yt(this,zs,!1),Yt(this,tn,null),Yt(this,Ji,null),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[rr.OPEN,rr.ANCHOR]}get open(){return W(this,rr.OPEN)}set open(e){F(this,rr.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Ii(this,xl,bp).call(this,e);break;case"focusout":Ii(this,Ol,gp).call(this,e);break;case"keydown":Ii(this,Nl,yp).call(this,e);break}}connectedCallback(){Ii(this,jn,Dl).call(this),this.role||(this.role="dialog")}attributeChangedCallback(e,i,a){Ii(this,jn,Dl).call(this),e===rr.OPEN&&a!==i&&(this.open?Ii(this,Ll,Ep).call(this):Ii(this,Ml,_p).call(this))}focus(){tu(this,tn,Vd());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a?.focus()}get keysUsed(){return["Escape","Tab"]}}zs=new WeakMap;tn=new WeakMap;Ji=new WeakMap;jn=new WeakSet;Dl=function(){if(!Qi(this,zs)&&(tu(this,zs,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=Ee(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};Ll=new WeakSet;Ep=function(){var t;(t=Qi(this,Ji))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};Ml=new WeakSet;_p=function(){var t;(t=Qi(this,Ji))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};xl=new WeakSet;bp=function(t){tu(this,Ji,t.relatedTarget),ri(this,t.relatedTarget)||(this.open=!this.open)};Ol=new WeakSet;gp=function(t){var e;ri(this,t.relatedTarget)||((e=Qi(this,tn))==null||e.focus(),Qi(this,Ji)&&Qi(this,Ji)!==t.relatedTarget&&this.open&&(this.open=!1))};Nl=new WeakSet;yp=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;o||l||d||this.keysUsed.includes(s)&&(t.preventDefault(),t.stopPropagation(),s==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):s==="Escape"&&((n=Qi(this,tn))==null||n.focus(),this.open=!1))};hn.shadowRootOptions={mode:"open"};hn.getTemplateHTML=b0;hn.getSlotTemplateHTML=g0;f.customElements.get("media-chrome-dialog")||f.customElements.define("media-chrome-dialog",hn);var iu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},se=(t,e,i)=>(iu(t,e,"read from private field"),i?i.call(t):e.get(t)),Re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ci=(t,e,i,a)=>(iu(t,e,"write to private field"),e.set(t,i),i),pt=(t,e,i)=>(iu(t,e,"access private method"),i),Ct,Do,zn,Xn,vt,Xs,Jn,es,ts,au,Tp,is,Pl,as,$l,Js,ru,Ul,Ap,Hl,kp,Bl,Sp,Wl,wp;function y0(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, -7px);
        height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, -5px);
          height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
      <input id="range" type="range" min="0" max="1" step="any" value="0">
    </div>
    <div id="rightgap"></div>
  `}class za extends f.HTMLElement{constructor(){if(super(),Re(this,au),Re(this,is),Re(this,as),Re(this,Js),Re(this,Ul),Re(this,Hl),Re(this,Bl),Re(this,Wl),Re(this,Ct,void 0),Re(this,Do,void 0),Re(this,zn,void 0),Re(this,Xn,void 0),Re(this,vt,{}),Re(this,Xs,[]),Re(this,Jn,()=>{if(this.range.matches(":focus-visible")){const{style:e}=Ee(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),Re(this,es,()=>{const{style:e}=Ee(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),Re(this,ts,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),ci(this,zn,this.shadowRoot.querySelector("#startpoint")),ci(this,Xn,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===q.MEDIA_CONTROLLER?(i&&((n=(r=se(this,Ct))==null?void 0:r.unassociateElement)==null||n.call(r,this),ci(this,Ct,null)),a&&this.isConnected&&(ci(this,Ct,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=se(this,Ct))==null?void 0:o.associateElement)==null||l.call(o,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),pt(this,is,Pl).call(this)):(this.range.setAttribute(e,a),pt(this,as,$l).call(this)))}connectedCallback(){var e,i,a;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),se(this,vt).pointer=Ee(this.shadowRoot,"#pointer"),se(this,vt).progress=Ee(this.shadowRoot,"#progress"),se(this,vt).thumb=Ee(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),se(this,vt).activeSegment=Ee(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(ci(this,Ct,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=se(this,Ct))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",se(this,Jn)),this.shadowRoot.addEventListener("focusout",se(this,es)),pt(this,is,Pl).call(this),Va(this.container,se(this,ts))}disconnectedCallback(){var e,i;pt(this,as,$l).call(this),(i=(e=se(this,Ct))==null?void 0:e.unassociateElement)==null||i.call(e,this),ci(this,Ct,null),this.shadowRoot.removeEventListener("focusin",se(this,Jn)),this.shadowRoot.removeEventListener("focusout",se(this,es)),Ka(this.container,se(this,ts))}updatePointerBar(e){var i;(i=se(this,vt).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=se(this,vt).progress)==null||e.style.setProperty("width",`${a}%`),(i=se(this,vt).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!e?.length),!e?.length)return;const a=[...new Set([+this.range.min,...e.flatMap(n=>[n.start,n.end]),+this.range.max])];ci(this,Xs,[...a]);const r=a.pop();for(const[n,s]of a.entries()){const[o,l]=[n===0,n===a.length-1],d=o?"calc(var(--segments-gap) / -1)":`${s*100}%`,p=`calc(${((l?r:a[n+1])-s)*100}%${o||l?"":" - var(--segments-gap)"})`,h=Te.createElementNS("http://www.w3.org/2000/svg","rect"),c=Ee(this.shadowRoot,`#segments-clipping rect:nth-child(${n+1})`);c.style.setProperty("x",d),c.style.setProperty("width",p),i.append(h)}}getPointerRatio(e){return fg(e.clientX,e.clientY,se(this,zn).getBoundingClientRect(),se(this,Xn).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":pt(this,Wl,wp).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":pt(this,Ul,Ap).call(this,e);break;case"pointerdown":pt(this,Js,ru).call(this,e);break;case"pointerup":pt(this,Hl,kp).call(this);break;case"pointerleave":pt(this,Bl,Sp).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}Ct=new WeakMap;Do=new WeakMap;zn=new WeakMap;Xn=new WeakMap;vt=new WeakMap;Xs=new WeakMap;Jn=new WeakMap;es=new WeakMap;ts=new WeakMap;au=new WeakSet;Tp=function(t){const e=se(this,vt).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${se(this,Xs).findIndex((n,s,o)=>{const l=o[s+1];return l!=null&&i>=n&&i<=l})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};is=new WeakSet;Pl=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};as=new WeakSet;$l=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),(t=f.window)==null||t.removeEventListener("pointerup",this),(e=f.window)==null||e.removeEventListener("pointermove",this)};Js=new WeakSet;ru=function(t){var e;ci(this,Do,t.composedPath().includes(this.range)),(e=f.window)==null||e.addEventListener("pointerup",this)};Ul=new WeakSet;Ap=function(t){var e;t.pointerType!=="mouse"&&pt(this,Js,ru).call(this,t),this.addEventListener("pointerleave",this),(e=f.window)==null||e.addEventListener("pointermove",this)};Hl=new WeakSet;kp=function(){var t;(t=f.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};Bl=new WeakSet;Sp=function(){var t,e;this.removeEventListener("pointerleave",this),(t=f.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=se(this,vt).activeSegment)==null||e.style.removeProperty("transform")};Wl=new WeakSet;wp=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),pt(this,au,Tp).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!se(this,Do))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};za.shadowRootOptions={mode:"open"};za.getTemplateHTML=y0;f.customElements.get("media-chrome-range")||f.customElements.define("media-chrome-range",za);var Ip=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gn=(t,e,i)=>(Ip(t,e,"read from private field"),i?i.call(t):e.get(t)),T0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yn=(t,e,i,a)=>(Ip(t,e,"write to private field"),e.set(t,i),i),Dt;function A0(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}class nu extends f.HTMLElement{constructor(){if(super(),T0(this,Dt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===q.MEDIA_CONTROLLER&&(i&&((n=(r=gn(this,Dt))==null?void 0:r.unassociateElement)==null||n.call(r,this),yn(this,Dt,null)),a&&this.isConnected&&(yn(this,Dt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=gn(this,Dt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(yn(this,Dt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=gn(this,Dt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=gn(this,Dt))==null?void 0:e.unassociateElement)==null||i.call(e,this),yn(this,Dt,null)}}Dt=new WeakMap;nu.shadowRootOptions={mode:"open"};nu.getTemplateHTML=A0;f.customElements.get("media-control-bar")||f.customElements.define("media-control-bar",nu);var Rp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Tn=(t,e,i)=>(Rp(t,e,"read from private field"),i?i.call(t):e.get(t)),k0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},An=(t,e,i,a)=>(Rp(t,e,"write to private field"),e.set(t,i),i),Lt;function S0(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function w0(t,e){return`
    <slot></slot>
  `}class ki extends f.HTMLElement{constructor(){if(super(),k0(this,Lt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===q.MEDIA_CONTROLLER&&(i&&((n=(r=Tn(this,Lt))==null?void 0:r.unassociateElement)==null||n.call(r,this),An(this,Lt,null)),a&&this.isConnected&&(An(this,Lt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Tn(this,Lt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const{style:r}=Ee(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const n=this.getAttribute(q.MEDIA_CONTROLLER);n&&(An(this,Lt,(e=this.getRootNode())==null?void 0:e.getElementById(n)),(a=(i=Tn(this,Lt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Tn(this,Lt))==null?void 0:e.unassociateElement)==null||i.call(e,this),An(this,Lt,null)}}Lt=new WeakMap;ki.shadowRootOptions={mode:"open"};ki.getTemplateHTML=S0;ki.getSlotTemplateHTML=w0;f.customElements.get("media-text-display")||f.customElements.define("media-text-display",ki);var Cp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},jc=(t,e,i)=>(Cp(t,e,"read from private field"),i?i.call(t):e.get(t)),I0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},R0=(t,e,i,a)=>(Cp(t,e,"write to private field"),e.set(t,i),i),Sr;function C0(t,e){return`
    <slot>${Ti(e.mediaDuration)}</slot>
  `}class Dp extends ki{constructor(){var e;super(),I0(this,Sr,void 0),R0(this,Sr,this.shadowRoot.querySelector("slot")),jc(this,Sr).textContent=Ti((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===u.MEDIA_DURATION&&(jc(this,Sr).textContent=Ti(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return ie(this,u.MEDIA_DURATION)}set mediaDuration(e){de(this,u.MEDIA_DURATION,e)}}Sr=new WeakMap;Dp.getSlotTemplateHTML=C0;f.customElements.get("media-duration-display")||f.customElements.define("media-duration-display",Dp);const D0={2:C("Network Error"),3:C("Decode Error"),4:C("Source Not Supported"),5:C("Encryption Error")},L0={2:C("A network error caused the media download to fail."),3:C("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:C("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:C("The media is encrypted and there are no keys to decrypt it.")},Lp=t=>{var e,i;return t.code===1?null:{title:(e=D0[t.code])!=null?e:`Error ${t.code}`,message:(i=L0[t.code])!=null?i:t.message}};var Mp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},M0=(t,e,i)=>(Mp(t,e,"read from private field"),i?i.call(t):e.get(t)),x0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},O0=(t,e,i,a)=>(Mp(t,e,"write to private field"),e.set(t,i),i),rs;function N0(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${xp({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function P0(t){return t.code&&Lp(t)!==null}function xp(t){var e;const{title:i,message:a}=(e=Lp(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const zc=[u.MEDIA_ERROR_CODE,u.MEDIA_ERROR_MESSAGE];class Lo extends hn{constructor(){super(...arguments),x0(this,rs,null)}static get observedAttributes(){return[...super.observedAttributes,...zc]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!zc.includes(e))return;const n=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};this.open=P0(n),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(n))}get mediaError(){return M0(this,rs)}set mediaError(e){O0(this,rs,e)}get mediaErrorCode(){return ie(this,"mediaerrorcode")}set mediaErrorCode(e){de(this,"mediaerrorcode",e)}get mediaErrorMessage(){return ae(this,"mediaerrormessage")}set mediaErrorMessage(e){re(this,"mediaerrormessage",e)}}rs=new WeakMap;Lo.getSlotTemplateHTML=N0;Lo.formatErrorMessage=xp;f.customElements.get("media-error-dialog")||f.customElements.define("media-error-dialog",Lo);var Op=Lo,Np=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$0=(t,e,i)=>(Np(t,e,"read from private field"),e.get(t)),U0=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},H0=(t,e,i,a)=>(Np(t,e,"write to private field"),e.set(t,i),i),ns;const B0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,W0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function F0(t){return`
    <style>
      :host([${u.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${B0}</slot>
      <slot name="exit">${W0}</slot>
    </slot>
  `}function V0(){return`
    <slot name="tooltip-enter">${C("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${C("Exit fullscreen mode")}</slot>
  `}const Xc=t=>{const e=t.mediaIsFullscreen?C("exit fullscreen mode"):C("enter fullscreen mode");t.setAttribute("aria-label",e)};class su extends De{constructor(){super(...arguments),U0(this,ns,null)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_FULLSCREEN,u.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Xc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_IS_FULLSCREEN&&Xc(this)}get mediaFullscreenUnavailable(){return ae(this,u.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){re(this,u.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return W(this,u.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){F(this,u.MEDIA_IS_FULLSCREEN,e)}handleClick(e){H0(this,ns,e);const i=$0(this,ns)instanceof PointerEvent,a=this.mediaIsFullscreen?new f.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new f.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}}ns=new WeakMap;su.getSlotTemplateHTML=F0;su.getTooltipContentHTML=V0;f.customElements.get("media-fullscreen-button")||f.customElements.define("media-fullscreen-button",su);const{MEDIA_TIME_IS_LIVE:ss,MEDIA_PAUSED:Br}=u,{MEDIA_SEEK_TO_LIVE_REQUEST:K0,MEDIA_PLAY_REQUEST:q0}=R,Y0='<svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg>';function G0(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${ss}]:not([${Br}])) slot[name=indicator] > *,
      :host([${ss}]:not([${Br}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${ss}]:not([${Br}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Y0}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${C("live")}</slot>
  `}const Jc=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=C(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=C("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Pp extends De{static get observedAttributes(){return[...super.observedAttributes,ss,Br]}connectedCallback(){super.connectedCallback(),Jc(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Jc(this)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){F(this,u.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return W(this,u.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){F(this,u.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new f.CustomEvent(K0,{composed:!0,bubbles:!0})),this.hasAttribute(Br)&&this.dispatchEvent(new f.CustomEvent(q0,{composed:!0,bubbles:!0})))}}Pp.getSlotTemplateHTML=G0;f.customElements.get("media-live-button")||f.customElements.define("media-live-button",Pp);var $p=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},nr=(t,e,i)=>($p(t,e,"read from private field"),i?i.call(t):e.get(t)),eh=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},sr=(t,e,i,a)=>($p(t,e,"write to private field"),e.set(t,i),i),Mt,os;const kn={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Up=500,Q0=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Z0(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Up}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${u.MEDIA_LOADING}]:not([${u.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Q0}</slot>
    <div id="status" role="status" aria-live="polite">${C("media loading")}</div>
  `}class ou extends f.HTMLElement{constructor(){if(super(),eh(this,Mt,void 0),eh(this,os,Up),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PAUSED,u.MEDIA_LOADING,kn.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,n,s,o,l;e===kn.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===q.MEDIA_CONTROLLER&&(i&&((n=(r=nr(this,Mt))==null?void 0:r.unassociateElement)==null||n.call(r,this),sr(this,Mt,null)),a&&this.isConnected&&(sr(this,Mt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=nr(this,Mt))==null?void 0:o.associateElement)==null||l.call(o,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(sr(this,Mt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=nr(this,Mt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=nr(this,Mt))==null?void 0:e.unassociateElement)==null||i.call(e,this),sr(this,Mt,null)}get loadingDelay(){return nr(this,os)}set loadingDelay(e){sr(this,os,e);const{style:i}=Ee(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){F(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return W(this,u.MEDIA_LOADING)}set mediaLoading(e){F(this,u.MEDIA_LOADING,e)}get mediaController(){return ae(this,q.MEDIA_CONTROLLER)}set mediaController(e){re(this,q.MEDIA_CONTROLLER,e)}get noAutohide(){return W(this,kn.NO_AUTOHIDE)}set noAutohide(e){F(this,kn.NO_AUTOHIDE,e)}}Mt=new WeakMap;os=new WeakMap;ou.shadowRootOptions={mode:"open"};ou.getTemplateHTML=Z0;f.customElements.get("media-loading-indicator")||f.customElements.define("media-loading-indicator",ou);const j0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,th=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,z0=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function X0(t){return`
    <style>
      :host(:not([${u.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${u.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${u.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${u.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${u.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${j0}</slot>
      <slot name="low">${th}</slot>
      <slot name="medium">${th}</slot>
      <slot name="high">${z0}</slot>
    </slot>
  `}function J0(){return`
    <slot name="tooltip-mute">${C("Mute")}</slot>
    <slot name="tooltip-unmute">${C("Unmute")}</slot>
  `}const ih=t=>{const e=t.mediaVolumeLevel==="off",i=C(e?"unmute":"mute");t.setAttribute("aria-label",i)};class lu extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),ih(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_VOLUME_LEVEL&&ih(this)}get mediaVolumeLevel(){return ae(this,u.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){re(this,u.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?R.MEDIA_UNMUTE_REQUEST:R.MEDIA_MUTE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}}lu.getSlotTemplateHTML=X0;lu.getTooltipContentHTML=J0;f.customElements.get("media-mute-button")||f.customElements.define("media-mute-button",lu);const ah=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function e1(t){return`
    <style>
      :host([${u.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${u.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${u.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${u.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${ah}</slot>
      <slot name="exit">${ah}</slot>
    </slot>
  `}function t1(){return`
    <slot name="tooltip-enter">${C("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${C("Exit picture in picture mode")}</slot>
  `}const rh=t=>{const e=t.mediaIsPip?C("exit picture in picture mode"):C("enter picture in picture mode");t.setAttribute("aria-label",e)};class du extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_IS_PIP,u.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),rh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_IS_PIP&&rh(this)}get mediaPipUnavailable(){return ae(this,u.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){re(this,u.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return W(this,u.MEDIA_IS_PIP)}set mediaIsPip(e){F(this,u.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?R.MEDIA_EXIT_PIP_REQUEST:R.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}}du.getSlotTemplateHTML=e1;du.getTooltipContentHTML=t1;f.customElements.get("media-pip-button")||f.customElements.define("media-pip-button",du);var i1=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},sa=(t,e,i)=>(i1(t,e,"read from private field"),i?i.call(t):e.get(t)),a1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hi;const jo={RATES:"rates"},Hp=[1,1.2,1.5,1.7,2],La=1;function r1(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||La}x</slot>
  `}function n1(){return C("Playback rate")}class uu extends De{constructor(){var e;super(),a1(this,hi,new Yd(this,jo.RATES,{defaultValue:Hp})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:La}x`}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,jo.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===jo.RATES&&(sa(this,hi).value=a),e===u.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?La:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",C("Playback rate {playbackRate}",{playbackRate:n}))}}get rates(){return sa(this,hi)}set rates(e){e?Array.isArray(e)?sa(this,hi).value=e.join(" "):typeof e=="string"&&(sa(this,hi).value=e):sa(this,hi).value=""}get mediaPlaybackRate(){return ie(this,u.MEDIA_PLAYBACK_RATE,La)}set mediaPlaybackRate(e){de(this,u.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(sa(this,hi).values(),s=>+s).sort((s,o)=>s-o),r=(i=(e=a.find(s=>s>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:La,n=new f.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(n)}}hi=new WeakMap;uu.getSlotTemplateHTML=r1;uu.getTooltipContentHTML=n1;f.customElements.get("media-playback-rate-button")||f.customElements.define("media-playback-rate-button",uu);const s1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,o1=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function l1(t){return`
    <style>
      :host([${u.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${u.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${u.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${u.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${s1}</slot>
      <slot name="pause">${o1}</slot>
    </slot>
  `}function d1(){return`
    <slot name="tooltip-play">${C("Play")}</slot>
    <slot name="tooltip-pause">${C("Pause")}</slot>
  `}const nh=t=>{const e=t.mediaPaused?C("play"):C("pause");t.setAttribute("aria-label",e)};class cu extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),nh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===u.MEDIA_PAUSED||e===u.MEDIA_LANG)&&nh(this)}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){F(this,u.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?R.MEDIA_PLAY_REQUEST:R.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new f.CustomEvent(e,{composed:!0,bubbles:!0}))}}cu.getSlotTemplateHTML=l1;cu.getTooltipContentHTML=d1;f.customElements.get("media-play-button")||f.customElements.define("media-play-button",cu);const Tt={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function u1(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const c1=t=>{t.style.removeProperty("background-image")},h1=(t,e)=>{t.style["background-image"]=`url('${e}')`};class hu extends f.HTMLElement{static get observedAttributes(){return[Tt.PLACEHOLDER_SRC,Tt.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===Tt.SRC&&(a==null?this.image.removeAttribute(Tt.SRC):this.image.setAttribute(Tt.SRC,a)),e===Tt.PLACEHOLDER_SRC&&(a==null?c1(this.image):h1(this.image,a))}get placeholderSrc(){return ae(this,Tt.PLACEHOLDER_SRC)}set placeholderSrc(e){re(this,Tt.SRC,e)}get src(){return ae(this,Tt.SRC)}set src(e){re(this,Tt.SRC,e)}}hu.shadowRootOptions={mode:"open"};hu.getTemplateHTML=u1;f.customElements.get("media-poster-image")||f.customElements.define("media-poster-image",hu);var Bp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},m1=(t,e,i)=>(Bp(t,e,"read from private field"),i?i.call(t):e.get(t)),p1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},v1=(t,e,i,a)=>(Bp(t,e,"write to private field"),e.set(t,i),i),ls;class f1 extends ki{constructor(){super(),p1(this,ls,void 0),v1(this,ls,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_CHAPTER,u.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===u.MEDIA_PREVIEW_CHAPTER||e===u.MEDIA_LANG)&&a!==i&&a!=null)if(m1(this,ls).textContent=a,a!==""){const r=C("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return ae(this,u.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){re(this,u.MEDIA_PREVIEW_CHAPTER,e)}}ls=new WeakMap;f.customElements.get("media-preview-chapter-display")||f.customElements.define("media-preview-chapter-display",f1);var Wp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sn=(t,e,i)=>(Wp(t,e,"read from private field"),i?i.call(t):e.get(t)),E1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},wn=(t,e,i,a)=>(Wp(t,e,"write to private field"),e.set(t,i),i),xt;function _1(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class Mo extends f.HTMLElement{constructor(){if(super(),E1(this,xt,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[q.MEDIA_CONTROLLER,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(q.MEDIA_CONTROLLER);r&&(wn(this,xt,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Sn(this,xt))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Sn(this,xt))==null?void 0:e.unassociateElement)==null||i.call(e,this),wn(this,xt,null)}attributeChangedCallback(e,i,a){var r,n,s,o,l;[u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===q.MEDIA_CONTROLLER&&(i&&((n=(r=Sn(this,xt))==null?void 0:r.unassociateElement)==null||n.call(r,this),wn(this,xt,null)),a&&this.isConnected&&(wn(this,xt,(s=this.getRootNode())==null?void 0:s.getElementById(a)),(l=(o=Sn(this,xt))==null?void 0:o.associateElement)==null||l.call(o,this)))}get mediaPreviewImage(){return ae(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){re(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(u.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(u.MEDIA_PREVIEW_COORDS);return}this.setAttribute(u.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,n,s]=e,o=i.split("#")[0],l=getComputedStyle(this),{maxWidth:d,maxHeight:m,minWidth:p,minHeight:h}=l,c=Math.min(parseInt(d)/n,parseInt(m)/s),v=Math.max(parseInt(p)/n,parseInt(h)/s),g=c<1,_=g?c:v>1?v:1,{style:y}=Ee(this.shadowRoot,":host"),T=Ee(this.shadowRoot,"img").style,E=this.shadowRoot.querySelector("img"),k=g?"min":"max";y.setProperty(`${k}-width`,"initial","important"),y.setProperty(`${k}-height`,"initial","important"),y.width=`${n*_}px`,y.height=`${s*_}px`;const D=()=>{T.width=`${this.imgWidth*_}px`,T.height=`${this.imgHeight*_}px`,T.display="block"};E.src!==o&&(E.onload=()=>{this.imgWidth=E.naturalWidth,this.imgHeight=E.naturalHeight,D()},E.src=o,D()),D(),T.transform=`translate(-${a*_}px, -${r*_}px)`}}xt=new WeakMap;Mo.shadowRootOptions={mode:"open"};Mo.getTemplateHTML=_1;f.customElements.get("media-preview-thumbnail")||f.customElements.define("media-preview-thumbnail",Mo);var sh=Mo,Fp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},oh=(t,e,i)=>(Fp(t,e,"read from private field"),i?i.call(t):e.get(t)),b1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},g1=(t,e,i,a)=>(Fp(t,e,"write to private field"),e.set(t,i),i),wr;class y1 extends ki{constructor(){super(),b1(this,wr,void 0),g1(this,wr,this.shadowRoot.querySelector("slot")),oh(this,wr).textContent=Ti(0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_PREVIEW_TIME&&a!=null&&(oh(this,wr).textContent=Ti(parseFloat(a)))}get mediaPreviewTime(){return ie(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){de(this,u.MEDIA_PREVIEW_TIME,e)}}wr=new WeakMap;f.customElements.get("media-preview-time-display")||f.customElements.define("media-preview-time-display",y1);const oa={SEEK_OFFSET:"seekoffset"},zo=30,T1=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function A1(t,e){return`
    <slot name="icon">${T1(e.seekOffset)}</slot>
  `}function k1(){return C("Seek backward")}const S1=0;class mu extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,oa.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ie(this,oa.SEEK_OFFSET,zo)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===oa.SEEK_OFFSET&&(this.seekOffset=ie(this,oa.SEEK_OFFSET,zo))}get seekOffset(){return ie(this,oa.SEEK_OFFSET,zo)}set seekOffset(e){de(this,oa.SEEK_OFFSET,e),this.setAttribute("aria-label",C("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),Zm(jm(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ie(this,u.MEDIA_CURRENT_TIME,S1)}set mediaCurrentTime(e){de(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new f.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}mu.getSlotTemplateHTML=A1;mu.getTooltipContentHTML=k1;f.customElements.get("media-seek-backward-button")||f.customElements.define("media-seek-backward-button",mu);const la={SEEK_OFFSET:"seekoffset"},Xo=30,w1=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function I1(t,e){return`
    <slot name="icon">${w1(e.seekOffset)}</slot>
  `}function R1(){return C("Seek forward")}const C1=0;class pu extends De{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_CURRENT_TIME,la.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=ie(this,la.SEEK_OFFSET,Xo)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===la.SEEK_OFFSET&&(this.seekOffset=ie(this,la.SEEK_OFFSET,Xo))}get seekOffset(){return ie(this,la.SEEK_OFFSET,Xo)}set seekOffset(e){de(this,la.SEEK_OFFSET,e),this.setAttribute("aria-label",C("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),Zm(jm(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return ie(this,u.MEDIA_CURRENT_TIME,C1)}set mediaCurrentTime(e){de(this,u.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new f.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}pu.getSlotTemplateHTML=I1;pu.getTooltipContentHTML=R1;f.customElements.get("media-seek-forward-button")||f.customElements.define("media-seek-forward-button",pu);var Vp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Jo=(t,e,i)=>(Vp(t,e,"read from private field"),i?i.call(t):e.get(t)),D1=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},L1=(t,e,i,a)=>(Vp(t,e,"write to private field"),e.set(t,i),i),va;const Mi={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},lh=[...Object.values(Mi),u.MEDIA_CURRENT_TIME,u.MEDIA_DURATION,u.MEDIA_SEEKABLE],dh=["Enter"," "],M1="&nbsp;/&nbsp;",Fl=(t,{timesSep:e=M1}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,n]=(a=t.mediaSeekable)!=null?a:[];let s=0;Number.isFinite(t.mediaDuration)?s=t.mediaDuration:Number.isFinite(n)&&(s=n);const o=t.remaining?Ti(0-(s-r)):Ti(r);return t.showDuration?`${o}${e}${Ti(s)}`:o},x1="video not loaded, unknown time.",O1=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-valuetext",x1);return}const n=t.remaining?Ur(0-(r-i)):Ur(i);if(!t.showDuration){t.setAttribute("aria-valuetext",n);return}const s=Ur(r),o=`${n} of ${s}`;t.setAttribute("aria-valuetext",o)};function N1(t,e){return`
    <slot>${Fl(e)}</slot>
  `}class Kp extends ki{constructor(){super(),D1(this,va,void 0),L1(this,va,this.shadowRoot.querySelector("slot")),Jo(this,va).innerHTML=`${Fl(this)}`}static get observedAttributes(){return[...super.observedAttributes,...lh,"disabled"]}connectedCallback(){const{style:e}=Ee(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",C("playback time"));const i=a=>{const{key:r}=a;if(!dh.includes(r)){this.removeEventListener("keyup",i);return}this.toggleTimeDisplay()};this.addEventListener("keydown",a=>{const{metaKey:r,altKey:n,key:s}=a;if(r||n||!dh.includes(s)){this.removeEventListener("keyup",i);return}this.addEventListener("keyup",i)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,i,a){lh.includes(e)?this.update():e==="disabled"&&a!==i&&(a==null?this.enable():this.disable()),super.attributeChangedCallback(e,i,a)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return W(this,Mi.REMAINING)}set remaining(e){F(this,Mi.REMAINING,e)}get showDuration(){return W(this,Mi.SHOW_DURATION)}set showDuration(e){F(this,Mi.SHOW_DURATION,e)}get noToggle(){return W(this,Mi.NO_TOGGLE)}set noToggle(e){F(this,Mi.NO_TOGGLE,e)}get mediaDuration(){return ie(this,u.MEDIA_DURATION)}set mediaDuration(e){de(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return ie(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){de(this,u.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}update(){const e=Fl(this);O1(this),e!==Jo(this,va).innerHTML&&(Jo(this,va).innerHTML=e)}}va=new WeakMap;Kp.getSlotTemplateHTML=N1;f.customElements.get("media-time-display")||f.customElements.define("media-time-display",Kp);var qp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Se=(t,e,i)=>(qp(t,e,"read from private field"),e.get(t)),At=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Qe=(t,e,i,a)=>(qp(t,e,"write to private field"),e.set(t,i),i),P1=(t,e,i,a)=>({set _(r){Qe(t,e,r)},get _(){return Se(t,e)}}),fa,ds,Ea,Ir,us,cs,hs,_a,xi,ms;class $1{constructor(e,i,a){At(this,fa,void 0),At(this,ds,void 0),At(this,Ea,void 0),At(this,Ir,void 0),At(this,us,void 0),At(this,cs,void 0),At(this,hs,void 0),At(this,_a,void 0),At(this,xi,0),At(this,ms,(r=performance.now())=>{Qe(this,xi,requestAnimationFrame(Se(this,ms))),Qe(this,Ir,performance.now()-Se(this,Ea));const n=1e3/this.fps;if(Se(this,Ir)>n){Qe(this,Ea,r-Se(this,Ir)%n);const s=1e3/((r-Se(this,ds))/++P1(this,us)._),o=(r-Se(this,cs))/1e3/this.duration;let l=Se(this,hs)+o*this.playbackRate;l-Se(this,fa).valueAsNumber>0?Qe(this,_a,this.playbackRate/this.duration/s):(Qe(this,_a,.995*Se(this,_a)),l=Se(this,fa).valueAsNumber+Se(this,_a)),this.callback(l)}}),Qe(this,fa,e),this.callback=i,this.fps=a}start(){Se(this,xi)===0&&(Qe(this,Ea,performance.now()),Qe(this,ds,Se(this,Ea)),Qe(this,us,0),Se(this,ms).call(this))}stop(){Se(this,xi)!==0&&(cancelAnimationFrame(Se(this,xi)),Qe(this,xi,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Se(this,fa).valueAsNumber,n=Math.abs(i-this.duration);(r>0||r<-.03||n>=.5)&&this.callback(e),Qe(this,hs,e),Qe(this,cs,performance.now()),this.duration=i,this.playbackRate=a}}fa=new WeakMap;ds=new WeakMap;Ea=new WeakMap;Ir=new WeakMap;us=new WeakMap;cs=new WeakMap;hs=new WeakMap;_a=new WeakMap;xi=new WeakMap;ms=new WeakMap;var vu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ce=(t,e,i)=>(vu(t,e,"read from private field"),i?i.call(t):e.get(t)),ge=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},tt=(t,e,i,a)=>(vu(t,e,"write to private field"),e.set(t,i),i),xe=(t,e,i)=>(vu(t,e,"access private method"),i),ba,Zi,eo,Wr,to,ps,an,rn,ga,ya,Ta,Rr,fu,Yp,Vl,io,Eu,ao,_u,ro,bu,Kl,Gp,nn,no,ql,Qp;const U1="video not loaded, unknown time.",H1=t=>{const e=t.range,i=Ur(+Zp(t)),a=Ur(+t.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:U1;e.setAttribute("aria-valuetext",r)};function B1(t){return`
    ${za.getTemplateHTML(t)}
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${u.MEDIA_PREVIEW_IMAGE}], [${u.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${u.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${u.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${u.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${u.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${u.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${u.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${u.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${sh.shadowRootOptions.mode}">
            ${sh.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const In=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},Zp=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};class gu extends za{constructor(){super(),ge(this,Ta),ge(this,fu),ge(this,io),ge(this,ao),ge(this,ro),ge(this,Kl),ge(this,nn),ge(this,ql),ge(this,ba,void 0),ge(this,Zi,void 0),ge(this,eo,void 0),ge(this,Wr,void 0),ge(this,to,void 0),ge(this,ps,void 0),ge(this,an,void 0),ge(this,rn,void 0),ge(this,ga,void 0),ge(this,ya,void 0),ge(this,Vl,a=>{this.dragging||(Wd(a)&&(this.range.valueAsNumber=a),ce(this,ya)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),tt(this,eo,this.shadowRoot.querySelectorAll('[part~="box"]')),tt(this,to,this.shadowRoot.querySelector('[part~="preview-box"]')),tt(this,ps,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);tt(this,an,parseInt(i.getPropertyValue("--media-box-padding-left"))),tt(this,rn,parseInt(i.getPropertyValue("--media-box-padding-right"))),tt(this,Zi,new $1(this.range,ce(this,Vl),60))}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PAUSED,u.MEDIA_DURATION,u.MEDIA_SEEKABLE,u.MEDIA_CURRENT_TIME,u.MEDIA_PREVIEW_IMAGE,u.MEDIA_PREVIEW_TIME,u.MEDIA_PREVIEW_CHAPTER,u.MEDIA_BUFFERED,u.MEDIA_PLAYBACK_RATE,u.MEDIA_LOADING,u.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",C("seek")),xe(this,Ta,Rr).call(this),tt(this,ba,this.getRootNode()),(e=ce(this,ba))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),xe(this,Ta,Rr).call(this),(e=ce(this,ba))==null||e.removeEventListener("transitionstart",this),tt(this,ba,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===u.MEDIA_CURRENT_TIME||e===u.MEDIA_PAUSED||e===u.MEDIA_ENDED||e===u.MEDIA_LOADING||e===u.MEDIA_DURATION||e===u.MEDIA_SEEKABLE?(ce(this,Zi).update({start:In(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),xe(this,Ta,Rr).call(this),H1(this)):e===u.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===u.MEDIA_DURATION||e===u.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=ce(this,ga),this.updateBar()))}get mediaChaptersCues(){return ce(this,ga)}set mediaChaptersCues(e){var i;tt(this,ga,e),this.updateSegments((i=ce(this,ga))==null?void 0:i.map(a=>({start:In(this,a.startTime),end:In(this,a.endTime)})))}get mediaPaused(){return W(this,u.MEDIA_PAUSED)}set mediaPaused(e){F(this,u.MEDIA_PAUSED,e)}get mediaLoading(){return W(this,u.MEDIA_LOADING)}set mediaLoading(e){F(this,u.MEDIA_LOADING,e)}get mediaDuration(){return ie(this,u.MEDIA_DURATION)}set mediaDuration(e){de(this,u.MEDIA_DURATION,e)}get mediaCurrentTime(){return ie(this,u.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){de(this,u.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return ie(this,u.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){de(this,u.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(u.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(u.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(u.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(u.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(u.MEDIA_SEEKABLE);return}this.setAttribute(u.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return ae(this,u.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){re(this,u.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return ie(this,u.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){de(this,u.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return W(this,u.MEDIA_ENDED)}set mediaEnded(e){F(this,u.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const n=this.mediaCurrentTime,[,s=this.mediaSeekableStart]=(e=i.find(([o,l])=>o<=n&&n<=l))!=null?e:[];a=In(this,s)}const{style:r}=Ee(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=Ee(this.shadowRoot,"#current-rail"),a=Ee(this.shadowRoot,'[part~="current-box"]'),r=xe(this,io,Eu).call(this,ce(this,ps)),n=xe(this,ao,_u).call(this,r,this.range.valueAsNumber),s=xe(this,ro,bu).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${n})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${s}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":xe(this,ql,Qp).call(this);break;case"pointermove":xe(this,Kl,Gp).call(this,e);break;case"pointerup":ce(this,ya)&&tt(this,ya,!1);break;case"pointerdown":tt(this,ya,!0);break;case"pointerleave":xe(this,nn,no).call(this,null);break;case"transitionstart":ri(e.target,this)&&setTimeout(()=>xe(this,Ta,Rr).call(this),0);break}}}ba=new WeakMap;Zi=new WeakMap;eo=new WeakMap;Wr=new WeakMap;to=new WeakMap;ps=new WeakMap;an=new WeakMap;rn=new WeakMap;ga=new WeakMap;ya=new WeakMap;Ta=new WeakSet;Rr=function(){xe(this,fu,Yp).call(this)?ce(this,Zi).start():ce(this,Zi).stop()};fu=new WeakSet;Yp=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&zm(this)};Vl=new WeakMap;io=new WeakSet;Eu=function(t){var e;const a=((e=this.getAttribute("bounds")?ja(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),n=t.offsetWidth,s=-(r.left-a.left-n/2),o=a.right-r.left-n/2;return{box:{width:n,min:s,max:o},bounds:a,range:r}};ao=new WeakSet;_u=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:n}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(n)){const o=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${o})`}return i};ro=new WeakSet;bu=function(t,e){const{width:i,min:a,max:r}=t.box,n=e*t.range.width;if(n<a+ce(this,an)){const s=t.range.left-t.bounds.left-ce(this,an);return`${n-i/2+s}px`}if(n>r-ce(this,rn)){const s=t.bounds.right-t.range.right-ce(this,rn);return`${n+i/2-s-t.range.width}px`}return 0};Kl=new WeakSet;Gp=function(t){const e=[...ce(this,eo)].some(m=>t.composedPath().includes(m));if(!this.dragging&&(e||!t.composedPath().includes(this))){xe(this,nn,no).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=Ee(this.shadowRoot,"#preview-rail"),r=Ee(this.shadowRoot,'[part~="preview-box"]'),n=xe(this,io,Eu).call(this,ce(this,to));let s=(t.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));const o=xe(this,ao,_u).call(this,n,s),l=xe(this,ro,bu).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`);const d=Math.round(ce(this,Wr))-Math.round(s*i);Math.abs(d)<1&&s>.01&&s<.99||(tt(this,Wr,s*i),xe(this,nn,no).call(this,ce(this,Wr)))};nn=new WeakSet;no=function(t){this.dispatchEvent(new f.CustomEvent(R.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};ql=new WeakSet;Qp=function(){ce(this,Zi).stop();const t=Zp(this);this.dispatchEvent(new f.CustomEvent(R.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};gu.shadowRootOptions={mode:"open"};gu.getTemplateHTML=B1;f.customElements.get("media-time-range")||f.customElements.define("media-time-range",gu);const W1=1,F1=t=>t.mediaMuted?0:t.mediaVolume,V1=t=>`${Math.round(t*100)}%`;class K1 extends za{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_VOLUME,u.MEDIA_MUTED,u.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{const e=this.range.value,i=new f.CustomEvent(R.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",C("volume"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===u.MEDIA_VOLUME||e===u.MEDIA_MUTED)&&(this.range.valueAsNumber=F1(this),this.range.setAttribute("aria-valuetext",V1(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return ie(this,u.MEDIA_VOLUME,W1)}set mediaVolume(e){de(this,u.MEDIA_VOLUME,e)}get mediaMuted(){return W(this,u.MEDIA_MUTED)}set mediaMuted(e){F(this,u.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return ae(this,u.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){re(this,u.MEDIA_VOLUME_UNAVAILABLE,e)}}f.customElements.get("media-volume-range")||f.customElements.define("media-volume-range",K1);var jp=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},U=(t,e,i)=>(jp(t,e,"read from private field"),i?i.call(t):e.get(t)),$t=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Xt=(t,e,i,a)=>(jp(t,e,"write to private field"),e.set(t,i),i),Aa,vs,Oi,Cr,mi,pi,vi,Ni,ka,fs,mt;const uh=1,ch=0,q1=1,Y1={processCallback(t,e,i){if(i){for(const[a,r]of e)if(a in i){const n=i[a];typeof n=="boolean"&&r instanceof bt&&typeof r.element[r.attributeName]=="boolean"?r.booleanValue=n:typeof n=="function"&&r instanceof bt?r.element[r.attributeName]=n:r.value=n}}}};class xo extends f.DocumentFragment{constructor(e,i,a=Y1){var r;super(),$t(this,Aa,void 0),$t(this,vs,void 0),this.append(e.content.cloneNode(!0)),Xt(this,Aa,zp(this)),Xt(this,vs,a),(r=a.createCallback)==null||r.call(a,this,U(this,Aa),i),a.processCallback(this,U(this,Aa),i)}update(e){U(this,vs).processCallback(this,U(this,Aa),e)}}Aa=new WeakMap;vs=new WeakMap;const zp=(t,e=[])=>{let i,a;for(const r of t.attributes||[])if(r.value.includes("{{")){const n=new Q1;for([i,a]of mh(r.value))if(!i)n.append(a);else{const s=new bt(t,r.name,r.namespaceURI);n.append(s),e.push([a,s])}r.value=n.toString()}for(const r of t.childNodes)if(r.nodeType===uh&&!(r instanceof HTMLTemplateElement))zp(r,e);else{const n=r.data;if(r.nodeType===uh||n.includes("{{")){const s=[];if(n)for([i,a]of mh(n))if(!i)s.push(new Text(a));else{const o=new Xa(t);s.push(o),e.push([a,o])}else if(r instanceof HTMLTemplateElement){const o=new ev(t,r);s.push(o),e.push([o.expression,o])}r.replaceWith(...s.flatMap(o=>o.replacementNodes||[o]))}}return e},hh={},mh=t=>{let e="",i=0,a=hh[t],r=0,n;if(a)return a;for(a=[];n=t[r];r++)n==="{"&&t[r+1]==="{"&&t[r-1]!=="\\"&&t[r+2]&&++i==1?(e&&a.push([ch,e]),e="",r++):n==="}"&&t[r+1]==="}"&&t[r-1]!=="\\"&&!--i?(a.push([q1,e.trim()]),e="",r++):e+=n||"";return e&&a.push([ch,(i>0?"{{":"")+e]),hh[t]=a},G1=11;class Xp{get value(){return""}set value(e){}toString(){return this.value}}const Jp=new WeakMap;class Q1{constructor(){$t(this,Oi,[])}[Symbol.iterator](){return U(this,Oi).values()}get length(){return U(this,Oi).length}item(e){return U(this,Oi)[e]}append(...e){for(const i of e)i instanceof bt&&Jp.set(i,this),U(this,Oi).push(i)}toString(){return U(this,Oi).join("")}}Oi=new WeakMap;class bt extends Xp{constructor(e,i,a){super(),$t(this,Ni),$t(this,Cr,""),$t(this,mi,void 0),$t(this,pi,void 0),$t(this,vi,void 0),Xt(this,mi,e),Xt(this,pi,i),Xt(this,vi,a)}get attributeName(){return U(this,pi)}get attributeNamespace(){return U(this,vi)}get element(){return U(this,mi)}get value(){return U(this,Cr)}set value(e){U(this,Cr)!==e&&(Xt(this,Cr,e),!U(this,Ni,ka)||U(this,Ni,ka).length===1?e==null?U(this,mi).removeAttributeNS(U(this,vi),U(this,pi)):U(this,mi).setAttributeNS(U(this,vi),U(this,pi),e):U(this,mi).setAttributeNS(U(this,vi),U(this,pi),U(this,Ni,ka).toString()))}get booleanValue(){return U(this,mi).hasAttributeNS(U(this,vi),U(this,pi))}set booleanValue(e){if(!U(this,Ni,ka)||U(this,Ni,ka).length===1)this.value=e?"":null;else throw new DOMException("Value is not fully templatized")}}Cr=new WeakMap;mi=new WeakMap;pi=new WeakMap;vi=new WeakMap;Ni=new WeakSet;ka=function(){return Jp.get(this)};class Xa extends Xp{constructor(e,i){super(),$t(this,fs,void 0),$t(this,mt,void 0),Xt(this,fs,e),Xt(this,mt,i?[...i]:[new Text])}get replacementNodes(){return U(this,mt)}get parentNode(){return U(this,fs)}get nextSibling(){return U(this,mt)[U(this,mt).length-1].nextSibling}get previousSibling(){return U(this,mt)[0].previousSibling}get value(){return U(this,mt).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){const i=e.flat().flatMap(a=>a==null?[new Text]:a.forEach?[...a]:a.nodeType===G1?[...a.childNodes]:a.nodeType?[a]:[new Text(a)]);i.length||i.push(new Text),Xt(this,mt,Z1(U(this,mt)[0].parentNode,U(this,mt),i,this.nextSibling))}}fs=new WeakMap;mt=new WeakMap;class ev extends Xa{constructor(e,i){const a=i.getAttribute("directive")||i.getAttribute("type");let r=i.getAttribute("expression")||i.getAttribute(a)||"";r.startsWith("{{")&&(r=r.trim().slice(2,-2).trim()),super(e),this.expression=r,this.template=i,this.directive=a}}function Z1(t,e,i,a=null){let r=0,n,s,o,l=i.length,d=e.length;for(;r<l&&r<d&&e[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==e[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)t.insertBefore(i[r++],a);if(r==l)for(;r<d;)t.removeChild(e[r++]);else{for(n=e[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(t.replaceChild(o,n),n=s):t.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,t.removeChild(n),n=s}return i}const ph={string:t=>String(t)};class tv{constructor(e){this.template=e,this.state=void 0}}const Ki=new WeakMap,qi=new WeakMap,Yl={partial:(t,e)=>{e[t.expression]=new tv(t.template)},if:(t,e)=>{var i;if(iv(t.expression,e))if(Ki.get(t)!==t.template){Ki.set(t,t.template);const a=new xo(t.template,e,yu);t.replace(a),qi.set(t,a)}else(i=qi.get(t))==null||i.update(e);else t.replace(""),Ki.delete(t),qi.delete(t)}},j1=Object.keys(Yl),yu={processCallback(t,e,i){var a,r;if(i)for(const[n,s]of e){if(s instanceof ev){if(!s.directive){const l=j1.find(d=>s.template.hasAttribute(d));l&&(s.directive=l,s.expression=s.template.getAttribute(l))}(a=Yl[s.directive])==null||a.call(Yl,s,i);continue}let o=iv(n,i);if(o instanceof tv){Ki.get(s)!==o.template?(Ki.set(s,o.template),o=new xo(o.template,o.state,yu),s.value=o,qi.set(s,o)):(r=qi.get(s))==null||r.update(o.state);continue}o?(s instanceof bt&&s.attributeName.startsWith("aria-")&&(o=String(o)),s instanceof bt?typeof o=="boolean"?s.booleanValue=o:typeof o=="function"?s.element[s.attributeName]=o:s.value=o:(s.value=o,Ki.delete(s),qi.delete(s))):s instanceof bt?s.value=void 0:(s.value=void 0,Ki.delete(s),qi.delete(s))}}},vh={"!":t=>!t,"!!":t=>!!t,"==":(t,e)=>t==e,"!=":(t,e)=>t!=e,">":(t,e)=>t>e,">=":(t,e)=>t>=e,"<":(t,e)=>t<e,"<=":(t,e)=>t<=e,"??":(t,e)=>t??e,"|":(t,e)=>{var i;return(i=ph[e])==null?void 0:i.call(ph,t)}};function z1(t){return X1(t,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>e!=="ws")}function iv(t,e={}){var i,a,r,n,s,o,l;const d=z1(t);if(d.length===0||d.some(({type:m})=>!m))return or(t);if(((i=d[0])==null?void 0:i.token)===">"){const m=e[(a=d[1])==null?void 0:a.token];if(!m)return or(t);const p={...e};m.state=p;const h=d.slice(2);for(let c=0;c<h.length;c+=3){const v=(r=h[c])==null?void 0:r.token,g=(n=h[c+1])==null?void 0:n.token,_=(s=h[c+2])==null?void 0:s.token;v&&g==="="&&(p[v]=lr(_,e))}return m}if(d.length===1)return Rn(d[0])?lr(d[0].token,e):or(t);if(d.length===2){const m=(o=d[0])==null?void 0:o.token,p=vh[m];if(!p||!Rn(d[1]))return or(t);const h=lr(d[1].token,e);return p(h)}if(d.length===3){const m=(l=d[1])==null?void 0:l.token,p=vh[m];if(!p||!Rn(d[0])||!Rn(d[2]))return or(t);const h=lr(d[0].token,e);if(m==="|")return p(h,d[2].token);const c=lr(d[2].token,e);return p(h,c)}}function or(t){return console.warn(`Warning: invalid expression \`${t}\``),!1}function Rn({type:t}){return["number","boolean","string","param"].includes(t)}function lr(t,e){const i=t[0],a=t.slice(-1);return t==="true"||t==="false"?t==="true":i===a&&["'",'"'].includes(i)?t.slice(1,-1):Wm(t)?parseFloat(t):e[t]}function X1(t,e){let i,a,r;const n=[];for(;t;){r=null,i=t.length;for(const s in e)a=e[s].exec(t),a&&a.index<i&&(r={token:a[0],type:s,matches:a.slice(1)},i=a.index);i&&n.push({token:t.substr(0,i),type:void 0}),r&&n.push(r),t=t.substr(i+(r?r.token.length:0))}return n}var Tu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Gl=(t,e,i)=>(Tu(t,e,"read from private field"),i?i.call(t):e.get(t)),dr=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Yi=(t,e,i,a)=>(Tu(t,e,"write to private field"),e.set(t,i),i),el=(t,e,i)=>(Tu(t,e,"access private method"),i),Pa,Es,$a,Ql,av,_s,Zl;const tl={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},rv=Te.createElement("template");rv.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class Oo extends f.HTMLElement{constructor(){super(),dr(this,Ql),dr(this,_s),dr(this,Pa,void 0),dr(this,Es,void 0),dr(this,$a,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());const e=new MutationObserver(i=>{var a;this.mediaController&&!((a=this.mediaController)!=null&&a.breakpointsComputed)||i.some(r=>{const n=r.target;return n===this?!0:n.localName!=="media-controller"?!1:!!(tl[r.attributeName]||r.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(ii.BREAKPOINTS_COMPUTED,this.render),el(this,Ql,av).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return(e=Gl(this,Pa))!=null?e:this.constructor.template}set template(e){if(e===null){this.removeAttribute("template");return}typeof e=="string"?this.setAttribute("template",e):e instanceof HTMLTemplateElement&&(Yi(this,Pa,e),Yi(this,$a,null),this.createRenderer())}get props(){var e,i,a;const r=[...Array.from((i=(e=this.mediaController)==null?void 0:e.attributes)!=null?i:[]).filter(({name:s})=>tl[s]||s.startsWith("breakpoint")),...Array.from(this.attributes)],n={};for(const s of r){const o=(a=tl[s.name])!=null?a:dg(s.name);let{value:l}=s;l!=null?(Wm(l)&&(l=parseFloat(l)),n[o]=l===""?!0:l):n[o]=!1}return n}attributeChangedCallback(e,i,a){e==="template"&&i!=a&&el(this,_s,Zl).call(this)}connectedCallback(){el(this,_s,Zl).call(this)}createRenderer(){this.template instanceof HTMLTemplateElement&&this.template!==Gl(this,Es)&&(Yi(this,Es,this.template),this.renderer=new xo(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(rv.content.cloneNode(!0),this.renderer))}render(){var e;(e=this.renderer)==null||e.update(this.props)}}Pa=new WeakMap;Es=new WeakMap;$a=new WeakMap;Ql=new WeakSet;av=function(t){if(Object.prototype.hasOwnProperty.call(this,t)){const e=this[t];delete this[t],this[t]=e}};_s=new WeakSet;Zl=function(){var t;const e=this.getAttribute("template");if(!e||e===Gl(this,$a))return;const i=this.getRootNode(),a=(t=i?.getElementById)==null?void 0:t.call(i,e);if(a){Yi(this,$a,e),Yi(this,Pa,a),this.createRenderer();return}J1(e)&&(Yi(this,$a,e),ey(e).then(r=>{const n=Te.createElement("template");n.innerHTML=r,Yi(this,Pa,n),this.createRenderer()}).catch(console.error))};Oo.observedAttributes=["template"];Oo.processor=yu;function J1(t){if(!/^(\/|\.\/|https?:\/\/)/.test(t))return!1;const e=/^https?:\/\//.test(t)?void 0:location.origin;try{new URL(t,e)}catch{return!1}return!0}async function ey(t){const e=await fetch(t);if(e.status!==200)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);return e.text()}f.customElements.get("media-theme")||f.customElements.define("media-theme",Oo);function ty({anchor:t,floating:e,placement:i}){const a=iy({anchor:t,floating:e}),{x:r,y:n}=ry(a,i);return{x:r,y:n}}function iy({anchor:t,floating:e}){return{anchor:ay(t,e.offsetParent),floating:{x:0,y:0,width:e.offsetWidth,height:e.offsetHeight}}}function ay(t,e){var i;const a=t.getBoundingClientRect(),r=(i=e?.getBoundingClientRect())!=null?i:{x:0,y:0};return{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}}function ry({anchor:t,floating:e},i){const a=ny(i)==="x"?"y":"x",r=a==="y"?"height":"width",n=nv(i),s=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l=t[r]/2-e[r]/2;let d;switch(n){case"top":d={x:s,y:t.y-e.height};break;case"bottom":d={x:s,y:t.y+t.height};break;case"right":d={x:t.x+t.width,y:o};break;case"left":d={x:t.x-e.width,y:o};break;default:d={x:t.x,y:t.y}}switch(i.split("-")[1]){case"start":d[a]-=l;break;case"end":d[a]+=l;break}return d}function nv(t){return t.split("-")[0]}function ny(t){return["top","bottom"].includes(nv(t))?"y":"x"}class Au extends Event{constructor({action:e="auto",relatedTarget:i,...a}){super("invoke",a),this.action=e,this.relatedTarget=i}}class sy extends Event{constructor({newState:e,oldState:i,...a}){super("toggle",a),this.newState=e,this.oldState=i}}var ku=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(ku(t,e,"read from private field"),i?i.call(t):e.get(t)),j=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ot=(t,e,i,a)=>(ku(t,e,"write to private field"),e.set(t,i),i),z=(t,e,i)=>(ku(t,e,"access private method"),i),Nt,ji,Ai,bs,gs,zi,sn,jl,sv,so,Su,oo,ys,zl,Xl,ov,Jl,lv,ed,dv,Ua,Ha,Ba,on,lo,wu,td,uv,Iu,cv,id,hv,Ru,mv,ad,pv,rd,vv,Fr,uo,nd,fv,Vr,co,Ts,sd;function Ga({type:t,text:e,value:i,checked:a}){const r=Te.createElement("media-chrome-menu-item");r.type=t,r.part.add("menu-item"),r.part.add(t),r.value=i,r.checked=a;const n=Te.createElement("span");return n.textContent=e,r.append(n),r}function Xi(t,e){let i=t.querySelector(`:scope > [slot="${e}"]`);if(i?.nodeName=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i=i.cloneNode(!0),i;const a=t.shadowRoot.querySelector(`[name="${e}"] > svg`);return a?a.cloneNode(!0):""}function oy(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `}const Ri={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class ot extends f.HTMLElement{constructor(){if(super(),j(this,jl),j(this,so),j(this,ys),j(this,Xl),j(this,Jl),j(this,ed),j(this,Ba),j(this,lo),j(this,td),j(this,Iu),j(this,id),j(this,Ru),j(this,ad),j(this,rd),j(this,Fr),j(this,nd),j(this,Vr),j(this,Ts),j(this,Nt,null),j(this,ji,null),j(this,Ai,null),j(this,bs,new Set),j(this,gs,void 0),j(this,zi,!1),j(this,sn,null),j(this,oo,()=>{const e=K(this,bs),i=new Set(this.items);for(const a of e)i.has(a)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:a}));for(const a of i)e.has(a)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:a}));Ot(this,bs,i)}),j(this,Ua,()=>{z(this,Ba,on).call(this),z(this,lo,wu).call(this,!1)}),j(this,Ha,()=>{z(this,Ba,on).call(this)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),Ot(this,gs,new MutationObserver(K(this,oo))),K(this,gs).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[Ri.DISABLED,Ri.HIDDEN,Ri.STYLE,Ri.ANCHOR,q.MEDIA_CONTROLLER]}static formatMenuItemText(e,i){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":z(this,jl,sv).call(this,e);break;case"invoke":z(this,Xl,ov).call(this,e);break;case"click":z(this,td,uv).call(this,e);break;case"toggle":z(this,id,hv).call(this,e);break;case"focusout":z(this,ad,pv).call(this,e);break;case"keydown":z(this,rd,vv).call(this,e);break}}connectedCallback(){var e,i;Ot(this,sn,Xm(this.shadowRoot,":host")),z(this,ys,zl).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),Ot(this,Nt,yl(this)),(i=(e=K(this,Nt))==null?void 0:e.associateElement)==null||i.call(e,this),this.hidden||(Va(ln(this),K(this,Ua)),Va(this,K(this,Ha))),z(this,so,Su).call(this)}disconnectedCallback(){var e,i;Ka(ln(this),K(this,Ua)),Ka(this,K(this,Ha)),this.disable(),(i=(e=K(this,Nt))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ot(this,Nt,null)}attributeChangedCallback(e,i,a){var r,n,s,o;e===Ri.HIDDEN&&a!==i?(K(this,zi)||Ot(this,zi,!0),this.hidden?z(this,ed,dv).call(this):z(this,Jl,lv).call(this),this.dispatchEvent(new sy({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===q.MEDIA_CONTROLLER?(i&&((n=(r=K(this,Nt))==null?void 0:r.unassociateElement)==null||n.call(r,this),Ot(this,Nt,null)),a&&this.isConnected&&(Ot(this,Nt,yl(this)),(o=(s=K(this,Nt))==null?void 0:s.associateElement)==null||o.call(s,this))):e===Ri.DISABLED&&a!==i?a==null?this.enable():this.disable():e===Ri.STYLE&&a!==i&&z(this,ys,zl).call(this)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?(e=To(this))==null?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(ly)}get radioGroupItems(){return this.items.filter(e=>e.role==="menuitemradio")}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,i;return(i=(e=this.checkedItems[0])==null?void 0:e.value)!=null?i:""}set value(e){const i=this.items.find(a=>a.value===e);i&&z(this,Ts,sd).call(this,i)}focus(){if(Ot(this,ji,Vd()),this.items.length){z(this,Vr,co).call(this,this.items[0]),this.items[0].focus();return}const e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');e?.focus()}handleSelect(e){var i;const a=z(this,Fr,uo).call(this,e);a&&(z(this,Ts,sd).call(this,a,a.type==="checkbox"),K(this,Ai)&&!this.hidden&&((i=K(this,ji))==null||i.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var i,a;const{key:r}=e,n=this.items,s=(a=(i=z(this,Fr,uo).call(this,e))!=null?i:z(this,nd,fv).call(this))!=null?a:n[0],o=n.indexOf(s);let l=Math.max(0,o);r==="ArrowDown"?l++:r==="ArrowUp"?l--:e.key==="Home"?l=0:e.key==="End"&&(l=n.length-1),l<0&&(l=n.length-1),l>n.length-1&&(l=0),z(this,Vr,co).call(this,n[l]),n[l].focus()}}Nt=new WeakMap;ji=new WeakMap;Ai=new WeakMap;bs=new WeakMap;gs=new WeakMap;zi=new WeakMap;sn=new WeakMap;jl=new WeakSet;sv=function(t){const e=t.target;for(const i of e.assignedNodes({flatten:!0}))i.nodeType===3&&i.textContent.trim()===""&&i.remove();["header","title"].includes(e.name)&&z(this,so,Su).call(this),e.name||K(this,oo).call(this)};so=new WeakSet;Su=function(){const t=this.shadowRoot.querySelector('slot[name="header"]'),e=this.shadowRoot.querySelector('slot[name="title"]');t.hidden=e.assignedNodes().length===0&&t.assignedNodes().length===0};oo=new WeakMap;ys=new WeakSet;zl=function(){var t;const e=this.shadowRoot.querySelector("#layout-row"),i=(t=getComputedStyle(this).getPropertyValue("--media-menu-layout"))==null?void 0:t.trim();e.setAttribute("media",i==="row"?"":"width:0")};Xl=new WeakSet;ov=function(t){Ot(this,Ai,t.relatedTarget),ri(this,t.relatedTarget)||(this.hidden=!this.hidden)};Jl=new WeakSet;lv=function(){var t;(t=K(this,Ai))==null||t.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),Va(ln(this),K(this,Ua)),Va(this,K(this,Ha))};ed=new WeakSet;dv=function(){var t;(t=K(this,Ai))==null||t.setAttribute("aria-expanded","false"),Ka(ln(this),K(this,Ua)),Ka(this,K(this,Ha))};Ua=new WeakMap;Ha=new WeakMap;Ba=new WeakSet;on=function(t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;const{x:e,y:i}=ty({anchor:this.anchorElement,floating:this,placement:"top-start"});t??(t=this.offsetWidth);const r=ln(this).getBoundingClientRect(),n=r.width-e-t,s=r.height-i-this.offsetHeight,{style:o}=K(this,sn);o.setProperty("position","absolute"),o.setProperty("right",`${Math.max(0,n)}px`),o.setProperty("--_menu-bottom",`${s}px`);const l=getComputedStyle(this),m=o.getPropertyValue("--_menu-bottom")===l.bottom?s:parseFloat(l.bottom),p=r.height-m-parseFloat(l.marginBottom);this.style.setProperty("--_menu-max-height",`${p}px`)};lo=new WeakSet;wu=function(t){const e=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=e?.querySelector('[role="menu"]'),{style:a}=K(this,sn);if(t||a.setProperty("--media-menu-transition-in","none"),i){const r=i.offsetHeight,n=Math.max(i.offsetWidth,e.offsetWidth);this.style.setProperty("min-width",`${n}px`),this.style.setProperty("min-height",`${r}px`),z(this,Ba,on).call(this,n)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),z(this,Ba,on).call(this);a.removeProperty("--media-menu-transition-in")};td=new WeakSet;uv=function(t){var e;if(t.stopPropagation(),t.composedPath().includes(K(this,Iu,cv))){(e=K(this,ji))==null||e.focus(),this.hidden=!0;return}const i=z(this,Fr,uo).call(this,t);!i||i.hasAttribute("disabled")||(z(this,Vr,co).call(this,i),this.handleSelect(t))};Iu=new WeakSet;cv=function(){var t;return(t=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))==null?void 0:t.find(i=>i.matches('button[part~="back"]'))};id=new WeakSet;hv=function(t){if(t.target===this)return;z(this,Ru,mv).call(this);const e=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(const i of e)i.invokeTargetElement!=t.target&&t.newState=="open"&&i.getAttribute("aria-expanded")=="true"&&!i.invokeTargetElement.hidden&&i.invokeTargetElement.dispatchEvent(new Au({relatedTarget:i}));for(const i of e)i.setAttribute("aria-expanded",`${!i.submenuElement.hidden}`);z(this,lo,wu).call(this,!0)};Ru=new WeakSet;mv=function(){const e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)};ad=new WeakSet;pv=function(t){var e;ri(this,t.relatedTarget)||(K(this,zi)&&((e=K(this,ji))==null||e.focus()),K(this,Ai)&&K(this,Ai)!==t.relatedTarget&&!this.hidden&&(this.hidden=!0))};rd=new WeakSet;vv=function(t){var e,i,a,r,n;const{key:s,ctrlKey:o,altKey:l,metaKey:d}=t;if(!(o||l||d)&&this.keysUsed.includes(s))if(t.preventDefault(),t.stopPropagation(),s==="Tab"){if(K(this,zi)){this.hidden=!0;return}t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()}else s==="Escape"?((n=K(this,ji))==null||n.focus(),K(this,zi)&&(this.hidden=!0)):s==="Enter"||s===" "?this.handleSelect(t):this.handleMove(t)};Fr=new WeakSet;uo=function(t){return t.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))};nd=new WeakSet;fv=function(){return this.items.find(t=>t.tabIndex===0)};Vr=new WeakSet;co=function(t){for(const e of this.items)e.tabIndex=e===t?0:-1};Ts=new WeakSet;sd=function(t,e){const i=[...this.checkedItems];t.type==="radio"&&this.radioGroupItems.forEach(a=>a.checked=!1),e?t.checked=!t.checked:t.checked=!0,this.checkedItems.some((a,r)=>a!=i[r])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))};ot.shadowRootOptions={mode:"open"};ot.getTemplateHTML=oy;function ly(t){return["menuitem","menuitemradio","menuitemcheckbox"].includes(t?.role)}function ln(t){var e;return(e=t.getAttribute("bounds")?ja(t,`#${t.getAttribute("bounds")}`):Ue(t)||t.parentElement)!=null?e:t}f.customElements.get("media-chrome-menu")||f.customElements.define("media-chrome-menu",ot);var Cu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Bt=(t,e,i)=>(Cu(t,e,"read from private field"),i?i.call(t):e.get(t)),Gt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},il=(t,e,i,a)=>(Cu(t,e,"write to private field"),e.set(t,i),i),_t=(t,e,i)=>(Cu(t,e,"access private method"),i),As,Kr,od,Ev,ho,Du,Lu,_v,Wt,Qa,dn,ld,bv,ks,dd;function dy(t){return`
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(t)}
    </slot>
    <slot name="submenu"></slot>
  `}function uy(t){return""}const et={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class Si extends f.HTMLElement{constructor(){if(super(),Gt(this,od),Gt(this,ho),Gt(this,Lu),Gt(this,Qa),Gt(this,ld),Gt(this,ks),Gt(this,As,!1),Gt(this,Kr,void 0),Gt(this,Wt,()=>{var e,i;this.submenuElement.items&&this.setAttribute("submenusize",`${this.submenuElement.items.length}`);const a=this.shadowRoot.querySelector('slot[name="description"]'),r=(e=this.submenuElement.checkedItems)==null?void 0:e[0],n=(i=r?.dataset.description)!=null?i:r?.text,s=Te.createElement("span");s.textContent=n??"",a.replaceChildren(s)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=Xe(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[et.TYPE,et.DISABLED,et.CHECKED,et.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),ur(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":_t(this,od,Ev).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":_t(this,ld,bv).call(this,e);break;case"keyup":_t(this,Qa,dn).call(this,e);break}}attributeChangedCallback(e,i,a){e===et.CHECKED&&ur(this)&&!Bt(this,As)?this.setAttribute("aria-checked",a!=null?"true":"false"):e===et.TYPE&&a!==i?this.role="menuitem"+a:e===et.DISABLED&&a!==i&&(a==null?this.enable():this.disable())}connectedCallback(){this.hasAttribute(et.DISABLED)||this.enable(),this.role="menuitem"+this.type,il(this,Kr,ud(this,this.parentNode)),_t(this,ks,dd).call(this),this.submenuElement&&_t(this,ho,Du).call(this)}disconnectedCallback(){this.disable(),_t(this,ks,dd).call(this),il(this,Kr,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=To(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return(e=this.getAttribute(et.TYPE))!=null?e:""}set type(e){this.setAttribute(et.TYPE,`${e}`)}get value(){var e;return(e=this.getAttribute(et.VALUE))!=null?e:this.text}set value(e){this.setAttribute(et.VALUE,e)}get text(){var e;return((e=this.textContent)!=null?e:"").trim()}get checked(){if(ur(this))return this.getAttribute("aria-checked")==="true"}set checked(e){ur(this)&&(il(this,As,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){ur(this)||this.invokeTargetElement&&ri(this,e.target)&&this.invokeTargetElement.dispatchEvent(new Au({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}As=new WeakMap;Kr=new WeakMap;od=new WeakSet;Ev=function(t){const e=t.target;if(!e?.name)for(const a of e.assignedNodes({flatten:!0}))a instanceof Text&&a.textContent.trim()===""&&a.remove();e.name==="submenu"&&(this.submenuElement?_t(this,ho,Du).call(this):_t(this,Lu,_v).call(this))};ho=new WeakSet;Du=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",Bt(this,Wt)),this.submenuElement.addEventListener("addmenuitem",Bt(this,Wt)),this.submenuElement.addEventListener("removemenuitem",Bt(this,Wt)),Bt(this,Wt).call(this)};Lu=new WeakSet;_v=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",Bt(this,Wt)),this.submenuElement.removeEventListener("addmenuitem",Bt(this,Wt)),this.submenuElement.removeEventListener("removemenuitem",Bt(this,Wt)),Bt(this,Wt).call(this)};Wt=new WeakMap;Qa=new WeakSet;dn=function(t){const{key:e}=t;if(!this.keysUsed.includes(e)){this.removeEventListener("keyup",_t(this,Qa,dn));return}this.handleClick(t)};ld=new WeakSet;bv=function(t){const{metaKey:e,altKey:i,key:a}=t;if(e||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",_t(this,Qa,dn));return}this.addEventListener("keyup",_t(this,Qa,dn),{once:!0})};ks=new WeakSet;dd=function(){var t;const e=(t=Bt(this,Kr))==null?void 0:t.radioGroupItems;if(!e)return;let i=e.filter(a=>a.getAttribute("aria-checked")==="true").pop();i||(i=e[0]);for(const a of e)a.setAttribute("aria-checked","false");i?.setAttribute("aria-checked","true")};Si.shadowRootOptions={mode:"open"};Si.getTemplateHTML=dy;Si.getSuffixSlotInnerHTML=uy;function ur(t){return t.type==="radio"||t.type==="checkbox"}function ud(t,e){if(!t)return null;const{host:i}=t.getRootNode();return!e&&i?ud(t,i):e?.items?e:ud(e,e?.parentNode)}f.customElements.get("media-chrome-menu-item")||f.customElements.define("media-chrome-menu-item",Si);function cy(t){return`
    ${ot.getTemplateHTML(t)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `}class gv extends ot{get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ue(this).querySelector("media-settings-menu-button")}}gv.getTemplateHTML=cy;f.customElements.get("media-settings-menu")||f.customElements.define("media-settings-menu",gv);function hy(t){return`
    ${Si.getTemplateHTML.call(this,t)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `}function my(t){return`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `}class No extends Si{}No.shadowRootOptions={mode:"open"};No.getTemplateHTML=hy;No.getSuffixSlotInnerHTML=my;f.customElements.get("media-settings-menu-item")||f.customElements.define("media-settings-menu-item",No);class Ja extends De{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?(e=To(this))==null?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){var e;(e=this.invokeTargetElement)==null||e.dispatchEvent(new Au({relatedTarget:this}))}}f.customElements.get("media-chrome-menu-button")||f.customElements.define("media-chrome-menu-button",Ja);function py(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `}function vy(){return C("Settings")}class Mu extends Ja{static get observedAttributes(){return[...super.observedAttributes,"target"]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",C("settings"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ue(this).querySelector("media-settings-menu")}}Mu.getSlotTemplateHTML=py;Mu.getTooltipContentHTML=vy;f.customElements.get("media-settings-menu-button")||f.customElements.define("media-settings-menu-button",Mu);var xu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},yv=(t,e,i)=>(xu(t,e,"read from private field"),i?i.call(t):e.get(t)),Cn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cd=(t,e,i,a)=>(xu(t,e,"write to private field"),e.set(t,i),i),Dn=(t,e,i)=>(xu(t,e,"access private method"),i),Dr,mo,Ss,hd,ws,md;class fy extends ot{constructor(){super(...arguments),Cn(this,Ss),Cn(this,ws),Cn(this,Dr,[]),Cn(this,mo,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_LIST,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_AUDIO_TRACK_ENABLED&&i!==a?this.value=a:e===u.MEDIA_AUDIO_TRACK_LIST&&i!==a&&(cd(this,Dr,sg(a??"")),Dn(this,Ss,hd).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",Dn(this,ws,md))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",Dn(this,ws,md))}get anchorElement(){var e;return this.anchor!=="auto"?super.anchorElement:(e=Ue(this))==null?void 0:e.querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return yv(this,Dr)}set mediaAudioTrackList(e){cd(this,Dr,e),Dn(this,Ss,hd).call(this)}get mediaAudioTrackEnabled(){var e;return(e=ae(this,u.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){re(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}}Dr=new WeakMap;mo=new WeakMap;Ss=new WeakSet;hd=function(){if(yv(this,mo)===JSON.stringify(this.mediaAudioTrackList))return;cd(this,mo,JSON.stringify(this.mediaAudioTrackList));const t=this.mediaAudioTrackList;this.defaultSlot.textContent="",t.sort((e,i)=>e.id.localeCompare(i.id,void 0,{numeric:!0}));for(const e of t){const i=this.formatMenuItemText(e.label,e),a=Ga({type:"radio",text:i,value:`${e.id}`,checked:e.enabled});a.prepend(Xi(this,"checked-indicator")),this.defaultSlot.append(a)}};ws=new WeakSet;md=function(){if(this.value==null)return;const t=new f.CustomEvent(R.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};f.customElements.get("media-audio-track-menu")||f.customElements.define("media-audio-track-menu",fy);const Ey=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`;function _y(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${Ey}</slot>
  `}function by(){return C("Audio")}const fh=t=>{const e=C("Audio");t.setAttribute("aria-label",e)};class Ou extends Ja{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_AUDIO_TRACK_ENABLED,u.MEDIA_AUDIO_TRACK_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),fh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_LANG&&fh(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ue(this))==null?void 0:e.querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){var e;return(e=ae(this,u.MEDIA_AUDIO_TRACK_ENABLED))!=null?e:""}set mediaAudioTrackEnabled(e){re(this,u.MEDIA_AUDIO_TRACK_ENABLED,e)}}Ou.getSlotTemplateHTML=_y;Ou.getTooltipContentHTML=by;f.customElements.get("media-audio-track-menu-button")||f.customElements.define("media-audio-track-menu-button",Ou);var Nu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},gy=(t,e,i)=>(Nu(t,e,"read from private field"),e.get(t)),al=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},yy=(t,e,i,a)=>(Nu(t,e,"write to private field"),e.set(t,i),i),rl=(t,e,i)=>(Nu(t,e,"access private method"),i),po,pd,Tv,Is,vd;const Ty=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`;function Ay(t){return`
    ${ot.getTemplateHTML(t)}
    <slot name="captions-indicator" hidden>${Ty}</slot>
  `}class Av extends ot{constructor(){super(...arguments),al(this,pd),al(this,Is),al(this,po,void 0)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_SUBTITLES_LIST&&i!==a?rl(this,pd,Tv).call(this):e===u.MEDIA_SUBTITLES_SHOWING&&i!==a&&(this.value=a)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",rl(this,Is,vd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",rl(this,Is,vd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ue(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return Eh(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){_h(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Eh(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){_h(this,u.MEDIA_SUBTITLES_SHOWING,e)}}po=new WeakMap;pd=new WeakSet;Tv=function(){var t;if(gy(this,po)===JSON.stringify(this.mediaSubtitlesList))return;yy(this,po,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";const e=!this.value,i=Ga({type:"radio",text:this.formatMenuItemText(C("Off")),value:"off",checked:e});i.prepend(Xi(this,"checked-indicator")),this.defaultSlot.append(i);const a=this.mediaSubtitlesList;for(const r of a){const n=Ga({type:"radio",text:this.formatMenuItemText(r.label,r),value:Sl(r),checked:this.value==Sl(r)});n.prepend(Xi(this,"checked-indicator")),((t=r.kind)!=null?t:"subs")==="captions"&&n.append(Xi(this,"captions-indicator")),this.defaultSlot.append(n)}};Is=new WeakSet;vd=function(){const t=this.mediaSubtitlesShowing,e=this.getAttribute(u.MEDIA_SUBTITLES_SHOWING),i=this.value!==e;if(t?.length&&i&&this.dispatchEvent(new f.CustomEvent(R.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:t})),!this.value||!i)return;const a=new f.CustomEvent(R.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};Av.getTemplateHTML=Ay;const Eh=(t,e)=>{const i=t.getAttribute(e);return i?Io(i):[]},_h=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Jr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};f.customElements.get("media-captions-menu")||f.customElements.define("media-captions-menu",Av);const ky=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Sy=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function wy(){return`
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ky}</slot>
      <slot name="off">${Sy}</slot>
    </slot>
  `}function Iy(){return C("Captions")}const bh=t=>{t.setAttribute("data-captions-enabled",lp(t).toString())},gh=t=>{t.setAttribute("aria-label",C("closed captions"))};class Pu extends Ja{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_SUBTITLES_LIST,u.MEDIA_SUBTITLES_SHOWING,u.MEDIA_LANG]}connectedCallback(){super.connectedCallback(),gh(this),bh(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_SUBTITLES_SHOWING?bh(this):e===u.MEDIA_LANG&&gh(this)}get invokeTargetElement(){var e;return this.invokeTarget!=null?super.invokeTargetElement:(e=Ue(this))==null?void 0:e.querySelector("media-captions-menu")}get mediaSubtitlesList(){return yh(this,u.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Th(this,u.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return yh(this,u.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Th(this,u.MEDIA_SUBTITLES_SHOWING,e)}}Pu.getSlotTemplateHTML=wy;Pu.getTooltipContentHTML=Iy;const yh=(t,e)=>{const i=t.getAttribute(e);return i?Io(i):[]},Th=(t,e,i)=>{if(!i?.length){t.removeAttribute(e);return}const a=Jr(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};f.customElements.get("media-captions-menu-button")||f.customElements.define("media-captions-menu-button",Pu);var kv=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Sa=(t,e,i)=>(kv(t,e,"read from private field"),i?i.call(t):e.get(t)),nl=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},cr=(t,e,i)=>(kv(t,e,"access private method"),i),Ei,Lr,Rs,Cs,fd;const sl={RATES:"rates"};class Ry extends ot{constructor(){super(),nl(this,Lr),nl(this,Cs),nl(this,Ei,new Yd(this,sl.RATES,{defaultValue:Hp})),cr(this,Lr,Rs).call(this)}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE,sl.RATES]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_PLAYBACK_RATE&&i!=a?this.value=a:e===sl.RATES&&i!=a&&(Sa(this,Ei).value=a,cr(this,Lr,Rs).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",cr(this,Cs,fd))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",cr(this,Cs,fd))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ue(this).querySelector("media-playback-rate-menu-button")}get rates(){return Sa(this,Ei)}set rates(e){e?Array.isArray(e)?Sa(this,Ei).value=e.join(" "):typeof e=="string"&&(Sa(this,Ei).value=e):Sa(this,Ei).value="",cr(this,Lr,Rs).call(this)}get mediaPlaybackRate(){return ie(this,u.MEDIA_PLAYBACK_RATE,La)}set mediaPlaybackRate(e){de(this,u.MEDIA_PLAYBACK_RATE,e)}}Ei=new WeakMap;Lr=new WeakSet;Rs=function(){this.defaultSlot.textContent="";for(const t of Sa(this,Ei)){const e=Ga({type:"radio",text:this.formatMenuItemText(`${t}x`,t),value:t,checked:this.mediaPlaybackRate===Number(t)});e.prepend(Xi(this,"checked-indicator")),this.defaultSlot.append(e)}};Cs=new WeakSet;fd=function(){if(!this.value)return;const t=new f.CustomEvent(R.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};f.customElements.get("media-playback-rate-menu")||f.customElements.define("media-playback-rate-menu",Ry);const Ds=1;function Cy(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
      
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate||Ds}x</slot>
  `}function Dy(){return C("Playback rate")}class $u extends Ja{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_PLAYBACK_RATE]}constructor(){var e;super(),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${(e=this.mediaPlaybackRate)!=null?e:Ds}x`}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===u.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,n=Number.isNaN(r)?Ds:r;this.container.innerHTML=`${n}x`,this.setAttribute("aria-label",C("Playback rate {playbackRate}",{playbackRate:n}))}}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ue(this).querySelector("media-playback-rate-menu")}get mediaPlaybackRate(){return ie(this,u.MEDIA_PLAYBACK_RATE,Ds)}set mediaPlaybackRate(e){de(this,u.MEDIA_PLAYBACK_RATE,e)}}$u.getSlotTemplateHTML=Cy;$u.getTooltipContentHTML=Dy;f.customElements.get("media-playback-rate-menu-button")||f.customElements.define("media-playback-rate-menu-button",$u);var Uu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Mr=(t,e,i)=>(Uu(t,e,"read from private field"),i?i.call(t):e.get(t)),Ln=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ah=(t,e,i,a)=>(Uu(t,e,"write to private field"),e.set(t,i),i),da=(t,e,i)=>(Uu(t,e,"access private method"),i),xr,Ma,wa,Or,Ls,Ed;class Ly extends ot{constructor(){super(...arguments),Ln(this,wa),Ln(this,Ls),Ln(this,xr,[]),Ln(this,Ma,{})}static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_LIST,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE,u.MEDIA_HEIGHT]}static formatMenuItemText(e,i){return super.formatMenuItemText(e,i)}static formatRendition(e,{showBitrate:i=!1}={}){const a=`${Math.min(e.width,e.height)}p`;if(i&&e.bitrate){const r=e.bitrate/1e6,n=`${r.toFixed(r<1?1:0)} Mbps`;return`${a} (${n})`}return this.formatMenuItemText(a,e)}static compareRendition(e,i){var a,r;return i.height===e.height?((a=i.bitrate)!=null?a:0)-((r=e.bitrate)!=null?r:0):i.height-e.height}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===u.MEDIA_RENDITION_SELECTED&&i!==a?(this.value=a??"auto",da(this,wa,Or).call(this)):e===u.MEDIA_RENDITION_LIST&&i!==a?(Ah(this,xr,ig(a)),da(this,wa,Or).call(this)):e===u.MEDIA_HEIGHT&&i!==a&&da(this,wa,Or).call(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",da(this,Ls,Ed))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",da(this,Ls,Ed))}get anchorElement(){return this.anchor!=="auto"?super.anchorElement:Ue(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return Mr(this,xr)}set mediaRenditionList(e){Ah(this,xr,e),da(this,wa,Or).call(this)}get mediaRenditionSelected(){return ae(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){re(this,u.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ie(this,u.MEDIA_HEIGHT)}set mediaHeight(e){de(this,u.MEDIA_HEIGHT,e)}compareRendition(e,i){return this.constructor.compareRendition(e,i)}formatMenuItemText(e,i){return this.constructor.formatMenuItemText(e,i)}formatRendition(e,i){return this.constructor.formatRendition(e,i)}showRenditionBitrate(e){return this.mediaRenditionList.some(i=>i!==e&&i.height===e.height&&i.bitrate!==e.bitrate)}}xr=new WeakMap;Ma=new WeakMap;wa=new WeakSet;Or=function(){if(Mr(this,Ma).mediaRenditionList===JSON.stringify(this.mediaRenditionList)&&Mr(this,Ma).mediaHeight===this.mediaHeight)return;Mr(this,Ma).mediaRenditionList=JSON.stringify(this.mediaRenditionList),Mr(this,Ma).mediaHeight=this.mediaHeight;const t=this.mediaRenditionList.sort(this.compareRendition.bind(this)),e=t.find(s=>s.id===this.mediaRenditionSelected);for(const s of t)s.selected=s===e;this.defaultSlot.textContent="";const i=!this.mediaRenditionSelected;for(const s of t){const o=this.formatRendition(s,{showBitrate:this.showRenditionBitrate(s)}),l=Ga({type:"radio",text:o,value:`${s.id}`,checked:s.selected&&!i});l.prepend(Xi(this,"checked-indicator")),this.defaultSlot.append(l)}const a=e&&this.showRenditionBitrate(e),r=i?e?this.formatMenuItemText(`${C("Auto")} • ${this.formatRendition(e,{showBitrate:a})}`,e):this.formatMenuItemText(`${C("Auto")} (${this.mediaHeight}p)`):this.formatMenuItemText(C("Auto")),n=Ga({type:"radio",text:r,value:"auto",checked:i});n.dataset.description=r,n.prepend(Xi(this,"checked-indicator")),this.defaultSlot.append(n)};Ls=new WeakSet;Ed=function(){if(this.value==null)return;const t=new f.CustomEvent(R.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(t)};f.customElements.get("media-rendition-menu")||f.customElements.define("media-rendition-menu",Ly);const My=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`;function xy(){return`
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${My}</slot>
  `}function Oy(){return C("Quality")}class Hu extends Ja{static get observedAttributes(){return[...super.observedAttributes,u.MEDIA_RENDITION_SELECTED,u.MEDIA_RENDITION_UNAVAILABLE,u.MEDIA_HEIGHT]}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",C("quality"))}get invokeTargetElement(){return this.invokeTarget!=null?super.invokeTargetElement:Ue(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return ae(this,u.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){re(this,u.MEDIA_RENDITION_SELECTED,e)}get mediaHeight(){return ie(this,u.MEDIA_HEIGHT)}set mediaHeight(e){de(this,u.MEDIA_HEIGHT,e)}}Hu.getSlotTemplateHTML=xy;Hu.getTooltipContentHTML=Oy;f.customElements.get("media-rendition-menu-button")||f.customElements.define("media-rendition-menu-button",Hu);var Bu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Pt=(t,e,i)=>(Bu(t,e,"read from private field"),i?i.call(t):e.get(t)),kt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Sv=(t,e,i,a)=>(Bu(t,e,"write to private field"),e.set(t,i),i),at=(t,e,i)=>(Bu(t,e,"access private method"),i),Za,un,Po,Bi,xa,Wu,wv,Ms,_d,xs,bd,Iv,vo,fo,Os;function Ny(t){return`
      ${ot.getTemplateHTML(t)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `}class Rv extends ot{constructor(){super(),kt(this,un),kt(this,Bi),kt(this,Wu),kt(this,Ms),kt(this,bd),kt(this,Za,!1),kt(this,xs,e=>{const i=e.target,a=i?.nodeName==="VIDEO",r=at(this,Ms,_d).call(this,i);(a||r)&&(Pt(this,Za)?at(this,Bi,xa).call(this):at(this,bd,Iv).call(this,e))}),kt(this,vo,e=>{const i=e.target,a=this.contains(i),r=e.button===2,n=i?.nodeName==="VIDEO",s=at(this,Ms,_d).call(this,i);a||r&&(n||s)||at(this,Bi,xa).call(this)}),kt(this,fo,e=>{e.key==="Escape"&&at(this,Bi,xa).call(this)}),kt(this,Os,e=>{var i,a;const r=e.target;if((i=r.matches)!=null&&i.call(r,'button[invoke="copy"]')){const n=(a=r.closest("media-context-menu-item"))==null?void 0:a.querySelector('input[slot="copy"]');n&&navigator.clipboard.writeText(n.value)}at(this,Bi,xa).call(this)}),this.setAttribute("noautohide",""),at(this,un,Po).call(this)}connectedCallback(){super.connectedCallback(),Ue(this).addEventListener("contextmenu",Pt(this,xs)),this.addEventListener("click",Pt(this,Os))}disconnectedCallback(){super.disconnectedCallback(),Ue(this).removeEventListener("contextmenu",Pt(this,xs)),this.removeEventListener("click",Pt(this,Os)),document.removeEventListener("mousedown",Pt(this,vo)),document.removeEventListener("keydown",Pt(this,fo))}}Za=new WeakMap;un=new WeakSet;Po=function(){this.hidden=!Pt(this,Za)};Bi=new WeakSet;xa=function(){Sv(this,Za,!1),at(this,un,Po).call(this)};Wu=new WeakSet;wv=function(){document.querySelectorAll("media-context-menu").forEach(e=>{var i;e!==this&&at(i=e,Bi,xa).call(i)})};Ms=new WeakSet;_d=function(t){return t?t.hasAttribute("slot")&&t.getAttribute("slot")==="media"?!0:t.nodeName.includes("-")&&t.tagName.includes("-")?t.hasAttribute("src")||t.hasAttribute("poster")||t.hasAttribute("preload")||t.hasAttribute("playsinline"):!1:!1};xs=new WeakMap;bd=new WeakSet;Iv=function(t){t.preventDefault(),at(this,Wu,wv).call(this),Sv(this,Za,!0),this.style.position="fixed",this.style.left=`${t.clientX}px`,this.style.top=`${t.clientY}px`,at(this,un,Po).call(this),document.addEventListener("mousedown",Pt(this,vo),{once:!0}),document.addEventListener("keydown",Pt(this,fo),{once:!0})};vo=new WeakMap;fo=new WeakMap;Os=new WeakMap;Rv.getTemplateHTML=Ny;f.customElements.get("media-context-menu")||f.customElements.define("media-context-menu",Rv);function Py(t){return`
    ${Si.getTemplateHTML.call(this,t)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `}class Fu extends Si{}Fu.shadowRootOptions={mode:"open"};Fu.getTemplateHTML=Py;f.customElements.get("media-context-menu-item")||f.customElements.define("media-context-menu-item",Fu);var Cv=t=>{throw TypeError(t)},Vu=(t,e,i)=>e.has(t)||Cv("Cannot "+i),Z=(t,e,i)=>(Vu(t,e,"read from private field"),i?i.call(t):e.get(t)),ft=(t,e,i)=>e.has(t)?Cv("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),Vt=(t,e,i,a)=>(Vu(t,e,"write to private field"),e.set(t,i),i),fe=(t,e,i)=>(Vu(t,e,"access private method"),i),$o=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends $o{}globalThis.DocumentFragment=t}var Ku=class extends $o{},$y=class extends $o{},Uy={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(Ku)}},Ns,Hy=class{constructor(e,i={}){ft(this,Ns),Vt(this,Ns,i?.detail)}get detail(){return Z(this,Ns)}initCustomEvent(){}};Ns=new WeakMap;function By(t,e){return new Ku}var Dv={document:{createElement:By},DocumentFragment,customElements:Uy,CustomEvent:Hy,EventTarget:$o,HTMLElement:Ku,HTMLVideoElement:$y},Lv=typeof window>"u"||typeof globalThis.customElements>"u",Ut=Lv?Dv:globalThis,Eo=Lv?Dv.document:globalThis.document;function Wy(t){let e="";return Object.entries(t).forEach(([i,a])=>{a!=null&&(e+=`${gd(i)}: ${a}; `)}),e?e.trim():void 0}function gd(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function Mv(t){return t.replace(/[-_]([a-z])/g,(e,i)=>i.toUpperCase())}function Ze(t){if(t==null)return;let e=+t;return Number.isNaN(e)?void 0:e}function xv(t){let e=Fy(t).toString();return e?"?"+e:""}function Fy(t){let e={};for(let i in t)t[i]!=null&&(e[i]=t[i]);return new URLSearchParams(e)}var Ov=(t,e)=>!t||!e?!1:t.contains(e)?!0:Ov(t,e.getRootNode().host),Nv="mux.com",Vy=()=>{try{return"3.8.0"}catch{}return"UNKNOWN"},Ky=Vy(),Pv=()=>Ky,qy=(t,{token:e,customDomain:i=Nv,thumbnailTime:a,programTime:r}={})=>{var n;let s=e==null?a:void 0,{aud:o}=(n=Oa(e))!=null?n:{};if(!(e&&o!=="t"))return`https://image.${i}/${t}/thumbnail.webp${xv({token:e,time:s,program_time:r})}`},Yy=(t,{token:e,customDomain:i=Nv,programStartTime:a,programEndTime:r}={})=>{var n;let{aud:s}=(n=Oa(e))!=null?n:{};if(!(e&&s!=="s"))return`https://image.${i}/${t}/storyboard.vtt${xv({token:e,format:"webp",program_start_time:a,program_end_time:r})}`},qu=t=>{if(t){if([Q.LIVE,Q.ON_DEMAND].includes(t))return t;if(t!=null&&t.includes("live"))return Q.LIVE}},Gy={crossorigin:"crossOrigin",playsinline:"playsInline"};function Qy(t){var e;return(e=Gy[t])!=null?e:Mv(t)}var Ia,Ra,$e,Zy=class{constructor(e,i){ft(this,Ia),ft(this,Ra),ft(this,$e,[]),Vt(this,Ia,e),Vt(this,Ra,i)}[Symbol.iterator](){return Z(this,$e).values()}get length(){return Z(this,$e).length}get value(){var e;return(e=Z(this,$e).join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(Vt(this,$e,[]),this.add(...(i=e?.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return Z(this,$e)[e]}values(){return Z(this,$e).values()}keys(){return Z(this,$e).keys()}forEach(e){Z(this,$e).forEach(e)}add(...e){var i,a;e.forEach(r=>{this.contains(r)||Z(this,$e).push(r)}),!(this.value===""&&!((i=Z(this,Ia))!=null&&i.hasAttribute(`${Z(this,Ra)}`)))&&((a=Z(this,Ia))==null||a.setAttribute(`${Z(this,Ra)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>{Z(this,$e).splice(Z(this,$e).indexOf(a),1)}),(i=Z(this,Ia))==null||i.setAttribute(`${Z(this,Ra)}`,`${this.value}`)}contains(e){return Z(this,$e).includes(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){this.remove(e),this.add(i)}};Ia=new WeakMap,Ra=new WeakMap,$e=new WeakMap;var $v=`[mux-player ${Pv()}]`;function zt(...t){console.warn($v,...t)}function rt(...t){console.error($v,...t)}function Uv(t){var e;let i=(e=t.message)!=null?e:"";t.context&&(i+=` ${t.context}`),t.file&&(i+=` ${L("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t.file}`),zt(i)}var Me={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},Pi={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},kh=Object.freeze({length:0,start(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(t){let e=t>>>0;if(e>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${e}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),jy=Object.values(Me).filter(t=>Me.PLAYSINLINE!==t),zy=Object.values(Pi),Xy=[...jy,...zy],Jy=class extends Ut.HTMLElement{static get observedAttributes(){return Xy}constructor(){super()}attributeChangedCallback(t,e,i){var a,r;switch(t){case Pi.MUTED:{this.media&&(this.media.muted=i!=null,this.media.defaultMuted=i!=null);return}case Pi.VOLUME:{let n=(a=Ze(i))!=null?a:1;this.media&&(this.media.volume=n);return}case Pi.PLAYBACKRATE:{let n=(r=Ze(i))!=null?r:1;this.media&&(this.media.playbackRate=n,this.media.defaultPlaybackRate=n);return}}}play(){var t,e;return(e=(t=this.media)==null?void 0:t.play())!=null?e:Promise.reject()}pause(){var t;(t=this.media)==null||t.pause()}load(){var t;(t=this.media)==null||t.load()}get media(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var t,e;return(e=(t=this.media)==null?void 0:t.paused)!=null?e:!0}get duration(){var t,e;return(e=(t=this.media)==null?void 0:t.duration)!=null?e:NaN}get ended(){var t,e;return(e=(t=this.media)==null?void 0:t.ended)!=null?e:!1}get buffered(){var t,e;return(e=(t=this.media)==null?void 0:t.buffered)!=null?e:kh}get seekable(){var t,e;return(e=(t=this.media)==null?void 0:t.seekable)!=null?e:kh}get readyState(){var t,e;return(e=(t=this.media)==null?void 0:t.readyState)!=null?e:0}get videoWidth(){var t,e;return(e=(t=this.media)==null?void 0:t.videoWidth)!=null?e:0}get videoHeight(){var t,e;return(e=(t=this.media)==null?void 0:t.videoHeight)!=null?e:0}get currentSrc(){var t,e;return(e=(t=this.media)==null?void 0:t.currentSrc)!=null?e:""}get currentTime(){var t,e;return(e=(t=this.media)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.media&&(this.media.currentTime=Number(t))}get volume(){var t,e;return(e=(t=this.media)==null?void 0:t.volume)!=null?e:1}set volume(t){this.media&&(this.media.volume=Number(t))}get playbackRate(){var t,e;return(e=(t=this.media)==null?void 0:t.playbackRate)!=null?e:1}set playbackRate(t){this.media&&(this.media.playbackRate=Number(t))}get defaultPlaybackRate(){var t;return(t=Ze(this.getAttribute(Pi.PLAYBACKRATE)))!=null?t:1}set defaultPlaybackRate(t){t!=null?this.setAttribute(Pi.PLAYBACKRATE,`${t}`):this.removeAttribute(Pi.PLAYBACKRATE)}get crossOrigin(){return hr(this,Me.CROSSORIGIN)}set crossOrigin(t){this.setAttribute(Me.CROSSORIGIN,`${t}`)}get autoplay(){return hr(this,Me.AUTOPLAY)!=null}set autoplay(t){t?this.setAttribute(Me.AUTOPLAY,typeof t=="string"?t:""):this.removeAttribute(Me.AUTOPLAY)}get loop(){return hr(this,Me.LOOP)!=null}set loop(t){t?this.setAttribute(Me.LOOP,""):this.removeAttribute(Me.LOOP)}get muted(){var t,e;return(e=(t=this.media)==null?void 0:t.muted)!=null?e:!1}set muted(t){this.media&&(this.media.muted=!!t)}get defaultMuted(){return hr(this,Me.MUTED)!=null}set defaultMuted(t){t?this.setAttribute(Me.MUTED,""):this.removeAttribute(Me.MUTED)}get playsInline(){return hr(this,Me.PLAYSINLINE)!=null}set playsInline(t){rt("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(t){["","none","metadata","auto"].includes(t)?this.setAttribute(Me.PRELOAD,t):this.removeAttribute(Me.PRELOAD)}};function hr(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Sh=Jy,eT=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,mr=new WeakMap,tT=class Hv{constructor(e,i){this.element=e,this.type=i,this.element.addEventListener(this.type,this);let a=mr.get(this.element);a&&a.set(this.type,this)}set(e){if(typeof e=="function")this.handleEvent=e.bind(this.element);else if(typeof e=="object"&&typeof e.handleEvent=="function")this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let i=mr.get(this.element);i&&i.delete(this.type)}}static for(e){mr.has(e.element)||mr.set(e.element,new Map);let i=e.attributeName.slice(2),a=mr.get(e.element);return a&&a.has(i)?a.get(i):new Hv(e.element,i)}};function iT(t,e){return t instanceof bt&&t.attributeName.startsWith("on")?(tT.for(t).set(e),t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),!0):!1}function aT(t,e){return e instanceof Bv&&t instanceof Xa?(e.renderInto(t),!0):!1}function rT(t,e){return e instanceof DocumentFragment&&t instanceof Xa?(e.childNodes.length&&t.replace(...e.childNodes),!0):!1}function nT(t,e){if(t instanceof bt){let i=t.attributeNamespace,a=t.element.getAttributeNS(i,t.attributeName);return String(e)!==a&&(t.value=String(e)),!0}return t.value=String(e),!0}function sT(t,e){if(t instanceof bt&&e instanceof Element){let i=t.element;return i[t.attributeName]!==e&&(t.element.removeAttributeNS(t.attributeNamespace,t.attributeName),i[t.attributeName]=e),!0}return!1}function oT(t,e){if(typeof e=="boolean"&&t instanceof bt){let i=t.attributeNamespace,a=t.element.hasAttributeNS(i,t.attributeName);return e!==a&&(t.booleanValue=e),!0}return!1}function lT(t,e){return e===!1&&t instanceof Xa?(t.replace(""),!0):!1}function dT(t,e){sT(t,e)||oT(t,e)||iT(t,e)||lT(t,e)||aT(t,e)||rT(t,e)||nT(t,e)}var ol=new Map,wh=new WeakMap,Ih=new WeakMap,Bv=class{constructor(e,i,a){this.strings=e,this.values=i,this.processor=a,this.stringsKey=this.strings.join("")}get template(){if(ol.has(this.stringsKey))return ol.get(this.stringsKey);{let e=Eo.createElement("template"),i=this.strings.length-1;return e.innerHTML=this.strings.reduce((a,r,n)=>a+r+(n<i?`{{ ${n} }}`:""),""),ol.set(this.stringsKey,e),e}}renderInto(e){var i;let a=this.template;if(wh.get(e)!==a){wh.set(e,a);let n=new xo(a,this.values,this.processor);Ih.set(e,n),e instanceof Xa?e.replace(...n.children):e.appendChild(n);return}let r=Ih.get(e);(i=r?.update)==null||i.call(r,this.values)}},uT={processCallback(t,e,i){var a;if(i){for(let[r,n]of e)if(r in i){let s=(a=i[r])!=null?a:"";dT(n,s)}}}};function Ps(t,...e){return new Bv(t,e,uT)}function cT(t,e){t.renderInto(e)}var hT=t=>{let{tokens:e}=t;return e.drm?":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }":""},mT=t=>Ps`
  <style>
    ${hT(t)}
    ${eT}
  </style>
  ${ET(t)}
`,pT=t=>{let e=t.hotKeys?`${t.hotKeys}`:"";return qu(t.streamType)==="live"&&(e+=" noarrowleft noarrowright"),e},vT={TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",MENU_BUTTON:"menu-button",MENU:"menu",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"},fT=Object.values(vT).join(", "),ET=t=>{var e,i,a,r,n,s,o,l,d,m,p,h,c,v,g,_,y,T,E,k,D,O,H,Y,X,V,P,Le,Be,We,he,Oe,yt,Ne,lt,Fe,Ae;return Ps`
  <media-theme
    template="${t.themeTemplate||!1}"
    defaultstreamtype="${(e=t.defaultStreamType)!=null?e:!1}"
    hotkeys="${pT(t)||!1}"
    nohotkeys="${t.noHotKeys||!t.hasSrc||!1}"
    noautoseektolive="${!!((i=t.streamType)!=null&&i.includes(Q.LIVE))&&t.targetLiveWindow!==0}"
    novolumepref="${t.novolumepref||!1}"
    nomutedpref="${t.nomutedpref||!1}"
    disabled="${!t.hasSrc||t.isDialogOpen}"
    audio="${(a=t.audio)!=null?a:!1}"
    style="${(r=Wy({"--media-primary-color":t.primaryColor,"--media-secondary-color":t.secondaryColor,"--media-accent-color":t.accentColor}))!=null?r:!1}"
    defaultsubtitles="${!t.defaultHiddenCaptions}"
    forwardseekoffset="${(n=t.forwardSeekOffset)!=null?n:!1}"
    backwardseekoffset="${(s=t.backwardSeekOffset)!=null?s:!1}"
    playbackrates="${(o=t.playbackRates)!=null?o:!1}"
    defaultshowremainingtime="${(l=t.defaultShowRemainingTime)!=null?l:!1}"
    defaultduration="${(d=t.defaultDuration)!=null?d:!1}"
    hideduration="${(m=t.hideDuration)!=null?m:!1}"
    title="${(p=t.title)!=null?p:!1}"
    videotitle="${(h=t.videoTitle)!=null?h:!1}"
    proudlydisplaymuxbadge="${(c=t.proudlyDisplayMuxBadge)!=null?c:!1}"
    exportparts="${fT}"
    onclose="${t.onCloseErrorDialog}"
    onfocusin="${t.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(v=t.noHotKeys)!=null?v:!1}"
      target-live-window="${(g=t.targetLiveWindow)!=null?g:!1}"
      stream-type="${(_=qu(t.streamType))!=null?_:!1}"
      crossorigin="${(y=t.crossOrigin)!=null?y:""}"
      playsinline
      autoplay="${(T=t.autoplay)!=null?T:!1}"
      muted="${(E=t.muted)!=null?E:!1}"
      loop="${(k=t.loop)!=null?k:!1}"
      preload="${(D=t.preload)!=null?D:!1}"
      debug="${(O=t.debug)!=null?O:!1}"
      prefer-cmcd="${(H=t.preferCmcd)!=null?H:!1}"
      disable-tracking="${(Y=t.disableTracking)!=null?Y:!1}"
      disable-cookies="${(X=t.disableCookies)!=null?X:!1}"
      prefer-playback="${(V=t.preferPlayback)!=null?V:!1}"
      start-time="${t.startTime!=null?t.startTime:!1}"
      beacon-collection-domain="${(P=t.beaconCollectionDomain)!=null?P:!1}"
      player-init-time="${(Le=t.playerInitTime)!=null?Le:!1}"
      player-software-name="${(Be=t.playerSoftwareName)!=null?Be:!1}"
      player-software-version="${(We=t.playerSoftwareVersion)!=null?We:!1}"
      env-key="${(he=t.envKey)!=null?he:!1}"
      custom-domain="${(Oe=t.customDomain)!=null?Oe:!1}"
      src="${t.src?t.src:t.playbackId?El(t):!1}"
      cast-src="${t.src?t.src:t.playbackId?El(t):!1}"
      cast-receiver="${(yt=t.castReceiver)!=null?yt:!1}"
      drm-token="${(lt=(Ne=t.tokens)==null?void 0:Ne.drm)!=null?lt:!1}"
      exportparts="video"
      disable-pseudo-ended="${(Fe=t.disablePseudoEnded)!=null?Fe:!1}"
    >
      ${t.storyboard?Ps`<track label="thumbnails" default kind="metadata" src="${t.storyboard}" />`:Ps``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t.poster?t.poster:!1}"
        placeholdersrc="${(Ae=t.placeholder)!=null?Ae:!1}"
      ></media-poster-image>
    </slot>
  </media-theme>
`},Wv=t=>t.charAt(0).toUpperCase()+t.slice(1),_T=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Wv((i=t.errorCategory)!=null?i:"video"),n=bo((a=t.errorCategory)!=null?a:te.VIDEO);if(t.muxCode===x.NETWORK_OFFLINE)return L("Your device appears to be offline",e);if(t.muxCode===x.NETWORK_TOKEN_EXPIRED)return L("{category} URL has expired",e).format({category:r});if([x.NETWORK_TOKEN_SUB_MISMATCH,x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING,x.NETWORK_TOKEN_MALFORMED].includes(t.muxCode))return L("{category} URL is formatted incorrectly",e).format({category:r});if(t.muxCode===x.NETWORK_TOKEN_MISSING)return L("Invalid {categoryName} URL",e).format({categoryName:n});if(t.muxCode===x.NETWORK_NOT_FOUND)return L("{category} does not exist",e).format({category:r});if(t.muxCode===x.NETWORK_NOT_READY){let s=t.streamType==="live"?"Live stream":"Video";return L("{mediaType} is not currently available",e).format({mediaType:s})}}if(t.code){if(t.code===I.MEDIA_ERR_NETWORK)return L("Network Error",e);if(t.code===I.MEDIA_ERR_DECODE)return L("Media Error",e);if(t.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return L("Source Not Supported",e)}return L("Error",e)},bT=(t,e=!1)=>{var i,a;if(t.muxCode){let r=Wv((i=t.errorCategory)!=null?i:"video"),n=bo((a=t.errorCategory)!=null?a:te.VIDEO);return t.muxCode===x.NETWORK_OFFLINE?L("Check your internet connection and try reloading this video.",e):t.muxCode===x.NETWORK_TOKEN_EXPIRED?L("The video’s secured {tokenNamePrefix}-token has expired.",e).format({tokenNamePrefix:n}):t.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH?L("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",e).format({tokenNamePrefix:n}):t.muxCode===x.NETWORK_TOKEN_MALFORMED?L("{category} URL is formatted incorrectly",e).format({category:r}):[x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode)?L("The {tokenNamePrefix}-token is formatted with incorrect information.",e).format({tokenNamePrefix:n}):[x.NETWORK_TOKEN_MISSING,x.NETWORK_INVALID_URL].includes(t.muxCode)?L("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",e).format({tokenNamePrefix:n}):t.muxCode===x.NETWORK_NOT_FOUND?"":t.message}return t.code&&(t.code===I.MEDIA_ERR_NETWORK||t.code===I.MEDIA_ERR_DECODE||(t.code,I.MEDIA_ERR_SRC_NOT_SUPPORTED)),t.message},gT=(t,e=!1)=>{let i=_T(t,e).toString(),a=bT(t,e).toString();return{title:i,message:a}},yT=t=>{if(t.muxCode){if(t.muxCode===x.NETWORK_TOKEN_EXPIRED)return"403-expired-token.md";if(t.muxCode===x.NETWORK_TOKEN_MALFORMED)return"403-malformatted-token.md";if([x.NETWORK_TOKEN_AUD_MISMATCH,x.NETWORK_TOKEN_AUD_MISSING].includes(t.muxCode))return"403-incorrect-aud-value.md";if(t.muxCode===x.NETWORK_TOKEN_SUB_MISMATCH)return"403-playback-id-mismatch.md";if(t.muxCode===x.NETWORK_TOKEN_MISSING)return"missing-signed-tokens.md";if(t.muxCode===x.NETWORK_NOT_FOUND)return"404-not-found.md";if(t.muxCode===x.NETWORK_NOT_READY)return"412-not-playable.md"}if(t.code){if(t.code===I.MEDIA_ERR_NETWORK)return"";if(t.code===I.MEDIA_ERR_DECODE)return"media-decode-error.md";if(t.code===I.MEDIA_ERR_SRC_NOT_SUPPORTED)return"media-src-not-supported.md"}return""},Rh=(t,e)=>{let i=yT(t);return{message:t.message,context:t.context,file:i}},TT=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,yd=Eo.createElement("template");"innerHTML"in yd&&(yd.innerHTML=TT);var Ch,Dh,Fv=class extends Oo{};Fv.template=(Dh=(Ch=yd.content)==null?void 0:Ch.children)==null?void 0:Dh[0];Ut.customElements.get("media-theme-gerwig")||Ut.customElements.define("media-theme-gerwig",Fv);var AT="gerwig",Zt={SRC:"src",POSTER:"poster"},A={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",FULLSCREEN_ELEMENT:"fullscreen-element",DRM_TOKEN:"drm-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",VIDEO_TITLE:"video-title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref",NO_MUTED_PREF:"no-muted-pref",CAST_RECEIVER:"cast-receiver",NO_TOOLTIPS:"no-tooltips",PROUDLY_DISPLAY_MUX_BADGE:"proudly-display-mux-badge",DISABLE_PSEUDO_ENDED:"disable-pseudo-ended"},Td=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","videotitle","novolumepref","nomutedpref","proudlydisplaymuxbadge"];function kT(t,e){var i,a;return{src:!t.playbackId&&t.src,playbackId:t.playbackId,hasSrc:!!t.playbackId||!!t.src||!!t.currentSrc,poster:t.poster,storyboard:t.storyboard,storyboardSrc:t.getAttribute(A.STORYBOARD_SRC),fullscreenElement:t.getAttribute(A.FULLSCREEN_ELEMENT),placeholder:t.getAttribute("placeholder"),themeTemplate:wT(t),thumbnailTime:!t.tokens.thumbnail&&t.thumbnailTime,autoplay:t.autoplay,crossOrigin:t.crossOrigin,loop:t.loop,noHotKeys:t.hasAttribute(A.NOHOTKEYS),hotKeys:t.getAttribute(A.HOTKEYS),muted:t.muted,paused:t.paused,preload:t.preload,envKey:t.envKey,preferCmcd:t.preferCmcd,debug:t.debug,disableTracking:t.disableTracking,disableCookies:t.disableCookies,tokens:t.tokens,beaconCollectionDomain:t.beaconCollectionDomain,maxResolution:t.maxResolution,minResolution:t.minResolution,programStartTime:t.programStartTime,programEndTime:t.programEndTime,assetStartTime:t.assetStartTime,assetEndTime:t.assetEndTime,renditionOrder:t.renditionOrder,metadata:t.metadata,playerInitTime:t.playerInitTime,playerSoftwareName:t.playerSoftwareName,playerSoftwareVersion:t.playerSoftwareVersion,startTime:t.startTime,preferPlayback:t.preferPlayback,audio:t.audio,defaultStreamType:t.defaultStreamType,targetLiveWindow:t.getAttribute(b.TARGET_LIVE_WINDOW),streamType:qu(t.getAttribute(b.STREAM_TYPE)),primaryColor:t.getAttribute(A.PRIMARY_COLOR),secondaryColor:t.getAttribute(A.SECONDARY_COLOR),accentColor:t.getAttribute(A.ACCENT_COLOR),forwardSeekOffset:t.forwardSeekOffset,backwardSeekOffset:t.backwardSeekOffset,defaultHiddenCaptions:t.defaultHiddenCaptions,defaultDuration:t.defaultDuration,defaultShowRemainingTime:t.defaultShowRemainingTime,hideDuration:IT(t),playbackRates:t.getAttribute(A.PLAYBACK_RATES),customDomain:(i=t.getAttribute(b.CUSTOM_DOMAIN))!=null?i:void 0,title:t.getAttribute(A.TITLE),videoTitle:(a=t.getAttribute(A.VIDEO_TITLE))!=null?a:t.getAttribute(A.TITLE),novolumepref:t.hasAttribute(A.NO_VOLUME_PREF),nomutedpref:t.hasAttribute(A.NO_MUTED_PREF),proudlyDisplayMuxBadge:t.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE),castReceiver:t.castReceiver,disablePseudoEnded:t.hasAttribute(A.DISABLE_PSEUDO_ENDED),...e,extraSourceParams:t.extraSourceParams}}var ST=Op.formatErrorMessage;Op.formatErrorMessage=t=>{var e,i;if(t instanceof I){let a=gT(t,!1);return`
      ${a!=null&&a.title?`<h3>${a.title}</h3>`:""}
      ${a!=null&&a.message||a!=null&&a.linkUrl?`<p>
        ${a?.message}
        ${a!=null&&a.linkUrl?`<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(e=a.linkText)!=null?e:""} ${L("(opens in a new window)")}"
              >${(i=a.linkText)!=null?i:a.linkUrl}</a
            >`:""}
      </p>`:""}
    `}return ST(t)};function wT(t){var e,i;let a=t.theme;if(a){let r=(i=(e=t.getRootNode())==null?void 0:e.getElementById)==null?void 0:i.call(e,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=Ut.customElements.get(a);if(n!=null&&n.template)return n.template}}function IT(t){var e;let i=(e=t.mediaController)==null?void 0:e.querySelector("media-time-display");return i&&getComputedStyle(i).getPropertyValue("--media-duration-display-display").trim()==="none"}function Lh(t){let e=t.videoTitle?{video_title:t.videoTitle}:{};return t.getAttributeNames().filter(i=>i.startsWith("metadata-")).reduce((i,a)=>{let r=t.getAttribute(a);return r!==null&&(i[a.replace(/^metadata-/,"").replace(/-/g,"_")]=r),i},e)}var RT=Object.values(b),CT=Object.values(Zt),DT=Object.values(A),Mh=Pv(),xh="mux-player",Oh={isDialogOpen:!1},LT={redundant_streams:!0},$s,Us,Hs,$i,Bs,Wa,oe,fi,Vv,Ad,Ui,Nh,Ph,$h,Uh,MT=class extends Sh{constructor(){super(),ft(this,oe),ft(this,$s),ft(this,Us,!1),ft(this,Hs,{}),ft(this,$i,!0),ft(this,Bs,new Zy(this,"hotkeys")),ft(this,Wa,{...Oh,onCloseErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&fe(this,oe,Ad).call(this,{isDialogOpen:!1})},onFocusInErrorDialog:t=>{var e;((e=t.composedPath()[0])==null?void 0:e.localName)==="media-error-dialog"&&(Ov(this,Eo.activeElement)||t.preventDefault())}}),Vt(this,$s,Od()),this.attachShadow({mode:"open"}),fe(this,oe,Vv).call(this),this.isConnected&&fe(this,oe,fi).call(this)}static get NAME(){return xh}static get VERSION(){return Mh}static get observedAttributes(){var t;return[...(t=Sh.observedAttributes)!=null?t:[],...CT,...RT,...DT]}get mediaTheme(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("media-theme")}get mediaController(){var t,e;return(e=(t=this.mediaTheme)==null?void 0:t.shadowRoot)==null?void 0:e.querySelector("media-controller")}connectedCallback(){let t=this.media;t&&(t.metadata=Lh(this))}attributeChangedCallback(t,e,i){switch(fe(this,oe,fi).call(this),super.attributeChangedCallback(t,e,i),t){case A.HOTKEYS:Z(this,Bs).value=i;break;case A.THUMBNAIL_TIME:{i!=null&&this.tokens.thumbnail&&zt(L("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());break}case A.THUMBNAIL_TOKEN:{if(i){let a=Oa(i);if(a){let{aud:r}=a,n=$r.THUMBNAIL;r!==n&&zt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"thumbnail"}))}}break}case A.STORYBOARD_TOKEN:{if(i){let a=Oa(i);if(a){let{aud:r}=a,n=$r.STORYBOARD;r!==n&&zt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"storyboard"}))}}break}case A.DRM_TOKEN:{if(i){let a=Oa(i);if(a){let{aud:r}=a,n=$r.DRM;r!==n&&zt(L("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({aud:r,expectedAud:n,tokenNamePrefix:"drm"}))}}break}case b.PLAYBACK_ID:{i!=null&&i.includes("?token")&&rt(L("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break}case b.STREAM_TYPE:{i&&![Q.LIVE,Q.ON_DEMAND,Q.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:Uv({file:"invalid-stream-type.md",message:L("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===Q.LIVE?this.getAttribute(A.TARGET_LIVE_WINDOW)==null&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN;break}case A.FULLSCREEN_ELEMENT:{if(i!=null||i!==e){let a=Eo.getElementById(i),r=a?.querySelector("mux-player");this.mediaController&&a&&r&&(this.mediaController.fullscreenElement=a)}break}}[b.PLAYBACK_ID,Zt.SRC,A.PLAYBACK_TOKEN].includes(t)&&e!==i&&Vt(this,Wa,{...Z(this,Wa),...Oh}),fe(this,oe,Ui).call(this,{[Qy(t)]:i})}async requestFullscreen(t){var e;if(!(!this.mediaController||this.mediaController.hasAttribute(u.MEDIA_IS_FULLSCREEN)))return(e=this.mediaController)==null||e.dispatchEvent(new Ut.CustomEvent(R.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((i,a)=>{var r;(r=this.mediaController)==null||r.addEventListener(ii.MEDIA_IS_FULLSCREEN,()=>i(),{once:!0})})}async exitFullscreen(){var t;if(!(!this.mediaController||!this.mediaController.hasAttribute(u.MEDIA_IS_FULLSCREEN)))return(t=this.mediaController)==null||t.dispatchEvent(new Ut.CustomEvent(R.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0})),new Promise((e,i)=>{var a;(a=this.mediaController)==null||a.addEventListener(ii.MEDIA_IS_FULLSCREEN,()=>e(),{once:!0})})}get preferCmcd(){var t;return(t=this.getAttribute(b.PREFER_CMCD))!=null?t:void 0}set preferCmcd(t){t!==this.preferCmcd&&(t?qs.includes(t)?this.setAttribute(b.PREFER_CMCD,t):zt(`Invalid value for preferCmcd. Must be one of ${qs.join()}`):this.removeAttribute(b.PREFER_CMCD))}get hasPlayed(){var t,e;return(e=(t=this.mediaController)==null?void 0:t.hasAttribute(u.MEDIA_HAS_PLAYED))!=null?e:!1}get inLiveWindow(){var t;return(t=this.mediaController)==null?void 0:t.hasAttribute(u.MEDIA_TIME_IS_LIVE)}get _hls(){var t;return(t=this.media)==null?void 0:t._hls}get mux(){var t;return(t=this.media)==null?void 0:t.mux}get theme(){var t;return(t=this.getAttribute(A.THEME))!=null?t:AT}set theme(t){this.setAttribute(A.THEME,`${t}`)}get themeProps(){let t=this.mediaTheme;if(!t)return;let e={};for(let i of t.getAttributeNames()){if(Td.includes(i))continue;let a=t.getAttribute(i);e[Mv(i)]=a===""?!0:a}return e}set themeProps(t){var e,i;fe(this,oe,fi).call(this);let a={...this.themeProps,...t};for(let r in a){if(Td.includes(r))continue;let n=t?.[r];typeof n=="boolean"||n==null?(e=this.mediaTheme)==null||e.toggleAttribute(gd(r),!!n):(i=this.mediaTheme)==null||i.setAttribute(gd(r),n)}}get playbackId(){var t;return(t=this.getAttribute(b.PLAYBACK_ID))!=null?t:void 0}set playbackId(t){t?this.setAttribute(b.PLAYBACK_ID,t):this.removeAttribute(b.PLAYBACK_ID)}get src(){var t,e;return this.playbackId?(t=Ci(this,Zt.SRC))!=null?t:void 0:(e=this.getAttribute(Zt.SRC))!=null?e:void 0}set src(t){t?this.setAttribute(Zt.SRC,t):this.removeAttribute(Zt.SRC)}get poster(){var t;let e=this.getAttribute(Zt.POSTER);if(e!=null)return e;let{tokens:i}=this;if(i.playback&&!i.thumbnail){zt("Missing expected thumbnail token. No poster image will be shown");return}if(this.playbackId&&!this.audio)return qy(this.playbackId,{customDomain:this.customDomain,thumbnailTime:(t=this.thumbnailTime)!=null?t:this.startTime,programTime:this.programStartTime,token:i.thumbnail})}set poster(t){t||t===""?this.setAttribute(Zt.POSTER,t):this.removeAttribute(Zt.POSTER)}get storyboardSrc(){var t;return(t=this.getAttribute(A.STORYBOARD_SRC))!=null?t:void 0}set storyboardSrc(t){t?this.setAttribute(A.STORYBOARD_SRC,t):this.removeAttribute(A.STORYBOARD_SRC)}get storyboard(){let{tokens:t}=this;if(this.storyboardSrc&&!t.storyboard)return this.storyboardSrc;if(!(this.audio||!this.playbackId||!this.streamType||[Q.LIVE,Q.UNKNOWN].includes(this.streamType)||t.playback&&!t.storyboard))return Yy(this.playbackId,{customDomain:this.customDomain,token:t.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(A.AUDIO)}set audio(t){if(!t){this.removeAttribute(A.AUDIO);return}this.setAttribute(A.AUDIO,"")}get hotkeys(){return Z(this,Bs)}get nohotkeys(){return this.hasAttribute(A.NOHOTKEYS)}set nohotkeys(t){if(!t){this.removeAttribute(A.NOHOTKEYS);return}this.setAttribute(A.NOHOTKEYS,"")}get thumbnailTime(){return Ze(this.getAttribute(A.THUMBNAIL_TIME))}set thumbnailTime(t){this.setAttribute(A.THUMBNAIL_TIME,`${t}`)}get videoTitle(){var t,e;return(e=(t=this.getAttribute(A.VIDEO_TITLE))!=null?t:this.getAttribute(A.TITLE))!=null?e:""}set videoTitle(t){t!==this.videoTitle&&(t?this.setAttribute(A.VIDEO_TITLE,t):this.removeAttribute(A.VIDEO_TITLE))}get placeholder(){var t;return(t=Ci(this,A.PLACEHOLDER))!=null?t:""}set placeholder(t){this.setAttribute(A.PLACEHOLDER,`${t}`)}get primaryColor(){var t,e;let i=this.getAttribute(A.PRIMARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Ut.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_primary-color"))==null?void 0:e.trim(),i))return i}set primaryColor(t){this.setAttribute(A.PRIMARY_COLOR,`${t}`)}get secondaryColor(){var t,e;let i=this.getAttribute(A.SECONDARY_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Ut.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_secondary-color"))==null?void 0:e.trim(),i))return i}set secondaryColor(t){this.setAttribute(A.SECONDARY_COLOR,`${t}`)}get accentColor(){var t,e;let i=this.getAttribute(A.ACCENT_COLOR);if(i!=null||this.mediaTheme&&(i=(e=(t=Ut.getComputedStyle(this.mediaTheme))==null?void 0:t.getPropertyValue("--_accent-color"))==null?void 0:e.trim(),i))return i}set accentColor(t){this.setAttribute(A.ACCENT_COLOR,`${t}`)}get defaultShowRemainingTime(){return this.hasAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(t){t?this.setAttribute(A.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(A.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(A.PLAYBACK_RATES))return this.getAttribute(A.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(t=>Number(t)).filter(t=>!Number.isNaN(t)).sort((t,e)=>t-e)}set playbackRates(t){if(!t){this.removeAttribute(A.PLAYBACK_RATES);return}this.setAttribute(A.PLAYBACK_RATES,t.join(" "))}get forwardSeekOffset(){var t;return(t=Ze(this.getAttribute(A.FORWARD_SEEK_OFFSET)))!=null?t:10}set forwardSeekOffset(t){this.setAttribute(A.FORWARD_SEEK_OFFSET,`${t}`)}get backwardSeekOffset(){var t;return(t=Ze(this.getAttribute(A.BACKWARD_SEEK_OFFSET)))!=null?t:10}set backwardSeekOffset(t){this.setAttribute(A.BACKWARD_SEEK_OFFSET,`${t}`)}get defaultHiddenCaptions(){return this.hasAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(t){t?this.setAttribute(A.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(A.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return Ze(this.getAttribute(A.DEFAULT_DURATION))}set defaultDuration(t){t==null?this.removeAttribute(A.DEFAULT_DURATION):this.setAttribute(A.DEFAULT_DURATION,`${t}`)}get playerInitTime(){return this.hasAttribute(b.PLAYER_INIT_TIME)?Ze(this.getAttribute(b.PLAYER_INIT_TIME)):Z(this,$s)}set playerInitTime(t){t!=this.playerInitTime&&(t==null?this.removeAttribute(b.PLAYER_INIT_TIME):this.setAttribute(b.PLAYER_INIT_TIME,`${+t}`))}get playerSoftwareName(){var t;return(t=this.getAttribute(b.PLAYER_SOFTWARE_NAME))!=null?t:xh}get playerSoftwareVersion(){var t;return(t=this.getAttribute(b.PLAYER_SOFTWARE_VERSION))!=null?t:Mh}get beaconCollectionDomain(){var t;return(t=this.getAttribute(b.BEACON_COLLECTION_DOMAIN))!=null?t:void 0}set beaconCollectionDomain(t){t!==this.beaconCollectionDomain&&(t?this.setAttribute(b.BEACON_COLLECTION_DOMAIN,t):this.removeAttribute(b.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var t;return(t=this.getAttribute(b.MAX_RESOLUTION))!=null?t:void 0}set maxResolution(t){t!==this.maxResolution&&(t?this.setAttribute(b.MAX_RESOLUTION,t):this.removeAttribute(b.MAX_RESOLUTION))}get minResolution(){var t;return(t=this.getAttribute(b.MIN_RESOLUTION))!=null?t:void 0}set minResolution(t){t!==this.minResolution&&(t?this.setAttribute(b.MIN_RESOLUTION,t):this.removeAttribute(b.MIN_RESOLUTION))}get renditionOrder(){var t;return(t=this.getAttribute(b.RENDITION_ORDER))!=null?t:void 0}set renditionOrder(t){t!==this.renditionOrder&&(t?this.setAttribute(b.RENDITION_ORDER,t):this.removeAttribute(b.RENDITION_ORDER))}get programStartTime(){return Ze(this.getAttribute(b.PROGRAM_START_TIME))}set programStartTime(t){t==null?this.removeAttribute(b.PROGRAM_START_TIME):this.setAttribute(b.PROGRAM_START_TIME,`${t}`)}get programEndTime(){return Ze(this.getAttribute(b.PROGRAM_END_TIME))}set programEndTime(t){t==null?this.removeAttribute(b.PROGRAM_END_TIME):this.setAttribute(b.PROGRAM_END_TIME,`${t}`)}get assetStartTime(){return Ze(this.getAttribute(b.ASSET_START_TIME))}set assetStartTime(t){t==null?this.removeAttribute(b.ASSET_START_TIME):this.setAttribute(b.ASSET_START_TIME,`${t}`)}get assetEndTime(){return Ze(this.getAttribute(b.ASSET_END_TIME))}set assetEndTime(t){t==null?this.removeAttribute(b.ASSET_END_TIME):this.setAttribute(b.ASSET_END_TIME,`${t}`)}get extraSourceParams(){return this.hasAttribute(A.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(A.EXTRA_SOURCE_PARAMS)).entries()].reduce((t,[e,i])=>(t[e]=i,t),{}):LT}set extraSourceParams(t){t==null?this.removeAttribute(A.EXTRA_SOURCE_PARAMS):this.setAttribute(A.EXTRA_SOURCE_PARAMS,new URLSearchParams(t).toString())}get customDomain(){var t;return(t=this.getAttribute(b.CUSTOM_DOMAIN))!=null?t:void 0}set customDomain(t){t!==this.customDomain&&(t?this.setAttribute(b.CUSTOM_DOMAIN,t):this.removeAttribute(b.CUSTOM_DOMAIN))}get envKey(){var t;return(t=Ci(this,b.ENV_KEY))!=null?t:void 0}set envKey(t){this.setAttribute(b.ENV_KEY,`${t}`)}get noVolumePref(){return this.hasAttribute(A.NO_VOLUME_PREF)}set noVolumePref(t){t?this.setAttribute(A.NO_VOLUME_PREF,""):this.removeAttribute(A.NO_VOLUME_PREF)}get noMutedPref(){return this.hasAttribute(A.NO_MUTED_PREF)}set noMutedPref(t){t?this.setAttribute(A.NO_MUTED_PREF,""):this.removeAttribute(A.NO_MUTED_PREF)}get debug(){return Ci(this,b.DEBUG)!=null}set debug(t){t?this.setAttribute(b.DEBUG,""):this.removeAttribute(b.DEBUG)}get disableTracking(){return Ci(this,b.DISABLE_TRACKING)!=null}set disableTracking(t){this.toggleAttribute(b.DISABLE_TRACKING,!!t)}get disableCookies(){return Ci(this,b.DISABLE_COOKIES)!=null}set disableCookies(t){t?this.setAttribute(b.DISABLE_COOKIES,""):this.removeAttribute(b.DISABLE_COOKIES)}get streamType(){var t,e,i;return(i=(e=this.getAttribute(b.STREAM_TYPE))!=null?e:(t=this.media)==null?void 0:t.streamType)!=null?i:Q.UNKNOWN}set streamType(t){this.setAttribute(b.STREAM_TYPE,`${t}`)}get defaultStreamType(){var t,e,i;return(i=(e=this.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?e:(t=this.mediaController)==null?void 0:t.getAttribute(A.DEFAULT_STREAM_TYPE))!=null?i:Q.ON_DEMAND}set defaultStreamType(t){t?this.setAttribute(A.DEFAULT_STREAM_TYPE,t):this.removeAttribute(A.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var t,e;return this.hasAttribute(A.TARGET_LIVE_WINDOW)?+this.getAttribute(A.TARGET_LIVE_WINDOW):(e=(t=this.media)==null?void 0:t.targetLiveWindow)!=null?e:Number.NaN}set targetLiveWindow(t){t==this.targetLiveWindow||Number.isNaN(t)&&Number.isNaN(this.targetLiveWindow)||(t==null?this.removeAttribute(A.TARGET_LIVE_WINDOW):this.setAttribute(A.TARGET_LIVE_WINDOW,`${+t}`))}get liveEdgeStart(){var t;return(t=this.media)==null?void 0:t.liveEdgeStart}get startTime(){return Ze(Ci(this,b.START_TIME))}set startTime(t){this.setAttribute(b.START_TIME,`${t}`)}get preferPlayback(){let t=this.getAttribute(b.PREFER_PLAYBACK);if(t===Ht.MSE||t===Ht.NATIVE)return t}set preferPlayback(t){t!==this.preferPlayback&&(t===Ht.MSE||t===Ht.NATIVE?this.setAttribute(b.PREFER_PLAYBACK,t):this.removeAttribute(b.PREFER_PLAYBACK))}get metadata(){var t;return(t=this.media)==null?void 0:t.metadata}set metadata(t){if(fe(this,oe,fi).call(this),!this.media){rt("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...Lh(this),...t}}get _hlsConfig(){var t;return(t=this.media)==null?void 0:t._hlsConfig}set _hlsConfig(t){if(fe(this,oe,fi).call(this),!this.media){rt("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=t}async addCuePoints(t){var e;if(fe(this,oe,fi).call(this),!this.media){rt("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return(e=this.media)==null?void 0:e.addCuePoints(t)}get activeCuePoint(){var t;return(t=this.media)==null?void 0:t.activeCuePoint}get cuePoints(){var t,e;return(e=(t=this.media)==null?void 0:t.cuePoints)!=null?e:[]}addChapters(t){var e;if(fe(this,oe,fi).call(this),!this.media){rt("underlying media element missing when trying to addChapters. chapters will not be added.");return}return(e=this.media)==null?void 0:e.addChapters(t)}get activeChapter(){var t;return(t=this.media)==null?void 0:t.activeChapter}get chapters(){var t,e;return(e=(t=this.media)==null?void 0:t.chapters)!=null?e:[]}getStartDate(){var t;return(t=this.media)==null?void 0:t.getStartDate()}get currentPdt(){var t;return(t=this.media)==null?void 0:t.currentPdt}get tokens(){let t=this.getAttribute(A.PLAYBACK_TOKEN),e=this.getAttribute(A.DRM_TOKEN),i=this.getAttribute(A.THUMBNAIL_TOKEN),a=this.getAttribute(A.STORYBOARD_TOKEN);return{...Z(this,Hs),...t!=null?{playback:t}:{},...e!=null?{drm:e}:{},...i!=null?{thumbnail:i}:{},...a!=null?{storyboard:a}:{}}}set tokens(t){Vt(this,Hs,t??{})}get playbackToken(){var t;return(t=this.getAttribute(A.PLAYBACK_TOKEN))!=null?t:void 0}set playbackToken(t){this.setAttribute(A.PLAYBACK_TOKEN,`${t}`)}get drmToken(){var t;return(t=this.getAttribute(A.DRM_TOKEN))!=null?t:void 0}set drmToken(t){this.setAttribute(A.DRM_TOKEN,`${t}`)}get thumbnailToken(){var t;return(t=this.getAttribute(A.THUMBNAIL_TOKEN))!=null?t:void 0}set thumbnailToken(t){this.setAttribute(A.THUMBNAIL_TOKEN,`${t}`)}get storyboardToken(){var t;return(t=this.getAttribute(A.STORYBOARD_TOKEN))!=null?t:void 0}set storyboardToken(t){this.setAttribute(A.STORYBOARD_TOKEN,`${t}`)}addTextTrack(t,e,i,a){var r;let n=(r=this.media)==null?void 0:r.nativeEl;if(n)return Dd(n,t,e,i,a)}removeTextTrack(t){var e;let i=(e=this.media)==null?void 0:e.nativeEl;if(i)return O_(i,t)}get textTracks(){var t;return(t=this.media)==null?void 0:t.textTracks}get castReceiver(){var t;return(t=this.getAttribute(A.CAST_RECEIVER))!=null?t:void 0}set castReceiver(t){t!==this.castReceiver&&(t?this.setAttribute(A.CAST_RECEIVER,t):this.removeAttribute(A.CAST_RECEIVER))}get castCustomData(){var t;return(t=this.media)==null?void 0:t.castCustomData}set castCustomData(t){if(!this.media){rt("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");return}this.media.castCustomData=t}get noTooltips(){return this.hasAttribute(A.NO_TOOLTIPS)}set noTooltips(t){if(!t){this.removeAttribute(A.NO_TOOLTIPS);return}this.setAttribute(A.NO_TOOLTIPS,"")}get proudlyDisplayMuxBadge(){return this.hasAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}set proudlyDisplayMuxBadge(t){t?this.setAttribute(A.PROUDLY_DISPLAY_MUX_BADGE,""):this.removeAttribute(A.PROUDLY_DISPLAY_MUX_BADGE)}};$s=new WeakMap,Us=new WeakMap,Hs=new WeakMap,$i=new WeakMap,Bs=new WeakMap,Wa=new WeakMap,oe=new WeakSet,fi=function(){var t,e,i,a;if(!Z(this,Us)){Vt(this,Us,!0),fe(this,oe,Ui).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof Ut.HTMLElement))throw""}catch{rt("<media-theme> failed to upgrade!")}try{customElements.upgrade(this.media)}catch{rt("underlying media element failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof a0))throw""}catch{rt("<media-controller> failed to upgrade!")}fe(this,oe,Nh).call(this),fe(this,oe,Ph).call(this),fe(this,oe,$h).call(this),Vt(this,$i,(e=(t=this.mediaController)==null?void 0:t.hasAttribute(M.USER_INACTIVE))!=null?e:!0),fe(this,oe,Uh).call(this),(i=this.media)==null||i.addEventListener("streamtypechange",()=>fe(this,oe,Ui).call(this)),(a=this.media)==null||a.addEventListener("loadstart",()=>fe(this,oe,Ui).call(this))}},Vv=function(){var t,e;try{(t=window?.CSS)==null||t.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),(e=window?.CSS)==null||e.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},Ad=function(t){Object.assign(Z(this,Wa),t),fe(this,oe,Ui).call(this)},Ui=function(t={}){cT(mT(kT(this,{...Z(this,Wa),...t})),this.shadowRoot)},Nh=function(){let t=e=>{var i,a;if(!(e!=null&&e.startsWith("theme-")))return;let r=e.replace(/^theme-/,"");if(Td.includes(r))return;let n=this.getAttribute(e);n!=null?(i=this.mediaTheme)==null||i.setAttribute(r,n):(a=this.mediaTheme)==null||a.removeAttribute(r)};new MutationObserver(e=>{for(let{attributeName:i}of e)t(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(t)},Ph=function(){let t=e=>{var i;let a=(i=this.media)==null?void 0:i.error;if(!(a instanceof I)){let{message:n,code:s}=a??{};a=new I(n,s)}if(!(a!=null&&a.fatal)){zt(a),a.data&&zt(`${a.name} data:`,a.data);return}let r=Rh(a);r.message&&Uv(r),rt(a),a.data&&rt(`${a.name} data:`,a.data),fe(this,oe,Ad).call(this,{isDialogOpen:!0})};this.addEventListener("error",t),this.media&&(this.media.errorTranslator=(e={})=>{var i,a,r;if(!(((i=this.media)==null?void 0:i.error)instanceof I))return e;let n=Rh((a=this.media)==null?void 0:a.error);return{player_error_code:(r=this.media)==null?void 0:r.error.code,player_error_message:n.message?String(n.message):e.player_error_message,player_error_context:n.context?String(n.context):e.player_error_context}})},$h=function(){var t,e,i,a;let r=()=>fe(this,oe,Ui).call(this);(e=(t=this.media)==null?void 0:t.textTracks)==null||e.addEventListener("addtrack",r),(a=(i=this.media)==null?void 0:i.textTracks)==null||a.addEventListener("removetrack",r)},Uh=function(){var t,e;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===Q.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(l,d,m=!1)=>{r()||Array.from(l&&l.activeCues||[]).forEach(p=>{if(!(!p.snapToLines||p.line<-5||p.line>=0&&p.line<10))if(!d||this.paused){let h=p.text.split(`
`).length,c=-3;this.streamType===Q.LIVE&&(c=-2);let v=c-h;if(p.line===v&&!m)return;a.has(p)||a.set(p,p.line),p.line=v}else setTimeout(()=>{p.line=a.get(p)||"auto"},500)})},s=()=>{var l,d;n(i,(d=(l=this.mediaController)==null?void 0:l.hasAttribute(M.USER_INACTIVE))!=null?d:!1)},o=()=>{var l,d;let m=Array.from(((d=(l=this.mediaController)==null?void 0:l.media)==null?void 0:d.textTracks)||[]).filter(p=>["subtitles","captions"].includes(p.kind)&&p.mode==="showing")[0];m!==i&&i?.removeEventListener("cuechange",s),i=m,i?.addEventListener("cuechange",s),n(i,Z(this,$i))};o(),(t=this.textTracks)==null||t.addEventListener("change",o),(e=this.textTracks)==null||e.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var l,d;let m=(d=(l=this.mediaController)==null?void 0:l.hasAttribute(M.USER_INACTIVE))!=null?d:!0;Z(this,$i)!==m&&(Vt(this,$i,m),n(i,Z(this,$i)))})};function Ci(t,e){return t.media?t.media.getAttribute(e):t.getAttribute(e)}var Hh=MT,Kv=class{addEventListener(){}removeEventListener(){}dispatchEvent(t){return!0}};if(typeof DocumentFragment>"u"){class t extends Kv{}globalThis.DocumentFragment=t}var xT=class extends Kv{},OT={get(t){},define(t,e,i){},getName(t){return null},upgrade(t){},whenDefined(t){return Promise.resolve(xT)}},NT={customElements:OT},PT=typeof window>"u"||typeof globalThis.customElements>"u",ll=PT?NT:globalThis;ll.customElements.get("mux-player")||(ll.customElements.define("mux-player",Hh),ll.MuxPlayerElement=Hh);var qv=parseInt(qr.version)>=19,Bh={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},$T=t=>t==null,UT=(t,e)=>$T(e)?!1:t in e,HT=t=>t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),BT=(t,e)=>{if(!(!qv&&typeof e=="boolean"&&!e)){if(UT(t,Bh))return Bh[t];if(typeof e<"u")return/[A-Z]/.test(t)?HT(t):t}},WT=(t,e)=>!qv&&typeof t=="boolean"?"":t,FT=(t={})=>{let{ref:e,...i}=t;return Object.entries(i).reduce((a,[r,n])=>{let s=BT(r,n);if(!s)return a;let o=WT(n);return a[s]=o,a},{})};function Wh(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function VT(...t){return e=>{let i=!1,a=t.map(r=>{let n=Wh(r,e);return!i&&typeof n=="function"&&(i=!0),n});if(i)return()=>{for(let r=0;r<a.length;r++){let n=a[r];typeof n=="function"?n():Wh(t[r],null)}}}}function KT(...t){return Yr.useCallback(VT(...t),t)}var qT=Object.prototype.hasOwnProperty,YT=(t,e)=>{if(Object.is(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;if(Array.isArray(t))return!Array.isArray(e)||t.length!==e.length?!1:t.some((r,n)=>e[n]===r);let i=Object.keys(t),a=Object.keys(e);if(i.length!==a.length)return!1;for(let r=0;r<i.length;r++)if(!qT.call(e,i[r])||!Object.is(t[i[r]],e[i[r]]))return!1;return!0},Yv=(t,e,i)=>!YT(e,t[i]),GT=(t,e,i)=>{t[i]=e},QT=(t,e,i,a=GT,r=Yv)=>Yr.useEffect(()=>{let n=i?.current;n&&r(n,e,t)&&a(n,e,t)},[i?.current,e]),St=QT,ZT=()=>{try{return"3.8.0"}catch{}return"UNKNOWN"},jT=ZT(),zT=()=>jT,ne=(t,e,i)=>Yr.useEffect(()=>{let a=e?.current;if(!a||!i)return;let r=t,n=i;return a.addEventListener(r,n),()=>{a.removeEventListener(r,n)}},[e?.current,i,t]),XT=qr.forwardRef(({children:t,...e},i)=>qr.createElement("mux-player",{suppressHydrationWarning:!0,...FT(e),ref:i},t)),JT=(t,e)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:m,onVolumeChange:p,onRateChange:h,onResize:c,onWaiting:v,onPlay:g,onPlaying:_,onTimeUpdate:y,onPause:T,onSeeking:E,onSeeked:k,onStalled:D,onSuspend:O,onEnded:H,onError:Y,onCuePointChange:X,onChapterChange:V,metadata:P,tokens:Le,paused:Be,playbackId:We,playbackRates:he,currentTime:Oe,themeProps:yt,extraSourceParams:Ne,castCustomData:lt,_hlsConfig:Fe,...Ae}=e;return St("tokens",Le,t),St("playbackId",We,t),St("playbackRates",he,t),St("metadata",P,t),St("extraSourceParams",Ne,t),St("_hlsConfig",Fe,t),St("themeProps",yt,t),St("castCustomData",lt,t),St("paused",Be,t,(Ve,Je)=>{Je!=null&&(Je?Ve.pause():Ve.play())},(Ve,Je,ia)=>Ve.hasAttribute("autoplay")&&!Ve.hasPlayed?!1:Yv(Ve,Je,ia)),St("currentTime",Oe,t,(Ve,Je)=>{Je!=null&&(Ve.currentTime=Je)}),ne("abort",t,i),ne("canplay",t,a),ne("canplaythrough",t,r),ne("emptied",t,n),ne("loadstart",t,s),ne("loadeddata",t,o),ne("loadedmetadata",t,l),ne("progress",t,d),ne("durationchange",t,m),ne("volumechange",t,p),ne("ratechange",t,h),ne("resize",t,c),ne("waiting",t,v),ne("play",t,g),ne("playing",t,_),ne("timeupdate",t,y),ne("pause",t,T),ne("seeking",t,E),ne("seeked",t,k),ne("stalled",t,D),ne("suspend",t,O),ne("ended",t,H),ne("error",t,Y),ne("cuepointchange",t,X),ne("chapterchange",t,V),[Ae]},eA=zT(),tA="mux-player-react",iA=qr.forwardRef((t,e)=>{var i;let a=Yr.useRef(null),r=KT(a,e),[n]=JT(a,t),[s]=Yr.useState((i=t.playerInitTime)!=null?i:Od());return qr.createElement(XT,{ref:r,defaultHiddenCaptions:t.defaultHiddenCaptions,playerSoftwareName:tA,playerSoftwareVersion:eA,playerInitTime:s,...n})}),kA=iA;export{oA as MaxResolution,I as MediaError,lA as MinResolution,dA as RenditionOrder,kA as default,Od as generatePlayerInitTime,tA as playerSoftwareName,eA as playerSoftwareVersion};
