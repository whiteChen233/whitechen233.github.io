import{_ as r}from"./app-baMNq6vb.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.white233.top"};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-baMNq6vb.js").then(t=>t.aj),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{i as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}