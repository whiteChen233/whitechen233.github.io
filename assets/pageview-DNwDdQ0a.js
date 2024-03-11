function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a7 as r}from"./app-Cg1RxX-M.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://comment.white233.top"};const i=async()=>{try{const{pageviewCount:e}=await r(()=>import("./app-Cg1RxX-M.js").then(t=>t.ah),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
