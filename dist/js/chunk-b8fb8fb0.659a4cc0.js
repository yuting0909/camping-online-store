(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b8fb8fb0"],{"5f32":function(e,t,c){},"7a89":function(e,t,c){"use strict";c("ac18")},"84af":function(e,t,c){"use strict";var o=c("7a23"),r={class:"text-white ps-4 py-2 pe-1 lh-base s1-animate"};function n(e,t,c,n,i,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"banner",style:Object(o["normalizeStyle"])({backgroundImage:"url(".concat(c.imgUrl,")")})},[Object(o["createElementVNode"])("h1",r,Object(o["toDisplayString"])(c.title),1)],4)}var i={props:["title","imgUrl"]};c("7a89");i.render=n;t["a"]=i},a09f:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),r={id:"user-favorite"};function n(e,t,c,n,i,a){var l=Object(o["resolveComponent"])("favorite-section-1"),d=Object(o["resolveComponent"])("favorite-section-2");return Object(o["openBlock"])(),Object(o["createElementBlock"])("main",r,[Object(o["createVNode"])(l),Object(o["createVNode"])(d)])}var i={class:"favorite-section-1"};function a(e,t,c,r,n,a){var l=Object(o["resolveComponent"])("Banner");return Object(o["openBlock"])(),Object(o["createElementBlock"])("section",i,[Object(o["createVNode"])(l,{title:n.title,imgUrl:n.publicPath+n.imgUrl},null,8,["title","imgUrl"])])}var l=c("84af"),d={components:{Banner:l["a"]},data:function(){return{publicPath:"/icamping/",title:"收藏的營區",imgUrl:"images/products/products-01.jpg"}}};d.render=a;var s=d,u=Object(o["createElementVNode"])("div",{class:"loadingio-spinner-spin-xmpavumjb"},[Object(o["createElementVNode"])("div",{class:"ldio-ylwm2fadiqf"},[Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")]),Object(o["createElementVNode"])("div",null,[Object(o["createElementVNode"])("div")])])],-1),m={class:"favorite-section-2"},b={class:"container pt-3 pt-md-5 px-4 px-sm-0"},p={key:0,class:"row mb-3"},v={class:"fs-6 mb-3"},f={key:1,class:"row mb-3"},O=Object(o["createElementVNode"])("h3",{class:"fs-5 fw-bold"},"沒有收藏的營地喔",-1),j=[O];function g(e,t,c,r,n,i){var a=Object(o["resolveComponent"])("Loading"),l=Object(o["resolveComponent"])("product-card");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(a,{active:n.isLoading},{default:Object(o["withCtx"])((function(){return[u]})),_:1},8,["active"]),Object(o["createElementVNode"])("section",m,[Object(o["createElementVNode"])("div",b,[n.favorite.length?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[Object(o["createElementVNode"])("h3",v,"搜尋結果："+Object(o["toDisplayString"])(n.favorite.length)+"個",1),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(n.favorite,(function(e,t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"col-sm-6 col-lg-4 col-xl-3 mb-3",key:t},[Object(o["createVNode"])(l,{product:e,onUpdateFavorite:i.updateFavorite},null,8,["product","onUpdateFavorite"])])})),128))])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",f,j))])])],64)}var h=c("e915"),N={data:function(){return{favorite:[],isLoading:!1,pagination:{current_page:1,offset:9,total_pages:0,page_start:0}}},components:{ProductCard:h["a"]},inject:["emitter"],methods:{getFavorite:function(){this.favorite=JSON.parse(localStorage.getItem("favoriteProducts"))||[]},updateFavorite:function(e){this.getFavorite(),e?this.emitter.emit("send-message",{success:!0,content:"已加入收藏!"}):this.emitter.emit("send-message",{success:!1,content:"已從收藏中移除!"})}},created:function(){this.getFavorite()}};N.render=g;var E=N,V={components:{FavoriteSection1:s,FavoriteSection2:E}};V.render=n;t["default"]=V},a434:function(e,t,c){"use strict";var o=c("23e7"),r=c("23cb"),n=c("a691"),i=c("50c4"),a=c("7b0b"),l=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),m=Math.max,b=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,f,O,j=a(this),g=i(j.length),h=r(e,g),N=arguments.length;if(0===N?c=o=0:1===N?(c=0,o=g-h):(c=N-2,o=b(m(n(t),0),g-h)),g+c-o>p)throw TypeError(v);for(s=l(j,o),u=0;u<o;u++)f=h+u,f in j&&d(s,u,j[f]);if(s.length=o,c<o){for(u=h;u<g-o;u++)f=u+o,O=u+c,f in j?j[O]=j[f]:delete j[O];for(u=g;u>g-o+c;u--)delete j[u-1]}else if(c>o)for(u=g-o;u>h;u--)f=u+o-1,O=u+c-1,f in j?j[O]=j[f]:delete j[O];for(u=0;u<c;u++)j[u+h]=arguments[u+2];return j.length=g-o+c,s}})},ac18:function(e,t,c){},c740:function(e,t,c){"use strict";var o=c("23e7"),r=c("b727").findIndex,n=c("44d2"),i="findIndex",a=!0;i in[]&&Array(1)[i]((function(){a=!1})),o({target:"Array",proto:!0,forced:a},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},d1dd:function(e,t,c){"use strict";c("5f32")},e915:function(e,t,c){"use strict";var o=c("7a23"),r={class:"card border-0 text-decoration-none text-reset h-100 shadow"},n=Object(o["createElementVNode"])("path",{d:"M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"},null,-1),i=[n],a=["src","alt"],l={class:"card-body d-flex flex-nowrap px-2 py-3"},d={class:"card-title fw-bold text-hidden"},s={class:"card-price fs-7 text-warning ms-auto w-50 w-lg-auto text-end"};function u(e,t,c,n,u,m){var b=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",r,[c.favoriteShow?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"btn favorite-icon position-absolute px-2 py-1 mb-2",onClick:t[0]||(t[0]=function(e){return m.updateFavorite(c.product.id)})},[(Object(o["openBlock"])(),Object(o["createElementBlock"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",class:Object(o["normalizeClass"])(["bi bi-suit-heart-fill",{active:u.isFavorite}]),viewBox:"0 0 16 16"},i,2))])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(b,{class:"stretched-link",to:"/products/".concat(c.product.id)},null,8,["to"]),Object(o["createElementVNode"])("img",{src:c.product.imageUrl,class:"card-img-top product-img",alt:c.product.title},null,8,a),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",d,Object(o["toDisplayString"])(c.product.city)+" | "+Object(o["toDisplayString"])(c.product.title),1),Object(o["createElementVNode"])("div",s," NT "+Object(o["toDisplayString"])(e.$filters.currency(c.product.price))+" 起 ",1)])])}c("c740"),c("a434");var m={data:function(){return{isFavorite:!1}},props:{product:Object,favoriteShow:{type:Boolean,default:!0}},methods:{updateFavorite:function(e){this.isFavorite=!this.isFavorite;var t=JSON.parse(localStorage.getItem("favoriteProducts"))||[];if(t.some((function(t){return t.id===e}))){var c=t.findIndex((function(t){return t.id===e}));t.splice(c,1)}else t.push(this.product);localStorage.setItem("favoriteProducts",JSON.stringify(t)),this.$emit("update-favorite",this.isFavorite)}},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("favoriteProducts"))||[];t.length&&(this.isFavorite=t.some((function(t){return t.id===e.product.id})))},updated:function(){var e=this,t=JSON.parse(localStorage.getItem("favoriteProducts"))||[];t.length&&(this.isFavorite=t.some((function(t){return t.id===e.product.id})))}};c("d1dd");m.render=u;t["a"]=m}}]);
//# sourceMappingURL=chunk-b8fb8fb0.659a4cc0.js.map