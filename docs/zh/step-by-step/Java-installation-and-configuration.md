---
title: Java的安装预配置
date: 2022-11-17
---

## 下载

### 版本说明

下载 Java 之前先简单了解下 Java 的版本

- JavaSE（Java Platform, Standard Edition）Java标准版
- JavaME（Java Platform, Micro Edition）Java微型版
- JavaEE（Java Platform, Enterprise Edition）Java企业版

Java 是面向对象的编程语言，一般来说 Java 这个单词其实指的是 Java开发工具，也就是 JDK(Java Development Kit)。所以我们常常讨论到安装 Java8 \ JDK8 \ JDK1.8 \ J2SE 8 \ J2SE 1.8 \ Java SE 1.8 \ Java SE 8，其实这几个东西说的都是同一个概念，只是在 Java 的发展历程中不同阶段的不同叫法而已

### 版本选择

这个其实不用考虑，首选标准版；再一个需要注意的就是`LTS（Long Term Support）`版本，也就是长期支持版本。就 Oracle 顶级支持而言，非 LTS 版本被视为最新 LTS 版本的一组累积实施增强功能。新功能版本发布后，任何以前的非 LTS 版本都将被视为被取代，[查看 Oracle Java SE 支持路线图](https://www.oracle.com/java/technologies/java-se-support-roadmap.html)，这里选择 JDK 8

首先打开 [Oracle 的官网](https://www.java.com/zh-CN/)，这里不要点中间`下载Java`那个，这里下的应该是JRE（Java Runtime Environment），看到页面下面的*您是要寻找JDK下载的软件开发人员吗?*，在这一行的最后有`Java SE 开发工具包`，点击这个去下载页面，然后根据平台选择对应的安装包下载即可

> 下载需要准备一个 Oracle 的账号，没有的话自己注册一下，超简单

::: tip 历史版本

可以在[此处](https://www.oracle.com/java/technologies/downloads/archive/)找到 Java 的历史版本

需要注意的是，Oracle 在 JDK 8u211 级以上版本修改了开源协议，==使用 JDK 8u211 及以上版本进行商业性质（盈利目的）的应用或工具的开发要收费==，推荐下载 JDK 8u201

> 从2014年10月发布Java SE 7 Update 71(Java SE 7u71)开始，Oracle在发布Oracle JDK关键补丁更新(CPUs：Critical Patch Updates)的同时一般会发布相应的补丁集更新(PSUs：Patch Set Updates)。其中Oracle JDK关键补丁更新(CPUs)包含安全漏洞修复和重要漏洞修复，Oracle强烈建议所有Oracle JDK用户及时升级到最新的CPU版本，Oracle JDK 关键补丁更新(CPUs)版本号采用奇数编号。Oracle JDK补丁集更新(PSUs)包含相应CPUs中的所有修复以及其他非重要修复，仅当受到Oracle JDK关键补丁更新(CPUs)版本之外的其他漏洞的影响时才应当使用相应的补丁集更新 (PSUs)，Oracle JDK补丁集更新(PSUs)版本号采用偶数编号。因此，一般情况下我们只要下载奇数编号的最新版本更新就行了

:::

## 安装

双击可执行文件（就是上一步下载的文件），如果C盘容量超大，那么一直点击下一步就好了；如果C盘容量不那么富裕，那么在下面这一步的时候选择更改，另选一个路径

![java-install](/assets/sbs/java-install.png)

在 JDK 安装完成后，安装程序会自动弹窗继续安装 JRE [^first]，此时可以选择取消安装，也可以选择安装，跟 JDK 一样的安装流程即可

[^first]: JDK 11 之后的版本应该都不会再弹框了，只需要一次安装即可（JDK 10 我也下不下来不清楚还会不会）

## 配置

### JAVA_HOME

JAVA_HOME 指向的是 Java 的安装路径，该路径下包含 bin、lib 等目录

#### 配置方式

在系统环境变量下新建一个变量，变量名为`JAVA_HOME`，变量值为本机安装 Java 的路径，如`D:\Program Files\Java\jdk1.8.0_201`

> 一般来说这个环境变量在不与其他环境变量名称冲突的前提下随便叫什么都行，不一定要用 JAVA_HOME（甚至都可以不配置），但是为了方便识别以及后续升级版本，还是配置一下比较好。如果手动升级版本，只需要卸载旧版本，安装新版本，然后把 JAVA_HOME 的值指向新的安装路径即可

### PATH

PATH 在Windows的环境变量里面本来就有，只需要在其中添加 Java 相关的路径即可

#### 配置方式

1. 如果之前配置了 JAVA_HOME 环境变量，那么编辑 PATH，在其末尾添加`;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin`（如果在最开始加的，那就把开头的`;`移到末尾即可）
2. 如果没有配置 JAVA_HOME 环境变量，那么编辑 PATH，在其末尾添加`;D:\Program Files\Java\jdk1.8.0_201\bin;D:\Program Files\Java\jdk1.8.0_201\jre\bin`（如果在最开始加的，那就把开头的`;`移到末尾即可）

### CLASSPATH

CLASSPATH 直译过来是类路径，是Java环境配置中要设置的一个环境变量，其实就是 *.class 文件的路径，表示 JVM 从哪里去寻找要运行的 class 文件

::: tip 注意
1. 如果是 Java5 以后的版本，这个环境变量可以不用配置了，因为在 Java5 中，Sun 公司改进了 JDK设计，JRE会自动搜索当前路径下的 jar 包，并自动加载 dt.jar 和 tools.jar
2. 如果是 Java11 以后的版本，这里只需要配置`%JAVA_HOME%\bin`
:::

#### 配置方式

在系统环境变量下新建一个变量，变量名为`CLASSPATH`，变量值为`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar`

其中被`;`分成了3个部分

- 第一部分是指当前目录，也就是告诉 JVM 在当前目录寻找 class 文件
- 第二部分是 dt.jar ，是运行环境类库，主要是 Swing 的包（通过解压工具一看就知道了），如果过开发没有Swing的包，可以不用添加
- 第三部分是 tool.jar，顾名思义是工具类库，但是它跟我们用到的基础类库没有关系。它是 bin 下各个 exe 执行文件的实现

## 验证

使用`win+R`，输入`cmd`打开 Windows 命令行工具，随后输入`java -version`并回车，如果没有意外的话应该能看到如下回显

```shell
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

如果本机安装了多个 Java 版本且这里的回显并不是配置的 Java 版本，说明回显上的版本配置的 PATH 的优先级（先后顺序）是高于手动配置的，那么去 PATH 里面找一下在配置的 JAVA_HOME 之前有没有类似`xxx\Common Files\Oracle\Java\javapath`这样的配置，有的话删掉再保存就可以了

至此，完成
