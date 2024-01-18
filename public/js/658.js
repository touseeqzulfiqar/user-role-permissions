(self.webpackChunk=self.webpackChunk||[]).push([[658],{3811:(t,s,e)=>{"use strict";function a(t){var s=[],e=[],a=t.response.data.message||"The given data was invalid.";s.push(a),t.response.data.errors&&(e=[].concat.apply([],Object.values(t.response.data.errors)),s=s.concat(e)),s.forEach((function(t){Vue.toasted.show(t,{theme:"toasted-primary",position:"top-right",duration:5e3})}))}e.d(s,{w:()=>a})},2621:(t,s,e)=>{"use strict";e.d(s,{Z:()=>n});const a={name:"LoadingButton",props:{text:String,isLoading:Boolean}};const n=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"btn btn-primary btn-user btn-block",attrs:{type:"submit",disabled:t.isLoading}},[t.isLoading?t._e():e("span",[t._v(t._s(t.text))]),t._v(" "),t.isLoading?e("div",{staticClass:"spinner-border text-light",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e()])}),[],!1,null,null,null).exports},658:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var a=e(7757),n=e.n(a),i=e(3811),r=e(5678),o=e(2621);function l(t,s,e,a,n,i,r){try{var o=t[i](r),l=o.value}catch(t){return void e(t)}o.done?s(l):Promise.resolve(l).then(a,n)}const c={name:"Forgot",components:{Nav:r.Z,LoadingButton:o.Z},data:function(){return{email:this.email,isLoading:!1,emailSent:!1}},methods:{forgot:function(){var t,s=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.isLoading=!0,t.prev=1,t.next=4,axios.post("forgot",{email:s.email});case 4:s.isLoading=!1,s.emailSent=!0,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),i.w(t.t0),s.isLoading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})),function(){var s=this,e=arguments;return new Promise((function(a,n){var i=t.apply(s,e);function r(t){l(i,a,n,r,o,"next",t)}function o(t){l(i,a,n,r,o,"throw",t)}r(void 0)}))})()}}};const d=(0,e(1900).Z)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Nav"),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[e("div",{staticClass:"card o-hidden border-0 shadow-lg my-5"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 d-none d-lg-block bg-password-image"}),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"p-5"},[t.emailSent?e("div",[t._m(1)]):e("div",[t._m(0),t._v(" "),e("form",{staticClass:"user",on:{submit:function(s){return s.preventDefault(),t.forgot.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-user",attrs:{type:"email",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address..."},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("LoadingButton",{attrs:{text:"Reset password",isLoading:t.isLoading}})],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"small",attrs:{to:"/register"}},[t._v("Create an Account!")])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"small",attrs:{to:"/login"}},[t._v("Already have an account? Login!")])],1)])])])])])])])])],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"h4 text-gray-900 mb-2"},[t._v("\n                        Forgot Your Password?\n                      ")]),t._v(" "),e("p",{staticClass:"mb-4"},[t._v("\n                        We get it, stuff happens. Just enter your email\n                        address below and we'll send you a link to reset your\n                        password!\n                      ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"h4"},[e("i",{staticClass:"far fa-check-circle text-success"}),t._v(" Check\n                      your email!\n                    ")])}],!1,null,null,null).exports}}]);