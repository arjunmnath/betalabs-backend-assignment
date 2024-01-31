(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[961],{1774:function(e,t,n){"use strict";n.d(t,{f:function(){return i}});var r=n(4090);let o=["light","dark"],a="(prefers-color-scheme: dark)",l=(0,r.createContext)(void 0),i=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(s,e),c=["light","dark"],s=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:s=!0,storageKey:p="theme",themes:v=c,defaultTheme:w=i?"system":"light",attribute:E="data-theme",value:y,children:h,nonce:T}=e,[g,b]=(0,r.useState)(()=>d(p,w)),[C,x]=(0,r.useState)(()=>d(p)),S=y?Object.values(y):v,R=(0,r.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=f());let r=y?y[t]:t,a=n?m():null,l=document.documentElement;if("class"===E?(l.classList.remove(...S),r&&l.classList.add(r)):r?l.setAttribute(E,r):l.removeAttribute(E),s){let e=o.includes(w)?w:null,n=o.includes(t)?t:e;l.style.colorScheme=n}null==a||a()},[]),P=(0,r.useCallback)(e=>{b(e);try{localStorage.setItem(p,e)}catch(e){}},[t]),_=(0,r.useCallback)(e=>{x(f(e)),"system"===g&&i&&!t&&R("system")},[g,t]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(_),_(e),()=>e.removeListener(_)},[_]),(0,r.useEffect)(()=>{let e=e=>{e.key===p&&P(e.newValue||w)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[P]),(0,r.useEffect)(()=>{R(null!=t?t:g)},[t,g]);let k=(0,r.useMemo)(()=>({theme:g,setTheme:P,forcedTheme:t,resolvedTheme:"system"===g?C:g,themes:i?[...v,"system"]:v,systemTheme:i?C:void 0}),[g,P,t,C,i,v]);return r.createElement(l.Provider,{value:k},r.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:s,storageKey:p,themes:v,defaultTheme:w,attribute:E,value:y,children:h,attrs:S,nonce:T}),h)},u=(0,r.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:i,enableColorScheme:c,defaultTheme:s,value:u,attrs:d,nonce:m}=e,f="system"===s,p="class"===l?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),v=c?o.includes(s)&&s?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(s,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",w=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=u?u[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),i="";return c&&n&&!t&&o.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===l?i+=t||r?"c.add(".concat(a,")"):"null":r&&(i+="d[s](n,".concat(a,")")),i},E=t?"!function(){".concat(p).concat(w(t),"}()"):i?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(w("dark"),"}else{").concat(w("light"),"}}else if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(w(u?"x[e]":"e",!0),"}").concat(f?"":"else{"+w(s,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(u?"var x=".concat(JSON.stringify(u),";"):"").concat(w(u?"x[e]":"e",!0),"}else{").concat(w(s,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:E}})},()=>!0),d=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},f=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},6087:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},2869:function(e,t,n){"use strict";n.d(t,{aU:function(){return G},x8:function(){return Q},dk:function(){return B},zt:function(){return z},fC:function(){return J},Dx:function(){return Y},l_:function(){return X}});var r=n(2110),o=n(4090),a=n(9542),l=n(4991),i=n(1266),c=n(4104),s=n(9143),u=n(1260),d=n(7881),m=n(2642),f=n(9586),p=n(9830),v=n(9310),w=n(2618);let E=(0,o.forwardRef)((e,t)=>(0,o.createElement)(f.WV.span,(0,r.Z)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),y="ToastProvider",[h,T,g]=function(e){let t=e+"CollectionProvider",[n,r]=(0,c.b)(t),[a,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",d=o.forwardRef((e,t)=>{let{scope:n,children:r}=e,a=l(u,n),c=(0,i.e)(t,a.collectionRef);return o.createElement(s.g7,{ref:c},r)}),m=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:n}=e,r=o.useRef(null),l=o.useRef(new Map).current;return o.createElement(a,{scope:t,itemMap:l,collectionRef:r},n)},Slot:d,ItemSlot:o.forwardRef((e,t)=>{let{scope:n,children:r,...a}=e,c=o.useRef(null),u=(0,i.e)(t,c),d=l(m,n);return o.useEffect(()=>(d.itemMap.set(c,{ref:c,...a}),()=>void d.itemMap.delete(c))),o.createElement(s.g7,{[f]:"",ref:u},r)})},function(t){let n=l(e+"CollectionConsumer",t);return o.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(f,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},r]}("Toast"),[b,C]=(0,c.b)("Toast",[g]),[x,S]=b(y),R=e=>{let{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:a="right",swipeThreshold:l=50,children:i}=e,[c,s]=(0,o.useState)(null),[u,d]=(0,o.useState)(0),m=(0,o.useRef)(!1),f=(0,o.useRef)(!1);return(0,o.createElement)(h.Provider,{scope:t},(0,o.createElement)(x,{scope:t,label:n,duration:r,swipeDirection:a,swipeThreshold:l,toastCount:u,viewport:c,onViewportChange:s,onToastAdd:(0,o.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,o.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:m,isClosePausedRef:f},i))};R.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error("Invalid prop `label` supplied to `".concat(y,"`. Expected non-empty `string`.")):null};let P=["F8"],_="toast.viewportPause",k="toast.viewportResume",M=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,hotkey:a=P,label:l="Notifications ({hotkey})",...c}=e,s=S("ToastViewport",n),d=T(n),m=(0,o.useRef)(null),p=(0,o.useRef)(null),v=(0,o.useRef)(null),w=(0,o.useRef)(null),E=(0,i.e)(t,w,s.onViewportChange),y=a.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=s.toastCount>0;(0,o.useEffect)(()=>{let e=e=>{var t;a.every(t=>e[t]||e.code===t)&&(null===(t=w.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[a]),(0,o.useEffect)(()=>{let e=m.current,t=w.current;if(g&&e&&t){let n=()=>{if(!s.isClosePausedRef.current){let e=new CustomEvent(_);t.dispatchEvent(e),s.isClosePausedRef.current=!0}},r=()=>{if(s.isClosePausedRef.current){let e=new CustomEvent(k);t.dispatchEvent(e),s.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||r()},a=()=>{e.contains(document.activeElement)||r()};return e.addEventListener("focusin",n),e.addEventListener("focusout",o),e.addEventListener("pointermove",n),e.addEventListener("pointerleave",a),window.addEventListener("blur",n),window.addEventListener("focus",r),()=>{e.removeEventListener("focusin",n),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",n),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",n),window.removeEventListener("focus",r)}}},[g,s.isClosePausedRef]);let b=(0,o.useCallback)(e=>{let{tabbingDirection:t}=e,n=d().map(e=>{let n=e.ref.current,r=[n,...function(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}(n)];return"forwards"===t?r:r.reverse()});return("forwards"===t?n.reverse():n).flat()},[d]);return(0,o.useEffect)(()=>{let e=w.current;if(e){let t=t=>{let n=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!n){var r,o,a;let n=document.activeElement,l=t.shiftKey;if(t.target===e&&l){null===(r=p.current)||void 0===r||r.focus();return}let i=b({tabbingDirection:l?"backwards":"forwards"}),c=i.findIndex(e=>e===n);q(i.slice(c+1))?t.preventDefault():l?null===(o=p.current)||void 0===o||o.focus():null===(a=v.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[d,b]),(0,o.createElement)(u.I0,{ref:m,role:"region","aria-label":l.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:g?void 0:"none"}},g&&(0,o.createElement)(L,{ref:p,onFocusFromOutsideViewport:()=>{q(b({tabbingDirection:"forwards"}))}}),(0,o.createElement)(h.Slot,{scope:n},(0,o.createElement)(f.WV.ol,(0,r.Z)({tabIndex:-1},c,{ref:E}))),g&&(0,o.createElement)(L,{ref:v,onFocusFromOutsideViewport:()=>{q(b({tabbingDirection:"backwards"}))}}))}),L=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,onFocusFromOutsideViewport:a,...l}=e,i=S("ToastFocusProxy",n);return(0,o.createElement)(E,(0,r.Z)({"aria-hidden":!0,tabIndex:0},l,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let n=e.relatedTarget;null!==(t=i.viewport)&&void 0!==t&&t.contains(n)||a()}}))}),D="Toast",F=(0,o.forwardRef)((e,t)=>{let{forceMount:n,open:a,defaultOpen:i,onOpenChange:c,...s}=e,[u=!0,d]=(0,v.T)({prop:a,defaultProp:i,onChange:c});return(0,o.createElement)(m.z,{present:n||u},(0,o.createElement)(N,(0,r.Z)({open:u},s,{ref:t,onClose:()=>d(!1),onPause:(0,p.W)(e.onPause),onResume:(0,p.W)(e.onResume),onSwipeStart:(0,l.M)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,l.M)(e.onSwipeMove,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y","".concat(n,"px"))}),onSwipeCancel:(0,l.M)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,l.M)(e.onSwipeEnd,e=>{let{x:t,y:n}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x","".concat(t,"px")),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y","".concat(n,"px")),d(!1)})})))}),[I,A]=b(D,{onClose(){}}),N=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,type:c="foreground",duration:s,open:d,onClose:m,onEscapeKeyDown:v,onPause:w,onResume:E,onSwipeStart:y,onSwipeMove:T,onSwipeCancel:g,onSwipeEnd:b,...C}=e,x=S(D,n),[R,P]=(0,o.useState)(null),M=(0,i.e)(t,e=>P(e)),L=(0,o.useRef)(null),F=(0,o.useRef)(null),A=s||x.duration,N=(0,o.useRef)(0),O=(0,o.useRef)(A),V=(0,o.useRef)(0),{onToastAdd:W,onToastRemove:Z}=x,j=(0,p.W)(()=>{var e;(null==R?void 0:R.contains(document.activeElement))&&(null===(e=x.viewport)||void 0===e||e.focus()),m()}),q=(0,o.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(V.current),N.current=new Date().getTime(),V.current=window.setTimeout(j,e))},[j]);(0,o.useEffect)(()=>{let e=x.viewport;if(e){let t=()=>{q(O.current),null==E||E()},n=()=>{let e=new Date().getTime()-N.current;O.current=O.current-e,window.clearTimeout(V.current),null==w||w()};return e.addEventListener(_,n),e.addEventListener(k,t),()=>{e.removeEventListener(_,n),e.removeEventListener(k,t)}}},[x.viewport,A,w,E,q]),(0,o.useEffect)(()=>{d&&!x.isClosePausedRef.current&&q(A)},[d,A,x.isClosePausedRef,q]),(0,o.useEffect)(()=>(W(),()=>Z()),[W,Z]);let z=(0,o.useMemo)(()=>R?function e(t){let n=[];return Array.from(t.childNodes).forEach(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent&&n.push(t.textContent),t.nodeType===t.ELEMENT_NODE){let r=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!r){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&n.push(e)}else n.push(...e(t))}}}),n}(R):null,[R]);return x.viewport?(0,o.createElement)(o.Fragment,null,z&&(0,o.createElement)(K,{__scopeToast:n,role:"status","aria-live":"foreground"===c?"assertive":"polite","aria-atomic":!0},z),(0,o.createElement)(I,{scope:n,onClose:j},(0,a.createPortal)((0,o.createElement)(h.ItemSlot,{scope:n},(0,o.createElement)(u.fC,{asChild:!0,onEscapeKeyDown:(0,l.M)(v,()=>{x.isFocusedToastEscapeKeyDownRef.current||j(),x.isFocusedToastEscapeKeyDownRef.current=!1})},(0,o.createElement)(f.WV.li,(0,r.Z)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":d?"open":"closed","data-swipe-direction":x.swipeDirection},C,{ref:M,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,l.M)(e.onKeyDown,e=>{"Escape"!==e.key||(null==v||v(e.nativeEvent),e.nativeEvent.defaultPrevented||(x.isFocusedToastEscapeKeyDownRef.current=!0,j()))}),onPointerDown:(0,l.M)(e.onPointerDown,e=>{0===e.button&&(L.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,l.M)(e.onPointerMove,e=>{if(!L.current)return;let t=e.clientX-L.current.x,n=e.clientY-L.current.y,r=!!F.current,o=["left","right"].includes(x.swipeDirection),a=["left","up"].includes(x.swipeDirection)?Math.min:Math.max,l=o?a(0,t):0,i=o?0:a(0,n),c="touch"===e.pointerType?10:2,s={x:l,y:i},u={originalEvent:e,delta:s};r?(F.current=s,H("toast.swipeMove",T,u,{discrete:!1})):U(s,x.swipeDirection,c)?(F.current=s,H("toast.swipeStart",y,u,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>c||Math.abs(n)>c)&&(L.current=null)}),onPointerUp:(0,l.M)(e.onPointerUp,e=>{let t=F.current,n=e.target;if(n.hasPointerCapture(e.pointerId)&&n.releasePointerCapture(e.pointerId),F.current=null,L.current=null,t){let n=e.currentTarget,r={originalEvent:e,delta:t};U(t,x.swipeDirection,x.swipeThreshold)?H("toast.swipeEnd",b,r,{discrete:!0}):H("toast.swipeCancel",g,r,{discrete:!0}),n.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),x.viewport))):null});N.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error("Invalid prop `type` supplied to `".concat(D,"`. Expected `foreground | background`.")):null};let K=e=>{let{__scopeToast:t,children:n,...r}=e,a=S(D,t),[l,i]=(0,o.useState)(!1),[c,s]=(0,o.useState)(!1);return function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=(0,p.W)(e);(0,w.b)(()=>{let e=0,n=0;return e=window.requestAnimationFrame(()=>n=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(n)}},[t])}(()=>i(!0)),(0,o.useEffect)(()=>{let e=window.setTimeout(()=>s(!0),1e3);return()=>window.clearTimeout(e)},[]),c?null:(0,o.createElement)(d.h,{asChild:!0},(0,o.createElement)(E,r,l&&(0,o.createElement)(o.Fragment,null,a.label," ",n)))},O=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,...a}=e;return(0,o.createElement)(f.WV.div,(0,r.Z)({},a,{ref:t}))}),V=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,...a}=e;return(0,o.createElement)(f.WV.div,(0,r.Z)({},a,{ref:t}))}),W=(0,o.forwardRef)((e,t)=>{let{altText:n,...a}=e;return n?(0,o.createElement)(j,{altText:n,asChild:!0},(0,o.createElement)(Z,(0,r.Z)({},a,{ref:t}))):null});W.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `".concat("ToastAction","`"))};let Z=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,...a}=e,i=A("ToastClose",n);return(0,o.createElement)(j,{asChild:!0},(0,o.createElement)(f.WV.button,(0,r.Z)({type:"button"},a,{ref:t,onClick:(0,l.M)(e.onClick,i.onClose)})))}),j=(0,o.forwardRef)((e,t)=>{let{__scopeToast:n,altText:a,...l}=e;return(0,o.createElement)(f.WV.div,(0,r.Z)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":a||void 0},l,{ref:t}))});function H(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.currentTarget,l=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,f.jH)(a,l):a.dispatchEvent(l)}let U=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Math.abs(e.x),o=Math.abs(e.y),a=r>o;return"left"===t||"right"===t?a&&r>n:!a&&o>n};function q(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let z=R,X=M,J=F,Y=O,B=V,G=W,Q=Z}}]);