import{d as t,r as e,c as o,a as r,w as s,b as n,o as a,e as l,f as i,F as c,g as d,h as u,i as m}from"./vendor.2298a501.js";!function(t=".",e="__import__"){try{self[e]=new Function("u","return import(u)")}catch(o){const r=new URL(t,location),s=t=>{URL.revokeObjectURL(t.src),t.remove()};self[e]=t=>new Promise(((o,n)=>{const a=new URL(t,r);if(self[e].moduleMap[a])return o(self[e].moduleMap[a]);const l=new Blob([`import * as m from '${a}';`,`${e}.moduleMap['${a}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){n(new Error(`Failed to import: ${t}`)),s(i)},onload(){o(self[e].moduleMap[a]),s(i)}});document.head.appendChild(i)})),self[e].moduleMap={}}}("/assets/");var f=t({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:e(0)})});const x={class:"text-gray-700 bg-white body-font"},g={class:"flex flex-col flex-wrap p-5 mx-auto border-b md:items-center md:flex-row"},p=r("a",{href:"./index.html",class:"pr-2 lg:pr-8 lg:px-6 focus:outline-none"},[r("div",{class:"inline-flex items-center"},[r("div",{class:"w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"}),r("h2",{class:"font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold lg:mr-8"}," Fredy Bambang ")])],-1),h={class:"flex flex-wrap items-center justify-center text-base md:ml-auto"},b=l("Home"),v=l("About Me"),y=r("button",{class:"items-center px-8 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"}," Buy Me Coffee ",-1);f.render=function(t,e,l,i,c,d){const u=n("router-link");return a(),o("div",x,[r("div",g,[p,r("nav",h,[r(u,{to:"/",class:"mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"},{default:s((()=>[b])),_:1}),r(u,{to:"/about",class:"mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"},{default:s((()=>[v])),_:1})]),y])])};var w=t({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:e(0)})});const k={class:"text-gray-700 border-t body-font"},j=i('<div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap"><div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left"><a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"><div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"></div><h2 class="text-lg font-bold tracking-tighter text-black uppercase transition duration-500 ease-in-out transform hover:text-lightBlack-500 dark:text-lightBlue-400"> Fredy Bambang </h2></a></div><div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0"><div class="w-full px-4 lg:w-1/3 md:w-1/2"><h1 class="mb-3 text-sm font-semibold tracking-widest text-black uppercase title-font"> Page </h1><nav class="mb-10 list-none"><li><a class="text-sm text-gray-600 hover:text-gray-800">About</a></li></nav></div></div></div>',1),B=r("div",{class:"bg-black"},[r("div",{class:"container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row"},[r("p",{class:"text-sm text-center text-gray-200 sm:text-left"},"© 2020"),r("span",{class:"inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"},[r("a",{class:"text-white hover:text-blue-500"},[r("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[r("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})])]),r("a",{class:"ml-4 text-white hover:text-blue-500"},[r("svg",{fill:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[r("path",{d:"M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"})])]),r("a",{class:"ml-4 text-white hover:text-blue-500"},[r("svg",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",class:"w-5 h-5",viewBox:"0 0 24 24"},[r("rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}),r("path",{d:"M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"})])])])])],-1);w.render=function(t,e,r,s,n,l){return a(),o("footer",k,[j,B])};var M=t({name:"App",components:{Header:f,Footer:w}});M.render=function(t,e,s,l,i,d){const u=n("Header"),m=n("router-view"),f=n("Footer");return a(),o(c,null,[r(u),r(m),r(f)],64)};var A=t({name:"Home",props:{msg:{type:String,required:!0}},setup:()=>({count:e(0)})});const H={class:"text-gray-700 body-font"},F=i('<div class="container px-8 py-48 mx-auto lg:px-4"><div class="flex flex-col w-full mb-12 text-left lg:text-center"><h2 class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font"> that prefered to backend </h2><h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> Hai, I&#39;m Software Engineer </h1><p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"> Welcome to my page. I like to test this github page as frontend project and try the possibility to hit 3rd party service. In future, i might patch this page by do simple blog and any other feature that i can do. </p></div><div class="flex lg:justify-center"></div></div>',1);A.render=function(t,e,r,s,n,l){return a(),o("section",H,[F])};var L=t({name:"About",props:{msg:{type:String,required:!0}},setup:()=>({count:e(0)})});const R={class:"text-gray-700 body-font"},U=i('<div class="container px-8 py-48 mx-auto lg:px-4"><div class="flex flex-col w-full mb-12 text-left lg:text-center"><h2 class="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font"> It&#39;s About Me Page </h2><h1 class="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> A centered <br class="md:hidden"> medium lenght display headline. </h1><p class="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3"> You&#39;re about to launch soon and must be 100% focused on your product. Don&#39;t loose precious days designing, coding the landing page and testing a site. Instead, integrate one with your favourite framework. . </p></div><div class="flex lg:justify-center"><button class="inline-flex px-6 py-2 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Button </button><button class="inline-flex items-center px-6 py-2 ml-4 font-semibold text-black transition duration-500 ease-in-out transform bg-white border rounded-lg shadow-xl hover:border-gray-600 hover:bg-gray-600 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Button </button></div></div>',1);L.render=function(t,e,r,s,n,l){return a(),o("section",R,[U])};const _=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:L}],C=d({history:u(),routes:_});m(M).use(C).mount("#app");