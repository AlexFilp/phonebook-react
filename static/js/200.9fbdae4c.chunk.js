"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[200],{5200:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var r,o,i,a,c=t(168),u=t(6444),l=u.ZP.h1(r||(r=(0,c.Z)(["\n  font-size: 35px;\n  color: ",";\n  text-align: center;\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.color.accentColor})),s=u.ZP.div(o||(o=(0,c.Z)(["\n  margin-bottom: 7px;\n  width: 100%;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 550px;\n  }\n"]))),d=u.ZP.span(i||(i=(0,c.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  font-size: 20px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.color.darkColor})),p=u.ZP.input(a||(a=(0,c.Z)(["\n  height: 50px;\n  width: 100%;\n  padding: 0 15px;\n  padding-bottom: 6px;\n  border: 2px solid transparent;\n  border-radius: 10px;\n  background-color: lightgray;\n  outline: none;\n  font-size: 20px;\n  font-weight: 500;\n  transition: border-color ",";\n\n  &:focus-within {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accentColor})),f=t(9434),h=t(2627),m=t(184),x=function(){var n=(0,f.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{children:"Contacts"}),(0,m.jsx)(s,{children:(0,m.jsxs)(d,{children:["Find contacts by name",(0,m.jsx)(p,{type:"text",onChange:function(e){var t=e.target.value;n((0,h.C)(t))}})]})})]})},g=t(5861),b=t(7757),v=t.n(b),Z=t(773),w=t(9085),y="NOT_FOUND";var j=function(n,e){return n===e};function k(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?j:r,i=t.maxSize,a=void 0===i?1:i,c=t.resultEqualityCheck,u=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),l=1===a?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:y},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(u):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return y}return{get:r,put:function(e,o){r(e)===y&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,u);function s(){var e=l.get(arguments);if(e===y){if(e=n.apply(null,arguments),c){var t=l.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}l.put(arguments,e)}return e}return s.clearCache=function(){return l.clear()},s}function P(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function C(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,a=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var l=c,s=l.memoizeOptions,d=void 0===s?t:s,p=Array.isArray(d)?d:[d],f=P(r),h=n.apply(void 0,[function(){return a++,u.apply(null,arguments)}].concat(p)),m=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(m,{resultFunc:u,memoizedResultFunc:h,dependencies:f,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var z,q,_,R,A,F,E,S,I,L,N,O,$,M,G,V,Y,Q,B,H=C(k),K=function(n){return n.contacts.contactsList},W=function(n){return n.contacts.isLoading},D=function(n){return n.contacts.error},J=H([K,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),T=t(5705),U=t(375),X=t(3051),nn=(u.ZP.form(z||(z=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 0 auto;\n  margin-bottom: 15px;\n  width: 400px;\n  padding: 15px;\n  border-radius: 10px;\n  box-shadow: ",";\n"])),(function(n){return n.theme.boxShadow})),u.ZP.label(q||(q=(0,c.Z)(["\n  font-size: 25px;\n  margin-bottom: 8px;\n  width: 100%;\n"]))),u.ZP.span(_||(_=(0,c.Z)(["\n  display: block;\n  margin-bottom: 5px;\n  text-align: center;\n"]))),u.ZP.input(R||(R=(0,c.Z)(["\n  display: block;\n  font-size: 20px;\n  width: 100%;\n  height: 30px;\n  text-align: center;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 5px;\n  border-radius: 4px;\n  outline: none;\n  border: none;\n  box-shadow: ",";\n"])),(function(n){return n.theme.boxShadow})),u.ZP.div(A||(A=(0,c.Z)(["\n  height: auto;\n\n  width: 100%;\n  text-align: center;\n"]))),u.ZP.p(F||(F=(0,c.Z)(["\n  font-size: 18px;\n  color: red;\n"]))),u.ZP.button(E||(E=(0,c.Z)(["\n  display: block;\n  margin-top: 10px;\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 10px;\n  height: 45px;\n  font-weight: 500;\n  cursor: pointer;\n\n  transition: background-color ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.accentColor}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.hoverAccentColor}),(function(n){return n.theme.color.accentColor}))),en=function(){var n=(0,f.I0)(),e=(0,f.v9)(K),t=function(){var t=(0,g.Z)(v().mark((function t(r,o){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.find((function(n){return n.name===r.name}))){t.next=2;break}return t.abrupt("return",w.Am.error("".concat(r.name," is already in contacts!")));case 2:n((0,Z.uK)(r)),o.resetForm();case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(T.J9,{initialValues:{name:"",number:""},validationSchema:U.pQ,onSubmit:t,children:function(n){var e=n.errors,t=n.touched,r=function(n){return t[n]&&e[n]?"is-invalid":"is-valid"},o=r("name"),i=r("number");return(0,m.jsxs)(X.Gq,{autoComplete:"on",children:[(0,m.jsxs)(X.__,{children:["Name",(0,m.jsx)(X.ob,{type:"text",name:"name",isvalid:o,placeholder:"Enter name"}),(0,m.jsx)(T.Bc,{name:"name",component:X.Vv})]}),(0,m.jsxs)(X.__,{children:["Number",(0,m.jsx)(X.ob,{type:"text",name:"number",autoComplete:"off",placeholder:"+38 ...",isvalid:i}),(0,m.jsx)(T.Bc,{name:"number",component:X.Vv})]}),(0,m.jsx)(nn,{type:"submit",children:"Add contact"})]})}})})},tn=u.ZP.div(S||(S=(0,c.Z)(["\n  position: relative;\n  padding-top: 45px;\n"]))),rn=u.ZP.ul(I||(I=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 25px;\n\n  @media screen and (min-width: 1440px) {\n    border: 2px solid ",";\n    border-radius: 10px;\n    width: 580px;\n    margin: 0 auto;\n    overflow-y: scroll;\n    height: 600px;\n    padding: 20px;\n  }\n"])),(function(n){return n.theme.color.accentColor})),on=u.ZP.div(L||(L=(0,c.Z)(["\n  position: absolute;\n  top: 4px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 5px;\n  justify-content: center;\n  align-items: center;\n"]))),an=u.ZP.li(N||(N=(0,c.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid ",";\n  border-radius: 10px;\n  padding: 5px 8px;\n"])),(function(n){return n.theme.color.accentColor})),cn=u.ZP.p(O||(O=(0,c.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  margin-bottom: 5px;\n"]))),un=u.ZP.a($||($=(0,c.Z)(["\n  display: block;\n  font-size: 20px;\n  color: ",";\n"])),(function(n){return n.theme.color.accentColor})),ln=u.ZP.button(M||(M=(0,c.Z)(["\n  border: none;\n  background-color: transparent;\n  font-size: 30px;\n  cursor: pointer;\n  color: ",";\n\n  transition: color ",",\n    transform ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.color.darkColor}),(function(n){return n.theme.transition}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accentColor})),sn=t(6856),dn=function(n){var e=n.id,t=n.name,r=n.phone,o=(0,f.I0)();return(0,m.jsxs)(an,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(cn,{children:t}),(0,m.jsx)(un,{href:"tel:"+r,children:r})]}),(0,m.jsx)(ln,{onClick:function(){o((0,Z.GK)(e))},children:(0,m.jsx)(sn.FH3,{})})]})},pn=t(8402),fn=function(){var n=(0,f.v9)(J),e=(0,f.v9)(W),t=(0,f.v9)(D);return(0,m.jsxs)(tn,{children:[e&&!t&&(0,m.jsx)(on,{children:(0,m.jsx)(pn.s5,{height:"35",width:"35",strokeColor:"blue"})}),(0,m.jsx)(rn,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,m.jsx)(dn,{id:e,name:t,phone:r},e)})).reverse()})]})},hn=t(8346),mn=u.ZP.div(G||(G=(0,c.Z)(["\n  display: block;\n\n  @media screen and (min-width: 1440px) {\n    display: flex;\n  }\n"]))),xn=u.ZP.div(V||(V=(0,c.Z)(["\n  padding-top: 30px;\n\n  @media screen and (min-width: 1440px) {\n    width: 500px;\n    margin-left: auto;\n    margin-right: 130px;\n  }\n"]))),gn=u.ZP.div(Y||(Y=(0,c.Z)(["\n  @media screen and (min-width: 1440px) {\n    padding-top: 30px;\n    width: 600px;\n  }\n"]))),bn=u.ZP.h1(Q||(Q=(0,c.Z)(["\n  font-size: 40px;\n  color: ",";\n  text-align: center;\n  margin-bottom: 10px;\n"])),(function(n){return n.theme.color.accentColor})),vn=u.ZP.div(B||(B=(0,c.Z)(["\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  width: 100%;\n  height: 6px;\n  background-color: ",";\n\n  @media screen and (min-width: 1440px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.color.accentColor})),Zn=t(2791),wn=t(4270);function yn(){var n=(0,f.I0)();return(0,Zn.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(wn.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsxs)(mn,{children:[(0,m.jsx)(hn.i,{children:(0,m.jsxs)(xn,{children:[(0,m.jsx)(bn,{children:"Phonebook"}),(0,m.jsx)(en,{})]})}),(0,m.jsx)(vn,{}),(0,m.jsx)(hn.i,{children:(0,m.jsxs)(gn,{children:[(0,m.jsx)(x,{}),(0,m.jsx)(fn,{})]})})]})]})}},3051:function(n,e,t){t.d(e,{Gq:function(){return m},Ru:function(){return b},SP:function(){return w},Vv:function(){return v},WZ:function(){return y},__:function(){return x},ob:function(){return g},un:function(){return j},y$:function(){return Z}});var r,o,i,a,c,u,l,s,d,p=t(168),f=t(6444),h=t(5705),m=(0,f.ZP)(h.l0)(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n  margin: 0 auto;\n  @media screen and (min-width: 768px) {\n    width: 550px;\n  }\n"]))),x=f.ZP.label(o||(o=(0,p.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  font-size: 20px;\n  font-weight: 500;\n  color: ",";\n"])),(function(n){return n.theme.color.darkColor})),g=(0,f.ZP)(h.gN)(i||(i=(0,p.Z)(["\n  height: 50px;\n  width: 100%;\n  padding: 0 15px;\n  padding-bottom: 6px;\n  border: 2px solid\n    ",";\n  border-radius: 10px;\n  background-color: lightgray;\n  outline: none;\n  font-size: 20px;\n  font-weight: 500;\n  transition: border-color ",";\n\n  &:focus-within {\n    border-color: ",";\n  }\n"])),(function(n){return"is-valid"===n.isvalid?"transparent":"red"}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accentColor})),b=(0,f.ZP)(h.gN)(a||(a=(0,p.Z)(["\n  height: 50px;\n  width: 100%;\n  padding-bottom: 6px;\n  padding-left: 15px;\n  padding-right: 42px;\n  border: 2px solid\n    ",";\n  border-radius: 10px;\n  background-color: lightgray;\n  outline: none;\n  font-size: 20px;\n  font-weight: 500;\n  transition: border-color ",";\n\n  &:focus-within {\n    border-color: ",";\n  }\n"])),(function(n){return"is-valid"===n.isvalid?"transparent":"red"}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.accentColor})),v=f.ZP.p(c||(c=(0,p.Z)(["\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  color: red;\n  font-size: 14px;\n  font-weight: 500;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    top: 0;\n    font-weight: 400;\n  }\n"]))),Z=f.ZP.p(u||(u=(0,p.Z)(["\n  position: absolute;\n\n  right: 5px;\n  color: red;\n  font-size: 14px;\n\n  @media screen and (max-width: 374px) {\n    bottom: -20px;\n  }\n\n  @media screen and (min-width: 375px) {\n    top: 6px;\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    top: 0;\n    font-weight: 400;\n  }\n"]))),w=f.ZP.div(l||(l=(0,p.Z)(["\n  position: relative;\n"]))),y=f.ZP.button(s||(s=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  transform: translateY(-50%);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  font-size: 23px;\n"]))),j=f.ZP.button(d||(d=(0,p.Z)(["\n  display: block;\n  margin-top: 20px;\n  background-color: ",";\n  color: white;\n  border: none;\n  border-radius: 10px;\n  height: 45px;\n  font-weight: 500;\n  cursor: pointer;\n\n  transition: background-color ",";\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.color.accentColor}),(function(n){return n.theme.transition}),(function(n){return n.theme.color.hoverAccentColor}),(function(n){return n.theme.color.accentColor}))},375:function(n,e,t){t.d(e,{EQ:function(){return i},pQ:function(){return a},zG:function(){return o}});var r=t(6727),o=r.Ry().shape({email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().min(6,"Minimum 6 characters long").matches(/^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,"You can only use Latin letters, numbers and symbols!").required("Required")}),i=r.Ry().shape({name:r.Z_().min(2,"Minimum 2 characters long").required("Required"),email:r.Z_().email("Invalid email address").required("Required"),password:r.Z_().min(6,"Minimum 6 characters long").matches(/^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,"You can only use Latin letters, numbers and symbols!").required("Required"),repeatPassword:r.Z_().min(6,"Minimum 6 characters long").oneOf([r.iH("password"),void 0],"Passwords must match").required("Required")}),a=r.Ry().shape({name:r.Z_().min(2,"Minimum 2 characters long").required("Required"),number:r.Z_().matches(/^\+\d{1,3}\d{9,15}$/,"Wrong phone number").required("Required")})}}]);
//# sourceMappingURL=200.9fbdae4c.chunk.js.map