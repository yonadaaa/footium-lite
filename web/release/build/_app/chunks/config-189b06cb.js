import{W as l}from"./vendor-c564b019.js";function u(e){if(!e)return{params:{},pathname:""};const t={},a=e.lastIndexOf("#");let o=e;a!==-1&&(o=o.slice(0,a));const i=o.indexOf("?");i!==-1&&o.slice(i+1).split("&").forEach(r=>{const[p,c=""]=r.split("=");t[decodeURIComponent(p)]=c===""?"true":decodeURIComponent(c)});let s=o.slice(0,i)||"";return s&&!s.endsWith("/")&&(s+="/"),{params:t,pathname:s}}function m(){return typeof window=="undefined"?{params:{}}:u(window.location.href)}function E(e){if(typeof window=="undefined")return{};const t=e||window.location.hash,a={},o=t.lastIndexOf("#");return o!==-1&&t.slice(o+1).split("&").forEach(i=>{const[s,r=""]=i.split("=");a[decodeURIComponent(s)]=decodeURIComponent(r)}),a}function b(e){let t="";for(const a of Object.keys(e)){const o=e[a];t+=`${t===""?"?":"&"}${a}=${o}`}return t}const _={"1":"mainnet","3":"ropsten","4":"rinkeby","5":"goerli","42":"kovan","1337":"localhost chain","31337":"localhost chain"};function I(e){const t=_[e];return t||`chain with id ${e}`}console.log("VERSION: timestamp_1645337817967");E();const{params:y}=m(),T="1337";let n,f=12,d=15;f=5,d=10;let h={}.VITE_WEB_WALLET_ETH_NODE,g=!1;g=!0,n="http://127.0.0.1:8545",h=h,f=2,d=5;const v=I(T);n&&typeof n=="string"&&(!n.startsWith("http")&&!n.startsWith("ws")?n=l(n,{alchemy:void 0,etherscan:void 0,infura:void 0,pocket:void 0,quorum:2}):n=l(n));const O="http://localhost:8000/subgraphs/name/footium-lite/footium-lite",R=["debug","log","subgraph","ethnode","_d_eruda"];typeof window!="undefined"&&(window.env={VITE_ETH_NODE_URI_LOCALHOST:"http://127.0.0.1:8545",VITE_ETH_NODE_URI:"",VITE_THE_GRAPH_HTTP:"http://localhost:8000/subgraphs/name/footium-lite/footium-lite",VITE_CHAIN_ID:"1337",VITE_SVELTEKIT_AMP:"",BASE_URL:"/_app/",MODE:"production",DEV:!1,PROD:!0});export{R as a,d as b,n as c,T as d,v as e,f,u as g,O as h,g as l,y as p,b as q,h as w};
//# sourceMappingURL=config-189b06cb.js.map
