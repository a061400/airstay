"use strict";(self["webpackChunkairstay"]=self["webpackChunkairstay"]||[]).push([[666],{1362:function(e,t,o){o.d(t,{A:function(){return y}});var a=o(6768),n=o(4232);const s={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},l={class:"modal-dialog",role:"document"},i={class:"modal-content border-0"},d={class:"modal-header bg-danger text-white"},p={class:"modal-title"},u={key:0},c={key:1},r={class:"modal-body"},h={key:0,class:"text-danger"},m={key:1,class:"text-danger"},k={class:"modal-footer"},g=(0,a.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function b(e,t,o,b,L,C){return(0,a.uX)(),(0,a.CE)("div",s,[(0,a.Lk)("div",l,[(0,a.Lk)("div",i,[(0,a.Lk)("div",d,[(0,a.Lk)("h5",p,[1===o.infoLength?((0,a.uX)(),(0,a.CE)("span",u,"刪除 "+(0,n.v_)(o.item.title),1)):((0,a.uX)(),(0,a.CE)("span",c,"刪除多筆資料"))])]),(0,a.Lk)("div",r,[(0,a.eW)(" 是否刪除 "),1===o.infoLength?((0,a.uX)(),(0,a.CE)("strong",h,(0,n.v_)(o.item.title),1)):((0,a.uX)(),(0,a.CE)("strong",m,"多筆資料")),(0,a.eW)(" (刪除後將無法恢復)。 ")]),(0,a.Lk)("div",k,[g,(0,a.Lk)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("del-item"))}," 確認刪除 ")])])])],512)}var L=o(2894),C=o.n(L),v={data(){return{modal:{},isMany:!1}},mounted(){this.modal=new(C())(this.$refs.modal)},props:{item:{type:Object,default(){return{}}},infoLength:{}},watch:{},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}},f=o(1241);const x=(0,f.A)(v,[["render",b]]);var y=x},2063:function(e,t,o){o.d(t,{A:function(){return b}});var a=o(6768),n=o(4232),s=o(5130);const l={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},d=(0,a.Lk)("span",{"aria-hidden":"true"},"«",-1),p=[d],u=["onClick"],c=(0,a.Lk)("span",{"aria-hidden":"true"},"»",-1),r=[c];function h(e,t,o,d,c,h){return(0,a.uX)(),(0,a.CE)("nav",l,[(0,a.Lk)("ul",i,[(0,a.Lk)("li",{class:(0,n.C4)(["page-item mx-1",{disabled:!o.pages.has_pre}])},[(0,a.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,s.D$)((e=>h.updatePage(o.pages.current_page-1)),["prevent"]))},p)],2),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(o.pages.total_pages,(e=>((0,a.uX)(),(0,a.CE)("li",{class:(0,n.C4)(["page-item mx-1",{active:e===o.pages.current_page}]),key:e},[(0,a.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#",onClick:(0,s.D$)((t=>h.updatePage(e)),["prevent"])},(0,n.v_)(e),9,u)],2)))),128)),(0,a.Lk)("li",{class:(0,n.C4)(["page-item mx-1",{disabled:!o.pages.has_next}])},[(0,a.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,s.D$)((e=>h.updatePage(o.pages.current_page+1)),["prevent"]))},r)],2)])])}var m={props:["pages"],methods:{updatePage(e){this.$emit("update-page",e)}}},k=o(1241);const g=(0,k.A)(m,[["render",h]]);var b=g},6666:function(e,t,o){o.r(t),o.d(t,{default:function(){return ee}});var a=o(6768),n=o(4232),s=o(5130),l=o(2009);const i=(0,a.Lk)("img",{src:l,alt:"Loading...",style:{width:"100px"}},null,-1),d=(0,a.Lk)("h3",null,"優惠券列表",-1),p={class:"text-end"},u={class:"table mt-4"},c=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",{width:"80"},"優惠券名稱"),(0,a.Lk)("th",{width:"80"},"優惠碼"),(0,a.Lk)("th",{width:"80"},"折扣"),(0,a.Lk)("th",{width:"80"},"到期日"),(0,a.Lk)("th",{width:"80"},"是否啟用"),(0,a.Lk)("th",{width:"80"},"設定")])],-1),r={class:"text-right"},h={class:"text-right"},m={key:0,class:"text-success"},k={key:1,class:"text-muted"},g={class:"btn-group"},b=["onClick"],L=["onClick"];function C(e,t,o,l,C,v){const f=(0,a.g2)("Loading"),x=(0,a.g2)("Pagination"),y=(0,a.g2)("CouponModal"),_=(0,a.g2)("DelModal");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(f,{active:e.isLoading},{default:(0,a.k6)((()=>[i])),_:1},8,["active"]),(0,a.bo)((0,a.Lk)("div",null,[d,(0,a.Lk)("div",p,[(0,a.Lk)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=e=>v.openEditModal(""))}," 新增優惠券 ")]),(0,a.Lk)("table",u,[c,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(C.coupons,(t=>((0,a.uX)(),(0,a.CE)("tr",{key:t.id},[(0,a.Lk)("td",null,(0,n.v_)(t.title),1),(0,a.Lk)("td",null,(0,n.v_)(t.code),1),(0,a.Lk)("td",r,(0,n.v_)(t.percent)+"%",1),(0,a.Lk)("td",h,(0,n.v_)(e.$numFilter.date(t.due_date)),1),(0,a.Lk)("td",null,[t.is_enabled?((0,a.uX)(),(0,a.CE)("span",m,"啟用")):((0,a.uX)(),(0,a.CE)("span",k,"未啟用"))]),(0,a.Lk)("td",null,[(0,a.Lk)("div",g,[(0,a.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>v.openEditModal(t)}," 編輯 ",8,b),(0,a.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>v.openDeleteModal(t)}," 刪除 ",8,L)])])])))),128))])])],512),[[s.aG,C.isLogin]]),(0,a.bF)(x,{pages:C.pagination,onUpdatePage:v.updatePage},null,8,["pages","onUpdatePage"]),(0,a.bF)(y,{ref:"couponModal",onUpdateCoupon:v.updateCoupon,coupon:C.tempCoupons},null,8,["onUpdateCoupon","coupon"]),(0,a.bF)(_,{ref:"delModal",onDelItem:v.delCoupon,item:C.tempCoupons},null,8,["onDelItem","item"])],64)}o(4114);const v={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},x={class:"modal-content border-0"},y=(0,a.Lk)("div",{class:"modal-header bg-dark text-white"},[(0,a.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a.Lk)("span",null,"新增優惠券")])],-1),_={class:"modal-body"},M={class:"row"},w={class:"col-sm-8"},$={class:"mb-3"},E=(0,a.Lk)("label",{for:"title",class:"form-label"},"名稱",-1),X={class:"row gx-2"},D={class:"mb-3 col-md-6"},P=(0,a.Lk)("label",{for:"unit",class:"form-label"},"折扣",-1),A={class:"row gx-2"},U={class:"mb-3 col-md-6"},F=(0,a.Lk)("label",{for:"origin_price",class:"form-label"},"到期日",-1),I={class:"mb-3 col-md-6"},V=(0,a.Lk)("label",{for:"price",class:"form-label"},"優惠碼",-1),J=(0,a.Lk)("hr",null,null,-1),j={class:"mb-3"},K={class:"form-check"},O=(0,a.Lk)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),T={class:"modal-footer"},S=(0,a.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function W(e,t,o,n,l,i){return(0,a.uX)(),(0,a.CE)("div",v,[(0,a.Lk)("div",f,[(0,a.Lk)("div",x,[y,(0,a.Lk)("div",_,[(0,a.Lk)("div",M,[(0,a.Lk)("div",w,[(0,a.Lk)("div",$,[E,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入名稱","onUpdate:modelValue":t[0]||(t[0]=e=>l.tempCoupons.title=e)},null,512),[[s.Jo,l.tempCoupons.title]])]),(0,a.Lk)("div",X,[(0,a.Lk)("div",D,[P,(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control",id:"unit",placeholder:"請輸入折扣","onUpdate:modelValue":t[1]||(t[1]=e=>l.tempCoupons.percent=e)},null,512),[[s.Jo,l.tempCoupons.percent,void 0,{number:!0}]])])]),(0,a.Lk)("div",A,[(0,a.Lk)("div",U,[F,(0,a.bo)((0,a.Lk)("input",{type:"date",class:"form-control",id:"origin_price",placeholder:"請輸入到期日","onUpdate:modelValue":t[2]||(t[2]=e=>l.due_date=e)},null,512),[[s.Jo,l.due_date]])]),(0,a.Lk)("div",I,[V,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"price",placeholder:"請輸入編號","onUpdate:modelValue":t[3]||(t[3]=e=>l.tempCoupons.code=e)},null,512),[[s.Jo,l.tempCoupons.code]])])]),J,(0,a.Lk)("div",j,[(0,a.Lk)("div",K,[(0,a.bo)((0,a.Lk)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=e=>l.tempCoupons.is_enabled=e)},null,512),[[s.lH,l.tempCoupons.is_enabled]]),O])])])])]),(0,a.Lk)("div",T,[S,(0,a.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=t=>e.$emit("update-coupon",l.tempCoupons))}," 確認 ")])])])],512)}var z=o(2894),G=o.n(z),H={data(){return{tempCoupons:{},modal:{},due_date:""}},mounted(){this.modal=new(G())(this.$refs.modal)},props:{coupon:{}},watch:{coupon(){this.tempCoupons=this.coupon;const e=new Date(1e3*this.tempCoupons.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupons.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}},N=o(1241);const q=(0,N.A)(H,[["render",W]]);var B=q,Q=o(1362),R=o(2063),Y={components:{CouponModal:B,DelModal:Q.A,Pagination:R.A},inject:["emitter"],data(){return{isLogin:!1,coupons:[],couponComponent:{},delComponent:{},tempCoupons:{},pagination:{}}},created(){this.isLoading=!0;const e=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((e=>{e.data.success?this.isLogin=!0:this.$router.push("/dashboard/login"),this.isLoading=!1})),this.getCoupon()},mounted(){this.couponComponent=this.$refs.couponModal,this.delComponent=this.$refs.delModal},methods:{getCoupon(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/airstay/admin/coupons?page=${e}`;this.$http.get(t).then((e=>{e.data.success?(this.coupons=e.data.coupons,this.pagination=e.data.pagination,console.log("[後台] 取得優惠券列表成功",e.data)):console.log("[後台] 取得優惠券列表失敗"),this.isLoading=!1}))},openEditModal(e){this.tempCoupons=""===e?{is_enabled:0,due_date:(new Date).getTime()/1e3}:{...e},this.couponComponent.showModal()},openDeleteModal(e){this.tempCoupons={...e},this.delComponent.showModal()},delCoupon(){const e=`https://vue3-course-api.hexschool.io/api/airstay/admin/coupon/${this.tempCoupons.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{e.data.success?(this.delComponent.hideModal(),this.getCoupon(),console.log("[後台] 刪除優惠券成功",e.data)):console.log("[後台] 刪除優惠券失敗"),this.isLoading=!1}))},updateCoupon(e){let t="https://vue3-course-api.hexschool.io/api/airstay/admin/coupon",o="post",a="新增優惠券";this.coupons.forEach((n=>{n.id===e.id&&(t=`https://vue3-course-api.hexschool.io/api/airstay/admin/coupon/${e.id}`,o="put",a="編輯優惠券")})),this.tempCoupons=e,this.$http[o](t,{data:this.tempCoupons}).then((e=>{e.data.success?(console.log(a,"成功",e),this.couponComponent.hideModal(),this.getCoupon()):console.log(a,"失敗"),this.$httpMessage(e,"新增或編輯優惠券")}))},updatePage(e){this.getOrderInfo(e)}}};const Z=(0,N.A)(Y,[["render",C]]);var ee=Z},2009:function(e,t,o){e.exports=o.p+"img/loadingAni.04376c8d.gif"}}]);
//# sourceMappingURL=666.0afcf10b.js.map