const s=JSON.parse('{"key":"v-5cded6de","path":"/docs/note/QCCSTP/system-architect/system-configuration-and-performance-evaluation.html","title":"系统配置与性能评价","lang":"zh-CN","frontmatter":{"title":"系统配置与性能评价","date":"2022-09-26T00:00:00.000Z","description":"性能指标 字长和数据通路宽度 主存容量与存取速度 运算速度 主频与 CPU 时钟周期 CPI[1]与 IPC[2] MIPS[3]与 MFLOPS[4] MIPS=指令条数÷(执行时间×106)=主频÷CPI=主频×IPCMIPS=\\\\text{指令条数} \\\\div (\\\\text{执行时间} \\\\times 10^6)=\\\\text{主频} \\\\div CPI=\\\\text{主频} \\\\times IPCMIPS=指令条数÷(执行时间×106)=主频÷CPI=主频×IPC MFLOPS=浮点操作次数÷(执行时间×106)MFLOPS=\\\\text{浮点操作次数} \\\\div (\\\\text{执行时间} \\\\times 10^6)MFLOPS=浮点操作次数÷(执行时间×106) 吞吐量与吞吐率 响应时间（Response Time，RT） 完成时间（TAT） 兼容性","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/docs/note/QCCSTP/system-architect/system-configuration-and-performance-evaluation.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"系统配置与性能评价"}],["meta",{"property":"og:description","content":"性能指标 字长和数据通路宽度 主存容量与存取速度 运算速度 主频与 CPU 时钟周期 CPI[1]与 IPC[2] MIPS[3]与 MFLOPS[4] MIPS=指令条数÷(执行时间×106)=主频÷CPI=主频×IPCMIPS=\\\\text{指令条数} \\\\div (\\\\text{执行时间} \\\\times 10^6)=\\\\text{主频} \\\\div CPI=\\\\text{主频} \\\\times IPCMIPS=指令条数÷(执行时间×106)=主频÷CPI=主频×IPC MFLOPS=浮点操作次数÷(执行时间×106)MFLOPS=\\\\text{浮点操作次数} \\\\div (\\\\text{执行时间} \\\\times 10^6)MFLOPS=浮点操作次数÷(执行时间×106) 吞吐量与吞吐率 响应时间（Response Time，RT） 完成时间（TAT） 兼容性"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-21T02:14:43.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2022-09-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-21T02:14:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统配置与性能评价\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-26T00:00:00.000Z\\",\\"dateModified\\":\\"2023-09-21T02:14:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\",\\"email\\":\\"white996@qq.com\\"}]}"]]},"headers":[{"level":2,"title":"性能指标","slug":"性能指标","link":"#性能指标","children":[]},{"level":2,"title":"阿姆达尔解决方案","slug":"阿姆达尔解决方案","link":"#阿姆达尔解决方案","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]}]},{"level":2,"title":"性能评价方法","slug":"性能评价方法","link":"#性能评价方法","children":[]}],"git":{"createdTime":1695262483000,"updatedTime":1695262483000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":2.99,"words":896},"filePathRelative":"docs/note/QCCSTP/system-architect/system-configuration-and-performance-evaluation.md","localizedDate":"2022年9月26日","excerpt":"<h2> 性能指标</h2>\\n<ul>\\n<li>字长和数据通路宽度</li>\\n<li>主存容量与存取速度</li>\\n<li>运算速度\\n<ul>\\n<li>主频与 CPU 时钟周期</li>\\n<li>CPI<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">与 IPC<sup class=\\"footnote-ref\\"></sup></a><a href=\\"#footnote2\\">[2]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\"></a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">\\n</a><li><a class=\\"footnote-anchor\\" id=\\"footnote-ref2\\">MIPS<sup class=\\"footnote-ref\\"></sup></a><a href=\\"#footnote3\\">[3]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref3\\">与 MFLOPS<sup class=\\"footnote-ref\\"></sup></a><a href=\\"#footnote4\\">[4]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref4\\">\\n<ul>\\n<li><span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>M</mi><mi>I</mi><mi>P</mi><mi>S</mi><mo>=</mo><mtext>指令条数</mtext><mo>÷</mo><mo stretchy=\\"false\\">(</mo><mtext>执行时间</mtext><mo>×</mo><mn>1</mn><msup><mn>0</mn><mn>6</mn></msup><mo stretchy=\\"false\\">)</mo><mo>=</mo><mtext>主频</mtext><mo>÷</mo><mi>C</mi><mi>P</mi><mi>I</mi><mo>=</mo><mtext>主频</mtext><mo>×</mo><mi>I</mi><mi>P</mi><mi>C</mi></mrow><annotation encoding=\\"application/x-tex\\">MIPS=\\\\text{指令条数} \\\\div (\\\\text{执行时间} \\\\times 10^6)=\\\\text{主频} \\\\div CPI=\\\\text{主频} \\\\times IPC</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.10903em;\\">M</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">I</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">PS</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">指令条数</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">÷</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">执行时间</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mord\\"><span class=\\"mord\\">0</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">6</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">主频</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">÷</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">CP</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">I</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">主频</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07847em;\\">I</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">PC</span></span></span></span></li>\\n<li><span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>M</mi><mi>F</mi><mi>L</mi><mi>O</mi><mi>P</mi><mi>S</mi><mo>=</mo><mtext>浮点操作次数</mtext><mo>÷</mo><mo stretchy=\\"false\\">(</mo><mtext>执行时间</mtext><mo>×</mo><mn>1</mn><msup><mn>0</mn><mn>6</mn></msup><mo stretchy=\\"false\\">)</mo></mrow><annotation encoding=\\"application/x-tex\\">MFLOPS=\\\\text{浮点操作次数} \\\\div (\\\\text{执行时间} \\\\times 10^6)</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6833em;\\"></span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.13889em;\\">MF</span><span class=\\"mord mathnormal\\">L</span><span class=\\"mord mathnormal\\" style=\\"margin-right:0.05764em;\\">OPS</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span><span class=\\"mrel\\">=</span><span class=\\"mspace\\" style=\\"margin-right:0.2778em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.7667em;vertical-align:-0.0833em;\\"></span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">浮点操作次数</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">÷</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1em;vertical-align:-0.25em;\\"></span><span class=\\"mopen\\">(</span><span class=\\"mord text\\"><span class=\\"mord cjk_fallback\\">执行时间</span></span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span><span class=\\"mbin\\">×</span><span class=\\"mspace\\" style=\\"margin-right:0.2222em;\\"></span></span><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:1.0641em;vertical-align:-0.25em;\\"></span><span class=\\"mord\\">1</span><span class=\\"mord\\"><span class=\\"mord\\">0</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">6</span></span></span></span></span></span></span></span><span class=\\"mclose\\">)</span></span></span></span></li>\\n</ul>\\n</a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref4\\">\\n</a></ul><a class=\\"footnote-anchor\\" id=\\"footnote-ref4\\">\\n</a></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref4\\">\\n<li>吞吐量与吞吐率</li>\\n<li>响应时间（Response Time，RT）</li>\\n<li>完成时间（TAT）</li>\\n<li>兼容性</li>\\n</a></ul>","autoDesc":true}');export{s as data};
