import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Box-C1NZhWRF.js";import{n as a,t as o}from"./Typography-BAQTIVEE.js";import{n as s,t as c}from"./Paper-CPw7yuZm.js";import{n as l,t as u}from"./Avatar-ChwlATg3.js";function d(e){let t=0;for(let n of e)t=t*31+n.charCodeAt(0)|0;let n=Math.abs(t)%360,r=e.split(/\s+/).filter(Boolean).slice(0,2).map(e=>e[0]).join(``).toUpperCase(),i=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="hsl(${n} 72% 58%)"/><stop offset="1" stop-color="hsl(${(n+52)%360} 72% 32%)"/></linearGradient></defs><circle cx="32" cy="32" r="30" fill="url(#g)"/><path d="M32 8 53 20v19L32 56 11 39V20z" fill="none" stroke="rgba(255,255,255,.62)" stroke-width="2"/><path d="m32 18 9 14-9 14-9-14z" fill="rgba(8,15,30,.42)"/><text x="32" y="36" fill="white" font-family="system-ui,sans-serif" font-size="12" font-weight="700" text-anchor="middle">${r}</text></svg>`;return`data:image/svg+xml,${encodeURIComponent(i)}`}function f(e){let t=e.replace(/#\d+$/,``).trim(),n=h.get(t);return n?d(n):null}var p,m,h,g;function _(){return(_=e((()=>{l(),t(),p=n(),m=[[`Lord Falgravn`,`Falgraven`],[`Captain Vrol`,`Vrol`],[`Yandir the Butcher`],[`Blood Drinker Thisa`],[`Hall of Fleshcraft`,`Shaper of Flesh`,`Shapers of Flesh`],[`Jynorah and Skorkhif`],[`Overfiend Kazpian`],[`Red Witch Gedna Relvel`],[`Tortured Ranyu`,`Tortured Kathutet`,`Tortured Amkaos`,`Tortured Trio`],[`Bow Breaker`],[`Lylanar and Turlassil`],[`Reef Guardian`],[`Sail Ripper`],[`Tideborn Taleria`],[`Ra Kotu`],[`The Warrior`],[`The Yokedas`,`Yokeda Rok'dun`,`Yokedas`],[`Saint Felms the Bold`,`Lord Felms`,`Saint Felms`],[`Saint Llothis the Pious`,`Saint Llothis`],[`Saint Olms the Just`,`Saint Olms`],[`Ash Titan`],[`Basks-in-Snakes`,`Basks-In-Snakes`],[`Flame-Herald Bahsei`],[`Oaxiltso`],[`Xalvakka`],[`Foundation Stone Atronach`,`Storm Atronach`],[`Lightning Storm Atronach`,`Stone Atronach`],[`The Mage`],[`Varlariel`],[`Shade of Galenwe`,`Galenwe`],[`Shade of Relequen`,`Relequen`],[`Shade of Siroria`,`Siroria`],[`Z'maja`],[`Ozara`],[`Possessed Manticora`,`Possessed Mantikora`],[`Stonebreaker`],[`The Serpent`,`Serpent`],[`Archcustodian`],[`Assembly General`],[`Hunter-Killer Fabricant`],[`Pinnacle Factotum`],[`The Refabrication Committee`],[`Cavot Agnan`,`Xynizata`],[`Dariel Lemonds`,`Count Ryelaz`],[`Orphic Shattered Shard`,`Jresazzel`],[`Xoryn`,`Baron Rize`],[`Zilyseet`,`Zilyesset`],[`Zhaj'hassa the Forgotten`],[`Rakkhat`],[`The Twins`,`Vashai`]],h=new Map,m.forEach(([e,...t])=>{[e,...t].forEach(t=>h.set(t,e))}),g=({bossName:e,size:t=32,sx:n={}})=>{let r=f(e);return r?(0,p.jsx)(u,{src:r,alt:e,sx:{width:t,height:t,border:`1.5px solid #b3b3b3f2`,boxShadow:`inset 0 2px 4px rgb(0 0 0 / 100%), 0 0 0 1px rgb(255 255 255 / 18%), 0 0 10px rgb(255 255 255 / 25%), 0 2px 6px rgb(0 0 0 / 60%)`,...n}}):null};try{g.displayName=`BossAvatar`,g.__docgenInfo={description:``,displayName:`BossAvatar`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/features/report_details/BossAvatar.tsx`,methods:[],props:{bossName:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`}],description:``,name:`bossName`,parent:{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`},required:!0,tags:{},type:{name:`string`}},size:{defaultValue:{value:`32`},declarations:[{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`}],description:``,name:`size`,parent:{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`},required:!1,tags:{},type:{name:`number | undefined`}},sx:{defaultValue:{value:`{}`},declarations:[{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`}],description:``,name:`sx`,parent:{fileName:`eso-toolkit/src/features/report_details/BossAvatar.tsx`,name:`BossAvatarProps`},required:!1,tags:{},type:{name:`SxProps<Theme> | undefined`}}},tags:{}}}catch{}try{f.displayName=`getBossAvatarSrc`,f.__docgenInfo={description:``,displayName:`getBossAvatarSrc`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/features/report_details/BossAvatar.tsx`,methods:[],props:{},tags:{}}}catch{}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{r(),s(),a(),_(),v=n(),y={title:`Components/BossAvatar`,component:g,parameters:{layout:`centered`},argTypes:{bossName:{control:`text`,description:`Name of the boss to display avatar for`},size:{control:{type:`range`,min:16,max:128,step:4},description:`Size of the avatar in pixels`},sx:{control:`object`,description:`Material-UI sx prop for custom styling`}}},b={args:{bossName:`Z'maja`,size:64}},x={args:{bossName:`Rakkhat`,size:32}},S={args:{bossName:`The Mage`,size:96}},C={args:{bossName:`Saint Olms the Just`,size:64,sx:{border:`3px solid gold`,boxShadow:`0 0 20px rgba(255, 215, 0, 0.5)`}}},w={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Lord Falgravn`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Lord Falgravn`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Captain Vrol`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Captain Vrol`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Yandir the Butcher`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Yandir the Butcher`})]})]})},T={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Oaxiltso`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Oaxiltso`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Basks-in-Snakes`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Basks-in-Snakes`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Xalvakka`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Xalvakka`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Flame-Herald Bahsei`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Flame-Herald Bahsei`})]})]})},E={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Shade of Galenwe`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Shade of Galenwe`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Shade of Relequen`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Shade of Relequen`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Shade of Siroria`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Shade of Siroria`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Z'maja`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Z'maja`})]})]})},D={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Hunter-Killer Fabricant`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Hunter-Killer`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Pinnacle Factotum`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Pinnacle Factotum`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Archcustodian`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Archcustodian`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Assembly General`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Assembly General`})]})]})},O={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Cavot Agnan`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Cavot Agnan`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Dariel Lemonds`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Dariel Lemonds`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Xoryn`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Xoryn`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Zilyseet`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`Zilyseet`})]})]})},k={render:()=>(0,v.jsxs)(c,{sx:{p:3,maxWidth:600},children:[(0,v.jsx)(o,{variant:`h6`,gutterBottom:!0,children:`Boss Name Aliases Test`}),(0,v.jsx)(o,{variant:`body2`,color:`text.secondary`,paragraph:!0,children:`The same boss avatar should appear for different name variations:`}),(0,v.jsxs)(i,{sx:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:2,alignItems:`center`},children:[(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Lord Falgravn`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"Lord Falgravn"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Falgraven`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"Falgraven"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Saint Olms the Just`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"Saint Olms the Just"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Saint Olms`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"Saint Olms"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`The Serpent`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"The Serpent"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Serpent`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`"Serpent"`})]})]})]})},A={render:()=>(0,v.jsxs)(c,{sx:{p:3,maxWidth:600},children:[(0,v.jsx)(o,{variant:`h6`,gutterBottom:!0,children:`Edge Cases Test`}),(0,v.jsxs)(i,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Z'maja #1`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`Boss with instance number: "Z'maja #1"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`Unknown Boss`,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`Unknown boss (should return null): "Unknown Boss"`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:``,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`Empty boss name (should return null)`})]}),(0,v.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,v.jsx)(g,{bossName:`   Z'maja   `,size:32}),(0,v.jsx)(o,{variant:`body2`,children:`Boss name with whitespace: " Z'maja "`})]})]})]})},j={render:()=>(0,v.jsxs)(i,{sx:{display:`flex`,gap:2,alignItems:`center`,flexWrap:`wrap`},children:[(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:16}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`16px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:24}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`24px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:32}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`32px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:48}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`48px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:64}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`64px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:96}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`96px`})]}),(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:`Rakkhat`,size:128}),(0,v.jsx)(o,{variant:`caption`,display:`block`,children:`128px`})]})]})},M={render:()=>(0,v.jsxs)(i,{sx:{p:2},children:[(0,v.jsx)(o,{variant:`h5`,gutterBottom:!0,children:`All Available Boss Avatars`}),(0,v.jsx)(o,{variant:`body2`,color:`text.secondary`,paragraph:!0,children:`Complete showcase of all boss avatars available in the component`}),[{title:`Kyne's Aegis`,bosses:[`Lord Falgravn`,`Captain Vrol`,`Yandir the Butcher`]},{title:`Rockgrove`,bosses:[`Oaxiltso`,`Basks-in-Snakes`,`Xalvakka`,`Ash Titan`,`Flame-Herald Bahsei`]},{title:`Cloudrest`,bosses:[`Shade of Galenwe`,`Shade of Relequen`,`Shade of Siroria`,`Z'maja`]},{title:`Dreadsail Reef`,bosses:[`Bow Breaker`,`Lylanar and Turlassil`,`Reef Guardian`,`Sail Ripper`,`Tideborn Taleria`]},{title:`Halls of Fabrication`,bosses:[`Hunter-Killer Fabricant`,`Pinnacle Factotum`,`Archcustodian`,`Assembly General`,`The Refabrication Committee`]},{title:`Lucent Citadel`,bosses:[`Cavot Agnan`,`Dariel Lemonds`,`Xoryn`,`Zilyseet`,`Orphic Shattered Shard`]},{title:`Asylum Sanctorium`,bosses:[`Saint Felms the Bold`,`Saint Llothis the Pious`,`Saint Olms the Just`]},{title:`Sanctum Ophidia`,bosses:[`Ozara`,`Possessed Manticora`,`Stonebreaker`,`The Serpent`]},{title:`Maw of Lorkhaj`,bosses:[`Zhaj'hassa the Forgotten`,`Rakkhat`,`The Twins`]},{title:`Hel Ra Citadel`,bosses:[`Ra Kotu`,`The Warrior`,`The Yokedas`]},{title:`Aetherian Archive`,bosses:[`Foundation Stone Atronach`,`Lightning Storm Atronach`,`The Mage`,`Varlariel`]},{title:`Ossein Cage`,bosses:[`Blood Drinker Thisa`,`Hall of Fleshcraft`,`Jynorah and Skorkhif`,`Overfiend Kazpian`,`Red Witch Gedna Relvel`,`Tortured Ranyu`]}].map(e=>(0,v.jsxs)(i,{sx:{mb:3},children:[(0,v.jsx)(o,{variant:`h6`,gutterBottom:!0,children:e.title}),(0,v.jsx)(i,{sx:{display:`flex`,gap:2,flexWrap:`wrap`},children:e.bosses.map(e=>(0,v.jsxs)(i,{sx:{textAlign:`center`},children:[(0,v.jsx)(g,{bossName:e,size:40}),(0,v.jsx)(o,{variant:`caption`,display:`block`,sx:{maxWidth:80,wordWrap:`break-word`},children:e})]},e))})]},e.title))]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    bossName: "Z'maja",
    size: 64
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    bossName: 'Rakkhat',
    size: 32
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    bossName: 'The Mage',
    size: 96
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    bossName: 'Saint Olms the Just',
    size: 64,
    sx: {
      border: '3px solid gold',
      boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)'
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Lord Falgravn" size={48} />
        <Typography variant="caption" display="block">
          Lord Falgravn
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Captain Vrol" size={48} />
        <Typography variant="caption" display="block">
          Captain Vrol
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Yandir the Butcher" size={48} />
        <Typography variant="caption" display="block">
          Yandir the Butcher
        </Typography>
      </Box>
    </Box>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Oaxiltso" size={48} />
        <Typography variant="caption" display="block">
          Oaxiltso
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Basks-in-Snakes" size={48} />
        <Typography variant="caption" display="block">
          Basks-in-Snakes
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Xalvakka" size={48} />
        <Typography variant="caption" display="block">
          Xalvakka
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Flame-Herald Bahsei" size={48} />
        <Typography variant="caption" display="block">
          Flame-Herald Bahsei
        </Typography>
      </Box>
    </Box>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Shade of Galenwe" size={48} />
        <Typography variant="caption" display="block">
          Shade of Galenwe
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Shade of Relequen" size={48} />
        <Typography variant="caption" display="block">
          Shade of Relequen
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Shade of Siroria" size={48} />
        <Typography variant="caption" display="block">
          Shade of Siroria
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Z'maja" size={48} />
        <Typography variant="caption" display="block">
          Z'maja
        </Typography>
      </Box>
    </Box>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Hunter-Killer Fabricant" size={48} />
        <Typography variant="caption" display="block">
          Hunter-Killer
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Pinnacle Factotum" size={48} />
        <Typography variant="caption" display="block">
          Pinnacle Factotum
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Archcustodian" size={48} />
        <Typography variant="caption" display="block">
          Archcustodian
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Assembly General" size={48} />
        <Typography variant="caption" display="block">
          Assembly General
        </Typography>
      </Box>
    </Box>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Cavot Agnan" size={48} />
        <Typography variant="caption" display="block">
          Cavot Agnan
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Dariel Lemonds" size={48} />
        <Typography variant="caption" display="block">
          Dariel Lemonds
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Xoryn" size={48} />
        <Typography variant="caption" display="block">
          Xoryn
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Zilyseet" size={48} />
        <Typography variant="caption" display="block">
          Zilyseet
        </Typography>
      </Box>
    </Box>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3,
    maxWidth: 600
  }}>
      <Typography variant="h6" gutterBottom>
        Boss Name Aliases Test
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        The same boss avatar should appear for different name variations:
      </Typography>

      <Box sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 2,
      alignItems: 'center'
    }}>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Lord Falgravn" size={32} />
          <Typography variant="body2">"Lord Falgravn"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Falgraven" size={32} />
          <Typography variant="body2">"Falgraven"</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Saint Olms the Just" size={32} />
          <Typography variant="body2">"Saint Olms the Just"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Saint Olms" size={32} />
          <Typography variant="body2">"Saint Olms"</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="The Serpent" size={32} />
          <Typography variant="body2">"The Serpent"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Serpent" size={32} />
          <Typography variant="body2">"Serpent"</Typography>
        </Box>
      </Box>
    </Paper>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3,
    maxWidth: 600
  }}>
      <Typography variant="h6" gutterBottom>
        Edge Cases Test
      </Typography>

      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Z'maja #1" size={32} />
          <Typography variant="body2">Boss with instance number: "Z'maja #1"</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="Unknown Boss" size={32} />
          <Typography variant="body2">Unknown boss (should return null): "Unknown Boss"</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="" size={32} />
          <Typography variant="body2">Empty boss name (should return null)</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <BossAvatar bossName="   Z'maja   " size={32} />
          <Typography variant="body2">Boss name with whitespace: " Z'maja "</Typography>
        </Box>
      </Box>
    </Paper>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={16} />
        <Typography variant="caption" display="block">
          16px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={24} />
        <Typography variant="caption" display="block">
          24px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={32} />
        <Typography variant="caption" display="block">
          32px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={48} />
        <Typography variant="caption" display="block">
          48px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={64} />
        <Typography variant="caption" display="block">
          64px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={96} />
        <Typography variant="caption" display="block">
          96px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <BossAvatar bossName="Rakkhat" size={128} />
        <Typography variant="caption" display="block">
          128px
        </Typography>
      </Box>
    </Box>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    p: 2
  }}>
      <Typography variant="h5" gutterBottom>
        All Available Boss Avatars
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Complete showcase of all boss avatars available in the component
      </Typography>

      {[{
      title: "Kyne's Aegis",
      bosses: ['Lord Falgravn', 'Captain Vrol', 'Yandir the Butcher']
    }, {
      title: 'Rockgrove',
      bosses: ['Oaxiltso', 'Basks-in-Snakes', 'Xalvakka', 'Ash Titan', 'Flame-Herald Bahsei']
    }, {
      title: 'Cloudrest',
      bosses: ['Shade of Galenwe', 'Shade of Relequen', 'Shade of Siroria', "Z'maja"]
    }, {
      title: 'Dreadsail Reef',
      bosses: ['Bow Breaker', 'Lylanar and Turlassil', 'Reef Guardian', 'Sail Ripper', 'Tideborn Taleria']
    }, {
      title: 'Halls of Fabrication',
      bosses: ['Hunter-Killer Fabricant', 'Pinnacle Factotum', 'Archcustodian', 'Assembly General', 'The Refabrication Committee']
    }, {
      title: 'Lucent Citadel',
      bosses: ['Cavot Agnan', 'Dariel Lemonds', 'Xoryn', 'Zilyseet', 'Orphic Shattered Shard']
    }, {
      title: 'Asylum Sanctorium',
      bosses: ['Saint Felms the Bold', 'Saint Llothis the Pious', 'Saint Olms the Just']
    }, {
      title: 'Sanctum Ophidia',
      bosses: ['Ozara', 'Possessed Manticora', 'Stonebreaker', 'The Serpent']
    }, {
      title: 'Maw of Lorkhaj',
      bosses: ["Zhaj'hassa the Forgotten", 'Rakkhat', 'The Twins']
    }, {
      title: 'Hel Ra Citadel',
      bosses: ['Ra Kotu', 'The Warrior', 'The Yokedas']
    }, {
      title: 'Aetherian Archive',
      bosses: ['Foundation Stone Atronach', 'Lightning Storm Atronach', 'The Mage', 'Varlariel']
    }, {
      title: 'Ossein Cage',
      bosses: ['Blood Drinker Thisa', 'Hall of Fleshcraft', 'Jynorah and Skorkhif', 'Overfiend Kazpian', 'Red Witch Gedna Relvel', 'Tortured Ranyu']
    }].map(trial => <Box key={trial.title} sx={{
      mb: 3
    }}>
          <Typography variant="h6" gutterBottom>
            {trial.title}
          </Typography>
          <Box sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }}>
            {trial.bosses.map(boss => <Box key={boss} sx={{
          textAlign: 'center'
        }}>
                <BossAvatar bossName={boss} size={40} />
                <Typography variant="caption" display="block" sx={{
            maxWidth: 80,
            wordWrap: 'break-word'
          }}>
                  {boss}
                </Typography>
              </Box>)}
          </Box>
        </Box>)}
    </Box>
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Small`,`Large`,`WithCustomStyling`,`KynesAegisBosses`,`RockgroveBosses`,`CloudrestBosses`,`HallsOfFabricationBosses`,`LucentCitadelBosses`,`NameAliases`,`EdgeCases`,`SizeVariations`,`AllAvailableBosses`]})))()}P();export{M as AllAvailableBosses,E as CloudrestBosses,b as Default,A as EdgeCases,D as HallsOfFabricationBosses,w as KynesAegisBosses,S as Large,O as LucentCitadelBosses,k as NameAliases,T as RockgroveBosses,j as SizeVariations,x as Small,C as WithCustomStyling,N as __namedExportsOrder,y as default};