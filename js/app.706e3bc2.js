(function(t){function e(e){for(var n,a,s=e[0],c=e[1],d=e[2],u=0,l=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(l.length)l.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==i[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},i={app:0},r=[];function s(t){return c.p+"js/"+({dashboard:"dashboard"}[t]||t)+"."+{dashboard:"c3b42859"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o={dashboard:1};a[t]?e.push(a[t]):0!==a[t]&&o[t]&&e.push(a[t]=new Promise((function(e,o){for(var n="css/"+({dashboard:"dashboard"}[t]||t)+"."+{dashboard:"92b4a34e"}[t]+".css",i=c.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var d=r[s],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===n||u===i))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){d=l[s],u=d.getAttribute("data-href");if(u===n||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete a[t],h.parentNode.removeChild(h),o(r)},h.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=r);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var l=new Error;d=function(e){u.onerror=u.onload=null,clearTimeout(h);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}i[t]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/dodo-wallet/",c.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var h=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0719":function(t,e,o){},1248:function(t,e,o){},"3f0b":function(t,e,o){t.exports=o.p+"img/Fyre_Small.e094f135.png"},"49c7":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=(o("7f7f"),function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavBar",{attrs:{title:t.name,show:t.showUserNav,themeData:t.themeData,isForm:t.isForm}}),e("div",{class:[t.isSidebarCollapsed?"container-collapsed-not hideNavbar":"container-collapsed"]},[t.showNavbar?e("sidebar-menu",{staticClass:"sidebar-wrapper",attrs:{collapsed:t.isSidebarCollapsed,theme:"white-theme",width:"220px",menu:t.isSubscribed?t.menu:t.unsubsSubscribedMenu},on:{"toggle-collapse":t.onToggleCollapse,"item-click":t.onItemClick}},[e("div",{staticStyle:{background:"#363740"},attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"ml-1 mt-3 mb-2",staticStyle:{"padding-left":"1px","text-align":"center","margin-right":"2.25rem !important"}},[t.isSidebarCollapsed?t._e():e("a",{attrs:{href:"/admin/dashboard"}},[e("img",{attrs:{src:o("3f0b"),alt:"logo",width:"130vw"}})]),t.isSidebarCollapsed?e("a",{attrs:{href:"/admin/dashboard"}},[e("img",{attrs:{src:o("99dd"),alt:"logo",width:"35vw"}})]):t._e()]),e("hr",{staticClass:"rule"})]),e("span",{staticClass:"text-center",staticStyle:{"font-size":"14px",padding:"7px",border:"1px solid #80808014"},attrs:{slot:"footer"},slot:"footer"},[e("a",{staticStyle:{"text-decoration":"none","background-color":"transparent",color:"#8B8B8B"},attrs:{href:"https://docs.fyre.hypersign.id/",target:"_blank"}},[t._v("Docs")])]),e("span",{staticClass:"text-center",staticStyle:{"font-size":"12px",padding:"7px"},attrs:{slot:"footer"},slot:"footer"},[t._v(t._s(t.$config.app.version))])]):t._e(),e("div",{class:[t.showNavbar?"content-wrapper":"content-wrapper-not"]},[e("router-view")],1),t._m(0)],1),e("notifications",{attrs:{group:"foo"}})],1)}),i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[t._v("Powered By: "),e("a",{attrs:{href:"https://hypersign.id/",target:"_blank"}},[t._v(" HyperSign")])])}],r=(o("8e6e"),o("ac6a"),o("456d"),o("7514"),o("bd86")),s=(o("6762"),o("2fdb"),function(){var t=this,e=t._self._c;return t.show?e("b-navbar",{staticClass:"nav-bar",style:t.themeCss,attrs:{toggleable:"lg"}},[e("b-navbar-brand",{attrs:{href:"https://fyre.hypersign.id/",target:"blank"}},[t.themeData.logoPath?e("img",{attrs:{src:t.themeData.logoPath,height:"50px"}}):e("img",{attrs:{src:o("3f0b"),height:"50px"}})]),e("b-nav-item-dropdown",{staticClass:"m-2 menu ml-auto text-white text-decoration-none",attrs:{size:"sm",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("b-icon",{staticStyle:{color:"var(--theme-text-color)"},attrs:{icon:"menu-button-wide"}})]},proxy:!0}],null,!1,324291470)},[e("b-dropdown-item",{attrs:{to:"/user/home/"},on:{click:t.updateIsForm}},[t._v("\n\t\t\tHome\n\t\t")]),""!=t.authToken&&null!=t.authToken?e("b-dropdown-item",{on:{click:t.logout}},[t._v("\n\t\t\tLogout\n\t\t")]):t._e()],1)],1):t._e()}),c=[],d=(o("96cf"),o("3b8d")),u=o("806d"),l={studioServer:{BASE_URL:Object(u["b"])(Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_STUDIO_SERVER_BASE_URL,!0)},app:{name:"Dodo",decription:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_DESC,version:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_VERSION,buttonBgColor:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_BTN_BACKGROUND||"#f1b319",buttonTextColor:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_BTN_TXT_COLOR||"black",headerBGColor:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_HEADER_BACKGROUND||"rgba(241, 179, 25, 0.24)",headerTextColor:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_HEADER_TEXT_COLOR||"#212529",themeBgColor:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_THEME_BACKGROUND||"rgb(54, 55, 64)"},apiSecret:"c36930b2b43b065f9db407cd2c85a.8abcf5e068aa0217c36210ab3f1165c79776fa79fd7792a6b0f87fe24c201de40440a1d2b8178a2825b98b0e0d3d06664",apiBaseURL:"https://api.entity.hypersign.id",recaptchaSiteKey:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_RECAPTCHA_SITE_KEY,webWalletAddress:Object(u["b"])(Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_WEBWALLET_URL,!1),mobileWalletAddress:Object(u["b"])(Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_MOBILEWALLET_URL,!1),websocketUrl:Object(u["b"])(Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_SERVER_WEBSOCKET_URL,!0),auth0Domain:Object(u["b"])(Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_AUTH0_DOMAIN,!1),auth0ClinetId:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_AUTH0_CLIENT_ID,telegramBotId:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_TELEGRAM_BOT_ID,kommunicateAppId:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_KOMMINICATE_APP_ID,webpush_public_key:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_WEBPUSH_VAPID_PUBLIC_KEY,investor_sign_key:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_INVESTOR_API_SECRET_KEY,appName:"Dodo",eventActionType:{INPUT_TEXT:"INPUT_TEXT",INPUT_NUMBER:"INPUT_NUMBER",TWITTER_FOLLOW:"TWITTER_FOLLOW",TWITTER_RETWEET:"TWITTER_RETWEET",TELEGRAM_JOIN:"TELEGRAM_JOIN",BLOCKCHAIN_ETH:"BLOCKCHAIN_ETH",BLOCKCHAIN_TEZ:"BLOCKCHAIN_TEZ",ETHEREUM_ERC20:"ETHEREUM_ERC20",ETHEREUM_ERC721:"ETHEREUM_ERC721"},verifierBot:{TELEGRAM:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_TELEGRAM_VERIFIER_BOT},moopay:{payment_url:Object({NODE_ENV:"production",VUE_APP_TITLE:"Dodo",BASE_URL:"/dodo-wallet/"}).VUE_APP_MOOPAY_PAYMENT_URL}},h=l,p=new n["default"],m=p,f={name:"NavBar",props:{title:{required:!0,type:String},show:{required:!0,type:Boolean},themeData:{required:!0,type:Object},isForm:{required:!0,type:Boolean}},computed:{themeCss:function(){return{"--theme-bg-color":this.themeData.themeColor&&this.isForm?this.themeData.themeColor:h.app.themeBgColor,"--theme-text-color":this.themeData.buttonTextColor&&this.isForm?this.themeData.buttonTextColor:"white"}}},data:function(){return{authToken:""}},mounted:function(){m.$on("getAuthToken",this.setAuth),localStorage.getItem("authToken")&&(this.authToken=localStorage.getItem("authToken")),m.$on("logout",this.logout)},methods:{setAuth:function(){var t=Object(d["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.authToken=e;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),logout:function(){localStorage.clear(),this.$router.go()},updateIsForm:function(){this.isForm=!1}}},E=f,g=(o("e8b7"),o("2877")),b=Object(g["a"])(E,s,c,!1,null,"47666728",null),_=b.exports;function w(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function v(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?w(Object(o),!0).forEach((function(e){Object(r["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):w(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var T={components:{NavBar:_},data:function(){return{themeData:{themeColor:"",logoPath:""},name:h.appName,hover:!1,authToken:null,isSidebarCollapsed:!0,authRoutes:["register","PKIIdLogin"],showNavbar:!1,menu:[{href:"/admin/dashboard",title:"Dashboard",icon:"fas fa-tachometer-alt"},{href:"/admin/events",title:"Events",icon:"fas fa-calendar-alt"},{href:"/admin/participants",title:"Participants",icon:"fas fa-users",exactPath:!0},{title:"Settings",icon:"fas fa-cog",badge:{text:"new",class:"vsm--badge_default"},child:[{href:"/admin/teams",title:"Teams",icon:"fas fa-user-plus",exactPath:!0},{href:"/admin/setting/org",title:"Org",icon:"fa fa-university",exactPath:!0},{href:"/admin/createapp",title:"Apps",icon:"fa fa-code",exactPath:!0},{href:"/admin/subscription",title:"Subscriptions",icon:"fas fa-receipt",exactPath:!0}]},{href:"/admin/marketplace",title:"Marketplace",icon:"fas fa-store",exactPath:!0},{href:"/admin/login",title:"Logout",icon:"fas fa-sign-out-alt",exactPath:!0}],unsubsSubscribedMenu:[{href:"/admin/dashboard",title:"Dashboard",icon:"fas fa-tachometer-alt",exactPath:!0},{href:"/admin/subscription",title:"Subscriptions",icon:"fas fa-receipt",exactPath:!0},{href:"/admin/login",title:"Logout",icon:"fas fa-sign-out-alt",exactPath:!0}],isSubscribed:!0,showUserNav:!1,showChat:!1,isForm:!1}},mounted:function(){var t=this;localStorage.getItem("authToken")&&(this.authToken=localStorage.getItem("authToken")),m.$on("UpdateAdminNav",(function(e){t.isSubscribed=e})),this.authToken&&!window.location.pathname.includes("/form")&&(this.$store.dispatch("getApps",this.authToken),this.$store.dispatch("getTeammates",this.authToken)),m.$on("UpdateThemeEvent",(function(e){Object.assign(t.themeData,v({},e)),t.isForm=!!window.location.pathname.includes("/form")})),this.$route.meta.admin?this.showNavbar=!!(window.location.pathname.includes("/admin/participants")||window.location.pathname.includes("/admin/events")||window.location.pathname.includes("/admin/dashboard")||window.location.pathname.includes("/admin/subscription")||window.location.pathname.includes("/admin/teams")||window.location.pathname.includes("/admin/setting/org")||window.location.pathname.includes("/admin/createapp")||window.location.pathname.includes("/admin/marketplace")):(this.showUserNav=!!(window.location.pathname.includes("/form")||window.location.pathname.includes("/user")||window.location.pathname.includes("/sa/home")),this.isForm=!!window.location.pathname.includes("/form"))},updated:function(){this.showNavbar=!!(window.location.pathname.includes("/admin/participants")||window.location.pathname.includes("/admin/events")||window.location.pathname.includes("/admin/dashboard")||window.location.pathname.includes("/admin/subscription")||window.location.pathname.includes("/admin/teams")||window.location.pathname.includes("/admin/setting/org")||window.location.pathname.includes("/admin/createapp")||window.location.pathname.includes("/admin/marketplace")),this.showChat=!!(window.location.pathname.includes("/admin/participants")||window.location.pathname.includes("/admin/events")||window.location.pathname.includes("/admin/dashboard")||window.location.pathname.includes("/admin/subscription")||window.location.pathname.includes("/admin/teams")||window.location.pathname.includes("/admin/setting/org")||window.location.pathname.includes("/admin/createapp")||window.location.pathname.includes("/admin/marketplace"))},methods:{filterMenu:function(){if(localStorage.getItem("user")){var t=JSON.parse(localStorage.getItem("user"));if(t.isSubscribed)return;this.menu=this.menu.filter((function(t){return t.title.toLowerCase().includes("subscription")||t.title.toLowerCase().includes("logout")}))}},goToNextPage:function(t){var e=this.menu.find((function(e){return e.name===t}));"Logout"===e.name&&this.logout(),this.$router.push(e.path),null!=this.$route.params.nextUrl?this.$router.push(this.$route.params.nextUrl):this.$router.push(e.path)},onToggleCollapse:function(t){this.isSidebarCollapsed=!!t},onItemClick:function(){window.location.pathname.includes("investors")||window.location.pathname.includes("project")||window.location.pathname.includes("dashboard")||window.location.pathname.includes("/admin/subscription")||window.location.pathname.includes("/admin/teams")||window.location.pathname.includes("/admin/createapp")||window.location.pathname.includes("/admin/marketplace")?this.showNavbar=!0:this.showNavbar=!1}}},P=T,A=(o("a673"),Object(g["a"])(P,a,i,!1,null,"352bb0db",null)),D=A.exports,O=o("8c4f"),S=o("a18f"),U=o.n(S);n["default"].use(O["a"]);var y=new O["a"]({mode:"history",routes:[{path:"/",redirect:"/dodo-wallet"},{path:"/dodo-wallet",name:"DODO",component:function(){return o.e("dashboard").then(o.bind(null,"7ada"))},meta:{requiresAuth:!1,admin:!0,title:"".concat(h.appName," - DODO")}}]});y.beforeEach((function(t,e,o){if(t.matched.length<1)return document.title=t.meta.title,o(!1),y.push("/404");if(t.matched.some((function(t){return t.meta.requiresAuth}))){var a=localStorage.getItem("authToken");if(a){var i=!0;"/admin/subscription"===t.path&&(i=!1);var r="".concat(h.studioServer.BASE_URL,"hs/api/v2/auth/protected?usage=").concat(i);U()(r,{headers:{Authorization:"Bearer ".concat(a)},method:"POST"}).then((function(t){return t.json()})).then((function(e){if(403==e.status)o({path:t.meta.admin?"/admin/login":"/login",params:{nextUrl:t.fullPath}});else if(localStorage.setItem("user",JSON.stringify(e.message)),n["default"].prototype.$accounts=e.accounts,0==e.accounts.length&&(localStorage.removeItem("accessToken"),localStorage.removeItem("accessuser")),t.meta.admin)if(e.message.isSubscribed||"/admin/subscription"==t.path||"/admin/dashboard"==t.path){var a=e.message.usage;a&&a.totalUsed>=a.totalAvailable?(o({path:"/admin/subscription",params:{nextUrl:t.fullPath}}),m.$emit("UpdateAdminNav",!1)):(m.$emit("UpdateAdminNav",!0),o())}else m.$emit("UpdateAdminNav",!1),o({path:"/admin/subscription",params:{nextUrl:t.fullPath}});else o()})).catch((function(e){console.log(e),o({path:t.meta.admin?"/admin/login":"/login",params:{nextUrl:t.fullPath}})}))}else o({path:t.meta.admin?"/admin/login":t.query["referrer"]?"/login/".concat(t.params["slug"],"?referrer=").concat(t.query["referrer"]):"/login/".concat(t.params["slug"]),params:{nextUrl:t.fullPath}})}else o()}));var I=y,N=o("5f5b"),L=o("b1e0"),C=o("ee98"),R=o.n(C),B=(o("f9e3"),o("2dd8"),o("b4b3")),V=o.n(B),j=(o("3a93"),o("5363"),o("eea2"),o("6672"),o("1248"),o("f9d5")),k=o.n(j),x=(o("4413"),o("8e5f")),M=o.n(x),H=(o("e607"),o("6b54"),o("2f62"));function $(t){var e={};for(var o in t)"@context"===o?e["context"]=t[o]:""===t[o]||Array.isArray(t[o])&&0===t[o].length?e[o]=void 0:e[o]=t[o];return e}n["default"].use(H["a"]);var W=new H["a"].Store({state:{entityAccessToken:"",did:"",didDocument:{}},getters:{getEntityHeader:function(t){return{"Content-Type":"application/json",Authorization:"Bearer "+t.entityAccessToken}},getDIDDocJSON:function(t){return $(t.didDocument)},getDIDDocJSONString:function(t){return JSON.stringify($(t.didDocument))}},mutations:{setEntityAccessToken:function(t,e){t.entityAccessToken=e},setDID:function(t,e){t.did=e},setDIDDocument:function(t,e){t.didDocument=e},addVerificationMethod:function(t,e){var o=e.blockchainId,n=t.didDocument.verificationMethod.find((function(t){return t.blockchainAccountId===o}));if(n)throw new Error("Wallet Address already added in the didDoc, choose different one");var a=t.did,i="".concat(a,"#key-").concat(t.didDocument.verificationMethod.length+1);t.didDocument.verificationMethod.push({id:i,type:"EcdsaSecp256k1RecoveryMethod2020",controller:a,blockchainAccountId:o}),t.didDocument.authentication.push(i),t.didDocument.assertionMethod.push(i)},cleanStates:function(t){t.did="",t.didDocument={}}},actions:{authenticateSSIAppAction:function(t){var e=t.commit;return new Promise((function(t,o){console.log("Inside authenticateSSIAppAction");var n=h.apiBaseURL+"/api/v1/app/oauth";fetch(n,{method:"POST",headers:{"Content-Type":"application/json","X-Api-Secret-Key":h.apiSecret}}).then((function(t){return t.json()})).then((function(o){if(400==o.statusCode)throw new Error("Bad Request "+o.message.toString());if(401==o.statusCode)throw new Error("Invalid API Secret Key");var n=o.access_token;e("setEntityAccessToken",n),t()})).catch((function(t){o(t.message)}))}))},createADID:function(t,e){var o=t.commit,n=t.getters;return new Promise((function(t,a){console.log("Inside createADID action");var i=h.apiBaseURL+"/api/v1/did/create",r={namespace:"testnet",options:{keyType:"EcdsaSecp256k1RecoveryMethod2020",walletAddress:e.walletAddress,chainId:e.chainId}};fetch(i,{method:"POST",headers:n.getEntityHeader,body:JSON.stringify(r)}).then((function(t){return t.json()})).then((function(e){if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());if(401==e.statusCode)throw new Error("Unauthenticated");var n=e.did,a=e.metaData,i=a.didDocument;o("setDIDDocument",i),o("setDID",n),t(e)})).catch((function(t){a(t.message)}))}))},registerADID:function(t,e){var o=t.state,n=t.getters;return new Promise((function(t,a){console.log("Inside registerADID action");var i=h.apiBaseURL+"/api/v1/did/register";if(!o.didDocument||!o.did)return a("No did found, create a new did");var r={didDocument:n.getDIDDocJSON,verificationMethodId:e.verificationMethodId,clientSpec:"eth-personalSign",signature:e.signature};fetch(i,{method:"POST",headers:n.getEntityHeader,body:JSON.stringify(r)}).then((function(t){return t.json()})).then((function(e){if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());if(401==e.statusCode)throw new Error("Unauthenticated");t(e)})).catch((function(t){a(t.message)}))}))},updateADID:function(t,e){var o=t.getters;return new Promise((function(t,n){console.log("Inside updateADID action");var a=h.apiBaseURL+"/api/v1/did",i={didDocument:o.getDIDDocJSON,verificationMethodId:e.verificationMethodId,clientSpec:"eth-personalSign",signature:e.signature};fetch(a,{method:"PATCH",headers:o.getEntityHeader,body:JSON.stringify(i)}).then((function(t){return t.json()})).then((function(e){if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());if(401==e.statusCode)throw new Error("Unauthenticated");var o=e.transactionHash;if(!o)throw new Error("Could not update DID");t(e)})).catch((function(t){n(t.message)}))}))},resolveADID:function(t,e){var o=t.getters;return new Promise((function(t,n){console.log("Inside resolveADID action");var a=h.apiBaseURL+"/api/v1/did/resolve/"+e.didId;console.log(a),fetch(a,{method:"GET",headers:o.getEntityHeader}).then((function(t){return console.log("status code : "+t.status),t.json()})).then((function(e){if(400==e.statusCode)throw new Error("Bad Request "+e.message.toString());if(401==e.statusCode)throw new Error("Unauthenticated");if(404==e.statusCode)return t(void 0);var o=e.didDocument;if(0===Object.keys(o).length)return t(void 0);t(o)})).catch((function(t){console.log("Inside reject"),n(t.message)}))}))}}}),K=o("9145"),F=o("4776"),q=o.n(F),J=(o("b15b"),o("58ca")),G={confirmButtonColor:"#41b882",cancelButtonColor:"#ff7674"};n["default"].use(k.a,G),n["default"].config.productionTip=!1,n["default"].use(N["a"]),n["default"].use(L["a"]),n["default"].use(R.a),n["default"].use(K["VeTable"]),n["default"].use(K["VePagination"]),n["default"].use(K["VeIcon"]),n["default"].use(K["VeLoading"]),n["default"].prototype.$veLoading=K["VeLoading"],n["default"].prototype.$veLocale=K["VeLocale"],n["default"].use(V.a),n["default"].prototype.$config=h,n["default"].use(q.a),n["default"].component("multiselect",M.a),n["default"].use(J["a"]),new n["default"]({router:I,store:W,render:function(t){return t(D)}}).$mount("#app")},6672:function(t,e,o){},"806d":function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return a}));o("28a5"),o("aef6"),o("6762"),o("2fdb"),o("4917"),o("9bc1");function n(t,e){if(t&&e){if(t.length<=e)return t;var o=Math.floor(e/3),n=t.substr(0,o),a=t.slice(-o);return n+" ... "+a}}function a(t,e){switch(e){case!0:return t&&t.endsWith("/")?t:t+"/";case!1:return t&&t.endsWith("/")?t.slice(0,-1):t;default:return t}}},"99dd":function(t,e,o){t.exports=o.p+"img/favicon.9ed2bd12.png"},a673:function(t,e,o){"use strict";o("49c7")},e8b7:function(t,e,o){"use strict";o("0719")}});
//# sourceMappingURL=app.706e3bc2.js.map