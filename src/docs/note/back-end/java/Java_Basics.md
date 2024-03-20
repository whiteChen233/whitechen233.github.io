---
title: Java 基础
date: 2024-03-14
---

## Java 语言的特点

- 是一种面向对象的语言
- 平台无关性(Java 虚拟机从底层屏蔽了硬件差别, 实现平台无关性)
- 支持网络编程
- 支持多线程
- 具有较高的可靠性和安全性

### Java 与 C++ 的区别

Java 和 C++ 都是面向对象语言, 都支持封装、继承、多态

- Java 通过虚拟机实现跨平台特性; C++ 依赖特定的平台
- Java 支持自动垃圾回收; C++ 需要手动回收
- Java 没有指针, 更加安全; C++ 具有和 C 一样的指针
- Java 不支持多继承, 只能通过实现多个接口来达到相同目的; C++ 支持多继承
- Java 只支持方法重载(操作符重载增加了复杂性, 这与 Java 的设计思想不符); C++ 支持方法重载和操作符重载

### 接口和抽象类的区别

**共同点**:

- 都不能被实例化
- 都可以包含抽象方法
- 都可以包含默认实现的方法(JDK 1.8 可以用 `default` 声明默认方法)

**不同点**:

- 接口主要用于对类的行为进行约束, 实现某个接口就具有了对应的行为. 抽象类主要用于代码复用, 强调的是所属关系
- 一个类只能继承一个类, 但是可以实现多个接口
- 接口中的成员变量只能被 `publi static final` 修饰, 它不能被修改且必须有初始值, 而抽象类的成员变量默认 default, 在子类中可以被重新定义以及重新赋值
- 把系统中很多类的共同特性拿出来进行封装, 变成了一个抽象类

> **接口是自上而下的; 抽象是自下而上的**

## Java 的数据类型

### 基本数据类型(primitive type)

Java 语言提供了八种基本类型, 六种数字类型(四个整型、两个浮点型), 一种字符类型, 一种布尔类型

| 类型             | 关键字  | 包装类    | 占用内存(字节) | 位数 | 取值范围             | 默认值  |
| ---------------- | ------- | --------- | -------------- | ---- | -------------------- | ------- |
| 字节型           | byte    | Byte      | 1              | 8    | $-2^7$~$2^7-1$       | 0       |
| 短整型           | short   | Short     | 2              | 16   | $-2^{15}$~$2^{15}-1$ | 0       |
| 整型             | int     | Integer   | 4              | 32   | $-2^{31}$~$2^{31}-1$ | 0       |
| 长整型           | long    | Long      | 8              | 64   | $-2^{63}$~$2^{63}-1$ | 0L      |
| 单精度浮点型     | float   | Float     | 4              | 32   |                      | 0.0F    |
| 双精度浮点字节型 | double  | Double    | 8              | 64   |                      | 0.0D    |
| 字符型           | char    | Character | 2              | 16   | 0~$2^{16}-1$         | 'u0000' |
| 布尔型           | boolean | Boolean   |                | 1    | true/false           | false   |

#### 隐式(自动)类型转换和显示(强制)类型转换

- 隐式(自动)类型转换: 从存储范围小的类型到存储范围大的类型
  - `byte` -> `short(char)` -> `int` -> `long` -> `float` -> `double`
- 显示(强制)类型转换: 从存储范围大的类型到存储范围小的类型
  - `double` -> `float` -> `long` -> `int` -> `short(char)` -> `byte`
  - 从大存储范围转换到小存储范围很可能存在精度的损失
- `boolean` 不能进行转换

#### 自动装箱与拆箱

- 装箱: 将基本类型用包装类型包装起来
- 拆箱: 将包装类型转换为基本类型

```java
public void test() {
    Integer i = 10;     // 装箱 ==> Integer i = Integer.valueOf(10);
    int a = i;          // 拆箱 ==> Integer a = i.intValue();

    List<Integer> list = new ArrayList<>();
    list.add(a);        // 装箱
}
```

> 为什么需要自动装箱与拆箱呢?
>
> 把基本类型包装成类, 一方面可以使这个类型具有很多可以调用的方法; 另一方面 Java 是面向对象语言, 基本类型不符合面向对象的操作逻辑

自动装箱都是调用包装类的 `valueOf()` 方法实现的; 而自动拆箱都是调用包装类型对应的 `xxxValue()` 方法实现的

::: caution

如果频繁拆装箱的话, 也会严重影响系统的性能, **所以我们应该尽量避免不必要的拆装箱操作**

```java
private long sum() {
    // 应该使用 long 而不是 Long
    Long sum = 0L;
    for (long i = 0; i <= Integer.MAX_VALUE; i++)
        sum += i;
    return sum;
}
```

:::

#### Cache 机制

Java 基本数据类型的包装类中大部分都用到了缓存机制来提升性能

`Byte`、`Short`、`Integer`、`Long`、`Character` 这几个包装类都有一个 `xxxCache` 的内部类, `Boolean` 直接定义了 `TRUE` 和 `FALSE`, 而 `Float` 和 `Double` 没有实现这个机制

其中 `Byte`、`Short`、`Integer`、`Long` 的取值范围都是 `[-128, 127]`, `Character` 的取值范围是 `[0, 127]`

### 引用数据类型(reference type)

引用数据类型是建立在八大基本数据类型基础之上，包括数组([])、接口(interface)、类(Class)

#### 如何区分基本类型和引用类型

- 基本类型不能赋值为 null, 而引用类型可以
- 基本类型都有其对应的引用类型
- 引用类型都需要通过 new 关键字来创建
- 引用类型不能使用 `+` `-` `*` `/` `%` 数学运算

## 关键字

Java 语言为关键字赋予了特殊含义, 用作专门用途的字符串(单词), 这些关键字不能用于常量、变量、和任何标识符的名称

[JDK 8 的官方文档](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html)

> `true`、`false` 和 `null` 可能看起来像关键字, 但它们实际上是字面量

### 分类

可以根据适用场景对关键字进行简单的分类

#### 访问控制

| 关键字    | 含义     | 备注         |
| --------- | -------- | ------------ |
| public    | 公有的   | 都可用       |
| protected | 受保护的 | 当前包内可用 |
| private   | 私有的   | 当前类可用   |

#### 声明类以及类关系

| 关键字     | 含义         |
| ---------- | ------------ |
| class      | 声明类       |
| interface  | 声明接口     |
| abstract   | 声明抽象类   |
| enum       | 声明枚举类   |
| implements | 声明实现关系 |
| extends    | 声明继承关系 |
| new        | 创建新对象   |

还有一些可以用于修饰类、方法或者变量的: `final`、`static`、`synchronized`、`transient`、`volatile`、`strictfp`、`native`

变量引用: `this`、`super`

#### 包相关

- package: 定义包
- import: 引入依赖包

#### 数据类型

- 8种基本数据类型: `byte`、`short`、`int`、`long`、`float`、`double`、`char`、`boolean`
- 空返回值: `void`

#### 流程控制&异常处理

- 流程控制: `break`、`continue`、`return`、`do`、`while`、`if`、`else`、`for`、`instanceof`、`switch`、`case`、`default`、`assert`
- 异常处理: `try`、`catch`、`throw`、`throws`、`finally`

#### 保留字

`goto`、`const`

## String

在 JDK 1.8 中, `String` 内部使用 `char[]` 存储数据, 并且被声明为 `final`, 所以它不能被继承

```java
public final class String
    implements java.io.Serializable, Comparable<String>, CharSequence {

    private final char value[];
}
```

### String 的不可变

#### 为什么 String 不可变

- 保存字符串的数组是被 `final` 修饰且为私有的, 并且 `String` 类没有提供修改这个变量的方法
- `String` 类被 `final` 修饰使其不能被继承, 从而避免子类破坏 `String` 不可变

#### 为什么 String 要设计成不可变

- 可以缓存 `hash` 值: 因为 `String` 的 `hash` 值经常被使用(例如把 `String` 用做 `HashMap` 的 key), 不可变性保证了 `hash` 值不会发生变化
- 常量池优化: `String` 对象创建之后, 会在字符串常量池中进行缓存, 如果下次创建同样的对象, 会直接返回缓存的引用
- 线程安全: 不可变性天生具备线程安全性, 可以在多线程中安全地使用

### 字符串常量池

字符串常量池位于堆内存中, 专门用来存储字符串常量的引用, 可以提高内存利用率, 避免开辟多快空间存储相同的字符串, 在创建字符串时 JVM 会先检查字符串常量池, 如果该字符串已经存在池中, 则返回它的引用, 如果不存在, 则会实例化一个字符串放入池中, 再返回它的引用

#### String#intern 方法

`String.intern()` 是一个 native 方法, 其作用是将指定的字符串对象的引用保存到字符串常量池中, 如果字符串常量池存在该字符串对象的引用, 就直接返回; 如果字符串常量池中没有保存对应的字符串对象的引用, 那就创建一个指向该字符串对象的引用并返回

### String 和 StringBuffer 以及 StringBuilder 的区别

`StringBuilder` 和 `StringBuffer` 都继承自 `AbstractStringBuilder` 类, `AbstractStringBuilder` 底层是使用字符数组来保存字符串的, 并且没有 `final` 和 `private` 修饰, 而且这个类本身也提供了很多修改字符串的方法

- 不变性: String 不可变, StringBuffer 和 StringBuilder 是可变的
- 线程安全性: String 不可变, 肯定是线程安全的; StringBuilder 通过对方法添加同步锁或者对调用的方法添加同步锁, 也是线程安全的; StringBuilder 没有对方法加锁, 所以线程不安全
- 性能: `StirngBuffer > StringBuilder > String`

关于三者的适用场景:

- 操作少量的数据, 适合 `String`
- 单线程操作字符串缓冲区下操作大量数据, 适用 `StringBuilder`
- 多线程操作字符串缓冲区下操作大量数据, 适用 `StringBuffer`

## Object

### Object 常见方法

```java
/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */
public final native Class<?> getClass()
/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */
public native int hashCode()
/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */
public boolean equals(Object obj)
/**
 * native 方法，用于创建并返回当前对象的一份拷贝。
 */
protected native Object clone() throws CloneNotSupportedException
/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */
public String toString()
/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */
public final native void notify()
/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */
public final native void notifyAll()
/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */
public final native void wait(long timeout) throws InterruptedException
/**
 * 多了 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。
 */
public final void wait(long timeout, int nanos) throws InterruptedException
/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */
public final void wait() throws InterruptedException
/**
 * 实例被垃圾回收器回收的时候触发的操作
 */
protected void finalize() throws Throwable { }
```

### hashCode 和 equals
