import{h as f,r as h,i as g,j as v,k as _,l as k,o as y,a as x,t as l,u as n}from"./app.fad36ee9.js";const E={setup(A){const{pause:t,resume:o,counter:u,isActive:s}=f(200,{controls:!0}),a=h(null),c=g(a);v(c,e=>{!e&&t(),e&&i.value&&o()});const r=_(()=>s.value?"\u6682\u505C":"\u7EE7\u7EED"),[i,p]=k(s.value),m=()=>(p(),(s.value?t:o)());return(e,d)=>(y(),x("div",{ref_key:"el",ref:a,onClick:m,class:"cursor-pointer mt-2 select-none"},"\u{1F449} \u70B9\u51FB"+l(n(r))+": "+l(n(u)),513))}};export{E as default};
