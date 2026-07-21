import{o as e}from"./preload-helper-CHxnduP2.js";import{Dt as t,I as n}from"./iframe-Cj-StcoY.js";import{C as r,Dt as i,Nt as a,t as o}from"./material-D05zrpns.js";import{i as s,n as c,t as l}from"./playerDetails-DdF2txvh.js";var u,d,f,p,m=e((()=>{o(),t(),u=n(),d={normal:`#ffffff`,fine:`#62a603`,superior:`#417dc1`,epic:`#c040c0`,legendary:`#ffbf00`,mythic:`#ff6b35`},f={normal:`#e5e5e5`,fine:`#7cb342`,superior:`#5c9ce6`,epic:`#9978d4`,legendary:`#dec369`,mythic:`#c47a5a`},p=({gear:e,alt:t=`Gear ${e.id}`,size:n=32,className:a,style:o,showTooltip:s=!1,tooltipContent:c,tooltipPlacement:l=`top`,quality:p=`normal`,rounded:m=!0,useDesaturatedColors:h=!1,onClick:g})=>{let _=(0,u.jsx)(`img`,{src:`https://assets.rpglogs.com/img/eso/abilities/${e.icon}.png`,alt:t,className:a,onClick:g,onKeyDown:g?e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),g(e))}:void 0,tabIndex:g?0:void 0,role:g?`button`:void 0,style:{width:n,height:n,display:`inline-block`,verticalAlign:`middle`,border:p===`normal`?`none`:`2px solid ${(h?f:d)[p]}`,borderRadius:m?4:0,cursor:g?`pointer`:`default`,transition:`all 0.2s ease-in-out`,...o},onError:e=>{let t=e.target;t.style.display=`none`}}),v=p===`normal`?null:(0,u.jsxs)(i,{component:`span`,sx:{position:`absolute`,width:`1px`,height:`1px`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`},children:[p,` quality`]});return s&&c?(0,u.jsx)(r,{title:c,placement:l,enterTouchDelay:0,leaveTouchDelay:3e3,arrow:!0,children:(0,u.jsxs)(i,{component:`span`,sx:{display:`inline-flex`,alignItems:`center`,position:`relative`},children:[_,v]})}):(0,u.jsxs)(i,{component:`span`,sx:{display:`inline-flex`,alignItems:`center`,position:`relative`},children:[_,v]})};try{p.displayName=`GearIcon`,p.__docgenInfo={description:`GearIcon component displays gear/equipment icons from ESO with optional quality borders and tooltips`,displayName:`GearIcon`,filePath:`/home/runner/work/eso-toolkit/eso-toolkit/src/components/GearIcon.tsx`,methods:[],props:{gear:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`The gear item ID used to construct the icon URL`,name:`gear`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!0,tags:{},type:{name:`PlayerGear`}},alt:{defaultValue:{value:"`Gear ${gear.id}`"},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Alt text for the icon`,name:`alt`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`string | undefined`}},size:{defaultValue:{value:`32`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Size of the icon in pixels`,name:`size`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`number | undefined`}},className:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Additional CSS classes`,name:`className`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`string | undefined`}},style:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Additional styles`,name:`style`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`CSSProperties | undefined`}},showTooltip:{defaultValue:{value:`false`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Whether to show a tooltip with gear information`,name:`showTooltip`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},tooltipContent:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Custom tooltip content`,name:`tooltipContent`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`ReactNode`}},tooltipPlacement:{defaultValue:{value:`top`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Tooltip placement`,name:`tooltipPlacement`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`enum`,raw:`"bottom" | "left" | "right" | "top" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | undefined`,value:[{value:`undefined`},{value:`"bottom"`},{value:`"left"`},{value:`"right"`},{value:`"top"`},{value:`"top-start"`},{value:`"top-end"`},{value:`"bottom-start"`},{value:`"bottom-end"`}]}},quality:{defaultValue:{value:`normal`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Quality/rarity of the gear item for styling`,name:`quality`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`enum`,raw:`"mythic" | "normal" | "fine" | "superior" | "epic" | "legendary" | undefined`,value:[{value:`undefined`},{value:`"mythic"`},{value:`"normal"`},{value:`"fine"`},{value:`"superior"`},{value:`"epic"`},{value:`"legendary"`}]}},rounded:{defaultValue:{value:`true`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Whether the icon should be rounded`,name:`rounded`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},useDesaturatedColors:{defaultValue:{value:`false`},declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Whether to use desaturated colors (for gear details table)`,name:`useDesaturatedColors`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`boolean | undefined`}},onClick:{defaultValue:null,declarations:[{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`}],description:`Click handler`,name:`onClick`,parent:{fileName:`eso-toolkit/src/components/GearIcon.tsx`,name:`GearIconProps`},required:!1,tags:{},type:{name:`((event: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined`}}},tags:{}}}catch{}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{o(),m(),s(),h=n(),g=(e={})=>({id:-1,quality:5,icon:`gear_undnarlimor_head_a`,name:`Symphony of Blades Guise`,championPoints:160,trait:c.REINFORCED,enchantType:22,enchantQuality:5,setID:436,type:1,slot:l.HEAD,...e}),_={title:`Components/GearIcon`,component:p,parameters:{layout:`centered`,docs:{description:{component:`A component for displaying ESO gear/equipment icons with optional quality borders and tooltips.`}}},tags:[`autodocs`],argTypes:{gear:{control:{type:`object`},description:`The gear item object containing id, icon, name, etc.`},size:{control:{type:`range`,min:16,max:128,step:4},description:`Size of the icon in pixels`},quality:{control:{type:`select`},options:[`normal`,`fine`,`superior`,`epic`,`legendary`,`mythic`],description:`Quality/rarity of the gear item for styling`},rounded:{control:{type:`boolean`},description:`Whether the icon should be rounded`},showTooltip:{control:{type:`boolean`},description:`Whether to show a tooltip with gear information`},tooltipPlacement:{control:{type:`select`},options:[`top`,`bottom`,`left`,`right`,`top-start`,`top-end`,`bottom-start`,`bottom-end`],description:`Tooltip placement`},onClick:{description:`Click handler for the icon`}}},v={args:{gear:g(),size:32,quality:`normal`,rounded:!0,showTooltip:!1}},y={render:()=>(0,h.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:2},children:[(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:16}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`16px`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:24}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`24px`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:32}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`32px`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`48px`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:64}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`64px`})]})]}),parameters:{docs:{description:{story:`Different sizes of gear icons.`}}}},b={render:()=>(0,h.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:2,flexWrap:`wrap`},children:[(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`normal`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Normal`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`fine`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Fine`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`superior`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Superior`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`epic`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Epic`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`legendary`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Legendary`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`mythic`}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Mythic`})]})]}),parameters:{docs:{description:{story:`Different quality levels with colored borders.`}}}},x={args:{gear:g({name:`Epic Gear Item`,icon:`armor_heavy_chest_a`}),size:48,quality:`epic`,showTooltip:!0,tooltipContent:(0,h.jsxs)(i,{sx:{p:1},children:[(0,h.jsx)(a,{variant:`subtitle2`,color:`primary`,children:`Epic Gear Item`}),(0,h.jsx)(a,{variant:`body2`,children:`A legendary piece of equipment`}),(0,h.jsx)(a,{variant:`caption`,color:`text.secondary`,children:`Item ID: -1`})]})},parameters:{docs:{description:{story:`Gear icon with a custom tooltip. Hover to see the tooltip.`}}}},S={args:{gear:g({name:`Legendary Weapon`,icon:`weapon_sword_a`}),size:48,quality:`legendary`,onClick:()=>console.log(`Gear clicked!`)},parameters:{docs:{description:{story:`Clickable gear icon with hover effects.`}}}},C={render:()=>(0,h.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:4},children:[(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`epic`,rounded:!0}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Rounded`})]}),(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:g(),size:48,quality:`epic`,rounded:!1}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:`Square`})]})]}),parameters:{docs:{description:{story:`Comparison between rounded and square gear icons.`}}}},w={render:()=>(0,h.jsx)(i,{sx:{display:`flex`,alignItems:`center`,gap:2,flexWrap:`wrap`},children:[{name:`Basic Sword`,icon:`weapon_sword_a`,quality:1},{name:`Fine Shield`,icon:`armor_shield_a`,quality:2},{name:`Superior Armor`,icon:`armor_heavy_chest_a`,quality:3},{name:`Epic Helmet`,icon:`armor_heavy_head_a`,quality:4},{name:`Legendary Ring`,icon:`jewelry_ring_a`,quality:5},{name:`Mythic Artifact`,icon:`armor_mythic_a`,quality:6}].map((e,t)=>{let n=g({id:t+1,name:e.name,icon:e.icon,quality:e.quality}),r=[`normal`,`fine`,`superior`,`epic`,`legendary`,`mythic`][e.quality-1];return(0,h.jsxs)(i,{sx:{textAlign:`center`},children:[(0,h.jsx)(p,{gear:n,size:48,quality:r,showTooltip:!0,tooltipContent:(0,h.jsxs)(i,{sx:{p:1},children:[(0,h.jsx)(a,{variant:`subtitle2`,children:e.name}),(0,h.jsxs)(a,{variant:`caption`,children:[`ID: `,n.id]})]})}),(0,h.jsx)(a,{variant:`caption`,display:`block`,children:e.name})]},n.id)})}),parameters:{docs:{description:{story:`Different gear items with various qualities and tooltips.`}}}},T={args:{gear:g({name:`Mythic Artifact`,icon:`artifact_mythic_a`}),size:64,quality:`mythic`,style:{filter:`drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))`,borderRadius:`50%`}},parameters:{docs:{description:{story:`Gear icon with custom styling including drop shadow and circular border.`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    gear: createMockGear(),
    size: 32,
    quality: 'normal',
    rounded: true,
    showTooltip: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={16} />
        <Typography variant="caption" display="block">
          16px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={24} />
        <Typography variant="caption" display="block">
          24px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={32} />
        <Typography variant="caption" display="block">
          32px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} />
        <Typography variant="caption" display="block">
          48px
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={64} />
        <Typography variant="caption" display="block">
          64px
        </Typography>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Different sizes of gear icons.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    flexWrap: 'wrap'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="normal" />
        <Typography variant="caption" display="block">
          Normal
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="fine" />
        <Typography variant="caption" display="block">
          Fine
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="superior" />
        <Typography variant="caption" display="block">
          Superior
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="epic" />
        <Typography variant="caption" display="block">
          Epic
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="legendary" />
        <Typography variant="caption" display="block">
          Legendary
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="mythic" />
        <Typography variant="caption" display="block">
          Mythic
        </Typography>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Different quality levels with colored borders.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    gear: createMockGear({
      name: 'Epic Gear Item',
      icon: 'armor_heavy_chest_a'
    }),
    size: 48,
    quality: 'epic',
    showTooltip: true,
    tooltipContent: <Box sx={{
      p: 1
    }}>
        <Typography variant="subtitle2" color="primary">
          Epic Gear Item
        </Typography>
        <Typography variant="body2">A legendary piece of equipment</Typography>
        <Typography variant="caption" color="text.secondary">
          Item ID: -1
        </Typography>
      </Box>
  },
  parameters: {
    docs: {
      description: {
        story: 'Gear icon with a custom tooltip. Hover to see the tooltip.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    gear: createMockGear({
      name: 'Legendary Weapon',
      icon: 'weapon_sword_a'
    }),
    size: 48,
    quality: 'legendary',
    onClick: () => console.log('Gear clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'Clickable gear icon with hover effects.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 4
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="epic" rounded={true} />
        <Typography variant="caption" display="block">
          Rounded
        </Typography>
      </Box>
      <Box sx={{
      textAlign: 'center'
    }}>
        <GearIcon gear={createMockGear()} size={48} quality="epic" rounded={false} />
        <Typography variant="caption" display="block">
          Square
        </Typography>
      </Box>
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Comparison between rounded and square gear icons.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    flexWrap: 'wrap'
  }}>
      {[{
      name: 'Basic Sword',
      icon: 'weapon_sword_a',
      quality: 1
    }, {
      name: 'Fine Shield',
      icon: 'armor_shield_a',
      quality: 2
    }, {
      name: 'Superior Armor',
      icon: 'armor_heavy_chest_a',
      quality: 3
    }, {
      name: 'Epic Helmet',
      icon: 'armor_heavy_head_a',
      quality: 4
    }, {
      name: 'Legendary Ring',
      icon: 'jewelry_ring_a',
      quality: 5
    }, {
      name: 'Mythic Artifact',
      icon: 'armor_mythic_a',
      quality: 6
    }].map((item, index) => {
      const mockGear = createMockGear({
        id: index + 1,
        name: item.name,
        icon: item.icon,
        quality: item.quality
      });
      const qualityName = ['normal', 'fine', 'superior', 'epic', 'legendary', 'mythic'][item.quality - 1];
      return <Box key={mockGear.id} sx={{
        textAlign: 'center'
      }}>
            <GearIcon gear={mockGear} size={48} quality={qualityName as any} showTooltip tooltipContent={<Box sx={{
          p: 1
        }}>
                  <Typography variant="subtitle2">{item.name}</Typography>
                  <Typography variant="caption">ID: {mockGear.id}</Typography>
                </Box>} />
            <Typography variant="caption" display="block">
              {item.name}
            </Typography>
          </Box>;
    })}
    </Box>,
  parameters: {
    docs: {
      description: {
        story: 'Different gear items with various qualities and tooltips.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    gear: createMockGear({
      name: 'Mythic Artifact',
      icon: 'artifact_mythic_a'
    }),
    size: 64,
    quality: 'mythic',
    style: {
      filter: 'drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))',
      borderRadius: '50%'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Gear icon with custom styling including drop shadow and circular border.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Sizes`,`Qualities`,`WithTooltip`,`Clickable`,`RoundedVsSquare`,`DifferentGearItems`,`CustomStyling`]}))();export{S as Clickable,T as CustomStyling,v as Default,w as DifferentGearItems,b as Qualities,C as RoundedVsSquare,y as Sizes,x as WithTooltip,E as __namedExportsOrder,_ as default};