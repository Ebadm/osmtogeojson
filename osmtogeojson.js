!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.osmtogeojson=t():e.osmtogeojson=t()}(this,(()=>(()=>{var e={237:(e,t,n)=>{var r,o=n(463),i=n(960),a={};function u(e,t){return(e.version||t.version)&&e.version!==t.version?(+e.version||0)>(+t.version||0)?e:t:o.merge(e,t)}function s(e){for(var t,n,r,o,i,a,u=function(e){return e[0]},s=function(e){return e[e.length-1]},l=function(e,t){return void 0!==e&&void 0!==t&&e.id===t.id},c=[];e.length;)for(t=e.pop().nodes.slice(),c.push(t);e.length&&!l(u(t),s(t));){for(n=u(t),r=s(t),o=0;o<e.length;o++){if(l(r,u(a=e[o].nodes))){i=t.push,a=a.slice(1);break}if(l(r,s(a))){i=t.push,a=a.slice(0,-1).reverse();break}if(l(n,s(a))){i=t.unshift,a=a.slice(0,-1);break}if(l(n,u(a))){i=t.unshift,a=a.slice(1).reverse();break}a=i=null}if(!a)break;e.splice(o,1),i.apply(t,a)}return c}n(835).forEach((function(e){if("all"===e.polygon)a[e.key]=!0;else{var t="whitelist"===e.polygon?"included_values":"excluded_values",n={};e.values.forEach((function(e){n[e]=!0})),a[e.key]={},a[e.key][t]=n}})),r=function(e,t,n){return t=o.merge({verbose:!1,flatProperties:!0,uninterestingTags:{source:!0,source_ref:!0,"source:ref":!0,history:!0,attribution:!0,created_by:!0,"tiger:county":!0,"tiger:tlid":!0,"tiger:upload_uuid":!0},polygonFeatures:a,deduplicator:u},t),"undefined"!=typeof XMLDocument&&e instanceof XMLDocument||"undefined"==typeof XMLDocument&&e.childNodes?function(e){var t,n,i=new Array,a=new Array,u=new Array;function s(e,t,n){e.hasAttribute(n)&&(t[n]=e.getAttribute(n))}function l(e,t){var n=o.clone(e);s(t,n,"lat"),s(t,n,"lon"),n.__is_center_placeholder=!0,i.push(n)}function c(e,t){var n=o.clone(e);function r(e,t,r){var o={type:"node",id:"_"+n.type+"/"+n.id+"bounds"+r,lat:e,lon:t};n.nodes.push(o.id),i.push(o)}n.nodes=[],r(t.getAttribute("minlat"),t.getAttribute("minlon"),1),r(t.getAttribute("maxlat"),t.getAttribute("minlon"),2),r(t.getAttribute("maxlat"),t.getAttribute("maxlon"),3),r(t.getAttribute("minlat"),t.getAttribute("maxlon"),4),n.nodes.push(n.nodes[0]),n.__is_bounds_placeholder=!0,a.push(n)}return o.each(e.getElementsByTagName("node"),(function(e,t){var n={};o.each(e.getElementsByTagName("tag"),(function(e){n[e.getAttribute("k")]=e.getAttribute("v")}));var r={type:"node"};s(e,r,"id"),s(e,r,"lat"),s(e,r,"lon"),s(e,r,"version"),s(e,r,"timestamp"),s(e,r,"changeset"),s(e,r,"uid"),s(e,r,"user"),o.isEmpty(n)||(r.tags=n),i.push(r)})),o.each(e.getElementsByTagName("way"),(function(e,r){var u={},f=[];o.each(e.getElementsByTagName("tag"),(function(e){u[e.getAttribute("k")]=e.getAttribute("v")}));var p=!1;o.each(e.getElementsByTagName("nd"),(function(e,t){var n;(n=e.getAttribute("ref"))&&(f[t]=n),!p&&e.getAttribute("lat")&&(p=!0)}));var y={type:"way"};s(e,y,"id"),s(e,y,"version"),s(e,y,"timestamp"),s(e,y,"changeset"),s(e,y,"uid"),s(e,y,"user"),f.length>0&&(y.nodes=f),o.isEmpty(u)||(y.tags=u),(t=e.getElementsByTagName("center")[0])&&l(y,t),p?function(e,t){o.isArray(e.nodes)||(e.nodes=[],o.each(t,(function(t,n){e.nodes.push("_anonymous@"+t.getAttribute("lat")+"/"+t.getAttribute("lon"))}))),o.each(t,(function(t,n){var r,o,a,u;t.getAttribute("lat")&&(r=t.getAttribute("lat"),o=t.getAttribute("lon"),a=e.nodes[n],u={type:"node",id:a,lat:r,lon:o},i.push(u),u.id)}))}(y,e.getElementsByTagName("nd")):(n=e.getElementsByTagName("bounds")[0])&&c(y,n),a.push(y)})),o.each(e.getElementsByTagName("relation"),(function(e,r){var f={},p=[];o.each(e.getElementsByTagName("tag"),(function(e){f[e.getAttribute("k")]=e.getAttribute("v")}));var y=!1;o.each(e.getElementsByTagName("member"),(function(e,t){p[t]={},s(e,p[t],"ref"),s(e,p[t],"role"),s(e,p[t],"type"),(!y&&"node"==p[t].type&&e.getAttribute("lat")||"way"==p[t].type&&e.getElementsByTagName("nd").length>0)&&(y=!0)}));var d={type:"relation"};s(e,d,"id"),s(e,d,"version"),s(e,d,"timestamp"),s(e,d,"changeset"),s(e,d,"uid"),s(e,d,"user"),p.length>0&&(d.members=p),o.isEmpty(f)||(d.tags=f),(t=e.getElementsByTagName("center")[0])&&l(d,t),y?function(e,t){function n(e,t){if(!a.some((function(e){return"way"==e.type&&e.id==t}))){var n={type:"way",id:t,nodes:[]};o.each(e,(function(e){var t,r,o;e.getAttribute("lat")?(t=e.getAttribute("lat"),r=e.getAttribute("lon"),o={type:"node",id:"_anonymous@"+t+"/"+r,lat:t,lon:r},n.nodes.push(o.id),i.push(o)):n.nodes.push(void 0)})),a.push(n)}}o.each(t,(function(t,r){var o,a,u,s;"node"==e.members[r].type?t.getAttribute("lat")&&(o=t.getAttribute("lat"),a=t.getAttribute("lon"),u=e.members[r].ref,s={type:"node",id:u,lat:o,lon:a},i.push(s)):"way"==e.members[r].type&&t.getElementsByTagName("nd").length>0&&(e.members[r].ref="_fullGeom"+e.members[r].ref,n(t.getElementsByTagName("nd"),e.members[r].ref))}))}(d,e.getElementsByTagName("member")):(n=e.getElementsByTagName("bounds")[0])&&c(d,n),u.push(d)})),r(i,a,u)}(e):function(e){var t=new Array,n=new Array,i=new Array;function a(e){var n=o.clone(e);n.lat=e.center.lat,n.lon=e.center.lon,n.__is_center_placeholder=!0,t.push(n)}function u(e){var r=o.clone(e);function i(e,n,o){var i={type:"node",id:"_"+r.type+"/"+r.id+"bounds"+o,lat:e,lon:n};r.nodes.push(i.id),t.push(i)}r.nodes=[],i(r.bounds.minlat,r.bounds.minlon,1),i(r.bounds.maxlat,r.bounds.minlon,2),i(r.bounds.maxlat,r.bounds.maxlon,3),i(r.bounds.minlat,r.bounds.maxlon,4),r.nodes.push(r.nodes[0]),r.__is_bounds_placeholder=!0,n.push(r)}function s(e){o.isArray(e.nodes)||(e.nodes=e.geometry.map((function(e){return null!==e?"_anonymous@"+e.lat+"/"+e.lon:"_anonymous@unknown_location"}))),e.geometry.forEach((function(n,r){var o,i,a;n&&(o=n.lat,i=n.lon,a={type:"node",id:e.nodes[r],lat:o,lon:i},t.push(a))}))}function l(e){e.members.forEach((function(e,r){var o,i,a;"node"==e.type?e.lat&&(o=e.lat,i=e.lon,a={type:"node",id:e.ref,lat:o,lon:i},t.push(a)):"way"==e.type&&e.geometry&&(e.ref="_fullGeom"+e.ref,function(e,r){if(!n.some((function(e){return"way"==e.type&&e.id==r}))){var o={type:"way",id:r,nodes:[]};e.forEach((function(e){var n,r,i;e?(i={type:"node",id:"_anonymous@"+(n=e.lat)+"/"+(r=e.lon),lat:n,lon:r},o.nodes.push(i.id),t.push(i)):o.nodes.push(void 0)})),n.push(o)}}(e.geometry,e.ref))}))}for(var c=0;c<e.elements.length;c++)switch(e.elements[c].type){case"node":var f=e.elements[c];t.push(f);break;case"way":var p=o.clone(e.elements[c]);p.nodes=o.clone(p.nodes),n.push(p),p.center&&a(p),p.geometry?s(p):p.bounds&&u(p);break;case"relation":var y=o.clone(e.elements[c]);y.members=o.clone(y.members),i.push(y);var d=y.members&&y.members.some((function(e){return"node"==e.type&&e.lat||"way"==e.type&&e.geometry&&e.geometry.length>0}));y.center&&a(y),d?l(y):y.bounds&&u(y)}return r(t,n,i)}(e);function r(e,r,a){function u(e,n){if("object"!=typeof n&&(n={}),"function"==typeof t.uninterestingTags)return!t.uninterestingTags(e,n);for(var r in e)if(!0!==t.uninterestingTags[r]&&!0!==n[r]&&n[r]!==e[r])return!0;return!1}function c(e){var t={timestamp:e.timestamp,version:e.version,changeset:e.changeset,user:e.user,uid:e.uid};for(var n in t)void 0===t[n]&&delete t[n];return t}for(var f=new Object,p=new Object,y=0;y<e.length;y++)void 0!==f[(_=e[y]).id]&&(_=t.deduplicator(_,f[_.id])),f[_.id]=_,void 0!==_.tags&&u(_.tags)&&(p[_.id]=!0);for(y=0;y<a.length;y++)if(o.isArray(a[y].members))for(var d=0;d<a[y].members.length;d++)"node"==a[y].members[d].type&&(p[a[y].members[d].ref]=!0);var g=new Object,v=new Object;for(y=0;y<r.length;y++){var h=r[y];if(g[h.id]&&(h=t.deduplicator(h,g[h.id])),g[h.id]=h,o.isArray(h.nodes))for(d=0;d<h.nodes.length;d++)"object"!=typeof h.nodes[d]&&(v[h.nodes[d]]=!0,h.nodes[d]=f[h.nodes[d]])}var b=new Array;for(var m in f){var _=f[m];v[m]&&!p[m]||b.push(_)}var w=new Array;for(y=0;y<a.length;y++)w[(k=a[y]).id]&&(k=t.deduplicator(k,w[k.id])),w[k.id]=k;var j,A={node:{},way:{},relation:{}};for(var m in w){var k=w[m];if(o.isArray(k.members))for(d=0;d<k.members.length;d++){var O=k.members[d].type,E=k.members[d].ref;"number"!=typeof E&&(E=E.replace("_fullGeom","")),A[O]?(void 0===A[O][E]&&(A[O][E]=[]),A[O][E].push({role:k.members[d].role,rel:k.id,reltags:k.tags})):t.verbose&&console.warn("Relation",k.type+"/"+k.id,"member",O+"/"+E,"ignored because it has an invalid type")}else t.verbose&&console.warn("Relation",k.type+"/"+k.id,"ignored because it has no members")}var x=[];for(y=0;y<b.length;y++)if(void 0!==b[y].lon&&void 0!==b[y].lat){var T={type:"Feature",id:b[y].type+"/"+b[y].id,properties:{type:b[y].type,id:b[y].id,tags:b[y].tags||{},relations:A.node[b[y].id]||[],meta:c(b[y])},geometry:{type:"Point",coordinates:[+b[y].lon,+b[y].lat]}};b[y].__is_center_placeholder&&(T.properties.geometry="center"),n?n(T):x.push(T)}else t.verbose&&console.warn("POI",b[y].type+"/"+b[y].id,"ignored because it lacks coordinates");var M=[],B=[];for(y=0;y<a.length;y++)if(w[a[y].id]===a[y]){if(void 0!==a[y].tags&&("route"==a[y].tags.type||"waterway"==a[y].tags.type)){if(!o.isArray(a[y].members)){t.verbose&&console.warn("Route",a[y].type+"/"+a[y].id,"ignored because it has no members");continue}if(a[y].members.forEach((function(e){g[e.ref]&&!u(g[e.ref].tags)&&(g[e.ref].is_skippablerelationmember=!0)})),!1===(T=N(a[y]))){t.verbose&&console.warn("Route relation",a[y].type+"/"+a[y].id,"ignored because it has invalid geometry");continue}function N(e){var n,r,i,a=!1;if(n=(n=e.members.filter((function(e){return"way"===e.type}))).map((function(n){var r=g[n.ref];return void 0===r||void 0===r.nodes?(t.verbose&&console.warn("Route "+e.type+"/"+e.id,"tainted by a missing or incomplete  way",n.type+"/"+n.ref),void(a=!0)):{id:n.ref,role:n.role,way:r,nodes:r.nodes.filter((function(r){return void 0!==r||(a=!0,t.verbose&&console.warn("Route",e.type+"/"+e.id,"tainted by a way",n.type+"/"+n.ref,"with a missing node"),!1)}))}})),r=s(n=o.compact(n)),i=o.compact(r.map((function(e){return o.compact(e.map((function(e){return[+e.lon,+e.lat]})))}))),0==i.length)return t.verbose&&console.warn("Route",e.type+"/"+e.id,"contains no coordinates"),!1;var u={type:"Feature",id:e.type+"/"+e.id,properties:{type:e.type,id:e.id,tags:e.tags||{},relations:A[e.type][e.id]||[],meta:c(e)},geometry:{type:1===i.length?"LineString":"MultiLineString",coordinates:1===i.length?i[0]:i}};return a&&(t.verbose&&console.warn("Route",e.type+"/"+e.id,"is tainted"),u.properties.tainted=!0),u}n?n(i(T)):B.push(T)}if(void 0!==a[y].tags&&("multipolygon"==a[y].tags.type||"boundary"==a[y].tags.type)){if(!o.isArray(a[y].members)){t.verbose&&console.warn("Multipolygon",a[y].type+"/"+a[y].id,"ignored because it has no members");continue}var S=0;for(d=0;d<a[y].members.length;d++)"outer"==a[y].members[d].role||""==a[y].members[d].role?S++:t.verbose&&"inner"!=a[y].members[d].role&&console.warn("Multipolygon",a[y].type+"/"+a[y].id,"member",a[y].members[d].type+"/"+a[y].members[d].ref,'ignored because it has an invalid role: "'+a[y].members[d].role+'"');if(a[y].members.forEach((function(e){g[e.ref]&&("outer"!==e.role||u(g[e.ref].tags,a[y].tags)||(g[e.ref].is_skippablerelationmember=!0),"inner"!==e.role||u(g[e.ref].tags)||(g[e.ref].is_skippablerelationmember=!0))})),0==S){t.verbose&&console.warn("Multipolygon relation",a[y].type+"/"+a[y].id,"ignored because it has no outer ways");continue}var F=!1;if(1!=S||u(a[y].tags,{type:!0})||(F=!0),T=null,F){var P=a[y].members.filter((function(e){return"outer"===e.role}))[0];if(void 0===(P=g[P.ref])){t.verbose&&console.warn("Multipolygon relation",a[y].type+"/"+a[y].id,"ignored because outer way",P.type+"/"+P.ref,"is missing");continue}P.is_skippablerelationmember=!0,T=L(P,a[y])}else T=L(a[y],a[y]);if(!1===T){t.verbose&&console.warn("Multipolygon relation",a[y].type+"/"+a[y].id,"ignored because it has invalid geometry");continue}function L(e,n){var r,i,a,u,l=!1,f=F?"way":"relation",p="number"==typeof e.id?e.id:+e.id.replace("_fullGeom","");function y(e){var t,n=function(e,t){for(var n=0;n<t.length;n++)if(o(t[n],e))return!0;return!1},r=function(e){return e.map((function(e){return[+e.lat,+e.lon]}))},o=function(e,t){for(var n=e[0],r=e[1],o=!1,i=0,a=t.length-1;i<t.length;a=i++){var u=t[i][0],s=t[i][1],l=t[a][0],c=t[a][1];s>r!=c>r&&n<(l-u)*(r-s)/(c-s)+u&&(o=!o)}return o};for(e=r(e),t=0;t<i.length;t++)if(n(r(i[t]),e))return t}r=(r=n.members.filter((function(e){return"way"===e.type}))).map((function(e){var n=g[e.ref];return void 0===n||void 0===n.nodes?(t.verbose&&console.warn("Multipolygon",f+"/"+p,"tainted by a missing or incomplete way",e.type+"/"+e.ref),void(l=!0)):{id:e.ref,role:e.role||"outer",way:n,nodes:n.nodes.filter((function(n){return void 0!==n||(l=!0,t.verbose&&console.warn("Multipolygon",f+"/"+p,"tainted by a way",e.type+"/"+e.ref,"with a missing node"),!1)}))}})),r=o.compact(r),i=s(r.filter((function(e){return"outer"===e.role}))),a=s(r.filter((function(e){return"inner"===e.role}))),u=i.map((function(e){return[e]}));for(var d=0;d<a.length;d++){var v=y(a[d]);void 0!==v?u[v].push(a[d]):t.verbose&&console.warn("Multipolygon",f+"/"+p,"contains an inner ring with no containing outer")}var h=[];if(h=o.compact(u.map((function(e){var n=o.compact(e.map((function(e){if(!(e.length<4))return o.compact(e.map((function(e){return[+e.lon,+e.lat]})));t.verbose&&console.warn("Multipolygon",f+"/"+p,"contains a ring with less than four nodes")})));if(0!=n.length)return n;t.verbose&&console.warn("Multipolygon",f+"/"+p,"contains an empty ring cluster")}))),0==h.length)return t.verbose&&console.warn("Multipolygon",f+"/"+p,"contains no coordinates"),!1;var b="MultiPolygon";1===h.length&&(b="Polygon",h=h[0]);var m={type:"Feature",id:e.type+"/"+p,properties:{type:e.type,id:p,tags:e.tags||{},relations:A[e.type][e.id]||[],meta:c(e)},geometry:{type:b,coordinates:h}};return l&&(t.verbose&&console.warn("Multipolygon",f+"/"+p,"is tainted"),m.properties.tainted=!0),m}n?n(i(T)):B.push(T)}}for(y=0;y<r.length;y++)if(g[r[y].id]===r[y])if(o.isArray(r[y].nodes)){if(!r[y].is_skippablerelationmember){"number"!=typeof r[y].id&&(r[y].id=+r[y].id.replace("_fullGeom","")),r[y].tainted=!1,r[y].hidden=!1;var R=new Array;for(d=0;d<r[y].nodes.length;d++)"object"==typeof r[y].nodes[d]?R.push([+r[y].nodes[d].lon,+r[y].nodes[d].lat]):(t.verbose&&console.warn("Way",r[y].type+"/"+r[y].id,"is tainted by an invalid node"),r[y].tainted=!0);if(R.length<=1)t.verbose&&console.warn("Way",r[y].type+"/"+r[y].id,"ignored because it contains too few nodes");else{var I="LineString";void 0!==r[y].nodes[0]&&void 0!==r[y].nodes[r[y].nodes.length-1]&&r[y].nodes[0].id===r[y].nodes[r[y].nodes.length-1].id&&(void 0!==r[y].tags&&l(r[y].tags)||r[y].__is_bounds_placeholder)&&(I="Polygon",R=[R]),T={type:"Feature",id:r[y].type+"/"+r[y].id,properties:{type:r[y].type,id:r[y].id,tags:r[y].tags||{},relations:A.way[r[y].id]||[],meta:c(r[y])},geometry:{type:I,coordinates:R}},r[y].tainted&&(t.verbose&&console.warn("Way",r[y].type+"/"+r[y].id,"is tainted"),T.properties.tainted=!0),r[y].__is_bounds_placeholder&&(T.properties.geometry="bounds"),n?n(i(T)):"LineString"==I?M.push(T):B.push(T)}}}else t.verbose&&console.warn("Way",r[y].type+"/"+r[y].id,"ignored because it has no nodes");return!!n||((j={type:"FeatureCollection",features:[]}).features=j.features.concat(B),j.features=j.features.concat(M),j.features=j.features.concat(x),t.flatProperties&&j.features.forEach((function(e){e.properties=o.merge(e.properties.meta,e.properties.tags,{id:e.properties.type+"/"+e.properties.id})})),i(j))}function l(e){var n=t.polygonFeatures;if("function"==typeof n)return n(e);if("no"===e.area)return!1;for(var r in e){var o=e[r],i=n[r];if(void 0!==i&&"no"!==o){if(!0===i)return!0;if(i.included_values&&!0===i.included_values[o])return!0;if(i.excluded_values&&!0!==i.excluded_values[o])return!0}}return!1}},r.toGeojson=r,e.exports=r},463:function(e,t,n){e=n.nmd(e),function(){var r,o="__lodash_hash_undefined__",i=1,a=2,u=1/0,s=9007199254740991,l="[object Arguments]",c="[object Array]",f="[object Boolean]",p="[object Date]",y="[object Error]",d="[object Function]",g="[object GeneratorFunction]",v="[object Map]",h="[object Number]",b="[object Object]",m="[object Promise]",_="[object RegExp]",w="[object Set]",j="[object String]",A="[object Symbol]",k="[object WeakMap]",O="[object ArrayBuffer]",E="[object DataView]",x="[object Float32Array]",T="[object Float64Array]",M="[object Int8Array]",B="[object Int16Array]",N="[object Int32Array]",S="[object Uint8Array]",F="[object Uint8ClampedArray]",P="[object Uint16Array]",L="[object Uint32Array]",R=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,I=/^\w*$/,$=/^\./,G=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,C=/\\(\\)?/g,z=/\w*$/,D=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,U={};U[x]=U[T]=U[M]=U[B]=U[N]=U[S]=U[F]=U[P]=U[L]=!0,U[l]=U[c]=U[O]=U[f]=U[E]=U[p]=U[y]=U[d]=U[v]=U[h]=U[b]=U[_]=U[w]=U[j]=U[k]=!1;var V={};V[l]=V[c]=V[O]=V[E]=V[f]=V[p]=V[x]=V[T]=V[M]=V[B]=V[N]=V[v]=V[h]=V[b]=V[_]=V[w]=V[j]=V[A]=V[S]=V[F]=V[P]=V[L]=!0,V[y]=V[d]=V[k]=!1;var X="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,q="object"==typeof self&&self&&self.Object===Object&&self,J=X||q||Function("return this")(),H=t&&!t.nodeType&&t,K=H&&e&&!e.nodeType&&e,Q=K&&K.exports===H,Y=Q&&X.process,Z=function(){try{return Y&&Y.binding("util")}catch(e){}}(),ee=Z&&Z.isTypedArray;function te(e,t){return e.set(t[0],t[1]),e}function ne(e,t){return e.add(t),e}function re(e,t){for(var n=-1,r=e?e.length:0;++n<r&&!1!==t(e[n],n,e););return e}function oe(e,t,n,r){var o=-1,i=e?e.length:0;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}function ie(e,t){for(var n=-1,r=e?e.length:0;++n<r;)if(t(e[n],n,e))return!0;return!1}function ae(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function ue(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r){n[++t]=[r,e]})),n}function se(e,t){return function(n){return e(t(n))}}function le(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}var ce,fe=Array.prototype,pe=Function.prototype,ye=Object.prototype,de=J["__core-js_shared__"],ge=(ce=/[^.]+$/.exec(de&&de.keys&&de.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"",ve=pe.toString,he=ye.hasOwnProperty,be=ve.call(Object),me=ye.toString,_e=RegExp("^"+ve.call(he).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),we=Q?J.Buffer:r,je=J.Symbol,Ae=J.Uint8Array,ke=se(Object.getPrototypeOf,Object),Oe=Object.create,Ee=ye.propertyIsEnumerable,xe=fe.splice,Te=Object.getOwnPropertySymbols,Me=we?we.isBuffer:r,Be=se(Object.keys,Object),Ne=Math.max,Se=_t(J,"DataView"),Fe=_t(J,"Map"),Pe=_t(J,"Promise"),Le=_t(J,"Set"),Re=_t(J,"WeakMap"),Ie=_t(Object,"create"),$e=!Ee.call({valueOf:1},"valueOf"),Ge=Bt(Se),Ce=Bt(Fe),ze=Bt(Pe),De=Bt(Le),We=Bt(Re),Ue=je?je.prototype:r,Ve=Ue?Ue.valueOf:r,Xe=Ue?Ue.toString:r;function qe(){}function Je(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function He(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Ke(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Qe(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ke;++t<n;)this.add(e[t])}function Ye(e){this.__data__=new He(e)}function Ze(e,t){var n=Lt(e)||Pt(e)?function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):[],r=n.length,o=!!r;for(var i in e)!t&&!he.call(e,i)||o&&("length"==i||At(i,r))||n.push(i);return n}function et(e,t,n){(n!==r&&!Ft(e[t],n)||"number"==typeof t&&n===r&&!(t in e))&&(e[t]=n)}function tt(e,t,n){var o=e[t];he.call(e,t)&&Ft(o,n)&&(n!==r||t in e)||(e[t]=n)}function nt(e,t){for(var n=e.length;n--;)if(Ft(e[n][0],t))return n;return-1}function rt(e,t,n,o,i,a,u){var s;if(o&&(s=a?o(e,i,a,u):o(e)),s!==r)return s;if(!zt(e))return e;var c=Lt(e);if(c){if(s=function(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&he.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!t)return gt(e,s)}else{var y=jt(e),m=y==d||y==g;if($t(e))return function(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}(e,t);if(y==b||y==l||m&&!a){if(ae(e))return a?e:{};if(s=function(e){return"function"!=typeof e.constructor||Ot(e)?{}:zt(t=ke(e))?Oe(t):{};var t}(m?{}:e),!t)return function(e,t){return vt(e,wt(e),t)}(e,function(e,t){return e&&vt(t,Qt(t),e)}(s,e))}else{if(!V[y])return a?e:{};s=function(e,t,n,r){var o,i=e.constructor;switch(t){case O:return dt(e);case f:case p:return new i(+e);case E:return function(e,t){var n=t?dt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,r);case x:case T:case M:case B:case N:case S:case F:case P:case L:return function(e,t){var n=t?dt(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}(e,r);case v:return function(e,t,n){return oe(t?n(ue(e),!0):ue(e),te,new e.constructor)}(e,r,n);case h:case j:return new i(e);case _:return function(e){var t=new e.constructor(e.source,z.exec(e));return t.lastIndex=e.lastIndex,t}(e);case w:return function(e,t,n){return oe(t?n(le(e),!0):le(e),ne,new e.constructor)}(e,r,n);case A:return o=e,Ve?Object(Ve.call(o)):{}}}(e,y,rt,t)}}u||(u=new Ye);var k=u.get(e);if(k)return k;if(u.set(e,s),!c)var R=n?function(e){return function(e,t,n){var r=t(e);return Lt(e)?r:function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}(r,n(e))}(e,Qt,wt)}(e):Qt(e);return re(R||e,(function(r,i){R&&(r=e[i=r]),tt(s,i,rt(r,t,n,o,i,e,u))})),s}Je.prototype.clear=function(){this.__data__=Ie?Ie(null):{}},Je.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Je.prototype.get=function(e){var t=this.__data__;if(Ie){var n=t[e];return n===o?r:n}return he.call(t,e)?t[e]:r},Je.prototype.has=function(e){var t=this.__data__;return Ie?t[e]!==r:he.call(t,e)},Je.prototype.set=function(e,t){return this.__data__[e]=Ie&&t===r?o:t,this},He.prototype.clear=function(){this.__data__=[]},He.prototype.delete=function(e){var t=this.__data__,n=nt(t,e);return!(n<0||(n==t.length-1?t.pop():xe.call(t,n,1),0))},He.prototype.get=function(e){var t=this.__data__,n=nt(t,e);return n<0?r:t[n][1]},He.prototype.has=function(e){return nt(this.__data__,e)>-1},He.prototype.set=function(e,t){var n=this.__data__,r=nt(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},Ke.prototype.clear=function(){this.__data__={hash:new Je,map:new(Fe||He),string:new Je}},Ke.prototype.delete=function(e){return mt(this,e).delete(e)},Ke.prototype.get=function(e){return mt(this,e).get(e)},Ke.prototype.has=function(e){return mt(this,e).has(e)},Ke.prototype.set=function(e,t){return mt(this,e).set(e,t),this},Qe.prototype.add=Qe.prototype.push=function(e){return this.__data__.set(e,o),this},Qe.prototype.has=function(e){return this.__data__.has(e)},Ye.prototype.clear=function(){this.__data__=new He},Ye.prototype.delete=function(e){return this.__data__.delete(e)},Ye.prototype.get=function(e){return this.__data__.get(e)},Ye.prototype.has=function(e){return this.__data__.has(e)},Ye.prototype.set=function(e,t){var n=this.__data__;if(n instanceof He){var r=n.__data__;if(!Fe||r.length<199)return r.push([e,t]),this;n=this.__data__=new Ke(r)}return n.set(e,t),this};var ot,it=(ot=function(e,t){return e&&at(e,t,Qt)},function(e,t){if(null==e)return e;if(!Rt(e))return ot(e,t);for(var n=e.length,r=-1,o=Object(e);++r<n&&!1!==t(o[r],r,o););return e}),at=function(e,t,n){for(var r=-1,o=Object(e),i=n(e),a=i.length;a--;){var u=i[++r];if(!1===t(o[u],u,o))break}return e};function ut(e,t){for(var n=0,o=(t=kt(t,e)?[t]:yt(t)).length;null!=e&&n<o;)e=e[Mt(t[n++])];return n&&n==o?e:r}function st(e,t){return null!=e&&t in Object(e)}function lt(e,t,n,o,u){return e===t||(null==e||null==t||!zt(e)&&!Dt(t)?e!=e&&t!=t:function(e,t,n,o,u,s){var d=Lt(e),g=Lt(t),m=c,k=c;d||(m=(m=jt(e))==l?b:m),g||(k=(k=jt(t))==l?b:k);var x=m==b&&!ae(e),T=k==b&&!ae(t),M=m==k;if(M&&!x)return s||(s=new Ye),d||Xt(e)?ht(e,t,n,o,u,s):function(e,t,n,r,o,u,s){switch(n){case E:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case O:return!(e.byteLength!=t.byteLength||!r(new Ae(e),new Ae(t)));case f:case p:case h:return Ft(+e,+t);case y:return e.name==t.name&&e.message==t.message;case _:case j:return e==t+"";case v:var l=ue;case w:var c=u&a;if(l||(l=le),e.size!=t.size&&!c)return!1;var d=s.get(e);if(d)return d==t;u|=i,s.set(e,t);var g=ht(l(e),l(t),r,o,u,s);return s.delete(e),g;case A:if(Ve)return Ve.call(e)==Ve.call(t)}return!1}(e,t,m,n,o,u,s);if(!(u&a)){var B=x&&he.call(e,"__wrapped__"),N=T&&he.call(t,"__wrapped__");if(B||N){var S=B?e.value():e,F=N?t.value():t;return s||(s=new Ye),n(S,F,o,u,s)}}return!!M&&(s||(s=new Ye),function(e,t,n,o,i,u){var s=i&a,l=Qt(e),c=l.length;if(c!=Qt(t).length&&!s)return!1;for(var f=c;f--;){var p=l[f];if(!(s?p in t:he.call(t,p)))return!1}var y=u.get(e);if(y&&u.get(t))return y==t;var d=!0;u.set(e,t),u.set(t,e);for(var g=s;++f<c;){var v=e[p=l[f]],h=t[p];if(o)var b=s?o(h,v,p,t,e,u):o(v,h,p,e,t,u);if(!(b===r?v===h||n(v,h,o,i,u):b)){d=!1;break}g||(g="constructor"==p)}if(d&&!g){var m=e.constructor,_=t.constructor;m==_||!("constructor"in e)||!("constructor"in t)||"function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _||(d=!1)}return u.delete(e),u.delete(t),d}(e,t,n,o,u,s))}(e,t,lt,n,o,u))}function ct(e){return"function"==typeof e?e:null==e?en:"object"==typeof e?Lt(e)?(o=e[0],u=e[1],kt(o)&&Et(u)?xt(Mt(o),u):function(e){var t=Ht(e,o);return t===r&&t===u?Kt(e,o):lt(u,t,r,i|a)}):(n=function(e){for(var t=Qt(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Et(o)]}return t}(t=e),1==n.length&&n[0][2]?xt(n[0][0],n[0][1]):function(e){return e===t||function(e,t,n,o){var u=n.length,s=u;if(null==e)return!s;for(e=Object(e);u--;){var l=n[u];if(l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++u<s;){var c=(l=n[u])[0],f=e[c],p=l[1];if(l[2]){if(f===r&&!(c in e))return!1}else{var y,d=new Ye;if(!(y===r?lt(p,f,o,i|a,d):y))return!1}}return!0}(e,0,n)}):nn(e);var t,n,o,u}function ft(e){if(!zt(e))return function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}(e);var t=Ot(e),n=[];for(var r in e)("constructor"!=r||!t&&he.call(e,r))&&n.push(r);return n}function pt(e,t,n,o,i){if(e!==t){if(!Lt(t)&&!Xt(t))var a=ft(t);re(a||t,(function(u,s){if(a&&(u=t[s=u]),zt(u))i||(i=new Ye),function(e,t,n,o,i,a,u){var s=e[n],l=t[n],c=u.get(l);if(c)et(e,n,c);else{var f=a?a(s,l,n+"",e,t,u):r,p=f===r;p&&(f=l,Lt(l)||Xt(l)?Lt(s)?f=s:It(s)?f=gt(s):(p=!1,f=rt(l,!0)):Wt(l)||Pt(l)?Pt(s)?f=qt(s):!zt(s)||o&&Gt(s)?(p=!1,f=rt(l,!0)):f=s:p=!1),p&&(u.set(l,f),i(f,l,o,a,u),u.delete(l)),et(e,n,f)}}(e,t,s,n,pt,o,i);else{var l=o?o(e[s],u,s+"",e,t,i):r;l===r&&(l=u),et(e,s,l)}}))}}function yt(e){return Lt(e)?e:Tt(e)}function dt(e){var t=new e.constructor(e.byteLength);return new Ae(t).set(new Ae(e)),t}function gt(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function vt(e,t,n,o){n||(n={});for(var i=-1,a=t.length;++i<a;){var u=t[i],s=o?o(n[u],e[u],u,n,e):r;tt(n,u,s===r?e[u]:s)}return n}function ht(e,t,n,o,u,s){var l=u&a,c=e.length,f=t.length;if(c!=f&&!(l&&f>c))return!1;var p=s.get(e);if(p&&s.get(t))return p==t;var y=-1,d=!0,g=u&i?new Qe:r;for(s.set(e,t),s.set(t,e);++y<c;){var v=e[y],h=t[y];if(o)var b=l?o(h,v,y,t,e,s):o(v,h,y,e,t,s);if(b!==r){if(b)continue;d=!1;break}if(g){if(!ie(t,(function(e,t){if(!g.has(t)&&(v===e||n(v,e,o,u,s)))return g.add(t)}))){d=!1;break}}else if(v!==h&&!n(v,h,o,u,s)){d=!1;break}}return s.delete(e),s.delete(t),d}function bt(){var e=qe.iteratee||tn;return e=e===tn?ct:e,arguments.length?e(arguments[0],arguments[1]):e}function mt(e,t){var n,r,o=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function _t(e,t){var n=function(e,t){return null==e?r:e[t]}(e,t);return function(e){return!(!zt(e)||(t=e,ge&&ge in t))&&(Gt(e)||ae(e)?_e:D).test(Bt(e));var t}(n)?n:r}var wt=Te?se(Te,Object):rn,jt=function(e){return me.call(e)};function At(e,t){return!!(t=null==t?s:t)&&("number"==typeof e||W.test(e))&&e>-1&&e%1==0&&e<t}function kt(e,t){if(Lt(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Ut(e))||I.test(e)||!R.test(e)||null!=t&&e in Object(t)}function Ot(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ye)}function Et(e){return e==e&&!zt(e)}function xt(e,t){return function(n){return null!=n&&n[e]===t&&(t!==r||e in Object(n))}}(Se&&jt(new Se(new ArrayBuffer(1)))!=E||Fe&&jt(new Fe)!=v||Pe&&jt(Pe.resolve())!=m||Le&&jt(new Le)!=w||Re&&jt(new Re)!=k)&&(jt=function(e){var t=me.call(e),n=t==b?e.constructor:r,o=n?Bt(n):r;if(o)switch(o){case Ge:return E;case Ce:return v;case ze:return m;case De:return w;case We:return k}return t});var Tt=St((function(e){e=Jt(e);var t=[];return $.test(e)&&t.push(""),e.replace(G,(function(e,n,r,o){t.push(r?o.replace(C,"$1"):n||e)})),t}));function Mt(e){if("string"==typeof e||Ut(e))return e;var t=e+"";return"0"==t&&1/e==-u?"-0":t}function Bt(e){if(null!=e){try{return ve.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Nt(e,t){return(Lt(e)?re:it)(e,bt(t,3))}function St(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(St.Cache||Ke),n}function Ft(e,t){return e===t||e!=e&&t!=t}function Pt(e){return It(e)&&he.call(e,"callee")&&(!Ee.call(e,"callee")||me.call(e)==l)}St.Cache=Ke;var Lt=Array.isArray;function Rt(e){return null!=e&&Ct(e.length)&&!Gt(e)}function It(e){return Dt(e)&&Rt(e)}var $t=Me||on;function Gt(e){var t=zt(e)?me.call(e):"";return t==d||t==g}function Ct(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=s}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Dt(e){return!!e&&"object"==typeof e}function Wt(e){if(!Dt(e)||me.call(e)!=b||ae(e))return!1;var t=ke(e);if(null===t)return!0;var n=he.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&ve.call(n)==be}function Ut(e){return"symbol"==typeof e||Dt(e)&&me.call(e)==A}var Vt,Xt=ee?(Vt=ee,function(e){return Vt(e)}):function(e){return Dt(e)&&Ct(e.length)&&!!U[me.call(e)]};function qt(e){return vt(e,Yt(e))}function Jt(e){return null==e?"":function(e){if("string"==typeof e)return e;if(Ut(e))return Xe?Xe.call(e):"";var t=e+"";return"0"==t&&1/e==-u?"-0":t}(e)}function Ht(e,t,n){var o=null==e?r:ut(e,t);return o===r?n:o}function Kt(e,t){return null!=e&&function(e,t,n){for(var r,o=-1,i=(t=kt(t,e)?[t]:yt(t)).length;++o<i;){var a=Mt(t[o]);if(!(r=null!=e&&n(e,a)))break;e=e[a]}return r||!!(i=e?e.length:0)&&Ct(i)&&At(a,i)&&(Lt(e)||Pt(e))}(e,t,st)}function Qt(e){return Rt(e)?Ze(e):function(e){if(!Ot(e))return Be(e);var t=[];for(var n in Object(e))he.call(e,n)&&"constructor"!=n&&t.push(n);return t}(e)}function Yt(e){return Rt(e)?Ze(e,!0):ft(e)}var Zt=function(e){return t=function(t,n){var o=-1,i=n.length,a=i>1?n[i-1]:r,u=i>2?n[2]:r;for(a=e.length>3&&"function"==typeof a?(i--,a):r,u&&function(e,t,n){if(!zt(n))return!1;var r=typeof t;return!!("number"==r?Rt(n)&&At(t,n.length):"string"==r&&t in n)&&Ft(n[t],e)}(n[0],n[1],u)&&(a=i<3?r:a,i=1),t=Object(t);++o<i;){var s=n[o];s&&e(t,s,o)}return t},n=Ne(n===r?t.length-1:n,0),function(){for(var e=arguments,r=-1,o=Ne(e.length-n,0),i=Array(o);++r<o;)i[r]=e[n+r];r=-1;for(var a=Array(n+1);++r<n;)a[r]=e[r];return a[n]=i,function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}(t,this,a)};var t,n}((function(e,t,n){pt(e,t,n)}));function en(e){return e}function tn(e){return ct("function"==typeof e?e:rt(e,!0))}function nn(e){return kt(e)?(t=Mt(e),function(e){return null==e?r:e[t]}):function(e){return function(t){return ut(t,e)}}(e);var t}function rn(){return[]}function on(){return!1}qe.compact=function(e){for(var t=-1,n=e?e.length:0,r=0,o=[];++t<n;){var i=e[t];i&&(o[r++]=i)}return o},qe.iteratee=tn,qe.keys=Qt,qe.keysIn=Yt,qe.memoize=St,qe.merge=Zt,qe.property=nn,qe.toPlainObject=qt,qe.clone=function(e){return rt(e,!1,!0)},qe.eq=Ft,qe.forEach=Nt,qe.get=Ht,qe.hasIn=Kt,qe.identity=en,qe.isArguments=Pt,qe.isArray=Lt,qe.isArrayLike=Rt,qe.isArrayLikeObject=It,qe.isBuffer=$t,qe.isEmpty=function(e){if(Rt(e)&&(Lt(e)||"string"==typeof e||"function"==typeof e.splice||$t(e)||Pt(e)))return!e.length;var t=jt(e);if(t==v||t==w)return!e.size;if($e||Ot(e))return!Be(e).length;for(var n in e)if(he.call(e,n))return!1;return!0},qe.isFunction=Gt,qe.isLength=Ct,qe.isObject=zt,qe.isObjectLike=Dt,qe.isPlainObject=Wt,qe.isSymbol=Ut,qe.isTypedArray=Xt,qe.stubArray=rn,qe.stubFalse=on,qe.toString=Jt,qe.each=Nt,qe.VERSION="4.15.0",K&&((K.exports=qe)._=qe,H._=qe)}.call(this)},960:e=>{function t(e,t){if(0!==e.length){n(e[0],t);for(var r=1;r<e.length;r++)n(e[r],!t)}}function n(e,t){for(var n=0,r=0,o=0,i=e.length,a=i-1;o<i;a=o++){var u=(e[o][0]-e[a][0])*(e[a][1]+e[o][1]),s=n+u;r+=Math.abs(n)>=Math.abs(u)?n-s+u:u-s+n,n=s}n+r>=0!=!!t&&e.reverse()}e.exports=function e(n,r){var o,i=n&&n.type;if("FeatureCollection"===i)for(o=0;o<n.features.length;o++)e(n.features[o],r);else if("GeometryCollection"===i)for(o=0;o<n.geometries.length;o++)e(n.geometries[o],r);else if("Feature"===i)e(n.geometry,r);else if("Polygon"===i)t(n.coordinates,r);else if("MultiPolygon"===i)for(o=0;o<n.coordinates.length;o++)t(n.coordinates[o],r);return n}},835:(e,t,n)=>{e.exports=n(386)},386:e=>{"use strict";e.exports=JSON.parse('[{"key":"building","polygon":"all"},{"key":"highway","polygon":"whitelist","values":["services","rest_area","escape","elevator"]},{"key":"natural","polygon":"blacklist","values":["coastline","cliff","ridge","arete","tree_row"]},{"key":"landuse","polygon":"all"},{"key":"waterway","polygon":"whitelist","values":["riverbank","dock","boatyard","dam"]},{"key":"amenity","polygon":"all"},{"key":"leisure","polygon":"all"},{"key":"barrier","polygon":"whitelist","values":["city_wall","ditch","hedge","retaining_wall","wall","spikes"]},{"key":"railway","polygon":"whitelist","values":["station","turntable","roundhouse","platform"]},{"key":"area","polygon":"all"},{"key":"boundary","polygon":"all"},{"key":"man_made","polygon":"blacklist","values":["cutline","embankment","pipeline"]},{"key":"power","polygon":"whitelist","values":["plant","substation","generator","transformer"]},{"key":"place","polygon":"all"},{"key":"shop","polygon":"all"},{"key":"aeroway","polygon":"blacklist","values":["taxiway"]},{"key":"tourism","polygon":"all"},{"key":"historic","polygon":"all"},{"key":"public_transport","polygon":"all"},{"key":"office","polygon":"all"},{"key":"building:part","polygon":"all"},{"key":"military","polygon":"all"},{"key":"ruins","polygon":"all"},{"key":"area:highway","polygon":"all"},{"key":"craft","polygon":"all"},{"key":"golf","polygon":"all"},{"key":"indoor","polygon":"all"}]')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n(237)})()));