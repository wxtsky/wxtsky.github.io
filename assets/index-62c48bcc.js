import{C as P,I as D,E as F}from"./index-63716e0a.js";import{C as G}from"./index-46ecd646.js";import{C as W}from"./motion-9f18b6ee.js";import{F as R,G as X,H as V,I as q,r as s,g as J,m as K,a as Q,C as U,c as E}from"./index-30ca824a.js";import{C as Y,k as Z}from"./index-c49dd96a.js";import{g as ee}from"./getDataOrAriaProps-cf91de79.js";let oe=function(o){R(t,o);var e=X(t);function t(){var n;return V(this,t),n=e.apply(this,arguments),n.state={error:void 0,info:{componentStack:""}},n}return q(t,[{key:"componentDidCatch",value:function(r,a){this.setState({error:r,info:a})}},{key:"render",value:function(){const{message:r,description:a,children:d}=this.props,{error:l,info:p}=this.state,c=p&&p.componentStack?p.componentStack:null,u=typeof r>"u"?(l||"").toString():r,m=typeof a>"u"?c:a;return l?s.createElement(me,{type:"error",message:u,description:s.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},m)}):d}}]),t}(s.Component);const ne=oe,b=(o,e,t,n,r)=>({backgroundColor:o,border:`${n.lineWidth}px ${n.lineType} ${e}`,[`${r}-icon`]:{color:t}}),te=o=>{const{componentCls:e,motionDurationSlow:t,marginXS:n,marginSM:r,fontSize:a,fontSizeLG:d,lineHeight:l,borderRadiusLG:p,motionEaseInOutCirc:c,alertIconSizeLG:u,colorText:m,paddingContentVerticalSM:C,alertPaddingHorizontal:f,paddingMD:h,paddingContentHorizontalLG:S}=o;return{[e]:Object.assign(Object.assign({},Q(o)),{position:"relative",display:"flex",alignItems:"center",padding:`${C}px ${f}px`,wordWrap:"break-word",borderRadius:p,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:n,lineHeight:0},["&-description"]:{display:"none",fontSize:a,lineHeight:l},"&-message":{color:m},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${t} ${c}, opacity ${t} ${c},
        padding-top ${t} ${c}, padding-bottom ${t} ${c},
        margin-bottom ${t} ${c}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",paddingInline:S,paddingBlock:h,[`${e}-icon`]:{marginInlineEnd:r,fontSize:u,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:n,color:m,fontSize:d},[`${e}-description`]:{display:"block"}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},re=o=>{const{componentCls:e,colorSuccess:t,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:a,colorWarningBorder:d,colorWarningBg:l,colorError:p,colorErrorBorder:c,colorErrorBg:u,colorInfo:m,colorInfoBorder:C,colorInfoBg:f}=o;return{[e]:{"&-success":b(r,n,t,o,e),"&-info":b(f,C,m,o,e),"&-warning":b(l,d,a,o,e),"&-error":Object.assign(Object.assign({},b(u,c,p,o,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},se=o=>{const{componentCls:e,iconCls:t,motionDurationMid:n,marginXS:r,fontSizeIcon:a,colorIcon:d,colorIconHover:l}=o;return{[e]:{["&-action"]:{marginInlineStart:r},[`${e}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:a,lineHeight:`${a}px`,backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${t}-close`]:{color:d,transition:`color ${n}`,"&:hover":{color:l}}},"&-close-text":{color:d,transition:`color ${n}`,"&:hover":{color:l}}}}},ae=o=>[te(o),re(o),se(o)],ie=J("Alert",o=>{const{fontSizeHeading3:e}=o,t=K(o,{alertIconSizeLG:e,alertPaddingHorizontal:12});return[ae(t)]});var le=globalThis&&globalThis.__rest||function(o,e){var t={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(t[n[r]]=o[n[r]]);return t};const ce={success:P,info:D,error:G,warning:F},de=o=>{const{icon:e,prefixCls:t,type:n}=o,r=ce[n]||null;return e?Z(e,s.createElement("span",{className:`${t}-icon`},e),()=>({className:E(`${t}-icon`,{[e.props.className]:e.props.className})})):s.createElement(r,{className:`${t}-icon`})},pe=o=>{const{isClosable:e,closeText:t,prefixCls:n,closeIcon:r,handleClose:a}=o;return e?s.createElement("button",{type:"button",onClick:a,className:`${n}-close-icon`,tabIndex:0},t?s.createElement("span",{className:`${n}-close-text`},t):r):null},O=o=>{var{description:e,prefixCls:t,message:n,banner:r,className:a="",style:d,onMouseEnter:l,onMouseLeave:p,onClick:c,afterClose:u,showIcon:m,closable:C,closeText:f,closeIcon:h=s.createElement(W,null),action:S}=o,$=le(o,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]);const[x,w]=s.useState(!1),N=s.useRef(),{getPrefixCls:B,direction:z}=s.useContext(U),i=B("alert",t),[H,T]=ie(i),M=g=>{var y;w(!0),(y=$.onClose)===null||y===void 0||y.call($,g)},k=()=>{const{type:g}=$;return g!==void 0?g:r?"warning":"info"},j=f?!0:C,v=k(),I=r&&m===void 0?!0:m,A=E(i,`${i}-${v}`,{[`${i}-with-description`]:!!e,[`${i}-no-icon`]:!I,[`${i}-banner`]:!!r,[`${i}-rtl`]:z==="rtl"},a,T),L=ee($);return H(s.createElement(Y,{visible:!x,motionName:`${i}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:g=>({maxHeight:g.offsetHeight}),onLeaveEnd:u},g=>{let{className:y,style:_}=g;return s.createElement("div",Object.assign({ref:N,"data-show":!x,className:E(A,y),style:Object.assign(Object.assign({},d),_),onMouseEnter:l,onMouseLeave:p,onClick:c,role:"alert"},L),I?s.createElement(de,{description:e,icon:$.icon,prefixCls:i,type:v}):null,s.createElement("div",{className:`${i}-content`},n?s.createElement("div",{className:`${i}-message`},n):null,e?s.createElement("div",{className:`${i}-description`},e):null),S?s.createElement("div",{className:`${i}-action`},S):null,s.createElement(pe,{isClosable:!!j,closeText:f,prefixCls:i,closeIcon:h,handleClose:M}))}))};O.ErrorBoundary=ne;const me=O;export{me as A};
