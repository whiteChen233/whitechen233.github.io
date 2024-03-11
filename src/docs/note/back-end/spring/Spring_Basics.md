---
title: Spring 基础
date: 2024-03-09
---

## 核心机制 IoC 和 AOP

### IoC

IOC, 即Inversion of Control, 中文翻译为“控制反转”. 它是面向对象编程中的一种设计原则, 可以用来降低代码之间的耦合度. 在传统的编程方式中, 我们直接在对象内部通过new进行创建对象, 这种方式会造成对象与对象之间的高耦合度, 不利于代码的维护和扩展. 而控制反转就是将原本由代码直接操控的对象的调用权交给第三方（例如一个容器）来控制, 以解耦代码, 提高程序的可扩展性和可维护性

IoC 是 Spring 框架的各个功能模块的基础, 是创建和管理对象的容器

#### 创建 IoC 容器的方式

有两种, 基于 XML 的方式和基于注解的方式

假设有如下的配置类

```java
@Data
public class AppConfig {

    private String username;

    private String password;
}
```

- 基于 XML 的方式配置和使用

  在项目中的 resources 下创建一个 `applicationContext.xml` 的配置文件, 内容如下:

  ```xml{16-19}
  <?xml version="1.0" encoding="UTF-8"?>
  <beans xmlns="http://www.springframework.org/schema/beans"
      xmlns:context="http://www.springframework.org/schema/context"
      xmlns:aop="http://www.springframework.org/schema/aop"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:tx="http://www.springframework.org/schema/tx"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
          http://www.springframework.org/schema/beans/spring-beans.xsd
          http://www.springframework.org/schema/context
          http://www.springframework.org/schema/context/spring-context.xsd
          http://www.springframework.org/schema/aop
          http://www.springframework.org/schema/aop/spring-aop.xsd
          http://www.springframework.org/schema/tx
          http://www.springframework.org/schema/tx/spring-tx.xsd">

      <bean id="config" class="com.demo.AppConfig">
          <property name="username" value="root" />
          <property name="password" value="root" />
      </bean>

  </beans>
  ```

  然后在代码中使用 XML 的方式获取 AppConfig 对象

  ```java{3-4}
  public class Test {
      public static void main(String[] args) {
          ApplicationContext context =
              new ClassPathXmlApplicationContext("applicationContext.xml");
          System.out.println(context.getBean("config"));
      }
  }
  ```

- 基于注解的方式配置与使用

  - 配置类: 通过一个 Java 类来替代 XML 文件, 把在 XML 中配置的内容放到配置类中

    首先创建一个配置类, 如下:

    ```java{1,4}
    @Configuration
    public class AppConfiguration {

        @Bean
        public AppConfig config() {
            AppConfig config = new AppConfig();
            config.setUsername("root");
            config.setPasswrod("root");
            return config;
        }
    }
    ```

    然后在代码中使用如下的方式获取 AppConfig 对象:

    ```java{3-4}
    public class Test {
        public static void main(String[] args) {
            ApplicationContext context =
                new AnnotationConfigApplicationContext(Configuration.class);
            System.out.println(context.getBean("config"));
        }
    }
    ```

  - 扫包 + 注解

    更简单的方式, 既不需要依赖于 XML 文件也不需要配置类, 而是直接将 Bean 的创建交给目标类, 仅需要在目标类添加注解就能实现:

    ```java{2,5,8}
    @Data
    @Component
    public class AppConfig {

        @Value("root")
        private String username;

        @Value("root")
        private String password;
    }
    ```

    使用的时候跟注解方式是类似的:

    ```java{3-4}
    public class Test {
        public static void main(String[] args) {
            ApplicationContext context =
                new AnnotationConfigApplicationContext("com.demo");
            System.out.println(context.getBean("config"));
        }
    }
    ```

### AOP

AOP, 即Aspect-Oriented Programming, 中文翻译为“面向切面编程”. 它是面向对象编程的一种补充, 用于处理一些具有横切性质的系统级服务, 如事务管理、日志、安全等. AOP通过预编译方式和运行期动态代理实现程序功能的统一维护的一种技术. AOP是OOP的延续, 是软件开发中的一个热点, 也是Spring框架中的一个重要内容, 是函数式编程的一种衍生范型. 利用AOP可以对业务逻辑的各个部分进行隔离, 从而使得业务逻辑各部分之间的耦合度降低, 提高程序的可重用性, 同时提高了开发的效率

AOP 也是以 IoC 为基础的, 它把切面这种抽象的概念也看成是对象, 变成了抽象化的面向对象

Spring AOP 是基于动态代理的, 如果要代理的对象实现了某个接口, 那么 Spring AOP 会使用 JDK Proxy 去创建代理对象, 而对于没有实现接口的对象, Spring AOP 就会使用 Cglib 生成一个被代理对象的子类来作为代理

#### AOP 的一些术语

| 术语                     | 含义                                                                |
| ------------------------ | ------------------------------------------------------------------- |
| Aspect（切面）           | 切入点(Pointcut)+通知(Advice)                                       |
| JoinPoint（连接点）      | 目标对象的所属类中, 定义的所有方法均为连接点                        |
| Advice（通知）           | 增强的逻辑/代码, 也即拦截到目标对象的连接点之后要做的事情           |
| PointCut（切点）         | 被切面拦截/增强的连接点（切入点一定是连接点, 连接点不一定是切入点） |
| Introduction（引入）     | 可以声明额外的方法或字段                                            |
| TargetObject（目标对象） | 被通知的对象                                                        |
| AOP Proxy（AOP代理）     | 向目标对象应用通知之后创建的代理对象                                |
| Weaving（织入）          | 将通知应用到目标对象,进而生成代理对象的过程动作                     |

[AOP Concepts](https://docs.spring.io/spring-framework/docs/5.3.33-SNAPSHOT/reference/html/core.html#aop-introduction-defn) 可以查看更详细的介绍

#### Spring AOP 和 AspectJ AOP 的区别

- Spring AOP 属于运行时增强, 而 AspectJ 是编译时增强
- Spring AOP 基于代理(Proxying), 而 AspectJ 基于字节码操作(Bytecode Manipulation)
- Spring AOP 已经集成了 AspectJ , AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了
- AspectJ 相比于 Spring AOP 功能更加强大, 但是 Spring AOP 相对来说更简单, 如果我们的切面比较少, 那么两者性能差异不. 但是, 当切面太多的话, 最好选择 AspectJ , 它比 Spring AOP 快很多

::: info AspectJ 的织入方式

- compile-time: 编译期织入, 织入对象是 .class 文件
- post-compile: 后编译期织入, 织入对象是 class 字节码或者 jar 文件
- load-time: 加载期织入, 在类加载进虚拟机之前织入

:::

Spring AOP 虽然使用 AspectJ 中的注解, 但是 Spring AOP 并不是用 AspectJ 实现的, Spring 只是借用了 AspectJ 的语法提供了一套基于动态代理的 AOP 实现, Spring 官方称其为 `@AspectJ style`, 受限于动态代理, Spring AOP 只支持方法级别的切面

#### AOP 的应用场景

- 日志打印
- 事务处理
- 权限控制
