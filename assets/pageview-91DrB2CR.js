function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o,ah as n}from"./app-lwATv0Qq.js";const i=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-lwATv0Qq.js").then(r=>r.ai),__vite__mapDeps([])),t=n();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{i as updatePageview};
