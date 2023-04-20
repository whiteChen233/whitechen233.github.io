import{_ as n,X as s,Y as a,a3 as e}from"./framework-76301131.js";const p="/assets/note/uml/UML图例.png",l="/assets/note/uml/依赖关系的例子.png",c="/assets/note/uml/泛化关系的例子.png",i="/assets/note/uml/实现关系的例子.png",t="/assets/note/uml/关联关系的例子.png",o="/assets/note/uml/聚合关系的例子.png",d="/assets/note/uml/组合关系的例子.png",u={},r=e('<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>UML(Unified modeling language)<strong>统一建模语言</strong>，是一种用于软件系统分析和设计的语言工具。它用于帮助软件开发人员进行思考和记录思路的结果</p><p>UML 本身是一套浮好的规定，就像数学符号和化学符号一样，这些符号用于描述软件模型中的各个元素和它们之间的关系，比如类、接口、实现、泛化、依赖、组合、聚合等，如下图：</p><figure><img src="'+p+`" alt="UML图例" tabindex="0" loading="lazy"><figcaption>UML图例</figcaption></figure><p>使用 UML 来建模，常用的工具有 Rational Rose，也可以使用一些插件来建模。</p><h2 id="uml-图分类" tabindex="-1"><a class="header-anchor" href="#uml-图分类" aria-hidden="true">#</a> UML 图分类</h2><ul><li>用例图</li><li>静态结构图 <ul><li>类图</li><li>对象图</li><li>包图</li><li>组件图</li><li>部署图</li></ul></li><li>动态行为图 <ul><li>交互图（时序图与协作图）</li><li>状态图</li><li>活动图</li></ul></li></ul><h2 id="类图" tabindex="-1"><a class="header-anchor" href="#类图" aria-hidden="true">#</a> 类图</h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1" aria-hidden="true">#</a> 定义</h3><p>用于描述系统中的类（对象）本身的组成和类（对象）之间的各种静态关系。</p><blockquote><p>类图描述的是类与类之间的关系，是 UML 图中最核心的</p></blockquote><h3 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h3><p>类之间的关系：依赖、泛化（继承）、实现、关联、聚合与组合</p><h4 id="依赖关系" tabindex="-1"><a class="header-anchor" href="#依赖关系" aria-hidden="true">#</a> 依赖关系</h4><p>只要是在类中用到了对方，那么类之间就存在依赖关系，如果没有对方，编译都通不过。</p><ul><li>类的成员变量</li><li>类的方法的返回值</li><li>类的方法的参数类型</li><li>类的方法中使用到的类型</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// PersonService.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonService</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">PersonDao</span> personDao<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        personDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">IdCard</span> <span class="token function">getIdCard</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> personId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> personDao<span class="token punctuation">.</span><span class="token function">getIdCardById</span><span class="token punctuation">(</span>personId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">modify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Department</span> department <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Department</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// PersonDao.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonDao</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Person.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// IdCard.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdCard</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Department.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Department</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+l+`" alt="依赖关系的例子" tabindex="0" loading="lazy"><figcaption>依赖关系的例子</figcaption></figure><h4 id="泛化关系" tabindex="-1"><a class="header-anchor" href="#泛化关系" aria-hidden="true">#</a> 泛化关系</h4><p>泛化关系实际上是继承关系，它是依赖关系的特例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// BaseDao.java</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseDao</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token class-name">Object</span> entity<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// PersonDao.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonDao</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDao</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+c+`" alt="泛化关系的例子" tabindex="0" loading="lazy"><figcaption>泛化关系的例子</figcaption></figure><h4 id="实现关系" tabindex="-1"><a class="header-anchor" href="#实现关系" aria-hidden="true">#</a> 实现关系</h4><p>实现关系也是依赖关系的特例</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// PersonService.java</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PersonService</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// PersonServiceImpl.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PersonService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+i+`" alt="实现关系的例子" tabindex="0" loading="lazy"><figcaption>实现关系的例子</figcaption></figure><h4 id="关联关系" tabindex="-1"><a class="header-anchor" href="#关联关系" aria-hidden="true">#</a> 关联关系</h4><p>关联关系实际上是类与类之间的联系，它是依赖关系的特例</p><p>关联具有<strong>导航性</strong>：即双向关系或单向关系。而关系具有多重性：</p><ul><li><code>1</code> 表示有且仅有一个</li><li><code>0...</code> 表示 0 个或多个</li><li><code>0,1</code> 表示 0 个或一个</li><li><code>n,m</code> 表示 n 到 m 个都可以</li><li><code>m...</code> 表示至少 m 个</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 单向一对一关系</span>

<span class="token comment">// Person.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IdCard</span> idCard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// IdCard.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdCard</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 双向一对一关系</span>

<span class="token comment">// Person.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">IdCard</span> idCard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// IdCard.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdCard</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Person</span> person<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+t+`" alt="关联关系的例子" tabindex="0" loading="lazy"><figcaption>关联关系的例子</figcaption></figure><h4 id="聚合关系" tabindex="-1"><a class="header-anchor" href="#聚合关系" aria-hidden="true">#</a> 聚合关系</h4><p>聚合关系表示的是整体与部分的关系，<strong>整体与部分可以分开</strong>。聚合关系是关联关系的特例，所以它具有关联的导航性与多重性。</p><p>eg：一台电脑由键盘、显示器、鼠标等组成；组成电脑的各个配件是可以从电脑上分离出来的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Computer.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Mouse</span> mouse<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Keyboard</span> keyboard<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMouse</span><span class="token punctuation">(</span><span class="token class-name">Mouse</span> mouse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>mouse <span class="token operator">=</span> mouse<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token class-name">Keyboard</span> keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard <span class="token operator">=</span> keyboard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Mouse.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Mouse</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Keyboard.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Keyboard</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+o+`" alt="聚合关系的例子" tabindex="0" loading="lazy"><figcaption>聚合关系的例子</figcaption></figure><h4 id="组合关系" tabindex="-1"><a class="header-anchor" href="#组合关系" aria-hidden="true">#</a> 组合关系</h4><p>组合也是整体与部分的关系，但是<strong>整体与部分不可分开</strong>。</p><p>eg：电脑由 Cpu、硬盘、内存组成，没有这些电脑是不能开机的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Computer.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Cpu</span> cpu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Disk</span> disk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Disk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Cpu.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Cpu</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// Disk.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Disk</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的类关系如下图所示：</p><figure><img src="`+d+`" alt="组合关系的例子" tabindex="0" loading="lazy"><figcaption>组合关系的例子</figcaption></figure><p>举一个栗子：人和脑袋、身份证的关系：人不能没有脑袋，所以脑袋和人是组合关系；人可以没有身份证，所以人和身份证是聚合关系。但是在开发中，删除一个 Person 的时候，一般会同时删除 IdCard（级联删除），这个时候，IdCard 和 Person 就是组合关系了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// Person.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Head</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">IdCard</span> idCard<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Head.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Head</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// IdCard.java</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IdCard</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),k=[r];function v(m,b){return s(),a("div",null,k)}const y=n(u,[["render",v],["__file","UML.html.vue"]]);export{y as default};
