---
title: 计算机组成与结构
date: 2021-02-24
---

## 数据的表示

### 进制转换

#### R 进制转十进制

按权展开法: 将 R 进制数的每一位值用 R^k 形式表示,即幂的底数是 R,指数为 k. k 与该位和小数点之间的距离有关. 设该位与小数点之间的数码的个数为 n,则位于小数点左边时 k 为正数(n-1),右边为负数(-n)

例如二进制转十进制

$$ 10100.01 \to 1 \times 2^4 + 0 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 0 \times 2^0 + 0 \times 2^{-1} + 1 \times 2^{-2} $$

#### 十进制转 R 进制

短除法

#### 二进制转八进制与十六进制

- 二进制 → 八进制 : 每 3 个数一段（$2^3 = 8$）, 不足补 0
  $$ \textcolor{red}{0}10001110 \to 2^1|2^0|2^2+2^1 \to 2|1|6 \to 216 $$
- 二进制 → 十六进制 : 每 4 个数一段（$2^4 = 16$）, 不足补 0 , 十进制转十六进制时, 10,11,12,13,14,15,16 分别对应 A,B,C,D,E,F
  $$ 10001110 \to 2^3|2^3+2^2+2^1+2^0 \to 8|15 \to 8E $$

### 机器数和真值

#### 机器数

一个数在计算机中的二进制表示形式, 叫做这个数的机器数. 机器数是带符号的, 在计算机用一个数的最高位存放符号, 正数为 0, 负数为 1

比如, 十进制中的数 +3 , 计算机字长为 8 位, 转换成二进制就是 00000011. 如果是 -3 , 就是 10000011

那么, 这里的 00000011 和 10000011 就是机器数

#### 真值

因为第一位是符号位, 所以机器数的形式值就不等于真正的数值. 例如上面的有符号数 10000011, 其最高位 1 代表负, 其真正数值是 -3 而不是形式值 131（10000011 转换成十进制等于 131）. 所以, 为区别起见, 将带符号位的机器数对应的真正数值称为机器数的真值

例：0000 0001 的真值 = +000 0001 = +1, 1000 0001 的真值 = –000 0001 = –1

### 码制

#### 原码

原码就是符号位加上真值的绝对值, 即用第一位表示符号, 其余位表示值, 原码不能直接计算

数据范围: $-(2^{n-1}-1) \sim 2^{n-1}-1$

#### 反码

正数的反码是其本身, 负数的反码是在其原码的基础上, 符号位不变, 其余各个位取反

数据范围: $-(2^{n-1}-1) \sim 2^{n-1}-1$

#### 补码

正数的补码就是其本身, 负数的补码是在其原码的基础上, 符号位不变, 其余各位取反, 最后+1. (即在反码的基础上+1)

数据范围: $-2^{n-1} \sim 2^{n-1}-1$

#### 移码

补码的基础上首位取反

::: tip

- 取值范围中, 当机器字长 n=8 时,原码、反码范围为-127\~127;补码范围-128\~127
- 正数的原码、反码、补码相同
- 人为定义 10000000 是-128 的补码

:::

### 浮点数

$$ N = M \times R^e $$

其中 M 称为尾数, e 为阶码, R 为基数. 阶码决定表示范围, 位数越多范围越大；尾数决定有效精度, 位数越多精度越高

运算: 先对阶（小阶 → 大阶, 小数的尾数右移） => 尾数计算（0.5≤M ＜ 1） => 结果格式化

## 计算机结构

$$ \text{主机} = \text{主存储器} + \text{CPU}(\text{运算器} + \text{控制器}) $$

### 运算器

- 算术逻辑单元 ALU：数据的算数运算和逻辑运算
- 累加寄存器 AC：通用寄存器, 为 ALU 提供一个工作区, 用在暂存数据
- 数据缓冲寄存器 DR：写内存时, 暂存指令或数据
- ==状态条件寄存器 PSW==：存储计算过程中的标记位与控制标志（争议：也有将其归为控制器的）

### 控制器

- 程序计数器 PC：存储下一条要执行的指令的地址
- 指令寄存器 IR：存储即将执行的指令
- 指令译码器 ID：对指令中的操作码字段进行分析解释
- 时序部件：提供时序控制信号

## Flynn 分类法

|                       | 结构                                       | 关键特性                               | 代表                                             |
| --------------------- | ------------------------------------------ | -------------------------------------- | ------------------------------------------------ |
| 单指令流单数据流 SISD | 一个控制器<br/>一个处理器<br/>一个主存模块 |                                        | 单处理系统                                       |
| 单指令流多数据流 SIMD | 一个控制<br/>多个处理器<br/>多个主存模块   | 各处理器以异步的形式执行同一条指令     | 并行处理机<br/>==阵列处理机==<br/>超级向量处理机 |
| 多指令流单数据流 MISD | 多个控制<br/>一个处理器<br/>多个主存模块   | 被证明不可能,至少是不实际              | 目前没有, 有文献称==流水线计算机==为此类         |
| 多指令流多数据流 MIMD | 多个控制<br/>多个处理器<br/>多个主存模块   | 能够实现作业、任务、指令等各级全面并行 | 多处理机系统<br/>多计算机                        |

## CISC 与 RISC

| 指令系统类型 | 指令                                                                                            | 寻址方式   | 实现方式                                                           | 其他                      |
| ------------ | ----------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------ | ------------------------- |
| CISC(复杂)   | 数量==多==,使用频率差别大,可变长格式                                                            | 支持多种   | 微程序控制技术(微码)                                               | 研制周期长                |
| RISC(精简)   | 数量==少==,==使用频率接近==,定长格式,大部分为单周期指令,==操作寄存器==,只有 Load/Store 操作内存 | 支持方式少 | ==增加了通用寄存器==<br/>硬布线逻辑控制为主<br/>==适合采用流水线== | 优化编译,有效支持高级语言 |

## 流水线技术

流水线是指在程序执行时多条指令重叠进行操作的一种准并行处理实现技术

指令流水线:取指 → 分析 → 执行

流水线周期为执行时间最长的一段

### 流水线计算公式

k 为流水线的阶段数,Δt 为周期

- 理论公式:(t1+t2+…+tk) + (n-1)\*Δt
- 实践公式:(k+n-1)\*Δt

::: tip

- 流水线吞吐率(Though Put rate, TP)指单位时间内流水线所完成的任务数量或输出结果数量.最大吞吐率为 1/Δt
- 流水线加速比 S = 顺序执行时间 / 流水线执行时间
- 流水线的效率是指流 水线的设备利用率. E = n 个任务占用的时空区 / k 个流水段的总的时空区

:::

## 存储系统

### 层次化存储结构

CPU, Cache, 内存(主存), 外存(辅存), 存储速度依次降低

#### Cache

提高 CPU 数据输入输出的速率, 突破冯·诺依曼瓶颈, 即 CPU 与存储系统间数据传送带宽限制

cache 映射方式

- 直接相连映像：电路简单, 冲突率高
- 全相连映像：电路南与设计和实现, 只适合小容量的 cache, 冲突率较低
- 组相连映像：直接相连和全相连的折中

### 局部性原理

- 时间局部性：指程序中的某条指令一旦执行, 不久以后该指令可能再次执行, 典型原因是由于程序中存在大量循环操作
- 空间局部性：指一旦程序访问了某个存储单元, 不久以后其附近的存储单元也将被访问, 即程序在一段时间内所访问的地址可能集中在一定的范围内, 其典型情况是程序顺序执行
- 工作集理论：工作集是进程运行时被频繁访问的页面集合

#### 主存

分类:

- 随机存储存储器: RAM
- 只读存储器: ROM

编址:

#### 磁盘

存取时间 = 寻道时间 + 等待时间(平均定位时间+转动延迟 )

#### 磁盘与 RAID

RAID （廉价冗余磁盘阵列）是指将多个独立的物理磁盘组成一个独立的逻辑盘, 数据在多个物理盘上分割交叉存储、并行访问, 具有更好的存储性能、可靠性和安全性

RAID 分级如下

- RAID0: 冗余和无校验的磁盘阵列
- RAID1: 镜像磁盘阵列
- RAID2: 采用纠错的海明码的磁盘阵列
- RAID3: 位交叉奇偶校验的磁盘阵列
- RAID4: 块交叉奇偶校验的磁盘阵列
- RAID5: 无独立校验的奇偶校验磁盘阵列

RAID0 把连续多个数据块交替地存放在不同的物理磁盘的扇区中, 几个磁盘交叉并行读写, 不仅扩大了容量, 而且提高了磁盘数据存取速度, 但 RAID0 没有容错能力

RAID1 是为了提高可靠性, 使两个磁盘同时进行读写, 互为备份, 如果一个磁盘出现故障, 可以从另一个磁盘中读出数据. 两个磁盘当一个磁盘使用, 意味着容量减少一半

RAID 通过同时使用多个磁盘, 提高了传输率; 通过在多个磁盘上并行存取来大幅提高吞吐量; 通过镜像功能, 提高了安全可靠性; 通过数据校验, 提高容错能力

## 总线系统

根据总线所处位置不同,分成三类:

- 内部总线
- 系统总线: 数据总线/地址总线/控制总线
- 外部总线

## 可靠性

可靠性的计算公式

- 串联可靠性: $R = R_1 \times R_2 \times \dots R_n$
- 并联可靠性: $R = 1 - (1 - R_1) \times (1-R_2) \times \dots \times (1-R_n)$

## 校验码

### 循环校验码 CRC

可以检错不能纠错 -> 模 2 除法

生成多项式: $x^4+x^3+x+1 \to \textcolor{red}{1} \times x^4 + \textcolor{red}{1} \times x^3 + \textcolor{red}{0} \times x^2 + \textcolor{red}{1} \times x^1 + \textcolor{red}{1} \times x^0 \to 11011$

### 海明校验码

$2^r ≥ x+r+1$, r 为校验位的个数,x 为信息位个数

## 补充

基本输入输出系统 BIOS(Basic Input Output System)是一组固化到计算机内主板上一个 ROM 芯片上的程序, 它保存着计算机最重要的基本输入输出的程序、开机自检程序和系统自启动程序, 它可以从 CMOS 中读写系统设置的具体信息

---

奇偶校验只能查错不能纠错, 如果奇数/偶数个数据位发生错误, 才能发现错误

---

加密技术

- `对称加密`：又称`共享密钥加密`, 常见对称加密算法有：`DES`、`三重DES`、`RC-5`、`IDEA`、`AES`等
- `非对称加密`：又称`公开密钥加密`, 常见公钥加密算法有：`RSA`、`ElGamal`、`背包算法`、`Rabin（RSA的特例）`、`DSA`等. DSA 数字签名, 也称公钥数字签名

---

计算机病毒具有隐蔽性、传染性、潜伏性、触发性和破坏性等特性

---

显示器的主要参数

| 参数指标             | 说明                                                                                                                                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 分辨率               | 显示器所能表示的像素个数                                                                                                                                  |
| 灰度级（或颜色深度） | 黑白显示器中像素点亮暗的差别: 灰度级为 8 位, 可显示 256 种亮度的像素<br/>彩色显示器中像素点颜色的不同: 色深为 8 位, 可显示 256 种颜色的像素               |
| 刷新频率             | 单位时间内扫描整个屏幕内容的次数                                                                                                                          |
| 显示存储器           | 一帧图像存储在刷新存储器中, 其存储容量由图像分辨率和灰度级决定<br/>VRAM 容量 = 分辨率 x 灰度级位数<br/>VRAM 带宽 = 分辨率 x 灰度级位数 x 刷新频率（帧频） |
