import{t as i,o as t,z as U,x as F,d as Y,r as H,q,g as J,v as V}from"./iframe-A4JJeyJ3.js";import{n as B,e as Q,f as X,C as Z,L as ee,d as te,c as re}from"./analytics-8jHw-Qme.js";import{f as oe,e as I,g as ae,i as se,s as ne,M as ie,L as _,B as S,d as W,A as k}from"./Box-C_XPbAjY.js";import{s as ce,u as de}from"./useThemeProps-Bg6of-vT.js";import{T as m}from"./Typography-DYBM0QCh.js";import{B as G}from"./Button-CVGqiJfW.js";import{u as le,A as pe}from"./AuthContext-BjpKtpEM.js";import{u as ue}from"./ReportFightContext-DSIEHUuu.js";import{C as me}from"./CircularProgress-4bCHkQFI.js";import{c as he}from"./storybookDecorators-DpgoeUfp.js";import"./preload-helper-Ct5FWWRu.js";import"./graphql-CGX9Zyc3.js";import"./useId-DWg4B6Wt.js";import"./ButtonBase-BCR4A9hG.js";import"./useTimeout-CG63DsTo.js";import"./useEnhancedEffect-CLMrrLEP.js";import"./useForkRef-C3aJLW1B.js";import"./resourceEventsSlice-CPWliIMs.js";import"./userReportsSlice-BiszbOlU.js";import"./playerDetails-PyWZli5-.js";const fe=se(),ge=ce("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[`maxWidth${I(String(o.maxWidth))}`],o.fixed&&a.fixed,o.disableGutters&&a.disableGutters]}}),xe=e=>de({props:e,name:"MuiContainer",defaultTheme:fe}),ke=(e,a)=>{const o=n=>ne(a,n),{classes:c,fixed:d,disableGutters:l,maxWidth:r}=e,s={root:["root",r&&`maxWidth${I(String(r))}`,d&&"fixed",l&&"disableGutters"]};return ae(s,o,c)};function be(e={}){const{createStyledComponent:a=ge,useThemeProps:o=xe,componentName:c="MuiContainer"}=e,d=a(({theme:r,ownerState:s})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!s.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}}),({theme:r,ownerState:s})=>s.fixed&&Object.keys(r.breakpoints.values).reduce((n,h)=>{const f=h,u=r.breakpoints.values[f];return u!==0&&(n[r.breakpoints.up(f)]={maxWidth:`${u}${r.breakpoints.unit}`}),n},{}),({theme:r,ownerState:s})=>({...s.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},...s.maxWidth&&s.maxWidth!=="xs"&&{[r.breakpoints.up(s.maxWidth)]:{maxWidth:`${r.breakpoints.values[s.maxWidth]}${r.breakpoints.unit}`}}}));return i.forwardRef(function(s,n){const h=o(s),{className:f,component:u="div",disableGutters:N=!1,fixed:g=!1,maxWidth:P="lg",classes:R,...p}=h,x={...h,component:u,disableGutters:N,fixed:g,maxWidth:P},E=ke(x,c);return t.jsx(d,{as:u,ownerState:x,className:oe(E.root,f),ref:n,...p})})}const O=be({createStyledComponent:_("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[`maxWidth${I(String(o.maxWidth))}`],o.fixed&&a.fixed,o.disableGutters&&a.disableGutters]}}),useThemeProps:e=>ie({props:e,name:"MuiContainer"})}),y="app_auth_port",L=()=>{const[e]=U(),[a,o]=i.useState(null),[c,d]=i.useState(!1),l=e.get("port"),r=l?parseInt(l,10):NaN,s=l&&!isNaN(r)&&r>=1&&r<=65535,n=()=>{s&&(d(!0),sessionStorage.setItem(y,l),B().catch(()=>{o("Failed to start authentication."),d(!1)}))};return s?a?t.jsx(O,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:t.jsx(m,{color:"error",children:a})}):t.jsxs(O,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:[t.jsx(m,{variant:"h6",gutterBottom:!0,children:"Desktop App Authentication"}),t.jsxs(m,{style:{marginBottom:"1.5rem"},children:["A desktop application is requesting ESO Logs authentication via port ",r,". Click below to continue."]}),t.jsx(G,{variant:"contained",onClick:n,disabled:c,children:c?"Redirecting…":"Continue to ESO Logs"})]}):t.jsx(O,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:t.jsx(m,{color:"error",children:"Missing or invalid port parameter."})})};try{y.displayName="APP_AUTH_PORT_KEY",y.__docgenInfo={description:"sessionStorage key — OAuthRedirect checks for this",displayName:"APP_AUTH_PORT_KEY",props:{}}}catch{}try{L.displayName="AppAuth",L.__docgenInfo={description:"",displayName:"AppAuth",props:{}}}catch{}const ye=k`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-6px) }
`,_e=k`
  0%   { transform: scale(0.8); opacity: 0.6 }
  50%  { transform: scale(1.15); opacity: 0 }
  100% { transform: scale(0.8); opacity: 0 }
`,Se=k`
  0%   { stroke-dashoffset: 48 }
  100% { stroke-dashoffset: 0 }
`,z=k`
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
`,Ce=_(S)(({theme:e})=>({position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:e.palette.mode==="dark"?"radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0b1220 70%, #060a12 100%)":"radial-gradient(ellipse 80% 60% at 50% 40%, #e0efff 0%, #f8fafc 70%, #eef4fb 100%)"})),ve=new Set(["size","x","y","delay","color"]),b=_(S,{shouldForwardProp:e=>!ve.has(e)})(({size:e,x:a,y:o,delay:c,color:d})=>({position:"absolute",width:e,height:e,left:a,top:o,borderRadius:"50%",background:d,filter:"blur(60px)",opacity:.35,animation:`${we} ${8+c}s ease-in-out infinite`,animationDelay:`${c}s`,pointerEvents:"none","@media (prefers-reduced-motion: reduce)":{animation:"none"}})),je=_(S)(({theme:e})=>({position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"48px 56px",maxWidth:440,width:"90vw",borderRadius:24,background:e.palette.mode==="dark"?"linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(3,7,18,0.55) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.78) 100%)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:`1px solid ${W(e.palette.mode==="dark"?"#38bdf8":"#0f172a",e.palette.mode==="dark"?.15:.08)}`,boxShadow:e.palette.mode==="dark"?`0 24px 80px rgba(0,0,0,0.45), 0 0 120px ${W("#38bdf8",.06)}`:"0 12px 40px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04)",animation:`${z} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.2s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}})),Oe=_(S)(({theme:e})=>({position:"relative",width:80,height:80,display:"flex",alignItems:"center",justifyContent:"center",animation:`${ye} 3s ease-in-out infinite`,animationDelay:"0.8s","@media (prefers-reduced-motion: reduce)":{animation:"none"},"&::before":{content:'""',position:"absolute",inset:-12,borderRadius:"50%",border:`2px solid ${e.palette.mode==="dark"?"#22c55e":"#059669"}`,animation:`${_e} 2.4s ease-out infinite`,animationDelay:"1s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:0}}})),Te=()=>{const[e,a]=i.useState(!1),[o,c]=i.useState(10),[d,l]=i.useState(!1),r=i.useRef(null);i.useEffect(()=>{const n=setTimeout(()=>a(!0),2e3);return()=>clearTimeout(n)},[]),i.useEffect(()=>{if(e)return r.current=setInterval(()=>{c(n=>n<=1?0:n-1)},1e3),()=>clearInterval(r.current)},[e]),i.useEffect(()=>{o===0&&(clearInterval(r.current),window.close(),l(!0))},[o]);const s=i.useId();return i.useEffect(()=>{document.title="Signed in — ESO Toolkit"},[]),t.jsxs(Ce,{role:"status","aria-live":"polite",children:[t.jsx(b,{size:260,x:"10%",y:"20%",delay:0,color:"rgba(56,189,248,0.4)"}),t.jsx(b,{size:200,x:"70%",y:"60%",delay:2,color:"rgba(34,197,94,0.35)"}),t.jsx(b,{size:180,x:"50%",y:"10%",delay:4,color:"rgba(139,92,246,0.3)"}),t.jsx(b,{size:140,x:"80%",y:"15%",delay:1,color:"rgba(0,225,255,0.25)"}),t.jsx(b,{size:160,x:"20%",y:"75%",delay:3,color:"rgba(56,189,248,0.25)"}),t.jsxs(je,{children:[t.jsx(Oe,{children:t.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",role:"img","aria-label":"Success checkmark",children:[t.jsx("circle",{cx:"40",cy:"40",r:"36",fill:`url(#${s})`,fillOpacity:"0.12",stroke:`url(#${s})`,strokeWidth:"2.5"}),t.jsx("path",{d:"M26 40 L35 50 L54 30",stroke:`url(#${s})`,strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",style:{strokeDasharray:48,strokeDashoffset:0,animation:`${Se} 0.6s cubic-bezier(0.65, 0, 0.35, 1) both`,animationDelay:"0.6s"}}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:s,x1:"0",y1:"0",x2:"80",y2:"80",children:[t.jsx("stop",{offset:"0%",stopColor:"#22c55e"}),t.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]})})]})}),t.jsx(m,{variant:"h4",sx:{fontFamily:"Space Grotesk, Inter, system-ui",fontWeight:700,textAlign:"center",background:"linear-gradient(135deg, #22c55e 0%, #38bdf8 50%, #00e1ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% auto",animation:`${Ae} 4s linear infinite`,"@media (prefers-reduced-motion: reduce)":{animation:"none",backgroundPosition:"center"}},children:"Signed in!"}),t.jsxs(m,{sx:n=>({color:n.palette.mode==="dark"?"#94a3b8":"#64748b",fontSize:"1.05rem",textAlign:"center",lineHeight:1.6,animation:`${z} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.5s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:["You can close this tab and return to"," ",t.jsx(S,{component:"span",sx:{fontWeight:600,background:"linear-gradient(135deg, #38bdf8, #00e1ff)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Kalpa"}),"."]}),e&&t.jsx(m,{sx:n=>({color:W(n.palette.mode==="dark"?"#94a3b8":"#64748b",.6),fontSize:"0.8rem",textAlign:"center",animation:`${z} 0.4s ease both`,"@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:d?"You can safely close this tab now.":`This tab will try to close in ${o}s`})]})]})},Pe="https://www.esologs.com/oauth/token",$=()=>{const e=ue(),[a,o]=i.useState(null),[c,d]=i.useState(!1),{rebindAccessToken:l}=le(),[r]=U(),s=F();return i.useEffect(()=>{const n=r.get("code"),h=r.get("error"),f=Q();if(h){o(`OAuth error: ${h}`);return}if(!n){o("Missing authorization code in URL parameters.");return}if(!f){o("Missing PKCE code verifier. Please restart the authentication process.");return}const u=new AbortController;return(async()=>{try{const g=X(),P=new URLSearchParams({grant_type:"authorization_code",code:n,client_id:Z,code_verifier:f,redirect_uri:g}),R=await fetch(Pe,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:P.toString(),signal:u.signal});if(!R.ok)throw new Error("Token exchange failed");const p=await R.json();if(!p.access_token||typeof p.access_token!="string")throw new Error("Invalid token response — missing access_token");const x=sessionStorage.getItem(y);if(x){sessionStorage.removeItem(y);const M=Number(x);if(!Number.isInteger(M)||M<1||M>65535){o("Invalid desktop app port.");return}const K=`http://localhost:${x}/callback`;try{const D=await fetch(K,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:p.access_token,refresh_token:p.refresh_token||null,expires_in:p.expires_in||3600})});if(!D.ok)throw new Error(`Desktop app responded with ${D.status}`)}catch{o("Could not connect to the desktop application. Please make sure it is running and try again.");return}d(!0);return}localStorage.setItem(ee,p.access_token),p.refresh_token&&typeof p.refresh_token=="string"&&localStorage.setItem("refresh_token",p.refresh_token),l();const E=te();re(),s(E)}catch(g){if(u.signal.aborted)return;g instanceof Error?o(g.message):o("Unknown error")}})(),()=>u.abort()},[e,l,r,s]),c?t.jsx(Te,{}):t.jsx(O,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:a?t.jsxs(t.Fragment,{children:[t.jsx(m,{color:"error",gutterBottom:!0,role:"alert",children:a}),a.includes("PKCE code verifier")&&t.jsx(G,{variant:"contained",color:"primary",onClick:()=>B(),style:{marginTop:"1rem"},children:"Restart Authentication"})]}):t.jsxs(t.Fragment,{children:[t.jsx(me,{}),t.jsx(m,{children:"Exchanging authorization code for token..."})]})})};try{$.displayName="OAuthRedirect",$.__docgenInfo={description:"",displayName:"OAuthRedirect",props:{}}}catch{}const Re=(e,a)=>t.jsx(pe,{children:t.jsx(e,{})}),Ee=(e,a)=>{const o=a.parameters.apolloMocks||[];return t.jsx(Y,{mocks:o,showWarnings:!0,children:t.jsx(e,{})})},Ze={title:"Pages/OAuthRedirect",component:$,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[Ee,Re,he]},T=e=>{switch(e){case"success":return V;case"error":return J;case"loading":return[{...q(),delay:2e3}];case"state-mismatch":return[H("auth_code_123","invalid_state")];default:return[]}},w={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:T("success"),docs:{description:{story:"Shows the OAuth redirect handling when a valid authorization code is received."}}}},A={parameters:{router:{location:"/?error=access_denied&error_description=User%20denied%20access"},apolloMocks:T("error"),docs:{description:{story:"Shows the OAuth redirect handling when an error occurs during authorization."}}}},C={parameters:{router:{location:"/"},docs:{description:{story:"Shows the OAuth redirect handling when no authorization parameters are present."}}}},v={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:T("loading"),docs:{description:{story:"Shows the loading state while processing the OAuth redirect."}}}},j={parameters:{router:{location:"/?code=auth_code_123&state=invalid_state"},apolloMocks:T("state-mismatch"),docs:{description:{story:"Shows the OAuth redirect handling when the state parameter does not match the expected value."}}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const et=["SuccessfulRedirect","ErrorRedirect","MissingParameters","LoadingState","StateMismatch"];export{A as ErrorRedirect,v as LoadingState,C as MissingParameters,j as StateMismatch,w as SuccessfulRedirect,et as __namedExportsOrder,Ze as default};
