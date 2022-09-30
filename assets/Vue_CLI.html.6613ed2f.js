import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,f as a}from"./app.8ba6a2e7.js";const c={},t=a(`<h2 id="\u4EC0\u4E48\u662Fvue-cli" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fvue-cli" aria-hidden="true">#</a> \u4EC0\u4E48\u662FVue CLI</h2><p>\u5982\u679C\u53EA\u662F\u7B80\u5355\u7684\u5199\u51E0\u4E2AVue\u7684Demo\u7A0B\u5E8F\uFF0C\u90A3\u4E48\u57FA\u672C\u4E0D\u9700\u8981\u4F7F\u7528Vue CLI</p><p>\u5982\u679C\u662F\u5F00\u53D1\u5927\u578B\u9879\u76EE\uFF0C\u90A3\u4E48\u5FC5\u7136\u9700\u8981\u4F7F\u7528Vue CLI\u3002\u56E0\u4E3A\u9700\u8981\u8003\u8651\u4EE3\u7801\u76EE\u5F55\u7ED3\u6784\u3001\u9879\u76EE\u7ED3\u6784\u548C\u90E8\u7F72\u3001\u70ED\u52A0\u8F7D\u3001\u4EE3\u7801\u5355\u5143\u6D4B\u8BD5\u7B49\u4E8B\u60C5\uFF0C\u800C\u8FD9\u4E9B\u5C31\u53EF\u4EE5\u901A\u8FC7\u811A\u624B\u67B6\u6765\u5E2E\u52A9\u89E3\u51B3\u3002</p><p>CLI(Commmand-Line Interface)\uFF0C\u7FFB\u8BD1\u4E3A\u547D\u4EE4\u884C\u754C\u9762\uFF0C\u4FD7\u79F0\u811A\u624B\u67B6\u3002</p><p>Vue CLI\u662F\u4E00\u4E2A\u5B98\u65B9\u53D1\u5E03\u7684Vue.js\u9879\u76EE\u811A\u624B\u67B6\u3002\u4F7F\u7528\u5B83\u53EF\u4EE5\u5FEB\u901F\u642D\u5EFAVue\u7231\u53D1\u73AF\u5883\u4EE5\u53CA\u5BF9\u5E94\u7684webpack\u914D\u7F6E\u3002</p><h2 id="vue-cli\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#vue-cli\u7684\u4F7F\u7528" aria-hidden="true">#</a> Vue CLI\u7684\u4F7F\u7528</h2><h3 id="\u4F7F\u7528\u524D\u63D0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u524D\u63D0" aria-hidden="true">#</a> \u4F7F\u7528\u524D\u63D0</h3><ul><li><p>node\uFF1A\u4F7F\u7528\u811A\u624B\u67B6\u9700\u8981node\u73AF\u5883\uFF0Cnode\u4E5F\u4F1A\u5B89\u88C5npm(node package manager)</p></li><li><p>webpack\uFF1A\u811A\u624B\u67B6\u5DE5\u5177\u5C31\u4F7F\u7528\u4E86webpack\u6A21\u677F\uFF0C\u5BF9\u6240\u6709\u7684\u8D44\u6E90\u4F1A\u538B\u7F29\u7B49\u4F18\u5316\u64CD\u4F5C\uFF0C\u5E76\u5728\u5F00\u53D1\u4E2D\u63D0\u4F9B\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u529F\u80FD\uFF0C\u80FD\u591F\u4F7F\u5F97\u5F00\u53D1\u53D8\u5F97\u66F4\u9AD8\u6548\u3002</p></li></ul><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><ol><li><p>\u5B89\u88C5:\u4F7F\u7528<code>npm install -g @vue/cli</code>\u5B89\u88C5\u7684\u662F\u65B0\u7248\u672C(&gt;2.x)\u7684Vue CLI\uFF0C\u65B0\u7248\u672C\u5982\u679C\u60F3\u6309\u7167Vue CLI2\u7684\u65B9\u5F0F\u521D\u59CB\u5316\u9879\u76EE\u662F\u4E0D\u53EF\u4EE5\u7684\u3002</p></li><li><p>\u66F4\u65B0\uFF1A\u4F7F\u7528<code>npm update -g @vue/cli</code>\u5347\u7EA7\u5168\u5C40\u7684 Vue CLI</p></li><li><p>\u521D\u59CB\u5316\u9879\u76EE\uFF1A</p><ul><li>Vue CLI2: <code>vue init webpack my-project</code></li><li>Vue CLI3: <code>vue create my-project</code></li></ul></li></ol><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><h5 id="\u5173\u4E8E\u65E7\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u65E7\u7248\u672C" aria-hidden="true">#</a> \u5173\u4E8E\u65E7\u7248\u672C</h5><p>Vue CLI \u7684\u5305\u540D\u79F0\u7531<code>vue-cli</code>\u6539\u6210\u4E86<code>@vue/cli</code>\u3002\u5982\u679C\u5DF2\u7ECF\u5168\u5C40\u5B89\u88C5\u4E86\u65E7\u7248\u672C\u7684 vue-cli (1.x \u6216 2.x)\uFF0C\u9700\u8981\u5148\u901A\u8FC7<code>npm uninstall vue-cli -g</code>\u6216<code>yarn global &gt; remove vue-cli</code>\u5378\u8F7D\u5B83\u3002</p><h5 id="\u62C9\u53D62-x\u7684\u6A21\u677F-\u65E7\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D62-x\u7684\u6A21\u677F-\u65E7\u7248\u672C" aria-hidden="true">#</a> \u62C9\u53D62.X\u7684\u6A21\u677F(\u65E7\u7248\u672C)</h5><p>Vue CLI &gt;= 3 \u548C\u65E7\u7248\u4F7F\u7528\u4E86\u76F8\u540C\u7684 vue \u547D\u4EE4\uFF0C\u6240\u4EE5 Vue CLI 2 (vue-cli) \u88AB\u8986\u76D6\u4E86\u3002\u5982\u679C\u4F60\u4ECD\u7136\u9700\u8981\u4F7F\u7528\u65E7\u7248\u672C\u7684 vue init \u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u5168\u5C40\u5B89\u88C5\u4E00\u4E2A\u6865\u63A5\u5DE5\u5177\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-init
<span class="token comment"># \`vue init\` \u7684\u8FD0\u884C\u6548\u679C\u5C06\u4F1A\u8DDF \`vue-cli@2.x\` \u76F8\u540C</span>
vue init webpack my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="vue-cli2\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#vue-cli2\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> Vue CLI2\u521D\u59CB\u5316\u9879\u76EE</h3><p>\u6267\u884C<code>vue init webpack my-project</code>\u540E\u7684\u4E00\u4E9B\u9009\u9879\uFF1A</p><pre>- Project name                                                            \u2014\u2014 \u9879\u76EE\u540D\u79F0
- Project description                                                     \u2014\u2014 \u9879\u76EE\u63CF\u8FF0
- Author                                                                  \u2014\u2014 \u4F5C\u8005
- Vue build                                                               \u2014\u2014 \u9879\u76EE\u6784\u5EFA\u65B9\u5F0F
  - Runtime + Compiler
  - Runtime only
- Install vue-router?                                                     \u2014\u2014 \u662F\u5426\u5B89\u88C5\u8DEF\u7531
- Use ESLint to lint your code?                                           \u2014\u2014 \u662F\u5426\u4F7F\u7528ESLint\u4EE3\u7801\u89C4\u8303
  - yes -&gt; Pick an ESLint preset
    - Standard
    - Airbnb
    - none(configure it yourself)
- Set up unit tests                                                       \u2014\u2014 \u5355\u5143\u6D4B\u8BD5
- Setup e2e tests whit Nightwatch?                                        \u2014\u2014 \u7AEF\u5230\u7AEF\u5355\u5143\u6D4B\u8BD5
- Should we run \`npm install\` for you after the project has been created? \u2014\u2014 \u4F7F\u7528\u54EA\u4E00\u4E2A\u5305\u7BA1\u7406\u5668
</pre><p>\u751F\u6210\u7684\u9879\u76EE\u6587\u4EF6\u76EE\u5F55\uFF1A</p><pre>- build
- config
- src
  - assets
  - components
  - App.vue
  - main.js
- static          \u2014\u2014 \u9759\u6001\u8D44\u6E90\uFF0C\u539F\u5C01\u4E0D\u52A8\u7684\u590D\u5236\u5230dist\u4E2D
- .babelrc        \u2014\u2014 babel\u7684\u914D\u7F6E
- .editorconfig   \u2014\u2014 \u4FDD\u8BC1\u56E2\u961F\u4EE3\u7801\u7F16\u8F91\u98CE\u683C\u7684\u7EDF\u4E00
- .eslintignore   \u2014\u2014 \u5FFD\u7565eslint\u89C4\u5219\u7684\u6587\u4EF6/\u6587\u4EF6\u5939
- .eslintrc.js    \u2014\u2014 eslit\u7684\u914D\u7F6E
- .gitignore      \u2014\u2014 git\u7248\u672C\u63A7\u5236\u5FFD\u7565\u7684\u6587\u4EF6/\u6587\u4EF6\u5939
- .postcsssrc.js  \u2014\u2014 css\u8F6C\u5316\u7684\u914D\u7F6E
- index.html      \u2014\u2014 index\u7684\u6A21\u677F
- package.json
- README.md
</pre><h3 id="vue-cli-3" tabindex="-1"><a class="header-anchor" href="#vue-cli-3" aria-hidden="true">#</a> Vue CLI 3</h3><p>\u4E0E vue-cli 2 \u7684\u533A\u522B</p><ol><li>vue-cli 3 \u662F\u57FA\u4E8E webpack 4 \u6253\u9020\uFF0Cvu-cli 2 \u8FD8\u662F webpack 3</li><li>vue-cli 3 \u7684\u8BBE\u8BA1\u539F\u5219\u662F&quot;0\u914D\u7F6E&quot;\uFF0C\u79FB\u9664\u4E86\u8DDF\u6587\u4EF6\u76EE\u5F55\u4E0B\u7684build\u3001config\u7B49\u914D\u7F6E\u6587\u4EF6\u7684\u76EE\u5F55</li><li>vue-cli 3 \u589E\u52A0\u4E86 vue ui \u547D\u4EE4\uFF0C\u63D0\u4F9B\u4E86\u53EF\u89C6\u5316\u914D\u7F6E\uFF0C\u66F4\u52A0\u4EBA\u6027\u5316</li><li>\u79FB\u9664\u4E86 static \u6587\u4EF6\u5939\uFF0C\u65B0\u589E\u4E86 public \u95EE\u52A0\u7EB3\u53CA\uFF0C\u5E76\u4E14 index.html \u79FB\u52A8\u5230 public \u4E2D</li></ol>`,19),l=[t];function s(r,u){return i(),n("div",null,l)}const p=e(c,[["render",s],["__file","Vue_CLI.html.vue"]]);export{p as default};
