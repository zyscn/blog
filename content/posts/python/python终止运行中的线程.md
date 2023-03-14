---
title: "python线程操作"
description: "python多线程程序运行"
date: 2022-05-19T00:00:00
lastmod: 2022-09-19T00:00:00
timezone: UTC+8
draft: false
tags: ["python","线程"]
categories: ["python"]
author: "zyscn"
---
<!--more-->
```python
import threading
import time
import inspect
import ctypes
 
 
def _async_raise(tid, exctype):
    """raises the exception, performs cleanup if needed"""
    tid = ctypes.c_long(tid)
    if not inspect.isclass(exctype):
        exctype = type(exctype)
    res = ctypes.pythonapi.PyThreadState_SetAsyncExc(tid, ctypes.py_object(exctype))
    if res == 0:
        raise ValueError("invalid thread id")
    elif res != 1:
        # """if it returns a number greater than one, you're in trouble,
        # and you should call it again with exc=NULL to revert the effect"""
        ctypes.pythonapi.PyThreadState_SetAsyncExc(tid, None)
        raise SystemError("PyThreadState_SetAsyncExc failed")
 
 
def stop_thread(thread):
    _async_raise(thread.ident, SystemExit)
 
 
def test():
    while True:
        for i in range(1,1000):
            time.sleep(0.1)
            print(str(i))
            
def test1():
    while True:
        for i in range(200,1000):
            time.sleep(0.1)
            print(str(i))
 
if __name__ == "__main__":
    t = threading.Thread(target=test)
    t1 = threading.Thread(target=test1)
    t.start()
    t1.start()
    time.sleep(5.2)
    print("t thread sleep finish")
    print("t2 thread sleep finish")
    stop_thread(t)
    stop_thread(t1)
```

