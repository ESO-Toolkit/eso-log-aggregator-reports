import{r as m,j as s,u as E,a as z,M as N,m as I,b as L,f as $,s as G}from"./iframe-COfOhJ0Q.js";import{s as j,g as K,a as D,C as H,L as Y,b as B,c as F}from"./analytics-DfugHhDQ.js";import{c as J,a as T,b as V,d as q,g as Q,u as X,s as Z}from"./DefaultPropsProvider-B2i-xMxl.js";import{s as ee,u as te}from"./useThemeProps-Bwfftya_.js";import{T as w}from"./Typography-EKUhP_59.js";import{C as W}from"./CircularProgress-CYyxq-dL.js";import{u as re,A as oe}from"./AuthContext-B9BN_rgJ.js";import{u as se}from"./ReportFightContext-C3mXat10.js";import{B as ae}from"./Button-BNtTUTrE.js";import{w as ne}from"./storybookDecorators-C6wPNhPL.js";import"./preload-helper-Ct5FWWRu.js";import"./graphql-9BkzapAQ.js";import"./resourceEventsSlice-Dy_WvsYn.js";import"./useId-Dy8l29lc.js";import"./ButtonBase-CH0IOL3-.js";import"./useTimeout-DK-_gCQe.js";import"./useEnhancedEffect-CmAv1pJH.js";import"./useForkRef-8Y_5egE6.js";import"./userReportsSlice-DdF8tVNk.js";import"./playerDetails-PyWZli5-.js";const ie=q(),ce=ee("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${T(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),de=e=>te({props:e,name:"MuiContainer",defaultTheme:ie}),pe=(e,t)=>{const o=i=>Q(t,i),{classes:n,fixed:p,disableGutters:h,maxWidth:r}=e,a={root:["root",r&&`maxWidth${T(String(r))}`,p&&"fixed",h&&"disableGutters"]};return V(a,o,n)};function ue(e={}){const{createStyledComponent:t=ce,useThemeProps:o=de,componentName:n="MuiContainer"}=e,p=t(({theme:r,ownerState:a})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!a.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}}}),({theme:r,ownerState:a})=>a.fixed&&Object.keys(r.breakpoints.values).reduce((i,l)=>{const c=l,u=r.breakpoints.values[c];return u!==0&&(i[r.breakpoints.up(c)]={maxWidth:`${u}${r.breakpoints.unit}`}),i},{}),({theme:r,ownerState:a})=>({...a.maxWidth==="xs"&&{[r.breakpoints.up("xs")]:{maxWidth:Math.max(r.breakpoints.values.xs,444)}},...a.maxWidth&&a.maxWidth!=="xs"&&{[r.breakpoints.up(a.maxWidth)]:{maxWidth:`${r.breakpoints.values[a.maxWidth]}${r.breakpoints.unit}`}}}));return m.forwardRef(function(a,i){const l=o(a),{className:c,component:u="div",disableGutters:_=!1,fixed:d=!1,maxWidth:f="lg",classes:b,...C}=l,M={...l,component:u,disableGutters:_,fixed:d,maxWidth:f},U=pe(M,n);return s.jsx(p,{as:u,ownerState:M,className:J(U.root,c),ref:i,...C})})}const v=ue({createStyledComponent:Z("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${T(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>X({props:e,name:"MuiContainer"})}),g="app_auth_port",R=()=>{const[e]=E(),[t,o]=m.useState(null);return m.useEffect(()=>{const n=e.get("port");if(!n||!/^\d+$/.test(n)){o("Missing or invalid port parameter.");return}sessionStorage.setItem(g,n),j().catch(()=>{o("Failed to start authentication.")})},[e]),t?s.jsx(v,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:s.jsx(w,{color:"error",children:t})}):s.jsxs(v,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:[s.jsx(W,{}),s.jsx(w,{style:{marginTop:"1rem"},children:"Redirecting to ESO Logs for authentication..."})]})};try{g.displayName="APP_AUTH_PORT_KEY",g.__docgenInfo={description:"sessionStorage key — OAuthRedirect checks for this",displayName:"APP_AUTH_PORT_KEY",props:{}}}catch{}try{R.displayName="AppAuth",R.__docgenInfo={description:"",displayName:"AppAuth",props:{}}}catch{}const he="https://www.esologs.com/oauth/token",P=()=>{const e=se(),[t,o]=m.useState(null),{rebindAccessToken:n}=re(),[p]=E(),h=z();return m.useEffect(()=>{const r=p.get("code"),a=p.get("error"),i=K();if(a){o(`OAuth error: ${a}`);return}if(!r){o("Missing authorization code in URL parameters.");return}if(!i){o("Missing PKCE code verifier. Please restart the authentication process.");return}(async()=>{try{const c=D(),u=new URLSearchParams({grant_type:"authorization_code",code:r,client_id:H,code_verifier:i,redirect_uri:c}),_=await fetch(he,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:u.toString()});if(!_.ok)throw new Error("Token exchange failed");const d=await _.json(),f=sessionStorage.getItem(g);if(f){sessionStorage.removeItem(g);const C=btoa(JSON.stringify({access_token:d.access_token,refresh_token:d.refresh_token||null,expires_in:d.expires_in||3600}));window.location.href=`http://localhost:${f}/callback?tokens=${encodeURIComponent(C)}`;return}localStorage.setItem(Y,d.access_token),d.refresh_token&&localStorage.setItem("refresh_token",d.refresh_token),n();const b=B();F(),h(b)}catch(c){c instanceof Error?o(c.message):o("Unknown error")}})()},[e,n,p,h]),s.jsx(v,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:t?s.jsxs(s.Fragment,{children:[s.jsx(w,{color:"error",gutterBottom:!0,children:t}),t.includes("PKCE code verifier")&&s.jsx(ae,{variant:"contained",color:"primary",onClick:()=>j(),style:{marginTop:"1rem"},children:"Restart Authentication"})]}):s.jsxs(s.Fragment,{children:[s.jsx(W,{}),s.jsx(w,{children:"Exchanging authorization code for token..."})]})})};try{P.displayName="OAuthRedirect",P.__docgenInfo={description:"",displayName:"OAuthRedirect",props:{}}}catch{}const le=(e,t)=>s.jsx(oe,{children:s.jsx(e,{})}),me=(e,t)=>{const o=t.parameters.apolloMocks||[];return s.jsx(N,{mocks:o,showWarnings:!0,children:s.jsx(e,{})})},Ue={title:"Pages/OAuthRedirect",component:P,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[me,le,ne]},O=e=>{switch(e){case"success":return G;case"error":return $;case"loading":return[{...L(),delay:2e3}];case"state-mismatch":return[I("auth_code_123","invalid_state")];default:return[]}},x={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:O("success"),docs:{description:{story:"Shows the OAuth redirect handling when a valid authorization code is received."}}}},k={parameters:{router:{location:"/?error=access_denied&error_description=User%20denied%20access"},apolloMocks:O("error"),docs:{description:{story:"Shows the OAuth redirect handling when an error occurs during authorization."}}}},A={parameters:{router:{location:"/"},docs:{description:{story:"Shows the OAuth redirect handling when no authorization parameters are present."}}}},S={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:O("loading"),docs:{description:{story:"Shows the loading state while processing the OAuth redirect."}}}},y={parameters:{router:{location:"/?code=auth_code_123&state=invalid_state"},apolloMocks:O("state-mismatch"),docs:{description:{story:"Shows the OAuth redirect handling when the state parameter does not match the expected value."}}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const ze=["SuccessfulRedirect","ErrorRedirect","MissingParameters","LoadingState","StateMismatch"];export{k as ErrorRedirect,S as LoadingState,A as MissingParameters,y as StateMismatch,x as SuccessfulRedirect,ze as __namedExportsOrder,Ue as default};
