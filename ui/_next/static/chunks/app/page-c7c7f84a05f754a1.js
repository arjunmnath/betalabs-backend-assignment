(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7310:function(e,t,s){Promise.resolve().then(s.bind(s,4580))},4580:function(e,t,s){"use strict";s.r(t),s.d(t,{UserContext:function(){return ei},default:function(){return eo}});var a=s(3827),r=s(4090),n=s(1657);let l=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,n.cn)("w-full caption-bottom text-sm",s),...r})})});l.displayName="Table";let i=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("thead",{ref:t,className:(0,n.cn)("[&_tr]:border-b",s),...r})});i.displayName="TableHeader";let o=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,n.cn)("[&_tr:last-child]:border-0",s),...r})});o.displayName="TableBody",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,n.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r})}).displayName="TableFooter";let d=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tr",{ref:t,className:(0,n.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r})});d.displayName="TableRow";let c=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("th",{ref:t,className:(0,n.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...r})});c.displayName="TableHead";let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("td",{ref:t,className:(0,n.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...r})});m.displayName="TableCell";let u=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("caption",{ref:t,className:(0,n.cn)("mt-4 text-sm text-muted-foreground",s),...r})});u.displayName="TableCaption";var f=s(8819),x=s(2138);let p=f.fC,h=f.xz,j=f.h_;f.x8;let g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(f.aV,{ref:t,className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r})});g.displayName=f.aV.displayName;let y=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e;return(0,a.jsxs)(j,{children:[(0,a.jsx)(g,{}),(0,a.jsxs)(f.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...l,children:[r,(0,a.jsxs)(f.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(x.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});y.displayName=f.VY.displayName;let b=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};b.displayName="DialogHeader";let N=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(f.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});N.displayName=f.Dx.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(f.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...r})}).displayName=f.dk.displayName;var v=s(9143),w=s(2670),S=s(4602),T=s(7742);let C=(0,T.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),R=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(S.f,{ref:t,className:(0,n.cn)(C(),s),...r})});R.displayName=S.f.displayName;let A=w.RV,k=r.createContext({}),O=e=>{let{...t}=e;return(0,a.jsx)(k.Provider,{value:{name:t.name},children:(0,a.jsx)(w.Qr,{...t})})},E=()=>{let e=r.useContext(k),t=r.useContext(D),{getFieldState:s,formState:a}=(0,w.Gc)(),n=s(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:l}=t;return{id:l,name:e.name,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...n}},D=r.createContext({}),z=r.forwardRef((e,t)=>{let{className:s,...l}=e,i=r.useId();return(0,a.jsx)(D.Provider,{value:{id:i},children:(0,a.jsx)("div",{ref:t,className:(0,n.cn)("space-y-2",s),...l})})});z.displayName="FormItem";let I=r.forwardRef((e,t)=>{let{className:s,...r}=e,{error:l,formItemId:i}=E();return(0,a.jsx)(R,{ref:t,className:(0,n.cn)(l&&"text-destructive",s),htmlFor:i,...r})});I.displayName="FormLabel";let U=r.forwardRef((e,t)=>{let{...s}=e,{error:r,formItemId:n,formDescriptionId:l,formMessageId:i}=E();return(0,a.jsx)(v.g7,{ref:t,id:n,"aria-describedby":r?"".concat(l," ").concat(i):"".concat(l),"aria-invalid":!!r,...s})});U.displayName="FormControl",r.forwardRef((e,t)=>{let{className:s,...r}=e,{formDescriptionId:l}=E();return(0,a.jsx)("p",{ref:t,id:l,className:(0,n.cn)("text-sm text-muted-foreground",s),...r})}).displayName="FormDescription";let _=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e,{error:i,formMessageId:o}=E(),d=i?String(null==i?void 0:i.message):r;return d?(0,a.jsx)("p",{ref:t,id:o,className:(0,n.cn)("text-sm font-medium text-destructive",s),...l,children:d}):null});_.displayName="FormMessage";let F=(0,T.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),V=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:i=!1,...o}=e,d=i?v.g7:"button";return(0,a.jsx)(d,{className:(0,n.cn)(F({variant:r,size:l,className:s})),ref:t,...o})});V.displayName="Button";var M=s(2177);let B=r.forwardRef((e,t)=>{let{className:s,type:r,...l}=e;return(0,a.jsx)("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:t,...l})});B.displayName="Input";var P=s(248),W=s(2919),H=s.n(W),G=s(1270),J=s(7788),Y=()=>{let e=P.z.object({username:P.z.string().min(2).max(40),age:P.z.number().min(18).max(100),email:P.z.string().min(1,{message:"Field Required"}).email("Not a valid email"),mobile:P.z.string().refine(H().isMobilePhone)}),t=(0,w.cI)({resolver:(0,G.F)(e),defaultValues:{username:""}}),s=(0,r.useContext)(ei),n=async e=>{o(!1),l({title:"Adding User...."});let t=await fetch("http://localhost:8008/users",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),a=await t.json();console.log(a.message),200==a.code?(l({title:"Way To Go!",description:"User Has Been Successfully Added!"}),s.fetchUser()):l({title:"Oops!",description:"Something Went Wrong",variant:"destructive"})},{toast:l}=(0,J.pm)(),[i,o]=(0,r.useState)(!1);return(0,a.jsxs)(p,{open:i,onOpenChange:e=>o(e),children:[(0,a.jsx)(h,{children:(0,a.jsxs)(V,{className:"mx-16",onClick:()=>o(!i),children:["New ",(0,a.jsx)(M.pOD,{})]})}),(0,a.jsx)(y,{children:(0,a.jsxs)(b,{children:[(0,a.jsx)(N,{children:"Enter New User Details"}),(0,a.jsx)(A,{...t,children:(0,a.jsxs)("form",{onSubmit:t.handleSubmit(n),className:"space-y-8",children:[(0,a.jsxs)("div",{className:"m-6 p-4 grid w-full max-w-sm items-center gap-1.5",children:[(0,a.jsx)(O,{control:t.control,name:"username",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Username"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{id:"uname",type:"text",...t})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:t.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Email"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{type:"email",...t})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:t.control,name:"age",render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Age"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{name:s.name,ref:s.ref,value:Number.isNaN(s.value)?"":s.value,onBlur:s.onBlur,onChange:e=>{t.setValue(s.name,parseInt(e.target.value,10))}})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:t.control,name:"mobile",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Mobile No"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{...t})}),(0,a.jsx)(_,{})]})}})]}),(0,a.jsxs)("div",{className:"w-full flex gap-4 justify-end px-6",children:[(0,a.jsxs)(V,{variant:"secondary",onClick:()=>o(!i),children:[" ","Cancel"," "]}),(0,a.jsx)(V,{type:"submit",children:" Add "})]})]})})]})})]})},q=s(5687);let L=q.fC,X=q.xz,$=q.h_,Q=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(q.aV,{className:(0,n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r,ref:t})});Q.displayName=q.aV.displayName;let Z=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsxs)($,{children:[(0,a.jsx)(Q,{}),(0,a.jsx)(q.VY,{ref:t,className:(0,n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...r})]})});Z.displayName=q.VY.displayName;let K=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...s})};K.displayName="AlertDialogHeader";let ee=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};ee.displayName="AlertDialogFooter";let et=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(q.Dx,{ref:t,className:(0,n.cn)("text-lg font-semibold",s),...r})});et.displayName=q.Dx.displayName;let es=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(q.dk,{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",s),...r})});es.displayName=q.dk.displayName;let ea=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(q.aU,{ref:t,className:(0,n.cn)(F(),s),...r})});ea.displayName=q.aU.displayName;let er=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(q.$j,{ref:t,className:(0,n.cn)(F({variant:"outline"}),"mt-2 sm:mt-0",s),...r})});er.displayName=q.$j.displayName;var en=e=>{let[t,s]=(0,r.useState)(!1),{toast:n}=(0,J.pm)(),l=(0,r.useContext)(ei),i=async e=>{let t=await fetch("http://localhost:8008/users",{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:e})}),s=await t.json();console.log(s.message),200==s.code?(n({title:"Way To Go!",description:"User Has Been Successfully Deleted!"}),l.fetchUser()):n({title:"Oops!",description:"Something Went Wrong",variant:"destructive"})};return(0,a.jsxs)(L,{open:t,onOpenChange:e=>s(e),children:[(0,a.jsx)(X,{asChild:!0,children:(0,a.jsx)(V,{variant:"destructive",children:(0,a.jsx)(M.XHJ,{})})}),(0,a.jsxs)(Z,{children:[(0,a.jsxs)(K,{children:[(0,a.jsx)(et,{children:"Are you absolutely sure?"}),(0,a.jsx)(es,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),(0,a.jsxs)(ee,{children:[(0,a.jsx)(er,{children:"Cancel"}),(0,a.jsx)(ea,{onClick:()=>i(e.username),children:"Continue"})]})]})]})},el=e=>{let t=P.z.object({username:P.z.string().min(2).max(40),age:P.z.number().min(18).max(100),email:P.z.string().min(1,{message:"Field Required"}).email("Not a valid email"),mobile:P.z.string().refine(H().isMobilePhone)}),s=(0,w.cI)({resolver:(0,G.F)(t),defaultValues:{username:e.user.username,age:e.user.age,email:e.user.email,mobile:e.user.mobile.toString()}}),n=(0,r.useContext)(ei),l=async e=>{d(!1),i({title:"Adding User...."});let t=await fetch("http://localhost:8008/users",{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();console.log(s.message),200==s.code?(i({title:"Way To Go!",description:"User Has Been Successfully Added!"}),n.fetchUser()):i({title:"Oops!",description:"Something Went Wrong",variant:"destructive"})},{toast:i}=(0,J.pm)(),[o,d]=(0,r.useState)(!1);return(0,a.jsxs)(p,{open:o,onOpenChange:e=>d(e),children:[(0,a.jsx)(h,{children:(0,a.jsx)(V,{variant:"outline",children:(0,a.jsx)(M.JtS,{})})}),(0,a.jsx)(y,{children:(0,a.jsxs)(b,{children:[(0,a.jsx)(N,{children:"Enter New User Details"}),(0,a.jsx)(A,{...s,children:(0,a.jsxs)("form",{onSubmit:s.handleSubmit(l),className:"space-y-8",children:[(0,a.jsxs)("div",{className:"m-6 p-4 grid w-full max-w-sm items-center gap-1.5",children:[(0,a.jsx)(O,{control:s.control,name:"username",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Username"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{value:t.value,disabled:!0})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:s.control,name:"email",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Email"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{type:"email",...t})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:s.control,name:"age",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Age"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{name:t.name,ref:t.ref,value:Number.isNaN(t.value)?"":t.value,onBlur:t.onBlur,onChange:e=>{s.setValue(t.name,parseInt(e.target.value,10))}})}),(0,a.jsx)(_,{})]})}}),(0,a.jsx)(O,{control:s.control,name:"mobile",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(I,{children:"Mobile No"}),(0,a.jsx)(U,{children:(0,a.jsx)(B,{...t})}),(0,a.jsx)(_,{})]})}})]}),(0,a.jsxs)("div",{className:"w-full flex gap-4 justify-end px-6",children:[(0,a.jsxs)(V,{variant:"secondary",onClick:()=>d(!o),children:[" ","Cancel"," "]}),(0,a.jsx)(V,{type:"submit",children:" Add "})]})]})})]})})]})};let ei=(0,r.createContext)({fetchUser:async()=>{}});function eo(){let[e,t]=(0,r.useState)([]),s=async()=>{try{let e=await fetch("http://localhost:8008/users"),s=await e.json();t(s)}catch(e){alert("Run Backend!!!!")}};return(0,r.useEffect)(()=>{s()},[]),(0,a.jsx)(ei.Provider,{value:{fetchUser:s},children:(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"m-8  h-screen flex flex-col justify-start items-center",children:[(0,a.jsx)("div",{className:"flex w-full justify-end",children:(0,a.jsx)(Y,{})}),(0,a.jsxs)(l,{className:"p-8 w-[90vw]",children:[(0,a.jsx)(u,{children:"A list of Users."}),(0,a.jsx)(i,{children:(0,a.jsxs)(d,{children:[(0,a.jsx)(c,{className:"w-[100px] text-center",children:"Username"}),(0,a.jsx)(c,{className:"text-center",children:"Email"}),(0,a.jsx)(c,{className:"text-center",children:"Age"}),(0,a.jsx)(c,{className:"text-center",children:"Mobile"}),(0,a.jsx)(c,{className:"text-center",children:" Actions "})]})}),(0,a.jsx)(o,{children:e.map(e=>(0,a.jsxs)(d,{children:[(0,a.jsx)(m,{className:"font-medium",children:e.username}),(0,a.jsx)(m,{className:"text-center",children:e.email}),(0,a.jsx)(m,{className:"text-center",children:e.age}),(0,a.jsx)(m,{className:"text-center",children:(0,a.jsxs)("pre",{children:["+91 ",e.mobile]})}),(0,a.jsxs)(m,{className:"flex gap-4 justify-center",children:[(0,a.jsx)(el,{user:e}),(0,a.jsx)(en,{username:e.username})]})]},e.username))})]})]})})})}},7788:function(e,t,s){"use strict";s.d(t,{pm:function(){return u}});var a=s(4090);let r=0,n=new Map,l=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],d={toasts:[]};function c(e){d=i(d,e),o.forEach(e=>{e(d)})}function m(e){let{...t}=e,s=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function u(){let[e,t]=a.useState(d);return a.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},1657:function(e,t,s){"use strict";s.d(t,{cn:function(){return n}});var a=s(3167),r=s(1367);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m6)((0,a.W)(t))}}},function(e){e.O(0,[310,103,828,971,69,744],function(){return e(e.s=7310)}),_N_E=e.O()}]);