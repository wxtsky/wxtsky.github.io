import{j as r,h as i}from"./index-1fbcd2e3.js";import{C as c}from"./index-25378623.js";import{I as e}from"./index-e333ca12.js";import{S as t}from"./index-0ba696fe.js";import{B as o}from"./button-46a9cbd4.js";import{T as a}from"./index-3355c388.js";import"./motion-8dc9aad6.js";import"./index-582b7105.js";import"./useMergedState-40f3e9e3.js";import"./EllipsisOutlined-afb2c4c5.js";import"./slide-a72ec05b.js";import"./index-cc2bdfee.js";import"./Dropdown-72981cad.js";import"./colors-ac48a119.js";function l(){return r("div",{className:"pay-amount",children:i(c,{children:[r("p",{children:"选择购买币种:"}),i(e.Group,{compact:!0,children:[i(t,{defaultValue:"1",children:[r(t.Option,{value:"1",children:"USDT"}),r(t.Option,{value:"2",children:"BNB"}),r(t.Option,{value:"3",children:"BUSD"})]}),r(e,{style:{width:"80%"},placeholder:"请输入购买数量"})]}),r(e.Group,{compact:!0,children:r(e,{addonBefore:"池子规模",placeholder:"池子大于多少才会触发购买"})}),r(e.Group,{compact:!0,children:r(e,{addonBefore:"GasPrice",placeholder:"GasPrice"})})]})})}function P(){return i("div",{className:"scientist-coin",children:[i(c,{children:[r("p",{children:"平台:"}),r(t,{defaultValue:"1",children:r(t.Option,{value:"1",children:"PancakeSwap[BSC]"})}),r("p",{children:"RPC:"}),i(e.Group,{compact:!0,children:[r(e,{style:{width:"80%"},defaultValue:"https://bsc-dataseed.binance.org"}),r(o,{type:"primary",children:"测试节点"})]}),r("p",{children:"私钥:"}),i(e.Group,{compact:!0,children:[r(e,{style:{width:"80%"},placeholder:"请输入私钥"}),r(o,{type:"primary",children:"导入私钥"})]}),r(a,{color:"red",children:r("p",{children:"注意:私钥不会上传到服务器,请放心使用,建议使用小号进行操作"})})]}),r(l,{})]})}export{P as default};
