(self.webpackChunk=self.webpackChunk||[]).push([[642],{2621:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});const n={name:"LoadingButton",props:{text:String,isLoading:Boolean}};const a=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-primary btn-user btn-block",attrs:{type:"submit",disabled:t.isLoading}},[t.isLoading?t._e():s("span",[t._v(t._s(t.text))]),t._v(" "),t.isLoading?s("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()])}),[],!1,null,null,null).exports},9642:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var n=s(7757),a=s.n(n),r=s(5678),i=s(2621);function o(t,e,s,n,a,r,i){try{var o=t[r](i),l=o.value}catch(t){return void s(t)}o.done?e(l):Promise.resolve(l).then(n,a)}const l={name:"Verify",components:{Nav:r.Z,LoadingButton:i.Z},data:function(){return{isLoading:!1,emailResent:!1}},methods:{resendEmail:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,axios.get("email/resend/".concat(e.$route.params.id));case 4:e.isLoading=!1,e.emailResent=!0,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e.isLoading=!1,Vue.toasted.show(t.t0.response.data.msg,{theme:"toasted-primary",position:"top-right",duration:5e3});case 12:case"end":return t.stop()}}),t,null,[[1,8]])})),function(){var e=this,s=arguments;return new Promise((function(n,a){var r=t.apply(e,s);function i(t){o(r,n,a,i,l,"next",t)}function l(t){o(r,n,a,i,l,"throw",t)}i(void 0)}))})()}}};const c=(0,s(1900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Nav"),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[s("div",{staticClass:"card o-hidden border-0 shadow-lg my-5"},[s("div",{staticClass:"p-5"},[t.emailResent?s("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n              A fresh verification link has been sent to your email address.\n            ")]):t._e(),t._v(" "),t.isLoading?s("div",{staticClass:"text-center"},[t._m(0)]):t._e(),t._v(" "),s("p",[t._v("\n              Before proceeding, please check your email for a verification\n              link. If you did not receive the email,\n              "),s("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.resendEmail.apply(null,arguments)}}},[t._v("click here to request another.")])]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"small",attrs:{to:"/register"}},[t._v("Create an Account!")])],1),t._v(" "),s("div",{staticClass:"text-center"},[s("router-link",{staticClass:"small",attrs:{to:"/login"}},[t._v("Already have an account? Login!")])],1)])])])])])],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])}],!1,null,null,null).exports}}]);