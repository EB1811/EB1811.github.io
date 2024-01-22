var me=Object.defineProperty;var ge=(t,e,r)=>e in t?me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var J=(t,e,r)=>(ge(t,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function n(a){if(a.ep)return;a.ep=!0;const d=r(a);fetch(a.href,d)}})();function y(){}function ce(t){return t()}function se(){return Object.create(null)}function U(t){t.forEach(ce)}function de(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Z;function ae(t,e){return t===e?!0:(Z||(Z=document.createElement("a")),Z.href=e,t===Z.href)}function he(t){return Object.keys(t).length===0}function i(t,e){t.appendChild(e)}function I(t,e,r){t.insertBefore(e,r||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function x(){return V(" ")}function pe(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function s(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function ve(t){return Array.from(t.childNodes)}function D(t,e){e=""+e,t.data!==e&&(t.data=e)}function xe(t,e,r,n){r==null?t.style.removeProperty(e):t.style.setProperty(e,r,n?"important":"")}function b(t,e,r){t.classList.toggle(e,!!r)}let G;function F(t){G=t}function we(){if(!G)throw new Error("Function called outside component initialization");return G}function ye(t){we().$$.on_mount.push(t)}const O=[],le=[];let N=[];const oe=[],be=Promise.resolve();let te=!1;function ke(){te||(te=!0,be.then(ue))}function re(t){N.push(t)}const Q=new Set;let P=0;function ue(){if(P!==0)return;const t=G;do{try{for(;P<O.length;){const e=O[P];P++,F(e),_e(e.$$)}}catch(e){throw O.length=0,P=0,e}for(F(null),O.length=0,P=0;le.length;)le.pop()();for(let e=0;e<N.length;e+=1){const r=N[e];Q.has(r)||(Q.add(r),r())}N.length=0}while(O.length);for(;oe.length;)oe.pop()();te=!1,Q.clear(),F(t)}function _e(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(re)}}function $e(t){const e=[],r=[];N.forEach(n=>t.indexOf(n)===-1?e.push(n):r.push(n)),r.forEach(n=>n()),N=e}const K=new Set;let Le;function _(t,e){t&&t.i&&(K.delete(t),t.i(e))}function M(t,e,r,n){if(t&&t.o){if(K.has(t))return;K.add(t),Le.c.push(()=>{K.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function C(t){t&&t.c()}function $(t,e,r){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,r),re(()=>{const d=t.$$.on_mount.map(ce).filter(de);t.$$.on_destroy?t.$$.on_destroy.push(...d):U(d),t.$$.on_mount=[]}),a.forEach(re)}function L(t,e){const r=t.$$;r.fragment!==null&&($e(r.after_update),U(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function Me(t,e){t.$$.dirty[0]===-1&&(O.push(t),ke(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,r,n,a,d,l=null,u=[-1]){const f=G;F(t);const o=t.$$={fragment:null,ctx:[],props:d,update:y,not_equal:a,bound:se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:se(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(o.root);let g=!1;if(o.ctx=r?r(t,e.props||{},(p,h,...v)=>{const c=v.length?v[0]:h;return o.ctx&&a(o.ctx[p],o.ctx[p]=c)&&(!o.skip_bound&&o.bound[p]&&o.bound[p](c),g&&Me(t,p)),h}):[],o.update(),g=!0,U(o.before_update),o.fragment=n?n(o.ctx):!1,e.target){if(e.hydrate){const p=ve(e.target);o.fragment&&o.fragment.l(p),p.forEach(E)}else o.fragment&&o.fragment.c();e.intro&&_(t.$$.fragment),$(t,e.target,e.anchor),ue()}F(f)}class z{constructor(){J(this,"$$");J(this,"$$set")}$destroy(){L(this,1),this.$destroy=y}$on(e,r){if(!de(r))return y;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const a=n.indexOf(r);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!he(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ce);function Te(t){let e;return{c(){e=m("section"),e.innerHTML='<div class="mx-auto max-w-2xl px-6 text-center"><h2 class="text-3xl font-semibold text-gray-800 md:text-4xl"><span class="rounded bg-emerald-400 px-1 text-white duration-700 dark:bg-indigo-700">Emmanuil Borovikovs</span></h2> <p class="mt-4 text-gray-600 dark:text-gray-300">Software Engineer specialising in Frontend and Cloud development.</p> <div class="m-4 flex items-end justify-center"><img width="300" src="img/eman-self-working.PNG" alt="eman working" class="rounded-full"/></div></div>',s(e,"class","mt-20 bg-white transition-colors duration-500 dark:bg-neutral-800"),xe(e,"min-height","380px")},m(r,n){I(r,e,n)},p:y,i:y,o:y,d(r){r&&E(e)}}}class Se extends z{constructor(e){super(),B(this,e,null,Te,H,{})}}function je(t){let e,r,n,a,d,l,u,f,o,g,p,h,v;return{c(){e=m("div"),r=m("span"),n=Y("svg"),a=Y("path"),d=x(),l=m("div"),u=m("div"),f=x(),o=m("span"),g=Y("svg"),p=Y("path"),s(a,"stroke-linecap","round"),s(a,"stroke-linejoin","round"),s(a,"stroke-width","2"),s(a,"d","M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"),s(n,"class","h-6 w-6 transition-all duration-200 ease-in-out"),s(n,"fill","none"),s(n,"viewBox","0 0 24 24"),s(n,"stroke","currentColor"),b(n,"text-gray-400",t[0]),b(n,"text-gray-500",!t[0]),s(u,"class","h-4 w-4 rounded-full bg-white shadow-md transition-all duration-200 ease-in-out svelte-is6i9l"),b(u,"toggle-dot",t[0]),s(l,"class","mx-2 flex h-6 w-12 cursor-pointer items-center rounded-full px-1 transition-all duration-200 ease-in-out"),b(l,"bg-indigo-700",t[0]),b(l,"bg-gray-300",!t[0]),s(p,"stroke-linecap","round"),s(p,"stroke-linejoin","round"),s(p,"stroke-width","2"),s(p,"d","M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"),s(g,"class","h-6 w-6 transition-all duration-200 ease-in-out"),s(g,"fill","none"),s(g,"viewBox","0 0 24 24"),s(g,"stroke","currentColor"),b(g,"text-gray-500",t[0]),b(g,"text-gray-400",!t[0]),s(e,"class","mr-3 flex items-center justify-center")},m(c,w){I(c,e,w),i(e,r),i(r,n),i(n,a),i(e,d),i(e,l),i(l,u),i(e,f),i(e,o),i(o,g),i(g,p),h||(v=pe(l,"click",t[1]),h=!0)},p(c,[w]){w&1&&b(n,"text-gray-400",c[0]),w&1&&b(n,"text-gray-500",!c[0]),w&1&&b(u,"toggle-dot",c[0]),w&1&&b(l,"bg-indigo-700",c[0]),w&1&&b(l,"bg-gray-300",!c[0]),w&1&&b(g,"text-gray-500",c[0]),w&1&&b(g,"text-gray-400",!c[0])},i:y,o:y,d(c){c&&E(e),h=!1,v()}}}function Ae(t,e,r){let n=localStorage.getItem("theme")?localStorage.getItem("theme")==="dark":!!window.matchMedia("(prefers-color-scheme: dark)").matches;return[n,()=>{localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark");const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";(localStorage.getItem("theme")??l)==="dark"?(document.body.classList.add("dark"),r(0,n=!0)):(document.body.classList.remove("dark"),r(0,n=!1))}]}class He extends z{constructor(e){super(),B(this,e,Ae,je,H,{})}}function Ee(t){let e,r,n,a,d,l,u,f,o,g,p,h,v,c,w;return f=new He({}),{c(){e=m("header"),r=m("div"),n=m("div"),a=m("div"),a.innerHTML='<a href="./" class="flex items-center text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"><svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 76.5"><path d="M47.53,61.26l.15.15a8.91,8.91,0,0,1-.18,12.46s-.11.13-.16.16a8.91,8.91,0,0,1-12.42-.1c-9.66-8.86-23.59-20-32.1-29.25a8.92,8.92,0,0,1,.11-13.12c5.41-6.71,24.44-22.15,32-29A8.93,8.93,0,0,1,49.12,13a1.66,1.66,0,0,1-.44.56l-27,24.78c4.32,4.19,8.09,7.31,11.86,10.43a172.63,172.63,0,0,1,14,12.48Zm27.82,0-.15.15a8.91,8.91,0,0,0,.18,12.46s.11.13.16.16A8.91,8.91,0,0,0,88,73.93c9.66-8.86,23.59-20,32.1-29.25A8.92,8.92,0,0,0,120,31.56c-5.41-6.71-24.44-22.15-32-29A8.93,8.93,0,0,0,73.76,13a1.77,1.77,0,0,0,.43.56l27,24.78c-4.32,4.19-8.1,7.31-11.86,10.43a172.63,172.63,0,0,0-14,12.48Z"></path></svg> <span class="mx-3 text-sm font-medium md:text-base">Emmanuil B.</span></a>',d=x(),l=m("div"),u=m("div"),C(f.$$.fragment),o=x(),g=m("a"),g.innerHTML='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current sm:h-6 sm:w-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>',p=x(),h=m("a"),h.innerHTML=`<svg viewBox="0 0 455 455" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current sm:h-6 sm:w-6"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"></path><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z
               M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087
              c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345
              c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537
              c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002
              z"></path></g></svg>`,v=x(),c=m("a"),c.innerHTML='<svg class="h-5 w-5 fill-current sm:h-6 sm:w-6" viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"></path></svg>',s(u,"class","invisible w-0 md:visible md:w-auto"),s(g,"href","https://github.com/EB1811"),s(g,"class","mx-2 flex items-center text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),s(h,"href","https://www.linkedin.com/in/emmanuils-borov"),s(h,"class","mx-2 flex items-center text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),s(c,"href","https://dev.to/emmanuilsb"),s(c,"class","mx-2 flex items-center text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),s(l,"class","flex items-center"),s(n,"class","flex items-center justify-between"),s(r,"class","container mx-auto px-6 py-4"),s(e,"class","sticky top-0 z-50 border-t-4 border-emerald-400 bg-white shadow transition-colors duration-500 dark:border-indigo-700 dark:bg-neutral-800")},m(k,j){I(k,e,j),i(e,r),i(r,n),i(n,a),i(n,d),i(n,l),i(l,u),$(f,u,null),i(l,o),i(l,g),i(l,p),i(l,h),i(l,v),i(l,c),w=!0},p:y,i(k){w||(_(f.$$.fragment,k),w=!0)},o(k){M(f.$$.fragment,k),w=!1},d(k){k&&E(e),L(f)}}}class Be extends z{constructor(e){super(),B(this,e,null,Ee,H,{})}}function ze(t){let e;return{c(){e=m("section"),e.innerHTML=`<div class="mx-auto max-w-5xl px-6 text-center"><h2 class="text-3xl font-semibold text-white">About Me</h2> <p class="mt-4 text-gray-400">I am someone who enjoys playing with different technologies; Typescript,
      frameworks such as React and Svelte♡, cloud development, and much more. I
      develop professionally with the AWS ecosystem, integrating services such
      as Lambda, Amplify, and DynamoDB. I am someone who loves to learn, as well
      as teach, sharing new techs I discover with the brilliant developer
      community.</p></div>`,s(e,"class","bg-gray-700 py-20 transition-colors duration-500 dark:bg-neutral-900")},m(r,n){I(r,e,n)},p:y,i:y,o:y,d(r){r&&E(e)}}}class Ie extends z{constructor(e){super(),B(this,e,null,ze,H,{})}}function Pe(t){let e,r,n,a,d,l,u;return{c(){e=m("a"),r=m("div"),n=m("h3"),a=V(t[0]),d=x(),l=m("span"),u=V(t[2]),s(n,"class","text-left text-lg font-medium text-gray-700 dark:text-gray-300"),s(l,"class","block text-sm font-light text-gray-600 dark:text-gray-300"),s(r,"class","flex items-center justify-between px-4 py-2"),s(e,"class","block w-full max-w-2xl rounded-md border-t-4 border-emerald-400 bg-white shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:border-indigo-700 dark:bg-neutral-800"),s(e,"href",t[1]),b(e,"mt-5",!t[3])},m(f,o){I(f,e,o),i(e,r),i(r,n),i(n,a),i(r,d),i(r,l),i(l,u)},p(f,[o]){o&1&&D(a,f[0]),o&4&&D(u,f[2]),o&2&&s(e,"href",f[1]),o&8&&b(e,"mt-5",!f[3])},i:y,o:y,d(f){f&&E(e)}}}function Oe(t,e,r){let{title:n}=e,{link:a}=e,{date:d}=e,{first:l=!1}=e;return t.$$set=u=>{"title"in u&&r(0,n=u.title),"link"in u&&r(1,a=u.link),"date"in u&&r(2,d=u.date),"first"in u&&r(3,l=u.first)},[n,a,d,l]}class X extends z{constructor(e){super(),B(this,e,Oe,Pe,H,{title:0,link:1,date:2,first:3})}}function Ve(t){let e,r,n,a,d,l,u,f,o,g,p,h,v;return l=new X({props:{title:"What I Learned From 1 Year as a Software Developer",date:"Aug 2022",link:"https://dev.to/emmanuilsb/what-i-learned-from-1-year-as-a-software-developer-3f6g",first:!0}}),f=new X({props:{title:"Stop Overcomplicating Web Development - Try Svelte",date:"Mar 2022",link:"https://dev.to/emmanuilsb/stop-overcomplicating-web-development-try-svelte-47ln"}}),g=new X({props:{title:"Stop Overcomplicating your State - Try Zustand",date:"Oct 2021",link:"https://dev.to/emmanuilsb/stop-overcomplicating-your-state-try-zustand-39p4"}}),{c(){e=m("section"),r=m("div"),n=m("h2"),n.textContent="Latest Articles",a=x(),d=m("div"),C(l.$$.fragment),u=x(),C(f.$$.fragment),o=x(),C(g.$$.fragment),p=x(),h=m("div"),h.innerHTML='<a href="https://dev.to/emmanuilsb" class="mx-2 flex items-center text-gray-600 hover:text-gray-500 hover:underline dark:text-gray-300 dark:hover:text-gray-200"><span>View More</span> <svg viewBox="0 0 120.64 122.88" class="ml-2 h-4 w-4" stroke="currentColor" fill="currentColor"><g><path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z"></path></g></svg></a>',s(n,"class","text-3xl font-semibold text-gray-800 dark:text-white"),s(d,"class","mt-10 flex flex-col items-center justify-center"),s(h,"class","mt-8 flex items-center justify-center"),s(r,"class","mx-auto max-w-5xl px-6 text-center"),s(e,"class","bg-white py-20 transition-colors duration-500 dark:bg-neutral-800")},m(c,w){I(c,e,w),i(e,r),i(r,n),i(r,a),i(r,d),$(l,d,null),i(d,u),$(f,d,null),i(d,o),$(g,d,null),i(r,p),i(r,h),v=!0},p:y,i(c){v||(_(l.$$.fragment,c),_(f.$$.fragment,c),_(g.$$.fragment,c),v=!0)},o(c){M(l.$$.fragment,c),M(f.$$.fragment,c),M(g.$$.fragment,c),v=!1},d(c){c&&E(e),L(l),L(f),L(g)}}}class Ne extends z{constructor(e){super(),B(this,e,null,Ve,H,{})}}function De(t){let e,r,n,a,d,l,u,f,o,g,p,h,v,c,w,k,j;return{c(){e=m("div"),r=m("div"),n=m("img"),d=x(),l=m("a"),u=m("div"),f=m("div"),f.innerHTML='<svg class="absolute right-0 top-2 h-3 w-3 text-gray-400" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.6 122.88"><g><path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"></path></g></svg>',o=x(),g=m("p"),p=V(t[0]),h=x(),v=m("p"),c=V(t[1]),w=x(),k=m("span"),j=V(t[2]),s(n,"class","h-full w-full object-cover"),ae(n.src,a=t[4])||s(n,"src",a),s(n,"alt",t[5]),s(r,"class","flex h-56 items-center justify-center overflow-hidden rounded-md border-b-8 border-emerald-400 bg-white transition-colors duration-500 dark:border-indigo-700 dark:bg-neutral-800"),s(f,"class","span relative"),s(g,"class","text-lg font-semibold text-white"),s(v,"class","mt-1 text-gray-300"),s(k,"class","mt-2 block text-gray-400"),s(u,"class","px-3 py-2 text-center text-sm"),s(l,"href",t[3]),s(l,"class","mt-5 block overflow-hidden rounded-md bg-gray-600 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-neutral-800"),s(e,"class","w-full max-w-xs")},m(T,S){I(T,e,S),i(e,r),i(r,n),i(e,d),i(e,l),i(l,u),i(u,f),i(u,o),i(u,g),i(g,p),i(u,h),i(u,v),i(v,c),i(u,w),i(u,k),i(k,j)},p(T,[S]){S&16&&!ae(n.src,a=T[4])&&s(n,"src",a),S&32&&s(n,"alt",T[5]),S&1&&D(p,T[0]),S&2&&D(c,T[1]),S&4&&D(j,T[2]),S&8&&s(l,"href",T[3])},i:y,o:y,d(T){T&&E(e)}}}function Fe(t,e,r){let{title:n}=e,{desc:a}=e,{tech:d}=e,{link:l}=e,{imgLink:u}=e,{imgAlt:f}=e;return t.$$set=o=>{"title"in o&&r(0,n=o.title),"desc"in o&&r(1,a=o.desc),"tech"in o&&r(2,d=o.tech),"link"in o&&r(3,l=o.link),"imgLink"in o&&r(4,u=o.imgLink),"imgAlt"in o&&r(5,f=o.imgAlt)},[n,a,d,l,u,f]}class ee extends z{constructor(e){super(),B(this,e,Fe,De,H,{title:0,desc:1,tech:2,link:3,imgLink:4,imgAlt:5})}}function Ge(t){let e,r,n,a,d,l,u,f,o,g,p,h,v,c,w,k,j,T,S,ne,W,ie,R,q;return v=new ee({props:{title:"Fair / Share",desc:"Website helping users share rent, share goods, and separate finances.",tech:"React + Firebase + .NET Core",link:"https://github.com/EB1811/Fair-Share",imgLink:"img/home-page-fairshare.PNG",imgAlt:"Image of Fair / Share website"}}),w=new ee({props:{title:"TaskScape",desc:"TaskScape is an attempt to build a more enticing task manager.",tech:"Vue.js + TypeScript",link:"https://github.com/EB1811/taskscape-vue.js",imgLink:"img/home-page-taskscape.PNG",imgAlt:"Image of TaskScape website"}}),j=new ee({props:{title:"Twitch Stream Finder",desc:"Chrome extension to find Twitch streams filtered by categories and viewer counts.",tech:"Svelte + Typescript + Vite.",link:"https://github.com/EB1811/TwitchDiscovererExtension",imgLink:"img/twitch-stream-finder.PNG",imgAlt:"Image of Twitch Stream Finder extension"}}),{c(){e=m("section"),r=m("div"),n=m("h2"),n.textContent="My Work",a=x(),d=m("div"),d.innerHTML=`<div class="flex h-96 items-center justify-center overflow-hidden rounded-md border-b-8 border-emerald-400 bg-white transition-colors duration-500 dark:border-indigo-700 dark:bg-neutral-800"><img class="h-full w-full object-cover" src="img/home-page-predira.PNG" alt=""/></div> <div class="mt-5 bg-gray-600 p-5 dark:bg-neutral-800"><h2 class="text-center text-lg font-semibold text-white">Predira Ltd</h2> <p class="text-sm text-gray-300">SaaS platform allowing users to create and maintain a custom trading
          platform, finetuning the products, maturities, and negotiation
          process.</p> <span class="mt-2 block text-sm text-gray-400">React + TypeScript + AWS (AppSync, Lambda, DynamoDB)</span></div>`,l=x(),u=m("hr"),f=x(),o=m("h2"),o.textContent="Personal Projects",g=x(),p=m("div"),h=m("div"),C(v.$$.fragment),c=x(),C(w.$$.fragment),k=x(),C(j.$$.fragment),T=x(),S=m("h2"),S.textContent="Tools",ne=x(),W=m("div"),W.innerHTML=`<a href="https://github.com/EB1811/twitch-to-clip?tab=readme-ov-file" class="mx-auto block max-w-xs overflow-hidden rounded-md bg-gray-600 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 dark:bg-neutral-800 lg:max-w-lg"><div class="px-3 py-2 text-center text-sm"><div class="span relative"><svg class="absolute right-0 top-2 h-3 w-3 text-gray-400" fill="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 122.6 122.88"><g><path d="M110.6,72.58c0-3.19,2.59-5.78,5.78-5.78c3.19,0,5.78,2.59,5.78,5.78v33.19c0,4.71-1.92,8.99-5.02,12.09 c-3.1,3.1-7.38,5.02-12.09,5.02H17.11c-4.71,0-8.99-1.92-12.09-5.02c-3.1-3.1-5.02-7.38-5.02-12.09V17.19 C0,12.48,1.92,8.2,5.02,5.1C8.12,2,12.4,0.08,17.11,0.08h32.98c3.19,0,5.78,2.59,5.78,5.78c0,3.19-2.59,5.78-5.78,5.78H17.11 c-1.52,0-2.9,0.63-3.91,1.63c-1.01,1.01-1.63,2.39-1.63,3.91v88.58c0,1.52,0.63,2.9,1.63,3.91c1.01,1.01,2.39,1.63,3.91,1.63h87.95 c1.52,0,2.9-0.63,3.91-1.63s1.63-2.39,1.63-3.91V72.58L110.6,72.58z M112.42,17.46L54.01,76.6c-2.23,2.27-5.89,2.3-8.16,0.07 c-2.27-2.23-2.3-5.89-0.07-8.16l56.16-56.87H78.56c-3.19,0-5.78-2.59-5.78-5.78c0-3.19,2.59-5.78,5.78-5.78h26.5 c5.12,0,11.72-0.87,15.65,3.1c2.48,2.51,1.93,22.52,1.61,34.11c-0.08,3-0.15,5.29-0.15,6.93c0,3.19-2.59,5.78-5.78,5.78 c-3.19,0-5.78-2.59-5.78-5.78c0-0.31,0.08-3.32,0.19-7.24C110.96,30.94,111.93,22.94,112.42,17.46L112.42,17.46z"></path></g></svg></div> <h2 class="text-center text-lg font-semibold text-white">Twitch-To-Clip</h2> <p class="mt-1 text-gray-300">CLI tool that allows you to download Twitch clips and convert them
            into vertical videos ideal for TikTok and YouTube Shorts.</p> <span class="mt-2 block text-sm text-gray-400">Python</span></div></a>`,ie=x(),R=m("div"),R.innerHTML='<a href="https://github.com/EB1811" class="flex items-center text-white hover:text-gray-200 hover:underline dark:text-gray-300 dark:hover:text-gray-200"><span>View More On Github</span> <svg viewBox="0 0 120.64 122.88" class="ml-2 h-4 w-4" stroke="currentColor" fill="currentColor"><g><path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z"></path></g></svg></a>',s(n,"class","text-3xl font-semibold text-white"),s(d,"class","mt-10"),s(u,"class","mt-12 border-gray-500"),s(o,"class","mt-10 text-2xl font-semibold text-white"),s(h,"class","grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"),s(p,"class","mt-10 flex items-center justify-center"),s(S,"class","mt-10 text-2xl font-semibold text-white"),s(W,"class","mt-10"),s(R,"class","mt-8 flex items-center justify-center"),s(r,"class","mx-auto max-w-5xl px-6 text-center"),s(e,"class","bg-gray-700 py-20 transition-colors duration-500 dark:bg-neutral-900")},m(A,fe){I(A,e,fe),i(e,r),i(r,n),i(r,a),i(r,d),i(r,l),i(r,u),i(r,f),i(r,o),i(r,g),i(r,p),i(p,h),$(v,h,null),i(h,c),$(w,h,null),i(h,k),$(j,h,null),i(r,T),i(r,S),i(r,ne),i(r,W),i(r,ie),i(r,R),q=!0},p:y,i(A){q||(_(v.$$.fragment,A),_(w.$$.fragment,A),_(j.$$.fragment,A),q=!0)},o(A){M(v.$$.fragment,A),M(w.$$.fragment,A),M(j.$$.fragment,A),q=!1},d(A){A&&E(e),L(v),L(w),L(j)}}}class We extends z{constructor(e){super(),B(this,e,null,Ge,H,{})}}function Re(t){let e;return{c(){e=m("footer"),e.textContent="Made with Svelte + Tailwind.",s(e,"class","bg-emerald-400 py-3 px-4 text-center font-semibold text-white transition-colors duration-500 dark:bg-indigo-800")},m(r,n){I(r,e,n)},p:y,i:y,o:y,d(r){r&&E(e)}}}class qe extends z{constructor(e){super(),B(this,e,null,Re,H,{})}}function Ze(t){let e,r,n,a,d,l,u,f,o,g,p,h,v;return r=new Be({}),a=new Se({}),l=new Ie({}),f=new Ne({}),g=new We({}),h=new qe({}),{c(){e=m("div"),C(r.$$.fragment),n=x(),C(a.$$.fragment),d=x(),C(l.$$.fragment),u=x(),C(f.$$.fragment),o=x(),C(g.$$.fragment),p=x(),C(h.$$.fragment),s(e,"class","bg-white transition-colors duration-500 dark:bg-neutral-800")},m(c,w){I(c,e,w),$(r,e,null),i(e,n),$(a,e,null),i(e,d),$(l,e,null),i(e,u),$(f,e,null),i(e,o),$(g,e,null),i(e,p),$(h,e,null),v=!0},p:y,i(c){v||(_(r.$$.fragment,c),_(a.$$.fragment,c),_(l.$$.fragment,c),_(f.$$.fragment,c),_(g.$$.fragment,c),_(h.$$.fragment,c),v=!0)},o(c){M(r.$$.fragment,c),M(a.$$.fragment,c),M(l.$$.fragment,c),M(f.$$.fragment,c),M(g.$$.fragment,c),M(h.$$.fragment,c),v=!1},d(c){c&&E(e),L(r),L(a),L(l),L(f),L(g),L(h)}}}class Ye extends z{constructor(e){super(),B(this,e,null,Ze,H,{})}}function Ke(t){let e,r;return e=new Ye({}),{c(){C(e.$$.fragment)},m(n,a){$(e,n,a),r=!0},p:y,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){M(e.$$.fragment,n),r=!1},d(n){L(e,n)}}}function Ue(t){return ye(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";(localStorage.getItem("theme")??e)==="dark"?document.body.classList.add("dark"):document.body.classList.remove("dark")}),[]}class Je extends z{constructor(e){super(),B(this,e,Ue,Ke,H,{})}}new Je({target:document.getElementById("app")});