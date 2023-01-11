import{ab as e,G as i,H as n,ad as a}from"./framework-835b568f.js";const c={},t=a(`<h2 id="什么是-vue-cli" tabindex="-1"><a class="header-anchor" href="#什么是-vue-cli" aria-hidden="true">#</a> 什么是 Vue CLI</h2><p>如果只是简单的写几个 Vue 的 Demo 程序，那么基本不需要使用 Vue CLI</p><p>如果是开发大型项目，那么必然需要使用 Vue CLI。因为需要考虑代码目录结构、项目结构和部署、热加载、代码单元测试等事情，而这些就可以通过脚手架来帮助解决。</p><p>CLI(Commmand-Line Interface)，翻译为命令行界面，俗称脚手架。</p><p>Vue CLI 是一个官方发布的 Vue.js 项目脚手架。使用它可以快速搭建 Vue 爱发环境以及对应的 webpack 配置。</p><h2 id="vue-cli-的使用" tabindex="-1"><a class="header-anchor" href="#vue-cli-的使用" aria-hidden="true">#</a> Vue CLI 的使用</h2><h3 id="使用前提" tabindex="-1"><a class="header-anchor" href="#使用前提" aria-hidden="true">#</a> 使用前提</h3><ul><li><p>node：使用脚手架需要 node 环境，node 也会安装 npm(node package manager)</p></li><li><p>webpack：脚手架工具就使用了 webpack 模板，对所有的资源会压缩等优化操作，并在开发中提供了一套完整的功能，能够使得开发变得更高效。</p></li></ul><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><ol><li><p>安装:使用<code>npm install -g @vue/cli</code>安装的是新版本(&gt;2.x)的 Vue CLI，新版本如果想按照 Vue CLI2 的方式初始化项目是不可以的。</p></li><li><p>更新：使用<code>npm update -g @vue/cli</code>升级全局的 Vue CLI</p></li><li><p>初始化项目：</p><ul><li>Vue CLI2: <code>vue init webpack my-project</code></li><li>Vue CLI3: <code>vue create my-project</code></li></ul></li></ol><div class="hint-container tip"><p class="hint-container-title">提示</p><h5 id="关于旧版本" tabindex="-1"><a class="header-anchor" href="#关于旧版本" aria-hidden="true">#</a> 关于旧版本</h5><p>Vue CLI 的包名称由<code>vue-cli</code>改成了<code>@vue/cli</code>。如果已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，需要先通过<code>npm uninstall vue-cli -g</code>或<code>yarn global &gt; remove vue-cli</code>卸载它。</p><h5 id="拉取-2-x-的模板-旧版本" tabindex="-1"><a class="header-anchor" href="#拉取-2-x-的模板-旧版本" aria-hidden="true">#</a> 拉取 2.X 的模板(旧版本)</h5><p>Vue CLI &gt;= 3 和旧版使用了相同的 vue 命令，所以 Vue CLI 2 (vue-cli) 被覆盖了。如果你仍然需要使用旧版本的 vue init 功能，你可以全局安装一个桥接工具：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-init
<span class="token comment"># \`vue init\` 的运行效果将会跟 \`vue-cli@2.x\` 相同</span>
vue init webpack my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="vue-cli2-初始化项目" tabindex="-1"><a class="header-anchor" href="#vue-cli2-初始化项目" aria-hidden="true">#</a> Vue CLI2 初始化项目</h3><p>执行<code>vue init webpack my-project</code>后的一些选项：</p><pre>- Project name                                                            —— 项目名称
- Project description                                                     —— 项目描述
- Author                                                                  —— 作者
- Vue build                                                               —— 项目构建方式
  - Runtime + Compiler
  - Runtime only
- Install vue-router?                                                     —— 是否安装路由
- Use ESLint to lint your code?                                           —— 是否使用ESLint代码规范
  - yes -&gt; Pick an ESLint preset
    - Standard
    - Airbnb
    - none(configure it yourself)
- Set up unit tests                                                       —— 单元测试
- Setup e2e tests whit Nightwatch?                                        —— 端到端单元测试
- Should we run \`npm install\` for you after the project has been created? —— 使用哪一个包管理器
</pre><p>生成的项目文件目录：</p><pre>- build
- config
- src
  - assets
  - components
  - App.vue
  - main.js
- static          —— 静态资源，原封不动的复制到dist中
- .babelrc        —— babel的配置
- .editorconfig   —— 保证团队代码编辑风格的统一
- .eslintignore   —— 忽略eslint规则的文件/文件夹
- .eslintrc.js    —— eslit的配置
- .gitignore      —— git版本控制忽略的文件/文件夹
- .postcsssrc.js  —— css转化的配置
- index.html      —— index的模板
- package.json
- README.md
</pre><h3 id="vue-cli-3" tabindex="-1"><a class="header-anchor" href="#vue-cli-3" aria-hidden="true">#</a> Vue CLI 3</h3><p>与 vue-cli 2 的区别</p><ol><li>vue-cli 3 是基于 webpack 4 打造，vu-cli 2 还是 webpack 3</li><li>vue-cli 3 的设计原则是&quot;0 配置&quot;，移除了跟文件目录下的 build、config 等配置文件的目录</li><li>vue-cli 3 增加了 vue ui 命令，提供了可视化配置，更加人性化</li><li>移除了 static 文件夹，新增了 public 问加纳及，并且 index.html 移动到 public 中</li></ol>`,19),l=[t];function d(s,r){return i(),n("div",null,l)}const o=e(c,[["render",d],["__file","Vue_CLI.html.vue"]]);export{o as default};
