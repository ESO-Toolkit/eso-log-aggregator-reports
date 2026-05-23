var ve=Object.defineProperty;var Pe=(t,e,n)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>Pe(t,typeof e!="symbol"?e+"":e,n);import{t as l,R as H,o as k}from"./iframe-BWArE5v8.js";import{_ as Ve,f as y,t as ae,M as le,L as Q,A as Z,s as Be,g as Se}from"./Box-BNpdh5Rn.js";import{c as we,_ as De,b as Le,a as ie,d as Ne,u as _,i as se}from"./useTimeout-BdkvWv03.js";import{u as re}from"./useForkRef-DHHvdM3g.js";class G{constructor(){oe(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new G}static use(){const e=we(G.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=ke(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}function je(){return G.use()}function ke(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function $e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Fe(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var a=Object.create(null),o=[];for(var i in t)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var r,c={};for(var u in e){if(a[u])for(r=0;r<a[u].length;r++){var p=a[u][r];c[a[u][r]]=n(p)}c[u]=n(u)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}function j(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ie(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:j(n,"appear",t),enter:j(n,"enter",t),exit:j(n,"exit",t)})})}function Ue(t,e,n){var a=ee(t.children),o=Fe(e,a);return Object.keys(o).forEach(function(i){var r=o[i];if(l.isValidElement(r)){var c=i in e,u=i in a,p=e[i],d=l.isValidElement(p)&&!p.props.in;u&&(!c||d)?o[i]=l.cloneElement(r,{onExited:n.bind(null,r),in:!0,exit:j(r,"exit",t),enter:j(r,"enter",t)}):!u&&c&&!d?o[i]=l.cloneElement(r,{in:!1}):u&&c&&l.isValidElement(p)&&(o[i]=l.cloneElement(r,{onExited:n.bind(null,r),in:p.props.in,exit:j(r,"exit",t),enter:j(r,"enter",t)}))}}),o}var ze=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ae={component:"div",childFactory:function(e){return e}},te=(function(t){De(e,t);function e(a,o){var i;i=t.call(this,a,o)||this;var r=i.handleExited.bind($e(i));return i.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var r=i.children,c=i.handleExited,u=i.firstRender;return{children:u?Ie(o,c):Ue(o,r,c),firstRender:!1}},n.handleExited=function(o,i){var r=ee(this.props.children);o.key in r||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(c){var u=Ve({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,r=o.childFactory,c=Le(o,["component","childFactory"]),u=this.state.contextValue,p=ze(this.state.children).map(r);return delete c.appear,delete c.enter,delete c.exit,i===null?H.createElement(ie.Provider,{value:u},p):H.createElement(ie.Provider,{value:u},H.createElement(i,c,p))},e})(H.Component);te.propTypes={};te.defaultProps=Ae;function Oe(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:r,in:c,onExited:u,timeout:p}=t,[d,h]=l.useState(!1),M=y(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),P={width:r,height:r,top:-(r/2)+i,left:-(r/2)+o},g=y(n.child,d&&n.childLeaving,a&&n.childPulsate);return!c&&!d&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),k.jsx("span",{className:M,style:P,children:k.jsx("span",{className:g})})}const b=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ye=Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Ke=Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,We=Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,He=Q("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),_e=Q(Oe,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${b.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ye};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${b.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${b.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${b.childLeaving} {
    opacity: 0;
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${b.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${We};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,Ge=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:r,...c}=a,[u,p]=l.useState([]),d=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=Ne(),g=l.useRef(null),w=l.useRef(null),C=l.useCallback(f=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:D,cb:z}=f;p(x=>[...x,k.jsx(_e,{classes:{ripple:y(i.ripple,b.ripple),rippleVisible:y(i.rippleVisible,b.rippleVisible),ripplePulsate:y(i.ripplePulsate,b.ripplePulsate),child:y(i.child,b.child),childLeaving:y(i.childLeaving,b.childLeaving),childPulsate:y(i.childPulsate,b.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:D},d.current)]),d.current+=1,h.current=z},[i]),$=l.useCallback((f={},E={},R=()=>{})=>{const{pulsate:I=!1,center:D=o||E.pulsate,fakeElement:z=!1}=E;if(f?.type==="mousedown"&&M.current){M.current=!1;return}f?.type==="touchstart"&&(M.current=!0);const x=z?null:w.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||f===void 0||f.clientX===0&&f.clientY===0||!f.clientX&&!f.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:A,clientY:L}=f.touches&&f.touches.length>0?f.touches[0]:f;B=Math.round(A-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const A=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;S=Math.sqrt(A**2+L**2)}f?.touches?g.current===null&&(g.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(Xe,()=>{g.current&&(g.current(),g.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[o,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((f,E)=>{if(P.clear(),f?.type==="touchend"&&g.current){g.current(),g.current=null,P.start(0,()=>{F(f,E)});return}g.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),k.jsx(He,{className:y(b.root,i.root,r),ref:w,...c,children:k.jsx(te,{component:null,exit:!0,children:u})})});function qe(t){return Be("MuiButtonBase",t)}const Je=ae("MuiButtonBase",["root","disabled","focusVisible"]),Qe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,r=Se({root:["root",e&&"disabled",n&&"focusVisible"]},qe,o);return n&&a&&(r.root+=` ${a}`),r},Ze=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:r,className:c,component:u="button",disabled:p=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:g="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:f,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:z,onTouchEnd:x,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:A,type:L,...U}=a,O=l.useRef(null),m=je(),ue=re(m.ref,A),[N,K]=l.useState(!1);p&&N&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const ce=m.shouldMount&&!d&&!p;l.useEffect(()=>{N&&M&&!d&&m.pulsate()},[d,M,N,m]);const pe=v(m,"start",I,h),fe=v(m,"stop",$,h),de=v(m,"stop",Y,h),he=v(m,"stop",z,h),me=v(m,"stop",s=>{N&&s.preventDefault(),D&&D(s)},h),ge=v(m,"start",B,h),be=v(m,"stop",x,h),Me=v(m,"stop",V,h),Re=v(m,"stop",s=>{se(s.target)||K(!1),w&&w(s)},!1),Ee=_(s=>{O.current||(O.current=s.currentTarget),se(s.target)&&(K(!0),f&&f(s)),F&&F(s)}),q=()=>{const s=O.current;return s?s.tagName==="BUTTON"?!1:!(s.tagName==="A"&&s.href):u&&u!=="button"},xe=_(s=>{M&&!s.repeat&&N&&s.key===" "&&m.stop(s,()=>{m.start(s)}),s.target===s.currentTarget&&q()&&s.key===" "&&s.preventDefault(),E&&E(s),s.target===s.currentTarget&&q()&&s.key==="Enter"&&!p&&(s.preventDefault(),C&&C(s))}),ye=_(s=>{M&&s.key===" "&&N&&!s.defaultPrevented&&m.stop(s,()=>{m.pulsate(s)}),R&&R(s),C&&s.target===s.currentTarget&&q()&&s.key===" "&&!s.defaultPrevented&&!p&&C(s)});let W=u;W==="button"&&(U.href||U.to)&&(W=g);const X={};if(W==="button"){const s=!!U.formAction;X.type=L===void 0&&!s?"button":L,X.disabled=p}else!U.href&&!U.to&&(X.role="button"),p&&(X["aria-disabled"]=p);const Ce=re(n,O),ne={...a,centerRipple:i,component:u,disabled:p,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:N},Te=Qe(ne);return k.jsxs(Ze,{as:W,className:y(Te.root,c),ownerState:ne,onBlur:Re,onClick:C,onContextMenu:fe,onFocus:Ee,onKeyDown:xe,onKeyUp:ye,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:de,onTouchEnd:be,onTouchMove:Me,onTouchStart:ge,ref:Ce,tabIndex:p?-1:T,type:L,...X,...U,children:[r,ce?k.jsx(Ge,{ref:ue,center:i,...S}):null]})});function v(t,e,n,a=!1){return _(o=>(n&&n(o),a||t[e](o),!0))}export{st as B};
