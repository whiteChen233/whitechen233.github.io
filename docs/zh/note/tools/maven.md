---
title: Apache Maven
date: 2023-02-27
---

## Maven 是什么

![Maven](https://maven.apache.org/images/maven-logo-black-on-white.png)

::: info What is Maven ?
Maven, a Yiddish word meaning accumulator of knowledge, began as an attempt to simplify the build processes in the Jakarta Turbine project. There were several projects, each with their own Ant build files, that were all slightly different. JARs were checked into CVS. We wanted a standard way to build the projects, a clear definition of what the project consisted of, an easy way to publish project information, and a way to share JARs across several projects.

—— Maven 官网是这么 [介绍](https://maven.apache.org/what-is-maven.html#introduction) 自己的
:::

Apache Maven 是一个软件项目管理和理解工具. 基于项目对象模型的概念（POM）, Maven 可以从一个中心信息中管理项目的构建, 报告和文档

Maven 只需要做一些简单的配置, Maven 就可以自动完成项目的编译、测试、打包、发布以及部署等工作

### 约定优于配置

约定优于配置（Convention Over Configuration）其是 Maven 最核心的设计理念之一, Maven 对项目的目录结构、测试用例命名方式等内容都做了规定, 凡是使用 Maven 管理的项目都必须遵守这些规则

Maven 项目构建过程中, 会自动创建默认项目结构, 开发人员仅需要在相应目录结构下放置相应的文件即可

## POM 是什么

POM 全称是 Project Object Model, 即项目对象模型, 它是保存在名为 `pom.xml` 文件中的 Maven 项目的表现形式

POM 中定义了项目的基本信息, 用于描述项目如何构建、声明项目依赖等等, `pom.xml` 文件一般长这样:

```xml {4}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion> <!-- modelVersion包含4.0.0. 这是当前唯一受支持的POM版本, 并且始终是必需的 -->
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <name>demo</name>
  <description>Demo project</description>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
          <encoding>UTF-8</encoding>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

## POM 基础知识

### Maven 坐标

说到坐标, 最熟悉的定义应该是来自平面几何, 即在一个平面坐标系中, 坐标（x, y）表示距离 x 轴为 y, 距离 y 轴距离为 x 的点, 任何一个坐标都能够唯一标识该平面上的一个点

在现实的生活中同样存在着很多坐标, 例如地址, 就可以通过国家、省、市、县、乡镇、村、门牌号等一些列信息唯一地标识一个地址

Maven 规定: `groupId:artifactId:version` 都是必填字段（尽管如果 groupId 和 version 是从父级继承的, 则不需要显式定义它们）, 只要用户提供了正确的坐标元素, Maven 就能找到对应的构件

- **groupId**: Maven 项目隶属的组织或公司, 通常是唯一的. 它的取值一般是项目所属公司或组织的网址或 URL 的反写, 例如 `io.github.whitechen233`
- **artifactId**: Maven 项目的名称, 项目的唯一的标识符, 对应项目根目录的名称
- **version**: Maven 项目的版本

### Maven 构件

在 Maven 中, 任何一个依赖、插件或者项目构建的输出, 都可以称为 **构件**

每个构件都有自己的唯一标识(唯一坐标), 由 groupId, artifactId, 和 version 等信息构成, 由此, Maven 就可以对构件进行版本控制、管理

可以通过以下网站搜索可用的构件:

- [Maven Repository](https://mvnrepository.com)
- [Maven Central Repository](https://central.sonatype.dev)
- [Package Search](https://package-search.jetbrains.com)

Maven 的一个强大方面是它对项目关系的处理: 这包括依赖关系（和传递依赖关系）、继承和聚合（多模块项目）

依赖关系管理有着悠久的传统, 除了最琐碎的项目之外, 任何事情都是一团糟。随着依赖树变得庞大而复杂, 其中一个系统上的依赖项版本不等同于开发的版本, 要么是给定的错误版本, 要么是名称相似的 jar 之间的版本冲突

Maven 通过一个通用的本地存储库解决了这两个问题, 从中可以正确链接项目, 版本和所有内容

## POM 关系

### 依赖

POM 的基石是其依赖关系列表, 大多数项目依赖于其他项目来正确构建和运行.Maven 下载并链接编译的依赖关系, 以及其他需要它们的目标, Maven 引入了这些依赖关系（传递依赖关系）的依赖关系, 开发人员仅需要关注项目所需的依赖关系

POM 中通过 `<dependencies/>` 的子标签 `<dependency/>` 来声明依赖

比如, 下面这段 junit 的依赖配置

```xml
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <type>jar</type>
    <scope>test</scope>
    <optional>true</optional>
  </dependency>
</dependencies>
```

以上配置中的各个标签的含义:

- groupId, artifactId, version: Maven 坐标
  - groupId, artifactId: 直接对应依赖项的坐标
  - version: _依赖版本需求规范_, 用于计算依赖项的有效版本
- classifier: 分类器区分从同一 POM 构建但内容不同的工件. 它是一些可选的任意字符串（如果存在）, 将附加到版本号之后的项目名称中. 举个栗子: 一个构件提供了一个针对 jdk11 的版本, 同时也提了一个 jdk8 的版本, 那么第一个就可以配置 `<classifier>jdk11</classifier>`, 第二个可以配置`<classifier>jdk8</classifier>`, 以便区分使用哪个
- type: 所选的依赖项类型, 默认为 `jar`. 通常表示依赖项文件名上的扩展名
- scope: 此元素指的是手头任务的类路径（编译和运行时、测试等）以及如何限制依赖项的可传递性
  - compile: 这是默认范围, 如果未指定则使用, 编译依赖项在所有类路径中都可用. 此外, 这些依赖项会传播到依赖项目
  - provided: 如果希望 JDK 或容器在运行时提供它. 它仅在编译和测试类路径上可用, 并且不是可传递的
  - runtime: 此范围表示编译不需要依赖项, 而是执行需要依赖项. 它在运行时和测试类路径中, 但不在编译类路径中
  - test: 此范围表示应用程序的正常使用不需要依赖项, 并且仅适用于测试编译和执行阶段. 它不是可传递的
  - system: 与 `provided` 的作用域类似, 但必须提供显式包含它的 JAR. 构件始终可用, **不会在存储库中查找**
- systemPath: 用来指定依赖的绝对路径. **仅当依赖项范围为 `system` 时才使用**, 否则即便设置也不会生效
- optional: 当此项目本身是依赖项时, 将依赖项标记为可选. 其实就是告诉其他项目, 在使用该项目时, 不需要此依赖项即可正常工作

::: tip 依赖作用范围

classpath 用于指定 `.class` 文件存放的位置, 类加载器会从该路径中加载所需要的 `.class` 文件到内存中

Maven 在编译、执行测试、实际运行有不同的 classpath:

- **编译 classpath**: 编译代码有效
- **测试 classpath**: 编译、运行测试有效
- **运行 classpath**: 项目运行时有效

:::

#### 依赖版本规范

`<dependency/>` 的 `<version/>` 标签定故意版本要求, 支持的语法:

- `1.0`: 对 1.0 的软需求, 如果依赖树的前面没有其他版本出现, 请使用 1.0
- `[1.0]`: 对 1.0 的硬性要求, 使用 1.0 并且只使用 1.0
- `(,1.0]`: 任何版本<=1.0 的硬要求
- `[1.2,1.3]`: 对包含 1.2 和 1.3 之间的任何版本的硬要求
- `[1.0,2.0)`: 1.0<=x<2.0；对 1.0（包括）和 2.0（不包括）之间的任何版本的硬要求
- `[1.5,)`: 任何大于或等于 1.5 的版本的硬要求
- `(,1.0],[1.2,)`: 任何版本小于或等于 1.0 大于或等于 1.2, 但不是 1.1 的硬要求, 多个要求用逗号分隔
- `(,1.1),(1.1,)`: 对除 1.1 之外的任何版本的硬要求；例如, 因为 1.1 存在严重漏洞

Maven 选择满足该项目依赖项的所有硬要求的每个项目的最高版本. 如果没有版本满足所有硬要求, 则构建失败

::: tip
依赖版本制定是有规范的, 详情请参考[官网](https://maven.apache.org/pom.html#version-order-specification)说明
:::

#### 依赖冲突

- 项目使用同一个 groupId:artifactId 时, 只能使用一个 version

```xml
<dependencies>
  <dependency>
    <groupId>io.github.whitechen233</groupId>
    <artifactId>flyway-dm-support</artifactId>
    <version>1.0-RELEASE</version>
  </dependency>
  <!-- 最终使用的是这个版本的依赖 -->
  <dependency>
    <groupId>io.github.whitechen233</groupId>
    <artifactId>flyway-dm-support</artifactId>
    <version>1.0.1-RELEASE</version>
  </dependency>
</dependencies>
```

若相同类型但版本不同的依赖存在于同一个 pom 文件, 只会引入后一个声明的依赖

- 项目的两个依赖同时引入了某个依赖

Maven 在遇到这种问题的时候, 会遵循 `路径最短优先` 和 `声明顺序优先` 两大原则. 解决这个问题的过程也被称为 **Maven 依赖调解**

- **路径最短优先**: 依赖的层次路径越短的优先
- **声明顺序优先**: 如果路径长度一样, 那么先声明的优先

#### 排除依赖

可以使用 `exclusions` 排除包含一个或多个 `exclusion` 元素, 每个元素都包含一个 groupId 和 artifactId, 表示要排除的依赖. 与可能安装或不安装和使用的可选不同, 排除主动将自己从依赖树中删除

```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <version>xxx</version>
    <exclusions>
      <exclusion>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-logging</artifactId>
        <version>xxx</version>
      </exclusion>
    </exclusions>
  </dependency>
</dependencies>
```

### 继承

Maven 为构建管理带来的一个强大补充是项目继承的概念, 尽管在构建系统中可以模拟 Ant 继承, 但 Maven 在项目对象模型中显式地执行了项目继承

```xml {7}
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.github.whitechen233</groupId>
  <artifactId>demo-parent</artifactId>
  <version>1.0.0</version>
  <packaging>pom</packaging>
</project>
```

对于 _父项目_ 和 _聚合（多模块）_ 项目, packaging 类型需要是 pom. 这些类型定义了绑定到一组生命周期阶段的目标。例如, 如果打包是 jar, 那么 package 阶段将执行 jar:jar 目标。现在我们可以向父 POM 添加值, 它将由其子级继承

来自父 POM 的大多数元素都由其子级继承:

- groupId
- version
- description
- url
- inceptionYear
- organization
- licenses
- developers
- contributors
- mailingLists
- scm
- issueManagement
- ciManagement
- properties
- dependencyManagement
- dependencies
- repositories
- pluginRepositories
- build
  - plugin executions with matching ids
  - plugin configuration
  - etc.
- reporting
- profiles

#### Super POM

与面向对象程序设计中的对象继承类似, 扩展父 POM 的 POM 从该父 POM 继承某些值. 此外, 正如 Java 对象最终继承自 `java.lang.Object` 一样, 所有项目对象模型都继承自基本的 Super POM

可以通过创建一个最小的 pom.xml 并在命令行上执行来查看 Super POM 如何影响项目对象模型: `mvn help:effective-pom`

#### 依赖管理

除了继承某些顶级元素之外, 父级元素还可以配置子 POM 和传递依赖项的值, `dependencyManagement` 就是其中之一

### 聚合（多模块）

有模块的项目称为多模块或聚合项目, 模块是此 POM 列出并作为一个组执行的项目, pom 打包项目可以通过将一组项目列为模块来聚合它们的构建, 模块是这些项目的目录或 POM 文件的相对路径

多模块管理简单地来说就是将一个项目分为多个模块, 每个模块只负责单一的功能实现, 多模块项目由管理一组子模块的聚合器 POM 构建

一个多模块的父类 pom.xml 如下（注意高亮部分）:

```xml {8,16-23}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>pom</packaging>
  <name>demo</name>
  <description>Demo project for Spring Boot</description>

  <properties>
    <java.version>1.8</java.version>
  </properties>

  <modules>
    <module>demo-api</module>
    <module>demo-dao</module>
    <module>demo-manager</module>
    <module>demo-service</module>
    <module>demo-web</module>
    <module>start</module>
  </modules>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <source>1.8</source>
          <target>1.8</target>
          <encoding>UTF-8</encoding>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

其子模块的 pom.xml 如下:

```xml {5-10}
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.example</groupId>
        <artifactId>demo</artifactId>
        <version>0.0.1-SNAPSHOT</version>
        <relativePath>../pom.xml</relativePath>
    </parent>
    <artifactId>demo-api</artifactId>
    <version>0.0.1-SNAPSHOT</version>
</project>
```

## Maven 插件

Maven 实际上是一个依赖插件执行的框架, 它执行的每个任务实际上都由插件完成的. Maven 的核心发布包中并不包含任何 Maven 插件, 它们以独立构件的形式存在, 只有在 Maven 需要使用某个插件时, 才会去仓库中下载

Maven 提供了如下 2 种类型的插件:

- Build plugins: 在项目构建过程中执行, 在 pom.xml 中的 `<build/>` 元素中配置
- Reporting plugins: 在网站生成过程中执行, 在 pom.xml 中的 `<reporting/>` 元素中配置

除了 Maven 自带的插件之外, 还有一些三方提供的插件比如:

- jacoco-maven-plugin: 单测覆盖率插件
- maven-checkstyle-plugin: 帮助开发检测代码中不合规范的地方的插件
- sonar-maven-plugin: 分析代码质量的

### 插件目标

对于 Maven 插件而言, 为了提高代码的复用性, 通常一个 Maven 插件能够实现多个功能, 每一个功能都是一个插件目标, 即 Maven 插件是插件目标的集合. 我们可以把插件理解为一个类, 而插件目标是类中的方法, 调用插件目标就能实现对应的功能

#### 通用写法

插件目标的通用写法如下

```text
[插件名]:[插件目标]
```

例如, maven-compiler-plugin 插件的 compile 目标的通用写法如下

```text
maven-compiler-plugin:compiler
```

#### 执行插件目标

使用 Maven 命令执行插件的目标, 语法如下

```shell
mvn [插件名]:[目标名]
```

例如, 调用 maven-compiler-plugin 插件的 compile 目标, 命令如下

```shell
mvn compiler:compile
```

### 插件绑定

为了完成某个具体的构建任务, Maven 生命周期的阶段需要和 Maven 插件的目标相互绑定

#### 内置绑定

Maven 默认为一些核心的生命周期阶段绑定了插件目标, 当用户调用这些阶段时, 对应的插件目标就会自动执行相应的任务

<table>
<thead>
  <tr>
    <td>生命周期</td>
    <td>阶段</td>
    <td>插件目标</td>
    <td>执行的任务</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">clean</td>
    <td>pre-clean</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>clean</td>
    <td>maven-clean-plugin:clean</td>
    <td>清理 Maven 的输出目录</td>
  </tr>
  <tr>
    <td>post-clean</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="8">default</td>
    <td>process-resources</td>
    <td>maven-resources-plugin:resources</td>
    <td>复制资源文件到输出目录</td>
  </tr>
  <tr>
    <td>compile</td>
    <td>maven-compiler-plugin:compile</td>
    <td>编译代码到输出目录</td>
  </tr>
  <tr>
    <td>process-test-resources</td>
    <td>maven-resources-plugin:testResources</td>
    <td>复制测试资源文件到测试输出目录</td>
  </tr>
  <tr>
    <td>test-compile</td>
    <td>maven-compiler-plugin:testCompile</td>
    <td>编译测试代码到测试输出目录</td>
  </tr>
  <tr>
    <td>test</td>
    <td>maven-surefire-plugin:test</td>
    <td>执行测试用例</td>
  </tr>
  <tr>
    <td>package</td>
    <td>maven-jar-plugin:jar/maven-jar-plugin:war</td>
    <td>创建项目 jar/war 包</td>
  </tr>
  <tr>
    <td>install</td>
    <td>maven-install-plugin:install</td>
    <td>将项目输出的包文件安装到本地仓库</td>
  </tr>
  <tr>
    <td>deploy</td>
    <td>maven-deploy-plugin:deploy</td>
    <td>将项目输出的包文件部署到到远程仓库</td>
  </tr>
  <tr>
    <td rowspan="4">site</td>
    <td>pre-site</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>site</td>
    <td>maven-site-plugin:site</td>
    <td>生成项目站点</td>
  </tr>
  <tr>
    <td>post-site</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>site-deploy</td>
    <td>maven-site-plugin:deploy</td>
    <td>部署项目站点</td>
  </tr>
</tbody>
</table>

::: tip

上表中, default 生命周期中只列出了绑定了插件目标的阶段, 它还有很多其他的阶段, 但这些阶段默认没有绑定任何插件目标, 因此它们也没有任何实际的行为

:::

#### 自定义绑定

除了内置绑定之外, 用户也可以自己选择将某个插件目标绑定到 Maven 生命周期的某个阶段上, 这种绑定方式就是自定义绑定

自定义绑定能够让 Maven 在构建过程中执行更多更丰富的任务

例如, 有一个第三方的 jar 包不能通过 maven 仓库导入, 那么可以通过本地安装的方式导入本地库. 通过 build 元素的子元素 plugins, 将 `maven-install-plugin:install-file` 目标绑定到 clean 阶段上

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-install-plugin</artifactId>
      <version>2.5.2</version>
      <executions>
        <execution>
          <id>install-third-party-package</id>
          <phase>clean</phase>
          <goals>
            <goal>install-file</goal>
          </goals>
          <configuration>
            <file>${project.basedir}/lib/third-party-1.0.0.jar</file>
            <repositoryLayout>default</repositoryLayout>
            <groupId>third-party.groupId</groupId>
            <artifactId>third-party.artifactId</artifactId>
            <version>1.0.0</version>
            <packaging>jar</packaging>
            <generatePom>true</generatePom>
          </configuration>
        </execution>
      </executions>
    </plugin>
  </plugins>
</build>
```

execution 的说明:

- id: 任务的唯一标识
- phase: 插件目标需要绑定的生命周期阶段
- goals: 用于指定一组插件目标, 其子元素 goal 用于指定单个插件目标
- configuration: 该任务的配置

::: tip
当插件目标绑定到生命周期的不同阶段时, 其执行顺序由生命周期阶段的先后顺序决定. 如果多个目标绑定到同一个生命周期阶段, 其执行顺序与插件声明顺序一致, 先声明的先执行, 后声明的后执行
:::

## Maven 仓库

Maven 在某个统一的位置存储所有项目的构件, 这个统一的位置, 我们就称之为仓库. 任何的构件都有唯一的坐标, 该坐标定义了构件在仓库中的唯一存储路径. 当 Maven 项目需要某些构件时, 只要其 POM 文件中声明了这些构件的坐标, Maven 就会根据这些坐标找自动到仓库中找到并使用它们

项目构建完成生成的构件, 也可以安装或者部署到仓库中, 供其他项目使用

### 仓库的分类

```mermaid
graph TD
A(Maven仓库)-->B(本地仓库)
A-->C(远程仓库)
C-->D(中央仓库)
C-->E(私服)
C-->F(其他公共仓库)
```

- **本地仓库**: 运行 Maven 的计算机上的一个目录, 它缓存远程下载的构件并包含尚未发布的临时构件. `settings.xml` 文件中可以看到 Maven 的本地仓库路径配置, 默认本地仓库路径是在 `${user.home}/.m2/repository`
- **远程仓库**: 官方或者其他组织维护的 Maven 仓库

Maven 远程仓库又可以分为:

- **中央仓库**: 这个仓库是由 Maven 社区来维护的, 里面存放了绝大多数开源软件的包, 并且是作为 Maven 的默认配置, 不需要开发者额外配置. 另外为了方便查询, 还提供了一个[查询地址](http://search.maven.org), 开发者可以通过这个地址更快的搜索需要构件的坐标
- **私服**: 私服是一种特殊的远程 Maven 仓库, 它是架设在局域网内的仓库服务, 私服一般被配置为互联网远程仓库的镜像, 供局域网内的 Maven 用户使用
- **其他的公共仓库**: 有一些公共仓库是为了加速访问（比如[阿里云 Maven 镜像仓库](https://developer.aliyun.com/mvn/view)）或者部分构件不存在于中央仓库中

### 仓库的配置

修改 Maven 安装目录下的 `setting.xml` 文件

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
   http://maven.apache.org/xsd/settings-1.0.0.xsd">
  <!-- 通过 localRepository 指定本地仓库地址 -->
  <localRepository>D:/Maven/repository</localRepository>
  <!-- 通过 mirrors 下的 mirror 标签配置远程仓库（镜像）地址 -->
  <mirrors>
    <!-- 阿里云镜像地址 -->
    <mirror>
      <id>aliyun</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror>
    <!-- 华为云镜像地址 -->
    <mirror>
      <id>huaweicloud</id>
      <name>mirror from maven huaweicloud</name>
      <mirrorOf>central</mirrorOf>
      <url>https://repo.huaweicloud.com/repository/maven/</url>
    </mirror>
  </mirrors>
</settings>
```

### 依赖包的搜索顺序

当通过 Maven 构建项目时, Maven 按照如下顺序查找依赖的构件:

- 先去本地仓库找寻, 有的话, 直接使用
- 本地仓库没有找到的话, 会去远程仓库找寻, 下载包到本地仓库
- 远程仓库没有找到的话, 会报错

## Maven 构建生命周期

在 Maven 出现之前, 项目构建的生命周期就已经存在, 开发人员每天都在对项目进行清理, 编译, 测试及部署, 但由于没有统一的规范, 不同公司甚至不同项目之间的构建的方式都不尽相同

Maven 从大量项目和构建工具中学习和反思, 最后总结了一套高度完美的, 易扩展的生命周期. 这个生命周期将项目的清理、初始化、编译、测试、打包、集成测试、验证、部署和站点生成等几乎所有构建过程进行了抽象和统一

Maven 有以下三个标准的生命周期:

- clean: 项目清理的处理
- default(或 build): 项目部署的处理
- site: 项目站点文档创建的处理

### 特性

#### 构建阶段的依赖性

每个生命周期包含一系列的构建阶段（phase）, 这些阶段是有顺序的, 且后面的阶段依赖于前面的阶段

> 用户与 Maven 最直接的交互方式就是调用这些生命周期阶段

#### 生命周期的独立性

与构建阶段的前后依赖关系不同, 三套生命周期本身是相互独立的, 用户可以只调用 clean 生命周期的某个阶段, 也可以只调用 default 生命周期的某个阶段, 而不会对其他生命周期造成任何影响

### clean 生命周期

clean 生命周期包含以下 3 个阶段

| 阶段       | 描述                                    |
| ---------- | --------------------------------------- |
| pre-clean  | 执行一些需要在 clean 之前完成的工作     |
| clean      | 移除所有上一次构建生成的文件            |
| post-clean | 执行一些需要在 clean 之后立刻完成的工作 |

::: tip 如何理解阶段的依赖关系理论

以 clean 生命周期为例, 在上述 3 个阶段中

- 当用户调用 pre-clean 阶段时, 则只有 pre-clean 阶段执行
- 当用户调用 clean 阶段时, pre-clean 和 clean 阶段都会执行
- 当用户调用 post-clean 阶段时, 则 pre-clean、clean 以及 post-clean 三个阶段都会执行

:::

### default 生命周期

default 生命周期定义了项目真正构建时所需要的所有步骤, 它是所有生命周期中最核心, 最重要的部分

default 生命周期包含以下 23 个阶段

| 阶段                    | 描述                                                                     |
| ----------------------- | ------------------------------------------------------------------------ |
| validate                | 校验: 校验项目是否正确并且所有必要的信息可以完成项目的构建过程           |
| initialize              | 初始化: 初始化构建状态, 比如设置属性值                                   |
| generate-sources        | 生成源代码: 生成包含在编译阶段中的任何源代码                             |
| process-sources         | 处理源代码: 处理源代码, 比如说, 过滤任意值                               |
| generate-resources      | 生成资源文件: 生成将会包含在项目包中的资源文件                           |
| process-resources       | 处理资源文件: 复制和处理资源到目标目录, 为打包阶段最好准备               |
| compile                 | 编译: 编译项目的源代码                                                   |
| process-classes         | 处理类文件: 处理编译生成的文件, 比如说对 Java class 文件做字节码改善优化 |
| generate-test-sources   | 生成测试源代码: 生成包含在编译阶段中的任何测试源代码                     |
| process-test-sources    | 处理测试源代码: 处理测试源代码, 比如说, 过滤任意值                       |
| generate-test-resources | 生成测试资源文件: 为测试创建资源文件                                     |
| process-test-resources  | 处理测试资源文件: 复制和处理测试资源到目标目录                           |
| test-compile            | 编译测试源码: 编译测试源代码到测试目标目录.                              |
| process-test-classes    | 处理测试类文件: 处理测试源码编译生成的文件                               |
| test                    | 测试: 使用合适的单元测试框架运行测试（Juint 是其中之一）                 |
| prepare-package         | 准备打包: 在实际打包之前, 执行任何的必要的操作为打包做准备               |
| package                 | 打包: 将编译后的代码打包成可分发格式的文件, 比如 JAR、WAR 或者 EAR 文件  |
| pre-integration-test    | 集成测试前: 在执行集成测试前进行必要的动作比如说, 搭建需要的环境         |
| integration-test        | 集成测试: 处理和部署项目到可以运行集成测试环境中                         |
| post-integration-test   | 集成测试后: 在执行集成测试完成后进行必要的动作比如说, 清理集成测试环境   |
| verify                  | 验证: 运行任意的检查来验证项目包有效且达到质量标准                       |
| install                 | 安装: 安装项目包到本地仓库, 这样项目包可以用作其他本地项目的依赖         |
| deploy                  | 部署: 将最终的项目包复制到远程仓库中与其他开发者和项目共享               |

### site 生命周期

site 一般用来创建新的报告文档、部署站点等

site 生命周期包含以下 4 个阶段

| 阶段        | 描述                                                       |
| ----------- | ---------------------------------------------------------- |
| pre-site    | 执行一些需要在生成站点文档之前完成的工作                   |
| site        | 生成项目的站点文档                                         |
| post-site   | 执行一些需要在生成站点文档之后完成的工作, 并且为部署做准备 |
| site-deploy | 将生成的站点文档部署到特定的服务器上                       |

## Maven Profile

一个项目通常都会有多个不同的运行环境, 例如开发环境、测试环境、生产环境等。而不同环境的构建过程很可能是不同的, 例如数据源配置、插件、以及依赖的版本等, 每次将项目部署到不同的环境时, 都需要修改相应的配置, 这样重复的工作, 不仅浪费劳动力, 还容易出错. 为了解决这一问题, Maven 引入了 Profile 的概念, 通过它可以为不同的环境定制不同的构建过程

### Profile 的类型

Profile 可以分为 3 个类型, 它们的作用范围也各不相同

| 类型        | 位置                                                        | 有效范围                    |
| ----------- | ----------------------------------------------------------- | --------------------------- |
| Per Profile | Maven 项目的 pom.xml 中                                     | 只对当前 Maven 项目有效     |
| Per User    | 用户目录下（`%USER_HOME%`）的 `/.m2/setting.xml` 中         | 对该用户所有 Maven 项目有效 |
| Global      | Maven 安装目录的（`%MAVEN_HOME%`）的 `\conf\setting.xml` 中 | 对本机所有 Maven 项目有效   |

### Profile 的声明

Maven 通过 profiles 标签来声明一组 Profile 配置, 每一个 profile 对应一个 Profile 配置

比如常用的多环境 profile 配置:

```xml
<profiles>
  <profile>
    <!-- id 标识必填 -->
    <id>env-develop</id>
    <!-- 定义自定义的属性值 -->
    <properties>
      <!-- 这里的属性名标签（property.env）是支持自定义的 -->
      <property.env>dev</property.env>
    </properties>
  </profile>
  <profile>
    <id>env-test</id>
    <properties>
      <property.env>test</property.env>
    </properties>
  </profile>
</profiles>
```

在 Profile 中常用的 POM 元素如下表:

<table>
<thead>
  <tr><td>一级</td><td>二级</td><td>三级</td></tr>
</thead>
<tbody>
  <tr><td rowspan="18">project</td><td>repositories</td><td></td></tr>
  <tr><td>pluginRepositories</td><td></td></tr>
  <tr><td>dependencies</td><td></td></tr>
  <tr><td>plugins</td><td></td></tr>
  <tr><td>dependencyManagement</td><td></td></tr>
  <tr><td>distributionManagement</td><td></td></tr>
  <tr><td>modules</td><td></td></tr>
  <tr><td>properties</td><td></td></tr>
  <tr><td>reporting</td><td></td></tr>
  <tr><td rowspan="9">build</td><td>plugins</td></tr>
  <tr><td>defaultGoal</td></tr>
  <tr><td>resources</td></tr>
  <tr><td>testResources</td></tr>
  <tr><td>directory</td></tr>
  <tr><td>filters</td></tr>
  <tr><td>finalName</td></tr>
  <tr><td>pluginManagement</td></tr>
</tbody>
</table>

在 setting.xml 中声明的 Profile 是无法保证能够随着 pom.xml 一起被分发的, 因此 Maven 不允许用户在该类型的 Profile 修改或增加依赖或插件等配置信息, 它只能声明以下范围较为宽泛的元素

- repositories: 仓库配置
- pluginRepositories: 插件仓库配置
- properties: 键值对, 该键值对可以在 pom.xml 中使用

### Profile 的激活

Profile 能够在项目构建时, 修改 POM 中配置或者添加一些额外的配置元素. 用户可以通过多种方式激活 Profile, 以实现不同环境使用不同的配置, 执行不同的构建过程

Profile 可以通过以下 6 种方式激活:

- 命令行激活

在命令行中使用 `mvn` 命令行参数 `-P` 加上 Profile 的 id 来激活 Profile, 多个 id 之间使用逗号隔开

```shell
# 在 pom.xml 启动 test1, test2 两个 Profile
mvn clean install -Ptest1,test2
```

- settings.xml 文件显示激活

在本地仓库的 settings.xml 文件中添加如下配置, 激活指定的 Profile

```xml
<activeProfiles>
    <activeProfile>test</activeProfile>
</activeProfiles>
```

- 系统属性激活

用户可以配置当某个系统属性存在时, 激活指定的 Profile, 在 profile 标签添加如下配置:

```xml
<activation>
  <property>
    <name>user</name>
    <value>prod</value>
  </property>
</activation>
```

执行命令 `mvn clean test -Duser=prod`, 就会自动激活这个 Profile

- 操作系统环境激活

Maven 还可以根据操作系统环境自动激活指定的 Profile, 在 profile 标签添加如下配置:

```xml
<activation>
  <os>
    <name>Windows 10</name>
    <family>Windows</family>
    <arch>amd64</arch>
    <version>10.0</version>
  </os>
</activation>
```

- 文件存在与否激活

Maven 可以根据某些文件存在与否, 来决定是否激活 Profile, 在 profile 标签添加如下配置:

```xml
<!-- 当存在 env.prod.properties 存在且 env.test.properties 不存在时, 该 Profile 会激活 -->
<activation>
  <file>
    <exists>./src/main/resources/env.prod.properties</exists>
    <missing>./src/main/resources/env.test.properties</missing>
  </file>
</activation>
```

- 默认激活

可以在声明 Profile 时, 指定其默认激活, 在 profile 标签添加如下配置:

```xml
<activation>
  <activeByDefault>true</activeByDefault>
</activation>
```
