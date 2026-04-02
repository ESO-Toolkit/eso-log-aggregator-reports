import{r as i,j as t,u as U,a as F,M as B,m as Y,b as H,f as J,s as V}from"./iframe-DSHMjN0N.js";import{s as L,g as q,a as Q,C as X,L as Z,b as ee,c as te}from"./analytics-CQB5SeKq.js";import{c as re,a as D,b as oe,d as ae,g as se,u as ne,s as S,B as w,e as $,k}from"./Box-z27Xq41J.js";import{s as ie,u as ce}from"./useThemeProps-BWntpuos.js";import{T as m}from"./Typography-GJ4MWKAV.js";import{C as G}from"./CircularProgress-BkZKtkFN.js";import{u as de,A as le}from"./AuthContext-8x89IVnw.js";import{u as pe}from"./ReportFightContext-D8a_LSSJ.js";import{B as ue}from"./Button-egHvTueK.js";import{w as he}from"./storybookDecorators-DRmBfM5J.js";import"./preload-helper-Ct5FWWRu.js";import"./graphql-9BkzapAQ.js";import"./resourceEventsSlice-Dy_WvsYn.js";import"./useId-CvgHbNU4.js";import"./ButtonBase-DH9JYLv0.js";import"./useTimeout-DoBtp8CS.js";import"./useEnhancedEffect-CuLb2rZV.js";import"./useForkRef-BZLF_khd.js";import"./userReportsSlice-B1GnUppC.js";import"./playerDetails-PyWZli5-.js";const me=ae(),fe=ie("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[`maxWidth${D(String(r.maxWidth))}`],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),ge=e=>ce({props:e,name:"MuiContainer",defaultTheme:me}),xe=(e,a)=>{const r=n=>se(a,n),{classes:c,fixed:l,disableGutters:p,maxWidth:o}=e,s={root:["root",o&&`maxWidth${D(String(o))}`,l&&"fixed",p&&"disableGutters"]};return oe(s,r,c)};function ke(e={}){const{createStyledComponent:a=fe,useThemeProps:r=ge,componentName:c="MuiContainer"}=e,l=a(({theme:o,ownerState:s})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!s.disableGutters&&{paddingLeft:o.spacing(2),paddingRight:o.spacing(2),[o.breakpoints.up("sm")]:{paddingLeft:o.spacing(3),paddingRight:o.spacing(3)}}}),({theme:o,ownerState:s})=>s.fixed&&Object.keys(o.breakpoints.values).reduce((n,u)=>{const h=u,f=o.breakpoints.values[h];return f!==0&&(n[o.breakpoints.up(h)]={maxWidth:`${f}${o.breakpoints.unit}`}),n},{}),({theme:o,ownerState:s})=>({...s.maxWidth==="xs"&&{[o.breakpoints.up("xs")]:{maxWidth:Math.max(o.breakpoints.values.xs,444)}},...s.maxWidth&&s.maxWidth!=="xs"&&{[o.breakpoints.up(s.maxWidth)]:{maxWidth:`${o.breakpoints.values[s.maxWidth]}${o.breakpoints.unit}`}}}));return i.forwardRef(function(s,n){const u=r(s),{className:h,component:f="div",disableGutters:g=!1,fixed:M=!1,maxWidth:A="lg",classes:d,...x}=u,C={...u,component:f,disableGutters:g,fixed:M,maxWidth:A},b=xe(C,c);return t.jsx(l,{as:f,ownerState:C,className:re(b.root,h),ref:n,...x})})}const W=ke({createStyledComponent:S("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[`maxWidth${D(String(r.maxWidth))}`],r.fixed&&a.fixed,r.disableGutters&&a.disableGutters]}}),useThemeProps:e=>ne({props:e,name:"MuiContainer"})}),_="app_auth_port",N=()=>{const[e]=U(),[a,r]=i.useState(null);return i.useEffect(()=>{const c=e.get("port");if(!c||!/^\d+$/.test(c)){r("Missing or invalid port parameter.");return}sessionStorage.setItem(_,c),L().catch(()=>{r("Failed to start authentication.")})},[e]),a?t.jsx(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:t.jsx(m,{color:"error",children:a})}):t.jsxs(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:[t.jsx(G,{}),t.jsx(m,{style:{marginTop:"1rem"},children:"Redirecting to ESO Logs for authentication..."})]})};try{_.displayName="APP_AUTH_PORT_KEY",_.__docgenInfo={description:"sessionStorage key — OAuthRedirect checks for this",displayName:"APP_AUTH_PORT_KEY",props:{}}}catch{}try{N.displayName="AppAuth",N.__docgenInfo={description:"",displayName:"AppAuth",props:{}}}catch{}const be=k`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-6px) }
`,ye=k`
  0%   { transform: scale(0.8); opacity: 0.6 }
  50%  { transform: scale(1.15); opacity: 0 }
  100% { transform: scale(0.8); opacity: 0 }
`,_e=k`
  0%   { stroke-dashoffset: 48 }
  100% { stroke-dashoffset: 0 }
`,z=k`
  0%   { opacity: 0; transform: translateY(18px) }
  100% { opacity: 1; transform: translateY(0) }
`,Se=k`
  0%   { transform: translate(0, 0) scale(1) }
  33%  { transform: translate(30px, -20px) scale(1.1) }
  66%  { transform: translate(-15px, 15px) scale(0.95) }
  100% { transform: translate(0, 0) scale(1) }
`,we=k`
  0%   { background-position: -200% center }
  100% { background-position: 200% center }
`,Ae=S(w)(({theme:e})=>({position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:e.palette.mode==="dark"?"radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0b1220 70%, #060a12 100%)":"radial-gradient(ellipse 80% 60% at 50% 40%, #e0efff 0%, #f8fafc 70%, #eef4fb 100%)"})),Ce=new Set(["size","x","y","delay","color"]),y=S(w,{shouldForwardProp:e=>!Ce.has(e)})(({size:e,x:a,y:r,delay:c,color:l})=>({position:"absolute",width:e,height:e,left:a,top:r,borderRadius:"50%",background:l,filter:"blur(60px)",opacity:.35,animation:`${Se} ${8+c}s ease-in-out infinite`,animationDelay:`${c}s`,pointerEvents:"none","@media (prefers-reduced-motion: reduce)":{animation:"none"}})),ve=S(w)(({theme:e})=>({position:"relative",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:24,padding:"48px 56px",maxWidth:440,width:"90vw",borderRadius:24,background:e.palette.mode==="dark"?"linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(3,7,18,0.55) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.78) 100%)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:`1px solid ${$(e.palette.mode==="dark"?"#38bdf8":"#0f172a",e.palette.mode==="dark"?.15:.08)}`,boxShadow:e.palette.mode==="dark"?`0 24px 80px rgba(0,0,0,0.45), 0 0 120px ${$("#38bdf8",.06)}`:"0 12px 40px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04)",animation:`${z} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.2s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}})),je=S(w)(({theme:e})=>({position:"relative",width:80,height:80,display:"flex",alignItems:"center",justifyContent:"center",animation:`${be} 3s ease-in-out infinite`,animationDelay:"0.8s","@media (prefers-reduced-motion: reduce)":{animation:"none"},"&::before":{content:'""',position:"absolute",inset:-12,borderRadius:"50%",border:`2px solid ${e.palette.mode==="dark"?"#22c55e":"#059669"}`,animation:`${ye} 2.4s ease-out infinite`,animationDelay:"1s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:0}}})),Oe=()=>{const[e,a]=i.useState(!1),[r,c]=i.useState(10),[l,p]=i.useState(!1),o=i.useRef(null);i.useEffect(()=>{const n=setTimeout(()=>a(!0),2e3);return()=>clearTimeout(n)},[]),i.useEffect(()=>{if(e)return o.current=setInterval(()=>{c(n=>n<=1?0:n-1)},1e3),()=>clearInterval(o.current)},[e]),i.useEffect(()=>{r===0&&(clearInterval(o.current),window.close(),p(!0))},[r]);const s=i.useId();return i.useEffect(()=>{document.title="Signed in — ESO Toolkit"},[]),t.jsxs(Ae,{role:"status","aria-live":"polite",children:[t.jsx(y,{size:260,x:"10%",y:"20%",delay:0,color:"rgba(56,189,248,0.4)"}),t.jsx(y,{size:200,x:"70%",y:"60%",delay:2,color:"rgba(34,197,94,0.35)"}),t.jsx(y,{size:180,x:"50%",y:"10%",delay:4,color:"rgba(139,92,246,0.3)"}),t.jsx(y,{size:140,x:"80%",y:"15%",delay:1,color:"rgba(0,225,255,0.25)"}),t.jsx(y,{size:160,x:"20%",y:"75%",delay:3,color:"rgba(56,189,248,0.25)"}),t.jsxs(ve,{children:[t.jsx(je,{children:t.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 80 80",fill:"none",role:"img","aria-label":"Success checkmark",children:[t.jsx("circle",{cx:"40",cy:"40",r:"36",fill:`url(#${s})`,fillOpacity:"0.12",stroke:`url(#${s})`,strokeWidth:"2.5"}),t.jsx("path",{d:"M26 40 L35 50 L54 30",stroke:`url(#${s})`,strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",style:{strokeDasharray:48,strokeDashoffset:0,animation:`${_e} 0.6s cubic-bezier(0.65, 0, 0.35, 1) both`,animationDelay:"0.6s"}}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:s,x1:"0",y1:"0",x2:"80",y2:"80",children:[t.jsx("stop",{offset:"0%",stopColor:"#22c55e"}),t.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]})})]})}),t.jsx(m,{variant:"h4",sx:{fontFamily:"Space Grotesk, Inter, system-ui",fontWeight:700,textAlign:"center",background:"linear-gradient(135deg, #22c55e 0%, #38bdf8 50%, #00e1ff 100%)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundSize:"200% auto",animation:`${we} 4s linear infinite`,"@media (prefers-reduced-motion: reduce)":{animation:"none",backgroundPosition:"center"}},children:"Signed in!"}),t.jsxs(m,{sx:n=>({color:n.palette.mode==="dark"?"#94a3b8":"#64748b",fontSize:"1.05rem",textAlign:"center",lineHeight:1.6,animation:`${z} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:"0.5s","@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:["You can close this tab and return to"," ",t.jsx(w,{component:"span",sx:{fontWeight:600,background:"linear-gradient(135deg, #38bdf8, #00e1ff)",backgroundClip:"text",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Kalpa"}),"."]}),e&&t.jsx(m,{sx:n=>({color:$(n.palette.mode==="dark"?"#94a3b8":"#64748b",.6),fontSize:"0.8rem",textAlign:"center",animation:`${z} 0.4s ease both`,"@media (prefers-reduced-motion: reduce)":{animation:"none",opacity:1}}),children:l?"You can safely close this tab now.":`This tab will try to close in ${r}s`})]})]})},Te="https://www.esologs.com/oauth/token",I=()=>{const e=pe(),[a,r]=i.useState(null),[c,l]=i.useState(!1),{rebindAccessToken:p}=de(),[o]=U(),s=F();return i.useEffect(()=>{const n=o.get("code"),u=o.get("error"),h=q();if(u){r(`OAuth error: ${u}`);return}if(!n){r("Missing authorization code in URL parameters.");return}if(!h){r("Missing PKCE code verifier. Please restart the authentication process.");return}(async()=>{try{const g=Q(),M=new URLSearchParams({grant_type:"authorization_code",code:n,client_id:X,code_verifier:h,redirect_uri:g}),A=await fetch(Te,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:M.toString()});if(!A.ok)throw new Error("Token exchange failed");const d=await A.json(),x=sessionStorage.getItem(_);if(x){sessionStorage.removeItem(_);const b=Number(x);if(!Number.isInteger(b)||b<1||b>65535){r("Invalid desktop app port.");return}const K=`http://localhost:${x}/callback`;try{const v=await fetch(K,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({access_token:d.access_token,refresh_token:d.refresh_token||null,expires_in:d.expires_in||3600})});if(!v.ok)throw new Error(`Desktop app responded with ${v.status}`)}catch{const v=btoa(JSON.stringify({access_token:d.access_token,refresh_token:d.refresh_token||null,expires_in:d.expires_in||3600}));window.location.href=`http://localhost:${x}/callback?tokens=${encodeURIComponent(v)}`;return}l(!0);return}localStorage.setItem(Z,d.access_token),d.refresh_token&&localStorage.setItem("refresh_token",d.refresh_token),p();const C=ee();te(),s(C)}catch(g){g instanceof Error?r(g.message):r("Unknown error")}})()},[e,p,o,s]),c?t.jsx(Oe,{}):t.jsx(W,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:a?t.jsxs(t.Fragment,{children:[t.jsx(m,{color:"error",gutterBottom:!0,role:"alert",children:a}),a.includes("PKCE code verifier")&&t.jsx(ue,{variant:"contained",color:"primary",onClick:()=>L(),style:{marginTop:"1rem"},children:"Restart Authentication"})]}):t.jsxs(t.Fragment,{children:[t.jsx(G,{}),t.jsx(m,{children:"Exchanging authorization code for token..."})]})})};try{I.displayName="OAuthRedirect",I.__docgenInfo={description:"",displayName:"OAuthRedirect",props:{}}}catch{}const Re=(e,a)=>t.jsx(le,{children:t.jsx(e,{})}),Pe=(e,a)=>{const r=a.parameters.apolloMocks||[];return t.jsx(B,{mocks:r,showWarnings:!0,children:t.jsx(e,{})})},Xe={title:"Pages/OAuthRedirect",component:I,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[Pe,Re,he]},E=e=>{switch(e){case"success":return V;case"error":return J;case"loading":return[{...H(),delay:2e3}];case"state-mismatch":return[Y("auth_code_123","invalid_state")];default:return[]}},j={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:E("success"),docs:{description:{story:"Shows the OAuth redirect handling when a valid authorization code is received."}}}},O={parameters:{router:{location:"/?error=access_denied&error_description=User%20denied%20access"},apolloMocks:E("error"),docs:{description:{story:"Shows the OAuth redirect handling when an error occurs during authorization."}}}},T={parameters:{router:{location:"/"},docs:{description:{story:"Shows the OAuth redirect handling when no authorization parameters are present."}}}},R={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:E("loading"),docs:{description:{story:"Shows the loading state while processing the OAuth redirect."}}}},P={parameters:{router:{location:"/?code=auth_code_123&state=invalid_state"},apolloMocks:E("state-mismatch"),docs:{description:{story:"Shows the OAuth redirect handling when the state parameter does not match the expected value."}}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const Ze=["SuccessfulRedirect","ErrorRedirect","MissingParameters","LoadingState","StateMismatch"];export{O as ErrorRedirect,R as LoadingState,T as MissingParameters,P as StateMismatch,j as SuccessfulRedirect,Ze as __namedExportsOrder,Xe as default};
