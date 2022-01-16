---

title: "nodejs调用dll"
date: 2021-10-06T11:00:00+08:00
lastmod: 2021-10-06T11:00:00+08:00
draft: false
tags: ["JavaScript", "nodejs"]
categories: ["JavaScript"]
author: "zys"

---
# nodejs通过ffi-napi调用系统dll文件


```js
const ffi = require('ffi-napi');

function showText(str) {
  return  Buffer.from(str+'\0','ucs2');
};
// 通过ffi加载user32.dll
const myUser32 = new ffi.Library('user32', {
  'MessageBoxW': // 声明这个dll中的一个函数
    [
      'int32', ['int32', 'string', 'string', 'int32'], // 用json的格式罗列其返回类型和参数类型
    ],
});

// 调用user32.dll中的MessageBoxW()函数, 弹出一个对话框
myUser32.MessageBoxW(
    0, showText('I am Node.JS!'), showText('你好，世界!'), 1
);
```
