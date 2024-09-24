"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[517],{517:(e,t,s)=>{s.r(t),s.d(t,{default:()=>N});var a=s(3);const n=e=>e.filter.filterValue;var r=s(620),o=s(579);const c=()=>{const e=(0,a.wA)(),t=(0,a.d4)(n);return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"Find contacts by name"}),(0,o.jsx)("input",{type:"text",name:"filter",placeholder:"Search by name",value:t,onChange:t=>{e((0,r.R)(t.target.value))}})]})};var i=s(43),l=s(99);const d=e=>e.contacts.items,h=e=>e.contacts.isLoading,m=e=>e.contacts.isError,u=(0,l.Mz)([d,n],((e,t)=>e.filter((e=>{let{name:s}=e;return s.toLowerCase().includes(t.toLowerCase())}))));var p=s(60),x=s(648),j=s(13);const f=e=>{let{filteredContact:t}=e;const s=(0,a.wA)();return(0,o.jsx)("div",{children:(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:[t.name,":"]}),(0,o.jsx)("p",{children:t.number}),(0,o.jsx)("button",{onClick:()=>{s((0,p.tH)(t.id)),j.Notify.success(`${t.name} was deleted`,{position:"right-bottom"})},children:"Delete"})]})})},b=()=>{const e=(0,a.d4)(u),t=(0,a.d4)(h),s=(0,a.d4)(m),n=(0,a.wA)();return(0,i.useEffect)((()=>{n((0,p.oe)())}),[n]),(0,o.jsxs)("ul",{children:[t&&!s&&(0,o.jsx)(x.a,{}),!t&&!s&&0===e.length&&(0,o.jsx)("p",{children:"The Phonebook is empty. Please add a contact"}),!t&&!s&&e.length>0&&e.map((e=>(0,o.jsx)(f,{filteredContact:e},e.id)))]})};var C=s(367);const _="ContactForm_form__dhl+T",g="ContactForm_formField__O5fo+",w="ContactForm_formLabel__TSwxK",v="ContactForm_formButton__TN6Jq",y=()=>{const e=(0,a.wA)(),t=(0,a.d4)(d),[s,n]=(0,i.useState)(""),[r,c]=(0,i.useState)("");return(0,o.jsxs)("form",{className:_,onSubmit:a=>{if(a.preventDefault(),""===s.trim()||""===r.trim())return;t.find((e=>e.name.toLowerCase()===s.toLowerCase()))?j.Notify.warning(`${s} is already in contacts!`):(j.Notify.success(`${s} was successfully added`,{position:"right-top"}),e((0,p.jx)({name:s,number:r})),n(""),c(""))},children:[(0,o.jsxs)("label",{className:g,children:[(0,o.jsx)("p",{className:w,children:"Name"}),(0,o.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:s,onChange:e=>{n(e.target.value)}})]}),(0,o.jsxs)("label",{className:g,children:[(0,o.jsx)("p",{className:w,children:"Number"}),(0,o.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:r,onChange:e=>{c(e.target.value)}})]}),(0,o.jsx)("button",{className:v,type:"submit",children:"Add Contact"})]})},N=()=>(0,o.jsxs)(C.vd,{children:[(0,o.jsx)(C.mg,{children:(0,o.jsx)("title",{children:"Contacts"})}),(0,o.jsx)(y,{}),(0,o.jsx)("h2",{children:"Contacts"}),(0,o.jsx)(c,{}),(0,o.jsx)(b,{})]})}}]);
//# sourceMappingURL=517.1f42a17c.chunk.js.map