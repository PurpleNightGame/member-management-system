import{Q as w,M as y,L as I,B as k}from"./leancloud-service-D8PKWX6z.js";import{c as P}from"./memberStatus-DvTvbu4x.js";import{d as z,m as U,R as E,g as v,n as C,h as O,i as J,b as V,w as d,r as R,o as Y,e as c,f as H,u as m,q as _,s as G,k as K,v as W,L as u,H as X,M,B as j,S as Z,_ as ee}from"./index-DXhrB1zA.js";import{S as te}from"./SearchOutline-D1q6xqfW.js";import{C as ae}from"./CloseCircleOutline-CidRfjFs.js";const re=z({__name:"MemberQuit",setup(le){const s=U(),Q=E(),o=v(!1),p=async()=>{try{o.value=!0;const e=await w.getAllQuitRecords(),t=await y.getAllMembers(),r=new Map;return e.sort((a,l)=>{const i=a.createdAt?new Date(a.createdAt).getTime():0;return(l.createdAt?new Date(l.createdAt).getTime():0)-i}),e.forEach(a=>{r.has(a.memberId)||r.set(a.memberId,a)}),Array.from(r.values()).map(a=>{const l=t.find(n=>n.objectId===a.memberId);if(!l)return null;let i=l.joinTime;try{if(l.joinTime){const n=new Date(l.joinTime);isNaN(n.getTime())||(i=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`)}}catch(n){console.error("Error formatting date:",n)}return{...l,id:l.objectId,joinTime:i,quitReason:a.quitType,quitRecordId:a.objectId}}).filter(Boolean)}catch(e){return console.error("Failed to load quit members:",e),s.error("加载数据失败"),[]}finally{o.value=!1}},f=v([]),b=v(""),h=v(null),q=C(()=>{let e=f.value;if(b.value){const t=b.value.toLowerCase();e=e.filter(r=>r.nickname.toLowerCase().includes(t)||r.qq.toLowerCase().includes(t)||r.gameId&&r.gameId.toLowerCase().includes(t))}return h.value&&(e=e.filter(t=>t.quitReason===h.value)),e}),g=v({page:1,pageSize:10,itemCount:C(()=>q.value.length),showSizePicker:!0,pageSizes:[10,20,30,40,50,100],prefix:({itemCount:e})=>`共 ${e} 条数据`,suffix:({page:e,pageSize:t,pageCount:r})=>`第 ${e} 页 / 共 ${r} 页`}),A=e=>{g.value.page=e},x=e=>{g.value.pageSize=e;const t=Math.ceil(q.value.length/e);g.value.page>t&&(g.value.page=t)},T=async e=>{try{o.value=!0,await y.deleteMember(e.id);const t=await k.getAllBlacklistRecords();for(const a of t)a.memberId===e.id&&await k.deleteBlacklistRecord(a.objectId);const r=await I.getAllLeaveRecords();for(const a of r)a.memberId===e.id&&await I.deleteLeaveRecord(a.objectId);f.value=await p(),s.success("成员退队处理完成")}catch(t){console.error("Failed to process quit:",t),s.error("处理失败，请重试")}finally{o.value=!1}},D=async e=>{try{const[t,r,a]=await Promise.all([y.getAllMembers(),I.getAllLeaveRecords(),k.getAllBlacklistRecords()]),l=t.find($=>$.objectId===e.id);if(!l){s.error("未找到该成员");return}const i=P(l,a,r);if(!["未训退队","超时退队","违规退队"].includes(i)){Q.warning({title:"警告",content:`该成员当前状态为"${i}"，不符合退队条件，确定要执行退队操作吗？`,positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{T(e)}});return}await T(e)}catch(t){console.error("Failed to confirm quit:",t),s.error("操作失败，请重试")}},N=async e=>{try{if(o.value=!0,e.quitRecordId&&await w.deleteQuitRecord(e.quitRecordId),e.id){let t=e.joinTime;try{if(e.joinTime){const a=new Date(e.joinTime);isNaN(a.getTime())||(t=`${a.getFullYear()}-${String(a.getMonth()+1).padStart(2,"0")}-${String(a.getDate()).padStart(2,"0")}`)}}catch(a){console.error("Error formatting date:",a)}const r={nickname:e.nickname,qq:e.qq,gameId:e.gameId||"",joinTime:t,stage:e.stage,status:"正常"};await y.updateMember(e.id,r)}f.value=await p(),s.success("已取消退队申请")}catch(t){console.error("Failed to cancel quit:",t),s.error("操作失败，请重试")}finally{o.value=!1}},B=e=>"error",L=[{title:"昵称",key:"nickname",width:130,sorter:"default"},{title:"QQ号",key:"qq",width:130,sorter:(e,t)=>Number(e.qq)-Number(t.qq)},{title:"游戏ID",key:"gameId",width:130,sorter:"default"},{title:"退队原因",key:"quitReason",render:e=>u(X,{type:B(e.quitReason),round:!0},{default:()=>e.quitReason})},{title:"操作",key:"actions",width:130,render(e){return u(_,{align:"center"},{default:()=>[u(M,{onPositiveClick:()=>D(e)},{trigger:()=>u(j,{quaternary:!0,circle:!0,size:"small",style:"color: #18a058"},{icon:()=>u(Z)}),default:()=>"确定将该成员退队吗？"}),u(M,{onPositiveClick:()=>N(e)},{trigger:()=>u(j,{quaternary:!0,circle:!0,size:"small",style:"color: #d03050"},{icon:()=>u(ae)}),default:()=>"确定取消退队申请吗？"})]})}}];let S=null;const F=()=>{S=window.setInterval(async()=>{f.value=await p()},6e4)};return O(async()=>{try{o.value=!0,f.value=await p()}catch(e){console.error("Failed to load initial data:",e),s.error("初始数据加载失败")}finally{o.value=!1}F()}),J(()=>{S&&clearInterval(S)}),(e,t)=>{const r=R("n-h2"),a=R("n-data-table"),l=R("n-card");return Y(),V(l,null,{header:d(()=>[c(r,{style:{margin:"0",color:"#7B1FA2"}},{default:d(()=>t[2]||(t[2]=[H("退队审批")])),_:1})]),default:d(()=>[c(m(_),{vertical:""},{default:d(()=>[c(m(_),null,{default:d(()=>[c(m(G),{value:b.value,"onUpdate:value":t[0]||(t[0]=i=>b.value=i),placeholder:"搜索昵称/QQ号/游戏ID",clearable:"",style:{width:"200px"}},{prefix:d(()=>[c(m(K),null,{default:d(()=>[c(m(te))]),_:1})]),_:1},8,["value"]),c(m(W),{value:h.value,"onUpdate:value":t[1]||(t[1]=i=>h.value=i),placeholder:"退队原因",clearable:"",options:[{label:"超时退队",value:"超时退队"},{label:"未训退队",value:"未训退队"},{label:"违规退队",value:"违规退队"}],style:{width:"120px"}},null,8,["value"])]),_:1}),c(a,{columns:L,data:q.value,pagination:g.value,loading:o.value,"onUpdate:page":A,"onUpdate:pageSize":x},null,8,["data","pagination","loading"])]),_:1})]),_:1})}}}),ue=ee(re,[["__scopeId","data-v-8067cfcb"]]);export{ue as default};