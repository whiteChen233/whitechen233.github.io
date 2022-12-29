import{_ as n,$ as s,a0 as a,a6 as e}from"./framework-2884e278.js";const o="/assets/es6/promise.png",t={},p=e(`<p>以前在前端开发时会有一种情况：一个请求需要依赖另一个请求，如此循环嵌套，就形成了网络请求的回调地狱。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;url1&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 一些逻辑处理 ...</span>
  $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;url2&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 一些逻辑处理 ...</span>
    $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;url3&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 一些逻辑处理 ...</span>
      $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token string">&quot;url4&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 一些逻辑处理 ...</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码虽然有点夸张，但是确实反应了那个时代的<code>真实</code>。这样的代码虽然说一般情况下不会出现问题，但是一旦出问题，排查问题的难度比较高，不好定位，而且这样的代码不仅难看还不容易维护，需要使用一种更加优雅的方式来进行这种异步操作。</p><h2 id="什么是-promise" tabindex="-1"><a class="header-anchor" href="#什么是-promise" aria-hidden="true">#</a> 什么是 Promise</h2><p>ES6 中一个非常重要的和好用的特性就是 Promise。</p><p><strong>Promise 是异步编程的一种解决方案</strong>。它用于表示一个异步操作的最终完成(或失败)及其结果值。</p><p>一个<code>Promise</code>对象代表一个在这个 promise 被创建出来时不一定已知的值。它让您能够把异步操作最终的成功返回值或者失败原因和相应的处理程序关联起来。 这样使得异步方法可以像同步方法那样返回值：异步方法并不会立即返回最终的值，而是会返回一个 promise，以便在未来某个时候把值交给使用者。</p><p>一个 Promise 必然处于以下几种状态之一：</p><ul><li><strong><em>待定（pending）</em></strong>: 初始状态，既没有被兑现，也没有被拒绝。</li><li><strong><em>已兑现（fulfilled）</em></strong>: 意味着操作成功完成。</li><li><strong><em>已拒绝（rejected）</em></strong>: 意味着操作失败。</li></ul><p>待定状态的 Promise 对象要么会通过一个值被兑现（fulfilled），要么会通过一个原因（错误）被拒绝（rejected）。当这些情况之一发生时，我们用 promise 的 then 方法排列起来的相关处理程序就会被调用。如果 promise 在一个相应的处理程序被绑定时就已经被兑现或被拒绝了，那么这个处理程序就会被调用，因此在完成异步操作和绑定处理方法之间不会存在竞争状态。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 成功的时候调用 resolve</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 失败的时候调用 reject</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里处理 resolve 传过来的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里处理 reject 传过来的数据</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt="Promise" loading="lazy"></p><h2 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then" aria-hidden="true">#</a> <code>Promise.prototype.then()</code></h2><p><code>then()</code> 方法返回一个<code>Promise</code>。它最多需要有两个参数<code>Promise</code>的成功和失败情况的回调函数。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onFulfilled<span class="token punctuation">[</span><span class="token punctuation">,</span> onRejected<span class="token punctuation">]</span><span class="token punctuation">)</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// fulfillment</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token parameter">reason</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// rejection</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><ul><li><p><code>onFulfilled</code>可选</p><p>当 Promise 变成接受状态（fulfilled）时调用的函数。该函数有一个参数，即接受的最终结果（the fulfillment value）。如果该参数不是函数，则会在内部被替换为 (x) =&gt; x，即原样返回 promise 最终结果的函数</p></li><li><p><code>onRejected</code>可选</p><p>当 Promise 变成拒绝状态（rejected）时调用的函数。该函数有一个参数，即拒绝的原因（rejection reason）。 如果该参数不是函数，则会在内部被替换为一个 &quot;Thrower&quot; 函数 (it throws an error it received as argument)。</p></li></ul><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值" aria-hidden="true">#</a> 返回值</h3><p>当一个<code>Promise</code>完成（fulfilled）或者失败（rejected）时，返回函数将被异步调用（由当前的线程循环来调度完成）。具体的返回值依据以下规则返回。如果 then 中的回调函数：</p><ul><li>返回了一个值，那么 then 返回的 Promise 将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。</li><li>没有返回任何值，那么 then 返回的 Promise 将会成为接受状态，并且该接受状态的回调函数的参数值为 undefined。</li><li>抛出一个错误，那么 then 返回的 Promise 将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。</li><li>返回一个已经是接受状态的 Promise，那么 then 返回的 Promise 也会成为接受状态，并且将那个 Promise 的接受状态的回调函数的参数值作为该被返回的 Promise 的接受状态回调函数的参数值。</li><li>返回一个已经是拒绝状态的 Promise，那么 then 返回的 Promise 也会成为拒绝状态，并且将那个 Promise 的拒绝状态的回调函数的参数值作为该被返回的 Promise 的拒绝状态回调函数的参数值。</li><li>返回一个未定状态（pending）的 Promise，那么 then 返回 Promise 的状态也是未定的，并且它的终态与那个 Promise 的终态相同；同时，它变为终态时调用的回调函数参数与那个 Promise 变为终态时的回调函数的参数是相同的。</li></ul><h2 id="promise-prototype-catch" tabindex="-1"><a class="header-anchor" href="#promise-prototype-catch" aria-hidden="true">#</a> <code>Promise.prototype.catch()</code></h2><p><code>catch()</code>方法返回一个<code>Promise</code>，并且处理拒绝的情况。它的行为与调用<code>Promise.prototype.then(undefined, onRejected)</code>相同。 (事实上, calling <code>obj.catch(onRejected)</code>内部 calls <code>obj.then(undefined, onRejected))</code>。</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 拒绝</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3><ul><li><p>onRejected 当 Promise 被 rejected 时,被调用的一个 Function。 该函数拥有一个参数：</p><p><code>reason</code> rejection 的原因。</p><p>如果<code>onRejected</code>抛出一个错误或返回一个本身失败的 Promise ， 通过<code>catch()</code>返回的 Promise 被 rejected；否则，它将显示为成功（resolved）。</p></li></ul><h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1" aria-hidden="true">#</a> 返回值</h3><p>一个<code>Promise</code></p><h2 id="promise-resolve" tabindex="-1"><a class="header-anchor" href="#promise-resolve" aria-hidden="true">#</a> <code>Promise.resolve()</code></h2><p><code>Promise.resolve(value)</code>方法返回一个以给定值解析后的<code>Promise</code>对象。如果这个值是一个 promise ，那么将返回这个 promise ；如果这个值是 thenable（即带有<code>then</code>方法），返回的 promise 会&quot;跟随&quot;这个 thenable 的对象，采用它的最终状态；否则返回的 promise 将以此值完成。此函数将类 promise 对象的多层嵌套展平。</p><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><p><code>Promise.resolve(value)</code></p><h3 id="参数-2" tabindex="-1"><a class="header-anchor" href="#参数-2" aria-hidden="true">#</a> 参数</h3><p><code>value</code>：将被 Promise 对象解析的参数，也可以是一个 Promise 对象，或者是一个 thenable。</p><h3 id="返回值-2" tabindex="-1"><a class="header-anchor" href="#返回值-2" aria-hidden="true">#</a> 返回值</h3><p>返回一个带着给定值解析过的 Promise 对象，如果参数本身就是一个 Promise 对象，则直接返回这个 Promise 对象。</p><h2 id="promise-reject" tabindex="-1"><a class="header-anchor" href="#promise-reject" aria-hidden="true">#</a> <code>Promise.reject()</code></h2><p><code>Promise.reject()</code>方法返回一个带有拒绝原因的 Promise 对象。</p><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3><p><code>Promise.reject(reason)</code></p><h3 id="参数-3" tabindex="-1"><a class="header-anchor" href="#参数-3" aria-hidden="true">#</a> 参数</h3><p><code>reason</code>：表示 Promise 被拒绝的原因。</p><h3 id="返回值-3" tabindex="-1"><a class="header-anchor" href="#返回值-3" aria-hidden="true">#</a> 返回值</h3><p>一个给定原因了的被拒绝的 Promise。</p><h2 id="promise-all" tabindex="-1"><a class="header-anchor" href="#promise-all" aria-hidden="true">#</a> <code>Promise.all()</code></h2><p><code>Promise.all()</code>方法接收一个 promise 的 iterable 类型（注：Array，Map，Set 都属于 ES6 的 iterable 类型）的输入，并且只返回一个<code>Promise</code>实例， 那个输入的所有 promise 的 resolve 回调的结果是一个数组。这个<code>Promise</code>的 resolve 回调执行是在所有输入的 promise 的 resolve 回调都结束，或者输入的 iterable 里没有 promise 了的时候。它的 reject 回调执行是，只要任何一个输入的 promise 的 reject 回调执行或者输入不合法的 promise 就会立即抛出错误，并且 reject 的是第一个抛出的错误信息。</p><h3 id="语法-4" tabindex="-1"><a class="header-anchor" href="#语法-4" aria-hidden="true">#</a> 语法</h3><p><code>Promise.all(iterable)</code></p><h3 id="参数-4" tabindex="-1"><a class="header-anchor" href="#参数-4" aria-hidden="true">#</a> 参数</h3><p><code>iterable</code>：一个可迭代对象，如 Array 或 String。</p><h3 id="返回值-4" tabindex="-1"><a class="header-anchor" href="#返回值-4" aria-hidden="true">#</a> 返回值</h3><ul><li>如果传入的参数是一个空的可迭代对象，则返回一个<strong>已完成（already resolved</strong>状态的<code>Promise</code>。</li><li>如果传入的参数不包含任何<code>promise</code>，则返回一个<strong>异步完成（asynchronously resolved）</strong> Promise。注意：Google Chrome 58 在这种情况下返回一个**已完成（already resolved）**状态的 Promise。</li><li>其它情况下返回一个<strong>处理中（pending）<strong>的<code>Promise</code>。这个返回的<code>promise</code>之后会在所有的 promise 都完成或有一个 promise 失败时</strong>异步</strong>地变为完成或失败。 见下方关于&quot;Promise.all 的异步或同步&quot;示例。返回值将会按照参数内的<code>promise</code>顺序排列，而不是由调用 <code>promise</code> 的完成顺序决定。</li></ul>`,53),c=[p];function i(r,l){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","Promise.html.vue"]]);export{d as default};
