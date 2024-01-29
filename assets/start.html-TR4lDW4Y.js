import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as l,d as i}from"./app-b5nJVXcc.js";const e={},r=i(`<h2 id="上午题" tabindex="-1"><a class="header-anchor" href="#上午题"><span>上午题</span></a></h2><table><thead><tr><th>知识点</th><th>分数</th><th>说明</th><th>比例</th></tr></thead><tbody><tr><td>软件工程基础知识</td><td>13</td><td>开发模式、设计原则、测试方法、质量特性、CMM、Pert 图、风险管理</td><td>17.33%</td></tr><tr><td>面向对象</td><td>11</td><td>面向对象基本概念、面向对象分析与设计、UML、设计模式</td><td>14.67%</td></tr><tr><td>数据结构与算法</td><td>9</td><td>数组、栈、队列、树与二叉树、图、查找与排序、常见算法</td><td>12.00%</td></tr><tr><td>程序设计语言</td><td>6</td><td>文法、有限自动机、正规式、语句的作用、语句的语义、程序的控制结构、函数调用的参数传递、各种程序语言的特点比较</td><td>8.00%</td></tr><tr><td>计算机硬件基础</td><td>6</td><td>浮点数运算、溢出、算术、逻辑运算、计算机体系结构、指令系统基础、CISC 与 RISC、流水线、Cache 存储器可靠性分析、校验方法</td><td>8.00%</td></tr><tr><td>操作系统</td><td>6</td><td>进程状态转换图、信号量与 PV 操作、死锁问题、银行家算法、段页式存储、页面置换算法、磁盘调度、树形文件系统</td><td>8.00%</td></tr><tr><td>数据库系统</td><td>6</td><td>E-R 模型、关系代数、元组演算、规范化理论（键、范式、模式分解）、并发控制</td><td>8.00%</td></tr><tr><td>计算机网络</td><td>5</td><td>OSI 模型、TCP/IP 协议簇、子网划分、常用网络命令</td><td>6.67%</td></tr><tr><td>信息安全知识</td><td>5</td><td>加密解密技术、网络安全、计算机病毒</td><td>6.67%</td></tr><tr><td>知识产权与标准化</td><td>3</td><td>作品保护时间、侵权判断、知识产权归属、标准的分类、标准代号</td><td>4.00%</td></tr><tr><td>专业用语</td><td>5</td><td>专业英语填空</td><td>6.67%</td></tr></tbody></table><h2 id="下午题" tabindex="-1"><a class="header-anchor" href="#下午题"><span>下午题</span></a></h2><h3 id="考点分布" tabindex="-1"><a class="header-anchor" href="#考点分布"><span>考点分布</span></a></h3><table><thead><tr><th>题号</th><th>试题类型</th><th>学科知识</th><th>考查内容</th></tr></thead><tbody><tr><td>试题 1</td><td>必答</td><td>数据流图</td><td>给出相应名称（补充外部实体、补充数据存储、补充加工），补充数据流图的缺失部分（补充数据流），数据流图相关解答题</td></tr><tr><td>试题 2</td><td>必答</td><td>数据库设计</td><td>E-R 模型、关系模式、增加实体等</td></tr><tr><td>试题 3</td><td>必答</td><td>UML 建模</td><td>类图、用例图、活动图、状态图等</td></tr><tr><td>试题 4</td><td>必答</td><td>C 语言算法</td><td>分治法、贪心法、动态规划法、回溯法等</td></tr><tr><td>试题 5</td><td>选答</td><td>C++语言程序设计</td><td>C++、设计模式</td></tr><tr><td>试题 6</td><td>选答</td><td>Java 语言程序设计</td><td>Java、设计模式</td></tr></tbody></table><hr><h3 id="第一题-dfd-数据流图" tabindex="-1"><a class="header-anchor" href="#第一题-dfd-数据流图"><span>第一题：DFD 数据流图</span></a></h3><ul><li>外部实体：矩形。一般是人、物、系统。</li><li>数据存储：双横线或缺右边的矩形。一般是表、文件、记录、库、档案</li><li>数据流：带箭头的直线</li><li>数据加工：圆角矩形</li></ul><p>问题 1~3 比较固定，一问找外部实体，二问找数据存储，三问找缺失的数据流</p><ul><li>如何找实体：根据子图的与加工有关的数据流来确定实体</li><li>如何找数据存储：同上</li><li>如何找数据流： <ul><li>思路 <ol><li>父图子图平衡</li><li>加工既要有输入数据流也要有输出数据流</li><li>根据说明查找缺失数据流</li></ol></li><li>格式 <ul><li>数据流名称：xxxx 起点：D1 xxx 终点：E1 xxx</li></ul></li></ul></li></ul><p>问题 4：不定题型</p><ul><li><p>第一类：结构化语言 描述加工逻辑</p><ul><li><p>顺序语句</p></li><li><p>选择语句</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IF 条件 THEN
    分支内容
ELSE IF 条件 THEN
    分支内容
ELSE
    分支内容
ENDIF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>循环语句</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>WHILE 条件
DO
{
  顺序语句
  选择语句
}
ENDDO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>第二类：在绘制数据流图时，需要注意加工的绘制。给出三种在绘制加工时可能出现的错误。</p><ul><li>加工无输入数据流</li><li>加工无输出数据流</li><li>加工的输入数据流无法产生相应的输出数据流</li></ul></li><li><p>第三类：实体之间可否有数据流，并解释其原因。</p><ul><li>实体之间不能有数据流，因为数据流的起点或终点必须是加工。</li></ul></li></ul><hr><h3 id="第二题-e-r-图" tabindex="-1"><a class="header-anchor" href="#第二题-e-r-图"><span>第二题：E-R 图</span></a></h3><ul><li>实体：矩形</li><li>属性：椭圆</li><li>联系：菱形（无向边）</li></ul><p>识别实体与实体属性；实体之间的联系；实体的唯一标识。</p><p>题目一般是 3 问，有可能有 4 问，前面两问比较固定：</p><ul><li>第一问：补充 E-R 图；</li><li>第二问：补充关系模式缺失的属性；</li><li>第三问：主键、外键；</li><li>第四问：不合理的设计会有什么问题？数据冗余、更新异常、插入异常、删除异常</li></ul><hr><h3 id="第三题-uml-图" tabindex="-1"><a class="header-anchor" href="#第三题-uml-图"><span>第三题：UML 图</span></a></h3><p>题目一般是 3 问，第一问：用例图；第二问：类图；第三问：拓展\\扩展题</p><ul><li>用例图： <ul><li>图例： <ul><li>参与者：一个小人（人、物、外部系统）</li><li>用例：椭圆，里面填写用例名称</li></ul></li><li>用例与用例的关系： <ul><li>包含：由一个用例（包含用例）指向另一个用例（被包含用例）的<strong>虚线箭头</strong>，并标记<code>&lt;&lt;include&gt;&gt;</code>。简单的理解为做一件事之前需要先做另一件事。（必选）</li><li>扩展：由一个用例（扩展用例）指向另一个用例（被扩展用例）的<strong>虚线箭头</strong>，并标记<code>&lt;&lt;extend&gt;&gt;</code>。简单的理解为做了一件事之后可以（选）做另一件事。（可选、特殊）</li><li>泛化：由子（特殊）指向父（一般）的<strong>实线空心箭头</strong>，并标记<code>&lt;&lt;generalization&gt;&gt;</code>。比如<code>缴费（父），和线上缴费（子）、线下缴费（子）</code>。不单单指代用例之间的关系，也可以表示实体之间的关系。</li></ul></li></ul></li><li>类图： <ul><li>图例：矩形，由上至下二分为三，第一部分指类名，第二部分是属性，第三部分是方法。</li><li>描述词： <ul><li>+：public（公有的），能访问该类的类都能访问该属性或方法</li><li>-：private（私有的），只有该类自己能访问该属性或方法</li><li>#：protected（受保护的），该类及其继承类都能访问属性或方法</li><li>~：package（包），在同一个包中的类都能访问该属性或方法</li></ul></li><li>类与类之间的关系： <ul><li>依赖关系：由依赖的一方指向被依赖的一方的<strong>虚线箭头</strong></li><li>泛化关系：由子指向父的<strong>实线空心箭头</strong></li><li>关联关系：由部分指向整体的<strong>实线菱形箭头</strong><ul><li>聚合：<strong>空心菱形</strong>，部分不依赖于整体，整体消失，部分仍存活。</li><li>组合：<strong>实心菱形</strong>，部分依赖于整体。整体消失，部分不能存活。</li></ul></li><li>实现关系：由实现类指向接口类的<strong>虚线空心箭头</strong>，用<code>&lt;&lt;interface&gt;&gt;</code>标记。</li></ul></li></ul></li></ul><p>多重复</p><table><thead><tr><th>表示</th><th>含义</th></tr></thead><tbody><tr><td>1</td><td>表示一个对象对应另一个对象</td></tr><tr><td>*</td><td>表示一个对象对应 0 个或者多个对象</td></tr><tr><td>1..*</td><td>表示一个对象对应 1 个或多个对象</td></tr><tr><td>n..m</td><td>表示一个对象对应 n 个(至少)或 m 个(至多)对象</td></tr></tbody></table>`,24),a=[r];function n(s,c){return d(),l("div",null,a)}const h=t(e,[["render",n],["__file","start.html.vue"]]);export{h as default};
