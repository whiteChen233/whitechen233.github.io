---
title: 面向对象技术
date: 2021-10-27
---

---

面向对象分析（OOA）的目的是为了获得对应问题的理解，理解的目的是确定系统的功能、性能要求。

面向对象分析包括 5 个活动：认定对象、组织对象、描述对象间的相互作用、确定对象的操作、定义对象的内部信息。

`面向对象分析阶段要建立独立于实现的系统分析模型，着重分析问题域和系统责任。不考虑系统实现与系统测试问题。`

---

对象的组成部分包括：`对象名`，`状态（属性）`，`行为（操作）`。类是对对象共有属性和行为的抽象，因此一个类定义的对象共享`行为`和`属性`。

`对象抽象成类，类实例化称对象。`

对象的状态是指其属性与属性值的一个组合。

---

| 分类     | 说明                                                                         |
| -------- | ---------------------------------------------------------------------------- |
| 参数多态 | 应用广泛、最纯的多态                                                         |
| 包含多态 | 同样的操作可用于一个类型及其子类型。包含多态一般需要进行运行时的类型检查     |
| 强制多态 | 编译程序通过语义操作，把操作对象的类型强行加以变换，以符合函数或操作符的要求 |
| 过载多态 | 同一个名（操作符、函数名）在不同上下文中有不同的类型                         |

---

面向对象中类可以分三类：

- 实体类：实体类的对象表示现实世界中真实的实体，如人、物等
- 接口类（边界类）：接口类的对象为用户提供一种与系统合作交互的方式，分为人和系统两大类，其中人的接口可以是显示屏、窗口、Web 窗体、对话框、列表框、其它显示控制、条形码、二维码或者用户与系统交互的其他方法；系统的接口涉及到把数据发送到其他系统，或者从其他系统接受数据
- 控制类：控制类的对象用来控制活动流，充当协调者

---

设计原则

| 原则          | 说明                                                 |
| ------------- | ---------------------------------------------------- |
| 单一职责原则  | 设计目的单一的类                                     |
| 开放-封闭原则 | 对扩展开放，对修改关闭                               |
| 里氏代换原则  | 子类可以替换父类                                     |
| 依赖倒置原则  | 要以来与，而不是实现；针对接口编程，不要针对实现编程 |
| 接口隔离原则  | 使用多个专门的接口比使用单一的总接口要好             |
| 组合重用原则  | 要尽量使用组合，而不是继承关系达到重用的目的         |
| 迪米特原则    | 一个对象应当对其他对象有尽可能少的了解               |

---

UML

- 事物
  - 结构事物
  - 行为事物
  - 分组事物
  - 注释事务
- 关系
  - 依赖
  - 关联
  - 泛化
  - 实现
- 图
  - 结构图（静态图）
    - 类图
    - 对象图
    - 包图
    - 组合结构图
    - 构件图
    - 部署图
    - 制品图
  - 行为图（动态图）
    - **用例图**：系统和外部的交互关系
    - 顺序图/序列图：强调按时间顺序
    - 通信图/协作图：
    - 定时图
    - 状态图：状态的变迁转移情况
    - 活动图：流程图
    - 交互概览图

---

状态图展现了一个状态机，它由状态、转换、时间和活动组成，通常包括简单状态和组合状态、转换（事件和动作）。

- 状态可以是单一的，也可以是嵌套的，所以活动可以在状态内执行，也可以在状态迁移时执行。
- 转换是两个状态（源状态、目标状态）之间的一种关系，表示对象在源状态执行一定的事件或动作，并在某个特定的事件发生而某个特定的监护条件满足时离开当前状态而进入目标状态，事件触发没有特定监护条件的迁移，对象也会离开当前状态。

---

设计模式 [Github](https://github.com/whiteChen233/design-patterns)

- 架构模式：软件设计的高层决策，反映了开发软件系统过程中所作的基本设计决策。例如：C/S 结构
- 设计模式：主要关注软件系统的设计，与具体的编程语言无关。
- 惯用法：最底层的模式，关注软件系统的设计与实现，实现时通过某种特定的程序设计语言来描述构件与构件之间的关系。每种语言都有它自己特定的模式。

23 种设计模式：

- 创建型模式：对类的实例化过程进行了抽象，能够将软件模块中对象的创建和对象的使用分离

  | 名称                             | 说明                                                                                       |
  | -------------------------------- | ------------------------------------------------------------------------------------------ |
  | 单例（Singleton）模式            | 保证一个类只有一个实例，并提供一个访问它的全局访问点。其拓展是有限多例模式                 |
  | 原型（Prototype）模式            | 用原型实例指定创建对象的类型，并且通过拷贝这个原型来创建新的对象。也称克隆模型             |
  | 工厂方法（Factory Method）模式   | 定义一个创建对象的接口，但由子类决定需要实例化哪一个类。工厂方法使得子类实例化的过程推迟   |
  | 抽象工厂（Abstract Factory）模式 | 提供一个接口，可以创建一系列相关或相互依赖的的对象，而无需指定它门具体的类                 |
  | 建造者（Builder）模式            | 将一个复杂对象分解成多个相对简单的部分，然后根据不同需要分别创建它们，最后构建成该复杂对象 |

- 结构型模式：描述如何将类或者对象结合在一起形成更大的结构

  | 名称                  | 说明                                                                                                                 | 速记         |
  | --------------------- | -------------------------------------------------------------------------------------------------------------------- | ------------ |
  | 代理（Proxy）模式     | 为某对象提供一种代理以控制对该对象的访问。即客户端通过代理间接地访问该对象，从而限制、增强或修改该对象的一些特性。   |              |
  | 适配器（Adapter）模式 | 将一个类的接口转换成客户希望的另外一个接口，使得原本由于接口不兼容而不能一起工作的那些类能一起工作。                 | 转换接口     |
  | 桥接（Bridge）模式    | 将抽象与实现分离，使它们可以独立变化。它是用组合关系代替继承关系来实现，从而降低了抽象和实现这两个可变维度的耦合度。 | 继承树拆分   |
  | 装饰（Decorator）模式 | 动态的给对象增加一些职责，即增加其额外的功能。                                                                       | 附加职责     |
  | 外观（Facade）模式    | 为多个复杂的子系统提供一个一致的接口，使这些子系统更加容易被访问。                                                   | 对外统一接口 |
  | 享元（Flyweight）模式 | 运用共享技术来有效地支持大量细粒度对象的复用。                                                                       |              |
  | 组合（Composite）模式 | 将对象组合成树状层次结构，使用户对单个对象和组合对象具有一致的访问性。                                               | 树形目录结构 |

- 行为型模式：是对不同对象之间划分责任和算法的抽象化

  | 名称                                  | 说明                                                                                                                       | 速记             |
  | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------- |
  | 模板方法（Template Method）模式       | 定义一个操作中的算法骨架，而将算法的一些步骤延迟到子类中，使得子类可以不改变该算法结构的情况下重定义该算法的某些特定步骤。 |                  |
  | 策略（Strategy）模式                  | 定义了一系列算法，并将每个算法封装起来，使它们可以相互替换，且算法的改变不会影响使用算法的客户。                           | 多方案切换       |
  | 命令（Command）模式                   | 将一个请求封装为一个对象，使发出请求的责任和执行请求的责任分割开。                                                         | 日志记录，可撤销 |
  | 职责链（Chain of Responsibility）模式 | 把请求从链中的一个对象传到下一个对象，直到请求被响应为止。通过这种方式去除对象之间的耦合。                                 | 传递职责         |
  | 状态（State）模式                     | 允许一个对象在其内部状态发生改变时改变其行为能力。                                                                         | 状态变成类       |
  | 观察者（Observer）模式                | 多个对象间存在一对多关系，当一个对象发生改变时，把这种改变通知给其他多个对象，从而影响其他对象的行为。                     |                  |
  | 中介者（Mediator）模式                | 定义一个中介对象来简化原有对象之间的交互关系，降低系统中对象间的耦合度，使原有对象之间不必相互了解。                       | 不直接引用       |
  | 迭代器（Iterator）模式                | 提供一种方法来顺序访问聚合对象中的一系列数据，而不暴露聚合对象的内部表示。                                                 |                  |
  | 访问者（Visitor）模式                 | 在不改变集合元素的前提下，为一个集合中的每个元素提供多种访问方式，即每个元素有多个访问者对象访问。                         |                  |
  | 备忘录（Memento）模式                 | 在不破坏封装性的前提下，获取并保存一个对象的内部状态，以便以后恢复它。                                                     |                  |
  | 解释器（Interpreter）模式             | 提供如何定义语言的文法，以及对语言句子的解释方法，即解释器。                                                               |                  |
