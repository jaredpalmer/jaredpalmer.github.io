(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{246:function(e,t,r){"use strict";r.r(t),r(267);var n=r(34),o=r.n(n),a=r(1),i=r(112),l=r(253),c=r(254),s=r(258),p=function(e){return a.createElement(l.Row,{maxWidth:700,margin:"2rem auto",padding:"0 1rem",alignItems:"center"},a.createElement(l.Block,{component:"img",height:"36",width:"36",borderRadius:"50%",props:{src:"https://media.shellypalmer.com/wp-content/images/2017/12/13131645/jaredpalmer_headshot_sq_bw.jpg"}}),a.createElement(l.Column,{marginLeft:"1rem"},a.createElement(l.Block,null,"Jared Palmer"),a.createElement(l.Block,{fontSize:".8rem",color:c.a.color.grayLighter},"Senior Engineer at The Palmer Group")))};p.displayName="Author";var d=r(343),u=r(287);r.d(t,"default",function(){return m}),r.d(t,"pageQuery",function(){return f}),i.css.global(".text-content pre",{overflowX:"scroll",fontSize:13,padding:".5rem"});var m=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=this.props.data.markdownRemark;return a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description,image:t.frontmatter.image,theme:"normal"},a.createElement("article",null,a.createElement("header",null,a.createElement(l.Block,{component:"h1",maxWidth:700,fontSize:c.a.rhythm(1.5),letterSpacing:"-0.03em",margin:"0 auto",padding:"5rem 1rem 0",position:"relative",fontWeight:c.a.bold,background:c.a.color.white,css:(e={},e[c.a.media.medium]={padding:"6rem 1rem 0",fontSize:c.a.rhythm(2)},e[c.a.media.large]={fontSize:c.a.rhythm(2.5),padding:"8rem 1rem 0",letterSpacing:"-0.04em",marginBottom:c.a.rhythm(2)},e)},t.frontmatter.title)),a.createElement(p,null),a.createElement(l.Block,{css:c.a.sharedStyles.markdown,dangerouslySetInnerHTML:{__html:t.html}})),a.createElement(l.Block,{padding:"4rem 1rem"},a.createElement(l.Row,{component:"aside",alignItems:"center",justifyContent:"space-between",margin:"0 auto",maxWidth:c.a.sharedStyles.markdown.maxWidth,borderTop:"1px solid "+c.a.color.offWhite,paddingTop:"4rem"},a.createElement(l.Block,{component:"a",fontSize:".9rem",textTransform:"uppercase",letterSpacing:".04em",background:c.a.color.twitter,padding:".5rem .75rem",borderRadius:"3px",fontWeight:c.a.bold,position:"relative",color:c.a.color.white,props:{href:"https://twitter.com/intent/tweet?"+d.stringify({url:void 0!==typeof window&&window.location.href,via:"jaredpalmer"})}},"Like it? Tweet"),a.createElement(l.Block,{component:"time",props:{dateTime:new Date(t.frontmatter.date).toISOString()},color:c.a.color.grayLighter,fontSize:"1rem",textTransform:"uppercase",letterSpacing:".04em"},"Published"," ",a.createElement(l.InlineBlock,{component:"span",fontWeight:500},u(t.frontmatter.date,"d MMM YYYY"))))))},t}(a.Component),f="1650709558"},258:function(e,t,r){"use strict";var n=r(34),o=r.n(n),a=(r(257),r(1)),i=r(263),l=r(253),c=r(265),s=r(269),p=r.n(s),d=r(260),u=r.n(d),m=function(e){return a.createElement(a.Fragment,null,a.createElement("div",{className:"skipnav"},a.createElement("a",{href:"#maincontent"},"Skip to main content")," ",a.createElement("a",{href:"#footer"},"Skip to footer")),a.createElement(p.a,{title:e.title,meta:[{name:"twitter:title",content:e.title},{name:"og:title",content:e.title},{name:"twitter:site",content:"@jaredpalmer"},e.description&&{name:"description",content:e.description},e.description&&{name:"twitter:description",content:e.description},,e.description&&{name:"og:description",content:e.description},e.image&&{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:e.image?e.image:u.a},{name:"og:image",content:e.image?e.image:u.a}].filter(Boolean)}))};m.displayName="Head",r.d(t,"a",function(){return h});function f(e,t){return Math.floor(Math.random()*(t-e+1))+e}function y(e,t){return(Math.random()*(e-t)+e).toFixed(1)}var g=[];!function(){for(var e,t=["#D441D0","#80B9FE","#F5A623","#7ED321","#F8E71C"],r=0;r<50;r++){var n=f(0,100),o=f(0,100),a=y(.4,1.25),i=y(.9,1);g.push({x:n,y:o,size:a,opacity:i,color:(e=t,e[Math.floor(Math.random()*e.length)])})}}();var h=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return a.createElement(a.Fragment,null,a.createElement(m,{title:this.props.title,description:this.props.description,image:this.props.image}),a.createElement(i.a,{theme:this.props.theme||"normal",showName:this.props.showName||!0}),g.map(function(e,t){return a.createElement("div",{key:"top-dot-"+e.y+"-"+e.x+"-"+t,style:{position:"absolute",left:e.x+"%",top:e.y+"%",height:e.size+"rem",width:e.size+"rem",opacity:e.opacity,borderRadius:"50%",zIndex:0,backgroundColor:e.color}})}),g.map(function(e,t){return a.createElement("div",{key:"bottom-dot-"+e.y+"-"+e.x+"-"+t,style:{position:"absolute",right:e.x+"%",bottom:e.y+"%",height:e.size+"rem",width:e.size+"rem",opacity:e.opacity,borderRadius:"50%",zIndex:0,backgroundColor:e.color}})}),a.createElement(l.Block,{background:"#fff",props:{role:"main",id:"maincontent"},component:"main"},this.props.children),a.createElement(c.a,null))},t}(a.Component);h.displayName="Layout"},260:function(e,t,r){e.exports=r.p+"static/og_image-757a055db0f4e9e6aaaa6003929b3eff.png"},288:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},289:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:a,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],i=Object.keys(a),l=0;l<i.length;++l){var c=i[l],s=a[c];"object"==typeof s&&null!==s&&-1===r.indexOf(s)&&(t.push({obj:a,prop:c}),r.push(s))}return function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t}(t)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var a=t.charCodeAt(n);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=t.charAt(n):a<128?r+=o[a]:a<2048?r+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?r+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(n+=1,a=65536+((1023&a)<<10|1023&t.charCodeAt(n)),r+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return r},isBuffer:function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=a(t,o)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){n.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e(t[a],r,o):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var i=r[a];return n.call(t,a)?t[a]=e(t[a],i,o):t[a]=i,t},i)}}},341:function(e,t,r){"use strict";var n=r(289),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,i=/(\[[^[\]]*])/.exec(n),l=i?n.slice(0,i.index):n,c=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;c.push(l)}for(var s=0;null!==(i=a.exec(n))&&s<r.depth;){if(s+=1,!r.plainObjects&&o.call(Object.prototype,i[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(i[1])}return i&&c.push("["+n.slice(i.index)+"]"),function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var a,i=e[o];if("[]"===i)a=(a=[]).concat(n);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,c=parseInt(l,10);!isNaN(c)&&i!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(a=[])[c]=n:a[l]=n}n=a}return n}(c,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,i=t.parameterLimit===1/0?void 0:t.parameterLimit,l=n.split(t.delimiter,i),c=0;c<l.length;++c){var s,p,d=l[c],u=d.indexOf("]="),m=-1===u?d.indexOf("="):u+1;-1===m?(s=t.decoder(d,a.decoder),p=t.strictNullHandling?null:""):(s=t.decoder(d.slice(0,m),a.decoder),p=t.decoder(d.slice(m+1),a.decoder)),o.call(r,s)?r[s]=[].concat(r[s]).concat(p):r[s]=p}return r}(e,r):e,c=r.plainObjects?Object.create(null):{},s=Object.keys(l),p=0;p<s.length;++p){var d=s[p],u=i(d,l[d],r);c=n.merge(c,u,r)}return n.compact(c)}},342:function(e,t,r){"use strict";var n=r(289),o=r(288),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},i=Date.prototype.toISOString,l={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return i.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,o,a,i,c,s,p,d,u,m,f){var y=t;if("function"==typeof s)y=s(r,y);else if(y instanceof Date)y=u(y);else if(null===y){if(a)return c&&!f?c(r,l.encoder):r;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||n.isBuffer(y))return c?[m(f?r:c(r,l.encoder))+"="+m(c(y,l.encoder))]:[m(r)+"="+m(String(y))];var g,h=[];if(void 0===y)return h;if(Array.isArray(s))g=s;else{var b=Object.keys(y);g=p?b.sort(p):b}for(var v=0;v<g.length;++v){var w=g[v];i&&null===y[w]||(h=Array.isArray(y)?h.concat(e(y[w],o(r,w),o,a,i,c,s,p,d,u,m,f)):h.concat(e(y[w],r+(d?"."+w:"["+w+"]"),o,a,i,c,s,p,d,u,m,f)))}return h};e.exports=function(e,t){var r=e,i=t?n.assign({},t):{};if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");var s=void 0===i.delimiter?l.delimiter:i.delimiter,p="boolean"==typeof i.strictNullHandling?i.strictNullHandling:l.strictNullHandling,d="boolean"==typeof i.skipNulls?i.skipNulls:l.skipNulls,u="boolean"==typeof i.encode?i.encode:l.encode,m="function"==typeof i.encoder?i.encoder:l.encoder,f="function"==typeof i.sort?i.sort:null,y=void 0!==i.allowDots&&i.allowDots,g="function"==typeof i.serializeDate?i.serializeDate:l.serializeDate,h="boolean"==typeof i.encodeValuesOnly?i.encodeValuesOnly:l.encodeValuesOnly;if(void 0===i.format)i.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,i.format))throw new TypeError("Unknown format option provided.");var b,v,w=o.formatters[i.format];"function"==typeof i.filter?r=(v=i.filter)("",r):Array.isArray(i.filter)&&(b=v=i.filter);var j,O=[];if("object"!=typeof r||null===r)return"";j=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var E=a[j];b||(b=Object.keys(r)),f&&b.sort(f);for(var k=0;k<b.length;++k){var x=b[k];d&&null===r[x]||(O=O.concat(c(r[x],x,E,p,d,u?m:null,v,f,y,g,w,h)))}var A=O.join(s),S=!0===i.addQueryPrefix?"?":"";return A.length>0?S+A:""}},343:function(e,t,r){"use strict";var n=r(342),o=r(341),a=r(288);e.exports={formats:a,parse:o,stringify:n}}}]);
//# sourceMappingURL=component---src-post-tsx-57c186e1e55733ab0729.js.map