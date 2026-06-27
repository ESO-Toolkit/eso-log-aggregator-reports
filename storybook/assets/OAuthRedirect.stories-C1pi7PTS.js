import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{B as n,Dt as r,H as i,I as a,L as o,a as s,i as c,n as l,o as u,r as d,s as f,t as ee}from"./iframe-pj6Z16FF.js";import{Dt as p,Et as te,Ft as m,Ht as ne,It as h,Mt as g,Nt as _,Rt as v,Vt as re,en as y,kt as ie,qt as b,rn as x,zt as ae}from"./material-Dhp-b28X.js";import{C as oe,E as se,O as ce,S as le,T as ue,b as de,k as fe,w as pe,x as me}from"./analytics-eW3d953G.js";import{n as S,r as he,t as ge}from"./AuthContext-Bzt7_Lwj.js";import{c as _e,l as ve}from"./ReportFightContext-BMc6zA2l.js";import{a as ye,t as be}from"./storybookDecorators-DHQYvg73.js";var C,w,T,E,xe=t((()=>{v(),m(),g(),C=e(r()),o(),se(),w=a(),T=`app_auth_port`,E=()=>{let[e]=i(),[t,n]=(0,C.useState)(null),[r,a]=(0,C.useState)(!1),o=e.get(`port`),s=o?parseInt(o,10):NaN,c=o&&!isNaN(s)&&s>=1&&s<=65535;return c?t?(0,w.jsx)(h,{maxWidth:`sm`,style:{textAlign:`center`,marginTop:`4rem`},children:(0,w.jsx)(_,{color:`error`,children:t})}):(0,w.jsxs)(h,{maxWidth:`sm`,style:{textAlign:`center`,marginTop:`4rem`},children:[(0,w.jsx)(_,{variant:`h6`,gutterBottom:!0,children:`Desktop App Authentication`}),(0,w.jsxs)(_,{style:{marginBottom:`1.5rem`},children:[`A desktop application is requesting ESO Logs authentication via port `,s,`. Click below to continue.`]}),(0,w.jsx)(ae,{variant:`contained`,onClick:()=>{c&&(a(!0),sessionStorage.setItem(T,o),ce().catch(()=>{n(`Failed to start authentication.`),a(!1)}))},disabled:r,children:r?`Redirecting…`:`Continue to ESO Logs`})]}):(0,w.jsx)(h,{maxWidth:`sm`,style:{textAlign:`center`,marginTop:`4rem`},children:(0,w.jsx)(_,{color:`error`,children:`Missing or invalid port parameter.`})})};try{T.displayName=`APP_AUTH_PORT_KEY`,T.__docgenInfo={description:`sessionStorage key — OAuthRedirect checks for this`,displayName:`APP_AUTH_PORT_KEY`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/AppAuth.tsx`,methods:[],props:{},tags:{}}}catch{}try{E.displayName=`AppAuth`,E.__docgenInfo={description:``,displayName:`AppAuth`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/AppAuth.tsx`,methods:[],props:{},tags:{}}}catch{}})),D,O,k,A,j,M,N,P,F,I,L,R,z,B,Se=t((()=>{te(),ie(),g(),D=e(r()),O=a(),k=x`
  0%, 100% { transform: translateY(0) }
  50%      { transform: translateY(-6px) }
`,A=x`
  0%   { transform: scale(0.8); opacity: 0.6 }
  50%  { transform: scale(1.15); opacity: 0 }
  100% { transform: scale(0.8); opacity: 0 }
`,j=x`
  0%   { stroke-dashoffset: 48 }
  100% { stroke-dashoffset: 0 }
`,M=x`
  0%   { opacity: 0; transform: translateY(18px) }
  100% { opacity: 1; transform: translateY(0) }
`,N=x`
  0%   { transform: translate(0, 0) scale(1) }
  33%  { transform: translate(30px, -20px) scale(1.1) }
  66%  { transform: translate(-15px, 15px) scale(0.95) }
  100% { transform: translate(0, 0) scale(1) }
`,P=x`
  0%   { background-position: -200% center }
  100% { background-position: 200% center }
`,F=b(p)(({theme:e})=>({position:`fixed`,inset:0,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`,background:e.palette.mode===`dark`?`radial-gradient(ellipse 80% 60% at 50% 40%, #0d1f3c 0%, #0b1220 70%, #060a12 100%)`:`radial-gradient(ellipse 80% 60% at 50% 40%, #e0efff 0%, #f8fafc 70%, #eef4fb 100%)`})),I=new Set([`size`,`x`,`y`,`delay`,`color`]),L=b(p,{shouldForwardProp:e=>!I.has(e)})(({size:e,x:t,y:n,delay:r,color:i})=>({position:`absolute`,width:e,height:e,left:t,top:n,borderRadius:`50%`,background:i,filter:`blur(60px)`,opacity:.35,animation:`${N} ${8+r}s ease-in-out infinite`,animationDelay:`${r}s`,pointerEvents:`none`,"@media (prefers-reduced-motion: reduce)":{animation:`none`}})),R=b(p)(({theme:e})=>({position:`relative`,zIndex:1,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:24,padding:`48px 56px`,maxWidth:440,width:`90vw`,borderRadius:24,background:e.palette.mode===`dark`?`linear-gradient(180deg, rgba(15,23,42,0.55) 0%, rgba(3,7,18,0.55) 100%)`:`linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,250,252,0.78) 100%)`,backdropFilter:`blur(24px)`,WebkitBackdropFilter:`blur(24px)`,border:`1px solid ${y(e.palette.mode===`dark`?`#38bdf8`:`#0f172a`,e.palette.mode===`dark`?.15:.08)}`,boxShadow:e.palette.mode===`dark`?`0 24px 80px rgba(0,0,0,0.45), 0 0 120px ${y(`#38bdf8`,.06)}`:`0 12px 40px rgba(15,23,42,0.08), 0 2px 6px rgba(15,23,42,0.04)`,animation:`${M} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:`0.2s`,"@media (prefers-reduced-motion: reduce)":{animation:`none`,opacity:1}})),z=b(p)(({theme:e})=>({position:`relative`,width:80,height:80,display:`flex`,alignItems:`center`,justifyContent:`center`,animation:`${k} 3s ease-in-out infinite`,animationDelay:`0.8s`,"@media (prefers-reduced-motion: reduce)":{animation:`none`},"&::before":{content:`""`,position:`absolute`,inset:-12,borderRadius:`50%`,border:`2px solid ${e.palette.mode===`dark`?`#22c55e`:`#059669`}`,animation:`${A} 2.4s ease-out infinite`,animationDelay:`1s`,"@media (prefers-reduced-motion: reduce)":{animation:`none`,opacity:0}}})),B=()=>{let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(10),[i,a]=(0,D.useState)(!1),o=(0,D.useRef)(null);(0,D.useEffect)(()=>{let e=setTimeout(()=>t(!0),2e3);return()=>clearTimeout(e)},[]),(0,D.useEffect)(()=>{if(e)return o.current=setInterval(()=>{r(e=>e<=1?0:e-1)},1e3),()=>clearInterval(o.current)},[e]),(0,D.useEffect)(()=>{n===0&&(clearInterval(o.current),window.close(),a(!0))},[n]);let s=(0,D.useId)();return(0,D.useEffect)(()=>{document.title=`Signed in — ESO Toolkit`},[]),(0,O.jsxs)(F,{role:`status`,"aria-live":`polite`,children:[(0,O.jsx)(L,{size:260,x:`10%`,y:`20%`,delay:0,color:`rgba(56,189,248,0.4)`}),(0,O.jsx)(L,{size:200,x:`70%`,y:`60%`,delay:2,color:`rgba(34,197,94,0.35)`}),(0,O.jsx)(L,{size:180,x:`50%`,y:`10%`,delay:4,color:`rgba(139,92,246,0.3)`}),(0,O.jsx)(L,{size:140,x:`80%`,y:`15%`,delay:1,color:`rgba(0,225,255,0.25)`}),(0,O.jsx)(L,{size:160,x:`20%`,y:`75%`,delay:3,color:`rgba(56,189,248,0.25)`}),(0,O.jsxs)(R,{children:[(0,O.jsx)(z,{children:(0,O.jsxs)(`svg`,{width:`80`,height:`80`,viewBox:`0 0 80 80`,fill:`none`,role:`img`,"aria-label":`Success checkmark`,children:[(0,O.jsx)(`circle`,{cx:`40`,cy:`40`,r:`36`,fill:`url(#${s})`,fillOpacity:`0.12`,stroke:`url(#${s})`,strokeWidth:`2.5`}),(0,O.jsx)(`path`,{d:`M26 40 L35 50 L54 30`,stroke:`url(#${s})`,strokeWidth:`3.5`,strokeLinecap:`round`,strokeLinejoin:`round`,fill:`none`,style:{strokeDasharray:48,strokeDashoffset:0,animation:`${j} 0.6s cubic-bezier(0.65, 0, 0.35, 1) both`,animationDelay:`0.6s`}}),(0,O.jsx)(`defs`,{children:(0,O.jsxs)(`linearGradient`,{id:s,x1:`0`,y1:`0`,x2:`80`,y2:`80`,children:[(0,O.jsx)(`stop`,{offset:`0%`,stopColor:`#22c55e`}),(0,O.jsx)(`stop`,{offset:`100%`,stopColor:`#38bdf8`})]})})]})}),(0,O.jsx)(_,{variant:`h4`,sx:{fontFamily:`Space Grotesk, Inter, system-ui`,fontWeight:700,textAlign:`center`,background:`linear-gradient(135deg, #22c55e 0%, #38bdf8 50%, #00e1ff 100%)`,backgroundClip:`text`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,backgroundSize:`200% auto`,animation:`${P} 4s linear infinite`,"@media (prefers-reduced-motion: reduce)":{animation:`none`,backgroundPosition:`center`}},children:`Signed in!`}),(0,O.jsxs)(_,{sx:e=>({color:e.palette.mode===`dark`?`#94a3b8`:`#64748b`,fontSize:`1.05rem`,textAlign:`center`,lineHeight:1.6,animation:`${M} 0.6s cubic-bezier(0.22, 1, 0.36, 1) both`,animationDelay:`0.5s`,"@media (prefers-reduced-motion: reduce)":{animation:`none`,opacity:1}}),children:[`You can close this tab and return to`,` `,(0,O.jsx)(p,{component:`span`,sx:{fontWeight:600,background:`linear-gradient(135deg, #38bdf8, #00e1ff)`,backgroundClip:`text`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`},children:`Kalpa`}),`.`]}),e&&(0,O.jsx)(_,{sx:e=>({color:y(e.palette.mode===`dark`?`#94a3b8`:`#64748b`,.6),fontSize:`0.8rem`,textAlign:`center`,animation:`${M} 0.4s ease both`,"@media (prefers-reduced-motion: reduce)":{animation:`none`,opacity:1}}),children:i?`You can safely close this tab now.`:`This tab will try to close in ${n}s`})]})]})}})),V,H,U,W,Ce=t((()=>{v(),re(),m(),g(),V=e(r()),o(),xe(),se(),S(),Se(),_e(),H=a(),U=`https://www.esologs.com/oauth/token`,W=()=>{let e=ve(),[t,r]=(0,V.useState)(null),[a,o]=(0,V.useState)(!1),{rebindAccessToken:s}=he(),[c]=i(),l=n(),u=(0,V.useRef)(null);return(0,V.useEffect)(()=>{let e=c.get(`code`),t=c.get(`error`),n=c.get(`state`),i=pe();if(t){r(`OAuth error: ${t}`);return}if(!e){r(`Missing authorization code in URL parameters.`);return}if(!i){r(`Missing PKCE code verifier. Please restart the authentication process.`);return}if(u.current===null&&(u.current=fe(n)),!u.current){r(`OAuth state mismatch. Possible CSRF — please restart the authentication process.`);return}let a=new AbortController;return(async()=>{try{let t=ue(),n=new URLSearchParams({grant_type:`authorization_code`,code:e,client_id:de,code_verifier:i,redirect_uri:t}),c=await fetch(U,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:n.toString(),signal:a.signal});if(!c.ok)throw Error(`Token exchange failed`);let u=await c.json();if(!u.access_token||typeof u.access_token!=`string`)throw Error(`Invalid token response — missing access_token`);let d=sessionStorage.getItem(T);if(d){sessionStorage.removeItem(T);let e=Number(d);if(!Number.isInteger(e)||e<1||e>65535){r(`Invalid desktop app port.`);return}let t=`http://localhost:${d}/callback`;try{let e=await fetch(t,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({access_token:u.access_token,refresh_token:u.refresh_token||null,expires_in:u.expires_in||3600}),signal:a.signal});if(!e.ok)throw Error(`Desktop app responded with ${e.status}`)}catch{if(a.signal.aborted)return;r(`Could not connect to the desktop application. Please make sure it is running and try again.`);return}if(a.signal.aborted)return;o(!0);return}if(a.signal.aborted)return;localStorage.setItem(me,u.access_token),u.refresh_token&&typeof u.refresh_token==`string`&&localStorage.setItem(`refresh_token`,u.refresh_token),s();let f=oe();le(),l(f)}catch(e){if(a.signal.aborted)return;e instanceof Error?r(e.message):r(`Unknown error`)}})(),()=>a.abort()},[e,s,c,l]),a?(0,H.jsx)(B,{}):(0,H.jsx)(h,{maxWidth:`sm`,style:{textAlign:`center`,marginTop:`4rem`},children:t?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(_,{color:`error`,gutterBottom:!0,role:`alert`,children:t}),t.includes(`PKCE code verifier`)&&(0,H.jsx)(ae,{variant:`contained`,color:`primary`,onClick:()=>ce(),style:{marginTop:`1rem`},children:`Restart Authentication`})]}):(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(ne,{}),(0,H.jsx)(_,{children:`Exchanging authorization code for token...`})]})})};try{W.displayName=`OAuthRedirect`,W.__docgenInfo={description:``,displayName:`OAuthRedirect`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/OAuthRedirect.tsx`,methods:[],props:{},tags:{}}}catch{}})),G,we,Te=t((()=>{S(),G=a(),we=(e,t)=>(0,G.jsx)(ge,{children:(0,G.jsx)(e,{})})})),K,Ee,De=t((()=>{u(),r(),K=a(),Ee=(e,t)=>(0,K.jsx)(f,{mocks:t.parameters.apolloMocks??[],showWarnings:!0,children:(0,K.jsx)(e,{})})})),Oe=t((()=>{Te(),De()})),ke,q,J,Y,X,Z,Q,$;t((()=>{l(),Ce(),Oe(),be(),ke={title:`Pages/OAuthRedirect`,component:W,parameters:{layout:`fullscreen`},tags:[`autodocs`],decorators:[Ee,we,ye]},q=e=>{switch(e){case`success`:return s;case`error`:return ee;case`loading`:return[{...d(),delay:2e3}];case`state-mismatch`:return[c(`auth_code_123`,`invalid_state`)];default:return[]}},J={parameters:{router:{location:`/?code=auth_code_123&state=xyz`},apolloMocks:q(`success`),docs:{description:{story:`Shows the OAuth redirect handling when a valid authorization code is received.`}}}},Y={parameters:{router:{location:`/?error=access_denied&error_description=User%20denied%20access`},apolloMocks:q(`error`),docs:{description:{story:`Shows the OAuth redirect handling when an error occurs during authorization.`}}}},X={parameters:{router:{location:`/`},docs:{description:{story:`Shows the OAuth redirect handling when no authorization parameters are present.`}}}},Z={parameters:{router:{location:`/?code=auth_code_123&state=xyz`},apolloMocks:q(`loading`),docs:{description:{story:`Shows the loading state while processing the OAuth redirect.`}}}},Q={parameters:{router:{location:`/?code=auth_code_123&state=invalid_state`},apolloMocks:q(`state-mismatch`),docs:{description:{story:`Shows the OAuth redirect handling when the state parameter does not match the expected value.`}}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`SuccessfulRedirect`,`ErrorRedirect`,`MissingParameters`,`LoadingState`,`StateMismatch`]}))();export{Y as ErrorRedirect,Z as LoadingState,X as MissingParameters,Q as StateMismatch,J as SuccessfulRedirect,$ as __namedExportsOrder,ke as default};