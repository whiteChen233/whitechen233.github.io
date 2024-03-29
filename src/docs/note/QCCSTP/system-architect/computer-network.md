---
title: 计算机网络
date: 2022-10-05
---

## 网络架构与协议

网络架构是指计算机网络的各层及其协议的集合。计算机之间要交换数据，就必须遵守一些事先约定好的规则，用于规定信息的格式及如何发送和接收信息的一套规则就称为网络协议

### 网络互联模型

#### 开放系统互联参考模型（Open System Interconnection/Reference Model，OSI/RM）

OSI/RM 构造了由下到上的七层模型，分别是物理层、数据链路层、网络层、传输层、会话层、表示层和应用层

1. 物理层  
   物理层的主要功能是透明地完成相邻节点之间原始比特流的传输。其中"透明"的意思是指物理层并不需要关心比特代表的具体含义，而要考虑的是如何发送"0"和"1"，以及接收端如何识别。物理层在传输介质基础上作为系统和通信介质的接口，为数据链路层提供服务
2. 数据链路层  
   数据链路层负责在两个相邻节点之间的线路上无差错地传送以帧为单位的数据，通过流量控制和差错控制，将原始不可靠的物理层连接变成无差错的数据通道，并解决多用户竞争问题，使之对网络层显现一条可靠的链路
3. 网络层  
   网络层是通信子网的最高层，其主要任务是在数据链路层服务的基础上，实现整个通信子网内的连接，并通过网络连接交换网络服务数据单元（packet）。它主要解决数据传输单元分组在通信子网中的路由选择、拥塞控制和多个网络互联的问题。网络层建立网络连接为传输层提供服务
4. 传输层  
   传输层既是负责数据通信的最高层，又是面向网络通信的低三层（物理层、数据链路层和网络层）和面向信息处理的高三层（会话层、表示层和应用层）之间的中间层，是资源子网和通信子网的桥梁，其主要任务是为两台计算机的通信提供可靠的端到端的数据传输服务。传输层反映并扩展了网络层子系统的服务功能，并通过传输层地址为高层提供传输数据的通信端口，使系统之间高层资源的共享不必考虑数据通信方面的问题
5. 会话层  
   会话层利用传输层提供的端到端数据传输服务，具体实施服务请求者与服务提供者之间的通信、组织和同步它们的会话 活动，并管理它们的数据交换过程。会话层提供服务通常需要经过建立连接、数据传输和释放连接三个阶段。会话层是最薄的一层，常被省略
6. 表示层  
   表示层处理的是用户信息的表示问题。端用户（应用进程）之间传送的数据包含语义和语法两个方面。语义是数据的内容及其含义，它由应用层负责处理；语法是与数据表示形式有关的方面，例如，数据的格式、编码和压缩等。表示层主要用于处理应用实体面向交换的信息的表示方法，包括用户数据的结构和在传输时的比特流（或字节流）的表示。这样，即使每个应用系统有各自的信息表示法，但被交换的信息类型和数值仍能用一种共同的方法来描述
7. 应用层  
   应用层是直接面向用户的一层，是计算机网络与最终用户之间的界面。在实际应用中，通常把会话层和表示层归入到应用层，使 OSI/RM 成为一个简化的五层模型

#### 传输控制协议/网际协议（Transmission Control Protocol/ Internet Protocol，TCP/IP）结构模型

TCP/IP 结构模型与 OSI/RM 结构不同，不存在一个正式的 TCP/IP 结构模型，但可根据已开发的协议标准和通信任务将其大致分成四个比较独立的层次，分别是网络接口层、网络互联层、传输层和应用层

1. 网络接口层  
   网络接口层大致对应于 OSI/RM 的数据链路层和物理层，TCP/IP 协议不包含具体的物理层和数据链路层，只定义了网络接口层作为物理层的接口规范。网络接口层处在 TCP/IP 结构模型的最底层，主要负责管理为物理网络准备数据所需的全部服务程序和功能
2. 网络互联层  
   网络互联层也称为网络层、互联网层或网际层，负责将数据报独立地从信源传送到信宿，主要解决路由选择、阻塞控制和网络互联等问题，在功能上类似于 OSI/RM 中的网络层
3. 传输层  
   传输层负责在信源和信宿之间提供端到端的数据传输服务，相当于 OSI/RM 中的传输层
4. 应用层  
   应用层直接面向用户应用，为用户方便地提供对各种网络资源的访问服务，包含了 OSI/RM 会话层和表示层中的部分功能

> TCP（可靠连接层传输协议）与 UDP（不可靠连接层传输协议）均支持对具体指定端口进行通信。但是连接管理、差错校验、重传等能力只有 TCP 具有

### 常见网络协议

#### 应用层协议

在应用层中，定义了很多面向应用的协议，应用程序通过本层协议利用网络完成数据交互的任务。这些协议主要有 FTP、TFTP、HTTP、SMTP、DHCP、Telnet、DNS 和 SNMP 等

##### 文件传输协议（File Transport Protocol，FTP）

FTP 是网络上两台计算机传送文件的协议，运行在 TCP 之上，是通过 Internet 将文件从一台计算机传输到另一台计算机的一种途径。FTP 的传输模式包括 Bin（二进制）和 ASCII（文本文件）两种，除了文本文件之外，都应
该使用二进制模式传输。FTP 在客户机和服务器之间需建立两条 TCP 连接，一条用于传送控制信息（使用 21 号端口），另一条用于传送文件内容（使用 20 号端口）

##### 简单文件传输协议（Trivial File Transfer Protocol，TFTP）

TFTP 是用来在客户机与服务器之间进行简单文件传输的协议，提供不复杂、开销不大的文件传输服务。TFTP 建立在 UDP（User Datagram Protocol，用户数据报协议）之上，提供不可靠的数据流传输服务，不提供存取授权与认证机制，使用超时重传方式来保证数据的到达

##### 超文本传输协议（Hypertext Transfer Protocol，HTTP）

HTTP 是用于从 WWW 服务器传输超文本到本地浏览器的传送协议。它可以使浏览器更加高效，使网络传输减少。HTTP 建立在 TCP 之上，它不仅保证计算机正确快速地传输超文本文档，还确定传输文档中的哪一部分，以及哪部分内容首先显示等

##### 简单邮件传输协议（Simple Mail Transfer Protocol，SMTP）

SMTP 建立在 TCP 之上，是一种提供可靠且有效的电子邮件传输的协议。SMTP 是建模在 FTP 文件传输服务上的一种邮件服务，主要用于传输系统之间的邮件信息，并提供与电子邮件有关的通知

##### 动态主机配置协议（Dynamic Host Configuration Protocol，DHCP）

DHCP 建立在 UDP 之上，是基于客户机/服务器（C/S）模型设计的。所有的 IP 网络设定数据都由 DHCP 服务器集中管理，并负责处理客户端的 DHCP 要求；而客户端则会使用从服务器分配下来的 IP 环境数据

DHCP 通过租约（默认为 8 天）的概念，有效且动态地分配客户端的 TCP/IP 设定。当租约过半时，客户机需要向 DHCP 服务器申请续租；当租约超过 87.5% 时，如果仍然没有和当初提供 IP 的 DHCP 服务器联系上，则开始联系其他的 DHCP 服务器。DHCP 分配的 IP 地址可以分为三种方式，分别是固定分配（永久 IP）、动态分配（有时限的 IP）和自动分配（网管手动分配）

::: tip 无效地址
Windows：169.254.x.x

Linux：0.0.0.0
:::

##### 远程登录协议（Telnet）

Telnet 是登录和仿真程序，建立在 TCP 之上，它的基本功能是允许用户登录进入远程计算机系统。以前，Telnet 是一个将所有用户输入送到远程计算机进行处理的简单的终端程序。目前，它的一些较新的版本是在本地执行更多的处理，可以提供更好的响应，并且减少了通过链路发送到远程计算机的信息数量

##### 域名系统（Domain Name System，DNS）

DNS 在 Internet 上域名与 IP 地址之间是一一对应的，域名虽然便于人们记忆，但机器之间只能互相识别 IP 地址，它们之间的转换工作称为域名解析，域名解析需要由专门的域名解析服务器来完成，DNS 就是进行域名解析的服务器。DNS 通过对用户友好的名称查找计算机和服务。当用户在应用程序中输入 DNS 名称时，DNS 服务可以将此名称解析为与之相关的其他信息，例如，IP 地址

- 递归查询：服务器必须回答目标 IP 与域名的映射关系  
  ![网络架构与协议-DNS-迭代查询](/assets/note/qccstp/网络架构与协议-DNS-迭代查询.png)
  - 主机向本地域名服务器的查询采用递归查询
  - 本地域名服务器向根域名服务器的查询通常采用迭代查询
- 迭代查询：服务器收到一次迭代查询回复一次结果，这个结果不一定是目标 IP 与域名的映射关系，也可以是其他 DNS 服务器的地址  
  ![网络架构与协议-DNS-递归查询](/assets/note/qccstp/网络架构与协议-DNS-递归查询.png)
  - 主机向本地域名服务器的查询采用递归查询
  - 本地域名服务器向跟域名服务器的查询采用递归查询
  - 根域名服务器负担重，效率低，故较少采用

> - 通过返回的是否是正确答案来判断是什么查询：如果是线索，那就是迭代查询；如果是正确答案，那就是递归查询
> - PC 端-Web 浏览器提交请求的处理顺序：host 文件 → 本地缓存 → 本地域名服务器
> - （域名）服务器接收请求的处理顺序：本地缓存 → host 文件 → 转发域名服务器 → 根域名

##### 简单网络管理协议（Simple Network Management Protocol，SNMP）

SNMP 是为了解决 Internet 上的路由器管理问题而提出的，它可以在 IP、IPX、AppleTalk 和其他传输协议上使用。SNMP 是指一系列网络管理规范的集合，包括协议本身、数据结构的定义和一些相关概念。目前，SNMP 已成为网络管理领域中事实上的工业标准，并被广泛支持和应用，大多数网络管理系统和平台都是基于 SNMP 的

### IPv6

IPv6 是设计用于替换现行版本 IP 协议（IPv4）的下一代协议

> IPv4，点分十进制，32 位二进制  
> IPv6，冒分十六进制，128 位二进制

- IPv6 地址长度为 128 位，==地址空间增大了$\frac {2^{128}} {2^{32}} = 2^{96}$倍==
- 灵活的 IP 报文头部格式。使用一系列固定格式的扩展头部取代了 IPv4 中可变长度的选项字段。IPv6 中选项部分的出现方式也有所变化，使路由器可以简单路过选项而不做任何处理，加快了报文处理速度
- IPv6 简化了报文头部格式，字段只有 8 个，加快报文转发，提高了吞吐量
- 提高安全性。身份认证和隐私权是 IPv6 的关键特性
- 支持更多的服务类型
- 允许协议继续演变，增加新的功能，使之适应未来的发展

#### IPv6 表示

对于这个 128 位的 IPv6 地址用 2 进制表示为：00100000000000010000110110101000110100000000000100000000000000010000000000000000000000000000000000000000000000001100111011001101

- 首选格式
  $$ 2001:0da8:d001:0001:0000:0000:0000:0001 $$
- 压缩地址表示
  - 常见到使用包含一长串 0 的地址，为了方便书写，对于每一段中的前导 0 可以进行省略。如前面的首选格式地址经过一次压缩
    $$ 2001:da8:d001:1:0:0:0:1 $$
  - 对于连续 2 段以上都为 0 的字段，可以使用`::`（两个冒号，每个 IPv6 地址只允许有一个`::`）来表示，这样再次压缩，变成：
    $$ 2001:da8:d001:1::1 $$

#### IPv4 到 IPv6 的过渡技术

- 双协议栈技术：双栈技术通过节点对 IPv4 和 IPv6 双协议栈的支持，从而支持两种业务的共存
- 隧道技术：隧道技术通过在 IPv4 网络中部署隧道，实现在 IPv4 网络上对 IPv6 业务的承载，保证业务的共存和过渡。具体的隧道技术包括：6to4 隧道；6over4 隧道；ISATAP 隧道
- NAT-PT 技术：NAT - PT 使用网关设备连接 IPv6 和 IPv4 网络。当 IPv4 和 IPv6 节点互相访问时，NAT - PT 网关实现两种协议的转换翻译和地址的映射

## 网络工程

### 网络规划

#### 需求分析

- 功能需求
- 通信需求
- 性能需求
- 可靠性需求
- 安全需求
- 运行与维护需求
- 管理需求

#### 可行性研究

在网络规划阶段，有一个很重要的活动，那就是系统可行性研究，通常从技术可行性、 经济可行性、法律可行性和用户使用可行性等方面进行论证

#### 对现有网络的分析与描述

如果是在现有网络系统的基础上进行升级，那么，网络规划阶段的一项重要工作就是对现有网络进行分析，并系统化地描述出来。对现有网络系统进行调研，主要从以下几个方面进行：

1. 服务器的数量和位置。通常服务器所在的中心机房就是网络瓶颈所在，因此，服务器的数量和位置是确定网络瓶颈、解决网络拥塞的前提
2. 客户机的数量和位置。对客户机的数量和位置进行分析，便于发现在客户机相对集中的地方是否存在瓶颈，结合地理位置确认客户机的网络接入位置是否合理，当存在拥堵现象时，可以重新设计该区域及周边区域的网络结构，均衡网络负载
3. 同时访问的数量。了解网络中并发访问的情况，并发访问的最大值也就是网络的峰值，是考验网络负载能力的重要参数。通常该值超过网络负载能力时，就会出现问题，需要采取相应措施。可以借助一些工具（例如，网络分析仪）进行连续多天 24 小时全天候跟踪以进行分析
4. 每天的用户数。每天的用户数可以从一个侧面反映网络的负载和流量
5. 每次使用的时间。每次网络访问的持续时间将影响到整个模型的建立，对并发的流量预计有很大的影响，因为其必将对并发人数有影响
6. 每次数据传输的数据量，即每笔业务所产生的数据流量
7. 网络拥塞的时间段。可以针对网络拥塞的时间段所发生的数据流、用户数、业务类型进行重点分析，从而找到导致网络拥塞的症结所在
8. 采用的协议。不同的协议对网络的传输介质和使用的设备，及应用的规划会有不同方面的影响因素
9. 通信模式。对通信模式的分析，包括双工模式或单工模式、速度和通信地域范围等

结合对现有网络系统的调研与分析，并在其基础上进行新的网络规划，能够通过以下措施更有效地保证用户的原始投资：

1. 不要推倒重来，要基于现有设备的基础上进行升级和改造。
2. 将现有的设备降级使用（例如，将原有核心层设备降级为分层级使用等），并新增更先进的设备，以提高网络的性能

#### 网络规划原则

- 实用性原则
- 开放性原则
- 先进性原则

### 网络设计

#### 网络设计任务

- 确定网络总体目标
- 确定总体设计原则
- 通信子网设计
- 资源子网设计
- 设备选型
- 网络操作系统与服务器资源设备
- 网络安全设计

#### 网络逻辑结构设计

网络逻辑结构设计是体现网络设计核心思想的关键阶段，在这一阶段根据需求规范和通信规范，选择一种比较适宜的网络逻辑结构，并基于该逻辑结构实施后续的资源分配规划、安全规划等内容

此阶段最后应该得到一份逻辑网络设计文档，输出的内容包括以下几点：

1. 逻辑网络设计图
2. IP 地址方案
3. 安全方案
4. 具体的软件、硬件、广域网连接设备和基本的服务
5. 雇佣和培训新网络员工的具体说明
6. 初步对软件、硬件、服务、网络雇佣员工和培训的费用估计

#### 网络物理结构设计

物理网络设计是对逻辑网络设计的物理实现，通过对设备的具体物理分布、运行环境等的确定，确保网络的物理连接符合逻辑连接的要求。在这一阶段，网络设计者需要确定具体的软硬件、连接设备、布线和服务

如何购买和安装设备，由网络物理结构这一阶段的输出作指导，所以网络物理设计文档必须尽可能详细、清晰，输出的内容如下：

1. 物理网络图和布线方案
2. 设备和部件的详细列表清单
3. 软件、硬件和安装费用的估计
4. 安装日程表，用以详细说明实际和服务中断的时间及期限
5. 安装后的测试计划
6. 用户培训计划

#### 分层设计

为了能够更好地分析与设计复杂的大型互连网络，在计算机网络设计中，主要采用分层（分级）设计模型，它类似于软件工程中的结构化设计。通过一些通用规则来设计网络，就可以简化设计、优化带宽的分配和规划。在分层设计中，引入了三个关键层的概念，分别是核心层、汇聚层和接入层

- 接入层：主要针对用户端，实现用户接入、计费管理、MAC 地址认证、MAC 地址过滤、收集用户信息，可以使用集线器代替交换机
- 汇聚层：网络访问策略控制、数据包处理和过滤、策略路由、广播域定义、寻址
- 核心层：主要是高速数据交换，实现高速数据传输、出口路由、常用冗余机制

> 通常将网络中直接面向用户连接或访问的网络的部分称为接入层，将位于接入层和核心层之间的部分称为分布层或汇聚层

![网络工程-分层设计](/assets/note/qccstp/网络工程-分层设计.png)

### 网络实施

#### 网络实施原则

- 可靠性原则
- 安全性原则
- 高效性原则
- 可扩展性原则

#### 网络实施步骤

- 工程实施计划
- 网络设备到货验收
- 设备安装
- 系统测试
- 系统试运行
- 用户培训
- 系统转换

::: tip 网络接入技术

- 有线接入
  - 公用交换电话网络（Public Switched Telephone Network，PSTN）
  - 数字数据网（Data Direct Network，DDN）
  - 综合业务数字网（Integrated Services Digital Network，ISDN）
  - 非集成数字用户路线（ASDL）
  - 同轴光纤技术（Hybrid Fiber Coaxial，HFC）
- 无线接入
  - IEEE 802.11（WiFi）
  - IEEE 802.15（蓝牙，Bluetooth）
  - 红外（IrDA）
  - WAPI
- 3G/4G/5G
  - WCDMA/CDMA2000/TD-SCDMA
  - TD-LTE 和 FDD-LTE
  - WirelessMan-Advanced（802.16m）（WiMAX）

> - 无线局域网鉴别个保密基础结构（Wireless LAN Authentication and Privacy Infrastructure，WAPI）
> - 码分多址（Code Division Multiple Access，CDMA）
> - 宽带码分多址（Wideband Code Division Multiple Access，WCDMA）
> - 时分同步码分多址（Time Division-Synchronous Code Division Multiple Access，TD-SCDMA）
> - 长期演进技术（Long Term Evolution，LTE）
> - 时分双工（Time-division duplex，TDD）
> - 频分双工（Frequency-division duplex，FDD）

![网络接入技术-发展历程](/assets/note/qccstp/网络接入技术-发展历程.png)
:::

## 网络存储技术

### 直连式存储（Direct Attached Storage，DAS）

DAS 是将存储设备通过 SCSI（Small Computer System Interface，小型计算机系统接口）电缆直接连到服务器，其本身是硬件的堆叠，存储操作依赖于服务器，不带有任何存储操作系统。因此，有些文献也把 DAS 称为 SAS（Server Attached Storage，服务器附加存储）

由于 DAS 直接将存储设备连接到服务器上，这导致它在传递距离、连接数量、传输速率等方面都受到限制。因此，当存储容量增加时，DAS 方式很难扩展，这对存储容量的升级是一个巨大的瓶颈；另一方面，由于数据的读取都要通过服务器来处理，必然导致服务器的处理压力增加，数据处理和传输能力将大大降低；此外，当服务器出现宕机等异常状况时，也会波及存储数据，使其无法使用。目前 DAS 基本被 NAS 所代替

### 网络附加存储（Network Attached Storage，NAS）

采用 NAS 技术的存储设备不再通过 I/O 总线附属于某个特定的服务器，而是通过网络接口与网络直接相连，由用户通过网络访问

![网络存储技术-NAS](/assets/note/qccstp/网络存储技术-NAS.png)

NAS 存储设备类似于一个专用的文件服务器，它去掉了通用服务器的大多数计算功能，而仅仅提供文件系统功能，从而降低了设备的成本。并且为方便存储设备到网络之间能以最有效的方式发送数据，它专门优化了系统硬件与软件架构。NAS 以数据为中心，将存储设备与服务器分离，其存储设备在功能上完全独立于网络中的主服务器，客户机与存储设备之间的数据访问不再需要文件服务器的干预，同时它允许客户机与存储设备之间进行直接的数
据访问，所以不仅响应速度快，而且数据传输速率也很高

NAS 技术支持多种 TCP/IP 网络协议，主要是 NFS（Net File System，网络文件系统）和 CIFS（Common Internet File System，通用 Internet 文件系统）来进行文件访问，所以 NAS 的性能特点是进行小文件级的共享存取。在具体使用时，NAS 设备通常配置为文件服务器，通过使用基于 Web 的管理界面来实现系统资源的配置、用户配置管理和用户访问登录等

NAS 存储支持即插即用，可以在网络的任一位置建立存储。基于 Web 管理，从而使设备的安装、使用和管理更加容易。NAS 可以很经济地解决存储容量不足的问题，但难以获得满意的性能

### 存储区域网络（Storage Area Network，SAN）

SAN 是通过专用交换机将磁盘阵列与服务器连接起来的高速专用子网。它没有采用文件共享存取方式，而是采用块（block）级别存储。SAN 是通过专用高速网将一个或多个网络存储设备和服务器连接起来的专用存储系统，其最大特点是将存储设备从传统的以太网中分离出来，成为独立的存储区域网络

![网络存储技术-SAN](/assets/note/qccstp/网络存储技术-SAN.png)

#### FC SAN

FC（Fiber Channel，光纤通道）和 SCSI 接口一样，最初也不是为硬盘设计开发的接口技术，而是专门为网络系统设计的，随着存储系统对速度的需求，才逐渐应用到硬盘系统中。光纤通道的主要特性有：热插拔性、高速带宽、远程连接、连接设备数量大等。它是当今最昂贵和最复杂的存储架构，需要在硬件、软件和人员培训方面进行大量投资。

FC SAN 由三个基本的组件构成，分别是接口（SCSI、FC)、连接设备（交换机、路由器）和协议（IP、SCSI）。这三个组件再加上附加的存储设备和服务器就构成一个 SAN 系统。它是专用、高速、高可靠的网络，允许独立、动态地增加存储设备，使得管理和集中控制更加简化

FC SAN 有两个较大的缺陷，分别是成本高和复杂性，其原因就是因为使用了 FC。在光纤通道上部署 SAN，需要每个服务器上都要有 FC 适配器、专用的 FC 交换机和独立的布线基础架构。这些设施使成本大幅增加，更不用说精通 FC 协议的人员培训成本。

#### IP SAN

IP SAN 是基于 IP 网络实现数据块级别存储方式的存储网络。由于设备成本低，配置技术简单，可共享和使用大容量的存储空间，因而逐渐获得广泛的应用

在具体应用上，IP 存储主要是指 ISCSI（Internet SCSI）。作为一种新兴的存储技术，ISCSI 基于 IP 网络实现 SAN 架构，既具备了 IP 网络配置和管理简单的优势，又提供了 SAN 架构所拥有的强大功能和扩展性。ISCSI 是连接到一个 TCP/IP 网络的直接寻址的存储库，通过使用 TCP/IP 协议对 SCSI 指令进行封装，可以使指令能够通过 IP 网络进行传输，而过程完全不依赖于地点

ISCSI 优势的主要表现在于，首先，建立在 SCSI、TCP/IP 这些稳定和熟悉的标准上，因此安装成本和维护费用都很低；其次，ISCSI 支持一般的以太网交换机而不是特殊的光纤通道交换机，从而减少了异构网络和电缆；最后，ISCSI 通过 IP 传输存储命令，因此可以在整个 Internet 上传输，没有距离限制

ISCSI 的缺点在于，存储和网络是同一个物理接口，同时协议本身的开销较大，协议本身需要频繁地将 SCSI 命令封装到 IP 包中及从 IP 包中将 SCSI 命令解析出来，这两个因素都造成了带宽的占用和主处理器的负担。但是，随着专门处理 ISCSI 指令的芯片的开发（解决主处理器的负担问题），以及 10G 以太网的普及（解决带宽问题），ISCSI 将有着更好的发展

> Internet 小型计算机系统接口（Internet Small Computer System Interface，ISCSI）

::: tip 磁盘阵列技术（Redundant Arrays of Independent Disk，RAID）

- Raid0（条块化）：性能最高，并行处理，无冗余，损坏无法恢复
- Raid1（镜像结构）：可用性、可修复性好，仅有 50%利用率
- Raid0+1（Raid10）：Raid0 与 Raid1 长处的结合，高效也可靠
- Raid3（奇偶校验并行传送）：N+1 模式，有固定的校验盘，坏一个盘可恢复
- Raid5（分布式奇偶校验的独立磁盘）：N+1 模式，无固定的校验盘，坏一个盘可恢复
- Raid6（两种存储的奇偶校验）：N+2 模式，无固定的校验盘，坏两个盘可恢复

> - Raid0 和 Raid1  
>   ![网络存储技术-Raid0和Raid1](/assets/note/qccstp/网络存储技术-Raid0和Raid1.png)
>   - Raid0 磁盘利用率为 100%，访问速度最快
>   - Raid1 磁盘利用率为 50%，具备纠错能力
>   - 现在企业多采用 Raid0 与 Raid1 结合的方式
> - Raid5  
>    ![网络存储技术-Raid5](/assets/note/qccstp/网络存储技术-Raid5.png)
>   - Raid5 磁盘利用率为$\frac {n-1} n \text{(n为磁盘数量)}$，具备容错功能（计算有效容量时取阵列中最小容量来计算）

:::

## 综合布线

综合布线是一种模块化的、灵活性极高的建筑物内或建筑群之间的信息传输通道。通过它可使话音设备、数据设备、交换设备及各种控制设备与信息管理系统连接起来，同时也使这些设备与外部通信网络相连。它还包括建筑物外部网络或电信线路的连接点与应用系统设备之间的所有线缆及相关的连接部件。综合布线由不同系列和规格的部件组成，其中包括：传输介质、相关连接硬件（如配线架、连接器、插座、插头、适配器）及电气保护设备等

根据《综合布线系统工程设计规范》（GB50311-2007），综合布线系统可分为 7 个部分：工作区、配线子系统、干线子系统、建筑群子系统、设备间、进线间、管理

1. 工作区：一个独立的需要设置终端设备的区域宜划分为一个工作区。工作区应由配线子系统的信息插座模块延伸到终端设备处的连接缆线及适配器组成。
2. 配线子系统：配线子系统应由工作区的信息插座模块、信息插座模块至电信间配线设备的配线电缆和光缆、电信间的配线设备及设备缆线和跳线等组成。
3. 干线子系统：干线子系统应由设备间至电信间的干线电缆和光缆，安装在设备间的建筑物配线设备及设备缆线和跳线组成。
4. 建筑群子系统：建筑群子系统应由连接多个建筑物之间的主干电缆和光缆、建筑群配线设备及设备缆线和跳线组成。
5. 设备间：设备间是在每幢建筑物的适当地点进行网络管理和信息交换的场地。对于综合布线系统工程设计，设备间主要是用来安装建筑物配线设备。电话交换机、计算机主机设备及入口设施也可与配线设备安装在一起。
6. 进线间：进线间是建筑物外部通信和信息管线的入口部位，并可作为入口设施和建筑群配线设备的安装场地。
7. 管理：管理应对工作区、电信间、设备间、进线间的配线设备、缆线、信息插座模块等设施，按一定的模式进行标识和记录。

![综合布线-综合布线系统](/assets/note/qccstp/综合布线-综合布线系统.png)

## 物联网

物联网（The Internet of Things）是实现物物相连的互联网络，其内涵包含两个方面：

- 物联网的和性和基础忍让是互联网，是在互联网基础上延伸和扩展的网络
- 其用户端延伸和扩展到了任何物体与物体之间，使其进行信息交换和通信

### 物联网的层次结构

- 感知层：识别物体、采集信息。如：二维码、RFID、摄像头、传感器（温度、湿度）
- 网络层：传递信息和处理信息。通信网与互联网的融合网络、网络管理中心、信息中心和智能处理中心等
- 应用层：解决信息处理和人机交互的问题

### 物联网的相关领域与技术

#### 射频识别技术

射频识别技术（Radio Frequency Identification，RFID），又称电子标签，是一种通信技术，可通过无线电信号识别特定目标并读写相关数据，而无须识别系统与特定目标之间建立机械或光学接触

RFID 的基本组成部分通常包括标签、阅读器和天线

1. 标签（Tag）：由耦合元件及芯片组成，每个标签具有唯一的电子编码，附着在物体上标识目标对象
2. 阅读器（Reader）：读取（有时还可以写入）标签信息的设备，可设计为手持式或固定式
3. 天线（Antenna）：在标签和读取器间传递射频信号

#### 二维码

二维码（2-dimensional bar code）是用某种特定的几何图形按一定规律在平面（二维方向上）分布的记录数据符号信息的黑白相间的图形。在代码编制上巧妙地利用构成计算机内部逻辑基础的"0"、"1"比特流的概念，使用若干个与二进制相对应的几何形体来表示文字数值信息，通过图像输入设备或光电扫描设备自动识读以实现信息自动处理

二维条码中，常用的码制有 Data Matrix、Maxi Code、Aztec、QR Code、Vericode、PDF417、Ultracode、Code 49、Code 16K

以 PDF417 编码格式为例：

- 若采用扩展的字母数字压缩格式，可容纳 1850 个字符
- 若采用二进制/ASCII 格式，可容纳 1108 字节
- 若采用数字压缩格式，可容纳 2710 个数字

## 云计算

云计算是一种基于互联网的计算方式，通过这种方式，共享的软硬件资源和信息可以按需提供给计算机和其他设备。云其实是网络、互联网的一种比喻说法。云计算的核心思想，是将大量用网络连接的计算资源统一管理和调度，构成一个计算资源池向用户按需服务。提供资源的网络称为云。狭义云计算指 IT 基础设施的交付和使用模式，指通过网络以按需、易扩展的方式获得所需资源；广义云计算指服务的交付和使用模式，指通过网络以按需、易扩展的方式获得所需服务。这种服务可以是 IT 和软件、互联网相关，也可是其他服务

### 云计算的特点

1. 计算资源集成提高设备计算能力。云计算把大量计算资源集中到一个公共资源池中，通过租用的方式共享计算资源。虽然单个用户在云计算平台获得服务水平受到网络带宽等各因素影响，未必获得优于本地主机所提供的服务，但是从整个社会资源的角度而言，整体的资源调控降低了部分地区峰值荷载，提高了部分荒废的主机的运行率，从而提高了资源利用率
2. 分布式数据中心保证系统容灾能力。分布式数据中心可将云端的用户信息备份到地理上相互隔离的数据库主机中，甚至用户自己也无法判断信息的确切备份地点。该特点不仅仅提供了数据恢复的依据，也使得网络病毒和网络黑客的攻击失去目的性而变成徒劳，大大提高系统的安全性和容灾能力
3. 软硬件相互隔离减少设备依赖性。虚拟化层将云平台上方的应用软件和下方的基础设备隔离开来。技术设备的维护者无法看到设备中运行的具体应用。同时对软件层的用户而言基础设备层是透明的，用户只能看到虚拟化层中虚拟出来的各类设备。这种架构减少了设备依赖性，也为动态的资源配置提供可能
4. 平台模块化设计体现高可扩展性。目前主流的云计算平台均根据 SPI 架构在各层集成功能各异的软硬件设备和中间件软件。大量中间件软件和设备提供针对该平台的通用接口，允许用户添加本层的扩展设备。部分云与云之间提供对应接口，允许用户在不同云之间进行数据迁移。类似功能更大程度上满足了用户需求，集成了计算资源，是未来云计算的发展方向之一
5. 虚拟资源池为用户提供弹性服务。云平台管理软件将整合的计算资源根据应用访问的具体情况进行动态调整，包括增大或减少资源的要求。因此云计算对于在非恒定需求的应用，如对需求波动很大、阶段性需求等，具有非常好的应用效果。在云计算环境中，既可以对规律性需求通过事先预测事先分配，也可根据事先设定的规则进行实时公台调整。弹性的云服务可帮助用户在任意时间得到满足需求的计算资源
6. 按需付费降低使用成本。作为云计算的代表按需提供服务、按需付费是目前各类云计算服务中不可或缺的一部分。对用户而言，云计算不但省去了基础设备的购置运维费用，而且能根据企业成长的需要不断扩展订购的服务，不断更换更加适合的服务，提高了资金的利用率

### 云计算的类型

#### 软件即服务

软件即服务（Software-as-a-Service，SaaS）是基于互联网提供软件服务的软件应用模式。作为一种在 21 世纪开始兴起的创新的软件应用模式，SaaS 是软件科技发展的最新趋势

SaaS 提供商为企业搭建信息化所需要的所有网络基础设施及软件、硬件运作平台，并负责所有前期的实施、后期的维护等一系列服务，企业无须购买软硬件、建设机房、招聘 IT 人员，即可通过互联网使用信息系统。就像打开自来水龙头就能用水一样，企业根据实际需要，从 SaaS 提供商租赁软件服务

#### 平台即服务

平台即服务（Platform-as-a-Service，PaaS）是把服务器平台或者开发环境作为一种服务提供的商业模式，如将软件研发的平台作为一种服务，以 SaaS 的模式提交给用户。因此，PaaS 也是 SaaS 模式的一种应用。但是，PaaS 的出现可以加快 SaaS 的发展，尤其是加快 SaaS 应用的开发速度。早在 2007 年，国内外 SaaS 厂商就先后推出了自己的 PaaS 平台

PaaS 之所以能够推进 SaaS 的发展，主要在于它能够提供企业进行定制化研发的中间件平台，同时涵盖数据库和应用服务器等。PaaS 可以提高在 Web 平台上利用的资源数量

#### 基础设施即服务

基础设施即服务（Infrastructure as a Service，IaaS）是指消费者通过 Internet 可以从完善的计算机基础设施获得服务，如《纽约时报》就使用成百上千台 Amazon EC2 实例在 36 小时内处理 TB 级的文档数据。如果没有 EC2，《纽约时报》处理这些数据将要花费数天或者数月的时间

### 云计算的应用

#### 云安全

云安全（Cloud Security）是一个从"云计算"演变而来的新名词。云安全的策略构想是：使用者越多，每个使用者就越安全，因为如此庞大的用户群，足以覆盖互联网的每个角落，只要某个新木马病毒出现，就会立刻被截获

"云安全"通过网状的大量客户端对网络中软件行为的异常监测，获取互联网中木马、恶意程序的最新信息，推送到 Server 端进行自动分析和处理，再把病毒和木马的解决方案分发到每一个客户端

#### 云存储

应用云存储是在云计算概念上延伸和发展出来的一个新的概念，是指通过集群应用、网格技术或分布式文件系统等功能，将网络中大量各种不同类型的存储设备通过应用软件集合起来协同工作，共同对外提供数据存储和业务访问功能的一个系统。当云计算系统运算和处理的核心是大量数据的存储和管理时，云计算系统中就需要配置大量的存储设备，那么云计算系统就转变成为一个云存储系统，所以云存储是一个以数据存储和管理为核心的云计算系
统

#### 云呼叫

应用云呼叫中心是基于云计算技术而搭建的呼叫中心系统，企业无须购买任何软、硬件系统，只需具备人员、场地等基本条件，就可以快速拥有属于自己的呼叫中心，软硬件平台、通信资源、日常维护与服务由服务器商提供。具有建设周期短、投入少、风险低、部署灵活、系统容量伸缩性强、运营维护成本低等众多特点；无论是电话营销中心还是客户服务中心，企业只需按需租用服务，便可建立一套功能全面、稳定、可靠、座席可分布全国各地，全国呼叫接入的呼叫中心系统

#### 云会议

应用云会议是基于云计算技术的一种高效、便捷、低成本的会议形式。它是视频会议与云计算的完美结合，带来了最便捷的远程会议体验。使用者只需通过互联网界面，进行简单易用的操作，便可快速高效地与全球各地团队及客户同步分享语音、数据文件及视频，而会议中数据的传输、处理等复杂技术由云会议服务商帮助使用者进行操作。目前国内云会议大多以 SaaS 模式为主体，其服务内容包括电话、网络、视频等形式
