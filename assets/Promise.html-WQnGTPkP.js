import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,d as a}from"./app-De7shokQ.js";const n="/assets/note/es6/promise.png",l={},t=a(`<p>以前在前端开发时会有一种情况：一个请求需要依赖另一个请求，如此循环嵌套，就形成了网络请求的回调地狱。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">$</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">ajax</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;url1&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> (</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">data1</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">  // 一些逻辑处理 ...</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">  $</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">ajax</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;url2&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> (</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">data2</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 一些逻辑处理 ...</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">    $</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">ajax</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;url3&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> (</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">data3</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">      // 一些逻辑处理 ...</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">      $</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">ajax</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;url4&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> (</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">data4</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">        // 一些逻辑处理 ...</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">      });</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">    });</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  });</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码虽然有点夸张，但是确实反应了那个时代的<code>真实</code>。这样的代码虽然说一般情况下不会出现问题，但是一旦出问题，排查问题的难度比较高，不好定位，而且这样的代码不仅难看还不容易维护，需要使用一种更加优雅的方式来进行这种异步操作。</p><h2 id="什么是-promise" tabindex="-1"><a class="header-anchor" href="#什么是-promise"><span>什么是 Promise</span></a></h2><p>ES6 中一个非常重要的和好用的特性就是 Promise。</p><p><strong>Promise 是异步编程的一种解决方案</strong>。它用于表示一个异步操作的最终完成(或失败)及其结果值。</p><p>一个<code>Promise</code>对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。</p><p>一个 Promise 必然处于以下几种状态之一：</p><ul><li><strong><em>待定（pending）</em></strong>: 初始状态，既没有被兑现，也没有被拒绝。</li><li><strong><em>已兑现（fulfilled）</em></strong>: 意味着操作成功完成。</li><li><strong><em>已拒绝（rejected）</em></strong>: 意味着操作失败。</li></ul><p>待定状态的 Promise 对象要么会通过一个值被兑现（fulfilled），要么会通过一个原因（错误）被拒绝（rejected）。当这些情况之一发生时，我们用 promise 的 then 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，因此在完成异步操作和绑定处理方法之间不会存在竞争状态。</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#7B30D0;--shiki-dark:#569CD6;">new</span><span style="--shiki-light:#DC3EB7;--shiki-dark:#4EC9B0;"> Promise</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">((</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">resolve</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">, </span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">reject</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">  setTimeout</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(() </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 成功的时候调用 resolve</span></span>
<span class="line"><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">    resolve</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;success&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 失败的时候调用 reject</span></span>
<span class="line"><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">    reject</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#A44185;--shiki-dark:#CE9178;">&#39;error&#39;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  }, </span><span style="--shiki-light:#174781;--shiki-dark:#B5CEA8;">1000</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">})</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  .</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">((</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">data</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 这里处理 resolve 传过来的数据</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">    console</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">data</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  })</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  .</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">catch</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">((</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">err</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) </span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">=&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">    // 这里处理 reject 传过来的数据</span></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">    console</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">log</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">err</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">  });</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+`" alt="Promise" tabindex="0" loading="lazy"><figcaption>Promise</figcaption></figure><h2 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then"><span><code>Promise.prototype.then()</code></span></a></h2><p><code>then()</code> 方法返回一个<code>Promise</code>。它最多需要有两个参数<code>Promise</code>的成功和失败情况的回调函数。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">p</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">onFulfilled</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">[, </span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">onRejected</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">])</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">p</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">then</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">value</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">  // fulfillment</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">}, </span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">reason</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;"> =&gt;</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">  // rejection</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><ul><li><p><code>onFulfilled</code>可选</p><p>当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment value）。如果该参数不是函数，则会在内部被替换为 (x) =&gt; x，即原样返回 promise 最终结果的函数</p></li><li><p><code>onRejected</code>可选</p><p>当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。 如果该参数不是函数，则会在内部被替换为一个 &quot;Thrower&quot; 函数 (it throws an error it received as argument)。</p></li></ul><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><p>当一个<code>Promise</code>完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：</p><ul><li>返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。</li><li>没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。</li><li>抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。</li><li>返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的 Promise 的接受状态回调函数的参数值。</li><li>返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的 Promise 的拒绝状态回调函数的参数值。</li><li>返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。</li></ul><h2 id="promise-prototype-catch" tabindex="-1"><a class="header-anchor" href="#promise-prototype-catch"><span><code>Promise.prototype.catch()</code></span></a></h2><p><code>catch()</code>方法返回一个<code>Promise</code>，并且处理拒绝的情况。它的行为与调用<code>Promise.prototype.then(undefined, onRejected)</code>相同。 (事实上, calling <code>obj.catch(onRejected)</code>内部 calls <code>obj.then(undefined, onRejected))</code>。</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h3><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222;"><pre class="shiki shiki-themes slack-ochin slack-dark vp-code"><code><span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">p</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">catch</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">onRejected</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#2F86D2;--shiki-dark:#9CDCFE;">p</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">.</span><span style="--shiki-light:#7EB233;--shiki-dark:#DCDCAA;">catch</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">(</span><span style="--shiki-light:#0991B6;--shiki-dark:#569CD6;">function</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;"> (</span><span style="--shiki-light:#B1108E;--shiki-dark:#9CDCFE;">reason</span><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">) {</span></span>
<span class="line"><span style="--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">  // 拒绝</span></span>
<span class="line"><span style="--shiki-light:#002339;--shiki-dark:#E6E6E6;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h3><ul><li><p>onRejected<br> 当 Promise 被 rejected 时,被调用的一个 Function。 该函数拥有一个参数：</p><p><code>reason</code> rejection 的原因。</p><p>如果<code>onRejected</code>抛出一个错误或返回一个本身失败的 Promise ， 通过<code>catch()</code>返回的 Promise 被 rejected；否则，它将显示为成功（resolved）。</p></li></ul><h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h3><p>一个<code>Promise</code></p><h2 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve"><span><code>Promise.resolve()</code></span></a></h2><p><code>Promise.resolve(value)</code>方法返回一个以给定值解析后的<code>Promise</code>对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是 thenable（即带有<code>then</code>方法），返回的 promise 会&quot;跟随&quot;这个 thenable 的对象，采用它的最终状态；否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平。</p><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h3><p><code>Promise.resolve(value)</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2"><span>参数</span></a></h3><p><code>value</code>：将被 Promise 对象解析的参数，也可以是一个 Promise 对象，或者是一个 thenable。</p><h3 id="返回值-2" tabindex="-1"><a class="header-anchor" href="#返回值-2"><span>返回值</span></a></h3><p>返回一个带着给定值解析过的 Promise 对象，如果参数本身就是一个 Promise 对象，则直接返回这个 Promise 对象。</p><h2 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject"><span><code>Promise.reject()</code></span></a></h2><p><code>Promise.reject()</code>方法返回一个带有拒绝原因的 Promise 对象。</p><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h3><p><code>Promise.reject(reason)</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3"><span>参数</span></a></h3><p><code>reason</code>：表示 Promise 被拒绝的原因。</p><h3 id="返回值-3" tabindex="-1"><a class="header-anchor" href="#返回值-3"><span>返回值</span></a></h3><p>一个给定原因了的被拒绝的 Promise。</p><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all"><span><code>Promise.all()</code></span></a></h2><p><code>Promise.all()</code>方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个<code>Promise</code>实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个<code>Promise</code>的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行是，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且 reject 的是第一个抛出的错误信息。</p><h3 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4"><span>语法</span></a></h3><p><code>Promise.all(iterable)</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4"><span>参数</span></a></h3><p><code>iterable</code>：一个可迭代对象，如 Array 或 String。</p><h3 id="返回值-4" tabindex="-1"><a class="header-anchor" href="#返回值-4"><span>返回值</span></a></h3><ul><li>如果传入的参数是一个空的可迭代对象，则返回一个<strong>已完成（already resolved</strong>状态的<code>Promise</code>。</li><li>如果传入的参数不包含任何<code>promise</code>，则返回一个<strong>异步完成（asynchronously resolved）</strong> Promise。注意：Google Chrome 58 在这种情况下返回一个**已完成（already resolved）**状态的 Promise。</li><li>其它情况下返回一个<strong>处理中（pending）<strong>的<code>Promise</code>。这个返回的<code>promise</code>之后会在所有的 promise 都完成或有一个 promise 失败时</strong>异步</strong>地变为完成或失败。 见下方关于&quot;Promise.all 的异步或同步&quot;示例。返回值将会按照参数内的<code>promise</code>顺序排列，而不是由调用 <code>promise</code> 的完成顺序决定。</li></ul>`,53),h=[t];function p(r,k){return e(),s("div",null,h)}const c=i(l,[["render",p],["__file","Promise.html.vue"]]),E=JSON.parse(`{"path":"/docs/note/front-end/ES6/Promise.html","title":"Promise","lang":"zh-CN","frontmatter":{"title":"Promise","date":"2021-08-27T00:00:00.000Z","description":"以前在前端开发时会有一种情况：一个请求需要依赖另一个请求，如此循环嵌套，就形成了网络请求的回调地狱。 上面的代码虽然有点夸张，但是确实反应了那个时代的真实。这样的代码虽然说一般情况下不会出现问题，但是一旦出问题，排查问题的难度比较高，不好定位，而且这样的代码不仅难看还不容易维护，需要使用一种更加优雅的方式来进行这种异步操作。 什么是 Promise E...","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/front-end/ES6/Promise.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Promise"}],["meta",{"property":"og:description","content":"以前在前端开发时会有一种情况：一个请求需要依赖另一个请求，如此循环嵌套，就形成了网络请求的回调地狱。 上面的代码虽然有点夸张，但是确实反应了那个时代的真实。这样的代码虽然说一般情况下不会出现问题，但是一旦出问题，排查问题的难度比较高，不好定位，而且这样的代码不仅难看还不容易维护，需要使用一种更加优雅的方式来进行这种异步操作。 什么是 Promise E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blog.white233.top/assets/note/es6/promise.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-07T09:12:43.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2021-08-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-07T09:12:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Promise\\",\\"image\\":[\\"https://blog.white233.top/assets/note/es6/promise.png\\"],\\"datePublished\\":\\"2021-08-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-07T09:12:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"什么是 Promise","slug":"什么是-promise","link":"#什么是-promise","children":[]},{"level":2,"title":"Promise.prototype.then()","slug":"promise-prototype-then","link":"#promise-prototype-then","children":[{"level":3,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]}]},{"level":2,"title":"Promise.prototype.catch()","slug":"promise-prototype-catch","link":"#promise-prototype-catch","children":[{"level":3,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]},{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回值","slug":"返回值-1","link":"#返回值-1","children":[]}]},{"level":2,"title":"Promise.resolve()","slug":"promise-resolve","link":"#promise-resolve","children":[{"level":3,"title":"语法","slug":"语法-2","link":"#语法-2","children":[]},{"level":3,"title":"参数","slug":"参数-2","link":"#参数-2","children":[]},{"level":3,"title":"返回值","slug":"返回值-2","link":"#返回值-2","children":[]}]},{"level":2,"title":"Promise.reject()","slug":"promise-reject","link":"#promise-reject","children":[{"level":3,"title":"语法","slug":"语法-3","link":"#语法-3","children":[]},{"level":3,"title":"参数","slug":"参数-3","link":"#参数-3","children":[]},{"level":3,"title":"返回值","slug":"返回值-3","link":"#返回值-3","children":[]}]},{"level":2,"title":"Promise.all()","slug":"promise-all","link":"#promise-all","children":[{"level":3,"title":"语法","slug":"语法-4","link":"#语法-4","children":[]},{"level":3,"title":"参数","slug":"参数-4","link":"#参数-4","children":[]},{"level":3,"title":"返回值","slug":"返回值-4","link":"#返回值-4","children":[]}]}],"git":{"createdTime":1664012965000,"updatedTime":1717751563000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":2}]},"readingTime":{"minutes":6.44,"words":1932},"filePathRelative":"docs/note/front-end/ES6/Promise.md","localizedDate":"2021年8月27日","excerpt":"<p>以前在前端开发时会有一种情况：一个请求需要依赖另一个请求，如此循环嵌套，就形成了网络请求的回调地狱。</p>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6;--shiki-light-bg:#FFF;--shiki-dark-bg:#222222\\"><pre class=\\"shiki shiki-themes slack-ochin slack-dark vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#2F86D2;--shiki-dark:#9CDCFE\\">$</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">.</span><span style=\\"--shiki-light:#7EB233;--shiki-dark:#DCDCAA\\">ajax</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">(</span><span style=\\"--shiki-light:#A44185;--shiki-dark:#CE9178\\">'url1'</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">, </span><span style=\\"--shiki-light:#0991B6;--shiki-dark:#569CD6\\">function</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\"> (</span><span style=\\"--shiki-light:#B1108E;--shiki-dark:#9CDCFE\\">data1</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit\\">  // 一些逻辑处理 ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#2F86D2;--shiki-dark:#9CDCFE\\">  $</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">.</span><span style=\\"--shiki-light:#7EB233;--shiki-dark:#DCDCAA\\">ajax</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">(</span><span style=\\"--shiki-light:#A44185;--shiki-dark:#CE9178\\">'url2'</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">, </span><span style=\\"--shiki-light:#0991B6;--shiki-dark:#569CD6\\">function</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\"> (</span><span style=\\"--shiki-light:#B1108E;--shiki-dark:#9CDCFE\\">data2</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit\\">    // 一些逻辑处理 ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#2F86D2;--shiki-dark:#9CDCFE\\">    $</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">.</span><span style=\\"--shiki-light:#7EB233;--shiki-dark:#DCDCAA\\">ajax</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">(</span><span style=\\"--shiki-light:#A44185;--shiki-dark:#CE9178\\">'url3'</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">, </span><span style=\\"--shiki-light:#0991B6;--shiki-dark:#569CD6\\">function</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\"> (</span><span style=\\"--shiki-light:#B1108E;--shiki-dark:#9CDCFE\\">data3</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit\\">      // 一些逻辑处理 ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#2F86D2;--shiki-dark:#9CDCFE\\">      $</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">.</span><span style=\\"--shiki-light:#7EB233;--shiki-dark:#DCDCAA\\">ajax</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">(</span><span style=\\"--shiki-light:#A44185;--shiki-dark:#CE9178\\">'url4'</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">, </span><span style=\\"--shiki-light:#0991B6;--shiki-dark:#569CD6\\">function</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\"> (</span><span style=\\"--shiki-light:#B1108E;--shiki-dark:#9CDCFE\\">data4</span><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">) {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#357B42;--shiki-dark:#6A9955;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit\\">        // 一些逻辑处理 ...</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">      });</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">    });</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">  });</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#002339;--shiki-dark:#E6E6E6\\">});</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,E as data};
