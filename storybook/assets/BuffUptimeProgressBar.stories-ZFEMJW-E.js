import{r as ae,j as r,R as S}from"./iframe-CICSjQej.js";import{E as te,C as oe}from"./ExpandMore-DL0UAcOh.js";import{c as ee}from"./createSvgIcon-Dtl2mUFL.js";import{u as ne}from"./useTheme-CaF6_igW.js";import{g as se,f as ie,u as le,c as de,a as k,b as ce,s as O,m as q,q as Z,k as V,B as n}from"./Box-qee7g464.js";import{u as pe}from"./useId-Cqe6lLxO.js";import{c as j,T as b}from"./Typography-awrXtSDF.js";import{A as X}from"./Avatar-CZsDKOvk.js";import{I as ge}from"./IconButton-DbOjvVrh.js";import"./preload-helper-Ct5FWWRu.js";import"./utils-yS_A7M0J.js";import"./useTimeout-ClBHXSvW.js";import"./useEnhancedEffect-DxxkQjZW.js";import"./index-C8O3t_yu.js";import"./index-BtqQpOJi.js";import"./useSlot-DDGNWHgr.js";import"./useForkRef-BVfnwwgN.js";import"./ButtonBase-CbkNCLD-.js";import"./CircularProgress-NeZDaOev.js";function me(e){return se("MuiLinearProgress",e)}ie("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);const _=4,G=V`
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
`,xe=typeof G!="string"?Z`
        animation: ${G} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,F=V`
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
`,ue=typeof F!="string"?Z`
        animation: ${F} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,H=V`
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
`,fe=typeof H!="string"?Z`
        animation: ${H} 3s infinite linear;
      `:null,be=e=>{const{classes:a,variant:t,color:d}=e,o={root:["root",`color${k(d)}`,t],dashed:["dashed",`dashedColor${k(d)}`],bar1:["bar","bar1",`barColor${k(d)}`,(t==="indeterminate"||t==="query")&&"bar1Indeterminate",t==="determinate"&&"bar1Determinate",t==="buffer"&&"bar1Buffer"],bar2:["bar","bar2",t!=="buffer"&&`barColor${k(d)}`,t==="buffer"&&`color${k(d)}`,(t==="indeterminate"||t==="query")&&"bar2Indeterminate",t==="buffer"&&"bar2Buffer"]};return ce(o,me,a)},K=(e,a)=>e.vars?e.vars.palette.LinearProgress[`${a}Bg`]:e.palette.mode==="light"?e.lighten(e.palette[a].main,.62):e.darken(e.palette[a].main,.5),he=O("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[`color${k(t.color)}`],a[t.variant]]}})(q(({theme:e})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter(j()).map(([a])=>({props:{color:a},style:{backgroundColor:K(e,a)}})),{props:({ownerState:a})=>a.color==="inherit"&&a.variant!=="buffer",style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),ke=O("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.dashed,a[`dashedColor${k(t.color)}`]]}})(q(({theme:e})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter(j()).map(([a])=>{const t=K(e,a);return{props:{color:a},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),fe||{animation:`${H} 3s infinite linear`}),ve=O("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.bar,a.bar1,a[`barColor${k(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&a.bar1Indeterminate,t.variant==="determinate"&&a.bar1Determinate,t.variant==="buffer"&&a.bar1Buffer]}})(q(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter(j()).map(([a])=>({props:{color:a},style:{backgroundColor:(e.vars||e).palette[a].main}})),{props:{variant:"determinate"},style:{transition:`transform .${_}s linear`}},{props:{variant:"buffer"},style:{zIndex:1,transition:`transform .${_}s linear`}},{props:({ownerState:a})=>a.variant==="indeterminate"||a.variant==="query",style:{width:"auto"}},{props:({ownerState:a})=>a.variant==="indeterminate"||a.variant==="query",style:xe||{animation:`${G} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),Se=O("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.bar,a.bar2,a[`barColor${k(t.color)}`],(t.variant==="indeterminate"||t.variant==="query")&&a.bar2Indeterminate,t.variant==="buffer"&&a.bar2Buffer]}})(q(({theme:e})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter(j()).map(([a])=>({props:{color:a},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[a].main}})),{props:({ownerState:a})=>a.variant!=="buffer"&&a.color!=="inherit",style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:a})=>a.variant!=="buffer"&&a.color==="inherit",style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter(j()).map(([a])=>({props:{color:a,variant:"buffer"},style:{backgroundColor:K(e,a),transition:`transform .${_}s linear`}})),{props:({ownerState:a})=>a.variant==="indeterminate"||a.variant==="query",style:{width:"auto"}},{props:({ownerState:a})=>a.variant==="indeterminate"||a.variant==="query",style:ue||{animation:`${F} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),ye=ae.forwardRef(function(a,t){const d=le({props:a,name:"MuiLinearProgress"}),{className:o,color:x="primary",value:m,valueBuffer:p,variant:h="indeterminate",...u}=d,v={...d,color:x,variant:h},f=be(v),M=pe(),s={},i={bar1:{},bar2:{}};if((h==="determinate"||h==="buffer")&&m!==void 0){s["aria-valuenow"]=Math.round(m),s["aria-valuemin"]=0,s["aria-valuemax"]=100;let l=m-100;M&&(l=-l),i.bar1.transform=`translateX(${l}%)`}if(h==="buffer"&&p!==void 0){let l=(p||0)-100;M&&(l=-l),i.bar2.transform=`translateX(${l}%)`}return r.jsxs(he,{className:de(f.root,o),ownerState:v,role:"progressbar",...s,ref:t,...u,children:[h==="buffer"?r.jsx(ke,{className:f.dashed,ownerState:v}):null,r.jsx(ve,{className:f.bar1,ownerState:v,style:i.bar1}),h==="determinate"?null:r.jsx(Se,{className:f.bar2,ownerState:v,style:i.bar2})]})}),Y=ee(r.jsx("path",{d:"m16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"})),J=ee(r.jsx("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"})),Q=(e,a,t,d,o,x,m)=>{let p=`https://www.esologs.com/reports/${e}?fight=${a}`;if(m&&m.length>0){const u=`2%24Off%24%23244F4B%24expression%24ability.id%20IN%20%28${m.join("%2C")}%29`;p+=`&type=auras&spells=debuffs&hostility=1&pins=${u}`}else p+=`&type=auras&hostility=${x}&ability=${t}`,o&&(p+="&spells=auras");return d?o?p+=`&source=${d}`:p+=`&target=${d}`:x===1&&(p+="&sourceclass=Boss"),p},c=({buff:e,reportId:a,fightId:t,selectedTargetId:d})=>{const o=ne(),[x,m]=S.useState(!1),p=S.useId(),h=S.useCallback((s,i)=>{const B=o.palette.mode==="dark"?["linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)","linear-gradient(90deg, #f97316 0%, #c2410c 100%)","linear-gradient(90deg, #f59e0b 0%, #92400e 100%)","linear-gradient(90deg, #3b82f6 0%, #1e3a8a 100%)","linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)"]:["linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)","linear-gradient(90deg, #f97316 0%, #c2410c 100%)","linear-gradient(90deg, #f59e0b 0%, #92400e 100%)","linear-gradient(90deg, #06b6d4 0%, #1e3a8a 100%)","linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)"],E=B.length-i,re=Math.max(0,Math.min(E+s-1,B.length-1));return B[re]},[o.palette.mode]),u=S.useMemo(()=>e.allStacksData&&e.allStacksData.length>0?e.allStacksData[e.allStacksData.length-1]:{totalDuration:e.totalDuration,uptime:e.uptime,uptimePercentage:e.uptimePercentage,applications:e.applications,groupAverageUptimePercentage:e.groupAverageUptimePercentage},[e]),v=Math.max(0,Math.min(100,u.uptimePercentage)),f=S.useMemo(()=>{const s=u.groupAverageUptimePercentage??e.groupAverageUptimePercentage;return s!==void 0?u.uptimePercentage-s:null},[u.uptimePercentage,u.groupAverageUptimePercentage,e.groupAverageUptimePercentage]),M=S.useCallback(s=>{if(e.allStacksData&&e.allStacksData.length>0){s&&s.stopPropagation(),m(l=>!l);return}const i=Q(a,t,e.abilityGameID,d,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(i,"_blank")},[a,t,e.abilityGameID,d,e.isDebuff,e.hostilityType,e.dotAbilityIds,e.allStacksData]);return r.jsxs(n,{sx:{width:"100%",position:"relative",cursor:"pointer","&:hover":{opacity:.9}},onClick:M,children:[r.jsxs(n,{sx:{position:"relative",height:e.allStacksData?56:48,borderRadius:2,bgcolor:o.palette.mode==="dark"?"rgba(255,255,255,0.08)":"rgba(203, 213, 225, 0.3)",border:o.palette.mode==="dark"?"none":"1px solid rgba(15, 23, 42, 0.08)",boxShadow:o.palette.mode==="dark"?"inset 0 1px 3px rgba(0, 0, 0, 0.5)":"inset 0 1px 2px rgba(15, 23, 42, 0.1)",overflow:"hidden"},children:[e.allStacksData?e.allStacksData.slice().sort((s,i)=>s.stackLevel-i.stackLevel).map(s=>{const i=Math.max(0,Math.min(100,s.uptimePercentage)),l=e.allStacksData.length;return r.jsx(n,{sx:{position:"absolute",top:0,left:0,height:"100%",width:`${i}%`,background:h(s.stackLevel,l),borderRadius:2,boxShadow:o.palette.mode==="dark"?"0 1px 4px rgba(0, 0, 0, 0.3)":"0 1px 2px rgba(0, 0, 0, 0.1)",transition:"width 0.3s ease-in-out, background 0.3s ease-in-out"}},s.stackLevel)}):null,!e.allStacksData&&r.jsx(ye,{variant:"determinate",value:v,sx:{height:"100%",borderRadius:2,bgcolor:"transparent","& .MuiLinearProgress-bar":{borderRadius:2,background:o.palette.mode==="dark"?"linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)":"linear-gradient(90deg, #67e8f9 0%, #93c5fd 25%, #c4b5fd 75%, #f9a8d4 100%)",boxShadow:o.palette.mode==="dark"?"0 2px 8px rgba(59, 130, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)":"0 1px 3px rgba(103, 232, 249, 0.3), 0 0 8px rgba(147, 197, 253, 0.2)"}}})]}),r.jsxs(n,{sx:{position:"absolute",top:0,left:0,right:0,height:e.allStacksData?56:48,display:"flex",alignItems:"center",px:2,gap:1.5},children:[e.icon?r.jsx(X,{src:`https://assets.rpglogs.com/img/eso/abilities/${e.icon}.png`,alt:e.abilityName,sx:{width:32,height:32,borderRadius:1,boxShadow:1,flexShrink:0},variant:"rounded"}):r.jsx(X,{sx:{width:32,height:32,flexShrink:0},variant:"rounded",children:e.abilityName.charAt(0)}),r.jsxs(n,{sx:{flex:1,minWidth:0},children:[r.jsx(b,{variant:"body2",sx:{fontWeight:600,color:o.palette.mode==="dark"?"#ffffff":"#1e293b",textShadow:o.palette.mode==="dark"?"1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)":"1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",mb:.25},children:e.abilityName}),r.jsxs(b,{variant:"caption",sx:{color:o.palette.mode==="dark"?"rgba(255,255,255,0.85)":"rgba(30, 41, 59, 0.8)",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)":"1px 1px 1px rgba(255,255,255,0.7), 0 0 3px rgba(255,255,255,0.5)",fontSize:{xs:"0.65rem",sm:"0.7rem",md:"0.75rem"}},children:[r.jsxs(n,{component:"span",sx:{display:{xs:"none",sm:"inline"}},children:[u.applications," applications • ",u.uptime.toFixed(1),"s total"]}),r.jsxs(n,{component:"span",sx:{display:{xs:"inline",sm:"none"}},children:[u.applications," apps • ",u.uptime.toFixed(1),"s total"]})]})]}),r.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:1,flexShrink:0},children:[r.jsxs(b,{variant:"body2",sx:{fontWeight:700,color:o.palette.mode==="dark"?"#ffffff":"#1e293b",textShadow:o.palette.mode==="dark"?"1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)":"1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)"},children:[Math.round(v),"%"]}),f!==null&&r.jsx(n,{sx:{display:"flex",alignItems:"center",gap:.5,ml:.5},children:Math.abs(f)<2?r.jsxs(r.Fragment,{children:[r.jsx(b,{variant:"caption",sx:{fontWeight:700,fontSize:"0.9rem",color:o.palette.mode==="dark"?"#94a3b8":"#64748b",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8)":"1px 1px 1px rgba(255,255,255,0.9)"},children:"≈"}),r.jsxs(b,{variant:"caption",sx:{fontWeight:700,fontSize:"0.7rem",color:o.palette.mode==="dark"?"#94a3b8":"#64748b",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)":"1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)"},children:[f>0?"+":"",Math.round(f),"%"]})]}):r.jsxs(r.Fragment,{children:[f>0?r.jsx(J,{sx:{fontSize:"1rem",color:"#10b981",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"}}):r.jsx(Y,{sx:{fontSize:"1rem",color:"#ef4444",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.3))"}}),r.jsxs(b,{variant:"caption",sx:{fontWeight:700,fontSize:"0.7rem",color:f>0?"#10b981":"#ef4444",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)":"1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)"},children:[f>0?"+":"",Math.round(f),"%"]})]})}),e.allStacksData&&e.allStacksData.length>0&&r.jsx(ge,{size:"small","aria-label":`Toggle ${e.abilityName} stacks`,"aria-expanded":x,"aria-controls":p,sx:{ml:.5,padding:.5,color:o.palette.mode==="dark"?"#ffffff":"#1e293b",transform:x?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.3s ease-in-out"},onClick:s=>{s.stopPropagation(),m(i=>!i)},children:r.jsx(te,{fontSize:"small"})})]})]}),e.allStacksData&&e.allStacksData.length>0&&!x&&r.jsx(n,{sx:{display:"flex",alignItems:"center",justifyContent:"center",gap:1,mt:.5,flexWrap:"wrap"},children:e.allStacksData.map((s,i)=>r.jsxs(S.Fragment,{children:[i>0&&r.jsx(b,{variant:"caption",sx:{color:o.palette.mode==="dark"?"#64748b":"#94a3b8",fontSize:"0.7rem",fontWeight:500},children:"|"}),r.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:.5},children:[r.jsx(n,{sx:{width:8,height:8,borderRadius:"2px",background:h(s.stackLevel,e.allStacksData.length),flexShrink:0}}),r.jsxs(b,{variant:"caption",sx:{fontSize:"0.7rem",fontWeight:600,color:o.palette.mode==="dark"?"#e2e8f0":"#475569"},children:[Math.round(s.uptimePercentage),"%"]})]})]},s.stackLevel))}),e.allStacksData&&r.jsx(oe,{in:x,timeout:300,id:p,children:r.jsx(n,{sx:{width:"100%",mt:1},children:e.allStacksData.slice().sort((s,i)=>i.uptimePercentage-s.uptimePercentage).map(s=>{const i=Math.max(0,Math.min(100,s.uptimePercentage)),l=s.groupAverageUptimePercentage!==void 0?s.uptimePercentage-s.groupAverageUptimePercentage:null;return r.jsx(n,{sx:{width:"100%",mb:.75,cursor:"pointer",animation:"fadeIn 0.3s ease-in-out","@keyframes fadeIn":{from:{opacity:0,transform:"translateY(-10px)"},to:{opacity:1,transform:"translateY(0)"}},"&:hover":{opacity:.9}},onClick:B=>{B.stopPropagation();const E=Q(a,t,e.abilityGameID,d,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(E,"_blank")},children:r.jsxs(n,{sx:{position:"relative",height:32,borderRadius:1.5,bgcolor:o.palette.mode==="dark"?"rgba(255,255,255,0.05)":"rgba(203, 213, 225, 0.2)",border:o.palette.mode==="dark"?"none":"1px solid rgba(15, 23, 42, 0.08)",boxShadow:o.palette.mode==="dark"?"inset 0 1px 2px rgba(0, 0, 0, 0.3)":"inset 0 1px 1px rgba(15, 23, 42, 0.05)",overflow:"hidden"},children:[r.jsx(n,{sx:{position:"absolute",top:0,left:0,height:"100%",width:`${i}%`,background:h(s.stackLevel,e.allStacksData.length),borderRadius:1.5,transition:"width 0.3s ease-in-out"}}),r.jsxs(n,{sx:{position:"absolute",top:0,left:0,right:0,height:"100%",display:"flex",alignItems:"center",px:1.5,gap:1},children:[r.jsx(n,{sx:{width:10,height:10,borderRadius:"2px",background:h(s.stackLevel,e.allStacksData.length),flexShrink:0,border:o.palette.mode==="dark"?"1px solid rgba(255,255,255,0.2)":"1px solid rgba(0,0,0,0.1)"}}),r.jsxs(b,{variant:"body2",sx:{fontWeight:600,fontSize:"0.8rem",color:o.palette.mode==="dark"?"#ffffff":"#1e293b",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8)":"1px 1px 1px rgba(255,255,255,0.8)",flex:1},children:["Stack ",s.stackLevel]}),r.jsxs(b,{variant:"caption",sx:{color:o.palette.mode==="dark"?"rgba(255,255,255,0.7)":"rgba(30, 41, 59, 0.7)",textShadow:o.palette.mode==="dark"?"1px 1px 1px rgba(0,0,0,0.8)":"1px 1px 1px rgba(255,255,255,0.7)",fontSize:"0.7rem"},children:[s.applications,"x"]}),r.jsxs(b,{variant:"body2",sx:{fontWeight:700,fontSize:"0.85rem",color:o.palette.mode==="dark"?"#ffffff":"#1e293b",textShadow:o.palette.mode==="dark"?"1px 1px 2px rgba(0,0,0,0.8)":"1px 1px 1px rgba(255,255,255,0.8)"},children:[Math.round(i),"%"]}),l!==null&&r.jsx(n,{sx:{display:"flex",alignItems:"center",gap:.5},children:Math.abs(l)<2?r.jsx(b,{variant:"caption",sx:{fontWeight:700,fontSize:"0.7rem",color:o.palette.mode==="dark"?"#94a3b8":"#64748b"},children:"≈"}):r.jsxs(r.Fragment,{children:[l>0?r.jsx(J,{sx:{fontSize:"0.9rem",color:"#10b981"}}):r.jsx(Y,{sx:{fontSize:"0.9rem",color:"#ef4444"}}),r.jsxs(b,{variant:"caption",sx:{fontWeight:700,fontSize:"0.65rem",color:l>0?"#10b981":"#ef4444"},children:[l>0?"+":"",Math.round(l),"%"]})]})})]})]})},s.stackLevel)})})})]})};try{c.displayName="BuffUptimeProgressBar",c.__docgenInfo={description:"",displayName:"BuffUptimeProgressBar",props:{buff:{defaultValue:null,description:"",name:"buff",required:!0,type:{name:"BuffUptime"}},reportId:{defaultValue:null,description:"",name:"reportId",required:!0,type:{name:"string | null"}},fightId:{defaultValue:null,description:"",name:"fightId",required:!0,type:{name:"string | null"}},selectedTargetId:{defaultValue:null,description:"",name:"selectedTargetId",required:!0,type:{name:"number | null"}}}}}catch{}const Ee={title:"Features/BuffUptimes/BuffUptimeProgressBar",component:c,parameters:{layout:"padded"},tags:["autodocs"]},g=(e,a,t)=>({abilityGameID:"12345",abilityName:e,icon:"1234",totalDuration:a/100*2e5,uptime:a/100*200,uptimePercentage:a,isDebuff:!1,applications:Math.floor(a/100*50),hostilityType:0,uniqueKey:`${e}-0`,groupAverageUptimePercentage:t}),y=(e,a,t,d)=>{const o=t.map((m,p)=>({stackLevel:p+1,totalDuration:m/100*2e5,uptime:m/100*200,uptimePercentage:m,applications:Math.floor(m/100*50),groupAverageUptimePercentage:d?.[p]})),x=o[o.length-1];return{abilityGameID:"12345",abilityName:e,icon:"1234",totalDuration:x.totalDuration,uptime:x.uptime,uptimePercentage:x.uptimePercentage,isDebuff:!0,applications:x.applications,hostilityType:1,uniqueKey:`${e}-0`,stackLevel:a,maxStacks:a,allStacksData:o}},I={args:{buff:g("Major Courage",84),reportId:"abc123",fightId:"1",selectedTargetId:null},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},P={args:{buff:g("Minor Savagery",99,98),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},C={args:{buff:g("Major Savagery",23,31),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},w={args:{buff:g("Major Courage",84,84.3),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},T={args:{buff:g("Major Courage",95,75),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},W={args:{buff:g("Major Sorcery",12,45),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2},children:r.jsx(c,{...e})})},A={render:()=>{const e=[g("Major Savagery",23,31),g("Minor Savagery",99,98),g("Major Courage",84,87),g("Minor Courage",97,96),g("Major Berserk",8,12),g("Minor Berserk",75,84),g("Major Sorcery",0,13)];return r.jsxs(n,{sx:{maxWidth:600,p:2},children:[r.jsx(n,{sx:{mb:2},children:r.jsx("strong",{children:"Player Buff Uptimes vs Group Average"})}),e.map((a,t)=>r.jsx(n,{sx:{mb:1},children:r.jsx(c,{buff:a,reportId:"abc123",fightId:"1",selectedTargetId:12345})},t))]})}},D={args:{buff:g("Minor Savagery",99,98),reportId:"abc123",fightId:"1",selectedTargetId:12345},parameters:{backgrounds:{default:"dark"}},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2,bgcolor:"#1a1a1a",borderRadius:2},children:r.jsx(c,{...e})})},U={args:{buff:g("Major Savagery",23,31),reportId:"abc123",fightId:"1",selectedTargetId:12345},parameters:{backgrounds:{default:"dark"}},render:e=>r.jsx(n,{sx:{maxWidth:600,p:2,bgcolor:"#1a1a1a",borderRadius:2},children:r.jsx(c,{...e})})},z={args:{buff:y("Heat Shock",3,[85,60,35]),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsxs(n,{sx:{maxWidth:600,p:2},children:[r.jsxs(n,{sx:{mb:2},children:[r.jsx("strong",{children:"Multi-Stack: Heat Shock (segmented display)"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"Overlaid colored bars with segmented labels below: 85% | 60% | 35%"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"Color gradient: Amber → Blue → Purple (blue/purple side for 3-stack)"})]}),r.jsx(c,{...e})]})},L={args:{buff:y("Touch of Z'en",5,[95,88,72,55,38]),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsxs(n,{sx:{maxWidth:600,p:2},children:[r.jsxs(n,{sx:{mb:2},children:[r.jsx("strong",{children:"Multi-Stack: Touch of Z'en (segmented display)"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"5 stacks with segmented labels: 95% | 88% | 72% | 55% | 38%"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"Full gradient: Red → Orange → Amber → Blue → Purple"})]}),r.jsx(c,{...e})]})},$={args:{buff:y("Elemental Weakness",3,[78,52,28],[70,50,30]),reportId:"abc123",fightId:"1",selectedTargetId:12345},render:e=>r.jsxs(n,{sx:{maxWidth:600,p:2},children:[r.jsxs(n,{sx:{mb:2},children:[r.jsx("strong",{children:"Multi-Stack: Elemental Weakness (segmented with group average)"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"Segmented display: 78% | 52% | 28%"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"#666",marginTop:"4px"},children:"With delta indicators: +8%, +2%, -2% vs group averages"})]}),r.jsx(c,{...e})]})},R={render:()=>{const e=[y("Heat Shock",3,[85,60,35],[70,55,30]),y("Touch of Z'en",5,[95,88,72,55,38]),y("Elemental Weakness",3,[78,52,28],[70,50,30]),g("Major Courage",84,87)];return r.jsxs(n,{sx:{maxWidth:600,p:2},children:[r.jsx(n,{sx:{mb:2},children:r.jsx("strong",{children:"Multi-Stack Comparison"})}),e.map((a,t)=>r.jsx(n,{sx:{mb:1},children:r.jsx(c,{buff:a,reportId:"abc123",fightId:"1",selectedTargetId:12345})},t))]})}},N={args:{buff:y("Heat Shock",3,[85,60,35],[70,55,30]),reportId:"abc123",fightId:"1",selectedTargetId:12345},parameters:{backgrounds:{default:"dark"}},render:e=>r.jsxs(n,{sx:{maxWidth:600,p:2,bgcolor:"#1a1a1a",borderRadius:2},children:[r.jsx(n,{sx:{mb:2,color:"#fff"},children:r.jsx("strong",{children:"Dark Mode Multi-Stack: Heat Shock"})}),r.jsx(c,{...e})]})};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const _e=["GroupAverage","AboveAverage","BelowAverage","NearAverage","SignificantlyAbove","SignificantlyBelow","MultipleBuffsComparison","DarkModeAboveAverage","DarkModeBelowAverage","MultiStackStagger","MultiStackTouchOfZen","MultiStackWithGroupAverage","MultiStackComparison","DarkModeMultiStack"];export{P as AboveAverage,C as BelowAverage,D as DarkModeAboveAverage,U as DarkModeBelowAverage,N as DarkModeMultiStack,I as GroupAverage,R as MultiStackComparison,z as MultiStackStagger,L as MultiStackTouchOfZen,$ as MultiStackWithGroupAverage,A as MultipleBuffsComparison,w as NearAverage,T as SignificantlyAbove,W as SignificantlyBelow,_e as __namedExportsOrder,Ee as default};
