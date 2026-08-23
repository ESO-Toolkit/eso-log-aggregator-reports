import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./defineProperty-BonMfmlw.js";import{t as i}from"./react-BZJXY1be.js";import{t as a}from"./jsx-runtime-DeHZSEgm.js";import{D as o,E as s,F as c,I as l,O as u,T as d,d as f,f as p,g as m,j as h}from"./Box-C1NZhWRF.js";import{i as g,n as _}from"./emotion-react.browser.esm-B3wW069k.js";import{n as v}from"./zero-styled-DmBhiQv0.js";import{n as y}from"./useTheme-DwfIsuzz.js";import{a as b,c as x,d as S,f as C,h as w,i as T,l as E,m as D,n as ee,o as O,p as k,s as te,t as A}from"./useReducedMotion-BPKERgxw.js";function ne(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return re.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var re;function ie(){return(ie=t((()=>{re=e(i(),1)})))()}function ae(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=j.useRef(null),m=l===!0,h=ne({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=j.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`||!!(e.tagName===`A`&&e.href)},[t]),_=j.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:j.useCallback((e=M)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var j,M;function N(){return(N=t((()=>{j=e(i(),1),ie(),M={}})))()}function oe(){return F.use()}function se(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var P,F;function I(){return(I=t((()=>{P=e(i(),1),x(),n(),F=class e{static create(){return new e}static use(){let t=E(e.create).current,[n,r]=P.useState(!1);return t.shouldMount=n,t.setShouldMount=r,P.useEffect(t.mountEffect,[n]),t}constructor(){r(this,`mountEffect`,()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())}),this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=se(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}}})))()}function ce(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:l,timeout:u}=e,[d,f]=L.useState(!1),p=b(),m=L.useRef(!1),h=L.useRef(l);h.current=l;let g=l!=null,_=c(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},y=c(n.child,d&&n.childLeaving,r&&n.childPulsate);return!s&&!d&&f(!0),L.useEffect(()=>{!s&&g?m.current||(m.current=!0,p.start(u,()=>{m.current=!1,h.current?.()})):(m.current=!1,p.clear())},[p,g,s,u]),(0,R.jsx)(`span`,{className:_,style:v,children:(0,R.jsx)(`span`,{className:y})})}var L,R;function z(){return(z=t((()=>{L=e(i(),1),l(),T(),R=a()})))()}var B;function V(){return(V=t((()=>{s(),B=d(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`])})))()}function H(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function U({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}function le(e){if(e.motion.reducedMotion===`always`)return null;let t=_`
    &.${B.rippleVisible} {
      animation-name: ${ue};
      animation-duration: ${K}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${B.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${B.childLeaving} {
      animation-name: ${de};
      animation-duration: ${K}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${B.childPulsate} {
      animation-name: ${fe};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?_`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var W,G,K,q,J,Y,ue,de,fe,pe,me,he;function ge(){return(ge=t((()=>{W=e(i(),1),l(),O(),T(),v(),f(),z(),V(),D(),A(),G=a(),K=550,q={},J=[],Y=()=>{},ue=g`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,de=g`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,fe=g`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,pe=m(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),me=m(ce,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${B.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${B.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${B.childLeaving} {
    opacity: 0;
  }

  & .${B.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>le(e)}
`,he=W.forwardRef(function(e,t){let n=p({props:e,name:`MuiTouchRipple`}),r=y(),i=ee(r.motion.reducedMotion,!1),{center:a=!1,classes:o=q,className:s,...l}=n,[u,d]=W.useState({items:J,order:J}),f=u.items,m=W.useRef(0),h=W.useRef(null),g=W.useRef(!1);te(()=>(g.current=!0,()=>{g.current=!1})),W.useEffect(()=>{h.current&&(h.current(),h.current=null)},[f]);let _=W.useRef(!1),v=b(),x=W.useRef(null),S=W.useRef(null),C=w(e=>{g.current&&d(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:H(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),T=w(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=m.current;m.current+=1,d(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:H(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),h.current=a}),E=w((e=q,t=q,n=Y)=>{let{pulsate:r=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&_.current){_.current=!1;return}e?.type===`touchstart`&&(_.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=U({event:e,element:o?null:S.current,center:i});e?.touches?x.current===null&&(x.current=()=>{T({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},v.start(80,()=>{x.current&&(x.current(),x.current=null)})):T({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),D=w(()=>{E(q,{pulsate:!0})}),O=w((e,t)=>{if(v.clear(),e?.type===`touchend`&&x.current){x.current(),x.current=null,v.start(0,()=>{O(e,t)});return}x.current=null,d(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:H(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),h.current=t});W.useImperativeHandle(t,()=>({pulsate:D,start:E,stop:O}),[D,E,O]);let k=new Map(f.map(e=>[e.key,e])),A=u.order.map(e=>k.get(e)).filter(Boolean);return(0,G.jsx)(pe,{className:c(B.root,o.root,s),ref:S,...l,children:A.map(e=>(0,G.jsx)(me,{classes:{ripple:c(o.ripple,B.ripple),rippleVisible:c(o.rippleVisible,B.rippleVisible),ripplePulsate:c(o.ripplePulsate,B.ripplePulsate),child:c(o.child,B.child),childLeaving:c(o.childLeaving,B.childLeaving),childPulsate:c(o.childPulsate,B.childPulsate)},timeout:i.shouldReduceMotion?0:K,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>C(e.key)},e.key))})})})))()}function _e(e){return o(`MuiButtonBase`,e)}var ve;function ye(){return(ye=t((()=>{s(),u(),ve=d(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`])})))()}function X(e,t,n,r=!1){return w(i=>(n&&n(i),r||e[t](i),!0))}var Z,be,xe,Se,Ce;function Q(){return(Q=t((()=>{Z=e(i(),1),l(),v(),f(),C(),D(),N(),I(),ge(),ye(),be=a(),xe=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=h({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},_e,a);return n&&!i&&r&&(o.root+=` ${r}`),o},Se=m(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${ve.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),Ce=Z.forwardRef(function(e,t){let n=p({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:s=`button`,disabled:l=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,focusVisibleClassName:m,focusableWhenDisabled:h,suppressFocusVisible:g=!1,internalNativeButton:_,LinkComponent:v=`a`,nativeButton:y,onBlur:b,onClick:x,onContextMenu:C,onDragLeave:T,onFocus:E,onFocusVisible:D,onKeyDown:ee,onKeyUp:O,onMouseDown:te,onMouseLeave:A,onMouseUp:ne,onTouchEnd:re,onTouchMove:ie,onTouchStart:j,tabIndex:M=0,TouchRippleProps:N,touchRippleRef:se,type:P,...F}=n,I=!!(F.href||F.to),ce=!!F.formAction,L=s;L===`button`&&I&&(L=v);let R=typeof L==`string`?L===`button`:_??!1,z=y??R,B=oe(),V=k(B.ref,se),[H,U]=Z.useState(!1);(l||g)&&H&&U(!1);let le=w(e=>{f&&!e.repeat&&H&&e.key===` `&&B.stop(e,()=>{B.start(e)})}),W=w(e=>{f&&e.key===` `&&H&&!e.defaultPrevented&&B.stop(e,()=>{B.pulsate(e)})}),{getButtonProps:G,rootRef:K}=ae({nativeButton:z,nativeButtonProp:y,internalNativeButton:R,allowInferredHostMismatch:I||typeof L==`string`,disabled:l,type:P,hasFormAction:ce,tabIndex:M,onBeforeKeyDown:le,onBeforeKeyUp:W}),{onClick:q,onKeyDown:J,onKeyUp:Y,...ue}=G({onClick:x,onKeyDown:ee,onKeyUp:O});Z.useImperativeHandle(r,()=>({focusVisible:()=>{U(!0),K.current.focus()}}),[K]);let de=B.shouldMount&&!u&&!l;Z.useEffect(()=>{H&&f&&!u&&B.pulsate()},[u,f,H,B]);let fe=X(B,`start`,te,d),pe=X(B,`stop`,C,d),me=X(B,`stop`,T,d),ge=X(B,`stop`,ne,d),_e=X(B,`stop`,e=>{H&&e.preventDefault(),A&&A(e)},d),ve=X(B,`start`,j,d),ye=X(B,`stop`,re,d),Ce=X(B,`stop`,ie,d),Q=X(B,`stop`,e=>{S(e.target)||U(!1),b&&b(e)},!1),we=w(e=>{K.current||(K.current=e.currentTarget),!g&&S(e.target)&&(U(!0),D&&D(e)),E&&E(e)}),$={};I&&($.tabIndex=l?-1:M,l&&($[`aria-disabled`]=l),$.type=P);let Te=k(t,K),Ee={...n,centerRipple:i,component:s,disabled:l,disableRipple:u,disableTouchRipple:d,focusRipple:f,suppressFocusVisible:g,tabIndex:M,focusVisible:H},De=xe(Ee);return(0,be.jsxs)(Se,{as:L,className:c(De.root,o),ownerState:Ee,onBlur:Q,onClick:q,onContextMenu:pe,onFocus:we,onKeyDown:J,onKeyUp:Y,onMouseDown:fe,onMouseLeave:_e,onMouseUp:ge,onDragLeave:me,onTouchEnd:ye,onTouchMove:Ce,onTouchStart:ve,ref:Te,...I?$:ue,...F,children:[a,de?(0,be.jsx)(he,{ref:V,center:i,...N}):null]})})})))()}export{Q as n,Ce as t};