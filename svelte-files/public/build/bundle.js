var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function a(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,o;function l(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function c(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function f(){return h(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e,n){t.classList[n?"add":"remove"](e)}function w(t){o=t}function $(t){(function(){if(!o)throw new Error("Function called outside component initialization");return o})().$$.on_mount.push(t)}const k=[],b=[],y=[],M=[],C=Promise.resolve();let L=!1;function S(t){y.push(t)}let z=!1;const E=new Set;function A(){if(!z){z=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];w(e),_(e.$$)}for(w(null),k.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];E.has(e)||(E.add(e),e())}y.length=0}while(k.length);for(;M.length;)M.pop()();L=!1,z=!1,E.clear()}}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const j=new Set;function T(t,e){t&&t.i&&(j.delete(t),t.i(e))}function B(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),undefined.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function H(t){t&&t.c()}function I(t,n,s,i){const{fragment:o,on_mount:l,on_destroy:c,after_update:d}=t.$$;o&&o.m(n,s),i||S((()=>{const n=l.map(e).filter(a);c?c.push(...n):r(n),t.$$.on_mount=[]})),d.forEach(S)}function V(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(k.push(t),L||(L=!0,C.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,a,s,i,l,c,d,u=[-1]){const g=o;w(e);const h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(g?g.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:a.target||g.$$.root};d&&d(h.root);let f=!1;if(h.ctx=s?s(e,a.props||{},((t,n,...r)=>{const a=r.length?r[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=a)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](a),f&&F(e,t)),n})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();a.intro&&T(e.$$.fragment),I(e,a.target,a.anchor,a.customElement),A()}w(g)}class O{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function P(e){let n;return{c(){var t,e,r;n=u("section"),n.innerHTML='<div class="max-w-2xl px-6 text-center mx-auto"><h2 class="text-3xl font-semibold text-gray-800"><span class="bg-emerald-400 dark:bg-indigo-700 text-white rounded px-1 duration-700">Emmanuil Borovikovs</span></h2> \n    <p class="text-gray-600 dark:text-gray-300 mt-4">Software Engineer specialising in Frontend and Cloud development.</p> \n    <div class="flex items-end justify-center mt-16"><img width="450" src="img/eman-coding-black.svg" alt="eman digital nomad svg"/></div></div>',p(n,"class","bg-white mt-20 dark:bg-neutral-800 transition-colors duration-500"),t="min-height",e="380px",n.style.setProperty(t,e,r?"important":"")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class G extends O{constructor(t){super(),N(this,t,null,P,s,{})}}function R(e){let n,r,a,s,i,o,l,h,x,w,$,k,b;return{c(){n=u("div"),r=u("span"),a=g("svg"),s=g("path"),i=f(),o=u("div"),l=u("div"),h=f(),x=u("span"),w=g("svg"),$=g("path"),p(s,"stroke-linecap","round"),p(s,"stroke-linejoin","round"),p(s,"stroke-width","2"),p(s,"d","M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"),p(a,"class","h-6 w-6 transition-all duration-200 ease-in-out"),p(a,"fill","none"),p(a,"viewBox","0 0 24 24"),p(a,"stroke","currentColor"),v(a,"text-gray-400",e[0]),v(a,"text-gray-500",!e[0]),p(l,"class","bg-white w-4 h-4 rounded-full shadow-md transition-all duration-200 ease-in-out svelte-1bucn2w"),v(l,"toggle-dot",e[0]),p(o,"class","w-12 h-6 flex items-center rounded-full mx-2 px-1 cursor-pointer transition-all duration-200 ease-in-out"),v(o,"bg-indigo-700",e[0]),v(o,"bg-gray-300",!e[0]),p($,"stroke-linecap","round"),p($,"stroke-linejoin","round"),p($,"stroke-width","2"),p($,"d","M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"),p(w,"class","h-6 w-6 transition-all duration-200 ease-in-out"),p(w,"fill","none"),p(w,"viewBox","0 0 24 24"),p(w,"stroke","currentColor"),v(w,"text-gray-500",e[0]),v(w,"text-gray-400",!e[0]),p(n,"class","flex justify-center items-center mr-3")},m(t,m){var u,g,f,p;d(t,n,m),c(n,r),c(r,a),c(a,s),c(n,i),c(n,o),c(o,l),c(n,h),c(n,x),c(x,w),c(w,$),k||(u=o,g="click",f=e[1],u.addEventListener(g,f,p),b=()=>u.removeEventListener(g,f,p),k=!0)},p(t,[e]){1&e&&v(a,"text-gray-400",t[0]),1&e&&v(a,"text-gray-500",!t[0]),1&e&&v(l,"toggle-dot",t[0]),1&e&&v(o,"bg-indigo-700",t[0]),1&e&&v(o,"bg-gray-300",!t[0]),1&e&&v(w,"text-gray-500",t[0]),1&e&&v(w,"text-gray-400",!t[0])},i:t,o:t,d(t){t&&m(n),k=!1,b()}}}function W(t,e,n){let r=localStorage.getItem("theme")?"dark"===localStorage.getItem("theme"):!!window.matchMedia("(prefers-color-scheme: dark)").matches;return[r,()=>{var t;localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme",window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark");const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"dark"===(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:e)?(document.body.classList.add("dark"),n(0,r=!0)):(document.body.classList.remove("dark"),n(0,r=!1))}]}class q extends O{constructor(t){super(),N(this,t,W,R,s,{})}}function Q(e){let n,r,a,s,i,o,l,g,h,x,v,w,$,k,b;return g=new q({}),{c(){n=u("header"),r=u("div"),a=u("div"),s=u("div"),s.innerHTML='<a href="./" class="flex items-center text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"><svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 76.5"><path d="M47.53,61.26l.15.15a8.91,8.91,0,0,1-.18,12.46s-.11.13-.16.16a8.91,8.91,0,0,1-12.42-.1c-9.66-8.86-23.59-20-32.1-29.25a8.92,8.92,0,0,1,.11-13.12c5.41-6.71,24.44-22.15,32-29A8.93,8.93,0,0,1,49.12,13a1.66,1.66,0,0,1-.44.56l-27,24.78c4.32,4.19,8.09,7.31,11.86,10.43a172.63,172.63,0,0,1,14,12.48Zm27.82,0-.15.15a8.91,8.91,0,0,0,.18,12.46s.11.13.16.16A8.91,8.91,0,0,0,88,73.93c9.66-8.86,23.59-20,32.1-29.25A8.92,8.92,0,0,0,120,31.56c-5.41-6.71-24.44-22.15-32-29A8.93,8.93,0,0,0,73.76,13a1.77,1.77,0,0,0,.43.56l27,24.78c-4.32,4.19-8.1,7.31-11.86,10.43a172.63,172.63,0,0,0-14,12.48Z"></path></svg> \n          <span class="mx-3 font-medium text-sm md:text-base">Emmanuil B.</span></a>',i=f(),o=u("div"),l=u("div"),H(g.$$.fragment),h=f(),x=u("a"),x.innerHTML='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 fill-current"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>',v=f(),w=u("a"),w.innerHTML='<svg viewBox="0 0 455 455" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 fill-current"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M246.4,204.35v-0.665c-0.136,0.223-0.324,0.446-0.442,0.665H246.4z"></path><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M141.522,378.002H74.016V174.906h67.506V378.002z\n               M107.769,147.186h-0.446C84.678,147.186,70,131.585,70,112.085c0-19.928,15.107-35.087,38.211-35.087\n              c23.109,0,37.31,15.159,37.752,35.087C145.963,131.585,131.32,147.186,107.769,147.186z M385,378.002h-67.524V269.345\n              c0-27.291-9.756-45.92-34.195-45.92c-18.664,0-29.755,12.543-34.641,24.693c-1.776,4.34-2.24,10.373-2.24,16.459v113.426h-67.537\n              c0,0,0.905-184.043,0-203.096H246.4v28.779c8.973-13.807,24.986-33.547,60.856-33.547c44.437,0,77.744,29.02,77.744,91.398V378.002\n              z"></path></g></svg>',$=f(),k=u("a"),k.innerHTML='<svg class="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 32 447.99999999999994 448" xmlns="http://www.w3.org/2000/svg"><path d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35s5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58z"></path></svg>',p(l,"class","invisible w-0 md:w-auto md:visible"),p(x,"href","https://github.com/EB1811"),p(x,"class","flex items-center mx-2 text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),p(w,"href","https://www.linkedin.com/in/emmanuils-borov"),p(w,"class","flex items-center mx-2 text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),p(k,"href","https://dev.to/emmanuilsb"),p(k,"class","flex items-center mx-2 text-gray-800 hover:text-emerald-500 dark:text-gray-100 dark:hover:text-indigo-500"),p(o,"class","flex items-center"),p(a,"class","flex items-center justify-between"),p(r,"class","container mx-auto px-6 py-4"),p(n,"class","bg-white dark:bg-neutral-800 shadow border-t-4 border-emerald-400 dark:border-indigo-700 sticky top-0 z-50 transition-colors duration-500")},m(t,e){d(t,n,e),c(n,r),c(r,a),c(a,s),c(a,i),c(a,o),c(o,l),I(g,l,null),c(o,h),c(o,x),c(o,v),c(o,w),c(o,$),c(o,k),b=!0},p:t,i(t){b||(T(g.$$.fragment,t),b=!0)},o(t){B(g.$$.fragment,t),b=!1},d(t){t&&m(n),V(g)}}}class Z extends O{constructor(t){super(),N(this,t,null,Q,s,{})}}function D(e){let n;return{c(){n=u("section"),n.innerHTML='<div class="max-w-5xl px-6 mx-auto text-center"><h2 class="text-2xl font-semibold text-white">About Me</h2> \n    <p class="text-gray-400 mt-4">I enjoy playing with frontend technologies, having worked with Typescript,\n      and frameworks such as React, Vue and Svelte. Im also skilled in cloud\n      development, building apps with Firebase, and developing professionally\n      with the AWS ecosystem, integrating services such as Lambda, Amplify, and\n      DynamoDB. I am someone who loves to learn, as well as teach, sharing new\n      techs I discover with the brilliant developer community.</p></div>',p(n,"class","bg-gray-700 dark:bg-neutral-900 py-20 transition-colors duration-500")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class J extends O{constructor(t){super(),N(this,t,null,D,s,{})}}function K(e){let n,r,a,s,i,o,l;return{c(){n=u("a"),r=u("div"),a=u("h3"),s=h(e[0]),i=f(),o=u("span"),l=h(e[2]),p(a,"class","text-lg font-medium text-gray-700 dark:text-gray-300"),p(o,"class","block text-gray-600 dark:text-gray-300 font-light text-sm"),p(r,"class","flex items-center justify-between px-4 py-2"),p(n,"class","max-w-2xl w-full block bg-white dark:bg-neutral-800 shadow-md rounded-md border-t-4 border-emerald-400 dark:border-indigo-700 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"),p(n,"href",e[1]),v(n,"mt-8",!e[3])},m(t,e){d(t,n,e),c(n,r),c(r,a),c(a,s),c(r,i),c(r,o),c(o,l)},p(t,[e]){1&e&&x(s,t[0]),4&e&&x(l,t[2]),2&e&&p(n,"href",t[1]),8&e&&v(n,"mt-8",!t[3])},i:t,o:t,d(t){t&&m(n)}}}function U(t,e,n){let{title:r}=e,{link:a}=e,{date:s}=e,{first:i=!1}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"link"in t&&n(1,a=t.link),"date"in t&&n(2,s=t.date),"first"in t&&n(3,i=t.first)},[r,a,s,i]}class X extends O{constructor(t){super(),N(this,t,U,K,s,{title:0,link:1,date:2,first:3})}}function Y(e){let n,r,a,s,i,o,l,g,h,x,v,w,$;return o=new X({props:{title:"Writing cleaner JavaScript with ES6+",date:"Coming Soon",link:"https://dev.to/emmanuilsb",first:!0}}),g=new X({props:{title:"Take your async code to the next level with javascript ES8/ES9",date:"Coming Soon",link:"https://dev.to/emmanuilsb"}}),x=new X({props:{title:"Stop Overcomplicating your State – Try Zustand",date:"Oct 30 2021",link:"https://dev.to/emmanuilsb/stop-overcomplicating-your-state-try-zustand-39p4"}}),{c(){n=u("section"),r=u("div"),a=u("h2"),a.textContent="Latest Articles",s=f(),i=u("div"),H(o.$$.fragment),l=f(),H(g.$$.fragment),h=f(),H(x.$$.fragment),v=f(),w=u("div"),w.innerHTML='<a href="/" class="flex items-center mx-2 text-gray-600 dark:text-gray-300 hover:underline hover:text-gray-500 dark:hover:text-gray-200"><span>View More</span> \n        <svg viewBox="0 0 120.64 122.88" class="h-4 w-4 ml-2" stroke="currentColor" fill="currentColor"><g><path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z"></path></g></svg></a>',p(a,"class","text-2xl font-semibold text-gray-800 dark:text-white"),p(i,"class","flex flex-col items-center justify-center mt-6"),p(w,"class","flex items-center justify-center mt-12"),p(r,"class","max-w-5xl px-6 mx-auto text-center"),p(n,"class","bg-white dark:bg-neutral-800 py-20 transition-colors duration-500")},m(t,e){d(t,n,e),c(n,r),c(r,a),c(r,s),c(r,i),I(o,i,null),c(i,l),I(g,i,null),c(i,h),I(x,i,null),c(r,v),c(r,w),$=!0},p:t,i(t){$||(T(o.$$.fragment,t),T(g.$$.fragment,t),T(x.$$.fragment,t),$=!0)},o(t){B(o.$$.fragment,t),B(g.$$.fragment,t),B(x.$$.fragment,t),$=!1},d(t){t&&m(n),V(o),V(g),V(x)}}}class tt extends O{constructor(t){super(),N(this,t,null,Y,s,{})}}function et(e){let n,r,a,s,i,o,g,v,w,$,k,b,y,M,C;return{c(){n=u("div"),r=u("div"),a=u("img"),i=f(),o=u("a"),g=u("div"),v=u("p"),w=h(e[0]),$=f(),k=u("p"),b=h(e[1]),y=f(),M=u("span"),C=h(e[2]),p(a,"class","object-cover h-full w-full"),l(a.src,s=e[4])||p(a,"src",s),p(a,"alt",e[5]),p(r,"class","flex items-center justify-center h-56 bg-white dark:bg-neutral-800 border-b-8 border-emerald-400 dark:border-indigo-700 rounded-md overflow-hidden transition-colors duration-500"),p(v,"class","text-white font-semibold text-lg"),p(k,"class","text-gray-300 mt-1"),p(M,"class","block text-gray-400 mt-2"),p(g,"class","py-2 px-3 text-center text-sm"),p(o,"href",e[3]),p(o,"class","block bg-gray-600 dark:bg-neutral-800 mt-5 rounded-md overflow-hidden transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"),p(n,"class","max-w-xs w-full")},m(t,e){d(t,n,e),c(n,r),c(r,a),c(n,i),c(n,o),c(o,g),c(g,v),c(v,w),c(g,$),c(g,k),c(k,b),c(g,y),c(g,M),c(M,C)},p(t,[e]){16&e&&!l(a.src,s=t[4])&&p(a,"src",s),32&e&&p(a,"alt",t[5]),1&e&&x(w,t[0]),2&e&&x(b,t[1]),4&e&&x(C,t[2]),8&e&&p(o,"href",t[3])},i:t,o:t,d(t){t&&m(n)}}}function nt(t,e,n){let{title:r}=e,{desc:a}=e,{tech:s}=e,{link:i}=e,{imgLink:o}=e,{imgAlt:l}=e;return t.$$set=t=>{"title"in t&&n(0,r=t.title),"desc"in t&&n(1,a=t.desc),"tech"in t&&n(2,s=t.tech),"link"in t&&n(3,i=t.link),"imgLink"in t&&n(4,o=t.imgLink),"imgAlt"in t&&n(5,l=t.imgAlt)},[r,a,s,i,o,l]}class rt extends O{constructor(t){super(),N(this,t,nt,et,s,{title:0,desc:1,tech:2,link:3,imgLink:4,imgAlt:5})}}function at(e){let n,r,a,s,i,o,l,g,h,x,v,w,$,k;return l=new rt({props:{title:"Fair / Share",desc:"Website helping users share rent, share goods, and separate finances.",tech:"React + Firebase + .NET Core",link:"https://github.com/EB1811/Fair-Share",imgLink:"img/home-page-fairshare.PNG",imgAlt:"Image of Fair / Share website"}}),h=new rt({props:{title:"TaskScape",desc:"TaskScape is an attempt to build a more enticing task manager.",tech:"Vue.js + TypeScript",link:"https://github.com/EB1811/taskscape-vue.js",imgLink:"img/home-page-taskscape.PNG",imgAlt:"Image of TaskScape website"}}),v=new rt({props:{title:"Quiz Creator",desc:"A website where users can create and complete quizzes.",tech:"React + Firebase",link:"https://github.com/EB1811/SimpleQuizzes-React",imgLink:"img/home-page-quiz-app.PNG",imgAlt:"Image of Quiz Creator website"}}),{c(){n=u("section"),r=u("div"),a=u("h2"),a.textContent="My Work",s=f(),i=u("div"),o=u("div"),H(l.$$.fragment),g=f(),H(h.$$.fragment),x=f(),H(v.$$.fragment),w=f(),$=u("div"),$.innerHTML='<a href="https://github.com/EB1811" class="flex items-center text-white hover:underline hover:text-gray-200 dark:text-gray-300 dark:hover:text-gray-200"><span>View More On Github</span> \n        <svg viewBox="0 0 120.64 122.88" class="h-4 w-4 ml-2" stroke="currentColor" fill="currentColor"><g><path d="M54.03,108.91c-1.55,1.63-2.31,3.74-2.28,5.85c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12c1.58,1.5,3.6,2.23,5.61,2.2 c2.01-0.03,4.01-0.82,5.55-2.37c17.66-17.66,35.13-35.61,52.68-53.4c0.07-0.05,0.13-0.1,0.19-0.16c1.55-1.63,2.31-3.76,2.28-5.87 c-0.03-2.11-0.85-4.21-2.45-5.8l-0.27-0.26C100.43,37.47,82.98,19.87,65.46,2.36C63.93,0.82,61.93,0.03,59.92,0 c-2.01-0.03-4.03,0.7-5.61,2.21l-0.15,0.15c-1.57,1.58-2.38,3.66-2.41,5.76c-0.03,2.1,0.73,4.22,2.28,5.85l47.22,47.27 L54.03,108.91L54.03,108.91z M2.26,106.91c-1.54,1.62-2.29,3.73-2.26,5.83c0.03,2.11,0.84,4.2,2.44,5.79l0.12,0.12 c1.57,1.5,3.6,2.23,5.61,2.21c2.01-0.03,4.02-0.82,5.55-2.37C31.01,101.2,48.87,84.2,66.39,67.12c0.07-0.05,0.14-0.11,0.21-0.17 c1.55-1.63,2.31-3.76,2.28-5.87c-0.03-2.11-0.85-4.21-2.45-5.8C48.94,38.33,31.36,21.44,13.83,4.51l-0.12-0.13 c-1.53-1.54-3.53-2.32-5.54-2.35C6.16,2,4.14,2.73,2.56,4.23L2.41,4.38C0.84,5.96,0.03,8.05,0,10.14c-0.03,2.1,0.73,4.22,2.28,5.85 l47.18,45.24L2.26,106.91L2.26,106.91z"></path></g></svg></a>',p(a,"class","text-2xl font-semibold text-white"),p(o,"class","grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"),p(i,"class","flex items-center justify-center mt-10"),p($,"class","flex items-center justify-center mt-12"),p(r,"class","max-w-5xl px-6 mx-auto text-center"),p(n,"class","bg-gray-700 dark:bg-neutral-900 py-20 transition-colors duration-500")},m(t,e){d(t,n,e),c(n,r),c(r,a),c(r,s),c(r,i),c(i,o),I(l,o,null),c(o,g),I(h,o,null),c(o,x),I(v,o,null),c(r,w),c(r,$),k=!0},p:t,i(t){k||(T(l.$$.fragment,t),T(h.$$.fragment,t),T(v.$$.fragment,t),k=!0)},o(t){B(l.$$.fragment,t),B(h.$$.fragment,t),B(v.$$.fragment,t),k=!1},d(t){t&&m(n),V(l),V(h),V(v)}}}class st extends O{constructor(t){super(),N(this,t,null,at,s,{})}}function it(e){let n;return{c(){n=u("footer"),n.textContent="Made with Svelte + Tailwind.",p(n,"class","bg-emerald-400 dark:bg-indigo-800 text-white py-3 px-4 text-center transition-colors duration-500")},m(t,e){d(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class ot extends O{constructor(t){super(),N(this,t,null,it,s,{})}}function lt(e){let n,r,a,s,i,o,l,g,h,x,v,w,$;return r=new Z({}),s=new G({}),o=new J({}),g=new tt({}),x=new st({}),w=new ot({}),{c(){n=u("div"),H(r.$$.fragment),a=f(),H(s.$$.fragment),i=f(),H(o.$$.fragment),l=f(),H(g.$$.fragment),h=f(),H(x.$$.fragment),v=f(),H(w.$$.fragment),p(n,"class","bg-white dark:bg-neutral-800 transition-colors duration-500")},m(t,e){d(t,n,e),I(r,n,null),c(n,a),I(s,n,null),c(n,i),I(o,n,null),c(n,l),I(g,n,null),c(n,h),I(x,n,null),c(n,v),I(w,n,null),$=!0},p:t,i(t){$||(T(r.$$.fragment,t),T(s.$$.fragment,t),T(o.$$.fragment,t),T(g.$$.fragment,t),T(x.$$.fragment,t),T(w.$$.fragment,t),$=!0)},o(t){B(r.$$.fragment,t),B(s.$$.fragment,t),B(o.$$.fragment,t),B(g.$$.fragment,t),B(x.$$.fragment,t),B(w.$$.fragment,t),$=!1},d(t){t&&m(n),V(r),V(s),V(o),V(g),V(x),V(w)}}}class ct extends O{constructor(t){super(),N(this,t,null,lt,s,{})}}function dt(e){let n,r;return n=new ct({}),{c(){H(n.$$.fragment)},m(t,e){I(n,t,e),r=!0},p:t,i(t){r||(T(n.$$.fragment,t),r=!0)},o(t){B(n.$$.fragment,t),r=!1},d(t){V(n,t)}}}function mt(t){return $((()=>{var t;const e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"dark"===(null!==(t=localStorage.getItem("theme"))&&void 0!==t?t:e)?document.body.classList.add("dark"):document.body.classList.remove("dark")})),[]}return new class extends O{constructor(t){super(),N(this,t,mt,dt,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map