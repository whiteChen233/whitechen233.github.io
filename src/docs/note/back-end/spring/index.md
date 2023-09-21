---
title: Spring 简介
date: 2023-03-15
---

## Spring 是什么

![Spring](/assets/note/be/spring.svg =400x)

## Spring 模块依赖

```mermaid
graph TD
  spring-test
  spring-websocket-->A[spring-web]
  spring-webflux-->spring-webmvc-->A-->a[spring-context-support]
  spring-aspects-->spring-orm-->a-->spring-jdbc-->b[spring-tx]
  spring-jms-->b-->B[spring-context]
  B-->spring-aop-->spring-beans-->C[spring-core]
  A-->spring-oxm-->B-->spring-expression-->C
  B-->spring-instrument
  classDef red-bg fill:green
  class A,B,C red-bg
```
