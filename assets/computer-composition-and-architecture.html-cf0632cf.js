const e=JSON.parse('{"key":"v-76f84c97","path":"/zh/note/QCCSTP/system-architect/computer-composition-and-architecture.html","title":"计算机组成与体系结构","lang":"zh-CN","frontmatter":{"title":"计算机组成与体系结构","date":"2022-09-23T00:00:00.000Z","description":"计算机硬件组成 计算机组成-主机与外设 CPU 的主频、倍频、外频 主频即 CPU 的时钟频率，计算机的操作在时钟信号的控制下分步执行，每个时钟信号周期完成一步操作，时钟频率的高低在很大程度上反映了 CPU 速度的快慢 外频就是外部频率，指的是系统系统总线的频率 倍频的全程是倍频系数，倍频系数是 CPU 主频与外频之间的相对比例关系。它的作用是使系统总线工作在相对较低的频率上，而 CPU 可以通过倍频来提升 主频=外频×倍频","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/zh/note/QCCSTP/system-architect/computer-composition-and-architecture.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"计算机组成与体系结构"}],["meta",{"property":"og:description","content":"计算机硬件组成 计算机组成-主机与外设 CPU 的主频、倍频、外频 主频即 CPU 的时钟频率，计算机的操作在时钟信号的控制下分步执行，每个时钟信号周期完成一步操作，时钟频率的高低在很大程度上反映了 CPU 速度的快慢 外频就是外部频率，指的是系统系统总线的频率 倍频的全程是倍频系数，倍频系数是 CPU 主频与外频之间的相对比例关系。它的作用是使系统总线工作在相对较低的频率上，而 CPU 可以通过倍频来提升 主频=外频×倍频"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T10:06:00.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2022-09-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T10:06:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机组成与体系结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-23T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T10:06:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\"}]}"]]},"headers":[{"level":2,"title":"计算机硬件组成","slug":"计算机硬件组成","link":"#计算机硬件组成","children":[{"level":3,"title":"总线","slug":"总线","link":"#总线","children":[]}]},{"level":2,"title":"计算机体系结构","slug":"计算机体系结构","link":"#计算机体系结构","children":[{"level":3,"title":"Flynn 分类法","slug":"flynn-分类法","link":"#flynn-分类法","children":[]},{"level":3,"title":"CISC 与 RISC","slug":"cisc-与-risc","link":"#cisc-与-risc","children":[]},{"level":3,"title":"冯·若依曼结构与哈佛结构","slug":"冯·若依曼结构与哈佛结构","link":"#冯·若依曼结构与哈佛结构","children":[]}]},{"level":2,"title":"存储系统","slug":"存储系统","link":"#存储系统","children":[{"level":3,"title":"层次化存储结构","slug":"层次化存储结构","link":"#层次化存储结构","children":[]}]},{"level":2,"title":"流水线技术","slug":"流水线技术","link":"#流水线技术","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"流水线计算","slug":"流水线计算","link":"#流水线计算","children":[]}]},{"level":2,"title":"校验码","slug":"校验码","link":"#校验码","children":[{"level":3,"title":"奇偶校验","slug":"奇偶校验","link":"#奇偶校验","children":[]},{"level":3,"title":"循环冗余校验码","slug":"循环冗余校验码","link":"#循环冗余校验码","children":[]},{"level":3,"title":"海明校验码","slug":"海明校验码","link":"#海明校验码","children":[]}]},{"level":2,"title":"嵌入式系统","slug":"嵌入式系统","link":"#嵌入式系统","children":[{"level":3,"title":"芯片","slug":"芯片","link":"#芯片","children":[]},{"level":3,"title":"交叉开发环境","slug":"交叉开发环境","link":"#交叉开发环境","children":[]},{"level":3,"title":"初始化过程","slug":"初始化过程","link":"#初始化过程","children":[]}]}],"git":{"createdTime":1677143899000,"updatedTime":1678874760000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":3}]},"readingTime":{"minutes":15.46,"words":4639},"filePathRelative":"zh/note/QCCSTP/system-architect/computer-composition-and-architecture.md","localizedDate":"2022年9月23日","excerpt":"<h2> 计算机硬件组成</h2>\\n<figure><img src=\\"/assets/note/qccstp/计算机组成-主机与外设.png\\" alt=\\"计算机组成-主机与外设\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>计算机组成-主机与外设</figcaption></figure>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">CPU 的主频、倍频、外频</p>\\n<ul>\\n<li>主频即 CPU 的时钟频率，计算机的操作在时钟信号的控制下分步执行，每个时钟信号周期完成一步操作，时钟频率的高低在很大程度上反映了 CPU 速度的快慢</li>\\n<li>外频就是外部频率，指的是系统系统总线的频率</li>\\n<li>倍频的全程是倍频系数，倍频系数是 CPU 主频与外频之间的相对比例关系。它的作用是使系统总线工作在相对较低的频率上，而 CPU 可以通过倍频来提升</li>\\n</ul>\\n<p class=\\"katex-block\\"><span class=\\"katex-display\\"><span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">主频</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">外频</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">倍频</span></span></span></span></span></span></p>\\n</div>","autoDesc":true}');export{e as data};
