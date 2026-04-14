import{r as c,j as t,u as L,a as B,M as Y,m as H,b as J,f as V,s as q}from"./iframe-BHaC1mi6.js";import{s as G,g as Q,a as X,C as Z,L as ee,b as te,c as re}from"./analytics-DqXBq4T2.js";import{c as oe,a as N,b as ae,d as se,g as ne,u as ie,s as _,B as S,e as $,k}from"./Box-Dc0_Fz7r.js";import{s as ce,u as de}from"./useThemeProps-DYatFecC.js";import{T as g}from"./Typography-B1rahNOs.js";import{C as K}from"./CircularProgress-NselVyOV.js";import{u as le,A as pe}from"./AuthContext-DRFnwiqL.js";import{u as ue}from"./ReportFightContext-D9YHlY5f.js";import{B as he}from"./Button-BI2uEWVw.js";import{w as me}from"./storybookDecorators-BwzIkU_N.js";import"./preload-helper-Ct5FWWRu.js";import"./graphql-9BkzapAQ.js";import"./resourceEventsSlice-C8SEeSOo.js";import"./useId-C2bZovsl.js";import"./ButtonBase-CEW6KCr_.js";import"./useTimeout-BGV1Tcde.js";import"./useEnhancedEffect-B2eUEz4f.js";import"./useForkRef-BVLd8BDM.js";import"./userReportsSlice-CyhOGP83.js";import"./playerDetails-PyWZli5-.js";const fe=se(),ge=ce("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[`maxWidth${N(String(r.maxWidth))}`],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),xe=e=>de({props:e,name:"MuiContainer",defaultTheme:fe}),ke=(e,a)=>{const r=n=>ne(a,n),{classes:i,fixed:l,disableGutters:u,maxWidth:o}=e,s={root:["root",o&&`maxWidth${N(String(o))}`,l&&"fixed",u&&"disableGutters"]};return ae(s,r,i)};function be(e={}){const{createStyledComponent:a=ge,useThemeProps:r=xe,componentName:i="MuiContainer"}=e,l=a(({theme:o,ownerState:s})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!s.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}}),({theme:o,ownerState:s})=>s.fixed&&Object.keys(o.breakpoints.values).reduce((n,h)=>{const m=h,p=o.breakpoints.values[m];return p!==0&&(n[o.breakpoints.up(m)]={maxWidth:`${p}${o.breakpoints.unit}`}),n},{}),({theme:o,ownerState:s})=>({...s.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},...s.maxWidth&&s.maxWidth!=="xs"&&{[o.breakpoints.up(s.maxWidth)]:{maxWidth:`${o.breakpoints.values[s.maxWidth]}${o.breakpoints.unit}`}}}));return c.forwardRef(function(s,n){const h=r(s),{className:m,component:p="div",disableGutters:D=!1,fixed:x=!1,maxWidth:R="lg",classes:E,...d}=h,f={...h,component:p,disableGutters:D,fixed:x,maxWidth:R},P=ke(f,i);return t.jsx(l,{as:p,ownerState:f,className:oe(P.root,m),ref:n,...d})})}const W=be({createStyledComponent:_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[`maxWidth${N(String(r.maxWidth))}`],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),useThemeProps:e=>ie({props:e,name:"MuiContainer"})}),y="app_auth_port",U=()=>{const[e]=L(),[a,r]=c.useState(null);return c.useEffect(()=>{const i=e.get("port"),l=i?parseInt(i,10):NaN;if(!i||isNaN(l)||l<1||l>65535){r("Missing or invalid port parameter.");return}sessionStorage.setItem(y,i),G().catch(()=>{r("Failed to start authentication.")})},[e]),a?t.jsx(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:t.jsx(g,{color:"error",children:a})}):t.jsxs(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:[t.jsx(K,{}),t.jsx(g,{style:{marginTop:"1rem"},children:"Redirecting to ESO Logs for authentication..."})]})};try{y.displayName="APP_AUTH_PORT_KEY",y.__docgenInfo={description:"sessionStorage key — OAuthRedirect checks for this",displayName:"APP_AUTH_PORT_KEY",props:{}}}catch{}try{U.displayName="AppAuth",U.__docgenInfo={description:"",displayName:"AppAuth",props:{}}}catch{}const ye=k`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-6px) }
`,_e=k`
  0%   { transform: scale(0.8); opacity: 0.6 }
  50%  { transform: scale(1.15); opacity: 0 }
  100% { transform: scale(0.8); opacity: 0 }
`,Se=k`
  0%   { stroke-dashoffset: 48 }
  100% { stroke-dashoffset: 0 }
`,I=k`
  0%   { opacity: 0; transform: translateY(18px) }
  100% { opacity: 1; transform: translateY(0) }
`,we=k`
  0%   { transform: translate(0, 0) scale(1) }
  33%  { transform: translate(30px, -20px) scale(1.1) }
  66%  { transform: translate(-15px, 15px) scale(0.95) }
  100% { transform: translate(0, 0) scale(1) }
`,Ae=k`
  0%   { background-position: -200% center }
  100% { background-position: 200% center }
`,Ce=_(S)(({theme:e})=>({position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:e.palette.mode==="dark"?"radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0b1220 70%, #060a12 100%)":"radial-gradient(ellipse 80% 60% at 50% 40%, #e0efff 0%, #f8fafc 70%, #eef4fb 100%)"})),ve=new Set(["size","x","y","delay","color"]),b=_(S,{shouldForwardProp:e=>!ve.has(e)})(({size:e,x:a,y:r,delay:i,color:l})=>({position:"absolute",width:e,height:e,left:a,top:r,borderRadius:"50%",background:l,filter:"blur(60px)",opacity:.35,animation:`${we} ${8+i}s ease-in-out infinite`,animationDelay:`${i}s`,pointerEvents:"none","@media (prefers-reduced-motion: reduce)":{animation:"none"}})),je=_(S)(({theme:e})=>({position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"48px 56px",maxWidth:440,width:"90vw",borderRadius:24,background:e.palette.mode==="dark"?"linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(3,7,18,0.55) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.78) 100%)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:`1px solid ${$(e.palette.mode==="dark"?"#38bdf8":"#0f172a",e.palette.mode==="dark"?.15:.08)}`,boxShadow:e.palette.mode==="dark"?`0 24px 80px rgba(0,0,0,0.45), 0 0 120px ${$("#38bdf8",.06)}`:"0 12px 40px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04)",animation:`${I} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.2s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}})),Oe=_(S)(({theme:e})=>({position:"relative",width:80,height:80,display:"flex",alignItems:"center",justifyContent:"center",animation:`${ye} 3s ease-in-out infinite`,animationDelay:"0.8s","@media (prefers-reduced-motion: reduce)":{animation:"none"},"&::before":{content:'""',position:"absolute",inset:-12,borderRadius:"50%",border:`2px solid ${e.palette.mode==="dark"?"#22c55e":"#059669"}`,animation:`${_e} 2.4s ease-out infinite`,animationDelay:"1s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:0}}})),Te=()=>{const[e,a]=c.useState(!1),[r,i]=c.useState(10),[l,u]=c.useState(!1),o=c.useRef(null);c.useEffect(()=>{const n=setTimeout(()=>a(!0),2e3);return()=>clearTimeout(n)},[]),c.useEffect(()=>{if(e)return o.current=setInterval(()=>{i(n=>n<=1?0:n-1)},1e3),()=>clearInterval(o.current)},[e]),c.useEffect(()=>{r===0&&(clearInterval(o.current),window.close(),u(!0))},[r]);const s=c.useId();return c.useEffect(()=>{document.title="Signed in — ESO Toolkit"},[]),t.jsxs(Ce,{role:"status","aria-live":"polite",children:[t.jsx(b,{size:260,x:"10%",y:"20%",delay:0,color:"rgba(56,189,248,0.4)"}),t.jsx(b,{size:200,x:"70%",y:"60%",delay:2,color:"rgba(34,197,94,0.35)"}),t.jsx(b,{size:180,x:"50%",y:"10%",delay:4,color:"rgba(139,92,246,0.3)"}),t.jsx(b,{size:140,x:"80%",y:"15%",delay:1,color:"rgba(0,225,255,0.25)"}),t.jsx(b,{size:160,x:"20%",y:"75%",delay:3,color:"rgba(56,189,248,0.25)"}),t.jsxs(je,{children:[t.jsx(Oe,{children:t.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",role:"img","aria-label":"Success checkmark",children:[t.jsx("circle",{cx:"40",cy:"40",r:"36",fill:`url(#${s})`,fillOpacity:"0.12",stroke:`url(#${s})`,strokeWidth:"2.5"}),t.jsx("path",{d:"M26 40 L35 50 L54 30",stroke:`url(#${s})`,strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",style:{strokeDasharray:48,strokeDashoffset:0,animation:`${Se} 0.6s cubic-bezier(0.65, 0, 0.35, 1) both`,animationDelay:"0.6s"}}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:s,x1:"0",y1:"0",x2:"80",y2:"80",children:[t.jsx("stop",{offset:"0%",stopColor:"#22c55e"}),t.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]})})]})}),t.jsx(g,{variant:"h4",sx:{fontFamily:"Space Grotesk, Inter, system-ui",fontWeight:700,textAlign:"center",background:"linear-gradient(135deg, #22c55e 0%, #38bdf8 50%, #00e1ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% auto",animation:`${Ae} 4s linear infinite`,"@media (prefers-reduced-motion: reduce)":{animation:"none",backgroundPosition:"center"}},children:"Signed in!"}),t.jsxs(g,{sx:n=>({color:n.palette.mode==="dark"?"#94a3b8":"#64748b",fontSize:"1.05rem",textAlign:"center",lineHeight:1.6,animation:`${I} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.5s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:["You can close this tab and return to"," ",t.jsx(S,{component:"span",sx:{fontWeight:600,background:"linear-gradient(135deg, #38bdf8, #00e1ff)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Kalpa"}),"."]}),e&&t.jsx(g,{sx:n=>({color:$(n.palette.mode==="dark"?"#94a3b8":"#64748b",.6),fontSize:"0.8rem",textAlign:"center",animation:`${I} 0.4s ease both`,"@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:l?"You can safely close this tab now.":`This tab will try to close in ${r}s`})]})]})},Re="https://www.esologs.com/oauth/token",z=()=>{const e=ue(),[a,r]=c.useState(null),[i,l]=c.useState(!1),{rebindAccessToken:u}=le(),[o]=L(),s=B();return c.useEffect(()=>{const n=o.get("code"),h=o.get("error"),m=Q();if(h){r(`OAuth error: ${h}`);return}if(!n){r("Missing authorization code in URL parameters.");return}if(!m){r("Missing PKCE code verifier. Please restart the authentication process.");return}const p=new AbortController;return(async()=>{try{const x=X(),R=new URLSearchParams({grant_type:"authorization_code",code:n,client_id:Z,code_verifier:m,redirect_uri:x}),E=await fetch(Re,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:R.toString(),signal:p.signal});if(!E.ok)throw new Error("Token exchange failed");const d=await E.json();if(!d.access_token||typeof d.access_token!="string")throw new Error("Invalid token response — missing access_token");const f=sessionStorage.getItem(y);if(f){sessionStorage.removeItem(y);const M=Number(f);if(!Number.isInteger(M)||M<1||M>65535){r("Invalid desktop app port.");return}const F=`http://localhost:${f}/callback`;try{const w=await fetch(F,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:d.access_token,refresh_token:d.refresh_token||null,expires_in:d.expires_in||3600})});if(!w.ok)throw new Error(`Desktop app responded with ${w.status}`)}catch{const w=btoa(JSON.stringify({access_token:d.access_token,refresh_token:d.refresh_token||null,expires_in:d.expires_in||3600}));window.location.href=`http://localhost:${f}/callback?tokens=${encodeURIComponent(w)}`;return}l(!0);return}localStorage.setItem(ee,d.access_token),d.refresh_token&&typeof d.refresh_token=="string"&&localStorage.setItem("refresh_token",d.refresh_token),u();const P=te();re(),s(P)}catch(x){if(p.signal.aborted)return;x instanceof Error?r(x.message):r("Unknown error")}})(),()=>p.abort()},[e,u,o,s]),i?t.jsx(Te,{}):t.jsx(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:a?t.jsxs(t.Fragment,{children:[t.jsx(g,{color:"error",gutterBottom:!0,role:"alert",children:a}),a.includes("PKCE code verifier")&&t.jsx(he,{variant:"contained",color:"primary",onClick:()=>G(),style:{marginTop:"1rem"},children:"Restart Authentication"})]}):t.jsxs(t.Fragment,{children:[t.jsx(K,{}),t.jsx(g,{children:"Exchanging authorization code for token..."})]})})};try{z.displayName="OAuthRedirect",z.__docgenInfo={description:"",displayName:"OAuthRedirect",props:{}}}catch{}const Ee=(e,a)=>t.jsx(pe,{children:t.jsx(e,{})}),Pe=(e,a)=>{const r=a.parameters.apolloMocks||[];return t.jsx(Y,{mocks:r,showWarnings:!0,children:t.jsx(e,{})})},Ze={title:"Pages/OAuthRedirect",component:z,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[Pe,Ee,me]},T=e=>{switch(e){case"success":return q;case"error":return V;case"loading":return[{...J(),delay:2e3}];case"state-mismatch":return[H("auth_code_123","invalid_state")];default:return[]}},A={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:T("success"),docs:{description:{story:"Shows the OAuth redirect handling when a valid authorization code is received."}}}},C={parameters:{router:{location:"/?error=access_denied&error_description=User%20denied%20access"},apolloMocks:T("error"),docs:{description:{story:"Shows the OAuth redirect handling when an error occurs during authorization."}}}},v={parameters:{router:{location:"/"},docs:{description:{story:"Shows the OAuth redirect handling when no authorization parameters are present."}}}},j={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:T("loading"),docs:{description:{story:"Shows the loading state while processing the OAuth redirect."}}}},O={parameters:{router:{location:"/?code=auth_code_123&state=invalid_state"},apolloMocks:T("state-mismatch"),docs:{description:{story:"Shows the OAuth redirect handling when the state parameter does not match the expected value."}}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    router: {
      location: '/?code=auth_code_123&state=xyz'
    },
    apolloMocks: createOAuthMockScenario('success'),
    docs: {
      description: {
        story: 'Shows the OAuth redirect handling when a valid authorization code is received.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    router: {
      location: '/?error=access_denied&error_description=User%20denied%20access'
    },
    apolloMocks: createOAuthMockScenario('error'),
    docs: {
      description: {
        story: 'Shows the OAuth redirect handling when an error occurs during authorization.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    router: {
      location: '/'
    },
    docs: {
      description: {
        story: 'Shows the OAuth redirect handling when no authorization parameters are present.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    router: {
      location: '/?code=auth_code_123&state=xyz'
    },
    apolloMocks: createOAuthMockScenario('loading'),
    docs: {
      description: {
        story: 'Shows the loading state while processing the OAuth redirect.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    router: {
      location: '/?code=auth_code_123&state=invalid_state'
    },
    apolloMocks: createOAuthMockScenario('state-mismatch'),
    docs: {
      description: {
        story: 'Shows the OAuth redirect handling when the state parameter does not match the expected value.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}};const et=["SuccessfulRedirect","ErrorRedirect","MissingParameters","LoadingState","StateMismatch"];export{C as ErrorRedirect,j as LoadingState,v as MissingParameters,O as StateMismatch,A as SuccessfulRedirect,et as __namedExportsOrder,Ze as default};
