---

title: "python调用大漠插件"
date: 2020-02-03T12:00:00
lastmod: 2020-02-03T12:00:00
timezone: UTC+8
draft: false
tags: ["python","dll"]
categories: ["python"]
author: "zyscn"

---


## 利用init破解权限和免注册com

```python
#coding=utf-8
from ctypes import windll
from comtypes import client

#加载init.dll
Reg = windll.LoadLibrary("D:\dm\init.dll")
Reg.init()
dm=client.CreateObject("dm.dmsoft")
print(dm.ver())
dm.MoveTO(10,10)
```

