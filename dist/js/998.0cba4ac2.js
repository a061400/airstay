"use strict";(self["webpackChunkairstay"]=self["webpackChunkairstay"]||[]).push([[998],{2063:function(e,t,i){i.d(t,{A:function(){return L}});var s=i(6768),n=i(4232),o=i(5130);const a={"aria-label":"Page navigation example"},l={class:"pagination justify-content-center"},r=(0,s.Lk)("span",{"aria-hidden":"true"},"«",-1),c=[r],h=["onClick"],d=(0,s.Lk)("span",{"aria-hidden":"true"},"»",-1),u=[d];function p(e,t,i,r,d,p){return(0,s.uX)(),(0,s.CE)("nav",a,[(0,s.Lk)("ul",l,[(0,s.Lk)("li",{class:(0,n.C4)(["page-item mx-1",{disabled:!i.pages.has_pre}])},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,o.D$)((e=>p.updatePage(i.pages.current_page-1)),["prevent"]))},c)],2),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(i.pages.total_pages,(e=>((0,s.uX)(),(0,s.CE)("li",{class:(0,n.C4)(["page-item mx-1",{active:e===i.pages.current_page}]),key:e},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#",onClick:(0,o.D$)((t=>p.updatePage(e)),["prevent"])},(0,n.v_)(e),9,h)],2)))),128)),(0,s.Lk)("li",{class:(0,n.C4)(["page-item mx-1",{disabled:!i.pages.has_next}])},[(0,s.Lk)("a",{class:"page-link rounded-pill text-black-50",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,o.D$)((e=>p.updatePage(i.pages.current_page+1)),["prevent"]))},u)],2)])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("update-page",e)}}},f=i(1241);const m=(0,f.A)(g,[["render",p]]);var L=m},2998:function(e,t,i){i.r(t),i.d(t,{default:function(){return J}});var s=i(6768),n=i(5130),o=i(2009);const a=(0,s.Lk)("img",{src:o,alt:"Loading...",style:{width:"100px"}},null,-1),l={class:"container-fluid py-5 px-5",style:{display:"flex","justify-content":"center"}},r={class:"d-flex flex-column flex-lg-row w-100 justify-content-center"},c=(0,s.Lk)("p",{class:"me-lg-2 mt-lg-3 mt-1 text-center"},"To",-1),h=(0,s.Lk)("button",{class:"btn btn-outline-danger rounded-circle",type:"submit",style:{"font-size":"20px",border:"1px solid white"}},[(0,s.Lk)("i",{class:"bi bi-search",style:{"font-size":"25px"}})],-1),d={class:"mx-5 px-5"},u={key:0,class:"text-center"},p=(0,s.Lk)("h1",null,"您搜尋的地點目前沒有提供房型",-1),g=[p],f={class:"row"};function m(e,t,i,o,p,m){const L=(0,s.g2)("Loading"),k=(0,s.g2)("HouseInfo"),y=(0,s.g2)("Pagination");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(L,{active:p.isLoading},{default:(0,s.k6)((()=>[a])),_:1},8,["active"]),(0,s.Lk)("i",{class:"bi bi-arrow-left-circle mx-5 my-5",style:{"font-size":"35px",transition:"transform 0.2s ease-in-out"},onClick:t[0]||(t[0]=(...e)=>m.onclickReturn&&m.onclickReturn(...e)),onKeydown:t[1]||(t[1]=(...e)=>m.handleKeyDown&&m.handleKeyDown(...e))},null,32),(0,s.Lk)("div",l,[(0,s.Lk)("form",{class:"d-flex flex-column flex-lg-row col-10 col-lg-8",onSubmit:t[5]||(t[5]=(0,n.D$)(((...e)=>m.onClickSearch&&m.onClickSearch(...e)),["prevent"]))},[(0,s.Lk)("div",r,[(0,s.bo)((0,s.Lk)("input",{class:"form-control me-lg-2 mb-2 mb-lg-0 rounded-pill text-center",type:"search",placeholder:"目的地(城市)","aria-label":"Search","onUpdate:modelValue":t[2]||(t[2]=e=>p.destination=e)},null,512),[[n.Jo,p.destination]]),(0,s.bo)((0,s.Lk)("input",{class:"form-control me-lg-2 mb-2 mb-lg-0 rounded-pill text-center",type:"date",placeholder:"入住日期","aria-label":"Search","onUpdate:modelValue":t[3]||(t[3]=e=>p.checkInDate=e)},null,512),[[n.Jo,p.checkInDate]]),c,(0,s.bo)((0,s.Lk)("input",{class:"form-control me-lg-2 mb-2 mb-lg-0 rounded-pill text-center",type:"date",placeholder:"退房日期","aria-label":"Search","onUpdate:modelValue":t[4]||(t[4]=e=>p.checkOutDate=e)},null,512),[[n.Jo,p.checkOutDate]]),h])],32)]),(0,s.bo)((0,s.Lk)("div",d,[0===p.infoList.length?((0,s.uX)(),(0,s.CE)("div",u,g)):(0,s.Q3)("",!0),(0,s.Lk)("div",f,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(p.infoList,((e,t,i)=>((0,s.uX)(),(0,s.CE)("div",{class:"col-12 col-sm-6 col-md-3 col-lg-2 px-3 my-3",key:"content"+i},[(0,s.bF)(k,{info:e,wishList:p.wishList,infoList:p.infoList,style:{width:"110%",height:"100%"}},null,8,["info","wishList","infoList"])])))),128))]),0!==p.infoList.length?((0,s.uX)(),(0,s.Wv)(y,{key:1,pages:p.pagination,onUpdatePage:m.updatePage},null,8,["pages","onUpdatePage"])):(0,s.Q3)("",!0)],512),[[n.aG,!p.isLoading]])],64)}var L=i(4232);const k={class:"card"},y={class:"card bg-dark text-white text-left",style:{position:"relative"}},v=["src"],x=(0,s.Lk)("i",{class:"bi bi-circle-fill",style:{position:"absolute",top:"-3px",right:"2px","font-size":"40px"}},null,-1),b={class:"card-text"},w={class:"card-text"},C=(0,s.Lk)("i",{class:"bi bi-geo-alt-fill",style:{color:"green"}},null,-1),D={class:"card-text"},E=(0,s.Lk)("i",{class:"bi bi-house-fill",style:{color:"Teal"}},null,-1),M={class:"card-text"},W={class:"card-text"},K={class:"card-text"},_=(0,s.Lk)("i",{class:"bi bi-star-fill",style:{color:"DarkKhaki"}},null,-1);function I(e,t,i,n,o,a){return(0,s.uX)(),(0,s.CE)("div",k,[(0,s.Lk)("div",y,[(0,s.Lk)("img",{class:"card-img-top img-cover",style:{height:"155px"},src:i.info.imageUrl,alt:"",onClick:t[0]||(t[0]=e=>a.onClickRoom(i.info.id)),onKeydown:t[1]||(t[1]=(...e)=>a.handleKeyDown&&a.handleKeyDown(...e))},null,40,v),x,o.isWish?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("i",{key:0,class:"bi bi-heart",style:{position:"absolute",top:"10px",right:"10px",color:"black","font-size":"24px",transition:"transform 0.2s ease-in-out"},onClick:t[2]||(t[2]=e=>a.addToWish(i.info.id)),onKeydown:t[3]||(t[3]=(...e)=>a.handleKeyDown&&a.handleKeyDown(...e)),onMouseover:t[4]||(t[4]=(...e)=>a.handleMouseEnter&&a.handleMouseEnter(...e)),onMouseout:t[5]||(t[5]=(...e)=>a.handleMouseLeave&&a.handleMouseLeave(...e)),onFocus:t[6]||(t[6]=(...e)=>a.handleMouseEnter&&a.handleMouseEnter(...e)),onBlur:t[7]||(t[7]=(...e)=>a.handleMouseLeave&&a.handleMouseLeave(...e))},null,32)),o.isWish?((0,s.uX)(),(0,s.CE)("i",{key:1,class:"bi bi-heart-fill",style:{position:"absolute",top:"10px",right:"10px",color:"red","font-size":"24px",transition:"transform 0.2s ease-in-out"},onClick:t[8]||(t[8]=e=>a.deleteWish()),onKeydown:t[9]||(t[9]=(...e)=>a.handleKeyDown&&a.handleKeyDown(...e)),onMouseover:t[10]||(t[10]=(...e)=>a.handleMouseEnter&&a.handleMouseEnter(...e)),onMouseout:t[11]||(t[11]=(...e)=>a.handleMouseLeave&&a.handleMouseLeave(...e)),onFocus:t[12]||(t[12]=(...e)=>a.handleMouseEnter&&a.handleMouseEnter(...e)),onBlur:t[13]||(t[13]=(...e)=>a.handleMouseLeave&&a.handleMouseLeave(...e))},null,32)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",{class:"card-body text-left",onClick:t[14]||(t[14]=e=>a.onClickRoom(i.info.id)),onKeydown:t[15]||(t[15]=(...e)=>a.handleKeyDown&&a.handleKeyDown(...e))},[(0,s.Lk)("h5",b,(0,L.v_)(i.info.title),1),(0,s.Lk)("p",w,[C,(0,s.eW)(" "+(0,L.v_)(i.info.category),1)]),(0,s.Lk)("p",D,[E,(0,s.eW)(" "+(0,L.v_)(i.info.content),1)]),(0,s.Lk)("del",M," $ "+(0,L.v_)(i.info.origin_price)+" "+(0,L.v_)(this.curCurrency),1),(0,s.Lk)("p",W," $ "+(0,L.v_)(i.info.price)+" "+(0,L.v_)(this.curCurrency),1),(0,s.Lk)("p",K,[_,(0,s.eW)(" "+(0,L.v_)(i.info.unit)+" · "+(0,L.v_)(i.info.description)+"則評論 ",1)])],32)])}i(4114);var S={inject:["emitter","curCurrency"],props:{info:{},wishList:{},infoList:{}},data(){return{isWish:!1,wishId:""}},methods:{addToWish(e){let t=localStorage.getItem("wishList");t=JSON.parse(t),t||(t=[]),t.push(e),t=JSON.stringify(t),localStorage.setItem("wishList",t),this.emitter.emit("push-message",{title:"加入收藏成功"}),this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),this.isWish=!0},deleteWish(){const e=localStorage.getItem("wishList");let t=JSON.parse(e);const i=t.indexOf(this.info.id);-1!==i&&t.splice(i,1),t=JSON.stringify(t),localStorage.setItem("wishList",t),this.emitter.emit("push-message",{title:"刪除收藏成功"}),this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),this.isWish=!1},filterWishList(){this.isWish=!1;const e=localStorage.getItem("wishList"),t=JSON.parse(e);t.forEach((e=>{this.info.id===e&&(this.isWish=!0)}))},handleKeyDown(e){"Enter"!==e.key&&" "!==e.key||e.preventDefault()},onClickRoom(e){this.$router.push(`/room/${e}`)},handleMouseEnter(e){const t=e;t.target.style.transform="scale(1.2)"},handleMouseLeave(e){const t=e;t.target.style.transform="scale(1)"}},created(){this.filterWishList()},watch:{wishList(){this.filterWishList()},infoList(){this.filterWishList()}}},$=i(1241);const P=(0,$.A)(S,[["render",I]]);var R=P,X=i(2063),O={inject:["emitter"],data(){return{isLoading:!1,infoList:[],wishList:[],destination:"",checkInDate:"",checkOutDate:"",pagination:{},originInfoList:[]}},created(){this.getRoomData(),this.getWishList()},mounted(){this.emitter.on("AllRoomView-update",(()=>{this.getWishList()}))},components:{HouseInfo:R,Pagination:X.A},methods:{onClickSearch(){if(this.destination&&this.checkInDate&&this.checkOutDate){this.emitter.emit("push-message",{title:"搜尋成功"});const e=this.destination.trim();this.infoList=this.originInfoList,this.infoList=this.infoList.filter((t=>t.category.includes(e)))}else this.emitter.emit("push-message",{title:"請填寫所有欄位"})},updatePage(e){this.getRoomData(e)},getRoomData(e=1){const t=`https://vue3-course-api.hexschool.io/api/airstay/products?page=${e}`;this.isLoading=!0,this.$http.get(t).then((e=>{e.data.success?(console.log("取得房間資料成功",e),this.infoList=e.data.products,this.originInfoList=e.data.products,this.pagination=e.data.pagination):console.log("取得房間資料失敗"),this.isLoading=!1}))},getWishList(){const e="https://vue3-course-api.hexschool.io/api/airstay/cart";this.isLoading=!0,this.$http.get(e).then((e=>{e.data.success?(console.log("取得心願列表資料成功",e),this.wishList=e.data.data.carts):console.log("取得心願列表資料失敗"),this.isLoading=!1}))},onclickReturn(){this.$router.go(-1)},handleKeyDown(e){"Enter"!==e.key&&" "!==e.key||e.preventDefault()}}};const A=(0,$.A)(O,[["render",m]]);var J=A},2009:function(e,t,i){e.exports=i.p+"img/loadingAni.04376c8d.gif"}}]);
//# sourceMappingURL=998.0cba4ac2.js.map