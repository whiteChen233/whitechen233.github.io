import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as n}from"./app-De7shokQ.js";const l={},e=n(`<p>参考 &gt; MDN-<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules" target="_blank" rel="noopener noreferrer">JavaScript modules 模块</a></p><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><blockquote><p>Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。</p><p>因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， CommonJS 和基于 AMD 的其他模块系统 如 RequireJS, 以及最新的 Webpack 和 Babel）。</p><p>--- <em>摘自 MDN</em></p></blockquote><p>在模块化之前通常 javascript 的代码会保存在不同的 js 文件中维护,这样的维护方式，会带来一些问题：</p><ul><li>全局变量同名</li><li>引入 js 的依赖顺序</li></ul><h2 id="使用模块作为出口" tabindex="-1"><a class="header-anchor" href="#使用模块作为出口"><span>使用模块作为出口</span></a></h2><p>上面的问题可以使用匿名函数解决全局变量的问题，但是会带来一个新的问题：代码不能复用了。<br> 于是模块化的思想出现了，它将匿名函数中需要对外暴露的属性、方法通过添加到一个对象里，将这个对象返回，并在函数外面使用一个变量接收，这就是一个&#39;模块&#39;了。在其他地方使用前面定义的变量.来调用属性或者方法</p><p>常见的模块化规范：<br> CommonJS、AMD、CMD、也有 ES6 的 Modules</p><p>模块化有两个核心: <strong>导入和导出</strong></p><h3 id="commonjs-中的使用" tabindex="-1"><a class="header-anchor" href="#commonjs-中的使用"><span>CommonJS 中的使用</span></a></h3><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 以下代码需要运行环境支持</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导出</span></span>
<span class="line"><span style="--shiki-light:#DC3EB7;--shiki-dark:#4EC9B0;">module</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#DC3EB7;--shiki-dark:#4EC9B0;">exports</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#9CDCFE;">  flag:</span><span style="--shiki-light:#174781;--shiki-dark:#569CD6;"> true</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">  test</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">() {</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">    console</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;function&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  },</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导入</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// CommonJS模块</span></span>
<span class="line"><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">flag</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">test</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> } </span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;"> require</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 等同于</span></span>
<span class="line"><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> _moduleA</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;"> require</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> flag</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> _moduleA</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">flag</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span>
<span class="line"><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">const</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> test</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> _moduleA</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">test</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6-中的使用" tabindex="-1"><a class="header-anchor" href="#es6-中的使用"><span>ES6 中的使用</span></a></h3><ul><li>使用关键字: <code>export</code>导出,<code>import</code>导入</li></ul><p>导出的功能都是由 named exports 组成— 每个项目（无论是函数，常量等）在导出时都由其名称引用，并且该名称也用于在导入时引用它</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导出</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 方式一</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;"> const</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> flag</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#174781;--shiki-dark:#569CD6;"> true</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;"> function</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;"> test</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">() {}</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 方式二</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;"> const</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> module</span><span style="--shiki-light:#7B30D0;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#9CDCFE;">  flag:</span><span style="--shiki-light:#174781;--shiki-dark:#569CD6;"> true</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">,</span></span>
<span class="line"><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">  test</span><span style="--shiki-light:#002339;--shiki-dark:#9CDCFE;">:</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> () </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">    consloe</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;test&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  },</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导入</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">flag</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">test</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> } </span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;"> &#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>默认导出 versus 命名导出</li></ul><p>还有一种导出类型叫做 default export —这样可以很容易地使模块提供默认功能，并且还可以帮助 JavaScript 模块与现有的 CommonJS 和 AMD 模块系统进行互操作</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 默认导出，一个模块只能有一个default</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> default</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导入的时候可以自定义名字</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> customName</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;"> &#39;ModuleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重命名导出与导入" tabindex="-1"><a class="header-anchor" href="#重命名导出与导入"><span>重命名导出与导入</span></a></h4><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 重命名导出</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function1</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> as</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> newFunc1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function2</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> as</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> newFunc2</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导入</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">newFunc1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">newFunc2</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> } </span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;"> &#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导出</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">export</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function2</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 重命名导入</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> { </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function1</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> as</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> newFunc1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">function2</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> as</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> newFunc2</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> } </span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">from</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;"> &#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建模块对象" tabindex="-1"><a class="header-anchor" href="#创建模块对象"><span>创建模块对象</span></a></h4><p>导入每一个模块功能到一个模块功能对象上。可以使用以下语法形式：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 导入</span></span>
<span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#174781;--shiki-dark:#569CD6;"> *</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> as</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;"> ModuleA</span><span style="--shiki-light:#7B30D0;--shiki-dark:#C586C0;"> from</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;"> &#39;moduleA&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">// 使用</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">ModuleA</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">func1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">();</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">ModuleA</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">prop1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[e];function h(k,p){return a(),s("div",null,t)}const c=i(l,[["render",h],["__file","Modules.html.vue"]]),o=JSON.parse('{"path":"/docs/note/front-end/Vue2/Modules.html","title":"模块化","lang":"zh-CN","frontmatter":{"title":"模块化","date":"2021-07-17T00:00:00.000Z","description":"参考 > MDN-JavaScript modules 模块 背景 Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。 因此，近年来，有...","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/front-end/Vue2/Modules.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"模块化"}],["meta",{"property":"og:description","content":"参考 > MDN-JavaScript modules 模块 背景 Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。 因此，近年来，有..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T09:12:43.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2021-07-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-07T09:12:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"模块化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-07-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-07T09:12:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"使用模块作为出口","slug":"使用模块作为出口","link":"#使用模块作为出口","children":[{"level":3,"title":"CommonJS 中的使用","slug":"commonjs-中的使用","link":"#commonjs-中的使用","children":[]},{"level":3,"title":"ES6 中的使用","slug":"es6-中的使用","link":"#es6-中的使用","children":[]}]}],"git":{"createdTime":1626536851000,"updatedTime":1717751563000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":2}]},"readingTime":{"minutes":2.62,"words":786},"filePathRelative":"docs/note/front-end/Vue2/Modules.md","localizedDate":"2021年7月17日","excerpt":"<p>参考 &gt; MDN-<a href=\\"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JavaScript modules 模块</a></p>\\n<h2>背景</h2>\\n<blockquote>\\n<p>Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）。</p>\\n<p>因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， CommonJS 和基于 AMD 的其他模块系统 如 RequireJS, 以及最新的 Webpack 和 Babel）。</p>\\n<p>--- <em>摘自 MDN</em></p>\\n</blockquote>","autoDesc":true}');export{c as comp,o as data};
