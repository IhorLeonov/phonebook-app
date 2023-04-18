"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[352],{3352:function(n,e,t){t.r(e),t.d(e,{default:function(){return zn}});var r=t(2791),i=t(9434),o=t(3634),a=t(1538),d=t(6916),c=function(n){return n.contacts.items},s=function(n){return n.contacts.isLoading},l=function(n){return n.contacts.error},u=function(n){return n.filter},x=function(n){return n.contacts.showModal},p=function(n){return n.contacts.deleteId},m=function(n){return n.contacts.isAddFormOpen},h=new Intl.Collator("en");function f(n,e){return h.compare(n.name,e.name)}var g,b,Z,v,j,w,y=(0,d.P1)([c,u],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).sort(f)})),P=t(247),k=t(5218),C=t(5705),_=t(6727),L=t(5639),I=t(184),N=_.Ry().shape({name:_.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required").trim(),number:_.Z_().matches(/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,"Phone number is not valid").required("Required")}),z=function(){var n=(0,i.I0)(),e=(0,i.v9)(c);return(0,I.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:N,onSubmit:function(t,r){var i,a=t.name,d=t.number;if(e.some((function(n){return n.name.toLowerCase()===a.toLowerCase()})))return i="".concat(a," is already in contacts."),k.ZP.error(i);!function(e,t){n((0,o.uK)({name:e,number:t}))}(a,d),r.resetForm()},children:(0,I.jsxs)(L.l0,{children:[(0,I.jsxs)(L.lX,{children:["Name:",(0,I.jsx)(L.gN,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,I.jsx)(L.Bc,{name:"name",component:"span"})]}),(0,I.jsxs)(L.lX,{children:["Number:",(0,I.jsx)(L.gN,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,I.jsx)(L.Bc,{name:"number",component:"span"})]}),(0,I.jsx)(L.GX,{type:"submit",children:"Add contact"}),(0,I.jsx)(k.x7,{position:"top-left",toastOptions:{duration:3e3}})]})})},J=t(168),S=t(6444),q=S.ZP.li(g||(g=(0,J.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n  padding-bottom: 10px;\n\n  :first-child {\n    margin-top: 0;\n  }\n  font-size: 20px;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),A=(0,S.ZP)(L.GX)(b||(b=(0,J.Z)(["\n  margin: 0;\n  margin-left: auto;\n  font-size: 11px;\n"]))),E=S.ZP.div(Z||(Z=(0,J.Z)(["\n  margin-left: 15px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 22px;\n  text-shadow: 0 0 1px #000000;\n"]))),M=S.ZP.div(v||(v=(0,J.Z)(["\n  width: 200px;\n  /* border: 1px solid red; */\n  margin-left: 25px;\n"]))),X=S.ZP.div(j||(j=(0,J.Z)(["\n  width: 200px;\n  /* border: 1px solid blue; */\n  /* margin-left: 10px; */\n"]))),$=function(n){var e=n.id,t=n.name,r=n.number,o=n.randomColor,d=(0,i.I0)();return(0,I.jsxs)(q,{children:[(0,I.jsx)(E,{style:{background:"".concat(o)},children:t[0]}),(0,I.jsx)(M,{children:t}),(0,I.jsx)(X,{children:r}),(0,I.jsx)(A,{type:"button",onClick:function(){return d((0,a.$J)(e))},children:"Delete"})]})},F=S.ZP.ul(w||(w=(0,J.Z)(["\n  margin-top: 15px;\n"])));var G,T,B,O,R,K,D,V,H,Q,U,W,Y,nn,en,tn,rn,on,an=function(){var n=(0,i.v9)(y);return(0,I.jsx)(F,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number,i="#".concat(Math.floor(16777215*Math.random()).toString(16));return(0,I.jsx)($,{id:e,name:t,number:r,randomColor:i},e)}))})},dn=S.ZP.label(G||(G=(0,J.Z)(["\n  /* display: block;\n  margin-top: 10px;*/\n  margin-left: auto;\n"]))),cn=S.ZP.input(T||(T=(0,J.Z)(["\n  /* display: block;\n  margin-top: 10px;\n  width: 100%; */\n  margin-left: 10px;\n"]))),sn=t(4808),ln=function(){var n=(0,i.v9)(u),e=(0,i.I0)();return(0,I.jsxs)(dn,{children:["Search:",(0,I.jsx)(cn,{type:"text",value:n,onChange:function(n){return e((0,sn.M)(n.currentTarget.value))}})]})},un=S.ZP.div(B||(B=(0,J.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 30px;\n  border: ",";\n  border-top: 0px;\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),xn=(S.ZP.h1(O||(O=(0,J.Z)(["\n  text-align: center;\n"]))),S.ZP.h2(R||(R=(0,J.Z)(["\n  /* margin-top: 15px;\n  text-align: center; */\n  display: inline;\n"])))),pn=S.ZP.div(K||(K=(0,J.Z)(["\n  padding-bottom: 15px;\n  display: flex;\n  align-items: center;\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),mn=(0,S.ZP)(L.GX)(D||(D=(0,J.Z)(["\n  margin: 0;\n  margin-left: 10px;\n  padding: 0.2em 0.6em;\n\n  background: rgb(128, 244, 126);\n  color: rgb(68, 68, 68);\n  font-size: 18px;\n"]))),hn=S.ZP.div(V||(V=(0,J.Z)(["\n  display: flex;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  align-items: center;\n  /* margin-left: 10px; */\n  /* border: 1px solid black; */\n  border-bottom: ",";\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),fn=S.ZP.div(H||(H=(0,J.Z)(["\n  width: 70px;\n"]))),gn=S.ZP.div(Q||(Q=(0,J.Z)(["\n  width: 200px;\n  /* border: 1px solid red; */\n  margin-left: 10px;\n"]))),bn=S.ZP.div(U||(U=(0,J.Z)(["\n  width: 200px;\n  /* border: 1px solid blue; */\n  /* margin-left: 10px; */\n"]))),Zn=S.ZP.p(W||(W=(0,J.Z)(["\n  text-align: center;\n  margin-top: 15px;\n"]))),vn=function(n){var e=n.message;return(0,I.jsx)(Zn,{children:e})},jn=S.ZP.div(Y||(Y=(0,J.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  z-index: 1200;\n"]))),wn=S.ZP.div(nn||(nn=(0,J.Z)([""]))),yn=t(4164),Pn=document.querySelector("#modal-root"),kn=function(n){var e=n.children,t=(0,i.I0)();return(0,r.useEffect)((function(){var n=function(n){"Escape"===n.code&&t((0,a.$J)())};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[]),(0,yn.createPortal)((0,I.jsx)(jn,{children:(0,I.jsx)(wn,{children:e})}),Pn)},Cn=S.ZP.div(en||(en=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 250px;\n  height: 100px;\n\n  border-radius: 5px;\n  border: ",";\n  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),\n    1px 4px 6px rgba(0, 0, 0, 0.16);\n  background-color: rgba(219, 219, 219);\n"])),(function(n){return"1px solid ".concat(n.theme.colors.bd)})),_n=S.ZP.div(tn||(tn=(0,J.Z)(["\n  font-weight: bold;\n  margin-right: 10px;\n"]))),Ln=S.ZP.button(rn||(rn=(0,J.Z)(["\n  margin-right: 10px;\n"]))),In=S.ZP.button(on||(on=(0,J.Z)([""]))),Nn=function(n){var e=n.id,t=(0,i.I0)();return(0,I.jsxs)(Cn,{children:[(0,I.jsx)(_n,{children:"A you sure?"}),(0,I.jsx)(Ln,{type:"button",onClick:function(){t((0,o.GK)(e)),t((0,a.$J)(e))},children:"Ok"}),(0,I.jsx)(In,{type:"button",onClick:function(){return t((0,a.$J)(e))},children:"No"})]})},zn=function(){var n=(0,i.I0)(),e=(0,i.v9)(c),t=(0,i.v9)(s),d=(0,i.v9)(l),u=(0,i.v9)(x),h=(0,i.v9)(p),f=(0,i.v9)(m);(0,r.useEffect)((function(){n((0,o.yF)())}),[n]);return(0,I.jsxs)("div",{children:[(0,I.jsxs)(un,{children:[(0,I.jsxs)(pn,{children:[!t&&(0,I.jsx)(xn,{children:"Contacts"}),t&&!d&&(0,I.jsx)(xn,{children:"Loading..."}),(0,I.jsx)(mn,{type:"button",onClick:function(){n((0,a.Z8)())},children:"+"})]}),f&&(0,I.jsx)(z,{}),(0,I.jsxs)(hn,{children:[(0,I.jsxs)(fn,{children:["Total: ",null===e||void 0===e?void 0:e.length]}),(0,I.jsx)(gn,{children:"Name:"}),(0,I.jsx)(bn,{children:"Number:"}),(0,I.jsx)(ln,{})]}),(0,I.jsx)("div",{children:(null===e||void 0===e?void 0:e.length)<1?(0,I.jsx)(vn,{message:"Phonebook is empty!"}):(0,I.jsx)(an,{})}),(0,I.jsx)(P.Z,{})]}),u&&(0,I.jsx)(kn,{children:(0,I.jsx)(Nn,{id:h})})]})}}}]);
//# sourceMappingURL=352.ee2419bc.chunk.js.map