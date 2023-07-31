---

title: "python调用libxl插件"
summary: "python调用libxl插件无需安装excel软件处理excel表格"
date: 2021-09-28T12:00:00
lastmod: 2021-09-28T12:00:00
timezone: UTC+8
draft: false
tags: ["python","dll"]
categories: ["python"]
author: "zyscn"

---

[libxl官网](https://www.libxl.com/)

## 封装libxl.py示例

```python
#coding=utf-8
from ctypes import *

class Excel:
        def __init__(self):
            self.xl = CDLL("./libxl.dll")
        def getxl(self):
            return self.xl
        def createXML(self):
            bhandle = self.xl.xlCreateXMLBookCA()
            return bhandle
class Book:
    def __init__(self,excel,bhandle):
        self.xl = excel
        self.bookhandle = bhandle
    def pr(self):
        print(self.bookhandle)
    def setKey(self):
        self.xl.xlBookSetKeyA (self.bookhandle, b"HeiYe", b"windows-2220200f01c5e9016fb86160afo5raf1")
    def createXML(self):
        self.bookhandle = self.xl.xlCreateXMLBookCA()
    def addSheet(self,sheetname):
        shandle=self.xl.xlBookAddSheetA (self.bookhandle, sheetname,0)
        return shandle
    def save(self,name):
        self.xl.xlBookSaveA (self.bookhandle, name)
    def release(self):
        self.xl.xlBookReleaseA (self.bookhandle)
class Sheet:
    def __init__(self,excel,shandle):
        self.xl = excel
        self.sheethandle = shandle
    def writestr(self,x,y,string):
        self.xl.xlSheetWriteStrA (self.sheethandle, x, y, string, 0)
```
## 调用libxl.py示例，将libxl.py和stdcall形式的libxl.dll放到同一个目录下
```python
from libxl import *
excel = Excel()
bh = excel.createXML()
xl = excel.getxl()
book = Book(xl,bh)
book.setKey()
sh = book.addSheet(b"sheet1")
sheet = Sheet(xl, sh)
sheet.writestr(0, 0, "Hello World! 你好".encode("gbk"))
book.save(b"test.xlsx")
book.release()
```
