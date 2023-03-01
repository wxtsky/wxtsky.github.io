import{w as tt,i as bt,b as yt,c as at}from"./index-c49dd96a.js";import{K as v,r as m,c as I,d as wt,_ as ht,J as vt,E as Ot,g as Ct,m as st,a as $t,C as it}from"./index-30ca824a.js";import{a as _t,T as Tt,g as xt}from"./motion-9f18b6ee.js";import{a as St}from"./useMergedState-68142bc3.js";import{g as It,i as Pt}from"./colors-56c2ced0.js";const jt=(t,e,o,n,r)=>{const a=t/2,s=a-o*(Math.sqrt(2)-1),i=a,l=a+o*(1-1/Math.sqrt(2)),p=a-o*(1-1/Math.sqrt(2)),f=2*a-e*(1/Math.sqrt(2)),c=e*(1/Math.sqrt(2)),d=4*a-f,b=c,y=4*a-l,P=p,j=4*a-s,A=i;return{borderRadius:{_skip_check_:!0,value:`0 0 ${e}px`},pointerEvents:"none",width:t*2,height:t*2,overflow:"hidden","&::after":{content:'""',position:"absolute",width:t/Math.sqrt(2),height:t/Math.sqrt(2),bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${e}px 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:r,zIndex:0,background:"transparent"},"&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:t*2,height:t/2,background:n,clipPath:`path('M ${s} ${i} A ${o} ${o} 0 0 0 ${l} ${p} L ${f} ${c} A ${e} ${e} 0 0 1 ${d} ${b} L ${y} ${P} A ${o} ${o} 0 0 0 ${j} ${A} Z')`,content:'""'}}};function J(t){return t!=null&&t===t.window}function At(t,e){var o,n;if(typeof window>"u")return 0;const r=e?"scrollTop":"scrollLeft";let a=0;return J(t)?a=t[e?"pageYOffset":"pageXOffset"]:t instanceof Document?a=t.documentElement[r]:(t instanceof HTMLElement||t)&&(a=t[r]),t&&!J(t)&&typeof a!="number"&&(a=(n=((o=t.ownerDocument)!==null&&o!==void 0?o:t).documentElement)===null||n===void 0?void 0:n[r]),a}function Nt(t,e,o,n){const r=o-e;return t/=n/2,t<1?r/2*t*t*t+e:r/2*((t-=2)*t*t+2)+e}function le(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:o=()=>window,callback:n,duration:r=450}=e,a=o(),s=At(a,!0),i=Date.now(),l=()=>{const f=Date.now()-i,c=Nt(f>r?r:f,s,t,r);J(a)?a.scrollTo(window.pageXOffset,c):a instanceof Document||a.constructor.name==="HTMLDocument"?a.documentElement.scrollTop=c:a.scrollTop=c,f<r?tt(l):typeof n=="function"&&n()};tt(l)}const Dt=new v("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),kt=new v("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),et=new v("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),ot=new v("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),Et=new v("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),Rt=new v("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),zt=new v("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),Lt=new v("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),Bt=new v("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),Vt=new v("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}}),Mt=new v("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),Kt=new v("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}}),Xt={zoom:{inKeyframes:Dt,outKeyframes:kt},"zoom-big":{inKeyframes:et,outKeyframes:ot},"zoom-big-fast":{inKeyframes:et,outKeyframes:ot},"zoom-left":{inKeyframes:zt,outKeyframes:Lt},"zoom-right":{inKeyframes:Bt,outKeyframes:Vt},"zoom-up":{inKeyframes:Et,outKeyframes:Rt},"zoom-down":{inKeyframes:Mt,outKeyframes:Kt}},Zt=(t,e)=>{const{antCls:o}=t,n=`${o}-${e}`,{inKeyframes:r,outKeyframes:a}=Xt[e];return[_t(n,r,a,e==="zoom-big-fast"?t.motionDurationFast:t.motionDurationMid),{[`
        ${n}-enter,
        ${n}-appear
      `]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},[`${n}-leave`]:{animationTimingFunction:t.motionEaseInOutCirc}}]};var w={adjustX:1,adjustY:1},h=[0,0],lt={left:{points:["cr","cl"],overflow:w,offset:[-4,0],targetOffset:h},right:{points:["cl","cr"],overflow:w,offset:[4,0],targetOffset:h},top:{points:["bc","tc"],overflow:w,offset:[0,-4],targetOffset:h},bottom:{points:["tc","bc"],overflow:w,offset:[0,4],targetOffset:h},topLeft:{points:["bl","tl"],overflow:w,offset:[0,-4],targetOffset:h},leftTop:{points:["tr","tl"],overflow:w,offset:[-4,0],targetOffset:h},topRight:{points:["br","tr"],overflow:w,offset:[0,-4],targetOffset:h},rightTop:{points:["tl","tr"],overflow:w,offset:[4,0],targetOffset:h},bottomRight:{points:["tr","br"],overflow:w,offset:[0,4],targetOffset:h},rightBottom:{points:["bl","br"],overflow:w,offset:[4,0],targetOffset:h},bottomLeft:{points:["tl","bl"],overflow:w,offset:[0,4],targetOffset:h},leftBottom:{points:["br","bl"],overflow:w,offset:[-4,0],targetOffset:h}};function ct(t){var e=t.showArrow,o=t.arrowContent,n=t.children,r=t.prefixCls,a=t.id,s=t.overlayInnerStyle,i=t.className,l=t.style;return m.createElement("div",{className:I("".concat(r,"-content"),i),style:l},e!==!1&&m.createElement("div",{className:"".concat(r,"-arrow"),key:"arrow"},o),m.createElement("div",{className:"".concat(r,"-inner"),id:a,role:"tooltip",style:s},typeof n=="function"?n():n))}var Ht=function(e,o){var n=e.overlayClassName,r=e.trigger,a=r===void 0?["hover"]:r,s=e.mouseEnterDelay,i=s===void 0?0:s,l=e.mouseLeaveDelay,p=l===void 0?.1:l,f=e.overlayStyle,c=e.prefixCls,d=c===void 0?"rc-tooltip":c,b=e.children,y=e.onVisibleChange,P=e.afterVisibleChange,j=e.transitionName,A=e.animation,N=e.motion,z=e.placement,L=z===void 0?"right":z,B=e.align,X=B===void 0?{}:B,V=e.destroyTooltipOnHide,_=V===void 0?!1:V,Z=e.defaultVisible,H=e.getTooltipContainer,W=e.overlayInnerStyle,Y=e.arrowContent,C=e.overlay,q=e.id,F=e.showArrow,D=wt(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),x=m.useRef(null);m.useImperativeHandle(o,function(){return x.current});var T=ht({},D);"visible"in e&&(T.popupVisible=e.visible);var U=function(){return m.createElement(ct,{showArrow:F,arrowContent:Y,key:"content",prefixCls:d,id:q,overlayInnerStyle:W},C)},k=!1,M=!1;if(typeof _=="boolean")k=_;else if(_&&vt(_)==="object"){var S=_.keepParent;k=S===!0,M=S===!1}return m.createElement(Tt,Ot({popupClassName:n,prefixCls:d,popup:U,action:a,builtinPlacements:lt,popupPlacement:L,ref:x,popupAlign:X,getPopupContainer:H,onPopupVisibleChange:y,afterPopupVisibleChange:P,popupTransitionName:j,popupAnimation:A,popupMotion:N,defaultPopupVisible:Z,destroyPopupOnHide:k,autoDestroy:M,mouseLeaveDelay:p,popupStyle:f,mouseEnterDelay:i},T),b)};const Wt=m.forwardRef(Ht),Yt={adjustX:1,adjustY:1},nt={adjustX:0,adjustY:0},qt=[0,0];function rt(t){return typeof t=="boolean"?t?Yt:nt:Object.assign(Object.assign({},nt),t)}function Ft(t){const{arrowWidth:e=4,horizontalArrowShift:o=16,verticalArrowShift:n=8,autoAdjustOverflow:r,arrowPointAtCenter:a}=t,s={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(o+e),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(n+e)]},topRight:{points:["br","tc"],offset:[o+e,-4]},rightTop:{points:["tl","cr"],offset:[4,-(n+e)]},bottomRight:{points:["tr","bc"],offset:[o+e,4]},rightBottom:{points:["bl","cr"],offset:[4,n+e]},bottomLeft:{points:["tl","bc"],offset:[-(o+e),4]},leftBottom:{points:["br","cl"],offset:[-4,n+e]}};return Object.keys(s).forEach(i=>{s[i]=a?Object.assign(Object.assign({},s[i]),{overflow:rt(r),targetOffset:qt}):Object.assign(Object.assign({},lt[i]),{overflow:rt(r)}),s[i].ignoreShake=!0}),s}function K(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return t.map(o=>`${e}${o}`).join(",")}const ft=8;function Ut(t){const e=ft,{sizePopupArrow:o,contentRadius:n,borderRadiusOuter:r,limitVerticalRadius:a}=t,s=o/2-Math.ceil(r*(Math.sqrt(2)-1)),i=(n>12?n+2:12)-s,l=a?e-s:i;return{dropdownArrowOffset:i,dropdownArrowOffsetVertical:l}}function Gt(t,e){const{componentCls:o,sizePopupArrow:n,marginXXS:r,borderRadiusXS:a,borderRadiusOuter:s,boxShadowPopoverArrow:i}=t,{colorBg:l,showArrowCls:p,contentRadius:f=t.borderRadiusLG,limitVerticalRadius:c}=e,{dropdownArrowOffsetVertical:d,dropdownArrowOffset:b}=Ut({sizePopupArrow:n,contentRadius:f,borderRadiusOuter:s,limitVerticalRadius:c}),y=n/2+r;return{[o]:{[`${o}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},jt(n,a,s,l,i)),{"&:before":{background:l}})],[[`&-placement-top ${o}-arrow`,`&-placement-topLeft ${o}-arrow`,`&-placement-topRight ${o}-arrow`].join(",")]:{bottom:0,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:b}},[`&-placement-topRight ${o}-arrow`]:{right:{_skip_check_:!0,value:b}},[[`&-placement-bottom ${o}-arrow`,`&-placement-bottomLeft ${o}-arrow`,`&-placement-bottomRight ${o}-arrow`].join(",")]:{top:0,transform:"translateY(-100%)"},[`&-placement-bottom ${o}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft ${o}-arrow`]:{left:{_skip_check_:!0,value:b}},[`&-placement-bottomRight ${o}-arrow`]:{right:{_skip_check_:!0,value:b}},[[`&-placement-left ${o}-arrow`,`&-placement-leftTop ${o}-arrow`,`&-placement-leftBottom ${o}-arrow`].join(",")]:{right:{_skip_check_:!0,value:0},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop ${o}-arrow`]:{top:d},[`&-placement-leftBottom ${o}-arrow`]:{bottom:d},[[`&-placement-right ${o}-arrow`,`&-placement-rightTop ${o}-arrow`,`&-placement-rightBottom ${o}-arrow`].join(",")]:{left:{_skip_check_:!0,value:0},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right ${o}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop ${o}-arrow`]:{top:d},[`&-placement-rightBottom ${o}-arrow`]:{bottom:d},[K(["&-placement-topLeft","&-placement-top","&-placement-topRight"],p)]:{paddingBottom:y},[K(["&-placement-bottomLeft","&-placement-bottom","&-placement-bottomRight"],p)]:{paddingTop:y},[K(["&-placement-leftTop","&-placement-left","&-placement-leftBottom"],p)]:{paddingRight:{_skip_check_:!0,value:y}},[K(["&-placement-rightTop","&-placement-right","&-placement-rightBottom"],p)]:{paddingLeft:{_skip_check_:!0,value:y}}}}}const Jt=t=>{const{componentCls:e,tooltipMaxWidth:o,tooltipColor:n,tooltipBg:r,tooltipBorderRadius:a,zIndexPopup:s,controlHeight:i,boxShadowSecondary:l,paddingSM:p,paddingXS:f,tooltipRadiusOuter:c}=t;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},$t(t)),{position:"absolute",zIndex:s,display:"block","&":[{width:"max-content"},{width:"intrinsic"}],maxWidth:o,visibility:"visible","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${e}-inner`]:{minWidth:i,minHeight:i,padding:`${p/2}px ${f}px`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:a,boxShadow:l},[["&-placement-left","&-placement-leftTop","&-placement-leftBottom","&-placement-right","&-placement-rightTop","&-placement-rightBottom"].join(",")]:{[`${e}-inner`]:{borderRadius:Math.min(a,ft)}},[`${e}-content`]:{position:"relative"}}),It(t,(d,b)=>{let{darkColor:y}=b;return{[`&${e}-${d}`]:{[`${e}-inner`]:{backgroundColor:y},[`${e}-arrow`]:{"--antd-arrow-background-color":y}}}})),{"&-rtl":{direction:"rtl"}})},Gt(st(t,{borderRadiusOuter:c}),{colorBg:"var(--antd-arrow-background-color)",showArrowCls:"",contentRadius:a,limitVerticalRadius:!0}),{[`${e}-pure`]:{position:"relative",maxWidth:"none"}}]},mt=(t,e)=>Ct("Tooltip",n=>{if(e===!1)return[];const{borderRadius:r,colorTextLightSolid:a,colorBgDefault:s,borderRadiusOuter:i}=n,l=st(n,{tooltipMaxWidth:250,tooltipColor:a,tooltipBorderRadius:r,tooltipBg:s,tooltipRadiusOuter:i>4?4:i});return[Jt(l),Zt(n,"zoom-big-fast")]},n=>{let{zIndexPopupBase:r,colorBgSpotlight:a}=n;return{zIndexPopup:r+70,colorBgDefault:a}})(t);function pt(t,e){const o=Pt(e),n=I({[`${t}-${e}`]:e&&o}),r={},a={};return e&&!o&&(r.background=e,a["--antd-arrow-background-color"]=e),{className:n,overlayStyle:r,arrowStyle:a}}function Qt(t){const{prefixCls:e,className:o,placement:n="top",title:r,color:a,overlayInnerStyle:s}=t,{getPrefixCls:i}=m.useContext(it),l=i("tooltip",e),[p,f]=mt(l,!0),c=pt(l,a),d=Object.assign(Object.assign({},s),c.overlayStyle),b=c.arrowStyle;return p(m.createElement("div",{className:I(f,l,`${l}-pure`,`${l}-placement-${n}`,o,c.className),style:b},m.createElement(ct,Object.assign({},t,{className:f,prefixCls:l,overlayInnerStyle:d}),r)))}var te=globalThis&&globalThis.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};const ee=(t,e)=>{const o={},n=Object.assign({},t);return e.forEach(r=>{t&&r in t&&(o[r]=t[r],delete n[r])}),{picked:o,omitted:n}};function oe(t,e){const o=t.type;if((o.__ANT_BUTTON===!0||t.type==="button")&&t.props.disabled||o.__ANT_SWITCH===!0&&(t.props.disabled||t.props.loading)||o.__ANT_RADIO===!0&&t.props.disabled){const{picked:n,omitted:r}=ee(t.props.style,["position","left","right","top","bottom","float","display","zIndex"]),a=Object.assign(Object.assign({display:"inline-block"},n),{cursor:"not-allowed",width:t.props.block?"100%":void 0}),s=Object.assign(Object.assign({},r),{pointerEvents:"none"}),i=at(t,{style:s,className:null});return m.createElement("span",{style:a,className:I(t.props.className,`${e}-disabled-compatible-wrapper`)},i)}return t}const ut=m.forwardRef((t,e)=>{var o,n;const{prefixCls:r,openClassName:a,getTooltipContainer:s,overlayClassName:i,color:l,overlayInnerStyle:p,children:f,afterOpenChange:c,afterVisibleChange:d}=t,{getPopupContainer:b,getPrefixCls:y,direction:P}=m.useContext(it),[j,A]=St(!1,{value:(o=t.open)!==null&&o!==void 0?o:t.visible,defaultValue:(n=t.defaultOpen)!==null&&n!==void 0?n:t.defaultVisible}),N=()=>{const{title:g,overlay:u}=t;return!g&&!u&&g!==0},z=g=>{var u,$;A(N()?!1:g),N()||((u=t.onOpenChange)===null||u===void 0||u.call(t,g),($=t.onVisibleChange)===null||$===void 0||$.call(t,g))},L=()=>{const{builtinPlacements:g,arrowPointAtCenter:u=!1,autoAdjustOverflow:$=!0}=t;return g||Ft({arrowPointAtCenter:u,autoAdjustOverflow:$})},B=(g,u)=>{const $=L(),E=Object.keys($).find(R=>{var O,G;return $[R].points[0]===((O=u.points)===null||O===void 0?void 0:O[0])&&$[R].points[1]===((G=u.points)===null||G===void 0?void 0:G[1])});if(E){const R=g.getBoundingClientRect(),O={top:"50%",left:"50%"};/top|Bottom/.test(E)?O.top=`${R.height-u.offset[1]}px`:/Top|bottom/.test(E)&&(O.top=`${-u.offset[1]}px`),/left|Right/.test(E)?O.left=`${R.width-u.offset[0]}px`:/right|Left/.test(E)&&(O.left=`${-u.offset[0]}px`),g.style.transformOrigin=`${O.left} ${O.top}`}},X=()=>{const{title:g,overlay:u}=t;return g===0?g:u||g||""},{getPopupContainer:V,placement:_="top",mouseEnterDelay:Z=.1,mouseLeaveDelay:H=.1,overlayStyle:W}=t,Y=te(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),C=y("tooltip",r),q=y(),F=t["data-popover-inject"];let D=j;!("open"in t)&&!("visible"in t)&&N()&&(D=!1);const x=oe(bt(f)&&!yt(f)?f:m.createElement("span",null,f),C),T=x.props,U=!T.className||typeof T.className=="string"?I(T.className,{[a||`${C}-open`]:!0}):T.className,[k,M]=mt(C,!F),S=pt(C,l),Q=Object.assign(Object.assign({},p),S.overlayStyle),dt=S.arrowStyle,gt=I(i,{[`${C}-rtl`]:P==="rtl"},S.className,M);return k(m.createElement(Wt,Object.assign({},Y,{placement:_,mouseEnterDelay:Z,mouseLeaveDelay:H,prefixCls:C,overlayClassName:gt,overlayStyle:Object.assign(Object.assign({},dt),W),getTooltipContainer:V||s||b,ref:e,builtinPlacements:L(),overlay:X(),visible:D,onVisibleChange:z,afterVisibleChange:c??d,onPopupAlign:B,overlayInnerStyle:Q,arrowContent:m.createElement("span",{className:`${C}-arrow-content`}),motion:{motionName:xt(q,"zoom-big-fast",t.transitionName),motionDeadline:1e3}}),D?at(x,{className:U}):x))});ut._InternalPanelDoNotUseOrYouWillBeFired=Qt;const ce=ut;export{ce as T,Ut as a,Ft as b,At as g,Zt as i,jt as r,le as s,Dt as z};
