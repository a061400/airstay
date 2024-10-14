"use strict";(self["webpackChunkairstay"]=self["webpackChunkairstay"]||[]).push([[244],{2063:function(e,t,i){i.d(t,{A:function(){return k}});var s=i(6768),o=i(4232),a=i(5130);const n={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},r=(0,s.Lk)("span",{"aria-hidden":"true"},"«",-1),c=[r],d=["onClick"],h=(0,s.Lk)("span",{"aria-hidden":"true"},"»",-1),u=[h];function p(e,t,i,r,h,p){return(0,s.uX)(),(0,s.CE)("nav",n,[(0,s.Lk)("ul",l,[(0,s.Lk)("li",{class:(0,o.C4)(["page-item mx-1",{disabled:!i.pages.has_pre}])},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,a.D$)((e=>p.updatePage(i.pages.current_page-1)),["prevent"]))},c)],2),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pages.total_pages,(e=>((0,s.uX)(),(0,s.CE)("li",{class:(0,o.C4)(["page-item mx-1",{active:e===i.pages.current_page}]),key:e},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#",onClick:(0,a.D$)((t=>p.updatePage(e)),["prevent"])},(0,o.v_)(e),9,d)],2)))),128)),(0,s.Lk)("li",{class:(0,o.C4)(["page-item mx-1",{disabled:!i.pages.has_next}])},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,a.D$)((e=>p.updatePage(i.pages.current_page+1)),["prevent"]))},u)],2)])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("update-page",e)}}},f=i(1241);const L=(0,f.A)(g,[["render",p]]);var k=L},2244:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var s=i(6768),o=i(5130),a=i(2009);const n=(0,s.Lk)("img",{src:a,alt:"Loading...",style:{width:"100px"}},null,-1),l={class:"container-fluid py-5 px-5",style:{display:"flex","justify-content":"center"}},r={style:{display:"flex","justify-content":"center"}},c=(0,s.Fv)('<input class="form-control me-2 rounded-pill text-center" type="date" placeholder="入住日期" style="width:100%;" aria-label="Search"><p class="me-2 mt-3">To</p><input class="form-control me-2 rounded-pill text-center" type="date" placeholder="退房日期" style="width:100%;" aria-label="Search"><button class="btn btn-outline-danger rounded-circle" type="submit" style="font-size:20px;border:1px solid white;"><i class="bi bi-search" style="font-size:25px;"></i></button>',4),d={class:"mx-5 px-5"},h={key:0,class:"text-center"},u=(0,s.Lk)("h1",null,"您搜尋的地點目前沒有提供房型",-1),p=[u],g={class:"row"};function f(e,t,i,a,u,f){const L=(0,s.g2)("Loading"),k=(0,s.g2)("HouseInfo"),m=(0,s.g2)("Pagination");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(L,{active:u.isLoading},{default:(0,s.k6)((()=>[n])),_:1},8,["active"]),(0,s.Lk)("i",{class:"bi bi-arrow-left-circle mx-5 my-5",style:{"font-size":"35px",transition:"transform 0.2s ease-in-out"},onClick:t[0]||(t[0]=(...e)=>f.onclickReturn&&f.onclickReturn(...e)),onKeydown:t[1]||(t[1]=(...e)=>f.handleKeyDown&&f.handleKeyDown(...e))},null,32),(0,s.Lk)("div",l,[(0,s.Lk)("form",{class:"d-flex",onSubmit:t[3]||(t[3]=(0,o.D$)(((...e)=>f.onClickSearch&&f.onClickSearch(...e)),["prevent"]))},[(0,s.Lk)("div",r,[(0,s.bo)((0,s.Lk)("input",{class:"form-control me-2 rounded-pill text-center",type:"search",placeholder:"目的地(城市)",style:{width:"100%"},"aria-label":"Search","onUpdate:modelValue":t[2]||(t[2]=e=>u.destination=e)},null,512),[[o.Jo,u.destination]]),c])],32)]),(0,s.bo)((0,s.Lk)("div",d,[0===u.infoList.length?((0,s.uX)(),(0,s.CE)("div",h,p)):(0,s.Q3)("",!0),(0,s.Lk)("div",g,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(u.infoList,((e,t,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"col-12 col-sm-6 col-md-3 col-lg-2 px-3 my-3",key:"content"+i},[(0,s.bF)(k,{info:e,wishList:u.wishList},null,8,["info","wishList"])])))),128))]),0!==u.infoList.length?((0,s.uX)(),(0,s.Wv)(m,{key:1,pages:u.pagination,onUpdatePage:f.updatePage},null,8,["pages","onUpdatePage"])):(0,s.Q3)("",!0)],512),[[o.aG,!u.isLoading]])],64)}var L=i(4232);const k={class:"card"},m={class:"card bg-dark text-white text-left",style:{position:"relative"}},y=["src"],v=(0,s.Lk)("i",{class:"bi bi-circle-fill",style:{position:"absolute",top:"-3px",right:"2px","font-size":"40px"}},null,-1),x={class:"card-text"},b={class:"card-text"},w=(0,s.Lk)("i",{class:"bi bi-geo-alt-fill",style:{color:"green"}},null,-1),C={class:"card-text"},D=(0,s.Lk)("i",{class:"bi bi-house-fill",style:{color:"Teal"}},null,-1),M={class:"card-text"},E={class:"card-text"},K={class:"card-text"},W=(0,s.Lk)("i",{class:"bi bi-star-fill",style:{color:"DarkKhaki"}},null,-1);function $(e,t,i,o,a,n){return(0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("div",m,[(0,s.Lk)("img",{class:"card-img-top img-cover",style:{height:"155px"},src:i.info.imageUrl,alt:"",onClick:t[0]||(t[0]=e=>n.onClickRoom(i.info.id)),onKeydown:t[1]||(t[1]=(...e)=>n.handleKeyDown&&n.handleKeyDown(...e))},null,40,y),v,a.isWish?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("i",{key:0,class:"bi bi-heart",style:{position:"absolute",top:"10px",right:"10px",color:"black","font-size":"24px",transition:"transform 0.2s ease-in-out"},onClick:t[2]||(t[2]=e=>n.addToWish(i.info.id)),onKeydown:t[3]||(t[3]=(...e)=>n.handleKeyDown&&n.handleKeyDown(...e)),onMouseover:t[4]||(t[4]=(...e)=>n.handleMouseEnter&&n.handleMouseEnter(...e)),onMouseout:t[5]||(t[5]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e)),onFocus:t[6]||(t[6]=(...e)=>n.handleMouseEnter&&n.handleMouseEnter(...e)),onBlur:t[7]||(t[7]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e))},null,32)),a.isWish?((0,s.uX)(),(0,s.CE)("i",{key:1,class:"bi bi-heart-fill",style:{position:"absolute",top:"10px",right:"10px",color:"red","font-size":"24px",transition:"transform 0.2s ease-in-out"},onClick:t[8]||(t[8]=e=>n.deleteWish()),onKeydown:t[9]||(t[9]=(...e)=>n.handleKeyDown&&n.handleKeyDown(...e)),onMouseover:t[10]||(t[10]=(...e)=>n.handleMouseEnter&&n.handleMouseEnter(...e)),onMouseout:t[11]||(t[11]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e)),onFocus:t[12]||(t[12]=(...e)=>n.handleMouseEnter&&n.handleMouseEnter(...e)),onBlur:t[13]||(t[13]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e))},null,32)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",{class:"card-body text-left",onClick:t[14]||(t[14]=e=>n.onClickRoom(i.info.id)),onKeydown:t[15]||(t[15]=(...e)=>n.handleKeyDown&&n.handleKeyDown(...e))},[(0,s.Lk)("h5",x,(0,L.v_)(i.info.title),1),(0,s.Lk)("p",b,[w,(0,s.eW)(" "+(0,L.v_)(i.info.category),1)]),(0,s.Lk)("p",C,[D,(0,s.eW)(" "+(0,L.v_)(i.info.content),1)]),(0,s.Lk)("del",M," $ "+(0,L.v_)(i.info.origin_price)+" TWD ",1),(0,s.Lk)("p",E," $ "+(0,L.v_)(i.info.price)+" TWD ",1),(0,s.Lk)("p",K,[W,(0,s.eW)(" "+(0,L.v_)(i.info.unit)+" · "+(0,L.v_)(i.info.description)+"則評論 ",1)])],32)])}i(4114);var _={inject:["emitter"],props:{info:{},wishList:{}},data(){return{isWish:!1,wishId:""}},methods:{addToWish(e){const t="https://vue3-course-api.hexschool.io/api/airstay/cart",i={product_id:e,qty:1};this.$http.post(t,{data:i}).then((e=>{e.data.success?(this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),console.log("用戶端 首頁 加入收藏成功",e.data.data)):console.log("用戶端 首頁 加入收藏失敗"),this.$httpMessage(e,"加入收藏")}))},deleteWish(){const e=`https://vue3-course-api.hexschool.io/api/airstay/cart/${this.wishId}`;this.$http.delete(e).then((e=>{e.data.success?(this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),console.log("用戶端 首頁 刪除收藏成功",e),this.isWish=!1):console.log("用戶端 首頁 刪除收藏失敗"),this.$httpMessage(e,"刪除收藏")}))},filterWishList(){this.wishList.forEach((e=>{this.info.id===e.product.id&&(this.wishId=e.id,this.isWish=!0)}))},handleKeyDown(e){"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onClickRoom(e){this.$router.push(`/room/${e}`)},handleMouseEnter(e){const t=e;t.target.style.transform="scale(1.2)"},handleMouseLeave(e){const t=e;t.target.style.transform="scale(1)"}},created(){this.filterWishList()},watch:{wishList(){this.filterWishList()}}},P=i(1241);const R=(0,P.A)(_,[["render",$]]);var X=R,I=i(2063),A={inject:["emitter"],data(){return{isLoading:!1,infoList:[],wishList:[],destination:"",pagination:{},originInfoList:[]}},created(){this.getRoomData(),this.getWishList()},mounted(){this.emitter.on("AllRoomView-update",(()=>{this.getWishList()}))},components:{HouseInfo:X,Pagination:I.A},methods:{onClickSearch(){const e=this.destination.trim();this.infoList=this.originInfoList,this.infoList=this.infoList.filter((t=>t.category.includes(e)))},updatePage(e){this.getRoomData(e)},getRoomData(e=1){const t=`https://vue3-course-api.hexschool.io/api/airstay/products?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{e.data.success?(console.log("取得房間資料成功",e),this.infoList=e.data.products,this.originInfoList=e.data.products,this.pagination=e.data.pagination):console.log("取得房間資料失敗"),this.isLoading=!1}))},getWishList(){const e="https://vue3-course-api.hexschool.io/api/airstay/cart";this.isLoading=!0,this.$http.get(e).then((e=>{e.data.success?(console.log("取得心願列表資料成功",e),this.wishList=e.data.data.carts):console.log("取得心願列表資料失敗"),this.isLoading=!1}))},onclickReturn(){this.$router.go(-1)},handleKeyDown(e){"Enter"!==e.key&&" "!==e.key||e.preventDefault()}}};const F=(0,P.A)(A,[["render",f]]);var S=F},2009:function(e,t,i){e.exports=i.p+"img/loadingAni.04376c8d.gif"}}]);
//# sourceMappingURL=244.bdb9fb15.js.map