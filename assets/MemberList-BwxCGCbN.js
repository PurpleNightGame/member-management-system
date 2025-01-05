import{M as j,L as Z,B as ee,Q as qe,a as Te}from"./leancloud-service-D8PKWX6z.js";import{c as te}from"./memberStatus-DvTvbu4x.js";import{d as ue,o as $,c as O,a as Q,m as Ce,g as i,n as Ie,p as E,h as _e,i as Me,e as a,w as s,u as l,F as ae,r as P,q as I,f as v,B as b,s as x,k as Se,v as N,x as le,t as D,y as Fe,z as q,D as se,E as je,G as T,H as p,I as xe,J as ne,K as Ne,L as d,M as Qe,_ as Ue}from"./index-DXhrB1zA.js";import{S as ze}from"./SearchOutline-D1q6xqfW.js";import{z as re}from"./zhCN-61bU8iQO.js";import{C as Be}from"./CreateOutline-C305c4EG.js";import{T as Re}from"./TrashOutline-8WT5DdKs.js";const Le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ae=Q("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ee=Q("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),Pe=[Ae,Ee],$e=ue({name:"EyeOutline",render:function(m,g){return $(),O("svg",Le,Pe)}}),Oe={class:"detail-section"},Ve={class:"detail-section"},Ye=ue({__name:"MemberList",setup(oe){const m=Ce(),g=i(!1),_=async()=>{try{g.value=!0;const[e,t,o]=await Promise.all([j.getAllMembers(),Z.getAllLeaveRecords(),ee.getAllBlacklistRecords()]);return e.map(n=>{const C=te(n,o,t);return{id:n.objectId,nickname:n.nickname,qq:n.qq,gameId:n.gameId||"",joinTime:n.joinTime,stage:n.stage,status:C}})}catch(e){return console.error("Failed to load data:",e),m.error("加载数据失败"),[]}finally{g.value=!1}},f=i([]),M=i(""),S=i(null),F=i(null),y=i(null),U=Ie(()=>{let e=f.value;if(M.value){const t=M.value.toLowerCase();e=e.filter(o=>o.nickname.toLowerCase().includes(t)||o.qq.toLowerCase().includes(t)||o.gameId&&o.gameId.toLowerCase().includes(t))}if(S.value&&(e=e.filter(t=>t.stage===S.value)),F.value&&(e=e.filter(t=>t.status===F.value)),y.value&&y.value[0]&&y.value[1]){const t=new Date(y.value[0]),o=new Date(y.value[1]),n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),C=Date.UTC(o.getFullYear(),o.getMonth(),o.getDate());e=e.filter(u=>{const A=new Date(u.joinDate),X=Date.UTC(A.getFullYear(),A.getMonth(),A.getDate());return X>=n&&X<=C})}return e}),w=i({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,30,40,50,100],prefix:({itemCount:e})=>`共 ${e} 条数据`,suffix:({page:e,pageSize:t,pageCount:o})=>`第 ${e} 页 / 共 ${o} 页`,itemCount:0});E(()=>U.value.length,e=>{w.value.itemCount=e},{immediate:!0}),E(f,e=>{w.value.itemCount=e.length},{deep:!0});const V=e=>{const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));return`${t.getUTCFullYear()}-${String(t.getUTCMonth()+1).padStart(2,"0")}-${String(t.getUTCDate()).padStart(2,"0")}`};E(()=>f.value,async e=>{e&&e.forEach(async t=>{t.status==="未训退队"?await qe.addQuitRecord({memberId:t.id,memberName:t.nickname,memberQQ:t.qq,quitDate:V(new Date),reason:"未参训",quitType:"未训退队"}):t.status==="违规退队"&&await Te.addBlacklistQuitRecord({memberId:t.id,memberName:t.nickname,memberQQ:t.qq,quitDate:V(new Date),reason:"违规退队",quitType:"违规退队"})})},{deep:!0});const ie=[{title:"昵称",key:"nickname",width:120,sorter:"default"},{title:"QQ号",key:"qq",width:120,sorter:(e,t)=>Number(e.qq)-Number(t.qq)},{title:"游戏ID",key:"gameId",width:120,sorter:"default"},{title:"加入时间",key:"joinTime",width:120,sorter:(e,t)=>new Date(e.joinTime).getTime()-new Date(t.joinTime).getTime()},{title:"阶段",key:"stage",width:100,sorter:(e,t)=>{const o={未新训:0,新训初期:1,新训1期:2,新训2期:3,新训3期:4,新训准考:5,紫夜:6};return o[e.stage]-o[t.stage]},render(e){const t={未新训:"error",新训初期:"info",新训1期:"info",新训2期:"info",新训3期:"info",新训准考:"success",紫夜:"purple"},o={紫夜:{color:"#7B1FA2",backgroundColor:"#EDE7F6"}};return d(p,{type:t[e.stage],round:!0,style:e.stage==="紫夜"?o.紫夜:void 0},{default:()=>e.stage})}},{title:"状态",key:"status",width:100,render(e){return d(p,{type:W(e.status),round:!0},{default:()=>e.status})}},{title:"操作",key:"actions",width:180,render(e){return d(I,{align:"center"},{default:()=>[d(b,{quaternary:!0,circle:!0,size:"small",style:"color: #18a058",onClick:()=>ve(e)},{icon:()=>d($e)}),d(b,{quaternary:!0,circle:!0,size:"small",style:"color: #7B1FA2",onClick:()=>ge(e)},{icon:()=>d(Be)}),d(Qe,{onPositiveClick:()=>me(e)},{trigger:()=>d(b,{quaternary:!0,circle:!0,size:"small",style:"color: #d03050"},{icon:()=>d(Re)}),default:()=>"确定删除该成员吗？"})]})}}],de=e=>{w.value.page=e},ce=e=>{w.value.pageSize=e;const t=Math.ceil(U.value.length/e);w.value.page>t&&(w.value.page=t)},ve=async e=>{c.value=e,L.value=!0,await we(e)},ge=async e=>{k.value=e.id,r.value={nickname:e.nickname,qq:e.qq,gameId:e.gameId||"",joinTime:new Date(e.joinTime).getTime(),stage:e.stage,status:e.status},h.value=!0},me=async e=>{try{g.value=!0,await j.deleteMember(e.id),f.value=await _(),m.success("删除成功")}catch(t){console.error("Failed to delete member:",t),m.error("删除失败")}finally{g.value=!1}},z={nickname:"",qq:"",gameId:"",joinTime:null,stage:null,status:"正常"},h=i(!1),Y=i(null),r=i({...z}),H=[{label:"未新训",value:"未新训"},{label:"新训初期",value:"新训初期"},{label:"新训1期",value:"新训1期"},{label:"新训2期",value:"新训2期"},{label:"新训3期",value:"新训3期"},{label:"新训准考",value:"新训准考"},{label:"紫夜",value:"紫夜"}],G=[{label:"正常",value:"正常"},{label:"异常",value:"异常"},{label:"催促参训",value:"催促参训"},{label:"未训退队",value:"未训退队"},{label:"超时退队",value:"超时退队"},{label:"违规退队",value:"违规退队"}],pe={nickname:{required:!0,message:"请输入昵称",trigger:["blur","input"]},qq:[{required:!0,message:"请输入QQ号",trigger:["blur","input"]},{pattern:/^\d{5,11}$/,message:"请输入正确的QQ号",trigger:["blur","input"]}],joinTime:{required:!0,type:"number",message:"请选择加入时间",trigger:["blur","change"],validator:(e,t)=>t?new Date(t)<=new Date:!1},stage:{required:!0,message:"请选择阶段",trigger:["blur","change"]},status:{required:!0,message:"请选择状态",trigger:["blur","change"]}},B=i(!1),k=i(null),fe=async()=>{var e;try{if(await((e=Y.value)==null?void 0:e.validate()),g.value=!0,k.value){const t={nickname:r.value.nickname,qq:r.value.qq,gameId:r.value.gameId||"",joinTime:new Date(r.value.joinTime).toLocaleDateString("zh-CN").replace(/\//g,"-"),stage:r.value.stage,status:r.value.stage==="未新训"?"催促参训":"正常"};await j.updateMember(k.value,t)}else{const t={nickname:r.value.nickname,qq:r.value.qq,gameId:r.value.gameId||"",joinTime:new Date(r.value.joinTime).toLocaleDateString("zh-CN").replace(/\//g,"-"),stage:r.value.stage,status:r.value.stage==="未新训"?"催促参训":"正常",onLeave:!1,leaveRequest:"未申请"};await j.addMember(t)}f.value=await _(),h.value=!1,r.value={...z},m.success(k.value?"更新成功":"添加成功")}catch(t){console.error("Failed to submit:",t),m.error(k.value?"更新失败":"添加失败")}finally{g.value=!1}};let R=null;const ye=()=>{R=window.setInterval(async()=>{try{const e=await _();f.value=e}catch(e){console.error("Failed to auto update data:",e)}},6e4)};_e(async()=>{try{g.value=!0,f.value=await _(),ye()}catch(e){console.error("Failed to load initial data:",e),m.error("初始数据加载失败")}finally{g.value=!1}}),Me(()=>{R&&clearInterval(R)});const L=i(!1),c=i(null),J=i([]),K=i([]),we=async e=>{try{const t=await Z.getAllLeaveRecords();J.value=t.filter(n=>n.memberId===e.id).map(n=>({...n,startDate:n.startDate,endDate:n.endDate,reason:n.reason,status:n.status}));const o=await ee.getAllBlacklistRecords();K.value=o.filter(n=>n.memberId===e.id).map(n=>({...n,recordDate:n.recordDate,reason:n.reason,points:n.points||1,status:n.status||"有效"})),c.value&&(c.value.status=te(e,o,t))}catch(t){console.error("Failed to load member records:",t),m.error("加载记录失败")}},De=[{title:"起始日期",key:"startDate",width:130,sorter:(e,t)=>new Date(e.startDate).getTime()-new Date(t.startDate).getTime()},{title:"结束日期",key:"endDate",width:130,sorter:(e,t)=>new Date(e.endDate).getTime()-new Date(t.endDate).getTime()},{title:"请假原因",key:"reason",width:200},{title:"状态",key:"status",width:100,render(e){return d(p,{type:{请假中:"warning",等待销假:"info",已结束:"success"}[e.status],round:!0},{default:()=>e.status})}}],he=[{title:"记录日期",key:"recordDate",width:130,sorter:(e,t)=>new Date(e.recordDate).getTime()-new Date(t.recordDate).getTime()},{title:"等级",key:"level",width:100,render(e){return d(p,{type:e.level==="严重警告"?"error":"warning",round:!0},{default:()=>e.level})}},{title:"原因",key:"reason",width:200},{title:"黑点数",key:"points",width:80,render(e){return d(p,{type:"default",round:!0},{default:()=>e.points||1})}},{title:"状态",key:"status",width:80,render(e){return d(p,{type:e.status==="有效"?"success":"error",round:!0},{default:()=>e.status||"有效"})}}],W=e=>{switch(e){case"正常":return"success";case"异常":return"error";case"催促参训":case"催促新训":return"warning";case"未训退队":case"超时退队":case"违规退队":return"error";default:return"default"}},ke=e=>({未新训:"error",新训初期:"info",新训1期:"info",新训2期:"info",新训3期:"info",新训准考:"success",紫夜:"purple"})[e]||"default",be=()=>{B.value=!1,k.value=null,r.value={...z},h.value=!0};return(e,t)=>{const o=P("n-h2"),n=P("n-data-table"),C=P("n-card");return $(),O(ae,null,[a(C,null,{header:s(()=>[a(l(I),{align:"center",justify:"space-between"},{default:s(()=>[a(o,{style:{margin:"0",color:"#7B1FA2"}},{default:s(()=>t[13]||(t[13]=[v("成员列表")])),_:1}),a(l(b),{type:"primary",onClick:be},{default:s(()=>t[14]||(t[14]=[v(" 添加成员 ")])),_:1})]),_:1})]),default:s(()=>[a(l(I),{vertical:""},{default:s(()=>[a(l(I),null,{default:s(()=>[a(l(x),{value:M.value,"onUpdate:value":t[0]||(t[0]=u=>M.value=u),placeholder:"搜索昵称/QQ号/游戏ID",clearable:"",style:{width:"200px"}},{prefix:s(()=>[a(l(Se),null,{default:s(()=>[a(l(ze))]),_:1})]),_:1},8,["value"]),a(l(N),{value:S.value,"onUpdate:value":t[1]||(t[1]=u=>S.value=u),placeholder:"阶段筛选",clearable:"",options:H,style:{width:"120px"}},null,8,["value"]),a(l(N),{value:F.value,"onUpdate:value":t[2]||(t[2]=u=>F.value=u),placeholder:"状态筛选",clearable:"",options:G,style:{width:"120px"}},null,8,["value"]),a(l(le),{value:y.value,"onUpdate:value":t[3]||(t[3]=u=>y.value=u),type:"daterange",clearable:"",locale:l(re).DatePicker,placeholder:"选择加入时间范围",style:{width:"250px"}},null,8,["value","locale"])]),_:1}),a(n,{columns:ie,data:U.value,pagination:w.value,loading:g.value,"onUpdate:page":de,"onUpdate:pageSize":ce},null,8,["data","pagination","loading"])]),_:1})]),_:1}),a(l(se),{show:h.value,"onUpdate:show":t[11]||(t[11]=u=>h.value=u),preset:"card",title:B.value?"编辑成员":"添加成员",style:{width:"600px"}},{footer:s(()=>[a(l(I),{justify:"end"},{default:s(()=>[a(l(b),{onClick:t[10]||(t[10]=u=>h.value=!1)},{default:s(()=>t[15]||(t[15]=[v("取消")])),_:1}),a(l(b),{type:"primary",class:"submit-button",onClick:fe},{default:s(()=>[v(D(B.value?"保存":"确定"),1)]),_:1})]),_:1})]),default:s(()=>[a(l(Fe),{ref_key:"formRef",ref:Y,model:r.value,rules:pe,"label-placement":"left","label-width":"80","require-mark-placement":"right-hanging"},{default:s(()=>[a(l(q),{label:"昵称",path:"nickname"},{default:s(()=>[a(l(x),{value:r.value.nickname,"onUpdate:value":t[4]||(t[4]=u=>r.value.nickname=u),placeholder:"请输入昵称",clearable:""},null,8,["value"])]),_:1}),a(l(q),{label:"QQ号",path:"qq"},{default:s(()=>[a(l(x),{value:r.value.qq,"onUpdate:value":t[5]||(t[5]=u=>r.value.qq=u),placeholder:"请输入QQ号",clearable:""},null,8,["value"])]),_:1}),a(l(q),{label:"游戏ID",path:"gameId"},{default:s(()=>[a(l(x),{value:r.value.gameId,"onUpdate:value":t[6]||(t[6]=u=>r.value.gameId=u),placeholder:"请输入游戏ID（选填）",clearable:""},null,8,["value"])]),_:1}),a(l(q),{label:"加入时间",path:"joinTime"},{default:s(()=>[a(l(le),{value:r.value.joinTime,"onUpdate:value":t[7]||(t[7]=u=>r.value.joinTime=u),type:"date",clearable:"",locale:l(re).DatePicker,placeholder:"请选择加入时间","is-date-disabled":u=>u>Date.now(),style:{width:"100%"}},null,8,["value","locale","is-date-disabled"])]),_:1}),a(l(q),{label:"阶段",path:"stage"},{default:s(()=>[a(l(N),{value:r.value.stage,"onUpdate:value":t[8]||(t[8]=u=>r.value.stage=u),options:H,placeholder:"请选择阶段",clearable:""},null,8,["value"])]),_:1}),a(l(q),{label:"状态",path:"status"},{default:s(()=>[a(l(N),{value:r.value.status,"onUpdate:value":t[9]||(t[9]=u=>r.value.status=u),options:G,placeholder:"请选择状态",clearable:""},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"]),a(l(se),{show:L.value,"onUpdate:show":t[12]||(t[12]=u=>L.value=u),preset:"card",title:"成员详情",style:{width:"800px"}},{default:s(()=>[c.value?($(),O(ae,{key:0},[a(l(je),{bordered:""},{default:s(()=>[a(l(T),{label:"昵称"},{default:s(()=>[v(D(c.value.nickname),1)]),_:1}),a(l(T),{label:"QQ号"},{default:s(()=>[v(D(c.value.qq),1)]),_:1}),a(l(T),{label:"游戏ID"},{default:s(()=>[v(D(c.value.gameId||"未设置"),1)]),_:1}),a(l(T),{label:"加入时间"},{default:s(()=>[v(D(c.value.joinTime),1)]),_:1}),a(l(T),{label:"阶段"},{default:s(()=>[a(l(p),{type:ke(c.value.stage),round:"",style:xe(c.value.stage==="紫夜"?{color:"#7B1FA2",backgroundColor:"#EDE7F6"}:void 0)},{default:s(()=>[v(D(c.value.stage),1)]),_:1},8,["type","style"])]),_:1}),a(l(T),{label:"状态"},{default:s(()=>[a(l(p),{type:W(c.value.status),round:""},{default:s(()=>[v(D(c.value.status),1)]),_:1},8,["type"])]),_:1})]),_:1}),Q("div",Oe,[a(l(ne),null,{default:s(()=>t[16]||(t[16]=[v("请假记录")])),_:1}),a(n,{columns:De,data:J.value,pagination:{pageSize:5}},null,8,["data"])]),Q("div",Ve,[a(l(ne),null,{default:s(()=>t[17]||(t[17]=[v("违规记录")])),_:1}),a(n,{columns:he,data:K.value,pagination:{pageSize:5}},null,8,["data"])])],64)):Ne("",!0)]),_:1},8,["show"])],64)}}}),et=Ue(Ye,[["__scopeId","data-v-ce1f3d7d"]]);export{et as default};