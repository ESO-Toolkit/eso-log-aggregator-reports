import{r as A,j as a,u as R,a as T,M as E,m as P,b as W,f as j,s as z}from"./iframe-BsuZ1_Gs.js";import{g as L,s as U,a as G,C as N,L as $,b as I,c as D}from"./analytics-C7LXMS2c.js";import{u as K,A as B}from"./AuthContext-DKAH8ZZF.js";import{u as F}from"./ReportFightContext-o5QQWiWj.js";import{c as H,a as C,b as V,d as Y,g as q,u as J,s as Q}from"./DefaultPropsProvider-rsssAxjN.js";import{s as X,u as Z}from"./useThemeProps-LxLaZzLD.js";import{T as v}from"./Typography-DNQM3Eol.js";import{B as ee}from"./Button-CCwvikGE.js";import{C as te}from"./CircularProgress-nkB2co6P.js";import{w as re}from"./storybookDecorators-BsyLwR_J.js";import"./preload-helper-Ct5FWWRu.js";import"./graphql-9BkzapAQ.js";import"./resourceEventsSlice-CXShtoJC.js";import"./useId-BKNp2ix5.js";import"./ButtonBase-B3mRKifx.js";import"./useTimeout-BrTM_eXT.js";import"./useEnhancedEffect-0-Xb0ZAF.js";import"./useForkRef-BvbUPK-2.js";import"./userReportsSlice-Dx9-l-Og.js";const oe=Y(),se=X("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[`maxWidth${C(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),ae=t=>Z({props:t,name:"MuiContainer",defaultTheme:oe}),ne=(t,r)=>{const o=n=>q(r,n),{classes:u,fixed:c,disableGutters:p,maxWidth:e}=t,s={root:["root",e&&`maxWidth${C(String(e))}`,c&&"fixed",p&&"disableGutters"]};return V(s,o,u)};function ie(t={}){const{createStyledComponent:r=se,useThemeProps:o=ae,componentName:u="MuiContainer"}=t,c=r(({theme:e,ownerState:s})=>({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",...!s.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}}),({theme:e,ownerState:s})=>s.fixed&&Object.keys(e.breakpoints.values).reduce((n,h)=>{const i=h,d=e.breakpoints.values[i];return d!==0&&(n[e.breakpoints.up(i)]={maxWidth:`${d}${e.breakpoints.unit}`}),n},{}),({theme:e,ownerState:s})=>({...s.maxWidth==="xs"&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},...s.maxWidth&&s.maxWidth!=="xs"&&{[e.breakpoints.up(s.maxWidth)]:{maxWidth:`${e.breakpoints.values[s.maxWidth]}${e.breakpoints.unit}`}}}));return A.forwardRef(function(s,n){const h=o(s),{className:i,component:d="div",disableGutters:m=!1,fixed:l=!1,maxWidth:w="lg",classes:he,...M}=h,O={...h,component:d,disableGutters:m,fixed:l,maxWidth:w},b=ne(O,u);return a.jsx(c,{as:d,ownerState:O,className:H(b.root,i),ref:n,...M})})}const ce=ie({createStyledComponent:Q("div",{name:"MuiContainer",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:o}=t;return[r.root,r[`maxWidth${C(String(o.maxWidth))}`],o.fixed&&r.fixed,o.disableGutters&&r.disableGutters]}}),useThemeProps:t=>J({props:t,name:"MuiContainer"})}),de="https://www.esologs.com/oauth/token",y=()=>{const t=F(),[r,o]=A.useState(null),{rebindAccessToken:u}=K(),[c]=R(),p=T();return A.useEffect(()=>{const e=c.get("code"),s=c.get("error"),n=L();if(s){o(`OAuth error: ${s}`);return}if(!e){o("Missing authorization code in URL parameters.");return}if(!n){o("Missing PKCE code verifier. Please restart the authentication process.");return}(async()=>{try{const i=G(),d=new URLSearchParams({grant_type:"authorization_code",code:e,client_id:N,code_verifier:n,redirect_uri:i}),m=await fetch(de,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:d.toString()});if(!m.ok)throw new Error("Token exchange failed");const l=await m.json();localStorage.setItem($,l.access_token),l.refresh_token&&localStorage.setItem("refresh_token",l.refresh_token),u();const w=I();D(),p(w)}catch(i){i instanceof Error?o(i.message):o("Unknown error")}})()},[t,u,c,p]),a.jsx(ce,{maxWidth:"sm",style:{textAlign:"center",marginTop:"4rem"},children:r?a.jsxs(a.Fragment,{children:[a.jsx(v,{color:"error",gutterBottom:!0,children:r}),r.includes("PKCE code verifier")&&a.jsx(ee,{variant:"contained",color:"primary",onClick:()=>U(),style:{marginTop:"1rem"},children:"Restart Authentication"})]}):a.jsxs(a.Fragment,{children:[a.jsx(te,{}),a.jsx(v,{children:"Exchanging authorization code for token..."})]})})};try{y.displayName="OAuthRedirect",y.__docgenInfo={description:"",displayName:"OAuthRedirect",props:{}}}catch{}const ue=(t,r)=>a.jsx(B,{children:a.jsx(t,{})}),pe=(t,r)=>{const o=r.parameters.apolloMocks||[];return a.jsx(E,{mocks:o,showWarnings:!0,children:a.jsx(t,{})})},Pe={title:"Pages/OAuthRedirect",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[pe,ue,re]},S=t=>{switch(t){case"success":return z;case"error":return j;case"loading":return[{...W(),delay:2e3}];case"state-mismatch":return[P("auth_code_123","invalid_state")];default:return[]}},g={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:S("success"),docs:{description:{story:"Shows the OAuth redirect handling when a valid authorization code is received."}}}},f={parameters:{router:{location:"/?error=access_denied&error_description=User%20denied%20access"},apolloMocks:S("error"),docs:{description:{story:"Shows the OAuth redirect handling when an error occurs during authorization."}}}},x={parameters:{router:{location:"/"},docs:{description:{story:"Shows the OAuth redirect handling when no authorization parameters are present."}}}},k={parameters:{router:{location:"/?code=auth_code_123&state=xyz"},apolloMocks:S("loading"),docs:{description:{story:"Shows the loading state while processing the OAuth redirect."}}}},_={parameters:{router:{location:"/?code=auth_code_123&state=invalid_state"},apolloMocks:S("state-mismatch"),docs:{description:{story:"Shows the OAuth redirect handling when the state parameter does not match the expected value."}}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const We=["SuccessfulRedirect","ErrorRedirect","MissingParameters","LoadingState","StateMismatch"];export{f as ErrorRedirect,k as LoadingState,x as MissingParameters,_ as StateMismatch,g as SuccessfulRedirect,We as __namedExportsOrder,Pe as default};
