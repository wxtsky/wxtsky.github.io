import{r as i,h as r,j as e}from"./index-30ca824a.js";import{C as l}from"./index-c03ec827.js";import{B as t}from"./button-74b29afc.js";import{I as d}from"./index-46ecd646.js";import{T as c}from"./index-9e6ddf6b.js";import{S as n}from"./index-7578be44.js";import{R as a}from"./index-6d95cbb0.js";import"./motion-9f18b6ee.js";import"./index-c49dd96a.js";import"./useMergedState-68142bc3.js";import"./EllipsisOutlined-6ab7d953.js";import"./slide-1c1c430c.js";import"./index-900836db.js";import"./Dropdown-b5aab39a.js";import"./colors-56c2ced0.js";import"./getDataOrAriaProps-cf91de79.js";function I(){const[o,m]=i.useState("https://bsc-dataseed.binance.org/"),[p,u]=i.useState(0),[h,B]=i.useState(0),[s,y]=i.useState(0);return r("div",{children:[e("div",{style:{textAlign:"center"},children:e("h5",{children:"LimitOrder"})}),e(l,{children:r("div",{children:[e("p",{children:"链:"}),e(t,{type:"dashed",children:"BSC"}),e("p",{children:"DEX:"}),e(t,{type:"dashed",children:"PancakeSwap"})]})}),r(l,{children:[r("p",{children:["当前节点：",o]}),r("p",{children:["延迟:",p,"ms"]}),e(t,{type:"primary",children:"切换节点"})]}),r(l,{children:[e("p",{children:"钱包地址:"}),r(d.Group,{compact:!0,children:[e(d,{style:{width:"70%"},placeholder:"请输入钱包地址",disabled:!0}),e(t,{type:"primary",children:"载入私钥"})]}),e(c,{color:"red",children:"强烈推荐使用小额资产的小钱包进行抢币,需要私钥是为了省去确认操作，直接实现快速自动买卖."}),e(c,{color:"blue",children:"本程序完全本地运行,不会上传私钥到服务器,欢迎监督检测."}),r("p",{children:["钱包余额:",h," BNB",s," USDT"]})]}),r(l,{children:[r(n,{defaultValue:"买入",style:{width:120},children:[e(n.Option,{value:"买入",children:"买入"}),e(n.Option,{value:"卖出",children:"卖出"})]}),e("p",{children:"交易币种"}),r(a.Group,{defaultValue:"BNB",children:[e(a.Button,{value:"BNB",children:"BNB"}),e(a.Button,{value:"USDT",children:"USDT"})]}),e("p",{children:"合约"}),r(d.Group,{compact:!0,children:[e(d,{style:{width:"70%"},placeholder:"请输入合约地址"}),e(t,{type:"primary",children:"提前授权"})]})]})]})}export{I as default};
