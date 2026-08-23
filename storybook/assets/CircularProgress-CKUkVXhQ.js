import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{D as i,E as a,F as o,I as s,O as c,T as l,c as u,d,f,g as p,j as m,m as h,o as g,p as _,r as v}from"./Box-C1NZhWRF.js";import{a as y,c as b,o as x,s as S}from"./Typography-BAQTIVEE.js";import{i as C,n as w}from"./emotion-react.browser.esm-B3wW069k.js";import{n as T}from"./zero-styled-DmBhiQv0.js";function E(e){return i(`MuiCircularProgress`,e)}function D(){return(D=t((()=>{a(),c(),l(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`])})))()}var O,k,A,j,M,N,P,F,I,L,R,z,B;function V(){return(V=t((()=>{O=e(n(),1),s(),T(),_(),d(),b(),x(),u(),D(),k=r(),A=44,j=C`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,M=C`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,N=typeof j==`string`?null:w`
        animation: ${j} 1.4s linear infinite;
      `,P=typeof M==`string`?null:w`
        animation: ${M} 1.4s ease-in-out infinite;
      `,F=e=>{let{classes:t,variant:n,color:r,disableShrink:i}=e,a={root:[`root`,n,`color${S(r)}`],svg:[`svg`],track:[`track`],circle:[`circle`,i&&`circleDisableShrink`]};return m(a,E,t)},I=p(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${S(n.color)}`]]}})(h(({theme:e})=>{let t=v(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...g(e,`transform`)}},{props:{variant:`indeterminate`},style:N||{animation:`${j} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(y()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),L=p(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),R=p(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(h(({theme:e})=>{let t=v(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...g(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:P||{animation:`${M} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),z=p(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(h(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),B=O.forwardRef(function(e,t){let n=f({props:e,name:`MuiCircularProgress`}),{className:r,color:i=`primary`,disableShrink:a=!1,enableTrackSlot:s=!1,min:c,max:l,size:u=40,style:d,thickness:p=3.6,value:m=n.min??0,variant:h=`indeterminate`,...g}=n,_=c??0,v=l??100,y={...n,color:i,disableShrink:a,size:u,thickness:p,value:m,variant:h,enableTrackSlot:s},b=F(y),x={},S={},C={};if(h===`determinate`){let e=2*Math.PI*((A-p)/2),t=v-_;x.strokeDasharray=e.toFixed(3),x.strokeDashoffset=t>0?`${((v-m)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,S.transform=`rotate(-90deg)`,C[`aria-valuenow`]=m,C[`aria-valuemin`]=_,C[`aria-valuemax`]=v}return(0,k.jsx)(I,{className:o(b.root,r),style:{width:u,height:u,...S,...d},ownerState:y,ref:t,role:`progressbar`,...C,...g,children:(0,k.jsxs)(L,{className:b.svg,ownerState:y,viewBox:`${A/2} ${A/2} ${A} ${A}`,children:[s?(0,k.jsx)(z,{className:b.track,ownerState:y,cx:A,cy:A,r:(A-p)/2,fill:`none`,strokeWidth:p,"aria-hidden":`true`}):null,(0,k.jsx)(R,{className:b.circle,style:x,ownerState:y,cx:A,cy:A,r:(A-p)/2,fill:`none`,strokeWidth:p})]})})})})))()}export{V as n,B as t};