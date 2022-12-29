import{_ as e,$ as i,a0 as l,a6 as d}from"./framework-2884e278.js";const n={},c=d(`<hr><p>沟通渠道公式：<code>M=n*(n-1)/2</code>。M 表示沟通渠道数，n 表示项目组中的成员数。</p><hr><p>函数调用时的基本参数传递方式有<code>传值（传值调用）</code>与<code>传址（引用调用）</code>两种。</p><ul><li>在传值方式下是将实参的值传递给形参，因此实参可以是表达式或常量，也可以是变量。信息传递是单向的。</li><li>在传址方式下是将实参的地址传递给形参，因此实参必须是变量而不能是表达式。信息传递是双向的。</li></ul><hr><p><code>编译</code>和<code>解释</code>方式是翻译高级程序语言的两种基本方式。</p><ul><li>解释程序也称为解释器，它直接解释执行源程序或者将源程序翻译成某种中间表示形式后再执行。在这种方式下，解释程序和源程序(或某种等价表示)要参与程序的运行过程中，其控制权在解释器。</li><li>编译程序(编译器)首先将源代码翻译成目标语言程序，然后执行。在这种方式下，机器上运行的是与源程序等价的目标程序，源程序和编译程序都不再参与目标程序的执行过程。 <ul><li>编译器对高级语言源程序的处理过程可以划分为<code>词法分析</code>（输出记号流）、<code>语法分析</code>（输入记号流，构造分析树）、<code>语义分析</code>、<code>中间代码生成</code>、<code>代码优化</code>、<code>目标代码</code>，其中中间代码生成和代码优化不是必需的。 <ol><li>词法分析：依据语言的词法规则对源程序进行逐个字符地扫描，主要针对词汇的检查</li><li>语法分析：根据语言的语法规则将单词符号序列分解成各类语法单元（如&#39;表达式&#39;、&#39;语句&#39;和&#39;程序&#39;等），主要针对结构的检查</li><li>语义分析：分析程序中各种语法结构的含义，检查源程序是否包含语义错误，主要针对句子含义的检查</li><li>目标代码：把中间代码变换成特定机器上的绝对指令代码、可重定位的指令代码或汇编指令代码，这个阶段与具体的机器密切相关。在此阶段分配寄存器</li></ol></li></ul></li></ul><p>解释器翻译源程序不产生独立的目标程序，而编译器则需要将源程序翻译成独立的目标程序。</p><p>编译过程中为变量分配存储单元所用的地址是逻辑地址，程序运行时在映射为物理地址。</p><p>编译是将高级语言源程序翻译成机器语言程序（汇编形式或机器码形式），反编译是编译的逆过程。反编译通常不能把可执行文件还原成高级语言源代码，只能转换成功能上等价的汇编程序。</p><p>编译还需要进行出错处理和符号表管理。符号表的作用是记录源程序中各个符号的必要信息，以辅助语义的正确性检查和代码生成，在编译过程中需要对符号表进行快速有效地査找、插入、修改和删除等操作符号表的建立可以始于词法分析阶段，也可以放到语法分析和语义分析阶段，但符号表的使用有时会延续到目标代码的运行阶段。</p><ul><li>源程序不可避免的会有一些错误，大致可以分为两类：语法错误、语义错误。 <ol><li>语法错误：如单词拼写错误、标点符号错、表达式缺失操作数、括号不匹配等</li><li>语义错误：编译时发现的语义错误称为静态语义错误，运行时陷入死循环属于动态语义错误。</li></ol></li></ul><p>语法分析方法分为两类：自上而下（自顶向下）和自下而上（自底向上），递归下降分析法和预测分析法属于自上而下分析法，移进-归约分析法属于自下而上分析法。</p><hr><p>程序设计语言的基本成分包括数据、运算、控制、和传输等设计程序语言的一般概念。其中控制成分包括<code>顺序</code>、<code>选择</code>、<code>循环</code>3 种结构。</p><p>高级程序设计语言不依赖具体的机器硬件。程序设计语言分为高级语言和低级语言，是指其相对于运行程序的机器的抽象程度。低级语言在形式上更接近机器指令（汇编就是机器指令），高级语言对底层操作进行了抽象和封装，使编写程序的过程更符合人类的思维，简化了人力劳动。</p><hr><p>脚本语言又被称为扩建的语言，或者动态语言，是为了缩短传统的编写-编译-链接-运行（edit-compile-link-run）过程而创建的计算机编程语言，用来控制软件应用程序。脚本通常以文本（如 ASCII）保存，只在被调用时进行解释或编译。与编程语言之间最大的区别就是编程语言的语法和规则更为严格和复杂一些。脚本语言通常用于描述格式化和链接，效率不如编译型语言。</p><p>LISP 是一种通用高级计算机程序语言，长期以来垄断人工智能领域的应用。LISP 作为因应人工智能而设计的语言，是第一个声明式系内函数式程序设计语言，有别于命令式系内过程式的 C、Fortran 和面向对象的 Java、C#等结构化程序设计语言。</p><hr><p>中间代码是一种简单且含义明确的记号系统，与具体的机器无关，可以有若干种形式。可以将不同的高级程序语言翻译成同一种中间代码。由于与具体机器无关，使用<code>中间代码有利于进行与机器无关的优化处理</code>，以及提高编译程序的可移植性。</p><p>中间代码是源程序的一种内部表示，或称中间语言。中间代码的作用是可使编译程序的结构在逻辑上更为简单明确，常见的有<code>逆波兰记号（后缀式）、四元式（三地址码）、三元式和树</code>。</p><hr><p>一种程序设计语言规定器程序中的数据必须具有类型：</p><ol><li>有利于在翻译程序的过程中为数据合理分配存储单元</li><li>有利于对参与表达式计算的数据对象进行检查</li><li>有利于规定数据对象的取值范围及能够进行的运算</li></ol><hr><p>程序运行时的用户内存空间一般划分为<code>代码区</code>、<code>静态数据区</code>、<code>栈区</code>和<code>堆区</code>，其中栈区和堆区也称为<code>动态数据区</code>。全局变量的存储控件在静态数据区。</p><hr><p>运行时结合是动态绑定，编译时结合是静态绑定。</p><hr><p>有限自动机是一种识别装置的抽象概念，它能准确的识别正规集。有限自动机分为两类：确定的有限自动机和不确定的有限自动机。非确定有限状态自动机与确定有限状态自动机的最大区别是它们的转移函数不同。确定有限自动机对每一个可能的输入只有一个状态的转移。非确定有限自动机对每一个可能的输入可以有多个状态转移。</p><hr><p>文法分为四种类型，即 0 型、1 型、2 型、3 型。</p><ul><li>0 型文法也称为短语文法，其能力相当于图灵机，任何 0 型文法都是递归可枚举的；反之，递归可枚举集也必定是一个 0 型语言</li><li>1 型文法也称<code>上下文有关文法</code>，这种文法意味着对非终结符的替换必须考虑上下文</li><li>2 型文法就是<code>上下文无关文法</code>，非终结符替换无需考虑上下文。是形式语言理论中一种重要的变换文法，用来描述上下文无关语言。<strong>通用程序设计语言基本上都是上下文无关文法</strong>。</li><li>3 型文法等价于正规式，因此也被称为正规文法或线性文法。</li></ul><hr><p>面向机器的程序设计语言，使用汇编语言编写的程序，机器不能直接识别，要由一种程序将汇编语言翻译成机器语言，这种起翻译作用的程序叫汇编程序。汇编程序输入的是用汇编语言书写的源程序，输出的是用机器语言表示的目标程序。</p><hr><p>程序设计语言的语义分为静态语义和动态语义，其中静态语义分析方法是语法制导翻译，其基本思想是将语言结构的语义以属性的形式赋予代表其结构的文法符号，二属性的计算以语义规则的形式赋予文法的产生式。</p><hr><p>KMP 算法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>问题：在KMP模式匹配算法中，需要求解模式串p的next函数值，其定义如下(其中，j表示模式串中字符的序号（从1开始）)。若模式串p为&quot;abaab&quot;，则其next函数值为（）
            0          j = 1
  next[j] = max{k|1&lt;k&lt;j,&#39;P1P2...P(k-1)=P(j-k+1)P(j-k+2)...P(j-1)&#39;}
            1          其他情况

解答：
  P : a  b  a  a  b
  j : 1  2  3  4  5

next[j] :
  当 j=1 时，由公式可知，next[j]=0
  当 j=2 时，由于 1&lt;k&lt;j 中没有整数，所以 next[j]=1
  当 j=3 时，k=2，此时 &#39;P1&#39;=&#39;P2&#39; → a!=b, 所以 next[j]=1
  当 j=4 时，k=[2,3]，结果如下，所以 next[j]=2
    当 k=2 时，&#39;P1&#39;=&#39;P3&#39; → a=a
    当 k=3 时，&#39;P1P2&#39;=&#39;P2P3&#39; → ab!=ba
  当 j=5 时，k=[2,3,4]，结果如下，所以 next[j]=2
    当 k=2 时，&#39;P1&#39;=&#39;P4&#39; → a=a
    当 k=3 时，&#39;P1P2&#39;=&#39;P3P4&#39; → ab!=aa
    当 k=4 时，&#39;P1P2P3&#39;=&#39;P2P3P4&#39; → aba!=baa

所以 next[j] = 0 1 1 2 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),o=[c];function a(s,r){return i(),l("div",null,o)}const v=e(n,[["render",a],["__file","program-language.html.vue"]]);export{v as default};
