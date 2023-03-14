---

title: "windows开启SSH服务器"
description: "windows10开始默认自带openssh组件"
date: 2019-11-13T12:00:00
lastmod: 2019-11-13T12:00:00
timezone: UTC+8
draft: false
tags: ["windows", "ssh"]
categories: ["ssh"]
author: "zyscn"

---
<!--more-->

# SSH服务器

## 安装 openssh

- 设置-应用-应用和功能-管理可选功能-添加功能-OpenSSH 服务器

## 开启SSH 服务

PowerShell 管理员运行：

- 启动 SSH 服务`net start sshd`

```powershell
net start sshd
```
- 启动成功显示：
`OpenSSH SSH Server 服务正在启动 .`
`OpenSSH SSH Server 服务已经启动成功。`

- 停止 SSH 服务`net stop sshd`

```powershell
net stop sshd
```
`OpenSSH SSH Server 服务已成功停止。`

##　在 Windows 中为 OpenSSH 配置默认 shell

- PowerShell 管理员运行：

```powershell
New-ItemProperty -Path "HKLM:\SOFTWARE\OpenSSH" -Name DefaultShell -Value "C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -PropertyType String -Force
```

# SSH客户端

命令`ssh username@127.0.0.1`即`ssh 用户名@用户ip`
