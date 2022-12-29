import{_ as l,$ as i,a0 as p,a6 as e}from"./framework-2884e278.js";const o={},t=e("<hr><p>数据库三级模式的<code>模式、内模式、外模式分别对应基本表（表级）、存储文件（文件级）、视图（视图级）</code>。</p><p>聚簇索引会将具体的物理存储改为顺序模式，所以属于内模式。</p><hr><p>数据库在三级模式之间提供了两级映像：模式/内模式映像、外模式/模式映像。正因为这两集映像保证了数据库中的数据具有较高的逻辑独立性和物理独立性。</p><ul><li>模式/内模式的映像：存在于概念级和内部级之间，实现了概念模式到内模式之间的转换。</li><li>外模式/模式的映像：存在于外部级和概念级之间，实现了外模式到概念模式之间的转换。</li></ul><p>记忆：<code>模式、内模式、外模式分别对应概念模式、内模式、外模式</code></p><hr><p>合并 ER 图</p><ol><li>属性冲突：属性域冲突和属性取值冲突（每个属性的取值范围对应一个值的集合，称为该属性的域）</li><li>命名冲突：同名异义和异名同义</li><li>接口冲突：同一对象在不同应用中具有不同的抽象，同一实体在不同局部 ER 图中所包含的属性格式和属性排序不完全相同</li></ol><hr><p>关系代数与元组演算</p><p>元组（tuple）是关系数据库中的基本概念，关系是一张表，表中的每行（即数据库中的每条记录）就是一个元组，每列就是一个属性。</p><p>运算：</p><ul><li>并(∪)：结果为两者元组之和去除重复行</li><li>交(∩)：结果为两者元组的重复行</li><li>差(-)：结果为前者去除重复行</li><li>笛卡尔积(x)：结果列数为两者属性列之和，行数为两者元素数的乘积</li><li>投影(π：select)：对属性列的选择列出</li><li>选择(σ：where)：对元组行的选择列出</li><li>自然连接(⋈)：结果列为两者属性列数之和减去重复行，行数为两者同名属性列其值相同的结果元组</li></ul><p>关系代数表达式查询优化的原则如下：</p><ol><li>尽早执行选取运算。</li><li>合并乘积与其后的选择运算为连接运算。</li><li>将投影运算与其后的其他运算同时进行，以避免重复扫描关系。</li><li>将投影与其前后的二目运算结合起来，是的没有必要为去掉某些字段再扫描一遍关系。</li><li>在执行连接前对关系适当地预处理，就能快速地找到要连接的元组。（方法有两种：索引连接法、排序合并连接法）</li><li>存储公共子表达式。</li></ol><hr><p>规范化理论的意义：解决非规范化的关系模式中可能存在的问题：数据冗余、更新异常、插入异常、删除异常</p><hr><p>事务的 ACID 特征</p><ul><li>原子性（Atomicity）：事务是原子的，要么都做要么都不做。</li><li>一致性（Consistency）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。</li><li>隔离性（Isolation）：事务相互隔离。</li><li>持久性（Durability）：事务处理结束后，对数据的修改就是永久的。</li></ul><hr><p>数据库设计过程：</p><ol><li>需求分析：产出数据流图、数据字典、需求说明书</li><li>概念结构设计(概念模型，E-R 图)：将用户需求抽象为信息结构，产出 E-R 图</li><li>逻辑结构设计(逻辑模式、外模式)：把基本 E-R 图转换为与选用数据库管理系统产品所支持的数据模型相符合的逻辑结构，产出关系模式</li><li>物理设计(内模式):为一个给定的逻辑数据模型选取一个最适合应用要求的物理结构的过程，就是数据库的物理设计</li></ol><hr><p>DBMS（数据库管理系统）把事务开始、事务结束以及对数据库的插入、删除、修改的每一次操作写入日志文件，按一定时间间隔，把数据缓存区的内容写入数据文件。</p><p>DBMS 的安全措施有 3 个方面：权限机制，视图机制，数据加密</p><hr><p>排它锁：Exclusive Locks，简称 X 锁，又称写锁。事务 A 对数据上 X 锁，就只有 A 能读写数据，其他事务均不能加任何锁，从而不能读写数据直到 A 释放 X 锁。</p><p>共享锁：Share Locks，简称 S 锁，又称读锁。事务 A 对数据上 S 锁，A 就只能读取数据而不能修改，其他事务也能对数据上 S 锁来读取，但是只要数据上有 S 锁，任何事务都只能对其加 S 锁而不能加 X 锁。</p><hr><p>设 U 是关系模式 R 的属性集，F 是 R 上成立的致设计 U 中属性的行数以依赖集。行数以来的推理规则有以下三条：</p><ul><li>自反律：若属性集 Y 包含于属性集 X，属性集 X 包含于 U，则 X→Y 在 R 上成立（此处 X→Y 是平凡函数依赖）。</li><li>增广律：若 X→Y 在 R 上成立，且属性集 Z 包含于属性集 U，则 XZ→YZ 在 R 上成立。</li><li>传递律：若 X→Y 和 Y→Z 在 R 上成立，则 X→Z 上成立。</li></ul><p>根据异常三条推理规则，可得出以下三条推理规则：</p><ul><li>合并规则：若 X→Y，X→Z，则 X→YZ 为 F 所蕴含</li><li>伪传递规则：若 X→Y，WY→Z，则 XW→Z 为 F 所蕴含</li><li>分解规则：若 X→Y，Z⊆Y，则 X→Z 为 F 所蕴含</li></ul><hr><p>分布式数据库</p><ul><li>分片透明性：用户不必关心数据是如何分片的，他们对数据的操作在全局关系上进行的，即关心如何分片对用户是透明的，因此，当分片改变时应用程序可以不变。分片透明是最高层次的透明性。</li><li>复制透明性：用户不关心数据库在网络中的各个节点的复制情况，被复制的数据更新都由系统自动完成。</li><li>位置透明性：用户不必知道所操作的数据放在何处，即数据分配到那个或那些站点存储对用户是透明的。因此，数据分片模式的改变，如把数据从一个站点转移到另一个站点将不会影响应用程序，因此应用程序不必改写。</li><li>逻辑透明性(局部映像透明性)：最低层次的透明性，该透明性提供数据到局部数据库的映像，即用户不必关心局部 DBMS 支持哪种数据模型、使用哪种数据操纵语言，数据模型和操纵语言的转换是由系统完成的。因此，局部映像透明性对异构型和同构异质的分布式数据库系统时非常重要。</li></ul><hr><p>包含在任何一个候选码中的属性叫作主属性，否则叫做非主属性。</p><hr><p>DDBS（分布式数据系统）的基本特点：</p><ol><li>物理分布性：数据不是存储在一个场地上，二是存储在计算机网络的多个场地上</li><li>逻辑整体性：数据物理分布在各个场地，但逻辑上是一个整体，它们被所有用户（全局用户）共享，并由一个 DDBMS（分布式数据库管理系统）统一管理</li><li>场地自治性：各场地上的数据由本地的 DBMS（数据库管理系统）管理，具有自治处理能力，完成本场地的应用（局部应用）</li><li>场地之间协作性：各场地虽然具有高度的自治性，但是又相互协作构成一个整体</li></ol><hr><p>哈希表和二叉排序树都可以在查找过程中动态创建，属于动态查找表。</p><p>顺序查找方法按照设定的次序依次查找表中元素的关键字进行比较，在顺序存储结构和链表结构上都可以实现该查找过程。</p><p>二分查找需要对中间元素进行快速定位，在链表结构上无法实现。</p>",48),r=[t];function c(h,s){return i(),p("div",null,r)}const u=l(o,[["render",c],["__file","database-technology.html.vue"]]);export{u as default};
