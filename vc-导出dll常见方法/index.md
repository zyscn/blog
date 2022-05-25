# VC++导出Dll常见方法


# 调用约定 _stdcall,_cdecl
1. _stdcall调用

   * 按C编译方式，_stdcall调用约定在输出函数名前面加下划线，后面加“@”符号和参数的字节数，形如_func@12

2.  _cdecl调用
    *  _cdecl是C/C++的缺省调用方式，参数采用从右到左的压栈方式，由调用者完成压栈操作 ，传送参数的内存栈由调用者维护。
_cedcl约定的函数只能被C/C++调用，每一个调用它的函数都包含清空堆栈的代码，所以产生的可执行文件大小会比调用_stdcall函数的大。
按C编译方式，_cdecl调用约定仅在输出函数名前面加下划线，形如_functionname。

3. 区别
   * 在跨（开发） 平台的调用中，我们都使用_stdcall（虽然有时是以WINAPI的样子出现）。当遇到这样的函数如 fprintf()它的参数是可变的，不定长的，被调用者事先无法知道参数的长度，事后的清除工作也无法正常的进行，因此，这种情况我们只能使用 _cdecl。如果你的程序中没有涉及可变参数，最好使用__stdcall关键字。
```cpp
//add.cpp
int __stdcall Add(int a, int b) {
	return a + b;
}
//__stdcall可不写,但是要在项目中设置
```
# 导出Add.dll方式有两种
## 1-模块定义(.def) 文件声明,函数名不变化
```def
LIBRARY   Add
EXPORTS
   Add   @1
```
## 2-导出函数 _declspec(dllexport)

```h
//add.h头文件
#ifndef ADD_H
#define ADD_H
#ifdef __cplusplus         // if used by C++ code
extern "C" {                  // we need to export the C interface
#endif

	__declspec(dllexport) int  Add(int a, int b);

#ifdef __cplusplus
}
#endif
#endif
```
