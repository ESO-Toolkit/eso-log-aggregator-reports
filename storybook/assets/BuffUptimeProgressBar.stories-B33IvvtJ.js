import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{Et as n,I as r}from"./iframe-B-4xSgzE.js";import{Ct as i,V as a,_t as o,kt as s,qt as c,rt as l,st as u,t as d}from"./material-BQNz4dTj.js";import{n as f,t as p}from"./ExpandMore-DckRO3jq.js";import{i as m,n as h,r as g,t as _}from"./TrendingUp-wUgy-VtK.js";var v,y,b,x,S=t((()=>{f(),m(),h(),d(),v=e(n()),y=r(),b=(e,t,n,r,i,a,o)=>{let s=`https://www.esologs.com/reports/${e}?fight=${t}`;if(o&&o.length>0){let e=`2%24Off%24%23244F4B%24expression%24ability.id%20IN%20%28${o.join(`%2C`)}%29`;s+=`&type=auras&spells=debuffs&hostility=1&pins=${e}`}else s+=`&type=auras&hostility=${a}&ability=${n}`,i&&(s+=`&spells=auras`);return r?i?s+=`&source=${r}`:s+=`&target=${r}`:a===1&&(s+=`&sourceclass=Boss`),s},x=({buff:e,reportId:t,fightId:n,selectedTargetId:r})=>{let d=c(),[f,m]=v.useState(!1),h=v.useId(),x=v.useCallback((e,t)=>{let n=d.palette.mode===`dark`?[`linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)`,`linear-gradient(90deg, #f97316 0%, #c2410c 100%)`,`linear-gradient(90deg, #f59e0b 0%, #92400e 100%)`,`linear-gradient(90deg, #3b82f6 0%, #1e3a8a 100%)`,`linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)`]:[`linear-gradient(90deg, #ef4444 0%, #b91c1c 100%)`,`linear-gradient(90deg, #f97316 0%, #c2410c 100%)`,`linear-gradient(90deg, #f59e0b 0%, #92400e 100%)`,`linear-gradient(90deg, #06b6d4 0%, #1e3a8a 100%)`,`linear-gradient(90deg, #8b5cf6 0%, #4c1d95 100%)`],r=n.length-t;return n[Math.max(0,Math.min(r+e-1,n.length-1))]},[d.palette.mode]),S=v.useMemo(()=>e.allStacksData&&e.allStacksData.length>0?e.allStacksData[e.allStacksData.length-1]:{totalDuration:e.totalDuration,uptime:e.uptime,uptimePercentage:e.uptimePercentage,applications:e.applications,groupAverageUptimePercentage:e.groupAverageUptimePercentage},[e]),C=Math.max(0,Math.min(100,S.uptimePercentage)),w=v.useMemo(()=>{let t=S.groupAverageUptimePercentage??e.groupAverageUptimePercentage;return t===void 0?null:S.uptimePercentage-t},[S.uptimePercentage,S.groupAverageUptimePercentage,e.groupAverageUptimePercentage]),T=v.useCallback(i=>{if(e.allStacksData&&e.allStacksData.length>0){i&&i.stopPropagation(),m(e=>!e);return}let a=b(t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(a,`_blank`)},[t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds,e.allStacksData]);return(0,y.jsxs)(i,{sx:{width:`100%`,position:`relative`},children:[(0,y.jsxs)(i,{role:`button`,tabIndex:0,"aria-label":`${e.abilityName}: ${Math.round(C)}% uptime`,onClick:T,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),T())},sx:{position:`relative`,height:e.allStacksData?56:48,borderRadius:2,cursor:`pointer`,"&:hover":{opacity:.9},bgcolor:d.palette.mode===`dark`?`rgba(255,255,255,0.08)`:`rgba(203, 213, 225, 0.3)`,border:d.palette.mode===`dark`?`none`:`1px solid rgba(15, 23, 42, 0.08)`,boxShadow:d.palette.mode===`dark`?`inset 0 1px 3px rgba(0, 0, 0, 0.5)`:`inset 0 1px 2px rgba(15, 23, 42, 0.1)`,overflow:`hidden`},children:[e.allStacksData?e.allStacksData.slice().sort((e,t)=>e.stackLevel-t.stackLevel).map(t=>{let n=Math.max(0,Math.min(100,t.uptimePercentage)),r=e.allStacksData.length;return(0,y.jsx)(i,{sx:{position:`absolute`,top:0,left:0,height:`100%`,width:`${n}%`,background:x(t.stackLevel,r),borderRadius:2,boxShadow:d.palette.mode===`dark`?`0 1px 4px rgba(0, 0, 0, 0.3)`:`0 1px 2px rgba(0, 0, 0, 0.1)`,transition:`width 0.3s ease-in-out, background 0.3s ease-in-out`}},t.stackLevel)}):null,!e.allStacksData&&(0,y.jsx)(a,{variant:`determinate`,value:C,"aria-hidden":`true`,sx:{height:`100%`,borderRadius:2,bgcolor:`transparent`,"& .MuiLinearProgress-bar":{borderRadius:2,background:d.palette.mode===`dark`?`linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)`:`linear-gradient(90deg, #67e8f9 0%, #93c5fd 25%, #c4b5fd 75%, #f9a8d4 100%)`,boxShadow:d.palette.mode===`dark`?`0 2px 8px rgba(59, 130, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2)`:`0 1px 3px rgba(103, 232, 249, 0.3), 0 0 8px rgba(147, 197, 253, 0.2)`}}})]}),(0,y.jsxs)(i,{sx:{position:`absolute`,top:0,left:0,right:0,height:e.allStacksData?56:48,display:`flex`,alignItems:`center`,px:2,gap:1.5,pointerEvents:`none`},children:[e.icon?(0,y.jsx)(l,{src:`https://assets.rpglogs.com/img/eso/abilities/${e.icon}.png`,alt:``,"aria-hidden":`true`,sx:{width:32,height:32,borderRadius:1,boxShadow:1,flexShrink:0},variant:`rounded`}):(0,y.jsx)(l,{"aria-hidden":`true`,sx:{width:32,height:32,flexShrink:0},variant:`rounded`,children:e.abilityName.charAt(0)}),(0,y.jsxs)(i,{"aria-hidden":`true`,sx:{flex:1,minWidth:0},children:[(0,y.jsx)(s,{variant:`body2`,sx:{fontWeight:600,color:d.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:d.palette.mode===`dark`?`1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)`:`1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,mb:.25},children:e.abilityName}),(0,y.jsxs)(s,{variant:`caption`,sx:{color:d.palette.mode===`dark`?`rgba(255,255,255,0.85)`:`rgba(30, 41, 59, 0.8)`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.7), 0 0 3px rgba(255,255,255,0.5)`,fontSize:{xs:`0.65rem`,sm:`0.7rem`,md:`0.75rem`}},children:[(0,y.jsxs)(i,{component:`span`,sx:{display:{xs:`none`,sm:`inline`}},children:[S.applications,` applications • `,S.uptime.toFixed(1),`s total`]}),(0,y.jsxs)(i,{component:`span`,sx:{display:{xs:`inline`,sm:`none`}},children:[S.applications,` apps • `,S.uptime.toFixed(1),`s total`]})]})]}),(0,y.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1,flexShrink:0},children:[(0,y.jsxs)(s,{variant:`body2`,"aria-hidden":`true`,sx:{fontWeight:700,color:d.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:d.palette.mode===`dark`?`1px 1px 3px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5), 2px 2px 4px rgba(0,0,0,0.7)`:`1px 1px 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)`},children:[Math.round(C),`%`]}),w!==null&&(0,y.jsx)(i,{"aria-hidden":`true`,sx:{display:`flex`,alignItems:`center`,gap:.5,ml:.5},children:Math.abs(w)<2?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.9rem`,color:d.palette.mode===`dark`?`#94a3b8`:`#64748b`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.9)`},children:`≈`}),(0,y.jsxs)(s,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:d.palette.mode===`dark`?`#94a3b8`:`#64748b`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)`},children:[w>0?`+`:``,Math.round(w),`%`]})]}):(0,y.jsxs)(y.Fragment,{children:[w>0?(0,y.jsx)(_,{sx:{fontSize:`1rem`,color:`#10b981`,filter:`drop-shadow(0 1px 2px rgba(0,0,0,0.3))`}}):(0,y.jsx)(g,{sx:{fontSize:`1rem`,color:`#ef4444`,filter:`drop-shadow(0 1px 2px rgba(0,0,0,0.3))`}}),(0,y.jsxs)(s,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:w>0?`#10b981`:`#ef4444`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(0,0,0,0.6)`:`1px 1px 1px rgba(255,255,255,0.9), 0 0 3px rgba(255,255,255,0.7)`},children:[w>0?`+`:``,Math.round(w),`%`]})]})}),e.allStacksData&&e.allStacksData.length>0&&(0,y.jsx)(u,{size:`small`,"aria-label":`Toggle ${e.abilityName} stacks`,"aria-expanded":f,"aria-controls":h,sx:{ml:.5,padding:.5,pointerEvents:`auto`,color:d.palette.mode===`dark`?`#ffffff`:`#1e293b`,transform:f?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.3s ease-in-out`},onClick:e=>{e.stopPropagation(),m(e=>!e)},children:(0,y.jsx)(p,{fontSize:`small`})})]})]}),e.allStacksData&&e.allStacksData.length>0&&!f&&(0,y.jsx)(i,{sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:1,mt:.5,flexWrap:`wrap`},children:e.allStacksData.map((t,n)=>(0,y.jsxs)(v.Fragment,{children:[n>0&&(0,y.jsx)(s,{variant:`caption`,sx:{color:d.palette.mode===`dark`?`#64748b`:`#94a3b8`,fontSize:`0.7rem`,fontWeight:500},children:`|`}),(0,y.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:[(0,y.jsx)(i,{sx:{width:8,height:8,borderRadius:`2px`,background:x(t.stackLevel,e.allStacksData.length),flexShrink:0}}),(0,y.jsxs)(s,{variant:`caption`,sx:{fontSize:`0.7rem`,fontWeight:600,color:d.palette.mode===`dark`?`#e2e8f0`:`#475569`},children:[Math.round(t.uptimePercentage),`%`]})]})]},t.stackLevel))}),e.allStacksData&&(0,y.jsx)(o,{in:f,timeout:300,id:h,children:(0,y.jsx)(i,{sx:{width:`100%`,mt:1},children:e.allStacksData.slice().sort((e,t)=>t.uptimePercentage-e.uptimePercentage).map(a=>{let o=Math.max(0,Math.min(100,a.uptimePercentage)),c=a.groupAverageUptimePercentage===void 0?null:a.uptimePercentage-a.groupAverageUptimePercentage;return(0,y.jsx)(i,{sx:{width:`100%`,mb:.75,cursor:`pointer`,animation:`fadeIn 0.3s ease-in-out`,"@keyframes fadeIn":{from:{opacity:0,transform:`translateY(-10px)`},to:{opacity:1,transform:`translateY(0)`}},"&:hover":{opacity:.9}},onClick:i=>{i.stopPropagation();let a=b(t,n,e.abilityGameID,r,e.isDebuff,e.hostilityType,e.dotAbilityIds);window.open(a,`_blank`)},children:(0,y.jsxs)(i,{sx:{position:`relative`,height:32,borderRadius:1.5,bgcolor:d.palette.mode===`dark`?`rgba(255,255,255,0.05)`:`rgba(203, 213, 225, 0.2)`,border:d.palette.mode===`dark`?`none`:`1px solid rgba(15, 23, 42, 0.08)`,boxShadow:d.palette.mode===`dark`?`inset 0 1px 2px rgba(0, 0, 0, 0.3)`:`inset 0 1px 1px rgba(15, 23, 42, 0.05)`,overflow:`hidden`},children:[(0,y.jsx)(i,{sx:{position:`absolute`,top:0,left:0,height:`100%`,width:`${o}%`,background:x(a.stackLevel,e.allStacksData.length),borderRadius:1.5,transition:`width 0.3s ease-in-out`}}),(0,y.jsxs)(i,{sx:{position:`absolute`,top:0,left:0,right:0,height:`100%`,display:`flex`,alignItems:`center`,px:1.5,gap:1},children:[(0,y.jsx)(i,{sx:{width:10,height:10,borderRadius:`2px`,background:x(a.stackLevel,e.allStacksData.length),flexShrink:0,border:d.palette.mode===`dark`?`1px solid rgba(255,255,255,0.2)`:`1px solid rgba(0,0,0,0.1)`}}),(0,y.jsxs)(s,{variant:`body2`,sx:{fontWeight:600,fontSize:`0.8rem`,color:d.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.8)`,flex:1},children:[`Stack `,a.stackLevel]}),(0,y.jsxs)(s,{variant:`caption`,sx:{color:d.palette.mode===`dark`?`rgba(255,255,255,0.7)`:`rgba(30, 41, 59, 0.7)`,textShadow:d.palette.mode===`dark`?`1px 1px 1px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.7)`,fontSize:`0.7rem`},children:[a.applications,`x`]}),(0,y.jsxs)(s,{variant:`body2`,sx:{fontWeight:700,fontSize:`0.85rem`,color:d.palette.mode===`dark`?`#ffffff`:`#1e293b`,textShadow:d.palette.mode===`dark`?`1px 1px 2px rgba(0,0,0,0.8)`:`1px 1px 1px rgba(255,255,255,0.8)`},children:[Math.round(o),`%`]}),c!==null&&(0,y.jsx)(i,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:Math.abs(c)<2?(0,y.jsx)(s,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.7rem`,color:d.palette.mode===`dark`?`#94a3b8`:`#64748b`},children:`≈`}):(0,y.jsxs)(y.Fragment,{children:[c>0?(0,y.jsx)(_,{sx:{fontSize:`0.9rem`,color:`#10b981`}}):(0,y.jsx)(g,{sx:{fontSize:`0.9rem`,color:`#ef4444`}}),(0,y.jsxs)(s,{variant:`caption`,sx:{fontWeight:700,fontSize:`0.65rem`,color:c>0?`#10b981`:`#ef4444`},children:[c>0?`+`:``,Math.round(c),`%`]})]})})]})]})},a.stackLevel)})})})]})};try{x.displayName=`BuffUptimeProgressBar`,x.__docgenInfo={description:``,displayName:`BuffUptimeProgressBar`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,methods:[],props:{buff:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`buff`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`BuffUptime`}},reportId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`reportId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`string | null`}},fightId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`fightId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`string | null`}},selectedTargetId:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`}],description:``,name:`selectedTargetId`,parent:{fileName:`eso-toolkit/src/features/report_details/insights/BuffUptimeProgressBar.tsx`,name:`BuffUptimeProgressBarProps`},required:!0,tags:{},type:{name:`number | null`}}},tags:{}}}catch{}})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;t((()=>{d(),S(),C=r(),w={title:`Features/BuffUptimes/BuffUptimeProgressBar`,component:x,parameters:{layout:`padded`},tags:[`autodocs`]},T=(e,t,n)=>({abilityGameID:`12345`,abilityName:e,icon:`1234`,totalDuration:t/100*2e5,uptime:t/100*200,uptimePercentage:t,isDebuff:!1,applications:Math.floor(t/100*50),hostilityType:0,uniqueKey:`${e}-0`,groupAverageUptimePercentage:n}),E=(e,t,n,r)=>{let i=n.map((e,t)=>({stackLevel:t+1,totalDuration:e/100*2e5,uptime:e/100*200,uptimePercentage:e,applications:Math.floor(e/100*50),groupAverageUptimePercentage:r?.[t]})),a=i[i.length-1];return{abilityGameID:`12345`,abilityName:e,icon:`1234`,totalDuration:a.totalDuration,uptime:a.uptime,uptimePercentage:a.uptimePercentage,isDebuff:!0,applications:a.applications,hostilityType:1,uniqueKey:`${e}-0`,stackLevel:t,maxStacks:t,allStacksData:i}},D={args:{buff:T(`Major Courage`,84),reportId:`abc123`,fightId:`1`,selectedTargetId:null},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},O={args:{buff:T(`Minor Savagery`,99,98),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},k={args:{buff:T(`Major Savagery`,23,31),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},A={args:{buff:T(`Major Courage`,84,84.3),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},j={args:{buff:T(`Major Courage`,95,75),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},M={args:{buff:T(`Major Sorcery`,12,45),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2},children:(0,C.jsx)(x,{...e})})},N={render:()=>{let e=[T(`Major Savagery`,23,31),T(`Minor Savagery`,99,98),T(`Major Courage`,84,87),T(`Minor Courage`,97,96),T(`Major Berserk`,8,12),T(`Minor Berserk`,75,84),T(`Major Sorcery`,0,13)];return(0,C.jsxs)(i,{sx:{maxWidth:600,p:2},children:[(0,C.jsx)(i,{sx:{mb:2},children:(0,C.jsx)(`strong`,{children:`Player Buff Uptimes vs Group Average`})}),e.map((e,t)=>(0,C.jsx)(i,{sx:{mb:1},children:(0,C.jsx)(x,{buff:e,reportId:`abc123`,fightId:`1`,selectedTargetId:12345})},t))]})}},P={args:{buff:T(`Minor Savagery`,99,98),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:(0,C.jsx)(x,{...e})})},F={args:{buff:T(`Major Savagery`,23,31),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,C.jsx)(i,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:(0,C.jsx)(x,{...e})})},I={args:{buff:E(`Heat Shock`,3,[85,60,35]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsxs)(i,{sx:{maxWidth:600,p:2},children:[(0,C.jsxs)(i,{sx:{mb:2},children:[(0,C.jsx)(`strong`,{children:`Multi-Stack: Heat Shock (segmented display)`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Overlaid colored bars with segmented labels below: 85% | 60% | 35%`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Color gradient: Amber → Blue → Purple (blue/purple side for 3-stack)`})]}),(0,C.jsx)(x,{...e})]})},L={args:{buff:E(`Touch of Z'en`,5,[95,88,72,55,38]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsxs)(i,{sx:{maxWidth:600,p:2},children:[(0,C.jsxs)(i,{sx:{mb:2},children:[(0,C.jsx)(`strong`,{children:`Multi-Stack: Touch of Z'en (segmented display)`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`5 stacks with segmented labels: 95% | 88% | 72% | 55% | 38%`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Full gradient: Red → Orange → Amber → Blue → Purple`})]}),(0,C.jsx)(x,{...e})]})},R={args:{buff:E(`Elemental Weakness`,3,[78,52,28],[70,50,30]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},render:e=>(0,C.jsxs)(i,{sx:{maxWidth:600,p:2},children:[(0,C.jsxs)(i,{sx:{mb:2},children:[(0,C.jsx)(`strong`,{children:`Multi-Stack: Elemental Weakness (segmented with group average)`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`Segmented display: 78% | 52% | 28%`}),(0,C.jsx)(`div`,{style:{fontSize:`0.85rem`,color:`#666`,marginTop:`4px`},children:`With delta indicators: +8%, +2%, -2% vs group averages`})]}),(0,C.jsx)(x,{...e})]})},z={render:()=>{let e=[E(`Heat Shock`,3,[85,60,35],[70,55,30]),E(`Touch of Z'en`,5,[95,88,72,55,38]),E(`Elemental Weakness`,3,[78,52,28],[70,50,30]),T(`Major Courage`,84,87)];return(0,C.jsxs)(i,{sx:{maxWidth:600,p:2},children:[(0,C.jsx)(i,{sx:{mb:2},children:(0,C.jsx)(`strong`,{children:`Multi-Stack Comparison`})}),e.map((e,t)=>(0,C.jsx)(i,{sx:{mb:1},children:(0,C.jsx)(x,{buff:e,reportId:`abc123`,fightId:`1`,selectedTargetId:12345})},t))]})}},B={args:{buff:E(`Heat Shock`,3,[85,60,35],[70,55,30]),reportId:`abc123`,fightId:`1`,selectedTargetId:12345},parameters:{backgrounds:{default:`dark`}},render:e=>(0,C.jsxs)(i,{sx:{maxWidth:600,p:2,bgcolor:`#1a1a1a`,borderRadius:2},children:[(0,C.jsx)(i,{sx:{mb:2,color:`#fff`},children:(0,C.jsx)(`strong`,{children:`Dark Mode Multi-Stack: Heat Shock`})}),(0,C.jsx)(x,{...e})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V=[`GroupAverage`,`AboveAverage`,`BelowAverage`,`NearAverage`,`SignificantlyAbove`,`SignificantlyBelow`,`MultipleBuffsComparison`,`DarkModeAboveAverage`,`DarkModeBelowAverage`,`MultiStackStagger`,`MultiStackTouchOfZen`,`MultiStackWithGroupAverage`,`MultiStackComparison`,`DarkModeMultiStack`]}))();export{O as AboveAverage,k as BelowAverage,P as DarkModeAboveAverage,F as DarkModeBelowAverage,B as DarkModeMultiStack,D as GroupAverage,z as MultiStackComparison,I as MultiStackStagger,L as MultiStackTouchOfZen,R as MultiStackWithGroupAverage,N as MultipleBuffsComparison,A as NearAverage,j as SignificantlyAbove,M as SignificantlyBelow,V as __namedExportsOrder,w as default};