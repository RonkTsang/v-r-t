# `JSON`

Viola 前端层与 Native 层的通讯格式是 JSON 格式，什么是 JSON ？

> `JSON` 是一种语法，用来序列化对象、数组、数值、字符串、布尔值和 `null` 。它基于 `JavaScript` 语法，但与之不同： `JavaScript` 不是 `JSON`，`JSON` 也不是`JavaScript`

所以了解到的是 **JSON 绝不是 Javascript 的 Object，尽管长的有点像，但永远都不是！！**

也就是当我们传一个 domObj 给 Native 时，应该规范地将 Object 转换成 JSON，那么怎么转换呢？

## `JSON.stringify` & `JSON.parse`

## `toJSON`

## replacer

replacer
> 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中