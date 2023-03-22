const e=JSON.parse('{"key":"v-61825315","path":"/zh/note/back-end/java/SPI.html","title":"Java SPI 机制","lang":"zh-CN","frontmatter":{"title":"Java SPI 机制","date":"2023-03-22T00:00:00.000Z","description":"SPI 是什么 面向的对象的设计里, 一般推荐模块之间基于接口编程, 模块之间不对实现类进行硬编码, 一旦代码里涉及具体的实现类, 就违反了可拔插的原则, 如果需要替换一种实现, 就需要修改代码. 为了实现在模块装配的时候不用在程序里动态指明, 这就需要一种服务发现机制 Java SPI 就是提供这样的一个机制: 为某个接口寻找服务实现的机制（这有点类似 IOC 的思想, 将装配的控制权移到了程序之外） SPI 的全称是 Services Provider Interface, 翻译过来就是 服务提供者接口, 它所实现的是一种服务的发现机制, 可以用来启用框架扩展和替换组件","head":[["meta",{"property":"og:url","content":"https://blog.white233.top/zh/note/back-end/java/SPI.html"}],["meta",{"property":"og:site_name","content":"温故而知新~"}],["meta",{"property":"og:title","content":"Java SPI 机制"}],["meta",{"property":"og:description","content":"SPI 是什么 面向的对象的设计里, 一般推荐模块之间基于接口编程, 模块之间不对实现类进行硬编码, 一旦代码里涉及具体的实现类, 就违反了可拔插的原则, 如果需要替换一种实现, 就需要修改代码. 为了实现在模块装配的时候不用在程序里动态指明, 这就需要一种服务发现机制 Java SPI 就是提供这样的一个机制: 为某个接口寻找服务实现的机制（这有点类似 IOC 的思想, 将装配的控制权移到了程序之外） SPI 的全称是 Services Provider Interface, 翻译过来就是 服务提供者接口, 它所实现的是一种服务的发现机制, 可以用来启用框架扩展和替换组件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-22T08:01:04.000Z"}],["meta",{"property":"article:author","content":"White"}],["meta",{"property":"article:published_time","content":"2023-03-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-22T08:01:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java SPI 机制\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-22T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-22T08:01:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"White\\",\\"url\\":\\"https://blog.white233.top\\"}]}"]]},"headers":[{"level":2,"title":"SPI 是什么","slug":"spi-是什么","link":"#spi-是什么","children":[{"level":3,"title":"与 API 的区别","slug":"与-api-的区别","link":"#与-api-的区别","children":[]},{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]}]},{"level":2,"title":"Java SPI 的缺点","slug":"java-spi-的缺点","link":"#java-spi-的缺点","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"createdTime":1679472064000,"updatedTime":1679472064000,"contributors":[{"name":"white","email":"294476387@qq.com","commits":1}]},"readingTime":{"minutes":4.02,"words":1206},"filePathRelative":"zh/note/back-end/java/SPI.md","localizedDate":"2023年3月22日","excerpt":"<h2> SPI 是什么</h2>\\n<p>面向的对象的设计里, 一般推荐模块之间基于接口编程, 模块之间不对实现类进行硬编码, 一旦代码里涉及具体的实现类, 就违反了可拔插的原则, 如果需要替换一种实现, 就需要修改代码. 为了实现在模块装配的时候不用在程序里动态指明, 这就需要一种服务发现机制</p>\\n<p>Java SPI 就是提供这样的一个机制: 为某个接口寻找服务实现的机制（这有点类似 IOC 的思想, 将装配的控制权移到了程序之外）</p>\\n<p>SPI 的全称是 Services Provider Interface, 翻译过来就是 <strong>服务提供者接口</strong>, 它所实现的是一种服务的发现机制, 可以用来启用框架扩展和替换组件</p>","autoDesc":true}');export{e as data};
