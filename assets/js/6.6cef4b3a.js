(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(t,e,i){},249:function(t,e,i){"use strict";i(241)},257:function(t,e,i){"use strict";i.r(e);var n={props:{logo:{type:String,required:!1},sticky:{type:Boolean,required:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},data:()=>({mobileNavActive:!1,navOpacity:1,isVisilbe:!0}),computed:{navLinks(){return this.$site.themeConfig.nav},navStyle(){return{position:"fixed",top:"0",left:"0",width:"100%",opacity:this.navOpacity}}},methods:{toggleMobileNav(){this.mobileNavActive=!this.mobileNavActive},handleScroll(){const t=window.scrollY;this.navOpacity=t<50?1:t<200?(200-t)/150:0}},watch:{navOpacity:{handler(t,e){console.log(t),this.isVisilbe=0!=t}}}},s=(i(249),i(14)),a=Object(s.a)(n,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.isVisilbe,expression:"isVisilbe"}],staticClass:"header",style:t.sticky&&t.navStyle},[t.navLinks?e("nav",{staticClass:"navigation left desktop-nav"},[e("ul",[t._l(t.navLinks,(function(i){return"left"!==i.position||i.external?t._e():e("router-link",{key:i.text,attrs:{tag:"li",to:i.link,"active-class":"active",exact:""},domProps:{textContent:t._s(i.text)}})})),t._v(" "),t._l(t.navLinks,(function(i){return"left"===i.position&&i.external?e("li",[e("a",{attrs:{href:i.link,target:"_blank"}},[t._v(t._s(i.text))])]):t._e()}))],2)]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisilbe,expression:"isVisilbe"}],staticClass:"brand"},[e("router-link",{attrs:{to:"/"}},[t.logo?e("div",{staticClass:"logo",style:{backgroundImage:`url(${t.logo})`},attrs:{title:t.$site.title}}):e("span",[t._v(t._s(t.$site.title))])])],1),t._v(" "),t.navLinks?e("nav",{directives:[{name:"show",rawName:"v-show",value:t.isVisilbe,expression:"isVisilbe"}],staticClass:"navigation right desktop-nav"},[e("ul",[t._l(t.navLinks,(function(i){return"right"!==i.position||i.external?t._e():e("router-link",{key:i.text,attrs:{tag:"li",to:i.link,"active-class":"active",exact:""},domProps:{textContent:t._s(i.text)}})})),t._v(" "),t._l(t.navLinks,(function(i){return"right"===i.position&&i.external?e("li",[e("a",{attrs:{href:i.link,target:"_blank"}},[t._v(t._s(i.text))])]):t._e()}))],2)]):t._e(),t._v(" "),e("div",{staticClass:"mobile-nav-toggle",on:{click:t.toggleMobileNav}}),t._v(" "),e("div",{staticClass:"mobile-nav",class:{"mobile-nav--active":t.mobileNavActive}},[e("nav",[e("ul",{on:{click:t.toggleMobileNav}},[t._l(t.navLinks,(function(i){return i.external?t._e():e("router-link",{key:i.text,attrs:{tag:"li",to:i.link,"active-class":"active",exact:""},domProps:{textContent:t._s(i.text)}})})),t._v(" "),t._l(t.navLinks,(function(i){return i.external?e("li",{on:{click:t.toggleMobileNav}},[e("a",{attrs:{href:i.link,target:"_blank"}},[t._v(t._s(i.text))])]):t._e()}))],2),t._v(" "),e("div",{staticClass:"mobile-nav-close",on:{click:t.toggleMobileNav}})])])])}),[],!1,null,"99c1cb54",null);e.default=a.exports}}]);