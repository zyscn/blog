---

title: "python封装四个常用PHP函数"
description: "python封装四个常用PHP函数，ksort，implode，md5，base64_encode"
date: 2022-05-25
lastmod: 2022-05-25
timezone: UTC+8
draft: false
tags: ["python","php"]
categories: ["python"]
author: "zyscn"

---
<!--more-->
```python
from collections import OrderedDict
import hashlib
import base64

def ksort(obj):
    sorted_obj = sorted(obj)
    d = OrderedDict()
    i = 0
    for key in sorted_obj:
        if isinstance(obj[key], dict):
            d[sorted_obj[i]] = ksort(obj[key])
        else:
            d[sorted_obj[i]] = obj[key]
        i += 1
    return d
def implode(obj):
    return "".join(map(str, obj))

def md5(obj):
    md5 = hashlib.md5()
    md5.update(obj.encode(encoding='utf-8'))
    return md5.hexdigest()
def base64_encode(obj):
    return base64.b64encode(obj.encode()).decode()
```

