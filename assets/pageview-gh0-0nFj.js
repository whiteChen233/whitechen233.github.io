import{a6 as r}from"./app-N375OT5q.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.white233.top"};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-N375OT5q.js").then(t=>t.ag),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}