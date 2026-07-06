import{l as e,o as t}from"./preload-helper-CHxnduP2.js";import{Dt as n,I as r}from"./iframe-CoOUixj6.js";import{Dt as i,Nt as a,t as o,yt as s}from"./material-DQ2olmRE.js";import{r as c,t as l}from"./ClassIcon-SmSDpRBS.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{o(),u=e(n()),c(),d=r(),f={title:`Components/ClassIcon`,component:l,parameters:{layout:`centered`},argTypes:{className:{control:`select`,options:[`dragonknight`,`templar`,`warden`,`nightblade`,`sorcerer`,`necromancer`,`arcanist`],description:`ESO class name to display icon for`},size:{control:{type:`range`,min:8,max:64,step:2},description:`Size of the icon in pixels`},alt:{control:`text`,description:`Alt text for the image (defaults to className)`},style:{control:`object`,description:`CSS styles to apply to the image`}}},p={args:{className:`dragonknight`,size:24}},m={args:{className:`templar`,size:12}},h={args:{className:`sorcerer`,size:48}},g={args:{className:`nightblade`,size:32,alt:`Nightblade Class`}},_={args:{className:`arcanist`,size:32,style:{opacity:1,border:`2px solid gold`,borderRadius:`4px`,padding:`2px`}}},v={render:()=>(0,d.jsx)(i,{sx:{display:`flex`,gap:3,flexWrap:`wrap`,alignItems:`center`},children:[`dragonknight`,`templar`,`warden`,`nightblade`,`sorcerer`,`necromancer`,`arcanist`].map(e=>(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:e,size:32}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5,textTransform:`capitalize`},children:e})]},e))})},y={render:()=>(0,d.jsx)(i,{sx:{display:`flex`,gap:2,alignItems:`center`,flexWrap:`wrap`},children:[8,12,16,20,24,32,40,48,56,64].map(e=>(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`dragonknight`,size:e}),(0,d.jsxs)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:[e,`px`]})]},e))})},b={render:()=>(0,d.jsxs)(s,{sx:{p:3,maxWidth:400},children:[(0,d.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Player List`}),(0,d.jsxs)(i,{sx:{display:`flex`,flexDirection:`column`,gap:1},children:[(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`dragonknight`,size:16}),(0,d.jsx)(a,{variant:`body2`,children:`TankPlayerName (Dragonknight)`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`templar`,size:16}),(0,d.jsx)(a,{variant:`body2`,children:`HealerPlayerName (Templar)`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`sorcerer`,size:16}),(0,d.jsx)(a,{variant:`body2`,children:`DPSPlayerName (Sorcerer)`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`nightblade`,size:16}),(0,d.jsx)(a,{variant:`body2`,children:`DPSPlayerName2 (Nightblade)`})]})]})]})},x={render:()=>(0,d.jsx)(i,{sx:{display:`flex`,gap:2,alignItems:`center`,flexWrap:`wrap`},children:[.3,.5,.7,.8,1].map(e=>(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`warden`,size:32,style:{opacity:e}}),(0,d.jsxs)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:[Math.round(e*100),`%`]})]},e))})},S={render:()=>(0,d.jsxs)(s,{sx:{p:3,maxWidth:500},children:[(0,d.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Case Sensitivity Test`}),(0,d.jsx)(a,{variant:`body2`,color:`text.secondary`,paragraph:!0,children:`Component should handle different case variations of class names:`}),(0,d.jsxs)(i,{sx:{display:`grid`,gridTemplateColumns:`repeat(2, 1fr)`,gap:2,alignItems:`center`},children:[(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`dragonknight`,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`"dragonknight"`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`Dragonknight`,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`"Dragonknight"`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`DRAGONKNIGHT`,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`"DRAGONKNIGHT"`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`DragonKnight`,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`"DragonKnight"`})]})]})]})},C={render:()=>(0,d.jsxs)(s,{sx:{p:3,maxWidth:600},children:[(0,d.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Edge Cases Test`}),(0,d.jsxs)(i,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`invalid-class`,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`Invalid class name (should return null): "invalid-class"`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:``,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`Empty class name (should return null)`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`   templar   `,size:24}),(0,d.jsx)(a,{variant:`body2`,children:`Class name with whitespace: " templar "`})]}),(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,gap:1},children:[(0,d.jsx)(l,{className:`templar`,size:0}),(0,d.jsx)(a,{variant:`body2`,children:`Zero size (should still render): size=0`})]})]})]})},w={render:()=>(0,d.jsxs)(i,{sx:{display:`flex`,gap:3,flexWrap:`wrap`,alignItems:`center`},children:[(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`necromancer`,size:32,style:{filter:`grayscale(100%)`}}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:`Grayscale`})]}),(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`necromancer`,size:32,style:{filter:`sepia(100%)`}}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:`Sepia`})]}),(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`necromancer`,size:32,style:{filter:`hue-rotate(180deg)`}}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:`Hue Rotate`})]}),(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`necromancer`,size:32,style:{border:`2px solid #ff6b6b`,borderRadius:`50%`,padding:`4px`,background:`rgba(255, 255, 255, 0.1)`}}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:`Styled Border`})]}),(0,d.jsxs)(i,{sx:{textAlign:`center`},children:[(0,d.jsx)(l,{className:`necromancer`,size:32,style:{transform:`rotate(15deg)`,filter:`drop-shadow(2px 2px 4px rgba(0,0,0,0.5))`}}),(0,d.jsx)(a,{variant:`caption`,display:`block`,sx:{mt:.5},children:`Rotated + Shadow`})]})]})},T={render:()=>(0,d.jsxs)(s,{sx:{p:3,maxWidth:800},children:[(0,d.jsx)(a,{variant:`h6`,gutterBottom:!0,children:`Player Panel Usage Demo`}),(0,d.jsx)(a,{variant:`body2`,color:`text.secondary`,paragraph:!0,children:`Example of how ClassIcon might be used in a player information panel:`}),(0,d.jsx)(i,{sx:{display:`flex`,flexDirection:`column`,gap:2},children:[{name:`Tank Player`,class:`dragonknight`,subclasses:[`Stamina DK`,`Tank Build`]},{name:`Healer Main`,class:`templar`,subclasses:[`Magicka Templar`,`Healer`]},{name:`DPS Wizard`,class:`sorcerer`,subclasses:[`Magicka Sorcerer`,`Lightning Build`]},{name:`Stealth Assassin`,class:`nightblade`,subclasses:[`Stamina NB`,`Ganker`]},{name:`Nature Guardian`,class:`warden`,subclasses:[`Stamina Warden`,`Ice Tank`]},{name:`Death Mage`,class:`necromancer`,subclasses:[`Magicka Necro`,`Corpse Blast`]},{name:`Mystic Scholar`,class:`arcanist`,subclasses:[`Magicka Arcanist`,`Crux Build`]}].map(e=>(0,d.jsxs)(i,{sx:{display:`flex`,alignItems:`center`,p:2,border:`1px solid rgba(255,255,255,0.1)`,borderRadius:1,background:`rgba(255,255,255,0.02)`},children:[(0,d.jsx)(l,{className:e.class,size:20,style:{marginRight:`12px`}}),(0,d.jsxs)(i,{children:[(0,d.jsx)(a,{variant:`body1`,fontWeight:`bold`,children:e.name}),(0,d.jsx)(i,{sx:{display:`flex`,alignItems:`center`,gap:1,mt:.5},children:e.subclasses.map((t,n)=>(0,d.jsxs)(u.Fragment,{children:[n>0&&(0,d.jsx)(a,{variant:`caption`,sx:{color:`text.secondary`,opacity:.7},children:`•`}),(0,d.jsx)(l,{className:e.class,size:12,style:{opacity:.8}}),(0,d.jsx)(a,{variant:`caption`,color:`text.secondary`,children:t})]},t))})]})]},e.name))})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'dragonknight',
    size: 24
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'templar',
    size: 12
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'sorcerer',
    size: 48
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'nightblade',
    size: 32,
    alt: 'Nightblade Class'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'arcanist',
    size: 32,
    style: {
      opacity: 1,
      border: '2px solid gold',
      borderRadius: '4px',
      padding: '2px'
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      {['dragonknight', 'templar', 'warden', 'nightblade', 'sorcerer', 'necromancer', 'arcanist'].map(className => <Box key={className} sx={{
      textAlign: 'center'
    }}>
          <ClassIcon className={className} size={32} />
          <Typography variant="caption" display="block" sx={{
        mt: 0.5,
        textTransform: 'capitalize'
      }}>
            {className}
          </Typography>
        </Box>)}
    </Box>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[8, 12, 16, 20, 24, 32, 40, 48, 56, 64].map(size => <Box key={size} sx={{
      textAlign: 'center'
    }}>
          <ClassIcon className="dragonknight" size={size} />
          <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
            {size}px
          </Typography>
        </Box>)}
    </Box>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3,
    maxWidth: 400
  }}>
      <Typography variant="h6" gutterBottom>
        Player List
      </Typography>

      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }}>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="dragonknight" size={16} />
          <Typography variant="body2">TankPlayerName (Dragonknight)</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="templar" size={16} />
          <Typography variant="body2">HealerPlayerName (Templar)</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="sorcerer" size={16} />
          <Typography variant="body2">DPSPlayerName (Sorcerer)</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="nightblade" size={16} />
          <Typography variant="body2">DPSPlayerName2 (Nightblade)</Typography>
        </Box>
      </Box>
    </Paper>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 2,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      {[0.3, 0.5, 0.7, 0.8, 1.0].map(opacity => <Box key={opacity} sx={{
      textAlign: 'center'
    }}>
          <ClassIcon className="warden" size={32} style={{
        opacity
      }} />
          <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
            {Math.round(opacity * 100)}%
          </Typography>
        </Box>)}
    </Box>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3,
    maxWidth: 500
  }}>
      <Typography variant="h6" gutterBottom>
        Case Sensitivity Test
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Component should handle different case variations of class names:
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
          <ClassIcon className="dragonknight" size={24} />
          <Typography variant="body2">"dragonknight"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="Dragonknight" size={24} />
          <Typography variant="body2">"Dragonknight"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="DRAGONKNIGHT" size={24} />
          <Typography variant="body2">"DRAGONKNIGHT"</Typography>
        </Box>
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="DragonKnight" size={24} />
          <Typography variant="body2">"DragonKnight"</Typography>
        </Box>
      </Box>
    </Paper>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
          <ClassIcon className="invalid-class" size={24} />
          <Typography variant="body2">
            Invalid class name (should return null): "invalid-class"
          </Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="" size={24} />
          <Typography variant="body2">Empty class name (should return null)</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="   templar   " size={24} />
          <Typography variant="body2">Class name with whitespace: " templar "</Typography>
        </Box>

        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
          <ClassIcon className="templar" size={0} />
          <Typography variant="body2">Zero size (should still render): size=0</Typography>
        </Box>
      </Box>
    </Paper>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Box sx={{
    display: 'flex',
    gap: 3,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Box sx={{
      textAlign: 'center'
    }}>
        <ClassIcon className="necromancer" size={32} style={{
        filter: 'grayscale(100%)'
      }} />
        <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
          Grayscale
        </Typography>
      </Box>

      <Box sx={{
      textAlign: 'center'
    }}>
        <ClassIcon className="necromancer" size={32} style={{
        filter: 'sepia(100%)'
      }} />
        <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
          Sepia
        </Typography>
      </Box>

      <Box sx={{
      textAlign: 'center'
    }}>
        <ClassIcon className="necromancer" size={32} style={{
        filter: 'hue-rotate(180deg)'
      }} />
        <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
          Hue Rotate
        </Typography>
      </Box>

      <Box sx={{
      textAlign: 'center'
    }}>
        <ClassIcon className="necromancer" size={32} style={{
        border: '2px solid #ff6b6b',
        borderRadius: '50%',
        padding: '4px',
        background: 'rgba(255, 255, 255, 0.1)'
      }} />
        <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
          Styled Border
        </Typography>
      </Box>

      <Box sx={{
      textAlign: 'center'
    }}>
        <ClassIcon className="necromancer" size={32} style={{
        transform: 'rotate(15deg)',
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.5))'
      }} />
        <Typography variant="caption" display="block" sx={{
        mt: 0.5
      }}>
          Rotated + Shadow
        </Typography>
      </Box>
    </Box>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Paper sx={{
    p: 3,
    maxWidth: 800
  }}>
      <Typography variant="h6" gutterBottom>
        Player Panel Usage Demo
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        Example of how ClassIcon might be used in a player information panel:
      </Typography>

      <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
        {[{
        name: 'Tank Player',
        class: 'dragonknight',
        subclasses: ['Stamina DK', 'Tank Build']
      }, {
        name: 'Healer Main',
        class: 'templar',
        subclasses: ['Magicka Templar', 'Healer']
      }, {
        name: 'DPS Wizard',
        class: 'sorcerer',
        subclasses: ['Magicka Sorcerer', 'Lightning Build']
      }, {
        name: 'Stealth Assassin',
        class: 'nightblade',
        subclasses: ['Stamina NB', 'Ganker']
      }, {
        name: 'Nature Guardian',
        class: 'warden',
        subclasses: ['Stamina Warden', 'Ice Tank']
      }, {
        name: 'Death Mage',
        class: 'necromancer',
        subclasses: ['Magicka Necro', 'Corpse Blast']
      }, {
        name: 'Mystic Scholar',
        class: 'arcanist',
        subclasses: ['Magicka Arcanist', 'Crux Build']
      }].map(player => <Box key={player.name} sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 1,
        background: 'rgba(255,255,255,0.02)'
      }}>
            <ClassIcon className={player.class} size={20} style={{
          marginRight: '12px'
        }} />
            <Box>
              <Typography variant="body1" fontWeight="bold">
                {player.name}
              </Typography>
              <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            mt: 0.5
          }}>
                {player.subclasses.map((subclass, idx) => <React.Fragment key={subclass}>
                    {idx > 0 && <Typography variant="caption" sx={{
                color: 'text.secondary',
                opacity: 0.7
              }}>
                        •
                      </Typography>}
                    <ClassIcon className={player.class} size={12} style={{
                opacity: 0.8
              }} />
                    <Typography variant="caption" color="text.secondary">
                      {subclass}
                    </Typography>
                  </React.Fragment>)}
              </Box>
            </Box>
          </Box>)}
      </Box>
    </Paper>
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Small`,`Large`,`WithCustomAlt`,`WithCustomStyling`,`AllClasses`,`SizeVariations`,`InTextContext`,`OpacityVariations`,`CaseSensitivity`,`EdgeCases`,`StylingVariations`,`PlayerPanelDemo`]}))();export{v as AllClasses,S as CaseSensitivity,p as Default,C as EdgeCases,b as InTextContext,h as Large,x as OpacityVariations,T as PlayerPanelDemo,y as SizeVariations,m as Small,w as StylingVariations,g as WithCustomAlt,_ as WithCustomStyling,E as __namedExportsOrder,f as default};