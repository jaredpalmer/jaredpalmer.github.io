(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(e,t,o){"use strict";var r,n;o.d(t,"a",function(){return c});var a=o(375)({baseFontSize:"16px",baseLineHeight:1.5}).rhythm,i={dark:"#1B2125",white:"#fff",black:"#000",blue:"#80B9FE",red:"#CC0000",yellow:"#F8DC57",green:"#1CF5BA",purple:"#5E21D9",grayDarker:"#252527",gray:"#5F656D",grayLighter:"#8C95A1",grayLightest:"#DDE5E8",offWhiteLightest:"#F7FBFB",offWhiteLighter:"#EFF7F8",offWhite:"#EFEFEF",twitter:"#1da1f2",github:"#000",instagram:"#ed4956",facebook:"#4267b2",linkedin:"#0073b1",dribbble:"#c142a0"},l={small:"@media (min-width: 500px)",medium:"@media (min-width: 800px)",large:"@media (min-width: 1200px)"},c={rhythm:a,media:l,color:i,bold:800,wrapperWidth:1e3,sharedStyles:{markdown:{position:"relative",zIndex:300,maxWidth:700,width:"100%",margin:"0 auto",paddingLeft:"1rem",paddingRight:"1rem",background:i.white,paddingBottom:80,"& .dropcap":{float:"left",fontSize:53,lineHeight:.8,position:"relative",top:" 9px",fontWeight:800,paddingRight:8,background:i.white},"& ::-moz-selection":{background:i.purple,color:i.white},"& ::selection":{background:i.purple,color:i.white},"& p a, & li a, & li code a":{fontWeight:"inherit",color:i.purple,textDecoration:"underline"},"& h1, & h2, & h3, & h4":{lineHeight:"1.2",fontWeight:800,marginTop:a(2)},"& h1, & h2, & h3, & h4, & p, & ul, & ol ":{marginBottom:a(1)},"& li h4, & li h5, & li h6":{marginBottom:0},"& ul li":{margin:"0 0 10px 16px","&:before":{float:"left",marginLeft:-16,color:i.grayLighter,content:"-"}},"& strong":{fontWeight:800},"& p":{lineHeight:"1.5",fontWeight:400,fontSize:a(.8),marginBottom:a(1.25)},"& .gatsby-highlight  pre > code":{fontSize:13,lineHeight:1.4},"& h1":(r={},r[l.large]={fontSize:a(2),letterSpacing:"-1px"},r),"& pre.editor.editor-colors":(n={},n[l.large]={marginLeft:"-1.5rem",marginRight:"-1.5rem"},n),"& .comment.js":{color:i.grayLighter},"& .keyword.js":{color:i.grayDarker,fontWeight:"bold"},"& .variable.default.js":{color:i.grayDarker,fontWeight:"bold"},"& .storage.type.js":{color:i.grayDarker,fontWeight:"bold"},"& .storage.modifier.js":{color:i.grayDarker,fontWeight:"bold"},"& .entity.other.attribute-name.js":{color:i.grayDarker,fontStyle:"italic"},"& .entity.name.function.js":{color:i.gray},"& .punctuation.definition.brace.curly.js":{color:i.gray},"& .punctuation.definition.string.js":{color:i.gray},"& .meta.brace.curly.js":{color:i.gray},"& .string.quoted.double.js":{color:i.gray},"& .punctuation.definition.tag.js":{color:i.gray},"& .keyword.operator.spread.js":{color:i.gray}}}}},257:function(e,t,o){},263:function(e,t,o){"use strict";o(255),o(70);var r=o(34),n=o.n(r),a=o(1),i=o(299),l=o.n(i),c=o(253),s=o(254),m=o(276),g=o(271),p=o.n(g),d=function(e){var t,o=e.isOpen,r=(e.toggle,e.color),n=void 0===r?s.a.color.black:r,i=p()(e,["isOpen","toggle","color"]);return a.createElement(c.Block,{position:"absolute",css:(t={},t[s.a.media.medium]={display:"none"},t),height:50,top:"0",left:"0",display:"flex",alignItems:"center",justifyContent:"center",padding:"0 1rem",zIndex:"99999",cursor:"pointer",props:Object.assign({role:"button"},i)},o?a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2",style:{verticalAlign:"middle"},strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("g",{className:"nc-icon-wrapper"},a.createElement("path",{d:"M18 6L6 18"}),a.createElement("path",{d:"M6 6l12 12"}))):a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:n,style:{verticalAlign:"middle"},strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a.createElement("g",{className:"nc-icon-wrapper"},a.createElement("path",{d:"M3 12h18"}),a.createElement("path",{d:"M3 6h18"}),a.createElement("path",{d:"M3 18h18"}))))};d.displayName="Hamburger";var h=o(295),u=o.n(h),f=o(358),b=u.a.div({open:{y:"-20px",opacity:1,staggerChildren:40,transition:function(e){return Object(f.a)(Object.assign({},e,{duration:300}))}},closed:{y:"-50px",opacity:0,delay:100,staggerChildren:15,transition:function(e){return Object(f.a)(Object.assign({},e,{duration:500}))}},initialPose:"closed"}),y=u()(m.a)({open:{delay:50,opacity:1,y:0},closed:{opacity:0,y:"-20px"}}),v=function(e){var t,o=e.items,r=e.isOpen;return a.createElement(c.Block,{component:b,pose:r?"open":"closed",pointerEvents:r?"auto":"none",backgroundColor:"#000",opacity:"0",paddingTop:"4.45rem",paddingBottom:"2rem",paddingLeft:"3rem",paddingRight:"3rem",css:(t={},t[s.a.media.medium]={display:"none"},t),position:"absolute",top:"0",left:"0",right:"0",zIndex:"999",boxShadow:"0 2px 4px rgba(0,0,0,.2)"},o.map(function(e,t){return a.createElement(y,{padding:"1rem 0",color:"#eee",fontSize:"1rem",borderTop:0!==t&&"1px solid "+s.a.color.grayDarker,key:e.to,to:e.to,text:e.text})}))};v.displayName="NavMobile",o(294);var C=function(){},w=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return t.forEach(function(e){return e&&e.apply(void 0,o)})}},k=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).toggleKeys=["Enter"," "],t.state={on:t.getOn({on:!!t.props.defaultOn})},t.setOn=function(){return t.setOnState(!0)},t.setOff=function(){return t.setOnState(!1)},t.toggle=function(){return t.setOnState()},t.getTogglerProps=function(e){return void 0===e&&(e={}),Object.assign({"aria-expanded":Boolean(t.getOn()),tabIndex:0},e,{onClick:function(){var o;e.onClick&&(o=e).onClick.apply(o,arguments),t.toggle()}})},t.getElementTogglerProps=function(e){return void 0===e&&(e={}),t.getTogglerProps(Object.assign({},e,{onKeyUp:w(e.onKeyUp,function(e){t.toggleKeys.indexOf(e.key)>-1&&t.toggle()})}))},t.setOnState=function(e){void 0===e&&(e=!t.getOn());var o=t.getOn()===e?C:function(){t.props.onToggle(e,t.getTogglerStateAndHelpers())};t.setState({on:e},o)},t}n()(t,e);var o=t.prototype;return o.componentWillReceiveProps=function(e){var t=e.on;t!==this.props.on&&t!==this.state.on&&this.setOnState(t)},o.getOn=function(e,t){return void 0===e&&(e=this.state),void 0===t&&(t=this.props),this.isOnControlled()?!!t.on:!!e.on},o.isOnControlled=function(){return void 0!==this.props.on},o.getTogglerStateAndHelpers=function(){return{on:this.getOn(),getTogglerProps:this.getTogglerProps,getElementTogglerProps:this.getElementTogglerProps,setOn:this.setOn,setOff:this.setOff,toggle:this.toggle}},o.render=function(){return this.props.children(this.getTogglerStateAndHelpers())},t}(a.Component);k.defaultProps={defaultOn:!1,onToggle:C};var E=o(273);o.d(t,"a",function(){return x}),o(351);var x=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).state={isOpen:!1},t.toggleNav=function(){t.setState({isOpen:!t.state.isOpen})},t.forceCloseSidebar=function(){t.setState({isOpen:!1})},t}n()(t,e);var o=t.prototype;return o.componentDidMount=function(){window.matchMedia(s.a.media.medium.replace("@media ","")).addListener(this.forceCloseSidebar)},o.componentWillUnmount=function(){window.matchMedia(s.a.media.medium.replace("@media ","")).removeListener(this.forceCloseSidebar)},o.render=function(){var e,t,o,r=this;return a.createElement(a.Fragment,null,a.createElement(k,{on:this.state.isOpen,onToggle:this.toggleNav},function(e){var t=e.on,o=e.toggle,n=e.getElementTogglerProps;return a.createElement(a.Fragment,null,a.createElement(d,Object.assign({isOpen:t,toggle:o,color:"normal"!==r.props.theme?s.a.color.white:s.a.color.black},n())),a.createElement(v,{isOpen:t,items:E.a}))}),a.createElement(c.Block,{position:"absolute",top:"0",right:"0",left:"0",zIndex:"1000",height:50,width:"100%",padding:"0 1rem",css:(e={},e[s.a.media.medium]={height:80},e),maxWidth:1e3,margin:"0 auto"},a.createElement(c.Row,{height:50,css:(t={},t[s.a.media.medium]={height:80,justifyContent:"space-between"},t),justifyContent:"center",alignItems:"center"},a.createElement(c.Block,{component:l.a,fontWeight:700,textDecoration:"none",textTransform:"uppercase",color:"normal"===this.props.theme?s.a.color.black:s.a.color.white,css:{display:this.props.showName?"block":"none"},fontSize:20,letterSpacing:"1px",to:"/"},"Jared Palmer"),a.createElement(c.Row,{component:"nav",props:{role:"navigation","aria-label":"Main Navigation"},flex:"1",display:"none",maxWidth:this.props.showName?500:void 0,alignItems:"center",justifyContent:"flex-end",css:(o={},o[s.a.media.medium]={display:"flex",alignItems:"flex-end"},o)},E.a.map(function(e){return a.createElement(m.a,{key:e.to,to:e.to,text:e.text,marginLeft:"1rem"})})))))},t}(a.Component)},265:function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o(255);var r=o(1),n=o(254),a=o(253),i=o(276),l=o(291),c=o(273),s=function(e){return r.createElement(a.Block,{component:"footer",props:{role:"contentinfo","aria-label":"Footer",id:"footer"},background:n.a.color.offWhiteLightest,padding:"4rem 2rem",textAlign:"center"},r.createElement(a.Row,{margin:"0 auto 2rem",maxWidth:300,alignItems:"center",justifyContent:"space-between"},r.createElement(i.a,{key:"footer-projects",to:"/",text:"Projects"}),c.a.map(function(e){return r.createElement(i.a,Object.assign({key:"footer-"+e.text},e))})),r.createElement(a.Block,{marginBottom:"2rem"},r.createElement(l.a,null)),r.createElement(a.Block,{fontSize:".8rem",color:n.a.color.grayLighter},"Copyright © 2018 Jared Palmer."))};s.displayName="Footer"},273:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});var r=[{text:"Blog",to:"/blog"},{text:"Talks",to:"/talks"},{text:"Contact",to:"/contact"}],n=[{title:"Taming Forms in React @ React Alicante",date:"September 2018",href:"http://reactalicante.es/"},{title:"Almost GraphQL @ Anheuser-Busch",date:"July 2018",href:"https://www.meetup.com/GraphQL-NYC/events/252390156/"},{title:"Server Rendered JavaScript @ BuzzJS",date:"June 2018",href:"https://buzzjs.com/speakers/palmer/"},{title:"Server Rendering Without the Framework @ StashInvest",date:"November 2017",href:"https://www.youtube.com/watch?v=2Vhy5188Msc"},{title:"An Introduction to Formik @ Spotify",date:"August 2017",href:"https://www.youtube.com/watch?v=-tDy7ds0dag&t=28s"},{title:"CSS-in-JS: From Styled Components to JSXStyle @ Interbrand",date:"July 2017",href:"https://www.meetup.com/ReactNYC/events/240949398/"},{title:"The Road to ReasonML @ ReasonNYC",date:"June 2017",href:"https://www.youtube.com/watch?v=0GMOHeKkfKM&feature=youtu.be&t=2m20s"}]},276:function(e,t,o){"use strict";o.d(t,"a",function(){return m}),o(255);var r=o(271),n=o.n(r),a=o(1),i=o(299),l=o.n(i),c=o(253),s=o(254),m=function(e){var t=e.text,o=e.hostRef,r=n()(e,["text","hostRef"]);return a.createElement(c.Block,Object.assign({component:l.a,props:{ref:o},textDecoration:"none",fontWeight:"500",color:s.a.color.grayLighter,textTransform:"uppercase",fontSize:".9rem"},r),t)};m.displayName="NavLink"},291:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var r=o(1),n=o(253),a=o(254),i=function(e){return r.createElement(r.Fragment,null,r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.twitter},marginRight:"1rem",props:{href:"https://twitter.com/jaredpalmer",target:"_blank",title:"Jared Palmer Twitter"}},r.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",height:"20",width:"20"},r.createElement("path",{d:"M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"}))),r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.github},marginRight:"1rem",props:{href:"https://github.com/jaredpalmer",target:"_blank",title:"Jared Palmer GitHub"}},r.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",height:"20",width:"20"},r.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.instagram},marginRight:"1rem",props:{href:"https://instagram.com/jaredpalmer",target:"_blank",title:"Jared Palmer Instagram"}},r.createElement("svg",{fill:"currentColor",viewBox:"0 0 24 24",height:"20",width:"20"},r.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"}))),r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.facebook},marginRight:"1rem",props:{href:"https://facebook.com/jaredpalmer",target:"_blank",title:"Jared Palmer Facebook"}},r.createElement("svg",{fill:"currentColor",height:"20px",width:"10px",version:"1.1",viewBox:"0 0 9 18"},r.createElement("path",{id:"Shape",d:"M9,0 L9,3.6 L7.2,3.6 C6.579,3.6 6.3,4.329 6.3,4.95 L6.3,7.2 L9,7.2 L9,10.8 L6.3,10.8 L6.3,18 L2.7,18 L2.7,10.8 L0,10.8 L0,7.2 L2.7,7.2 L2.7,3.6 C2.7,1.6117749 4.3117749,3.99680289e-16 6.3,0 L9,0 Z"}))),r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.linkedin},marginRight:"1rem",props:{href:"https://www.linkedin.com/in/jaredlpalmer/",target:"_blank",title:"Jared Palmer LinkedIn"}},r.createElement("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 18 18"},r.createElement("path",{d:"M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"}))),r.createElement(n.InlineBlock,{component:"a",color:"#bbb",transition:"color 200ms ease-out",hover:{color:a.a.color.dribbble},marginRight:"1rem",props:{href:"https://dribbble.com/jaredpalmer",target:"_blank",title:"Jared Palmer Dribbble"}},r.createElement("svg",{height:"18px",width:"19px",version:"1.1",viewBox:"0 0 19 18"},r.createElement("defs",null),r.createElement("g",{id:"Good-One",fill:"none",stroke:"none",strokeWidth:"1"},r.createElement("g",{id:"Footer_06",fill:"currentColor",transform:"translate(-1141.000000, -3946.000000)"},r.createElement("g",{id:"Group-7",transform:"translate(0.000000, 3204.000000)"},r.createElement("g",{id:"Group-6",transform:"translate(75.000000, 733.000000)"},r.createElement("g",{id:"dribbble",transform:"translate(976.000000, 9.000000)"},r.createElement("path",{id:"Shape",d:"M103.121936,14.778 C102.743936,13.05 102.293936,11.457 101.843936,10.053 C102.293936,9.99 102.743936,9.954 103.265936,9.954 L103.283936,9.954 C104.120936,9.954 105.038936,10.062 106.037936,10.287 C105.695936,12.15 104.615936,13.743 103.121936,14.778 Z M99.1439356,16.02 C97.5779356,16.02 96.1379356,15.507 94.9679356,14.634 C95.2199356,14.229 95.7509356,13.446 96.6059356,12.636 C97.4699356,11.799 98.6939356,10.935 100.250936,10.422 C100.781936,11.925 101.267936,13.635 101.636936,15.561 C100.862936,15.858 100.043936,16.02 99.1439356,16.02 Z M92.1239356,9 C92.1239356,8.964 92.1239356,8.937 92.1239356,8.901 C92.3219356,8.91 92.5829356,8.91 92.8889356,8.91 L92.8979356,8.91 C94.3019356,8.901 96.7679356,8.784 99.2699356,8.001 C99.4049356,8.298 99.5399356,8.604 99.6749356,8.928 C98.0009356,9.486 96.6869356,10.377 95.7149356,11.25 C94.7879356,12.114 94.1489356,12.951 93.7799356,13.5 C92.7539356,12.294 92.1239356,10.719 92.1239356,9 Z M96.0389356,2.7 C96.5339356,3.285 97.5059356,4.554 98.5499356,6.525 C96.4439356,7.164 94.2929356,7.308 93.0059356,7.308 C92.9699356,7.308 92.9339356,7.308 92.8979356,7.308 L92.8889356,7.308 C92.6729356,7.308 92.4839356,7.308 92.3309356,7.299 C92.8439356,5.283 94.1939356,3.6 96.0389356,2.7 Z M99.1439356,1.98 C100.799936,1.98 102.320936,2.556 103.517936,3.519 C102.599936,4.626 101.393936,5.4 100.070936,5.985 C99.1439356,4.203 98.2439356,2.925 97.6499356,2.142 C98.1359356,2.043 98.6309356,1.98 99.1439356,1.98 Z M104.660936,4.662 C105.533936,5.778 106.082936,7.164 106.154936,8.667 C105.137936,8.451 104.183936,8.352 103.283936,8.352 L103.274936,8.352 C102.554936,8.352 101.879936,8.415 101.240936,8.523 C101.087936,8.145 100.943936,7.785 100.772936,7.434 C102.194936,6.813 103.553936,5.922 104.660936,4.662 Z M99.1439356,3.99680289e-16 C94.1733728,-1.59872116e-15 90.1439356,4.02943725 90.1439356,9 C90.1439356,11.3869484 91.0921471,13.6761336 92.7799746,15.363961 C94.467802,17.0517884 96.7569872,18 99.1439356,18 C101.530884,18 103.820069,17.0517884 105.507897,15.363961 C107.195724,13.6761336 108.143936,11.3869484 108.143936,9 C108.143936,6.61305159 107.195724,4.32386638 105.507897,2.63603897 C103.820069,0.948211563 101.530884,1.99840144e-16 99.1439356,3.99680289e-16 Z"})))))))))};i.displayName="Social"}}]);
//# sourceMappingURL=0-d21993457960c444cca4.js.map