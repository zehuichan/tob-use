import{q as y,r as x,v as p,x as b,o as T,a as C,b as l}from"./app.fad36ee9.js";var k="/tob-use/404/33.svg";const S=({strings:s=["Put your strings here...","and Enjoy!"],typeSpeed:a=100,backSpeed:r=50,backDelay:o=500,startDelay:c=500,cursorChar:i="|",placeholder:d=!1,showCursor:u=!0,disableBackTyping:f=!1,onFinished:_=function(){},loop:h=!0})=>({strings:s,typeSpeed:a,backSpeed:r,cursorChar:i,backDelay:o,placeholder:d,startDelay:c,showCursor:u,loop:h,disableBackTyping:f,onFinished:_}),I=(s,a)=>{let r=0,o,c;const i=(e,t)=>{r===o&&t.loop&&(r=0),setTimeout(()=>{d(e[r],t)},t.startDelay)},d=(e,t)=>{let n=0,g=e.length,v=setInterval(()=>{if(t.placeholder?s.placeholder+=e[n]:s.textContent+=e[n],++n===g)return u(v,t)},t.typeSpeed)},u=(e,t)=>{if(clearInterval(e),t.disableBackTyping&&r===o-1||!t.loop&&r===o-1)return t.onFinished();setTimeout(()=>f(t),t.backDelay)},f=e=>{let t=e.placeholder?s.placeholder:s.textContent,n=t.length,g=setInterval(()=>{if(e.placeholder?s.placeholder=s.placeholder.substr(0,--n):s.textContent=t.substr(0,--n),n===0)return _(g,e)},e.backSpeed)},_=(e,t)=>{clearInterval(e),++r,i(c,t)},h=(e,t)=>{let n=document.createElement("span");n.classList.add("ityped-cursor"),n.textContent="|",n.textContent=t.cursorChar,e.insertAdjacentElement("afterend",n)};return(e=>{let t=S(e||{}),n=t.strings;c=n,o=n.length,typeof s=="string"&&(s=document.querySelector(s)),t.showCursor&&h(s,t),i(n,t)})(a)};const E={class:"flex flex-wrap h-screen text-center justify-around items-center"},m={class:"font-blod desc"},B=l("div",{class:"text-7xl code"},"404",-1),w=l("img",{src:k,class:"cover",alt:"page not found"},null,-1),F=y({setup(s){const a=x(null);p(()=>{I(a.value,{showCursor:!1,disableBackTyping:!0,strings:[" is not found!"]})});const r=b(),o=()=>r.push("/");return(c,i)=>(T(),C("div",E,[l("div",m,[B,l("div",{class:"text-3xl content",ref_key:"content",ref:a},"The Page",512),l("div",{onClick:o,active:"scale-90 transform",class:"rounded-lg cursor-pointer transition inline-block btn"},"\u{1F449} Go Home")]),w]))}});export{F as default};
