# python调用大漠插件



## 利用init破解权限和免注册com

```python
#coding=utf-8
from ctypes import windll
from comtypes import client

#加载init.dll
Reg = windll.LoadLibrary("./init.dll")
Reg.init()
dm=client.CreateObject("dm.dmsoft")
print(dm.ver())
dm.MoveTO(10,10)
```
[附件](https://mega.lanzous.com/iFkDAelptti)


