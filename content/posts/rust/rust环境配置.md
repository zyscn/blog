---

title: "rust环境配置"
summary: "rust安装"
date: 2020-02-01T10:00:00
lastmod: 2020-02-01T10:00:00
timezone: UTC+8
draft: false
tags: ["rust", "编程"]
categories: ["rust"]
author: "zys"

---

## 官网下载初始化包

[官网](https://www.rust-lang.org/zh-CN/learn/get-started)

## 根据初始化包安装对应的工具
- 主要安装rustup和cargo工具链

## 国内原因换源
### rustup源
-  linux
    ```
    $ # for bash
    $ echo 'export RUSTUP_DIST_SERVER=https://mirrors.tuna.tsinghua.edu.cn/rustup' >> ~/.bash_profile

    ```
- windows

    修改环境变量：

    变量名为
    ```
    RUSTUP_DIST_SERVER
    ```
    变量值为
    ```
    https://mirrors.tuna.tsinghua.edu.cn/rustup
    ```
### cargo源

- windows
    ```
    # 新建 %USERPROFILE%\.cargo\config 
    [source.crates-io]
    replace-with = "rustcc"

    [source.rustcc]
    registry = "https://code.aliyun.com/rustcc/crates.io-index"
    ```
- linux
    ```
    tee $HOME/.cargo/config <<-'EOF'
    [source.crates-io]
    replace-with = "rustcc"

    [source.rustcc]
    registry = "https://code.aliyun.com/rustcc/crates.io-index"

    ```

## 配置ide

- 安装vscode后，安装rust(rls)插件,用cargo new hello_cargo新建工程文件，打开工程按照提示安装rls等工具。
- 调试环境，windows安装C/C++插件，linux安装codelldb插件

- 配置launch.json调试文件如下：

    ```

        {
        "version": "0.2.0",
        "configurations": [
                "name": "Debug",
                "type": "cppvsdbg",
                "request": "launch",
                //调试程序位置
                "program": "${workspaceFolder}/target/debug/YOUR_EXECUTABLE.exe",
                "args": [],
                "stopAtEntry": false,
                "externalConsole": false,
                "preLaunchTask": "cargo build",
                "type": "cppvsdbg",
                // rust源码文件
                "sourceFileMap": {
                    "/rustc/4560ea788cb760f0a34127156c78e2552949f734": "${env:HOME}${env:USERPROFILE}\\.rustup\\toolchains\\stable-x86_64-pc-windows-msvc\\lib\\rustlib\\src\\rust"
                }
            ]
        }

    ```


[rust中文文档](https://kaisery.github.io/trpl-zh-cn/ch01-03-hello-cargo.html)