"use strict";(self["webpackChunkairstay"]=self["webpackChunkairstay"]||[]).push([[975],{7356:function(t,a,e){e.r(a),e.d(a,{default:function(){return Gt}});var s=e(6768),l=e(5130),o=e(4232),i=e(2009);const n=t=>((0,s.Qi)("data-v-0eeeb5f2"),t=t(),(0,s.jt)(),t),r=n((()=>(0,s.Lk)("img",{src:i,alt:"Loading...",style:{width:"100px"}},null,-1))),c={style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%","z-index":"1000","background-color":"black"}},d={class:"text-end"},u={class:"container"},h={class:"row justify-content-center"},p={class:"col-8",style:{"margin-top":"30px"}},m={class:"fw-bold"},b=n((()=>(0,s.Lk)("i",{class:"bi bi-geo-alt-fill me-1",style:{color:"green"}},null,-1))),g={class:"category-hover"},f=n((()=>(0,s.Lk)("i",{class:"bi bi-house-fill me-1",style:{color:"Teal"}},null,-1))),k={class:"fw-bold"},v=n((()=>(0,s.Lk)("i",{class:"bi bi-star-fill",style:{color:"Orange"}},null,-1))),L={class:"col-4",style:{"margin-top":"80px"}},x={key:0,class:"h5"},y={key:1,class:"h6"},w={key:2,class:"h5"},I=n((()=>(0,s.Lk)("hr",null,null,-1))),C=n((()=>(0,s.Lk)("label",{for:"checkin"},"入住日期",-1))),M=n((()=>(0,s.Lk)("label",{for:"checkout"},"退房日期",-1))),D=n((()=>(0,s.Lk)("option",{value:"",selected:"",disabled:""},"房間數量",-1))),F=["value"],W=n((()=>(0,s.Lk)("option",{value:"",selected:"",disabled:""},"旅客人數",-1))),E=["value"],_={style:{margin:"10px"}},V=["disabled"],U={key:0,class:"spinner-border spinner-border-sm text-warning",role:"status"},S=n((()=>(0,s.Lk)("span",{class:"visually-hidden"},"Loading...",-1))),X=[S],H={style:{margin:"10px"}},N=["disabled"],G={key:0,class:"spinner-border spinner-border-sm text-warning",role:"status"},A=n((()=>(0,s.Lk)("span",{class:"visually-hidden"},"Loading...",-1))),$=[A],q={key:1,type:"button",class:"btn btn-outline-success",disabled:!0},B=n((()=>(0,s.Lk)("hr",null,null,-1))),j=n((()=>(0,s.Lk)("h5",null,"設施與服務",-1))),T={style:{display:"grid","grid-template-columns":"repeat(4, 1fr)","grid-gap":"10px",margin:"0 auto"}},Q=n((()=>(0,s.Lk)("i",{class:"bi bi-check-lg"},null,-1))),K=n((()=>(0,s.Lk)("hr",null,null,-1))),z=n((()=>(0,s.Lk)("h5",null,"住宿地點",-1))),O=n((()=>(0,s.Lk)("hr",null,null,-1))),Y=n((()=>(0,s.Lk)("h5",null,"評論",-1)));function R(t,a,e,i,n,S){const A=(0,s.g2)("Loading"),R=(0,s.g2)("LocationsMap"),P=(0,s.g2)("Carousel"),J=(0,s.g2)("Field"),Z=(0,s.g2)("ErrorMessage"),tt=(0,s.g2)("Form"),at=(0,s.g2)("Comment");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(A,{active:n.isLoading},{default:(0,s.k6)((()=>[r])),_:1},8,["active"]),(0,s.bo)((0,s.Lk)("div",c,[(0,s.Lk)("div",d,[(0,s.Lk)("i",{class:"bi bi-x-circle me-3",onClick:a[0]||(a[0]=(...t)=>S.onCloseMap&&S.onCloseMap(...t)),style:{color:"white","font-size":"30px"}})]),(0,s.bF)(R,{latData:22.66,lngData:120.3,height:"880px"})],512),[[l.aG,n.isShowMap]]),(0,s.Lk)("div",u,[(0,s.Lk)("div",h,[(0,s.Lk)("article",p,[(0,s.Lk)("h2",m,(0,o.v_)(n.roomInfo.title),1),(0,s.bF)(P,{imageUrl:n.roomInfo.imageUrl},null,8,["imageUrl"]),(0,s.Lk)("div",{onClick:a[1]||(a[1]=(...t)=>S.onclickMap&&S.onclickMap(...t))},[b,(0,s.Lk)("span",g,(0,o.v_)(n.roomInfo.category),1)]),(0,s.Lk)("div",null,[f,(0,s.eW)((0,o.v_)(n.roomInfo.content),1)]),(0,s.Lk)("div",k,[v,(0,s.eW)(" "+(0,o.v_)(n.roomInfo.unit)+" · "+(0,o.v_)(n.roomInfo.description)+"則評價 ",1)])]),(0,s.Lk)("div",L,[n.roomInfo.price?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("div",x,(0,o.v_)(n.roomInfo.origin_price)+" 元 ",1)),n.roomInfo.price?((0,s.uX)(),(0,s.CE)("del",y,"原價 $"+(0,o.v_)(n.roomInfo.origin_price)+" TWD ",1)):(0,s.Q3)("",!0),n.roomInfo.price?((0,s.uX)(),(0,s.CE)("div",w,[(0,s.Lk)("strong",null," 特價 $"+(0,o.v_)(n.roomInfo.price)+" TWD ",1)])):(0,s.Q3)("",!0),I,(0,s.bF)(tt,{class:"col-md-6",onSubmit:a[6]||(a[6]=t=>S.bookNow(n.roomInfo.id))},{default:(0,s.k6)((({errors:e})=>[C,(0,s.bF)(J,{name:"入住日期",modelValue:t.checkInDate,"onUpdate:modelValue":a[2]||(a[2]=a=>t.checkInDate=a),as:"input",type:"date",id:"checkin",class:(0,o.C4)(["form-control",{"is-invalid":e["入住日期"]}]),rules:"required","aria-label":"選擇入住日期"},null,8,["modelValue","class"]),(0,s.bF)(Z,{name:"入住日期",class:"invalid-feedback"}),M,(0,s.bF)(J,{name:"退房日期",modelValue:t.checkOutDate,"onUpdate:modelValue":a[3]||(a[3]=a=>t.checkOutDate=a),as:"input",type:"date",id:"checkout",class:(0,o.C4)(["form-control",{"is-invalid":e["退房日期"]}]),rules:"required","aria-label":"選擇退房日期"},null,8,["modelValue","class"]),(0,s.bF)(Z,{name:"退房日期",class:"invalid-feedback"}),(0,s.bF)(J,{name:"房間數量",as:"select",modelValue:n.roomNum,"onUpdate:modelValue":a[4]||(a[4]=t=>n.roomNum=t),class:(0,o.C4)(["form-select",{"is-invalid":e["房間數量"]}]),rules:"required","aria-label":"Default select example",style:{"margin-top":"10px"}},{default:(0,s.k6)((()=>[D,((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(10,(t=>(0,s.Lk)("option",{key:t,value:t},(0,o.v_)(t)+" 間 ",9,F))),64))])),_:2},1032,["modelValue","class"]),(0,s.bF)(Z,{name:"房間數量",class:"invalid-feedback"}),(0,s.bF)(J,{name:"旅客人數",as:"select",modelValue:n.travelerNum,"onUpdate:modelValue":a[5]||(a[5]=t=>n.travelerNum=t),class:(0,o.C4)(["form-select",{"is-invalid":e["旅客人數"]}]),rules:"required","aria-label":"Default select example",style:{"margin-top":"10px"}},{default:(0,s.k6)((()=>[W,((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(5,(t=>(0,s.Lk)("option",{key:t,value:t},(0,o.v_)(t)+" 位 ",9,E))),64))])),_:2},1032,["modelValue","class"]),(0,s.bF)(Z,{name:"旅客人數",class:"invalid-feedback"}),(0,s.Lk)("div",_,[(0,s.Lk)("button",{class:"btn btn-primary",disabled:this.status.loadingItem===n.roomInfo.id},[this.status.loadingItem===n.roomInfo.id?((0,s.uX)(),(0,s.CE)("div",U,X)):(0,s.Q3)("",!0),(0,s.eW)(" 立即預定 ")],8,V)])])),_:1}),(0,s.Lk)("div",H,[n.isWish?(0,s.Q3)("",!0):((0,s.uX)(),(0,s.CE)("button",{key:0,type:"button",class:"btn btn-outline-warning",onClick:a[7]||(a[7]=t=>S.addToCart(n.roomInfo.id)),disabled:this.status.loadingItem===n.roomInfo.id},[this.status.loadingItem===n.roomInfo.id?((0,s.uX)(),(0,s.CE)("div",G,$)):(0,s.Q3)("",!0),(0,s.eW)(" 加入收藏住宿 ")],8,N)),n.isWish?((0,s.uX)(),(0,s.CE)("button",q," 已收藏住宿 ")):(0,s.Q3)("",!0)])])]),B,j,(0,s.Lk)("div",T,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(n.serviceList,((t,a)=>((0,s.uX)(),(0,s.CE)("p",{key:a},[Q,(0,s.eW)(" "+(0,o.v_)(t),1)])))),128))]),K,z,(0,s.bF)(R,{latData:22.66,lngData:120.3}),O,Y,((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(10,(t=>(0,s.Lk)("div",{key:t},[(0,s.bF)(at)]))),64))])],64)}e(4114);function P(t,a,e,i,n,r){const c=(0,s.g2)("GMapMarker"),d=(0,s.g2)("GMapMap");return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bo)((0,s.bF)(d,{center:{lat:e.latData,lng:e.lngData},zoom:14,style:(0,o.Tr)({width:e.width,height:e.height}),options:{zoomControl:!0,mapTypeControl:!0,scaleControl:!0,streetViewControl:!0,rotateControl:!0,fullscreenControl:!0}},{default:(0,s.k6)((()=>[(0,s.bF)(c,{position:{lat:e.latData,lng:e.lngData}},null,8,["position"])])),_:1},8,["center","style"]),[[l.aG,e.isShowMap]])])}var J={props:{latData:{type:Number,default(){return 22.66}},lngData:{type:Number,default(){return 120.3}},isShowMap:{type:Boolean,default(){return!0}},width:{type:String,default(){return"100%"}},height:{type:String,default(){return"500px"}}}},Z=e(1241);const tt=(0,Z.A)(J,[["render",P]]);var at=tt;const et=(0,s.Lk)("hr",null,null,-1),st={class:"container"},lt={class:"row"},ot={class:"col mb-5"},it={class:"d-flex align-items-center"},nt=(0,s.Lk)("i",{class:"bi bi-star-fill me-2 mb-2",style:{color:"Orange","font-size":"20px"}},null,-1),rt={class:"",style:{color:"Orange"}},ct=["src"],dt=(0,s.Lk)("p",null,"豪華雙人房",-1),ut={class:"col-8 d-flex flex-column justify-content-center rounded",style:{height:"200px","background-color":"WhiteSmoke"}},ht=(0,s.Lk)("p",null," 連續住了一星期，很滿意。 雖然是老飯店，但是設備有更新，維護的也挺好， 房間浴室空間大，服務好，早餐中西式都有，平面停車場很方便。 前面就是公園， 週末有活動，附近有美術館和科博館、植物園，帶小孩活動不無聊。 ",-1),pt={class:"mt-auto"};function mt(t,a,l,i,n,r){return(0,s.uX)(),(0,s.CE)(s.FK,null,[et,(0,s.Lk)("div",st,[(0,s.Lk)("div",lt,[(0,s.Lk)("div",ot,[(0,s.Lk)("div",it,[nt,(0,s.Lk)("h3",rt,(0,o.v_)(n.score),1)]),(0,s.Lk)("p",null,[(0,s.Lk)("img",{alt:"countrylogo",src:e(715)(`./${n.countrylogo}.png`),class:"mb-1",style:{width:"18px"}},null,8,ct),(0,s.eW)(" Shawn (來自台灣)")]),dt,(0,s.Lk)("p",null,"入住2晚 (2024年"+(0,o.v_)(this.month)+"月)",1)]),(0,s.Lk)("div",ut,[ht,(0,s.Lk)("p",pt,"評鑑日期：2024年"+(0,o.v_)(this.month)+"月"+(0,o.v_)(this.day)+"日",1)])])])],64)}var bt={data(){return{score:10,countrylogo:"TW",month:1,day:1}},created(){this.score=(5*Math.random()+5).toFixed(1),this.month=Math.floor(11*Math.random()+1),this.day=Math.floor(30*Math.random()+1)}};const gt=(0,Z.A)(bt,[["render",mt]]);var ft=gt;const kt={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},vt=(0,s.Fv)('<div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button></div>',1),Lt={class:"carousel-inner"},xt={class:"carousel-item active"},yt=["src"],wt={class:"carousel-item"},It=["src"],Ct={class:"carousel-item"},Mt=["src"],Dt={class:"carousel-item"},Ft=["src"],Wt={class:"carousel-item"},Et=["src"],_t=(0,s.Fv)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function Vt(t,a,e,l,o,i){return(0,s.uX)(),(0,s.CE)("div",kt,[vt,(0,s.Lk)("div",Lt,[(0,s.Lk)("div",xt,[(0,s.Lk)("img",{src:e.imageUrl,class:"d-block",alt:"imageUrl",style:{width:"850px",height:"500px"}},null,8,yt)]),(0,s.Lk)("div",wt,[(0,s.Lk)("img",{src:e.imagesUrl[0],class:"d-block",alt:"imageUrl",style:{width:"850px",height:"500px"}},null,8,It)]),(0,s.Lk)("div",Ct,[(0,s.Lk)("img",{src:e.imagesUrl[1],class:"d-block",alt:"imageUrl",style:{width:"850px",height:"500px"}},null,8,Mt)]),(0,s.Lk)("div",Dt,[(0,s.Lk)("img",{src:e.imagesUrl[2],class:"d-block",alt:"imageUrl",style:{width:"850px",height:"500px"}},null,8,Ft)]),(0,s.Lk)("div",Wt,[(0,s.Lk)("img",{src:e.imagesUrl[3],class:"d-block",alt:"imageUrl",style:{width:"850px",height:"500px"}},null,8,Et)])]),_t])}var Ut={data(){return{}},props:{imageUrl:{},imagesUrl:{typeof:Array,default(){return["https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1924&q=80","https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80","https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1511914265872-c40672604a80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"]}}}};const St=(0,Z.A)(Ut,[["render",Vt]]);var Xt=St,Ht={inject:["emitter"],components:{LocationsMap:at,Comment:ft,Carousel:Xt},data(){return{isLoading:!1,roomInfo:{},id:"",status:{loadingItem:""},isWish:!1,wishList:[],roomNum:"",travelerNum:"",isShowMap:!1,serviceList:["24小時櫃台服務","機場接送","接駁服務","房內免費Wi-Fi","快速入住/退房服務","可寄放行李","健身房","餐廳"]}},created(){this.id=this.$route.params.roomId,this.getRoomData(this.id),this.getWishList()},methods:{getRoomData(t){this.isLoading=!0;const a=`https://vue3-course-api.hexschool.io/api/airstay/product/${t}`;this.$http.get(a).then((t=>{t.data.success?(console.log("用戶端 取得獨立房間資料成功",t),this.roomInfo=t.data.product):console.log("用戶端 取得獨立房間資料失敗"),this.isLoading=!1}))},addToCart(t){const a="https://vue3-course-api.hexschool.io/api/airstay/cart",e={product_id:t,qty:1};this.status.loadingItem=t,this.$http.post(a,{data:e}).then((t=>{t.data.success?(console.log("用戶端 獨立房間頁面 加入收藏成功",t.data.data),this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),this.isWish=!0):console.log("用戶端 獨立房間頁面 加入收藏失敗"),this.$httpMessage(t,"加入收藏"),this.status.loadingItem=""}))},bookNow(t){this.isWish||this.addToCart(t);const a="https://vue3-course-api.hexschool.io/api/airstay/carts";this.isLoading=!0,this.$http.delete(a).then((t=>{if(t.data.success){console.log("獨立頁面 刪除全部購物車成功",t);const a="https://vue3-course-api.hexschool.io/api/airstay/cart",e={product_id:this.roomInfo.id,qty:Number(this.roomNum)};this.status.loadingItem=this.roomInfo.id,this.$http.post(a,{data:e}).then((t=>{t.data.success?(console.log("用戶端 獨立房間頁面 加入收藏成功",t.data.data),this.emitter.emit("home-update-wishListNum"),this.emitter.emit("AllRoomView-update"),this.isWish=!0,this.$router.push(`/checkout/${this.id}`)):console.log("用戶端 獨立房間頁面 加入收藏失敗"),this.status.loadingItem=""}))}else console.log("獨立頁面 刪除全部購物車失敗");this.isLoading=!1}))},getWishList(){const t="https://vue3-course-api.hexschool.io/api/airstay/cart";this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success?(console.log("獨立頁面 取得心願列表資料成功",t),this.wishList=t.data.data.carts,this.filterWishList()):console.log("獨立頁面 取得心願列表資料失敗"),this.isLoading=!1}))},filterWishList(){this.wishList.forEach((t=>{this.id===t.product.id&&(this.isWish=!0)}))},onclickMap(){this.isShowMap=!0},onCloseMap(){this.isShowMap=!1}}};const Nt=(0,Z.A)(Ht,[["render",R],["__scopeId","data-v-0eeeb5f2"]]);var Gt=Nt},2009:function(t,a,e){t.exports=e.p+"img/loadingAni.04376c8d.gif"}}]);
//# sourceMappingURL=975.203a0f5c.js.map