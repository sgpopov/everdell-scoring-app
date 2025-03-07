import{b as k,_ as w,a as M,c as C,d as V,e as B,f as j,g as S}from"./index-D6wUpsBS.js";import{c as o,a as t,o as a,d as G,m as I,j as N,g as $,F as i,b as c,u as m,e as x,t as _,w as D,i as F,_ as P,n as z}from"./index-BwY7Wjpz.js";import{u as A}from"./games-DIEzbtWP.js";function E(y,p){return a(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"})])}const H={class:"lg:mt-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"},L={class:"mt-8 flow-root"},O={class:"-mx-4 mt-5 overflow-x-auto sm:-mx-6 lg:-mx-8"},R={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},T={class:"min-w-full divide-y divide-gray-300"},q={class:"divide-y divide-gray-200"},J={class:"py-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0"},K=["src"],Q={class:"py-3.5 pr-3 pl-4 text-sm font-semibold text-gray-900 sm:pl-0"},U={class:"flex items-center gap-x-2"},Z=G({__name:"GameDetails",setup(y){const p=I(),f=A(),d=p.params.id,l=f.getById(d);l||N.push("/");const v=$(()=>k.map(n=>({key:n.key,title:n.title,icon:n.icon,scores:l==null?void 0:l.players.map(e=>({key:`${n.key}-${e.name}`,value:e.scores[n.key]}))}))),h=Object.assign({"/src/assets/icons/icon-cards.png":S,"/src/assets/icons/icon-events.png":j,"/src/assets/icons/icon-journey.png":B,"/src/assets/icons/icon-prosperity.png":V,"/src/assets/icons/icon-resources.png":C,"/src/assets/icons/icon-tokens.png":M,"/src/assets/icons/icon-total.png":w,"/src/assets/images/logo.png":z}),b=n=>{var r;const e=n.replace(/^@/,"/src");return((r=h[e])==null?void 0:r.default)||""};return(n,e)=>{var r,u;return a(),o("div",H,[t("div",L,[e[2]||(e[2]=t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-base font-semibold text-gray-900"},"Score"),t("p",{class:"mt-2 text-sm text-gray-700"}," Click on the category to enter the scoring points for each player ")],-1)),t("div",O,[t("div",R,[t("table",T,[t("thead",null,[t("tr",null,[e[0]||(e[0]=t("th",{scope:"col",class:"py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"}," Player ",-1)),(a(!0),o(i,null,c((r=m(l))==null?void 0:r.players,s=>(a(),o("th",{key:s.name,scope:"col",class:"px-3 py-3.5 text-center text-sm font-semibold text-gray-900"},_(s.name),1))),128))])]),t("tbody",q,[(a(!0),o(i,null,c(v.value,s=>(a(),o("tr",{key:s.key},[t("td",J,[x(P,{to:{name:"games.score",params:{id:m(d),score:s.key}},class:"flex items-center gap-x-2"},{default:D(()=>[s.icon?(a(),o("img",{key:0,class:"max-w-6",src:b(s.icon),alt:""},null,8,K)):F("",!0),t("span",null,_(s.title),1)]),_:2},1032,["to"])]),(a(!0),o(i,null,c(s.scores,g=>(a(),o("td",{key:g.key,class:"px-3 py-4 text-sm whitespace-nowrap text-center text-gray-700"},_(g.value),1))),128))]))),128))]),t("tfoot",null,[t("tr",null,[t("td",Q,[t("div",U,[x(m(E),{class:"h-6 w-auto"}),e[1]||(e[1]=t("span",null,"Total",-1))])]),(a(!0),o(i,null,c((u=m(l))==null?void 0:u.players,s=>(a(),o("td",{key:s.name,scope:"col",class:"px-3 py-3.5 text-sm font-semibold text-center text-gray-900"},_(s.total),1))),128))])])])])])])])}}});export{Z as default};
