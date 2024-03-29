"use strict";(self.webpackChunknanny_services=self.webpackChunknanny_services||[]).push([[155],{1546:(n,e,r)=>{r.d(e,{A:()=>u});var i=r(3113);const o=[{value:"all",label:"Show all"},{value:"toUp",label:"A to Z"},{value:"toDown",label:"Z to A"},{value:"lessTen",label:"Less than 10$"},{value:"upTen",label:"Greater than 10$"},{value:"pop",label:"Popular"},{value:"notPop",label:"Not popular"}];var a,l,t=r(7528),s=r(197);const d=s.Ay.div(a||(a=(0,t.A)(["\n  width: 226px;\n"]))),p=s.Ay.p(l||(l=(0,t.A)(["\n  font-weight: 500;\n  line-height: 1.29;\n  color: #8a8a89;\n  margin-bottom: 8px;\n"]))),h={option:(n,e)=>{let{isFocused:r,isSelected:i}=e;return{...n,cursor:"pointer",backgroundColor:"#fff",color:i?"#11101c":"rgba(17, 16, 28, 0.3)",paddingBottom:"12px",border:"none"}},container:n=>({...n,border:"none",borderRadius:"14px",outline:"none"}),valueContainer:n=>({...n,padding:"0",border:"none",margin:"0px"}),menu:n=>({...n,paddingTop:"14px",borderRadius:"14px"}),dropdownIndicator:(n,e)=>({...n,color:"#fbfbfb",transform:e.selectProps.menuIsOpen?"rotate(180deg)":"rotate(0deg)"}),indicatorSeparator:()=>({display:"none"}),control:n=>({...n,padding:"6px 6px 6px 18px",fontWeight:"400",fontSize:"18px",lineHeight:"1.11",backgroundColor:"#103931",borderRadius:" 14px",width:"226px",height:"48px",border:"none",outline:"none",boxShadow:"none",cursor:"pointer","&, &:is(:hover, :focus)":{outline:"none",border:"none"}}),singleValue:n=>({...n,color:"#fbfbfb",fontWeight:"500"}),menuList:n=>({...n,margin:"0px",padding:"0px",borderRadius:"14px",border:"none",paddingLeft:"6px",paddingTop:"8px",width:"calc(100% - 7px)","& > div:last-child":{paddingBottom:"12px"}})};var c=r(3003),x=r(9051),g=r(579);const u=function(){const n=(0,c.wA)();return(0,g.jsx)(d,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(p,{children:"Filters"}),(0,g.jsx)(i.Ay,{options:o,"aria-label":"Filter nanny",styles:h,defaultValue:o[0],onChange:e=>{var r;r=e.value,n((0,x.R6)(r))}})]})})}},8140:(n,e,r)=>{r.d(e,{A:()=>Fn});var i,o,a=r(3712),l=r(7528),t=r(197);const s=t.Ay.ul(i||(i=(0,l.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  margin-top: 32px;\n"]))),d=t.Ay.button(o||(o=(0,l.A)(["\n  margin-top: 72px;\n  border-radius: 30px;\n  padding: 14px 40px;\n  background-color: #103931;\n  border: none;\n  margin-left: auto;\n  margin-right: auto;\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: -0.01em;\n  color: #fbfbfb;\n"])));var p,h,c,x,g,u,f,m,b,A,j,v,y,w,k,C;const z=t.Ay.li(p||(p=(0,l.A)(["\n  padding: 24px;\n  display: flex;\n\n  gap: 24px;\n  border-radius: 24px;\n  background-color: var(--bg-primary);\n"]))),B=t.Ay.div(h||(h=(0,l.A)(["\n  width: 100%;\n"]))),S=t.Ay.div(c||(c=(0,l.A)(["\n  border: 2px solid rgba(240, 63, 59, 0.2);\n  border-radius: 30px;\n  padding: 12px;\n  width: 120px;\n  height: 120px;\n\n  img {\n    border-radius: 15px;\n    overflow: hidden;\n    width: 96px;\n    height: 96px;\n  }\n"]))),T=t.Ay.div(x||(x=(0,l.A)(["\n  display: flex;\n  justify-content: space-between;\n\n  p {\n    font-weight: 500;\n    line-height: 1.5;\n    color: #8a8a89;\n  }\n\n  h3 {\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 1;\n    color: #11101c;\n  }\n"]))),$=t.Ay.div(g||(g=(0,l.A)(["\n  display: flex;\n  gap: 48px;\n  height: 24px;\n\n  p {\n    font-weight: 500;\n    list-style: 1.5;\n    color: #11101c;\n\n    span {\n      color: #38cd3e;\n    }\n  }\n"]))),F=t.Ay.div(u||(u=(0,l.A)(["\n  display: flex;\n  gap: 16px;\n\n  div {\n    display: flex;\n    gap: 4px;\n    align-items: center;\n  }\n"]))),M=t.Ay.div(f||(f=(0,l.A)(["\n  padding-left: 16px;\n  padding-right: 16px;\n  border-left: 1px solid rgba(17, 16, 28, 0.2);\n  border-right: 1px solid rgba(17, 16, 28, 0.2);\n"]))),R=t.Ay.svg(m||(m=(0,l.A)(["\n  height: 26px;\n  width: 26px;\n  stroke: var(--color-text-accent);\n  fill: none;\n  cursor: pointer;\n"]))),_=t.Ay.svg(b||(b=(0,l.A)(["\n  height: 16px;\n  width: 16px;\n  stroke: var(--color-text-accent);\n  fill: none;\n"]))),N=t.Ay.svg(A||(A=(0,l.A)(["\n  height: 16px;\n  width: 16px;\n  fill: #ffc531;\n  stroke: #ffc531;\n"]))),P=t.Ay.ul(j||(j=(0,l.A)(["\n  margin-top: 24px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n\n  > li {\n    font-family: 'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    line-height: 1.5;\n    color: #8a8a89;\n    border-radius: 24px;\n    padding: 8px 16px;\n    background-color: #f3f3f3;\n\n    span {\n      color: #11101c;\n    }\n  }\n"]))),E=t.Ay.ul(v||(v=(0,l.A)(["\n  margin-top: 8px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n\n  > li {\n    font-family: 'Helvetica Neue', sans-serif;\n    font-weight: 500;\n    line-height: 1.5;\n    color: #8a8a89;\n    border-radius: 24px;\n    padding: 8px 16px;\n    background-color: #f3f3f3;\n\n    span {\n      color: #11101c;\n    }\n  }\n"]))),L=t.Ay.p(y||(y=(0,l.A)(["\n  margin-top: 24px;\n  line-height: 1.25;\n  color: rgba(17, 16, 28, 0.5);\n"]))),D=t.Ay.button(w||(w=(0,l.A)(["\n  margin-top: 16px;\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  text-decoration: underline;\n  text-decoration-skip-ink: none;\n  color: #11101c;\n  border: none;\n  background-color: transparent;\n  padding: 0;\n"]))),H=t.Ay.ul(k||(k=(0,l.A)(["\n  margin-top: 48px;\n  margin-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n"]))),V=t.Ay.button(C||(C=(0,l.A)(["\n  border: none;\n  border-radius: 30px;\n  padding: 14px 28px;\n  background-color: #103931;\n  font-family: inherit;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.25;\n  letter-spacing: -0.01em;\n  color: #fbfbfb;\n"])));var W=r(1581);var G,I,U,Y,Z,K=r(5043);const O=t.Ay.li(G||(G=(0,l.A)(["\n  > div {\n    display: flex;\n    gap: 12px;\n  }\n\n  > p {\n    margin-top: 16px;\n    line-height: 1.25;\n  }\n"]))),q=t.Ay.div(I||(I=(0,l.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 100px;\n  width: 44px;\n  height: 44px;\n  background-color: rgba(16, 57, 49, 0.2);\n\n  p {\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 1;\n    color: #103931;\n  }\n"]))),J=t.Ay.div(U||(U=(0,l.A)(["\n  h4 {\n    font-weight: 500;\n    line-height: 1.25;\n    color: #11101c;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.28571;\n    color: #11101c;\n  }\n"]))),Q=t.Ay.div(Y||(Y=(0,l.A)(["\n  margin-top: 5px;\n  display: flex;\n  gap: 1px;\n"]))),X=t.Ay.svg(Z||(Z=(0,l.A)(["\n  height: 16px;\n  width: 16px;\n  fill: #ffc531;\n  stroke: #ffc531;\n"])));var nn=r(579);const en=function(n){let{review:e}=n;return(0,nn.jsxs)(O,{children:[(0,nn.jsxs)("div",{children:[(0,nn.jsx)(q,{children:(0,nn.jsx)("p",{children:e.reviewer[0]})}),(0,nn.jsxs)(J,{children:[(0,nn.jsx)("h4",{children:e.reviewer}),(0,nn.jsxs)(Q,{children:[(0,nn.jsx)(X,{"aria-label":"rating",children:(0,nn.jsx)("use",{href:"".concat(W.A,"#icon-star")})}),(0,nn.jsx)("p",{children:e.rating})]})]})]}),(0,nn.jsx)("p",{children:e.comment})]})};var rn,on,an,ln,tn,sn=r(3768),dn=r(1933),pn=r(3892);const hn=t.Ay.div(rn||(rn=(0,l.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  column-gap: 8px;\n\n  svg {\n    background-color: #fff;\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    width: 20px;\n    height: 20px;\n    fill: #fff;\n    stroke: #000;\n  }\n"]))),cn=t.Ay.input(on||(on=(0,l.A)(["\n  width: 232px;\n  height: 52px;\n  padding: 5px;\n  border: 1px solid rgba(17, 16, 28, 0.1);\n  border-radius: 10px;\n  margin-bottom: 16px;\n  color: #11101c;\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    color: #11101c;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 14px;\n  }\n"]))),xn=t.Ay.input(an||(an=(0,l.A)(["\n  width: 100%;\n  height: 52px;\n  padding: 5px;\n  border: 1px solid rgba(17, 16, 28, 0.1);\n  border-radius: 10px;\n  margin-bottom: 16px;\n  color: #11101c;\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    color: #11101c;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n  }\n"]))),gn=t.Ay.input(ln||(ln=(0,l.A)(["\n  width: 100%;\n  height: 116px;\n  padding: 5px;\n  border: 1px solid rgba(17, 16, 28, 0.1);\n  border-radius: 10px;\n  color: #11101c;\n  font-size: 16px;\n  line-height: 1.25;\n\n  &::placeholder {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 1.25;\n    color: #11101c;\n  }\n"]))),un=t.Ay.button(tn||(tn=(0,l.A)(["\n  border: none;\n  border-radius: 30px;\n  padding: 16px 217px;\n  background-color: #103931;\n  color: #fbfbfb;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25;\n  letter-spacing: -0.01em;\n  margin-top: 40px;\n\n  &:hover {\n    /* background-c: #a1b3a8; */\n    /* color: ; */\n  }\n"])));const fn=function(n){let{handleModalToggle:e}=n;const r=(0,pn.Wx)({initialValues:{address:"",phone:"",childAge:"",time:"",parents:"",email:"",comment:""},validationSchema:dn.Eu,onSubmit:()=>{r.resetForm(),e(),sn.Ay.success("Your order was create successful!  ",{duration:4e3,position:"top-right"})}});return(0,nn.jsxs)("form",{onSubmit:r.onSubmit,children:[(0,nn.jsxs)(hn,{children:[(0,nn.jsx)("label",{children:(0,nn.jsx)(cn,{name:"address",placeholder:"Address",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.address,$error:r.touched.address&&r.errors.address})}),(0,nn.jsx)("label",{children:(0,nn.jsx)(cn,{name:"phone",placeholder:"+380",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.phone,$error:r.touched.phone&&r.errors.phone})}),(0,nn.jsx)("label",{children:(0,nn.jsx)(cn,{name:"childAge",placeholder:"Child's age",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.childAge,$error:r.touched.childAge&&r.errors.childAge})}),(0,nn.jsx)("label",{children:(0,nn.jsx)(cn,{name:"time",placeholder:"00:00",type:"time",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.time,$error:r.touched.time&&r.errors.time})})]}),(0,nn.jsx)("label",{children:(0,nn.jsx)(xn,{name:"parents",placeholder:"Father's or mother's name",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.parents,$error:r.touched.parents&&r.errors.parents})}),(0,nn.jsx)("label",{children:(0,nn.jsx)(xn,{name:"email",placeholder:"jane@acme.com",type:"email",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.email,$error:r.touched.email&&r.errors.email})}),(0,nn.jsx)("label",{children:(0,nn.jsx)(gn,{name:"comment",placeholder:"Comment",onChange:r.handleChange,onBlur:r.handleBlur,value:r.values.comment,$error:r.touched.comment&&r.errors.comment})}),(0,nn.jsx)(un,{type:"submit",children:"Send"})]})};var mn,bn,An,jn;const vn=t.Ay.div(mn||(mn=(0,l.A)(["\n  padding: 64px;\n  max-width: 600px;\n"]))),yn=t.Ay.h2(bn||(bn=(0,l.A)(["\n  font-weight: 500;\n  font-size: 40px;\n  line-height: 1.2;\n  letter-spacing: -0.02em;\n  color: #11101c;\n"]))),wn=t.Ay.p(An||(An=(0,l.A)(["\n  margin-top: 20px;\n  line-height: 1.25;\n  color: rgba(17, 16, 28, 0.5);\n"]))),kn=t.Ay.div(jn||(jn=(0,l.A)(["\n  margin-top: 40px;\n  margin-bottom: 40px;\n  display: flex;\n  gap: 14px;\n\n  img {\n    border-radius: 15px;\n    width: 44px;\n    height: 44px;\n    overflow: hidden;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 1.33333;\n    color: #8a8a89;\n  }\n  h4 {\n    margin-top: 4px;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #11101c;\n  }\n"])));const Cn=function(n){let{handleModalToggle:e,avatar:r,name:i}=n;return(0,nn.jsxs)(vn,{children:[(0,nn.jsxs)(yn,{children:["Make an appointment ",(0,nn.jsx)("br",{}),"with a babysitter"]}),(0,nn.jsx)(wn,{children:"Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner."}),(0,nn.jsxs)(kn,{children:[(0,nn.jsx)("img",{src:r,alt:"nanny"}),(0,nn.jsxs)("div",{children:[(0,nn.jsx)("p",{children:"Your nanny"}),(0,nn.jsx)("h4",{children:i})]})]}),(0,nn.jsx)(fn,{handleModalToggle:e})]})};var zn=r(7173),Bn=r(3003),Sn=r(3775),Tn=r(9051);const $n=function(n){let{item:e}=n;const r=(0,Bn.d4)(Sn.Ep),i=(0,Bn.wA)(),o=(0,Bn.d4)(Sn.Cp).find((n=>n.name===e.name)),[l,t]=(0,K.useState)(!1),[s,d]=(0,K.useState)(!1),p=o?"icon-heart-color":"icon-heart",h=()=>{d((n=>!n))};return(0,nn.jsxs)(z,{children:[(0,nn.jsx)(S,{children:(0,nn.jsx)("img",{src:e.avatar_url,alt:"nanny"})}),(0,nn.jsxs)(B,{children:[(0,nn.jsxs)(T,{children:[(0,nn.jsxs)("div",{children:[(0,nn.jsx)("p",{children:"Nanny"}),(0,nn.jsx)("h3",{children:e.name})]}),(0,nn.jsxs)($,{children:[(0,nn.jsxs)(F,{children:[(0,nn.jsxs)("div",{children:[(0,nn.jsx)(_,{"aria-label":"location",children:(0,nn.jsx)("use",{href:"".concat(W.A,"#icon-map-pin")})}),(0,nn.jsx)("p",{children:e.location})]}),(0,nn.jsxs)(M,{children:[(0,nn.jsx)(N,{"aria-label":"rating",children:(0,nn.jsx)("use",{href:"".concat(W.A,"#icon-star")})}),(0,nn.jsxs)("p",{children:["Rating: ",e.rating]})]}),(0,nn.jsxs)("p",{children:["Price / 1 hour: ",(0,nn.jsxs)("span",{children:[e.price_per_hour,"$"]})]})]}),(0,nn.jsx)(R,{"aria-label":"heart",onClick:()=>{r?o?(i((0,Tn.Fy)(e.name)),sn.Ay.success("Nanny was successful deleted!",{timeout:2e3})):(i((0,Tn.Gm)(e)),sn.Ay.success("Nanny was successful added!",{timeout:2e3})):sn.Ay.error("Please login to this operation!",{timeout:2e3})},children:(0,nn.jsx)("use",{href:"".concat(W.A,"#").concat(p)})})]})]}),(0,nn.jsxs)(P,{children:[(0,nn.jsxs)("li",{children:["Age ",(0,nn.jsxs)("span",{children:[" ",Math.floor((c=e.birthday,((new Date).getTime()-new Date(c))/315576e5))]})]}),(0,nn.jsxs)("li",{children:["Experience:",(0,nn.jsxs)("span",{children:[" ",e.experience]})]}),(0,nn.jsxs)("li",{children:["Kids Age:",(0,nn.jsxs)("span",{children:[" ",e.kids_age]})]})]}),(0,nn.jsxs)(E,{children:[(0,nn.jsxs)("li",{children:["Characters:"," ",(0,nn.jsx)("span",{children:e.characters.map((n=>n.toString().charAt(0).toUpperCase()+n.slice(1))).join(", ")})]}),(0,nn.jsxs)("li",{children:["Education:",(0,nn.jsxs)("span",{children:[" ",e.education]})]})]}),(0,nn.jsx)(L,{children:e.about}),l?(0,nn.jsxs)(nn.Fragment,{children:[" ",(0,nn.jsx)(H,{children:e.reviews.map((n=>(0,nn.jsx)(en,{review:n},(0,a.Ak)())))}),(0,nn.jsx)(V,{onClick:h,children:"Make an appointment"})]}):(0,nn.jsx)(D,{onClick:()=>t(!0),children:"Read More"})]}),s&&(0,nn.jsx)(zn.A,{handleModalToggle:h,children:(0,nn.jsx)(Cn,{handleModalToggle:h,name:e.name,avatar:e.avatar_url})})]});var c};const Fn=function(n){let{listToRender:e}=n;const[r,i]=(0,K.useState)(3);return(0,nn.jsxs)(nn.Fragment,{children:[(0,nn.jsx)(s,{children:null===e||void 0===e?void 0:e.slice(0,r).map((n=>(0,nn.jsx)($n,{item:n},(0,a.Ak)())))}),(null===e||void 0===e?void 0:e.length)>r&&(0,nn.jsx)(d,{type:"button",onClick:()=>{i((n=>n+3))},children:"Load more"})]})}}}]);
//# sourceMappingURL=155.721e494e.chunk.js.map