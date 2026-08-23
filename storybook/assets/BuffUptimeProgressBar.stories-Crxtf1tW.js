import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{D as i,E as a,F as o,I as s,O as c,T as l,c as u,d,f,g as p,j as m,m as h,n as g,o as _,p as v,r as y,t as b}from"./Box-C1NZhWRF.js";import{a as x,c as ee,n as te,o as ne,s as S,t as C}from"./Typography-BAQTIVEE.js";import{i as w,n as T}from"./emotion-react.browser.esm-B3wW069k.js";import{n as re}from"./zero-styled-DmBhiQv0.js";import{a as ie,i as ae}from"./useId-D4mK23B_.js";import{n as oe,t as se}from"./useTheme-DwfIsuzz.js";import{n as ce,t as le}from"./createSvgIcon-CL9oq_Vt.js";import{i as ue,n as de,r as fe,t as pe}from"./ExpandMore-B8MphMP5.js";import{n as me,t as he}from"./IconButton-CJ0GQozL.js";import{n as ge,t as _e}from"./Avatar-ChwlATg3.js";import{n as ve,t as ye}from"./abilityIconCorrections-_uiSLwGq.js";function be(e){return i(`MuiLinearProgress`,e)}function xe(){return(xe=t((()=>{a(),c(),l(`MuiLinearProgress`,[`root`,`colorPrimary`,`colorSecondary`,`determinate`,`indeterminate`,`buffer`,`query`,`dashed`,`bar`,`bar1`,`bar2`])})))()}var Se,E,D,Ce,O,we,k,Te,A,Ee,De,j,Oe,ke,Ae,je,Me;function Ne(){return(Ne=t((()=>{Se=e(n(),1),s(),ae(),re(),v(),ne(),d(),ee(),u(),xe(),E=r(),D=4,Ce={},O=w`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,we=typeof O==`string`?null:T`
        animation: ${O} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `,k=w`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,Te=typeof k==`string`?null:T`
        animation: ${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `,A=w`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,Ee=typeof A==`string`?null:T`
        animation: ${A} 3s infinite linear;
      `,De=e=>{let{classes:t,variant:n,color:r}=e,i={root:[`root`,`color${S(r)}`,n],dashed:[`dashed`],bar1:[`bar`,`bar1`],bar2:[`bar`,`bar2`,n===`buffer`&&`color${S(r)}`]};return m(i,be,t)},j=(e,t)=>e.vars?e.vars.palette.LinearProgress[`${t}Bg`]:e.palette.mode===`light`?e.lighten(e.palette[t].main,.62):e.darken(e.palette[t].main,.5),Oe=p(`span`,{name:`MuiLinearProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[`color${S(n.color)}`],t[n.variant]]}})(h(({theme:e})=>({position:`relative`,overflow:`hidden`,display:`block`,height:4,zIndex:0,"@media print":{colorAdjust:`exact`},variants:[...Object.entries(e.palette).filter(x()).map(([t])=>({props:{color:t},style:{backgroundColor:j(e,t)}})),{props:({ownerState:e})=>e.color===`inherit`&&e.variant!==`buffer`,style:{"&::before":{content:`""`,position:`absolute`,left:0,top:0,right:0,bottom:0,backgroundColor:`currentColor`,opacity:.3}}},{props:{variant:`buffer`},style:{backgroundColor:`transparent`}},{props:{variant:`query`},style:{transform:`rotate(180deg)`}}]}))),ke=p(`span`,{name:`MuiLinearProgress`,slot:`Dashed`})(h(({theme:e})=>({position:`absolute`,marginTop:0,height:`100%`,width:`100%`,backgroundSize:`10px 10px`,backgroundPosition:`0 -23px`,variants:[{props:{color:`inherit`},style:{opacity:.3,backgroundImage:`radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)`}},...Object.entries(e.palette).filter(x()).map(([t])=>{let n=j(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`}}})]})),Ee||{animation:`${A} 3s infinite linear`},h(({theme:e})=>y(e,{animation:`none`})||Ce)),Ae=p(`span`,{name:`MuiLinearProgress`,slot:`Bar1`,overridesResolver:(e,t)=>[t.bar,t.bar1]})(h(({theme:e})=>{let t=y(e,{animation:`none`,left:`30%`,right:`auto`,width:`40%`});return{width:`100%`,position:`absolute`,left:0,bottom:0,top:0,..._(e,`transform`,{duration:`0.2s`,easing:`linear`}),transformOrigin:`left`,variants:[{props:{color:`inherit`},style:{backgroundColor:`currentColor`}},...Object.entries(e.palette).filter(x()).map(([t])=>({props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}})),{props:{variant:`determinate`},style:{..._(e,`transform`,{duration:`.${D}s`,easing:`linear`})}},{props:{variant:`buffer`},style:{zIndex:1,..._(e,`transform`,{duration:`.${D}s`,easing:`linear`})}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:we||{animation:`${O} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:t}]:[]]}})),je=p(`span`,{name:`MuiLinearProgress`,slot:`Bar2`,overridesResolver:(e,t)=>[t.bar,t.bar2]})(h(({theme:e})=>{let t=y(e,{animation:`none`,display:`none`});return{width:`100%`,position:`absolute`,left:0,bottom:0,top:0,..._(e,`transform`,{duration:`0.2s`,easing:`linear`}),transformOrigin:`left`,variants:[...Object.entries(e.palette).filter(x()).map(([t])=>({props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}})),{props:({ownerState:e})=>e.variant!==`buffer`&&e.color!==`inherit`,style:{backgroundColor:`var(--LinearProgressBar2-barColor, currentColor)`}},{props:({ownerState:e})=>e.variant!==`buffer`&&e.color===`inherit`,style:{backgroundColor:`currentColor`}},{props:{color:`inherit`},style:{opacity:.3}},...Object.entries(e.palette).filter(x()).map(([t])=>({props:{color:t,variant:`buffer`},style:{backgroundColor:j(e,t),..._(e,`transform`,{duration:`.${D}s`,easing:`linear`})}})),{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:{width:`auto`}},{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:Te||{animation:`${k} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`||e.variant===`query`,style:t}]:[]]}})),Me=Se.forwardRef(function(e,t){let n=f({props:e,name:`MuiLinearProgress`}),{className:r,color:i=`primary`,max:a,min:s,value:c,valueBuffer:l,variant:u=`indeterminate`,...d}=n,p={...n,color:i,variant:u},m=s??0,h=a??100,g=De(p),_=ie(),v={},y={bar1:{},bar2:{}};if((u===`determinate`||u===`buffer`)&&c!==void 0){let e=h-m,t=(c-m)/e*100-100;_&&(t=-t),y.bar1.transform=e>0?`translateX(${t}%)`:`translateX(-100%)`,v[`aria-valuenow`]=c,v[`aria-valuemin`]=m,v[`aria-valuemax`]=h}if(u===`buffer`&&l!==void 0){let e=h-m,t=(l-m)/e*100-100;_&&(t=-t),y.bar2.transform=e>0?`translateX(${t}%)`:`translateX(-100%)`}return(0,E.jsxs)(Oe,{className:o(g.root,r),ownerState:p,role:`progressbar`,...v,ref:t,...d,children:[u===`buffer`?(0,E.jsx)(ke,{className:g.dashed,ownerState:p}):null,(0,E.jsx)(Ae,{className:g.bar1,ownerState:p,style:y.bar1}),u===`determinate`?null:(0,E.jsx)(je,{className:g.bar2,ownerState:p,style:y.bar2})]})})})))()}var Pe,M;function Fe(){return(Fe=t((()=>{ce(),Pe=r(),M=le((0,Pe.jsx)(`path`,{d:`m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z`}),`TrendingDown`)})))()}var Ie,N;function Le(){return(Le=t((()=>{ce(),Ie=r(),N=le((0,Ie.jsx)(`path`,{d:`m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z`}),`TrendingUp`)})))()}var P,F,Re,I;function ze(){return(ze=t((()=>{de(),Fe(),Le(),g(),te(),Ne(),ge(),se(),me(),ue(),P=e(n()),ve(),F=r(),Re=(e,t,n,r,i,a,o)=>{let s=`https://www.esologs.com/reports/${e}?fight=${t}`;if(o&&o.length>0){let e=`2%24Off%24%23244F4B%24expression%24ability.id%20IN%20%28${o.join(`%2C`)}%29`;s+=`&type=auras&spells=debuffs&hostility=1&pins=${e}`}else s+=`&type=auras&hostility=${a}&ability=${n}`,i&&(s+=`&spells=auras`);return r?s+=i?`&source=${r}`:`&target=${r}`:a===1&&(s+=`&sourceclass=Boss`),s},I=({buff:e,reportId:t,fightId:n,selectedTargetId:r})=>{let i=oe(),[a,o]=P.useState(!1),s=P.useId(),c=P.useCallback((e,t)=>{let n=i.palette.mode===`dark`?[`linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)`,`linear-gradient(90deg, #f97316 0%, #c2410c 100%)`,`linear-gradient(90deg, #f59e0b 0%, #92400e 100%)`,`linear-gradient(90deg, #3b82f6 0%, #1e3a8a 100%)`,`linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)`]:[`linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)`,`linear-gradient(90deg, #f97316 0%, #c2410c 100%)`,`linear-gradient(90deg, #f59e0b 0%, #92400e 100%)`,`linear-gradient(90deg, #06b6d4 0%, #1e3a8a 100%)`,`linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)`],r=n.length-t;return n[Math.max(0,Math.min(r+e-1,n.length-1))]},[i.palette.mode]),l=P.useMemo(()=>e.allStacksData&&e.allStacksData.length>0?e.allStacksData[e.allStacksData.length-1]:{totalDuration:e.totalDuration,uptime:e.uptime,uptimePercentage:e.uptimePercentage,applications:e.applications,groupAverageUptimePercentage:e.groupAverageUptimePercentage},[e]),u=Math.max(0,Math.min(100,l.uptimePercentage)),d=P.useMemo(()=>{let t=l.groupAverageUptimePercentage??e.groupAverageUptimePercentage;return t===void 0?null:l.uptimePercentage-t},[l.uptimePercentage,l.groupAverageUptimePercentage,e.groupAverageUptimePercentage]),f=P.useCallback(i=>{if(e.allStacksData&&e.allStacksData.length>0){i&&i.stopPropagation(),o(e=>!e);return}let a=Re(t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(a,`_blank`)},[t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds,e.allStacksData]);return(0,F.jsxs)(b,{sx:{width:`100%`,position:`relative`},children:[(0,F.jsxs)(b,{role:`button`,tabIndex:0,"aria-label":`${e.abilityName}: ${Math.round(u)}% uptime`,onClick:f,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),f())},sx:{position:`relative`,height:e.allStacksData?56:48,borderRadius:2,cursor:`pointer`,"&:hover":{opacity:.9},bgcolor:i.palette.mode===`dark`?`rgba(255,255,255,0.08)`:`rgba(203, 213, 225, 0.3)`,border:i.palette.mode===`dark`?`none`:`1px solid rgba(15, 23, 42, 0.08)`,boxShadow:i.palette.mode===`dark`?`inset 0 1px 3px rgba(0, 0, 0, 0.5)`:`inset 0 1px 2px rgba(15, 23, 42, 0.1)`,overflow:`hidden`},children:[e.allStacksData?e.allStacksData.slice().sort((e,t)=>e.stackLevel-t.stackLevel).map(t=>{let n=Math.max(0,Math.min(100,t.uptimePercentage)),r=e.allStacksData.length;return(0,F.jsx)(b,{sx:{position:`absolute`,top:0,left:0,height:`100%`,width:`${n}%`,background:c(t.stackLevel,r),borderRadius:2,boxShadow:i.palette.mode===`dark`?`0 1px 4px rgba(0, 0, 0, 0.3)`:`0 1px 2px rgba(0, 0, 0, 0.1)`,transition:`width 0.3s ease-in-out, background 0.3s ease-in-out`}},t.stackLevel)}):null,!e.allStacksData&&(0,F.jsx)(Me,{variant:`determinate`,value:u,"aria-hidden":`true`,sx:{height:`100%`,borderRadius:2,bgcolor:`transparent`,"& .MuiLinearProgress-bar":{borderRadius:2,background:i.palette.mode===`dark`?`linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)`:`linear-gradient(90deg, #67e8f9 0%, #93c5fd 25%, #c4b5fd 75%, #f9a8d4 100%)`,boxShadow:i.palette.mode===`dark`?`0 2px 8px rgba(59, 130, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)`:`0 1px 3px rgba(103, 232, 249, 0.3), 0 0 8px rgba(147, 197, 253, 0.2)`}}})]}),(0,F.jsxs)(b,{sx:{position:`absolute`,top:0,left:0,right:0,height:e.allStacksData?56:48,display:`flex`,alignItems:`center`,px:2,gap:1.5,pointerEvents:`none`},children:[e.icon?(0,F.jsx)(_e,{src:ye(e.icon,e.abilityGameID),alt:``,"aria-hidden":`true`,sx:{width:32,height:32,borderRadius:1,boxShadow:1,flexShrink:0},variant:`rounded`}):(0,F.jsx)(_e,{"aria-hidden":`true`,sx:{width:32,height:32,flexShrink:0},variant:`rounded`,children:e.abilityName.charAt(0)}),(0,F.jsxs)(b,{"aria-hidden":`true`,sx:{flex:1,minWidth:0},children:[(0,F.jsx)(C,{variant:`body2`,sx:{fontWeight:600,color:i.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:i.palette.mode===`dark`?`1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)`:`1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,mb:.25},children:e.abilityName}),(0,F.jsxs)(C,{variant:`caption`,sx:{color:i.palette.mode===`dark`?`rgba(255,255,255,0.85)`:`rgba(30, 41, 59, 0.8)`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.7), 0 0 3px rgba(255,255,255,0.5)`,fontSize:{xs:`0.65rem`,sm:`0.7rem`,md:`0.75rem`}},children:[(0,F.jsxs)(b,{component:`span`,sx:{display:{xs:`none`,sm:`inline`}},children:[l.applications,` applications • `,l.uptime.toFixed(1),`s total`]}),(0,F.jsxs)(b,{component:`span`,sx:{display:{xs:`inline`,sm:`none`}},children:[l.applications,` apps • `,l.uptime.toFixed(1),`s total`]})]})]}),(0,F.jsxs)(b,{sx:{display:`flex`,alignItems:`center`,gap:1,flexShrink:0},children:[(0,F.jsxs)(C,{variant:`body2`,"aria-hidden":`true`,sx:{fontWeight:700,color:i.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:i.palette.mode===`dark`?`1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)`:`1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)`},children:[Math.round(u),`%`]}),d!==null&&(0,F.jsx)(b,{"aria-hidden":`true`,sx:{display:`flex`,alignItems:`center`,gap:.5,ml:.5},children:Math.abs(d)<2?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(C,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.9rem`,color:i.palette.mode===`dark`?`#94a3b8`:`#64748b`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.9)`},children:`≈`}),(0,F.jsxs)(C,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:i.palette.mode===`dark`?`#94a3b8`:`#64748b`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)`},children:[d>0?`+`:``,Math.round(d),`%`]})]}):(0,F.jsxs)(F.Fragment,{children:[d>0?(0,F.jsx)(N,{sx:{fontSize:`1rem`,color:`#10b981`,filter:`drop-shadow(0 1px 2px rgba(0,0,0,0.3))`}}):(0,F.jsx)(M,{sx:{fontSize:`1rem`,color:`#ef4444`,filter:`drop-shadow(0 1px 2px rgba(0,0,0,0.3))`}}),(0,F.jsxs)(C,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:d>0?`#10b981`:`#ef4444`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)`},children:[d>0?`+`:``,Math.round(d),`%`]})]})}),e.allStacksData&&e.allStacksData.length>0&&(0,F.jsx)(he,{size:`small`,"aria-label":`Toggle ${e.abilityName} stacks`,"aria-expanded":a,"aria-controls":s,sx:{ml:.5,padding:.5,pointerEvents:`auto`,color:i.palette.mode===`dark`?`#ffffff`:`#1e293b`,transform:a?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.3s ease-in-out`},onClick:e=>{e.stopPropagation(),o(e=>!e)},children:(0,F.jsx)(pe,{fontSize:`small`})})]})]}),e.allStacksData&&e.allStacksData.length>0&&!a&&(0,F.jsx)(b,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:1,mt:.5,flexWrap:`wrap`},children:e.allStacksData.map((t,n)=>(0,F.jsxs)(P.Fragment,{children:[n>0&&(0,F.jsx)(C,{variant:`caption`,sx:{color:i.palette.mode===`dark`?`#64748b`:`#94a3b8`,fontSize:`0.7rem`,fontWeight:500},children:`|`}),(0,F.jsxs)(b,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:[(0,F.jsx)(b,{sx:{width:8,height:8,borderRadius:`2px`,background:c(t.stackLevel,e.allStacksData.length),flexShrink:0}}),(0,F.jsxs)(C,{variant:`caption`,sx:{fontSize:`0.7rem`,fontWeight:600,color:i.palette.mode===`dark`?`#e2e8f0`:`#475569`},children:[Math.round(t.uptimePercentage),`%`]})]})]},t.stackLevel))}),e.allStacksData&&(0,F.jsx)(fe,{in:a,timeout:300,id:s,children:(0,F.jsx)(b,{sx:{width:`100%`,mt:1},children:e.allStacksData.slice().sort((e,t)=>t.uptimePercentage-e.uptimePercentage).map(a=>{let o=Math.max(0,Math.min(100,a.uptimePercentage)),s=a.groupAverageUptimePercentage===void 0?null:a.uptimePercentage-a.groupAverageUptimePercentage;return(0,F.jsx)(b,{sx:{width:`100%`,mb:.75,cursor:`pointer`,animation:`fadeIn 0.3s ease-in-out`,"@keyframes fadeIn":{from:{opacity:0,transform:`translateY(-10px)`},to:{opacity:1,transform:`translateY(0)`}},"&:hover":{opacity:.9}},onClick:i=>{i.stopPropagation();let a=Re(t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(a,`_blank`)},children:(0,F.jsxs)(b,{sx:{position:`relative`,height:32,borderRadius:1.5,bgcolor:i.palette.mode===`dark`?`rgba(255,255,255,0.05)`:`rgba(203, 213, 225, 0.2)`,border:i.palette.mode===`dark`?`none`:`1px solid rgba(15, 23, 42, 0.08)`,boxShadow:i.palette.mode===`dark`?`inset 0 1px 2px rgba(0, 0, 0, 0.3)`:`inset 0 1px 1px rgba(15, 23, 42, 0.05)`,overflow:`hidden`},children:[(0,F.jsx)(b,{sx:{position:`absolute`,top:0,left:0,height:`100%`,width:`${o}%`,background:c(a.stackLevel,e.allStacksData.length),borderRadius:1.5,transition:`width 0.3s ease-in-out`}}),(0,F.jsxs)(b,{sx:{position:`absolute`,top:0,left:0,right:0,height:`100%`,display:`flex`,alignItems:`center`,px:1.5,gap:1},children:[(0,F.jsx)(b,{sx:{width:10,height:10,borderRadius:`2px`,background:c(a.stackLevel,e.allStacksData.length),flexShrink:0,border:i.palette.mode===`dark`?`1px solid rgba(255,255,255,0.2)`:`1px solid rgba(0,0,0,0.1)`}}),(0,F.jsxs)(C,{variant:`body2`,sx:{fontWeight:600,fontSize:`0.8rem`,color:i.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.8)`,flex:1},children:[`Stack `,a.stackLevel]}),(0,F.jsxs)(C,{variant:`caption`,sx:{color:i.palette.mode===`dark`?`rgba(255,255,255,0.7)`:`rgba(30, 41, 59, 0.7)`,textShadow:i.palette.mode===`dark`?`1px 1px 1px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.7)`,fontSize:`0.7rem`},children:[a.applications,`x`]}),(0,F.jsxs)(C,{variant:`body2`,sx:{fontWeight:700,fontSize:`0.85rem`,color:i.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:i.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.8)`},children:[Math.round(o),`%`]}),s!==null&&(0,F.jsx)(b,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:Math.abs(s)<2?(0,F.jsx)(C,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:i.palette.mode===`dark`?`#94a3b8`:`#64748b`},children:`≈`}):(0,F.jsxs)(F.Fragment,{children:[s>0?(0,F.jsx)(N,{sx:{fontSize:`0.9rem`,color:`#10b981`}}):(0,F.jsx)(M,{sx:{fontSize:`0.9rem`,color:`#ef4444`}}),(0,F.jsxs)(C,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.65rem`,color:s>0?`#10b981`:`#ef4444`},children:[s>0?`+`:``,Math.round(s),`%`]})]})})]})]})},a.stackLevel)})})})]})};try{I.displayName=`BuffUptimeProgressBar`,I.__docgenInfo={description:``,displayName:`BuffUptimeProgressBar`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,methods:[],props:{buff:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`buff`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`BuffUptime`}},reportId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`reportId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`string | null`}},fightId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`fightId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`string | null`}},selectedTargetId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`selectedTargetId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`number | null`}}},tags:{}}}catch{}})))()}var L,Be,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ve;function He(){return(He=t((()=>{g(),ze(),L=r(),Be={title:`Features/BuffUptimes/BuffUptimeProgressBar`,component:I,parameters:{layout:`padded`},tags:[`autodocs`]},R=(e,t,n)=>({abilityGameID:`12345`,abilityName:e,icon:`1234`,totalDuration:t/100*2e5,uptime:t/100*200,uptimePercentage:t,isDebuff:!1,applications:Math.floor(t/100*50),hostilityType:0,uniqueKey:`${e}-0`,groupAverageUptimePercentage:n}),z=(e,t,n,r)=>{let i=n.map((e,t)=>({stackLevel:t+1,totalDuration:e/100*2e5,uptime:e/100*200,uptimePercentage:e,applications:Math.floor(e/100*50),groupAverageUptimePercentage:r?.[t]})),a=i[i.length-1];return{abilityGameID:`12345`,abilityName:e,icon:`1234`,totalDuration:a.totalDuration,uptime:a.uptime,uptimePercentage:a.uptimePercentage,isDebuff:!0,applications:a.applications,hostilityType:1,uniqueKey:`${e}-0`,stackLevel:t,maxStacks:t,allStacksData:i}},B={args:{buff:R(`Major Courage`,84),reportId:`abc123`,fightId:`1`,selectedTargetId:null},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},V={args:{buff:R(`Minor Savagery`,99,98),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},H={args:{buff:R(`Major Savagery`,23,31),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},U={args:{buff:R(`Major Courage`,84,84.3),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},W={args:{buff:R(`Major Courage`,95,75),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},G={args:{buff:R(`Major Sorcery`,12,45),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2},children:(0,L.jsx)(I,{...e})})},K={render:()=>{let e=[R(`Major Savagery`,23,31),R(`Minor Savagery`,99,98),R(`Major Courage`,84,87),R(`Minor Courage`,97,96),R(`Major Berserk`,8,12),R(`Minor Berserk`,75,84),R(`Major Sorcery`,0,13)];return(0,L.jsxs)(b,{sx:{maxWidth:600,p:2},children:[(0,L.jsx)(b,{sx:{mb:2},children:(0,L.jsx)(`strong`,{children:`Player Buff Uptimes vs Group Average`})}),e.map((e,t)=>(0,L.jsx)(b,{sx:{mb:1},children:(0,L.jsx)(I,{buff:e,reportId:`abc123`,fightId:`1`,selectedTargetId:12345})},t))]})}},q={args:{buff:R(`Minor Savagery`,99,98),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:(0,L.jsx)(I,{...e})})},J={args:{buff:R(`Major Savagery`,23,31),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,L.jsx)(b,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:(0,L.jsx)(I,{...e})})},Y={args:{buff:z(`Heat Shock`,3,[85,60,35]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsxs)(b,{sx:{maxWidth:600,p:2},children:[(0,L.jsxs)(b,{sx:{mb:2},children:[(0,L.jsx)(`strong`,{children:`Multi-Stack: Heat Shock (segmented display)`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Overlaid colored bars with segmented labels below: 85% | 60% | 35%`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Color gradient: Amber → Blue → Purple (blue/purple side for 3-stack)`})]}),(0,L.jsx)(I,{...e})]})},X={args:{buff:z(`Touch of Z'en`,5,[95,88,72,55,38]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsxs)(b,{sx:{maxWidth:600,p:2},children:[(0,L.jsxs)(b,{sx:{mb:2},children:[(0,L.jsx)(`strong`,{children:`Multi-Stack: Touch of Z'en (segmented display)`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`5 stacks with segmented labels: 95% | 88% | 72% | 55% | 38%`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Full gradient: Red → Orange → Amber → Blue → Purple`})]}),(0,L.jsx)(I,{...e})]})},Z={args:{buff:z(`Elemental Weakness`,3,[78,52,28],[70,50,30]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,L.jsxs)(b,{sx:{maxWidth:600,p:2},children:[(0,L.jsxs)(b,{sx:{mb:2},children:[(0,L.jsx)(`strong`,{children:`Multi-Stack: Elemental Weakness (segmented with group average)`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Segmented display: 78% | 52% | 28%`}),(0,L.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`With delta indicators: +8%, +2%, -2% vs group averages`})]}),(0,L.jsx)(I,{...e})]})},Q={render:()=>{let e=[z(`Heat Shock`,3,[85,60,35],[70,55,30]),z(`Touch of Z'en`,5,[95,88,72,55,38]),z(`Elemental Weakness`,3,[78,52,28],[70,50,30]),R(`Major Courage`,84,87)];return(0,L.jsxs)(b,{sx:{maxWidth:600,p:2},children:[(0,L.jsx)(b,{sx:{mb:2},children:(0,L.jsx)(`strong`,{children:`Multi-Stack Comparison`})}),e.map((e,t)=>(0,L.jsx)(b,{sx:{mb:1},children:(0,L.jsx)(I,{buff:e,reportId:`abc123`,fightId:`1`,selectedTargetId:12345})},t))]})}},$={args:{buff:z(`Heat Shock`,3,[85,60,35],[70,55,30]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,L.jsxs)(b,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:[(0,L.jsx)(b,{sx:{mb:2,color:`#fff`},children:(0,L.jsx)(`strong`,{children:`Dark Mode Multi-Stack: Heat Shock`})}),(0,L.jsx)(I,{...e})]})},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Courage', 84),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: null
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Minor Savagery', 99, 98),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Savagery', 23, 31),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Courage', 84, 84.3),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Courage', 95, 75),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Sorcery', 12, 45),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const buffs: BuffUptime[] = [createMockBuff('Major Savagery', 23, 31), createMockBuff('Minor Savagery', 99, 98), createMockBuff('Major Courage', 84, 87), createMockBuff('Minor Courage', 97, 96), createMockBuff('Major Berserk', 8, 12), createMockBuff('Minor Berserk', 75, 84), createMockBuff('Major Sorcery', 0, 13)];
    return <Box sx={{
      maxWidth: 600,
      p: 2
    }}>
        <Box sx={{
        mb: 2
      }}>
          <strong>Player Buff Uptimes vs Group Average</strong>
        </Box>
        {buffs.map((buff, idx) => <Box key={idx} sx={{
        mb: 1
      }}>
            <BuffUptimeProgressBar buff={buff} reportId="abc123" fightId="1" selectedTargetId={12345} />
          </Box>)}
      </Box>;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Minor Savagery', 99, 98),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2,
    bgcolor: '#1a1a1a',
    borderRadius: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockBuff('Major Savagery', 23, 31),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2,
    bgcolor: '#1a1a1a',
    borderRadius: 2
  }}>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockMultiStackBuff('Heat Shock', 3, [85, 60, 35]),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <Box sx={{
      mb: 2
    }}>
        <strong>Multi-Stack: Heat Shock (segmented display)</strong>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          Overlaid colored bars with segmented labels below: 85% | 60% | 35%
        </div>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          Color gradient: Amber → Blue → Purple (blue/purple side for 3-stack)
        </div>
      </Box>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockMultiStackBuff("Touch of Z'en", 5, [95, 88, 72, 55, 38]),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <Box sx={{
      mb: 2
    }}>
        <strong>Multi-Stack: Touch of Z&apos;en (segmented display)</strong>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          5 stacks with segmented labels: 95% | 88% | 72% | 55% | 38%
        </div>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          Full gradient: Red → Orange → Amber → Blue → Purple
        </div>
      </Box>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockMultiStackBuff('Elemental Weakness', 3, [78, 52, 28], [70, 50, 30]),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2
  }}>
      <Box sx={{
      mb: 2
    }}>
        <strong>Multi-Stack: Elemental Weakness (segmented with group average)</strong>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          Segmented display: 78% | 52% | 28%
        </div>
        <div style={{
        fontSize: '0.85rem',
        color: '#666',
        marginTop: '4px'
      }}>
          With delta indicators: +8%, +2%, -2% vs group averages
        </div>
      </Box>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const buffs: BuffUptime[] = [createMockMultiStackBuff('Heat Shock', 3, [85, 60, 35], [70, 55, 30]), createMockMultiStackBuff("Touch of Z'en", 5, [95, 88, 72, 55, 38]), createMockMultiStackBuff('Elemental Weakness', 3, [78, 52, 28], [70, 50, 30]), createMockBuff('Major Courage', 84, 87) // Regular buff for comparison
    ];
    return <Box sx={{
      maxWidth: 600,
      p: 2
    }}>
        <Box sx={{
        mb: 2
      }}>
          <strong>Multi-Stack Comparison</strong>
        </Box>
        {buffs.map((buff, idx) => <Box key={idx} sx={{
        mb: 1
      }}>
            <BuffUptimeProgressBar buff={buff} reportId="abc123" fightId="1" selectedTargetId={12345} />
          </Box>)}
      </Box>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    buff: createMockMultiStackBuff('Heat Shock', 3, [85, 60, 35], [70, 55, 30]),
    reportId: 'abc123',
    fightId: '1',
    selectedTargetId: 12345
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: args => <Box sx={{
    maxWidth: 600,
    p: 2,
    bgcolor: '#1a1a1a',
    borderRadius: 2
  }}>
      <Box sx={{
      mb: 2,
      color: '#fff'
    }}>
        <strong>Dark Mode Multi-Stack: Heat Shock</strong>
      </Box>
      <BuffUptimeProgressBar {...args} />
    </Box>
}`,...$.parameters?.docs?.source}}},Ve=[`GroupAverage`,`AboveAverage`,`BelowAverage`,`NearAverage`,`SignificantlyAbove`,`SignificantlyBelow`,`MultipleBuffsComparison`,`DarkModeAboveAverage`,`DarkModeBelowAverage`,`MultiStackStagger`,`MultiStackTouchOfZen`,`MultiStackWithGroupAverage`,`MultiStackComparison`,`DarkModeMultiStack`]})))()}He();export{V as AboveAverage,H as BelowAverage,q as DarkModeAboveAverage,J as DarkModeBelowAverage,$ as DarkModeMultiStack,B as GroupAverage,Q as MultiStackComparison,Y as MultiStackStagger,X as MultiStackTouchOfZen,Z as MultiStackWithGroupAverage,K as MultipleBuffsComparison,U as NearAverage,W as SignificantlyAbove,G as SignificantlyBelow,Ve as __namedExportsOrder,Be as default};