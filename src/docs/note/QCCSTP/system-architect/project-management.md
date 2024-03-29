---
title: 项目管理
date: 2022-09-21
---

## 立项管理

### 盈亏平衡管理

- 正常情况下：销售额 = 固定成本 + 可变成本 + 税费 + 销售额
- 盈亏平衡：销售额 = 固定成本 + 可变成本 + 税费

## 范围管理

### 范围管理的定义

范围管理指确定项目的边界，即哪些工作使项目应该做的，哪些工作不应该包括在项目中

::: tip 范围定义的输入
在初步项目范围说明书中已文档化的主要的可交付物、假设和约束条件的基础上准备详细的项目范围说明书，是项目成功的关键。范围定义的输入包括：

- 项目章程
- 项目范围管理计划
- 组织过程资产
- 批准的变更申请

:::

### 范围管理的过程

- 范围计划编制
- 范围定义
  - 产品范围
  - 工作范围
- 创建 WBS
  - WBS（工作分解结构）
  - WBS 字典
- 范围确认
- 范围控制

<table>
  <thead>
    <tr>
      <td>层次名称</td><td>层次编号</td><td>层次描述</td><td>层次目的</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>决策层</td><td>1</td><td>总项目</td><td>工作授权和解除</td>
    </tr>
    <tr>  
      <td rowspan="2">管理层</td><td>2</td><td>项目</td><td>预算编制</td>
    </tr>
    <tr>  
      <td>3</td><td>任务</td><td>进行计划编制</td>
    </tr>
    <tr>  
      <td rowspan="2">技术层</td><td>4</td><td>子任务</td><td rowspan="3">内部控制</td>
    </tr>
    <tr>  
      <td>5</td><td>工作包</td>
    </tr>
    <tr>  
      <td>操作层</td><td>6</td><td>努力水平</td>
    </tr>
  </tbody>
</table>

## 时间管理

### 时间管理的定义

时间管理也叫`进度管理`，就是采用科学的方法，确定进度目标，编制进度计划和资源供应计划，进行进度控制，在与质量、成本目标协调的基础上，实现工期目标

### 时间管理的过程

- 活动定义：以 WBS 工作包作为输入
- 活动排序
- 活动资源估算
- 活动历时估算
- 制定进度计划
- 进度控制

#### 历时估算方法

- 专家判断法
- 三点估算法：（乐观时间+最可能时间 x4（_加权_）+悲观时间）/6
- 功能点估算法
- 自上而下的估算
- 自下而上的估算

#### 进度控制

- 可能出现的问题
  - 是否为关键活动
  - 偏差是否大于总时差
  - 偏差是否大于自由时差
- 采取的手段
  - 赶工：增加资源 —加班
  - 快速跟进：活动并行执行

### 进度网络图-关键路径法（PERT）

关键路径法是在制订进度计划时使用的一种进度网络分析技术。关键路线法沿着项目进
度网络路线进行正向与反向分析，从而计算出所有计划活动理论上的最早开始与完成日期、
最迟开始与完成日期，不考虑任何资源限制。

#### 单代号网络图（前导图法，PDM）

![时间管理-前导图法](/assets/note/qccstp/时间管理-前导图法.png)

- 总时差（松弛时间）：`在不延误总工期的前提下，该活动的机动时间`。活动的总时差等于该活动最迟完成时间与最早完成时间之差，或该活动最迟开始时间与最早开始时间之差
- 自由时差：`在不影响紧后活动的最早开始时间前提下，该活动的机动时间`
  - 对于有紧后活动的活动，其自由时差等于所有紧后活动最早开始时间减本活动最早完成时间所得之差的最小值
  - 对于没有紧后活动的活动，也就是以网络计划终点节点为完成节点的活动，其自由时差等于计划工期与本活动最早完成时间之差
- 对于网络计划中以终点节点为完成节点的活动，其自由时差与总时差相等。此外，由于活动的自由时差是其总时差的构成部分，所以，当活动的总时差为零时，其自由时差必然为零，可不必进行专门计算

> - 总时差为 0 的节点就是关键节点，连接成的路径就是关键路径，但可能不止一条
> - 花费时间最多路径就是关键路径，所花费的时间就是最短工期

#### 双代号网络图

双代号图中虚线箭头指虚活动，这种活动既不占时间，也不占资源，仅仅使为了展示逻辑依赖关系

### 甘特图（Gantt）

![时间管理-甘特图](/assets/note/qccstp/时间管理-甘特图.png)

> 细线代表计划，粗线代表实际

#### 优缺点

- 优点：甘特图直观、简单、容易制作，便于理解，能很清晰地标识出直到每一项任务的起始与结束时间，一般适用比较简单的小型项目，可用于
  WBS 的任何层次、进度控制、资源优化、编制资源和费用计划
- 缺点：不能系统地表达一个项目所包含的各项工作之间的复杂关系，难以进行定量的计算和分析，以及计划的优化等

## 成本管理

### 成本管理的定义

在整个项目实施过程中，为确保项目在批准的预算下尽可能的保质按期完成，而对所需的各个过程进行管理与控制

### 成本管理的过程

- 成本估算
- 成本预算
- 成本控制

#### 成本估算的方法

- 自顶向下的估算
- 自底向上的估算
- 差别估算法

#### 成本预算

- 直接成本与间接成本
- 管理储备
- 零基准预算

::: tip 成本估算与成本预算
简单来说，成本估算是指估算出项目总成本。成本预算是将总的成本估算分配到各项活动和工作包上，建立一个成本的基线
:::

#### 成本控制 - 挣值管理

- 计划工作量的预算成本（PV）= 计划工作量 x 预算定额
- 已完成工作量的实际成本（AC）
- 已完成工作量的预算成本（EV）= 已完成的工作量 x 预算定额
- 完工预算（BAC）= 完工时的 PV 总和

> - 进度偏差：SV = EV-PV
> - 成本偏差：CV = EV-AC
> - 进度绩效指数：SPI = EV/PV
> - 成本绩效指数：CPI = EV/AC
> - 剩余工作的成本（ETC）
>   - ETC = BAC-EV
>   - ETC = (BAC-EV)/CPI
> - 完工估算：EAC = AC+ETC

## 软件质量管理

### 质量保证与质量控制

- `质量保证`
  一般是每隔一段时间（例如，每个阶段末）进行的，主要通过系统的质量审计和过程分析来保证项目的质量。独特工具包括：`质量审计和过程分析`
- `质量控制`是实时监控项目的具体结果，以判断它们是否符合相关质量标准，指定有效方案，以消除产生质量问题的原因

> 一定时间内质量控制的结果就是质量保证的质量审计对象。质量保证的成果又可以指导下一阶段的质量工作，包括质量控制和质量改进

### 软件评审

- 技术评审
- 管理评审

> - 不应以测试代替评审
> - 评审人员应关注产品而不应评论开发人员
> - 评审人员应关注与实质性问题
> - 评审会议不应变为问题解决方案讨论会
> - 评审应被安排进入项目计划
> - 评审参与者应了解整个评审过程
> - 评审人员事先应对评审材料充分了解
> - 应重视评审的组织工作

### 软件过程改进 - CMMI

![软件质量管理-软件过程改进-1](/assets/note/qccstp/软件质量管理-软件过程改进-1.png)

> - 等级逐步提升：已管理级（二级）→ 已定义级（三级）→ 定量管理级（四级）→ 优化级（五级）
> - 已管理级是项目级的管理；已定义级是组织级的管理；定量管理级是强调量化；优化级强调不断优化

![软件质量管理-软件过程改进-2](/assets/note/qccstp/软件质量管理-软件过程改进-2.png)

## 软件配置管理

### 配置项与配置库

#### 关于配置项

- 配置项是构成产品配置的主要元素，配置项主要有一下两大类：
  - _必选_ ==属于产品组成部分的工作成果==：如需求文档、设计文档、源代码和测试用例等
  - _可选_ ==属于项目管理和机构支撑过程域产生的文档==：如工作计划、项目质量报告和项目跟踪报告等。这些文档虽然不是产品的组成部分，但是值得保存
- 每个配置项的主要属性有：名称、标识符、文件准柜台、版本、作者和日期等。所有配置项都被保存在配置库里，确保不会混淆、丢失。配置项及其历史记录反映了软件演化的过程
- 配置项的状态有 3 种：草稿（Draft）、正式发布（Released）、正在修改（Changing）

> 设备清单、CASE 工具操作手册不属于配置项

#### 关于配置库

- 开发库（动态库、程序员库、工作库）：可以随意修改
- 受控库（主库、系统库）：必须先申请，申请通过才有权限修改
- 产品库（备份库、静态库）：不能修改

### 软件工具

按软件过程活动将软件工具分为：

- `软件开发工具`：需求分析工具、设计工具、编码与排错工具
- `软件维护工具`：版本控制工具（VSS、CVS、SCCS、SVN）、文档分析工具、开发信息库工具、逆向工程工具、再工程工具
- `软件管理和软件支持工具`：项目管理工具、配置管理工具、软件评价工具、软件开发工具的评价和选择

### 变更控制

#### 过程

变更申请 → 变更评估 → 变更决策 → 变更实施 → 变更验证 → 沟通存档

![软件配置管理-变更控制](/assets/note/qccstp/软件配置管理-变更控制.png)

### 版本控制

![软件质量管理-版本控制](/assets/note/qccstp/软件配置管理-版本控制.png)

- 处于`草稿`状态的配置项的版本号格式为：0.Y.Z，其中 YZ 数字范围为 01~99。随着草稿的不断完善，YZ 的取值应递增。YZ 的初始值和增幅由开发者自己把握
- 处于`正式发布`状态的配置项的版本号格式为：X.Y，其中 X 为主版本号，取值范围 1~9；Y 为此版本号，取值范围为 1~9。配置项第一次正式发布时，版本号为 1.0
- 如果配置项的版本升级幅度比较小，一般只增大 Y 值，X 值保持不变。只有当配置项版本升级幅度比较大时，才允许增大 X 值
- 处于`正在修改`状态的配置项的版本号格式为：X.Y.Z，在修改配置项时，一般只增大 Z 值，X.Y 值保持不变

## 风险管理

### 风险管理的概念

关心未来；关心变化；关心选择

- 风险存在的客观性和普遍性
- 某一具体风险发生的偶然性和大量风险发生的必然性
- 风险的可变性
- 风险的多样性和多层次性
- `基本属性：随机性和相对性`

### 风险的分类

- 项目风险
  - 潜在的预算、进度、人员和组织、资源、用户和需求问题
  - 项目复杂性、规模和结构的不确定性
- 技术风险
  - 潜在的设计、实现、接口、测试和维护方面的问题
  - 规格说明的多义性、技术上的不确定性、技术陈旧、最新技术（不成熟）
- 商业风险
  - 市场风险：系统虽然很优秀但不是市场真正所想要的
  - 策略风险：系统不再符合企业的信息系统战略
  - 销售风险：开发了销售部门不清楚如何推荐的系统
  - 管理风险：由于重点转移或人员变动而失去上级支持
  - 预算风险：开发过程没有得到预算或人员的保证

### 风险曝光度

风险曝光度（Risk Exposure）：计算方法是风险出现的概率 x 风险可能造成的损失

### 项目管理工具

- 能做什么（项目管理相关的工作辅助）：任务调度、成本估算、资源分配、预算跟踪、人时统计、配置控制，确定关键路径、松弛时间、超前时间和滞后时间，生成一定格式的报表和报告
- 不能做什么（开发技术相关辅助工作）：不能指导软件设计人员按软件生存周期各个阶段的适用技术进行设计工作
