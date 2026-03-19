var ve=Object.defineProperty;var Pe=(t,e,n)=>e in t?ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var oe=(t,e,n)=>Pe(t,typeof e!="symbol"?e+"":e,n);import{r as l,R as H,j as N}from"./iframe-XolHs7Wy.js";import{_ as Ve,c as y,e as ae,u as le,s as Q,q as Z,g as Be,b as Se}from"./DefaultPropsProvider-Bq_x2H2G.js";import{d as we,_ as De,b as Le,c as ie,a as je,u as _,i as se}from"./useTimeout-OwDk_r_9.js";import{u as re}from"./useForkRef-BoGk1jrr.js";class q{constructor(){oe(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=we(q.create).current,[n,a]=l.useState(!1);return e.shouldMount=n,e.setShouldMount=a,l.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Ne(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}function ke(){return q.use()}function Ne(){let t,e;const n=new Promise((a,o)=>{t=a,e=o});return n.resolve=t,n.reject=e,n}function $e(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ee(t,e){var n=function(i){return e&&l.isValidElement(i)?e(i):i},a=Object.create(null);return t&&l.Children.map(t,function(o){return o}).forEach(function(o){a[o.key]=n(o)}),a}function Fe(t,e){t=t||{},e=e||{};function n(f){return f in e?e[f]:t[f]}var a=Object.create(null),o=[];for(var i in t)i in e?o.length&&(a[i]=o,o=[]):o.push(i);var s,c={};for(var u in e){if(a[u])for(s=0;s<a[u].length;s++){var p=a[u][s];c[a[u][s]]=n(p)}c[u]=n(u)}for(s=0;s<o.length;s++)c[o[s]]=n(o[s]);return c}function k(t,e,n){return n[e]!=null?n[e]:t.props[e]}function Ie(t,e){return ee(t.children,function(n){return l.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:k(n,"appear",t),enter:k(n,"enter",t),exit:k(n,"exit",t)})})}function Ue(t,e,n){var a=ee(t.children),o=Fe(e,a);return Object.keys(o).forEach(function(i){var s=o[i];if(l.isValidElement(s)){var c=i in e,u=i in a,p=e[i],f=l.isValidElement(p)&&!p.props.in;u&&(!c||f)?o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",t),enter:k(s,"enter",t)}):!u&&c&&!f?o[i]=l.cloneElement(s,{in:!1}):u&&c&&l.isValidElement(p)&&(o[i]=l.cloneElement(s,{onExited:n.bind(null,s),in:p.props.in,exit:k(s,"exit",t),enter:k(s,"enter",t)}))}}),o}var ze=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Ae={component:"div",childFactory:function(e){return e}},te=(function(t){De(e,t);function e(a,o){var i;i=t.call(this,a,o)||this;var s=i.handleExited.bind($e(i));return i.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},i}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(o,i){var s=i.children,c=i.handleExited,u=i.firstRender;return{children:u?Ie(o,c):Ue(o,s,c),firstRender:!1}},n.handleExited=function(o,i){var s=ee(this.props.children);o.key in s||(o.props.onExited&&o.props.onExited(i),this.mounted&&this.setState(function(c){var u=Ve({},c.children);return delete u[o.key],{children:u}}))},n.render=function(){var o=this.props,i=o.component,s=o.childFactory,c=Le(o,["component","childFactory"]),u=this.state.contextValue,p=ze(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,i===null?H.createElement(ie.Provider,{value:u},p):H.createElement(ie.Provider,{value:u},H.createElement(i,c,p))},e})(H.Component);te.propTypes={};te.defaultProps=Ae;function Oe(t){const{className:e,classes:n,pulsate:a=!1,rippleX:o,rippleY:i,rippleSize:s,in:c,onExited:u,timeout:p}=t,[f,h]=l.useState(!1),M=y(e,n.ripple,n.rippleVisible,a&&n.ripplePulsate),P={width:s,height:s,top:-(s/2)+i,left:-(s/2)+o},b=y(n.child,f&&n.childLeaving,a&&n.childPulsate);return!c&&!f&&h(!0),l.useEffect(()=>{if(!c&&u!=null){const w=setTimeout(u,p);return()=>{clearTimeout(w)}}},[u,c,p]),N.jsx("span",{className:M,style:P,children:N.jsx("span",{className:b})})}const g=ae("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),J=550,Xe=80,Ye=Z`
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

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ye};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Ke};
    animation-duration: ${J}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
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
`,qe=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiTouchRipple"}),{center:o=!1,classes:i={},className:s,...c}=a,[u,p]=l.useState([]),f=l.useRef(0),h=l.useRef(null);l.useEffect(()=>{h.current&&(h.current(),h.current=null)},[u]);const M=l.useRef(!1),P=je(),b=l.useRef(null),w=l.useRef(null),C=l.useCallback(d=>{const{pulsate:E,rippleX:R,rippleY:I,rippleSize:D,cb:z}=d;p(x=>[...x,N.jsx(_e,{classes:{ripple:y(i.ripple,g.ripple),rippleVisible:y(i.rippleVisible,g.rippleVisible),ripplePulsate:y(i.ripplePulsate,g.ripplePulsate),child:y(i.child,g.child),childLeaving:y(i.childLeaving,g.childLeaving),childPulsate:y(i.childPulsate,g.childPulsate)},timeout:J,pulsate:E,rippleX:R,rippleY:I,rippleSize:D},f.current)]),f.current+=1,h.current=z},[i]),$=l.useCallback((d={},E={},R=()=>{})=>{const{pulsate:I=!1,center:D=o||E.pulsate,fakeElement:z=!1}=E;if(d?.type==="mousedown"&&M.current){M.current=!1;return}d?.type==="touchstart"&&(M.current=!0);const x=z?null:w.current,V=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let B,T,S;if(D||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)B=Math.round(V.width/2),T=Math.round(V.height/2);else{const{clientX:A,clientY:L}=d.touches&&d.touches.length>0?d.touches[0]:d;B=Math.round(A-V.left),T=Math.round(L-V.top)}if(D)S=Math.sqrt((2*V.width**2+V.height**2)/3),S%2===0&&(S+=1);else{const A=Math.max(Math.abs((x?x.clientWidth:0)-B),B)*2+2,L=Math.max(Math.abs((x?x.clientHeight:0)-T),T)*2+2;S=Math.sqrt(A**2+L**2)}d?.touches?b.current===null&&(b.current=()=>{C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},P.start(Xe,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:I,rippleX:B,rippleY:T,rippleSize:S,cb:R})},[o,C,P]),Y=l.useCallback(()=>{$({},{pulsate:!0})},[$]),F=l.useCallback((d,E)=>{if(P.clear(),d?.type==="touchend"&&b.current){b.current(),b.current=null,P.start(0,()=>{F(d,E)});return}b.current=null,p(R=>R.length>0?R.slice(1):R),h.current=E},[P]);return l.useImperativeHandle(n,()=>({pulsate:Y,start:$,stop:F}),[Y,$,F]),N.jsx(He,{className:y(g.root,i.root,s),ref:w,...c,children:N.jsx(te,{component:null,exit:!0,children:u})})});function Ge(t){return Be("MuiButtonBase",t)}const Je=ae("MuiButtonBase",["root","disabled","focusVisible"]),Qe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:a,classes:o}=t,s=Se({root:["root",e&&"disabled",n&&"focusVisible"]},Ge,o);return n&&a&&(s.root+=` ${a}`),s},Ze=Q("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Je.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),st=l.forwardRef(function(e,n){const a=le({props:e,name:"MuiButtonBase"}),{action:o,centerRipple:i=!1,children:s,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:P,LinkComponent:b="a",onBlur:w,onClick:C,onContextMenu:$,onDragLeave:Y,onFocus:F,onFocusVisible:d,onKeyDown:E,onKeyUp:R,onMouseDown:I,onMouseLeave:D,onMouseUp:z,onTouchEnd:x,onTouchMove:V,onTouchStart:B,tabIndex:T=0,TouchRippleProps:S,touchRippleRef:A,type:L,...U}=a,O=l.useRef(null),m=ke(),ue=re(m.ref,A),[j,K]=l.useState(!1);p&&j&&K(!1),l.useImperativeHandle(o,()=>({focusVisible:()=>{K(!0),O.current.focus()}}),[]);const ce=m.shouldMount&&!f&&!p;l.useEffect(()=>{j&&M&&!f&&m.pulsate()},[f,M,j,m]);const pe=v(m,"start",I,h),de=v(m,"stop",$,h),fe=v(m,"stop",Y,h),he=v(m,"stop",z,h),me=v(m,"stop",r=>{j&&r.preventDefault(),D&&D(r)},h),be=v(m,"start",B,h),ge=v(m,"stop",x,h),Me=v(m,"stop",V,h),Re=v(m,"stop",r=>{se(r.target)||K(!1),w&&w(r)},!1),Ee=_(r=>{O.current||(O.current=r.currentTarget),se(r.target)&&(K(!0),d&&d(r)),F&&F(r)}),G=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},xe=_(r=>{M&&!r.repeat&&j&&r.key===" "&&m.stop(r,()=>{m.start(r)}),r.target===r.currentTarget&&G()&&r.key===" "&&r.preventDefault(),E&&E(r),r.target===r.currentTarget&&G()&&r.key==="Enter"&&!p&&(r.preventDefault(),C&&C(r))}),ye=_(r=>{M&&r.key===" "&&j&&!r.defaultPrevented&&m.stop(r,()=>{m.pulsate(r)}),R&&R(r),C&&r.target===r.currentTarget&&G()&&r.key===" "&&!r.defaultPrevented&&C(r)});let W=u;W==="button"&&(U.href||U.to)&&(W=b);const X={};if(W==="button"){const r=!!U.formAction;X.type=L===void 0&&!r?"button":L,X.disabled=p}else!U.href&&!U.to&&(X.role="button"),p&&(X["aria-disabled"]=p);const Ce=re(n,O),ne={...a,centerRipple:i,component:u,disabled:p,disableRipple:f,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:j},Te=Qe(ne);return N.jsxs(Ze,{as:W,className:y(Te.root,c),ownerState:ne,onBlur:Re,onClick:C,onContextMenu:de,onFocus:Ee,onKeyDown:xe,onKeyUp:ye,onMouseDown:pe,onMouseLeave:me,onMouseUp:he,onDragLeave:fe,onTouchEnd:ge,onTouchMove:Me,onTouchStart:be,ref:Ce,tabIndex:p?-1:T,type:L,...X,...U,children:[s,ce?N.jsx(qe,{ref:ue,center:i,...S}):null]})});function v(t,e,n,a=!1){return _(o=>(n&&n(o),a||t[e](o),!0))}export{st as B};
