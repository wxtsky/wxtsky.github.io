import{r as f,h as P,j as u}from"./index-30ca824a.js";import{B as i}from"./index-5baec20b.js";import{B as v}from"./button-74b29afc.js";import{M as L,F as k}from"./index-23f0fd82.js";import{I as O}from"./index-46ecd646.js";import{m as p}from"./index-63716e0a.js";import{L as M,d as F,a as W,C as y}from"./index-a917681c.js";import{T as j,f as T,a as D,p as V}from"./index-74bf53fa.js";import{v as _,J}from"./json-rpc-provider-545a670e.js";import"./index-c49dd96a.js";import"./motion-9f18b6ee.js";import"./useMergedState-68142bc3.js";import"./index-a76946d9.js";import"./colors-56c2ced0.js";import"./collapse-97de76d4.js";import"./row-64a2a8a2.js";import"./useFlexGapSupport-d8e09818.js";import"./responsiveObserver-ca965483.js";import"./slide-1c1c430c.js";import"./index-900836db.js";import"./index-7578be44.js";import"./fade-f207df8e.js";import"./RightOutlined-ae7280c8.js";import"./index-6d95cbb0.js";import"./getDataOrAriaProps-cf91de79.js";import"./Dropdown-b5aab39a.js";import"./EllipsisOutlined-6ab7d953.js";import"./index-14418e67.js";const x=new M(_);let $=1;function S(g,e){const a="Web3LegacyFetcher";return function(s,n){const o={method:s,params:n,id:$++,jsonrpc:"2.0"};return new Promise((m,h)=>{this.emit("debug",{action:"request",fetcher:a,request:W(o),provider:this}),e(o,(t,c)=>{if(t)return this.emit("debug",{action:"response",fetcher:a,error:t,request:o,provider:this}),h(t);if(this.emit("debug",{action:"response",fetcher:a,request:o,response:c,provider:this}),c.error){const B=new Error(c.error.message);return B.code=c.error.code,B.data=c.error.data,h(B)}m(c.result)})})}}function H(g){return function(e,a){a==null&&(a=[]);const s={method:e,params:a};return this.emit("debug",{action:"request",fetcher:"Eip1193Fetcher",request:W(s),provider:this}),g.request(s).then(n=>(this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:s,response:n,provider:this}),n),n=>{throw this.emit("debug",{action:"response",fetcher:"Eip1193Fetcher",request:s,error:n,provider:this}),n})}}class E extends J{constructor(e,a){e==null&&x.throwArgumentError("missing provider","provider",e);let s=null,n=null,o=null;typeof e=="function"?(s="unknown:",n=e):(s=e.host||e.path||"",!s&&e.isMetaMask&&(s="metamask"),o=e,e.request?(s===""&&(s="eip-1193:"),n=H(e)):e.sendAsync?n=S(e,e.sendAsync.bind(e)):e.send?n=S(e,e.send.bind(e)):x.throwArgumentError("unsupported provider","provider",e),s||(s="unknown:")),super(s,a),F(this,"jsonRpcFetchFunc",n),F(this,"provider",o)}send(e,a){return this.jsonRpcFetchFunc(e,a)}}const z=()=>{const[g,e]=f.useState(!1),[a,s]=f.useState(!1),{userAddress:n}=i(l=>({userAddress:l.userAddress})),{Provider:o}=i(l=>({Provider:l.Provider})),{BEP20ABI:m}=i(l=>({BEP20ABI:l.BEP20ABI})),[h,t]=f.useState(""),[c,B]=f.useState("添加代币"),{BEP20TokenInfo:b}=i(l=>({BEP20TokenInfo:l.BEP20TokenInfo})),{setBEP20TokenInfo:d}=i(l=>({setBEP20TokenInfo:l.setBEP20TokenInfo}));return f.useEffect(()=>{b.address&&B(`当前导入代币: ${b.symbol}  点击修改`)},[b]),P("div",{children:[u(v,{type:"primary",onClick:()=>{e(!0)},style:{width:"90%",marginTop:"2%",marginLeft:"5%",marginRight:"5%"},disabled:n===""||o===null,ghost:!0,children:c}),u(L,{title:"请输入BSC代币合约地址",open:g,onOk:async()=>{try{s(!0);const l=new y(h,m,o),A=await l.symbol(),I=await l.decimals();B(`当前导入代币: ${A}  点击修改`),console.log(A,I),d({address:h,symbol:A,decimals:I}),console.log(b),s(!1),e(!1)}catch(l){p.error(l.message)}finally{s(!1)}},confirmLoading:a,onCancel:()=>{console.log("Clicked cancel button"),e(!1)},children:u(k,{children:u(k.Item,{label:"合约地址",children:u(O,{value:h,onChange:l=>t(l.target.value)})})})})]})},G=[{title:"名称",dataIndex:"name",key:"name",align:"center"},{title:"数量",dataIndex:"num",key:"num",align:"center"}];function K(){const[g,e]=f.useState(!0),[a,s]=f.useState(!1),{userAddress:n}=i(r=>({userAddress:r.userAddress})),{Provider:o}=i(r=>({Provider:r.Provider})),{WBNBAddress:m}=i(r=>({WBNBAddress:r.WBNBAddress})),{USDTAddress:h}=i(r=>({USDTAddress:r.USDTAddress})),{BEP20TokenInfo:t}=i(r=>({BEP20TokenInfo:r.BEP20TokenInfo})),{ownerContractAddress:c}=i(r=>({ownerContractAddress:r.ownerContractAddress})),{ownerContractABI:B}=i(r=>({ownerContractABI:r.ownerContractABI})),{setUserBalance:b}=i(r=>({setUserBalance:r.setUserBalance})),{userBalance:d}=i(r=>({userBalance:r.userBalance})),C=[{key:"1",name:"BNB余额",num:Number(d.bnbBalance).toFixed(3)},{key:"2",name:"WBNB余额",num:Number(d.wbnbBalance).toFixed(3)},{key:"3",name:"USDT余额",num:Number(d.usdtBalance).toFixed(3)},{key:"4",name:t.symbol?t.symbol+"余额":"代币余额",num:Number(d.tokenBalance).toFixed(3)},{key:"5",name:"钱包数量",num:d.walletNum}],w=async()=>{if(console.log(Boolean(o)),o)try{s(!0);const r=await o.getBalance(n),A=await new y(m,["function balanceOf(address) view returns (uint)"],o).balanceOf(n),q=await new y(h,["function balanceOf(address) view returns (uint)"],o).balanceOf(n),U=await new y(t.address,["function balanceOf(address) view returns (uint)"],o).balanceOf(n);console.log(c,B);const N=new y(c,B,o);console.log(N);const R=await N.getCreateLength({from:n});b({bnbBalance:Number(T(r)).toFixed(3),wbnbBalance:Number(T(A)).toFixed(3),usdtBalance:T(q),tokenBalance:D(U,t.decimals),walletNum:R.toNumber()}),console.log(d),p.success({content:"查询成功",duration:1}),s(!1)}catch(r){console.log(r),p.error({content:"查询失败",duration:1})}finally{s(!1)}};return f.useEffect(()=>{t.address&&(e(!1),w())},[t]),P("div",{children:[u(j,{columns:G,dataSource:C,pagination:!1,style:{width:"90%",marginTop:"3%",marginLeft:"5%",marginRight:"5%"}}),u(v,{type:"primary",onClick:w,disabled:g,style:{width:"90%",marginTop:"3%",marginLeft:"5%",marginRight:"5%"},loading:a,children:"查询余额"})]})}function Q(){const{userAddress:g}=i(d=>({userAddress:d.userAddress})),{Provider:e}=i(d=>({Provider:d.Provider})),{WBNBAddress:a}=i(d=>({WBNBAddress:d.WBNBAddress})),[s,n]=f.useState(!1),[o,m]=f.useState(!1),[h,t]=f.useState(""),c=["function deposit() public payable","function balanceOf(address account) public view returns (uint256)"];return P("div",{style:{width:"90%",marginTop:"2%",marginLeft:"5%",marginRight:"5%"},children:[u(v,{type:"primary",style:{width:"100%"},onClick:()=>n(!0),children:"兑换WBNB"}),u(L,{title:"使用BNB兑换WBNB",open:s,onOk:()=>{m(!0);try{const d=new y(a,c,e),C=[{from:g,to:a,data:d.interface.encodeFunctionData("deposit",[]),value:V(h).toHexString()}];window.ethereum.request({method:"eth_sendTransaction",params:C}).then(w=>{e.waitForTransaction(w).then(r=>{r.status===1?(p.success({content:"兑换成功",duration:1}),m(!1),n(!1)):(p.error({content:"兑换失败",duration:1}),m(!1),n(!1))}).catch(r=>{p.error({content:r.message,duration:1}),m(!1)})}).catch(w=>{p.error({content:w.message,duration:1}),m(!1)})}catch(d){p.error({content:d.message,duration:1}),m(!1),n(!1)}},confirmLoading:o,onCancel:()=>{n(!1)},children:u(k,{children:u(k.Item,{label:"输入兑换数量(1:1)",children:u(O,{value:h,onChange:d=>t(d.target.value)})})})})]})}const X={width:"90%",marginTop:"0.5%",marginLeft:"5%",marginRight:"5%"};function Te(){const[g,e]=f.useState(!1),[a,s]=f.useState("链接钱包"),{setUserAddress:n}=i(t=>({setUserAddress:t.setUserAddress}));i(t=>({userAddress:t.userAddress}));const{setProvider:o}=i(t=>({setProvider:t.setProvider})),{Provider:m}=i(t=>({Provider:t.Provider})),h=async()=>{e(!0);const{ethereum:t}=window;if(!t){p.error("请先安装MetaMask"),e(!1);return}try{await t.request({method:"eth_requestAccounts"});const c=await new E(t);o(c),console.log(m)}catch(c){p.error(c.message)}finally{e(!1)}};return f.useEffect(()=>{const{ethereum:t}=window;t&&(t.selectedAddress&&(s(t.selectedAddress),n(t.selectedAddress),o(new E(t))),t.on("accountsChanged",c=>{c.length>0?(s(c[0]),n(c[0]),o(new E(t))):(s("链接钱包"),n(""))}))},[]),P("div",{className:"person",children:[u(v,{type:"primary",ghost:!0,onClick:h,loading:g,style:X,children:a.length>10?a.slice(0,4)+"..."+a.slice(-4):a}),u(z,{}),u(K,{}),u(Q,{})]})}export{Te as default};
