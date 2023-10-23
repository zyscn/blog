---

title: "rust导出Dll"
summary: "windows rust 导出 动态库文件"
date: 2020-02-02T12:00:00
lastmod: 2020-02-02T12:00:00
timezone: UTC+8
draft: false
tags: ["rust", "dll"]
categories: ["rust"]
author: "zys"

---

## rust导出dll

### 首先创建lib项目

> cargo new addlib -lib

### 编辑lib.rs
```rust
//添加一个标记 #[no_mangle]，防止编译器在编译的时候，重命名函数。

#[no_mangle]

//pub 公开 extern,导出

//"stdcall"是调用约定ABI，rust支持stdcall，aapcs，cdecl，fastcall，vectorcall，Rust，rust-intrinsic，system，C，win64，sysv64

pub  extern  "stdcall"  fn  add(a: i32,b:i32) -> i32 {

return a+b;

}
```


### 编辑cargo.toml，添加
```toml
[lib]
name="addlib"
crate-type = ["cdylib"]
```
### 终端运行
```sh
cargo build --release
```
编译成功之后会在相关目录生成动态库文件。
