import{i as B,C as R,D as M,f as T}from"./index-d40fbe56.js";import{r as n}from"./index-e7ede52b.js";import{C as U,d as H}from"./button-d725dd13.js";const L=()=>B()&&window.document.documentElement;let x;const W=()=>{if(!L())return!1;if(x!==void 0)return x;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),x=e.scrollHeight===1,document.body.removeChild(e),x},q=()=>{const[e,o]=n.useState(!1);return n.useEffect(()=>{o(W())},[]),e};function J(e){let{className:o,direction:l,index:t,marginDirection:r,children:a,split:s,wrap:y}=e;const{horizontalSize:f,verticalSize:C,latestIndex:i,supportFlexGap:S}=n.useContext(N);let p={};return S||(l==="vertical"?t<i&&(p={marginBottom:f/(s?2:1)}):p=Object.assign(Object.assign({},t<i&&{[r]:f/(s?2:1)}),y&&{paddingBottom:C})),a==null?null:n.createElement(n.Fragment,null,n.createElement("div",{className:o,style:p},a),t<i&&s&&n.createElement("span",{className:`${o}-split`,style:p},s))}var K=globalThis&&globalThis.__rest||function(e,o){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(l[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(l[t[r]]=e[t[r]]);return l};const N=n.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Q={small:8,middle:16,large:24};function V(e){return typeof e=="string"?Q[e]:e||0}const X=n.forwardRef((e,o)=>{const{getPrefixCls:l,space:t,direction:r}=n.useContext(R),{size:a=(t==null?void 0:t.size)||"small",align:s,className:y,rootClassName:f,children:C,direction:i="horizontal",prefixCls:S,split:p,style:j,wrap:z=!1}=e,G=K(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),u=q(),[b,g]=n.useMemo(()=>(Array.isArray(a)?a:[a,a]).map(c=>V(c)),[a]),E=M(C,{keepEmpty:!0}),w=s===void 0&&i==="horizontal"?"center":s,m=l("space",S),[D,F]=H(m),P=T(m,F,`${m}-${i}`,{[`${m}-rtl`]:r==="rtl",[`${m}-align-${w}`]:w},y,f),O=`${m}-item`,I=r==="rtl"?"marginLeft":"marginRight";let h=0;const k=E.map((c,v)=>{c!=null&&(h=v);const _=c&&c.key||`${O}-${v}`;return n.createElement(J,{className:O,key:_,direction:i,index:v,marginDirection:I,split:p,wrap:z},c)}),A=n.useMemo(()=>({horizontalSize:b,verticalSize:g,latestIndex:h,supportFlexGap:u}),[b,g,h,u]);if(E.length===0)return null;const d={};return z&&(d.flexWrap="wrap",u||(d.marginBottom=-g)),u&&(d.columnGap=b,d.rowGap=g),D(n.createElement("div",Object.assign({ref:o,className:P,style:Object.assign(Object.assign({},d),j)},G),n.createElement(N.Provider,{value:A},k)))}),$=X;$.Compact=U;const te=$;export{te as S};
