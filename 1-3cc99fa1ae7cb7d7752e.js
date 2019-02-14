(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{175:function(n,t,e){"use strict";e.d(t,"g",function(){return d}),e.d(t,"b",function(){return m}),e.d(t,"f",function(){return f}),e.d(t,"d",function(){return u}),e.d(t,"e",function(){return g}),e.d(t,"a",function(){return h}),e.d(t,"c",function(){return b});var o=e(86),a=e.n(o),r=(e(59),e(60),e(193),e(0)),i=e.n(r),l=e(180),c=e(37),p=e(185),s={xs:360,sm:576,md:768,lg:992,xl:1200},d=Object.keys(s).reduce(function(n,t){return n[t]="@media (min-width: "+s[t]+"px)",n},{}),m=(l.c.div.withConfig({displayName:"Framework__Center",componentId:"sc-1kcsy75-0"})(["text-align:center;"]),l.c.div.withConfig({displayName:"Framework__Container",componentId:"sc-1kcsy75-1"})(["position:relative;max-width:940px;padding:0 ","%;margin:0 auto;","{padding:0 25px;}","{padding:0 40px;}","{padding:0 50px;}"],function(n){return n.mobilePadding},d.sm,d.md,d.lg));m.defaultProps={mobilePadding:5},Object(l.c)(function(n){var t=n.children,e=(n.spacing,a()(n,["children","spacing"]));return i.a.createElement("div",e,t)}).withConfig({displayName:"Framework__Row",componentId:"sc-1kcsy75-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -","px;"],function(n){return n.spacing}).defaultProps={spacing:15},Object(l.c)(function(n){var t=n.children,e=(n.base,n.xs,n.sm,n.md,n.lg,n.xl,n.spacing,a()(n,["children","base","xs","sm","md","lg","xl","spacing"]));return i.a.createElement("div",e,t)}).withConfig({displayName:"Framework__Col",componentId:"sc-1kcsy75-3"})(["flex:1;padding:0 ","px;"," ",";"],function(n){return n.spacing},function(n){return n.base&&Object(l.b)(["flex-basis:","%;"],function(n){return 100*n.base/12})},function(n){return["xs","sm","md","lg","xl"].filter(function(t){return n[t]}).map(function(n){return Object(l.b)(["","{flex-basis:","%;}"],d[n],function(t){return 100*t[n]/12})})}).defaultProps={spacing:15};var f=Object(l.c)(c.Link).attrs(function(n){return{activeStyle:{fontWeight:"600",background:"linear-gradient(90deg, #676c95, #4b4f74)",color:"white"}}}).withConfig({displayName:"Framework__Link",componentId:"sc-1kcsy75-4"})(["color:inherit;text-decoration:none;transition:color 0.15s;"]),u=l.c.a.attrs(function(n){return{target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"Framework__ExternalLink",componentId:"sc-1kcsy75-5"})(["color:inherit;text-decoration:none;transition:color 0.15s;&:hover{color:#2263e5;}"]),g=l.c.div.withConfig({displayName:"Framework__Flex",componentId:"sc-1kcsy75-6"})(["display:flex;flex-wrap:wrap;justify-content:",";> div{margin-right:15px;margin-bottom:15px;flex:",";}"],function(n){return n.justify},function(n){return"even"===n.type&&1});g.defaultProps={justify:"space-between"};var h=l.c.button.withConfig({displayName:"Framework__Button",componentId:"sc-1kcsy75-7"})(["border:none;background:",";color:white;will-change:opacity;box-shadow:0 4px 8px -1px rgba(25,80,137,0.08),0 8px 24px -2px rgba(0,128,255,0.06);font-size:17px;font-weight:600;text-shadow:0 1px 0 rgba(0,0,0,0.1);padding:8px 16px;border-radius:4px;margin-right:8px;margin-bottom:8px;transition:opacity 0.2s;&:hover{opacity:0.8;}"],p.a.gradient),b=l.c.div.withConfig({displayName:"Framework__Demo",componentId:"sc-1kcsy75-8"})(["margin:15px 0 25px;background:#eeeefa;padding:15px 15px 6px;border-radius:8px;"])},179:function(n,t,e){"use strict";var o=e(7),a=e.n(o),r=e(0),i=e.n(r),l=e(175),c=e(188),p=e(180),s=e(37),d=e(61),m=e(202),f=e.n(m),u=e(189),g=p.c.span.withConfig({displayName:"TextGradient",componentId:"mvk6mi-0"})(["background:linear-gradient(45deg,#fff2df,#99ffec,#faa7ff);-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;"]),h=e(203),b=p.c.nav.withConfig({displayName:"Nav__Navbar",componentId:"sc-1ofyja1-0"})(["display:",";position:fixed;top:0;bottom:0;left:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:16px 0;background:#4b4f74;color:#cbd6ff;overflow-y:auto;z-index:1;transform:",";transition:transform ",",visibility 0.2s;transition-timing-function:",";visibility:",";box-shadow:5px 0 30px 0 rgba(0,32,64,0.25);","{display:block;visibility:visible;transform:none;box-shadow:none;}"],function(n){return n.isMounted?"block":"none"},function(n){return n.isOpen?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},function(n){return n.isOpen?"0.45s":"0.3s"},function(n){return n.isOpen?"cubic-bezier(.165, .84, .44, 1)":"cubic-bezier(.77, 0, .175, 1)"},function(n){return n.isOpen?"visible":"hidden"},l.g.lg),x=p.c.ul.withConfig({displayName:"Nav__List",componentId:"sc-1ofyja1-1"})(["list-style:none;padding-left:0;margin:0;"]),y=p.c.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1ofyja1-2"})(["margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:10px 25px;font-size:17px;&:hover{border-bottom-color:transparent;}}"]),w=p.c.button.withConfig({displayName:"Nav__XButton",componentId:"sc-1ofyja1-3"})(["position:absolute;right:10px;background:none;border:none;color:inherit;padding:0;","{display:none;}"],l.g.lg),k=p.c.span.withConfig({displayName:"Nav__Version",componentId:"sc-1ofyja1-4"})(["display:inline-block;font-size:15px;background:rgb(0,0,0,0.25);border-radius:30px;color:#d0ffba;font-weight:bold;padding:2px 8px;margin-left:25px;margin-top:-10px;margin-bottom:10px;"]),v=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).state={isMounted:!1,transitions:!0},t.ref=Object(r.createRef)(),t.handleResize=function(){t.setState({transitions:!1}),clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.setState({transitions:!0})},100)},t.handleClose=function(){t.props.close()},t.handleBlur=function(n){n.currentTarget.contains(n.relatedTarget)||t.props.close()},t.handleOutsideClick=function(n){t.props.isOpen&&!t.ref.current.contains(n.target)&&t.props.close()},t}a()(t,n);var e=t.prototype;return e.componentDidMount=function(){this.setState({isMounted:!0}),window.addEventListener("resize",this.handleResize),window.addEventListener("click",this.handleOutsideClick,!0),this.handleResize()},e.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("click",this.handleOutsideClick,!0),clearTimeout(this.timeout)},e.render=function(){var n=this.props.isOpen,t=this.state,e=t.isMounted,o=t.transitions;return i.a.createElement(u.a,null,i.a.createElement(b,{id:"main-nav",ref:this.ref,style:{transition:o?"":"none"},isOpen:n,isMounted:e,onBlur:this.handleBlur},i.a.createElement(k,null,i.a.createElement(g,null,"v",h.a)),i.a.createElement(w,{"aria-label":"Close Menu",onClick:this.handleClose},i.a.createElement(f.a,{style:{width:36,height:36}})),i.a.createElement(x,null,i.a.createElement(s.StaticQuery,{query:E,render:function(n){return Object(d.a)(n.allMdx.edges).map(function(n){var t=n.node;return i.a.createElement(y,{key:t.frontmatter.path},i.a.createElement(l.f,{to:t.frontmatter.path},t.frontmatter.title))})},data:c}))))},t}(r.Component),E="4190207198",N=e(204),z=e.n(N),C=e(205),_=e.n(C),j=e(185),O=Object(p.c)(s.Link).withConfig({displayName:"NavButtons__NavButton",componentId:"ii0ddk-0"})(["display:block;padding:40px 25px;border:",";border-radius:4px;background:",";text-decoration:none;color:",";font-weight:bold;transition:box-shadow 0.2s;margin:0 10px 15px;font-size:20px;transition:all 0.1s;width:100%;&:hover{border-color:inherit;}&[data-next]{border-bottom:none;filter:saturate(1.15);order:-1;&:hover{filter:saturate(1.15) brightness(1.2);}}","{width:calc(50% - 20px);margin:0 10px;order:initial;&[data-next]{order:initial;}}","{font-size:24px;padding:40px;}"],function(n){return n["data-next"]?"none":"1px solid "+j.a.border},function(n){return n["data-next"]?j.a.gradient:"white"},function(n){return n["data-next"]?"white":"inherit"},l.g.sm,l.g.md);var I=function(n){var t=n.next;return i.a.createElement(l.e,{style:{marginTop:40,marginLeft:-10,marginRight:-10}},i.a.createElement(s.StaticQuery,{query:M,render:function(n){var e=Object(d.a)(n.allMdx.edges).map(function(n){return n.node}),o=e[t],a=t>1?e[t-2]:null;return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement(O,{to:a.frontmatter.path,"aria-label":"Previous"},i.a.createElement(_.a,{style:{verticalAlign:-4}})," ",a.frontmatter.title),o&&i.a.createElement(O,{to:o.frontmatter.path,"data-next":!0,"aria-label":"Next"},o.frontmatter.title," ",i.a.createElement(z.a,{style:{verticalAlign:-4}})))},data:c}))},M="4190207198",T=e(9),L=e.n(T),S=e(206),F=e.n(S),A=e(207),P=e.n(A),B=e(208),R=e.n(B),H=e(209),V=e.n(H),D=p.c.div.withConfig({displayName:"VersionNotice__Banner",componentId:"sc-6cohjm-0"})(["position:relative;top:-25px;background:#4b4f74;color:white;border-radius:0 0 10px 10px;padding:15px;font-size:15px;margin-bottom:15px;margin-left:50px;font-weight:600;a{color:white;border-bottom:1px solid white;&:hover{color:cyan;}}","{margin-left:0;margin-bottom:25px;}"],l.g.lg);var q=function(){return i.a.createElement(D,null,"You're reading the docs for the newest version, v4!",i.a.createElement("br",null),i.a.createElement("a",{href:"https://github.com/atomiks/tippyjs/releases/tag/v4.0.0",rel:"noopener noreferrer",target:"_blank"},"Read the migration guide from v3")," ","or"," ",i.a.createElement("a",{href:"https://github.com/atomiks/tippyjs/tree/8c8a367fa8de94ddd1b1cc7fb259dd5d5f075458/website/src/pages",rel:"noopener noreferrer",target:"_blank"},"view the old docs for v3"))},J=p.c.header.withConfig({displayName:"Header__HeaderRoot",componentId:"sc-9eu2yh-0"})(["position:relative;background:radial-gradient(circle at 0% 20%,#a09eff,#4884f0,#b3e0fa);padding:25px 0;text-align:center;margin-bottom:50px;color:white;"]),Q=p.c.img.withConfig({displayName:"Header__Logo",componentId:"sc-9eu2yh-1"})(["display:block;height:70px;margin:0 auto 10px;"]),U=p.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-9eu2yh-2"})(["display:inline-block;font-size:48px;font-weight:400;margin-top:0;margin-bottom:25px;"]),G=Object(p.c)(l.d).withConfig({displayName:"Header__ButtonLink",componentId:"sc-9eu2yh-3"})(["background:rgba(255,255,255,0.15);padding:12px 24px;border-radius:4px;transition:all 0.25s;color:#ffffff;margin:0 10px 10px;font-weight:300;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);}"]),W=p.c.button.withConfig({displayName:"Header__MenuButton",componentId:"sc-9eu2yh-4"})(["position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;","{display:none;}"],l.g.lg),X={verticalAlign:-6,marginRight:10},Y=L()({},X,{color:"#ffe6b3"}),Z=L()({},X,{color:"#333"}),K={width:36,height:36},$=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).state={displayVersionNotice:!1},t}a()(t,n);var e=t.prototype;return e.componentDidMount=function(){var n=this.props.pageIndex,t=localStorage.getItem("disableVersionNotice");localStorage.setItem("disableVersionNotice","true"),this.setState({displayVersionNotice:n>1&&null===t})},e.render=function(){var n=this.props,t=n.isNavOpen,e=n.openNav,o=this.state.displayVersionNotice;return i.a.createElement(J,null,i.a.createElement(l.b,null,o&&i.a.createElement(q,null),i.a.createElement(Q,{src:F.a,draggable:"false"}),i.a.createElement(U,null,i.a.createElement(g,null,"Tippy.js")),i.a.createElement(l.e,{justify:"center"},i.a.createElement(G,{href:"https://popper.js.org"},i.a.createElement(R.a,{style:Y}),"Powered by Popper.js"),i.a.createElement(G,{href:"https://github.com/atomiks/tippyjs"},i.a.createElement(P.a,{style:Z}),"View on GitHub")),i.a.createElement(W,{"aria-label":"Menu","aria-expanded":t?"true":"false",onClick:e},i.a.createElement(V.a,{style:K}))),i.a.createElement("svg",{style:{margin:"-6% 0 -30px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 240",fill:"white"},i.a.createElement("g",null,i.a.createElement("path",{d:"M1920,144.5l0,95.5l-1920,0l0,-65.5c196,-36 452.146,-15.726 657.5,8.5c229.698,27.098 870,57 1262.5,-38.5Z"}))))},t}(r.Component),nn=p.c.main.withConfig({displayName:"Main",componentId:"sc-7otpyo-0"})(["","{margin-left:250px;}"],l.g.lg),tn=p.c.footer.withConfig({displayName:"Footer",componentId:"sc-1xqajj9-0"})(["text-align:center;padding:25px 0;border-top:1px solid rgba(0,16,64,0.08);margin-top:50px;color:#9dacb6;font-size:85%;background:white;"]),en=e(190),on=e(186),an=e.n(on);function rn(){var n=an()(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #515168;\n    height: 100%;\n    font-size: 17px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #333;\n    color: white;\n  }\n  &::selection {\n    background: #333;\n    color: white;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition: border-bottom-color 0.15s;\n\n    &:hover {\n      border-bottom-color: inherit;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n    color: #333;\n\n    > a {\n      color: inherit;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2.074rem;\n    margin-top: 2.074rem;\n    border-bottom: 1px solid ",";\n    padding-bottom: 10px;\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 2.5rem;\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 2.2rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n\n  ul {\n    padding-left: 25px;\n  }\n\n  table {\n    box-shadow: 0 0 0 1px ",";\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted ",";\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 90%;\n    color: #333;\n    padding: 0;\n  }\n\n  table th, table td {\n    padding: 16px;\n    text-align: left;\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid ",";\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted ",";\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid ",";\n    margin-top: 5px;\n  }\n"]);return rn=function(){return n},n}var ln=Object(p.a)(rn(),j.a.border,j.a.border,j.a.border,j.a.border,j.a.border,j.a.border);function cn(){var n=an()(["\n  .tippy-tooltip.ajax-theme {\n    position: absolute;\n    width: 200px;\n    padding: 0;\n    overflow: hidden;\n\n    img {\n      display: block;\n      max-width: 100%;\n    }\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.ajax-theme {\n    top: auto !important;\n    bottom: 0;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.ajax-theme {\n    bottom: auto !important;\n    top: 0;\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-top-color: tomato;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.tomato-theme .tippy-arrow {\n    border-bottom-color: tomato;\n  }\n\n  .tippy-tooltip.tomato-theme {\n    font-weight: bold;\n    color: yellow;\n    background: tomato;\n\n    &[data-animatefill] {\n      background-color: transparent;\n    }\n\n    .tippy-backdrop {\n      background: tomato;\n    }\n\n    .tippy-roundarrow {\n      fill: tomato;\n    }\n  }\n\n  .tippy-tooltip.scaled-arrow-theme .tippy-arrow {\n    transform: scale(1.5);\n  }\n\n  .tippy-tooltip.dropdown-theme {\n    text-align: left;\n    font-size: 95%;\n  }\n\n  .tippy-tooltip.crazy-inertia-theme {\n    &[data-inertia][data-state=\"visible\"] {\n      transition-timing-function: cubic-bezier(0.54, 100, 0.2, 0.26);\n    }\n  }\n"]);return cn=function(){return n},n}var pn=Object(p.a)(cn());function sn(){var n=an()(["\n  code,\n  pre {\n    font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: #cee6ff;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2.25;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #22223f;\n    font-size: 15px;\n    line-height: 2;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    "," {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    "," {\n      border-radius: 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 24px;\n      font-size: 16px;\n    }\n  }\n\n  pre span::selection {\n    background: #a1acc5;\n    color: inherit;\n  }\n\n  pre code::selection {\n    background: #a1acc5;\n    color: inherit;\n  }\n\n  pre span::-moz-selection {\n    background: #a1acc5;\n    color: inherit;\n  }\n\n  pre code::-moz-selection {\n    background: #a1acc5;\n    color: inherit;\n  }\n\n  code.language-text {\n    background: linear-gradient(90deg,#faf3e0,#fbedff);\n    color: #97429b;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    font-size: 85%;\n    line-height: inherit;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #b6a6ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7692d9;\n  }\n\n  .token.attr-name,\n  .token.selector {\n    color: #ffb07b;\n  }\n\n  .token.boolean {\n    color: #ff959c;\n  }\n\n  .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #6ed3ff;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #ffc5ff;\n  }\n\n  .token.flow {\n    color: #8ae7f8;\n    font-weight: bold;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #ff6c8b;\n  }\n\n  .token.number,\n  .token.symbol,\n  .token.deleted {\n    color: #ff984b;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #5af4c4;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #5eb9ff;\n  }\n\n  .token.method {\n    color: #00cee7;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffd278;\n  }\n\n  .token.property.definition {\n    color: #b6f69a;\n  }\n\n  .token.property.access {\n    color: #8ec1ef;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .gatsby-highlight {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n"]);return sn=function(){return n},n}var dn=Object(p.a)(sn(),l.g.sm,l.g.md);var mn=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ln,null),i.a.createElement(pn,null),i.a.createElement(dn,null))},fn=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).state={isNavOpen:!1},t.openNav=function(){t.setState({isNavOpen:!0})},t.closeNav=function(){t.setState({isNavOpen:!1})},t}return a()(t,n),t.prototype.render=function(){var n=this.state.isNavOpen,t=this.props,e=t.children,o=t.pageContext;return i.a.createElement(i.a.Fragment,null,i.a.createElement(mn,null),i.a.createElement(en.a,{pageContext:o}),i.a.createElement(nn,null,i.a.createElement($,{openNav:this.openNav,isNavOpen:n,pageIndex:o.frontmatter.index}),i.a.createElement(v,{isOpen:n,close:this.closeNav}),i.a.createElement(l.b,null,i.a.createElement("h2",null,o.frontmatter.title),e,i.a.createElement(I,{next:o.frontmatter.index+1})),i.a.createElement(tn,null,"© ",(new Date).getFullYear()," - MIT License")))},t}(r.Component);t.a=fn},185:function(n,t,e){"use strict";t.a={border:"rgba(0, 32, 128, 0.1)",gradient:"linear-gradient(135deg, #00acff, #6f99fc) no-repeat"}},188:function(n){n.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"Accessibility",path:"/accessibility/",index:10}}},{node:{frontmatter:{title:"AJAX",path:"/ajax/",index:9}}},{node:{frontmatter:{title:"Customizing Tooltips",path:"/customizing-tooltips/",index:3}}},{node:{frontmatter:{title:"FAQ",path:"/faq/",index:12}}},{node:{frontmatter:{title:"Creating Tooltips",path:"/creating-tooltips/",index:2}}},{node:{frontmatter:{title:"Getting Started",path:"/getting-started/",index:1}}},{node:{frontmatter:{title:"HTML Content",path:"/html-content/",index:7}}},{node:{frontmatter:{title:"Misc",path:"/misc/",index:11}}},{node:{frontmatter:{title:"Methods",path:"/methods/",index:6}}},{node:{frontmatter:{title:"Demo",path:"/",index:0}}},{node:{frontmatter:{title:"Motivation",path:"/motivation/",index:13}}},{node:{frontmatter:{title:"Themes",path:"/themes/",index:8}}},{node:{frontmatter:{title:"Tippy Instance",path:"/tippy-instance/",index:5}}},{node:{frontmatter:{title:"All Options",path:"/all-options/",index:4}}}]}}}},189:function(n,t,e){"use strict";var o=e(9),a=e.n(o),r=e(7),i=e.n(r),l=e(0),c=e.n(l),p=e(80),s=function(n){function t(){return n.apply(this,arguments)||this}i()(t,n);var e=t.prototype;return e.componentDidMount=function(){this.instance=Object(p.a)(a()({targets:this.scroller},this.props))},e.componentWillUnmount=function(){this.instance.disable(),this.instance=null},e.render=function(){var n=this;return l.Children.map(this.props.children,function(t){return Object(l.cloneElement)(t,{children:c.a.createElement("div",{"data-elastic-wrapper":!0,style:{display:"inline-block"}},t.props.children),ref:function(e){n.scroller=e;var o=t.ref;o&&("function"==typeof o?o(e):o.hasOwnProperty("current")&&(o.current=e))}})})},t}(l.Component);t.a=s},190:function(n,t,e){"use strict";var o=e(210),a=e(0),r=e.n(a),i=e(211),l=e.n(i),c=e(37);function p(n){var t=n.title,e=n.description,a=n.lang,i=n.meta,p=n.keywords,d=n.pageContext;return r.a.createElement(c.StaticQuery,{query:s,render:function(n){var o=e||n.site.siteMetadata.description,c="Demo"===d.frontmatter.title,s=t||(c?"Tippy.js - Vanilla JS Tooltip and Popover Library":d.frontmatter.title);return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:c?null:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(p.length>0?{name:"keywords",content:p.join(", ")}:[]).concat(i)})},data:o})}p.defaultProps={lang:"en",meta:[],keywords:[]},t.a=p;var s="1025518380"},203:function(n){n.exports={a:"4.0.1"}},206:function(n,t,e){n.exports=e.p+"static/logo-ebc385458e03fdb24af078536af88065.svg"},210:function(n){n.exports={data:{site:{siteMetadata:{title:"Tippy.js",description:"A simple, easy-to-use vanilla JavaScript library for creating tooltips and popovers to use in web sites and apps. The flat-level option API makes customizing a tooltip and popover as easy as adding a single object property or data attribute. Make tooltips follow the mouse cursor, have an arrow, change duration and delay, have custom themes and animations, HTML content, touch support, and more...",author:"@atomiks"}}}}}}]);
//# sourceMappingURL=1-3cc99fa1ae7cb7d7752e.js.map