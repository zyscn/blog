---

title: "git push常见问题"
summary: "push常见错误"
date: 2019-10-08T12:00:00
lastmod: 2019-10-08T12:00:00
timezone: UTC+8
draft: false
tags: ["git", "error"]
categories: ["git"]
author: "zys"

---

# git push常见问题

## fatal: refusing to merge unrelated histories

在git pull或者git push中都有可能会遇到，这是因为两个分支没有取得关系，解决办法是在操作命令后面加```--allow-unrelated-histories```

## error: failed to push some refs to

解决方案：首先```git pull origin master --allow-unrelated-histories```