"use strict";(self.webpackChunkhuzefa_portfolio=self.webpackChunkhuzefa_portfolio||[]).push([[935],{8935:(e,a,o)=>{o.r(a),o.d(a,{default:()=>b});var t=o(2791),i=o(493),l=o(5021),n=o(6278),s=o(9333),r=o(6259),c=o(3400),d=o(899),m=o(4294),g=o(7924),h=(o(7780),o(5294));var p=o(6120);const x=o.p+"static/media/icons8-gmail.e1bc2ceb745debf9361ad2160a79823a.svg";const u=o.p+"static/media/whatsapp.468d4a9b1ddbfc30eeba7f4bc7d769ae.svg";var f=o(184);const b=function(){const e="8819996132",a="huzefakhan284@gmail.com",o=e=>{navigator.clipboard.writeText(e)},[b,A]=(0,t.useState)(""),[j,y]=(0,t.useState)(!1),[C,v]=(0,t.useState)(!1),[w,k]=(0,t.useState)(!1),[Z,B]=(0,t.useState)({name:"",email:"",mobile:"8819996132",description:""}),W=e=>{let a={...Z};a[e.target.name]=e.target.value,B(a)},S=async()=>{k(!0),console.log("Add contact function called",Z),(async e=>(console.log("Service create contact enquiry is running..."),await(0,h.Z)({method:"POST",url:"https://craftshomes.up.railway.app/api/v1/contact-enquiry",data:e,headers:{"Content-Type":"application/json",Authorization:"Basic ".concat(localStorage.getItem("token"))}})))(Z).then((async e=>{k(!1),console.log("Response for create contact request form ",e),A(e.data.message),y(!0),setTimeout((()=>{y(!1)}),2e3);B({name:"",email:"",mobile:"",description:""})})).catch((e=>{k(!1),console.log("Error response for create contact!! ",e),A(e.response.data.message),y(!0),setTimeout((()=>{y(!1)}),2e3);B({name:"",email:"",mobile:"",description:""})}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"row main-container",id:"contact",style:{paddingBottom:50},children:[(0,f.jsx)("div",{className:"contact-heading-container",children:(0,f.jsx)("p",{className:"contact-text",style:{marginBottom:"100px"},children:"Contact"})}),(0,f.jsxs)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-list",children:[(0,f.jsx)("p",{style:{fontSize:22,fontWeight:700},children:"Drop Me a Message"}),(0,f.jsx)("p",{style:{fontSize:14,color:"gray"},children:"Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions."}),(0,f.jsxs)(i.Z,{style:{marginTop:"10px"},children:[(0,f.jsx)(l.ZP,{disablePadding:!0,sx:{borderRadius:"5px",backgroundColor:"","&.active":{backgroundColor:"white"}},children:(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(s.Z,{onClick:()=>{const a="https://wa.me/".concat(e);window.open(a,"_blank")},children:(0,f.jsx)("img",{src:u,loading:"lazy"})}),(0,f.jsx)(r.Z,{primary:"+91 8819996132",style:{color:"black",fontWeight:"bl",marginLeft:"20px"}}),(0,f.jsx)(c.Z,{onClick:()=>o("".concat(e)),children:(0,f.jsx)(p.Z,{})})]})},"Home"),(0,f.jsx)(l.ZP,{disablePadding:!0,sx:{borderRadius:"5px",backgroundColor:"","&.active":{backgroundColor:"white"}},children:(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(s.Z,{onClick:()=>{const e="mailto:".concat(a);window.open(e,"_blank")},children:(0,f.jsx)("img",{src:x,loading:"lazy"})}),(0,f.jsx)(r.Z,{primary:"huzefakhan284@gmail.com",style:{color:"black",fontWeight:"bl",marginLeft:"20px"}}),(0,f.jsx)(c.Z,{onClick:()=>o("".concat(a)),children:(0,f.jsx)(p.Z,{})})]})},"Home"),(0,f.jsx)(l.ZP,{disablePadding:!0,sx:{borderRadius:"5px",backgroundColor:"","&.active":{backgroundColor:"white"}},children:(0,f.jsxs)(n.Z,{children:[(0,f.jsx)(s.Z,{children:(0,f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Y3U9bZRzHDz09PX2b/8AWkMGQbcGF1J7zPEXdBerYldPhruafgBdLRI0XakRcxuadRuNLzIhjFKlbVqGUruWlLZWWlp4STbgT2tIXXkxwieyCn3lOyzIjPT3tTmsx/JJv0rTPefr5nvxennMo6jD+J2F9g6KjWP1iFNM3FrFqLmqh04uYfhjB6odhpE6HET23gOjrIYv6BbKWqpXwI0onYNW7MUxnBAsN0bwWMQ0RrBYVxmpYEMVACDMQREw6iNS95Nr/FF7oUF2KWVTxmIUGufCiAczAPNbAL4hZCXCa7qqDA0XVxXDdh4JFtVsu/DwiBjQwhzS7AcReBYpSVQtetYTrhmMWFTwpfEAUC3OIBR9ib1fFRMxS96nS8P68fIjtq0bOVwoevEi76+V1FyvZbVYqBe9DWmIAZng2HjJResUNCB2q9+TCE+gZjoFJMwNOswamzHvg0vCzRLwWZjhtr6LwZPDI7fPuDiOE+nsgEfLCgz82RcVDXpj/pAecliPF4XkdTHPalKLDTkDqs1LwOQMM3O+qh1QsBDs7O/tqTQjC+LkGaXg+Jw+vfV45A5j+rBg8ufNS8I+bcFiOSMJP8Tpw87oBxQxEsSogBU9ynqRNMfg9Bfp6cuBof3gPrwcPp/cpaIDOFIIP5Qs2seCTbWA1OAtOswQ8rwc3p0spZiCC6Z1C8ESk2/y5tSHbAFlrN7GF4UUD+r8UMxBG6u1C8CR9SKssxcD2RhbumbSF4Xk93OcMyhmIYHq5EDwZUqTPl5ZCXnA8JwHPG2DSrFcuhcKIng5LTFgyoEifl2vA3/eWCD5VAN7FGWBSySJeQPRAseMBGVKkRRaDTwpBsKOnJOFdogHDVcUMjLbTXXLONmRISZkQ4V9plAMPEyZjh2IGyFj388yWnIOZAxvFPk9aJSlsotX5WTFtZN55mDDrlT1KkHCb1e/LPVWSAUX6PGmVpNuQgi2W8648vFM0YLhCKR2es5TWzzNJOUdiyQlbFN4Yr9jDfgBrLuSfYSsDzxl3xznjqxWBf2QCsR9XAt7JGUnqfERVOsiDtx+xI0rDO8yGkQ+q9WaCdAgvYocUg+cMtpCJYqoC/7iJWcQOHUj4f5jg2KEDCb8XBGCa19rKyPmfx5oplqqFICY8vNZWs/BHB1eP1d9MrDQMJmBf3VyFp7+IwkD3uaLwAxc6ofHziHhNQ4H96gfjv5P/VMxA462EtfFWEiT1QxyOfyWIJgrBX3+tE5q+XBTXFt8vMawI/PGhVGfT8BrI0u0ENH0Tg2vd5/8N//pL0Px1NLdG7n7WZNcTwZ+yLmmaR1K/nvgxBbI1koQT3y3BtUvnH8HfuPgytHwr5H4raa+15eax5fJrpWU0/c4ztjSUrNE1aPn+N3jz7X643NsvfibflbNXy0/p8l4zto2uH2u9m9k+eTcDZelOGlptCVHkc7n7tN7JPDhpTzaUbOC0PWs9bc9CLejUvWxpBd02lu1sG1+HWtKzjg35BX3GsS6cmdiAmpJjXZBtoN216Wl3bUFNaXLTXVIaHcZhHAZ1IOJvrVpVOyQQaN4AAAAASUVORK5CYII=",loading:"lazy"})}),(0,f.jsx)(r.Z,{primary:"27/2, D-sector Street no. 03 Bagh Umrao Dulha Bhopal - 462010",style:{color:"black",fontWeight:"bl",marginLeft:"20px"}})]})},"Home")]})]}),(0,f.jsxs)("div",{className:"col-lg-6 col-md-12 col-sm-12 col-xs-12 contact-form",children:[j?(0,f.jsx)("div",{style:{padding:10,backgroundColor:"#1a84ff",borderRadius:5,textAlign:"center"},children:(0,f.jsx)("p",{style:{fontSize:16,color:"white",padding:0,margin:0},children:'"Message sent"'})}):(0,f.jsx)(f.Fragment,{}),(0,f.jsx)(d.Z,{size:"small",style:{backgroundColor:"white",color:"white"},margin:"dense",name:"name",onChange:e=>W(e),value:null===Z||void 0===Z?void 0:Z.name,label:"Enter your Name",placeholder:"John Smith",type:"email",fullWidth:!0,variant:"filled"}),(0,f.jsx)(d.Z,{size:"small",style:{backgroundColor:"white",color:"white"},margin:"dense",name:"email",onChange:e=>W(e),value:null===Z||void 0===Z?void 0:Z.email,label:"Enter your email address",placeholder:"username@xxxx.com",type:"email",fullWidth:!0,variant:"filled"}),(0,f.jsx)(d.Z,{size:"small",style:{backgroundColor:"white",color:"white"},margin:"dense",name:"description",onChange:e=>W(e),value:null===Z||void 0===Z?void 0:Z.description,label:"Message",placeholder:"Message",type:"text",rows:3,multiline:!0,fullWidth:!0,variant:"filled"}),(0,f.jsx)(m.Z,{size:"small",sx:{textTransform:"capitalize",backgroundColor:"#1a84ff",color:"white",marginTop:"15px",":hover":{backgroundColor:"#1a84ff"}},onClick:()=>S(),disabled:""==Z.name||C||""==Z.description||""==Z.mobile||""==Z.email,children:"Send Message"})]})]}),(0,f.jsx)(g.Z,{variant:"fullWidth",style:{marginBottom:20},component:"p"}),(0,f.jsx)("div",{style:{textAlign:"center",fontSize:"14px",color:"gray"},children:(0,f.jsx)("p",{children:"2023 - Huzefa Khan, All right reserved"})})]})}}}]);
//# sourceMappingURL=935.cacc2dfe.chunk.js.map