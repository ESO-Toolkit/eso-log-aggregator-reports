import{j as e}from"./iframe-ODny5W4x.js";import{T as I}from"./Tooltip-B7mccrV5.js";import{B as a}from"./Box-CZMAL7IV.js";import{G as A,a as S}from"./playerDetails-PyWZli5-.js";import{T as r}from"./Typography-DC93-00b.js";import"./preload-helper-Ct5FWWRu.js";import"./useId-mkhG51nb.js";import"./useTheme-Bpnn9ceA.js";import"./useSlot-CSOChvmx.js";import"./useForkRef-BlRAsDhG.js";import"./useTimeout-BsXcpxwJ.js";import"./useEnhancedEffect-B0PBTZ2Y.js";import"./utils-DndFcZJw.js";import"./index-Bbxkk5pW.js";import"./index-IFupNq4U.js";const C={normal:"#ffffff",fine:"#62a603",superior:"#417dc1",epic:"#c040c0",legendary:"#ffbf00",mythic:"#ff6b35"},M={normal:"#e5e5e5",fine:"#7cb342",superior:"#5c9ce6",epic:"#9978d4",legendary:"#dec369",mythic:"#c47a5a"},o=({gear:i,alt:g=`Gear ${i.id}`,size:n=32,className:x,style:b,showTooltip:k=!1,tooltipContent:h,tooltipPlacement:T="top",quality:f="normal",rounded:j=!0,useDesaturatedColors:G=!1,onClick:v})=>{const _=`https://assets.rpglogs.com/img/eso/abilities/${i.icon}.png`,w=G?M:C,q=e.jsx("img",{src:_,alt:g,className:x,onClick:v,style:{width:n,height:n,display:"inline-block",verticalAlign:"middle",border:f!=="normal"?`2px solid ${w[f]}`:"none",borderRadius:j?4:0,cursor:v?"pointer":"default",transition:"all 0.2s ease-in-out",...b},onError:B=>{const z=B.target;z.style.display="none"}});return k&&h?e.jsx(I,{title:h,placement:T,enterTouchDelay:0,leaveTouchDelay:3e3,arrow:!0,children:e.jsx(a,{component:"span",sx:{display:"inline-flex",alignItems:"center"},children:q})}):q};try{o.displayName="GearIcon",o.__docgenInfo={description:"GearIcon component displays gear/equipment icons from ESO with optional quality borders and tooltips",displayName:"GearIcon",props:{gear:{defaultValue:null,description:"The gear item ID used to construct the icon URL",name:"gear",required:!0,type:{name:"PlayerGear"}},alt:{defaultValue:{value:"`Gear ${gear.id}`"},description:"Alt text for the icon",name:"alt",required:!1,type:{name:"string | undefined"}},size:{defaultValue:{value:"32"},description:"Size of the icon in pixels",name:"size",required:!1,type:{name:"number | undefined"}},className:{defaultValue:null,description:"Additional CSS classes",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Additional styles",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},showTooltip:{defaultValue:{value:"false"},description:"Whether to show a tooltip with gear information",name:"showTooltip",required:!1,type:{name:"boolean | undefined"}},tooltipContent:{defaultValue:null,description:"Custom tooltip content",name:"tooltipContent",required:!1,type:{name:"ReactNode"}},tooltipPlacement:{defaultValue:{value:"top"},description:"Tooltip placement",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'}]}},quality:{defaultValue:{value:"normal"},description:"Quality/rarity of the gear item for styling",name:"quality",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"mythic"'},{value:'"normal"'},{value:'"fine"'},{value:'"superior"'},{value:'"epic"'},{value:'"legendary"'}]}},rounded:{defaultValue:{value:"true"},description:"Whether the icon should be rounded",name:"rounded",required:!1,type:{name:"boolean | undefined"}},useDesaturatedColors:{defaultValue:{value:"false"},description:"Whether to use desaturated colors (for gear details table)",name:"useDesaturatedColors",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void) | undefined"}}}}}catch{}const t=(i={})=>({id:-1,quality:5,icon:"gear_undnarlimor_head_a",name:"Symphony of Blades Guise",championPoints:160,trait:S.REINFORCED,enchantType:22,enchantQuality:5,setID:436,type:1,slot:A.HEAD,...i}),K={title:"Components/GearIcon",component:o,parameters:{layout:"centered",docs:{description:{component:"A component for displaying ESO gear/equipment icons with optional quality borders and tooltips."}}},tags:["autodocs"],argTypes:{gear:{control:{type:"object"},description:"The gear item object containing id, icon, name, etc."},size:{control:{type:"range",min:16,max:128,step:4},description:"Size of the icon in pixels"},quality:{control:{type:"select"},options:["normal","fine","superior","epic","legendary","mythic"],description:"Quality/rarity of the gear item for styling"},rounded:{control:{type:"boolean"},description:"Whether the icon should be rounded"},showTooltip:{control:{type:"boolean"},description:"Whether to show a tooltip with gear information"},tooltipPlacement:{control:{type:"select"},options:["top","bottom","left","right","top-start","top-end","bottom-start","bottom-end"],description:"Tooltip placement"},onClick:{description:"Click handler for the icon"}}},s={args:{gear:t(),size:32,quality:"normal",rounded:!0,showTooltip:!1}},c={render:()=>e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:16}),e.jsx(r,{variant:"caption",display:"block",children:"16px"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:24}),e.jsx(r,{variant:"caption",display:"block",children:"24px"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:32}),e.jsx(r,{variant:"caption",display:"block",children:"32px"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48}),e.jsx(r,{variant:"caption",display:"block",children:"48px"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:64}),e.jsx(r,{variant:"caption",display:"block",children:"64px"})]})]}),parameters:{docs:{description:{story:"Different sizes of gear icons."}}}},l={render:()=>e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:2,flexWrap:"wrap"},children:[e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"normal"}),e.jsx(r,{variant:"caption",display:"block",children:"Normal"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"fine"}),e.jsx(r,{variant:"caption",display:"block",children:"Fine"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"superior"}),e.jsx(r,{variant:"caption",display:"block",children:"Superior"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"epic"}),e.jsx(r,{variant:"caption",display:"block",children:"Epic"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"legendary"}),e.jsx(r,{variant:"caption",display:"block",children:"Legendary"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"mythic"}),e.jsx(r,{variant:"caption",display:"block",children:"Mythic"})]})]}),parameters:{docs:{description:{story:"Different quality levels with colored borders."}}}},p={args:{gear:t({name:"Epic Gear Item",icon:"armor_heavy_chest_a"}),size:48,quality:"epic",showTooltip:!0,tooltipContent:e.jsxs(a,{sx:{p:1},children:[e.jsx(r,{variant:"subtitle2",color:"primary",children:"Epic Gear Item"}),e.jsx(r,{variant:"body2",children:"A legendary piece of equipment"}),e.jsx(r,{variant:"caption",color:"text.secondary",children:"Item ID: -1"})]})},parameters:{docs:{description:{story:"Gear icon with a custom tooltip. Hover to see the tooltip."}}}},d={args:{gear:t({name:"Legendary Weapon",icon:"weapon_sword_a"}),size:48,quality:"legendary",onClick:()=>console.log("Gear clicked!")},parameters:{docs:{description:{story:"Clickable gear icon with hover effects."}}}},y={render:()=>e.jsxs(a,{sx:{display:"flex",alignItems:"center",gap:4},children:[e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"epic",rounded:!0}),e.jsx(r,{variant:"caption",display:"block",children:"Rounded"})]}),e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:t(),size:48,quality:"epic",rounded:!1}),e.jsx(r,{variant:"caption",display:"block",children:"Square"})]})]}),parameters:{docs:{description:{story:"Comparison between rounded and square gear icons."}}}},u={render:()=>e.jsx(a,{sx:{display:"flex",alignItems:"center",gap:2,flexWrap:"wrap"},children:[{name:"Basic Sword",icon:"weapon_sword_a",quality:1},{name:"Fine Shield",icon:"armor_shield_a",quality:2},{name:"Superior Armor",icon:"armor_heavy_chest_a",quality:3},{name:"Epic Helmet",icon:"armor_heavy_head_a",quality:4},{name:"Legendary Ring",icon:"jewelry_ring_a",quality:5},{name:"Mythic Artifact",icon:"armor_mythic_a",quality:6}].map((i,g)=>{const n=t({id:g+1,name:i.name,icon:i.icon,quality:i.quality}),x=["normal","fine","superior","epic","legendary","mythic"][i.quality-1];return e.jsxs(a,{sx:{textAlign:"center"},children:[e.jsx(o,{gear:n,size:48,quality:x,showTooltip:!0,tooltipContent:e.jsxs(a,{sx:{p:1},children:[e.jsx(r,{variant:"subtitle2",children:i.name}),e.jsxs(r,{variant:"caption",children:["ID: ",n.id]})]})}),e.jsx(r,{variant:"caption",display:"block",children:i.name})]},n.id)})}),parameters:{docs:{description:{story:"Different gear items with various qualities and tooltips."}}}},m={args:{gear:t({name:"Mythic Artifact",icon:"artifact_mythic_a"}),size:64,quality:"mythic",style:{filter:"drop-shadow(0 0 10px rgba(255, 107, 53, 0.5))",borderRadius:"50%"}},parameters:{docs:{description:{story:"Gear icon with custom styling including drop shadow and circular border."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    gear: createMockGear(),
    size: 32,
    quality: 'normal',
    rounded: true,
    showTooltip: false
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const X=["Default","Sizes","Qualities","WithTooltip","Clickable","RoundedVsSquare","DifferentGearItems","CustomStyling"];export{d as Clickable,m as CustomStyling,s as Default,u as DifferentGearItems,l as Qualities,y as RoundedVsSquare,c as Sizes,p as WithTooltip,X as __namedExportsOrder,K as default};
